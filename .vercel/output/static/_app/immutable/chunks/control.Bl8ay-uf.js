import{n as f,s as b}from"./scheduler.DdVwomBZ.js";const n=[];function p(r,e=f){let s;const i=new Set;function c(o){if(b(r,o)&&(r=o,s)){const u=!n.length;for(const t of i)t[1](),n.push(t,r);if(u){for(let t=0;t<n.length;t+=2)n[t][0](n[t+1]);n.length=0}}}function a(o){c(o(r))}function h(o,u=f){const t=[o,u];return i.add(t),i.size===1&&(s=e(c,a)||f),o(r),()=>{i.delete(t),i.size===0&&s&&(s(),s=null)}}return{set:c,update:a,subscribe:h}}class g{constructor(e,s){this.status=e,typeof s=="string"?this.body={message:s}:s?this.body=s:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class d{constructor(e,s){this.status=e,this.location=s}}class S extends Error{constructor(e,s,i){super(i),this.status=e,this.text=s}}export{g as H,d as R,S,p as w};
