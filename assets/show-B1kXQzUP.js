import{_ as N,c as m,y as e,r as g,o as s,z as b,B as f,s as a,K as t,L as r,a4 as R,H as c,J as u,S as w,D as v,E as X,F as $,a0 as U,V as x,A as y,N as D,Q as L,X as A}from"./mobile-Ca1R9rVu.js";import{V as Z}from"./VTable-IAwmFlYn.js";import{V as B}from"./VBanner-DSQOjbna.js";const E={name:"mycoperative-payment-show",data:()=>({formatter:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0})}),methods:{downloadReceiptOfPayment(i,l){l.$http(`mycoperative/api/receipt/${i.slug}`,{method:"GET",responseType:"blob"}).then(V=>{const k=new Blob([V],{type:"application/pdf"}),p=document.createElement("a");p.href=URL.createObjectURL(k),p.download=i.slug+".pdf",p.click(),URL.revokeObjectURL(p.href),l.loader.state=!1}).catch(()=>{})}}},F={class:"text-caption pr-1 pl-2"},I={class:"py-4",style:{"padding-left":"0 !important","padding-right":"0 !important"}};function S(i,l,V,k,p,C){const T=g("v-currency-field"),_=g("form-show");return s(),m(_,{"with-helpdesk":"","hide-delete":"","hide-edit":"",ref:"form"},{toolbar:e(({record:o,store:d})=>[o.status==="BELUM DIBAYAR"?(s(),m(b,{key:0,color:"orange",icon:"delete",onClick:l[0]||(l[0]=n=>i.$refs.form.openConfirmDelete())})):f("",!0),o.status==="SUDAH LUNAS"?(s(),m(b,{key:1,icon:"print",tooltip:"Unduh Tanda Terima ",onClick:n=>C.downloadReceiptOfPayment(o,d)},null,8,["onClick"])):f("",!0)]),default:e(({record:o,theme:d})=>[a(R,{color:d,class:"position-absolute d-flex pa-1",rounded:"pill",style:{top:"8px",right:"8px"}},{default:e(()=>[l[1]||(l[1]=t("div",{class:"text-caption bg-white rounded-pill px-2"},null,-1)),t("div",F,r(o.status),1)]),_:2},1032,["color"]),a(D,null,{default:e(()=>[a(c,{dense:""},{default:e(()=>[a(u,{cols:"12"},{default:e(()=>[a(w,{color:d,label:"Name",modelValue:o.name,"onUpdate:modelValue":n=>o.name=n,variant:"plain",readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),a(u,{cols:"6"},{default:e(()=>[a(w,{color:d,label:"Nomor",modelValue:o.slug,"onUpdate:modelValue":n=>o.slug=n,variant:"outlined",readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024),a(u,{cols:"6"},{default:e(()=>[a(T,{color:d,label:"Total",modelValue:o.total,"onUpdate:modelValue":n=>o.total=n,variant:"outlined",readonly:""},null,8,["color","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),a(c,null,{default:e(()=>[a(u,{cols:"12"},{default:e(()=>[a(Z,null,{default:e(()=>[t("tbody",null,[(s(!0),v($,null,X(o.details,n=>(s(),v("tr",{key:n.id},[t("td",I,[a(L,{class:A(["mx-auto pa-2",`bg-${d}-lighten-5`]),flat:"",outlined:""},{default:e(()=>[t("table",null,[t("tbody",null,[t("tr",null,[l[2]||(l[2]=t("td",{style:{width:"90px"}}," Nama ",-1)),l[3]||(l[3]=t("td",{style:{width:"10px"}}," : ",-1)),t("td",null,r(n.name),1)]),t("tr",null,[l[4]||(l[4]=t("td",null,"Tenor",-1)),l[5]||(l[5]=t("td",null,":",-1)),t("td",null,r(n.tenor)+"/"+r(n.tenor_total),1)]),t("tr",null,[l[6]||(l[6]=t("td",null,"Total",-1)),l[7]||(l[7]=t("td",null,":",-1)),t("td",null,r(i.formatter.format(n.grandtotal)),1)]),t("tr",null,[l[8]||(l[8]=t("td",null,"Jatuh Tempo",-1)),l[9]||(l[9]=t("td",null,":",-1)),t("td",null,r(n.duedate),1)])])])]),_:2},1032,["class"])])]))),128))])]),_:2},1024)]),_:2},1024),o.paymentmode_id===1?(s(),m(u,{key:0,cols:"12"},{default:e(()=>[a(B,{lines:"two"},{default:e(()=>[a(U,{color:"deep-purple accent-4",size:"40"},{default:e(()=>[a(x,{color:"white"},{default:e(()=>l[10]||(l[10]=[y("privacy_tip")])),_:1})]),_:1}),l[11]||(l[11]=y(" Untuk melakukan pembayaran silahkan datang ke kantor pusat. "))]),_:1})]),_:1})):f("",!0),o.paymentmode_id===2?(s(),m(u,{key:1,cols:"12"},{default:e(()=>[a(B,{lines:"three",stacked:!1},{default:e(()=>[a(U,{class:"mr-2",color:"deep-purple accent-4",size:"40"},{default:e(()=>[a(x,{color:"white"},{default:e(()=>l[12]||(l[12]=[y("privacy_tip")])),_:1})]),_:1}),l[13]||(l[13]=y(" Pembayaran dapat dilakukan dengan cara transfer ke Bank BCA dengan nomor rekening XXXXXXXX Bank Mandiri dengan nomor rekening ZZZZZZZ "))]),_:1})]),_:1})):f("",!0)]),_:2},1024)]),_:2},1024)]),info:e(()=>l[14]||(l[14]=[])),_:1},512)}const j=N(E,[["render",S]]);export{j as default};
