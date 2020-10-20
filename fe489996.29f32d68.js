(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{248:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),c=(n(0),n(253)),o={id:"not",title:"NOT"},l={id:"references/formulas/not",title:"NOT",description:"A `NOT` statement returns TRUE if the argument is FALSE and FALSE if the argument is TRUE. ",source:"@site/docs/references/formulas/not.mdx",permalink:"/docs/references/formulas/not",sidebar:"functionSideBar",previous:{title:"OR",permalink:"/docs/references/formulas/or"},next:{title:"XOR",permalink:"/docs/references/formulas/xor"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],u={rightToc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A ",Object(c.b)("inlineCode",{parentName:"p"},"NOT")," statement returns TRUE if the argument is FALSE and FALSE if the argument is TRUE. "),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"NOT ( logical_test )\n")),Object(c.b)("h2",{id:"arguments"},"Arguments"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"logical_test")," \u2013 The condition to be evaluated."),Object(c.b)("h2",{id:"return-value"},"Return value"),Object(c.b)("p",null,"Either True or False"),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("p",null,"Consider a scenario in which an employee is eligible for Sales Bonus if Total Sales is greater than Sales Goal.\nSales Bonus is calculated as Bonus% * Total Sales."),Object(c.b)("p",null,"To achieve this, the formula should be "),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"IF (NOT (Total Sales > Sales Goal), 0 , Bonus% * Total Sales)\n")),Object(c.b)("h2",{id:"excel-equivalent"},"Excel Equivalent"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://support.office.com/en-gb/article/not-function-9cfc6011-a054-40c7-a140-cd4ba2d87d77"}),"NOT")))}s.isMDXComponent=!0},253:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,d=p["".concat(o,".").concat(f)]||p[f]||b[f]||c;return n?a.a.createElement(d,l({ref:t},u,{components:n})):a.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);