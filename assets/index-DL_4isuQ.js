import{_ as y,c as u,w as t,r as l,o as n,a,g as c,m,j as f,F as i,h as k,e as v,k as C}from"./app-CDLuvF5r.js";const w={name:"account-module",methods:{impersonateLeave:function({mapUserModule:r}){this.$http("account/api/impersonate-leave",{method:"POST"}).then(h=>{r(h)})},openModule:function(r){this.$router.push({name:r.slug+"-dashboard"})}}};function L(r,h,V,j,B,s){const _=l("page-divider"),d=l("widget-apps"),b=l("page-paper"),$=l("user-apps");return n(),u($,{"page-name":"account-module","onClick:impersonateLeave":s.impersonateLeave,"clear-filters":""},{default:t(({modules:o,theme:g})=>[a(b,{"user-avatar":""},{default:t(()=>[o.personal&&o.personal.length>0?(n(),c(i,{key:0},[a(_,{label:"personal",uppercase:""}),a(m,null,{default:t(()=>[a(f,{justify:"center","no-gutters":""},{default:t(()=>[(n(!0),c(i,null,k(o.personal,(e,p)=>(n(),u(C,{cols:"3",md:"2",key:p},{default:t(()=>[a(d,{color:`${g}-lighten-1`,highlight:e.highlight,icon:e.icon,label:e.name,onClick:x=>s.openModule(e)},null,8,["color","highlight","icon","label","onClick"])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)],64)):v("",!0),o.administrator&&o.administrator.length>0?(n(),c(i,{key:1},[a(_,{label:"administrator",uppercase:""}),a(m,null,{default:t(()=>[a(f,{justify:"center","no-gutters":""},{default:t(()=>[(n(!0),c(i,null,k(o.administrator,(e,p)=>(n(),u(C,{cols:"3",md:"2",key:p},{default:t(()=>[a(d,{color:`${g}-darken-2`,highlight:e.highlight,icon:e.icon,label:e.name,onClick:x=>s.openModule(e)},null,8,["color","highlight","icon","label","onClick"])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)],64)):v("",!0)]),_:2},1024)]),_:1},8,["onClick:impersonateLeave"])}const F=y(w,[["render",L]]);export{F as default};