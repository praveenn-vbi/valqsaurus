(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{187:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),o=(r(0),r(244)),i=(r(245),r(251)),s={id:"data-series",title:"Data Series",sidebar_label:"6. Data Series"},c={id:"how_to_videos/model/data-series",title:"Data Series",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/how_to_videos/model/data-series.mdx",permalink:"/docs/how_to_videos/model/data-series",sidebar_label:"6. Data Series",sidebar:"sideBar",previous:{title:"General",permalink:"/docs/how_to_videos/model/general"},next:{title:"Create a New Data Series",permalink:"/docs/how_to_videos/plan/data-series"}},l=[{value:"Data Series Manager",id:"data-series-manager",children:[]},{value:"Customize Time Aggregation Labels",id:"customize-time-aggregation-labels",children:[]}],u={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"data-series-manager"},"Data Series Manager"),Object(o.b)("p",null,"Users can view, manage and customize data series for better synchronization of data source values and time period labels"),Object(o.b)(i.a,{video:"https://player.vimeo.com/video/439172908",responsive:!0,mdxType:"Vimeo"}),Object(o.b)("h2",{id:"customize-time-aggregation-labels"},"Customize Time Aggregation Labels"),Object(o.b)("p",null,"Allows you to override and customize labels of Time Aggregations which appears on navigation panel & node pop-up screen"),Object(o.b)(i.a,{video:"https://player.vimeo.com/video/439200422",responsive:!0,mdxType:"Vimeo"}))}p.isMDXComponent=!0},244:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?a.a.createElement(m,s({ref:t},l,{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},245:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(249);var n=r(246);function a(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},246:function(e,t,r){"use strict";var n=r(0),a=r(48);t.a=function(){return Object(n.useContext)(a.a)}},247:function(e,t,r){var n=r(66),a=r(23);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},248:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(a){}}return!0}},249:function(e,t,r){"use strict";var n=r(17),a=r(34),o=r(247),i="".startsWith;n(n.P+n.F*r(248)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,r):t.slice(r,r+n.length)===n}})},251:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0),a=r.n(n),o=function(e){return a.a.createElement("div",null,a.a.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},a.a.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:e.video,width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen"})))}}}]);