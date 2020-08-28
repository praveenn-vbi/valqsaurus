(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),i=(n(0),n(250)),o=n(251),c=n(256),s=(n(118),{id:"analyze_overview",title:"Analyze Overview",sidebar_label:"Analyze Overview"}),u={id:"analysis/analyze_overview",title:"Analyze Overview",description:'import useBaseUrl from "@docusaurus/useBaseUrl"; // Add to the top of the file below the front matter.',source:"@site/docs/analysis/analyze_overview.mdx",permalink:"/docs/analysis/analyze_overview",sidebar_label:"Analyze Overview",sidebar:"sideBar",previous:{title:"Table View",permalink:"/docs/simulation/tableview"},next:{title:"Variance Analysis",permalink:"/docs/analysis/variance_analysis"}},l=[],f={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{style:{textAlign:"justify"}},"The Analyze tab allows you to run advanced analyses on the data. Currently, you can perform the following:")," ",Object(i.b)("br",null),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)(c.a,{to:Object(o.a)("docs/analysis/variance_analysis"),mdxType:"Link"},"Variance Analysis")),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c.a,{to:Object(o.a)("docs/analysis/attribution-analysis"),mdxType:"Link"}," Attribution Analysis"))),Object(i.b)("br",null),"Expect to see additional items in the future such as sensitivity analysis and more.")}p.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},f=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),b=r,d=f["".concat(o,".").concat(b)]||f[b]||p[b]||i;return n?a.a.createElement(d,c({ref:t},u,{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(255);var r=n(252);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},252:function(e,t,n){"use strict";var r=n(0),a=n(48);t.a=function(){return Object(r.useContext)(a.a)}},253:function(e,t,n){var r=n(66),a=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},254:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}},255:function(e,t,n){"use strict";var r=n(17),a=n(34),i=n(253),o="".startsWith;r(r.P+r.F*n(254)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return o?o.call(t,r,n):t.slice(n,n+r.length)===r}})},256:function(e,t,n){"use strict";var r=n(1),a=n(0),i=n.n(a),o=n(35),c=/^\/(?!\/)/;t.a=function(e){var t,n=e.to,s=e.href,u=n||s,l=c.test(u),f=Object(a.useRef)(!1),p="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(a.useEffect)((function(){return!p&&l&&window.docusaurus.prefetch(u),function(){p&&t&&t.disconnect()}}),[u,p,l]),u&&l?i.a.createElement(o.b,Object(r.a)({},e,{onMouseEnter:function(){f.current||(window.docusaurus.preload(u),f.current=!0)},innerRef:function(e){var n,r;p&&e&&l&&(n=e,r=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:u})):i.a.createElement("a",Object(r.a)({},e,{href:u}))}}}]);