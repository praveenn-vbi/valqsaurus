(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{130:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return u}));var n=a(3),l=a(7),i=(a(0),a(212)),r=a(213),o=(a(215),a(223)),b=a(217),c=(a(53),{id:"v1.8.3",hide_title:"valQ Releases",sidebar_label:"V1.8.3"}),s={unversionedId:"releases/v1.8.3",id:"releases/v1.8.3",isDocsHomePage:!1,title:"v1.8.3",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/releases/v1.8.3.md",slug:"/releases/v1.8.3",permalink:"/docs/releases/v1.8.3",version:"current",sidebar_label:"V1.8.3",sidebar:"Releases",previous:{title:"v1.8.4",permalink:"/docs/releases/v1.8.4"},next:{title:"v1.7.0",permalink:"/docs/releases/v1.7.0"}},m=[{value:"Features",id:"features",children:[{value:"Rolling Planning",id:"rolling-planning",children:[]},{value:"Export as datasource",id:"export-as-datasource",children:[]},{value:"New Table view",id:"new-table-view",children:[]},{value:"Attribution Analysis",id:"attribution-analysis",children:[]},{value:"Model Merge",id:"model-merge",children:[]}]},{value:"Enhancements",id:"enhancements",children:[{value:"Member Console Changes",id:"member-console-changes",children:[]},{value:"<strong>Notes</strong>\xa0option replaced as\xa0<strong>Comments</strong>",id:"notes-option-replaced-as-comments",children:[]},{value:"Planning Comments and Allocation History Logs",id:"planning-comments-and-allocation-history-logs",children:[]},{value:"Writeback",id:"writeback",children:[]},{value:"Formula enhancements",id:"formula-enhancements",children:[]}]}],p={rightToc:m};function u(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(o.a,{header:"V1.8.3 - valQ Collaborate (Jul 30,2020)",earlier:"V1.7.0",next:"V1.8.4",mdxType:"Release"}),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("h3",{id:"rolling-planning"},"Rolling Planning"),Object(i.b)("p",null,"The\xa0",Object(i.b)("strong",{parentName:"p"},"Rolling Planning"),"\xa0also referred to as\xa0",Object(i.b)("strong",{parentName:"p"},"Rolling Forecast"),"\xa0enables organizations to continuously roll out 12 months forecast over a set time frame.\nThe prediction is based on rolling out each recent month value and re-forecasting for the next 12 months."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now create\xa0",Object(i.b)("strong",{parentName:"p"},"New Series"),"\xa0by selecting Node values for a certain time period from an earlier series."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"New Series",src:Object(r.a)("doc-images/releases/new_series.png")}))))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Select the\xa0",Object(i.b)("strong",{parentName:"li"},"Actuals"),"\xa0from a base series"),Object(i.b)("li",{parentName:"ul"},"Select the\xa0",Object(i.b)("strong",{parentName:"li"},"Forecast"),"\xa0values from the most recent series")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"A new series is created that has Actual values from the base series and forecast values from the most recent series.")),Object(i.b)("p",null,"This feature allows user to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Determine over-achieved and under-achieved values by comparing the present and any previous series"),Object(i.b)("li",{parentName:"ul"},"Lock the\xa0",Object(i.b)("strong",{parentName:"li"},"Actuals"),"\xa0and increase the delta value for the remaining months. You do this as follows:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Select the node to which you want to allocate the increased value"),Object(i.b)("li",{parentName:"ul"},"Click on\xa0",Object(i.b)("strong",{parentName:"li"},"Weight"),"\xa0and add the delta percentage"),Object(i.b)("li",{parentName:"ul"},"All the unlocked cells are impacted with the increased value"))),Object(i.b)("li",{parentName:"ul"},"This achieves month-on-month rolling forecast.")),Object(i.b)("h3",{id:"export-as-datasource"},"Export as datasource"),Object(i.b)("p",null,"Create a web data source for your Model. This Model is easily imported into any ",Object(i.b)("strong",{parentName:"p"},"valQ custom visual.")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Export as datasource",src:Object(r.a)("doc-images/releases/export_as_datasource.png")}))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Create a Web datasource",src:Object(r.a)("doc-images/releases/create_a_web_datasource.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Tick the Series and Scenarios to export as web datasource")),Object(i.b)("p",null,"To export your data as a Web source"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Select the\xa0",Object(i.b)("strong",{parentName:"li"},"Series"),"\xa0names and\xa0",Object(i.b)("strong",{parentName:"li"},"Scenarios"),"\xa0names that you want to export"),Object(i.b)("li",{parentName:"ul"},"Choose the\xa0",Object(i.b)("strong",{parentName:"li"},"Export format"),"\xa0as either a\xa0",Object(i.b)("strong",{parentName:"li"},"Tree structure"),"\xa0or\xa0",Object(i.b)("strong",{parentName:"li"},"Flat structure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Customize"),"\xa0the Export level of the\xa0",Object(i.b)("em",{parentName:"li"},"Nodes")),Object(i.b)("li",{parentName:"ul"},"Edit and rename the column names by clicking on the editor icon"),Object(i.b)("li",{parentName:"ul"},"Copy the\xa0",Object(i.b)("strong",{parentName:"li"},"Web URL"),"\xa0and\xa0",Object(i.b)("strong",{parentName:"li"},"HTTP request header parameters"),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Web datasource Export format",src:Object(r.a)("doc-images/releases/webdatasource_export_format.png")}))))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Web datasource export format and URLs")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can now import this data model into another custom visual.")),Object(i.b)("h3",{id:"new-table-view"},"New Table view"),Object(i.b)("p",null,"Table view can now be customized to edit the columns and get summarized views.\n",Object(i.b)("strong",{parentName:"p"},"Simulate > Table View > Settings")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Table View Settings",src:Object(r.a)("doc-images/releases/table_view_settings.png")}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Column Settings")),Object(i.b)("p",{parentName:"li"},"Click settings and check or un-check the Node columns to be displayed in each view"),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Select Node Settings",src:Object(r.a)("doc-images/releases/table_view_select_nodes_settings.png")}))),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Select Node Settings"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Summary/Period Views")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Summary"),": This view lists the summary of the KPIs",Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Table View Summary",src:Object(r.a)("doc-images/releases/table_view_summary.png")}))))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Table View Summary")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Period"),": This view lists the summary of the KPIs along with the time period frame (January through December)",Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Table View Period",src:Object(r.a)("doc-images/releases/table_view_period.png")}))))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Table View Period")),Object(i.b)("h3",{id:"attribution-analysis"},"Attribution Analysis"),Object(i.b)("p",null,"valQ 1.8 introduces the Analysis of the key attributes that contribute to the overall result simulation.\nAnalyze the simulation impact and compare the base and simulation series with the following options:"),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Attribution Analysis",src:Object(r.a)("doc-images/releases/attribution_analysis.png")}))),Object(i.b)("p",null," ",Object(i.b)("em",{parentName:"p"},"Attribution Analysis")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Outcome KPI"),": Select the KPI to view its impact and attribution variance"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Scenario"),": Choose the Scenario"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Period"),": Select the simulated months"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Period Measure"),": A measure of the simulated months within the selected\xa0",Object(i.b)("strong",{parentName:"li"},"Period")," based on:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Full Year"),": Full-year values of the base and simulation series, and simulated value of only the selected\xa0",Object(i.b)("strong",{parentName:"li"},"Period")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Sim-mths"),": Sum total impact of the selected months in the\xa0",Object(i.b)("strong",{parentName:"li"},"Period"),"\xa0range for the base series, simulated series, and the impacted months"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Month"),": Value of the first month in the\xa0",Object(i.b)("strong",{parentName:"li"},"Period"),"\xa0range for the base series, simulated series, and the impacted months")))),Object(i.b)("p",null,"Attribution Analysis provide 2 views:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"}," Graphical View"),"\nA graphical representation indicating the increase or decrease of the KPI value and its impact on the simulation result."),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"Flip the chart vertically or horizontally by clicking on the Flip icon at the top right corner."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Tabular View")),Object(i.b)("p",{parentName:"li"},"The\xa0",Object(i.b)("strong",{parentName:"p"},"KPI Attribution Analysis"),"\xa0table view shows the variance, attribution, and contribution percentage of individual simulated KPI towards the Overall result."),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},'Check the box "Show Contribution %" to also display the columns "Attr. %" and "Cont. %"')),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Contribution Percentage",src:Object(r.a)("doc-images/releases/contribution_percentage.png")}))),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Contribution Percentage")))),Object(i.b)("h3",{id:"model-merge"},"Model Merge"),Object(i.b)("p",null,"Merge a selected node from the sub model."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can now link a Node to another Node in the workspace model, by adding a child Node to an existing Node.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Configure and select:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Node Type as ",Object(i.b)("em",{parentName:"li"},"Link to workspace model")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Workspace model")," \u2192 You can select and link to any model available in your workspace"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Linking To")," options out of:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Entire workspace model"),": Link to another node from a different model"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Node in the model"),": Link to another node within the same model")))))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Select a node to link")," from the dropdown list"),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Configure Linked Node",src:Object(r.a)("doc-images/releases/configure_linked_node.png")}))),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("em",{parentName:"p"},"Configure Linked Node")))),Object(i.b)("p",null,"View independent sub-models by selecting the desired model tabs in the ",Object(i.b)("strong",{parentName:"p"},"Navigation Panel > Sub Models")," section."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Simulate Linked Node",src:Object(r.a)("doc-images/releases/simulate_linked_node.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Simulate Linked Node")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"To go back to the overall model, click on the Overall Result in the Navigation Panel")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"enhancements"},"Enhancements"),Object(i.b)("h3",{id:"member-console-changes"},"Member Console Changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Model Listing Grid"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Search model option is added"),Object(i.b)("li",{parentName:"ul"},"No of scenarios, No of Nodes and No of Series columns column are removed to improve loading performance"),Object(i.b)("li",{parentName:"ul"},"Last updated column is added"),Object(i.b)("li",{parentName:"ul"},"Sort by Model Name, last updated, created at option is added"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"User Listing Grid"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sort by name option is added")))),Object(i.b)("h3",{id:"notes-option-replaced-as-comments"},Object(i.b)("strong",{parentName:"h3"},"Notes"),"\xa0option replaced as\xa0",Object(i.b)("strong",{parentName:"h3"},"Comments")),Object(i.b)("p",null,"Notes\xa0feature is now replaced as\xa0",Object(i.b)("strong",{parentName:"p"},"Comments"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Comment"),"\xa0section provides a consolidated shared comments from all the members in the workspace."),Object(i.b)("p",null,"The Comment section has 2 labels:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Planning"),": Show comments for\xa0",Object(i.b)("em",{parentName:"li"},"All Nodes"),"\xa0and\xa0",Object(i.b)("em",{parentName:"li"},"All series")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Simulation"),": Show comments for all the Simulation\xa0",Object(i.b)("strong",{parentName:"li"},"Scenarios"))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Planning and Simulation Comments Section",src:Object(r.a)("doc-images/releases/planning_comments.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Planning and Simulation Comments Section")),Object(i.b)("h3",{id:"planning-comments-and-allocation-history-logs"},"Planning Comments and Allocation History Logs"),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"View Allocation History",src:Object(r.a)("doc-images/releases/view_allocation_history.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"View Allocation History")),Object(i.b)("p",null,"The allocation and change history logs appear in this section for:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Planning Comments"),": Logs for weight allocations for each series")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Allocation history logs for Planning",src:Object(r.a)("doc-images/releases/allocation_history.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Allocation history logs for Planning")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Simulation Scenario"),": Logs for all the scenario and model creation steps")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Allocation history logs for Simulation",src:Object(r.a)("doc-images/releases/allocation_history_simulation_logs.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Allocation history logs for Simulation")),Object(i.b)("p",null,"Simulation logs can be filtered based on the ",Object(i.b)("em",{parentName:"p"},"Users"),", ",Object(i.b)("em",{parentName:"p"},"Date"),", and ",Object(i.b)("em",{parentName:"p"},"Types."),"\nThe Simulation log types available are: ",Object(i.b)("em",{parentName:"p"},'"Model", "Scenario", and "Writeback"'),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Your Models are stored and shared in the Private Tenant workspace and accessed via valQ Management Console. The comments from all the members appear in this section.")),Object(i.b)("h3",{id:"writeback"},"Writeback"),Object(i.b)("p",null,"We've also added a lot of improvements to the writeback feature which is available on valQ Collaborate. Writeback allows you to post the scenario,series data from valQ to your backend systems."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This feature is available in the ",Object(i.b)("strong",{parentName:"li"},"Simulate > Navigation Panel")," section on the runtime.")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Writeback feature accessible from the Navigation Panel",src:Object(r.a)("doc-images/releases/nav_panel_writeback_icon.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Writeback feature accessible from the Navigation Panel")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The settings are available under the ",Object(i.b)("strong",{parentName:"li"},"Model > General > Writeback")," section.")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Writeback Settings",src:Object(r.a)("doc-images/releases/writeback_settings.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Writeback settings")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"New Writeback features:")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Writeback data format (V2)")," "),Object(i.b)("p",{parentName:"li"},"The new format will include the below details in the writeback JSON"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Logged in valQ user details")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'"result" property will contain the list of scenario/series which were selected for writeback')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'"isPrimary/isComparison" properties will be available on series. This can be used during processing to check for base and comparison series.')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Node level comments will also be included in the writeback"),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Writeback Format",src:Object(r.a)("doc-images/releases/writeback_format.png")}))))),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Writeback Format"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Allow writeback of ",Object(i.b)("strong",{parentName:"p"},"Simulated Nodes"),":"),Object(i.b)("p",{parentName:"li"},"The section ",Object(i.b)("strong",{parentName:"p"},"Exporting Nodes"),', has an option - "',Object(i.b)("em",{parentName:"p"},"Only simulation affected nodes"),'".'),Object(i.b)("p",{parentName:"li"},"By selecting the above option, you will restrict the export of just the Nodes affected in the Simulation.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"History")," of the writeback status:"),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Writeback History Logs",src:Object(r.a)("doc-images/releases/writeback_history_logs.png")}))),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Writeback History Logs")))),Object(i.b)("h3",{id:"formula-enhancements"},"Formula enhancements"),Object(i.b)("p",null,"Enhanced the Node configuration Formulas as listed in the below table: "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Refer the complete Formulas list ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.valQ.com/docs/faq/formula-list"}),"here"),".")),Object(i.b)("details",null,Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)("a",{href:Object(r.a)("https://valq.com/blogs/whats-new-in-valq-1-8/")},"What's New in ValQ 1.8?"))),Object(i.b)("summary",null,Object(i.b)("b",null,"Assets"))))}u.isMDXComponent=!0},215:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(10),r=a(214),o=a(11),b=Object(n.createContext)({collectLink:function(){}}),c=a(213),s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a};t.a=function(e){var t,a,m,p=e.isNavLink,u=e.to,d=e.href,O=e.activeClassName,j=e.isActive,h=e["data-noBrokenLinkCheck"],g=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),N=Object(c.b)().withBaseUrl,v=Object(n.useContext)(b),f=u||d,y=Object(r.a)(f),w=null==f?void 0:f.replace("pathname://",""),k=void 0!==w?function(e){return e.startsWith("/")}(a=w)?N(a):a:void 0,x=Object(n.useRef)(!1),T=p?i.e:i.c,S=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!S&&y&&window.docusaurus.prefetch(k),function(){S&&m&&m.disconnect()}}),[k,S,y]);var A=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,C=!k||!y||A;return k&&y&&!A&&!h&&v.collectLink(k),C?l.a.createElement("a",Object.assign({href:k},f&&!y&&{target:"_blank",rel:"noopener noreferrer"},g)):l.a.createElement(T,Object.assign({},g,{onMouseEnter:function(){x.current||(window.docusaurus.preload(k),x.current=!0)},innerRef:function(e){var t,a;S&&e&&y&&(t=e,a=function(){window.docusaurus.prefetch(k)},(m=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(t),m.disconnect(),a())}))}))).observe(t))},to:k||""},p&&{isActive:j,activeClassName:O}))}},223:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),l=a.n(n),i=(a(23),a(36),function(e){return l.a.createElement("div",{className:"ProductRelease"},l.a.createElement("header",null,l.a.createElement("h1",null,e.header)),l.a.createElement("a",{href:e.earlier},"Earlier version: ",e.earlier),l.a.createElement("br",null),l.a.createElement("a",{href:e.next},"Next version: ",e.next),l.a.createElement("br",null),l.a.createElement("a",{href:"docs/releases"},"Releases"))})}}]);