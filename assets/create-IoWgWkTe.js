import{_ as m,r as o,o as f,c as _,y as e,s as t,H as l,J as n,A as i,P as p,L as r}from"./app-CgYTy_-w.js";const V={name:"coperative-deposit-create",data:()=>({datemenu:!1,formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0})})};function y(s,x,g,h,v,w){const c=o("v-currency-field"),d=o("form-create");return f(),_(d,{"with-helpdesk":""},{default:e(({record:a})=>[t(r,null,{default:e(()=>[t(l,{dense:"",class:"mt-10 text-center"},{default:e(()=>[t(n,{cols:"12",class:"text-h4"},{default:e(()=>[i(p(s.formatter.format(a.grandtotal)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),t(r,null,{default:e(()=>[t(l,null,{default:e(()=>[t(n,{cols:"12"},{default:e(()=>[t(c,{label:"Jumlah (Rp)",autofocus:"",modelValue:a.grandtotal,"onUpdate:modelValue":u=>a.grandtotal=u,"allow-negative":!1,step:"any"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}const D=m(V,[["render",y]]);export{D as default};
