(this["webpackJsonpreact-port"]=this["webpackJsonpreact-port"]||[]).push([[0],[,function(e,t,a){e.exports=a.p+"static/media/station-full-min.f364adcb.jpg"},,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Workout Tracker","subtitle":"MERN Full Stack","repoUrl":"https://github.com/aelisker/workout-tracker","deployedUrl":"https://adj-workout-tracker.herokuapp.com/","imageFileName":"workout-min.jpg"},{"id":2,"name":"Tech-Stop-N-Shop","subtitle":"Node MVC Application w/ Passport Auth","repoUrl":"https://github.com/DHernandez24e/tech-stop-n-shop","deployedUrl":"https://tech-stop-n-shop.herokuapp.com/","imageFileName":"tech-min.jpg"},{"id":3,"name":"Budget Tracker","subtitle":"Progressive Web App","repoUrl":"https://github.com/aelisker/budget-tracker-PWA","deployedUrl":"https://tranquil-waters-11401.herokuapp.com/","imageFileName":"budget-min.jpg"},{"id":4,"name":"Netflix Movie Picker","subtitle":"JS w/ API calls, Foundation","repoUrl":"https://github.com/aelisker/netflix-movie-picker","deployedUrl":"","imageFileName":"netflix-min.jpg"},{"id":5,"name":"Tech-Blog","subtitle":"MVC Application with Sequelize ORM","repoUrl":"https://github.com/aelisker/tech-blog","deployedUrl":"https://powerful-lowlands-50720.herokuapp.com/","imageFileName":"tech-blog-min.jpg"},{"id":6,"name":"Social Network API","subtitle":"RESTful API w/ MongoDB","repoUrl":"https://github.com/aelisker/social-network-api","deployedUrl":"","imageFileName":"social-api-min.jpg"}]')},,function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},function(e,t,a){var n={"./budget-min.jpg":18,"./netflix-min.jpg":19,"./social-api-min.jpg":20,"./station-full-min.jpg":1,"./tech-blog-min.jpg":21,"./tech-min.jpg":22,"./weather-min.jpg":23,"./workout-min.jpg":24};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=17},function(e,t,a){e.exports=a.p+"static/media/budget-min.c7f48f74.jpg"},function(e,t,a){e.exports=a.p+"static/media/netflix-min.aa52e2b9.jpg"},function(e,t,a){e.exports=a.p+"static/media/social-api-min.f7b48471.jpg"},function(e,t,a){e.exports=a.p+"static/media/tech-blog-min.3c9967cb.jpg"},function(e,t,a){e.exports=a.p+"static/media/tech-min.bffbc21d.jpg"},function(e,t,a){e.exports=a.p+"static/media/weather-min.9d01c9a6.jpg"},function(e,t,a){e.exports=a.p+"static/media/workout-min.a4f9065c.jpg"},function(e,t){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),i=(a(16),a(10)),c=a(1),s=a.n(c);var u=function(e){return r.a.createElement("header",{style:{backgroundImage:"url(".concat(s.a,")")}},r.a.createElement("h1",null,"My Portfolio"),r.a.createElement("nav",null,r.a.createElement("ul",null,[{name:"About Me",id:"About"},{name:"My Work",id:"Work"},{name:"Skills",id:"Resume"}].map((function(t){var a=t.name,n=t.id;return r.a.createElement("li",{key:n,className:e.currentPage===n?"header-active":void 0},r.a.createElement("a",{href:"#"+n.toLowerCase(),onClick:function(){return e.handlePageChange(n)},className:e.currentPage===n?"active-category":void 0},a))})))))};var m=function(){return r.a.createElement("section",{className:"hero",style:{backgroundImage:"url(".concat(s.a,")")}},r.a.createElement("div",{className:"hero-subtitle"},r.a.createElement("h2",null,"Just the Beginning")))};var p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement("section",{id:"about",className:"about"},r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h2",null,"About Me")),r.a.createElement("div",{className:"content flex-row"},r.a.createElement("p",{className:"about-text"},"Systems Support Engineer and Full Stack Developer with a demonstrated history of working in the Information Technology industry. Graduate of the Coding Booting UC Berkeley Extension. Business Administration with a Bachelor of Science (BS) focused in Minor in Computer and Information Technology from University of Oregon.")))))},d=a(2),h=a(3),f=a(6),g=a(4),E=a(5),v=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("h3",null,r.a.createElement(E.c,null))}}]),a}(r.a.Component),b=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("h3",null,r.a.createElement(E.a,null))}}]),a}(r.a.Component);var k=function(e){var t=e.name,n=e.subtitle,l=e.repoUrl,o=e.deployedUrl,i=e.imageFileName;return r.a.createElement("div",{className:"service-grid-item",style:{backgroundImage:"url(".concat(a(17)("./".concat(i)),")"),zIndex:0}},r.a.createElement("a",{href:l,className:"react-icon work-icon"},r.a.createElement(v,null)),o.length>0?r.a.createElement("a",{href:o,className:"react-icon work-icon"},r.a.createElement(b,null)):"",r.a.createElement("div",{className:"grid-text active"},r.a.createElement("h3",null," ",t),r.a.createElement("h4",null," ",n)))},w=a(9);var N=function(){return r.a.createElement("section",{id:"work",className:"about"},r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h2",null,"My Work")),r.a.createElement("div",{className:"content service-grid-wrapper"},r.a.createElement("div",{className:"service-grid-container"},w.map((function(e){return r.a.createElement(k,{key:e.id,name:e.name,subtitle:e.subtitle,deployedUrl:e.deployedUrl,repoUrl:e.repoUrl,imageFileName:e.imageFileName})}))))))};var y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{id:"about",className:"about"},r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h2",null,"My Skills")),r.a.createElement("div",{className:"content flex-row"},r.a.createElement("div",{className:"mern"},r.a.createElement("p",{id:"skill-writeup"},"Currently learning web development with a focus on the MERN stack. Starting with vanilla HTML and CSS, I've worked my way up from performing basic API GET requests to building my own RESTful API. Feel free to ",r.a.createElement("a",{href:"Aaron_Lisker_Resume.PDF",download:!0},"download my resume"),"."),r.a.createElement("h1",{className:"mern-label"},"Front End Technologies"),r.a.createElement("ul",{className:"skill-list"},r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"Javascript / JQuery"),r.a.createElement("li",null,"React.js"),r.a.createElement("li",null,"Libraries like Bootstrap, Foundation")),r.a.createElement("h1",{className:"mern-label"},"Server Side"),r.a.createElement("ul",{className:"skill-list"},r.a.createElement("li",null,"Node.js"),r.a.createElement("li",null,"Express.js"),r.a.createElement("li",null,"Apollo Server"),r.a.createElement("li",null,"Hashed authentication through BCrypt, Passport.js")),r.a.createElement("h1",{className:"mern-label"},"Data"),r.a.createElement("ul",{className:"skill-list"},r.a.createElement("li",null,"MySQL and Sequelize ORM"),r.a.createElement("li",null,"MongoDB and Mongoose ORM"),r.a.createElement("li",null,"JSON and JSON Web Tokens")),r.a.createElement("h1",{className:"mern-label"},"Browser Technology"),r.a.createElement("ul",{className:"skill-list"},r.a.createElement("li",null,"Browser APIs like LocalStorage, Session Storage, IndexedDB"),r.a.createElement("li",null,"Service Workers, manifest.json"),r.a.createElement("li",null,"Progressive Web Apps")))))))};a(25);var j=function(){var e=Object(n.useState)("About"),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"content-wrap"},r.a.createElement(u,{currentPage:a,handlePageChange:l}),r.a.createElement("div",null,function(){switch(a){case"About":return r.a.createElement(p,null);case"Work":return r.a.createElement(N,null);case"Resume":return r.a.createElement(y,null);default:return r.a.createElement(p,null)}}()))},S=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("h3",null,r.a.createElement(E.c,null))}}]),a}(r.a.Component),O=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("h3",null,r.a.createElement(E.d,null))}}]),a}(r.a.Component),x=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("h3",null,r.a.createElement(E.b,null))}}]),a}(r.a.Component);var A=function(){return r.a.createElement("footer",{className:"page-footer",style:{backgroundImage:"url(".concat(s.a,")")}},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/aelisker",className:"hover-item react-icon"},r.a.createElement(S,null))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/aelisker/",className:"hover-item react-icon"},r.a.createElement(O,null))),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:alisker@protonmail.com",className:"hover-item react-icon"},r.a.createElement(x,null))))))};a(26);var U=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(A,null))},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-port",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-port","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}],[[11,1,2]]]);
//# sourceMappingURL=main.bbd3cc91.chunk.js.map