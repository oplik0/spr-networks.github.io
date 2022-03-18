"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[6653],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||n;return r?i.createElement(k,o(o({ref:t},p),{},{components:r})):i.createElement(k,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7215:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=r(7462),a=r(3366),n=(r(7294),r(3905)),o=["components"],s={},l="Security",c={unversionedId:"security",id:"security",title:"Security",description:"Contact Information",source:"@site/docs/security.md",sourceDirName:".",slug:"/security",permalink:"/pages/docs/security",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Raspberry Pi 4 Model B Hardware Guide",permalink:"/pages/docs/pi4b"},next:{title:"SPR Setup Guide",permalink:"/pages/docs/setup_run_spr"}},p={},u=[{value:"Contact Information",id:"contact-information",level:3},{value:"Threat Actors",id:"threat-actors",level:2},{value:"Remote Internet Attacker",id:"remote-internet-attacker",level:4},{value:"Man In The Middle / Malicious ISP",id:"man-in-the-middle--malicious-isp",level:4},{value:"Supply Chain Attacker",id:"supply-chain-attacker",level:4},{value:"Physical Proximity Attacker (Evil Neighbor)",id:"physical-proximity-attacker-evil-neighbor",level:4},{value:"Inside Perimeter Attacker (Evil Guest)",id:"inside-perimeter-attacker-evil-guest",level:4},{value:"Compromised Device Attacker (Implant)",id:"compromised-device-attacker-implant",level:4},{value:"Threat Vectors",id:"threat-vectors",level:2},{value:"Network Flaws",id:"network-flaws",level:3},{value:"Weak Passphrase / Password Reuse",id:"weak-passphrase--password-reuse",level:4},{value:"ARP Spoofing",id:"arp-spoofing",level:4},{value:"MAC Spoofing",id:"mac-spoofing",level:4},{value:"DHCP MAC Spoofing",id:"dhcp-mac-spoofing",level:4},{value:"VLAN Hopping",id:"vlan-hopping",level:4},{value:"Insecure Private Requests from Web Browsers",id:"insecure-private-requests-from-web-browsers",level:4},{value:"Software Implementation Flaws",id:"software-implementation-flaws",level:3},{value:"Memory corruption",id:"memory-corruption",level:4},{value:"Command Injection",id:"command-injection",level:4},{value:"XSS, CSRF",id:"xss-csrf",level:4},{value:"DNS Cache Poisoning",id:"dns-cache-poisoning",level:4},{value:"Response Splitting Attacks",id:"response-splitting-attacks",level:4},{value:"802.11 Flaws",id:"80211-flaws",level:3},{value:"Cryptographic Vulnerabilities",id:"cryptographic-vulnerabilities",level:4},{value:"Password Cracking",id:"password-cracking",level:4},{value:"Frag Attacks",id:"frag-attacks",level:4},{value:"MITM",id:"mitm",level:4},{value:"AP Isolation Bypass",id:"ap-isolation-bypass",level:4},{value:"Packet in Packet Attacks",id:"packet-in-packet-attacks",level:4}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"security"},"Security"),(0,n.kt)("h3",{id:"contact-information"},"Contact Information"),(0,n.kt)("p",null,"Email spr-security ","[at]"," longterm.io or reach out on the ",(0,n.kt)("a",{parentName:"p",href:"https://matrix.to/#/#spr:matrix.org"},"matrix chat")),(0,n.kt)("h1",{id:"security-goals"},"Security Goals"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Router secure against compromises via the web services, remote uplink, or local network attack surfaces")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Practical to use strong passwords for wifi devices")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"One compromised device should not be able to impersonate other devices on the network or intercept their network traffic")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Devices can only communicate to systems they are explicitly allowed to. No spoofing.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"threat-actors"},"Threat Actors"),(0,n.kt)("h4",{id:"remote-internet-attacker"},"Remote Internet Attacker"),(0,n.kt)("p",null,"Anyone on the internet that can send packets to the WAN/Uplink interface"),(0,n.kt)("h4",{id:"man-in-the-middle--malicious-isp"},"Man In The Middle / Malicious ISP"),(0,n.kt)("p",null,"An attacker with a man in the middle position on the uplink"),(0,n.kt)("h4",{id:"supply-chain-attacker"},"Supply Chain Attacker"),(0,n.kt)("p",null,"An attacker looking to insert code into the SPR project to compromise routers"),(0,n.kt)("h4",{id:"physical-proximity-attacker-evil-neighbor"},"Physical Proximity Attacker (Evil Neighbor)"),(0,n.kt)("p",null,"An attacker with physical proximity to WiFi"),(0,n.kt)("h4",{id:"inside-perimeter-attacker-evil-guest"},"Inside Perimeter Attacker (Evil Guest)"),(0,n.kt)("p",null,"An attacker with physical access"),(0,n.kt)("h4",{id:"compromised-device-attacker-implant"},"Compromised Device Attacker (Implant)"),(0,n.kt)("p",null,"An attacker operating from a compromised device, authenticated on the network"),(0,n.kt)("h2",{id:"threat-vectors"},"Threat Vectors"),(0,n.kt)("h3",{id:"network-flaws"},"Network Flaws"),(0,n.kt)("h4",{id:"weak-passphrase--password-reuse"},"Weak Passphrase / Password Reuse"),(0,n.kt)("h4",{id:"arp-spoofing"},"ARP Spoofing"),(0,n.kt)("h4",{id:"mac-spoofing"},"MAC Spoofing"),(0,n.kt)("h4",{id:"dhcp-mac-spoofing"},"DHCP MAC Spoofing"),(0,n.kt)("h4",{id:"vlan-hopping"},"VLAN Hopping"),(0,n.kt)("h4",{id:"insecure-private-requests-from-web-browsers"},"Insecure Private Requests from Web Browsers"),(0,n.kt)("h3",{id:"software-implementation-flaws"},"Software Implementation Flaws"),(0,n.kt)("h4",{id:"memory-corruption"},"Memory corruption"),(0,n.kt)("h4",{id:"command-injection"},"Command Injection"),(0,n.kt)("h4",{id:"xss-csrf"},"XSS, CSRF"),(0,n.kt)("h4",{id:"dns-cache-poisoning"},"DNS Cache Poisoning"),(0,n.kt)("h4",{id:"response-splitting-attacks"},"Response Splitting Attacks"),(0,n.kt)("h3",{id:"80211-flaws"},"802.11 Flaws"),(0,n.kt)("h4",{id:"cryptographic-vulnerabilities"},"Cryptographic Vulnerabilities"),(0,n.kt)("h4",{id:"password-cracking"},"Password Cracking"),(0,n.kt)("h4",{id:"frag-attacks"},"Frag Attacks"),(0,n.kt)("h4",{id:"mitm"},"MITM"),(0,n.kt)("h4",{id:"ap-isolation-bypass"},"AP Isolation Bypass"),(0,n.kt)("h4",{id:"packet-in-packet-attacks"},"Packet in Packet Attacks"))}m.isMDXComponent=!0}}]);