(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{194:function(e,t,i){"use strict";var n=i(0),a=i.n(n),r=i(10),o=i(193),s=i(8),l=Object(n.createContext)({collectLink:function(){}}),c=i(192),u=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};t.a=function(e){var t,i,b,m=e.isNavLink,d=e.to,p=e.href,v=e.activeClassName,f=e.isActive,h=e["data-noBrokenLinkCheck"],O=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),j=Object(c.b)().withBaseUrl,w=Object(n.useContext)(l),g=d||p,y=Object(o.a)(g),k=null==g?void 0:g.replace("pathname://",""),S=void 0!==k?function(e){return e.startsWith("/")}(i=k)?j(i):i:void 0,C=Object(n.useRef)(!1),N=m?r.e:r.c,_=s.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!_&&y&&window.docusaurus.prefetch(S),function(){_&&b&&b.disconnect()}}),[S,_,y]);var T=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,x=!S||!y||T;return S&&y&&!T&&!h&&w.collectLink(S),x?a.a.createElement("a",Object.assign({href:S},g&&!y&&{target:"_blank",rel:"noopener noreferrer"},O)):a.a.createElement(N,Object.assign({},O,{onMouseEnter:function(){C.current||(window.docusaurus.preload(S),C.current=!0)},innerRef:function(e){var t,i;_&&e&&y&&(t=e,i=function(){window.docusaurus.prefetch(S)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),i())}))}))).observe(t))},to:S||""},m&&{isActive:f,activeClassName:v}))}},90:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return c})),i.d(t,"metadata",(function(){return u})),i.d(t,"rightToc",(function(){return b})),i.d(t,"default",(function(){return d}));var n=i(3),a=i(7),r=(i(0),i(191)),o=i(192),s=i(194),l=i(196),c=(i(54),{id:"simulate_overview",title:"Simulate Tab",sidebar_label:"Simulate Tab"}),u={unversionedId:"simulation/simulate_overview",id:"simulation/simulate_overview",isDocsHomePage:!1,title:"Simulate Tab",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/simulation/simulate_overview.mdx",slug:"/simulation/simulate_overview",permalink:"/simulation/simulate_overview",version:"current",sidebar_label:"Simulate Tab",sidebar:"sideBar",previous:{title:"Edit Model",permalink:"/planning/update"},next:{title:"Simulation Canvas",permalink:"/simulation/simulation_canvas"}},b=[{value:"Pre-requisite",id:"pre-requisite",children:[]}],m={rightToc:b};function d(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Visualize the model you have built in a tree/table format on ValQ's Simulate tab."),Object(r.b)("p",null,"Highlights of Simulate tab:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Simulate on-the-fly and perform what-if analysis"),Object(r.b)("li",{parentName:"ul"},"Create and compare multiple scenarios"),Object(r.b)("li",{parentName:"ul"},"Assign important nodes as KPIs and key inputs to assess progress"),Object(r.b)("li",{parentName:"ul"},"Evaluate performance against a benchmark "),Object(r.b)("li",{parentName:"ul"},"Comment & Collaborate with your team"),Object(r.b)("li",{parentName:"ul"},"Save to Microsoft Azure  ")),Object(r.b)("p",null,"Check out the Simulate tab below "),Object(r.b)("div",{class:"center"},Object(r.b)(l.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"New Tab",src:Object(o.a)("/doc-images/simulate_tab/sim_overview.png")}))),Object(r.b)("div",{style:{textAlign:"justify"}},"The left side panel is called the Navigation Panel and on the right is the ValQ canvas. The Simulate tab on ValQ has it's own properties and here's the discussion on ",Object(r.b)(s.a,{to:Object(o.a)("planning/plan_overview#whats-the-difference-between-the-plan--simulate-tabs"),mdxType:"Link"},"Plan tab Vs Simulate tab")," for better understanding."),Object(r.b)("h2",{id:"pre-requisite"},"Pre-requisite"),Object(r.b)("p",null,"A ValQ model is required before you can start using the Simulate tab"))}d.isMDXComponent=!0}}]);