(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u}),a(82);var n=a(0),r=a.n(n),i=a(185),l=a(214),o=a(213),m=a(190),c=a(188),s=a(187),u="1789502903";t.default=function(e){var t=e.data.allContentfulPost.edges;return r.a.createElement(i.a,null,r.a.createElement(s.a,null),r.a.createElement(m.a,null,r.a.createElement(c.a,{small:!0},r.a.createElement("a",{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"},"Gatsby"),","," ",r.a.createElement("a",{href:"https://www.contentful.com/",target:"_blank",rel:"noopener noreferrer"},"Contentful")," ","and"," ",r.a.createElement("a",{href:"https://www.netlify.com/",target:"_blank",rel:"noopener noreferrer"},"Netlify")," ",r.a.createElement("span",null,"🎉")),r.a.createElement(l.a,null,t.map(function(e){var t=e.node;return r.a.createElement(o.a,{key:t.id,slug:t.slug,image:t.heroImage,title:t.title,date:t.publishDate,excerpt:t.body})}))))}},187:function(e,t,a){"use strict";var n=a(12),r=a.n(n),i=a(0),l=a.n(i),o=a(175),m=a.n(o),c=a(171),s=a.n(c),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r,i,o=this.props,c=o.postNode,u=o.pagePath,p=o.postSEO,g=o.pageSEO,h=o.customTitle;e=s.a.siteTitle,t=s.a.siteDescription,a=s.a.siteUrl+s.a.shareImage,n=s.a.shareImageWidth,r=s.a.shareImageHeight,i=s.a.siteUrl,h&&(e=c.title,i=s.a.siteUrl+"/"+u+"/"),(p||g)&&(e=c.title,t=null===c.metaDescription?c.body.childMarkdownRemark.excerpt:c.metaDescription.internal.content,i=s.a.siteUrl+"/"+u+"/"),p&&(a="https:"+c.heroImage.ogimg.src,n=c.heroImage.ogimg.width,r=c.heroImage.ogimg.height);var d=[{"@context":"http://schema.org","@type":"WebSite",url:s.a.siteUrl,name:s.a.siteTitle,alternateName:s.a.siteTitleAlt?s.a.siteTitleAlt:""}];return p&&d.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":s.a.siteUrl,name:s.a.siteTitle}},{"@type":"ListItem",position:2,item:{"@id":i,name:e}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:i,name:e,alternateName:s.a.siteTitleAlt?s.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a,width:n,height:r},author:{"@type":"Person",name:s.a.author,url:s.a.authorUrl},publisher:{"@type":"Organization",name:s.a.publisher,url:s.a.siteUrl},datePublished:c.publishDateISO,mainEntityOfPage:i}),g&&d.push({"@context":"http://schema.org","@type":"WebPage",url:i,name:e}),l.a.createElement(m.a,null,l.a.createElement("meta",{name:"image",content:a}),l.a.createElement("meta",{name:"description",content:t}),l.a.createElement("script",{type:"application/ld+json"},JSON.stringify(d)),l.a.createElement("meta",{property:"og:title",content:e}),p?l.a.createElement("meta",{property:"og:type",content:"article"}):null,l.a.createElement("meta",{property:"og:url",content:i}),l.a.createElement("meta",{property:"og:image",content:a}),l.a.createElement("meta",{property:"og:image:width",content:n}),l.a.createElement("meta",{property:"og:image:height",content:r}),l.a.createElement("meta",{property:"og:description",content:t}),l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.a.createElement("meta",{name:"twitter:creator",content:s.a.userTwitter?s.a.userTwitter:""}),l.a.createElement("meta",{name:"twitter:title",content:e}),l.a.createElement("meta",{name:"twitter:image",content:a}),l.a.createElement("meta",{name:"twitter:description",content:t}))},t}(i.Component);t.a=u},188:function(e,t,a){"use strict";a(176);var n=a(0),r=a.n(n),i=a(166).b.h1.withConfig({displayName:"PageTitle__Title"})(["font-size:",";text-transform:capitalize;font-weight:600;text-align:center;margin:0 0 3rem 0;margin:",";line-height:1.2;span{margin:0 0 0 0.25em;}a{transition:all 0.2s;color:",";&:hover{color:",";}}"],function(e){return e.small?"2em":"3em"},function(e){return e.small?"1rem 0 4rem 0":"0 0 3rem 0"},function(e){return e.theme.colors.base},function(e){return e.theme.colors.highlight});t.a=function(e){return r.a.createElement(i,{small:e.small},e.children)}},213:function(e,t,a){"use strict";a(176);var n=a(0),r=a.n(n),i=a(166),l=a(179),o=a(233),m=a.n(o),c=i.b.li.withConfig({displayName:"Card__Post"})(["border:1px solid ",";border-radius:2px;margin:0 0 1em 0;width:100%;transition:background 0.2s;@media screen and (min-width:","){flex:0 0 49%;margin:0 0 2vw 0;}@media screen and (min-width:","){flex:0 0 32%;}&:hover{background:",";}a{display:flex;flex-flow:column;height:100%;width:100%;color:",";text-decoration:none;.gatsby-image-wrapper{height:0;padding-bottom:60%;}}"],function(e){return e.theme.colors.secondary},function(e){return e.theme.responsive.small},function(e){return e.theme.responsive.medium},function(e){return e.theme.colors.tertiary},function(e){return e.theme.colors.base}),s=i.b.h2.withConfig({displayName:"Card__Title"})(["font-size:1.5em;font-weight:600;text-transform:capitalize;margin:1rem 1rem 0.5rem 1rem;"]),u=i.b.h3.withConfig({displayName:"Card__Date"})(["margin:0 1rem 1.5rem 1rem;color:gray;"]),p=i.b.p.withConfig({displayName:"Card__Excerpt"})(["margin:0 1rem 1rem 1rem;line-height:1.6;"]);t.a=function(e){return r.a.createElement(c,null,r.a.createElement(l.Link,{to:"/"+e.slug+"/"},r.a.createElement(m.a,{fluid:e.image.fluid,backgroundColor:"#eeeeee"}),r.a.createElement(s,null,e.title),r.a.createElement(u,null,e.date),r.a.createElement(p,{dangerouslySetInnerHTML:{__html:e.excerpt.childMarkdownRemark.excerpt}})))}},214:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(166).b.ul.withConfig({displayName:"CardList__List"})(["display:flex;flex-flow:row wrap;justify-content:space-between;margin:0 auto;&::after{content:'';flex:0 0 32%;}"]);t.a=function(e){return r.a.createElement(i,null,e.children)}}}]);
//# sourceMappingURL=component---src-pages-index-1-js-4d0d29ce8b29c3696efd.js.map