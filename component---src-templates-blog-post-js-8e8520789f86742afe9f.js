(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{162:function(e,t,a){"use strict";a.r(t);a(163);var n=a(0),r=a.n(n),l=a(166),i=a(165),c=(a(153),a(171)),o=a(167),s=a(4),m=a.n(s),u=a(170),d=a(190),f=function(e){var t=e.url,a=e.title,n=e.siteName,l={url:t,button:d.ShareButtonIconOnly,buttons:[{network:"Twitter",icon:u.h},{network:"Facebook",icon:u.c},{network:"Linkedin",icon:u.f},{network:"Email",icon:u.b}],text:a,longtext:n};return r.a.createElement("div",{className:"mt-4"},r.a.createElement(d.ShareBlockStandard,l),r.a.createElement("p",{className:"text-center"},r.a.createElement("i",null,"If you like it, share it!")))};f.propTypes={url:m.a.string,title:m.a.string,siteName:m.a.string},f.defaultProps={url:"https://mywebsite.com/page-to-share/",title:"Default value of title",siteName:"Default value of excerpt"};var E=f;a.d(t,"query",function(){return p});var p="2381449687";t.default=function(e){var t=e.data.markdownRemark,a=e.data.site.siteMetadata.labels,n=e.data.site.siteMetadata.title,s=""+e.data.site.siteMetadata.url+e.pageContext.slug,m=t.frontmatter.tags;return r.a.createElement(l.a,null,r.a.createElement(i.a,{title:t.frontmatter.title}),r.a.createElement("div",{className:"post-page-main"},r.a.createElement("div",{className:"sidebar px-4 py-2"},r.a.createElement(c.a,null)),r.a.createElement("div",{className:"post-main"},r.a.createElement(i.a,{title:t.frontmatter.title}),r.a.createElement("div",{className:"mt-3"},r.a.createElement("h2",{className:"heading"},t.frontmatter.title),r.a.createElement("div",{className:"d-block"},function(e){var t=[];return e.forEach(function(e,n){a.forEach(function(a){e===a.tag&&t.push(r.a.createElement(o.a,{key:n,tag:a.tag,tech:a.tech,name:a.name,size:a.size,color:a.color}))})}),t}(m)),r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("i",null,"Published on ")," ",t.frontmatter.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement(E,{title:t.frontmatter.title,siteName:n,url:s})))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-8e8520789f86742afe9f.js.map