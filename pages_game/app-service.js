var __wxAppData=__wxAppData||{};var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};if(this&&this.__g===undefined)Object.defineProperty(this,"__g",{configurable:false,enumerable:false,writable:false,value:function(){function D(e,t){if(typeof t!="undefined")e.children.push(t)}function S(e){if(typeof e!="undefined")return{tag:"virtual",wxKey:e,children:[]};return{tag:"virtual",children:[]}}function v(e){return{tag:"wx-"+e,attr:{},children:[],n:[],raw:{},generics:{}}}function e(e,t){t&&e.properities.push(t)}function t(e,t,r){return typeof e[r]!="undefined"?e[r]:t[r]}function u(e){console.warn("WXMLRT_"+g+":"+e)}function r(e,t){u(t+":-1:-1:-1: Template `"+e+"` is being called recursively, will be stop.")}var s=console.warn;var n=console.log;function o(){function e(){}e.prototype={hn:function(e,t){if(typeof e=="object"){var r=0;var n=false,o=false;for(var a in e){n=n|a==="__value__";o=o|a==="__wxspec__";r++;if(r>2)break}return r==2&&n&&o&&(t||e.__wxspec__!=="m"||this.hn(e.__value__)==="h")?"h":"n"}return"n"},nh:function(e,t){return{__value__:e,__wxspec__:t?t:true}},rv:function(e){return this.hn(e,true)==="n"?e:this.rv(e.__value__)},hm:function(e){if(typeof e=="object"){var t=0;var r=false,n=false;for(var o in e){r=r|o==="__value__";n=n|o==="__wxspec__";t++;if(t>2)break}return t==2&&r&&n&&(e.__wxspec__==="m"||this.hm(e.__value__))}return false}};return new e}var A=o();function T(e){var t=e.split("\n "+" "+" "+" ");for(var r=0;r<t.length;++r){if(0==r)continue;if(")"===t[r][t[r].length-1])t[r]=t[r].replace(/\s\(.*\)$/,"");else t[r]="at anonymous function"}return t.join("\n "+" "+" "+" ")}function a(M){function m(e,t,r,n,o){var a=false;var i=e[0][1];var p,u,l,f,v,c;switch(i){case"?:":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):x(e[3],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"&&":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):A.rv(p);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"||":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?A.rv(p):x(e[2],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"+":case"*":case"/":case"%":case"|":case"^":case"&":case"===":case"==":case"!=":case"!==":case">=":case"<=":case">":case"<":case"<<":case">>":p=x(e[1],t,r,n,o,a);u=x(e[2],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");switch(i){case"+":f=A.rv(p)+A.rv(u);break;case"*":f=A.rv(p)*A.rv(u);break;case"/":f=A.rv(p)/A.rv(u);break;case"%":f=A.rv(p)%A.rv(u);break;case"|":f=A.rv(p)|A.rv(u);break;case"^":f=A.rv(p)^A.rv(u);break;case"&":f=A.rv(p)&A.rv(u);break;case"===":f=A.rv(p)===A.rv(u);break;case"==":f=A.rv(p)==A.rv(u);break;case"!=":f=A.rv(p)!=A.rv(u);break;case"!==":f=A.rv(p)!==A.rv(u);break;case">=":f=A.rv(p)>=A.rv(u);break;case"<=":f=A.rv(p)<=A.rv(u);break;case">":f=A.rv(p)>A.rv(u);break;case"<":f=A.rv(p)<A.rv(u);break;case"<<":f=A.rv(p)<<A.rv(u);break;case">>":f=A.rv(p)>>A.rv(u);break;default:break}return l?A.nh(f,"c"):f;break;case"-":p=e.length===3?x(e[1],t,r,n,o,a):0;u=e.length===3?x(e[2],t,r,n,o,a):x(e[1],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");f=l?A.rv(p)-A.rv(u):p-u;return l?A.nh(f,"c"):f;break;case"!":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=!A.rv(p);return l?A.nh(f,"c"):f;case"~":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=~A.rv(p);return l?A.nh(f,"c"):f;default:s("unrecognized op"+i)}}function x(e,t,r,n,o,a){var i=e[0];var p=false;if(typeof a!=="undefined")o.ap=a;if(typeof i==="object"){var u=i[0];var l,f,v,c,s,y,b,d,h,_,g;switch(u){case 2:return m(e,t,r,n,o);break;case 4:return x(e[1],t,r,n,o,p);break;case 5:switch(e.length){case 2:l=x(e[1],t,r,n,o,p);return M?[l]:[A.rv(l)];return[l];break;case 1:return[];break;default:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);l.push(M?v:A.rv(v));return l;break}break;case 6:l=x(e[1],t,r,n,o);var w=o.ap;h=A.hn(l)==="h";f=h?A.rv(l):l;o.is_affected|=h;if(M){if(f===null||typeof f==="undefined"){return h?A.nh(undefined,"e"):undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return h||_?A.nh(undefined,"e"):undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return h||_?g?y:A.nh(y,"e"):y}else{if(f===null||typeof f==="undefined"){return undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return g?A.rv(y):y}case 7:switch(e[1][0]){case 11:o.is_affected|=A.hn(n)==="h";return n;case 3:b=A.rv(r);d=A.rv(t);v=e[1][1];if(n&&n.f&&n.f.hasOwnProperty(v)){l=n.f;o.ap=true}else{l=b&&b.hasOwnProperty(v)?r:d&&d.hasOwnProperty(v)?t:undefined}if(M){if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;y=h&&!g?A.nh(y,"e"):y;return y}}else{if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;return A.rv(y)}}return undefined}break;case 8:l={};l[e[1]]=x(e[2],t,r,n,o,p);return l;break;case 9:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);function O(e,t,r){var n,o;h=A.hn(e)==="h";_=A.hn(t)==="h";f=A.rv(e);c=A.rv(t);for(var a in c){if(r||!f.hasOwnProperty(a)){f[a]=M?_?A.nh(c[a],"e"):c[a]:A.rv(c[a])}}return e}var s=l;var j=true;if(typeof e[1][0]==="object"&&e[1][0][0]===10){l=v;v=s;j=false}if(typeof e[1][0]==="object"&&e[1][0][0]===10){var P={};return O(O(P,l,j),v,j)}else return O(l,v,j);break;case 10:l=x(e[1],t,r,n,o,p);l=M?l:A.rv(l);return l;break;case 12:var P;l=x(e[1],t,r,n,o);if(!o.ap){return M&&A.hn(l)==="h"?A.nh(P,"f"):P}var w=o.ap;v=x(e[2],t,r,n,o,p);o.ap=w;h=A.hn(l)==="h";_=N(v);f=A.rv(l);c=A.rv(v);snap_bb=K(c,"nv_");try{P=typeof f==="function"?K(f.apply(null,snap_bb)):undefined}catch(t){t.message=t.message.replace(/nv_/g,"");t.stack=t.stack.substring(0,t.stack.indexOf("\n",t.stack.lastIndexOf("at nv_")));t.stack=t.stack.replace(/\snv_/g," ");t.stack=T(t.stack);if(n.debugInfo){t.stack+="\n "+" "+" "+" at "+n.debugInfo[0]+":"+n.debugInfo[1]+":"+n.debugInfo[2];console.error(t)}P=undefined}return M&&(_||h)?A.nh(P,"f"):P}}else{if(i===3||i===1)return e[1];else if(i===11){var l="";for(var D=1;D<e.length;D++){var S=A.rv(x(e[D],t,r,n,o,p));l+=typeof S==="undefined"?"":S}return l}}}function e(e,t,r,n,o,a){if(e[0]=="11182016"){n.debugInfo=e[2];return x(e[1],t,r,n,o,a)}else{n.debugInfo=null;return x(e,t,r,n,o,a)}}return e}var f=a(true);var c=a(false);function i(e,t,r,n,o,a,i,p){{var u={is_affected:false};var l=f(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(a)||u.is_affected!=p){console.warn("A. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(a)+", "+p+" is expected")}}{var u={is_affected:false};var l=c(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(i)||u.is_affected!=p){console.warn("B. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(i)+", "+p+" is expected")}}}function y(e,t,r,n,o,a,i,p,u){var l=A.hn(e)==="n";var f=A.rv(n);var v=f.hasOwnProperty(i);var c=f.hasOwnProperty(p);var s=f[i];var y=f[p];var b=Object.prototype.toString.call(A.rv(e));var d=b[8];if(d==="N"&&b[10]==="l")d="X";var h;if(l){if(d==="A"){var _;for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");_=A.rv(e[g]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;var _;for(var O in e){f[i]=e[O];f[p]=l?O:A.nh(O,"h");_=A.rv(e[O]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<e;g++){f[i]=g;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}else{var j=A.rv(e);var _,P;if(d==="A"){for(var g=0;g<j.length;g++){P=j[g];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?g:A.nh(g,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;for(var O in j){P=j[O];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?O:A.nh(O,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<j.length;g++){P=A.nh(j[g],"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<j;g++){P=A.nh(g,"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}if(v){f[i]=s}else{delete f[i]}if(c){f[p]=y}else{delete f[p]}}function N(e){if(A.hn(e)=="h")return true;if(typeof e!=="object")return false;for(var t in e){if(e.hasOwnProperty(t)){if(N(e[t]))return true}}return false}function b(e,t,r,n,o){var a=false;var i=K(n,"",2);if(o.ap&&i&&i.constructor===Function){t="$wxs:"+t;e.attr["$gdc"]=K}if(o.is_affected||N(n)){e.n.push(t);e.raw[t]=n}e.attr[t]=i}function d(e,t,r,n,o,a){a.opindex=r;var i={},p;var u=c(z[r],n,o,a,i);b(e,t,r,u,i)}function h(e,t,r,n,o,a,i){i.opindex=n;var p={},u;var l=c(e[n],o,a,i,p);b(t,r,n,l,p)}function p(e,t,r,n){n.opindex=e;var o={};var a=c(z[e],t,r,n,o);return a&&a.constructor===Function?undefined:a}function l(e,t,r,n,o){o.opindex=t;var a={};var i=c(e[t],r,n,o,a);return i&&i.constructor===Function?undefined:i}function _(e,t,r,n,o){var o=o||{};n.opindex=e;return f(z[e],t,r,n,o)}function w(e,t,r,n,o,a){var a=a||{};o.opindex=t;return f(e[t],r,n,o,a)}function O(e,t,r,n,o,a,i,p,u){var l={};var f=_(e,r,n,o);y(f,t,r,n,o,a,i,p,u)}function j(e,t,r,n,o,a,i,p,u,l){var f={};var v=w(e,t,n,o,a);y(v,r,n,o,a,i,p,u,l)}function P(e,t,r,n,o,a){var i=v(e);var p=0;for(var u=0;u<t.length;u+=2){if(p+t[u+1]<0){i.attr[t[u]]=true}else{d(i,t[u],p+t[u+1],n,o,a);if(p===0)p=t[u+1]}}for(var u=0;u<r.length;u+=2){if(p+r[u+1]<0){i.generics[r[u]]=""}else{var l=c(z[p+r[u+1]],n,o,a);if(l!="")l="wx-"+l;i.generics[r[u]]=l;if(p===0)p=r[u+1]}}return i}function M(e,t,r,n,o,a,i){var p=v(t);var u=0;for(var l=0;l<r.length;l+=2){if(u+r[l+1]<0){p.attr[r[l]]=true}else{h(e,p,r[l],u+r[l+1],o,a,i);if(u===0)u=r[l+1]}}for(var l=0;l<n.length;l+=2){if(u+n[l+1]<0){p.generics[n[l]]=""}else{var f=c(e[u+n[l+1]],o,a,i);if(f!="")f="wx-"+f;p.generics[n[l]]=f;if(u===0)u=n[l+1]}}return p}var m=function(){if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){x();C();k();U();I();L();E();R();F()}if(typeof __WXML_GLOBAL__!=="undefined")__WXML_GLOBAL__.wxs_nf_init=true};var x=function(){Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"});Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return"[object Object]"}})};var C=function(){Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"});Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length},set:function(){}});Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return"[function Function]"}})};var k=function(){Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join()}});Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(e){e=undefined==e?",":e;var t="";for(var r=0;r<this.length;++r){if(0!=r)t+=e;if(null==this[r]||undefined==this[r])t+="";else if(typeof this[r]=="function")t+=this[r].nv_toString();else if(typeof this[r]=="object"&&this[r].nv_constructor==="Array")t+=this[r].nv_join();else t+=this[r].toString()}return t}});Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"});Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat});Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop});Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push});Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse});Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift});Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice});Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort});Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice});Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift});Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf});Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf});Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every});Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some});Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach});Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map});Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter});Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce});Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight});Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var U=function(){Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"});Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString});Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf});Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt});Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt});Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat});Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf});Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf});Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare});Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match});Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace});Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search});Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice});Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split});Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring});Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase});Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase});Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase});Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase});Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim});Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var I=function(){Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"});Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString});Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})};var L=function(){Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE});Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE});Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY});Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY});Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"});Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString});Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString});Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf});Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed});Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential});Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})};var E=function(){Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E});Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10});Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2});Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E});Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E});Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI});Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2});Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2});Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs});Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos});Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin});Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan});Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2});Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil});Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos});Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp});Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor});Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log});Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max});Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min});Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow});Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random});Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round});Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin});Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt});Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})};var R=function(){Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"});Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse});Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC});Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now});Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString});Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString});Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString});Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString});Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString});Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString});Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf});Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime});Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear});Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear});Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth});Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth});Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate});Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate});Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay});Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay});Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours});Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours});Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes});Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes});Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds});Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds});Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds});Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset});Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime});Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds});Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds});Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds});Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes});Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes});Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours});Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours});Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate});Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate});Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth});Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth});Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear});Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear});Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString});Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString});Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})};var F=function(){Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"});Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec});Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test});Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString});Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex},set:function(e){this.lastIndex=e}})};m();var J=function(){var e=Array.prototype.slice.call(arguments);e.unshift(Date);return new(Function.prototype.bind.apply(Date,e))};var B=function(){var e=Array.prototype.slice.call(arguments);e.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp,e))};var Y={};Y.nv_log=function(){var e="WXSRT:";for(var t=0;t<arguments.length;++t)e+=arguments[t]+" ";console.log(e)};var G=parseInt,X=parseFloat,H=isNaN,V=isFinite,$=decodeURI,W=decodeURIComponent,Q=encodeURI,q=encodeURIComponent;function K(e,t,r){e=A.rv(e);if(e===null||e===undefined)return e;if(typeof e==="string"||typeof e==="boolean"||typeof e==="number")return e;if(e.constructor===Object){var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o))if(undefined===t)n[o.substring(3)]=K(e[o],t,r);else n[t+o]=K(e[o],t,r);return n}if(e.constructor===Array){var n=[];for(var a=0;a<e.length;a++)n.push(K(e[a],t,r));return n}if(e.constructor===Date){var n=new Date;n.setTime(e.getTime());return n}if(e.constructor===RegExp){var i="";if(e.global)i+="g";if(e.ignoreCase)i+="i";if(e.multiline)i+="m";return new RegExp(e.source,i)}if(r&&typeof e==="function"){if(r==1)return K(e(),undefined,2);if(r==2)return e}return null}var Z={};Z.nv_stringify=function(e){JSON.stringify(e);return JSON.stringify(K(e))};Z.nv_parse=function(e){if(e===undefined)return undefined;var t=JSON.parse(e);return K(t,"nv_")};function ee(e,t,r,n){e.extraAttr={t_action:t,t_rawid:r};if(typeof n!="undefined")e.extraAttr.t_cid=n}function te(){if(typeof __globalThis.__webview_engine_version__=="undefined")return 0;return __globalThis.__webview_engine_version__}function re(e,t,r,n,o,a){var i=ne(t,r,n);if(i)e.push(i);else{e.push("");u(n+":import:"+o+":"+a+": Path `"+t+"` not found from `"+n+"`.")}}function ne(e,t,r){if(e[0]!="/"){var n=r.split("/");n.pop();var o=e.split("/");for(var a=0;a<o.length;a++){if(o[a]=="..")n.pop();else if(!o[a]||o[a]==".")continue;else n.push(o[a])}e=n.join("/")}if(r[0]=="."&&e[0]=="/")e="."+e;if(t[e])return e;if(t[e+".wxml"])return e+".wxml"}function oe(e,t,r,n){if(!t)return;if(n[e][t])return n[e][t];for(var o=r[e].i.length-1;o>=0;o--){if(r[e].i[o]&&n[r[e].i[o]][t])return n[r[e].i[o]][t]}for(var o=r[e].ti.length-1;o>=0;o--){var a=ne(r[e].ti[o],r,e);if(a&&n[a][t])return n[a][t]}var i=ae(r,e);for(var o=0;o<i.length;o++){if(i[o]&&n[i[o]][t])return n[i[o]][t]}for(var p=r[e].j.length-1;p>=0;p--)if(r[e].j[p]){for(var a=r[r[e].j[p]].ti.length-1;a>=0;a--){var u=ne(r[r[e].j[p]].ti[a],r,e);if(u&&n[u][t]){return n[u][t]}}}}function ae(e,t){if(!t)return[];if($gaic[t]){return $gaic[t]}var r=[],n=[],o=0,a=0,i={},p={};n.push(t);p[t]=true;a++;while(o<a){var u=n[o++];for(var l=0;l<e[u].ic.length;l++){var f=e[u].ic[l];var v=ne(f,e,u);if(v&&!p[v]){p[v]=true;n.push(v);a++}}for(var l=0;u!=t&&l<e[u].ti.length;l++){var c=e[u].ti[l];var s=ne(c,e,u);if(s&&!i[s]){i[s]=true;r.push(s)}}}$gaic[t]=r;return r}var ie={};function pe(e,t,r,n,o,a,i){var p=ne(e,t,r);t[r].j.push(p);if(p){if(ie[p]){u("-1:include:-1:-1: `"+e+"` is being included in a loop, will be stop.");return}ie[p]=true;try{t[p].f(n,o,a,i)}catch(n){}ie[p]=false}else{u(r+":include:-1:-1: Included path `"+e+"` not found from `"+r+"`.")}}function ue(e,t,r,n){u(t+":template:"+r+":"+n+": Template `"+e+"` not found.")}function le(e){var t=false;delete e.properities;delete e.n;if(e.children){do{t=false;var r=[];for(var n=0;n<e.children.length;n++){var o=e.children[n];if(o.tag=="virtual"){t=true;for(var a=0;o.children&&a<o.children.length;a++){r.push(o.children[a])}}else{r.push(o)}}e.children=r}while(t);for(var n=0;n<e.children.length;n++){le(e.children[n])}}return e}function fe(e){if(e.tag=="wx-wx-scope"){e.tag="virtual";e.wxCkey="11";e["wxScopeData"]=e.attr["wx:scope-data"];delete e.n;delete e.raw;delete e.generics;delete e.attr}for(var t=0;e.children&&t<e.children.length;t++){fe(e.children[t])}return e}return{a:D,b:S,c:v,d:e,e:t,f:u,g:r,h:s,i:n,j:o,k:A,l:T,m:a,n:f,o:c,p:i,q:y,r:N,s:b,t:d,u:h,v:p,w:l,x:_,y:w,z:O,A:j,B:P,C:M,D:J,E:B,F:Y,G:G,H:X,I:H,J:V,K:$,L:W,M:Q,N:q,O:K,P:Z,Q:ee,R:te,S:re,T:ne,U:oe,V:ae,W:ie,X:pe,Y:ue,Z:le,aa:fe}}()});Object.freeze(__g);g="";	__wxAppCode__['pages_game/components/CustomNavbar/CustomNavbar.json'] = {"component":true,"usingComponents":{"pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/DateQuickSelector/DateQuickSelector.json'] = {"component":true,"usingComponents":{"pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/DaySelector/DaySelector.json'] = {"component":true,"usingComponents":{"pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/MonthSelector/MonthSelector.json'] = {"component":true,"usingComponents":{"pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/PolicyRule/PolicyRule.json'] = {"component":true,"usingComponents":{"uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/RealName/RealName.json'] = {"component":true,"usingComponents":{"uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/choosedrawouttype/choosedrawouttype.json'] = {"component":true,"usingComponents":{"pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/choosepurchaser/choosepurchaser.json'] = {"component":true,"usingComponents":{"uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/joinfavorite/joinfavorite.json'] = {"component":true,"usingComponents":{"pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/lime-painter/components/l-painter-image/l-painter-image.json'] = {"component":true,"usingComponents":{"pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/lime-painter/components/l-painter-text/l-painter-text.json'] = {"component":true,"usingComponents":{"pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/lime-painter/components/l-painter-view/l-painter-view.json'] = {"component":true,"usingComponents":{"pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/lime-painter/components/l-painter/l-painter.json'] = {"component":true,"usingComponents":{"pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/pricedetailold/pricedetail.json'] = {"component":true,"usingComponents":{"uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/richNotes/richNotes.json'] = {"component":true,"usingComponents":{"uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","mp-html":"/uni_modules/mp-html/components/mp-html/mp-html","pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/selectCoupon/selectCoupon.json'] = {"component":true,"usingComponents":{"uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/setPointOffset/setPointOffset.json'] = {"component":true,"usingComponents":{"uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/ticketpurchaser/ticketpurchaser.json'] = {"component":true,"usingComponents":{"pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/ticketpurchaserTp/ticketpurchaserTp.json'] = {"component":true,"usingComponents":{"pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/components/ticketsBooking/ticketsBooking.json'] = {"component":true,"usingComponents":{"uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_game/gameevent/addaddress.json'] = {"navigationBarTitleText":"添加新地址","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"customtitlebar":"/components/customtitlebar/customtitlebar","uni-data-picker":"/uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_game/gameevent/chooseseat.json'] = {"navigationBarTitleText":"选择座位","enablePullDownRefresh":false,"usingComponents":{"verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_game/gameevent/eventSession.json'] = {"navigationBarTitleText":"","navigationStyle":"custom","usingComponents":{"verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","policy-rule":"/pages_game/components/PolicyRule/PolicyRule","real-name":"/pages_game/components/RealName/RealName","custom-navbar":"/pages_game/components/CustomNavbar/CustomNavbar","month-selector":"/pages_game/components/MonthSelector/MonthSelector","day-selector":"/pages_game/components/DaySelector/DaySelector","date-quick-selector":"/pages_game/components/DateQuickSelector/DateQuickSelector","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_game/gameevent/eventdetail.json'] = {"navigationBarTitleText":"详情","enablePullDownRefresh":false,"navigationBarTextStyle":"black","navigationStyle":"custom","usingComponents":{"uni-nav-bar":"/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar","mp-html":"/uni_modules/mp-html/components/mp-html/mp-html","uv-read-more":"/uni_modules/uv-read-more/components/uv-read-more/uv-read-more","page-notify":"/components/pageNotify/pageNotify","uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","loginpop":"/components/loginpop/loginpop","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","join-favorite":"/pages_game/components/joinfavorite/joinfavorite","tickets-booking":"/pages_game/components/ticketsBooking/ticketsBooking","rich-notes":"/pages_game/components/richNotes/richNotes","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_game/gameevent/eventpay.json'] = {"navigationBarTitleText":"订单支付","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"uni-nav-bar":"/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar","paywayradio":"/components/paywayradio/paywayradio","uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","goodsaddress":"/components/goodsaddress/goodsaddress","ticketaddress":"/components/ticketaddress/ticketaddress","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","ticketpurchaser":"/pages_game/components/ticketpurchaser/ticketpurchaser","ticketpurchaser-tp":"/pages_game/components/ticketpurchaserTp/ticketpurchaserTp","choosepurchaser":"/pages_game/components/choosepurchaser/choosepurchaser","pricedetail":"/pages_game/components/pricedetailold/pricedetail","choose-drawout-type":"/pages_game/components/choosedrawouttype/choosedrawouttype","order-no-pay":"/components/pupwarn/ordernopay","order-confirm-exit":"/components/pupwarn/orderconfirmexit","set-point-offset":"/pages_game/components/setPointOffset/setPointOffset","rich-notes":"/pages_game/components/richNotes/richNotes","select-coupon":"/pages_game/components/selectCoupon/selectCoupon","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_game/gameevent/eventpayfinish.json'] = {"navigationBarTitleText":"订单支付","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"uni-nav-bar":"/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar","mallitem":"/components/mallitem/mallitem","popup-income":"/components/PopupIncome/PopupIncome","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_game/gameevent/orgIntroduce.json'] = {"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"customtitlebar":"/components/customtitlebar/customtitlebar","mp-html":"/uni_modules/mp-html/components/mp-html/mp-html","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_game/gameevent/shareforevent.json'] = {"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"uni-nav-bar":"/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar","permission-pup":"/components/permissionPup/permissionPup","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","l-painter":"/pages_game/components/lime-painter/components/l-painter/l-painter","l-painter-view":"/pages_game/components/lime-painter/components/l-painter-view/l-painter-view","l-painter-image":"/pages_game/components/lime-painter/components/l-painter-image/l-painter-image","l-painter-text":"/pages_game/components/lime-painter/components/l-painter-text/l-painter-text","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_game/gameevent/shareforplan.json'] = {"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"uni-nav-bar":"/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","l-painter":"/pages_game/components/lime-painter/components/l-painter/l-painter","l-painter-view":"/pages_game/components/lime-painter/components/l-painter-view/l-painter-view","l-painter-image":"/pages_game/components/lime-painter/components/l-painter-image/l-painter-image","l-painter-text":"/pages_game/components/lime-painter/components/l-painter-text/l-painter-text","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_game/gameevent/sharepreview.json'] = {"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"uni-nav-bar":"/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar","uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","l-painter":"/pages_game/components/lime-painter/components/l-painter/l-painter","l-painter-view":"/pages_game/components/lime-painter/components/l-painter-view/l-painter-view","l-painter-image":"/pages_game/components/lime-painter/components/l-painter-image/l-painter-image","l-painter-text":"/pages_game/components/lime-painter/components/l-painter-text/l-painter-text","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_game/gameevent/ticketsTips.json'] = {"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"customtitlebar":"/components/customtitlebar/customtitlebar","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","choosepurchaser":"/pages_game/components/choosepurchaser/choosepurchaser","tickets-booking":"/pages_game/components/ticketsBooking/ticketsBooking","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_game/gameevent/writeEventForm.json'] = {"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"customtitlebar":"/components/customtitlebar/customtitlebar","uni-data-picker":"/uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker","uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","pickercalendar":"/components/pickercalendar/pickercalendar","pickerbottomtext":"/components/pickerbottomtext/pickerbottomtext","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","pup-limit":"/components/pupLimit/pupLimit"}};
	;var __WXML_DEP__=__WXML_DEP__||{};;var __LAZY_CODE_LOADING_CHUNK_MAP__=__LAZY_CODE_LOADING_CHUNK_MAP__||{};[['pages_game/chunk_0',['pages_game/components/CustomNavbar/CustomNavbar','pages_game/components/DateQuickSelector/DateQuickSelector','pages_game/components/DaySelector/DaySelector','pages_game/components/MonthSelector/MonthSelector','pages_game/components/PolicyRule/PolicyRule','pages_game/components/RealName/RealName','pages_game/gameevent/eventSession',]],['pages_game/chunk_1',['pages_game/components/choosedrawouttype/choosedrawouttype','pages_game/components/pricedetailold/pricedetail','pages_game/components/selectCoupon/selectCoupon','pages_game/components/setPointOffset/setPointOffset','pages_game/components/ticketpurchaser/ticketpurchaser','pages_game/components/ticketpurchaserTp/ticketpurchaserTp','pages_game/gameevent/eventpay',]],['pages_game/chunk_10',['pages_game/gameevent/orgIntroduce',]],['pages_game/chunk_11',['pages_game/gameevent/shareforevent',]],['pages_game/chunk_12',['pages_game/gameevent/shareforplan',]],['pages_game/chunk_13',['pages_game/gameevent/sharepreview',]],['pages_game/chunk_14',['pages_game/gameevent/ticketsTips',]],['pages_game/chunk_15',['pages_game/gameevent/writeEventForm',]],['pages_game/chunk_2',['pages_game/components/choosepurchaser/choosepurchaser',]],['pages_game/chunk_3',['pages_game/components/joinfavorite/joinfavorite','pages_game/gameevent/eventdetail',]],['pages_game/chunk_4',['pages_game/components/lime-painter/components/l-painter-image/l-painter-image','pages_game/components/lime-painter/components/l-painter-text/l-painter-text','pages_game/components/lime-painter/components/l-painter-view/l-painter-view','pages_game/components/lime-painter/components/l-painter/l-painter',]],['pages_game/chunk_5',['pages_game/components/richNotes/richNotes',]],['pages_game/chunk_6',['pages_game/components/ticketsBooking/ticketsBooking',]],['pages_game/chunk_7',['pages_game/gameevent/addaddress',]],['pages_game/chunk_8',['pages_game/gameevent/chooseseat',]],['pages_game/chunk_9',['pages_game/gameevent/eventpayfinish',]],].forEach(function(a){(a[1]||[]).forEach(function(b){__LAZY_CODE_LOADING_CHUNK_MAP__[b]=__LAZY_CODE_LOADING_CHUNK_MAP__[b]||a[0]||''});});/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
if (typeof $gwx === 'function') $gwx('init', global);
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
var z=__WXML_GLOBAL__.ops_set.$gwx2 || [];
__WXML_GLOBAL__.ops_set.$gwx2=z;
__WXML_GLOBAL__.ops_init.$gwx2=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=[];if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx2();;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("pages_game/common/vendor.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/common/vendor"],{"000d":function(t,e,i){"use strict";(function(t,n){var r=i("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Painter=void 0;var o=r(i("3b2d")),s=function(){return(s=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function a(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{h(n.next(t))}catch(t){o(t)}}function a(t){try{h(n.throw(t))}catch(t){o(t)}}function h(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}h((n=n.apply(t,e||[])).next())}))}function h(t,e){var i,n,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],n=0}finally{i=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}var c={MP_WEIXIN:"mp-weixin",MP_QQ:"mp-qq",MP_ALIPAY:"mp-alipay",MP_BAIDU:"mp-baidu",MP_TOUTIAO:"mp-toutiao",MP_DINGDING:"mp-dingding",H5:"h5",WEB:"web",PLUS:"plus"},d=["contentSize","clientSize","borderSize","offsetSize"],l="view",f="text",u="qrcode",p="absolute",g={display:"block",color:"#000000",lineHeight:"1.4em",fontSize:14,fontWeight:400,fontFamily:"sans-serif",lineCap:"butt",flexDirection:"row",flexWrap:"nowrap",textAlign:"left",alignItems:"flex-start",justifyContent:"flex-start",position:"static",transformOrigin:"center center"},v={upx2px:function(t){return window.innerWidth/750*t},getSystemInfoSync:function(){return{screenWidth:window.innerWidth,screenHeight:window.innerHeight}},getImageInfo:function(t){var e=t.src,i=t.success,n=t.fail,r=new Image;r.onload=function(){i({width:r.naturalWidth,height:r.naturalHeight,path:r.src,src:e})},r.onerror=n,r.src=e}},b="object"==("undefined"==typeof window?"undefined":(0,o.default)(window))?void 0===t||void 0!==t&&!t.addInterceptor?c.WEB:c.H5:"object"==("undefined"==typeof swan?"undefined":(0,o.default)(swan))?c.MP_BAIDU:"object"==("undefined"==typeof tt?"undefined":(0,o.default)(tt))?c.MP_TOUTIAO:"object"==("undefined"==typeof plus?"undefined":(0,o.default)(plus))?c.PLUS:"object"==(void 0===n?"undefined":(0,o.default)(n))?c.MP_WEIXIN:void 0,y=b==c.MP_WEIXIN?n:void 0!==t?t.getImageInfo?{upx2px:function(e){return t.upx2px(e)},getSystemInfoSync:function(){return t.getSystemInfoSync()},getImageInfo:function(e){return t.getImageInfo(e)},downloadFile:function(e){return t.downloadFile(e)}}:Object.assign(t,v):"undefined"!=typeof window?v:t;if(!y.upx2px){var m=((y.getSystemInfoSync&&y.getSystemInfoSync()).screenWidth||375)/750;y.upx2px=function(t){return m*t}}function x(t){return/^-?\d+(\.\d+)?$/.test(t)}function w(t,e,i){if(x(t))return 1*t;if("string"==typeof t){var n=/^-?([0-9]+)?([.]{1}[0-9]+){0,1}(em|rpx|vw|vh|px|%)$/g.exec(t);if(!t||!n)return 0;var r=n[3];t=parseFloat(t);var o=0;if("rpx"===r)o=y.upx2px(t);else if("px"===r)o=1*t;else if("%"===r&&e)o=t*w(e)/100;else if("em"===r&&e)o=t*w(e||14);else if(["vw","vh"].includes(r)){var s=y.getSystemInfoSync(),a=s.screenWidth,h=s.screenHeight;o=t*("vw"==r?a:h)/100}return 1*o.toFixed(2)}return 0}function S(t){return/%$/.test(t)}function z(t){for(var e=[],i=[],n=0,r=t.substring(0,t.length-1).split("%,");n<r.length;n++){var o=r[n];e.push(o.substring(0,o.lastIndexOf(" ")).trim()),i.push(o.substring(o.lastIndexOf(" "),o.length)/100)}return{colors:e,percents:i}}function M(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function I(){return(I=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function P(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=function(t,e){if(t){if("string"==typeof t)return k(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?k(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function B(t){return"number"==typeof t}function W(t){return"auto"===t||null===t}function R(t){return/%$/.test(t)}var T,j="image",L=f,F=u,C=p,A="fixed",E=0,H=function(){function t(){M(this,"elements",[]),M(this,"afterElements",[]),M(this,"beforeElements",[]),M(this,"ids",[]),M(this,"width",0),M(this,"height",0),M(this,"top",0),M(this,"left",0),M(this,"pre",null),M(this,"offsetX",0),M(this,"offsetY",0),E++,this.id=E}var e=t.prototype;return e.fixedBind=function(t,e){void 0===e&&(e=0),this.container=e?t.parent:t.root,this.container.fixedLine=this,this.fixedAdd(t)},e.fixedAdd=function(t){if(!this.ids.includes(t.id)){this.ids.push(t.id),this.elements.push(t);var e=t.computedStyle.zIndex;(void 0===e?0:e)>=0?this.afterElements.push(t):this.beforeElements.push(t),this.refreshLayout()}},e.bind=function(t){this.container=t.parent,this.container.line=null,this.container.lines?(this.container.lines.push(this),this.pre=this.getPreLine(),this.top=this.pre.top+this.pre.height,this.left=this.container.contentSize.left):(this.top=this.container.contentSize.top,this.left=this.container.contentSize.left,this.container.lines=[this]),this.isInline=t.isInline(),this.container.line=this,this.outerWidth=t.parent&&t.parent.contentSize.width?t.parent.contentSize.width:1/0,this.add(t)},e.getPreLine=function(){return this.container.lines[this.container.lines.length-2]},e.canIEnter=function(t){return this.outerWidth||t.parent&&t.parent.contentSize.width,!((100*t.offsetSize.width+100*this.width)/100>this.outerWidth&&(this.closeLine(),1))},e.closeLine=function(){delete this.container.line},e.add=function(t){this.ids.includes(t.id)||(this.ids.push(t.id),this.elements.push(t),this.refreshWidthHeight(t))},e.refreshWidthHeight=function(t){t.offsetSize.height>this.height&&(this.height=t.offsetSize.height),this.width+=t.offsetSize.width||0,(this.container.lineMaxWidth||0)<this.width&&(this.container.lineMaxWidth=this.width)},e.refreshXAlign=function(){if(this.isInline){var t=this.container.contentSize.width-this.width,e=this.container.style.textAlign;"center"===e?t/=2:"left"===e&&(t=0),this.offsetX=t}},e.getOffsetY=function(t){if(!t||!t.style)return 0;var e=(t.style||{}).verticalAlign;return"bottom"===e?this.height-t.contentSize.height:"middle"===e?(this.height-t.contentSize.height)/2:0},e.setIndent=function(t){var e=t.style.textIndent;if(e&&/^calc/.test(e)){var i=/^calc\((.+)\)$/.exec(e);if(i&&i[1]){var n=function t(e){e=e.trim();for(var i=new Array,n="+",r="",o=e.length,s=0;s<o;++s){if("."===e[s]||!isNaN(Number(e[s]))&&" "!==e[s])r+=e[s];else if("("===e[s]){for(var a=1,h=s;a>0;)"("===e[h+=1]&&(a+=1),")"===e[h]&&(a-=1);r=""+t(e.slice(s+1,h)),s=h}if(isNaN(Number(e[s]))&&"."!==e[s]||s===o-1){var c=parseFloat(r);switch(n){case"+":i.push(c);break;case"-":i.push(-c);break;case"*":i.push(i.pop()*c);break;case"/":i.push(i.pop()/c)}n=e[s],r=""}}for(var d=0;i.length;)d+=i.pop();return d}(i[1].replace(/([^\s\(\+\-\*\/]+)\.(left|right|bottom|top|width|height)/g,(function(e){var i=e.split("."),n=i[0],r=i[1],o=t.parent.querySelector(n);if(o&&o.offsetSize){var s={right:o.offsetSize.left+o.offsetSize.width,bottom:o.offsetSize.top+o.offsetSize.height};return o.offsetSize[r]||s[r]||0}})).replace(new RegExp(/-?[0-9]+(\.[0-9]+)?(rpx|px|%)/,"g"),w));t.style.textIndent=n}}},e.layout=function(t,e){var i=this;this.refreshXAlign(),this.pre?(this.top=this.pre.top+this.pre.height+this.offsetY,this.left=e+this.offsetX):(this.top=Math.max(this.top,this.container.contentSize.top,t)+this.offsetY,this.left=Math.max(this.left,this.container.contentSize.left,e)+this.offsetX),this.elements.forEach((function(t,e){i.setIndent(t);var n=i.elements[e-1],r=i.getOffsetY(t);t.style.top=i.top+r,t.style.left=n?n.offsetSize.left+n.offsetSize.width:i.left,t.getBoxPosition()}))},e.refreshLayout=function(){this.afterElements=this.afterElements.sort((function(t,e){return t.computedStyle.zIndex-e.computedStyle.zIndex})),this.beforeElements=this.beforeElements.sort((function(t,e){return t.computedStyle.zIndex-e.computedStyle.zIndex}))},t}(),_=((T={}).row={width:"width",contentWidth:"width",lineMaxWidth:"lineMaxWidth",left:"left",top:"top",height:"height",lineMaxHeight:"lineMaxHeight",marginLeft:"marginLeft"},T.column={width:"height",contentWidth:"height",lineMaxWidth:"lineMaxHeight",left:"top",top:"left",height:"width",lineMaxHeight:"lineMaxWidth",marginLeft:"marginTop"},T),D=function(t){var e,i;function n(){var e;return M(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e=t.call(this)||this),"outerWidth",0),e.exactValue=0,e.flexTotal=0,e.width=0,e.key=null,e.flexDirection="row",e}i=t,(e=n).prototype=Object.create(i.prototype),e.prototype.constructor=e,O(e,i);var r=n.prototype;return r.bind=function(t){this.container=t.parent,this.container.line=this,this.container.lines?(this.container.lines.push(this),this.pre=this.getPreLine(),this.top=this.pre.top+this.pre.height,this.left=this.container.contentSize.left):(this.top=this.container.contentSize.top,this.left=this.container.contentSize.left,this.container.lines=[this]),t.parent&&(this.flexDirection=t.parent.style.flexDirection,this.key=_[this.flexDirection]),this.initHeight(t),this.outerWidth=t.parent&&t.parent.contentSize[this.key.contentWidth]?t.parent.contentSize[this.key.contentWidth]:1/0,this.add(t)},r.add=function(t){this.ids.push(t.id);var e=t.style.flex;B(e)?this.flexTotal+=e:B(this.getWidth(t.style))&&(this.exactValue+=this.getWidth(t.offsetSize)),this.elements.push(t),this.refreshWidthHeight(t),t.next||this.closeLine()},r.closeLine=function(){this.calcFlex()},r.initHeight=function(t){this[this.key.height]=0},r.getWidth=function(t){return t[this.key.width]||0},r.getHeight=function(t){return t[this.key.height]||0},r.setWidth=function(t,e){t[this.key.width]=e},r.setHeight=function(t,e){t[this.key.height]=e},r.calcFlex=function(){var t=this,e=this.container.contentSize[this.key.contentWidth],i=0;this.elements.forEach((function(n){var r=n.style,o=n.contentSize,s=t.getWidth(r)||t.getWidth(o);B(r.flex)&&(s=r.flex/t.flexTotal*(e-t.exactValue)),t.setWidth(n.computedStyle,s),n.isFlexCalc=!0,delete n.line,delete n.lines,delete n.lineMaxWidth,n.getBoxWidthHeight(),i=Math.max(i,t.getHeight(n.offsetSize))})),this.setHeight(this,i)},r.refreshWidthHeight=function(t){var e=this.container.style.alignItems;e&&!t.style.alignSelf&&(t.style.alignSelf=e);var i=this.getHeight(t.offsetSize);i>this[this.key.height]&&(this.container[this.key.lineMaxHeight]=this[this.key.height]=i),this[this.key.width]+=this.getWidth(t.offsetSize);var n=Math.min(this.getWidth(this),!this.getWidth(this.container.contentSize)&&1/0);(this.container[this.key.lineMaxWidth]||0)<n&&(this.container[this.key.lineMaxWidth]=n)},r.refreshXAlign=function(){var t=this,e=this.elements.reduce((function(e,i){return e+t.getWidth(i.offsetSize)}),0),i=(this.outerWidth==1/0?0:this.outerWidth-e)||0,n=this.container.style.justifyContent;"center"===n?i/=2:"flex-start"===n?i=0:["space-between","space-around"].includes(n)&&(function(e,i){void 0===i&&(i=0),i/=t.elements.length+(e?-1:1),t.elements.forEach((function(n,r){var o;e&&!r||(n.style.margin?n.style.margin[t.key.marginLeft]+=i:n.style.margin=((o={})[t.key.marginLeft]=i,o),n.getBoxPosition())})),i=0}("space-between"==n,i),i=0),this.offsetX=i||0,this.refreshYAlign()},r.refreshYAlign=function(){var t=this;if(1==this.container.lines.length)return 0;var e=this.container.lines.reduce((function(e,i){return e+t.getHeight(i)}),0),i=this.container.style.alignItems,n=this.getHeight(this.container.contentSize);if("center"===i){var r=(n-e)/(this.container.lines.length+1);this.container.lines.forEach((function(t){t.offsetY=r}))}if("flex-end"===i){var o=n-e;this.container.lines[0].offsetY=o}},r.getOffsetY=function(t){if(this.container.lines.length>1)return 0;var e=t.style.alignSelf,i=this.getHeight(this.container.contentSize),n=i-this.getHeight(t.offsetSize);return"flex-end"===e?n:"center"===e?n/2:"stretch"===e?(n&&"view"==t.name&&(t.style[this.key.width]=this.getWidth(t.offsetSize),t.style[this.key.height]=i,delete t.line,delete t.lines,t.getBoxWidthHeight()),0):0},r.layout=function(t,e){var i=this;this.refreshXAlign(),this.pre?(this.top=this.pre.top+this.pre.height+this.offsetY,this.left=e+this.offsetX):(this.top=Math.max(this.top,this.container.contentSize.top,t)+this.offsetY,this.left=Math.max(this.left,this.container.contentSize.left,e)+this.offsetX),this.elements.forEach((function(t,e){i.setIndent(t);var n=i.elements[e-1],r=i.getOffsetY(t);t.style[i.key.top]=i[i.key.top]+r,t.style[i.key.left]=n?n.offsetSize[i.key.left]+i.getWidth(n.offsetSize):i[i.key.left],t.getBoxPosition()}))},n}(H),N=f,$=l,U=p,Y=0,X={left:null,top:null,width:null,height:null},q=function(){function t(t,e,i,n){var r=this;M(this,"id",Y++),M(this,"style",{left:null,top:null,width:null,height:null}),M(this,"computedStyle",{}),M(this,"originStyle",{}),M(this,"children",{}),M(this,"layoutBox",I({},X)),M(this,"contentSize",I({},X)),M(this,"clientSize",I({},X)),M(this,"borderSize",I({},X)),M(this,"offsetSize",I({},X)),this.ctx=n,this.root=i,e&&(this.parent=e),this.name=t.name||t.type,this.attributes=this.getAttributes(t);var a=function(t,e){var i=["color","fontSize","lineHeight","verticalAlign","fontWeight","textAlign"],n=t.css,r=void 0===n?{}:n,a=t.type,h=void 0===a?"view":a,c=(e||{}).computedStyle,d=s({},g);if([L,j,F].includes(h)&&!r.display&&(d.display="inline-block"),c)for(var l=0;l<i.length;l++){var f=i[l];(r[f]||c[f])&&(r[f]=r[f]||c[f])}for(var u=function(t){var e,i,n,s,a=r[t];if(/-/.test(t)&&(t=t.replace(/-([a-z])/g,(function(t,e){return e.toUpperCase()})),d.key=a),/^(box|text)?shadow$/i.test(t)){var c=[];return a.replace(/((-?\d+(rpx|px|vw|vh)?\s+?){3})(.+)/,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];c=t[1].match(/-?\d+(rpx|px|vh|vw)?/g).map((function(t){return w(t)})).concat(t[4])})),/^text/.test(t)?d.textShadow=c:d.boxShadow=c,"continue"}if(/^border/i.test(t)&&!/radius$/i.test(t)){var l=t.match(/^border([BTRLa-z]+)?/)[0],f=t.match(/[W|S|C][a-z]+/),u=a.replace(/([\(,])\s+|\s+([\),])/g,"$1$2").split(" ").map((function(t){return/^\d/.test(t)?w(t,""):t}));return d[l]||(d[l]={}),1==u.length&&f?d[l][l+f[0]]=u[0]:d[l]=((e={})[l+"Width"]=x(u[0])?u[0]:0,e[l+"Style"]=u[1]||"solid",e[l+"Color"]=u[2]||"black",e),"continue"}if(/^background(color)?$/i.test(t))return d.backgroundColor=a,"continue";if(/^objectPosition$/i.test(t))return d[t]=a.split(" "),"continue";if(/padding|margin|radius/i.test(t)){var p=/radius$/i.test(t),g=p?"borderRadius":t.match(/[a-z]+/)[0],v=[0,0,0,0].map((function(t,e){return p?["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"][e]:[g+"Top",g+"Right",g+"Bottom",g+"Left"][e]})),b="margin";if("padding"===t||t===b||/^(border)?radius$/i.test(t)){u=(""+a).split(" ").map((function(e){return/^-?\d+(rpx|px|vh|vw)?$/.test(e)?w(e):t!=b&&/auto/.test(e)?0:e}),[])||[0];var y=p?"borderRadius":t,m=u[0],S=u[1],z=u[2],M=u[3];d[y]=((i={})[v[0]]=W(m)?0:m,i[v[1]]=x(S)||W(S)?S:m,i[v[2]]=W(x(z)?z:m)?0:x(z)?z:m,i[v[3]]=x(M)?M:S||m,i)}else"object"==(0,o.default)(d[g])||(d[g]=((n={})[v[0]]=d[g]||0,n[v[1]]=d[g]||0,n[v[2]]=d[g]||0,n[v[3]]=d[g]||0,n)),d[g][t]=g==b&&W(a)||R(a)?a:w(a);return"continue"}if(/^transform$/i.test(t))return d[t]={},a.replace(/([a-zA-Z]+)\(([0-9,-\.%rpxdeg\s]+)\)/g,(function(e,i,n){var o=n.split(",").map((function(t){return t.replace(/(^\s*)|(\s*$)/g,"")})),s=function(t,e){return t.includes("deg")?1*t:e&&!R(e)?w(t,e):t};i.includes("matrix")?d[t][i]=o.map((function(t){return 1*t})):i.includes("rotate")?d[t][i]=1*n.match(/^-?\d+(\.\d+)?/)[0]:/[X, Y]/.test(i)?d[t][i]=/[X]/.test(i)?s(o[0],r.width):s(o[0],r.height):(d[t][i+"X"]=s(o[0],r.width),d[t][i+"Y"]=s(o[1]||o[0],r.height))})),"continue";if(/^font$/i.test(t)&&console.warn("font 不支持简写"),/^textindent/i.test(t)&&(d[t]=/^calc/.test(a)?a:w(a)),/^textstroke/i.test(t)){var I=t.match(/color|width|type$/i),O=(l="textStroke",a.split(" ").map((function(t){return/^\d+(rpx|px|vh|vw)?$/.test(t)?w(t):t})));return I?d[l]?d[l][I[0]]=O[0]:d[l]=((s={})[I[0]]=O[0],s):d[l]={width:O[0],color:O[1],type:O[2]},"continue"}/^left|top$/i.test(t)&&![C,A].includes(r.position)?d[t]=0:d[t]=/^-?[\d\.]+(px|rpx|vw|vh)?$/.test(a)?w(a):/em$/.test(a)&&h==L?w(a,r.fontSize):a},p=0,v=Object.keys(r);p<v.length;p++)u(v[p]);return d}(t,e);this.isAbsolute=a.position==U,this.isFixed="fixed"==a.position,this.originStyle=a,Object.keys(a).forEach((function(t){Object.defineProperty(r.style,t,{configurable:!0,enumerable:!0,get:function(){return a[t]},set:function(e){a[t]=e}})}));var h={contentSize:I({},this.contentSize),clientSize:I({},this.clientSize),borderSize:I({},this.borderSize),offsetSize:I({},this.offsetSize)};Object.keys(h).forEach((function(t){Object.keys(r[t]).forEach((function(e){Object.defineProperty(r[t],e,{configurable:!0,enumerable:!0,get:function(){return h[t][e]},set:function(i){h[t][e]=i}})}))})),this.computedStyle=this.style}var e=t.prototype;return e.add=function(t){t.parent=this,this.children[t.id]=t},e.getChildren=function(){var t=this;return Object.keys(this.children).map((function(e){return t.children[e]}))},e.prev=function(t){void 0===t&&(t=this);var e=t.parent.getChildren();return e[e.findIndex((function(e){return e.id==t.id}))-1]},e.querySelector=function(t){var e=this.getChildren();return"string"!=typeof t?null:e.find((function(e){var i=e.id,n=e.attributes;return i==t||n&&n.uid==t}))||this.parent.querySelector&&this.parent.querySelector(t)||null},e.getLineRect=function(t,e){var i=e?e.lines:this.parent&&this.parent.lines;return i&&i.find((function(e){return e.ids.includes(t)}))||{width:0,height:0}},e.setPosition=function(t,e){var i={left:"width",top:"height",right:"width",bottom:"height"};Object.keys(i).forEach((function(n){var r="right"==n?"left":"top";["right","bottom"].includes(n)&&void 0!==t.style[n]&&"number"!=typeof t.originStyle[r]?t.style[r]=e[i[n]]-t.offsetSize[i[n]]-w(t.style[n],e[i[n]]):t.style[n]=w(t.style[n],e[i[n]])}))},e.getAttributes=function(t){var e=t.attributes,i=void 0===e?{}:e,n=t.uid,r=t.url,o=t.src,s=t.replace,a=t.text;return n&&(i.uid=n),(r||o)&&(i.src=i.src||r||o),s&&(i.replace=s),a&&(i.text=a),i},e.getOffsetSize=function(t,e,i){void 0===i&&(i=d[3]);var n=e||{},r=n.margin,o=(r=void 0===r?{}:r).marginLeft,s=void 0===o?0:o,a=r.marginTop,h=void 0===a?0:a,c=r.marginRight,l=void 0===c?0:c,f=r.marginBottom,u=void 0===f?0:f,p=n.padding,g=(p=void 0===p?{}:p).paddingLeft,v=void 0===g?0:g,b=p.paddingTop,y=void 0===b?0:b,m=p.paddingRight,x=void 0===m?0:m,w=p.paddingBottom,S=void 0===w?0:w,z=n.border,M=(z=void 0===z?{}:z).borderWidth,I=void 0===M?0:M,O=n.borderTop,k=(O=void 0===O?{}:O).borderTopWidth,P=void 0===k?I:k,B=n.borderBottom,W=(B=void 0===B?{}:B).borderBottomWidth,R=void 0===W?I:W,T=n.borderRight,j=(T=void 0===T?{}:T).borderRightWidth,L=void 0===j?I:j,F=n.borderLeft,C=(F=void 0===F?{}:F).borderLeftWidth,A=void 0===C?I:C,E=s<0&&l<0?Math.abs(s+l):0,H=h<0&&u<0?Math.abs(h+u):0,_=s>=0&&l<0,D=h>=0&&u<0;return i==d[0]&&(this[i].left=t.left+s+v+A+(_?2*-l:0),this[i].top=t.top+h+y+P+(D?2*-u:0),this[i].width=t.width+(this[i].widthAdd?0:E),this[i].height=t.height+(this[i].heightAdd?0:H),this[i].widthAdd=E,this[i].heightAdd=H),i==d[1]&&(this[i].left=t.left+s+A+(_<0?-l:0),this[i].top=t.top+h+P+(D?-u:0),this[i].width=t.width+v+x,this[i].height=t.height+y+S),i==d[2]&&(this[i].left=t.left+s+A/2+(_<0?-l:0),this[i].top=t.top+h+P/2+(D?-u:0),this[i].width=t.width+v+x+A/2+L/2,this[i].height=t.height+y+S+R/2+P/2),i==d[3]&&(this[i].left=t.left+(_<0?-l:0),this[i].top=t.top+(D?-u:0),this[i].width=t.width+v+x+A+L+s+l,this[i].height=t.height+y+S+R+P+u+h),this[i]},e.layoutBoxUpdate=function(t,e,i,n){var r=this;if(void 0===i&&(i=-1),"border-box"==e.boxSizing){var o=e||{},s=o.border,a=(s=void 0===s?{}:s).borderWidth,h=void 0===a?0:a,c=o.borderTop,l=(c=void 0===c?{}:c).borderTopWidth,f=void 0===l?h:l,u=o.borderBottom,p=(u=void 0===u?{}:u).borderBottomWidth,g=void 0===p?h:p,v=o.borderRight,b=(v=void 0===v?{}:v).borderRightWidth,y=void 0===b?h:b,m=o.borderLeft,x=(m=void 0===m?{}:m).borderLeftWidth,w=void 0===x?h:x,S=o.padding,z=(S=void 0===S?{}:S).paddingTop,M=void 0===z?0:z,I=S.paddingRight,O=void 0===I?0:I,k=S.paddingBottom,P=void 0===k?0:k,B=S.paddingLeft,W=void 0===B?0:B;i||(t.width-=W+O+y+w),1!==i||n||(t.height-=M+P+f+g)}this.layoutBox&&(d.forEach((function(i){return r.layoutBox[i]=r.getOffsetSize(t,e,i)})),this.layoutBox=Object.assign({},this.layoutBox,this.layoutBox.borderSize))},e.getBoxPosition=function(){var t=this.computedStyle,e=this.fixedLine,i=this.lines,n=t.left,r=void 0===n?0:n,o=t.top,s=void 0===o?0:o,a=t.padding||{},h=a.paddingBottom,c=void 0===h?0:h,d=a.paddingRight,l=void 0===d?0:d,f=I({},this.contentSize,{left:r,top:s}),u=this.contentSize.top-this.offsetSize.top,p=this.contentSize.left-this.offsetSize.left;if(this.root.fixedLine&&!this.root.isDone){this.root.isDone=!0;for(var g,v=P(this.root.fixedLine.elements);!(g=v()).done;){var b=g.value;b.setPosition(b,this.root.offsetSize),b.getBoxPosition()}}if(e)for(var y,m=P(e.elements);!(y=m()).done;){var x=y.value;x.setPosition(x,f),x.style.left+=r+p+l,x.style.top+=s+u+c,x.getBoxPosition()}if(i)for(var w,S=P(i);!(w=S()).done;)w.value.layout(f.top+u,f.left+p);return this.layoutBoxUpdate(f,t),this.layoutBox},e.getBoxState=function(t,e){return this.isBlock(t)||this.isBlock(e)},e.isBlock=function(t){return void 0===t&&(t=this),t&&"block"==t.style.display},e.isFlex=function(t){return void 0===t&&(t=this),t&&"flex"==t.style.display},e.isInFlow=function(){return!(this.isAbsolute||this.isFixed)},e.inFlexBox=function(t){return void 0===t&&(t=this),!!t.isInFlow()&&!!t.parent&&(!(!t.parent||"flex"!==t.parent.style.display)||void 0)},e.isInline=function(t){return void 0===t&&(t=this),t&&"inline-block"==t.style.display},e.contrastSize=function(t,e,i){var n=t;return i&&(n=Math.min(n,i)),e&&(n=Math.max(n,e)),n},e.measureText=function(t,e){var i=this.ctx.measureText(t),n=i.width,r=i.actualBoundingBoxAscent,o=i.actualBoundingBoxDescent;return{ascent:r,descent:o,width:n,fontHeight:r+o||.7*e+1}},e.getBoxWidthHeight=function(){var t=this,e=this.name,i=this.computedStyle,n=this.attributes,r=this.parent,o=void 0===r?{}:r,s=this.ctx,a=this.getChildren(),h=i.left,c=void 0===h?0:h,d=i.top,l=void 0===d?0:d,f=i.bottom,u=i.right,p=i.width,g=void 0===p?0:p,v=i.minWidth,b=i.maxWidth,y=i.minHeight,m=i.maxHeight,x=i.height,S=void 0===x?0:x,z=i.fontSize,M=void 0===z?14:z,I=i.fontWeight,O=i.fontFamily,k=i.fontStyle,P=i.position,B=i.lineClamp,W=i.lineHeight,T=i.padding,j=void 0===T?{}:T,L=i.margin,F=void 0===L?{}:L,C=i.border,A=(C=void 0===C?{}:C).borderWidth,E=void 0===A?0:A,_=i.borderRight,Y=(_=void 0===_?{}:_).borderRightWidth,X=void 0===Y?E:Y,q=i.borderLeft,V=(q=void 0===q?{}:q).borderLeftWidth,J=void 0===V?E:V,G=o.contentSize&&o.contentSize.width,K=o.contentSize&&o.contentSize.height;if(R(g)&&G&&(g=w(g,G)),R(g)&&!G&&(g=null),R(S)&&K&&(S=w(S,K)),R(S)&&!K&&(S=null),R(v)&&G&&(v=w(v,G)),R(b)&&G&&(b=w(b,G)),R(y)&&K&&(y=w(y,K)),R(m)&&K&&(m=w(m,K)),i.padding&&G)for(var Q in i.padding)Object.hasOwnProperty.call(i.padding,Q)&&(i.padding[Q]=w(i.padding[Q],G));var Z=j.paddingRight,tt=void 0===Z?0:Z,et=j.paddingLeft,it=void 0===et?0:et;if(i.margin&&[i.margin.marginLeft,i.margin.marginRight].includes("auto"))if(g){var nt=G&&G-g-tt-it-J-X||0;i.margin.marginLeft==i.margin.marginRight?i.margin.marginLeft=i.margin.marginRight=nt/2:"auto"==i.margin.marginLeft?i.margin.marginLeft=nt:i.margin.marginRight=nt}else i.margin.marginLeft=i.margin.marginRight=0;var rt=F.marginRight,ot=void 0===rt?0:rt,st=F.marginLeft,at={width:g,height:S,left:0,top:0},ht=it+tt+J+X+(void 0===st?0:st)+ot;if(this.offsetWidth=ht,e==N&&!this.attributes.widths){var ct=n.text||"";s.save(),s.setFonts({fontFamily:O,fontSize:M,fontWeight:I,fontStyle:k});var dt=new Map;ct.split("\n").map((function(e){var i=e.split("").map((function(e){var i=/^[\u4e00-\u9fa5]+$/.test(e)?"cn":e,n=dt.get(i);if(n)return{width:n,text:e};var r=t.measureText(e,M).width;return dt.set(i,r),{width:r,text:e}})),n=t.measureText(e,M),r=n.fontHeight,o=n.ascent,s=n.descent;t.attributes.fontHeight=r,t.attributes.ascent=o,t.attributes.descent=s,t.attributes.widths||(t.attributes.widths=[]),t.attributes.widths.push({widths:i,total:i.reduce((function(t,e){return t+e.width}),0)})})),s.restore()}if("image"==e&&null==g){var lt=n.width,ft=n.height;at.width=this.contrastSize(Math.round(lt*S/ft)||0,v,b),this.layoutBoxUpdate(at,i,0)}if(e==N&&null==g){var ut=this.attributes.widths,pt=Math.max.apply(Math,ut.map((function(t){return t.total})));o&&G>0&&(pt>G||this.isBlock(this))&&!this.isAbsolute&&!this.isFixed&&(pt=G),at.width=this.contrastSize(pt,v,b),this.layoutBoxUpdate(at,i,0)}if(e==N&&(o.style.flex||!this.attributes.lines)){var gt=this.attributes.widths.length;this.attributes.widths.forEach((function(t){return t.widths.reduce((function(t,e,i){return t+e.width>at.width?(gt++,e.width):t+e.width}),0)})),gt=B&&gt>B?B:gt,this.attributes.lines=gt}if("image"==e&&null==S){var vt=n.width,bt=n.height;at.height=this.contrastSize(w(at.width*bt/vt)||0,y,m),this.layoutBoxUpdate(at,i,1)}e==N&&null==S&&(W=w(W,M),at.height=this.contrastSize(w(this.attributes.lines*W),y,m),this.layoutBoxUpdate(at,i,1,!0)),!g&&o&&o.children&&G&&(!this.isFlex(o)||o.isFlexCalc)&&([$,N].includes(e)&&this.isFlex()||e==$&&this.isBlock(this)&&this.isInFlow())&&(at.width=this.contrastSize(G-(o.isFlexCalc?0:ht),v,b),this.layoutBoxUpdate(at,i)),g&&!R(g)&&(at.width=this.contrastSize(g,v,b),this.layoutBoxUpdate(at,i,0)),S&&!R(S)&&(at.height=this.contrastSize(at.height,y,m),this.layoutBoxUpdate(at,i,1));var yt=0;if(a.length){var mt=null;a.forEach((function(e,n){e.getBoxWidthHeight();var r=a[n+1];if(r&&r.isInFlow()&&(e.next=r),e.isInFlow()&&!e.inFlexBox()){var o=t.getBoxState(mt,e);t.line&&t.line.canIEnter(e)&&!o?t.line.add(e):(new H).bind(e),mt=e}else e.inFlexBox()?t.line&&(t.line.canIEnter(e)||"nowrap"==i.flexWrap)?t.line.add(e):(new D).bind(e):e.isFixed?t.root.fixedLine?t.root.fixedLine.fixedAdd(e):(new H).fixedBind(e):t.fixedLine?t.fixedLine.fixedAdd(e):(new H).fixedBind(e,1)})),this.lines&&(yt=this.lines.reduce((function(t,e){return t+e.height}),0))}var xt=0,wt=0;if(!g&&(this.isAbsolute||this.isFixed)&&G){var St=P==U?G:this.root.width,zt=St-(R(c)?w(c,St):c)-(R(u)?w(u,St):u);xt=i.left?zt:this.lineMaxWidth}if(!S&&(null!=l?l:this.isAbsolute||this.isFixed&&K)){var Mt=P==U?K:this.root.height,It=Mt-(R(l)?w(l,Mt):l)-(R(f)?w(f,Mt):f);wt=i.top?It:0}if(g&&!R(g)||at.width||(at.width=xt||this.contrastSize((this.isBlock(this)&&!this.isInFlow()?G||o.lineMaxWidth:this.lineMaxWidth)||this.lineMaxWidth,v,b),this.layoutBoxUpdate(at,i,0)),S||!yt&&!wt||(at.height=wt||this.contrastSize(yt,y,m),this.layoutBoxUpdate(at,i)),i.borderRadius&&this.borderSize&&this.borderSize.width)for(var Ot in i.borderRadius)Object.hasOwnProperty.call(i.borderRadius,Ot)&&(i.borderRadius[Ot]=w(i.borderRadius[Ot],this.borderSize.width));return this.layoutBox},e.layout=function(){return this.getBoxWidthHeight(),this.root.offsetSize=this.offsetSize,this.getBoxPosition(),this.offsetSize},t}(),V=function(){var t,e,i,n,r,o,s=[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28],a=[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177],h=[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],c=[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],d=[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175],l=[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],f=[],u=[],p=[],g=[],v=[],b=2;function y(t,e){var i;t>e&&(i=t,t=e,e=i),i=e,i*=e,i+=e,i>>=1,g[i+=t]=1}function m(t,i){var n;for(p[t+e*i]=1,n=-2;n<2;n++)p[t+n+e*(i-2)]=1,p[t-2+e*(i+n+1)]=1,p[t+2+e*(i+n)]=1,p[t+n+1+e*(i+2)]=1;for(n=0;n<2;n++)y(t-1,i+n),y(t+1,i-n),y(t-n,i-1),y(t+n,i+1)}function x(t){for(;t>=255;)t=((t-=255)>>8)+(255&t);return t}var w=[];function S(t,e,i,n){var r,o,s;for(r=0;r<n;r++)f[i+r]=0;for(r=0;r<e;r++){if(255!=(s=d[f[t+r]^f[i]]))for(o=1;o<n;o++)f[i+o-1]=f[i+o]^l[x(s+w[n-o])];else for(o=i;o<i+n;o++)f[o]=f[o+1];f[i+n-1]=255==s?0:l[x(s+w[0])]}}function z(t,e){var i;return t>e&&(i=t,t=e,e=i),i=e,i+=e*e,i>>=1,g[i+=t]}function M(t){var i,n,r,o;switch(t){case 0:for(n=0;n<e;n++)for(i=0;i<e;i++)i+n&1||z(i,n)||(p[i+n*e]^=1);break;case 1:for(n=0;n<e;n++)for(i=0;i<e;i++)1&n||z(i,n)||(p[i+n*e]^=1);break;case 2:for(n=0;n<e;n++)for(r=0,i=0;i<e;i++,r++)3==r&&(r=0),r||z(i,n)||(p[i+n*e]^=1);break;case 3:for(o=0,n=0;n<e;n++,o++)for(3==o&&(o=0),r=o,i=0;i<e;i++,r++)3==r&&(r=0),r||z(i,n)||(p[i+n*e]^=1);break;case 4:for(n=0;n<e;n++)for(r=0,o=n>>1&1,i=0;i<e;i++,r++)3==r&&(r=0,o=!o),o||z(i,n)||(p[i+n*e]^=1);break;case 5:for(o=0,n=0;n<e;n++,o++)for(3==o&&(o=0),r=0,i=0;i<e;i++,r++)3==r&&(r=0),(i&n&1)+!(!r|!o)||z(i,n)||(p[i+n*e]^=1);break;case 6:for(o=0,n=0;n<e;n++,o++)for(3==o&&(o=0),r=0,i=0;i<e;i++,r++)3==r&&(r=0),(i&n&1)+(r&&r==o)&1||z(i,n)||(p[i+n*e]^=1);break;case 7:for(o=0,n=0;n<e;n++,o++)for(3==o&&(o=0),r=0,i=0;i<e;i++,r++)3==r&&(r=0),(r&&r==o)+(i+n&1)&1||z(i,n)||(p[i+n*e]^=1)}}function I(t){var e,i=0;for(e=0;e<=t;e++)v[e]>=5&&(i+=3+v[e]-5);for(e=3;e<t-1;e+=2)v[e-2]==v[e+2]&&v[e+2]==v[e-1]&&v[e-1]==v[e+1]&&3*v[e-1]==v[e]&&(0==v[e-3]||e+3>t||3*v[e-3]>=4*v[e]||3*v[e+3]>=4*v[e])&&(i+=40);return i}function O(){var t,i,n,r,o,s=0,a=0;for(i=0;i<e-1;i++)for(t=0;t<e-1;t++)(p[t+e*i]&&p[t+1+e*i]&&p[t+e*(i+1)]&&p[t+1+e*(i+1)]||!(p[t+e*i]||p[t+1+e*i]||p[t+e*(i+1)]||p[t+1+e*(i+1)]))&&(s+=3);for(i=0;i<e;i++){for(v[0]=0,n=r=t=0;t<e;t++)(o=p[t+e*i])==r?v[n]++:v[++n]=1,a+=(r=o)?1:-1;s+=I(n)}a<0&&(a=-a);var h=a,c=0;for(h+=h<<2,h<<=1;h>e*e;)h-=e*e,c++;for(s+=10*c,t=0;t<e;t++){for(v[0]=0,n=r=i=0;i<e;i++)(o=p[t+e*i])==r?v[n]++:v[++n]=1,r=o;s+=I(n)}return s}var k=null;return{api:{get ecclevel(){return b},set ecclevel(t){b=t},get size(){return _size},set size(t){_size=t},get canvas(){return k},set canvas(t){k=t},getFrame:function(v){return function(v){var I,k,P,B,W,R,T,j;B=v.length,t=0;do{if(t++,P=4*(b-1)+16*(t-1),i=c[P++],n=c[P++],r=c[P++],o=c[P],B<=(P=r*(i+n)+n-3+(t<=9)))break}while(t<40);for(e=17+4*t,W=r+(r+o)*(i+n)+n,B=0;B<W;B++)u[B]=0;for(f=v.slice(0),B=0;B<e*e;B++)p[B]=0;for(B=0;B<(e*(e+1)+1)/2;B++)g[B]=0;for(B=0;B<3;B++){for(P=0,k=0,1==B&&(P=e-7),2==B&&(k=e-7),p[k+3+e*(P+3)]=1,I=0;I<6;I++)p[k+I+e*P]=1,p[k+e*(P+I+1)]=1,p[k+6+e*(P+I)]=1,p[k+I+1+e*(P+6)]=1;for(I=1;I<5;I++)y(k+I,P+1),y(k+1,P+I+1),y(k+5,P+I),y(k+I+1,P+5);for(I=2;I<4;I++)p[k+I+e*(P+2)]=1,p[k+2+e*(P+I+1)]=1,p[k+4+e*(P+I)]=1,p[k+I+1+e*(P+4)]=1}if(t>1)for(B=s[t],k=e-7;;){for(I=e-7;I>B-3&&(m(I,k),!(I<B));)I-=B;if(k<=B+9)break;m(6,k-=B),m(k,6)}for(p[8+e*(e-8)]=1,k=0;k<7;k++)y(7,k),y(e-8,k),y(7,k+e-7);for(I=0;I<8;I++)y(I,7),y(I+e-8,7),y(I,e-8);for(I=0;I<9;I++)y(I,8);for(I=0;I<8;I++)y(I+e-8,8),y(8,I);for(k=0;k<7;k++)y(8,k+e-7);for(I=0;I<e-14;I++)1&I?(y(8+I,6),y(6,8+I)):(p[8+I+6*e]=1,p[6+e*(8+I)]=1);if(t>6)for(B=a[t-7],P=17,I=0;I<6;I++)for(k=0;k<3;k++,P--)1&(P>11?t>>P-12:B>>P)?(p[5-I+e*(2-k+e-11)]=1,p[2-k+e-11+e*(5-I)]=1):(y(5-I,2-k+e-11),y(2-k+e-11,5-I));for(k=0;k<e;k++)for(I=0;I<=k;I++)p[I+e*k]&&y(I,k);for(W=f.length,R=0;R<W;R++)u[R]=f.charCodeAt(R);if(f=u.slice(0),W>=(I=r*(i+n)+n)-2&&(W=I-2,t>9&&W--),R=W,t>9){for(f[R+2]=0,f[R+3]=0;R--;)B=f[R],f[R+3]|=255&B<<4,f[R+2]=B>>4;f[2]|=255&W<<4,f[1]=W>>4,f[0]=64|W>>12}else{for(f[R+1]=0,f[R+2]=0;R--;)B=f[R],f[R+2]|=255&B<<4,f[R+1]=B>>4;f[1]|=255&W<<4,f[0]=64|W>>4}for(R=W+3-(t<10);R<I;)f[R++]=236,f[R++]=17;for(w[0]=1,R=0;R<o;R++){for(w[R+1]=1,T=R;T>0;T--)w[T]=w[T]?w[T-1]^l[x(d[w[T]]+R)]:w[T-1];w[0]=l[x(d[w[0]]+R)]}for(R=0;R<=o;R++)w[R]=d[w[R]];for(P=I,k=0,R=0;R<i;R++)S(k,r,P,o),k+=r,P+=o;for(R=0;R<n;R++)S(k,r+1,P,o),k+=r+1,P+=o;for(k=0,R=0;R<r;R++){for(T=0;T<i;T++)u[k++]=f[R+T*r];for(T=0;T<n;T++)u[k++]=f[i*r+R+T*(r+1)]}for(T=0;T<n;T++)u[k++]=f[i*r+R+T*(r+1)];for(R=0;R<o;R++)for(T=0;T<i+n;T++)u[k++]=f[I+R+T*o];for(f=u,I=k=e-1,P=W=1,j=(r+o)*(i+n)+n,R=0;R<j;R++)for(B=f[R],T=0;T<8;T++,B<<=1){128&B&&(p[I+e*k]=1);do{W?I--:(I++,P?0!=k?k--:(P=!P,6==(I-=2)&&(I--,k=9)):k!=e-1?k++:(P=!P,6==(I-=2)&&(I--,k-=8))),W=!W}while(z(I,k))}for(f=p.slice(0),B=0,k=3e4,P=0;P<8&&(M(P),(I=O())<k&&(k=I,B=P),7!=B);P++)p=f.slice(0);for(B!=P&&M(B),k=h[B+(b-1<<3)],P=0;P<8;P++,k>>=1)1&k&&(p[e-1-P+8*e]=1,P<6?p[8+e*P]=1:p[8+e*(P+1)]=1);for(P=0;P<7;P++,k>>=1)1&k&&(p[8+e*(e-7+P)]=1,P?p[6-P+8*e]=1:p[7+8*e]=1);return p}(v)},utf16to8:function(t){var e,i,n,r;for(e="",n=t.length,i=0;i<n;i++)(r=t.charCodeAt(i))>=1&&r<=127?e+=t.charAt(i):r>2047?(e+=String.fromCharCode(224|r>>12&15),e+=String.fromCharCode(128|r>>6&63),e+=String.fromCharCode(128|r>>0&63)):(e+=String.fromCharCode(192|r>>6&31),e+=String.fromCharCode(128|r>>0&63));return e},draw:function(t,i,n,r,o){i.drawView(n,r);var s=i.ctx,a=n.contentSize,h=a.width,c=a.height,d=a.left,l=a.top;r.borderRadius,r.backgroundColor;var f=r.color,u=void 0===f?"#000000":f;if(r.border,n.contentSize.left,n.borderSize.left,n.contentSize.top,n.borderSize.top,b=o||b,s){s.save(),i.setOpacity(r),i.setTransform(n,r);var p=Math.min(h,c);t=this.utf16to8(t);var g=this.getFrame(t),v=p/e;s.setFillStyle(u);for(var y=0;y<e;y++)for(var m=0;m<e;m++)g[m*e+y]&&s.fillRect(d+v*y,l+v*m,v,v);s.restore(),i.setBorder(n,r)}else console.warn("No canvas provided to draw QR code in!")}}}}(),J=f,G=u,K=l,Q="middle",Z=function(){function t(t){var e,i=this;this.v="1.9.5.1",this.id=null,this.pixelRatio=1,this.width=0,this.height=0,this.sleep=1e3/30,this.count=0,this.isRate=!1,this.isDraw=!0,this.isCache=!0,this.fixed="",this.useCORS=!1,this.performance=!1,this.imageBus=[],this.createImage=function(t,e){return new Promise((function(n,r){var o=null;window||i.canvas.createImage?(o=i.canvas&&i.canvas.createImage?i.canvas.createImage():new Image,e&&o.setAttribute("crossOrigin","Anonymous"),o.src=t,o.onload=function(){n({width:o.naturalWidth||o.width,height:o.naturalHeight||o.height,path:o,src:this.src})},o.onerror=function(t){r(t)}):r({fail:"getImageInfo fail",src:t})}))},this.options=t,Object.assign(this,t),this.ctx=((e=t.context).setFonts=function(t){var i=t.fontFamily,n=void 0===i?"sans-serif":i,r=t.fontSize,o=void 0===r?14:r,s=t.fontWeight,a=void 0===s?"normal":s,h=t.fontStyle,d=void 0===h?"normal":h;b==c.MP_TOUTIAO&&(a="bold"==a?"bold":"",d="italic"==d?"italic":""),e.font=d+" "+a+" "+Math.round(o)+"px "+n},e.draw&&e.setFillStyle?e:Object.assign(e,{setStrokeStyle:function(t){e.strokeStyle=t},setLineWidth:function(t){e.lineWidth=t},setLineCap:function(t){e.lineCap=t},setFillStyle:function(t){e.fillStyle=t},setFontSize:function(t){e.font=String(t)+"px sans-serif"},setGlobalAlpha:function(t){e.globalAlpha=t},setLineJoin:function(t){e.lineJoin=t},setTextAlign:function(t){e.textAlign=t},setMiterLimit:function(t){e.miterLimit=t},setShadow:function(t,i,n,r){e.shadowOffsetX=t,e.shadowOffsetY=i,e.shadowBlur=n,e.shadowColor=r},setTextBaseline:function(t){e.textBaseline=t},createCircularGradient:function(){},draw:function(){}})),this.progress=0,this.root={width:t.width,height:t.height,fontSizeRate:1,fixedLine:null},this.size=this.root;var n=0;Object.defineProperty(this,"progress",{configurable:!0,set:function(t){n=t,i.lifecycle("onProgress",t/i.count)},get:function(){return n||0}})}return t.prototype.lifecycle=function(t,e){this.options.listen&&this.options.listen[t]&&this.options.listen[t](e)},t.prototype.setContext=function(t){t&&(this.ctx=t)},t.prototype.init=function(){if(this.canvas.height||c.WEB==b){this.ctx.setTransform(1,0,0,1,0,0);var t=this.size.height*this.pixelRatio,e=this.size.width*this.pixelRatio;this.canvas.height=t,this.canvas.width=e,this.ctx.scale(this.pixelRatio,this.pixelRatio)}},t.prototype.clear=function(){this.ctx.clearRect(0,0,this.size.width,this.size.height)},t.prototype.clipPath=function(t,e,i,n,r,o,s){void 0===o&&(o=!1),void 0===s&&(s=!1);var a=this.ctx;if(/polygon/.test(r)){var h=r.match(/-?\d+(rpx|px|%)?\s+-?\d+(rpx|px|%)?/g)||[];a.beginPath(),h.map((function(r){var o=r.split(" "),s=o[0],a=o[1];return[w(s,i)+t,w(a,n)+e]})).forEach((function(t,e){0==e?a.moveTo(t[0],t[1]):a.lineTo(t[0],t[1])})),a.closePath(),s&&a.stroke(),o&&a.fill()}},t.prototype.roundRect=function(t,e,i,n,r,o,s){if(void 0===o&&(o=!1),void 0===s&&(s=!1),!(r<0)){var a=this.ctx;if(a.beginPath(),r){var h=r||{},c=h.borderTopLeftRadius,d=void 0===c?r||0:c,l=h.borderTopRightRadius,f=void 0===l?r||0:l,u=h.borderBottomRightRadius,p=void 0===u?r||0:u,g=h.borderBottomLeftRadius,v=void 0===g?r||0:g;a.arc(t+i-p,e+n-p,p,0,.5*Math.PI),a.lineTo(t+v,e+n),a.arc(t+v,e+n-v,v,.5*Math.PI,Math.PI),a.lineTo(t,e+d),a.arc(t+d,e+d,d,Math.PI,1.5*Math.PI),a.lineTo(t+i-f,e),a.arc(t+i-f,e+f,f,1.5*Math.PI,2*Math.PI),a.lineTo(t+i,e+n-p)}else a.rect(t,e,i,n);a.closePath(),s&&a.stroke(),o&&a.fill()}},t.prototype.setTransform=function(t,e){var i=e.transform,n=e.transformOrigin,r=this.ctx,o=i||{},s=o.scaleX,a=void 0===s?1:s,h=o.scaleY,c=void 0===h?1:h,d=o.translateX,l=void 0===d?0:d,f=o.translateY,u=void 0===f?0:f,p=o.rotate,g=void 0===p?0:p,v=o.skewX,b=void 0===v?0:v,y=o.skewY,m=void 0===y?0:y,S=t.left,z=t.top,M=t.width,I=t.height;l=w(l,M)||0,u=w(u,I)||0;var O={top:w("0%",1),center:w("50%",1),bottom:w("100%",1)},k={left:w("0%",1),center:w("50%",1),right:w("100%",1)};if(n=n.split(" ").filter((function(t,e){return e<2})).reduce((function(t,e){if(/\d+/.test(e)){var i=w(e,1)/(/px|rpx$/.test(e)?x(t.x)?I:M:1);return x(t.x)?Object.assign(t,{y:i}):Object.assign(t,{x:i})}return x(k[e])&&!x(t.x)?Object.assign(t,{x:k[e]}):Object.assign(t,{y:O[e]||.5})}),{}),(l||u)&&r.translate(l,u),(a||c)&&r.scale(a,c),g){var P=S+M*n.x,B=z+I*n.y;r.translate(P,B),r.rotate(g*Math.PI/180),r.translate(-P,-B)}(b||m)&&r.transform(1,Math.tan(m*Math.PI/180),Math.tan(b*Math.PI/180),1,0,0)},t.prototype.setBackground=function(t,e,i,n,r){var o=this.ctx;t&&"transparent"!=t?function(t){return!(!t||!t.startsWith("linear")&&!t.startsWith("radial"))}(t)?function(t,e,i,n,r,o){t.startsWith("linear")?function(t,e,i,n,r,o){for(var s=function(t,e,i,n,r){void 0===n&&(n=0),void 0===r&&(r=0);var o=t.match(/([-]?\d{1,3})deg/),s=o&&o[1]?parseFloat(o[1]):0;if(s>=360&&(s-=360),s<0&&(s+=360),0===(s=Math.round(s)))return{x0:Math.round(e/2)+n,y0:i+r,x1:Math.round(e/2)+n,y1:r};if(180===s)return{x0:Math.round(e/2)+n,y0:r,x1:Math.round(e/2)+n,y1:i+r};if(90===s)return{x0:n,y0:Math.round(i/2)+r,x1:e+n,y1:Math.round(i/2)+r};if(270===s)return{x0:e+n,y0:Math.round(i/2)+r,x1:n,y1:Math.round(i/2)+r};var a=Math.round(180*Math.asin(e/Math.sqrt(Math.pow(e,2)+Math.pow(i,2)))/Math.PI);if(s===a)return{x0:n,y0:i+r,x1:e+n,y1:r};if(s===180-a)return{x0:n,y0:r,x1:e+n,y1:i+r};if(s===180+a)return{x0:e+n,y0:r,x1:n,y1:i+r};if(s===360-a)return{x0:e+n,y0:i+r,x1:n,y1:r};var h,c=0,d=0,l=0,f=0;if(s<a||s>180-a&&s<180||s>180&&s<180+a||s>360-a){var u=s*Math.PI/180,p=s<a||s>360-a?i/2:-i/2,g=Math.tan(u)*p,v=s<a||s>180-a&&s<180?e/2-g:-e/2-g;c=-(l=g+(h=Math.pow(Math.sin(u),2)*v)),d=-(f=p+h/Math.tan(u))}return(s>a&&s<90||s>90&&s<90+a||s>180+a&&s<270||s>270&&s<360-a)&&(u=(90-s)*Math.PI/180,g=s>a&&s<90||s>90&&s<90+a?e/2:-e/2,p=Math.tan(u)*g,v=s>a&&s<90||s>270&&s<360-a?i/2-p:-i/2-p,c=-(l=g+(h=Math.pow(Math.sin(u),2)*v)/Math.tan(u)),d=-(f=p+h)),{x0:c=Math.round(c+e/2)+n,y0:d=Math.round(i/2-d)+r,x1:l=Math.round(l+e/2)+n,y1:f=Math.round(i/2-f)+r}}(r,t,e,i,n),a=s.x0,h=s.y0,c=s.x1,d=s.y1,l=o.createLinearGradient(a,h,c,d),f=r.match(/linear-gradient\((.+)\)/)[1],u=z(f.substring(f.indexOf(",")+1)),p=0;p<u.colors.length;p++)l.addColorStop(u.percents[p],u.colors[p]);o.setFillStyle(l)}(e,i,n,r,t,o):t.startsWith("radial")&&function(t,e,i,n,r,o){for(var s=z(r.match(/radial-gradient\((.+)\)/)[1]),a=Math.round(t/2)+i,h=Math.round(e/2)+n,c=o.createRadialGradient(a,h,0,a,h,Math.max(t,e)/2),d=0;d<s.colors.length;d++)c.addColorStop(s.percents[d],s.colors[d]);o.setFillStyle(c)}(e,i,n,r,t,o)}(t,e,i,n,r,o):o.setFillStyle(t):[c.MP_TOUTIAO,c.MP_BAIDU].includes(b)?o.setFillStyle("rgba(0,0,0,0)"):o.setFillStyle("transparent")},t.prototype.setShadow=function(t){var e=t.boxShadow,i=void 0===e?[]:e,n=this.ctx;if(i.length){var r=i[0],o=i[1],s=i[2],a=i[3];n.setShadow(r,o,s,a)}},t.prototype.setBorder=function(t,e){var i=this.ctx,n=t.width,r=t.height,o=t.left,s=t.top,a=e.border,h=e.borderBottom,c=e.borderTop,d=e.borderRight,l=e.borderLeft,f=e.borderRadius,u=e.lineCap,p=a||{},g=p.borderWidth,v=void 0===g?0:g,y=p.borderStyle,m=p.borderColor,x=h||{},w=x.borderBottomWidth,S=void 0===w?v:w,z=x.borderBottomStyle,M=void 0===z?y:z,I=x.borderBottomColor,O=void 0===I?m:I,k=c||{},P=k.borderTopWidth,B=void 0===P?v:P,W=k.borderTopStyle,R=void 0===W?y:W,T=k.borderTopColor,j=void 0===T?m:T,L=d||{},F=L.borderRightWidth,C=void 0===F?v:F,A=L.borderRightStyle,E=void 0===A?y:A,H=L.borderRightColor,_=void 0===H?m:H,D=l||{},N=D.borderLeftWidth,$=void 0===N?v:N,U=D.borderLeftStyle,Y=void 0===U?y:U,X=D.borderLeftColor,q=void 0===X?m:X,V=f||{},J=V.borderTopLeftRadius,G=void 0===J?f||0:J,K=V.borderTopRightRadius,Q=void 0===K?f||0:K,Z=V.borderBottomRightRadius,tt=void 0===Z?f||0:Z,et=V.borderBottomLeftRadius,it=void 0===et?f||0:et;if(h||l||c||d||a){var nt=function(t,e,n){"dashed"==e?/mp/.test(b)?i.setLineDash([Math.ceil(4*t/3),Math.ceil(4*t/3)]):i.setLineDash([Math.ceil(6*t),Math.ceil(6*t)]):"dotted"==e&&i.setLineDash([t,t]),i.setStrokeStyle(n)},rt=function(t,e,n,r,o,s,a,h,c,d,l,f,p,g,v){i.save(),i.setLineCap(v?"square":u),i.setLineWidth(f),nt(f,p,g),i.beginPath(),i.arc(t,e,a,Math.PI*c,Math.PI*d),i.lineTo(n,r),i.arc(o,s,h,Math.PI*d,Math.PI*l),i.stroke(),i.restore()};if(i.save(),a&&!h&&!l&&!c&&!d)return i.setLineWidth(v),nt(v,y,m),this.roundRect(o,s,n,r,f,!1,!!m),void i.restore();S&&rt(o+n-tt,s+r-tt,o+it,s+r,o+it,s+r-it,tt,it,.25,.5,.75,S,M,O,$&&C),$&&rt(o+it,s+r-it,o,s+G,o+G,s+G,it,G,.75,1,1.25,$,Y,q,B&&S),B&&rt(o+G,s+G,o+n-Q,s,o+n-Q,s+Q,G,Q,1.25,1.5,1.75,B,R,j,$&&C),C&&rt(o+n-Q,s+Q,o+n,s+r-tt,o+n-tt,s+r-tt,Q,tt,1.75,2,.25,C,E,_,B&&S)}},t.prototype.setOpacity=function(t){var e=t.opacity,i=void 0===e?1:e;this.ctx.setGlobalAlpha(i)},t.prototype.drawPattern=function(t,e,i){return a(this,void 0,void 0,(function(){var n=this;return h(this,(function(r){return[2,new Promise((function(r,o){n.drawView(e,i,!0,!1,!0);var s=n,a=s.ctx;s.canvas;var h=e.width,c=e.height,d=e.left,l=e.top,f=i||{},u=f.borderRadius,p=void 0===u?0:u,g=f.backgroundImage,v=f.backgroundRepeat,b=void 0===v?"repeat":v;g&&function(t){var o=a.createPattern(t.src,b);a.setFillStyle(o),n.roundRect(d,l,h,c,p,!0,!1),n.setBorder(e,i),r()}(t)}))]}))}))},t.prototype.drawView=function(t,e,i,n,r){void 0===i&&(i=!0),void 0===n&&(n=!0),void 0===r&&(r=!0);var o=this.ctx,s=t.width,a=t.height,h=t.left,c=t.top,d=e||{},l=d.borderRadius,f=void 0===l?0:l,u=d.backgroundColor,p=void 0===u?"transparent":u,g=d.overflow;e.opacity&&this.setOpacity(e),this.setTransform(t,e),r&&(o.save(),this.setShadow(e)),i&&this.setBackground(p,s,a,h,c),e.clipPath?this.clipPath(h,c,s,a,e.clipPath,i,!1):this.roundRect(h,c,s,a,f,i,!1),r&&o.restore(),n&&this.setBorder(t,e),"hidden"==g&&o.clip()},t.prototype.drawImage=function(t,e,i,n){return void 0===e&&(e={}),void 0===i&&(i={}),void 0===n&&(n=!0),a(this,void 0,void 0,(function(){var r=this;return h(this,(function(o){switch(o.label){case 0:return[4,new Promise((function(o,s){return a(r,void 0,void 0,(function(){var r,s,a,d,l,f,u,p,g,v,y,m,x,z,M,I,O,k,P,B,W=this;return h(this,(function(h){return r=this.ctx,s=i.borderRadius,a=void 0===s?0:s,d=i.backgroundColor,l=void 0===d?"transparent":d,f=i.objectFit,u=void 0===f?"fill":f,p=i.backgroundSize,g=void 0===p?"fill":p,v=i.objectPosition,y=i.backgroundPosition,m=i.boxShadow,i.backgroundImage&&(u=g,v=y),m&&this.drawView(e,Object.assign(i,{backgroundColor:l||m&&(l||"#ffffff")}),!0,!1,!0),x=e.width,z=e.height,M=e.left,I=e.top,r.save(),O=e.contentSize.left-e.borderSize.left,k=e.contentSize.top-e.borderSize.top,n||(this.setOpacity(i),this.setTransform(e,i),this.setBackground(l,x,z,M,I),this.roundRect(M,I,x,z,a,!!(a||!m&&l),!1)),M+=O,I+=k,r.clip(),P=function(t){if("fill"!==u){var i=function(t,e,i){var n=t.objectFit,r=t.objectPosition,o=e.width/e.height,s=i.width/i.height,a=1;"contain"==n&&o>=s||"cover"==n&&o<s?a=e.height/i.height:("contain"==n&&o<s||"cover"==n&&o>=s)&&(a=e.width/i.width);var h=i.width*a,c=i.height*a,d=r||[],l=d[0],f=d[1],u=function(t){return/^\d+px|rpx$/.test(t)},p=u(l)?w(l,e.width):(e.width-h)*(S(l)?w(l,1):{left:0,center:.5,right:1}[l||"center"]),g=u(f)?w(f,e.height):(e.height-c)*(S(f)?w(f,1):{top:0,center:.5,bottom:1}[f||"center"]),v=function(t,e){return[(t-p)/a,(e-g)/a]},b=v(0,0),y=b[0],m=b[1],x=v(e.width,e.height),z=x[0],M=x[1];return{sx:Math.max(y,0),sy:Math.max(m,0),sw:Math.min(z-y,i.width),sh:Math.min(M-m,i.height),dx:Math.max(p,0),dy:Math.max(g,0),dw:Math.min(h,e.width),dh:Math.min(c,e.height)}}({objectFit:u,objectPosition:v},e.contentSize,t),n=i.sx,o=i.sy,s=i.sh,a=i.sw,h=i.dx,d=i.dy,l=i.dh,f=i.dw;b==c.MP_BAIDU?r.drawImage(t.src,h+M,d+I,f,l,n,o,a,s):r.drawImage(t.src,n,o,a,s,h+M,d+I,f,l)}else r.drawImage(t.src,M,I,x,z)},B=function(){r.restore(),W.drawView(e,i,!1,!0,!1),o(1)},function(t){P(t),B()}(t),[2]}))}))}))];case 1:return o.sent(),[2]}}))}))},t.prototype.drawText=function(t,e,i,n){var r=this,o=this.ctx,s=e.borderSize,a=e.contentSize,h=e.left,c=e.top,d=a.width,l=a.height,f=a.left-s.left,u=a.top-s.top,p=i.color,g=void 0===p?"#000000":p,v=i.lineHeight,b=void 0===v?"1.4em":v,y=i.fontSize,m=void 0===y?14:y,S=i.fontWeight,z=i.fontFamily,M=i.fontStyle,I=i.textIndent,O=void 0===I?0:I,k=i.textAlign,P=void 0===k?"left":k,B=i.textStroke,W=i.verticalAlign,R=void 0===W?Q:W,T=i.backgroundColor,j=i.lineClamp,L=i.backgroundClip,F=i.textShadow,C=i.textDecoration;if(O=x(O)?O:0,this.drawView(e,i,L!=J),b=w(b,m),t){o.save(),h+=f,c+=u;var A=n.fontHeight,E=n.descent+n.ascent;switch(o.setFonts({fontFamily:z,fontSize:m,fontWeight:S,fontStyle:M}),o.setTextBaseline(Q),o.setTextAlign(P),L?this.setBackground(T,d,l,h,c):o.setFillStyle(g),P){case"left":break;case"center":h+=.5*d;break;case"right":h+=d}var H=n.lines*b,_=Math.ceil((l-H)/2);switch(_<0&&(_=0),R){case"top":break;case Q:c+=_;break;case"bottom":c+=2*_}var D=(b-A)/2,N=b/2,$=function(t){var e=o.measureText(t),i=e.actualBoundingBoxDescent,n=void 0===i?0:i,r=e.actualBoundingBoxAscent;return"top"==R?{fix:E?void 0===r?0:r:N-D/2,lineY:E?0:D-D/2}:R==Q?{fix:E?N+n/4:N,lineY:E?0:D}:"bottom"==R?{fix:E?b-n:N+D/2,lineY:E?2*D:D+D/2}:{fix:0,height:0,lineY:0}},U=function(t,e,i){var r=t;switch(P){case"left":t=t,r+=i;break;case"center":r=(t-=i/2)+i;break;case"right":r=t,t-=i}if(C){o.setLineWidth(m/13),o.beginPath();var s=.1*n.fontHeight;/\bunderline\b/.test(C)&&(o.moveTo(t,e+n.fontHeight+s),o.lineTo(r,e+n.fontHeight+s)),/\boverline\b/.test(C)&&(o.moveTo(t,e-s),o.lineTo(r,e-s)),/\bline-through\b/.test(C)&&(o.moveTo(t,e+.5*n.fontHeight),o.lineTo(r,e+.5*n.fontHeight)),o.closePath(),o.setStrokeStyle(g),o.stroke()}},Y=function(t,e,i){var n=function(){o.setLineWidth(B.width),o.setStrokeStyle(B.color),o.strokeText(t,e,i)},s="outset";B&&B.type!==s?(o.save(),r.setShadow({boxShadow:F}),o.fillText(t,e,i),o.restore(),n()):B&&B.type==s?(o.save(),r.setShadow({boxShadow:F}),n(),o.restore(),o.save(),o.fillText(t,e,i),o.restore()):(r.setShadow({boxShadow:F}),o.fillText(t,e,i))};if(!n.widths||1==n.widths.length&&n.widths[0].total+O<=a.width){var X=$(t),q=X.fix,V=X.lineY;return Y(t,h+O,c+q),U(h+O,c+V,n&&n.widths&&n.widths[0].total||n.text),c+=b,o.restore(),void this.setBorder(e,i)}for(var G=c,K=h,Z="",tt=0,et=o.measureText("...").width,it=n.widths,nt=0;nt<it.length;nt++){var rt=it[nt].widths,ot=0;Z="",c+=1==(tt+=1)?0:b,1==tt&&O&&(ot=O,K=h+O);for(var st=0;st<rt.length;st++){1!==tt&&O&&(K=h);var at=rt[st],ht=at.width,ct=at.text,dt=(rt[st+1]||{}).width;if(Z+=ct,(ot+=ht)+(void 0===dt?0:dt)+(0==tt?O:0)+(tt==j?et:0)>a.width){tt>=j&&(Z+="…"),tt++,ot=0;var lt=$(Z);q=lt.fix,V=lt.lineY,Y(Z,K,c+q),U(K,c+V,ot),c+=b,Z=""}else if(st==rt.length-1){nt!=it.length-1&&tt==j&&et+ot<a.width&&(Z+="…");var ft=$(Z);q=ft.fix,V=ft.lineY,Y(Z,K,c+q),U(K,c+V,ot)}if(c>G+l||tt>j)break}}o.restore()}},t.prototype.source=function(t){return a(this,void 0,void 0,(function(){var e,i,n,r,o=this;return h(this,(function(s){switch(s.label){case 0:if(this.node=null,e=+new Date,"{}"==JSON.stringify(t))return[2];if(!t.type)for(i in t.type=K,t.css=t.css||{},t)["views","children","type","css"].includes(i)||(t.css[i]=t[i],delete t[i]);return t.css.boxSizing||(t.css.boxSizing="border-box"),[4,this.create(t)];case 1:return(n=s.sent())?(r=n.layout()||{},this.size=r,this.node=n,this.onEffectFinished().then((function(t){return o.lifecycle("onEffectSuccess",t)})).catch((function(t){return o.lifecycle("onEffectFail",t)})),this.performance&&console.log("布局用时："+(+new Date-e)+"ms"),[2,this.size]):[2,console.warn("no node")]}}))}))},t.prototype.getImageInfo=function(t){return this.imageBus[t]||(this.imageBus[t]=this.createImage(t,this.useCORS)),this.imageBus[t]},t.prototype.create=function(t,e){return a(this,void 0,void 0,(function(){var i,n,r,o,a,c,d,l,f,u,p,g,v,b,y,m,x;return h(this,(function(h){switch(h.label){case 0:if(i="image"==t.type,n=[J,G].includes(t.type),r=t.css||{},o=r.backgroundImage,a=r.display,i&&!t.src&&!t.url||n&&!t.text)return[2];if("none"==a)return[2];if(n&&(t.text=String(t.text)),!(i||t.type==K&&o))return[3,4];c=i?t.src:"",d=/url\((.+)\)/.exec(o),o&&d&&d[1]&&(c=d[1]||""),h.label=1;case 1:return h.trys.push([1,3,,4]),[4,this.getImageInfo(c)];case 2:return l=h.sent(),f=l.width,u=l.height,!(p=l.path)&&i?[2]:(p&&(t.attributes=Object.assign(t.attributes||{},{width:f,height:u,path:p,src:p,naturalSrc:c})),[3,4]);case 3:return g=h.sent(),t.type!=K?[2]:(this.lifecycle("onEffectFail",s(s({},g),{src:c})),[3,4]);case 4:if(this.count+=1,v=new q(t,e,this.root,this.ctx),!(b=t.views||t.children))return[3,8];y=0,h.label=5;case 5:return y<b.length?(m=b[y],[4,this.create(m,v)]):[3,8];case 6:(x=h.sent())&&v.add(x),h.label=7;case 7:return y++,[3,5];case 8:return[2,v]}}))}))},t.prototype.drawNode=function(t,e){return void 0===e&&(e=!1),a(this,void 0,void 0,(function(){var i,n,r,o,s,a,c,d,l,f,u,p,g,v,b,y,m,x,w,S,z,M,I;return h(this,(function(h){switch(h.label){case 0:return i=t.layoutBox,n=t.computedStyle,r=t.attributes,o=t.name,s=t.children,a=t.fixedLine,c=t.attributes,d=c.src,l=c.text,f=n.position,u=n.backgroundImage,p=n.backgroundRepeat,["fixed"].includes(f)&&!e?[2]:(this.ctx.save(),o!==K?[3,7]:d&&u?p?[4,this.drawPattern(r,i,n)]:[3,2]:[3,5]);case 1:return h.sent(),[3,4];case 2:return[4,this.drawImage(r,i,n,!1)];case 3:h.sent(),h.label=4;case 4:return[3,6];case 5:this.drawView(i,n),h.label=6;case 6:return[3,10];case 7:return"image"===o&&d?[4,this.drawImage(r,i,n,!1)]:[3,9];case 8:return h.sent(),[3,10];case 9:o===J?this.drawText(l,i,n,r):o===G&&V.api&&V.api.draw(l,this,i,n),h.label=10;case 10:if(this.progress+=1,v=(g=a||{}).beforeElements,b=g.afterElements,!v)return[3,14];y=0,m=v,h.label=11;case 11:return y<m.length?(I=m[y],[4,this.drawNode(I)]):[3,14];case 12:h.sent(),h.label=13;case 13:return y++,[3,11];case 14:if(!s)return[3,18];x=Object.values?Object.values(s):Object.keys(s).map((function(t){return s[t]})),w=0,S=x,h.label=15;case 15:return w<S.length?"absolute"===(I=S[w]).computedStyle.position?[3,17]:[4,this.drawNode(I)]:[3,18];case 16:h.sent(),h.label=17;case 17:return w++,[3,15];case 18:if(!b)return[3,22];z=0,M=b,h.label=19;case 19:return z<M.length?(I=M[z],[4,this.drawNode(I)]):[3,22];case 20:h.sent(),h.label=21;case 21:return z++,[3,19];case 22:return this.ctx.restore(),[2]}}))}))},t.prototype.render=function(t){var e=this;return void 0===t&&(t=30),new Promise((function(i,n){return a(e,void 0,void 0,(function(){var e,r,o,s,a,c,d,l,f,u;return h(this,(function(h){switch(h.label){case 0:return e=+new Date,this.init(),[4,(p=t,void 0===p&&(p=0),new Promise((function(t){return setTimeout(t,p)})))];case 1:h.sent(),h.label=2;case 2:if(h.trys.push([2,14,,15]),!this.node)return[3,12];if(r=this.root.fixedLine||{},o=r.beforeElements,s=r.afterElements,!o)return[3,6];a=0,c=o,h.label=3;case 3:return a<c.length?(f=c[a],[4,this.drawNode(f,!0)]):[3,6];case 4:h.sent(),h.label=5;case 5:return a++,[3,3];case 6:return[4,this.drawNode(this.node)];case 7:if(h.sent(),!s)return[3,11];d=0,l=s,h.label=8;case 8:return d<l.length?(f=l[d],[4,this.drawNode(f,!0)]):[3,11];case 9:h.sent(),h.label=10;case 10:return d++,[3,8];case 11:return i(this.node),[3,13];case 12:this.lifecycle("onEffectFail","node is empty"),h.label=13;case 13:return[3,15];case 14:return u=h.sent(),this.lifecycle("onEffectFail",u),n(u),[3,15];case 15:return this.performance&&console.log("渲染用时："+(+new Date-e-30)+"ms"),[2]}var p}))}))}))},t.prototype.onEffectFinished=function(){var t=this,e=Object.keys(this.imageBus).map((function(e){return t.imageBus[e]}));return Promise.all(e)},t.prototype.destroy=function(){this.node=[]},t.prototype.save=function(t){try{var e=t||{},i=e.fileType,n=void 0===i?"png":i,r=e.quality,o=void 0===r?1:r;return this.canvas.toDataURL("image/"+n,o)}catch(t){return this.lifecycle("onEffectFail","image cross domain"),t}},t}();e.Painter=Z,c.WEB==b&&(window.Painter=Z);var et=Z;e.default=et}).call(this,i("df3c").default,i("3223").default)},7520:function(t,e,i){"use strict";(function(t,n){var r=i("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.base64ToPath=x,e.canIUseCanvas2d=function(){return y(p,"2.9.2")>=0},e.compareVersion=y,e.getImageInfo=function(e,i){var n=this,r=this&&this.canvas&&this.canvas.createImage;return new Promise(function(){var i=(0,a.default)(o.default.mark((function i(s,a){var h,c;return o.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(h=e,!v[e]||!v[e].errMsg){i.next=5;break}s(v[e]),i.next=22;break;case 5:if(i.prev=5,!l(e)||r&&!g){i.next=10;break}return i.next=9,x(e);case 9:h=i.sent;case 10:i.next=15;break;case 12:i.prev=12,i.t0=i.catch(5),a(d(d({},i.t0),{},{src:h}));case 15:if(!r||g){i.next=21;break}return(c=n.canvas.createImage()).onload=function(){var t={path:c,width:c.width,height:c.height};v[e]=t,s(v[e])},c.onerror=function(t){a({err:t,path:e})},c.src=h,i.abrupt("return");case 21:t.getImageInfo({src:h,success:function(t){if(t.path=/^\.|^\/(?=[^\/])/.test(h)?"/".concat(t.path):t.path,r){var i=n.canvas.createImage();return i.onload=function(){t.path=i,v[e]=t,s(v[e])},i.onerror=function(t){a({err:t,path:e})},void(i.src=h)}v[e]=t,s(v[e])},fail:function(t){console.error({err:t,path:e}),a({err:t,path:e})}});case 22:case"end":return i.stop()}}),i,null,[[5,12]])})));return function(t,e){return i.apply(this,arguments)}}())},e.isBase64=void 0,e.isNumber=b,e.networkReg=e.isPC=void 0,e.pathToBase64=function(e){return/^data:/.test(e)?e:new Promise((function(i,n){t.canIUse("getFileSystemManager")&&t.getFileSystemManager().readFile({filePath:e,encoding:"base64",success:function(t){i("data:image/png;base64,"+t.data)},fail:function(t){console.error({error:t,path:e}),n(t)}})}))},e.prefix=void 0,e.sleep=function(t){return new Promise((function(e){return setTimeout(e,t)}))},e.toPx=function e(i,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("number"==typeof i)return i;if(b(i))return 1*i;if("string"==typeof i){var o=/^-?([0-9]+)?([.]{1}[0-9]+){0,1}(em|rpx|px|%)$/g,s=o.exec(i);if(!i||!s)return 0;var a=s[3];i=parseFloat(i);var h=0;return"rpx"===a?h=t.upx2px(i):"px"===a?h=1*i:"%"===a?h=i*e(n)/100:"em"===a&&(h=i*e(n||14)),r?1*h.toFixed(2):Math.round(h)}return 0};var o=r(i("7eb4")),s=r(i("7ca3")),a=r(i("ee10")),h=r(i("34cf"));function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){(0,s.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e.networkReg=/^(http|\/\/)/;var l=function(t){return/^data:image\/(\w+);base64/.test(t)};e.isBase64=l;var f=t.getSystemInfoSync(),u=f.platform,p=f.SDKVersion,g=/windows|mac/.test(u);e.isPC=g;var v={};function b(t){return/^-?\d+(\.\d+)?$/.test(t)}function y(t,e){t=t.split("."),e=e.split(".");for(var i=Math.max(t.length,e.length);t.length<i;)t.push("0");for(;e.length<i;)e.push("0");for(var n=0;n<i;n++){var r=parseInt(t[n],10),o=parseInt(e[n],10);if(r>o)return 1;if(r<o)return-1}return 0}var m=function(){return n};function x(e){var i=/^data:image\/(\w+);base64,/.exec(e)||[],n=(0,h.default)(i,2)[1];return new Promise((function(i,r){var o=t.getFileSystemManager();n||r(new Error("ERROR_BASE64SRC_PARSE"));var s=(new Date).getTime(),a=m(),h="".concat(a.env.USER_DATA_PATH,"/").concat(s,".").concat(n);o.writeFile({filePath:h,data:e.split(",")[1],encoding:"base64",success:function(){i(h)},fail:function(t){console.error(t),r(t)}})}))}e.prefix=m}).call(this,i("df3c").default,i("3223").default)},8372:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.getStatusBarHeight=e.getNavbarHeight=e.getCapsuleInfo=void 0,e.getNavbarHeight=function(){return(t.getSystemInfoSync().statusBarHeight||0)+44},e.getStatusBarHeight=function(){return t.getSystemInfoSync().statusBarHeight||0},e.getCapsuleInfo=function(){var e=t.getMenuButtonBoundingClientRect();return{width:e.width,height:e.height,right:e.right,top:e.top,bottom:e.bottom}}}).call(this,i("df3c").default)},9233:function(t,e,i){"use strict";(function(t){function i(){return t.getStorageSync("OUT_OF_STOCK_RECORDS")||{}}Object.defineProperty(e,"__esModule",{value:!0}),e.clearSessionRecords=function(e){var n=i();delete n[e],t.setStorageSync("OUT_OF_STOCK_RECORDS",n)},e.isRegistered=function(t,e){var n=i();return!(!n[t]||!n[t][e])},e.markAsRegistered=function(e,n){var r=i();r[e]||(r[e]={}),r[e][n]=Date.now(),t.setStorageSync("OUT_OF_STOCK_RECORDS",r)}}).call(this,i("df3c").default)},fc8b:function(t,e,i){"use strict";var n=i("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.children=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.indexKey,{inject:(0,s.default)({},t,{default:null}),watch:{el:{handler:function(t,e){JSON.stringify(t)!=JSON.stringify(e)&&this.bindRelation()},deep:!0,immediate:!0},src:{handler:function(t,e){t!=e&&this.bindRelation()},immediate:!0},text:{handler:function(t,e){t!=e&&this.bindRelation()},immediate:!0},css:{handler:function(t,e){t!=e&&(this.el.css=("object"==(0,o.default)(t)?t:t&&Object.assign.apply(Object,(0,r.default)(a(t))))||{})},immediate:!0},replace:{handler:function(t,e){JSON.stringify(t)!=JSON.stringify(e)&&this.bindRelation()},deep:!0,immediate:!0}},created:function(){var e=this;this._uid||(this._uid=this._.uid),Object.defineProperty(this,"parent",{get:function(){return e[t]||[]}}),Object.defineProperty(this,"index",{get:function(){e.bindRelation();var t=e.parent,i=(t=void 0===t?{}:t).el,n=(i=void 0===i?{}:i).views;return(void 0===n?[]:n).indexOf(e.el)}}),this.el.type=this.type,this.uid&&(this.el.uid=this.uid),this.bindRelation()},beforeDestroy:function(){this.removeEl()},methods:{removeEl:function(){var t=this;this.parent&&(this.parent.el.views=this.parent.el.views.filter((function(e){return e._uid!==t._uid})))},bindRelation:function(){var t=this;if(this.el._uid||(this.el._uid=this._uid),["text","qrcode"].includes(this.type)&&(this.el.text=this.$slots&&this.$slots.default&&this.$slots.default[0].text||"".concat(this.text||"").replace(/\\n/g,"\n")),"image"==this.type&&(this.el.src=this.src),this.parent){var e=this.parent.el.views||[];-1!==e.indexOf(this.el)?this.parent.el.views=e.map((function(e){return e._uid==t._uid?t.el:e})):this.parent.el.views=[].concat((0,r.default)(e),[this.el])}}},mounted:function(){}}},e.parent=function(t){return{provide:function(){return(0,s.default)({},t,this)},data:function(){return{el:{id:null,css:{},views:[]}}},watch:{css:{handler:function(t){this.canvasId&&(this.el.css=("object"==(0,o.default)(t)?t:t&&Object.assign.apply(Object,(0,r.default)(a(t))))||{},this.canvasWidth=this.el.css&&this.el.css.width||this.canvasWidth,this.canvasHeight=this.el.css&&this.el.css.height||this.canvasHeight)},immediate:!0}}}};var r=n(i("af34")),o=n(i("3b2d")),s=n(i("7ca3")),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.split(";").filter((function(t){return t&&!/^[\n\s]+$/.test(t)})).map((function(t){var e=t.slice(0,t.indexOf(":")),i=t.slice(t.indexOf(":")+1);return(0,s.default)({},e.replace(/-([a-z])/g,(function(){return arguments[1].toUpperCase()})).replace(/\s+/g,""),i.replace(/^\s+/,"").replace(/\s+$/,"")||"")}))}},ff80:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{board:Object,pathType:String,fileType:{type:String,default:"png"},hidden:Boolean,quality:{type:Number,default:1},css:[String,Object],width:[Number,String],height:[Number,String],pixelRatio:Number,customStyle:String,isCanvasToTempFilePath:Boolean,sleep:{type:Number,default:1e3/30},beforeDelay:{type:Number,default:100},afterDelay:{type:Number,default:100},performance:Boolean,type:{type:String,default:"2d"}}};e.default=n}}]);
},{isPage:false,isComponent:false,currentFile:'pages_game/common/vendor.js'});$gwx2_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx2_XC_0 || [];
function gz$gwx2_XC_0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1
__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'custom-navbar data-v-5a436ae3'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'padding-top:'],[[2,'+'],[[7],[3,'statusBarHeight']],[1,'px']]],[1,';']],[[2,'+'],[[2,'+'],[1,'padding-right:'],[[2,'+'],[[7],[3,'titleMarginRight']],[1,'px']]],[1,';']]])
Z([[7],[3,'showBack']])
Z([3,'__e'])
Z([3,'navbar-left data-v-5a436ae3'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handleBack']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'$slots']],[3,'left']])
Z([3,'left'])
Z([3,'navbar-title data-v-5a436ae3'])
Z([[6],[[7],[3,'$slots']],[3,'default']])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_1
}
function gz$gwx2_XC_0_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_2)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_2
__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_2);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_2
}
function gz$gwx2_XC_0_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_3)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_3
__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[0])
Z([[2,'==='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'fromMonth']],[1,'nowMonth']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_3);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_3
}
function gz$gwx2_XC_0_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_4)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_4
__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_4);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_4
}
function gz$gwx2_XC_0_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_5)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_5
__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-07d58a07 vue-ref'])
Z([3,'popup'])
Z([3,'bottom'])
Z([3,'641de0a8-1'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[6])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'remark']])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'g0']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_5);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_5
}
function gz$gwx2_XC_0_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_6)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_6
__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-dfcd4ed8 vue-ref'])
Z([3,'popup'])
Z([3,'center'])
Z([3,'e43ec8e8-1'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_6);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_6
}
function gz$gwx2_XC_0_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_7)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_7
__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contain data-v-54edbc25'])
Z([3,'__l'])
Z([3,'data-v-54edbc25'])
Z([1,true])
Z([[2,'&&'],[[7],[3,'proData']],[[6],[[7],[3,'proData']],[3,'name']]])
Z([3,'4e490bdf-1'])
Z([3,'bodyContent data-v-54edbc25'])
Z([[2,'+'],[[2,'+'],[1,'--navbar-height:'],[[7],[3,'navbarHeight']]],[1,'px']])
Z([[7],[3,'visibleCalendar']])
Z([[7],[3,'areaImgUrl']])
Z([3,'scroll-view data-v-54edbc25'])
Z([3,'true'])
Z([[2,'&&'],[[7],[3,'proData']],[[6],[[7],[3,'proData']],[3,'openShowCalendar']]])
Z(z[2])
Z(z[8])
Z(z[2])
Z(z[1])
Z([3,'__e'])
Z(z[2])
Z([[7],[3,'monthIndex']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'onMonthClick']]]]]]]]])
Z([[7],[3,'monthList']])
Z([3,'4e490bdf-2'])
Z(z[1])
Z(z[17])
Z(z[2])
Z([[7],[3,'currentDay']])
Z([[7],[3,'currentMonth']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^dayClick']],[[4],[[5],[[4],[[5],[1,'onMonthDayClick']]]]]]]]])
Z([[7],[3,'dateString']])
Z([[7],[3,'monthOfdayList']])
Z([3,'4e490bdf-3'])
Z(z[1])
Z(z[17])
Z(z[17])
Z(z[2])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^select']],[[4],[[5],[[4],[[5],[1,'onDayClick']]]]]]]],[[4],[[5],[[5],[1,'^more']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'gdrq']]]]]]]]]]])
Z([[7],[3,'showCalendarList']])
Z([[7],[3,'chooseDate']])
Z([3,'4e490bdf-4'])
Z(z[8])
Z(z[9])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[42])
Z(z[17])
Z([3,'nav-item data-v-54edbc25'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeShowData']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'!'],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'isInSaleTime']]])
Z([[6],[[7],[3,'$root']],[3,'g0']])
Z(z[42])
Z(z[43])
Z([[6],[[7],[3,'$root']],[3,'l1']])
Z(z[42])
Z([[2,'!='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[[2,'-'],[1,1]]])
Z(z[17])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clickNavPrice']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[4],[[5],[[5],[[5],[1,'price-card']],[1,'data-v-54edbc25']],[[2,'?:'],[[2,'=='],[[7],[3,'fareIndex']],[[7],[3,'index']]],[1,'price-card-active'],[1,'']]]])
Z([[6],[[7],[3,'item']],[3,'g1']])
Z([[2,'&&'],[[2,'||'],[[2,'<='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'salableNum']],[1,0]],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'isForbiden']]],[[7],[3,'isNetLoadDataSuccess']]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'sessionType']],[1,1]],[[7],[3,'hasCountDownTime']]])
Z([3,'bottom-view data-v-54edbc25'])
Z([[7],[3,'isInSaleTime']])
Z([3,'handle-group data-v-54edbc25'])
Z([3,'info-container data-v-54edbc25'])
Z([[2,'!='],[[7],[3,'buyProType']],[1,2]])
Z([[2,'>'],[[7],[3,'limitNum']],[1,0]])
Z([[7],[3,'alt']])
Z(z[67])
Z(z[1])
Z([3,'data-v-54edbc25 vue-ref'])
Z([3,'real'])
Z([3,'4e490bdf-5'])
Z(z[1])
Z(z[72])
Z([3,'policy'])
Z([[7],[3,'showPolicyList']])
Z([3,'4e490bdf-6'])
Z(z[1])
Z(z[72])
Z([3,'confirm'])
Z([3,'4e490bdf-7'])
Z(z[1])
Z(z[72])
Z([3,'verifycode'])
Z([3,'4e490bdf-8'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_0_7);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_0_7
}
__WXML_GLOBAL__.ops_set.$gwx2_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx2_XC_0=true;
var x=['./pages_game/components/CustomNavbar/CustomNavbar.wxml','./pages_game/components/DateQuickSelector/DateQuickSelector.wxml','./pages_game/components/DaySelector/DaySelector.wxml','./pages_game/components/MonthSelector/MonthSelector.wxml','./pages_game/components/PolicyRule/PolicyRule.wxml','./pages_game/components/RealName/RealName.wxml','./pages_game/gameevent/eventSession.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx2_XC_0_1()
var oB=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var oD=_mz(z,'view',['bindtap',3,'class',1,'data-event-opts',2],[],e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,6,e,s,gg)){fE.wxVkey=1
var cF=_n('slot')
_rz(z,cF,'name',7,e,s,gg)
_(fE,cF)
}
else{fE.wxVkey=2
}
fE.wxXCkey=1
_(xC,oD)
}
var hG=_n('view')
_rz(z,hG,'class',8,e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,9,e,s,gg)){oH.wxVkey=1
var cI=_n('slot')
_(oH,cI)
}
else{oH.wxVkey=2
}
oH.wxXCkey=1
_(oB,hG)
var oJ=_n('slot')
_rz(z,oJ,'name',10,e,s,gg)
_(oB,oJ)
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx2_XC_0_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx2_XC_0_3()
var tM=_v()
_(r,tM)
var eN=function(oP,bO,xQ,gg){
var fS=_v()
_(xQ,fS)
if(_oz(z,4,oP,bO,gg)){fS.wxVkey=1
}
fS.wxXCkey=1
return xQ
}
tM.wxXCkey=2
_2z(z,2,eN,e,s,gg,tM,'item','index','index')
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx2_XC_0_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx2_XC_0_5()
var oV=_mz(z,'uni-popup',['bind:__l',0,'class',1,'data-ref',1,'type',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var cW=_v()
_(oV,cW)
var oX=function(aZ,lY,t1,gg){
var b3=_v()
_(t1,b3)
if(_oz(z,10,aZ,lY,gg)){b3.wxVkey=1
var o4=_v()
_(b3,o4)
if(_oz(z,11,aZ,lY,gg)){o4.wxVkey=1
}
o4.wxXCkey=1
}
b3.wxXCkey=1
return t1
}
cW.wxXCkey=2
_2z(z,8,oX,e,s,gg,cW,'item','index','index')
_(r,oV)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx2_XC_0_6()
var o6=_mz(z,'uni-popup',['bind:__l',0,'class',1,'data-ref',1,'type',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(r,o6)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx2_XC_0_7()
var c8=_n('view')
_rz(z,c8,'class',0,e,s,gg)
var h9=_mz(z,'custom-navbar',['bind:__l',1,'class',1,'showBack',2,'title',3,'vueId',4],[],e,s,gg)
_(c8,h9)
var o0=_mz(z,'view',['class',6,'style',1],[],e,s,gg)
var cAB=_v()
_(o0,cAB)
if(_oz(z,8,e,s,gg)){cAB.wxVkey=1
}
else{cAB.wxVkey=2
var lCB=_v()
_(cAB,lCB)
if(_oz(z,9,e,s,gg)){lCB.wxVkey=1
}
lCB.wxXCkey=1
}
var aDB=_mz(z,'scroll-view',['class',10,'scrollY',1],[],e,s,gg)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,12,e,s,gg)){tEB.wxVkey=1
var oHB=_n('view')
_rz(z,oHB,'class',13,e,s,gg)
var xIB=_v()
_(oHB,xIB)
if(_oz(z,14,e,s,gg)){xIB.wxVkey=1
var oJB=_n('view')
_rz(z,oJB,'class',15,e,s,gg)
var fKB=_mz(z,'month-selector',['bind:__l',16,'bind:change',1,'class',2,'currentMonth',3,'data-event-opts',4,'months',5,'vueId',6],[],e,s,gg)
_(oJB,fKB)
var cLB=_mz(z,'day-selector',['bind:__l',23,'bind:dayClick',1,'class',2,'currentDay',3,'currentMonth',4,'data-event-opts',5,'dateString',6,'days',7,'vueId',8],[],e,s,gg)
_(oJB,cLB)
_(xIB,oJB)
}
else{xIB.wxVkey=2
var hMB=_mz(z,'date-quick-selector',['bind:__l',32,'bind:more',1,'bind:select',2,'class',3,'data-event-opts',4,'dates',5,'selectedDate',6,'vueId',7],[],e,s,gg)
_(xIB,hMB)
}
xIB.wxXCkey=1
xIB.wxXCkey=3
xIB.wxXCkey=3
_(tEB,oHB)
}
var eFB=_v()
_(aDB,eFB)
if(_oz(z,40,e,s,gg)){eFB.wxVkey=1
var oNB=_v()
_(eFB,oNB)
if(_oz(z,41,e,s,gg)){oNB.wxVkey=1
}
oNB.wxXCkey=1
}
var cOB=_v()
_(aDB,cOB)
var oPB=function(aRB,lQB,tSB,gg){
var bUB=_mz(z,'view',['bindtap',46,'class',1,'data-event-opts',2],[],aRB,lQB,gg)
var oVB=_v()
_(bUB,oVB)
if(_oz(z,49,aRB,lQB,gg)){oVB.wxVkey=1
}
oVB.wxXCkey=1
_(tSB,bUB)
return tSB
}
cOB.wxXCkey=2
_2z(z,44,oPB,e,s,gg,cOB,'item','index','index')
var bGB=_v()
_(aDB,bGB)
if(_oz(z,50,e,s,gg)){bGB.wxVkey=1
}
var xWB=_v()
_(aDB,xWB)
var oXB=function(cZB,fYB,h1B,gg){
var c3B=_v()
_(h1B,c3B)
if(_oz(z,55,cZB,fYB,gg)){c3B.wxVkey=1
var o4B=_mz(z,'view',['bindtap',56,'class',1,'data-event-opts',2],[],cZB,fYB,gg)
var l5B=_n('view')
_rz(z,l5B,'class',59,cZB,fYB,gg)
var a6B=_v()
_(l5B,a6B)
if(_oz(z,60,cZB,fYB,gg)){a6B.wxVkey=1
}
var t7B=_v()
_(l5B,t7B)
if(_oz(z,61,cZB,fYB,gg)){t7B.wxVkey=1
}
a6B.wxXCkey=1
t7B.wxXCkey=1
_(o4B,l5B)
_(c3B,o4B)
}
c3B.wxXCkey=1
return h1B
}
xWB.wxXCkey=2
_2z(z,53,oXB,e,s,gg,xWB,'item','index','index')
tEB.wxXCkey=1
tEB.wxXCkey=3
eFB.wxXCkey=1
bGB.wxXCkey=1
_(o0,aDB)
var oBB=_v()
_(o0,oBB)
if(_oz(z,62,e,s,gg)){oBB.wxVkey=1
}
var e8B=_n('view')
_rz(z,e8B,'class',63,e,s,gg)
var b9B=_v()
_(e8B,b9B)
if(_oz(z,64,e,s,gg)){b9B.wxVkey=1
var o0B=_n('view')
_rz(z,o0B,'class',65,e,s,gg)
var oBC=_n('view')
_rz(z,oBC,'class',66,e,s,gg)
var fCC=_v()
_(oBC,fCC)
if(_oz(z,67,e,s,gg)){fCC.wxVkey=1
}
var cDC=_v()
_(oBC,cDC)
if(_oz(z,68,e,s,gg)){cDC.wxVkey=1
}
else{cDC.wxVkey=2
var hEC=_v()
_(cDC,hEC)
if(_oz(z,69,e,s,gg)){hEC.wxVkey=1
}
hEC.wxXCkey=1
}
fCC.wxXCkey=1
cDC.wxXCkey=1
_(o0B,oBC)
var xAC=_v()
_(o0B,xAC)
if(_oz(z,70,e,s,gg)){xAC.wxVkey=1
}
xAC.wxXCkey=1
_(b9B,o0B)
}
else{b9B.wxVkey=2
}
b9B.wxXCkey=1
_(o0,e8B)
cAB.wxXCkey=1
oBB.wxXCkey=1
_(c8,o0)
var oFC=_mz(z,'real-name',['bind:__l',71,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(c8,oFC)
var cGC=_mz(z,'policy-rule',['bind:__l',75,'class',1,'data-ref',2,'list',3,'vueId',4],[],e,s,gg)
_(c8,cGC)
var oHC=_mz(z,'pup-limit',['bind:__l',80,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(c8,oHC)
var lIC=_mz(z,'verify-code-popup',['bind:__l',84,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(c8,lIC)
_(r,c8)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2_XC_0";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx2_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/CustomNavbar/CustomNavbar.wxml'] = [$gwx2_XC_0, './pages_game/components/CustomNavbar/CustomNavbar.wxml'];else __wxAppCode__['pages_game/components/CustomNavbar/CustomNavbar.wxml'] = $gwx2_XC_0( './pages_game/components/CustomNavbar/CustomNavbar.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/DateQuickSelector/DateQuickSelector.wxml'] = [$gwx2_XC_0, './pages_game/components/DateQuickSelector/DateQuickSelector.wxml'];else __wxAppCode__['pages_game/components/DateQuickSelector/DateQuickSelector.wxml'] = $gwx2_XC_0( './pages_game/components/DateQuickSelector/DateQuickSelector.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/DaySelector/DaySelector.wxml'] = [$gwx2_XC_0, './pages_game/components/DaySelector/DaySelector.wxml'];else __wxAppCode__['pages_game/components/DaySelector/DaySelector.wxml'] = $gwx2_XC_0( './pages_game/components/DaySelector/DaySelector.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/MonthSelector/MonthSelector.wxml'] = [$gwx2_XC_0, './pages_game/components/MonthSelector/MonthSelector.wxml'];else __wxAppCode__['pages_game/components/MonthSelector/MonthSelector.wxml'] = $gwx2_XC_0( './pages_game/components/MonthSelector/MonthSelector.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/PolicyRule/PolicyRule.wxml'] = [$gwx2_XC_0, './pages_game/components/PolicyRule/PolicyRule.wxml'];else __wxAppCode__['pages_game/components/PolicyRule/PolicyRule.wxml'] = $gwx2_XC_0( './pages_game/components/PolicyRule/PolicyRule.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/RealName/RealName.wxml'] = [$gwx2_XC_0, './pages_game/components/RealName/RealName.wxml'];else __wxAppCode__['pages_game/components/RealName/RealName.wxml'] = $gwx2_XC_0( './pages_game/components/RealName/RealName.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/gameevent/eventSession.wxml'] = [$gwx2_XC_0, './pages_game/gameevent/eventSession.wxml'];else __wxAppCode__['pages_game/gameevent/eventSession.wxml'] = $gwx2_XC_0( './pages_game/gameevent/eventSession.wxml' );
	;__wxRoute = "pages_game/components/CustomNavbar/CustomNavbar";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/CustomNavbar/CustomNavbar.js";define("pages_game/components/CustomNavbar/CustomNavbar.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/CustomNavbar/CustomNavbar"],{"086b":function(t,e,a){"use strict";a.r(e);var n=a("e6b3"),o=a("50d5");for(var s in o)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(s);a("4535");var u=a("828b"),i=Object(u.a)(o.default,n.b,n.c,!1,null,"5a436ae3",null,!1,n.a,void 0);e.default=i.exports},4535:function(t,e,a){"use strict";var n=a("9e02");a.n(n).a},"50d5":function(t,e,a){"use strict";a.r(e);var n=a("d3b6"),o=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e.default=o.a},"9e02":function(t,e,a){},d3b6:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("8372"),o={props:{title:String,showBack:{type:Boolean,default:!0}},data:function(){return{statusBarHeight:0,titleMarginRight:20}},mounted:function(){this.getBarLayout()},methods:{getBarLayout:function(){this.statusBarHeight=(0,n.getStatusBarHeight)(),this.titleMarginRight=(0,n.getCapsuleInfo)().width+20},handleBack:function(){getCurrentPages().length<=1?(t.setStorageSync("tabPath","/pages/index/index"),t.switchTab({url:"/pages/index/index"})):t.navigateBack()}}};e.default=o}).call(this,a("df3c").default)},e6b3:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){}));var n=function(){this.$createElement;var t=(this._self._c,this.showBack?this.$previewImageAddress("back_white.png"):null);this.$mp.data=Object.assign({},{$root:{m0:t}})},o=[]}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/CustomNavbar/CustomNavbar-create-component",{"pages_game/components/CustomNavbar/CustomNavbar-create-component":function(t,e,a){a("df3c").createComponent(a("086b"))}},[["pages_game/components/CustomNavbar/CustomNavbar-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/CustomNavbar/CustomNavbar.js'});require("pages_game/components/CustomNavbar/CustomNavbar.js");;__wxRoute = "pages_game/components/DateQuickSelector/DateQuickSelector";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/DateQuickSelector/DateQuickSelector.js";define("pages_game/components/DateQuickSelector/DateQuickSelector.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/DateQuickSelector/DateQuickSelector"],{"325a":function(e,t,n){"use strict";n.r(t);var o=n("57d3"),r=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t.default=r.a},"44a9":function(e,t,n){"use strict";var o=n("f9bd");n.n(o).a},"45d4":function(e,t,n){"use strict";n.r(t);var o=n("6324"),r=n("325a");for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("44a9");var c=n("828b"),i=Object(c.a)(r.default,o.b,o.c,!1,null,"3b72e7a2",null,!1,o.a,void 0);t.default=i.exports},"57d3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("d9e3"),r={props:{dates:{type:Array,default:function(){return[]}},selectedDate:String,scrollWidth:{type:String,default:"550rpx"}},computed:{arrowIcon:function(){return this.$previewImageAddress("arrow_down_solid_3d3d3d.png")}},methods:{forWeekday:function(e){return(0,o.formatWeekday)(e)},forDay:function(e){return(0,o.formatDay)(e)},isActive:function(e){return this.selectedDate===e.time},handleSelect:function(e){this.$emit("select",e.time)},handleMore:function(){this.$emit("more")}}};t.default=r},6324:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){}));var o=function(){var e=this,t=(e.$createElement,e._self._c,e.__map(e.dates,(function(t,n){return{$orig:e.__get_orig(t),m0:e.isActive(t),m1:e.forWeekday(t.time),m2:e.forDay(t.time)}})));e.$mp.data=Object.assign({},{$root:{l0:t}})},r=[]},f9bd:function(e,t,n){}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/DateQuickSelector/DateQuickSelector-create-component",{"pages_game/components/DateQuickSelector/DateQuickSelector-create-component":function(e,t,n){n("df3c").createComponent(n("45d4"))}},[["pages_game/components/DateQuickSelector/DateQuickSelector-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/DateQuickSelector/DateQuickSelector.js'});require("pages_game/components/DateQuickSelector/DateQuickSelector.js");;__wxRoute = "pages_game/components/DaySelector/DaySelector";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/DaySelector/DaySelector.js";define("pages_game/components/DaySelector/DaySelector.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/DaySelector/DaySelector"],{1322:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={props:{days:Array,currentMonth:Number,currentDay:String,dateString:String},computed:{},data:function(){return{}},methods:{onMoreDayClick:function(n,t){this.$emit("dayClick",n,t)}}};t.default=o},"35df":function(n,t,e){},"3b62":function(n,t,e){"use strict";var o=e("35df");e.n(o).a},"773f":function(n,t,e){"use strict";e.r(t);var o=e("1322"),r=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t.default=r.a},"7b4b":function(n,t,e){"use strict";e.r(t);var o=e("d5b3"),r=e("773f");for(var a in r)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(a);e("3b62");var c=e("828b"),u=Object(c.a)(r.default,o.b,o.c,!1,null,"d54feebe",null,!1,o.a,void 0);t.default=u.exports},d5b3:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){}));var o=function(){var n=this,t=(n.$createElement,n._self._c,n.__map(n.days,(function(t,e){var o=n.__get_orig(t),r="nowMonth"===t.fromMonth?n.days.length:null;return{$orig:o,g0:r,g1:"nowMonth"===t.fromMonth&&r&&n.currentMonth<10&t.day<10?n.dateString.indexOf(t.Year+"-0"+n.currentMonth+"-0"+t.day):null,g2:"nowMonth"===t.fromMonth&&r&&!(n.currentMonth<10&t.day<10)&&n.currentMonth<10?n.dateString.indexOf(t.Year+"-0"+n.currentMonth+"-"+t.day):null,g3:"nowMonth"!==t.fromMonth||!r||n.currentMonth<10&t.day<10||n.currentMonth<10||!(t.day<10)?null:n.dateString.indexOf(t.Year+"-"+n.currentMonth+"-0"+t.day),g4:"nowMonth"!==t.fromMonth||!r||n.currentMonth<10&t.day<10||n.currentMonth<10||t.day<10?null:n.dateString.indexOf(t.Year+"-"+n.currentMonth+"-"+t.day)}})));n.$mp.data=Object.assign({},{$root:{l0:t}})},r=[]}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/DaySelector/DaySelector-create-component",{"pages_game/components/DaySelector/DaySelector-create-component":function(n,t,e){e("df3c").createComponent(e("7b4b"))}},[["pages_game/components/DaySelector/DaySelector-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/DaySelector/DaySelector.js'});require("pages_game/components/DaySelector/DaySelector.js");;__wxRoute = "pages_game/components/MonthSelector/MonthSelector";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/MonthSelector/MonthSelector.js";define("pages_game/components/MonthSelector/MonthSelector.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/MonthSelector/MonthSelector"],{"142e":function(e,n,t){"use strict";t.r(n);var o=t("23143"),c=t("a77a");for(var a in c)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return c[e]}))}(a);t("7096");var r=t("828b"),u=Object(r.a)(c.default,o.b,o.c,!1,null,"cc086ec8",null,!1,o.a,void 0);n.default=u.exports},1718:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={props:{months:Array,currentMonth:Number},components:{},data:function(){return{weekList:["周日","周一","周二","周三","周四","周五","周六"],days:[],activeMonthIndex:0}},methods:{selectMonth:function(e){this.$emit("change",e)}}};n.default=o},23143:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){}));var o=function(){this.$createElement,this._self._c},c=[]},7096:function(e,n,t){"use strict";var o=t("dc3c");t.n(o).a},a77a:function(e,n,t){"use strict";t.r(n);var o=t("1718"),c=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n.default=c.a},dc3c:function(e,n,t){}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/MonthSelector/MonthSelector-create-component",{"pages_game/components/MonthSelector/MonthSelector-create-component":function(e,n,t){t("df3c").createComponent(t("142e"))}},[["pages_game/components/MonthSelector/MonthSelector-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/MonthSelector/MonthSelector.js'});require("pages_game/components/MonthSelector/MonthSelector.js");;__wxRoute = "pages_game/components/PolicyRule/PolicyRule";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/PolicyRule/PolicyRule.js";define("pages_game/components/PolicyRule/PolicyRule.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/PolicyRule/PolicyRule"],{"15e9":function(e,n,o){"use strict";o.r(n);var t=o("d7ab"),u=o("ee29");for(var a in u)["default"].indexOf(a)<0&&function(e){o.d(n,e,(function(){return u[e]}))}(a);o("a6ae");var c=o("828b"),r=Object(c.a)(u.default,t.b,t.c,!1,null,"07d58a07",null,!1,t.a,void 0);n.default=r.exports},1824:function(e,n,o){},a6ae:function(e,n,o){"use strict";var t=o("1824");o.n(t).a},d7ab:function(e,n,o){"use strict";o.d(n,"b",(function(){return u})),o.d(n,"c",(function(){return a})),o.d(n,"a",(function(){return t}));var t={uniPopup:function(){return o.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(o.bind(null,"5b0a"))}},u=function(){var e=this,n=(e.$createElement,e._self._c,e.$previewImageAddress("arrow_left_black.png")),o=e.__map(e.list,(function(n,o){return{$orig:e.__get_orig(n),g0:n.remark?e.list.length:null}}));e.$mp.data=Object.assign({},{$root:{m0:n,l0:o}})},a=[]},ea62:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={name:"cart",props:{list:{type:Array}},methods:{open:function(){this.$refs.popup.open()},close:function(){this.$refs.popup.close()}}};n.default=t},ee29:function(e,n,o){"use strict";o.r(n);var t=o("ea62"),u=o.n(t);for(var a in t)["default"].indexOf(a)<0&&function(e){o.d(n,e,(function(){return t[e]}))}(a);n.default=u.a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/PolicyRule/PolicyRule-create-component",{"pages_game/components/PolicyRule/PolicyRule-create-component":function(e,n,o){o("df3c").createComponent(o("15e9"))}},[["pages_game/components/PolicyRule/PolicyRule-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/PolicyRule/PolicyRule.js'});require("pages_game/components/PolicyRule/PolicyRule.js");;__wxRoute = "pages_game/components/RealName/RealName";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/RealName/RealName.js";define("pages_game/components/RealName/RealName.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/RealName/RealName"],{"486c":function(e,n,a){},"69e0":function(e,n,a){"use strict";a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return c})),a.d(n,"a",(function(){return t}));var t={uniPopup:function(){return a.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(a.bind(null,"5b0a"))}},o=function(){this.$createElement;var e=(this._self._c,this.$previewImageAddress("pup-realname.png")),n=this.$previewImageAddress("close_plan_popup.png");this.$mp.data=Object.assign({},{$root:{m0:e,m1:n}})},c=[]},"6eaa":function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"real-name",props:{},data:function(){return{}},methods:{open:function(){this.$refs.popup.open()},close:function(){this.$refs.popup.close()},save:function(){e.navigateTo({url:"/pages_config/sysconfig/sysnamenotice?keynum=ctms.cms.common.conf.10021&type=1&backPage=1"}),this.close()}}};n.default=a}).call(this,a("df3c").default)},aaeb:function(e,n,a){"use strict";var t=a("486c");a.n(t).a},af14:function(e,n,a){"use strict";a.r(n);var t=a("69e0"),o=a("ca80");for(var c in o)["default"].indexOf(c)<0&&function(e){a.d(n,e,(function(){return o[e]}))}(c);a("aaeb");var u=a("828b"),s=Object(u.a)(o.default,t.b,t.c,!1,null,"dfcd4ed8",null,!1,t.a,void 0);n.default=s.exports},ca80:function(e,n,a){"use strict";a.r(n);var t=a("6eaa"),o=a.n(t);for(var c in t)["default"].indexOf(c)<0&&function(e){a.d(n,e,(function(){return t[e]}))}(c);n.default=o.a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/RealName/RealName-create-component",{"pages_game/components/RealName/RealName-create-component":function(e,n,a){a("df3c").createComponent(a("af14"))}},[["pages_game/components/RealName/RealName-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/RealName/RealName.js'});require("pages_game/components/RealName/RealName.js");;__wxRoute = "pages_game/gameevent/eventSession";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/gameevent/eventSession.js";define("pages_game/gameevent/eventSession.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/gameevent/eventSession"],{"2b88":function(t,e,i){"use strict";i.r(e);var o=i("c205"),a=i.n(o);for(var s in o)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(s);e.default=a.a},"574d":function(t,e,i){"use strict";var o=i("f4fe");i.n(o).a},"85c3":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return o}));var o={VerifyCodePopup:function(){return Promise.all([i.e("common/vendor"),i.e("components/VerifyCodePopup/VerifyCodePopup")]).then(i.bind(null,"6689"))}},a=function(){var t=this,e=(t.$createElement,t._self._c,t.$previewImageAddress("event_detail_blur_foreground.png")),i=t.visibleCalendar?t.$previewImageAddress("arrow_left_black.png"):null,o=!t.visibleCalendar&&t.areaImgUrl?t.$previewImageAddress("seat_preview.svg"):null,a=t.visibleCalendar&&t.areaImgUrl?t.$previewImageAddress("seat_preview.svg"):null,s=t.__map(t.showList,(function(e,i){return{$orig:t.__get_orig(e),m4:e.isInSaleTime?null:e.memberPreemptionTimeSt&&t.isVipUser&&t.isHaveBuyPriority&&t.compareCurrentDateMethod(e.memberPreemptionTimeSt)}})),n=t.showPolicyList&&t.showPolicyList.length>0,r=n?t.$previewImageAddress("arrow_right_gray2.png"):null,c=t.__map(t.fareList,(function(e,i){return{$orig:t.__get_orig(e),g1:-1!=e.status?e.verboseName&&e.verboseName.trim():null}})),h=1==t.sessionType&&t.hasCountDownTime?t.$previewImageAddress("event-count-down-bg2.png"):null,l=t.isInSaleTime&&2!=t.buyProType?t.$previewImageAddress("subticket2.png"):null,u=t.isInSaleTime&&2!=t.buyProType?t.$previewImageAddress("addticket2.png"):null,d=-1!=t.showIndex&&t.isStockOut?t.checkStockOutStatus():null,f=-1==t.showIndex||t.isStockOut||t.isInSaleTime||t.isBuyPriorityEnable?null:t.$previewImageAddress("ticket-tip.png");t.$mp.data=Object.assign({},{$root:{m0:e,m1:i,m2:o,m3:a,l0:s,g0:n,m5:r,l1:c,m6:h,m7:l,m8:u,m9:d,m10:f}})},s=[]},a716:function(t,e,i){"use strict";i.r(e);var o=i("85c3"),a=i("2b88");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("574d");var n=i("828b"),r=Object(n.a)(a.default,o.b,o.c,!1,null,"54edbc25",null,!1,o.a,void 0);e.default=r.exports},c205:function(t,e,i){"use strict";(function(t){var o=i("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(i("7eb4")),s=o(i("7ca3")),n=o(i("af34")),r=o(i("34cf")),c=o(i("ee10")),h=i("4380"),l=i("028b"),u=i("e2af"),d=i("54f8"),f=(i("a730"),i("8e36")),m=i("62ec"),p=i("d9e3"),g=i("f0e6"),w=i("8372"),S=i("9233");function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function y(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(Object(i),!0).forEach((function(e){(0,s.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var I={components:{PolicyRule:function(){i.e("pages_game/components/PolicyRule/PolicyRule").then(function(){return resolve(i("15e9"))}.bind(null,i)).catch(i.oe)},RealName:function(){i.e("pages_game/components/RealName/RealName").then(function(){return resolve(i("af14"))}.bind(null,i)).catch(i.oe)},CustomNavbar:function(){i.e("pages_game/components/CustomNavbar/CustomNavbar").then(function(){return resolve(i("086b"))}.bind(null,i)).catch(i.oe)},MonthSelector:function(){i.e("pages_game/components/MonthSelector/MonthSelector").then(function(){return resolve(i("142e"))}.bind(null,i)).catch(i.oe)},DaySelector:function(){i.e("pages_game/components/DaySelector/DaySelector").then(function(){return resolve(i("7b4b"))}.bind(null,i)).catch(i.oe)},DateQuickSelector:function(){i.e("pages_game/components/DateQuickSelector/DateQuickSelector").then(function(){return resolve(i("45d4"))}.bind(null,i)).catch(i.oe)}},data:function(){return{proData:null,showList:[],navAarLocal:[],showIndex:-1,showId:"",showName:"",saleSt:"",saleEt:"",fareList:[],fareIndex:-1,chooseDate:"",monthIndex:-1,limitNum:0,sessionlimitNum:0,ticketNum:0,ticketPrice:0,verboseName:0,totalAmountOrigin:0,totalAmount:0,couponAmount:0,fareLevel:"",cheapesData:[],showPolicyList:[],eleTicket:!0,sessionType:-1,isInSaleTime:!0,readySaleTime:"",hasSeatUnsoldSeatCount:0,nowYear:(new Date).getFullYear(),nowMonth:(new Date).getMonth()+1,currentMonth:(new Date).getMonth()+1,currentDay:0,showCalendarList:[],dateString:"",monthList:[],monthOfdayList:[],noClick:!0,buyProType:0,isStockOut:!1,cutOffDay:0,cutOffHour:0,cutOffMinute:0,cutOffSecond:0,timer:null,alt:"",showTime:"",isBuyPriorityEnable:!1,isVipUser:!1,isHaveBuyPriority:!1,vipLevelNotEnoughToast:"",chooseVersion:"",visibleCalendar:!1,plugInType:null,isBookingStatus:!1,showDetailData:null,isNetLoadDataSuccess:!0,areaImgUrl:"",platform:"WX"}},onUnload:function(){this.clearTimer()},computed:{navbarHeight:function(){return(0,w.getNavbarHeight)()+8},hasCountDownTime:function(){return this.cutOffDay>0||this.cutOffHour>0||this.cutOffMinute>0||this.cutOffSecond>0},timeValues:function(){return[this.cutOffDay,this.cutOffHour,this.cutOffMinute,this.cutOffSecond]},timeUnits:function(){return["天","时","分","秒"]},limitTipText:function(){return 0==this.sessionlimitNum?"提示：每笔订单限购".concat(this.limitNum,"张；").concat(this.alt):"提示：每笔订单限购".concat(this.limitNum,"张；场次限购总量").concat(this.sessionlimitNum,"张；").concat(this.alt)}},onLoad:function(e){console.debug("res----",e),this.ticketOutletId=e.ticketOutletId;try{var i=t.getStorageSync("proDetailInfo");if(console.log("proDetailInfo",i),i&&(this.proData=JSON.parse(i)),e.sList){var o=decodeURIComponent(e.sList);o&&this.initShowList(JSON.parse(o))}}catch(t){console.error("参数解析失败:",t)}},methods:{initShowList:function(e){var i=this;return(0,c.default)(a.default.mark((function o(){var s;return a.default.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return i.navAarLocal=e,console.log("this.navAarLocal",e),o.prev=2,t.showLoading(),o.next=6,(0,d.search_member_privilege)({privilegeServerKey:"ticket_priority_snatching"});case 6:return null!=(s=o.sent)&&s.data&&(i.isVipUser=s.data.isMemberShip,i.isHaveBuyPriority=s.data.isHavePrivilege,i.vipLevelNotEnoughToast=s.data.alt),i.initDetailInfo(),o.next=11,i.initAuthInfo();case 11:o.next=17;break;case 13:o.prev=13,o.t0=o.catch(2),console.error("获取会员信息失败",o.t0),i.initDetailInfo();case 17:return o.prev=17,t.hideLoading(),o.finish(17);case 20:case"end":return o.stop()}}),o,null,[[2,13,17,20]])})))()},initDetailInfo:function(){var t;null!==(t=this.navAarLocal)&&void 0!==t&&t.length&&(this.proData.openShowCalendar?(this.processDateData(),this.handleCalendarView()):this.handleListView())},processDateData:function(){var t=this;this.navAarLocal.forEach((function(e){var i,o=(0,p.timeSplitBegin)(e.showTime),a=null===(i=t.showCalendarList)||void 0===i?void 0:i.find((function(t){return t.time==o}));console.log("saleSt",o),a?a.num++:t.addNewDate(o)}))},addNewDate:function(t){var e,i=t.split("-").map(Number),o=(0,r.default)(i,2),a=o[0],s=o[1];null!==(e=this.monthList)&&void 0!==e&&e.some((function(t){return t.year==a&&t.month==s}))||(this.monthList=[].concat((0,n.default)(this.monthList||[]),[{year:a,month:s}])),console.log("dateStr",t),this.dateString=this.dateString?"".concat(this.dateString,"+").concat(t):t,this.showCalendarList=[].concat((0,n.default)(this.showCalendarList||[]),[{time:t,num:1}]),console.log("有场次的日期：",this.dateString),console.log("有场次的月份",this.monthList),console.log("showCalendarList",this.showCalendarList)},handleCalendarView:function(){1==this.showCalendarList.length&&this.onDayClick(this.showCalendarList[0].time),this.onMonthClick(0)},handleListView:function(){this.showList=(0,n.default)(this.navAarLocal),this.showList.length>0&&(this.showIndex=-1,1==this.showList.length?this.changeShowData(0):this.fareList=[])},onClick:function(t){switch(t){case"gdrq":this.onMonthClick(0),this.visibleCalendar=!0;break;case"ycgdrq":this.visibleCalendar=!1}},onMonthClick:function(t){var e;if(null!==(e=this.monthList)&&void 0!==e&&e.length){this.monthIndex=t;var i=this.monthList[t];this.currentMonth=i.month,this.monthOfdayList=(0,p.getCalendar)(i.year,i.month),console.log("monthinfo",this.currentMonth),console.log("monthOfdayList",this.monthOfdayList)}},onMonthDayClick:function(t,e){this.currentDay=e;var i=(0,p.formatShowYMD)(t,this.currentMonth,e);console.log("dayInfo",i),this.onDayClick(i)},onDayClick:function(t){console.debug("Selected day:",t),t&&(this.parseSelectedDate(t),this.resetSelectionState(t),this.filterShowList(t),this.handleShowListLogic())},parseSelectedDate:function(t){var e=t.split("-"),i=(0,r.default)(e,3),o=i[0],a=i[1],s=i[2];o&&a&&s&&(this.nowYear=o,this.currentMonth=parseInt(a,10),this.currentDay=parseInt(s,10),console.debug("Parsed date:","".concat(o,"-").concat(a,"-").concat(s)))},resetSelectionState:function(t){this.chooseDate=t,this.areaImgUrl="",this.showList=[],this.fareList=[]},filterShowList:function(t){this.navAarLocal&&(this.showList=this.navAarLocal.filter((function(e){return(0,p.timeSplitBegin)(e.showTime)==t})))},handleShowListLogic:function(){this.showIndex=-1,this.sessionType=-1,this.clearTimer(),this.fareList=[]},getShowInfoFromOss:function(e){var i=this;return(0,c.default)(a.default.mark((function o(){var s;return a.default.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,(0,h.getOssJsonFile)({url:(0,g.getShowOssJsonUrl)(i.showId)});case 3:if(s=o.sent,t.hideLoading(),null==s||!s.data){o.next=9;break}i.queryShow(s.data,!0,e),o.next=11;break;case 9:return o.next=11,i.getShowInfo();case 11:o.next=19;break;case 13:return o.prev=13,o.t0=o.catch(0),t.hideLoading(),console.error("Failed to load getShowInfoFromOss:",o.t0),o.next=19,i.getShowInfo();case 19:case"end":return o.stop()}}),o,null,[[0,13]])})))()},getShowInfo:function(){var t=this;return(0,c.default)(a.default.mark((function e(){var i;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.eventShowDetail)({id:t.showId});case 3:null!=(i=e.sent)&&i.data&&t.queryShow(i.data,!1,null),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Failed to load getShowInfo:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},queryShow:function(t,e,i){this.showDetailData=t,e&&(this.showDetailData.isInSaleTime=i),this.isNetLoadDataSuccess=!1,this.setShowInfo(),t.hasSeat&&this.queryShowIsSeatCountInfo(t.hasSeat)},queryShowIsSeatCountInfo:function(t){var e=this;return(0,c.default)(a.default.mark((function i(){var o,s;return a.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(i.prev=0,s=null,0!=t){i.next=8;break}return i.next=5,(0,h.eventShowDetailHasSeat)({id:e.showId});case 5:s=i.sent,i.next=11;break;case 8:return i.next=10,(0,h.eventShowDetailNoSeat)({id:e.showId});case 10:s=i.sent;case 11:null!==(o=s)&&void 0!==o&&o.data&&(e.isNetLoadDataSuccess=!0,e.showDetailData=s.data,e.setShowInfo()),i.next=19;break;case 14:i.prev=14,i.t0=i.catch(0),console.log("3---------",i.t0),e.isNetLoadDataSuccess=!1,e.setShowInfo();case 19:case"end":return i.stop()}}),i,null,[[0,14]])})))()},setShowInfo:function(){this.showDetailData&&(this.initBasicShowData(),this.handleBuyType(),this.handleDiscountPolicy(),this.checkBookingStatus(),this.handleCountdown())},initBasicShowData:function(){var t=this.showDetailData;this.fareList=t.showFarelevelList||[],this.limitNum=t.webPerOrderSellableNumber,this.sessionlimitNum=t.webAllOrderSellableNumber||0,t.memberPreemptionTimeSt?this.isBuyPriorityEnable=!0:this.isBuyPriorityEnable=!1,this.hasSeatUnsoldSeatCount=t.hasSeatUnsoldSeatCount,this.showTime=t.showTime,this.plugInType=t.plugInType,this.isStockOut=!1,this.areaImgUrl=t.areaImgUrl,this.isInSaleTime=t.isInSaleTime,this.isBookingStatus=!1,this.ticketNum=0},handleBuyType:function(){var t=this.showDetailData.hasSeat;2==this.proData.chooseSeat&&0==t?this.buyProType=1:1==this.proData.chooseSeat&&0==t&&(this.buyProType=2,this.chooseVersion||this.createChooseSeatVersion())},handleDiscountPolicy:function(){this.showDetailData.showPolicyList&&(this.showPolicyList=this.showDetailData.showPolicyList.map((function(t){var e;return y(y({},t),{},{remark:(null===(e=t.remark)||void 0===e?void 0:e.replace(/-/g,"<Br />"))||""})})))},checkBookingStatus:function(){var e=this;if(!this.isInSaleTime){var i=JSON.parse(t.getStorageSync("bookingShowInfoList")||"[]");this.isBookingStatus=i.some((function(t){return t.showId==e.showId}))}},handleCountdown:function(){if(this.clearTimer(),this.showDetailData.isInSaleTime)this.sessionType=-1;else{var t=this.isBuyPriorityEnable&&this.isVipUser&&this.isHaveBuyPriority?this.showDetailData.memberPreemptionTimeSt:this.showDetailData.saleSt;(0,p.compareCurrentDate)(this.showDetailData.saleEt)?this.handleExpiredShow():(0,p.compareCurrentDate)(t)?this.resetSessionIsInSale():this.startCountdown(t)}},handleExpiredShow:function(){this.sessionType=2,t.showToast({title:"遗憾错过，再看看其他场次",icon:"none"})},startCountdown:function(t){var e=this;this.readySaleTime=t,this.sessionType=1;var i=function(){var t=(0,p.countdownTime)(e.readySaleTime);if(t<=1e3)return e.clearTimer(),void e.resetSessionIsInSale();var i=Math.floor(t/864e5),o=Math.floor(t%864e5/36e5),a=Math.floor(t%36e5/6e4),s=Math.floor(t%6e4/1e3);e.cutOffDay=i,e.cutOffHour=o,e.cutOffMinute=a,e.cutOffSecond=s};i(),this.timer=setInterval(i,1e3)},changeShowData:function(t){if(this.fareIndex=-1,this.showIndex!=t){var e=this.showList[t];this.showIndex=t,this.showId=e.id,this.showName=e.displayShowName,this.saleSt=e.saleSt,this.saleEt=e.saleEt,this.getShowInfoFromOss(e.isInSaleTime),console.log("changeShowData",this.showId)}},resetSessionIsInSale:function(){this.sessionType=-1,this.showList&&(this.showList[this.showIndex].isInSaleTime||(this.showList[this.showIndex].isInSaleTime=!0,this.isInSaleTime=!0))},clickNavPrice:function(e){if(this.setDefaultData(),(this.fareList[e].salableNum<=0||this.fareList[e].isForbiden)&&this.isNetLoadDataSuccess)return this.fareIndex=e,void(this.isStockOut=!0);this.isStockOut=!1,2!=this.sessionType?(1==this.sessionType&&t.showToast({title:"暂未开售，开售时间"+this.readySaleTime,icon:"none"}),this.fareIndex=e,this.fareLevel=this.fareList[e].code,this.ticketPrice=this.fareList[e].price,this.verboseName=this.fareList[e].verboseName,2!=this.buyProType&&(this.ticketNum=1)):t.showToast({title:"遗憾错过，再看看其他场次",icon:"none"})},addticketfun:function(){this.isStockOut||(2!=this.sessionType?1!=this.sessionType?-1!=this.fareIndex?0==this.limitNum||this.limitNum!=this.ticketNum?(this.ticketNum,this.ticketNum++):t.showToast({title:"每个订单限购".concat(this.limitNum,"张"),icon:"none"}):t.showToast({title:"请选择票价档位",icon:"none"}):t.showToast({title:"暂未开售，开售时间"+this.readySaleTime,icon:"none"}):t.showToast({title:"遗憾错过，再看看其他场次",icon:"none"}))},subticketfun:function(){this.isStockOut||1!=this.ticketNum&&-1!=this.fareIndex&&(this.ticketNum=this.ticketNum-1,0==this.ticketNum&&this.setDefaultData())},openRealName:function(){this.$refs.real.open()},checkStockOutStatus:function(){var t,e;if(this.fareIndex<0||this.fareIndex>=(null===(t=this.fareList)||void 0===t?void 0:t.length))return!1;var i=null===(e=this.fareList[this.fareIndex])||void 0===e?void 0:e.code;return!!i&&(0,S.isRegistered)(this.showId,i)},submitStockRegist:function(){-1!=this.showIndex?this.checkStockOutStatus()?t.showToast({title:"已登记",icon:"none"}):this.saveRegist(t.getStorageSync("authphone"),""):t.showToast({title:"请选择场次",icon:"none"})},saveRegist:function(e,i){var o=this;(0,m.isMobile)(e)?(0,h.scarceRegister)({thirdOrderNo:this.proData.id,registerPhone:e,comments:i,showId:this.showId,businessType:1,fareDes:this.fareList[this.fareIndex].verboseName}).then((function(e){t.showToast({title:"您的缺货登记已提交！",icon:"none"}),(0,S.markAsRegistered)(o.showId,o.fareList[o.fareIndex].code)})).catch((function(t){})):t.showToast({title:"无效的手机号",icon:"none"})},priorityToast:function(){-1!=this.showIndex?this.isBuyPriorityEnable&&this.isVipUser&&!this.isHaveBuyPriority&&t.showToast({title:this.vipLevelNotEnoughToast,icon:"none"}):t.showToast({title:"请选择场次",icon:"none"})},getBuyerLimit:function(e){var i=this;if(t.getStorageSync("token"))if(-1!=this.showIndex){if(1==e){if(!this.isInSaleTime)return;if(1==this.buyProType&&0==this.hasSeatUnsoldSeatCount)return;if(-1==this.fareIndex)return void t.showToast({title:"请选择票价档位",icon:"none"});if(0==this.ticketNum)return void t.showToast({title:"请添加购票数量",icon:"none"})}else if((!this.isInSaleTime||0==this.hasSeatUnsoldSeatCount)&&this.isNetLoadDataSuccess)return;t.getStorageSync("isAuth")?this.showDetailData.buyerLimitSwitchOn?(0,h.buyerLimit)({showId:this.showId}).then((function(t){t.data&&i.goSeatOrPay(e)})).catch((function(t){})):this.goSeatOrPay(e):this.openRealName()}else t.showToast({title:"请选择场次",icon:"none"});else this.jumpToLogin()},goSeatOrPay:function(t){1==t?this.getCheapest():this.goChooseSeat()},getCheapest:function(){var t=this;this.cheapesData=[];for(var e=0;e<this.ticketNum;e++)this.cheapesData.push({fareLevel:this.fareLevel,price:this.ticketPrice,originalPrice:this.ticketPrice,verboseName:this.verboseName,registerName:"",registerNo:"",registerOutProNo:"",seatId:"",realnameRelationId:"",ticketNum:1}),console.log("ddd",this.cheapesData);(0,l.getCheapestPolicy)({showId:this.showId,seatList:this.cheapesData}).then((function(e){if(console.log(e),e.data){var i=e.data.showSeats;if(i){for(var o=0;o<i.length;o++)t.cheapesData[o].seatId=i[o].id;console.log("eee",t.cheapesData)}t.totalAmountOrigin=e.data.totalAmountOrigin,t.totalAmount=e.data.totalAmount,t.couponAmount=(0,f.formatCalculateNum)(t.totalAmountOrigin,t.totalAmount,"-",2)}t.goPay()})).catch((function(t){console.log(t)}))},goPay:function(){var e=this;(0,l.lockSeat)({showId:this.showId,seatList:this.cheapesData}).then((function(i){if(console.log(i),t.hideLoading(),i.data){console.log("aaaaa",e.proData),JSON.stringify(e.proData);var o=i.data.key,a=i.data.policyName,s=i.data.showSeats;if(s)for(var n=0;n<s.length;n++)e.cheapesData[n].seatId=s[n].id,e.cheapesData[n].seatSnapshot=s[n].snapshot,e.cheapesData[n].suitCode=s[n].suitCode,e.cheapesData[n].price=s[n].salePrice;console.log("ticketOutletId",e.ticketOutletId),t.navigateTo({url:"/pages_game/gameevent/eventpay?imageUrl="+e.proData.imageUrl+"&name=".concat(e.proData.name,"&venueAddress=").concat(e.proData.venueAddress,"&realNameType=").concat(e.proData.realNameType,"&printTicketTypesMap=").concat(e.proData.printTicketTypesMap,"&id=").concat(e.proData.id,"&cheapesData=").concat(JSON.stringify(e.cheapesData),"&&totalTicketNum=").concat(e.ticketNum,"&totalAmount=").concat(e.totalAmount,"&deltaPrice=").concat(e.couponAmount,"&key=")+o+"&policyName="+a+"&showId=".concat(e.showId,"&buyProType=").concat(e.buyProType,"&showName=").concat(e.showName,"&showTime=").concat(e.showTime,"&ticketOutletId=").concat(e.ticketOutletId,"&performanceSource=").concat(e.proData.performanceSource,"&plugInType=").concat(e.plugInType,"&douyinProductId=").concat(e.proData.douyinRelationId,"&buyProtocolOn=").concat(e.proData.buyProtocolOn,"&buyProtocol=").concat(e.proData.buyProtocol)})}})).catch((function(t){console.log(t)}))},goChooseSeat:function(){var e=this,i=JSON.stringify(this.proData),o=JSON.stringify(this.showList[this.showIndex]);console.log(i,o),t.navigateTo({url:"/pages_game/gameevent/chooseseat",success:function(t){t.eventChannel.emit("acceptDataFromOpenerPage",{itemdata:encodeURIComponent(i),navItemData:encodeURIComponent(o),fareIndex:e.fareIndex,showTime:e.showTime,showName:e.showName,chooseVersion:e.chooseVersion,ticketOutletId:e.ticketOutletId})}})},openPolicy:function(){this.$refs.policy.open()},initAuthInfo:function(){t.getStorageSync("isAuth")||(0,u.getAccountRegistration)({}).then((function(e){console.log(e),e.data?(t.setStorageSync("isAuth",e.data.isRealAuth),t.setStorageSync("authName",e.data.name)):t.setStorageSync("isAuth",!1)})).catch((function(t){console.log(t)}))},ticketsTip:function(){if(t.getStorageSync("isAuth"))if(-1!=this.fareIndex){var e=this;t.navigateTo({url:"/pages_game/gameevent/ticketsTips?id="+this.proData.id+"&showId="+this.showId+"&verboseName="+this.verboseName+"&saleSt="+this.saleSt+"&saleEt="+this.saleEt,success:function(t){t.eventChannel.on("acceptData",(function(t){console.log("acceptData",t),e.isBookingStatus=!0}))}})}else t.showToast({title:"请选择票价档位",icon:"none"});else this.openRealName()},compareCurrentDateMethod:function(t){return(0,p.compareCurrentDate)(t)},createChooseSeatVersion:function(){var e=this;t.request({url:"https://seat.dasheng.top/meta.json?v="+Math.floor(50*Math.random())+50,success:function(t){t.data&&(e.chooseVersion=t.data.version)}})},seatPreview:function(){t.previewImage({urls:[this.areaImgUrl]})},setDefaultData:function(){this.cheapesData=[],this.totalAmountOrigin=0,this.totalAmount=0,this.couponAmount=0,this.fareIndex=-1,this.fareLevel="",this.ticketPrice=0,this.verboseName="",this.alt=""},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},jumpToLogin:function(){t.navigateTo({url:"/pages/mine/login"})}}};e.default=I}).call(this,i("df3c").default)},f4fe:function(t,e,i){},f62e:function(t,e,i){"use strict";(function(t,e){var o=i("47a9");i("42bd"),i("861b"),o(i("3240"));var a=o(i("a716"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(a.default)}).call(this,i("3223").default,i("df3c").createPage)}},[["f62e","common/runtime","common/vendor","pages_game/common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_game/gameevent/eventSession.js'});require("pages_game/gameevent/eventSession.js");$gwx2_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx2_XC_1 || [];
function gz$gwx2_XC_1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1
__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1
}
function gz$gwx2_XC_1_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_2)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_2
__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-a5fc6274 vue-ref'])
Z([3,'popup'])
Z([1,false])
Z([3,'bottom'])
Z([3,'12c8c629-1'])
Z([[4],[[5],[1,'default']]])
Z([3,'eventdetail data-v-a5fc6274'])
Z([[2,'&&'],[[2,'=='],[[7],[3,'policyNum']],[1,0]],[[2,'>'],[[7],[3,'couponTotalAmount']],[1,0]]])
Z([[2,'>'],[[7],[3,'deliveryFee']],[1,0]])
Z([[2,'&&'],[[7],[3,'isSelectUsePoint']],[[2,'>'],[[7],[3,'deductionAmount']],[1,0]]])
Z([[2,'>'],[[7],[3,'couponDisAmount']],[1,0]])
Z([[2,'&&'],[[7],[3,'policyName']],[[2,'>'],[[7],[3,'policyNum']],[1,0]]])
Z(z[12])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_2);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_2
}
function gz$gwx2_XC_1_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_3)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_3
__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-4f4ba692 vue-ref'])
Z([3,'popup'])
Z([1,false])
Z([3,'bottom'])
Z([3,'09c77cec-1'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[7])
Z([3,'__e'])
Z([3,'data-v-4f4ba692'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'selectCoup']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[1,0]])
Z([[2,'==='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'discountType']],[1,'1']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_3);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_3
}
function gz$gwx2_XC_1_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_4)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_4
__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,false])
Z([3,'__l'])
Z([3,'data-v-2034b766 vue-ref'])
Z([3,'popup'])
Z(z[0])
Z([3,'bottom'])
Z([3,'7238d78c-1'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_4);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_4
}
function gz$gwx2_XC_1_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_5)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_5
__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-92b2fa28'])
Z([[7],[3,'groupShow']])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[2])
Z([3,'ticketinfo data-v-92b2fa28'])
Z([[2,'!='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'seatSnapshot']],[1,'无座位']])
Z([[2,'=='],[[7],[3,'realNameType']],[1,3]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_5);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_5
}
function gz$gwx2_XC_1_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_6)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_6
__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'indexParent'])
Z([3,'itemParent'])
Z([[6],[[7],[3,'$root']],[3,'l1']])
Z(z[0])
Z([3,'groupparent data-v-3cce2ea3'])
Z([[7],[3,'groupShow']])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'itemParent']],[3,'l0']])
Z(z[6])
Z([3,'data-v-3cce2ea3'])
Z([[2,'!='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'seatSnapshot']],[1,'无座位']])
Z([[2,'=='],[[7],[3,'realNameType']],[1,3]])
Z([[2,'!='],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'item']],[3,'g0']],[1,1]]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_6);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_6
}
function gz$gwx2_XC_1_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_7)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_7
__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-5a8db746'])
Z([[2,'!='],[[7],[3,'platform']],[1,'TT']])
Z([3,'transparent'])
Z([3,'__l'])
Z([3,'__e'])
Z([1,false])
Z([3,'data-v-5a8db746'])
Z([1,true])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z(z[7])
Z([[2,'?:'],[[2,'!='],[[7],[3,'platform']],[1,'ALI']],[1,'left'],[1,'']])
Z(z[7])
Z([3,'订单支付'])
Z([3,'48cb9f26-1'])
Z([3,'mainContent data-v-5a8db746'])
Z([3,'eventdetail data-v-5a8db746'])
Z([3,'ddd data-v-5a8db746'])
Z([[2,'>'],[[6],[[7],[3,'$root']],[3,'g0']],[1,0]])
Z(z[3])
Z(z[4])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^goPurchaserDetailTp']],[[4],[[5],[[4],[[5],[1,'goPurchaserDetailTp']]]]]]]]])
Z([[7],[3,'listticketBindTp']])
Z([[6],[[7],[3,'$root']],[3,'m2']])
Z([3,'48cb9f26-2'])
Z(z[3])
Z(z[4])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^goPurchaserDetail']],[[4],[[5],[[4],[[5],[1,'goPurchaserDetail']]]]]]]]])
Z([[7],[3,'listticketBind']])
Z([[6],[[7],[3,'$root']],[3,'m3']])
Z([3,'48cb9f26-3'])
Z([3,'chupiao data-v-5a8db746'])
Z([[6],[[7],[3,'$root']],[3,'g1']])
Z([[6],[[7],[3,'$root']],[3,'g2']])
Z([[2,'=='],[[6],[[7],[3,'selectDrawtype']],[3,'pickUpType']],[1,3]])
Z([[2,'=='],[[6],[[7],[3,'selectDrawtype']],[3,'drawOutType']],[1,2]])
Z([[2,'=='],[[7],[3,'hasEntry']],[1,1]])
Z([[7],[3,'entryNote']])
Z(z[1])
Z([[7],[3,'pointSwitchOn']])
Z(z[3])
Z(z[4])
Z([3,'data-v-5a8db746 vue-ref'])
Z([3,'#1A1A1A'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^getPaymentType']],[[4],[[5],[[4],[[5],[1,'getPaymentType']]]]]]]]])
Z([3,'refPayway'])
Z([3,'32rpx'])
Z([3,'48cb9f26-4'])
Z([3,'bottom data-v-5a8db746'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'?:'],[[7],[3,'buyProtocolOn']],[1,'205rpx'],[1,'150rpx']]],[1,';']])
Z([[7],[3,'buyProtocolOn']])
Z([[2,'>'],[[7],[3,'couponAmountVisible']],[1,0]])
Z(z[3])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[43])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^closePurchaser']],[[4],[[5],[[4],[[5],[1,'hidePupop']]]]]]]],[[4],[[5],[[5],[1,'^addPurchaser']],[[4],[[5],[[4],[[5],[1,'addPurchaser']]]]]]]],[[4],[[5],[[5],[1,'^surePurchaser']],[[4],[[5],[[4],[[5],[1,'surePurchaser']]]]]]]],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'purchaserAar']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'popupPurchaser'])
Z([[7],[3,'idcardTypesLimitMsg']])
Z([[7],[3,'purchaserAar']])
Z([3,'48cb9f26-5'])
Z(z[3])
Z(z[4])
Z(z[43])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'changePupop']]]]]]]]])
Z([3,'popupshaddress'])
Z([3,'bottom'])
Z([3,'48cb9f26-6'])
Z([[4],[[5],[1,'default']]])
Z([[7],[3,'addressAar']])
Z(z[3])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[6])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^closeSHAddress']],[[4],[[5],[[4],[[5],[1,'closeSHAddress']]]]]]]],[[4],[[5],[[5],[1,'^changeSHAddress']],[[4],[[5],[[4],[[5],[1,'changeSHAddress']]]]]]]],[[4],[[5],[[5],[1,'^editAddress']],[[4],[[5],[[4],[[5],[1,'editAddress']]]]]]]],[[4],[[5],[[5],[1,'^addAddress']],[[4],[[5],[[4],[[5],[1,'addAddress']]]]]]]],[[4],[[5],[[5],[1,'^sureAddress']],[[4],[[5],[[4],[[5],[1,'sureAddress']]]]]]]]])
Z(z[7])
Z([[2,'+'],[[2,'+'],[1,'48cb9f26-7'],[1,',']],[1,'48cb9f26-6']])
Z(z[3])
Z(z[4])
Z(z[43])
Z(z[67])
Z([3,'popupqpaddress'])
Z(z[69])
Z([3,'48cb9f26-8'])
Z(z[71])
Z([[7],[3,'ticketshop']])
Z(z[3])
Z(z[4])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'closeQPAddress']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'48cb9f26-9'],[1,',']],[1,'48cb9f26-8']])
Z(z[3])
Z(z[4])
Z(z[43])
Z([[7],[3,'couponDisAmount']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^closeDetail']],[[4],[[5],[[4],[[5],[1,'hidePupop']]]]]]]]])
Z([3,'popupOrdDetail'])
Z([[6],[[7],[3,'$root']],[3,'m12']])
Z([[7],[3,'deliveryFee']])
Z([[7],[3,'isSelectUsePoint']])
Z([[7],[3,'policyName']])
Z([[6],[[7],[3,'$root']],[3,'g6']])
Z([[7],[3,'salePriceChangeMsgAar']])
Z([[7],[3,'formData']])
Z([[7],[3,'totalTicketNum']])
Z([3,'48cb9f26-10'])
Z(z[3])
Z(z[4])
Z(z[43])
Z(z[67])
Z([3,'drawoutTypePop'])
Z(z[69])
Z([3,'48cb9f26-11'])
Z(z[71])
Z(z[3])
Z(z[4])
Z(z[4])
Z(z[6])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^changeDrawoutType']],[[4],[[5],[[4],[[5],[1,'changeDrawoutType']]]]]]]],[[4],[[5],[[5],[1,'^closeDrawoutType']],[[4],[[5],[[4],[[5],[1,'hideChangeDrawoutPop']]]]]]]]])
Z([[7],[3,'selectDrawtype']])
Z([[7],[3,'sendList']])
Z([[2,'+'],[[2,'+'],[1,'48cb9f26-12'],[1,',']],[1,'48cb9f26-11']])
Z(z[3])
Z(z[4])
Z(z[43])
Z([[4],[[5],[[4],[[5],[[5],[1,'^hidePupop']],[[4],[[5],[[4],[[5],[1,'hidePupop']]]]]]]]])
Z([3,'noPayWarn'])
Z([3,'48cb9f26-13'])
Z(z[3])
Z(z[4])
Z(z[4])
Z(z[43])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^selectCoup']],[[4],[[5],[[4],[[5],[1,'selectCoup']]]]]]]],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'couponList']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'selectCouponPop'])
Z([[7],[3,'couponList']])
Z([3,'48cb9f26-14'])
Z(z[3])
Z(z[4])
Z(z[43])
Z(z[67])
Z([3,'orderExitWarn'])
Z([3,'center'])
Z([3,'48cb9f26-15'])
Z(z[71])
Z(z[3])
Z(z[4])
Z(z[4])
Z(z[6])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^orderExitClose']],[[4],[[5],[[4],[[5],[1,'orderExitClose']]]]]]]],[[4],[[5],[[5],[1,'^orderExitConfirm']],[[4],[[5],[[4],[[5],[1,'orderExitConfirm']]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'48cb9f26-16'],[1,',']],[1,'48cb9f26-15']])
Z([[7],[3,'totalPoints']])
Z(z[3])
Z(z[4])
Z(z[43])
Z([[4],[[5],[[4],[[5],[[5],[1,'^saveOffset']],[[4],[[5],[[4],[[5],[1,'saveOffset']]]]]]]]])
Z([3,'setPoint'])
Z([[7],[3,'deductionPoint']])
Z([[7],[3,'deductionMoneyText']])
Z([3,'48cb9f26-17'])
Z(z[3])
Z(z[4])
Z(z[43])
Z(z[67])
Z([3,'confirmGoNextPop'])
Z(z[5])
Z(z[147])
Z([3,'48cb9f26-18'])
Z(z[71])
Z(z[3])
Z(z[4])
Z(z[43])
Z([[4],[[5],[[4],[[5],[[5],[1,'^closeNotes']],[[4],[[5],[[4],[[5],[1,'hidePupop']]]]]]]]])
Z([3,'richNotePopup'])
Z(z[7])
Z([[7],[3,'popupMaxHeight']])
Z([[7],[3,'buyProtocolContext']])
Z([3,'购买协议'])
Z([3,'48cb9f26-19'])
Z(z[3])
Z(z[43])
Z([3,'confirm'])
Z([3,'48cb9f26-20'])
Z(z[3])
Z(z[43])
Z([3,'verifycode'])
Z([3,'48cb9f26-21'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_7);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_7
}
__WXML_GLOBAL__.ops_set.$gwx2_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx2_XC_1=true;
var x=['./pages_game/components/choosedrawouttype/choosedrawouttype.wxml','./pages_game/components/pricedetailold/pricedetail.wxml','./pages_game/components/selectCoupon/selectCoupon.wxml','./pages_game/components/setPointOffset/setPointOffset.wxml','./pages_game/components/ticketpurchaser/ticketpurchaser.wxml','./pages_game/components/ticketpurchaserTp/ticketpurchaserTp.wxml','./pages_game/gameevent/eventpay.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx2_XC_1_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx2_XC_1_2()
var eLC=_mz(z,'uni-popup',['bind:__l',0,'class',1,'data-ref',1,'maskClick',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var bMC=_n('view')
_rz(z,bMC,'class',7,e,s,gg)
var oNC=_v()
_(bMC,oNC)
if(_oz(z,8,e,s,gg)){oNC.wxVkey=1
}
var xOC=_v()
_(bMC,xOC)
if(_oz(z,9,e,s,gg)){xOC.wxVkey=1
}
var oPC=_v()
_(bMC,oPC)
if(_oz(z,10,e,s,gg)){oPC.wxVkey=1
}
else{oPC.wxVkey=2
var hSC=_v()
_(oPC,hSC)
if(_oz(z,11,e,s,gg)){hSC.wxVkey=1
}
hSC.wxXCkey=1
}
var fQC=_v()
_(bMC,fQC)
if(_oz(z,12,e,s,gg)){fQC.wxVkey=1
}
var cRC=_v()
_(bMC,cRC)
if(_oz(z,13,e,s,gg)){cRC.wxVkey=1
}
oNC.wxXCkey=1
xOC.wxXCkey=1
oPC.wxXCkey=1
fQC.wxXCkey=1
cRC.wxXCkey=1
_(eLC,bMC)
_(r,eLC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx2_XC_1_3()
var cUC=_mz(z,'uni-popup',['bind:__l',0,'class',1,'data-ref',1,'maskClick',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var oVC=_v()
_(cUC,oVC)
var lWC=function(tYC,aXC,eZC,gg){
var o2C=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],tYC,aXC,gg)
var x3C=_v()
_(o2C,x3C)
if(_oz(z,14,tYC,aXC,gg)){x3C.wxVkey=1
var o4C=_v()
_(x3C,o4C)
if(_oz(z,15,tYC,aXC,gg)){o4C.wxVkey=1
}
o4C.wxXCkey=1
}
x3C.wxXCkey=1
_(eZC,o2C)
return eZC
}
oVC.wxXCkey=2
_2z(z,9,lWC,e,s,gg,oVC,'item','index','index')
_(r,cUC)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx2_XC_1_4()
var c6C=_mz(z,'uni-popup',['animation',0,'bind:__l',1,'class',1,'data-ref',2,'maskClick',3,'type',4,'vueId',5,'vueSlots',6],[],e,s,gg)
_(r,c6C)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx2_XC_1_5()
var o8C=_n('view')
_rz(z,o8C,'class',0,e,s,gg)
var c9C=_v()
_(o8C,c9C)
if(_oz(z,1,e,s,gg)){c9C.wxVkey=1
}
else{c9C.wxVkey=2
var o0C=_v()
_(c9C,o0C)
var lAD=function(tCD,aBD,eDD,gg){
var oFD=_n('view')
_rz(z,oFD,'class',6,tCD,aBD,gg)
var xGD=_v()
_(oFD,xGD)
if(_oz(z,7,tCD,aBD,gg)){xGD.wxVkey=1
}
var oHD=_v()
_(oFD,oHD)
if(_oz(z,8,tCD,aBD,gg)){oHD.wxVkey=1
}
xGD.wxXCkey=1
oHD.wxXCkey=1
_(eDD,oFD)
return eDD
}
o0C.wxXCkey=2
_2z(z,4,lAD,e,s,gg,o0C,'item','index','index')
}
c9C.wxXCkey=1
_(r,o8C)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx2_XC_1_6()
var cJD=_v()
_(r,cJD)
var hKD=function(cMD,oLD,oND,gg){
var aPD=_n('view')
_rz(z,aPD,'class',4,cMD,oLD,gg)
var tQD=_v()
_(aPD,tQD)
if(_oz(z,5,cMD,oLD,gg)){tQD.wxVkey=1
}
else{tQD.wxVkey=2
var eRD=_v()
_(tQD,eRD)
var bSD=function(xUD,oTD,oVD,gg){
var cXD=_n('view')
_rz(z,cXD,'class',10,xUD,oTD,gg)
var hYD=_v()
_(cXD,hYD)
if(_oz(z,11,xUD,oTD,gg)){hYD.wxVkey=1
}
var oZD=_v()
_(cXD,oZD)
if(_oz(z,12,xUD,oTD,gg)){oZD.wxVkey=1
}
var c1D=_v()
_(cXD,c1D)
if(_oz(z,13,xUD,oTD,gg)){c1D.wxVkey=1
}
hYD.wxXCkey=1
oZD.wxXCkey=1
c1D.wxXCkey=1
_(oVD,cXD)
return oVD
}
eRD.wxXCkey=2
_2z(z,8,bSD,cMD,oLD,gg,eRD,'item','index','index')
}
tQD.wxXCkey=1
_(oND,aPD)
return oND
}
cJD.wxXCkey=2
_2z(z,2,hKD,e,s,gg,cJD,'itemParent','indexParent','indexParent')
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx2_XC_1_7()
var l3D=_n('view')
_rz(z,l3D,'class',0,e,s,gg)
var a4D=_v()
_(l3D,a4D)
if(_oz(z,1,e,s,gg)){a4D.wxVkey=1
var t5D=_mz(z,'uni-nav-bar',['backgroundColor',2,'bind:__l',1,'bind:clickLeft',2,'border',3,'class',4,'dark',5,'data-event-opts',6,'fixed',7,'leftIcon',8,'statusBar',9,'title',10,'vueId',11],[],e,s,gg)
_(a4D,t5D)
}
var e6D=_n('view')
_rz(z,e6D,'class',14,e,s,gg)
var b7D=_n('view')
_rz(z,b7D,'class',15,e,s,gg)
var o0D=_n('view')
_rz(z,o0D,'class',16,e,s,gg)
var fAE=_v()
_(o0D,fAE)
if(_oz(z,17,e,s,gg)){fAE.wxVkey=1
var cBE=_mz(z,'ticketpurchaser-tp',['bind:__l',18,'bind:goPurchaserDetailTp',1,'class',2,'data-event-opts',3,'listticket',4,'realNameType',5,'vueId',6],[],e,s,gg)
_(fAE,cBE)
}
else{fAE.wxVkey=2
var hCE=_mz(z,'ticketpurchaser',['bind:__l',25,'bind:goPurchaserDetail',1,'class',2,'data-event-opts',3,'listticket',4,'realNameType',5,'vueId',6],[],e,s,gg)
_(fAE,hCE)
}
var oDE=_n('view')
_rz(z,oDE,'class',32,e,s,gg)
var cEE=_v()
_(oDE,cEE)
if(_oz(z,33,e,s,gg)){cEE.wxVkey=1
}
var oFE=_v()
_(oDE,oFE)
if(_oz(z,34,e,s,gg)){oFE.wxVkey=1
}
var lGE=_v()
_(oDE,lGE)
if(_oz(z,35,e,s,gg)){lGE.wxVkey=1
}
var aHE=_v()
_(oDE,aHE)
if(_oz(z,36,e,s,gg)){aHE.wxVkey=1
}
cEE.wxXCkey=1
oFE.wxXCkey=1
lGE.wxXCkey=1
aHE.wxXCkey=1
_(o0D,oDE)
fAE.wxXCkey=1
fAE.wxXCkey=3
fAE.wxXCkey=3
_(b7D,o0D)
var o8D=_v()
_(b7D,o8D)
if(_oz(z,37,e,s,gg)){o8D.wxVkey=1
var tIE=_v()
_(o8D,tIE)
if(_oz(z,38,e,s,gg)){tIE.wxVkey=1
}
tIE.wxXCkey=1
}
var x9D=_v()
_(b7D,x9D)
if(_oz(z,39,e,s,gg)){x9D.wxVkey=1
var eJE=_v()
_(x9D,eJE)
if(_oz(z,40,e,s,gg)){eJE.wxVkey=1
}
eJE.wxXCkey=1
}
var bKE=_mz(z,'paywayradio',['bind:__l',41,'bind:getPaymentType',1,'class',2,'color',3,'data-event-opts',4,'data-ref',5,'titleSize',6,'vueId',7],[],e,s,gg)
_(b7D,bKE)
o8D.wxXCkey=1
x9D.wxXCkey=1
_(e6D,b7D)
var oLE=_mz(z,'view',['class',49,'style',1],[],e,s,gg)
var xME=_v()
_(oLE,xME)
if(_oz(z,51,e,s,gg)){xME.wxVkey=1
}
var oNE=_v()
_(oLE,oNE)
if(_oz(z,52,e,s,gg)){oNE.wxVkey=1
}
xME.wxXCkey=1
oNE.wxXCkey=1
_(e6D,oLE)
var fOE=_mz(z,'choosepurchaser',['bind:__l',53,'bind:addPurchaser',1,'bind:closePurchaser',2,'bind:input',3,'bind:surePurchaser',4,'class',5,'data-event-opts',6,'data-ref',7,'idcardTypesLimitMsg',8,'value',9,'vueId',10],[],e,s,gg)
_(e6D,fOE)
var cPE=_mz(z,'uni-popup',['bind:__l',64,'bind:change',1,'class',2,'data-event-opts',3,'data-ref',4,'type',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var hQE=_mz(z,'goodsaddress',['addressAar',72,'bind:__l',1,'bind:addAddress',2,'bind:changeSHAddress',3,'bind:closeSHAddress',4,'bind:editAddress',5,'bind:sureAddress',6,'class',7,'data-event-opts',8,'isShowEditBtn',9,'vueId',10],[],e,s,gg)
_(cPE,hQE)
_(e6D,cPE)
var oRE=_mz(z,'uni-popup',['bind:__l',83,'bind:change',1,'class',2,'data-event-opts',3,'data-ref',4,'type',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var cSE=_mz(z,'ticketaddress',['addressAar',91,'bind:__l',1,'bindtap',2,'class',3,'data-event-opts',4,'vueId',5],[],e,s,gg)
_(oRE,cSE)
_(e6D,oRE)
var oTE=_mz(z,'pricedetail',['bind:__l',97,'bind:closeDetail',1,'class',2,'couponDisAmount',3,'data-event-opts',4,'data-ref',5,'deductionAmount',6,'deliveryFee',7,'isSelectUsePoint',8,'policyName',9,'policyNum',10,'salePriceChangeMsgAar',11,'ticketAar',12,'totalTicketNum',13,'vueId',14],[],e,s,gg)
_(e6D,oTE)
var lUE=_mz(z,'uni-popup',['bind:__l',112,'bind:change',1,'class',2,'data-event-opts',3,'data-ref',4,'type',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var aVE=_mz(z,'choose-drawout-type',['bind:__l',120,'bind:changeDrawoutType',1,'bind:closeDrawoutType',2,'class',3,'data-event-opts',4,'selectedDrawoutType',5,'typeItems',6,'vueId',7],[],e,s,gg)
_(lUE,aVE)
_(e6D,lUE)
var tWE=_mz(z,'order-no-pay',['bind:__l',128,'bind:hidePupop',1,'class',2,'data-event-opts',3,'data-ref',4,'vueId',5],[],e,s,gg)
_(e6D,tWE)
var eXE=_mz(z,'select-coupon',['bind:__l',134,'bind:input',1,'bind:selectCoup',2,'class',3,'data-event-opts',4,'data-ref',5,'value',6,'vueId',7],[],e,s,gg)
_(e6D,eXE)
var bYE=_mz(z,'uni-popup',['bind:__l',142,'bind:change',1,'class',2,'data-event-opts',3,'data-ref',4,'type',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var oZE=_mz(z,'order-confirm-exit',['bind:__l',150,'bind:orderExitClose',1,'bind:orderExitConfirm',2,'class',3,'data-event-opts',4,'vueId',5],[],e,s,gg)
_(bYE,oZE)
_(e6D,bYE)
var x1E=_mz(z,'set-point-offset',['allPoint',156,'bind:__l',1,'bind:saveOffset',2,'class',3,'data-event-opts',4,'data-ref',5,'deductionPoint',6,'deductionText',7,'vueId',8],[],e,s,gg)
_(e6D,x1E)
var o2E=_mz(z,'uni-popup',['bind:__l',165,'bind:change',1,'class',2,'data-event-opts',3,'data-ref',4,'maskClick',5,'type',6,'vueId',7,'vueSlots',8],[],e,s,gg)
_(e6D,o2E)
var f3E=_mz(z,'rich-notes',['bind:__l',174,'bind:closeNotes',1,'class',2,'data-event-opts',3,'data-ref',4,'isShowClose',5,'maxHeight',6,'purchaseNotesUrl',7,'titleIntroduce',8,'vueId',9],[],e,s,gg)
_(e6D,f3E)
_(l3D,e6D)
var c4E=_mz(z,'pup-limit',['bind:__l',184,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(l3D,c4E)
var h5E=_mz(z,'verify-code-popup',['bind:__l',188,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(l3D,h5E)
a4D.wxXCkey=1
a4D.wxXCkey=3
_(r,l3D)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2_XC_1";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx2_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/choosedrawouttype/choosedrawouttype.wxml'] = [$gwx2_XC_1, './pages_game/components/choosedrawouttype/choosedrawouttype.wxml'];else __wxAppCode__['pages_game/components/choosedrawouttype/choosedrawouttype.wxml'] = $gwx2_XC_1( './pages_game/components/choosedrawouttype/choosedrawouttype.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/pricedetailold/pricedetail.wxml'] = [$gwx2_XC_1, './pages_game/components/pricedetailold/pricedetail.wxml'];else __wxAppCode__['pages_game/components/pricedetailold/pricedetail.wxml'] = $gwx2_XC_1( './pages_game/components/pricedetailold/pricedetail.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/selectCoupon/selectCoupon.wxml'] = [$gwx2_XC_1, './pages_game/components/selectCoupon/selectCoupon.wxml'];else __wxAppCode__['pages_game/components/selectCoupon/selectCoupon.wxml'] = $gwx2_XC_1( './pages_game/components/selectCoupon/selectCoupon.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/setPointOffset/setPointOffset.wxml'] = [$gwx2_XC_1, './pages_game/components/setPointOffset/setPointOffset.wxml'];else __wxAppCode__['pages_game/components/setPointOffset/setPointOffset.wxml'] = $gwx2_XC_1( './pages_game/components/setPointOffset/setPointOffset.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/ticketpurchaser/ticketpurchaser.wxml'] = [$gwx2_XC_1, './pages_game/components/ticketpurchaser/ticketpurchaser.wxml'];else __wxAppCode__['pages_game/components/ticketpurchaser/ticketpurchaser.wxml'] = $gwx2_XC_1( './pages_game/components/ticketpurchaser/ticketpurchaser.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/ticketpurchaserTp/ticketpurchaserTp.wxml'] = [$gwx2_XC_1, './pages_game/components/ticketpurchaserTp/ticketpurchaserTp.wxml'];else __wxAppCode__['pages_game/components/ticketpurchaserTp/ticketpurchaserTp.wxml'] = $gwx2_XC_1( './pages_game/components/ticketpurchaserTp/ticketpurchaserTp.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/gameevent/eventpay.wxml'] = [$gwx2_XC_1, './pages_game/gameevent/eventpay.wxml'];else __wxAppCode__['pages_game/gameevent/eventpay.wxml'] = $gwx2_XC_1( './pages_game/gameevent/eventpay.wxml' );
	;__wxRoute = "pages_game/components/choosedrawouttype/choosedrawouttype";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/choosedrawouttype/choosedrawouttype.js";define("pages_game/components/choosedrawouttype/choosedrawouttype.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/choosedrawouttype/choosedrawouttype"],{"0b09":function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return c})),o.d(t,"a",(function(){}));var n=function(){var e=this,t=(e.$createElement,e._self._c,e.$previewImageAddress("close_black.png")),o=e.__map(e.typeItems,(function(t,o){return{$orig:e.__get_orig(t),m1:t.checked?e.$previewImageAddress("address_default.png"):null,m2:t.checked?null:e.$previewImageAddress("checbox_default.png")}}));e.$mp.data=Object.assign({},{$root:{m0:t,l0:o}})},c=[]},"2a0e":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"cart",props:{typeItems:{type:Array,default:function(){return[]}},selectedDrawoutType:{type:Object}},data:function(){return{currentps:0}},mounted:function(){},methods:{close:function(){this.$emit("closeDrawoutType")},selectItem:function(e){for(var t=0;t<this.typeItems.length;t++)this.typeItems[t].checked=t==e;this.$emit("changeDrawoutType",this.typeItems[e])}}};t.default=n},"3e27":function(e,t,o){"use strict";var n=o("b9c6");o.n(n).a},"4ad8":function(e,t,o){"use strict";o.r(t);var n=o("0b09"),c=o("7188");for(var a in c)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return c[e]}))}(a);o("3e27");var r=o("828b"),s=Object(r.a)(c.default,n.b,n.c,!1,null,"292dc734",null,!1,n.a,void 0);t.default=s.exports},7188:function(e,t,o){"use strict";o.r(t);var n=o("2a0e"),c=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t.default=c.a},b9c6:function(e,t,o){}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/choosedrawouttype/choosedrawouttype-create-component",{"pages_game/components/choosedrawouttype/choosedrawouttype-create-component":function(e,t,o){o("df3c").createComponent(o("4ad8"))}},[["pages_game/components/choosedrawouttype/choosedrawouttype-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/choosedrawouttype/choosedrawouttype.js'});require("pages_game/components/choosedrawouttype/choosedrawouttype.js");;__wxRoute = "pages_game/components/pricedetailold/pricedetail";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/pricedetailold/pricedetail.js";define("pages_game/components/pricedetailold/pricedetail.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/pricedetailold/pricedetail"],{"42ef":function(e,t,n){"use strict";n.r(t);var o=n("573f"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t.default=a.a},"573f":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"cart",props:{ticketAar:{type:Array,default:[]},salePriceChangeMsgAar:{type:Array,default:[]},totalTicketNum:{type:Number,default:0},deliveryFee:{type:Number,default:0},isSelectUsePoint:{type:Boolean,default:!1},deductionAmount:{type:Number,default:0},policyName:{type:String,default:""},policyNum:{type:Number,default:0},couponDisAmount:{type:Number,default:0}},data:function(){return{couponTotalAmount:0}},methods:{openPop:function(e){this.couponTotalAmount=e,this.$refs.popup.open()},closePop:function(){this.$emit("closeDetail"),this.$refs.popup.close()}}};t.default=o},"5d94":function(e,t,n){"use strict";var o=n("89be");n.n(o).a},"89be":function(e,t,n){},"8d00":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var o={uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,"5b0a"))}},a=function(){var e=this,t=(e.$createElement,e._self._c,e.$previewImageAddress("close.png")),n=e.__map(e.ticketAar,(function(t,n){return{$orig:e.__get_orig(t),f0:e._f("numFilterUp")(t.originalPrice*t.ticketNum)}})),o=e.__map(e.salePriceChangeMsgAar,(function(t,n){return{$orig:e.__get_orig(t),f1:e._f("numFilterUp")(t.changePrice)}}));e.$mp.data=Object.assign({},{$root:{m0:t,l0:n,l1:o}})},i=[]},e694:function(e,t,n){"use strict";n.r(t);var o=n("8d00"),a=n("42ef");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("5d94");var u=n("828b"),r=Object(u.a)(a.default,o.b,o.c,!1,null,"a5fc6274",null,!1,o.a,void 0);t.default=r.exports}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/pricedetailold/pricedetail-create-component",{"pages_game/components/pricedetailold/pricedetail-create-component":function(e,t,n){n("df3c").createComponent(n("e694"))}},[["pages_game/components/pricedetailold/pricedetail-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/pricedetailold/pricedetail.js'});require("pages_game/components/pricedetailold/pricedetail.js");;__wxRoute = "pages_game/components/selectCoupon/selectCoupon";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/selectCoupon/selectCoupon.js";define("pages_game/components/selectCoupon/selectCoupon.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/selectCoupon/selectCoupon"],{"0beb":function(e,t,n){"use strict";n.r(t);var o=n("9145"),u=n.n(o);for(var s in o)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(s);t.default=u.a},2377:function(e,t,n){"use strict";var o=n("9a68");n.n(o).a},"4c69":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o}));var o={uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,"5b0a"))}},u=function(){var e=this,t=(e.$createElement,e._self._c,e.$previewImageAddress("close_black.png")),n=e.__map(e.value,(function(t,n){return{$orig:e.__get_orig(t),m1:0==t.status?e.discountMoney(t):null,m2:0==t.status?e.discountText(t):null,m3:0==t.status?e.$previewImageAddress("warn_gray2.png"):null,m4:0==t.status&&t.isSelect?e.$previewImageAddress("address_default.png"):null,m5:0!=t.status||t.isSelect?null:e.$previewImageAddress("checbox_default_writebt.png")}})),o=e.$previewImageAddress("warn_gray2.png");e.$mp.data=Object.assign({},{$root:{m0:t,l0:n,m6:o}})},s=[]},9145:function(e,t,n){"use strict";var o=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n("af34")),s=n("6fe6"),c=n("60ca"),a=n("06d0"),i={name:"cart",props:{value:{type:Array,required:!0},pageHeight:{typeof:Number,default:720},evetProId:{typeof:String,default:""}},data:function(){return{statusBg:{0:s.ossUrl+"app/icon/couponbg_nouse.png"},statusDict:{0:"满减券",1:"满折券",2:"代金券"},btnDict:{0:"去使用",1:"已使用",2:"已作废"}}},methods:{openPop:function(){this.$refs.popup.open()},closePop:function(){this.$refs.popup.close()},selectCoup:function(e){console.log("selectCoup",e);var t=(0,u.default)(this.value);t[e].isSelect?t[e].isSelect=!1:(t.forEach((function(e){e.isSelect=!1})),t[e].isSelect=!t[e].isSelect),this.$emit("input",t)},sure:function(){var e=this.value.map((function(e,t){return e.isSelect?t:-1})).filter((function(e){return-1!==e}));e.length>0?(console.log("selectedIndexes",e),console.log("selectedIndexes",this.value[e[0]].id),this.$emit("selectCoup",this.value[e[0]])):this.$emit("selectCoup")},initCoupon:function(){var e=this;(0,c.getMemberCoupon)({pageNum:1,pageSize:20,status:0}).then((function(t){e.itemList=[],t.data.rows&&t.data.rows.length>0&&(e.itemList=[].concat((0,u.default)(e.itemList),(0,u.default)(t.data.rows)),console.log("itemList",e.itemList))})).catch((function(e){console.log(e)}))},discountMoney:function(e){return(0,a.getDiscountMoney)(e)},discountText:function(e){return(0,a.getDiscountText)(e)}}};t.default=i},"9a68":function(e,t,n){},c0e9:function(e,t,n){"use strict";n.r(t);var o=n("4c69"),u=n("0beb");for(var s in u)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(s);n("2377");var c=n("828b"),a=Object(c.a)(u.default,o.b,o.c,!1,null,"4f4ba692",null,!1,o.a,void 0);t.default=a.exports}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/selectCoupon/selectCoupon-create-component",{"pages_game/components/selectCoupon/selectCoupon-create-component":function(e,t,n){n("df3c").createComponent(n("c0e9"))}},[["pages_game/components/selectCoupon/selectCoupon-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/selectCoupon/selectCoupon.js'});require("pages_game/components/selectCoupon/selectCoupon.js");;__wxRoute = "pages_game/components/setPointOffset/setPointOffset";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/setPointOffset/setPointOffset.js";define("pages_game/components/setPointOffset/setPointOffset.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/setPointOffset/setPointOffset"],{"0cf7":function(e,t,n){"use strict";n.r(t);var o=n("c5e9"),s=n("22fe");for(var c in s)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(c);n("5575");var i=n("828b"),u=Object(i.a)(s.default,o.b,o.c,!1,null,"2034b766",null,!1,o.a,void 0);t.default=u.exports},"22fe":function(e,t,n){"use strict";n.r(t);var o=n("3c4f"),s=n.n(o);for(var c in o)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t.default=s.a},"3c4f":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("8e36");var o={name:"cart",props:{allPoint:{type:Number,default:0},deductionText:{type:String,default:""},deductionPoint:{type:Number,default:0}},data:function(){return{selectUse:!1}},methods:{open:function(){this.$refs.popup.open()},close:function(){this.$refs.popup.close()},handleSelect:function(e){this.selectUse=e,console.log("this.selectUse",this.selectUse)},save:function(){this.$emit("saveOffset",this.selectUse),this.$refs.popup.close()}}};t.default=o},5575:function(e,t,n){"use strict";var o=n("81ee");n.n(o).a},"81ee":function(e,t,n){},c5e9:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o}));var o={uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,"5b0a"))}},s=function(){this.$createElement;var e=(this._self._c,this.$previewImageAddress("close_black.png"));this.$mp.data=Object.assign({},{$root:{m0:e}})},c=[]}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/setPointOffset/setPointOffset-create-component",{"pages_game/components/setPointOffset/setPointOffset-create-component":function(e,t,n){n("df3c").createComponent(n("0cf7"))}},[["pages_game/components/setPointOffset/setPointOffset-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/setPointOffset/setPointOffset.js'});require("pages_game/components/setPointOffset/setPointOffset.js");;__wxRoute = "pages_game/components/ticketpurchaser/ticketpurchaser";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/ticketpurchaser/ticketpurchaser.js";define("pages_game/components/ticketpurchaser/ticketpurchaser.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/ticketpurchaser/ticketpurchaser"],{"0f87":function(e,t,r){"use strict";function n(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{groupShow:!0}},props:{realNameType:{type:Number,default:0},listticket:{type:Array,default:function(){return[]}}},watch:{realNameType:{handler:function(e,t){this.changeListener()},deep:!0,immediate:!0},listticket:{handler:function(e,t){this.changeListener()},deep:!0,immediate:!0}},mounted:function(){},methods:{goPurchaserDetail:function(e){console.log("我是子组件"),this.$emit("goPurchaserDetail",e)},changeListener:function(){var e,t=!0,r=n(this.listticket);try{for(r.s();!(e=r.n()).done;)if("无座位"!=e.value.seatSnapshot){t=!1;break}}catch(e){r.e(e)}finally{r.f()}this.groupShow=t&&3!=this.realNameType}}};t.default=o},"565a":function(e,t,r){"use strict";r.r(t);var n=r("7ec4"),a=r("d6f1");for(var o in a)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(o);r("5fbf");var i=r("828b"),c=Object(i.a)(a.default,n.b,n.c,!1,null,"92b2fa28",null,!1,n.a,void 0);t.default=c.exports},"5fbf":function(e,t,r){"use strict";var n=r("f8f6");r.n(n).a},"7ec4":function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){}));var n=function(){var e=this,t=(e.$createElement,e._self._c,e.groupShow?e.listticket.length:null),r=e.groupShow?null:e.__map(e.listticket,(function(t,r){return{$orig:e.__get_orig(t),f0:3==e.realNameType&&t.registerName?e._f("cardIdToString")(t.idcardType):null,m0:3==e.realNameType&&t.registerName?e.$previewImageAddress("arrowright.png"):null,m1:3!=e.realNameType||t.registerName?null:e.$previewImageAddress("arrowright.png")}}));e.$mp.data=Object.assign({},{$root:{g0:t,l0:r}})},a=[]},d6f1:function(e,t,r){"use strict";r.r(t);var n=r("0f87"),a=r.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t.default=a.a},f8f6:function(e,t,r){}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/ticketpurchaser/ticketpurchaser-create-component",{"pages_game/components/ticketpurchaser/ticketpurchaser-create-component":function(e,t,r){r("df3c").createComponent(r("565a"))}},[["pages_game/components/ticketpurchaser/ticketpurchaser-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/ticketpurchaser/ticketpurchaser.js'});require("pages_game/components/ticketpurchaser/ticketpurchaser.js");;__wxRoute = "pages_game/components/ticketpurchaserTp/ticketpurchaserTp";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/ticketpurchaserTp/ticketpurchaserTp.js";define("pages_game/components/ticketpurchaserTp/ticketpurchaserTp.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/ticketpurchaserTp/ticketpurchaserTp"],{1739:function(e,t,r){},"1f3e":function(e,t,r){"use strict";function n(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{groupShow:!0}},props:{realNameType:{type:Number,default:0},listticket:{type:Array,default:function(){return[]}}},watch:{realNameType:{handler:function(e,t){this.changeListener()},deep:!0,immediate:!0},listticket:{handler:function(e,t){this.changeListener()},deep:!0,immediate:!0}},mounted:function(){},methods:{goPurchaserDetail:function(e,t){console.log("我是子组件"),this.$emit("goPurchaserDetailTp",e,t)},changeListener:function(){var e,t=!0,r=n(this.listticket);try{for(r.s();!(e=r.n()).done;)if("无座位"!=e.value.seatSnapshot){t=!1;break}}catch(e){r.e(e)}finally{r.f()}this.groupShow=t&&3!=this.realNameType}}};t.default=o},6332:function(e,t,r){"use strict";r.r(t);var n=r("1f3e"),a=r.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t.default=a.a},"7f71":function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){}));var n=function(){var e=this,t=(e.$createElement,e._self._c,e.__map(e.listticket,(function(t,r){return{$orig:e.__get_orig(t),l0:e.groupShow?null:e.__map(t.child,(function(r,n){return{$orig:e.__get_orig(r),f0:3==e.realNameType&&r.registerName?e._f("cardIdToString")(r.idcardType):null,m0:3==e.realNameType&&r.registerName?e.$previewImageAddress("arrowright.png"):null,m1:3!=e.realNameType||r.registerName?null:e.$previewImageAddress("arrowright.png"),g0:t.child.length}}))}})));e.$mp.data=Object.assign({},{$root:{l1:t}})},a=[]},d2d8:function(e,t,r){"use strict";r.r(t);var n=r("7f71"),a=r("6332");for(var o in a)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(o);r("e414");var i=r("828b"),c=Object(i.a)(a.default,n.b,n.c,!1,null,"3cce2ea3",null,!1,n.a,void 0);t.default=c.exports},e414:function(e,t,r){"use strict";var n=r("1739");r.n(n).a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/ticketpurchaserTp/ticketpurchaserTp-create-component",{"pages_game/components/ticketpurchaserTp/ticketpurchaserTp-create-component":function(e,t,r){r("df3c").createComponent(r("d2d8"))}},[["pages_game/components/ticketpurchaserTp/ticketpurchaserTp-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/ticketpurchaserTp/ticketpurchaserTp.js'});require("pages_game/components/ticketpurchaserTp/ticketpurchaserTp.js");;__wxRoute = "pages_game/gameevent/eventpay";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/gameevent/eventpay.js";define("pages_game/gameevent/eventpay.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/gameevent/eventpay"],{"0f50":function(e,t,i){"use strict";var o=i("2d66");i.n(o).a},"2d66":function(e,t,i){},"2e54":function(e,t,i){"use strict";(function(e){var o=i("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i("7eb4")),s=o(i("af34")),r=o(i("ee10")),a=o(i("7ca3")),c=i("e2af"),l=i("4380"),u=i("028b"),h=i("5a5f"),d=i("d9e3"),p=i("8e36"),m=i("00a9"),f=i("b5c2"),g=i("54f8"),y=i("60ca"),P=i("6fe6"),T=i("52d4"),k=i("06d0"),v=i("f0e6");function b(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}i("9341");var A={components:{Ticketpurchaser:function(){i.e("pages_game/components/ticketpurchaser/ticketpurchaser").then(function(){return resolve(i("565a"))}.bind(null,i)).catch(i.oe)},TicketpurchaserTp:function(){i.e("pages_game/components/ticketpurchaserTp/ticketpurchaserTp").then(function(){return resolve(i("d2d8"))}.bind(null,i)).catch(i.oe)},Choosepurchaser:function(){i.e("pages_game/components/choosepurchaser/choosepurchaser").then(function(){return resolve(i("7e7d"))}.bind(null,i)).catch(i.oe)},Pricedetail:function(){i.e("pages_game/components/pricedetailold/pricedetail").then(function(){return resolve(i("e694"))}.bind(null,i)).catch(i.oe)},ChooseDrawoutType:function(){i.e("pages_game/components/choosedrawouttype/choosedrawouttype").then(function(){return resolve(i("4ad8"))}.bind(null,i)).catch(i.oe)},OrderNoPay:function(){i.e("components/pupwarn/ordernopay").then(function(){return resolve(i("40bd"))}.bind(null,i)).catch(i.oe)},OrderConfirmExit:function(){i.e("components/pupwarn/orderconfirmexit").then(function(){return resolve(i("9017"))}.bind(null,i)).catch(i.oe)},SetPointOffset:function(){i.e("pages_game/components/setPointOffset/setPointOffset").then(function(){return resolve(i("0cf7"))}.bind(null,i)).catch(i.oe)},RichNotes:function(){i.e("pages_game/components/richNotes/richNotes").then(function(){return resolve(i("e1db"))}.bind(null,i)).catch(i.oe)},SelectCoupon:function(){i.e("pages_game/components/selectCoupon/selectCoupon").then(function(){return resolve(i("c0e9"))}.bind(null,i)).catch(i.oe)}},data:function(){var e;return{itemdata:{},ticketPosition:0,ticketPositionTpParent:0,ticketPositionTpChild:0,listticketBind:[],listticketBindTp:[],purchaserAar:[],purchaserPos:-1,currentps:-1,selectDrawtype:{},selectDrawtypeRadio:!1,sendList:[],paymentType:0,supplierId:0,zeroPay:{id:4,checked:!0,name:"0元购",icon:"payway-zero.png"},addressAar:[],ticketshop:[],zzshdizhi:(e={consigneeName:"",phone:"",address:"",deliveryFee:15},(0,a.default)(e,"address",""),(0,a.default)(e,"consigneeAddrId",""),(0,a.default)(e,"consigneeAddrProvince",""),(0,a.default)(e,"consigneeAddrCity",""),(0,a.default)(e,"consigneeAddrCounty",""),e),purchase:{memberInfoName:"",memberInfoPhone:"",memberInfoCompleteNo:"",ticketOutletId:""},totalAmount:0,totalAmountVisible:0,totalAmountOutDis:0,couponAmount:0,couponAmountPlugin:0,couponAmountVisible:0,lockkey:"",freePurchase:!1,orderId:"",formData:[],salePriceChangeMsgAar:[],totalTicketNum:0,realName:"",realNo:"",shaddressPos:0,memberAddressId:"",deliveryFee:0,deliveryTemplateId:"",deliveryTemplateTitle:"",deliveryScope:"",noClick:!0,showId:"",buyProType:!1,showPopup:!1,showTime:"",showName:"",isToMpPay:!1,imageUrl:"",name:"",venueAddress:"",realNameType:"",printTicketTypesMap:[],eventId:"",performanceSource:"",idCardTypesSaleable:null,idcardTypesLimitMsg:null,hasEntry:0,signUpForm:[],entryNote:"",isWriteForm:!1,isSelectUsePoint:!1,totalPoints:0,exchengeRatio:0,minAvailablePoint:0,maxPointDeductionPersent:0,pointSwitchOn:!1,deductionText:"",deductionMoneyText:"",deductionTextSelect:"",deductionPoint:0,deductionAmount:0,pointExchangeRmbRatePoint:0,pointExchangeRmbRateRmb:0,platform:"WX",plugInType:null,rightPayText:"立即支付",rightPayCountTime:-1,rightPayTimer:null,objWithKey:{child:[],name:"",price:0},confirmGoNextContent:"",confirmGoNextBtn:"确认",confirmGoNextRandom:0,confirmGoNextTimer:null,douyinProductId:null,policyName:"",buyProtocolOn:!1,buyProtocol:"",buyProtocolContext:"",popupMaxHeight:750,isSelectedRead:!1,couponList:[],coupStr:"",couponDisAmount:0,coupDiscountObj:null,discountKey:""}},onLoad:function(t){console.log("eventPay",t);var i={};if(this.listticketBind=[],t.seatData){if(console.log("项目为选座"),(i=JSON.parse(t.seatData)).showSeats.length){this.totalTicketNum=i.showSeats.length;for(var o=0;o<i.showSeats.length;o++)this.listticketBind.push({fareLevel:i.showSeats[o].fareLevel,price:i.showSeats[o].salePrice,originalPrice:i.showSeats[o].price,registerName:"",registerNo:"",idcardType:"",seatId:i.showSeats[o].id,realnameRelationId:"",verboseName:i.showSeats[o].fareLevelVerboseName,seatSnapshot:i.showSeats[o].snapshot,suitCode:i.showSeats[o].suitCode,ticketNum:1})}}else console.log("非选座+老版本选座跳转逻辑"),i=t,this.listticketBind=JSON.parse(t.cheapesData),this.totalTicketNum=parseFloat(t.totalTicketNum)||0,this.buyProType=t.buyProType;console.log("options",i),console.log("this.listticketBind",this.listticketBind),i&&(this.imageUrl=i.imageUrl,this.name=i.name,this.venueAddress=i.venueAddress,this.realNameType=i.realNameType,this.eventId=i.id,i.performanceSource&&"undefined"!=i.performanceSource&&"null"!=i.performanceSource&&(this.performanceSource=JSON.parse(i.performanceSource)),this.lockkey=i.key,this.policyName=i.policyName,this.showId=i.showId,this.showTime=i.showTime,this.showName=i.showName,this.totalAmount=i.totalAmount,this.totalAmountVisible=i.totalAmount,this.totalAmountOutDis=i.totalAmount,this.couponAmount=parseFloat(i.deltaPrice).toFixed(2),this.couponAmountVisible=this.couponAmount,this.purchase.ticketOutletId=i.ticketOutletId,this.plugInType=i.plugInType,this.douyinProductId=i.douyinProductId,this.buyProtocolOn=(0,m.toBoolean)(i.buyProtocolOn),this.buyProtocol=i.buyProtocol,this.buyProtocolOn&&this.buyProtocol&&this.loadHtmlText(1,this.buyProtocol)),this.queryShowDetailInfo(),this.initAuthInfo(),this.sortPurchaserList(),this.purchase.memberInfoPhone=e.getStorageSync("authphone"),1==this.buyProType&&this.setTimer();var n=e.getSystemInfoSync();n&&(console.log("uni.getSystemInfoSync()",n.platform),console.log("uni.getSystemInfoSync()",n.windowHeight),this.popupMaxHeight=.75*n.screenHeight/n.windowWidth*750),e.$on("refreshData",this.initBuyerList),e.$on("refreshAddrData",this.initAddressList)},onShow:function(){},onUnload:function(){this.rightPayTimer&&clearInterval(this.rightPayTimer),this.confirmGoNextTimer&&clearInterval(this.confirmGoNextTimer),e.$off("refreshData",this.initBuyerList),e.$off("refreshAddrData",this.initAddressList)},methods:{sortPurchaserList:function(){if(this.listticketBind){this.mergeData();var e=this.listticketBind.reduce((function(e,t){if(t.suitCode){e[t.suitCode]||(e[t.suitCode]=[]);var i=JSON.parse(JSON.stringify(t));return e[t.suitCode].push(i),e}}),{});if(console.log("grouped",e),e)for(var t=Object.values(e),i=0;i<t.length;i++){var o=JSON.parse(JSON.stringify(this.objWithKey));this.listticketBindTp.push(o),this.listticketBindTp[i].child=t[i],this.listticketBindTp[i].name=this.policyName;for(var n=0;n<t[i].length;n++)this.listticketBindTp[i].price?this.listticketBindTp[i].price=(0,p.formatCalculateNum)(this.listticketBindTp[i].price,t[i][n].price,"+",2):this.listticketBindTp[i].price=t[i][n].price}console.log("this.listticketBindTp",this.listticketBindTp)}},mergeData:function(e){this.formData=[],this.formData=this.listticketBind.reduce((function(e,t){var i=e.find((function(e){return e.originalPrice===t.originalPrice}));return i?i.ticketNum+=t.ticketNum:e.push(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?b(Object(i),!0).forEach((function(t){(0,a.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},t)),e}),[]),console.log("this.formData22222===",this.formData)},queryShowDetailInfo:function(){var t=this;return(0,r.default)(n.default.mark((function i(){return n.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,(0,l.getOssJsonFile)({url:(0,v.getShowOssJsonUrl)(t.showId)}).then((function(i){e.hideLoading(),null!=i&&i.data?t.initShowInfo(i.data):t.queryShowDetail()})).catch((function(i){e.hideLoading(),t.queryShowDetail()}));case 3:i.next=8;break;case 5:i.prev=5,i.t0=i.catch(0),console.log("error",i.t0);case 8:return i.prev=8,i.finish(8);case 10:case"end":return i.stop()}}),i,null,[[0,5,8,10]])})))()},queryShowDetail:function(){var e=this;(0,l.eventShowDetail)({id:this.showId}).then((function(t){null!=t&&t.data&&e.initShowInfo(t.data)})).catch((function(e){console.log("console",e)}))},initShowInfo:function(e){e.performanceId&&(this.eventId=e.performanceId),this.sendList=[];var t=JSON.parse(e.printTicketTypesMap);console.log("printTicketTypesMap",t);for(var i=0;i<t.length;i++){var o,n,s,r=void 0,a=void 0,c=void 0,l=void 0;o=t[i].printTicketTypeValue,n=t[i].printTicketTypeCode,r=t[i].printTicketTypeRemark||"",0==t[i].printTicketTypeCode?(r=t[i].printTicketTypeRemark||"手机持票，快捷入场",a="psdz.png",c=2,l=1):2==t[i].printTicketTypeCode?(r=t[i].printTicketTypeRemark||"选择你最近的线下取票机取票",a="pszq.png",c=1,l=4):1==t[i].printTicketTypeCode?(r=t[i].printTicketTypeRemark||"快递送达，费用自付",a="pszz.png",c=3,l=2):3==t[i].printTicketTypeCode?(r=t[i].printTicketTypeRemark||"无需门票，直接身份证入场",a="pssfzp.png",c=2,l=3):6==t[i].printTicketTypeCode?(r=t[i].printTicketTypeRemark||"需持实体年卡入场",a="pszz.png",c=3,l=5):8==t[i].printTicketTypeCode&&(r=t[i].printTicketTypeRemark||"出示身份证入场，含快递费，费用自付",a="pssfzp.png",c=3,l=6),s=t[i].printTicketTypeCode,this.sendList.push({printTicketTypeCode:s,checked:!1,desc:r,icon:a,name:o,drawOutType:n,pickUpType:c,sortIndex:l}),this.sendList.sort((function(e,t){return e.sortIndex-t.sortIndex}))}this.sendList.length>0&&(this.selectDrawtype=this.sendList[0],3==this.selectDrawtype.pickUpType?this.initAddressList(!1):2==this.selectDrawtype.printTicketTypeCode&&this.getTicketPlace(!1)),console.log("this.sendList",this.sendList),this.idCardTypesSaleable=e.idCardTypesSaleable,this.idcardTypesLimitMsg=e.idCardTypesSaleableErrorMessage,this.entryNote=e.entryNote,this.hasEntry=e.hasEntry;var u=e.entryList;if(u&&u.length>0){this.signUpForm=[];for(var h=0;h<this.totalTicketNum;h++){var d=[];for(i=0;i<u.length;i++)d.push({activityInfoEntryId:u[i].id,columnName:u[i].activitySettingName,columnType:u[i].activitySettingType,columnValue:0==h?u[i].columnValue:"",columnFlag:u[i].columnFlag,isRequired:u[i].isRequired,typeOptions:u[i].typeOptions,timeRules:u[i].timeRules,selectValue:-1,remark:u[i].remark,imgExample:u[i].imgExample});this.signUpForm.push({pageNum:h+1,memberRequestList:d})}if(this.signUpForm.length>0&&3!=this.realNameType)for(var p=0;p<this.signUpForm[0].memberRequestList.length;p++)"name"==this.signUpForm[0].memberRequestList[p].columnFlag?this.signUpForm[0].memberRequestList[p].columnValue=this.purchase.memberInfoName:"phone"==this.signUpForm[0].memberRequestList[p].columnFlag?this.signUpForm[0].memberRequestList[p].columnValue=this.purchase.memberInfoPhone:"certNo"==this.signUpForm[0].memberRequestList[p].columnFlag&&(this.signUpForm[0].memberRequestList[p].columnValue=this.purchase.memberInfoCompleteNo)}this.pointSwitchOn=e.pointSwitchOn,this.minAvailablePoint=e.minAvailablePoint,this.maxPointDeductionPersent=e.maxPointDeductionPersent,this.pointSwitchOn&&(this.getSologanDetail(),this.getMemberShip())},initAuthInfo:function(){var t=this;(0,c.getAccountRegistration)({}).then((function(i){if(console.log(i),i.data){if(e.setStorageSync("isAuth",i.data.isRealAuth),e.setStorageSync("authName",i.data.name),t.realNameType,t.realName=i.data.name,t.realNo=i.data.certificatesNo,t.purchase.memberInfoName=i.data.name,t.purchase.memberInfoCompleteNo=i.data.completeCertificatesNo,t.signUpForm.length>0&&3!=t.realNameType)for(var o=0;o<t.signUpForm[0].memberRequestList.length;o++)"name"==t.signUpForm[0].memberRequestList[o].columnFlag?t.signUpForm[0].memberRequestList[o].columnValue=t.purchase.memberInfoName:"phone"==t.signUpForm[0].memberRequestList[o].columnFlag?t.signUpForm[0].memberRequestList[o].columnValue=t.purchase.memberInfoPhone:"certNo"==t.signUpForm[0].memberRequestList[o].columnFlag&&(t.signUpForm[0].memberRequestList[o].columnValue=t.purchase.memberInfoCompleteNo)}else e.setStorageSync("isAuth",!1)})).catch((function(e){console.log(e)}))},initBuyerList:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0];i&&e.showLoading(),(0,c.buyerList)({}).then((function(o){t.purchaserAar=[];for(var n=!0,s=0;s<o.data.length;s++)if(n&&o.data[s].certificatesNo==t.listticketBind[0].registerOutProNo&&(n=!1,t.listticketBind[0].realnameRelationId=o.data[s].id,t.listticketBind[0].registerNo=o.data[s].completeCertificatesNo,t.listticketBind[0].idcardType=o.data[s].certificatesType),t.idCardTypesSaleable&&t.idCardTypesSaleable.length>0){var r=!1;t.idCardTypesSaleable.map((function(e){e.idcardType==o.data[s].certificatesType&&(r=!0)})),t.creterPurchaserData(o.data[s],r)}else t.creterPurchaserData(o.data[s],!0);i&&(t.showPopup=!0,t.$refs.popupPurchaser.openPop(),e.hideLoading())})).catch((function(t){e.hideLoading()}))},creterPurchaserData:function(e,t){this.purchaserAar.push({checked:!1,name:e.name,certificatesType:e.certificatesType,certificatesNo:e.certificatesNo,completeCertificatesNo:e.completeCertificatesNo,completePhone:e.completePhone,id:e.id,isSelect:!1,position:0,ableSelect:t})},addPurchaser:function(){e.navigateTo({url:"/pages_mine/mine/purchaseradd?type=2"})},initAddressList:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0];i&&e.showLoading(),(0,h.addressList)({}).then((function(o){var n;t.addressAar=o.data,3==(null===(n=t.selectDrawtype)||void 0===n?void 0:n.pickUpType)?t.zzshdizhi.consigneeName||(t.shaddressPos=t.findDefaultAddress(t.addressAar),-1!==t.shaddressPos&&t.setSHaddressInfo(t.shaddressPos)):t.resetDeliveryInfo(),i&&e.hideLoading()})).catch((function(t){e.hideLoading()}))},findDefaultAddress:function(e){if((null==e?void 0:e.length)>0){for(var t=0;t<e.length;t++)if(e[t].isDefault)return t;return 0}return-1},resetDeliveryInfo:function(){this.memberAddressId="",this.deliveryFee=0,this.deliveryTemplateId="",this.deliveryTemplateTitle="",this.deliveryScope="",this.calculatePayNum()},selectSHAddress:function(){var e=this;return(0,r.default)(n.default.mark((function t(){var i,o;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=e.addressAar&&0!==(null===(i=e.addressAar)||void 0===i?void 0:i.length)){t.next=3;break}return t.next=3,e.initAddressList(!0);case 3:null!==(o=e.$refs.popupshaddress)&&void 0!==o&&o.open&&e.$refs.popupshaddress.open("bottom");case 4:case"end":return t.stop()}}),t)})))()},changeSHAddress:function(e){this.shaddressPos=e,this.setSHaddressInfo(e)},closeSHAddress:function(){this.$refs.popupshaddress.close()},sureAddress:function(e){this.shaddressPos=e,this.setSHaddressInfo(e),this.$refs.popupshaddress.close()},setSHaddressInfo:function(e){this.addressAar&&this.addressAar.length>0&&(this.zzshdizhi.consigneeName=this.addressAar[e].consigneeName,this.zzshdizhi.phone=this.addressAar[e].phone,this.zzshdizhi.address=this.addressAar[e].address,this.zzshdizhi.consigneeAddrId=this.addressAar[e].id,this.zzshdizhi.consigneeAddrProvince=this.addressAar[e].province,this.zzshdizhi.consigneeAddrCity=this.addressAar[e].city,this.zzshdizhi.consigneeAddrCounty=this.addressAar[e].district,this.memberAddressId=this.addressAar[e].id,this.freightFun())},addAddress:function(){e.navigateTo({url:"/pages_game/gameevent/addaddress"})},editAddress:function(t){console.log("editAddress"+t),e.navigateTo({url:"/pages_game/gameevent/addaddress?itemdata=".concat(JSON.stringify(this.addressAar[t]))})},selectDefaultType:function(){this.selectDrawtype.checked=!0,this.selectDrawtypeRadio=!0},payRadioChange:function(e){console.log(e),this.paymentType=e.detail.value},getPaymentType:function(e){e&&(this.paymentType=e.paymentType,this.supplierId=e.supplierId)},openOrderDetail:function(){var e=(parseFloat(this.couponAmount)||0)+(parseFloat(this.couponAmountPlugin)||0);this.showPopup=!0,this.$refs.popupOrdDetail.openPop(e)},goPurchaserDetail:function(e){if(this.ticketPosition=e,0==this.purchaserAar.length)this.initBuyerList(!0);else{var t=this.listticketBind[e].realnameRelationId;console.log("添加持票人信息：",t+"------"+e);for(var i=0;i<this.purchaserAar.length;i++)t==this.purchaserAar[i].id?this.purchaserAar[i].isSelect=!0:this.purchaserAar[i].isSelect=!1;this.showPopup=!0,this.$refs.popupPurchaser.openPop()}},goPurchaserDetailTp:function(e,t){this.ticketPositionTpParent=e,this.ticketPositionTpChild=t;var i=this.listticketBindTp[e].child[t];if(i)for(var o=0;o<this.listticketBind.length;o++)i.seatId==this.listticketBind[o].seatId&&(this.ticketPosition=o,console.log("this.ticketPosition",this.ticketPosition));if(console.log("this.ticketPosition",this.ticketPosition),console.log("this.listticketBindTp",this.listticketBindTp),console.log("this.listticketBind",this.listticketBind),0==this.purchaserAar.length)this.initBuyerList(!0);else{var n=this.listticketBindTp[e].child[t].realnameRelationId;console.log("goPurchaserDetail",n+"------"+t);for(var s=0;s<this.purchaserAar.length;s++)n==this.purchaserAar[s].id?this.purchaserAar[s].isSelect=!0:this.purchaserAar[s].isSelect=!1;this.showPopup=!0,this.$refs.popupPurchaser.openPop()}},changePupop:function(e){this.showPopup=e.show},hidePupop:function(){this.showPopup=!1},orderExitClose:function(){this.$refs.orderExitWarn.close()},orderExitConfirm:function(){this.cancelPayFun(),this.orderExitClose()},showChangeDrawoutPop:function(){this.$refs.drawoutTypePop.open("bottom")},hideChangeDrawoutPop:function(){this.$refs.drawoutTypePop.close()},changeDrawoutType:function(e){this.selectDrawtype=e,this.selectDrawtype.checked=!0,this.selectDrawtypeRadio=!0;for(var t=0;t<this.sendList.length;t++)this.sendList[t].printTicketTypeCode==e.printTicketTypeCode?this.sendList[t].checked=!0:this.sendList[t].checked=!1;var i,o;console.log("pickUpType",this.selectDrawtype.pickUpType),3==this.selectDrawtype.pickUpType?(null===(i=this.addressAar)||void 0===i?void 0:i.length)>0?(this.shaddressPos=this.findDefaultAddress(this.addressAar),-1!==this.shaddressPos&&this.setSHaddressInfo(this.shaddressPos)):this.initAddressList(!1):this.resetDeliveryInfo(),2==this.selectDrawtype.printTicketTypeCode&&0==(null===(o=this.ticketshop)||void 0===o?void 0:o.length)&&this.getTicketPlace(!1),this.$refs.drawoutTypePop.close()},surePurchaser:function(e){console.log("res",e),this.purchaserAar=[],this.purchaserAar=e;for(var t=0;t<this.listticketBind.length;t++)for(var i=0;i<this.purchaserAar.length;i++)if(this.purchaserAar[i].isSelect&&this.purchaserAar[i].id==this.listticketBind[t].realnameRelationId){this.listticketBind[t].registerName="",this.listticketBind[t].registerNo="",this.listticketBind[t].idcardType="",this.listticketBind[t].registerOutProNo="",this.listticketBind[t].realnameRelationId="";break}if(this.listticketBindTp&&this.listticketBindTp.length>0)for(t=0;t<this.listticketBindTp.length;t++)for(var o=0;o<this.listticketBindTp[t].child.length;o++)for(i=0;i<this.purchaserAar.length;i++)if(this.purchaserAar[i].isSelect&&this.purchaserAar[i].id==this.listticketBindTp[t].child[o].realnameRelationId){this.listticketBindTp[t].child[o].registerName="",this.listticketBindTp[t].child[o].registerNo="",this.listticketBindTp[t].child[o].idcardType="",this.listticketBindTp[t].child[o].registerOutProNo="",this.listticketBindTp[t].child[o].realnameRelationId="";break}for(t=0;t<this.purchaserAar.length;t++)if(this.purchaserAar[t].isSelect&&(this.listticketBind[this.ticketPosition].registerName=this.purchaserAar[t].name,this.listticketBind[this.ticketPosition].idcardType=this.purchaserAar[t].certificatesType,this.listticketBind[this.ticketPosition].registerNo=this.purchaserAar[t].completeCertificatesNo,this.listticketBind[this.ticketPosition].registerOutProNo=this.purchaserAar[t].certificatesNo,this.listticketBind[this.ticketPosition].realnameRelationId=this.purchaserAar[t].id,this.listticketBindTp&&this.listticketBindTp.length>0&&(this.listticketBindTp[this.ticketPositionTpParent].child[this.ticketPositionTpChild].registerName=this.purchaserAar[t].name,this.listticketBindTp[this.ticketPositionTpParent].child[this.ticketPositionTpChild].idcardType=this.purchaserAar[t].certificatesType,this.listticketBindTp[this.ticketPositionTpParent].child[this.ticketPositionTpChild].registerNo=this.purchaserAar[t].completeCertificatesNo,this.listticketBindTp[this.ticketPositionTpParent].child[this.ticketPositionTpChild].registerOutProNo=this.purchaserAar[t].certificatesNo,this.listticketBindTp[this.ticketPositionTpParent].child[this.ticketPositionTpChild].realnameRelationId=this.purchaserAar[t].id),console.log("this.ticketPositionTpParent",this.ticketPositionTpParent),console.log("this.ticketPositionTpChild",this.ticketPositionTpChild),console.log("this.listticketBindTp",this.listticketBindTp),this.signUpForm&&this.signUpForm.length>0&&this.signUpForm.length>this.ticketPosition)){for(i=0;i<this.signUpForm[this.ticketPosition].memberRequestList.length;i++)"name"==this.signUpForm[this.ticketPosition].memberRequestList[i].columnFlag?this.purchaserAar[t].name&&(this.signUpForm[this.ticketPosition].memberRequestList[i].columnValue=this.purchaserAar[t].name):"phone"==this.signUpForm[this.ticketPosition].memberRequestList[i].columnFlag?(console.log("this.purchaserAar[i].completePhone",this.purchaserAar[t].completePhone),this.purchaserAar[t].completePhone&&(this.signUpForm[this.ticketPosition].memberRequestList[i].columnValue=this.purchaserAar[t].completePhone)):"certNo"==this.signUpForm[this.ticketPosition].memberRequestList[i].columnFlag&&this.purchaserAar[t].completeCertificatesNo&&(this.signUpForm[this.ticketPosition].memberRequestList[i].columnValue=this.purchaserAar[t].completeCertificatesNo);console.log("======",this.signUpForm[this.ticketPosition].memberRequestList)}this.hidePupop(),this.plugInType&&1==this.plugInType&&this.queryLockSeatPlugin(),console.log("this.listticketBind",this.listticketBind)},queryLockSeatPlugin:function(){var e=this;return(0,r.default)(n.default.mark((function t(){var i;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.lockSeatPlugin)({showId:e.showId,key:e.lockkey,seatList:e.listticketBind});case 3:i=t.sent,console.log(i),i&&i.data&&(e.lockkey=i.data.key,e.freePurchase=i.data.freePurchase,e.freePurchase&&(e.payList=[],e.payList.push(e.zeroPay)),i.data.showSeats&&(e.couponAmountPlugin=0,e.salePriceChangeMsgAar=[],i.data.showSeats.map((function(t){e.listticketBind.map((function(i){if(i.seatId==t.id&&i.realnameRelationId&&(i.price=t.salePrice,console.log("rspSeat.oldSalePrice",t.oldSalePrice),console.log("rspSeat.salePrice",t.salePrice),t.oldSalePrice)){var o=(0,p.formatCalculateNum)(t.oldSalePrice,t.salePrice,"-",2);e.couponAmountPlugin=e.couponAmountPlugin+o,console.log("this.couponAmountPlugin",e.couponAmountPlugin),e.salePriceChangeMsgAar.push({changeMsg:t.salePriceChangeMsg,ticketNum:1,changePrice:o})}}))})),e.calculatePayNum())),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("lockSeatPluginerror"+t.t0);case 11:return t.prev=11,t.finish(11);case 13:case"end":return t.stop()}}),t,null,[[0,8,11,13]])})))()},getTicketPlace:function(t){var i=this;t&&e.showLoading(),(0,f.getTicketCodePlaceList)(this.showId).then((function(o){i.ticketshop=o.data,t&&e.hideLoading()})).catch((function(t){e.hideLoading()}))},showQpd:function(){var e=this;return(0,r.default)(n.default.mark((function t(){var i,o;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=e.ticketshop&&0!==(null===(i=e.ticketshop)||void 0===i?void 0:i.length)){t.next=3;break}return t.next=3,e.getTicketPlace(!0);case 3:null!==(o=e.$refs.popupqpaddress)&&void 0!==o&&o.open&&e.$refs.popupqpaddress.open("bottom");case 4:case"end":return t.stop()}}),t)})))()},closeQPAddress:function(){this.$refs.popupqpaddress.close()},goPay:function(){var t=this;return(0,r.default)(n.default.mark((function i(){var o,s;return n.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(1!=t.buyProType||0!=t.rightPayCountTime){i.next=3;break}return e.showToast({title:"未及时支付，请返回再次购买",icon:"none"}),i.abrupt("return");case 3:if(console.log("this.listticketBind",t.listticketBind),3!=t.realNameType){i.next=13;break}o=0;case 6:if(!(o<t.listticketBind.length)){i.next=13;break}if(t.listticketBind[o].registerName){i.next=10;break}return e.showToast({title:"请选择实名持票人",icon:"none"}),i.abrupt("return");case 10:o++,i.next=6;break;case 13:if("{}"!=JSON.stringify(t.selectDrawtype)&&t.selectDrawtype.checked){i.next=16;break}return e.showToast({title:"请选择出票方式",icon:"none"}),i.abrupt("return");case 16:if(!t.orderId){i.next=19;break}return"TT"==t.platform?t.ttCreateorder():t.payOrder(),i.abrupt("return");case 19:if(!(1==t.hasEntry&&t.signUpForm&&t.signUpForm.length>0)){i.next=33;break}o=0;case 21:if(!(o<t.signUpForm.length)){i.next=33;break}s=0;case 23:if(!(s<t.signUpForm[o].memberRequestList.length)){i.next=30;break}if(1!=t.signUpForm[o].memberRequestList[s].isRequired||t.signUpForm[o].memberRequestList[s].columnValue){i.next=27;break}return e.showToast({title:"请填写报名信息",icon:"none"}),i.abrupt("return");case 27:s++,i.next=23;break;case 30:o++,i.next=21;break;case 33:t.buyProtocolOn?t.isSelectedRead?t.invokeConfirmNext():e.showToast({title:"请阅读并同意购买协议",icon:"none"}):t.showConfirmDialog();case 34:case"end":return i.stop()}}),i)})))()},showConfirmDialog:function(){var e=this;if(this.confirmGoNextContent="",3==this.realNameType)for(var t=0;t<this.listticketBind.length;t++)this.confirmGoNextContent=this.confirmGoNextContent+this.listticketBind[t].registerName+"　"+this.listticketBind[t].registerNo+"\n";else this.confirmGoNextContent=this.purchase.memberInfoName+"　"+this.purchase.memberInfoCompleteNo;this.confirmGoNextRandom=Math.floor(3*Math.random()+3),this.confirmGoNextBtn="确认("+this.confirmGoNextRandom+"s)",this.$refs.confirmGoNextPop.open("center"),this.confirmGoNextTimer=setInterval((function(){e.confirmGoNextRandom=Math.max(0,e.confirmGoNextRandom-1),console.log("倒计时"+e.confirmGoNextRandom),e.confirmGoNextRandom<=0?(e.confirmGoNextBtn="确认",console.log("倒计时结束"),clearInterval(e.confirmGoNextTimer)):e.confirmGoNextBtn="确认("+e.confirmGoNextRandom+"s)"}),1e3)},hideConfirmNextPop:function(){this.$refs.confirmGoNextPop.close(),clearInterval(this.confirmGoNextTimer)},invokeConfirmNext:function(){var t=this;return(0,r.default)(n.default.mark((function i(){var o;return n.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(0!=t.paymentType){i.next=3;break}return e.showToast({title:"请选择支付方式",icon:"none"}),i.abrupt("return");case 3:if(!(t.confirmGoNextRandom>0)){i.next=5;break}return i.abrupt("return");case 5:return i.next=7,(0,u.getUnclosedOrder)({});case 7:(o=i.sent).data.length>0?t.$refs.noPayWarn.openPup(o.data[0].businessType,o.data[0].id):t.createOrderFun(),console.log("=====",o),t.hideConfirmNextPop();case 11:case"end":return i.stop()}}),i)})))()},createOrderFun:function(){var t=this;if(this.orderId)"TT"==this.platform?this.ttCreateorder():this.payOrder();else if(this.lockkey){if((1==this.selectDrawtype.drawOutType||6==this.selectDrawtype.drawOutType||8==this.selectDrawtype.drawOutType)&&!this.deliveryTemplateId)return void e.showToast({title:"暂无对应快递模版信息",icon:"none"});var i=[];if(this.isSelectUsePoint){var o={discountType:"0",pointExchangeRmbRatePoint:this.pointExchangeRmbRatePoint,pointExchangeRmbRateRmb:100*this.pointExchangeRmbRateRmb,usePoint:Number(this.deductionPoint),discountAmount:Number((100*this.deductionAmount).toFixed(2))};i.push(o)}this.coupStr&&i.push(this.coupDiscountObj);var n=Date.parse(new Date);(0,u.createOrder)({singleLimit:"https://ctmstest.dasheng.top/"!=P.baseURL&&3==this.realNameType,bookedTime:(0,d.timestampToTime)(n),bookedFailTime:(0,d.timestampToTime)(n+9e5),thirdOrderNo:this.eventId,showId:this.showId,orderSource:1,drawOutType:this.selectDrawtype.drawOutType,pickUpType:this.selectDrawtype.pickUpType,businessType:1,createKey:this.lockkey,orderExtendModel:this.purchase,orderDetailModelList:this.listticketBind,memberAddressId:this.memberAddressId,deliveryTemplateId:this.deliveryTemplateId,deliveryTemplateTitle:this.deliveryTemplateTitle,deliveryScope:this.deliveryScope,deliveryFee:(100*this.deliveryFee).toFixed(2),performanceSource:this.performanceSource,entryList:this.signUpForm,orderDiscountList:i,activityVerifyStatus:1==this.hasEntry?0:3,payAmount:(100*this.totalAmountVisible).toFixed(2),discountKey:this.discountKey}).then((function(e){console.log(e),t.orderId=e.data,"TT"==t.platform?t.ttCreateorder():t.payOrder()})).catch((function(e){}))}else this.lockSeatFun()},ttCreateorder:function(){var t=this;e.showLoading({title:"请稍后",mask:!0});var i=[{skuId:this.showId,skuType:2,quantity:Number(this.totalTicketNum),price:100*this.listticketBind[0].price,goodsInfo:{goodsName:this.listticketBind[0].verboseName,goodsPhoto:this.imageUrl,goodsId:this.douyinProductId,goodsType:1,goodsLabels:["不可退"],dateRule:""}}],o={totalAmount:Number(100*this.totalAmount)},n={orderId:this.orderId};tt.createOrder({skuList:i,payment:o,callbackData:n,success:function(s){var r=s.orderId,a=s.outOrderNo;console.log("skuList",JSON.stringify(i)),console.log("payment",JSON.stringify(o)),console.log("callbackData",JSON.stringify(n)),console.log("success res",s),console.log("orderId",r,"outOrderNo",a),e.hideLoading(),t.payFinish()},fail:function(s){var r=s.orderId,a=s.outOrderNo,c=s.errNo,l=s.errMsg,u=s.errLogId;console.log("skuList",JSON.stringify(i)),console.log("payment",JSON.stringify(o)),console.log("callbackData",JSON.stringify(n)),e.hideLoading(),u&&(console.log("预下单失败",c,l,u),e.showToast({title:l,icon:"none",duration:2e3})),(r||a)&&(console.log("支付失败",c,l,r,a),l&&-1!=l.indexOf("cancelled")&&t.cancelOrderFun()),console.log(c,l)}})},payOrder:function(){var t=this,i={orderId:this.orderId,paymentAmount:(100*this.totalAmountVisible).toFixed(2),payPaymentType:this.paymentType,paymentMerchant:this.supplierId,freePurchase:this.freePurchase,performanceName:this.name};(0,T.doOrdersPay)(i).then((function(i){console.log("resolved成功回调"),t.payFinish(),e.requestSubscribeMessage({tmplIds:[P.wxnotifyid_ordersuccess,P.wxnotifyid_orderrefund],success:function(e){console.log(e)}})})).catch((function(i){console.log("catch失败执行回调抛出失败原因：",i),"cancelPay"==i?t.cancelPayModal(2):"cancelOrder"==i?t.cancelPayFun():"cancelPayToList"==i&&e.reLaunch({url:"/pages_order/mine/activityorder?index=".concat(1)})}))},payFinish:function(){var t=JSON.parse(e.getStorageSync("paySuccessOrderIdList")||"[]");t.push({orderId:this.orderId}),e.setStorageSync("paySuccessOrderIdList",JSON.stringify(t)),(0,u.paySuccessNotice)({orderInfoId:this.orderId}).then((function(e){})).catch((function(e){})),e.reLaunch({url:"/pages_game/gameevent/eventpayfinish?name="+this.name+"&eventId="+this.eventId+"&imageUrl="+this.imageUrl+"&pickUpEntity=".concat(encodeURIComponent(JSON.stringify(this.selectDrawtype)))+"&orderId=".concat(this.orderId,"&totalAmountVisible=").concat(this.totalAmountVisible,"&showTime=").concat(this.showTime,"&showName=").concat(this.showName)})},cancelPayModal:function(t){var i=this;e.showModal({title:"继续支付?",content:"点击继续支付按钮立即支付\n取消后跳转到订单页再次支付",showCancel:!0,cancelText:"取消",confirmColor:"#ff5222",confirmText:"继续支付",success:function(o){o.confirm?1==t?i.ttCreateorder():i.payOrder():o.cancel&&e.reLaunch({url:"/pages_order/mine/activityorder?index=".concat(1,"&businessType=",1)})}})},cancelPayFun:function(){(0,u.cancelPay)({orderId:this.orderId}).then((function(t){console.log(t),e.reLaunch({url:"/pages_order/mine/activityorder?index=".concat(1,"&businessType=",1)})})).catch((function(t){console.log(t),e.reLaunch({url:"/pages_order/mine/activityorder?index=".concat(1,"&businessType=",1)})}))},cancelOrderFun:function(){var e=this;(0,u.cancleOrder)({orderId:this.orderId}).then((function(t){e.orderId="",e.buyProType&&(e.lockkey=""),console.log(t)})).catch((function(e){console.log(e)}))},freightFun:function(){var e=this;(0,u.selectFittestFreight)({performanceId:this.eventId,province:this.zzshdizhi.consigneeAddrProvince,city:this.zzshdizhi.consigneeAddrCity,district:this.zzshdizhi.consigneeAddrCounty,performanceSource:this.performanceSource,showId:this.showId}).then((function(t){console.log(t),t&&t.data&&(e.deliveryFee=t.data.amount,e.deliveryTemplateId=t.data.id,e.deliveryTemplateTitle=t.data.title,e.deliveryScope=t.data.deliveryScope,e.calculatePayNum())})).catch((function(e){console.log(e)}))},calculatePayNum:function(){console.log("最初总金额：",this.totalAmount),console.log("快递费金额：",this.deliveryFee),console.log("最初销售政策优惠：",this.couponAmount),console.log("积分抵扣金额：",this.deductionAmount),console.log("指定场次的优惠金额（俱乐部优惠）：",this.couponAmountPlugin),console.log("优惠券抵扣金额：",this.couponDisAmount),this.totalAmountVisible=this.totalAmount,this.totalAmountVisible=(0,p.formatCalculateNum)(this.totalAmountVisible,this.deliveryFee,"+",2),this.totalAmountOutDis=this.totalAmountVisible,this.couponAmountVisible=this.couponAmount,this.isSelectUsePoint&&this.deductionAmount&&this.deductionAmount>0&&(this.totalAmountVisible=(0,p.formatCalculateNum)(this.totalAmount,this.deductionAmount,"-",2),this.couponAmountVisible=(0,p.formatCalculateNum)(this.couponAmountVisible,this.deductionAmount,"+",2)),this.couponAmountPlugin&&(this.totalAmountVisible=(0,p.formatCalculateNum)(this.totalAmountVisible,this.couponAmountPlugin,"-",2),this.couponAmountVisible=(0,p.formatCalculateNum)(this.couponAmountVisible,this.couponAmountPlugin,"+",2)),this.couponDisAmount>0&&(this.totalAmountVisible=(0,p.formatCalculateNum)(this.totalAmountVisible,this.couponDisAmount,"-",2),this.couponAmountVisible=(0,p.formatCalculateNum)(this.couponAmountVisible,this.couponDisAmount,"+",2)),console.log("优惠金额（不包括优惠）：",this.totalAmountOutDis),console.log("实际优惠金额：",this.couponAmountVisible),console.log("实际支付金额：",this.totalAmountVisible)},lockSeatFun:function(){var e=this;(0,u.lockSeat)({showId:this.showId,seatList:this.listticketBind}).then((function(t){if(console.log(t),t.data){e.lockkey=t.data.key;var i=t.data.showSeats;if(i)for(var o=0;o<i.length;o++)e.listticketBind[o].seatId=i[o].id,e.listticketBind[o].seatSnapshot=i[o].snapshot;e.createOrderFun()}})).catch((function(e){}))},goWriteForm:function(){var t=this;if(3==this.realNameType)for(var i=0;i<this.listticketBind.length;i++)if(!this.listticketBind[i].registerName)return void e.showToast({title:"请选择实名持票人",icon:"none"});e.navigateTo({url:"/pages_game/gameevent/writeEventForm?imageUrl="+this.imageUrl+"&entryNote="+this.entryNote+"&ticketNum="+this.totalTicketNum,success:function(e){e.eventChannel.emit("acceptDataFromOpenerPage",{data:t.signUpForm})}})},getSignupInfo:function(e){this.isWriteForm=!0,this.signUpForm=e},getSologanDetail:function(){var e=this;return(0,r.default)(n.default.mark((function t(){var i,o;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,g.sologan_detail)();case 2:i=t.sent,(o=i.data)&&o.pointExchangeRmbRatePoint&&o.pointExchangeRmbRateRmb&&(e.pointExchangeRmbRatePoint=o.pointExchangeRmbRatePoint,e.pointExchangeRmbRateRmb=o.pointExchangeRmbRateRmb,e.exchengeRatio=(0,p.numFilterUp)(o.pointExchangeRmbRateRmb/o.pointExchangeRmbRatePoint));case 5:case"end":return t.stop()}}),t)})))()},getMemberShip:function(){var e=this;return(0,r.default)(n.default.mark((function t(){var i,o;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,g.member_ship_info)({});case 2:i=t.sent,(o=i.data)&&o.memberShip&&(o.memberShip.totalPoints&&(e.totalPoints=o.memberShip.totalPoints),e.pointSwitchOn&&e.setPointDeduction());case 5:case"end":return t.stop()}}),t)})))()},setPointDeduction:function(){if(this.totalPoints>=this.minAvailablePoint){var e=Number((0,p.numFilterDown)(this.totalAmount*this.maxPointDeductionPersent/100)),t=Number((0,p.numFilterDown)(this.totalPoints*this.exchengeRatio)),i=Number((0,p.numFilterDown)(e/this.exchengeRatio));console.log("maxDeduction",e),console.log("realDeduction",t),console.log("realUsePoint",i),console.log("exchengeRatio",this.exchengeRatio),e>=t?(this.deductionText="共"+this.totalPoints+"积分，"+this.totalPoints+"积分可用",this.deductionPoint=this.totalPoints,this.deductionAmount=(0,p.numFilterDown)(this.totalPoints*this.exchengeRatio),this.deductionMoneyText="可以用"+this.totalPoints+"积分，抵扣¥"+this.deductionAmount,this.deductionTextSelect="已使用"+this.totalPoints+"积分，抵扣¥"+this.deductionAmount):(this.deductionText="共"+this.totalPoints+"积分，"+i+"积分可用",this.deductionPoint=i,this.deductionAmount=(0,p.numFilterDown)(i*this.exchengeRatio),this.deductionMoneyText="可以用"+i+"积分，抵扣¥"+this.deductionAmount,this.deductionTextSelect="已使用"+i+"积分，抵扣¥"+this.deductionAmount)}else this.totalPoints<this.minAvailablePoint&&(this.deductionText="共"+this.totalPoints+"积分，0积分可用",this.deductionPoint=0,this.deductionAmount=0)},chooseDeduction:function(){this.deductionPoint>0?this.$refs.setPoint.open():e.showToast({title:"暂无可用积分",icon:"none"})},saveOffset:function(e){this.isSelectUsePoint=e,e&&(this.coupStr="",this.discountKey="",this.couponDisAmount=0,this.coupDiscountObj=null),this.calculatePayNum()},chooseCoupon:function(){var t=this;0==this.couponList.length?(e.showLoading(),(0,y.getMemberCoupon)({pageNum:1,pageSize:20,status:0}).then((function(i){e.hideLoading(),t.couponList=[],i.data.rows&&i.data.rows.length>0&&(t.couponList=[].concat((0,s.default)(t.couponList),(0,s.default)(i.data.rows)),console.log("couponList",t.couponList),t.couponList.forEach((function(e){e.isSelect=!1}))),t.couponList.length>0?t.$refs.selectCouponPop.openPop():e.showToast({title:"暂无可用优惠券",icon:"none"})})).catch((function(t){console.log(t),e.hideLoading()}))):this.$refs.selectCouponPop.openPop()},selectCoup:function(e){console.log("couponINFO",e),e?this.getCoupDiscountedPrice(e):(this.$refs.selectCouponPop.closePop(),this.coupStr="",this.discountKey="",this.couponDisAmount=0,this.coupDiscountObj=null,this.calculatePayNum())},getCoupDiscountedPrice:function(e){var t=this,i=this.listticketBind.map((function(e){return e.fareLevel})),o={performanceId:this.eventId,showId:this.showId,payAmount:(100*this.totalAmountOutDis).toFixed(2),ticketNum:this.totalTicketNum,farelevelList:i};(0,y.couponDiscount)({discountType:e.discountType,couponId:e.couponId,memberRelationCouponId:e.id,performanceOrder:o}).then((function(i){if(null!=i&&i.data){t.$refs.selectCouponPop.closePop(),t.coupStr=(0,k.getDiscountPayText)(e),t.isSelectUsePoint=!1,t.discountKey=i.data.discountKey;var o=Math.max(0,i.data.payAmount-i.data.discountAmount);t.couponDisAmount=parseFloat((o/100).toFixed(2)),t.calculatePayNum(),t.coupDiscountObj=t.createCouponDiscountObject(o,e)}})).catch((function(e){}))},createCouponDiscountObject:function(e,t){return console.log("discountAmountFlag",e),console.log("coupInfo",t),{discountType:"1",discountAmount:parseFloat(e.toFixed(2)),couponId:t.couponId,memberRelationCouponId:t.id,couponType:t.discountType}},setTimer:function(){var e=this,t=180;this.rightPayText="立即支付(180)",this.rightPayTimer=setInterval((function(){if(t<=0)return e.rightPayText="立即支付",e.rightPayCountTime=0,e.unlockSeatFun(),void clearInterval(e.rightPayTimer);e.rightPayText="立即支付("+t+"s)",t--}),1e3)},unlockSeatFun:function(){var e=this;return(0,r.default)(n.default.mark((function t(){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.lockkey){t.next=6;break}return t.next=3,(0,u.unlockSeat)({id:e.lockkey});case 3:t.sent.data;case 6:case"end":return t.stop()}}),t)})))()},loadHtmlText:function(t,i){var o=this;e.request({url:i,method:"GET",header:{Referer:"","Content-Type":"text/html",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"},success:function(e){o.getRichText(e,t)},fail:function(e){console.log("加载html失败",e)}})},getRichText:function(e,t){var i=e.data.replace(/\<img/gi,'<img style="width:100%;height:auto;" ').replace(/iframe/g,"video").replace(/\<video/gi,'<video style="width:100%;" playsinline="true" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5" x5-video-player-fullscreen="false"');1==t&&(this.buyProtocolContext=i)},openServiceDesc:function(){this.buyProtocolContext&&(this.$refs.richNotePopup.open(),this.showPopup=!0)},handleChange:function(e){this.isSelectedRead=!0,console.log("选中的值："+e)},back:function(){this.orderId?this.isToMpPay?e.reLaunch({url:"/pages_order/mine/activityorder?index=".concat(1)}):this.$refs.orderExitWarn.open("center"):(1==this.buyProType&&this.unlockSeatFun(),e.navigateBack())}}};t.default=A}).call(this,i("df3c").default)},"34a1":function(e,t,i){"use strict";var o=i("5cfe");i.n(o).a},"5cfe":function(e,t,i){},"7e1b":function(e,t,i){"use strict";i.r(t);var o=i("2e54"),n=i.n(o);for(var s in o)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(s);t.default=n.a},9250:function(e,t,i){"use strict";i.r(t);var o=i("b4a3"),n=i("7e1b");for(var s in n)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("34a1"),i("0f50");var r=i("828b"),a=Object(r.a)(n.default,o.b,o.c,!1,null,"5a8db746",null,!1,o.a,void 0);t.default=a.exports},b4a3:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return o}));var o={uniNavBar:function(){return i.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(i.bind(null,"f9b6"))},paywayradio:function(){return i.e("components/paywayradio/paywayradio").then(i.bind(null,"2bfe"))},uniPopup:function(){return i.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(i.bind(null,"5b0a"))},goodsaddress:function(){return i.e("components/goodsaddress/goodsaddress").then(i.bind(null,"2db5"))},ticketaddress:function(){return i.e("components/ticketaddress/ticketaddress").then(i.bind(null,"7da7"))},VerifyCodePopup:function(){return Promise.all([i.e("common/vendor"),i.e("components/VerifyCodePopup/VerifyCodePopup")]).then(i.bind(null,"6689"))}},n=function(){var e=this,t=(e.$createElement,e._self._c,e.$previewImageAddress("event_detail_blur_foreground.png")),i=e.$previewImageAddress("ticket_detail_divide.png"),o=e.listticketBindTp.length,n=o>0?Number(e.realNameType):null,s=o>0?null:Number(e.realNameType),r=e.sendList&&e.sendList.length>1,a=e.sendList&&e.sendList.length>0,c=3==e.selectDrawtype.pickUpType&&e.zzshdizhi&&e.zzshdizhi.consigneeName?e.$previewImageAddress("arrow_right_gray.png"):null,l=3!=e.selectDrawtype.pickUpType||e.zzshdizhi&&e.zzshdizhi.consigneeName?null:e.$previewImageAddress("arrow_right_gray.png"),u=2==e.selectDrawtype.drawOutType?e.ticketshop.length:null,h=2==e.selectDrawtype.drawOutType?e.$previewImageAddress("arrow_right_gray.png"):null,d=1==e.hasEntry?e.$previewImageAddress("signup_form.png"):null,p=1==e.hasEntry&&e.isWriteForm?e.signUpForm.length:null,m=1!=e.hasEntry||e.isWriteForm?null:e.signUpForm.length,f=1==e.hasEntry?e.$previewImageAddress("arrowright.png"):null,g="TT"!=e.platform&&e.pointSwitchOn?e.$previewImageAddress("arrowright.png"):null,y="TT"!=e.platform?e.$previewImageAddress("arrowright.png"):null,P=e.$previewImageAddress("arrowright.png"),T=Number(e.deductionAmount),k=e.listticketBindTp.length;e.$mp.data=Object.assign({},{$root:{m0:t,m1:i,g0:o,m2:n,m3:s,g1:r,g2:a,m4:c,m5:l,g3:u,m6:h,m7:d,g4:p,g5:m,m8:f,m9:g,m10:y,m11:P,m12:T,g6:k}})},s=[]},dfb4:function(e,t,i){"use strict";(function(e,t){var o=i("47a9");i("42bd"),i("861b"),o(i("3240"));var n=o(i("9250"));e.__webpack_require_UNI_MP_PLUGIN__=i,t(n.default)}).call(this,i("3223").default,i("df3c").createPage)}},[["dfb4","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_game/gameevent/eventpay.js'});require("pages_game/gameevent/eventpay.js");$gwx2_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx2_XC_2 || [];
function gz$gwx2_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx2_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contain'])
Z([[2,'!='],[[7],[3,'platform']],[1,'TT']])
Z([3,'__l'])
Z([3,'主办方介绍'])
Z([3,'7204c180-1'])
Z([[7],[3,'organizerLogo']])
Z(z[2])
Z([3,'rich-text-view'])
Z([[7],[3,'organizerIntroduce']])
Z([1,false])
Z([3,'7204c180-2'])
Z(z[2])
Z([3,'vue-ref'])
Z([3,'confirm'])
Z([3,'7204c180-3'])
Z(z[2])
Z(z[12])
Z([3,'verifycode'])
Z([3,'7204c180-4'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx2_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx2_XC_2=true;
var x=['./pages_game/gameevent/orgIntroduce.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx2_XC_2_1()
var c7E=_n('view')
_rz(z,c7E,'class',0,e,s,gg)
var o8E=_v()
_(c7E,o8E)
if(_oz(z,1,e,s,gg)){o8E.wxVkey=1
var a0E=_mz(z,'customtitlebar',['bind:__l',2,'title',1,'vueId',2],[],e,s,gg)
_(o8E,a0E)
}
var l9E=_v()
_(c7E,l9E)
if(_oz(z,5,e,s,gg)){l9E.wxVkey=1
}
var tAF=_mz(z,'mp-html',['bind:__l',6,'class',1,'content',2,'setTitle',3,'vueId',4],[],e,s,gg)
_(c7E,tAF)
var eBF=_mz(z,'pup-limit',['bind:__l',11,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(c7E,eBF)
var bCF=_mz(z,'verify-code-popup',['bind:__l',15,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(c7E,bCF)
o8E.wxXCkey=1
o8E.wxXCkey=3
l9E.wxXCkey=1
_(r,c7E)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2_XC_2";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx2_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/gameevent/orgIntroduce.wxml'] = [$gwx2_XC_2, './pages_game/gameevent/orgIntroduce.wxml'];else __wxAppCode__['pages_game/gameevent/orgIntroduce.wxml'] = $gwx2_XC_2( './pages_game/gameevent/orgIntroduce.wxml' );
	;__wxRoute = "pages_game/gameevent/orgIntroduce";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/gameevent/orgIntroduce.js";define("pages_game/gameevent/orgIntroduce.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/gameevent/orgIntroduce"],{"04e3":function(e,t,n){},"2c10":function(e,t,n){"use strict";var o=n("04e3");n.n(o).a},"2d7a":function(e,t,n){"use strict";(function(e,t){var o=n("47a9");n("42bd"),n("861b"),o(n("3240"));var a=o(n("60a3"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("3223").default,n("df3c").createPage)},5316:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));var o={customtitlebar:function(){return Promise.all([n.e("common/vendor"),n.e("components/customtitlebar/customtitlebar")]).then(n.bind(null,"e34b"))},mpHtml:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/mp-html/components/mp-html/mp-html")]).then(n.bind(null,"6645"))},VerifyCodePopup:function(){return Promise.all([n.e("common/vendor"),n.e("components/VerifyCodePopup/VerifyCodePopup")]).then(n.bind(null,"6689"))}},a=function(){this.$createElement;var e=(this._self._c,this.$previewImageAddress("mine_top_new_bg_0925.png"));this.$mp.data=Object.assign({},{$root:{m0:e}})},r=[]},"53d6":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{organizerLogo:"",organizerDeptName:"",organizerIntroduce:"",platform:"WX"}},onLoad:function(e){console.log("res",e),this.organizerLogo=e.organizerLogo,this.organizerDeptName=e.organizerDeptName,this.loadHtmlText(e.organizerIntroduce)},methods:{loadHtmlText:function(t){var n=this,o=encodeURI(o);e.request({url:t,method:"GET",header:{Referer:"","Content-Type":"text/html",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"},success:function(e){n.organizerIntroduce=e.data.replace(/\<img/gi,'<img style="max-width:100%;height:auto" ').replace(/iframe/gi,"video")},fail:function(e){console.log("aaaaa"+e)}})}}};t.default=n}).call(this,n("df3c").default)},"60a3":function(e,t,n){"use strict";n.r(t);var o=n("5316"),a=n("b6af");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("2c10");var i=n("828b"),u=Object(i.a)(a.default,o.b,o.c,!1,null,null,null,!1,o.a,void 0);t.default=u.exports},b6af:function(e,t,n){"use strict";n.r(t);var o=n("53d6"),a=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t.default=a.a}},[["2d7a","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_game/gameevent/orgIntroduce.js'});require("pages_game/gameevent/orgIntroduce.js");$gwx2_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx2_XC_3 || [];
function gz$gwx2_XC_3_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_3_1)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_3_1
__WXML_GLOBAL__.ops_cached.$gwx2_XC_3_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container data-v-7990c54d'])
Z([[2,'!='],[[7],[3,'platform']],[1,'TT']])
Z([3,'transparent'])
Z([3,'__l'])
Z([3,'__e'])
Z([1,false])
Z([3,'data-v-7990c54d'])
Z([1,true])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z(z[7])
Z([3,'left'])
Z(z[7])
Z([3,'分享海报'])
Z([3,'728d3931-1'])
Z(z[3])
Z(z[4])
Z(z[4])
Z([3,'data-v-7990c54d vue-ref'])
Z([3,'width: 750rpx; height: 1208rpx;'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^fail']],[[4],[[5],[[4],[[5],[1,'fail']]]]]]]],[[4],[[5],[[5],[1,'^done']],[[4],[[5],[[4],[[5],[1,'done']]]]]]]]])
Z([3,'poster-visible'])
Z([3,'url'])
Z(z[7])
Z([1,2])
Z([3,'728d3931-2'])
Z([[4],[[5],[1,'default']]])
Z(z[3])
Z(z[6])
Z([3,'width: 618rpx; height: 896rpx;position:absolute;margin-left:76rpx;margin-top: 100rpx;background-image:\x27url(https://res.dasheng.top/app/icon/share_event_detailbg.png)\x27 '])
Z([[2,'+'],[[2,'+'],[1,'728d3931-3'],[1,',']],[1,'728d3931-2']])
Z(z[25])
Z(z[3])
Z(z[6])
Z([3,'position:absolute;width:100%;top:238rpx;display:flex;flex-direction: column;'])
Z([[2,'+'],[[2,'+'],[1,'728d3931-4'],[1,',']],[1,'728d3931-3']])
Z(z[25])
Z(z[3])
Z(z[6])
Z([3,'display:flex;justify-content:center;margin-left:52rpx;align-items: center;'])
Z([[2,'+'],[[2,'+'],[1,'728d3931-5'],[1,',']],[1,'728d3931-4']])
Z(z[25])
Z(z[3])
Z(z[6])
Z([3,'width:77rpx;height:77rpx;border-radius: 50%;'])
Z([[7],[3,'userHeadPic']])
Z([[2,'+'],[[2,'+'],[1,'728d3931-6'],[1,',']],[1,'728d3931-5']])
Z(z[3])
Z(z[6])
Z([3,'color: #000000;height:50rpx;line-height:50rpx;font-size: 44rpx;margin-left:26rpx;font-weight:bold;'])
Z([[7],[3,'userName']])
Z([[2,'+'],[[2,'+'],[1,'728d3931-7'],[1,',']],[1,'728d3931-5']])
Z(z[3])
Z(z[6])
Z([3,'color: #666666;margin-top:7rpx;font-size: 28rpx;line-height: 36rpx;margin-left:52rpx;text-align:center;'])
Z([3,'抢票成功啦！我在现场等你～'])
Z([[2,'+'],[[2,'+'],[1,'728d3931-8'],[1,',']],[1,'728d3931-4']])
Z(z[3])
Z(z[6])
Z([3,'display:flex;background: #F3F6FC;width:534rpx;height:236rpx;border-radius: 20rpx;margin-top:94rpx;margin-left:32rpx;align-items: center;'])
Z([[2,'+'],[[2,'+'],[1,'728d3931-9'],[1,',']],[1,'728d3931-4']])
Z(z[25])
Z(z[3])
Z(z[6])
Z([3,'flex:1;display:flex;flex-direction:column;margin-left:240rpx;'])
Z([[2,'+'],[[2,'+'],[1,'728d3931-10'],[1,',']],[1,'728d3931-9']])
Z(z[25])
Z(z[3])
Z(z[6])
Z([3,'line-clamp:2;font-size: 28rpx;color: #000000;font-weight:bold;line-height: 36rpx;width:268rpx;'])
Z([[6],[[7],[3,'itemdata']],[3,'name']])
Z([[2,'+'],[[2,'+'],[1,'728d3931-11'],[1,',']],[1,'728d3931-10']])
Z(z[3])
Z(z[6])
Z([3,'margin-top:8rpx;line-clamp:1;font-size: 22rpx;color: #666666;line-height: 32rpx;width:268rpx;'])
Z([[2,'?:'],[[6],[[7],[3,'itemdata']],[3,'timeIntervalText']],[[6],[[7],[3,'itemdata']],[3,'timeIntervalText']],[[7],[3,'timeTxt']]])
Z([[2,'+'],[[2,'+'],[1,'728d3931-12'],[1,',']],[1,'728d3931-10']])
Z(z[3])
Z(z[6])
Z([3,'margin-top:4rpx;color: #666666;font-size: 22rpx;line-clamp:2;line-height: 32rpx;width:268rpx;'])
Z([[2,'?:'],[[6],[[7],[3,'itemdata']],[3,'venueAddress']],[[6],[[7],[3,'itemdata']],[3,'venueAddress']],[[6],[[7],[3,'itemdata']],[3,'addressDetail']]])
Z([[2,'+'],[[2,'+'],[1,'728d3931-13'],[1,',']],[1,'728d3931-10']])
Z(z[3])
Z(z[6])
Z([3,' width: 200rpx;height: 260rpx;border-radius: 20rpx;position:absolute;margin-top:158rpx;margin-left:52rpx;'])
Z([[6],[[7],[3,'itemdata']],[3,'imageUrl']])
Z([[2,'+'],[[2,'+'],[1,'728d3931-14'],[1,',']],[1,'728d3931-4']])
Z(z[3])
Z(z[6])
Z([3,'object-fit:fill;width: 124rpx; height: 124rpx;position:absolute;bottom:42rpx;left:440rpx;'])
Z([[7],[3,'mpQrcode']])
Z([[2,'+'],[[2,'+'],[1,'728d3931-15'],[1,',']],[1,'728d3931-3']])
Z(z[3])
Z(z[4])
Z(z[4])
Z(z[17])
Z(z[18])
Z(z[19])
Z([3,'poster'])
Z(z[21])
Z(z[7])
Z(z[23])
Z([3,'728d3931-16'])
Z(z[25])
Z(z[3])
Z(z[6])
Z([3,' width: 750rpx; height: 1208rpx;'])
Z([[6],[[7],[3,'$root']],[3,'m5']])
Z([[2,'+'],[[2,'+'],[1,'728d3931-17'],[1,',']],[1,'728d3931-16']])
Z(z[3])
Z(z[6])
Z(z[28])
Z([[2,'+'],[[2,'+'],[1,'728d3931-18'],[1,',']],[1,'728d3931-16']])
Z(z[25])
Z(z[3])
Z(z[6])
Z(z[33])
Z([[2,'+'],[[2,'+'],[1,'728d3931-19'],[1,',']],[1,'728d3931-18']])
Z(z[25])
Z(z[3])
Z(z[6])
Z(z[38])
Z([[2,'+'],[[2,'+'],[1,'728d3931-20'],[1,',']],[1,'728d3931-19']])
Z(z[25])
Z(z[3])
Z(z[6])
Z(z[43])
Z(z[44])
Z([[2,'+'],[[2,'+'],[1,'728d3931-21'],[1,',']],[1,'728d3931-20']])
Z(z[3])
Z(z[6])
Z(z[48])
Z(z[49])
Z([[2,'+'],[[2,'+'],[1,'728d3931-22'],[1,',']],[1,'728d3931-20']])
Z(z[3])
Z(z[6])
Z(z[53])
Z(z[54])
Z([[2,'+'],[[2,'+'],[1,'728d3931-23'],[1,',']],[1,'728d3931-19']])
Z(z[3])
Z(z[6])
Z(z[58])
Z([[2,'+'],[[2,'+'],[1,'728d3931-24'],[1,',']],[1,'728d3931-19']])
Z(z[25])
Z(z[3])
Z(z[6])
Z(z[63])
Z([[2,'+'],[[2,'+'],[1,'728d3931-25'],[1,',']],[1,'728d3931-24']])
Z(z[25])
Z(z[3])
Z(z[6])
Z(z[68])
Z(z[69])
Z([[2,'+'],[[2,'+'],[1,'728d3931-26'],[1,',']],[1,'728d3931-25']])
Z(z[3])
Z(z[6])
Z(z[73])
Z(z[74])
Z([[2,'+'],[[2,'+'],[1,'728d3931-27'],[1,',']],[1,'728d3931-25']])
Z(z[3])
Z(z[6])
Z(z[78])
Z(z[79])
Z([[2,'+'],[[2,'+'],[1,'728d3931-28'],[1,',']],[1,'728d3931-25']])
Z(z[3])
Z(z[6])
Z(z[83])
Z(z[84])
Z([[2,'+'],[[2,'+'],[1,'728d3931-29'],[1,',']],[1,'728d3931-19']])
Z(z[3])
Z(z[6])
Z(z[88])
Z(z[89])
Z([[2,'+'],[[2,'+'],[1,'728d3931-30'],[1,',']],[1,'728d3931-18']])
Z(z[3])
Z(z[17])
Z([3,'permissionPup'])
Z([[7],[3,'permissionType']])
Z([3,'728d3931-31'])
Z(z[3])
Z(z[17])
Z([3,'confirm'])
Z([3,'728d3931-32'])
Z(z[3])
Z(z[17])
Z([3,'verifycode'])
Z([3,'728d3931-33'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx2_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx2_XC_3=true;
var x=['./pages_game/gameevent/shareforevent.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx2_XC_3_1()
var xEF=_n('view')
_rz(z,xEF,'class',0,e,s,gg)
var oFF=_v()
_(xEF,oFF)
if(_oz(z,1,e,s,gg)){oFF.wxVkey=1
var fGF=_mz(z,'uni-nav-bar',['backgroundColor',2,'bind:__l',1,'bind:clickLeft',2,'border',3,'class',4,'dark',5,'data-event-opts',6,'fixed',7,'leftIcon',8,'statusBar',9,'title',10,'vueId',11],[],e,s,gg)
_(oFF,fGF)
}
var cHF=_mz(z,'l-painter',['bind:__l',14,'bind:done',1,'bind:fail',2,'class',3,'css',4,'data-event-opts',5,'data-ref',6,'pathType',7,'performance',8,'pixelRatio',9,'vueId',10,'vueSlots',11],[],e,s,gg)
var hIF=_mz(z,'l-painter-view',['bind:__l',26,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var oJF=_mz(z,'l-painter-view',['bind:__l',31,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var cKF=_mz(z,'l-painter-view',['bind:__l',36,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var oLF=_mz(z,'l-painter-image',['bind:__l',41,'class',1,'css',2,'src',3,'vueId',4],[],e,s,gg)
_(cKF,oLF)
var lMF=_mz(z,'l-painter-text',['bind:__l',46,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(cKF,lMF)
_(oJF,cKF)
var aNF=_mz(z,'l-painter-text',['bind:__l',51,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(oJF,aNF)
var tOF=_mz(z,'l-painter-view',['bind:__l',56,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var ePF=_mz(z,'l-painter-view',['bind:__l',61,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var bQF=_mz(z,'l-painter-text',['bind:__l',66,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(ePF,bQF)
var oRF=_mz(z,'l-painter-text',['bind:__l',71,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(ePF,oRF)
var xSF=_mz(z,'l-painter-text',['bind:__l',76,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(ePF,xSF)
_(tOF,ePF)
_(oJF,tOF)
var oTF=_mz(z,'l-painter-image',['bind:__l',81,'class',1,'css',2,'src',3,'vueId',4],[],e,s,gg)
_(oJF,oTF)
_(hIF,oJF)
var fUF=_mz(z,'l-painter-image',['bind:__l',86,'class',1,'css',2,'src',3,'vueId',4],[],e,s,gg)
_(hIF,fUF)
_(cHF,hIF)
_(xEF,cHF)
var cVF=_mz(z,'l-painter',['bind:__l',91,'bind:done',1,'bind:fail',2,'class',3,'css',4,'data-event-opts',5,'data-ref',6,'pathType',7,'performance',8,'pixelRatio',9,'vueId',10,'vueSlots',11],[],e,s,gg)
var hWF=_mz(z,'l-painter-image',['bind:__l',103,'class',1,'css',2,'src',3,'vueId',4],[],e,s,gg)
_(cVF,hWF)
var oXF=_mz(z,'l-painter-view',['bind:__l',108,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var cYF=_mz(z,'l-painter-view',['bind:__l',113,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var oZF=_mz(z,'l-painter-view',['bind:__l',118,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var l1F=_mz(z,'l-painter-image',['bind:__l',123,'class',1,'css',2,'src',3,'vueId',4],[],e,s,gg)
_(oZF,l1F)
var a2F=_mz(z,'l-painter-text',['bind:__l',128,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(oZF,a2F)
_(cYF,oZF)
var t3F=_mz(z,'l-painter-text',['bind:__l',133,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(cYF,t3F)
var e4F=_mz(z,'l-painter-view',['bind:__l',138,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var b5F=_mz(z,'l-painter-view',['bind:__l',143,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var o6F=_mz(z,'l-painter-text',['bind:__l',148,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(b5F,o6F)
var x7F=_mz(z,'l-painter-text',['bind:__l',153,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(b5F,x7F)
var o8F=_mz(z,'l-painter-text',['bind:__l',158,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(b5F,o8F)
_(e4F,b5F)
_(cYF,e4F)
var f9F=_mz(z,'l-painter-image',['bind:__l',163,'class',1,'css',2,'src',3,'vueId',4],[],e,s,gg)
_(cYF,f9F)
_(oXF,cYF)
var c0F=_mz(z,'l-painter-image',['bind:__l',168,'class',1,'css',2,'src',3,'vueId',4],[],e,s,gg)
_(oXF,c0F)
_(cVF,oXF)
_(xEF,cVF)
var hAG=_mz(z,'permission-pup',['bind:__l',173,'class',1,'data-ref',2,'permissionType',3,'vueId',4],[],e,s,gg)
_(xEF,hAG)
var oBG=_mz(z,'pup-limit',['bind:__l',178,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(xEF,oBG)
var cCG=_mz(z,'verify-code-popup',['bind:__l',182,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(xEF,cCG)
oFF.wxXCkey=1
oFF.wxXCkey=3
_(r,xEF)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2_XC_3";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx2_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/gameevent/shareforevent.wxml'] = [$gwx2_XC_3, './pages_game/gameevent/shareforevent.wxml'];else __wxAppCode__['pages_game/gameevent/shareforevent.wxml'] = $gwx2_XC_3( './pages_game/gameevent/shareforevent.wxml' );
	;__wxRoute = "pages_game/gameevent/shareforevent";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/gameevent/shareforevent.js";define("pages_game/gameevent/shareforevent.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/gameevent/shareforevent"],{"0016":function(e,n,t){},2373:function(e,n,t){"use strict";(function(e){var i=t("47a9");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=i(t("7eb4")),a=i(t("ee10")),o=t("9b69"),r=t("d9e3"),c=(t("7508"),t("6fe6")),u=t("f26e"),l=i(t("84f6")),p={components:{lPainter:function(){Promise.all([t.e("pages_game/common/vendor"),t.e("pages_game/components/lime-painter/components/l-painter/l-painter")]).then(function(){return resolve(t("2ace"))}.bind(null,t)).catch(t.oe)},lPainterView:function(){Promise.all([t.e("pages_game/common/vendor"),t.e("pages_game/components/lime-painter/components/l-painter-view/l-painter-view")]).then(function(){return resolve(t("b62f"))}.bind(null,t)).catch(t.oe)},lPainterImage:function(){Promise.all([t.e("pages_game/common/vendor"),t.e("pages_game/components/lime-painter/components/l-painter-image/l-painter-image")]).then(function(){return resolve(t("27d7"))}.bind(null,t)).catch(t.oe)},lPainterText:function(){Promise.all([t.e("pages_game/common/vendor"),t.e("pages_game/components/lime-painter/components/l-painter-text/l-painter-text")]).then(function(){return resolve(t("121d"))}.bind(null,t)).catch(t.oe)}},data:function(){return{picture2:"",show:!1,itemdata:{},businessType:1,timeTxt:"",mpQrcode:"",id:"",page:"",pageType:"",iosFirstOpenCamera:!0,platform:"WX",userHeadPic:"https://res.dasheng.top/app/icon/default_head.png",userName:"看个比赛APP",isLogin:!1,permissionType:5}},onLoad:function(n){if(this.itemdata=JSON.parse(decodeURIComponent(n.itemdata)),this.businessType=n.businessType,1==this.businessType)this.page="pages_game/gameevent/eventdetail",this.pageType="ticket_event_info",this.id=this.itemdata.id;else if(2==this.businessType){this.page="/pages_activity/activity/detail",this.pageType="training_event_info",this.id=this.itemdata.id;var t=(0,r.formatTime)(this.itemdata.beginTime,"yyyy.mm.dd hh:mi"),i=(0,r.formatTime)(this.itemdata.endTime,"yyyy.mm.dd hh:mi");this.timeTxt=t+"-"+i}e.getStorageSync("token")?(console.log("aaa111"),this.isLogin=!0,this.getUserInfo()):(console.log("bbb222"),this.isLogin=!1),this.getMpQrcode(),e.getStorageSync("iosFirstOpenCamera")&&(this.iosFirstOpenCamera=e.getStorageSync("iosFirstOpenCamera")),console.log("this.iosFirstOpenCamera",this.iosFirstOpenCamera)},onShow:function(){},methods:{fail:function(e){console.log("绘制失败！",e)},done:function(e){console.log("绘制完成")},getUserInfo:function(){var e=this;this.isLogin?(0,u.userInfodetail)({}).then((function(n){console.log(n),null!=n&&null!=n.data&&(e.userHeadPic=n.data.avatarUrl,n.data.nickName?e.userName=n.data.nickName:e.userName="看个比赛APP")})).catch((function(n){e.userHeadPic="https://res.dasheng.top/app/icon/default_head.png",e.userName="看个比赛APP"})):(this.userHeadPic="https://res.dasheng.top/app/icon/default_head.png",this.userName="看个比赛APP")},getMpQrcode:function(){var n=this;(0,o.get_wx_acodeun_limit)({wxSceneType:this.pageType,id:this.id}).then((function(e){})).catch((function(t){console.log("get_wx_acodeun_limiterr",t),n.mpQrcode="data:image/png;base64,"+e.arrayBufferToBase64(t),console.log("this.mpQrcode",n.mpQrcode)}))},shareWxMini:function(){console.log("分享title",this.itemdata.imageUrl),console.log("分享image",this.itemdata.name),e.share({provider:"weixin",scene:"WXSceneSession",type:5,imageUrl:this.itemdata.imageUrl,title:this.itemdata.name,miniProgram:{id:c.mpGhId,path:this.page+"?id="+this.id,type:0,webUrl:"https://www.kgbs.top/"},success:function(e){console.log("分享成功:",JSON.stringify(e))},fail:function(e){console.log("分享失败:"+JSON.stringify(e))}})},save:function(e){var n=this;this.$refs.poster.canvasToTempFilePathSync({fileType:"jpg",quality:1,success:function(t){console.log(t.tempFilePath),n.picture2=t.tempFilePath,3==e?n.shareQqImg():4==e?n.saveImage():n.shareImg(e)},fail:function(e){console.log("???????????",e)}})},shareImg:function(n){e.share({provider:"weixin",scene:1==n?"WXSceneSession":"WXSceneTimeline",type:2,imageUrl:this.picture2,success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(e){console.log("fail:"+JSON.stringify(e))}})},shareQqImg:function(){e.share({provider:"qq",type:2,Scene:"WXSenceTimeline",title:"知识岛",imageUrl:this.picture2,success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(e){console.log("fail:"+JSON.stringify(e))}})},saveImage:function(){var n=this;return(0,a.default)(s.default.mark((function t(){var i,a,o;return s.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("iosFirstOpenCamera",n.iosFirstOpenCamera),"ios"!==e.getSystemInfoSync().platform||!n.iosFirstOpenCamera){t.next=8;break}e.setStorageSync("iosFirstOpenCamera",!1),n.iosFirstOpenCamera=!1,"undetermined"==(i=plus.navigator.checkPermission("GALLERY"))||"authorized"==i?e.saveImageToPhotosAlbum({filePath:n.picture2,success:function(n){e.showToast({title:"已保存到相册",icon:"success",duration:2e3})},fail:function(e){console.log("fail:"+JSON.stringify(e))}}):e.showModal({title:"开启相册权限",content:"授权获取相册权限，用于保存图片到本地",showCancel:!0,confirmText:"去开启",cancelText:"拒绝",success:function(e){e.confirm&&l.default.gotoAppPermissionSetting()}}),t.next=15;break;case 8:return(a=n).$refs.permissionPup.open(),t.next=12,l.default.requestAndroidPermission("android.permission.READ_EXTERNAL_STORAGE");case 12:o=t.sent,a.$refs.permissionPup.close(),1==o?e.saveImageToPhotosAlbum({filePath:a.picture2,success:function(n){e.showToast({title:"已保存到相册",icon:"success",duration:2e3})},fail:function(e){console.log("fail:"+JSON.stringify(e))}}):0==o||e.showModal({title:"开启存储权限",content:"授权获取存储权限，用于保存图片到本地",showCancel:!0,confirmText:"去开启",cancelText:"拒绝",success:function(e){e.confirm&&l.default.gotoAppPermissionSetting()}});case 15:case"end":return t.stop()}}),t)})))()},cancleFun:function(){e.navigateBack({delta:1})},back:function(){e.navigateBack()},showShareItem:function(){this.$refs.popup.open()}}};n.default=p}).call(this,t("df3c").default)},"2a19":function(e,n,t){"use strict";t.r(n);var i=t("2373"),s=t.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n.default=s.a},"2bff":function(e,n,t){"use strict";(function(e,n){var i=t("47a9");t("42bd"),t("861b"),i(t("3240"));var s=i(t("e038"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(s.default)}).call(this,t("3223").default,t("df3c").createPage)},6982:function(e,n,t){"use strict";var i=t("0016");t.n(i).a},"8b41":function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}));var i={uniNavBar:function(){return t.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"f9b6"))},permissionPup:function(){return t.e("components/permissionPup/permissionPup").then(t.bind(null,"9ad8"))},VerifyCodePopup:function(){return Promise.all([t.e("common/vendor"),t.e("components/VerifyCodePopup/VerifyCodePopup")]).then(t.bind(null,"6689"))}},s=function(){this.$createElement;var e=(this._self._c,this.$previewImageAddress("share_event_mainbg.png")),n=this.$previewImageAddress("share_event_type_wx.png"),t=this.$previewImageAddress("share_event_type_friend.png"),i=this.$previewImageAddress("share_event_type_qq.png"),s=this.$previewImageAddress("share_event_type_download.png"),a=this.$previewImageAddress("share_event_detailbg_out_kgbs.png");this.$mp.data=Object.assign({},{$root:{m0:e,m1:n,m2:t,m3:i,m4:s,m5:a}})},a=[]},e038:function(e,n,t){"use strict";t.r(n);var i=t("8b41"),s=t("2a19");for(var a in s)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return s[e]}))}(a);t("6982");var o=t("828b"),r=Object(o.a)(s.default,i.b,i.c,!1,null,"7990c54d",null,!1,i.a,void 0);n.default=r.exports}},[["2bff","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_game/gameevent/shareforevent.js'});require("pages_game/gameevent/shareforevent.js");$gwx2_XC_4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx2_XC_4 || [];
function gz$gwx2_XC_4_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_4_1)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_4_1
__WXML_GLOBAL__.ops_cached.$gwx2_XC_4_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-766ed66b'])
Z([3,'transparent'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[3])
Z([1,false])
Z(z[0])
Z([3,'white'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]],[[4],[[5],[[5],[1,'^clickRight']],[[4],[[5],[[4],[[5],[1,'showShareItem']]]]]]]]])
Z([1,true])
Z([3,'left'])
Z(z[9])
Z([3,'分享'])
Z([3,'e5ee13b0-1'])
Z([[2,'||'],[[2,'=='],[[7],[3,'businessType']],[1,4]],[[2,'=='],[[7],[3,'businessType']],[1,3]]])
Z(z[2])
Z([3,'data-v-766ed66b vue-ref'])
Z([3,'height:1028rpx;position:relative;'])
Z([3,'poster'])
Z([1,2])
Z([3,'e5ee13b0-2'])
Z([[4],[[5],[1,'default']]])
Z(z[2])
Z(z[0])
Z([3,'position:absolute;height: 1048rpx;padding-left:64rpx;padding-right:64rpx;padding-top:48rpx;'])
Z([[2,'+'],[[2,'+'],[1,'e5ee13b0-3'],[1,',']],[1,'e5ee13b0-2']])
Z(z[21])
Z(z[2])
Z(z[0])
Z([[2,'+'],[[2,'+'],[1,'e5ee13b0-4'],[1,',']],[1,'e5ee13b0-3']])
Z(z[21])
Z(z[2])
Z(z[0])
Z([3,'width:622rpx; height:806rpx;border-top-left-radius: 24rpx;border-top-right-radius: 24rpx;'])
Z([[7],[3,'shareTopImage']])
Z([[2,'+'],[[2,'+'],[1,'e5ee13b0-5'],[1,',']],[1,'e5ee13b0-4']])
Z(z[2])
Z(z[0])
Z([3,'position:absolute;top:712rpx;width:622rpx;height:200rpx;background-image:url(https://res.dasheng.top/app/icon/hospitality_share_bottom_bg.png);display:flex;'])
Z([[2,'+'],[[2,'+'],[1,'e5ee13b0-6'],[1,',']],[1,'e5ee13b0-4']])
Z(z[21])
Z(z[2])
Z(z[0])
Z([3,'width:378rpx;height:100%;padding-left:32rpx;'])
Z([[2,'+'],[[2,'+'],[1,'e5ee13b0-7'],[1,',']],[1,'e5ee13b0-6']])
Z(z[21])
Z(z[2])
Z(z[0])
Z([3,'line-clamp: 2;text-align:left;width:370rpx;margin-top:32rpx;font-size: 32rpx;color: #061343;font-weight: bold;'])
Z([[6],[[7],[3,'itemdata']],[3,'name']])
Z([[2,'+'],[[2,'+'],[1,'e5ee13b0-8'],[1,',']],[1,'e5ee13b0-7']])
Z(z[2])
Z(z[0])
Z([3,'margin-top:8rpx;text-align:left;width:370rpx;font-size: 24rpx;color: #999999;line-clamp:2;font-family: PingFangSC-Regular;'])
Z([[2,'+'],[[2,'+'],[[7],[3,'beginTime']],[1,' - ']],[[7],[3,'endTime']]])
Z([[2,'+'],[[2,'+'],[1,'e5ee13b0-9'],[1,',']],[1,'e5ee13b0-7']])
Z(z[2])
Z(z[0])
Z([3,'width:212rpx;height:100%;text-align: center;'])
Z([[2,'+'],[[2,'+'],[1,'e5ee13b0-10'],[1,',']],[1,'e5ee13b0-6']])
Z(z[21])
Z(z[2])
Z(z[0])
Z([3,'margin-top:-26rpx; width:152rpx; height:152rpx;border-radius:76rpx;'])
Z([[7],[3,'mpQrcode']])
Z([[2,'+'],[[2,'+'],[1,'e5ee13b0-11'],[1,',']],[1,'e5ee13b0-10']])
Z(z[2])
Z(z[0])
Z([3,'height:38rpx;margin-top:8rpx;line-height:38rpx;color: #666666;font-size: 24rpx;'])
Z([3,'扫码了解详情'])
Z([[2,'+'],[[2,'+'],[1,'e5ee13b0-12'],[1,',']],[1,'e5ee13b0-10']])
Z(z[2])
Z(z[16])
Z([3,'confirm'])
Z([3,'e5ee13b0-13'])
Z(z[2])
Z(z[16])
Z([3,'verifycode'])
Z([3,'e5ee13b0-14'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_4_1);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_4_1
}
__WXML_GLOBAL__.ops_set.$gwx2_XC_4=z;
__WXML_GLOBAL__.ops_init.$gwx2_XC_4=true;
var x=['./pages_game/gameevent/shareforplan.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx2_XC_4_1()
var lEG=_n('view')
_rz(z,lEG,'class',0,e,s,gg)
var tGG=_mz(z,'uni-nav-bar',['backgroundColor',1,'bind:__l',1,'bind:clickLeft',2,'bind:clickRight',3,'border',4,'class',5,'color',6,'data-event-opts',7,'fixed',8,'leftIcon',9,'statusBar',10,'title',11,'vueId',12],[],e,s,gg)
_(lEG,tGG)
var aFG=_v()
_(lEG,aFG)
if(_oz(z,14,e,s,gg)){aFG.wxVkey=1
var eHG=_mz(z,'l-painter',['bind:__l',15,'class',1,'css',2,'data-ref',3,'pixelRatio',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var bIG=_mz(z,'l-painter-view',['bind:__l',22,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var oJG=_mz(z,'l-painter-view',['bind:__l',27,'class',1,'vueId',2,'vueSlots',3],[],e,s,gg)
var xKG=_mz(z,'l-painter-image',['bind:__l',31,'class',1,'css',2,'src',3,'vueId',4],[],e,s,gg)
_(oJG,xKG)
var oLG=_mz(z,'l-painter-view',['bind:__l',36,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var fMG=_mz(z,'l-painter-view',['bind:__l',41,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var cNG=_mz(z,'l-painter-text',['bind:__l',46,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(fMG,cNG)
var hOG=_mz(z,'l-painter-text',['bind:__l',51,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(fMG,hOG)
_(oLG,fMG)
var oPG=_mz(z,'l-painter-view',['bind:__l',56,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var cQG=_mz(z,'l-painter-image',['bind:__l',61,'class',1,'css',2,'src',3,'vueId',4],[],e,s,gg)
_(oPG,cQG)
var oRG=_mz(z,'l-painter-text',['bind:__l',66,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(oPG,oRG)
_(oLG,oPG)
_(oJG,oLG)
_(bIG,oJG)
_(eHG,bIG)
_(aFG,eHG)
}
var lSG=_mz(z,'pup-limit',['bind:__l',71,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(lEG,lSG)
var aTG=_mz(z,'verify-code-popup',['bind:__l',75,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(lEG,aTG)
aFG.wxXCkey=1
aFG.wxXCkey=3
_(r,lEG)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2_XC_4";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx2_XC_4();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/gameevent/shareforplan.wxml'] = [$gwx2_XC_4, './pages_game/gameevent/shareforplan.wxml'];else __wxAppCode__['pages_game/gameevent/shareforplan.wxml'] = $gwx2_XC_4( './pages_game/gameevent/shareforplan.wxml' );
	;__wxRoute = "pages_game/gameevent/shareforplan";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/gameevent/shareforplan.js";define("pages_game/gameevent/shareforplan.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/gameevent/shareforplan"],{"0fbd":function(e,n,t){},"3ab7":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return i}));var i={uniNavBar:function(){return t.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"f9b6"))},VerifyCodePopup:function(){return Promise.all([t.e("common/vendor"),t.e("components/VerifyCodePopup/VerifyCodePopup")]).then(t.bind(null,"6689"))}},a=function(){this.$createElement;var e=(this._self._c,this.$previewImageAddress("share_event_type_wx.png")),n=this.$previewImageAddress("share_event_type_friend.png"),t=this.$previewImageAddress("share_event_type_qq.png"),i=this.$previewImageAddress("share_event_type_download.png");this.$mp.data=Object.assign({},{$root:{m0:e,m1:n,m2:t,m3:i}})},o=[]},"4d10":function(e,n,t){"use strict";var i=t("7b4f");t.n(i).a},"6c58":function(e,n,t){"use strict";(function(e){var i=t("47a9");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("7eb4")),o=i(t("ee10")),s=t("9b69"),r=t("d9e3"),c=t("7508"),l=i(t("84f6")),u=t("6fe6"),m=t("7cec"),f={components:{lPainter:function(){Promise.all([t.e("pages_game/common/vendor"),t.e("pages_game/components/lime-painter/components/l-painter/l-painter")]).then(function(){return resolve(t("2ace"))}.bind(null,t)).catch(t.oe)},lPainterView:function(){Promise.all([t.e("pages_game/common/vendor"),t.e("pages_game/components/lime-painter/components/l-painter-view/l-painter-view")]).then(function(){return resolve(t("b62f"))}.bind(null,t)).catch(t.oe)},lPainterImage:function(){Promise.all([t.e("pages_game/common/vendor"),t.e("pages_game/components/lime-painter/components/l-painter-image/l-painter-image")]).then(function(){return resolve(t("27d7"))}.bind(null,t)).catch(t.oe)},lPainterText:function(){Promise.all([t.e("pages_game/common/vendor"),t.e("pages_game/components/lime-painter/components/l-painter-text/l-painter-text")]).then(function(){return resolve(t("121d"))}.bind(null,t)).catch(t.oe)}},data:function(){return{picture:"",picture2:"",show:!1,itemdata:{},businessType:1,beginTime:"",endTime:"",mpQrcode:"",id:"",page:"",pageType:"",iosFirstOpenCamera:!0,internationalAdKey:117,shareTopImage:""}},onLoad:function(n){this.itemdata=JSON.parse(decodeURIComponent(n.itemdata)),console.log(this.itemdata),this.businessType=n.businessType,3==this.businessType?(this.beginTime=(0,r.formatTime)(this.itemdata.beginTime,"yyyy.mm.dd"),this.endTime=(0,r.formatTime)(this.itemdata.endTime,"yyyy.mm.dd"),this.page="pages_plan/plan/plandetail",this.pageType="plandetail_event_info",this.id=this.itemdata.id,this.findShareImg(this.itemdata.planInfoId)):4==this.businessType&&(this.beginTime=(0,r.formatTime)(this.itemdata.beginTime,"yyyy.mm.dd"),this.endTime=(0,r.formatTime)(this.itemdata.endTime,"yyyy.mm.dd"),this.page="pages_plan/plan/specialtopicdetailwithouttab",this.pageType="specialtopic_withouttab_event_info",this.id=this.itemdata.id,this.findShareImg(this.itemdata.id)),console.log("this.businessType",this.businessType),this.getMpQrcode(),e.getStorageSync("iosFirstOpenCamera")&&(this.iosFirstOpenCamera=e.getStorageSync("iosFirstOpenCamera")),console.log("this.iosFirstOpenCamera",this.iosFirstOpenCamera)},methods:{fail:function(e){console.log(e)},done:function(e){console.log("绘制完成")},getMpQrcode:function(){var n=this;(0,s.get_wx_acodeun_limit)({wxSceneType:this.pageType,id:this.id}).then((function(e){})).catch((function(t){console.log("get_wx_acodeun_limiterr",t),n.mpQrcode="data:image/png;base64,"+e.arrayBufferToBase64(t),console.log("this.mpQrcode",n.mpQrcode)}))},save:function(e){var n=this;this.$refs.poster.canvasToTempFilePathSync({fileType:"jpg",quality:1,success:function(t){console.log(t.tempFilePath),n.picture2=t.tempFilePath,3==e?n.shareQqImg():4==e?n.saveImage():n.shareImg(e)},fail:function(e){console.log("???????????",e)}})},shareWxMini:function(){console.log("分享title",this.itemdata.name),console.log("分享image",this.itemdata.imageUrl),e.share({provider:"weixin",scene:"WXSceneSession",type:5,imageUrl:this.itemdata.imageUrl,title:this.itemdata.name,miniProgram:{id:u.mpGhId,path:this.page+"?id="+this.id,type:0,webUrl:"https://www.kgbs.top/"},success:function(e){console.log("分享成功:",JSON.stringify(e))},fail:function(e){console.log("分享失败:"+JSON.stringify(e))}})},shareImg:function(n){e.share({provider:"weixin",scene:1==n?"WXSceneSession":"WXSceneTimeline",type:2,imageUrl:this.picture2,success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(e){console.log("fail:"+JSON.stringify(e))}})},shareQqImg:function(){e.share({provider:"qq",type:2,Scene:"WXSenceTimeline",title:"知识岛",imageUrl:this.picture2,success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(e){console.log("fail:"+JSON.stringify(e))}})},saveImage:function(){var n=this;console.log("iosFirstOpenCamera",this.iosFirstOpenCamera),"ios"===e.getSystemInfoSync().platform&&this.iosFirstOpenCamera?(e.setStorageSync("iosFirstOpenCamera",!1),this.iosFirstOpenCamera=!1,e.saveImageToPhotosAlbum({filePath:this.picture2,success:function(n){e.showToast({title:"已保存到相册",icon:"success",duration:2e3})},fail:function(e){console.log("fail:"+JSON.stringify(e))}})):(0,c.permissionCheck)().then((function(t){e.saveImageToPhotosAlbum({filePath:n.picture2,success:function(n){e.showToast({title:"已保存到相册",icon:"success",duration:2e3})},fail:function(e){console.log("fail:"+JSON.stringify(e))}})})).catch((function(n){e.showModal({title:"手机权限",content:n,success:function(e){e.confirm?(0,c.phonePermissionSetting)():e.cancel}})}))},requestAndroidPermission:function(n){var t=this;return(0,o.default)(a.default.mark((function i(){var o;return a.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,l.default.requestAndroidPermission(n);case 2:1==(o=i.sent)?e.saveImageToPhotosAlbum({filePath:t.picture2,success:function(n){e.showToast({title:"已保存到相册",icon:"success",duration:2e3})},fail:function(e){console.log("fail:"+JSON.stringify(e))}}):0==o||e.showModal({content:"媒体和文件权限被拒绝，请开启",showCancel:!1,confirmText:"开启权限",success:function(e){e.confirm&&l.default.gotoAppPermissionSetting()}});case 4:case"end":return i.stop()}}),i)})))()},findShareImg:function(e){var n=this;(0,m.getAdInfoListByChannel)({channel:1,keyNumList:[this.internationalAdKey]}).then((function(t){if(t.data){console.log("接口的数据:"+JSON.stringify(t)),console.log("计划的id:"+e);for(var i=0;i<t.data[0].infoImgList.length;i++)if(t.data[0].infoImgList[i].resourceId==e){n.shareTopImage=t.data[0].infoImgList[i].imageUrl;break}}})).catch((function(e){}))},cancleFun:function(){e.navigateBack({delta:1})},back:function(){e.navigateBack()},showShareItem:function(){this.$refs.popup.open()}}};n.default=f}).call(this,t("df3c").default)},"7b4f":function(e,n,t){},a7de:function(e,n,t){"use strict";t.r(n);var i=t("3ab7"),a=t("b649");for(var o in a)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(o);t("4d10"),t("cd5c");var s=t("828b"),r=Object(s.a)(a.default,i.b,i.c,!1,null,"766ed66b",null,!1,i.a,void 0);n.default=r.exports},b649:function(e,n,t){"use strict";t.r(n);var i=t("6c58"),a=t.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n.default=a.a},cd5c:function(e,n,t){"use strict";var i=t("0fbd");t.n(i).a},e3a0:function(e,n,t){"use strict";(function(e,n){var i=t("47a9");t("42bd"),t("861b"),i(t("3240"));var a=i(t("a7de"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(a.default)}).call(this,t("3223").default,t("df3c").createPage)}},[["e3a0","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_game/gameevent/shareforplan.js'});require("pages_game/gameevent/shareforplan.js");$gwx2_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx2_XC_5 || [];
function gz$gwx2_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx2_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page data-v-02986890'])
Z([[2,'||'],[[2,'=='],[[7],[3,'businessType']],[1,4]],[[2,'=='],[[7],[3,'businessType']],[1,3]]])
Z([3,'#FFFFFF'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[4])
Z([1,false])
Z([3,'data-v-02986890'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]],[[4],[[5],[[5],[1,'^clickRight']],[[4],[[5],[[4],[[5],[1,'showShareItem']]]]]]]]])
Z([1,true])
Z([3,'left'])
Z(z[9])
Z([3,'分享页'])
Z([3,'55d86392-1'])
Z([[4],[[5],[1,'right']]])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[6])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z(z[9])
Z(z[10])
Z(z[9])
Z(z[12])
Z([3,'55d86392-2'])
Z(z[1])
Z(z[3])
Z([3,'data-v-02986890 vue-ref'])
Z([3,'height:1488rpx;background-color: #032AC7;position:relative;'])
Z([3,'poster'])
Z([1,2])
Z([3,'55d86392-3'])
Z([[4],[[5],[1,'default']]])
Z(z[3])
Z(z[7])
Z([3,'position:absolute;height:400rpx;top:1088rpx;object-fit:cover;width: 100%;'])
Z([[6],[[7],[3,'$root']],[3,'m1']])
Z([[2,'+'],[[2,'+'],[1,'55d86392-4'],[1,',']],[1,'55d86392-3']])
Z(z[3])
Z(z[7])
Z([3,'position:absolute;height: 1048rpx;padding-left:64rpx;padding-right:64rpx;padding-top:120rpx;'])
Z([[2,'+'],[[2,'+'],[1,'55d86392-5'],[1,',']],[1,'55d86392-3']])
Z(z[33])
Z(z[3])
Z(z[7])
Z([[2,'+'],[[2,'+'],[1,'55d86392-6'],[1,',']],[1,'55d86392-5']])
Z(z[33])
Z(z[3])
Z(z[7])
Z([3,'width:622rpx; height:714rpx;'])
Z([[6],[[7],[3,'$root']],[3,'m2']])
Z([[2,'+'],[[2,'+'],[1,'55d86392-7'],[1,',']],[1,'55d86392-6']])
Z(z[3])
Z(z[7])
Z([3,'position:absolute;top:712rpx;width:622rpx;height:248rpx;background-image:url(https://res.dasheng.top/app/icon/hospitality_share_bottom_bg.png);display:flex;'])
Z([[2,'+'],[[2,'+'],[1,'55d86392-8'],[1,',']],[1,'55d86392-6']])
Z(z[33])
Z(z[3])
Z(z[7])
Z([3,'width:254rpx;height:100%;text-align: center;'])
Z([[2,'+'],[[2,'+'],[1,'55d86392-9'],[1,',']],[1,'55d86392-8']])
Z(z[33])
Z(z[3])
Z(z[7])
Z([3,'margin-top:40rpx; width:120rpx; height:120rpx;'])
Z([[7],[3,'mpQrcode']])
Z([[2,'+'],[[2,'+'],[1,'55d86392-10'],[1,',']],[1,'55d86392-9']])
Z(z[3])
Z(z[7])
Z([3,'height:38rpx;border: 1px solid #FF3900; radius: 19rpx;padding:0rpx 24rpx;margin-top:8rpx;line-height:38rpx;color: #FF3900;font-size: 20rpx;'])
Z([3,'扫码了解详情'])
Z([[2,'+'],[[2,'+'],[1,'55d86392-11'],[1,',']],[1,'55d86392-9']])
Z(z[3])
Z(z[7])
Z([3,'margin-top:36rpx; width:2rpx; height:160rpx;'])
Z([[6],[[7],[3,'$root']],[3,'m3']])
Z([[2,'+'],[[2,'+'],[1,'55d86392-12'],[1,',']],[1,'55d86392-8']])
Z(z[3])
Z(z[7])
Z([3,'width:368rpx;height:100%;text-align: center;padding-top:40rpx;'])
Z([[2,'+'],[[2,'+'],[1,'55d86392-13'],[1,',']],[1,'55d86392-8']])
Z(z[33])
Z(z[3])
Z(z[7])
Z([3,'line-clamp: 2;text-align:left;width:280rpx;font-size: 32rpx;color: #061343;font-weight: bold;'])
Z([[6],[[7],[3,'itemdata']],[3,'name']])
Z([[2,'+'],[[2,'+'],[1,'55d86392-14'],[1,',']],[1,'55d86392-13']])
Z(z[3])
Z(z[7])
Z([3,'margin-top:8rpx;text-align:left;width:280rpx;font-size: 24rpx;color: #999999;line-clamp:2;font-family: PingFangSC-Regular;'])
Z([[2,'+'],[[2,'+'],[[7],[3,'beginTime']],[1,' - ']],[[7],[3,'endTime']]])
Z([[2,'+'],[[2,'+'],[1,'55d86392-15'],[1,',']],[1,'55d86392-13']])
Z(z[3])
Z(z[7])
Z(z[90])
Z([[6],[[7],[3,'itemdata']],[3,'addressDetail']])
Z([[2,'+'],[[2,'+'],[1,'55d86392-16'],[1,',']],[1,'55d86392-13']])
Z(z[3])
Z(z[7])
Z([3,'position:absolute;right:35rpx;top:709rpx; width:552rpx; height:6rpx;'])
Z([[6],[[7],[3,'$root']],[3,'m4']])
Z([[2,'+'],[[2,'+'],[1,'55d86392-17'],[1,',']],[1,'55d86392-6']])
Z(z[3])
Z(z[7])
Z([3,'position:absolute;width:32rpx;height:32rpx;background-color:#032AC7;left:-16rpx;top:696rpx;radius:50%;'])
Z([[2,'+'],[[2,'+'],[1,'55d86392-18'],[1,',']],[1,'55d86392-6']])
Z(z[3])
Z(z[7])
Z([3,'position:absolute;width:32rpx;height:32rpx;background-color:#032AC7;right:-16rpx;top:696rpx;radius:50%;'])
Z([[2,'+'],[[2,'+'],[1,'55d86392-19'],[1,',']],[1,'55d86392-6']])
Z(z[3])
Z(z[4])
Z(z[4])
Z(z[28])
Z([3,'width: 750rpx; height: 1200rpx; background-image:url(https://res.dasheng.top/app/icon/share_page_bg.png)'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^fail']],[[4],[[5],[[4],[[5],[1,'fail']]]]]]]],[[4],[[5],[[5],[1,'^done']],[[4],[[5],[[4],[[5],[1,'done']]]]]]]]])
Z(z[30])
Z([3,'url'])
Z(z[9])
Z(z[31])
Z([3,'55d86392-20'])
Z(z[33])
Z(z[3])
Z(z[7])
Z([3,'margin-top: 840rpx;width: 654rpx;margin-left: 48rpx;height: 328rpx;background-image:url(https://res.dasheng.top/app/icon/share_proinfo_bg.png)'])
Z([[2,'+'],[[2,'+'],[1,'55d86392-21'],[1,',']],[1,'55d86392-20']])
Z(z[33])
Z(z[3])
Z(z[7])
Z([3,'margin-left: 160rpx;margin-top: 30rpx;width: 480rpx;color: #FFF;font-size: 28rpx;font-weight: bold; line-clamp:1'])
Z(z[86])
Z([[2,'+'],[[2,'+'],[1,'55d86392-22'],[1,',']],[1,'55d86392-21']])
Z(z[3])
Z(z[7])
Z([3,'display: flex;flex-direction: row;padding: 20rpx 20rpx 0rpx 20rpx;align-items: center;height: 240rpx;'])
Z([[2,'+'],[[2,'+'],[1,'55d86392-23'],[1,',']],[1,'55d86392-21']])
Z(z[33])
Z(z[3])
Z(z[7])
Z([3,'object-fit: cover;  width: 120rpx; height: 160rpx;border-radius: 10rpx;'])
Z([[6],[[7],[3,'itemdata']],[3,'imageUrl']])
Z([[2,'+'],[[2,'+'],[1,'55d86392-24'],[1,',']],[1,'55d86392-23']])
Z(z[3])
Z(z[7])
Z([3,'display: flex;flex-direction: column;justify-content: space-between;margin-right: 30rpx;margin-left: 20rpx;width: 260rpx;height: 160rpx;'])
Z([[2,'+'],[[2,'+'],[1,'55d86392-25'],[1,',']],[1,'55d86392-23']])
Z(z[33])
Z(z[3])
Z(z[7])
Z([3,'color: #333;font-size: 24rpx;'])
Z([[2,'?:'],[[2,'=='],[[7],[3,'businessType']],[1,1]],[[6],[[7],[3,'itemdata']],[3,'timeIntervalText']],[[2,'+'],[[2,'+'],[[7],[3,'beginTime']],[1,'-']],[[7],[3,'endTime']]]])
Z([[2,'+'],[[2,'+'],[1,'55d86392-26'],[1,',']],[1,'55d86392-25']])
Z(z[3])
Z(z[7])
Z([3,'display: flex;flex-direction: column;'])
Z([[2,'+'],[[2,'+'],[1,'55d86392-27'],[1,',']],[1,'55d86392-25']])
Z(z[33])
Z([[2,'||'],[[2,'=='],[[7],[3,'businessType']],[1,1]],[[2,'=='],[[7],[3,'businessType']],[1,4]]])
Z(z[3])
Z(z[7])
Z([3,'color: #333;font-size: 24rpx;font-weight: bold;line-clamp:1'])
Z([[6],[[7],[3,'itemdata']],[3,'venueName']])
Z([[2,'+'],[[2,'+'],[1,'55d86392-28'],[1,',']],[1,'55d86392-27']])
Z(z[3])
Z(z[7])
Z([3,'color: #999;font-size: 20rpx;line-clamp:1'])
Z([[2,'?:'],[[2,'=='],[[7],[3,'businessType']],[1,1]],[[6],[[7],[3,'itemdata']],[3,'venueAddress']],[[6],[[7],[3,'itemdata']],[3,'addressDetail']]])
Z([[2,'+'],[[2,'+'],[1,'55d86392-29'],[1,',']],[1,'55d86392-27']])
Z(z[3])
Z(z[7])
Z([3,'object-fit: cover;  width: 140rpx; height: 140rpx;border-radius: 70rpx;'])
Z(z[66])
Z([[2,'+'],[[2,'+'],[1,'55d86392-30'],[1,',']],[1,'55d86392-23']])
Z(z[3])
Z(z[7])
Z([3,'color: #FF3900;font-size: 20rpx;width: 20rpx;line-height: 23rpx;margin-left: 10rpx;'])
Z([3,'查看活动详情'])
Z([[2,'+'],[[2,'+'],[1,'55d86392-31'],[1,',']],[1,'55d86392-23']])
Z([[2,'||'],[[2,'=='],[[7],[3,'businessType']],[1,1]],[[2,'=='],[[7],[3,'businessType']],[1,2]]])
Z(z[179])
Z(z[3])
Z(z[28])
Z([3,'popup'])
Z([3,'bottom'])
Z([3,'55d86392-32'])
Z(z[33])
Z(z[3])
Z(z[28])
Z([3,'confirm'])
Z([3,'55d86392-33'])
Z(z[3])
Z(z[28])
Z([3,'verifycode'])
Z([3,'55d86392-34'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx2_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx2_XC_5=true;
var x=['./pages_game/gameevent/sharepreview.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx2_XC_5_1()
var eVG=_n('view')
_rz(z,eVG,'class',0,e,s,gg)
var bWG=_v()
_(eVG,bWG)
if(_oz(z,1,e,s,gg)){bWG.wxVkey=1
var f1G=_mz(z,'uni-nav-bar',['backgroundColor',2,'bind:__l',1,'bind:clickLeft',2,'bind:clickRight',3,'border',4,'class',5,'data-event-opts',6,'fixed',7,'leftIcon',8,'statusBar',9,'title',10,'vueId',11,'vueSlots',12],[],e,s,gg)
_(bWG,f1G)
}
else{bWG.wxVkey=2
var c2G=_mz(z,'uni-nav-bar',['backgroundColor',15,'bind:__l',1,'bind:clickLeft',2,'border',3,'class',4,'data-event-opts',5,'fixed',6,'leftIcon',7,'statusBar',8,'title',9,'vueId',10],[],e,s,gg)
_(bWG,c2G)
}
var oXG=_v()
_(eVG,oXG)
if(_oz(z,26,e,s,gg)){oXG.wxVkey=1
var h3G=_mz(z,'l-painter',['bind:__l',27,'class',1,'css',2,'data-ref',3,'pixelRatio',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var o4G=_mz(z,'l-painter-image',['bind:__l',34,'class',1,'css',2,'src',3,'vueId',4],[],e,s,gg)
_(h3G,o4G)
var c5G=_mz(z,'l-painter-view',['bind:__l',39,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var o6G=_mz(z,'l-painter-view',['bind:__l',44,'class',1,'vueId',2,'vueSlots',3],[],e,s,gg)
var l7G=_mz(z,'l-painter-image',['bind:__l',48,'class',1,'css',2,'src',3,'vueId',4],[],e,s,gg)
_(o6G,l7G)
var a8G=_mz(z,'l-painter-view',['bind:__l',53,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var t9G=_mz(z,'l-painter-view',['bind:__l',58,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var e0G=_mz(z,'l-painter-image',['bind:__l',63,'class',1,'css',2,'src',3,'vueId',4],[],e,s,gg)
_(t9G,e0G)
var bAH=_mz(z,'l-painter-text',['bind:__l',68,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(t9G,bAH)
_(a8G,t9G)
var oBH=_mz(z,'l-painter-image',['bind:__l',73,'class',1,'css',2,'src',3,'vueId',4],[],e,s,gg)
_(a8G,oBH)
var xCH=_mz(z,'l-painter-view',['bind:__l',78,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var oDH=_mz(z,'l-painter-text',['bind:__l',83,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(xCH,oDH)
var fEH=_mz(z,'l-painter-text',['bind:__l',88,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(xCH,fEH)
var cFH=_mz(z,'l-painter-text',['bind:__l',93,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(xCH,cFH)
_(a8G,xCH)
_(o6G,a8G)
var hGH=_mz(z,'l-painter-image',['bind:__l',98,'class',1,'css',2,'src',3,'vueId',4],[],e,s,gg)
_(o6G,hGH)
var oHH=_mz(z,'l-painter-view',['bind:__l',103,'class',1,'css',2,'vueId',3],[],e,s,gg)
_(o6G,oHH)
var cIH=_mz(z,'l-painter-view',['bind:__l',107,'class',1,'css',2,'vueId',3],[],e,s,gg)
_(o6G,cIH)
_(c5G,o6G)
_(h3G,c5G)
_(oXG,h3G)
}
else{oXG.wxVkey=2
var oJH=_mz(z,'l-painter',['bind:__l',111,'bind:done',1,'bind:fail',2,'class',3,'css',4,'data-event-opts',5,'data-ref',6,'pathType',7,'performance',8,'pixelRatio',9,'vueId',10,'vueSlots',11],[],e,s,gg)
var lKH=_mz(z,'l-painter-view',['bind:__l',123,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var aLH=_mz(z,'l-painter-text',['bind:__l',128,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(lKH,aLH)
var tMH=_mz(z,'l-painter-view',['bind:__l',133,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var eNH=_mz(z,'l-painter-image',['bind:__l',138,'class',1,'css',2,'src',3,'vueId',4],[],e,s,gg)
_(tMH,eNH)
var bOH=_mz(z,'l-painter-view',['bind:__l',143,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var oPH=_mz(z,'l-painter-text',['bind:__l',148,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(bOH,oPH)
var xQH=_mz(z,'l-painter-view',['bind:__l',153,'class',1,'css',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var oRH=_v()
_(xQH,oRH)
if(_oz(z,158,e,s,gg)){oRH.wxVkey=1
var fSH=_mz(z,'l-painter-text',['bind:__l',159,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(oRH,fSH)
}
var cTH=_mz(z,'l-painter-text',['bind:__l',164,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(xQH,cTH)
oRH.wxXCkey=1
oRH.wxXCkey=3
_(bOH,xQH)
_(tMH,bOH)
var hUH=_mz(z,'l-painter-image',['bind:__l',169,'class',1,'css',2,'src',3,'vueId',4],[],e,s,gg)
_(tMH,hUH)
var oVH=_mz(z,'l-painter-text',['bind:__l',174,'class',1,'css',2,'text',3,'vueId',4],[],e,s,gg)
_(tMH,oVH)
_(lKH,tMH)
_(oJH,lKH)
_(oXG,oJH)
}
var xYG=_v()
_(eVG,xYG)
if(_oz(z,179,e,s,gg)){xYG.wxVkey=1
}
var oZG=_v()
_(eVG,oZG)
if(_oz(z,180,e,s,gg)){oZG.wxVkey=1
}
var cWH=_mz(z,'uni-popup',['bind:__l',181,'class',1,'data-ref',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(eVG,cWH)
var oXH=_mz(z,'pup-limit',['bind:__l',187,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(eVG,oXH)
var lYH=_mz(z,'verify-code-popup',['bind:__l',191,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(eVG,lYH)
bWG.wxXCkey=1
bWG.wxXCkey=3
bWG.wxXCkey=3
oXG.wxXCkey=1
oXG.wxXCkey=3
oXG.wxXCkey=3
xYG.wxXCkey=1
oZG.wxXCkey=1
_(r,eVG)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2_XC_5";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx2_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/gameevent/sharepreview.wxml'] = [$gwx2_XC_5, './pages_game/gameevent/sharepreview.wxml'];else __wxAppCode__['pages_game/gameevent/sharepreview.wxml'] = $gwx2_XC_5( './pages_game/gameevent/sharepreview.wxml' );
	;__wxRoute = "pages_game/gameevent/sharepreview";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/gameevent/sharepreview.js";define("pages_game/gameevent/sharepreview.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/gameevent/sharepreview"],{"3e9c":function(e,i,n){"use strict";n.d(i,"b",(function(){return s})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return t}));var t={uniNavBar:function(){return n.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"f9b6"))},uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,"5b0a"))},VerifyCodePopup:function(){return Promise.all([n.e("common/vendor"),n.e("components/VerifyCodePopup/VerifyCodePopup")]).then(n.bind(null,"6689"))}},s=function(){var e=this,i=(e.$createElement,e._self._c,4==e.businessType||3==e.businessType?e.$previewImageAddress("plan_share_icon.png"):null),n=4==e.businessType||3==e.businessType?e.$previewImageAddress("hospitality_share_bottom_img.png"):null,t=4==e.businessType||3==e.businessType?e.$previewImageAddress("hospitality_share_img.png"):null,s=4==e.businessType||3==e.businessType?e.$previewImageAddress("hospitality_share_divide_vertical.png"):null,a=4==e.businessType||3==e.businessType?e.$previewImageAddress("hospitality_share_divide.png"):null,o=1==e.businessType||2==e.businessType?e.$previewImageAddress("share-wechat.png"):null,r=1==e.businessType||2==e.businessType?e.$previewImageAddress("share-wechatq.png"):null,c=1==e.businessType||2==e.businessType?e.$previewImageAddress("share-qq.png"):null,u=1==e.businessType||2==e.businessType?e.$previewImageAddress("share-save.png"):null,p=e.$previewImageAddress("share_wechat_new.png"),l=e.$previewImageAddress("share_friend_new.png"),m=e.$previewImageAddress("share_qq_new.png"),d=e.$previewImageAddress("share_save_new.png");e.$mp.data=Object.assign({},{$root:{m0:i,m1:n,m2:t,m3:s,m4:a,m5:o,m6:r,m7:c,m8:u,m9:p,m10:l,m11:m,m12:d}})},a=[]},"568e":function(e,i,n){"use strict";n.r(i);var t=n("3e9c"),s=n("f72c");for(var a in s)["default"].indexOf(a)<0&&function(e){n.d(i,e,(function(){return s[e]}))}(a);n("980a");var o=n("828b"),r=Object(o.a)(s.default,t.b,t.c,!1,null,"02986890",null,!1,t.a,void 0);i.default=r.exports},"8d70":function(e,i,n){"use strict";(function(e){var t=n("47a9");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=t(n("7eb4")),a=t(n("ee10")),o=n("9b69"),r=n("d9e3"),c=n("7508"),u=t(n("84f6")),p=n("6fe6"),l={components:{lPainter:function(){Promise.all([n.e("pages_game/common/vendor"),n.e("pages_game/components/lime-painter/components/l-painter/l-painter")]).then(function(){return resolve(n("2ace"))}.bind(null,n)).catch(n.oe)},lPainterView:function(){Promise.all([n.e("pages_game/common/vendor"),n.e("pages_game/components/lime-painter/components/l-painter-view/l-painter-view")]).then(function(){return resolve(n("b62f"))}.bind(null,n)).catch(n.oe)},lPainterImage:function(){Promise.all([n.e("pages_game/common/vendor"),n.e("pages_game/components/lime-painter/components/l-painter-image/l-painter-image")]).then(function(){return resolve(n("27d7"))}.bind(null,n)).catch(n.oe)},lPainterText:function(){Promise.all([n.e("pages_game/common/vendor"),n.e("pages_game/components/lime-painter/components/l-painter-text/l-painter-text")]).then(function(){return resolve(n("121d"))}.bind(null,n)).catch(n.oe)}},data:function(){return{picture:"",picture2:"",show:!1,itemdata:{},businessType:1,beginTime:"",endTime:"",mpQrcode:"",id:"",page:"",pageType:"",iosFirstOpenCamera:!0}},onLoad:function(i){this.itemdata=JSON.parse(decodeURIComponent(i.itemdata)),console.log(this.itemdata),this.businessType=i.businessType,1==this.businessType?(this.page="pages_game/gameevent/eventdetail",this.pageType="ticket_event_info",this.id=this.itemdata.id):2==this.businessType?(this.beginTime=(0,r.formatTime)(this.itemdata.beginTime,"yyyy.mm.dd hh:mi"),this.endTime=(0,r.formatTime)(this.itemdata.endTime,"yyyy.mm.dd hh:mi"),this.page="/pages_activity/activity/detail",this.pageType="training_event_info",this.id=this.itemdata.id):3==this.businessType?(this.beginTime=(0,r.formatTime)(this.itemdata.beginTime,"yyyy.mm.dd"),this.endTime=(0,r.formatTime)(this.itemdata.endTime,"yyyy.mm.dd"),this.page="pages_plan/plan/plandetail",this.pageType="plandetail_event_info",this.id=this.itemdata.id):4==this.businessType&&(this.beginTime=(0,r.formatTime)(this.itemdata.beginTime,"yyyy.mm.dd"),this.endTime=(0,r.formatTime)(this.itemdata.endTime,"yyyy.mm.dd"),this.page="pages_plan/plan/specialtopicdetailwithouttab",this.pageType="specialtopic_withouttab_event_info",this.id=this.itemdata.id),console.log("this.businessType",this.businessType),this.getMpQrcode(),e.getStorageSync("iosFirstOpenCamera")&&(this.iosFirstOpenCamera=e.getStorageSync("iosFirstOpenCamera")),console.log("this.iosFirstOpenCamera",this.iosFirstOpenCamera)},methods:{fail:function(e){console.log(e)},done:function(e){console.log("绘制完成")},getMpQrcode:function(){var i=this;(0,o.get_wx_acodeun_limit)({wxSceneType:this.pageType,id:this.id}).then((function(e){})).catch((function(n){console.log("get_wx_acodeun_limiterr",n),i.mpQrcode="data:image/png;base64,"+e.arrayBufferToBase64(n),console.log("this.mpQrcode",i.mpQrcode)}))},save:function(e){var i=this;this.$refs.poster.canvasToTempFilePathSync({fileType:"jpg",quality:1,success:function(n){console.log(n.tempFilePath),i.picture2=n.tempFilePath,3==e?i.shareQqImg():4==e?i.saveImage():i.shareImg(e)},fail:function(e){console.log("???????????",e)}})},shareWxMini:function(){console.log("分享title",this.itemdata.name),console.log("分享image",this.itemdata.imageUrl),e.share({provider:"weixin",scene:"WXSceneSession",type:5,imageUrl:this.itemdata.imageUrl,title:this.itemdata.name,miniProgram:{id:p.mpGhId,path:this.page+"?id="+this.id,type:0,webUrl:"https://www.kgbs.top/"},success:function(e){console.log("分享成功:",JSON.stringify(e))},fail:function(e){console.log("分享失败:"+JSON.stringify(e))}})},shareImg:function(i){e.share({provider:"weixin",scene:1==i?"WXSceneSession":"WXSceneTimeline",type:2,imageUrl:this.picture2,success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(e){console.log("fail:"+JSON.stringify(e))}})},shareQqImg:function(){e.share({provider:"qq",type:2,Scene:"WXSenceTimeline",title:"知识岛",imageUrl:this.picture2,success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(e){console.log("fail:"+JSON.stringify(e))}})},saveImage:function(){var i=this;console.log("iosFirstOpenCamera",this.iosFirstOpenCamera),"ios"===e.getSystemInfoSync().platform&&this.iosFirstOpenCamera?(e.setStorageSync("iosFirstOpenCamera",!1),this.iosFirstOpenCamera=!1,e.saveImageToPhotosAlbum({filePath:this.picture2,success:function(i){e.showToast({title:"已保存到相册",icon:"success",duration:2e3})},fail:function(e){console.log("fail:"+JSON.stringify(e))}})):(0,c.permissionCheck)().then((function(n){e.saveImageToPhotosAlbum({filePath:i.picture2,success:function(i){e.showToast({title:"已保存到相册",icon:"success",duration:2e3})},fail:function(e){console.log("fail:"+JSON.stringify(e))}})})).catch((function(i){e.showModal({title:"手机权限",content:i,success:function(e){e.confirm?(0,c.phonePermissionSetting)():e.cancel}})}))},requestAndroidPermission:function(i){var n=this;return(0,a.default)(s.default.mark((function t(){var a;return s.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.default.requestAndroidPermission(i);case 2:1==(a=t.sent)?e.saveImageToPhotosAlbum({filePath:n.picture2,success:function(i){e.showToast({title:"已保存到相册",icon:"success",duration:2e3})},fail:function(e){console.log("fail:"+JSON.stringify(e))}}):0==a||e.showModal({content:"媒体和文件权限被拒绝，请开启",showCancel:!1,confirmText:"开启权限",success:function(e){e.confirm&&u.default.gotoAppPermissionSetting()}});case 4:case"end":return t.stop()}}),t)})))()},cancleFun:function(){e.navigateBack({delta:1})},back:function(){e.navigateBack()},showShareItem:function(){this.$refs.popup.open()}}};i.default=l}).call(this,n("df3c").default)},"980a":function(e,i,n){"use strict";var t=n("ba49");n.n(t).a},ba49:function(e,i,n){},ca76:function(e,i,n){"use strict";(function(e,i){var t=n("47a9");n("42bd"),n("861b"),t(n("3240"));var s=t(n("568e"));e.__webpack_require_UNI_MP_PLUGIN__=n,i(s.default)}).call(this,n("3223").default,n("df3c").createPage)},f72c:function(e,i,n){"use strict";n.r(i);var t=n("8d70"),s=n.n(t);for(var a in t)["default"].indexOf(a)<0&&function(e){n.d(i,e,(function(){return t[e]}))}(a);i.default=s.a}},[["ca76","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_game/gameevent/sharepreview.js'});require("pages_game/gameevent/sharepreview.js");$gwx2_XC_6=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx2_XC_6 || [];
function gz$gwx2_XC_6_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_6_1)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_6_1
__WXML_GLOBAL__.ops_cached.$gwx2_XC_6_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-966f4c82'])
Z([[2,'+'],[[2,'+'],[1,'--bgurl:'],[[2,'+'],[[2,'+'],[1,'url('],[[6],[[7],[3,'$root']],[3,'m0']]],[1,')']]],[1,';']])
Z([[2,'!='],[[7],[3,'platform']],[1,'TT']])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-966f4c82'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^back']],[[4],[[5],[[4],[[5],[1,'save']]]]]]]]])
Z([1,false])
Z([3,'f3464e3c-1'])
Z([3,'bodyContent data-v-966f4c82'])
Z([[7],[3,'bookingPhone']])
Z([[6],[[7],[3,'$root']],[3,'g0']])
Z(z[3])
Z(z[4])
Z([3,'data-v-966f4c82 vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^bookingSuccess']],[[4],[[5],[[4],[[5],[1,'bookingSuccess']]]]]]]]])
Z([3,'booking'])
Z([3,'f3464e3c-2'])
Z(z[3])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[14])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^closePurchaser']],[[4],[[5],[[4],[[5],[1,'hidePupop']]]]]]]],[[4],[[5],[[5],[1,'^addPurchaser']],[[4],[[5],[[4],[[5],[1,'addPurchaser']]]]]]]],[[4],[[5],[[5],[1,'^surePurchaser']],[[4],[[5],[[4],[[5],[1,'surePurchaser']]]]]]]],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'purchaserAar']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'popupPurchaser'])
Z([3,'6'])
Z([[7],[3,'purchaserAar']])
Z([3,'f3464e3c-3'])
Z(z[3])
Z(z[14])
Z([3,'confirm'])
Z([3,'f3464e3c-4'])
Z(z[3])
Z(z[14])
Z([3,'verifycode'])
Z([3,'f3464e3c-5'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_6_1);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_6_1
}
__WXML_GLOBAL__.ops_set.$gwx2_XC_6=z;
__WXML_GLOBAL__.ops_init.$gwx2_XC_6=true;
var x=['./pages_game/gameevent/ticketsTips.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx2_XC_6_1()
var t1H=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var e2H=_v()
_(t1H,e2H)
if(_oz(z,2,e,s,gg)){e2H.wxVkey=1
var b3H=_mz(z,'customtitlebar',['bind:__l',3,'bind:back',1,'class',2,'data-event-opts',3,'defaultBack',4,'vueId',5],[],e,s,gg)
_(e2H,b3H)
}
var o4H=_n('view')
_rz(z,o4H,'class',9,e,s,gg)
var x5H=_v()
_(o4H,x5H)
if(_oz(z,10,e,s,gg)){x5H.wxVkey=1
}
var o6H=_v()
_(o4H,o6H)
if(_oz(z,11,e,s,gg)){o6H.wxVkey=1
}
x5H.wxXCkey=1
o6H.wxXCkey=1
_(t1H,o4H)
var f7H=_mz(z,'tickets-booking',['bind:__l',12,'bind:bookingSuccess',1,'class',2,'data-event-opts',3,'data-ref',4,'vueId',5],[],e,s,gg)
_(t1H,f7H)
var c8H=_mz(z,'choosepurchaser',['bind:__l',18,'bind:addPurchaser',1,'bind:closePurchaser',2,'bind:input',3,'bind:surePurchaser',4,'class',5,'data-event-opts',6,'data-ref',7,'maxNum',8,'value',9,'vueId',10],[],e,s,gg)
_(t1H,c8H)
var h9H=_mz(z,'pup-limit',['bind:__l',29,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(t1H,h9H)
var o0H=_mz(z,'verify-code-popup',['bind:__l',33,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(t1H,o0H)
e2H.wxXCkey=1
e2H.wxXCkey=3
_(r,t1H)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2_XC_6";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx2_XC_6();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/gameevent/ticketsTips.wxml'] = [$gwx2_XC_6, './pages_game/gameevent/ticketsTips.wxml'];else __wxAppCode__['pages_game/gameevent/ticketsTips.wxml'] = $gwx2_XC_6( './pages_game/gameevent/ticketsTips.wxml' );
	;__wxRoute = "pages_game/gameevent/ticketsTips";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/gameevent/ticketsTips.js";define("pages_game/gameevent/ticketsTips.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/gameevent/ticketsTips"],{"43f9":function(e,o,t){"use strict";(function(e,o){var n=t("47a9");t("42bd"),t("861b"),n(t("3240"));var i=n(t("72eb"));e.__webpack_require_UNI_MP_PLUGIN__=t,o(i.default)}).call(this,t("3223").default,t("df3c").createPage)},"4abd":function(e,o,t){"use strict";t.d(o,"b",(function(){return i})),t.d(o,"c",(function(){return s})),t.d(o,"a",(function(){return n}));var n={customtitlebar:function(){return Promise.all([t.e("common/vendor"),t.e("components/customtitlebar/customtitlebar")]).then(t.bind(null,"e34b"))},VerifyCodePopup:function(){return Promise.all([t.e("common/vendor"),t.e("components/VerifyCodePopup/VerifyCodePopup")]).then(t.bind(null,"6689"))}},i=function(){var e=this,o=(e.$createElement,e._self._c,e.$previewImageAddress("tickets-tip-bg.png")),t=e.$previewImageAddress("purchaser.png"),n=e.$previewImageAddress("booking.png"),i=e.bookingPhone?e.$previewImageAddress("subscribed.png"):null,s=e.$previewImageAddress("addholder.png"),r=e.purchaserSelectAar&&e.purchaserSelectAar.length>0,a=r?e.__map(e.purchaserSelectAar,(function(o,t){return{$orig:e.__get_orig(o),m5:e.$previewImageAddress("delete-purchaser.png")}})):null;e.$mp.data=Object.assign({},{$root:{m0:o,m1:t,m2:n,m3:i,m4:s,g0:r,l0:a}})},s=[]},"72eb":function(e,o,t){"use strict";t.r(o);var n=t("4abd"),i=t("d671");for(var s in i)["default"].indexOf(s)<0&&function(e){t.d(o,e,(function(){return i[e]}))}(s);t("8fd0");var r=t("828b"),a=Object(r.a)(i.default,n.b,n.c,!1,null,"966f4c82",null,!1,n.a,void 0);o.default=a.exports},"88e2":function(e,o,t){},"8fd0":function(e,o,t){"use strict";var n=t("88e2");t.n(n).a},"9b51":function(e,o,t){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=t("e2af"),i=(t("6fe6"),{components:{Choosepurchaser:function(){t.e("pages_game/components/choosepurchaser/choosepurchaser").then(function(){return resolve(t("7e7d"))}.bind(null,t)).catch(t.oe)},TicketsBooking:function(){Promise.all([t.e("common/vendor"),t.e("pages_game/components/ticketsBooking/ticketsBooking")]).then(function(){return resolve(t("9a74"))}.bind(null,t)).catch(t.oe)}},data:function(){return{realname:"",realphone:"",bookingPhone:"",purchaserAar:[],purchaserSelectAar:[],showPopup:!1,selectPurchaserNum:0,singleChoose:!1,maxNum:6,platform:"WX",proId:"",showId:"",verboseName:"",saleSt:"",saleEt:"",bookingShowInfoList:[],eventChannel:null,isBookingStatus:!1}},onLoad:function(o){var t=this;console.log(o),this.eventChannel=this.getOpenerEventChannel(),this.realname=e.getStorageSync("authName"),this.realphone=e.getStorageSync("authphone"),this.proId=o.id,o.showId&&(this.showId=o.showId),o.verboseName&&(this.verboseName=o.verboseName),o.saleSt&&(this.saleSt=o.saleSt),o.saleEt&&(this.saleEt=o.saleEt),this.bookingShowInfoList=JSON.parse(e.getStorageSync("bookingShowInfoList")||"[]"),this.bookingShowInfoList&&this.bookingShowInfoList.length>0&&this.bookingShowInfoList.map((function(e){e.showId==t.showId&&(t.bookingPhone=t.realphone,t.purchaserSelectAar=e.purchaserSelectAar)}))},onShow:function(){console.log("onShow"),this.initBuyerList()},methods:{rightBooking:function(){this.$refs.booking.openPup(this.proId,this.showId,this.verboseName,this.saleSt,this.saleEt),this.showPopup=!0},bookingSuccess:function(o){this.bookingPhone=o,this.showPopup=!1,this.isBookingStatus=!0,this.bookingShowInfoList.push({showId:this.showId}),e.setStorageSync("bookingShowInfoList",JSON.stringify(this.bookingShowInfoList)),console.log("JSON.stringify(this.bookingShowInfoList)",JSON.stringify(this.bookingShowInfoList))},addHolder:function(){this.showPopup=!0,this.$refs.popupPurchaser.openPop()},removePurchaser:function(e){this.purchaserSelectAar.splice(e,1)},initBuyerList:function(){var e=this;(0,n.buyerList)({}).then((function(o){console.log("initBuyerList",o),e.purchaserAar=[];for(var t=0;t<o.data.length;t++)e.creterPurchaserData(o.data[t],!0)})).catch((function(e){console.log(e)}))},creterPurchaserData:function(e,o){this.purchaserAar.push({checked:!1,name:e.name,certificatesType:e.certificatesType,certificatesNo:e.certificatesNo,completeCertificatesNo:e.completeCertificatesNo,completePhone:e.completePhone,id:e.id,isSelect:!1,position:0,ableSelect:o})},hidePupop:function(){this.showPopup=!1},surePurchaser:function(e){console.log("res",e),console.log("purchaserAar",this.purchaserAar);var o=e;if(this.purchaserSelectAar=[],o&&o.length>0)for(var t=0;t<o.length;t++)o[t].isSelect&&this.purchaserSelectAar.push(o[t]);this.hidePupop()},addPurchaser:function(){e.navigateTo({url:"/pages_mine/mine/purchaseradd?type=2"})},save:function(){var o=this;this.bookingShowInfoList&&this.bookingShowInfoList.length>0&&(this.bookingShowInfoList.map((function(e){e.showId==o.showId&&(e.purchaserSelectAar=o.purchaserSelectAar)})),e.setStorageSync("bookingShowInfoList",JSON.stringify(this.bookingShowInfoList)),console.log("JSON.stringify(this.bookingShowInfoList)",JSON.stringify(this.bookingShowInfoList))),this.isBookingStatus&&this.eventChannel.emit("acceptData",!0),e.navigateBack()}}});o.default=i}).call(this,t("df3c").default)},d671:function(e,o,t){"use strict";t.r(o);var n=t("9b51"),i=t.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){t.d(o,e,(function(){return n[e]}))}(s);o.default=i.a}},[["43f9","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_game/gameevent/ticketsTips.js'});require("pages_game/gameevent/ticketsTips.js");$gwx2_XC_7=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx2_XC_7 || [];
function gz$gwx2_XC_7_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_7_1)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_7_1
__WXML_GLOBAL__.ops_cached.$gwx2_XC_7_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contentform data-v-fb62501a'])
Z([[2,'!='],[[7],[3,'platform']],[1,'TT']])
Z([3,'__l'])
Z([3,'data-v-fb62501a'])
Z([3,'z-index:100;'])
Z([3,'填写信息'])
Z([3,'#FFF'])
Z([3,'56be8888-1'])
Z([[2,'&&'],[[7],[3,'isUpdateInfo']],[[2,'!='],[[7],[3,'orderstatus']],[1,3]]])
Z([[7],[3,'rejectReason']])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[1,'data-v-fb62501a']],[1,'scroll-container']],[[4],[[5],[[2,'?:'],[[7],[3,'showPopup']],[1,'scroll-enabled'],[1,'']]]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'onSubmitData']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[4],[[5],[[5],[[5],[1,'basicinfo']],[1,'data-v-fb62501a']],[[2,'?:'],[[2,'>'],[[7],[3,'ticketNum']],[1,1]],[1,'basicinfo-pages'],[1,'']]]])
Z([[2,'&&'],[[7],[3,'entryNote']],[[2,'!='],[[7],[3,'entryNote']],[1,'null']]])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[15])
Z([[7],[3,'update']])
Z(z[3])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'columnType']],[1,0]])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'isRequired']],[1,1]])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'columnType']],[1,1]])
Z(z[22])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'columnType']],[1,2]])
Z([3,'upload-group data-v-fb62501a'])
Z(z[22])
Z(z[3])
Z([3,'display:flex;flex-direction:row;align-items:center;'])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'columnValue']])
Z([[2,'&&'],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'remark']],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'imgExample']],[1,'']]])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'imgExample']])
Z([[2,'&&'],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'remark']],[[2,'!='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'imgExample']],[1,'']]])
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'columnType']],[1,3]],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'columnType']],[1,7]]])
Z(z[22])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'columnType']],[1,4]])
Z(z[10])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'openCalendar']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'$1']],[[7],[3,'index']]]]],[[4],[[5],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'registInfoList']],[1,'']],[[7],[3,'index']]],[1,'activityInfoEntryId']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'registInfoList']],[1,'']],[[7],[3,'index']]],[1,'timeRules']]]]]]]]]]]]]]])
Z(z[22])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'columnType']],[1,5]])
Z([3,'name data-v-fb62501a'])
Z(z[22])
Z(z[2])
Z(z[10])
Z(z[10])
Z(z[10])
Z(z[3])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'onchange']],[[4],[[5],[[5],[1,'$0']],[1,'$event']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'registInfoList']],[1,'']],[[7],[3,'index']]],[1,'activityInfoEntryId']]]]]]]]]]]]]],[[4],[[5],[[5],[1,'^popupopened']],[[4],[[5],[[4],[[5],[1,'onPopupOpened']]]]]]]],[[4],[[5],[[5],[1,'^popupclosed']],[[4],[[5],[[4],[[5],[1,'onPopupClosed']]]]]]]]])
Z([[7],[3,'addressJson']])
Z([3,'选择省、市、区'])
Z([3,'z-index:1000;'])
Z([[2,'+'],[1,'56be8888-2-'],[[7],[3,'index']]])
Z([[4],[[5],[1,'default']]])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'columnType']],[1,6]])
Z(z[3])
Z(z[22])
Z(z[22])
Z([[2,'>'],[[7],[3,'ticketNum']],[1,1]])
Z(z[2])
Z([3,'data-v-fb62501a vue-ref'])
Z([3,'wenzi'])
Z([1,false])
Z([3,'bottom'])
Z([3,'56be8888-3'])
Z(z[54])
Z(z[2])
Z(z[10])
Z(z[10])
Z(z[3])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^closeCalendar']],[[4],[[5],[[4],[[5],[1,'closeCalendar']]]]]]]],[[4],[[5],[[5],[1,'^selectCalendar']],[[4],[[5],[[4],[[5],[1,'selectCalendar']]]]]]]]])
Z([[7],[3,'showDay']])
Z([[7],[3,'calendarValue']])
Z([[2,'+'],[[2,'+'],[1,'56be8888-4'],[1,',']],[1,'56be8888-3']])
Z(z[2])
Z(z[61])
Z([3,'textselect'])
Z(z[63])
Z(z[64])
Z([3,'56be8888-5'])
Z(z[54])
Z(z[2])
Z(z[10])
Z(z[10])
Z(z[3])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^closePickerText']],[[4],[[5],[[4],[[5],[1,'closePickerText']]]]]]]],[[4],[[5],[[5],[1,'^selectPickerText']],[[4],[[5],[[4],[[5],[1,'selectPickerText']]]]]]]]])
Z([[7],[3,'dataSelect']])
Z([[7],[3,'selectcontent']])
Z([[2,'+'],[[2,'+'],[1,'56be8888-6'],[1,',']],[1,'56be8888-5']])
Z(z[2])
Z(z[61])
Z([3,'confirm'])
Z([3,'56be8888-7'])
Z(z[2])
Z(z[61])
Z([3,'verifycode'])
Z([3,'56be8888-8'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_7_1);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_7_1
}
__WXML_GLOBAL__.ops_set.$gwx2_XC_7=z;
__WXML_GLOBAL__.ops_init.$gwx2_XC_7=true;
var x=['./pages_game/gameevent/writeEventForm.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx2_XC_7_1()
var oBI=_n('view')
_rz(z,oBI,'class',0,e,s,gg)
var lCI=_v()
_(oBI,lCI)
if(_oz(z,1,e,s,gg)){lCI.wxVkey=1
var tEI=_mz(z,'customtitlebar',['bind:__l',2,'class',1,'style',2,'title',3,'titleTextColor',4,'vueId',5],[],e,s,gg)
_(lCI,tEI)
}
var aDI=_v()
_(oBI,aDI)
if(_oz(z,8,e,s,gg)){aDI.wxVkey=1
var eFI=_v()
_(aDI,eFI)
if(_oz(z,9,e,s,gg)){eFI.wxVkey=1
}
eFI.wxXCkey=1
}
var bGI=_mz(z,'form',['bindsubmit',10,'class',1,'data-event-opts',2],[],e,s,gg)
var oHI=_n('view')
_rz(z,oHI,'class',13,e,s,gg)
var xII=_v()
_(oHI,xII)
if(_oz(z,14,e,s,gg)){xII.wxVkey=1
}
var fKI=_v()
_(oHI,fKI)
var cLI=function(oNI,hMI,cOI,gg){
var lQI=_v()
_(cOI,lQI)
if(_oz(z,19,oNI,hMI,gg)){lQI.wxVkey=1
var aRI=_n('view')
_rz(z,aRI,'class',20,oNI,hMI,gg)
var tSI=_v()
_(aRI,tSI)
if(_oz(z,21,oNI,hMI,gg)){tSI.wxVkey=1
var eTI=_v()
_(tSI,eTI)
if(_oz(z,22,oNI,hMI,gg)){eTI.wxVkey=1
}
eTI.wxXCkey=1
}
else{tSI.wxVkey=2
var bUI=_v()
_(tSI,bUI)
if(_oz(z,23,oNI,hMI,gg)){bUI.wxVkey=1
var oVI=_v()
_(bUI,oVI)
if(_oz(z,24,oNI,hMI,gg)){oVI.wxVkey=1
}
oVI.wxXCkey=1
}
else{bUI.wxVkey=2
var xWI=_v()
_(bUI,xWI)
if(_oz(z,25,oNI,hMI,gg)){xWI.wxVkey=1
var oXI=_n('view')
_rz(z,oXI,'class',26,oNI,hMI,gg)
var fYI=_v()
_(oXI,fYI)
if(_oz(z,27,oNI,hMI,gg)){fYI.wxVkey=1
}
var h1I=_mz(z,'view',['class',28,'style',1],[],oNI,hMI,gg)
var o2I=_v()
_(h1I,o2I)
if(_oz(z,30,oNI,hMI,gg)){o2I.wxVkey=1
}
var c3I=_v()
_(h1I,c3I)
if(_oz(z,31,oNI,hMI,gg)){c3I.wxVkey=1
}
var o4I=_v()
_(h1I,o4I)
if(_oz(z,32,oNI,hMI,gg)){o4I.wxVkey=1
}
o2I.wxXCkey=1
c3I.wxXCkey=1
o4I.wxXCkey=1
_(oXI,h1I)
var cZI=_v()
_(oXI,cZI)
if(_oz(z,33,oNI,hMI,gg)){cZI.wxVkey=1
}
fYI.wxXCkey=1
cZI.wxXCkey=1
_(xWI,oXI)
}
else{xWI.wxVkey=2
var l5I=_v()
_(xWI,l5I)
if(_oz(z,34,oNI,hMI,gg)){l5I.wxVkey=1
var a6I=_v()
_(l5I,a6I)
if(_oz(z,35,oNI,hMI,gg)){a6I.wxVkey=1
}
a6I.wxXCkey=1
}
else{l5I.wxVkey=2
var t7I=_v()
_(l5I,t7I)
if(_oz(z,36,oNI,hMI,gg)){t7I.wxVkey=1
var e8I=_mz(z,'view',['bindtap',37,'class',1,'data-event-opts',2],[],oNI,hMI,gg)
var b9I=_v()
_(e8I,b9I)
if(_oz(z,40,oNI,hMI,gg)){b9I.wxVkey=1
}
b9I.wxXCkey=1
_(t7I,e8I)
}
else{t7I.wxVkey=2
var o0I=_v()
_(t7I,o0I)
if(_oz(z,41,oNI,hMI,gg)){o0I.wxVkey=1
var xAJ=_n('view')
_rz(z,xAJ,'class',42,oNI,hMI,gg)
var oBJ=_v()
_(xAJ,oBJ)
if(_oz(z,43,oNI,hMI,gg)){oBJ.wxVkey=1
}
var fCJ=_mz(z,'uni-data-picker',['bind:__l',44,'bind:change',1,'bind:popupclosed',2,'bind:popupopened',3,'class',4,'data-event-opts',5,'localdata',6,'popupTitle',7,'style',8,'vueId',9,'vueSlots',10],[],oNI,hMI,gg)
_(xAJ,fCJ)
oBJ.wxXCkey=1
_(o0I,xAJ)
}
else{o0I.wxVkey=2
var cDJ=_v()
_(o0I,cDJ)
if(_oz(z,55,oNI,hMI,gg)){cDJ.wxVkey=1
var hEJ=_n('view')
_rz(z,hEJ,'class',56,oNI,hMI,gg)
var oFJ=_v()
_(hEJ,oFJ)
if(_oz(z,57,oNI,hMI,gg)){oFJ.wxVkey=1
}
var cGJ=_v()
_(hEJ,cGJ)
if(_oz(z,58,oNI,hMI,gg)){cGJ.wxVkey=1
}
oFJ.wxXCkey=1
cGJ.wxXCkey=1
_(cDJ,hEJ)
}
cDJ.wxXCkey=1
}
o0I.wxXCkey=1
o0I.wxXCkey=3
}
t7I.wxXCkey=1
t7I.wxXCkey=3
}
l5I.wxXCkey=1
l5I.wxXCkey=3
}
xWI.wxXCkey=1
xWI.wxXCkey=3
}
bUI.wxXCkey=1
bUI.wxXCkey=3
}
tSI.wxXCkey=1
tSI.wxXCkey=3
_(lQI,aRI)
}
lQI.wxXCkey=1
lQI.wxXCkey=3
return cOI
}
fKI.wxXCkey=4
_2z(z,17,cLI,e,s,gg,fKI,'item','index','index')
var oJI=_v()
_(oHI,oJI)
if(_oz(z,59,e,s,gg)){oJI.wxVkey=1
}
xII.wxXCkey=1
oJI.wxXCkey=1
_(bGI,oHI)
var oHJ=_mz(z,'uni-popup',['bind:__l',60,'class',1,'data-ref',2,'maskClick',3,'type',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var lIJ=_mz(z,'pickercalendar',['bind:__l',67,'bind:closeCalendar',1,'bind:selectCalendar',2,'class',3,'data-event-opts',4,'showDay',5,'value',6,'vueId',7],[],e,s,gg)
_(oHJ,lIJ)
_(bGI,oHJ)
var aJJ=_mz(z,'uni-popup',['bind:__l',75,'class',1,'data-ref',2,'maskClick',3,'type',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var tKJ=_mz(z,'pickerbottomtext',['bind:__l',82,'bind:closePickerText',1,'bind:selectPickerText',2,'class',3,'data-event-opts',4,'dataSelect',5,'selectcontent',6,'vueId',7],[],e,s,gg)
_(aJJ,tKJ)
_(bGI,aJJ)
_(oBI,bGI)
var eLJ=_mz(z,'pup-limit',['bind:__l',90,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(oBI,eLJ)
var bMJ=_mz(z,'verify-code-popup',['bind:__l',94,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(oBI,bMJ)
lCI.wxXCkey=1
lCI.wxXCkey=3
aDI.wxXCkey=1
_(r,oBI)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2_XC_7";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx2_XC_7();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/gameevent/writeEventForm.wxml'] = [$gwx2_XC_7, './pages_game/gameevent/writeEventForm.wxml'];else __wxAppCode__['pages_game/gameevent/writeEventForm.wxml'] = $gwx2_XC_7( './pages_game/gameevent/writeEventForm.wxml' );
	;__wxRoute = "pages_game/gameevent/writeEventForm";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/gameevent/writeEventForm.js";define("pages_game/gameevent/writeEventForm.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/gameevent/writeEventForm"],{1996:function(e,t,n){"use strict";(function(e,t){var o=n("47a9");n("42bd"),n("861b"),o(n("3240"));var a=o(n("8ed1"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("3223").default,n("df3c").createPage)},"37e1":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var o={customtitlebar:function(){return Promise.all([n.e("common/vendor"),n.e("components/customtitlebar/customtitlebar")]).then(n.bind(null,"e34b"))},uniDataPicker:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker")]).then(n.bind(null,"322d"))},uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,"5b0a"))},pickercalendar:function(){return n.e("components/pickercalendar/pickercalendar").then(n.bind(null,"7e33"))},pickerbottomtext:function(){return n.e("components/pickerbottomtext/pickerbottomtext").then(n.bind(null,"9a88"))},VerifyCodePopup:function(){return Promise.all([n.e("common/vendor"),n.e("components/VerifyCodePopup/VerifyCodePopup")]).then(n.bind(null,"6689"))}},a=function(){var e=this,t=(e.$createElement,e._self._c,e.$previewImageAddress("event_detail_blur_foreground.png")),n=e.isUpdateInfo&&3!=e.orderstatus?e.$previewImageAddress("entry-checkreject.png"):null,o=e.$previewImageAddress("signup_form.png"),a=e.__map(e.registInfoList,(function(t,n){return{$orig:e.__get_orig(t),m3:e.update&&0!=t.columnType&&1!=t.columnType&&2==t.columnType&&!t.columnValue?e.$previewImageAddress("upload-img.png"):null,m4:e.update&&0!=t.columnType&&1!=t.columnType&&2==t.columnType&&t.columnValue?e.$previewImageAddress("close_circle_black.png"):null,m5:!e.update||0==t.columnType||1==t.columnType||2==t.columnType||3!=t.columnType&&7!=t.columnType||7!=t.columnType?null:e.$previewImageAddress("arrow_down_black.png"),m6:!e.update||0==t.columnType||1==t.columnType||2==t.columnType||3!=t.columnType&&7!=t.columnType||7==t.columnType?null:e.$previewImageAddress("arrow_down_black.png"),m7:e.update&&0!=t.columnType&&1!=t.columnType&&2!=t.columnType&&3!=t.columnType&&7!=t.columnType&&4==t.columnType?e.$previewImageAddress("arrow_down_black.png"):null,m8:e.update&&0!=t.columnType&&1!=t.columnType&&2!=t.columnType&&3!=t.columnType&&7!=t.columnType&&4!=t.columnType&&5==t.columnType?e.$previewImageAddress("arrow_down_black.png"):null,m9:e.update&&0!=t.columnType&&1!=t.columnType&&2!=t.columnType&&3!=t.columnType&&7!=t.columnType&&4!=t.columnType&&5!=t.columnType&&6==t.columnType?e.$previewImageAddress("arrow_down_black.png"):null}})),i=e.ticketNum>1?e.$previewImageAddress(e.pageNum>0?"pageback.png":"pageback-un.png"):null,u=e.ticketNum>1?e.$previewImageAddress(e.pageNum==e.ticketNum-1?"pageforward-un.png":"pageforward.png"):null;e.$mp.data=Object.assign({},{$root:{m0:t,m1:n,m2:o,l0:a,m10:i,m11:u}})},i=[]},"477c":function(e,t,n){},"5b7e":function(e,t,n){},"6dae":function(e,t,n){"use strict";var o=n("74ac");n.n(o).a},"74ac":function(e,t,n){},"8ed1":function(e,t,n){"use strict";n.r(t);var o=n("37e1"),a=n("cc05");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("ff4c"),n("6dae"),n("d27c");var u=n("828b"),s=Object(u.a)(a.default,o.b,o.c,!1,null,"fb62501a",null,!1,o.a,void 0);t.default=s.exports},cc05:function(e,t,n){"use strict";n.r(t);var o=n("efa2"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t.default=a.a},d27c:function(e,t,n){"use strict";var o=n("5b7e");n.n(o).a},efa2:function(e,t,n){"use strict";(function(e){var o=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o(n("7eb4"));var a=o(n("34cf")),i=(o(n("ee10")),n("6fe6")),u=n("4380"),s=n("d9e3"),l=(n("d3aa"),o(n("84f6")),{data:function(){var e=new Date;return{registInfoList:[],formData:[],memberRequestList:[],isSubmit:!1,ticketNum:0,disabled:!1,doucument:[],cardnotype:"",addressJson:[],addresstitle:"",showDay:!0,currentKey:"",pageNum:0,update:!0,dataSelect:[],selectcontent:"",calendarValue:[],calendarValueLocal:[e.getFullYear()-1920,e.getMonth()+1-1,e.getDate()-1],imageUrl:"",entryNote:"",platform:"WX",isUpdateInfo:!1,orderstatus:-1,rejectReason:"",entryDetailId:"",localKey:"",internationalCitys:[],isOneVoteOneCert:0,showPopup:!1}},onLoad:function(e){var t=this;console.log("writeformonLoad++",e),this.isSubmit=!0,e.isUpdateInfo&&(this.isUpdateInfo=e.isUpdateInfo),this.ticketNum=e.ticketNum,this.imageUrl=e.imageUrl,this.entryNote=e.entryNote,e.isOneVoteOneCert&&(this.isOneVoteOneCert=e.isOneVoteOneCert),this.getOpenerEventChannel().on("acceptDataFromOpenerPage",(function(e){console.log("eventChannel",e.data),console.log("eventChannel",t.pageNum),t.formData=e.data,t.formData&&t.formData.length>0&&(t.registInfoList=t.formData[t.pageNum].memberRequestList,t.formData[t.pageNum].rejectReason&&(t.rejectReason=t.formData[t.pageNum].rejectReason),t.formData[t.pageNum].id&&(t.entryDetailId=t.formData[t.pageNum].id),console.log("this.formData",t.formData+"---"+t.pageNum),console.log("this.registInfoList",t.registInfoList)),e.orderstatus&&(t.orderstatus=e.orderstatus)})),this.initOssJsonData()},methods:{back:function(){e.navigateBack({delta:1})},pageback:function(){0!=this.pageNum&&(this.pageNum=this.pageNum-1),this.registInfoList=this.formData[this.pageNum].memberRequestList},pageforward:function(){this.pageNum+1<this.ticketNum&&(this.pageNum=this.pageNum+1),this.registInfoList=this.formData[this.pageNum].memberRequestList},onSubmitData:function(){for(var t=0;t<this.formData.length;t++)for(var n=0;n<this.formData[t].memberRequestList.length;n++)if(1==this.formData[t].memberRequestList[n].isRequired&&!this.formData[t].memberRequestList[n].columnValue)return void e.showToast({title:"".concat(this.formData[t].memberRequestList[n].columnName,"不能为空"),icon:"none"});if(console.log("123",this.formData),this.isUpdateInfo)this.updateEntryInfo();else{var o=getCurrentPages();o[o.length-2].$vm.getSignupInfo(this.formData),e.navigateBack({delta:1})}},updateEntryInfo:function(){(0,u.updateEntryMember)({entryDetailId:this.entryDetailId,memberList:this.registInfoList}).then((function(t){console.log(t),e.navigateBack({delta:1})})).catch((function(e){console.log(e)}))},handleHead:function(t,n){console.log("handleHead",t+"___"+n),this.localKey=t;var o=this;e.navigateTo({url:"/pages_config/uploadImg/uploadImg",success:function(e){e.eventChannel.on("acceptImgData",(function(e){console.log("acceptImgData",e),o.registInfoList.map((function(t){t.activityInfoEntryId==o.localKey&&(t.columnValue=e)}))}))}})},deleteImg:function(e){this.formData[this.pageNum].memberRequestList[e].columnValue="",this.registInfoList[e].columnValue=""},getInputValue:function(e,t,n){var o=this;this.currentType=t,console.log(e,n.detail.value),console.log("registInfoList: ",this.registInfoList),this.registInfoList.map((function(t){t.activityInfoEntryId==e&&(6==o.currentType?(t.columnValueLocal2=o.$inputrule.inputTextTrim(n.detail.value),t.columnValue=t.columnValueLocal1+"-"+t.columnValueLocal2,console.log("item.columnValue",t.columnValue)):t.columnValue=o.$inputrule.inputTextTrim(n.detail.value))}))},change:function(e,t){console.log("changeSelect",e+"---++"+t),this.registInfoList.map((function(n){n.activityInfoEntryId==e&&t<n.typeOptions.length&&(n.columnValue=n.typeOptions[t].text,n.selectValue=t,console.log("changeSelect",n.typeOptions[t].text+"---++"+n.selectValue))}))},onchange:function(e,t){var n,o=(0,a.default)(t.detail.value,3),i=o[0],u=o[1],s=o[2];n=null==u&&null==s?i.text:null==s?i.text+u.text:i.text+u.text+s.text,this.registInfoList.map((function(t){t.activityInfoEntryId==e&&(t.columnValue=n)}))},bindPickerChange:function(e,t,n,o){var a=this;if(console.log("val-1",o.detail.value),console.log("val-2",e+"---"+t+"---"+n),7==t)for(var i=0;i<this.internationalCitys.length;i++)o.detail.value==i&&this.registInfoList.map((function(t){t.activityInfoEntryId==e&&(t.columnValue=a.internationalCitys[i].name,console.log("item.columnValue",t.columnValue))}));else{var u=this.registInfoList[n].typeOptions;if(u&&u.length>0){var s="";u.map((function(n){o.detail.value==n.value&&(s=n.text,a.registInfoList.map((function(n){n.activityInfoEntryId==e&&(6==t?(n.columnValueLocal1=s,n.columnValue=n.columnValueLocal1+"-"+n.columnValueLocal2):n.columnValue=s,console.log("item.columnValue",n.columnValue))})))}))}}},closePickerText:function(){this.$refs.textselect.close()},openPickerText:function(e,t){var n=this;this.currentKey=e,this.registInfoList[t].typeOptions?this.dataSelect=this.registInfoList[t].typeOptions:this.dataSelect=this.formData[this.pageNum].infoEntryList[t].typeOptions,this.registInfoList.map((function(t){t.activityInfoEntryId==e&&(n.selectcontent=t.columnValue)})),console.log("openPickerText",this.dataSelect),this.$refs.textselect.open()},selectPickerText:function(e){var t=this;console.log("selectPickerText",e),this.registInfoList.map((function(n){n.activityInfoEntryId==t.currentKey&&(n.columnValue=e)})),this.closePickerText(),this.update=!1,this.update=!0},closeCalendar:function(){this.$refs.wenzi.close()},openCalendar:function(e,t,n){var o=this;if(this.currentKey=e,console.log("openCalendar",e+"---"+t+"---"+n),this.calendarValue=[],this.registInfoList[n].columnValue){var a=(0,s.shijiantime)(this.registInfoList[n].columnValue,0),i=(0,s.shijiantime)(this.registInfoList[n].columnValue,1);if(1==t)setTimeout((function(){o.calendarValue=[a,i]}),0);else{var u=(0,s.shijiantime)(this.registInfoList[n].columnValue,2);setTimeout((function(){o.calendarValue=[a,i,u]}),0)}console.log("this.calendarValue",this.calendarValue)}else this.calendarValue=this.calendarValueLocal;this.showDay=1!=t,this.$refs.wenzi.open()},selectCalendar:function(e){var t=this;console.log(e),this.registInfoList.map((function(n){n.activityInfoEntryId==t.currentKey&&(n.columnValue=e)})),this.closeCalendar(),this.update=!1,this.update=!0},getDate:function(e){var t=new Date,n=t.getFullYear(),o=t.getMonth()+1,a=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),o=o>9?o:"0"+o,a=a>9?a:"0"+a,"".concat(n,"年").concat(o,"月").concat(a,"日")},clcikShow:function(t){t||e.showToast({title:"请选择持票人",icon:"none"})},initOssJsonData:function(){var t=this;e.request({url:i.ossUrl+"cms/ds_ds_district_international.json",success:function(e){t.internationalCitys=e.data}}),e.request({url:i.ossUrl+"cms/ds_ds_district_address.json",success:function(e){t.addressJson=e.data}})},onPopupOpened:function(e){this.showPopup=!0},onPopupClosed:function(e){this.showPopup=!1}}});t.default=l}).call(this,n("df3c").default)},ff4c:function(e,t,n){"use strict";var o=n("477c");n.n(o).a}},[["1996","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_game/gameevent/writeEventForm.js'});require("pages_game/gameevent/writeEventForm.js");$gwx2_XC_8=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx2_XC_8 || [];
function gz$gwx2_XC_8_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_8_1)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_8_1
__WXML_GLOBAL__.ops_cached.$gwx2_XC_8_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-2e834fe3 vue-ref'])
Z([3,'popup'])
Z([1,false])
Z([3,'bottom'])
Z([3,'d0f0b194-1'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[7])
Z([3,'__e'])
Z([3,'send-radio-lable data-v-2e834fe3'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'radioChangePurchaser']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'value']],[1,'']],[[7],[3,'index']]],[1,'ableSelect']]]]]]]]]]]]]]])
Z([[2,'=='],[[7],[3,'maxNum']],[1,1]])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'position']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_8_1);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_8_1
}
__WXML_GLOBAL__.ops_set.$gwx2_XC_8=z;
__WXML_GLOBAL__.ops_init.$gwx2_XC_8=true;
var x=['./pages_game/components/choosepurchaser/choosepurchaser.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx2_XC_8_1()
var xOJ=_mz(z,'uni-popup',['bind:__l',0,'class',1,'data-ref',1,'maskClick',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var oPJ=_v()
_(xOJ,oPJ)
var fQJ=function(hSJ,cRJ,oTJ,gg){
var oVJ=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],hSJ,cRJ,gg)
var lWJ=_v()
_(oVJ,lWJ)
if(_oz(z,14,hSJ,cRJ,gg)){lWJ.wxVkey=1
}
else{lWJ.wxVkey=2
var aXJ=_v()
_(lWJ,aXJ)
if(_oz(z,15,hSJ,cRJ,gg)){aXJ.wxVkey=1
}
aXJ.wxXCkey=1
}
lWJ.wxXCkey=1
_(oTJ,oVJ)
return oTJ
}
oPJ.wxXCkey=2
_2z(z,9,fQJ,e,s,gg,oPJ,'item','index','index')
_(r,xOJ)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2_XC_8";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx2_XC_8();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/choosepurchaser/choosepurchaser.wxml'] = [$gwx2_XC_8, './pages_game/components/choosepurchaser/choosepurchaser.wxml'];else __wxAppCode__['pages_game/components/choosepurchaser/choosepurchaser.wxml'] = $gwx2_XC_8( './pages_game/components/choosepurchaser/choosepurchaser.wxml' );
	;__wxRoute = "pages_game/components/choosepurchaser/choosepurchaser";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/choosepurchaser/choosepurchaser.js";define("pages_game/components/choosepurchaser/choosepurchaser.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/choosepurchaser/choosepurchaser"],{"353d":function(e,n,r){"use strict";r.r(n);var t=r("97ce"),o=r.n(t);for(var s in t)["default"].indexOf(s)<0&&function(e){r.d(n,e,(function(){return t[e]}))}(s);n.default=o.a},"7e7d":function(e,n,r){"use strict";r.r(n);var t=r("f546"),o=r("353d");for(var s in o)["default"].indexOf(s)<0&&function(e){r.d(n,e,(function(){return o[e]}))}(s);r("8f6a");var i=r("828b"),a=Object(i.a)(o.default,t.b,t.c,!1,null,"2e834fe3",null,!1,t.a,void 0);n.default=a.exports},"8f6a":function(e,n,r){"use strict";var t=r("ef5f");r.n(t).a},"97ce":function(e,n,r){"use strict";(function(e){var t=r("47a9");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t(r("af34")),s={name:"cart",props:{value:{type:Array,required:!0},maxNum:{type:Number,default:1},idcardTypesLimitMsg:{type:String,default:""}},data:function(){return{newArray:[]}},methods:{openPop:function(){this.$refs.popup.open()},closePop:function(){this.$emit("closePurchaser"),this.$refs.popup.close()},radioChangePurchaser:function(n,r){r?this.choosePurchaser(n):e.showToast({title:this.idcardTypesLimitMsg,icon:"none"})},choosePurchaser:function(n){if(this.newArray=(0,o.default)(this.value),1==this.maxNum)this.newArray[n].isSelect||this.newArray.forEach((function(e){e.isSelect=!1})),this.newArray[n].isSelect=!this.newArray[n].isSelect;else{if(this.newArray[n].isSelect){var r=this.newArray[n].position;for(this.newArray[n].position=0,console.log("currentNum",r),console.log("this.newArray",this.newArray),i=0;i<this.newArray.length;i++)r<this.newArray[i].position&&(this.newArray[i].position=this.newArray[i].position-1)}else{var t=this.newArray.map((function(e,n){return e.isSelect?n:-1})).filter((function(e){return-1!==e}));if((null==t?void 0:t.length)==this.maxNum)return void e.showToast({title:"持票人数够了",icon:"none"});for(var s=0,i=0;i<this.newArray.length;i++)0!=this.newArray[i].position&&s<=this.newArray[i].position&&(s=this.newArray[i].position);console.log("currentMaxNum",s),this.newArray[n].position=s+1}this.newArray[n].isSelect=!this.newArray[n].isSelect}this.$emit("input",this.newArray)},addPurchaser:function(){this.$emit("addPurchaser")},surePurchaser:function(){var e;(null===(e=this.newArray)||void 0===e?void 0:e.length)>0&&this.$emit("surePurchaser",this.newArray),this.closePop()}}};n.default=s}).call(this,r("df3c").default)},ef5f:function(e,n,r){},f546:function(e,n,r){"use strict";r.d(n,"b",(function(){return o})),r.d(n,"c",(function(){return s})),r.d(n,"a",(function(){return t}));var t={uniPopup:function(){return r.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(r.bind(null,"5b0a"))}},o=function(){var e=this,n=(e.$createElement,e._self._c,e.$previewImageAddress("close_black.png")),r=e.__map(e.value,(function(n,r){return{$orig:e.__get_orig(n),m1:1==e.maxNum&&n.ableSelect&&n.isSelect?e.$previewImageAddress("address_default.png"):null,m2:1==e.maxNum&&n.ableSelect&&!n.isSelect?e.$previewImageAddress("checbox_default.png"):null,m3:1!=e.maxNum||n.ableSelect?null:e.$previewImageAddress("checbox_unable.png")}}));e.$mp.data=Object.assign({},{$root:{m0:n,l0:r}})},s=[]}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/choosepurchaser/choosepurchaser-create-component",{"pages_game/components/choosepurchaser/choosepurchaser-create-component":function(e,n,r){r("df3c").createComponent(r("7e7d"))}},[["pages_game/components/choosepurchaser/choosepurchaser-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/choosepurchaser/choosepurchaser.js'});require("pages_game/components/choosepurchaser/choosepurchaser.js");$gwx2_XC_9=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx2_XC_9 || [];
function gz$gwx2_XC_9_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_9_1)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_9_1
__WXML_GLOBAL__.ops_cached.$gwx2_XC_9_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_9_1);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_9_1
}
function gz$gwx2_XC_9_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_9_2)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_9_2
__WXML_GLOBAL__.ops_cached.$gwx2_XC_9_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-966d04e4'])
Z([[7],[3,'isStatusBar']])
Z([[2,'!='],[[7],[3,'platform']],[1,'TT']])
Z([3,'transparent'])
Z([3,'__l'])
Z([1,false])
Z([3,'data-v-966d04e4'])
Z([[2,'?:'],[[7],[3,'isStatusBar']],[1,false],[1,true]])
Z([1,true])
Z(z[8])
Z([3,'详情'])
Z([3,'029a27b6-1'])
Z([[4],[[5],[[5],[1,'default']],[1,'left']]])
Z([[2,'!='],[[7],[3,'platform']],[1,'WX']])
Z([[7],[3,'itemdata']])
Z([3,'contain data-v-966d04e4'])
Z([3,'contain'])
Z([[2,'&&'],[[7],[3,'itemdata']],[[6],[[7],[3,'itemdata']],[3,'name']]])
Z([3,'titleprice data-v-966d04e4'])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'itemdata']],[3,'performanceType']],[1,1]],[[7],[3,'performUrl']]])
Z([[6],[[7],[3,'itemdata']],[3,'performanceClassifyName']])
Z([3,'__e'])
Z([3,'locationgroup data-v-966d04e4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toMap']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'--bgurl:'],[[2,'+'],[[2,'+'],[1,'url('],[[6],[[7],[3,'$root']],[3,'m3']]],[1,')']]],[1,';']])
Z([[6],[[7],[3,'itemdata']],[3,'venueAddress']])
Z([[2,'&&'],[[6],[[7],[3,'itemdata']],[3,'openWantSee']],[[6],[[7],[3,'virtualResponse']],[3,'totalNum']]])
Z([3,'wantsee-bg data-v-966d04e4'])
Z([[2,'+'],[[2,'+'],[1,'--bgurl:'],[[2,'+'],[[2,'+'],[1,'url('],[[6],[[7],[3,'$root']],[3,'m15']]],[1,')']]],[1,';']])
Z([[2,'&&'],[[7],[3,'virtualResponse']],[[6],[[7],[3,'virtualResponse']],[3,'avatarList']]])
Z([[6],[[7],[3,'itemdata']],[3,'openWantSee']])
Z([3,'part-xq data-v-966d04e4'])
Z([3,'padding-left:40rpx;padding-right:40rpx;'])
Z([[2,'=='],[[7],[3,'platform']],[1,'TT']])
Z(z[4])
Z([3,'rich-text-view data-v-966d04e4'])
Z([[7],[3,'detailContext']])
Z(z[5])
Z([3,'029a27b6-2'])
Z(z[4])
Z([3,'data-v-966d04e4 vue-ref'])
Z([3,'展开全部'])
Z([3,'#FF663F'])
Z([3,'readMore'])
Z([3,'800rpx'])
Z(z[5])
Z([3,'029a27b6-3'])
Z([[4],[[5],[1,'default']]])
Z(z[4])
Z(z[21])
Z(z[21])
Z(z[35])
Z(z[36])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^ready']],[[4],[[5],[[4],[[5],[1,'readyMpHtml']]]]]]]],[[4],[[5],[[5],[1,'^imgtap']],[[4],[[5],[[4],[[5],[1,'imgtap']]]]]]]]])
Z(z[5])
Z([[2,'+'],[[2,'+'],[1,'029a27b6-4'],[1,',']],[1,'029a27b6-3']])
Z([[6],[[7],[3,'$root']],[3,'g2']])
Z([3,'part-zr data-v-966d04e4'])
Z([[2,'<='],[[6],[[7],[3,'$root']],[3,'g3']],[1,3]])
Z([3,'indexlittle'])
Z([3,'itemlittle'])
Z([[6],[[7],[3,'itemdata']],[3,'starImgs']])
Z(z[59])
Z([[6],[[7],[3,'itemlittle']],[3,'starName']])
Z([3,'indexmore'])
Z([3,'itemmore'])
Z(z[61])
Z(z[64])
Z([[6],[[7],[3,'itemmore']],[3,'starName']])
Z([[6],[[7],[3,'$root']],[3,'g4']])
Z([3,'indexvidep'])
Z([3,'itemvideo'])
Z([[6],[[7],[3,'$root']],[3,'l1']])
Z(z[70])
Z(z[6])
Z([3,'display:inline-block;'])
Z([[2,'=='],[[6],[[6],[[7],[3,'itemvideo']],[3,'$orig']],[3,'imgType']],[1,'video']])
Z(z[6])
Z([[2,'=='],[[7],[3,'platform']],[1,'WX']])
Z(z[4])
Z([3,'videoimg data-v-966d04e4'])
Z([[6],[[7],[3,'itemvideo']],[3,'m19']])
Z(z[5])
Z([[2,'+'],[1,'029a27b6-5-'],[[7],[3,'indexvidep']]])
Z([[7],[3,'zbBannerInfo']])
Z([3,'part-xz data-v-966d04e4'])
Z(z[32])
Z(z[4])
Z(z[35])
Z([[7],[3,'ticketNotice']])
Z(z[5])
Z([3,'029a27b6-6'])
Z(z[4])
Z(z[35])
Z([[7],[3,'viewNotice']])
Z(z[5])
Z([3,'029a27b6-7'])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'itemdata']],[3,'showOrganizerDept']],[[6],[[7],[3,'itemdata']],[3,'organizerIntroduce']]],[[2,'!='],[[6],[[7],[3,'itemdata']],[3,'organizerIntroduce']],[1,'Empty_String']]])
Z(z[21])
Z([3,'organizer-box data-v-966d04e4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'goOrgDetail']]]]]]]]])
Z([[6],[[7],[3,'itemdata']],[3,'organizerLogo']])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'isShowCount']],[[2,'!'],[[7],[3,'isInSaleTime']]]],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'>'],[[7],[3,'cutOffDay']],[1,0]],[[2,'>'],[[7],[3,'cutOffHour']],[1,0]]],[[2,'>'],[[7],[3,'cutOffMinute']],[1,0]]],[[2,'>'],[[7],[3,'cutOffSecond']],[1,0]]]])
Z([3,'bottom-function data-v-966d04e4'])
Z([3,'like-share data-v-966d04e4'])
Z([[2,'!='],[[7],[3,'platform']],[1,'APP']])
Z(z[105])
Z([3,'handle-group data-v-966d04e4'])
Z([[6],[[7],[3,'$root']],[3,'g6']])
Z([[2,'=='],[[7],[3,'publishStatus']],[1,2]])
Z([[2,'=='],[[7],[3,'publishStatus']],[1,3]])
Z([[2,'<'],[[7],[3,'publishStatus']],[1,1]])
Z([[6],[[7],[3,'$root']],[3,'g7']])
Z(z[33])
Z(z[4])
Z(z[21])
Z(z[40])
Z([[4],[[5],[[4],[[5],[[5],[1,'^closeNotify']],[[4],[[5],[[4],[[5],[1,'closeNotify']]]]]]]]])
Z([3,'notify'])
Z([3,'029a27b6-8'])
Z(z[4])
Z(z[21])
Z(z[40])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'popupChange']]]]]]]]])
Z([3,'loginpopup'])
Z([3,'bottom'])
Z([3,'029a27b6-9'])
Z(z[47])
Z(z[4])
Z(z[21])
Z(z[21])
Z(z[6])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^loginFun']],[[4],[[5],[[4],[[5],[1,'loginFun']]]]]]]],[[4],[[5],[[5],[1,'^closeLogin']],[[4],[[5],[[4],[[5],[1,'closeLogin']]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'029a27b6-10'],[1,',']],[1,'029a27b6-9']])
Z(z[4])
Z(z[40])
Z([3,'joinfavpop'])
Z(z[5])
Z([3,'center'])
Z([3,'029a27b6-11'])
Z(z[47])
Z(z[4])
Z(z[21])
Z(z[21])
Z(z[6])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^goFavorite']],[[4],[[5],[[4],[[5],[1,'goFavorite']]]]]]]],[[4],[[5],[[5],[1,'^closePopup']],[[4],[[5],[[4],[[5],[1,'closeJoinPop']]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'029a27b6-12'],[1,',']],[1,'029a27b6-11']])
Z(z[4])
Z(z[21])
Z(z[40])
Z([[4],[[5],[[4],[[5],[[5],[1,'^bookingSuccess']],[[4],[[5],[[4],[[5],[1,'bookingSuccess']]]]]]]]])
Z([3,'booking'])
Z([3,'029a27b6-13'])
Z(z[4])
Z(z[21])
Z(z[40])
Z([[4],[[5],[[4],[[5],[[5],[1,'^closeNotes']],[[4],[[5],[[4],[[5],[1,'closeServiceDesc']]]]]]]]])
Z([3,'richNotePopup'])
Z(z[8])
Z([[7],[3,'popupMaxHeight']])
Z([[7],[3,'serviceNoticeUrl']])
Z([3,'服务说明'])
Z([3,'029a27b6-14'])
Z(z[4])
Z(z[40])
Z([3,'confirm'])
Z([3,'029a27b6-15'])
Z(z[4])
Z(z[40])
Z([3,'verifycode'])
Z([3,'029a27b6-16'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_9_2);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_9_2
}
__WXML_GLOBAL__.ops_set.$gwx2_XC_9=z;
__WXML_GLOBAL__.ops_init.$gwx2_XC_9=true;
var x=['./pages_game/components/joinfavorite/joinfavorite.wxml','./pages_game/gameevent/eventdetail.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx2_XC_9_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx2_XC_9_2()
var o2J=_n('view')
_rz(z,o2J,'class',0,e,s,gg)
var x3J=_v()
_(o2J,x3J)
if(_oz(z,1,e,s,gg)){x3J.wxVkey=1
}
var o4J=_v()
_(o2J,o4J)
if(_oz(z,2,e,s,gg)){o4J.wxVkey=1
var f5J=_mz(z,'uni-nav-bar',['backgroundColor',3,'bind:__l',1,'border',2,'class',3,'dark',4,'fixed',5,'statusBar',6,'title',7,'vueId',8,'vueSlots',9],[],e,s,gg)
var c6J=_v()
_(f5J,c6J)
if(_oz(z,13,e,s,gg)){c6J.wxVkey=1
}
c6J.wxXCkey=1
_(o4J,f5J)
}
x3J.wxXCkey=1
o4J.wxXCkey=1
o4J.wxXCkey=3
_(r,o2J)
var b1J=_v()
_(r,b1J)
if(_oz(z,14,e,s,gg)){b1J.wxVkey=1
var h7J=_mz(z,'view',['class',15,'id',1],[],e,s,gg)
var o8J=_v()
_(h7J,o8J)
if(_oz(z,17,e,s,gg)){o8J.wxVkey=1
var oFK=_n('view')
_rz(z,oFK,'class',18,e,s,gg)
var xGK=_v()
_(oFK,xGK)
if(_oz(z,19,e,s,gg)){xGK.wxVkey=1
}
var oHK=_v()
_(oFK,oHK)
if(_oz(z,20,e,s,gg)){oHK.wxVkey=1
}
xGK.wxXCkey=1
oHK.wxXCkey=1
_(o8J,oFK)
}
var fIK=_mz(z,'view',['bindtap',21,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var cJK=_v()
_(fIK,cJK)
if(_oz(z,25,e,s,gg)){cJK.wxVkey=1
}
cJK.wxXCkey=1
_(h7J,fIK)
var c9J=_v()
_(h7J,c9J)
if(_oz(z,26,e,s,gg)){c9J.wxVkey=1
var hKK=_mz(z,'view',['class',27,'style',1],[],e,s,gg)
var oLK=_v()
_(hKK,oLK)
if(_oz(z,29,e,s,gg)){oLK.wxVkey=1
}
var cMK=_v()
_(hKK,cMK)
if(_oz(z,30,e,s,gg)){cMK.wxVkey=1
}
oLK.wxXCkey=1
cMK.wxXCkey=1
_(c9J,hKK)
}
var oNK=_mz(z,'view',['class',31,'style',1],[],e,s,gg)
var lOK=_v()
_(oNK,lOK)
if(_oz(z,33,e,s,gg)){lOK.wxVkey=1
var aPK=_mz(z,'mp-html',['bind:__l',34,'class',1,'content',2,'setTitle',3,'vueId',4],[],e,s,gg)
_(lOK,aPK)
}
else{lOK.wxVkey=2
var tQK=_mz(z,'uv-read-more',['bind:__l',39,'class',1,'closeText',2,'color',3,'data-ref',4,'showHeight',5,'toggle',6,'vueId',7,'vueSlots',8],[],e,s,gg)
var eRK=_mz(z,'mp-html',['bind:__l',48,'bind:imgtap',1,'bind:ready',2,'class',3,'content',4,'data-event-opts',5,'setTitle',6,'vueId',7],[],e,s,gg)
_(tQK,eRK)
_(lOK,tQK)
}
lOK.wxXCkey=1
lOK.wxXCkey=3
lOK.wxXCkey=3
_(h7J,oNK)
var o0J=_v()
_(h7J,o0J)
if(_oz(z,56,e,s,gg)){o0J.wxVkey=1
var bSK=_n('view')
_rz(z,bSK,'class',57,e,s,gg)
var oTK=_v()
_(bSK,oTK)
if(_oz(z,58,e,s,gg)){oTK.wxVkey=1
var xUK=_v()
_(oTK,xUK)
var oVK=function(cXK,fWK,hYK,gg){
var c1K=_v()
_(hYK,c1K)
if(_oz(z,63,cXK,fWK,gg)){c1K.wxVkey=1
}
c1K.wxXCkey=1
return hYK
}
xUK.wxXCkey=2
_2z(z,61,oVK,e,s,gg,xUK,'itemlittle','indexlittle','indexlittle')
}
else{oTK.wxVkey=2
var o2K=_v()
_(oTK,o2K)
var l3K=function(t5K,a4K,e6K,gg){
var o8K=_v()
_(e6K,o8K)
if(_oz(z,68,t5K,a4K,gg)){o8K.wxVkey=1
}
o8K.wxXCkey=1
return e6K
}
o2K.wxXCkey=2
_2z(z,66,l3K,e,s,gg,o2K,'itemmore','indexmore','indexmore')
}
oTK.wxXCkey=1
_(o0J,bSK)
}
var lAK=_v()
_(h7J,lAK)
if(_oz(z,69,e,s,gg)){lAK.wxVkey=1
var x9K=_v()
_(lAK,x9K)
var o0K=function(cBL,fAL,hCL,gg){
var cEL=_mz(z,'view',['class',74,'style',1],[],cBL,fAL,gg)
var oFL=_v()
_(cEL,oFL)
if(_oz(z,76,cBL,fAL,gg)){oFL.wxVkey=1
var lGL=_n('view')
_rz(z,lGL,'class',77,cBL,fAL,gg)
var aHL=_v()
_(lGL,aHL)
if(_oz(z,78,cBL,fAL,gg)){aHL.wxVkey=1
}
else{aHL.wxVkey=2
var tIL=_mz(z,'mp-html',['bind:__l',79,'class',1,'content',2,'setTitle',3,'vueId',4],[],cBL,fAL,gg)
_(aHL,tIL)
}
aHL.wxXCkey=1
aHL.wxXCkey=3
_(oFL,lGL)
}
else{oFL.wxVkey=2
}
oFL.wxXCkey=1
oFL.wxXCkey=3
_(hCL,cEL)
return hCL
}
x9K.wxXCkey=4
_2z(z,72,o0K,e,s,gg,x9K,'itemvideo','indexvidep','indexvidep')
}
var aBK=_v()
_(h7J,aBK)
if(_oz(z,84,e,s,gg)){aBK.wxVkey=1
}
var eJL=_mz(z,'view',['class',85,'style',1],[],e,s,gg)
var bKL=_mz(z,'mp-html',['bind:__l',87,'class',1,'content',2,'setTitle',3,'vueId',4],[],e,s,gg)
_(eJL,bKL)
var oLL=_mz(z,'mp-html',['bind:__l',92,'class',1,'content',2,'setTitle',3,'vueId',4],[],e,s,gg)
_(eJL,oLL)
_(h7J,eJL)
var tCK=_v()
_(h7J,tCK)
if(_oz(z,97,e,s,gg)){tCK.wxVkey=1
var xML=_mz(z,'view',['bindtap',98,'class',1,'data-event-opts',2],[],e,s,gg)
var oNL=_v()
_(xML,oNL)
if(_oz(z,101,e,s,gg)){oNL.wxVkey=1
}
oNL.wxXCkey=1
_(tCK,xML)
}
var eDK=_v()
_(h7J,eDK)
if(_oz(z,102,e,s,gg)){eDK.wxVkey=1
}
var fOL=_n('view')
_rz(z,fOL,'class',103,e,s,gg)
var cPL=_n('view')
_rz(z,cPL,'class',104,e,s,gg)
var hQL=_v()
_(cPL,hQL)
if(_oz(z,105,e,s,gg)){hQL.wxVkey=1
}
var oRL=_v()
_(cPL,oRL)
if(_oz(z,106,e,s,gg)){oRL.wxVkey=1
}
hQL.wxXCkey=1
oRL.wxXCkey=1
_(fOL,cPL)
var cSL=_n('view')
_rz(z,cSL,'class',107,e,s,gg)
var oTL=_v()
_(cSL,oTL)
if(_oz(z,108,e,s,gg)){oTL.wxVkey=1
}
else{oTL.wxVkey=2
var lUL=_v()
_(oTL,lUL)
if(_oz(z,109,e,s,gg)){lUL.wxVkey=1
}
else{lUL.wxVkey=2
var aVL=_v()
_(lUL,aVL)
if(_oz(z,110,e,s,gg)){aVL.wxVkey=1
}
else{aVL.wxVkey=2
var tWL=_v()
_(aVL,tWL)
if(_oz(z,111,e,s,gg)){tWL.wxVkey=1
}
else{tWL.wxVkey=2
var eXL=_v()
_(tWL,eXL)
if(_oz(z,112,e,s,gg)){eXL.wxVkey=1
}
eXL.wxXCkey=1
}
tWL.wxXCkey=1
}
aVL.wxXCkey=1
}
lUL.wxXCkey=1
}
oTL.wxXCkey=1
_(fOL,cSL)
_(h7J,fOL)
var bEK=_v()
_(h7J,bEK)
if(_oz(z,113,e,s,gg)){bEK.wxVkey=1
}
var bYL=_mz(z,'page-notify',['bind:__l',114,'bind:closeNotify',1,'class',2,'data-event-opts',3,'data-ref',4,'vueId',5],[],e,s,gg)
_(h7J,bYL)
var oZL=_mz(z,'uni-popup',['bind:__l',120,'bind:change',1,'class',2,'data-event-opts',3,'data-ref',4,'type',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var x1L=_mz(z,'loginpop',['bind:__l',128,'bind:closeLogin',1,'bind:loginFun',2,'class',3,'data-event-opts',4,'vueId',5],[],e,s,gg)
_(oZL,x1L)
_(h7J,oZL)
var o2L=_mz(z,'uni-popup',['bind:__l',134,'class',1,'data-ref',2,'maskClick',3,'type',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var f3L=_mz(z,'join-favorite',['bind:__l',141,'bind:closePopup',1,'bind:goFavorite',2,'class',3,'data-event-opts',4,'vueId',5],[],e,s,gg)
_(o2L,f3L)
_(h7J,o2L)
var c4L=_mz(z,'tickets-booking',['bind:__l',147,'bind:bookingSuccess',1,'class',2,'data-event-opts',3,'data-ref',4,'vueId',5],[],e,s,gg)
_(h7J,c4L)
var h5L=_mz(z,'rich-notes',['bind:__l',153,'bind:closeNotes',1,'class',2,'data-event-opts',3,'data-ref',4,'isShowClose',5,'maxHeight',6,'purchaseNotesUrl',7,'titleIntroduce',8,'vueId',9],[],e,s,gg)
_(h7J,h5L)
var o6L=_mz(z,'pup-limit',['bind:__l',163,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(h7J,o6L)
var c7L=_mz(z,'verify-code-popup',['bind:__l',167,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(h7J,c7L)
o8J.wxXCkey=1
c9J.wxXCkey=1
o0J.wxXCkey=1
lAK.wxXCkey=1
lAK.wxXCkey=3
aBK.wxXCkey=1
tCK.wxXCkey=1
eDK.wxXCkey=1
bEK.wxXCkey=1
_(b1J,h7J)
}
b1J.wxXCkey=1
b1J.wxXCkey=3
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2_XC_9";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx2_XC_9();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/joinfavorite/joinfavorite.wxml'] = [$gwx2_XC_9, './pages_game/components/joinfavorite/joinfavorite.wxml'];else __wxAppCode__['pages_game/components/joinfavorite/joinfavorite.wxml'] = $gwx2_XC_9( './pages_game/components/joinfavorite/joinfavorite.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/gameevent/eventdetail.wxml'] = [$gwx2_XC_9, './pages_game/gameevent/eventdetail.wxml'];else __wxAppCode__['pages_game/gameevent/eventdetail.wxml'] = $gwx2_XC_9( './pages_game/gameevent/eventdetail.wxml' );
	;__wxRoute = "pages_game/components/joinfavorite/joinfavorite";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/joinfavorite/joinfavorite.js";define("pages_game/components/joinfavorite/joinfavorite.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/joinfavorite/joinfavorite"],{"2d99":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){}));var o=function(){this.$createElement;var e=(this._self._c,this.$previewImageAddress("join-fav-bg.png")),n=this.$previewImageAddress("close_plan_popup.png");this.$mp.data=Object.assign({},{$root:{m0:e,m1:n}})},a=[]},5530:function(e,n,t){},"9f7b":function(e,n,t){"use strict";t.r(n);var o=t("2d99"),a=t("f570");for(var i in a)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("ccaf");var c=t("828b"),r=Object(c.a)(a.default,o.b,o.c,!1,null,"24957cf4",null,!1,o.a,void 0);n.default=r.exports},ccaf:function(e,n,t){"use strict";var o=t("5530");t.n(o).a},f570:function(e,n,t){"use strict";t.r(n);var o=t("fe7c"),a=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n.default=a.a},fe7c:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"customerservice",props:{serviceQrcode:{type:String,default:""},serviceTele:{type:String,default:""}},data:function(){return{}},methods:{closePop:function(){this.$emit("closePopup")},goFavorite:function(){this.$emit("goFavorite")}}};n.default=o}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/joinfavorite/joinfavorite-create-component",{"pages_game/components/joinfavorite/joinfavorite-create-component":function(e,n,t){t("df3c").createComponent(t("9f7b"))}},[["pages_game/components/joinfavorite/joinfavorite-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/joinfavorite/joinfavorite.js'});require("pages_game/components/joinfavorite/joinfavorite.js");;__wxRoute = "pages_game/gameevent/eventdetail";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/gameevent/eventdetail.js";define("pages_game/gameevent/eventdetail.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/gameevent/eventdetail"],{"195d":function(e,t,i){"use strict";(function(e,t){var n=i("47a9");i("42bd"),i("861b"),n(i("3240"));var a=n(i("f231"));e.__webpack_require_UNI_MP_PLUGIN__=i,t(a.default)}).call(this,i("3223").default,i("df3c").createPage)},"26ea":function(e,t,i){"use strict";i.r(t);var n=i("e1d0"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t.default=a.a},"27c0":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={uniNavBar:function(){return i.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(i.bind(null,"f9b6"))},mpHtml:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/mp-html/components/mp-html/mp-html")]).then(i.bind(null,"6645"))},uvReadMore:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uv-read-more/components/uv-read-more/uv-read-more")]).then(i.bind(null,"c197"))},pageNotify:function(){return i.e("components/pageNotify/pageNotify").then(i.bind(null,"a197"))},uniPopup:function(){return i.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(i.bind(null,"5b0a"))},loginpop:function(){return Promise.all([i.e("common/vendor"),i.e("components/loginpop/loginpop")]).then(i.bind(null,"1716"))},VerifyCodePopup:function(){return Promise.all([i.e("common/vendor"),i.e("components/VerifyCodePopup/VerifyCodePopup")]).then(i.bind(null,"6689"))}},a=function(){var e=this,t=(e.$createElement,e._self._c,"TT"!=e.platform?e.$previewImageAddress(e.popShow?"arrow_left_round_detail2.png":"arrow_left_round_detail.png"):null),i="TT"!=e.platform&&"WX"!=e.platform?e.$previewImageAddress("share-app-top2.png"):null,n=e.$previewImageAddress("event_detail_blur_foreground.png"),a=e.itemdata&&e.itemdata&&e.itemdata.name?1==e.publishStatus&&0==e.showList.length:null,o=e.itemdata?e.$previewImageAddress("event_locbg.png"):null,s=e.itemdata?e.itemdata.labels&&e.itemdata.labels.length>0:null,r=e.itemdata&&s?e.__map(e.itemdata.labels,(function(t,i){return{$orig:e.__get_orig(t),m4:"allow"==t.labelValue?e.$previewImageAddress("serviceyes_0913.svg"):null,m5:"allow"!=t.labelValue?e.$previewImageAddress("serviceno_0709.svg"):null}})):null,l=e.itemdata&&s?e.$previewImageAddress("prodetail_condition_more.svg"):null,c=e.itemdata&&!s&&1==e.itemdata.chooseSeat?e.$previewImageAddress("serviceyes_0913.svg"):null,d=e.itemdata&&!s&&1!=e.itemdata.chooseSeat?e.$previewImageAddress("serviceno_0709.svg"):null,u=e.itemdata&&!s&&3==e.itemdata.realNameType?e.$previewImageAddress("serviceyes_0913.svg"):null,m=e.itemdata&&!s&&3!=e.itemdata.realNameType?e.$previewImageAddress("serviceno_0709.svg"):null,g=e.itemdata&&!s&&e.itemdata.canExchangeTicket?e.$previewImageAddress("serviceyes_0913.svg"):null,h=!e.itemdata||s||e.itemdata.canExchangeTicket?null:e.$previewImageAddress("serviceno_0709.svg"),p=e.itemdata&&!s&&e.itemdata.tocDisplayRefundRate?e.$previewImageAddress("serviceyes_0913.svg"):null,f=!e.itemdata||s||e.itemdata.tocDisplayRefundRate?null:e.$previewImageAddress("serviceno_0709.svg"),v=e.itemdata&&e.itemdata.openWantSee&&e.virtualResponse.totalNum?e.$previewImageAddress("xiangkan-bg.png"):null,S=e.itemdata&&e.itemdata.openWantSee&&e.virtualResponse.totalNum&&1==e.likedStatus?e.$previewImageAddress("wantseeed.png"):null,I=e.itemdata&&e.itemdata.openWantSee&&e.virtualResponse.totalNum&&1!=e.likedStatus?e.$previewImageAddress("wantsee.png"):null,y=e.itemdata&&e.itemdata.openWantSee&&e.virtualResponse.totalNum?e.$previewImageAddress("event-hotbg.png"):null,w=e.itemdata?e.itemdata.starImgs&&e.itemdata.starImgs.length>0:null,b=e.itemdata&&w?e.itemdata.starImgs.length:null,k=e.itemdata?e.itemdata.videoImgs&&e.itemdata.videoImgs.length>0:null,T=e.itemdata&&k?e.__map(e.itemdata.videoImgs,(function(t,i){return{$orig:e.__get_orig(t),m19:"video"==t.imgType&&"WX"!=e.platform?e.getVideoRichContent(t.imageUrl):null}})):null,_=e.itemdata&&e.itemdata.showOrganizerDept&&e.itemdata.organizerIntroduce&&"Empty_String"!=e.itemdata.organizerIntroduce?e.$previewImageAddress("arrow_right_mine_0926.png"):null,L=e.itemdata&&e.isShowCount&&!e.isInSaleTime&&(e.cutOffDay>0||e.cutOffHour>0||e.cutOffMinute>0||e.cutOffSecond>0)?e.$previewImageAddress("event-count-down-bg2.png"):null,N=e.itemdata&&1==e.likedStatus?e.$previewImageAddress("liked5.png"):null,x=e.itemdata&&1!=e.likedStatus?e.$previewImageAddress("like5.png"):null,A=e.itemdata&&"APP"!=e.platform?e.$previewImageAddress("share4.png"):null,$=e.itemdata?1==e.publishStatus&&0==e.showList.length:null,P=e.itemdata?1==e.publishStatus&&e.showList.length>0:null,C=!e.itemdata||P||2==e.publishStatus||3==e.publishStatus||e.publishStatus<1?null:e.itemdata&&e.itemdata.name&&(null==e.showList||0==e.showList.length),R=e.itemdata&&"TT"==e.platform?e.$previewImageAddress("service-phone.png"):null;e.$mp.data=Object.assign({},{$root:{m0:t,m1:i,m2:n,g0:a,m3:o,g1:s,l0:r,m6:l,m7:c,m8:d,m9:u,m10:m,m11:g,m12:h,m13:p,m14:f,m15:v,m16:S,m17:I,m18:y,g2:w,g3:b,g4:k,l1:T,m20:_,m21:L,m22:N,m23:x,m24:A,g5:$,g6:P,g7:C,m25:R}})},o=[]},9777:function(e,t,i){},9835:function(e,t,i){"use strict";var n=i("9777");i.n(n).a},e1d0:function(e,t,i){"use strict";(function(e){var n=i("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("7eb4")),o=n(i("ee10")),s=i("4380"),r=i("ef32"),l=i("8e36"),c=i("d3aa"),d=i("9b69"),u=i("7cec"),m=i("d9e3"),g=i("6fe6"),h=i("f0e6"),p=i("92e3"),f=i("cf81"),v=n(i("84f6")),S={components:{JoinFavorite:function(){i.e("pages_game/components/joinfavorite/joinfavorite").then(function(){return resolve(i("9f7b"))}.bind(null,i)).catch(i.oe)},TicketsBooking:function(){Promise.all([i.e("common/vendor"),i.e("pages_game/components/ticketsBooking/ticketsBooking")]).then(function(){return resolve(i("9a74"))}.bind(null,i)).catch(i.oe)},RichNotes:function(){i.e("pages_game/components/richNotes/richNotes").then(function(){return resolve(i("e1db"))}.bind(null,i)).catch(i.oe)}},data:function(){return{itemdata:{},navId:"part-xq",navAar:[],detailContext:"",ticketNotice:"",viewNotice:"",organizerIntroduce:"",likedId:"",likedStatus:"",eleTicket:"",eventId:"",orgId:"",buyProtocolOn:!1,buyProtocol:"",distance:"",publishStatus:99,latitude:"",longitude:"",isInSaleTime:!1,popShow:!1,platform:"WX",virtualResponse:{},isStatusBar:!1,showList:[],isCreate:!0,pageHeight:710,performUrl:"",performSwitch:0,nameFontSize:30,isShowNotify:!0,bookingEventInfoList:[],isBookingStatusLocal:!1,selectShowing:!1,previewImgimg:!1,popupMaxHeight:750,serviceNoticeUrl:"",cutOffDay:0,cutOffHour:0,cutOffMinute:0,cutOffSecond:0,timer:null,readySaleTime:"",isShowCount:!1,zbBannerInfo:null,noClick:!0}},onLoad:function(t){if(console.log("eventdetail",t),t.id)this.eventId=t.id,t.orgId&&(this.orgId=t.orgId),console.log("this.eventId---res.id",this.eventId+"---orgId="+this.orgId);else if(t.scene&&null!=t.scene){var i=decodeURIComponent(t.scene);console.log("res.scene=",t.scene);var n=i.split("&"),a=null;n&&n.length>1?(this.orgId=n[0],console.log("orgId=",this.orgId),a=n[1].split("=")):a=n[0].split("="),console.log("arr=",a),a&&a.length>1?("id"==a[0]&&(this.eventId=a[1]),console.log("arr[0]",a[0]),console.log("arr[1]",a[1])):(this.eventId=decodeURIComponent(i),console.log("sceneData=",this.eventId)),console.log("eventId=",this.eventId)}else if(t.q){var o=decodeURIComponent(t.q);console.log("options1",o);var s=o.split("id=");console.log("options2",s[1]),this.eventId=s[1]}this.performUrl=e.getStorageSync("performUrl"),e.getStorageSync("performSwitch")&&(this.performSwitch=e.getStorageSync("performSwitch")),(0,f.armsSendCustom)("EventType",this.eventId,"EventDetail",1),this.initCommonPreheat()},onUnload:function(){this.timer&&clearInterval(this.timer)},onPageScroll:function(e){e.scrollTop>50?this.isStatusBar=!0:this.isStatusBar=!1},onReady:function(){var t=e.getSystemInfoSync();t&&(console.log("uni.getSystemInfoSync()",t.platform),console.log("uni.getSystemInfoSync()",t.windowHeight),"ios"===t.platform?this.pageHeight=t.windowHeight-100:this.pageHeight=t.windowHeight-85,console.log("this.pageHeight",this.pageHeight),this.popupMaxHeight=.75*t.screenHeight/t.windowWidth*750)},onShow:function(){if(console.log("===========onShow=========="),this.selectShowing||this.previewImgimg)this.previewImgimg=!1;else{var t=e.getStorageSync("proDetailInfo");if(console.log("proDetailInfo",t),t){var i=JSON.parse(t);console.log("本地缓存项目信息pro",i),i.id==this.eventId&&(this.itemdata=i,this.setDetailInfo())}this.getDetail()}},onShareAppMessage:function(e){return console.log("分享",e),"button"===e.from&&console.log(e.target),{title:this.itemdata.name,path:"/pages_game/gameevent/eventdetail?id="+this.eventId,mpId:g.mpId}},onShareTimeline:function(e){return{title:this.itemdata.name,path:"/pages_game/gameevent/eventdetail?id="+this.eventId,mpId:g.mpId}},methods:{jumpToLogin:function(){e.navigateTo({url:"/pages/mine/login"})},loginFun:function(){this.$refs.loginpopup.close(),this.getDetail()},closeLogin:function(){this.$refs.loginpopup.close()},uniShare:function(){},popupChange:function(e){this.popShow=e.show},closeNotify:function(){this.popShow=!1},clickNav:function(t){console.log("e.currentTarget.dataset.classname",t.currentTarget.dataset.classname);var i=t.currentTarget.dataset.classname;this.navId=i,t.currentTarget.dataset.type_id,e.createSelectorQuery().select("."+i).boundingClientRect((function(t){console.log("data",t),e.createSelectorQuery().select("#contain").boundingClientRect((function(i){console.log("res",i),e.pageScrollTo({duration:0,scrollTop:t.top-i.top-10})})).exec()})).exec()},toMap:function(){console.log("点击地图"),e.openLocation({latitude:Number(this.latitude),longitude:Number(this.longitude),address:this.itemdata.venueAddress})},getCollectionStatus:function(){var e=this;(0,r.collectionsGetStatus)({projectId:this.eventId,type:2,openWantSee:this.itemdata.openWantSee,wantSeeInit:this.itemdata.wantSeeInit}).then((function(t){if(t.data&&(e.likedStatus=t.data.status,e.likedId=t.data.id,e.virtualResponse=t.data.virtualResponse,e.virtualResponse&&e.virtualResponse.avatarList))for(var i=0;i<e.virtualResponse.avatarList.length;i++)e.virtualResponse.avatarList[i]=e.virtualResponse.avatarList[i].replace(/[\r\n]/g,"")})).catch((function(e){console.log(e)}))},goOrgDetail:function(){e.navigateTo({url:"/pages_game/gameevent/orgIntroduce?organizerLogo="+this.itemdata.organizerLogo+"&organizerDeptName="+this.itemdata.organizerDeptName+"&organizerIntroduce="+this.itemdata.organizerIntroduce})},zbBannerClick:function(){(0,p.adClick)(this.zbBannerInfo)},likeActivity:function(){var t=this;e.getStorageSync("token")?(1==this.likedStatus?this.likedStatus=0:this.likedStatus=1,(0,r.collectionsModify)({projectId:this.itemdata.id,type:2,status:this.likedStatus,id:this.likedId,avatarUrl:e.getStorageSync("avatarUrl"),openWantSee:this.itemdata.openWantSee,wantSeeInit:this.itemdata.wantSeeInit}).then((function(e){if(e.data&&(t.likedStatus=e.data.status,1==e.data.status&&(t.$refs.joinfavpop.open(),setTimeout((function(){t.$refs.joinfavpop.close()}),3e3)),t.likedId=e.data.id,t.virtualResponse=e.data.virtualResponse,t.virtualResponse&&t.virtualResponse.avatarList))for(var i=0;i<t.virtualResponse.avatarList.length;i++)t.virtualResponse.avatarList[i]=t.virtualResponse.avatarList[i].replace(/[\r\n]/g,"");console.log(e)})).catch((function(e){console.log(e),0==t.likedStatus?t.likedStatus=1:t.likedStatus=0}))):this.jumpToLogin()},getDetail:function(){var t=this;(0,s.getOssJsonFile)({url:(0,h.getProOssJsonUrl)(this.eventId)}).then((function(i){e.hideLoading(),i&&i.data?(t.itemdata=i.data,t.setDetailInfo(),e.setStorageSync("proDetailInfo",JSON.stringify(t.itemdata))):t.initProDetail()})).catch((function(i){e.hideLoading(),t.initProDetail()}))},initProDetail:function(){var t=this;return(0,o.default)(a.default.mark((function i(){return a.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,s.eventDetail)({id:t.eventId}).then((function(i){console.log("接口详情============",i),i&&i.data&&(t.itemdata=i.data,t.setDetailInfo(),e.setStorageSync("proDetailInfo",JSON.stringify(t.itemdata)))})).catch((function(e){console.log("console",e)}));case 2:case"end":return i.stop()}}),i)})))()},setDetailInfo:function(){var t=this;this.itemdata&&((1==this.itemdata.performanceType&&this.performUrl&&this.itemdata.name.length>28||this.itemdata.name.length>33)&&(this.nameFontSize=26),this.publishStatus=this.itemdata.publishStatus,this.showList=[],this.itemdata.showList&&this.itemdata.showList.map((function(e){if((0,m.whetherCurrentRange)(e.saleSt,e.saleEt)?(t.isInSaleTime=!0,e.isInSaleTime=!0,t.showList.push(e)):(0,m.compareCurrentDate)(e.saleEt)||t.showList.push(e),1==t.publishStatus&&e.isMinSaleStBeforeSale){t.readySaleTime=e.saleSt;var i=(0,m.countdownTime)(t.readySaleTime);if(console.log("readySaleTime",t.readySaleTime+"-------"+i),i>0){var n=parseInt(i/864e5),a=parseInt(i%864e5/36e5),o=parseInt(i%36e5/6e4),s=parseInt(i%6e4/1e3);t.cutOffDay=n,t.cutOffHour=a,t.cutOffMinute=o,t.cutOffSecond=s,t.isShowCount=!0,null!=t.timer&&clearInterval(t.timer),t.timer=setInterval((function(){var e=(0,m.countdownTime)(t.readySaleTime),i=parseInt(e/864e5),n=parseInt(e%864e5/36e5),a=parseInt(e%36e5/6e4),o=parseInt(e%6e4/1e3);t.cutOffDay=i,t.cutOffHour=n,t.cutOffMinute=a,t.cutOffSecond=o,e<0?(t.isInSaleTime=!0,clearInterval(t.timer),t.isShowCount=!1,t.getDetail()):t.isShowCount=!0}),1e3),console.log("初始化timer"+t.timer)}else t.isShowCount=!1}})),this.buyProtocolOn=this.itemdata.buyProtocolOn,this.buyProtocol=this.itemdata.buyProtocol,console.log("showList",this.showList),this.navAar=[],this.navAar.push({id:"part-xq",classname:"详情"}),this.itemdata.starImgs&&this.itemdata.starImgs.length&&this.navAar.push({id:"part-zr",classname:"阵容"}),this.itemdata.videoImgs&&this.itemdata.videoImgs.length>0&&(this.navAar.push({id:"part-sp",classname:"视频/相册"}),this.itemdata.videoImgs.map((function(e){console.log("itemvideo",e.imageUrl),"video"===(0,c.checkMediaType)(e.imageUrl)?e.imgType="video":e.imgType="image"}))),this.navAar.push({id:"part-xz",classname:"须知"}),this.itemdata.showOrganizerDept&&this.itemdata.organizerIntroduce&&"Empty_String"!=this.itemdata.organizerIntroduce&&this.navAar.push({id:"part-zbf",classname:"主办方"}),this.itemdata.showAdvertisement&&this.getAdInfo(),this.loadHtmlText(0,this.itemdata.detailContext),this.loadHtmlText(1,this.itemdata.ticketNotice),this.loadHtmlText(2,this.itemdata.viewNotice),this.itemdata.organizerIntroduce&&"Empty_String"!=this.itemdata.organizerIntroduce&&this.loadHtmlText(3,this.itemdata.organizerIntroduce),this.latitude=this.itemdata.latitude,this.longitude=this.itemdata.longitude,this.distance=(0,l.getDistance)(e.getStorageSync("latitude"),e.getStorageSync("longitude"),this.latitude,this.longitude),this.isCreate&&e.getStorageSync("token")&&this.eventId&&(this.getCollectionStatus(),this.isCreate=!1),this.isShowNotify&&this.itemdata.popOn&&this.itemdata.popTitle&&this.itemdata.popNotice&&(this.loadHtmlText(4,this.itemdata.popNotice),this.isShowNotify=!1),this.itemdata.serviceNotice&&"Empty_String"!=this.itemdata.serviceNotice&&this.loadHtmlText(5,this.itemdata.serviceNotice))},readyMpHtml:function(){var e=this;console.log("readyMpHtml"),setTimeout((function(){e.$refs.readMore&&e.$nextTick((function(){e.$refs.readMore.init()}))}),500)},loadHtmlText:function(t,i){var n=this;e.request({url:i,method:"GET",header:{Referer:"","Content-Type":"text/html",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"},success:function(e){n.getRichText(e,t)},fail:function(e){console.log("加载html失败",e)}})},getRichText:function(e,t){var i=e.data.replace(/\<img/gi,'<img style="width:100%;height:auto;" ').replace(/iframe/g,"video").replace(/\<video/gi,'<video style="width:100%;" playsinline="true" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5" x5-video-player-fullscreen="false"');switch(t){case 0:this.detailContext=i;break;case 1:this.ticketNotice=i;break;case 2:this.viewNotice=i;break;case 3:this.organizerIntroduce=i;break;case 4:if(this.popShow=!0,this.$refs.notify){var n=this;n.$nextTick((function(){n.$refs.notify.open(n.itemdata.popTitle,i)}))}break;case 5:this.serviceNoticeUrl=i}},getVideoRichContent:function(e){return'<video src="'.concat(e,'" style="width:100%;height:100%;" playsinline="true" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5" x5-video-player-fullscreen="false" />')},closeSessionPop:function(){this.selectShowing=!1},getSelectSession:function(){if(null!=this.itemdata.showList&&0!=this.itemdata.showList.length)if(e.getStorageSync("token")){var t=JSON.stringify(this.showList);e.navigateTo({url:"/pages_game/gameevent/eventSession?ticketOutletId=".concat(this.orgId,"&sList=")+encodeURIComponent(t)})}else this.jumpToLogin();else e.showToast({title:"暂无场次,在看看其他赛事吧",icon:"none"})},getLocation:function(){var t=this;console.log("小程序location"),e.authorize({scope:"scope.userLocation",success:function(e){t.getLocationInfo()},fail:function(e){console.log("用户拒绝授权")}})},requestAndroidPermission:function(e){var t=this;return(0,o.default)(a.default.mark((function i(){return a.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,v.default.requestAndroidPermission(e);case 2:1==i.sent&&t.getLocationInfo();case 4:case"end":return i.stop()}}),i)})))()},getLocationInfo:function(){var t=this;e.getLocation({type:"wgs84",success:function(i){console.log("当前位置的经度："+i.longitude),console.log("当前位置的纬度："+i.latitude),e.setStorageSync("longitude",i.longitude),e.setStorageSync("latitude",i.latitude),t.distance=(0,l.getDistance)(e.getStorageSync("latitude"),e.getStorageSync("longitude"),t.latitude,t.longitude)},fail:function(e){console.log("定位授权失败")}})},back:function(){this.popShow||(getCurrentPages().length<=1?(e.setStorageSync("tabPath","/pages/index/index"),e.switchTab({url:"/pages/index/index"})):e.navigateBack())},closeJoinPop:function(){this.$refs.joinfavpop.close()},goFavorite:function(){e.navigateTo({url:"/pages_mine/mine/myfavorite"})},previewImg:function(t){this.previewImgimg=!0,e.previewImage({urls:[t]})},imgtap:function(e){this.previewImgimg=!0,console.log(e)},initByKeyList:function(){(0,d.getListByKeyList)({keyNumList:["ctms.cms.common.conf.10160"]}).then((function(t){if(console.log(t),t)for(var i=0;i<t.data.length;i++)"ctms.cms.common.conf.10160"==t.data[i].keyNum&&t.data[i].keyValue&&(e.setStorageSync("servicePhone",t.data[i].keyValue),e.makePhoneCall({phoneNumber:phoneNum}))})).catch((function(e){console.log(e)}))},getAdInfo:function(){var e=this;(0,u.getAdInfoListByChannel)({channel:1,keyNumList:[122],thirdNo:this.eventId}).then((function(t){console.log(t),t.data&&t.data.map((function(t){if(122==t.keyNum){for(var i=e.navAar.length-1,n=0;n<e.navAar.length;n++)"须知"==e.navAar[n].classname&&(i=n);console.log("index",i),e.navAar.splice(i,0,{id:"part-zb",classname:"周边"}),t.infoImgList.length>0&&(e.zbBannerInfo=t.infoImgList[0])}}))})).catch((function(e){}))},contactService:function(){var t=e.getStorageSync("servicePhone");t?e.makePhoneCall({phoneNumber:t}):this.initByKeyList()},rightBooking:function(){this.isBookingStatusLocal||this.$refs.booking.openPup(this.eventId,"","","","")},bookingSuccess:function(t){this.isBookingStatusLocal=!0,this.bookingEventInfoList.push({eventId:this.eventId}),e.setStorageSync("bookingEventInfoList",JSON.stringify(this.bookingEventInfoList))},openServiceDesc:function(){this.serviceNoticeUrl&&(this.$refs.richNotePopup.open(),this.popShow=!0)},closeServiceDesc:function(){this.popShow=!1},initCommonPreheat:function(){e.getStorageSync("deptId")||(0,d.commonPreheat)().then((function(t){var i;null!=t&&null!==(i=t.data)&&void 0!==i&&i.channelDept&&(e.setStorageSync("deptId",t.data.channelDept.deptId),e.setStorageSync("createUserId",t.data.channelDept.createUserId))})).catch((function(e){}))}}};t.default=S}).call(this,i("df3c").default)},f231:function(e,t,i){"use strict";i.r(t);var n=i("27c0"),a=i("26ea");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("9835");var s=i("828b"),r=Object(s.a)(a.default,n.b,n.c,!1,null,"966d04e4",null,!1,n.a,void 0);t.default=r.exports}},[["195d","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_game/gameevent/eventdetail.js'});require("pages_game/gameevent/eventdetail.js");$gwx2_XC_10=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx2_XC_10 || [];
function gz$gwx2_XC_10_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_10_1)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_10_1
__WXML_GLOBAL__.ops_cached.$gwx2_XC_10_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_10_1);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_10_1
}
function gz$gwx2_XC_10_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_10_2)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_10_2
__WXML_GLOBAL__.ops_cached.$gwx2_XC_10_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_10_2);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_10_2
}
function gz$gwx2_XC_10_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_10_3)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_10_3
__WXML_GLOBAL__.ops_cached.$gwx2_XC_10_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_10_3);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_10_3
}
function gz$gwx2_XC_10_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_10_4)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_10_4
__WXML_GLOBAL__.ops_cached.$gwx2_XC_10_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'lime-painter vue-ref'])
Z([3,'limepainter'])
Z([[2,'&&'],[[7],[3,'canvasId']],[[7],[3,'size']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_10_4);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_10_4
}
__WXML_GLOBAL__.ops_set.$gwx2_XC_10=z;
__WXML_GLOBAL__.ops_init.$gwx2_XC_10=true;
var x=['./pages_game/components/lime-painter/components/l-painter-image/l-painter-image.wxml','./pages_game/components/lime-painter/components/l-painter-text/l-painter-text.wxml','./pages_game/components/lime-painter/components/l-painter-view/l-painter-view.wxml','./pages_game/components/lime-painter/components/l-painter/l-painter.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx2_XC_10_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx2_XC_10_2()
var a0L=_n('slot')
_(r,a0L)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx2_XC_10_3()
var eBM=_n('slot')
_(r,eBM)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx2_XC_10_4()
var oDM=_mz(z,'view',['class',0,'data-ref',1],[],e,s,gg)
var xEM=_v()
_(oDM,xEM)
if(_oz(z,2,e,s,gg)){xEM.wxVkey=1
}
var oFM=_n('slot')
_(oDM,oFM)
xEM.wxXCkey=1
_(r,oDM)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2_XC_10";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx2_XC_10();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/lime-painter/components/l-painter-image/l-painter-image.wxml'] = [$gwx2_XC_10, './pages_game/components/lime-painter/components/l-painter-image/l-painter-image.wxml'];else __wxAppCode__['pages_game/components/lime-painter/components/l-painter-image/l-painter-image.wxml'] = $gwx2_XC_10( './pages_game/components/lime-painter/components/l-painter-image/l-painter-image.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/lime-painter/components/l-painter-text/l-painter-text.wxml'] = [$gwx2_XC_10, './pages_game/components/lime-painter/components/l-painter-text/l-painter-text.wxml'];else __wxAppCode__['pages_game/components/lime-painter/components/l-painter-text/l-painter-text.wxml'] = $gwx2_XC_10( './pages_game/components/lime-painter/components/l-painter-text/l-painter-text.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/lime-painter/components/l-painter-view/l-painter-view.wxml'] = [$gwx2_XC_10, './pages_game/components/lime-painter/components/l-painter-view/l-painter-view.wxml'];else __wxAppCode__['pages_game/components/lime-painter/components/l-painter-view/l-painter-view.wxml'] = $gwx2_XC_10( './pages_game/components/lime-painter/components/l-painter-view/l-painter-view.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/lime-painter/components/l-painter/l-painter.wxml'] = [$gwx2_XC_10, './pages_game/components/lime-painter/components/l-painter/l-painter.wxml'];else __wxAppCode__['pages_game/components/lime-painter/components/l-painter/l-painter.wxml'] = $gwx2_XC_10( './pages_game/components/lime-painter/components/l-painter/l-painter.wxml' );
	;__wxRoute = "pages_game/components/lime-painter/components/l-painter-image/l-painter-image";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/lime-painter/components/l-painter-image/l-painter-image.js";define("pages_game/components/lime-painter/components/l-painter-image/l-painter-image.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/lime-painter/components/l-painter-image/l-painter-image"],{"27d7":function(e,n,t){"use strict";t.r(n);var a=t("3068"),i=t("6f09");for(var o in i)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(o);var r=t("828b"),c=Object(r.a)(i.default,a.b,a.c,!1,null,null,null,!1,a.a,void 0);n.default=c.exports},3068:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){}));var a=function(){this.$createElement,this._self._c},i=[]},"466d":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"lime-painter-image",mixins:[(0,t("fc8b").children)("painter")],props:{id:String,css:[String,Object],src:String},data:function(){return{type:"image",el:{css:{},src:null}}}};n.default=a},"6f09":function(e,n,t){"use strict";t.r(n);var a=t("466d"),i=t.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n.default=i.a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/lime-painter/components/l-painter-image/l-painter-image-create-component",{"pages_game/components/lime-painter/components/l-painter-image/l-painter-image-create-component":function(e,n,t){t("df3c").createComponent(t("27d7"))}},[["pages_game/components/lime-painter/components/l-painter-image/l-painter-image-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/lime-painter/components/l-painter-image/l-painter-image.js'});require("pages_game/components/lime-painter/components/l-painter-image/l-painter-image.js");;__wxRoute = "pages_game/components/lime-painter/components/l-painter-text/l-painter-text";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/lime-painter/components/l-painter-text/l-painter-text.js";define("pages_game/components/lime-painter/components/l-painter-text/l-painter-text.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/lime-painter/components/l-painter-text/l-painter-text"],{"121d":function(e,t,n){"use strict";n.r(t);var a=n("75e1"),o=n("b135");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);var i=n("828b"),c=Object(i.a)(o.default,a.b,a.c,!1,null,null,null,!1,a.a,void 0);t.default=c.exports},"3e18":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"lime-painter-text",mixins:[(0,n("fc8b").children)("painter")],props:{uid:String,css:[String,Object],text:[String,Number],replace:Object},data:function(){return{type:"text",el:{css:{},text:null}}}};t.default=a},"75e1":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var a=function(){this.$createElement,this._self._c},o=[]},b135:function(e,t,n){"use strict";n.r(t);var a=n("3e18"),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t.default=o.a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/lime-painter/components/l-painter-text/l-painter-text-create-component",{"pages_game/components/lime-painter/components/l-painter-text/l-painter-text-create-component":function(e,t,n){n("df3c").createComponent(n("121d"))}},[["pages_game/components/lime-painter/components/l-painter-text/l-painter-text-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/lime-painter/components/l-painter-text/l-painter-text.js'});require("pages_game/components/lime-painter/components/l-painter-text/l-painter-text.js");;__wxRoute = "pages_game/components/lime-painter/components/l-painter-view/l-painter-view";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/lime-painter/components/l-painter-view/l-painter-view.js";define("pages_game/components/lime-painter/components/l-painter-view/l-painter-view.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/lime-painter/components/l-painter-view/l-painter-view"],{"5c23":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t("fc8b"),a={name:"lime-painter-view",mixins:[(0,i.children)("painter"),(0,i.parent)("painter")],props:{id:String,css:[String,Object]},data:function(){return{type:"view",el:{css:{},views:[]}}},mounted:function(){}};n.default=a},aca4:function(e,n,t){"use strict";t.r(n);var i=t("5c23"),a=t.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n.default=a.a},b62f:function(e,n,t){"use strict";t.r(n);var i=t("cba2"),a=t("aca4");for(var o in a)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(o);var c=t("828b"),r=Object(c.a)(a.default,i.b,i.c,!1,null,null,null,!1,i.a,void 0);n.default=r.exports},cba2:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){}));var i=function(){this.$createElement,this._self._c},a=[]}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/lime-painter/components/l-painter-view/l-painter-view-create-component",{"pages_game/components/lime-painter/components/l-painter-view/l-painter-view-create-component":function(e,n,t){t("df3c").createComponent(t("b62f"))}},[["pages_game/components/lime-painter/components/l-painter-view/l-painter-view-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/lime-painter/components/l-painter-view/l-painter-view.js'});require("pages_game/components/lime-painter/components/l-painter-view/l-painter-view.js");;__wxRoute = "pages_game/components/lime-painter/components/l-painter/l-painter";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/lime-painter/components/l-painter/l-painter.js";define("pages_game/components/lime-painter/components/l-painter/l-painter.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/lime-painter/components/l-painter/l-painter"],{"2ace":function(e,t,n){"use strict";n.r(t);var r=n("3727"),a=n("9929");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("3764");var s=n("828b"),c=Object(s.a)(a.default,r.b,r.c,!1,null,null,null,!1,r.a,void 0);t.default=c.exports},3727:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var r=function(){this.$createElement,this._self._c},a=[]},3764:function(e,t,n){"use strict";var r=n("84cc");n.n(r).a},"84cc":function(e,t,n){},9929:function(e,t,n){"use strict";n.r(t);var r=n("ae28"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t.default=a.a},ae28:function(e,t,n){"use strict";(function(e){var r=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("7eb4")),i=r(n("ee10")),s=n("fc8b"),c=r(n("ff80")),o=n("7520"),u=r(n("000d")),d={name:"lime-painter",mixins:[c.default,(0,s.parent)("painter"),{}],data:function(){return{use2dCanvas:!1,canvasHeight:150,canvasWidth:null,parentWidth:0,inited:!1,progress:0,firstRender:0,done:!1,isPC:!1}},computed:{styles:function(){return"".concat(this.size).concat(this.customStyle||"",";")+(this.hidden&&"position: fixed; left: 1500rpx;")},canvasId:function(){return"l-painter".concat(this._&&this._.uid||this._uid)},size:function(){if(this.boardWidth&&this.boardHeight)return"width:".concat(this.boardWidth,"px; height: ").concat(this.boardHeight,"px;")},dpr:function(){return this.pixelRatio||e.getSystemInfoSync().pixelRatio},boardWidth:function(){var e=(this.elements&&this.elements.css||this.elements||this).width,t=void 0===e?0:e,n=(0,o.toPx)(t||this.width);return n||Math.max(n,(0,o.toPx)(this.canvasWidth))},boardHeight:function(){var e=(this.elements&&this.elements.css||this.elements||this).height,t=void 0===e?0:e,n=(0,o.toPx)(t||this.height);return n||Math.max(n,(0,o.toPx)(this.canvasHeight))},hasBoard:function(){return this.board&&Object.keys(this.board).length},elements:function(){return this.hasBoard?this.board:JSON.parse(JSON.stringify(this.el))}},created:function(){this.show=!0,this.use2dCanvas="2d"===this.type&&(0,o.canIUseCanvas2d)(),this.isPC=o.isPC},mounted:function(){var e=this;return(0,i.default)(a.default.mark((function t(){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.sleep)(30);case 2:return t.next=4,e.getParentWeith();case 4:e.$nextTick((function(){setTimeout((function(){e.$watch("elements",e.watchRender,{deep:!0,immediate:!0})}),30)}));case 5:case"end":return t.stop()}}),t)})))()},destroyed:function(){this.done=!1,this.inited=!1,this.firstRender=0,this.progress=0,this.painter=null,clearTimeout(this.rendertimer)},methods:{watchRender:function(e,t){var n=this;return(0,i.default)(a.default.mark((function r(){return a.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e&&e.views&&(n.firstRender?n.firstRender:e.views.length)&&Object.keys(e).length&&JSON.stringify(e)!=JSON.stringify(t)){r.next=2;break}return r.abrupt("return");case 2:n.firstRender=1,n.progress=0,n.done=!1,clearTimeout(n.rendertimer),n.rendertimer=setTimeout((function(){n.render(e)}),n.beforeDelay);case 7:case"end":return r.stop()}}),r)})))()},setFilePath:function(e,t){var n=this;return(0,i.default)(a.default.mark((function r(){var i,s,c;return a.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e,s=(t||n).pathType,"base64"!=(c=void 0===s?n.pathType:s)||(0,o.isBase64)(e)){r.next=8;break}return r.next=5,(0,o.pathToBase64)(e);case 5:i=r.sent,r.next=12;break;case 8:if("url"!=c||!(0,o.isBase64)(e)){r.next=12;break}return r.next=11,(0,o.base64ToPath)(e);case 11:i=r.sent;case 12:return t&&t.isEmit&&n.$emit("success",i),r.abrupt("return",i);case 14:case"end":return r.stop()}}),r)})))()},getSize:function(e){var t=this;return(0,i.default)(a.default.mark((function n(){var r,i,s,c;return a.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.css||e,i=r.width,s=e.css||e,c=s.height,t.size){n.next=12;break}if(!i&&!c){n.next=10;break}return t.canvasWidth=i||t.canvasWidth,t.canvasHeight=c||t.canvasHeight,n.next=8,(0,o.sleep)(30);case 8:n.next=12;break;case 10:return n.next=12,t.getParentWeith();case 12:case"end":return n.stop()}}),n)})))()},canvasToTempFilePathSync:function(e){var t=this;this.stopWatch=this.$watch("done",(function(n){n&&(t.canvasToTempFilePath(e),t.stopWatch&&t.stopWatch())}),{immediate:!0})},getParentWeith:function(){var t=this;return new Promise((function(n){e.createSelectorQuery().in(t).select(".lime-painter").boundingClientRect().exec((function(e){var r=e[0]||{},a=r.width,i=r.height;t.parentWidth=Math.ceil(a||0),t.canvasWidth=t.parentWidth||300,t.canvasHeight=i||t.canvasHeight||150,n(e[0])}))}))},render:function(){var e=arguments,t=this;return(0,i.default)(a.default.mark((function n(){var r,i,s,c,d,h,f,l,p,v,m,x,g;return a.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.length>0&&void 0!==e[0]?e[0]:{},Object.keys(r).length){n.next=3;break}return n.abrupt("return",console.error("空对象"));case 3:return t.progress=0,t.done=!1,n.next=7,t.getSize(r);case 7:return n.next=9,t.getContext();case 9:if(i=n.sent,s=t.use2dCanvas,c=t.boardWidth,d=t.boardHeight,h=t.canvas,f=t.afterDelay,!s||h){n.next=13;break}return n.abrupt("return",Promise.reject(new Error("canvas 没创建")));case 13:return t.boundary={top:0,left:0,width:c,height:d},t.painter=null,t.painter||(l=r.css||r,p=l.width,(r.css||r).height,!p&&t.parentWidth&&Object.assign(r,{width:t.parentWidth}),v={context:i,canvas:h,width:c,height:d,pixelRatio:t.dpr,useCORS:t.useCORS,createImage:o.getImageInfo.bind(t),performance:t.performance,listen:{onProgress:function(e){t.progress=e,t.$emit("progress",e)},onEffectFail:function(e){t.$emit("faill",e)}}},t.painter=new u.default(v)),n.next=18,t.painter.source(JSON.parse(JSON.stringify(r)));case 18:return m=n.sent,x=m.width,g=m.height,t.boundary.height=t.canvasHeight=g,t.boundary.width=t.canvasWidth=x,n.next=25,(0,o.sleep)(t.sleep);case 25:return n.next=27,t.painter.render();case 27:return n.next=29,new Promise((function(e){return t.$nextTick(e)}));case 29:if(s){n.next=32;break}return n.next=32,t.canvasDraw();case 32:if(!f||!s){n.next=35;break}return n.next=35,(0,o.sleep)(f);case 35:return t.$emit("done"),t.done=!0,t.isCanvasToTempFilePath&&t.canvasToTempFilePath().then((function(e){t.$emit("success",e.tempFilePath)})).catch((function(e){t.$emit("fail",new Error(JSON.stringify(e)))})),n.abrupt("return",Promise.resolve({ctx:i,draw:t.painter,node:t.node}));case 39:case"end":return n.stop()}}),n)})))()},canvasDraw:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise((function(n,r){return e.ctx.draw(t,(function(){return setTimeout((function(){return n()}),e.afterDelay)}))}))},getContext:function(){var t=this;return(0,i.default)(a.default.mark((function n(){var r,i,s;return a.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.canvasWidth){n.next=4;break}return t.$emit("fail","painter no size"),console.error("[lime-painter]: 给画板或父级设置尺寸"),n.abrupt("return",Promise.reject());case 4:if(!t.ctx||!t.inited){n.next=6;break}return n.abrupt("return",Promise.resolve(t.ctx));case 6:if(r=t.type,i=t.use2dCanvas,t.dpr,t.boardWidth,t.boardHeight,s=function(){return new Promise((function(n){e.createSelectorQuery().in(t).select("#".concat(t.canvasId)).boundingClientRect().exec((function(r){if(r){var a=e.createCanvasContext(t.canvasId,t);t.inited||(t.inited=!0,t.use2dCanvas=!1,t.canvas=r),t.ctx=a,n(t.ctx)}else console.error("[lime-painter] no node")}))}))},i){n.next=10;break}return n.abrupt("return",s());case 10:return n.abrupt("return",new Promise((function(n){e.createSelectorQuery().in(t).select("#".concat(t.canvasId)).node().exec((function(e){var a=(e&&e[0]||{}).node;if(a){var i=a.getContext(r);t.inited||(t.inited=!0,t.use2dCanvas=!0,t.canvas=a),t.ctx=i,n(t.ctx)}else console.error("[lime-painter]: no size")}))})));case 11:case"end":return n.stop()}}),n)})))()},canvasToTempFilePath:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(){var r=(0,i.default)(a.default.mark((function r(s,c){var o,u,d,h,f,l,p,v,m,x,g,b,w,P,y,k,T,C;return a.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=t.use2dCanvas,u=t.canvasId,d=t.dpr,h=t.fileType,f=t.quality,l=function(){var e=(0,i.default)(a.default.mark((function e(r){var i,c;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.setFilePath(r.tempFilePath||r,n);case 3:i=e.sent,c=Object.assign(r,{tempFilePath:i}),n.success&&n.success(c),s(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.$emit("fail",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),p=t.boundary||t,v=p.top,m=void 0===v?0:v,x=p.left,g=void 0===x?0:x,b=p.width,w=p.height,P=b*d,y=w*d,k=Object.assign({x:g,y:m,width:b,height:w,destWidth:P,destHeight:y,canvasId:u,fileType:h,quality:f},n,{success:l}),(t.isPC||o)&&(k.canvas=t.canvas),!o||t.isPC){r.next=27;break}if(r.prev=8,T=t.canvas.toDataURL("image/".concat(n.fileType||h).replace(/pg/,"peg"),n.quality||f),!/data:,/.test(T)){r.next=14;break}e.canvasToTempFilePath(k,t),r.next=19;break;case 14:return r.next=16,t.setFilePath(T,n);case 16:C=r.sent,n.success&&n.success({tempFilePath:C}),s({tempFilePath:C});case 19:r.next=25;break;case 21:r.prev=21,r.t0=r.catch(8),n.fail&&n.fail(r.t0),c(r.t0);case 25:r.next=28;break;case 27:e.canvasToTempFilePath(k,t);case 28:case"end":return r.stop()}}),r,null,[[8,21]])})));return function(e,t){return r.apply(this,arguments)}}())}}};t.default=d}).call(this,n("df3c").default)}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/lime-painter/components/l-painter/l-painter-create-component",{"pages_game/components/lime-painter/components/l-painter/l-painter-create-component":function(e,t,n){n("df3c").createComponent(n("2ace"))}},[["pages_game/components/lime-painter/components/l-painter/l-painter-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/lime-painter/components/l-painter/l-painter.js'});require("pages_game/components/lime-painter/components/l-painter/l-painter.js");$gwx2_XC_11=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx2_XC_11 || [];
function gz$gwx2_XC_11_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_11_1)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_11_1
__WXML_GLOBAL__.ops_cached.$gwx2_XC_11_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-45fe7e50 vue-ref'])
Z([3,'popup'])
Z([1,false])
Z([3,'bottom'])
Z([3,'d9ee23c0-1'])
Z([[4],[[5],[1,'default']]])
Z([3,'eventdetail data-v-45fe7e50'])
Z([[7],[3,'isShowClose']])
Z(z[0])
Z([3,'data-v-45fe7e50'])
Z([[7],[3,'containerStyle']])
Z([[7],[3,'purchaseNotesUrl']])
Z(z[3])
Z([[2,'+'],[[2,'+'],[1,'d9ee23c0-2'],[1,',']],[1,'d9ee23c0-1']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_11_1);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_11_1
}
__WXML_GLOBAL__.ops_set.$gwx2_XC_11=z;
__WXML_GLOBAL__.ops_init.$gwx2_XC_11=true;
var x=['./pages_game/components/richNotes/richNotes.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx2_XC_11_1()
var cHM=_mz(z,'uni-popup',['bind:__l',0,'class',1,'data-ref',1,'maskClick',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var hIM=_n('view')
_rz(z,hIM,'class',7,e,s,gg)
var oJM=_v()
_(hIM,oJM)
if(_oz(z,8,e,s,gg)){oJM.wxVkey=1
}
var cKM=_mz(z,'mp-html',['bind:__l',9,'class',1,'containerStyle',2,'content',3,'setTitle',4,'vueId',5],[],e,s,gg)
_(hIM,cKM)
oJM.wxXCkey=1
_(cHM,hIM)
_(r,cHM)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2_XC_11";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx2_XC_11();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/richNotes/richNotes.wxml'] = [$gwx2_XC_11, './pages_game/components/richNotes/richNotes.wxml'];else __wxAppCode__['pages_game/components/richNotes/richNotes.wxml'] = $gwx2_XC_11( './pages_game/components/richNotes/richNotes.wxml' );
	;__wxRoute = "pages_game/components/richNotes/richNotes";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/richNotes/richNotes.js";define("pages_game/components/richNotes/richNotes.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/richNotes/richNotes"],{"077e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"cart",data:function(){return{dynamicHeightParam:"660rpx",containerStyle:"text-align: left;width:100%;"}},props:{purchaseNotesUrl:{type:String},titleIntroduce:{type:String},maxHeight:{type:Number,default:750},isShowClose:{type:Boolean,default:!1}},methods:{open:function(){this.$refs.popup.open()},close:function(){this.$refs.popup.close(),this.$emit("closeNotes")},save:function(){this.$emit("sureServicePupop"),this.$refs.popup.close()}},watch:{maxHeight:function(e,t){this.dynamicHeightParam=e-50-40+"rpx"}},computed:{dynamicHeight:function(){return"max-height:".concat(this.dynamicHeightParam,";min-height: 400rpx;")}}};t.default=o},1940:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o}));var o={uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,"5b0a"))},mpHtml:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/mp-html/components/mp-html/mp-html")]).then(n.bind(null,"6645"))}},i=function(){this.$createElement;var e=(this._self._c,this.isShowClose?this.$previewImageAddress("close_circle.png"):null);this.$mp.data=Object.assign({},{$root:{m0:e}})},c=[]},"53ea":function(e,t,n){"use strict";n.r(t);var o=n("077e"),i=n.n(o);for(var c in o)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t.default=i.a},"935c":function(e,t,n){"use strict";var o=n("a250");n.n(o).a},a250:function(e,t,n){},e1db:function(e,t,n){"use strict";n.r(t);var o=n("1940"),i=n("53ea");for(var c in i)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(c);n("935c");var r=n("828b"),a=Object(r.a)(i.default,o.b,o.c,!1,null,"45fe7e50",null,!1,o.a,void 0);t.default=a.exports}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/richNotes/richNotes-create-component",{"pages_game/components/richNotes/richNotes-create-component":function(e,t,n){n("df3c").createComponent(n("e1db"))}},[["pages_game/components/richNotes/richNotes-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/richNotes/richNotes.js'});require("pages_game/components/richNotes/richNotes.js");$gwx2_XC_12=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx2_XC_12 || [];
function gz$gwx2_XC_12_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_12_1)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_12_1
__WXML_GLOBAL__.ops_cached.$gwx2_XC_12_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,false])
Z([3,'__l'])
Z([3,'data-v-a26f13fc vue-ref'])
Z([3,'popup'])
Z(z[0])
Z([3,'center'])
Z([3,'ef3bb8a8-1'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_12_1);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_12_1
}
__WXML_GLOBAL__.ops_set.$gwx2_XC_12=z;
__WXML_GLOBAL__.ops_init.$gwx2_XC_12=true;
var x=['./pages_game/components/ticketsBooking/ticketsBooking.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx2_XC_12_1()
var lMM=_mz(z,'uni-popup',['animation',0,'bind:__l',1,'class',1,'data-ref',2,'maskClick',3,'type',4,'vueId',5,'vueSlots',6],[],e,s,gg)
_(r,lMM)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2_XC_12";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx2_XC_12();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/components/ticketsBooking/ticketsBooking.wxml'] = [$gwx2_XC_12, './pages_game/components/ticketsBooking/ticketsBooking.wxml'];else __wxAppCode__['pages_game/components/ticketsBooking/ticketsBooking.wxml'] = $gwx2_XC_12( './pages_game/components/ticketsBooking/ticketsBooking.wxml' );
	;__wxRoute = "pages_game/components/ticketsBooking/ticketsBooking";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/components/ticketsBooking/ticketsBooking.js";define("pages_game/components/ticketsBooking/ticketsBooking.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/components/ticketsBooking/ticketsBooking"],{"08f7":function(e,t,o){"use strict";var n=o("5861");o.n(n).a},"0e04":function(e,t,o){"use strict";o.d(t,"b",(function(){return s})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return n}));var n={uniPopup:function(){return o.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(o.bind(null,"5b0a"))}},s=function(){this.$createElement;var e=(this._self._c,this.$previewImageAddress("ticketsbooking-bg-2.png")),t=this.$previewImageAddress("close_plan_popup.png");this.$mp.data=Object.assign({},{$root:{m0:e,m1:t}})},i=[]},5861:function(e,t,o){},"5a23":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o("4380"),s=o("62ec"),i=o("6fe6"),r={name:"customerservice",props:{},mounted:function(){this.registerPhone=e.getStorageSync("authphone")},data:function(){return{proId:"",showId:"",verboseName:"",registerPhone:"",start:0,remart:"",showSaleSt:"",showSaleEt:""}},methods:{openPup:function(e,t,o,n,s){this.proId=e,this.showId=t,this.showSaleSt=n,this.showSaleEt=s,this.verboseName=o,this.$refs.popup.open()},closePop:function(){this.$refs.popup.close()},clearText:function(){this.remart="",this.start="0"},inputPhone:function(e){this.registerPhone=e.detail.value},descInput:function(){var e=this.remart.length;this.start=e,this.start>20&&(this.start=20),console.log(this.remart)},saveRegist:function(){var t=this;(0,s.isMobile)(this.registerPhone)?this.showId?(0,n.scarceRegister)({thirdOrderNo:this.proId,registerPhone:this.registerPhone,comments:this.remart,showId:this.showId,businessType:1,fareDes:this.verboseName,bookType:1,showSaleSt:this.showSaleSt,showSaleEt:this.showSaleEt}).then((function(o){e.showToast({title:"已提交",icon:"none"}),t.$emit("bookingSuccess",t.registerPhone),t.closePop(),e.requestSubscribeMessage({tmplIds:[i.wxnotifyid_bookingtickets],success:function(e){console.log(e)}})})).catch((function(e){})):(e.showToast({title:"已提交",icon:"none"}),this.$emit("bookingSuccess",this.registerPhone),this.closePop()):e.showToast({title:"无效的手机号",icon:"none"})}}};t.default=r}).call(this,o("df3c").default)},"9a74":function(e,t,o){"use strict";o.r(t);var n=o("0e04"),s=o("b99b");for(var i in s)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return s[e]}))}(i);o("08f7");var r=o("828b"),c=Object(r.a)(s.default,n.b,n.c,!1,null,"a26f13fc",null,!1,n.a,void 0);t.default=c.exports},b99b:function(e,t,o){"use strict";o.r(t);var n=o("5a23"),s=o.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(i);t.default=s.a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_game/components/ticketsBooking/ticketsBooking-create-component",{"pages_game/components/ticketsBooking/ticketsBooking-create-component":function(e,t,o){o("df3c").createComponent(o("9a74"))}},[["pages_game/components/ticketsBooking/ticketsBooking-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_game/components/ticketsBooking/ticketsBooking.js'});require("pages_game/components/ticketsBooking/ticketsBooking.js");$gwx2_XC_13=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx2_XC_13 || [];
function gz$gwx2_XC_13_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_13_1)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_13_1
__WXML_GLOBAL__.ops_cached.$gwx2_XC_13_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-3fef7253'])
Z([[2,'!='],[[7],[3,'platform']],[1,'TT']])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-3fef7253'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^back']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z([1,false])
Z([[7],[3,'titleText']])
Z([3,'1ab50830-1'])
Z(z[3])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[2])
Z(z[3])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'onchange']]]]]]]]])
Z([[7],[3,'addressJson']])
Z([3,'选择省、市、区'])
Z([3,'1ab50830-2'])
Z([[4],[[5],[1,'default']]])
Z([[7],[3,'isEdit']])
Z(z[2])
Z([3,'data-v-3fef7253 vue-ref'])
Z([3,'confirm'])
Z([3,'1ab50830-3'])
Z(z[2])
Z(z[22])
Z([3,'verifycode'])
Z([3,'1ab50830-4'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_13_1);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_13_1
}
__WXML_GLOBAL__.ops_set.$gwx2_XC_13=z;
__WXML_GLOBAL__.ops_init.$gwx2_XC_13=true;
var x=['./pages_game/gameevent/addaddress.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx2_XC_13_1()
var tOM=_n('view')
_rz(z,tOM,'class',0,e,s,gg)
var ePM=_v()
_(tOM,ePM)
if(_oz(z,1,e,s,gg)){ePM.wxVkey=1
var bQM=_mz(z,'customtitlebar',['bind:__l',2,'bind:back',1,'class',2,'data-event-opts',3,'defaultBack',4,'title',5,'vueId',6],[],e,s,gg)
_(ePM,bQM)
}
var oRM=_mz(z,'form',['bindsubmit',9,'class',1,'data-event-opts',2],[],e,s,gg)
var oTM=_mz(z,'uni-data-picker',['bind:__l',12,'bind:change',1,'class',2,'data-event-opts',3,'localdata',4,'popupTitle',5,'vueId',6,'vueSlots',7],[],e,s,gg)
_(oRM,oTM)
var xSM=_v()
_(oRM,xSM)
if(_oz(z,20,e,s,gg)){xSM.wxVkey=1
}
xSM.wxXCkey=1
_(tOM,oRM)
var fUM=_mz(z,'pup-limit',['bind:__l',21,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(tOM,fUM)
var cVM=_mz(z,'verify-code-popup',['bind:__l',25,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(tOM,cVM)
ePM.wxXCkey=1
ePM.wxXCkey=3
_(r,tOM)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2_XC_13";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx2_XC_13();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/gameevent/addaddress.wxml'] = [$gwx2_XC_13, './pages_game/gameevent/addaddress.wxml'];else __wxAppCode__['pages_game/gameevent/addaddress.wxml'] = $gwx2_XC_13( './pages_game/gameevent/addaddress.wxml' );
	;__wxRoute = "pages_game/gameevent/addaddress";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/gameevent/addaddress.js";define("pages_game/gameevent/addaddress.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/gameevent/addaddress"],{"119b":function(e,s,t){"use strict";var i=t("61aa");t.n(i).a},"4cce":function(e,s,t){},5195:function(e,s,t){"use strict";t.r(s);var i=t("59c4"),n=t.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){t.d(s,e,(function(){return i[e]}))}(o);s.default=n.a},"59c4":function(e,s,t){"use strict";(function(e){var i=t("47a9");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n=i(t("34cf")),o=t("5a5f"),d=t("62ec"),a=t("6fe6"),c={data:function(){return{platform:"WX",addressJson:[],address:{sheng:"",shengcode:"",shi:"",shicode:"",qu:"",qucode:""},showUniAddressSelector:!1,isEdit:!1,editName:"",editPhone:"",editProvince:"",editDetailAddress:"",editChecked:!1,id:"",titleText:""}},created:function(){},onLoad:function(e){if(console.log(e),e.itemdata){console.log("编辑"),this.isEdit=!0;var s,t=JSON.parse(e.itemdata);if(this.editName=t.consigneeName,this.editPhone=t.completePhone,s=t.cityName&&t.provinceName!=t.cityName?t.provinceName+t.cityName+t.districtName:t.provinceName==t.cityName&&t.cityName==t.districtName?t.provinceName:t.provinceName+t.districtName,console.log("replacestr",s),t.completeAddress){var i="/"+s+"/g";console.log("reg",i),this.editDetailAddress=t.completeAddress.replace(new RegExp(s),"")}this.editChecked=t.isDefault,this.id=t.id,this.address.sheng=t.provinceName,this.address.shengcode=t.province,t.cityName!=t.provinceName&&(this.address.shi=t.cityName),this.address.shicode=t.city,t.cityName!=t.districtName&&(this.address.qu=t.districtName),this.address.qucode=t.district,console.log("this.addresstwo",this.address)}else console.log("新建");this.titleText=this.isEdit?"编辑地址":"新建地址",this.initOssJsonData()},methods:{onchange:function(e){console.log("选择地区",e.detail.value);var s=(0,n.default)(e.detail.value,3),t=s[0],i=s[1],o=s[2];console.log(t+"---"),console.log(i+"---"),console.log(o+"---"),this.address.sheng=t.text,this.address.shengcode=t.value,null==i&&null==o?(this.address.shi="",this.address.shicode=t.value,this.address.qu="",this.address.qucode=t.value):null==o?(this.address.shi="",this.address.shicode=t.value,this.address.qu=i.text,this.address.qucode=i.value):(this.address.shi=i.text,this.address.shicode=i.value,this.address.qu=o.text,this.address.qucode=o.value)},switchChange:function(e){console.log("switch1 发生 change 事件，携带值为",e.detail.value)},delAddress:function(){var s=this;this.editChecked?e.showToast({title:"默认地址不可删除",icon:"none"}):e.showModal({title:"删除地址",content:"确认删除当前收货地址？\n删除后将无法恢复，只能重复添加",showCancel:!0,cancelText:"取消",confirmColor:"#FF3900",confirmText:"确定",success:function(t){t.confirm&&(0,o.deleteAddress)({id:s.id}).then((function(s){e.navigateBack({delta:1})})).catch((function(e){console.log(777777),console.log(e)}))},fail:function(e){}})},saveAddress:function(){},formSubmit:function(s){console.log("form发生了submit事件，携带数据为："+JSON.stringify(s.detail.value));var t=s.detail.value;t.consigneeName?t.phone?this.address.shengcode||this.address.shicode||this.address.qucode?t.address?this.validMobile(t.phone)?this.isEdit?(0,o.modifyAddress)({id:this.id,consigneeName:t.consigneeName,phone:t.phone,address:this.address.sheng+this.address.shi+this.address.qu+t.address,province:this.address.shengcode,city:this.address.shicode,district:this.address.qucode,isDefault:t.switch}).then((function(s){console.log(s);try{e.$emit("refreshAddrData")}catch(e){console.log("catch：未查询到refreshAddrData方法")}e.navigateBack({delta:1})})).catch((function(e){console.log(e)})):(0,o.createAddress)({consigneeName:t.consigneeName,phone:t.phone,address:this.address.sheng+this.address.shi+this.address.qu+t.address,province:this.address.shengcode,city:this.address.shicode,district:this.address.qucode,isDefault:t.switch}).then((function(s){console.log(s);try{e.$emit("refreshAddrData")}catch(e){console.log("catch：未查询到refreshAddrData方法")}e.navigateBack({delta:1})})).catch((function(e){console.log(e)})):e.showToast({title:"手机号格式错误",icon:"none"}):e.showToast({title:"收货人详细地址不能为空",icon:"none"}):e.showToast({title:"收货地址不能为空",icon:"none"}):e.showToast({title:"收货人手机号码不能为空",icon:"none"}):e.showToast({title:"收货人姓名不能为空",icon:"none"})},validMobile:function(e){return"810000"==this.address.shengcode||"820000"==this.address.shengcode?/^\d{8}$/.test(e)||(0,d.isMobile)(e):"710000"==this.address.shengcode&&/^\d{10}$/.test(e)||(0,d.isMobile)(e)},back:function(){console.log("from:"),e.showModal({content:"退出后将不保存本次编辑内容，确认退出吗？",showCancel:!0,cancelText:"继续编辑",confirmColor:"#FF3900",confirmText:"确认退出",success:function(s){s.confirm&&e.navigateBack({delta:1})},fail:function(e){}})},initPhone:function(s){var t=this;(0,o.getNodesensitizeMemberInfo)({addressId:s}).then((function(e){console.log(e),t.editPhone=e.data.phone})).catch((function(s){console.log(s),e.showToast({title:s.msg,icon:"none"})}))},handleCancel:function(){this.showUniAddressSelector=!1},handleConfirm:function(e){this.showUniAddressSelector=!1,this.areaInfoObj=e},initOssJsonData:function(){var s=this;0==this.addressJson.length&&e.request({url:a.ossUrl+"cms/ds_ds_district_address.json",success:function(e){s.addressJson=e.data}})}}};s.default=c}).call(this,t("df3c").default)},"5a39":function(e,s,t){"use strict";t.r(s);var i=t("f293"),n=t("5195");for(var o in n)["default"].indexOf(o)<0&&function(e){t.d(s,e,(function(){return n[e]}))}(o);t("119b"),t("c65d");var d=t("828b"),a=Object(d.a)(n.default,i.b,i.c,!1,null,"3fef7253",null,!1,i.a,void 0);s.default=a.exports},"61aa":function(e,s,t){},b712:function(e,s,t){"use strict";(function(e,s){var i=t("47a9");t("42bd"),t("861b"),i(t("3240"));var n=i(t("5a39"));e.__webpack_require_UNI_MP_PLUGIN__=t,s(n.default)}).call(this,t("3223").default,t("df3c").createPage)},c65d:function(e,s,t){"use strict";var i=t("4cce");t.n(i).a},f293:function(e,s,t){"use strict";t.d(s,"b",(function(){return n})),t.d(s,"c",(function(){return o})),t.d(s,"a",(function(){return i}));var i={customtitlebar:function(){return Promise.all([t.e("common/vendor"),t.e("components/customtitlebar/customtitlebar")]).then(t.bind(null,"e34b"))},uniDataPicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker")]).then(t.bind(null,"322d"))},VerifyCodePopup:function(){return Promise.all([t.e("common/vendor"),t.e("components/VerifyCodePopup/VerifyCodePopup")]).then(t.bind(null,"6689"))}},n=function(){this.$createElement;var e=(this._self._c,this.$previewImageAddress("arrow_right_gray.png"));this.$mp.data=Object.assign({},{$root:{m0:e}})},o=[]}},[["b712","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_game/gameevent/addaddress.js'});require("pages_game/gameevent/addaddress.js");$gwx2_XC_14=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx2_XC_14 || [];
function gz$gwx2_XC_14_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_14_1)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_14_1
__WXML_GLOBAL__.ops_cached.$gwx2_XC_14_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-e93494e4'])
Z([3,'__l'])
Z([3,'data-v-e93494e4 vue-ref'])
Z([3,'confirm'])
Z([3,'64a4d11f-1'])
Z(z[1])
Z(z[2])
Z([3,'verifycode'])
Z([3,'64a4d11f-2'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_14_1);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_14_1
}
__WXML_GLOBAL__.ops_set.$gwx2_XC_14=z;
__WXML_GLOBAL__.ops_init.$gwx2_XC_14=true;
var x=['./pages_game/gameevent/chooseseat.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx2_XC_14_1()
var oXM=_n('view')
_rz(z,oXM,'class',0,e,s,gg)
var cYM=_mz(z,'pup-limit',['bind:__l',1,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(oXM,cYM)
var oZM=_mz(z,'verify-code-popup',['bind:__l',5,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(oXM,oZM)
_(r,oXM)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2_XC_14";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx2_XC_14();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/gameevent/chooseseat.wxml'] = [$gwx2_XC_14, './pages_game/gameevent/chooseseat.wxml'];else __wxAppCode__['pages_game/gameevent/chooseseat.wxml'] = $gwx2_XC_14( './pages_game/gameevent/chooseseat.wxml' );
	;__wxRoute = "pages_game/gameevent/chooseseat";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/gameevent/chooseseat.js";define("pages_game/gameevent/chooseseat.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/gameevent/chooseseat"],{"2c79":function(e,t,a){"use strict";var o=a("ef43");a.n(o).a},"3a64":function(e,t,a){"use strict";a.r(t);var o=a("eac3"),s=a.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(i);t.default=s.a},"46e1":function(e,t,a){"use strict";(function(e,t){var o=a("47a9");a("42bd"),a("861b"),o(a("3240"));var s=o(a("b80f"));e.__webpack_require_UNI_MP_PLUGIN__=a,t(s.default)}).call(this,a("3223").default,a("df3c").createPage)},b80f:function(e,t,a){"use strict";a.r(t);var o=a("d2ae"),s=a("3a64");for(var i in s)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(i);a("2c79");var n=a("828b"),r=Object(n.a)(s.default,o.b,o.c,!1,null,"e93494e4",null,!1,o.a,void 0);t.default=r.exports},d2ae:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return o}));var o={VerifyCodePopup:function(){return Promise.all([a.e("common/vendor"),a.e("components/VerifyCodePopup/VerifyCodePopup")]).then(a.bind(null,"6689"))}},s=function(){this.$createElement,this._self._c},i=[]},eac3:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a("6fe6"),s=a("4380"),i={data:function(){return{url:"",seatBaseUrl:"",callbackUrl:"",formData:[],itemdata:{},cheapesData:[],lockkey:"",fareIndex:-1,pId:"",sId:"",aId:"",areaCount:1,pCode:"",showSeats:[],isAdd:!0,totalAmount:0,couponAmount:0,performanceSource:null,fromCode:1,showTime:"",showName:"",choiceSeatType:0,chooseVersion:0,ticketOutletId:""}},onLoad:function(t){var a=this;console.log("chooseseat",t),this.getOpenerEventChannel().on("acceptDataFromOpenerPage",(function(t){console.log("eventChannel",t),a.itemdata=JSON.parse(decodeURIComponent(t.itemdata)),a.fareIndex=t.fareIndex,a.showTime=t.showTime,a.showName=t.showName,a.pId=a.itemdata.id,a.fromCode=2,a.chooseVersion=t.chooseVersion;var s=JSON.parse(decodeURIComponent(t.navItemData));if(s&&(a.sId=s.id,-1!=a.fareIndex&&(a.pCode=s.showFarelevelList[a.fareIndex].code),a.choiceSeatType=s.choiceSeatType,a.areaCount=s.areaCount,1==s.areaCount&&(a.aId=s.areaId),a.performanceSource=s.performanceSource),a.ticketOutletId=t.ticketOutletId,"https://app-api.dasheng.top/"==o.baseURL||"https://xcx-api.dasheng.top/"==o.baseURL?a.seatBaseUrl=o.seatUrlPro:"https://app-api-test.dasheng.top/"==o.baseURL||"https://xcx-api-test.dasheng.top/"==o.baseURL?a.seatBaseUrl=o.seatUrlTest:"https://app-api-pre.dasheng.top/"!=o.baseURL&&"https://xcx-api-pre.dasheng.top/"!=o.baseURL||(a.seatBaseUrl=o.seatUrlPre),a.performanceSource){var i={inV:1,ticketOutletId:a.ticketOutletId,imageUrl:a.itemdata.imageUrl,name:a.itemdata.name,venueAddress:a.itemdata.venueAddress,realNameType:a.itemdata.realNameType,printTicketTypesMap:a.itemdata.printTicketTypesMap,id:a.itemdata.id,performanceSource:a.itemdata.performanceSource,showName:a.showName,showTime:a.showTime},n=JSON.stringify(i);console.log("params",n),a.callbackUrl=a.seatBaseUrl+"v="+a.chooseVersion+"#/pick-third-party?type=1&fromCode="+a.fromCode+"&auth="+e.getStorageSync("token")+"&pInfo="+n,console.log("callbackUrl",a.callbackUrl),a.goThirdChooseSeatUrl()}else{var r="pid="+a.pId+"&fromCode="+a.fromCode+"&sid="+a.sId+"&token="+e.getStorageSync("token")+"&inV=1&ticketOutletId="+a.ticketOutletId;1==a.areaCount&&(r+="&aid="+a.aId),a.pCode&&(r+="&pCode="+a.pCode),2==a.choiceSeatType?a.url=a.seatBaseUrl+"v="+a.chooseVersion+"/#/pick-area-seat?"+r:1==a.areaCount?a.url=a.seatBaseUrl+"v="+a.chooseVersion+"/#/pick-seat?"+r:a.url=a.seatBaseUrl+"v="+a.chooseVersion+"/#/pick-area?"+r}console.log("chooseseaturl",a.url)}))},methods:{handleMessage:function(t){if(console.log("接收到的消息："+t.detail.data),this.lockkey=JSON.parse(JSON.stringify(t.detail.data[0].data.key)),this.couponAmount=parseFloat(JSON.parse(JSON.stringify(t.detail.data[0].data.deltaPrice))).toFixed(2),this.totalAmount=JSON.parse(JSON.stringify(t.detail.data[0].data.totalAmount)),console.log("接收到的消息："+JSON.parse(JSON.stringify(t.detail.data[0].data.key))),this.showSeats=JSON.parse(JSON.stringify(t.detail.data[0].data.showSeats)),console.log("接收到的消息："+JSON.stringify(t.detail.data[0].data.showSeats)),this.showSeats.length){var a=this.showSeats.length;if(this.showSeats.length)for(var o=0;o<this.showSeats.length;o++){if(this.formData.length){this.isAdd=!0;for(var s=0;s<this.formData.length;s++)this.showSeats[o].salePrice==this.formData[s].price&&(this.formData[s].ticketNum=this.formData[s].ticketNum+1,this.isAdd=!1);this.isAdd&&(console.log("aaaa"),this.formData.push({price:this.showSeats[o].salePrice,ticketNum:1,verboseName:this.showSeats[o].snapshot}))}else this.formData.push({price:this.showSeats[o].salePrice,ticketNum:1,verboseName:this.showSeats[o].snapshot});this.cheapesData.push({fareLevel:this.showSeats[o].fareLevel,price:this.showSeats[o].salePrice,registerName:"",registerNo:"",seatId:this.showSeats[o].id,realnameRelationId:"",verboseName:this.showSeats[o].fareLevelVerboseName,seatSnapshot:this.showSeats[o].snapshot})}var i=JSON.stringify(this.itemdata);e.navigateTo({url:"/pages_game/gameevent/eventpay?itemdata="+encodeURIComponent(i)+"&cheapesData=".concat(JSON.stringify(this.cheapesData),"&formData=").concat(JSON.stringify(this.formData),"&totalTicketNum=\n\t\t\t\t\t\t\t").concat(a,"&totalAmount=").concat(this.totalAmount,"&couponAmount=").concat(this.couponAmount,"&lockkey=")+this.lockkey+"&showTime=".concat(this.showTime,"&ticketOutletId=").concat(this.ticketOutletId)})}},goThirdChooseSeatUrl:function(){var t=this;(0,s.getThirdToken)({showId:this.sId,callbackUrl:encodeURIComponent(this.callbackUrl)}).then((function(e){console.log(e),e&&(t.url=e.data.url),console.log("chooseseaturl",t.url)})).catch((function(t){console.log(t),e.showToast({title:t.msg,icon:"none"})}))}}};t.default=i}).call(this,a("df3c").default)},ef43:function(e,t,a){}},[["46e1","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_game/gameevent/chooseseat.js'});require("pages_game/gameevent/chooseseat.js");$gwx2_XC_15=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx2_XC_15 || [];
function gz$gwx2_XC_15_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_XC_15_1)return __WXML_GLOBAL__.ops_cached.$gwx2_XC_15_1
__WXML_GLOBAL__.ops_cached.$gwx2_XC_15_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-e2e02b9e'])
Z([[2,'!='],[[7],[3,'platform']],[1,'TT']])
Z([3,'transparent'])
Z([3,'__l'])
Z([3,'__e'])
Z([1,false])
Z([3,'data-v-e2e02b9e'])
Z([1,true])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z(z[7])
Z([[2,'?:'],[[2,'!='],[[7],[3,'platform']],[1,'ALI']],[1,'left'],[1,'']])
Z(z[7])
Z([3,'支付完成'])
Z([3,'38d9e70c-1'])
Z([3,'mainContent data-v-e2e02b9e'])
Z([3,'see-group data-v-e2e02b9e'])
Z([[2,'+'],[[2,'+'],[1,'justify-content:'],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'pickUpEntity']],[3,'desc']],[1,undefined]],[1,'center'],[1,'space-between']]],[1,';']])
Z([[6],[[7],[3,'pickUpEntity']],[3,'desc']])
Z(z[6])
Z([[2,'=='],[[6],[[7],[3,'pickUpEntity']],[3,'printTicketTypeCode']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'pickUpEntity']],[3,'printTicketTypeCode']],[1,3]])
Z([[2,'=='],[[6],[[7],[3,'pickUpEntity']],[3,'printTicketTypeCode']],[1,0]])
Z([[2,'&&'],[[7],[3,'adImgInfo']],[[6],[[7],[3,'adImgInfo']],[3,'imageUrl']]])
Z([[2,'>'],[[6],[[7],[3,'$root']],[3,'g0']],[1,0]])
Z(z[3])
Z(z[4])
Z(z[6])
Z([3,'2'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^goGoodDetail']],[[4],[[5],[[4],[[5],[1,'goGoodDetail']]]]]]]]])
Z(z[7])
Z(z[5])
Z([[7],[3,'goodslist']])
Z([3,'38d9e70c-2'])
Z(z[5])
Z([[7],[3,'showPopupIncome']])
Z(z[3])
Z(z[4])
Z(z[6])
Z([[7],[3,'popupContent']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^close']],[[4],[[5],[[4],[[5],[1,'e0']]]]]]]]])
Z([[7],[3,'popupType']])
Z([3,'38d9e70c-3'])
Z(z[3])
Z([3,'data-v-e2e02b9e vue-ref'])
Z([3,'confirm'])
Z([3,'38d9e70c-4'])
Z(z[3])
Z(z[43])
Z([3,'verifycode'])
Z([3,'38d9e70c-5'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_XC_15_1);return __WXML_GLOBAL__.ops_cached.$gwx2_XC_15_1
}
__WXML_GLOBAL__.ops_set.$gwx2_XC_15=z;
__WXML_GLOBAL__.ops_init.$gwx2_XC_15=true;
var x=['./pages_game/gameevent/eventpayfinish.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx2_XC_15_1()
var a2M=_n('view')
_rz(z,a2M,'class',0,e,s,gg)
var t3M=_v()
_(a2M,t3M)
if(_oz(z,1,e,s,gg)){t3M.wxVkey=1
var o6M=_mz(z,'uni-nav-bar',['backgroundColor',2,'bind:__l',1,'bind:clickLeft',2,'border',3,'class',4,'dark',5,'data-event-opts',6,'fixed',7,'leftIcon',8,'statusBar',9,'title',10,'vueId',11],[],e,s,gg)
_(t3M,o6M)
}
var x7M=_n('view')
_rz(z,x7M,'class',14,e,s,gg)
var c0M=_mz(z,'view',['class',15,'style',1],[],e,s,gg)
var hAN=_v()
_(c0M,hAN)
if(_oz(z,17,e,s,gg)){hAN.wxVkey=1
}
var oBN=_n('view')
_rz(z,oBN,'class',18,e,s,gg)
var cCN=_v()
_(oBN,cCN)
if(_oz(z,19,e,s,gg)){cCN.wxVkey=1
}
else{cCN.wxVkey=2
var oDN=_v()
_(cCN,oDN)
if(_oz(z,20,e,s,gg)){oDN.wxVkey=1
}
else{oDN.wxVkey=2
var lEN=_v()
_(oDN,lEN)
if(_oz(z,21,e,s,gg)){lEN.wxVkey=1
}
lEN.wxXCkey=1
}
oDN.wxXCkey=1
}
cCN.wxXCkey=1
_(c0M,oBN)
hAN.wxXCkey=1
_(x7M,c0M)
var o8M=_v()
_(x7M,o8M)
if(_oz(z,22,e,s,gg)){o8M.wxVkey=1
}
var f9M=_v()
_(x7M,f9M)
if(_oz(z,23,e,s,gg)){f9M.wxVkey=1
var aFN=_mz(z,'mallitem',['bind:__l',24,'bind:goGoodDetail',1,'class',2,'columnCount',3,'data-event-opts',4,'isFromPro',5,'isMall',6,'list',7,'vueId',8],[],e,s,gg)
_(f9M,aFN)
}
o8M.wxXCkey=1
f9M.wxXCkey=1
f9M.wxXCkey=3
_(a2M,x7M)
var e4M=_v()
_(a2M,e4M)
if(_oz(z,33,e,s,gg)){e4M.wxVkey=1
}
var b5M=_v()
_(a2M,b5M)
if(_oz(z,34,e,s,gg)){b5M.wxVkey=1
var tGN=_mz(z,'popup-income',['bind:__l',35,'bind:close',1,'class',2,'content',3,'data-event-opts',4,'type',5,'vueId',6],[],e,s,gg)
_(b5M,tGN)
}
var eHN=_mz(z,'pup-limit',['bind:__l',42,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(a2M,eHN)
var bIN=_mz(z,'verify-code-popup',['bind:__l',46,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(a2M,bIN)
t3M.wxXCkey=1
t3M.wxXCkey=3
e4M.wxXCkey=1
b5M.wxXCkey=1
b5M.wxXCkey=3
_(r,a2M)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx2_XC_15";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx2_XC_15();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_game/gameevent/eventpayfinish.wxml'] = [$gwx2_XC_15, './pages_game/gameevent/eventpayfinish.wxml'];else __wxAppCode__['pages_game/gameevent/eventpayfinish.wxml'] = $gwx2_XC_15( './pages_game/gameevent/eventpayfinish.wxml' );
	;__wxRoute = "pages_game/gameevent/eventpayfinish";__wxRouteBegin = true;__wxAppCurrentFile__="pages_game/gameevent/eventpayfinish.js";define("pages_game/gameevent/eventpayfinish.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
require("../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_game/gameevent/eventpayfinish"],{"0fa6":function(e,n,t){},1011:function(e,n,t){"use strict";t.r(n);var o=t("290c"),i=t("6ff8");for(var a in i)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("9609"),t("ffec");var s=t("828b"),r=Object(s.a)(i.default,o.b,o.c,!1,null,"e2e02b9e",null,!1,o.a,void 0);n.default=r.exports},"290c":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}));var o={uniNavBar:function(){return t.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"f9b6"))},mallitem:function(){return t.e("components/mallitem/mallitem").then(t.bind(null,"4914"))},PopupIncome:function(){return t.e("components/PopupIncome/PopupIncome").then(t.bind(null,"4eaf"))},VerifyCodePopup:function(){return Promise.all([t.e("common/vendor"),t.e("components/VerifyCodePopup/VerifyCodePopup")]).then(t.bind(null,"6689"))}},i=function(){var e=this,n=(e.$createElement,e._self._c,e.$previewImageAddress("event_detail_blur_foreground.png")),t=e.$previewImageAddress("event_payfinish_top_content_bg.png"),o=e.$previewImageAddress("authention_success.png"),i=e._f("formatTime")(e.showTime,"yyyy-mm-dd hh:mi"),a=e.goodslist.length;e._isMounted||(e.e0=function(n){e.showPopupIncome=!1}),e.$mp.data=Object.assign({},{$root:{m0:n,m1:t,m2:o,f0:i,g0:a}})},a=[]},"3c3d":function(e,n,t){"use strict";(function(e,n){var o=t("47a9");t("42bd"),t("861b"),o(t("3240"));var i=o(t("1011"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(i.default)}).call(this,t("3223").default,t("df3c").createPage)},"3fd2":function(e,n,t){},"6ff8":function(e,n,t){"use strict";t.r(n);var o=t("931e"),i=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n.default=i.a},"931e":function(e,n,t){"use strict";(function(e){var o=t("47a9");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,a=o(t("7eb4")),s=o(t("ee10")),r=t("54f8"),d=t("082f"),u=t("aeee"),l=t("d9e3"),c=t("7cec"),p=t("92e3"),m={components:{},data:function(){return{itemdata:{},name:"",eventId:"",imageUrl:"",amount:"",seatSnapshot:"",pickUpEntity:{},orderId:"",totalAmountVisible:"",showPopupIncome:!1,popupType:"",popupContent:"",showTime:"",showName:"",goodslist:[],platform:"WX",isImage404:!1,adImgInfo:null}},onLoad:function(e){e&&(this.name=e.name,this.eventId=e.eventId,this.imageUrl=e.imageUrl,e.pickUpEntity&&(this.pickUpEntity=JSON.parse(decodeURIComponent(e.pickUpEntity))),this.orderId=e.orderId,this.totalAmountVisible=e.totalAmountVisible,this.showTime=e.showTime,this.showName=e.showName,this.initRelationGetList(),this.getAdInfo()),this.getVipInfo()},onShow:function(){},methods:{seeEle:function(){e.redirectTo({url:"/pages_wallet/wallet/ticketWallet?type=0"})},seeOrder:function(n){e.redirectTo({url:"/pages_order/mine/activityorder?index=2&businessType=1"})},onShareAppMessage:function(e){return"button"===e.from&&console.log(e.target),{title:this.name,path:"/pages_game/gameevent/eventdetail?id="+this.eventId,mpId:"wxf09488e2690812cd"}},back:function(){e.setStorageSync("tabPath","/pages/mine/mine"),e.switchTab({url:"/pages/mine/mine"})},getVipInfo:function(){var e=this;return(0,s.default)(a.default.mark((function n(){var t,o,i,s,d;return a.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,r.get_payment_growth)({paymentAmount:e.totalAmountVisible});case 2:(t=n.sent).skipModel&&t.skipModel.alt&&(t.skipModel.alt.points||t.skipModel.alt.pulses)&&(o=t.skipModel.alt.points,i=t.skipModel.alt.pulses,s="支付订单成功",d="",o&&i?(d=u.Both_type,s+="获得".concat(i,"票豆和").concat(o,"积分")):i?(d=u.TicketBean_type,s+="获得".concat(i,"票豆")):(d=u.Integral_type,s+="获得".concat(o,"积分")),e.popupContent=s,e.popupType=d,e.showPopupIncome=!0);case 4:case"end":return n.stop()}}),n)})))()},initRelationGetList:function(){var e=this;(0,d.relationGetList)({performanceId:this.eventId}).then((function(n){console.log(n),e.goodslist=n.data,console.log("this.goodslist",e.goodslist)})).catch((function(e){console.log(e)}))},goGoodDetail:function(n){e.navigateTo({url:"/pages_mall/mall/gooddetail?id="+n})},addCalendarEvent:function(){console.log("-------",this.name+"---"+this.showName+"---"+this.showTime),this.name&&this.showName&&this.showTime&&("ios"===e.getSystemInfoSync().platform?createEventCalendar({title:this.name,notes:this.showName,startDate:this.showTime,endDate:(0,l.dateStrAddHour)(this.showTime,2),alarmOffset:[-1800],isAllDay:!1,weeks:[],success:function(n){console.log(n),e.showToast({title:"已添加到日历",icon:"none"})},fail:function(e){console.log(e)}}):"android"===e.getSystemInfoSync().platform&&this.requestAndroidPermission())},requestAndroidPermission:function(){var e=this;return(0,s.default)(a.default.mark((function n(){var t,o,s,r,d,u,c,p;return a.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,permision.requestAndroidPermission("android.permission.READ_CALENDAR");case 2:if(1!=n.sent){n.next=10;break}return n.next=6,permision.requestAndroidPermission("android.permission.WRITE_CALENDAR");case 6:1==n.sent&&(t=plus.android.importClass("android.net.Uri"),o=plus.android.runtimeMainActivity(),s=plus.android.invoke(o.getContentResolver(),"query",t.parse("content://com.android.calendar/calendars"),null,null,null,null),plus.android.invoke(s,"moveToLast"),i=plus.android.invoke(s,"getString",plus.android.invoke(s,"getColumnIndex","_id")),r=plus.android.importClass("android.content.ContentValues"),(d=new r).put("title",e.name),d.put("description",e.showName),d.put("calendar_id",i),d.put("dtstart",(0,l.dateStrChangeLong)(e.showTime)),d.put("dtend",(0,l.dateStrChangeLong)(e.showTime)+72e5),d.put("hasAlarm",1),d.put("eventTimezone","Asia/Shanghai"),u=plus.android.invoke(plus.android.runtimeMainActivity().getContentResolver(),"insert",t.parse("content://com.android.calendar/events"),d),c=plus.android.invoke(u,"getLastPathSegment"),(p=new r).put("event_id",c),p.put("minutes","30"),p.put("method","1"),plus.android.invoke(o.getContentResolver(),"insert",t.parse("content://com.android.calendar/reminders"),p)),n.next=11;break;case 10:case 11:case"end":return n.stop()}}),n)})))()},handleImageError:function(){this.isImage404=!0},getAdInfo:function(){var e=this;(0,c.getAdInfoListByChannel)({channel:1,keyNumList:[124],thirdNo:this.eventId}).then((function(n){var t,o;console.log(n),e.adImgInfo=(null===(t=n.data)||void 0===t||null===(o=t[0].infoImgList)||void 0===o?void 0:o[0])||null,console.log("this.adImgInfo",e.adImgInfo)})).catch((function(e){}))},adJump:function(){this.isImage404||(0,p.adClick)(this.adImgInfo)}}};n.default=m}).call(this,t("df3c").default)},9609:function(e,n,t){"use strict";var o=t("3fd2");t.n(o).a},ffec:function(e,n,t){"use strict";var o=t("0fa6");t.n(o).a}},[["3c3d","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_game/gameevent/eventpayfinish.js'});require("pages_game/gameevent/eventpayfinish.js");