(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return f}));var n=r(2),o=r(6),i=(r(0),r(187)),a=(r(188),r(192)),s={id:"constraints",title:"Constraints",sidebar_label:"Constraints"},c={unversionedId:"how_to_videos/simulate/constraints",id:"how_to_videos/simulate/constraints",isDocsHomePage:!1,title:"Constraints",description:"// Add to the top of the file below the front matter.",source:"@site/docs/how_to_videos/simulate/constraints.mdx",slug:"/how_to_videos/simulate/constraints",permalink:"/docs/how_to_videos/simulate/constraints",version:"current",sidebar_label:"Constraints",sidebar:"sideBar",previous:{title:"Key Inputs & KPIs",permalink:"/docs/how_to_videos/simulate/kpi"},next:{title:"Visualization Display",permalink:"/docs/how_to_videos/simulate/visualization"}},u=[],l={rightToc:u};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you have a value threshold limit of any node, bring in Min-Max constraints to have a more realistic simulation. Observe a soft alert when the threshold limits are not adhered to."),Object(i.b)(a.a,{video:"https://player.vimeo.com/video/439250765",responsive:!0,mdxType:"Vimeo"}))}f.isMDXComponent=!0},187:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return v}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},f=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),p=n,v=f["".concat(a,".").concat(p)]||f[p]||d[p]||i;return r?o.a.createElement(v,s(s({ref:t},u),{},{components:r})):o.a.createElement(v,s({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},188:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var n=r(190),o=r(189);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,s=void 0!==a&&a,c=i.absolute,u=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(s)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+l:l}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},189:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},190:function(e,t,r){"use strict";var n=r(0),o=r(20);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},192:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),o=r.n(n),i=function(e){return o.a.createElement("div",null,o.a.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},o.a.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:e.video,width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen"})))}}}]);