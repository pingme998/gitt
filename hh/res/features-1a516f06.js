!function(){"use strict";var e=function(){for(var e=new Uint32Array(256),t=256;t--;){for(var n=t,o=8;o--;)n=1&n?3988292384^n>>>1:n>>>1;e[t]=n}return function(t){var n=-1;"string"==typeof t&&(t=function(e){for(var t=e.length,n=new Array(t),o=-1;++o<t;)n[o]=e.charCodeAt(o);return n}(t));for(var o=0,r=t.length;o<r;o++)n=n>>>8^e[255&n^t[o]];return(-1^n)>>>0}}();function t(...e){return JSON.stringify(e,((e,t)=>"object"==typeof t?t:String(t)))}function n(e,n={}){const{hash:o=t,cache:r=new Map}=n;return function(...t){const n=o.apply(this,t);if(r.has(n))return r.get(n);let i=e.apply(this,t);return i instanceof Promise&&(i=i.catch((e=>{throw r.delete(n),e}))),r.set(n,i),i}}class Feature{constructor(e,t,n,o){this.name=e,this.enabled=t,this.percentageOfActors=n,this.actors=o}isEnabled(e){return this.enabled||this.actorGateOpen(e)||this.percentageOfActorsGateOpen(e)}percentageOfActorsGateOpen(t){if(!t||this.percentageOfActors<1)return!1;const n=`${this.name}${t}`;var o,r,i;return(i=e(n),o?((r=i)<0&&(r=4294967295+r+1),("0000000"+r.toString(16)).slice(-8)):i)%1e5<1e3*this.percentageOfActors}actorGateOpen(e){return!(!e||this.actors.length<1)&&this.actors.includes(e)}}function o(e){return!("object"!=typeof e||!e)&&!!("name"in e&&"string"==typeof e.name&&"enabled"in e&&"boolean"==typeof e.enabled&&"percentageOfActors"in e&&"number"==typeof e.percentageOfActors&&"actors"in e&&Array.isArray(e.actors))}class FeaturesDatafile{constructor(e){this.features=(e.features||[]).filter(o).map((e=>new Feature(e.name,e.enabled,e.percentageOfActors,e.actors)))}getFeature(e){return this.features.find((t=>t.name===e))}}const r=n((function(){var e;const t=null===(e=document.head)||void 0===e?void 0:e.querySelector('meta[name="features-datafile"]'),n=(null==t?void 0:t.content)||"{}",o=JSON.parse(n);return new FeaturesDatafile(o)}));function i(){if(!(this instanceof i))return new i;this.size=0,this.uid=0,this.selectors=[],this.indexes=Object.create(this.indexes),this.activeIndexes=[]}var a=window.document.documentElement,s=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector;i.prototype.matchesSelector=function(e,t){return s.call(e,t)},i.prototype.querySelectorAll=function(e,t){return t.querySelectorAll(e)},i.prototype.indexes=[];var c=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;i.prototype.indexes.push({name:"ID",selector:function(e){var t;if(t=e.match(c))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var l=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;i.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(l))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if("string"==typeof t)return t.split(/\s/);if("object"==typeof t&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var u,d=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;i.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(d))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}}),i.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},u="function"==typeof window.Map?window.Map:function(){function e(){this.map={}}return e.prototype.get=function(e){return this.map[e+" "]},e.prototype.set=function(e,t){this.map[e+" "]=t},e}();var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function h(e,t){var n,o,r,i,a,s,c=(e=e.slice(0).concat(e.default)).length,l=t,u=[];do{if(f.exec(""),(r=f.exec(l))&&(l=r[3],r[2]||!l))for(n=0;n<c;n++)if(a=(s=e[n]).selector(r[1])){for(o=u.length,i=!1;o--;)if(u[o].index===s&&u[o].key===a){i=!0;break}i||u.push({index:s,key:a});break}}while(r);return u}function m(e,t){var n,o,r;for(n=0,o=e.length;n<o;n++)if(r=e[n],t.isPrototypeOf(r))return r}function v(e,t){return e.id-t.id}i.prototype.logDefaultIndexUsed=function(){},i.prototype.add=function(e,t){var n,o,r,i,a,s,c,l,d=this.activeIndexes,f=this.selectors;if("string"==typeof e){for(n={id:this.uid++,selector:e,data:t},c=h(this.indexes,e),o=0;o<c.length;o++)i=(l=c[o]).key,(a=m(d,r=l.index))||((a=Object.create(r)).map=new u,d.push(a)),r===this.indexes.default&&this.logDefaultIndexUsed(n),(s=a.map.get(i))||(s=[],a.map.set(i,s)),s.push(n);this.size++,f.push(e)}},i.prototype.remove=function(e,t){if("string"==typeof e){var n,o,r,i,a,s,c,l,u=this.activeIndexes,d={},f=1===arguments.length;for(n=h(this.indexes,e),r=0;r<n.length;r++)for(o=n[r],i=u.length;i--;)if(s=u[i],o.index.isPrototypeOf(s)){if(c=s.map.get(o.key))for(a=c.length;a--;)(l=c[a]).selector!==e||!f&&l.data!==t||(c.splice(a,1),d[l.id]=!0);break}this.size-=Object.keys(d).length}},i.prototype.queryAll=function(e){if(!this.selectors.length)return[];var t,n,o,r,i,a,s,c,l={},u=[],d=this.querySelectorAll(this.selectors.join(", "),e);for(t=0,o=d.length;t<o;t++)for(i=d[t],n=0,r=(a=this.matches(i)).length;n<r;n++)l[(c=a[n]).id]?s=l[c.id]:(s={id:c.id,selector:c.selector,data:c.data,elements:[]},l[c.id]=s,u.push(s)),s.elements.push(i);return u.sort(v)},i.prototype.matches=function(e){if(!e)return[];var t,n,o,r,i,a,s,c,l,u,d,f=this.activeIndexes,h={},m=[];for(t=0,r=f.length;t<r;t++)if(c=(s=f[t]).element(e))for(n=0,i=c.length;n<i;n++)if(l=s.map.get(c[n]))for(o=0,a=l.length;o<a;o++)!h[d=(u=l[o]).id]&&this.matchesSelector(e,u.selector)&&(h[d]=!0,m.push(u));return m.sort(v)};var p={},g={},y=new WeakMap,b=new WeakMap,w=new WeakMap,S=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function A(e,t,n){var o=e[t];return e[t]=function(){return n.apply(e,arguments),o.apply(e,arguments)},e}function O(){y.set(this,!0)}function M(){y.set(this,!0),b.set(this,!0)}function x(){return w.get(this)||null}function k(e,t){S&&Object.defineProperty(e,"currentTarget",{configurable:!0,enumerable:!0,get:t||S.get})}function E(e){if(function(e){try{return e.eventPhase,!0}catch(t){return!1}}(e)){var t=(1===e.eventPhase?g:p)[e.type];if(t){var n=function(e,t,n){var o=[],r=t;do{if(1!==r.nodeType)break;var i=e.matches(r);if(i.length){var a={node:r,observers:i};n?o.unshift(a):o.push(a)}}while(r=r.parentElement);return o}(t,e.target,1===e.eventPhase);if(n.length){A(e,"stopPropagation",O),A(e,"stopImmediatePropagation",M),k(e,x);for(var o=0,r=n.length;o<r&&!y.get(e);o++){var i=n[o];w.set(e,i.node);for(var a=0,s=i.observers.length;a<s&&!b.get(e);a++)i.observers[a].data.call(i.node,e)}w.delete(e),k(e)}}}}function q(e){const t=[];for(const n of function(){try{return document.cookie.split(";")}catch(e){return[]}}()){const[o,r]=n.trim().split("=");e===o&&void 0!==r&&t.push({key:o,value:r})}return t}function T(){const e=(new Date).getTime(),t=`${Math.round(Math.random()*(Math.pow(2,31)-1))}.${Math.round(e/1e3)}`;return function(e,t,n=null,o=!1,r="lax"){let i=document.domain;if(null==i)throw new Error("Unable to get document domain");i.endsWith(".github.com")&&(i="github.com");const a="https:"===location.protocol?"; secure":"",s=n?"; expires="+n:"";!1===o&&(i="."+i);try{document.cookie=`${e}=${t}; path=/; domain=${i}${s}${a}; samesite=${r}`}catch(c){}}("_octo","GH1.1."+t,new Date(e+31536e6).toUTCString()),t}!function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=!!o.capture,a=r?g:p,s=a[e];s||(s=new i,a[e]=s,document.addEventListener(e,E,r)),s.add(t,n)}("click","[data-octo-click]",(function(e){if(!window._octo)return;const t=e.currentTarget,n=t instanceof HTMLElement&&t.getAttribute("data-octo-click")||"",o={};o.event_type=n;const r={},i={},a={};let s=[];t instanceof HTMLElement&&t.hasAttribute("data-octo-dimensions")&&(s=(t.getAttribute("data-octo-dimensions")||"").split(","));const c=document.head?document.head.querySelectorAll('meta[name^="octolytics-"]'):[];for(const u of c)if(u instanceof HTMLMetaElement)if(u.name.startsWith("octolytics-dimension-")){r[u.name.replace(/^octolytics-dimension-/,"")]=u.content}else if(u.name.startsWith("octolytics-measure-")){i[u.name.replace(/^octolytics-measure-/,"")]=u.content}else if(u.name.startsWith("octolytics-context-")){a[u.name.replace(/^octolytics-context-/,"")]=u.content}else if(u.name.startsWith("octolytics-actor-")){r[u.name.replace(/^octolytics-/,"").replace(/-/g,"_")]=u.content}else if(u.name.startsWith("octolytics-")){o[u.name.replace(/^octolytics-/,"").replace(/-/g,"_")]=u.content}const l=document.querySelector("meta[name=visitor-payload]");if(l instanceof HTMLMetaElement){const e=JSON.parse(atob(l.content));Object.assign(r,e)}if(t instanceof HTMLElement&&t.hasAttribute("data-ga-click")){const e=(t.getAttribute("data-ga-click")||"").split(",").map((e=>e.trim()));r.category=e[0],r.action=e[1]}for(const u of s){const e=u.split(":"),t=e.shift();t&&(r[t]=e.join(":"))}o.dimensions=r,o.measures=i,o.context=a,function(e){if(!window._octo)return;const t=Math.floor((new Date).getTime()/1e3);e.timestamp=t;const n='meta[name="octolytics-event-url"]';if(document.head&&document.head.querySelector(n)){const t=document.head.querySelector(n).content,r=JSON.stringify(e);try{navigator.sendBeacon&&navigator.sendBeacon(t,r)}catch(o){}}}(o)}));const N=n((function(){var e,t;return((null===(t=null===(e=document.head)||void 0===e?void 0:e.querySelector('meta[name="enabled-features"]'))||void 0===t?void 0:t.content)||"").split(",")}));const D=n((function(e){return-1!==N().indexOf(e)}));var C=null,L=null,F=[];function P(e,t){var n=[];function o(){var e=n;n=[],t(e)}return function(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];n.push(r),1===n.length&&_(e,o)}}function _(e,t){L||(L=new MutationObserver(j)),C||(C=e.createElement("div"),L.observe(C,{attributes:!0})),F.push(t),C.setAttribute("data-twiddle",""+Date.now())}function j(){var e=F;F=[];for(var t=0;t<e.length;t++)try{e[t]()}catch(n){setTimeout((function(){throw n}),0)}}var H=new WeakMap,W=new WeakMap,$=new WeakMap,I=new WeakMap;function z(e,t){for(var n=0;n<t.length;n++){var o=t[n],r=o[0],i=o[1],a=o[2];r===K?(U(a,i),G(a,i)):r===Q?J(a,i):r===X&&V(e.observers,i)}}function U(e,t){if(t instanceof e.elementConstructor){var n=H.get(t);if(n||(n=[],H.set(t,n)),-1===n.indexOf(e.id)){var o=void 0;if(e.initialize&&(o=e.initialize.call(void 0,t)),o){var r=W.get(t);r||(r={},W.set(t,r)),r[""+e.id]=o}n.push(e.id)}}}function G(e,t){if(t instanceof e.elementConstructor){var n=I.get(t);if(n||(n=[],I.set(t,n)),-1===n.indexOf(e.id)){e.elements.push(t);var o=W.get(t),r=o?o[""+e.id]:null;if(r&&r.add&&r.add.call(void 0,t),e.subscribe){var i=e.subscribe.call(void 0,t);if(i){var a=$.get(t);a||(a={},$.set(t,a)),a[""+e.id]=i}}e.add&&e.add.call(void 0,t),n.push(e.id)}}}function J(e,t){if(t instanceof e.elementConstructor){var n=I.get(t);if(n){var o=e.elements.indexOf(t);if(-1!==o&&e.elements.splice(o,1),-1!==(o=n.indexOf(e.id))){var r=W.get(t),i=r?r[""+e.id]:null;if(i&&i.remove&&i.remove.call(void 0,t),e.subscribe){var a=$.get(t),s=a?a[""+e.id]:null;s&&s.unsubscribe&&s.unsubscribe()}e.remove&&e.remove.call(void 0,t),n.splice(o,1)}0===n.length&&I.delete(t)}}}function V(e,t){var n=I.get(t);if(n){for(var o=n.slice(0),r=0;r<o.length;r++){var i=e[o[r]];if(i){var a=i.elements.indexOf(t);-1!==a&&i.elements.splice(a,1);var s=W.get(t),c=s?s[""+i.id]:null;c&&c.remove&&c.remove.call(void 0,t);var l=$.get(t),u=l?l[""+i.id]:null;u&&u.unsubscribe&&u.unsubscribe(),i.remove&&i.remove.call(void 0,t)}}I.delete(t)}}var B=null;function R(e){return"matches"in e||"webkitMatchesSelector"in e||"mozMatchesSelector"in e||"oMatchesSelector"in e||"msMatchesSelector"in e}var K=1,Q=2,X=3;function Y(e,t,n){for(var o=0;o<n.length;o++){var r=n[o];"childList"===r.type?(Z(e,t,r.addedNodes),ee(e,t,r.removedNodes)):"attributes"===r.type&&te(e,t,r.target)}(function(e){if(null===B){var t=e.createElement("div"),n=e.createElement("div"),o=e.createElement("div");t.appendChild(n),n.appendChild(o),t.innerHTML="",B=o.parentNode!==n}return B})(e.ownerDocument)&&function(e,t){for(var n=0;n<e.observers.length;n++){var o=e.observers[n];if(o)for(var r=o.elements,i=0;i<r.length;i++){var a=r[i];a.parentNode||t.push([X,a])}}}(e,t)}function Z(e,t,n){for(var o=0;o<n.length;o++){var r=n[o];if(R(r))for(var i=e.selectorSet.matches(r),a=0;a<i.length;a++){var s=i[a].data;t.push([K,r,s])}if("querySelectorAll"in r)for(var c=e.selectorSet.queryAll(r),l=0;l<c.length;l++)for(var u=c[l],d=u.data,f=u.elements,h=0;h<f.length;h++)t.push([K,f[h],d])}}function ee(e,t,n){for(var o=0;o<n.length;o++){var r=n[o];if("querySelectorAll"in r){t.push([X,r]);for(var i=r.querySelectorAll("*"),a=0;a<i.length;a++)t.push([X,i[a]])}}}function te(e,t,n){if(R(n))for(var o=e.selectorSet.matches(n),r=0;r<o.length;r++){var i=o[r].data;t.push([K,n,i])}if("querySelectorAll"in n){var a=I.get(n);if(a)for(var s=0;s<a.length;s++){var c=e.observers[a[s]];c&&(e.selectorSet.matchesSelector(n,c.selector)||t.push([Q,n,c]))}}}var ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oe=0;function re(e){this.rootNode=9===e.nodeType?e.documentElement:e,this.ownerDocument=9===e.nodeType?e:e.ownerDocument,this.observers=[],this.selectorSet=new i,this.mutationObserver=new MutationObserver(se.bind(this,this)),this._scheduleAddRootNodes=P(this.ownerDocument,ae.bind(this,this)),this._handleThrottledChangedTargets=P(this.ownerDocument,le.bind(this,this)),this.rootNode.addEventListener("change",ce.bind(this,this),!1),function(e,t){var n=e.readyState;"interactive"===n||"complete"===n?_(e,t):e.addEventListener("DOMContentLoaded",_(e,t))}(this.ownerDocument,ie.bind(this,this))}function ie(e){e.mutationObserver.observe(e.rootNode,{childList:!0,attributes:!0,subtree:!0}),e._scheduleAddRootNodes()}function ae(e){var t=[];Z(e,t,[e.rootNode]),z(e,t)}function se(e,t){var n=[];Y(e,n,t),z(e,n)}function ce(e,t){e._handleThrottledChangedTargets(t.target)}function le(e,t){var n=[];!function(e,t,n){for(var o=0;o<n.length;o++)for(var r=n[o],i=r.form?r.form.elements:e.rootNode.querySelectorAll("input"),a=0;a<i.length;a++)te(e,t,i[a])}(e,n,t),z(e,n)}re.prototype.disconnect=function(){this.mutationObserver.disconnect()},re.prototype.observe=function(e,t){var n=void 0;"function"==typeof t?n={selector:e,initialize:t}:"object"===(void 0===t?"undefined":ne(t))?(n=t).selector=e:n=e;var o=this,r={id:oe++,selector:n.selector,initialize:n.initialize,add:n.add,remove:n.remove,subscribe:n.subscribe,elements:[],elementConstructor:n.hasOwnProperty("constructor")?n.constructor:this.ownerDocument.defaultView.Element,abort:function(){o._abortObserving(r)}};return this.selectorSet.add(r.selector,r),this.observers[r.id]=r,this._scheduleAddRootNodes(),r},re.prototype._abortObserving=function(e){for(var t=e.elements,n=0;n<t.length;n++)J(e,t[n]);this.selectorSet.remove(e.selector,e),delete this.observers[e.id]},re.prototype.triggerObservers=function(e){var t=[];!function(e,t,n){if("querySelectorAll"in n){te(e,t,n);for(var o=n.querySelectorAll("*"),r=0;r<o.length;r++)te(e,t,o[r])}}(this,t,e),z(this,t)};var ue=void 0;function de(){return ue||(ue=new re(window.document)),ue}"interactive"===document.readyState||"complete"===document.readyState?Promise.resolve():new Promise((e=>{document.addEventListener("DOMContentLoaded",(()=>{e()}))}));const fe="complete"===document.readyState?Promise.resolve():new Promise((e=>{window.addEventListener("load",e)}));let he=[];function me(e,t=!1){var n,o;void 0===e.timestamp&&(e.timestamp=(new Date).getTime()),e.loggedIn=!!(null===(o=null===(n=document.head)||void 0===n?void 0:n.querySelector('meta[name="user-login"]'))||void 0===o?void 0:o.content),he.push(e),t?pe():async function(){await fe,null==ve&&(ve=window.requestIdleCallback(pe))}()}let ve=null;function pe(){var e,t;if(ve=null,function(e){var t,n;const o=null===(n=null===(t=e.head)||void 0===t?void 0:t.querySelector('meta[name="expected-hostname"]'))||void 0===n?void 0:n.content;return!!o&&o.replace(/\.$/,"").split(".").slice(-2).join(".")!==e.location.hostname.replace(/\.$/,"").split(".").slice(-2).join(".")}(document))return;const n=null===(t=null===(e=document.head)||void 0===e?void 0:e.querySelector('meta[name="browser-stats-url"]'))||void 0===t?void 0:t.content;if(!n)return;const o=JSON.stringify({stats:he});try{navigator.sendBeacon&&navigator.sendBeacon(n,o)}catch(r){}he=[]}function ge(e){const t=e.getAttribute("data-feature"),n="true"===e.getAttribute("data-show-when-feature-enabled");if(!t)return;const o=D(t)||function(e){const t=r().getFeature(e);if(!t)return!1;const n="User::CurrentVisitorActor:"+ye();return t.isEnabled(n)}(t);e.hidden=o?!n:n,function(e,t){if(!e.hasAttribute("data-feature-hydro")||!e.hasAttribute("data-feature-hydro-hmac"))return;const n=e.getAttribute("data-feature-hydro")||"",o=e.getAttribute("data-feature-hydro-hmac")||"";!function(e,t,n){const o={hydroEventPayload:e,hydroEventHmac:t,visitorPayload:"",visitorHmac:"",hydroClientContext:n},r=document.querySelector("meta[name=visitor-payload]");r instanceof HTMLMetaElement&&(o.visitorPayload=r.content);const i=document.querySelector("meta[name=visitor-hmac]")||"";i instanceof HTMLMetaElement&&(o.visitorHmac=i.content),me(o,!0)}(n,o,JSON.stringify({octolytics_id:ye(),feature_flag_enabled:t}))}(e,o)}function ye(){return"GH1.1."+(function(){let e="";const t=q("_octo"),n=[];for(const o of t){const t=o.value.split(".");if("GH1"===t.shift()&&t.length>1){const o=(t.shift()||"").split("-");1===o.length&&(o[1]="1");const r=[Number(o[0]),Number(o[1])];e=t.join("."),n.push([r,e])}}return e="",n.length>0&&(e=String(n.sort().reverse()[0][1])),e}()||T())}!function(){var e;(e=de()).observe.apply(e,arguments)}("[data-feature]",{add(e){ge(e)}})}();
//# sourceMappingURL=features-673f03e0.js.map
