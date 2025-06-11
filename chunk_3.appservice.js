$gwx_XC_23=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_23 || [];
function gz$gwx_XC_23_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_23=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_23=true;
var x=['./components/customtitlebar/customtitlebar.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_23_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_23";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_23();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/customtitlebar/customtitlebar.wxml'] = [$gwx_XC_23, './components/customtitlebar/customtitlebar.wxml'];else __wxAppCode__['components/customtitlebar/customtitlebar.wxml'] = $gwx_XC_23( './components/customtitlebar/customtitlebar.wxml' );
	;__wxRoute = "components/customtitlebar/customtitlebar";__wxRouteBegin = true;__wxAppCurrentFile__="components/customtitlebar/customtitlebar.js";define("components/customtitlebar/customtitlebar.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["components/customtitlebar/customtitlebar"],{"4a21":function(t,e,n){},"7e6c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("f0e6"),o={name:"customtitlebar",props:{title:{type:String,default:""},defaultBack:{type:Boolean,default:!0},titleBarColor:{type:String,default:"rgba(255,255,255,0)"},titleTextColor:{type:String,default:"#1A1A1A"},backImageUrl:{type:String,default:"arrow_left_round.png"}},data:function(){return{titleTop:100,titleHeight:64,isMP:!0}},mounted:function(){if(this.isMP){var t=(0,a.getMenuBoundingClientRect)();this.titleTop=t.top,this.titleHeight=t.height}},methods:{back:function(){this.defaultBack?t.navigateBack({delta:1}):this.$emit("back")}}};e.default=o}).call(this,n("df3c").default)},"935d":function(t,e,n){"use strict";var a=n("4a21");n.n(a).a},c9d6:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var a=function(){this.$createElement;var t=(this._self._c,this.$previewImageAddress(this.backImageUrl));this.$mp.data=Object.assign({},{$root:{m0:t}})},o=[]},ceab:function(t,e,n){"use strict";n.r(e);var a=n("7e6c"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e.default=o.a},e34b:function(t,e,n){"use strict";n.r(e);var a=n("c9d6"),o=n("ceab");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("935d");var c=n("828b"),u=Object(c.a)(o.default,a.b,a.c,!1,null,null,null,!1,a.a,void 0);e.default=u.exports}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/customtitlebar/customtitlebar-create-component",{"components/customtitlebar/customtitlebar-create-component":function(t,e,n){n("df3c").createComponent(n("e34b"))}},[["components/customtitlebar/customtitlebar-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'components/customtitlebar/customtitlebar.js'});require("components/customtitlebar/customtitlebar.js");