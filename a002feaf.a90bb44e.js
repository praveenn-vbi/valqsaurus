(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),c=(a(0),a(205)),o=a(206),i=(a(208),a(210)),b=(a(53),a(212)),s={id:"export",title:"Export Datasource",sidebar_label:"2. Export Datasource",hide_title:!0},l={unversionedId:"storage/features/export",id:"storage/features/export",isDocsHomePage:!1,title:"Export Datasource",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/storage/features/export.md",slug:"/storage/features/export",permalink:"/docs/storage/features/export",version:"current",sidebar_label:"2. Export Datasource",sidebar:"sideBar",previous:{title:"Saving Model To Workspace",permalink:"/docs/storage/features/save-model"},next:{title:"Commenting",permalink:"/docs/storage/features/commenting"}},p=[{value:"Create a Web Data Source URL",id:"create-a-web-data-source-url",children:[]},{value:"Import data from web datasource URL and parameters in Power BI",id:"import-data-from-web-datasource-url-and-parameters-in-power-bi",children:[]},{value:"Live syncing simulations with the export file that fetches real-time data",id:"live-syncing-simulations-with-the-export-file-that-fetches-real-time-data",children:[]}],m={rightToc:p};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(b.a,{header:"Export Datasource",image:Object(o.a)("/doc-images/valq-collaborate.png"),mdxType:"Tag"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Export As Datasource"),"\xa0feature allows the ",Object(c.b)("em",{parentName:"p"},"Data Series")," (Baseline, Comparison, Historical, and Planning Series) and ",Object(c.b)("em",{parentName:"p"},"Scenarios")," of a ValQ model to be made available in a JSON format on the web. "),Object(c.b)("p",null,"This Web URL will be a protected resource and an authorization key will be needed to access the JSON data. This feature can be used in some use cases like:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#create-a-web-data-source-url"}),"Export")," the data from ValQ by creating a web data source"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#import-data-from-web-datasource-url-and-parameters-in-power-bi"}),"Import"),' the data back into Power BI (Using Power BI\'s "Get Data from Web" feature) or any other application for further analysis'),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#live-syncing-simulations-with-the-export-file-that-fetches-real-time-data"}),"Live Sync")," simulations with the export file that fetches real-time data")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The authorization key will be generated and will only be available to report Admins."))),Object(c.b)("h2",{id:"create-a-web-data-source-url"},"Create a Web Data Source URL"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click on the 3 dots\xa0",Object(c.b)("inlineCode",{parentName:"p"},"..."),"\xa0next to your user profile and select\xa0",Object(c.b)("strong",{parentName:"p"},'"Export as datasource"'),"."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Export as Datasource",src:Object(o.a)("/doc-images/web-datasource/export-as-datasource.png")}))),Object(c.b)("p",{parentName:"li"},Object(c.b)("em",{parentName:"p"},"Select Export as datasource"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"You can either ",Object(c.b)("strong",{parentName:"p"},"Select")," the\xa0",Object(c.b)("em",{parentName:"p"},"Series/Scenarios")," that you want to export, or ",Object(c.b)("strong",{parentName:"p"},"Export all")," and click ",Object(c.b)("strong",{parentName:"p"},"Next"),"."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Select the Series/Scenarios to upload",src:Object(o.a)("/doc-images/web-datasource/create-web-datasource.png")}))),Object(c.b)("p",{parentName:"li"},Object(c.b)("em",{parentName:"p"},"Select Series/Scenarios to create a Web datasource"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"The data can be exported in either a ",Object(c.b)("em",{parentName:"p"},"Tree structure")," or a ",Object(c.b)("em",{parentName:"p"},"Flat structure")," as shown in the ",Object(c.b)("strong",{parentName:"p"},"Export format")," screen:"),Object(c.b)("p",{parentName:"li"},"a. The data is exported in a tree format just like the ValQ model."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Export Format",src:Object(o.a)("/doc-images/web-datasource/export-format.png")}))),Object(c.b)("p",{parentName:"li"},Object(c.b)("em",{parentName:"p"},"Export format with Tree structure")),Object(c.b)("ul",Object(r.a)({parentName:"li"},{className:"contains-task-list"}),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Customization"),": The tab allows you to select the indicated fields."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Export up to level"),": Select the node-level hierarchy to export."),Object(c.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ",Object(c.b)("strong",{parentName:"li"},"Export only leaf nodes"),": Select the check box to export just the last ",Object(c.b)("em",{parentName:"li"},"Node")," of the Model."),Object(c.b)("li",{parentName:"ul"},"To edit a column name click the pencil editor icon next to the column field.")),Object(c.b)("p",{parentName:"li"},"b. The data is exported in the form of a flat table and includes all nodes listed in a column."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Export Format with Flat structure",src:Object(o.a)("/doc-images/web-datasource/export-format-flat-structure.png")}))),Object(c.b)("p",{parentName:"li"},Object(c.b)("em",{parentName:"p"},"Export format with Flat structure")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Customization"),": The tab in the ",Object(c.b)("em",{parentName:"li"},"Flat")," structure has an additional field - ",Object(c.b)("em",{parentName:"li"},"Show parent title"),".",Object(c.b)("div",Object(r.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The Flat structure does not have the options to export the ",Object(c.b)("em",{parentName:"p"},"node-level hierarchy")," or export just the ",Object(c.b)("em",{parentName:"p"},"leaf nodes"),".")))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Copy and save the\xa0",Object(c.b)("strong",{parentName:"p"},"Web URL"),"\xa0and\xa0",Object(c.b)("strong",{parentName:"p"},"HTTP request header parameters"),"."),Object(c.b)("div",Object(r.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The above\xa0Web URL\xa0and\xa0HTTP request\xa0ids are auto-generated. Copy the ids and save them in a file to be used to import the data later.")))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click ",Object(c.b)("strong",{parentName:"p"},"Done"),"."))),Object(c.b)("h2",{id:"import-data-from-web-datasource-url-and-parameters-in-power-bi"},"Import data from web datasource URL and parameters in Power BI"),Object(c.b)("p",null,"In the below example, we'll show how the URL can be consumed in a Power BI report using ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/power-bi/connect-data/desktop-connect-to-web-by-example"}),"Get Data by Web Connector"),"."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"In the PowerBI app go to ",Object(c.b)("strong",{parentName:"p"},"Home > Get Data > Web"),"."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Get Data by Web Connector",src:Object(o.a)("/doc-images/web-datasource/get-data-web.png")}))),Object(c.b)("p",{parentName:"li"},Object(c.b)("em",{parentName:"p"},"Get Data by Web Connector"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select the\xa0",Object(c.b)("em",{parentName:"p"},"Advanced"),"\xa0option"),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"web-url-http-request",src:Object(o.a)("/doc-images/web-datasource/web-url-http-request.png")}))),Object(c.b)("p",{parentName:"li"},Object(c.b)("em",{parentName:"p"},"Import web data with Advanced option")),Object(c.b)("div",Object(r.a)({parentName:"li"},{className:"admonition admonition-important alert alert--info"}),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Type ",Object(c.b)("strong",{parentName:"p"},"Authorization")," in the HTTP header field."))),Object(c.b)("p",{parentName:"li"},"Enter the Web URL and HTTP request header parameters obtained in the above ",Object(c.b)("strong",{parentName:"p"},"export format")," section.  ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click ",Object(c.b)("strong",{parentName:"p"},"OK"),".\nThis pops up a preview of the ",Object(c.b)("em",{parentName:"p"},"web datasource")," to be imported."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"preview-of-data",src:Object(o.a)("/doc-images/web-datasource/preview-of-data.png")}))),Object(c.b)("p",{parentName:"li"},Object(c.b)("em",{parentName:"p"},"Preview of the data to be imported")),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"Click ",Object(c.b)("strong",{parentName:"p"},"Load")," to continue loading the data or ",Object(c.b)("strong",{parentName:"p"},"Transform Data")," to further configure the data that will be imported from the ",Object(c.b)("em",{parentName:"p"},"web datasource"),".")))),Object(c.b)("h2",{id:"live-syncing-simulations-with-the-export-file-that-fetches-real-time-data"},"Live syncing simulations with the export file that fetches real-time data"),Object(c.b)("p",null,"ValQ data can be used as input for other visuals and further analysis. You can run further simulations to the scenarios and instantly synchronize the new scenario data with the export file by refreshing the data query."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"",src:Object(o.a)("/doc-images/live-synch.png"),width:550,height:350}))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Live synch simulations")))}d.isMDXComponent=!0},208:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(10),o=a(207),i=a(11),b=Object(r.createContext)({collectLink:function(){}}),s=a(206),l=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t,a,p,m=e.isNavLink,d=e.to,u=e.href,O=e.activeClassName,j=e.isActive,h=e["data-noBrokenLinkCheck"],N=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),v=Object(s.b)().withBaseUrl,g=Object(r.useContext)(b),f=d||u,w=Object(o.a)(f),x=null==f?void 0:f.replace("pathname://",""),y=void 0!==x?function(e){return e.startsWith("/")}(a=x)?v(a):a:void 0,T=Object(r.useRef)(!1),k=m?c.e:c.c,E=i.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&w&&window.docusaurus.prefetch(y),function(){E&&p&&p.disconnect()}}),[y,E,w]);var C=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,S=!y||!w||C;return y&&w&&!C&&!h&&g.collectLink(y),S?n.a.createElement("a",Object.assign({href:y},f&&!w&&{target:"_blank",rel:"noopener noreferrer"},N)):n.a.createElement(k,Object.assign({},N,{onMouseEnter:function(){T.current||(window.docusaurus.preload(y),T.current=!0)},innerRef:function(e){var t,a;E&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(y)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),a())}))}))).observe(t))},to:y||""},m&&{isActive:j,activeClassName:O}))}},212:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r),c=(a(23),a(36),function(e){return n.a.createElement("div",{className:"productTag"},n.a.createElement("header",null,n.a.createElement("h1",null,e.header),n.a.createElement("div",null,n.a.createElement("img",{src:e.image}))))})}}]);