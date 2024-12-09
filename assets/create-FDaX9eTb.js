import{_ as w,c as R,w as t,r as _,o as x,a,V as C,j as T,k as n,y as p,z as r,G as K,m as N}from"./app-CDLuvF5r.js";import{V as m}from"./VCombobox-B6HAFz-8.js";import{V as A}from"./VTextarea-V7qOO9ul.js";const I={name:"human-fellow-create",methods:{getCustomerSubKind:function(o,d,i){Number.isInteger(o)&&this.$http(`human/api/customerkind/${o}/combo-customersubkind`).then(u=>{Array.isArray(u)&&u.length===0&&(d.customer_sub_kind_id=null),i.combos.customersubkinds=u})},getReferenceRegencies:function(o,d,i){Number.isInteger(o)&&(d.regency_id=null,d.district_id=null,d.village_id=null,this.$http(`human/api/ref-province/${o}/regencies`).then(u=>{i.combos.regencies=u}))},getReferenceDistricts:function(o,d,i){Number.isInteger(o)&&(d.district_id=null,d.village_id=null,this.$http(`human/api/ref-regency/${o}/districts`).then(u=>{i.combos.districts=u}))},getReferenceVillages:function(o,d,i){Number.isInteger(o)&&(d.village_id=null,this.$http(`human/api/ref-district/${o}/villages`).then(u=>{i.combos.villages=u}))}}};function S(o,d,i,u,D,V){const c=_("v-date-input"),h=_("v-currency-field"),g=_("form-create");return x(),R(g,{"with-helpdesk":"","hide-save":"",ref:"form"},{toolbar:t(({record:s})=>[a(C,{disabled:!(s.name&&s.email&&s.duedate),icon:"move_to_inbox",tooltip:"Simpan Data",onClick:d[0]||(d[0]=b=>o.$refs.form.postFormCreate())},null,8,["disabled"])]),default:t(({combos:{bornplaces:s,genders:b,provinces:U,regencies:v,districts:k,villages:y,partners:$,faiths:j},record:l,store:f})=>[a(N,null,{default:t(()=>[a(T,{dense:""},{default:t(()=>[a(n,{cols:"12"},{default:t(()=>[a(p,{label:"Nama",modelValue:l.name,"onUpdate:modelValue":e=>l.name=e,autofocus:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"12"},{default:t(()=>[a(p,{label:"NIK",modelValue:l.nik,"onUpdate:modelValue":e=>l.nik=e,autofocus:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"4"},{default:t(()=>[a(c,{label:"Tgl Lahir","prepend-icon":"",modelValue:l.borndate,"onUpdate:modelValue":e=>l.borndate=e,"persistent-placeholder":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"8"},{default:t(()=>[a(m,{items:s,label:"Tempat Lahir",modelValue:l.bornplace_id,"onUpdate:modelValue":e=>l.bornplace_id=e,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"4"},{default:t(()=>[a(r,{items:b,label:"Jenis Kelamin",modelValue:l.gender_id,"onUpdate:modelValue":e=>l.gender_id=e,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"8"},{default:t(()=>[a(p,{label:"Surel (Email)",modelValue:l.email,"onUpdate:modelValue":e=>l.email=e,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"12"},{default:t(()=>[a(A,{label:"Alamat",rows:"3",modelValue:l.address,"onUpdate:modelValue":e=>l.address=e,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(p,{label:"Telepon",modelValue:l.phone,"onUpdate:modelValue":e=>l.phone=e,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(r,{items:j,label:"Agama",modelValue:l.faith_id,"onUpdate:modelValue":e=>l.faith_id=e,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(m,{items:U,label:"Provinsi",modelValue:l.province_id,"onUpdate:modelValue":[e=>l.province_id=e,e=>V.getReferenceRegencies(e,l,f)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(m,{items:v,label:"Kabupaten/Kotamadya",modelValue:l.regency_id,"onUpdate:modelValue":[e=>l.regency_id=e,e=>V.getReferenceDistricts(e,l,f)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(m,{items:k,label:"Kecamatan",modelValue:l.district_id,"onUpdate:modelValue":[e=>l.district_id=e,e=>V.getReferenceVillages(e,l,f)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(m,{items:y,label:"Kelurahan/Desa","return-object":!1,modelValue:l.village_id,"onUpdate:modelValue":e=>l.village_id=e},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"12"},{default:t(()=>[a(m,{items:$,label:"Mitra",modelValue:l.partner_id,"onUpdate:modelValue":e=>l.partner_id=e,"return-object":!1,"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(h,{label:"Pendapatan",modelValue:l.amount_of_salary,"onUpdate:modelValue":e=>l.amount_of_salary=e,"allow-negative":!1,class:"righted-input","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(c,{label:"Jatuh Tempo","prepend-icon":"","prepend-inner-icon":"$calendar",modelValue:l.duedate,"onUpdate:modelValue":e=>l.duedate=e,"allow-negative":!1,class:"righted-input","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(n,{cols:"6"},{default:t(()=>[a(K,{color:"primary",modelValue:l.active,"onUpdate:modelValue":e=>l.active=e,label:`Status: ${l.active?"Aktif":"Tidak Aktif"}`},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1},512)}const L=w(I,[["render",S],["__scopeId","data-v-fe0ed473"]]);export{L as default};