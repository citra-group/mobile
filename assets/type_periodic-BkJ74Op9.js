import{_ as m,r as d,o as V,g as f,a,w as o,k as r,j as u,l as b,B as g,F as v}from"./app-CDLuvF5r.js";const x={name:"infrastructure-tax-create-type-log",props:["record","data"]};function y(s,e,n,i,_,c){return null}const U=m(x,[["render",y]]),B={name:"infrastructure-tax-create-type-period",props:["record","data"]};function k(s,e,n,i,_,c){const t=d("v-number-input"),p=d("v-date-input");return V(),f(v,null,[a(u,{dense:""},{default:o(()=>[a(r,{cols:"4"},{default:o(()=>[a(t,{label:"Jumlah Hari",modelValue:n.record.period_number_day,"onUpdate:modelValue":e[0]||(e[0]=l=>n.record.period_number_day=l),min:0},null,8,["modelValue"])]),_:1}),a(r,{cols:"4"},{default:o(()=>[a(t,{label:"Jumlah Bulan",modelValue:n.record.period_number_month,"onUpdate:modelValue":e[1]||(e[1]=l=>n.record.period_number_month=l),min:0},null,8,["modelValue"])]),_:1}),a(r,{cols:"4"},{default:o(()=>[a(t,{label:"Jumlah Tahun",modelValue:n.record.period_number_year,"onUpdate:modelValue":e[2]||(e[2]=l=>n.record.period_number_year=l),min:0},null,8,["modelValue"])]),_:1})]),_:1}),e[4]||(e[4]=b("div",{class:"text-overline mt-6"},"Deadline Tanggal Pembayaran",-1)),a(g,{thickness:3,class:"mt-3 mb-6"}),a(u,{dense:""},{default:o(()=>[a(r,{cols:"12"},{default:o(()=>[a(p,{label:"Deadine Tanggal Pembayaran",modelValue:n.record.duedate,"onUpdate:modelValue":e[3]||(e[3]=l=>n.record.duedate=l)},null,8,["modelValue"])]),_:1})]),_:1})],64)}const w=m(B,[["render",k]]);export{U as L,w as P};