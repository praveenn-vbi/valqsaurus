(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return O}));var a=n(3),r=n(7),o=(n(0),n(204)),i=n(205),l=n(207),b=n(209),c=(n(53),{id:"node",title:"Understanding Nodes in ValQ",sidebar_label:"Understanding Nodes in ValQ"}),s={unversionedId:"intro/node",id:"intro/node",isDocsHomePage:!1,title:"Understanding Nodes in ValQ",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/intro/node.mdx",slug:"/intro/node",permalink:"/docs/intro/node",version:"current",sidebar_label:"Understanding Nodes in ValQ",sidebar:"sideBar",previous:{title:"Using ValQ - An Example",permalink:"/docs/intro/model"},next:{title:"The ValQ Workflow",permalink:"/docs/intro/workflow"}},d=[{value:"1. Node components",id:"1-node-components",children:[]},{value:"2. Model structure",id:"2-model-structure",children:[{value:"2.1 Tree view",id:"21-tree-view",children:[]},{value:"2.2 Table view",id:"22-table-view",children:[]}]},{value:"Related Pages",id:"related-pages",children:[]}],u={rightToc:d};function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section, we introduce you the components of a node and two types of model structure available in ValQ"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#1-node-components"}),"Node Components")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#2-model-structure"}),"Model structure"))),Object(o.b)("h2",{id:"1-node-components"},"1. Node components"),Object(o.b)("p",null,"First, let's take a look at what makes up a node"),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Identifying Nodes components",src:Object(i.a)("/doc-images/intro/node4.png")}))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Node components and their significance")),Object(o.b)("p",null,"Each node represents a value driver, KPI or category and it's several performance metrics. Here's how to interpret a node:"),Object(o.b)("div",{style:{textAlign:"justify"},className:"table-center"},Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Component"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Node name"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Name of the value driver or KPI")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Conditional Formatting"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Color band indicating the variance")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Value Trend"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A sparkline graph showing the trend")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Baseline Value"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Node value of the baseline series")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Variance for all periods"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Full year variance of the node")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"6"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Variance for current period"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Current month (usually first period in the series) month variance of the node")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"7"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Absolute Variance"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Variance showed in absolute value")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Percentage Variance"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Variance showed in percentage")))))," ",Object(o.b)("br",null),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note")," ",Object(o.b)("br",null),"\nVariance is calculated as the difference between the Baseline series and Comparison series")),Object(o.b)("div",{style:{textAlign:"justify"}},"Baseline series is the primary series and Comparison series is the benchmark against which the Baseline is compared. ",Object(o.b)("br",null)," In the below image Sales Budget is the Baseline series and Sales Forecast is the Comparison series.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Series comparison for Sales model",src:Object(i.a)("/doc-images/intro/node5.png")}))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Comparing Sales Budget and Forecast series")),Object(o.b)("h2",{id:"2-model-structure"},"2. Model structure"),Object(o.b)("div",{style:{textAlign:"justify"}},"With ValQ, you can build a model of your business process and view it in the form of a tree as well as a table. Toggle between the below icons present on the top left corner of the canvas to change the view.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ users",src:Object(i.a)("/doc-images/intro/node8.png")})))," ",Object(o.b)("br",null),Object(o.b)("h3",{id:"21-tree-view"},"2.1 Tree view"),Object(o.b)("div",{style:{textAlign:"justify"}},"The tree structure is presented in a horizontal format as a visual. Just like a tree, ValQ model has a stem on Top called Top node and the Top node then branches out to other nodes.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ users",src:Object(i.a)("/doc-images/intro/node7.png")}))),Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"The model is segmented into levels starting from level 1 with Top node, here it's Overall Result. The nodes share a parent-child relationship at each level. For example, the East node is the Parent node while Consumer node is a Child node, Consumer node is the Parent node while Chris Morris node is a Child node.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ users",src:Object(i.a)("/doc-images/intro/node2.png")})))," ",Object(o.b)("br",null),Object(o.b)("p",null,"Click on ",Object(o.b)("strong",{parentName:"p"},">")," to expand and ",Object(o.b)("strong",{parentName:"p"},"<")," collapse levels."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ users",src:Object(i.a)("/doc-images/intro/node6.png")})))," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"You can use the search option to search and get to that particular node, zoom slider to zoom in/out of the canvas and Go to level ^ option to navigate between different levels.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ users",src:Object(i.a)("/doc-images/intro/node9.png")}))),Object(o.b)("h3",{id:"22-table-view"},"2.2 Table view"),Object(o.b)("div",{style:{textAlign:"justify"}},"The same information can be viewed in tabular form as see in the image below. The Table view is generally used to plan and analyze the data. Click on the table icon as highlighted below to get the tabular view.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ users",src:Object(i.a)("/doc-images/intro/node10.png")})))," ",Object(o.b)("br",null),Object(o.b)("p",null,"For more information on Table view, click ",Object(o.b)(l.a,{to:Object(i.a)("docs/simulation/tableview"),mdxType:"Link"},"here"),"."),Object(o.b)("h2",{id:"related-pages"},"Related Pages"),Object(o.b)(l.a,{to:Object(i.a)("docs/model/node"),mdxType:"Link"},"Configure nodes")," under Model ",Object(o.b)("br",null),Object(o.b)(l.a,{to:Object(i.a)("docs/simulation/simulation_canvas#1-node-features"),mdxType:"Link"},"Node features")," under Simulate tab"," ")}O.isMDXComponent=!0},207:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(10),i=n(206),l=n(11),b=Object(a.createContext)({collectLink:function(){}}),c=n(205),s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,d,u=e.isNavLink,O=e.to,j=e.href,m=e.activeClassName,p=e.isActive,g=e["data-noBrokenLinkCheck"],h=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),v=Object(c.b)().withBaseUrl,f=Object(a.useContext)(b),N=O||j,y=Object(i.a)(N),w=null==N?void 0:N.replace("pathname://",""),x=void 0!==w?function(e){return e.startsWith("/")}(n=w)?v(n):n:void 0,k=Object(a.useRef)(!1),T=u?o.e:o.c,C=l.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!C&&y&&window.docusaurus.prefetch(x),function(){C&&d&&d.disconnect()}}),[x,C,y]);var V=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,A=!x||!y||V;return x&&y&&!V&&!g&&f.collectLink(x),A?r.a.createElement("a",Object.assign({href:x},N&&!y&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(T,Object.assign({},h,{onMouseEnter:function(){k.current||(window.docusaurus.preload(x),k.current=!0)},innerRef:function(e){var t,n;C&&e&&y&&(t=e,n=function(){window.docusaurus.prefetch(x)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:x||""},u&&{isActive:p,activeClassName:m}))}}}]);