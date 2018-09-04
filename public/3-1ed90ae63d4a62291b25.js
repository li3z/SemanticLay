(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{180:function(E,S){E.exports={siteTitle:"GCN",siteTitleAlt:"GCN Gatsby Starter",publisher:"Publisher named GCN",siteDescription:"A starter template to build amazing static websites with Gatsby, Contentful and Netlify",siteUrl:"https://gcn.netlify.com",author:"GCN User",authorUrl:"https://gcn.netlify.com/about/",userTwitter:"@twitter",shortTitle:"GCN App",shareImage:"/logos/share.jpg",shareImageWidth:900,shareImageHeight:600,siteLogo:"/logos/logo-512.png",backgroundColor:"#e9e9e9",themeColor:"#121212",copyright:"Copyright © 2018 GCN User"}},185:function(E,S,e){"use strict";e.r(S),e.d(S,"graphql",function(){return v}),e.d(S,"StaticQueryContext",function(){return s}),e.d(S,"StaticQuery",function(){return l});var t=e(0),h=e.n(t),I=e(10),n=e.n(I),a=e(173),r=e.n(a);e.d(S,"Link",function(){return r.a}),e.d(S,"withPrefix",function(){return a.withPrefix}),e.d(S,"navigate",function(){return a.navigate}),e.d(S,"push",function(){return a.push}),e.d(S,"replace",function(){return a.replace}),e.d(S,"navigateTo",function(){return a.navigateTo});var i=e(189),o=e.n(i);e.d(S,"PageRenderer",function(){return o.a});var A=e(34);e.d(S,"parsePath",function(){return A.a});var s=h.a.createContext({}),l=function(E){return h.a.createElement(s.Consumer,null,function(S){return E.data||S[E.query]&&S[E.query].data?(E.render||E.children)(E.data?E.data.data:S[E.query].data):h.a.createElement("div",null,"Loading (StaticQuery)")})};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}l.propTypes={data:n.a.object,query:n.a.string.isRequired,render:n.a.func,children:n.a.func}},189:function(E,S,e){var t;E.exports=(t=e(199))&&t.default||t},192:function(E,S,e){"use strict";var t=e(14),h=e.n(t),I=e(0),n=e.n(I),a=e(172),r=e(183),i=e.n(r),o=e(198),A=e.n(o),s=e(232),l=e.n(s);function v(){var E=l()(['\n  /* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n  */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* Added to Fix Footer to bottom of viewport */\n  html, body {\n    height: 100%;\n  }\n  .siteRoot {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n  .siteContent {\n    flex: 1 0 auto;\n  }\n  footer {\n    width: 100%;\n  }\n\n  /* End Fix to Place Footer on Bottom of Viewport */\n\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  @media screen and (min-width: 35em) {\n    html {\n      margin-right: calc(-100vw + 100%);\n      overflow-x: hidden;\n    }\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote::before, blockquote::after,\n  q::before, q::after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: white;\n    line-height: 1;\n    font-size: 100%;\n    font-variant-ligatures: none;\n    text-rendering: optimizeLegibility;\n    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;\n    font-weight: 400;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n\n  img {\n    display: block;\n  \twidth: 100%;\n  \theight: auto;\n  }\n']);return v=function(){return E},E}Object(a.c)(v());var x={colors:{base:"#121212",secondary:"#e9e9e9",tertiary:"#f3f3f3",highlight:"#5b8bf7"},sizes:{maxWidth:"1200px",maxWidthCentered:"650px"},responsive:{small:"35em",medium:"50em",large:"70em"}},L=e(180),c=e.n(L),d=e(185),u=a.b.header.withConfig({displayName:"Menu__Header"})(["background:",";width:100%;padding:1.5em 0;"],function(E){return E.theme.colors.base}),f=a.b.nav.withConfig({displayName:"Menu__Nav"})(["width:100%;max-width:",";margin:0 auto;padding:0 1.5em;ul{display:flex;justify-content:space-between;}li{display:inline-block;margin-left:1em;&:first-child{position:relative;margin:0;flex-basis:100%;}}a{text-decoration:none;color:DarkGray;font-weight:600;transition:all 0.2s;border-bottom:2px solid ",";&:hover{color:white;}}"],function(E){return E.theme.sizes.maxWidth},function(E){return E.theme.colors.base}),p={color:"white"},m=function(E){return n.a.createElement(u,{style:E.style},n.a.createElement(f,null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(d.Link,{to:"/",activeStyle:p},"Home")),n.a.createElement("li",null,n.a.createElement(d.Link,{to:"/about/",activeStyle:p},"About")),n.a.createElement("li",null,n.a.createElement(d.Link,{to:"/contact/",activeStyle:p},"Contact")))))},g=(e(186),a.b.footer.withConfig({displayName:"Footer__Wrapper"})(["display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;margin:0 auto;max-width:",";"],function(E){return E.theme.sizes.maxWidth})),b=a.b.ul.withConfig({displayName:"Footer__List"})(["display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;width:100%;border-top:1px solid ",";padding:1em 0 2em;margin:0 1.5em;"],function(E){return E.theme.colors.secondary}),y=a.b.li.withConfig({displayName:"Footer__Item"})(["display:inline-block;padding:0.25em 0;width:100%;@media screen and (min-width:","){width:auto;}a{font-weight:600;transition:all 0.2s;color:",";&:hover{color:",";}&:visited{color:",";}}"],function(E){return E.theme.responsive.small},function(E){return E.theme.colors.base},function(E){return E.theme.colors.highlight},function(E){return E.theme.colors.base}),w=function(){return n.a.createElement(g,null,n.a.createElement(b,null,n.a.createElement(y,null,n.a.createElement("a",{href:"https://www.contentful.com/",rel:"nofollow noopener noreferrer",target:"_blank"},n.a.createElement("img",{src:"https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg",style:{width:"100px"},alt:"Powered by Contentful"}))),n.a.createElement(y,null,n.a.createElement("a",{href:"https://github.com/ryanwiemer/gatsby-starter-gcn",target:"_blank",rel:"noopener noreferrer"},"gatsby-starter-gcn")," ","by"," ",n.a.createElement("a",{href:"https://github.com/ryanwiemer",target:"_blank",rel:"noopener noreferrer"},"@ryanwiemer"))))},k=e(233),C=e.n(k),q=e(10),R=e.n(q),T=e(234),N=e.n(T),_=(e(218),e(235)),z=e.n(_),W=e(236),G=e.n(W),j=(e(239),function(){var E=this;this.fbase=function(){return E.instance?E.instance:(G.a.initializeApp({messagingSenderId:"824440442769"}),E.instance=E,E.instance)},this.askForPermissioToReceiveNotifications=z()(N.a.mark(function E(){var S,e;return N.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.prev=0,console.log("ask to"),S=G.a.messaging(),E.next=5,S.requestPermission();case 5:return E.next=7,S.getToken();case 7:e=E.sent,console.log("user token: ",e),console.log("https://iid.googleapis.com/iid/v1/"+e+"/rel/topics/all"),z()(N.a.mark(function E(){return N.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.prev=0,E.next=3,fetch("https://iid.googleapis.com/iid/v1/"+e+"/rel/topics/all",{headers:{Authorization:"key=AAAAv_R6z5E:APA91bHLXWzm5oMfs44Q6iZRxOQhI9-kQKaxpeY497zYE_XamXGlPymImjGhXpst_zjv89h4zrRWh7DmoPpw8rCnHXhmHAIcSWl75A6d5sPq0TNgLDGaemewxe7BIhW4fqLt5nLFekDX","Content-Type":"application/json"},method:"POST"}).then(function(E){return console.log(E)}).catch(function(E){return console.error("Error:",E)}).then(function(E){return console.log("Success:",E)});case 3:return E.abrupt("return",e);case 6:E.prev=6,E.t0=E.catch(0),console.log("Booo");case 9:case"end":return E.stop()}},E,this,[[0,6]])}))(),E.next=16;break;case 13:E.prev=13,E.t0=E.catch(0),console.error(E.t0);case 16:case 17:case"end":return E.stop()}},E,this,[[0,13]])}))});j.instance=void 0;var P=j,B=function(E){function S(){for(var S,e=arguments.length,t=new Array(e),h=0;h<e;h++)t[h]=arguments[h];return(S=E.call.apply(E,[this].concat(t))||this).render=function(){return n.a.createElement("div",{className:"siteRoot"},n.a.createElement(i.a,null,n.a.createElement("title",null,c.a.siteTitle),n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),n.a.createElement("link",{rel:"icon",href:A.a}),n.a.createElement("meta",{name:"description",content:c.a.siteDescription}),n.a.createElement("meta",{property:"og:title",content:c.a.siteTitle}),n.a.createElement("meta",{property:"og:url",content:c.a.siteUrl}),n.a.createElement("meta",{property:"og:locale",content:"en_US"}),n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{property:"og:site_name",content:c.a.siteTitle})),n.a.createElement(a.a,{theme:x},n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"siteContent"},n.a.createElement(C.a,{top:"#header",bottomBoundary:"#content",innerZ:10},n.a.createElement(m,null)),S.props.children),n.a.createElement(w,null))))},S}return h()(S,E),S.prototype.componentDidMount=function(){try{this.firebase=new P,this.firebase.fbase().askForPermissioToReceiveNotifications()}catch(E){console.log("error: "+E)}},S}(n.a.Component);B.propTypes={children:R.a.array.isRequired},S.a=B},198:function(E,S){E.exports="data:image/x-icon;base64,AAABAAIAEBAAAAEAIABoBAAAJgAAACAgAAABACAAKBEAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAIAAAAEAAAAABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/xISEv8SEhL/EhIS/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},199:function(E,S,e){"use strict";e.r(S);var t=e(0),h=e.n(t),I=e(10),n=e.n(I),a=e(35),r=e(1),i=function(E){var S=E.location,e=r.a.getResourcesForPathname(S.pathname);return h.a.createElement(a.a,{location:S,pageResources:e})};i.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},S.default=i},200:function(E,S,e){"use strict";var t=e(0),h=e.n(t),I=e(172).b.section.withConfig({displayName:"Container__Wrapper"})(["margin:0 auto;max-width:",";padding:3em 1.5em 2em;"],function(E){return E.theme.sizes.maxWidth});S.a=function(E){return h.a.createElement(I,null,E.children)}},262:function(E,S,e){"use strict";var t=e(28);S.__esModule=!0,S.default=void 0;var h,I=t(e(14)),n=t(e(53)),a=t(e(303)),r=t(e(79)),i=t(e(0)),o=t(e(10)),A=function(E){var S=(0,r.default)({},E);return S.resolutions&&(S.fixed=S.resolutions,delete S.resolutions),S.sizes&&(S.fluid=S.sizes,delete S.sizes),S},s={},l=function(E){var S=A(E),e=S.fluid?S.fluid.src:S.fixed.src;return!!s[e]||(s[e]=!0,!1)},v=[],x=null,L=function(){if(null!==x)return x;var E="undefined"!=typeof window?window.document.createElement("canvas"):{};return x=!(!E.getContext||!E.getContext("2d"))&&0===E.toDataURL("image/webp").indexOf("data:image/webp")},c=function(E){var S=E.src?'src="'+E.src+'" ':'src="" ',e=E.srcSet?'srcset="'+E.srcSet+'" ':"",t=E.sizes?'sizes="'+E.sizes+'" ':"",h=E.title?'title="'+E.title+'" ':"",I=E.alt?'alt="'+E.alt+'" ':'alt="" ',n=E.width?'width="'+E.width+'" ':"",a=E.height?'height="'+E.height+'" ':"",r=E.opacity?E.opacity:"1";return"<img "+n+a+S+e+I+h+t+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(E.transitionDelay?E.transitionDelay:"0.5s")+";opacity:"+r+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},d=function(E){var S=E.style,e=E.onLoad,t=E.onError,h=(0,a.default)(E,["style","onLoad","onError"]);return i.default.createElement("img",(0,r.default)({},h,{onLoad:e,onError:t,style:(0,r.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},S)}))};d.propTypes={style:o.default.object,onError:o.default.func,onLoad:o.default.func};var u=function(E){function S(S){var e;e=E.call(this,S)||this;var t=!0,h=!0,I=!1;return!l(S)&&"undefined"!=typeof window&&window.IntersectionObserver&&(t=!1,h=!1,I=!0),"undefined"==typeof window&&(t=!1,h=!1),e.state={isVisible:t,imgLoaded:h,IOSupported:I},e.handleRef=e.handleRef.bind((0,n.default)((0,n.default)(e))),e}(0,I.default)(S,E);var e=S.prototype;return e.handleRef=function(E){var S=this;this.state.IOSupported&&E&&function(E,S){(void 0===h&&"undefined"!=typeof window&&window.IntersectionObserver&&(h=new window.IntersectionObserver(function(E){E.forEach(function(E){v.forEach(function(S){S[0]===E.target&&(E.isIntersecting||E.intersectionRatio>0)&&(h.unobserve(S[0]),S[1]())})})},{rootMargin:"200px"})),h).observe(E),v.push([E,S])}(E,function(){S.setState({isVisible:!0,imgLoaded:!1})})},e.render=function(){var E,S=this,e=A(this.props),t=e.title,h=e.alt,I=e.className,n=e.outerWrapperClassName,a=e.style,o=void 0===a?{}:a,s=e.imgStyle,l=void 0===s?{}:s,v=e.placeholderStyle,x=void 0===v?{}:v,u=e.fluid,f=e.fixed,p=e.backgroundColor,m=e.Tag;E="boolean"==typeof p?"lightgray":p;var g=(0,r.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},l,x),b=(0,r.default)({opacity:this.state.imgLoaded||!1===this.props.fadeIn?1:0},l);if(u){var y=u;return y.srcWebp&&y.srcSetWebp&&L()&&(y.src=y.srcWebp,y.srcSet=y.srcSetWebp),i.default.createElement(m,{className:(n||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===o.position?"initial":"relative"}},i.default.createElement(m,{className:(I||"")+" gatsby-image-wrapper",style:(0,r.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef},i.default.createElement(m,{style:{width:"100%",paddingBottom:100/y.aspectRatio+"%"}}),y.base64&&i.default.createElement(d,{alt:h,title:t,src:y.base64,style:g}),y.tracedSVG&&i.default.createElement(d,{alt:h,title:t,src:y.tracedSVG,style:g}),E&&i.default.createElement(m,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&i.default.createElement(d,{alt:h,title:t,srcSet:y.srcSet,src:y.src,sizes:y.sizes,style:b,onLoad:function(){S.state.IOSupported&&S.setState({imgLoaded:!0}),S.props.onLoad&&S.props.onLoad()},onError:this.props.onError}),i.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:c((0,r.default)({alt:h,title:t},y))}})))}if(f){var w=f,k=(0,r.default)({position:"relative",overflow:"hidden",display:"inline-block",width:w.width,height:w.height},o);return"inherit"===o.display&&delete k.display,w.srcWebp&&w.srcSetWebp&&L()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),i.default.createElement(m,{className:(n||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===o.position?"initial":"relative"}},i.default.createElement(m,{className:(I||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef},w.base64&&i.default.createElement(d,{alt:h,title:t,src:w.base64,style:g}),w.tracedSVG&&i.default.createElement(d,{alt:h,title:t,src:w.tracedSVG,style:g}),E&&i.default.createElement(m,{title:t,style:{backgroundColor:E,width:w.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:w.height}}),this.state.isVisible&&i.default.createElement(d,{alt:h,title:t,width:w.width,height:w.height,srcSet:w.srcSet,src:w.src,style:b,onLoad:function(){S.setState({imgLoaded:!0}),S.props.onLoad&&S.props.onLoad()},onError:this.props.onError}),i.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:c((0,r.default)({alt:h,title:t,width:w.width,height:w.height},w))}})))}return null},S}(i.default.Component);u.defaultProps={fadeIn:!0,alt:"",Tag:"div"};var f=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string}),p=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string});u.propTypes={resolutions:f,sizes:p,fixed:f,fluid:p,fadeIn:o.default.bool,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),outerWrapperClassName:o.default.oneOfType([o.default.string,o.default.object]),style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,position:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,Tag:o.default.string};var m=u;S.default=m}}]);
//# sourceMappingURL=3-1ed90ae63d4a62291b25.js.map