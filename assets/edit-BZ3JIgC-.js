import{_ as c,c as u,w as a,r as y,o as m,a as e,d as s,B as i,j as f,k as o,bI as b,t as _,e as h,y as n,m as p,l as g}from"./app-CDLuvF5r.js";import{V as x}from"./VTextarea-V7qOO9ul.js";const U={name:"mycoperative-withdrawal-edit",data:()=>({formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0})})},w={class:"pa-4 text-h3 text-center blue-grey white--text rounded"};function v(r,d,D,I,N,T){const V=y("form-edit");return m(),u(V,{"with-helpdesk":""},{default:a(({record:l})=>[e(i,{class:"overline"},{default:a(()=>d[0]||(d[0]=[s("Informasi Simpanan")])),_:1}),e(p,{class:"pt-0"},{default:a(()=>[e(f,{dense:""},{default:a(()=>[["REJECTED","REPAIRED"].includes(l.status)&&l.message?(m(),u(o,{key:0,cols:"12"},{default:a(()=>[e(b,{dense:"",border:"left",type:"warning"},{default:a(()=>[s(_(l.message),1)]),_:2},1024)]),_:2},1024)):h("",!0),e(o,{cols:"4"},{default:a(()=>[e(n,{label:"Wajib",modelValue:l.amount_of_monthly,"onUpdate:modelValue":t=>l.amount_of_monthly=t,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"4"},{default:a(()=>[e(n,{label:"Tabungan",modelValue:l.amount_of_saving,"onUpdate:modelValue":t=>l.amount_of_saving=t,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"4"},{default:a(()=>[e(n,{label:"Total",modelValue:l.amount_of_deposit,"onUpdate:modelValue":t=>l.amount_of_deposit=t,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(i,{class:"overline"},{default:a(()=>d[1]||(d[1]=[s("Informasi Penarikan")])),_:1}),e(p,{class:"pt-0"},{default:a(()=>[e(f,{dense:""},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[g("div",w,_(r.formatter.format(l.total)),1)]),_:2},1024),e(o,{cols:"12"},{default:a(()=>[e(n,{label:"Nominal",modelValue:l.total,"onUpdate:modelValue":t=>l.total=t,type:"Number","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"12"},{default:a(()=>[e(x,{label:"Keterangan",modelValue:l.description,"onUpdate:modelValue":t=>l.description=t,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}const E=c(U,[["render",v]]);export{E as default};