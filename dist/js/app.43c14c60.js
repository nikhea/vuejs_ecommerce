(function(t){function e(e){for(var r,a,u=e[0],s=e[1],i=e[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},c=[];function u(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5cf7d091","chunk-44035adf":"28b3e478","chunk-5a5043f1":"97cb7b09","chunk-6ec8d33a":"a31a11a8","chunk-7774ccda":"c5012f3a","chunk-b3000488":"b3ac0745"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-44035adf":1,"chunk-5a5043f1":1,"chunk-6ec8d33a":1,"chunk-7774ccda":1,"chunk-b3000488":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-44035adf":"7279016f","chunk-5a5043f1":"ad021f1f","chunk-6ec8d33a":"a46beacc","chunk-7774ccda":"e7b10fd9","chunk-b3000488":"ecbdf3c1"}[t]+".css",o=s.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],l=i.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[t],d.parentNode.removeChild(d),n(c)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(t);var f=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},2421:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("header",[n("nav",{staticClass:"header header__nav"},[n("div",{staticClass:"header__Brand"},[n("router-link",{attrs:{to:"/"}},[t._v("Products")])],1),n("div",{staticClass:"toggle"},[n("div",{on:{click:function(e){t.navItemss=!t.navItemss}}},[n("svg",{staticClass:"svg",attrs:{viewBox:"0 0 100 80",width:"40",height:"20"}},[n("rect",{attrs:{width:"100",height:"20"}}),n("rect",{attrs:{y:"30",width:"100",height:"20"}}),n("rect",{attrs:{y:"60",width:"100",height:"20"}})])])]),n("ul",{class:t.changeClasses},[n("li",[n("router-link",{attrs:{to:"/cart"}},[t._v("View cart")])],1),n("li",[n("router-link",{attrs:{to:"/signin"}},[t._v("Sign Up")])],1),n("li",[n("router-link",{attrs:{to:"/login"}},[t._v("Log In")])],1),n("li",{on:{click:t.userLogOut}},[n("router-link",{attrs:{to:"/logout"}},[t._v("Log Out")])],1)])])])])},u=[],s=n("5530"),i=n("2f62"),l={name:"Header",components:{},data:function(){return{available:!0,navItemss:!0}},methods:Object(s["a"])({},Object(i["b"])(["userLogOut","registerSuccess","LogInSuccess"]),{},Object(i["d"])(["setLogOut"]),{setLogOuts:function(){console.log(123)}}),computed:{changeClasses:function(){return{navItemss:this.navItemss}}}},f=l,d=(n("c858"),n("2877")),h=Object(d["a"])(f,c,u,!1,null,"82fd51ac",null),p=h.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"row footer-nav container"},[n("div",[n("ul",[n("li",[n("a",{attrs:{href:"#"}},[t._v("About us")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Blog")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("contact")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Press")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Ios App")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Android App")])])])])]),n("div",{staticClass:"row social__links"},[n("ul",[n("li",[n("a",{attrs:{href:"#"}},[t._v("facebook")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("tiwtter")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("what's App")])])])]),n("div",{staticClass:"row container footer__copy"},[n("p",[t._v("copyright © 2020 by laptops store. "),n("span",{staticClass:"footer__span"},[t._v(" All rights reserved.")])])])])}],v={name:"Footer"},b=v,k=(n("8fcc"),Object(d["a"])(b,g,m,!1,null,"7d002826",null)),_=k.exports,w={name:"App",components:{Header:p,Footer:_}},y=w,O=(n("034f"),Object(d["a"])(y,a,o,!1,null,null,null)),C=O.exports,S=(n("d3b7"),n("8c4f"));r["a"].use(S["a"]);var j=[{path:"/",name:"Products",component:function(){return n.e("chunk-b3000488").then(n.bind(null,"7079"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/cart",name:"cart",props:!0,component:function(){return n.e("chunk-5a5043f1").then(n.bind(null,"b3b1"))}},{path:"/product/:id",name:"ProductId",component:function(){return n.e("chunk-7774ccda").then(n.bind(null,"a635"))}},{path:"/signin",name:"Signin",component:function(){return n.e("chunk-6ec8d33a").then(n.bind(null,"2c73"))}},{path:"/login",name:"Login",props:!0,component:function(){return n.e("chunk-44035adf").then(n.bind(null,"ef53"))}},{path:"/logout",name:"logout",props:!0,component:function(){return n.e("chunk-b3000488").then(n.bind(null,"7079"))}}],x=new S["a"]({mode:"history",routes:j}),L=x,P=(n("96cf"),n("1da1")),A=n("bc3a"),I=n.n(A),E={products:[]},R={AllProducts:function(t){return t.products}},T={fetchProducts:function(t){var e=t.commit;return Object(P["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("http://localhost:2000/api/routes/products");case 2:n=t.sent,e("setProducts",n.data);case 4:case"end":return t.stop()}}),t)})))()},fetchProduct:function(t,e){var n=t.commit;return Object(P["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("http://localhost:2000/api/routes/products/".concat(e));case 2:r=t.sent,console.log(r.data),n("setProduct",r);case 5:case"end":return t.stop()}}),t)})))()}},B={setProducts:function(t,e){return t.products=e},setProduct:function(t){return t}},N={state:E,actions:T,mutations:B,getters:R},$=(n("b0c0"),"http://localhost:2000/api/routes/users/signup"),F={auth:{token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null}},H={authState:function(t){return t.auth}},M={registerSuccess:function(t,e){var n=t.commit,r=e.name,a=e.email,o=e.password,c=e.nickname;return Object(P["a"])(regeneratorRuntime.mark((function t(){var e,u,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=JSON.stringify({name:r,email:a,password:o,nickname:c}),u=["x-auth-token"],s=I.a.post($,e,u),n("register_LogIn_Success",console.log(s));case 4:case"end":return t.stop()}}),t)})))()},LogInSuccess:function(t){var e=t.commit;e("register_LogIn_Success",4567)},userLogOut:function(t){var e=t.commit;e("set_LogOut_Success"),console.log(1234)}},J={set_LogOut_Success:function(t){return localStorage.removeItem("token"),Object(s["a"])({},t,{token:null,user:null,isAuthenticated:!1,isLoading:!1})},register_LogIn_Success:function(t,e){console.log(t,e),localStorage.setItem("token",e)}},q={state:F,actions:M,mutations:J,getters:H},D=(n("99af"),n("4de4"),n("2909")),U={carts:[]},K={AllCarts:function(t){return t.carts}},V={fetchCarts:function(t){var e=t.commit;return Object(P["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("http://localhost:2000/api/routes/carts");case 2:n=t.sent,console.log(n.data),console.log("fetchCarts"),e("setCarts",n.data);case 6:case"end":return t.stop()}}),t)})))()},addToCart:function(t,e){var n=t.commit;return Object(P["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I.a.post("http://localhost:2000/api/routes/carts/".concat(e));case 2:r=t.sent,console.log(r.data),console.log(e),n("addcart",r);case 6:case"end":return t.stop()}}),t)})))()},deleteCarts:function(t,e){var n=t.commit;return Object(P["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I.a.delete("http://localhost:2000/api/routes/carts/".concat(e));case 2:console.log(e),n("removeCart",e);case 4:case"end":return t.stop()}}),t)})))()}},z={setCarts:function(t,e){return t.carts=e},addcart:function(t,e){return[e].concat(Object(D["a"])(t.carts))},removeCart:function(t,e){return t.carts=t.carts.filter((function(t){return t._id!==e}))}},G={state:U,actions:V,mutations:z,getters:K};r["a"].use(i["a"]);var Q=new i["a"].Store({state:{},mutations:{},actions:{},modules:{Products:N,Carts:G,Auth:q}});r["a"].config.productionTip=!1,r["a"].directive("red",{bind:function(t,e){"red"===e.value?t.style.backgroundColor="red":"darkOrange"===e.value?t.style.backgroundColor="#d88f08":"green"===e.value&&(t.style.backgroundColor="green")}}),new r["a"]({router:L,store:Q,render:function(t){return t(C)}}).$mount("#app")},"766f":function(t,e,n){},"85ec":function(t,e,n){},"8fcc":function(t,e,n){"use strict";var r=n("2421"),a=n.n(r);a.a},c858:function(t,e,n){"use strict";var r=n("766f"),a=n.n(r);a.a}});
//# sourceMappingURL=app.43c14c60.js.map