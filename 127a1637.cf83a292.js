(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{205:function(e,t,a){"use strict";var l=a(0),n=a.n(l),i=a(11),o=a(204),b=a(8),c=Object(l.createContext)({collectLink:function(){}}),r=a(203),s=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(a[l[n]]=e[l[n]])}return a};t.a=function(e){var t,a,u,O=e.isNavLink,m=e.to,j=e.href,d=e.activeClassName,p=e.isActive,g=e["data-noBrokenLinkCheck"],v=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),h=Object(r.b)().withBaseUrl,f=Object(l.useContext)(c),y=m||j,w=Object(o.a)(y),V=null==y?void 0:y.replace("pathname://",""),N=void 0!==V?function(e){return e.startsWith("/")}(a=V)?h(a):a:void 0,Q=Object(l.useRef)(!1),x=O?i.e:i.c,k=b.a.canUseIntersectionObserver;Object(l.useEffect)((function(){return!k&&w&&window.docusaurus.prefetch(N),function(){k&&u&&u.disconnect()}}),[N,k,w]);var A=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,I=!N||!w||A;return N&&w&&!A&&!g&&f.collectLink(N),I?n.a.createElement("a",Object.assign({href:N},y&&!w&&{target:"_blank",rel:"noopener noreferrer"},v)):n.a.createElement(x,Object.assign({},v,{onMouseEnter:function(){Q.current||(window.docusaurus.preload(N),Q.current=!0)},innerRef:function(e){var t,a;k&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(N)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:N||""},O&&{isActive:p,activeClassName:d}))}},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return O}));var l=a(3),n=a(7),i=(a(0),a(202)),o=a(203),b=(a(205),a(207)),c=(a(54),{id:"install",title:"How to install ValQ?",sidebar_label:"Installing ValQ"}),r={unversionedId:"intro/install",id:"intro/install",isDocsHomePage:!1,title:"How to install ValQ?",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/intro/install.mdx",slug:"/intro/install",permalink:"/docs/intro/install",version:"current",sidebar_label:"Installing ValQ",sidebar:"sideBar",previous:{title:"ValQ Editions",permalink:"/docs/intro/versions"},next:{title:"Using ValQ - An Example",permalink:"/docs/intro/model"}},s=[{value:"Get ValQ",id:"get-valq",children:[{value:"1. Import a visual from a file",id:"1-import-a-visual-from-a-file",children:[]},{value:"2. Get more visuals - AppSource",id:"2-get-more-visuals---appsource",children:[]},{value:"3. Get more visuals - My organization",id:"3-get-more-visuals---my-organization",children:[]}]},{value:"Launch ValQ",id:"launch-valq",children:[]}],u={rightToc:s};function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(l.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this section, you will:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Learn how to ",Object(i.b)("a",Object(l.a)({parentName:"li"},{href:"#get-valq"}),"install")," ValQ on Power BI Desktop"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(l.a)({parentName:"li"},{href:"#launch-valq"}),"Launch")," ValQ")),Object(i.b)("h2",{id:"get-valq"},"Get ValQ"),Object(i.b)("p",null,"You can use any of the following three ways to get ValQ added to Microsoft Power BI:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(l.a)({parentName:"li"},{href:"#1-import-a-visual-from-a-file"}),"Import a visual from a file")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(l.a)({parentName:"li"},{href:"#2-get-more-visuals---appsource"}),"Get more visuals - AppSource")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(l.a)({parentName:"li"},{href:"#3-get-more-visuals---my-organization"}),"Get more visuals - My organization"))),Object(i.b)("h3",{id:"1-import-a-visual-from-a-file"},"1. Import a visual from a file"),Object(i.b)("div",{style:{textAlign:"justify"}},"Import a visual from a file option is used when you have ValQ as a .pbiviz file in your local machine. ",Object(i.b)("br",null)," ",Object(i.b)("br",null),"1. a) To get started, click on the ellipses under the Visualizations pane and choose Import a visual from a file option as shown in the image below.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install2.png")})))," ",Object(i.b)("br",null),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"b) Now select the ",Object(i.b)("inlineCode",{parentName:"li"},".pbiviz")," file available in your local desktop to import ValQ into Power BI.",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install5.png")})))," ",Object(i.b)("br",null),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"c) Once the file gets imported, you will see the message as shown below. Click OK.",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install6.png")})))," ",Object(i.b)("br",null),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"d) You have successfully added ValQ to Microsoft Power BI. You will now be able to see ValQ now under the Visualizations pane.",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install7.png")}))),Object(i.b)("h3",{id:"2-get-more-visuals---appsource"},"2. Get more visuals - AppSource"),Object(i.b)("p",null,"Get more visuals option can be used to download ValQ from the AppSource marketplace."),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"a) To get started, click on the 3 ",Object(i.b)("inlineCode",{parentName:"li"},"...")," under the Visualizations pane and select ",Object(i.b)("strong",{parentName:"li"},"Get more visuals"),".")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install3.png")})))," ",Object(i.b)("br",null),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"b) If you have not signed in to Microsoft Power BI already, you would be prompted to sign in to access the marketplace.",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install8.png")})))," ",Object(i.b)("br",null),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"c) Simply search for ValQ in the search bar and add the visual to Power BI, click ",Object(i.b)("strong",{parentName:"li"},"Add"),".",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install9.png")})))," ",Object(i.b)("br",null),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"d) Once the file gets imported, you will see the message as shown below. Click ",Object(i.b)("strong",{parentName:"li"},"OK"),".",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install6.png")})))," ",Object(i.b)("br",null),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"e) You have successfully added ValQ to Microsoft Power BI. ",Object(i.b)("strong",{parentName:"li"},"ValQ")," is now listed in the Visualizations pane.",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install4.png")}))),Object(i.b)("h3",{id:"3-get-more-visuals---my-organization"},"3. Get more visuals - My organization"),Object(i.b)("p",null,"Get more visuals option can also be used to download ValQ when the visual is a part of ",Object(i.b)("em",{parentName:"p"},"My Organization")," marketplace."),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"a) To get started, click on the 3 ",Object(i.b)("inlineCode",{parentName:"li"},"...")," in the Visualizations pane and choose ",Object(i.b)("strong",{parentName:"li"},"Get more visuals"),".")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install3.png")})))," ",Object(i.b)("br",null),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"b) If you have not signed in to Microsoft Power BI already, you would be prompted to sign in to access the marketplace.",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install8.png")})))," ",Object(i.b)("br",null),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"c) Switch to the 'MY ORGANIZATION' tab to identify the ValQ visual and click ",Object(i.b)("strong",{parentName:"li"},"Add")," to get the ValQ visual.",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install12.png")})))," ",Object(i.b)("br",null),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note ",Object(i.b)("br",null),"\nValQ will be available here only if the administrator from your organization has enabled ValQ")),Object(i.b)("br",null),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"d) Once the file gets imported, you will see the message as shown below. Click ",Object(i.b)("strong",{parentName:"li"},"OK"),".",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install6.png")}))),Object(i.b)("br",null),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"e) You have successfully added ValQ to Microsoft Power BI. You will now be able to see ValQ now under the Visualizations pane.",Object(i.b)("br",null))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install4.png")})))," ",Object(i.b)("h2",{id:"launch-valq"},"Launch ValQ"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To begin, click on the ValQ icon. You will see ValQ visual on the canvas."),Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install13.png")}))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Expand the visual to fit the screen. You can now start using ValQ by assigning value to the visual."),Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(o.a)("/doc-images/install/install14.png")})))))}O.isMDXComponent=!0}}]);