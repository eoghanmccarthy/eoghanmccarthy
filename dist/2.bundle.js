(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{100:function(e,n,t){var r=t(101);e.exports=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){r(e,n,t[n])})}return e}},101:function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},102:function(e,n,t){"use strict";t.r(n);var r=t(100),a=t.n(r),c=t(18),i=t.n(c),s=t(32),o=t.n(s),u=t(13),l=t.n(u),f=t(0),m=t.n(f),p=t(15),v=t(40);n.default=function(e){var n=e.data,t=e.initialIndex,r=Object(f.useState)(t),c=l()(r,2),s=c[0],u=c[1],b=Object(f.useState)(""),d=l()(b,2),w=d[0],x=d[1],_=function(){var e=o()(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("next"!==t){e.next=4;break}return e.next=3,x(t);case 3:u(s+1>=n.length?0:s+1);case 4:if("prev"!==t){e.next=8;break}return e.next=7,x(t);case 7:u(s-1<0?n.length-1:s-1);case 8:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}();return m.a.createElement("div",{className:"lightbox__viewer"},m.a.createElement("div",{className:"viewer__nav"},m.a.createElement(v.a,{addClass:"nav__prev",onClick:function(){return _("prev")}}),m.a.createElement(v.a,{addClass:"nav__next",onClick:function(){return _("next")}})),m.a.createElement("div",{className:"list__slides"},m.a.createElement(p.a,{native:!0,unique:!0,initial:null,items:s,from:{transform:"translateX(".concat("next"===w?100:-100,"%)")},enter:{transform:"translateX(0%)"},leave:{transform:"translateX(".concat("next"===w?-100:100,"%)")}},function(e){return function(t){return function(e){return n.map(function(n,t){return m.a.createElement(p.b.div,{key:t,style:a()({},e,{backgroundImage:"url(".concat(n.src,")")}),className:"slide"},m.a.createElement("span",{className:"slide__caption"},n.label))})}(t)[e]}})))}}}]);
//# sourceMappingURL=2.bundle.js.map