import{_ as I,D as u,s as e,y as t,bG as O,F as y,r as c,o as i,K as l,a5 as D,a1 as z,V as C,A as T,N as b,H as B,J as p,U as F,z as N,c as h,E as v,B as g,L as d}from"./app-B4E9xsRO.js";import{V as k}from"./VTable-IwD3Nzib.js";const A={name:"mycoperative-dashboard",data:()=>({modelOverlay:!1,tenors:[],tenor:null,formatter:new Intl.NumberFormat("id-ID",{currency:"IDR",minimumFractionDigits:0})}),methods:{getTotalValue(n){return n.reduce((s,m)=>(s+=parseFloat(m.value),s),0)},getSisaValue(n){return!n||n.length===0?0:n.reduce((s,m,S)=>S===0?parseFloat(m.value):s-parseFloat(m.value),0)},onInitialized:function({record:n}){this.tenors=n.tenors,n.hasMainDeposit||(this.modelOverlay=!0)},postDepositMain:function(){this.$http("mycoperative/api/set-main-deposit",{method:"POST",params:{tenor:parseInt(this.tenor)}}).then(()=>{this.modelOverlay=!1})}}},M={class:"px-6"},P={class:"text-right"},j={class:"text-right"},E={class:"text-right"},J={class:"text-right"},L={style:{"text-align":"right"}};function R(n,s,m,S,U,V){const w=c("widget-number"),f=c("apexchart"),_=c("widget-card"),x=c("page-home");return i(),u(y,null,[e(O,{"model-value":n.modelOverlay,class:"align-center justify-center",persistent:""},{default:t(()=>[l("div",M,[e(D,{class:"text-center",rounded:"lg"},{default:t(()=>[e(z,{class:"mt-4",color:"warning",size:"64"},{default:t(()=>[e(C,{size:"36"},{default:t(()=>s[1]||(s[1]=[T("lightbulb")])),_:1})]),_:1}),e(b,null,{default:t(()=>[s[2]||(s[2]=T(" Anda belum menentukan termin simpanan pokok. Silahkan pilih termin di bawah ini dan klik simpan. ")),e(B,{class:"mt-2"},{default:t(()=>[e(p,{cols:"12"},{default:t(()=>[e(F,{items:n.tenors,label:"Termin Simpanan Pokok",modelValue:n.tenor,"onUpdate:modelValue":s[0]||(s[0]=a=>n.tenor=a),"hide-details":""},null,8,["items","modelValue"])]),_:1})]),_:1})]),_:1}),e(b,{class:"pt-0"},{default:t(()=>[e(N,{block:"",onClick:V.postDepositMain},{default:t(()=>s[3]||(s[3]=[T("SIMPAN")])),_:1},8,["onClick"])]),_:1})]),_:1})])]),_:1},8,["model-value"]),e(x,{"page-name":"mycoperative-dashboard",onInitialized:V.onInitialized},{default:t(({record:a})=>[e(b,null,{default:t(()=>[e(B,{dense:""},{default:t(()=>[e(p,{cols:"12",md:"6"},{default:t(()=>[e(w,{title:"saldo","hide-icon":"",label:"Tabungan saat ini",icon:"account_balance_wallet",value:n.formatter.format(a.totalTabungan)},null,8,["value"])]),_:2},1024),e(p,{cols:"12",md:"6"},{default:t(()=>[e(w,{"hide-icon":"",title:"Tagihan",label:"Total Tertagih",icon:"payments",value:n.formatter.format(a.sisaPinjaman)},null,8,["value"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(b,null,{default:t(()=>[e(B,null,{default:t(()=>[a&&a.depositByType?(i(),h(p,{key:0,cols:"12",md:"3"},{default:t(()=>[e(_,{title:a.depositByType.title},{table:t(()=>[e(k,{density:"compact"},{default:t(()=>[l("tbody",null,[(i(!0),u(y,null,v(a.depositByType.table,(o,r)=>(i(),u("tr",{key:r},[l("td",null,d(o.title),1),l("td",P,d(o.value),1)]))),128))])]),_:2},1024)]),default:t(()=>[e(f,{type:"donut",options:a.depositByType.chartOptions,series:a.depositByType.series},null,8,["options","series"])]),_:2},1032,["title"])]),_:2},1024)):g("",!0),a&&a.savingsBalance?(i(),h(p,{key:1,cols:"12",md:"3"},{default:t(()=>[e(_,{title:a.savingsBalance.title},{table:t(()=>[e(k,{density:"compact"},{default:t(()=>[l("tbody",null,[(i(!0),u(y,null,v(a.savingsBalance.table,(o,r)=>(i(),u("tr",{key:r},[l("td",null,d(o.title),1),l("td",j,d(o.value),1)]))),128))])]),_:2},1024)]),default:t(()=>[e(f,{type:"donut",options:a.savingsBalance.chartOptions,series:a.savingsBalance.series},null,8,["options","series"])]),_:2},1032,["title"])]),_:2},1024)):g("",!0),a&&a.loanvspayment?(i(),h(p,{key:2,cols:"12",md:"3"},{default:t(()=>[e(_,{title:a.loanvspayment.title},{table:t(()=>[e(k,{density:"compact"},{default:t(()=>[l("tbody",null,[(i(!0),u(y,null,v(a.loanvspayment.table,(o,r)=>(i(),u("tr",{key:r},[l("td",null,d(o.title),1),l("td",E,d(o.value),1)]))),128))])]),_:2},1024)]),default:t(()=>[e(f,{type:"donut",options:a.loanvspayment.chartOptions,series:a.loanvspayment.series},null,8,["options","series"])]),_:2},1032,["title"])]),_:2},1024)):g("",!0),a&&a.loanbyStatus?(i(),h(p,{key:3,cols:"12",md:"3"},{default:t(()=>[e(_,{title:a.loanbyStatus.title,"with-count":""},{table:t(()=>[e(k,{density:"compact"},{default:t(()=>[l("tbody",null,[(i(!0),u(y,null,v(a.loanbyStatus.table,(o,r)=>(i(),u("tr",{key:r},[l("td",null,d(o.title),1),l("td",J,d(o.value),1)]))),128)),l("tr",null,[s[4]||(s[4]=l("td",null,"Jumlah",-1)),l("td",L,d(V.getTotalValue(a.loanbyStatus.table)),1)])])]),_:2},1024)]),default:t(()=>[e(f,{type:"donut",options:a.loanbyStatus.chartOptions,series:a.loanbyStatus.series},null,8,["options","series"])]),_:2},1032,["title"])]),_:2},1024)):g("",!0)]),_:2},1024)]),_:2},1024)]),_:1},8,["onInitialized"])],64)}const H=I(A,[["render",R]]);export{H as default};
