(this["webpackJsonpreact-youtube-mauricio"]=this["webpackJsonpreact-youtube-mauricio"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),u=n.n(c),i=n(1),l=n(9),o=function(e){var t=e.setSearch,n=Object(a.useState)(""),c=Object(i.a)(n,2),u=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.trim().length>2&&(t((function(e){return[u].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{className:"form-control",type:"text",value:u,onChange:function(e){return function(e){o(e.target.value)}(e)}}))},s=n(8),m=n(2),f=n.n(m),p=n(5),d=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a,r,c,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"AIzaSyDEoll5nJ_PLZwCUlai6EnV1Nb1y0T0qlk",n="https://www.googleapis.com/youtube/v3/search?key=".concat("AIzaSyDEoll5nJ_PLZwCUlai6EnV1Nb1y0T0qlk","&part=snippet&q=").concat(t),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,c=r.items,u=c.map((function(e){return{title:e.snippet.title,urlVideo:e.id.videoId,url:e.snippet.thumbnails.high.url}})),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a,r,c,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://youtube-mauricio.herokuapp.com/api/info?url=https://www.youtube.com/watch?v=".concat(t,"&flatten=True"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.videos,u=c.map((function(e){return{url:e.url}})),e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=(n(16),function(e){var t=function(e){var t=Object(a.useState)({videoUrl:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){h(e).then((function(e){c({videoUrl:e,loading:!1})})).catch((function(){c({loading:!0})}))}),[e]),r}(e.url),n=t.videoUrl,c=t.loading;return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Loading..."),r.a.createElement("div",{className:"container-fluid"},n.map((function(e,t){return r.a.createElement("video",{controls:!0,className:"video",key:t},r.a.createElement("source",{src:e.url,type:"video/mp4"}),r.a.createElement("source",{src:e.url,type:"video/ogg"}))}))))}),E=function(e){var t=e.title,n=e.url,c=e.urlVideo,u=Object(a.useState)(""),l=Object(i.a)(u,2),o=l[0],s=l[1];return r.a.createElement("div",{className:"animate__animated animate__fadeIn"},o&&r.a.createElement(v,{url:c}),r.a.createElement("hr",null),r.a.createElement("h2",null,t),r.a.createElement("img",{onClick:function(){s(c)},className:"img-thumbnail",name:c,src:n,alt:t}))},b=function(e){var t=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){d(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(e.nameSearch),n=t.data,c=t.loading;return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Loading..."),r.a.createElement("div",null,n.map((function(e,t){return r.a.createElement(E,Object.assign({key:t},e))}))))},g=(n(17),function(e){var t=e.defaultSearch,n=void 0===t?[]:t,c=Object(a.useState)(n),u=Object(i.a)(c,2),l=u[0],s=u[1];return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,"Youtube Mauricio"),r.a.createElement("hr",null),r.a.createElement(o,{setSearch:s}),r.a.createElement("ol",null,l.map((function(e){return r.a.createElement(b,{key:e,nameSearch:e})}))))});u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.fe80a65b.chunk.js.map