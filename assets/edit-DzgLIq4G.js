import{_ as V,c as _,y as l,r as n,o as f,s as e,R as c,A as u,a2 as y,L as b,W as v,N as U,H as g,J as d,S as s,a3 as x}from"./app-zvvoUnx2.js";const C={name:"coperative-deposit-edit"};function $(i,o,h,T,k,w){const p=n("apps-button"),m=n("v-currency-field"),r=n("form-edit");return f(),_(r,{"with-helpdesk":""},{toolbar:l(({record:a})=>[e(p,{disabled:!(a.grandtotal>0),icon:"move_to_inbox",tooltip:"Update Data",onClick:o[0]||(o[0]=t=>i.$refs.form.postFormEdit())},null,8,["disabled"])]),default:l(({record:a})=>[e(x,null,{default:l(()=>[e(c,{class:"overline py-2"},{default:l(()=>[o[1]||(o[1]=u(" simpanan ")),e(y),u(" Nomor "+b(a.slug),1)]),_:2},1024),e(v),e(U,null,{default:l(()=>[e(g,{dense:""},{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(s,{label:"Keterangan",modelValue:a.name,"onUpdate:modelValue":t=>a.name=t,dense:"","hide-details":"",outlined:"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:l(()=>[e(s,{class:"mt-2",label:"Jatuh Tempo",modelValue:a.duedate,"onUpdate:modelValue":t=>a.duedate=t,dense:"","hide-details":"",outlined:"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:l(()=>[e(s,{class:"mt-2",label:"Jenis",modelValue:a.type,"onUpdate:modelValue":t=>a.type=t,dense:"","hide-details":"",outlined:"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:l(()=>[e(m,{label:"Jumlah (Rp)",autofocus:"",modelValue:a.grandtotal,"onUpdate:modelValue":t=>a.grandtotal=t,"allow-negative":!1,step:"any"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}const N=V(C,[["render",$]]);export{N as default};