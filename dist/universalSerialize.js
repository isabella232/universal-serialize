!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("universal-serialize",[],n):"object"==typeof exports?exports["universal-serialize"]=n():e["universal-serialize"]=n()}("undefined"!=typeof self?self:this,function(){return function(r){var t={};function i(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=r,i.c=t,i.d=function(e,n,r){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)i.d(r,t,function(e){return n[e]}.bind(null,t));return r},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i(i.s=0)}([function(e,n,r){"use strict";r.r(n);var t,u={FUNCTION:"function",ERROR:"error",PROMISE:"promise",REGEX:"regex",DATE:"date",ARRAY:"array",OBJECT:"object",STRING:"string",NUMBER:"number",BOOLEAN:"boolean",NULL:"null",UNDEFINED:"undefined"};function f(e){return"object"==typeof e&&null!==e&&"string"==typeof e.__type__}function c(e){return void 0===e?u.UNDEFINED:null===e?u.NULL:Array.isArray(e)?u.ARRAY:"function"==typeof e?u.FUNCTION:"object"==typeof e?e instanceof Error?u.ERROR:"function"==typeof e.then?u.PROMISE:"[object RegExp]"===Object.prototype.toString.call(e)?u.REGEX:"[object Date]"===Object.prototype.toString.call(e)?u.DATE:u.OBJECT:"string"==typeof e?u.STRING:"number"==typeof e?u.NUMBER:"boolean"==typeof e?u.BOOLEAN:void 0}function i(e,n){return{__type__:e,__val__:n}}function o(e){return e}function a(e){return e}function l(e){return e}function s(e){return e}function d(e){return i(u.DATE,e.toJSON())}function E(e){return new Date(e)}function p(e){var n=e.message,r=e.stack,t=e.code;return i(u.ERROR,{message:n,stack:r,code:t})}function R(e){var n=e.message,r=e.stack,t=e.code,i=new Error(n);return i.code=t,i.stack=r+"\n\n"+i.stack,i}function y(){}function N(){throw new Error("Function serialization is not implemented; nothing to deserialize")}function O(e){return e}function z(e){return e}function b(e){return e}function v(e){return e}function _(){}function m(){throw new Error("Promise serialization is not implemented; nothing to deserialize")}function g(e){return i(u.REGEX,e.source)}function T(e){return new RegExp(e)}function A(e){return e}function S(e){return e}function j(e){return e}function D(e){return e}var I,U=((t={})[u.FUNCTION]=y,t[u.ERROR]=p,t[u.PROMISE]=_,t[u.REGEX]=g,t[u.DATE]=d,t[u.ARRAY]=o,t[u.OBJECT]=b,t[u.STRING]=A,t[u.NUMBER]=O,t[u.BOOLEAN]=l,t[u.NULL]=j,t),x={};function B(e,i){void 0===i&&(i=x);var n=JSON.stringify(e,function(e){var n=this[e];if(f(this))return n;var r=c(n);if(!r)return n;var t=i[r]||U[r];return t?t(n,e):n});return void 0===n?u.UNDEFINED:n}var P=((I={})[u.FUNCTION]=N,I[u.ERROR]=R,I[u.PROMISE]=m,I[u.REGEX]=T,I[u.DATE]=E,I[u.ARRAY]=a,I[u.OBJECT]=v,I[u.STRING]=S,I[u.NUMBER]=z,I[u.BOOLEAN]=s,I[u.NULL]=D,I),L={};function M(e,o){if(void 0===o&&(o=L),e!==u.UNDEFINED)return JSON.parse(e,function(e,n){if(f(this))return n;var r,t;if(t=f(n)?(r=n.__type__,n.__val__):(r=c(n),n),!r)return t;var i=o[r]||P[r];return i?i(t,e):t})}r.d(n,"serialize",function(){return B}),r.d(n,"deserialize",function(){return M}),r.d(n,"serializeArray",function(){return o}),r.d(n,"deserializeArray",function(){return a}),r.d(n,"serializeBoolean",function(){return l}),r.d(n,"deserializeBoolean",function(){return s}),r.d(n,"serializeDate",function(){return d}),r.d(n,"deserializeDate",function(){return E}),r.d(n,"serializeError",function(){return p}),r.d(n,"deserializeError",function(){return R}),r.d(n,"serializeFunction",function(){return y}),r.d(n,"deserializeFunction",function(){return N}),r.d(n,"serializeNumber",function(){return O}),r.d(n,"deserializeNumber",function(){return z}),r.d(n,"serializeObject",function(){return b}),r.d(n,"deserializeObject",function(){return v}),r.d(n,"serializePromise",function(){return _}),r.d(n,"deserializePromise",function(){return m}),r.d(n,"serializeRegex",function(){return g}),r.d(n,"deserializeRegex",function(){return T}),r.d(n,"serializeString",function(){return A}),r.d(n,"deserializeString",function(){return S}),r.d(n,"serializeNull",function(){return j}),r.d(n,"deserializeNull",function(){return D}),r.d(n,"TYPE",function(){return u}),r.d(n,"isSerializedType",function(){return f}),r.d(n,"determineType",function(){return c}),r.d(n,"serializeType",function(){return i})}])});
//# sourceMappingURL=universalSerialize.js.map