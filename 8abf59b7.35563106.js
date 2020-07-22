(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{182:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return h}));var n=a(1),l=a(9),o=(a(0),a(215)),i=a(216),s=a(218),b=a(222),c=(a(118),{id:"plan_features",title:"Plan Features",sidebar_label:"Plan Features"}),r={id:"planning/plan_features",title:"Plan Features",description:'import useBaseUrl from "@docusaurus/useBaseUrl"; // Add to the top of the file below the front matter.',source:"@site/docs/planning/plan_features.mdx",permalink:"/docs/planning/plan_features",sidebar_label:"Plan Features",sidebar:"sideBar",previous:{title:"Access/Update Plan",permalink:"/docs/planning/access"},next:{title:"Time Series Forecasting",permalink:"/docs/planning/time_series"}},d=[{value:"1. View Current Series",id:"1-view-current-series",children:[]},{value:"2. Add New Series",id:"2-add-new-series",children:[]},{value:"3. Action Menu",id:"3-action-menu",children:[{value:"3.1 Weight",id:"31-weight",children:[]},{value:"3.2 Equals",id:"32-equals",children:[]},{value:"3.3 Trend",id:"33-trend",children:[]},{value:"3.4 Copy-to",id:"34-copy-to",children:[]},{value:"3.5 Auto Forecast",id:"35-auto-forecast",children:[]},{value:"3.6 Allocate Children",id:"36-allocate-children",children:[]},{value:"3.7 Hold and Release",id:"37-hold-and-release",children:[]},{value:"3.8 Note",id:"38-note",children:[]},{value:"3.9 Refresh Datasource",id:"39-refresh-datasource",children:[]},{value:"3.10 View Allocation History",id:"310-view-allocation-history",children:[]},{value:"3.11 Show hidden nodes",id:"311-show-hidden-nodes",children:[]}]},{value:"4. Search for a Node",id:"4-search-for-a-node",children:[]},{value:"6. View the Node Configuration",id:"6-view-the-node-configuration",children:[]}],u={rightToc:d};function h(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Plan tab consists of two panels: "),Object(o.b)("p",null,"On top of the screen, you will find a panel containing the features that help to configure the plan as per your needs"),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan20.png")})))," ",Object(o.b)("br",null),Object(o.b)("p",null,"The other panel shows the plan canvas based on the configuration"),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan21.png")})))," ",Object(o.b)("br",null),Object(o.b)("p",null,"Now let's take a look at the features of the Plan tab"),Object(o.b)("h2",{id:"1-view-current-series"},"1. View Current Series"),Object(o.b)("div",{style:{textAlign:"justify"}},"You can see the name of the series you are currently working on the top panel as highlighted below.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan5.png")})))," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"On clicking the settings icon, the newly created series can be set as primary or comparison series for the Plan tab. You can also rename or delete the series here.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan5.2.png")})))," ",Object(o.b)("br",null),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note")," ",Object(o.b)("br",null),"\nSet as Primary/Comparison sets the series as Primary/Comparison series across all the tabs on ValQ ")),Object(o.b)("h2",{id:"2-add-new-series"},"2. Add New Series"),Object(o.b)("p",null,"Click the '+ New Series' to add another series to the Plan tab."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan18.png")}))),Object(o.b)("h2",{id:"3-action-menu"},"3. Action Menu"),Object(o.b)("p",null,"In the 'Action Menu\u2019, you will find various options to configure the Plan tab"),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan19.png")}))),Object(o.b)("h3",{id:"31-weight"},"3.1 Weight"),Object(o.b)("div",{style:{textAlign:"justify"}},"Node's total value can be changed - manually or by simply, adding or subtracting to get a new total value. Weight distributes a node's new total value among the periods based on the series and the node selected by the user. You have two ways to distribute a node's total value - Overwrite Values or Append to Values.")," ",Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Total Value:")," The node's value under the Total column"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Period Value:")," The node values under the period (month) columns"),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan7.png")})))," ",Object(o.b)("br",null),Object(o.b)("p",null,"Let's understand Spread by Weights with Overwrite Values and Append to Values using illustrations:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example 1: Spread by Weights with Overwrite Values")),Object(o.b)("div",{style:{textAlign:"justify"}},"In the below example, the name of the series is 'New Series 2', 'Overall Result' is the parent node and 'East' and 'Midwest' are child nodes. Overall Result's Calculation Method is the sum of its children.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"Here 'East' node's total is changed from 260 to 600 and the weight is applied based on another node 'Midwest' from the same series 'New Series 2'. Change action is selected as Overwrite Values.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/weight ow.png"),width:675,height:585})))," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"As you can observe from the above Figure, the new total of 600 is distributed as period values based on the spread of the 'Midwest' node. The existing values of the 'East' node have been overwritten by the new values. The parent node 'Overall Result' also gets changed as the result of this action.")," ",Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example 2: Spread by Weights with Append to Values")),Object(o.b)("div",{style:{textAlign:"justify"}},"In the below example, the name of the series is 'New Series 2', 'Overall Result' is the parent node and 'East' and 'Midwest' are child nodes. Overall Result's Calculation Method is the sum of its children.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"Here 'East' node's total is changed from 260 to 600 and the weight is applied based on another node 'Midwest' from the same series 'New Series 2'. Change action is selected as Append to Values.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/weight ap.png"),width:675,height:585})))," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"As you can observe from the above Figure, the new total is 600 and the difference between the original total and the new total is 340 (600-260). Based on the spread of the 'Midwest' node, the difference of 340 is distributed by way of addition to the existing period values. The parent node 'Overall Result' also gets changed as the result of this action."),Object(o.b)("h3",{id:"32-equals"},"3.2 Equals"),Object(o.b)("div",{style:{textAlign:"justify"}},"Like Weight, here you can edit the original total value - manually or by simply, adding or subtracting to get new total value. Equal distributes a node's new total value equally over the periods. With the Change action option, the user can choose to Overwrite Values or Append to Values.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan8.png")})))," ",Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example 3: Equal with Overwrite Values")),Object(o.b)("p",null,"Here, the total value of the 'East' node is changed from 260 to 600 and Change action is selected as Overwrite Values."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/equals ow.png"),width:675,height:440})))," ",Object(o.b)("br",null),Object(o.b)("p",null,"As you can observe, the new total value of 600 is distributed equally to all the period values. The existing values of the 'East' have been overwritten by the new values."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example 4: Equal with Append to Values")),Object(o.b)("p",null,"Here, the total value of the 'East' node is changed from 260 to 600 and Change action is selected as Append to Values."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/equals ap.png"),width:675,height:440})))," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"As you can observe, the new total value is 600 and the difference between the original total and the new total is 340 (600-260). The difference of 340 is now distributed by way of addition to the existing period values."),Object(o.b)("h3",{id:"33-trend"},"3.3 Trend"),Object(o.b)("div",{style:{textAlign:"justify"}},"Trend enables the user to increase/decrease the existing period values of a node - By Percentage or By Value. With the Change action option, the user can choose to Overwrite Values or Append to Values.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan9.png")})))," ",Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example 5: Increase Trend By Percentage with Overwrite Values")),Object(o.b)("div",{style:{textAlign:"justify"}},"In the below example, the Jan period value of the 'East' node is changed from 10 to 50. The Trend is selected as an increase by 2% and Change action is selected as Overwrite Values.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/trend ow.png"),width:675,height:460})))," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"As you can observe, the Jan value of the 'East' node is 50 and the remaining period values are incremented by 2% of 50. The existing values of the node 'East' have been overwritten by the new values.")," ",Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example 6: Increase Trend By Value with Append to Values")),Object(o.b)("div",{style:{textAlign:"justify"}},"In the below example, the Jan period value of the 'East' node is kept as 10. The Trend is selected as an increase by value of 12 and Change action is selected as Append to Values.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/trend ap.png"),width:675,height:460})))," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"justify"}},"As you can observe, the Jan value of the 'East' node is 10 and the remaining period values are incremented by 12 in addition to the existing period values.")," ",Object(o.b)("br",null),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),"\nThe Increase Trend option accepts both positive and negative values.")),Object(o.b)("h3",{id:"34-copy-to"},"3.4 Copy-to"),Object(o.b)("div",{style:{textAlign:"justify"}},"Copy-to option takes a node's period value and applies the same value to the remaining periods of that node. The change gets updated to the parent node as well and is highlighted in yellow as seen below.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan10.png")}))),Object(o.b)("h3",{id:"35-auto-forecast"},"3.5 Auto Forecast"),Object(o.b)("p",null,"Auto Forecast enables the user to apply Time Series Forecasting methods to the plan. Click ",Object(o.b)(s.a,{to:Object(i.a)("docs/planning/time_series"),mdxType:"Link"},"here")," to know more about it. "),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan11.png")}))),Object(o.b)("h3",{id:"36-allocate-children"},"3.6 Allocate Children"),Object(o.b)("div",{style:{textAlign:"justify"}},"Child nodes are allocated either by 'Weight' or 'Equal' under this option and 'Copy-to' is used to copy a node's value to its sibling nodes.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan12.png")}))),Object(o.b)("h3",{id:"37-hold-and-release"},"3.7 Hold and Release"),Object(o.b)("div",{style:{textAlign:"justify"}},"Hold and Release can be used to lock or unlock cells as needed. The feature can be applied on cell, period, row or column level. This option helps you to configure the rest of the plan tab and then release the cells kept on hold.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan13.png")}))),Object(o.b)("h3",{id:"38-note"},"3.8 Note"),Object(o.b)("p",null,"The Note helps the user to add, modify or delete comments on the cell level. "),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan14.png")}))),Object(o.b)("h3",{id:"39-refresh-datasource"},"3.9 Refresh Datasource"),Object(o.b)("p",null,"On clicking Refresh Datasource, the newly created series gets updated if there are any changes to the input data."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan15.png")}))),Object(o.b)("h3",{id:"310-view-allocation-history"},"3.10 View Allocation History"),Object(o.b)("div",{style:{textAlign:"justify"}},"View Allocation History is used to view the changes performed and also roll back changes when needed. 'Reset all' would delete all the allocation adjustments made to the series. 'Restore to this step' traces back to the selected step.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan16.png")}))),Object(o.b)("h3",{id:"311-show-hidden-nodes"},"3.11 Show hidden nodes"),Object(o.b)("div",{style:{textAlign:"justify"}},"You have an option to display the nodes that were hidden while building the model under the Model tab. Here, East is the hidden node and on selecting the Show hidden node option, it gets displayed. However, notice that the Overall Result doesn't get affected.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan27.png")})))," ",Object(o.b)("br",null),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"}," Note")," ",Object(o.b)("br",null)," Upon enabling show hidden node, the node stays hidden on the other tabs.")),Object(o.b)("h2",{id:"4-search-for-a-node"},"4. Search for a Node"),Object(o.b)("div",{style:{textAlign:"justify"}},"You can take a look at a particular node and it's children by entering the node name or ID  using the search bar. The model along with period values get displayed in a table form. In case, the empty series has been chosen as the series to start with, only the structure and relationships are displayed and not the values.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan6.png")})))," ",Object(o.b)("br",null),Object(o.b)("h2",{id:"6-view-the-node-configuration"},"6. View the Node Configuration"),Object(o.b)("div",{style:{textAlign:"justify"}},"On clicking any cell with value, the number format and scaling that were configured while modeling is retained. You can see the absolute value on the 'Value Bar' and the Calculation Method and Time Aggregation on the footer as highlighted in the below image.")," ",Object(o.b)("br",null),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(b.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/plan17.png")})))," ",Object(o.b)("br",null),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"}," Note"),"\nJust like a formula bar in spreadsheets, you can perform basic operations on a value in the value bar ")))}h.isMDXComponent=!0},218:function(e,t,a){"use strict";var n=a(1),l=a(0),o=a.n(l),i=a(34),s=/^\/(?!\/)/;t.a=function(e){var t,a=e.to,b=e.href,c=a||b,r=s.test(c),d=Object(l.useRef)(!1),u="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(l.useEffect)((function(){return!u&&r&&window.docusaurus.prefetch(c),function(){u&&t&&t.disconnect()}}),[c,u,r]),c&&r?o.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(c),d.current=!0)},innerRef:function(e){var a,n;u&&e&&r&&(a=e,n=function(){window.docusaurus.prefetch(c)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:c})):o.a.createElement("a",Object(n.a)({},e,{href:c}))}}}]);