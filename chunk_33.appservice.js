$gwx_XC_27=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_27 || [];
function gz$gwx_XC_27_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-1b84d987'])
Z([3,'btn data-v-1b84d987'])
Z([[7],[3,'isLogined']])
Z([[2,'!'],[[7],[3,'select']]])
Z([[2,'=='],[[7],[3,'platform']],[1,'WX']])
Z([[2,'=='],[[7],[3,'platform']],[1,'TT']])
Z([[2,'=='],[[7],[3,'platform']],[1,'ALI']])
Z([3,'__l'])
Z([3,'data-v-1b84d987 vue-ref'])
Z([3,'loginpopup'])
Z([1,false])
Z([3,'bottom'])
Z([3,'cb70f740-1'])
Z([[4],[[5],[1,'default']]])
Z(z[7])
Z([3,'__e'])
Z(z[15])
Z([3,'data-v-1b84d987'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^loginFun']],[[4],[[5],[[4],[[5],[1,'loginFun']]]]]]]],[[4],[[5],[[5],[1,'^closeLogin']],[[4],[[5],[[4],[[5],[1,'closeLogin']]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'cb70f740-2'],[1,',']],[1,'cb70f740-1']])
Z(z[7])
Z(z[8])
Z([3,'confirm'])
Z([3,'cb70f740-3'])
Z(z[7])
Z(z[8])
Z([3,'verifycode'])
Z([3,'cb70f740-4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_27=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_27=true;
var x=['./pages/mine/login.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_27_1()
var hWM=_n('view')
_rz(z,hWM,'class',0,e,s,gg)
var oXM=_n('view')
_rz(z,oXM,'class',1,e,s,gg)
var cYM=_v()
_(oXM,cYM)
if(_oz(z,2,e,s,gg)){cYM.wxVkey=1
}
else{cYM.wxVkey=2
var oZM=_v()
_(cYM,oZM)
if(_oz(z,3,e,s,gg)){oZM.wxVkey=1
}
else{oZM.wxVkey=2
var l1M=_v()
_(oZM,l1M)
if(_oz(z,4,e,s,gg)){l1M.wxVkey=1
}
else{l1M.wxVkey=2
var a2M=_v()
_(l1M,a2M)
if(_oz(z,5,e,s,gg)){a2M.wxVkey=1
}
else{a2M.wxVkey=2
var t3M=_v()
_(a2M,t3M)
if(_oz(z,6,e,s,gg)){t3M.wxVkey=1
}
t3M.wxXCkey=1
}
a2M.wxXCkey=1
}
l1M.wxXCkey=1
}
oZM.wxXCkey=1
}
cYM.wxXCkey=1
_(hWM,oXM)
var e4M=_mz(z,'uni-popup',['bind:__l',7,'class',1,'data-ref',2,'maskClick',3,'type',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var b5M=_mz(z,'loginpop',['bind:__l',14,'bind:closeLogin',1,'bind:loginFun',2,'class',3,'data-event-opts',4,'vueId',5],[],e,s,gg)
_(e4M,b5M)
_(hWM,e4M)
var o6M=_mz(z,'pup-limit',['bind:__l',20,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(hWM,o6M)
var x7M=_mz(z,'verify-code-popup',['bind:__l',24,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(hWM,x7M)
_(r,hWM)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_27";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_27();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/login.wxml'] = [$gwx_XC_27, './pages/mine/login.wxml'];else __wxAppCode__['pages/mine/login.wxml'] = $gwx_XC_27( './pages/mine/login.wxml' );
	;__wxRoute = "pages/mine/login";__wxRouteBegin = true;__wxAppCurrentFile__="pages/mine/login.js";define("pages/mine/login.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/mine/login"],{"116a":function(e,n,o){"use strict";o.r(n);var t=o("6044"),a=o("82e3");for(var i in a)["default"].indexOf(i)<0&&function(e){o.d(n,e,(function(){return a[e]}))}(i);o("ac6b");var c=o("828b"),s=Object(c.a)(a.default,t.b,t.c,!1,null,"1b84d987",null,!1,t.a,void 0);n.default=s.exports},"570f":function(e,n,o){"use strict";(function(e,t){var a=o("47a9");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(o("7eb4")),c=a(o("ee10")),s=o("f26e"),r=o("e2af"),u={data:function(){return{select:!1,isLogined:!1,platform:"WX",logoUrl:"",pageSize:0,params:null}},onLoad:function(){e.getStorageSync("openid")&&e.getStorageSync("loginphone")?this.isLogined=!0:"TT"==this.platform&&e.login({provider:"toutiao",success:function(e){console.log("loginRes",e)}}),this.logoUrl=e.getStorageSync("logoImg")},methods:{getSelect:function(){this.select=!this.select},userServiceAgreement:function(){e.navigateTo({url:"/pages_config/sysconfig/sysconfig?keynum=ctms.cms.common.conf.10019"})},privateAgreement:function(){e.navigateTo({url:"/pages_config/sysconfig/sysconfig?keynum=ctms.cms.common.conf.10018"})},onAuthLoginChange:function(){this.select||e.showToast({title:"请阅读并同意协议后登录",icon:"none"})},decryptPhoneNumber:function(n){var o=this;this.select?(console.log("获取手机号",n),null!=n.detail.code&&(0,s.getWxUserPhone)({jsCode:n.detail.code}).then((function(n){t.login({success:function(t){console.log(t),(0,s.getOpenId)({jsCode:t.code,phone:n.data.phone_info.phoneNumber}).then((function(t){e.setStorageSync("openid",t.data.openid),o.appLogin(t.data.openid,n.data.phone_info.phoneNumber)})).catch((function(n){e.showToast({title:n.msg,icon:"none"}),e.hideLoading()}))}})})).catch((function(n){e.showToast({title:n.msg,icon:"none"}),e.hideLoading()}))):e.showToast({title:"请阅读并同意协议后登录",icon:"none"})},quickLogin:function(){this.select?this.appLogin(e.getStorageSync("openid"),e.getStorageSync("loginphone")):e.showToast({title:"请阅读并同意协议后登录",icon:"none"})},getPhoneNumberHandler:function(e){},ttLogin:function(){console.log("ttLogin"),this.ttLoginTwo()},ttLoginTwo:function(){var n=this;e.login({provider:"toutiao",success:function(e){console.log("loginRes",e),e&&(n.params={jsCode:e.code,anonymousCode:e.anonymousCode})}})},onGetPhoneNumber:function(n){var o=this;console.log("onGetPhoneNumber",n),console.log(n.detail.errMsg),console.log(n.detail.iv),console.log(n.detail.encryptedData),this.params&&(0,s.getTtOpenId)(this.params).then((function(t){null!=t&&t.data&&(e.setStorageSync("openid",t.data.openid),o.queryTtPhone(t.data.openid,t.data.session_key,n.detail.encryptedData,n.detail.iv))})).catch((function(n){e.showToast({title:n.msg,icon:"none"}),e.hideLoading()}))},queryTtPhone:function(e,n,o,t){var a=this;return(0,c.default)(i.default.mark((function c(){var r,u,l;return i.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("openid",e),console.log("sessionKey",n),console.log("encryptedData",o),console.log("iv",t),i.prev=4,i.next=7,(0,s.getTtPhone)({sessionKey:n,encryptedData:o,iv:t,cloudId:""});case 7:u=i.sent,console.log(u),null!=u&&null!==(r=u.data)&&void 0!==r&&r.phone&&(l=JSON.parse(u.data.phone),console.log("phoneParse",l),console.log("phoneParse",l.phoneNumber),a.appLogin(e,l.phoneNumber)),i.next=15;break;case 12:i.prev=12,i.t0=i.catch(4),console.log("lockSeatPluginerror"+i.t0);case 15:return i.prev=15,i.finish(15);case 17:case"end":return i.stop()}}),c,null,[[4,12,15,17]])})))()},getUserPhoneNumber:function(n){var o=this;console.log("支付宝获取手机号",JSON.stringify(n)),n.detail&&n.detail.encryptedData&&n.detail.sign&&my.getAuthCode({scopes:"auth_base",success:function(){var t=(0,c.default)(i.default.mark((function t(a){var c;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("支付宝获取authcode",a),!a.authCode){t.next=6;break}return t.next=4,(0,s.getAliUserPhone)({authCode:a.authCode,encryptedData:n.detail.encryptedData,sign:n.detail.sign});case 4:(c=t.sent)&&200==c.code&&c.data&&(e.setStorageSync("openid",c.data.userId),o.appLogin(c.data.openId,c.data.phone));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),fail:function(e){console.log("my.getAuthCode 调用失败",e)}})},appLogin:function(n,o){var t=this;(0,s.webAppLogined)({accountType:"ACCOUNT_TYPE_WX_APPLET",loginType:"LOGIN_BY_WEIXIN_APPLET",openId:n,unionid:null,phone:o}).then((function(n){console.log("token信息——————",n),e.setStorageSync("token",n.data),e.setStorageSync("authphone",o),e.setStorageSync("loginphone",o),e.getStorageSync("avatarUrl")&&e.getStorageSync("isAuth")?t.pageBack():t.initUserInfo()})).catch((function(n){e.showToast({title:n.msg,icon:"none"})}))},initUserInfo:function(){var n=this;(0,s.userInfodetail)({}).then((function(o){null!=o&&o.data&&e.setStorageSync("avatarUrl",o.data.avatarUrl),n.initAuthInfo()})).catch((function(e){n.initAuthInfo()}))},initAuthInfo:function(){var n=this;(0,r.getAccountRegistration)({}).then((function(o){o.data?(e.setStorageSync("isAuth",o.data.isRealAuth),e.setStorageSync("authName",o.data.name)):e.setStorageSync("isAuth",!1),n.pageBack()})).catch((function(e){n.pageBack()}))},pageBack:function(){this.pageSize=0;var n=getCurrentPages();console.log("----+",n.length);for(var o=0;o<n.length;o++){var t=n[o];"pages/mine/login"==t.route&&(this.pageSize=this.pageSize+1),console.log("----+",t.route)}console.log("this.pageSize",this.pageSize),e.navigateBack({delta:this.pageSize})},loginFun:function(){this.$refs.loginpopup.close(),e.navigateBack({delta:1})},closeLogin:function(){this.$refs.loginpopup.close()}}};n.default=u}).call(this,o("df3c").default,o("3223").default)},6044:function(e,n,o){"use strict";o.d(n,"b",(function(){return a})),o.d(n,"c",(function(){return i})),o.d(n,"a",(function(){return t}));var t={uniPopup:function(){return o.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(o.bind(null,"5b0a"))},loginpop:function(){return Promise.all([o.e("common/vendor"),o.e("components/loginpop/loginpop")]).then(o.bind(null,"1716"))},VerifyCodePopup:function(){return Promise.all([o.e("common/vendor"),o.e("components/VerifyCodePopup/VerifyCodePopup")]).then(o.bind(null,"6689"))}},a=function(){this.$createElement;var e=(this._self._c,this.logoUrl?null:this.$previewImageAddress("logo-250526.png")),n=this.select?this.$previewImageAddress("checbox_select.png"):null,o=this.select?null:this.$previewImageAddress("checbox_default.png");this.$mp.data=Object.assign({},{$root:{m0:e,m1:n,m2:o}})},i=[]},"82e3":function(e,n,o){"use strict";o.r(n);var t=o("570f"),a=o.n(t);for(var i in t)["default"].indexOf(i)<0&&function(e){o.d(n,e,(function(){return t[e]}))}(i);n.default=a.a},ac6b:function(e,n,o){"use strict";var t=o("ef2b");o.n(t).a},c138:function(e,n,o){"use strict";(function(e,n){var t=o("47a9");o("42bd"),o("861b"),t(o("3240"));var a=t(o("116a"));e.__webpack_require_UNI_MP_PLUGIN__=o,n(a.default)}).call(this,o("3223").default,o("df3c").createPage)},ef2b:function(e,n,o){}},[["c138","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages/mine/login.js'});require("pages/mine/login.js");