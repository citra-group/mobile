import{p as d,m as h,a9 as m,d as b,e as v,g as c,aa as f,ab as u,n as g,s as t,ac as x}from"./app-C5h8m-Fk.js";const T=d({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...h(),...m(),...b(),...v()},"VTable"),k=c()({name:"VTable",props:T(),setup(a,r){let{slots:e,emit:y}=r;const{themeClasses:n}=f(a),{densityClasses:i}=u(a);return g(()=>t(a.tag,{class:["v-table",{"v-table--fixed-height":!!a.height,"v-table--fixed-header":a.fixedHeader,"v-table--fixed-footer":a.fixedFooter,"v-table--has-top":!!e.top,"v-table--has-bottom":!!e.bottom,"v-table--hover":a.hover},n.value,i.value,a.class],style:a.style},{default:()=>{var o,s,l;return[(o=e.top)==null?void 0:o.call(e),e.default?t("div",{class:"v-table__wrapper",style:{height:x(a.height)}},[t("table",null,[e.default()])]):(s=e.wrapper)==null?void 0:s.call(e),(l=e.bottom)==null?void 0:l.call(e)]}})),{}}});export{k as V};