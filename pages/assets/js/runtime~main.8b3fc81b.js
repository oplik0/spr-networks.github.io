!function(){"use strict";var e,t,n,r,c,f={},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return f[e].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=f,o.c=a,e=[],o.O=function(t,n,r,c){if(!n){var f=1/0;for(b=0;b<e.length;b++){n=e[b][0],r=e[b][1],c=e[b][2];for(var a=!0,d=0;d<n.length;d++)(!1&c||f>=c)&&Object.keys(o.O).every((function(e){return o.O[e](n[d])}))?n.splice(d--,1):(a=!1,c<f&&(f=c));if(a){e.splice(b--,1);var u=r();void 0!==u&&(t=u)}}return t}c=c||0;for(var b=e.length;b>0&&e[b-1][2]>c;b--)e[b]=e[b-1];e[b]=[n,r,c]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var c=Object.create(null);o.r(c);var f={};t=t||[null,n({}),n([]),n(n)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(t){f[t]=function(){return e[t]}}));return f.default=function(){return e},o.d(c,f),c},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return"assets/js/"+({53:"935f2afb",74:"4b717bc7",583:"09aa9f9e",756:"66c5e8db",1262:"8aacda7c",1602:"bb65e76f",1613:"328a5745",1804:"07238070",2174:"b1946702",2209:"0d354065",2387:"6df7deb1",2535:"814f3328",2686:"730a48c5",2898:"f7b70096",2968:"8534c058",3089:"a6aa9e1f",3205:"03a386c0",3275:"8dc0d417",3292:"06156f16",3558:"57d0e979",3608:"9e4087bc",3830:"7bf04a2c",3953:"c7e8d662",4013:"01a85c17",4195:"c4f5d8e4",4572:"e9d3736a",4950:"614d564a",5599:"19d0a338",5870:"e8e7e444",6103:"ccc49370",6117:"5608acc4",6258:"88109ec1",6263:"1d65002b",6290:"2645fe86",6343:"57b05002",6410:"81fdc0c8",6653:"db32d859",7223:"b348df40",7418:"bffca146",7457:"ed8ace0e",7918:"17896441",7974:"49128993",8469:"45900ff0",8610:"6875c492",8612:"f0ad3fbb",8985:"5385eb44",9156:"324905b6",9304:"93e82c63",9514:"1be78505",9671:"0e384e19",9888:"85a2c06e"}[e]||e)+"."+{53:"b8491504",74:"e86602bf",583:"a1a9dd05",756:"40d51dce",1262:"b26e6bb4",1602:"523c9ba7",1613:"7197295b",1804:"7ce619f8",2174:"47eb60ce",2209:"31c7abea",2387:"8e551d30",2535:"574bac94",2686:"440b3098",2898:"32982350",2968:"a914b122",3089:"31b3ffaf",3205:"5b7ee8b5",3275:"ad0e1f94",3292:"b6cf98e6",3558:"f5bdd35a",3608:"b9c8eced",3830:"02c03d58",3953:"54fde1d9",4013:"16e21d19",4195:"40c2067f",4572:"5881abc0",4608:"c6528b94",4950:"44949ea6",5599:"d585b383",5870:"0c402c9a",5897:"9b43251a",6103:"04036d1a",6117:"2c8df32d",6258:"572ac456",6263:"65b89aa5",6290:"83d426a4",6343:"b0cfd848",6383:"7f93ec7f",6410:"338b6622",6653:"91c135f5",7223:"60d287bc",7418:"31bfa229",7457:"a06944c8",7918:"46fd9fba",7974:"cbd11395",8469:"4c92d7bd",8610:"de881e5e",8612:"cf07bfa5",8985:"39b36c9a",9156:"9e5ce766",9304:"413ce555",9514:"44c01da6",9671:"d5c5b9b1",9888:"bf1759bd"}[e]+".js"},o.miniCssF=function(e){},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},c="spr-docs:",o.l=function(e,t,n,f){if(r[e])r[e].push(t);else{var a,d;if(void 0!==n)for(var u=document.getElementsByTagName("script"),b=0;b<u.length;b++){var i=u[b];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==c+n){a=i;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",c+n),a.src=e),r[e]=[t];var l=function(t,n){a.onerror=a.onload=null,clearTimeout(s);var c=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),c&&c.forEach((function(e){return e(n)})),t)return t(n)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),d&&document.head.appendChild(a)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},o.p="/pages/",o.gca=function(e){return e={17896441:"7918",49128993:"7974","935f2afb":"53","4b717bc7":"74","09aa9f9e":"583","66c5e8db":"756","8aacda7c":"1262",bb65e76f:"1602","328a5745":"1613","07238070":"1804",b1946702:"2174","0d354065":"2209","6df7deb1":"2387","814f3328":"2535","730a48c5":"2686",f7b70096:"2898","8534c058":"2968",a6aa9e1f:"3089","03a386c0":"3205","8dc0d417":"3275","06156f16":"3292","57d0e979":"3558","9e4087bc":"3608","7bf04a2c":"3830",c7e8d662:"3953","01a85c17":"4013",c4f5d8e4:"4195",e9d3736a:"4572","614d564a":"4950","19d0a338":"5599",e8e7e444:"5870",ccc49370:"6103","5608acc4":"6117","88109ec1":"6258","1d65002b":"6263","2645fe86":"6290","57b05002":"6343","81fdc0c8":"6410",db32d859:"6653",b348df40:"7223",bffca146:"7418",ed8ace0e:"7457","45900ff0":"8469","6875c492":"8610",f0ad3fbb:"8612","5385eb44":"8985","324905b6":"9156","93e82c63":"9304","1be78505":"9514","0e384e19":"9671","85a2c06e":"9888"}[e]||e,o.p+o.u(e)},function(){var e={1303:0,532:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(1303|532)$/.test(t))e[t]=0;else{var c=new Promise((function(n,c){r=e[t]=[n,c]}));n.push(r[2]=c);var f=o.p+o.u(t),a=new Error;o.l(f,(function(n){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var c=n&&("load"===n.type?"missing":n.type),f=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+c+": "+f+")",a.name="ChunkLoadError",a.type=c,a.request=f,r[1](a)}}),"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,c,f=n[0],a=n[1],d=n[2],u=0;if(f.some((function(t){return 0!==e[t]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(d)var b=d(o)}for(t&&t(n);u<f.length;u++)c=f[u],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return o.O(b)},n=self.webpackChunkspr_docs=self.webpackChunkspr_docs||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();