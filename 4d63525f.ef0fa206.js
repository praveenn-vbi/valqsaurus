(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),c=(a(0),a(185)),o=a(186),i=(a(188),a(190)),b=(a(54),{id:"export",title:"Export Datasource",sidebar_label:"4. Export Datasource"}),s={unversionedId:"storage/export",id:"storage/export",isDocsHomePage:!1,title:"Export Datasource",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/storage/export.mdx",slug:"/storage/export",permalink:"/storage/export",version:"current",sidebar_label:"4. Export Datasource",sidebar:"sideBar",previous:{title:"Scenario Collaboration",permalink:"/storage/scenario-collab"},next:{title:"Commenting",permalink:"/storage/commenting"}},l=[{value:"Create a Web Data Source URL",id:"create-a-web-data-source-url",children:[]},{value:"Import data from web datasource URL and parameters in Power BI",id:"import-data-from-web-datasource-url-and-parameters-in-power-bi",children:[]},{value:"Live syncing simulations with the export file that fetches real-time data",id:"live-syncing-simulations-with-the-export-file-that-fetches-real-time-data",children:[]}],p={rightToc:l};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Export As Datasource"),"\xa0feature allows the ",Object(c.b)("em",{parentName:"p"},"Data Series")," (Baseline, Comparison, Historical, and Planning Series) and ",Object(c.b)("em",{parentName:"p"},"Scenarios")," of a ValQ model to be made available in a JSON format on the web. "),Object(c.b)("p",null,"This Web URL will be a protected resource, and you need an authorization key to access the JSON data. You can use Export as Datasource feature in some use cases like:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#create-a-web-data-source-url"}),"Export")," the data from ValQ by creating a web data source"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#import-data-from-web-datasource-url-and-parameters-in-power-bi"}),"Import"),' the data back into Power BI (Using Power BI\'s "Get Data from Web" feature) or any other application for further analysis'),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#live-syncing-simulations-with-the-export-file-that-fetches-real-time-data"}),"Live Sync")," simulations with the export file that fetches real-time data")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The authorization key will be generated and will only be available to report Admins."))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This feature is only available in Professional and Enterprise plans."))),Object(c.b)("h2",{id:"create-a-web-data-source-url"},"Create a Web Data Source URL"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click on the 3 dots\xa0",Object(c.b)("inlineCode",{parentName:"p"},"..."),"\xa0next to your user profile and select\xa0",Object(c.b)("strong",{parentName:"p"},'"Export as datasource"'),"."),Object(c.b)("div",{class:"center"},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Export as Datasource",src:Object(o.a)("/doc-images/web-datasource/export-as-datasource.png")})),Object(c.b)("p",null,"Select Export as datasource"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"You can either ",Object(c.b)("strong",{parentName:"p"},"Select")," ",Object(c.b)("em",{parentName:"p"},"Series/Scenarios")," to export, or ",Object(c.b)("strong",{parentName:"p"},"Export all")," of them."))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Choose the ",Object(c.b)("em",{parentName:"p"},"Series/Scenarios")," to export:"),Object(c.b)("div",{class:"center"},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Select the Series/Scenarios to export",src:Object(o.a)("/doc-images/web-datasource/create-web-datasource.png")})),Object(c.b)("p",null," Select Series/Scenarios to create a Web datasource"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Export all the ",Object(c.b)("em",{parentName:"p"},"Series/Scenarios"),":"),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Export all the Series/Scenarios",src:Object(o.a)("/doc-images/web-datasource/export-all.png")})),Object(c.b)("div",{class:"center"},Object(c.b)("p",null,"Export all Series/Scenarios"))))),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click ",Object(c.b)("strong",{parentName:"p"},"Next"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"The data can be exported in either a ",Object(c.b)("em",{parentName:"p"},"Tree structure")," or a ",Object(c.b)("em",{parentName:"p"},"Flat structure")," as shown in the ",Object(c.b)("strong",{parentName:"p"},"Export format")," screen:"),Object(c.b)("p",{parentName:"li"},"a. The data is exported in a tree format just like the ValQ model."),Object(c.b)("div",{class:"center"},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Export Format",src:Object(o.a)("/doc-images/web-datasource/export-format.png")})),Object(c.b)("p",null,"Export format with Tree structure")),Object(c.b)("ul",Object(n.a)({parentName:"li"},{className:"contains-task-list"}),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Customization"),": The tab allows you to select the indicated fields."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Export up to level"),": Select the node-level hierarchy to export."),Object(c.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ",Object(c.b)("strong",{parentName:"li"},"Export only leaf nodes"),": Select the check box to export just the last ",Object(c.b)("em",{parentName:"li"},"Node")," of the Model."),Object(c.b)("li",{parentName:"ul"},"To edit a column's name, click the pencil editor icon next to the column field.")),Object(c.b)("p",{parentName:"li"},"b. The data is exported as a flat table and includes all nodes listed in a column."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Export Format with Flat structure",src:Object(o.a)("/doc-images/web-datasource/export-format-flat-structure.png"),height:"470"})),Object(c.b)("div",{class:"center"},Object(c.b)("p",null,"Export format with Flat structure"))),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Customization"),": The tab in the ",Object(c.b)("em",{parentName:"li"},"Flat")," structure has an additional field - ",Object(c.b)("em",{parentName:"li"},"Show Parent title"),".",Object(c.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The Flat structure does not have the options to export the ",Object(c.b)("em",{parentName:"p"},"node-level hierarchy")," or export just the ",Object(c.b)("em",{parentName:"p"},"leaf nodes"),".")))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Copy and save the\xa0",Object(c.b)("strong",{parentName:"p"},"Web URL"),"\xa0and\xa0",Object(c.b)("strong",{parentName:"p"},"HTTP request header parameters"),"."),Object(c.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The above\xa0Web URL\xa0and\xa0HTTP request\xa0ids are auto-generated. Copy the ids and save them in a file to be used to import the data later.")))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click ",Object(c.b)("strong",{parentName:"p"},"Done"),"."))),Object(c.b)("h2",{id:"import-data-from-web-datasource-url-and-parameters-in-power-bi"},"Import data from web datasource URL and parameters in Power BI"),Object(c.b)("p",null,"In the below example, we'll show how the URL can be consumed in a Power BI report using ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/power-bi/connect-data/desktop-connect-to-web-by-example"}),"Get Data by Web Connector"),"."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"In the PowerBI app go to ",Object(c.b)("strong",{parentName:"p"},"Home > Get Data > Web"),"."),Object(c.b)("div",{class:"center"},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Get Data by Web Connector",src:Object(o.a)("/doc-images/web-datasource/get-data-web.png")})),Object(c.b)("p",null,"Get Data by Web Connector"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select the\xa0",Object(c.b)("em",{parentName:"p"},"Advanced"),"\xa0option"),Object(c.b)("div",{class:"center"},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"web-url-http-request",src:Object(o.a)("/doc-images/web-datasource/web-url-http-request.png")})),Object(c.b)("p",null,"Import web data with Advanced option")),Object(c.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-important alert alert--info"}),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Type ",Object(c.b)("strong",{parentName:"p"},"Authorization")," in the HTTP header field."))),Object(c.b)("p",{parentName:"li"},"Enter the Web URL and HTTP request header parameters obtained in the above ",Object(c.b)("strong",{parentName:"p"},"export format")," section.  ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click ",Object(c.b)("strong",{parentName:"p"},"OK"),".\nThis pops up a preview of the ",Object(c.b)("em",{parentName:"p"},"web datasource")," to be imported."),Object(c.b)("div",{class:"center"},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"preview-of-data",src:Object(o.a)("/doc-images/web-datasource/preview-of-data.png")})),Object(c.b)("p",null,"Preview of the data to be imported")),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"Click ",Object(c.b)("strong",{parentName:"p"},"Load")," to continue loading the data or ",Object(c.b)("strong",{parentName:"p"},"Transform Data")," to configure the data imported from the ",Object(c.b)("em",{parentName:"p"},"web datasource"),".")))),Object(c.b)("h2",{id:"live-syncing-simulations-with-the-export-file-that-fetches-real-time-data"},"Live syncing simulations with the export file that fetches real-time data"),Object(c.b)("p",null,"ValQ data can be used as input for other visuals and further analysis. You can run further simulations to the scenarios and instantly synchronize the new scenario data with the export file by refreshing the data query."),Object(c.b)("div",{class:"center"},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"",src:Object(o.a)("/doc-images/live-synch.png")})),Object(c.b)("p",null,"Live synch simulations")))}m.isMDXComponent=!0},188:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),o=a(187),i=a(8),b=Object(n.createContext)({collectLink:function(){}}),s=a(186),l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,p,m=e.isNavLink,d=e.to,O=e.href,j=e.activeClassName,u=e.isActive,h=e["data-noBrokenLinkCheck"],N=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),v=Object(s.b)().withBaseUrl,g=Object(n.useContext)(b),w=d||O,f=Object(o.a)(w),x=null==w?void 0:w.replace("pathname://",""),y=void 0!==x?function(e){return e.startsWith("/")}(a=x)?v(a):a:void 0,T=Object(n.useRef)(!1),k=m?c.e:c.c,S=i.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!S&&f&&window.docusaurus.prefetch(y),function(){S&&p&&p.disconnect()}}),[y,S,f]);var E=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,C=!y||!f||E;return y&&f&&!E&&!h&&g.collectLink(y),C?r.a.createElement("a",Object.assign({href:y},w&&!f&&{target:"_blank",rel:"noopener noreferrer"},N)):r.a.createElement(k,Object.assign({},N,{onMouseEnter:function(){T.current||(window.docusaurus.preload(y),T.current=!0)},innerRef:function(e){var t,a;S&&e&&f&&(t=e,a=function(){window.docusaurus.prefetch(y)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),a())}))}))).observe(t))},to:y||""},m&&{isActive:u,activeClassName:j}))}}}]);