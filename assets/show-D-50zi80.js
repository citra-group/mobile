import{_ as v,c as w,w as o,r as n,o as g,a as e,j,k as d,y as u,z as i,G as k,m as x}from"./app-Bz4LNFaU.js";import{V as t}from"./VCombobox-C84sYQ0j.js";import{V as T}from"./VTextarea-VFwdX7TJ.js";const $={name:"human-fellow-show"};function C(K,m,A,S,B,J){const s=n("v-date-input"),p=n("v-currency-field"),V=n("form-show");return g(),w(V,{"with-helpdesk":""},{default:o(({combos:{bornplaces:_,genders:f,provinces:c,regencies:r,districts:b,villages:U,partners:h,faiths:y},record:l})=>[e(x,null,{default:o(()=>[e(j,{dense:""},{default:o(()=>[e(d,{cols:"12"},{default:o(()=>[e(u,{label:"Nama",modelValue:l.name,"onUpdate:modelValue":a=>l.name=a,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"4"},{default:o(()=>[e(s,{label:"Tgl Lahir","prepend-icon":"",variant:"outlined",modelValue:l.borndate,"onUpdate:modelValue":a=>l.borndate=a,"persistent-placeholder":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"8"},{default:o(()=>[e(t,{items:_,label:"Tempat Lahir",modelValue:l.bornplace_id,"onUpdate:modelValue":a=>l.bornplace_id=a,"return-object":!1,readonly:"","hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"4"},{default:o(()=>[e(i,{items:f,label:"Jenis Kelamin",modelValue:l.gender_id,"onUpdate:modelValue":a=>l.gender_id=a,"return-object":!1,readonly:"","hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"8"},{default:o(()=>[e(u,{label:"Surel (Email)",modelValue:l.email,"onUpdate:modelValue":a=>l.email=a,readonly:"","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:o(()=>[e(T,{label:"Alamat",rows:"3",modelValue:l.address,"onUpdate:modelValue":a=>l.address=a,readonly:"","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:o(()=>[e(u,{label:"Telepon",modelValue:l.phone,"onUpdate:modelValue":a=>l.phone=a,readonly:"","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:o(()=>[e(i,{items:y,label:"Agama",modelValue:l.faith_id,"onUpdate:modelValue":a=>l.faith_id=a,"return-object":!1,readonly:"","hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:o(()=>[e(t,{items:c,label:"Provinsi",modelValue:l.province_id,"onUpdate:modelValue":a=>l.province_id=a,"return-object":!1,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:o(()=>[e(t,{items:r,label:"Kabupaten/Kotamadya",modelValue:l.regency_id,"onUpdate:modelValue":a=>l.regency_id=a,"return-object":!1,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:o(()=>[e(t,{items:b,label:"Kecamatan",modelValue:l.district_id,"onUpdate:modelValue":a=>l.district_id=a,"return-object":!1,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:o(()=>[e(t,{items:U,label:"Kelurahan/Desa","return-object":!1,modelValue:l.village_id,"onUpdate:modelValue":a=>l.village_id=a,readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:o(()=>[e(t,{items:h,label:"Mitra",modelValue:l.partner_id,"onUpdate:modelValue":a=>l.partner_id=a,"return-object":!1,"hide-details":"",readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:o(()=>[e(p,{label:"Pendapatan",modelValue:l.amount_of_salary,"onUpdate:modelValue":a=>l.amount_of_salary=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:o(()=>[e(s,{label:"Jatuh Tempo","prepend-icon":"","prepend-inner-icon":"$calendar",modelValue:l.duedate,"onUpdate:modelValue":a=>l.duedate=a,"allow-negative":!1,class:"righted-input","hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"6"},{default:o(()=>[e(k,{color:"primary",modelValue:l.active,"onUpdate:modelValue":a=>l.active=a,label:`Status: ${l.active?"Aktif":"Tidak Aktif"}`,readonly:""},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),helpdesk:o(()=>m[0]||(m[0]=[])),_:1})}const z=v($,[["render",C],["__scopeId","data-v-1327f672"]]);export{z as default};