(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{207:function(e,t,i){"use strict";var n=i(0),r=i.n(n),s=i(10),a=i(206),o=i(11),l=Object(n.createContext)({collectLink:function(){}}),p=i(205),c=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i};t.a=function(e){var t,i,d,b=e.isNavLink,u=e.to,m=e.href,f=e.activeClassName,h=e.isActive,O=e["data-noBrokenLinkCheck"],y=c(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),j=Object(p.b)().withBaseUrl,g=Object(n.useContext)(l),N=u||m,T=Object(a.a)(N),v=null==N?void 0:N.replace("pathname://",""),w=void 0!==v?function(e){return e.startsWith("/")}(i=v)?j(i):i:void 0,k=Object(n.useRef)(!1),x=b?s.e:s.c,$=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!$&&T&&window.docusaurus.prefetch(w),function(){$&&d&&d.disconnect()}}),[w,$,T]);var V=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,W=!w||!T||V;return w&&T&&!V&&!O&&g.collectLink(w),W?r.a.createElement("a",Object.assign({href:w},N&&!T&&{target:"_blank",rel:"noopener noreferrer"},y)):r.a.createElement(x,Object.assign({},y,{onMouseEnter:function(){k.current||(window.docusaurus.preload(w),k.current=!0)},innerRef:function(e){var t,i;$&&e&&T&&(t=e,i=function(){window.docusaurus.prefetch(w)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),i())}))}))).observe(t))},to:w||""},b&&{isActive:h,activeClassName:f}))}},76:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return p})),i.d(t,"metadata",(function(){return c})),i.d(t,"rightToc",(function(){return d})),i.d(t,"default",(function(){return u}));var n=i(3),r=i(7),s=(i(0),i(204)),a=i(205),o=i(207),l=i(209),p=(i(53),{id:"general",title:"General",sidebar_label:"General"}),c={unversionedId:"model/general",id:"model/general",isDocsHomePage:!1,title:"General",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/model/general.mdx",slug:"/model/general",permalink:"/docs/model/general",version:"current",sidebar_label:"General",sidebar:"sideBar",previous:{title:"Settings",permalink:"/docs/model/settings"},next:{title:"Plan Overview",permalink:"/docs/planning/plan_overview"}},d=[{value:"1. Export",id:"1-export",children:[]},{value:"2. License Registration",id:"2-license-registration",children:[]},{value:"3. Writeback",id:"3-writeback",children:[{value:"Configure Writeback in ValQ",id:"configure-writeback-in-valq",children:[]},{value:"ValQ Writeback Schema",id:"valq-writeback-schema",children:[]},{value:"Writeback History",id:"writeback-history",children:[]}]},{value:"Summary - General Tab",id:"summary---general-tab",children:[]}],b={rightToc:d};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Model > General")," tab allows you to configure the following settings:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#1-export"}),"Export")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#2-license-registration"}),"License Registration")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#3-writeback"}),"Writeback"))),Object(s.b)("h2",{id:"1-export"},"1. Export"),Object(s.b)("div",{style:{textAlign:"justify"}},"Using the Export option, you will be able to export the ValQ model as an encoded text. There is also an option to include the navigation panel settings in the Export File.")," ",Object(s.b)("br",null),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)(l.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Export ValQ configurations as file",src:Object(a.a)("/doc-images/model/gen1.png")}))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Export ValQ configurations as a file")),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)(l.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Export configuration and settings",src:Object(a.a)("/doc-images/model/gen4.png")}))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Export configuration")),Object(s.b)("div",{style:{textAlign:"justify"}},"Download the ValQ model as text file to save it to your local system and this exported file can be shared with other users. The steps to import from an Export file is covered"," ",Object(s.b)(o.a,{to:Object(a.a)("/docs/model/new#4-import-an-advanced-model"),mdxType:"Link"},"here"),"."),Object(s.b)("h2",{id:"2-license-registration"},"2. License Registration"),Object(s.b)("p",null,"Enter the license key in the text box to get the latest ValQ features."),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)(l.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"License Registration",src:Object(a.a)("/doc-images/model/gen2.png")}))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"License Registration")),Object(s.b)("h2",{id:"3-writeback"},"3. Writeback"),Object(s.b)("p",null,"ValQ visual provides the ability to write scenarios, planning series along with the simulation details to an URL which can collect the response and write it to a database, data warehouse, etc.\nThis enables planners to integrate ValQ's planning and what-if simulations with their business workflows."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Format"),"- ValQ sends the data in a JSON format to the URL which can be processed easily."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Configurable")," - User can choose to export the entire model, or just the KPIs and simulated affected Nodes.")),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)(l.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Writeback Architecture",src:Object(a.a)("/doc-images/model/writeback/writeback-architecture.png")}))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Writeback architecture")),Object(s.b)("h3",{id:"configure-writeback-in-valq"},"Configure Writeback in ValQ"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"The Writeback settings are available under the ",Object(s.b)("strong",{parentName:"li"},"Model > General > Writeback")," section.")),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)(l.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"ValQ logo",src:Object(a.a)("/doc-images/model/writeback/writeback-settings.png")}))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Writeback settings - exporting simulation affected nodes only")),Object(s.b)("p",null,"The following table lists out the fields:"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Field"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"URL"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"URL of the backend data source to which ValQ will post the data")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Button Label"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Label message displayed in the Writeback section")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Button Text"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Text message displayed on the Writeback button")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exporting Nodes"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Select the nodes to be exported. Following are the options available: ",Object(s.b)("ul",null,Object(s.b)("li",null,"All Nodes"),Object(s.b)("li",null,"Only KPI and Key Inputs nodes"),Object(s.b)("li",null,"Only simulation affected nodes")))))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Writeback Properties")),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},"This Writeback feature will now be available in the ",Object(s.b)("strong",{parentName:"li"},"Simulate > Navigation Panel")," section on the runtime.")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Note: The option is only enabled once the Writeback settings are configured in the Model section.")),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)(l.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Writeback feature accessible from the Nav Panel",width:"50%",src:Object(a.a)("/doc-images/model/writeback/navpanel_writeback_icon.png")}))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Writeback feature accessible from the Navigation Panel")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Click the ",Object(s.b)("strong",{parentName:"li"},"Writeback")," button")),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)(l.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Writeback button",src:Object(a.a)("/doc-images/model/writeback/series_scenario_select.png")}))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Selected series/scenarios to post")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Select the ",Object(s.b)("em",{parentName:"li"},"Series")," and ",Object(s.b)("em",{parentName:"li"},"Scenarios")," that you want to export to the URL and submit.")),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)(l.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"writeback-posted-success",src:Object(a.a)("/doc-images/model/writeback/writeback-posted-success.png")}))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Writeback posted successfully")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Success: Your modeled scenarios and series have been successfully posted to the external URL.")),Object(s.b)("h3",{id:"valq-writeback-schema"},"ValQ Writeback Schema"),Object(s.b)("p",null,"Writeback posts JSON to the writeback URL in a specific export schema."),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)(l.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"writeback JSON object format to be sent to URL",src:Object(a.a)("/doc-images/model/writeback/writeback-format.png")}))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Writeback JSON object HTTP post request format")),Object(s.b)("p",null,"This export format includes a JSON object with the following details:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Result")," array includes the ",Object(s.b)("em",{parentName:"li"},"Scenarios/Series")," fields and the respective ",Object(s.b)("em",{parentName:"li"},"Comments History")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Simulated Nodes")," array includes fields details related to the change in values of the ",Object(s.b)("em",{parentName:"li"},"Simulated Nodes")),Object(s.b)("li",{parentName:"ul"},"Logged in ",Object(s.b)("strong",{parentName:"li"},"ValQ User details"))),Object(s.b)("details",null,Object(s.b)("summary",null,'Click to copy the "',Object(s.b)("i",null,"jsonSchema"),'" code and collapse afterwards.'),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$schema": "http://json-schema.org/draft-07/schema",\n  "$id": "http://example.com/example.json",\n  "type": "object",\n  "title": "The Writeback Schema",\n  "description": "The Schema for writeback series and scenarios from the ValQ application",\n  "default": {},\n  "required": [],\n  "properties": {\n    "version": {\n      "$id": "#/properties/version",\n      "type": "string",\n      "description": "The string will have the current version of the writeback",\n      "title": "The version of the Writeback",\n      "default": ""\n    },\n    "code": {\n      "$id": "#/properties/code",\n      "type": "integer",\n      "description": "The integer will have the HTTP status code to denote success or failure of writeback",\n      "title": "The HTTP status code",\n      "default": 0\n    },\n    "result": {\n      "$id": "#/properties/result",\n      "type": "array",\n      "title": "The Writeback result",\n      "description": "The results containing the writeback data of the series and scenarios",\n      "default": [],\n      "additionalItems": true,\n      "items": {\n        "$id": "#/properties/result/items",\n        "anyOf": [\n          {\n            "$id": "#/properties/result/items/anyOf/0",\n            "type": "object",\n            "title": "The scenario data",\n            "description": "The schema for the scenario data",\n            "default": {},\n            "required": [],\n            "properties": {\n              "id": {\n                "$id": "#/properties/result/items/anyOf/0/properties/id",\n                "type": "string",\n                "title": "The scenario id",\n                "description": "The unique id of the scenario",\n                "default": ""\n              },\n              "title": {\n                "$id": "#/properties/result/items/anyOf/0/properties/title",\n                "type": "string",\n                "title": "The scenario title",\n                "description": "The string title of the scenario",\n                "default": ""\n              },\n              "resultNodes": {\n                "$id": "#/properties/result/items/anyOf/0/properties/resultNodes",\n                "type": "array",\n                "title": "The result nodes of scenario",\n                "description": "All the result nodes of the scenarios",\n                "default": [],\n                "additionalItems": true,\n                "items": {\n                  "$id": "#/properties/result/items/anyOf/0/properties/resultNodes/items",\n                  "anyOf": [\n                    {\n                      "$id": "#/properties/result/items/anyOf/0/properties/resultNodes/items/anyOf/1",\n                      "type": "object",\n                      "title": "The scenario data",\n                      "description": "The data of the scenario",\n                      "default": {},\n                      "required": [],\n                      "properties": {\n                        "id": {\n                          "$id": "#/properties/result/items/anyOf/0/properties/resultNodes/items/anyOf/1/properties/id",\n                          "type": "string",\n                          "title": "The node id",\n                          "description": "The unique id of the node",\n                          "default": ""\n                        },\n                        "title": {\n                          "$id": "#/properties/result/items/anyOf/0/properties/resultNodes/items/anyOf/1/properties/title",\n                          "type": "string",\n                          "title": "The node title",\n                          "description": "The name of the node",\n                          "default": ""\n                        },\n                        "periodValues": {\n                          "$id": "#/properties/result/items/anyOf/0/properties/resultNodes/items/anyOf/1/properties/periodValues",\n                          "type": "array",\n                          "title": "The values of period",\n                          "description": "The values for each periods",\n                          "default": [],\n                          "additionalItems": true,\n                          "items": {\n                            "$id": "#/properties/result/items/anyOf/0/properties/resultNodes/items/anyOf/1/properties/periodValues/items",\n                            "anyOf": [\n                              {\n                                "$id": "#/properties/result/items/anyOf/0/properties/resultNodes/items/anyOf/1/properties/periodValues/items/anyOf/0",\n                                "type": "object",\n                                "title": "The period value",\n                                "description": "The data of a period value",\n                                "default": {},\n                                "required": [],\n                                "properties": {\n                                  "id": {\n                                    "$id": "#/properties/result/items/anyOf/0/properties/resultNodes/items/anyOf/1/properties/periodValues/items/anyOf/0/properties/id",\n                                    "type": "string",\n                                    "title": "The period id",\n                                    "description": "The id of the current period",\n                                    "default": ""\n                                  },\n                                  "label": {\n                                    "$id": "#/properties/result/items/anyOf/0/properties/resultNodes/items/anyOf/1/properties/periodValues/items/anyOf/0/properties/label",\n                                    "type": "string",\n                                    "title": "The period label",\n                                    "description": "The label of the current period",\n                                    "default": ""\n                                  },\n                                  "value": {\n                                    "$id": "#/properties/result/items/anyOf/0/properties/resultNodes/items/anyOf/1/properties/periodValues/items/anyOf/0/properties/value",\n                                    "type": "number",\n                                    "title": "The period value",\n                                    "description": "The period value of the current scenario",\n                                    "default": 0.0\n                                  },\n                                  "variance": {\n                                    "$id": "#/properties/result/items/anyOf/0/properties/resultNodes/items/anyOf/1/properties/periodValues/items/anyOf/0/properties/variance",\n                                    "type": "number",\n                                    "title": "The variance value",\n                                    "description": "The variance value of the current scenario",\n                                    "default": 0.0\n                                  }\n                                },\n                                "additionalProperties": true\n                              }\n                            ]\n                          }\n                        },\n                        "comments": {\n                          "$id": "#/properties/result/items/anyOf/0/properties/resultNodes/items/anyOf/1/properties/comments",\n                          "type": "array",\n                          "title": "The comments of the scenario",\n                          "description": "This schema holds the comments of a specific scenario",\n                          "default": [],\n                          "additionalItems": true,\n                          "items": {\n                            "$id": "#/properties/result/items/anyOf/0/properties/resultNodes/items/anyOf/1/properties/comments/items",\n                            "anyOf": [\n                              {\n                                "$id": "#/properties/result/items/anyOf/0/properties/resultNodes/items/anyOf/1/properties/comments/items/anyOf/0",\n                                "type": "object",\n                                "title": "The scenario comment",\n                                "description": "The individual scenario comment",\n                                "default": {},\n                                "required": [],\n                                "properties": {\n                                  "comment": {\n                                    "$id": "#/properties/result/items/anyOf/0/properties/resultNodes/items/anyOf/1/properties/comments/items/anyOf/0/properties/comment",\n                                    "type": "string",\n                                    "title": "The comment",\n                                    "description": "The comment string of the scenario",\n                                    "default": ""\n                                  },\n                                  "createdAt": {\n                                    "$id": "#/properties/result/items/anyOf/0/properties/resultNodes/items/anyOf/1/properties/comments/items/anyOf/0/properties/createdAt",\n                                    "type": "integer",\n                                    "title": "The createdAt",\n                                    "description": "The time when the comment was created",\n                                    "default": 0\n                                  },\n                                  "createdBy": {\n                                    "$id": "#/properties/result/items/anyOf/0/properties/resultNodes/items/anyOf/1/properties/comments/items/anyOf/0/properties/createdBy",\n                                    "type": "string",\n                                    "title": "The createdBy",\n                                    "description": "The user who created the comment",\n                                    "default": ""\n                                  }\n                                },\n                                "additionalProperties": true\n                              }\n                            ]\n                          }\n                        }\n                      },\n                      "additionalProperties": true\n                    }\n                  ]\n                }\n              },\n              "type": {\n                "$id": "#/properties/result/items/anyOf/0/properties/type",\n                "type": "string",\n                "title": "The type of Data",\n                "description": "To Specify whether the current instance is a scenario or series",\n                "default": ""\n              },\n              "description": {\n                "$id": "#/properties/result/items/anyOf/0/properties/description",\n                "type": "string",\n                "title": "The scenario description",\n                "description": "The string description of the scenario",\n                "default": ""\n              },\n              "simulatedNodes": {\n                "$id": "#/properties/result/items/anyOf/0/properties/simulatedNodes",\n                "type": "array",\n                "title": "The simulated Nodes",\n                "description": "Contains the simulation details of the scenario",\n                "default": [],\n                "additionalItems": true,\n                "items": {\n                  "$id": "#/properties/result/items/anyOf/0/properties/simulatedNodes/items"\n                }\n              }\n            },\n            "additionalProperties": true\n          },\n          {\n            "$id": "#/properties/result/items/anyOf/1",\n            "type": "object",\n            "title": "The primary series data",\n            "description": "The schema for the primary series data",\n            "default": {},\n            "required": [],\n            "properties": {\n              "id": {\n                "$id": "#/properties/result/items/anyOf/1/properties/id",\n                "type": "string",\n                "title": "The series id",\n                "description": "The unique id of the series",\n                "default": ""\n              },\n              "title": {\n                "$id": "#/properties/result/items/anyOf/1/properties/title",\n                "type": "string",\n                "title": "The series title",\n                "description": "The string title of the series",\n                "default": ""\n              },\n              "resultNodes": {\n                "$id": "#/properties/result/items/anyOf/1/properties/resultNodes",\n                "type": "array",\n                "title": "The result nodes of primary series",\n                "description": "All the result nodes of the primary series",\n                "default": [],\n                "additionalItems": true,\n                "items": {\n                  "$id": "#/properties/result/items/anyOf/1/properties/resultNodes/items",\n                  "anyOf": [\n                    {\n                      "$id": "#/properties/result/items/anyOf/1/properties/resultNodes/items/anyOf/0",\n                      "type": "object",\n                      "title": "The primary series data",\n                      "description": "The schema for the primary series data",\n                      "default": {},\n                      "required": [],\n                      "properties": {\n                        "id": {\n                          "$id": "#/properties/result/items/anyOf/1/properties/resultNodes/items/anyOf/0/properties/id",\n                          "type": "string",\n                          "title": "The period id",\n                          "description": "The id of the current period",\n                          "default": ""\n                        },\n                        "title": {\n                          "$id": "#/properties/result/items/anyOf/1/properties/resultNodes/items/anyOf/0/properties/title",\n                          "type": "string",\n                          "title": "The series title",\n                          "description": "The string title of the series",\n                          "default": ""\n                        },\n                        "periodValues": {\n                          "$id": "#/properties/result/items/anyOf/1/properties/resultNodes/items/anyOf/0/properties/periodValues",\n                          "type": "array",\n                          "title": "The values of period",\n                          "description": "The values for each periods",\n                          "default": [],\n                          "additionalItems": true,\n                          "items": {\n                            "$id": "#/properties/result/items/anyOf/1/properties/resultNodes/items/anyOf/0/properties/periodValues/items",\n                            "anyOf": [\n                              {\n                                "$id": "#/properties/result/items/anyOf/1/properties/resultNodes/items/anyOf/0/properties/periodValues/items/anyOf/0",\n                                "type": "object",\n                                "title": "The period value",\n                                "description": "The data of a period value",\n                                "default": {},\n                                "required": [],\n                                "properties": {\n                                  "id": {\n                                    "$id": "#/properties/result/items/anyOf/1/properties/resultNodes/items/anyOf/0/properties/periodValues/items/anyOf/0/properties/id",\n                                    "type": "string",\n                                    "title": "The period id",\n                                    "description": "The id of the current period",\n                                    "default": ""\n                                  },\n                                  "label": {\n                                    "$id": "#/properties/result/items/anyOf/1/properties/resultNodes/items/anyOf/0/properties/periodValues/items/anyOf/0/properties/label",\n                                    "type": "string",\n                                    "title": "The period label",\n                                    "description": "The label of the current period",\n                                    "default": ""\n                                  },\n                                  "value": {\n                                    "$id": "#/properties/result/items/anyOf/1/properties/resultNodes/items/anyOf/0/properties/periodValues/items/anyOf/0/properties/value",\n                                    "type": "number",\n                                    "title": "The period value",\n                                    "description": "The period value of the current series",\n                                    "default": 0.0\n                                  }\n                                },\n                                "additionalProperties": true\n                              }\n                            ]\n                          }\n                        }\n                      },\n                      "additionalProperties": true\n                    }\n                  ]\n                }\n              },\n              "type": {\n                "$id": "#/properties/result/items/anyOf/1/properties/type",\n                "type": "string",\n                "title": "The type of Data",\n                "description": "To Specify whether the current instance is a scenario or series",\n                "default": ""\n              },\n              "isPrimary": {\n                "$id": "#/properties/result/items/anyOf/1/properties/isPrimary",\n                "type": "boolean",\n                "title": "The isPrimary series",\n                "description": "Boolean to identify if the current series is a primary series",\n                "default": false\n              }\n            },\n            "additionalProperties": true\n          },\n          {\n            "$id": "#/properties/result/items/anyOf/2",\n            "type": "object",\n            "title": "The comparison series data",\n            "description": "The schema for the comparison series data",\n            "default": {},\n            "required": [],\n            "properties": {\n              "id": {\n                "$id": "#/properties/result/items/anyOf/2/properties/id",\n                "type": "string",\n                "title": "The series id",\n                "description": "The unique id of the series",\n                "default": ""\n              },\n              "title": {\n                "$id": "#/properties/result/items/anyOf/2/properties/title",\n                "type": "string",\n                "title": "The series title",\n                "description": "The string title of the series",\n                "default": ""\n              },\n              "resultNodes": {\n                "$id": "#/properties/result/items/anyOf/2/properties/resultNodes",\n                "type": "array",\n                "title": "The result nodes of comparison series",\n                "description": "All the result nodes of the comparison series",\n                "default": [],\n                "additionalItems": true,\n                "items": {\n                  "$id": "#/properties/result/items/anyOf/2/properties/resultNodes/items",\n                  "anyOf": [\n                    {\n                      "$id": "#/properties/result/items/anyOf/2/properties/resultNodes/items/anyOf/0",\n                      "type": "object",\n                      "title": "The comparison series data",\n                      "description": "The schema for the comparison series data",\n                      "default": {},\n                      "required": [],\n                      "properties": {\n                        "id": {\n                          "$id": "#/properties/result/items/anyOf/2/properties/resultNodes/items/anyOf/0/properties/id",\n                          "type": "string",\n                          "title": "The period id",\n                          "description": "The id of the current period",\n                          "default": ""\n                        },\n                        "title": {\n                          "$id": "#/properties/result/items/anyOf/2/properties/resultNodes/items/anyOf/0/properties/title",\n                          "type": "string",\n                          "title": "The series title",\n                          "description": "The string title of the series",\n                          "default": ""\n                        },\n                        "periodValues": {\n                          "$id": "#/properties/result/items/anyOf/2/properties/resultNodes/items/anyOf/0/properties/periodValues",\n                          "type": "array",\n                          "title": "The values of period",\n                          "description": "The values for each periods",\n                          "default": [],\n                          "additionalItems": true,\n                          "items": {\n                            "$id": "#/properties/result/items/anyOf/2/properties/resultNodes/items/anyOf/0/properties/periodValues/items",\n                            "anyOf": [\n                              {\n                                "$id": "#/properties/result/items/anyOf/2/properties/resultNodes/items/anyOf/0/properties/periodValues/items/anyOf/0",\n                                "type": "object",\n                                "title": "The period value",\n                                "description": "The data of a period value",\n                                "default": {},\n                                "required": [],\n                                "properties": {\n                                  "id": {\n                                    "$id": "#/properties/result/items/anyOf/2/properties/resultNodes/items/anyOf/0/properties/periodValues/items/anyOf/0/properties/id",\n                                    "type": "string",\n                                    "title": "The period id",\n                                    "description": "The id of the current period",\n                                    "default": ""\n                                  },\n                                  "label": {\n                                    "$id": "#/properties/result/items/anyOf/2/properties/resultNodes/items/anyOf/0/properties/periodValues/items/anyOf/0/properties/label",\n                                    "type": "string",\n                                    "title": "The period label",\n                                    "description": "The label of the current period",\n                                    "default": ""\n                                  },\n                                  "value": {\n                                    "$id": "#/properties/result/items/anyOf/2/properties/resultNodes/items/anyOf/0/properties/periodValues/items/anyOf/0/properties/value",\n                                    "type": "number",\n                                    "title": "The period value",\n                                    "description": "The period value of the current series",\n                                    "default": 0.0\n                                  }\n                                },\n                                "additionalProperties": true\n                              }\n                            ]\n                          }\n                        }\n                      },\n                      "additionalProperties": true\n                    }\n                  ]\n                }\n              },\n              "type": {\n                "$id": "#/properties/result/items/anyOf/2/properties/type",\n                "type": "string",\n                "title": "The type of Data",\n                "description": "To Specify whether the current instance is a scenario or series",\n                "default": ""\n              },\n              "isComparison": {\n                "$id": "#/properties/result/items/anyOf/2/properties/isComparison",\n                "type": "boolean",\n                "title": "The isComparison series",\n                "description": "Boolean to identify if the current series is a comparison series",\n                "default": false\n              }\n            },\n            "additionalProperties": true\n          }\n        ]\n      }\n    },\n    "userDetails": {\n      "$id": "#/properties/userDetails",\n      "type": "object",\n      "title": "The User Details",\n      "description": "User details will contain the details of the user who is performing the writeback",\n      "default": {},\n      "required": [],\n      "properties": {\n        "email": {\n          "$id": "#/properties/userDetails/properties/email",\n          "type": "string",\n          "description": "The email associated with the user",\n          "title": "The user email",\n          "default": ""\n        },\n        "userName": {\n          "$id": "#/properties/userDetails/properties/userName",\n          "type": "string",\n          "description": "The name of the user who is triggering the writeback",\n          "title": "The user Name",\n          "default": ""\n        }\n      },\n      "additionalProperties": true\n    }\n  },\n  "additionalProperties": true\n}\n'))),Object(s.b)("p",null,"You can download the schema file here: ",Object(s.b)("a",{href:Object(a.a)("/assets/json-schema.json"),download:!0},"ValQ Writeback Schema.json")),Object(s.b)("h3",{id:"writeback-history"},"Writeback History"),Object(s.b)("p",null,"History of the Writeback logs are maintained and is accessed by clicking on the history icon right above the Writeback button in the Navigation panel."),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)(l.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"writeback-history",src:Object(a.a)("/doc-images/model/writeback/writeback_history_logs.png")}))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Writeback history logs of exported scenarios/series")),Object(s.b)("h2",{id:"summary---general-tab"},"Summary - General Tab"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Section"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Export"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Include navigation panel settings in the export file"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This property when activated exports the file along with Navigation Panel settings.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"License Registration"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unlock additional features"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"You will be able to enter the ValQ license in the Text Box to get the latest features.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Writeback"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Write Scenarios, Planning series along with the Simulation details to an URL"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This feature sends a post request to the endpoint URL in a JSON format and writes the data to an external data warehouse.")))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Model > General tab sections summarized")))}u.isMDXComponent=!0}}]);