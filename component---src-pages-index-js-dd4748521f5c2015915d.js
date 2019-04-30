(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(206),s=a(207),c=a(197),i=a(148),o=a(149),u=a(154),m=a(150),p=a.n(m),d=a(165),f=a.n(d),g=a(151),b=a(181),h=a(176),y=a(163),E=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleClick=function(e){var a=t.props,n=a.onClick;if(a.disabled)return e.preventDefault(),void e.stopPropagation();n&&n(e)},t}return Object(u.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.active,n=e.disabled,l=e.className,s=e.variant,c=e.action,u=e.as,m=e.eventKey,d=Object(o.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey"]);return r.a.createElement(h.a,Object(i.a)({},d,{eventKey:Object(y.b)(m,d.href),as:u||(c?d.href?"a":"button":"div"),onClick:this.handleClick,className:p()(l,t,a&&"active",n&&"disabled",s&&t+"-"+s,c&&t+"-action")}))},t}(r.a.Component);E.defaultProps={variant:null,active:!1,disabled:!1};var v=Object(g.a)(E,"list-group-item"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(u.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,a=e.bsPrefix,n=e.variant,l=Object(o.a)(e,["className","bsPrefix","variant"]);return r.a.createElement(b.a,Object(i.a)({},l,{className:p()(t,a,n&&a+"-"+n)}))},t}(r.a.Component);w.defaultProps={as:"div",variant:null};var k=f()(Object(g.a)(w,"list-group"),{activeKey:"onSelect"});k.Item=v;var N=k,j=a(161),x=a(159);t.default=function(){return r.a.createElement(j.a,{pageInfo:{pageName:"index"}},r.a.createElement(x.a,{title:"Home",keywords:["gatsby","react","bootstrap"]}),r.a.createElement(l.a,{className:"text-center"},r.a.createElement(s.a,null,r.a.createElement(c.a,null,r.a.createElement("p",null,"This is a Gatsby Starter that I frequently use to get jump started on quick website builds. It includes the following packages:"))),r.a.createElement(s.a,{className:"justify-content-center my-3"},r.a.createElement(c.a,{md:"6"},r.a.createElement(N,null,r.a.createElement(N.Item,{action:!0,href:"https://getbootstrap.com",target:"_blank"},"Bootstrap"),r.a.createElement(N.Item,{action:!0,href:"https://react-bootstrap.github.io/",target:"_blank"},"react-bootstrap"),r.a.createElement(N.Item,{action:!0,href:"https://react-icons.netlify.com",target:"_blank"},"react-icons"),r.a.createElement(N.Item,{action:!0,href:"https://www.gatsbyjs.org/packages/gatsby-plugin-sass/",target:"_blank"},"gatsby-plugin-sass")))),r.a.createElement(s.a,null,r.a.createElement(c.a,null,r.a.createElement("p",null,"This starter also includes a navbar that sticks to the top of the screen when the user scrolls past it, and a footer that stays at the bottom of the screen."),r.a.createElement("p",null,"For more documentation on these packages and how they work, please refer to the pages linked in the list above.")))))}},152:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),l=a(4),s=a.n(l),c=a(33),i=a.n(c);a.d(t,"a",function(){return i.a});a(153);var o=r.a.createContext({}),u=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},153:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby React Bootstrap Starter"}}}}},158:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),s=a.n(l),c=a(55),i=a(2),o=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},159:function(e,t,a){"use strict";var n=a(160),r=a(0),l=a.n(r),s=a(4),c=a.n(s),i=a(164),o=a.n(i);function u(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,c=e.title,i=n.data.site,u=t||i.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby React Bootstrap Starter",description:"A starter that includes react-bootstrap and react-icons, along with SASS compilation.",author:"Billy Jacoby"}}}}},161:function(e,t,a){"use strict";var n=a(157),r=a(0),l=a.n(r),s=a(152),c=a(206),i=a(207),o=a(197),u=a(4),m=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"#20232a"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};m.propTypes={siteTitle:a.n(u).a.string},m.defaultProps={siteTitle:""};var p=m,d=a(209),f=a(210),g=a(208),b=a(196),h=a(205),y=function(e){var t=e.pageInfo;return console.log(t),l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{variant:"dark",expand:"lg",id:"site-navbar"},l.a.createElement(s.a,{to:"/",className:"link-no-style"},l.a.createElement(d.a.Brand,{as:"span"},"Gatsby React Bootstrap")),l.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(f.a,{className:"mr-auto",activeKey:t&&t.pageName},l.a.createElement(s.a,{to:{}.PUBLIC_URL+"/page-2",className:"link-no-style"},l.a.createElement(f.a.Link,{as:"span",eventKey:"page-2"},"Page 2"))),l.a.createElement(f.a,{className:"ml-auto"},l.a.createElement(g.a,{inline:!0,onSubmit:function(e){return e.preventDefault()}},l.a.createElement(g.a.Group,null,l.a.createElement(b.a,{type:"text",placeholder:"Fake Search",className:"mr-2"})),l.a.createElement(h.a,null,"Fake Button"))))))};t.a=function(e){var t=e.children,a=e.pageInfo;return l.a.createElement(s.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{fluid:!0,className:"px-0 main"},l.a.createElement(i.a,{noGutters:!0,className:"justify-content-center"},l.a.createElement(o.a,null,l.a.createElement(p,{siteTitle:e.site.siteMetadata.title}))),l.a.createElement(y,{pageInfo:a}),l.a.createElement(i.a,{noGutters:!0},l.a.createElement(o.a,null,l.a.createElement(c.a,{className:"mt-5"},l.a.createElement("main",null,t))))),l.a.createElement(c.a,{fluid:!0,className:"px-0"},l.a.createElement(i.a,{noGutters:!0},l.a.createElement(o.a,{className:"footer-col"},l.a.createElement("footer",null,l.a.createElement("span",null,"© ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))))))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-index-js-dd4748521f5c2015915d.js.map