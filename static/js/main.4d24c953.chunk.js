(this.webpackJsonpportafolio=this.webpackJsonpportafolio||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,i,t){},,,,,,function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){"use strict";t.r(i);var c=t(1),a=t.n(c),s=t(8),n=t.n(s),l=t(3),r=(t(16),t(42)),d=t(43),o=t(44),m=t(0);function p(e){var i=e.menuOpen,t=e.setMenuOpen,c="target";return Object(m.jsx)("div",{className:"topbar "+(i&&"active"),children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)("h1",{children:"Contact"}),Object(m.jsx)("div",{className:"itemContainer",children:Object(m.jsxs)("a",{href:"https://www.linkedin.com/in/heredialucasfran/",target:c,children:[Object(m.jsx)(r.a,{className:"icon"}),Object(m.jsx)("p",{children:"LinkedIn"})]})}),Object(m.jsx)("div",{className:"itemContainer",children:Object(m.jsxs)("a",{href:"https://github.com/heredialucas",target:c,children:[Object(m.jsx)(d.a,{className:"icon"}),Object(m.jsx)("p",{children:"GitHub"})]})}),Object(m.jsx)("div",{className:"itemContainer",children:Object(m.jsxs)("a",{href:"https://drive.google.com/file/d/1kOeaCDoPT68iTTJ4BVBYUO2pHx7ZZ5a8/view?usp=sharing",target:c,children:[Object(m.jsx)(o.a,{className:"icon"}),Object(m.jsx)("p",{children:"C V"})]})})]}),Object(m.jsx)("div",{className:"right",children:Object(m.jsxs)("div",{className:"hamburger",onClick:function(){return t(!i)},children:[Object(m.jsx)("span",{className:"line1"}),Object(m.jsx)("span",{className:"line2"}),Object(m.jsx)("span",{className:"line3"})]})})]})})}t(22);var j=t(10);function h(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){Object(j.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:70,strings:["Heredia Lucas","Full Stack"]})}),[]),Object(m.jsxs)("div",{className:"intro",id:"intro",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsx)("div",{className:"imgContainer",children:Object(m.jsxs)("h1",{children:["Hi! How are you?",Object(m.jsx)("br",{})," I'm ",Object(m.jsx)("span",{ref:e})]})})}),Object(m.jsx)("div",{className:"right",children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("h2",{children:"About me"}),Object(m.jsx)("p",{children:"I'm someone curious and passionate about programming, constantly learning and trying to improve one day at a time. I hope you like this project and we can be in touch in the future"})]})})]})}t(23);function b(e){var i=e.id,t=e.title,c=e.active,a=e.setSelected;return Object(m.jsx)("li",{className:c?"portfolioList active":"portfolioList",onClick:function(){return a(i)},children:t})}var u=t.p+"static/media/climaapp.ef64c386.png",g=t.p+"static/media/pelisapp.cacf555b.png",O=t.p+"static/media/pokemonapp.5c2283c1.png",f=t.p+"static/media/tempo.60cdf2c5.png",x=t.p+"static/media/contador.d85153ed.png",v=t.p+"static/media/ecom.ab5dad56.png",k=t.p+"static/media/crudjs.e0561ee3.png",N=t.p+"static/media/listareact.81c49523.png",A=t.p+"static/media/admin.438f68d2.jpeg",C=t.p+"static/media/portafolio.3d364f11.png",S=[{id:1,title:"Weather App",img:u,link:"https://heredialucas.github.io/Clima-app"},{id:2,title:"Pelis App",img:g,link:"https://heredialucas.github.io/Pelis-App"},{id:3,title:"Ecommerce App",img:v,link:"https://client-ecomerce-8v2op6u5a-neriheredia.vercel.app/"},{id:4,title:"Pokemon App",img:O,link:"https://pokemon-front-lucas.herokuapp.com"},{id:5,title:"Admin App",img:A,link:"https://admin-ecomerce-789fjvs1b-neriheredia.vercel.app/login"},{id:5,title:"Portafolio App",img:C,link:"https://heredialucas.github.io/Portafolio/"}],w=[{id:1,title:"Pokemon App",img:O,link:"https://pokemon-front-lucas.herokuapp.com"},{id:2,title:"Weather App",img:u,link:"https://heredialucas.github.io/Clima-app"},{id:3,title:"Pelis App",img:g,link:"https://heredialucas.github.io/Pelis-App"},{id:4,title:"Contador App",img:x,link:"https://heredialucas.github.io/AppReact"},{id:5,title:"Temporizador App",img:f,link:"https://heredialucas.github.io/Tempo"},{id:6,title:"Lista React App",img:N,link:"https://heredialucas.github.io/ListaReact"},{id:7,title:"Portafolio App",img:C,link:"https://heredialucas.github.io/Portafolio/"}],P=[{id:1,title:"Contador App",img:x,link:"https://heredialucas.github.io/AppReact"},{id:2,title:"Temporizador App",img:f,link:"https://heredialucas.github.io/Tempo"},{id:3,title:"Lista React App",img:N,link:"https://heredialucas.github.io/ListaReact"},{id:4,title:"Crud JS App",img:k,link:"https://heredialucas.github.io/CRUD"}];t(24);function y(){var e=Object(c.useState)("web"),i=Object(l.a)(e,2),t=i[0],a=i[1],s=Object(c.useState)([]),n=Object(l.a)(s,2),r=n[0],d=n[1];return Object(c.useEffect)((function(){switch(t){case"web":d(S);break;case"mobile":d(w);break;case"bassic":d(P);break;default:d(w)}}),[t]),Object(m.jsx)("div",{className:"portfolio",id:"portfolio",children:Object(m.jsxs)("div",{className:"containerAll",children:[Object(m.jsx)("ul",{children:[{id:"web",title:"Web "},{id:"mobile",title:"Mobile "},{id:"bassic",title:"Bassic "}].map((function(e){return Object(m.jsx)(b,{title:e.title,active:t===e.id,setSelected:a,id:e.id})}))}),Object(m.jsx)("div",{className:"container",children:r.map((function(e){return Object(m.jsx)("div",{className:"item",children:Object(m.jsxs)("a",{href:"".concat(e.link),target:"_blank",children:[Object(m.jsx)("img",{src:e.img,alt:""}),Object(m.jsxs)("h3",{children:[" ",e.title," "]})]})},e.title)}))})]})})}t(25);var L=t.p+"static/media/iconhtml.8c11e1a8.svg",M=t.p+"static/media/iconcss.b3c0acbf.svg",R=t.p+"static/media/iconjs.b13c588f.svg",T=t.p+"static/media/icongit.45c85edf.svg",H=t.p+"static/media/github1.b9b1ed7e.svg",I=t.p+"static/media/iconterminal.e9c5edf5.svg",B=t.p+"static/media/iconvsc.0a6aa04c.svg",D=t.p+"static/media/bootstrap.333f5e43.svg",E=t.p+"static/media/mui.9f1d0f08.svg",J=t.p+"static/media/less.d2230708.svg",q=t.p+"static/media/sass.8ec16938.svg",z=t.p+"static/media/react.7098e271.svg",W=t.p+"static/media/nodejs.18fe5d93.svg",G=t.p+"static/media/redux.0093fdee.svg",U=t.p+"static/media/wordpress.b1e0e09c.svg",V=t.p+"static/media/express.66ff7b77.svg",Q=t.p+"static/media/sql.939306f3.svg",Z=t.p+"static/media/mysql.4e6fc768.svg",F=t.p+"static/media/mongodb.c89dd811.svg",Y=t.p+"static/media/sequelize.49ad3c7d.svg";function _(){var e=[{id:1,name:"Html5",img:L},{id:2,name:"Css3",img:M},{id:3,name:"JavaScript",img:R},{id:4,name:"Git",img:T},{id:5,name:"Github",img:H},{id:6,name:"Terminal",img:I},{id:7,name:"Visual Studio Code",img:B},{id:8,name:"Bootstrap",img:D},{id:9,name:"Material UI",img:E},{id:10,name:"Less",img:J},{id:11,name:"Sass",img:q},{id:12,name:"React",img:z},{id:13,name:"NodeJS",img:W},{id:14,name:"Redux",img:G},{id:15,name:"Wordpress",img:U},{id:16,name:"Express",img:V},{id:17,name:"SQL",img:Q},{id:18,name:"MySQL",img:Z},{id:19,name:"MongoDB",img:F},{id:20,name:"Sequelize",img:Y}];return Object(m.jsx)("div",{className:"tecnologias",id:"tecnologias",children:Object(m.jsx)("div",{className:"container",children:e.map((function(e){return Object(m.jsx)("div",{className:"item",children:Object(m.jsx)("img",{title:e.name,class:"img",src:e.img,alt:e.name})},e.id)}))})})}t(26);function K(){var e=Object(c.useState)(!1),i=Object(l.a)(e,2),t=i[0],a=i[1];return Object(m.jsxs)("div",{className:"contact",id:"contact",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsx)("img",{src:"assets/shake.svg",alt:""})}),Object(m.jsxs)("div",{className:"right",children:[Object(m.jsx)("h2",{children:"Contact."}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(!0)},children:[Object(m.jsx)("input",{type:"text",placeholder:"Email"}),Object(m.jsx)("textarea",{placeholder:"Message"}),Object(m.jsx)("button",{type:"submit",children:"Send"}),t&&Object(m.jsx)("span",{children:"Thanks, I'll reply ASAP :)"})]})]})]})}t(27);function X(e){var i=e.menuOpen,t=e.setMenuOpen;return Object(m.jsxs)("div",{className:"menu "+(i&&"active"),children:[Object(m.jsx)("ul",{children:Object(m.jsx)("li",{onClick:function(){return t(!1)},children:Object(m.jsx)("a",{href:"#intro",children:"Home"})})}),Object(m.jsx)("ul",{children:Object(m.jsx)("li",{onClick:function(){return t(!1)},children:Object(m.jsx)("a",{href:"#portfolio",children:"Portfolio"})})}),Object(m.jsx)("ul",{children:Object(m.jsx)("li",{onClick:function(){return t(!1)},children:Object(m.jsx)("a",{href:"#tecnologias",children:"Dev Tools"})})}),Object(m.jsx)("ul",{children:Object(m.jsx)("li",{onClick:function(){return t(!1)},children:Object(m.jsx)("a",{href:"#contact",children:"Contact"})})})]})}t(28);var $=function(){var e=Object(c.useState)(!1),i=Object(l.a)(e,2),t=i[0],a=i[1];return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(p,{menuOpen:t,setMenuOpen:a}),Object(m.jsx)(X,{menuOpen:t,setMenuOpen:a}),Object(m.jsxs)("div",{className:"sections",children:[Object(m.jsx)(h,{}),Object(m.jsx)(y,{}),Object(m.jsx)(_,{}),Object(m.jsx)(K,{})]})]})};n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)($,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.4d24c953.chunk.js.map