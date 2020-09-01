(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return j}));var n=a(1),i=a(9),b=(a(0),a(250)),l=a(251),o=a(256),c=a(258),r=(a(118),{id:"simulation_canvas",title:"Simulation Canvas",sidebar_label:"Simulation Canvas"}),s={id:"simulation/simulation_canvas",title:"Simulation Canvas",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/simulation/simulation_canvas.mdx",permalink:"/docs/simulation/simulation_canvas",sidebar_label:"Simulation Canvas",sidebar:"sideBar",previous:{title:"Simulate Overview",permalink:"/docs/simulation/simulate_overview"},next:{title:"Navigation Panel",permalink:"/docs/simulation/navigation_panel"}},d=[{value:"1. Node Features",id:"1-node-features",children:[{value:"1.1 Simulation slider",id:"11-simulation-slider",children:[]},{value:"1.2 Simulation details",id:"12-simulation-details",children:[]},{value:"1.3 Node details Pop-up",id:"13-node-details-pop-up",children:[]},{value:"1.4 Remove simulation",id:"14-remove-simulation",children:[]},{value:"1.5 Edit simuation",id:"15-edit-simuation",children:[]},{value:"1.6 Go to Plan",id:"16-go-to-plan",children:[]},{value:"1.7 Add Comments",id:"17-add-comments",children:[]}]},{value:"2. Canvas Features",id:"2-canvas-features",children:[{value:"2.1 Hide Navigation Panel",id:"21-hide-navigation-panel",children:[]},{value:"2.2 Switch view",id:"22-switch-view",children:[]},{value:"2.3 Edit and Reset all",id:"23-edit-and-reset-all",children:[]},{value:"2.4 Search for a node",id:"24-search-for-a-node",children:[]},{value:"2.5 Zoom slider",id:"25-zoom-slider",children:[]},{value:"2.6 Go To Level",id:"26-go-to-level",children:[]}]}],m={rightToc:d};function j(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("div",{style:{textAlign:"justify"}},"Simulating the nodes help in performing what-if analysis and it can be done instantly on ValQ using the simulate slider present on each node. Here's the ValQ canvas after simulation on the Simulate tab.")," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/snode19.png")})))," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"justify"}},"As simulation is done on a node, let's first understand the node features for performing simulation and then the canvas properties. The introduction to ValQ model structure and the components of a node has been explained in the introduction section - ",Object(b.b)(o.a,{to:Object(l.a)("docs/intro/node"),mdxType:"Link"}," Understanding Nodes in ValQ"),"."),Object(b.b)("h2",{id:"1-node-features"},"1. Node Features"),Object(b.b)("p",null,"The following node features are discussed in this section"),Object(b.b)("div",{style:{textAlign:"justify"},className:"table-center"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Click on any option to know more"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#11-simulation-slider"}),"Simulation slider"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#12-simulation-details"}),"Simulation details"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#13-node-details-pop-up"}),"Node details Pop-up"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#14-remove-simulation"}),"Remove simulation"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#15-edit-simuation"}),"Edit simuation"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#16-go-to-plan"}),"Go to Plan"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#17-add-comments"}),"Add Comments")))))),Object(b.b)("h3",{id:"11-simulation-slider"},"1.1 Simulation slider"),Object(b.b)("div",{style:{textAlign:"justify"}},"Move the slider on the node to perform simulation. Based on the Desired Trend setting under ",Object(b.b)(o.a,{to:Object(l.a)("docs/model/node#2-configuration"),mdxType:"Link"},"Configuration"),", the simulation shows better or worse results.")," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"justify"}},"On an increasing Desired Trend, slide to right to get the best case and slide to left for worse case. Below is an example of worse case on increasing Desired Trend indicated by red band.")," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/snode1.png")})))," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"justify"}},"On the other hand, on a decreasing Desired Trend, slide to left for better results and slide to right for worse. Below is an example of better case on decreasing Desired Trend indicated by green band.")," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/snode2.png")})))," ",Object(b.b)("br",null),Object(b.b)("h3",{id:"12-simulation-details"},"1.2 Simulation details"),Object(b.b)("div",{style:{textAlign:"justify"}},"Let us observe the impact of simulation on a node with the following example.")," ",Object(b.b)("br",null),Object(b.b)("h4",{id:"east-node-before-simulation"},"'East' node before simulation"),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/sim24.png")}))),Object(b.b)("h4",{id:"east-node-after-simulation"},"'East' node after simulation"),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/sim15.png")})))," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"justify"}},"The percentage on top left corner denotes the overall change of primary value for better or worse. The secondary KPI values are the simulated values and the variances are calculated as difference between the simulated baseline series and comparison series. The dotted trend line is the original baseline and the trend line in blue is the simulated baseline."),Object(b.b)("h3",{id:"13-node-details-pop-up"},"1.3 Node details Pop-up"),Object(b.b)("p",null,"Click on the pencil icon on the node to access the node details screen."),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/sim25.png")})))," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"justify"},className:"table-center"},Object(b.b)("p",null,"The information provided on nodes details pop-up are:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Click on any option to know more"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"i"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#i-node-description"}),"Node description"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ii"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#ii-simulation-impact-and-variances"}),"Simulation impact and variances"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iii"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#iii-line-and-column-chart"}),"Line and column chart"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iv"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#iv-waterfall-chart"}),"Waterfall chart")))))),Object(b.b)("h4",{id:"i-node-description"},"i. Node description"),Object(b.b)("p",null,"The pop-up provides you with insights such as node name of the KPI, it's definition and calculation method on top left corner of the screen."),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/sim26.png")})))," ",Object(b.b)("br",null),Object(b.b)("h4",{id:"ii-simulation-impact-and-variances"},"ii. Simulation impact and variances"),Object(b.b)("div",{style:{textAlign:"justify"}},"The node details pop-up provides a detailed analysis of simulation impact for the current month and full year. The results are calculated difference between simulated baseline series and comparison series in addition to the analysis between original baseline series and comparison series.")," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/snode4.png")})))," ",Object(b.b)("br",null),Object(b.b)("h4",{id:"iii-line-and-column-chart"},"iii. Line and column chart"),Object(b.b)("div",{style:{textAlign:"justify"}},"A line and column chart shows the period values of the node for the full year. The column chart represent the simulated baseline values and the dotted lines indicate the original baseline value. The blue trend line shows the comparison values and the current month is highlighted in blue. Click the icon highlighted in the below image to view the chart on fullscreen mode.")," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/snode5.png")})))," ",Object(b.b)("br",null),Object(b.b)("p",null,"Hover over the chart to get the period details on tooltip. Below is an example for June. "),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/snode8.png")})))," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"justify"}},"The three horizontal lines icon as highlighted below has options to view the Trend of Children and Trend of Calculation Components. Trend of Children shows the chart for each of the child nodes and Trend of Calculation Components shows the chart for the nodes referred in the formula.")," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/snode6.png")})))," ",Object(b.b)("br",null),Object(b.b)("p",null,"Here's a look at the Trend of Children"),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/snode7.png")})))," ",Object(b.b)("br",null),Object(b.b)("h4",{id:"iv-waterfall-chart"},"iv. Waterfall chart"),Object(b.b)("div",{style:{textAlign:"justify"}},"A waterfall chart is also a part of the node details page. The chart has three horizontal lines icon option to show the Simulation Impact and Variance Breakdown. The waterfall icon highlighted below can be used to flip the chart.")," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/snode10.png")})))," ",Object(b.b)("br",null),Object(b.b)("p",null,"The following is an example using 'East' node with baseline as 2020 Actuals and comparison as 2020 Forecast."),Object(b.b)("h4",{id:"iva-simulation-impact"},"iv.a) Simulation Impact"),Object(b.b)("p",null,"The below image shows the horizontal waterfall chart of simulation impact on the node 'East' for full year. The change is the difference\nbetween original baseline and simulated baseline."),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/snode11.png")})))," ",Object(b.b)("br",null),Object(b.b)("h4",{id:"ivb-variance-breakdown"},"iv.b) Variance Breakdown"),Object(b.b)("p",null,"The below image shows the vertical waterfall chart of variance breakdown on the node 'East' for full year. The change is the difference\nbetween comparison and simulated baseline."),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/snode12.png")})))," ",Object(b.b)("br",null),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"}," Note")," ",Object(b.b)("br",null)," Calculation components and children remain same when no ",Object(b.b)("em",{parentName:"p"},"other")," nodes from the model are referred during node\nconfiguration")),Object(b.b)("h3",{id:"14-remove-simulation"},"1.4 Remove simulation"),Object(b.b)("p",null,"The simulation can be removed by clicking on the 'bin' icon on the node or on the canvas as highlighted below."),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/snode3.png")})))," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/snode13.png")})))," ",Object(b.b)("br",null),Object(b.b)("h3",{id:"15-edit-simuation"},"1.5 Edit simuation"),Object(b.b)("div",{style:{textAlign:"justify"}},"The arrow icon provides details about the simulation effect and the simulation method by way of a tooltip. The below image shows the period distribution, full year and year to date simulated months values of the original baseline and simulated baseline. The simulation method of the node can also be changed on the tooltip.")," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/simulate_tab/sim16.png")})))," ",Object(b.b)("br",null),Object(b.b)("p",null,"The edit icon on the tooltip can be used to edit the simulated period values of the node manually."),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/snode14.png")}))),Object(b.b)("h3",{id:"16-go-to-plan"},"1.6 Go to Plan"),Object(b.b)("div",{style:{textAlign:"justify"}},"The plan icon takes you to the recent access plan and displays that particular node, its siblings and children.")," ",Object(b.b)("br",null),Object(b.b)("p",null,"Below is an example using 'East' node"),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/snode15.png")}))),Object(b.b)("div",{style:{textAlign:"justify"}},"2020 Budget is the recently accessed plan and click on the icon highlighted in the above image to display the plan screen as below.")," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/snode16.png")}))),Object(b.b)("h3",{id:"17-add-comments"},"1.7 Add Comments"),Object(b.b)("div",{style:{textAlign:"justify"}},"Click on the comment icon to open the Comments section. Comments can be added/edited/deleted to the model at node granularity.")," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/simulate_tab/sim17.png")}))),Object(b.b)("h2",{id:"2-canvas-features"},"2. Canvas Features"),Object(b.b)("p",null,"The following canvas features are discussed in this section"),Object(b.b)("div",{style:{textAlign:"justify"},className:"table-center"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Click on any option to know more"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#21-hide-navigation-panel"}),"Hide Navigation Panel"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#22-switch-view"}),"Switch view"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#23-edit-and-reset-all"}),"Edit and Reset all"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#24-search-for-a-node"}),"Search for a node"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#25-zoom-slider"}),"Zoom slider"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#26-go-to-level"}),"Go To Level")))))),Object(b.b)("h3",{id:"21-hide-navigation-panel"},"2.1 Hide Navigation Panel"),Object(b.b)("div",{style:{textAlign:"justify"}},"The below highlighted icon helps to hide the Navigation Panel from the Simulate tab screen. Hide the panel to take a clear look at the model.")," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/snode17.png")})))," ",Object(b.b)("br",null),Object(b.b)("p",null,"Here's Simulate tab screen with hidden Navigation panel. You can use this view as presentation mode."),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/snode18.png")}))),Object(b.b)("h3",{id:"22-switch-view"},"2.2 Switch view"),Object(b.b)("p",null,"At any time, you can switch between Tree view and Table view on the ValQ canvas."),Object(b.b)("p",null,"Click on the tree icon as highlighted in the below Figure to get the Tree view."),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/sim18.png")})))," ",Object(b.b)("br",null),Object(b.b)("p",null,"Click on the table icon as highlighted in the below Figure to get the Table view."),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/sim19.png")})))," ",Object(b.b)("br",null),Object(b.b)("p",null,"For more information on Table View, click ",Object(b.b)(o.a,{to:Object(l.a)("docs/simulation/tableview"),mdxType:"Link"},"here"),"."),Object(b.b)("h3",{id:"23-edit-and-reset-all"},"2.3 Edit and Reset all"),Object(b.b)("p",null,"Simulated nodes along with the percentage change are displayed on top of the canvas."),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/sim22.png")})))," ",Object(b.b)("br",null),Object(b.b)("p",null,"Click on the Edit option to manually change the period values."),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/sim23.png")})))," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"justify"}},"The bin icon on each of the simulation result can be used to remove that particular simulation. To remove all the simulations at once, click the Reset all option."),Object(b.b)("h3",{id:"24-search-for-a-node"},"2.4 Search for a node"),Object(b.b)("p",null,"Search for a node by typing the node title on the search bar located at the bottom of the canvas."),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/model/node4.1.png")})))," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"justify"}},"For our example, the node name is given as 'Consumer' and based on the search you will be able to view the node as highlighted.")," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"Display of the Searched Node",src:Object(l.a)("/doc-images/model/node4.2.png")}))),Object(b.b)("h3",{id:"25-zoom-slider"},"2.5 Zoom slider"),Object(b.b)("div",{style:{textAlign:"justify"}},"The slider on the canvas is available to zoom in/out on the canvas. ValQ also supports scroll on the mouse as you hover over the canvas and pinch & zoom gestures on touch-enabled devices.")," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/sim20.png")}))),Object(b.b)("h3",{id:"26-go-to-level"},"2.6 Go To Level"),Object(b.b)("p",null,"Go to level option is available to help you to navigate through the ValQ model and get to the required level quickly. "),Object(b.b)("div",{style:{textAlign:"justify"}},"In the below Figure, Level 3 has been selected on the drop-down list and you can observe the model has expanded up to Level 3 based on this selection.")," ",Object(b.b)("br",null),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/simulate_tab/sim21.png")}))))}j.isMDXComponent=!0},256:function(e,t,a){"use strict";var n=a(1),i=a(0),b=a.n(i),l=a(35),o=/^\/(?!\/)/;t.a=function(e){var t,a=e.to,c=e.href,r=a||c,s=o.test(r),d=Object(i.useRef)(!1),m="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(i.useEffect)((function(){return!m&&s&&window.docusaurus.prefetch(r),function(){m&&t&&t.disconnect()}}),[r,m,s]),r&&s?b.a.createElement(l.b,Object(n.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(r),d.current=!0)},innerRef:function(e){var a,n;m&&e&&s&&(a=e,n=function(){window.docusaurus.prefetch(r)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:r})):b.a.createElement("a",Object(n.a)({},e,{href:r}))}}}]);