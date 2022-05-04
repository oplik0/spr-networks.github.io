"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[2811],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),h=s,f=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2823:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var a=n(7462),s=n(3366),i=(n(7294),n(3905)),r=["components"],o={slug:"multipsk and wpa3",title:"SPR Supports WPA3 with Multiple Passwords",authors:"ltsrad",tags:["SPR","wifi6","WPA3","PPSK"]},l=void 0,d={permalink:"/pages/blog/multipsk and wpa3",source:"@site/blog/2022-05-02-wpa3-multipsk.md",title:"SPR Supports WPA3 with Multiple Passwords",description:"SPR's WPA3 Multiple Passwords per SSID Surprises People",date:"2022-05-02T00:00:00.000Z",formattedDate:"May 2, 2022",tags:[{label:"SPR",permalink:"/pages/blog/tags/spr"},{label:"wifi6",permalink:"/pages/blog/tags/wifi-6"},{label:"WPA3",permalink:"/pages/blog/tags/wpa-3"},{label:"PPSK",permalink:"/pages/blog/tags/ppsk"}],readingTime:1.885,truncated:!1,authors:[{name:"Alex Radocea",title:"Founder",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"multipsk and wpa3",title:"SPR Supports WPA3 with Multiple Passwords",authors:"ltsrad",tags:["SPR","wifi6","WPA3","PPSK"]},nextItem:{title:"Gigabit WiFi with SPR & The 4x4 MT7915",permalink:"/pages/blog/wifi6"}},p={authorsImageUrls:[void 0]},c=[{value:"SPR&#39;s WPA3 Multiple Passwords per SSID Surprises People",id:"sprs-wpa3-multiple-passwords-per-ssid-surprises-people",level:3},{value:"WPA3 Authentication is Fundamentally Different",id:"wpa3-authentication-is-fundamentally-different",level:3},{value:"SPR Uses HostAP&#39;s MAC Assignment",id:"spr-uses-hostaps-mac-assignment",level:3},{value:"Adding Device is Seamless",id:"adding-device-is-seamless",level:3},{value:"Devices Workflow",id:"devices-workflow",level:3},{value:"First, go to the add device modal and add a device name and hit next",id:"first-go-to-the-add-device-modal-and-add-a-device-name-and-hit-next",level:4},{value:"Next, scan the QR code  or type the passphrase on a new device",id:"next-scan-the-qr-code--or-type-the-passphrase-on-a-new-device",level:4},{value:"Upon connection the UI will notify success and the PSK will be assigned to the MAC",id:"upon-connection-the-ui-will-notify-success-and-the-psk-will-be-assigned-to-the-mac",level:4}],u={toc:c};function h(e){var t=e.components,o=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"sprs-wpa3-multiple-passwords-per-ssid-surprises-people"},"SPR's WPA3 Multiple Passwords per SSID Surprises People"),(0,i.kt)("p",null," WiFi nerds and people working on WiFi products have shared their surprise with me a few times now about the integration for multi-PSK with WPA3. This is something already mostly built into HostAP so it should be possible anywhere, although it is not obvious from the documentation. I'm told that most other projects simply don't do it, putting SPR at the head of the pack! In this post I'll share how it's integrated, so that others can benefit from the ideas and improve WiFi security for people all around the world."),(0,i.kt)("h3",{id:"wpa3-authentication-is-fundamentally-different"},"WPA3 Authentication is Fundamentally Different"),(0,i.kt)("p",null,"WPA3 authentication uses ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7664"},"Dragonfly"),", a Zero-Knowledge Proof in its Simulataneous Authentication of Equals Handshake protocol. With SAE there is nothing to sniff and crack offline from the key exchange. This is in contrast to WPA/WPA2 which is notorious for password cracking of weak passwords from captured handshakes -- or even more conteniently, by using the ",(0,i.kt)("a",{parentName:"p",href:"https://hashcat.net/forum/thread-7717.html"},"RSN IE specification flaw"),"."),(0,i.kt)("p",null,"For Multi-PSK, a router can go down the list of stored PSKs and try each key and see if it had a matching one.\nFor WPA3, this is not possible. Authenticating a password requires an interactive zero knowledge proof, so a new handshake is required to try a different password."),(0,i.kt)("h3",{id:"spr-uses-hostaps-mac-assignment"},"SPR Uses HostAP's MAC Assignment"),(0,i.kt)("p",null,"PSKs are assigned by MAC address. HostAP finds the passphrase to use by MAC address to perform the authentication, using the correct PSK the first time around for the interactive proof."),(0,i.kt)("p",null,"The syntax for hostapd.conf to assign multiple devices is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sae_password=1stPassphraseHere|mac=01:23:45:67:89:aa\nsae_password=2ndPassphraseHere|mac=01:23:45:67:89:ab\n")),(0,i.kt)("h3",{id:"adding-device-is-seamless"},"Adding Device is Seamless"),(0,i.kt)("p",null,"Adding devices is an easy process. If a user does know a MAC address, they can certainly\nspecify the MAC address ahead of time. However, SPR can use a wildcard MAC to match a new\nincoming device. When the device authenticates, that PSK will be assigned to the device."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sae_password=3rdPassphraseHere|mac=ff:ff:ff:ff:ff:ff\n")),(0,i.kt)("h3",{id:"devices-workflow"},"Devices Workflow"),(0,i.kt)("h4",{id:"first-go-to-the-add-device-modal-and-add-a-device-name-and-hit-next"},"First, go to the add device modal and add a device name and hit next"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(6795).Z,width:"980",height:"642"})),(0,i.kt)("h4",{id:"next-scan-the-qr-code--or-type-the-passphrase-on-a-new-device"},"Next, scan the QR code  or type the passphrase on a new device"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(184).Z,width:"968",height:"809"})),(0,i.kt)("h4",{id:"upon-connection-the-ui-will-notify-success-and-the-psk-will-be-assigned-to-the-mac"},"Upon connection the UI will notify success and the PSK will be assigned to the MAC"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(1224).Z,width:"974",height:"846"})))}h.isMDXComponent=!0},6795:function(e,t,n){t.Z=n.p+"assets/images/add_device_1-01b0f5f44775c92f40090e85db695506.png"},184:function(e,t,n){t.Z=n.p+"assets/images/add_device_2-ec89e7ff6f26c0d21d79dc9d059c18d9.png"},1224:function(e,t,n){t.Z=n.p+"assets/images/add_device_3-48bef3bc65a140fc598aa1497ed71e56.png"}}]);