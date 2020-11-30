(window.webpackJsonp=window.webpackJsonp||[]).push([[99,16,39],{164:function(e,a,n){"use strict";n.r(a);var t=n(3),l=n(0),r=n.n(l),i=n(204),c=n.n(i),s=n(208),o=n(195),u=n(22),m=n(193),d=n(165),p=n.n(d),h=[{title:r.a.createElement(r.a.Fragment,null,"Introduction"),link:"/docs/intro/introduction",imageUrl:"https://cdn.valq.com/wp-content/uploads/valq-key-features-visualization.png",description:r.a.createElement(r.a.Fragment,null,"Visualize, Simulate, Plan, Analyze your business like never before")},{title:r.a.createElement(r.a.Fragment,null,"Modeling"),link:"/docs/model/model_overview",imageUrl:"https://cdn.valq.com/wp-content/uploads/valq-key-features-modeling.png",description:r.a.createElement(r.a.Fragment,null,"Model your business by capturing 1000+ business variables across various functions in ValQ")},{title:r.a.createElement(r.a.Fragment,null,"Planning"),link:"/docs/planning/plan_overview",imageUrl:"https://cdn.valq.com/wp-content/uploads/valq-key-features-planning.png",description:r.a.createElement(r.a.Fragment,null,"Plan, budget and forecast your business operations efficiently and optimize your goals")},{title:r.a.createElement(r.a.Fragment,null,"Time Series Forecasting"),link:"/docs/planning/time_series",imageUrl:"https://cdn.valq.com/wp-content/uploads/valq-key-features-advanced-analytics.png",description:r.a.createElement(r.a.Fragment,null,"Perform Time Series Forecasting to make forecast and predict future outcomes")},{title:r.a.createElement(r.a.Fragment,null,"Simulation"),link:"/docs/simulation/simulate_overview",imageUrl:"https://cdn.valq.com/wp-content/uploads/valq-key-features-simulation.png",description:r.a.createElement(r.a.Fragment,null,"Perform what-if analysis, run on-the-fly simulations and compare multiple business scenarios with ValQ")},{title:r.a.createElement(r.a.Fragment,null,"Advanced Analysis"),link:"/docs/analysis/analyze_overview",imageUrl:"https://cdn.valq.com/wp-content/uploads/variance-analysis.png",description:r.a.createElement(r.a.Fragment,null,"Run in-depth and nimble Variance Analysis with minimal clicks")}];function g(e){var a=e.imageUrl,n=e.title,t=e.description,l=e.link,i=Object(m.a)(a),s=Object(m.a)(l);return r.a.createElement(o.a,{className:c()("col col--4",p.a.feature),to:s},i&&r.a.createElement("div",{className:"text--center"},r.a.createElement("img",{className:p.a.featureImage,src:i,alt:n})),r.a.createElement("h3",null,n),r.a.createElement("p",null,t))}a.default=function(){var e=Object(u.default)().siteConfig,a=void 0===e?{}:e;return r.a.createElement(s.a,{title:a.title+" - Modern Digital Planning",description:"ValQ - Modern Digital Planning"},r.a.createElement("header",{className:c()("hero hero--primary",p.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},a.title),r.a.createElement("p",{className:"hero__subtitle"},a.tagline),r.a.createElement("div",{className:p.a.buttons},r.a.createElement(o.a,{className:c()("button button--outline button--secondary button--lg",p.a.getStarted),to:Object(m.a)("docs/intro/introduction")},"Get Started")))),r.a.createElement("main",null,h&&h.length&&r.a.createElement("section",{className:p.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},h.map((function(e,a){return r.a.createElement(g,Object(t.a)({key:a},e))})))))))}},209:function(e,a,n){"use strict";var t=n(0),l=n.n(t),r=n(204),i=n.n(r),c=n(201),s=n(22),o=!1;a.a=function(e){var a=Object(t.useRef)(!1),r=Object(t.useRef)(null),u=Object(c.useHistory)(),m=Object(s.default)().siteConfig,d=(void 0===m?{}:m).baseUrl,p=function(){a.current||(new window.DocSearch({searchData:window.searchData,inputSelector:"#search_input_react",handleSelected:function(e,a,n){var t=d+n.url;document.createElement("a").href=t,u.push(t)}}),a.current=!0)},h=function(){o?p():Promise.all([fetch(d+"search-data.json").then((function(e){return e.json()})),Promise.all([n.e(125),n.e(130)]).then(n.bind(null,213)),n.e(90).then(n.t.bind(null,212,7))]).then((function(e){var a=e[0],n=e[1].default;o=!0,window.searchData=a,window.DocSearch=n,p()}))},g=Object(t.useCallback)((function(a){r.current.contains(a.target)||r.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return l.a.createElement("div",{className:"navbar__search",key:"search-box"},l.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:i()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:g,onKeyDown:g,tabIndex:0}),l.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:i()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:h,onMouseOver:h,onFocus:g,onBlur:g,ref:r}))}}}]);