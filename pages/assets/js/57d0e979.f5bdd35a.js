"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[3558],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2585:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={slug:"UI Push",title:"Supernetworks just Released a React User Interface",authors:"ltsrad",tags:["SPR","UI","React","Golang"]},l=void 0,u={permalink:"/pages/blog/UI Push",source:"@site/blog/2022-01-19-min-ui.md",title:"Supernetworks just Released a React User Interface",description:"User Friendliness",date:"2022-01-19T00:00:00.000Z",formattedDate:"January 19, 2022",tags:[{label:"SPR",permalink:"/pages/blog/tags/spr"},{label:"UI",permalink:"/pages/blog/tags/ui"},{label:"React",permalink:"/pages/blog/tags/react"},{label:"Golang",permalink:"/pages/blog/tags/golang"}],readingTime:2.335,truncated:!1,authors:[{name:"Alex Radocea",title:"Network Wrangler",url:"https://twitter.com/defendtheworld",key:"ltsrad"}],frontMatter:{slug:"UI Push",title:"Supernetworks just Released a React User Interface",authors:"ltsrad",tags:["SPR","UI","React","Golang"]},prevItem:{title:"Running SPR on a Mini PC with WiFi 6",permalink:"/pages/blog/spr_mini_pc"},nextItem:{title:"Announcing The SPR Project",permalink:"/pages/blog/first-blog-post"}},c={authorsImageUrls:[void 0]},d=[{value:"User Friendliness",id:"user-friendliness",level:2},{value:"This Release Delivers Basic UI Features",id:"this-release-delivers-basic-ui-features",level:2},{value:"See a Demo",id:"see-a-demo",level:2},{value:"How Devices are Connected to SPR",id:"how-devices-are-connected-to-spr",level:3},{value:"Some of the challenges were",id:"some-of-the-challenges-were",level:4},{value:"The Zones",id:"the-zones",level:2},{value:"What&#39;s Next for the UI",id:"whats-next-for-the-ui",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"user-friendliness"},"User Friendliness"),(0,o.kt)("p",null,"The SPR project started out as a series of bash scripts and configuration files. Adding new devices\nwas a little bit error prone, as everything was done on the command line. Each device would\nrequire a new, strong password, and each device needed to be added to a zone's configuration.\nNext, hostapd had to be restarted to get WPA3 password reloading to work. It was hard to debug and not apparent if things failed."),(0,o.kt)("p",null,"What would make SPR super useful, though, would be if it was easy to use. And a user interface can do that for us."),(0,o.kt)("p",null,"So this week, Supernetworks pushed out a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/tree/main/frontend"},"frontend")," for testing."),(0,o.kt)("h2",{id:"this-release-delivers-basic-ui-features"},"This Release Delivers Basic UI Features"),(0,o.kt)("p",null,"Three functions are now available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a new wireless device to the network"),(0,o.kt)("li",{parentName:"ul"},"List devices"),(0,o.kt)("li",{parentName:"ul"},"Set device access zones")),(0,o.kt)("p",null,"While these are simple things, and seemingly easy, SPR's services work together to build a network\nthat is virtually unlike all other wifi setups available today. As a result, the base station service,\nthe DHCP server, and the API need to work together to leverage their features so that users have\na super smooth  experience."),(0,o.kt)("h2",{id:"see-a-demo"},"See a Demo"),(0,o.kt)("div",null,(0,o.kt)("video",{width:"100%",height:"100%",playsInline:!0,muted:!0,controls:!0,src:"/pages/video/sprui.mp4",type:"video/mp4"})),(0,o.kt)("h3",{id:"how-devices-are-connected-to-spr"},"How Devices are Connected to SPR"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each wireless device is on an isolated network, keyed in by their MAC address and passphrase"),(0,o.kt)("li",{parentName:"ul"},"MAC/ARP spoofing is blocked by hardened firewall rules to completely stop ethernet/IP-based evasion for lateral movement"),(0,o.kt)("li",{parentName:"ul"},"Zones specify the level of each individual device's access"),(0,o.kt)("li",{parentName:"ul"},"Custom zones can create groups of devices that can intercommunicate without having full LAN access"),(0,o.kt)("li",{parentName:"ul"},"Built in ad blocking with CoreDNS")),(0,o.kt)("h4",{id:"some-of-the-challenges-were"},"Some of the challenges were"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Laying down a solid foundation between the API and frontend to make adding new features great"),(0,o.kt)("li",{parentName:"ul"},"Supporting a smooth WPA3 experience, which uses a ZKP for authentication"),(0,o.kt)("li",{parentName:"ul"},"Making it fast and easy to add a device without having to also know or enter its MAC address ahead of time")),(0,o.kt)("h2",{id:"the-zones"},"The Zones"),(0,o.kt)("p",null,"The built in zones are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DNS for outbound DNS queries"),(0,o.kt)("li",{parentName:"ul"},"WAN for outbound internet access"),(0,o.kt)("li",{parentName:"ul"},"LAN for general access to all local devices")),(0,o.kt)("p",null,'When a user types in a new name, such as "Cameras",  NFTables verdict maps gets created\nby the API. All of the members of the maps can send and receive IP traffic to one another,\nbut do not get general access to the LAN.  In the future, custom firewall rules will be added\nto further specify how the groups interact.'),(0,o.kt)("h2",{id:"whats-next-for-the-ui"},"What's Next for the UI"),(0,o.kt)("p",null,"For the road map, I'm thinking about security features such as intrusion detection\nor automated security scanning and fingerprinting, network debugging and bandwidth monitoring,\nper-device ad blocking, and home automation."))}h.isMDXComponent=!0}}]);