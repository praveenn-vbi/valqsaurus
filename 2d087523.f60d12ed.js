(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{187:function(e,t,a){"use strict";var o=a(0),i=a.n(o),n=a(10),r=a(186),s=a(8),c=Object(o.createContext)({collectLink:function(){}}),l=a(185),b=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(a[o[i]]=e[o[i]])}return a};t.a=function(e){var t,a,d,h=e.isNavLink,g=e.to,u=e.href,p=e.activeClassName,m=e.isActive,j=e["data-noBrokenLinkCheck"],O=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),f=Object(l.b)().withBaseUrl,v=Object(o.useContext)(c),w=g||u,y=Object(r.a)(w),M=null==w?void 0:w.replace("pathname://",""),x=void 0!==M?function(e){return e.startsWith("/")}(a=M)?f(a):a:void 0,T=Object(o.useRef)(!1),F=h?n.e:n.c,A=s.a.canUseIntersectionObserver;Object(o.useEffect)((function(){return!A&&y&&window.docusaurus.prefetch(x),function(){A&&d&&d.disconnect()}}),[x,A,y]);var N=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,D=!x||!y||N;return x&&y&&!N&&!j&&v.collectLink(x),D?i.a.createElement("a",Object.assign({href:x},w&&!y&&{target:"_blank",rel:"noopener noreferrer"},O)):i.a.createElement(F,Object.assign({},O,{onMouseEnter:function(){T.current||(window.docusaurus.preload(x),T.current=!0)},innerRef:function(e){var t,a;A&&e&&y&&(t=e,a=function(){window.docusaurus.prefetch(x)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:x||""},h&&{isActive:m,activeClassName:p}))}},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return h}));var o=a(3),i=a(7),n=(a(0),a(184)),r=a(185),s=(a(187),a(189)),c=(a(54),{id:"time_series",title:"Time Series Forecasting"}),l={unversionedId:"planning/time_series",id:"planning/time_series",isDocsHomePage:!1,title:"Time Series Forecasting",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/planning/time_series.mdx",slug:"/planning/time_series",permalink:"/planning/time_series",version:"current",sidebar:"sideBar",previous:{title:"Plan Features",permalink:"/planning/plan_features"},next:{title:"Sample Business Cases",permalink:"/planning/business_cases"}},b=[{value:"Forecast options",id:"forecast-options",children:[]},{value:"Advanced options",id:"advanced-options",children:[]},{value:"1. Auto Forecast",id:"1-auto-forecast",children:[{value:"Example 1: Auto Forecast with No Growth",id:"example-1-auto-forecast-with-no-growth",children:[]},{value:"Example 2: Auto Forecast with Growth Component",id:"example-2-auto-forecast-with-growth-component",children:[]}]},{value:"2. Linear Trend",id:"2-linear-trend",children:[{value:"Example 3: Linear Trend Forecast with Growth Component and Distribution Method as Match",id:"example-3-linear-trend-forecast-with-growth-component-and-distribution-method-as-match",children:[]},{value:"Example 4: Linear Trend Forecast with Growth Component and Distribution Method as M2M",id:"example-4-linear-trend-forecast-with-growth-component-and-distribution-method-as-m2m",children:[]}]},{value:"3. Moving Average",id:"3-moving-average",children:[{value:"Example 5: Moving Average Forecast without Growth Component and Distribution Method as M2M",id:"example-5-moving-average-forecast-without-growth-component-and-distribution-method-as-m2m",children:[]}]},{value:"4. Weighted Moving Average",id:"4-weighted-moving-average",children:[{value:"Example 6: Weighted Moving Average Forecast without Growth Component and Distribution Method as M2M",id:"example-6-weighted-moving-average-forecast-without-growth-component-and-distribution-method-as-m2m",children:[]}]}],d={rightToc:b};function h(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("div",{style:{textAlign:"justify"}},'ValQ has in-built Time Series Forecasting capabilities that allow you to make a forecast based on past data collected over a while. To access this powerful feature, all you have to do is click on the "Auto Forecast" button as shown below.')," ",Object(n.b)("br",null),Object(n.b)("div",{class:"center"},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/plan11.png")}))),Object(n.b)("h2",{id:"forecast-options"},"Forecast options"),Object(n.b)("div",{style:{textAlign:"justify"}},"Clicking on Auto Forecast will give you the options to configure time series forecasting that make predictions designed to suit your needs.")," ",Object(n.b)("br",null),Object(n.b)("div",{class:"center"},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf1.png")})))," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"},className:"table-center"},Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(o.a)({parentName:"tr"},{align:null})),Object(n.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Options"),Object(n.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"1"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Target Node"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Node for which forecast is done")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"2"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Target Period"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Period for which forecast is done")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"3"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Forecast Basis"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Criteria based on which forecast is performed")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"4"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Past Data Series & Weights"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Choose the past data series here and its weights are given in descending order")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"5"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Source Periods"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Choose the duration of past data considered for the forecast")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"6"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Add Growth"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Growth component can be added here on absolute or percentage terms"))))),Object(n.b)("h2",{id:"advanced-options"},"Advanced options"),Object(n.b)("div",{style:{textAlign:"justify"}},"Advanced options lets you choose the Forecasting Method, Distribution Method after configuring the Target and Forecast Basis options.")," ",Object(n.b)("br",null),Object(n.b)("div",{class:"center"},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf2.png")})))," ",Object(n.b)("br",null),Object(n.b)("p",null,"Following are the 4 ",Object(n.b)("em",{parentName:"p"},"Forecasting Methods")," available:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"#1-auto-forecast"}),"Auto Forecast")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"#2-linear-trend"}),"Linear Trend")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"#3-moving-average"}),"Moving Average")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"#4-weighted-moving-average"}),"Weighted Moving Average"))),Object(n.b)("h2",{id:"1-auto-forecast"},"1. Auto Forecast"),Object(n.b)("div",{style:{textAlign:"justify"}},"Auto Forecast option automatically predicts Target Node for the Target Period based on Past Data Series & Weights and Source Periods. Growth can be added as an absolute value or percentage growth when needed. This option does not need the Distribution Method as ValQ performs time series forecasting automatically.")," ",Object(n.b)("br",null),Object(n.b)("p",null,"Let's understand how ValQ performs time series forecasting with examples to predict 2020 results."),Object(n.b)("h3",{id:"example-1-auto-forecast-with-no-growth"},"Example 1: Auto Forecast with No Growth"),Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},Object(n.b)("h4",{id:"configuration-for-forecasting"},"Configuration for Forecasting"),Object(n.b)("p",null,"In the below example, forecasting is done for node 'Overall Result' for the year 2020 based on 2019 actuals data with weight as 1\nand growth not incorporated.")),Object(n.b)("div",{class:"center"},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf3.1.png")})))," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},Object(n.b)("h4",{id:"preview-of-forecast-results"},"Preview of Forecast Results"),Object(n.b)("p",null,"The below Figure shows the results of Auto Forecasting as per the above configuration with three choices of forecast i.e.\nOptimized, Balanced and Conservative. Notice that the Net Growth of Conservative is 0.00% as we didn't add growth in the Forecast\nBasis option.")),Object(n.b)("div",{class:"center"},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf3.2.png")}))),Object(n.b)("h3",{id:"example-2-auto-forecast-with-growth-component"},"Example 2: Auto Forecast with Growth Component"),Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},Object(n.b)("h4",{id:"configuration-for-forecasting-1"},"Configuration for Forecasting"),Object(n.b)("p",null,"Here's another example where forecasting is done for node 'Overall Result' for the year 2020 based on 2019 and 2018 actuals with\nweight as 2 and 1 respectively and 10% growth. Auto Forecast is the Forecast Method applied in this example.")),Object(n.b)("div",{class:"center"},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf4.1.png")})))," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},Object(n.b)("h4",{id:"preview-of-forecast-results-1"},"Preview of Forecast Results"),Object(n.b)("p",null,"The below Figure shows the results of Auto Forecasting as per the above configuration with three choices of forecast i.e.\nOptimized, Balanced and Conservative. Notice that the Net Growth of Conservative is 10% as we have added a 10% growth in\nthe Forecast Basis option.")),Object(n.b)("div",{class:"center"},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf4.2.png")}))),Object(n.b)("h2",{id:"2-linear-trend"},"2. Linear Trend"),Object(n.b)("div",{style:{textAlign:"justify"}},"Linear Trend method applies Linear Regression to predicts Target Node for the Target Period based on Past Data Series & Weights and Source Periods. Growth can be added as an absolute value or percentage growth when needed and the Distribution Method can be selected as Match or M2M(+1)."),Object(n.b)("h3",{id:"example-3-linear-trend-forecast-with-growth-component-and-distribution-method-as-match"},"Example 3: Linear Trend Forecast with Growth Component and Distribution Method as Match"),Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},Object(n.b)("h4",{id:"configuration-for-forecasting-2"},"Configuration for Forecasting"),Object(n.b)("p",null,"In this example forecasting is done for node 'Overall Result' for the year 2020 based on 2019 and 2018 full year actuals with\nweight as 2 and 1 respectively and 10% growth. The Forecast Method applied in this example is the Linear Trend with 'Match' as the Distribution Method.")),Object(n.b)("div",{class:"center"},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf8.1.png")})))," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},Object(n.b)("h4",{id:"preview-of-forecast-results-2"},"Preview of Forecast Results"),Object(n.b)("p",null,"The below Figure shows the results of forecasting done based on the above configuration. The total for 2020\nis predicted by applying the Linear Trend method and Match distributes the total to its periods based on the distribution of only\nrecent Past Series Data selected with weight in Forecast Basis, here 2019 actuals with weight as 2.")),Object(n.b)("div",{class:"center"},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf8.2.png")}))),Object(n.b)("h3",{id:"example-4-linear-trend-forecast-with-growth-component-and-distribution-method-as-m2m"},"Example 4: Linear Trend Forecast with Growth Component and Distribution Method as M2M"),Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},Object(n.b)("h4",{id:"configuration-for-forecasting-3"},"Configuration for Forecasting"),Object(n.b)("p",null,"Here's another example where forecasting is done for node 'Overall Result' for the year 2020 based on 2019 and 2018 full year\nactuals with weight as 2 and 1 respectively and 10% growth. The Forecast Method applied in this example is the Linear Trend with 'M2M' as the\nDistribution Method.")),Object(n.b)("div",{class:"center"},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf7.1.png")})))," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},Object(n.b)("h4",{id:"preview-of-forecast-results-3"},"Preview of Forecast Results"),Object(n.b)("p",null,"The below Figure shows the results of forecasting done based on the above configuration. The total for 2020\nis predicted by applying the Linear Trend method and M2M distributes the total to its periods based on the distribution of\nall Past Series Data selected with weights in Forecast Basis.")),Object(n.b)("div",{class:"center"},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf7.2.png")})))," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},"Note that the distribution of 2020 period values is the only difference between the above two examples because of the change in the Distribution Method."),Object(n.b)("h2",{id:"3-moving-average"},"3. Moving Average"),Object(n.b)("div",{style:{textAlign:"justify"}},"Moving Average method computes forecast results of Target Node for the Target Period based on Past Data Series & Weights and Source Periods. This method predicts by calculating the Moving Average of Past Data Series period values. Growth can be added as an absolute value or percentage growth when needed and the Distribution Method can be selected as Match or M2M(+1)."),Object(n.b)("h3",{id:"example-5-moving-average-forecast-without-growth-component-and-distribution-method-as-m2m"},"Example 5: Moving Average Forecast without Growth Component and Distribution Method as M2M"),Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},Object(n.b)("h4",{id:"configuration-for-forecasting-4"},"Configuration for Forecasting"),Object(n.b)("p",null,"In this example forecasting is done for node 'Overall Result' for the year 2020 based on Jul - Dec period values of 2019 and\n2018 actuals with weight as 1 for both and no growth. The Forecast Method applied in this example is the Moving Average with M2M\nas the Distribution Method.")),Object(n.b)("div",{class:"center"},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf5.1.png")})))," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},Object(n.b)("h4",{id:"preview-of-forecast-results-4"},"Preview of Forecast Results"),Object(n.b)("p",null,"The below Figure shows the results of forecasting done based on the above configuration. The total for 2020\nis predicted by applying the Moving Average method and M2M distributes the total to its periods based on the distribution of\nall Past Series Data selected with weights in Forecast Basis.")),Object(n.b)("div",{class:"center"},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf5.2.png")}))),Object(n.b)("h2",{id:"4-weighted-moving-average"},"4. Weighted Moving Average"),Object(n.b)("div",{style:{textAlign:"justify"}},"Weighted Moving Average method computes forecast results of Target Node for the Target Period based on Past Data Series & Weights and Source Periods. This method predicts by calculating the Weighted Moving Average of Past Data Series period values with weights applied to it. Growth can be added as an absolute value or percentage growth when needed and the Distribution Method can be selected as Match or M2M(+1)."),Object(n.b)("h3",{id:"example-6-weighted-moving-average-forecast-without-growth-component-and-distribution-method-as-m2m"},"Example 6: Weighted Moving Average Forecast without Growth Component and Distribution Method as M2M"),Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},Object(n.b)("h4",{id:"configuration-for-forecasting-5"},"Configuration for Forecasting"),Object(n.b)("p",null,"In this example forecasting is done for node 'Overall Result' for the year 2020 based on Jul - Dec period values of 2019 and\n2018 actuals with weight as 2 for Oct-Dec and 1 for Jul-Sep and no growth. The Forecast Method applied in this example is the Weighted Moving Average\nwith M2M as the Distribution Method.")),Object(n.b)("div",{class:"center"},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf6.1.png")})))," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},Object(n.b)("h4",{id:"preview-of-forecast-results-5"},"Preview of Forecast Results"),Object(n.b)("p",null,"The below Figure shows the results of forecasting done based on the above configuration. The total for 2020\nis predicted by applying the Weighted Moving Average method and M2M distributes the total to its periods based on the distribution of\nall Past Series Data selected with weights in Forecast Basis.")),Object(n.b)("div",{class:"center"},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf6.2.png")})))," ",Object(n.b)("br",null))}h.isMDXComponent=!0}}]);