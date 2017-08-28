webpackJsonp([0],[,,function(e,t,n){"use strict";var r=n(19),o=n.n(r),s=n(20),a=n.n(s),i=[{path:"/",name:"Home",component:o.a},{path:"/profile",name:"Profile",component:a.a},{path:"/login",name:"Profile",component:o.a}];t.a={mode:"history",routes:i}},function(e,t,n){"use strict";var r=n(12),o={userInfo:[]},s={userInfo:function(e){return e.userInfo}},a={setUserInfo:function(e,t){e.userInfo=t}},i={getUserInfo:function(e){return r.a.fetchUserInfo().then(function(t){200==t.status&&e.commit("setUserInfo",t.body)})}};t.a={state:o,getters:s,mutations:a,actions:i}},function(e,t){},function(e,t,n){function r(e){n(17)}var o=n(0)(n(9),n(22),r,null,null);e.exports=o.exports},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),o=n.n(r);t.default={name:"App",data:function(){return{isLoading:!0,userInfo:{}}},mounted:function(){var e=this;this.$store.dispatch("getUserInfo").then(function(){e.isLoading=!1,e.userInfo=e.$store.getters.userInfo,localStorage.setItem("userInfo",o()(e.userInfo))})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Home",props:["userInfo"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Profile",props:["userInfo"],computed:{status:function(){return this.userInfo.loggedin}},mounted:function(){this.status}}},function(e,t,n){"use strict";var r=n(1);t.a={fetchUserInfo:function(){return r.a.http.get("http://localhost:80/api.php")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(8),s=n(7),a=n(6),i=n(5),u=n.n(i),f=n(2),c=n(3),l=n(4);n.n(l);r.a.use(o.a),r.a.use(s.a),r.a.use(a.a),r.a.config.productionTip=!1;var d=new s.a(f.a),p=new o.a.Store(c.a);d.beforeEach(function(e,t,n){var r=JSON.parse(localStorage.getItem("userInfo"));"/profile"==e.path?1==r.loggedin?n():window.location.href="/":n()}),new r.a({el:"#app",router:d,store:p,render:function(e){return e(u.a)}})},,,,function(e,t){},function(e,t){},function(e,t,n){function r(e){n(18)}var o=n(0)(n(10),n(23),r,null,null);e.exports=o.exports},function(e,t,n){var r=n(0)(n(11),n(21),null,null,null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("h1",[e._v("Profile")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"}},[e.isLoading?n("div",{staticClass:"loader"},[n("svg",{staticClass:"lds-rolling",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[n("circle",{attrs:{cx:"50",cy:"50",fill:"none",stroke:"#5a7fb5","stroke-width":"3",r:"30","stroke-dasharray":"141.37166941154067 49.12388980384689",transform:"rotate(182.5 50 50)"}},[n("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"2.4s",begin:"0s",repeatCount:"indefinite"}})],1)])]):e._e()]),e._v(" "),n("header",[n("router-link",{attrs:{to:"/"}},[e._v("Anasayfa")]),e._v(" "),e.userInfo.loggedin?n("router-link",{attrs:{to:"/profile"}},[e._v("Profil")]):e._e(),e._v(" "),e.userInfo.loggedin?e._e():n("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),e._v(" "),n("router-view",{attrs:{userInfo:this.userInfo}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("div",{staticClass:"home_wrapper"},[n("h1",[e._v("Anasayfa")]),e._v(" "),e.userInfo.loggedin?n("p",[e._v("Hoşgeldin. "+e._s(e.userInfo.name))]):e._e(),e._v(" "),e.userInfo.loggedin?e._e():n("p",[e._v("Giriş yap.")]),e._v(" "),n("p",[e._v("Loggedin : "+e._s(e.userInfo.loggedin))])])])},staticRenderFns:[]}},,,function(e,t){}],[13]);
//# sourceMappingURL=app.43c23762a8d423b35a11.js.map