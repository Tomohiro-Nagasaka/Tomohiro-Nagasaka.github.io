(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(166),i=a(165);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"Page Not Found"),r.a.createElement("p",null,r.a.createElement("i",null,"Just lightin' out for the territories, huh? Brother, I been there.")))}},164:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(172);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},165:function(e,t,a){"use strict";var n=a(177),r=a(0),l=a.n(r),i=a(4),c=a.n(i),s=a(181),o=a.n(s);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,c=n.data.site,s=t||c.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=m},166:function(e,t,a){"use strict";var n=a(175),r=a(0),l=a.n(r),i=a(4),c=a.n(i),s=a(164),o=(a(148),a(170)),m=(a(150),function(e){var t=e.contacts;return l.a.createElement("div",{className:"bottom-bar py-1"},l.a.createElement("a",{className:" text-primary",href:t.linkedin},l.a.createElement("span",{title:"Linked In"},l.a.createElement(o.f,{size:26,style:{color:"primary"}}))),l.a.createElement("a",{className:"text-light",href:t.github},l.a.createElement("span",{title:"GitHub"},l.a.createElement(o.e,{size:26,style:{color:"light"}}))),l.a.createElement("a",{className:"text-warning",href:t.stackoverflow},l.a.createElement("span",{title:"Stack Overflow"},l.a.createElement(o.g,{size:26,style:{color:"warning"}}))),l.a.createElement("a",{className:"text-success",href:t.freecodecamp},l.a.createElement("span",{title:"freeCodeCamp"},l.a.createElement(o.d,{size:26,style:{color:"success"}}))),l.a.createElement("a",{className:"text-info",href:t.twitter},l.a.createElement("span",{title:"Twitter"},l.a.createElement(o.i,{size:26,style:{color:"info"}}))))}),d=function(){return l.a.createElement("div",{className:"mobile-pages-main"},l.a.createElement("div",{className:"text-center"},l.a.createElement("p",{className:"d-inline p-4"},l.a.createElement(s.a,{to:"/"},l.a.createElement("span",{className:"text-dark"},"Blog Home"))),l.a.createElement("p",{className:"d-inline p-4"},l.a.createElement(s.a,{to:"/about"},l.a.createElement("span",{className:"text-dark"},"About"))),l.a.createElement("p",{className:"d-inline p-4"},l.a.createElement(s.a,{to:"/archive"},l.a.createElement("span",{className:"text-dark"},"Archive")))))},u=function(e){var t=e.contacts;return l.a.createElement("div",{className:"social-links float-right mr-4"},l.a.createElement("a",{className:"text-primary ml-4",href:t.linkedin},l.a.createElement("span",{title:"Linked In"},l.a.createElement(o.f,{size:40,style:{color:"primary"}}))),l.a.createElement("a",{className:"text-light ml-4",href:t.github},l.a.createElement("span",{title:"GitHub"},l.a.createElement(o.e,{size:40,style:{color:"light"}}))),l.a.createElement("a",{className:"text-warning ml-4",href:t.stackoverflow},l.a.createElement("span",{title:"Stack Overflow"},l.a.createElement(o.g,{size:40,style:{color:"warning"}}))),l.a.createElement("a",{className:"text-success ml-4",href:t.freecodecamp},l.a.createElement("span",{title:"freeCodeCamp"},l.a.createElement(o.d,{size:40,style:{color:"success"}}))),l.a.createElement("a",{className:"text-info ml-4",href:t.twitter},l.a.createElement("span",{title:"Twitter"},l.a.createElement(o.i,{size:40,style:{color:"info"}}))))},p=(a(151),a(174)),f=a.n(p),E=function(e){return l.a.createElement("div",{className:"mobile-bio-main"},l.a.createElement("img",{src:f.a,className:"ml-4 mt-2",style:{maxWidth:"75px",maxHeight:"75px",borderRadius:"50%",boxShadow:"1px 1px 3px"},alt:"author-pic"}),l.a.createElement("h4",{className:"mr-4 mt-4"},e.author))},h=function(e){var t=e.siteTitle,a=(e.tagline,e.author),n=e.contacts;return l.a.createElement("header",{className:"head-main",style:{background:"black"}},l.a.createElement("div",{className:"head-elements",style:{margin:"0",padding:".75rem"}},l.a.createElement("h1",{className:"head-logo ml-4",style:{margin:0}},l.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),l.a.createElement(u,{contacts:n})),l.a.createElement(m,{contacts:n}),l.a.createElement(d,null),l.a.createElement(E,{author:a}))};h.propTypes={siteTitle:c.a.string},h.defaultProps={siteTitle:""};var g=h,w=function(e){var t=e.children;return l.a.createElement(s.b,{query:"2988051195",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,{siteTitle:e.site.siteMetadata.title,tagline:e.site.siteMetadata.tagline,author:e.site.siteMetadata.author,contacts:e.site.siteMetadata.contacts}),l.a.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("main",{className:"p-4"},t),l.a.createElement("footer",{className:"text-center"},l.a.createElement("hr",null),l.a.createElement("p",{className:"d-inline"},"© ",(new Date).getFullYear()," ",l.a.createElement("a",{className:"text-info",href:"https://willjw3.github.io/"},"willjw3"),", All Rights Reserved."),l.a.createElement("p",{className:"mt-5 text-muted d-inline"},l.a.createElement("i",null," Built with"," ",l.a.createElement("a",{className:"text-info",href:"https://www.gatsbyjs.org"},"Gatsby"))))))},data:n})};w.propTypes={children:c.a.node.isRequired};t.a=w},172:function(e,t,a){var n;e.exports=(n=a(176))&&n.default||n},174:function(e,t,a){e.exports=a.p+"static/willjw3-2990bd8a0f935e5baa06d52d5f36d9d2.jpg"},175:function(e){e.exports={data:{site:{siteMetadata:{title:"Developer Diary",tagline:"Autodidact developer and sometimes hoop-jumper",author:"WILL JAY",contacts:{linkedin:"https://www.linkedin.com/in/will-ward-65234a170/",github:"https://github.com/willjw3",stackoverflow:"https://stackoverflow.com/users/10262432/will-ward?tab=profile",freecodecamp:"https://www.freecodecamp.org/willjw3",twitter:"https://twitter.com/willjw3"}}}}}},176:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(56),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},177:function(e){e.exports={data:{site:{siteMetadata:{title:"Developer Diary",description:"A blog template for web developers that's ready to go out of the box. Feel free to modify it to your liking.",author:"WILL JAY"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-58feaeadb93b69dd25e1.js.map