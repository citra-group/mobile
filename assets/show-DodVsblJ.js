import{_,c as i,w as l,r as Z,o as p,a,l as u,t as c,M as v,j as g,k as n,y as s,z as k,e as m,I as y,b as A,d as V,J as U,m as b}from"./app-Bz4LNFaU.js";import{V as x}from"./VBanner-CtEgH0Am.js";const I={name:"coperative-deposit-show",data:()=>({paydateMenu:!1,duedateMenu:!1}),methods:{approveInvoiceTransfer(r,o){o.$http(`coperative/api/invoice/${r.id}/approve`,{method:"PUT",params:r}).then(()=>{this.$router.push({name:"coperative-invoice"})})}}},B={class:"text-caption pr-1 pl-2"};function D(r,o,N,T,w,R){const X=Z("v-currency-field"),f=Z("form-show");return p(),i(f,{"with-helpdesk":"","hide-edit":"","hide-delete":""},{default:l(({record:e,theme:d})=>[a(v,{color:d,class:"position-absolute d-flex pa-1",rounded:"pill",style:{top:"8px",right:"8px"}},{default:l(()=>[o[0]||(o[0]=u("div",{class:"text-caption bg-white rounded-pill px-2"},"STS",-1)),u("div",B,c(e.paid?"PAID":"UNPAID"),1)]),_:2},1032,["color"]),a(b,null,{default:l(()=>[a(g,{dense:""},{default:l(()=>[a(n,{cols:"12"},{default:l(()=>[a(s,{label:"Kode",modelValue:e.slug,"onUpdate:modelValue":t=>e.slug=t,variant:"outlined",color:d,readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),a(n,{cols:"12"},{default:l(()=>[a(s,{label:"Keterangan",modelValue:e.name,"onUpdate:modelValue":t=>e.name=t,variant:"outlined",color:d,readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),a(n,{cols:"12"},{default:l(()=>[a(s,{label:"Nama Anggota",modelValue:e.member_name,"onUpdate:modelValue":t=>e.member_name=t,variant:"outlined",color:d,readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),a(n,{cols:"12"},{default:l(()=>[a(X,{label:"Total Tagihan",prefix:"Rp",modelValue:e.grandtotal,"onUpdate:modelValue":t=>e.grandtotal=t,variant:"outlined",color:d,readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),a(n,{cols:"6"},{default:l(()=>[a(s,{modelValue:e.duedate,"onUpdate:modelValue":t=>e.duedate=t,label:"Jatuh Tempo",variant:"outlined",color:d,readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),a(n,{cols:"6"},{default:l(()=>[a(s,{modelValue:e.paydate,"onUpdate:modelValue":t=>e.paydate=t,label:"Tanggal Bayar",variant:"outlined",color:d,readonly:""},null,8,["modelValue","onUpdate:modelValue","color"])]),_:2},1024),e.status==="SUDAH DITRANSFER"?(p(),i(n,{key:0,cols:"12"},{default:l(()=>[a(k,{items:[{text:"BCA-XXXXXXXX",value:"BCA-XXXXXXXX"},{text:"BCA-ZZZZZZZZZ",value:"BCA-ZZZZZZZZZ"},{text:"MANDIRI-XXXXXXXX",value:"MANDIRI-XXXXXXXX"},{text:"MANDIRI-ZZZZZZZZ",value:"MANDIRI-ZZZZZZZZ"}],label:"Bank",modelValue:e.bank,"onUpdate:modelValue":t=>e.bank=t},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):m("",!0),e.status==="SUDAH DITRANSFER"?(p(),i(n,{key:1,cols:"12"},{default:l(()=>[a(x,{"two-line":""},{default:l(()=>[a(y,{color:"deep-purple accent-4",size:"40"},{default:l(()=>[a(A,{color:"white"},{default:l(()=>o[1]||(o[1]=[V("privacy_tip")])),_:1})]),_:1}),o[2]||(o[2]=V(" Pembayaran dapat dilakukan dengan cara transfer ke ")),o[3]||(o[3]=u("ul",null,[u("li",null,"Bank BCA dengan nomor rekening XXXXXXXX"),u("li",null," Bank Mandiri dengan nomor rekening ZZZZZZZ ")],-1)),o[4]||(o[4]=V(" Setelah transfer dilakukan, silahkan unggah bukti bayar dibawah ini. "))]),_:1})]),_:1})):m("",!0),e.status==="SUDAH DITRANSFER"&&e.transfer_path?(p(),i(n,{key:2,cols:"12"},{default:l(()=>[a(U,{src:e.transfer_path},null,8,["src"])]),_:2},1024)):m("",!0)]),_:2},1024)]),_:2},1024)]),info:l(()=>o[5]||(o[5]=[])),_:1})}const C=_(I,[["render",D]]);export{C as default};
