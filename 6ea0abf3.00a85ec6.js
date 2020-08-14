(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{182:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(1),o=r(9),i=(r(0),r(247)),a=(r(248),r(254)),c={id:"modelling-basics",title:"Modelling basics",sidebar_label:"Basics"},s={id:"how_to_videos/model/modelling-basics",title:"Modelling basics",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/how_to_videos/model/modelling-basics.mdx",permalink:"/docs/how_to_videos/model/modelling-basics",sidebar_label:"Basics",sidebar:"sideBar",previous:{title:"Get Started",permalink:"/docs/how_to_videos/get-started"},next:{title:"Nodes",permalink:"/docs/how_to_videos/model/nodes"}},l=[{value:"Modelling basics",id:"modelling-basics",children:[]},{value:"Model Conversion",id:"model-conversion",children:[]}],u={rightToc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"modelling-basics"},"Modelling basics"),Object(i.b)("p",null,"Learn how to activate ValQ visual using your data and understand about the different types of ",Object(i.b)("strong",{parentName:"p"},"Value Driver Tree")," models."),Object(i.b)(a.a,{video:"https://player.vimeo.com/video/438788150",responsive:!0,mdxType:"Vimeo"}),Object(i.b)("h2",{id:"model-conversion"},"Model Conversion"),Object(i.b)("p",null,"Learn how to instantly convert a Simple Model into an Advanced Model"),Object(i.b)(a.a,{video:"https://player.vimeo.com/video/438794608",responsive:!0,mdxType:"Vimeo"}))}d.isMDXComponent=!0},247:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,b=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return r?o.a.createElement(b,c({ref:t},l,{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},248:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(252);var n=r(249);function o(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},249:function(e,t,r){"use strict";var n=r(0),o=r(48);t.a=function(){return Object(n.useContext)(o.a)}},250:function(e,t,r){var n=r(66),o=r(23);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},251:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}},252:function(e,t,r){"use strict";var n=r(17),o=r(34),i=r(250),a="".startsWith;n(n.P+n.F*r(251)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return a?a.call(t,n,r):t.slice(r,r+n.length)===n}})},254:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),o=r.n(n),i=function(e){return o.a.createElement("div",null,o.a.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},o.a.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:e.video,width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen"})))}}}]);