import{_ as D,c as g,y as a,r as V,o as s,s as o,D as f,E as R,F as C,K as S,N as h,W as y,H as E,J as w,$ as B,z as M,A as I,X as T,V as L,L as v}from"./mobile-Ca1R9rVu.js";const F={name:"coperative-deposit-data",data:()=>({dialogReport:!1,menuDateStart:!1,dateStart:null,menuDateEnd:!1,dateEnd:null,reportMode:null,reportYear:2023,fileImport:null}),methods:{printReport(t){this.dialogReport=!1,t.loader.state=!0;let e={};switch(e.mode=this.reportMode,e.filters=t.pageFilters,this.reportMode){case"laporan_simpanan":case"piutang_simpanan":e.date_start=this.dateStart,e.date_end=this.dateEnd;break;default:e.year=this.reportYear;break}t.$http("coperative/api/deposit/print-report",{method:"GET",params:e,responseType:"blob"}).then(k=>{const n=new Date;let _=n.getDate(),i=n.getMonth()+1,p=n.getFullYear();const c=new Blob([k],{type:"application/pdf"}),l=document.createElement("a");l.href=URL.createObjectURL(c),l.download=this.reportMode+`_${_}-${i}-${p}.pdf`,l.click(),URL.revokeObjectURL(l.href),t.loader.state=!1,this.dateStart=null,this.dateEnd=null,this.reportMode=null}).catch(()=>{t.loader.state=!1})},processImportData(t){t.$http("coperative/api/deposit/import-data",{method:"POST",contentType:"multipart/form-data",params:{file:this.fileImport}}).then(()=>{t.snackbar.color="green",t.snackbar.text="Berhasil diImport",t.snackbar.state=!0}).catch(()=>{})}}},U=["onClick"],N={key:1};function O(t,e,k,n,_,i){const p=V("item-data"),c=V("form-data");return s(),g(c,{"hide-create":""},{desktopRow:a(({headers:l,index:m,internalItem:r,isSelected:$,record:d,toggleSelect:b})=>[o(p,{headers:l,item:d,index:m,internalItem:r,isSelected:$,toggleSelect:b},{default:a(()=>[(s(!0),f(C,null,R(l,(u,x)=>(s(),f("td",{key:x,class:T(u.mode==="icon"?"text-center":"text-left"),onClick:Y=>b(r)},[u.mode==="icon"?(s(),g(L,{key:0,color:d.paid===!0?"green":"black"},{default:a(()=>[I(v(d.paid===!0?"check_circle":"unpublished "),1)]),_:2},1032,["color"])):(s(),f("span",N,v(d[u.value]),1))],10,U))),128))]),_:2},1032,["headers","item","index","internalItem","isSelected","toggleSelect"])]),info:a(({theme:l,store:m})=>[o(h,{class:"d-flex py-1"},{default:a(()=>e[1]||(e[1]=[S("div",{class:"overline"},"import data",-1)])),_:1}),o(y),o(h,{class:"pt-2 pb-4"},{default:a(()=>[o(E,{"no-gutters":""},{default:a(()=>[o(w,{cols:"12"},{default:a(()=>[o(B,{"prepend-icon":"","prepend-inner-icon":"attach_file",label:"Import Data","truncate-length":"15",modelValue:t.fileImport,"onUpdate:modelValue":e[0]||(e[0]=r=>t.fileImport=r),"hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(y),o(h,null,{default:a(()=>[o(M,{color:l,depressed:"",dark:"",block:"",onClick:r=>i.processImportData(m)},{default:a(()=>e[2]||(e[2]=[I("IMPORT")])),_:2},1032,["color","onClick"])]),_:2},1024)]),feed:a(()=>e[3]||(e[3]=[])),filter:a(()=>e[4]||(e[4]=[])),_:1})}const z=D(F,[["render",O]]);export{z as default};
