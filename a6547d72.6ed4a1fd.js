(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{186:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return a})),l.d(t,"metadata",(function(){return r})),l.d(t,"rightToc",(function(){return s})),l.d(t,"default",(function(){return u}));var o=l(1),b=l(9),c=(l(0),l(215)),i=l(216),n=l(222),a=(l(118),{id:"budget-allocation",title:"Sample Budgeting Scenarios"}),r={id:"planning/budget-allocation",title:"Sample Budgeting Scenarios",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/planning/budgeting-and-allocation.mdx",permalink:"/docs/planning/budget-allocation",sidebar:"sideBar",previous:{title:"Time Series Forecasting",permalink:"/docs/planning/time_series"},next:{title:"Simulate Tab",permalink:"/docs/simulation/simulation"}},s=[{value:"Scenario 1: To allocate the parent node\u2019s changes to some of the immediate child nodes",id:"scenario-1-to-allocate-the-parent-nodes-changes-to-some-of-the-immediate-child-nodes",children:[]},{value:"Scenario 2: To allocate a node\u2019s increase/decrease in aggregate value to some of the periods",id:"scenario-2-to-allocate-a-nodes-increasedecrease-in-aggregate-value-to-some-of-the-periods",children:[]},{value:"Scenario 3: To increase the period values of a node based on a monthly trend",id:"scenario-3-to-increase-the-period-values-of-a-node-based-on-a-monthly-trend",children:[]},{value:"Scenario 4: To perform driver-based allocation",id:"scenario-4-to-perform-driver-based-allocation",children:[]},{value:"Scenario 5: To increase the period values of a node according to a combination of trends <br />",id:"scenario-5-to-increase-the-period-values-of-a-node-according-to-a-combination-of-trends-br-",children:[]}],d={rightToc:s};function u(e){var t=e.components,l=Object(b.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},d,l,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"scenario-1-to-allocate-the-parent-nodes-changes-to-some-of-the-immediate-child-nodes"},"Scenario 1: To allocate the parent node\u2019s changes to some of the immediate child nodes"),Object(c.b)("div",{style:{textAlign:"justify"}},"1.  For our example, expand East node. Now select the node 'Industrials' and lock the node (see Figure below).")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/ba1.png")})))," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"2.  Now select the Total Cell for node 'East' as shown in the below Figure. You can update the number by double-clicking the cell and entering the number directly in the value bar. Or you can enter the number in the popup.")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/ba2.png")})))," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"3.  Now double click the total cell and type '+10%' at the end of the number and click on 'Weight' as shown in the below Figure.")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/ba3.png")})))," ",Object(c.b)("br",null),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},"You will be able to view the 'Spread by Weights' screen.")),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/ba4.png")})))," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"By default, the current node and the current series are selected. You can also select different weights to allocate. You can further decide to allocate the full amount or the delta amount (see Figure above). The 'Overwrite Values' option deletes the existing period values and rewrites the new allocated value. The 'Append to Values' option will add the delta value to the existing period values and only the delta value gets allocated based on the selected weights (see Figure above). For our example, the Overwrite option has been selected.")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"5.  As a result of Scenario 1, you will be able to view the Input Editor screen updated with the configured values (see Figure below). The cells which were impacted because of the allocation operations turns yellow.")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images/plan/ba5.png")})))," ",Object(c.b)("br",null),Object(c.b)("h2",{id:"scenario-2-to-allocate-a-nodes-increasedecrease-in-aggregate-value-to-some-of-the-periods"},"Scenario 2: To allocate a node\u2019s increase/decrease in aggregate value to some of the periods"),Object(c.b)("div",{style:{textAlign:"justify"}},"1. For our example, select the Node 'Cost of Sales' for April month (see Figure below).")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images//pl16.png")})))," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"2. Increase the cell value by 10% and click Enter (see Figure below).")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images//pl17.png")})))," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"3. Now click the \u201cCopy To\u201d icon to copy the value from April across the periods till December (see Figure below)")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images//pl18.png")})))," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"4. After clicking on the Copy to icon option, the Input Editor screen looks similar to the Figure shown below.")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images//pl19.png")})))," ",Object(c.b)("br",null),Object(c.b)("h2",{id:"scenario-3-to-increase-the-period-values-of-a-node-based-on-a-monthly-trend"},"Scenario 3: To increase the period values of a node based on a monthly trend"),Object(c.b)("div",{style:{textAlign:"justify"}},"1.  For our example, select the Node 'Other Costs' for Jan month (see Figure below).")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images//pl22.png")})))," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"2.  Now click the 'Trend' icon (see Figure below)")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images//pl23.png")})))," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"3.  Now the Trend pop up opens. For our example, select the 'By Percentage' option and enter value 2 in the Increase Trend section. Now select the Overwrite Values option and click 'Apply' (see Figure below).")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images//pl24.png")})))," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"4.  Based on the above configuration, you will be able to view the Input Editor screen as shown below.")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images//pl25.png")})))," ",Object(c.b)("br",null),Object(c.b)("h2",{id:"scenario-4-to-perform-driver-based-allocation"},"Scenario 4: To perform driver-based allocation"),Object(c.b)("div",{style:{textAlign:"justify"}},"1.  For our example, select the Node 'Support Costs' in the Total column (see Figure below).")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images//pl26.png")})))," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"2.  Now click the 'Weight' icon (see Figure below)")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images//pl27.png")})))," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"3.  The Spread by Weight pop up opens. For our example, select the Node as 'Cost of Sales'. Select the 'Overwrite Values' option and click 'Apply' (see Figure below).")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images//pl28.png")})))," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"4.  As a result of Scenario 4, you will be able to view the Input Editor screen loaded with the redistributed values (see Figure below).")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images//pl29.png")})))," ",Object(c.b)("br",null),Object(c.b)("h2",{id:"scenario-5-to-increase-the-period-values-of-a-node-according-to-a-combination-of-trends-br-"},"Scenario 5: To increase the period values of a node according to a combination of trends ",Object(c.b)("br",null)),Object(c.b)("div",{style:{textAlign:"justify"}},"1.  Select the Node 'Rent' and lock the entire Row. ",Object(c.b)("br",null))," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"2.  Release the lock for the cells from Jan to Mar. ",Object(c.b)("br",null))," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"3.  Now select the cell 'Jan'. Increase the value by 5% (see Figure below). ",Object(c.b)("br",null))," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images//pl30.png")})))," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"4.  Now copy it across the cells. The Input Editor looks similar to the Figure as shown below.")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images//pl31.png")})))," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"5.  Now release the lock for the complete Row of the Node Rent.")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"6.  Select the cell 'Apr'. Increase the value by 10% (see Figure below).")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images//pl32.png")})))," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"justify"}},"7.  Now copy it across the cells. The Input Editor looks similar to the Figure as shown below.")," ",Object(c.b)("br",null),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(n.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"ValQ logo",src:Object(i.a)("/doc-images//pl33.png")})))," ",Object(c.b)("br",null))}u.isMDXComponent=!0}}]);