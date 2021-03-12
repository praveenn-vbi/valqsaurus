(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),o=(n(0),n(192)),l=n(193),c=(n(195),n(197)),s=(n(54),{id:"update",title:"Edit Model",sidebar_label:"Edit Model"}),r={unversionedId:"planning/update",id:"planning/update",isDocsHomePage:!1,title:"Edit Model",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/planning/update.mdx",slug:"/planning/update",permalink:"/docs/planning/update",version:"current",sidebar_label:"Edit Model",sidebar:"sideBar",previous:{title:"Sample Business Cases",permalink:"/docs/planning/business_cases"},next:{title:"Simulate Overview",permalink:"/docs/simulation/simulate_overview"}},b=[],d={rightToc:b};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{style:{textAlign:"justify"}},"On ValQ, you can make changes to your model and update an existing plan while planning. Here's an example showing how to add a new node to the model while planning.")," ",Object(o.b)("br",null),Object(o.b)("p",null,"The below image shows an existing plan on ValQ"),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/plan/plan22.1.png")})))," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"Currently, the ValQ model is locked and the nodes are disabled as seen in the Figure below. To edit the model, click on the Unlock button.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/plan/plan22.png")})))," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"You will see a pop-up with a warning message as displayed in the image below. Select Yes to continue.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/plan/plan23.png")})))," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"Now make changes to the model and re-lock it to view the updated plan. Here, node 'Other' has been added as seen in the below image.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/plan/plan24.png")})))," ",Object(o.b)("br",null),Object(o.b)("p",null,"Select Yes to confirm locking the model."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/plan/plan25.png")})))," ",Object(o.b)("br",null),Object(o.b)("p",null,"The plan has been updated as seen below."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/plan/plan26.png")}))))}u.isMDXComponent=!0},195:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(11),l=n(194),c=n(8),s=Object(a.createContext)({collectLink:function(){}}),r=n(193),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};t.a=function(e){var t,n,d,u=e.isNavLink,p=e.to,g=e.href,m=e.activeClassName,O=e.isActive,j=e["data-noBrokenLinkCheck"],v=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),f=Object(r.b)().withBaseUrl,h=Object(a.useContext)(s),w=p||g,y=Object(l.a)(w),x=null==w?void 0:w.replace("pathname://",""),k=void 0!==x?function(e){return e.startsWith("/")}(n=x)?f(n):n:void 0,A=Object(a.useRef)(!1),T=u?o.e:o.c,C=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!C&&y&&window.docusaurus.prefetch(k),function(){C&&d&&d.disconnect()}}),[k,C,y]);var E=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,Q=!k||!y||E;return k&&y&&!E&&!j&&h.collectLink(k),Q?i.a.createElement("a",Object.assign({href:k},w&&!y&&{target:"_blank",rel:"noopener noreferrer"},v)):i.a.createElement(T,Object.assign({},v,{onMouseEnter:function(){A.current||(window.docusaurus.preload(k),A.current=!0)},innerRef:function(e){var t,n;C&&e&&y&&(t=e,n=function(){window.docusaurus.prefetch(k)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:k||""},u&&{isActive:O,activeClassName:m}))}}}]);