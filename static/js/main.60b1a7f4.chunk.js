(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{24:function(t,e,n){},26:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),l=n(16),s=n.n(l),i=(n(24),n(10)),o=n(2),r=n(0),j=function(){return Object(r.jsx)("section",{className:"d-flex justify-content-center m-5",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})},x=function(){return Object(r.jsx)("section",{className:"d-flex justify-content-center my-5",children:Object(r.jsx)("h3",{children:"Without mathematics, there\u2019s nothing you can do. Everything around you is mathematics. Everything around you is numbers."})})},b=n(19),d=n(4),u=n(13),h=n.n(u);function m(t,e,n){var c=h()(t),a=h()(e);if("+"===n)return c.plus(a).toString();if("-"===n)return c.minus(a).toString();if("x"===n)return c.times(a).toString();if("\xf7"===n)try{return c.div(a).toString()}catch(l){return"Can't divide by 0."}if("%"===n)return c.mod(a).toString();throw Error("Unknown operation '".concat(n,"'"))}var O=function(t){return null===t.caculatorObject.total&&null===t.caculatorObject.next?Object(r.jsx)("div",{className:"bg-first viewer d-flex",children:Object(r.jsx)("div",{className:"col-12 d-flex flex-column align-items-end justify-content-center p-3",children:Object(r.jsx)("p",{children:"0"})})}):Object(r.jsxs)("div",{className:"bg-first viewer d-flex",children:[Object(r.jsx)("div",{className:"col-2 p-3",children:Object(r.jsx)("p",{children:t.caculatorObject.operation})}),Object(r.jsxs)("div",{className:"col-10 d-flex flex-column align-items-end justify-content-between p-3",children:[Object(r.jsx)("p",{children:t.caculatorObject.total}),Object(r.jsx)("p",{children:t.caculatorObject.next})]})]})},f=function(t){var e=function(e){var n=e.target.id;t.handleClick(n)},n="btn-rectingle d-flex justify-content-center align-items-center text-first ".concat(t.className);return Object(r.jsx)("div",{id:t.buttonName,onClick:e,onKeyDown:e,role:"button",className:n,tabIndex:0,children:t.buttonName})},p=function(){var t=Object(c.useState)({total:null,next:null,operation:null}),e=Object(b.a)(t,2),n=e[0],a=e[1],l=function(t){var e=function(t,e){return"AC"===e?{total:null,next:null,operation:null}:e.match(/[0-9]+/)?"0"===e&&"0"===t.next?{}:t.operation?t.next?Object(d.a)(Object(d.a)({},t),{},{next:t.next+e}):Object(d.a)(Object(d.a)({},t),{},{next:e}):t.next?{next:t.next+e,total:null}:{next:e,total:null}:"."===e?t.next?t.next.includes(".")?Object(d.a)({},t):Object(d.a)(Object(d.a)({},t),{},{next:"".concat(t.next,".")}):t.operation?{next:"0."}:t.total?t.total.includes(".")?{}:{total:"".concat(t.total,".")}:{total:"0."}:"="===e?t.next&&t.operation?{total:m(t.total,t.next,t.operation),next:null,operation:null}:{}:"+/-"===e?t.next?Object(d.a)(Object(d.a)({},t),{},{next:(-1*parseFloat(t.next)).toString()}):t.total?Object(d.a)(Object(d.a)({},t),{},{total:(-1*parseFloat(t.total)).toString()}):{}:t.next||!t.total||t.operation?t.operation?t.total&&!t.next?Object(d.a)(Object(d.a)({},t),{},{operation:e}):{total:m(t.total,t.next,t.operation),next:null,operation:e}:t.next?{total:t.next,next:null,operation:e}:{operation:e}:Object(d.a)(Object(d.a)({},t),{},{operation:e})}(n,t);a(e)};return Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"calculator bg-second d-flex flex-column",children:[Object(r.jsx)(O,{caculatorObject:n}),Object(r.jsxs)("div",{className:"d-flex",children:[Object(r.jsx)(f,{buttonName:"AC",handleClick:l,className:"text-light"}),Object(r.jsx)(f,{buttonName:"+/-",handleClick:l,className:"text-light"}),Object(r.jsx)(f,{buttonName:"%",handleClick:l,className:"text-light"}),Object(r.jsx)(f,{buttonName:"\xf7",handleClick:l,className:"text-light"})]}),Object(r.jsxs)("div",{className:"d-flex",children:[Object(r.jsx)(f,{buttonName:"7",handleClick:l}),Object(r.jsx)(f,{buttonName:"8",handleClick:l}),Object(r.jsx)(f,{buttonName:"9",handleClick:l}),Object(r.jsx)(f,{buttonName:"x",handleClick:l,className:"text-light"})]}),Object(r.jsxs)("div",{className:"d-flex",children:[Object(r.jsx)(f,{buttonName:"4",handleClick:l}),Object(r.jsx)(f,{buttonName:"5",handleClick:l}),Object(r.jsx)(f,{buttonName:"6",handleClick:l}),Object(r.jsx)(f,{buttonName:"-",handleClick:l,className:"text-light"})]}),Object(r.jsxs)("div",{className:"d-flex",children:[Object(r.jsx)(f,{buttonName:"1",handleClick:l}),Object(r.jsx)(f,{buttonName:"2",handleClick:l}),Object(r.jsx)(f,{buttonName:"3",handleClick:l}),Object(r.jsx)(f,{buttonName:"+",handleClick:l,className:"text-light"})]}),Object(r.jsxs)("div",{className:"d-flex",children:[Object(r.jsx)(f,{buttonName:"0",handleClick:l,className:"btn-zero"}),Object(r.jsx)(f,{buttonName:".",handleClick:l}),Object(r.jsx)(f,{buttonName:"=",handleClick:l,className:"text-light"})]})]})})},N=function(){return Object(r.jsxs)("section",{className:"d-flex my-5 align-items-center",children:[Object(r.jsx)("h3",{className:"text-first",children:"Lets do Some Math!"}),Object(r.jsx)(p,{})]})};n(26);var g=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(i.a,{children:[Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("h3",{className:"text-first",children:"Math Magicianss"}),Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{to:"/",className:"text-first",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{to:"/quote",className:"text-first",children:"Quote"})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{to:"/calculator",className:"text-first",children:"Calculator"})})]})})]}),Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{path:"/calculator",children:Object(r.jsx)(N,{})}),Object(r.jsx)(o.a,{path:"/quote",children:Object(r.jsx)(x,{})}),Object(r.jsx)(o.a,{path:"/",children:Object(r.jsx)(j,{})})]})]})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,l=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),l(t),s(t)}))};n(32);s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),v()}},[[33,1,2]]]);
//# sourceMappingURL=main.60b1a7f4.chunk.js.map