(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{194:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(10),s=a(193),o=a(8),l=Object(n.createContext)({collectLink:function(){}}),c=a(192),u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a};t.a=function(e){var t,a,b,d=e.isNavLink,p=e.to,h=e.href,f=e.activeClassName,m=e.isActive,v=e["data-noBrokenLinkCheck"],g=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),w=Object(c.b)().withBaseUrl,j=Object(n.useContext)(l),O=p||h,y=Object(s.a)(O),S=null==O?void 0:O.replace("pathname://",""),x=void 0!==S?function(e){return e.startsWith("/")}(a=S)?w(a):a:void 0,k=Object(n.useRef)(!1),P=d?r.e:r.c,T=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!T&&y&&window.docusaurus.prefetch(x),function(){T&&b&&b.disconnect()}}),[x,T,y]);var A=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,C=!x||!y||A;return x&&y&&!A&&!v&&j.collectLink(x),C?i.a.createElement("a",Object.assign({href:x},O&&!y&&{target:"_blank",rel:"noopener noreferrer"},g)):i.a.createElement(P,Object.assign({},g,{onMouseEnter:function(){k.current||(window.docusaurus.preload(x),k.current=!0)},innerRef:function(e){var t,a;T&&e&&y&&(t=e,a=function(){window.docusaurus.prefetch(x)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),a())}))}))).observe(t))},to:x||""},d&&{isActive:m,activeClassName:f}))}},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),r=(a(0),a(191)),s=a(192),o=(a(194),a(196)),l=(a(54),{id:"plan_overview",title:"Plan Tab"}),c={unversionedId:"planning/plan_overview",id:"planning/plan_overview",isDocsHomePage:!1,title:"Plan Tab",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/planning/plan_overview.mdx",slug:"/planning/plan_overview",permalink:"/planning/plan_overview",version:"current",sidebar:"sideBar",previous:{title:"General",permalink:"/model/general"},next:{title:"Create New Series",permalink:"/planning/create_new_series"}},u=[{value:"What&#39;s the difference between the Plan &amp; Simulate tabs?",id:"whats-the-difference-between-the-plan--simulate-tabs",children:[{value:"1.Base Data Series vs. Scenario Data",id:"1base-data-series-vs-scenario-data",children:[]},{value:"2.Top-down Spreading &amp; Distribution",id:"2top-down-spreading--distribution",children:[]}]},{value:"Pre-requisite",id:"pre-requisite",children:[]}],b={rightToc:u};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{style:{textAlign:"justify"}},"ValQ\u2019s Plan tab enables you to intuitively perform planning, budgeting & allocations through an editable table interface.")," ",Object(r.b)("br",null),Object(r.b)("p",null,"The most common use cases of the Plan tab are as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a new plan/budget based on an existing data series"),Object(r.b)("li",{parentName:"ul"},"Create a new plan from scratch (Zero-based Budgeting)"),Object(r.b)("li",{parentName:"ul"},"Perform Time Series Forecasting"),Object(r.b)("li",{parentName:"ul"},"Update an existing plan/forecast by leveraging various allocation methods"),Object(r.b)("li",{parentName:"ul"},"Plan continuously by creating a rolling forecast")),Object(r.b)("p",null,"Take a look at the Plan tab below"),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)(o.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"ValQ get",src:Object(s.a)("/doc-images/plan/plan28.png")}))),Object(r.b)("h2",{id:"whats-the-difference-between-the-plan--simulate-tabs"},"What's the difference between the Plan & Simulate tabs?"),Object(r.b)("br",null),"There are two major differences:",Object(r.b)("h3",{id:"1base-data-series-vs-scenario-data"},"1.Base Data Series vs. Scenario Data"),Object(r.b)("div",{style:{textAlign:"justify"}},"The Simulate tab\u2019s purpose is to run simulations visually, create & compare multiple scenarios on-the-fly on the underlying data. The underlying data used by Simulate tab (referred to by the term \u2018base data series\u2019) usually comes from an external source such as a spreadsheet or a SQL database. This base data series cannot be directly modified in the Simulate tab (to maintain the integrity of data). Instead of using the base data series, the Simulate tab allows us to create several scenarios (with each scenario operating on a copy of the base data series). As a result, there is a logical separation between base data series (the original data supplied to the model) vs. scenario data (scenarios created by users).")," ",Object(r.b)("br",null),Object(r.b)("div",{style:{textAlign:"justify"}},"But what if the base data series itself needs to be updated? ",Object(r.b)("br",null),"In such operations, we leverage the Plan tab where we can create a copy of the base data series, update it and use it as a new reference based on which you can create additional scenarios."),Object(r.b)("h3",{id:"2top-down-spreading--distribution"},"2.Top-down Spreading & Distribution"),Object(r.b)("div",{style:{textAlign:"justify"}},"In the Simulate tab, any changes you simulate at a particular node rolls up to the top. However, it does not \u2018allocate\u2019 the impact of such as simulation to its children.")," ",Object(r.b)("br",null),Object(r.b)("div",{style:{textAlign:"justify"}},"The Plan tab, however, does both bottom-up as well as top-down allocations. For example, changes to sales projections for a product can be proportionally allocated to geographies or SKUs. Several top-down allocation methods are supported.")," ",Object(r.b)("br",null),Object(r.b)("div",{style:{textAlign:"justify"}},"Overall, the Simulate tab is meant for executives who are interested in the overall outcomes and impact analysis due to any changes. The Plan tab is meant to ensure that plans/forecasts created by planners are consistent and accurate at all levels."),Object(r.b)("h2",{id:"pre-requisite"},"Pre-requisite"),Object(r.b)("p",null,"A blank ValQ model is required before you can start using the Plan tab"))}d.isMDXComponent=!0}}]);