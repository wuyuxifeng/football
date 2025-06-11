$gwx9_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx9_XC_2 || [];
function gz$gwx9_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx9_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx9_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx9_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-16c670ff'])
Z([[2,'!='],[[7],[3,'platform']],[1,'TT']])
Z([3,'transparent'])
Z([3,'__l'])
Z([3,'__e'])
Z([1,false])
Z([3,'data-v-16c670ff'])
Z([1,true])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z(z[7])
Z([[2,'?:'],[[2,'!='],[[7],[3,'platform']],[1,'ALI']],[1,'left'],[1,'']])
Z(z[7])
Z([3,'订单支付'])
Z([3,'628b89d2-1'])
Z([3,'mainContent data-v-16c670ff'])
Z(z[6])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[16])
Z([[2,'||'],[[2,'<'],[[7],[3,'index']],[1,6]],[[7],[3,'isShowSign']]])
Z([[2,'>'],[[6],[[7],[3,'$root']],[3,'g0']],[1,6]])
Z(z[3])
Z(z[4])
Z(z[6])
Z([3,'#1A1A1A'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^getPaymentType']],[[4],[[5],[[4],[[5],[1,'getPaymentType']]]]]]]]])
Z([3,'26rpx'])
Z([3,'628b89d2-2'])
Z(z[3])
Z([3,'data-v-16c670ff vue-ref'])
Z([3,'confirm'])
Z([3,'628b89d2-3'])
Z(z[3])
Z(z[30])
Z([3,'verifycode'])
Z([3,'628b89d2-4'])
})(__WXML_GLOBAL__.ops_cached.$gwx9_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx9_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx9_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx9_XC_2=true;
var x=['./pages_activity/activity/pay.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx9_XC_2_1()
var tQD=_n('view')
_rz(z,tQD,'class',0,e,s,gg)
var eRD=_v()
_(tQD,eRD)
if(_oz(z,1,e,s,gg)){eRD.wxVkey=1
var bSD=_mz(z,'uni-nav-bar',['backgroundColor',2,'bind:__l',1,'bind:clickLeft',2,'border',3,'class',4,'dark',5,'data-event-opts',6,'fixed',7,'leftIcon',8,'statusBar',9,'title',10,'vueId',11],[],e,s,gg)
_(eRD,bSD)
}
var oTD=_n('view')
_rz(z,oTD,'class',14,e,s,gg)
var xUD=_n('view')
_rz(z,xUD,'class',15,e,s,gg)
var fWD=_v()
_(xUD,fWD)
var cXD=function(oZD,hYD,c1D,gg){
var l3D=_v()
_(c1D,l3D)
if(_oz(z,20,oZD,hYD,gg)){l3D.wxVkey=1
}
l3D.wxXCkey=1
return c1D
}
fWD.wxXCkey=2
_2z(z,18,cXD,e,s,gg,fWD,'item','index','index')
var oVD=_v()
_(xUD,oVD)
if(_oz(z,21,e,s,gg)){oVD.wxVkey=1
}
oVD.wxXCkey=1
_(oTD,xUD)
var a4D=_mz(z,'paywayradio',['bind:__l',22,'bind:getPaymentType',1,'class',2,'color',3,'data-event-opts',4,'titleSize',5,'vueId',6],[],e,s,gg)
_(oTD,a4D)
_(tQD,oTD)
var t5D=_mz(z,'pup-limit',['bind:__l',29,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(tQD,t5D)
var e6D=_mz(z,'verify-code-popup',['bind:__l',33,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(tQD,e6D)
eRD.wxXCkey=1
eRD.wxXCkey=3
_(r,tQD)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx9_XC_2";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx9_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_activity/activity/pay.wxml'] = [$gwx9_XC_2, './pages_activity/activity/pay.wxml'];else __wxAppCode__['pages_activity/activity/pay.wxml'] = $gwx9_XC_2( './pages_activity/activity/pay.wxml' );
	;__wxRoute = "pages_activity/activity/pay";__wxRouteBegin = true;__wxAppCurrentFile__="pages_activity/activity/pay.js";define("pages_activity/activity/pay.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_activity/activity/pay"],{"617f":function(e,t,n){"use strict";var i=n("b4c3");n.n(i).a},7077:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniNavBar:function(){return n.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"f9b6"))},paywayradio:function(){return n.e("components/paywayradio/paywayradio").then(n.bind(null,"2bfe"))},VerifyCodePopup:function(){return Promise.all([n.e("common/vendor"),n.e("components/VerifyCodePopup/VerifyCodePopup")]).then(n.bind(null,"6689"))}},a=function(){var e=this,t=(e.$createElement,e._self._c,e.$previewImageAddress("event_detail_blur_foreground.png")),n=e.$previewImageAddress("ticket_detail_divide.png"),i=e.$previewImageAddress("signup_form.png"),a=e.__map(e.formData,(function(t,n){return{$orig:e.__get_orig(t),m3:n<6||e.isShowSign?e.getValueByFlag(t,"cms.activity.entry.name"):null,m4:n<6||e.isShowSign?e.$previewImageAddress("arrowright.png"):null}})),o=e.formData.length,r=o>6?e.$previewImageAddress(e.isShowSign?"arrow_hide_city.png":"arrow_show_city.png"):null;e.$mp.data=Object.assign({},{$root:{m0:t,m1:n,m2:i,l0:a,g0:o,m5:r}})},o=[]},"73c2":function(e,t,n){"use strict";n.r(t);var i=n("7077"),a=n("c7f9");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("b23f"),n("617f");var r=n("828b"),c=Object(r.a)(a.default,i.b,i.c,!1,null,"16c670ff",null,!1,i.a,void 0);t.default=c.exports},"7fa0":function(e,t,n){"use strict";(function(e){var i=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("7eb4")),o=i(n("ee10")),r=n("8794"),c=n("028b"),s=n("9b69"),u=n("6fe6"),d=n("52d4"),f=(n("9341"),{data:function(){return{paymentType:0,supplierId:0,payList:[],formData:[],isSubmit:!1,ticketPrice:"",ticketNum:"",amount:"",activityInfoTicketId:"",activityInfoId:"",itemdata:{},ticketTypeName:"",registName:"",registPhone:"",entryNameList:[],signatureImage:"",orderId:"",refunddesc:"",noClick:!0,isToMpPay:!1,isShowSign:!1,platform:"WX"}},onLoad:function(e){var t=this;console.log("payOnLoad",e),this.getOpenerEventChannel().on("acceptDataFromWritePage",(function(e){console.log("eventChannel",e),t.formData=e.data,t.entryNameList=e.nameList,t.signatureImage=e.signatureImage,t.isSubmit=!0,t.itemdata=JSON.parse(e.itemdata),t.ticketTypeName=e.ticketTypeName,t.ticketPrice=e.ticketPrice,t.ticketNum=e.ticketNum,t.amount=e.amount,t.activityInfoId=e.activityInfoId,t.activityInfoTicketId=e.activityInfoTicketId,t.initConf()}))},methods:{goActivityEntryInfo:function(t){var n=this,i=this.formData[t].memberRequestList;e.navigateTo({url:"/pages_order/mine/activityentryinfo",success:function(e){e.eventChannel.emit("acceptDataFromOpenerPage",{registInfoList:JSON.stringify(i),itemdata:JSON.stringify(n.itemdata)})}})},getPaymentType:function(e){e&&(this.paymentType=e.paymentType,this.supplierId=e.supplierId)},surePay:function(){var t=this;return(0,o.default)(a.default.mark((function n(){var i;return a.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.orderId){n.next=4;break}t.payOrder(),n.next=12;break;case 4:if(0!=t.paymentType){n.next=7;break}return e.showToast({title:"请选择支付方式",icon:"none"}),n.abrupt("return");case 7:return n.next=9,(0,d.getUnclosedOrderFun)();case 9:(i=n.sent)&&t.createOrderFun(),console.log("=====",i);case 12:case"end":return n.stop()}}),n)})))()},createOrderFun:function(){var e=this;this.orderId?this.payOrder():(0,r.trainingRegiste)({activityInfoId:this.activityInfoId,activityInfoTicketId:this.activityInfoTicketId,amount:this.amount,ticketNum:this.ticketNum,ticketPrice:this.ticketPrice,details:this.formData,signatureImage:this.signatureImage}).then((function(t){e.orderId=t.data.orderId,e.amount=t.data.paymentAmount,e.payOrder()})).catch((function(e){console.log(e)}))},payOrder:function(){var t=this,n={orderId:this.orderId,paymentAmount:this.amount,payPaymentType:this.paymentType,paymentMerchant:this.supplierId};(0,d.doOrdersPay)(n).then((function(n){console.log("resolved成功回调"),t.payFinish(),e.requestSubscribeMessage({tmplIds:[u.wxnotifyid_activitycheck],success:function(e){console.log(e)}})})).catch((function(n){console.log("catch失败执行回调抛出失败原因：",n),"cancelPay"==n?t.cancelPayModal():"cancelOrder"==n?t.cancelPayFun():"cancelPayToList"==n?e.reLaunch({url:"/pages_order/mine/activityorder?index=".concat(1)}):e.navigateTo({url:"/pages_mine/mine/agreement?loadurl=".concat(n,"&isToAliPay=true")})}))},payFinish:function(){e.reLaunch({url:"/pages_activity/activity/check?itemdata=".concat(JSON.stringify(this.itemdata),"&amount=").concat(this.amount)})},cancelPayModal:function(){var t=this;e.showModal({title:"继续支付?",content:"点击继续支付按钮立即支付\n取消后跳转到订单页再次支付",showCancel:!0,cancelText:"取消",confirmColor:"#ff5222",confirmText:"继续支付",success:function(n){n.confirm?t.payOrder():n.cancel&&e.reLaunch({url:"/pages_order/mine/activityorder?index=".concat(1)})}})},cancelPayFun:function(){(0,c.cancelPay)({orderId:this.orderId}).then((function(t){console.log(t),e.reLaunch({url:"/pages_order/mine/activityorder?index=".concat(1)})})).catch((function(t){console.log(t),"/pages_order/mine/activityorder?index=".concat(1),e.showToast({title:t.msg,icon:"none"})}))},cancleOrderFun:function(){var t=this;(0,c.cancleOrder)({orderId:this.orderId}).then((function(e){console.log(e),t.orderId=""})).catch((function(t){console.log(t),e.showToast({title:t.msg,icon:"none"})}))},initConf:function(){var t=this;(0,s.confGetListByKeyList)({keyNum:"ctms.cms.common.conf.10024"}).then((function(e){if(console.log(e),e&&e.data)for(var n=0;n<e.data.length;n++)e.data[0].isShow&&(t.refunddesc=e.data[0].linkUrl)})).catch((function(t){console.log(t),e.showToast({title:t.msg,icon:"none"})}))},back:function(){var t=this;this.orderId?this.isToMpPay?e.reLaunch({url:"/pages_order/mine/activityorder?index=".concat(1,"&businessType=",2)}):e.showModal({title:"确认退出",content:"订单还未支付，确认将退出？?\n退出后可以在我的订单中继续支付",showCancel:!0,cancelText:"取消",confirmColor:"#ff5222",confirmText:"确定",success:function(e){e.confirm&&t.cancelPayFun()}}):e.navigateBack()},showHideSignInfo:function(){this.isShowSign=!this.isShowSign},getValueByFlag:function(e,t){for(var n=0;n<e.memberRequestList.length;n++){var i=e.memberRequestList[n];if(i.columnFlag&&i.columnFlag==t)return i.columnValue}return""}}});t.default=f}).call(this,n("df3c").default)},"8ed6":function(e,t,n){"use strict";(function(e,t){var i=n("47a9");n("42bd"),n("861b"),i(n("3240"));var a=i(n("73c2"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("3223").default,n("df3c").createPage)},a5ed:function(e,t,n){},b23f:function(e,t,n){"use strict";var i=n("a5ed");n.n(i).a},b4c3:function(e,t,n){},c7f9:function(e,t,n){"use strict";n.r(t);var i=n("7fa0"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t.default=a.a}},[["8ed6","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_activity/activity/pay.js'});require("pages_activity/activity/pay.js");