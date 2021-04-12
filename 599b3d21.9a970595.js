(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a(3),i=a(7),o=(a(0),a(185)),r=a(186),l=(a(188),a(190)),c={id:"model-merge",title:"Model Merge",sidebar_label:"5. Model Merge"},d={unversionedId:"storage/model-merge",id:"storage/model-merge",isDocsHomePage:!1,title:"Model Merge",description:"You can now merge your models with models created by other users across workspaces. This facilitates ease of maintenance as large models can be broken down and managed independently. A large model with several entities is easily categorized and maintained as sub-models and consolidated in the main model.",source:"@site/docs/storage/model-merge.mdx",slug:"/storage/model-merge",permalink:"/storage/model-merge",version:"current",sidebar_label:"5. Model Merge",sidebar:"sideBar",previous:{title:"History Logs",permalink:"/storage/history-logs"},next:{title:"User Security in ValQ",permalink:"/storage/user-security"}},s=[{value:"Configure Model Merge",id:"configure-model-merge",children:[{value:"Individual P&amp;L models",id:"individual-pl-models",children:[]},{value:"Create the main model",id:"create-the-main-model",children:[]},{value:"Case 1: Linking nodes to an entire model",id:"case-1-linking-nodes-to-an-entire-model",children:[]},{value:"Case 2: Linking node to a single node from a model",id:"case-2-linking-node-to-a-single-node-from-a-model",children:[]}]},{value:"Series Mapping",id:"series-mapping",children:[]},{value:"Scenarios Mapping",id:"scenarios-mapping",children:[]},{value:"Using the Model merge report",id:"using-the-model-merge-report",children:[{value:"Final result in the consolidated model",id:"final-result-in-the-consolidated-model",children:[]},{value:"Limitations",id:"limitations",children:[]}]}],b={rightToc:s};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can now merge your models with models created by other users across workspaces. This facilitates ease of maintenance as large models can be broken down and managed independently. A large model with several entities is easily categorized and maintained as sub-models and consolidated in the main model."),Object(o.b)("h2",{id:"configure-model-merge"},"Configure Model Merge"),Object(o.b)("p",null,"Let's take a firm that has its business operation across different regions and the Board of Directors wants to review the final profit and loss statement.\nRepeating the profile and loss statement of each region leads to a model with several thousands of nodes."),Object(o.b)("p",null,"It would be easier for the Region/Branch managers to create and update the profit and loss statement for their respective regions and then have it consolidated for the Board of Directors meeting."),Object(o.b)("p",null,"Below is the Model merge workflow that helps us achieve such a consolidated report."),Object(o.b)("div",null,Object(o.b)(l.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Model Merge workflow",src:Object(r.a)("/doc-images/storage/features/model-merge-workflow.png")})),Object(o.b)("div",{class:"center"},Object(o.b)("p",null,"Model Merge workflow"))),Object(o.b)("p",null,"In our ValQ visual, we create a consolidated model that links to regional sub-models - ",Object(o.b)("em",{parentName:"p"},"Argentina, Brazil"),", and ",Object(o.b)("em",{parentName:"p"},"Chile"),"."),Object(o.b)("p",null,"The consolidated report reflects the simulations that are done in the individual regional reports.\nNow there are 2 ways you can link to different models:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#case-1-linking-nodes-to-an-entire-model"}),"Linking a node to an entire model"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#case-2-linking-node-to-a-single-node-from-a-model"}),"Linking a node to a single business key node")," from another model.")),Object(o.b)("h3",{id:"individual-pl-models"},"Individual P&L models"),Object(o.b)("p",null,"Following are the screenshots of the individual models:"),Object(o.b)("p",null,"a. Model ",Object(o.b)("em",{parentName:"p"},"Argentina")," with 28 nodes."),Object(o.b)("div",{class:"center"},Object(o.b)(l.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Argentina model",src:Object(r.a)("/doc-images/storage/features/argentina.png")})),Object(o.b)("p",{id:"caption-left"},"Model Argentina ",Object(o.b)("i",{id:"credit"},"Credits to our partner, BlueShift Brazil"))),Object(o.b)("p",null,"b. Model ",Object(o.b)("em",{parentName:"p"},"Brazil")," with 28 nodes."),Object(o.b)("div",{class:"center"},Object(o.b)(l.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Model Brazil",src:Object(r.a)("/doc-images/storage/features/brazil.png")})),Object(o.b)("p",{id:"caption-left"},"Model Brazil ",Object(o.b)("i",{id:"credit"},"Credits to our partner, BlueShift Brazil"))),Object(o.b)("p",null,"c. Model ",Object(o.b)("em",{parentName:"p"},"Chile")," with 28 nodes."),Object(o.b)("div",{class:"center"},Object(o.b)(l.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Model Chile",src:Object(r.a)("/doc-images/storage/features/chile.png")})),Object(o.b)("p",{id:"caption-left"},"Model Chile ",Object(o.b)("i",{id:"credit"},"Credits to our partner, BlueShift Brazil"))),Object(o.b)("h3",{id:"create-the-main-model"},"Create the main model"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Go to ",Object(o.b)("strong",{parentName:"p"},"Model > New > Create an Advanced Model")," in the ValQ visual.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the ",Object(o.b)("strong",{parentName:"p"},"Model > Node")," navigation panel, click on the plus ",Object(o.b)("inlineCode",{parentName:"p"},"+")," icon next to the parent node ",Object(o.b)("em",{parentName:"p"},"Total"),". This adds a ",Object(o.b)("em",{parentName:"p"},"Child Node"),". Similarly, add 3 ",Object(o.b)("em",{parentName:"p"},"Child Nodes"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click on the edit icon next to each node."),Object(o.b)("div",{class:"center"},Object(o.b)(l.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Edit and configure node",src:Object(r.a)("/doc-images/storage/features/edit-configure-node.png")})),Object(o.b)("p",{id:"caption-left"},"Configure child node to track separate sub-models ",Object(o.b)("i",{id:"credit"},"Credits to our partner, BlueShift Brazil")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the ",Object(o.b)("strong",{parentName:"p"},"Node Configuration")," pop up window, rename the Node ",Object(o.b)("strong",{parentName:"p"},"Title"),"."),Object(o.b)("div",{class:"center"},Object(o.b)(l.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Rename the node",src:Object(r.a)("/doc-images/storage/features/rename-node-argentina.png")})),Object(o.b)("p",{id:"caption-left"},"Renaming the Node Title to Argentina ",Object(o.b)("i",{id:"credit"},"Credits to our partner, BlueShift Brazil")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click the ",Object(o.b)("em",{parentName:"p"},"Configuration")," option:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Select the ",Object(o.b)("strong",{parentName:"li"},"Node Type")," as ",Object(o.b)("em",{parentName:"li"},"Link to workspace model.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Select a workspace model")," as ",Object(o.b)("em",{parentName:"li"},"Model Merge(Argentina)"),".")))),Object(o.b)("h3",{id:"case-1-linking-nodes-to-an-entire-model"},"Case 1: Linking nodes to an entire model"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select ",Object(o.b)("strong",{parentName:"p"},"Linking To")," option as ",Object(o.b)("strong",{parentName:"p"},"Entire workspace model")),Object(o.b)("div",{class:"center"},Object(o.b)(l.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Link to workspace model",src:Object(r.a)("/doc-images/storage/features/link-node-to-argentina-model.png")})),Object(o.b)("p",{id:"caption-left"},"Configure the node to link to another workspace model ",Object(o.b)("i",{id:"credit"},"Credits to our partner, BlueShift Brazil"))))),Object(o.b)("p",null,"Similarly, edit and connect the other 2 ",Object(o.b)("em",{parentName:"p"},"Child Nodes")," to ",Object(o.b)("em",{parentName:"p"},"Brazil")," and ",Object(o.b)("em",{parentName:"p"},"Chile")," models respectively."),Object(o.b)("p",null,"The below screenshot shows the 3 ",Object(o.b)("em",{parentName:"p"},"Child Nodes")," linked to the respective models with the total count of nodes in each model."),Object(o.b)("div",{class:"center"},Object(o.b)(l.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Main model's nodes connected to other models",src:Object(r.a)("/doc-images/storage/features/consolidated-child-nodes-linked.png")})),Object(o.b)("p",{id:"caption-left"},"Main model's nodes connected to other models ",Object(o.b)("i",{id:"credit"},"Credits to our partner, BlueShift Brazil"))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Linked nodes are indicated by a special linked icon both in the ",Object(o.b)("strong",{parentName:"p"},"Model > Node")," navigation panel on the left and in the ValQ visual pane on the right."))),Object(o.b)("h3",{id:"case-2-linking-node-to-a-single-node-from-a-model"},"Case 2: Linking node to a single node from a model"),Object(o.b)("p",null,"Let's create a 4th child node and link the node to a single node ",Object(o.b)("em",{parentName:"p"},"Receita Liquida")," from the ",Object(o.b)("em",{parentName:"p"},"Argentina")," model.\nAdd another ",Object(o.b)("em",{parentName:"p"},"Child node")," as highlighted in the ",Object(o.b)("em",{parentName:"p"},"Navigation Panel")," on the left."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the ",Object(o.b)("strong",{parentName:"p"},"Edit Node")," pop-up window, select ",Object(o.b)("strong",{parentName:"p"},"Node Type")," as ",Object(o.b)("em",{parentName:"p"},"Link to workspace model"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Select a workspace model")," as ",Object(o.b)("em",{parentName:"p"},"Model Merge(Argentina)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select ",Object(o.b)("strong",{parentName:"p"},"Linking To")," option as ",Object(o.b)("strong",{parentName:"p"},"Node in the model")),Object(o.b)("div",{class:"center"},Object(o.b)(l.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Node linked to another node from a model",src:Object(r.a)("/doc-images/storage/features/link-to-a-node.png")})),Object(o.b)("p",{id:"caption-left"},"Node linked to another node from a model ",Object(o.b)("i",{id:"credit"},"Credits to our partner, BlueShift Brazil")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Select a node to link")," as ",Object(o.b)("em",{parentName:"p"},"Receita Liquida")," (This is the node from the ",Object(o.b)("em",{parentName:"p"},"Argentina")," model)."))),Object(o.b)("h2",{id:"series-mapping"},"Series Mapping"),Object(o.b)("p",null,"In the ",Object(o.b)("strong",{parentName:"p"},"Map data series")," section, you can map the series of the main model with the linked sub-models. "),Object(o.b)("p",null,"Mapping the series is helpful in tracking linked series changes from the present model and is mapped in 2 ways: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the ",Object(o.b)("strong",{parentName:"p"},"Edit Node")," pop window under the ",Object(o.b)("strong",{parentName:"p"},"Map data series")," section"),Object(o.b)("div",{class:"center"},Object(o.b)(l.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Map series",src:Object(r.a)("/doc-images/storage/features/map-series-edit-node.png")})),Object(o.b)("p",{id:"caption-left"},"Map model series with the linking models ",Object(o.b)("i",{id:"credit"},"Credits to our partner, BlueShift Brazil")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to ",Object(o.b)("strong",{parentName:"p"},"Model > Data Series > Linked Model Mapping")))),Object(o.b)("p",null,"Click on the ",Object(o.b)("em",{parentName:"p"},"Map Series")," tab. Map the series of the ",Object(o.b)("em",{parentName:"p"},"Consolidated")," model with the respective linked model series."),Object(o.b)("div",{class:"center"},Object(o.b)(l.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Map seres",src:Object(r.a)("/doc-images/storage/features/map-series.png")})),Object(o.b)("p",{id:"caption-left"},"Map series with the respective model series ",Object(o.b)("i",{id:"credit"},"Credits to our partner, BlueShift Brazil"))),Object(o.b)("h2",{id:"scenarios-mapping"},"Scenarios Mapping"),Object(o.b)("p",null,"Click the ",Object(o.b)("em",{parentName:"p"},"Map Scenarios")," tab in the ",Object(o.b)("em",{parentName:"p"},"main/consolidated")," model to map the shared Scenarios from the sub-models."),Object(o.b)("div",{class:"center"},Object(o.b)(l.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Map scenarios",src:Object(r.a)("/doc-images/storage/features/model-merge-mapping_scenarios.png")})),Object(o.b)("p",{id:"caption-left"},"Map the Scenarios ",Object(o.b)("i",{id:"credit"},"Credits to our partner, BlueShift Brazil"))),Object(o.b)("h2",{id:"using-the-model-merge-report"},"Using the Model merge report"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Tree view/Table view"))),Object(o.b)("p",null,"Here is the ",Object(o.b)("em",{parentName:"p"},"Consolidated")," model with the first 3 child nodes linked to entire models from other reports, and the 4th node that is linked to a single node from the ",Object(o.b)("em",{parentName:"p"},"Argentina")," model."),Object(o.b)("div",{class:"center"},Object(o.b)(l.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Consolidated model with nodes connected to other models*",src:Object(r.a)("/doc-images/storage/features/consolidated-nodes.png")})),Object(o.b)("p",{id:"caption-left"},"Consolidated model with nodes connected to other models ",Object(o.b)("i",{id:"credit"},"Credits to our partner, BlueShift Brazil"))),Object(o.b)("h3",{id:"final-result-in-the-consolidated-model"},"Final result in the consolidated model"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Series changes")),Object(o.b)("p",null,"Click the ",Object(o.b)("strong",{parentName:"p"},"Refresh")," button on the ribbon bar to view the linked series changes in the present consolidated model."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Scenario changes")),Object(o.b)("p",null,"When you simulate on a shared scenario from a sub-model, you can view the changes in the main model by clicking the ",Object(o.b)("em",{parentName:"p"},"Refresh linked scenarios")," icon next to the scenario."),Object(o.b)("div",{class:"center"},Object(o.b)(l.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Linked scenarios changes reflected",src:Object(r.a)("/doc-images/storage/features/scenario-mapping-refreshed.png")})),Object(o.b)("p",{id:"caption-left"},"Linked scenarios changes reflected ",Object(o.b)("i",{id:"credit"},"Credits to our partner, BlueShift Brazil"))),Object(o.b)("p",null,"Note the change in each model and the resulted value in the main model."),Object(o.b)("h3",{id:"limitations"},"Limitations"),Object(o.b)("p",null,"You can only link a leaf node and not the parent node."),Object(o.b)("div",{class:"center"},Object(o.b)(l.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Only a leaf node can be linked with another model",src:Object(r.a)("/doc-images/storage/features/link-only-leaf-node.png")})),Object(o.b)("p",{id:"caption-left"},"Link only a leaf node ",Object(o.b)("i",{id:"credit"},"Credits to our partner, BlueShift Brazil"))))}m.isMDXComponent=!0},188:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(10),r=a(187),l=a(8),c=Object(n.createContext)({collectLink:function(){}}),d=a(186),s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a};t.a=function(e){var t,a,b,m=e.isNavLink,p=e.to,O=e.href,h=e.activeClassName,j=e.isActive,u=e["data-noBrokenLinkCheck"],g=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),f=Object(d.b)().withBaseUrl,N=Object(n.useContext)(c),v=p||O,k=Object(r.a)(v),w=null==v?void 0:v.replace("pathname://",""),M=void 0!==w?function(e){return e.startsWith("/")}(a=w)?f(a):a:void 0,y=Object(n.useRef)(!1),C=m?o.e:o.c,B=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!B&&k&&window.docusaurus.prefetch(M),function(){B&&b&&b.disconnect()}}),[M,B,k]);var S=null!==(t=null==M?void 0:M.startsWith("#"))&&void 0!==t&&t,T=!M||!k||S;return M&&k&&!S&&!u&&N.collectLink(M),T?i.a.createElement("a",Object.assign({href:M},v&&!k&&{target:"_blank",rel:"noopener noreferrer"},g)):i.a.createElement(C,Object.assign({},g,{onMouseEnter:function(){y.current||(window.docusaurus.preload(M),y.current=!0)},innerRef:function(e){var t,a;B&&e&&k&&(t=e,a=function(){window.docusaurus.prefetch(M)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),a())}))}))).observe(t))},to:M||""},m&&{isActive:j,activeClassName:h}))}}}]);