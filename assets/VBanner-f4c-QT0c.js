import{p as u,m as v,g as m,aT as y,n as k,s as n,aY as _,I as R,aZ as E,a9 as F,a_ as I,a$ as L,b0 as $,a as M,b1 as N,b as Y,d as Z,e as j,u as q,b2 as w,ab as z,b3 as G,b4 as H,b5 as J,l as K,b6 as O,h as Q,aa as U,t as d,a0 as W,ay as X}from"./app-CTVUFAzl.js";const p=u({color:String,density:String,...v()},"VBannerActions"),ee=m()({name:"VBannerActions",props:p(),setup(e,t){let{slots:a}=t;return y({VBtn:{color:e.color,density:e.density,slim:!0,variant:"text"}}),k(()=>{var s;return n("div",{class:["v-banner-actions",e.class],style:e.style},[(s=a.default)==null?void 0:s.call(a)])}),{}}}),ae=_("v-banner-text"),ne=u({avatar:String,bgColor:String,color:String,icon:R,lines:String,stacked:Boolean,sticky:Boolean,text:String,...E(),...v(),...F(),...I(),...L({mobile:null}),...$(),...M(),...N(),...Y(),...Z(),...j()},"VBanner"),te=m()({name:"VBanner",props:ne(),setup(e,t){let{slots:a}=t;const{backgroundColorClasses:s,backgroundColorStyles:b}=q(e,"bgColor"),{borderClasses:g}=w(e),{densityClasses:P}=z(e),{displayClasses:V,mobile:B}=G(e),{dimensionStyles:C}=H(e),{elevationClasses:x}=J(e),{locationStyles:S}=K(e),{positionClasses:f}=O(e),{roundedClasses:D}=Q(e),{themeClasses:h}=U(e),o=d(e,"color"),l=d(e,"density");y({VBannerActions:{color:o,density:l}}),k(()=>{const A=!!(e.text||a.text),i=!!(e.avatar||e.icon),T=!!(i||a.prepend);return n(e.tag,{class:["v-banner",{"v-banner--stacked":e.stacked||B.value,"v-banner--sticky":e.sticky,[`v-banner--${e.lines}-line`]:!!e.lines},h.value,s.value,g.value,P.value,V.value,x.value,f.value,D.value,e.class],style:[b.value,C.value,S.value,e.style],role:"banner"},{default:()=>{var r;return[T&&n("div",{key:"prepend",class:"v-banner__prepend"},[a.prepend?n(X,{key:"prepend-defaults",disabled:!i,defaults:{VAvatar:{color:o.value,density:l.value,icon:e.icon,image:e.avatar}}},a.prepend):n(W,{key:"prepend-avatar",color:o.value,density:l.value,icon:e.icon,image:e.avatar},null)]),n("div",{class:"v-banner__content"},[A&&n(ae,{key:"text"},{default:()=>{var c;return[((c=a.text)==null?void 0:c.call(a))??e.text]}}),(r=a.default)==null?void 0:r.call(a)]),a.actions&&n(ee,{key:"actions"},a.actions)]}})})}});export{te as V};
