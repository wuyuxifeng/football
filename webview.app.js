var __globalThis=(typeof __vd_version_info__!=='undefined'&&typeof __vd_version_info__.globalThis!=='undefined')?__vd_version_info__.globalThis:window;var __pageFrameStartTime__=Date.now();var __webviewId__;var __wxAppCode__=__wxAppCode__||{};var __mainPageFrameReady__=__globalThis.__mainPageFrameReady__||function(){};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};;/*v0.5vv_20211229_syb_scopedata*/__globalThis.__wcc_version__='v0.5vv_20211229_syb_scopedata';__globalThis.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
var outerGlobal=typeof __globalThis==='undefined'?window:__globalThis;$gwx=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"m_./uni_modules/mp-html/components/mp-html/node/node.wxml:handler":np_0,"p_./uni_modules/zebra-swiper/wxs/z-swiper-wxs.wxs":np_1,};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./uni_modules/mp-html/components/mp-html/node/node.wxml']={};
f_['./uni_modules/mp-html/components/mp-html/node/node.wxml']['handler'] =nv_require("m_./uni_modules/mp-html/components/mp-html/node/node.wxml:handler");
function np_0(){var nv_module={nv_exports:{}};var nv_inlineTags = ({nv_abbr:true,nv_b:true,nv_big:true,nv_code:true,nv_del:true,nv_em:true,nv_i:true,nv_ins:true,nv_label:true,nv_q:true,nv_small:true,nv_span:true,nv_strong:true,nv_sub:true,nv_sup:true,});nv_module.nv_exports = ({nv_isInline:(function (nv_tagName,nv_style){return(nv_inlineTags[((nt_0=(nv_tagName),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))] || (nv_style || '').nv_indexOf('display:inline') !== -1)}),});return nv_module.nv_exports;}

f_['./uni_modules/zebra-swiper/components/z-swiper-item/z-swiper-item.wxml']={};
f_['./uni_modules/zebra-swiper/components/z-swiper-item/z-swiper-item.wxml']['zSwiperWxs'] =f_['./uni_modules/zebra-swiper/wxs/z-swiper-wxs.wxs'] || nv_require("p_./uni_modules/zebra-swiper/wxs/z-swiper-wxs.wxs");
f_['./uni_modules/zebra-swiper/components/z-swiper-item/z-swiper-item.wxml']['zSwiperWxs']();

f_['./uni_modules/zebra-swiper/components/z-swiper/z-swiper.wxml']={};
f_['./uni_modules/zebra-swiper/components/z-swiper/z-swiper.wxml']['zSwiperWxs'] =f_['./uni_modules/zebra-swiper/wxs/z-swiper-wxs.wxs'] || nv_require("p_./uni_modules/zebra-swiper/wxs/z-swiper-wxs.wxs");
f_['./uni_modules/zebra-swiper/components/z-swiper/z-swiper.wxml']['zSwiperWxs']();

f_['./uni_modules/zebra-swiper/wxs/z-swiper-wxs.wxs'] = nv_require("p_./uni_modules/zebra-swiper/wxs/z-swiper-wxs.wxs");
function np_1(){var nv_module={nv_exports:{}};function nv_onTouchStartWxs(nv_event,nv_ins){nv_ins.nv_callMethod("onTouchStartSwiperWxs",({nv_changedTouches:nv_event.nv_changedTouches,nv_currentTarget:nv_event.nv_currentTarget,nv_touches:nv_event.nv_touches,nv_type:nv_event.nv_type,}))};function nv_onTouchMoveWxs(nv_event,nv_ins){nv_ins.nv_callMethod("onTouchMoveSwiperWxs",({nv_changedTouches:nv_event.nv_changedTouches,nv_currentTarget:nv_event.nv_currentTarget,nv_touches:nv_event.nv_touches,nv_type:nv_event.nv_type,}))};function nv_onTouchEndWxs(nv_event,nv_ins){nv_ins.nv_callMethod("onTouchEndSwiperWxs",({nv_changedTouches:nv_event.nv_changedTouches,nv_currentTarget:nv_event.nv_currentTarget,nv_touches:nv_event.nv_touches,nv_type:nv_event.nv_type,}))};function nv_wxsTransformObserver(nv_newValue,nv_oldValue,nv_ownerInstance,nv_instance){nv_instance.nv_setStyle(({nv_transform:nv_newValue,}))};function nv_wxsItemTransformObserver(nv_newValue,nv_oldValue,nv_ownerInstance,nv_instance){nv_instance.nv_setStyle(({nv_transform:nv_newValue,}))};nv_module.nv_exports = ({nv_onTouchStartWxs:nv_onTouchStartWxs,nv_onTouchMoveWxs:nv_onTouchMoveWxs,nv_onTouchEndWxs:nv_onTouchEndWxs,nv_wxsTransformObserver:nv_wxsTransformObserver,nv_wxsItemTransformObserver:nv_wxsItemTransformObserver,});return nv_module.nv_exports;}

var x=[];if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(outerGlobal.__webview_engine_version__)!='undefined'&&outerGlobal.__webview_engine_version__+1e-6>=0.02+1e-6&&outerGlobal.__mergeData__)
{
env=outerGlobal.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(outerGlobal.__webview_engine_version__)=='undefined'|| outerGlobal.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx();;var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
var __COMMON_STYLESHEETS__ = __COMMON_STYLESHEETS__||{}

var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C = __COMMON_STYLESHEETS__
function makeup(file, opt) {
var _n = typeof(file) === "string";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + (window.__convertRpxToVw__ ? "vw" : "px") + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 )
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var styleSheetManager = window.__styleSheetManager2__
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid );
}
}
Ca={};
css = makeup(file, opt);
if (styleSheetManager) {
var key = (info.path || Math.random()) + ':' + suffix
if (!style) {
styleSheetManager.addItem(key, info.path);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, true);
});
}
styleSheetManager.setCss(key, css);
return;
}
if ( !style )
{
var head = document.head || document.getElementsByTagName('head')[0];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([".",[1],"line-clamp-2{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}\n.",[1],"card{border:1px solid #f9f9f9;border-radius:5px;box-shadow:2px 2px 5px 1px hsla(0,0%,56%,.1);margin:12px;padding:12px}\n.",[1],"nowrap{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.",[1],"avatar{border:2px solid #e5e5e5;border-radius:50%;height:32px;width:32px}\n.",[1],"nodatagroup{align-items:center;display:flex;flex-direction:column;justify-content:center;margin-top:",[0,180],";padding-bottom:",[0,250],"}\n.",[1],"nodataimg{height:",[0,320],";width:",[0,320],"}\n.",[1],"nodata{color:#999;font-size:",[0,30],";margin-top:",[0,60],"}\n.",[1],"loading{color:#888;font-size:",[0,26],";line-height:2em;margin-top:",[0,20],";text-align:center}\n.",[1],"proname{font-size:",[0,26],"}\n.",[1],"proname,.",[1],"proname-height{word-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#333;display:-webkit-box;font-weight:700;line-height:",[0,34],";overflow:hidden;text-overflow:ellipsis;white-space:normal!important}\n.",[1],"proname-height{font-size:",[0,24],";height:",[0,68],";width:100%}\n.",[1],"pricegroup{align-items:flex-end;display:flex;flex-direction:row}\n.",[1],"pricegroup .",[1],"pricetip{color:#ff3900;font-size:",[0,28],";font-weight:400;margin-left:",[0,5],";text-align:end}\n.",[1],"pricegroup .",[1],"price{-webkit-text-fill-color:transparent;text-fill-color:transparent;background:linear-gradient(180deg,#ff663f 4%,#ea702a 99%);-webkit-background-clip:text;background-clip:text;font-family:D-DIN;font-size:",[0,40],";font-weight:700}\n.",[1],"pricegroup .",[1],"qi{color:rgba(26,26,26,.5);font-size:",[0,18],";margin-bottom:",[0,4],";margin-left:",[0,5],"}\n.",[1],"itemlocation,.",[1],"itemtime{word-wrap:break-word;-webkit-line-clamp:1;-webkit-box-orient:vertical;color:#999;display:-webkit-box;font-size:",[0,22],";overflow:hidden;text-overflow:ellipsis;white-space:normal!important}\n.",[1],"itemlocation{width:",[0,450],"}\n.",[1],"marginleftright{margin-left:",[0,30],";margin-right:",[0,30],"}\n.",[1],"content-gray{-webkit-filter:grayscale(100%);filter:grayscale(100%)}\n.",[1],"backgroud-transparent-layout{background-color:rgba(0,0,0,.2);bottom:0;flex-direction:column;left:0;position:fixed;right:0;top:0;z-index:80}\n.",[1],"modlebg{padding:",[0,40]," ",[0,24],"}\n.",[1],"modlebg,.",[1],"modlebg-two{background-color:#fff;border-radius:",[0,24],";margin-top:",[0,24],"}\n.",[1],"modlebg-two{padding:",[0,32]," ",[0,24],"}\n.",[1],"modlebg-list{background-color:#fff;border-radius:",[0,24],";margin-top:",[0,24],";padding-bottom:",[0,40],"}\n.",[1],"modletitle{color:#000;font-size:",[0,36],";font-weight:700}\n.",[1],"bottombutton{background:#ff3900;border-radius:",[0,50],";font-size:",[0,30],";height:",[0,88],";line-height:",[0,88],";margin-bottom:",[0,40],";margin-left:",[0,30],";width:",[0,690],"}\n.",[1],"bottombutton,.",[1],"tabtitle{color:#fff;text-align:center}\n.",[1],"tabtitle{font-size:",[0,34],";font-weight:700}\n.",[1],"bottom-group{align-items:center;background-color:#1f1f2f;bottom:",[0,0],";display:flex;flex-direction:row;height:",[0,140],";position:fixed;width:100%;z-index:9}\n.",[1],"bottom-group .",[1],"signup{background:linear-gradient(180deg,#ffebcc,#f9d298);border-radius:",[0,50],";color:#fff;font-size:",[0,30],";height:",[0,88],";line-height:",[0,88],";text-align:center;width:",[0,686],"}\n@font-face{font-family:D-DIN;src:url(https://res.dasheng.top/app/font/D-DIN.ttf) format(\x22truetype\x22)}\n::-webkit-scrollbar{-webkit-appearance:none;background:transparent;display:none;height:0!important;width:0!important}\nbody::after{-webkit-animation:shadow-preload .1s;-webkit-animation-delay:3s;animation:shadow-preload .1s;animation-delay:3s;content:\x22\x22;left:-1000px;position:fixed;top:-1000px}\n@-webkit-keyframes shadow-preload{0%{background-image:url(https://cdn1.dcloud.net.cn/51304d774e5549785253556c6433686d59574a6a4e3246694d544d334e6a55345a545531/img/shadow-grey.png)}\n100%{background-image:url(https://cdn1.dcloud.net.cn/51304d774e5549785253556c6433686d59574a6a4e3246694d544d334e6a55345a545531/img/shadow-grey.png)}\n}@keyframes shadow-preload{0%{background-image:url(https://cdn1.dcloud.net.cn/51304d774e5549785253556c6433686d59574a6a4e3246694d544d334e6a55345a545531/img/shadow-grey.png)}\n100%{background-image:url(https://cdn1.dcloud.net.cn/51304d774e5549785253556c6433686d59574a6a4e3246694d544d334e6a55345a545531/img/shadow-grey.png)}\n}[bind-data-custom-hidden\x3d\x22true\x22],[data-custom-hidden\x3d\x22true\x22]{display:none!important}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:1:3083)",{path:"./app.wxss"})();;;}var __pageFrameEndTime__=Date.now();__mainPageFrameReady__();