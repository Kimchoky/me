import{r as Nn,s as _e,n as ge,c as Se,b as Tn,d as Rt,e as Ue,f as Ea,g as Fn,h as zt,o as Sa,i as le,u as fe,j as ce,k as ue,l as Pa,m as wa}from"../chunks/scheduler.DNfKYjoR.js";import{d as O,S as ke,i as Ae,e as We,a as D,f as L,g as M,h as R,x as Mn,k as w,y as Oa,H as La,z as Ia,j as z,A as Ca,B as Na,p as me,t as C,b as de,C as Ta,r as te,u as ne,v as ae,w as re,m as Ve,s as W,n as Be,c as G,D as F,o as Fa,E as rt,l as Dt}from"../chunks/index.DNtWZaPt.js";import{w as Ma}from"../chunks/index.viIURbgh.js";import{g as Ra,a as za}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.BfkVk6vZ.js";function jt(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Da(t,e){t.d(1),e.delete(t.key)}function ja(t,e,n,a,r,s,i,o,l,f,u,_){let d=t.length,k=s.length,b=d;const I={};for(;b--;)I[t[b].key]=b;const p=[],v=new Map,m=new Map,E=[];for(b=k;b--;){const y=_(r,s,b),c=n(y);let A=i.get(c);A?E.push(()=>A.p(y,e)):(A=f(c,y),A.c()),v.set(c,p[b]=A),c in I&&m.set(c,Math.abs(b-I[c]))}const x=new Set,S=new Set;function P(y){O(y,1),y.m(o,u),i.set(y.key,y),u=y.first,k--}for(;d&&k;){const y=p[k-1],c=t[d-1],A=y.key,j=c.key;y===c?(u=y.first,d--,k--):v.has(j)?!i.has(A)||x.has(A)?P(y):S.has(j)?d--:m.get(A)>m.get(j)?(S.add(A),P(y)):(x.add(j),d--):(l(c,i),d--)}for(;d--;){const y=t[d];v.has(y.key)||l(y,i)}for(;k;)P(p[k-1]);return Nn(E),p}const je=Ma(!1);function Ht(t){let e,n='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect class="spinner_hzlK svelte-wpvgbx" x="1" y="1" width="6" height="22"></rect><rect class="spinner_hzlK spinner_koGT svelte-wpvgbx" x="9" y="1" width="6" height="22"></rect><rect class="spinner_hzlK spinner_YF1u svelte-wpvgbx" x="17" y="1" width="6" height="22"></rect></svg>';return{c(){e=M("div"),e.innerHTML=n,this.h()},l(a){e=R(a,"DIV",{class:!0,"data-svelte-h":!0}),Mn(e)!=="svelte-19jq203"&&(e.innerHTML=n),this.h()},h(){w(e,"class","loader-wrapper svelte-wpvgbx")},m(a,r){D(a,e,r)},d(a){a&&L(e)}}}function Ha(t){let e,n=t[0]&&Ht();return{c(){n&&n.c(),e=We()},l(a){n&&n.l(a),e=We()},m(a,r){n&&n.m(a,r),D(a,e,r)},p(a,[r]){a[0]?n||(n=Ht(),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:ge,o:ge,d(a){a&&L(e),n&&n.d(a)}}}function Ya(t,e,n){let{show:a=!1}=e;return t.$$set=r=>{"show"in r&&n(0,a=r.show)},[a]}class Ua extends ke{constructor(e){super(),Ae(this,e,Ya,Ha,_e,{show:0})}}function Wa(){switch(localStorage.getItem("theme")){case"dark":return"dark";case"light":return"light";default:return null}}function Ga(t){localStorage.setItem("theme",t)}function Xa(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Va(t){t===null&&(t=Rn()),Ga(t),t==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function Rn(){return Wa()??Xa()}const Yt={toggle:Va,getTheme:Rn};function Ba(t){const{beat:e,fade:n,beatFade:a,bounce:r,shake:s,flash:i,spin:o,spinPulse:l,spinReverse:f,pulse:u,fixedWidth:_,inverse:d,border:k,listItem:b,flip:I,size:p,rotation:v,pull:m}=t,E={"fa-beat":e,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":s,"fa-flash":i,"fa-spin":o,"fa-spin-reverse":f,"fa-spin-pulse":l,"fa-pulse":u,"fa-fw":_,"fa-inverse":d,"fa-border":k,"fa-li":b,"fa-flip":I===!0,"fa-flip-horizontal":I==="horizontal"||I==="both","fa-flip-vertical":I==="vertical"||I==="both",[`fa-${p}`]:typeof p<"u"&&p!==null,[`fa-rotate-${v}`]:typeof v<"u"&&v!==null&&v!==0,[`fa-pull-${m}`]:typeof m<"u"&&m!==null,"fa-swap-opacity":t.swapOpacity};return Object.keys(E).map(x=>E[x]?x:null).filter(x=>x)}function Ka(t){return t=t-0,t===t}function qa(t){return Ka(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}function Qa(t){return typeof t=="string"?t:Object.keys(t).reduce((e,n)=>e+n.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+t[n]+";","")}function zn(t,e,n={}){if(typeof e=="string")return e;const a=(e.children||[]).map(s=>zn(t,s)),r=Object.keys(e.attributes||{}).reduce((s,i)=>{const o=e.attributes[i];return i==="style"?s.attrs.style=Qa(o):i.indexOf("aria-")===0||i.indexOf("data-")===0?s.attrs[i.toLowerCase()]=o:s.attrs[qa(i)]=o,s},{attrs:{}});return t(e.tag,{...r.attrs},a)}const Ut=()=>{};let _t={},Dn={},jn=null,Hn={mark:Ut,measure:Ut};try{typeof window<"u"&&(_t=window),typeof document<"u"&&(Dn=document),typeof MutationObserver<"u"&&(jn=MutationObserver),typeof performance<"u"&&(Hn=performance)}catch{}const{userAgent:Wt=""}=_t.navigator||{},se=_t,N=Dn,Gt=jn,De=Hn;se.document;const Z=!!N.documentElement&&!!N.head&&typeof N.addEventListener=="function"&&typeof N.createElement=="function",Yn=~Wt.indexOf("MSIE")||~Wt.indexOf("Trident/");var T="classic",Un="duotone",H="sharp",Y="sharp-duotone",Za=[T,Un,H,Y],Ja={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Xt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},$a=["kit"],er=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,tr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,nr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},ar={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},rr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},sr={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},ir={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},or={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Wn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},lr=["solid","regular","light","thin","duotone","brands"],Gn=[1,2,3,4,5,6,7,8,9,10],fr=Gn.concat([11,12,13,14,15,16,17,18,19,20]),Le={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},cr=[...Object.keys(sr),...lr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Le.GROUP,Le.SWAP_OPACITY,Le.PRIMARY,Le.SECONDARY].concat(Gn.map(t=>"".concat(t,"x"))).concat(fr.map(t=>"w-".concat(t))),ur={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},mr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},dr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Vt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const q="___FONT_AWESOME___",st=16,Xn="fa",Vn="svg-inline--fa",ve="data-fa-i2svg",it="data-fa-pseudo-element",hr="data-fa-pseudo-element-pending",kt="data-prefix",At="data-icon",Bt="fontawesome-i2svg",gr="async",br=["HTML","HEAD","STYLE","SCRIPT"],Bn=(()=>{try{return!0}catch{return!1}})(),Kn=[T,H,Y];function Me(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[T]}})}const qn={...Wn};qn[T]={...Wn[T],...Xt.kit,...Xt["kit-duotone"]};const be=Me(qn),ot={...or};ot[T]={...ot[T],...Vt.kit,...Vt["kit-duotone"]};const Te=Me(ot),lt={...ir};lt[T]={...lt[T],...dr.kit};const pe=Me(lt),ft={...rr};ft[T]={...ft[T],...mr.kit};const pr=Me(ft),vr=er,Qn="fa-layers-text",yr=tr,_r={...Ja};Me(_r);const kr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Je=Le,Pe=new Set;Object.keys(Te[T]).map(Pe.add.bind(Pe));Object.keys(Te[H]).map(Pe.add.bind(Pe));Object.keys(Te[Y]).map(Pe.add.bind(Pe));const Ar=[...$a,...cr],Ce=se.FontAwesomeConfig||{};function xr(t){var e=N.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Er(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}N&&typeof N.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Er(xr(n));r!=null&&(Ce[a]=r)});const Zn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Xn,replacementClass:Vn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ce.familyPrefix&&(Ce.cssPrefix=Ce.familyPrefix);const we={...Zn,...Ce};we.autoReplaceSvg||(we.observeMutations=!1);const h={};Object.keys(Zn).forEach(t=>{Object.defineProperty(h,t,{enumerable:!0,set:function(e){we[t]=e,Ne.forEach(n=>n(h))},get:function(){return we[t]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(t){we.cssPrefix=t,Ne.forEach(e=>e(h))},get:function(){return we.cssPrefix}});se.FontAwesomeConfig=h;const Ne=[];function Sr(t){return Ne.push(t),()=>{Ne.splice(Ne.indexOf(t),1)}}const $=st,V={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Pr(t){if(!t||!Z)return;const e=N.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=N.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=s)}return N.head.insertBefore(e,a),t}const wr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Fe(){let t=12,e="";for(;t-- >0;)e+=wr[Math.random()*62|0];return e}function Oe(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function xt(t){return t.classList?Oe(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Jn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Or(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Jn(t[n]),'" '),"").trim()}function Ke(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Et(t){return t.size!==V.size||t.x!==V.x||t.y!==V.y||t.rotate!==V.rotate||t.flipX||t.flipY}function Lr(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(i," ").concat(o)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:f}}function Ir(t){let{transform:e,width:n=st,height:a=st,startCentered:r=!1}=t,s="";return r&&Yn?s+="translate(".concat(e.x/$-n/2,"em, ").concat(e.y/$-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/$,"em), calc(-50% + ").concat(e.y/$,"em)) "):s+="translate(".concat(e.x/$,"em, ").concat(e.y/$,"em) "),s+="scale(".concat(e.size/$*(e.flipX?-1:1),", ").concat(e.size/$*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var Cr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $n(){const t=Xn,e=Vn,n=h.cssPrefix,a=h.replacementClass;let r=Cr;if(n!==t||a!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let Kt=!1;function $e(){h.autoAddCss&&!Kt&&(Pr($n()),Kt=!0)}var Nr={mixout(){return{dom:{css:$n,insertCss:$e}}},hooks(){return{beforeDOMElementCreation(){$e()},beforeI2svg(){$e()}}}};const Q=se||{};Q[q]||(Q[q]={});Q[q].styles||(Q[q].styles={});Q[q].hooks||(Q[q].hooks={});Q[q].shims||(Q[q].shims=[]);var B=Q[q];const ea=[],ta=function(){N.removeEventListener("DOMContentLoaded",ta),Ge=1,ea.map(t=>t())};let Ge=!1;Z&&(Ge=(N.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N.readyState),Ge||N.addEventListener("DOMContentLoaded",ta));function Tr(t){Z&&(Ge?setTimeout(t,0):ea.push(t))}function Re(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Jn(t):"<".concat(e," ").concat(Or(n),">").concat(a.map(Re).join(""),"</").concat(e,">")}function qt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var et=function(e,n,a,r){var s=Object.keys(e),i=s.length,o=n,l,f,u;for(a===void 0?(l=1,u=e[s[0]]):(l=0,u=a);l<i;l++)f=s[l],u=o(u,e[f],f,e);return u};function Fr(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function ct(t){const e=Fr(t);return e.length===1?e[0].toString(16):null}function Mr(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Qt(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function ut(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Qt(e);typeof B.hooks.addPack=="function"&&!a?B.hooks.addPack(t,Qt(e)):B.styles[t]={...B.styles[t]||{},...r},t==="fas"&&ut("fa",e)}const{styles:he,shims:Rr}=B,zr={[T]:Object.values(pe[T]),[H]:Object.values(pe[H]),[Y]:Object.values(pe[Y])};let St=null,na={},aa={},ra={},sa={},ia={};const Dr={[T]:Object.keys(be[T]),[H]:Object.keys(be[H]),[Y]:Object.keys(be[Y])};function jr(t){return~Ar.indexOf(t)}function Hr(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!jr(r)?r:null}const oa=()=>{const t=a=>et(he,(r,s,i)=>(r[i]=et(s,a,{}),r),{});na=t((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=s}),a)),aa=t((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=s}),a)),ia=t((a,r,s)=>{const i=r[2];return a[s]=s,i.forEach(o=>{a[o]=s}),a});const e="far"in he||h.autoFetchSvg,n=et(Rr,(a,r)=>{const s=r[0];let i=r[1];const o=r[2];return i==="far"&&!e&&(i="fas"),typeof s=="string"&&(a.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:i,iconName:o}),a},{names:{},unicodes:{}});ra=n.names,sa=n.unicodes,St=qe(h.styleDefault,{family:h.familyDefault})};Sr(t=>{St=qe(t.styleDefault,{family:h.familyDefault})});oa();function Pt(t,e){return(na[t]||{})[e]}function Yr(t,e){return(aa[t]||{})[e]}function ee(t,e){return(ia[t]||{})[e]}function la(t){return ra[t]||{prefix:null,iconName:null}}function Ur(t){const e=sa[t],n=Pt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ie(){return St}const wt=()=>({prefix:null,iconName:null,rest:[]});function qe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=T}=e,a=be[n][t],r=Te[n][t]||Te[n][a],s=t in B.styles?t:null;return r||s||null}const Wr={[T]:Object.keys(pe[T]),[H]:Object.keys(pe[H]),[Y]:Object.keys(pe[Y])};function Qe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,a={[T]:"".concat(h.cssPrefix,"-").concat(T),[H]:"".concat(h.cssPrefix,"-").concat(H),[Y]:"".concat(h.cssPrefix,"-").concat(Y)};let r=null,s=T;const i=Za.filter(l=>l!==Un);i.forEach(l=>{(t.includes(a[l])||t.some(f=>Wr[l].includes(f)))&&(s=l)});const o=t.reduce((l,f)=>{const u=Hr(h.cssPrefix,f);if(he[f]?(f=zr[s].includes(f)?pr[s][f]:f,r=f,l.prefix=f):Dr[s].indexOf(f)>-1?(r=f,l.prefix=qe(f,{family:s})):u?l.iconName=u:f!==h.replacementClass&&!i.some(_=>f===a[_])&&l.rest.push(f),!n&&l.prefix&&l.iconName){const _=r==="fa"?la(l.iconName):{},d=ee(l.prefix,l.iconName);_.prefix&&(r=null),l.iconName=_.iconName||d||l.iconName,l.prefix=_.prefix||l.prefix,l.prefix==="far"&&!he.far&&he.fas&&!h.autoFetchSvg&&(l.prefix="fas")}return l},wt());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&s===H&&(he.fass||h.autoFetchSvg)&&(o.prefix="fass",o.iconName=ee(o.prefix,o.iconName)||o.iconName),!o.prefix&&s===Y&&(he.fasds||h.autoFetchSvg)&&(o.prefix="fasds",o.iconName=ee(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||r==="fa")&&(o.prefix=ie()||"fas"),o}class Gr{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...r[s]},ut(s,r[s]);const i=pe[T][s];i&&ut(i,r[s]),oa()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:i,icon:o}=a[r],l=o[2];e[s]||(e[s]={}),l.length>0&&l.forEach(f=>{typeof f=="string"&&(e[s][f]=o)}),e[s][i]=o}),e}}let Zt=[],xe={};const Ee={},Xr=Object.keys(Ee);function Vr(t,e){let{mixoutsTo:n}=e;return Zt=t,xe={},Object.keys(Ee).forEach(a=>{Xr.indexOf(a)===-1&&delete Ee[a]}),Zt.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=r[s][i]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(i=>{xe[i]||(xe[i]=[]),xe[i].push(s[i])})}a.provides&&a.provides(Ee)}),n}function mt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(xe[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function ye(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(xe[t]||[]).forEach(s=>{s.apply(null,n)})}function oe(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ee[t]?Ee[t].apply(null,e):void 0}function dt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||ie();if(e)return e=ee(n,e)||e,qt(fa.definitions,n,e)||qt(B.styles,n,e)}const fa=new Gr,Br=()=>{h.autoReplaceSvg=!1,h.observeMutations=!1,ye("noAuto")},Kr={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z?(ye("beforeI2svg",t),oe("pseudoElements2svg",t),oe("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,Tr(()=>{Qr({autoReplaceSvgRoot:e}),ye("watch",t)})}},qr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ee(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=qe(t[0]);return{prefix:n,iconName:ee(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(h.cssPrefix,"-"))>-1||t.match(vr))){const e=Qe(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||ie(),iconName:ee(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=ie();return{prefix:e,iconName:ee(e,t)||t}}}},U={noAuto:Br,config:h,dom:Kr,parse:qr,library:fa,findIconDefinition:dt,toHtml:Re},Qr=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=N}=t;(Object.keys(B.styles).length>0||h.autoFetchSvg)&&Z&&h.autoReplaceSvg&&U.dom.i2svg({node:e})};function Ze(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Re(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Z)return;const n=N.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Zr(t){let{children:e,main:n,mask:a,attributes:r,styles:s,transform:i}=t;if(Et(i)&&n.found&&!a.found){const{width:o,height:l}=n,f={x:o/l/2,y:.5};r.style=Ke({...s,"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function Jr(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:s}=t;const i=s===!0?"".concat(e,"-").concat(h.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:i},children:a}]}]}function Ot(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:s,symbol:i,title:o,maskId:l,titleId:f,extra:u,watchable:_=!1}=t,{width:d,height:k}=n.found?n:e,b=a==="fak",I=[h.replacementClass,r?"".concat(h.cssPrefix,"-").concat(r):""].filter(S=>u.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(u.classes).join(" ");let p={children:[],attributes:{...u.attributes,"data-prefix":a,"data-icon":r,class:I,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(k)}};const v=b&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/k*16*.0625,"em")}:{};_&&(p.attributes[ve]=""),o&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(f||Fe())},children:[o]}),delete p.attributes.title);const m={...p,prefix:a,iconName:r,main:e,mask:n,maskId:l,transform:s,symbol:i,styles:{...v,...u.styles}},{children:E,attributes:x}=n.found&&e.found?oe("generateAbstractMask",m)||{children:[],attributes:{}}:oe("generateAbstractIcon",m)||{children:[],attributes:{}};return m.children=E,m.attributes=x,i?Jr(m):Zr(m)}function Jt(t){const{content:e,width:n,height:a,transform:r,title:s,extra:i,watchable:o=!1}=t,l={...i.attributes,...s?{title:s}:{},class:i.classes.join(" ")};o&&(l[ve]="");const f={...i.styles};Et(r)&&(f.transform=Ir({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const u=Ke(f);u.length>0&&(l.style=u);const _=[];return _.push({tag:"span",attributes:l,children:[e]}),s&&_.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),_}function $r(t){const{content:e,title:n,extra:a}=t,r={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},s=Ke(a.styles);s.length>0&&(r.style=s);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:tt}=B;function ht(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(Je.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(Je.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(Je.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const es={found:!1,width:512,height:512};function ts(t,e){!Bn&&!h.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function gt(t,e){let n=e;return e==="fa"&&h.styleDefault!==null&&(e=ie()),new Promise((a,r)=>{if(n==="fa"){const s=la(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&tt[e]&&tt[e][t]){const s=tt[e][t];return a(ht(s))}ts(t,e),a({...es,icon:h.showMissingIcons&&t?oe("missingIconAbstract")||{}:{}})})}const $t=()=>{},bt=h.measurePerformance&&De&&De.mark&&De.measure?De:{mark:$t,measure:$t},Ie='FA "6.6.0"',ns=t=>(bt.mark("".concat(Ie," ").concat(t," begins")),()=>ca(t)),ca=t=>{bt.mark("".concat(Ie," ").concat(t," ends")),bt.measure("".concat(Ie," ").concat(t),"".concat(Ie," ").concat(t," begins"),"".concat(Ie," ").concat(t," ends"))};var Lt={begin:ns,end:ca};const He=()=>{};function en(t){return typeof(t.getAttribute?t.getAttribute(ve):null)=="string"}function as(t){const e=t.getAttribute?t.getAttribute(kt):null,n=t.getAttribute?t.getAttribute(At):null;return e&&n}function rs(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(h.replacementClass)}function ss(){return h.autoReplaceSvg===!0?Ye.replace:Ye[h.autoReplaceSvg]||Ye.replace}function is(t){return N.createElementNS("http://www.w3.org/2000/svg",t)}function os(t){return N.createElement(t)}function ua(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?is:os}=e;if(typeof t=="string")return N.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){a.appendChild(ua(s,{ceFn:n}))}),a}function ls(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ye={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(ua(n),e)}),e.getAttribute(ve)===null&&h.keepOriginalSource){let n=N.createComment(ls(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~xt(e).indexOf(h.replacementClass))return Ye.replace(t);const a=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,o)=>(o===h.replacementClass||o.match(a)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>Re(s)).join(`
`);e.setAttribute(ve,""),e.innerHTML=r}};function tn(t){t()}function ma(t,e){const n=typeof e=="function"?e:He;if(t.length===0)n();else{let a=tn;h.mutateApproach===gr&&(a=se.requestAnimationFrame||tn),a(()=>{const r=ss(),s=Lt.begin("mutate");t.map(r),s(),n()})}}let It=!1;function da(){It=!0}function pt(){It=!1}let Xe=null;function nn(t){if(!Gt||!h.observeMutations)return;const{treeCallback:e=He,nodeCallback:n=He,pseudoElementsCallback:a=He,observeMutationsRoot:r=N}=t;Xe=new Gt(s=>{if(It)return;const i=ie();Oe(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!en(o.addedNodes[0])&&(h.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&h.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&en(o.target)&&~kr.indexOf(o.attributeName))if(o.attributeName==="class"&&as(o.target)){const{prefix:l,iconName:f}=Qe(xt(o.target));o.target.setAttribute(kt,l||i),f&&o.target.setAttribute(At,f)}else rs(o.target)&&n(o.target)})}),Z&&Xe.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function fs(){Xe&&Xe.disconnect()}function cs(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(a[i]=o.join(":").trim()),a},{})),n}function us(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=Qe(xt(t));return r.prefix||(r.prefix=ie()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Yr(r.prefix,t.innerText)||Pt(r.prefix,ct(t.innerText))),!r.iconName&&h.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ms(t){const e=Oe(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return h.autoA11y&&(n?e["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(a||Fe()):(e["aria-hidden"]="true",e.focusable="false")),e}function ds(){return{iconName:null,title:null,titleId:null,prefix:null,transform:V,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function an(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=us(t),s=ms(t),i=mt("parseNodeAttributes",{},t);let o=e.styleParser?cs(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:V,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s},...i}}const{styles:hs}=B;function ha(t){const e=h.autoReplaceSvg==="nest"?an(t,{styleParser:!1}):an(t);return~e.extra.classes.indexOf(Qn)?oe("generateLayersText",t,e):oe("generateSvgReplacementMutation",t,e)}let K=new Set;Kn.map(t=>{K.add("fa-".concat(t))});Object.keys(be[T]).map(K.add.bind(K));Object.keys(be[H]).map(K.add.bind(K));Object.keys(be[Y]).map(K.add.bind(K));K=[...K];function rn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z)return Promise.resolve();const n=N.documentElement.classList,a=u=>n.add("".concat(Bt,"-").concat(u)),r=u=>n.remove("".concat(Bt,"-").concat(u)),s=h.autoFetchSvg?K:Kn.map(u=>"fa-".concat(u)).concat(Object.keys(hs));s.includes("fa")||s.push("fa");const i=[".".concat(Qn,":not([").concat(ve,"])")].concat(s.map(u=>".".concat(u,":not([").concat(ve,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=Oe(t.querySelectorAll(i))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const l=Lt.begin("onTree"),f=o.reduce((u,_)=>{try{const d=ha(_);d&&u.push(d)}catch(d){Bn||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,_)=>{Promise.all(f).then(d=>{ma(d,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(d=>{l(),_(d)})})}function gs(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ha(t).then(n=>{n&&ma([n],e)})}function bs(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:dt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:dt(r||{})),t(a,{...n,mask:r})}}const ps=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=V,symbol:a=!1,mask:r=null,maskId:s=null,title:i=null,titleId:o=null,classes:l=[],attributes:f={},styles:u={}}=e;if(!t)return;const{prefix:_,iconName:d,icon:k}=t;return Ze({type:"icon",...t},()=>(ye("beforeDOMElementCreation",{iconDefinition:t,params:e}),h.autoA11y&&(i?f["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(o||Fe()):(f["aria-hidden"]="true",f.focusable="false")),Ot({icons:{main:ht(k),mask:r?ht(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:d,transform:{...V,...n},symbol:a,title:i,maskId:s,titleId:o,extra:{attributes:f,styles:u,classes:l}})))};var vs={mixout(){return{icon:bs(ps)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=rn,t.nodeCallback=gs,t}}},provides(t){t.i2svg=function(e){const{node:n=N,callback:a=()=>{}}=e;return rn(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:s,prefix:i,transform:o,symbol:l,mask:f,maskId:u,extra:_}=n;return new Promise((d,k)=>{Promise.all([gt(a,i),f.iconName?gt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(b=>{let[I,p]=b;d([e,Ot({icons:{main:I,mask:p},prefix:i,iconName:a,transform:o,symbol:l,maskId:u,title:r,titleId:s,extra:_,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:s,styles:i}=e;const o=Ke(i);o.length>0&&(a.style=o);let l;return Et(s)&&(l=oe("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:a}}}},ys={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ze({type:"layer"},()=>{ye("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},_s={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=e;return Ze({type:"counter",content:t},()=>(ye("beforeDOMElementCreation",{content:t,params:e}),$r({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(h.cssPrefix,"-layers-counter"),...a]}})))}}}},ks={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=V,title:a=null,classes:r=[],attributes:s={},styles:i={}}=e;return Ze({type:"text",content:t},()=>(ye("beforeDOMElementCreation",{content:t,params:e}),Jt({content:t,transform:{...V,...n},title:a,extra:{attributes:s,styles:i,classes:["".concat(h.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:s}=n;let i=null,o=null;if(Yn){const l=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();i=f.width/l,o=f.height/l}return h.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Jt({content:e.innerHTML,width:i,height:o,transform:r,title:a,extra:s,watchable:!0})])}}};const As=new RegExp('"',"ug"),sn=[1105920,1112319],on={FontAwesome:{normal:"fas",400:"fas"},...ar,...nr,...ur},vt=Object.keys(on).reduce((t,e)=>(t[e.toLowerCase()]=on[e],t),{}),xs=Object.keys(vt).reduce((t,e)=>{const n=vt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Es(t){const e=t.replace(As,""),n=Mr(e,0),a=n>=sn[0]&&n<=sn[1],r=e.length===2?e[0]===e[1]:!1;return{value:ct(r?e[0]:e),isSecondary:a||r}}function Ss(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(vt[n]||{})[r]||xs[n]}function ln(t,e){const n="".concat(hr).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=Oe(t.children).filter(d=>d.getAttribute(it)===e)[0],o=se.getComputedStyle(t,e),l=o.getPropertyValue("font-family"),f=l.match(yr),u=o.getPropertyValue("font-weight"),_=o.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&_!=="none"&&_!==""){const d=o.getPropertyValue("content");let k=Ss(l,u);const{value:b,isSecondary:I}=Es(d),p=f[0].startsWith("FontAwesome");let v=Pt(k,b),m=v;if(p){const E=Ur(b);E.iconName&&E.prefix&&(v=E.iconName,k=E.prefix)}if(v&&!I&&(!i||i.getAttribute(kt)!==k||i.getAttribute(At)!==m)){t.setAttribute(n,m),i&&t.removeChild(i);const E=ds(),{extra:x}=E;x.attributes[it]=e,gt(v,k).then(S=>{const P=Ot({...E,icons:{main:S,mask:wt()},prefix:k,iconName:m,extra:x,watchable:!0}),y=N.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(y,t.firstChild):t.appendChild(y),y.outerHTML=P.map(c=>Re(c)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ps(t){return Promise.all([ln(t,"::before"),ln(t,"::after")])}function ws(t){return t.parentNode!==document.head&&!~br.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(it)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function fn(t){if(Z)return new Promise((e,n)=>{const a=Oe(t.querySelectorAll("*")).filter(ws).map(Ps),r=Lt.begin("searchPseudoElements");da(),Promise.all(a).then(()=>{r(),pt(),e()}).catch(()=>{r(),pt(),n()})})}var Os={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=fn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=N}=e;h.searchPseudoElements&&fn(n)}}};let cn=!1;var Ls={mixout(){return{dom:{unwatch(){da(),cn=!0}}}},hooks(){return{bootstrap(){nn(mt("mutationObserverCallbacks",{}))},noAuto(){fs()},watch(t){const{observeMutationsRoot:e}=t;cn?pt():nn(mt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const un=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let i=r.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var Is={mixout(){return{parse:{transform:t=>un(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=un(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:s}=e;const i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(o," ").concat(l," ").concat(f)},_={transform:"translate(".concat(s/2*-1," -256)")},d={outer:i,inner:u,path:_};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const nt={x:0,y:0,width:"100%",height:"100%"};function mn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Cs(t){return t.tag==="g"?t.children:[t]}var Ns={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?Qe(n.split(" ").map(r=>r.trim())):wt();return a.prefix||(a.prefix=ie()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:s,maskId:i,transform:o}=e;const{width:l,icon:f}=r,{width:u,icon:_}=s,d=Lr({transform:o,containerWidth:u,iconWidth:l}),k={tag:"rect",attributes:{...nt,fill:"white"}},b=f.children?{children:f.children.map(mn)}:{},I={tag:"g",attributes:{...d.inner},children:[mn({tag:f.tag,attributes:{...f.attributes,...d.path},...b})]},p={tag:"g",attributes:{...d.outer},children:[I]},v="mask-".concat(i||Fe()),m="clip-".concat(i||Fe()),E={tag:"mask",attributes:{...nt,id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[k,p]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:Cs(_)},E]};return n.push(x,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(v,")"),...nt}}),{children:n,attributes:a}}}},Ts={provides(t){let e=!1;se.matchMedia&&(e=se.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...r,attributeName:"opacity"},i={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return e||i.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(i),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Fs={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Ms=[Nr,vs,ys,_s,ks,Os,Ls,Is,Ns,Ts,Fs];Vr(Ms,{mixoutsTo:U});U.noAuto;const Rs=U.config;U.library;U.dom;const yt=U.parse;U.findIconDefinition;U.toHtml;const zs=U.icon;U.layer;U.text;U.counter;let ga=!1;try{ga=!0}catch{}function Ds(...t){!ga&&console&&typeof console.error=="function"&&console.error(...t)}function dn(t){if(t&&typeof t=="object"&&t.prefix&&t.iconName&&t.icon)return t;if(yt.icon)return yt.icon(t);if(t===null)return null;if(t&&typeof t=="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function at(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?{[t]:e}:{}}function js(t){let e,n,a=[t[2]],r={};for(let s=0;s<a.length;s+=1)r=Se(r,a[s]);return{c(){e=Oa("svg"),n=new La(!0),this.h()},l(s){e=Ia(s,"svg",{});var i=z(e);n=Ca(i,!0),i.forEach(L),this.h()},h(){n.a=null,Na(e,r)},m(s,i){D(s,e,i),n.m(t[1],e),t[7](e)},p:ge,i:ge,o:ge,d(s){s&&L(e),t[7](null)}}}function Hs(t,e,n){let{tag:a}=e,{props:r}=e,{children:s}=e,{style:i=null}=e,{ref:o=null}=e;if(a!=="svg")throw new Error('SvgElement requires a tag of "svg"');function l(b){return(b==null?void 0:b.reduce((I,p)=>I+(p.tag?f(p):p),""))||""}function f({tag:b,props:I,children:p}){const v=Object.keys(I).map(m=>`${m}="${I[m]}"`).join(" ");return`<${b} ${v}>${l(p)}</${b}>`}const u=l(s),_=r!=null&&r.style?`${r.style}${i||""}`:i,d={...r,style:_};function k(b){Tn[b?"unshift":"push"](()=>{o=b,n(0,o)})}return t.$$set=b=>{"tag"in b&&n(3,a=b.tag),"props"in b&&n(4,r=b.props),"children"in b&&n(5,s=b.children),"style"in b&&n(6,i=b.style),"ref"in b&&n(0,o=b.ref)},[o,u,d,a,r,s,i,k]}class Ys extends ke{constructor(e){super(),Ae(this,e,Hs,js,_e,{tag:3,props:4,children:5,style:6,ref:0})}}function hn(t){let e,n,a;const r=[t[2],{style:t[1]}];function s(o){t[28](o)}let i={};for(let o=0;o<r.length;o+=1)i=Se(i,r[o]);return t[0]!==void 0&&(i.ref=t[0]),e=new Ys({props:i}),Tn.push(()=>Ta(e,"ref",s)),{c(){te(e.$$.fragment)},l(o){ne(e.$$.fragment,o)},m(o,l){ae(e,o,l),a=!0},p(o,l){const f=l[0]&6?Ra(r,[l[0]&4&&za(o[2]),l[0]&2&&{style:o[1]}]):{};!n&&l[0]&1&&(n=!0,f.ref=o[0],Ea(()=>n=!1)),e.$set(f)},i(o){a||(O(e.$$.fragment,o),a=!0)},o(o){C(e.$$.fragment,o),a=!1},d(o){re(e,o)}}}function Us(t){let e,n,a=t[2]&&hn(t);return{c(){a&&a.c(),e=We()},l(r){a&&a.l(r),e=We()},m(r,s){a&&a.m(r,s),D(r,e,s),n=!0},p(r,s){r[2]?a?(a.p(r,s),s[0]&4&&O(a,1)):(a=hn(r),a.c(),O(a,1),a.m(e.parentNode,e)):a&&(me(),C(a,1,1,()=>{a=null}),de())},i(r){n||(O(a),n=!0)},o(r){C(a),n=!1},d(r){r&&L(e),a&&a.d(r)}}}function Ws(t,e,n){const a=["border","mask","maskId","fixedWidth","inverse","flip","icon","listItem","pull","pulse","rotation","size","spin","spinPulse","spinReverse","beat","fade","beatFade","bounce","shake","symbol","title","titleId","transform","swapOpacity","ref","style"];let r=Rt(e,a),{border:s=!1}=e,{mask:i=null}=e,{maskId:o=null}=e,{fixedWidth:l=!1}=e,{inverse:f=!1}=e,{flip:u=!1}=e,{icon:_=null}=e,{listItem:d=!1}=e,{pull:k=null}=e,{pulse:b=!1}=e,{rotation:I=null}=e,{size:p=null}=e,{spin:v=!1}=e,{spinPulse:m=!1}=e,{spinReverse:E=!1}=e,{beat:x=!1}=e,{fade:S=!1}=e,{beatFade:P=!1}=e,{bounce:y=!1}=e,{shake:c=!1}=e,{symbol:A=!1}=e,{title:j=""}=e,{titleId:X=null}=e,{transform:J=null}=e,{swapOpacity:Ct=!1}=e,{ref:ze=null}=e,{style:Nt=null}=e;const Tt=dn(_),pa=at("classes",[...Ba(e),...(e.class||"").split(" ")]),va=at("transform",typeof J=="string"?yt.transform(J):J),ya=at("mask",dn(i)),Ft=zs(Tt,{...pa,...va,...ya,symbol:A,title:j,titleId:X,maskId:o});let Mt=null;if(!Ft)Ds("Could not find icon",Tt);else{const{abstract:g}=Ft;Mt=zn((ka,Aa,xa)=>({tag:ka,props:Aa,children:xa}),g[0],r)}function _a(g){ze=g,n(0,ze)}return t.$$set=g=>{n(35,e=Se(Se({},e),Ue(g))),n(34,r=Rt(e,a)),"border"in g&&n(3,s=g.border),"mask"in g&&n(4,i=g.mask),"maskId"in g&&n(5,o=g.maskId),"fixedWidth"in g&&n(6,l=g.fixedWidth),"inverse"in g&&n(7,f=g.inverse),"flip"in g&&n(8,u=g.flip),"icon"in g&&n(9,_=g.icon),"listItem"in g&&n(10,d=g.listItem),"pull"in g&&n(11,k=g.pull),"pulse"in g&&n(12,b=g.pulse),"rotation"in g&&n(13,I=g.rotation),"size"in g&&n(14,p=g.size),"spin"in g&&n(15,v=g.spin),"spinPulse"in g&&n(16,m=g.spinPulse),"spinReverse"in g&&n(17,E=g.spinReverse),"beat"in g&&n(18,x=g.beat),"fade"in g&&n(19,S=g.fade),"beatFade"in g&&n(20,P=g.beatFade),"bounce"in g&&n(21,y=g.bounce),"shake"in g&&n(22,c=g.shake),"symbol"in g&&n(23,A=g.symbol),"title"in g&&n(24,j=g.title),"titleId"in g&&n(25,X=g.titleId),"transform"in g&&n(26,J=g.transform),"swapOpacity"in g&&n(27,Ct=g.swapOpacity),"ref"in g&&n(0,ze=g.ref),"style"in g&&n(1,Nt=g.style)},e=Ue(e),[ze,Nt,Mt,s,i,o,l,f,u,_,d,k,b,I,p,v,m,E,x,S,P,y,c,A,j,X,J,Ct,_a]}class gn extends ke{constructor(e){super(),Ae(this,e,Ws,Us,_e,{border:3,mask:4,maskId:5,fixedWidth:6,inverse:7,flip:8,icon:9,listItem:10,pull:11,pulse:12,rotation:13,size:14,spin:15,spinPulse:16,spinReverse:17,beat:18,fade:19,beatFade:20,bounce:21,shake:22,symbol:23,title:24,titleId:25,transform:26,swapOpacity:27,ref:0,style:1},null,[-1,-1])}}const Gs={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},Xs={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]};function bn(t,e,n){const a=t.slice();return a[2]=e[n],a[4]=n,a}function pn(t){let e,n=[],a=new Map,r=jt(t[0]);const s=i=>i[2].href;for(let i=0;i<r.length;i+=1){let o=bn(t,r,i),l=s(o);a.set(l,n[i]=vn(l,o))}return{c(){e=M("ul");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=R(i,"UL",{class:!0});var o=z(e);for(let l=0;l<n.length;l+=1)n[l].l(o);o.forEach(L),this.h()},h(){w(e,"class","")},m(i,o){D(i,e,o);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(e,null)},p(i,o){o&1&&(r=jt(i[0]),n=ja(n,o,s,1,i,r,a,e,Da,vn,null,bn))},d(i){i&&L(e);for(let o=0;o<n.length;o+=1)n[o].d()}}}function vn(t,e){let n,a,r=e[2].name+"",s,i,o;return{key:t,first:null,c(){n=M("li"),a=M("a"),s=Ve(r),o=W(),this.h()},l(l){n=R(l,"LI",{});var f=z(n);a=R(f,"A",{href:!0});var u=z(a);s=Be(u,r),u.forEach(L),o=G(f),f.forEach(L),this.h()},h(){w(a,"href",i=e[2].href),this.first=n},m(l,f){D(l,n,f),F(n,a),F(a,s),F(n,o)},p(l,f){e=l,f&1&&r!==(r=e[2].name+"")&&Fa(s,r),f&1&&i!==(i=e[2].href)&&w(a,"href",i)},d(l){l&&L(n)}}}function Vs(t){let e,n=t[0]&&pn(t);return{c(){e=M("nav"),n&&n.c(),this.h()},l(a){e=R(a,"NAV",{class:!0});var r=z(e);n&&n.l(r),r.forEach(L),this.h()},h(){w(e,"class","list-nav")},m(a,r){D(a,e,r),n&&n.m(e,null)},p(a,[r]){a[0]?n?n.p(a,r):(n=pn(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},i:ge,o:ge,d(a){a&&L(e),n&&n.d()}}}function Bs(t,e,n){let{direction:a="row"}=e,{menuList:r}=e;return t.$$set=s=>{"direction"in s&&n(1,a=s.direction),"menuList"in s&&n(0,r=s.menuList)},[r,a]}class ba extends ke{constructor(e){super(),Ae(this,e,Bs,Vs,_e,{direction:1,menuList:0})}}function Ks(t){let e,n,a="<div>Logo</div> <div>Site name</div>",r,s,i,o,l,f,u,_,d,k,b,I,p,v;return i=new ba({props:{menuList:t[0],direction:"row"}}),u=new gn({props:{icon:Gs,class:"text-orange-300 dark:text-white"}}),b=new gn({props:{icon:Xs,class:"text-black dark:text-yellow-400"}}),{c(){e=M("div"),n=M("div"),n.innerHTML=a,r=W(),s=M("div"),te(i.$$.fragment),o=W(),l=M("div"),f=M("label"),te(u.$$.fragment),_=W(),d=M("input"),k=W(),te(b.$$.fragment),this.h()},l(m){e=R(m,"DIV",{class:!0});var E=z(e);n=R(E,"DIV",{class:!0,"data-svelte-h":!0}),Mn(n)!=="svelte-11hgaot"&&(n.innerHTML=a),r=G(E),s=R(E,"DIV",{});var x=z(s);ne(i.$$.fragment,x),x.forEach(L),o=G(E),l=R(E,"DIV",{});var S=z(l);f=R(S,"LABEL",{class:!0});var P=z(f);ne(u.$$.fragment,P),_=G(P),d=R(P,"INPUT",{type:!0,role:!0}),k=G(P),ne(b.$$.fragment,P),P.forEach(L),S.forEach(L),E.forEach(L),this.h()},h(){w(n,"class","inline-flex "),w(d,"type","checkbox"),w(d,"role","switch"),w(f,"class","inline-flex items-center cursor-pointer gap-2"),w(e,"class","flex justify-between p-1")},m(m,E){D(m,e,E),F(e,n),F(e,r),F(e,s),ae(i,s,null),F(e,o),F(e,l),F(l,f),ae(u,f,null),F(f,_),F(f,d),d.checked=t[1],F(f,k),ae(b,f,null),I=!0,p||(v=[rt(d,"change",t[4]),rt(d,"change",t[2])],p=!0)},p(m,[E]){const x={};E&1&&(x.menuList=m[0]),i.$set(x),E&2&&(d.checked=m[1])},i(m){I||(O(i.$$.fragment,m),O(u.$$.fragment,m),O(b.$$.fragment,m),I=!0)},o(m){C(i.$$.fragment,m),C(u.$$.fragment,m),C(b.$$.fragment,m),I=!1},d(m){m&&L(e),re(i),re(u),re(b),p=!1,Nn(v)}}}function qs(t,e,n){let a;Fn(t,je,f=>n(5,a=f));let{menuList:r}=e,s=null,i=!1;zt(je,a=!0,a),Sa(()=>{console.log("Header OnMount"),n(3,s=Yt.getTheme())});function o(){n(3,s=i?"dark":"light")}function l(){i=this.checked,n(1,i),n(3,s)}return t.$$set=f=>{"menuList"in f&&n(0,r=f.menuList)},t.$$.update=()=>{t.$$.dirty&8&&s&&(Yt.toggle(s),n(1,i=s==="dark"),zt(je,a=!1,a))},[r,i,o,s,l]}class Qs extends ke{constructor(e){super(),Ae(this,e,qs,Ks,_e,{menuList:0})}}const Zs=t=>({}),yn=t=>({}),Js=t=>({}),_n=t=>({}),$s=t=>({}),kn=t=>({}),ei=t=>({}),An=t=>({}),ti=t=>({}),xn=t=>({}),ni=t=>({}),En=t=>({});function Sn(t){let e,n,a;const r=t[19].header,s=le(r,t,t[18],En);return{c(){e=M("header"),s&&s.c(),this.h()},l(i){e=R(i,"HEADER",{id:!0,class:!0});var o=z(e);s&&s.l(o),o.forEach(L),this.h()},h(){w(e,"id","shell-header"),w(e,"class",n="flex-none "+t[8])},m(i,o){D(i,e,o),s&&s.m(e,null),a=!0},p(i,o){s&&s.p&&(!a||o&262144)&&fe(s,r,i,i[18],a?ue(r,i[18],o,ni):ce(i[18]),En),(!a||o&256&&n!==(n="flex-none "+i[8]))&&w(e,"class",n)},i(i){a||(O(s,i),a=!0)},o(i){C(s,i),a=!1},d(i){i&&L(e),s&&s.d(i)}}}function Pn(t){let e,n;const a=t[19].sidebarLeft,r=le(a,t,t[18],xn);return{c(){e=M("aside"),r&&r.c(),this.h()},l(s){e=R(s,"ASIDE",{id:!0,class:!0});var i=z(e);r&&r.l(i),i.forEach(L),this.h()},h(){w(e,"id","sidebar-left"),w(e,"class",t[7])},m(s,i){D(s,e,i),r&&r.m(e,null),n=!0},p(s,i){r&&r.p&&(!n||i&262144)&&fe(r,a,s,s[18],n?ue(a,s[18],i,ti):ce(s[18]),xn),(!n||i&128)&&w(e,"class",s[7])},i(s){n||(O(r,s),n=!0)},o(s){C(r,s),n=!1},d(s){s&&L(e),r&&r.d(s)}}}function wn(t){let e,n,a;const r=t[19].pageHeader,s=le(r,t,t[18],An),i=s||ai();return{c(){e=M("header"),i&&i.c(),this.h()},l(o){e=R(o,"HEADER",{id:!0,class:!0});var l=z(e);i&&i.l(l),l.forEach(L),this.h()},h(){w(e,"id","page-header"),w(e,"class",n="flex-none "+t[5])},m(o,l){D(o,e,l),i&&i.m(e,null),a=!0},p(o,l){s&&s.p&&(!a||l&262144)&&fe(s,r,o,o[18],a?ue(r,o[18],l,ei):ce(o[18]),An),(!a||l&32&&n!==(n="flex-none "+o[5]))&&w(e,"class",n)},i(o){a||(O(i,o),a=!0)},o(o){C(i,o),a=!1},d(o){o&&L(e),i&&i.d(o)}}}function ai(t){let e;return{c(){e=Ve("(slot:header)")},l(n){e=Be(n,"(slot:header)")},m(n,a){D(n,e,a)},d(n){n&&L(e)}}}function On(t){let e,n,a;const r=t[19].pageFooter,s=le(r,t,t[18],kn),i=s||ri();return{c(){e=M("footer"),i&&i.c(),this.h()},l(o){e=R(o,"FOOTER",{id:!0,class:!0});var l=z(e);i&&i.l(l),l.forEach(L),this.h()},h(){w(e,"id","page-footer"),w(e,"class",n="flex-none "+t[3])},m(o,l){D(o,e,l),i&&i.m(e,null),a=!0},p(o,l){s&&s.p&&(!a||l&262144)&&fe(s,r,o,o[18],a?ue(r,o[18],l,$s):ce(o[18]),kn),(!a||l&8&&n!==(n="flex-none "+o[3]))&&w(e,"class",n)},i(o){a||(O(i,o),a=!0)},o(o){C(i,o),a=!1},d(o){o&&L(e),i&&i.d(o)}}}function ri(t){let e;return{c(){e=Ve("(slot:footer)")},l(n){e=Be(n,"(slot:footer)")},m(n,a){D(n,e,a)},d(n){n&&L(e)}}}function Ln(t){let e,n;const a=t[19].sidebarRight,r=le(a,t,t[18],_n);return{c(){e=M("aside"),r&&r.c(),this.h()},l(s){e=R(s,"ASIDE",{id:!0,class:!0});var i=z(e);r&&r.l(i),i.forEach(L),this.h()},h(){w(e,"id","sidebar-right"),w(e,"class",t[6])},m(s,i){D(s,e,i),r&&r.m(e,null),n=!0},p(s,i){r&&r.p&&(!n||i&262144)&&fe(r,a,s,s[18],n?ue(a,s[18],i,Js):ce(s[18]),_n),(!n||i&64)&&w(e,"class",s[6])},i(s){n||(O(r,s),n=!0)},o(s){C(r,s),n=!1},d(s){s&&L(e),r&&r.d(s)}}}function In(t){let e,n,a;const r=t[19].footer,s=le(r,t,t[18],yn);return{c(){e=M("footer"),s&&s.c(),this.h()},l(i){e=R(i,"FOOTER",{id:!0,class:!0});var o=z(e);s&&s.l(o),o.forEach(L),this.h()},h(){w(e,"id","shell-footer"),w(e,"class",n="flex-none "+t[2])},m(i,o){D(i,e,o),s&&s.m(e,null),a=!0},p(i,o){s&&s.p&&(!a||o&262144)&&fe(s,r,i,i[18],a?ue(r,i[18],o,Zs):ce(i[18]),yn),(!a||o&4&&n!==(n="flex-none "+i[2]))&&w(e,"class",n)},i(i){a||(O(s,i),a=!0)},o(i){C(s,i),a=!1},d(i){i&&L(e),s&&s.d(i)}}}function si(t){let e,n,a,r,s,i,o,l,f,u,_,d,k,b,I,p=t[10].header&&Sn(t),v=t[10].sidebarLeft&&Pn(t),m=t[10].pageHeader&&wn(t);const E=t[19].default,x=le(E,t,t[18],null);let S=t[10].pageFooter&&On(t),P=t[10].sidebarRight&&Ln(t),y=t[10].footer&&In(t);return{c(){e=M("div"),p&&p.c(),n=W(),a=M("div"),v&&v.c(),r=W(),s=M("div"),m&&m.c(),i=W(),o=M("main"),x&&x.c(),f=W(),S&&S.c(),_=W(),P&&P.c(),d=W(),y&&y.c(),this.h()},l(c){e=R(c,"DIV",{id:!0,class:!0,"data-testid":!0});var A=z(e);p&&p.l(A),n=G(A),a=R(A,"DIV",{class:!0});var j=z(a);v&&v.l(j),r=G(j),s=R(j,"DIV",{id:!0,class:!0});var X=z(s);m&&m.l(X),i=G(X),o=R(X,"MAIN",{id:!0,class:!0});var J=z(o);x&&x.l(J),J.forEach(L),f=G(X),S&&S.l(X),X.forEach(L),_=G(j),P&&P.l(j),j.forEach(L),d=G(A),y&&y.l(A),A.forEach(L),this.h()},h(){w(o,"id","page-content"),w(o,"class",l="flex-auto "+t[4]),w(s,"id","page"),w(s,"class",u=t[1]+" "+Cn),Dt(s,"scrollbar-gutter",t[0]),w(a,"class","flex-auto "+oi),w(e,"id","appShell"),w(e,"class",t[9]),w(e,"data-testid","app-shell")},m(c,A){D(c,e,A),p&&p.m(e,null),F(e,n),F(e,a),v&&v.m(a,null),F(a,r),F(a,s),m&&m.m(s,null),F(s,i),F(s,o),x&&x.m(o,null),F(s,f),S&&S.m(s,null),F(a,_),P&&P.m(a,null),F(e,d),y&&y.m(e,null),k=!0,b||(I=rt(s,"scroll",t[20]),b=!0)},p(c,[A]){c[10].header?p?(p.p(c,A),A&1024&&O(p,1)):(p=Sn(c),p.c(),O(p,1),p.m(e,n)):p&&(me(),C(p,1,1,()=>{p=null}),de()),c[10].sidebarLeft?v?(v.p(c,A),A&1024&&O(v,1)):(v=Pn(c),v.c(),O(v,1),v.m(a,r)):v&&(me(),C(v,1,1,()=>{v=null}),de()),c[10].pageHeader?m?(m.p(c,A),A&1024&&O(m,1)):(m=wn(c),m.c(),O(m,1),m.m(s,i)):m&&(me(),C(m,1,1,()=>{m=null}),de()),x&&x.p&&(!k||A&262144)&&fe(x,E,c,c[18],k?ue(E,c[18],A,null):ce(c[18]),null),(!k||A&16&&l!==(l="flex-auto "+c[4]))&&w(o,"class",l),c[10].pageFooter?S?(S.p(c,A),A&1024&&O(S,1)):(S=On(c),S.c(),O(S,1),S.m(s,null)):S&&(me(),C(S,1,1,()=>{S=null}),de()),(!k||A&2&&u!==(u=c[1]+" "+Cn))&&w(s,"class",u),A&1&&Dt(s,"scrollbar-gutter",c[0]),c[10].sidebarRight?P?(P.p(c,A),A&1024&&O(P,1)):(P=Ln(c),P.c(),O(P,1),P.m(a,null)):P&&(me(),C(P,1,1,()=>{P=null}),de()),c[10].footer?y?(y.p(c,A),A&1024&&O(y,1)):(y=In(c),y.c(),O(y,1),y.m(e,null)):y&&(me(),C(y,1,1,()=>{y=null}),de()),(!k||A&512)&&w(e,"class",c[9])},i(c){k||(O(p),O(v),O(m),O(x,c),O(S),O(P),O(y),k=!0)},o(c){C(p),C(v),C(m),C(x,c),C(S),C(P),C(y),k=!1},d(c){c&&L(e),p&&p.d(),v&&v.d(),m&&m.d(),x&&x.d(c),S&&S.d(),P&&P.d(),y&&y.d(),b=!1,I()}}}const ii="w-full h-full flex flex-col overflow-hidden",oi="w-full h-full flex overflow-hidden",Cn="flex-1 overflow-x-hidden flex flex-col",li="flex-none overflow-x-hidden overflow-y-auto",fi="flex-none overflow-x-hidden overflow-y-auto";function ci(t,e,n){let a,r,s,i,o,l,f,u,{$$slots:_={},$$scope:d}=e;const k=Pa(_);let{scrollbarGutter:b="auto"}=e,{regionPage:I=""}=e,{slotHeader:p="z-10"}=e,{slotSidebarLeft:v="w-auto"}=e,{slotSidebarRight:m="w-auto"}=e,{slotPageHeader:E=""}=e,{slotPageContent:x=""}=e,{slotPageFooter:S=""}=e,{slotFooter:P=""}=e;function y(c){wa.call(this,t,c)}return t.$$set=c=>{n(21,e=Se(Se({},e),Ue(c))),"scrollbarGutter"in c&&n(0,b=c.scrollbarGutter),"regionPage"in c&&n(1,I=c.regionPage),"slotHeader"in c&&n(11,p=c.slotHeader),"slotSidebarLeft"in c&&n(12,v=c.slotSidebarLeft),"slotSidebarRight"in c&&n(13,m=c.slotSidebarRight),"slotPageHeader"in c&&n(14,E=c.slotPageHeader),"slotPageContent"in c&&n(15,x=c.slotPageContent),"slotPageFooter"in c&&n(16,S=c.slotPageFooter),"slotFooter"in c&&n(17,P=c.slotFooter),"$$scope"in c&&n(18,d=c.$$scope)},t.$$.update=()=>{n(9,a=`${ii} ${e.class??""}`),t.$$.dirty&2048&&n(8,r=`${p}`),t.$$.dirty&4096&&n(7,s=`${li} ${v}`),t.$$.dirty&8192&&n(6,i=`${fi} ${m}`),t.$$.dirty&16384&&n(5,o=`${E}`),t.$$.dirty&32768&&n(4,l=`${x}`),t.$$.dirty&65536&&n(3,f=`${S}`),t.$$.dirty&131072&&n(2,u=`${P}`)},e=Ue(e),[b,I,u,f,l,o,i,s,r,a,k,p,v,m,E,x,S,P,d,_,y]}class ui extends ke{constructor(e){super(),Ae(this,e,ci,si,_e,{scrollbarGutter:0,regionPage:1,slotHeader:11,slotSidebarLeft:12,slotSidebarRight:13,slotPageHeader:14,slotPageContent:15,slotPageFooter:16,slotFooter:17})}}function mi(t){let e;const n=t[2].default,a=le(n,t,t[3],null);return{c(){a&&a.c()},l(r){a&&a.l(r)},m(r,s){a&&a.m(r,s),e=!0},p(r,s){a&&a.p&&(!e||s&8)&&fe(a,n,r,r[3],e?ue(n,r[3],s,null):ce(r[3]),null)},i(r){e||(O(a,r),e=!0)},o(r){C(a,r),e=!1},d(r){a&&a.d(r)}}}function di(t){var a;let e,n;return e=new Qs({props:{menuList:(a=t[0])==null?void 0:a.menuList}}),{c(){te(e.$$.fragment)},l(r){ne(e.$$.fragment,r)},m(r,s){ae(e,r,s),n=!0},p(r,s){var o;const i={};s&1&&(i.menuList=(o=r[0])==null?void 0:o.menuList),e.$set(i)},i(r){n||(O(e.$$.fragment,r),n=!0)},o(r){C(e.$$.fragment,r),n=!1},d(r){re(e,r)}}}function hi(t){var a;let e,n;return e=new ba({props:{menuList:(a=t[0])==null?void 0:a.menuList}}),{c(){te(e.$$.fragment)},l(r){ne(e.$$.fragment,r)},m(r,s){ae(e,r,s),n=!0},p(r,s){var o;const i={};s&1&&(i.menuList=(o=r[0])==null?void 0:o.menuList),e.$set(i)},i(r){n||(O(e.$$.fragment,r),n=!0)},o(r){C(e.$$.fragment,r),n=!1},d(r){re(e,r)}}}function gi(t){let e;return{c(){e=Ve("Footer")},l(n){e=Be(n,"Footer")},m(n,a){D(n,e,a)},d(n){n&&L(e)}}}function bi(t){let e,n,a,r;return e=new Ua({props:{show:t[1]}}),a=new ui({props:{slotSidebarLeft:"bg-surface-500/5 w-56 p-4",$$slots:{footer:[gi],sidebarLeft:[hi],header:[di],default:[mi]},$$scope:{ctx:t}}}),{c(){te(e.$$.fragment),n=W(),te(a.$$.fragment)},l(s){ne(e.$$.fragment,s),n=G(s),ne(a.$$.fragment,s)},m(s,i){ae(e,s,i),D(s,n,i),ae(a,s,i),r=!0},p(s,[i]){const o={};i&2&&(o.show=s[1]),e.$set(o);const l={};i&9&&(l.$$scope={dirty:i,ctx:s}),a.$set(l)},i(s){r||(O(e.$$.fragment,s),O(a.$$.fragment,s),r=!0)},o(s){C(e.$$.fragment,s),C(a.$$.fragment,s),r=!1},d(s){s&&L(n),re(e,s),re(a,s)}}}function pi(t,e,n){let a;Fn(t,je,o=>n(1,a=o));let{$$slots:r={},$$scope:s}=e;Rs.autoAddCss=!1;let{data:i}=e;return t.$$set=o=>{"data"in o&&n(0,i=o.data),"$$scope"in o&&n(3,s=o.$$scope)},[i,a,r,s]}class Ai extends ke{constructor(e){super(),Ae(this,e,pi,bi,_e,{data:0})}}export{Ai as component};
