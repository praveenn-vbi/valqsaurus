(window.webpackJsonp=window.webpackJsonp||[]).push([[149,17],{240:function(e,a,n){"use strict";var t=n(0),r=n.n(t),c=n(229),o=n.n(c),l=n(222),s=n(22);a.a=function(e){var a=Object(t.useRef)(!1),c=Object(t.useRef)(null),i=Object(l.useHistory)(),u=Object(s.default)().siteConfig,h=(void 0===u?{}:u).baseUrl,d=function(){a.current||(Promise.all([fetch(h+"search-doc.json").then((function(e){return e.json()})),fetch(h+"lunr-index.json").then((function(e){return e.json()})),Promise.all([n.e(146),n.e(150)]).then(n.bind(null,247)),n.e(104).then(n.t.bind(null,246,7))]).then((function(e){!function(e,a,n){new n({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,n){var t=h+n.url;document.createElement("a").href=t,i.push(t)}})}(e[0],e[1],e[2].default)})),a.current=!0)},f=Object(t.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:f,onBlur:f,ref:c}))}},248:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(231);a.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);