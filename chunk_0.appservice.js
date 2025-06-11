$gwx_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_0 || [];
function gz$gwx_XC_0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_0=true;
var x=['./components/PopupIncome/PopupIncome.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_0_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_0";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/PopupIncome/PopupIncome.wxml'] = [$gwx_XC_0, './components/PopupIncome/PopupIncome.wxml'];else __wxAppCode__['components/PopupIncome/PopupIncome.wxml'] = $gwx_XC_0( './components/PopupIncome/PopupIncome.wxml' );
	;__wxRoute = "components/PopupIncome/PopupIncome";__wxRouteBegin = true;__wxAppCurrentFile__="components/PopupIncome/PopupIncome.js";define("components/PopupIncome/PopupIncome.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["components/PopupIncome/PopupIncome"],{"4eaf":function(e,n,t){"use strict";t.r(n);var o=t("c64c"),c=t("e28c");for(var p in c)["default"].indexOf(p)<0&&function(e){t.d(n,e,(function(){return c[e]}))}(p);t("7308");var u=t("828b"),a=Object(u.a)(c.default,o.b,o.c,!1,null,"7405313a",null,!1,o.a,void 0);n.default=a.exports},7308:function(e,n,t){"use strict";var o=t("b10e");t.n(o).a},b10e:function(e,n,t){},c64c:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){}));var o=function(){this.$createElement;var e=(this._self._c,this.$previewImageAddress(this.cardImgSrc)),n=this.$previewImageAddress("vip_popup_done.png");this.$mp.data=Object.assign({},{$root:{m0:e,m1:n}})},c=[]},d5c5:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t("aeee"),c={name:"PopupIncome",props:{type:{type:String,default:o.TicketBean_type},content:String},data:function(){return{}},computed:{cardImgSrc:function(){return(this.type===o.TicketBean_type?"vip_popup_bean":"vip_popup_both")+".png"}},methods:{close:function(){this.$emit("close")}}};n.default=c},e28c:function(e,n,t){"use strict";t.r(n);var o=t("d5c5"),c=t.n(o);for(var p in o)["default"].indexOf(p)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(p);n.default=c.a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/PopupIncome/PopupIncome-create-component",{"components/PopupIncome/PopupIncome-create-component":function(e,n,t){t("df3c").createComponent(t("4eaf"))}},[["components/PopupIncome/PopupIncome-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'components/PopupIncome/PopupIncome.js'});require("components/PopupIncome/PopupIncome.js");