"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[290],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4734:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},l="Base",c={unversionedId:"services/base",id:"services/base",title:"Base",description:"https://github.com/spr-networks/super/blob/main/base/template_configs/base/config.sh",source:"@site/docs/services/base.md",sourceDirName:"services",slug:"/services/base",permalink:"/pages/docs/services/base",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WiFi",permalink:"/pages/docs/apis/unix_sockets/wifi_unix_socket"},next:{title:"DHCP",permalink:"/pages/docs/services/dhcp"}},p=[{value:"Firewall Configuration",id:"firewall-configuration",children:[],level:4}],u={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"base"},"Base"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/blob/main/base/template_configs/base/config.sh"},"https://github.com/spr-networks/super/blob/main/base/template_configs/base/config.sh")),(0,a.kt)("h4",{id:"firewall-configuration"},"Firewall Configuration"),(0,a.kt)("p",null,"The firewall rules are in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/blob/main/base/scripts/nft_rules.sh"},"https://github.com/spr-networks/super/blob/main/base/scripts/nft_rules.sh")),(0,a.kt)("p",null,"The forwarding and input policies are default drop."),(0,a.kt)("p",null,"The following ports are exposed to WAN:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sshd (tcp 22), iperf3 (tcp 5201) # for development"),(0,a.kt)("li",{parentName:"ul"},"wireguard (udp 51280)")),(0,a.kt)("p",null,"On LAN the following services are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DHCP tied to the authenticated MAC address over WiFi or all wired LAN devices"),(0,a.kt)("li",{parentName:"ul"},"DNS for devices in the dns_access group"),(0,a.kt)("li",{parentName:"ul"},"1900, 5353 multicast repeater to all devices for SSDP and MDNS")),(0,a.kt)("p",null,"Routing to devices on the LAN or to WAN only happens for authenticated, approved MAC addresses."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/tree/main/base"}," \u21e8 View the code")))}f.isMDXComponent=!0}}]);