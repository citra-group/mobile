import{_,c as i,y as l,r as Z,o as p,s as e,K as u,L as c,a4 as v,H as g,J as n,S as s,T as y,B as m,a0 as k,V as A,A as V,a1 as U,N as x}from"./mobile-Ca1R9rVu.js";import{V as b}from"./VBanner-DSQOjbna.js";const I={name:"coperative-deposit-show",data:()=>({paydateMenu:!1,duedateMenu:!1}),methods:{approveInvoiceTransfer(r,o){o.$http(`coperative/api/invoice/${r.id}/approve`,{method:"PUT",params:r}).then(()=>{this.$router.push({name:"coperative-invoice"})})}}},B={class:"text-caption pr-1 pl-2"};function N(r,o,T,D,S,R){const X=Z("v-currency-field"),f=Z("form-show");return p(),i(f,{"with-helpdesk":"","hide-edit":"","hide-delete":""},{default:l(({record:a,theme:d})=>[e(v,{color:d,class:"position-absolute d-flex pa-1",rounded:"pill",style:{top:"8px",right:"8px"}},{default:l(()=>[o[0]||(o[0]=u("div",{class:"text-caption bg-white rounded-pill px-2"},"STS",-1)),u("div",B,c(a.paid?"PAID":"UNPAID"),1)]),_:2},1032,["color"]),e(x,null,{default:l(()=>[e(g,{dense:""},{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(s,{label:"Kode",modelValue:a.slug,"onUpdate:modelValue":t=>a.slug=t,variant:"outlined",color:d,readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),e(n,{cols:"12"},{default:l(()=>[e(s,{label:"Keterangan",modelValue:a.name,"onUpdate:modelValue":t=>a.name=t,variant:"outlined",color:d,readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),e(n,{cols:"12"},{default:l(()=>[e(s,{label:"Nama Anggota",modelValue:a.member_name,"onUpdate:modelValue":t=>a.member_name=t,variant:"outlined",color:d,readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),e(n,{cols:"12"},{default:l(()=>[e(X,{label:"Total Tagihan",prefix:"Rp",modelValue:a.grandtotal,"onUpdate:modelValue":t=>a.grandtotal=t,variant:"outlined",color:d,readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),e(n,{cols:"6"},{default:l(()=>[e(s,{modelValue:a.duedate,"onUpdate:modelValue":t=>a.duedate=t,label:"Jatuh Tempo",variant:"outlined",color:d,readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),e(n,{cols:"6"},{default:l(()=>[e(s,{modelValue:a.paydate,"onUpdate:modelValue":t=>a.paydate=t,label:"Tanggal Bayar",variant:"outlined",color:d,readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),a.status==="SUDAH DITRANSFER"?(p(),i(n,{key:0,cols:"12"},{default:l(()=>[e(y,{items:[{text:"BCA-XXXXXXXX",value:"BCA-XXXXXXXX"},{text:"BCA-ZZZZZZZZZ",value:"BCA-ZZZZZZZZZ"},{text:"MANDIRI-XXXXXXXX",value:"MANDIRI-XXXXXXXX"},{text:"MANDIRI-ZZZZZZZZ",value:"MANDIRI-ZZZZZZZZ"}],label:"Bank",modelValue:a.bank,"onUpdate:modelValue":t=>a.bank=t},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):m("",!0),a.status==="SUDAH DITRANSFER"?(p(),i(n,{key:1,cols:"12"},{default:l(()=>[e(b,{"two-line":""},{default:l(()=>[e(k,{color:"deep-purple accent-4",size:"40"},{default:l(()=>[e(A,{color:"white"},{default:l(()=>o[1]||(o[1]=[V("privacy_tip")])),_:1})]),_:1}),o[2]||(o[2]=V(" Pembayaran dapat dilakukan dengan cara transfer ke ")),o[3]||(o[3]=u("ul",null,[u("li",null,"Bank BCA dengan nomor rekening XXXXXXXX"),u("li",null," Bank Mandiri dengan nomor rekening ZZZZZZZ ")],-1)),o[4]||(o[4]=V(" Setelah transfer dilakukan, silahkan unggah bukti bayar dibawah ini. "))]),_:1})]),_:1})):m("",!0),a.status==="SUDAH DITRANSFER"&&a.transfer_path?(p(),i(n,{key:2,cols:"12"},{default:l(()=>[e(U,{src:a.transfer_path},null,8,["src"])]),_:2},1024)):m("",!0)]),_:2},1024)]),_:2},1024)]),info:l(()=>o[5]||(o[5]=[])),_:1})}const C=_(I,[["render",N]]);export{C as default};
