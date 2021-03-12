(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{192:function(e,n,r){"use strict";r.d(n,"a",(function(){return f})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},f=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(r),p=t,b=f["".concat(a,".").concat(p)]||f[p]||d[p]||i;return r?o.a.createElement(b,c(c({ref:n},l),{},{components:r})):o.a.createElement(b,c({ref:n},l))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},98:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return u})),r.d(n,"default",(function(){return s}));var t=r(3),o=r(7),i=(r(0),r(192)),a={id:"findbyid",title:"findByID"},c={unversionedId:"references/formulas/findbyid",id:"references/formulas/findbyid",isDocsHomePage:!1,title:"findByID",description:"The findByID funtion can be used for tagging or grouping nodes by node ID.",source:"@site/docs/references/formulas/findbyid.mdx",slug:"/references/formulas/findbyid",permalink:"/docs/references/formulas/findbyid",version:"current",sidebar:"functionSideBar",previous:{title:"GETCURRENTRANGE",permalink:"/docs/references/formulas/getcurrentrange"},next:{title:"findByTitle",permalink:"/docs/references/formulas/findbytitle"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:u};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The findByID funtion can be used for tagging or grouping nodes by node ID. "),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("p",null,'findByID("ID match string")'),Object(i.b)("h2",{id:"arguments"},"Arguments"),Object(i.b)("p",null,"ID match string - ID to match the node"),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"Consider a scenario where you want to add all the nodes with Sales in their node ID."),Object(i.b)("p",null,'If the nodes start with Sales, sum can be achieved by using the formula\nSUM(THIS.DESCENDANTS.findByID("^NSales"))   '),Object(i.b)("p",null,'If the nodes end with Sales, sum can be achieved by using the formula\nSUM(THIS.DESCENDANTS.findByID("NSales$")) '))}s.isMDXComponent=!0}}]);