(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),o=(n(0),n(192)),a={id:"findbytitle",title:"findByTitle"},c={unversionedId:"references/formulas/findbytitle",id:"references/formulas/findbytitle",isDocsHomePage:!1,title:"findByTitle",description:"The findByTitle funtion can be used for tagging or grouping nodes by node title.",source:"@site/docs/references/formulas/findbytitle.mdx",slug:"/references/formulas/findbytitle",permalink:"/docs/references/formulas/findbytitle",version:"current",sidebar:"functionSideBar",previous:{title:"findByID",permalink:"/docs/references/formulas/findbyid"},next:{title:"THIS_ID",permalink:"/docs/references/formulas/thisid"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The findByTitle funtion can be used for tagging or grouping nodes by node title. "),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("p",null,'findByID("Title match string")'),Object(o.b)("h2",{id:"arguments"},"Arguments"),Object(o.b)("p",null,"Title match string - Title to match the node"),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Consider a scenario where you want to add all the nodes with Sales in their node title."),Object(o.b)("p",null,'If the nodes start with Sales, sum can be achieved by using the formula\nSUM(THIS.DESCENDANTS.findByTitle("^NSales"))   '),Object(o.b)("p",null,'If the nodes end with Sales, sum can be achieved by using the formula\nSUM(THIS.DESCENDANTS.findByTitle("NSales$")) '))}s.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),p=r,b=f["".concat(a,".").concat(p)]||f[p]||d[p]||o;return n?i.a.createElement(b,c(c({ref:t},u),{},{components:n})):i.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);