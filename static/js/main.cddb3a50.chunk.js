(this["webpackJsonpvoz-google"]=this["webpackJsonpvoz-google"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/voice.6702341d.png"},function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),r=a.n(c),l=(a(10),a(1)),i=(a(11),a(4)),s=a.n(i);var u=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),u=i[0],m=i[1];return o.a.createElement("div",{className:"App"},o.a.createElement("img",{src:s.a,alt:"voz do google",className:"voice-image"}),o.a.createElement("h3",null,"Voz do Google"),o.a.createElement("input",{placeholder:"Digite alguma texto",value:u,onChange:function(e){return m(e.target.value)}}),o.a.createElement("button",{onClick:function(){fetch("http://127.0.0.1:5000/create?text=".concat(u)).then((function(e){e.json().then((function(e){c("data:audio/mp3;base64,"+e.text.replace(/\s/g,"").trim())}))}))}},"Gerar \xc1udio"),a?o.a.createElement("div",null,o.a.createElement("audio",{controls:!0},o.a.createElement("source",{src:a,type:"audio/mpeg"})),o.a.createElement("div",{className:"download"},o.a.createElement("a",{href:a,target:"_blank",download:!0},"Click to download"))):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.cddb3a50.chunk.js.map