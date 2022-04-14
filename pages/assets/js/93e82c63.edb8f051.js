"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[9304],{4464:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"wifi6","metadata":{"permalink":"/pages/blog/wifi6","source":"@site/blog/2022-04-13-gigabit-wifi-mt7915.md","title":"Gigabit WiFi with SPR & the 4x4 MT7915","description":"About this post","date":"2022-04-13T00:00:00.000Z","formattedDate":"April 13, 2022","tags":[{"label":"SPR","permalink":"/pages/blog/tags/spr"},{"label":"wifi6","permalink":"/pages/blog/tags/wifi-6"},{"label":"80211ax","permalink":"/pages/blog/tags/80211-ax"}],"readingTime":2.295,"truncated":false,"authors":[{"name":"Alex Radocea","title":"Network Wrangler","url":"https://twitter.com/defendtheworld","key":"ltsrad"}],"frontMatter":{"slug":"wifi6","title":"Gigabit WiFi with SPR & the 4x4 MT7915","authors":"ltsrad","tags":["SPR","wifi6","80211ax"]},"nextItem":{"title":"Running SPR on a Mini PC with WiFi 6","permalink":"/pages/blog/spr_mini_pc"}},"content":"## About this post\\n\\nIn this blog we\'ll cover how to configure hostapd with the mt7915 to run 160 MHz channels over 5ghz.\\nThis allows stations to break gigabit speeds for WiFi with only 2 spatial streams.\\n\\n## Requirements\\n\\n- A 160Mhz capable card on the SPR device, for example [AsiaRF\'s AW7915-NP1](https://www.asiarf.com/shop/wifi-wlan/wifi_mini_pcie/wifi6-4t4r-dual-bands-selectable-mpcie-card-ieee802-11ax-ac-a-b-g-n-2-4g-5ghz-aw7915-np1/)\\n- 160MHz capable client wifi card, such as [Intel\'s AX210](https://www.intel.com/content/www/us/en/products/sku/204836/intel-wifi-6e-ax210-gig/specifications.html). [Intel\'s AX201 and AX200](https://ark.intel.com/content/www/us/en/ark/products/130293/intel-wifi-6-ax201-gig.html) also have 160Mhz support for 5ghz.\\n\\n## Preparation\\n\\n- Set up your AP device according to the [SPR Setup Guide](/docs/setup_run_spr)\\n- For mt7915, run a mainline kernel or a kernel with fixes from `https://github.com/openwrt/mt76` and the latest firmware. I\'ll publish some updates to building SPR with these in the near future. Fixes are needed for DFS support.\\n\\n## Hostapd configuration\\n\\n1. Modify `config/wifi/hostpad.conf`\\n2. Make sure vht_capab includes [VHT160] and [SHORT-GI-160]\\n3. Make sure to set vht_oper_chwidth/he_oper_chwidth set to 2.\\n4. For the channel configuration, the following are valid 160mhz centers on 5ghz: [50, 114, 163]. Set the vht/he_oper_centr_freq_seg0_idx to these values and the channel to the center value - 14.\\n5. Set ieee80211ax to 1\\n\\n```\\nctrl_interface=/state/wifi/control\\ncountry_code=US\\ninterface=wlan0\\nssid=TestLab\\nhw_mode=a\\nieee80211d=1\\nieee80211h=1\\nieee80211n=1\\nieee80211ac=1\\nieee80211ax=1\\nhe_su_beamformer=1\\nhe_su_beamformee=1\\nhe_mu_beamformer=1\\nwmm_enabled=1\\npreamble=1\\nht_capab=[LDPC][HT40+][HT40-][GF][SHORT-GI-20][SHORT-GI-40]\\nvht_capab=[MAX-MPDU-7991][SU-BEAMFORMEE][SU-BEAMFORMER][VHT160][RXLDPC][SHORT-GI-160][SHORT-GI-80][MAX-A-MPDU-LEN-EXP3][RX-ANTENNA-PATTERN][TX-ANTENNA-PATTERN][TX-STBC-2BY1][RX-STBC-1][MU-BEAMFORMER[[MU-BEAMFORMEE]\\nvht_oper_chwidth=2\\nhe_oper_chwidth=2\\nchannel=36\\nvht_oper_centr_freq_seg0_idx=50\\nhe_oper_centr_freq_seg0_idx=50\\nauth_algs=1\\nwpa=2\\nwpa_key_mgmt=WPA-PSK WPA-PSK-SHA256 SAE\\nrsn_pairwise=CCMP\\n\\n# Security parameters\\n\\n# Isolate stations and per-station group keys\\nap_isolate=1\\nmulticast_to_unicast=1\\n\\n# Mitigate krack attack\\nwpa_disable_eapol_key_retries=1\\n\\n# VLAN\\nper_sta_vif=1\\n\\n# Passwords\\n\\nsae_psk_file=/configs/wifi/sae_passwords\\nwpa_psk_file=/configs/wifi/wpa2pskfile\\n```\\n\\n2. Restart hostapd\\n\\n```\\nroot@pirouter:~/super# docker-compose restart wifid\\n```\\n\\nIf anything has gone wrong, check the docker compose logs for the wifid service.\\n\\n\\n## Perf Test\\n\\nRunning iperf3 on the SPR device, and iperf3 on a client with AX210 chip, we see the following:\\n\\n#### On SPR:\\n`iw wls6 info`\\n\\n```\\nInterface wls6\\n        ifindex 5\\n        wdev 0x1\\n        addr 00:0a:52:07:32:c9\\n        ssid testlab\\n        type AP\\n        wiphy 0\\n        channel 100 (5500 MHz), width: 160 MHz, center1: 5570 MHz\\n        txpower 23.00 dBm\\n        multicast TXQ:\\n                qsz-byt qsz-pkt flows   drops   marks   overlmt hashcol tx-bytes        tx-packets\\n                0       0       246     0       0       0       0       27114           272\\n```\\n\\n`iperf3 -s`\\n\\n#### On the station:\\n\\n`iperf3 -c 192.168.2.1`\\n\\n\\n#### Performance results\\n\\n```\\nAccepted connection from 192.168.2.26, port 56156\\n[  5] local 192.168.2.1 port 5201 connected to 192.168.2.26 port 56158\\n[ ID] Interval           Transfer     Bitrate                                                         \\n[  5]   0.00-1.00   sec   139 MBytes  1.17 Gbits/sec                   \\n[  5]   1.00-2.00   sec   126 MBytes  1.06 Gbits/sec                  \\n[  5]   2.00-3.00   sec   141 MBytes  1.18 Gbits/sec                  \\n[  5]   3.00-4.00   sec   137 MBytes  1.15 Gbits/sec                  \\n[  5]   4.00-5.00   sec   152 MBytes  1.27 Gbits/sec                  \\n[  5]   5.00-6.00   sec   153 MBytes  1.28 Gbits/sec                  \\n[  5]   6.00-7.00   sec   155 MBytes  1.30 Gbits/sec                  \\n[  5]   7.00-8.00   sec   148 MBytes  1.24 Gbits/sec                  \\n[  5]   8.00-9.00   sec   145 MBytes  1.21 Gbits/sec                  \\n[  5]   9.00-10.00  sec   119 MBytes   995 Mbits/sec                                                  \\n[  5]  10.00-10.00  sec   482 KBytes  1.22 Gbits/sec                                                  \\n```"},{"id":"spr_mini_pc","metadata":{"permalink":"/pages/blog/spr_mini_pc","source":"@site/blog/2022-03-18-x64-support.md","title":"Running SPR on a Mini PC with WiFi 6","description":"Intro","date":"2022-03-18T00:00:00.000Z","formattedDate":"March 18, 2022","tags":[{"label":"SPR","permalink":"/pages/blog/tags/spr"},{"label":"x64","permalink":"/pages/blog/tags/x-64"},{"label":"80211ax","permalink":"/pages/blog/tags/80211-ax"}],"readingTime":2.58,"truncated":false,"authors":[{"name":"Alex Radocea","title":"Network Wrangler","url":"https://twitter.com/defendtheworld","key":"ltsrad"}],"frontMatter":{"slug":"spr_mini_pc","title":"Running SPR on a Mini PC with WiFi 6","authors":"ltsrad","tags":["SPR","x64","80211ax"]},"prevItem":{"title":"Gigabit WiFi with SPR & the 4x4 MT7915","permalink":"/pages/blog/wifi6"},"nextItem":{"title":"Supernetworks just Released a React User Interface","permalink":"/pages/blog/UI Push"}},"content":"## Intro\\n\\nIn the blog post we\'ll describe how to build and run SPR on a Mini-PC. And we\'ll use a WiFi 6 capable radio inside.\\n\\n## First, get a Mini PC ready\\n\\n1. Identify a good mini PC to use. [Wilson](https://twitter.com/willy_wong) suggested\\na look at QOTOM\'s i3 broadwell routers.\\n\\n  The [g330](https://amzn.to/36qmZjI) is not bad. It\'s a fanless build with a TDP of 15W. One mini pci-e slot is dedicated to [mSATA](https://en.wikipedia.org/wiki/Serial_ATA#Mini-SATA_(mSATA)), and the other can be used to fit a wifi radio. It also has additional SATA available for one more storage drive.\\n\\n  <a href=\\"https://amzn.to/36qmZjI\\">\\n\\n  ![](https://m.media-amazon.com/images/I/61KcP6zQLsL._AC_SX679_.jpg)\\n\\n  </a>\\n\\n  WARNING: On this device, the mini-pcie slot has a tall post for half-sized cards that needs to be removed to fit thicker full sized WiFi cards.\\n\\n  2. Get a good WiFi radio.\\n\\n  We\'ll run with an 802.11ax card that works with Linux in AP mode (at least 802.11ac is recommended).\\n\\n  Mediatek is the disruptor in this space and supports AP mode on Linux. \\\\[NOTE: Many other cards will NOT work with ax in AP mode on Linux with open source drivers\\\\] . If you have recommendations please do not hesitate to reach out on the [matrix chat](https://matrix.to/#/#spr:matrix.org).  For the G330 Qotom, 2 antennas wires are provided to outside the case, so the 2x2 configuration is best.\\n\\n  The [MT7915](https://www.asiarf.com/shop/wifi-wlan/wifi_mini_pcie/wifi6-2t2r-dual-bands-dbdc-mpcie-card-11ax-mt7915-aw7915-npd/) can be purchased from AsiaRF.\\n\\n  <a href=\\"https://www.asiarf.com/shop/wifi-wlan/wifi_mini_pcie/wifi6-2t2r-dual-bands-dbdc-mpcie-card-11ax-mt7915-aw7915-npd/\\" >\\n\\n  ![](https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400,h_400/https://www.asiarf.com/wp-content/uploads/2021/07/aw7915-npd-1_top.jpg)\\n\\n  </a>\\n\\n\\n\\n## Setup\\n\\nDownload and install Ubuntu Server. Since the WiFi 6 driver is a work in progress, we grabbed a daily release of [Jammy Jellyfish 22.04](https://cdimage.ubuntu.com/ubuntu-server/daily-live/current/jammy-live-server-amd64.iso) from the [Ubuntu Live](https://cdimage.ubuntu.com/ubuntu-server/daily-live/current/) page to get the latest fixes. Copy the installer to installation media (a flash drive) then plug it in and go.\\n\\nThen follow the [SPR Setup Guide](/docs/setup_run_spr).\\n\\nOur config/base/config.sh:\\n```\\n#!/bin/sh                                                                                                              \\nSSID_NAME=6lab                                                                                                         \\nSSID_INTERFACE=wlan1                                                                                                   \\n\\n#PPPIF=eth0                                                                                                            \\n#WANIF=ppp0\\n#PPP_VLANID=201\\n#PPP_PROVIDER=provider-config\\nWANIF=enp1s0\\nRUN_WAN_DHCP=true\\nRUN_WAN_DHCP_IPV=4\\n# Uncomment the next line if a second ethernet port goes to wired LAN\\n#LANIF=eth1\\nVLANIF=wlan1\\nVLANSIF=$VLANIF.\\n\\nLANIP=192.168.3.1\\nDNSIP=$LANIP\\nTINYNETSTART=192.168.3.4\\nTINYNETSTOP=192.168.3.255\\nTINYNETMASK=255.255.255.252\\nTINYSLASHMASK=30\\nDOCKERNET=172.17.0.0/16\\nDOCKERIF=docker0\\n\\nWIREGUARD_PORT=51280\\n#WIREGUARD_NETWORK=192.168.3.1/24\\n```\\n\\n## Configure hostapd for 802.11AX\\n\\nOn the SPR device, modify `configs/wifi/hostapd.conf` and add:\\n\\n```\\nieee80211ax=1\\nhe_su_beamformer=1\\nhe_su_beamformee=1\\nhe_mu_beamformer=1\\nhe_oper_chwidth=1 # 80mhz channel\\nhe_oper_centr_freq_seg0_idx=42\\n```\\n\\nRestart wifid\\n```\\ndocker-compose restart wifid\\n```\\n\\n\\nConnect a wifi 6 client and verify HE codings are available\\n\\n```\\n# iw dev wlan1.4096 station dump -v  | grep bitrate\\n        tx bitrate:     1200.9 MBit/s 80MHz HE-MCS 11 HE-NSS 2 HE-GI 0 HE-DCM 0\\n        rx bitrate:     720.6 MBit/s 80MHz HE-MCS 7 HE-NSS 2 HE-GI 0 HE-DCM 0\\n```\\n\\n## Some Notes on the MT7915\\n\\nThe MT7915 is a Dual Mode driver. This means that it supports both 2Ghz and 5Ghz\\nfrequencies simultaneously. For our install the 2ghz interface is on `wlan0` and 5Ghz on `wlan1`. This is really wonderful, since one card can serve older IOT devices that only run on 2Ghz as well as more modern devices at high speeds.\\n\\nThe linux kernel driver is not yet as stable as it could be, so beware that it may not yet be production ready -- several assertions and crashes were noticed. The mainline kernel does not yet support radar scanning, however the code is available in the [openwrt development branch](https://github.com/openwrt/mt76)."},{"id":"UI Push","metadata":{"permalink":"/pages/blog/UI Push","source":"@site/blog/2022-01-19-min-ui.md","title":"Supernetworks just Released a React User Interface","description":"User Friendliness","date":"2022-01-19T00:00:00.000Z","formattedDate":"January 19, 2022","tags":[{"label":"SPR","permalink":"/pages/blog/tags/spr"},{"label":"UI","permalink":"/pages/blog/tags/ui"},{"label":"React","permalink":"/pages/blog/tags/react"},{"label":"Golang","permalink":"/pages/blog/tags/golang"}],"readingTime":2.335,"truncated":false,"authors":[{"name":"Alex Radocea","title":"Network Wrangler","url":"https://twitter.com/defendtheworld","key":"ltsrad"}],"frontMatter":{"slug":"UI Push","title":"Supernetworks just Released a React User Interface","authors":"ltsrad","tags":["SPR","UI","React","Golang"]},"prevItem":{"title":"Running SPR on a Mini PC with WiFi 6","permalink":"/pages/blog/spr_mini_pc"},"nextItem":{"title":"Announcing The SPR Project","permalink":"/pages/blog/first-blog-post"}},"content":"## User Friendliness\\n\\nThe SPR project started out as a series of bash scripts and configuration files. Adding new devices\\nwas a little bit error prone, as everything was done on the command line. Each device would\\nrequire a new, strong password, and each device needed to be added to a zone\'s configuration.\\nNext, hostapd had to be restarted to get WPA3 password reloading to work. It was hard to debug and not apparent if things failed.\\n\\nWhat would make SPR super useful, though, would be if it was easy to use. And a user interface can do that for us.\\n\\nSo this week, Supernetworks pushed out a [frontend](https://github.com/spr-networks/super/tree/main/frontend) for testing.\\n\\n## This Release Delivers Basic UI Features\\n\\nThree functions are now available:\\n  - Add a new wireless device to the network\\n  - List devices\\n  - Set device access zones\\n\\nWhile these are simple things, and seemingly easy, SPR\'s services work together to build a network\\nthat is virtually unlike all other wifi setups available today. As a result, the base station service,\\nthe DHCP server, and the API need to work together to leverage their features so that users have\\na super smooth  experience.\\n\\n## See a Demo\\n\\n<div>\\n  <video width=\\"100%\\" height=\\"100%\\" playsInline muted controls src=\\"/pages/video/sprui.mp4\\" type=\\"video/mp4\\">\\n  </video>\\n</div>\\n\\n### How Devices are Connected to SPR\\n  * Each wireless device is on an isolated network, keyed in by their MAC address and passphrase\\n  * MAC/ARP spoofing is blocked by hardened firewall rules to completely stop ethernet/IP-based evasion for lateral movement\\n  * Zones specify the level of each individual device\'s access\\n  * Custom zones can create groups of devices that can intercommunicate without having full LAN access\\n  * Built in ad blocking with CoreDNS\\n\\n#### Some of the challenges were\\n  *  Laying down a solid foundation between the API and frontend to make adding new features great\\n  *  Supporting a smooth WPA3 experience, which uses a ZKP for authentication\\n  *  Making it fast and easy to add a device without having to also know or enter its MAC address ahead of time\\n\\n\\n## The Zones\\n\\nThe built in zones are\\n  - DNS for outbound DNS queries\\n  - WAN for outbound internet access\\n  - LAN for general access to all local devices\\n\\nWhen a user types in a new name, such as \\"Cameras\\",  NFTables verdict maps gets created\\nby the API. All of the members of the maps can send and receive IP traffic to one another,\\nbut do not get general access to the LAN.  In the future, custom firewall rules will be added\\nto further specify how the groups interact.\\n\\n## What\'s Next for the UI\\n\\nFor the road map, I\'m thinking about security features such as intrusion detection\\nor automated security scanning and fingerprinting, network debugging and bandwidth monitoring,\\nper-device ad blocking, and home automation."},{"id":"first-blog-post","metadata":{"permalink":"/pages/blog/first-blog-post","source":"@site/blog/2022-01-10-first-blog-post.md","title":"Announcing The SPR Project","description":"Hello, SPR","date":"2022-01-10T00:00:00.000Z","formattedDate":"January 10, 2022","tags":[{"label":"SPR","permalink":"/pages/blog/tags/spr"},{"label":"Hello World","permalink":"/pages/blog/tags/hello-world"}],"readingTime":5.135,"truncated":false,"authors":[{"name":"Alex Radocea","title":"Network Wrangler","url":"https://twitter.com/defendtheworld","key":"ltsrad"}],"frontMatter":{"slug":"first-blog-post","title":"Announcing The SPR Project","authors":"ltsrad","tags":["SPR","Hello World"]},"prevItem":{"title":"Supernetworks just Released a React User Interface","permalink":"/pages/blog/UI Push"}},"content":"## Hello, SPR\\n\\nI\'m happy to start releasing the **Secure Programmable Router** project to the world. I\'ve been running my home WiFi\\nwith it for the past few months and I\'m beyond excited to give back to the open source community.\\nI started working on this project because I think that Linux provides a tremendous amount of agility and\\npower for secure home networking but I felt like there was no router project out there that pulled it all together.\\n\\n## The SPR project is about several things\\n\\n- A highly secure foundation to operate a home network where using the internet is safe and it\'s easy to see and control what IoT devices are up to when they are plugged in.\\n\\n- Making home privacy easy instead of begrudgingly sharing telemetry with big data companies.\\n\\n- Open source and empowering developers by lowering the barrier to entry for coding with home networking.\\n\\n- About reducing the barrier for entry.\\n\\n- Enabling scripting and rapid prototyping.\\n\\n- Adapting modern networking paradigms and tools that can meets today\'s needs.\\n\\n## How SPR Came To Be\\n\\nDuring the past year, I took a serious look at [opnsense](https://opnsense.org/) and [OpenWRT](https://openwrt.org/), and ordered over a dozen different wifi routers to set up my home network. I sat down and built and deployed my own OpenWRT images and to set up secure wifi networks to connect with a more serious firewall. What I found was that the setups I had managed to achieve were not only frustrating to manage, but when I went to test their security, I found time and time again that vendor wifi routers were insecure due to fundamental limitations with the network designs. On top of that, they were [riddled with software security holes](https://www.zerodayinitiative.com/blog/2021/11/1/pwn2ownaustin). Unfortunately, running the open source builds of OpenWRT often had degraded performance versus the proprietary vendor patches or required breaking secure boot.\\n\\nI felt frustrated because I felt like I had lost control over my own home network. I had only a basic idea of what I was running and what my devices were doing, let alone the routers themselves. Between smart bulbs and vacuum cleaners and home security cameras and speakers, TVs, gaming consoles, laptops, desktops, streaming devices, more routers, and work equipment, there was a lot of stuff that was online.\\n\\nI\'ve been working in computer security for over 15 years and I often get asked for how to set up a home network.\\n\\nThe best advice I could give people for their home wifi was to keep their mission critical systems on a dedicated wifi router, and plug that one into the main wifi router with all the other\\n\\"stuffs\\" that ultimately connects to the internet. This is awkward and requires switching networks or IGMP proxying to do discovery or zeroconf. This doesn\'t scale well across a multi-office home with repeaters and backhaul. It also doesn\'t scale well in an apartment where there\'s competition for radio bandwidth with neighbors for essentially one of only three coveted 80mhz channels on 5ghz.\\n\\nThe next best advice was to split out the \\"whatever\\" non-critical devices to the guest network, and the mission critical stuff on the main network. Hardening the guest network with isolation breaks discovery and streaming as well. In practice I found that most of the routers I looked at did not have good guest isolation anyway when enabled, something I will blog about later. No exploits are required, because more or less an attacker can just ask a router to send packets for them to work around hostapd\'s AP Isolation feature, and most of the routers will happily do what they do best, route the packets.\\n\\nAt the end of the day though, it\'s fundamentally a flawed idea to have a shared passphrase across many devices because that passphrase effectively lets devices spoof each other or attempt to intercept traffic, making it tough to truly firewall devices.\\n\\nSo then I started looking into enterprise wifi authentication: 802.1x  (EAP-PEAP, EAP-TLS, EAP-PWD). EAP-TLS really is the only secure way to do things since EAP-PEAP suffers from fundamental [man in the middle issues](https://datatracker.ietf.org/doc/html/draft-josefsson-pppext-eap-tls-eap-10#section-5.8) that were [never fixed](https://github.com/latelee/hostapd/commit/a190189d221aaef869ae2f52f7ead75b0c327995). Or EAP-PWD (which is almost wpa3) would be great,  if it was supported by more devices and drivers, and well with EAP-TLS, certificate management is pain.\\n\\nI really wished that one could just use a unique passphrase per device. Well, it turns out that yes, that works, and hostapd supports it out of the box. With some logic and [usability and correctness fixes](https://github.com/spr-networks/hostap/commit/279c5203e4c767701ac9fb7cf31624390437d854) to hostapd, and it was easy to seamlessly add new devices and their passphrases on the fly.\\n\\nOkay that was great. Next, I created strong device isolation with per-device subnets that could be configured to communicate with other subnets using forwarding rules. The resulting network was a bit too different than the spirit of the networking scripts in OpenWRT, and the patching became unreasonable to expect for upstream to accept, so I started from fresh ground.\\n\\nSPR is implemented for rapid iteration. Services are containerized so that developers can swap out core services or roll up new ones in a testable, reproducible manner. An API drives configuration to allow for customization. SPR Runs off of Ubuntu, with Docker containers, and manages the network with NFTables. It uses hostapd for the base station software, CoreDHCP for DHCP, CoreDNS for DNS, and supports Wireguard.\\n\\nSPR simply enables users to do better than today\'s status quo. It lets users run a hardened, secure network without restrictive drawbacks. It lets users connect their consumer electronics to the internet with the peace of mind that doing so does not weaken their home network security.\\n\\n## What\'s Next\\n\\nToday SPR runs as a proof of concept on a Raspberry Pi.  With a USB dongle it\'s well able to handle over a dozen wifi stations and serve data from the internet with rates up to 500mbps. Work is underway to expand to new systems.\\n\\nI\'m currently wrapping up a Web UI to make SPR user friendly. In the near future I\'ll be posting a road map for what\'s planned.\\n\\nSPR is looking for users and contributors. Join the matrix chat: https://matrix.to/#/#spr:matrix.org"}]}')}}]);