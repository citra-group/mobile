import{_ as D,c as p,y as a,r as w,o as u,s as t,H as V,J as i,N as h,w as x,v as $,Q as S,a5 as O,A as m,W as g,B as _,S as b,T as B,K as U,U as E,z as v,V as T}from"./mobile-Ca1R9rVu.js";import{V as F}from"./VCombobox-BM4p7H6F.js";import{V as M,a as C}from"./VRadioGroup-DLl_Ohj5.js";const N={name:"mycoperative-report",data:()=>({expand:!1,menuDateStart:!1,menuDateEnd:!1,menuDateProcess:!1,type_of_options:null,month:new Date().getMonth()+1,year:new Date().getFullYear(),render:null}),methods:{downloadPDF:function(o,e,d){this.$http("mycoperative/api/report-to-pdf",{method:"GET",params:{type:o.value,date_start:e.date_start,date_end:e.date_end,date_process:e.date_process,year:e.year,month:e.month,orientation:e.orientation},responseType:"blob"}).then(r=>{const f=new Blob([r],{type:"application/pdf"}),s=document.createElement("a");s.href=URL.createObjectURL(f),s.download=o.value+".pdf",s.click(),URL.revokeObjectURL(s.href)}).catch(()=>{d.$snackbar({text:"there is an error while processing data!"})})},downloadXLS:function(o,e,d){this.$http("mycoperative/api/report-to-xls",{method:"GET",params:{type:o.value,date_start:e.date_start,date_end:e.date_end,date_process:e.date_process,year:e.year,month:e.month},responseType:"blob"}).then(r=>{const f=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),s=document.createElement("a");s.href=URL.createObjectURL(f),s.download=o.value+".xlsx",s.click(),URL.revokeObjectURL(s.href)}).catch(()=>{d.$snackbar({text:"there is an error while processing data!"})})},onReportTypeChange:function(o,e){this.render=null,this.expand=o.has_options,this.type_of_options=o.type_of_options,e.date_start=null,e.date_end=null,e.date_process=null,e.year=null,e.month=null;let d=new Date;["deposit_pokok","deposit_wajib","deposit_tabungan"].includes(this.type_of_options)&&(e.year=d.getFullYear()),["loan_mutation_month"].includes(this.type_of_options)&&(e.year=d.getFullYear(),e.month=d.getMonth()+1),["loan_age"].includes(this.type_of_options)&&(e.date_process=new Date().toISOString().substr(0,10))},previewOfReport:function(o,e,d){this.$http("mycoperative/api/report-preview",{method:"GET",params:{type:o.value,date_start:e.date_start,date_end:e.date_end,date_process:e.date_process,year:e.year,month:e.month}}).then(r=>{this.render=r}).catch(()=>{d.$snackbar({text:"there is an error while processing data!"})})},previewOfReportMobile:function(o,e){this.$http("mycoperative/api/report-preview-mobile",{method:"GET",params:{type:o.value,date_start:e.date_start,date_end:e.date_end,date_process:e.date_process,year:e.year,month:e.month}}).then(d=>{this.render=d}).catch(()=>{})}}},P=["innerHTML"];function j(o,e,d,r,f,s){const k=w("v-date-input"),L=w("page-blank");return u(),p(L,{"page-name":"mycoperative-report","page-key":"report",title:"Laporan","page-path":"/mycoperative/api/report","show-sidenav":""},{info:a(({combos:{types:R},record:l,theme:y,store:c})=>[t(h,null,{default:a(()=>[t(V,{dense:""},{default:a(()=>[t(i,{cols:"12"},{default:a(()=>[t(F,{modelValue:l.selected,"onUpdate:modelValue":[n=>l.selected=n,n=>s.onReportTypeChange(n,l)],items:R,label:"Pilih Jenis","hide-details":""},null,8,["modelValue","onUpdate:modelValue","items"])]),_:2},1024)]),_:2},1024)]),_:2},1024),t(E,null,{default:a(()=>[x(t(S,{flat:"",tile:""},{default:a(()=>[t(O,null,{default:a(()=>e[0]||(e[0]=[m("PILIHAN")])),_:1}),t(g),t(h,null,{default:a(()=>[t(V,{dense:""},{default:a(()=>[["deposit","deposit_detail","loan_payment","loan_mutation_date"].includes(o.type_of_options)?(u(),p(i,{key:0,cols:"12"},{default:a(()=>[t(k,{"prepend-icon":"","prepend-inner-icon":"$calendar",modelValue:l.date_start,"onUpdate:modelValue":n=>l.date_start=n,label:"Tanggal Awal"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):_("",!0),["deposit","deposit_detail","loan_payment","loan_mutation_date"].includes(o.type_of_options)?(u(),p(i,{key:1,cols:"12"},{default:a(()=>[t(k,{"prepend-icon":"","prepend-inner-icon":"$calendar",modelValue:l.date_end,"onUpdate:modelValue":n=>l.date_end=n,label:"Tanggal Akhir"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):_("",!0),["deposit_pokok","deposit_wajib","deposit_tabungan"].includes(o.type_of_options)?(u(),p(i,{key:2,cols:"12"},{default:a(()=>[t(b,{modelValue:l.year,"onUpdate:modelValue":n=>l.year=n,type:"number",label:"Tahun","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):_("",!0),["loan_mutation_month"].includes(o.type_of_options)?(u(),p(i,{key:3,cols:"6"},{default:a(()=>[t(B,{items:[{title:"Januari",value:1},{title:"Februari",value:2},{title:"Maret",value:3},{title:"April",value:4},{title:"Mei",value:5},{title:"Juni",value:6},{title:"Juli",value:7},{title:"Agustus",value:8},{title:"September",value:9},{title:"Oktober",value:10},{title:"November",value:11},{title:"Desember",value:12}],label:"Bulan",type:"number",modelValue:l.month,"onUpdate:modelValue":n=>l.month=n,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):_("",!0),["loan_mutation_month"].includes(o.type_of_options)?(u(),p(i,{key:4,cols:"6"},{default:a(()=>[t(b,{label:"Tahun",type:"number",modelValue:l.year,"onUpdate:modelValue":n=>l.year=n,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):_("",!0),["loan_age"].includes(o.type_of_options)?(u(),p(i,{key:5,cols:"12"},{default:a(()=>[t(b,{type:"date",modelValue:l.date_process,"onUpdate:modelValue":n=>l.date_process=n,label:"Date"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):_("",!0),t(i,{cols:"12"},{default:a(()=>e[1]||(e[1]=[U("div",{class:"overline mt-6"}," page orientation ",-1)])),_:1}),t(i,{cols:"12"},{default:a(()=>[t(M,{modelValue:l.orientation,"onUpdate:modelValue":n=>l.orientation=n,"hide-details":"",row:""},{default:a(()=>[t(C,{label:"Landscape",value:"landscape"}),t(C,{label:"Portrait",value:"portrait"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1536),[[$,o.expand]])]),_:2},1024),t(g),t(h,null,{default:a(()=>[t(V,{dense:""},{default:a(()=>[t(i,{cols:"6"},{default:a(()=>[t(v,{color:y,block:"",dark:"",depressed:"",onClick:n=>s.downloadXLS(l.selected,l,c)},{default:a(()=>[t(T,{class:"mr-2"},{default:a(()=>e[2]||(e[2]=[m("downloading")])),_:1}),e[3]||(e[3]=m(" XLS"))]),_:2},1032,["color","onClick"])]),_:2},1024),t(i,{cols:"6"},{default:a(()=>[t(v,{color:y,block:"",dark:"",depressed:"",onClick:n=>s.downloadPDF(l.selected,l,c)},{default:a(()=>[t(T,{class:"mr-2"},{default:a(()=>e[4]||(e[4]=[m("downloading")])),_:1}),e[5]||(e[5]=m(" PDF"))]),_:2},1032,["color","onClick"])]),_:2},1024),t(i,{cols:"12"},{default:a(()=>[t(v,{color:y,block:"",dark:"",depressed:"",onClick:n=>s.previewOfReportMobile(l.selected,l,c)},{default:a(()=>e[6]||(e[6]=[m("preview")])),_:2},1032,["color","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),default:a(()=>[t(h,null,{default:a(()=>[U("div",{flat:"",tile:"",innerHTML:o.render},null,8,P)]),_:1})]),_:1})}const H=D(N,[["render",j]]);export{H as default};
