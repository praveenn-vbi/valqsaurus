(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{176:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return p}));var i=a(3),n=a(7),o=(a(0),a(187)),s=a(188),l=a(190),c=a(192),b=(a(54),{id:"navigation_panel",title:"Navigation Panel",sidebar_label:"Navigation Panel"}),r={unversionedId:"simulation/navigation_panel",id:"simulation/navigation_panel",isDocsHomePage:!1,title:"Navigation Panel",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/simulation/navigation_panel.mdx",slug:"/simulation/navigation_panel",permalink:"/simulation/navigation_panel",version:"current",sidebar_label:"Navigation Panel",sidebar:"sideBar",previous:{title:"Simulation Canvas",permalink:"/simulation/simulation_canvas"},next:{title:"Table View",permalink:"/simulation/tableview"}},d=[{value:"1. Scenarios",id:"1-scenarios",children:[]},{value:"2. Sub Models",id:"2-sub-models",children:[]},{value:"3. Simulation Period",id:"3-simulation-period",children:[]},{value:"4. Value Display",id:"4-value-display",children:[]},{value:"5. Key Inputs",id:"5-key-inputs",children:[]},{value:"6. KPIs",id:"6-kpis",children:[]},{value:"7. Constraints",id:"7-constraints",children:[]},{value:"8. Visualization",id:"8-visualization",children:[{value:"Tree View",id:"tree-view",children:[]},{value:"Table View",id:"table-view",children:[]},{value:"Show Composite Nodes",id:"show-composite-nodes",children:[]}]}],u={rightToc:d};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section, we'll take a look at Navigation Panel and it's components:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#1-scenarios"}),"Scenarios"),"                "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#2-sub-models"}),"Sub Models"),"               "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#3-simulation-period"}),"Simulation Period")," "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#4-value-display"}),"Value Display"),"         "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#5-key-inputs"}),"Key Inputs"),"               "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#6-kpis"}),"KPIs"),"                           "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#7-constraints"}),"Constraints"),"             "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#8-visualization"}),"Visualization"),"         ")),Object(o.b)("h3",{id:"1-scenarios"},"1. Scenarios"),Object(o.b)("p",null,"Scenarios are particularly useful when you want to perform a what-if analysis to the model and you can save each instance as an individual scenario. This way you have multiple scenarios to analyze and conduct scenario analysis."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Scenarios",src:Object(s.a)("/doc-images/simulate_tab/scenarios-options.png")}))),Object(o.b)("p",null,"The scenario with the yellow tag is the active scenario. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"To collapse the scenario property click on the ( ",Object(o.b)("strong",{parentName:"li"},"^")," ) option. "),Object(o.b)("li",{parentName:"ul"},"To create a new scenario, click on the ( ",Object(o.b)("strong",{parentName:"li"},"+")," ) option."),Object(o.b)("li",{parentName:"ul"},"To download the selected scenario data as a Microsoft Excel-compatible XML file, click the ( ",Object(o.b)("img",{width:"15",src:Object(s.a)("img/download.svg")})," ) icon."),Object(o.b)("li",{parentName:"ul"},"Click on the 3 dots ",Object(o.b)("inlineCode",{parentName:"li"},"...")," to access further options:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Copy Scenario"),": Duplicates the existing scenario into a new one."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Edit"),": Change the title of the scenario and add an optional description."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Share"),": Enable to share the scenario across users/groups if the model is shared."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Delete"),": Deletes a scenario."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Compare Scenarios")," option helps you compare multiple scenarios:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"Manage Scenario")," to add or remove scenarios for comparison."),Object(o.b)("li",{parentName:"ul"},"To  download the scenario comparison as an excel file, click ",Object(o.b)("strong",{parentName:"li"},"Download to Excel"),".")))),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Scenarios comparison",src:Object(s.a)("/doc-images/simulate_tab/compare-scenarios.png")})),Object(o.b)("p",null,"Scenarios comparison screen")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note")," ",Object(o.b)("br",null)," Scenarios are not stored as Data Series on ValQ. Click ",Object(o.b)(l.a,{to:Object(s.a)("planning/plan_overview#1base-data-series-vs-scenario-data"),mdxType:"Link"},"here")," to know more on this.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"To rename the property's name to another value, go to the ",Object(o.b)(l.a,{to:Object(s.a)("model/settings#11-scenarios"),mdxType:"Link"},"General > Settings > Navigation Panel")," section.")),Object(o.b)("h3",{id:"2-sub-models"},"2. Sub Models"),Object(o.b)("div",{style:{textAlign:"justify"}},Object(o.b)("p",null,"Sub Models are part of the model and a node is added as a sub-model to access it quickly. This property is useful\nwhen there are a large number of nodes and you want to get to the important nodes at the click of a button.\nYou can go to ",Object(o.b)(l.a,{to:Object(s.a)("model/settings#12-sub-models"),mdxType:"Link"},"settings")," to add or remove sub-models on ValQ.\nClick on the ",Object(o.b)("strong",{parentName:"p"},"^")," option to collapse this property.")),Object(o.b)("p",null,"In the below example, the sub-model 'Overall Result' displays the entire model as its the top node."),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(s.a)("/doc-images/simulate_tab/sim6.png")})))," ",Object(o.b)("br",null),Object(o.b)("p",null,"Here, the sub-model - 'Midwest' displays only the particular node and its children."),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(s.a)("/doc-images/simulate_tab/sim7.png")}))),Object(o.b)("h3",{id:"3-simulation-period"},"3. Simulation Period"),Object(o.b)("div",{style:{textAlign:"justify"}},Object(o.b)("p",null,"ValQ model updates the simulated values based on the periods selected in the Simulation Period. You can select just one period or\nchoose a range of period with '","[to]","' icon, ValQ applies simulation and fetches simulated values only to those selected periods.\nTo change the period labels, go to ",Object(o.b)(l.a,{to:Object(s.a)("model/settings#13-simulation-period"),mdxType:"Link"},"settings"),".\nClick on the ",Object(o.b)("strong",{parentName:"p"},"^")," option to collapse this property.")),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Simulation Period",src:Object(s.a)("/doc-images/simulate_tab/sim8.png")})))," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"In the below example, simulation periods have been selected as Jan and Feb. You can observe that the simulation is applied only to these two periods.")," ",Object(o.b)("br",null),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(s.a)("/doc-images/simulate_tab/sim9.png")}))),Object(o.b)("h3",{id:"4-value-display"},"4. Value Display"),Object(o.b)("div",{style:{textAlign:"justify"}},"Value Display makes available options of aggregation like a month, year to date, a full year and simulated periods and scaling options. You can go to settings to change"," ",Object(o.b)(l.a,{to:Object(s.a)("model/data-series#2-time-aggregation-labels"),mdxType:"Link"},"Time Aggregation Labels")," ","and"," ",Object(o.b)(l.a,{to:Object(s.a)("model/settings#14-value-display"),mdxType:"Link"},"Scaling Options")," ","to your preference. Value Display is set to a full year and scaling at 0.0m by default. Click on the '^' option to collapse this property.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Value Display",src:Object(s.a)("/doc-images/simulate_tab/sim10.png")}))),Object(o.b)("h3",{id:"5-key-inputs"},"5. Key Inputs"),Object(o.b)("div",{style:{textAlign:"justify"}},"Any important node that you consider as a Key Input can be added as a Key Input to view it quickly instead of searching for it in the model. The Key Input is displayed along with its value and variance percentage when simulated. You can go to"," ",Object(o.b)(l.a,{to:Object(s.a)("model/settings#15-key-inputs"),mdxType:"Link"},"settings")," to add/remove Key Inputs. Click on the '^' option to collapse this property.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"In the below example, we have added two Key Inputs and the node 'Chris Morris' gets highlighted on selecting the key Input 'Chris Morris'.")," ",Object(o.b)("br",null),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Key Inputs",src:Object(s.a)("/doc-images/simulate_tab/sim11.png")}))),Object(o.b)("h3",{id:"6-kpis"},"6. KPIs"),Object(o.b)("div",{style:{textAlign:"justify"}},"Any important node that you consider as a Key Performance Indicator can be added as a KPI to view it quickly instead of searching for it in the model. The KPI is displayed along with its value and variance percentage when simulated. You can go to"," ",Object(o.b)(l.a,{to:Object(s.a)("model/settings#16-kpis"),mdxType:"Link"},"settings")," to add/remove KPIs. Click on the '^' option to collapse this property.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"In the below example, the node 'Midwest' gets highlighted on selecting the KPI 'Midwest'.")," ",Object(o.b)("br",null),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(s.a)("/doc-images/simulate_tab/sim12.png")}))),Object(o.b)("h3",{id:"7-constraints"},"7. Constraints"),Object(o.b)("div",{style:{textAlign:"justify"}},"Constraint is added to a node to evaluate its performance after simulation against a threshold. Any constraint added to the model is displayed under the Navigation Panel along with its"," ",Object(o.b)(l.a,{to:Object(s.a)("model/node#25-value-range"),mdxType:"Link"},"Value Range"),".")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"In the following example, we shall go through the steps to add a Constraint to a node.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"A. The Value Range for 'East' Node has been set as Min = 1 Million and Max = 10 Million. Notice that the Time Aggregation has been set as Sum of Periods and the number of periods for this node is 12. Therefore, the Value Range is taken as Min = 12 Million and Max = 120 Million.")," ",Object(o.b)("br",null),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"New Tab",src:Object(s.a)("/doc-images/model/node19.png")})))," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"B. After the Value Range has been set to the 'East' node, the same node is added to Constraint under the Navigation Panel. To add Constraint, Model ->"," ",Object(o.b)(l.a,{to:Object(s.a)("model/settings#17-constraints"),mdxType:"Link"},"Settings")," -> Navigation Panel -> Constraints and choose constraints from the drop-down to be listed.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Add Constraints",src:Object(s.a)("/doc-images/model/node20.png")})))," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"C. The Constraint for the 'East' node has been added with the Minimum and Maximum values displayed as seen below. Notice that the node value is outside the Value Range and the node value is displayed in red color. The value is displayed in white if it lies within the range.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"New Tab",src:Object(s.a)("/doc-images/model/node21.png")}))),Object(o.b)("p",null,"In the below screen, we have added three constraints - East, West and Midwest. You can see the constraints are\nsorted based on its utilization under the Navigation Panel."),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"New Tab",src:Object(s.a)("/doc-images/model/node21.1.png")}))),Object(o.b)("h2",{id:"8-visualization"},"8. Visualization"),Object(o.b)("p",null,"You can change the view of the model with the visualization options. By default, Visualization is set to Tree display and Standard view mode."),Object(o.b)("h3",{id:"tree-view"},"Tree View"),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"New Tab",src:Object(s.a)("/doc-images/simulate_tab/visualization-tree-composite.png")}))),Object(o.b)("p",null,"To view the model as a table, you can click on any of the highlighted options as seen below."),Object(o.b)("h3",{id:"table-view"},"Table View"),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"New Tab",src:Object(s.a)("/doc-images/simulate_tab/visualization-table-view.png")}))),Object(o.b)("h3",{id:"show-composite-nodes"},"Show Composite Nodes"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Show Composite Values")," toggle is only available for the models that have ",Object(o.b)(l.a,{to:Object(s.a)("model/node#32-composite-nodes"),mdxType:"Link"},"Composite nodes")," configured.\nYou can chose to enable/disable the Composite values from the Navigation Panel:"),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"New Tab",src:Object(s.a)("/doc-images/simulate_tab/toggle-off.png")})),Object(o.b)("p",null,"Composite Values disabled")),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"New Tab",src:Object(s.a)("/doc-images/simulate_tab/toggle-on.png")})),Object(o.b)("p",null,"Composite values enabled and displayed in the Canvas")))}p.isMDXComponent=!0},190:function(e,t,a){"use strict";var i=a(0),n=a.n(i),o=a(10),s=a(189),l=a(8),c=Object(i.createContext)({collectLink:function(){}}),b=a(188),r=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(a[i[n]]=e[i[n]])}return a};t.a=function(e){var t,a,d,u=e.isNavLink,p=e.to,m=e.href,j=e.activeClassName,O=e.isActive,h=e["data-noBrokenLinkCheck"],g=r(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),v=Object(b.b)().withBaseUrl,y=Object(i.useContext)(c),f=p||m,w=Object(s.a)(f),N=null==f?void 0:f.replace("pathname://",""),x=void 0!==N?function(e){return e.startsWith("/")}(a=N)?v(a):a:void 0,T=Object(i.useRef)(!1),k=u?o.e:o.c,C=l.a.canUseIntersectionObserver;Object(i.useEffect)((function(){return!C&&w&&window.docusaurus.prefetch(x),function(){C&&d&&d.disconnect()}}),[x,C,w]);var S=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,I=!x||!w||S;return x&&w&&!S&&!h&&y.collectLink(x),I?n.a.createElement("a",Object.assign({href:x},f&&!w&&{target:"_blank",rel:"noopener noreferrer"},g)):n.a.createElement(k,Object.assign({},g,{onMouseEnter:function(){T.current||(window.docusaurus.preload(x),T.current=!0)},innerRef:function(e){var t,a;C&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(x)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:x||""},u&&{isActive:O,activeClassName:j}))}}}]);