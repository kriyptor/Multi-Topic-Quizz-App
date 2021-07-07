(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{110:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(8),s=c.n(n),r=(c(77),c(45)),i=c.n(r),o=c(60),l=c(13),u=c(24),j=c(11),d=(c(79),c(80),c(3));var b=function(){return Object(d.jsx)("div",{className:"header",children:Object(d.jsx)(u.b,{to:"/",className:"title",children:"Quiz Hubb"})})},h=c(143),v=c(144),O=c(141),m=(c(87),[{category:"General Knowledge",value:9},{category:"Books",value:10},{category:"Films",value:11},{category:"Music",value:12},{category:"Musicals and Theaters",value:13},{category:"Television",value:14},{category:"Video Games",value:15},{category:"Board Games",value:16},{category:"Science and Nature",value:17},{category:"Computer",value:18},{category:"Mathematics",value:19},{category:"Mythology",value:20},{category:"Sports",value:21},{category:"Geography",value:22},{category:"History",value:23},{category:"Politics",value:24},{category:"Celebrities",value:26},{category:"Animals",value:27},{category:"Vehicles",value:28},{category:"Comics",value:29},{category:"Gadgets",value:30},{category:"Japanese Anime",value:31},{category:"Cartoon and Animations",value:32}]);var g=function(e){var t=e.children;return Object(d.jsx)("div",{style:{width:"100%",padding:10,marginBottom:10,borderRadius:4,backgroundColor:"orangered",textAlign:"center",color:"white",textTransform:"capitalized"},children:t})};var x=function(e){var t=e.name,c=e.setName,n=e.fetchQuestions,s=Object(a.useState)(""),r=Object(l.a)(s,2),i=r[0],o=r[1],u=Object(a.useState)(""),b=Object(l.a)(u,2),x=b[0],f=b[1],y=Object(a.useState)(!1),p=Object(l.a)(y,2),S=p[0],N=p[1],z=Object(j.f)();return Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)("div",{className:"settings",children:[Object(d.jsx)("span",{style:{fontSize:30,color:"#3F53B5",fontWeight:"bold"},children:"Quiz Settings"}),Object(d.jsxs)("div",{className:"settings-selects",children:[S&&Object(d.jsx)(g,{children:"Please Fill All The Feilds"}),Object(d.jsx)(h.a,{label:"Enter Your Name",variant:"outlined",style:{marginBottom:25},onChange:function(e){return c(e.target.value)}}),Object(d.jsx)(h.a,{select:!0,label:"Select Category",variant:"outlined",style:{marginBottom:25},onChange:function(e){return o(e.target.value)},value:i,children:m.map((function(e){return Object(d.jsx)(v.a,{value:e.value,children:e.category},e.category)}))}),Object(d.jsxs)(h.a,{select:!0,label:"Select Difficulty",variant:"outlined",style:{marginBottom:25},value:x,onChange:function(e){return f(e.target.value)},children:[Object(d.jsx)(v.a,{value:"easy",children:"Easy"},"Easy"),Object(d.jsx)(v.a,{value:"medium",children:"Medium"},"Medium"),Object(d.jsx)(v.a,{value:"hard",children:"Hard"},"Hard")]}),Object(d.jsx)(O.a,{variant:"contained",size:"large",color:"primary",onClick:function(){i&&x&&t?(N(!1),n(i,x),z.push("/quiz")):N(!0)},children:"START QUIZ"})]})]})})};c(89);var f=function(e){var t=e.name,c=e.score,n=Object(j.f)();return Object(a.useEffect)((function(){t||n.push("/")}),[t,n]),Object(d.jsxs)("div",{className:"result",children:[Object(d.jsxs)("div",{className:"title",children:[t," Your Final Score is : ",c]}),Object(d.jsx)(O.a,{variant:"contained",color:"secondary",size:"large",style:{alignSelf:"center",marginTop:20},href:"/",children:"BACK TO HOME"})]})},y=c(66),p=c(142);c(90);var S=function(e){var t=e.currQuestion,c=e.setCurrQuestion,n=e.options,s=e.score,r=e.setScore,i=e.correct,o=e.questions,u=Object(a.useState)(),b=Object(l.a)(u,2),h=b[0],v=b[1],m=Object(a.useState)(!1),x=Object(l.a)(m,2),f=x[0],y=x[1],p=function(e){return h===e&&h===i?"select":h===e&&h!==i?"wrong":e===i?"select":void 0},S=Object(j.f)();return Object(d.jsxs)("div",{className:"question",children:[Object(d.jsxs)("h1",{children:["Question: ",t+1]}),Object(d.jsxs)("div",{className:"singleQuestion",children:[Object(d.jsxs)("h2",{children:["Q: ",o[t].question]}),Object(d.jsxs)("div",{className:"options",children:[f&&Object(d.jsx)(g,{children:f}),n&&n.map((function(e){return Object(d.jsx)("button",{onClick:function(){return function(e){v(e),e===i&&r(s+1),y(!1)}(e)},className:"singleOption ".concat(h&&p(e)),disabled:h,children:e},e)}))]}),Object(d.jsxs)("div",{className:"controls",children:[Object(d.jsx)(O.a,{variant:"contained",color:"secondary",size:"large",style:{width:185},href:"/",children:"Quit"}),Object(d.jsx)(O.a,{variant:"contained",color:"primary",size:"large",style:{width:185},onClick:function(){t>8?S.push("/result"):h?(c(t+1),v()):y("Please Select an option")},children:"NEXT QUESTION"})]})]})]})};c(91);var N=function(e){var t,c=e.name,n=e.questions,s=e.score,r=e.setScore,i=Object(a.useState)(),o=Object(l.a)(i,2),u=o[0],j=o[1],b=Object(a.useState)(0),h=Object(l.a)(b,2),v=h[0],O=h[1];return Object(a.useEffect)((function(){var e,t;j(n&&[null===(e=n[v])||void 0===e?void 0:e.correct_answer].concat(Object(y.a)(null===(t=n[v])||void 0===t?void 0:t.incorrect_answers)).sort((function(){return Math.random()-.5})))}),[n,v]),Object(d.jsxs)("div",{className:"quiz",children:[Object(d.jsxs)("span",{className:"subtitle",children:["Welcome ",c]}),n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"quizInfo",children:[Object(d.jsx)("span",{className:"stats",children:n[v].category}),Object(d.jsxs)("span",{className:"stats",children:["Score: ",s]})]}),Object(d.jsx)(S,{questions:n,currQuestion:v,setCurrQuestion:O,options:u,correct:null===(t=n[v])||void 0===t?void 0:t.correct_answer,score:s,setScore:r})]}):Object(d.jsx)(p.a,{style:{margin:200},color:"inherit",size:150,thickness:1})]})},z=c(65),C=c.n(z);var Q=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(),r=Object(l.a)(s,2),h=r[0],v=r[1],O=Object(a.useState)(0),m=Object(l.a)(O,2),g=m[0],y=m[1],p=function(){var e=Object(o.a)(i.a.mark((function e(t,c){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://opentdb.com/api.php?amount=10".concat(t&&"&category=".concat(t)).concat(c&&"&difficulty=".concat(c),"&type=multiple"));case 2:a=e.sent,n=a.data,v(n.results);case 5:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(d.jsx)(u.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/",exact:!0,children:Object(d.jsx)(x,{name:c,setName:n,fetchQuestions:p})}),Object(d.jsx)(j.a,{path:"/quiz",exact:!0,children:Object(d.jsx)(N,{name:c,questions:h,score:g,setScore:y,setQuestions:v})}),Object(d.jsx)(j.a,{path:"/result",exact:!0,children:Object(d.jsx)(f,{name:c,score:g})})]})]})})};s.a.render(Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(Q,{})}),document.getElementById("root"))},77:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},87:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){}},[[110,1,2]]]);
//# sourceMappingURL=main.4db46817.chunk.js.map