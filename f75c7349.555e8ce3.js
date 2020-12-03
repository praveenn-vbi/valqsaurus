(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(3),o=n(7),s=(n(0),n(204)),a=n(205),i=(n(207),n(209)),c=(n(53),n(211)),l={id:"history-logs",title:"History Logs",sidebar_label:"4. History Logs",hide_title:!0},b={unversionedId:"storage/features/history-logs",id:"storage/features/history-logs",isDocsHomePage:!1,title:"History Logs",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/storage/features/history-logs.md",slug:"/storage/features/history-logs",permalink:"/docs/storage/features/history-logs",version:"current",sidebar_label:"4. History Logs",sidebar:"sideBar",previous:{title:"Commenting",permalink:"/docs/storage/features/commenting"},next:{title:"Model Merge",permalink:"/docs/storage/features/model-merge"}},u=[{value:"Planning Series Logs",id:"planning-series-logs",children:[]},{value:"Simulation Logs",id:"simulation-logs",children:[]}],g={rightToc:u};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)(c.a,{header:"History Logs",image:Object(a.a)("/doc-images/valq-collaborate.png"),mdxType:"Tag"}),Object(s.b)("p",null,"A log of changes made to the model/series/scenarios is maintained in chronological order.\nThe logs are grouped as ",Object(s.b)("em",{parentName:"p"},"Planning")," and ",Object(s.b)("em",{parentName:"p"},"Simulation")," logs.\nTo view, the history logs click on the 3 dots ",Object(s.b)("inlineCode",{parentName:"p"},"... > History Log")," next to your profile on each ",Object(s.b)("strong",{parentName:"p"},"Plan")," and ",Object(s.b)("strong",{parentName:"p"},"Simulate")," tab respectively."),Object(s.b)("h2",{id:"planning-series-logs"},"Planning Series Logs"),Object(s.b)("p",null,"Go to the ",Object(s.b)("strong",{parentName:"p"},"Plan")," tab and click ",Object(s.b)("inlineCode",{parentName:"p"},"... > History log"),"."),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)(i.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Select Planning series history logs",src:Object(a.a)("/doc-images/storage/features/open-series-history-logs.png")}))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Open the history logs for the Planning series")),Object(s.b)("p",null,"The logged-in user can view a log of changes made by other users on the selected series.\nYou can click on the dropdown list to select the series to display the logs for."),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)(i.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"A log of changes in Planning series by all the users",src:Object(a.a)("/doc-images/storage/features/planning-history-logs.png")}))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Log changes on the Planning(brazil) series from all users")),Object(s.b)("p",null,"A user member with edit access on the selected ",Object(s.b)("em",{parentName:"p"},"Series")," can:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Restore the default series values by clicking ",Object(s.b)("em",{parentName:"li"},"Reset All")," at the top right corner."),Object(s.b)("li",{parentName:"ul"},"Restore to a single step by clicking ",Object(s.b)("em",{parentName:"li"},"Restore to this step"),".")),Object(s.b)("h2",{id:"simulation-logs"},"Simulation Logs"),Object(s.b)("p",null,"The logged-in user is allowed to view the simulation logs of shared ",Object(s.b)("em",{parentName:"p"},"model/scenario/writeback")," by other users."),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)(i.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"",src:Object(a.a)("/doc-images/storage/features/simulation-scenario-history-logs.png")}))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Changes made by users on model/scenarios/writeback")),Object(s.b)("p",null,"You can ",Object(s.b)("em",{parentName:"p"},"Filter")," the resulted logs by:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Users: Search the logs by user names"),Object(s.b)("li",{parentName:"ul"},"Dates: Filter the logs by the date created"),Object(s.b)("li",{parentName:"ul"},"Type: Filter logs by type of feature such as - model/scenario/writeback")))}m.isMDXComponent=!0},207:function(e,t,n){"use strict";var r=n(0),o=n.n(r),s=n(10),a=n(206),i=n(11),c=Object(r.createContext)({collectLink:function(){}}),l=n(205),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,u,g=e.isNavLink,m=e.to,d=e.href,p=e.activeClassName,h=e.isActive,O=e["data-noBrokenLinkCheck"],f=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),j=Object(l.b)().withBaseUrl,y=Object(r.useContext)(c),v=m||d,w=Object(a.a)(v),N=null==v?void 0:v.replace("pathname://",""),k=void 0!==N?function(e){return e.startsWith("/")}(n=N)?j(n):n:void 0,L=Object(r.useRef)(!1),x=g?s.e:s.c,T=i.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!T&&w&&window.docusaurus.prefetch(k),function(){T&&u&&u.disconnect()}}),[k,T,w]);var P=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,C=!k||!w||P;return k&&w&&!P&&!O&&y.collectLink(k),C?o.a.createElement("a",Object.assign({href:k},v&&!w&&{target:"_blank",rel:"noopener noreferrer"},f)):o.a.createElement(x,Object.assign({},f,{onMouseEnter:function(){L.current||(window.docusaurus.preload(k),L.current=!0)},innerRef:function(e){var t,n;T&&e&&w&&(t=e,n=function(){window.docusaurus.prefetch(k)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:k||""},g&&{isActive:h,activeClassName:p}))}},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n.n(r),s=(n(23),n(36),function(e){return o.a.createElement("div",{className:"productTag"},o.a.createElement("header",null,o.a.createElement("h1",null,e.header),o.a.createElement("div",null,o.a.createElement("img",{src:e.image}))))})}}]);