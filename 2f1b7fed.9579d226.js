(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{150:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return c})),i.d(t,"rightToc",(function(){return b})),i.d(t,"default",(function(){return m}));var a=i(1),n=i(9),r=(i(0),i(250)),o=i(251),s=i(256),u=i(258),l=(i(118),{id:"simulate_overview",title:"Simulate Overview",sidebar_label:"Simulate Overview"}),c={id:"simulation/simulate_overview",title:"Simulate Overview",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/simulation/simulate_overview.mdx",permalink:"/docs/simulation/simulate_overview",sidebar_label:"Simulate Overview",sidebar:"sideBar",previous:{title:"Edit Model",permalink:"/docs/planning/update"},next:{title:"Simulation Canvas",permalink:"/docs/simulation/simulation_canvas"}},b=[{value:"The Simulate Tab",id:"the-simulate-tab",children:[]},{value:"Pre-requisite",id:"pre-requisite",children:[]}],d={rightToc:b};function m(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"the-simulate-tab"},"The Simulate Tab"),Object(r.b)("p",null,"Visualize the model you have built in a tree/table format on ValQ's Simulate tab."),Object(r.b)("p",null,"Highlights of Simulate tab:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Simulate on-the-fly and perform what-if analysis"),Object(r.b)("li",{parentName:"ul"},"Create and compare multiple scenarios"),Object(r.b)("li",{parentName:"ul"},"Assign important nodes as KPIs and key inputs to assess progress"),Object(r.b)("li",{parentName:"ul"},"Evaluate performance against benchmark "),Object(r.b)("li",{parentName:"ul"},"Comment & Collaborate with your team"),Object(r.b)("li",{parentName:"ul"},"Save to Microsoft Azure  ")),Object(r.b)("p",null,"Check out the Simulate tab below "),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)(u.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"New Tab",src:Object(o.a)("/doc-images/simulate_tab/sim_overview.png")})))," ",Object(r.b)("br",null),Object(r.b)("div",{style:{textAlign:"justify"}},"The left side panel is called the Navigation Panel and on the right is the ValQ canvas. The Simulate tab on ValQ has it's own properties and here's the discussion on ",Object(r.b)(s.a,{to:Object(o.a)("docs/planning/plan_overview#whats-the-difference-between-the-plan--simulate-tabs"),mdxType:"Link"}," Plan tab Vs Simulate tab "),"for better understanding."),Object(r.b)("h2",{id:"pre-requisite"},"Pre-requisite"),Object(r.b)("p",null,"A ValQ model is required before you can start using the Simulate tab"))}m.isMDXComponent=!0},256:function(e,t,i){"use strict";var a=i(1),n=i(0),r=i.n(n),o=i(35),s=/^\/(?!\/)/;t.a=function(e){var t,i=e.to,u=e.href,l=i||u,c=s.test(l),b=Object(n.useRef)(!1),d="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(n.useEffect)((function(){return!d&&c&&window.docusaurus.prefetch(l),function(){d&&t&&t.disconnect()}}),[l,d,c]),l&&c?r.a.createElement(o.b,Object(a.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(l),b.current=!0)},innerRef:function(e){var i,a;d&&e&&c&&(i=e,a=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){i===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(i),t.disconnect(),a())}))}))).observe(i))},to:l})):r.a.createElement("a",Object(a.a)({},e,{href:l}))}}}]);