$gwx_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_1 || [];
function gz$gwx_XC_1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShowVerifyCodePopup']])
Z([3,'__e'])
Z([3,'code-container data-v-2eb57f21'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeCodeImg']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'baseImg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_1=true;
var x=['./components/VerifyCodePopup/VerifyCodePopup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_1_1()
var xC=_v()
_(r,xC)
if(_oz(z,0,e,s,gg)){xC.wxVkey=1
var oD=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
}
fE.wxXCkey=1
_(xC,oD)
}
xC.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_1";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/VerifyCodePopup/VerifyCodePopup.wxml'] = [$gwx_XC_1, './components/VerifyCodePopup/VerifyCodePopup.wxml'];else __wxAppCode__['components/VerifyCodePopup/VerifyCodePopup.wxml'] = $gwx_XC_1( './components/VerifyCodePopup/VerifyCodePopup.wxml' );
	;__wxRoute = "components/VerifyCodePopup/VerifyCodePopup";__wxRouteBegin = true;__wxAppCurrentFile__="components/VerifyCodePopup/VerifyCodePopup.js";define("components/VerifyCodePopup/VerifyCodePopup.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["components/VerifyCodePopup/VerifyCodePopup"],{"1dec":function(e,t,o){"use strict";(function(e){var n=o("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(o("7ca3")),a=o("8f59"),r=n(o("4eb4")),i=o("9b69"),u=(o("74e4"),o("0ef3"));function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}var f={data:function(){return{baseImg:"",ruleCode:""}},computed:function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){(0,c.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},(0,a.mapGetters)(["isShowVerifyCodePopup"])),watch:{isShowVerifyCodePopup:function(t,o){console.log("isShowVerifyCodePopup",t+"---"+o),t?(console.log("弹窗状态变化:",t),e.getStorageSync("captchaImage")&&(this.baseImg=e.getStorageSync("captchaImage"))):this.baseImg=""}},methods:{getcaptchaImage:function(){var t=this;(0,i.captchaImage)({}).then((function(o){console.log(o),o.data.captchaImage?(t.baseImg="",t.baseImg="data:image/jpeg;base64,"+o.data.captchaImage,console.log(t.baseImg)):e.showToast({title:"图片地址为空,请点击刷新再试",icon:"none"})})).catch((function(e){}))},checkrule:function(){var t=this;this.ruleCode?(0,u.preventDoubleClick)((function(){(0,i.ruleCaptchaImage)({verifyRuleFlowValue:t.ruleCode}).then((function(e){console.log(e),r.default.commit("SET_IS_SHOW_VERIFYCODEPOPUP",!1)})).catch((function(e){var t;-1!=(null==e||null===(t=e.msg)||void 0===t?void 0:t.indexOf("无需输入验证码"))&&r.default.commit("SET_IS_SHOW_VERIFYCODEPOPUP",!1)}))})):e.showToast({title:"请输入验证码",icon:"none"})},getInputValue:function(e){this.ruleCode=e.detail.value},changeCodeImg:function(){var e=this;(0,u.preventDoubleClick)((function(){console.debug("按钮点击事件触发"),e.getcaptchaImage()}))},onImageLoad:function(){console.debug("图片加载成功")},onImageError:function(e){console.error("图片加载失败",e)}}};t.default=f}).call(this,o("df3c").default)},"321d":function(e,t,o){"use strict";var n=o("c582");o.n(n).a},6689:function(e,t,o){"use strict";o.r(t);var n=o("abda"),c=o("fc0a");for(var a in c)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return c[e]}))}(a);o("321d");var r=o("828b"),i=Object(r.a)(c.default,n.b,n.c,!1,null,"2eb57f21",null,!1,n.a,void 0);t.default=i.exports},abda:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return c})),o.d(t,"a",(function(){}));var n=function(){this.$createElement;var e=(this._self._c,this.isShowVerifyCodePopup?this.$previewImageAddress("pop-alert.png"):null),t=this.isShowVerifyCodePopup?this.$previewImageAddress("refresh-code.png"):null;this.$mp.data=Object.assign({},{$root:{m0:e,m1:t}})},c=[]},c582:function(e,t,o){},fc0a:function(e,t,o){"use strict";o.r(t);var n=o("1dec"),c=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t.default=c.a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/VerifyCodePopup/VerifyCodePopup-create-component",{"components/VerifyCodePopup/VerifyCodePopup-create-component":function(e,t,o){o("df3c").createComponent(o("6689"))}},[["components/VerifyCodePopup/VerifyCodePopup-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'components/VerifyCodePopup/VerifyCodePopup.js'});require("components/VerifyCodePopup/VerifyCodePopup.js");