(this["webpackJsonphappy-find-square-game"]=this["webpackJsonphappy-find-square-game"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(12)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(3),r=t.n(o),i=(t(9),t(10),t(1));t(11);function l(){var e=Object(a.useState)(0),n=Object(i.a)(e,2),t=n[0],o=n[1],r=Object(a.useState)(0),l=Object(i.a)(r,2),s=l[0],u=l[1],m=Array(9).fill(0);function f(){u(Math.floor(9*Math.random()))}return Object(a.useEffect)((function(){f()}),[]),c.a.createElement("div",{className:"container"},c.a.createElement("p",null,c.a.createElement("span",null,"\u5f53\u524d\u5f97\u5206:"),c.a.createElement("span",{className:"score"},t)),c.a.createElement("div",{className:"cell-wrapper"},m.map((function(e,n){return c.a.createElement("button",{key:n,className:"cell ".concat(n===s?"target":""),onClick:function(){return function(e){e===s?(o(t+10),f()):o(t-20)}(n)}})}))))}var s=function(){return c.a.createElement(l,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.2829814d.chunk.js.map