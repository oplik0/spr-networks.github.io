"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[7155],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),h=i,d=f["".concat(l,".").concat(h)]||f[h]||u[h]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},480:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={slug:"wifi6",title:"Gigabit WiFi with SPR & the 4x4 MT7915",authors:"ltsrad",tags:["SPR","wifi6","80211ax"]},l=void 0,p={permalink:"/pages/blog/wifi6",source:"@site/blog/2022-04-13-gigabit-wifi-mt7915.md",title:"Gigabit WiFi with SPR & the 4x4 MT7915",description:"About this post",date:"2022-04-13T00:00:00.000Z",formattedDate:"April 13, 2022",tags:[{label:"SPR",permalink:"/pages/blog/tags/spr"},{label:"wifi6",permalink:"/pages/blog/tags/wifi-6"},{label:"80211ax",permalink:"/pages/blog/tags/80211-ax"}],readingTime:2.295,truncated:!1,authors:[{name:"Alex Radocea",title:"Network Wrangler",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"wifi6",title:"Gigabit WiFi with SPR & the 4x4 MT7915",authors:"ltsrad",tags:["SPR","wifi6","80211ax"]},nextItem:{title:"Running SPR on a Mini PC with WiFi 6",permalink:"/pages/blog/spr_mini_pc"}},c={authorsImageUrls:[void 0]},u=[{value:"About this post",id:"about-this-post",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Hostapd configuration",id:"hostapd-configuration",level:2},{value:"Perf Test",id:"perf-test",level:2},{value:"On SPR:",id:"on-spr",level:4},{value:"On the station:",id:"on-the-station",level:4},{value:"Performance results",id:"performance-results",level:4}],f={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"about-this-post"},"About this post"),(0,a.kt)("p",null,"In this blog we'll cover how to configure hostapd with the mt7915 to run 160 MHz channels over 5ghz.\nThis allows stations to break gigabit speeds for WiFi with only 2 spatial streams."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A 160Mhz capable card on the SPR device, for example ",(0,a.kt)("a",{parentName:"li",href:"https://www.asiarf.com/shop/wifi-wlan/wifi_mini_pcie/wifi6-4t4r-dual-bands-selectable-mpcie-card-ieee802-11ax-ac-a-b-g-n-2-4g-5ghz-aw7915-np1/"},"AsiaRF's AW7915-NP1")),(0,a.kt)("li",{parentName:"ul"},"160MHz capable client wifi card, such as ",(0,a.kt)("a",{parentName:"li",href:"https://www.intel.com/content/www/us/en/products/sku/204836/intel-wifi-6e-ax210-gig/specifications.html"},"Intel's AX210"),". ",(0,a.kt)("a",{parentName:"li",href:"https://ark.intel.com/content/www/us/en/ark/products/130293/intel-wifi-6-ax201-gig.html"},"Intel's AX201 and AX200")," also have 160Mhz support for 5ghz.")),(0,a.kt)("h2",{id:"preparation"},"Preparation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set up your AP device according to the ",(0,a.kt)("a",{parentName:"li",href:"/docs/setup_run_spr"},"SPR Setup Guide")),(0,a.kt)("li",{parentName:"ul"},"For mt7915, run a mainline kernel or a kernel with fixes from ",(0,a.kt)("inlineCode",{parentName:"li"},"https://github.com/openwrt/mt76")," and the latest firmware. I'll publish some updates to building SPR with these in the near future. Fixes are needed for DFS support.")),(0,a.kt)("h2",{id:"hostapd-configuration"},"Hostapd configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Modify ",(0,a.kt)("inlineCode",{parentName:"li"},"config/wifi/hostpad.conf")),(0,a.kt)("li",{parentName:"ol"},"Make sure vht_capab includes ","[VHT160]"," and ","[SHORT-GI-160]"),(0,a.kt)("li",{parentName:"ol"},"Make sure to set vht_oper_chwidth/he_oper_chwidth set to 2."),(0,a.kt)("li",{parentName:"ol"},"For the channel configuration, the following are valid 160mhz centers on 5ghz: ","[50, 114, 163]",". Set the vht/he_oper_centr_freq_seg0_idx to these values and the channel to the center value - 14."),(0,a.kt)("li",{parentName:"ol"},"Set ieee80211ax to 1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ctrl_interface=/state/wifi/control\ncountry_code=US\ninterface=wlan0\nssid=TestLab\nhw_mode=a\nieee80211d=1\nieee80211h=1\nieee80211n=1\nieee80211ac=1\nieee80211ax=1\nhe_su_beamformer=1\nhe_su_beamformee=1\nhe_mu_beamformer=1\nwmm_enabled=1\npreamble=1\nht_capab=[LDPC][HT40+][HT40-][GF][SHORT-GI-20][SHORT-GI-40]\nvht_capab=[MAX-MPDU-7991][SU-BEAMFORMEE][SU-BEAMFORMER][VHT160][RXLDPC][SHORT-GI-160][SHORT-GI-80][MAX-A-MPDU-LEN-EXP3][RX-ANTENNA-PATTERN][TX-ANTENNA-PATTERN][TX-STBC-2BY1][RX-STBC-1][MU-BEAMFORMER[[MU-BEAMFORMEE]\nvht_oper_chwidth=2\nhe_oper_chwidth=2\nchannel=36\nvht_oper_centr_freq_seg0_idx=50\nhe_oper_centr_freq_seg0_idx=50\nauth_algs=1\nwpa=2\nwpa_key_mgmt=WPA-PSK WPA-PSK-SHA256 SAE\nrsn_pairwise=CCMP\n\n# Security parameters\n\n# Isolate stations and per-station group keys\nap_isolate=1\nmulticast_to_unicast=1\n\n# Mitigate krack attack\nwpa_disable_eapol_key_retries=1\n\n# VLAN\nper_sta_vif=1\n\n# Passwords\n\nsae_psk_file=/configs/wifi/sae_passwords\nwpa_psk_file=/configs/wifi/wpa2pskfile\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Restart hostapd")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"root@pirouter:~/super# docker-compose restart wifid\n")),(0,a.kt)("p",null,"If anything has gone wrong, check the docker compose logs for the wifid service."),(0,a.kt)("h2",{id:"perf-test"},"Perf Test"),(0,a.kt)("p",null,"Running iperf3 on the SPR device, and iperf3 on a client with AX210 chip, we see the following:"),(0,a.kt)("h4",{id:"on-spr"},"On SPR:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"iw wls6 info")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Interface wls6\n        ifindex 5\n        wdev 0x1\n        addr 00:0a:52:07:32:c9\n        ssid testlab\n        type AP\n        wiphy 0\n        channel 100 (5500 MHz), width: 160 MHz, center1: 5570 MHz\n        txpower 23.00 dBm\n        multicast TXQ:\n                qsz-byt qsz-pkt flows   drops   marks   overlmt hashcol tx-bytes        tx-packets\n                0       0       246     0       0       0       0       27114           272\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"iperf3 -s")),(0,a.kt)("h4",{id:"on-the-station"},"On the station:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"iperf3 -c 192.168.2.1")),(0,a.kt)("h4",{id:"performance-results"},"Performance results"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Accepted connection from 192.168.2.26, port 56156\n[  5] local 192.168.2.1 port 5201 connected to 192.168.2.26 port 56158\n[ ID] Interval           Transfer     Bitrate                                                         \n[  5]   0.00-1.00   sec   139 MBytes  1.17 Gbits/sec                   \n[  5]   1.00-2.00   sec   126 MBytes  1.06 Gbits/sec                  \n[  5]   2.00-3.00   sec   141 MBytes  1.18 Gbits/sec                  \n[  5]   3.00-4.00   sec   137 MBytes  1.15 Gbits/sec                  \n[  5]   4.00-5.00   sec   152 MBytes  1.27 Gbits/sec                  \n[  5]   5.00-6.00   sec   153 MBytes  1.28 Gbits/sec                  \n[  5]   6.00-7.00   sec   155 MBytes  1.30 Gbits/sec                  \n[  5]   7.00-8.00   sec   148 MBytes  1.24 Gbits/sec                  \n[  5]   8.00-9.00   sec   145 MBytes  1.21 Gbits/sec                  \n[  5]   9.00-10.00  sec   119 MBytes   995 Mbits/sec                                                  \n[  5]  10.00-10.00  sec   482 KBytes  1.22 Gbits/sec                                                  \n")))}h.isMDXComponent=!0}}]);