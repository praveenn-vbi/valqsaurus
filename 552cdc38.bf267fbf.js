(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),o=(a(0),a(184)),r=a(185),s=a(187),c=a(189),l=(a(54),{id:"analyze_overview",title:"Analyze Tab",sidebar_label:"Analyze Tab"}),u={unversionedId:"analysis/analyze_overview",id:"analysis/analyze_overview",isDocsHomePage:!1,title:"Analyze Tab",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/analysis/analyze_overview.mdx",slug:"/analysis/analyze_overview",permalink:"/analysis/analyze_overview",version:"current",sidebar_label:"Analyze Tab",sidebar:"sideBar",previous:{title:"Support for Touch Devices",permalink:"/simulation/touch-support"},next:{title:"Variance Analysis",permalink:"/analysis/variance_analysis"}},b=[],d={rightToc:b};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Run advanced analysis on your data model and evaluate your business performance to take actions using ValQ\u2019s Analyze tab."),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/analyze/analyze-tab.png")}))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Analyze tab and the 3 types of analysis")),Object(o.b)("p",null,"Below are the 3 types of analysis that you can perform:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)(s.a,{to:Object(r.a)("analysis/variance_analysis"),mdxType:"Link"},"Variance Analysis"),": Compare multiple series/scenario to calculate the absolute and percentage variance for each node in the model."),Object(o.b)("li",{parentName:"ol"},Object(o.b)(s.a,{to:Object(r.a)("analysis/attribution-analysis"),mdxType:"Link"},"Attribution Analysis"),": Evaluate the simulation impact of various input nodes and it's cumulative effect on the Key Performance Indicator."),Object(o.b)("li",{parentName:"ol"},Object(o.b)(s.a,{to:Object(r.a)("analysis/sensitivity-analysis"),mdxType:"Link"},"Sensitivity Analysis"),": Identify and analyze how the output node gets affected in response to deviation in a value driver represented by way of a tornado chart.")))}p.isMDXComponent=!0},187:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(10),r=a(186),s=a(8),c=Object(n.createContext)({collectLink:function(){}}),l=a(185),u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a};t.a=function(e){var t,a,b,d=e.isNavLink,p=e.to,y=e.href,v=e.activeClassName,f=e.isActive,m=e["data-noBrokenLinkCheck"],O=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),j=Object(l.b)().withBaseUrl,h=Object(n.useContext)(c),w=p||y,g=Object(r.a)(w),k=null==w?void 0:w.replace("pathname://",""),z=void 0!==k?function(e){return e.startsWith("/")}(a=k)?j(a):a:void 0,A=Object(n.useRef)(!1),T=d?o.e:o.c,x=s.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!x&&g&&window.docusaurus.prefetch(z),function(){x&&b&&b.disconnect()}}),[z,x,g]);var _=null!==(t=null==z?void 0:z.startsWith("#"))&&void 0!==t&&t,L=!z||!g||_;return z&&g&&!_&&!m&&h.collectLink(z),L?i.a.createElement("a",Object.assign({href:z},w&&!g&&{target:"_blank",rel:"noopener noreferrer"},O)):i.a.createElement(T,Object.assign({},O,{onMouseEnter:function(){A.current||(window.docusaurus.preload(z),A.current=!0)},innerRef:function(e){var t,a;x&&e&&g&&(t=e,a=function(){window.docusaurus.prefetch(z)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),a())}))}))).observe(t))},to:z||""},d&&{isActive:f,activeClassName:v}))}}}]);