"use strict";(self.webpackChunkspr_docs=self.webpackChunkspr_docs||[]).push([[6410],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(s,".").concat(d)]||f[d]||l[d]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5533:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],p={},s="API Overview",c={unversionedId:"apis/overview",id:"apis/overview",title:"API Overview",description:"View the OpenAPI Documentation here",source:"@site/docs/apis/overview.md",sourceDirName:"apis",slug:"/apis/overview",permalink:"/pages/docs/apis/overview",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Enable SSL",permalink:"/pages/docs/apis/enable_ssl"},next:{title:"Authentication",permalink:"/pages/docs/apis/web_api_authentication"}},u={},l=[],f={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-overview"},"API Overview"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/0"},"View the OpenAPI Documentation here")),(0,a.kt)("p",null,"The API service exists for communication between service containers and to support\nexternal requests from the web front end or CLI tools."),(0,a.kt)("p",null,"The internal APIs run over unix sockets and rely on filesystem namespaces for authentication.\nCurrently there are a few internal APIs exposed to containers over unix sockets:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support for ",(0,a.kt)("a",{parentName:"li",href:"/api/0#tag/unix_wifid"},"wifid service accepting stations")),(0,a.kt)("li",{parentName:"ul"},"Setting up dynamic firewall rules for ",(0,a.kt)("a",{parentName:"li",href:"/api/0#tag/unix_dhcpd"},"DHCP clients")),(0,a.kt)("li",{parentName:"ul"},"Support for ",(0,a.kt)("a",{parentName:"li",href:"/api/0#tag/unix_wireguard"},"wireguard peers "))),(0,a.kt)("p",null,"The API service can be configured with API Extensions in ",(0,a.kt)("inlineCode",{parentName:"p"},"state/api/config"),"."),(0,a.kt)("p",null,"API Extensions let other docker services expose web APIs with unix sockets that\nare relayed with a reverse proxy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Plugins" : [{\n    "Name": "dyndns extension",\n    "URI": "dyndns",\n    "UnixPath": "/state/plugins/dyndns/dyndns_plugin"\n  }]\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/spr-networks/super/tree/main/api"}," \u21e8 View the code")))}d.isMDXComponent=!0}}]);