$gwx_XC_12=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_12 || [];
function gz$gwx_XC_12_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_12=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_12=true;
var x=['./components/customerservice/customerservice.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_12_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_12";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_12();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/customerservice/customerservice.wxml'] = [$gwx_XC_12, './components/customerservice/customerservice.wxml'];else __wxAppCode__['components/customerservice/customerservice.wxml'] = $gwx_XC_12( './components/customerservice/customerservice.wxml' );
	;__wxRoute = "components/customerservice/customerservice";__wxRouteBegin = true;__wxAppCurrentFile__="components/customerservice/customerservice.js";define("components/customerservice/customerservice.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["components/customerservice/customerservice"],{"321e":function(e,t,n){"use strict";var c=n("6a4b");n.n(c).a},"51e2":function(e,t,n){"use strict";n.r(t);var c=n("9b3b"),o=n("ed0d");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("321e");var s=n("828b"),i=Object(s.a)(o.default,c.b,c.c,!1,null,"6f3251b2",null,!1,c.a,void 0);t.default=i.exports},"6a4b":function(e,t,n){},"9b3b":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var c=function(){this.$createElement;var e=(this._self._c,this.$previewImageAddress("mine_phone_0704.png")),t=this.$previewImageAddress("close_plan_popup.png");this.$mp.data=Object.assign({},{$root:{m0:e,m1:t}})},o=[]},ed0d:function(e,t,n){"use strict";n.r(t);var c=n("f8e5"),o=n.n(c);for(var r in c)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return c[e]}))}(r);t.default=o.a},f8e5:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"customerservice",props:{serviceQrcode:{type:String,default:""},serviceTele:{type:String,default:""}},data:function(){return{}},methods:{callTele:function(){this.serviceTele&&e.makePhoneCall({phoneNumber:this.serviceTele})},closePop:function(){this.$emit("closePopup")}}};t.default=n}).call(this,n("df3c").default)}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/customerservice/customerservice-create-component",{"components/customerservice/customerservice-create-component":function(e,t,n){n("df3c").createComponent(n("51e2"))}},[["components/customerservice/customerservice-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'components/customerservice/customerservice.js'});require("components/customerservice/customerservice.js");