import{_ as V,c,w as a,r as i,o as y,a as e,x,d,m as s,B as m,j as r,k as n,y as u,l as b,t as U}from"./app-Bz4LNFaU.js";import{V as h}from"./VTextarea-VFwdX7TJ.js";const v={name:"coperative-withdrawal-create",data:()=>({formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0})})},w={class:"pa-4 text-h3 text-center blue-grey white--text rounded"};function g(f,o,T,k,C,D){const _=i("v-currency-field"),p=i("form-create");return y(),c(p,{"with-helpdesk":""},{default:a(({record:l})=>[e(s,null,{default:a(()=>[e(x,{class:"overline py-2"},{default:a(()=>o[0]||(o[0]=[d("Penarikan")])),_:1})]),_:1}),e(m,null,{default:a(()=>o[1]||(o[1]=[d("Informasi Simpanan")])),_:1}),e(s,{class:"pt-3 pb-5"},{default:a(()=>[e(r,{dense:""},{default:a(()=>[e(n,{cols:"4"},{default:a(()=>[e(u,{label:"Wajib",modelValue:l.amount_of_monthly,"onUpdate:modelValue":t=>l.amount_of_monthly=t,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{cols:"4"},{default:a(()=>[e(u,{label:"Tabungan",modelValue:l.amount_of_saving,"onUpdate:modelValue":t=>l.amount_of_saving=t,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{cols:"4"},{default:a(()=>[e(u,{label:"Total",modelValue:l.amount_of_deposit,"onUpdate:modelValue":t=>l.amount_of_deposit=t,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(m,null,{default:a(()=>o[2]||(o[2]=[d("Informasi Penarikan")])),_:1}),e(s,{class:"pt-0"},{default:a(()=>[e(r,{dense:""},{default:a(()=>[e(n,{cols:"12"},{default:a(()=>[b("div",w,U(f.formatter.format(l.total)),1)]),_:2},1024),e(n,{cols:"12"},{default:a(()=>[e(_,{label:"Nominal",prefix:"Rp",modelValue:l.total,"onUpdate:modelValue":t=>l.total=t,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{cols:"12"},{default:a(()=>[e(h,{label:"Keterangan",modelValue:l.description,"onUpdate:modelValue":t=>l.description=t,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}const B=V(v,[["render",g]]);export{B as default};
