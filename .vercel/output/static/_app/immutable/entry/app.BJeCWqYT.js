function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.BGJaeyGS.js","../chunks/scheduler.DdVwomBZ.js","../chunks/index.Z035ytyj.js","../chunks/bundle-mjs.CkgsDLdl.js","../chunks/control.Bl8ay-uf.js","../chunks/swiper-core.C8kc6biT.js","../chunks/entry.oKKfPan1.js","../chunks/stores.BRSyF36W.js","../assets/0.DuVJtF8T.css","../nodes/1.DQ9y1jKF.js","../nodes/2.DQ9y1jKF.js","../nodes/3.DQ9y1jKF.js","../nodes/4.BAsxQhGO.js","../nodes/5.DQ9y1jKF.js","../nodes/6.CdH2AjSd.js","../chunks/Button.Cf5DJGQx.js","../chunks/ani-card.BVMSqAX7.js","../nodes/7.COKoCx8N.js","../nodes/8.BYJERVMj.js","../nodes/9.DQQNVVd2.js","../nodes/10.WKkQCjaC.js","../nodes/11.BD3Ukfm-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as N,j as B,q as h,l as U,i as v,d as g,H as j,G,e as H,c as J,a as K,o as D,I as p,t as W,b as z,g as F,J as O,K as R,L as Q}from"../chunks/scheduler.DdVwomBZ.js";import{S as X,i as Y,b as w,e as I,t as E,g as y,c as L,a as T,m as P,d as A}from"../chunks/index.Z035ytyj.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},V={},d=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),s=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(n.map(o=>{if(o=M(o,i),o in V)return;V[o]=!0;const f=o.endsWith(".css"),l=f?'[rel="stylesheet"]':"";if(!!i)for(let b=_.length-1;b>=0;b--){const k=_[b];if(k.href===o&&(!f||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":Z,f||(u.as="script",u.crossOrigin=""),u.href=o,s&&u.setAttribute("nonce",s),document.head.appendChild(u),f)return new Promise((b,k)=>{u.addEventListener("load",b),u.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},se={};function $(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=R(r,_(a)),a[12](e)),{c(){e&&L(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&P(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){y();const o=e;w(o.$$.fragment,1,0,()=>{A(o,1)}),I()}r?(e=R(r,_(t)),t[12](e),L(e.$$.fragment),E(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&E(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[12](null),e&&A(e,t)}}}function x(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=R(r,_(a)),a[11](e)),{c(){e&&L(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&P(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){y();const o=e;w(o.$$.fragment,1,0,()=>{A(o,1)}),I()}r?(e=R(r,_(t)),t[11](e),L(e.$$.fragment),E(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&8215&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)}},i(t){i||(e&&E(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[11](null),e&&A(e,t)}}}function ee(a){let e,n,i;var r=a[1][1];function _(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=R(r,_(a)),a[10](e)),{c(){e&&L(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&P(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){y();const o=e;w(o.$$.fragment,1,0,()=>{A(o,1)}),I()}r?(e=R(r,_(t)),t[10](e),L(e.$$.fragment),E(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(r){const o={};s&16&&(o.data=t[4]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&E(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[10](null),e&&A(e,t)}}}function S(a){let e,n=a[6]&&q(a);return{c(){e=H("div"),n&&n.c(),this.h()},l(i){e=J(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=K(e);n&&n.l(r),r.forEach(g),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,r){v(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=q(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function q(a){let e;return{c(){e=W(a[7])},l(n){e=z(n,a[7])},m(n,i){v(n,e,i)},p(n,i){i&128&&F(e,n[7])},d(n){n&&g(e)}}}function te(a){let e,n,i,r,_;const t=[x,$],s=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=s[e]=t[e](a);let f=a[5]&&S(a);return{c(){n.c(),i=B(),f&&f.c(),r=h()},l(l){n.l(l),i=U(l),f&&f.l(l),r=h()},m(l,m){s[e].m(l,m),v(l,i,m),f&&f.m(l,m),v(l,r,m),_=!0},p(l,[m]){let u=e;e=o(l),e===u?s[e].p(l,m):(y(),w(s[u],1,1,()=>{s[u]=null}),I(),n=s[e],n?n.p(l,m):(n=s[e]=t[e](l),n.c()),E(n,1),n.m(i.parentNode,i)),l[5]?f?f.p(l,m):(f=S(l),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null)},i(l){_||(E(n),_=!0)},o(l){w(n),_=!1},d(l){l&&(g(i),g(r)),s[e].d(l),f&&f.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:_}=e,{components:t=[]}=e,{form:s}=e,{data_0:o=null}=e,{data_1:f=null}=e;j(i.page.notify);let l=!1,m=!1,u=null;G(()=>{const c=i.page.subscribe(()=>{l&&(n(6,m=!0),Q().then(()=>{n(7,u=document.title||"untitled page")}))});return n(5,l=!0),c});function b(c){O[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function k(c){O[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function C(c){O[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,r=c.page),"constructors"in c&&n(1,_=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,s=c.form),"data_0"in c&&n(3,o=c.data_0),"data_1"in c&&n(4,f=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,_,s,o,f,l,m,u,i,r,b,k,C]}class oe extends X{constructor(e){super(),Y(this,e,ne,te,N,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>d(()=>import("../nodes/0.BGJaeyGS.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),()=>d(()=>import("../nodes/1.DQ9y1jKF.js"),__vite__mapDeps([9,1,2,7,6,4]),import.meta.url),()=>d(()=>import("../nodes/2.DQ9y1jKF.js"),__vite__mapDeps([10,1,2,7,6,4]),import.meta.url),()=>d(()=>import("../nodes/3.DQ9y1jKF.js"),__vite__mapDeps([11,1,2,7,6,4]),import.meta.url),()=>d(()=>import("../nodes/4.BAsxQhGO.js"),__vite__mapDeps([12,1,2,7,6,4]),import.meta.url),()=>d(()=>import("../nodes/5.DQ9y1jKF.js"),__vite__mapDeps([13,1,2,7,6,4]),import.meta.url),()=>d(()=>import("../nodes/6.CdH2AjSd.js"),__vite__mapDeps([14,1,2,4,15,3,16,5]),import.meta.url),()=>d(()=>import("../nodes/7.COKoCx8N.js"),__vite__mapDeps([17,1,2]),import.meta.url),()=>d(()=>import("../nodes/8.BYJERVMj.js"),__vite__mapDeps([18,1,2,15,3]),import.meta.url),()=>d(()=>import("../nodes/9.DQQNVVd2.js"),__vite__mapDeps([19,1,2,15,3,5,16,6,4,7]),import.meta.url),()=>d(()=>import("../nodes/10.WKkQCjaC.js"),__vite__mapDeps([20,1,2]),import.meta.url),()=>d(()=>import("../nodes/11.BD3Ukfm-.js"),__vite__mapDeps([21,1,2]),import.meta.url)],le=[],fe={"/":[-7],"/detail/[id]":[-8,[],[2]],"/genres":[-9,[],[3]],"/genres/[id]":[-10,[],[3,4]],"/search":[-11],"/stream/[id]":[-12,[],[5]]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};