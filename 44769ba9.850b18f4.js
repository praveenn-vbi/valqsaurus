(window.webpackJsonp=window.webpackJsonp||[]).push([[43,18],{202:function(e,a,n){"use strict";var r=n(0),c=n.n(r),t=n(200),s=n.n(t),o=n(196),i=n(190),h=!1;a.a=function(e){var a=Object(r.useRef)(!1),t=Object(r.useRef)(null),l=Object(o.useHistory)(),u=Object(i.a)().siteConfig,d=(void 0===u?{}:u).baseUrl,b=function(){a.current||(new window.DocSearch({searchData:window.searchData,inputSelector:"#search_input_react",handleSelected:function(e,a,n){var r=d+n.url;document.createElement("a").href=r,l.push(r)}}),a.current=!0)},p=function(){h?b():Promise.all([fetch(d+"search-data.json").then((function(e){return e.json()})),Promise.all([n.e(131),n.e(135)]).then(n.bind(null,207)),n.e(95).then(n.t.bind(null,206,7))]).then((function(e){var a=e[0],n=e[1].default;h=!0,window.searchData=a,window.DocSearch=n,b()}))},f=Object(r.useCallback)((function(a){t.current.contains(a.target)||t.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:p,onMouseOver:p,onFocus:f,onBlur:f,ref:t}))}}}]);