import{_ as f,c as h,w as a,r as w,o as n,a as l,j as V,k as d,y as u,m as i,l as e,q as x,B as g,g as r,h as y,F as b,aw as v,t as m}from"./app-CDLuvF5r.js";const k={name:"system-role-show"},B={class:"py-0"},C={class:"v-plain-table with-border-bottom w-100",style:{"border-spacing":"0px"}},$={class:"text-caption font-weight-bold"},U={class:"text-caption"};function F(N,s,D,T,j,q){const c=w("form-show");return n(),h(c,{"with-helpdesk":"","with-activity-logs":""},{default:a(({record:o,theme:p})=>[l(i,null,{default:a(()=>[l(V,{dense:""},{default:a(()=>[l(d,{cols:"12"},{default:a(()=>[l(u,{label:"Page",modelValue:o.page_name,"onUpdate:modelValue":t=>o.page_name=t,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"12"},{default:a(()=>[l(u,{label:"Name",modelValue:o.name,"onUpdate:modelValue":t=>o.name=t,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e("div",B,[l(g,null,{default:a(()=>[l(x,{color:`${p}`,size:"small",variant:"flat"},{default:a(()=>s[0]||(s[0]=[e("div",{class:"font-weight-medium text-lowercase"}," permissions ",-1)])),_:2},1032,["color"])]),_:2},1024)]),l(i,null,{default:a(()=>[e("table",C,[s[1]||(s[1]=e("colgroup",null,[e("col",{width:"48px"}),e("col",{width:"70px"}),e("col",{width:"auto"})],-1)),e("tbody",null,[(n(!0),r(b,null,y(o.permissions,(t,_)=>(n(),r("tr",{key:_},[e("td",null,[l(v,{"model-value":t.value,readonly:""},null,8,["model-value"])]),e("td",$,m(t.name),1),e("td",U,m(t.slug),1)]))),128))])])]),_:2},1024)]),_:1})}const E=f(k,[["render",F]]);export{E as default};