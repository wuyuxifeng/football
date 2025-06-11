$gwx_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];
function gz$gwx_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'$root']],[3,'g0']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_5=true;
var x=['./components/myswipper/myswipper.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var e8B=_v()
_(r,e8B)
if(_oz(z,0,e,s,gg)){e8B.wxVkey=1
}
e8B.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_5";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/myswipper/myswipper.wxml'] = [$gwx_XC_5, './components/myswipper/myswipper.wxml'];else __wxAppCode__['components/myswipper/myswipper.wxml'] = $gwx_XC_5( './components/myswipper/myswipper.wxml' );
	;__wxRoute = "components/myswipper/myswipper";__wxRouteBegin = true;__wxAppCurrentFile__="components/myswipper/myswipper.js";define("components/myswipper/myswipper.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["components/myswipper/myswipper"],{"0c28":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("92e3"),i={name:"swipper",props:{list:{type:Array,default:function(){return[]}},sHeight:{type:String,default:"274rpx"},sBorderRadius:{type:String,default:"24rpx"},sInterval:{type:Number,default:5e3},sDuration:{type:Number,default:1e3}},data:function(){return{swiperCurrentPos:0}},methods:{swiperChange:function(e){this.swiperCurrentPos=e.detail.current},swiperGoDetail:function(e){var t=this.list[e];console.log(t),this.adClick(t)},adClick:function(t){e.getNetworkType({success:function(n){"none"==n.networkType?e.navigateTo({url:"/pages_mine/mine/networkerror"}):t&&(0,r.adClick)(t)}})},imgError:function(e){console.log("imgerror",e+"---"+this.list[e].imageUrl),this.list[e].imageUrl="/static/images/icon/default.png",console.log("imgerror",e+"---"+this.list[e].imageUrl),this.$forceUpdate()}}};t.default=i}).call(this,n("df3c").default)},"73b2":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var r=function(){this.$createElement;var e=(this._self._c,this.list.length),t=e>1?this.list.length:null;this.$mp.data=Object.assign({},{$root:{g0:e,g1:t}})},i=[]},a847:function(e,t,n){"use strict";n.r(t);var r=n("73b2"),i=n("c8c5");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("c212");var s=n("828b"),c=Object(s.a)(i.default,r.b,r.c,!1,null,null,null,!1,r.a,void 0);t.default=c.exports},c212:function(e,t,n){"use strict";var r=n("cff3");n.n(r).a},c8c5:function(e,t,n){"use strict";n.r(t);var r=n("0c28"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=i.a},cff3:function(e,t,n){}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/myswipper/myswipper-create-component",{"components/myswipper/myswipper-create-component":function(e,t,n){n("df3c").createComponent(n("a847"))}},[["components/myswipper/myswipper-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'components/myswipper/myswipper.js'});require("components/myswipper/myswipper.js");