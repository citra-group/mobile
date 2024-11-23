import{_ as C,r as _,o as d,c as r,y as e,z as V,s as a,A as n,V as f,B as c,H as y,J as s,S as g,W as v,D,E as N,F as S,a0 as b,a1 as X,L as x,K as p,Q as F,G as I,Y as w,P as m,X as Z}from"./app-CgYTy_-w.js";import{V as U}from"./VBanner-BiUcORGF.js";const L={name:"coperative-payment-show",computed:{getEndDate(){var o=new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDate()+1);return o.toISOString().slice(0,10)}},data:()=>({date:new Date,menuTerima:!1,formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0})}),methods:{dateFormated(o){if(!o)return null;const[u,h,k]=o.split("-");return`${k}-${h}-${u}`},sendAcception(o,u){u.$http(`coperative/api/payment/${o.id}/approve`,{method:"PUT",params:o}).then(()=>{u.snackbar.color="green",u.snackbar.text="Berhasil",u.snackbar.state=!0,this.$router.push({name:"coperative-payment"})})}}},z=p("div",{class:"pt-2"},"Tenor",-1),H=p("div",{class:"pt-2"},"Total",-1),K=p("div",{class:"pt-2"},"Jatuh Tempo",-1),E=p("ul",null,[p("li",null,"Bank BCA dengan nomor rekening XXXXXXXX"),p("li",null," Bank Mandiri dengan nomor rekening ZZZZZZZ ")],-1);function P(o,u,h,k,R,B){const T=_("v-currency-field"),$=_("v-date-input"),A=_("form-show");return d(),r(A,{"with-helpdesk":"","hide-edit":"","hide-delete":""},{toolbar:e(({record:t,store:i})=>[t.status!=="SUDAH LUNAS"?(d(),r(V,{key:0,tooltip:"Terima",icon:"",onClick:l=>B.sendAcception(t,i)},{default:e(()=>[a(f,null,{default:e(()=>[n("swipe_right")]),_:1})]),_:2},1032,["onClick"])):c("",!0)]),default:e(({record:t,theme:i})=>[a(x,null,{default:e(()=>[a(y,{dense:""},{default:e(()=>[a(s,{cols:"12"},{default:e(()=>[a(g,{label:"Name",modelValue:t.name,"onUpdate:modelValue":l=>t.name=l,dense:"","hide-details":"",variant:"plain",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(v),a(s,{cols:"6"},{default:e(()=>[a(g,{color:`${i} thin`,class:"mt-2",label:"Nomor",modelValue:t.slug,"onUpdate:modelValue":l=>t.slug=l,dense:"","hide-details":"",variant:"outlined",readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),a(s,{cols:"6"},{default:e(()=>[a(T,{color:i,class:"mt-2",label:"Total",modelValue:t.grandtotal,"onUpdate:modelValue":l=>t.grandtotal=l,dense:"","hide-details":"",variant:"outlined",readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),t.paymentmode==="BANK"?(d(),r(s,{key:0,cols:"12",md:"6"},{default:e(()=>[a($,{color:i,modelValue:t.paid_at,"onUpdate:modelValue":l=>t.paid_at=l,label:"Tanggal Terima","prepend-icon":"","prepend-inner-icon":"$calendar",variant:"outlined"},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024)):c("",!0),(d(!0),D(S,null,N(t.details,l=>(d(),r(F,{key:l.id,class:"mb-4 w-100",flat:""},{default:e(()=>[a(I,{lines:"three",style:{padding:"0%"}},{default:e(()=>[a(w,{class:"px-2 py-2"},{default:e(()=>[n(m(l.name),1)]),_:2},1024),a(v),a(w,{class:Z([`bg-${i}-lighten-5`,"py-4 px-2"])},{default:e(()=>[a(y,null,{default:e(()=>[a(s,{cols:"4"},{default:e(()=>[z,n(" "+m(l.tenor)+"/ "+m(l.tenor_total),1)]),_:2},1024),a(s,{cols:"4"},{default:e(()=>[H,n(" "+m(o.formatter.format(l.grandtotal)),1)]),_:2},1024),a(s,{cols:"4"},{default:e(()=>[K,n(" "+m(l.duedate),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1024))),128)),t.paymode==="CASH"?(d(),r(s,{key:1,cols:"12"},{default:e(()=>[a(U,{"two-line":""},{default:e(()=>[a(b,{color:"deep-purple accent-4",size:"40"},{default:e(()=>[a(f,{color:"white"},{default:e(()=>[n("privacy_tip")]),_:1})]),_:1}),n(" Untuk melakukan pembayaran silahkan datang ke kantor pusat. ")]),_:1})]),_:1})):c("",!0),t.paymode==="BANK"?(d(),r(s,{key:2,cols:"12"},{default:e(()=>[a(U,{"two-line":""},{default:e(()=>[a(b,{color:"deep-purple accent-4",size:"40"},{default:e(()=>[a(f,{color:"white"},{default:e(()=>[n("privacy_tip")]),_:1})]),_:1}),n(" Pembayaran dapat dilakukan dengan cara transfer ke "),E,n(" Setelah transfer dilakukan, silahkan unggah bukti bayar dibawah ini. ")]),_:1})]),_:1})):c("",!0),t.paymode==="BANK"&&t.transfer_path?(d(),r(s,{key:3,cols:"12"},{default:e(()=>[a(X,{src:t.transfer_path},null,8,["src"])]),_:2},1024)):c("",!0)]),_:2},1024)]),_:2},1024)]),info:e(({record:t,store:i,theme:l})=>[t.status==="SUDAH LUNAS"?(d(),r(V,{key:0,class:"mt-2",color:l,block:"",onClick:J=>o.downloadReceipt(t,i)},{default:e(()=>[n("Unduh Tanda Terima")]),_:2},1032,["color","onClick"])):c("",!0)]),_:1})}const G=C(L,[["render",P]]);export{G as default};
