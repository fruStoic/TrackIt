(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)i=s[l],o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={4:0},o={4:0},a=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{1:"2003a6ec",2:"08df2045",3:"f48417c4"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={1:1,2:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var r=e+"."+{1:"60ebde98",2:"562bbed7",3:"31d6cfe0"}[e]+".css",i=c.p+r,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var s=o[a],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===i))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){s=l[a],u=s.getAttribute("data-href");if(u===r||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,n(o)},f.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){i[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=a);var u=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=setTimeout(function(){d({type:"timeout",target:l})},12e4);function d(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,n[1](a)}o[e]=void 0}}l.onerror=l.onload=d,u.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;a.push([15,0]),n()})({0:function(e,t){},1:function(e,t){},15:function(e,t,n){e.exports=n("JJXq")},2:function(e,t){},3:function(e,t){},Hl11:function(e,t,n){},JJXq:function(e,t,n){"use strict";n.r(t);var r=n("MVZn"),i=n.n(r),o=(n("SpHO"),n("Kw5r")),a=n("4IOb");o["default"].use(a["T"],{cfg:{},components:{QLayout:a["r"],QLayoutDrawer:a["s"],QPageContainer:a["y"],QPage:a["x"],QToolbar:a["L"],QToolbarTitle:a["M"],QBtn:a["g"],QIcon:a["k"],QList:a["t"],QListHeader:a["u"],QItem:a["m"],QItemMain:a["n"],QItemSide:a["o"],QItemTile:a["p"],QTooltip:a["N"],QResizeObservable:a["C"],QModal:a["v"],QSelect:a["E"],QInput:a["l"],QKnob:a["q"],QCheckbox:a["h"],QModalLayout:a["w"],QAlert:a["f"],QTabs:a["J"],QTab:a["H"],QTabPane:a["I"],QToggle:a["K"],QPopover:a["z"],QProgress:a["A"],QSpinnerGears:a["G"],QWindowResizeObservable:a["O"],QDatetime:a["i"],QSearch:a["D"],QSlider:a["F"],QField:a["j"],QRange:a["B"]},directives:{TouchPan:a["Q"],TouchHold:a["P"]},plugins:{Notify:a["e"],Loading:a["c"],LocalStorage:a["d"],Cookies:a["a"],Dialog:a["b"]}});var s=n("lIOY");Object(s["a"])("/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.")},cached:function(e){console.log("Content has been cached for offline use.")},updated:function(e){confirm("The new version of TrackIt! is available. Refresh the page to update?")&&window.location.reload()},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("QBu7"),n("flf9"),n("s/Tp"),n("Hl11"),n("fm0S");var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view"),n("offline",{attrs:{logo:"../statics/trackit.png"}})],1)},u=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$store.state.offline?n("div",{staticClass:"offline-page window-height window-width bg-light column items-center no-wrap"},[n("div",{staticClass:"offline-back"},[n("div",{staticClass:"offline-code"}),n("div",{staticClass:"offline-line"},e._l(Array(20),function(t){return n("span",{key:t},[e._v("offline")])}))])]):e._e()},f=[],d={name:"offline",data:function(){return{intervalId:0}},created:function(){var e=this;this.intervalId=setInterval(function(){e.$store.dispatch("checkConnection")},5e3)}},p=d,v=(n("iUeW"),n("KHd+")),h=Object(v["a"])(p,l,f,!1,null,null,null),g=h.exports,m={name:"App",components:{Offline:g}},w=m,b=(n("ZL7j"),Object(v["a"])(w,c,u,!1,null,null,null)),k=b.exports,y=n("jE9Z"),D=[{path:"/",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"uDGt"))},children:[{path:"devices/:devices",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"uDGt"))}}]},{path:"/login",component:function(){return n.e(1).then(n.bind(null,"AT+L"))}},{path:"/login/:token",component:function(){return n.e(1).then(n.bind(null,"AT+L"))}},{path:"*",component:function(){return n.e(3).then(n.bind(null,"7l0S"))}}];o["default"].use(y["a"]);var T=new y["a"]({mode:"hash",base:"/",scrollBehavior:function(){return{y:0}},routes:D}),I=T,Q=n("L2JU"),x=n("RIqP"),O=n.n(x),S=(n("ls82"),n("yXPU")),P=n.n(S);function A(e){return L.apply(this,arguments)}function L(){return L=P()(regeneratorRuntime.mark(function e(t){var n,r,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.state,r=t.commit,r("reqStart"),e.prev=2,!n.token){e.next=8;break}return e.next=6,o["default"].connector.poolDevices(function(e){r("setDevices",e)},function(e,t){r("updateDevices",{type:e,device:t})});case 6:return i=e.sent,e.abrupt("return",P()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["default"].connector.poolDevicesStop(i);case 2:case"end":return e.stop()}},e,this)})));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),r("reqFailed",e.t0);case 13:case"end":return e.stop()}},e,this,[[2,10]])})),L.apply(this,arguments)}function j(e,t){return C.apply(this,arguments)}function C(){return C=P()(regeneratorRuntime.mark(function e(t,n){var r,i,a,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.state,r=t.commit,i=n.data,a=n.id,r("reqStart"),e.prev=3,e.next=6,o["default"].connector.gw.postDevicesMessages(a,i);case 6:s=e.sent,c=s.data,r("reqSuccessful",{type:"postMessage",payload:c}),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),r("reqFailed",e.t0);case 14:case"end":return e.stop()}},e,this,[[3,11]])})),C.apply(this,arguments)}function M(e){return R.apply(this,arguments)}function R(){return R=P()(regeneratorRuntime.mark(function e(t){var n,r,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,r=t.commit,e.prev=1,e.next=4,o["default"].connector.http.external.get("./statics/icons/favicon-16x16.png?_=".concat((new Date).getTime()));case 4:i=e.sent,200===i.status&&n.offline&&r("setOfflineFlag",!1),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](1),n.offline||r("setOfflineFlag",!0);case 12:case"end":return e.stop()}},e,this,[[1,8]])})),R.apply(this,arguments)}function q(e,t){return E.apply(this,arguments)}function E(){return E=P()(regeneratorRuntime.mark(function e(t,n){var r,i,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.state,i=n||r.activeDevicesID.join(","),!i){e.next=10;break}return e.next=5,o["default"].connector.gw.getDevices(i,{fields:"id,telemetry"});case 5:return a=e.sent,s=Math.max.apply(Math,O()(a.data.result.reduce(function(e,t){return e.push(t.telemetry&&t.telemetry["position.latitude"]?Math.floor(1e3*t.telemetry["position.latitude"].ts):0),e.push(t.telemetry&&t.telemetry["position.longitude"]?Math.floor(1e3*t.telemetry["position.longitude"].ts):0),e},[]))),e.abrupt("return",s-s%864e5);case 10:return e.abrupt("return",Date.now());case 11:case"end":return e.stop()}},e,this)})),E.apply(this,arguments)}var F={poolDevices:A,postMessage:j,checkConnection:M,getLastUpdatePosition:q};n("SRfc"),n("pIFo"),n("91GP"),n("rGqo"),n("KKXr");function _(e){0}function J(e,t){var n=t.type,r=t.payload,i=r.result;switch(n){case"postMessage":a["e"].create({message:"Post message to devices with IDs ".concat(i," success"),type:"positive",icon:"alarm_add",timeout:2500,bgColor:"white"});break;default:JSON.stringify(e[n])!==JSON.stringify(i)&&o["default"].set(e,n,i)}}function N(e,t){if(JSON.stringify(e.devices)!==JSON.stringify(t.data.result)&&o["default"].set(e,"devices",t.data.result),!e.hasDevicesInit)if(V(e),I.currentRoute.params.devices){var n=I.currentRoute.params.devices.split(",").map(function(e){return+e});n.forEach(function(n){t.data.result.filter(function(e){return e.id===n}).length&&G(e,n)}),e.activeDevicesID.length||(console.log("asdf"),I.push("/"))}else{var r=a["d"].get.item("TrackIt Active Devices");r&&r.length&&r.forEach(function(n){t.data.result.filter(function(e){return e.id===n}).length&&G(e,n)})}}function B(e,t){switch(t.type){case"created":e.devices.push(t.device);break;case"updated":e.devices.some(function(n,r){return n.id===t.device.id&&(e.devices[r]=Object.assign(e.devices[r],t.device),!0)});break;case"deleted":e.devices.some(function(n,r){return n.id===t.device.id&&(e.devices.splice(r,1),!0)});break}}function X(e,t){if(t.response&&t.response.status)switch(t.response.status){case 0:z(e,!0),$(e),o["default"].set(e,"token","");break;case 401:U(e);break;default:0}}function z(e,t){o["default"].set(e,"offline",t)}function H(e,t){var n=t.replace("FlespiToken ","");t&&n.match(/^[a-z0-9]+$/i)?(o["default"].connector.token="FlespiToken ".concat(n),a["d"].set("X-Flespi-Token",n)):(n="",o["default"].connector.token="",U(e)),o["default"].set(e,"token",n)}function U(e){var t=a["a"].get("X-Flespi-Token"),n=a["d"].get.item("X-Flespi-Token");t&&n&&t===n&&a["a"].remove("X-Flespi-Token"),a["d"].remove("X-Flespi-Token"),o["default"].connector.token="",o["default"].set(e,"token","")}function G(e,t){e.devices.filter(function(e){return e.id===t})[0].messages_ttl&&(e.activeDevicesID.push(t),a["d"].set("TrackIt Active Devices",e.activeDevicesID),I.push("/devices/".concat(e.activeDevicesID.join(","))))}function K(e,t){var n=e.activeDevicesID.indexOf(t);e.activeDevicesID.splice(n,1),a["d"].set("TrackIt Active Devices",e.activeDevicesID),e.activeDevicesID.length?I.push("/devices/".concat(e.activeDevicesID.join(","))):I.push("/")}function V(e){e.hasDevicesInit=!0}function $(e){e.hasDevicesInit=!1,o["default"].set(e,"devices",[]),o["default"].set(e,"activeDevicesID",[])}var Z={reqStart:_,reqSuccessful:J,reqFailed:X,setToken:H,clearToken:U,setActiveDevice:G,unsetActiveDevice:K,setDevicesInit:V,unsetDevicesInit:$,setOfflineFlag:z,updateDevices:B,setDevices:N},W={},Y={namespaced:!0},ee={messages:Y};o["default"].use(Q["a"]);var te={token:"",devices:[],activeDevicesID:[],hasDevicesInit:!1,offline:!1,isLoading:!1},ne=new Q["a"].Store({state:te,actions:F,mutations:Z,getters:W,modules:ee}),re=ne,ie=n("qSUR"),oe={failed:"Action failed",success:"Action was successful"},ae={en:oe},se=function(e){var t=e.app,n=e.Vue;n.use(ie["a"]),t.i18n=new ie["a"]({locale:"en",fallbackLocale:"en",messages:ae})},ce=(n("a1Th"),n("VTyJ")),ue=n.n(ce),le={socketConfig:{clientId:"trackit-".concat(Math.random().toString(16).substr(2,8))}};-1===window.location.host.indexOf("localhost:9004")&&-1===window.location.host.indexOf("localhost:9005")&&-1===window.location.host.indexOf("localhost:7004")||(le={httpConfig:{server:"https://localhost",port:9005},socketConfig:{server:"wss://localhost:9017",clientId:"trackit-dev-".concat(Math.random().toString(16).substr(2,8))}});var fe=function(e){var t=e.Vue;t.config.productionTip=!1,t.use(ue.a,le)},de=n("TrUB"),pe=n.n(de),ve=function(e){var t=e.Vue;t.use(pe.a)},he=n("/jzl"),ge=n.n(he);o["default"].config.productionTip=!0;var me=i()({el:"#q-app",router:I,store:re},k),we=[];we.push(se),we.push(fe),we.push(ve),we.forEach(function(e){return e({app:me,router:I,store:re,Vue:o["default"]})}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){ge.a.attach(document.body)},!1),new o["default"](me)},ZL7j:function(e,t,n){"use strict";var r=n("usnz"),i=n.n(r);i.a},fm0S:function(e,t,n){},fxmA:function(e,t,n){},iUeW:function(e,t,n){"use strict";var r=n("fxmA"),i=n.n(r);i.a},usnz:function(e,t,n){}});