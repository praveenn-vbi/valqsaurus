(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{125:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return u})),n.d(r,"rightToc",(function(){return i})),n.d(r,"default",(function(){return s}));var t=n(3),o=n(7),a=(n(0),n(190)),c={id:"current_node_value",title:"CURRENT_NODE_VALUE"},u={unversionedId:"references/formulas/current_node_value",id:"references/formulas/current_node_value",isDocsHomePage:!1,title:"CURRENT_NODE_VALUE",description:"The CURRENTNODEVALUES funtion returns the current node's previous period value.",source:"@site/docs/references/formulas/current_node_value.mdx",slug:"/references/formulas/current_node_value",permalink:"/references/formulas/current_node_value",version:"current",sidebar:"functionSideBar",previous:{title:"DSSERIES",permalink:"/references/formulas/additional_series"},next:{title:"NODE PROPERTIES",permalink:"/references/formulas/node-properties"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:i};function s(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The CURRENT_NODE_VALUES funtion returns the current node's previous period value."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"CURRENT_NODE_VALUES.get(index)"),Object(a.b)("h2",{id:"arguments"},"Arguments"),Object(a.b)("p",null,"index - a reference to the period index commonly achieved by CURRENT_PERIOD_INDEX "),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"Consider a scenario where you want to assign 100 as the first month value and you want the\nsubsequent periods to have a month-on-month growth of 10%"),Object(a.b)("p",null,"This can be achieved by using the formula\nIF ( CURRENT_PERIOD_INDEX == 1, 1000, CURRENT_NODE_VALUES.GET(CURRENT_PERIOD_INDEX-1) * 1.1)"))}s.isMDXComponent=!0},190:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},p=function(e){var r=s(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=t,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return n?o.a.createElement(m,u(u({ref:r},l),{},{components:n})):o.a.createElement(m,u({ref:r},l))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=d;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:t,c[1]=u;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);