(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{162:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(165),i=a(164),s=(a(153),a(171)),c=a(166),m=a(4),o=a.n(m),u=a(170),d=a(191),f=function(e){var t=e.url,a=e.title,n=e.siteName,r={url:t,button:d.ShareButtonIconOnly,buttons:[{network:"Twitter",icon:u.f},{network:"Facebook",icon:u.c},{network:"Linkedin",icon:u.e},{network:"Email",icon:u.b}],text:a,longtext:n};return l.a.createElement("div",{className:"mt-4"},l.a.createElement(d.ShareBlockStandard,r),l.a.createElement("p",{className:"text-center"},l.a.createElement("i",null,"If you like it, share it!")))};f.propTypes={url:o.a.string,title:o.a.string,siteName:o.a.string},f.defaultProps={url:"https://mywebsite.com/page-to-share/",title:"Default value of title",siteName:"Default value of excerpt"};var E=f;a.d(t,"query",function(){return p});var p="2381449687";t.default=function(e){var t=e.data.markdownRemark,a=e.data.site.siteMetadata.labels,n=e.data.site.siteMetadata.title,m=""+e.data.site.siteMetadata.url+e.pageContext.slug,o=t.frontmatter.tags;return l.a.createElement(r.a,null,l.a.createElement(i.a,{title:t.frontmatter.title}),l.a.createElement("div",{className:"post-page-main"},l.a.createElement("div",{className:"sidebar px-4 py-2"},l.a.createElement(s.a,null)),l.a.createElement("div",{className:"post-main"},l.a.createElement(i.a,{title:t.frontmatter.title}),l.a.createElement("div",{className:"mt-3"},l.a.createElement("h2",{className:"heading"},t.frontmatter.title),l.a.createElement("div",{className:"d-block"},function(e){var t=[];return e.forEach(function(e,n){t.push(Object(c.b)(e,a,n))}),t}(o)),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("i",null,"Published on ")," ",t.frontmatter.date),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),l.a.createElement(E,{title:t.frontmatter.title,siteName:n,url:m})))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-cc98da08a2d7599bb359.js.map