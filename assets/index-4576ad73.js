(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Il(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nm={exports:{}},kl={},rm={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs=Symbol.for("react.element"),e0=Symbol.for("react.portal"),t0=Symbol.for("react.fragment"),n0=Symbol.for("react.strict_mode"),r0=Symbol.for("react.profiler"),i0=Symbol.for("react.provider"),s0=Symbol.for("react.context"),o0=Symbol.for("react.forward_ref"),l0=Symbol.for("react.suspense"),a0=Symbol.for("react.memo"),u0=Symbol.for("react.lazy"),Ah=Symbol.iterator;function c0(t){return t===null||typeof t!="object"?null:(t=Ah&&t[Ah]||t["@@iterator"],typeof t=="function"?t:null)}var im={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sm=Object.assign,om={};function ii(t,e,n){this.props=t,this.context=e,this.refs=om,this.updater=n||im}ii.prototype.isReactComponent={};ii.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ii.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function lm(){}lm.prototype=ii.prototype;function Tc(t,e,n){this.props=t,this.context=e,this.refs=om,this.updater=n||im}var Nc=Tc.prototype=new lm;Nc.constructor=Tc;sm(Nc,ii.prototype);Nc.isPureReactComponent=!0;var bh=Array.isArray,am=Object.prototype.hasOwnProperty,Rc={current:null},um={key:!0,ref:!0,__self:!0,__source:!0};function cm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)am.call(e,r)&&!um.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Cs,type:t,key:s,ref:o,props:i,_owner:Rc.current}}function d0(t,e){return{$$typeof:Cs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cs}function h0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mh=/\/+/g;function la(t,e){return typeof t=="object"&&t!==null&&t.key!=null?h0(""+t.key):e.toString(36)}function uo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Cs:case e0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+la(o,0):r,bh(i)?(n="",t!=null&&(n=t.replace(Mh,"$&/")+"/"),uo(i,e,n,"",function(u){return u})):i!=null&&(xc(i)&&(i=d0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Mh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",bh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+la(s,l);o+=uo(s,e,n,a,i)}else if(a=c0(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+la(s,l++),o+=uo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ws(t,e,n){if(t==null)return t;var r=[],i=0;return uo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function f0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var De={current:null},co={transition:null},p0={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:co,ReactCurrentOwner:Rc};B.Children={map:Ws,forEach:function(t,e,n){Ws(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ws(t,function(){e++}),e},toArray:function(t){return Ws(t,function(e){return e})||[]},only:function(t){if(!xc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=ii;B.Fragment=t0;B.Profiler=r0;B.PureComponent=Tc;B.StrictMode=n0;B.Suspense=l0;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p0;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=sm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)am.call(e,a)&&!um.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Cs,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:s0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:i0,_context:t},t.Consumer=t};B.createElement=cm;B.createFactory=function(t){var e=cm.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:o0,render:t}};B.isValidElement=xc;B.lazy=function(t){return{$$typeof:u0,_payload:{_status:-1,_result:t},_init:f0}};B.memo=function(t,e){return{$$typeof:a0,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=co.transition;co.transition={};try{t()}finally{co.transition=e}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(t,e){return De.current.useCallback(t,e)};B.useContext=function(t){return De.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return De.current.useDeferredValue(t)};B.useEffect=function(t,e){return De.current.useEffect(t,e)};B.useId=function(){return De.current.useId()};B.useImperativeHandle=function(t,e,n){return De.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return De.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return De.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return De.current.useMemo(t,e)};B.useReducer=function(t,e,n){return De.current.useReducer(t,e,n)};B.useRef=function(t){return De.current.useRef(t)};B.useState=function(t){return De.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return De.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return De.current.useTransition()};B.version="18.2.0";rm.exports=B;var b=rm.exports;const F=Il(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0=b,g0=Symbol.for("react.element"),_0=Symbol.for("react.fragment"),v0=Object.prototype.hasOwnProperty,y0=m0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w0={key:!0,ref:!0,__self:!0,__source:!0};function dm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)v0.call(e,r)&&!w0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:g0,type:t,key:s,ref:o,props:i,_owner:y0.current}}kl.Fragment=_0;kl.jsx=dm;kl.jsxs=dm;nm.exports=kl;var E=nm.exports,Qa={},hm={exports:{}},qe={},fm={exports:{}},pm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,D){var j=N.length;N.push(D);e:for(;0<j;){var te=j-1>>>1,ue=N[te];if(0<i(ue,D))N[te]=D,N[j]=ue,j=te;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var D=N[0],j=N.pop();if(j!==D){N[0]=j;e:for(var te=0,ue=N.length,Ln=ue>>>1;te<Ln;){var Ze=2*(te+1)-1,yt=N[Ze],we=Ze+1,Fn=N[we];if(0>i(yt,j))we<ue&&0>i(Fn,yt)?(N[te]=Fn,N[we]=j,te=we):(N[te]=yt,N[Ze]=j,te=Ze);else if(we<ue&&0>i(Fn,j))N[te]=Fn,N[we]=j,te=we;else break e}}return D}function i(N,D){var j=N.sortIndex-D.sortIndex;return j!==0?j:N.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,g=!1,_=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=N)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function y(N){if(v=!1,m(N),!_)if(n(a)!==null)_=!0,Zt(I);else{var D=n(u);D!==null&&Dn(y,D.startTime-N)}}function I(N,D){_=!1,v&&(v=!1,p(T),T=-1),g=!0;var j=h;try{for(m(D),c=n(a);c!==null&&(!(c.expirationTime>D)||N&&!fe());){var te=c.callback;if(typeof te=="function"){c.callback=null,h=c.priorityLevel;var ue=te(c.expirationTime<=D);D=t.unstable_now(),typeof ue=="function"?c.callback=ue:c===n(a)&&r(a),m(D)}else r(a);c=n(a)}if(c!==null)var Ln=!0;else{var Ze=n(u);Ze!==null&&Dn(y,Ze.startTime-D),Ln=!1}return Ln}finally{c=null,h=j,g=!1}}var k=!1,C=null,T=-1,P=5,O=-1;function fe(){return!(t.unstable_now()-O<P)}function Fe(){if(C!==null){var N=t.unstable_now();O=N;var D=!0;try{D=C(!0,N)}finally{D?Xt():(k=!1,C=null)}}else k=!1}var Xt;if(typeof f=="function")Xt=function(){f(Fe)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,Jt=Te.port2;Te.port1.onmessage=Fe,Xt=function(){Jt.postMessage(null)}}else Xt=function(){x(Fe,0)};function Zt(N){C=N,k||(k=!0,Xt())}function Dn(N,D){T=x(function(){N(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Zt(I))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var j=h;h=D;try{return N()}finally{h=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,D){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var j=h;h=N;try{return D()}finally{h=j}},t.unstable_scheduleCallback=function(N,D,j){var te=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?te+j:te):j=te,N){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=j+ue,N={id:d++,callback:D,priorityLevel:N,startTime:j,expirationTime:ue,sortIndex:-1},j>te?(N.sortIndex=j,e(u,N),n(a)===null&&N===n(u)&&(v?(p(T),T=-1):v=!0,Dn(y,j-te))):(N.sortIndex=ue,e(a,N),_||g||(_=!0,Zt(I))),N},t.unstable_shouldYield=fe,t.unstable_wrapCallback=function(N){var D=h;return function(){var j=h;h=D;try{return N.apply(this,arguments)}finally{h=j}}}})(pm);fm.exports=pm;var E0=fm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm=b,Ye=E0;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gm=new Set,Yi={};function cr(t,e){Wr(t,e),Wr(t+"Capture",e)}function Wr(t,e){for(Yi[t]=e,t=0;t<e.length;t++)gm.add(e[t])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ya=Object.prototype.hasOwnProperty,S0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dh={},Lh={};function C0(t){return Ya.call(Lh,t)?!0:Ya.call(Dh,t)?!1:S0.test(t)?Lh[t]=!0:(Dh[t]=!0,!1)}function I0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function k0(t,e,n,r){if(e===null||typeof e>"u"||I0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Le(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ie[t]=new Le(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ie[e]=new Le(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ie[t]=new Le(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ie[t]=new Le(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ie[t]=new Le(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ie[t]=new Le(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ie[t]=new Le(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ie[t]=new Le(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ie[t]=new Le(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pc=/[\-:]([a-z])/g;function Oc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pc,Oc);Ie[e]=new Le(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pc,Oc);Ie[e]=new Le(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pc,Oc);Ie[e]=new Le(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ie[t]=new Le(t,1,!1,t.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ie[t]=new Le(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ac(t,e,n,r){var i=Ie.hasOwnProperty(e)?Ie[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(k0(e,n,i,r)&&(n=null),r||i===null?C0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yt=mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bs=Symbol.for("react.element"),_r=Symbol.for("react.portal"),vr=Symbol.for("react.fragment"),bc=Symbol.for("react.strict_mode"),qa=Symbol.for("react.profiler"),_m=Symbol.for("react.provider"),vm=Symbol.for("react.context"),Mc=Symbol.for("react.forward_ref"),Xa=Symbol.for("react.suspense"),Ja=Symbol.for("react.suspense_list"),Dc=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),ym=Symbol.for("react.offscreen"),Fh=Symbol.iterator;function gi(t){return t===null||typeof t!="object"?null:(t=Fh&&t[Fh]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Object.assign,aa;function Ri(t){if(aa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);aa=e&&e[1]||""}return`
`+aa+t}var ua=!1;function ca(t,e){if(!t||ua)return"";ua=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ua=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ri(t):""}function T0(t){switch(t.tag){case 5:return Ri(t.type);case 16:return Ri("Lazy");case 13:return Ri("Suspense");case 19:return Ri("SuspenseList");case 0:case 2:case 15:return t=ca(t.type,!1),t;case 11:return t=ca(t.type.render,!1),t;case 1:return t=ca(t.type,!0),t;default:return""}}function Za(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vr:return"Fragment";case _r:return"Portal";case qa:return"Profiler";case bc:return"StrictMode";case Xa:return"Suspense";case Ja:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vm:return(t.displayName||"Context")+".Consumer";case _m:return(t._context.displayName||"Context")+".Provider";case Mc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dc:return e=t.displayName||null,e!==null?e:Za(t.type)||"Memo";case nn:e=t._payload,t=t._init;try{return Za(t(e))}catch{}}return null}function N0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Za(e);case 8:return e===bc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function R0(t){var e=wm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vs(t){t._valueTracker||(t._valueTracker=R0(t))}function Em(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=wm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ro(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function eu(t,e){var n=e.checked;return ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Tn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sm(t,e){e=e.checked,e!=null&&Ac(t,"checked",e,!1)}function tu(t,e){Sm(t,e);var n=Tn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nu(t,e.type,n):e.hasOwnProperty("defaultValue")&&nu(t,e.type,Tn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Uh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nu(t,e,n){(e!=="number"||Ro(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xi=Array.isArray;function Pr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Tn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ru(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(xi(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tn(n)}}function Cm(t,e){var n=Tn(e.value),r=Tn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $h(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Im(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function iu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Im(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Hs,km=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Hs=Hs||document.createElement("div"),Hs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Hs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},x0=["Webkit","ms","Moz","O"];Object.keys(bi).forEach(function(t){x0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bi[e]=bi[t]})});function Tm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bi.hasOwnProperty(t)&&bi[t]?(""+e).trim():e+"px"}function Nm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Tm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var P0=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function su(t,e){if(e){if(P0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function ou(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lu=null;function Lc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var au=null,Or=null,Ar=null;function Wh(t){if(t=Ts(t)){if(typeof au!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Pl(e),au(t.stateNode,t.type,e))}}function Rm(t){Or?Ar?Ar.push(t):Ar=[t]:Or=t}function xm(){if(Or){var t=Or,e=Ar;if(Ar=Or=null,Wh(t),e)for(t=0;t<e.length;t++)Wh(e[t])}}function Pm(t,e){return t(e)}function Om(){}var da=!1;function Am(t,e,n){if(da)return t(e,n);da=!0;try{return Pm(t,e,n)}finally{da=!1,(Or!==null||Ar!==null)&&(Om(),xm())}}function Xi(t,e){var n=t.stateNode;if(n===null)return null;var r=Pl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var uu=!1;if(Wt)try{var _i={};Object.defineProperty(_i,"passive",{get:function(){uu=!0}}),window.addEventListener("test",_i,_i),window.removeEventListener("test",_i,_i)}catch{uu=!1}function O0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Mi=!1,xo=null,Po=!1,cu=null,A0={onError:function(t){Mi=!0,xo=t}};function b0(t,e,n,r,i,s,o,l,a){Mi=!1,xo=null,O0.apply(A0,arguments)}function M0(t,e,n,r,i,s,o,l,a){if(b0.apply(this,arguments),Mi){if(Mi){var u=xo;Mi=!1,xo=null}else throw Error(w(198));Po||(Po=!0,cu=u)}}function dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bh(t){if(dr(t)!==t)throw Error(w(188))}function D0(t){var e=t.alternate;if(!e){if(e=dr(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bh(i),t;if(s===r)return Bh(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Mm(t){return t=D0(t),t!==null?Dm(t):null}function Dm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dm(t);if(e!==null)return e;t=t.sibling}return null}var Lm=Ye.unstable_scheduleCallback,Vh=Ye.unstable_cancelCallback,L0=Ye.unstable_shouldYield,F0=Ye.unstable_requestPaint,ae=Ye.unstable_now,j0=Ye.unstable_getCurrentPriorityLevel,Fc=Ye.unstable_ImmediatePriority,Fm=Ye.unstable_UserBlockingPriority,Oo=Ye.unstable_NormalPriority,U0=Ye.unstable_LowPriority,jm=Ye.unstable_IdlePriority,Tl=null,Tt=null;function z0(t){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Tl,t,void 0,(t.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:B0,$0=Math.log,W0=Math.LN2;function B0(t){return t>>>=0,t===0?32:31-($0(t)/W0|0)|0}var Ks=64,Gs=4194304;function Pi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ao(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Pi(l):(s&=o,s!==0&&(r=Pi(s)))}else o=n&~i,o!==0?r=Pi(o):s!==0&&(r=Pi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pt(e),i=1<<n,r|=t[n],e&=~i;return r}function V0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=V0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function du(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Um(){var t=Ks;return Ks<<=1,!(Ks&4194240)&&(Ks=64),t}function ha(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Is(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pt(e),t[e]=n}function K0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function jc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var K=0;function zm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $m,Uc,Wm,Bm,Vm,hu=!1,Qs=[],pn=null,mn=null,gn=null,Ji=new Map,Zi=new Map,sn=[],G0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hh(t,e){switch(t){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":Ji.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zi.delete(e.pointerId)}}function vi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ts(e),e!==null&&Uc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Q0(t,e,n,r,i){switch(e){case"focusin":return pn=vi(pn,t,e,n,r,i),!0;case"dragenter":return mn=vi(mn,t,e,n,r,i),!0;case"mouseover":return gn=vi(gn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ji.set(s,vi(Ji.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Zi.set(s,vi(Zi.get(s)||null,t,e,n,r,i)),!0}return!1}function Hm(t){var e=Bn(t.target);if(e!==null){var n=dr(e);if(n!==null){if(e=n.tag,e===13){if(e=bm(n),e!==null){t.blockedOn=e,Vm(t.priority,function(){Wm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ho(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);lu=r,n.target.dispatchEvent(r),lu=null}else return e=Ts(n),e!==null&&Uc(e),t.blockedOn=n,!1;e.shift()}return!0}function Kh(t,e,n){ho(t)&&n.delete(e)}function Y0(){hu=!1,pn!==null&&ho(pn)&&(pn=null),mn!==null&&ho(mn)&&(mn=null),gn!==null&&ho(gn)&&(gn=null),Ji.forEach(Kh),Zi.forEach(Kh)}function yi(t,e){t.blockedOn===e&&(t.blockedOn=null,hu||(hu=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Y0)))}function es(t){function e(i){return yi(i,t)}if(0<Qs.length){yi(Qs[0],t);for(var n=1;n<Qs.length;n++){var r=Qs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pn!==null&&yi(pn,t),mn!==null&&yi(mn,t),gn!==null&&yi(gn,t),Ji.forEach(e),Zi.forEach(e),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)Hm(n),n.blockedOn===null&&sn.shift()}var br=Yt.ReactCurrentBatchConfig,bo=!0;function q0(t,e,n,r){var i=K,s=br.transition;br.transition=null;try{K=1,zc(t,e,n,r)}finally{K=i,br.transition=s}}function X0(t,e,n,r){var i=K,s=br.transition;br.transition=null;try{K=4,zc(t,e,n,r)}finally{K=i,br.transition=s}}function zc(t,e,n,r){if(bo){var i=fu(t,e,n,r);if(i===null)Sa(t,e,r,Mo,n),Hh(t,r);else if(Q0(i,t,e,n,r))r.stopPropagation();else if(Hh(t,r),e&4&&-1<G0.indexOf(t)){for(;i!==null;){var s=Ts(i);if(s!==null&&$m(s),s=fu(t,e,n,r),s===null&&Sa(t,e,r,Mo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Sa(t,e,r,null,n)}}var Mo=null;function fu(t,e,n,r){if(Mo=null,t=Lc(r),t=Bn(t),t!==null)if(e=dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Mo=t,null}function Km(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j0()){case Fc:return 1;case Fm:return 4;case Oo:case U0:return 16;case jm:return 536870912;default:return 16}default:return 16}}var cn=null,$c=null,fo=null;function Gm(){if(fo)return fo;var t,e=$c,n=e.length,r,i="value"in cn?cn.value:cn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return fo=i.slice(t,1<r?1-r:void 0)}function po(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ys(){return!0}function Gh(){return!1}function Xe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ys:Gh,this.isPropagationStopped=Gh,this}return ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ys)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ys)},persist:function(){},isPersistent:Ys}),e}var si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wc=Xe(si),ks=ie({},si,{view:0,detail:0}),J0=Xe(ks),fa,pa,wi,Nl=ie({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wi&&(wi&&t.type==="mousemove"?(fa=t.screenX-wi.screenX,pa=t.screenY-wi.screenY):pa=fa=0,wi=t),fa)},movementY:function(t){return"movementY"in t?t.movementY:pa}}),Qh=Xe(Nl),Z0=ie({},Nl,{dataTransfer:0}),ew=Xe(Z0),tw=ie({},ks,{relatedTarget:0}),ma=Xe(tw),nw=ie({},si,{animationName:0,elapsedTime:0,pseudoElement:0}),rw=Xe(nw),iw=ie({},si,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sw=Xe(iw),ow=ie({},si,{data:0}),Yh=Xe(ow),lw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uw[t])?!!e[t]:!1}function Bc(){return cw}var dw=ie({},ks,{key:function(t){if(t.key){var e=lw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=po(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bc,charCode:function(t){return t.type==="keypress"?po(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?po(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hw=Xe(dw),fw=ie({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qh=Xe(fw),pw=ie({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bc}),mw=Xe(pw),gw=ie({},si,{propertyName:0,elapsedTime:0,pseudoElement:0}),_w=Xe(gw),vw=ie({},Nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yw=Xe(vw),ww=[9,13,27,32],Vc=Wt&&"CompositionEvent"in window,Di=null;Wt&&"documentMode"in document&&(Di=document.documentMode);var Ew=Wt&&"TextEvent"in window&&!Di,Qm=Wt&&(!Vc||Di&&8<Di&&11>=Di),Xh=String.fromCharCode(32),Jh=!1;function Ym(t,e){switch(t){case"keyup":return ww.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yr=!1;function Sw(t,e){switch(t){case"compositionend":return qm(e);case"keypress":return e.which!==32?null:(Jh=!0,Xh);case"textInput":return t=e.data,t===Xh&&Jh?null:t;default:return null}}function Cw(t,e){if(yr)return t==="compositionend"||!Vc&&Ym(t,e)?(t=Gm(),fo=$c=cn=null,yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qm&&e.locale!=="ko"?null:e.data;default:return null}}var Iw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Iw[t.type]:e==="textarea"}function Xm(t,e,n,r){Rm(r),e=Do(e,"onChange"),0<e.length&&(n=new Wc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Li=null,ts=null;function kw(t){ag(t,0)}function Rl(t){var e=Sr(t);if(Em(e))return t}function Tw(t,e){if(t==="change")return e}var Jm=!1;if(Wt){var ga;if(Wt){var _a="oninput"in document;if(!_a){var ef=document.createElement("div");ef.setAttribute("oninput","return;"),_a=typeof ef.oninput=="function"}ga=_a}else ga=!1;Jm=ga&&(!document.documentMode||9<document.documentMode)}function tf(){Li&&(Li.detachEvent("onpropertychange",Zm),ts=Li=null)}function Zm(t){if(t.propertyName==="value"&&Rl(ts)){var e=[];Xm(e,ts,t,Lc(t)),Am(kw,e)}}function Nw(t,e,n){t==="focusin"?(tf(),Li=e,ts=n,Li.attachEvent("onpropertychange",Zm)):t==="focusout"&&tf()}function Rw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rl(ts)}function xw(t,e){if(t==="click")return Rl(e)}function Pw(t,e){if(t==="input"||t==="change")return Rl(e)}function Ow(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _t=typeof Object.is=="function"?Object.is:Ow;function ns(t,e){if(_t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ya.call(e,i)||!_t(t[i],e[i]))return!1}return!0}function nf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rf(t,e){var n=nf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nf(n)}}function eg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?eg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tg(){for(var t=window,e=Ro();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ro(t.document)}return e}function Hc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Aw(t){var e=tg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&eg(n.ownerDocument.documentElement,n)){if(r!==null&&Hc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=rf(n,s);var o=rf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bw=Wt&&"documentMode"in document&&11>=document.documentMode,wr=null,pu=null,Fi=null,mu=!1;function sf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mu||wr==null||wr!==Ro(r)||(r=wr,"selectionStart"in r&&Hc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fi&&ns(Fi,r)||(Fi=r,r=Do(pu,"onSelect"),0<r.length&&(e=new Wc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=wr)))}function qs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Er={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionend:qs("Transition","TransitionEnd")},va={},ng={};Wt&&(ng=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function xl(t){if(va[t])return va[t];if(!Er[t])return t;var e=Er[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ng)return va[t]=e[n];return t}var rg=xl("animationend"),ig=xl("animationiteration"),sg=xl("animationstart"),og=xl("transitionend"),lg=new Map,of="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(t,e){lg.set(t,e),cr(e,[t])}for(var ya=0;ya<of.length;ya++){var wa=of[ya],Mw=wa.toLowerCase(),Dw=wa[0].toUpperCase()+wa.slice(1);Pn(Mw,"on"+Dw)}Pn(rg,"onAnimationEnd");Pn(ig,"onAnimationIteration");Pn(sg,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(og,"onTransitionEnd");Wr("onMouseEnter",["mouseout","mouseover"]);Wr("onMouseLeave",["mouseout","mouseover"]);Wr("onPointerEnter",["pointerout","pointerover"]);Wr("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));function lf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,M0(r,e,void 0,t),t.currentTarget=null}function ag(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;lf(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;lf(i,l,u),s=a}}}if(Po)throw t=cu,Po=!1,cu=null,t}function J(t,e){var n=e[wu];n===void 0&&(n=e[wu]=new Set);var r=t+"__bubble";n.has(r)||(ug(e,t,2,!1),n.add(r))}function Ea(t,e,n){var r=0;e&&(r|=4),ug(n,t,r,e)}var Xs="_reactListening"+Math.random().toString(36).slice(2);function rs(t){if(!t[Xs]){t[Xs]=!0,gm.forEach(function(n){n!=="selectionchange"&&(Lw.has(n)||Ea(n,!1,t),Ea(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xs]||(e[Xs]=!0,Ea("selectionchange",!1,e))}}function ug(t,e,n,r){switch(Km(e)){case 1:var i=q0;break;case 4:i=X0;break;default:i=zc}n=i.bind(null,e,n,t),i=void 0,!uu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Sa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Bn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Am(function(){var u=s,d=Lc(n),c=[];e:{var h=lg.get(t);if(h!==void 0){var g=Wc,_=t;switch(t){case"keypress":if(po(n)===0)break e;case"keydown":case"keyup":g=hw;break;case"focusin":_="focus",g=ma;break;case"focusout":_="blur",g=ma;break;case"beforeblur":case"afterblur":g=ma;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ew;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=mw;break;case rg:case ig:case sg:g=rw;break;case og:g=_w;break;case"scroll":g=J0;break;case"wheel":g=yw;break;case"copy":case"cut":case"paste":g=sw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=qh}var v=(e&4)!==0,x=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Xi(f,p),y!=null&&v.push(is(f,y,m)))),x)break;f=f.return}0<v.length&&(h=new g(h,_,null,n,d),c.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==lu&&(_=n.relatedTarget||n.fromElement)&&(Bn(_)||_[Bt]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Bn(_):null,_!==null&&(x=dr(_),_!==x||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=Qh,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=qh,y="onPointerLeave",p="onPointerEnter",f="pointer"),x=g==null?h:Sr(g),m=_==null?h:Sr(_),h=new v(y,f+"leave",g,n,d),h.target=x,h.relatedTarget=m,y=null,Bn(d)===u&&(v=new v(p,f+"enter",_,n,d),v.target=m,v.relatedTarget=x,y=v),x=y,g&&_)t:{for(v=g,p=_,f=0,m=v;m;m=pr(m))f++;for(m=0,y=p;y;y=pr(y))m++;for(;0<f-m;)v=pr(v),f--;for(;0<m-f;)p=pr(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=pr(v),p=pr(p)}v=null}else v=null;g!==null&&af(c,h,g,v,!1),_!==null&&x!==null&&af(c,x,_,v,!0)}}e:{if(h=u?Sr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var I=Tw;else if(Zh(h))if(Jm)I=Pw;else{I=Rw;var k=Nw}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=xw);if(I&&(I=I(t,u))){Xm(c,I,n,d);break e}k&&k(t,h,u),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&nu(h,"number",h.value)}switch(k=u?Sr(u):window,t){case"focusin":(Zh(k)||k.contentEditable==="true")&&(wr=k,pu=u,Fi=null);break;case"focusout":Fi=pu=wr=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,sf(c,n,d);break;case"selectionchange":if(bw)break;case"keydown":case"keyup":sf(c,n,d)}var C;if(Vc)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else yr?Ym(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Qm&&n.locale!=="ko"&&(yr||T!=="onCompositionStart"?T==="onCompositionEnd"&&yr&&(C=Gm()):(cn=d,$c="value"in cn?cn.value:cn.textContent,yr=!0)),k=Do(u,T),0<k.length&&(T=new Yh(T,t,null,n,d),c.push({event:T,listeners:k}),C?T.data=C:(C=qm(n),C!==null&&(T.data=C)))),(C=Ew?Sw(t,n):Cw(t,n))&&(u=Do(u,"onBeforeInput"),0<u.length&&(d=new Yh("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=C))}ag(c,e)})}function is(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Do(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xi(t,n),s!=null&&r.unshift(is(t,s,i)),s=Xi(t,e),s!=null&&r.push(is(t,s,i))),t=t.return}return r}function pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function af(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Xi(n,s),a!=null&&o.unshift(is(n,a,l))):i||(a=Xi(n,s),a!=null&&o.push(is(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Fw=/\r\n?/g,jw=/\u0000|\uFFFD/g;function uf(t){return(typeof t=="string"?t:""+t).replace(Fw,`
`).replace(jw,"")}function Js(t,e,n){if(e=uf(e),uf(t)!==e&&n)throw Error(w(425))}function Lo(){}var gu=null,_u=null;function vu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yu=typeof setTimeout=="function"?setTimeout:void 0,Uw=typeof clearTimeout=="function"?clearTimeout:void 0,cf=typeof Promise=="function"?Promise:void 0,zw=typeof queueMicrotask=="function"?queueMicrotask:typeof cf<"u"?function(t){return cf.resolve(null).then(t).catch($w)}:yu;function $w(t){setTimeout(function(){throw t})}function Ca(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),es(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);es(e)}function _n(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function df(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oi=Math.random().toString(36).slice(2),Ct="__reactFiber$"+oi,ss="__reactProps$"+oi,Bt="__reactContainer$"+oi,wu="__reactEvents$"+oi,Ww="__reactListeners$"+oi,Bw="__reactHandles$"+oi;function Bn(t){var e=t[Ct];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bt]||n[Ct]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=df(t);t!==null;){if(n=t[Ct])return n;t=df(t)}return e}t=n,n=t.parentNode}return null}function Ts(t){return t=t[Ct]||t[Bt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Sr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Pl(t){return t[ss]||null}var Eu=[],Cr=-1;function On(t){return{current:t}}function Z(t){0>Cr||(t.current=Eu[Cr],Eu[Cr]=null,Cr--)}function X(t,e){Cr++,Eu[Cr]=t.current,t.current=e}var Nn={},Pe=On(Nn),We=On(!1),Jn=Nn;function Br(t,e){var n=t.type.contextTypes;if(!n)return Nn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Be(t){return t=t.childContextTypes,t!=null}function Fo(){Z(We),Z(Pe)}function hf(t,e,n){if(Pe.current!==Nn)throw Error(w(168));X(Pe,e),X(We,n)}function cg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,N0(t)||"Unknown",i));return ie({},n,r)}function jo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nn,Jn=Pe.current,X(Pe,t),X(We,We.current),!0}function ff(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=cg(t,e,Jn),r.__reactInternalMemoizedMergedChildContext=t,Z(We),Z(Pe),X(Pe,t)):Z(We),X(We,n)}var bt=null,Ol=!1,Ia=!1;function dg(t){bt===null?bt=[t]:bt.push(t)}function Vw(t){Ol=!0,dg(t)}function An(){if(!Ia&&bt!==null){Ia=!0;var t=0,e=K;try{var n=bt;for(K=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bt=null,Ol=!1}catch(i){throw bt!==null&&(bt=bt.slice(t+1)),Lm(Fc,An),i}finally{K=e,Ia=!1}}return null}var Ir=[],kr=0,Uo=null,zo=0,et=[],tt=0,Zn=null,Dt=1,Lt="";function jn(t,e){Ir[kr++]=zo,Ir[kr++]=Uo,Uo=t,zo=e}function hg(t,e,n){et[tt++]=Dt,et[tt++]=Lt,et[tt++]=Zn,Zn=t;var r=Dt;t=Lt;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var s=32-pt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dt=1<<32-pt(e)+i|n<<i|r,Lt=s+t}else Dt=1<<s|n<<i|r,Lt=t}function Kc(t){t.return!==null&&(jn(t,1),hg(t,1,0))}function Gc(t){for(;t===Uo;)Uo=Ir[--kr],Ir[kr]=null,zo=Ir[--kr],Ir[kr]=null;for(;t===Zn;)Zn=et[--tt],et[tt]=null,Lt=et[--tt],et[tt]=null,Dt=et[--tt],et[tt]=null}var Qe=null,Ge=null,ee=!1,ct=null;function fg(t,e){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qe=t,Ge=_n(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qe=t,Ge=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zn!==null?{id:Dt,overflow:Lt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qe=t,Ge=null,!0):!1;default:return!1}}function Su(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cu(t){if(ee){var e=Ge;if(e){var n=e;if(!pf(t,e)){if(Su(t))throw Error(w(418));e=_n(n.nextSibling);var r=Qe;e&&pf(t,e)?fg(r,n):(t.flags=t.flags&-4097|2,ee=!1,Qe=t)}}else{if(Su(t))throw Error(w(418));t.flags=t.flags&-4097|2,ee=!1,Qe=t}}}function mf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qe=t}function Zs(t){if(t!==Qe)return!1;if(!ee)return mf(t),ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vu(t.type,t.memoizedProps)),e&&(e=Ge)){if(Su(t))throw pg(),Error(w(418));for(;e;)fg(t,e),e=_n(e.nextSibling)}if(mf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ge=_n(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ge=null}}else Ge=Qe?_n(t.stateNode.nextSibling):null;return!0}function pg(){for(var t=Ge;t;)t=_n(t.nextSibling)}function Vr(){Ge=Qe=null,ee=!1}function Qc(t){ct===null?ct=[t]:ct.push(t)}var Hw=Yt.ReactCurrentBatchConfig;function at(t,e){if(t&&t.defaultProps){e=ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var $o=On(null),Wo=null,Tr=null,Yc=null;function qc(){Yc=Tr=Wo=null}function Xc(t){var e=$o.current;Z($o),t._currentValue=e}function Iu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Mr(t,e){Wo=t,Yc=Tr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ue=!0),t.firstContext=null)}function st(t){var e=t._currentValue;if(Yc!==t)if(t={context:t,memoizedValue:e,next:null},Tr===null){if(Wo===null)throw Error(w(308));Tr=t,Wo.dependencies={lanes:0,firstContext:t}}else Tr=Tr.next=t;return e}var Vn=null;function Jc(t){Vn===null?Vn=[t]:Vn.push(t)}function mg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Jc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Vt(t,r)}function Vt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rn=!1;function Zc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Vt(t,n)}return i=r.interleaved,i===null?(e.next=e,Jc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Vt(t,n)}function mo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jc(t,n)}}function gf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bo(t,e,n,r){var i=t.updateQueue;rn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(h=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){c=_.call(g,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(g,c,h):_,h==null)break e;c=ie({},c,h);break e;case 2:rn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=c):d=d.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);tr|=o,t.lanes=o,t.memoizedState=c}}function _f(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var _g=new mm.Component().refs;function ku(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Al={isMounted:function(t){return(t=t._reactInternals)?dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=be(),i=wn(t),s=zt(r,i);s.payload=e,n!=null&&(s.callback=n),e=vn(t,s,i),e!==null&&(mt(e,t,i,r),mo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=be(),i=wn(t),s=zt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vn(t,s,i),e!==null&&(mt(e,t,i,r),mo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=be(),r=wn(t),i=zt(n,r);i.tag=2,e!=null&&(i.callback=e),e=vn(t,i,r),e!==null&&(mt(e,t,r,n),mo(e,t,r))}};function vf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ns(n,r)||!ns(i,s):!0}function vg(t,e,n){var r=!1,i=Nn,s=e.contextType;return typeof s=="object"&&s!==null?s=st(s):(i=Be(e)?Jn:Pe.current,r=e.contextTypes,s=(r=r!=null)?Br(t,i):Nn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Al,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function yf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Al.enqueueReplaceState(e,e.state,null)}function Tu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=_g,Zc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=st(s):(s=Be(e)?Jn:Pe.current,i.context=Br(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ku(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Al.enqueueReplaceState(i,i.state,null),Bo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ei(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===_g&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function eo(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wf(t){var e=t._init;return e(t._payload)}function yg(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=En(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,y){return f===null||f.tag!==6?(f=Oa(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,y){var I=m.type;return I===vr?d(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===nn&&wf(I)===f.type)?(y=i(f,m.props),y.ref=Ei(p,f,m),y.return=p,y):(y=Eo(m.type,m.key,m.props,null,p.mode,y),y.ref=Ei(p,f,m),y.return=p,y)}function u(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Aa(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,y,I){return f===null||f.tag!==7?(f=Yn(m,p.mode,y,I),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Oa(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Bs:return m=Eo(f.type,f.key,f.props,null,p.mode,m),m.ref=Ei(p,null,f),m.return=p,m;case _r:return f=Aa(f,p.mode,m),f.return=p,f;case nn:var y=f._init;return c(p,y(f._payload),m)}if(xi(f)||gi(f))return f=Yn(f,p.mode,m,null),f.return=p,f;eo(p,f)}return null}function h(p,f,m,y){var I=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:l(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Bs:return m.key===I?a(p,f,m,y):null;case _r:return m.key===I?u(p,f,m,y):null;case nn:return I=m._init,h(p,f,I(m._payload),y)}if(xi(m)||gi(m))return I!==null?null:d(p,f,m,y,null);eo(p,m)}return null}function g(p,f,m,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(f,p,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Bs:return p=p.get(y.key===null?m:y.key)||null,a(f,p,y,I);case _r:return p=p.get(y.key===null?m:y.key)||null,u(f,p,y,I);case nn:var k=y._init;return g(p,f,m,k(y._payload),I)}if(xi(y)||gi(y))return p=p.get(m)||null,d(f,p,y,I,null);eo(f,y)}return null}function _(p,f,m,y){for(var I=null,k=null,C=f,T=f=0,P=null;C!==null&&T<m.length;T++){C.index>T?(P=C,C=null):P=C.sibling;var O=h(p,C,m[T],y);if(O===null){C===null&&(C=P);break}t&&C&&O.alternate===null&&e(p,C),f=s(O,f,T),k===null?I=O:k.sibling=O,k=O,C=P}if(T===m.length)return n(p,C),ee&&jn(p,T),I;if(C===null){for(;T<m.length;T++)C=c(p,m[T],y),C!==null&&(f=s(C,f,T),k===null?I=C:k.sibling=C,k=C);return ee&&jn(p,T),I}for(C=r(p,C);T<m.length;T++)P=g(C,p,T,m[T],y),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?T:P.key),f=s(P,f,T),k===null?I=P:k.sibling=P,k=P);return t&&C.forEach(function(fe){return e(p,fe)}),ee&&jn(p,T),I}function v(p,f,m,y){var I=gi(m);if(typeof I!="function")throw Error(w(150));if(m=I.call(m),m==null)throw Error(w(151));for(var k=I=null,C=f,T=f=0,P=null,O=m.next();C!==null&&!O.done;T++,O=m.next()){C.index>T?(P=C,C=null):P=C.sibling;var fe=h(p,C,O.value,y);if(fe===null){C===null&&(C=P);break}t&&C&&fe.alternate===null&&e(p,C),f=s(fe,f,T),k===null?I=fe:k.sibling=fe,k=fe,C=P}if(O.done)return n(p,C),ee&&jn(p,T),I;if(C===null){for(;!O.done;T++,O=m.next())O=c(p,O.value,y),O!==null&&(f=s(O,f,T),k===null?I=O:k.sibling=O,k=O);return ee&&jn(p,T),I}for(C=r(p,C);!O.done;T++,O=m.next())O=g(C,p,T,O.value,y),O!==null&&(t&&O.alternate!==null&&C.delete(O.key===null?T:O.key),f=s(O,f,T),k===null?I=O:k.sibling=O,k=O);return t&&C.forEach(function(Fe){return e(p,Fe)}),ee&&jn(p,T),I}function x(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===vr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Bs:e:{for(var I=m.key,k=f;k!==null;){if(k.key===I){if(I=m.type,I===vr){if(k.tag===7){n(p,k.sibling),f=i(k,m.props.children),f.return=p,p=f;break e}}else if(k.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===nn&&wf(I)===k.type){n(p,k.sibling),f=i(k,m.props),f.ref=Ei(p,k,m),f.return=p,p=f;break e}n(p,k);break}else e(p,k);k=k.sibling}m.type===vr?(f=Yn(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=Eo(m.type,m.key,m.props,null,p.mode,y),y.ref=Ei(p,f,m),y.return=p,p=y)}return o(p);case _r:e:{for(k=m.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Aa(m,p.mode,y),f.return=p,p=f}return o(p);case nn:return k=m._init,x(p,f,k(m._payload),y)}if(xi(m))return _(p,f,m,y);if(gi(m))return v(p,f,m,y);eo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Oa(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return x}var Hr=yg(!0),wg=yg(!1),Ns={},Nt=On(Ns),os=On(Ns),ls=On(Ns);function Hn(t){if(t===Ns)throw Error(w(174));return t}function ed(t,e){switch(X(ls,e),X(os,t),X(Nt,Ns),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:iu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=iu(e,t)}Z(Nt),X(Nt,e)}function Kr(){Z(Nt),Z(os),Z(ls)}function Eg(t){Hn(ls.current);var e=Hn(Nt.current),n=iu(e,t.type);e!==n&&(X(os,t),X(Nt,n))}function td(t){os.current===t&&(Z(Nt),Z(os))}var ne=On(0);function Vo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ka=[];function nd(){for(var t=0;t<ka.length;t++)ka[t]._workInProgressVersionPrimary=null;ka.length=0}var go=Yt.ReactCurrentDispatcher,Ta=Yt.ReactCurrentBatchConfig,er=0,re=null,de=null,me=null,Ho=!1,ji=!1,as=0,Kw=0;function Ne(){throw Error(w(321))}function rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_t(t[n],e[n]))return!1;return!0}function id(t,e,n,r,i,s){if(er=s,re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,go.current=t===null||t.memoizedState===null?qw:Xw,t=n(r,i),ji){s=0;do{if(ji=!1,as=0,25<=s)throw Error(w(301));s+=1,me=de=null,e.updateQueue=null,go.current=Jw,t=n(r,i)}while(ji)}if(go.current=Ko,e=de!==null&&de.next!==null,er=0,me=de=re=null,Ho=!1,e)throw Error(w(300));return t}function sd(){var t=as!==0;return as=0,t}function St(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?re.memoizedState=me=t:me=me.next=t,me}function ot(){if(de===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=de.next;var e=me===null?re.memoizedState:me.next;if(e!==null)me=e,de=t;else{if(t===null)throw Error(w(310));de=t,t={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},me===null?re.memoizedState=me=t:me=me.next=t}return me}function us(t,e){return typeof e=="function"?e(t):e}function Na(t){var e=ot(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=de,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((er&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,re.lanes|=d,tr|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,_t(r,e.memoizedState)||(Ue=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,re.lanes|=s,tr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ra(t){var e=ot(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);_t(s,e.memoizedState)||(Ue=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Sg(){}function Cg(t,e){var n=re,r=ot(),i=e(),s=!_t(r.memoizedState,i);if(s&&(r.memoizedState=i,Ue=!0),r=r.queue,od(Tg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,cs(9,kg.bind(null,n,r,i,e),void 0,null),ye===null)throw Error(w(349));er&30||Ig(n,e,i)}return i}function Ig(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=re.updateQueue,e===null?(e={lastEffect:null,stores:null},re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kg(t,e,n,r){e.value=n,e.getSnapshot=r,Ng(e)&&Rg(t)}function Tg(t,e,n){return n(function(){Ng(e)&&Rg(t)})}function Ng(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_t(t,n)}catch{return!0}}function Rg(t){var e=Vt(t,1);e!==null&&mt(e,t,1,-1)}function Ef(t){var e=St();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:t},e.queue=t,t=t.dispatch=Yw.bind(null,re,t),[e.memoizedState,t]}function cs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=re.updateQueue,e===null?(e={lastEffect:null,stores:null},re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function xg(){return ot().memoizedState}function _o(t,e,n,r){var i=St();re.flags|=t,i.memoizedState=cs(1|e,n,void 0,r===void 0?null:r)}function bl(t,e,n,r){var i=ot();r=r===void 0?null:r;var s=void 0;if(de!==null){var o=de.memoizedState;if(s=o.destroy,r!==null&&rd(r,o.deps)){i.memoizedState=cs(e,n,s,r);return}}re.flags|=t,i.memoizedState=cs(1|e,n,s,r)}function Sf(t,e){return _o(8390656,8,t,e)}function od(t,e){return bl(2048,8,t,e)}function Pg(t,e){return bl(4,2,t,e)}function Og(t,e){return bl(4,4,t,e)}function Ag(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bg(t,e,n){return n=n!=null?n.concat([t]):null,bl(4,4,Ag.bind(null,e,t),n)}function ld(){}function Mg(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Dg(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Lg(t,e,n){return er&21?(_t(n,e)||(n=Um(),re.lanes|=n,tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ue=!0),t.memoizedState=n)}function Gw(t,e){var n=K;K=n!==0&&4>n?n:4,t(!0);var r=Ta.transition;Ta.transition={};try{t(!1),e()}finally{K=n,Ta.transition=r}}function Fg(){return ot().memoizedState}function Qw(t,e,n){var r=wn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jg(t))Ug(e,n);else if(n=mg(t,e,n,r),n!==null){var i=be();mt(n,t,r,i),zg(n,e,r)}}function Yw(t,e,n){var r=wn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jg(t))Ug(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,_t(l,o)){var a=e.interleaved;a===null?(i.next=i,Jc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=mg(t,e,i,r),n!==null&&(i=be(),mt(n,t,r,i),zg(n,e,r))}}function jg(t){var e=t.alternate;return t===re||e!==null&&e===re}function Ug(t,e){ji=Ho=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jc(t,n)}}var Ko={readContext:st,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},qw={readContext:st,useCallback:function(t,e){return St().memoizedState=[t,e===void 0?null:e],t},useContext:st,useEffect:Sf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_o(4194308,4,Ag.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _o(4194308,4,t,e)},useInsertionEffect:function(t,e){return _o(4,2,t,e)},useMemo:function(t,e){var n=St();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=St();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Qw.bind(null,re,t),[r.memoizedState,t]},useRef:function(t){var e=St();return t={current:t},e.memoizedState=t},useState:Ef,useDebugValue:ld,useDeferredValue:function(t){return St().memoizedState=t},useTransition:function(){var t=Ef(!1),e=t[0];return t=Gw.bind(null,t[1]),St().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=re,i=St();if(ee){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),ye===null)throw Error(w(349));er&30||Ig(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sf(Tg.bind(null,r,s,t),[t]),r.flags|=2048,cs(9,kg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=St(),e=ye.identifierPrefix;if(ee){var n=Lt,r=Dt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=as++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Kw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Xw={readContext:st,useCallback:Mg,useContext:st,useEffect:od,useImperativeHandle:bg,useInsertionEffect:Pg,useLayoutEffect:Og,useMemo:Dg,useReducer:Na,useRef:xg,useState:function(){return Na(us)},useDebugValue:ld,useDeferredValue:function(t){var e=ot();return Lg(e,de.memoizedState,t)},useTransition:function(){var t=Na(us)[0],e=ot().memoizedState;return[t,e]},useMutableSource:Sg,useSyncExternalStore:Cg,useId:Fg,unstable_isNewReconciler:!1},Jw={readContext:st,useCallback:Mg,useContext:st,useEffect:od,useImperativeHandle:bg,useInsertionEffect:Pg,useLayoutEffect:Og,useMemo:Dg,useReducer:Ra,useRef:xg,useState:function(){return Ra(us)},useDebugValue:ld,useDeferredValue:function(t){var e=ot();return de===null?e.memoizedState=t:Lg(e,de.memoizedState,t)},useTransition:function(){var t=Ra(us)[0],e=ot().memoizedState;return[t,e]},useMutableSource:Sg,useSyncExternalStore:Cg,useId:Fg,unstable_isNewReconciler:!1};function Gr(t,e){try{var n="",r=e;do n+=T0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function xa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Zw=typeof WeakMap=="function"?WeakMap:Map;function $g(t,e,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Qo||(Qo=!0,Fu=r),Nu(t,e)},n}function Wg(t,e,n){n=zt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Nu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nu(t,e),typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Zw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=fE.bind(null,t,e,n),e.then(t,t))}function If(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zt(-1,1),e.tag=2,vn(n,e,1))),n.lanes|=1),t)}var eE=Yt.ReactCurrentOwner,Ue=!1;function Ae(t,e,n,r){e.child=t===null?wg(e,null,n,r):Hr(e,t.child,n,r)}function Tf(t,e,n,r,i){n=n.render;var s=e.ref;return Mr(e,i),r=id(t,e,n,r,s,i),n=sd(),t!==null&&!Ue?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ht(t,e,i)):(ee&&n&&Kc(e),e.flags|=1,Ae(t,e,r,i),e.child)}function Nf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!md(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Bg(t,e,s,r,i)):(t=Eo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ns,n(o,r)&&t.ref===e.ref)return Ht(t,e,i)}return e.flags|=1,t=En(s,r),t.ref=e.ref,t.return=e,e.child=t}function Bg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ns(s,r)&&t.ref===e.ref)if(Ue=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ue=!0);else return e.lanes=t.lanes,Ht(t,e,i)}return Ru(t,e,n,r,i)}function Vg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Rr,He),He|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(Rr,He),He|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(Rr,He),He|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(Rr,He),He|=r;return Ae(t,e,i,n),e.child}function Hg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ru(t,e,n,r,i){var s=Be(n)?Jn:Pe.current;return s=Br(e,s),Mr(e,i),n=id(t,e,n,r,s,i),r=sd(),t!==null&&!Ue?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ht(t,e,i)):(ee&&r&&Kc(e),e.flags|=1,Ae(t,e,n,i),e.child)}function Rf(t,e,n,r,i){if(Be(n)){var s=!0;jo(e)}else s=!1;if(Mr(e,i),e.stateNode===null)vo(t,e),vg(e,n,r),Tu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=st(u):(u=Be(n)?Jn:Pe.current,u=Br(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&yf(e,o,r,u),rn=!1;var h=e.memoizedState;o.state=h,Bo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||We.current||rn?(typeof d=="function"&&(ku(e,n,d,r),a=e.memoizedState),(l=rn||vf(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,gg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:at(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=st(a):(a=Be(n)?Jn:Pe.current,a=Br(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&yf(e,o,r,a),rn=!1,h=e.memoizedState,o.state=h,Bo(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||We.current||rn?(typeof g=="function"&&(ku(e,n,g,r),_=e.memoizedState),(u=rn||vf(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return xu(t,e,n,r,s,i)}function xu(t,e,n,r,i,s){Hg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ff(e,n,!1),Ht(t,e,s);r=e.stateNode,eE.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Hr(e,t.child,null,s),e.child=Hr(e,null,l,s)):Ae(t,e,l,s),e.memoizedState=r.state,i&&ff(e,n,!0),e.child}function Kg(t){var e=t.stateNode;e.pendingContext?hf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hf(t,e.context,!1),ed(t,e.containerInfo)}function xf(t,e,n,r,i){return Vr(),Qc(i),e.flags|=256,Ae(t,e,n,r),e.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Ou(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gg(t,e,n){var r=e.pendingProps,i=ne.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(ne,i&1),t===null)return Cu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ll(o,r,0,null),t=Yn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ou(n),e.memoizedState=Pu,t):ad(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return tE(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=En(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=En(l,s):(s=Yn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ou(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pu,r}return s=t.child,t=s.sibling,r=En(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ad(t,e){return e=Ll({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function to(t,e,n,r){return r!==null&&Qc(r),Hr(e,t.child,null,n),t=ad(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=xa(Error(w(422))),to(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ll({mode:"visible",children:r.children},i,0,null),s=Yn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Hr(e,t.child,null,o),e.child.memoizedState=Ou(o),e.memoizedState=Pu,s);if(!(e.mode&1))return to(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=xa(s,r,void 0),to(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ue||l){if(r=ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Vt(t,i),mt(r,t,i,-1))}return pd(),r=xa(Error(w(421))),to(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=pE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ge=_n(i.nextSibling),Qe=e,ee=!0,ct=null,t!==null&&(et[tt++]=Dt,et[tt++]=Lt,et[tt++]=Zn,Dt=t.id,Lt=t.overflow,Zn=e),e=ad(e,r.children),e.flags|=4096,e)}function Pf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Iu(t.return,e,n)}function Pa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Qg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ae(t,e,r.children,n),r=ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pf(t,n,e);else if(t.tag===19)Pf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Pa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Pa(e,!0,n,null,s);break;case"together":Pa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ht(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=En(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=En(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nE(t,e,n){switch(e.tag){case 3:Kg(e),Vr();break;case 5:Eg(e);break;case 1:Be(e.type)&&jo(e);break;case 4:ed(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X($o,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(ne,ne.current&1),e.flags|=128,null):n&e.child.childLanes?Gg(t,e,n):(X(ne,ne.current&1),t=Ht(t,e,n),t!==null?t.sibling:null);X(ne,ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Qg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(ne,ne.current),r)break;return null;case 22:case 23:return e.lanes=0,Vg(t,e,n)}return Ht(t,e,n)}var Yg,Au,qg,Xg;Yg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Au=function(){};qg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hn(Nt.current);var s=null;switch(n){case"input":i=eu(t,i),r=eu(t,r),s=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),s=[];break;case"textarea":i=ru(t,i),r=ru(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Lo)}su(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&J("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Xg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Si(t,e){if(!ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Re(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function rE(t,e,n){var r=e.pendingProps;switch(Gc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(e),null;case 1:return Be(e.type)&&Fo(),Re(e),null;case 3:return r=e.stateNode,Kr(),Z(We),Z(Pe),nd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ct!==null&&(zu(ct),ct=null))),Au(t,e),Re(e),null;case 5:td(e);var i=Hn(ls.current);if(n=e.type,t!==null&&e.stateNode!=null)qg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return Re(e),null}if(t=Hn(Nt.current),Zs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ct]=e,r[ss]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Oi.length;i++)J(Oi[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":jh(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":zh(r,s),J("invalid",r)}su(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Js(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Js(r.textContent,l,t),i=["children",""+l]):Yi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":Vs(r),Uh(r,s,!0);break;case"textarea":Vs(r),$h(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Lo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Im(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ct]=e,t[ss]=r,Yg(t,e,!1,!1),e.stateNode=t;e:{switch(o=ou(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<Oi.length;i++)J(Oi[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":jh(t,r),i=eu(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),J("invalid",t);break;case"textarea":zh(t,r),i=ru(t,r),J("invalid",t);break;default:i=r}su(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Nm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&km(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&qi(t,a):typeof a=="number"&&qi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&J("scroll",t):a!=null&&Ac(t,s,a,o))}switch(n){case"input":Vs(t),Uh(t,r,!1);break;case"textarea":Vs(t),$h(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Tn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Pr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Pr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Re(e),null;case 6:if(t&&e.stateNode!=null)Xg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=Hn(ls.current),Hn(Nt.current),Zs(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ct]=e,(s=r.nodeValue!==n)&&(t=Qe,t!==null))switch(t.tag){case 3:Js(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Js(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=e,e.stateNode=r}return Re(e),null;case 13:if(Z(ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ee&&Ge!==null&&e.mode&1&&!(e.flags&128))pg(),Vr(),e.flags|=98560,s=!1;else if(s=Zs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[Ct]=e}else Vr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Re(e),s=!1}else ct!==null&&(zu(ct),ct=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ne.current&1?he===0&&(he=3):pd())),e.updateQueue!==null&&(e.flags|=4),Re(e),null);case 4:return Kr(),Au(t,e),t===null&&rs(e.stateNode.containerInfo),Re(e),null;case 10:return Xc(e.type._context),Re(e),null;case 17:return Be(e.type)&&Fo(),Re(e),null;case 19:if(Z(ne),s=e.memoizedState,s===null)return Re(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Si(s,!1);else{if(he!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vo(t),o!==null){for(e.flags|=128,Si(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(ne,ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&ae()>Qr&&(e.flags|=128,r=!0,Si(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Si(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ee)return Re(e),null}else 2*ae()-s.renderingStartTime>Qr&&n!==1073741824&&(e.flags|=128,r=!0,Si(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ae(),e.sibling=null,n=ne.current,X(ne,r?n&1|2:n&1),e):(Re(e),null);case 22:case 23:return fd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?He&1073741824&&(Re(e),e.subtreeFlags&6&&(e.flags|=8192)):Re(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function iE(t,e){switch(Gc(e),e.tag){case 1:return Be(e.type)&&Fo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Kr(),Z(We),Z(Pe),nd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return td(e),null;case 13:if(Z(ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));Vr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(ne),null;case 4:return Kr(),null;case 10:return Xc(e.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var no=!1,xe=!1,sE=typeof WeakSet=="function"?WeakSet:Set,R=null;function Nr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(t,e,r)}else n.current=null}function bu(t,e,n){try{n()}catch(r){se(t,e,r)}}var Of=!1;function oE(t,e){if(gu=bo,t=tg(),Hc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(_u={focusedElem:t,selectionRange:n},bo=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,x=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:at(e.type,v),x);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){se(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return _=Of,Of=!1,_}function Ui(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&bu(e,n,s)}i=i.next}while(i!==r)}}function Ml(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Mu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jg(t){var e=t.alternate;e!==null&&(t.alternate=null,Jg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ct],delete e[ss],delete e[wu],delete e[Ww],delete e[Bw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zg(t){return t.tag===5||t.tag===3||t.tag===4}function Af(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Du(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Lo));else if(r!==4&&(t=t.child,t!==null))for(Du(t,e,n),t=t.sibling;t!==null;)Du(t,e,n),t=t.sibling}function Lu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lu(t,e,n),t=t.sibling;t!==null;)Lu(t,e,n),t=t.sibling}var Ee=null,ut=!1;function en(t,e,n){for(n=n.child;n!==null;)e_(t,e,n),n=n.sibling}function e_(t,e,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 5:xe||Nr(n,e);case 6:var r=Ee,i=ut;Ee=null,en(t,e,n),Ee=r,ut=i,Ee!==null&&(ut?(t=Ee,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(ut?(t=Ee,n=n.stateNode,t.nodeType===8?Ca(t.parentNode,n):t.nodeType===1&&Ca(t,n),es(t)):Ca(Ee,n.stateNode));break;case 4:r=Ee,i=ut,Ee=n.stateNode.containerInfo,ut=!0,en(t,e,n),Ee=r,ut=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bu(n,e,o),i=i.next}while(i!==r)}en(t,e,n);break;case 1:if(!xe&&(Nr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){se(n,e,l)}en(t,e,n);break;case 21:en(t,e,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,en(t,e,n),xe=r):en(t,e,n);break;default:en(t,e,n)}}function bf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sE),e.forEach(function(r){var i=mE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ee=l.stateNode,ut=!1;break e;case 3:Ee=l.stateNode.containerInfo,ut=!0;break e;case 4:Ee=l.stateNode.containerInfo,ut=!0;break e}l=l.return}if(Ee===null)throw Error(w(160));e_(s,o,i),Ee=null,ut=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){se(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)t_(e,t),e=e.sibling}function t_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(lt(e,t),wt(t),r&4){try{Ui(3,t,t.return),Ml(3,t)}catch(v){se(t,t.return,v)}try{Ui(5,t,t.return)}catch(v){se(t,t.return,v)}}break;case 1:lt(e,t),wt(t),r&512&&n!==null&&Nr(n,n.return);break;case 5:if(lt(e,t),wt(t),r&512&&n!==null&&Nr(n,n.return),t.flags&32){var i=t.stateNode;try{qi(i,"")}catch(v){se(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Sm(i,s),ou(l,o);var u=ou(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Nm(i,c):d==="dangerouslySetInnerHTML"?km(i,c):d==="children"?qi(i,c):Ac(i,d,c,u)}switch(l){case"input":tu(i,s);break;case"textarea":Cm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Pr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Pr(i,!!s.multiple,s.defaultValue,!0):Pr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ss]=s}catch(v){se(t,t.return,v)}}break;case 6:if(lt(e,t),wt(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){se(t,t.return,v)}}break;case 3:if(lt(e,t),wt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{es(e.containerInfo)}catch(v){se(t,t.return,v)}break;case 4:lt(e,t),wt(t);break;case 13:lt(e,t),wt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dd=ae())),r&4&&bf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(xe=(u=xe)||d,lt(e,t),xe=u):lt(e,t),wt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(R=t,d=t.child;d!==null;){for(c=R=d;R!==null;){switch(h=R,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ui(4,h,h.return);break;case 1:Nr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){se(r,n,v)}}break;case 5:Nr(h,h.return);break;case 22:if(h.memoizedState!==null){Df(c);continue}}g!==null?(g.return=h,R=g):Df(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Tm("display",o))}catch(v){se(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){se(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:lt(e,t),wt(t),r&4&&bf(t);break;case 21:break;default:lt(e,t),wt(t)}}function wt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Zg(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qi(i,""),r.flags&=-33);var s=Af(t);Lu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Af(t);Du(t,l,o);break;default:throw Error(w(161))}}catch(a){se(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lE(t,e,n){R=t,n_(t)}function n_(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||no;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||xe;l=no;var u=xe;if(no=o,(xe=a)&&!u)for(R=i;R!==null;)o=R,a=o.child,o.tag===22&&o.memoizedState!==null?Lf(i):a!==null?(a.return=o,R=a):Lf(i);for(;s!==null;)R=s,n_(s),s=s.sibling;R=i,no=l,xe=u}Mf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):Mf(t)}}function Mf(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:xe||Ml(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:at(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_f(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_f(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&es(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}xe||e.flags&512&&Mu(e)}catch(h){se(e,e.return,h)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function Df(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function Lf(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ml(4,e)}catch(a){se(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){se(e,i,a)}}var s=e.return;try{Mu(e)}catch(a){se(e,s,a)}break;case 5:var o=e.return;try{Mu(e)}catch(a){se(e,o,a)}}}catch(a){se(e,e.return,a)}if(e===t){R=null;break}var l=e.sibling;if(l!==null){l.return=e.return,R=l;break}R=e.return}}var aE=Math.ceil,Go=Yt.ReactCurrentDispatcher,ud=Yt.ReactCurrentOwner,it=Yt.ReactCurrentBatchConfig,V=0,ye=null,ce=null,Ce=0,He=0,Rr=On(0),he=0,ds=null,tr=0,Dl=0,cd=0,zi=null,je=null,dd=0,Qr=1/0,At=null,Qo=!1,Fu=null,yn=null,ro=!1,dn=null,Yo=0,$i=0,ju=null,yo=-1,wo=0;function be(){return V&6?ae():yo!==-1?yo:yo=ae()}function wn(t){return t.mode&1?V&2&&Ce!==0?Ce&-Ce:Hw.transition!==null?(wo===0&&(wo=Um()),wo):(t=K,t!==0||(t=window.event,t=t===void 0?16:Km(t.type)),t):1}function mt(t,e,n,r){if(50<$i)throw $i=0,ju=null,Error(w(185));Is(t,n,r),(!(V&2)||t!==ye)&&(t===ye&&(!(V&2)&&(Dl|=n),he===4&&on(t,Ce)),Ve(t,r),n===1&&V===0&&!(e.mode&1)&&(Qr=ae()+500,Ol&&An()))}function Ve(t,e){var n=t.callbackNode;H0(t,e);var r=Ao(t,t===ye?Ce:0);if(r===0)n!==null&&Vh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Vh(n),e===1)t.tag===0?Vw(Ff.bind(null,t)):dg(Ff.bind(null,t)),zw(function(){!(V&6)&&An()}),n=null;else{switch(zm(r)){case 1:n=Fc;break;case 4:n=Fm;break;case 16:n=Oo;break;case 536870912:n=jm;break;default:n=Oo}n=c_(n,r_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function r_(t,e){if(yo=-1,wo=0,V&6)throw Error(w(327));var n=t.callbackNode;if(Dr()&&t.callbackNode!==n)return null;var r=Ao(t,t===ye?Ce:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=qo(t,r);else{e=r;var i=V;V|=2;var s=s_();(ye!==t||Ce!==e)&&(At=null,Qr=ae()+500,Qn(t,e));do try{dE();break}catch(l){i_(t,l)}while(1);qc(),Go.current=s,V=i,ce!==null?e=0:(ye=null,Ce=0,e=he)}if(e!==0){if(e===2&&(i=du(t),i!==0&&(r=i,e=Uu(t,i))),e===1)throw n=ds,Qn(t,0),on(t,r),Ve(t,ae()),n;if(e===6)on(t,r);else{if(i=t.current.alternate,!(r&30)&&!uE(i)&&(e=qo(t,r),e===2&&(s=du(t),s!==0&&(r=s,e=Uu(t,s))),e===1))throw n=ds,Qn(t,0),on(t,r),Ve(t,ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:Un(t,je,At);break;case 3:if(on(t,r),(r&130023424)===r&&(e=dd+500-ae(),10<e)){if(Ao(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){be(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=yu(Un.bind(null,t,je,At),e);break}Un(t,je,At);break;case 4:if(on(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aE(r/1960))-r,10<r){t.timeoutHandle=yu(Un.bind(null,t,je,At),r);break}Un(t,je,At);break;case 5:Un(t,je,At);break;default:throw Error(w(329))}}}return Ve(t,ae()),t.callbackNode===n?r_.bind(null,t):null}function Uu(t,e){var n=zi;return t.current.memoizedState.isDehydrated&&(Qn(t,e).flags|=256),t=qo(t,e),t!==2&&(e=je,je=n,e!==null&&zu(e)),t}function zu(t){je===null?je=t:je.push.apply(je,t)}function uE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!_t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function on(t,e){for(e&=~cd,e&=~Dl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pt(e),r=1<<n;t[n]=-1,e&=~r}}function Ff(t){if(V&6)throw Error(w(327));Dr();var e=Ao(t,0);if(!(e&1))return Ve(t,ae()),null;var n=qo(t,e);if(t.tag!==0&&n===2){var r=du(t);r!==0&&(e=r,n=Uu(t,r))}if(n===1)throw n=ds,Qn(t,0),on(t,e),Ve(t,ae()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Un(t,je,At),Ve(t,ae()),null}function hd(t,e){var n=V;V|=1;try{return t(e)}finally{V=n,V===0&&(Qr=ae()+500,Ol&&An())}}function nr(t){dn!==null&&dn.tag===0&&!(V&6)&&Dr();var e=V;V|=1;var n=it.transition,r=K;try{if(it.transition=null,K=1,t)return t()}finally{K=r,it.transition=n,V=e,!(V&6)&&An()}}function fd(){He=Rr.current,Z(Rr)}function Qn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Uw(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(Gc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fo();break;case 3:Kr(),Z(We),Z(Pe),nd();break;case 5:td(r);break;case 4:Kr();break;case 13:Z(ne);break;case 19:Z(ne);break;case 10:Xc(r.type._context);break;case 22:case 23:fd()}n=n.return}if(ye=t,ce=t=En(t.current,null),Ce=He=e,he=0,ds=null,cd=Dl=tr=0,je=zi=null,Vn!==null){for(e=0;e<Vn.length;e++)if(n=Vn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Vn=null}return t}function i_(t,e){do{var n=ce;try{if(qc(),go.current=Ko,Ho){for(var r=re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ho=!1}if(er=0,me=de=re=null,ji=!1,as=0,ud.current=null,n===null||n.return===null){he=1,ds=e,ce=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ce,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=If(o);if(g!==null){g.flags&=-257,kf(g,o,l,s,e),g.mode&1&&Cf(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){Cf(s,u,e),pd();break e}a=Error(w(426))}}else if(ee&&l.mode&1){var x=If(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),kf(x,o,l,s,e),Qc(Gr(a,l));break e}}s=a=Gr(a,l),he!==4&&(he=2),zi===null?zi=[s]:zi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=$g(s,a,e);gf(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(yn===null||!yn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Wg(s,l,e);gf(s,y);break e}}s=s.return}while(s!==null)}l_(n)}catch(I){e=I,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(1)}function s_(){var t=Go.current;return Go.current=Ko,t===null?Ko:t}function pd(){(he===0||he===3||he===2)&&(he=4),ye===null||!(tr&268435455)&&!(Dl&268435455)||on(ye,Ce)}function qo(t,e){var n=V;V|=2;var r=s_();(ye!==t||Ce!==e)&&(At=null,Qn(t,e));do try{cE();break}catch(i){i_(t,i)}while(1);if(qc(),V=n,Go.current=r,ce!==null)throw Error(w(261));return ye=null,Ce=0,he}function cE(){for(;ce!==null;)o_(ce)}function dE(){for(;ce!==null&&!L0();)o_(ce)}function o_(t){var e=u_(t.alternate,t,He);t.memoizedProps=t.pendingProps,e===null?l_(t):ce=e,ud.current=null}function l_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=iE(n,e),n!==null){n.flags&=32767,ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{he=6,ce=null;return}}else if(n=rE(n,e,He),n!==null){ce=n;return}if(e=e.sibling,e!==null){ce=e;return}ce=e=t}while(e!==null);he===0&&(he=5)}function Un(t,e,n){var r=K,i=it.transition;try{it.transition=null,K=1,hE(t,e,n,r)}finally{it.transition=i,K=r}return null}function hE(t,e,n,r){do Dr();while(dn!==null);if(V&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(K0(t,s),t===ye&&(ce=ye=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,c_(Oo,function(){return Dr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=it.transition,it.transition=null;var o=K;K=1;var l=V;V|=4,ud.current=null,oE(t,n),t_(n,t),Aw(_u),bo=!!gu,_u=gu=null,t.current=n,lE(n),F0(),V=l,K=o,it.transition=s}else t.current=n;if(ro&&(ro=!1,dn=t,Yo=i),s=t.pendingLanes,s===0&&(yn=null),z0(n.stateNode),Ve(t,ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qo)throw Qo=!1,t=Fu,Fu=null,t;return Yo&1&&t.tag!==0&&Dr(),s=t.pendingLanes,s&1?t===ju?$i++:($i=0,ju=t):$i=0,An(),null}function Dr(){if(dn!==null){var t=zm(Yo),e=it.transition,n=K;try{if(it.transition=null,K=16>t?16:t,dn===null)var r=!1;else{if(t=dn,dn=null,Yo=0,V&6)throw Error(w(331));var i=V;for(V|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(R=u;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Ui(8,d,s)}var c=d.child;if(c!==null)c.return=d,R=c;else for(;R!==null;){d=R;var h=d.sibling,g=d.return;if(Jg(d),d===u){R=null;break}if(h!==null){h.return=g,R=h;break}R=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ui(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,R=p;break e}R=s.return}}var f=t.current;for(R=f;R!==null;){o=R;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,R=m;else e:for(o=f;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ml(9,l)}}catch(I){se(l,l.return,I)}if(l===o){R=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,R=y;break e}R=l.return}}if(V=i,An(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Tl,t)}catch{}r=!0}return r}finally{K=n,it.transition=e}}return!1}function jf(t,e,n){e=Gr(n,e),e=$g(t,e,1),t=vn(t,e,1),e=be(),t!==null&&(Is(t,1,e),Ve(t,e))}function se(t,e,n){if(t.tag===3)jf(t,t,n);else for(;e!==null;){if(e.tag===3){jf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){t=Gr(n,t),t=Wg(e,t,1),e=vn(e,t,1),t=be(),e!==null&&(Is(e,1,t),Ve(e,t));break}}e=e.return}}function fE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=be(),t.pingedLanes|=t.suspendedLanes&n,ye===t&&(Ce&n)===n&&(he===4||he===3&&(Ce&130023424)===Ce&&500>ae()-dd?Qn(t,0):cd|=n),Ve(t,e)}function a_(t,e){e===0&&(t.mode&1?(e=Gs,Gs<<=1,!(Gs&130023424)&&(Gs=4194304)):e=1);var n=be();t=Vt(t,e),t!==null&&(Is(t,e,n),Ve(t,n))}function pE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),a_(t,n)}function mE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),a_(t,n)}var u_;u_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||We.current)Ue=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ue=!1,nE(t,e,n);Ue=!!(t.flags&131072)}else Ue=!1,ee&&e.flags&1048576&&hg(e,zo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;vo(t,e),t=e.pendingProps;var i=Br(e,Pe.current);Mr(e,n),i=id(null,e,r,t,i,n);var s=sd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Be(r)?(s=!0,jo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zc(e),i.updater=Al,e.stateNode=i,i._reactInternals=e,Tu(e,r,t,n),e=xu(null,e,r,!0,s,n)):(e.tag=0,ee&&s&&Kc(e),Ae(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(vo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_E(r),t=at(r,t),i){case 0:e=Ru(null,e,r,t,n);break e;case 1:e=Rf(null,e,r,t,n);break e;case 11:e=Tf(null,e,r,t,n);break e;case 14:e=Nf(null,e,r,at(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Ru(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Rf(t,e,r,i,n);case 3:e:{if(Kg(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,gg(t,e),Bo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Gr(Error(w(423)),e),e=xf(t,e,r,n,i);break e}else if(r!==i){i=Gr(Error(w(424)),e),e=xf(t,e,r,n,i);break e}else for(Ge=_n(e.stateNode.containerInfo.firstChild),Qe=e,ee=!0,ct=null,n=wg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vr(),r===i){e=Ht(t,e,n);break e}Ae(t,e,r,n)}e=e.child}return e;case 5:return Eg(e),t===null&&Cu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,vu(r,i)?o=null:s!==null&&vu(r,s)&&(e.flags|=32),Hg(t,e),Ae(t,e,o,n),e.child;case 6:return t===null&&Cu(e),null;case 13:return Gg(t,e,n);case 4:return ed(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Hr(e,null,r,n):Ae(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Tf(t,e,r,i,n);case 7:return Ae(t,e,e.pendingProps,n),e.child;case 8:return Ae(t,e,e.pendingProps.children,n),e.child;case 12:return Ae(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X($o,r._currentValue),r._currentValue=o,s!==null)if(_t(s.value,o)){if(s.children===i.children&&!We.current){e=Ht(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=zt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Iu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Iu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ae(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Mr(e,n),i=st(i),r=r(i),e.flags|=1,Ae(t,e,r,n),e.child;case 14:return r=e.type,i=at(r,e.pendingProps),i=at(r.type,i),Nf(t,e,r,i,n);case 15:return Bg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),vo(t,e),e.tag=1,Be(r)?(t=!0,jo(e)):t=!1,Mr(e,n),vg(e,r,i),Tu(e,r,i,n),xu(null,e,r,!0,t,n);case 19:return Qg(t,e,n);case 22:return Vg(t,e,n)}throw Error(w(156,e.tag))};function c_(t,e){return Lm(t,e)}function gE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(t,e,n,r){return new gE(t,e,n,r)}function md(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _E(t){if(typeof t=="function")return md(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mc)return 11;if(t===Dc)return 14}return 2}function En(t,e){var n=t.alternate;return n===null?(n=nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Eo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")md(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vr:return Yn(n.children,i,s,e);case bc:o=8,i|=8;break;case qa:return t=nt(12,n,e,i|2),t.elementType=qa,t.lanes=s,t;case Xa:return t=nt(13,n,e,i),t.elementType=Xa,t.lanes=s,t;case Ja:return t=nt(19,n,e,i),t.elementType=Ja,t.lanes=s,t;case ym:return Ll(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _m:o=10;break e;case vm:o=9;break e;case Mc:o=11;break e;case Dc:o=14;break e;case nn:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Yn(t,e,n,r){return t=nt(7,t,r,e),t.lanes=n,t}function Ll(t,e,n,r){return t=nt(22,t,r,e),t.elementType=ym,t.lanes=n,t.stateNode={isHidden:!1},t}function Oa(t,e,n){return t=nt(6,t,null,e),t.lanes=n,t}function Aa(t,e,n){return e=nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ha(0),this.expirationTimes=ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ha(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gd(t,e,n,r,i,s,o,l,a){return t=new vE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zc(s),t}function yE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_r,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function d_(t){if(!t)return Nn;t=t._reactInternals;e:{if(dr(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Be(n))return cg(t,n,e)}return e}function h_(t,e,n,r,i,s,o,l,a){return t=gd(n,r,!0,t,i,s,o,l,a),t.context=d_(null),n=t.current,r=be(),i=wn(n),s=zt(r,i),s.callback=e??null,vn(n,s,i),t.current.lanes=i,Is(t,i,r),Ve(t,r),t}function Fl(t,e,n,r){var i=e.current,s=be(),o=wn(i);return n=d_(n),e.context===null?e.context=n:e.pendingContext=n,e=zt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vn(i,e,o),t!==null&&(mt(t,i,o,s),mo(t,i,o)),o}function Xo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Uf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _d(t,e){Uf(t,e),(t=t.alternate)&&Uf(t,e)}function wE(){return null}var f_=typeof reportError=="function"?reportError:function(t){console.error(t)};function vd(t){this._internalRoot=t}jl.prototype.render=vd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));Fl(t,e,null,null)};jl.prototype.unmount=vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;nr(function(){Fl(null,t,null,null)}),e[Bt]=null}};function jl(t){this._internalRoot=t}jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sn.length&&e!==0&&e<sn[n].priority;n++);sn.splice(n,0,t),n===0&&Hm(t)}};function yd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zf(){}function EE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Xo(o);s.call(u)}}var o=h_(e,r,t,0,null,!1,!1,"",zf);return t._reactRootContainer=o,t[Bt]=o.current,rs(t.nodeType===8?t.parentNode:t),nr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Xo(a);l.call(u)}}var a=gd(t,0,!1,null,null,!1,!1,"",zf);return t._reactRootContainer=a,t[Bt]=a.current,rs(t.nodeType===8?t.parentNode:t),nr(function(){Fl(e,a,n,r)}),a}function zl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Xo(o);l.call(a)}}Fl(e,o,t,i)}else o=EE(n,e,t,i,r);return Xo(o)}$m=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Pi(e.pendingLanes);n!==0&&(jc(e,n|1),Ve(e,ae()),!(V&6)&&(Qr=ae()+500,An()))}break;case 13:nr(function(){var r=Vt(t,1);if(r!==null){var i=be();mt(r,t,1,i)}}),_d(t,1)}};Uc=function(t){if(t.tag===13){var e=Vt(t,134217728);if(e!==null){var n=be();mt(e,t,134217728,n)}_d(t,134217728)}};Wm=function(t){if(t.tag===13){var e=wn(t),n=Vt(t,e);if(n!==null){var r=be();mt(n,t,e,r)}_d(t,e)}};Bm=function(){return K};Vm=function(t,e){var n=K;try{return K=t,e()}finally{K=n}};au=function(t,e,n){switch(e){case"input":if(tu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Pl(r);if(!i)throw Error(w(90));Em(r),tu(r,i)}}}break;case"textarea":Cm(t,n);break;case"select":e=n.value,e!=null&&Pr(t,!!n.multiple,e,!1)}};Pm=hd;Om=nr;var SE={usingClientEntryPoint:!1,Events:[Ts,Sr,Pl,Rm,xm,hd]},Ci={findFiberByHostInstance:Bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},CE={bundleType:Ci.bundleType,version:Ci.version,rendererPackageName:Ci.rendererPackageName,rendererConfig:Ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Mm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ci.findFiberByHostInstance||wE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{Tl=io.inject(CE),Tt=io}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SE;qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yd(e))throw Error(w(200));return yE(t,e,null,n)};qe.createRoot=function(t,e){if(!yd(t))throw Error(w(299));var n=!1,r="",i=f_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gd(t,1,!1,null,null,n,!1,r,i),t[Bt]=e.current,rs(t.nodeType===8?t.parentNode:t),new vd(e)};qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Mm(e),t=t===null?null:t.stateNode,t};qe.flushSync=function(t){return nr(t)};qe.hydrate=function(t,e,n){if(!Ul(e))throw Error(w(200));return zl(null,t,e,!0,n)};qe.hydrateRoot=function(t,e,n){if(!yd(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=f_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=h_(e,null,t,1,n??null,i,!1,s,o),t[Bt]=e.current,rs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jl(e)};qe.render=function(t,e,n){if(!Ul(e))throw Error(w(200));return zl(null,t,e,!1,n)};qe.unmountComponentAtNode=function(t){if(!Ul(t))throw Error(w(40));return t._reactRootContainer?(nr(function(){zl(null,null,t,!1,function(){t._reactRootContainer=null,t[Bt]=null})}),!0):!1};qe.unstable_batchedUpdates=hd;qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ul(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return zl(t,e,n,!1,r)};qe.version="18.2.0-next-9e3b772b8-20220608";function p_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p_)}catch(t){console.error(t)}}p_(),hm.exports=qe;var m_=hm.exports;const IE=Il(m_);var $f=m_;Qa.createRoot=$f.createRoot,Qa.hydrateRoot=$f.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw li(e)},li=function(t){return new Error("Firebase Database ("+g_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},wd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(__(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new TE;const h=s<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const v_=function(t){const e=__(t);return wd.encodeByteArray(e,!0)},Jo=function(t){return v_(t).replace(/\./g,"")},Zo=function(t){try{return wd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(t){return y_(void 0,t)}function y_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!RE(n)||(t[n]=y_(t[n],e[n]));return t}function RE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=()=>xE().__FIREBASE_DEFAULTS__,OE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zo(t[1]);return e&&JSON.parse(e)},Ed=()=>{try{return PE()||OE()||AE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},w_=t=>{var e,n;return(n=(e=Ed())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bE=t=>{const e=w_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},E_=()=>{var t;return(t=Ed())===null||t===void 0?void 0:t.config},S_=t=>{var e;return(e=Ed())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Jo(JSON.stringify(n)),Jo(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function DE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function C_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LE(){const t=Oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function I_(){return g_.NODE_ADMIN===!0}function FE(){try{return typeof indexedDB=="object"}catch{return!1}}function jE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=UE,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new bn(i,l,r)}}function zE(t,e){return t.replace($E,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $E=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=hs(Zo(s[0])||""),n=hs(Zo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},WE=function(t){const e=k_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},BE=function(t){const e=k_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Yr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function $u(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function el(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function tl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Wf(s)&&Wf(o)){if(!tl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function HE(t,e){const n=new KE(t,e);return n.subscribe.bind(n)}class KE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ba),i.error===void 0&&(i.error=ba),i.complete===void 0&&(i.complete=ba);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ba(){}function $l(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}class rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Rs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XE(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qE(t){return t===zn?void 0:t}function XE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new YE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const ZE={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},eS=G.INFO,tS={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},nS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cd{constructor(e){this.name=e,this._logLevel=eS,this._logHandler=nS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const rS=(t,e)=>e.some(n=>t instanceof n);let Bf,Vf;function iS(){return Bf||(Bf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sS(){return Vf||(Vf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const T_=new WeakMap,Wu=new WeakMap,N_=new WeakMap,Ma=new WeakMap,Id=new WeakMap;function oS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Sn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&T_.set(n,t)}).catch(()=>{}),Id.set(e,t),e}function lS(t){if(Wu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Wu.set(t,e)}let Bu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||N_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function aS(t){Bu=t(Bu)}function uS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Da(this),e,...n);return N_.set(r,e.sort?e.sort():[e]),Sn(r)}:sS().includes(t)?function(...e){return t.apply(Da(this),e),Sn(T_.get(this))}:function(...e){return Sn(t.apply(Da(this),e))}}function cS(t){return typeof t=="function"?uS(t):(t instanceof IDBTransaction&&lS(t),rS(t,iS())?new Proxy(t,Bu):t)}function Sn(t){if(t instanceof IDBRequest)return oS(t);if(Ma.has(t))return Ma.get(t);const e=cS(t);return e!==t&&(Ma.set(t,e),Id.set(e,t)),e}const Da=t=>Id.get(t);function dS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Sn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Sn(o.result),a.oldVersion,a.newVersion,Sn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const hS=["get","getKey","getAll","getAllKeys","count"],fS=["put","add","delete","clear"],La=new Map;function Hf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(La.get(e))return La.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hS.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return La.set(e,s),s}aS(t=>({...t,get:(e,n,r)=>Hf(e,n)||t.get(e,n,r),has:(e,n)=>!!Hf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vu="@firebase/app",Kf="0.9.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new Cd("@firebase/app"),gS="@firebase/app-compat",_S="@firebase/analytics-compat",vS="@firebase/analytics",yS="@firebase/app-check-compat",wS="@firebase/app-check",ES="@firebase/auth",SS="@firebase/auth-compat",CS="@firebase/database",IS="@firebase/database-compat",kS="@firebase/functions",TS="@firebase/functions-compat",NS="@firebase/installations",RS="@firebase/installations-compat",xS="@firebase/messaging",PS="@firebase/messaging-compat",OS="@firebase/performance",AS="@firebase/performance-compat",bS="@firebase/remote-config",MS="@firebase/remote-config-compat",DS="@firebase/storage",LS="@firebase/storage-compat",FS="@firebase/firestore",jS="@firebase/firestore-compat",US="firebase",zS="10.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="[DEFAULT]",$S={[Vu]:"fire-core",[gS]:"fire-core-compat",[vS]:"fire-analytics",[_S]:"fire-analytics-compat",[wS]:"fire-app-check",[yS]:"fire-app-check-compat",[ES]:"fire-auth",[SS]:"fire-auth-compat",[CS]:"fire-rtdb",[IS]:"fire-rtdb-compat",[kS]:"fire-fn",[TS]:"fire-fn-compat",[NS]:"fire-iid",[RS]:"fire-iid-compat",[xS]:"fire-fcm",[PS]:"fire-fcm-compat",[OS]:"fire-perf",[AS]:"fire-perf-compat",[bS]:"fire-rc",[MS]:"fire-rc-compat",[DS]:"fire-gcs",[LS]:"fire-gcs-compat",[FS]:"fire-fst",[jS]:"fire-fst-compat","fire-js":"fire-js",[US]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new Map,Ku=new Map;function WS(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qr(t){const e=t.name;if(Ku.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;Ku.set(e,t);for(const n of nl.values())WS(n,t);return!0}function kd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cn=new xs("app","Firebase",BS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=zS;function R_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cn.create("bad-app-name",{appName:String(i)});if(n||(n=E_()),!n)throw Cn.create("no-options");const s=nl.get(i);if(s){if(tl(n,s.options)&&tl(r,s.config))return s;throw Cn.create("duplicate-app",{appName:i})}const o=new JE(i);for(const a of Ku.values())o.addComponent(a);const l=new VS(n,r,o);return nl.set(i,l),l}function x_(t=Hu){const e=nl.get(t);if(!e&&t===Hu&&E_())return R_();if(!e)throw Cn.create("no-app",{appName:t});return e}function In(t,e,n){var r;let i=(r=$S[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(l.join(" "));return}qr(new rr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS="firebase-heartbeat-database",KS=1,fs="firebase-heartbeat-store";let Fa=null;function P_(){return Fa||(Fa=dS(HS,KS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fs)}}}).catch(t=>{throw Cn.create("idb-open",{originalErrorMessage:t.message})})),Fa}async function GS(t){try{return await(await P_()).transaction(fs).objectStore(fs).get(O_(t))}catch(e){if(e instanceof bn)ir.warn(e.message);else{const n=Cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(n.message)}}}async function Gf(t,e){try{const r=(await P_()).transaction(fs,"readwrite");await r.objectStore(fs).put(e,O_(t)),await r.done}catch(n){if(n instanceof bn)ir.warn(n.message);else{const r=Cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(r.message)}}}function O_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=1024,YS=30*24*60*60*1e3;class qS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=YS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qf(),{heartbeatsToSend:n,unsentEntries:r}=XS(this._heartbeatsCache.heartbeats),i=Jo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Qf(){return new Date().toISOString().substring(0,10)}function XS(t,e=QS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Yf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class JS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return FE()?jE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await GS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yf(t){return Jo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t){qr(new rr("platform-logger",e=>new pS(e),"PRIVATE")),qr(new rr("heartbeat",e=>new qS(e),"PRIVATE")),In(Vu,Kf,t),In(Vu,Kf,"esm2017"),In("fire-js","")}ZS("");var eC="firebase",tC="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(eC,tC,"app");const nC={apiKey:"AIzaSyBwcsR1Vuq1sDH8urLMIAKrpAhhYC3FF5w",authDomain:"house-inventory-manager.firebaseapp.com",projectId:"house-inventory-manager",storageBucket:"house-inventory-manager.appspot.com",messagingSenderId:"788672896360",appId:"1:788672896360:web:6918524970625960c70add",measurementId:"G-0YZ7KB4PM7",databaseURL:"https://house-inventory-manager-default-rtdb.asia-southeast1.firebasedatabase.app"},rC=R_(nC);const Bl=b.createContext({user:void 0}),qf="@firebase/database",Xf="1.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let A_="";function iC(t){A_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:hs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ot(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sC(e)}}catch{}return new oC},Kn=b_("localStorage"),Gu=b_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Cd("@firebase/database"),lC=function(){let t=1;return function(){return t++}}(),M_=function(t){const e=QE(t),n=new VE;n.update(e);const r=n.digest();return wd.encodeByteArray(r)},Ps=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ps.apply(null,r):typeof r=="object"?e+=ve(r):e+=r,e+=" "}return e};let qn=null,Jf=!0;const aC=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Lr.logLevel=G.VERBOSE,qn=Lr.log.bind(Lr),e&&Gu.set("logging_enabled",!0)):typeof t=="function"?qn=t:(qn=null,Gu.remove("logging_enabled"))},Se=function(...t){if(Jf===!0&&(Jf=!1,qn===null&&Gu.get("logging_enabled")===!0&&aC(!0)),qn){const e=Ps.apply(null,t);qn(e)}},Os=function(t){return function(...e){Se(t,...e)}},Qu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ps(...t);Lr.error(e)},Kt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ps(...t)}`;throw Lr.error(e),new Error(e)},Me=function(...t){const e="FIREBASE WARNING: "+Ps(...t);Lr.warn(e)},uC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Me("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Td=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},cC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Xr="[MIN_NAME]",sr="[MAX_NAME]",hr=function(t,e){if(t===e)return 0;if(t===Xr||e===sr)return-1;if(e===Xr||t===sr)return 1;{const n=Zf(t),r=Zf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},dC=function(t,e){return t===e?0:t<e?-1:1},Ii=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},Nd=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ve(e[r]),n+=":",n+=Nd(t[e[r]]);return n+="}",n},D_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ke(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const L_=function(t){S(!Td(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},hC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function pC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const mC=new RegExp("^-?(0*)\\d{1,10}$"),gC=-2147483648,_C=2147483647,Zf=function(t){if(mC.test(t)){const e=Number(t);if(e>=gC&&e<=_C)return e}return null},ci=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Me("Exception was thrown by user callback.",n),e},Math.floor(0))}},vC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Me(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Me(e)}}class Fr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Fr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="5",F_="v",j_="s",U_="r",z_="f",$_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,W_="ls",B_="p",Yu="ac",V_="websocket",H_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function EC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function G_(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===V_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===H_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);EC(t)&&(n.ns=t.namespace);const i=[];return ke(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(){this.counters_={}}incrementCounter(e,n=1){Ot(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return NE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja={},Ua={};function xd(t){const e=t.toString();return ja[e]||(ja[e]=new SC),ja[e]}function CC(t,e){const n=t.toString();return Ua[n]||(Ua[n]=e()),Ua[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ci(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="start",kC="close",TC="pLPCommand",NC="pRTLPCB",Q_="id",Y_="pw",q_="ser",RC="cb",xC="seg",PC="ts",OC="d",AC="dframe",X_=1870,J_=30,bC=X_-J_,MC=25e3,DC=3e4;class xr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Os(e),this.stats_=xd(n),this.urlFn=a=>(this.appCheckToken&&(a[Yu]=this.appCheckToken),G_(n,H_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new IC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(DC)),cC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pd((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ep)this.id=l,this.password=a;else if(o===kC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[ep]="t",r[q_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[RC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[F_]=Rd,this.transportSessionId&&(r[j_]=this.transportSessionId),this.lastSessionId&&(r[W_]=this.lastSessionId),this.applicationId&&(r[B_]=this.applicationId),this.appCheckToken&&(r[Yu]=this.appCheckToken),typeof location<"u"&&location.hostname&&$_.test(location.hostname)&&(r[U_]=z_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xr.forceAllow_=!0}static forceDisallow(){xr.forceDisallow_=!0}static isAvailable(){return xr.forceAllow_?!0:!xr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!hC()&&!fC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=v_(n),i=D_(r,bC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[AC]="t",r[Q_]=e,r[Y_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lC(),window[TC+this.uniqueCallbackIdentifier]=e,window[NC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Se("frame writing exception"),l.stack&&Se(l.stack),Se(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Q_]=this.myID,e[Y_]=this.myPW,e[q_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+J_+r.length<=X_;){const o=this.pendingSegs.shift();r=r+"&"+xC+i+"="+o.seg+"&"+PC+i+"="+o.ts+"&"+OC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(MC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=16384,FC=45e3;let rl=null;typeof MozWebSocket<"u"?rl=MozWebSocket:typeof WebSocket<"u"&&(rl=WebSocket);class dt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Os(this.connId),this.stats_=xd(n),this.connURL=dt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[F_]=Rd,typeof location<"u"&&location.hostname&&$_.test(location.hostname)&&(o[U_]=z_),n&&(o[j_]=n),r&&(o[W_]=r),i&&(o[Yu]=i),s&&(o[B_]=s),G_(e,V_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kn.set("previous_websocket_failure",!0);try{let r;I_(),this.mySock=new rl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&rl!==null&&!dt.forceDisallow_}static previouslyFailed(){return Kn.isInMemoryStorage||Kn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=hs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=D_(n,LC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(FC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dt.responsesRequiredToBeHealthy=2;dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[xr,dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dt&&dt.isAvailable();let r=n&&!dt.previouslyFailed();if(e.webSocketOnly&&(n||Me("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[dt];else{const i=this.transports_=[];for(const s of ps.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ps.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ps.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=6e4,UC=5e3,zC=10*1024,$C=100*1024,za="t",tp="d",WC="s",np="r",BC="e",rp="o",ip="a",sp="n",op="p",VC="h";class HC{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Os("c:"+this.id+":"),this.transportManager_=new ps(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Wi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$C?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(za in e){const n=e[za];n===ip?this.upgradeIfSecondaryHealthy_():n===np?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===rp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ii("t",e),r=Ii("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:op,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ip,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:sp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ii("t",e),r=Ii("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ii(za,e);if(tp in e){const r=e[tp];if(n===VC){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===sp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===WC?this.onConnectionShutdown_(r):n===np?this.onReset_(r):n===BC?Qu("Server Error: "+r):n===rp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Rd!==r&&Me("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Wi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(jC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(UC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:op,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends ev{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new il}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=32,ap=768;class Q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new Q("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Rn(t){return t.pieces_.length-t.pieceNum_}function q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Q(t.pieces_,e)}function Od(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function KC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ms(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function tv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Q(e,0)}function oe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Q(n,0)}function $(t){return t.pieceNum_>=t.pieces_.length}function ze(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return ze(q(t),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function GC(t,e){const n=ms(t,0),r=ms(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=hr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Ad(t,e){if(Rn(t)!==Rn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function rt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Rn(t)>Rn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class QC{constructor(e,n){this.errorPrefix_=n,this.parts_=ms(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Wl(this.parts_[r]);nv(this)}}function YC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Wl(e),nv(t)}function qC(t){const e=t.parts_.pop();t.byteLength_-=Wl(e),t.parts_.length>0&&(t.byteLength_-=1)}function nv(t){if(t.byteLength_>ap)throw new Error(t.errorPrefix_+"has a key path longer than "+ap+" bytes ("+t.byteLength_+").");if(t.parts_.length>lp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+lp+") or object contains a cycle "+$n(t))}function $n(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd extends ev{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new bd}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=1e3,XC=60*5*1e3,up=30*1e3,JC=1.3,ZC=3e4,eI="server_kill",cp=3;class $t extends Z_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=$t.nextPersistentConnectionId_++,this.log_=Os("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ki,this.maxReconnectDelay_=XC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!I_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&il.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ve(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Rs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;$t.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ot(e,"w")){const r=Yr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Me(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||BE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=up)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=WE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Qu("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ZC&&(this.reconnectDelay_=ki),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*JC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+$t.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new HC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Me(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(eI)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Me(c),a())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$u(this.interruptReasons_)&&(this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Nd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=cp&&(this.reconnectDelay_=up,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=cp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+A_.replace(/\./g,"-")]=1,Sd()?e["framework.cordova"]=1:C_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=il.getInstance().currentlyOnline();return $u(this.interruptReasons_)&&e}}$t.nextPersistentConnectionId_=0;$t.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(Xr,e),i=new z(Xr,n);return this.compare(r,i)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so;class rv extends Vl{static get __EMPTY_NODE(){return so}static set __EMPTY_NODE(e){so=e}compare(e,n){return hr(e.name,n.name)}isDefinedOn(e){throw li("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(sr,so)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,so)}toString(){return".key"}}const jr=new rv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ge.RED,this.left=i??$e.EMPTY_NODE,this.right=s??$e.EMPTY_NODE}copy(e,n,r,i,s){return new ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return $e.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class tI{copy(e,n,r,i,s){return this}insert(e,n,r){return new ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $e{constructor(e,n=$e.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $e(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new $e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new oo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new oo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new oo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new oo(this.root_,null,this.comparator_,!0,e)}}$e.EMPTY_NODE=new tI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t,e){return hr(t.name,e.name)}function Md(t,e){return hr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qu;function rI(t){qu=t}const iv=function(t){return typeof t=="number"?"number:"+L_(t):"string:"+t},sv=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ot(e,".sv"),"Priority must be a string or number.")}else S(t===qu||t.isEmpty(),"priority of unexpected type.");S(t===qu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dp;class pe{constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sv(this.priorityNode_)}static set __childrenNodeConstructor(e){dp=e}static get __childrenNodeConstructor(){return dp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $(e)?this:U(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||Rn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+iv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=L_(this.value_):e+=this.value_,this.lazyHash_=M_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),s=pe.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ov,lv;function iI(t){ov=t}function sI(t){lv=t}class oI extends Vl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?hr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(sr,new pe("[PRIORITY-POST]",lv))}makePost(e,n){const r=ov(e);return new z(n,new pe("[PRIORITY-POST]",r))}toString(){return".priority"}}const le=new oI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=Math.log(2);class aI{constructor(e){const n=s=>parseInt(Math.log(s)/lI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const sl=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new ge(h,c.node,ge.BLACK,null,null);{const g=parseInt(d/2,10)+a,_=i(a,g),v=i(g+1,u);return c=t[g],h=n?n(c):c,new ge(h,c.node,ge.BLACK,_,v)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,v){const x=c-_,p=c;c-=_;const f=i(x+1,p),m=t[x],y=n?n(m):m;g(new ge(y,m.node,v,null,f))},g=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),x=Math.pow(2,a.count-(_+1));v?h(x,ge.BLACK):(h(x,ge.BLACK),h(x,ge.RED))}return d},o=new aI(t.length),l=s(o);return new $e(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $a;const mr={};class Ft{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(mr&&le,"ChildrenNode.ts has not been loaded"),$a=$a||new Ft({".priority":mr},{".priority":le}),$a}get(e){const n=Yr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $e?n:null}hasIndex(e){return Ot(this.indexSet_,e.toString())}addIndex(e,n){S(e!==jr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=sl(r,e.getCompare()):l=mr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Ft(d,u)}addToIndexes(e,n){const r=el(this.indexes_,(i,s)=>{const o=Yr(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===mr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(z.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),sl(l,o.getCompare())}else return mr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new z(e.name,l))),a.insert(e,e.node)}});return new Ft(r,this.indexSet_)}removeFromIndexes(e,n){const r=el(this.indexes_,i=>{if(i===mr)return i;{const s=n.get(e.name);return s?i.remove(new z(e.name,s)):i}});return new Ft(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&sv(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ti||(Ti=new A(new $e(Md),null,Ft.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ti}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ti:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ti:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{S(U(e)!==".priority"||Rn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(le,(o,l)=>{n[o]=l.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+iv(this.getPriority().val())+":"),this.forEachChild(le,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":M_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===As?-1:0}withIndex(e){if(e===jr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===jr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(le),i=n.getIterator(le);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===jr?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class uI extends A{constructor(){super(new $e(Md),A.EMPTY_NODE,Ft.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const As=new uI;Object.defineProperties(z,{MIN:{value:new z(Xr,A.EMPTY_NODE)},MAX:{value:new z(sr,As)}});rv.__EMPTY_NODE=A.EMPTY_NODE;pe.__childrenNodeConstructor=A;rI(As);sI(As);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=!0;function _e(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,_e(e))}if(!(t instanceof Array)&&cI){const n=[];let r=!1;if(ke(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=_e(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new z(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=sl(n,nI,o=>o.name,Md);if(r){const o=sl(n,le.getCompare());return new A(s,_e(e),new Ft({".priority":o},{".priority":le}))}else return new A(s,_e(e),Ft.Default)}else{let n=A.EMPTY_NODE;return ke(t,(r,i)=>{if(Ot(t,r)&&r.substring(0,1)!=="."){const s=_e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(_e(e))}}iI(_e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI extends Vl{constructor(e){super(),this.indexPath_=e,S(!$(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?hr(e.name,n.name):s}makePost(e,n){const r=_e(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,As);return new z(sr,e)}toString(){return ms(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI extends Vl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?hr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=_e(e);return new z(n,r)}toString(){return".value"}}const fI=new hI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(t){return{type:"value",snapshotNode:t}}function Jr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function _s(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function pI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(gs(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Jr(n,r)):o.trackChildChange(_s(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(le,(i,s)=>{n.hasChild(i)||r.trackChildChange(gs(i,s))}),n.isLeafNode()||n.forEachChild(le,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(_s(i,s,o))}else r.trackChildChange(Jr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.indexedFilter_=new Dd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vs.getStartPost_(e),this.endPost_=vs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new z(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(le,(o,l)=>{s.matches(new z(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new vs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new z(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new z(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(_s(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(gs(n,c));const v=l.updateImmediateChild(n,A.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Jr(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(gs(u.name,u.node)),s.trackChildChange(Jr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Xr}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:sr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new Ld;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function gI(t){return t.loadsAllData()?new Dd(t.getIndex()):t.hasLimit()?new mI(t):new vs(t)}function hp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===le?n="$priority":t.index_===fI?n="$value":t.index_===jr?n="$key":(S(t.index_ instanceof dI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ve(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ve(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ve(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function fp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==le&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends Z_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Os("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ol.getListenId_(e,r),l={};this.listens_[o]=l;const a=hp(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Yr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=ol.getListenId_(e,n);delete this.listens_[r]}get(e){const n=hp(e._queryParams),r=e._path.toString(),i=new Rs;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ai(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=hs(l.responseText)}catch{Me("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Me("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(){return{value:null,children:new Map}}function uv(t,e,n){if($(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,ll());const i=t.children.get(r);e=q(e),uv(i,e,n)}}function Xu(t,e,n){t.value!==null?n(e,t.value):vI(t,(r,i)=>{const s=new Q(e.toString()+"/"+r);Xu(i,s,n)})}function vI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ke(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=10*1e3,wI=30*1e3,EI=5*60*1e3;class SI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new yI(e);const r=pp+(wI-pp)*Math.random();Wi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ke(e,(i,s)=>{s>0&&Ot(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Wi(this.reportStats_.bind(this),Math.floor(Math.random()*2*EI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ht||(ht={}));function Fd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function jd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ud(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ht.ACK_USER_WRITE,this.source=Fd()}operationForChild(e){if($(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Q(e));return new al(H(),n,this.revert)}}else return S(U(this.path)===e,"operationForChild called for unrelated child."),new al(q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){this.source=e,this.path=n,this.type=ht.LISTEN_COMPLETE}operationForChild(e){return $(this.path)?new ys(this.source,H()):new ys(this.source,q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ht.OVERWRITE}operationForChild(e){return $(this.path)?new or(this.source,H(),this.snap.getImmediateChild(e)):new or(this.source,q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ht.MERGE}operationForChild(e){if($(this.path)){const n=this.children.subtree(new Q(e));return n.isEmpty()?null:n.value?new or(this.source,H(),n.value):new Zr(this.source,H(),n)}else return S(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zr(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function II(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(pI(o.childName,o.snapshotNode))}),Ni(t,i,"child_removed",e,r,n),Ni(t,i,"child_added",e,r,n),Ni(t,i,"child_moved",s,r,n),Ni(t,i,"child_changed",e,r,n),Ni(t,i,"value",e,r,n),i}function Ni(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>TI(t,l,a)),o.forEach(l=>{const a=kI(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function kI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function TI(t,e,n){if(e.childName==null||n.childName==null)throw li("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e){return{eventCache:t,serverCache:e}}function Bi(t,e,n,r){return Hl(new lr(e,n,r),t.serverCache)}function cv(t,e,n,r){return Hl(t.eventCache,new lr(e,n,r))}function Ju(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ar(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wa;const NI=()=>(Wa||(Wa=new $e(dC)),Wa);class Y{constructor(e,n=NI()){this.value=e,this.children=n}static fromObject(e){let n=new Y(null);return ke(e,(r,i)=>{n=n.set(new Q(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if($(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(q(e),n);return s!=null?{path:oe(new Q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if($(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(q(e)):new Y(null)}}set(e,n){if($(e))return new Y(n,this.children);{const r=U(e),s=(this.children.get(r)||new Y(null)).set(q(e),n),o=this.children.insert(r,s);return new Y(this.value,o)}}remove(e){if($(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Y(null):new Y(this.value,s)}else return this}}get(e){if($(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(q(e)):null}}setTree(e,n){if($(e))return n;{const r=U(e),s=(this.children.get(r)||new Y(null)).setTree(q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Y(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(oe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if($(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(q(e),oe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if($(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(q(e),oe(n,i),r):new Y(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(oe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.writeTree_=e}static empty(){return new gt(new Y(null))}}function Vi(t,e,n){if($(e))return new gt(new Y(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ze(i,e);return s=s.updateChild(o,n),new gt(t.writeTree_.set(i,s))}else{const i=new Y(n),s=t.writeTree_.setTree(e,i);return new gt(s)}}}function Zu(t,e,n){let r=t;return ke(n,(i,s)=>{r=Vi(r,oe(e,i),s)}),r}function mp(t,e){if($(e))return gt.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new gt(n)}}function ec(t,e){return fr(t,e)!=null}function fr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ze(n.path,e)):null}function gp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(le,(r,i)=>{e.push(new z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new z(r,i.value))}),e}function kn(t,e){if($(e))return t;{const n=fr(t,e);return n!=null?new gt(new Y(n)):new gt(t.writeTree_.subtree(e))}}function tc(t){return t.writeTree_.isEmpty()}function ei(t,e){return dv(H(),t.writeTree_,e)}function dv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=dv(oe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(oe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t,e){return mv(e,t)}function RI(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Vi(t.visibleWrites,e,n)),t.lastWriteId=r}function xI(t,e,n,r){S(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Zu(t.visibleWrites,e,n),t.lastWriteId=r}function PI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function OI(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&AI(l,r.path)?i=!1:rt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return bI(t),!0;if(r.snap)t.visibleWrites=mp(t.visibleWrites,r.path);else{const l=r.children;ke(l,a=>{t.visibleWrites=mp(t.visibleWrites,oe(r.path,a))})}return!0}else return!1}function AI(t,e){if(t.snap)return rt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&rt(oe(t.path,n),e))return!0;return!1}function bI(t){t.visibleWrites=hv(t.allWrites,MI,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function MI(t){return t.visible}function hv(t,e,n){let r=gt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)rt(n,o)?(l=ze(n,o),r=Vi(r,l,s.snap)):rt(o,n)&&(l=ze(o,n),r=Vi(r,H(),s.snap.getChild(l)));else if(s.children){if(rt(n,o))l=ze(n,o),r=Zu(r,l,s.children);else if(rt(o,n))if(l=ze(o,n),$(l))r=Zu(r,H(),s.children);else{const a=Yr(s.children,U(l));if(a){const u=a.getChild(q(l));r=Vi(r,H(),u)}}}else throw li("WriteRecord should have .snap or .children")}}return r}function fv(t,e,n,r,i){if(!r&&!i){const s=fr(t.visibleWrites,e);if(s!=null)return s;{const o=kn(t.visibleWrites,e);if(tc(o))return n;if(n==null&&!ec(o,H()))return null;{const l=n||A.EMPTY_NODE;return ei(o,l)}}}else{const s=kn(t.visibleWrites,e);if(!i&&tc(s))return n;if(!i&&n==null&&!ec(s,H()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(rt(u.path,e)||rt(e,u.path))},l=hv(t.allWrites,o,e),a=n||A.EMPTY_NODE;return ei(l,a)}}}function DI(t,e,n){let r=A.EMPTY_NODE;const i=fr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(le,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=kn(t.visibleWrites,e);return n.forEachChild(le,(o,l)=>{const a=ei(kn(s,new Q(o)),l);r=r.updateImmediateChild(o,a)}),gp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=kn(t.visibleWrites,e);return gp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function LI(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=oe(e,n);if(ec(t.visibleWrites,s))return null;{const o=kn(t.visibleWrites,s);return tc(o)?i.getChild(n):ei(o,i.getChild(n))}}function FI(t,e,n,r){const i=oe(e,n),s=fr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=kn(t.visibleWrites,i);return ei(o,r.getNode().getImmediateChild(n))}else return null}function jI(t,e){return fr(t.visibleWrites,e)}function UI(t,e,n,r,i,s,o){let l;const a=kn(t.visibleWrites,e),u=fr(a,H());if(u!=null)l=u;else if(n!=null)l=ei(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function zI(){return{visibleWrites:gt.empty(),allWrites:[],lastWriteId:-1}}function ul(t,e,n,r){return fv(t.writeTree,t.treePath,e,n,r)}function $d(t,e){return DI(t.writeTree,t.treePath,e)}function _p(t,e,n,r){return LI(t.writeTree,t.treePath,e,n,r)}function cl(t,e){return jI(t.writeTree,oe(t.treePath,e))}function $I(t,e,n,r,i,s){return UI(t.writeTree,t.treePath,e,n,r,i,s)}function Wd(t,e,n){return FI(t.writeTree,t.treePath,e,n)}function pv(t,e){return mv(oe(t.treePath,e),t.writeTree)}function mv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,_s(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,gs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Jr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,_s(r,e.snapshotNode,i.oldSnap));else throw li("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const gv=new BI;class Bd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new lr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ar(this.viewCache_),s=$I(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(t){return{filter:t}}function HI(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function KI(t,e,n,r,i){const s=new WI;let o,l;if(n.type===ht.OVERWRITE){const u=n;u.source.fromUser?o=nc(t,e,u.path,u.snap,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!$(u.path),o=dl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ht.MERGE){const u=n;u.source.fromUser?o=QI(t,e,u.path,u.children,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=rc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ht.ACK_USER_WRITE){const u=n;u.revert?o=XI(t,e,u.path,r,i,s):o=YI(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ht.LISTEN_COMPLETE)o=qI(t,e,n.path,r,s);else throw li("Unknown operation type: "+n.type);const a=s.getChanges();return GI(e,o,a),{viewCache:o,changes:a}}function GI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ju(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(av(Ju(e)))}}function _v(t,e,n,r,i,s){const o=e.eventCache;if(cl(r,n)!=null)return e;{let l,a;if($(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ar(e),d=u instanceof A?u:A.EMPTY_NODE,c=$d(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=ul(r,ar(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){S(Rn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=_p(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=q(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=_p(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Wd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Bi(e,l,o.isFullyInitialized()||$(n),t.filter.filtersNodes())}}function dl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if($(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),g,null)}else{const g=U(n);if(!a.isCompleteForPath(n)&&Rn(n)>1)return e;const _=q(n),x=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=d.updatePriority(a.getNode(),x):u=d.updateChild(a.getNode(),g,x,_,gv,null)}const c=cv(e,u,a.isFullyInitialized()||$(n),d.filtersNodes()),h=new Bd(i,c,s);return _v(t,c,n,i,h,l)}function nc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new Bd(i,e,s);if($(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Bi(e,u,!0,t.filter.filtersNodes());else{const c=U(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Bi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=q(n),g=l.getNode().getImmediateChild(c);let _;if($(h))_=r;else{const v=d.getCompleteChild(c);v!=null?Od(h)===".priority"&&v.getChild(tv(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=A.EMPTY_NODE}if(g.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=Bi(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function vp(t,e){return t.eventCache.isCompleteForChild(e)}function QI(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=oe(n,a);vp(e,U(d))&&(l=nc(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=oe(n,a);vp(e,U(d))||(l=nc(t,l,d,u,i,s,o))}),l}function yp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function rc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;$(n)?u=r:u=new Y(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),_=yp(t,g,h);a=dl(t,a,new Q(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const _=e.serverCache.getNode().getImmediateChild(c),v=yp(t,_,h);a=dl(t,a,new Q(c),v,i,s,o,l)}}),a}function YI(t,e,n,r,i,s,o){if(cl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if($(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return dl(t,e,n,a.getNode().getChild(n),i,s,l,o);if($(n)){let u=new Y(null);return a.getNode().forEachChild(jr,(d,c)=>{u=u.set(new Q(d),c)}),rc(t,e,n,u,i,s,l,o)}else return e}else{let u=new Y(null);return r.foreach((d,c)=>{const h=oe(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),rc(t,e,n,u,i,s,l,o)}}function qI(t,e,n,r,i){const s=e.serverCache,o=cv(e,s.getNode(),s.isFullyInitialized()||$(n),s.isFiltered());return _v(t,o,n,r,gv,i)}function XI(t,e,n,r,i,s){let o;if(cl(r,n)!=null)return e;{const l=new Bd(r,e,i),a=e.eventCache.getNode();let u;if($(n)||U(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ul(r,ar(e));else{const c=e.serverCache.getNode();S(c instanceof A,"serverChildren would be complete if leaf node"),d=$d(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=U(n);let c=Wd(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,q(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,A.EMPTY_NODE,q(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ul(r,ar(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||cl(r,H())!=null,Bi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Dd(r.getIndex()),s=gI(r);this.processor_=VI(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),d=new lr(a,o.isFullyInitialized(),i.filtersNodes()),c=new lr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Hl(c,d),this.eventGenerator_=new CI(this.query_)}get query(){return this.query_}}function ZI(t){return t.viewCache_.serverCache.getNode()}function e1(t,e){const n=ar(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!$(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function wp(t){return t.eventRegistrations_.length===0}function t1(t,e){t.eventRegistrations_.push(e)}function Ep(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Sp(t,e,n,r){e.type===ht.MERGE&&e.source.queryId!==null&&(S(ar(t.viewCache_),"We should always have a full cache before handling merges"),S(Ju(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=KI(t.processor_,i,e,n,r);return HI(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,vv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function n1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(le,(s,o)=>{r.push(Jr(s,o))}),n.isFullyInitialized()&&r.push(av(n.getNode())),vv(t,r,n.getNode(),e)}function vv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return II(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hl;class r1{constructor(){this.views=new Map}}function i1(t){S(!hl,"__referenceConstructor has already been defined"),hl=t}function s1(){return S(hl,"Reference.ts has not been loaded"),hl}function o1(t){return t.views.size===0}function Vd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),Sp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Sp(o,e,n,r));return s}}function l1(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=ul(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=$d(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=Hl(new lr(l,a,!1),new lr(r,i,!1));return new JI(e,u)}return o}function a1(t,e,n,r,i,s){const o=l1(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),t1(o,n),n1(o,n)}function u1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=xn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Ep(u,n,r)),wp(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Ep(a,n,r)),wp(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!xn(t)&&s.push(new(s1())(e._repo,e._path)),{removed:s,events:o}}function yv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ur(t,e){let n=null;for(const r of t.views.values())n=n||e1(r,e);return n}function wv(t,e){if(e._queryParams.loadsAllData())return Kl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Ev(t,e){return wv(t,e)!=null}function xn(t){return Kl(t)!=null}function Kl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fl;function c1(t){S(!fl,"__referenceConstructor has already been defined"),fl=t}function d1(){return S(fl,"Reference.ts has not been loaded"),fl}let h1=1;class Cp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=zI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Sv(t,e,n,r,i){return RI(t.pendingWriteTree_,e,n,r,i),i?di(t,new or(Fd(),e,n)):[]}function f1(t,e,n,r){xI(t.pendingWriteTree_,e,n,r);const i=Y.fromObject(n);return di(t,new Zr(Fd(),e,i))}function hn(t,e,n=!1){const r=PI(t.pendingWriteTree_,e);if(OI(t.pendingWriteTree_,e)){let s=new Y(null);return r.snap!=null?s=s.set(H(),!0):ke(r.children,o=>{s=s.set(new Q(o),!0)}),di(t,new al(r.path,s,n))}else return[]}function Gl(t,e,n){return di(t,new or(jd(),e,n))}function p1(t,e,n){const r=Y.fromObject(n);return di(t,new Zr(jd(),e,r))}function m1(t,e){return di(t,new ys(jd(),e))}function g1(t,e,n){const r=Kd(t,n);if(r){const i=Gd(r),s=i.path,o=i.queryId,l=ze(s,e),a=new ys(Ud(o),l);return Qd(t,s,a)}else return[]}function ic(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Ev(o,e))){const a=u1(o,e,n,r);o1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>xn(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=y1(h);for(let _=0;_<g.length;++_){const v=g[_],x=v.query,p=kv(t,v);t.listenProvider_.startListening(Hi(x),pl(t,x),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Hi(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(Ql(h));t.listenProvider_.stopListening(Hi(h),g)}))}w1(t,u)}return l}function _1(t,e,n,r){const i=Kd(t,r);if(i!=null){const s=Gd(i),o=s.path,l=s.queryId,a=ze(o,e),u=new or(Ud(l),a,n);return Qd(t,o,u)}else return[]}function v1(t,e,n,r){const i=Kd(t,r);if(i){const s=Gd(i),o=s.path,l=s.queryId,a=ze(o,e),u=Y.fromObject(n),d=new Zr(Ud(l),a,u);return Qd(t,o,d)}else return[]}function Ip(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=ze(h,i);s=s||Ur(g,_),o=o||xn(g)});let l=t.syncPointTree_.get(i);l?(o=o||xn(l),s=s||Ur(l,H())):(l=new r1,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=Ur(_,H());v&&(s=s.updateImmediateChild(g,v))}));const u=Ev(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Ql(e);S(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=E1();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=zd(t.pendingWriteTree_,i);let c=a1(l,e,n,d,s,a);if(!u&&!o&&!r){const h=wv(l,e);c=c.concat(S1(t,e,h))}return c}function Hd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=ze(o,e),u=Ur(l,a);if(u)return u});return fv(i,e,s,n,!0)}function di(t,e){return Cv(e,t.syncPointTree_,null,zd(t.pendingWriteTree_,H()))}function Cv(t,e,n,r){if($(t.path))return Iv(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=Ur(i,H()));let s=[];const o=U(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=pv(r,o);s=s.concat(Cv(l,a,u,d))}return i&&(s=s.concat(Vd(i,t,r,n))),s}}function Iv(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=Ur(i,H()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=pv(r,o),d=t.operationForChild(o);d&&(s=s.concat(Iv(d,l,a,u)))}),i&&(s=s.concat(Vd(i,t,r,n))),s}function kv(t,e){const n=e.query,r=pl(t,n);return{hashFn:()=>(ZI(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?g1(t,n._path,r):m1(t,n._path);{const s=pC(i,n);return ic(t,n,null,s)}}}}function pl(t,e){const n=Ql(e);return t.queryToTagMap.get(n)}function Ql(t){return t._path.toString()+"$"+t._queryIdentifier}function Kd(t,e){return t.tagToQueryMap.get(e)}function Gd(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Q(t.substr(0,e))}}function Qd(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=zd(t.pendingWriteTree_,e);return Vd(r,n,i,null)}function y1(t){return t.fold((e,n,r)=>{if(n&&xn(n))return[Kl(n)];{let i=[];return n&&(i=yv(n)),ke(r,(s,o)=>{i=i.concat(o)}),i}})}function Hi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(d1())(t._repo,t._path):t}function w1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ql(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function E1(){return h1++}function S1(t,e,n){const r=e._path,i=pl(t,e),s=kv(t,n),o=t.listenProvider_.startListening(Hi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)S(!xn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!$(u)&&d&&xn(d))return[Kl(d).query];{let h=[];return d&&(h=h.concat(yv(d).map(g=>g.query))),ke(c,(g,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Hi(d),pl(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Yd(n)}node(){return this.node_}}class qd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=oe(this.path_,e);return new qd(this.syncTree_,n)}node(){return Hd(this.syncTree_,this.path_)}}const C1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},kp=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return I1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return k1(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},I1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},k1=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Tv=function(t,e,n,r){return Xd(e,new qd(n,t),r)},Nv=function(t,e,n){return Xd(t,new Yd(e),n)};function Xd(t,e,n){const r=t.getPriority().val(),i=kp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=kp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new pe(l,_e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new pe(i))),o.forEachChild(le,(l,a)=>{const u=Xd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Zd(t,e){let n=e instanceof Q?e:new Q(e),r=t,i=U(n);for(;i!==null;){const s=Yr(r.node.children,i)||{children:{},childCount:0};r=new Jd(i,r,s),n=q(n),i=U(n)}return r}function hi(t){return t.node.value}function Rv(t,e){t.node.value=e,sc(t)}function xv(t){return t.node.childCount>0}function T1(t){return hi(t)===void 0&&!xv(t)}function Yl(t,e){ke(t.node.children,(n,r)=>{e(new Jd(n,t,r))})}function Pv(t,e,n,r){n&&!r&&e(t),Yl(t,i=>{Pv(i,e,!0,r)}),n&&r&&e(t)}function N1(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function bs(t){return new Q(t.parent===null?t.name:bs(t.parent)+"/"+t.name)}function sc(t){t.parent!==null&&R1(t.parent,t.name,t)}function R1(t,e,n){const r=T1(n),i=Ot(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,sc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,sc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=/[\[\].#$\/\u0000-\u001F\u007F]/,P1=/[\[\].#$\u0000-\u001F\u007F]/,Ba=10*1024*1024,eh=function(t){return typeof t=="string"&&t.length!==0&&!x1.test(t)},Ov=function(t){return typeof t=="string"&&t.length!==0&&!P1.test(t)},O1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ov(t)},A1=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Td(t)||t&&typeof t=="object"&&Ot(t,".sv")},Av=function(t,e,n,r){r&&e===void 0||ql($l(t,"value"),e,n)},ql=function(t,e,n){const r=n instanceof Q?new QC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$n(r));if(typeof e=="function")throw new Error(t+"contains a function "+$n(r)+" with contents = "+e.toString());if(Td(e))throw new Error(t+"contains "+e.toString()+" "+$n(r));if(typeof e=="string"&&e.length>Ba/3&&Wl(e)>Ba)throw new Error(t+"contains a string greater than "+Ba+" utf8 bytes "+$n(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ke(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!eh(o)))throw new Error(t+" contains an invalid key ("+o+") "+$n(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);YC(r,o),ql(t,l,r),qC(r)}),i&&s)throw new Error(t+' contains ".value" child '+$n(r)+" in addition to actual children.")}},b1=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ms(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!eh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(GC);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&rt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},M1=function(t,e,n,r){if(r&&e===void 0)return;const i=$l(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ke(e,(o,l)=>{const a=new Q(o);if(ql(i,l,oe(n,a)),Od(a)===".priority"&&!A1(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),b1(i,s)},bv=function(t,e,n,r){if(!(r&&n===void 0)&&!Ov(n))throw new Error($l(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},D1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),bv(t,e,n,r)},th=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},L1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!eh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!O1(n))throw new Error($l(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Ad(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Mv(t,e,n){Xl(t,n),Dv(t,r=>Ad(r,e))}function vt(t,e,n){Xl(t,n),Dv(t,r=>rt(r,e)||rt(e,r))}function Dv(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(j1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function j1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();qn&&Se("event: "+n.toString()),ci(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="repo_interrupt",z1=25;class $1{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new F1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ll(),this.transactionQueueTree_=new Jd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function W1(t,e,n){if(t.stats_=xd(t.repoInfo_),t.forceRestClient_||vC())t.server_=new ol(t.repoInfo_,(r,i,s,o)=>{Tp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Np(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new $t(t.repoInfo_,e,(r,i,s,o)=>{Tp(t,r,i,s,o)},r=>{Np(t,r)},r=>{B1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=CC(t.repoInfo_,()=>new SI(t.stats_,t.server_)),t.infoData_=new _I,t.infoSyncTree_=new Cp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Gl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),nh(t,"connected",!1),t.serverSyncTree_=new Cp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);vt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Lv(t){const n=t.infoData_.getNode(new Q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Jl(t){return C1({timestamp:Lv(t)})}function Tp(t,e,n,r,i){t.dataUpdateCount++;const s=new Q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=el(n,u=>_e(u));o=v1(t.serverSyncTree_,s,a,i)}else{const a=_e(n);o=_1(t.serverSyncTree_,s,a,i)}else if(r){const a=el(n,u=>_e(u));o=p1(t.serverSyncTree_,s,a)}else{const a=_e(n);o=Gl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ti(t,s)),vt(t.eventQueue_,l,o)}function Np(t,e){nh(t,"connected",e),e===!1&&K1(t)}function B1(t,e){ke(e,(n,r)=>{nh(t,n,r)})}function nh(t,e,n){const r=new Q("/.info/"+e),i=_e(n);t.infoData_.updateSnapshot(r,i);const s=Gl(t.infoSyncTree_,r,i);vt(t.eventQueue_,r,s)}function rh(t){return t.nextWriteId_++}function V1(t,e,n,r,i){Zl(t,"set",{path:e.toString(),value:n,priority:r});const s=Jl(t),o=_e(n,r),l=Hd(t.serverSyncTree_,e),a=Nv(o,l,s),u=rh(t),d=Sv(t.serverSyncTree_,e,a,u,!0);Xl(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||Me("set at "+e+" failed: "+h);const v=hn(t.serverSyncTree_,u,!_);vt(t.eventQueue_,e,v),oc(t,i,h,g)});const c=sh(t,e);ti(t,c),vt(t.eventQueue_,c,[])}function H1(t,e,n,r){Zl(t,"update",{path:e.toString(),value:n});let i=!0;const s=Jl(t),o={};if(ke(n,(l,a)=>{i=!1,o[l]=Tv(oe(e,l),_e(a),t.serverSyncTree_,s)}),i)Se("update() called with empty data.  Don't do anything."),oc(t,r,"ok",void 0);else{const l=rh(t),a=f1(t.serverSyncTree_,e,o,l);Xl(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||Me("update at "+e+" failed: "+u);const h=hn(t.serverSyncTree_,l,!c),g=h.length>0?ti(t,e):e;vt(t.eventQueue_,g,h),oc(t,r,u,d)}),ke(n,u=>{const d=sh(t,oe(e,u));ti(t,d)}),vt(t.eventQueue_,e,[])}}function K1(t){Zl(t,"onDisconnectEvents");const e=Jl(t),n=ll();Xu(t.onDisconnect_,H(),(i,s)=>{const o=Tv(i,s,t.serverSyncTree_,e);uv(n,i,o)});let r=[];Xu(n,H(),(i,s)=>{r=r.concat(Gl(t.serverSyncTree_,i,s));const o=sh(t,i);ti(t,o)}),t.onDisconnect_=ll(),vt(t.eventQueue_,H(),r)}function G1(t,e,n){let r;U(e._path)===".info"?r=Ip(t.infoSyncTree_,e,n):r=Ip(t.serverSyncTree_,e,n),Mv(t.eventQueue_,e._path,r)}function Rp(t,e,n){let r;U(e._path)===".info"?r=ic(t.infoSyncTree_,e,n):r=ic(t.serverSyncTree_,e,n),Mv(t.eventQueue_,e._path,r)}function Q1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(U1)}function Zl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function oc(t,e,n,r){e&&ci(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Fv(t,e,n){return Hd(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function ih(t,e=t.transactionQueueTree_){if(e||ea(t,e),hi(e)){const n=Uv(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Y1(t,bs(e),n)}else xv(e)&&Yl(e,n=>{ih(t,n)})}function Y1(t,e,n){const r=n.map(u=>u.currentWriteId),i=Fv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];S(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=ze(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Zl(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(hn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ea(t,Zd(t.transactionQueueTree_,e)),ih(t,t.transactionQueueTree_),vt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)ci(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Me("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}ti(t,e)}},o)}function ti(t,e){const n=jv(t,e),r=bs(n),i=Uv(t,n);return q1(t,i,r),r}function q1(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=ze(n,a.path);let d=!1,c;if(S(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(hn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=z1)d=!0,c="maxretry",i=i.concat(hn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=Fv(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){ql("transaction failed: Data returned ",g,a.path);let _=_e(g);typeof g=="object"&&g!=null&&Ot(g,".priority")||(_=_.updatePriority(h.getPriority()));const x=a.currentWriteId,p=Jl(t),f=Nv(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=rh(t),o.splice(o.indexOf(x),1),i=i.concat(Sv(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(hn(t.serverSyncTree_,x,!0))}else d=!0,c="nodata",i=i.concat(hn(t.serverSyncTree_,a.currentWriteId,!0))}vt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}ea(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ci(r[l]);ih(t,t.transactionQueueTree_)}function jv(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&hi(r)===void 0;)r=Zd(r,n),e=q(e),n=U(e);return r}function Uv(t,e){const n=[];return zv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function zv(t,e,n){const r=hi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Yl(e,i=>{zv(t,i,n)})}function ea(t,e){const n=hi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Rv(e,n.length>0?n:void 0)}Yl(e,r=>{ea(t,r)})}function sh(t,e){const n=bs(jv(t,e)),r=Zd(t.transactionQueueTree_,e);return N1(r,i=>{Va(t,i)}),Va(t,r),Pv(r,i=>{Va(t,i)}),n}function Va(t,e){const n=hi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(hn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Rv(e,void 0):n.length=s+1,vt(t.eventQueue_,bs(e),i);for(let o=0;o<r.length;o++)ci(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function J1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Me(`Invalid query segment '${n}' in query '${t}'`)}return e}const xp=function(t,e){const n=Z1(t),r=n.namespace;n.domain==="firebase.com"&&Kt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||uC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new K_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Q(n.pathString)}},Z1=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=X1(t.substring(d,c)));const h=J1(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ek=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Pp.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Pp.charAt(e[i]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class Wv{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return $(this._path)?null:Od(this._path)}get ref(){return new qt(this._repo,this._path)}get _queryIdentifier(){const e=fp(this._queryParams),n=Nd(e);return n==="{}"?"default":n}get _queryObject(){return fp(this._queryParams)}isEqual(e){if(e=Je(e),!(e instanceof oh))return!1;const n=this._repo===e._repo,r=Ad(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+KC(this._path)}}class qt extends oh{constructor(e,n){super(e,n,new Ld,!1)}get parent(){const e=tv(this._path);return e===null?null:new qt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ws{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Q(e),r=ni(this.ref,e);return new ws(this._node.getChild(n),r,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ws(i,ni(this.ref,r),le)))}hasChild(e){const n=new Q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ms(t,e){return t=Je(t),t._checkNotDeleted("ref"),e!==void 0?ni(t._root,e):t._root}function ni(t,e){return t=Je(t),U(t._path)===null?D1("child","path",e,!1):bv("child","path",e,!1),new qt(t._repo,oe(t._path,e))}function nk(t,e){t=Je(t),th("push",t._path),Av("push",e,t._path,!0);const n=Lv(t._repo),r=ek(n),i=ni(t,r),s=ni(t,r);let o;return e!=null?o=Bv(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function rk(t){return th("remove",t._path),Bv(t,null)}function Bv(t,e){t=Je(t),th("set",t._path),Av("set",e,t._path,!1);const n=new Rs;return V1(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Vv(t,e){M1("update",e,t._path,!1);const n=new Rs;return H1(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class lh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new $v("value",this,new ws(e.snapshotNode,new qt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Wv(this,e,n):null}matches(e){return e instanceof lh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ah{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Wv(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const r=ni(new qt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new $v(e.type,this,new ws(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ah?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function ik(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{Rp(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new tk(n,s||void 0),l=e==="value"?new lh(o):new ah(e,o);return G1(t._repo,t,l),()=>Rp(t._repo,t,l)}function sk(t,e,n,r){return ik(t,"value",e,n,r)}i1(qt);c1(qt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok="FIREBASE_DATABASE_EMULATOR_HOST",lc={};let lk=!1;function ak(t,e,n,r){t.repoInfo_=new K_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function uk(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xp(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[ok]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=xp(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new Fr(Fr.OWNER):new wC(t.name,t.options,e);L1("Invalid Firebase Database URL",o),$(o.path)||Kt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=dk(l,t,d,new yC(t.name,n));return new hk(c,t)}function ck(t,e){const n=lc[e];(!n||n[t.key]!==t)&&Kt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Q1(t),delete n[t.key]}function dk(t,e,n,r){let i=lc[e.name];i||(i={},lc[e.name]=i);let s=i[t.toURLString()];return s&&Kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new $1(t,lk,n,r),i[t.toURLString()]=s,s}class hk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(W1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qt(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ck(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Kt("Cannot call "+e+" on a deleted database.")}}function Hv(t=x_(),e){const n=kd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=bE("database");r&&fk(n,...r)}return n}function fk(t,e,n,r={}){t=Je(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Kt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Kt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Fr(Fr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:ME(r.mockUserToken,t.app.options.projectId);s=new Fr(o)}ak(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(t){iC(ui),qr(new rr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return uk(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),In(qf,Xf,t),In(qf,Xf,"esm2017")}$t.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$t.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};pk();function uh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Kv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mk=Kv,Gv=new xs("auth","Firebase",Kv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new Cd("@firebase/auth");function gk(t,...e){ml.logLevel<=G.WARN&&ml.warn(`Auth (${ui}): ${t}`,...e)}function So(t,...e){ml.logLevel<=G.ERROR&&ml.error(`Auth (${ui}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,...e){throw ch(t,...e)}function Rt(t,...e){return ch(t,...e)}function Qv(t,e,n){const r=Object.assign(Object.assign({},mk()),{[e]:n});return new xs("auth","Firebase",r).create(e,{appName:t.name})}function _k(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Pt(t,"argument-error"),Qv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ch(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gv.create(t,...e)}function L(t,e,...n){if(!t)throw ch(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw So(e),new Error(e)}function Gt(t,e){t||jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vk(){return Op()==="http:"||Op()==="https:"}function Op(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vk()||DE()||"connection"in navigator)?navigator.onLine:!0}function wk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gt(n>e,"Short delay should be less than long delay!"),this.isMobile=Sd()||C_()}get(){return yk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t,e){Gt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=new Ds(3e4,6e4);function qv(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ls(t,e,n,r,i={}){return Xv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ai(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Yv.fetch()(Jv(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Xv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ek),e);try{const i=new Ik(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw lo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw lo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw lo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw lo(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qv(t,d,u);Pt(t,d)}}catch(i){if(i instanceof bn)throw i;Pt(t,"network-request-failed",{message:String(i)})}}async function Ck(t,e,n,r,i={}){const s=await Ls(t,e,n,r,i);return"mfaPendingCredential"in s&&Pt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Jv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?dh(t.config,i):`${t.config.apiScheme}://${i}`}class Ik{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rt(this.auth,"network-request-failed")),Sk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kk(t,e){return Ls(t,"POST","/v1/accounts:delete",e)}async function Tk(t,e){return Ls(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Nk(t,e=!1){const n=Je(t),r=await n.getIdToken(e),i=hh(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ki(Ha(i.auth_time)),issuedAtTime:Ki(Ha(i.iat)),expirationTime:Ki(Ha(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ha(t){return Number(t)*1e3}function hh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return So("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zo(n);return i?JSON.parse(i):(So("Failed to decode base64 JWT payload"),null)}catch(i){return So("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Rk(t){const e=hh(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&xk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ki(this.lastLoginAt),this.creationTime=Ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Es(t,Tk(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bk(s.providerUserInfo):[],l=Ak(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Zv(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function Ok(t){const e=Je(t);await gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ak(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function bk(t){return t.map(e=>{var{providerId:n}=e,r=uh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mk(t,e){const n=await Xv(t,{},async()=>{const r=ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Jv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Yv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Mk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ss;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ss,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=uh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Es(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Nk(this,e)}reload(){return Ok(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Es(this,kk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:y,isAnonymous:I,providerData:k,stsTokenManager:C}=n;L(m&&C,e,"internal-error");const T=Ss.fromJSON(this.name,C);L(typeof m=="string",e,"internal-error"),tn(c,e.name),tn(h,e.name),L(typeof y=="boolean",e,"internal-error"),L(typeof I=="boolean",e,"internal-error"),tn(g,e.name),tn(_,e.name),tn(v,e.name),tn(x,e.name),tn(p,e.name),tn(f,e.name);const P=new Xn({uid:m,auth:e,email:h,emailVerified:y,displayName:c,isAnonymous:I,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:T,createdAt:p,lastLoginAt:f});return k&&Array.isArray(k)&&(P.providerData=k.map(O=>Object.assign({},O))),x&&(P._redirectEventId=x),P}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ss;i.updateFromServerResponse(n);const s=new Xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await gl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=new Map;function Ut(t){Gt(t instanceof Function,"Expected a class definition");let e=Ap.get(t);return e?(Gt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ap.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ey.type="NONE";const bp=ey;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t,e,n){return`firebase:${t}:${e}:${n}`}class zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Co(this.userKey,i.apiKey,s),this.fullPersistenceKey=Co("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zr(Ut(bp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ut(bp);const o=Co(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Xn._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new zr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new zr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ry(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ty(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sy(e))return"Blackberry";if(oy(e))return"Webos";if(fh(e))return"Safari";if((e.includes("chrome/")||ny(e))&&!e.includes("edge/"))return"Chrome";if(iy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ty(t=Oe()){return/firefox\//i.test(t)}function fh(t=Oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ny(t=Oe()){return/crios\//i.test(t)}function ry(t=Oe()){return/iemobile/i.test(t)}function iy(t=Oe()){return/android/i.test(t)}function sy(t=Oe()){return/blackberry/i.test(t)}function oy(t=Oe()){return/webos/i.test(t)}function ta(t=Oe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Dk(t=Oe()){var e;return ta(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Lk(){return LE()&&document.documentMode===10}function ly(t=Oe()){return ta(t)||iy(t)||oy(t)||sy(t)||/windows phone/i.test(t)||ry(t)}function Fk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t,e=[]){let n;switch(t){case"Browser":n=Mp(Oe());break;case"Worker":n=`${Mp(Oe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ui}/${r}`}async function uy(t,e){return Ls(t,"GET","/v2/recaptchaConfig",qv(t,e))}function Dp(t){return t!==void 0&&t.enterprise!==void 0}class cy{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function dy(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",jk().appendChild(r)})}function Uk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const zk="https://www.google.com/recaptcha/enterprise.js?render=",$k="recaptcha-enterprise",Wk="NO_RECAPTCHA";class Bk{constructor(e){this.type=$k,this.auth=Fs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{uy(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new cy(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;Dp(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Wk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Dp(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}dy(zk+l).then(()=>{i(l,s,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lp(this),this.idTokenSubscription=new Lp(this),this.beforeStateQueue=new Vk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ut(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Je(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}async initializeRecaptchaConfig(){const e=await uy(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new cy(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Bk(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ut(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[Ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ay(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fs(t){return Je(t)}class Lp{constructor(e){this.auth=e,this.observer=null,this.addObserver=HE(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(t,e){const n=kd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(tl(s,e??{}))return i;Pt(i,"already-initialized")}return n.initialize({options:e})}function Gk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Qk(t,e,n){const r=Fs(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=hy(e),{host:o,port:l}=Yk(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qk()}function hy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Yk(t){const e=hy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Fp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Fp(o)}}}function Fp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(t,e){return Ck(t,"POST","/v1/accounts:signInWithIdp",qv(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk="http://localhost";class ur extends fy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=uh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ur(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $r(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$r(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$r(e,n)}buildRequest(){const e={requestUri:Xk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ai(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends ph{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends js{constructor(){super("facebook.com")}static credential(e){return ur._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ur._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mt.credential(n,r)}catch{return null}}}Mt.GOOGLE_SIGN_IN_METHOD="google.com";Mt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends js{constructor(){super("github.com")}static credential(e){return ur._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.GITHUB_SIGN_IN_METHOD="github.com";an.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends js{constructor(){super("twitter.com")}static credential(e,n){return ur._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return un.credential(n,r)}catch{return null}}}un.TWITTER_SIGN_IN_METHOD="twitter.com";un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Xn._fromIdTokenResponse(e,r,i),o=jp(r);return new ri({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=jp(r);return new ri({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function jp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_l.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new _l(e,n,r,i)}}function py(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?_l._fromErrorAndOperation(t,s,e,r):s})}async function Jk(t,e,n=!1){const r=await Es(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ri._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zk(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Es(t,py(r,i,e,t),n);L(s.idToken,r,"internal-error");const o=hh(s.idToken);L(o,r,"internal-error");const{sub:l}=o;return L(t.uid===l,r,"user-mismatch"),ri._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Pt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(t,e,n=!1){const r="signIn",i=await py(t,r,e),s=await ri._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function tT(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function nT(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function rT(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}const vl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vl,"1"),this.storage.removeItem(vl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(){const t=Oe();return fh(t)||ta(t)}const sT=1e3,oT=10;class gy extends my{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iT()&&Fk(),this.fallbackToPolling=ly(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Lk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gy.type="LOCAL";const lT=gy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y extends my{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_y.type="SESSION";const vy=_y;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await aT(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}na.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=mh("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function cT(t){xt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function dT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fT(){return yy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="firebaseLocalStorageDb",pT=1,yl="firebaseLocalStorage",Ey="fbase_key";class Us{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ra(t,e){return t.transaction([yl],e?"readwrite":"readonly").objectStore(yl)}function mT(){const t=indexedDB.deleteDatabase(wy);return new Us(t).toPromise()}function uc(){const t=indexedDB.open(wy,pT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yl,{keyPath:Ey})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yl)?e(r):(r.close(),await mT(),e(await uc()))})})}async function Up(t,e,n){const r=ra(t,!0).put({[Ey]:e,value:n});return new Us(r).toPromise()}async function gT(t,e){const n=ra(t,!1).get(e),r=await new Us(n).toPromise();return r===void 0?null:r.value}function zp(t,e){const n=ra(t,!0).delete(e);return new Us(n).toPromise()}const _T=800,vT=3;class Sy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=na._getInstance(fT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dT(),!this.activeServiceWorker)return;this.sender=new uT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uc();return await Up(e,vl,"1"),await zp(e,vl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Up(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ra(i,!1).getAll();return new Us(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_T)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sy.type="LOCAL";const yT=Sy;new Ds(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t,e){return e?Ut(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh extends fy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $r(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $r(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $r(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wT(t){return eT(t.auth,new gh(t),t.bypassAuthState)}function ET(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),Zk(n,new gh(t),t.bypassAuthState)}async function ST(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),Jk(n,new gh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wT;case"linkViaPopup":case"linkViaRedirect":return ST;case"reauthViaPopup":case"reauthViaRedirect":return ET;default:Pt(this.auth,"internal-error")}}resolve(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=new Ds(2e3,1e4);async function IT(t,e,n){const r=Fs(t);_k(t,e,ph);const i=Cy(r,n);return new Gn(r,"signInViaPopup",e,i).executeNotNull()}class Gn extends Iy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gn.currentPopupAction&&Gn.currentPopupAction.cancel(),Gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Gt(this.filter.length===1,"Popup operations only handle one event");const e=mh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CT.get())};e()}}Gn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="pendingRedirect",Io=new Map;class TT extends Iy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Io.get(this.auth._key());if(!e){try{const r=await NT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Io.set(this.auth._key(),e)}return this.bypassAuthState||Io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NT(t,e){const n=PT(e),r=xT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function RT(t,e){Io.set(t._key(),e)}function xT(t){return Ut(t._redirectPersistence)}function PT(t){return Co(kT,t.config.apiKey,t.name)}async function OT(t,e,n=!1){const r=Fs(t),i=Cy(r,e),o=await new TT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=10*60*1e3;class bT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ky(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AT&&this.cachedEventUids.clear(),this.cachedEventUids.has($p(e))}saveEventToCache(e){this.cachedEventUids.add($p(e)),this.lastProcessedEventTime=Date.now()}}function $p(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ky({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ky(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DT(t,e={}){return Ls(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FT=/^https?/;async function jT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DT(t);for(const n of e)try{if(UT(n))return}catch{}Pt(t,"unauthorized-domain")}function UT(t){const e=ac(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FT.test(n))return!1;if(LT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=new Ds(3e4,6e4);function Wp(){const t=xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $T(t){return new Promise((e,n)=>{var r,i,s;function o(){Wp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wp(),n(Rt(t,"network-request-failed"))},timeout:zT.get()})}if(!((i=(r=xt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xt().gapi)===null||s===void 0)&&s.load)o();else{const l=Uk("iframefcb");return xt()[l]=()=>{gapi.load?o():n(Rt(t,"network-request-failed"))},dy(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw ko=null,e})}let ko=null;function WT(t){return ko=ko||$T(t),ko}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=new Ds(5e3,15e3),VT="__/auth/iframe",HT="emulator/auth/iframe",KT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QT(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dh(e,HT):`https://${t.config.authDomain}/${VT}`,r={apiKey:e.apiKey,appName:t.name,v:ui},i=GT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ai(r).slice(1)}`}async function YT(t){const e=await WT(t),n=xt().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:QT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),l=xt().setTimeout(()=>{s(o)},BT.get());function a(){xt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XT=500,JT=600,ZT="_blank",eN="http://localhost";class Bp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tN(t,e,n,r=XT,i=JT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},qT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Oe().toLowerCase();n&&(l=ny(u)?ZT:n),ty(u)&&(e=e||eN,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(Dk(u)&&l!=="_self")return nN(e||"",l),new Bp(null);const c=window.open(e||"",l,d);L(c,t,"popup-blocked");try{c.focus()}catch{}return new Bp(c)}function nN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN="__/auth/handler",iN="emulator/auth/handler",sN=encodeURIComponent("fac");async function Vp(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ui,eventId:i};if(e instanceof ph){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$u(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof js){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${sN}=${encodeURIComponent(a)}`:"";return`${oN(t)}?${ai(l).slice(1)}${u}`}function oN({config:t}){return t.emulator?dh(t,iN):`https://${t.authDomain}/${rN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="webStorageSupport";class lN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vy,this._completeRedirectFn=OT,this._overrideRedirectResult=RT}async _openPopup(e,n,r,i){var s;Gt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Vp(e,n,r,ac(),i);return tN(e,o,mh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Vp(e,n,r,ac(),i);return cT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Gt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YT(e),r=new bT(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ka,{type:Ka},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ka];o!==void 0&&n(!!o),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ly()||fh()||ta()}}const aN=lN;var Hp="@firebase/auth",Kp="1.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function dN(t){qr(new rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ay(t)},u=new Hk(r,i,s,a);return Gk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qr(new rr("auth-internal",e=>{const n=Fs(e.getProvider("auth").getImmediate());return(r=>new uN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(Hp,Kp,cN(t)),In(Hp,Kp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=5*60,fN=S_("authIdTokenMaxAge")||hN;let Gp=null;const pN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fN)return;const i=n==null?void 0:n.token;Gp!==i&&(Gp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mN(t=x_()){const e=kd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Kk(t,{popupRedirectResolver:aN,persistence:[yT,lT,vy]}),r=S_("authTokenSyncURL");if(r){const s=pN(r);nT(n,s,()=>s(n.currentUser)),tT(n,o=>s(o))}const i=w_("auth");return i&&Qk(n,`http://${i}`),n}dN("Browser");const ia=mN(rC),gN=new Mt,_N=async()=>{try{return(await IT(ia,gN)).user}catch(t){console.error(t)}},vN=async()=>{try{await ia.signOut()}catch(t){console.error(t)}},zs=()=>ia.currentUser,sa=Hv(),yN=async t=>{const e=zs();if(!e||!t.name||t.amount===void 0||!t.unit)return;const n=Hv();await nk(Ms(n,`items/${e.uid}`),{...t,inShoppingCart:!1})},Ty=t=>{const e=zs();if(!e)return;const n=Ms(sa,`items/${e.uid}`);sk(n,r=>{const i=r.val();if(!i){t([]);return}t(Object.entries(i).map(([s,o])=>({id:s,...o})))})},To=(t,e)=>{if(!t.id)return;const n=zs();if(!n||t.amount+e<0)return;const r=Ms(sa,`items/${n.uid}`),i={[`${t.id}/amount`]:t.amount+e};Vv(r,i).catch(s=>{console.error(s)})},Ny=(t,e)=>{if(!t.id)return;const n=zs();if(!n)return;const r=Ms(sa,`items/${n.uid}`),i={[`${t.id}/inShoppingCart`]:e};Vv(r,i).catch(s=>{console.error(s)})},wN=t=>{Ny(t,!0)},Ry=t=>{Ny(t,!1)},EN=t=>{if(!t.id)return;const e=zs();if(!e)return;const n=Ms(sa,`items/${e.uid}/${t.id}`);rk(n).catch(r=>{console.error(r)})};function Qt(t){return Array.isArray?Array.isArray(t):Oy(t)==="[object Array]"}const SN=1/0;function CN(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-SN?"-0":e}function IN(t){return t==null?"":CN(t)}function It(t){return typeof t=="string"}function xy(t){return typeof t=="number"}function kN(t){return t===!0||t===!1||TN(t)&&Oy(t)=="[object Boolean]"}function Py(t){return typeof t=="object"}function TN(t){return Py(t)&&t!==null}function Ke(t){return t!=null}function Ga(t){return!t.trim().length}function Oy(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const NN="Incorrect 'index' type",RN=t=>`Invalid value for key ${t}`,xN=t=>`Pattern length exceeds max of ${t}.`,PN=t=>`Missing ${t} property in key`,ON=t=>`Property 'weight' in key '${t}' must be a positive integer`,Qp=Object.prototype.hasOwnProperty;class AN{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Ay(r);n+=i.weight,this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ay(t){let e=null,n=null,r=null,i=1,s=null;if(It(t)||Qt(t))r=t,e=Yp(t),n=cc(t);else{if(!Qp.call(t,"name"))throw new Error(PN("name"));const o=t.name;if(r=o,Qp.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(ON(o));e=Yp(o),n=cc(o),s=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:s}}function Yp(t){return Qt(t)?t:t.split(".")}function cc(t){return Qt(t)?t.join("."):t}function bN(t,e){let n=[],r=!1;const i=(s,o,l)=>{if(Ke(s))if(!o[l])n.push(s);else{let a=o[l];const u=s[a];if(!Ke(u))return;if(l===o.length-1&&(It(u)||xy(u)||kN(u)))n.push(IN(u));else if(Qt(u)){r=!0;for(let d=0,c=u.length;d<c;d+=1)i(u[d],o,l+1)}else o.length&&i(u,o,l+1)}};return i(t,It(e)?e.split("."):e,0),r?n:n[0]}const MN={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},DN={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},LN={location:0,threshold:.6,distance:100},FN={useExtendedSearch:!1,getFn:bN,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var M={...DN,...MN,...LN,...FN};const jN=/[^ ]+/g;function UN(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const s=i.match(jN).length;if(n.has(s))return n.get(s);const o=1/Math.pow(s,.5*t),l=parseFloat(Math.round(o*r)/r);return n.set(s,l),l},clear(){n.clear()}}}class _h{constructor({getFn:e=M.getFn,fieldNormWeight:n=M.fieldNormWeight}={}){this.norm=UN(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,It(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();It(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Ke(e)||Ga(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,s)=>{let o=i.getFn?i.getFn(e):this.getFn(e,i.path);if(Ke(o)){if(Qt(o)){let l=[];const a=[{nestedArrIndex:-1,value:o}];for(;a.length;){const{nestedArrIndex:u,value:d}=a.pop();if(Ke(d))if(It(d)&&!Ga(d)){let c={v:d,i:u,n:this.norm.get(d)};l.push(c)}else Qt(d)&&d.forEach((c,h)=>{a.push({nestedArrIndex:h,value:c})})}r.$[s]=l}else if(It(o)&&!Ga(o)){let l={v:o,n:this.norm.get(o)};r.$[s]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function by(t,e,{getFn:n=M.getFn,fieldNormWeight:r=M.fieldNormWeight}={}){const i=new _h({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Ay)),i.setSources(e),i.create(),i}function zN(t,{getFn:e=M.getFn,fieldNormWeight:n=M.fieldNormWeight}={}){const{keys:r,records:i}=t,s=new _h({getFn:e,fieldNormWeight:n});return s.setKeys(r),s.setIndexRecords(i),s}function ao(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=M.distance,ignoreLocation:s=M.ignoreLocation}={}){const o=e/t.length;if(s)return o;const l=Math.abs(r-n);return i?o+l/i:l?1:o}function $N(t=[],e=M.minMatchCharLength){let n=[],r=-1,i=-1,s=0;for(let o=t.length;s<o;s+=1){let l=t[s];l&&r===-1?r=s:!l&&r!==-1&&(i=s-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[s-1]&&s-r>=e&&n.push([r,s-1]),n}const Wn=32;function WN(t,e,n,{location:r=M.location,distance:i=M.distance,threshold:s=M.threshold,findAllMatches:o=M.findAllMatches,minMatchCharLength:l=M.minMatchCharLength,includeMatches:a=M.includeMatches,ignoreLocation:u=M.ignoreLocation}={}){if(e.length>Wn)throw new Error(xN(Wn));const d=e.length,c=t.length,h=Math.max(0,Math.min(r,c));let g=s,_=h;const v=l>1||a,x=v?Array(c):[];let p;for(;(p=t.indexOf(e,_))>-1;){let C=ao(e,{currentLocation:p,expectedLocation:h,distance:i,ignoreLocation:u});if(g=Math.min(C,g),_=p+d,v){let T=0;for(;T<d;)x[p+T]=1,T+=1}}_=-1;let f=[],m=1,y=d+c;const I=1<<d-1;for(let C=0;C<d;C+=1){let T=0,P=y;for(;T<P;)ao(e,{errors:C,currentLocation:h+P,expectedLocation:h,distance:i,ignoreLocation:u})<=g?T=P:y=P,P=Math.floor((y-T)/2+T);y=P;let O=Math.max(1,h-P+1),fe=o?c:Math.min(h+P,c)+d,Fe=Array(fe+2);Fe[fe+1]=(1<<C)-1;for(let Te=fe;Te>=O;Te-=1){let Jt=Te-1,Zt=n[t.charAt(Jt)];if(v&&(x[Jt]=+!!Zt),Fe[Te]=(Fe[Te+1]<<1|1)&Zt,C&&(Fe[Te]|=(f[Te+1]|f[Te])<<1|1|f[Te+1]),Fe[Te]&I&&(m=ao(e,{errors:C,currentLocation:Jt,expectedLocation:h,distance:i,ignoreLocation:u}),m<=g)){if(g=m,_=Jt,_<=h)break;O=Math.max(1,2*h-_)}}if(ao(e,{errors:C+1,currentLocation:h,expectedLocation:h,distance:i,ignoreLocation:u})>g)break;f=Fe}const k={isMatch:_>=0,score:Math.max(.001,m)};if(v){const C=$N(x,l);C.length?a&&(k.indices=C):k.isMatch=!1}return k}function BN(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class My{constructor(e,{location:n=M.location,threshold:r=M.threshold,distance:i=M.distance,includeMatches:s=M.includeMatches,findAllMatches:o=M.findAllMatches,minMatchCharLength:l=M.minMatchCharLength,isCaseSensitive:a=M.isCaseSensitive,ignoreLocation:u=M.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:a,ignoreLocation:u},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(h,g)=>{this.chunks.push({pattern:h,alphabet:BN(h),startIndex:g})},c=this.pattern.length;if(c>Wn){let h=0;const g=c%Wn,_=c-g;for(;h<_;)d(this.pattern.substr(h,Wn),h),h+=Wn;if(g){const v=c-Wn;d(this.pattern.substr(v),v)}}else d(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let _={isMatch:!0,score:0};return r&&(_.indices=[[0,e.length-1]]),_}const{location:i,distance:s,threshold:o,findAllMatches:l,minMatchCharLength:a,ignoreLocation:u}=this.options;let d=[],c=0,h=!1;this.chunks.forEach(({pattern:_,alphabet:v,startIndex:x})=>{const{isMatch:p,score:f,indices:m}=WN(e,_,v,{location:i+x,distance:s,threshold:o,findAllMatches:l,minMatchCharLength:a,includeMatches:r,ignoreLocation:u});p&&(h=!0),c+=f,p&&m&&(d=[...d,...m])});let g={isMatch:h,score:h?c/this.chunks.length:1};return h&&r&&(g.indices=d),g}}class Mn{constructor(e){this.pattern=e}static isMultiMatch(e){return qp(e,this.multiRegex)}static isSingleMatch(e){return qp(e,this.singleRegex)}search(){}}function qp(t,e){const n=t.match(e);return n?n[1]:null}class VN extends Mn{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class HN extends Mn{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class KN extends Mn{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class GN extends Mn{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class QN extends Mn{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class YN extends Mn{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Dy extends Mn{constructor(e,{location:n=M.location,threshold:r=M.threshold,distance:i=M.distance,includeMatches:s=M.includeMatches,findAllMatches:o=M.findAllMatches,minMatchCharLength:l=M.minMatchCharLength,isCaseSensitive:a=M.isCaseSensitive,ignoreLocation:u=M.ignoreLocation}={}){super(e),this._bitapSearch=new My(e,{location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:a,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Ly extends Mn{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],s=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+s,i.push([r,n-1]);const o=!!i.length;return{isMatch:o,score:o?0:1,indices:i}}}const dc=[VN,Ly,KN,GN,YN,QN,HN,Dy],Xp=dc.length,qN=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,XN="|";function JN(t,e={}){return t.split(XN).map(n=>{let r=n.trim().split(qN).filter(s=>s&&!!s.trim()),i=[];for(let s=0,o=r.length;s<o;s+=1){const l=r[s];let a=!1,u=-1;for(;!a&&++u<Xp;){const d=dc[u];let c=d.isMultiMatch(l);c&&(i.push(new d(c,e)),a=!0)}if(!a)for(u=-1;++u<Xp;){const d=dc[u];let c=d.isSingleMatch(l);if(c){i.push(new d(c,e));break}}}return i})}const ZN=new Set([Dy.type,Ly.type]);class eR{constructor(e,{isCaseSensitive:n=M.isCaseSensitive,includeMatches:r=M.includeMatches,minMatchCharLength:i=M.minMatchCharLength,ignoreLocation:s=M.ignoreLocation,findAllMatches:o=M.findAllMatches,location:l=M.location,threshold:a=M.threshold,distance:u=M.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:o,ignoreLocation:s,location:l,threshold:a,distance:u},this.pattern=n?e:e.toLowerCase(),this.query=JN(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let s=0,o=[],l=0;for(let a=0,u=n.length;a<u;a+=1){const d=n[a];o.length=0,s=0;for(let c=0,h=d.length;c<h;c+=1){const g=d[c],{isMatch:_,indices:v,score:x}=g.search(e);if(_){if(s+=1,l+=x,r){const p=g.constructor.type;ZN.has(p)?o=[...o,...v]:o.push(v)}}else{l=0,s=0,o.length=0;break}}if(s){let c={isMatch:!0,score:l/s};return r&&(c.indices=o),c}}return{isMatch:!1,score:1}}}const hc=[];function tR(...t){hc.push(...t)}function fc(t,e){for(let n=0,r=hc.length;n<r;n+=1){let i=hc[n];if(i.condition(t,e))return new i(t,e)}return new My(t,e)}const wl={AND:"$and",OR:"$or"},pc={PATH:"$path",PATTERN:"$val"},mc=t=>!!(t[wl.AND]||t[wl.OR]),nR=t=>!!t[pc.PATH],rR=t=>!Qt(t)&&Py(t)&&!mc(t),Jp=t=>({[wl.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Fy(t,e,{auto:n=!0}={}){const r=i=>{let s=Object.keys(i);const o=nR(i);if(!o&&s.length>1&&!mc(i))return r(Jp(i));if(rR(i)){const a=o?i[pc.PATH]:s[0],u=o?i[pc.PATTERN]:i[a];if(!It(u))throw new Error(RN(a));const d={keyId:cc(a),pattern:u};return n&&(d.searcher=fc(u,e)),d}let l={children:[],operator:s[0]};return s.forEach(a=>{const u=i[a];Qt(u)&&u.forEach(d=>{l.children.push(r(d))})}),l};return mc(t)||(t=Jp(t)),r(t)}function iR(t,{ignoreFieldNorm:e=M.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:s,score:o})=>{const l=i?i.weight:null;r*=Math.pow(o===0&&l?Number.EPSILON:o,(l||1)*(e?1:s))}),n.score=r})}function sR(t,e){const n=t.matches;e.matches=[],Ke(n)&&n.forEach(r=>{if(!Ke(r.indices)||!r.indices.length)return;const{indices:i,value:s}=r;let o={indices:i,value:s};r.key&&(o.key=r.key.src),r.idx>-1&&(o.refIndex=r.idx),e.matches.push(o)})}function oR(t,e){e.score=t.score}function lR(t,e,{includeMatches:n=M.includeMatches,includeScore:r=M.includeScore}={}){const i=[];return n&&i.push(sR),r&&i.push(oR),t.map(s=>{const{idx:o}=s,l={item:e[o],refIndex:o};return i.length&&i.forEach(a=>{a(s,l)}),l})}class fi{constructor(e,n={},r){this.options={...M,...n},this.options.useExtendedSearch,this._keyStore=new AN(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof _h))throw new Error(NN);this._myIndex=n||by(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Ke(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const s=this._docs[r];e(s,r)&&(this.removeAt(r),r-=1,i-=1,n.push(s))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:s,sortFn:o,ignoreFieldNorm:l}=this.options;let a=It(e)?It(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return iR(a,{ignoreFieldNorm:l}),s&&a.sort(o),xy(n)&&n>-1&&(a=a.slice(0,n)),lR(a,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=fc(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:s,i:o,n:l})=>{if(!Ke(s))return;const{isMatch:a,score:u,indices:d}=n.searchIn(s);a&&i.push({item:s,idx:o,matches:[{score:u,value:s,norm:l,indices:d}]})}),i}_searchLogical(e){const n=Fy(e,this.options),r=(l,a,u)=>{if(!l.children){const{keyId:c,searcher:h}=l,g=this._findMatches({key:this._keyStore.get(c),value:this._myIndex.getValueForItemAtKeyId(a,c),searcher:h});return g&&g.length?[{idx:u,item:a,matches:g}]:[]}const d=[];for(let c=0,h=l.children.length;c<h;c+=1){const g=l.children[c],_=r(g,a,u);if(_.length)d.push(..._);else if(l.operator===wl.AND)return[]}return d},i=this._myIndex.records,s={},o=[];return i.forEach(({$:l,i:a})=>{if(Ke(l)){let u=r(n,l,a);u.length&&(s[a]||(s[a]={idx:a,item:l,matches:[]},o.push(s[a])),u.forEach(({matches:d})=>{s[a].matches.push(...d)}))}}),o}_searchObjectList(e){const n=fc(e,this.options),{keys:r,records:i}=this._myIndex,s=[];return i.forEach(({$:o,i:l})=>{if(!Ke(o))return;let a=[];r.forEach((u,d)=>{a.push(...this._findMatches({key:u,value:o[d],searcher:n}))}),a.length&&s.push({idx:l,item:o,matches:a})}),s}_findMatches({key:e,value:n,searcher:r}){if(!Ke(n))return[];let i=[];if(Qt(n))n.forEach(({v:s,i:o,n:l})=>{if(!Ke(s))return;const{isMatch:a,score:u,indices:d}=r.searchIn(s);a&&i.push({score:u,key:e,value:s,idx:o,norm:l,indices:d})});else{const{v:s,n:o}=n,{isMatch:l,score:a,indices:u}=r.searchIn(s);l&&i.push({score:a,key:e,value:s,norm:o,indices:u})}return i}}fi.version="6.6.2";fi.createIndex=by;fi.parseIndex=zN;fi.config=M;fi.parseQuery=Fy;tR(eR);const Zp=new fi([],{keys:[{name:"name",getFn:t=>t.name}]});var jy={exports:{}},aR="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",uR=aR,cR=uR;function Uy(){}function zy(){}zy.resetWarningCache=Uy;var dR=function(){function t(r,i,s,o,l,a){if(a!==cR){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:zy,resetWarningCache:Uy};return n.PropTypes=n,n};jy.exports=dR();var hR=jy.exports;const W=Il(hR);function gc(){return gc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gc.apply(this,arguments)}function fR(t,e){if(t==null)return{};var n=pR(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function pR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var vh=b.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,i=t.size,s=i===void 0?24:i,o=fR(t,["color","size"]);return F.createElement("svg",gc({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),F.createElement("polyline",{points:"20 6 9 17 4 12"}))});vh.propTypes={color:W.string,size:W.oneOfType([W.string,W.number])};vh.displayName="Check";const mR=vh;function _c(){return _c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_c.apply(this,arguments)}function gR(t,e){if(t==null)return{};var n=_R(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function _R(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var yh=b.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,i=t.size,s=i===void 0?24:i,o=gR(t,["color","size"]);return F.createElement("svg",_c({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),F.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),F.createElement("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}))});yh.propTypes={color:W.string,size:W.oneOfType([W.string,W.number])};yh.displayName="DollarSign";const vR=yh;function vc(){return vc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vc.apply(this,arguments)}function yR(t,e){if(t==null)return{};var n=wR(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function wR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var wh=b.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,i=t.size,s=i===void 0?24:i,o=yR(t,["color","size"]);return F.createElement("svg",vc({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),F.createElement("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),F.createElement("polyline",{points:"16 17 21 12 16 7"}),F.createElement("line",{x1:"21",y1:"12",x2:"9",y2:"12"}))});wh.propTypes={color:W.string,size:W.oneOfType([W.string,W.number])};wh.displayName="LogOut";const ER=wh;function yc(){return yc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yc.apply(this,arguments)}function SR(t,e){if(t==null)return{};var n=CR(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function CR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Eh=b.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,i=t.size,s=i===void 0?24:i,o=SR(t,["color","size"]);return F.createElement("svg",yc({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),F.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))});Eh.propTypes={color:W.string,size:W.oneOfType([W.string,W.number])};Eh.displayName="Minus";const IR=Eh;function wc(){return wc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wc.apply(this,arguments)}function kR(t,e){if(t==null)return{};var n=TR(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function TR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Sh=b.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,i=t.size,s=i===void 0?24:i,o=kR(t,["color","size"]);return F.createElement("svg",wc({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),F.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),F.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))});Sh.propTypes={color:W.string,size:W.oneOfType([W.string,W.number])};Sh.displayName="Plus";const NR=Sh;function Ec(){return Ec=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ec.apply(this,arguments)}function RR(t,e){if(t==null)return{};var n=xR(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function xR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Ch=b.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,i=t.size,s=i===void 0?24:i,o=RR(t,["color","size"]);return F.createElement("svg",Ec({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),F.createElement("circle",{cx:"11",cy:"11",r:"8"}),F.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});Ch.propTypes={color:W.string,size:W.oneOfType([W.string,W.number])};Ch.displayName="Search";const PR=Ch;function Sc(){return Sc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sc.apply(this,arguments)}function OR(t,e){if(t==null)return{};var n=AR(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function AR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Ih=b.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,i=t.size,s=i===void 0?24:i,o=OR(t,["color","size"]);return F.createElement("svg",Sc({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),F.createElement("circle",{cx:"9",cy:"21",r:"1"}),F.createElement("circle",{cx:"20",cy:"21",r:"1"}),F.createElement("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}))});Ih.propTypes={color:W.string,size:W.oneOfType([W.string,W.number])};Ih.displayName="ShoppingCart";const bR=Ih;function Cc(){return Cc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cc.apply(this,arguments)}function MR(t,e){if(t==null)return{};var n=DR(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function DR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var kh=b.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,i=t.size,s=i===void 0?24:i,o=MR(t,["color","size"]);return F.createElement("svg",Cc({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),F.createElement("polyline",{points:"3 6 5 6 21 6"}),F.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),F.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),F.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"}))});kh.propTypes={color:W.string,size:W.oneOfType([W.string,W.number])};kh.displayName="Trash2";const LR=kh;function Ic(){return Ic=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ic.apply(this,arguments)}function FR(t,e){if(t==null)return{};var n=jR(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function jR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Th=b.forwardRef(function(t,e){var n=t.color,r=n===void 0?"currentColor":n,i=t.size,s=i===void 0?24:i,o=FR(t,["color","size"]);return F.createElement("svg",Ic({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),F.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),F.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))});Th.propTypes={color:W.string,size:W.oneOfType([W.string,W.number])};Th.displayName="X";const Nh=Th;function $y(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=$y(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function UR(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=$y(t))&&(r&&(r+=" "),r+=e);return r}var ft=(t=>(t[t.PRIMARY=0]="PRIMARY",t[t.ERROR=1]="ERROR",t[t.INVERSE=2]="INVERSE",t))(ft||{});const kt=({text:t,type:e=ft.PRIMARY,onClick:n,smallPadding:r=!1,disabled:i=!1})=>{const s=()=>{i||n&&n()};return E.jsx("button",{className:UR("h-8 w-fit rounded border border-solid",r?"px-2":"px-6",e===ft.PRIMARY&&"bg-green-300 hover:bg-green-400",e===ft.ERROR&&"bg-red-300 hover:bg-red-400",e===ft.INVERSE&&"border-slate-300 bg-white hover:bg-green-400 hover:text-white",i&&"cursor-not-allowed bg-slate-300 hover:bg-slate-400"),onClick:s,children:t})},em=t=>E.jsx(kt,{text:t.amount>0?`+${t.amount}`:t.amount.toString(),smallPadding:!0,type:t.amount>=0?ft.PRIMARY:ft.ERROR,onClick:()=>{t.onClick(t.amount)}}),zR=({item:t})=>{const[e,n]=b.useState(1),r=()=>{To(t,e)},i=()=>{To(t,e*-1)},s=a=>{To(t,a)},o=()=>{confirm(`Do you want to remove ${t.name}?`)&&EN(t)},l=()=>{wN(t)};return E.jsxs("tr",{className:"border border-solid border-black",children:[E.jsx("td",{className:"p-2",children:t.name}),E.jsxs("td",{className:"p-2",children:[t.amount," ",t.unit]}),E.jsx("td",{className:"px-4 py-2",children:E.jsxs("div",{className:"flex gap-1",children:[E.jsx("input",{type:"number",className:"w-10 rounded border border-solid border-black px-2 py-1 text-right focus:outline-none",value:e,onChange:a=>n(a.currentTarget.valueAsNumber)}),E.jsx(kt,{text:E.jsx(NR,{size:18}),smallPadding:!0,onClick:r}),E.jsx(kt,{text:E.jsx(IR,{size:18}),smallPadding:!0,type:ft.ERROR,onClick:i})]})}),E.jsxs("td",{className:"flex justify-center gap-1 px-4 py-2 ",children:[E.jsx(em,{amount:1,onClick:s}),E.jsx(em,{amount:-1,onClick:s})]}),E.jsx("td",{className:"px-2",children:E.jsxs("div",{className:"flex gap-2",children:[E.jsx(kt,{text:E.jsx(bR,{size:18}),smallPadding:!0,disabled:t.inShoppingCart,onClick:l}),E.jsx(kt,{text:E.jsx(LR,{size:18}),smallPadding:!0,type:ft.ERROR,onClick:o})]})})]})},$R=t=>{const e=()=>{t.setValue("")};return E.jsxs("div",{className:"flex items-center gap-1 border border-solid border-black p-2",children:[E.jsx(PR,{size:16}),E.jsx("input",{type:"text",className:"focus:outline-none",placeholder:"Search",value:t.value,onChange:n=>{t.setValue(n.currentTarget.value)}}),E.jsx(Nh,{size:16,className:"cursor-pointer",onClick:e})]})},WR=()=>{const{user:t}=b.useContext(Bl),[e,n]=b.useState([]),[r,i]=b.useState([]),[s,o]=b.useState("");return b.useEffect(()=>{t?Ty(l=>{n(l)}):n([])},[t]),b.useEffect(()=>{Zp.setCollection(e)},[e]),b.useEffect(()=>{if(!s){i(e);return}const l=setTimeout(()=>{i(Zp.search(s).map(a=>a.item))},200);return()=>{clearTimeout(l)}},[s,e]),E.jsxs("div",{className:"flex flex-col gap-2",children:[E.jsx("div",{className:"flex justify-end",children:E.jsx($R,{value:s,setValue:o})}),E.jsxs("table",{className:"table-fixed border-collapse bg-white",children:[E.jsx("thead",{children:E.jsxs("tr",{children:[E.jsx("th",{className:"w-40 border border-solid border-black",children:"Name"}),E.jsx("th",{className:"w-32 border border-solid border-black",children:"Amount"}),E.jsx("th",{className:"border border-solid border-black",children:"Update"}),E.jsx("th",{className:"border border-solid border-black",children:"Quick Update"}),E.jsx("th",{className:"w-20 border border-solid border-black",children:"Actions"})]})}),E.jsx("tbody",{children:r.map(l=>E.jsx(zR,{item:l},l.id))})]})]})},BR=()=>{const{user:t}=b.useContext(Bl),[e,n]=b.useState(""),[r,i]=b.useState(0),[s,o]=b.useState(""),l=()=>{yN({name:e,amount:r,unit:s}).catch(a=>{console.log(a)}).finally(()=>{n(""),i(0),o("")})};return E.jsxs("div",{className:"flex flex-col gap-2",children:[E.jsx("div",{className:"text-lg font-bold",children:"Add new item"}),E.jsx("input",{type:"text",value:e,placeholder:"Name",className:"rounded border border-solid border-black px-2 py-1 focus:outline-none",onChange:a=>n(a.currentTarget.value)}),E.jsx("input",{type:"number",value:r,placeholder:"Amount",className:"rounded border border-solid border-black px-2 py-1 focus:outline-none",onChange:a=>i(a.currentTarget.valueAsNumber)}),E.jsx("input",{type:"text",value:s,placeholder:"Unit",className:"rounded border border-solid border-black px-2 py-1 focus:outline-none",onChange:a=>o(a.currentTarget.value)}),E.jsx(kt,{text:"Add",disabled:!t,onClick:l})]})};var Wy={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var l=n.apply(null,s);l&&r.push(l)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var a in s)e.call(s,a)&&s[a]&&r.push(a)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Wy);var VR=Wy.exports;const Ai=Il(VR);function HR(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)}var Rh=!1;if(typeof window<"u"){var tm={get passive(){Rh=!0}};window.addEventListener("testPassive",null,tm),window.removeEventListener("testPassive",null,tm)}var By=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),fn=[],El=!1,Vy=-1,Gi=void 0,Qi=void 0,Hy=function(e){return fn.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(e))})},Sl=function(e){var n=e||window.event;return Hy(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},KR=function(e){if(Qi===void 0){var n=!!e&&e.reserveScrollBarGap===!0,r=window.innerWidth-document.documentElement.clientWidth;n&&r>0&&(Qi=document.body.style.paddingRight,document.body.style.paddingRight=r+"px")}Gi===void 0&&(Gi=document.body.style.overflow,document.body.style.overflow="hidden")},GR=function(){Qi!==void 0&&(document.body.style.paddingRight=Qi,Qi=void 0),Gi!==void 0&&(document.body.style.overflow=Gi,Gi=void 0)},QR=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},YR=function(e,n){var r=e.targetTouches[0].clientY-Vy;return Hy(e.target)?!1:n&&n.scrollTop===0&&r>0||QR(n)&&r<0?Sl(e):(e.stopPropagation(),!0)},qR=function(e,n){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!fn.some(function(i){return i.targetElement===e})){var r={targetElement:e,options:n||{}};fn=[].concat(HR(fn),[r]),By?(e.ontouchstart=function(i){i.targetTouches.length===1&&(Vy=i.targetTouches[0].clientY)},e.ontouchmove=function(i){i.targetTouches.length===1&&YR(i,e)},El||(document.addEventListener("touchmove",Sl,Rh?{passive:!1}:void 0),El=!0)):KR(n)}},XR=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}fn=fn.filter(function(n){return n.targetElement!==e}),By?(e.ontouchstart=null,e.ontouchmove=null,El&&fn.length===0&&(document.removeEventListener("touchmove",Sl,Rh?{passive:!1}:void 0),El=!1)):fn.length||GR()};function JR(t=null){let[e,n]=F.useState(t);const{current:r}=F.useRef({current:e});return Object.defineProperty(r,"current",{get:()=>e,set:i=>{Object.is(e,i)||(e=i,n(i))}}),r}function ZR(t,e={isStateful:!0}){const n=JR(null),r=b.useRef(null),i=e.isStateful?n:r;return F.useEffect(()=>{!t||(typeof t=="function"?t(i.current):t.current=i.current)}),i}function Cl(){return Cl=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cl.apply(this,arguments)}var ex=function(e){var n=e.classes,r=e.classNames,i=e.styles,s=e.id,o=e.closeIcon,l=e.onClick;return F.createElement("button",{id:s,className:Ai(n.closeButton,r==null?void 0:r.closeButton),style:i==null?void 0:i.closeButton,onClick:l,"data-testid":"close-button"},o||F.createElement("svg",{className:r==null?void 0:r.closeIcon,style:i==null?void 0:i.closeIcon,width:28,height:28,viewBox:"0 0 36 36","data-testid":"close-icon"},F.createElement("path",{d:"M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"})))},No=typeof window<"u",Ky=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'];function tx(t){return t.offsetParent===null||getComputedStyle(t).visibility==="hidden"}function nx(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]}function rx(t){if(t.tagName!=="INPUT"||t.type!=="radio"||!t.name)return!0;var e=t.form||t.ownerDocument,n=e.querySelectorAll('input[type="radio"][name="'+t.name+'"]'),r=nx(n,t.form);return r===t||r===void 0&&n[0]===t}function Gy(t){for(var e=document.activeElement,n=t.querySelectorAll(Ky.join(",")),r=[],i=0;i<n.length;i++){var s=n[i];(e===s||!s.disabled&&sx(s)>-1&&!tx(s)&&rx(s))&&r.push(s)}return r}function ix(t,e){if(!(!t||t.key!=="Tab")){if(!e||!e.contains)return process,!1;if(!e.contains(t.target))return!1;var n=Gy(e),r=n[0],i=n[n.length-1];return t.shiftKey&&t.target===r?(i.focus(),t.preventDefault(),!0):!t.shiftKey&&t.target===i?(r.focus(),t.preventDefault(),!0):!1}}function sx(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?ox(t)?0:t.tabIndex:e}function ox(t){return t.getAttribute("contentEditable")}var lx=function(e){var n=e.container,r=e.initialFocusRef,i=b.useRef();return b.useEffect(function(){var s=function(u){n!=null&&n.current&&ix(u,n.current)};if(No&&document.addEventListener("keydown",s),No&&(n!=null&&n.current)){var o=function(){Ky.findIndex(function(u){var d;return(d=document.activeElement)==null?void 0:d.matches(u)})!==-1&&(i.current=document.activeElement)};if(r)o(),requestAnimationFrame(function(){var a;(a=r.current)==null||a.focus()});else{var l=Gy(n.current);l[0]&&(o(),l[0].focus())}}return function(){if(No){var a;document.removeEventListener("keydown",s),(a=i.current)==null||a.focus()}}},[n,r]),null},gr=[],kc={add:function(e){gr.push(e)},remove:function(e){gr=gr.filter(function(n){return n!==e})},isTopModal:function(e){return!!gr.length&&gr[gr.length-1]===e}};function ax(t,e){b.useEffect(function(){return e&&kc.add(t),function(){kc.remove(t)}},[e,t])}var ux=function(e,n,r,i,s){var o=b.useRef(null);b.useEffect(function(){return n&&e.current&&i&&(o.current=e.current,qR(e.current,{reserveScrollBarGap:s})),function(){o.current&&(XR(o.current),o.current=null)}},[n,r,e,i,s])},Et={root:"react-responsive-modal-root",overlay:"react-responsive-modal-overlay",overlayAnimationIn:"react-responsive-modal-overlay-in",overlayAnimationOut:"react-responsive-modal-overlay-out",modalContainer:"react-responsive-modal-container",modalContainerCenter:"react-responsive-modal-containerCenter",modal:"react-responsive-modal-modal",modalAnimationIn:"react-responsive-modal-modal-in",modalAnimationOut:"react-responsive-modal-modal-out",closeButton:"react-responsive-modal-closeButton"},cx=F.forwardRef(function(t,e){var n,r,i,s,o=t.open,l=t.center,a=t.blockScroll,u=a===void 0?!0:a,d=t.closeOnEsc,c=d===void 0?!0:d,h=t.closeOnOverlayClick,g=h===void 0?!0:h,_=t.container,v=t.showCloseIcon,x=v===void 0?!0:v,p=t.closeIconId,f=t.closeIcon,m=t.focusTrapped,y=m===void 0?!0:m,I=t.initialFocusRef,k=I===void 0?void 0:I,C=t.animationDuration,T=C===void 0?300:C,P=t.classNames,O=t.styles,fe=t.role,Fe=fe===void 0?"dialog":fe,Xt=t.ariaDescribedby,Te=t.ariaLabelledby,Jt=t.containerId,Zt=t.modalId,Dn=t.onClose,N=t.onEscKeyDown,D=t.onOverlayClick,j=t.onAnimationEnd,te=t.children,ue=t.reserveScrollBarGap,Ln=ZR(e),Ze=b.useRef(null),yt=b.useRef(null),we=b.useRef(null);we.current===null&&No&&(we.current=document.createElement("div"));var Fn=b.useState(!1),pi=Fn[0],xh=Fn[1];ax(Ze,o),ux(Ze,o,pi,u,ue);var Qy=function(){we.current&&!_&&!document.body.contains(we.current)&&document.body.appendChild(we.current),document.addEventListener("keydown",Ph)},Yy=function(){we.current&&!_&&document.body.contains(we.current)&&document.body.removeChild(we.current),document.removeEventListener("keydown",Ph)},Ph=function($s){$s.keyCode!==27||!kc.isTopModal(Ze)||(N==null||N($s),c&&Dn())};b.useEffect(function(){return function(){pi&&Yy()}},[pi]),b.useEffect(function(){o&&!pi&&(xh(!0),Qy())},[o]);var qy=function($s){if(yt.current===null&&(yt.current=!0),!yt.current){yt.current=null;return}D==null||D($s),g&&Dn(),yt.current=null},oa=function(){yt.current=!1},Xy=function(){o||xh(!1),j==null||j()},Oh=_||we.current,Jy=o?(n=P==null?void 0:P.overlayAnimationIn)!=null?n:Et.overlayAnimationIn:(r=P==null?void 0:P.overlayAnimationOut)!=null?r:Et.overlayAnimationOut,Zy=o?(i=P==null?void 0:P.modalAnimationIn)!=null?i:Et.modalAnimationIn:(s=P==null?void 0:P.modalAnimationOut)!=null?s:Et.modalAnimationOut;return pi&&Oh?IE.createPortal(F.createElement("div",{className:Ai(Et.root,P==null?void 0:P.root),style:O==null?void 0:O.root,"data-testid":"root"},F.createElement("div",{className:Ai(Et.overlay,P==null?void 0:P.overlay),"data-testid":"overlay","aria-hidden":!0,style:Cl({animation:Jy+" "+T+"ms"},O==null?void 0:O.overlay)}),F.createElement("div",{ref:Ze,id:Jt,className:Ai(Et.modalContainer,l&&Et.modalContainerCenter,P==null?void 0:P.modalContainer),style:O==null?void 0:O.modalContainer,"data-testid":"modal-container",onClick:qy},F.createElement("div",{ref:Ln,className:Ai(Et.modal,P==null?void 0:P.modal),style:Cl({animation:Zy+" "+T+"ms"},O==null?void 0:O.modal),onMouseDown:oa,onMouseUp:oa,onClick:oa,onAnimationEnd:Xy,id:Zt,role:Fe,"aria-modal":"true","aria-labelledby":Te,"aria-describedby":Xt,"data-testid":"modal",tabIndex:-1},y&&F.createElement(lx,{container:Ln,initialFocusRef:k}),te,x&&F.createElement(ex,{classes:Et,classNames:P,styles:O,closeIcon:f,onClick:Dn,id:p})))),Oh):null});const dx=t=>{const[e,n]=b.useState(0),r=()=>{t.item&&(To(t.item,e),Ry(t.item),t.onClose(),n(0))};return E.jsx(cx,{open:t.isOpen,onClose:t.onClose,closeIcon:E.jsx(Nh,{}),center:!0,children:t.item&&E.jsxs("div",{className:"flex flex-col gap-2",children:[E.jsxs("p",{children:["Buy ",t.item.name," ",t.item.unit]}),E.jsx("input",{type:"number",placeholder:"Amount",value:e,className:"rounded border border-solid border-black p-2",onChange:i=>{n(i.currentTarget.valueAsNumber)}}),E.jsx("div",{className:"flex justify-end",children:E.jsx(kt,{text:E.jsx(mR,{size:18}),smallPadding:!0,onClick:r})})]})})},hx=()=>{const{user:t}=b.useContext(Bl),[e,n]=b.useState([]),[r,i]=b.useState(),[s,o]=b.useState(!1),l=()=>o(!0),a=()=>o(!1),u=c=>()=>{i(c),l()},d=c=>()=>{Ry(c)};return b.useEffect(()=>{t?Ty(c=>{n(c)}):n([])},[t]),E.jsxs("div",{className:"flex flex-col gap-2",children:[E.jsx("div",{className:"text-lg font-bold",children:"Shopping Cart"}),E.jsxs("table",{children:[E.jsx("thead",{children:E.jsxs("tr",{children:[E.jsx("th",{className:"border border-solid border-black p-2 text-left",children:"Item"}),E.jsx("th",{className:"border border-solid border-black p-2 text-left",children:"Remain"}),E.jsx("th",{className:"border border-solid border-black p-2 text-left",children:"Actions"})]})}),E.jsx("tbody",{children:e.filter(c=>c.inShoppingCart).map(c=>E.jsxs("tr",{className:"divide-x divide-black border border-solid border-black",children:[E.jsx("td",{className:" p-2",children:c.name}),E.jsx("td",{className:" p-2",children:`${c.amount} ${c.unit}`}),E.jsx("td",{className:" p-2",children:E.jsxs("div",{className:"flex gap-2",children:[E.jsx(kt,{text:E.jsx(vR,{size:18}),smallPadding:!0,onClick:u(c)}),E.jsx(kt,{text:E.jsx(Nh,{size:18}),smallPadding:!0,type:ft.ERROR,onClick:d(c)})]})})]},c.id))})]}),E.jsx(dx,{isOpen:s,item:r,onClose:a})]})};function fx(){const[t,e]=b.useState(),n=b.useMemo(()=>({user:t}),[t]),r=async()=>{try{const s=await _N();e(s)}catch(s){console.error(s)}},i=async()=>{try{await vN(),e(void 0)}catch(s){console.error(s)}};return b.useEffect(()=>{rT(ia,s=>{s&&e(s)})},[]),E.jsx(Bl.Provider,{value:n,children:E.jsxs("div",{className:"h-screen w-screen overflow-auto bg-green-300",children:[E.jsx("h1",{className:"my-6 text-center text-3xl font-bold",children:"Household item tracker"}),E.jsxs("div",{className:"flex flex-col gap-1",children:[E.jsx("div",{className:"flex justify-center",children:t?E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("img",{className:"aspect-square w-10 rounded-full border border-solid border-white",src:t.photoURL??"https://placehold.co/200",alt:"image",referrerPolicy:"no-referrer"}),E.jsx("div",{className:"text-lg font-bold",children:t.displayName}),E.jsx(kt,{text:E.jsx(ER,{}),type:ft.INVERSE,smallPadding:!0,onClick:i})]}):E.jsx("div",{className:"cursor-pointer border border-solid border-black bg-white p-2",onClick:r,children:"Log In"})}),E.jsxs("div",{className:"flex justify-center gap-1",children:[E.jsx("div",{className:"border border-solid border-black bg-white p-2",children:E.jsx(WR,{})}),E.jsxs("div",{className:"flex flex-col gap-2",children:[E.jsx("div",{className:"rounded-r border border-solid border-black bg-white px-4 py-2",children:E.jsx(BR,{})}),E.jsx("div",{className:"rounded-r border border-solid border-black bg-white px-4 py-2",children:E.jsx(hx,{})})]})]})]})]})})}Qa.createRoot(document.getElementById("root")).render(E.jsx(F.StrictMode,{children:E.jsx(fx,{})}));
