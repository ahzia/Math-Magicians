(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),l=n(5),o=n.n(l),i=(n(11),n(12),n(6)),s=n(1),r=n(4),j=n.n(r);function b(t,e,n){var a=j()(t),c=j()(e);if("+"===n)return a.plus(c).toString();if("-"===n)return a.minus(c).toString();if("x"===n)return a.times(c).toString();if("\xf7"===n)try{return a.div(c).toString()}catch(l){return"Can't divide by 0."}if("%"===n)return a.mod(c).toString();throw Error("Unknown operation '".concat(n,"'"))}var x=n(0),d=function(t){var e=function(e){var n=e.target.id;t.handleClick(n)},n="btn-rectingle d-flex justify-content-center align-items-center border ".concat(t.className);return Object(x.jsx)("div",{id:t.buttonName,onClick:e,onKeyDown:e,role:"button",className:n,tabIndex:0,children:t.buttonName})},u=function(){var t=Object(a.useState)({total:null,next:null,operation:null}),e=Object(i.a)(t,2),n=e[0],c=e[1],l=function(t){var e=function(t,e){return"AC"===e?{total:null,next:null,operation:null}:e.match(/[0-9]+/)?"0"===e&&"0"===t.next?{}:t.operation?t.next?Object(s.a)(Object(s.a)({},t),{},{next:t.next+e}):Object(s.a)(Object(s.a)({},t),{},{next:e}):t.next?{next:t.next+e,total:null}:{next:e,total:null}:"."===e?t.next?t.next.includes(".")?Object(s.a)({},t):Object(s.a)(Object(s.a)({},t),{},{next:"".concat(t.next,".")}):t.operation?{next:"0."}:t.total?t.total.includes(".")?{}:{total:"".concat(t.total,".")}:{total:"0."}:"="===e?t.next&&t.operation?{total:b(t.total,t.next,t.operation),next:null,operation:null}:{}:"+/-"===e?t.next?Object(s.a)(Object(s.a)({},t),{},{next:(-1*parseFloat(t.next)).toString()}):t.total?Object(s.a)(Object(s.a)({},t),{},{total:(-1*parseFloat(t.total)).toString()}):{}:t.next||!t.total||t.operation?t.operation?t.total&&!t.next?Object(s.a)(Object(s.a)({},t),{},{operation:e}):{total:b(t.total,t.next,t.operation),next:null,operation:e}:t.next?{total:t.next,next:null,operation:e}:{operation:e}:Object(s.a)(Object(s.a)({},t),{},{operation:e})}(n,t);c(e)};return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"calculator bg-second d-flex flex-column",children:[Object(x.jsxs)("div",{className:"bg-first viewer d-flex",children:[Object(x.jsx)("div",{className:"col-2 p-3",children:Object(x.jsx)("p",{children:n.operation})}),Object(x.jsxs)("div",{className:"col-10 d-flex flex-column align-items-end justify-content-between p-3",children:[Object(x.jsx)("p",{children:n.total}),Object(x.jsx)("p",{children:n.next})]})]}),Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)(d,{buttonName:"AC",handleClick:l}),Object(x.jsx)(d,{buttonName:"+/-",handleClick:l}),Object(x.jsx)(d,{buttonName:"%",handleClick:l}),Object(x.jsx)(d,{buttonName:"\xf7",handleClick:l,className:"bg-temp"})]}),Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)(d,{buttonName:"7",handleClick:l}),Object(x.jsx)(d,{buttonName:"8",handleClick:l}),Object(x.jsx)(d,{buttonName:"9",handleClick:l}),Object(x.jsx)(d,{buttonName:"x",handleClick:l,className:"bg-temp"})]}),Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)(d,{buttonName:"4",handleClick:l}),Object(x.jsx)(d,{buttonName:"5",handleClick:l}),Object(x.jsx)(d,{buttonName:"6",handleClick:l}),Object(x.jsx)(d,{buttonName:"-",handleClick:l,className:"bg-temp"})]}),Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)(d,{buttonName:"1",handleClick:l}),Object(x.jsx)(d,{buttonName:"2",handleClick:l}),Object(x.jsx)(d,{buttonName:"3",handleClick:l}),Object(x.jsx)(d,{buttonName:"+",handleClick:l,className:"bg-temp"})]}),Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)(d,{buttonName:"0",handleClick:l,className:"btn-zero"}),Object(x.jsx)(d,{buttonName:".",handleClick:l}),Object(x.jsx)(d,{buttonName:"=",handleClick:l,className:"bg-temp"})]})]})})};var m=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("header",{className:"App-header",children:Object(x.jsx)(u,{})})})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,l=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),l(t),o(t)}))};n(14);o.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(m,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.8bc61d51.chunk.js.map