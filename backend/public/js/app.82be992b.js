(function(e){function t(t){for(var r,s,c=t[0],i=t[1],u=t[2],p=0,f=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"14c3c":function(e,t,n){"use strict";var r=n("c8f0"),o=n.n(r);o.a},"3d39":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},a=[],s={name:"App"},c=s,i=n("2877"),u=n("6544"),l=n.n(u),p=n("7496"),f=n("f6c4"),d=Object(i["a"])(c,o,a,!1,null,null,null),b=d.exports;l()(d,{VApp:p["a"],VMain:f["a"]});var g=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"login",staticClass:"login"},[n("v-text-field",{attrs:{label:"ID"},model:{value:e.loginInfo.userId,callback:function(t){e.$set(e.loginInfo,"userId",t)},expression:"loginInfo.userId"}}),n("v-text-field",{attrs:{label:"PASSWORD"},model:{value:e.loginInfo.password,callback:function(t){e.$set(e.loginInfo,"password",t)},expression:"loginInfo.password"}}),n("v-btn",{on:{click:e.login}},[e._v("Login")])],1)},h=[],v=(n("a4d3"),n("99af"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("96cf"),n("89ba")),y=n("2fa7"),O=n("2f62");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(y["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={name:"Login",data:function(){return{loginInfo:{userId:null,password:null}}},computed:j({},Object(O["b"])(["setUserInfo"])),methods:{login:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/login?userId=".concat(this.loginInfo.userId,"&password=").concat(this.loginInfo.password));case 2:if(t=e.sent,"error"!==t.statusText){e.next=5;break}return e.abrupt("return");case 5:console.log(this),this.$router.push({name:"chat"}).catch((function(){}));case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},P=x,I=(n("d6db"),n("8336")),_=n("8654"),k=Object(i["a"])(P,m,h,!1,null,null,null),S=k.exports;l()(k,{VBtn:I["a"],VTextField:_["a"]});var $=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-container",staticStyle:{width:"50%"}},[n("ul",e._l(e.talkList,(function(t,r){return n("li",{key:t.id},[n("div",{staticClass:"header",staticStyle:{width:"400px",height:"30px"}},[n("strong",{staticClass:"primary-font",style:{float:0==r%2?"left":"right"}},[e._v(" "+e._s(e.userList[r%2])+" ")])]),n("div",[n("p",[e._v(e._s(t.message))]),e._m(0,!0)])])})),0),n("v-textarea",{staticClass:"mx-2",attrs:{rows:"1","prepend-icon":"mdi-comment"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),n("v-btn",{attrs:{icon:""},on:{click:e.sendMessage}},[n("v-icon",[e._v("mdi-send")])],1)],1)},D=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("small",{staticClass:"text-muted"},[n("span",{staticClass:"glyphicon glyphicon-time"}),e._v("14 mins ago ")])}];n("ace4"),n("0d03"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("498a"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a9"),n("72f7");function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(y["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={name:"Chat",computed:L({},Object(O["c"])(["userInfo"])),created:function(){var e=this;this.$socket.on("chat",(function(t){e.talkList.push({id:e.getUUID(),message:"".concat(t.message,"\n")}),console.log(t)}))},data:function(){return{userList:["Jack Sparrow","Me"],talkList:[{id:1,message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales."},{id:2,message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales."},{id:3,message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales."}],message:"",textarea:""}},methods:{sendMessage:function(){0!==this.message.trim().length&&(this.$socket.emit("chat",{message:this.message}),this.message="")},getUUID:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}}},M=E,V=(n("14c3c"),n("132d")),U=n("a844"),T=Object(i["a"])(M,$,D,!1,null,null,null),A=T.exports;l()(T,{VBtn:I["a"],VIcon:V["a"],VTextarea:U["a"]}),r["a"].use(g["a"]);var R=[{path:"/",name:"app",component:b},{path:"/login",name:"login",component:S},{path:"/chat",name:"chat",component:A}],q=new g["a"]({routes:R}),J=q,B=n("f309");r["a"].use(B["a"]);var F=new B["a"]({theme:{themes:{light:{primary:"#3f51b5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}}),W={},z={setUserInfo:function(e,t){e.userInfo=t}},G={},H={};r["a"].use(O["a"]);var K=new O["a"].Store({state:W,mutations:z,actions:G,getters:H}),N=n("bc3a"),Q=n.n(N),X=n("8055"),Y=n.n(X);n("3d39");r["a"].prototype.$http=Q.a,r["a"].prototype.$socket=Y()("http://localhost:3000"),r["a"].config.productionTip=!1,new r["a"]({router:J,store:K,vuetify:F,render:function(e){return e(b)}}).$mount("#app")},c8f0:function(e,t,n){},d6db:function(e,t,n){"use strict";var r=n("e67a"),o=n.n(r);o.a},e67a:function(e,t,n){}});
//# sourceMappingURL=app.82be992b.js.map