import{R as T,a_ as j,bs as L,bD as q,b7 as K,$,b4 as z,b9 as G,ao as J,a3 as M,af as r,ae as y,aT as E,as as h,a7 as H,aJ as Q,a as s,F as U,bd as W,D as V,bG as X,bN as Y,bO as k,au as Z}from"./app-Bz4LNFaU.js";const ee=T({autofocus:Boolean,divider:String,focusAll:Boolean,label:{type:String,default:"$vuetify.input.otp"},length:{type:[Number,String],default:6},modelValue:{type:[Number,String],default:void 0},placeholder:String,type:{type:String,default:"number"},...j(),...L(),...q(K({variant:"outlined"}),["baseColor","bgColor","class","color","disabled","error","loading","rounded","style","theme","variant"])},"VOtpInput"),ae=$()({name:"VOtpInput",props:ee(),emits:{finish:t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,F){let{attrs:x,emit:A,slots:d}=F;const{dimensionStyles:D}=z(t),{isFocused:g,focus:P,blur:_}=G(t),o=J(t,"modelValue","",e=>e==null?[]:String(e).split(""),e=>e.join("")),{t:w}=M(),f=r(()=>Number(t.length)),C=r(()=>Array(f.value).fill(0)),i=y(-1),m=y(),c=y([]),b=r(()=>c.value[i.value]);function I(){if(p(b.value.value)){b.value.value="";return}const e=o.value.slice(),a=b.value.value;e[i.value]=a;let u=null;i.value>o.value.length?u=o.value.length+1:i.value+1!==f.value&&(u="next"),o.value=e,u&&k(m.value,u)}function S(e){const a=o.value.slice(),u=i.value;let n=null;["ArrowLeft","ArrowRight","Backspace","Delete"].includes(e.key)&&(e.preventDefault(),e.key==="ArrowLeft"?n="prev":e.key==="ArrowRight"?n="next":["Backspace","Delete"].includes(e.key)&&(a[i.value]="",o.value=a,i.value>0&&e.key==="Backspace"?n="prev":requestAnimationFrame(()=>{var l;(l=c.value[u])==null||l.select()})),requestAnimationFrame(()=>{n!=null&&k(m.value,n)}))}function B(e,a){var n,l;a.preventDefault(),a.stopPropagation();const u=((n=a==null?void 0:a.clipboardData)==null?void 0:n.getData("Text").slice(0,f.value))??"";p(u)||(o.value=u.split(""),(l=c.value)==null||l[e].blur())}function N(){o.value=[]}function O(e,a){P(),i.value=a}function R(){_(),i.value=-1}function p(e){return t.type==="number"&&/[^0-9]/g.test(e)}return E({VField:{color:r(()=>t.color),bgColor:r(()=>t.color),baseColor:r(()=>t.baseColor),disabled:r(()=>t.disabled),error:r(()=>t.error),variant:r(()=>t.variant)}},{scoped:!0}),h(o,e=>{e.length===f.value&&A("finish",e.join(""))},{deep:!0}),h(i,e=>{e<0||Z(()=>{var a;(a=c.value[e])==null||a.select()})}),H(()=>{var u;const[e,a]=Q(x);return s("div",V({class:["v-otp-input",{"v-otp-input--divided":!!t.divider},t.class],style:[t.style]},e),[s("div",{ref:m,class:"v-otp-input__content",style:[D.value]},[C.value.map((n,l)=>s(U,null,[t.divider&&l!==0&&s("span",{class:"v-otp-input__divider"},[t.divider]),s(W,{focused:g.value&&t.focusAll||i.value===l,key:l},{...d,loader:void 0,default:()=>s("input",{ref:v=>c.value[l]=v,"aria-label":w(t.label,l+1),autofocus:l===0&&t.autofocus,autocomplete:"one-time-code",class:["v-otp-input__field"],disabled:t.disabled,inputmode:t.type==="number"?"numeric":"text",min:t.type==="number"?0:void 0,maxlength:"1",placeholder:t.placeholder,type:t.type==="number"?"text":t.type,value:o.value[l],onInput:I,onFocus:v=>O(v,l),onBlur:R,onKeydown:S,onPaste:v=>B(l,v)},null)})])),s("input",V({class:"v-otp-input-input",type:"hidden"},a,{value:o.value.join("")}),null),s(X,{contained:!0,"content-class":"v-otp-input__loader","model-value":!!t.loading,persistent:!0},{default:()=>{var n;return[((n=d.loader)==null?void 0:n.call(d))??s(Y,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,size:"24",width:"2"},null)]}}),(u=d.default)==null?void 0:u.call(d)])])}),{blur:()=>{var e;(e=c.value)==null||e.some(a=>a.blur())},focus:()=>{var e;(e=c.value)==null||e[0].focus()},reset:N,isFocused:g}}});export{ae as V};
