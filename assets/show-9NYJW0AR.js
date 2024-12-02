import{_,o as r,D as y,s,y as l,J as a,H as o,F as k,L as A,B as V,c as g,r as U,Z as h,bt as D,N as j}from"./app-CTVUFAzl.js";import{V as d}from"./VCombobox-CXtT6wuz.js";const T={name:"infrastructure-tax-show-asset",props:["record","data"],methods:{changeUnit:function(n,e){n.asset!=null&&n.asset.assetable_type_key!=null?n.asset={type:n.asset.assetable_type_key}:n.asset={},e.refAsset=void 0,e.refAssetType==null&&e.getRefAssetType(n,e),n.asset!=null&&n.asset.assetable_type_key!=null&&e.getRefAsset(n,e)},changeAssetType:function(n,e){e.getRefAsset(n,e)},changeAsset:function(n,e){n.asset={...n.asset,...e.refAsset.assets_slugs[n.asset.slug]}}}};function R(n,e,t,b,f,m){return r(),y(k,null,[s(o,{dense:""},{default:l(()=>[s(a,{cols:"12"},{default:l(()=>[s(d,{modelValue:t.record.unit.name,"onUpdate:modelValue":e[0]||(e[0]=u=>t.record.unit.name=u),label:"Untuk "+t.record.type+" Dari Unit",readonly:!0},null,8,["modelValue","label"])]),_:1})]),_:1}),s(o,{dense:""},{default:l(()=>[s(a,{cols:"12"},{default:l(()=>[s(d,{"item-title":"name","return-object":!1,modelValue:t.record.asset.assetable_type_key,"onUpdate:modelValue":e[1]||(e[1]=u=>t.record.asset.assetable_type_key=u),label:"Pilih Jenis Asset",readonly:!0},null,8,["modelValue"])]),_:1})]),_:1}),s(o,{dense:""},{default:l(()=>[s(a,{cols:"6"},{default:l(()=>[s(d,{"return-object":!1,readonly:!0,modelValue:t.record.asset.name,"onUpdate:modelValue":e[2]||(e[2]=u=>t.record.asset.name=u),label:"Nama Asset"},null,8,["modelValue"])]),_:1}),s(a,{cols:"6"},{default:l(()=>[s(d,{"return-object":!1,modelValue:t.record.asset.slug,"onUpdate:modelValue":e[3]||(e[3]=u=>t.record.asset.slug=u),label:"Slug Asset",readonly:!0},null,8,["modelValue"])]),_:1})]),_:1})],64)}const w=_(T,[["render",R]]),x={name:"infrastructure-tax-show-document",data(){return{jenisHubungan:["Iya","Tidak"],jenis:void 0}},props:["record","data"],methods:{initShowDocument:function(n,e){n.asset!=null?e.jenis="Iya":e.jenis="Tidak"}}},N={key:0},S={key:1};function v(n,e,t,b,f,m){return r(),y(k,null,[f.jenis==null?(r(),y("div",N,A(m.initShowDocument(t.record,t.data)),1)):V("",!0),s(o,{dense:""},{default:l(()=>[s(a,{cols:"12"},{default:l(()=>[s(d,{"return-object":!0,"item-title":"name",modelValue:t.record.unit,"onUpdate:modelValue":e[0]||(e[0]=u=>t.record.unit=u),label:"Untuk "+t.record.type+" Dari Unit"},null,8,["modelValue","label"])]),_:1})]),_:1}),s(o,{dense:""},{default:l(()=>[s(a,{cols:"12"},{default:l(()=>[s(d,{items:f.jenisHubungan,"return-object":!1,readonly:!0,modelValue:t.record.jenis,"onUpdate:modelValue":e[1]||(e[1]=u=>t.record.jenis=u),label:"Apakah Dokumen Terhubung Dengan Asset Dari Unit Ini?"},null,8,["items","modelValue"])]),_:1})]),_:1}),t.record.jenis=="Iya"?(r(),y("div",S,[s(o,{dense:""},{default:l(()=>[s(a,{cols:"12"},{default:l(()=>[s(d,{"item-title":"name","return-object":!1,modelValue:t.record.asset.assetable_type_key,"onUpdate:modelValue":e[2]||(e[2]=u=>t.record.asset.assetable_type_key=u),label:"Pilih Jenis Asset"},null,8,["modelValue"])]),_:1})]),_:1}),s(o,{dense:""},{default:l(()=>[s(a,{cols:"6"},{default:l(()=>[s(d,{"return-object":!1,readonly:!0,modelValue:t.record.asset.name,"onUpdate:modelValue":e[3]||(e[3]=u=>t.record.asset.name=u),label:"Nama Asset"},null,8,["modelValue"])]),_:1}),s(a,{cols:"6"},{default:l(()=>[s(d,{"return-object":!1,modelValue:t.record.asset.slug,"onUpdate:modelValue":e[4]||(e[4]=u=>t.record.asset.slug=u),label:"Slug Asset"},null,8,["modelValue"])]),_:1})]),_:1})])):V("",!0),s(o,{dense:""},{default:l(()=>[s(a,{cols:"6"},{default:l(()=>[s(d,{"return-object":!1,readonly:!0,modelValue:t.record.document.name,"onUpdate:modelValue":e[5]||(e[5]=u=>t.record.document.name=u),label:"Nama Document"},null,8,["modelValue"])]),_:1}),s(a,{cols:"6"},{default:l(()=>[s(d,{"return-object":!1,readonly:!0,modelValue:t.record.document.id,"onUpdate:modelValue":e[6]||(e[6]=u=>t.record.document.id=u),label:"Id Document"},null,8,["modelValue"])]),_:1})]),_:1})],64)}const C=_(x,[["render",v]]),I={name:"infrastructure-record-note-used-show",components:{asset:w,document:C},data(){return{refUnit:void 0,refAssetType:void 0,refAsset:void 0,refDocument:void 0}},methods:{changeTargetType:function(n,e){e.refAsset=void 0,e.refDocument=void 0,n.asset!=null?(n.asset={assetable_type_key:n.asset.assetable_type_key},e.getRefAsset(n,e)):n.asset={},n.document={}},getRefUnit:function(n,e){e.refAssetType==null&&(e.refUnit={},this.$http("infrastructure/api/ref-unit/combos").then(t=>{e.refUnit=t}))},getRefAssetType:function(n,e){e.refAssetType==null&&(e.refAssetType=[],this.$http("infrastructure/api/ref-asset/type").then(t=>{e.refAssetType=t}))},getRefAsset:function(n,e){n.unit==null||n.asset.assetable_type_key==null||(e.refAsset=[],this.$http(`infrastructure/api/ref-asset/${n.unit.id}/${n.asset.assetable_type_key}/asset`).then(t=>{e.refAsset=t}))},getRefDocument:function(n,e,t){t!=null&&(t&&e.getRefDocumentAsset(n,e),t||e.getRefDocummentUnit(n,e))},getRefDocummentUnit:function(n,e){this.$http(`infrastructure/api/ref-document/combos/unit/${n.unit.id}`).then(t=>{e.refDocument=t})},getRefDocumentAsset:function(n,e){this.$http(`infrastructure/api/ref-document/combos/unit/${n.unit.id}/asset/${n.asset.id}`).then(t=>{e.refDocument=t})}}};function B(n,e,t,b,f,m){const u=U("form-show");return r(),g(u,{"with-helpdesk":"","hide-edit":""},{default:l(({combos:{types:p},record:i})=>[s(j,null,{default:l(()=>[s(o,{dense:""},{default:l(()=>[s(a,{cols:"8"},{default:l(()=>[s(d,{items:p,label:"Tipe Yang Digunakan",modelValue:i.type,"onUpdate:modelValue":[c=>i.type=c,c=>m.changeTargetType(i,this)],"return-object":!1,readonly:!0},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),s(a,{cols:"4"},{default:l(()=>[s(h,{modelValue:i.dibekukan,"onUpdate:modelValue":c=>i.dibekukan=c,color:"primary",label:"Dibekukan",readonly:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),(r(),g(D(i.type),{record:i,data:this},null,8,["record"]))]),_:2},1024)]),info:l(()=>e[0]||(e[0]=[])),_:1})}const F=_(I,[["render",B]]);export{F as default};
