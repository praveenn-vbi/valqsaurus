(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{176:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return u})),r.d(n,"default",(function(){return p}));var t=r(1),o=r(9),a=(r(0),r(244)),c={id:"current_node_value",title:"CURRENT_NODE_VALUE"},i={id:"references/formulas/current_node_value",title:"CURRENT_NODE_VALUE",description:"The CURRENT_NODE_VALUES funtion returns the current node's previous period value.",source:"@site/docs/references/formulas/current_node_value.mdx",permalink:"/docs/references/formulas/current_node_value",sidebar:"functionSideBar",previous:{title:"DSSERIES",permalink:"/docs/references/formulas/additional_series"},next:{title:"NODE PROPERTIES",permalink:"/docs/references/formulas/node-properties"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:u};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The CURRENT_NODE_VALUES funtion returns the current node's previous period value."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"CURRENT_NODE_VALUES.get(index)"),Object(a.b)("h2",{id:"arguments"},"Arguments"),Object(a.b)("p",null,"index - a reference to the period index commonly achieved by CURRENT_PERIOD_INDEX "),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"Consider a scenario where you want to assign 100 as the first month value and you want the\nsubsequent periods to have a month-on-month growth of 10%"),Object(a.b)("p",null,"This can be achieved by using the formula\nIF ( CURRENT_PERIOD_INDEX == 1, 1000, CURRENT_NODE_VALUES.GET(CURRENT_PERIOD_INDEX-1) * 1.1)"))}p.isMDXComponent=!0},244:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i({},n,{},e)),r},s=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),d=t,m=s["".concat(c,".").concat(d)]||s[d]||f[d]||a;return r?o.a.createElement(m,i({ref:n},l,{components:r})):o.a.createElement(m,i({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);