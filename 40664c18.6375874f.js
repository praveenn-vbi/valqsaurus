(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return g}));var o=n(3),s=n(7),r=(n(0),n(187)),i=n(188),a=(n(190),n(192)),c=(n(54),{id:"history-logs",title:"History Logs",sidebar_label:"6. History Logs"}),l={unversionedId:"storage/history-logs",id:"storage/history-logs",isDocsHomePage:!1,title:"History Logs",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/storage/history-logs.mdx",slug:"/storage/history-logs",permalink:"/storage/history-logs",version:"current",sidebar_label:"6. History Logs",sidebar:"sideBar",previous:{title:"Commenting",permalink:"/storage/commenting"},next:{title:"Model Merge",permalink:"/storage/model-merge"}},b=[{value:"Planning Series Logs",id:"planning-series-logs",children:[]},{value:"Simulation Logs",id:"simulation-logs",children:[]}],u={rightToc:b};function g(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A log of changes made to the model/series/scenarios is maintained in chronological order.\nThe logs are grouped as ",Object(r.b)("em",{parentName:"p"},"Planning")," and ",Object(r.b)("em",{parentName:"p"},"Simulation")," logs.\nTo view, the history logs click on the 3 dots ",Object(r.b)("inlineCode",{parentName:"p"},"... > History Log")," next to your profile on each ",Object(r.b)("strong",{parentName:"p"},"Plan")," and ",Object(r.b)("strong",{parentName:"p"},"Simulate")," tab respectively."),Object(r.b)("h2",{id:"planning-series-logs"},"Planning Series Logs"),Object(r.b)("p",null,"Go to the ",Object(r.b)("strong",{parentName:"p"},"Plan")," tab and click ",Object(r.b)("inlineCode",{parentName:"p"},"... > History log"),"."),Object(r.b)("div",{class:"center"},Object(r.b)(a.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Select Planning series history logs",src:Object(i.a)("/doc-images/storage/features/open-series-history-logs.png")})),Object(r.b)("p",null,"Open history logs for Planning series")),Object(r.b)("p",null,"The logged-in user can view a log of changes made by other users on the selected series.\nYou can click on the dropdown list to select the series to display the logs for."),Object(r.b)("div",{class:"center"},Object(r.b)(a.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"A log of changes in Planning series by all the users",src:Object(i.a)("/doc-images/storage/features/planning-history-logs.png")})),Object(r.b)("p",null,"Log changes on the Planning(brazil) series from all users")),Object(r.b)("p",null,"A user member with edit access on the selected ",Object(r.b)("em",{parentName:"p"},"Series")," can:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Restore the default series values by clicking ",Object(r.b)("strong",{parentName:"li"},"Reset All")," at the top right corner."),Object(r.b)("li",{parentName:"ul"},"Restore to a single step by clicking ",Object(r.b)("strong",{parentName:"li"},"Restore to this step"),".")),Object(r.b)("h2",{id:"simulation-logs"},"Simulation Logs"),Object(r.b)("p",null,"The logged-in user is allowed to view the simulation logs of shared ",Object(r.b)("em",{parentName:"p"},"model/scenario/writeback")," by other users."),Object(r.b)("div",{class:"center"},Object(r.b)(a.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Simulation history logs",src:Object(i.a)("/doc-images/storage/features/simulation-scenario-history-logs.png")})),Object(r.b)("p",null,"Changes made by users on model/scenarios/writeback")),Object(r.b)("p",null,"You can ",Object(r.b)("em",{parentName:"p"},"Filter")," the resulted logs by:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Users: Search the logs by user names"),Object(r.b)("li",{parentName:"ul"},"Dates: Filter the logs by the date created"),Object(r.b)("li",{parentName:"ul"},"Type: Filter logs by type of feature such as - model/scenario/writeback")))}g.isMDXComponent=!0},190:function(e,t,n){"use strict";var o=n(0),s=n.n(o),r=n(10),i=n(189),a=n(8),c=Object(o.createContext)({collectLink:function(){}}),l=n(188),b=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(n[o[s]]=e[o[s]])}return n};t.a=function(e){var t,n,u,g=e.isNavLink,p=e.to,d=e.href,m=e.activeClassName,h=e.isActive,O=e["data-noBrokenLinkCheck"],j=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),f=Object(l.b)().withBaseUrl,y=Object(o.useContext)(c),v=p||d,w=Object(i.a)(v),k=null==v?void 0:v.replace("pathname://",""),N=void 0!==k?function(e){return e.startsWith("/")}(n=k)?f(n):n:void 0,L=Object(o.useRef)(!1),P=g?r.e:r.c,C=a.a.canUseIntersectionObserver;Object(o.useEffect)((function(){return!C&&w&&window.docusaurus.prefetch(N),function(){C&&u&&u.disconnect()}}),[N,C,w]);var S=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,x=!N||!w||S;return N&&w&&!S&&!O&&y.collectLink(N),x?s.a.createElement("a",Object.assign({href:N},v&&!w&&{target:"_blank",rel:"noopener noreferrer"},j)):s.a.createElement(P,Object.assign({},j,{onMouseEnter:function(){L.current||(window.docusaurus.preload(N),L.current=!0)},innerRef:function(e){var t,n;C&&e&&w&&(t=e,n=function(){window.docusaurus.prefetch(N)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:N||""},g&&{isActive:h,activeClassName:m}))}}}]);