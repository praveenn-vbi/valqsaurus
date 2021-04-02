(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return d}));var o=a(3),n=a(7),r=(a(0),a(185)),i=a(186),c=a(188),s=a(190),l=(a(54),{id:"valq-workspace",title:"ValQ Workspace or Account",sidebar_label:"Workspaces"}),b={unversionedId:"intro/valq-workspace",id:"intro/valq-workspace",isDocsHomePage:!1,title:"ValQ Workspace or Account",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/intro/valq-workspace.mdx",slug:"/intro/valq-workspace",permalink:"/intro/valq-workspace",version:"current",sidebar_label:"Workspaces",sidebar:"sideBar",previous:{title:"Introduction to ValQ",permalink:"/"},next:{title:"How to add ValQ in PowerBI",permalink:"/intro/install"}},p=[{value:"Create a Workspace",id:"create-a-workspace",children:[]},{value:"Next Steps",id:"next-steps",children:[]},{value:"Related Information",id:"related-information",children:[]}],u={rightToc:p};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"A ValQ workspace or account is provisioned when a customer purchases a ValQ collaborate product. The customer can select the number of users to be added to the workspace/account and the plan at the time of purchase."),Object(r.b)("li",{parentName:"ol"},"Only registered users in the workspace will be able to login to the ValQ visual (via Office365 login)."),Object(r.b)("li",{parentName:"ol"},"The collaboration features - storage, commenting, exporting data source, model merge, and user security etc. will be enabled for the users of the workspace."),Object(r.b)("li",{parentName:"ol"},"A ValQ workspace needs to be renewed at the time of license expiry so that the users in the ValQ workspace can continue to use the workspace without any issues.")),Object(r.b)("h2",{id:"create-a-workspace"},"Create a Workspace"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://valq.com/pricing/#collaborate"}),"ValQ Pricing Page")," and click on the plan you wish to buy."),Object(r.b)("div",{class:"center"},Object(r.b)(s.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Collaborate subscriptions page comparison",src:Object(i.a)("/doc-images/storage/pricing-page.png")})),Object(r.b)("p",null,"ValQ Collaborate plan pricing page"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"On the ",Object(r.b)("strong",{parentName:"p"},"Sign Up")," page fill out the required information such as ",Object(r.b)("em",{parentName:"p"},"Product details, Billing details"),", and ",Object(r.b)("em",{parentName:"p"},"Credit Card details"),". Enter a ",Object(r.b)("em",{parentName:"p"},"Workspace Name")," to create a workspace (this is like your unique account on ValQ Public cloud)."),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"The ",Object(r.b)("strong",{parentName:"p"},"Workspace Name")," given here cannot be modified later.")),Object(r.b)("div",null,Object(r.b)(s.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Sign Up for ValQ Collaborate",src:Object(i.a)("/doc-images/storage/signup-page.png")})),Object(r.b)("div",{class:"center"},Object(r.b)("p",null,"ValQ Collaborate sign up page"))))),Object(r.b)("p",null,"A mail is sent to you with a download link for ValQ Collaborate ",Object(r.b)("strong",{parentName:"p"},"Visual (Web Store build)"),"."),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,"Click on the ",Object(r.b)("strong",{parentName:"p"},"Click here")," link in the email and download the ValQ Collaborate visual with the extension ",Object(r.b)("inlineCode",{parentName:"p"},".pbiviz"),".\nImport this ",Object(r.b)("inlineCode",{parentName:"p"},".pbiviz")," file in Power BI Desktop to ",Object(r.b)(c.a,{to:Object(i.a)("intro/install"),mdxType:"Link"},"install the visual"),"."),Object(r.b)("h2",{id:"related-information"},"Related Information"),Object(r.b)("p",null,"Once you create your workspace you become the default Admin. You will receive a link to the Workspace Admin Console in your email."),Object(r.b)("p",null,"As an Admin, you can ",Object(r.b)(c.a,{to:Object(i.a)("storage/admin-console#invite-other-users-to-the-workspace"),mdxType:"Link"},"Invite other users to the Workspace")," for collaboration and ",Object(r.b)(c.a,{to:Object(i.a)("storage/admin-console#assign-roles-to-workspace-users"),mdxType:"Link"},"Assign roles to Workspace users")," [Refer the ",Object(r.b)(c.a,{to:Object(i.a)("storage/admin-console"),mdxType:"Link"},"Administration"),"] section."),Object(r.b)("p",null,"Workspace members can utilize ValQ features as per the pricing plan selected."))}d.isMDXComponent=!0},188:function(e,t,a){"use strict";var o=a(0),n=a.n(o),r=a(10),i=a(187),c=a(8),s=Object(o.createContext)({collectLink:function(){}}),l=a(186),b=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a};t.a=function(e){var t,a,p,u=e.isNavLink,d=e.to,m=e.href,O=e.activeClassName,h=e.isActive,j=e["data-noBrokenLinkCheck"],f=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),k=Object(l.b)().withBaseUrl,g=Object(o.useContext)(s),v=d||m,w=Object(i.a)(v),y=null==v?void 0:v.replace("pathname://",""),N=void 0!==y?function(e){return e.startsWith("/")}(a=y)?k(a):a:void 0,C=Object(o.useRef)(!1),x=u?r.e:r.c,V=c.a.canUseIntersectionObserver;Object(o.useEffect)((function(){return!V&&w&&window.docusaurus.prefetch(N),function(){V&&p&&p.disconnect()}}),[N,V,w]);var Q=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,W=!N||!w||Q;return N&&w&&!Q&&!j&&g.collectLink(N),W?n.a.createElement("a",Object.assign({href:N},v&&!w&&{target:"_blank",rel:"noopener noreferrer"},f)):n.a.createElement(x,Object.assign({},f,{onMouseEnter:function(){C.current||(window.docusaurus.preload(N),C.current=!0)},innerRef:function(e){var t,a;V&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(N)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),a())}))}))).observe(t))},to:N||""},u&&{isActive:h,activeClassName:O}))}}}]);