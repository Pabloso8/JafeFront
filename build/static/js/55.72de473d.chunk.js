(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[55],{1831:function(e,a,t){"use strict";t.r(a);var s=t(122),r=t(21),c=t(15),n=t(0),o=t(81),l=t.n(o),i=t(464),u=t(58),d=t.n(u),b=t(506),m=t(466),p=t(465),j=t(861),g=t(470),f=t(468),h=t(467),O=t(535),v=t(536),N=t(469),x=(t(862),t(6));a.default=function(){var e=Object(n.useState)(null),a=Object(c.a)(e,2),t=a[0],o=a[1],u=Object(n.useState)([]),T=Object(c.a)(u,2),y=T[0],M=T[1],C=Object(n.useState)(""),P=Object(c.a)(C,2),w=P[0],k=P[1];Object(n.useEffect)((function(){l.a.get("/faq/data/category").then((function(e){return o(e.data)}))}),[]);var E=Object(b.i)(),R=function(e){var a=e.item,t=i[a.icon];return Object(x.jsx)(g.a,{className:"kb-search-content",md:"4",sm:"6",children:Object(x.jsx)(f.a,{children:Object(x.jsxs)(h.a,{children:[Object(x.jsxs)("h6",{className:"kb-title",children:[Object(x.jsx)(t,{size:20,className:d()("mr-50",Object(r.a)({},a.iconColor,a.iconColor))}),Object(x.jsxs)("span",{children:[a.title," ","(".concat(a.questions.length,")")]})]}),Object(x.jsx)(O.a,{className:"list-group-circle mt-2",children:a.questions.map((function(e){return Object(x.jsx)(v.a,{tag:m.b,to:"/pages/knowledge-base/".concat(E.category,"/").concat(e.slug),className:"text-body",children:e.question},e.id)}))})]})})})};return Object(x.jsxs)(n.Fragment,{children:[Object(x.jsx)(p.a,{breadCrumbTitle:"Knowledge Base",breadCrumbParent:"Pages",breadCrumbParent2:"Knowledge Base",breadCrumbActive:"Category"}),Object(x.jsx)(j.a,{searchTerm:w,setSearchTerm:k,handleFilter:function(e){var a=e.target.value,r=e.target.value.toLowerCase();k(e.target.value);var c=[];a.length&&(c=t.filter((function(e){return e.title.toLowerCase().includes(r)||e.questions.filter((function(e){return e.question.toLowerCase().includes(r)})).length}))),M(Object(s.a)(c))}}),null!==t?Object(x.jsx)("div",{id:"knowledge-base-category",children:Object(x.jsx)(N.a,{className:"kb-search-content-info match-height",children:(w.length?y:t).map((function(e){return Object(x.jsx)(R,{item:e},e.id)}))})}):null]})}},465:function(e,a,t){"use strict";var s=t(466),r=t(474),c=t(475),n=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent;e.breadCrumbParent2,e.breadCrumbParent3,e.breadCrumbActive;return Object(n.jsx)("div",{className:"content-header row",children:Object(n.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(n.jsx)("div",{className:"row breadcrumbs-top",children:Object(n.jsxs)("div",{className:"col-12",children:[a?Object(n.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(n.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(n.jsxs)(r.a,{children:[Object(n.jsx)(c.a,{tag:"li",children:Object(n.jsx)(s.b,{to:"/",children:"Home"})}),Object(n.jsx)(c.a,{tag:"li",className:"text-primary",children:t})]})})]})})})})}},467:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,o=e.tag,l=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-body"),t);return n.a.createElement(o,Object(s.a)({},l,{className:i,ref:c}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},468:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,c=e.color,o=e.body,l=e.inverse,i=e.outline,b=e.tag,m=e.innerRef,p=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),j=Object(d.mapToCssModules)(u()(a,"card",!!l&&"text-white",!!o&&"card-body",!!c&&(i?"border":"bg")+"-"+c),t);return n.a.createElement(b,Object(s.a)({},p,{className:j,ref:m}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},469:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b=l.a.oneOfType([l.a.number,l.a.string]),m={tag:d.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},p={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e){var a=e.className,t=e.cssModule,c=e.noGutters,o=e.tag,l=e.form,i=e.widths,b=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];i.forEach((function(a,t){var s=e[a];if(delete b[a],s){var r=!t;m.push(r?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var p=Object(d.mapToCssModules)(u()(a,c?"no-gutters":null,l?"form-row":"row",m),t);return n.a.createElement(o,Object(s.a)({},b,{className:p}))};j.propTypes=m,j.defaultProps=p,a.a=j},470:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:b,offset:b})]),p={tag:d.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:l.a.string,cssModule:l.a.object,widths:l.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},f=function(e){var a=e.className,t=e.cssModule,c=e.widths,o=e.tag,l=Object(r.a)(e,["className","cssModule","widths","tag"]),i=[];c.forEach((function(a,s){var r=e[a];if(delete l[a],r||""===r){var c=!s;if(Object(d.isObject)(r)){var n,o=c?"-":"-"+a+"-",b=g(c,a,r.size);i.push(Object(d.mapToCssModules)(u()(((n={})[b]=r.size||""===r.size,n["order"+o+r.order]=r.order||0===r.order,n["offset"+o+r.offset]=r.offset||0===r.offset,n)),t))}else{var m=g(c,a,r);i.push(m)}}})),i.length||i.push("col");var b=Object(d.mapToCssModules)(u()(a,i),t);return n.a.createElement(o,Object(s.a)({},l,{className:b}))};f.propTypes=p,f.defaultProps=j,a.a=f},473:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=Object(r.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(u()(a,"card-text"),t);return n.a.createElement(c,Object(s.a)({},o,{className:l}))};m.propTypes=b,m.defaultProps={tag:"p"},a.a=m},474:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,listTag:d.tagPropType,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},m=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,o=e.children,l=e.tag,i=e.listTag,b=e["aria-label"],m=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(d.mapToCssModules)(u()(a),c),j=Object(d.mapToCssModules)(u()("breadcrumb",t),c);return n.a.createElement(l,Object(s.a)({},m,{className:p,"aria-label":b}),n.a.createElement(i,{className:j},o))};m.propTypes=b,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=m},475:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,active:l.a.bool,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.active,o=e.tag,l=Object(r.a)(e,["className","cssModule","active","tag"]),i=Object(d.mapToCssModules)(u()(a,!!c&&"active","breadcrumb-item"),t);return n.a.createElement(o,Object(s.a)({},l,{className:i,"aria-current":c?"page":void 0}))};m.propTypes=b,m.defaultProps={tag:"li"},a.a=m},486:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(120),n=t(119),o=t(0),l=t.n(o),i=t(5),u=t.n(i),d=t(58),b=t.n(d),m=t(80),p={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},j=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.submit=t.submit.bind(Object(c.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.inline,n=e.tag,o=e.innerRef,i=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(m.mapToCssModules)(b()(a,!!c&&"form-inline"),t);return l.a.createElement(n,Object(s.a)({},i,{ref:o,className:u}))},a}(o.Component);j.propTypes=p,j.defaultProps={tag:"form"},a.a=j},535:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,flush:l.a.bool,className:l.a.string,cssModule:l.a.object,horizontal:l.a.oneOfType([l.a.bool,l.a.string])},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=e.flush,l=e.horizontal,i=Object(r.a)(e,["className","cssModule","tag","flush","horizontal"]),b=Object(d.mapToCssModules)(u()(a,"list-group",o?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(l)),t);return n.a.createElement(c,Object(s.a)({},i,{className:b}))};m.propTypes=b,m.defaultProps={tag:"ul",horizontal:!1},a.a=m},536:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(80),b={tag:d.tagPropType,active:l.a.bool,disabled:l.a.bool,color:l.a.string,action:l.a.bool,className:l.a.any,cssModule:l.a.object},m=function(e){e.preventDefault()},p=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=e.active,l=e.disabled,i=e.action,b=e.color,p=Object(r.a)(e,["className","cssModule","tag","active","disabled","action","color"]),j=Object(d.mapToCssModules)(u()(a,!!o&&"active",!!l&&"disabled",!!i&&"list-group-item-action",!!b&&"list-group-item-"+b,"list-group-item"),t);return l&&(p.onClick=m),n.a.createElement(c,Object(s.a)({},p,{className:j}))};p.propTypes=b,p.defaultProps={tag:"li"},a.a=p},713:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/banner.06ea9907.png"},861:function(e,a,t){"use strict";var s=t(961),r=t(468),c=t(467),n=t(473),o=t(486),l=t(943),i=t(944),u=t(780),d=t(945),b=t(6);a.a=function(e){var a=e.searchTerm,m=e.setSearchTerm,p=e.handleFilter;return Object(b.jsx)("div",{id:"knowledge-base-search",children:Object(b.jsx)(r.a,{className:"knowledge-base-bg",style:{backgroundImage:"url(".concat(t(713).default,")")},children:Object(b.jsxs)(c.a,{className:"text-center",children:[Object(b.jsx)("h2",{className:"text-primary",children:"Dedicated Source Used on Website"}),Object(b.jsxs)(n.a,{className:"mb-2",children:["Popular searches: ",Object(b.jsx)("span",{className:"font-weight-bolder",children:"Sales automation, Email marketing"})]}),Object(b.jsx)(o.a,{className:"kb-search-input",onSubmit:function(e){return e.preventDefault()},children:Object(b.jsxs)(l.a,{className:"input-group-merge",children:[Object(b.jsx)(i.a,{addonType:"prepend",children:Object(b.jsx)(u.a,{children:Object(b.jsx)(s.a,{size:14})})}),Object(b.jsx)(d.a,{value:a,onChange:function(e){return function(e){p?p(e):m(e.target.value)}(e)},placeholder:"Ask a question..."})]})})]})})})}},862:function(e,a,t){}}]);
//# sourceMappingURL=55.72de473d.chunk.js.map