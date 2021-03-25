(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),i=(a(0),a(184)),b=a(185),l=a(187),o=a(189),s=(a(54),{id:"data-series",title:"Data Series"}),c={unversionedId:"model/data-series",id:"model/data-series",isDocsHomePage:!1,title:"Data Series",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/model/data-series.mdx",slug:"/model/data-series",permalink:"/model/data-series",version:"current",sidebar:"sideBar",previous:{title:"Node",permalink:"/model/node"},next:{title:"Settings",permalink:"/model/settings"}},d=[{value:"1. Data Series Manager",id:"1-data-series-manager",children:[{value:"1.1 Periods",id:"11-periods",children:[]},{value:"1.2 Data Series",id:"12-data-series",children:[]}]},{value:"2. Time Aggregation Labels",id:"2-time-aggregation-labels",children:[]},{value:"3. Data Sorting",id:"3-data-sorting",children:[]},{value:"Summary - Data Series Tab",id:"summary---data-series-tab",children:[]}],p={rightToc:d};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Data Series tab helps you to configure the data series settings for the model created in ValQ. The options available are:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#1-data-series-manager"}),"Data Series Manager")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#2-time-aggregation-labels"}),"Time Aggregation Labels")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#3-data-sorting"}),"Data Sorting"))),Object(i.b)("h2",{id:"1-data-series-manager"},"1. Data Series Manager"),Object(i.b)("p",null,"Data Series Manager helps you to configure the ",Object(i.b)(l.a,{to:Object(b.a)("model/data-series#11-periods"),mdxType:"Link"},"Periods")," and ",Object(i.b)(l.a,{to:Object(b.a)("model/data-series#12-data-series"),mdxType:"Link"},"Data Series")," for the model."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(o.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"New Tab",src:Object(b.a)("/doc-images/model/ds2.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Data Series Manager setting")),Object(i.b)("h3",{id:"11-periods"},"1.1 Periods"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Period(s) per data series"),": Enter the number of periods in the data here. ",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"Period Label(s)"),": Enter the period labels here with a comma separating each label.",Object(i.b)("br",null),"\nThe changes made here to the Period Labels will be reflected in all 4 tabs on ValQ - Model,\nPlan, Simulate and Analyze including the PopUp screen."),Object(i.b)("h3",{id:"12-data-series"},"1.2 Data Series"),Object(i.b)("div",{style:{textAlign:"justify"}},"First, toggle Include comparison data series to add a comparison data series when needed. In case there are two data series to the model, you can keep one as Baseline data series and the other as Comparison data series. The data series can be actuals and budget, multiple years of data, etc. The names of the series are Baseline and Comparison by default, you can double click on the name or click on the pencil icon beside the name to customize.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"justify"}},"For our example, we have the data source having periods from Jan to Dec, Budget and Forecast values. The Budget values will be the Comparison values and the Forecast values will be the Baseline values. Follow the below steps for configuring the values in the Data Series Manager.")," ",Object(i.b)("br",null),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Set the property Period(s) per data series to the value 5."),Object(i.b)("li",{parentName:"ol"},"Configure the Period Labels as Jan, Feb, Mar, Apr, May (see Figure\nabove)."),Object(i.b)("li",{parentName:"ol"},"Enable the property Include comparison data series. You can view\nboth the Baseline and Comparison values."),Object(i.b)("li",{parentName:"ol"},"When the property Include comparison data series is disabled, then\nyou will be able to view only the Baseline Series."),Object(i.b)("li",{parentName:"ol"},"When you click the Baseline label, you will be able to view the\nBaseline values as Forecast values as shown below. Now the label\nhas been changed to Sales Forecast.")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(o.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"New Tab",src:Object(b.a)("/doc-images/model/ds3.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Data Series Manager - Baseline data series")),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"When you click the Comparison label, you will be able to view the\nComparison values as the Budget values as shown below. Now the label\nhas been changed to Sales Budget.")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(o.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"New Tab",src:Object(b.a)("/doc-images/model/ds4.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Data Series Manager - Comparison data series")),Object(i.b)("p",null,"Based on the above set of configuration steps, you will be able to view\nthe ValQ screen as shown below."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(o.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"New Tab",src:Object(b.a)("/doc-images/model/ds5.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Baseline ,Comparison and simulated baseline data series on canvas")),Object(i.b)("div",{style:{textAlign:"justify"}},"You can observe from the above Figure that the data series names are displayed on top of the screen, the period labels are displayed in the tooltip and after simulating the 'East node', you will be able to view the Baseline data in comparison with simulated Baseline data."),Object(i.b)("h2",{id:"2-time-aggregation-labels"},"2. Time Aggregation Labels"),Object(i.b)("div",{style:{textAlign:"justify"}},"Using the Time Aggregation Labels option, you can configure the aggregation labels of the periodic variances. The changes made here will get reflected in the nodes and Value Display of the Simulate tab.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(o.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"New Tab",src:Object(b.a)("/doc-images/model/ds6.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Time Aggregation Labels setting")),Object(i.b)("p",null,"Based on the above configuration, you will be able to view the ValQ screen as shown below."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(o.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"New Tab",src:Object(b.a)("/doc-images/model/ds7.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Time Aggregation Labels on canvas")),Object(i.b)("div",{style:{textAlign:"justify"}},"In the below Figure, you can see the Period Labels and Time Aggregation Labels as highlighted in the ValQ screen under the Simulate tab.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(o.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"New Tab",src:Object(b.a)("/doc-images/model/ds8.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Time Aggregation Labels on Navigation Panel")),Object(i.b)("h2",{id:"3-data-sorting"},"3. Data Sorting"),Object(i.b)("div",{style:{textAlign:"justify"}},"With the Data Sorting setting you can sort the data by sort field in ascending or descending order and select the Start With field with the required period.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(o.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"New Tab",src:Object(b.a)("/doc-images/model/ds9.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Data Sorting")),Object(i.b)("div",{style:{textAlign:"justify"}},"In the below example, we Choose the sort field as Quarter, sort by Ascending order and Start with Quarter 4 and updated the table.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(o.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"New Tab",src:Object(b.a)("/doc-images/model/ds10.png")}))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Sorted data series")),Object(i.b)("h2",{id:"summary---data-series-tab"},"Summary - Data Series Tab"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Area"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data Series Manager"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Periods"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Period(s) per data series: It indicates the number of values in the series. As an example, the series with Jan, Feb and Mar can be entered as 3 periods.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Period Label(s): The Labels can be given as Jan, Feb, Mar (being separated by commas.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data Series"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"By enabling this property, you will be able to include the Comparison Data Series.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Preview shows all the available Data Series (both Baseline and Comparison) and the Additional Series.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Time Aggregation Labels"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"These labels are used in the navigation panel, nodes and popup screens.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Active period"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This property sets only one period of interest. A Label and a three-letter abbreviation can be provided for this property.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Till Prior Period"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This property sets the Total value from beginning to a specific period. A Label and a three-letter abbreviation can be provided for this property.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"All periods"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This property sets the Total value of all periods in the series. A Label and a three-letter abbreviation can be provided for this property.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Simulation Period"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This property sets a specific set of continuous periods. A Label and a three-letter abbreviation can be provided for this property.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data Sorting"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The data can be sorted using the below filters: ",Object(i.b)("br",null)," 1. Choose Sort Field(s) from the data source ",Object(i.b)("br",null)," 2. Sort By: Ascending/Descending ",Object(i.b)("br",null)," 3. Start with entry from the data source")))))}m.isMDXComponent=!0},187:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(10),b=a(186),l=a(8),o=Object(n.createContext)({collectLink:function(){}}),s=a(185),c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,d,p=e.isNavLink,m=e.to,u=e.href,j=e.activeClassName,O=e.isActive,g=e["data-noBrokenLinkCheck"],h=c(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),y=Object(s.b)().withBaseUrl,v=Object(n.useContext)(o),f=m||u,N=Object(b.a)(f),w=null==f?void 0:f.replace("pathname://",""),T=void 0!==w?function(e){return e.startsWith("/")}(a=w)?y(a):a:void 0,S=Object(n.useRef)(!1),A=p?i.e:i.c,x=l.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!x&&N&&window.docusaurus.prefetch(T),function(){x&&d&&d.disconnect()}}),[T,x,N]);var D=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,L=!T||!N||D;return T&&N&&!D&&!g&&v.collectLink(T),L?r.a.createElement("a",Object.assign({href:T},f&&!N&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(A,Object.assign({},h,{onMouseEnter:function(){S.current||(window.docusaurus.preload(T),S.current=!0)},innerRef:function(e){var t,a;x&&e&&N&&(t=e,a=function(){window.docusaurus.prefetch(T)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:T||""},p&&{isActive:O,activeClassName:j}))}}}]);