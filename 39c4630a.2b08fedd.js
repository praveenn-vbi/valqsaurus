(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{204:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,b=p["".concat(o,".").concat(f)]||p[f]||d[f]||i;return t?a.a.createElement(b,c(c({ref:n},l),{},{components:t})):a.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},205:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return o}));var r=t(22),a=t(206);function i(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,l=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(c)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+s:s}(i,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},206:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))},96:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),i=(t(0),t(204)),o=(t(205),{id:"understanding-variances",title:"Understanding Variances"}),c={unversionedId:"general/understanding-variances",id:"general/understanding-variances",isDocsHomePage:!1,title:"Understanding Variances",description:"The starting point for a simulation is a selection of two versions",source:"@site/docs/general/understanding-variances.mdx",slug:"/general/understanding-variances",permalink:"/docs/general/understanding-variances",version:"current"},u=[],l={rightToc:u};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The starting point for a simulation is a selection of two versions\n-",Object(i.b)("strong",{parentName:"p"},"Primary Version")," and a ",Object(i.b)("strong",{parentName:"p"},"Comparison Version")," and a year. For\ninstance a forecast vs current budget."),Object(i.b)("p",null,"Once we start simulating, changes are applied to the primary version. We\ncall this changing version the Simulation."),Object(i.b)("p",null,"To understand the improvements we achieve, we also keep track of the\noriginal values from the primary version without simulation changes. We\ntherefore have 3 data series in the model that we calculate and compare:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Simulation (The Primary Version including applied variations)"),Object(i.b)("li",{parentName:"ol"},"Original (The Primary Version without variations)"),Object(i.b)("li",{parentName:"ol"},"Target (The Comparison Version)")),Object(i.b)("p",null,"Based on the above, we calculate the following variances:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Simulated Variance (Simulation vs Target)")),Object(i.b)("p",null,"Q: If we changed these things, would we hit target?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Simulation Impact (Simulation vs Original)")),Object(i.b)("p",null,"Q: How much would we improve if we made these changes?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Original Variance (Original vs. Target)")),Object(i.b)("p",null,"Q: What was our variance if we did nothing?"))}s.isMDXComponent=!0}}]);