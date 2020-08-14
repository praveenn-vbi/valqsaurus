(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{205:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),i=r(9),o=(r(0),r(247)),a=(r(248),r(254)),c={id:"display-scaling",title:"Value Display & Scaling",sidebar_label:"Value Display & Scaling"},s={id:"how_to_videos/simulate/display-scaling",title:"Value Display & Scaling",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/how_to_videos/simulate/display-scaling.mdx",permalink:"/docs/how_to_videos/simulate/display-scaling",sidebar_label:"Value Display & Scaling",sidebar:"sideBar",previous:{title:"Simulation Period",permalink:"/docs/how_to_videos/simulate/simulation_period"},next:{title:"Key Inputs & KPIs",permalink:"/docs/how_to_videos/simulate/kpi"}},l=[],u={rightToc:l};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Users can choose time aggregation labels and different value scaling options"),Object(o.b)(a.a,{video:"https://player.vimeo.com/video/439247161",responsive:!0,mdxType:"Vimeo"}))}p.isMDXComponent=!0},247:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(a,".").concat(d)]||p[d]||f[d]||o;return r?i.a.createElement(m,c({ref:t},l,{components:r})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},248:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(252);var n=r(249);function i(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},249:function(e,t,r){"use strict";var n=r(0),i=r(48);t.a=function(){return Object(n.useContext)(i.a)}},250:function(e,t,r){var n=r(66),i=r(23);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(e))}},251:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(i){}}return!0}},252:function(e,t,r){"use strict";var n=r(17),i=r(34),o=r(250),a="".startsWith;n(n.P+n.F*r(251)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),r=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return a?a.call(t,n,r):t.slice(r,r+n.length)===n}})},254:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0),i=r.n(n),o=function(e){return i.a.createElement("div",null,i.a.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},i.a.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:e.video,width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen"})))}}}]);