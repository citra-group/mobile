import{_ as x,r as f,o as K,c as T,y as t,s as a,H as w,J as i,S as m,T as _,Z as c,L as A}from"./app-CgYTy_-w.js";import{V as s}from"./VCombobox-D8cKNhya.js";import{V as C}from"./VTextarea-B9DRB_jG.js";const N={name:"human-employee-edit",methods:{getCustomerSubKind:function(d,o,n){Number.isInteger(d)&&this.$http(`human/api/customerkind/${d}/combo-customersubkind`).then(u=>{Array.isArray(u)&&u.length===0&&(o.customer_sub_kind_id=null),n.combos.customersubkinds=u})},getReferenceRegencies:function(d,o,n){Number.isInteger(d)&&(o.regency_id=null,o.district_id=null,o.village_id=null,this.$http(`human/api/ref-province/${d}/regencies`).then(u=>{n.combos.regencies=u}))},getReferenceDistricts:function(d,o,n){Number.isInteger(d)&&(o.district_id=null,o.village_id=null,this.$http(`human/api/ref-regency/${d}/districts`).then(u=>{n.combos.districts=u}))},getReferenceVillages:function(d,o,n){Number.isInteger(d)&&(o.village_id=null,this.$http(`human/api/ref-district/${d}/villages`).then(u=>{n.combos.villages=u}))}}};function S(d,o,n,u,I,V){const b=f("v-date-input"),h=f("v-currency-field"),r=f("form-edit");return K(),T(r,{"with-helpdesk":""},{default:t(({combos:{bornplaces:U,genders:g,provinces:v,regencies:y,districts:k,villages:R,units:$,faiths:j},record:e,store:p})=>[a(A,null,{default:t(()=>[a(w,{dense:""},{default:t(()=>[a(i,{cols:"12"},{default:t(()=>[a(m,{label:"Nama",modelValue:e.name,"onUpdate:modelValue":l=>e.name=l,autofocus:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"4"},{default:t(()=>[a(b,{label:"Tgl Lahir","prepend-icon":"",variant:"outlined",modelValue:e.borndate,"onUpdate:modelValue":l=>e.borndate=l,"persistent-placeholder":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"8"},{default:t(()=>[a(s,{items:U,label:"Tempat Lahir",modelValue:e.bornplace_id,"onUpdate:modelValue":l=>e.bornplace_id=l,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"4"},{default:t(()=>[a(_,{items:g,label:"Jenis Kelamin",modelValue:e.gender_id,"onUpdate:modelValue":l=>e.gender_id=l,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"8"},{default:t(()=>[a(m,{label:"Surel (Email)",modelValue:e.email,"onUpdate:modelValue":l=>e.email=l,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"12"},{default:t(()=>[a(C,{label:"Alamat",rows:"3",modelValue:e.address,"onUpdate:modelValue":l=>e.address=l,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"6"},{default:t(()=>[a(m,{label:"Telepon",modelValue:e.phone,"onUpdate:modelValue":l=>e.phone=l,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"6"},{default:t(()=>[a(_,{items:j,label:"Agama",modelValue:e.faith_id,"onUpdate:modelValue":l=>e.faith_id=l,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"6"},{default:t(()=>[a(s,{items:v,label:"Provinsi",modelValue:e.province_id,"onUpdate:modelValue":[l=>e.province_id=l,l=>V.getReferenceRegencies(l,e,p)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"6"},{default:t(()=>[a(s,{items:y,label:"Kabupaten/Kotamadya",modelValue:e.regency_id,"onUpdate:modelValue":[l=>e.regency_id=l,l=>V.getReferenceDistricts(l,e,p)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"6"},{default:t(()=>[a(s,{items:k,label:"Kecamatan",modelValue:e.district_id,"onUpdate:modelValue":[l=>e.district_id=l,l=>V.getReferenceVillages(l,e,p)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"6"},{default:t(()=>[a(s,{items:R,label:"Kelurahan/Desa","return-object":!1,modelValue:e.village_id,"onUpdate:modelValue":l=>e.village_id=l},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"12"},{default:t(()=>[a(s,{items:$,label:"Unit",modelValue:e.unit_id,"onUpdate:modelValue":l=>e.unit_id=l,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"4"},{default:t(()=>[a(h,{label:"Gaji Pokok (Rp)",modelValue:e.amount_of_salary,"onUpdate:modelValue":l=>e.amount_of_salary=l,"allow-negative":!1,class:"righted-input","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"8"},{default:t(()=>[a(m,{label:"Kode Referensi",modelValue:e.reff,"onUpdate:modelValue":l=>e.reff=l,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(i,{cols:"6"},{default:t(()=>[a(c,{color:"primary",size:"small",modelValue:e.is_chief,"onUpdate:modelValue":l=>e.is_chief=l,label:`Kepala Unit: ${e.is_chief?"Ya":"Bukan"}`},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024),a(i,{cols:"6"},{default:t(()=>[a(c,{color:"primary",modelValue:e.active,"onUpdate:modelValue":l=>e.active=l,label:`Status: ${e.active?"Aktif":"Tidak Aktif"}`},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1})}const J=x(N,[["render",S],["__scopeId","data-v-6c8075c5"]]);export{J as default};
