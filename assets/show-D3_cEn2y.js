import{_ as C,o as m,g,a as e,w as l,k as s,y as i,j as d,F as N,c as b,r as $,l as y,B as k,bt as A,e as U,m as B,d as x,V as w}from"./app-Bz4LNFaU.js";import{V as p}from"./VCombobox-C84sYQ0j.js";const D={name:"infrastructure-document-show-land-certificate",props:["record"]};function P(r,a,o,c,V,f){return m(),g(N,null,[e(d,{dense:""},{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(i,{label:"Nik",modelValue:o.record.nik,"onUpdate:modelValue":a[0]||(a[0]=u=>o.record.nik=u),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{dense:""},{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(i,{label:"Nip",modelValue:o.record.nip,"onUpdate:modelValue":a[1]||(a[1]=u=>o.record.nip=u),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1})],64)}const F=C(D,[["render",P]]),j={name:"infrastructure-document-show",components:{LandCertificate:F},data(){return{}},methods:{redirectPage:function(r=""){const o=this.$router.currentRoute._value.name;let c=["show","create","delete","update"],V=o;for(let u of c)V=V.replaceAll(u,"");let f=V+r;return this.$router.push({name:f})}}},L={key:1,dense:""},K={key:2,dense:""};function M(r,a,o,c,V,f){const u=$("form-show");return m(),b(u,{"with-helpdesk":""},{default:l(({combos:{type_key:_,units:v,units_slug:T,type_status_map:R,status:h},record:t})=>[e(B,null,{default:l(()=>[e(d,{dense:""},{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(i,{label:"Name",modelValue:t.name,"onUpdate:modelValue":n=>t.name=n,readonly:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{cols:"12"},{default:l(()=>[e(i,{label:"Description",modelValue:t.description,"onUpdate:modelValue":n=>t.description=n,readonly:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{cols:"12"},{default:l(()=>[e(p,{items:h,label:"Status",modelValue:t.status,"onUpdate:modelValue":n=>t.status=n,"return-object":!1,readonly:!0},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),a[2]||(a[2]=y("div",{class:"text-overline mt-6"},"Form Document",-1)),e(k,{thickness:3,class:"mt-3 mb-5"}),e(d,{dense:""},{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(p,{items:_,label:"Tipe Document",modelValue:t.documentable_type_key,"onUpdate:modelValue":n=>t.documentable_type_key=n,"return-object":!1,readonly:!0},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),(m(),b(A(t.documentable_type_key),{record:t},null,8,["record"])),a[3]||(a[3]=y("div",{class:"text-overline mt-6"},"Terhubung Ke Unit",-1)),e(k,{thickness:3,class:"mt-3 mb-5"}),t.unit!=null?(m(),b(d,{key:0,dense:""},{default:l(()=>[e(s,{cols:"6"},{default:l(()=>[e(i,{label:"Nama Unit",modelValue:t.unit.name,"onUpdate:modelValue":n=>t.unit.name=n,readonly:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{cols:"6"},{default:l(()=>[e(p,{items:T,label:"Pilih Unit",modelValue:t.unit.slug,"onUpdate:modelValue":n=>t.unit.slug=n,readonly:!0},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):U("",!0),a[4]||(a[4]=y("div",{class:"text-overline mt-6"},"Terhubung Ke Asset",-1)),e(k,{thickness:3,class:"mt-3 mb-5"}),t.asset!=null&&t.asset.id==null?(m(),g("div",L," Tidak Terhubung Dengan Aset Manapun ")):U("",!0),t.asset!=null&&t.asset.id!=null&&t.asset.slug_unit!=null?(m(),g("div",K,[e(d,{dense:""},{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(p,{items:r.assets_types,label:"Pilih Tipe Asset",modelValue:t.asset.asset_type_key,"onUpdate:modelValue":n=>t.asset.asset_type_key=n,readonly:!0},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(d,{dense:""},{default:l(()=>[e(s,{cols:"6"},{default:l(()=>[e(i,{label:"Nama Asset",modelValue:t.asset.name,"onUpdate:modelValue":n=>t.asset.name=n,readonly:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{cols:"6"},{default:l(()=>[e(p,{items:r.assets_slugs_combos,label:"Pilih Asset Slug",modelValue:t.asset.slug,"onUpdate:modelValue":n=>t.asset.slug=n,readonly:!0},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)])):U("",!0)]),_:2},1024)]),info:l(({theme:_})=>[e(w,{class:"mt-3",color:_,block:"",variant:"flat",onClick:a[0]||(a[0]=v=>f.redirectPage("maintenance"))},{default:l(()=>a[5]||(a[5]=[x("List Maintenance")])),_:2},1032,["color"]),e(w,{class:"mt-3",color:_,block:"",variant:"flat",onClick:a[1]||(a[1]=v=>f.redirectPage("tax"))},{default:l(()=>a[6]||(a[6]=[x("List Tax")])),_:2},1032,["color"])]),_:1})}const q=C(j,[["render",M]]);export{q as default};
