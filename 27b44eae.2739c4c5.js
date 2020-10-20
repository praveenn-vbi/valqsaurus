(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{252:function(e,t,o){"use strict";o.r(t);var a=o(1),n=o(9),r=o(0),c=o.n(r),i=o(253),s=o(254),l=o(259),d=o(261),b=(o(118),o(52),o(75),function(e){return c.a.createElement("div",{className:"productTag"},c.a.createElement("header",null,c.a.createElement("h1",null,e.header),c.a.createElement("div",null,c.a.createElement("img",{src:e.image}))))});o.d(t,"frontMatter",(function(){return u})),o.d(t,"metadata",(function(){return m})),o.d(t,"rightToc",(function(){return p})),o.d(t,"default",(function(){return j}));var u={id:"storage-collaboration",sidebar_label:"Save Model to Workspace",title:"Storage and Collaboration",hide_title:!0},m={id:"storage/storage-collaboration",title:"Storage and Collaboration",description:'import useBaseUrl from "@docusaurus/useBaseUrl"; // Add to the top of the file below the front matter.',source:"@site/docs/storage/storage-collaboration.mdx",permalink:"/docs/storage/storage-collaboration",sidebar_label:"Save Model to Workspace",sidebar:"sideBar",previous:{title:"Attribution Analysis",permalink:"/docs/analysis/attribution-analysis"},next:{title:"Comments & Audit Trail",permalink:"/docs/storage/comments_historylog"}},p=[{value:"Upload ValQ model to your Workspace",id:"upload-valq-model-to-your-workspace",children:[{value:"1. Log in to workspace",id:"1-log-in-to-workspace",children:[]},{value:"2. Upload the model to save",id:"2-upload-the-model-to-save",children:[]}]}],g={rightToc:p};function j(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},g,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{header:"Storage and Collaboration",image:Object(s.a)("/doc-images/valq-collaborate.png"),mdxType:"Tag"}),Object(i.b)("div",{style:{textAlign:"justify"}},"ValQ Collaborate houses a group of capabilities for you to upload, save & store, audit, comment, and collaborate on your model. You can also export and/or run further analysis on the baseline, comparison and the simulated data series of the ValQ model."),Object(i.b)("h2",{id:"upload-valq-model-to-your-workspace"},"Upload ValQ model to your Workspace"),Object(i.b)("div",{style:{textAlign:"justify"}},"Uploading the model facilities various collaboration functionalities such as saving the model to a workspace, sharing your model, adding comments, conducting audit trail, sharing scenarios, model merge and exporting the model as a data source to be used for other visuals or further analysis."),Object(i.b)("br",null),Object(i.b)("p",null,"Here are the steps to upload the ValQ model to your workspace"),Object(i.b)("h3",{id:"1-log-in-to-workspace"},"1. Log in to workspace"),Object(i.b)("div",{style:{textAlign:"justify"}},"Log in to your workspace at the top right corner to see the Upload button and your profile icon at the bezel.")," ",Object(i.b)("br",null),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(d.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(s.a)("/doc-images//sc5.1.png")})))," ",Object(i.b)("br",null)," ",Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(d.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(s.a)("/doc-images//sc5.2.png")}))),Object(i.b)("h3",{id:"2-upload-the-model-to-save"},"2. Upload the model to save"),Object(i.b)("p",null,"In the screenshot model, let us assume you delete a node ",Object(i.b)("inlineCode",{parentName:"p"},"Ryan Smith")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(d.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(s.a)("/doc-images//SC5.3.png")})))," ",Object(i.b)("br",null)," ",Object(i.b)("p",null,"Let us also assume you simulate on the node ",Object(i.b)("inlineCode",{parentName:"p"},"Chris Morris")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(d.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(s.a)("/doc-images//sc5.4.png")})))," ",Object(i.b)("br",null)," ",Object(i.b)("div",{style:{textAlign:"justify"}},"You can save these changes at the workspace by clicking Upload at the bezel, naming your model and clicking Upload at the popup window.")," ",Object(i.b)("br",null)," ",Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(d.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(s.a)("/doc-images//sc5.5.png")})))," ",Object(i.b)("br",null)," ",Object(i.b)("p",null,"Your model has been uploaded!"),Object(i.b)("div",{style:{textAlign:"justify"}},Object(i.b)("p",null,"Now you can see additional icons at the bezel such as Save, ",Object(i.b)(l.a,{to:Object(s.a)("docs/storage/comments_historylog#comments"),mdxType:"Link"},"Comments")," and the 3 dots having ",Object(i.b)(l.a,{to:Object(s.a)("docs/storage/export"),mdxType:"Link"},"Export as Datasource"),", ",Object(i.b)(l.a,{to:Object(s.a)("docs/storage/comments_historylog#history-log"),mdxType:"Link"},"History Log")," and Settings options.")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(d.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(s.a)("/doc-images//sc5.6.png")}))))}j.isMDXComponent=!0},259:function(e,t,o){"use strict";var a=o(1),n=o(0),r=o.n(n),c=o(35),i=/^\/(?!\/)/;t.a=function(e){var t,o=e.to,s=e.href,l=o||s,d=i.test(l),b=Object(n.useRef)(!1),u="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(n.useEffect)((function(){return!u&&d&&window.docusaurus.prefetch(l),function(){u&&t&&t.disconnect()}}),[l,u,d]),l&&d?r.a.createElement(c.b,Object(a.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(l),b.current=!0)},innerRef:function(e){var o,a;u&&e&&d&&(o=e,a=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){o===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(o),t.disconnect(),a())}))}))).observe(o))},to:l})):r.a.createElement("a",Object(a.a)({},e,{href:l}))}}}]);