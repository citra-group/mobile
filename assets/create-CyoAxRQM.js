import{_ as p,c as u,y as t,r as n,o as _,s as a,z as f,H as h,J as c,K as y,L as v,N as V}from"./app-D4-JbIhK.js";const C={name:"mycoperative-deposit-create",data:()=>({datemenu:!1,formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0})}),methods:{postFormCreate(o,s){s.$http("mycoperative/api/deposit",{method:"POST",params:o,contentType:"multipart/form-data"}).then(()=>{this.$router.push({name:"mycoperative-payment-create"})})}}},g={class:"text-h3"};function b(o,s,w,x,$,d){const m=n("v-currency-field"),i=n("form-create");return _(),u(i,{"with-helpdesk":"","hide-save":""},{toolbar:t(({record:e,store:r})=>[a(f,{disabled:!(e.grandtotal>0),icon:"move_to_inbox",color:"white",onClick:l=>d.postFormCreate(e,r)},null,8,["disabled","onClick"])]),default:t(({record:e,theme:r})=>[a(V,{class:"pt-4"},{default:t(()=>[a(h,{dense:""},{default:t(()=>[a(c,{cols:"12"},{default:t(()=>[y("div",g,v(o.formatter.format(e.grandtotal)),1)]),_:2},1024),a(c,{cols:"12"},{default:t(()=>[a(m,{label:"Jumlah (Rp)",autofocus:"",modelValue:e.grandtotal,"onUpdate:modelValue":l=>e.grandtotal=l,"allow-negative":!1,step:"any",color:r},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}const B=p(C,[["render",b]]);export{B as default};