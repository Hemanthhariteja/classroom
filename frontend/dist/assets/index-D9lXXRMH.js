const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LiveClass-BkxWz05n.js","assets/webRTCClient-V0-wP40F.js","assets/offline-D748ZU6k.js","assets/OfflineDownload-tnSUmRrU.js","assets/Discussion-G00R0kCe.js"])))=>i.map(i=>d[i]);
function J0(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ex(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var km={exports:{}},Il={},Om={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),tx=Symbol.for("react.portal"),nx=Symbol.for("react.fragment"),ix=Symbol.for("react.strict_mode"),rx=Symbol.for("react.profiler"),sx=Symbol.for("react.provider"),ax=Symbol.for("react.context"),ox=Symbol.for("react.forward_ref"),lx=Symbol.for("react.suspense"),cx=Symbol.for("react.memo"),ux=Symbol.for("react.lazy"),Hf=Symbol.iterator;function dx(t){return t===null||typeof t!="object"?null:(t=Hf&&t[Hf]||t["@@iterator"],typeof t=="function"?t:null)}var zm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bm=Object.assign,Hm={};function Us(t,e,n){this.props=t,this.context=e,this.refs=Hm,this.updater=n||zm}Us.prototype.isReactComponent={};Us.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Us.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gm(){}Gm.prototype=Us.prototype;function Md(t,e,n){this.props=t,this.context=e,this.refs=Hm,this.updater=n||zm}var Ed=Md.prototype=new Gm;Ed.constructor=Md;Bm(Ed,Us.prototype);Ed.isPureReactComponent=!0;var Gf=Array.isArray,Vm=Object.prototype.hasOwnProperty,wd={current:null},jm={key:!0,ref:!0,__self:!0,__source:!0};function Wm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Vm.call(e,i)&&!jm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Va,type:t,key:s,ref:a,props:r,_owner:wd.current}}function fx(t,e){return{$$typeof:Va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Td(t){return typeof t=="object"&&t!==null&&t.$$typeof===Va}function hx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vf=/\/+/g;function oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hx(""+t.key):e.toString(36)}function Go(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Va:case tx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+oc(a,0):i,Gf(r)?(n="",t!=null&&(n=t.replace(Vf,"$&/")+"/"),Go(r,e,n,"",function(c){return c})):r!=null&&(Td(r)&&(r=fx(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Vf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Gf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+oc(s,o);a+=Go(s,e,n,l,r)}else if(l=dx(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+oc(s,o++),a+=Go(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function no(t,e,n){if(t==null)return t;var i=[],r=0;return Go(t,i,"","",function(s){return e.call(n,s,r++)}),i}function px(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Vo={transition:null},mx={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Vo,ReactCurrentOwner:wd};function Xm(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:no,forEach:function(t,e,n){no(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return no(t,function(){e++}),e},toArray:function(t){return no(t,function(e){return e})||[]},only:function(t){if(!Td(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Us;Ve.Fragment=nx;Ve.Profiler=rx;Ve.PureComponent=Md;Ve.StrictMode=ix;Ve.Suspense=lx;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mx;Ve.act=Xm;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Bm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=wd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Vm.call(e,l)&&!jm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Va,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:ax,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sx,_context:t},t.Consumer=t};Ve.createElement=Wm;Ve.createFactory=function(t){var e=Wm.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:ox,render:t}};Ve.isValidElement=Td;Ve.lazy=function(t){return{$$typeof:ux,_payload:{_status:-1,_result:t},_init:px}};Ve.memo=function(t,e){return{$$typeof:cx,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=Vo.transition;Vo.transition={};try{t()}finally{Vo.transition=e}};Ve.unstable_act=Xm;Ve.useCallback=function(t,e){return Zt.current.useCallback(t,e)};Ve.useContext=function(t){return Zt.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return Zt.current.useEffect(t,e)};Ve.useId=function(){return Zt.current.useId()};Ve.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Zt.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};Ve.useRef=function(t){return Zt.current.useRef(t)};Ve.useState=function(t){return Zt.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Zt.current.useTransition()};Ve.version="18.3.1";Om.exports=Ve;var K=Om.exports;const Ad=ex(K),gx=J0({__proto__:null,default:Ad},[K]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vx=K,xx=Symbol.for("react.element"),_x=Symbol.for("react.fragment"),yx=Object.prototype.hasOwnProperty,Sx=vx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mx={key:!0,ref:!0,__self:!0,__source:!0};function qm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)yx.call(e,i)&&!Mx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:xx,type:t,key:s,ref:a,props:r,_owner:Sx.current}}Il.Fragment=_x;Il.jsx=qm;Il.jsxs=qm;km.exports=Il;var p=km.exports,mu={},$m={exports:{}},xn={},Ym={exports:{}},Km={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,k){var j=U.length;U.push(k);e:for(;0<j;){var Y=j-1>>>1,ne=U[Y];if(0<r(ne,k))U[Y]=k,U[j]=ne,j=Y;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var k=U[0],j=U.pop();if(j!==k){U[0]=j;e:for(var Y=0,ne=U.length,X=ne>>>1;Y<X;){var $=2*(Y+1)-1,se=U[$],he=$+1,ge=U[he];if(0>r(se,j))he<ne&&0>r(ge,se)?(U[Y]=ge,U[he]=j,Y=he):(U[Y]=se,U[$]=j,Y=$);else if(he<ne&&0>r(ge,j))U[Y]=ge,U[he]=j,Y=he;else break e}}return k}function r(U,k){var j=U.sortIndex-k.sortIndex;return j!==0?j:U.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,h=3,m=!1,_=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=U)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function E(U){if(y=!1,v(U),!_)if(n(l)!==null)_=!0,q(P);else{var k=n(c);k!==null&&Z(E,k.startTime-U)}}function P(U,k){_=!1,y&&(y=!1,u(D),D=-1),m=!0;var j=h;try{for(v(k),f=n(l);f!==null&&(!(f.expirationTime>k)||U&&!T());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,h=f.priorityLevel;var ne=Y(f.expirationTime<=k);k=t.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(l)&&i(l),v(k)}else i(l);f=n(l)}if(f!==null)var X=!0;else{var $=n(c);$!==null&&Z(E,$.startTime-k),X=!1}return X}finally{f=null,h=j,m=!1}}var R=!1,b=null,D=-1,M=5,S=-1;function T(){return!(t.unstable_now()-S<M)}function z(){if(b!==null){var U=t.unstable_now();S=U;var k=!0;try{k=b(!0,U)}finally{k?Q():(R=!1,b=null)}}else R=!1}var Q;if(typeof x=="function")Q=function(){x(z)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,O=L.port2;L.port1.onmessage=z,Q=function(){O.postMessage(null)}}else Q=function(){g(z,0)};function q(U){b=U,R||(R=!0,Q())}function Z(U,k){D=g(function(){U(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,q(P))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var j=h;h=k;try{return U()}finally{h=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,k){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var j=h;h=U;try{return k()}finally{h=j}},t.unstable_scheduleCallback=function(U,k,j){var Y=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Y+j:Y):j=Y,U){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=j+ne,U={id:d++,callback:k,priorityLevel:U,startTime:j,expirationTime:ne,sortIndex:-1},j>Y?(U.sortIndex=j,e(c,U),n(l)===null&&U===n(c)&&(y?(u(D),D=-1):y=!0,Z(E,j-Y))):(U.sortIndex=ne,e(l,U),_||m||(_=!0,q(P))),U},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(U){var k=h;return function(){var j=h;h=k;try{return U.apply(this,arguments)}finally{h=j}}}})(Km);Ym.exports=Km;var Ex=Ym.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wx=K,vn=Ex;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zm=new Set,Ma={};function Nr(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(Ma[t]=e,t=0;t<e.length;t++)Zm.add(e[t])}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gu=Object.prototype.hasOwnProperty,Tx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jf={},Wf={};function Ax(t){return gu.call(Wf,t)?!0:gu.call(jf,t)?!1:Tx.test(t)?Wf[t]=!0:(jf[t]=!0,!1)}function bx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Cx(t,e,n,i){if(e===null||typeof e>"u"||bx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var bd=/[\-:]([a-z])/g;function Cd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bd,Cd);Ft[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bd,Cd);Ft[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bd,Cd);Ft[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rd(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Cx(e,n,r,i)&&(n=null),i||r===null?Ax(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var yi=wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),vu=Symbol.for("react.profiler"),Qm=Symbol.for("react.provider"),Jm=Symbol.for("react.context"),Ld=Symbol.for("react.forward_ref"),xu=Symbol.for("react.suspense"),_u=Symbol.for("react.suspense_list"),Nd=Symbol.for("react.memo"),Ci=Symbol.for("react.lazy"),eg=Symbol.for("react.offscreen"),Xf=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=Xf&&t[Xf]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,lc;function ra(t){if(lc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lc=e&&e[1]||""}return`
`+lc+t}var cc=!1;function uc(t,e){if(!t||cc)return"";cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{cc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ra(t):""}function Rx(t){switch(t.tag){case 5:return ra(t.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return t=uc(t.type,!1),t;case 11:return t=uc(t.type.render,!1),t;case 1:return t=uc(t.type,!0),t;default:return""}}function yu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case vu:return"Profiler";case Pd:return"StrictMode";case xu:return"Suspense";case _u:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jm:return(t.displayName||"Context")+".Consumer";case Qm:return(t._context.displayName||"Context")+".Provider";case Ld:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nd:return e=t.displayName||null,e!==null?e:yu(t.type)||"Memo";case Ci:e=t._payload,t=t._init;try{return yu(t(e))}catch{}}return null}function Px(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yu(e);case 8:return e===Pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Lx(t){var e=tg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ro(t){t._valueTracker||(t._valueTracker=Lx(t))}function ng(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=tg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Su(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Yi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ig(t,e){e=e.checked,e!=null&&Rd(t,"checked",e,!1)}function Mu(t,e){ig(t,e);var n=Yi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Eu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Eu(t,e.type,Yi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $f(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Eu(t,e,n){(e!=="number"||tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var sa=Array.isArray;function ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Yi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function wu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(sa(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yi(n)}}function rg(t,e){var n=Yi(e.value),i=Yi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Kf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var so,ag=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=so.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nx=["Webkit","ms","Moz","O"];Object.keys(ua).forEach(function(t){Nx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ua[e]=ua[t]})});function og(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ua.hasOwnProperty(t)&&ua[t]?(""+e).trim():e+"px"}function lg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=og(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Dx=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Au(t,e){if(e){if(Dx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cu=null;function Dd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ru=null,ms=null,gs=null;function Zf(t){if(t=Xa(t)){if(typeof Ru!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Bl(e),Ru(t.stateNode,t.type,e))}}function cg(t){ms?gs?gs.push(t):gs=[t]:ms=t}function ug(){if(ms){var t=ms,e=gs;if(gs=ms=null,Zf(t),e)for(t=0;t<e.length;t++)Zf(e[t])}}function dg(t,e){return t(e)}function fg(){}var dc=!1;function hg(t,e,n){if(dc)return t(e,n);dc=!0;try{return dg(t,e,n)}finally{dc=!1,(ms!==null||gs!==null)&&(fg(),ug())}}function wa(t,e){var n=t.stateNode;if(n===null)return null;var i=Bl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Pu=!1;if(mi)try{var js={};Object.defineProperty(js,"passive",{get:function(){Pu=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{Pu=!1}function Ux(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var da=!1,nl=null,il=!1,Lu=null,Ix={onError:function(t){da=!0,nl=t}};function Fx(t,e,n,i,r,s,a,o,l){da=!1,nl=null,Ux.apply(Ix,arguments)}function kx(t,e,n,i,r,s,a,o,l){if(Fx.apply(this,arguments),da){if(da){var c=nl;da=!1,nl=null}else throw Error(te(198));il||(il=!0,Lu=c)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function pg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qf(t){if(Dr(t)!==t)throw Error(te(188))}function Ox(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Qf(r),t;if(s===i)return Qf(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function mg(t){return t=Ox(t),t!==null?gg(t):null}function gg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gg(t);if(e!==null)return e;t=t.sibling}return null}var vg=vn.unstable_scheduleCallback,Jf=vn.unstable_cancelCallback,zx=vn.unstable_shouldYield,Bx=vn.unstable_requestPaint,xt=vn.unstable_now,Hx=vn.unstable_getCurrentPriorityLevel,Ud=vn.unstable_ImmediatePriority,xg=vn.unstable_UserBlockingPriority,rl=vn.unstable_NormalPriority,Gx=vn.unstable_LowPriority,_g=vn.unstable_IdlePriority,Fl=null,$n=null;function Vx(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Fl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:Xx,jx=Math.log,Wx=Math.LN2;function Xx(t){return t>>>=0,t===0?32:31-(jx(t)/Wx|0)|0}var ao=64,oo=4194304;function aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=aa(o):(s&=a,s!==0&&(i=aa(s)))}else a=n&~r,a!==0?i=aa(a):s!==0&&(i=aa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function qx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $x(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Bn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=qx(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Nu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yg(){var t=ao;return ao<<=1,!(ao&4194240)&&(ao=64),t}function fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ja(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function Yx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Id(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ke=0;function Sg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Mg,Fd,Eg,wg,Tg,Du=!1,lo=[],ki=null,Oi=null,zi=null,Ta=new Map,Aa=new Map,Pi=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eh(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":zi=null;break;case"pointerover":case"pointerout":Ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(e.pointerId)}}function Ws(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xa(e),e!==null&&Fd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Zx(t,e,n,i,r){switch(e){case"focusin":return ki=Ws(ki,t,e,n,i,r),!0;case"dragenter":return Oi=Ws(Oi,t,e,n,i,r),!0;case"mouseover":return zi=Ws(zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ta.set(s,Ws(Ta.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Aa.set(s,Ws(Aa.get(s)||null,t,e,n,i,r)),!0}return!1}function Ag(t){var e=gr(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=pg(n),e!==null){t.blockedOn=e,Tg(t.priority,function(){Eg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Cu=i,n.target.dispatchEvent(i),Cu=null}else return e=Xa(n),e!==null&&Fd(e),t.blockedOn=n,!1;e.shift()}return!0}function th(t,e,n){jo(t)&&n.delete(e)}function Qx(){Du=!1,ki!==null&&jo(ki)&&(ki=null),Oi!==null&&jo(Oi)&&(Oi=null),zi!==null&&jo(zi)&&(zi=null),Ta.forEach(th),Aa.forEach(th)}function Xs(t,e){t.blockedOn===e&&(t.blockedOn=null,Du||(Du=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,Qx)))}function ba(t){function e(r){return Xs(r,t)}if(0<lo.length){Xs(lo[0],t);for(var n=1;n<lo.length;n++){var i=lo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ki!==null&&Xs(ki,t),Oi!==null&&Xs(Oi,t),zi!==null&&Xs(zi,t),Ta.forEach(e),Aa.forEach(e),n=0;n<Pi.length;n++)i=Pi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pi.length&&(n=Pi[0],n.blockedOn===null);)Ag(n),n.blockedOn===null&&Pi.shift()}var vs=yi.ReactCurrentBatchConfig,al=!0;function Jx(t,e,n,i){var r=Ke,s=vs.transition;vs.transition=null;try{Ke=1,kd(t,e,n,i)}finally{Ke=r,vs.transition=s}}function e_(t,e,n,i){var r=Ke,s=vs.transition;vs.transition=null;try{Ke=4,kd(t,e,n,i)}finally{Ke=r,vs.transition=s}}function kd(t,e,n,i){if(al){var r=Uu(t,e,n,i);if(r===null)Mc(t,e,i,ol,n),eh(t,i);else if(Zx(r,t,e,n,i))i.stopPropagation();else if(eh(t,i),e&4&&-1<Kx.indexOf(t)){for(;r!==null;){var s=Xa(r);if(s!==null&&Mg(s),s=Uu(t,e,n,i),s===null&&Mc(t,e,i,ol,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Mc(t,e,i,null,n)}}var ol=null;function Uu(t,e,n,i){if(ol=null,t=Dd(i),t=gr(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=pg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ol=t,null}function bg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hx()){case Ud:return 1;case xg:return 4;case rl:case Gx:return 16;case _g:return 536870912;default:return 16}default:return 16}}var Ni=null,Od=null,Wo=null;function Cg(){if(Wo)return Wo;var t,e=Od,n=e.length,i,r="value"in Ni?Ni.value:Ni.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Wo=r.slice(t,1<i?1-i:void 0)}function Xo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function co(){return!0}function nh(){return!1}function _n(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?co:nh,this.isPropagationStopped=nh,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),e}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zd=_n(Is),Wa=ht({},Is,{view:0,detail:0}),t_=_n(Wa),hc,pc,qs,kl=ht({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(hc=t.screenX-qs.screenX,pc=t.screenY-qs.screenY):pc=hc=0,qs=t),hc)},movementY:function(t){return"movementY"in t?t.movementY:pc}}),ih=_n(kl),n_=ht({},kl,{dataTransfer:0}),i_=_n(n_),r_=ht({},Wa,{relatedTarget:0}),mc=_n(r_),s_=ht({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),a_=_n(s_),o_=ht({},Is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),l_=_n(o_),c_=ht({},Is,{data:0}),rh=_n(c_),u_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=f_[t])?!!e[t]:!1}function Bd(){return h_}var p_=ht({},Wa,{key:function(t){if(t.key){var e=u_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?d_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bd,charCode:function(t){return t.type==="keypress"?Xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),m_=_n(p_),g_=ht({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sh=_n(g_),v_=ht({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bd}),x_=_n(v_),__=ht({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),y_=_n(__),S_=ht({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),M_=_n(S_),E_=[9,13,27,32],Hd=mi&&"CompositionEvent"in window,fa=null;mi&&"documentMode"in document&&(fa=document.documentMode);var w_=mi&&"TextEvent"in window&&!fa,Rg=mi&&(!Hd||fa&&8<fa&&11>=fa),ah=" ",oh=!1;function Pg(t,e){switch(t){case"keyup":return E_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function T_(t,e){switch(t){case"compositionend":return Lg(e);case"keypress":return e.which!==32?null:(oh=!0,ah);case"textInput":return t=e.data,t===ah&&oh?null:t;default:return null}}function A_(t,e){if(ns)return t==="compositionend"||!Hd&&Pg(t,e)?(t=Cg(),Wo=Od=Ni=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rg&&e.locale!=="ko"?null:e.data;default:return null}}var b_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!b_[t.type]:e==="textarea"}function Ng(t,e,n,i){cg(i),e=ll(e,"onChange"),0<e.length&&(n=new zd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ha=null,Ca=null;function C_(t){Vg(t,0)}function Ol(t){var e=ss(t);if(ng(e))return t}function R_(t,e){if(t==="change")return e}var Dg=!1;if(mi){var gc;if(mi){var vc="oninput"in document;if(!vc){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),vc=typeof ch.oninput=="function"}gc=vc}else gc=!1;Dg=gc&&(!document.documentMode||9<document.documentMode)}function uh(){ha&&(ha.detachEvent("onpropertychange",Ug),Ca=ha=null)}function Ug(t){if(t.propertyName==="value"&&Ol(Ca)){var e=[];Ng(e,Ca,t,Dd(t)),hg(C_,e)}}function P_(t,e,n){t==="focusin"?(uh(),ha=e,Ca=n,ha.attachEvent("onpropertychange",Ug)):t==="focusout"&&uh()}function L_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ol(Ca)}function N_(t,e){if(t==="click")return Ol(e)}function D_(t,e){if(t==="input"||t==="change")return Ol(e)}function U_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:U_;function Ra(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!gu.call(e,r)||!Gn(t[r],e[r]))return!1}return!0}function dh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fh(t,e){var n=dh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dh(n)}}function Ig(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ig(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fg(){for(var t=window,e=tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tl(t.document)}return e}function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function I_(t){var e=Fg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ig(n.ownerDocument.documentElement,n)){if(i!==null&&Gd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=fh(n,s);var a=fh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var F_=mi&&"documentMode"in document&&11>=document.documentMode,is=null,Iu=null,pa=null,Fu=!1;function hh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fu||is==null||is!==tl(i)||(i=is,"selectionStart"in i&&Gd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),pa&&Ra(pa,i)||(pa=i,i=ll(Iu,"onSelect"),0<i.length&&(e=new zd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=is)))}function uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},xc={},kg={};mi&&(kg=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function zl(t){if(xc[t])return xc[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kg)return xc[t]=e[n];return t}var Og=zl("animationend"),zg=zl("animationiteration"),Bg=zl("animationstart"),Hg=zl("transitionend"),Gg=new Map,ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,e){Gg.set(t,e),Nr(e,[t])}for(var _c=0;_c<ph.length;_c++){var yc=ph[_c],k_=yc.toLowerCase(),O_=yc[0].toUpperCase()+yc.slice(1);Qi(k_,"on"+O_)}Qi(Og,"onAnimationEnd");Qi(zg,"onAnimationIteration");Qi(Bg,"onAnimationStart");Qi("dblclick","onDoubleClick");Qi("focusin","onFocus");Qi("focusout","onBlur");Qi(Hg,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z_=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function mh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,kx(i,e,void 0,t),t.currentTarget=null}function Vg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;mh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;mh(r,o,c),s=l}}}if(il)throw t=Lu,il=!1,Lu=null,t}function it(t,e){var n=e[Hu];n===void 0&&(n=e[Hu]=new Set);var i=t+"__bubble";n.has(i)||(jg(e,t,2,!1),n.add(i))}function Sc(t,e,n){var i=0;e&&(i|=4),jg(n,t,i,e)}var fo="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[fo]){t[fo]=!0,Zm.forEach(function(n){n!=="selectionchange"&&(z_.has(n)||Sc(n,!1,t),Sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fo]||(e[fo]=!0,Sc("selectionchange",!1,e))}}function jg(t,e,n,i){switch(bg(e)){case 1:var r=Jx;break;case 4:r=e_;break;default:r=kd}n=r.bind(null,e,n,t),r=void 0,!Pu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Mc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=gr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}hg(function(){var c=s,d=Dd(n),f=[];e:{var h=Gg.get(t);if(h!==void 0){var m=zd,_=t;switch(t){case"keypress":if(Xo(n)===0)break e;case"keydown":case"keyup":m=m_;break;case"focusin":_="focus",m=mc;break;case"focusout":_="blur",m=mc;break;case"beforeblur":case"afterblur":m=mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=i_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=x_;break;case Og:case zg:case Bg:m=a_;break;case Hg:m=y_;break;case"scroll":m=t_;break;case"wheel":m=M_;break;case"copy":case"cut":case"paste":m=l_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=sh}var y=(e&4)!==0,g=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var x=c,v;x!==null;){v=x;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,u!==null&&(E=wa(x,u),E!=null&&y.push(La(x,E,v)))),g)break;x=x.return}0<y.length&&(h=new m(h,_,null,n,d),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Cu&&(_=n.relatedTarget||n.fromElement)&&(gr(_)||_[gi]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?gr(_):null,_!==null&&(g=Dr(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(y=ih,E="onMouseLeave",u="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=sh,E="onPointerLeave",u="onPointerEnter",x="pointer"),g=m==null?h:ss(m),v=_==null?h:ss(_),h=new y(E,x+"leave",m,n,d),h.target=g,h.relatedTarget=v,E=null,gr(d)===c&&(y=new y(u,x+"enter",_,n,d),y.target=v,y.relatedTarget=g,E=y),g=E,m&&_)t:{for(y=m,u=_,x=0,v=y;v;v=Ir(v))x++;for(v=0,E=u;E;E=Ir(E))v++;for(;0<x-v;)y=Ir(y),x--;for(;0<v-x;)u=Ir(u),v--;for(;x--;){if(y===u||u!==null&&y===u.alternate)break t;y=Ir(y),u=Ir(u)}y=null}else y=null;m!==null&&gh(f,h,m,y,!1),_!==null&&g!==null&&gh(f,g,_,y,!0)}}e:{if(h=c?ss(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var P=R_;else if(lh(h))if(Dg)P=D_;else{P=L_;var R=P_}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=N_);if(P&&(P=P(t,c))){Ng(f,P,n,d);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Eu(h,"number",h.value)}switch(R=c?ss(c):window,t){case"focusin":(lh(R)||R.contentEditable==="true")&&(is=R,Iu=c,pa=null);break;case"focusout":pa=Iu=is=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,hh(f,n,d);break;case"selectionchange":if(F_)break;case"keydown":case"keyup":hh(f,n,d)}var b;if(Hd)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else ns?Pg(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Rg&&n.locale!=="ko"&&(ns||D!=="onCompositionStart"?D==="onCompositionEnd"&&ns&&(b=Cg()):(Ni=d,Od="value"in Ni?Ni.value:Ni.textContent,ns=!0)),R=ll(c,D),0<R.length&&(D=new rh(D,t,null,n,d),f.push({event:D,listeners:R}),b?D.data=b:(b=Lg(n),b!==null&&(D.data=b)))),(b=w_?T_(t,n):A_(t,n))&&(c=ll(c,"onBeforeInput"),0<c.length&&(d=new rh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=b))}Vg(f,e)})}function La(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ll(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=wa(t,n),s!=null&&i.unshift(La(t,s,r)),s=wa(t,e),s!=null&&i.push(La(t,s,r))),t=t.return}return i}function Ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=wa(n,s),l!=null&&a.unshift(La(n,l,o))):r||(l=wa(n,s),l!=null&&a.push(La(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var B_=/\r\n?/g,H_=/\u0000|\uFFFD/g;function vh(t){return(typeof t=="string"?t:""+t).replace(B_,`
`).replace(H_,"")}function ho(t,e,n){if(e=vh(e),vh(t)!==e&&n)throw Error(te(425))}function cl(){}var ku=null,Ou=null;function zu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bu=typeof setTimeout=="function"?setTimeout:void 0,G_=typeof clearTimeout=="function"?clearTimeout:void 0,xh=typeof Promise=="function"?Promise:void 0,V_=typeof queueMicrotask=="function"?queueMicrotask:typeof xh<"u"?function(t){return xh.resolve(null).then(t).catch(j_)}:Bu;function j_(t){setTimeout(function(){throw t})}function Ec(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ba(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ba(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _h(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),qn="__reactFiber$"+Fs,Na="__reactProps$"+Fs,gi="__reactContainer$"+Fs,Hu="__reactEvents$"+Fs,W_="__reactListeners$"+Fs,X_="__reactHandles$"+Fs;function gr(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gi]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_h(t);t!==null;){if(n=t[qn])return n;t=_h(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[qn]||t[gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Bl(t){return t[Na]||null}var Gu=[],as=-1;function Ji(t){return{current:t}}function st(t){0>as||(t.current=Gu[as],Gu[as]=null,as--)}function nt(t,e){as++,Gu[as]=t.current,t.current=e}var Ki={},Vt=Ji(Ki),rn=Ji(!1),Tr=Ki;function ws(t,e){var n=t.type.contextTypes;if(!n)return Ki;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function ul(){st(rn),st(Vt)}function yh(t,e,n){if(Vt.current!==Ki)throw Error(te(168));nt(Vt,e),nt(rn,n)}function Wg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Px(t)||"Unknown",r));return ht({},n,i)}function dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Tr=Vt.current,nt(Vt,t),nt(rn,rn.current),!0}function Sh(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=Wg(t,e,Tr),i.__reactInternalMemoizedMergedChildContext=t,st(rn),st(Vt),nt(Vt,t)):st(rn),nt(rn,n)}var oi=null,Hl=!1,wc=!1;function Xg(t){oi===null?oi=[t]:oi.push(t)}function q_(t){Hl=!0,Xg(t)}function er(){if(!wc&&oi!==null){wc=!0;var t=0,e=Ke;try{var n=oi;for(Ke=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,Hl=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),vg(Ud,er),r}finally{Ke=e,wc=!1}}return null}var os=[],ls=0,fl=null,hl=0,Mn=[],En=0,Ar=null,ci=1,ui="";function ur(t,e){os[ls++]=hl,os[ls++]=fl,fl=t,hl=e}function qg(t,e,n){Mn[En++]=ci,Mn[En++]=ui,Mn[En++]=Ar,Ar=t;var i=ci;t=ui;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ci=1<<32-Bn(e)+r|n<<r|i,ui=s+t}else ci=1<<s|n<<r|i,ui=t}function Vd(t){t.return!==null&&(ur(t,1),qg(t,1,0))}function jd(t){for(;t===fl;)fl=os[--ls],os[ls]=null,hl=os[--ls],os[ls]=null;for(;t===Ar;)Ar=Mn[--En],Mn[En]=null,ui=Mn[--En],Mn[En]=null,ci=Mn[--En],Mn[En]=null}var mn=null,pn=null,at=!1,Fn=null;function $g(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Mh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:ci,overflow:ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function Vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ju(t){if(at){var e=pn;if(e){var n=e;if(!Mh(t,e)){if(Vu(t))throw Error(te(418));e=Bi(n.nextSibling);var i=mn;e&&Mh(t,e)?$g(i,n):(t.flags=t.flags&-4097|2,at=!1,mn=t)}}else{if(Vu(t))throw Error(te(418));t.flags=t.flags&-4097|2,at=!1,mn=t}}}function Eh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function po(t){if(t!==mn)return!1;if(!at)return Eh(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zu(t.type,t.memoizedProps)),e&&(e=pn)){if(Vu(t))throw Yg(),Error(te(418));for(;e;)$g(t,e),e=Bi(e.nextSibling)}if(Eh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?Bi(t.stateNode.nextSibling):null;return!0}function Yg(){for(var t=pn;t;)t=Bi(t.nextSibling)}function Ts(){pn=mn=null,at=!1}function Wd(t){Fn===null?Fn=[t]:Fn.push(t)}var $_=yi.ReactCurrentBatchConfig;function $s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function mo(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wh(t){var e=t._init;return e(t._payload)}function Kg(t){function e(u,x){if(t){var v=u.deletions;v===null?(u.deletions=[x],u.flags|=16):v.push(x)}}function n(u,x){if(!t)return null;for(;x!==null;)e(u,x),x=x.sibling;return null}function i(u,x){for(u=new Map;x!==null;)x.key!==null?u.set(x.key,x):u.set(x.index,x),x=x.sibling;return u}function r(u,x){return u=ji(u,x),u.index=0,u.sibling=null,u}function s(u,x,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<x?(u.flags|=2,x):v):(u.flags|=2,x)):(u.flags|=1048576,x)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,x,v,E){return x===null||x.tag!==6?(x=Lc(v,u.mode,E),x.return=u,x):(x=r(x,v),x.return=u,x)}function l(u,x,v,E){var P=v.type;return P===ts?d(u,x,v.props.children,E,v.key):x!==null&&(x.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ci&&wh(P)===x.type)?(E=r(x,v.props),E.ref=$s(u,x,v),E.return=u,E):(E=Jo(v.type,v.key,v.props,null,u.mode,E),E.ref=$s(u,x,v),E.return=u,E)}function c(u,x,v,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Nc(v,u.mode,E),x.return=u,x):(x=r(x,v.children||[]),x.return=u,x)}function d(u,x,v,E,P){return x===null||x.tag!==7?(x=yr(v,u.mode,E,P),x.return=u,x):(x=r(x,v),x.return=u,x)}function f(u,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Lc(""+x,u.mode,v),x.return=u,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case io:return v=Jo(x.type,x.key,x.props,null,u.mode,v),v.ref=$s(u,null,x),v.return=u,v;case es:return x=Nc(x,u.mode,v),x.return=u,x;case Ci:var E=x._init;return f(u,E(x._payload),v)}if(sa(x)||Vs(x))return x=yr(x,u.mode,v,null),x.return=u,x;mo(u,x)}return null}function h(u,x,v,E){var P=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:o(u,x,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case io:return v.key===P?l(u,x,v,E):null;case es:return v.key===P?c(u,x,v,E):null;case Ci:return P=v._init,h(u,x,P(v._payload),E)}if(sa(v)||Vs(v))return P!==null?null:d(u,x,v,E,null);mo(u,v)}return null}function m(u,x,v,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return u=u.get(v)||null,o(x,u,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case io:return u=u.get(E.key===null?v:E.key)||null,l(x,u,E,P);case es:return u=u.get(E.key===null?v:E.key)||null,c(x,u,E,P);case Ci:var R=E._init;return m(u,x,v,R(E._payload),P)}if(sa(E)||Vs(E))return u=u.get(v)||null,d(x,u,E,P,null);mo(x,E)}return null}function _(u,x,v,E){for(var P=null,R=null,b=x,D=x=0,M=null;b!==null&&D<v.length;D++){b.index>D?(M=b,b=null):M=b.sibling;var S=h(u,b,v[D],E);if(S===null){b===null&&(b=M);break}t&&b&&S.alternate===null&&e(u,b),x=s(S,x,D),R===null?P=S:R.sibling=S,R=S,b=M}if(D===v.length)return n(u,b),at&&ur(u,D),P;if(b===null){for(;D<v.length;D++)b=f(u,v[D],E),b!==null&&(x=s(b,x,D),R===null?P=b:R.sibling=b,R=b);return at&&ur(u,D),P}for(b=i(u,b);D<v.length;D++)M=m(b,u,D,v[D],E),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?D:M.key),x=s(M,x,D),R===null?P=M:R.sibling=M,R=M);return t&&b.forEach(function(T){return e(u,T)}),at&&ur(u,D),P}function y(u,x,v,E){var P=Vs(v);if(typeof P!="function")throw Error(te(150));if(v=P.call(v),v==null)throw Error(te(151));for(var R=P=null,b=x,D=x=0,M=null,S=v.next();b!==null&&!S.done;D++,S=v.next()){b.index>D?(M=b,b=null):M=b.sibling;var T=h(u,b,S.value,E);if(T===null){b===null&&(b=M);break}t&&b&&T.alternate===null&&e(u,b),x=s(T,x,D),R===null?P=T:R.sibling=T,R=T,b=M}if(S.done)return n(u,b),at&&ur(u,D),P;if(b===null){for(;!S.done;D++,S=v.next())S=f(u,S.value,E),S!==null&&(x=s(S,x,D),R===null?P=S:R.sibling=S,R=S);return at&&ur(u,D),P}for(b=i(u,b);!S.done;D++,S=v.next())S=m(b,u,D,S.value,E),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?D:S.key),x=s(S,x,D),R===null?P=S:R.sibling=S,R=S);return t&&b.forEach(function(z){return e(u,z)}),at&&ur(u,D),P}function g(u,x,v,E){if(typeof v=="object"&&v!==null&&v.type===ts&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case io:e:{for(var P=v.key,R=x;R!==null;){if(R.key===P){if(P=v.type,P===ts){if(R.tag===7){n(u,R.sibling),x=r(R,v.props.children),x.return=u,u=x;break e}}else if(R.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ci&&wh(P)===R.type){n(u,R.sibling),x=r(R,v.props),x.ref=$s(u,R,v),x.return=u,u=x;break e}n(u,R);break}else e(u,R);R=R.sibling}v.type===ts?(x=yr(v.props.children,u.mode,E,v.key),x.return=u,u=x):(E=Jo(v.type,v.key,v.props,null,u.mode,E),E.ref=$s(u,x,v),E.return=u,u=E)}return a(u);case es:e:{for(R=v.key;x!==null;){if(x.key===R)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(u,x.sibling),x=r(x,v.children||[]),x.return=u,u=x;break e}else{n(u,x);break}else e(u,x);x=x.sibling}x=Nc(v,u.mode,E),x.return=u,u=x}return a(u);case Ci:return R=v._init,g(u,x,R(v._payload),E)}if(sa(v))return _(u,x,v,E);if(Vs(v))return y(u,x,v,E);mo(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(u,x.sibling),x=r(x,v),x.return=u,u=x):(n(u,x),x=Lc(v,u.mode,E),x.return=u,u=x),a(u)):n(u,x)}return g}var As=Kg(!0),Zg=Kg(!1),pl=Ji(null),ml=null,cs=null,Xd=null;function qd(){Xd=cs=ml=null}function $d(t){var e=pl.current;st(pl),t._currentValue=e}function Wu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function xs(t,e){ml=t,Xd=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Xd!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(ml===null)throw Error(te(308));cs=t,ml.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var vr=null;function Yd(t){vr===null?vr=[t]:vr.push(t)}function Qg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Yd(e)):(n.next=r.next,r.next=n),e.interleaved=n,vi(t,i)}function vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ri=!1;function Kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,vi(t,n)}return r=i.interleaved,r===null?(e.next=e,Yd(i)):(e.next=r.next,r.next=e),i.interleaved=e,vi(t,n)}function qo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Id(t,n)}}function Th(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gl(t,e,n,i){var r=t.updateQueue;Ri=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=c=l=null,o=s;do{var h=o.lane,m=o.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(h=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(m,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(m,f,h):_,h==null)break e;f=ht({},f,h);break e;case 2:Ri=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else m={eventTime:m,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cr|=a,t.lanes=a,t.memoizedState=f}}function Ah(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var qa={},Yn=Ji(qa),Da=Ji(qa),Ua=Ji(qa);function xr(t){if(t===qa)throw Error(te(174));return t}function Zd(t,e){switch(nt(Ua,e),nt(Da,t),nt(Yn,qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Tu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Tu(e,t)}st(Yn),nt(Yn,e)}function bs(){st(Yn),st(Da),st(Ua)}function ev(t){xr(Ua.current);var e=xr(Yn.current),n=Tu(e,t.type);e!==n&&(nt(Da,t),nt(Yn,n))}function Qd(t){Da.current===t&&(st(Yn),st(Da))}var dt=Ji(0);function vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tc=[];function Jd(){for(var t=0;t<Tc.length;t++)Tc[t]._workInProgressVersionPrimary=null;Tc.length=0}var $o=yi.ReactCurrentDispatcher,Ac=yi.ReactCurrentBatchConfig,br=0,ft=null,wt=null,Lt=null,xl=!1,ma=!1,Ia=0,Y_=0;function Ot(){throw Error(te(321))}function ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function tf(t,e,n,i,r,s){if(br=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$o.current=t===null||t.memoizedState===null?J_:ey,t=n(i,r),ma){s=0;do{if(ma=!1,Ia=0,25<=s)throw Error(te(301));s+=1,Lt=wt=null,e.updateQueue=null,$o.current=ty,t=n(i,r)}while(ma)}if($o.current=_l,e=wt!==null&&wt.next!==null,br=0,Lt=wt=ft=null,xl=!1,e)throw Error(te(300));return t}function nf(){var t=Ia!==0;return Ia=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ft.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Rn(){if(wt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Lt===null?ft.memoizedState:Lt.next;if(e!==null)Lt=e,wt=t;else{if(t===null)throw Error(te(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Lt===null?ft.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Fa(t,e){return typeof e=="function"?e(t):e}function bc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((br&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,ft.lanes|=d,Cr|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Gn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,Cr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Gn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function tv(){}function nv(t,e){var n=ft,i=Rn(),r=e(),s=!Gn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,rf(sv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,ka(9,rv.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(te(349));br&30||iv(n,e,r)}return r}function iv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rv(t,e,n,i){e.value=n,e.getSnapshot=i,av(e)&&ov(t)}function sv(t,e,n){return n(function(){av(e)&&ov(t)})}function av(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function ov(t){var e=vi(t,1);e!==null&&Hn(e,t,1,-1)}function bh(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},e.queue=t,t=t.dispatch=Q_.bind(null,ft,t),[e.memoizedState,t]}function ka(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function lv(){return Rn().memoizedState}function Yo(t,e,n,i){var r=Wn();ft.flags|=t,r.memoizedState=ka(1|e,n,void 0,i===void 0?null:i)}function Gl(t,e,n,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var a=wt.memoizedState;if(s=a.destroy,i!==null&&ef(i,a.deps)){r.memoizedState=ka(e,n,s,i);return}}ft.flags|=t,r.memoizedState=ka(1|e,n,s,i)}function Ch(t,e){return Yo(8390656,8,t,e)}function rf(t,e){return Gl(2048,8,t,e)}function cv(t,e){return Gl(4,2,t,e)}function uv(t,e){return Gl(4,4,t,e)}function dv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fv(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4,4,dv.bind(null,e,t),n)}function sf(){}function hv(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ef(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function pv(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ef(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function mv(t,e,n){return br&21?(Gn(n,e)||(n=yg(),ft.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function K_(t,e){var n=Ke;Ke=n!==0&&4>n?n:4,t(!0);var i=Ac.transition;Ac.transition={};try{t(!1),e()}finally{Ke=n,Ac.transition=i}}function gv(){return Rn().memoizedState}function Z_(t,e,n){var i=Vi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},vv(t))xv(e,n);else if(n=Qg(t,e,n,i),n!==null){var r=Kt();Hn(n,t,i,r),_v(n,e,i)}}function Q_(t,e,n){var i=Vi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(vv(t))xv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Gn(o,a)){var l=e.interleaved;l===null?(r.next=r,Yd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Qg(t,e,r,i),n!==null&&(r=Kt(),Hn(n,t,i,r),_v(n,e,i))}}function vv(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function xv(t,e){ma=xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _v(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Id(t,n)}}var _l={readContext:Cn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},J_={readContext:Cn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Ch,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yo(4194308,4,dv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yo(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Z_.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:bh,useDebugValue:sf,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=bh(!1),e=t[0];return t=K_.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=Wn();if(at){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Dt===null)throw Error(te(349));br&30||iv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ch(sv.bind(null,i,s,t),[t]),i.flags|=2048,ka(9,rv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=Dt.identifierPrefix;if(at){var n=ui,i=ci;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Y_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ey={readContext:Cn,useCallback:hv,useContext:Cn,useEffect:rf,useImperativeHandle:fv,useInsertionEffect:cv,useLayoutEffect:uv,useMemo:pv,useReducer:bc,useRef:lv,useState:function(){return bc(Fa)},useDebugValue:sf,useDeferredValue:function(t){var e=Rn();return mv(e,wt.memoizedState,t)},useTransition:function(){var t=bc(Fa)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:tv,useSyncExternalStore:nv,useId:gv,unstable_isNewReconciler:!1},ty={readContext:Cn,useCallback:hv,useContext:Cn,useEffect:rf,useImperativeHandle:fv,useInsertionEffect:cv,useLayoutEffect:uv,useMemo:pv,useReducer:Cc,useRef:lv,useState:function(){return Cc(Fa)},useDebugValue:sf,useDeferredValue:function(t){var e=Rn();return wt===null?e.memoizedState=t:mv(e,wt.memoizedState,t)},useTransition:function(){var t=Cc(Fa)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:tv,useSyncExternalStore:nv,useId:gv,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vl={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Vi(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Hn(e,t,r,i),qo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Vi(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Hn(e,t,r,i),qo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=Vi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Hi(t,r,i),e!==null&&(Hn(e,t,i,n),qo(e,t,i))}};function Rh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ra(n,i)||!Ra(r,s):!0}function yv(t,e,n){var i=!1,r=Ki,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=sn(e)?Tr:Vt.current,i=e.contextTypes,s=(i=i!=null)?ws(t,r):Ki),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ph(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Vl.enqueueReplaceState(e,e.state,null)}function qu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Kd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=sn(e)?Tr:Vt.current,r.context=ws(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Vl.enqueueReplaceState(r,r.state,null),gl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,e){try{var n="",i=e;do n+=Rx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Rc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $u(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ny=typeof WeakMap=="function"?WeakMap:Map;function Sv(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Sl||(Sl=!0,rd=i),$u(t,e)},n}function Mv(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){$u(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$u(t,e),typeof i!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Lh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ny;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=gy.bind(null,t,e,n),e.then(t,t))}function Nh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,Hi(n,e,1))),n.lanes|=1),t)}var iy=yi.ReactCurrentOwner,nn=!1;function $t(t,e,n,i){e.child=t===null?Zg(e,null,n,i):As(e,t.child,n,i)}function Uh(t,e,n,i,r){n=n.render;var s=e.ref;return xs(e,r),i=tf(t,e,n,i,s,r),n=nf(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xi(t,e,r)):(at&&n&&Vd(e),e.flags|=1,$t(t,e,i,r),e.child)}function Ih(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!hf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ev(t,e,s,i,r)):(t=Jo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ra,n(a,i)&&t.ref===e.ref)return xi(t,e,r)}return e.flags|=1,t=ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ev(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ra(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,xi(t,e,r)}return Yu(t,e,n,i,r)}function wv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(ds,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(ds,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(ds,fn),fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(ds,fn),fn|=i;return $t(t,e,r,n),e.child}function Tv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yu(t,e,n,i,r){var s=sn(n)?Tr:Vt.current;return s=ws(e,s),xs(e,r),n=tf(t,e,n,i,s,r),i=nf(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xi(t,e,r)):(at&&i&&Vd(e),e.flags|=1,$t(t,e,n,r),e.child)}function Fh(t,e,n,i,r){if(sn(n)){var s=!0;dl(e)}else s=!1;if(xs(e,r),e.stateNode===null)Ko(t,e),yv(e,n,i),qu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=sn(n)?Tr:Vt.current,c=ws(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Ph(e,a,i,c),Ri=!1;var h=e.memoizedState;a.state=h,gl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||rn.current||Ri?(typeof d=="function"&&(Xu(e,n,d,i),l=e.memoizedState),(o=Ri||Rh(e,n,o,i,h,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Jg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Un(e.type,o),a.props=c,f=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=sn(n)?Tr:Vt.current,l=ws(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&Ph(e,a,i,l),Ri=!1,h=e.memoizedState,a.state=h,gl(e,i,a,r);var _=e.memoizedState;o!==f||h!==_||rn.current||Ri?(typeof m=="function"&&(Xu(e,n,m,i),_=e.memoizedState),(c=Ri||Rh(e,n,c,i,h,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Ku(t,e,n,i,s,r)}function Ku(t,e,n,i,r,s){Tv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Sh(e,n,!1),xi(t,e,s);i=e.stateNode,iy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=As(e,t.child,null,s),e.child=As(e,null,o,s)):$t(t,e,o,s),e.memoizedState=i.state,r&&Sh(e,n,!0),e.child}function Av(t){var e=t.stateNode;e.pendingContext?yh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&yh(t,e.context,!1),Zd(t,e.containerInfo)}function kh(t,e,n,i,r){return Ts(),Wd(r),e.flags|=256,$t(t,e,n,i),e.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function Qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function bv(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(dt,r&1),t===null)return ju(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Xl(a,i,0,null),t=yr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qu(n),e.memoizedState=Zu,t):af(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return ry(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ji(o,s):(s=yr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Qu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Zu,i}return s=t.child,t=s.sibling,i=ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function af(t,e){return e=Xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function go(t,e,n,i){return i!==null&&Wd(i),As(e,t.child,null,n),t=af(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ry(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Rc(Error(te(422))),go(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Xl({mode:"visible",children:i.children},r,0,null),s=yr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&As(e,t.child,null,a),e.child.memoizedState=Qu(a),e.memoizedState=Zu,s);if(!(e.mode&1))return go(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(te(419)),i=Rc(s,i,void 0),go(t,e,a,i)}if(o=(a&t.childLanes)!==0,nn||o){if(i=Dt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,vi(t,r),Hn(i,t,r,-1))}return ff(),i=Rc(Error(te(421))),go(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=vy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=Bi(r.nextSibling),mn=e,at=!0,Fn=null,t!==null&&(Mn[En++]=ci,Mn[En++]=ui,Mn[En++]=Ar,ci=t.id,ui=t.overflow,Ar=e),e=af(e,i.children),e.flags|=4096,e)}function Oh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Wu(t.return,e,n)}function Pc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Cv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Oh(t,n,e);else if(t.tag===19)Oh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&vl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Pc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&vl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Pc(e,!0,n,null,s);break;case"together":Pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ko(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sy(t,e,n){switch(e.tag){case 3:Av(e),Ts();break;case 5:ev(e);break;case 1:sn(e.type)&&dl(e);break;case 4:Zd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?bv(t,e,n):(nt(dt,dt.current&1),t=xi(t,e,n),t!==null?t.sibling:null);nt(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Cv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,wv(t,e,n)}return xi(t,e,n)}var Rv,Ju,Pv,Lv;Rv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ju=function(){};Pv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,xr(Yn.current);var s=null;switch(n){case"input":r=Su(t,r),i=Su(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=wu(t,r),i=wu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=cl)}Au(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Lv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ys(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ay(t,e,n){var i=e.pendingProps;switch(jd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return sn(e.type)&&ul(),zt(e),null;case 3:return i=e.stateNode,bs(),st(rn),st(Vt),Jd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(po(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(od(Fn),Fn=null))),Ju(t,e),zt(e),null;case 5:Qd(e);var r=xr(Ua.current);if(n=e.type,t!==null&&e.stateNode!=null)Pv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return zt(e),null}if(t=xr(Yn.current),po(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[Na]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<oa.length;r++)it(oa[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":qf(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":Yf(i,s),it("invalid",i)}Au(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",""+o]):Ma.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&it("scroll",i)}switch(n){case"input":ro(i),$f(i,s,!0);break;case"textarea":ro(i),Kf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[qn]=e,t[Na]=i,Rv(t,e,!1,!1),e.stateNode=t;e:{switch(a=bu(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<oa.length;r++)it(oa[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":qf(t,i),r=Su(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),it("invalid",t);break;case"textarea":Yf(t,i),r=wu(t,i),it("invalid",t);break;default:r=i}Au(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?lg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ag(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ea(t,l):typeof l=="number"&&Ea(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&Rd(t,s,l,a))}switch(n){case"input":ro(t),$f(t,i,!1);break;case"textarea":ro(t),Kf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Yi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)Lv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=xr(Ua.current),xr(Yn.current),po(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:ho(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return zt(e),null;case 13:if(st(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&pn!==null&&e.mode&1&&!(e.flags&128))Yg(),Ts(),e.flags|=98560,s=!1;else if(s=po(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[qn]=e}else Ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else Fn!==null&&(od(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Tt===0&&(Tt=3):ff())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return bs(),Ju(t,e),t===null&&Pa(e.stateNode.containerInfo),zt(e),null;case 10:return $d(e.type._context),zt(e),null;case 17:return sn(e.type)&&ul(),zt(e),null;case 19:if(st(dt),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ys(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=vl(t),a!==null){for(e.flags|=128,Ys(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Rs&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304)}else{if(!i)if(t=vl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!at)return zt(e),null}else 2*xt()-s.renderingStartTime>Rs&&n!==1073741824&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=dt.current,nt(dt,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return df(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function oy(t,e){switch(jd(e),e.tag){case 1:return sn(e.type)&&ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bs(),st(rn),st(Vt),Jd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qd(e),null;case 13:if(st(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(dt),null;case 4:return bs(),null;case 10:return $d(e.type._context),null;case 22:case 23:return df(),null;case 24:return null;default:return null}}var vo=!1,Gt=!1,ly=typeof WeakSet=="function"?WeakSet:Set,fe=null;function us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function ed(t,e,n){try{n()}catch(i){gt(t,e,i)}}var zh=!1;function cy(t,e){if(ku=al,t=Fg(),Gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++d===i&&(l=a),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ou={focusedElem:t,selectionRange:n},al=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,g=_.memoizedState,u=e.stateNode,x=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Un(e.type,y),g);u.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(E){gt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return _=zh,zh=!1,_}function ga(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ed(e,n,s)}r=r.next}while(r!==i)}}function jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function td(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Nv(t){var e=t.alternate;e!==null&&(t.alternate=null,Nv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[Na],delete e[Hu],delete e[W_],delete e[X_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Dv(t){return t.tag===5||t.tag===3||t.tag===4}function Bh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cl));else if(i!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}function id(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(id(t,e,n),t=t.sibling;t!==null;)id(t,e,n),t=t.sibling}var Ut=null,In=!1;function Mi(t,e,n){for(n=n.child;n!==null;)Uv(t,e,n),n=n.sibling}function Uv(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:Gt||us(n,e);case 6:var i=Ut,r=In;Ut=null,Mi(t,e,n),Ut=i,In=r,Ut!==null&&(In?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(In?(t=Ut,n=n.stateNode,t.nodeType===8?Ec(t.parentNode,n):t.nodeType===1&&Ec(t,n),ba(t)):Ec(Ut,n.stateNode));break;case 4:i=Ut,r=In,Ut=n.stateNode.containerInfo,In=!0,Mi(t,e,n),Ut=i,In=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ed(n,e,a),r=r.next}while(r!==i)}Mi(t,e,n);break;case 1:if(!Gt&&(us(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){gt(n,e,o)}Mi(t,e,n);break;case 21:Mi(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Mi(t,e,n),Gt=i):Mi(t,e,n);break;default:Mi(t,e,n)}}function Hh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ly),e.forEach(function(i){var r=xy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ut=o.stateNode,In=!1;break e;case 3:Ut=o.stateNode.containerInfo,In=!0;break e;case 4:Ut=o.stateNode.containerInfo,In=!0;break e}o=o.return}if(Ut===null)throw Error(te(160));Uv(s,a,r),Ut=null,In=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Iv(e,t),e=e.sibling}function Iv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),jn(t),i&4){try{ga(3,t,t.return),jl(3,t)}catch(y){gt(t,t.return,y)}try{ga(5,t,t.return)}catch(y){gt(t,t.return,y)}}break;case 1:Pn(e,t),jn(t),i&512&&n!==null&&us(n,n.return);break;case 5:if(Pn(e,t),jn(t),i&512&&n!==null&&us(n,n.return),t.flags&32){var r=t.stateNode;try{Ea(r,"")}catch(y){gt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&ig(r,s),bu(o,a);var c=bu(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?lg(r,f):d==="dangerouslySetInnerHTML"?ag(r,f):d==="children"?Ea(r,f):Rd(r,d,f,c)}switch(o){case"input":Mu(r,s);break;case"textarea":rg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ps(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?ps(r,!!s.multiple,s.defaultValue,!0):ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[Na]=s}catch(y){gt(t,t.return,y)}}break;case 6:if(Pn(e,t),jn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){gt(t,t.return,y)}}break;case 3:if(Pn(e,t),jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ba(e.containerInfo)}catch(y){gt(t,t.return,y)}break;case 4:Pn(e,t),jn(t);break;case 13:Pn(e,t),jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(cf=xt())),i&4&&Hh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(c=Gt)||d,Pn(e,t),Gt=c):Pn(e,t),jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(fe=t,d=t.child;d!==null;){for(f=fe=d;fe!==null;){switch(h=fe,m=h.child,h.tag){case 0:case 11:case 14:case 15:ga(4,h,h.return);break;case 1:us(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){gt(i,n,y)}}break;case 5:us(h,h.return);break;case 22:if(h.memoizedState!==null){Vh(f);continue}}m!==null?(m.return=h,fe=m):Vh(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=og("display",a))}catch(y){gt(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){gt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pn(e,t),jn(t),i&4&&Hh(t);break;case 21:break;default:Pn(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Dv(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ea(r,""),i.flags&=-33);var s=Bh(t);id(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Bh(t);nd(t,o,a);break;default:throw Error(te(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uy(t,e,n){fe=t,Fv(t)}function Fv(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||vo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Gt;o=vo;var c=Gt;if(vo=a,(Gt=l)&&!c)for(fe=r;fe!==null;)a=fe,l=a.child,a.tag===22&&a.memoizedState!==null?jh(r):l!==null?(l.return=a,fe=l):jh(r);for(;s!==null;)fe=s,Fv(s),s=s.sibling;fe=r,vo=o,Gt=c}Gh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):Gh(t)}}function Gh(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||jl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ah(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ah(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ba(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Gt||e.flags&512&&td(e)}catch(h){gt(e,e.return,h)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function Vh(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function jh(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jl(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{td(e)}catch(l){gt(e,s,l)}break;case 5:var a=e.return;try{td(e)}catch(l){gt(e,a,l)}}}catch(l){gt(e,e.return,l)}if(e===t){fe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,fe=o;break}fe=e.return}}var dy=Math.ceil,yl=yi.ReactCurrentDispatcher,of=yi.ReactCurrentOwner,bn=yi.ReactCurrentBatchConfig,$e=0,Dt=null,Mt=null,It=0,fn=0,ds=Ji(0),Tt=0,Oa=null,Cr=0,Wl=0,lf=0,va=null,en=null,cf=0,Rs=1/0,ai=null,Sl=!1,rd=null,Gi=null,xo=!1,Di=null,Ml=0,xa=0,sd=null,Zo=-1,Qo=0;function Kt(){return $e&6?xt():Zo!==-1?Zo:Zo=xt()}function Vi(t){return t.mode&1?$e&2&&It!==0?It&-It:$_.transition!==null?(Qo===0&&(Qo=yg()),Qo):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:bg(t.type)),t):1}function Hn(t,e,n,i){if(50<xa)throw xa=0,sd=null,Error(te(185));ja(t,n,i),(!($e&2)||t!==Dt)&&(t===Dt&&(!($e&2)&&(Wl|=n),Tt===4&&Li(t,It)),an(t,i),n===1&&$e===0&&!(e.mode&1)&&(Rs=xt()+500,Hl&&er()))}function an(t,e){var n=t.callbackNode;$x(t,e);var i=sl(t,t===Dt?It:0);if(i===0)n!==null&&Jf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Jf(n),e===1)t.tag===0?q_(Wh.bind(null,t)):Xg(Wh.bind(null,t)),V_(function(){!($e&6)&&er()}),n=null;else{switch(Sg(i)){case 1:n=Ud;break;case 4:n=xg;break;case 16:n=rl;break;case 536870912:n=_g;break;default:n=rl}n=jv(n,kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kv(t,e){if(Zo=-1,Qo=0,$e&6)throw Error(te(327));var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var i=sl(t,t===Dt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=El(t,i);else{e=i;var r=$e;$e|=2;var s=zv();(Dt!==t||It!==e)&&(ai=null,Rs=xt()+500,_r(t,e));do try{py();break}catch(o){Ov(t,o)}while(!0);qd(),yl.current=s,$e=r,Mt!==null?e=0:(Dt=null,It=0,e=Tt)}if(e!==0){if(e===2&&(r=Nu(t),r!==0&&(i=r,e=ad(t,r))),e===1)throw n=Oa,_r(t,0),Li(t,i),an(t,xt()),n;if(e===6)Li(t,i);else{if(r=t.current.alternate,!(i&30)&&!fy(r)&&(e=El(t,i),e===2&&(s=Nu(t),s!==0&&(i=s,e=ad(t,s))),e===1))throw n=Oa,_r(t,0),Li(t,i),an(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:dr(t,en,ai);break;case 3:if(Li(t,i),(i&130023424)===i&&(e=cf+500-xt(),10<e)){if(sl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Bu(dr.bind(null,t,en,ai),e);break}dr(t,en,ai);break;case 4:if(Li(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Bn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*dy(i/1960))-i,10<i){t.timeoutHandle=Bu(dr.bind(null,t,en,ai),i);break}dr(t,en,ai);break;case 5:dr(t,en,ai);break;default:throw Error(te(329))}}}return an(t,xt()),t.callbackNode===n?kv.bind(null,t):null}function ad(t,e){var n=va;return t.current.memoizedState.isDehydrated&&(_r(t,e).flags|=256),t=El(t,e),t!==2&&(e=en,en=n,e!==null&&od(e)),t}function od(t){en===null?en=t:en.push.apply(en,t)}function fy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Gn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Li(t,e){for(e&=~lf,e&=~Wl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function Wh(t){if($e&6)throw Error(te(327));_s();var e=sl(t,0);if(!(e&1))return an(t,xt()),null;var n=El(t,e);if(t.tag!==0&&n===2){var i=Nu(t);i!==0&&(e=i,n=ad(t,i))}if(n===1)throw n=Oa,_r(t,0),Li(t,e),an(t,xt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dr(t,en,ai),an(t,xt()),null}function uf(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Rs=xt()+500,Hl&&er())}}function Rr(t){Di!==null&&Di.tag===0&&!($e&6)&&_s();var e=$e;$e|=1;var n=bn.transition,i=Ke;try{if(bn.transition=null,Ke=1,t)return t()}finally{Ke=i,bn.transition=n,$e=e,!($e&6)&&er()}}function df(){fn=ds.current,st(ds)}function _r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,G_(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(jd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ul();break;case 3:bs(),st(rn),st(Vt),Jd();break;case 5:Qd(i);break;case 4:bs();break;case 13:st(dt);break;case 19:st(dt);break;case 10:$d(i.type._context);break;case 22:case 23:df()}n=n.return}if(Dt=t,Mt=t=ji(t.current,null),It=fn=e,Tt=0,Oa=null,lf=Wl=Cr=0,en=va=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}vr=null}return t}function Ov(t,e){do{var n=Mt;try{if(qd(),$o.current=_l,xl){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}xl=!1}if(br=0,Lt=wt=ft=null,ma=!1,Ia=0,of.current=null,n===null||n.return===null){Tt=1,Oa=e,Mt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=It,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Nh(a);if(m!==null){m.flags&=-257,Dh(m,a,o,s,e),m.mode&1&&Lh(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Lh(s,c,e),ff();break e}l=Error(te(426))}}else if(at&&o.mode&1){var g=Nh(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Dh(g,a,o,s,e),Wd(Cs(l,o));break e}}s=l=Cs(l,o),Tt!==4&&(Tt=2),va===null?va=[s]:va.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Sv(s,l,e);Th(s,u);break e;case 1:o=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Gi===null||!Gi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Mv(s,o,e);Th(s,E);break e}}s=s.return}while(s!==null)}Hv(n)}catch(P){e=P,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function zv(){var t=yl.current;return yl.current=_l,t===null?_l:t}function ff(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Dt===null||!(Cr&268435455)&&!(Wl&268435455)||Li(Dt,It)}function El(t,e){var n=$e;$e|=2;var i=zv();(Dt!==t||It!==e)&&(ai=null,_r(t,e));do try{hy();break}catch(r){Ov(t,r)}while(!0);if(qd(),$e=n,yl.current=i,Mt!==null)throw Error(te(261));return Dt=null,It=0,Tt}function hy(){for(;Mt!==null;)Bv(Mt)}function py(){for(;Mt!==null&&!zx();)Bv(Mt)}function Bv(t){var e=Vv(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?Hv(t):Mt=e,of.current=null}function Hv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oy(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,Mt=null;return}}else if(n=ay(n,e,fn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);Tt===0&&(Tt=5)}function dr(t,e,n){var i=Ke,r=bn.transition;try{bn.transition=null,Ke=1,my(t,e,n,i)}finally{bn.transition=r,Ke=i}return null}function my(t,e,n,i){do _s();while(Di!==null);if($e&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Yx(t,s),t===Dt&&(Mt=Dt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xo||(xo=!0,jv(rl,function(){return _s(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bn.transition,bn.transition=null;var a=Ke;Ke=1;var o=$e;$e|=4,of.current=null,cy(t,n),Iv(n,t),I_(Ou),al=!!ku,Ou=ku=null,t.current=n,uy(n),Bx(),$e=o,Ke=a,bn.transition=s}else t.current=n;if(xo&&(xo=!1,Di=t,Ml=r),s=t.pendingLanes,s===0&&(Gi=null),Vx(n.stateNode),an(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Sl)throw Sl=!1,t=rd,rd=null,t;return Ml&1&&t.tag!==0&&_s(),s=t.pendingLanes,s&1?t===sd?xa++:(xa=0,sd=t):xa=0,er(),null}function _s(){if(Di!==null){var t=Sg(Ml),e=bn.transition,n=Ke;try{if(bn.transition=null,Ke=16>t?16:t,Di===null)var i=!1;else{if(t=Di,Di=null,Ml=0,$e&6)throw Error(te(331));var r=$e;for($e|=4,fe=t.current;fe!==null;){var s=fe,a=s.child;if(fe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(fe=c;fe!==null;){var d=fe;switch(d.tag){case 0:case 11:case 15:ga(8,d,s)}var f=d.child;if(f!==null)f.return=d,fe=f;else for(;fe!==null;){d=fe;var h=d.sibling,m=d.return;if(Nv(d),d===c){fe=null;break}if(h!==null){h.return=m,fe=h;break}fe=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}fe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,fe=a;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ga(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,fe=u;break e}fe=s.return}}var x=t.current;for(fe=x;fe!==null;){a=fe;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,fe=v;else e:for(a=x;fe!==null;){if(o=fe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:jl(9,o)}}catch(P){gt(o,o.return,P)}if(o===a){fe=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,fe=E;break e}fe=o.return}}if($e=r,er(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Fl,t)}catch{}i=!0}return i}finally{Ke=n,bn.transition=e}}return!1}function Xh(t,e,n){e=Cs(n,e),e=Sv(t,e,1),t=Hi(t,e,1),e=Kt(),t!==null&&(ja(t,1,e),an(t,e))}function gt(t,e,n){if(t.tag===3)Xh(t,t,n);else for(;e!==null;){if(e.tag===3){Xh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gi===null||!Gi.has(i))){t=Cs(n,t),t=Mv(e,t,1),e=Hi(e,t,1),t=Kt(),e!==null&&(ja(e,1,t),an(e,t));break}}e=e.return}}function gy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(It&n)===n&&(Tt===4||Tt===3&&(It&130023424)===It&&500>xt()-cf?_r(t,0):lf|=n),an(t,e)}function Gv(t,e){e===0&&(t.mode&1?(e=oo,oo<<=1,!(oo&130023424)&&(oo=4194304)):e=1);var n=Kt();t=vi(t,e),t!==null&&(ja(t,e,n),an(t,n))}function vy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Gv(t,n)}function xy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),Gv(t,n)}var Vv;Vv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,sy(t,e,n);nn=!!(t.flags&131072)}else nn=!1,at&&e.flags&1048576&&qg(e,hl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ko(t,e),t=e.pendingProps;var r=ws(e,Vt.current);xs(e,n),r=tf(null,e,i,t,r,n);var s=nf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,dl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Kd(e),r.updater=Vl,e.stateNode=r,r._reactInternals=e,qu(e,i,t,n),e=Ku(null,e,i,!0,s,n)):(e.tag=0,at&&s&&Vd(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ko(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=yy(i),t=Un(i,t),r){case 0:e=Yu(null,e,i,t,n);break e;case 1:e=Fh(null,e,i,t,n);break e;case 11:e=Uh(null,e,i,t,n);break e;case 14:e=Ih(null,e,i,Un(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Yu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Fh(t,e,i,r,n);case 3:e:{if(Av(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Jg(t,e),gl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Cs(Error(te(423)),e),e=kh(t,e,i,n,r);break e}else if(i!==r){r=Cs(Error(te(424)),e),e=kh(t,e,i,n,r);break e}else for(pn=Bi(e.stateNode.containerInfo.firstChild),mn=e,at=!0,Fn=null,n=Zg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ts(),i===r){e=xi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return ev(e),t===null&&ju(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,zu(i,r)?a=null:s!==null&&zu(i,s)&&(e.flags|=32),Tv(t,e),$t(t,e,a,n),e.child;case 6:return t===null&&ju(e),null;case 13:return bv(t,e,n);case 4:return Zd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=As(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Uh(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,nt(pl,i._currentValue),i._currentValue=a,s!==null)if(Gn(s.value,a)){if(s.children===r.children&&!rn.current){e=xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(te(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Wu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,xs(e,n),r=Cn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),Ih(t,e,i,r,n);case 15:return Ev(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Ko(t,e),e.tag=1,sn(i)?(t=!0,dl(e)):t=!1,xs(e,n),yv(e,i,r),qu(e,i,r,n),Ku(null,e,i,!0,t,n);case 19:return Cv(t,e,n);case 22:return wv(t,e,n)}throw Error(te(156,e.tag))};function jv(t,e){return vg(t,e)}function _y(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new _y(t,e,n,i)}function hf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yy(t){if(typeof t=="function")return hf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ld)return 11;if(t===Nd)return 14}return 2}function ji(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Jo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")hf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ts:return yr(n.children,r,s,e);case Pd:a=8,r|=8;break;case vu:return t=An(12,n,e,r|2),t.elementType=vu,t.lanes=s,t;case xu:return t=An(13,n,e,r),t.elementType=xu,t.lanes=s,t;case _u:return t=An(19,n,e,r),t.elementType=_u,t.lanes=s,t;case eg:return Xl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qm:a=10;break e;case Jm:a=9;break e;case Ld:a=11;break e;case Nd:a=14;break e;case Ci:a=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=An(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function yr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function Xl(t,e,n,i){return t=An(22,t,i,e),t.elementType=eg,t.lanes=n,t.stateNode={isHidden:!1},t}function Lc(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function Nc(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Sy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fc(0),this.expirationTimes=fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function pf(t,e,n,i,r,s,a,o,l){return t=new Sy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kd(s),t}function My(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Wv(t){if(!t)return Ki;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(sn(n))return Wg(t,n,e)}return e}function Xv(t,e,n,i,r,s,a,o,l){return t=pf(n,i,!0,t,r,s,a,o,l),t.context=Wv(null),n=t.current,i=Kt(),r=Vi(n),s=hi(i,r),s.callback=e??null,Hi(n,s,r),t.current.lanes=r,ja(t,r,i),an(t,i),t}function ql(t,e,n,i){var r=e.current,s=Kt(),a=Vi(r);return n=Wv(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Hi(r,e,a),t!==null&&(Hn(t,r,a,s),qo(t,r,a)),a}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mf(t,e){qh(t,e),(t=t.alternate)&&qh(t,e)}function Ey(){return null}var qv=typeof reportError=="function"?reportError:function(t){console.error(t)};function gf(t){this._internalRoot=t}$l.prototype.render=gf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));ql(t,e,null,null)};$l.prototype.unmount=gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){ql(null,t,null,null)}),e[gi]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var e=wg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pi.length&&e!==0&&e<Pi[n].priority;n++);Pi.splice(n,0,t),n===0&&Ag(t)}};function vf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $h(){}function wy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=wl(a);s.call(c)}}var a=Xv(e,i,t,0,null,!1,!1,"",$h);return t._reactRootContainer=a,t[gi]=a.current,Pa(t.nodeType===8?t.parentNode:t),Rr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=wl(l);o.call(c)}}var l=pf(t,0,!1,null,null,!1,!1,"",$h);return t._reactRootContainer=l,t[gi]=l.current,Pa(t.nodeType===8?t.parentNode:t),Rr(function(){ql(e,l,n,i)}),l}function Kl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=wl(a);o.call(l)}}ql(e,a,t,r)}else a=wy(n,e,t,r,i);return wl(a)}Mg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=aa(e.pendingLanes);n!==0&&(Id(e,n|1),an(e,xt()),!($e&6)&&(Rs=xt()+500,er()))}break;case 13:Rr(function(){var i=vi(t,1);if(i!==null){var r=Kt();Hn(i,t,1,r)}}),mf(t,1)}};Fd=function(t){if(t.tag===13){var e=vi(t,134217728);if(e!==null){var n=Kt();Hn(e,t,134217728,n)}mf(t,134217728)}};Eg=function(t){if(t.tag===13){var e=Vi(t),n=vi(t,e);if(n!==null){var i=Kt();Hn(n,t,e,i)}mf(t,e)}};wg=function(){return Ke};Tg=function(t,e){var n=Ke;try{return Ke=t,e()}finally{Ke=n}};Ru=function(t,e,n){switch(e){case"input":if(Mu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Bl(i);if(!r)throw Error(te(90));ng(i),Mu(i,r)}}}break;case"textarea":rg(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};dg=uf;fg=Rr;var Ty={usingClientEntryPoint:!1,Events:[Xa,ss,Bl,cg,ug,uf]},Ks={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ay={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||Ey,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Fl=_o.inject(Ay),$n=_o}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ty;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vf(e))throw Error(te(200));return My(t,e,null,n)};xn.createRoot=function(t,e){if(!vf(t))throw Error(te(299));var n=!1,i="",r=qv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=pf(t,1,!1,null,null,n,!1,i,r),t[gi]=e.current,Pa(t.nodeType===8?t.parentNode:t),new gf(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=mg(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return Rr(t)};xn.hydrate=function(t,e,n){if(!Yl(e))throw Error(te(200));return Kl(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!vf(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=qv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Xv(e,null,t,1,n??null,r,!1,s,a),t[gi]=e.current,Pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new $l(e)};xn.render=function(t,e,n){if(!Yl(e))throw Error(te(200));return Kl(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!Yl(t))throw Error(te(40));return t._reactRootContainer?(Rr(function(){Kl(null,null,t,!1,function(){t._reactRootContainer=null,t[gi]=null})}),!0):!1};xn.unstable_batchedUpdates=uf;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Yl(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Kl(t,e,n,!1,i)};xn.version="18.3.1-next-f1338f8080-20240426";function $v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($v)}catch(t){console.error(t)}}$v(),$m.exports=xn;var by=$m.exports,Yh=by;mu.createRoot=Yh.createRoot,mu.hydrateRoot=Yh.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function za(){return za=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},za.apply(this,arguments)}var Ui;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ui||(Ui={}));const Kh="popstate";function Cy(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return ld("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Tl(r)}return Py(e,n,null,t)}function _t(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Yv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ry(){return Math.random().toString(36).substr(2,8)}function Zh(t,e){return{usr:t.state,key:t.key,idx:e}}function ld(t,e,n,i){return n===void 0&&(n=null),za({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ks(e):e,{state:n,key:e&&e.key||i||Ry()})}function Tl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ks(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Py(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Ui.Pop,l=null,c=d();c==null&&(c=0,a.replaceState(za({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){o=Ui.Pop;let g=d(),u=g==null?null:g-c;c=g,l&&l({action:o,location:y.location,delta:u})}function h(g,u){o=Ui.Push;let x=ld(y.location,g,u);c=d()+1;let v=Zh(x,c),E=y.createHref(x);try{a.pushState(v,"",E)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(E)}s&&l&&l({action:o,location:y.location,delta:1})}function m(g,u){o=Ui.Replace;let x=ld(y.location,g,u);c=d();let v=Zh(x,c),E=y.createHref(x);a.replaceState(v,"",E),s&&l&&l({action:o,location:y.location,delta:0})}function _(g){let u=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof g=="string"?g:Tl(g);return x=x.replace(/ $/,"%20"),_t(u,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,u)}let y={get action(){return o},get location(){return t(r,a)},listen(g){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Kh,f),l=g,()=>{r.removeEventListener(Kh,f),l=null}},createHref(g){return e(r,g)},createURL:_,encodeLocation(g){let u=_(g);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:m,go(g){return a.go(g)}};return y}var Qh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Qh||(Qh={}));function Ly(t,e,n){return n===void 0&&(n="/"),Ny(t,e,n)}function Ny(t,e,n,i){let r=typeof e=="string"?ks(e):e,s=xf(r.pathname||"/",n);if(s==null)return null;let a=Kv(t);Dy(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=Wy(s);o=Gy(a[l],c)}return o}function Kv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(_t(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Wi([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(_t(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Kv(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:By(c,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of Zv(s.path))r(s,a,l)}),e}function Zv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Zv(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function Dy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Hy(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Uy=/^:[\w-]+$/,Iy=3,Fy=2,ky=1,Oy=10,zy=-2,Jh=t=>t==="*";function By(t,e){let n=t.split("/"),i=n.length;return n.some(Jh)&&(i+=zy),e&&(i+=Fy),n.filter(r=>!Jh(r)).reduce((r,s)=>r+(Uy.test(s)?Iy:s===""?ky:Oy),i)}function Hy(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Gy(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Vy({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:Wi([s,f.pathname]),pathnameBase:Yy(Wi([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Wi([s,f.pathnameBase]))}return a}function Vy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=jy(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:h,isOptional:m}=d;if(h==="*"){let y=o[f]||"";a=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=o[f];return m&&!_?c[h]=void 0:c[h]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function jy(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Yv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Wy(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Yv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function Xy(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ks(t):t;return{pathname:n?n.startsWith("/")?n:qy(n,e):e,search:Ky(i),hash:Zy(r)}}function qy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Dc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $y(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function _f(t,e){let n=$y(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function yf(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ks(t):(r=za({},t),_t(!r.pathname||!r.pathname.includes("?"),Dc("?","pathname","search",r)),_t(!r.pathname||!r.pathname.includes("#"),Dc("#","pathname","hash",r)),_t(!r.search||!r.search.includes("#"),Dc("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}o=f>=0?e[f]:"/"}let l=Xy(r,o),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Wi=t=>t.join("/").replace(/\/\/+/g,"/"),Yy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ky=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Zy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Qy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Qv=["post","put","patch","delete"];new Set(Qv);const Jy=["get",...Qv];new Set(Jy);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ba.apply(this,arguments)}const Sf=K.createContext(null),eS=K.createContext(null),tr=K.createContext(null),Zl=K.createContext(null),Si=K.createContext({outlet:null,matches:[],isDataRoute:!1}),Jv=K.createContext(null);function tS(t,e){let{relative:n}=e===void 0?{}:e;Os()||_t(!1);let{basename:i,navigator:r}=K.useContext(tr),{hash:s,pathname:a,search:o}=t0(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:Wi([i,a])),r.createHref({pathname:l,search:o,hash:s})}function Os(){return K.useContext(Zl)!=null}function nr(){return Os()||_t(!1),K.useContext(Zl).location}function e0(t){K.useContext(tr).static||K.useLayoutEffect(t)}function $a(){let{isDataRoute:t}=K.useContext(Si);return t?pS():nS()}function nS(){Os()||_t(!1);let t=K.useContext(Sf),{basename:e,future:n,navigator:i}=K.useContext(tr),{matches:r}=K.useContext(Si),{pathname:s}=nr(),a=JSON.stringify(_f(r,n.v7_relativeSplatPath)),o=K.useRef(!1);return e0(()=>{o.current=!0}),K.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=yf(c,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Wi([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,a,s,t])}function Ab(){let{matches:t}=K.useContext(Si),e=t[t.length-1];return e?e.params:{}}function t0(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=K.useContext(tr),{matches:r}=K.useContext(Si),{pathname:s}=nr(),a=JSON.stringify(_f(r,i.v7_relativeSplatPath));return K.useMemo(()=>yf(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function iS(t,e){return rS(t,e)}function rS(t,e,n,i){Os()||_t(!1);let{navigator:r}=K.useContext(tr),{matches:s}=K.useContext(Si),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=nr(),d;if(e){var f;let g=typeof e=="string"?ks(e):e;l==="/"||(f=g.pathname)!=null&&f.startsWith(l)||_t(!1),d=g}else d=c;let h=d.pathname||"/",m=h;if(l!=="/"){let g=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(g.length).join("/")}let _=Ly(t,{pathname:m}),y=cS(_&&_.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:Wi([l,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:Wi([l,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,n,i);return e&&y?K.createElement(Zl.Provider,{value:{location:Ba({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ui.Pop}},y):y}function sS(){let t=hS(),e=Qy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},e),n?K.createElement("pre",{style:r},n):null,null)}const aS=K.createElement(sS,null);class oS extends K.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?K.createElement(Si.Provider,{value:this.props.routeContext},K.createElement(Jv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lS(t){let{routeContext:e,match:n,children:i}=t,r=K.useContext(Sf);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),K.createElement(Si.Provider,{value:e},i)}function cS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||_t(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:m}=n,_=f.route.loader&&h[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||_){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,f,h)=>{let m,_=!1,y=null,g=null;n&&(m=o&&f.route.id?o[f.route.id]:void 0,y=f.route.errorElement||aS,l&&(c<0&&h===0?(mS("route-fallback"),_=!0,g=null):c===h&&(_=!0,g=f.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,h+1)),x=()=>{let v;return m?v=y:_?v=g:f.route.Component?v=K.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,K.createElement(lS,{match:f,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?K.createElement(oS,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:x(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):x()},null)}var n0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(n0||{}),i0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(i0||{});function uS(t){let e=K.useContext(Sf);return e||_t(!1),e}function dS(t){let e=K.useContext(eS);return e||_t(!1),e}function fS(t){let e=K.useContext(Si);return e||_t(!1),e}function r0(t){let e=fS(),n=e.matches[e.matches.length-1];return n.route.id||_t(!1),n.route.id}function hS(){var t;let e=K.useContext(Jv),n=dS(),i=r0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function pS(){let{router:t}=uS(n0.UseNavigateStable),e=r0(i0.UseNavigateStable),n=K.useRef(!1);return e0(()=>{n.current=!0}),K.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Ba({fromRouteId:e},s)))},[t,e])}const ep={};function mS(t,e,n){ep[t]||(ep[t]=!0)}function gS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function s0(t){let{to:e,replace:n,state:i,relative:r}=t;Os()||_t(!1);let{future:s,static:a}=K.useContext(tr),{matches:o}=K.useContext(Si),{pathname:l}=nr(),c=$a(),d=yf(e,_f(o,s.v7_relativeSplatPath),l,r==="path"),f=JSON.stringify(d);return K.useEffect(()=>c(JSON.parse(f),{replace:n,state:i,relative:r}),[c,f,r,n,i]),null}function St(t){_t(!1)}function vS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Ui.Pop,navigator:s,static:a=!1,future:o}=t;Os()&&_t(!1);let l=e.replace(/^\/*/,"/"),c=K.useMemo(()=>({basename:l,navigator:s,static:a,future:Ba({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=ks(i));let{pathname:d="/",search:f="",hash:h="",state:m=null,key:_="default"}=i,y=K.useMemo(()=>{let g=xf(d,l);return g==null?null:{location:{pathname:g,search:f,hash:h,state:m,key:_},navigationType:r}},[l,d,f,h,m,_,r]);return y==null?null:K.createElement(tr.Provider,{value:c},K.createElement(Zl.Provider,{children:n,value:y}))}function xS(t){let{children:e,location:n}=t;return iS(cd(e),n)}new Promise(()=>{});function cd(t,e){e===void 0&&(e=[]);let n=[];return K.Children.forEach(t,(i,r)=>{if(!K.isValidElement(i))return;let s=[...e,r];if(i.type===K.Fragment){n.push.apply(n,cd(i.props.children,s));return}i.type!==St&&_t(!1),!i.props.index||!i.props.children||_t(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=cd(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ud(){return ud=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ud.apply(this,arguments)}function _S(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function yS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function SS(t,e){return t.button===0&&(!e||e==="_self")&&!yS(t)}const MS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ES="6";try{window.__reactRouterVersion=ES}catch{}const wS="startTransition",tp=gx[wS];function TS(t){let{basename:e,children:n,future:i,window:r}=t,s=K.useRef();s.current==null&&(s.current=Cy({window:r,v5Compat:!0}));let a=s.current,[o,l]=K.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},d=K.useCallback(f=>{c&&tp?tp(()=>l(f)):l(f)},[l,c]);return K.useLayoutEffect(()=>a.listen(d),[a,d]),K.useEffect(()=>gS(i),[i]),K.createElement(vS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const AS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xe=K.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,h=_S(e,MS),{basename:m}=K.useContext(tr),_,y=!1;if(typeof c=="string"&&bS.test(c)&&(_=c,AS))try{let v=new URL(window.location.href),E=c.startsWith("//")?new URL(v.protocol+c):new URL(c),P=xf(E.pathname,m);E.origin===v.origin&&P!=null?c=P+E.search+E.hash:y=!0}catch{}let g=tS(c,{relative:r}),u=CS(c,{replace:a,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:f});function x(v){i&&i(v),v.defaultPrevented||u(v)}return K.createElement("a",ud({},h,{href:_||g,onClick:y||s?i:x,ref:n,target:l}))});var np;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(np||(np={}));var ip;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ip||(ip={}));function CS(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=$a(),c=nr(),d=t0(t,{relative:a});return K.useCallback(f=>{if(SS(f,n)){f.preventDefault();let h=i!==void 0?i:Tl(c)===Tl(d);l(t,{replace:h,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,d,i,r,n,t,s,a,o])}const RS="modulepreload",PS=function(t){return"/"+t},rp={},Ur=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=PS(l),l in rp)return;rp[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":RS,c||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),c)return new Promise((h,m)=>{f.addEventListener("load",h),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a0=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var NS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=K.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>K.createElement("svg",{ref:l,...NS,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:a0("lucide",r),...o},[...a.map(([c,d])=>K.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=(t,e)=>{const n=K.forwardRef(({className:i,...r},s)=>K.createElement(DS,{ref:s,iconNode:e,className:a0(`lucide-${LS(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=lt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=lt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=lt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=lt("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=lt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=lt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=lt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=lt("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=lt("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=lt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=lt("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=lt("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=lt("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=lt("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=lt("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=lt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=lt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=lt("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=lt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=lt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=lt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=lt("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=lt("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=lt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function jS({className:t=""}){const[e,n]=K.useState(navigator.onLine);return K.useEffect(()=>{const i=()=>n(!0),r=()=>n(!1);return window.addEventListener("online",i),window.addEventListener("offline",r),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",r)}},[]),p.jsxs("span",{className:`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${e?"border-emerald-500/40 text-emerald-300 bg-emerald-500/10":"border-yellow-500/40 text-yellow-200 bg-yellow-500/10"} ${t}`,children:[e?p.jsx(GS,{size:14}):p.jsx(HS,{size:14}),e?"Online":"Offline"]})}const dd="https://classroom-backend-6vot.onrender.com",d0="rcc-db",WS=3,Sr="auth";let la;function f0(){return la||(la=new Promise((t,e)=>{const n=indexedDB.open(d0,WS);n.onupgradeneeded=()=>{const i=n.result;i.objectStoreNames.contains(Sr)&&i.deleteObjectStore(Sr),i.createObjectStore(Sr)},n.onsuccess=()=>t(n.result),n.onerror=()=>{console.error("[DB] Failed to open database:",n.error),e(n.error)},n.onblocked=()=>{console.warn("[DB] Database upgrade blocked. Please close other tabs.")}}),la)}function up(t){const e="rcc-salt",n=[...t].map((i,r)=>i.charCodeAt(0)^e.charCodeAt(r%e.length));return btoa(String.fromCharCode(...n))}function Ic(t){try{const e="rcc-salt",i=[...atob(t)].map((r,s)=>r.charCodeAt(0)^e.charCodeAt(s%e.length));return String.fromCharCode(...i)}catch{return""}}async function _a(t){try{const n=(await f0()).transaction(Sr,"readwrite");return n.objectStore(Sr).put(up(t),"jwt"),await n.complete,!0}catch(e){return console.warn("[DB] Failed to store token in IndexedDB, using localStorage fallback:",e),localStorage.setItem("rcc-jwt",up(t)),!0}}async function Ql(){try{const t=await f0();return await new Promise(e=>{const i=t.transaction(Sr,"readonly").objectStore(Sr).get("jwt");i.onsuccess=()=>e(Ic(i.result||"")),i.onerror=()=>{console.warn("[DB] Failed to read from IndexedDB, using localStorage fallback");const r=localStorage.getItem("rcc-jwt");e(Ic(r||""))}})}catch(t){console.warn("[DB] Failed to access IndexedDB, using localStorage fallback:",t);const e=localStorage.getItem("rcc-jwt");return Ic(e||"")}}async function Zs(t,e={}){const n=await Ql(),i={"Content-Type":"application/json",...n?{Authorization:`Bearer ${n}`}:{},...e.headers};try{console.log(`[API] Request: ${e.method||"GET"} ${dd}/api${t}`);const r=await fetch(`${dd}/api${t}`,{...e,headers:i});if(console.log(`[API] Response status: ${r.status}`),!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);const s=await r.json().catch(()=>({}));return console.log("[API] Response data:",s),s}catch(r){throw console.error("[API] Request failed:",r),r}}async function XS(){try{return indexedDB.deleteDatabase(d0),localStorage.removeItem("rcc-jwt"),la=null,console.log("[DB] Database reset successfully"),!0}catch(t){return console.error("[DB] Failed to reset database:",t),!1}}const ya={post:(t,e)=>Zs(t,{method:"POST",body:JSON.stringify(e)}),get:t=>Zs(t,{method:"GET"}),upload:async(t,e)=>{const n=await Ql();return(await fetch(`${dd}/api${t}`,{method:"POST",headers:n?{Authorization:`Bearer ${n}`}:{},body:e})).json()},login:(t,e="student")=>Zs("/auth/login",{method:"POST",body:JSON.stringify({phone:t,role:e})}),sendOTP:(t,e="student")=>Zs("/auth/send-otp",{method:"POST",body:JSON.stringify({phone:t,role:e})}),verifyOTP:(t,e,n="student")=>Zs("/auth/verify-otp",{method:"POST",body:JSON.stringify({phone:t,otp:e,role:n})}),setAuthToken:_a},bb=Object.freeze(Object.defineProperty({__proto__:null,api:ya,default:ya,getAuthToken:Ql,resetDB:XS,setAuthToken:_a},Symbol.toStringTag,{value:"Module"}));function zs(){const[t,e]=K.useState(null),[n,i]=K.useState(!0),[r,s]=K.useState(null);return K.useEffect(()=>{(async()=>{try{if(await Ql()){let h=JSON.parse(sessionStorage.getItem("rcc-user")||"null");h||(h=JSON.parse(localStorage.getItem("rcc-user")||"null"),h&&sessionStorage.setItem("rcc-user",JSON.stringify(h))),h&&e(h)}}catch(f){console.error("[AUTH] Failed to initialize auth state:",f)}finally{i(!1)}})()},[]),{user:t,loading:n,error:r,login:async(d,f="student")=>{var h,m;i(!0),s(null);try{const _=await ya.login(d,f);if(console.log("[AUTH] Login Response:",_),_.status==="ok"&&_.token){await _a(_.token);const y={phone:d,role:((h=_.user)==null?void 0:h.role)||f,id:(m=_.user)==null?void 0:m.id,sessionId:Date.now()+Math.random()};return e(y),sessionStorage.setItem("rcc-user",JSON.stringify(y)),localStorage.setItem("rcc-user",JSON.stringify(y)),_}else{const y=_.message||"Login failed";return s(y),{status:"error",message:y}}}catch(_){console.error("[AUTH] Login Error:",_);const y=_.message||"Login failed";return s(y),{status:"error",message:y}}finally{i(!1)}},sendOTP:async(d,f="student")=>{i(!0),s(null);try{const h=await ya.sendOTP(d,f);if(console.log("[AUTH] OTP Response:",h),h.status==="ok")return h;{const m=h.message||"Failed to send OTP";return s(m),{status:"error",message:m}}}catch(h){console.error("[AUTH] OTP Error:",h);const m=h.message||"Failed to send OTP";return s(m),{status:"error",message:m}}finally{i(!1)}},verifyOTP:async(d,f,h="student")=>{var m,_;i(!0),s(null);try{const y=await ya.verifyOTP(d,f,h);if(y.status==="ok"&&y.token){await _a(y.token);const g={phone:d,role:((m=y.user)==null?void 0:m.role)||h,id:(_=y.user)==null?void 0:_.id,sessionId:Date.now()+Math.random()};e(g),sessionStorage.setItem("rcc-user",JSON.stringify(g)),localStorage.setItem("rcc-user",JSON.stringify(g))}else s(y.message||"Verification failed");return y}catch{return s("Verification failed"),{status:"error",message:"Verification failed"}}finally{i(!1)}},logout:async()=>{await _a(""),sessionStorage.removeItem("rcc-user"),localStorage.removeItem("rcc-user"),e(null),s(null)}}}function qS(){const{pathname:t}=nr(),{user:e,logout:n}=zs(),i=()=>{n(),window.location.href="/"};return p.jsx("header",{className:"sticky top-0 z-40 border-b border-border/60 backdrop-blur bg-app/80",children:p.jsxs("div",{className:"container mx-auto px-4 py-3 flex items-center justify-between",children:[p.jsxs(Xe,{to:"/",className:"flex items-center gap-2",children:[p.jsx("img",{src:"/logo.jpg",alt:"RuralConnect logo",className:"h-11 w-11 rounded-full object-cover shadow-glow"}),p.jsx("span",{className:"font-semibold",children:"RuralConnect"}),p.jsx("span",{className:"badge ml-2",children:"v1.0"})]}),p.jsxs("nav",{className:"flex items-center gap-2 text-sm",children:[e?p.jsxs(p.Fragment,{children:[p.jsxs(Xe,{className:`px-3 py-1 rounded hover:bg-card flex items-center gap-1 ${t==="/dashboard"?"text-accent":""}`,to:"/dashboard",children:[p.jsx(l0,{size:16}),"Dashboard"]}),e.role==="student"&&p.jsxs(p.Fragment,{children:[p.jsxs(Xe,{className:"px-3 py-1 rounded hover:bg-card flex items-center gap-1",to:"/student/live/68cced26157d87e24fee03ce",children:[p.jsx(Kn,{size:16}),"Live"]}),p.jsxs(Xe,{className:"px-3 py-1 rounded hover:bg-card flex items-center gap-1",to:"/student/offline",children:[p.jsx(pi,{size:16}),"Offline"]})]}),e.role==="teacher"&&p.jsxs(p.Fragment,{children:[p.jsxs(Xe,{className:"px-3 py-1 rounded hover:bg-card flex items-center gap-1",to:"/faculty/upload",children:[p.jsx(pi,{size:16}),"Upload"]}),p.jsxs(Xe,{className:"px-3 py-1 rounded hover:bg-card flex items-center gap-1",to:"/faculty/go-live/68cced26157d87e24fee03ce",children:[p.jsx(Kn,{size:16}),"Go Live"]})]}),p.jsxs("div",{className:"flex items-center gap-2 ml-4 px-3 py-1 bg-card rounded",children:[p.jsx(u0,{size:16}),p.jsxs("span",{className:"text-xs",children:[e.role==="teacher"?"Teacher":"Student",": ",e.phone]})]}),p.jsxs("button",{onClick:i,className:"px-3 py-1 rounded hover:bg-red-500/20 hover:text-red-400 flex items-center gap-1",children:[p.jsx(c0,{size:16}),"Logout"]})]}):p.jsx(p.Fragment,{children:p.jsxs(Xe,{className:"px-3 py-1 rounded hover:bg-card flex items-center gap-1",to:"/login",children:[p.jsx(IS,{size:16}),"Login"]})}),p.jsx(jS,{className:"ml-2"})]})]})})}function $S(){return p.jsx("footer",{className:"border-t border-border/60 mt-6",children:p.jsxs("div",{className:"container mx-auto px-4 py-4 text-xs text-textMuted flex justify-between",children:[p.jsxs("span",{children:["© ",new Date().getFullYear()," RuralConnect Classroom"]}),p.jsx("span",{className:"opacity-80",children:"Low-bandwidth • Audio-first • PWA"})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ef="160",YS=0,dp=1,KS=2,h0=1,ZS=2,si=3,Zi=0,on=1,li=2,Xi=0,ys=1,fp=2,hp=3,pp=4,QS=5,pr=100,JS=101,eM=102,mp=103,gp=104,tM=200,nM=201,iM=202,rM=203,fd=204,hd=205,sM=206,aM=207,oM=208,lM=209,cM=210,uM=211,dM=212,fM=213,hM=214,pM=0,mM=1,gM=2,bl=3,vM=4,xM=5,_M=6,yM=7,p0=0,SM=1,MM=2,qi=0,EM=1,wM=2,TM=3,AM=4,bM=5,CM=6,m0=300,Ps=301,Ls=302,pd=303,md=304,Jl=306,gd=1e3,On=1001,vd=1002,Yt=1003,vp=1004,Fc=1005,wn=1006,RM=1007,Ha=1008,$i=1009,PM=1010,LM=1011,wf=1012,g0=1013,Ii=1014,Fi=1015,Ga=1016,v0=1017,x0=1018,Mr=1020,NM=1021,zn=1023,DM=1024,UM=1025,Er=1026,Ns=1027,IM=1028,_0=1029,FM=1030,y0=1031,S0=1033,kc=33776,Oc=33777,zc=33778,Bc=33779,xp=35840,_p=35841,yp=35842,Sp=35843,M0=36196,Mp=37492,Ep=37496,wp=37808,Tp=37809,Ap=37810,bp=37811,Cp=37812,Rp=37813,Pp=37814,Lp=37815,Np=37816,Dp=37817,Up=37818,Ip=37819,Fp=37820,kp=37821,Hc=36492,Op=36494,zp=36495,kM=36283,Bp=36284,Hp=36285,Gp=36286,E0=3e3,wr=3001,OM=3200,zM=3201,w0=0,BM=1,Tn="",Nt="srgb",_i="srgb-linear",Tf="display-p3",ec="display-p3-linear",Cl="linear",rt="srgb",Rl="rec709",Pl="p3",Fr=7680,Vp=519,HM=512,GM=513,VM=514,T0=515,jM=516,WM=517,XM=518,qM=519,jp=35044,Wp="300 es",xd=1035,di=2e3,Ll=2001;class Bs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gc=Math.PI/180,_d=180/Math.PI;function Ya(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function $M(t,e){return(t%e+e)%e}function Vc(t,e,n){return(1-n)*t+n*e}function Xp(t){return(t&t-1)===0&&t!==0}function yd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Qs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,n=0){We.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],m=i[5],_=i[8],y=r[0],g=r[3],u=r[6],x=r[1],v=r[4],E=r[7],P=r[2],R=r[5],b=r[8];return s[0]=a*y+o*x+l*P,s[3]=a*g+o*v+l*R,s[6]=a*u+o*E+l*b,s[1]=c*y+d*x+f*P,s[4]=c*g+d*v+f*R,s[7]=c*u+d*E+f*b,s[2]=h*y+m*x+_*P,s[5]=h*g+m*v+_*R,s[8]=h*u+m*E+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,h=o*l-d*s,m=c*s-a*l,_=n*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-d*i)*y,e[2]=(o*i-r*a)*y,e[3]=h*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(jc.makeScale(e,n)),this}rotate(e){return this.premultiply(jc.makeRotation(-e)),this}translate(e,n){return this.premultiply(jc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jc=new He;function A0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Nl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function YM(){const t=Nl("canvas");return t.style.display="block",t}const qp={};function Sa(t){t in qp||(qp[t]=!0,console.warn(t))}const $p=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yp=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yo={[_i]:{transfer:Cl,primaries:Rl,toReference:t=>t,fromReference:t=>t},[Nt]:{transfer:rt,primaries:Rl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ec]:{transfer:Cl,primaries:Pl,toReference:t=>t.applyMatrix3(Yp),fromReference:t=>t.applyMatrix3($p)},[Tf]:{transfer:rt,primaries:Pl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Yp),fromReference:t=>t.applyMatrix3($p).convertLinearToSRGB()}},KM=new Set([_i,ec]),Qe={enabled:!0,_workingColorSpace:_i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!KM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=yo[e].toReference,r=yo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return yo[t].primaries},getTransfer:function(t){return t===Tn?Cl:yo[t].transfer}};function Ss(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Wc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let kr;class b0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{kr===void 0&&(kr=Nl("canvas")),kr.width=e.width,kr.height=e.height;const i=kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ss(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ss(n[i]/255)*255):n[i]=Ss(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZM=0;class C0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Ya(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Xc(r[a].image)):s.push(Xc(r[a]))}else s=Xc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Xc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?b0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let QM=0;class gn extends Bs{constructor(e=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=On,r=On,s=wn,a=Ha,o=zn,l=$i,c=gn.DEFAULT_ANISOTROPY,d=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=Ya(),this.name="",this.source=new C0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===wr?Nt:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gd:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gd:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?wr:E0}set encoding(e){Sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===wr?Nt:Tn}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=m0;gn.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,n=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],_=l[9],y=l[2],g=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,E=(m+1)/2,P=(u+1)/2,R=(d+h)/4,b=(f+y)/4,D=(_+g)/4;return v>E&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=b/i):E>P?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=D/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=b/s,r=D/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-_)*(g-_)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(f-y)/x,this.z=(h-d)/x,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JM extends Bs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ot(0,0,e,n),this.scissorTest=!1,this.viewport=new ot(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Sa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===wr?Nt:Tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new gn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new C0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends JM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class R0 extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eE extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ka{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==h||c!==m||d!==_){let g=1-o;const u=l*h+c*m+d*_+f*y,x=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const P=Math.sqrt(v),R=Math.atan2(P,u*x);g=Math.sin(g*R)/P,o=Math.sin(o*R)/P}const E=o*x;if(l=l*g+h*E,c=c*g+m*E,d=d*g+_*E,f=f*g+y*E,g===1-o){const P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+d*f+l*m-c*h,e[n+1]=l*_+d*h+c*f-o*m,e[n+2]=c*_+d*m+o*h-l*f,e[n+3]=d*_-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"YXZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"ZXY":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"ZYX":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"YZX":this._x=h*d*f+c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f-h*m*_;break;case"XZY":this._x=h*d*f-c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qc.copy(this).projectOnVector(e),this.sub(qc)}reflect(e){return this.sub(qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qc=new I,Kp=new Ka;class Za{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),Mo.subVectors(this.max,Js),Or.subVectors(e.a,Js),zr.subVectors(e.b,Js),Br.subVectors(e.c,Js),Ei.subVectors(zr,Or),wi.subVectors(Br,zr),ar.subVectors(Or,Br);let n=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-ar.z,ar.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,ar.z,0,-ar.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-ar.y,ar.x,0];return!$c(n,Or,zr,Br,Mo)||(n=[1,0,0,0,1,0,0,0,1],!$c(n,Or,zr,Br,Mo))?!1:(Eo.crossVectors(Ei,wi),n=[Eo.x,Eo.y,Eo.z],$c(n,Or,zr,Br,Mo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new I,new I,new I,new I,new I,new I,new I,new I],Ln=new I,So=new Za,Or=new I,zr=new I,Br=new I,Ei=new I,wi=new I,ar=new I,Js=new I,Mo=new I,Eo=new I,or=new I;function $c(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){or.fromArray(t,s);const o=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=n.dot(or),d=i.dot(or);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const tE=new Za,ea=new I,Yc=new I;class Af{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):tE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const n=ea.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(Yc)),this.expandByPoint(ea.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new I,Kc=new I,wo=new I,Ti=new I,Zc=new I,To=new I,Qc=new I;class nE{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Kc.copy(e).add(n).multiplyScalar(.5),wo.copy(n).sub(e).normalize(),Ti.copy(this.origin).sub(Kc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(wo),o=Ti.dot(this.direction),l=-Ti.dot(wo),c=Ti.lengthSq(),d=Math.abs(1-a*a);let f,h,m,_;if(d>0)if(f=a*l-o,h=a*o-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const y=1/d;f*=y,h*=y,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Kc).addScaledVector(wo,h),m}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){Zc.subVectors(n,e),To.subVectors(i,e),Qc.crossVectors(Zc,To);let a=this.direction.dot(Qc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ti.subVectors(this.origin,e);const l=o*this.direction.dot(To.crossVectors(Ti,To));if(l<0)return null;const c=o*this.direction.dot(Zc.cross(Ti));if(c<0||l+c>a)return null;const d=-o*Ti.dot(Qc);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,a,o,l,c,d,f,h,m,_,y,g){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,f,h,m,_,y,g)}set(e,n,i,r,s,a,o,l,c,d,f,h,m,_,y,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=_,u[11]=y,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),a=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*d,m=a*f,_=o*d,y=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=m+_*c,n[5]=h-y*c,n[9]=-o*l,n[2]=y-h*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,_=c*d,y=c*f;n[0]=h+y*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=m*o-_,n[6]=y+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,_=c*d,y=c*f;n[0]=h-y*o,n[4]=-a*f,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*d,n[9]=y-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*d,m=a*f,_=o*d,y=o*f;n[0]=l*d,n[4]=_*c-m,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,y=o*c;n[0]=l*d,n[4]=y-h*f,n[8]=_*f+m,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*f+_,n[10]=h-y*f}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,y=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+y,n[5]=a*d,n[9]=m*f-_,n[2]=_*f-m,n[6]=o*d,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iE,e,rE)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Ai.crossVectors(i,un),Ai.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ai.crossVectors(i,un)),Ai.normalize(),Ao.crossVectors(un,Ai),r[0]=Ai.x,r[4]=Ao.x,r[8]=un.x,r[1]=Ai.y,r[5]=Ao.y,r[9]=un.y,r[2]=Ai.z,r[6]=Ao.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],m=i[13],_=i[2],y=i[6],g=i[10],u=i[14],x=i[3],v=i[7],E=i[11],P=i[15],R=r[0],b=r[4],D=r[8],M=r[12],S=r[1],T=r[5],z=r[9],Q=r[13],L=r[2],O=r[6],q=r[10],Z=r[14],U=r[3],k=r[7],j=r[11],Y=r[15];return s[0]=a*R+o*S+l*L+c*U,s[4]=a*b+o*T+l*O+c*k,s[8]=a*D+o*z+l*q+c*j,s[12]=a*M+o*Q+l*Z+c*Y,s[1]=d*R+f*S+h*L+m*U,s[5]=d*b+f*T+h*O+m*k,s[9]=d*D+f*z+h*q+m*j,s[13]=d*M+f*Q+h*Z+m*Y,s[2]=_*R+y*S+g*L+u*U,s[6]=_*b+y*T+g*O+u*k,s[10]=_*D+y*z+g*q+u*j,s[14]=_*M+y*Q+g*Z+u*Y,s[3]=x*R+v*S+E*L+P*U,s[7]=x*b+v*T+E*O+P*k,s[11]=x*D+v*z+E*q+P*j,s[15]=x*M+v*Q+E*Z+P*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],_=e[3],y=e[7],g=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+y*(+n*l*m-n*c*h+s*a*h-r*a*m+r*c*d-s*l*d)+g*(+n*c*f-n*o*m-s*a*f+i*a*m+s*o*d-i*c*d)+u*(-r*o*d-n*l*f+n*o*h+r*a*f-i*a*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],_=e[12],y=e[13],g=e[14],u=e[15],x=f*g*c-y*h*c+y*l*m-o*g*m-f*l*u+o*h*u,v=_*h*c-d*g*c-_*l*m+a*g*m+d*l*u-a*h*u,E=d*y*c-_*f*c+_*o*m-a*y*m-d*o*u+a*f*u,P=_*f*l-d*y*l-_*o*h+a*y*h+d*o*g-a*f*g,R=n*x+i*v+r*E+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return e[0]=x*b,e[1]=(y*h*s-f*g*s-y*r*m+i*g*m+f*r*u-i*h*u)*b,e[2]=(o*g*s-y*l*s+y*r*c-i*g*c-o*r*u+i*l*u)*b,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*b,e[4]=v*b,e[5]=(d*g*s-_*h*s+_*r*m-n*g*m-d*r*u+n*h*u)*b,e[6]=(_*l*s-a*g*s-_*r*c+n*g*c+a*r*u-n*l*u)*b,e[7]=(a*h*s-d*l*s+d*r*c-n*h*c-a*r*m+n*l*m)*b,e[8]=E*b,e[9]=(_*f*s-d*y*s-_*i*m+n*y*m+d*i*u-n*f*u)*b,e[10]=(a*y*s-_*o*s+_*i*c-n*y*c-a*i*u+n*o*u)*b,e[11]=(d*o*s-a*f*s-d*i*c+n*f*c+a*i*m-n*o*m)*b,e[12]=P*b,e[13]=(d*y*r-_*f*r+_*i*h-n*y*h-d*i*g+n*f*g)*b,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*g-n*o*g)*b,e[15]=(a*f*r-d*o*r+d*i*l-n*f*l-a*i*h+n*o*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,f=o+o,h=s*c,m=s*d,_=s*f,y=a*d,g=a*f,u=o*f,x=l*c,v=l*d,E=l*f,P=i.x,R=i.y,b=i.z;return r[0]=(1-(y+u))*P,r[1]=(m+E)*P,r[2]=(_-v)*P,r[3]=0,r[4]=(m-E)*R,r[5]=(1-(h+u))*R,r[6]=(g+x)*R,r[7]=0,r[8]=(_+v)*b,r[9]=(g-x)*b,r[10]=(1-(h+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Hr.set(r[0],r[1],r[2]).length();const a=Hr.set(r[4],r[5],r[6]).length(),o=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,d=1/a,f=1/o;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=d,Nn.elements[5]*=d,Nn.elements[6]*=d,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,n.setFromRotationMatrix(Nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=di){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(o===di)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ll)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=di){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(a-s),h=(n+e)*c,m=(i+r)*d;let _,y;if(o===di)_=(a+s)*f,y=-2*f;else if(o===Ll)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new I,Nn=new Et,iE=new I(0,0,0),rE=new I(1,1,1),Ai=new I,Ao=new I,un=new I,Zp=new Et,Qp=new Ka;class tc{constructor(e=0,n=0,i=0,r=tc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qp.setFromEuler(this),this.setFromQuaternion(Qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tc.DEFAULT_ORDER="XYZ";class P0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sE=0;const Jp=new I,Gr=new Ka,ni=new Et,bo=new I,ta=new I,aE=new I,oE=new Ka,em=new I(1,0,0),tm=new I(0,1,0),nm=new I(0,0,1),lE={type:"added"},cE={type:"removed"};class ln extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new I,n=new tc,i=new Ka,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new He}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new P0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(em,e)}rotateY(e){return this.rotateOnAxis(tm,e)}rotateZ(e){return this.rotateOnAxis(nm,e)}translateOnAxis(e,n){return Jp.copy(e).applyQuaternion(this.quaternion),this.position.add(Jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(em,e)}translateY(e){return this.translateOnAxis(tm,e)}translateZ(e){return this.translateOnAxis(nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?bo.copy(e):bo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(ta,bo,this.up):ni.lookAt(bo,ta,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(ni),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,aE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,oE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ln.DEFAULT_UP=new I(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new I,ii=new I,Jc=new I,ri=new I,Vr=new I,jr=new I,im=new I,eu=new I,tu=new I,nu=new I;let Co=!1;class kn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),ii.subVectors(i,n),Jc.subVectors(e,n);const a=Dn.dot(Dn),o=Dn.dot(ii),l=Dn.dot(Jc),c=ii.dot(ii),d=ii.dot(Jc),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-o*d)*h,_=(a*d-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getUV(e,n,i,r,s,a,o,l){return Co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Co=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),ii.subVectors(e,n),Dn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Dn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Co=!0),kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Vr.subVectors(r,i),jr.subVectors(s,i),eu.subVectors(e,i);const l=Vr.dot(eu),c=jr.dot(eu);if(l<=0&&c<=0)return n.copy(i);tu.subVectors(e,r);const d=Vr.dot(tu),f=jr.dot(tu);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Vr,a);nu.subVectors(e,s);const m=Vr.dot(nu),_=jr.dot(nu);if(_>=0&&m<=_)return n.copy(s);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(jr,o);const g=d*_-m*f;if(g<=0&&f-d>=0&&m-_>=0)return im.subVectors(s,r),o=(f-d)/(f-d+(m-_)),n.copy(r).addScaledVector(im,o);const u=1/(g+y+h);return a=y*u,o=h*u,n.copy(i).addScaledVector(Vr,a).addScaledVector(jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const L0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function iu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=$M(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=iu(a,s,e+1/3),this.g=iu(a,s,e),this.b=iu(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Nt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nt){const i=L0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=Wc(e.r),this.g=Wc(e.g),this.b=Wc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Qe.fromWorkingColorSpace(Ht.copy(this),e),Math.round(tn(Ht.r*255,0,255))*65536+Math.round(tn(Ht.g*255,0,255))*256+Math.round(tn(Ht.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Nt){Qe.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Nt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(Ro);const i=Vc(bi.h,Ro.h,n),r=Vc(bi.s,Ro.s,n),s=Vc(bi.l,Ro.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new je;je.NAMES=L0;let uE=0;class Qa extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=Ya(),this.name="",this.type="Material",this.blending=ys,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fd,this.blendDst=hd,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fd&&(i.blendSrc=this.blendSrc),this.blendDst!==hd&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class N0 extends Qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=p0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new I,Po=new We;class Zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=jp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Po.fromBufferAttribute(this,n),Po.applyMatrix3(e),this.setXY(n,Po.x,Po.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Qs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jp&&(e.usage=this.usage),e}}class D0 extends Zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class U0 extends Zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Qn extends Zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let dE=0;const Sn=new Et,ru=new ln,Wr=new I,dn=new Za,na=new Za,Pt=new I;class ir extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A0(e)?U0:D0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return ru.lookAt(e),ru.updateMatrix(),this.applyMatrix4(ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Af);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];na.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(dn.min,na.min),dn.expandByPoint(Pt),Pt.addVectors(dn.max,na.max),dn.expandByPoint(Pt)):(dn.expandByPoint(na.min),dn.expandByPoint(na.max))}dn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Pt.fromBufferAttribute(o,c),l&&(Wr.fromBufferAttribute(e,c),Pt.add(Wr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let S=0;S<o;S++)c[S]=new I,d[S]=new I;const f=new I,h=new I,m=new I,_=new We,y=new We,g=new We,u=new I,x=new I;function v(S,T,z){f.fromArray(r,S*3),h.fromArray(r,T*3),m.fromArray(r,z*3),_.fromArray(a,S*2),y.fromArray(a,T*2),g.fromArray(a,z*2),h.sub(f),m.sub(f),y.sub(_),g.sub(_);const Q=1/(y.x*g.y-g.x*y.y);isFinite(Q)&&(u.copy(h).multiplyScalar(g.y).addScaledVector(m,-y.y).multiplyScalar(Q),x.copy(m).multiplyScalar(y.x).addScaledVector(h,-g.x).multiplyScalar(Q),c[S].add(u),c[T].add(u),c[z].add(u),d[S].add(x),d[T].add(x),d[z].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let S=0,T=E.length;S<T;++S){const z=E[S],Q=z.start,L=z.count;for(let O=Q,q=Q+L;O<q;O+=3)v(i[O+0],i[O+1],i[O+2])}const P=new I,R=new I,b=new I,D=new I;function M(S){b.fromArray(s,S*3),D.copy(b);const T=c[S];P.copy(T),P.sub(b.multiplyScalar(b.dot(T))).normalize(),R.crossVectors(D,T);const Q=R.dot(d[S])<0?-1:1;l[S*4]=P.x,l[S*4+1]=P.y,l[S*4+2]=P.z,l[S*4+3]=Q}for(let S=0,T=E.length;S<T;++S){const z=E[S],Q=z.start,L=z.count;for(let O=Q,q=Q+L;O<q;O+=3)M(i[O+0]),M(i[O+1]),M(i[O+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,d=new I,f=new I;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,g),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let m=0,_=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*d;for(let u=0;u<d;u++)h[_++]=c[m++]}return new Zn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ir,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rm=new Et,lr=new nE,Lo=new Af,sm=new I,Xr=new I,qr=new I,$r=new I,su=new I,No=new I,Do=new We,Uo=new We,Io=new We,am=new I,om=new I,lm=new I,Fo=new I,ko=new I;class fi extends ln{constructor(e=new ir,n=new N0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){No.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(su.fromBufferAttribute(f,e),a?No.addScaledVector(su,d):No.addScaledVector(su.sub(n),d))}n.add(No)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!(Lo.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Lo,sm)===null||lr.origin.distanceToSquared(sm)>(e.far-e.near)**2))&&(rm.copy(s).invert(),lr.copy(e.ray).applyMatrix4(rm),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const g=h[_],u=a[g.materialIndex],x=Math.max(g.start,m.start),v=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let E=x,P=v;E<P;E+=3){const R=o.getX(E),b=o.getX(E+1),D=o.getX(E+2);r=Oo(this,u,e,i,c,d,f,R,b,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let g=_,u=y;g<u;g+=3){const x=o.getX(g),v=o.getX(g+1),E=o.getX(g+2);r=Oo(this,a,e,i,c,d,f,x,v,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const g=h[_],u=a[g.materialIndex],x=Math.max(g.start,m.start),v=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let E=x,P=v;E<P;E+=3){const R=E,b=E+1,D=E+2;r=Oo(this,u,e,i,c,d,f,R,b,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=_,u=y;g<u;g+=3){const x=g,v=g+1,E=g+2;r=Oo(this,a,e,i,c,d,f,x,v,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function fE(t,e,n,i,r,s,a,o){let l;if(e.side===on?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Zi,o),l===null)return null;ko.copy(o),ko.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ko);return c<n.near||c>n.far?null:{distance:c,point:ko.clone(),object:t}}function Oo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Xr),t.getVertexPosition(l,qr),t.getVertexPosition(c,$r);const d=fE(t,e,n,i,Xr,qr,$r,Fo);if(d){r&&(Do.fromBufferAttribute(r,o),Uo.fromBufferAttribute(r,l),Io.fromBufferAttribute(r,c),d.uv=kn.getInterpolation(Fo,Xr,qr,$r,Do,Uo,Io,new We)),s&&(Do.fromBufferAttribute(s,o),Uo.fromBufferAttribute(s,l),Io.fromBufferAttribute(s,c),d.uv1=kn.getInterpolation(Fo,Xr,qr,$r,Do,Uo,Io,new We),d.uv2=d.uv1),a&&(am.fromBufferAttribute(a,o),om.fromBufferAttribute(a,l),lm.fromBufferAttribute(a,c),d.normal=kn.getInterpolation(Fo,Xr,qr,$r,am,om,lm,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};kn.getNormal(Xr,qr,$r,f.normal),d.face=f}return d}class Ja extends ir{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Qn(c,3)),this.setAttribute("normal",new Qn(d,3)),this.setAttribute("uv",new Qn(f,2));function _(y,g,u,x,v,E,P,R,b,D,M){const S=E/b,T=P/D,z=E/2,Q=P/2,L=R/2,O=b+1,q=D+1;let Z=0,U=0;const k=new I;for(let j=0;j<q;j++){const Y=j*T-Q;for(let ne=0;ne<O;ne++){const X=ne*S-z;k[y]=X*x,k[g]=Y*v,k[u]=L,c.push(k.x,k.y,k.z),k[y]=0,k[g]=0,k[u]=R>0?1:-1,d.push(k.x,k.y,k.z),f.push(ne/b),f.push(1-j/D),Z+=1}}for(let j=0;j<D;j++)for(let Y=0;Y<b;Y++){const ne=h+Y+O*j,X=h+Y+O*(j+1),$=h+(Y+1)+O*(j+1),se=h+(Y+1)+O*j;l.push(ne,X,se),l.push(X,$,se),U+=6}o.addGroup(m,U,M),m+=U,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=Ds(t[n]);for(const r in i)e[r]=i[r]}return e}function hE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function I0(t){return t.getRenderTarget()===null?t.outputColorSpace:Qe.workingColorSpace}const pE={clone:Ds,merge:qt};var mE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lr extends Qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mE,this.fragmentShader=gE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=hE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class F0 extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hn extends F0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_d*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _d*2*Math.atan(Math.tan(Gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,Kr=1;class vE extends ln{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(Yr,Kr,e,n);r.layers=this.layers,this.add(r);const s=new hn(Yr,Kr,e,n);s.layers=this.layers,this.add(s);const a=new hn(Yr,Kr,e,n);a.layers=this.layers,this.add(a);const o=new hn(Yr,Kr,e,n);o.layers=this.layers,this.add(o);const l=new hn(Yr,Kr,e,n);l.layers=this.layers,this.add(l);const c=new hn(Yr,Kr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ll)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class k0 extends gn{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ps,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xE extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Sa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===wr?Nt:Tn),this.texture=new k0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ja(5,5,5),s=new Lr({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Xi});s.uniforms.tEquirect.value=n;const a=new fi(r,s),o=n.minFilter;return n.minFilter===Ha&&(n.minFilter=wn),new vE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const au=new I,_E=new I,yE=new He;class fr{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=au.subVectors(i,n).cross(_E.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(au),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||yE.getNormalMatrix(e),r=this.coplanarPoint(au).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new Af,zo=new I;class bf{constructor(e=new fr,n=new fr,i=new fr,r=new fr,s=new fr,a=new fr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],m=r[8],_=r[9],y=r[10],g=r[11],u=r[12],x=r[13],v=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,g-m,E-u).normalize(),i[1].setComponents(l+s,h+c,g+m,E+u).normalize(),i[2].setComponents(l+a,h+d,g+_,E+x).normalize(),i[3].setComponents(l-a,h-d,g-_,E-x).normalize(),i[4].setComponents(l-o,h-f,g-y,E-v).normalize(),n===di)i[5].setComponents(l+o,h+f,g+y,E+v).normalize();else if(n===Ll)i[5].setComponents(o,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(zo.x=r.normal.x>0?e.max.x:e.min.x,zo.y=r.normal.y>0?e.max.y:e.min.y,zo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function O0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function SE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,m=f.byteLength,_=t.createBuffer();t.bindBuffer(d,_),t.bufferData(d,f,h),c.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,d,f){const h=d.array,m=d._updateRange,_=d.updateRanges;if(t.bindBuffer(f,c),m.count===-1&&_.length===0&&t.bufferSubData(f,0,h),_.length!==0){for(let y=0,g=_.length;y<g;y++){const u=_[y];n?t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:a,remove:o,update:l}}class Cf extends ir{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,h=n/l,m=[],_=[],y=[],g=[];for(let u=0;u<d;u++){const x=u*h-a;for(let v=0;v<c;v++){const E=v*f-s;_.push(E,-x,0),y.push(0,0,1),g.push(v/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<o;x++){const v=x+c*u,E=x+c*(u+1),P=x+1+c*(u+1),R=x+1+c*u;m.push(v,E,R),m.push(E,P,R)}this.setIndex(m),this.setAttribute("position",new Qn(_,3)),this.setAttribute("normal",new Qn(y,3)),this.setAttribute("uv",new Qn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cf(e.width,e.height,e.widthSegments,e.heightSegments)}}var ME=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,NE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,WE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$E=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QE="gl_FragColor = linearToOutputTexel( gl_FragColor );",JE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,e1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,n1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,i1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,s1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,u1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,d1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,m1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,g1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,S1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,M1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,E1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,C1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,R1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,N1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,k1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,O1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,z1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,B1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,W1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ew=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ow=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ww=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Aw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Rw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ow=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ww=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$w=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:ME,alphahash_pars_fragment:EE,alphamap_fragment:wE,alphamap_pars_fragment:TE,alphatest_fragment:AE,alphatest_pars_fragment:bE,aomap_fragment:CE,aomap_pars_fragment:RE,batching_pars_vertex:PE,batching_vertex:LE,begin_vertex:NE,beginnormal_vertex:DE,bsdfs:UE,iridescence_fragment:IE,bumpmap_pars_fragment:FE,clipping_planes_fragment:kE,clipping_planes_pars_fragment:OE,clipping_planes_pars_vertex:zE,clipping_planes_vertex:BE,color_fragment:HE,color_pars_fragment:GE,color_pars_vertex:VE,color_vertex:jE,common:WE,cube_uv_reflection_fragment:XE,defaultnormal_vertex:qE,displacementmap_pars_vertex:$E,displacementmap_vertex:YE,emissivemap_fragment:KE,emissivemap_pars_fragment:ZE,colorspace_fragment:QE,colorspace_pars_fragment:JE,envmap_fragment:e1,envmap_common_pars_fragment:t1,envmap_pars_fragment:n1,envmap_pars_vertex:i1,envmap_physical_pars_fragment:m1,envmap_vertex:r1,fog_vertex:s1,fog_pars_vertex:a1,fog_fragment:o1,fog_pars_fragment:l1,gradientmap_pars_fragment:c1,lightmap_fragment:u1,lightmap_pars_fragment:d1,lights_lambert_fragment:f1,lights_lambert_pars_fragment:h1,lights_pars_begin:p1,lights_toon_fragment:g1,lights_toon_pars_fragment:v1,lights_phong_fragment:x1,lights_phong_pars_fragment:_1,lights_physical_fragment:y1,lights_physical_pars_fragment:S1,lights_fragment_begin:M1,lights_fragment_maps:E1,lights_fragment_end:w1,logdepthbuf_fragment:T1,logdepthbuf_pars_fragment:A1,logdepthbuf_pars_vertex:b1,logdepthbuf_vertex:C1,map_fragment:R1,map_pars_fragment:P1,map_particle_fragment:L1,map_particle_pars_fragment:N1,metalnessmap_fragment:D1,metalnessmap_pars_fragment:U1,morphcolor_vertex:I1,morphnormal_vertex:F1,morphtarget_pars_vertex:k1,morphtarget_vertex:O1,normal_fragment_begin:z1,normal_fragment_maps:B1,normal_pars_fragment:H1,normal_pars_vertex:G1,normal_vertex:V1,normalmap_pars_fragment:j1,clearcoat_normal_fragment_begin:W1,clearcoat_normal_fragment_maps:X1,clearcoat_pars_fragment:q1,iridescence_pars_fragment:$1,opaque_fragment:Y1,packing:K1,premultiplied_alpha_fragment:Z1,project_vertex:Q1,dithering_fragment:J1,dithering_pars_fragment:ew,roughnessmap_fragment:tw,roughnessmap_pars_fragment:nw,shadowmap_pars_fragment:iw,shadowmap_pars_vertex:rw,shadowmap_vertex:sw,shadowmask_pars_fragment:aw,skinbase_vertex:ow,skinning_pars_vertex:lw,skinning_vertex:cw,skinnormal_vertex:uw,specularmap_fragment:dw,specularmap_pars_fragment:fw,tonemapping_fragment:hw,tonemapping_pars_fragment:pw,transmission_fragment:mw,transmission_pars_fragment:gw,uv_pars_fragment:vw,uv_pars_vertex:xw,uv_vertex:_w,worldpos_vertex:yw,background_vert:Sw,background_frag:Mw,backgroundCube_vert:Ew,backgroundCube_frag:ww,cube_vert:Tw,cube_frag:Aw,depth_vert:bw,depth_frag:Cw,distanceRGBA_vert:Rw,distanceRGBA_frag:Pw,equirect_vert:Lw,equirect_frag:Nw,linedashed_vert:Dw,linedashed_frag:Uw,meshbasic_vert:Iw,meshbasic_frag:Fw,meshlambert_vert:kw,meshlambert_frag:Ow,meshmatcap_vert:zw,meshmatcap_frag:Bw,meshnormal_vert:Hw,meshnormal_frag:Gw,meshphong_vert:Vw,meshphong_frag:jw,meshphysical_vert:Ww,meshphysical_frag:Xw,meshtoon_vert:qw,meshtoon_frag:$w,points_vert:Yw,points_frag:Kw,shadow_vert:Zw,shadow_frag:Qw,sprite_vert:Jw,sprite_frag:eT},oe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Xn={basic:{uniforms:qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new je(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:qt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:qt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new je(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:qt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:qt([oe.points,oe.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:qt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:qt([oe.common,oe.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:qt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:qt([oe.sprite,oe.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:qt([oe.common,oe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:qt([oe.lights,oe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Xn.physical={uniforms:qt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Bo={r:0,b:0,g:0};function tT(t,e,n,i,r,s,a){const o=new je(0);let l=s===!0?0:1,c,d,f=null,h=0,m=null;function _(g,u){let x=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?y(o,l):v&&v.isColor&&(y(v,1),x=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Jl)?(d===void 0&&(d=new fi(new Ja(1,1,1),new Lr({name:"BackgroundCubeMaterial",uniforms:Ds(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=Qe.getTransfer(v.colorSpace)!==rt,(f!==v||h!==v.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=v,h=v.version,m=t.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new fi(new Cf(2,2),new Lr({name:"BackgroundMaterial",uniforms:Ds(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(v.colorSpace)!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function y(g,u){g.getRGB(Bo,I0(t)),i.buffers.color.setClear(Bo.r,Bo.g,Bo.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(g,u=1){o.set(g),l=u,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(o,l)},render:_}}function nT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=g(null);let c=l,d=!1;function f(L,O,q,Z,U){let k=!1;if(a){const j=y(Z,q,O);c!==j&&(c=j,m(c.object)),k=u(L,Z,q,U),k&&x(L,Z,q,U)}else{const j=O.wireframe===!0;(c.geometry!==Z.id||c.program!==q.id||c.wireframe!==j)&&(c.geometry=Z.id,c.program=q.id,c.wireframe=j,k=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,D(L,O,q,Z),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function y(L,O,q){const Z=q.wireframe===!0;let U=o[L.id];U===void 0&&(U={},o[L.id]=U);let k=U[O.id];k===void 0&&(k={},U[O.id]=k);let j=k[Z];return j===void 0&&(j=g(h()),k[Z]=j),j}function g(L){const O=[],q=[],Z=[];for(let U=0;U<r;U++)O[U]=0,q[U]=0,Z[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:Z,object:L,attributes:{},index:null}}function u(L,O,q,Z){const U=c.attributes,k=O.attributes;let j=0;const Y=q.getAttributes();for(const ne in Y)if(Y[ne].location>=0){const $=U[ne];let se=k[ne];if(se===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),$===void 0||$.attribute!==se||se&&$.data!==se.data)return!0;j++}return c.attributesNum!==j||c.index!==Z}function x(L,O,q,Z){const U={},k=O.attributes;let j=0;const Y=q.getAttributes();for(const ne in Y)if(Y[ne].location>=0){let $=k[ne];$===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&($=L.instanceColor));const se={};se.attribute=$,$&&$.data&&(se.data=$.data),U[ne]=se,j++}c.attributes=U,c.attributesNum=j,c.index=Z}function v(){const L=c.newAttributes;for(let O=0,q=L.length;O<q;O++)L[O]=0}function E(L){P(L,0)}function P(L,O){const q=c.newAttributes,Z=c.enabledAttributes,U=c.attributeDivisors;q[L]=1,Z[L]===0&&(t.enableVertexAttribArray(L),Z[L]=1),U[L]!==O&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),U[L]=O)}function R(){const L=c.newAttributes,O=c.enabledAttributes;for(let q=0,Z=O.length;q<Z;q++)O[q]!==L[q]&&(t.disableVertexAttribArray(q),O[q]=0)}function b(L,O,q,Z,U,k,j){j===!0?t.vertexAttribIPointer(L,O,q,U,k):t.vertexAttribPointer(L,O,q,Z,U,k)}function D(L,O,q,Z){if(i.isWebGL2===!1&&(L.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const U=Z.attributes,k=q.getAttributes(),j=O.defaultAttributeValues;for(const Y in k){const ne=k[Y];if(ne.location>=0){let X=U[Y];if(X===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){const $=X.normalized,se=X.itemSize,he=n.get(X);if(he===void 0)continue;const ge=he.buffer,Le=he.type,De=he.bytesPerElement,Te=i.isWebGL2===!0&&(Le===t.INT||Le===t.UNSIGNED_INT||X.gpuType===g0);if(X.isInterleavedBufferAttribute){const qe=X.data,B=qe.stride,jt=X.offset;if(qe.isInstancedInterleavedBuffer){for(let Se=0;Se<ne.locationSize;Se++)P(ne.location+Se,qe.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let Se=0;Se<ne.locationSize;Se++)E(ne.location+Se);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let Se=0;Se<ne.locationSize;Se++)b(ne.location+Se,se/ne.locationSize,Le,$,B*De,(jt+se/ne.locationSize*Se)*De,Te)}else{if(X.isInstancedBufferAttribute){for(let qe=0;qe<ne.locationSize;qe++)P(ne.location+qe,X.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let qe=0;qe<ne.locationSize;qe++)E(ne.location+qe);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let qe=0;qe<ne.locationSize;qe++)b(ne.location+qe,se/ne.locationSize,Le,$,se*De,se/ne.locationSize*qe*De,Te)}}else if(j!==void 0){const $=j[Y];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(ne.location,$);break;case 3:t.vertexAttrib3fv(ne.location,$);break;case 4:t.vertexAttrib4fv(ne.location,$);break;default:t.vertexAttrib1fv(ne.location,$)}}}}R()}function M(){z();for(const L in o){const O=o[L];for(const q in O){const Z=O[q];for(const U in Z)_(Z[U].object),delete Z[U];delete O[q]}delete o[L]}}function S(L){if(o[L.id]===void 0)return;const O=o[L.id];for(const q in O){const Z=O[q];for(const U in Z)_(Z[U].object),delete Z[U];delete O[q]}delete o[L.id]}function T(L){for(const O in o){const q=o[O];if(q[L.id]===void 0)continue;const Z=q[L.id];for(const U in Z)_(Z[U].object),delete Z[U];delete q[L.id]}}function z(){Q(),d=!0,c!==l&&(c=l,m(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:z,resetDefaultState:Q,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:E,disableUnusedAttributes:R}}function iT(t,e,n,i){const r=i.isWebGL2;let s;function a(d){s=d}function o(d,f){t.drawArrays(s,d,f),n.update(f,s,1)}function l(d,f,h){if(h===0)return;let m,_;if(r)m=t,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,d,f,h),n.update(f,s,h)}function c(d,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h;_++)this.render(d[_],f[_]);else{m.multiDrawArraysWEBGL(s,d,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=f[y];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function rT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,E=a||e.has("OES_texture_float"),P=v&&E,R=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:g,maxVaryings:u,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:P,maxSamples:R}}function sT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new fr,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!g)s?d(null):c();else{const x=s?0:i,v=x*4;let E=u.clippingState||null;l.value=E,E=d(_,h,v,m);for(let P=0;P!==v;++P)E[P]=n[P];u.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,_){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const u=m+y*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<u)&&(g=new Float32Array(u));for(let v=0,E=m;v!==y;++v,E+=4)a.copy(f[v]).applyMatrix4(x,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function aT(t){let e=new WeakMap;function n(a,o){return o===pd?a.mapping=Ps:o===md&&(a.mapping=Ls),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===pd||o===md)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new xE(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class oT extends F0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fs=4,cm=[.125,.215,.35,.446,.526,.582],mr=20,ou=new oT,um=new je;let lu=null,cu=0,uu=0;const hr=(1+Math.sqrt(5))/2,Zr=1/hr,dm=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,hr,Zr),new I(0,hr,-Zr),new I(Zr,0,hr),new I(-Zr,0,hr),new I(hr,Zr,0),new I(-hr,Zr,0)];class fm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lu,cu,uu),e.scissorTest=!1,Ho(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ps||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Ga,format:zn,colorSpace:_i,depthBuffer:!1},r=hm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lT(s)),this._blurMaterial=cT(s,e,n)}return r}_compileMaterial(e){const n=new fi(this._lodPlanes[0],e);this._renderer.compile(n,ou)}_sceneToCubeUV(e,n,i,r){const o=new hn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(um),d.toneMapping=qi,d.autoClear=!1;const m=new N0({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),_=new fi(new Ja,m);let y=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,y=!0):(m.color.copy(um),y=!0);for(let u=0;u<6;u++){const x=u%3;x===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):x===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const v=this._cubeSize;Ho(r,x*v,u>2?v:0,v,v),d.setRenderTarget(r),y&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ps||e.mapping===Ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new fi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ho(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ou)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dm[(r-1)%dm.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new fi(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*mr-1),y=s/_,g=isFinite(s)?1+Math.floor(d*y):mr;g>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${mr}`);const u=[];let x=0;for(let b=0;b<mr;++b){const D=b/y,M=Math.exp(-D*D/2);u.push(M),b===0?x+=M:b<g&&(x+=2*M)}for(let b=0;b<u.length;b++)u[b]=u[b]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const E=this._sizeLods[r],P=3*E*(r>v-fs?r-v+fs:0),R=4*(this._cubeSize-E);Ho(n,P,R,3*E,2*E),l.setRenderTarget(n),l.render(f,ou)}}function lT(t){const e=[],n=[],i=[];let r=t;const s=t-fs+1+cm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-fs?l=cm[a-t+fs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,y=3,g=2,u=1,x=new Float32Array(y*_*m),v=new Float32Array(g*_*m),E=new Float32Array(u*_*m);for(let R=0;R<m;R++){const b=R%3*2/3-1,D=R>2?0:-1,M=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];x.set(M,y*_*R),v.set(h,g*_*R);const S=[R,R,R,R,R,R];E.set(S,u*_*R)}const P=new ir;P.setAttribute("position",new Zn(x,y)),P.setAttribute("uv",new Zn(v,g)),P.setAttribute("faceIndex",new Zn(E,u)),e.push(P),r>fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function hm(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=Jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ho(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function cT(t,e,n){const i=new Float32Array(mr),r=new I(0,1,0);return new Lr({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function pm(){return new Lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function mm(){return new Lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Rf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===pd||l===md,d=l===Ps||l===Ls;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new fm(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new fm(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function dT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fT(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let g=0,u=y.length;g<u;g++)e.remove(y[g])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const y=m[_];for(let g=0,u=y.length;g<u;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let y=0;if(m!==null){const x=m.array;y=m.version;for(let v=0,E=x.length;v<E;v+=3){const P=x[v+0],R=x[v+1],b=x[v+2];h.push(P,R,R,b,b,P)}}else if(_!==void 0){const x=_.array;y=_.version;for(let v=0,E=x.length/3-1;v<E;v+=3){const P=v+0,R=v+1,b=v+2;h.push(P,R,R,b,b,P)}}else return;const g=new(A0(h)?U0:D0)(h,1);g.version=y;const u=s.get(f);u&&e.remove(u),s.set(f,g)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function hT(t,e,n,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function d(m,_){t.drawElements(s,_,o,m*l),n.update(_,s,1)}function f(m,_,y){if(y===0)return;let g,u;if(r)g=t,u="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[u](s,_,o,m*l,y),n.update(_,s,y)}function h(m,_,y){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<y;u++)this.render(m[u]/l,_[u]);else{g.multiDrawElementsWEBGL(s,_,0,o,m,0,y);let u=0;for(let x=0;x<y;x++)u+=_[x];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function pT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function mT(t,e){return t[0]-e[0]}function gT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function vT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new ot,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=m!==void 0?m.length:0;let y=s.get(d);if(y===void 0||y.count!==_){let L=function(){z.dispose(),s.delete(d),d.removeEventListener("dispose",L)};y!==void 0&&y.texture.dispose();const x=d.morphAttributes.position!==void 0,v=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,P=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let D=0;x===!0&&(D=1),v===!0&&(D=2),E===!0&&(D=3);let M=d.attributes.position.count*D,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const T=new Float32Array(M*S*4*_),z=new R0(T,M,S,_);z.type=Fi,z.needsUpdate=!0;const Q=D*4;for(let O=0;O<_;O++){const q=P[O],Z=R[O],U=b[O],k=M*S*4*O;for(let j=0;j<q.count;j++){const Y=j*Q;x===!0&&(a.fromBufferAttribute(q,j),T[k+Y+0]=a.x,T[k+Y+1]=a.y,T[k+Y+2]=a.z,T[k+Y+3]=0),v===!0&&(a.fromBufferAttribute(Z,j),T[k+Y+4]=a.x,T[k+Y+5]=a.y,T[k+Y+6]=a.z,T[k+Y+7]=0),E===!0&&(a.fromBufferAttribute(U,j),T[k+Y+8]=a.x,T[k+Y+9]=a.y,T[k+Y+10]=a.z,T[k+Y+11]=U.itemSize===4?a.w:1)}}y={count:_,texture:z,size:new We(M,S)},s.set(d,y),d.addEventListener("dispose",L)}let g=0;for(let x=0;x<h.length;x++)g+=h[x];const u=d.morphTargetsRelative?1:1-g;f.getUniforms().setValue(t,"morphTargetBaseInfluence",u),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",y.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",y.size)}else{const m=h===void 0?0:h.length;let _=i[d.id];if(_===void 0||_.length!==m){_=[];for(let v=0;v<m;v++)_[v]=[v,0];i[d.id]=_}for(let v=0;v<m;v++){const E=_[v];E[0]=v,E[1]=h[v]}_.sort(gT);for(let v=0;v<8;v++)v<m&&_[v][1]?(o[v][0]=_[v][0],o[v][1]=_[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(mT);const y=d.morphAttributes.position,g=d.morphAttributes.normal;let u=0;for(let v=0;v<8;v++){const E=o[v],P=E[0],R=E[1];P!==Number.MAX_SAFE_INTEGER&&R?(y&&d.getAttribute("morphTarget"+v)!==y[P]&&d.setAttribute("morphTarget"+v,y[P]),g&&d.getAttribute("morphNormal"+v)!==g[P]&&d.setAttribute("morphNormal"+v,g[P]),r[v]=R,u+=R):(y&&d.hasAttribute("morphTarget"+v)===!0&&d.deleteAttribute("morphTarget"+v),g&&d.hasAttribute("morphNormal"+v)===!0&&d.deleteAttribute("morphNormal"+v),r[v]=0)}const x=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function xT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class z0 extends gn{constructor(e,n,i,r,s,a,o,l,c,d){if(d=d!==void 0?d:Er,d!==Er&&d!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Er&&(i=Ii),i===void 0&&d===Ns&&(i=Mr),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const B0=new gn,H0=new z0(1,1);H0.compareFunction=T0;const G0=new R0,V0=new eE,j0=new k0,gm=[],vm=[],xm=new Float32Array(16),_m=new Float32Array(9),ym=new Float32Array(4);function Hs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=gm[r];if(s===void 0&&(s=new Float32Array(r),gm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function nc(t,e){let n=vm[e];n===void 0&&(n=new Int32Array(e),vm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function _T(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function ET(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(At(n,i))return;ym.set(i),t.uniformMatrix2fv(this.addr,!1,ym),bt(n,i)}}function wT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(At(n,i))return;_m.set(i),t.uniformMatrix3fv(this.addr,!1,_m),bt(n,i)}}function TT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(At(n,i))return;xm.set(i),t.uniformMatrix4fv(this.addr,!1,xm),bt(n,i)}}function AT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function PT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function UT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?H0:B0;n.setTexture2D(e||s,r)}function IT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||V0,r)}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||j0,r)}function kT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||G0,r)}function OT(t){switch(t){case 5126:return _T;case 35664:return yT;case 35665:return ST;case 35666:return MT;case 35674:return ET;case 35675:return wT;case 35676:return TT;case 5124:case 35670:return AT;case 35667:case 35671:return bT;case 35668:case 35672:return CT;case 35669:case 35673:return RT;case 5125:return PT;case 36294:return LT;case 36295:return NT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return kT}}function zT(t,e){t.uniform1fv(this.addr,e)}function BT(t,e){const n=Hs(e,this.size,2);t.uniform2fv(this.addr,n)}function HT(t,e){const n=Hs(e,this.size,3);t.uniform3fv(this.addr,n)}function GT(t,e){const n=Hs(e,this.size,4);t.uniform4fv(this.addr,n)}function VT(t,e){const n=Hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jT(t,e){const n=Hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function WT(t,e){const n=Hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function XT(t,e){t.uniform1iv(this.addr,e)}function qT(t,e){t.uniform2iv(this.addr,e)}function $T(t,e){t.uniform3iv(this.addr,e)}function YT(t,e){t.uniform4iv(this.addr,e)}function KT(t,e){t.uniform1uiv(this.addr,e)}function ZT(t,e){t.uniform2uiv(this.addr,e)}function QT(t,e){t.uniform3uiv(this.addr,e)}function JT(t,e){t.uniform4uiv(this.addr,e)}function eA(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||B0,s[a])}function tA(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||V0,s[a])}function nA(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||j0,s[a])}function iA(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||G0,s[a])}function rA(t){switch(t){case 5126:return zT;case 35664:return BT;case 35665:return HT;case 35666:return GT;case 35674:return VT;case 35675:return jT;case 35676:return WT;case 5124:case 35670:return XT;case 35667:case 35671:return qT;case 35668:case 35672:return $T;case 35669:case 35673:return YT;case 5125:return KT;case 36294:return ZT;case 36295:return QT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return eA;case 35679:case 36299:case 36307:return tA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}class sA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=OT(n.type)}}class aA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rA(n.type)}}class oA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const du=/(\w+)(\])?(\[|\.)?/g;function Sm(t,e){t.seq.push(e),t.map[e.id]=e}function lA(t,e,n){const i=t.name,r=i.length;for(du.lastIndex=0;;){const s=du.exec(i),a=du.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Sm(n,c===void 0?new sA(o,t,e):new aA(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new oA(o),Sm(n,f)),n=f}}}class el{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);lA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Mm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const cA=37297;let uA=0;function dA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function fA(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===Pl&&n===Rl?i="LinearDisplayP3ToLinearSRGB":e===Rl&&n===Pl&&(i="LinearSRGBToLinearDisplayP3"),t){case _i:case ec:return[i,"LinearTransferOETF"];case Nt:case Tf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Em(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+dA(t.getShaderSource(e),a)}else return r}function hA(t,e){const n=fA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function pA(t,e){let n;switch(e){case EM:n="Linear";break;case wM:n="Reinhard";break;case TM:n="OptimizedCineon";break;case AM:n="ACESFilmic";break;case CM:n="AgX";break;case bM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function mA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hs).join(`
`)}function gA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(hs).join(`
`)}function vA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function xA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function hs(t){return t!==""}function wm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _A=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sd(t){return t.replace(_A,SA)}const yA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function SA(t,e){let n=Ie[e];if(n===void 0){const i=yA.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sd(n)}const MA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(t){return t.replace(MA,EA)}function EA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===h0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ZS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function TA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ps:case Ls:e="ENVMAP_TYPE_CUBE";break;case Jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function bA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case p0:e="ENVMAP_BLENDING_MULTIPLY";break;case SM:e="ENVMAP_BLENDING_MIX";break;case MM:e="ENVMAP_BLENDING_ADD";break}return e}function CA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function RA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=wA(n),c=TA(n),d=AA(n),f=bA(n),h=CA(n),m=n.isWebGL2?"":mA(n),_=gA(n),y=vA(s),g=r.createProgram();let u,x,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(hs).join(`
`),u.length>0&&(u+=`
`),x=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(hs).join(`
`),x.length>0&&(x+=`
`)):(u=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),x=[m,bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?Ie.tonemapping_pars_fragment:"",n.toneMapping!==qi?pA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,hA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hs).join(`
`)),a=Sd(a),a=wm(a,n),a=Tm(a,n),o=Sd(o),o=wm(o,n),o=Tm(o,n),a=Am(a),o=Am(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const E=v+u+a,P=v+x+o,R=Mm(r,r.VERTEX_SHADER,E),b=Mm(r,r.FRAGMENT_SHADER,P);r.attachShader(g,R),r.attachShader(g,b),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function D(z){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(g).trim(),L=r.getShaderInfoLog(R).trim(),O=r.getShaderInfoLog(b).trim();let q=!0,Z=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,R,b);else{const U=Em(r,R,"vertex"),k=Em(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+U+`
`+k)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(L===""||O==="")&&(Z=!1);Z&&(z.diagnostics={runnable:q,programLog:Q,vertexShader:{log:L,prefix:u},fragmentShader:{log:O,prefix:x}})}r.deleteShader(R),r.deleteShader(b),M=new el(r,g),S=xA(r,g)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(g,cA)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uA++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=b,this}let PA=0;class LA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new NA(e),n.set(e,i)),i}}class NA{constructor(e){this.id=PA++,this.code=e,this.usedTimes=0}}function DA(t,e,n,i,r,s,a){const o=new P0,l=new LA,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function g(M,S,T,z,Q){const L=z.fog,O=Q.geometry,q=M.isMeshStandardMaterial?z.environment:null,Z=(M.isMeshStandardMaterial?n:e).get(M.envMap||q),U=Z&&Z.mapping===Jl?Z.image.height:null,k=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Y=j!==void 0?j.length:0;let ne=0;O.morphAttributes.position!==void 0&&(ne=1),O.morphAttributes.normal!==void 0&&(ne=2),O.morphAttributes.color!==void 0&&(ne=3);let X,$,se,he;if(k){const Wt=Xn[k];X=Wt.vertexShader,$=Wt.fragmentShader}else X=M.vertexShader,$=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),he=l.getFragmentShaderID(M);const ge=t.getRenderTarget(),Le=Q.isInstancedMesh===!0,De=Q.isBatchedMesh===!0,Te=!!M.map,qe=!!M.matcap,B=!!Z,jt=!!M.aoMap,Se=!!M.lightMap,Re=!!M.bumpMap,ve=!!M.normalMap,ct=!!M.displacementMap,Fe=!!M.emissiveMap,C=!!M.metalnessMap,w=!!M.roughnessMap,G=M.anisotropy>0,ie=M.clearcoat>0,ee=M.iridescence>0,re=M.sheen>0,xe=M.transmission>0,ue=G&&!!M.anisotropyMap,pe=ie&&!!M.clearcoatMap,we=ie&&!!M.clearcoatNormalMap,ke=ie&&!!M.clearcoatRoughnessMap,J=ee&&!!M.iridescenceMap,Ze=ee&&!!M.iridescenceThicknessMap,Ge=re&&!!M.sheenColorMap,Ce=re&&!!M.sheenRoughnessMap,ye=!!M.specularMap,me=!!M.specularColorMap,Ue=!!M.specularIntensityMap,Ye=xe&&!!M.transmissionMap,pt=xe&&!!M.thicknessMap,ze=!!M.gradientMap,ae=!!M.alphaMap,N=M.alphaTest>0,le=!!M.alphaHash,ce=!!M.extensions,Ae=!!O.attributes.uv1,Me=!!O.attributes.uv2,Je=!!O.attributes.uv3;let et=qi;return M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(et=t.toneMapping),{isWebGL2:d,shaderID:k,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:$,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:he,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:De,instancing:Le,instancingColor:Le&&Q.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ge===null?t.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:_i,map:Te,matcap:qe,envMap:B,envMapMode:B&&Z.mapping,envMapCubeUVHeight:U,aoMap:jt,lightMap:Se,bumpMap:Re,normalMap:ve,displacementMap:h&&ct,emissiveMap:Fe,normalMapObjectSpace:ve&&M.normalMapType===BM,normalMapTangentSpace:ve&&M.normalMapType===w0,metalnessMap:C,roughnessMap:w,anisotropy:G,anisotropyMap:ue,clearcoat:ie,clearcoatMap:pe,clearcoatNormalMap:we,clearcoatRoughnessMap:ke,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:Ze,sheen:re,sheenColorMap:Ge,sheenRoughnessMap:Ce,specularMap:ye,specularColorMap:me,specularIntensityMap:Ue,transmission:xe,transmissionMap:Ye,thicknessMap:pt,gradientMap:ze,opaque:M.transparent===!1&&M.blending===ys,alphaMap:ae,alphaTest:N,alphaHash:le,combine:M.combine,mapUv:Te&&y(M.map.channel),aoMapUv:jt&&y(M.aoMap.channel),lightMapUv:Se&&y(M.lightMap.channel),bumpMapUv:Re&&y(M.bumpMap.channel),normalMapUv:ve&&y(M.normalMap.channel),displacementMapUv:ct&&y(M.displacementMap.channel),emissiveMapUv:Fe&&y(M.emissiveMap.channel),metalnessMapUv:C&&y(M.metalnessMap.channel),roughnessMapUv:w&&y(M.roughnessMap.channel),anisotropyMapUv:ue&&y(M.anisotropyMap.channel),clearcoatMapUv:pe&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:we&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&y(M.sheenRoughnessMap.channel),specularMapUv:ye&&y(M.specularMap.channel),specularColorMapUv:me&&y(M.specularColorMap.channel),specularIntensityMapUv:Ue&&y(M.specularIntensityMap.channel),transmissionMapUv:Ye&&y(M.transmissionMap.channel),thicknessMapUv:pt&&y(M.thicknessMap.channel),alphaMapUv:ae&&y(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ve||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Me,vertexUv3s:Je,pointsUvs:Q.isPoints===!0&&!!O.attributes.uv&&(Te||ae),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&T.length>0,shadowMapType:t.shadowMap.type,toneMapping:et,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Te&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===li,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ce&&M.extensions.derivatives===!0,extensionFragDepth:ce&&M.extensions.fragDepth===!0,extensionDrawBuffers:ce&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const T in M.defines)S.push(T),S.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(x(S,M),v(S,M),S.push(t.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function E(M){const S=_[M.type];let T;if(S){const z=Xn[S];T=pE.clone(z.uniforms)}else T=M.uniforms;return T}function P(M,S){let T;for(let z=0,Q=c.length;z<Q;z++){const L=c[z];if(L.cacheKey===S){T=L,++T.usedTimes;break}}return T===void 0&&(T=new RA(t,S,M,s),c.push(T)),T}function R(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function b(M){l.remove(M)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:E,acquireProgram:P,releaseProgram:R,releaseShaderCache:b,programs:c,dispose:D}}function UA(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function IA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Cm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Rm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,m,_,y,g){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:y,group:g},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=y,u.group=g),e++,u}function o(f,h,m,_,y,g){const u=a(f,h,m,_,y,g);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(f,h,m,_,y,g){const u=a(f,h,m,_,y,g);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||IA),i.length>1&&i.sort(h||Cm),r.length>1&&r.sort(h||Cm)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function FA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Rm,t.set(i,[a])):r>=s.length?(a=new Rm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function kA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new je};break;case"SpotLight":n={position:new I,direction:new I,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function OA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let zA=0;function BA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function HA(t,e){const n=new kA,i=OA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new I);const s=new I,a=new Et,o=new Et;function l(d,f){let h=0,m=0,_=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let y=0,g=0,u=0,x=0,v=0,E=0,P=0,R=0,b=0,D=0,M=0;d.sort(BA);const S=f===!0?Math.PI:1;for(let z=0,Q=d.length;z<Q;z++){const L=d[z],O=L.color,q=L.intensity,Z=L.distance,U=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*q*S,m+=O.g*q*S,_+=O.b*q*S;else if(L.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(L.sh.coefficients[k],q);M++}else if(L.isDirectionalLight){const k=n.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){const j=L.shadow,Y=i.get(L);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=U,r.directionalShadowMatrix[y]=L.shadow.matrix,E++}r.directional[y]=k,y++}else if(L.isSpotLight){const k=n.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(O).multiplyScalar(q*S),k.distance=Z,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,r.spot[u]=k;const j=L.shadow;if(L.map&&(r.spotLightMap[b]=L.map,b++,j.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[u]=j.matrix,L.castShadow){const Y=i.get(L);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.spotShadow[u]=Y,r.spotShadowMap[u]=U,R++}u++}else if(L.isRectAreaLight){const k=n.get(L);k.color.copy(O).multiplyScalar(q),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),r.rectArea[x]=k,x++}else if(L.isPointLight){const k=n.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*S),k.distance=L.distance,k.decay=L.decay,L.castShadow){const j=L.shadow,Y=i.get(L);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,r.pointShadow[g]=Y,r.pointShadowMap[g]=U,r.pointShadowMatrix[g]=L.shadow.matrix,P++}r.point[g]=k,g++}else if(L.isHemisphereLight){const k=n.get(L);k.skyColor.copy(L.color).multiplyScalar(q*S),k.groundColor.copy(L.groundColor).multiplyScalar(q*S),r.hemi[v]=k,v++}}x>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==y||T.pointLength!==g||T.spotLength!==u||T.rectAreaLength!==x||T.hemiLength!==v||T.numDirectionalShadows!==E||T.numPointShadows!==P||T.numSpotShadows!==R||T.numSpotMaps!==b||T.numLightProbes!==M)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=x,r.point.length=g,r.hemi.length=v,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+b-D,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=M,T.directionalLength=y,T.pointLength=g,T.spotLength=u,T.rectAreaLength=x,T.hemiLength=v,T.numDirectionalShadows=E,T.numPointShadows=P,T.numSpotShadows=R,T.numSpotMaps=b,T.numLightProbes=M,r.version=zA++)}function c(d,f){let h=0,m=0,_=0,y=0,g=0;const u=f.matrixWorldInverse;for(let x=0,v=d.length;x<v;x++){const E=d[x];if(E.isDirectionalLight){const P=r.directional[h];P.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),h++}else if(E.isSpotLight){const P=r.spot[_];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(u),P.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),_++}else if(E.isRectAreaLight){const P=r.rectArea[y];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(u),o.identity(),a.copy(E.matrixWorld),a.premultiply(u),o.extractRotation(a),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),y++}else if(E.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(u),m++}else if(E.isHemisphereLight){const P=r.hemi[g];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(u),g++}}}return{setup:l,setupView:c,state:r}}function Pm(t,e){const n=new HA(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function GA(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Pm(t,e),n.set(s,[l])):a>=o.length?(l=new Pm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class VA extends Qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jA extends Qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qA(t,e,n){let i=new bf;const r=new We,s=new We,a=new ot,o=new VA({depthPacking:zM}),l=new jA,c={},d=n.maxTextureSize,f={[Zi]:on,[on]:Zi,[li]:li},h=new Lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:WA,fragmentShader:XA}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new ir;_.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new fi(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=h0;let u=this.type;this.render=function(R,b,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const M=t.getRenderTarget(),S=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Xi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const Q=u!==si&&this.type===si,L=u===si&&this.type!==si;for(let O=0,q=R.length;O<q;O++){const Z=R[O],U=Z.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const k=U.getFrameExtents();if(r.multiply(k),s.copy(U.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/k.x),r.x=s.x*k.x,U.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/k.y),r.y=s.y*k.y,U.mapSize.y=s.y)),U.map===null||Q===!0||L===!0){const Y=this.type!==si?{minFilter:Yt,magFilter:Yt}:{};U.map!==null&&U.map.dispose(),U.map=new Pr(r.x,r.y,Y),U.map.texture.name=Z.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const j=U.getViewportCount();for(let Y=0;Y<j;Y++){const ne=U.getViewport(Y);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),z.viewport(a),U.updateMatrices(Z,Y),i=U.getFrustum(),E(b,D,U.camera,Z,this.type)}U.isPointLightShadow!==!0&&this.type===si&&x(U,D),U.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(M,S,T)};function x(R,b){const D=e.update(y);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Pr(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(b,null,D,h,y,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(b,null,D,m,y,null)}function v(R,b,D,M){let S=null;const T=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)S=T;else if(S=D.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=S.uuid,Q=b.uuid;let L=c[z];L===void 0&&(L={},c[z]=L);let O=L[Q];O===void 0&&(O=S.clone(),L[Q]=O,b.addEventListener("dispose",P)),S=O}if(S.visible=b.visible,S.wireframe=b.wireframe,M===si?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:f[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=t.properties.get(S);z.light=D}return S}function E(R,b,D,M,S){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===si)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const Q=e.update(R),L=R.material;if(Array.isArray(L)){const O=Q.groups;for(let q=0,Z=O.length;q<Z;q++){const U=O[q],k=L[U.materialIndex];if(k&&k.visible){const j=v(R,k,M,S);R.onBeforeShadow(t,R,b,D,Q,j,U),t.renderBufferDirect(D,null,Q,j,R,U),R.onAfterShadow(t,R,b,D,Q,j,U)}}}else if(L.visible){const O=v(R,L,M,S);R.onBeforeShadow(t,R,b,D,Q,O,null),t.renderBufferDirect(D,null,Q,O,R,null),R.onAfterShadow(t,R,b,D,Q,O,null)}}const z=R.children;for(let Q=0,L=z.length;Q<L;Q++)E(z[Q],b,D,M,S)}function P(R){R.target.removeEventListener("dispose",P);for(const D in c){const M=c[D],S=R.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function $A(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const le=new ot;let ce=null;const Ae=new ot(0,0,0,0);return{setMask:function(Me){ce!==Me&&!N&&(t.colorMask(Me,Me,Me,Me),ce=Me)},setLocked:function(Me){N=Me},setClear:function(Me,Je,et,Ct,Wt){Wt===!0&&(Me*=Ct,Je*=Ct,et*=Ct),le.set(Me,Je,et,Ct),Ae.equals(le)===!1&&(t.clearColor(Me,Je,et,Ct),Ae.copy(le))},reset:function(){N=!1,ce=null,Ae.set(-1,0,0,0)}}}function s(){let N=!1,le=null,ce=null,Ae=null;return{setTest:function(Me){Me?De(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(Me){le!==Me&&!N&&(t.depthMask(Me),le=Me)},setFunc:function(Me){if(ce!==Me){switch(Me){case pM:t.depthFunc(t.NEVER);break;case mM:t.depthFunc(t.ALWAYS);break;case gM:t.depthFunc(t.LESS);break;case bl:t.depthFunc(t.LEQUAL);break;case vM:t.depthFunc(t.EQUAL);break;case xM:t.depthFunc(t.GEQUAL);break;case _M:t.depthFunc(t.GREATER);break;case yM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ce=Me}},setLocked:function(Me){N=Me},setClear:function(Me){Ae!==Me&&(t.clearDepth(Me),Ae=Me)},reset:function(){N=!1,le=null,ce=null,Ae=null}}}function a(){let N=!1,le=null,ce=null,Ae=null,Me=null,Je=null,et=null,Ct=null,Wt=null;return{setTest:function(tt){N||(tt?De(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(tt){le!==tt&&!N&&(t.stencilMask(tt),le=tt)},setFunc:function(tt,Xt,Vn){(ce!==tt||Ae!==Xt||Me!==Vn)&&(t.stencilFunc(tt,Xt,Vn),ce=tt,Ae=Xt,Me=Vn)},setOp:function(tt,Xt,Vn){(Je!==tt||et!==Xt||Ct!==Vn)&&(t.stencilOp(tt,Xt,Vn),Je=tt,et=Xt,Ct=Vn)},setLocked:function(tt){N=tt},setClear:function(tt){Wt!==tt&&(t.clearStencil(tt),Wt=tt)},reset:function(){N=!1,le=null,ce=null,Ae=null,Me=null,Je=null,et=null,Ct=null,Wt=null}}}const o=new r,l=new s,c=new a,d=new WeakMap,f=new WeakMap;let h={},m={},_=new WeakMap,y=[],g=null,u=!1,x=null,v=null,E=null,P=null,R=null,b=null,D=null,M=new je(0,0,0),S=0,T=!1,z=null,Q=null,L=null,O=null,q=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,k=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(j)[1]),U=k>=1):j.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),U=k>=2);let Y=null,ne={};const X=t.getParameter(t.SCISSOR_BOX),$=t.getParameter(t.VIEWPORT),se=new ot().fromArray(X),he=new ot().fromArray($);function ge(N,le,ce,Ae){const Me=new Uint8Array(4),Je=t.createTexture();t.bindTexture(N,Je),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<ce;et++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,Ae,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(le+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return Je}const Le={};Le[t.TEXTURE_2D]=ge(t.TEXTURE_2D,t.TEXTURE_2D,1),Le[t.TEXTURE_CUBE_MAP]=ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[t.TEXTURE_2D_ARRAY]=ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Le[t.TEXTURE_3D]=ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(t.DEPTH_TEST),l.setFunc(bl),Fe(!1),C(dp),De(t.CULL_FACE),ve(Xi);function De(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function Te(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function qe(N,le){return m[N]!==le?(t.bindFramebuffer(N,le),m[N]=le,i&&(N===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=le),N===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function B(N,le){let ce=y,Ae=!1;if(N)if(ce=_.get(le),ce===void 0&&(ce=[],_.set(le,ce)),N.isWebGLMultipleRenderTargets){const Me=N.texture;if(ce.length!==Me.length||ce[0]!==t.COLOR_ATTACHMENT0){for(let Je=0,et=Me.length;Je<et;Je++)ce[Je]=t.COLOR_ATTACHMENT0+Je;ce.length=Me.length,Ae=!0}}else ce[0]!==t.COLOR_ATTACHMENT0&&(ce[0]=t.COLOR_ATTACHMENT0,Ae=!0);else ce[0]!==t.BACK&&(ce[0]=t.BACK,Ae=!0);Ae&&(n.isWebGL2?t.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function jt(N){return g!==N?(t.useProgram(N),g=N,!0):!1}const Se={[pr]:t.FUNC_ADD,[JS]:t.FUNC_SUBTRACT,[eM]:t.FUNC_REVERSE_SUBTRACT};if(i)Se[mp]=t.MIN,Se[gp]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Se[mp]=N.MIN_EXT,Se[gp]=N.MAX_EXT)}const Re={[tM]:t.ZERO,[nM]:t.ONE,[iM]:t.SRC_COLOR,[fd]:t.SRC_ALPHA,[cM]:t.SRC_ALPHA_SATURATE,[oM]:t.DST_COLOR,[sM]:t.DST_ALPHA,[rM]:t.ONE_MINUS_SRC_COLOR,[hd]:t.ONE_MINUS_SRC_ALPHA,[lM]:t.ONE_MINUS_DST_COLOR,[aM]:t.ONE_MINUS_DST_ALPHA,[uM]:t.CONSTANT_COLOR,[dM]:t.ONE_MINUS_CONSTANT_COLOR,[fM]:t.CONSTANT_ALPHA,[hM]:t.ONE_MINUS_CONSTANT_ALPHA};function ve(N,le,ce,Ae,Me,Je,et,Ct,Wt,tt){if(N===Xi){u===!0&&(Te(t.BLEND),u=!1);return}if(u===!1&&(De(t.BLEND),u=!0),N!==QS){if(N!==x||tt!==T){if((v!==pr||R!==pr)&&(t.blendEquation(t.FUNC_ADD),v=pr,R=pr),tt)switch(N){case ys:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fp:t.blendFunc(t.ONE,t.ONE);break;case hp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case pp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ys:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case hp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case pp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,P=null,b=null,D=null,M.set(0,0,0),S=0,x=N,T=tt}return}Me=Me||le,Je=Je||ce,et=et||Ae,(le!==v||Me!==R)&&(t.blendEquationSeparate(Se[le],Se[Me]),v=le,R=Me),(ce!==E||Ae!==P||Je!==b||et!==D)&&(t.blendFuncSeparate(Re[ce],Re[Ae],Re[Je],Re[et]),E=ce,P=Ae,b=Je,D=et),(Ct.equals(M)===!1||Wt!==S)&&(t.blendColor(Ct.r,Ct.g,Ct.b,Wt),M.copy(Ct),S=Wt),x=N,T=!1}function ct(N,le){N.side===li?Te(t.CULL_FACE):De(t.CULL_FACE);let ce=N.side===on;le&&(ce=!ce),Fe(ce),N.blending===ys&&N.transparent===!1?ve(Xi):ve(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const Ae=N.stencilWrite;c.setTest(Ae),Ae&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),G(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?De(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(N){z!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),z=N)}function C(N){N!==YS?(De(t.CULL_FACE),N!==Q&&(N===dp?t.cullFace(t.BACK):N===KS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),Q=N}function w(N){N!==L&&(U&&t.lineWidth(N),L=N)}function G(N,le,ce){N?(De(t.POLYGON_OFFSET_FILL),(O!==le||q!==ce)&&(t.polygonOffset(le,ce),O=le,q=ce)):Te(t.POLYGON_OFFSET_FILL)}function ie(N){N?De(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function ee(N){N===void 0&&(N=t.TEXTURE0+Z-1),Y!==N&&(t.activeTexture(N),Y=N)}function re(N,le,ce){ce===void 0&&(Y===null?ce=t.TEXTURE0+Z-1:ce=Y);let Ae=ne[ce];Ae===void 0&&(Ae={type:void 0,texture:void 0},ne[ce]=Ae),(Ae.type!==N||Ae.texture!==le)&&(Y!==ce&&(t.activeTexture(ce),Y=ce),t.bindTexture(N,le||Le[N]),Ae.type=N,Ae.texture=le)}function xe(){const N=ne[Y];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ue(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(N){se.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),se.copy(N))}function Ye(N){he.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),he.copy(N))}function pt(N,le){let ce=f.get(le);ce===void 0&&(ce=new WeakMap,f.set(le,ce));let Ae=ce.get(N);Ae===void 0&&(Ae=t.getUniformBlockIndex(le,N.name),ce.set(N,Ae))}function ze(N,le){const Ae=f.get(le).get(N);d.get(le)!==Ae&&(t.uniformBlockBinding(le,Ae,N.__bindingPointIndex),d.set(le,Ae))}function ae(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Y=null,ne={},m={},_=new WeakMap,y=[],g=null,u=!1,x=null,v=null,E=null,P=null,R=null,b=null,D=null,M=new je(0,0,0),S=0,T=!1,z=null,Q=null,L=null,O=null,q=null,se.set(0,0,t.canvas.width,t.canvas.height),he.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:De,disable:Te,bindFramebuffer:qe,drawBuffers:B,useProgram:jt,setBlending:ve,setMaterial:ct,setFlipSided:Fe,setCullFace:C,setLineWidth:w,setPolygonOffset:G,setScissorTest:ie,activeTexture:ee,bindTexture:re,unbindTexture:xe,compressedTexImage2D:ue,compressedTexImage3D:pe,texImage2D:ye,texImage3D:me,updateUBOMapping:pt,uniformBlockBinding:ze,texStorage2D:Ge,texStorage3D:Ce,texSubImage2D:we,texSubImage3D:ke,compressedTexSubImage2D:J,compressedTexSubImage3D:Ze,scissor:Ue,viewport:Ye,reset:ae}}function YA(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,w){return m?new OffscreenCanvas(C,w):Nl("canvas")}function y(C,w,G,ie){let ee=1;if((C.width>ie||C.height>ie)&&(ee=ie/Math.max(C.width,C.height)),ee<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const re=w?yd:Math.floor,xe=re(ee*C.width),ue=re(ee*C.height);f===void 0&&(f=_(xe,ue));const pe=G?_(xe,ue):f;return pe.width=xe,pe.height=ue,pe.getContext("2d").drawImage(C,0,0,xe,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+xe+"x"+ue+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return Xp(C.width)&&Xp(C.height)}function u(C){return o?!1:C.wrapS!==On||C.wrapT!==On||C.minFilter!==Yt&&C.minFilter!==wn}function x(C,w){return C.generateMipmaps&&w&&C.minFilter!==Yt&&C.minFilter!==wn}function v(C){t.generateMipmap(C)}function E(C,w,G,ie,ee=!1){if(o===!1)return w;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let re=w;if(w===t.RED&&(G===t.FLOAT&&(re=t.R32F),G===t.HALF_FLOAT&&(re=t.R16F),G===t.UNSIGNED_BYTE&&(re=t.R8)),w===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(re=t.R8UI),G===t.UNSIGNED_SHORT&&(re=t.R16UI),G===t.UNSIGNED_INT&&(re=t.R32UI),G===t.BYTE&&(re=t.R8I),G===t.SHORT&&(re=t.R16I),G===t.INT&&(re=t.R32I)),w===t.RG&&(G===t.FLOAT&&(re=t.RG32F),G===t.HALF_FLOAT&&(re=t.RG16F),G===t.UNSIGNED_BYTE&&(re=t.RG8)),w===t.RGBA){const xe=ee?Cl:Qe.getTransfer(ie);G===t.FLOAT&&(re=t.RGBA32F),G===t.HALF_FLOAT&&(re=t.RGBA16F),G===t.UNSIGNED_BYTE&&(re=xe===rt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function P(C,w,G){return x(C,G)===!0||C.isFramebufferTexture&&C.minFilter!==Yt&&C.minFilter!==wn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function R(C){return C===Yt||C===vp||C===Fc?t.NEAREST:t.LINEAR}function b(C){const w=C.target;w.removeEventListener("dispose",b),M(w),w.isVideoTexture&&d.delete(w)}function D(C){const w=C.target;w.removeEventListener("dispose",D),T(w)}function M(C){const w=i.get(C);if(w.__webglInit===void 0)return;const G=C.source,ie=h.get(G);if(ie){const ee=ie[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(C),Object.keys(ie).length===0&&h.delete(G)}i.remove(C)}function S(C){const w=i.get(C);t.deleteTexture(w.__webglTexture);const G=C.source,ie=h.get(G);delete ie[w.__cacheKey],a.memory.textures--}function T(C){const w=C.texture,G=i.get(C),ie=i.get(w);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(G.__webglFramebuffer[ee]))for(let re=0;re<G.__webglFramebuffer[ee].length;re++)t.deleteFramebuffer(G.__webglFramebuffer[ee][re]);else t.deleteFramebuffer(G.__webglFramebuffer[ee]);G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer[ee])}else{if(Array.isArray(G.__webglFramebuffer))for(let ee=0;ee<G.__webglFramebuffer.length;ee++)t.deleteFramebuffer(G.__webglFramebuffer[ee]);else t.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&t.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ee=0;ee<G.__webglColorRenderbuffer.length;ee++)G.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(G.__webglColorRenderbuffer[ee]);G.__webglDepthRenderbuffer&&t.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,re=w.length;ee<re;ee++){const xe=i.get(w[ee]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(w[ee])}i.remove(w),i.remove(C)}let z=0;function Q(){z=0}function L(){const C=z;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),z+=1,C}function O(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function q(C,w){const G=i.get(C);if(C.isVideoTexture&&ct(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const ie=C.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(G,C,w);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+w)}function Z(C,w){const G=i.get(C);if(C.version>0&&G.__version!==C.version){se(G,C,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+w)}function U(C,w){const G=i.get(C);if(C.version>0&&G.__version!==C.version){se(G,C,w);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+w)}function k(C,w){const G=i.get(C);if(C.version>0&&G.__version!==C.version){he(G,C,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+w)}const j={[gd]:t.REPEAT,[On]:t.CLAMP_TO_EDGE,[vd]:t.MIRRORED_REPEAT},Y={[Yt]:t.NEAREST,[vp]:t.NEAREST_MIPMAP_NEAREST,[Fc]:t.NEAREST_MIPMAP_LINEAR,[wn]:t.LINEAR,[RM]:t.LINEAR_MIPMAP_NEAREST,[Ha]:t.LINEAR_MIPMAP_LINEAR},ne={[HM]:t.NEVER,[qM]:t.ALWAYS,[GM]:t.LESS,[T0]:t.LEQUAL,[VM]:t.EQUAL,[XM]:t.GEQUAL,[jM]:t.GREATER,[WM]:t.NOTEQUAL};function X(C,w,G){if(G?(t.texParameteri(C,t.TEXTURE_WRAP_S,j[w.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,j[w.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,j[w.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Y[w.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Y[w.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==On||w.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,R(w.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,R(w.minFilter)),w.minFilter!==Yt&&w.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ne[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Yt||w.minFilter!==Fc&&w.minFilter!==Ha||w.type===Fi&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Ga&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(C,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function $(C,w){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",b));const ie=w.source;let ee=h.get(ie);ee===void 0&&(ee={},h.set(ie,ee));const re=O(w);if(re!==C.__cacheKey){ee[re]===void 0&&(ee[re]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ee[re].usedTimes++;const xe=ee[C.__cacheKey];xe!==void 0&&(ee[C.__cacheKey].usedTimes--,xe.usedTimes===0&&S(w)),C.__cacheKey=re,C.__webglTexture=ee[re].texture}return G}function se(C,w,G){let ie=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ie=t.TEXTURE_3D);const ee=$(C,w),re=w.source;n.bindTexture(ie,C.__webglTexture,t.TEXTURE0+G);const xe=i.get(re);if(re.version!==xe.__version||ee===!0){n.activeTexture(t.TEXTURE0+G);const ue=Qe.getPrimaries(Qe.workingColorSpace),pe=w.colorSpace===Tn?null:Qe.getPrimaries(w.colorSpace),we=w.colorSpace===Tn||ue===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const ke=u(w)&&g(w.image)===!1;let J=y(w.image,ke,!1,r.maxTextureSize);J=Fe(w,J);const Ze=g(J)||o,Ge=s.convert(w.format,w.colorSpace);let Ce=s.convert(w.type),ye=E(w.internalFormat,Ge,Ce,w.colorSpace,w.isVideoTexture);X(ie,w,Ze);let me;const Ue=w.mipmaps,Ye=o&&w.isVideoTexture!==!0&&ye!==M0,pt=xe.__version===void 0||ee===!0,ze=P(w,J,Ze);if(w.isDepthTexture)ye=t.DEPTH_COMPONENT,o?w.type===Fi?ye=t.DEPTH_COMPONENT32F:w.type===Ii?ye=t.DEPTH_COMPONENT24:w.type===Mr?ye=t.DEPTH24_STENCIL8:ye=t.DEPTH_COMPONENT16:w.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Er&&ye===t.DEPTH_COMPONENT&&w.type!==wf&&w.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ii,Ce=s.convert(w.type)),w.format===Ns&&ye===t.DEPTH_COMPONENT&&(ye=t.DEPTH_STENCIL,w.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Mr,Ce=s.convert(w.type))),pt&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,ye,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,ye,J.width,J.height,0,Ge,Ce,null));else if(w.isDataTexture)if(Ue.length>0&&Ze){Ye&&pt&&n.texStorage2D(t.TEXTURE_2D,ze,ye,Ue[0].width,Ue[0].height);for(let ae=0,N=Ue.length;ae<N;ae++)me=Ue[ae],Ye?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,me.width,me.height,Ge,Ce,me.data):n.texImage2D(t.TEXTURE_2D,ae,ye,me.width,me.height,0,Ge,Ce,me.data);w.generateMipmaps=!1}else Ye?(pt&&n.texStorage2D(t.TEXTURE_2D,ze,ye,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,J.width,J.height,Ge,Ce,J.data)):n.texImage2D(t.TEXTURE_2D,0,ye,J.width,J.height,0,Ge,Ce,J.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ye&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,ye,Ue[0].width,Ue[0].height,J.depth);for(let ae=0,N=Ue.length;ae<N;ae++)me=Ue[ae],w.format!==zn?Ge!==null?Ye?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,me.width,me.height,J.depth,Ge,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,ye,me.width,me.height,J.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,me.width,me.height,J.depth,Ge,Ce,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,ye,me.width,me.height,J.depth,0,Ge,Ce,me.data)}else{Ye&&pt&&n.texStorage2D(t.TEXTURE_2D,ze,ye,Ue[0].width,Ue[0].height);for(let ae=0,N=Ue.length;ae<N;ae++)me=Ue[ae],w.format!==zn?Ge!==null?Ye?n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,me.width,me.height,Ge,me.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,ye,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,me.width,me.height,Ge,Ce,me.data):n.texImage2D(t.TEXTURE_2D,ae,ye,me.width,me.height,0,Ge,Ce,me.data)}else if(w.isDataArrayTexture)Ye?(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,ye,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ge,Ce,J.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,J.width,J.height,J.depth,0,Ge,Ce,J.data);else if(w.isData3DTexture)Ye?(pt&&n.texStorage3D(t.TEXTURE_3D,ze,ye,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ge,Ce,J.data)):n.texImage3D(t.TEXTURE_3D,0,ye,J.width,J.height,J.depth,0,Ge,Ce,J.data);else if(w.isFramebufferTexture){if(pt)if(Ye)n.texStorage2D(t.TEXTURE_2D,ze,ye,J.width,J.height);else{let ae=J.width,N=J.height;for(let le=0;le<ze;le++)n.texImage2D(t.TEXTURE_2D,le,ye,ae,N,0,Ge,Ce,null),ae>>=1,N>>=1}}else if(Ue.length>0&&Ze){Ye&&pt&&n.texStorage2D(t.TEXTURE_2D,ze,ye,Ue[0].width,Ue[0].height);for(let ae=0,N=Ue.length;ae<N;ae++)me=Ue[ae],Ye?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,Ge,Ce,me):n.texImage2D(t.TEXTURE_2D,ae,ye,Ge,Ce,me);w.generateMipmaps=!1}else Ye?(pt&&n.texStorage2D(t.TEXTURE_2D,ze,ye,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ge,Ce,J)):n.texImage2D(t.TEXTURE_2D,0,ye,Ge,Ce,J);x(w,Ze)&&v(ie),xe.__version=re.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function he(C,w,G){if(w.image.length!==6)return;const ie=$(C,w),ee=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+G);const re=i.get(ee);if(ee.version!==re.__version||ie===!0){n.activeTexture(t.TEXTURE0+G);const xe=Qe.getPrimaries(Qe.workingColorSpace),ue=w.colorSpace===Tn?null:Qe.getPrimaries(w.colorSpace),pe=w.colorSpace===Tn||xe===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const we=w.isCompressedTexture||w.image[0].isCompressedTexture,ke=w.image[0]&&w.image[0].isDataTexture,J=[];for(let ae=0;ae<6;ae++)!we&&!ke?J[ae]=y(w.image[ae],!1,!0,r.maxCubemapSize):J[ae]=ke?w.image[ae].image:w.image[ae],J[ae]=Fe(w,J[ae]);const Ze=J[0],Ge=g(Ze)||o,Ce=s.convert(w.format,w.colorSpace),ye=s.convert(w.type),me=E(w.internalFormat,Ce,ye,w.colorSpace),Ue=o&&w.isVideoTexture!==!0,Ye=re.__version===void 0||ie===!0;let pt=P(w,Ze,Ge);X(t.TEXTURE_CUBE_MAP,w,Ge);let ze;if(we){Ue&&Ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,me,Ze.width,Ze.height);for(let ae=0;ae<6;ae++){ze=J[ae].mipmaps;for(let N=0;N<ze.length;N++){const le=ze[N];w.format!==zn?Ce!==null?Ue?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,0,0,le.width,le.height,Ce,le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,0,0,le.width,le.height,Ce,ye,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,me,le.width,le.height,0,Ce,ye,le.data)}}}else{ze=w.mipmaps,Ue&&Ye&&(ze.length>0&&pt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,me,J[0].width,J[0].height));for(let ae=0;ae<6;ae++)if(ke){Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,J[ae].width,J[ae].height,Ce,ye,J[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,me,J[ae].width,J[ae].height,0,Ce,ye,J[ae].data);for(let N=0;N<ze.length;N++){const ce=ze[N].image[ae].image;Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,0,0,ce.width,ce.height,Ce,ye,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,me,ce.width,ce.height,0,Ce,ye,ce.data)}}else{Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ce,ye,J[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,me,Ce,ye,J[ae]);for(let N=0;N<ze.length;N++){const le=ze[N];Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,0,0,Ce,ye,le.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,me,Ce,ye,le.image[ae])}}}x(w,Ge)&&v(t.TEXTURE_CUBE_MAP),re.__version=ee.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ge(C,w,G,ie,ee,re){const xe=s.convert(G.format,G.colorSpace),ue=s.convert(G.type),pe=E(G.internalFormat,xe,ue,G.colorSpace);if(!i.get(w).__hasExternalTextures){const ke=Math.max(1,w.width>>re),J=Math.max(1,w.height>>re);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,re,pe,ke,J,w.depth,0,xe,ue,null):n.texImage2D(ee,re,pe,ke,J,0,xe,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),ve(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,i.get(G).__webglTexture,0,Re(w)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,i.get(G).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(C,w,G){if(t.bindRenderbuffer(t.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let ie=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(G||ve(w)){const ee=w.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Fi?ie=t.DEPTH_COMPONENT32F:ee.type===Ii&&(ie=t.DEPTH_COMPONENT24));const re=Re(w);ve(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,ie,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ie,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){const ie=Re(w);G&&ve(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,w.width,w.height):ve(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const ie=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0;ee<ie.length;ee++){const re=ie[ee],xe=s.convert(re.format,re.colorSpace),ue=s.convert(re.type),pe=E(re.internalFormat,xe,ue,re.colorSpace),we=Re(w);G&&ve(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,we,pe,w.width,w.height):ve(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,we,pe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,pe,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);const ie=i.get(w.depthTexture).__webglTexture,ee=Re(w);if(w.depthTexture.format===Er)ve(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(w.depthTexture.format===Ns)ve(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Te(C){const w=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");De(w.__webglFramebuffer,C)}else if(G){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]=t.createRenderbuffer(),Le(w.__webglDepthbuffer[ie],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),Le(w.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(C,w,G){const ie=i.get(C);w!==void 0&&ge(ie.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Te(C)}function B(C){const w=C.texture,G=i.get(C),ie=i.get(w);C.addEventListener("dispose",D),C.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=w.version,a.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,re=C.isWebGLMultipleRenderTargets===!0,xe=g(C)||o;if(ee){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(o&&w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let pe=0;pe<w.mipmaps.length;pe++)G.__webglFramebuffer[ue][pe]=t.createFramebuffer()}else G.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<w.mipmaps.length;ue++)G.__webglFramebuffer[ue]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(re)if(r.drawBuffers){const ue=C.texture;for(let pe=0,we=ue.length;pe<we;pe++){const ke=i.get(ue[pe]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&ve(C)===!1){const ue=re?w:[w];G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pe=0;pe<ue.length;pe++){const we=ue[pe];G.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[pe]);const ke=s.convert(we.format,we.colorSpace),J=s.convert(we.type),Ze=E(we.internalFormat,ke,J,we.colorSpace,C.isXRRenderTarget===!0),Ge=Re(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Ze,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,G.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),Le(G.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),X(t.TEXTURE_CUBE_MAP,w,xe);for(let ue=0;ue<6;ue++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)ge(G.__webglFramebuffer[ue][pe],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,pe);else ge(G.__webglFramebuffer[ue],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);x(w,xe)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){const ue=C.texture;for(let pe=0,we=ue.length;pe<we;pe++){const ke=ue[pe],J=i.get(ke);n.bindTexture(t.TEXTURE_2D,J.__webglTexture),X(t.TEXTURE_2D,ke,xe),ge(G.__webglFramebuffer,C,ke,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),x(ke,xe)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ue=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ue,ie.__webglTexture),X(ue,w,xe),o&&w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)ge(G.__webglFramebuffer[pe],C,w,t.COLOR_ATTACHMENT0,ue,pe);else ge(G.__webglFramebuffer,C,w,t.COLOR_ATTACHMENT0,ue,0);x(w,xe)&&v(ue),n.unbindTexture()}C.depthBuffer&&Te(C)}function jt(C){const w=g(C)||o,G=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ie=0,ee=G.length;ie<ee;ie++){const re=G[ie];if(x(re,w)){const xe=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ue=i.get(re).__webglTexture;n.bindTexture(xe,ue),v(xe),n.unbindTexture()}}}function Se(C){if(o&&C.samples>0&&ve(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],G=C.width,ie=C.height;let ee=t.COLOR_BUFFER_BIT;const re=[],xe=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(C),pe=C.isWebGLMultipleRenderTargets===!0;if(pe)for(let we=0;we<w.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let we=0;we<w.length;we++){re.push(t.COLOR_ATTACHMENT0+we),C.depthBuffer&&re.push(xe);const ke=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(ke===!1&&(C.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),pe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[we]),ke===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[xe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[xe])),pe){const J=i.get(w[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,G,ie,0,0,G,ie,ee,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let we=0;we<w.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,ue.__webglColorRenderbuffer[we]);const ke=i.get(w[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Re(C){return Math.min(r.maxSamples,C.samples)}function ve(C){const w=i.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ct(C){const w=a.render.frame;d.get(C)!==w&&(d.set(C,w),C.update())}function Fe(C,w){const G=C.colorSpace,ie=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===xd||G!==_i&&G!==Tn&&(Qe.getTransfer(G)===rt?o===!1?e.has("EXT_sRGB")===!0&&ie===zn?(C.format=xd,C.minFilter=wn,C.generateMipmaps=!1):w=b0.sRGBToLinear(w):(ie!==zn||ee!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}this.allocateTextureUnit=L,this.resetTextureUnits=Q,this.setTexture2D=q,this.setTexture2DArray=Z,this.setTexture3D=U,this.setTextureCube=k,this.rebindTextures=qe,this.setupRenderTarget=B,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ve}function KA(t,e,n){const i=n.isWebGL2;function r(s,a=Tn){let o;const l=Qe.getTransfer(a);if(s===$i)return t.UNSIGNED_BYTE;if(s===v0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===x0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===PM)return t.BYTE;if(s===LM)return t.SHORT;if(s===wf)return t.UNSIGNED_SHORT;if(s===g0)return t.INT;if(s===Ii)return t.UNSIGNED_INT;if(s===Fi)return t.FLOAT;if(s===Ga)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===NM)return t.ALPHA;if(s===zn)return t.RGBA;if(s===DM)return t.LUMINANCE;if(s===UM)return t.LUMINANCE_ALPHA;if(s===Er)return t.DEPTH_COMPONENT;if(s===Ns)return t.DEPTH_STENCIL;if(s===xd)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===IM)return t.RED;if(s===_0)return t.RED_INTEGER;if(s===FM)return t.RG;if(s===y0)return t.RG_INTEGER;if(s===S0)return t.RGBA_INTEGER;if(s===kc||s===Oc||s===zc||s===Bc)if(l===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===kc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===kc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xp||s===_p||s===yp||s===Sp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===xp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_p)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===M0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Mp||s===Ep)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Mp)return l===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ep)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===wp||s===Tp||s===Ap||s===bp||s===Cp||s===Rp||s===Pp||s===Lp||s===Np||s===Dp||s===Up||s===Ip||s===Fp||s===kp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===wp)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Tp)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ap)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bp)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cp)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rp)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Pp)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lp)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Np)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Dp)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Up)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ip)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fp)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kp)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hc||s===Op||s===zp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Hc)return l===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Op)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===zp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===kM||s===Bp||s===Hp||s===Gp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Hc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Bp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Mr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class ZA extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ca extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QA={type:"move"};class fu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),u=this._getHandJoint(c,y);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(QA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ca;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class JA extends Bs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,_=null;const y=n.getContextAttributes();let g=null,u=null;const x=[],v=[],E=new We;let P=null;const R=new hn;R.layers.enable(1),R.viewport=new ot;const b=new hn;b.layers.enable(2),b.viewport=new ot;const D=[R,b],M=new ZA;M.layers.enable(1),M.layers.enable(2);let S=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=x[X];return $===void 0&&($=new fu,x[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=x[X];return $===void 0&&($=new fu,x[X]=$),$.getGripSpace()},this.getHand=function(X){let $=x[X];return $===void 0&&($=new fu,x[X]=$),$.getHandSpace()};function z(X){const $=v.indexOf(X.inputSource);if($===-1)return;const se=x[$];se!==void 0&&(se.update(X.inputSource,X.frame,c||a),se.dispatchEvent({type:X.type,data:X.inputSource}))}function Q(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",L);for(let X=0;X<x.length;X++){const $=v[X];$!==null&&(v[X]=null,x[X].disconnect($))}S=null,T=null,e.setRenderTarget(g),m=null,h=null,f=null,r=null,u=null,ne.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,$),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Pr(m.framebufferWidth,m.framebufferHeight,{format:zn,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let $=null,se=null,he=null;y.depth&&(he=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=y.stencil?Ns:Er,se=y.stencil?Mr:Ii);const ge={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(ge),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Pr(h.textureWidth,h.textureHeight,{format:zn,type:$i,depthTexture:new z0(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Le=e.properties.get(u);Le.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ne.setContext(r),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(X){for(let $=0;$<X.removed.length;$++){const se=X.removed[$],he=v.indexOf(se);he>=0&&(v[he]=null,x[he].disconnect(se))}for(let $=0;$<X.added.length;$++){const se=X.added[$];let he=v.indexOf(se);if(he===-1){for(let Le=0;Le<x.length;Le++)if(Le>=v.length){v.push(se),he=Le;break}else if(v[Le]===null){v[Le]=se,he=Le;break}if(he===-1)break}const ge=x[he];ge&&ge.connect(se)}}const O=new I,q=new I;function Z(X,$,se){O.setFromMatrixPosition($.matrixWorld),q.setFromMatrixPosition(se.matrixWorld);const he=O.distanceTo(q),ge=$.projectionMatrix.elements,Le=se.projectionMatrix.elements,De=ge[14]/(ge[10]-1),Te=ge[14]/(ge[10]+1),qe=(ge[9]+1)/ge[5],B=(ge[9]-1)/ge[5],jt=(ge[8]-1)/ge[0],Se=(Le[8]+1)/Le[0],Re=De*jt,ve=De*Se,ct=he/(-jt+Se),Fe=ct*-jt;$.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Fe),X.translateZ(ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const C=De+ct,w=Te+ct,G=Re-Fe,ie=ve+(he-Fe),ee=qe*Te/w*C,re=B*Te/w*C;X.projectionMatrix.makePerspective(G,ie,ee,re,C,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function U(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;M.near=b.near=R.near=X.near,M.far=b.far=R.far=X.far,(S!==M.near||T!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,T=M.far);const $=X.parent,se=M.cameras;U(M,$);for(let he=0;he<se.length;he++)U(se[he],$);se.length===2?Z(M,R,b):M.projectionMatrix.copy(R.projectionMatrix),k(X,M,$)};function k(X,$,se){se===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(se.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=_d*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)};let j=null;function Y(X,$){if(d=$.getViewerPose(c||a),_=$,d!==null){const se=d.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let he=!1;se.length!==M.cameras.length&&(M.cameras.length=0,he=!0);for(let ge=0;ge<se.length;ge++){const Le=se[ge];let De=null;if(m!==null)De=m.getViewport(Le);else{const qe=f.getViewSubImage(h,Le);De=qe.viewport,ge===0&&(e.setRenderTargetTextures(u,qe.colorTexture,h.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(u))}let Te=D[ge];Te===void 0&&(Te=new hn,Te.layers.enable(ge),Te.viewport=new ot,D[ge]=Te),Te.matrix.fromArray(Le.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Le.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(De.x,De.y,De.width,De.height),ge===0&&(M.matrix.copy(Te.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),he===!0&&M.cameras.push(Te)}}for(let se=0;se<x.length;se++){const he=v[se],ge=x[se];he!==null&&ge!==void 0&&ge.update(he,$,c||a)}j&&j(X,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),_=null}const ne=new O0;ne.setAnimationLoop(Y),this.setAnimationLoop=function(X){j=X},this.dispose=function(){}}}function eb(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,I0(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,x,v,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),f(g,u)):u.isMeshPhongMaterial?(s(g,u),d(g,u)):u.isMeshStandardMaterial?(s(g,u),h(g,u),u.isMeshPhysicalMaterial&&m(g,u,E)):u.isMeshMatcapMaterial?(s(g,u),_(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),y(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,x,v):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===on&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===on&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const x=e.get(u).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap){g.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,g.lightMapTransform)}u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,x,v){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*x,g.scale.value=v*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function d(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),e.get(u).envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,x){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===on&&g.clearcoatNormalScale.value.negate())),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function y(g,u){const x=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tb(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const E=v.program;i.uniformBlockBinding(x,E)}function c(x,v){let E=r[x.id];E===void 0&&(_(x),E=d(x),r[x.id]=E,x.addEventListener("dispose",g));const P=v.program;i.updateUBOMapping(x,P);const R=e.render.frame;s[x.id]!==R&&(h(x),s[x.id]=R)}function d(x){const v=f();x.__bindingPointIndex=v;const E=t.createBuffer(),P=x.__size,R=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,P,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],E=x.uniforms,P=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,b=E.length;R<b;R++){const D=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,S=D.length;M<S;M++){const T=D[M];if(m(T,R,M,P)===!0){const z=T.__offset,Q=Array.isArray(T.value)?T.value:[T.value];let L=0;for(let O=0;O<Q.length;O++){const q=Q[O],Z=y(q);typeof q=="number"||typeof q=="boolean"?(T.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,z+L,T.__data)):q.isMatrix3?(T.__data[0]=q.elements[0],T.__data[1]=q.elements[1],T.__data[2]=q.elements[2],T.__data[3]=0,T.__data[4]=q.elements[3],T.__data[5]=q.elements[4],T.__data[6]=q.elements[5],T.__data[7]=0,T.__data[8]=q.elements[6],T.__data[9]=q.elements[7],T.__data[10]=q.elements[8],T.__data[11]=0):(q.toArray(T.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(x,v,E,P){const R=x.value,b=v+"_"+E;if(P[b]===void 0)return typeof R=="number"||typeof R=="boolean"?P[b]=R:P[b]=R.clone(),!0;{const D=P[b];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return P[b]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function _(x){const v=x.uniforms;let E=0;const P=16;for(let b=0,D=v.length;b<D;b++){const M=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,T=M.length;S<T;S++){const z=M[S],Q=Array.isArray(z.value)?z.value:[z.value];for(let L=0,O=Q.length;L<O;L++){const q=Q[L],Z=y(q),U=E%P;U!==0&&P-U<Z.boundary&&(E+=P-U),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=Z.storage}}}const R=E%P;return R>0&&(E+=P-R),x.__size=E,x.__cache={},this}function y(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const x in r)t.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class W0{constructor(e={}){const{canvas:n=YM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,g=null;const u=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=qi,this.toneMappingExposure=1;const v=this;let E=!1,P=0,R=0,b=null,D=-1,M=null;const S=new ot,T=new ot;let z=null;const Q=new je(0);let L=0,O=n.width,q=n.height,Z=1,U=null,k=null;const j=new ot(0,0,O,q),Y=new ot(0,0,O,q);let ne=!1;const X=new bf;let $=!1,se=!1,he=null;const ge=new Et,Le=new We,De=new I,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return b===null?Z:1}let B=i;function jt(A,F){for(let V=0;V<A.length;V++){const W=A[V],H=n.getContext(W,F);if(H!==null)return H}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ef}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",le,!1),B===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),B=jt(F,A),B===null)throw jt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Se,Re,ve,ct,Fe,C,w,G,ie,ee,re,xe,ue,pe,we,ke,J,Ze,Ge,Ce,ye,me,Ue,Ye;function pt(){Se=new dT(B),Re=new rT(B,Se,e),Se.init(Re),me=new KA(B,Se,Re),ve=new $A(B,Se,Re),ct=new pT(B),Fe=new UA,C=new YA(B,Se,ve,Fe,Re,me,ct),w=new aT(v),G=new uT(v),ie=new SE(B,Re),Ue=new nT(B,Se,ie,Re),ee=new fT(B,ie,ct,Ue),re=new xT(B,ee,ie,ct),Ge=new vT(B,Re,C),ke=new sT(Fe),xe=new DA(v,w,G,Se,Re,Ue,ke),ue=new eb(v,Fe),pe=new FA,we=new GA(Se,Re),Ze=new tT(v,w,G,ve,re,h,l),J=new qA(v,re,Re),Ye=new tb(B,ct,Re,ve),Ce=new iT(B,Se,ct,Re),ye=new hT(B,Se,ct,Re),ct.programs=xe.programs,v.capabilities=Re,v.extensions=Se,v.properties=Fe,v.renderLists=pe,v.shadowMap=J,v.state=ve,v.info=ct}pt();const ze=new JA(v,B);this.xr=ze,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(O,q,!1))},this.getSize=function(A){return A.set(O,q)},this.setSize=function(A,F,V=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,q=F,n.width=Math.floor(A*Z),n.height=Math.floor(F*Z),V===!0&&(n.style.width=A+"px",n.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(O*Z,q*Z).floor()},this.setDrawingBufferSize=function(A,F,V){O=A,q=F,Z=V,n.width=Math.floor(A*V),n.height=Math.floor(F*V),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,F,V,W){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,F,V,W),ve.viewport(S.copy(j).multiplyScalar(Z).floor())},this.getScissor=function(A){return A.copy(Y)},this.setScissor=function(A,F,V,W){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,F,V,W),ve.scissor(T.copy(Y).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(A){ve.setScissorTest(ne=A)},this.setOpaqueSort=function(A){U=A},this.setTransparentSort=function(A){k=A},this.getClearColor=function(A){return A.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(A=!0,F=!0,V=!0){let W=0;if(A){let H=!1;if(b!==null){const de=b.texture.format;H=de===S0||de===y0||de===_0}if(H){const de=b.texture.type,_e=de===$i||de===Ii||de===wf||de===Mr||de===v0||de===x0,Ee=Ze.getClearColor(),be=Ze.getClearAlpha(),Oe=Ee.r,Pe=Ee.g,Ne=Ee.b;_e?(m[0]=Oe,m[1]=Pe,m[2]=Ne,m[3]=be,B.clearBufferuiv(B.COLOR,0,m)):(_[0]=Oe,_[1]=Pe,_[2]=Ne,_[3]=be,B.clearBufferiv(B.COLOR,0,_))}else W|=B.COLOR_BUFFER_BIT}F&&(W|=B.DEPTH_BUFFER_BIT),V&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",le,!1),pe.dispose(),we.dispose(),Fe.dispose(),w.dispose(),G.dispose(),re.dispose(),Ue.dispose(),Ye.dispose(),xe.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",Wt),ze.removeEventListener("sessionend",tt),he&&(he.dispose(),he=null),Xt.stop()};function ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=ct.autoReset,F=J.enabled,V=J.autoUpdate,W=J.needsUpdate,H=J.type;pt(),ct.autoReset=A,J.enabled=F,J.autoUpdate=V,J.needsUpdate=W,J.type=H}function le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ce(A){const F=A.target;F.removeEventListener("dispose",ce),Ae(F)}function Ae(A){Me(A),Fe.remove(A)}function Me(A){const F=Fe.get(A).programs;F!==void 0&&(F.forEach(function(V){xe.releaseProgram(V)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,V,W,H,de){F===null&&(F=Te);const _e=H.isMesh&&H.matrixWorld.determinant()<0,Ee=Y0(A,F,V,W,H);ve.setMaterial(W,_e);let be=V.index,Oe=1;if(W.wireframe===!0){if(be=ee.getWireframeAttribute(V),be===void 0)return;Oe=2}const Pe=V.drawRange,Ne=V.attributes.position;let vt=Pe.start*Oe,cn=(Pe.start+Pe.count)*Oe;de!==null&&(vt=Math.max(vt,de.start*Oe),cn=Math.min(cn,(de.start+de.count)*Oe)),be!==null?(vt=Math.max(vt,0),cn=Math.min(cn,be.count)):Ne!=null&&(vt=Math.max(vt,0),cn=Math.min(cn,Ne.count));const Rt=cn-vt;if(Rt<0||Rt===1/0)return;Ue.setup(H,W,Ee,V,be);let Jn,ut=Ce;if(be!==null&&(Jn=ie.get(be),ut=ye,ut.setIndex(Jn)),H.isMesh)W.wireframe===!0?(ve.setLineWidth(W.wireframeLinewidth*qe()),ut.setMode(B.LINES)):ut.setMode(B.TRIANGLES);else if(H.isLine){let Be=W.linewidth;Be===void 0&&(Be=1),ve.setLineWidth(Be*qe()),H.isLineSegments?ut.setMode(B.LINES):H.isLineLoop?ut.setMode(B.LINE_LOOP):ut.setMode(B.LINE_STRIP)}else H.isPoints?ut.setMode(B.POINTS):H.isSprite&&ut.setMode(B.TRIANGLES);if(H.isBatchedMesh)ut.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ut.renderInstances(vt,Rt,H.count);else if(V.isInstancedBufferGeometry){const Be=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ic=Math.min(V.instanceCount,Be);ut.renderInstances(vt,Rt,ic)}else ut.render(vt,Rt)};function Je(A,F,V){A.transparent===!0&&A.side===li&&A.forceSinglePass===!1?(A.side=on,A.needsUpdate=!0,to(A,F,V),A.side=Zi,A.needsUpdate=!0,to(A,F,V),A.side=li):to(A,F,V)}this.compile=function(A,F,V=null){V===null&&(V=A),g=we.get(V),g.init(),x.push(g),V.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),A!==V&&A.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights(v._useLegacyLights);const W=new Set;return A.traverse(function(H){const de=H.material;if(de)if(Array.isArray(de))for(let _e=0;_e<de.length;_e++){const Ee=de[_e];Je(Ee,V,H),W.add(Ee)}else Je(de,V,H),W.add(de)}),x.pop(),g=null,W},this.compileAsync=function(A,F,V=null){const W=this.compile(A,F,V);return new Promise(H=>{function de(){if(W.forEach(function(_e){Fe.get(_e).currentProgram.isReady()&&W.delete(_e)}),W.size===0){H(A);return}setTimeout(de,10)}Se.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let et=null;function Ct(A){et&&et(A)}function Wt(){Xt.stop()}function tt(){Xt.start()}const Xt=new O0;Xt.setAnimationLoop(Ct),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(A){et=A,ze.setAnimationLoop(A),A===null?Xt.stop():Xt.start()},ze.addEventListener("sessionstart",Wt),ze.addEventListener("sessionend",tt),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(F),F=ze.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,F,b),g=we.get(A,x.length),g.init(),x.push(g),ge.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X.setFromProjectionMatrix(ge),se=this.localClippingEnabled,$=ke.init(this.clippingPlanes,se),y=pe.get(A,u.length),y.init(),u.push(y),Vn(A,F,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(U,k),this.info.render.frame++,$===!0&&ke.beginShadows();const V=g.state.shadowsArray;if(J.render(V,A,F),$===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(y,A),g.setupLights(v._useLegacyLights),F.isArrayCamera){const W=F.cameras;for(let H=0,de=W.length;H<de;H++){const _e=W[H];If(y,A,_e,_e.viewport)}}else If(y,A,F);b!==null&&(C.updateMultisampleRenderTarget(b),C.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(v,A,F),Ue.resetDefaultState(),D=-1,M=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Vn(A,F,V,W){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||X.intersectsSprite(A)){W&&De.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ge);const _e=re.update(A),Ee=A.material;Ee.visible&&y.push(A,_e,Ee,V,De.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||X.intersectsObject(A))){const _e=re.update(A),Ee=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),De.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),De.copy(_e.boundingSphere.center)),De.applyMatrix4(A.matrixWorld).applyMatrix4(ge)),Array.isArray(Ee)){const be=_e.groups;for(let Oe=0,Pe=be.length;Oe<Pe;Oe++){const Ne=be[Oe],vt=Ee[Ne.materialIndex];vt&&vt.visible&&y.push(A,_e,vt,V,De.z,Ne)}}else Ee.visible&&y.push(A,_e,Ee,V,De.z,null)}}const de=A.children;for(let _e=0,Ee=de.length;_e<Ee;_e++)Vn(de[_e],F,V,W)}function If(A,F,V,W){const H=A.opaque,de=A.transmissive,_e=A.transparent;g.setupLightsView(V),$===!0&&ke.setGlobalState(v.clippingPlanes,V),de.length>0&&$0(H,de,F,V),W&&ve.viewport(S.copy(W)),H.length>0&&eo(H,F,V),de.length>0&&eo(de,F,V),_e.length>0&&eo(_e,F,V),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function $0(A,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const de=Re.isWebGL2;he===null&&(he=new Pr(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Ga:$i,minFilter:Ha,samples:de?4:0})),v.getDrawingBufferSize(Le),de?he.setSize(Le.x,Le.y):he.setSize(yd(Le.x),yd(Le.y));const _e=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor(Q),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Ee=v.toneMapping;v.toneMapping=qi,eo(A,V,W),C.updateMultisampleRenderTarget(he),C.updateRenderTargetMipmap(he);let be=!1;for(let Oe=0,Pe=F.length;Oe<Pe;Oe++){const Ne=F[Oe],vt=Ne.object,cn=Ne.geometry,Rt=Ne.material,Jn=Ne.group;if(Rt.side===li&&vt.layers.test(W.layers)){const ut=Rt.side;Rt.side=on,Rt.needsUpdate=!0,Ff(vt,V,W,cn,Rt,Jn),Rt.side=ut,Rt.needsUpdate=!0,be=!0}}be===!0&&(C.updateMultisampleRenderTarget(he),C.updateRenderTargetMipmap(he)),v.setRenderTarget(_e),v.setClearColor(Q,L),v.toneMapping=Ee}function eo(A,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let H=0,de=A.length;H<de;H++){const _e=A[H],Ee=_e.object,be=_e.geometry,Oe=W===null?_e.material:W,Pe=_e.group;Ee.layers.test(V.layers)&&Ff(Ee,F,V,be,Oe,Pe)}}function Ff(A,F,V,W,H,de){A.onBeforeRender(v,F,V,W,H,de),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(v,F,V,W,A,de),H.transparent===!0&&H.side===li&&H.forceSinglePass===!1?(H.side=on,H.needsUpdate=!0,v.renderBufferDirect(V,F,W,H,A,de),H.side=Zi,H.needsUpdate=!0,v.renderBufferDirect(V,F,W,H,A,de),H.side=li):v.renderBufferDirect(V,F,W,H,A,de),A.onAfterRender(v,F,V,W,H,de)}function to(A,F,V){F.isScene!==!0&&(F=Te);const W=Fe.get(A),H=g.state.lights,de=g.state.shadowsArray,_e=H.state.version,Ee=xe.getParameters(A,H.state,de,F,V),be=xe.getProgramCacheKey(Ee);let Oe=W.programs;W.environment=A.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(A.isMeshStandardMaterial?G:w).get(A.envMap||W.environment),Oe===void 0&&(A.addEventListener("dispose",ce),Oe=new Map,W.programs=Oe);let Pe=Oe.get(be);if(Pe!==void 0){if(W.currentProgram===Pe&&W.lightsStateVersion===_e)return Of(A,Ee),Pe}else Ee.uniforms=xe.getUniforms(A),A.onBuild(V,Ee,v),A.onBeforeCompile(Ee,v),Pe=xe.acquireProgram(Ee,be),Oe.set(be,Pe),W.uniforms=Ee.uniforms;const Ne=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=ke.uniform),Of(A,Ee),W.needsLights=Z0(A),W.lightsStateVersion=_e,W.needsLights&&(Ne.ambientLightColor.value=H.state.ambient,Ne.lightProbe.value=H.state.probe,Ne.directionalLights.value=H.state.directional,Ne.directionalLightShadows.value=H.state.directionalShadow,Ne.spotLights.value=H.state.spot,Ne.spotLightShadows.value=H.state.spotShadow,Ne.rectAreaLights.value=H.state.rectArea,Ne.ltc_1.value=H.state.rectAreaLTC1,Ne.ltc_2.value=H.state.rectAreaLTC2,Ne.pointLights.value=H.state.point,Ne.pointLightShadows.value=H.state.pointShadow,Ne.hemisphereLights.value=H.state.hemi,Ne.directionalShadowMap.value=H.state.directionalShadowMap,Ne.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ne.spotShadowMap.value=H.state.spotShadowMap,Ne.spotLightMatrix.value=H.state.spotLightMatrix,Ne.spotLightMap.value=H.state.spotLightMap,Ne.pointShadowMap.value=H.state.pointShadowMap,Ne.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Pe,W.uniformsList=null,Pe}function kf(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=el.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Of(A,F){const V=Fe.get(A);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Y0(A,F,V,W,H){F.isScene!==!0&&(F=Te),C.resetTextureUnits();const de=F.fog,_e=W.isMeshStandardMaterial?F.environment:null,Ee=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:_i,be=(W.isMeshStandardMaterial?G:w).get(W.envMap||_e),Oe=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ne=!!V.morphAttributes.position,vt=!!V.morphAttributes.normal,cn=!!V.morphAttributes.color;let Rt=qi;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Rt=v.toneMapping);const Jn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ut=Jn!==void 0?Jn.length:0,Be=Fe.get(W),ic=g.state.lights;if($===!0&&(se===!0||A!==M)){const yn=A===M&&W.id===D;ke.setState(W,A,yn)}let mt=!1;W.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==ic.state.version||Be.outputColorSpace!==Ee||H.isBatchedMesh&&Be.batching===!1||!H.isBatchedMesh&&Be.batching===!0||H.isInstancedMesh&&Be.instancing===!1||!H.isInstancedMesh&&Be.instancing===!0||H.isSkinnedMesh&&Be.skinning===!1||!H.isSkinnedMesh&&Be.skinning===!0||H.isInstancedMesh&&Be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Be.instancingColor===!1&&H.instanceColor!==null||Be.envMap!==be||W.fog===!0&&Be.fog!==de||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ke.numPlanes||Be.numIntersection!==ke.numIntersection)||Be.vertexAlphas!==Oe||Be.vertexTangents!==Pe||Be.morphTargets!==Ne||Be.morphNormals!==vt||Be.morphColors!==cn||Be.toneMapping!==Rt||Re.isWebGL2===!0&&Be.morphTargetsCount!==ut)&&(mt=!0):(mt=!0,Be.__version=W.version);let rr=Be.currentProgram;mt===!0&&(rr=to(W,F,H));let zf=!1,Gs=!1,rc=!1;const kt=rr.getUniforms(),sr=Be.uniforms;if(ve.useProgram(rr.program)&&(zf=!0,Gs=!0,rc=!0),W.id!==D&&(D=W.id,Gs=!0),zf||M!==A){kt.setValue(B,"projectionMatrix",A.projectionMatrix),kt.setValue(B,"viewMatrix",A.matrixWorldInverse);const yn=kt.map.cameraPosition;yn!==void 0&&yn.setValue(B,De.setFromMatrixPosition(A.matrixWorld)),Re.logarithmicDepthBuffer&&kt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&kt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Gs=!0,rc=!0)}if(H.isSkinnedMesh){kt.setOptional(B,H,"bindMatrix"),kt.setOptional(B,H,"bindMatrixInverse");const yn=H.skeleton;yn&&(Re.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),kt.setValue(B,"boneTexture",yn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(kt.setOptional(B,H,"batchingTexture"),kt.setValue(B,"batchingTexture",H._matricesTexture,C));const sc=V.morphAttributes;if((sc.position!==void 0||sc.normal!==void 0||sc.color!==void 0&&Re.isWebGL2===!0)&&Ge.update(H,V,rr),(Gs||Be.receiveShadow!==H.receiveShadow)&&(Be.receiveShadow=H.receiveShadow,kt.setValue(B,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(sr.envMap.value=be,sr.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Gs&&(kt.setValue(B,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&K0(sr,rc),de&&W.fog===!0&&ue.refreshFogUniforms(sr,de),ue.refreshMaterialUniforms(sr,W,Z,q,he),el.upload(B,kf(Be),sr,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(el.upload(B,kf(Be),sr,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&kt.setValue(B,"center",H.center),kt.setValue(B,"modelViewMatrix",H.modelViewMatrix),kt.setValue(B,"normalMatrix",H.normalMatrix),kt.setValue(B,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const yn=W.uniformsGroups;for(let ac=0,Q0=yn.length;ac<Q0;ac++)if(Re.isWebGL2){const Bf=yn[ac];Ye.update(Bf,rr),Ye.bind(Bf,rr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rr}function K0(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Z0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,F,V){Fe.get(A.texture).__webglTexture=F,Fe.get(A.depthTexture).__webglTexture=V;const W=Fe.get(A);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,F){const V=Fe.get(A);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,V=0){b=A,P=F,R=V;let W=!0,H=null,de=!1,_e=!1;if(A){const be=Fe.get(A);be.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(B.FRAMEBUFFER,null),W=!1):be.__webglFramebuffer===void 0?C.setupRenderTarget(A):be.__hasExternalTextures&&C.rebindTextures(A,Fe.get(A.texture).__webglTexture,Fe.get(A.depthTexture).__webglTexture);const Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const Pe=Fe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Pe[F])?H=Pe[F][V]:H=Pe[F],de=!0):Re.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?H=Fe.get(A).__webglMultisampledFramebuffer:Array.isArray(Pe)?H=Pe[V]:H=Pe,S.copy(A.viewport),T.copy(A.scissor),z=A.scissorTest}else S.copy(j).multiplyScalar(Z).floor(),T.copy(Y).multiplyScalar(Z).floor(),z=ne;if(ve.bindFramebuffer(B.FRAMEBUFFER,H)&&Re.drawBuffers&&W&&ve.drawBuffers(A,H),ve.viewport(S),ve.scissor(T),ve.setScissorTest(z),de){const be=Fe.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,V)}else if(_e){const be=Fe.get(A.texture),Oe=F||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,be.__webglTexture,V||0,Oe)}D=-1},this.readRenderTargetPixels=function(A,F,V,W,H,de,_e){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Fe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee){ve.bindFramebuffer(B.FRAMEBUFFER,Ee);try{const be=A.texture,Oe=be.format,Pe=be.type;if(Oe!==zn&&me.convert(Oe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Pe===Ga&&(Se.has("EXT_color_buffer_half_float")||Re.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Pe!==$i&&me.convert(Pe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===Fi&&(Re.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-W&&V>=0&&V<=A.height-H&&B.readPixels(F,V,W,H,me.convert(Oe),me.convert(Pe),de)}finally{const be=b!==null?Fe.get(b).__webglFramebuffer:null;ve.bindFramebuffer(B.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(A,F,V=0){const W=Math.pow(2,-V),H=Math.floor(F.image.width*W),de=Math.floor(F.image.height*W);C.setTexture2D(F,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,A.x,A.y,H,de),ve.unbindTexture()},this.copyTextureToTexture=function(A,F,V,W=0){const H=F.image.width,de=F.image.height,_e=me.convert(V.format),Ee=me.convert(V.type);C.setTexture2D(V,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,A.x,A.y,H,de,_e,Ee,F.image.data):F.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,A.x,A.y,F.mipmaps[0].width,F.mipmaps[0].height,_e,F.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,W,A.x,A.y,_e,Ee,F.image),W===0&&V.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(A,F,V,W,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=A.max.x-A.min.x+1,_e=A.max.y-A.min.y+1,Ee=A.max.z-A.min.z+1,be=me.convert(W.format),Oe=me.convert(W.type);let Pe;if(W.isData3DTexture)C.setTexture3D(W,0),Pe=B.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)C.setTexture2DArray(W,0),Pe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const Ne=B.getParameter(B.UNPACK_ROW_LENGTH),vt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),cn=B.getParameter(B.UNPACK_SKIP_PIXELS),Rt=B.getParameter(B.UNPACK_SKIP_ROWS),Jn=B.getParameter(B.UNPACK_SKIP_IMAGES),ut=V.isCompressedTexture?V.mipmaps[H]:V.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ut.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ut.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,A.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,A.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,A.min.z),V.isDataTexture||V.isData3DTexture?B.texSubImage3D(Pe,H,F.x,F.y,F.z,de,_e,Ee,be,Oe,ut.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Pe,H,F.x,F.y,F.z,de,_e,Ee,be,ut.data)):B.texSubImage3D(Pe,H,F.x,F.y,F.z,de,_e,Ee,be,Oe,ut),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ne),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,vt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,cn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Rt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Jn),H===0&&W.generateMipmaps&&B.generateMipmap(Pe),ve.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),ve.unbindTexture()},this.resetState=function(){P=0,R=0,b=null,ve.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Tf?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===ec?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?wr:E0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===wr?Nt:_i}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class nb extends W0{}nb.prototype.isWebGL1Renderer=!0;class Pf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=n}clone(){return new Pf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ib extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Lf extends ir{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),d(),this.setAttribute("position",new Qn(s,3)),this.setAttribute("normal",new Qn(s.slice(),3)),this.setAttribute("uv",new Qn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new I,E=new I,P=new I;for(let R=0;R<n.length;R+=3)m(n[R+0],v),m(n[R+1],E),m(n[R+2],P),l(v,E,P,x)}function l(x,v,E,P){const R=P+1,b=[];for(let D=0;D<=R;D++){b[D]=[];const M=x.clone().lerp(E,D/R),S=v.clone().lerp(E,D/R),T=R-D;for(let z=0;z<=T;z++)z===0&&D===R?b[D][z]=M:b[D][z]=M.clone().lerp(S,z/T)}for(let D=0;D<R;D++)for(let M=0;M<2*(R-D)-1;M++){const S=Math.floor(M/2);M%2===0?(h(b[D][S+1]),h(b[D+1][S]),h(b[D][S])):(h(b[D][S+1]),h(b[D+1][S+1]),h(b[D+1][S]))}}function c(x){const v=new I;for(let E=0;E<s.length;E+=3)v.x=s[E+0],v.y=s[E+1],v.z=s[E+2],v.normalize().multiplyScalar(x),s[E+0]=v.x,s[E+1]=v.y,s[E+2]=v.z}function d(){const x=new I;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const E=g(x)/2/Math.PI+.5,P=u(x)/Math.PI+.5;a.push(E,1-P)}_(),f()}function f(){for(let x=0;x<a.length;x+=6){const v=a[x+0],E=a[x+2],P=a[x+4],R=Math.max(v,E,P),b=Math.min(v,E,P);R>.9&&b<.1&&(v<.2&&(a[x+0]+=1),E<.2&&(a[x+2]+=1),P<.2&&(a[x+4]+=1))}}function h(x){s.push(x.x,x.y,x.z)}function m(x,v){const E=x*3;v.x=e[E+0],v.y=e[E+1],v.z=e[E+2]}function _(){const x=new I,v=new I,E=new I,P=new I,R=new We,b=new We,D=new We;for(let M=0,S=0;M<s.length;M+=9,S+=6){x.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),E.set(s[M+6],s[M+7],s[M+8]),R.set(a[S+0],a[S+1]),b.set(a[S+2],a[S+3]),D.set(a[S+4],a[S+5]),P.copy(x).add(v).add(E).divideScalar(3);const T=g(P);y(R,S+0,x,T),y(b,S+2,v,T),y(D,S+4,E,T)}}function y(x,v,E,P){P<0&&x.x===1&&(a[v]=x.x-1),E.x===0&&E.z===0&&(a[v]=P/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function u(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lf(e.vertices,e.indices,e.radius,e.details)}}class Nf extends Lf{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Nf(e.radius,e.detail)}}class rb extends Qa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=w0,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class X0 extends ln{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const hu=new Et,Lm=new I,Nm=new I;class sb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bf,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Lm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Lm),Nm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Nm),n.updateMatrixWorld(),hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dm=new Et,ia=new I,pu=new I;class ab extends sb{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ia.setFromMatrixPosition(e.matrixWorld),i.position.copy(ia),pu.copy(i.position),pu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(pu),i.updateMatrixWorld(),r.makeTranslation(-ia.x,-ia.y,-ia.z),Dm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dm)}}class Um extends X0{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ab}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ob extends X0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class lb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Im(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Im();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Im(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ef}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ef);function Dl({className:t="",intensity:e=.9}){var c;const n=K.useRef(null),i=K.useRef(null),r=K.useRef(null),s=K.useRef(null),a=K.useRef(null),o=K.useRef(0),l=(c=window.matchMedia)==null?void 0:c.call(window,"(prefers-reduced-motion: reduce)").matches;return K.useEffect(()=>{const d=n.current,f=new W0({antialias:!0,alpha:!0});f.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),f.setSize(d.clientWidth,d.clientHeight),f.outputColorSpace=Nt,d.appendChild(f.domElement),i.current=f;const h=new ib;r.current=h;const m=new hn(45,d.clientWidth/d.clientHeight,.1,100);m.position.set(0,.8,4.2),s.current=m;const _=new ob("#ffffff",.5);h.add(_);const y=new Um("#7c3aed",2.4,10);y.position.set(-2,1.5,1.5);const g=new Um("#0ea5e9",1.8,10);g.position.set(2.5,-1,2),h.add(y,g),h.background=null,h.fog=new Pf(new je("#0b0f24"),.28);const u=new ca;a.current=u,h.add(u);const x=new Nf(1,1),v=26;for(let M=0;M<v;M++){const S=new je().setHSL(.72+Math.random()*.12,.6,.6),T=new rb({color:S,metalness:.55,roughness:.25,emissive:new je("#3b0764").multiplyScalar(.3)}),z=new fi(x,T);z.scale.setScalar(.25+Math.random()*.6),z.position.set((Math.random()-.5)*6,(Math.random()-.2)*3,-1-Math.random()*4),z.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),u.add(z)}const E=new lb;function P(){const M=E.getElapsedTime();u.rotation.y=M*.08,u.rotation.x=Math.sin(M*.15)*.05,u.children.forEach((S,T)=>{S.rotation.y+=.005+T%3*.002,S.position.y+=Math.sin(M*.6+T)*8e-4}),f.render(h,m)}function R(){o.current=requestAnimationFrame(R),P()}function b(){const M=d.clientWidth,S=d.clientHeight;f.setSize(M,S),m.aspect=M/S,m.updateProjectionMatrix()}const D=()=>{document.hidden?cancelAnimationFrame(o.current):l||R()};return window.addEventListener("resize",b),document.addEventListener("visibilitychange",D),b(),l?P():R(),()=>{cancelAnimationFrame(o.current),window.removeEventListener("resize",b),document.removeEventListener("visibilitychange",D),u.children.forEach(M=>{M.geometry.dispose(),Array.isArray(M.material)?M.material.forEach(S=>S.dispose()):M.material.dispose()}),f.dispose(),d.removeChild(f.domElement)}},[e]),p.jsx("div",{ref:n,className:`absolute inset-0 -z-10 ${t}`})}function Fm({size:t=140}){const e=t;return p.jsx("div",{className:"tilt-3d",style:{width:e,height:e},children:p.jsxs("svg",{width:e,height:e,viewBox:"0 0 100 100",className:"drop-shadow-lg",children:[p.jsxs("defs",{children:[p.jsxs("linearGradient",{id:"g1",x1:"0",y1:"0",x2:"1",y2:"1",children:[p.jsx("stop",{offset:"0",stopColor:"#7c3aed"}),p.jsx("stop",{offset:"1",stopColor:"#0ea5e9"})]}),p.jsxs("linearGradient",{id:"g2",x1:"1",y1:"0",x2:"0",y2:"1",children:[p.jsx("stop",{offset:"0",stopColor:"#a21caf"}),p.jsx("stop",{offset:"1",stopColor:"#7c3aed"})]})]}),p.jsx("polygon",{points:"50,5 5,85 95,85",fill:"url(#g1)",opacity:"0.85"}),p.jsx("polygon",{points:"50,5 5,85 50,60",fill:"url(#g2)",opacity:"0.95"}),p.jsx("polygon",{points:"50,5 95,85 50,60",fill:"url(#g2)",opacity:"0.65"}),p.jsx("polygon",{points:"5,85 95,85 50,60",fill:"url(#g1)",opacity:"0.55"})]})})}function cb(){const{user:t,loading:e,logout:n}=zs(),i=$a();Ad.useEffect(()=>{console.log("[DEBUG HOME] User state:",{user:t==null?void 0:t.role,phone:t==null?void 0:t.phone,loading:e})},[t,e]);const r=()=>{console.log("[DEBUG] Dashboard button clicked - using navigate"),i("/dashboard")},s=()=>{console.log("[DEBUG] Live class button clicked - using navigate"),i("/student/live/68cced26157d87e24fee03ce")};return e?p.jsx("div",{className:"flex items-center justify-center min-h-[50vh]",children:p.jsxs("div",{className:"text-center",children:[p.jsx("div",{className:"animate-spin w-8 h-8 border-2 border-accent border-t-transparent rounded-full mx-auto mb-2"}),p.jsx("p",{className:"text-sm text-textMuted",children:"Loading..."})]})}):t?p.jsxs("div",{className:"space-y-6",children:[p.jsxs("section",{className:"relative rounded-[14px] overflow-hidden hero-wrap p-0 min-h-[320px]",children:[p.jsx(Dl,{}),p.jsx("div",{className:"relative z-10 px-6 py-12 md:px-12 md:py-16",children:p.jsxs("div",{className:"max-w-2xl",children:[p.jsx("h1",{className:"text-3xl md:text-4xl font-semibold",children:"Welcome back!"}),p.jsxs("p",{className:"text-[#d2d6ff]/80 mt-3",children:["Logged in as ",p.jsx("span",{className:"text-accent font-semibold",children:t.role})," • ",t.phone]}),p.jsx("div",{className:"h-[1px] w-40 mt-6 bg-gradient-to-r from-transparent via-[#c084fc]/60 to-transparent"})]})})]}),p.jsxs("section",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-4",children:[p.jsxs("button",{className:"glass p-6 card-hover flex items-center gap-4 w-full text-left",onClick:r,children:[p.jsx("div",{className:"w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center",children:p.jsx(l0,{size:20,className:"text-accent"})}),p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold",children:"Go to Dashboard"}),p.jsxs("div",{className:"text-xs text-textMuted",children:["Access your ",t.role," portal"]})]})]}),t.role==="student"&&p.jsxs(p.Fragment,{children:[p.jsxs("button",{className:"glass p-6 card-hover flex items-center gap-4 w-full text-left",onClick:s,children:[p.jsx("div",{className:"w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center",children:p.jsx(Kn,{size:20,className:"text-blue-400"})}),p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold",children:"Join Live Class"}),p.jsx("div",{className:"text-xs text-textMuted",children:"Audio-first learning"})]})]}),p.jsxs(Xe,{className:"glass p-6 card-hover flex items-center gap-4",to:"/student/offline",onClick:()=>console.log("[DEBUG] Student: Navigating to offline content"),children:[p.jsx("div",{className:"w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center",children:p.jsx(pi,{size:20,className:"text-green-400"})}),p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold",children:"Offline Content"}),p.jsx("div",{className:"text-xs text-textMuted",children:"Download for later"})]})]})]}),t.role==="teacher"&&p.jsxs(p.Fragment,{children:[p.jsxs(Xe,{className:"glass p-6 card-hover flex items-center gap-4",to:"/faculty/go-live/68cced26157d87e24fee03ce",onClick:()=>console.log("[DEBUG] Teacher: Navigating to go-live"),children:[p.jsx("div",{className:"w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center",children:p.jsx(Kn,{size:20,className:"text-red-400"})}),p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold",children:"Start Live Class"}),p.jsx("div",{className:"text-xs text-textMuted",children:"Broadcast to students"})]})]}),p.jsxs(Xe,{className:"glass p-6 card-hover flex items-center gap-4",to:"/faculty/upload",onClick:()=>console.log("[DEBUG] Teacher: Navigating to upload"),children:[p.jsx("div",{className:"w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center",children:p.jsx(pi,{size:20,className:"text-purple-400"})}),p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold",children:"Upload Content"}),p.jsx("div",{className:"text-xs text-textMuted",children:"Slides and materials"})]})]})]}),p.jsxs("button",{onClick:n,className:"glass p-6 card-hover flex items-center gap-4 hover:bg-red-500/10 transition-colors",children:[p.jsx("div",{className:"w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center",children:p.jsx(c0,{size:20,className:"text-red-400"})}),p.jsxs("div",{className:"text-left",children:[p.jsx("div",{className:"font-semibold",children:"Logout"}),p.jsx("div",{className:"text-xs text-textMuted",children:"Sign out of account"})]})]})]})]}):p.jsxs("div",{className:"space-y-6",children:[p.jsxs("section",{className:"relative rounded-[14px] overflow-hidden hero-wrap p-0 min-h-[420px]",children:[p.jsx(Dl,{}),p.jsx("div",{className:"absolute -left-8 -top-10 opacity-60",children:p.jsx(Fm,{size:160})}),p.jsx("div",{className:"absolute -right-10 -bottom-8 opacity-60",children:p.jsx(Fm,{size:120})}),p.jsxs("div",{className:"relative z-10 px-6 py-12 md:px-12 md:py-16 flex flex-col md:flex-row md:items-center gap-8",children:[p.jsxs("div",{className:"flex-1",children:[p.jsx("h1",{className:"text-3xl md:text-5xl font-semibold leading-tight",children:"RuralConnect Classroom"}),p.jsx("p",{className:"text-sm md:text-base text-[#d2d6ff]/80 mt-3 max-w-2xl",children:"Audio-first educational platform designed for rural areas with low bandwidth. Real SMS OTP authentication with separate portals for students and teachers."}),p.jsx("div",{className:"h-[1px] w-40 mt-6 bg-gradient-to-r from-transparent via-[#c084fc]/60 to-transparent"})]}),p.jsxs("div",{className:"glass p-5 md:p-6 w-full md:w-[360px]",children:[p.jsx("div",{className:"text-lg font-semibold mb-2",children:"Choose Your Portal"}),p.jsx("p",{className:"text-xs text-[#d2d6ff]/70 mb-4",children:"Login with your phone number via SMS OTP"}),p.jsxs("div",{className:"grid gap-3",children:[p.jsxs(Xe,{className:"btn-gradient w-full flex items-center gap-3 p-4 rounded-lg",to:"/login/student",children:[p.jsx("div",{className:"w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center",children:p.jsx(o0,{size:16,className:"text-blue-400"})}),p.jsxs("div",{className:"text-left",children:[p.jsx("div",{className:"font-semibold",children:"Student Login"}),p.jsx("div",{className:"text-xs opacity-80",children:"Join classes, access content"})]})]}),p.jsxs(Xe,{className:"btn w-full flex items-center gap-3 p-4 rounded-lg border border-purple-500/30",to:"/login/teacher",children:[p.jsx("div",{className:"w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center",children:p.jsx(Al,{size:16,className:"text-purple-400"})}),p.jsxs("div",{className:"text-left",children:[p.jsx("div",{className:"font-semibold",children:"Teacher Login"}),p.jsx("div",{className:"text-xs opacity-80",children:"Create & manage classes"})]})]})]})]})]})]}),p.jsxs("section",{className:"grid md:grid-cols-3 gap-4",children:[p.jsxs("div",{className:"glass p-5 card-hover",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-2 text-[#c084fc]",children:[p.jsx(Kn,{size:18})," Live, audio-first"]}),p.jsx("p",{className:"text-sm text-[#d2d6ff]/80",children:"Opus WebRTC with HTTP fallback. Works on low bandwidth."})]}),p.jsxs("div",{className:"glass p-5 card-hover",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-2 text-[#c084fc]",children:[p.jsx(pi,{size:18})," Offline packages"]}),p.jsx("p",{className:"text-sm text-[#d2d6ff]/80",children:"Slides + audio saved to device with background sync."})]}),p.jsxs("div",{className:"glass p-5 card-hover",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-2 text-[#c084fc]",children:[p.jsx(Mf,{size:18})," Discussions"]}),p.jsx("p",{className:"text-sm text-[#d2d6ff]/80",children:"Lightweight forum with offline outbox for patchy networks."})]})]})]})}function Df({className:t="",density:e=90}){const n=K.useRef(null);return K.useEffect(()=>{let i=0;const r=n.current,s=r.getContext("2d",{alpha:!0});function a(){const h=Math.min(2,window.devicePixelRatio||1),m=r.clientWidth,_=r.clientHeight;r.width=Math.round(m*h),r.height=Math.round(_*h),s.setTransform(h,0,0,h,0,0),d(m,_)}function o(h,m,_){return h+(m-h)*_}function l(h,m,_){const y=c(h),g=c(m);return`rgb(${Math.round(o(y.r,g.r,_))},${Math.round(o(y.g,g.g,_))},${Math.round(o(y.b,g.b,_))})`}function c(h){const m=h.replace("#",""),_=parseInt(m.length===3?m.split("").map(y=>y+y).join(""):m,16);return{r:_>>16&255,g:_>>8&255,b:_&255}}function d(h,m){s.clearRect(0,0,h,m);const _=Math.max(64,e),y=_*.32,g=Math.ceil(h/_)+2,u=Math.ceil(m/_)+2,x=[];for(let S=0;S<u;S++)for(let T=0;T<g;T++){const z=T*_+(Math.random()*y-y/2),Q=S*_+(Math.random()*y-y/2);x.push({x:z,y:Q})}const v=h*.5,E=m*.45,P=Math.hypot(Math.max(v,h-v),Math.max(E,m-E));function R(S,T){const z=Math.hypot(S-v,T-E)/P;return z<.4?l("#1e1b4b","#7c3aed",z/.4):z<.85?l("#7c3aed","#a21caf",(z-.4)/.45):"#111827"}const b=(S,T)=>T*g+S;for(let S=0;S<u-1;S++)for(let T=0;T<g-1;T++){const z=x[b(T,S)],Q=x[b(T+1,S)],L=x[b(T,S+1)],O=x[b(T+1,S+1)];D(z,Q,L),D(Q,O,L)}function D(S,T,z){const Q=(S.x+T.x+z.x)/3,L=(S.y+T.y+z.y)/3;s.fillStyle=R(Q,L),s.beginPath(),s.moveTo(S.x,S.y),s.lineTo(T.x,T.y),s.lineTo(z.x,z.y),s.closePath(),s.fill()}const M=s.createRadialGradient(h/2,m*.6,10,h/2,m*.6,Math.max(h,m));M.addColorStop(0,"rgba(0,0,0,0)"),M.addColorStop(1,"rgba(0,0,0,0.35)"),s.fillStyle=M,s.fillRect(0,0,h,m)}const f=()=>{cancelAnimationFrame(i),i=requestAnimationFrame(a)};return a(),window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f),cancelAnimationFrame(i)}},[]),p.jsx("canvas",{ref:n,className:`absolute inset-0 -z-10 ${t}`})}function ub(){return p.jsx("div",{className:"relative",children:p.jsx("div",{className:"hero-wrap p-0",children:p.jsxs("div",{className:"relative rounded-[14px] overflow-hidden min-h-[68vh] flex items-center",children:[p.jsx(Df,{}),p.jsxs("div",{className:"relative z-10 w-full max-w-4xl mx-auto p-6 md:p-12",children:[p.jsxs("div",{className:"text-center mb-8",children:[p.jsx("h2",{className:"text-3xl md:text-5xl font-semibold mb-4",children:"Choose Your Portal"}),p.jsx("p",{className:"text-[#d2d6ff]/80 max-w-2xl mx-auto",children:"RuralConnect Classroom offers separate portals for students and teachers. Simply enter your phone number to login - no OTP required."})]}),p.jsxs("div",{className:"grid md:grid-cols-2 gap-6 max-w-3xl mx-auto",children:[p.jsxs(Xe,{to:"/login/student",className:"group glass p-6 md:p-8 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105",children:[p.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[p.jsx("div",{className:"w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors",children:p.jsx(o0,{size:24,className:"text-blue-400"})}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-xl font-semibold",children:"Student Portal"}),p.jsx("p",{className:"text-sm text-[#d2d6ff]/70",children:"Learn and participate"})]})]}),p.jsxs("ul",{className:"space-y-2 text-sm text-[#d2d6ff]/80 mb-4",children:[p.jsx("li",{children:"• Join live audio classes"}),p.jsx("li",{children:"• Download offline content"}),p.jsx("li",{children:"• Participate in discussions"}),p.jsx("li",{children:"• Take interactive quizzes"})]}),p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:"text-blue-400 font-medium",children:"Login as Student"}),p.jsx(ap,{size:16,className:"text-blue-400 group-hover:translate-x-1 transition-transform"})]})]}),p.jsxs(Xe,{to:"/login/teacher",className:"group glass p-6 md:p-8 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105",children:[p.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[p.jsx("div",{className:"w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors",children:p.jsx(Al,{size:24,className:"text-purple-400"})}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-xl font-semibold",children:"Teacher Portal"}),p.jsx("p",{className:"text-sm text-[#d2d6ff]/70",children:"Create and manage"})]})]}),p.jsxs("ul",{className:"space-y-2 text-sm text-[#d2d6ff]/80 mb-4",children:[p.jsx("li",{children:"• Create and schedule classes"}),p.jsx("li",{children:"• Upload slides and content"}),p.jsx("li",{children:"• Record audio narrations"}),p.jsx("li",{children:"• Conduct live sessions"})]}),p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:"text-purple-400 font-medium",children:"Login as Teacher"}),p.jsx(ap,{size:16,className:"text-purple-400 group-hover:translate-x-1 transition-transform"})]})]})]}),p.jsxs("div",{className:"text-center mt-8",children:[p.jsx("div",{className:"h-[1px] w-40 mx-auto bg-gradient-to-r from-transparent via-[#c084fc]/60 to-transparent mb-4"}),p.jsx("p",{className:"text-sm text-[#d2d6ff]/60",children:"Quick and easy access - no verification codes needed"})]})]})]})})})}function db(){const{loading:t,error:e,login:n}=zs(),[i,r]=K.useState(""),[s,a]=K.useState(""),o=$a(),l=nr();K.useEffect(()=>{const h=new URLSearchParams(l.search).get("testPhone");h&&(r(h),a("Test phone number pre-filled. Ready to login."))},[l]);const c=async()=>{const f=await n(i,"student");f.status==="ok"?(a("Logged in successfully! Redirecting..."),o("/dashboard")):a(f.message||"Login failed")},d=f=>{f.key==="Enter"&&i&&!t&&c()};return p.jsx("div",{className:"relative",children:p.jsx("div",{className:"hero-wrap p-0",children:p.jsxs("div",{className:"relative rounded-[14px] overflow-hidden min-h-[68vh] flex items-center",children:[p.jsx(Df,{}),p.jsxs("div",{className:"relative z-10 w-full grid lg:grid-cols-2 gap-8 p-6 md:p-12",children:[p.jsxs("div",{className:"hidden lg:block",children:[p.jsx("h2",{className:"text-3xl md:text-5xl font-semibold",children:"Student Portal"}),p.jsx("p",{className:"text-[#d2d6ff]/80 mt-3 max-w-xl",children:"Join live classes, access offline content, participate in discussions and take quizzes."}),p.jsx("div",{className:"h-[1px] w-40 mt-6 bg-gradient-to-r from-transparent via-[#c084fc]/60 to-transparent"}),p.jsx("div",{className:"mt-6",children:p.jsxs("p",{className:"text-sm text-[#d2d6ff]/60",children:["Are you a teacher? ",p.jsx("a",{href:"/login/teacher",className:"text-accent hover:underline",children:"Login here"})]})})]}),p.jsxs("div",{className:"glass p-6 md:p-8 max-w-md w-full justify-self-end",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[p.jsx("div",{className:"w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center",children:p.jsx("span",{className:"text-blue-400 text-sm font-semibold",children:"S"})}),p.jsx("h3",{className:"text-xl font-semibold",children:"Student Login"})]}),p.jsx("label",{className:"text-sm text-[#d2d6ff]/80",children:"Phone Number"}),p.jsx("input",{className:"input w-full mb-3",placeholder:"+91 9876543210",value:i,onChange:f=>r(f.target.value),onKeyPress:d,type:"tel"}),p.jsx("button",{className:"btn-gradient w-full",disabled:t||!i,onClick:c,children:t?"Logging in...":"Login"}),s&&p.jsx("div",{className:`text-sm mt-3 p-2 rounded ${s.includes("success")?"text-green-400 bg-green-400/10":"text-yellow-400 bg-yellow-400/10"}`,children:s}),e&&p.jsx("div",{className:"text-sm text-red-400 bg-red-400/10 p-2 rounded mt-2",children:e}),p.jsx("div",{className:"text-[11px] text-[#d2d6ff]/60 mt-3",children:"By continuing, you agree to our minimal data-use policy."}),p.jsx("div",{className:"mt-4 p-3 bg-blue-500/10 rounded border border-blue-500/20",children:p.jsxs("p",{className:"text-xs text-blue-300",children:[p.jsx("strong",{children:"Note:"})," Simplified login without OTP. Just enter your phone number to access the classroom."]})})]})]})]})})})}function fb(){const{loading:t,error:e,login:n}=zs(),[i,r]=K.useState(""),[s,a]=K.useState(""),o=$a(),l=nr();K.useEffect(()=>{const h=new URLSearchParams(l.search).get("testPhone");h&&(r(h),a("Test phone number pre-filled. Ready to login."))},[l]);const c=async()=>{const f=await n(i,"teacher");f.status==="ok"?(a("Logged in successfully! Redirecting..."),o("/dashboard")):a(f.message||"Login failed")},d=f=>{f.key==="Enter"&&i&&!t&&c()};return p.jsx("div",{className:"relative",children:p.jsx("div",{className:"hero-wrap p-0",children:p.jsxs("div",{className:"relative rounded-[14px] overflow-hidden min-h-[68vh] flex items-center",children:[p.jsx(Df,{}),p.jsxs("div",{className:"relative z-10 w-full grid lg:grid-cols-2 gap-8 p-6 md:p-12",children:[p.jsxs("div",{className:"hidden lg:block",children:[p.jsx("h2",{className:"text-3xl md:text-5xl font-semibold",children:"Faculty Portal"}),p.jsx("p",{className:"text-[#d2d6ff]/80 mt-3 max-w-xl",children:"Create and manage classes, upload content, conduct live sessions, and track student progress."}),p.jsx("div",{className:"h-[1px] w-40 mt-6 bg-gradient-to-r from-transparent via-[#c084fc]/60 to-transparent"}),p.jsx("div",{className:"mt-6",children:p.jsxs("p",{className:"text-sm text-[#d2d6ff]/60",children:["Are you a student? ",p.jsx("a",{href:"/login/student",className:"text-accent hover:underline",children:"Login here"})]})})]}),p.jsxs("div",{className:"glass p-6 md:p-8 max-w-md w-full justify-self-end",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[p.jsx("div",{className:"w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center",children:p.jsx("span",{className:"text-purple-400 text-sm font-semibold",children:"T"})}),p.jsx("h3",{className:"text-xl font-semibold",children:"Teacher Login"})]}),p.jsx("label",{className:"text-sm text-[#d2d6ff]/80",children:"Phone Number"}),p.jsx("input",{className:"input w-full mb-3",placeholder:"+91 9876543210",value:i,onChange:f=>r(f.target.value),onKeyPress:d,type:"tel"}),p.jsx("button",{className:"btn-gradient w-full",disabled:t||!i,onClick:c,children:t?"Logging in...":"Login"}),s&&p.jsx("div",{className:`text-sm mt-3 p-2 rounded ${s.includes("success")?"text-green-400 bg-green-400/10":"text-yellow-400 bg-yellow-400/10"}`,children:s}),e&&p.jsx("div",{className:"text-sm text-red-400 bg-red-400/10 p-2 rounded mt-2",children:e}),p.jsx("div",{className:"text-[11px] text-[#d2d6ff]/60 mt-3",children:"By continuing, you agree to our minimal data-use policy."}),p.jsx("div",{className:"mt-4 p-3 bg-purple-500/10 rounded border border-purple-500/20",children:p.jsxs("p",{className:"text-xs text-purple-300",children:[p.jsx("strong",{children:"Note:"})," Simplified login without OTP. Just enter your phone number to access the classroom."]})})]})]})]})})})}function hb({value:t=.72,size:e=64,strokeWidth:n=8,color:i="#14f195",bg:r="rgba(255,255,255,0.08)",label:s}){const a=(e-n)/2,o=2*Math.PI*a,l=Math.max(0,Math.min(1,t))*o;return p.jsxs("div",{className:"relative inline-block",style:{width:e,height:e},children:[p.jsxs("svg",{width:e,height:e,children:[p.jsx("circle",{cx:e/2,cy:e/2,r:a,stroke:r,strokeWidth:n,fill:"none"}),p.jsx("circle",{cx:e/2,cy:e/2,r:a,stroke:i,strokeWidth:n,fill:"none",strokeLinecap:"round",strokeDasharray:`${l} ${o-l}`,transform:`rotate(-90 ${e/2} ${e/2})`})]}),s&&p.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-xs text-textMuted",children:s})]})}function Ms({title:t,value:e,hint:n,pct:i,icon:r}){return p.jsxs("div",{className:"card card-hover p-4 flex items-center gap-3",children:[r&&p.jsx("div",{className:"h-10 w-10 rounded-md bg-accent/15 border border-accent/30 text-accent flex items-center justify-center",children:r}),p.jsxs("div",{className:"flex-1",children:[p.jsx("div",{className:"text-textMuted text-xs",children:t}),p.jsx("div",{className:"text-xl font-semibold leading-tight",children:e}),n&&p.jsx("div",{className:"text-xs text-textMuted mt-0.5",children:n})]}),typeof i=="number"&&p.jsx(hb,{value:i,size:52,strokeWidth:7,label:`${Math.round(i*100)}%`})]})}function Ul({title:t="Nothing here yet",subtitle:e="This section will populate when data is available.",action:n}){return p.jsxs("div",{className:"border border-border rounded-lg p-6 text-center text-textMuted",children:[p.jsx("div",{className:"text-sm font-semibold mb-1",children:t}),p.jsx("div",{className:"text-xs opacity-80",children:e}),n&&p.jsx("div",{className:"mt-3",children:n})]})}function pb(){const[t,e]=K.useState(!1),[n,i]=K.useState(!1),[r,s]=K.useState([{id:1,type:"bot",content:"Hello! I'm your AI study assistant. I can help you with questions about your classes, study tips, or any academic topics. How can I assist you today? 🤖📚",timestamp:new Date}]),[a,o]=K.useState(""),[l,c]=K.useState(!1),d=K.useRef(null),f=K.useRef(null),h=()=>{var S;(S=d.current)==null||S.scrollIntoView({behavior:"smooth"})};K.useEffect(()=>{h()},[r]),K.useEffect(()=>{var S;t&&!n&&((S=f.current)==null||S.focus())},[t,n]);const m=S=>{const T=S.toLowerCase();return T.includes("word problem")||T.includes("story problem")?`🧠 **Advanced Problem-Solving Framework:**

📖 **Step 1: Read & Understand**
• Read the problem 2-3 times carefully
• Identify what's being asked (the question)
• Underline or highlight key information
• Ignore irrelevant details

🔍 **Step 2: Analyze & Extract**
• What do I know? (given information)
• What do I need to find? (unknown)
• What relationships exist between known and unknown?
• Are there any constraints or conditions?

🎯 **Step 3: Plan Strategy**
• What mathematical concepts apply here?
• Can I draw a diagram or visual representation?
• Is this similar to problems I've solved before?
• What formula or method should I use?

⚡ **Step 4: Execute & Solve**
• Set up equations or calculations
• Work through step-by-step
• Show all work clearly
• Double-check calculations

✅ **Step 5: Verify & Reflect**
• Does my answer make sense in context?
• Can I check it a different way?
• What did I learn from this problem?
• How can I apply this method to similar problems?

💡 **Pro Tips:**
• If stuck, try working backwards from the answer
• Break complex problems into smaller parts
• Use estimation to check if answer is reasonable
• Practice similar problems to build pattern recognition

Tell me your specific problem and I'll walk through it with you!`:T.includes("steps")||T.includes("solve")||T.includes("method")?`🎯 **Intelligent Problem-Solving Approach:**

🧩 **Universal Problem-Solving Method:**
1. **Comprehension**: What exactly is being asked?
2. **Analysis**: What tools/knowledge do I need?
3. **Strategy**: What's my plan of attack?
4. **Execution**: Implement the solution step-by-step
5. **Evaluation**: Is my answer correct and complete?

🔬 **Critical Thinking Questions:**
• What patterns do I recognize?
• What assumptions am I making?
• Are there multiple approaches?
• How does this connect to what I already know?
• What would happen if I changed one variable?

💭 **Metacognitive Reflection:**
• Am I understanding the underlying concepts?
• What strategies work best for me?
• Where do I typically make mistakes?
• How can I improve my problem-solving process?

Share your specific challenge and I'll demonstrate this advanced reasoning approach!`:`🚀 **Advanced Problem Solver Activated!**

I can help you tackle complex problems using sophisticated reasoning. Whether it's:
• Multi-step math problems with logical progression
• Scientific analysis requiring hypothesis testing
• Essay arguments needing critical evaluation
• Strategic study planning with optimization

I'll break down any challenge into manageable steps and teach you the thinking process behind each solution.

What specific problem shall we solve together?`},_=(S,T)=>{if(T.includes("why")){if(T.includes("math")||T.includes("algebra")||T.includes("formula"))return`🤔 **Why Mathematics Works (Deep Understanding):**

🌟 **The Beauty of Mathematical Logic:**
Math isn't arbitrary rules - it's a language that describes patterns in our universe!

🔬 **Why Formulas Exist:**
• They capture relationships that always work
• They're shortcuts for repeated reasoning
• They connect abstract concepts to real situations
• Example: A = πr² isn't just memorization - it represents how area grows exponentially with radius!

🧠 **Why We Learn Step-by-Step:**
• Complex reasoning builds on simple foundations
• Each concept unlocks access to more advanced ideas
• Mastery at each level prevents confusion later
• Like building a house - you need a solid foundation first

💡 **Why Practice Matters:**
• Pattern recognition becomes automatic
• Your brain builds neural pathways for problem-solving
• Confidence grows through successful experiences
• Transfer learning - skills apply to new situations

🎯 **The Deeper Purpose:**
Math teaches logical thinking, problem-solving, and precision - skills valuable in ANY career or life situation!

What specific mathematical 'why' can I explain for you?`;if(T.includes("study")||T.includes("learn"))return`🧠 **Why We Study (The Science Behind Learning):**

🔬 **Neuroplasticity in Action:**
• Your brain physically changes when you learn!
• New neural connections form with each concept mastered
• Practice strengthens these pathways like muscle training
• This is why 'getting it' feels like a breakthrough moment

🎯 **Why Different Methods Work:**
• **Visual learners**: Spatial processing areas activate
• **Auditory learners**: Language centers engage more
• **Kinesthetic learners**: Motor cortex involvement helps
• **Everyone benefits** from multi-sensory approaches!

⏰ **Why Timing Matters:**
• **Spaced repetition**: Leverages memory consolidation cycles
• **Sleep**: Brain literally cleans out toxins and strengthens memories
• **Interleaving**: Mixing topics builds flexible thinking
• **Deliberate practice**: Focused effort in weakness areas accelerates growth

🌱 **Why Struggle is Good:**
• Difficulty forces deeper processing
• Making mistakes activates error-correction systems
• Overcoming challenges builds resilience and confidence
• 'Productive struggle' leads to stronger understanding

🚀 **The Ultimate Why:**
Learning expands your capacity to understand and shape the world around you!

What aspect of learning science interests you most?`}return T.includes("how does")||T.includes("how can")||T.includes("how to")?`⚡ **Advanced 'How' Analysis:**

🔍 **Multi-Level Thinking Approach:**
• **Surface Level**: What are the immediate steps?
• **Strategic Level**: What's the underlying method?
• **Conceptual Level**: Why does this approach work?
• **Transfer Level**: How can I apply this elsewhere?

🧩 **Systems Thinking:**
• How do all the pieces connect?
• What are the cause-and-effect relationships?
• Where are the leverage points for maximum impact?
• What patterns repeat across different contexts?

💭 **Critical Analysis Framework:**
• What are the assumptions behind this approach?
• What alternative methods exist?
• What are the trade-offs of each option?
• How do I choose the best strategy for my situation?

🎯 **Implementation Strategy:**
• Start with the end goal clearly defined
• Work backwards to identify necessary steps
• Identify potential obstacles and solutions
• Create checkpoints to monitor progress

Give me your specific 'how' question and I'll provide a comprehensive, multi-layered analysis!`:`🤔 **Deep Thinking Mode Activated!**

I can provide sophisticated explanations that go beyond surface-level answers:

• **Root Cause Analysis**: Understanding the 'why' behind concepts
• **Systems Thinking**: How everything connects and influences everything else
• **Multiple Perspectives**: Examining questions from different angles
• **Predictive Reasoning**: What happens if we change variables?
• **Transfer Learning**: How knowledge applies across domains

What would you like me to analyze deeply for you?`},y=(S,T)=>["confused","don't understand","don't get","lost","stuck"].some(L=>T.includes(L))?`🤝 **Confusion is Normal - Let's Figure This Out Together!**

🧠 **First, Let's Diagnose:**
• What specific part doesn't make sense?
• Where did you first feel lost?
• What do you DO understand about this topic?
• Have you seen anything similar before?

🔧 **Adaptive Learning Strategies:**
• **Concept Mapping**: Let's draw connections between ideas
• **Analogies**: Find familiar concepts that work similarly
• **Multiple Representations**: Try visual, verbal, and numerical approaches
• **Scaffolding**: Build up from what you already know

🎯 **Targeted Support Approach:**
1. **Identify Prerequisites**: What foundation knowledge is missing?
2. **Fill Gaps**: Quick review of necessary background
3. **Rebuild Understanding**: Step-by-step concept construction
4. **Apply & Practice**: Immediate application to solidify learning
5. **Extend & Connect**: Link to broader understanding

💡 **Confusion-to-Clarity Techniques:**
• **Feynman Method**: Explain it like you're teaching a friend
• **Question Chains**: Ask 'why' and 'how' repeatedly
• **Error Analysis**: Learn from what went wrong
• **Multiple Examples**: See the pattern across different contexts

🌟 **Remember**: Confusion means you're at the edge of new learning!

Tell me exactly where you're stuck and I'll provide personalized support to get you unstuck!`:`🌟 **Personalized Learning Support:**

I can adapt my explanations to your specific learning style and needs:

• **Visual Learners**: Diagrams, charts, spatial relationships
• **Auditory Learners**: Verbal explanations, discussions, rhythms
• **Kinesthetic Learners**: Hands-on examples, movement, manipulation
• **Reading/Writing**: Text-based learning, note-taking strategies

I'll also adjust complexity based on your current understanding level.

What learning challenge can I help you overcome?`,g=(S,T)=>{const z={isFollowUp:!1,previousTopic:null,needsClarification:!1,complexity:"beginner"};return S.includes("fraction")&&T.includes("add")&&(z.isFollowUp=!0,z.previousTopic="fractions"),z},u=(S,T)=>["hello","hi","hey","helo","hellooo","good morning","good evening"].some(L=>S.includes(L))||S.trim().split(" ").length<=2&&S.length<=10&&["what","how","why","when","where","ok","thanks","yes","no"].includes(S.trim())?!1:["also","what about","but","however","and then","another","more","else","next"].some(L=>S.includes(L))||T&&S.includes("that")||S.includes("this"),x=(S,T,z)=>z.includes("fraction")&&T.includes("add")?`📚 **Building on Fractions - Adding Specifically:**

Since we just discussed fractions, let me dive deeper into addition:

🎯 **Same Denominators (Easy!):**
• ¹⁄₄ + ²⁄₄ = ³⁄₄ (just add the tops!)
• ³⁄₈ + ¹⁄₈ = ⁴⁄₈ = ½ (simplify when possible)

🔄 **Different Denominators (Need Common Ground):**
• ½ + ⅓: Find common denominator (6)
• ½ = ³⁄₆ and ⅓ = ²⁄₆
• So ³⁄₆ + ²⁄₆ = ⁵⁄₆

🧠 **The 'Butterfly Method':**
\`\`\`
  1   +   1   =  ?    Cross multiply:
  2       3          1×3 + 1×2 = 5
                     2×3 = 6
                     Answer: 5/6
\`\`\`

Need me to walk through a specific fraction addition problem?`:z.includes("math")&&(T.includes("another")||T.includes("more"))?`🎯 **More Advanced Math Concepts:**

Since you're interested in expanding your math knowledge:

🔢 **Next Level Topics:**
• **Exponents**: Powers and roots (2³ = 8)
• **Variables**: Using letters for unknown numbers (x + 5 = 12)
• **Functions**: Mathematical machines that transform inputs to outputs
• **Graphing**: Visual representation of mathematical relationships

🌟 **Problem-Solving Strategies:**
• **Working Backwards**: Start with the answer and reverse-engineer
• **Guess and Check**: Strategic trial and error
• **Looking for Patterns**: Finding rules in number sequences
• **Drawing Pictures**: Visualizing word problems

Which advanced topic interests you most?`:`💭 **I sense you want to go deeper!**

Based on our conversation, I can provide:
• More detailed explanations of the current topic
• Related concepts that build on what we've discussed
• Practice problems to test your understanding
• Connections to real-world applications

What specific aspect would you like to explore further?`,v=S=>S.includes("solve")||S.includes("calculate")||/\d+[\+\-\*\/]\d+/.test(S)?"computational":S.includes("why")||S.includes("how")||S.includes("explain")?"conceptual":S.includes("help")||S.includes("stuck")||S.includes("confused")?"support":S.includes("study")||S.includes("learn")||S.includes("practice")?"learning":"general",E=S=>{const T=["calculus","derivative","integral","quadratic","trigonometry"],z=["algebra","geometry","fraction","equation","variable"],Q=["add","subtract","multiply","divide"];return T.some(L=>S.includes(L))?"advanced":z.some(L=>S.includes(L))?"intermediate":Q.some(L=>S.includes(L))?"basic":"general"},P=S=>S.includes("show me")||S.includes("picture")||S.includes("diagram")?"visual":S.includes("explain")||S.includes("tell me")||S.includes("say")?"auditory":S.includes("practice")||S.includes("do")||S.includes("try")?"kinesthetic":"mixed",R=S=>{const T=S.toLowerCase().trim();if(console.log("Processing message:",T),T.includes("solve")||T.includes("help me with")||T.includes("how do i"))return m(S);if(T.includes("why")||T.includes("how")||T.includes("what if")||T.includes("explain why"))return _(S,T);if(T.includes("understand")||T.includes("confused")||T.includes("don't get"))return y(S,T);const z=r.slice(-3).map($=>$.content.toLowerCase()).join(" ");if(g(z,T),u(T,z))return x(S,T,z);const Q=v(T),L=E(T),O=P(T);console.log("AI Analysis:",{questionType:Q,complexity:L,learningStyle:O});let q,Z,U,k,j,Y;if(q=T.match(/(\d+)\s*([+\-*/^])\s*(\d+)/),q){[,Z,k,U]=q;const $=parseFloat(Z),se=parseFloat(U);switch(k){case"+":Y=$+se,j="addition";break;case"-":Y=$-se,j="subtraction";break;case"*":Y=$*se,j="multiplication";break;case"/":Y=se!==0?$/se:"undefined (division by zero)",j="division";break;case"^":Y=Math.pow($,se),j="exponentiation";break}return`🧮 **${Z} ${k} ${U} = ${Y}**

📚 That's ${j}! Here are some tips:
• Always double-check your work
• Practice mental math for speed
• Understanding is better than memorizing

Need help with more math problems?`}if(T.includes("add")||T.includes("plus")||T.includes("sum")){const $=T.match(/(?:add|plus|sum).*?(\d+(?:\.\d+)?).*?(?:and|with|\+).*?(\d+(?:\.\d+)?)/);if($){const[,se,he]=$;return Y=parseFloat(se)+parseFloat(he),`🧮 **${se} + ${he} = ${Y}**

📚 Addition Tips:
• Think of it as combining quantities
• Use the commutative property (a+b = b+a)
• Practice skip counting for larger numbers
• Break down complex additions into simpler parts`}}if(T.includes("quadratic")||T.includes("x²")||T.includes("algebra"))return`📐 **Quadratic Equations Help:**

🔢 **Standard Form:** ax² + bx + c = 0

📝 **Solution Methods:**
• **Factoring:** Find (mx + p)(nx + q) = 0
• **Quadratic Formula:** x = [-b ± √(b²-4ac)] / 2a
• **Completing the Square:** Convert to (x + h)² = k form

💡 **Tips:**
• Always check your solutions by substituting back
• Graph the parabola to visualize solutions
• Discriminant (b²-4ac) tells you about roots

Need help with a specific quadratic problem?`;if(T.includes("calculus")||T.includes("derivative")||T.includes("integral"))return`∫ **Calculus Fundamentals:**

📈 **Derivatives (Rate of Change):**
• d/dx[xⁿ] = nxⁿ⁻¹ (Power Rule)
• d/dx[sin(x)] = cos(x)
• d/dx[eˣ] = eˣ
• Chain Rule: d/dx[f(g(x))] = f'(g(x)) × g'(x)

📊 **Integrals (Area Under Curve):**
• ∫xⁿ dx = (xⁿ⁺¹)/(n+1) + C
• ∫sin(x) dx = -cos(x) + C
• ∫eˣ dx = eˣ + C

🎯 **Study Tips:**
• Practice derivatives first, then integrals
• Memorize basic formulas
• Understand the geometric meaning

What specific calculus topic needs help?`;if(T.includes("fraction")||T.includes("fractions")||T.includes("numerator")||T.includes("denominator"))return`🔢 **Complete Fractions Guide:**

📚 **What Are Fractions?**
• A fraction represents part of a whole
• Written as **numerator/denominator** (like ¾)
• **Numerator** = top number (parts we have)
• **Denominator** = bottom number (total parts)

🎯 **Types of Fractions:**
• **Proper:** Numerator < Denominator (like ½, ¾)
• **Improper:** Numerator ≥ Denominator (like ⁵⁄₃, ⁷⁄₄)
• **Mixed Numbers:** Whole number + fraction (like 2¼)
• **Equivalent:** Same value, different form (½ = ²⁄₄ = ³⁄₆)

➕ **Adding Fractions:**
• **Same denominator:** Add numerators (½ + ¼ = ²⁄₄ + ¼ = ¾)
• **Different denominators:** Find common denominator first
• Example: ½ + ⅓ = ³⁄₆ + ²⁄₆ = ⁵⁄₆

✖️ **Multiplying Fractions:**
• Multiply numerators together
• Multiply denominators together
• Example: ½ × ¾ = ³⁄₈
• **Tip:** Simplify before multiplying when possible

➗ **Dividing Fractions:**
• "Keep, Change, Flip" method
• Keep first fraction, change ÷ to ×, flip second fraction
• Example: ½ ÷ ¼ = ½ × ⁴⁄₁ = ²⁄₁ = 2

💡 **Real-World Examples:**
• Pizza slices: If you eat 2 out of 8 slices = ²⁄₈ = ¼
• Time: 30 minutes = ³⁰⁄₆₀ = ½ hour
• Money: 25 cents = ²⁵⁄₁₀₀ = ¼ dollar

🎨 **Memory Tricks:**
• **Butterfly Method** for adding/subtracting different denominators
• **Cross multiply** for comparing fractions
• **Pizza visualization** for understanding parts of a whole

📝 **Practice Tips:**
• Start with visual models (pie charts, number lines)
• Use real objects to represent fractions
• Practice simplifying fractions daily
• Connect fractions to decimals and percentages

What specific fraction concept would you like me to explain further?`;if(T.includes("percentage")||T.includes("percent")||T.includes("%"))return`📊 **Percentages Made Simple:**

🎯 **What is a Percentage?**
• Percent = "per hundred" (% = /100)
• 50% = 50/100 = 0.5 = ½
• Way to express parts of a whole

🔄 **Conversions:**
• **Fraction to %:** Divide, multiply by 100
• **Decimal to %:** Multiply by 100, add % sign
• **% to Decimal:** Divide by 100
• Examples: ¼ = 0.25 = 25%

🧮 **Calculating Percentages:**
• **Find % of number:** Number × (% ÷ 100)
• Example: 20% of 80 = 80 × (20÷100) = 16
• **Find what % one number is of another:** (Part÷Whole) × 100
• Example: What % is 15 of 60? (15÷60) × 100 = 25%

💰 **Real-World Applications:**
• **Discounts:** 30% off $100 = $100 - $30 = $70
• **Tips:** 15% of $40 bill = $6 tip
• **Grades:** 18 out of 20 = 90%
• **Growth:** Population increased by 25%

📝 **Memory Tricks:**
• 50% = half, 25% = quarter, 75% = three-quarters
• 10% = move decimal left one place
• 1% = divide by 100
• Double and halve for quick calculations

Need help with a specific percentage problem?`;if(T.includes("decimal")||T.includes("decimals"))return`🔢 **Decimal Number System:**

📍 **Understanding Decimals:**
• Numbers with a decimal point (like 3.14, 0.5)
• Each position has 10× value of position to its right
• Places: ones, tenths, hundredths, thousandths
• Example: 3.142 = 3 + 1/10 + 4/100 + 2/1000

🔄 **Decimal Operations:**
• **Adding/Subtracting:** Line up decimal points
• **Multiplying:** Ignore decimals, then count total decimal places
• **Dividing:** Move decimal point in divisor and dividend equally

💡 **Fraction Connections:**
• 0.5 = ½ (five tenths = one half)
• 0.25 = ¼ (twenty-five hundredths = one quarter)
• 0.75 = ¾ (seventy-five hundredths = three quarters)
• 0.1 = 1/10, 0.01 = 1/100

🎯 **Rounding Decimals:**
• Look at digit to the right of target place
• If 5 or greater, round up
• If less than 5, round down
• Example: 3.147 rounded to tenths = 3.1

📊 **Real-World Examples:**
• Money: $3.50 (3 dollars, 50 cents)
• Measurements: 5.2 meters, 98.6°F
• Statistics: 3.14159... (π)

What decimal concept needs more explanation?`;if(T.includes("geometry")||T.includes("triangle")||T.includes("circle"))return`📐 **Geometry Solutions:**

🔺 **Triangles:**
• Area = ½ × base × height
• Pythagorean: a² + b² = c² (right triangles)
• Sum of angles = 180°
• Types: Equilateral, Isosceles, Scalene

⭕ **Circles:**
• Area = πr²
• Circumference = 2πr
• Arc length = (θ/360°) × 2πr
• Sector area = (θ/360°) × πr²

📏 **Key Formulas:**
• Rectangle: Area = length × width
• Trapezoid: Area = ½(b₁ + b₂) × height

What geometry problem can I solve?`;if(T.includes("physics")||T.includes("force")||T.includes("velocity"))return`⚗️ **Physics Help Center:**

� **Mechanics:**
• Force = mass × acceleration (F = ma)
• Velocity = displacement / time
• Kinetic Energy = ½mv²
• Potential Energy = mgh

⚡ **Electricity:**
• Ohm's Law: V = IR
• Power = VI = I²R = V²/R
• Electrical Energy = Power × Time

🌊 **Waves:**
• Wave speed = frequency × wavelength
• Period = 1 / frequency

💡 **Problem-Solving Steps:**
1. Identify given values
2. Choose the right formula
3. Substitute and calculate
4. Check units and reasonableness

What physics concept needs clarification?`;if(T.includes("chemistry")||T.includes("molecule")||T.includes("reaction"))return`🧪 **Chemistry Assistant:**

⚛️ **Atomic Structure:**
• Protons (positive) + Neutrons = Nucleus
• Electrons (negative) orbit the nucleus
• Atomic number = number of protons
• Mass number = protons + neutrons

🔬 **Chemical Equations:**
• Reactants → Products
• Balance atoms on both sides
• Conservation of mass applies

🧮 **Mole Calculations:**
• 1 mole = 6.022 × 10²³ particles
• Molar mass from periodic table
• n = m/M (moles = mass/molar mass)

📊 **Periodic Trends:**
• Atomic radius decreases across period
• Ionization energy increases across period
• Electronegativity increases across period

What chemistry topic can I explain?`;if(T.includes("biology")||T.includes("cell")||T.includes("dna"))return`🧬 **Biology Study Guide:**

🦠 **Cell Biology:**
• Prokaryotes: No nucleus (bacteria)
• Eukaryotes: Has nucleus (plants, animals)
• Cell membrane controls what enters/exits
• Mitochondria = cellular powerhouse

🧬 **Genetics:**
• DNA → RNA → Protein (Central Dogma)
• A-T and G-C base pairing
• Genes code for traits
• Dominant vs Recessive alleles

🌱 **Ecology:**
• Producers → Primary → Secondary → Tertiary consumers
• Energy flows, matter cycles
• Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂

🔬 **Study Methods:**
• Draw and label diagrams
• Make concept maps
• Use mnemonics for processes

What biology concept needs explanation?`;if(T.includes("english")||T.includes("essay")||T.includes("writing"))return`✍️ **English & Writing Support:**

📝 **Essay Structure:**
• **Introduction:** Hook + Background + Thesis
• **Body Paragraphs:** Topic sentence + Evidence + Analysis + Transition
• **Conclusion:** Restate thesis + Summarize + Final thought

📚 **Literary Analysis:**
• Theme: Central message/meaning
• Symbolism: Objects representing ideas
• Character development: How characters change
• Setting: Time, place, atmosphere

✏️ **Writing Tips:**
• Vary sentence length and structure
• Use active voice when possible
• Show, don't just tell
• Proofread for grammar and spelling

� **Common Essays:**
• Argumentative: Take a stance with evidence
• Narrative: Tell a story with purpose
• Expository: Explain or inform
• Descriptive: Paint a picture with words

What writing project can I help with?`;if(T.includes("grammar")||T.includes("punctuation")||T.includes("sentence"))return`📝 **Grammar & Mechanics Guide:**

� **Parts of Speech:**
• **Nouns:** Person, place, thing, idea
• **Verbs:** Action or state of being
• **Adjectives:** Describe nouns
• **Adverbs:** Modify verbs, adjectives, other adverbs

✏️ **Punctuation Rules:**
• **Period (.):** End of complete sentences
• **Comma (,):** Separate items, clauses, phrases
• **Semicolon (;):** Connect related independent clauses
• **Colon (:):** Introduce lists or explanations

📐 **Sentence Types:**
• **Simple:** One independent clause
• **Compound:** Two independent clauses joined
• **Complex:** Independent + dependent clause
• **Compound-Complex:** Multiple independent + dependent

🎯 **Common Errors:**
• Subject-verb agreement
• Run-on sentences
• Comma splices
• Apostrophe misuse

What grammar rule needs clarification?`;if(T.includes("history")||T.includes("world war")||T.includes("revolution"))return`🏛️ **History Study Helper:**

� **Timeline Strategies:**
• Create visual timelines
• Connect cause and effect
• Look for patterns across eras
• Use mnemonic devices for dates

🗺️ **Key Historical Themes:**
• **Political:** Government changes, wars, revolutions
• **Economic:** Trade, resources, industrialization
• **Social:** Culture, religion, demographics
• **Technological:** Inventions, innovations

📖 **Study Methods:**
• Make connections between events
• Use primary sources when possible
• Create character profiles of key figures
• Draw maps and diagrams

� **Essay Writing for History:**
• Start with a clear thesis
• Use specific evidence and examples
• Analyze causes and consequences
• Consider multiple perspectives

What historical period or event interests you?`;if(T.includes("study")||T.includes("learn")||T.includes("tips"))return`� **Complete Study System:**

🧠 **Learning Strategies:**
• **Active Reading:** Highlight, annotate, summarize
• **Spaced Repetition:** Review at increasing intervals
• **Elaborative Interrogation:** Ask yourself 'why' and 'how'
• **Self-Testing:** Quiz yourself regularly

🎯 **Memory Techniques:**
• **Mnemonics:** Create memorable phrases or acronyms
• **Visual Imagery:** Associate concepts with mental pictures
• **Method of Loci:** Link information to familiar places
• **Chunking:** Group related information together

⏰ **Time Management:**
• **Pomodoro Technique:** 25min work + 5min break
• **Time Blocking:** Assign specific times to subjects
• **Priority Matrix:** Urgent vs Important tasks
• **Weekly Planning:** Schedule study sessions in advance

🎨 **Note-Taking Systems:**
• **Cornell Method:** Notes, cues, summary sections
• **Mind Mapping:** Visual connections between concepts
• **Outline Method:** Hierarchical organization
• **Charting:** Tables for comparing information

What specific study challenge can I help solve?`;if(T.includes("stressed")||T.includes("anxious")||T.includes("overwhelmed"))return`🌈 **Mental Health Matters:**

💙 **Stress Management:**
• Deep breathing: 4 counts in, hold 4, out 6
• Take regular breaks (even 5 minutes helps)
• Talk to someone you trust
• Remember: It's okay to not be perfect

🧘 **Quick Relaxation:**
• Progressive muscle relaxation
• Listen to calming music
• Go for a short walk
• Practice gratitude (3 things daily)

🎯 **Academic Stress:**
• Prioritize tasks by importance
• Break large projects into steps
• Ask for help when needed
• Celebrate small victories

You're stronger than you think! 💪`;if(T.includes("motivation")||T.includes("tired")||T.includes("give up")||T.includes("difficult"))return`🌟 **Motivation Boost:**

🔥 **Reignite Your Drive:**
• Remember your 'why' - your ultimate goal
• Visualize your success
• Every small step counts
• Progress > Perfection

💪 **When You Want to Quit:**
• Rest, don't quit
• Talk to a mentor or friend
• Review how far you've come
• Set micro-goals for today

� **Daily Energy Tips:**
• Start with your easiest task
• Reward yourself for completing goals
• Study with energizing music
• Change your environment

"Success is not final, failure is not fatal: it is the courage to continue that counts." 📚`;if(T.includes("career")||T.includes("job")||T.includes("future"))return`🚀 **Career & Future Planning:**

💼 **Career Exploration:**
• Research different career paths
• Take personality/interest assessments
• Talk to professionals in fields you like
• Consider job market trends

🎓 **Skill Development:**
• Identify skills needed for your dream job
• Build a portfolio of your work
• Develop both hard and soft skills
• Continuous learning mindset

🌐 **Preparation Steps:**
• Create a professional resume
• Build a LinkedIn profile
• Practice interview skills
• Network with professionals

📈 **Success Mindset:**
• Set short-term and long-term goals
• Embrace challenges as growth opportunities
• Stay adaptable and open to change

What career field interests you most?`;if(T.includes("technology")||T.includes("computer")||T.includes("coding")||T.includes("programming"))return`💻 **Technology & Coding Help:**

🖥️ **Programming Fundamentals:**
• **Variables:** Store data (like boxes with labels)
• **Functions:** Reusable blocks of code
• **Loops:** Repeat actions efficiently
• **Conditionals:** Make decisions (if/then)

🌐 **Popular Languages:**
• **Python:** Great for beginners, data science
• **JavaScript:** Web development, interactive sites
• **Java:** Object-oriented, enterprise applications
• **C++:** System programming, game development

📱 **Digital Study Tools:**
• Code editors: VS Code, Sublime Text
• Version control: Git and GitHub
• Online platforms: CodePen, Repl.it
• Learning sites: freeCodeCamp, Codecademy

🎯 **Learning Path:**
1. Choose one language to start
2. Build small projects
3. Practice daily (even 30 minutes)
4. Join coding communities

What programming concept interests you?`;if(T.includes("language")||T.includes("spanish")||T.includes("french")||T.includes("communication"))return`🌍 **Language Learning & Communication:**

🗣️ **Language Learning Tips:**
• **Immersion:** Surround yourself with the language
• **Daily Practice:** Even 15 minutes consistently
• **Speaking:** Practice with native speakers online
• **Media:** Watch movies, listen to music in target language

📝 **Communication Skills:**
• **Active Listening:** Focus fully on the speaker
• **Clear Expression:** Organize thoughts before speaking
• **Body Language:** 55% of communication is nonverbal
• **Empathy:** Try to understand others' perspectives

🎯 **Study Strategies:**
• Flashcards for vocabulary
• Language exchange apps (HelloTalk, Tandem)
• Set language on phone/computer
• Keep a language journal

💡 **Memory Techniques:**
• Associate new words with images
• Create sentences with new vocabulary
• Use spaced repetition systems
• Practice with real-life scenarios

What language skill would you like to improve?`;if(T.includes("hello")||T.includes("hi")||T.includes("hey")||T.includes("helo")||T.includes("hellooo")||T.includes("hii")||T.includes("good morning")||T.includes("good evening")||T.includes("good afternoon")){const $=["Hello there! 👋 Ready to tackle some learning today? I can help with any subject - from complex calculus to essay writing!","Hi! 🌟 Great to see you! Whether you need help with homework, study strategies, or just want to chat about academics, I'm here for you!","Hey! 🤖 Welcome to your personal study session! I can assist with math, science, writing, test prep, or any academic challenge you're facing!","Good to see you! 📚 I'm excited to help you learn today. What subject or topic would you like to explore together?","Hello! 🎓 I'm your AI study assistant, ready to help with everything from basic arithmetic to advanced research methods. What can we work on?"];return $[Math.floor(Math.random()*$.length)]}if(T.includes("homework")||T.includes("assignment")||T.includes("project"))return`📝 **Homework & Assignment Success:**

🎯 **Getting Started:**
• Read instructions carefully (twice!)
• Break large assignments into smaller tasks
• Create a timeline with deadlines
• Gather all necessary resources first

📚 **Research Tips:**
• Use reliable sources (.edu, .gov, peer-reviewed)
• Take notes while researching
• Keep track of sources for citations
• Fact-check information from multiple sources

✍️ **Writing Process:**
• Outline before writing
• Write a rough draft first
• Let it sit, then revise
• Proofread for errors

🔍 **Quality Check:**
• Does it answer the question completely?
• Is the argument clear and logical?
• Are sources properly cited?
• Is grammar and spelling correct?

What specific assignment can I help you tackle?`;if(T.includes("exam")||T.includes("test")||T.includes("quiz")||T.includes("midterm")||T.includes("final"))return`📝 **Complete Exam Preparation Guide:**

📅 **Timeline (3-4 weeks out):**
• **Week 1:** Gather all materials, create study schedule
• **Week 2-3:** Active studying, practice problems
• **Week 4:** Review, practice tests, final prep
• **Day before:** Light review, good sleep, prepare materials

📚 **Study Strategies:**
• **Active Recall:** Test yourself without looking
• **Spaced Repetition:** Review at increasing intervals
• **Practice Tests:** Simulate exam conditions
• **Teaching Method:** Explain concepts to others

🧠 **Memory Techniques:**
• Create mnemonics for lists
• Use visual associations
• Make concept maps
• Practice with flashcards

⚡ **Exam Day Tips:**
• Arrive early and calm
• Read all instructions first
• Start with easiest questions
• Manage your time wisely
• Review answers if time permits

What type of exam are you preparing for?`;if(T.includes("time")||T.includes("schedule")||T.includes("timetable")||T.includes("planning"))return T.includes("timetable")||T.includes("give")||T.includes("create")?`📅 **Personalized Daily Study Schedule:**

🌅 **Early Morning (6:00-9:00)**
• 6:00-6:30: Wake up, light exercise/meditation
• 6:30-7:30: Breakfast & review yesterday's notes
• 7:30-9:00: Hardest subject (peak mental energy)

🌞 **Mid-Morning (9:00-12:00)**
• 9:00-9:15: Break & hydration
• 9:15-11:00: Second priority subject
• 11:00-12:00: Practice problems/homework

🕐 **Afternoon (1:00-5:00)**
• 1:00-2:00: Lunch & relaxation
• 2:00-3:30: Lighter subjects (reading, review)
• 3:30-4:00: Break & physical activity
• 4:00-5:00: Group study or tutoring

🌆 **Evening (6:00-9:00)**
• 6:00-7:00: Dinner & family time
• 7:00-8:30: Review, organize notes
• 8:30-9:00: Plan tomorrow, relaxation

💡 **Customize based on your school schedule and energy patterns!**`:`⏰ **Master Time Management:**

🎯 **Planning Strategies:**
• **Time Blocking:** Assign specific times to subjects
• **Priority Matrix:** Urgent vs Important tasks
• **Weekly Planning:** Schedule study sessions in advance
• **Buffer Time:** Add 25% extra time for unexpected delays

📊 **Productivity Techniques:**
• **Pomodoro:** 25min work + 5min break + 15min break every 4 cycles
• **Time Boxing:** Set strict time limits for tasks
• **Eat the Frog:** Do hardest task first
• **Batch Processing:** Group similar tasks together

🚫 **Avoid Time Wasters:**
• Social media during study hours
• Perfectionism on low-priority tasks
• Multitasking (reduces efficiency by 40%)
• Procrastination (use 2-minute rule)

Need help creating a specific study schedule?`;if(T.includes("research")||T.includes("thesis")||T.includes("dissertation"))return`🔍 **Advanced Research & Writing:**

📚 **Research Process:**
• **Topic Selection:** Narrow and specific focus
• **Literature Review:** Survey existing knowledge
• **Methodology:** Choose appropriate research methods
• **Data Collection:** Gather evidence systematically
• **Analysis:** Interpret findings objectively

✍️ **Academic Writing:**
• **Structure:** Introduction → Methods → Results → Discussion
• **Citations:** Use proper academic format (APA, MLA, Chicago)
• **Objectivity:** Present evidence without bias
• **Clarity:** Write for your audience level

🎯 **Organization Tips:**
• Use reference management tools (Zotero, Mendeley)
• Create detailed outlines before writing
• Set daily writing goals (word count)
• Regular backup of your work

🔬 **Quality Control:**
• Peer review before submission
• Fact-check all statements
• Proper methodology documentation
• Ethical considerations addressed

What research topic are you working on?`;if(T.includes("thank")||T.includes("thanks")){const $=["You're welcome! Keep up the great work! 🌟","Happy to help! Learning is a journey - enjoy it! 📚","My pleasure! You're doing awesome by asking questions! 💪","Anytime! I'm here whenever you need academic support! 🤖","Glad I could help! Remember, every question brings you closer to mastery! 🎯"];return $[Math.floor(Math.random()*$.length)]}const ne=[`🧠 **Advanced AI Tutor Ready!** [${Q.toUpperCase()}] [${L.toUpperCase()}]

🎯 **Detected Learning Context:**
• Question Type: ${Q==="computational"?"Problem-solving focused":Q==="conceptual"?"Deep understanding needed":Q==="support"?"Need guidance & support":"General exploration"}
• Complexity: ${L==="advanced"?"University level concepts":L==="intermediate"?"High school level topics":L==="basic"?"Elementary fundamentals":"Mixed difficulty"}
• Learning Style: ${O==="visual"?"Visual/spatial processing":O==="auditory"?"Verbal/auditory learning":O==="kinesthetic"?"Hands-on practice":"Multi-modal approach"}

💡 **Intelligent Support Available:**
• **Step-by-step reasoning** for complex problems
• **Multiple explanation methods** adapted to your style
• **Context-aware follow-ups** that build on our conversation
• **Real-world connections** to make concepts meaningful

What specific challenge shall we tackle with this intelligent approach?`,`� **Context-Aware Learning Assistant Activated!**

🔍 **I've analyzed your question pattern and can provide:**
• **Adaptive Explanations**: Matching your current understanding level
• **Predictive Guidance**: Anticipating your next learning needs
• **Multi-perspective Analysis**: Examining topics from different angles
• **Transfer Learning**: Connecting concepts across subjects

🎨 **Personalized Teaching Methods:**
• **Visual Learners**: Diagrams, flowcharts, spatial relationships
• **Logical Learners**: Step-by-step reasoning, cause-effect chains
• **Creative Learners**: Analogies, stories, real-world examples
• **Analytical Learners**: Data, patterns, systematic approaches

📚 **Comprehensive Subject Mastery:**
• Mathematics (Elementary → University Calculus)
• Sciences (Basic concepts → Advanced research)
• Language Arts (Grammar → Literary analysis)
• Study Skills (Memory → Critical thinking)

I adapt my intelligence to match exactly what you need!`,`🌟 **Sophisticated AI Reasoning Engine Online!**

🧩 **Advanced Problem-Solving Capabilities:**
• **Metacognitive Guidance**: Teaching you how to think about thinking
• **Error Pattern Recognition**: Identifying and correcting common mistakes
• **Knowledge Transfer**: Applying learning from one area to another
• **Strategic Learning**: Optimizing your study approach for maximum efficiency

🔬 **Deep Understanding Framework:**
• **Surface Learning**: What are the facts and procedures?
• **Deep Learning**: How do concepts connect and why do they work?
• **Strategic Learning**: When and where should I apply this knowledge?
• **Reflective Learning**: How can I improve my learning process?

⚡ **Instant Intelligent Adaptation:**
I monitor your responses and automatically adjust:
• Explanation complexity
• Teaching pace
• Example difficulty
• Support level needed

Let's discover what you're capable of achieving!`,`� **AI Teaching Assistant with Advanced Reasoning!**

🔄 **Dynamic Learning Loop:**
1. **Assess**: What do you currently understand?
2. **Adapt**: How should I explain this concept?
3. **Apply**: Let's practice with real problems
4. **Analyze**: What worked well? What needs adjustment?
5. **Advance**: Ready for the next challenge?

🧠 **Cognitive Science Applied:**
• **Spaced Repetition**: Optimal timing for memory consolidation
• **Interleaving**: Mixing topics for stronger learning
• **Elaborative Interrogation**: Deep questioning for understanding
• **Dual Coding**: Visual + verbal processing for maximum retention

🎯 **Intelligent Question Analysis:**
I can detect:
• Your confidence level from word choice
• Knowledge gaps from confusion patterns
• Learning preferences from interaction style
• Optimal challenge level for growth

Every interaction makes me better at helping you!`];let X=ne[0];return Q==="support"&&(X=ne[1]),L==="advanced"&&(X=ne[2]),O==="kinesthetic"&&(X=ne[3]),X},b=()=>{if(!a.trim())return;const S={id:Date.now(),type:"user",content:a,timestamp:new Date};s(T=>[...T,S]),o(""),c(!0),setTimeout(()=>{const T=R(a),z={id:Date.now()+1,type:"bot",content:T,timestamp:new Date};s(Q=>[...Q,z]),c(!1)},1e3+Math.random()*1e3)},D=S=>{S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),b())},M=S=>S.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return t?p.jsx("div",{className:`fixed bottom-6 right-6 z-50 transition-all duration-300 ${n?"w-80":"w-96"}`,children:p.jsxs("div",{className:`bg-card border border-border rounded-lg shadow-xl transition-all duration-300 ${n?"h-14":"h-96"}`,children:[p.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-border",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("div",{className:"w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center",children:p.jsx(Uc,{size:16,className:"text-accent"})}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-medium text-sm",children:"AI Study Assistant"}),!n&&p.jsx("p",{className:"text-xs text-textMuted",children:"Always here to help! 🤖"})]})]}),p.jsxs("div",{className:"flex items-center gap-1",children:[p.jsx("button",{onClick:()=>i(!n),className:"p-1 hover:bg-muted rounded",children:n?p.jsx(FS,{size:14}):p.jsx(zS,{size:14})}),p.jsx("button",{onClick:()=>e(!1),className:"p-1 hover:bg-muted rounded",children:p.jsx(VS,{size:14})})]})]}),!n&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"h-64 overflow-y-auto p-4 space-y-4",children:[r.map(S=>p.jsxs("div",{className:`flex gap-2 ${S.type==="user"?"justify-end":"justify-start"}`,children:[S.type==="bot"&&p.jsx("div",{className:"w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:p.jsx(Uc,{size:12,className:"text-accent"})}),p.jsxs("div",{className:`max-w-[80%] p-3 rounded-lg ${S.type==="user"?"bg-accent text-white ml-auto":"bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"}`,children:[p.jsx("div",{className:"text-sm whitespace-pre-line",children:S.content}),p.jsx("div",{className:`text-xs mt-1 ${S.type==="user"?"text-white/70":"text-textMuted"}`,children:M(S.timestamp)})]}),S.type==="user"&&p.jsx("div",{className:"w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:p.jsx(u0,{size:12,className:"text-primary"})})]},S.id)),l&&p.jsxs("div",{className:"flex gap-2 justify-start",children:[p.jsx("div",{className:"w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:p.jsx(Uc,{size:12,className:"text-accent"})}),p.jsx("div",{className:"bg-gray-100 dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600",children:p.jsxs("div",{className:"flex space-x-1",children:[p.jsx("div",{className:"w-2 h-2 bg-accent rounded-full animate-bounce"}),p.jsx("div",{className:"w-2 h-2 bg-accent rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),p.jsx("div",{className:"w-2 h-2 bg-accent rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]})})]}),p.jsx("div",{ref:d})]}),p.jsx("div",{className:"p-4 border-t border-border",children:p.jsxs("div",{className:"flex gap-2",children:[p.jsx("input",{ref:f,type:"text",value:a,onChange:S=>o(S.target.value),onKeyPress:D,placeholder:"Ask me anything about studying...",className:"flex-1 px-3 py-2 bg-white dark:bg-gray-800 border border-border rounded-lg text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50",disabled:l}),p.jsx("button",{onClick:b,disabled:!a.trim()||l,className:"px-3 py-2 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white rounded-lg transition-colors",children:p.jsx(BS,{size:16})})]})})]})]})}):p.jsx("button",{onClick:()=>e(!0),className:"fixed bottom-6 right-6 bg-accent hover:bg-accent/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50",title:"Open AI Study Assistant",children:p.jsx(kS,{size:24})})}function mb({user:t}){return p.jsxs("div",{className:"space-y-4",children:[p.jsxs("section",{className:"relative hero-wrap p-0 rounded-[14px] overflow-hidden min-h-[260px]",children:[p.jsx(Dl,{}),p.jsx("div",{className:"relative z-10 p-6 md:p-8",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-2xl md:text-3xl font-semibold",children:"Student Dashboard"}),p.jsxs("p",{className:"text-sm text-[#d2d6ff]/75",children:["Welcome ",t==null?void 0:t.phone,"! Join live classes and access course materials."]})]}),p.jsxs("div",{children:[p.jsx(Xe,{className:"btn",to:"/student/live/68cced26157d87e24fee03ce",children:"Join Live Class"}),p.jsx(Xe,{className:"btn-ghost",to:"/student/offline",children:"Offline Mode"})]})]})})]}),p.jsxs("div",{className:"grid lg:grid-cols-4 gap-4",children:[p.jsxs("section",{className:"lg:col-span-3 space-y-4",children:[p.jsxs("div",{className:"grid md:grid-cols-3 gap-3",children:[p.jsx(Ms,{title:"Active Class",value:"Algebra 101",hint:"Join now",pct:.85,icon:p.jsx(Kn,{size:18})}),p.jsx(Ms,{title:"Completed Lessons",value:"12",hint:"This month",pct:.12,icon:p.jsx(op,{size:18})}),p.jsx(Ms,{title:"Downloaded Lessons",value:"8",hint:"Available offline",pct:.8,icon:p.jsx(pi,{size:18})})]}),p.jsxs("div",{className:"card p-4",children:[p.jsxs("div",{className:"section-title",children:[p.jsx("h3",{children:"Live Classes"}),p.jsx("span",{className:"text-xs text-green-400",children:"● 2 active"})]}),p.jsx("div",{className:"mb-3 p-2 bg-blue-500/10 rounded border border-blue-500/20",children:p.jsxs("p",{className:"text-xs text-blue-300",children:["💡 ",p.jsx("strong",{children:"Tip:"}),' Click the "Join" button once the teacher starts the live class to participate in real-time.']})}),p.jsxs("div",{className:"grid md:grid-cols-2 gap-3",children:[p.jsx("div",{className:"glass p-3 border-l-2 border-green-400",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold",children:"Basic Algebra — Lesson 1"}),p.jsx("div",{className:"text-xs text-textMuted",children:"Teacher: Prof. Smith • 23 students online"})]}),p.jsxs(Xe,{to:"/student/live/68cced26157d87e24fee03ce",className:"btn text-xs",children:[p.jsx(Kn,{size:14})," Join"]})]})}),p.jsx("div",{className:"glass p-3 border-l-2 border-yellow-400",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold",children:"Fractions — Lesson 2"}),p.jsx("div",{className:"text-xs text-textMuted",children:"Teacher: Prof. Johnson • Starting in 15 min"})]}),p.jsxs("button",{className:"btn-ghost text-xs",disabled:!0,children:[p.jsx(US,{size:14})," Waiting"]})]})})]})]}),p.jsxs("div",{className:"card p-4",children:[p.jsxs("div",{className:"section-title",children:[p.jsx("h3",{children:"Available Courses"}),p.jsx(Xe,{className:"btn-ghost text-xs",to:"/student/courses",children:"View All"})]}),p.jsxs("div",{className:"grid md:grid-cols-2 gap-3",children:[p.jsx("div",{className:"glass p-3",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold",children:"Basic Algebra — Lesson 1"}),p.jsx("div",{className:"text-xs text-textMuted",children:"2 slides • 1 quiz • 18 min audio"})]}),p.jsxs(Xe,{to:"/student/course/algebra-1",className:"btn-ghost text-xs",children:[p.jsx(lp,{size:14})," Study"]})]})}),p.jsx("div",{className:"glass p-3",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold",children:"Fractions — Lesson 2"}),p.jsx("div",{className:"text-xs text-textMuted",children:"4 slides • 1 quiz • 22 min audio"})]}),p.jsxs(Xe,{to:"/student/course/fractions-1",className:"btn-ghost text-xs",children:[p.jsx(lp,{size:14})," Study"]})]})})]})]})]}),p.jsxs("aside",{className:"card p-4",children:[p.jsx("h4",{className:"font-semibold mb-2",children:"Student Actions"}),p.jsxs("ul",{className:"space-y-2",children:[p.jsxs("li",{children:[p.jsxs(Xe,{className:"btn w-full",to:"/student/live/68cced26157d87e24fee03ce",children:[p.jsx(Kn,{size:16})," Join Live Class"]}),p.jsx("p",{className:"text-[10px] text-textMuted mt-1 ml-1",children:"Click to join when class goes live"})]}),p.jsx("li",{children:p.jsxs(Xe,{className:"btn w-full",to:"/student/offline",children:[p.jsx(pi,{size:16})," Offline Download"]})}),p.jsx("li",{children:p.jsxs(Xe,{className:"btn w-full",to:"/student/discussion/general",children:[p.jsx(Mf,{size:16})," Discussion Board"]})}),p.jsx("li",{children:p.jsxs(Xe,{className:"btn w-full",to:"/student/quiz",children:[p.jsx(op,{size:16})," Take Quiz"]})})]}),p.jsxs("div",{className:"mt-4",children:[p.jsx("div",{className:"text-xs text-textMuted mb-2",children:"Study Progress"}),p.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:p.jsx("div",{className:"bg-blue-600 h-2 rounded-full",style:{width:"68%"}})}),p.jsx("div",{className:"text-xs text-textMuted mt-1",children:"12 of 18 lessons completed"})]})]})]}),p.jsx(pb,{})]})}function gb({user:t}){return p.jsxs("div",{className:"space-y-4",children:[p.jsxs("section",{className:"relative hero-wrap p-0 rounded-[14px] overflow-hidden min-h-[260px]",children:[p.jsx(Dl,{}),p.jsx("div",{className:"relative z-10 p-6 md:p-8",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-2xl md:text-3xl font-semibold",children:"Teacher Dashboard"}),p.jsxs("p",{className:"text-sm text-[#d2d6ff]/75",children:["Welcome ",t==null?void 0:t.phone,"! Manage live classes, slides and offline packages."]})]}),p.jsxs("div",{className:"hidden md:flex gap-2",children:[p.jsx(Xe,{className:"btn",to:"/faculty/go-live/68cced26157d87e24fee03ce",children:"Go Live"}),p.jsx(Xe,{className:"btn-ghost",to:"/faculty/upload",children:"Upload Slides"})]})]})})]}),p.jsxs("div",{className:"grid lg:grid-cols-4 gap-4",children:[p.jsxs("section",{className:"lg:col-span-3 space-y-4",children:[p.jsxs("div",{className:"grid md:grid-cols-3 gap-3",children:[p.jsx(Ms,{title:"Current Class",value:"Algebra 101",hint:"Lecture 1",pct:.72,icon:p.jsx(Kn,{size:18})}),p.jsx(Ms,{title:"Live Students (peak)",value:"58",hint:"Last 7 days",pct:.58,icon:p.jsx(Al,{size:18})}),p.jsx(Ms,{title:"Course Materials",value:"15",hint:"Uploaded this month",pct:.15,icon:p.jsx(pi,{size:18})})]}),p.jsxs("div",{className:"card p-4",children:[p.jsxs("div",{className:"section-title",children:[p.jsx("h3",{children:"Recent Teaching Activity"}),p.jsx("span",{className:"text-xs text-textMuted",children:"Auto-updated"})]}),p.jsxs("ul",{className:"space-y-2 text-sm",children:[p.jsxs("li",{className:"flex items-center gap-2",children:[p.jsx(sp,{size:16,className:"text-accent"})," Started live preview for Algebra 101"]}),p.jsxs("li",{className:"flex items-center gap-2",children:[p.jsx(Mf,{size:16,className:"text-accent"})," Student posted in Discussion Board"]}),p.jsxs("li",{className:"flex items-center gap-2",children:[p.jsx(pi,{size:16,className:"text-accent"})," 12 students downloaded offline package"]}),p.jsxs("li",{className:"flex items-center gap-2",children:[p.jsx(cp,{size:16,className:"text-accent"})," Uploaded new slides for Fractions lesson"]})]})]}),p.jsxs("div",{className:"card p-4",children:[p.jsxs("div",{className:"section-title",children:[p.jsx("h3",{children:"My Classes"}),p.jsx(Xe,{className:"btn-ghost text-xs",to:"/faculty/upload",children:"Create New"})]}),p.jsxs("div",{className:"grid md:grid-cols-2 gap-3",children:[p.jsx("div",{className:"glass p-3",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold",children:"Basic Algebra — Lesson 1"}),p.jsx("div",{className:"text-xs text-textMuted",children:"2 slides • 1 quiz • 18 min audio"}),p.jsx("div",{className:"text-xs text-green-400",children:"● 23 students online"})]}),p.jsx("div",{className:"flex gap-1",children:p.jsx(Xe,{to:"/faculty/go-live/68cced26157d87e24fee03ce",className:"btn text-xs",children:"Go Live"})})]})}),p.jsx("div",{className:"glass p-3",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold",children:"Fractions — Lesson 2"}),p.jsx("div",{className:"text-xs text-textMuted",children:"4 slides • 1 quiz • 22 min audio"}),p.jsx("div",{className:"text-xs text-gray-400",children:"Not live"})]}),p.jsx("div",{className:"flex gap-1",children:p.jsx(Xe,{to:"/faculty/edit/fractions-2",className:"btn-ghost text-xs",children:"Edit"})})]})})]})]})]}),p.jsxs("aside",{className:"card p-4",children:[p.jsx("h4",{className:"font-semibold mb-2",children:"Teacher Tools"}),p.jsxs("ul",{className:"space-y-2",children:[p.jsx("li",{children:p.jsxs(Xe,{className:"btn w-full",to:"/faculty/upload",children:[p.jsx(cp,{size:16})," Upload Slides"]})}),p.jsx("li",{children:p.jsxs(Xe,{className:"btn w-full",to:"/faculty/record/68cced26157d87e24fee03ce",children:[p.jsx(OS,{size:16})," Record Audio"]})}),p.jsx("li",{children:p.jsxs(Xe,{className:"btn w-full",to:"/faculty/go-live/68cced26157d87e24fee03ce",children:[p.jsx(Kn,{size:16})," Go Live"]})}),p.jsx("li",{children:p.jsxs(Xe,{className:"btn w-full",to:"/faculty/students",children:[p.jsx(Al,{size:16})," Manage Students"]})}),p.jsx("li",{children:p.jsxs(Xe,{className:"btn w-full",to:"/faculty/analytics",children:[p.jsx(sp,{size:16})," View Analytics"]})})]}),p.jsxs("div",{className:"mt-4",children:[p.jsx("div",{className:"text-xs text-textMuted mb-2",children:"Class Performance"}),p.jsx(Ul,{title:"No active classes",subtitle:"Start a live session to see real-time metrics."})]})]})]})]})}function vb(){const{user:t}=zs();if(!t)return p.jsx("div",{className:"flex items-center justify-center min-h-screen",children:p.jsx(Ul,{title:"Loading Dashboard...",subtitle:"Please wait while we load your personalized dashboard."})});switch(t.role){case"teacher":return p.jsx(gb,{user:t});case"student":return p.jsx(mb,{user:t});default:return p.jsx("div",{className:"flex items-center justify-center min-h-screen",children:p.jsx(Ul,{title:"Access Denied",subtitle:`Unknown user role: ${t.role}. Please contact support.`})})}}function q0({label:t="Loading..."}){return p.jsxs("div",{className:"flex items-center gap-2 text-textMuted",children:[p.jsx("div",{className:"h-3 w-3 rounded-full bg-accent animate-pulse"}),p.jsx("span",{children:t})]})}function Uf({children:t,requiredRole:e=null}){const{user:n,loading:i}=zs();return i?p.jsx(q0,{}):n?e&&n.role!==e?p.jsx("div",{className:"flex items-center justify-center min-h-screen",children:p.jsx(Ul,{title:"Access Denied",subtitle:`This page is only available to ${e}s. You are logged in as a ${n.role}.`})}):t:p.jsx(s0,{to:"/",replace:!0})}function Qr({children:t}){return p.jsx(Uf,{requiredRole:"student",children:t})}function Jr({children:t}){return p.jsx(Uf,{requiredRole:"teacher",children:t})}const xb=K.lazy(()=>Ur(()=>import("./LiveClass-BkxWz05n.js"),__vite__mapDeps([0,1,2]))),_b=K.lazy(()=>Ur(()=>import("./OfflineDownload-tnSUmRrU.js"),__vite__mapDeps([3,2]))),yb=K.lazy(()=>Ur(()=>import("./Discussion-G00R0kCe.js"),__vite__mapDeps([4,2]))),Sb=K.lazy(()=>Ur(()=>import("./UploadSlides-Cgr20jKb.js"),[])),Mb=K.lazy(()=>Ur(()=>import("./RecordAudio-D5Exxxpw.js"),[])),Eb=K.lazy(()=>Ur(()=>import("./StartLiveClass-CvfBFFrT.js"),[])),wb=K.lazy(()=>Ur(()=>import("./MultiUserTest-BR2X0xs5.js"),[]));function Tb(){return p.jsxs("div",{className:"min-h-screen flex flex-col",children:[p.jsx(qS,{}),p.jsx("main",{className:"flex-1 container mx-auto px-4 py-4",children:p.jsx(K.Suspense,{fallback:p.jsx(q0,{}),children:p.jsxs(xS,{children:[p.jsx(St,{path:"/",element:p.jsx(cb,{})}),p.jsx(St,{path:"/login",element:p.jsx(ub,{})}),p.jsx(St,{path:"/login/student",element:p.jsx(db,{})}),p.jsx(St,{path:"/login/teacher",element:p.jsx(fb,{})}),p.jsx(St,{path:"/dashboard",element:p.jsx(Uf,{children:p.jsx(vb,{})})}),p.jsx(St,{path:"/test",element:p.jsx(wb,{})}),p.jsx(St,{path:"/student/live/:id",element:p.jsx(Qr,{children:p.jsx(xb,{})})}),p.jsx(St,{path:"/student/offline",element:p.jsx(Qr,{children:p.jsx(_b,{})})}),p.jsx(St,{path:"/student/discussion/:id",element:p.jsx(Qr,{children:p.jsx(yb,{})})}),p.jsx(St,{path:"/student/courses",element:p.jsx(Qr,{children:p.jsxs("div",{className:"card p-6",children:[p.jsx("h2",{className:"text-2xl font-bold mb-4",children:"All Courses"}),p.jsx("p",{className:"text-textMuted",children:"Course listing feature coming soon..."}),p.jsx("div",{className:"mt-4",children:p.jsx("button",{className:"btn",onClick:()=>window.history.back(),children:"← Back to Dashboard"})})]})})}),p.jsx(St,{path:"/student/course/:id",element:p.jsx(Qr,{children:p.jsxs("div",{className:"card p-6",children:[p.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Course Content"}),p.jsx("p",{className:"text-textMuted",children:"Individual course viewer coming soon..."}),p.jsx("div",{className:"mt-4",children:p.jsx("button",{className:"btn",onClick:()=>window.history.back(),children:"← Back to Dashboard"})})]})})}),p.jsx(St,{path:"/student/quiz",element:p.jsx(Qr,{children:p.jsxs("div",{className:"card p-6",children:[p.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Quiz Platform"}),p.jsx("p",{className:"text-textMuted",children:"Quiz feature coming soon..."}),p.jsx("div",{className:"mt-4",children:p.jsx("button",{className:"btn",onClick:()=>window.history.back(),children:"← Back to Dashboard"})})]})})}),p.jsx(St,{path:"/faculty/upload",element:p.jsx(Jr,{children:p.jsx(Sb,{})})}),p.jsx(St,{path:"/faculty/record/:id",element:p.jsx(Jr,{children:p.jsx(Mb,{})})}),p.jsx(St,{path:"/faculty/go-live/:id",element:p.jsx(Jr,{children:p.jsx(Eb,{})})}),p.jsx(St,{path:"/faculty/edit/:id",element:p.jsx(Jr,{children:p.jsxs("div",{className:"card p-6",children:[p.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Edit Course"}),p.jsx("p",{className:"text-textMuted",children:"Course editor coming soon..."}),p.jsx("div",{className:"mt-4",children:p.jsx("button",{className:"btn",onClick:()=>window.history.back(),children:"← Back to Dashboard"})})]})})}),p.jsx(St,{path:"/faculty/students",element:p.jsx(Jr,{children:p.jsxs("div",{className:"card p-6",children:[p.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Manage Students"}),p.jsx("p",{className:"text-textMuted",children:"Student management coming soon..."}),p.jsx("div",{className:"mt-4",children:p.jsx("button",{className:"btn",onClick:()=>window.history.back(),children:"← Back to Dashboard"})})]})})}),p.jsx(St,{path:"/faculty/analytics",element:p.jsx(Jr,{children:p.jsxs("div",{className:"card p-6",children:[p.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Analytics Dashboard"}),p.jsx("p",{className:"text-textMuted",children:"Analytics feature coming soon..."}),p.jsx("div",{className:"mt-4",children:p.jsx("button",{className:"btn",onClick:()=>window.history.back(),children:"← Back to Dashboard"})})]})})}),p.jsx(St,{path:"*",element:p.jsx(s0,{to:"/"})})]})})}),p.jsx($S,{})]})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(t=>{navigator.serviceWorker.addEventListener("message",e=>{var n;((n=e.data)==null?void 0:n.type)==="SYNC_QUIZ_REQUEST"&&window.dispatchEvent(new CustomEvent("SW_SYNC_QUIZ"))})}).catch(console.error)});mu.createRoot(document.getElementById("root")).render(p.jsx(Ad.StrictMode,{children:p.jsx(TS,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:p.jsx(K.Suspense,{fallback:p.jsx("div",{className:"p-6",children:"Loading…"}),children:p.jsx(Tb,{})})})}));export{ob as A,Ja as B,je as C,ca as G,rb as M,hn as P,ib as S,W0 as W,Ur as _,Um as a,fi as b,ya as c,jS as d,pb as e,zs as f,$a as g,bb as h,p as j,K as r,Ab as u};
