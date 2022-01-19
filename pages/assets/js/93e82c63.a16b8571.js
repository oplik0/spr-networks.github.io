"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[304],{4464:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"UI Push","metadata":{"permalink":"/pages/blog/UI Push","source":"@site/blog/2022-01-19-min-ui.md","title":"Supernetworks just Released a React User Interface","description":"User Friendliness","date":"2022-01-19T00:00:00.000Z","formattedDate":"January 19, 2022","tags":[{"label":"SPR","permalink":"/pages/blog/tags/spr"},{"label":"UI","permalink":"/pages/blog/tags/ui"},{"label":"React","permalink":"/pages/blog/tags/react"},{"label":"Golang","permalink":"/pages/blog/tags/golang"}],"readingTime":2.5,"truncated":false,"authors":[{"name":"Alex Radocea","title":"Network Wrangler","url":"https://twitter.com/defendtheworld","key":"ltsrad"}],"nextItem":{"title":"Announcing The SPR Project","permalink":"/pages/blog/first-blog-post"}},"content":"## User Friendliness\\n\\nThe SPR project started out as a series of bash scripts and configuration files. Adding new devices\\nwas a little bit error prone, as everything was done on the command line. Each device would\\nrequire a new, strong password, and each device needed to be added to a zone\'s configuration.\\nNext, hostapd had to be restarted to get WPA3 password reloading to work. It was hard to debug and not apparent why things failed.\\n\\nWhat would make SPR super useful, though, would be if it was easy to use. And a user interface can do that for us.\\n\\nSo this week, Supernetworks pushed out a [frontend](https://github.com/spr-networks/super/tree/main/frontend) for testing.\\n\\n## This Release Delivers Basic UI Features\\n\\nThree functions are now available:\\n  - Add a new wireless device to the network\\n  - List devices\\n  - Set device access zones\\n\\nWhile these are simple things, and seemingly easy, SPR\'s services work together to build a network\\nthat is virtually unlike all other wifi setups available today. As a result, the base station service,\\nthe DHCP server, and the API need to work together to leverage their features so that users have\\na super smooth  experience.\\n\\n### The SPR Network Difference:\\n  * Each wireless device is on an isolated network, keyed in by their MAC address and passphrase\\n  * MAC/ARP spoofing is blocked by hardened firewall rules to completely block ethernet/IP-based evasion for lateral movement\\n  * Zones specify the level of each individual device\'s access\\n  * Custom zones can create groups of devices that can intercommunicate without having full LAN access\\n  * Built in ad blocking with CoreDNS\\n\\n#### Some of the challenges were:\\n  *  Laying down a solid foundation between the API and frontend to make adding new features great\\n  *  Supporting a smooth WPA3 experience, which uses a ZKP for authentication\\n  *  Making it fast and easy to add a device without having to also know or enter its MAC address ahead of time\\n\\n\\n## The Zones\\n\\nThe built in zones are:\\n  - DNS for outbound DNS queries\\n  - WAN for outbound internet access\\n  - LAN for general access to all local devices\\n\\nWhen a user types in a new name, such as \\"Cameras\\",  NFTables verdict maps gets created\\nby the API. All of the members of the maps can send and receive IP traffic to one another,\\nbut do not get general access to the LAN.  In the future custom firewall rules will be allowed\\nto further specify how the groups interact.\\n\\n## See a Demo\\n\\n<div>\\n  <video width=\\"100%\\" height=\\"100%\\" playsInline muted controls src=\\"/pages/video/sprui.mp4\\" type=\\"video/mp4\\">\\n  </video>\\n</div>\\n\\n## What\'s Next for the UI\\n\\nThere is so much that is possible with SPR, from security features such as intrusion detection\\nor automated security scanning and fingerprinting, to network debugging and bandwidth monitoring,\\nto per-device ad blocking, to home automation, and beyond.\\n\\nIn the short term, typical router features will be added to the UI and APIs, before we get to some\\nof the ones you might not see elsewhere"},{"id":"first-blog-post","metadata":{"permalink":"/pages/blog/first-blog-post","source":"@site/blog/2022-01-10-first-blog-post.md","title":"Announcing The SPR Project","description":"Hello, SPR","date":"2022-01-10T00:00:00.000Z","formattedDate":"January 10, 2022","tags":[{"label":"SPR","permalink":"/pages/blog/tags/spr"},{"label":"Hello World","permalink":"/pages/blog/tags/hello-world"}],"readingTime":5.155,"truncated":false,"authors":[{"name":"Alex Radocea","title":"Network Wrangler","url":"https://twitter.com/defendtheworld","key":"ltsrad"}],"prevItem":{"title":"Supernetworks just Released a React User Interface","permalink":"/pages/blog/UI Push"}},"content":"## Hello, SPR\\n\\nI\'m happy to start releasing the **Secure Programmable Router** project to the world. I\'ve been running my home WiFi\\nwith it for the past few months and I\'m beyond excited to give back to the open source community.\\nI started working on this project because I think that Linux provides a tremendous amount of agility and\\npower for secure home networking but I felt like there was no router project out there that pulled it all together.\\n\\n## The SPR project is about several things:\\n\\nIt\'s about a highly secure foundation to operate a home network where using the internet is safe and it\'s easy to see and control what IOT devices are up to when they are plugged in. It\'s about making home privacy easy instead of begrudgingly sharing telemetry with big data companies.\\n\\nIt\'s about open source and empowering developers to innovate with home networking. It\'s about reducing the barrier for entry. It\'s about enabling scripting and rapid prototyping.\\n\\nIt\'s about trying something new. It\'s about adapting modern networking paradigms and tools that can meets today\'s needs.\\n\\n## How SPR Came To Be\\n\\nDuring the past year, I took a serious look at [opnsense](https://opnsense.org/) and [OpenWRT](https://openwrt.org/), and ordered over a dozen different wifi routers to set up my home network. I sat down and built and deployed my own OpenWRT images and to set up secure wifi networks to connect with a more serious firewall. What I found was that the setups I had managed to achieve were not only frustrating to manage, but when I went to test their security, I found time and time again that vendor wifi routers were insecure due to fundamental limitations with the network designs. On top of that, they were [riddled with software security holes](https://www.zerodayinitiative.com/blog/2021/11/1/pwn2ownaustin). Unfortunately, running the open source builds of OpenWRT often had degraded performance versus the proprietary vendor patches or required breaking secure boot.\\n\\nI felt frustrated because I felt like I had lost control over my own home network. I had only a basic idea of what I was running and what my devices were doing, let alone the routers themselves. Between smart bulbs and vacuum cleaners and home security cameras and speakers, tvs, gaming consoles, laptops, desktops, streaming devices, more routers, and work equipment, there was a lot of stuff that was online.\\n\\nI\'ve been working in computer security for over 15 years and I often get asked for how to set up a home network.\\n\\nThe best advice I could give people for their home wifi was to keep their mission critical stuff on a dedicated wifi router, and plug that one into the main wifi router with all the other Stuff that ultimately connects to the internet. This is awkward and requires switching networks or IGMP proxying to do discovery or zeroconf. This doesn\'t scale well across a multi-office home with repeaters and backhaul. It also doesn\'t scale well in an apartment where there\'s competition for radio bandwidth with neighbors for essentially one of only three coveted 80mhz channels on 5ghz.\\n\\nThe next best advice was to split out the Whatever non-critical devices to the guest network, and the mission critical stuff on the main network. Hardening the guest network with isolation breaks discovery and streaming as well. In practice I found that most of the routers I looked at did not have good guest isolation anyway when enabled, something I will blog about later. No exploits are required, because more or less an attacker can just ask a router to send packets for them to work around hostapd\'s AP Isolation feature, and most of the routers will happily do what they do best, route the packets...\\n\\nAt the end of the day though, it\'s fundamentally a flawed idea to have a shared passphrase across many devices because that passphrase effectively lets devices spoof each other or attempt to intercept traffic, making it tough to truly firewall devices.\\n\\nSo then I started looking into enterprise wifi authentication: 802.1x  (EAP-PEAP, EAP-TLS, EAP-PWD). EAP-TLS really is the only secure way to do things since EAP-PEAP suffers from fundamental [man in the middle issues](https://datatracker.ietf.org/doc/html/draft-josefsson-pppext-eap-tls-eap-10#section-5.8) that were [never fixed](https://github.com/latelee/hostapd/commit/a190189d221aaef869ae2f52f7ead75b0c327995). Or EAP-PWD (which is almost wpa3) would be great,  if it was supported by more devices and drivers... and well with EAP-TLS... certificate management is pain...\\n\\nI really wished that one could just use a unique passphrase per device. Well, it turns out that yes, that works, and hostapd supports it out of the box. With some logic and [usability and correctness fixes](https://github.com/spr-networks/hostap/commit/279c5203e4c767701ac9fb7cf31624390437d854) to hostapd, and it was easy to seamlessly add new devices and their passphrases on the fly.\\n\\nOkay that was great. Next, I created strong device isolation with per-device subnets that could be configured to communicate with other subnets using forwarding rules. The resulting network was a bit too different than the spirit of the networking scripts in OpenWRT, and the patching became unreasonable to expect for upstream to accept, so I started from fresh ground.\\n\\nSPR is implemented for rapid iteration. Services are containerized so that developers can swap out core services or roll up new ones in a testable, reproducible manner. An API drives configuration to allow for innovation. SPR Runs off of Ubuntu, with Docker containers, and manages the network with NFTables. It uses hostapd for the base station software, CoreDHCP for DHCP, CoreDNS for DNS, and supports Wireguard.\\n\\nSPR simply enables users to do better than today\'s status quo. It lets users run a hardened, secure network without restrictive drawbacks. It lets users connect their consumer electronics to the internet with the peace of mind that doing so does not weaken their home network security.\\n\\n## What\'s Next\\n\\nToday SPR runs as a proof of concept on a raspberry pi.  With a USB dongle it\'s well able to handle over a dozen wifi stations and serve data from the internet with rates up to 500mbps. Work is underway to expand to new systems.\\n\\nI\'m currently wrapping up a Web UI to make SPR user friendly. In the near future I\'ll be posting a road map for what\'s planned.\\n\\nSPR is looking for users and contributors. Join the matrix chat: https://matrix.to/#/#spr:matrix.org"}]}')}}]);