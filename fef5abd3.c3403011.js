(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{242:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),o=(r(0),r(245)),i=(r(246),r(252)),c={id:"data-series",title:"Create a New Data Series",sidebar_label:"New Data Series"},s={id:"how_to_videos/plan/data-series",title:"Create a New Data Series",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/how_to_videos/plan/data-series.mdx",permalink:"/docs/how_to_videos/plan/data-series",sidebar_label:"New Data Series",sidebar:"sideBar",previous:{title:"Data Series",permalink:"/docs/how_to_videos/model/data-series"},next:{title:"Planning Tool Bar",permalink:"/docs/how_to_videos/plan/planning-toolbar"}},u=[],l={rightToc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Learn how to create a new Data Series inside ValQ and begin your journey for Budgeting and Forecasting"),Object(o.b)(i.a,{video:"https://player.vimeo.com/video/444616582",responsive:!0,mdxType:"Vimeo"}))}p.isMDXComponent=!0},245:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return r?a.a.createElement(m,c({ref:t},u,{components:r})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},246:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(250);var n=r(247);function a(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},247:function(e,t,r){"use strict";var n=r(0),a=r(48);t.a=function(){return Object(n.useContext)(a.a)}},248:function(e,t,r){var n=r(66),a=r(23);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},249:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(a){}}return!0}},250:function(e,t,r){"use strict";var n=r(17),a=r(34),o=r(248),i="".startsWith;n(n.P+n.F*r(249)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,r):t.slice(r,r+n.length)===n}})},252:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0),a=r.n(n),o=function(e){return a.a.createElement("div",null,a.a.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},a.a.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:e.video,width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen"})))}}}]);