(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{195:function(e,t,n){"use strict";var o=n(0),a=n.n(o),i=n(11),c=n(194),r=n(8),l=Object(o.createContext)({collectLink:function(){}}),s=n(193),b=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};t.a=function(e){var t,n,d,m=e.isNavLink,p=e.to,u=e.href,O=e.activeClassName,j=e.isActive,g=e["data-noBrokenLinkCheck"],v=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),h=Object(s.b)().withBaseUrl,f=Object(o.useContext)(l),w=p||u,y=Object(c.a)(w),N=null==w?void 0:w.replace("pathname://",""),x=void 0!==N?function(e){return e.startsWith("/")}(n=N)?h(n):n:void 0,k=Object(o.useRef)(!1),T=m?i.e:i.c,M=r.a.canUseIntersectionObserver;Object(o.useEffect)((function(){return!M&&y&&window.docusaurus.prefetch(x),function(){M&&d&&d.disconnect()}}),[x,M,y]);var C=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,L=!x||!y||C;return x&&y&&!C&&!g&&f.collectLink(x),L?a.a.createElement("a",Object.assign({href:x},w&&!y&&{target:"_blank",rel:"noopener noreferrer"},v)):a.a.createElement(T,Object.assign({},v,{onMouseEnter:function(){k.current||(window.docusaurus.preload(x),k.current=!0)},innerRef:function(e){var t,n;M&&e&&y&&(t=e,n=function(){window.docusaurus.prefetch(x)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:x||""},m&&{isActive:j,activeClassName:O}))}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),i=(n(0),n(192)),c=n(193),r=n(195),l=n(197),s=(n(54),{id:"model_overview",title:"Model Overview",sidebar_label:"Model Overview"}),b={unversionedId:"model/model_overview",id:"model/model_overview",isDocsHomePage:!1,title:"Model Overview",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/model/model_overview.mdx",slug:"/model/model_overview",permalink:"/docs/model/model_overview",version:"current",sidebar_label:"Model Overview",sidebar:"sideBar",previous:{title:"The ValQ Workflow",permalink:"/docs/intro/workflow"},next:{title:"Create New Model",permalink:"/docs/model/new"}},d=[{value:"New",id:"new",children:[]},{value:"Node",id:"node",children:[]},{value:"Data series",id:"data-series",children:[]},{value:"Settings",id:"settings",children:[]},{value:"General",id:"general",children:[]}],m={rightToc:d};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In the ",Object(i.b)("em",{parentName:"p"},"Model")," tab you can visualize your data and build models."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(l.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Model screen",src:Object(c.a)("/doc-images/model/model-screen.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Model screen")),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"Model")," screen has 2 sections; namely:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Nodes Panel"),": This is the sidebar-panel on the left, to edit the model nodes and build the model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Canvas(visual)"),": This is the canvas on the right, to visualize the model in tree/table structure.")),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"Model")," tab has five other tabs as shown in the screenshot below:"),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(l.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Model tab options",src:Object(c.a)("/doc-images/model/model2.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Model tab options")),Object(i.b)("h2",{id:"new"},"New"),Object(i.b)("p",null,"To start ",Object(i.b)(r.a,{to:Object(c.a)("docs/model/new"),mdxType:"Link"},"creating new models")," select one of the four options as shown in the screenshot below:"),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(l.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Create new models",src:Object(c.a)("/doc-images/model/model4.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Start building your models")),Object(i.b)("h2",{id:"node"},"Node"),Object(i.b)("p",null,"In the ",Object(i.b)(r.a,{to:Object(c.a)("docs/model/node"),mdxType:"Link"},"Node")," tab you can configure the design and\nfunctionality of the ",Object(i.b)("em",{parentName:"p"},"Nodes")," of a model."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(l.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Node option",src:Object(c.a)("/doc-images/model/model3.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Nodes configuration panel")),Object(i.b)("h2",{id:"data-series"},"Data series"),Object(i.b)(r.a,{to:Object(c.a)("docs/model/data-series"),mdxType:"Link"},"Data Series")," tab allow you to configure the data settings such as Data Series Manager, Time Aggregation Labels and Data Sorting.",Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(l.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Data Series option",src:Object(c.a)("/doc-images/model/model5.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Data Series configurations")),Object(i.b)("h2",{id:"settings"},"Settings"),Object(i.b)("p",null,"In the ",Object(i.b)(r.a,{to:Object(c.a)("docs/model/settings"),mdxType:"Link"},"Settings")," tab you can configure the\nparameters such as ",Object(i.b)("strong",{parentName:"p"},"Navigational Panel, Nodes, Canvas, Number Formatting,\nConditional Formatting, Color Theme")," and ",Object(i.b)("strong",{parentName:"p"},"PopUp screen"),"."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(l.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Settings option",src:Object(c.a)("/doc-images/model/model6.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Settings nav-panel")),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("p",null,"In the ",Object(i.b)(r.a,{to:Object(c.a)("docs/model/general"),mdxType:"Link"},"General")," tab you can configure\nthe general settings such as ",Object(i.b)("strong",{parentName:"p"},"License Registration")," and ",Object(i.b)("strong",{parentName:"p"},"Export your model"),"."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(l.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"General option",src:Object(c.a)("/doc-images/model/model7.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"General options")),Object(i.b)("p",null,"In the upcoming sections, you will learn to build a ValQ model using these options in detail."))}p.isMDXComponent=!0}}]);