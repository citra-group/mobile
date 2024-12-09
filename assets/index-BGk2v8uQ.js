import{_ as L,g as r,a as e,w as t,bG as O,F as f,r as V,o as i,l as o,M as z,I as D,b as T,d as p,m as k,j as w,k as m,z as N,V as x,c as y,e as c,i as F,h as v,f as M,t as u,n as P,p as A,q as U}from"./app-CDLuvF5r.js";import{V as j}from"./VBadge-z2wHQzIC.js";import{V as B}from"./VTable-B70pX-B1.js";const R={name:"mycoperative-dashboard",data:()=>({modelOverlay:!1,tenors:[],tenor:null,formatter:new Intl.NumberFormat("id-ID",{currency:"IDR",minimumFractionDigits:0})}),methods:{getTotalValue(l){return l.reduce((n,_)=>(n+=parseFloat(_.value),n),0)},getSisaValue(l){return!l||l.length===0?0:l.reduce((n,_,I)=>I===0?parseFloat(_.value):n-parseFloat(_.value),0)},openPayment(l){this.$router.push({name:"mycoperative-payment-show",params:{payment:l}})},openLoan(l){this.$router.push({name:"mycoperative-loan-show",params:{loan:l}})},getChipColor(l){switch(l){case"BELUM DIBAYAR":return"red";case"PUBLISH":return"primary"}},onInitialized:function({record:l}){this.tenors=l.tenors,l.hasMainDeposit||(this.modelOverlay=!0)},postDepositMain:function(){this.$http("mycoperative/api/set-main-deposit",{method:"POST",params:{tenor:parseInt(this.tenor)}}).then(()=>{this.modelOverlay=!1})}}},$={class:"px-6"},E={class:"text-right"},q={class:"text-right"},G={class:"text-right"},H={class:"text-right"},J={style:{"text-align":"right"}};function Y(l,n,_,I,K,h){const S=V("widget-number"),b=V("apexchart"),g=V("widget-card"),C=V("page-home");return i(),r(f,null,[e(O,{"model-value":l.modelOverlay,class:"align-center justify-center",persistent:""},{default:t(()=>[o("div",$,[e(z,{class:"text-center",rounded:"lg"},{default:t(()=>[e(D,{class:"mt-4",color:"warning",size:"64"},{default:t(()=>[e(T,{size:"36"},{default:t(()=>n[1]||(n[1]=[p("lightbulb")])),_:1})]),_:1}),e(k,null,{default:t(()=>[n[2]||(n[2]=p(" Anda belum menentukan termin simpanan pokok. Silahkan pilih termin di bawah ini dan klik simpan. ")),e(w,{class:"mt-2"},{default:t(()=>[e(m,{cols:"12"},{default:t(()=>[e(N,{items:l.tenors,label:"Termin Simpanan Pokok",modelValue:l.tenor,"onUpdate:modelValue":n[0]||(n[0]=a=>l.tenor=a),"hide-details":""},null,8,["items","modelValue"])]),_:1})]),_:1})]),_:1}),e(k,{class:"pt-0"},{default:t(()=>[e(x,{block:"",onClick:h.postDepositMain},{default:t(()=>n[3]||(n[3]=[p("SIMPAN")])),_:1},8,["onClick"])]),_:1})]),_:1})])]),_:1},8,["model-value"]),e(C,{"page-name":"mycoperative-dashboard",onInitialized:h.onInitialized},{toolbar:t(({record:a})=>[a&&a.countUnreadNotification?(i(),y(x,{key:0,icon:""},{default:t(()=>[e(j,{color:"orange",content:a.countUnreadNotification,id:"menu-activator"},{default:t(()=>[e(T,null,{default:t(()=>n[4]||(n[4]=[p("notifications")])),_:1})]),_:2},1032,["content"])]),_:2},1024)):c("",!0),a&&a.processeLoan?(i(),y(M,{key:1,transition:"slide-x-transition",activator:"#menu-activator",width:"auto",rounded:"6"},{default:t(()=>[e(F,{density:"compact"},{default:t(()=>[(i(!0),r(f,null,v(a.processeLoan,(s,d)=>(i(),y(P,{key:s.id,value:d,onClick:Q=>h.openLoan(s.id),rounded:"xl",class:"mx-4"},{default:t(()=>[e(A,null,{default:t(()=>[e(T,{size:"small",class:"mr-4"},{default:t(()=>n[5]||(n[5]=[p("directory_sync")])),_:1}),p(u(s.slug)+" - "+u(s.name)+" - ",1),e(U,{size:"x-small",color:h.getChipColor(s.status)},{default:t(()=>[p(u(s.status),1)]),_:2},1032,["color"])]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:2},1024)]),_:2},1024)):c("",!0)]),default:t(({record:a})=>[e(k,null,{default:t(()=>[e(w,{dense:""},{default:t(()=>[e(m,{cols:"12",md:"6"},{default:t(()=>[e(S,{title:"saldo","hide-icon":"",label:"Tabungan saat ini",icon:"account_balance_wallet",value:l.formatter.format(a.totalTabungan)},null,8,["value"])]),_:2},1024),e(m,{cols:"12",md:"6"},{default:t(()=>[e(S,{"hide-icon":"",title:"Tagihan",label:"Total Tertagih",icon:"payments",value:l.formatter.format(a.sisaPinjaman)},null,8,["value"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(k,null,{default:t(()=>[e(w,null,{default:t(()=>[a&&a.depositByType?(i(),y(m,{key:0,cols:"12",md:"3"},{default:t(()=>[e(g,{title:a.depositByType.title},{table:t(()=>[e(B,{density:"compact"},{default:t(()=>[o("tbody",null,[(i(!0),r(f,null,v(a.depositByType.table,(s,d)=>(i(),r("tr",{key:d},[o("td",null,u(s.title),1),o("td",E,u(s.value),1)]))),128))])]),_:2},1024)]),default:t(()=>[e(b,{type:"donut",options:a.depositByType.chartOptions,series:a.depositByType.series},null,8,["options","series"])]),_:2},1032,["title"])]),_:2},1024)):c("",!0),a&&a.savingsBalance?(i(),y(m,{key:1,cols:"12",md:"3"},{default:t(()=>[e(g,{title:a.savingsBalance.title},{table:t(()=>[e(B,{density:"compact"},{default:t(()=>[o("tbody",null,[(i(!0),r(f,null,v(a.savingsBalance.table,(s,d)=>(i(),r("tr",{key:d},[o("td",null,u(s.title),1),o("td",q,u(s.value),1)]))),128))])]),_:2},1024)]),default:t(()=>[e(b,{type:"donut",options:a.savingsBalance.chartOptions,series:a.savingsBalance.series},null,8,["options","series"])]),_:2},1032,["title"])]),_:2},1024)):c("",!0),a&&a.loanvspayment?(i(),y(m,{key:2,cols:"12",md:"3"},{default:t(()=>[e(g,{title:a.loanvspayment.title},{table:t(()=>[e(B,{density:"compact"},{default:t(()=>[o("tbody",null,[(i(!0),r(f,null,v(a.loanvspayment.table,(s,d)=>(i(),r("tr",{key:d},[o("td",null,u(s.title),1),o("td",G,u(s.value),1)]))),128))])]),_:2},1024)]),default:t(()=>[e(b,{type:"donut",options:a.loanvspayment.chartOptions,series:a.loanvspayment.series},null,8,["options","series"])]),_:2},1032,["title"])]),_:2},1024)):c("",!0),a&&a.loanbyStatus?(i(),y(m,{key:3,cols:"12",md:"3"},{default:t(()=>[e(g,{title:a.loanbyStatus.title,"with-count":""},{table:t(()=>[e(B,{density:"compact"},{default:t(()=>[o("tbody",null,[(i(!0),r(f,null,v(a.loanbyStatus.table,(s,d)=>(i(),r("tr",{key:d},[o("td",null,u(s.title),1),o("td",H,u(s.value),1)]))),128)),o("tr",null,[n[6]||(n[6]=o("td",null,"Jumlah",-1)),o("td",J,u(h.getTotalValue(a.loanbyStatus.table)),1)])])]),_:2},1024)]),default:t(()=>[e(b,{type:"donut",options:a.loanbyStatus.chartOptions,series:a.loanbyStatus.series},null,8,["options","series"])]),_:2},1032,["title"])]),_:2},1024)):c("",!0)]),_:2},1024)]),_:2},1024)]),_:1},8,["onInitialized"])],64)}const tt=L(R,[["render",Y]]);export{tt as default};