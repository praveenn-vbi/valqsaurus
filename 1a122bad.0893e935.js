(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{190:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||b[m]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(190)),o={id:"cumprinc",title:"CUMPRINC"},c={unversionedId:"references/formulas/cumprinc",id:"references/formulas/cumprinc",isDocsHomePage:!1,title:"CUMPRINC",description:"The CUMPRINC function returns cumulative principal paid on a loan between two periods.",source:"@site/docs/references/formulas/cumprinc.mdx",slug:"/references/formulas/cumprinc",permalink:"/references/formulas/cumprinc",version:"current",sidebar:"functionSideBar",previous:{title:"CUMIPMT",permalink:"/references/formulas/cumipmt"},next:{title:"RATE",permalink:"/references/formulas/rate"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],l={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"CUMPRINC")," function returns cumulative principal paid on a loan between two periods."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"CUMPRINC (Rate, Nper, PV, start_period, end_period, Type)\n")),Object(i.b)("h2",{id:"arguments"},"Arguments"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Rate")," \u2013 The interest rate per period. "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Nper")," \u2013 The total number of periods."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"PV")," \u2013 The present value of the loan. "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"start_period")," \u2013 The first payment period. "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"end_period")," \u2013  The last payment period."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Type")," \u2013 Indicates when the payments are made. Type is zero if payments are made at the end of the period and non-zero if payments are made at the start of the period. "),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"Consider a $10,000 loan at an annual rate of 10% that is to be paid off in 3 years. All payments are made at the beginning of the month."),Object(i.b)("p",null,"To calculate the principal payment for a specified range of periods, say between period 12 and 18, the formula should be"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"CUMPRINC (Rate/12, Number of Years*12, Loan Amount, 12, 18, 0)\n")),Object(i.b)("p",null,"The cumulative principal payments between 12th and 18th months is calculated to be ",Object(i.b)("inlineCode",{parentName:"p"},"$1882.04")),Object(i.b)("h2",{id:"excel-equivalent"},"Excel Equivalent"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://support.office.com/en-us/article/CUMPRINC-function-94A4516D-BD65-41A1-BC16-053A6AF4C04D"}),"CUMPRINC")))}u.isMDXComponent=!0}}]);