import{p as h,g as T,i as le,n as $,s as n,ay as J,z as k,aY as ne,bu as se,bo as oe,bv as ie,ae as p,w as re,be as ue,bw as de,a0 as ce,V as ee,ak as me,bx as pe,bp as ve,an as fe,by as M,x as G,bz as be,bA as q,a$ as Ve,bB as _e,bC as ke,bD as ye,bE as Se,b3 as he,bF as ge,ai as Q,aT as xe,a4 as X,F as Pe,W as P,_ as we,c as V,y as o,r as K,o as _,A as S,B as y,K as L,H as x,J as I,S as Z,a1 as Ce,N as Ie,a2 as Te}from"./mobile-Ca1R9rVu.js";import{V as $e}from"./VTextarea-D2jSWitq.js";const H=Symbol.for("vuetify:v-stepper"),te=h({color:String,disabled:{type:[Boolean,String],default:!1},prevText:{type:String,default:"$vuetify.stepper.prev"},nextText:{type:String,default:"$vuetify.stepper.next"}},"VStepperActions"),Be=T()({name:"VStepperActions",props:te(),emits:{"click:prev":()=>!0,"click:next":()=>!0},setup(e,s){let{emit:t,slots:a}=s;const{t:d}=le();function r(){t("click:prev")}function c(){t("click:next")}return $(()=>{const m={onClick:r},v={onClick:c};return n("div",{class:"v-stepper-actions"},[n(J,{defaults:{VBtn:{disabled:["prev",!0].includes(e.disabled),text:d(e.prevText),variant:"text"}}},{default:()=>{var i;return[((i=a.prev)==null?void 0:i.call(a,{props:m}))??n(k,m,null)]}}),n(J,{defaults:{VBtn:{color:e.color,disabled:["next",!0].includes(e.disabled),text:d(e.nextText),variant:"tonal"}}},{default:()=>{var i;return[((i=a.next)==null?void 0:i.call(a,{props:v}))??n(k,v,null)]}})])}),{}}}),ae=ne("v-stepper-header"),Ue=h({color:String,title:String,subtitle:String,complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},error:Boolean,errorIcon:{type:String,default:"$error"},icon:String,ripple:{type:[Boolean,Object],default:!0},rules:{type:Array,default:()=>[]}},"StepperItem"),We=h({...Ue(),...se()},"VStepperItem"),R=T()({name:"VStepperItem",directives:{Ripple:oe},props:We(),emits:{"group:selected":e=>!0},setup(e,s){let{slots:t}=s;const a=ie(e,H,!0),d=p(()=>(a==null?void 0:a.value.value)??e.value),r=p(()=>e.rules.every(u=>u()===!0)),c=p(()=>!e.disabled&&e.editable),m=p(()=>!e.disabled&&e.editable),v=p(()=>e.error||!r.value),i=p(()=>e.complete||e.rules.length>0&&r.value),l=p(()=>v.value?e.errorIcon:i.value?e.completeIcon:a.isSelected.value&&e.editable?e.editIcon:e.icon),b=p(()=>({canEdit:m.value,hasError:v.value,hasCompleted:i.value,title:e.title,subtitle:e.subtitle,step:d.value,value:e.value}));return $(()=>{var w,C,W;const u=(!a||a.isSelected.value||i.value||m.value)&&!v.value&&!e.disabled,N=!!(e.title!=null||t.title),B=!!(e.subtitle!=null||t.subtitle);function U(){a==null||a.toggle()}return re(n("button",{class:["v-stepper-item",{"v-stepper-item--complete":i.value,"v-stepper-item--disabled":e.disabled,"v-stepper-item--error":v.value},a==null?void 0:a.selectedClass.value],disabled:!e.editable,onClick:U},[c.value&&de(!0,"v-stepper-item"),n(ce,{key:"stepper-avatar",class:"v-stepper-item__avatar",color:u?e.color:void 0,size:24},{default:()=>{var f;return[((f=t.icon)==null?void 0:f.call(t,b.value))??(l.value?n(ee,{icon:l.value},null):d.value)]}}),n("div",{class:"v-stepper-item__content"},[N&&n("div",{key:"title",class:"v-stepper-item__title"},[((w=t.title)==null?void 0:w.call(t,b.value))??e.title]),B&&n("div",{key:"subtitle",class:"v-stepper-item__subtitle"},[((C=t.subtitle)==null?void 0:C.call(t,b.value))??e.subtitle]),(W=t.default)==null?void 0:W.call(t,b.value)])]),[[ue("ripple"),e.ripple&&e.editable,null]])}),{}}}),Ae=h({...me(pe(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VStepperWindow"),De=T()({name:"VStepperWindow",props:Ae(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const a=ve(H,null),d=fe(e,"modelValue"),r=p({get(){var c;return d.value!=null||!a?d.value:(c=a.items.value.find(m=>a.selected.value.includes(m.id)))==null?void 0:c.value},set(c){d.value=c}});return $(()=>{const c=M.filterProps(e);return n(M,G({_as:"VStepperWindow"},c,{modelValue:r.value,"onUpdate:modelValue":m=>r.value=m,class:["v-stepper-window",e.class],style:e.style,mandatory:!1,touch:!1}),t)}),{}}}),Re=h({...be()},"VStepperWindowItem"),Ne=T()({name:"VStepperWindowItem",props:Re(),setup(e,s){let{slots:t}=s;return $(()=>{const a=q.filterProps(e);return n(q,G({_as:"VStepperWindowItem"},a,{class:["v-stepper-window-item",e.class],style:e.style}),t)}),{}}}),Fe=h({altLabels:Boolean,bgColor:String,completeIcon:String,editIcon:String,editable:Boolean,errorIcon:String,hideActions:Boolean,items:{type:Array,default:()=>[]},itemTitle:{type:String,default:"title"},itemValue:{type:String,default:"value"},nonLinear:Boolean,flat:Boolean,...Ve()},"Stepper"),Oe=h({...Fe(),..._e({mandatory:"force",selectedClass:"v-stepper-item--selected"}),...ke(),...ye(te(),["prevText","nextText"])},"VStepper"),Ee=T()({name:"VStepper",props:Oe(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const{items:a,next:d,prev:r,selected:c}=Se(e,H),{displayClasses:m,mobile:v}=he(e),{completeIcon:i,editIcon:l,errorIcon:b,color:u,editable:N,prevText:B,nextText:U}=ge(e),w=p(()=>e.items.map((f,F)=>{const A=Q(f,e.itemTitle,f),O=Q(f,e.itemValue,F+1);return{title:A,value:O,raw:f}})),C=p(()=>a.value.findIndex(f=>c.value.includes(f.id))),W=p(()=>e.disabled?e.disabled:C.value===0?"prev":C.value===a.value.length-1?"next":!1);return xe({VStepperItem:{editable:N,errorIcon:b,completeIcon:i,editIcon:l,prevText:B,nextText:U},VStepperActions:{color:u,disabled:W,prevText:B,nextText:U}}),$(()=>{const f=X.filterProps(e),F=!!(t.header||e.items.length),A=e.items.length>0,O=!e.hideActions&&!!(A||t.actions);return n(X,G(f,{color:e.bgColor,class:["v-stepper",{"v-stepper--alt-labels":e.altLabels,"v-stepper--flat":e.flat,"v-stepper--non-linear":e.nonLinear,"v-stepper--mobile":v.value},m.value,e.class],style:e.style}),{default:()=>{var z,j;return[F&&n(ae,{key:"stepper-header"},{default:()=>[w.value.map((g,D)=>{let{raw:E,...Y}=g;return n(Pe,null,[!!D&&n(P,null,null),n(R,Y,{default:t[`header-item.${Y.value}`]??t.header,icon:t.icon,title:t.title,subtitle:t.subtitle})])})]}),A&&n(De,{key:"stepper-window"},{default:()=>[w.value.map(g=>n(Ne,{value:g.value},{default:()=>{var D,E;return((D=t[`item.${g.value}`])==null?void 0:D.call(t,g))??((E=t.item)==null?void 0:E.call(t,g))}}))]}),(z=t.default)==null?void 0:z.call(t,{prev:r,next:d}),O&&(((j=t.actions)==null?void 0:j.call(t,{next:d,prev:r}))??n(Be,{key:"stepper-actions","onClick:prev":r,"onClick:next":d},t))]}})}),{prev:r,next:d}}}),Ke={name:"infrastructure-record-note-show",methods:{redirectPage:function(e=""){const t=this.$router.currentRoute._value.name;let a=["show","create","delete","edit"],d=t;for(let c of a)d=d.replaceAll(c,"");let r=d+e;return this.$router.push({name:r})},convertToDraft:function(e,s){console.log("draft is clicked");const t=this.$router.currentRoute._value.params;console.log(t),this.$http("infrastructure/api/record/"+t.record+"/note/"+t.note+"/draft",{method:"POST"}).then(a=>{a.success&&a.record&&(e.status=a.record.status,e.status_step=a.record.status_step)})},convertToPending:function(e,s){console.log("pending is clicked");const t=this.$router.currentRoute._value.params;console.log(t),this.$http("infrastructure/api/record/"+t.record+"/note/"+t.note+"/pending",{method:"POST"}).then(a=>{a.success&&a.record&&(e.status=a.record.status,e.status_step=a.record.status_step)})},convertToVerified:function(e,s){console.log("verified is clicked");const t=this.$router.currentRoute._value.params;this.$http("infrastructure/api/record/"+t.record+"/note/"+t.note+"/verified",{method:"POST"}).then(a=>{a.success&&a.record&&(e.status=a.record.status,e.status_step=a.record.status_step)})},convertToUnVerified:function(e,s){console.log("unverified is clicked");const t=this.$router.currentRoute._value.params;this.$http("infrastructure/api/record/"+t.record+"/note/"+t.note+"/unverified",{method:"POST"}).then(a=>{a.success&&a.record&&(e.status=a.record.status,e.status_step=a.record.status_step)})},convertToCancelled:function(e,s){console.log("cancelled is clicked");const t=this.$router.currentRoute._value.params;this.$http("infrastructure/api/record/"+t.record+"/note/"+t.note+"/cancelled",{method:"POST"}).then(a=>{a.success&&a.record&&(e.status=a.record.status,e.status_step=a.record.status_step)})},getImage:function(e){this.$http(e.proof_img_path,{method:"GET"}).then(s=>{console.log(s)})}}};function Le(e,s,t,a,d,r){const c=K("v-currency-field"),m=K("v-date-input"),v=K("form-show");return _(),V(v,{"with-helpdesk":"","hide-edit":""},{toolbar:o(({record:i,store:l})=>[i.status_step=="1"&&i.is_creator?(_(),V(k,{key:0,icon:""},{default:o(()=>[n(ee,{onClick:s[0]||(s[0]=b=>r.redirectPage("edit"))},{default:o(()=>s[2]||(s[2]=[S(" edit ")])),_:1})]),_:1})):y("",!0)]),default:o(({combos:{statuses:i},record:l,store:b})=>[n(Ie,null,{default:o(()=>[l!=null&&l.status_step!=null?(_(),V(Ee,{key:0,"model-value":l.status_step,class:"mb-6","alt-labels":""},{default:o(()=>[n(ae,null,{default:o(()=>[n(R,{title:"Draft",value:"1"}),n(P),n(R,{title:"Pending",value:"2"}),n(P),n(R,{title:l.status_step==3?l.status:"Confirmed",value:"3"},null,8,["title"])]),_:2},1024)]),_:2},1032,["model-value"])):y("",!0),s[3]||(s[3]=L("div",{class:"text-overline mt-6"},"Data :",-1)),n(P,{thickness:3,class:"mt-3 mb-6"}),n(x,{dense:""},{default:o(()=>[n(I,{cols:"12"},{default:o(()=>[n(Z,{label:"Name",modelValue:l.name,"onUpdate:modelValue":u=>l.name=u,readonly:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),n(x,{dense:""},{default:o(()=>[n(I,{cols:"12"},{default:o(()=>[n($e,{label:"Rincian",modelValue:l.description,"onUpdate:modelValue":u=>l.description=u,readonly:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),n(x,{dense:""},{default:o(()=>[n(I,{cols:"12"},{default:o(()=>[n(c,{label:"Harga Pembayaran",modelValue:l.payprice,"onUpdate:modelValue":u=>l.payprice=u,readonly:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),n(x,{dense:""},{default:o(()=>[n(I,{cols:"12"},{default:o(()=>[n(m,{label:"Tanggal Pembayaran",modelValue:l.paydate,"onUpdate:modelValue":u=>l.paydate=u,readonly:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),s[4]||(s[4]=L("div",{class:"text-overline mt-6"},"Bukti pembayaran :",-1)),n(P,{thickness:3,class:"mt-3 mb-6"}),n(x,{dense:""},{default:o(()=>[n(Ce,{src:l.proof_img_path,"aspect-ratio":"16/9",cover:""},null,8,["src"])]),_:2},1024),s[5]||(s[5]=L("div",{class:"text-overline mt-6"},"Dibuat oleh :",-1)),n(P,{thickness:3,class:"mt-3 mb-6"}),l.user!=null?(_(),V(x,{key:1,dense:""},{default:o(()=>[n(I,{cols:"12"},{default:o(()=>[n(Z,{label:"Name",modelValue:l.user.name,"onUpdate:modelValue":u=>l.user.name=u,readonly:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):y("",!0)]),_:2},1024)]),info:o(({theme:i,record:l,store:b})=>[l!=null&&l.is_creator&&l.status=="pending"&&l.status_step!=3?(_(),V(k,{key:0,class:"mt-3",color:i,block:"",variant:"flat",onClick:u=>r.convertToDraft(l,this)},{default:o(()=>s[6]||(s[6]=[S("Ubah Ke Draft")])),_:2},1032,["color","onClick"])):y("",!0),l!=null&&(l.is_admin||l.is_verificator)&&l.status_step!=3&&l.status_step==2?(_(),V(k,{key:1,class:"mt-3",color:i,block:"",variant:"flat",onClick:u=>r.convertToVerified(l,this)},{default:o(()=>s[7]||(s[7]=[S("Ubah Ke Verified")])),_:2},1032,["color","onClick"])):y("",!0),l!=null&&(l.is_admin||l.is_verificator)&&l.status_step!=3&&l.status_step==2?(_(),V(k,{key:2,class:"mt-3",color:i,block:"",variant:"flat",onClick:u=>r.convertToUnVerified(l,this)},{default:o(()=>s[8]||(s[8]=[S("Ubah Ke UnVerified")])),_:2},1032,["color","onClick"])):y("",!0),l!=null&&l.is_creator&&l.status=="draft"&&l.status_step!=3?(_(),V(k,{key:3,class:"mt-3",color:i,block:"",variant:"flat",onClick:u=>r.convertToPending(l,this)},{default:o(()=>s[9]||(s[9]=[S("Ubah Ke Pending")])),_:2},1032,["color","onClick"])):y("",!0),l!=null&&l.is_creator&&l.status_step!=3?(_(),V(k,{key:4,class:"mt-3",color:i,block:"",variant:"flat",onClick:u=>r.convertToCancelled(l,this)},{default:o(()=>s[10]||(s[10]=[S("Ubah Ke Cancelled")])),_:2},1032,["color","onClick"])):y("",!0),n(Te),n(k,{class:"mt-3",color:i,block:"",variant:"flat",onClick:s[1]||(s[1]=u=>r.redirectPage("used"))},{default:o(()=>s[11]||(s[11]=[S("Lihat Yang Digunakan")])),_:2},1032,["color"])]),_:1})}const ze=we(Ke,[["render",Le]]);export{ze as default};
