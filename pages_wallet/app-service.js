var __wxAppData=__wxAppData||{};var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};if(this&&this.__g===undefined)Object.defineProperty(this,"__g",{configurable:false,enumerable:false,writable:false,value:function(){function D(e,t){if(typeof t!="undefined")e.children.push(t)}function S(e){if(typeof e!="undefined")return{tag:"virtual",wxKey:e,children:[]};return{tag:"virtual",children:[]}}function v(e){return{tag:"wx-"+e,attr:{},children:[],n:[],raw:{},generics:{}}}function e(e,t){t&&e.properities.push(t)}function t(e,t,r){return typeof e[r]!="undefined"?e[r]:t[r]}function u(e){console.warn("WXMLRT_"+g+":"+e)}function r(e,t){u(t+":-1:-1:-1: Template `"+e+"` is being called recursively, will be stop.")}var s=console.warn;var n=console.log;function o(){function e(){}e.prototype={hn:function(e,t){if(typeof e=="object"){var r=0;var n=false,o=false;for(var a in e){n=n|a==="__value__";o=o|a==="__wxspec__";r++;if(r>2)break}return r==2&&n&&o&&(t||e.__wxspec__!=="m"||this.hn(e.__value__)==="h")?"h":"n"}return"n"},nh:function(e,t){return{__value__:e,__wxspec__:t?t:true}},rv:function(e){return this.hn(e,true)==="n"?e:this.rv(e.__value__)},hm:function(e){if(typeof e=="object"){var t=0;var r=false,n=false;for(var o in e){r=r|o==="__value__";n=n|o==="__wxspec__";t++;if(t>2)break}return t==2&&r&&n&&(e.__wxspec__==="m"||this.hm(e.__value__))}return false}};return new e}var A=o();function T(e){var t=e.split("\n "+" "+" "+" ");for(var r=0;r<t.length;++r){if(0==r)continue;if(")"===t[r][t[r].length-1])t[r]=t[r].replace(/\s\(.*\)$/,"");else t[r]="at anonymous function"}return t.join("\n "+" "+" "+" ")}function a(M){function m(e,t,r,n,o){var a=false;var i=e[0][1];var p,u,l,f,v,c;switch(i){case"?:":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):x(e[3],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"&&":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):A.rv(p);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"||":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?A.rv(p):x(e[2],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"+":case"*":case"/":case"%":case"|":case"^":case"&":case"===":case"==":case"!=":case"!==":case">=":case"<=":case">":case"<":case"<<":case">>":p=x(e[1],t,r,n,o,a);u=x(e[2],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");switch(i){case"+":f=A.rv(p)+A.rv(u);break;case"*":f=A.rv(p)*A.rv(u);break;case"/":f=A.rv(p)/A.rv(u);break;case"%":f=A.rv(p)%A.rv(u);break;case"|":f=A.rv(p)|A.rv(u);break;case"^":f=A.rv(p)^A.rv(u);break;case"&":f=A.rv(p)&A.rv(u);break;case"===":f=A.rv(p)===A.rv(u);break;case"==":f=A.rv(p)==A.rv(u);break;case"!=":f=A.rv(p)!=A.rv(u);break;case"!==":f=A.rv(p)!==A.rv(u);break;case">=":f=A.rv(p)>=A.rv(u);break;case"<=":f=A.rv(p)<=A.rv(u);break;case">":f=A.rv(p)>A.rv(u);break;case"<":f=A.rv(p)<A.rv(u);break;case"<<":f=A.rv(p)<<A.rv(u);break;case">>":f=A.rv(p)>>A.rv(u);break;default:break}return l?A.nh(f,"c"):f;break;case"-":p=e.length===3?x(e[1],t,r,n,o,a):0;u=e.length===3?x(e[2],t,r,n,o,a):x(e[1],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");f=l?A.rv(p)-A.rv(u):p-u;return l?A.nh(f,"c"):f;break;case"!":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=!A.rv(p);return l?A.nh(f,"c"):f;case"~":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=~A.rv(p);return l?A.nh(f,"c"):f;default:s("unrecognized op"+i)}}function x(e,t,r,n,o,a){var i=e[0];var p=false;if(typeof a!=="undefined")o.ap=a;if(typeof i==="object"){var u=i[0];var l,f,v,c,s,y,b,d,h,_,g;switch(u){case 2:return m(e,t,r,n,o);break;case 4:return x(e[1],t,r,n,o,p);break;case 5:switch(e.length){case 2:l=x(e[1],t,r,n,o,p);return M?[l]:[A.rv(l)];return[l];break;case 1:return[];break;default:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);l.push(M?v:A.rv(v));return l;break}break;case 6:l=x(e[1],t,r,n,o);var w=o.ap;h=A.hn(l)==="h";f=h?A.rv(l):l;o.is_affected|=h;if(M){if(f===null||typeof f==="undefined"){return h?A.nh(undefined,"e"):undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return h||_?A.nh(undefined,"e"):undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return h||_?g?y:A.nh(y,"e"):y}else{if(f===null||typeof f==="undefined"){return undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return g?A.rv(y):y}case 7:switch(e[1][0]){case 11:o.is_affected|=A.hn(n)==="h";return n;case 3:b=A.rv(r);d=A.rv(t);v=e[1][1];if(n&&n.f&&n.f.hasOwnProperty(v)){l=n.f;o.ap=true}else{l=b&&b.hasOwnProperty(v)?r:d&&d.hasOwnProperty(v)?t:undefined}if(M){if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;y=h&&!g?A.nh(y,"e"):y;return y}}else{if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;return A.rv(y)}}return undefined}break;case 8:l={};l[e[1]]=x(e[2],t,r,n,o,p);return l;break;case 9:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);function O(e,t,r){var n,o;h=A.hn(e)==="h";_=A.hn(t)==="h";f=A.rv(e);c=A.rv(t);for(var a in c){if(r||!f.hasOwnProperty(a)){f[a]=M?_?A.nh(c[a],"e"):c[a]:A.rv(c[a])}}return e}var s=l;var j=true;if(typeof e[1][0]==="object"&&e[1][0][0]===10){l=v;v=s;j=false}if(typeof e[1][0]==="object"&&e[1][0][0]===10){var P={};return O(O(P,l,j),v,j)}else return O(l,v,j);break;case 10:l=x(e[1],t,r,n,o,p);l=M?l:A.rv(l);return l;break;case 12:var P;l=x(e[1],t,r,n,o);if(!o.ap){return M&&A.hn(l)==="h"?A.nh(P,"f"):P}var w=o.ap;v=x(e[2],t,r,n,o,p);o.ap=w;h=A.hn(l)==="h";_=N(v);f=A.rv(l);c=A.rv(v);snap_bb=K(c,"nv_");try{P=typeof f==="function"?K(f.apply(null,snap_bb)):undefined}catch(t){t.message=t.message.replace(/nv_/g,"");t.stack=t.stack.substring(0,t.stack.indexOf("\n",t.stack.lastIndexOf("at nv_")));t.stack=t.stack.replace(/\snv_/g," ");t.stack=T(t.stack);if(n.debugInfo){t.stack+="\n "+" "+" "+" at "+n.debugInfo[0]+":"+n.debugInfo[1]+":"+n.debugInfo[2];console.error(t)}P=undefined}return M&&(_||h)?A.nh(P,"f"):P}}else{if(i===3||i===1)return e[1];else if(i===11){var l="";for(var D=1;D<e.length;D++){var S=A.rv(x(e[D],t,r,n,o,p));l+=typeof S==="undefined"?"":S}return l}}}function e(e,t,r,n,o,a){if(e[0]=="11182016"){n.debugInfo=e[2];return x(e[1],t,r,n,o,a)}else{n.debugInfo=null;return x(e,t,r,n,o,a)}}return e}var f=a(true);var c=a(false);function i(e,t,r,n,o,a,i,p){{var u={is_affected:false};var l=f(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(a)||u.is_affected!=p){console.warn("A. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(a)+", "+p+" is expected")}}{var u={is_affected:false};var l=c(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(i)||u.is_affected!=p){console.warn("B. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(i)+", "+p+" is expected")}}}function y(e,t,r,n,o,a,i,p,u){var l=A.hn(e)==="n";var f=A.rv(n);var v=f.hasOwnProperty(i);var c=f.hasOwnProperty(p);var s=f[i];var y=f[p];var b=Object.prototype.toString.call(A.rv(e));var d=b[8];if(d==="N"&&b[10]==="l")d="X";var h;if(l){if(d==="A"){var _;for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");_=A.rv(e[g]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;var _;for(var O in e){f[i]=e[O];f[p]=l?O:A.nh(O,"h");_=A.rv(e[O]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<e;g++){f[i]=g;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}else{var j=A.rv(e);var _,P;if(d==="A"){for(var g=0;g<j.length;g++){P=j[g];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?g:A.nh(g,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;for(var O in j){P=j[O];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?O:A.nh(O,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<j.length;g++){P=A.nh(j[g],"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<j;g++){P=A.nh(g,"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}if(v){f[i]=s}else{delete f[i]}if(c){f[p]=y}else{delete f[p]}}function N(e){if(A.hn(e)=="h")return true;if(typeof e!=="object")return false;for(var t in e){if(e.hasOwnProperty(t)){if(N(e[t]))return true}}return false}function b(e,t,r,n,o){var a=false;var i=K(n,"",2);if(o.ap&&i&&i.constructor===Function){t="$wxs:"+t;e.attr["$gdc"]=K}if(o.is_affected||N(n)){e.n.push(t);e.raw[t]=n}e.attr[t]=i}function d(e,t,r,n,o,a){a.opindex=r;var i={},p;var u=c(z[r],n,o,a,i);b(e,t,r,u,i)}function h(e,t,r,n,o,a,i){i.opindex=n;var p={},u;var l=c(e[n],o,a,i,p);b(t,r,n,l,p)}function p(e,t,r,n){n.opindex=e;var o={};var a=c(z[e],t,r,n,o);return a&&a.constructor===Function?undefined:a}function l(e,t,r,n,o){o.opindex=t;var a={};var i=c(e[t],r,n,o,a);return i&&i.constructor===Function?undefined:i}function _(e,t,r,n,o){var o=o||{};n.opindex=e;return f(z[e],t,r,n,o)}function w(e,t,r,n,o,a){var a=a||{};o.opindex=t;return f(e[t],r,n,o,a)}function O(e,t,r,n,o,a,i,p,u){var l={};var f=_(e,r,n,o);y(f,t,r,n,o,a,i,p,u)}function j(e,t,r,n,o,a,i,p,u,l){var f={};var v=w(e,t,n,o,a);y(v,r,n,o,a,i,p,u,l)}function P(e,t,r,n,o,a){var i=v(e);var p=0;for(var u=0;u<t.length;u+=2){if(p+t[u+1]<0){i.attr[t[u]]=true}else{d(i,t[u],p+t[u+1],n,o,a);if(p===0)p=t[u+1]}}for(var u=0;u<r.length;u+=2){if(p+r[u+1]<0){i.generics[r[u]]=""}else{var l=c(z[p+r[u+1]],n,o,a);if(l!="")l="wx-"+l;i.generics[r[u]]=l;if(p===0)p=r[u+1]}}return i}function M(e,t,r,n,o,a,i){var p=v(t);var u=0;for(var l=0;l<r.length;l+=2){if(u+r[l+1]<0){p.attr[r[l]]=true}else{h(e,p,r[l],u+r[l+1],o,a,i);if(u===0)u=r[l+1]}}for(var l=0;l<n.length;l+=2){if(u+n[l+1]<0){p.generics[n[l]]=""}else{var f=c(e[u+n[l+1]],o,a,i);if(f!="")f="wx-"+f;p.generics[n[l]]=f;if(u===0)u=n[l+1]}}return p}var m=function(){if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){x();C();k();U();I();L();E();R();F()}if(typeof __WXML_GLOBAL__!=="undefined")__WXML_GLOBAL__.wxs_nf_init=true};var x=function(){Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"});Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return"[object Object]"}})};var C=function(){Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"});Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length},set:function(){}});Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return"[function Function]"}})};var k=function(){Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join()}});Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(e){e=undefined==e?",":e;var t="";for(var r=0;r<this.length;++r){if(0!=r)t+=e;if(null==this[r]||undefined==this[r])t+="";else if(typeof this[r]=="function")t+=this[r].nv_toString();else if(typeof this[r]=="object"&&this[r].nv_constructor==="Array")t+=this[r].nv_join();else t+=this[r].toString()}return t}});Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"});Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat});Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop});Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push});Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse});Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift});Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice});Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort});Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice});Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift});Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf});Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf});Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every});Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some});Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach});Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map});Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter});Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce});Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight});Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var U=function(){Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"});Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString});Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf});Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt});Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt});Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat});Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf});Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf});Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare});Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match});Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace});Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search});Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice});Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split});Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring});Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase});Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase});Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase});Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase});Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim});Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var I=function(){Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"});Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString});Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})};var L=function(){Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE});Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE});Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY});Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY});Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"});Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString});Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString});Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf});Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed});Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential});Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})};var E=function(){Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E});Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10});Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2});Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E});Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E});Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI});Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2});Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2});Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs});Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos});Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin});Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan});Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2});Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil});Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos});Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp});Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor});Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log});Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max});Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min});Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow});Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random});Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round});Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin});Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt});Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})};var R=function(){Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"});Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse});Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC});Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now});Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString});Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString});Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString});Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString});Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString});Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString});Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf});Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime});Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear});Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear});Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth});Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth});Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate});Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate});Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay});Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay});Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours});Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours});Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes});Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes});Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds});Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds});Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds});Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset});Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime});Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds});Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds});Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds});Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes});Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes});Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours});Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours});Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate});Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate});Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth});Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth});Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear});Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear});Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString});Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString});Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})};var F=function(){Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"});Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec});Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test});Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString});Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex},set:function(e){this.lastIndex=e}})};m();var J=function(){var e=Array.prototype.slice.call(arguments);e.unshift(Date);return new(Function.prototype.bind.apply(Date,e))};var B=function(){var e=Array.prototype.slice.call(arguments);e.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp,e))};var Y={};Y.nv_log=function(){var e="WXSRT:";for(var t=0;t<arguments.length;++t)e+=arguments[t]+" ";console.log(e)};var G=parseInt,X=parseFloat,H=isNaN,V=isFinite,$=decodeURI,W=decodeURIComponent,Q=encodeURI,q=encodeURIComponent;function K(e,t,r){e=A.rv(e);if(e===null||e===undefined)return e;if(typeof e==="string"||typeof e==="boolean"||typeof e==="number")return e;if(e.constructor===Object){var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o))if(undefined===t)n[o.substring(3)]=K(e[o],t,r);else n[t+o]=K(e[o],t,r);return n}if(e.constructor===Array){var n=[];for(var a=0;a<e.length;a++)n.push(K(e[a],t,r));return n}if(e.constructor===Date){var n=new Date;n.setTime(e.getTime());return n}if(e.constructor===RegExp){var i="";if(e.global)i+="g";if(e.ignoreCase)i+="i";if(e.multiline)i+="m";return new RegExp(e.source,i)}if(r&&typeof e==="function"){if(r==1)return K(e(),undefined,2);if(r==2)return e}return null}var Z={};Z.nv_stringify=function(e){JSON.stringify(e);return JSON.stringify(K(e))};Z.nv_parse=function(e){if(e===undefined)return undefined;var t=JSON.parse(e);return K(t,"nv_")};function ee(e,t,r,n){e.extraAttr={t_action:t,t_rawid:r};if(typeof n!="undefined")e.extraAttr.t_cid=n}function te(){if(typeof __globalThis.__webview_engine_version__=="undefined")return 0;return __globalThis.__webview_engine_version__}function re(e,t,r,n,o,a){var i=ne(t,r,n);if(i)e.push(i);else{e.push("");u(n+":import:"+o+":"+a+": Path `"+t+"` not found from `"+n+"`.")}}function ne(e,t,r){if(e[0]!="/"){var n=r.split("/");n.pop();var o=e.split("/");for(var a=0;a<o.length;a++){if(o[a]=="..")n.pop();else if(!o[a]||o[a]==".")continue;else n.push(o[a])}e=n.join("/")}if(r[0]=="."&&e[0]=="/")e="."+e;if(t[e])return e;if(t[e+".wxml"])return e+".wxml"}function oe(e,t,r,n){if(!t)return;if(n[e][t])return n[e][t];for(var o=r[e].i.length-1;o>=0;o--){if(r[e].i[o]&&n[r[e].i[o]][t])return n[r[e].i[o]][t]}for(var o=r[e].ti.length-1;o>=0;o--){var a=ne(r[e].ti[o],r,e);if(a&&n[a][t])return n[a][t]}var i=ae(r,e);for(var o=0;o<i.length;o++){if(i[o]&&n[i[o]][t])return n[i[o]][t]}for(var p=r[e].j.length-1;p>=0;p--)if(r[e].j[p]){for(var a=r[r[e].j[p]].ti.length-1;a>=0;a--){var u=ne(r[r[e].j[p]].ti[a],r,e);if(u&&n[u][t]){return n[u][t]}}}}function ae(e,t){if(!t)return[];if($gaic[t]){return $gaic[t]}var r=[],n=[],o=0,a=0,i={},p={};n.push(t);p[t]=true;a++;while(o<a){var u=n[o++];for(var l=0;l<e[u].ic.length;l++){var f=e[u].ic[l];var v=ne(f,e,u);if(v&&!p[v]){p[v]=true;n.push(v);a++}}for(var l=0;u!=t&&l<e[u].ti.length;l++){var c=e[u].ti[l];var s=ne(c,e,u);if(s&&!i[s]){i[s]=true;r.push(s)}}}$gaic[t]=r;return r}var ie={};function pe(e,t,r,n,o,a,i){var p=ne(e,t,r);t[r].j.push(p);if(p){if(ie[p]){u("-1:include:-1:-1: `"+e+"` is being included in a loop, will be stop.");return}ie[p]=true;try{t[p].f(n,o,a,i)}catch(n){}ie[p]=false}else{u(r+":include:-1:-1: Included path `"+e+"` not found from `"+r+"`.")}}function ue(e,t,r,n){u(t+":template:"+r+":"+n+": Template `"+e+"` not found.")}function le(e){var t=false;delete e.properities;delete e.n;if(e.children){do{t=false;var r=[];for(var n=0;n<e.children.length;n++){var o=e.children[n];if(o.tag=="virtual"){t=true;for(var a=0;o.children&&a<o.children.length;a++){r.push(o.children[a])}}else{r.push(o)}}e.children=r}while(t);for(var n=0;n<e.children.length;n++){le(e.children[n])}}return e}function fe(e){if(e.tag=="wx-wx-scope"){e.tag="virtual";e.wxCkey="11";e["wxScopeData"]=e.attr["wx:scope-data"];delete e.n;delete e.raw;delete e.generics;delete e.attr}for(var t=0;e.children&&t<e.children.length;t++){fe(e.children[t])}return e}return{a:D,b:S,c:v,d:e,e:t,f:u,g:r,h:s,i:n,j:o,k:A,l:T,m:a,n:f,o:c,p:i,q:y,r:N,s:b,t:d,u:h,v:p,w:l,x:_,y:w,z:O,A:j,B:P,C:M,D:J,E:B,F:Y,G:G,H:X,I:H,J:V,K:$,L:W,M:Q,N:q,O:K,P:Z,Q:ee,R:te,S:re,T:ne,U:oe,V:ae,W:ie,X:pe,Y:ue,Z:le,aa:fe}}()});Object.freeze(__g);g="";	__wxAppCode__['pages_wallet/components/choosepurchaser/choosepurchaser.json'] = {"component":true,"usingComponents":{"uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_wallet/components/realnameexplain/realnameexplain.json'] = {"component":true,"usingComponents":{"pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_wallet/components/richNotes/richNotes.json'] = {"component":true,"usingComponents":{"uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","mp-html":"/uni_modules/mp-html/components/mp-html/mp-html","pup-limit":"/components/pupLimit/pupLimit","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup"}};
		__wxAppCode__['pages_wallet/invitation/activate.json'] = {"navigationBarTitleText":"邀请","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"customtitlebar":"/components/customtitlebar/customtitlebar","uni-data-select":"/uni_modules/uni-data-select/components/uni-data-select/uni-data-select","uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","realnameexplain":"/pages_wallet/components/realnameexplain/realnameexplain","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_wallet/invitation/activateSuccess.json'] = {"navigationBarTitleText":"邀请成功","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"customtitlebar":"/components/customtitlebar/customtitlebar","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_wallet/invitation/detail.json'] = {"navigationBarTitleText":"邀请函","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"uni-nav-bar":"/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_wallet/invitation/preview.json'] = {"navigationBarTitleText":"邀请函预览","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"customtitlebar":"/components/customtitlebar/customtitlebar","uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","loginpop":"/components/loginpop/loginpop","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_wallet/wallet/ticketActivity.json'] = {"navigationBarTitleText":"电子票","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#F8F8F8","navigationStyle":"custom","usingComponents":{"uni-nav-bar":"/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_wallet/wallet/ticketCodeEvent.json'] = {"navigationBarTitleText":"取票码","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#F8F8F8","navigationStyle":"custom","usingComponents":{"uni-nav-bar":"/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar","z-swiper":"/uni_modules/zebra-swiper/components/z-swiper/z-swiper","z-swiper-item":"/uni_modules/zebra-swiper/components/z-swiper-item/z-swiper-item","uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","ticketaddress":"/components/ticketaddress/ticketaddress","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_wallet/wallet/ticketEvent.json'] = {"navigationBarTitleText":"电子票","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#F8F8F8","navigationStyle":"custom","usingComponents":{"uni-nav-bar":"/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar","uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","ticketaddress":"/components/ticketaddress/ticketaddress","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_wallet/wallet/ticketEventCustom.json'] = {"navigationBarTitleText":"票详情","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#F8F8F8","usingComponents":{"uni-popup":"/uni_modules/uni-popup/components/uni-popup/uni-popup","ticketaddress":"/components/ticketaddress/ticketaddress","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_wallet/wallet/ticketWallet.json'] = {"navigationBarTitleText":"票夹","enablePullDownRefresh":false,"navigationStyle":"custom","usingComponents":{"uni-nav-bar":"/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar","walleteleitem":"/components/walleteleitem/walleteleitem","walletcodeitem":"/components/walletcodeitem/walletcodeitem","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","pup-limit":"/components/pupLimit/pupLimit"}};
		__wxAppCode__['pages_wallet/wallet/transferSend.json'] = {"navigationBarTitleText":"转增人信息","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#F8F8F8","navigationStyle":"custom","usingComponents":{"uni-nav-bar":"/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar","verify-code-popup":"/components/VerifyCodePopup/VerifyCodePopup","choosepurchaser":"/pages_wallet/components/choosepurchaser/choosepurchaser","rich-notes":"/pages_wallet/components/richNotes/richNotes","pup-limit":"/components/pupLimit/pupLimit"}};
	;var __WXML_DEP__=__WXML_DEP__||{};;var __LAZY_CODE_LOADING_CHUNK_MAP__=__LAZY_CODE_LOADING_CHUNK_MAP__||{};[['pages_wallet/chunk_0',['pages_wallet/components/choosepurchaser/choosepurchaser','pages_wallet/components/richNotes/richNotes','pages_wallet/wallet/transferSend',]],['pages_wallet/chunk_1',['pages_wallet/components/realnameexplain/realnameexplain','pages_wallet/invitation/activate',]],['pages_wallet/chunk_2',['pages_wallet/invitation/activateSuccess',]],['pages_wallet/chunk_3',['pages_wallet/invitation/detail',]],['pages_wallet/chunk_4',['pages_wallet/invitation/preview',]],['pages_wallet/chunk_5',['pages_wallet/wallet/ticketActivity',]],['pages_wallet/chunk_6',['pages_wallet/wallet/ticketCodeEvent',]],['pages_wallet/chunk_7',['pages_wallet/wallet/ticketEvent',]],['pages_wallet/chunk_8',['pages_wallet/wallet/ticketEventCustom',]],['pages_wallet/chunk_9',['pages_wallet/wallet/ticketWallet',]],].forEach(function(a){(a[1]||[]).forEach(function(b){__LAZY_CODE_LOADING_CHUNK_MAP__[b]=__LAZY_CODE_LOADING_CHUNK_MAP__[b]||a[0]||''});});/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx4 || [];
__WXML_GLOBAL__.ops_set.$gwx4=z;
__WXML_GLOBAL__.ops_init.$gwx4=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=[];if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx4";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx4();$gwx4_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx4_XC_0 || [];
function gz$gwx4_XC_0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_XC_0_1)return __WXML_GLOBAL__.ops_cached.$gwx4_XC_0_1
__WXML_GLOBAL__.ops_cached.$gwx4_XC_0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-328fe7fc vue-ref'])
Z([3,'popup'])
Z([1,false])
Z([3,'bottom'])
Z([3,'536cb606-1'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[7])
Z([3,'__e'])
Z([3,'send-radio-lable data-v-328fe7fc'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'radioChangePurchaser']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'value']],[1,'']],[[7],[3,'index']]],[1,'ableSelect']]]]]]]]]]]]]]])
Z([[2,'=='],[[7],[3,'maxNum']],[1,1]])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'position']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx4_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx4_XC_0_1
}
function gz$gwx4_XC_0_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_XC_0_2)return __WXML_GLOBAL__.ops_cached.$gwx4_XC_0_2
__WXML_GLOBAL__.ops_cached.$gwx4_XC_0_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-492a71d0 vue-ref'])
Z([3,'popup'])
Z([1,false])
Z([3,'bottom'])
Z([3,'0ebc1e67-1'])
Z([[4],[[5],[1,'default']]])
Z([3,'eventdetail data-v-492a71d0'])
Z([[7],[3,'isShowClose']])
Z(z[0])
Z([3,'data-v-492a71d0'])
Z([[7],[3,'containerStyle']])
Z([[7],[3,'purchaseNotesUrl']])
Z(z[3])
Z([[2,'+'],[[2,'+'],[1,'0ebc1e67-2'],[1,',']],[1,'0ebc1e67-1']])
})(__WXML_GLOBAL__.ops_cached.$gwx4_XC_0_2);return __WXML_GLOBAL__.ops_cached.$gwx4_XC_0_2
}
function gz$gwx4_XC_0_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_XC_0_3)return __WXML_GLOBAL__.ops_cached.$gwx4_XC_0_3
__WXML_GLOBAL__.ops_cached.$gwx4_XC_0_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contentdetail data-v-4dd503fd'])
Z([[2,'!='],[[7],[3,'platform']],[1,'TT']])
Z([3,'transparent'])
Z([3,'__l'])
Z([3,'__e'])
Z([1,false])
Z([3,'data-v-4dd503fd'])
Z([3,'#ffffff'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z([1,true])
Z([[2,'?:'],[[2,'!='],[[7],[3,'platform']],[1,'ALI']],[1,'left'],[1,'']])
Z(z[9])
Z([3,'票详情'])
Z([3,'4be5854a-1'])
Z([3,'mainContent data-v-4dd503fd'])
Z([[7],[3,'transferIng']])
Z([3,'ticketBootom data-v-4dd503fd'])
Z([[6],[[7],[3,'$root']],[3,'g0']])
Z([[2,'=='],[[6],[[7],[3,'$root']],[3,'g1']],[1,0]])
Z([[7],[3,'purchaserName']])
Z([[2,'!'],[[7],[3,'transferIng']]])
Z(z[3])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[4])
Z([3,'data-v-4dd503fd vue-ref'])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^closePurchaser']],[[4],[[5],[[4],[[5],[1,'hidePupop']]]]]]]],[[4],[[5],[[5],[1,'^addPurchaser']],[[4],[[5],[[4],[[5],[1,'addPurchaser']]]]]]]],[[4],[[5],[[5],[1,'^surePurchaser']],[[4],[[5],[[4],[[5],[1,'surePurchaser']]]]]]]],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'purchaserAar']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'popupPurchaser'])
Z([[7],[3,'idcardTypesLimitMsg']])
Z([[7],[3,'purchaserAar']])
Z([3,'4be5854a-2'])
Z(z[3])
Z(z[4])
Z(z[4])
Z(z[26])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^closeNotes']],[[4],[[5],[[4],[[5],[1,'closeServiceDesc']]]]]]]],[[4],[[5],[[5],[1,'^sureService']],[[4],[[5],[[4],[[5],[1,'sureService']]]]]]]]])
Z([3,'richNotePopup'])
Z(z[9])
Z([[7],[3,'buyProtocolContext']])
Z([3,'注意事项'])
Z([3,'4be5854a-3'])
Z(z[3])
Z(z[26])
Z([3,'confirm'])
Z([3,'4be5854a-4'])
Z(z[3])
Z(z[26])
Z([3,'verifycode'])
Z([3,'4be5854a-5'])
})(__WXML_GLOBAL__.ops_cached.$gwx4_XC_0_3);return __WXML_GLOBAL__.ops_cached.$gwx4_XC_0_3
}
__WXML_GLOBAL__.ops_set.$gwx4_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx4_XC_0=true;
var x=['./pages_wallet/components/choosepurchaser/choosepurchaser.wxml','./pages_wallet/components/richNotes/richNotes.wxml','./pages_wallet/wallet/transferSend.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx4_XC_0_1()
var oB=_mz(z,'uni-popup',['bind:__l',0,'class',1,'data-ref',1,'maskClick',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],cF,fE,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,14,cF,fE,gg)){oJ.wxVkey=1
}
else{oJ.wxVkey=2
var lK=_v()
_(oJ,lK)
if(_oz(z,15,cF,fE,gg)){lK.wxVkey=1
}
lK.wxXCkey=1
}
oJ.wxXCkey=1
_(hG,cI)
return hG
}
xC.wxXCkey=2
_2z(z,9,oD,e,s,gg,xC,'item','index','index')
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx4_XC_0_2()
var tM=_mz(z,'uni-popup',['bind:__l',0,'class',1,'data-ref',1,'maskClick',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var eN=_n('view')
_rz(z,eN,'class',7,e,s,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,8,e,s,gg)){bO.wxVkey=1
}
var oP=_mz(z,'mp-html',['bind:__l',9,'class',1,'containerStyle',2,'content',3,'setTitle',4,'vueId',5],[],e,s,gg)
_(eN,oP)
bO.wxXCkey=1
_(tM,eN)
_(r,tM)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx4_XC_0_3()
var oR=_n('view')
_rz(z,oR,'class',0,e,s,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,1,e,s,gg)){fS.wxVkey=1
var hU=_mz(z,'uni-nav-bar',['backgroundColor',2,'bind:__l',1,'bind:clickLeft',2,'border',3,'class',4,'color',5,'data-event-opts',6,'fixed',7,'leftIcon',8,'statusBar',9,'title',10,'vueId',11],[],e,s,gg)
_(fS,hU)
}
var oV=_n('view')
_rz(z,oV,'class',14,e,s,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,15,e,s,gg)){cW.wxVkey=1
}
var oX=_n('view')
_rz(z,oX,'class',16,e,s,gg)
var lY=_v()
_(oX,lY)
if(_oz(z,17,e,s,gg)){lY.wxVkey=1
}
var aZ=_v()
_(oX,aZ)
if(_oz(z,18,e,s,gg)){aZ.wxVkey=1
}
var t1=_v()
_(oX,t1)
if(_oz(z,19,e,s,gg)){t1.wxVkey=1
}
lY.wxXCkey=1
aZ.wxXCkey=1
t1.wxXCkey=1
_(oV,oX)
cW.wxXCkey=1
_(oR,oV)
var cT=_v()
_(oR,cT)
if(_oz(z,20,e,s,gg)){cT.wxVkey=1
}
var e2=_mz(z,'choosepurchaser',['bind:__l',21,'bind:addPurchaser',1,'bind:closePurchaser',2,'bind:input',3,'bind:surePurchaser',4,'class',5,'data-event-opts',6,'data-ref',7,'idcardTypesLimitMsg',8,'value',9,'vueId',10],[],e,s,gg)
_(oR,e2)
var b3=_mz(z,'rich-notes',['bind:__l',32,'bind:closeNotes',1,'bind:sureService',2,'class',3,'data-event-opts',4,'data-ref',5,'isShowClose',6,'purchaseNotesUrl',7,'titleIntroduce',8,'vueId',9],[],e,s,gg)
_(oR,b3)
var o4=_mz(z,'pup-limit',['bind:__l',42,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(oR,o4)
var x5=_mz(z,'verify-code-popup',['bind:__l',46,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(oR,x5)
fS.wxXCkey=1
fS.wxXCkey=3
cT.wxXCkey=1
_(r,oR)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx4_XC_0";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx4_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_wallet/components/choosepurchaser/choosepurchaser.wxml'] = [$gwx4_XC_0, './pages_wallet/components/choosepurchaser/choosepurchaser.wxml'];else __wxAppCode__['pages_wallet/components/choosepurchaser/choosepurchaser.wxml'] = $gwx4_XC_0( './pages_wallet/components/choosepurchaser/choosepurchaser.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_wallet/components/richNotes/richNotes.wxml'] = [$gwx4_XC_0, './pages_wallet/components/richNotes/richNotes.wxml'];else __wxAppCode__['pages_wallet/components/richNotes/richNotes.wxml'] = $gwx4_XC_0( './pages_wallet/components/richNotes/richNotes.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_wallet/wallet/transferSend.wxml'] = [$gwx4_XC_0, './pages_wallet/wallet/transferSend.wxml'];else __wxAppCode__['pages_wallet/wallet/transferSend.wxml'] = $gwx4_XC_0( './pages_wallet/wallet/transferSend.wxml' );
	;__wxRoute = "pages_wallet/components/choosepurchaser/choosepurchaser";__wxRouteBegin = true;__wxAppCurrentFile__="pages_wallet/components/choosepurchaser/choosepurchaser.js";define("pages_wallet/components/choosepurchaser/choosepurchaser.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_wallet/components/choosepurchaser/choosepurchaser"],{"320e":function(e,t,n){"use strict";n.r(t);var r=n("8330"),o=n.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t.default=o.a},"365a":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return r}));var r={uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,"5b0a"))}},o=function(){var e=this,t=(e.$createElement,e._self._c,e.$previewImageAddress("close_black.png")),n=e.__map(e.value,(function(t,n){return{$orig:e.__get_orig(t),m1:1==e.maxNum&&t.ableSelect&&t.isSelect?e.$previewImageAddress("address_default.png"):null,m2:1==e.maxNum&&t.ableSelect&&!t.isSelect?e.$previewImageAddress("checbox_default.png"):null,m3:1!=e.maxNum||t.ableSelect?null:e.$previewImageAddress("checbox_unable.png")}}));e.$mp.data=Object.assign({},{$root:{m0:t,l0:n}})},s=[]},"3d71":function(e,t,n){"use strict";var r=n("77b0");n.n(r).a},"77b0":function(e,t,n){},8330:function(e,t,n){"use strict";(function(e){var r=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("af34")),s={name:"cart",props:{value:{type:Array,required:!0},maxNum:{type:Number,default:1},idcardTypesLimitMsg:{type:String,default:""}},data:function(){return{newArray:[]}},methods:{openPop:function(){this.$refs.popup.open()},closePop:function(){this.$emit("closePurchaser"),this.$refs.popup.close()},radioChangePurchaser:function(t,n){n?this.choosePurchaser(t):e.showToast({title:this.idcardTypesLimitMsg,icon:"none"})},choosePurchaser:function(t){if(this.newArray=(0,o.default)(this.value),1==this.maxNum)this.newArray[t].isSelect||this.newArray.forEach((function(e){e.isSelect=!1})),this.newArray[t].isSelect=!this.newArray[t].isSelect;else{if(this.newArray[t].isSelect){var n=this.newArray[t].position;for(this.newArray[t].position=0,console.log("currentNum",n),console.log("this.newArray",this.newArray),i=0;i<this.newArray.length;i++)n<this.newArray[i].position&&(this.newArray[i].position=this.newArray[i].position-1)}else{var r=this.newArray.map((function(e,t){return e.isSelect?t:-1})).filter((function(e){return-1!==e}));if((null==r?void 0:r.length)==this.maxNum)return void e.showToast({title:"持票人数够了",icon:"none"});for(var s=0,i=0;i<this.newArray.length;i++)0!=this.newArray[i].position&&s<=this.newArray[i].position&&(s=this.newArray[i].position);console.log("currentMaxNum",s),this.newArray[t].position=s+1}this.newArray[t].isSelect=!this.newArray[t].isSelect}this.$emit("input",this.newArray)},addPurchaser:function(){this.$emit("addPurchaser")},surePurchaser:function(){var e;(null===(e=this.newArray)||void 0===e?void 0:e.length)>0&&this.$emit("surePurchaser",this.newArray),this.closePop()}}};t.default=s}).call(this,n("df3c").default)},d495:function(e,t,n){"use strict";n.r(t);var r=n("365a"),o=n("320e");for(var s in o)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(s);n("3d71");var i=n("828b"),a=Object(i.a)(o.default,r.b,r.c,!1,null,"328fe7fc",null,!1,r.a,void 0);t.default=a.exports}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_wallet/components/choosepurchaser/choosepurchaser-create-component",{"pages_wallet/components/choosepurchaser/choosepurchaser-create-component":function(e,t,n){n("df3c").createComponent(n("d495"))}},[["pages_wallet/components/choosepurchaser/choosepurchaser-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_wallet/components/choosepurchaser/choosepurchaser.js'});require("pages_wallet/components/choosepurchaser/choosepurchaser.js");;__wxRoute = "pages_wallet/components/richNotes/richNotes";__wxRouteBegin = true;__wxAppCurrentFile__="pages_wallet/components/richNotes/richNotes.js";define("pages_wallet/components/richNotes/richNotes.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_wallet/components/richNotes/richNotes"],{"14ab":function(e,t,n){"use strict";n.r(t);var o=n("dc38"),i=n.n(o);for(var c in o)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t.default=i.a},2414:function(e,t,n){"use strict";n.r(t);var o=n("5ffe"),i=n("14ab");for(var c in i)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(c);n("aadc");var a=n("828b"),s=Object(a.a)(i.default,o.b,o.c,!1,null,"492a71d0",null,!1,o.a,void 0);t.default=s.exports},5665:function(e,t,n){},"5ffe":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o}));var o={uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,"5b0a"))},mpHtml:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/mp-html/components/mp-html/mp-html")]).then(n.bind(null,"6645"))}},i=function(){this.$createElement;var e=(this._self._c,this.isShowClose?this.$previewImageAddress("close_circle.png"):null);this.$mp.data=Object.assign({},{$root:{m0:e}})},c=[]},aadc:function(e,t,n){"use strict";var o=n("5665");n.n(o).a},dc38:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"cart",data:function(){return{dynamicHeightParam:"660rpx",containerStyle:"text-align: left;width:100%;",isSelectedRead:!1}},props:{purchaseNotesUrl:{type:String},titleIntroduce:{type:String},isShowClose:{type:Boolean,default:!1}},methods:{open:function(){this.$refs.popup.open()},close:function(){this.$refs.popup.close(),this.$emit("closeNotes")},alreadyKnow:function(){this.isSelectedRead?(this.$refs.popup.close(),this.$emit("sureService")):e.showToast({title:"请阅读并同意相关内容",icon:"none"})},handleChange:function(e){this.isSelectedRead=!0}},computed:{dynamicHeight:function(){return"max-height:".concat(this.dynamicHeightParam,";min-height: 400rpx;")}}};t.default=n}).call(this,n("df3c").default)}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_wallet/components/richNotes/richNotes-create-component",{"pages_wallet/components/richNotes/richNotes-create-component":function(e,t,n){n("df3c").createComponent(n("2414"))}},[["pages_wallet/components/richNotes/richNotes-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_wallet/components/richNotes/richNotes.js'});require("pages_wallet/components/richNotes/richNotes.js");;__wxRoute = "pages_wallet/wallet/transferSend";__wxRouteBegin = true;__wxAppCurrentFile__="pages_wallet/wallet/transferSend.js";define("pages_wallet/wallet/transferSend.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_wallet/wallet/transferSend"],{1175:function(e,t,i){"use strict";(function(e,t){var n=i("47a9");i("42bd"),i("861b"),n(i("3240"));var a=n(i("2376"));e.__webpack_require_UNI_MP_PLUGIN__=i,t(a.default)}).call(this,i("3223").default,i("df3c").createPage)},1595:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var n={uniNavBar:function(){return i.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(i.bind(null,"f9b6"))},VerifyCodePopup:function(){return Promise.all([i.e("common/vendor"),i.e("components/VerifyCodePopup/VerifyCodePopup")]).then(i.bind(null,"6689"))}},a=function(){var e=this,t=(e.$createElement,e._self._c,e.$previewImageAddress("event_detail_blur_foreground.png")),i=e.transferIng?e.$previewImageAddress("warn.png"):null,n=e.transferIng&&!e.transferFinish?e.formatCountdown(e.limitTime):null,a=e.$previewImageAddress("ticket_detail_divide.png"),r=e.purchaserAar.length>0&&!e.transferIng,o=e.purchaserAar.length,c=e.$previewImageAddress("transfersend_process.png");e.$mp.data=Object.assign({},{$root:{m0:t,m1:i,m2:n,m3:a,g0:r,g1:o,m4:c}})},r=[]},"1ef8":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("b5c2"),a=i("e2af"),r=i("d9e3"),o=i("9b69"),c={components:{Choosepurchaser:function(){i.e("pages_wallet/components/choosepurchaser/choosepurchaser").then(function(){return resolve(i("d495"))}.bind(null,i)).catch(i.oe)},RichNotes:function(){i.e("pages_wallet/components/richNotes/richNotes").then(function(){return resolve(i("2414"))}.bind(null,i)).catch(i.oe)}},data:function(){return{itemdata:{},orderData:{},ticketId:"",orderInfoId:"",ticketIds:[],eleTicketIndex:0,pageImgBg:"",platform:"WX",sendPhone:"",idCardTypesSaleable:null,idcardTypesLimitMsg:null,purchaserAar:[],purchaserName:"",purchaserIdcard:"",selectPurchaserNum:0,relationId:"",transferIng:!1,isCreate:!1,timerMyWallet:null,limitTime:null,limitTimeStr:"",transferFinish:"",buyProtocolContext:"",showPopup:!1}},onLoad:function(e){console.log("wwww",e),e&&(this.ticketId=e.ticketId,this.orderInfoId=e.orderInfoId,this.getEleDetail())},onShow:function(){this.isCreate&&this.initBuyerList()},onUnload:function(){this.timerMyWallet&&clearInterval(this.timerMyWallet)},methods:{back:function(){e.navigateBack({delta:1})},getEleDetail:function(){var e=this;(0,n.getETicketDetail)({orderDetailId:this.ticketId,orderInfoId:this.orderInfoId}).then((function(t){console.log(t),e.itemdata=t.data.performanceDetailModel,t.data.orderDetailModelList&&(e.orderData=t.data.orderDetailModelList[0]),e.itemdata&&(e.pageImgBg=e.itemdata.imageUrl,e.idCardTypesSaleable=e.itemdata.idCardTypesSaleable,e.idcardTypesLimitMsg=e.itemdata.idCardTypesSaleableErrorMessage),e.getTransferDetail(),e.initBuyerList(),e.initPerformance(),e.isCreate=!0})).catch((function(e){console.log(e)}))},getTransferDetail:function(){var e=this;(0,n.getDetailWithoutConfirm)({detailId:this.ticketId}).then((function(t){var i;console.log(t),null!=t&&null!==(i=t.data)&&void 0!==i&&i.newRegisterName&&(e.transferIng=!0,e.purchaserName=t.data.newRegisterName,e.purchaserIdcard=t.data.newRegisterNo,e.sendPhone=t.data.noticePhone,e.createTime=t.data.createTime,t.data.translateConfirmLimitTime&&(e.limitTime=(0,r.countdownTime)(t.data.translateConfirmLimitTime),e.limitTime&&e.limitTime>0&&e.startCountDownTicket(e.limitTime)))})).catch((function(e){console.log(e)}))},startCountDownTicket:function(){var e=this;clearInterval(this.timerMyWallet),this.timerMyWallet=null,this.timerMyWallet=setInterval((function(){console.log("this.limitTime",e.limitTime),e.limitTime>0?e.limitTime=e.limitTime-1e3:(e.transferFinish="转赠已失效，请重新发起!",clearInterval(e.timerMyWallet))}),1e3)},formatCountdown:function(e){if(e>0){var t=Math.floor(e%864e5/36e5),i=Math.floor(e%36e5/6e4),n=Math.floor(e%6e4/1e3);if(t>0||i>0||n>0)return"".concat(String(t).padStart(2,"0"),":").concat(String(i).padStart(2,"0"),":").concat(String(n).padStart(2,"0"))}},initBuyerList:function(){var e=this;(0,a.buyerList)({}).then((function(t){e.purchaserAar=[];for(var i=0;i<t.data.length;i++)if(e.idCardTypesSaleable&&e.idCardTypesSaleable.length>0){var n=!1;e.idCardTypesSaleable.map((function(e){e.idcardType==t.data[i].certificatesType&&(n=!0)})),e.creterPurchaserData(t.data[i],n)}else e.creterPurchaserData(t.data[i],!0)})).catch((function(e){console.log(e)}))},creterPurchaserData:function(e,t){this.purchaserAar.push({checked:!1,name:e.name,certificatesType:e.certificatesType,certificatesNo:e.certificatesNo,completeCertificatesNo:e.completeCertificatesNo,completePhone:e.completePhone,id:e.id,isSelect:!1,position:0,ableSelect:t})},surePurchaser:function(e){this.purchaserAar=[],this.purchaserAar=e;for(var t=0;t<this.purchaserAar.length;t++)this.purchaserAar[t].isSelect&&(this.selectPurchaserNum=1,this.purchaserName=this.purchaserAar[t].name,this.purchaserIdcard=this.purchaserAar[t].completeCertificatesNo,this.relationId=this.purchaserAar[t].id);this.hidePupop()},sureSend:function(){this.relationId?this.sendPhone?this.openServiceDesc():e.showToast({title:"请输入转赠人手机号",icon:"none"}):e.showToast({title:"请选择您要转赠的持票人",icon:"none"})},addPurchaserOne:function(){this.showPopup=!0,this.$refs.popupPurchaser.openPop()},addPurchaser:function(){e.navigateTo({url:"/pages_mine/mine/purchaseradd?type=2"})},changePupop:function(e){this.showPopup=e.show,console.log("changePupop",e)},hidePupop:function(){this.showPopup=!1},initPerformance:function(){var e=this;(0,o.confGetListByKeyList)({keyNum:"ctms.cms.common.conf.10136"}).then((function(t){console.log(t),t&&t.data.map((function(t){"ctms.cms.common.conf.10136"==t.keyNum&&t.linkUrl&&e.loadHtmlText(1,t.linkUrl)}))})).catch((function(e){console.log(e)}))},loadHtmlText:function(t,i){var n=this;e.request({url:i,method:"GET",header:{Referer:"","Content-Type":"text/html",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"},success:function(e){n.getRichText(e,t)},fail:function(e){console.log("加载html失败",e)}})},getRichText:function(e,t){var i=e.data.replace(/\<img/gi,'<img style="width:100%;height:auto;" ').replace(/iframe/g,"video").replace(/\<video/gi,'<video style="width:100%;" playsinline="true" webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5" x5-video-player-fullscreen="false"');1==t&&(this.buyProtocolContext=i)},openServiceDesc:function(){this.buyProtocolContext&&(this.$refs.richNotePopup.open(),this.showPopup=!0)},closeServiceDesc:function(){this.showPopup=!1},handleChange:function(e){this.isSelectedRead=!0,console.log("选中的值："+e)},sureService:function(){(0,n.translateApply)({detailId:this.ticketId,relationId:this.relationId,noticePhone:this.sendPhone}).then((function(t){console.log(t),e.showToast({title:"转增已发起，请通知原持票人确认",icon:"none"}),setTimeout((function(){e.navigateBack()}),1e3)})).catch((function(e){console.log(e)}))}}};t.default=c}).call(this,i("df3c").default)},2376:function(e,t,i){"use strict";i.r(t);var n=i("1595"),a=i("3956");for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("35d2"),i("8846");var o=i("828b"),c=Object(o.a)(a.default,n.b,n.c,!1,null,"4dd503fd",null,!1,n.a,void 0);t.default=c.exports},"35d2":function(e,t,i){"use strict";var n=i("ad36");i.n(n).a},3956:function(e,t,i){"use strict";i.r(t);var n=i("1ef8"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t.default=a.a},8846:function(e,t,i){"use strict";var n=i("feea");i.n(n).a},ad36:function(e,t,i){},feea:function(e,t,i){}},[["1175","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_wallet/wallet/transferSend.js'});require("pages_wallet/wallet/transferSend.js");$gwx4_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx4_XC_1 || [];
function gz$gwx4_XC_1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_XC_1_1)return __WXML_GLOBAL__.ops_cached.$gwx4_XC_1_1
__WXML_GLOBAL__.ops_cached.$gwx4_XC_1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx4_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx4_XC_1_1
}
function gz$gwx4_XC_1_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_XC_1_2)return __WXML_GLOBAL__.ops_cached.$gwx4_XC_1_2
__WXML_GLOBAL__.ops_cached.$gwx4_XC_1_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-bff0050c'])
Z([[2,'!='],[[7],[3,'platform']],[1,'TT']])
Z([3,'__l'])
Z(z[0])
Z([3,'看个比赛'])
Z([3,'9020c9ec-1'])
Z([3,'content data-v-bff0050c'])
Z([3,'bodyContent data-v-bff0050c'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'?:'],[[7],[3,'activityCodeControl']],[[2,'+'],[1,990],[1,'rpx']],[[2,'+'],[1,860],[1,'rpx']]]],[1,';']])
Z(z[2])
Z([3,'__e'])
Z(z[10])
Z([3,'select-right-arrow data-v-bff0050c'])
Z([1,false])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'registerIdType']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([[7],[3,'doucument']])
Z([[7],[3,'registerIdType']])
Z([3,'9020c9ec-2'])
Z([[7],[3,'activityCodeControl']])
Z(z[18])
Z(z[2])
Z([3,'data-v-bff0050c vue-ref'])
Z([3,'popup'])
Z([3,'bottom'])
Z([3,'9020c9ec-3'])
Z([[4],[[5],[1,'default']]])
Z(z[2])
Z(z[10])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'closeRealNameExplain']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'9020c9ec-4'],[1,',']],[1,'9020c9ec-3']])
Z(z[2])
Z(z[21])
Z([3,'confirm'])
Z([3,'9020c9ec-5'])
Z(z[2])
Z(z[21])
Z([3,'verifycode'])
Z([3,'9020c9ec-6'])
})(__WXML_GLOBAL__.ops_cached.$gwx4_XC_1_2);return __WXML_GLOBAL__.ops_cached.$gwx4_XC_1_2
}
__WXML_GLOBAL__.ops_set.$gwx4_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx4_XC_1=true;
var x=['./pages_wallet/components/realnameexplain/realnameexplain.wxml','./pages_wallet/invitation/activate.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx4_XC_1_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx4_XC_1_2()
var c8=_n('view')
_rz(z,c8,'class',0,e,s,gg)
var h9=_v()
_(c8,h9)
if(_oz(z,1,e,s,gg)){h9.wxVkey=1
var o0=_mz(z,'customtitlebar',['bind:__l',2,'class',1,'title',2,'vueId',3],[],e,s,gg)
_(h9,o0)
}
var cAB=_n('view')
_rz(z,cAB,'class',6,e,s,gg)
var oBB=_mz(z,'view',['class',7,'style',1],[],e,s,gg)
var tEB=_mz(z,'uni-data-select',['bind:__l',9,'bind:change',1,'bind:input',2,'class',3,'clear',4,'data-event-opts',5,'localdata',6,'value',7,'vueId',8],[],e,s,gg)
_(oBB,tEB)
var lCB=_v()
_(oBB,lCB)
if(_oz(z,18,e,s,gg)){lCB.wxVkey=1
}
var aDB=_v()
_(oBB,aDB)
if(_oz(z,19,e,s,gg)){aDB.wxVkey=1
}
lCB.wxXCkey=1
aDB.wxXCkey=1
_(cAB,oBB)
var eFB=_mz(z,'uni-popup',['bind:__l',20,'class',1,'data-ref',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var bGB=_mz(z,'realnameexplain',['bind:__l',26,'bindtap',1,'class',2,'data-event-opts',3,'vueId',4],[],e,s,gg)
_(eFB,bGB)
_(cAB,eFB)
_(c8,cAB)
var oHB=_mz(z,'pup-limit',['bind:__l',31,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(c8,oHB)
var xIB=_mz(z,'verify-code-popup',['bind:__l',35,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(c8,xIB)
h9.wxXCkey=1
h9.wxXCkey=3
_(r,c8)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx4_XC_1";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx4_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_wallet/components/realnameexplain/realnameexplain.wxml'] = [$gwx4_XC_1, './pages_wallet/components/realnameexplain/realnameexplain.wxml'];else __wxAppCode__['pages_wallet/components/realnameexplain/realnameexplain.wxml'] = $gwx4_XC_1( './pages_wallet/components/realnameexplain/realnameexplain.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_wallet/invitation/activate.wxml'] = [$gwx4_XC_1, './pages_wallet/invitation/activate.wxml'];else __wxAppCode__['pages_wallet/invitation/activate.wxml'] = $gwx4_XC_1( './pages_wallet/invitation/activate.wxml' );
	;__wxRoute = "pages_wallet/components/realnameexplain/realnameexplain";__wxRouteBegin = true;__wxAppCurrentFile__="pages_wallet/components/realnameexplain/realnameexplain.js";define("pages_wallet/components/realnameexplain/realnameexplain.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_wallet/components/realnameexplain/realnameexplain"],{"04fc":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={name:"realnameexplain",props:{show:{type:Boolean,default:!1}},methods:{close:function(){this.$emit("closeRealNameExplain")}}};n.default=t},"57fa":function(e,n,a){"use strict";var t=a("b179");a.n(t).a},"6dfc":function(e,n,a){"use strict";a.r(n);var t=a("723a"),o=a("892f");for(var l in o)["default"].indexOf(l)<0&&function(e){a.d(n,e,(function(){return o[e]}))}(l);a("57fa");var c=a("828b"),r=Object(c.a)(o.default,t.b,t.c,!1,null,"73bbb264",null,!1,t.a,void 0);n.default=r.exports},"723a":function(e,n,a){"use strict";a.d(n,"b",(function(){return t})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){}));var t=function(){this.$createElement;var e=(this._self._c,this.$previewImageAddress("close.png"));this.$mp.data=Object.assign({},{$root:{m0:e}})},o=[]},"892f":function(e,n,a){"use strict";a.r(n);var t=a("04fc"),o=a.n(t);for(var l in t)["default"].indexOf(l)<0&&function(e){a.d(n,e,(function(){return t[e]}))}(l);n.default=o.a},b179:function(e,n,a){}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages_wallet/components/realnameexplain/realnameexplain-create-component",{"pages_wallet/components/realnameexplain/realnameexplain-create-component":function(e,n,a){a("df3c").createComponent(a("6dfc"))}},[["pages_wallet/components/realnameexplain/realnameexplain-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'pages_wallet/components/realnameexplain/realnameexplain.js'});require("pages_wallet/components/realnameexplain/realnameexplain.js");;__wxRoute = "pages_wallet/invitation/activate";__wxRouteBegin = true;__wxAppCurrentFile__="pages_wallet/invitation/activate.js";define("pages_wallet/invitation/activate.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_wallet/invitation/activate"],{"0fa9":function(e,t,i){"use strict";i.r(t);var n=i("bd49"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t.default=a.a},"5d60":function(e,t,i){},"5fd4":function(e,t,i){"use strict";i.r(t);var n=i("aab0"),a=i("0fa9");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("a0a4"),i("bfd8"),i("b362");var r=i("828b"),s=Object(r.a)(a.default,n.b,n.c,!1,null,"bff0050c",null,!1,n.a,void 0);t.default=s.exports},6025:function(e,t,i){"use strict";(function(e,t){var n=i("47a9");i("42bd"),i("861b"),n(i("3240"));var a=n(i("5fd4"));e.__webpack_require_UNI_MP_PLUGIN__=i,t(a.default)}).call(this,i("3223").default,i("df3c").createPage)},a0a4:function(e,t,i){"use strict";var n=i("5d60");i.n(n).a},aab0:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={customtitlebar:function(){return Promise.all([i.e("common/vendor"),i.e("components/customtitlebar/customtitlebar")]).then(i.bind(null,"e34b"))},uniDataSelect:function(){return i.e("uni_modules/uni-data-select/components/uni-data-select/uni-data-select").then(i.bind(null,"20e7"))},uniPopup:function(){return i.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(i.bind(null,"5b0a"))},VerifyCodePopup:function(){return Promise.all([i.e("common/vendor"),i.e("components/VerifyCodePopup/VerifyCodePopup")]).then(i.bind(null,"6689"))}},a=function(){this.$createElement;var e=(this._self._c,this.$previewImageAddress("activate_tip.png")),t=this.$previewImageAddress("tip_gray.png"),i=this.$previewImageAddress("activate_bottom.png");this.$mp.data=Object.assign({},{$root:{m0:e,m1:t,m2:i}})},o=[]},b362:function(e,t,i){"use strict";var n=i("ba65");i.n(n).a},ba65:function(e,t,i){},bd49:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("4206"),a=i("e2af"),o=i("62ec"),r={components:{Realnameexplain:function(){i.e("pages_wallet/components/realnameexplain/realnameexplain").then(function(){return resolve(i("6dfc"))}.bind(null,i)).catch(i.oe)}},data:function(){return{orderDetailId:"",itemdata:{},registerPhone:"",registerName:"",registerIdType:"0",registerIdCard:"",activityCode:"",platform:"WX",doucument:[],idCardTypesSaleable:[],activityCodeControl:!1}},onLoad:function(t){console.log("res",t),this.orderDetailId=t.id,this.registerPhone=e.getStorageSync("authphone"),t.registerName&&(this.registerName=t.registerName,this.registerIdCard=t.registerIdCard,this.registerIdType=t.registerIdType),t.activityCodeControl&&null!=t.activityCodeControl&&(this.activityCodeControl=JSON.parse(t.activityCodeControl));var i=this.getOpenerEventChannel(),n=this;i.on("acceptDataFromOpenerPage",(function(e){console.log("eventChannel",null==e?void 0:e.data),null!=e&&e.data&&(n.idCardTypesSaleable=e.data,n.initDocument())}))},onShow:function(){},methods:{saveActivate:function(){if(this.registerPhone)if(this.registerPhone)if(this.registerName)if(this.registerIdCard){if("0"==this.registerIdType&&!(0,o.checkIDCard)(this.registerIdCard))return void e.showToast({title:"证件号输入有误，请重新输入",icon:"none"});!this.activityCodeControl||this.activityCode?this.activateInvitaion():e.showToast({title:"请输入激活码",duration:1e3,icon:"none"})}else e.showToast({title:"请输入证件号码",duration:1e3,icon:"none"});else e.showToast({title:"请输入姓名",duration:1e3,icon:"none"});else e.showToast({title:"请输入手机号",duration:1e3,icon:"none"});else e.showToast({title:"请输入手机号",duration:1e3,icon:"none"})},activateInvitaion:function(){(0,n.invitationActivate)({orderDetailId:this.orderDetailId,name:this.registerName,phone:this.registerPhone,certificatesNo:this.registerIdCard,certificatesType:this.registerIdType,activityCode:this.activityCode}).then((function(t){console.log(t),e.navigateTo({url:"/pages_wallet/invitation/activateSuccess"})})).catch((function(e){console.log(e.msg)}))},getInputValue:function(e,t){1==e?this.registerPhone=t.detail.value:2==e?this.registerName=t.detail.value:3==e?this.registerIdCard=t.detail.value:4==e&&(this.activityCode=t.detail.value)},realNameTips:function(){this.$refs.popup.open("bottom")},closeRealNameExplain:function(){this.$refs.popup.close()},initDocument:function(){var e=this;(0,a.dicDocumentType)({}).then((function(t){if(console.log(t),t.data)for(var i=0;i<t.data.length;i++)e.idCardTypesSaleable.map((function(n){n.idcardType==t.data[i].dictValue&&e.doucument.push({value:t.data[i].dictValue,text:t.data[i].dictLabel})}));console.log("sssssss",e.doucument)})).catch((function(e){}))},change:function(e){console.log(e+"____"),e&&(this.registerIdType=e)}}};t.default=r}).call(this,i("df3c").default)},bfd8:function(e,t,i){"use strict";var n=i("e099");i.n(n).a},e099:function(e,t,i){}},[["6025","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_wallet/invitation/activate.js'});require("pages_wallet/invitation/activate.js");$gwx4_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx4_XC_2 || [];
function gz$gwx4_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx4_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx4_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-16483824'])
Z([[2,'!='],[[7],[3,'platform']],[1,'TT']])
Z([3,'__l'])
Z(z[0])
Z([3,'看个比赛'])
Z([3,'f8cb0362-1'])
Z(z[2])
Z([3,'data-v-16483824 vue-ref'])
Z([3,'confirm'])
Z([3,'f8cb0362-2'])
Z(z[2])
Z(z[7])
Z([3,'verifycode'])
Z([3,'f8cb0362-3'])
})(__WXML_GLOBAL__.ops_cached.$gwx4_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx4_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx4_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx4_XC_2=true;
var x=['./pages_wallet/invitation/activateSuccess.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx4_XC_2_1()
var fKB=_n('view')
_rz(z,fKB,'class',0,e,s,gg)
var cLB=_v()
_(fKB,cLB)
if(_oz(z,1,e,s,gg)){cLB.wxVkey=1
var hMB=_mz(z,'customtitlebar',['bind:__l',2,'class',1,'title',2,'vueId',3],[],e,s,gg)
_(cLB,hMB)
}
var oNB=_mz(z,'pup-limit',['bind:__l',6,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(fKB,oNB)
var cOB=_mz(z,'verify-code-popup',['bind:__l',10,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(fKB,cOB)
cLB.wxXCkey=1
cLB.wxXCkey=3
_(r,fKB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx4_XC_2";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx4_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_wallet/invitation/activateSuccess.wxml'] = [$gwx4_XC_2, './pages_wallet/invitation/activateSuccess.wxml'];else __wxAppCode__['pages_wallet/invitation/activateSuccess.wxml'] = $gwx4_XC_2( './pages_wallet/invitation/activateSuccess.wxml' );
	;__wxRoute = "pages_wallet/invitation/activateSuccess";__wxRouteBegin = true;__wxAppCurrentFile__="pages_wallet/invitation/activateSuccess.js";define("pages_wallet/invitation/activateSuccess.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_wallet/invitation/activateSuccess"],{3445:function(t,e,n){},"55cb":function(t,e,n){"use strict";(function(t,e){var a=n("47a9");n("42bd"),n("861b"),a(n("3240"));var o=a(n("9700"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n("3223").default,n("df3c").createPage)},"5f08":function(t,e,n){"use strict";n.r(e);var a=n("f118"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e.default=o.a},6621:function(t,e,n){},7443:function(t,e,n){"use strict";var a=n("3445");n.n(a).a},"7e0c":function(t,e,n){},9700:function(t,e,n){"use strict";n.r(e);var a=n("ef9f"),o=n("5f08");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("7443"),n("9a8a"),n("a6f81");var c=n("828b"),u=Object(c.a)(o.default,a.b,a.c,!1,null,"16483824",null,!1,a.a,void 0);e.default=u.exports},"9a8a":function(t,e,n){"use strict";var a=n("7e0c");n.n(a).a},a6f81:function(t,e,n){"use strict";var a=n("6621");n.n(a).a},ef9f:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={customtitlebar:function(){return Promise.all([n.e("common/vendor"),n.e("components/customtitlebar/customtitlebar")]).then(n.bind(null,"e34b"))},VerifyCodePopup:function(){return Promise.all([n.e("common/vendor"),n.e("components/VerifyCodePopup/VerifyCodePopup")]).then(n.bind(null,"6689"))}},o=function(){this.$createElement;var t=(this._self._c,this.$previewImageAddress("activate_success.png")),e=this.$previewImageAddress("activate_bottom.png");this.$mp.data=Object.assign({},{$root:{m0:t,m1:e}})},i=[]},f118:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{platform:"WX"}},onLoad:function(t){},onShow:function(){},methods:{goTicketWallet:function(){t.getStorageSync("token")?(t.setStorageSync("tabPath","/pages/mine/ticketwallet"),t.switchTab({url:"/pages/mine/ticketwallet"})):t.navigateTo({url:"/pages/mine/login"})}}};e.default=n}).call(this,n("df3c").default)}},[["55cb","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_wallet/invitation/activateSuccess.js'});require("pages_wallet/invitation/activateSuccess.js");$gwx4_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx4_XC_3 || [];
function gz$gwx4_XC_3_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_XC_3_1)return __WXML_GLOBAL__.ops_cached.$gwx4_XC_3_1
__WXML_GLOBAL__.ops_cached.$gwx4_XC_3_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contentdetail data-v-7b591592'])
Z([[2,'!='],[[7],[3,'platform']],[1,'TT']])
Z([3,'transparent'])
Z([3,'__l'])
Z([3,'__e'])
Z([1,false])
Z([3,'data-v-7b591592'])
Z([3,'#ffffff'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z([1,true])
Z([[2,'?:'],[[2,'!='],[[7],[3,'platform']],[1,'ALI']],[1,'left'],[1,'']])
Z(z[9])
Z([3,'邀请函'])
Z([3,'4634a22c-1'])
Z([3,'ticketContent data-v-7b591592'])
Z([3,'ticketMiddleContent data-v-7b591592'])
Z([3,'qrCodeContent data-v-7b591592'])
Z([[2,'=='],[[6],[[7],[3,'orderData']],[3,'invitationActivateStatus']],[1,1]])
Z([[2,'>'],[[7],[3,'status']],[1,0]])
Z(z[6])
Z([[2,'=='],[[7],[3,'status']],[1,1]])
Z([[7],[3,'checkedTimesFinish']])
Z([[2,'=='],[[7],[3,'status']],[1,2]])
Z([[2,'=='],[[7],[3,'status']],[1,3]])
Z(z[17])
Z([[2,'&&'],[[6],[[7],[3,'orderData']],[3,'registerName']],[[7],[3,'userInfoFlag']]])
Z([3,'seatAndPrice data-v-7b591592'])
Z([[2,'=='],[[6],[[7],[3,'orderData']],[3,'seatSnapshot']],[1,'无座位']])
Z([[6],[[7],[3,'orderData']],[3,'seatSnapshot']])
Z([[7],[3,'printTicketTypeDesc']])
Z(z[3])
Z([3,'data-v-7b591592 vue-ref'])
Z([3,'confirm'])
Z([3,'4634a22c-2'])
Z(z[3])
Z(z[31])
Z([3,'verifycode'])
Z([3,'4634a22c-3'])
})(__WXML_GLOBAL__.ops_cached.$gwx4_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx4_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx4_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx4_XC_3=true;
var x=['./pages_wallet/invitation/detail.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx4_XC_3_1()
var lQB=_n('view')
_rz(z,lQB,'class',0,e,s,gg)
var aRB=_v()
_(lQB,aRB)
if(_oz(z,1,e,s,gg)){aRB.wxVkey=1
var tSB=_mz(z,'uni-nav-bar',['backgroundColor',2,'bind:__l',1,'bind:clickLeft',2,'border',3,'class',4,'color',5,'data-event-opts',6,'fixed',7,'leftIcon',8,'statusBar',9,'title',10,'vueId',11],[],e,s,gg)
_(aRB,tSB)
}
var eTB=_n('view')
_rz(z,eTB,'class',14,e,s,gg)
var oVB=_n('view')
_rz(z,oVB,'class',15,e,s,gg)
var fYB=_n('view')
_rz(z,fYB,'class',16,e,s,gg)
var cZB=_v()
_(fYB,cZB)
if(_oz(z,17,e,s,gg)){cZB.wxVkey=1
}
else{cZB.wxVkey=2
var h1B=_v()
_(cZB,h1B)
if(_oz(z,18,e,s,gg)){h1B.wxVkey=1
var o2B=_n('view')
_rz(z,o2B,'class',19,e,s,gg)
var c3B=_v()
_(o2B,c3B)
if(_oz(z,20,e,s,gg)){c3B.wxVkey=1
var o4B=_v()
_(c3B,o4B)
if(_oz(z,21,e,s,gg)){o4B.wxVkey=1
}
o4B.wxXCkey=1
}
else{c3B.wxVkey=2
var l5B=_v()
_(c3B,l5B)
if(_oz(z,22,e,s,gg)){l5B.wxVkey=1
}
else{l5B.wxVkey=2
var a6B=_v()
_(l5B,a6B)
if(_oz(z,23,e,s,gg)){a6B.wxVkey=1
}
a6B.wxXCkey=1
}
l5B.wxXCkey=1
}
c3B.wxXCkey=1
_(h1B,o2B)
}
h1B.wxXCkey=1
}
cZB.wxXCkey=1
_(oVB,fYB)
var xWB=_v()
_(oVB,xWB)
if(_oz(z,24,e,s,gg)){xWB.wxVkey=1
}
var oXB=_v()
_(oVB,oXB)
if(_oz(z,25,e,s,gg)){oXB.wxVkey=1
}
var t7B=_n('view')
_rz(z,t7B,'class',26,e,s,gg)
var e8B=_v()
_(t7B,e8B)
if(_oz(z,27,e,s,gg)){e8B.wxVkey=1
}
else{e8B.wxVkey=2
var b9B=_v()
_(e8B,b9B)
if(_oz(z,28,e,s,gg)){b9B.wxVkey=1
}
b9B.wxXCkey=1
}
e8B.wxXCkey=1
_(oVB,t7B)
xWB.wxXCkey=1
oXB.wxXCkey=1
_(eTB,oVB)
var bUB=_v()
_(eTB,bUB)
if(_oz(z,29,e,s,gg)){bUB.wxVkey=1
}
bUB.wxXCkey=1
_(lQB,eTB)
var o0B=_mz(z,'pup-limit',['bind:__l',30,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(lQB,o0B)
var xAC=_mz(z,'verify-code-popup',['bind:__l',34,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(lQB,xAC)
aRB.wxXCkey=1
aRB.wxXCkey=3
_(r,lQB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx4_XC_3";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx4_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_wallet/invitation/detail.wxml'] = [$gwx4_XC_3, './pages_wallet/invitation/detail.wxml'];else __wxAppCode__['pages_wallet/invitation/detail.wxml'] = $gwx4_XC_3( './pages_wallet/invitation/detail.wxml' );
	;__wxRoute = "pages_wallet/invitation/detail";__wxRouteBegin = true;__wxAppCurrentFile__="pages_wallet/invitation/detail.js";define("pages_wallet/invitation/detail.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_wallet/invitation/detail"],{"2e46":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a("b5c2"),n=a("e2af"),o=a("8e36"),r={components:{},data:function(){return{itemdata:{},qrCode:"",drawOutType:"",orderData:{},orderDetailId:"",orderInfoId:"",status:0,distance:"",topbgurl:"",bottombgurl:"",eleTicketIndex:0,printTicketTypeDesc:"凭身份证入场",pageImgBg:"",checkedTimesFinish:!1,registerPhone:"",registerName:"",registerNo:"",registerNoPass:"",userInfoFlag:!1,platform:"WX"}},onLoad:function(e){console.log("wwww",e),console.log("http--",e.q),console.log("http--",JSON.parse(e.q));var t=decodeURIComponent(e.scene).split("=");t&&t.length>1&&("id"==t[0]&&(this.orderDetailId=t[1]),console.log("arr[0]",t[0]),console.log("arr[1]",t[1]))},onShow:function(){this.initUserInfo()},methods:{back:function(){e.setStorageSync("tabPath","/pages/index/index"),e.switchTab({url:"/pages/index/index"})},getEleDetail:function(){var t=this;(0,i.getETicketDetail)({orderDetailId:this.orderDetailId}).then((function(a){if(console.log(a),t.itemdata=a.data.performanceDetailModel,t.qrCode=a.data.qrCode,t.drawOutType=a.data.drawOutType,a.data.orderDetailModelList&&(t.orderData=a.data.orderDetailModelList[0],t.status=t.orderData.status,t.orderData.registerNo&&t.orderData.registerNo!=t.registerNoPass&&t.activateFail("当前邀请函已经被"+t.orderData.registerNo+"的身份证号激活")),t.itemdata){var i=t.itemdata.latitude,n=t.itemdata.longitude;t.distance=(0,o.getDistance)(e.getStorageSync("latitude"),e.getStorageSync("longitude"),i,n),t.itemdata.elecActivityImg&&(t.topbgurl=t.itemdata.elecActivityImg),t.itemdata.elecBgImg&&(t.bottombgurl=t.itemdata.elecBgImg),t.pageImgBg=a.data.performanceDetailModel.imageUrl,1==t.itemdata.allowCheckedTimes||t.itemdata.allowCheckedTimes>1&&t.itemdata.allowCheckedTimes==t.orderData.checkedTimes?t.checkedTimesFinish=!0:t.checkedTimesFinish=!1}})).catch((function(t){console.log(t),e.showToast({title:t.msg,icon:"none"})}))},toMap:function(){var t=this.itemdata.latitude,a=this.itemdata.longitude;console.log("点击地图"),e.openLocation({latitude:Number(t),longitude:Number(a),address:this.itemdata.venueAddress})},initUserInfo:function(){var t=this;e.getStorageSync("token")?(0,n.getAccountRegistration)({}).then((function(a){console.log(a),t.registerPhone=e.getStorageSync("authphone"),a.data&&a.data.isRealAuth&&(t.registerName=a.data.name,t.registerNo=a.data.completeCertificatesNo,t.registerNoPass=a.data.certificatesNo),t.userInfoFlag=!0,t.getEleDetail()})).catch((function(e){console.log(e),t.getEleDetail()})):this.getEleDetail()},rightNowActivate:function(){e.getStorageSync("token")?this.$refs.activateRef.open(this.registerPhone,this.registerName,this.registerNo,this.orderDetailId):e.navigateTo({url:"/pages/mine/login"})},activateSuccess:function(){this.$refs.successRef.open()},rightNowSee:function(t){e.setStorageSync("tabPath","/pages/mine/ticketwallet"),e.switchTab({url:"/pages/mine/ticketwallet"})},activateFail:function(e){this.$refs.failRef.open(e)}}};t.default=r}).call(this,a("df3c").default)},"33ae":function(e,t,a){},4153:function(e,t,a){"use strict";(function(e,t){var i=a("47a9");a("42bd"),a("861b"),i(a("3240"));var n=i(a("45c2"));e.__webpack_require_UNI_MP_PLUGIN__=a,t(n.default)}).call(this,a("3223").default,a("df3c").createPage)},"45c2":function(e,t,a){"use strict";a.r(t);var i=a("9350"),n=a("f6ac");for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("731c");var r=a("828b"),s=Object(r.a)(n.default,i.b,i.c,!1,null,"7b591592",null,!1,i.a,void 0);t.default=s.exports},"731c":function(e,t,a){"use strict";var i=a("33ae");a.n(i).a},9350:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var i={uniNavBar:function(){return a.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(a.bind(null,"f9b6"))},VerifyCodePopup:function(){return Promise.all([a.e("common/vendor"),a.e("components/VerifyCodePopup/VerifyCodePopup")]).then(a.bind(null,"6689"))}},n=function(){var e=this,t=(e.$createElement,e._self._c,e.$previewImageAddress("ticket_detail_bg.png")),a=e.$previewImageAddress("location_black.svg"),i=e.$previewImageAddress("ticket_detail_divide.png"),n=e._f("formatTime")(e.itemdata.showTime,"yyyy-mm-dd hh:mi"),o=1==e.orderData.invitationActivateStatus?e.$previewImageAddress("lock-circle.png"):null,r=1!=e.orderData.invitationActivateStatus?e.$previewImageAddress("ticket_idcard_ph.png"):null,s=1!=e.orderData.invitationActivateStatus&&e.status>0&&1==e.status&&e.checkedTimesFinish?e.$previewImageAddress("ticketyishiyong_0816.png"):null,d=1!=e.orderData.invitationActivateStatus&&e.status>0&&1!=e.status&&2==e.status?e.$previewImageAddress("ticketyiguoqi_0816.png"):null,c=1!=e.orderData.invitationActivateStatus&&e.status>0&&1!=e.status&&2!=e.status&&3==e.status?e.$previewImageAddress("ticketyizuofei_0816.png"):null,l=e.$previewImageAddress("ticket_detail_divide.png"),u=e.printTicketTypeDesc?e.$previewImageAddress("tip_icon_red.svg"):null,g=e.$previewImageAddress("ticket_detail_ending.png");e.$mp.data=Object.assign({},{$root:{m0:t,m1:a,m2:i,f0:n,m3:o,m4:r,m5:s,m6:d,m7:c,m8:l,m9:u,m10:g}})},o=[]},f6ac:function(e,t,a){"use strict";a.r(t);var i=a("2e46"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t.default=n.a}},[["4153","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_wallet/invitation/detail.js'});require("pages_wallet/invitation/detail.js");$gwx4_XC_4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx4_XC_4 || [];
function gz$gwx4_XC_4_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_XC_4_1)return __WXML_GLOBAL__.ops_cached.$gwx4_XC_4_1
__WXML_GLOBAL__.ops_cached.$gwx4_XC_4_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-1bcc6176'])
Z([[2,'!='],[[7],[3,'platform']],[1,'TT']])
Z([3,'__l'])
Z([3,'__e'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'^back']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z([1,false])
Z([3,'看个比赛'])
Z([3,'4be11a17-1'])
Z([3,'content data-v-1bcc6176'])
Z([[6],[[7],[3,'itemdata']],[3,'invitationAdvertisementUrl']])
Z([[2,'!'],[[6],[[7],[3,'itemdata']],[3,'invitationAdvertisementUrl']]])
Z([[2,'&&'],[[6],[[7],[3,'itemdata']],[3,'activeTimeLimit']],[[2,'!'],[[7],[3,'activateStatus']]]])
Z([[7],[3,'activateStatus']])
Z([[7],[3,'isPassDeadLine']])
Z([[2,'=='],[[7],[3,'status']],[1,3]])
Z([[2,'!'],[[7],[3,'activateStatus']]])
Z(z[2])
Z([3,'data-v-1bcc6176 vue-ref'])
Z([3,'loginpopup'])
Z([3,'bottom'])
Z([3,'4be11a17-2'])
Z([[4],[[5],[1,'default']]])
Z(z[2])
Z(z[3])
Z(z[3])
Z(z[0])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^loginFun']],[[4],[[5],[[4],[[5],[1,'loginFun']]]]]]]],[[4],[[5],[[5],[1,'^closeLogin']],[[4],[[5],[[4],[[5],[1,'closeLogin']]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'4be11a17-3'],[1,',']],[1,'4be11a17-2']])
Z(z[2])
Z(z[18])
Z([3,'confirm'])
Z([3,'4be11a17-4'])
Z(z[2])
Z(z[18])
Z([3,'verifycode'])
Z([3,'4be11a17-5'])
})(__WXML_GLOBAL__.ops_cached.$gwx4_XC_4_1);return __WXML_GLOBAL__.ops_cached.$gwx4_XC_4_1
}
__WXML_GLOBAL__.ops_set.$gwx4_XC_4=z;
__WXML_GLOBAL__.ops_init.$gwx4_XC_4=true;
var x=['./pages_wallet/invitation/preview.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx4_XC_4_1()
var fCC=_n('view')
_rz(z,fCC,'class',0,e,s,gg)
var cDC=_v()
_(fCC,cDC)
if(_oz(z,1,e,s,gg)){cDC.wxVkey=1
var hEC=_mz(z,'customtitlebar',['bind:__l',2,'bind:back',1,'class',2,'data-event-opts',3,'defaultBack',4,'title',5,'vueId',6],[],e,s,gg)
_(cDC,hEC)
}
var oFC=_n('view')
_rz(z,oFC,'class',9,e,s,gg)
var cGC=_v()
_(oFC,cGC)
if(_oz(z,10,e,s,gg)){cGC.wxVkey=1
}
var oHC=_v()
_(oFC,oHC)
if(_oz(z,11,e,s,gg)){oHC.wxVkey=1
}
var lIC=_v()
_(oFC,lIC)
if(_oz(z,12,e,s,gg)){lIC.wxVkey=1
}
var aJC=_v()
_(oFC,aJC)
if(_oz(z,13,e,s,gg)){aJC.wxVkey=1
}
else{aJC.wxVkey=2
var tKC=_v()
_(aJC,tKC)
if(_oz(z,14,e,s,gg)){tKC.wxVkey=1
}
else{tKC.wxVkey=2
var eLC=_v()
_(tKC,eLC)
if(_oz(z,15,e,s,gg)){eLC.wxVkey=1
}
else{eLC.wxVkey=2
var bMC=_v()
_(eLC,bMC)
if(_oz(z,16,e,s,gg)){bMC.wxVkey=1
}
bMC.wxXCkey=1
}
eLC.wxXCkey=1
}
tKC.wxXCkey=1
}
cGC.wxXCkey=1
oHC.wxXCkey=1
lIC.wxXCkey=1
aJC.wxXCkey=1
_(fCC,oFC)
var oNC=_mz(z,'uni-popup',['bind:__l',17,'class',1,'data-ref',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var xOC=_mz(z,'loginpop',['bind:__l',23,'bind:closeLogin',1,'bind:loginFun',2,'class',3,'data-event-opts',4,'vueId',5],[],e,s,gg)
_(oNC,xOC)
_(fCC,oNC)
var oPC=_mz(z,'pup-limit',['bind:__l',29,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(fCC,oPC)
var fQC=_mz(z,'verify-code-popup',['bind:__l',33,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(fCC,fQC)
cDC.wxXCkey=1
cDC.wxXCkey=3
_(r,fCC)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx4_XC_4";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx4_XC_4();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_wallet/invitation/preview.wxml'] = [$gwx4_XC_4, './pages_wallet/invitation/preview.wxml'];else __wxAppCode__['pages_wallet/invitation/preview.wxml'] = $gwx4_XC_4( './pages_wallet/invitation/preview.wxml' );
	;__wxRoute = "pages_wallet/invitation/preview";__wxRouteBegin = true;__wxAppCurrentFile__="pages_wallet/invitation/preview.js";define("pages_wallet/invitation/preview.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_wallet/invitation/preview"],{1246:function(t,e,i){},"238f":function(t,e,i){"use strict";i.r(e);var n=i("c9a0"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e.default=a.a},"2fb4":function(t,e,i){},"51a2":function(t,e,i){"use strict";(function(t,e){var n=i("47a9");i("42bd"),i("861b"),n(i("3240"));var a=n(i("c120"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(a.default)}).call(this,i("3223").default,i("df3c").createPage)},"5f86":function(t,e,i){"use strict";var n=i("1246");i.n(n).a},"88e4":function(t,e,i){"use strict";var n=i("9157");i.n(n).a},9157:function(t,e,i){},b865:function(t,e,i){"use strict";var n=i("2fb4");i.n(n).a},c120:function(t,e,i){"use strict";i.r(e);var n=i("f3c9"),a=i("238f");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("b865"),i("5f86"),i("88e4");var r=i("828b"),s=Object(r.a)(a.default,n.b,n.c,!1,null,"1bcc6176",null,!1,n.a,void 0);e.default=s.exports},c9a0:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("b5c2"),a=i("e2af"),o=i("4206"),r=i("d9e3"),s=i("00a9"),c={data:function(){return{orderDetailId:"",itemdata:{},activateStatus:!1,isCurrentSelf:!1,registerName:"",registerIdType:"0",registerIdCard:"",registerIdAllNum:"",registerNoInTicket:"",platform:"WX",isPassDeadLine:!1,invitationAdvertisementUrl:"",inviteName:"",invitePhone:"",inviteDate:"",status:0,seatSnapshot:""}},onLoad:function(t){if(console.log("options1",t),t&&t.q){var e=decodeURIComponent(t.q).split("id=");console.log("options2",e[1]),this.orderDetailId=e[1]}this.getEleDetail()},onShow:function(){t.getStorageSync("token")&&this.initUserInfo()},methods:{getEleDetail:function(){var e=this;(0,n.getETicketDetail)({orderDetailId:this.orderDetailId}).then((function(i){if(console.log(i),i&&i.data){if(e.itemdata=i.data.performanceDetailModel,i.data.orderDetailModelList){var n=i.data.orderDetailModelList[0];n&&(e.status=n.status,e.seatSnapshot=n.seatSnapshot),n.registerNo?(e.activateStatus=!0,e.registerNoInTicket=n.registerNo,e.itemdata.displayActiveDetail&&e.initQueryInfo()):e.activateStatus=!1}e.itemdata&&e.itemdata.activeTimeLimit&&(e.isPassDeadLine=(0,r.compareCurrentDate)(e.itemdata.lastActiveDate))}t.hideLoading()})).catch((function(t){console.log(t)}))},initQueryInfo:function(){var t=this;(0,o.queryActivate)({orderDetailId:this.orderDetailId}).then((function(e){console.log(e),null!=e&&e.data&&(e.data.registerName&&(t.inviteName=(0,s.maskName)(e.data.registerName)),e.data.registerPhone&&(t.invitePhone=(0,s.maskPhone)(e.data.registerPhone)),e.data.invitationActivateTime&&(t.inviteDate=e.data.invitationActivateTime))})).catch((function(t){console.log(t)}))},goActivate:function(){var e=this;t.getStorageSync("token")?t.navigateTo({url:"/pages_wallet/invitation/activate?id="+this.orderDetailId+"&registerName="+this.registerName+"&registerIdCard="+this.registerIdCard+"&registerIdType="+this.registerIdType+"&activityCodeControl="+this.itemdata.activityCodeControl,success:function(t){t.eventChannel.emit("acceptDataFromOpenerPage",{data:e.itemdata.idCardTypesSaleable})}}):this.jumpToLogin()},goTicketWallet:function(){t.getStorageSync("token")?(t.setStorageSync("tabPath","/pages/mine/ticketwallet"),t.switchTab({url:"/pages/mine/ticketwallet"})):this.jumpToLogin()},jumpToLogin:function(){t.navigateTo({url:"/pages/mine/login"})},loginFun:function(){this.$refs.loginpopup.close(),this.initUserInfo()},closeLogin:function(){this.$refs.loginpopup.close()},initUserInfo:function(){var e=this;(0,a.getAccountRegistration)({}).then((function(i){console.log(i),i.data&&(e.registerName=i.data.name,e.registerIdCard=i.data.completeCertificatesNo,e.registerIdType=i.data.certificatesType),t.hideLoading()})).catch((function(t){console.log(t)}))},back:function(){t.setStorageSync("tabPath","/pages/index/index"),t.switchTab({url:"/pages/index/index"})}}};e.default=c}).call(this,i("df3c").default)},f3c9:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={customtitlebar:function(){return Promise.all([i.e("common/vendor"),i.e("components/customtitlebar/customtitlebar")]).then(i.bind(null,"e34b"))},uniPopup:function(){return i.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(i.bind(null,"5b0a"))},loginpop:function(){return Promise.all([i.e("common/vendor"),i.e("components/loginpop/loginpop")]).then(i.bind(null,"1716"))},VerifyCodePopup:function(){return Promise.all([i.e("common/vendor"),i.e("components/VerifyCodePopup/VerifyCodePopup")]).then(i.bind(null,"6689"))}},a=function(){this.$createElement;var t=(this._self._c,this.activateStatus?null:this.$previewImageAddress("activate_tip.png")),e=this.$previewImageAddress("invitation_logo.png");this.$mp.data=Object.assign({},{$root:{m0:t,m1:e}})},o=[]}},[["51a2","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_wallet/invitation/preview.js'});require("pages_wallet/invitation/preview.js");$gwx4_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx4_XC_5 || [];
function gz$gwx4_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx4_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx4_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contentdetail data-v-001d8a6f'])
Z([[2,'!='],[[7],[3,'platform']],[1,'TT']])
Z([3,'transparent'])
Z([3,'__l'])
Z([3,'__e'])
Z([1,false])
Z([3,'data-v-001d8a6f'])
Z([3,'#ffffff'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z([1,true])
Z([[2,'?:'],[[2,'!='],[[7],[3,'platform']],[1,'ALI']],[1,'left'],[1,'']])
Z(z[9])
Z([3,'票详情'])
Z([3,'de47a33c-1'])
Z([3,'ticketMiddleContent data-v-001d8a6f'])
Z([[2,'>'],[[7],[3,'status']],[1,0]])
Z(z[6])
Z([[2,'=='],[[7],[3,'status']],[1,1]])
Z([[2,'=='],[[7],[3,'status']],[1,2]])
Z([[2,'=='],[[7],[3,'status']],[1,3]])
Z([[6],[[7],[3,'orderData']],[3,'registerName']])
Z(z[3])
Z([3,'data-v-001d8a6f vue-ref'])
Z([3,'confirm'])
Z([3,'de47a33c-2'])
Z(z[3])
Z(z[22])
Z([3,'verifycode'])
Z([3,'de47a33c-3'])
})(__WXML_GLOBAL__.ops_cached.$gwx4_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx4_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx4_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx4_XC_5=true;
var x=['./pages_wallet/wallet/ticketActivity.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx4_XC_5_1()
var hSC=_n('view')
_rz(z,hSC,'class',0,e,s,gg)
var oTC=_v()
_(hSC,oTC)
if(_oz(z,1,e,s,gg)){oTC.wxVkey=1
var cUC=_mz(z,'uni-nav-bar',['backgroundColor',2,'bind:__l',1,'bind:clickLeft',2,'border',3,'class',4,'color',5,'data-event-opts',6,'fixed',7,'leftIcon',8,'statusBar',9,'title',10,'vueId',11],[],e,s,gg)
_(oTC,cUC)
}
var oVC=_n('view')
_rz(z,oVC,'class',14,e,s,gg)
var lWC=_v()
_(oVC,lWC)
if(_oz(z,15,e,s,gg)){lWC.wxVkey=1
var tYC=_n('view')
_rz(z,tYC,'class',16,e,s,gg)
var eZC=_v()
_(tYC,eZC)
if(_oz(z,17,e,s,gg)){eZC.wxVkey=1
}
else{eZC.wxVkey=2
var b1C=_v()
_(eZC,b1C)
if(_oz(z,18,e,s,gg)){b1C.wxVkey=1
}
else{b1C.wxVkey=2
var o2C=_v()
_(b1C,o2C)
if(_oz(z,19,e,s,gg)){o2C.wxVkey=1
}
o2C.wxXCkey=1
}
b1C.wxXCkey=1
}
eZC.wxXCkey=1
_(lWC,tYC)
}
var aXC=_v()
_(oVC,aXC)
if(_oz(z,20,e,s,gg)){aXC.wxVkey=1
}
lWC.wxXCkey=1
aXC.wxXCkey=1
_(hSC,oVC)
var x3C=_mz(z,'pup-limit',['bind:__l',21,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(hSC,x3C)
var o4C=_mz(z,'verify-code-popup',['bind:__l',25,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(hSC,o4C)
oTC.wxXCkey=1
oTC.wxXCkey=3
_(r,hSC)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx4_XC_5";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx4_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_wallet/wallet/ticketActivity.wxml'] = [$gwx4_XC_5, './pages_wallet/wallet/ticketActivity.wxml'];else __wxAppCode__['pages_wallet/wallet/ticketActivity.wxml'] = $gwx4_XC_5( './pages_wallet/wallet/ticketActivity.wxml' );
	;__wxRoute = "pages_wallet/wallet/ticketActivity";__wxRouteBegin = true;__wxAppCurrentFile__="pages_wallet/wallet/ticketActivity.js";define("pages_wallet/wallet/ticketActivity.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_wallet/wallet/ticketActivity"],{"0786":function(e,t,i){"use strict";(function(e,t){var n=i("47a9");i("42bd"),i("861b"),n(i("3240"));var a=n(i("bd7c"));e.__webpack_require_UNI_MP_PLUGIN__=i,t(a.default)}).call(this,i("3223").default,i("df3c").createPage)},"3f34":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return d})),i.d(t,"a",(function(){return n}));var n={uniNavBar:function(){return i.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(i.bind(null,"f9b6"))},VerifyCodePopup:function(){return Promise.all([i.e("common/vendor"),i.e("components/VerifyCodePopup/VerifyCodePopup")]).then(i.bind(null,"6689"))}},a=function(){var e=this,t=(e.$createElement,e._self._c,e.$previewImageAddress("ticket_detail_bg.png")),i=e.$previewImageAddress("location_black.svg"),n=e.$previewImageAddress("ticket_detail_divide.png"),a=e.ticketIds.length,d=e.$previewImageAddress(0==e.eleTicketIndex?"ticket_up_0816_disable.svg":"ticket_up_0816_enable.svg"),o=e.status>0&&1==e.status?e.$previewImageAddress("ticketyishiyong_0816.png"):null,s=e.status>0&&1!=e.status&&2==e.status?e.$previewImageAddress("ticketyiguoqi_0816.png"):null,r=e.status>0&&1!=e.status&&2!=e.status&&3==e.status?e.$previewImageAddress("ticketyizuofei_0816.png"):null,c=e.$previewImageAddress(e.eleTicketIndex==e.ticketIds.length-1?"ticket_next_0816_disable.svg":"ticket_next_0816_enable.svg"),l=e.$previewImageAddress("ticket_detail_divide.png"),u=e.$previewImageAddress("arrow_right_gray.png.png"),g=e.$previewImageAddress("ticket_detail_ending.png");e.$mp.data=Object.assign({},{$root:{m0:t,m1:i,m2:n,g0:a,m3:d,m4:o,m5:s,m6:r,m7:c,m8:l,m9:u,m10:g}})},d=[]},4928:function(e,t,i){"use strict";i.r(t);var n=i("6e8d"),a=i.n(n);for(var d in n)["default"].indexOf(d)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(d);t.default=a.a},"6b75":function(e,t,i){"use strict";var n=i("f19f");i.n(n).a},"6e8d":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("b5c2"),a=i("8e36"),d={data:function(){return{itemdata:{},qrCode:"",orderData:{},orderDetailId:"",orderInfoId:"",status:0,distance:"",topbgurl:"",bottombgurl:"",ticketIds:[],eleTicketIndex:0,pageImgBg:"",platform:"WX"}},onLoad:function(e){var t=this;this.getOpenerEventChannel().on("acceptDataFromOpenerPage",(function(e){console.log("eventChannel",e),t.ticketIds=JSON.parse(decodeURIComponent(e.idModleList)),console.log("itemdatadefaultttt",t.ticketIds),t.changeEletickeInfo()}))},computed:{cssVars:function(){return{"--pageImgBg":this.pageImgBg}}},methods:{back:function(){e.navigateBack({delta:1})},changeEletickeInfo:function(){this.ticketIds.length>this.eleTicketIndex&&(this.orderDetailId=this.ticketIds[this.eleTicketIndex].id,this.orderInfoId=this.ticketIds[this.eleTicketIndex].orderId,this.getEleDetail())},getEleDetail:function(){var t=this;(0,n.getETicketDetail)({orderDetailId:this.orderDetailId,orderInfoId:this.orderInfoId}).then((function(i){if(console.log(i),t.itemdata=i.data.activityInfoOrderRpcResponse,t.qrCode=i.data.qrCode,i.data.orderDetailModelList&&(t.orderData=i.data.orderDetailModelList[0],t.status=t.orderData.status),t.itemdata){var n=t.itemdata.latitude,d=t.itemdata.longitude;t.distance=(0,a.getDistance)(e.getStorageSync("latitude"),e.getStorageSync("longitude"),n,d),t.itemdata.ticketHeadImg&&(t.topbgurl=t.itemdata.ticketHeadImg),t.itemdata.ticketBodyImg&&(t.bottombgurl=t.itemdata.ticketBodyImg),t.pageImgBg=t.itemdata.imageUrl}})).catch((function(t){console.log(t),e.showToast({title:t.msg,icon:"none"})}))},getCodeDetail:function(){(0,n.getPickUpCodeDetail)({orderDetailId:this.orderDetailId,orderInfoId:this.orderInfoId}).then((function(e){console.log(e)})).catch((function(t){console.log(t),e.showToast({title:t.msg,icon:"none"})}))},showQpd:function(){this.$refs.popupqpaddress.open("bottom")},closeQPAddress:function(){this.$refs.popupqpaddress.close()},toMap:function(){var t=this.itemdata.latitude,i=this.itemdata.longitude;console.log("点击地图"),e.openLocation({latitude:Number(t),longitude:Number(i),address:this.itemdata.addressDetail})},arrowLeft:function(){0!=this.eleTicketIndex&&(this.eleTicketIndex=this.eleTicketIndex-1,this.changeEletickeInfo())},arrowRight:function(){this.eleTicketIndex!=this.ticketIds.length-1&&(this.eleTicketIndex=this.eleTicketIndex+1,this.changeEletickeInfo())},jumpOrderDetail:function(t){e.navigateTo({url:"/pages_order/mine/activityorderdetail?id="+t})}}};t.default=d}).call(this,i("df3c").default)},"8deb":function(e,t,i){},b855:function(e,t,i){"use strict";var n=i("8deb");i.n(n).a},bd7c:function(e,t,i){"use strict";i.r(t);var n=i("3f34"),a=i("4928");for(var d in a)["default"].indexOf(d)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(d);i("6b75"),i("b855");var o=i("828b"),s=Object(o.a)(a.default,n.b,n.c,!1,null,"001d8a6f",null,!1,n.a,void 0);t.default=s.exports},f19f:function(e,t,i){}},[["0786","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_wallet/wallet/ticketActivity.js'});require("pages_wallet/wallet/ticketActivity.js");$gwx4_XC_6=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx4_XC_6 || [];
function gz$gwx4_XC_6_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_XC_6_1)return __WXML_GLOBAL__.ops_cached.$gwx4_XC_6_1
__WXML_GLOBAL__.ops_cached.$gwx4_XC_6_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contentdetail data-v-cf130fde'])
Z([[2,'!='],[[7],[3,'platform']],[1,'TT']])
Z([3,'transparent'])
Z([3,'__l'])
Z([3,'__e'])
Z([1,false])
Z([3,'data-v-cf130fde'])
Z([3,'#ffffff'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z([1,true])
Z([[2,'?:'],[[2,'!='],[[7],[3,'platform']],[1,'ALI']],[1,'left'],[1,'']])
Z(z[9])
Z([3,'票详情'])
Z([3,'eac12ac4-1'])
Z([3,'ticketMiddleContent data-v-cf130fde'])
Z([[2,'>'],[[7],[3,'status']],[1,0]])
Z(z[6])
Z([[2,'=='],[[7],[3,'status']],[1,1]])
Z([[2,'=='],[[7],[3,'status']],[1,2]])
Z([[2,'=='],[[7],[3,'status']],[1,3]])
Z(z[3])
Z(z[4])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'ticketList']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([[9],[[9],[[9],[[9],[[9],[[8],'autoplay',[1,false]],[[8],'slidesPerView',[1,'auto']]],[[8],'initialSlide',[1,0]]],[[8],'loop',[1,false]]],[[8],'centeredSlides',[1,true]]],[[8],'spaceBetween',[1,8]]])
Z([[7],[3,'ticketList']])
Z([3,'eac12ac4-2'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'item'])
Z(z[25])
Z(z[28])
Z(z[3])
Z(z[6])
Z([[8],'width',[1,'380rpx']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'eac12ac4-3-'],[[7],[3,'index']]],[1,',']],[1,'eac12ac4-2']])
Z(z[27])
Z([3,'seatAndPrice data-v-cf130fde'])
Z([[6],[[7],[3,'item']],[3,'registerName']])
Z([[7],[3,'buyerName']])
Z(z[3])
Z([3,'data-v-cf130fde vue-ref'])
Z([3,'popupqpaddress'])
Z([3,'bottom'])
Z([3,'eac12ac4-4'])
Z(z[27])
Z([[7],[3,'addressAar']])
Z(z[3])
Z(z[4])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^closeQPAddress']],[[4],[[5],[[4],[[5],[1,'closeQPAddress']]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'eac12ac4-5'],[1,',']],[1,'eac12ac4-4']])
Z(z[3])
Z(z[41])
Z([3,'confirm'])
Z([3,'eac12ac4-6'])
Z(z[3])
Z(z[41])
Z([3,'verifycode'])
Z([3,'eac12ac4-7'])
})(__WXML_GLOBAL__.ops_cached.$gwx4_XC_6_1);return __WXML_GLOBAL__.ops_cached.$gwx4_XC_6_1
}
__WXML_GLOBAL__.ops_set.$gwx4_XC_6=z;
__WXML_GLOBAL__.ops_init.$gwx4_XC_6=true;
var x=['./pages_wallet/wallet/ticketCodeEvent.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx4_XC_6_1()
var c6C=_n('view')
_rz(z,c6C,'class',0,e,s,gg)
var h7C=_v()
_(c6C,h7C)
if(_oz(z,1,e,s,gg)){h7C.wxVkey=1
var o8C=_mz(z,'uni-nav-bar',['backgroundColor',2,'bind:__l',1,'bind:clickLeft',2,'border',3,'class',4,'color',5,'data-event-opts',6,'fixed',7,'leftIcon',8,'statusBar',9,'title',10,'vueId',11],[],e,s,gg)
_(h7C,o8C)
}
var c9C=_n('view')
_rz(z,c9C,'class',14,e,s,gg)
var o0C=_v()
_(c9C,o0C)
if(_oz(z,15,e,s,gg)){o0C.wxVkey=1
var lAD=_n('view')
_rz(z,lAD,'class',16,e,s,gg)
var aBD=_v()
_(lAD,aBD)
if(_oz(z,17,e,s,gg)){aBD.wxVkey=1
}
else{aBD.wxVkey=2
var tCD=_v()
_(aBD,tCD)
if(_oz(z,18,e,s,gg)){tCD.wxVkey=1
}
else{tCD.wxVkey=2
var eDD=_v()
_(tCD,eDD)
if(_oz(z,19,e,s,gg)){eDD.wxVkey=1
}
eDD.wxXCkey=1
}
tCD.wxXCkey=1
}
aBD.wxXCkey=1
_(o0C,lAD)
}
var bED=_mz(z,'z-swiper',['bind:__l',20,'bind:input',1,'class',2,'data-event-opts',3,'options',4,'value',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var oFD=_v()
_(bED,oFD)
var xGD=function(fID,oHD,cJD,gg){
var oLD=_mz(z,'z-swiper-item',['bind:__l',32,'class',1,'customStyle',2,'vueId',3,'vueSlots',4],[],fID,oHD,gg)
var cMD=_n('view')
_rz(z,cMD,'class',37,fID,oHD,gg)
var oND=_v()
_(cMD,oND)
if(_oz(z,38,fID,oHD,gg)){oND.wxVkey=1
}
else{oND.wxVkey=2
var lOD=_v()
_(oND,lOD)
if(_oz(z,39,fID,oHD,gg)){lOD.wxVkey=1
}
lOD.wxXCkey=1
}
oND.wxXCkey=1
_(oLD,cMD)
_(cJD,oLD)
return cJD
}
oFD.wxXCkey=4
_2z(z,30,xGD,e,s,gg,oFD,'item','index','index')
_(c9C,bED)
o0C.wxXCkey=1
_(c6C,c9C)
var aPD=_mz(z,'uni-popup',['bind:__l',40,'class',1,'data-ref',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var tQD=_mz(z,'ticketaddress',['addressAar',46,'bind:__l',1,'bind:closeQPAddress',2,'class',3,'data-event-opts',4,'vueId',5],[],e,s,gg)
_(aPD,tQD)
_(c6C,aPD)
var eRD=_mz(z,'pup-limit',['bind:__l',52,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(c6C,eRD)
var bSD=_mz(z,'verify-code-popup',['bind:__l',56,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(c6C,bSD)
h7C.wxXCkey=1
h7C.wxXCkey=3
_(r,c6C)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx4_XC_6";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx4_XC_6();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_wallet/wallet/ticketCodeEvent.wxml'] = [$gwx4_XC_6, './pages_wallet/wallet/ticketCodeEvent.wxml'];else __wxAppCode__['pages_wallet/wallet/ticketCodeEvent.wxml'] = $gwx4_XC_6( './pages_wallet/wallet/ticketCodeEvent.wxml' );
	;__wxRoute = "pages_wallet/wallet/ticketCodeEvent";__wxRouteBegin = true;__wxAppCurrentFile__="pages_wallet/wallet/ticketCodeEvent.js";define("pages_wallet/wallet/ticketCodeEvent.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_wallet/wallet/ticketCodeEvent"],{3831:function(e,t,i){"use strict";i.r(t);var n=i("8723"),a=i.n(n);for(var d in n)["default"].indexOf(d)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(d);t.default=a.a},"58d4":function(e,t,i){},"5d4a":function(e,t,i){"use strict";var n=i("58d4");i.n(n).a},"654b":function(e,t,i){"use strict";(function(e,t){var n=i("47a9");i("42bd"),i("861b"),n(i("3240"));var a=n(i("7b01"));e.__webpack_require_UNI_MP_PLUGIN__=i,t(a.default)}).call(this,i("3223").default,i("df3c").createPage)},"7b01":function(e,t,i){"use strict";i.r(t);var n=i("e97c"),a=i("3831");for(var d in a)["default"].indexOf(d)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(d);i("5d4a");var s=i("828b"),o=Object(s.a)(a.default,n.b,n.c,!1,null,"cf130fde",null,!1,n.a,void 0);t.default=o.exports},8723:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("b5c2"),a=(i("8e36"),{data:function(){return{itemdata:{},qrCode:"",drawOutType:"",addressAar:[],orderInfoId:"",status:0,ticketCode:"",topbgurl:"",bottombgurl:"",ticketIds:[],buyerName:"",showId:"",eleTicketIndex:0,printTicketTypeDesc:"",pageImgBg:"",ticketList:[],platform:"WX"}},onLoad:function(e){console.log("wwww",e),this.ticketIds=JSON.parse(decodeURIComponent(e.idModleList)),this.buyerName=e.memberInfoName,this.showId=e.showId,console.log("itemdatadefaultttt",this.ticketIds),this.changeEletickeInfo()},methods:{back:function(){e.navigateBack({delta:1})},changeEletickeInfo:function(){this.ticketIds.length>this.eleTicketIndex&&(this.orderInfoId=this.ticketIds[this.eleTicketIndex].id,this.getEleDetail())},getEleDetail:function(){var t=this;(0,n.getTicketCodeDetail)({orderInfoId:this.orderInfoId}).then((function(e){console.log(e),t.itemdata=e.data.performanceDetailModel,t.qrCode=e.data.qrCode,t.drawOutType=e.data.drawOutType,t.ticketList=e.data.orderDetailModelList,t.ticketCode=e.data.ticketCode,t.status=e.data.status,t.itemdata&&(t.itemdata.elecActivityImg&&(t.topbgurl=t.itemdata.elecActivityImg),t.itemdata.elecBgImg&&(t.bottombgurl=t.itemdata.elecBgImg),t.pageImgBg=e.data.performanceDetailModel.imageUrl)})).catch((function(t){console.log(t),e.showToast({title:t.msg,icon:"none"})}))},getTicketPlace:function(){var e=this;(0,n.getTicketCodePlaceList)(this.showId).then((function(t){e.addressAar=t.data})).catch((function(e){}))},showQpd:function(){this.addressAar.length||this.getTicketPlace(),this.$refs.popupqpaddress.open("bottom")},closeQPAddress:function(){this.$refs.popupqpaddress.close()},toMap:function(){var t=this.itemdata.latitude,i=this.itemdata.longitude;console.log("点击地图"),e.openLocation({latitude:Number(t),longitude:Number(i),address:this.itemdata.venueAddress})},arrowLeft:function(){0!=this.eleTicketIndex&&(this.eleTicketIndex=this.eleTicketIndex-1,this.changeEletickeInfo())},arrowRight:function(){this.eleTicketIndex!=this.ticketIds.length-1&&(this.eleTicketIndex=this.eleTicketIndex+1,this.changeEletickeInfo())},jumpOrderDetail:function(t){e.navigateTo({url:"/pages_order/mine/eventorderdetail?id="+t})}}});t.default=a}).call(this,i("df3c").default)},e97c:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return d})),i.d(t,"a",(function(){return n}));var n={uniNavBar:function(){return i.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(i.bind(null,"f9b6"))},zSwiper:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/zebra-swiper/components/z-swiper/z-swiper")]).then(i.bind(null,"8095"))},zSwiperItem:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/zebra-swiper/components/z-swiper-item/z-swiper-item")]).then(i.bind(null,"d942"))},uniPopup:function(){return i.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(i.bind(null,"5b0a"))},ticketaddress:function(){return i.e("components/ticketaddress/ticketaddress").then(i.bind(null,"7da7"))},VerifyCodePopup:function(){return Promise.all([i.e("common/vendor"),i.e("components/VerifyCodePopup/VerifyCodePopup")]).then(i.bind(null,"6689"))}},a=function(){var e=this,t=(e.$createElement,e._self._c,e.$previewImageAddress("ticket_detail_bg.png")),i=e.$previewImageAddress("location_black.svg"),n=e.$previewImageAddress("ticket_detail_divide.png"),a=e.ticketIds.length,d=e._f("formatTime")(e.itemdata.showTime,"yyyy-mm-dd hh:mi"),s=e.$previewImageAddress(0==e.eleTicketIndex?"ticket_up_0816_disable.svg":"ticket_up_0816_enable.svg"),o=e.status>0&&1==e.status?e.$previewImageAddress("ticketyishiyong_0816.png"):null,r=e.status>0&&1!=e.status&&2==e.status?e.$previewImageAddress("ticketyiguoqi_0816.png"):null,c=e.status>0&&1!=e.status&&2!=e.status&&3==e.status?e.$previewImageAddress("ticketyizuofei_0816.png"):null,u=e.$previewImageAddress(e.eleTicketIndex==e.ticketIds.length-1?"ticket_next_0816_disable.svg":"ticket_next_0816_enable.svg"),l=e.$previewImageAddress("ticket_detail_divide.png"),m=e.$previewImageAddress("arrow_right_gray.png.png"),p=e.$previewImageAddress("arrow_right_gray.png.png"),g=e.$previewImageAddress("tip_icon_red.svg"),f=e.$previewImageAddress("ticket_detail_ending.png");e.$mp.data=Object.assign({},{$root:{m0:t,m1:i,m2:n,g0:a,f0:d,m3:s,m4:o,m5:r,m6:c,m7:u,m8:l,m9:m,m10:p,m11:g,m12:f}})},d=[]}},[["654b","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_wallet/wallet/ticketCodeEvent.js'});require("pages_wallet/wallet/ticketCodeEvent.js");$gwx4_XC_7=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx4_XC_7 || [];
function gz$gwx4_XC_7_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_XC_7_1)return __WXML_GLOBAL__.ops_cached.$gwx4_XC_7_1
__WXML_GLOBAL__.ops_cached.$gwx4_XC_7_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contentdetail data-v-97c74124'])
Z([[2,'!='],[[7],[3,'platform']],[1,'TT']])
Z([3,'transparent'])
Z([3,'__l'])
Z([3,'__e'])
Z([1,false])
Z([3,'data-v-97c74124'])
Z([3,'#ffffff'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z([1,true])
Z([[2,'?:'],[[2,'!='],[[7],[3,'platform']],[1,'ALI']],[1,'left'],[1,'']])
Z(z[9])
Z([3,'票详情'])
Z([3,'52f7e95e-1'])
Z([3,'ticketContent data-v-97c74124'])
Z([3,'ticketMiddleContent data-v-97c74124'])
Z([[7],[3,'currentStatusImage']])
Z([[6],[[7],[3,'orderData']],[3,'registerName']])
Z([[7],[3,'buyerName']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'openToGift']],[[7],[3,'isRangeTime']]],[[2,'=='],[[7],[3,'navIndex']],[1,1]]],[[7],[3,'isIdcardticket']]],[[2,'!='],[[7],[3,'drawOutType']],[1,'8']]],[[2,'=='],[[7],[3,'status']],[1,0]]],[[2,'<'],[[6],[[7],[3,'orderData']],[3,'translateTimes']],[1,1]]])
Z([3,'ticketBottom data-v-97c74124'])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'orderData']],[3,'invitationActivateStatus']],[1,0]],[[2,'!='],[[7],[3,'navIndex']],[1,0]]],[[7],[3,'displayDetailButton']]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'orderData']],[3,'invitationActivateStatus']],[1,0]],[[2,'!='],[[7],[3,'navIndex']],[1,0]]])
Z([[7],[3,'electTicketTipsTitle']])
Z([[7],[3,'electTicketTips']])
Z(z[3])
Z([3,'data-v-97c74124 vue-ref'])
Z([3,'popupqpaddress'])
Z([3,'bottom'])
Z([3,'52f7e95e-2'])
Z([[4],[[5],[1,'default']]])
Z([[7],[3,'addressAar']])
Z(z[3])
Z(z[4])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'closeQPAddress']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'52f7e95e-3'],[1,',']],[1,'52f7e95e-2']])
Z(z[3])
Z(z[26])
Z([3,'confirm'])
Z([3,'52f7e95e-4'])
Z(z[3])
Z(z[26])
Z([3,'verifycode'])
Z([3,'52f7e95e-5'])
})(__WXML_GLOBAL__.ops_cached.$gwx4_XC_7_1);return __WXML_GLOBAL__.ops_cached.$gwx4_XC_7_1
}
__WXML_GLOBAL__.ops_set.$gwx4_XC_7=z;
__WXML_GLOBAL__.ops_init.$gwx4_XC_7=true;
var x=['./pages_wallet/wallet/ticketEvent.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx4_XC_7_1()
var xUD=_n('view')
_rz(z,xUD,'class',0,e,s,gg)
var oVD=_v()
_(xUD,oVD)
if(_oz(z,1,e,s,gg)){oVD.wxVkey=1
var fWD=_mz(z,'uni-nav-bar',['backgroundColor',2,'bind:__l',1,'bind:clickLeft',2,'border',3,'class',4,'color',5,'data-event-opts',6,'fixed',7,'leftIcon',8,'statusBar',9,'title',10,'vueId',11],[],e,s,gg)
_(oVD,fWD)
}
var cXD=_n('view')
_rz(z,cXD,'class',14,e,s,gg)
var hYD=_n('view')
_rz(z,hYD,'class',15,e,s,gg)
var oZD=_v()
_(hYD,oZD)
if(_oz(z,16,e,s,gg)){oZD.wxVkey=1
}
var c1D=_v()
_(hYD,c1D)
if(_oz(z,17,e,s,gg)){c1D.wxVkey=1
}
else{c1D.wxVkey=2
var l3D=_v()
_(c1D,l3D)
if(_oz(z,18,e,s,gg)){l3D.wxVkey=1
}
l3D.wxXCkey=1
}
var o2D=_v()
_(hYD,o2D)
if(_oz(z,19,e,s,gg)){o2D.wxVkey=1
}
oZD.wxXCkey=1
c1D.wxXCkey=1
o2D.wxXCkey=1
_(cXD,hYD)
var a4D=_n('view')
_rz(z,a4D,'class',20,e,s,gg)
var t5D=_v()
_(a4D,t5D)
if(_oz(z,21,e,s,gg)){t5D.wxVkey=1
}
var e6D=_v()
_(a4D,e6D)
if(_oz(z,22,e,s,gg)){e6D.wxVkey=1
}
var b7D=_v()
_(a4D,b7D)
if(_oz(z,23,e,s,gg)){b7D.wxVkey=1
}
var o8D=_v()
_(a4D,o8D)
if(_oz(z,24,e,s,gg)){o8D.wxVkey=1
}
t5D.wxXCkey=1
e6D.wxXCkey=1
b7D.wxXCkey=1
o8D.wxXCkey=1
_(cXD,a4D)
_(xUD,cXD)
var x9D=_mz(z,'uni-popup',['bind:__l',25,'class',1,'data-ref',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var o0D=_mz(z,'ticketaddress',['addressAar',31,'bind:__l',1,'bindtap',2,'class',3,'data-event-opts',4,'vueId',5],[],e,s,gg)
_(x9D,o0D)
_(xUD,x9D)
var fAE=_mz(z,'pup-limit',['bind:__l',37,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(xUD,fAE)
var cBE=_mz(z,'verify-code-popup',['bind:__l',41,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(xUD,cBE)
oVD.wxXCkey=1
oVD.wxXCkey=3
_(r,xUD)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx4_XC_7";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx4_XC_7();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_wallet/wallet/ticketEvent.wxml'] = [$gwx4_XC_7, './pages_wallet/wallet/ticketEvent.wxml'];else __wxAppCode__['pages_wallet/wallet/ticketEvent.wxml'] = $gwx4_XC_7( './pages_wallet/wallet/ticketEvent.wxml' );
	;__wxRoute = "pages_wallet/wallet/ticketEvent";__wxRouteBegin = true;__wxAppCurrentFile__="pages_wallet/wallet/ticketEvent.js";define("pages_wallet/wallet/ticketEvent.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_wallet/wallet/ticketEvent"],{"05e7":function(e,t,i){"use strict";i.r(t);var a=i("e2d5"),n=i.n(a);for(var d in a)["default"].indexOf(d)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(d);t.default=n.a},"3d32":function(e,t,i){},7553:function(e,t,i){"use strict";(function(e,t){var a=i("47a9");i("42bd"),i("861b"),a(i("3240"));var n=a(i("9552"));e.__webpack_require_UNI_MP_PLUGIN__=i,t(n.default)}).call(this,i("3223").default,i("df3c").createPage)},"79fd":function(e,t,i){"use strict";var a=i("3d32");i.n(a).a},9552:function(e,t,i){"use strict";i.r(t);var a=i("c31f"),n=i("05e7");for(var d in n)["default"].indexOf(d)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(d);i("79fd");var r=i("828b"),o=Object(r.a)(n.default,a.b,a.c,!1,null,"97c74124",null,!1,a.a,void 0);t.default=o.exports},c31f:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return d})),i.d(t,"a",(function(){return a}));var a={uniNavBar:function(){return i.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(i.bind(null,"f9b6"))},uniPopup:function(){return i.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(i.bind(null,"5b0a"))},ticketaddress:function(){return i.e("components/ticketaddress/ticketaddress").then(i.bind(null,"7da7"))},VerifyCodePopup:function(){return Promise.all([i.e("common/vendor"),i.e("components/VerifyCodePopup/VerifyCodePopup")]).then(i.bind(null,"6689"))}},n=function(){var e=this,t=(e.$createElement,e._self._c,e.$previewImageAddress("ticket_detail_bg.png")),i=e.$previewImageAddress("location_black.svg"),a=e.$previewImageAddress("ticket_detail_divide.png"),n=e.ticketIds.length,d=e._f("formatTime")(e.itemdata.showTime,"yyyy-mm-dd hh:mi"),r=e.$previewImageAddress(0==e.eleTicketIndex?"ticket_up_0816_disable.svg":"ticket_up_0816_enable.svg"),o=e.currentStatusImage?e.$previewImageAddress(e.currentStatusImage):null,s=e.$previewImageAddress(e.eleTicketIndex==e.ticketIds.length-1?"ticket_next_0816_disable.svg":"ticket_next_0816_enable.svg"),c=e.ticketIds.length,l=e.$previewImageAddress("ticket_detail_divide.png"),u=0==e.orderData.invitationActivateStatus&&0!=e.navIndex&&e.displayDetailButton?e.$previewImageAddress("arrow_right_gray.png.png"):null,p=e.electTicketTipsTitle?e.$previewImageAddress("tip_icon_red.svg"):null,g=e.$previewImageAddress("ticket_detail_ending.png");e.$mp.data=Object.assign({},{$root:{m0:t,m1:i,m2:a,g0:n,f0:d,m3:r,m4:o,m5:s,g1:c,m6:l,m7:u,m8:p,m9:g}})},d=[]},e2d5:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i("b5c2"),n=(i("8e36"),i("d9e3")),d=i("e2af"),r=i("00a9"),o={data:function(){return{itemdata:{},qrCode:"",drawOutType:"",displayDetailButton:!1,orderData:{},addressAar:[{id:0,checked:!1,name:"张小小",phone:"19989898989",address:"北京市朝阳区朝阳门外大街"}],orderDetailId:"",orderInfoId:"",status:0,distance:"",topbgurl:"",bottombgurl:"",ticketIds:[],buyerName:"",eleTicketIndex:0,printTicketTypeDesc:"",pageImgBg:"",checkedTimesFinish:!1,thirdOrderExtId:null,platform:"WX",navIndex:-1,isIdcardticket:!1,electTicketTips:"",electTicketTipsTitle:"",seatAndPriceStr:"",openToGift:!1,isRangeTime:!1,intervalId:null}},onLoad:function(e){var t=this;console.log("wwww",e),this.getOpenerEventChannel().on("acceptDataFromOpenerPage",(function(e){console.log("eventChannel",e),e.idModleList&&(t.ticketIds=JSON.parse(decodeURIComponent(e.idModleList))),t.buyerName=e.memberInfoName,t.navIndex=e.navIndex,console.log("itemdatadefaultttt",t.ticketIds),t.changeEletickeInfo()}))},onUnload:function(){this.intervalId&&clearInterval(this.intervalId)},computed:{isHorizontalCard:function(){var e=this.orderData.registerType;return 0==e||4==e||e>5},idcardImageClass:function(){return this.isHorizontalCard?"idcardPlaceHolder":"idcardPlaceHolder-v"},previewImageUrl:function(){return console.log("isIdcardticket",this.isIdcardticket),console.log("registerType",this.orderData.registerType),this.$previewImageAddress((0,r.getCoverImgFromId)(this.orderData.registerType))},isQrCodeGrouped:function(){return this.status>1||1==this.status&&this.checkedTimesFinish||0==this.status&&this.orderData.hadPrintTicket>0},statusImageMap:function(){return{1:this.checkedTimesFinish?"ticketyishiyong_0816.png":null,2:"ticketyiguoqi_0816.png",3:"ticketyizuofei_0816.png",printed:"yiquzhipiao.png"}},currentStatusImage:function(){return console.log("status===",this.status),this.status>0?this.statusImageMap[this.status]:this.orderData.hadPrintTicket>0?this.statusImageMap.printed:null}},methods:{back:function(){e.navigateBack({delta:1})},changeEletickeInfo:function(){this.ticketIds.length>this.eleTicketIndex&&(this.orderDetailId=this.ticketIds[this.eleTicketIndex].id,this.orderInfoId=this.ticketIds[this.eleTicketIndex].orderId,this.getEleDetail())},getEleDetail:function(){var e=this;(0,a.getETicketDetail)({orderDetailId:this.orderDetailId,orderInfoId:this.orderInfoId}).then((function(t){var i,a;console.log(t),e.itemdata=t.data.performanceDetailModel,e.qrCode=t.data.qrCode,e.drawOutType=t.data.drawOutType,e.displayDetailButton=t.data.displayDetailButton,e.thirdOrderExtId=t.data.thirdOrderExtId,7==e.drawOutType&&(e.intervalId||(e.intervalId=setInterval(e.getEleDetail,6e4))),t.data.orderDetailModelList&&(e.orderData=t.data.orderDetailModelList[0],e.status=e.orderData.status,"3"==e.drawOutType||"8"==e.drawOutType||0!=e.orderData.invitationActivateStatus&&1==e.itemdata.invitationDisplayType?e.isIdcardticket=!0:e.isIdcardticket=!1,e.seatAndPriceStr="",e.orderData.fareDes&&(e.seatAndPriceStr=e.orderData.fareDes+"  "),0!=e.orderData.invitationActivateStatus?e.seatAndPriceStr=e.seatAndPriceStr+e.orderData.seatSnapshot+"  ":e.orderData.seatSnapshot?e.seatAndPriceStr=e.seatAndPriceStr+e.orderData.seatSnapshot+"¥"+e.orderData.price/100+"  ":e.seatAndPriceStr=e.seatAndPriceStr+"¥"+e.orderData.price/100+"  "),e.itemdata&&(e.openToGift=e.itemdata.openToGift,e.openToGift&&(e.isRangeTime=(0,n.whetherCurrentRange)(e.itemdata.giftDateSt,e.itemdata.giftDateEt)),e.itemdata.latitude,e.itemdata.longitude,e.itemdata.elecActivityImg&&(e.topbgurl=e.itemdata.elecActivityImg),e.itemdata.elecBgImg&&(e.bottombgurl=e.itemdata.elecBgImg),e.electTicketTipsTitle=null===(i=e.itemdata.electTicketTipsTitle)||void 0===i?void 0:i.trim(),e.electTicketTips=null===(a=e.itemdata.electTicketTips)||void 0===a?void 0:a.trim(),e.pageImgBg=t.data.performanceDetailModel.imageUrl,1==e.itemdata.allowCheckedTimes||e.itemdata.allowCheckedTimes>1&&e.itemdata.allowCheckedTimes==e.orderData.checkedTimes?e.checkedTimesFinish=!0:e.checkedTimesFinish=!1)})).catch((function(e){console.log(e)}))},getCodeDetail:function(){(0,a.getPickUpCodeDetail)({orderDetailId:this.orderDetailId,orderInfoId:this.orderInfoId}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},showQpd:function(){this.$refs.popupqpaddress.open("bottom")},closeQPAddress:function(){this.$refs.popupqpaddress.close()},toMap:function(){var t=this.itemdata.latitude,i=this.itemdata.longitude;console.log("点击地图"),e.openLocation({latitude:Number(t),longitude:Number(i),address:this.itemdata.venueAddress})},arrowLeft:function(){0!=this.eleTicketIndex&&(this.eleTicketIndex=this.eleTicketIndex-1,this.changeEletickeInfo())},arrowRight:function(){this.eleTicketIndex!=this.ticketIds.length-1&&(this.eleTicketIndex=this.eleTicketIndex+1,this.changeEletickeInfo())},jumpOrderDetail:function(t){e.navigateTo({url:"/pages_order/mine/eventorderdetail?id="+t})},eleCardCode:function(){(0,d.getAccountRegistration)({}).then((function(t){if(console.log(t),t.data){var i=t.data;e.navigateTo({url:"/pages_mine/mine/purchaseradd?type=1&authorinfo=".concat(JSON.stringify(i))})}else e.navigateTo({url:"/pages_config/sysconfig/sysnamenotice?keynum=ctms.cms.common.conf.10021&type=1"})})).catch((function(e){console.log(e)}))},goTransfer:function(){e.navigateTo({url:"/pages_wallet/wallet/transferSend?ticketId="+this.orderDetailId+"&orderInfoId="+this.orderInfoId})}}};t.default=o}).call(this,i("df3c").default)}},[["7553","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_wallet/wallet/ticketEvent.js'});require("pages_wallet/wallet/ticketEvent.js");$gwx4_XC_8=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx4_XC_8 || [];
function gz$gwx4_XC_8_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_XC_8_1)return __WXML_GLOBAL__.ops_cached.$gwx4_XC_8_1
__WXML_GLOBAL__.ops_cached.$gwx4_XC_8_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contentdetail data-v-5fcfe70b'])
Z([3,'customContent data-v-5fcfe70b'])
Z([[2,'+'],[[2,'+'],[1,'--bgurl:'],[[2,'+'],[[2,'+'],[1,'url('],[[7],[3,'pageImgBg']]],[1,')']]],[1,';']])
Z([[7],[3,'currentStatusImage']])
Z([[6],[[7],[3,'orderData']],[3,'registerName']])
Z([[7],[3,'buyerName']])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'openToGift']],[[7],[3,'isRangeTime']]],[[2,'=='],[[7],[3,'navIndex']],[1,1]]],[[7],[3,'isIdcardticket']]],[[2,'!='],[[7],[3,'drawOutType']],[1,'8']]],[[2,'=='],[[7],[3,'status']],[1,0]]],[[2,'<'],[[6],[[7],[3,'orderData']],[3,'translateTimes']],[1,1]]])
Z([3,'data-v-5fcfe70b'])
Z([3,'margin:34rpx 32rpx 60rpx 32rpx;'])
Z([[2,'&&'],[[7],[3,'electTicketTipsTitle']],[[7],[3,'electTicketTips']]])
Z([[7],[3,'electTicketTipsTitle']])
Z([[7],[3,'electTicketTips']])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'orderData']],[3,'invitationActivateStatus']],[1,0]],[[2,'!='],[[7],[3,'navIndex']],[1,0]]],[[7],[3,'displayDetailButton']]])
Z([3,'__l'])
Z([3,'data-v-5fcfe70b vue-ref'])
Z([3,'popupqpaddress'])
Z([3,'bottom'])
Z([3,'205d7020-1'])
Z([[4],[[5],[1,'default']]])
Z([[7],[3,'addressAar']])
Z(z[13])
Z([3,'__e'])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'closeQPAddress']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'205d7020-2'],[1,',']],[1,'205d7020-1']])
Z(z[13])
Z(z[14])
Z([3,'confirm'])
Z([3,'205d7020-3'])
Z(z[13])
Z(z[14])
Z([3,'verifycode'])
Z([3,'205d7020-4'])
})(__WXML_GLOBAL__.ops_cached.$gwx4_XC_8_1);return __WXML_GLOBAL__.ops_cached.$gwx4_XC_8_1
}
__WXML_GLOBAL__.ops_set.$gwx4_XC_8=z;
__WXML_GLOBAL__.ops_init.$gwx4_XC_8=true;
var x=['./pages_wallet/wallet/ticketEventCustom.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx4_XC_8_1()
var oDE=_n('view')
_rz(z,oDE,'class',0,e,s,gg)
var oFE=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var lGE=_v()
_(oFE,lGE)
if(_oz(z,3,e,s,gg)){lGE.wxVkey=1
}
var aHE=_v()
_(oFE,aHE)
if(_oz(z,4,e,s,gg)){aHE.wxVkey=1
}
else{aHE.wxVkey=2
var eJE=_v()
_(aHE,eJE)
if(_oz(z,5,e,s,gg)){eJE.wxVkey=1
}
eJE.wxXCkey=1
}
var tIE=_v()
_(oFE,tIE)
if(_oz(z,6,e,s,gg)){tIE.wxVkey=1
}
var bKE=_mz(z,'view',['class',7,'style',1],[],e,s,gg)
var oLE=_v()
_(bKE,oLE)
if(_oz(z,9,e,s,gg)){oLE.wxVkey=1
}
var xME=_v()
_(bKE,xME)
if(_oz(z,10,e,s,gg)){xME.wxVkey=1
}
var oNE=_v()
_(bKE,oNE)
if(_oz(z,11,e,s,gg)){oNE.wxVkey=1
}
oLE.wxXCkey=1
xME.wxXCkey=1
oNE.wxXCkey=1
_(oFE,bKE)
lGE.wxXCkey=1
aHE.wxXCkey=1
tIE.wxXCkey=1
_(oDE,oFE)
var cEE=_v()
_(oDE,cEE)
if(_oz(z,12,e,s,gg)){cEE.wxVkey=1
}
var fOE=_mz(z,'uni-popup',['bind:__l',13,'class',1,'data-ref',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var cPE=_mz(z,'ticketaddress',['addressAar',19,'bind:__l',1,'bindtap',2,'class',3,'data-event-opts',4,'vueId',5],[],e,s,gg)
_(fOE,cPE)
_(oDE,fOE)
var hQE=_mz(z,'pup-limit',['bind:__l',25,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(oDE,hQE)
var oRE=_mz(z,'verify-code-popup',['bind:__l',29,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(oDE,oRE)
cEE.wxXCkey=1
_(r,oDE)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx4_XC_8";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx4_XC_8();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_wallet/wallet/ticketEventCustom.wxml'] = [$gwx4_XC_8, './pages_wallet/wallet/ticketEventCustom.wxml'];else __wxAppCode__['pages_wallet/wallet/ticketEventCustom.wxml'] = $gwx4_XC_8( './pages_wallet/wallet/ticketEventCustom.wxml' );
	;__wxRoute = "pages_wallet/wallet/ticketEventCustom";__wxRouteBegin = true;__wxAppCurrentFile__="pages_wallet/wallet/ticketEventCustom.js";define("pages_wallet/wallet/ticketEventCustom.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_wallet/wallet/ticketEventCustom"],{"341b":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return d})),i.d(t,"a",(function(){return a}));var a={uniPopup:function(){return i.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(i.bind(null,"5b0a"))},ticketaddress:function(){return i.e("components/ticketaddress/ticketaddress").then(i.bind(null,"7da7"))},VerifyCodePopup:function(){return Promise.all([i.e("common/vendor"),i.e("components/VerifyCodePopup/VerifyCodePopup")]).then(i.bind(null,"6689"))}},n=function(){var e=this,t=(e.$createElement,e._self._c,e.$previewImageAddress(0==e.eleTicketIndex?"ticket_up_custom_disable.svg":"ticket_up_custom_enable.svg")),i=e.currentStatusImage?e.$previewImageAddress(e.currentStatusImage):null,a=e.$previewImageAddress(e.eleTicketIndex==e.ticketIds.length-1?"ticket_next_custom_disable.svg":"ticket_next_custom_enable.svg"),n=e.ticketIds.length,d=e._f("formatTime")(e.itemdata.showTime,"yyyy-mm-dd hh:mi"),r=e.electTicketTipsTitle?e.$previewImageAddress("tip_icon_red.svg"):null,o=0==e.orderData.invitationActivateStatus&&0!=e.navIndex&&e.displayDetailButton?e.$previewImageAddress("ticket_detail_custom_order.png"):null,s=e.$previewImageAddress("ticket_detail_custom_navi.png");e.$mp.data=Object.assign({},{$root:{m0:t,m1:i,m2:a,g0:n,f0:d,m3:r,m4:o,m5:s}})},d=[]},"3e34":function(e,t,i){},"899b":function(e,t,i){"use strict";i.r(t);var a=i("d99e"),n=i.n(a);for(var d in a)["default"].indexOf(d)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(d);t.default=n.a},"90ec":function(e,t,i){"use strict";i.r(t);var a=i("341b"),n=i("899b");for(var d in n)["default"].indexOf(d)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(d);i("a095");var r=i("828b"),o=Object(r.a)(n.default,a.b,a.c,!1,null,"5fcfe70b",null,!1,a.a,void 0);t.default=o.exports},a095:function(e,t,i){"use strict";var a=i("3e34");i.n(a).a},d99e:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i("b5c2"),n=(i("8e36"),i("d9e3")),d=i("e2af"),r=i("00a9"),o={data:function(){return{itemdata:{},qrCode:"",drawOutType:"",displayDetailButton:!1,orderData:{},addressAar:[{id:0,checked:!1,name:"张小小",phone:"19989898989",address:"北京市朝阳区朝阳门外大街"},{id:1,checked:!1,name:"张大大",phone:"18800000000",address:"北京市昌平区天通苑"}],orderDetailId:"",orderInfoId:"",status:0,distance:"",topbgurl:"",bottombgurl:"",ticketIds:[],buyerName:"",eleTicketIndex:0,printTicketTypeDesc:"",pageImgBg:"",checkedTimesFinish:!1,thirdOrderExtId:null,navIndex:-1,isIdcardticket:!1,electTicketTips:"",electTicketTipsTitle:"",seatAndPriceStr:"",openToGift:!1,isRangeTime:!1,intervalId:null}},onLoad:function(e){var t=this;console.log("wwww",e),this.getOpenerEventChannel().on("acceptDataFromOpenerPage",(function(e){console.log("eventChannel",e),t.ticketIds=JSON.parse(decodeURIComponent(e.idModleList)),t.buyerName=e.memberInfoName,t.navIndex=e.navIndex,console.log("itemdatadefaultttt",t.ticketIds),t.changeEletickeInfo()}))},onUnload:function(){this.intervalId&&clearInterval(this.intervalId)},computed:{isHorizontalCard:function(){var e=this.orderData.registerType;return 0==e||4==e||e>5},idcardImageClass:function(){return this.isHorizontalCard?"idcardPlaceHolder":"idcardPlaceHolder-v"},previewImageUrl:function(){return console.log("isIdcardticket",this.isIdcardticket),console.log("registerType",this.orderData.registerType),this.$previewImageAddress((0,r.getCoverImgFromId)(this.orderData.registerType))},isQrCodeGrouped:function(){return this.status>1||1==this.status&&this.checkedTimesFinish||0==this.status&&this.orderData.hadPrintTicket>0},statusImageMap:function(){return{1:this.checkedTimesFinish?"ticketyishiyong_0816.png":null,2:"ticketyiguoqi_0816.png",3:"ticketyizuofei_0816.png",printed:"yiquzhipiao.png"}},currentStatusImage:function(){return console.log("status===",this.status),this.status>0?this.statusImageMap[this.status]:this.orderData.hadPrintTicket>0?this.statusImageMap.printed:null}},methods:{back:function(){e.navigateBack({delta:1})},changeEletickeInfo:function(){this.ticketIds.length>this.eleTicketIndex&&(this.orderDetailId=this.ticketIds[this.eleTicketIndex].id,this.orderInfoId=this.ticketIds[this.eleTicketIndex].orderId,this.getEleDetail())},getEleDetail:function(){var t=this;(0,a.getETicketDetail)({orderDetailId:this.orderDetailId,orderInfoId:this.orderInfoId}).then((function(e){var i,a;console.log(e),t.itemdata=e.data.performanceDetailModel,t.qrCode=e.data.qrCode,t.drawOutType=e.data.drawOutType,t.displayDetailButton=e.data.displayDetailButton,t.thirdOrderExtId=e.data.thirdOrderExtId,7==t.drawOutType&&(t.intervalId||(t.intervalId=setInterval(t.getEleDetail,6e4))),e.data.orderDetailModelList&&(t.orderData=e.data.orderDetailModelList[0],t.status=t.orderData.status,"3"==t.drawOutType||"8"==t.drawOutType||0!=t.orderData.invitationActivateStatus&&1==t.itemdata.invitationDisplayType?t.isIdcardticket=!0:t.isIdcardticket=!1,t.seatAndPriceStr="",t.orderData.fareDes&&(t.seatAndPriceStr=t.orderData.fareDes+"  "),0!=t.orderData.invitationActivateStatus?t.seatAndPriceStr=t.seatAndPriceStr+t.orderData.seatSnapshot+"  ":t.orderData.seatSnapshot?t.seatAndPriceStr=t.seatAndPriceStr+t.orderData.seatSnapshot+"¥"+t.orderData.price/100+"  ":t.seatAndPriceStr=t.seatAndPriceStr+"¥"+t.orderData.price/100+"  "),t.itemdata&&(t.openToGift=t.itemdata.openToGift,t.openToGift&&(t.isRangeTime=(0,n.whetherCurrentRange)(t.itemdata.giftDateSt,t.itemdata.giftDateEt)),t.itemdata.latitude,t.itemdata.longitude,t.itemdata.elecActivityImg&&(t.topbgurl=t.itemdata.elecActivityImg),t.itemdata.elecBgImg&&(t.bottombgurl=t.itemdata.elecBgImg),t.electTicketTipsTitle=null===(i=t.itemdata.electTicketTipsTitle)||void 0===i?void 0:i.trim(),t.electTicketTips=null===(a=t.itemdata.electTicketTips)||void 0===a?void 0:a.trim(),t.pageImgBg=e.data.performanceDetailModel.elecBgImg,1==t.itemdata.allowCheckedTimes||t.itemdata.allowCheckedTimes>1&&t.itemdata.allowCheckedTimes==t.orderData.checkedTimes?t.checkedTimesFinish=!0:t.checkedTimesFinish=!1)})).catch((function(t){console.log(t),e.showToast({title:t.msg,icon:"none"})}))},getCodeDetail:function(){(0,a.getPickUpCodeDetail)({orderDetailId:this.orderDetailId,orderInfoId:this.orderInfoId}).then((function(e){console.log(e)})).catch((function(t){console.log(t),e.showToast({title:t.msg,icon:"none"})}))},showQpd:function(){this.$refs.popupqpaddress.open("bottom")},closeQPAddress:function(){this.$refs.popupqpaddress.close()},toMap:function(){var t=this.itemdata.latitude,i=this.itemdata.longitude;console.log("点击地图"),e.openLocation({latitude:Number(t),longitude:Number(i),address:this.itemdata.venueAddress})},arrowLeft:function(){0!=this.eleTicketIndex&&(this.eleTicketIndex=this.eleTicketIndex-1,this.changeEletickeInfo())},arrowRight:function(){this.eleTicketIndex!=this.ticketIds.length-1&&(this.eleTicketIndex=this.eleTicketIndex+1,this.changeEletickeInfo())},jumpOrderDetail:function(t){e.navigateTo({url:"/pages_order/mine/eventorderdetail?id="+t})},eleCardCode:function(){(0,d.getAccountRegistration)({}).then((function(t){if(console.log(t),t.data){var i=t.data;e.navigateTo({url:"/pages_mine/mine/purchaseradd?type=1&authorinfo=".concat(JSON.stringify(i))})}else e.navigateTo({url:"/pages_config/sysconfig/sysnamenotice?keynum=ctms.cms.common.conf.10021&type=1"})})).catch((function(e){console.log(e)}))},goTransfer:function(){e.navigateTo({url:"/pages_wallet/wallet/transferSend?ticketId="+this.orderDetailId+"&orderInfoId="+this.orderInfoId})}}};t.default=o}).call(this,i("df3c").default)},dd8c:function(e,t,i){"use strict";(function(e,t){var a=i("47a9");i("42bd"),i("861b"),a(i("3240"));var n=a(i("90ec"));e.__webpack_require_UNI_MP_PLUGIN__=i,t(n.default)}).call(this,i("3223").default,i("df3c").createPage)}},[["dd8c","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_wallet/wallet/ticketEventCustom.js'});require("pages_wallet/wallet/ticketEventCustom.js");$gwx4_XC_9=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx4_XC_9 || [];
function gz$gwx4_XC_9_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_XC_9_1)return __WXML_GLOBAL__.ops_cached.$gwx4_XC_9_1
__WXML_GLOBAL__.ops_cached.$gwx4_XC_9_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-74007614'])
Z([[2,'!='],[[7],[3,'platform']],[1,'TT']])
Z([3,'#F6F7F8'])
Z([3,'__l'])
Z([3,'__e'])
Z([1,false])
Z([3,'data-v-74007614'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z([1,true])
Z([[2,'?:'],[[2,'!='],[[7],[3,'platform']],[1,'ALI']],[1,'left'],[1,'']])
Z(z[8])
Z([3,'票夹'])
Z([3,'00191c78-1'])
Z([3,'page-main data-v-74007614'])
Z([[6],[[7],[3,'$root']],[3,'g0']])
Z(z[4])
Z([3,'page-main-scroll data-v-74007614'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'myfun']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'100'])
Z(z[8])
Z(z[8])
Z([3,'height:100%;'])
Z([3,'item data-v-74007614'])
Z([[2,'=='],[[7],[3,'navIndex']],[1,0]])
Z(z[3])
Z(z[4])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^goEticketDetail']],[[4],[[5],[[4],[[5],[1,'goEticketDetail']]]]]]]]])
Z([[7],[3,'items']])
Z([3,'00191c78-2'])
Z(z[3])
Z(z[6])
Z([3,'goTicketcodeDetail'])
Z(z[28])
Z([3,'00191c78-3'])
Z([[6],[[7],[3,'$root']],[3,'g1']])
Z([3,'loading data-v-74007614'])
Z([[2,'=='],[[7],[3,'loading']],[1,1]])
Z([[2,'=='],[[7],[3,'loading']],[1,2]])
Z([[2,'!'],[[6],[[7],[3,'$root']],[3,'g2']]])
Z(z[3])
Z([3,'data-v-74007614 vue-ref'])
Z([3,'confirm'])
Z([3,'00191c78-4'])
Z(z[3])
Z(z[41])
Z([3,'verifycode'])
Z([3,'00191c78-5'])
})(__WXML_GLOBAL__.ops_cached.$gwx4_XC_9_1);return __WXML_GLOBAL__.ops_cached.$gwx4_XC_9_1
}
__WXML_GLOBAL__.ops_set.$gwx4_XC_9=z;
__WXML_GLOBAL__.ops_init.$gwx4_XC_9=true;
var x=['./pages_wallet/wallet/ticketWallet.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx4_XC_9_1()
var oTE=_n('view')
_rz(z,oTE,'class',0,e,s,gg)
var lUE=_v()
_(oTE,lUE)
if(_oz(z,1,e,s,gg)){lUE.wxVkey=1
var aVE=_mz(z,'uni-nav-bar',['backgroundColor',2,'bind:__l',1,'bind:clickLeft',2,'border',3,'class',4,'data-event-opts',5,'fixed',6,'leftIcon',7,'statusBar',8,'title',9,'vueId',10],[],e,s,gg)
_(lUE,aVE)
}
var tWE=_n('view')
_rz(z,tWE,'class',13,e,s,gg)
var eXE=_v()
_(tWE,eXE)
if(_oz(z,14,e,s,gg)){eXE.wxVkey=1
var oZE=_mz(z,'scroll-view',['bindscrolltolower',15,'class',1,'data-event-opts',2,'lowerThreshold',3,'scrollWithAnimation',4,'scrollY',5,'style',6],[],e,s,gg)
var o2E=_n('view')
_rz(z,o2E,'class',22,e,s,gg)
var f3E=_v()
_(o2E,f3E)
if(_oz(z,23,e,s,gg)){f3E.wxVkey=1
var c4E=_mz(z,'walleteleitem',['bind:__l',24,'bind:goEticketDetail',1,'class',2,'data-event-opts',3,'listevent',4,'vueId',5],[],e,s,gg)
_(f3E,c4E)
}
else{f3E.wxVkey=2
var h5E=_mz(z,'walletcodeitem',['bind:__l',30,'class',1,'goTicketcodeDetail',2,'listevent',3,'vueId',4],[],e,s,gg)
_(f3E,h5E)
}
f3E.wxXCkey=1
f3E.wxXCkey=3
f3E.wxXCkey=3
_(oZE,o2E)
var x1E=_v()
_(oZE,x1E)
if(_oz(z,35,e,s,gg)){x1E.wxVkey=1
var o6E=_n('view')
_rz(z,o6E,'class',36,e,s,gg)
var c7E=_v()
_(o6E,c7E)
if(_oz(z,37,e,s,gg)){c7E.wxVkey=1
}
var o8E=_v()
_(o6E,o8E)
if(_oz(z,38,e,s,gg)){o8E.wxVkey=1
}
c7E.wxXCkey=1
o8E.wxXCkey=1
_(x1E,o6E)
}
x1E.wxXCkey=1
_(eXE,oZE)
}
var bYE=_v()
_(tWE,bYE)
if(_oz(z,39,e,s,gg)){bYE.wxVkey=1
}
eXE.wxXCkey=1
eXE.wxXCkey=3
bYE.wxXCkey=1
_(oTE,tWE)
var l9E=_mz(z,'pup-limit',['bind:__l',40,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(oTE,l9E)
var a0E=_mz(z,'verify-code-popup',['bind:__l',44,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(oTE,a0E)
lUE.wxXCkey=1
lUE.wxXCkey=3
_(r,oTE)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx4_XC_9";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx4_XC_9();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages_wallet/wallet/ticketWallet.wxml'] = [$gwx4_XC_9, './pages_wallet/wallet/ticketWallet.wxml'];else __wxAppCode__['pages_wallet/wallet/ticketWallet.wxml'] = $gwx4_XC_9( './pages_wallet/wallet/ticketWallet.wxml' );
	;__wxRoute = "pages_wallet/wallet/ticketWallet";__wxRouteBegin = true;__wxAppCurrentFile__="pages_wallet/wallet/ticketWallet.js";define("pages_wallet/wallet/ticketWallet.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
(global.webpackJsonp=global.webpackJsonp||[]).push([["pages_wallet/wallet/ticketWallet"],{"19ca":function(e,t,n){},"73c8":function(e,t,n){"use strict";n.r(t);var i=n("9078"),o=n("e944");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("fdac"),n("b190");var c=n("828b"),l=Object(c.a)(o.default,i.b,i.c,!1,null,"74007614",null,!1,i.a,void 0);t.default=l.exports},"7b9b":function(e,t,n){},9078:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uniNavBar:function(){return n.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"f9b6"))},walleteleitem:function(){return Promise.all([n.e("common/vendor"),n.e("components/walleteleitem/walleteleitem")]).then(n.bind(null,"9667"))},walletcodeitem:function(){return n.e("components/walletcodeitem/walletcodeitem").then(n.bind(null,"3c92"))},VerifyCodePopup:function(){return Promise.all([n.e("common/vendor"),n.e("components/VerifyCodePopup/VerifyCodePopup")]).then(n.bind(null,"6689"))}},o=function(){this.$createElement;var e=(this._self._c,this.items.length),t=e?this.items.length:null,n=this.items.length,i=n?null:this.$previewImageAddress("nodata.png");this.$mp.data=Object.assign({},{$root:{g0:e,g1:t,g2:n,m0:i}})},a=[]},b190:function(e,t,n){"use strict";var i=n("7b9b");n.n(i).a},c03f:function(e,t,n){"use strict";(function(e){var i=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("af34")),a=n("b5c2"),c={data:function(){return{navIndex:0,navAar:[{id:1,classname:"电子票",count:0,select:"https://wltyoss.oss-cn-beijing.aliyuncs.com/app/icon/eleticket_select.png",unselect:"https://wltyoss.oss-cn-beijing.aliyuncs.com/app/icon/eleticket_unselect.png"},{id:2,classname:"取票码",count:0,select:"https://wltyoss.oss-cn-beijing.aliyuncs.com/app/icon/ticketcode_select.png",unselect:"https://wltyoss.oss-cn-beijing.aliyuncs.com/app/icon/ticketcode_unselect.png"}],pageNum:1,loading:0,items:[],eticketCount:0,qrCount:0,platform:"WX"}},onLoad:function(e){this.navIndex=e.type,console.log(e.type)},onShow:function(){this.pageNum=1,this.loading=0,0==this.navIndex&&this.getTicketList()},onPullDownRefresh:function(){this.pageNum=1,this.getTicketList()},onReachBottom:function(){console.log("到底了"),2!=this.loading&&(this.pageNum++,this.loading=1,this.getTicketList())},methods:{myfun:function(){console.log("到底了myfun"),2!=this.loading&&(this.pageNum++,this.loading=1,this.getTicketList())},clickNav:function(e,t){console.log(e),console.log(t),this.navIndex=e,this.pageNum=1,this.loading=0,this.items=[],0==e&&this.getTicketList()},getTicketList:function(){var e=this;(0,a.eTicketList)({pageNum:this.pageNum,pageSize:10}).then((function(t){console.log(t),1==e.pageNum&&(e.items=[]),t.data&&(null==t.data.rows||0==t.data.rows.length?e.loading=2:(e.items=[].concat((0,o.default)(e.items),(0,o.default)(t.data.rows)),e.loading=0,e.pageNum>1&&t.data.rows.length<10&&(e.loading=2)))})).catch((function(e){console.log(e)}))},goEticketDetail:function(t){console.log(t),console.log("cccc",t.orderElectronicWalletDetailResponseModelList);var n=JSON.stringify(t.orderElectronicWalletDetailResponseModelList);2==t.businessType?e.navigateTo({url:"/pages_wallet/wallet/ticketActivity",success:function(e){e.eventChannel.emit("acceptDataFromOpenerPage",{idModleList:encodeURIComponent(n)})}}):t.performanceDetailModel.elecBgImg?e.navigateTo({url:"/pages_wallet/wallet/ticketEventCustom",success:function(e){e.eventChannel.emit("acceptDataFromOpenerPage",{idModleList:encodeURIComponent(n),memberInfoName:t.memberInfoName})}}):e.navigateTo({url:"/pages_wallet/wallet/ticketEvent",success:function(e){e.eventChannel.emit("acceptDataFromOpenerPage",{idModleList:encodeURIComponent(n),memberInfoName:t.memberInfoName})}})},goTicketcodeDetail:function(t){e.navigateTo({url:"/pages_order/mine/ticketwalletdetail?navindex=".concat(this.navIndex,"&orderDetailId=")+orderDetailId+"&orderInfoId="+orderInfoId})},back:function(){e.setStorageSync("tabPath","/pages/mine/mine"),e.switchTab({url:"/pages/mine/mine"})}}};t.default=c}).call(this,n("df3c").default)},e682:function(e,t,n){"use strict";(function(e,t){var i=n("47a9");n("42bd"),n("861b"),i(n("3240"));var o=i(n("73c8"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(o.default)}).call(this,n("3223").default,n("df3c").createPage)},e944:function(e,t,n){"use strict";n.r(t);var i=n("c03f"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t.default=o.a},fdac:function(e,t,n){"use strict";var i=n("19ca");n.n(i).a}},[["e682","common/runtime","common/vendor"]]]);
},{isPage:true,isComponent:true,currentFile:'pages_wallet/wallet/ticketWallet.js'});require("pages_wallet/wallet/ticketWallet.js");