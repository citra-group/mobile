import{_ as m,D as f,c as d,y as t,B as l,F as i,r as p,o as r}from"./app-D4-JbIhK.js";const k={name:"infrastructure-record-data",methods:{checkRoute:function(o=""){let e=this.$router.currentRoute._value.name,n=["show","delete","update","edit","create"];for(let a of n)e=e.replaceAll("-"+a,"");return e==o}}};function c(o,e,n,a,y,s){const u=p("form-data");return r(),f(i,null,[s.checkRoute("infrastructure-deadline")?(r(),d(u,{key:0,"hide-create":""},{forminfo:t(()=>e[0]||(e[0]=[])),helpdesk:t(()=>e[1]||(e[1]=[])),utility:t(()=>e[2]||(e[2]=[])),_:1})):l("",!0),s.checkRoute("infrastructure-deadline")?l("",!0):(r(),d(u,{key:1},{forminfo:t(()=>e[3]||(e[3]=[])),helpdesk:t(()=>e[4]||(e[4]=[])),utility:t(()=>e[5]||(e[5]=[])),_:1}))],64)}const B=m(k,[["render",c]]);export{B as default};