(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[73],{1772:function(e,t,a){},1852:function(e,t,a){"use strict";a.r(t);var r=a(15),n=a(0),o=a(58),c=a.n(o),s=a(128),l=a(982),i=a(464),u=a(961),d=a(471),p=a(468),b=a(467),f=a(1095),m=a(469),j=a(470),y=a(943),g=a(918),h=a(944),O=a(780),v=a(945),x=a(465),C=a(894),w=(a(1772),a(6)),N=function(e){var t=e.icon;return Object(w.jsxs)(n.Fragment,{children:[Object(w.jsx)("div",{className:"toastify-header",children:Object(w.jsxs)("div",{className:"title-wrapper",children:[Object(w.jsx)(d.a,{size:"sm",color:"success",icon:Object(w.jsx)(l.a,{size:12})}),Object(w.jsx)("h6",{className:"toast-title",children:"Icon Name Copied! \ud83d\udccb"})]})}),Object(w.jsx)("div",{className:"toastify-body",children:Object(w.jsx)("span",{role:"img","aria-label":"toast-text",children:t})})]})};t.default=function(){var e=[],t=Object(n.useState)([]),a=Object(r.a)(t,2),o=a[0],l=a[1],d=Object(n.useState)([]),T=Object(r.a)(d,2),P=T[0],M=T[1],E=Object(n.useState)(null),D=Object(r.a)(E,2),S=D[0],k=D[1];for(var R in i)e.push(R);return Object(w.jsxs)(n.Fragment,{children:[Object(w.jsx)(x.a,{breadCrumbTitle:"Feather Icons",breadCrumbParent:"UI",breadCrumbActive:"Feather Icons"}),Object(w.jsx)(m.a,{children:Object(w.jsx)(j.a,{sm:"12",children:Object(w.jsx)("div",{className:"icon-search-wrapper my-3 mx-auto",children:Object(w.jsxs)(y.a,{className:"input-group-merge",tag:g.a,children:[Object(w.jsx)(h.a,{addonType:"prepend",children:Object(w.jsx)(O.a,{children:Object(w.jsx)(u.a,{size:14})})}),Object(w.jsx)(v.a,{placeholder:"Search icons...",onChange:function(t){!function(t){var a=[];t.length&&e.filter((function(e){e.toLowerCase().includes(t.toLowerCase())&&a.push(e)})),M([].concat(a))}(t.target.value),l(t.target.value)}})]})})})}),Object(w.jsx)("div",{className:"d-flex flex-wrap",id:"icons-container",children:function(){var t=o.length?P:e;return t.length?t.map((function(e){var t=i[e];return Object(w.jsxs)(n.Fragment,{children:[Object(w.jsx)(C.CopyToClipboard,{text:"<".concat(e," />"),children:Object(w.jsx)(p.a,{id:e,className:c()("icon-card cursor-pointer text-center mb-2 mx-50",{active:S===e}),onClick:function(){return function(e){k(e),s.f.success(Object(w.jsx)(N,{icon:e}),{hideProgressBar:!0})}(e)},children:Object(w.jsxs)(b.a,{children:[Object(w.jsx)("div",{className:"icon-wrapper",children:Object(w.jsx)(t,{})}),Object(w.jsx)("p",{className:"icon-name text-truncate mb-0 mt-1",children:e})]})})}),Object(w.jsx)(f.a,{placement:"top",target:e,children:e.replace(/([A-Z])/g," $1").trim()})]},e)})):Object(w.jsx)("div",{className:"d-flex align-items-center justify-content-center w-100",children:Object(w.jsx)("h4",{className:"mb-0",children:"No Icons Found!"})})}()})]})}},465:function(e,t,a){"use strict";var r=a(466),n=a(474),o=a(475),c=a(6);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent;e.breadCrumbParent2,e.breadCrumbParent3,e.breadCrumbActive;return Object(c.jsx)("div",{className:"content-header row",children:Object(c.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(c.jsx)("div",{className:"row breadcrumbs-top",children:Object(c.jsxs)("div",{className:"col-12",children:[t?Object(c.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(c.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(c.jsxs)(n.a,{children:[Object(c.jsx)(o.a,{tag:"li",children:Object(c.jsx)(r.b,{to:"/",children:"Home"})}),Object(c.jsx)(o.a,{tag:"li",className:"text-primary",children:a})]})})]})})})})}},467:function(e,t,a){"use strict";var r=a(14),n=a(20),o=a(0),c=a.n(o),s=a(5),l=a.n(s),i=a(58),u=a.n(i),d=a(80),p={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,s=e.tag,l=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.mapToCssModules)(u()(t,"card-body"),a);return c.a.createElement(s,Object(r.a)({},l,{className:i,ref:o}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},468:function(e,t,a){"use strict";var r=a(14),n=a(20),o=a(0),c=a.n(o),s=a(5),l=a.n(s),i=a(58),u=a.n(i),d=a(80),p={tag:d.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var t=e.className,a=e.cssModule,o=e.color,s=e.body,l=e.inverse,i=e.outline,p=e.tag,b=e.innerRef,f=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(d.mapToCssModules)(u()(t,"card",!!l&&"text-white",!!s&&"card-body",!!o&&(i?"border":"bg")+"-"+o),a);return c.a.createElement(p,Object(r.a)({},f,{className:m,ref:b}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},469:function(e,t,a){"use strict";var r=a(14),n=a(20),o=a(0),c=a.n(o),s=a(5),l=a.n(s),i=a(58),u=a.n(i),d=a(80),p=l.a.oneOfType([l.a.number,l.a.string]),b={tag:d.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},f={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,s=e.tag,l=e.form,i=e.widths,p=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];i.forEach((function(t,a){var r=e[t];if(delete p[t],r){var n=!a;b.push(n?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var f=Object(d.mapToCssModules)(u()(t,o?"no-gutters":null,l?"form-row":"row",b),a);return c.a.createElement(s,Object(r.a)({},p,{className:f}))};m.propTypes=b,m.defaultProps=f,t.a=m},470:function(e,t,a){"use strict";var r=a(14),n=a(20),o=a(0),c=a.n(o),s=a(5),l=a.n(s),i=a(58),u=a.n(i),d=a(80),p=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:p,offset:p})]),f={tag:d.tagPropType,xs:b,sm:b,md:b,lg:b,xl:b,className:l.a.string,cssModule:l.a.object,widths:l.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,o=e.widths,s=e.tag,l=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];o.forEach((function(t,r){var n=e[t];if(delete l[t],n||""===n){var o=!r;if(Object(d.isObject)(n)){var c,s=o?"-":"-"+t+"-",p=j(o,t,n.size);i.push(Object(d.mapToCssModules)(u()(((c={})[p]=n.size||""===n.size,c["order"+s+n.order]=n.order||0===n.order,c["offset"+s+n.offset]=n.offset||0===n.offset,c)),a))}else{var b=j(o,t,n);i.push(b)}}})),i.length||i.push("col");var p=Object(d.mapToCssModules)(u()(t,i),a);return c.a.createElement(s,Object(r.a)({},l,{className:p}))};y.propTypes=f,y.defaultProps=m,t.a=y},474:function(e,t,a){"use strict";var r=a(14),n=a(20),o=a(0),c=a.n(o),s=a(5),l=a.n(s),i=a(58),u=a.n(i),d=a(80),p={tag:d.tagPropType,listTag:d.tagPropType,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},b=function(e){var t=e.className,a=e.listClassName,o=e.cssModule,s=e.children,l=e.tag,i=e.listTag,p=e["aria-label"],b=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),f=Object(d.mapToCssModules)(u()(t),o),m=Object(d.mapToCssModules)(u()("breadcrumb",a),o);return c.a.createElement(l,Object(r.a)({},b,{className:f,"aria-label":p}),c.a.createElement(i,{className:m},s))};b.propTypes=p,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=b},475:function(e,t,a){"use strict";var r=a(14),n=a(20),o=a(0),c=a.n(o),s=a(5),l=a.n(s),i=a(58),u=a.n(i),d=a(80),p={tag:d.tagPropType,active:l.a.bool,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,o=e.active,s=e.tag,l=Object(n.a)(e,["className","cssModule","active","tag"]),i=Object(d.mapToCssModules)(u()(t,!!o&&"active","breadcrumb-item"),a);return c.a.createElement(s,Object(r.a)({},l,{className:i,"aria-current":o?"page":void 0}))};b.propTypes=p,b.defaultProps={tag:"li"},t.a=b},894:function(e,t,a){"use strict";var r=a(895).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},895:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=o(a(0)),n=o(a(896));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?b(e):t}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var j=function(e){function t(){var e,a;i(this,t);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return m(b(a=d(this,(e=p(t)).call.apply(e,[this].concat(c)))),"onClick",(function(e){var t=a.props,o=t.text,c=t.onCopy,s=t.children,l=t.options,i=r.default.Children.only(s),u=(0,n.default)(o,l);c&&c(o,u),i&&i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e)})),a}var a,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a=t,o=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),a=l(e,["text","onCopy","options","children"]),n=r.default.Children.only(t);return r.default.cloneElement(n,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(a,!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,{onClick:this.onClick}))}}],o&&u(a.prototype,o),c&&u(a,c),t}(r.default.PureComponent);t.CopyToClipboard=j,m(j,"defaultProps",{onCopy:void 0,options:void 0})},896:function(e,t,a){"use strict";var r=a(897),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,o,c,s,l,i,u=!1;t||(t={}),a=t.debug||!1;try{if(c=r(),s=document.createRange(),l=document.getSelection(),(i=document.createElement("span")).textContent=e,i.style.all="unset",i.style.position="fixed",i.style.top=0,i.style.clip="rect(0, 0, 0, 0)",i.style.whiteSpace="pre",i.style.webkitUserSelect="text",i.style.MozUserSelect="text",i.style.msUserSelect="text",i.style.userSelect="text",i.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=n[t.format]||n.default;window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(i),s.selectNodeContents(i),l.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){a&&console.error("unable to copy using execCommand: ",d),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){a&&console.error("unable to copy using clipboardData: ",d),a&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(s):l.removeAllRanges()),i&&document.body.removeChild(i),c()}return u}},897:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],r=0;r<e.rangeCount;r++)a.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=73.676995e4.chunk.js.map