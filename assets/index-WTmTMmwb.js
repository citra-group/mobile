import{_ as d,D as m,s as e,y as t,bG as p,F as u,r as f,o as c,K as V,a4 as k,a0 as h,V as v,A as n,N as l,H as y,J as b,T as _,z as g}from"./app-CTVUFAzl.js";const z={name:"mycoperative-dashboard",data:()=>({modelOverlay:!1,tenors:[],tenor:null}),methods:{onInitialized:function({record:s}){this.tenors=s.tenors,s.hasMainDeposit||(this.modelOverlay=!0)},postDepositMain:function(){this.$http("mycoperative/api/set-main-deposit",{method:"POST",params:{tenor:parseInt(this.tenor)}}).then(()=>{this.modelOverlay=!1})}}},I={class:"px-6"};function C(s,a,O,S,x,o){const i=f("page-home");return c(),m(u,null,[e(p,{"model-value":s.modelOverlay,class:"align-center justify-center","scroll-strategy":"block",persistent:""},{default:t(()=>[V("div",I,[e(k,{class:"text-center",rounded:"lg"},{default:t(()=>[e(h,{class:"mt-4",color:"warning",size:"64"},{default:t(()=>[e(v,{size:"36"},{default:t(()=>a[1]||(a[1]=[n("lightbulb")])),_:1})]),_:1}),e(l,null,{default:t(()=>[a[2]||(a[2]=n(" Anda belum menentukan termin simpanan pokok. Silahkan pilih termin di bawah ini dan klik simpan. ")),e(y,{class:"mt-2"},{default:t(()=>[e(b,{cols:"12"},{default:t(()=>[e(_,{items:s.tenors,label:"Termin Simpanan Pokok",modelValue:s.tenor,"onUpdate:modelValue":a[0]||(a[0]=r=>s.tenor=r),"hide-details":""},null,8,["items","modelValue"])]),_:1})]),_:1})]),_:1}),e(l,{class:"pt-0"},{default:t(()=>[e(g,{block:"",onClick:o.postDepositMain},{default:t(()=>a[3]||(a[3]=[n("SIMPAN")])),_:1},8,["onClick"])]),_:1})]),_:1})])]),_:1},8,["model-value"]),e(i,{"page-name":"mycoperative-dashboard",onInitialized:o.onInitialized},{default:t(()=>a[4]||(a[4]=[])),_:1},8,["onInitialized"])],64)}const T=d(z,[["render",C]]);export{T as default};
