(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"listQuery",function(){return m});a(179),a(35);var n=a(0),r=a.n(n),l=a(163),c=(a(148),a(149),a(165)),s=a(164),o=a(171),i=a(166),m="778046197";t.default=function(e){var t=e.data.allMarkdownRemark.edges,a=e.data.site.siteMetadata.labels,n=e.pageContext,m=n.currentPage,u=1===m,d=m===n.numPages,f=m-1==1?"/":"/"+(m-1).toString(),g="/"+(m+1).toString();return r.a.createElement(c.a,null,r.a.createElement(s.a,{title:"Home",keywords:e.data.site.siteMetadata.seokeywords}),r.a.createElement("div",{className:"index-main"},r.a.createElement("div",{className:"sidebar px-4 py-2"},r.a.createElement(o.a,null)),r.a.createElement("div",{className:"post-list-main"},t.map(function(e){var t=e.node.frontmatter.tags;return r.a.createElement("div",{key:e.node.id,className:"container mt-5"},r.a.createElement(l.a,{to:e.node.fields.slug,className:"text-dark"},r.a.createElement("h2",{className:"title"},e.node.frontmatter.title)),r.a.createElement("small",{className:"d-block text-info"},r.a.createElement("i",null,"Posted on ",e.node.frontmatter.date)),r.a.createElement("p",{className:"mt-3 d-inline"},e.node.excerpt),r.a.createElement(l.a,{to:e.node.fields.slug,className:"text-primary"},r.a.createElement("small",{className:"d-inline-block ml-3"}," Read full post")),r.a.createElement("div",{className:"d-block"},function(e){var t=[];return e.forEach(function(e,n){t.push(Object(i.b)(e,a,n))}),t}(t)))}),r.a.createElement("div",{className:"text-center mt-4"},!u&&r.a.createElement(l.a,{to:f,rel:"prev",style:{textDecoration:"none"}},r.a.createElement("span",{className:"text-dark"},"← Previous Page")),!d&&r.a.createElement(l.a,{to:g,rel:"next",style:{textDecoration:"none"}},r.a.createElement("span",{className:"text-dark ml-5"},"Next Page →"))))))}},167:function(e,t,a){var n=a(25).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},179:function(e,t,a){"use strict";a(180);var n=a(5),r=a(74),l=a(18),c=/./.toString,s=function(e){a(14)(RegExp.prototype,"toString",e,!0)};a(19)(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?s(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!l&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=c.name&&s(function(){return c.call(this)})},180:function(e,t,a){a(18)&&"g"!=/./g.flags&&a(25).f(RegExp.prototype,"flags",{configurable:!0,get:a(74)})}}]);
//# sourceMappingURL=component---src-templates-post-list-js-6b875eebea2a643baa2d.js.map