import{p as R,ak as A,aM as H,g as W,j as X,ad as M,ae as P,n as G,z,s as d,F as I,x as T,aN as U,ay as Y,aO as q,aP as Q,aQ as J,a9 as K,d as L,an as Z,ab as p,u as ee,t as u,aR as ae,aS as te,aT as E,ac as le,aU as se,aV as oe,aW as ne}from"./app-CgYTy_-w.js";const re=R({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...A(H({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),ie=W()({name:"VTab",props:re(),setup(e,o){let{slots:c,attrs:a}=o;const{textColorClasses:b,textColorStyles:h}=X(e,"sliderColor"),v=M(),S=M(),n=P(()=>e.direction==="horizontal"),y=P(()=>{var r,t;return((t=(r=v.value)==null?void 0:r.group)==null?void 0:t.isSelected.value)??!1});function k(r){var l,i;let{value:t}=r;if(t){const s=(i=(l=v.value)==null?void 0:l.$el.parentElement)==null?void 0:i.querySelector(".v-tab--selected .v-tab__slider"),w=S.value;if(!s||!w)return;const _=getComputedStyle(s).color,g=s.getBoundingClientRect(),f=w.getBoundingClientRect(),C=n.value?"x":"y",V=n.value?"X":"Y",B=n.value?"right":"bottom",m=n.value?"width":"height",D=g[C],F=f[C],x=D>F?g[B]-f[B]:g[C]-f[C],N=Math.sign(x)>0?n.value?"right":"bottom":Math.sign(x)<0?n.value?"left":"top":"center",O=(Math.abs(x)+(Math.sign(x)<0?g[m]:f[m]))/Math.max(g[m],f[m])||0,j=g[m]/f[m]||0,$=1.5;q(w,{backgroundColor:[_,"currentcolor"],transform:[`translate${V}(${x}px) scale${V}(${j})`,`translate${V}(${x/$}px) scale${V}(${(O-1)/$+1})`,"none"],transformOrigin:Array(3).fill(N)},{duration:225,easing:Q})}}return G(()=>{const r=z.filterProps(e);return d(z,T({symbol:U,ref:v,class:["v-tab",e.class],style:e.style,tabindex:y.value?0:-1,role:"tab","aria-selected":String(y.value),active:!1},r,a,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":k}),{...c,default:()=>{var t;return d(I,null,[((t=c.default)==null?void 0:t.call(c))??e.text,!e.hideSlider&&d("div",{ref:S,class:["v-tab__slider",b.value],style:h.value},null)])}})}),Y({},v)}});function de(e){return e?e.map(o=>ne(o)?o:{text:o,value:o}):[]}const ue=R({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...J({mandatory:"force",selectedClass:"v-tab-item--selected"}),...K(),...L()},"VTabs"),ve=W()({name:"VTabs",props:ue(),emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:c,slots:a}=o;const b=Z(e,"modelValue"),h=P(()=>de(e.items)),{densityClasses:v}=p(e),{backgroundColorClasses:S,backgroundColorStyles:n}=ee(u(e,"bgColor")),{scopeId:y}=ae();return te({VTab:{color:u(e,"color"),direction:u(e,"direction"),stacked:u(e,"stacked"),fixed:u(e,"fixedTabs"),sliderColor:u(e,"sliderColor"),hideSlider:u(e,"hideSlider")}}),G(()=>{const k=E.filterProps(e),r=!!(a.window||e.items.length>0);return d(I,null,[d(E,T(k,{modelValue:b.value,"onUpdate:modelValue":t=>b.value=t,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},v.value,S.value,e.class],style:[{"--v-tabs-height":le(e.height)},n.value,e.style],role:"tablist",symbol:U},y,c),{default:()=>{var t;return[((t=a.default)==null?void 0:t.call(a))??h.value.map(l=>{var i;return((i=a.tab)==null?void 0:i.call(a,{item:l}))??d(ie,T(l,{key:l.text,value:l.value}),{default:a[`tab.${l.value}`]?()=>{var s;return(s=a[`tab.${l.value}`])==null?void 0:s.call(a,{item:l})}:void 0})})]}}),r&&d(se,T({modelValue:b.value,"onUpdate:modelValue":t=>b.value=t,key:"tabs-window"},y),{default:()=>{var t;return[h.value.map(l=>{var i;return((i=a.item)==null?void 0:i.call(a,{item:l}))??d(oe,{value:l.value},{default:()=>{var s;return(s=a[`item.${l.value}`])==null?void 0:s.call(a,{item:l})}})}),(t=a.window)==null?void 0:t.call(a)]}})])}),{}}});export{ie as V,ve as a};
