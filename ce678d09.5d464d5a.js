(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),i=(n(0),n(190)),a=(n(191),n(194)),c={id:"nodes",title:"Nodes",sidebar_label:"Nodes"},d={unversionedId:"how_to_videos/model/nodes",id:"how_to_videos/model/nodes",isDocsHomePage:!1,title:"Nodes",description:"Nodes",source:"@site/docs/how_to_videos/model/nodes.mdx",slug:"/how_to_videos/model/nodes",permalink:"/how_to_videos/model/nodes",version:"current",sidebar_label:"Nodes",sidebar:"sideBar",previous:{title:"Modelling basics",permalink:"/how_to_videos/model/modelling-basics"},next:{title:"Node Configurations",permalink:"/how_to_videos/model/nodes-config"}},u=[{value:"Nodes",id:"nodes",children:[]},{value:"Node Details Pop-up",id:"node-details-pop-up",children:[]},{value:"Quick Editor",id:"quick-editor",children:[]}],l={rightToc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"nodes"},"Nodes"),Object(i.b)("p",null,"Introduction to nodes and all the elements displayed on it"),Object(i.b)(a.a,{video:"https://player.vimeo.com/video/438789853",responsive:!0,mdxType:"Vimeo"}),Object(i.b)("h2",{id:"node-details-pop-up"},"Node Details Pop-up"),Object(i.b)("p",null,"Explore key insights within each node present in the form of variance calculations, trend & waterfall visualization"),Object(i.b)(a.a,{video:"https://player.vimeo.com/video/438791132",responsive:!0,mdxType:"Vimeo"}),Object(i.b)("h2",{id:"quick-editor"},"Quick Editor"),Object(i.b)("p",null,"Learn how to instantly manage the configuration of multiple nodes at a time."),Object(i.b)(a.a,{video:"https://player.vimeo.com/video/439161024",responsive:!0,mdxType:"Vimeo"}))}s.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=l(n),f=r,m=s["".concat(a,".").concat(f)]||s[f]||p[f]||i;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},191:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(22),o=n(192);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,d=i.absolute,u=void 0!==d&&d;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},192:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n.n(r),i=function(e){return o.a.createElement("div",null,o.a.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},o.a.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:e.video,width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen"})))}}}]);