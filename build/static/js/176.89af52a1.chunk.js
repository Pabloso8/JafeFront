(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[176],{1810:function(e,t,a){"use strict";a.r(t);var c=a(489),r=a.n(c),n=a(493),s=a(15),o=a(0),i=a(467),l=a(476),d=a(469),j=a(470),u=a(947),b=a(463),h=a(600),p=a.n(h),m=a(601),O=a.n(m),f=a(81),x=a.n(f),g=a(6);t.default=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],h=Object(o.useState)(!1),m=Object(s.a)(h,2),f=m[0],v=m[1],y=Object(o.useState)(!1),N=Object(s.a)(y,2),w=N[0],k=N[1],E=Object(o.useState)(""),S=Object(s.a)(E,2),C=S[0],F=S[1],M=Object(o.useState)(""),T=Object(s.a)(M,2),I=T[0],R=T[1],J=function(){var e=Object(n.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://backfinalimplementacion.herokuapp.com/factorial/factorial/".concat(parseInt(I))).then((function(e){k(!1),v(!0),c(e.data)})).catch((function(e){F("Error de red"),k(!0),v(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)(o.Fragment,{children:Object(g.jsxs)(i.a,{children:[Object(g.jsxs)(l.a,{className:"flex-md-row flex-column align-md-items-center align-items-start border-bottom",children:[Object(g.jsx)(p.a,{tag:"h4",children:"Factorial de un n\xfamero"}),Object(g.jsx)("div",{className:"d-flex mt-md-0 mt-1"})]}),Object(g.jsxs)(O.a,{children:[Object(g.jsx)("p",{}),Object(g.jsx)("h5",{children:"Digite el n\xfamero para calcular su factorial:"}),Object(g.jsxs)(d.a,{children:[Object(g.jsx)(j.a,{children:Object(g.jsx)(u.a,{id:"input",placeholder:"Factorial",style:{width:"100%"},onChange:function(e){R(e.target.value.replace(",","."))},children:" "})}),Object(g.jsx)(j.a,{children:Object(g.jsx)(b.a,{id:"button",color:"primary",size:"md",onClick:function(){isNaN(I)?(F("No es n\xfamero"),k(!0),v(!1)):parseFloat(I)%1!==0?(F("No es entero"),k(!0),v(!1)):parseInt(I)>1e3?(F("Es muy grande el n\xfamero"),k(!0),v(!1)):parseInt(I)<1?(F("Valor muy peque\xf1o"),k(!0),v(!1)):(F(""),k(!1),J())},children:" Calcular"})})]}),Object(g.jsx)("p",{}),w?Object(g.jsxs)("h5",{className:"text-danger",children:["Error: ",C]}):"",f?Object(g.jsxs)("div",{children:[Object(g.jsx)("h5",{className:"text-success",children:"El factorial es: "}),Object(g.jsx)("h5",{id:"response",children:a})]}):""]})]})})}},467:function(e,t,a){"use strict";var c=a(14),r=a(20),n=a(0),s=a.n(n),o=a(5),i=a.n(o),l=a(58),d=a.n(l),j=a(80),u={tag:j.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b=function(e){var t=e.className,a=e.cssModule,n=e.color,o=e.body,i=e.inverse,l=e.outline,u=e.tag,b=e.innerRef,h=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(j.mapToCssModules)(d()(t,"card",!!i&&"text-white",!!o&&"card-body",!!n&&(l?"border":"bg")+"-"+n),a);return s.a.createElement(u,Object(c.a)({},h,{className:p,ref:b}))};b.propTypes=u,b.defaultProps={tag:"div"},t.a=b}}]);
//# sourceMappingURL=176.89af52a1.chunk.js.map