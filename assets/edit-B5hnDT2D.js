import{_ as T,r as V,o as j,c as w,y as t,s as a,H as x,J as d,S as _,T as f,Z as A,L as C}from"./app-CgYTy_-w.js";import{V as s}from"./VCombobox-D8cKNhya.js";import{V as K}from"./VTextarea-B9DRB_jG.js";const N={name:"human-fellow-edit",methods:{getCustomerSubKind:function(n,i,u){Number.isInteger(n)&&this.$http(`human/api/customerkind/${n}/combo-customersubkind`).then(o=>{Array.isArray(o)&&o.length===0&&(i.customer_sub_kind_id=null),u.combos.customersubkinds=o})},getReferenceRegencies:function(n,i,u){Number.isInteger(n)&&(i.regency_id=null,i.district_id=null,i.village_id=null,this.$http(`human/api/ref-province/${n}/regencies`).then(o=>{u.combos.regencies=o}))},getReferenceDistricts:function(n,i,u){Number.isInteger(n)&&(i.district_id=null,i.village_id=null,this.$http(`human/api/ref-regency/${n}/districts`).then(o=>{u.combos.districts=o}))},getReferenceVillages:function(n,i,u){Number.isInteger(n)&&(i.village_id=null,this.$http(`human/api/ref-district/${n}/villages`).then(o=>{u.combos.villages=o}))}}};function S(n,i,u,o,I,m){const c=V("v-date-input"),r=V("v-currency-field"),b=V("form-edit");return j(),w(b,{"with-helpdesk":""},{default:t(({combos:{bornplaces:h,genders:g,provinces:U,regencies:v,districts:y,villages:$,partners:k,faiths:R},record:l,store:p})=>[a(C,null,{default:t(()=>[a(x,{dense:""},{default:t(()=>[a(d,{cols:"12"},{default:t(()=>[a(_,{label:"Nama",autofocus:"",modelValue:l.name,"onUpdate:modelValue":e=>l.name=e},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{cols:"4"},{default:t(()=>[a(c,{label:"Tgl Lahir","prepend-icon":"",variant:"outlined",modelValue:l.borndate,"onUpdate:modelValue":e=>l.borndate=e,"persistent-placeholder":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{cols:"8"},{default:t(()=>[a(s,{items:h,label:"Tempat Lahir",modelValue:l.bornplace_id,"onUpdate:modelValue":e=>l.bornplace_id=e,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{cols:"4"},{default:t(()=>[a(f,{items:g,label:"Jenis Kelamin",modelValue:l.gender_id,"onUpdate:modelValue":e=>l.gender_id=e,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{cols:"8"},{default:t(()=>[a(_,{label:"Surel (Email)",modelValue:l.email,"onUpdate:modelValue":e=>l.email=e,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{cols:"12"},{default:t(()=>[a(K,{label:"Alamat",rows:"3",modelValue:l.address,"onUpdate:modelValue":e=>l.address=e,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{cols:"6"},{default:t(()=>[a(_,{label:"Telepon",modelValue:l.phone,"onUpdate:modelValue":e=>l.phone=e,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{cols:"6"},{default:t(()=>[a(f,{items:R,label:"Agama",modelValue:l.faith_id,"onUpdate:modelValue":e=>l.faith_id=e,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{cols:"6"},{default:t(()=>[a(s,{items:U,label:"Provinsi",modelValue:l.province_id,"onUpdate:modelValue":[e=>l.province_id=e,e=>m.getReferenceRegencies(e,l,p)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{cols:"6"},{default:t(()=>[a(s,{items:v,label:"Kabupaten/Kotamadya",modelValue:l.regency_id,"onUpdate:modelValue":[e=>l.regency_id=e,e=>m.getReferenceDistricts(e,l,p)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{cols:"6"},{default:t(()=>[a(s,{items:y,label:"Kecamatan",modelValue:l.district_id,"onUpdate:modelValue":[e=>l.district_id=e,e=>m.getReferenceVillages(e,l,p)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{cols:"6"},{default:t(()=>[a(s,{items:$,label:"Kelurahan/Desa","return-object":!1,modelValue:l.village_id,"onUpdate:modelValue":e=>l.village_id=e},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{cols:"12"},{default:t(()=>[a(s,{items:k,label:"Mitra",modelValue:l.partner_id,"onUpdate:modelValue":e=>l.partner_id=e,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{cols:"6"},{default:t(()=>[a(r,{label:"Pendapatan",modelValue:l.amount_of_salary,"onUpdate:modelValue":e=>l.amount_of_salary=e,"allow-negative":!1,class:"righted-input","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{cols:"6"},{default:t(()=>[a(c,{label:"Jatuh Tempo","prepend-icon":"","prepend-inner-icon":"$calendar",modelValue:l.duedate,"onUpdate:modelValue":e=>l.duedate=e,"allow-negative":!1,class:"righted-input","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(d,{cols:"6"},{default:t(()=>[a(A,{color:"primary",modelValue:l.active,"onUpdate:modelValue":e=>l.active=e,label:`Status: ${l.active?"Aktif":"Tidak Aktif"}`},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}const B=T(N,[["render",S],["__scopeId","data-v-c4f2f4e4"]]);export{B as default};
