import{m as u,t as f,v as i,x as m,o as n,z as c,F as o,f as s,D as r,g as y,ak as _,a2 as h,h as t,A as v,_ as g,I as C,c as b,d as p}from"./index-11bfae0d.js";import{_ as S}from"./_plugin-vue_export-helper-26c8c485.js";const w=u({header:{type:String,default:""},bodyStyle:{type:f([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),$=i({name:"ElCard"}),k=i({...$,props:w,setup(d){const a=m("card");return(e,l)=>(n(),c("div",{class:o([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(n(),c("div",{key:0,class:o(s(a).e("header"))},[r(e.$slots,"header",{},()=>[y(_(e.header),1)])],2)):h("v-if",!0),t("div",{class:o([s(a).e("body"),e.bodyClass]),style:v(e.bodyStyle)},[r(e.$slots,"default")],6)],2))}});var B=g(k,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const N=C(B);const z={class:"header"},E={class:"extra"},I={__name:"pageContainer",props:{title:{required:!0,type:String}},setup(d){return(a,e)=>{const l=N;return n(),b(l,{class:"page-container"},{header:p(()=>[t("div",z,[t("span",null,_(d.title),1),t("div",E,[r(a.$slots,"extra",{},void 0,!0)])])]),default:p(()=>[r(a.$slots,"default",{},void 0,!0)]),_:3})}}},A=S(I,[["__scopeId","data-v-989cafcb"]]);export{A as _};
