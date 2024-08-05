var j=Object.defineProperty;var D=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var _=(e,t,n)=>D(e,typeof t!="symbol"?t+"":t,n);import{r as p,n as g,x as N,y as O,v as S,z as I,A as E,B as G,C as z,D as A,E as F,F as R,G as q}from"./scheduler.DNfKYjoR.js";let y=!1;function U(){y=!0}function V(){y=!1}function W(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function J(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let a=0;a<t.length;a++){const o=t[a];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let r=0;r<t.length;r++){const a=t[r].claim_order,o=(s>0&&t[n[s]].claim_order<=a?s+1:W(1,s,h=>t[n[h]].claim_order,a))-1;i[r]=n[o]+1;const u=o+1;n[u]=r,s=Math.max(u,s)}const c=[],l=[];let f=t.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(c.push(t[r-1]);f>=r;f--)l.push(t[f]);f--}for(;f>=0;f--)l.push(t[f]);c.reverse(),l.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<l.length;r++){for(;a<c.length&&l[r].claim_order>=c[a].claim_order;)a++;const o=a<c.length?c[a]:null;e.insertBefore(l[r],o)}}function K(e,t){if(y){for(J(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function Q(e,t,n){e.insertBefore(t,n||null)}function X(e,t,n){y&&!n?K(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function $(e){e.parentNode&&e.parentNode.removeChild(e)}function H(e){return document.createElement(e)}function L(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function v(e){return document.createTextNode(e)}function ce(){return v(" ")}function fe(){return v("")}function ue(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function C(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const Y=["width","height"];function oe(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const i in t)t[i]==null?e.removeAttribute(i):i==="style"?e.style.cssText=t[i]:i==="__value"?e.value=e[i]=t[i]:n[i]&&n[i].set&&Y.indexOf(i)===-1?e[i]=t[i]:C(e,i,t[i])}function _e(e,t){for(const n in t)C(e,n,t[n])}function de(e){return e.dataset.svelteH}function Z(e){return Array.from(e.childNodes)}function M(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function B(e,t,n,i,s=!1){M(e);const c=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const f=e[l];if(t(f)){const r=n(f);return r===void 0?e.splice(l,1):e[l]=r,s||(e.claim_info.last_index=l),f}}for(let l=e.claim_info.last_index-1;l>=0;l--){const f=e[l];if(t(f)){const r=n(f);return r===void 0?e.splice(l,1):e[l]=r,s?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,f}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function P(e,t,n,i){return B(e,s=>s.nodeName===t,s=>{const c=[];for(let l=0;l<s.attributes.length;l++){const f=s.attributes[l];n[f.name]||c.push(f.name)}c.forEach(l=>s.removeAttribute(l))},()=>i(t))}function he(e,t,n){return P(e,t,n,H)}function me(e,t,n){return P(e,t,n,L)}function k(e,t){return B(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(t),!0)}function $e(e){return k(e," ")}function b(e,t,n){for(let i=n;i<e.length;i+=1){const s=e[i];if(s.nodeType===8&&s.textContent.trim()===t)return i}return-1}function pe(e,t){const n=b(e,"HTML_TAG_START",0),i=b(e,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new x(t);M(e);const s=e.splice(n,i-n+1);$(s[0]),$(s[s.length-1]);const c=s.slice(1,s.length-1);if(c.length===0)return new x(t);for(const l of c)l.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new x(t,c)}function ye(e,t){t=""+t,e.data!==t&&(e.data=t)}function xe(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}class ee{constructor(t=!1){_(this,"is_svg",!1);_(this,"e");_(this,"n");_(this,"t");_(this,"a");this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,i=null){this.e||(this.is_svg?this.e=L(n.nodeName):this.e=H(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(i)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)Q(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach($)}}class x extends ee{constructor(n=!1,i){super(n);_(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)X(this.t,this.n[i],n)}}function ge(e,t){return new e(t)}const m=new Set;let d;function ve(){d={r:0,c:[],p:d}}function we(){d.r||p(d.c),d=d.p}function te(e,t){e&&e.i&&(m.delete(e),e.i(t))}function Te(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function Ne(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function Ee(e){e&&e.c()}function Ae(e,t){e&&e.l(t)}function ne(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),E(()=>{const c=e.$$.on_mount.map(F).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...c):p(c),e.$$.on_mount=[]}),s.forEach(E)}function ie(e,t){const n=e.$$;n.fragment!==null&&(G(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function se(e,t){e.$$.dirty[0]===-1&&(R.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function be(e,t,n,i,s,c,l=null,f=[-1]){const r=z;A(e);const a=e.$$={fragment:null,ctx:[],props:c,update:g,not_equal:s,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:N(),dirty:f,skip_bound:!1,root:t.target||r.$$.root};l&&l(a.root);let o=!1;if(a.ctx=n?n(e,t.props||{},(u,h,...w)=>{const T=w.length?w[0]:h;return a.ctx&&s(a.ctx[u],a.ctx[u]=T)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](T),o&&se(e,u)),h}):[],a.update(),o=!0,p(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){U();const u=Z(t.target);a.fragment&&a.fragment.l(u),u.forEach($)}else a.fragment&&a.fragment.c();t.intro&&te(e.$$.fragment),ne(e,t.target,t.anchor),V(),O()}A(r)}class Se{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){ie(this,1),this.$destroy=g}$on(t,n){if(!S(n))return g;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!I(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const re="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(re);export{pe as A,_e as B,Ne as C,K as D,ue as E,oe as F,x as H,Se as S,X as a,we as b,$e as c,te as d,fe as e,$ as f,H as g,he as h,be as i,Z as j,C as k,xe as l,v as m,k as n,ye as o,ve as p,ge as q,Ee as r,ce as s,Te as t,Ae as u,ne as v,ie as w,de as x,L as y,me as z};
