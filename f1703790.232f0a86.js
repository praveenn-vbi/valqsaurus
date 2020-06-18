(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(9),o=(n(0),n(213)),i=n(214),s={id:"overview",title:"Understanding the features"},c={id:"planning/overview",title:"Understanding the features",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/planning/overview.mdx",permalink:"/docs/planning/overview"},l=[],u={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With the Plan Tab, it is possible to create new plans based on existing\ndata (e.g. prior period actuals or existing budget) or from scratch\n(Zero-based budgeting)."),Object(o.b)("p",null,"On clicking the Plan Tab, the 'New Series' popup opens. Before creating\na new series the user is required to click on the 'Lock' button. This\nensures that the node hierarchy is fixed and no structural changes are\npossible unless unlocked again."),Object(o.b)("img",{alt:"Locking the model",src:Object(i.a)("/doc-images//PL_1.png")}),Object(o.b)("p",null,"Once locked, the new series can be renamed and the base series can be\nchosen. The new series can be created based on 'Budget', 'Forecast' or\nfrom scratch by selecting 'Empty Series' option. In the figure below,\nthe series has been named 'Jan Forecast' and 'Budget' has been selected\nas the series to start with."),Object(o.b)("img",{alt:"Creating a new series",src:Object(i.a)("/doc-images//PL_2.png")}),Object(o.b)("p",null,"On clicking 'Submit', the 'Input Editor' screen opens."),Object(o.b)("p",null,"The name of the series gets highlighted as shown in the figure below.\nThe footer highlights the base series from which the particular series\nhas been created."),Object(o.b)("img",{alt:"Input Editor screen",src:Object(i.a)("/doc-images//PL_3.png")}),Object(o.b)("p",null,"The newly created series can be set as the primary or the comparison\nseries by clicking on the settings icon. The series can also be renamed\nor deleted by choosing the appropriate option."),Object(o.b)("img",{alt:"Context Menu",src:Object(i.a)("/doc-images//PL_4.png"),style:{width:"50%"}}),Object(o.b)("p",null,"In the 'Action Menu\u2019, options to allocate values, add notes, refresh\ndatasource and view history are present."),Object(o.b)("img",{alt:"Action Menu",src:Object(i.a)("/doc-images//PL_5.png")}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"'Weight' and 'Equals' options can be used to allocate a node's\na. 'Total' value across all periods"),Object(o.b)("li",{parentName:"ol"},"'Trend' and 'Copy-to' options can be used to edit period values"),Object(o.b)("li",{parentName:"ol"},"Child nodes can be allocated either by weight or equally by choosing\na. the 'Weight' or 'Equal' option in the 'Allocate children' section.\nb. 'Copy-to' can be used to copy a node's value to its sibling nodes."),Object(o.b)("li",{parentName:"ol"},"'Hold' and 'Release' can be used to lock or unlock certain cells as\na. needed."),Object(o.b)("li",{parentName:"ol"},"'Note' option lets the user to add, modify or delete notes."),Object(o.b)("li",{parentName:"ol"},"On clicking 'Refresh Datasource', the newly created series gets\na. updated if there are any changes to the input data."),Object(o.b)("li",{parentName:"ol"},"'View History' can be used to view the changes performed and also\na. roll back changes.")),Object(o.b)("p",null,"There is a 'Search' option which is particularly useful when using large\nmodels. On entering a node name or node ID, only the corresponding node\nand its child nodes get displayed."),Object(o.b)("img",{alt:"Search option for filtering nodes",src:Object(i.a)("/doc-images//PL_6.png")}),Object(o.b)("p",null,"The model along with the overall and period values get displayed in a\ntable form. In case, the empty series has been chosen as the series to\nstart with, only the structure and relationships are displayed and not\nthe values."),Object(o.b)("p",null,"On selecting a cell, additional information such as the calculation\nmethod and time aggregation for the node appears in the footer. The\nnumber format and scaling that were configured while modelling are\nretained. The 'Number Bar' will have the absolute value irrespective of\nthe format and scaling."),Object(o.b)("img",{alt:"Table view",src:Object(i.a)("/doc-images//PL_8.png")}))}d.isMDXComponent=!0},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,h=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return n?a.a.createElement(h,s({ref:t},l,{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(218);var r=n(215);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},215:function(e,t,n){"use strict";var r=n(0),a=n(48);t.a=function(){return Object(r.useContext)(a.a)}},216:function(e,t,n){var r=n(66),a=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},217:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}},218:function(e,t,n){"use strict";var r=n(17),a=n(34),o=n(216),i="".startsWith;r(r.P+r.F*n(217)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,n):t.slice(n,n+r.length)===r}})}}]);