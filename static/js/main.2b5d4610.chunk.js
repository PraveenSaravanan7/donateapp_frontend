(this.webpackJsonpclient_web=this.webpackJsonpclient_web||[]).push([[0],{32:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},66:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},97:function(e,t,c){},99:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),r=c(18),i=c.n(r),j=(c(52),c(53),c(54),c(56),c(57),c(7)),o=c(21),l=c.n(o),b=c(3),d=c.n(b),u=c(6),O=c(2),p=(c(32),c(4)),m=c.n(p),x=c(5),h=function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"header p-2 px-2",children:[Object(n.jsx)("div",{className:"px-2",children:Object(n.jsxs)("span",{className:"logo text-primary",children:["DonateApp",e.home?Object(n.jsxs)("span",{className:"float-right",children:[Object(n.jsx)(x.Link,{to:"/profile/me",children:Object(n.jsx)(m.a,{icon:"user",className:"icon mr-4"})}),Object(n.jsx)(x.Link,{to:"/notification",children:Object(n.jsx)(m.a,{icon:"bell",className:"icon mr-4"})}),Object(n.jsx)(x.Link,{to:"/settings",children:Object(n.jsx)(m.a,{icon:"settings",className:"icon"})})]}):Object(n.jsx)("span",{className:"float-right",children:Object(n.jsx)(m.a,{icon:"info",className:"icon"})})]})}),e.home&&Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"mt-2",children:[Object(n.jsxs)("div",{className:"togglerbg bg-light",children:[Object(n.jsx)("button",{className:"requirement"==e.type?" btn btn-sm  btn-primary":" btn btn-sm  btn-light",onClick:function(){return e.settype("requirement")},children:"Requirements"}),Object(n.jsx)("button",{className:"requirement"!=e.type?" btn btn-sm ml-2 btn-primary":" btn btn-sm ml-2  btn-light",onClick:function(){return e.settype("donation")},children:"Donation"})]}),Object(n.jsx)(x.Link,{to:"/filter",children:Object(n.jsx)("div",{className:"filterbtnbg bg-light",children:Object(n.jsx)("button",{className:"btn btn-sm btn-light  ",children:"  Filter"})})})]})})]}),e.home&&Object(n.jsx)(x.Link,{to:"/addpost",children:Object(n.jsx)("div",{className:"add-btn",children:Object(n.jsx)(m.a,{className:"add-icon",icon:"plus",size:40,color:"#007bff"})})})]})},f=c.p+"static/media/user.05d0404a.png",g=(c(66),c(44)),v=c.n(g),N=c(19)("accessToken"),y=v.a.create({baseURL:"https://aqueous-headland-10653.herokuapp.com/",timeout:6e4,headers:{Authorization:"Bearer "+N}}),k=c(86),S=c(19),w=function(e){var t=e.data,c=e.setcopied,a=e.fullview,r=Object(s.useState)(!1),i=Object(O.a)(r,2),j=i[0],o=i[1],l=Object(s.useState)(!1),b=Object(O.a)(l,2),p=b[0],h=b[1];function g(){return(g=Object(u.a)(d.a.mark((function e(t,c){var n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="/posts?pid="+t,e.next=4,y.delete(n);case 4:s=e.sent,console.log(s.data),h(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(n.jsx)(n.Fragment,{children:!p&&Object(n.jsxs)("div",{className:"post-div",children:[Object(n.jsx)(x.Link,{to:"/profile/"+t.userid._id,children:Object(n.jsxs)("span",{className:"h5 d-inline-block text-truncate m-0 truncate2 text-black",children:[Object(n.jsx)("img",{src:t.userid.profilepic?t.userid.profilepic:f,className:"post-dp mr-2 "}),Object(n.jsxs)("b",{children:[" ",t.userid.name]})]})}),Object(n.jsxs)("div",{className:"dropdown float-right",children:[Object(n.jsx)("button",{className:"btn",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(n.jsx)(m.a,{icon:"chevron-down"})}),Object(n.jsx)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:S("user_id")==t.userid._id?Object(n.jsx)("a",{className:"dropdown-item text-danger",onClick:function(){return function(e,t){return g.apply(this,arguments)}(t._id,t.photo)},children:"Delete"}):Object(n.jsx)("a",{className:"dropdown-item text-dark",children:"Report  "})})]}),a?Object(n.jsxs)(n.Fragment,{children:[t.photo&&Object(n.jsx)("img",{src:t.photo,className:"post-pic"}),Object(n.jsxs)("div",{children:[t.title&&Object(n.jsxs)("span",{className:"d-inline-block  h4 font-weight-bold mt-2 mb-0 text-black",children:[" ",t.title]}),Object(n.jsx)("br",{}),t.description&&Object(n.jsxs)("span",{className:"d-inline-block text-muted font-weight-bold",children:[" ",t.description]})]})]}):Object(n.jsxs)(x.Link,{to:"/post/"+t._id,children:[t.photo&&Object(n.jsx)("img",{src:t.photo,className:"post-pic"}),Object(n.jsxs)("div",{children:[t.title&&Object(n.jsxs)("span",{className:"d-inline-block text-truncate h4 font-weight-bold mt-2 truncate mb-0 text-black",children:[" ",t.title]}),t.description&&Object(n.jsxs)("span",{className:"d-inline-block text-truncate truncate text-muted",children:[" ",t.description]})]})]}),Object(n.jsxs)("span",{className:"badge badge-pill badge-light",children:[" ",t.category," "]}),Object(n.jsxs)("span",{className:"badge badge-pill badge-light ml-2",children:[" ",t.country]}),Object(n.jsxs)("span",{className:"badge badge-pill badge-light ml-2",children:[" ",t.state]}),j&&Object(n.jsxs)("div",{className:"contact-info p-3 mt-3 mb-3",children:[Object(n.jsxs)("h4",{children:[Object(n.jsx)("b",{children:"Contact Info"})," ",Object(n.jsx)("span",{onClick:function(){return o(!1)},className:"float-right",children:Object(n.jsx)(m.a,{icon:"x"})})," "]}),t.phone&&Object(n.jsxs)(n.Fragment,{children:[" ",Object(n.jsxs)("span",{children:[Object(n.jsx)("b",{children:"Phone:"})," ",t.phone," "]}),Object(n.jsx)("br",{})]}),t.mail&&Object(n.jsxs)(n.Fragment,{children:[" ",Object(n.jsxs)("span",{children:[Object(n.jsx)("b",{children:"Email:"})," ",t.mail," "]}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("b",{children:"Address:"})," ",t.address,", ",t.state,", ",t.country," "]})]}),Object(n.jsxs)("div",{className:"row text-primary mt-2 fs16 ",children:[Object(n.jsx)("div",{className:"col text-center px-0 unselectable",onClick:function(){return o(!0)},children:Object(n.jsx)("span",{className:"btn p-0 m-0 text-primary ",children:Object(n.jsxs)("b",{children:[Object(n.jsx)(m.a,{icon:"phone",size:15})," Contact"]})})}),Object(n.jsx)(x.Link,{to:"/post/"+t._id,children:Object(n.jsx)("div",{className:"col text-center px-0 unselectable",children:Object(n.jsx)("span",{className:"btn p-0 m-0 text-primary ",children:Object(n.jsxs)("b",{children:[Object(n.jsx)(m.a,{icon:"message-circle",size:15})," Comment"]})})})}),Object(n.jsx)("div",{className:"col text-center px-0 unselectable",onClick:function(){!function(){if(window.location.port)var e=window.location.hostname+":"+window.location.port+"/post/"+t._id;else e=window.location.hostname+"#/post/"+t._id;k(e),c(e)}()},children:Object(n.jsx)("span",{className:"btn p-0 m-0 text-primary ",children:Object(n.jsxs)("b",{children:[Object(n.jsx)(m.a,{icon:"share-2",size:15})," Share"]})})})]})]})})},C=c(22),F=(c(26),c(17)),q=(c(27),function(){var e=Object(s.useState)(!0),t=Object(O.a)(e,2),c=(t[0],t[1]),a=Object(s.useState)(!1),r=Object(O.a)(a,2),i=(r[0],r[1]),j=Object(s.useState)("requirement"),o=Object(O.a)(j,2),l=o[0],b=o[1],p=Object(s.useState)([null]),m=Object(O.a)(p,2),x=m[0],f=(m[1],Object(s.useState)([])),g=Object(O.a)(f,2),v=g[0],N=g[1],k=Object(s.useState)(0),S=Object(O.a)(k,2),q=S[0],E=S[1],_=Object(s.useState)(!1),L=Object(O.a)(_,2),P=L[0],D=L[1],B=Object(s.useState)([]),U=Object(O.a)(B,2),T=U[0],z=U[1],R=Object(s.useState)(0),A=Object(O.a)(R,2),H=A[0],I=A[1],M=Object(s.useState)(!1),V=Object(O.a)(M,2),W=V[0],G=V[1],J=Object(s.useState)("null"),K=Object(O.a)(J,2),Q=K[0],X=K[1],Y=Object(s.useState)("collaspe"),Z=Object(O.a)(Y,2),$=Z[0],ee=Z[1],te=Object(s.useState)(""),ce=Object(O.a)(te,2),ne=ce[0],se=ce[1];function ae(){return re.apply(this,arguments)}function re(){return(re=Object(u.a)(d.a.mark((function e(){var t,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),i(!1),e.prev=2,t="","/posts?",n="requirement"==l?q:H,l&&(t+="skip="+n+"&type="+l),x[0]&&(t+="&category="+x),e.next=10,y.get("/posts?"+t);case 10:s=e.sent,console.log(s.data),"requirement"==l?(N(v.concat(s.data)),E(q+10),(!s.data[0]||s.data.length<10)&&(D(!0),console.log("stoped"))):(z(T.concat(s.data)),I(H+10),(!s.data[0]||s.data.length<10)&&(G(!0),console.log("stoped"))),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),i(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})))).apply(this,arguments)}return Object(s.useEffect)((function(){"requirement"==l?(ee("collaspe"),X("null")):(X("collaspe"),ee("null"))}),[l]),Object(s.useEffect)((function(){ne&&F.b.info("Link copied !!!",{position:"bottom-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}),[ne]),Object(n.jsxs)("div",{children:[Object(n.jsx)(F.a,{}),Object(n.jsx)("input",{id:"forcopytext",value:""}),Object(n.jsx)(h,{home:!0,settype:b,type:l}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"tab1 pt120 tabdiv "+Q,children:[v.map((function(e){return Object(n.jsx)(w,{data:e,setcopied:se},e._id)})),!P&&Object(n.jsx)(C.a,{as:"div",onChange:function(e,t){e&&ae()},children:Object(n.jsx)("div",{className:"container mb-4 text-center",children:Object(n.jsx)("div",{className:"spinner-border text-primary",role:"status"})})})]}),Object(n.jsxs)("div",{className:"tab2 pt120 tabdiv "+$,children:[T.map((function(e){return Object(n.jsx)(w,{data:e,setcopied:se},e._id)})),!W&&Object(n.jsx)(C.a,{as:"div",onChange:function(e,t){e&&ae()},children:Object(n.jsx)("div",{className:"container mb-4 text-center",children:Object(n.jsx)("div",{className:"spinner-border text-primary",role:"status"})})})]})]})]})}),E=function(e){var t=Object(j.k)();return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"header p-2 px-2",children:Object(n.jsxs)("span",{className:"text-primary headtwo",children:[Object(n.jsx)(m.a,{onClick:function(){t.go(-1)},icon:"chevron-left",color:"black"}),"   ",e.name]})})})},_=(c(88),function(){return Object(n.jsx)("div",{className:"loadingdiv",children:Object(n.jsx)("div",{className:"lodingcenterdiv",children:Object(n.jsx)("div",{className:"spinner-border text-primary loadingitem ",role:"status",children:Object(n.jsx)("span",{class:"sr-only",children:"Loading..."})})})})}),L=(c(89),c(19)),P=function(e){var t=e.match,c=Object(s.useState)([]),a=Object(O.a)(c,2),r=a[0],i=a[1],o=Object(s.useState)(!0),l=Object(O.a)(o,2),b=l[0],p=l[1],h=Object(s.useState)(!1),g=Object(O.a)(h,2),v=(g[0],g[1]),N=Object(s.useState)(0),k=Object(O.a)(N,2),S=k[0],q=k[1],P=Object(s.useState)(!0),D=Object(O.a)(P,2),B=D[0],U=D[1],T=Object(s.useState)([]),z=Object(O.a)(T,2),R=z[0],A=z[1],H=Object(s.useState)(""),I=Object(O.a)(H,2),M=I[0],V=I[1];Object(j.k)();function W(){return(W=Object(u.a)(d.a.mark((function e(){var c,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),v(!1),e.prev=2,c=t.params.id,n="me"==c?"/users":"/users/"+c,e.next=7,y.get(n);case 7:s=e.sent,console.log(s.data),i(s.data),p(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),v(e.t0),p(!1);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}function G(){return(G=Object(u.a)(d.a.mark((function e(){var c,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c="me"==(c=t.params.id)?L("user_id"):c,n="/posts/userposts?userid="+c+"&skip="+S,e.next=6,y.get(n);case 6:s=e.sent,console.log(s.data),A(R.concat(s.data)),q(S+10),(!s.data[0]||s.data.length<10)&&(U(!0),console.log("stoped")),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),v(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}return Object(s.useEffect)((function(){M&&F.b.info("Link copied !!!",{position:"bottom-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}),[M]),Object(s.useEffect)((function(){console.log("effect"),function(){return W.apply(this,arguments)}().then((function(){return U(!1)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(F.a,{}),Object(n.jsx)(E,{name:"Profile"}),!b&&Object(n.jsxs)("div",{className:"mt60",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-8",children:[Object(n.jsx)("h2",{className:"mb-0 text-break",children:r.name}),r.description&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{className:"font-weight-bold text-muted",children:r.description}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("span",{className:"text-muted location-text",children:[" ",Object(n.jsx)(m.a,{icon:"map-pin",size:14})," ",r.country,", ",r.state," "]}),Object(n.jsx)("br",{}),r._id==L("user_id")?Object(n.jsx)(x.Link,{to:"/editprofile",children:Object(n.jsx)("button",{className:"btn btn-primary mt-2",children:"Edit Profile"})}):null]}),Object(n.jsx)("div",{className:"col-4 ",children:Object(n.jsx)("img",{className:"userdp",src:null!=r.profilepic?r.profilepic:f})})]}),Object(n.jsx)("br",{}),R.map((function(e){return Object(n.jsx)(w,{data:e,setcopied:V},e._id)})),!B&&Object(n.jsx)(C.a,{as:"div",onChange:function(e,t){e&&function(){G.apply(this,arguments)}()},children:Object(n.jsx)("div",{className:"container mb-4 text-center",children:Object(n.jsx)("div",{className:"spinner-border text-primary",role:"status"})})})]}),b&&Object(n.jsx)(_,{})]})},D=c(15),B=c(9),U=c(19),T=function(){var e=Object(j.k)(),t=Object(s.useState)([]),c=Object(O.a)(t,2),a=c[0],r=c[1],i=Object(s.useState)(!1),o=Object(O.a)(i,2),l=o[0],b=o[1],p=Object(s.useState)(!1),m=Object(O.a)(p,2),x=m[0],f=m[1];function g(){return(g=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),f(!1),e.prev=2,e.next=5,y.post("/users/login",a);case 5:if(!(t=e.sent).data.accessToken){e.next=8;break}return e.abrupt("return",t.data);case 8:b(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),f(e.t0),b(!1);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}var v=function(e){r(Object(B.a)(Object(B.a)({},a),{},Object(D.a)({},e.target.name,e.target.value.trim())))};function N(t){t.preventDefault(),function(){return g.apply(this,arguments)}().then((function(t){t.accessToken&&(U("accessToken",t.accessToken),U("user_id",t.user_id),e.replace("/"))}))}return Object(n.jsxs)("div",{children:[Object(n.jsx)(h,{home:!1}),Object(n.jsxs)("div",{className:"mt60 pt-5",children:[Object(n.jsx)("h2",{children:"Welcome Back"}),Object(n.jsx)("span",{children:"Donate and get donated."}),Object(n.jsxs)("form",{className:"mt-4 px-2",onSubmit:function(e){return N(e)},children:[Object(n.jsxs)("div",{className:"form-group ",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Email"})}),Object(n.jsx)("input",{type:"email",className:"form-control",required:!0,name:"email",onChange:v})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Password"})}),Object(n.jsx)("input",{type:"password",className:"form-control",required:!0,name:"password",onChange:v})]}),x&&Object(n.jsxs)("span",{className:"text-danger font-weight-bold",children:["Incorrect email and password combination. ",Object(n.jsx)("br",{})]}),Object(n.jsx)("button",{type:"submit",className:"mt-2 btn  btn-primary",children:l?Object(n.jsx)(n.Fragment,{children:"Loading..."}):Object(n.jsx)(n.Fragment,{children:"Login"})})]}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:"text-muted",onClick:function(){e.replace("/signup")},children:Object(n.jsxs)("b",{children:["Don't have an account? ",Object(n.jsx)("a",{children:"SignUp"})," "]})})]})]})},z=c(28),R=c(19),A=function(){var e=Object(j.k)(),t=Object(s.useState)([]),c=Object(O.a)(t,2),a=c[0],r=c[1],i=Object(s.useState)(!1),o=Object(O.a)(i,2),l=o[0],b=o[1],p=Object(s.useState)(!1),m=Object(O.a)(p,2),x=m[0],f=m[1],g=Object(s.useState)([]),v=Object(O.a)(g,2),N=v[0],k=v[1],S=Object(s.useState)([]),w=Object(O.a)(S,2),C=w[0],F=w[1];function q(){return(q=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),b(!0),f(!1),e.prev=3,e.next=6,y.post("/users",a);case 6:if(!(t=e.sent).data){e.next=9;break}return e.abrupt("return",t.data);case 9:b(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),f(e.t0),b(!1);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})))).apply(this,arguments)}var E=function(e){r(Object(B.a)(Object(B.a)({},a),{},Object(D.a)({},e.target.name,e.target.value.trim())))};function _(t){t.preventDefault(),function(){return q.apply(this,arguments)}().then((function(t){t.accessToken&&(R("accessToken",t.accessToken),R("user_id",t.user_id),e.replace("/"))}))}return Object(s.useEffect)((function(){a.country&&k(z.searchCountry(a.country))}),[a.country]),Object(s.useEffect)((function(){a.state&&F(z.getAllStatesFromCountry(a.country))}),[a.state]),Object(n.jsxs)("div",{children:[Object(n.jsx)(h,{home:!1}),Object(n.jsxs)("div",{className:"mt60 pt-5",children:[Object(n.jsx)("h2",{children:"Welcome to Donate"}),Object(n.jsx)("span",{children:"Donate and get donated."}),Object(n.jsxs)("form",{className:"mt-4 px-2",onSubmit:function(e){return _(e)},children:[Object(n.jsxs)("div",{className:"form-group ",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Name"})}),Object(n.jsx)("input",{type:"text",className:"form-control",required:!0,name:"name",onChange:E})]}),Object(n.jsxs)("div",{className:"form-group ",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Email"})}),Object(n.jsx)("input",{type:"email",className:"form-control",required:!0,name:"email",onChange:E})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Password"})}),Object(n.jsx)("input",{type:"password",className:"form-control",required:!0,name:"password",onChange:E})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Country"})}),Object(n.jsx)("input",{list:"countrylist",type:"text",className:"form-control",required:!0,name:"country",onChange:E}),Object(n.jsx)("datalist",{id:"countrylist",children:N.map((function(e){return Object(n.jsx)("option",{value:e.name},e.id)}))})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"State"})}),Object(n.jsx)("input",{type:"text",list:"statelist",className:"form-control",required:!0,name:"state",onChange:E}),Object(n.jsx)("datalist",{id:"statelist",children:C.map((function(e){return Object(n.jsx)("option",{value:e.name},e.id)}))})]}),x&&Object(n.jsxs)("span",{className:"text-danger font-weight-bold",children:["Email already exists try to log in. ",Object(n.jsx)("br",{})]}),Object(n.jsx)("button",{type:"submit",className:"mt-2 btn  btn-primary",children:l?Object(n.jsx)(n.Fragment,{children:"Loading..."}):Object(n.jsx)(n.Fragment,{children:"SignUp"})})]}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{className:"text-muted",onClick:function(){e.replace("/login")},children:Object(n.jsxs)("b",{children:["Already have an account? ",Object(n.jsx)("a",{children:"LogIn"})," "]})}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]})]})},H=(c(97),c(45)),I=(c(98),c(23)),M=function(e){new FileReader;var t=Object(s.useState)(e.pic),c=Object(O.a)(t,2),a=c[0],r=c[1],i=Object(s.useState)(!1),j=Object(O.a)(i,2),o=j[0],l=j[1],b=Object(s.useState)("#"),p=Object(O.a)(b,2),m=(p[0],p[1],Object(s.useState)()),x=Object(O.a)(m,2),h=x[0],g=x[1],v=Object(s.useState)(),N=Object(O.a)(v,2),k=N[0],S=N[1],w=Object(s.useState)(!1),C=Object(O.a)(w,2),F=C[0],q=C[1],E=Object(s.useState)(!1),_=Object(O.a)(E,2),L=(_[0],_[1]),P=new FormData;function D(){return(D=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(!0),L(!1),e.prev=2,e.next=5,y.put("/users/profilephoto",P);case 5:if(!e.sent){e.next=9;break}return q(!1),e.abrupt("return",!0);case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),L(e.t0),q(!1);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}var B=function(){var e=Object(u.a)(d.a.mark((function e(t){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.target.files&&t.target.files.length>0)){e.next=8;break}return c=t.target.files[0],S(t.target.files[0].name),e.next=5,URL.createObjectURL(c);case 5:n=e.sent,r(n),l(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){r(null!=e.pic?e.pic:f)}),[]),Object(n.jsxs)("div",{className:"row mt-3",children:[Object(n.jsx)("div",{className:"m-auto",children:o?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(H.a,{style:{height:200,width:"90%"},initialAspectRatio:1,aspectRatio:1,src:a,viewMode:1,guides:!0,minCropBoxHeight:10,minCropBoxWidth:10,background:!1,responsive:!0,autoCropArea:0,checkOrientation:!1,onInitialized:function(e){g(e)}}),Object(n.jsx)("button",{className:"btn btn-outline-primary btn-block mt-2",onClick:function(){q(!0),"undefined"!==typeof h&&h.getCroppedCanvas().toBlob((function(e){Object(I.a)(e,{maxSizeMB:1,maxWidthOrHeight:200}).then((function(e){P.append("avatar",e,k),function(){return D.apply(this,arguments)}().then(r(h.getCroppedCanvas().toDataURL())).then(l(!1))}))}))},children:F?Object(n.jsx)(n.Fragment,{children:" loading"}):Object(n.jsx)(n.Fragment,{children:"Crop & Upload"})})]}):Object(n.jsx)("img",{src:a,className:"dp"})}),Object(n.jsxs)("div",{className:"col-12 mt-3",children:[Object(n.jsx)("input",{hidden:!0,id:"photoinput",type:"file",accept:"image/*",onChange:B}),Object(n.jsx)("button",{className:"btn btn-primary btn-block",onClick:function(){document.getElementById("photoinput").click()},children:" Change Image "})]})]})},V=c(28),W=function(){var e=Object(s.useState)([]),t=Object(O.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(null),i=Object(O.a)(r,2),j=i[0],o=i[1],l=Object(s.useState)([]),b=Object(O.a)(l,2),p=b[0],m=b[1],x=Object(s.useState)(!1),h=Object(O.a)(x,2),f=h[0],g=h[1],v=Object(s.useState)(!1),N=Object(O.a)(v,2),k=(N[0],N[1]),S=Object(s.useState)(!1),w=Object(O.a)(S,2),C=w[0],F=w[1],q=Object(s.useState)(!1),L=Object(O.a)(q,2),P=L[0],U=L[1],T=Object(s.useState)(!1),z=Object(O.a)(T,2),R=z[0],A=z[1],H=Object(s.useState)([]),I=Object(O.a)(H,2),W=I[0],G=I[1],J=Object(s.useState)([]),K=Object(O.a)(J,2),Q=K[0],X=K[1];function Y(){return(Y=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(p),F(!0),U(!1),e.prev=3,e.next=6,y.put("/users",p);case 6:e.sent&&(F(!1),A(!0)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),U(e.t0),F(!1);case 14:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function Z(){return(Z=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),k(!1),e.prev=2,"/users",e.next=6,y.get("/users");case 6:t=e.sent,console.log(t.data),a(t.data),o(t.data.profilepic),g(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),k(e.t0),g(!1);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}var $=function(e){m(Object(B.a)(Object(B.a)({},p),{},Object(D.a)({},e.target.name,e.target.value.trim())))};function ee(e){e.preventDefault(),function(){Y.apply(this,arguments)}()}return Object(s.useEffect)((function(){!function(){Z.apply(this,arguments)}()}),[]),Object(s.useEffect)((function(){p.country&&G(V.searchCountry(p.country))}),[p.country]),Object(s.useEffect)((function(){p.state&&X(V.getAllStatesFromCountry(p.country))}),[p.state]),Object(s.useEffect)((function(){R&&setTimeout((function(){A(!1)}),3e3)}),[R]),Object(n.jsxs)("div",{className:"mt60 pt-2 pb-5 ",children:[Object(n.jsx)(E,{name:"Edit Profile"}),!f&&Object(n.jsxs)("div",{children:[Object(n.jsx)(M,{pic:j}),Object(n.jsxs)("form",{className:"mt-4 px-2",onSubmit:function(e){return ee(e)},children:[Object(n.jsxs)("div",{className:"form-group ",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Name"})}),Object(n.jsx)("input",{defaultValue:c.name,type:"text",className:"form-control",required:!0,name:"name",onChange:$})]}),Object(n.jsxs)("div",{className:"form-group ",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Email"})}),Object(n.jsx)("input",{defaultValue:c.email,type:"email",className:"form-control",required:!0,name:"email",onChange:$})]}),Object(n.jsxs)("div",{className:"form-group ",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Description"})}),Object(n.jsx)("textarea",{defaultValue:c.description,type:"email",className:"form-control",name:"description",onChange:$})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Country"})}),Object(n.jsx)("input",{defaultValue:c.country,list:"countrylist",type:"text",className:"form-control",required:!0,name:"country",onChange:$}),Object(n.jsx)("datalist",{id:"countrylist",children:W.map((function(e){return Object(n.jsx)("option",{value:e.name},e.id)}))})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"State"})}),Object(n.jsx)("input",{defaultValue:c.state,type:"text",list:"statelist",className:"form-control",required:!0,name:"state",onChange:$}),Object(n.jsx)("datalist",{id:"statelist",children:Q.map((function(e){return Object(n.jsx)("option",{value:e.name},e.id)}))})]}),P&&Object(n.jsxs)("span",{className:"text-danger font-weight-bold",children:["Email already exists. ",Object(n.jsx)("br",{})]}),R&&Object(n.jsxs)("span",{className:"text-success font-weight-bold",children:["Updated Successfully. ",Object(n.jsx)("br",{})]}),Object(n.jsx)("button",{type:"submit",className:"mt-2 btn  btn-primary",children:C?Object(n.jsx)(n.Fragment,{children:"Loading..."}):Object(n.jsx)(n.Fragment,{children:"Save"})})]})]}),f&&Object(n.jsx)(_,{})]})},G=c(28),J=function(){var e=new FormData,t=Object(s.useState)(!1),c=Object(O.a)(t,2),a=c[0],r=c[1],i=Object(s.useState)([]),j=Object(O.a)(i,2),o=j[0],l=j[1],b=Object(s.useState)(!1),p=Object(O.a)(b,2),x=p[0],h=p[1],f=Object(s.useState)(!1),g=Object(O.a)(f,2),v=g[0],N=g[1],k=Object(s.useState)(!1),S=Object(O.a)(k,2),w=S[0],C=S[1],F=Object(s.useState)([]),q=Object(O.a)(F,2),_=q[0],L=q[1],P=Object(s.useState)([]),U=Object(O.a)(P,2),T=U[0],z=U[1],R=Object(s.useState)(null),A=Object(O.a)(R,2),H=A[0],M=A[1];function V(){return(V=Object(u.a)(d.a.mark((function t(){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(c in o)e.append(c,o[c]);return h(!0),C(!1),t.prev=3,t.next=6,y.post("/posts",e);case 6:t.sent&&(h(!1),r(!0),window.scrollTo(0,0)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),C(t.t0),h(!1);case 14:case"end":return t.stop()}}),t,null,[[3,10]])})))).apply(this,arguments)}var W=function(e){l(Object(B.a)(Object(B.a)({},o),{},Object(D.a)({},e.target.name,e.target.value.trim())))};function J(e){e.preventDefault(),function(){V.apply(this,arguments)}()}function K(){return(K=Object(u.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,URL.createObjectURL(t);case 2:c=e.sent,M(c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){o.country&&L(G.searchCountry(o.country))}),[o.country]),Object(s.useEffect)((function(){o.state&&z(G.getAllStatesFromCountry(o.country))}),[o.state]),Object(s.useEffect)((function(){l(Object(B.a)(Object(B.a)({},o),{},{type:"requirement",category:"food",avatar:null}))}),[]),Object(n.jsxs)("div",{className:"mt60  pb-5",children:[Object(n.jsx)(E,{name:"Add Post"}),a?Object(n.jsx)("div",{className:"text-center ",children:Object(n.jsx)("h1",{children:"Upload Successfull."})}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{className:"pt-1 px-2",onSubmit:function(e){return J(e)},children:[Object(n.jsxs)("div",{className:"form-group ",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Type"})}),Object(n.jsxs)("select",{className:"form-control",required:!0,name:"type",onChange:W,children:[Object(n.jsx)("option",{value:"requirement",children:"Requirement"}),Object(n.jsx)("option",{value:"donation",children:"Donation"})]})]}),Object(n.jsxs)("div",{className:"form-group ",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Category"})}),Object(n.jsxs)("select",{className:"form-control",required:!0,name:"category",onChange:W,children:[Object(n.jsx)("option",{value:"food",children:"Food"}),Object(n.jsx)("option",{value:"blood",children:"Blood"}),Object(n.jsx)("option",{value:"clothes",children:"Clothes"}),Object(n.jsx)("option",{value:"books",children:"Books"}),Object(n.jsx)("option",{value:"Money",children:"Money"}),Object(n.jsx)("option",{value:"Others",children:"Others"})]})]}),Object(n.jsxs)("div",{className:"form-group ",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Title"})}),Object(n.jsx)("input",{type:"text",className:"form-control",required:!0,name:"title",onChange:W})]}),Object(n.jsxs)("div",{className:"form-group ",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Description"})}),Object(n.jsx)("textarea",{type:"text",className:"form-control",required:!0,name:"description",onChange:W})]}),Object(n.jsxs)("div",{className:"form-group ",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Address"})}),Object(n.jsx)("input",{type:"text",className:"form-control",required:!0,name:"address",onChange:W})]}),Object(n.jsxs)("div",{className:"form-group ",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Phone"})}),Object(n.jsx)("span",{className:"text-muted text-small",children:" (Optional)"}),Object(n.jsx)("input",{type:"text",className:"form-control",name:"phone",onChange:W})]}),Object(n.jsxs)("div",{className:"form-group ",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Email"})}),Object(n.jsx)("span",{className:"text-muted text-small",children:" (Optional)"}),Object(n.jsx)("input",{type:"email",className:"form-control",name:"mail",onChange:W})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"Country"})}),Object(n.jsx)("input",{list:"countrylist",type:"text",className:"form-control",required:!0,name:"country",onChange:W}),Object(n.jsx)("datalist",{id:"countrylist",children:_.map((function(e){return Object(n.jsx)("option",{value:e.name},e.id)}))})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("span",{children:Object(n.jsx)("b",{children:"State"})}),Object(n.jsx)("input",{type:"text",list:"statelist",className:"form-control",required:!0,name:"state",onChange:W}),Object(n.jsx)("datalist",{id:"statelist",children:T.map((function(e){return Object(n.jsx)("option",{value:e.name},e.id)}))})]}),Object(n.jsx)("input",{hidden:!0,id:"postphotoinput",name:"avatar",type:"file",accept:"image/*",onChange:function(e){N(!0),e.target.files[0]&&Object(I.a)(e.target.files[0],{maxSizeMB:2,maxWidthOrHeight:1080}).then((function(e){l(Object(B.a)(Object(B.a)({},o),{},{avatar:e})),function(e){return K.apply(this,arguments)}(e).then(N(!1))}))}}),Object(n.jsx)("button",{type:"submit",id:"submitpost",hidden:!0,className:"mt-3 btn  btn-primary",children:x?Object(n.jsx)(n.Fragment,{children:"Loading..."}):Object(n.jsx)(n.Fragment,{children:"Post"})})]}),H&&Object(n.jsx)("img",{className:"img-preview  mb-2",src:H}),Object(n.jsxs)("button",{onClick:function(){document.getElementById("postphotoinput").click()},className:"btn btn-light btn-block mt-2",children:[v?Object(n.jsx)(n.Fragment,{children:"Loading..."}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a,{icon:"image"})," Add Photo"]})," "]}),w&&Object(n.jsxs)("span",{className:"text-danger font-weight-bold",children:["Error ",Object(n.jsx)("br",{})]}),Object(n.jsx)("button",{onClick:function(){document.getElementById("submitpost").click()},className:"mt-3 btn  btn-primary",children:x?Object(n.jsx)(n.Fragment,{children:"Loading..."}):Object(n.jsx)(n.Fragment,{children:"Upload"})})]})]})},K=function(e){var t=e.match,c=Object(s.useState)([]),a=Object(O.a)(c,2),r=a[0],i=a[1],o=Object(s.useState)(!0),l=Object(O.a)(o,2),b=l[0],p=l[1],x=Object(s.useState)(!1),h=Object(O.a)(x,2),f=(h[0],h[1]),g=(Object(j.k)(),Object(s.useState)("")),v=Object(O.a)(g,2),N=v[0],k=v[1];function S(){return(S=Object(u.a)(d.a.mark((function e(){var c,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),f(!1),e.prev=2,c=t.params.id,n="/posts/getpost/"+c,e.next=7,y.get(n);case 7:s=e.sent,console.log(s.data),i(s.data),p(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),f(e.t0),p(!1);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){S.apply(this,arguments)}()}),[]),Object(s.useEffect)((function(){N&&F.b.info("Link copied !!!",{position:"bottom-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}),[N]),Object(n.jsxs)("div",{children:[Object(n.jsx)(E,{name:"Post"}),Object(n.jsx)(F.a,{}),!b&&Object(n.jsxs)("div",{className:"mt60",children:[r.map((function(e){return Object(n.jsx)(w,{data:e,setcopied:k,fullview:!0},e._id)})),Object(n.jsxs)("div",{className:"text-center mt-5 mb-4",children:[Object(n.jsx)("h5",{children:"Comment Systems Under Developement"}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{icon:"github",size:100}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{className:"text-break",target:"blank",href:"https://github.com/PraveenSaravanan7/donateapp_frontend",children:Object(n.jsx)("b",{children:"https://github.com/PraveenSaravanan7/donateapp_frontend"})}),Object(n.jsx)("h4",{children:"Contribute on GitHub  "})]})]}),b&&Object(n.jsx)(_,{})]})},Q=function(){var e=c(19),t=Object(j.k)();return Object(n.jsxs)("div",{children:[Object(n.jsx)(E,{name:"Settings"}),Object(n.jsxs)("div",{className:"mt60",children:[Object(n.jsx)("button",{className:"btn btn-block btn-danger",onClick:function(){e("accessToken",null),e("user_id",null),t.replace("/signup")},children:" Log Out "}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"text-center mt-5",children:[Object(n.jsx)("h3",{children:"Under Developement"}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{icon:"github",size:100}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{className:"text-break",target:"blank",href:"https://github.com/PraveenSaravanan7/donateapp_frontend",children:Object(n.jsx)("b",{children:"https://github.com/PraveenSaravanan7/donateapp_frontend"})}),Object(n.jsx)("h4",{children:"Contribute on GitHub  "})]})]})]})},X=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(E,{name:"Notification"}),Object(n.jsxs)("div",{className:"mt60",children:[Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("h3",{children:"Under Developement"}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{icon:"github",size:100}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{className:"text-break",target:"blank",href:"https://github.com/PraveenSaravanan7/donateapp_frontend",children:Object(n.jsx)("b",{children:"https://github.com/PraveenSaravanan7/donateapp_frontend"})}),Object(n.jsx)("h4",{children:"Contribute on GitHub  "})]})]})]})},Y=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(E,{name:"Filter"}),Object(n.jsxs)("div",{className:"mt60",children:[Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("h3",{children:"Under Developement"}),Object(n.jsx)("br",{}),Object(n.jsx)(m.a,{icon:"github",size:100}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{className:"text-break",target:"blank",href:"https://github.com/PraveenSaravanan7/donateapp_frontend",children:Object(n.jsx)("b",{children:"https://github.com/PraveenSaravanan7/donateapp_frontend"})}),Object(n.jsx)("h4",{children:"Contribute on GitHub  "})]})]})]})},Z=c(19);var $=function(){return Object(n.jsx)("div",{className:"app-div m-auto",children:Object(n.jsxs)(o.CacheSwitch,{children:[Object(n.jsx)(l.a,{exact:!0,path:["/","/home"],children:Z("accessToken")?Object(n.jsx)(q,{}):Object(n.jsx)(j.c,{to:"/signup"})}),Object(n.jsx)(l.a,{path:"/profile/:id",component:P,multiple:!0}),Object(n.jsx)(l.a,{path:"/post/:id",component:K,multiple:!0}),Object(n.jsx)(l.a,{path:"/editprofile",component:W}),Object(n.jsx)(j.d,{exact:!0,path:"/login",component:T}),Object(n.jsx)(j.d,{exact:!0,path:"/signup",component:A}),Object(n.jsx)(j.d,{exact:!0,path:"/addpost",component:J}),Object(n.jsx)(j.d,{exact:!0,path:"/settings",component:Q}),Object(n.jsx)(j.d,{exact:!0,path:"/notification",component:X}),Object(n.jsx)(j.d,{exact:!0,path:"/filter",component:Y})]})})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(x.HashRouter,{children:Object(n.jsx)($,{})})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.2b5d4610.chunk.js.map