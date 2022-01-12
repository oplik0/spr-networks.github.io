"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[653],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),h=n,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return r?i.createElement(m,o(o({ref:t},d),{},{components:r})):i.createElement(m,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7215:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var i=r(7462),n=r(3366),a=(r(7294),r(3905)),o=["components"],l={},c="Security Model",s={unversionedId:"security",id:"security",title:"Security Model",description:"Threat Actors",source:"@site/docs/security.md",sourceDirName:".",slug:"/security",permalink:"/pages/docs/security",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Raspberry Pi 4 Model B Setup Guide",permalink:"/pages/docs/pi4b"}},d=[{value:"Threat Actors",id:"threat-actors",children:[{value:"Remote Internet Attacker",id:"remote-internet-attacker",children:[],level:4},{value:"Man In The Middle / Malicious ISP",id:"man-in-the-middle--malicious-isp",children:[],level:4},{value:"Supply Chain Attacker",id:"supply-chain-attacker",children:[],level:4},{value:"Physical Proximity Attacker (Evil Neighbor)",id:"physical-proximity-attacker-evil-neighbor",children:[],level:4},{value:"Inside The House Attacker (Evil Guest)",id:"inside-the-house-attacker-evil-guest",children:[],level:4},{value:"Compromised Device Attacker (Implant)",id:"compromised-device-attacker-implant",children:[],level:4}],level:2},{value:"Threat Vectors",id:"threat-vectors",children:[{value:"Network Flaws",id:"network-flaws",children:[{value:"Weak Passphrase / Password Reuse",id:"weak-passphrase--password-reuse",children:[],level:4},{value:"ARP Spoofing",id:"arp-spoofing",children:[],level:4},{value:"MAC Spoofing",id:"mac-spoofing",children:[],level:4},{value:"DHCP MAC Spoofing",id:"dhcp-mac-spoofing",children:[],level:4},{value:"VLAN Hopping",id:"vlan-hopping",children:[],level:4},{value:"Insecure Private Requests from Web Browsers",id:"insecure-private-requests-from-web-browsers",children:[],level:4}],level:3},{value:"Software Implementation Flaws",id:"software-implementation-flaws",children:[{value:"Memory corruption",id:"memory-corruption",children:[],level:4},{value:"Command Injection",id:"command-injection",children:[],level:4},{value:"XSS, CSRF",id:"xss-csrf",children:[],level:4},{value:"DNS Cache Poisoning",id:"dns-cache-poisoning",children:[],level:4}],level:3},{value:"802.11 Flaws",id:"80211-flaws",children:[{value:"Cryptographic Vulnerabilities",id:"cryptographic-vulnerabilities",children:[],level:4},{value:"Password Cracking",id:"password-cracking",children:[],level:4},{value:"WPA2 PMKID Vulnerability",id:"wpa2-pmkid-vulnerability",children:[],level:4},{value:"Dragonly MITM Attacks",id:"dragonly-mitm-attacks",children:[],level:4},{value:"Frag Attacks",id:"frag-attacks",children:[],level:4},{value:"MITM",id:"mitm",children:[],level:4},{value:"AP Isolation Bypass",id:"ap-isolation-bypass",children:[],level:4}],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"security-model"},"Security Model"),(0,a.kt)("h2",{id:"threat-actors"},"Threat Actors"),(0,a.kt)("h4",{id:"remote-internet-attacker"},"Remote Internet Attacker"),(0,a.kt)("p",null,"Anyone on the internet that can send packets to the WAN/Uplink interface"),(0,a.kt)("h4",{id:"man-in-the-middle--malicious-isp"},"Man In The Middle / Malicious ISP"),(0,a.kt)("p",null,"An attacker with a man in the middle position on the uplink"),(0,a.kt)("h4",{id:"supply-chain-attacker"},"Supply Chain Attacker"),(0,a.kt)("p",null,"An attacker looking to insert code into the software of SPR to compromise routers"),(0,a.kt)("h4",{id:"physical-proximity-attacker-evil-neighbor"},"Physical Proximity Attacker (Evil Neighbor)"),(0,a.kt)("p",null,"An attacker with physical proximity to WiFi"),(0,a.kt)("h4",{id:"inside-the-house-attacker-evil-guest"},"Inside The House Attacker (Evil Guest)"),(0,a.kt)("p",null,"An attacker with physical access"),(0,a.kt)("h4",{id:"compromised-device-attacker-implant"},"Compromised Device Attacker (Implant)"),(0,a.kt)("p",null,"An attacker operating from a compromised device, authenticated on the network"),(0,a.kt)("h2",{id:"threat-vectors"},"Threat Vectors"),(0,a.kt)("h3",{id:"network-flaws"},"Network Flaws"),(0,a.kt)("h4",{id:"weak-passphrase--password-reuse"},"Weak Passphrase / Password Reuse"),(0,a.kt)("h4",{id:"arp-spoofing"},"ARP Spoofing"),(0,a.kt)("h4",{id:"mac-spoofing"},"MAC Spoofing"),(0,a.kt)("h4",{id:"dhcp-mac-spoofing"},"DHCP MAC Spoofing"),(0,a.kt)("h4",{id:"vlan-hopping"},"VLAN Hopping"),(0,a.kt)("h4",{id:"insecure-private-requests-from-web-browsers"},"Insecure Private Requests from Web Browsers"),(0,a.kt)("h3",{id:"software-implementation-flaws"},"Software Implementation Flaws"),(0,a.kt)("h4",{id:"memory-corruption"},"Memory corruption"),(0,a.kt)("h4",{id:"command-injection"},"Command Injection"),(0,a.kt)("h4",{id:"xss-csrf"},"XSS, CSRF"),(0,a.kt)("h4",{id:"dns-cache-poisoning"},"DNS Cache Poisoning"),(0,a.kt)("h3",{id:"80211-flaws"},"802.11 Flaws"),(0,a.kt)("h4",{id:"cryptographic-vulnerabilities"},"Cryptographic Vulnerabilities"),(0,a.kt)("h4",{id:"password-cracking"},"Password Cracking"),(0,a.kt)("h4",{id:"wpa2-pmkid-vulnerability"},"WPA2 PMKID Vulnerability"),(0,a.kt)("h4",{id:"dragonly-mitm-attacks"},"Dragonly MITM Attacks"),(0,a.kt)("h4",{id:"frag-attacks"},"Frag Attacks"),(0,a.kt)("h4",{id:"mitm"},"MITM"),(0,a.kt)("h4",{id:"ap-isolation-bypass"},"AP Isolation Bypass"))}u.isMDXComponent=!0}}]);