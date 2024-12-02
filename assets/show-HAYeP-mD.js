import{_ as M,c as V,y as a,r as D,o as r,z as p,s as t,A as s,V as C,B as v,K as e,L as d,a4 as x,H as k,J as i,N as m,a5 as B,D as P,a8 as F,F as $,E as G,T as z,S as T,a2 as S,$ as H,Q as b,R as I,W as E,a7 as O,a6 as L}from"./app-CTVUFAzl.js";import{V as K,a as J}from"./VSlider-DziMInOX.js";import{V as W,a as U}from"./VRadioGroup-BdWfpE13.js";import{V as Y}from"./VTextarea-BXjN1u9P.js";import{V as N}from"./VTable-CUTqS9D0.js";const Q={name:"coperative-loan-show",data:()=>({sheet:!1,toggle:null,dialogEdit:!1,dialogMessage:!1,menuTransferDate:!1,formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0})}),methods:{calculateLoanGrandTotal(n){n.total_principal=Math.round(n.total_principal*100)/100,n.percent_approval=Math.round(n.approval_interest/n.tenor*100)/100,n.total_interest=Math.round(n.total_principal*(n.approval_interest/100)*100)/100,n.monthly_interest=Math.round((n.total_principal/n.tenor+n.total_interest/n.tenor)*100)/100,n.grandtotal=n.total_principal+n.admfee+n.total_interest},dateFormated(n){if(!n)return null;const[l,j,_]=n.split("-");return`${_}-${j}-${l}`},openDialogMessage(){this.dialogMessage=!0},rejectedCurrentLoan(n,l){if(!n.rejected_message){l.$snackbar({text:"Berikan alasan penolakan pinjaman."});return}l.$http(`coperative/api/loan/${n.id}/rejected`,{method:"POST",params:n}).then(()=>{l.snackbar.color="green",l.snackbar.text="Berhasil ditolak",l.snackbar.state=!0,this.$router.push({name:"coperative-loan"})})},verifiedCurrentLoan(n,l){l.$http(`coperative/api/loan/${n.id}/verified`,{method:"POST",params:n}).then(()=>{l.snackbar.color="green",l.snackbar.text="Berhasil diverifikasi",l.snackbar.state=!0,this.$router.push({name:"coperative-loan"})})},approveCurrentLoan(n,l){l.$http(`coperative/api/loan/${n.id}/approve`,{method:"POST",params:n}).then(()=>{this.$router.push({name:"coperative-loan"})})},updateLoanPayDate(n,l){l.$http(`coperative/api/loan/${n.id}/paydate`,{method:"POST",params:n}).then(()=>{l.snackbar.color="green",l.snackbar.text="Berhasil",l.snackbar.state=!0,this.$router.push({name:"coperative-loan"})})},updateStatusOfLoan(n,l){l.$http(`coperative/api/loan/${n.id}/close-by-bank`,{method:"POST",params:n}).then(()=>{l.snackbar.color="green",l.snackbar.text="Berhasil",l.snackbar.state=!0,this.$router.push({name:"coperative-loan"})})},downloadReceiptOfMoney(n,l){l.$http(`coperative/api/loan/${n.id}/download-receipt`,{method:"POST",params:n}).then(()=>{this.$router.push({name:"coperative-loan"})})}}},q={class:"text-caption pr-1 pl-2"},X={class:"text-h5"},Z={class:"text-h5"},h={class:"d-flex"},c={class:"d-flex align-center"},ll={class:"text-h6"},tl={class:"px-4 py-2 d-flex justify-end"},al={class:"text-right"},el={class:"text-h5"},nl={key:0},ol={key:1},ul={class:"text-h5"};function sl(n,l,j,_,dl,g){const R=D("v-date-input"),A=D("form-show");return r(),V(A,{"with-helpdesk":"","hide-edit":"","hide-delete":""},{toolbar:a(({record:o,store:y})=>[o.status==="ONGOING"?(r(),V(p,{key:0,class:"ma-2",icon:"",tooltip:"Cetak Kuitansi",onClick:f=>g.downloadReceiptOfMoney(o,y)},{default:a(()=>[t(C,null,{default:a(()=>l[9]||(l[9]=[s("print")])),_:1})]),_:2},1032,["onClick"])):v("",!0)]),default:a(({record:o,store:y,theme:f})=>[t(x,{color:f,class:"position-absolute d-flex pa-1",rounded:"pill",style:{top:"8px",right:"8px"}},{default:a(()=>[l[10]||(l[10]=e("div",{class:"text-caption bg-white rounded-pill px-2"},"STS",-1)),e("div",q,d(o.status),1)]),_:2},1032,["color"]),t(m,null,{default:a(()=>[t(k,{dense:""},{default:a(()=>[t(i,{cols:"12"},{default:a(()=>[e("div",X,[l[11]||(l[11]=s(" Nominal Pinjaman: ")),e("div",null,d(n.formatter.format(o.total_principal)),1)])]),_:2},1024)]),_:2},1024)]),_:2},1024),t(B,{class:"overline"},{default:a(()=>l[12]||(l[12]=[s("Tenor")])),_:1}),t(m,{class:"pt-0"},{default:a(()=>[t(k,{dense:""},{default:a(()=>[t(i,{cols:"12"},{default:a(()=>[e("div",Z,d(o.tenor)+"x",1)]),_:2},1024),o.status==="VERIFIED"?(r(),V(i,{key:0,cols:"12"},{default:a(()=>[t(K,{max:o.loan_tenor_maximal,min:o.loan_tenor_minimal,step:1,modelValue:o.tenor,"onUpdate:modelValue":u=>o.tenor=u,onChange:u=>g.calculateLoanGrandTotal(o,y),readonly:"","hide-details":""},null,8,["max","min","modelValue","onUpdate:modelValue","onChange"])]),_:2},1024)):v("",!0)]),_:2},1024)]),_:2},1024),["ONGOING","COMPLETED"].includes(o.status)?(r(),P($,{key:0},[t(m,null,{default:a(()=>[t(F,{class:"overline"},{default:a(()=>l[13]||(l[13]=[s("Detail Pinjaman")])),_:1})]),_:1}),(r(!0),P($,null,G(o.details,(u,w)=>(r(),V(b,{rounded:"lg",class:"mb-4 mx-2",key:w,flat:"",border:""},{default:a(()=>[t(m,{class:"d-flex pb-0"},{default:a(()=>[t(i,{cols:"6"},{default:a(()=>[s(d(u.slug),1)]),_:2},1024),t(i,null,{default:a(()=>[l[14]||(l[14]=e("small",null,"Tenor:",-1)),e("small",null,d(u.tenor)+"/"+d(u.tenor_total),1)]),_:2},1024),t(i,null,{default:a(()=>[l[15]||(l[15]=e("small",null,"Status:",-1)),t(C,{color:u.paid?"green":"grey"},{default:a(()=>[s(d(u.paid?"check_circle":"radio_button_unchecked"),1)]),_:2},1032,["color"])]),_:2},1024)]),_:2},1024),t(m,{class:"bg-grey-lighten-5"},{default:a(()=>[e("div",h,[t(i,null,{default:a(()=>[l[16]||(l[16]=e("small",null,"Jatuh Tempo",-1)),e("div",null,[e("small",null,d(u.duedate),1)])]),_:2},1024),t(i,null,{default:a(()=>[l[17]||(l[17]=e("small",null,"Pokok",-1)),e("div",null,d(n.formatter.format(u.principal)),1)]),_:2},1024),t(i,null,{default:a(()=>[l[18]||(l[18]=e("small",null,"Bunga",-1)),e("div",null,d(n.formatter.format(u.interest)),1)]),_:2},1024),t(i,null,{default:a(()=>[l[19]||(l[19]=e("small",null,"Total",-1)),e("div",null,[e("small",null,d(n.formatter.format(u.grandtotal)),1)])]),_:2},1024)])]),_:2},1024)]),_:2},1024))),128))],64)):(r(),P($,{key:1},[t(B,{class:"overline"},{default:a(()=>l[20]||(l[20]=[s("Pinjaman")])),_:1}),t(B,{class:"overline"},{default:a(()=>l[21]||(l[21]=[s("metode pembayaran")])),_:1}),t(m,{class:"pt-0"},{default:a(()=>[t(k,{dense:""},{default:a(()=>[t(i,{cols:"12"},{default:a(()=>[t(W,{modelValue:o.transfermode,"onUpdate:modelValue":u=>o.transfermode=u,disabled:o.status!=="APPROVED","hide-details":"",readonly:"",row:""},{default:a(()=>[t(U,{label:"CASH",value:1}),t(U,{label:"BANK",value:2}),t(U,{label:"PAYMENT-GATEWAY",value:3})]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024),o.transfermode===2?(r(),P($,{key:0},[t(i,{cols:"4"},{default:a(()=>[t(z,{variant:"outlined",items:["BRI","BCA","BNI","BTPN","MANDIRI"],label:"Bank",color:f,modelValue:o.bank_type,"onUpdate:modelValue":u=>o.bank_type=u,readonly:"","hide-details":""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),t(i,{cols:"8"},{default:a(()=>[t(T,{variant:"outlined",color:f,label:"Atas Nama",modelValue:o.bank_account_name,"onUpdate:modelValue":u=>o.bank_account_name=u,readonly:"","hide-details":""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),t(i,{cols:"12"},{default:a(()=>[t(T,{variant:"outlined",color:f,label:"Nomor Rekening",modelValue:o.bank_account_number,"onUpdate:modelValue":u=>o.bank_account_number=u,readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024)],64)):v("",!0)]),_:2},1024)]),_:2},1024),["APPROVED","ONGOING"].includes(o.status)?(r(),V(x,{key:0},{default:a(()=>[t(m,null,{default:a(()=>[t(S),o.status==="APPROVED"&&o.transfermode===1?(r(),V(p,{key:0,block:"",color:f,onClick:u=>g.updateLoanPayDate(o,y)},{default:a(()=>[t(C,null,{default:a(()=>l[22]||(l[22]=[s("save")])),_:1}),l[23]||(l[23]=s(" Pay-Cash"))]),_:2},1032,["color","onClick"])):v("",!0)]),_:2},1024)]),_:2},1024)):v("",!0),t(m,{class:"pt-0"},{default:a(()=>[o.status==="APPROVED"&&o.transfermode===2?(r(),V(k,{key:0,dense:""},{default:a(()=>[t(i,{cols:"12"},{default:a(()=>[t(R,{color:f,variant:"outlined",modelValue:o.transferdate,"onUpdate:modelValue":u=>o.transferdate=u,label:"Tanggal Transfer","prepend-icon":"","prepend-inner-icon":"$calendar"},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),t(i,{cols:"12"},{default:a(()=>[t(H,{color:f,variant:"outlined",accept:"image/*",label:"Upload Bukti Transfer",modelValue:o.image_path,"onUpdate:modelValue":u=>o.image_path=u,"prepend-icon":"","prepend-inner-icon":"attach_file","hide-details":""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):v("",!0)]),_:2},1024)],64)),t(L,{modelValue:n.dialogMessage,"onUpdate:modelValue":l[1]||(l[1]=u=>n.dialogMessage=u),width:"500"},{default:a(()=>[t(b,null,{default:a(()=>[t(I,{class:"text-h5 grey lighten-2"},{default:a(()=>l[24]||(l[24]=[s("Alasan Penolakan")])),_:1}),t(m,null,{default:a(()=>[t(k,null,{default:a(()=>[t(i,{cols:"12"},{default:a(()=>[t(Y,{modelValue:o.rejected_message,"onUpdate:modelValue":u=>o.rejected_message=u},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),t(E),t(O,null,{default:a(()=>[t(S),t(p,{color:"grey",text:"",onClick:l[0]||(l[0]=u=>n.dialogMessage=!1)},{default:a(()=>l[25]||(l[25]=[s(" Batal ")])),_:1}),t(p,{color:"primary",text:"",onClick:u=>g.rejectedCurrentLoan(o,y)},{default:a(()=>l[26]||(l[26]=[s(" Simpan ")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"]),t(b,{class:"position-sticky bottom-0 mx-4 px-2",flat:"",color:`${f}-lighten-5`},{default:a(()=>[e("div",c,[l[28]||(l[28]=e("small",null,"Detail Pinjaman",-1)),t(p,{icon:"",onClick:l[2]||(l[2]=u=>n.sheet=!n.sheet),variant:"text",size:"small"},{default:a(()=>[t(C,null,{default:a(()=>l[27]||(l[27]=[s("arrow_drop_up")])),_:1})]),_:1})]),t(k,{"no-gutters":"",class:"d-flex"},{default:a(()=>[t(i,null,{default:a(()=>[e("div",ll,d(n.formatter.format(o.monthly_interest)),1)]),_:2},1024),t(i,null,{default:a(()=>[e("div",tl,[["PUBLISH","VERIFIED"].includes(o.status)?(r(),V(p,{key:0,variant:"flat",size:"small",color:"red",onClick:l[3]||(l[3]=u=>n.dialogMessage=!0)},{default:a(()=>l[29]||(l[29]=[s("Tolak")])),_:1})):v("",!0),o.status==="PUBLISH"?(r(),V(p,{key:1,variant:"flat",class:"ml-2",size:"small",color:f,onClick:u=>g.verifiedCurrentLoan(o,y)},{default:a(()=>l[30]||(l[30]=[s("Verifikasi")])),_:2},1032,["color","onClick"])):v("",!0),o.status==="VERIFIED"?(r(),V(p,{key:2,variant:"flat",size:"small",class:"ml-1",color:f,onClick:u=>g.approveCurrentLoan(o,y)},{default:a(()=>l[31]||(l[31]=[s("Setujui")])),_:2},1032,["color","onClick"])):v("",!0),o.status==="APPROVED"&&o.transfermode===2?(r(),V(p,{key:3,variant:"flat",size:"small",color:f,disabled:o.transferdate===null,onClick:u=>g.updateStatusOfLoan(o,y)},{default:a(()=>l[32]||(l[32]=[s("Selesai")])),_:2},1032,["color","disabled","onClick"])):v("",!0)])]),_:2},1024)]),_:2},1024),l[65]||(l[65]=e("div",{class:"px-4 py-2 align-center"},null,-1)),t(J,{modelValue:n.sheet,"onUpdate:modelValue":l[8]||(l[8]=u=>n.sheet=u),inset:n.$vuetify.display.width>=600},{default:a(()=>[t(b,{style:{"border-top-left-radius":"25px","border-top-right-radius":"25px"}},{default:a(()=>[t(m,null,{default:a(()=>[e("div",al,[t(p,{icon:"",color:"red",variant:"tonal",onClick:l[4]||(l[4]=u=>n.sheet=!n.sheet)},{default:a(()=>[t(C,null,{default:a(()=>l[33]||(l[33]=[s("close")])),_:1})]),_:1})]),l[54]||(l[54]=e("br",null,null,-1)),l[55]||(l[55]=e("br",null,null,-1)),t(b,{flat:"",color:`${f}-lighten-5`},{default:a(()=>[t(m,null,{default:a(()=>[l[35]||(l[35]=e("div",null,[e("small",null,"Angsuran / Bulan")],-1)),e("div",el,[s(d(n.formatter.format(o.monthly_interest)),1),l[34]||(l[34]=e("small",null,"/ Bulan",-1))])]),_:2},1024)]),_:2},1032,["color"]),t(k,null,{default:a(()=>[t(i,{cols:"12"},{default:a(()=>[t(N,{density:""},{default:a(()=>[e("tbody",null,[e("tr",null,[l[36]||(l[36]=e("td",null," Total Pokok Pinjaman ",-1)),l[37]||(l[37]=e("td",null,":",-1)),e("td",null,d(n.formatter.format(o.total_principal)),1),l[38]||(l[38]=e("td",null," ",-1))]),e("tr",null,[l[43]||(l[43]=e("td",null,"Total Bunga [%]",-1)),l[44]||(l[44]=e("td",null,":",-1)),e("td",null,d(o.approval_interest)+" of "+d(o.percent_interest)+"% ",1),o.status==="VERIFIED"?(r(),P("td",nl,[t(p,{color:"orange",icon:"",size:"small",variant:"tonal",onClick:l[5]||(l[5]=u=>n.dialogEdit=!0)},{default:a(()=>[t(C,{small:""},{default:a(()=>l[39]||(l[39]=[s("edit")])),_:1})]),_:1}),t(L,{modelValue:n.dialogEdit,"onUpdate:modelValue":l[7]||(l[7]=u=>n.dialogEdit=u),width:"500"},{default:a(()=>[t(b,null,{default:a(()=>[t(I,{class:"text-h5 grey lighten-2"},{default:a(()=>l[40]||(l[40]=[s("Edit Bunga Pinjaman")])),_:1}),t(m,{class:"pt-4"},{default:a(()=>[t(k,{dense:""},{default:a(()=>[t(i,{cols:"6"},{default:a(()=>[t(T,{label:"Pengajuan Bunga Pinjaman",modelValue:o.percent_interest,"onUpdate:modelValue":u=>o.percent_interest=u,suffix:"%","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(i,{cols:"6"},{default:a(()=>[t(T,{label:"Persetujuan Bunga Pinjaman",modelValue:o.approval_interest,"onUpdate:modelValue":u=>o.approval_interest=u,suffix:"%","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),t(E),t(O,null,{default:a(()=>[t(S),t(p,{text:"",onClick:l[6]||(l[6]=u=>n.dialogEdit=!1)},{default:a(()=>l[41]||(l[41]=[s(" Batal ")])),_:1}),t(p,{color:"primary",text:"",onClick:u=>{n.dialogEdit=!1,g.calculateLoanGrandTotal(o)}},{default:a(()=>l[42]||(l[42]=[s(" Simpan ")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])])):(r(),P("td",ol," "))]),e("tr",null,[l[45]||(l[45]=e("td",null,"Total Bunga [Rp]",-1)),l[46]||(l[46]=e("td",null,":",-1)),e("td",null,d(n.formatter.format(o.total_interest)),1),l[47]||(l[47]=e("td",null," ",-1))]),e("tr",null,[l[48]||(l[48]=e("td",null,"Admin Fee",-1)),l[49]||(l[49]=e("td",null,":",-1)),e("td",null,d(n.formatter.format(o.admfee)),1),l[50]||(l[50]=e("td",null," ",-1))]),e("tr",null,[l[51]||(l[51]=e("td",null,"Grand Total",-1)),l[52]||(l[52]=e("td",null,":",-1)),e("td",null,d(n.formatter.format(o.grandtotal)),1),l[53]||(l[53]=e("td",null," ",-1))])])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),t(E),t(m,null,{default:a(()=>[t(b,{flat:"",color:`${f}-lighten-5`},{default:a(()=>[t(m,null,{default:a(()=>[l[56]||(l[56]=e("small",null,"Pinjaman Berjalan",-1)),e("div",ul,d(n.formatter.format(o.current_of_loan)),1)]),_:2},1024)]),_:2},1032,["color"]),t(k,{dense:""},{default:a(()=>[t(i,{cols:"12"},{default:a(()=>[t(N,{density:""},{default:a(()=>[e("tbody",null,[e("tr",null,[l[57]||(l[57]=e("td",null,"Maximal Pinjaman",-1)),l[58]||(l[58]=e("td",null,":",-1)),e("td",null,d(n.formatter.format(o.amount_of_maxloan)),1)]),e("tr",null,[l[59]||(l[59]=e("td",null,"Limit Pinjaman",-1)),l[60]||(l[60]=e("td",null,":",-1)),e("td",null,d(n.formatter.format(o.limit_of_maxloan)),1)]),e("tr",null,[l[61]||(l[61]=e("td",null,"Total Pinjaman",-1)),l[62]||(l[62]=e("td",null,":",-1)),e("td",null,d(n.formatter.format(o.total_of_loan)),1)]),e("tr",null,[l[63]||(l[63]=e("td",null,"Sisa Pinjaman",-1)),l[64]||(l[64]=e("td",null,":",-1)),e("td",null,d(n.formatter.format(o.current_of_loan)),1)])])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue","inset"])]),_:2},1032,["color"]),t(m)]),_:1})}const Vl=M(Q,[["render",sl]]);export{Vl as default};
