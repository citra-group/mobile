import{_ as V,r as c,o as s,c as u,y as a,s as e,A as n,W as m,H as i,J as o,bw as h,P as _,B as y,S as d,L as f,K as b}from"./app-CgYTy_-w.js";import{V as g}from"./VTextarea-B9DRB_jG.js";const x={name:"mycoperative-withdrawal-edit",data:()=>({formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0})})},U={class:"pa-4 text-h3 text-center blue-grey white--text rounded"};function w(p,v,D,N,T,C){const r=c("form-edit");return s(),u(r,{"with-helpdesk":""},{default:a(({record:l})=>[e(m,{class:"overline"},{default:a(()=>[n("Informasi Simpanan")]),_:1}),e(f,{class:"pt-0"},{default:a(()=>[e(i,{dense:""},{default:a(()=>[["REJECTED","REPAIRED"].includes(l.status)&&l.message?(s(),u(o,{key:0,cols:"12"},{default:a(()=>[e(h,{dense:"",border:"left",type:"warning"},{default:a(()=>[n(_(l.message),1)]),_:2},1024)]),_:2},1024)):y("",!0),e(o,{cols:"4"},{default:a(()=>[e(d,{label:"Wajib",modelValue:l.amount_of_monthly,"onUpdate:modelValue":t=>l.amount_of_monthly=t,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"4"},{default:a(()=>[e(d,{label:"Tabungan",modelValue:l.amount_of_saving,"onUpdate:modelValue":t=>l.amount_of_saving=t,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"4"},{default:a(()=>[e(d,{label:"Total",modelValue:l.amount_of_deposit,"onUpdate:modelValue":t=>l.amount_of_deposit=t,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(m,{class:"overline"},{default:a(()=>[n("Informasi Penarikan")]),_:1}),e(f,{class:"pt-0"},{default:a(()=>[e(i,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[b("div",U,_(p.formatter.format(l.total)),1)]),_:2},1024),e(o,{cols:"12"},{default:a(()=>[e(d,{label:"Nominal",modelValue:l.total,"onUpdate:modelValue":t=>l.total=t,type:"Number","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"12"},{default:a(()=>[e(g,{label:"Keterangan",modelValue:l.description,"onUpdate:modelValue":t=>l.description=t,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}const E=V(x,[["render",w]]);export{E as default};
