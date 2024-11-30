import{_ as T,o as m,D as y,s as t,y as u,J as d,S as _,H as r,F as N,c as k,r as F,K as b,W as g,bt as B,B as c,L as D,z as v,A as h,N as L}from"./mobile-Ca1R9rVu.js";import{V as p}from"./VCombobox-BM4p7H6F.js";const P={name:"infrastructure-document-create-land-certificate",props:["record"]};function j(o,e,n,f,s,a){return m(),y(N,null,[t(r,{dense:""},{default:u(()=>[t(d,{cols:"12"},{default:u(()=>[t(_,{label:"Nik",modelValue:n.record.nik,"onUpdate:modelValue":e[0]||(e[0]=V=>n.record.nik=V)},null,8,["modelValue"])]),_:1})]),_:1}),t(r,{dense:""},{default:u(()=>[t(d,{cols:"12"},{default:u(()=>[t(_,{label:"Nip",modelValue:n.record.nip,"onUpdate:modelValue":e[1]||(e[1]=V=>n.record.nip=V)},null,8,["modelValue"])]),_:1})]),_:1})],64)}const w=T(P,[["render",j]]),S={name:"infrastructure-document-create",components:{LandCertificate:w},data(){return{currentFormType:"",formType:["LandCertificate"],unit:{},asset:{},assets:void 0,assets_slugs:void 0,assets_slugs_combos:void 0,assets_types:void 0}},methods:{initUnitAsset:function(o,e,n,f){let s=e[this.$router.currentRoute._value.params.unit];f.unit=s,o.unit=s,this.getAssetType(o,n,f)},clearAssetOption:function(o,e){e.asset={},o.asset={}},checkRoute:function(o=""){let e=this.$router.currentRoute._value.name,n=["show","delete","update","edit","create"];for(let f of n)e=e.replaceAll("-"+f,"");return e==o},getAssetType:function(o,e,n){if(n.unit=e[n.unit.slug],o.unit=e[n.unit.slug],o.asset={},n.assets_types)return n.getAssetList(o,n);n.asset_list=void 0,n.assets_slugs=void 0,n.assets_slugs_combos=void 0,this.$http("infrastructure/api/ref-asset/type").then(f=>{n.assets_types=f})},getAssetList:function(o,e){o.asset={},e.assets=void 0,e.assets_slugs=void 0,e.assets_slugs_combos=void 0,!(e.unit.id==null||e.asset.asset_type_key==null)&&this.$http(`infrastructure/api/ref-asset/${e.unit.id}/${e.asset.asset_type_key}/asset`).then(n=>{e.assets_slugs_combos=n.assets_slugs_combos,e.assets_slugs=n.assets_slugs,e.assets=n.assets})},getAsset:function(o,e){e.asset={...e.asset,...e.assets_slugs[e.asset.slug]},o.asset=e.asset},selectType:function(o,e){e.currentFormType=o.documentable_type_key}}},O={key:0},z={key:1},E={key:2},H={key:3};function J(o,e,n,f,s,a){const V=F("form-create");return m(),k(V,{"with-helpdesk":""},{default:u(({combos:{type_key:x,units:U,units_slug:A,units_ids:C,type_status_map:K,status:R},record:i})=>[t(L,null,{default:u(()=>[t(r,{dense:""},{default:u(()=>[t(d,{cols:"12"},{default:u(()=>[t(_,{label:"Name",modelValue:i.name,"onUpdate:modelValue":l=>i.name=l},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(d,{cols:"12"},{default:u(()=>[t(_,{label:"Description",modelValue:i.description,"onUpdate:modelValue":l=>i.description=l},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(d,{cols:"12"},{default:u(()=>[t(p,{items:R,label:"Status",modelValue:i.status,"onUpdate:modelValue":l=>i.status=l,"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e[13]||(e[13]=b("div",{class:"text-overline mt-6"},"Form Document",-1)),t(g,{thickness:3,class:"mt-3 mb-10"}),t(r,{dense:""},{default:u(()=>[t(d,{cols:"12"},{default:u(()=>[t(p,{items:x,label:"Tipe Document",modelValue:i.documentable_type_key,"onUpdate:modelValue":[l=>i.documentable_type_key=l,l=>a.selectType(i,this)],"return-object":!1},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),(m(),k(B(s.currentFormType),{record:i},null,8,["record"])),!a.checkRoute("infrastructure-unit-asset-document")&&!a.checkRoute("infrastructure-asset-document")&&!a.checkRoute("infrastructure-unit-document")?(m(),y("div",O,[e[7]||(e[7]=b("div",{class:"text-overline mt-6"},"Form Unit Tujuan",-1)),t(g,{thickness:3,class:"mt-3 mb-5"}),t(r,{dense:""},{default:u(()=>[t(d,{cols:"6"},{default:u(()=>[t(_,{label:"Nama Unit",modelValue:s.unit.name,"onUpdate:modelValue":e[0]||(e[0]=l=>s.unit.name=l),readonly:!0},null,8,["modelValue"])]),_:1}),t(d,{cols:"6"},{default:u(()=>[t(p,{items:A,label:"Pilih Unit",modelValue:s.unit.slug,"onUpdate:modelValue":[e[1]||(e[1]=l=>s.unit.slug=l),l=>a.getAssetType(i,U,this)]},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)])):c("",!0),a.checkRoute("infrastructure-unit-document")&&s.unit.id==null?(m(),y("div",z,D(a.initUnitAsset(i,C,U,this)),1)):c("",!0),a.checkRoute("infrastructure-unit-document")?(m(),y("div",E,[e[8]||(e[8]=b("div",{class:"text-overline mt-6"},"Form Unit Tujuan",-1)),t(g,{thickness:3,class:"mt-3 mb-5"}),t(r,{dense:""},{default:u(()=>[t(d,{cols:"6"},{default:u(()=>[t(_,{label:"Nama Unit",modelValue:s.unit.name,"onUpdate:modelValue":e[2]||(e[2]=l=>s.unit.name=l),readonly:!0,disabled:!0},null,8,["modelValue"])]),_:1}),t(d,{cols:"6"},{default:u(()=>[t(p,{items:A,label:"Pilih Unit",modelValue:s.unit.slug,"onUpdate:modelValue":[e[3]||(e[3]=l=>s.unit.slug=l),l=>a.getAssetType(i,U,this)],disabled:!0},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)])):c("",!0),!a.checkRoute("infrastructure-unit-asset-document")&&!a.checkRoute("infrastructure-asset-document")&&s.unit.slug!=null||a.checkRoute("infrastructure-unit-document")?(m(),y("div",H,[e[12]||(e[12]=b("div",{class:"text-overline mt-6"},"Form Asset Tujuan (optional)",-1)),t(g,{thickness:3,class:"mt-3 mb-5"}),s.unit.slug!=null||a.checkRoute("infrastructure-unit-document")?(m(),k(r,{key:0,dense:""},{default:u(()=>[t(d,{cols:"12"},{default:u(()=>[t(p,{items:s.assets_types,label:"Pilih Tipe Asset",modelValue:s.asset.asset_type_key,"onUpdate:modelValue":[e[4]||(e[4]=l=>s.asset.asset_type_key=l),l=>a.getAssetList(i,this)]},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):c("",!0),s.asset.asset_type_key!=null&&s.assets_slugs_combos!=null&&s.assets_slugs_combos.length>0?(m(),k(r,{key:1,dense:""},{default:u(()=>[t(d,{cols:"6"},{default:u(()=>[t(_,{label:"Nama Asset",modelValue:s.asset.name,"onUpdate:modelValue":e[5]||(e[5]=l=>s.asset.name=l),readonly:!0},null,8,["modelValue"])]),_:1}),t(d,{cols:"6"},{default:u(()=>[t(p,{items:s.assets_slugs_combos,label:"Pilih Asset Slug",modelValue:s.asset.slug,"onUpdate:modelValue":[e[6]||(e[6]=l=>s.asset.slug=l),l=>a.getAsset(i,this)]},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),t(v,{class:"mt-2",color:"teal-darken-4",block:"",variant:"flat",onClick:l=>a.clearAssetOption(i,this)},{default:u(()=>e[9]||(e[9]=[h("Bersihkan Pilihan Asset")])),_:2},1032,["color","onClick"])]),_:2},1024)):c("",!0),s.asset.asset_type_key!=null&&s.assets_slugs_combos!=null&&s.assets_slugs_combos.length<=0?(m(),k(r,{key:2,dense:""},{default:u(()=>[t(v,{class:"mt-2",color:"teal-darken-4",block:"",variant:"flat",disabled:!0},{default:u(()=>e[10]||(e[10]=[h("Tidak Ditemukan")])),_:1}),t(v,{class:"mt-2",color:"teal-darken-4",block:"",variant:"flat",onClick:l=>a.clearAssetOption(i,this)},{default:u(()=>e[11]||(e[11]=[h("Bersihkan Pilihan Asset")])),_:2},1032,["color","onClick"])]),_:2},1024)):c("",!0)])):c("",!0)]),_:2},1024)]),_:1})}const G=T(S,[["render",J]]);export{G as default};
