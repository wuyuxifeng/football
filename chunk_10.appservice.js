$gwx_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];
function gz$gwx_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_2=true;
var x=['./components/loginpop/loginpop.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_2_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_2";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/loginpop/loginpop.wxml'] = [$gwx_XC_2, './components/loginpop/loginpop.wxml'];else __wxAppCode__['components/loginpop/loginpop.wxml'] = $gwx_XC_2( './components/loginpop/loginpop.wxml' );
	;__wxRoute = "components/loginpop/loginpop";__wxRouteBegin = true;__wxAppCurrentFile__="components/loginpop/loginpop.js";define("components/loginpop/loginpop.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["components/loginpop/loginpop"],{"0c13":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var o=function(){this.$createElement;var e=(this._self._c,this.$previewImageAddress("close.png")),t=this.select?this.$previewImageAddress("checbox_select.png"):null,n=this.select?null:this.$previewImageAddress("checbox_default.png");this.$mp.data=Object.assign({},{$root:{m0:e,m1:t,m2:n}})},i=[]},1716:function(e,t,n){"use strict";n.r(t);var o=n("0c13"),i=n("70bd");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("497b");var c=n("828b"),s=Object(c.a)(i.default,o.b,o.c,!1,null,"0259a00e",null,!1,o.a,void 0);t.default=s.exports},"3d82":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("f26e"),i=n("e2af"),a=n("62ec"),c=(n("feb5"),{name:"cart",props:{show:{type:Boolean,default:!1},list:{type:Array}},data:function(){return{realphone:"",inputcode:"",getCodeText:"获取验证码",getCodeisWaiting:!1,code:"",select:!1,mac:"",model:""}},methods:{close:function(){this.$emit("closeLogin")},getInputPhoneValue:function(e){this.realphone=e.detail.value,console.log(this.realphone)},getInputCardValue:function(e){this.inputcode=e.detail.value,console.log(this.inputcode)},getCodeFun:function(){var t=this;e.hideKeyboard(),this.getCodeisWaiting||(this.realphone?(0,a.isMobile)(this.realphone)?(this.getCodeText="发送中...",this.getCodeisWaiting=!0,(0,o.sendLoginSms)({phone:this.realphone}).then((function(n){console.log(n),e.showToast({title:"验证码已发送",icon:"none"}),t.setTimer()})).catch((function(t){e.showToast({title:t.msg,icon:"none"}),console.log(t)}))):e.showToast({title:"无效的手机号",icon:"none"}):e.showToast({title:"手机号不能为空",icon:"none"}))},setTimer:function(){var e=this,t=180;this.getCodeText="重新获取(180)",this.Timer=setInterval((function(){if(t<=0)return e.getCodeisWaiting=!1,e.getCodeText="获取验证码",void clearInterval(e.Timer);e.getCodeText="重新获取("+t+")",t--}),1e3)},loginFun:function(){var t=this;this.realphone?this.inputcode?this.select?(console.log("fffff",this.realphone),console.log("ggggg",this.inputcode),(0,o.appPhoneLogin)({phone:this.realphone,smsCode:this.inputcode,mac:this.mac,phoneType:this.model}).then((function(n){console.log(n),e.setStorageSync("token",n.data),e.setStorageSync("authphone",t.realphone),e.getStorageSync("avatarUrl")&&e.getStorageSync("isAuth")?t.pageBack():t.initUserInfo()})).catch((function(t){e.showToast({title:t.msg,icon:"none"}),console.log(t)}))):e.showToast({title:"请同意用户协议",icon:"none"}):e.showToast({title:"请输入验证码",icon:"none"}):e.showToast({title:"请输入手机号",icon:"none"})},initUserInfo:function(){var t=this;(0,o.userInfodetail)({}).then((function(n){null!=n&&n.data&&e.setStorageSync("avatarUrl",n.data.avatarUrl),t.initAuthInfo()})).catch((function(e){t.initAuthInfo()}))},initAuthInfo:function(){var t=this;(0,i.getAccountRegistration)({}).then((function(n){console.log(n),n.data?(e.setStorageSync("isAuth",n.data.isRealAuth),e.setStorageSync("authName",n.data.name)):e.setStorageSync("isAuth",!1),t.pageBack()})).catch((function(e){t.pageBack()}))},pageBack:function(){this.$emit("loginFun")},getSelect:function(){this.select=!this.select},userServiceAgreement:function(){e.navigateTo({url:"/pages_config/sysconfig/sysconfig?keynum=ctms.cms.common.conf.10019"})},privateAgreement:function(){e.navigateTo({url:"/pages_config/sysconfig/sysconfig?keynum=ctms.cms.common.conf.10018"})},getDeviceMac:function(){var e="",t=plus.android.importClass("java.net.NetworkInterface").getByName("wlan0").getHardwareAddress();e="";for(var n=0;n<t.length;n++){var o="",i=t[n];1==(o=i<0?(255+i+1).toString(16):i.toString(16)).length&&(o="0"+o),e+=o}this.mac=e,console.log("deviceMac",e)}}});t.default=c}).call(this,n("df3c").default)},"497b":function(e,t,n){"use strict";var o=n("a595");n.n(o).a},"70bd":function(e,t,n){"use strict";n.r(t);var o=n("3d82"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t.default=i.a},a595:function(e,t,n){}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/loginpop/loginpop-create-component",{"components/loginpop/loginpop-create-component":function(e,t,n){n("df3c").createComponent(n("1716"))}},[["components/loginpop/loginpop-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'components/loginpop/loginpop.js'});require("components/loginpop/loginpop.js");