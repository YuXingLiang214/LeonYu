import{_ as V}from"./pageContainer-1333adb9.js";import{u as E,a as k,o as v,c as U,d as l,e,g as w}from"./index-11bfae0d.js";import{a as x,E as C}from"./el-col-f3af493a.js";import{E as y,a as B}from"./el-form-item-50dc5763.js";import{E as I}from"./_plugin-vue_export-helper-26c8c485.js";import{E as S}from"./el-input-08963480.js";import"./_baseClone-e848d152.js";const j={__name:"UserProfile",setup(q){const{user:{username:m,nickname:u,email:s,id:i}}=E(),o=k({username:m,nickname:u,email:s,id:i}),p={nickname:[{required:!0,message:"请输入用户昵称",trigger:"blur"},{pattern:/^\S{2,10}$/,message:"昵称必须是2-10位的非空字符串",trigger:"blur"}],email:[{required:!0,message:"请输入用户邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}]};return(_,a)=>{const r=S,n=y,d=I,c=B,f=x,g=C,b=V;return v(),U(b,null,{default:l(()=>[e(g,null,{default:l(()=>[e(f,{span:12},{default:l(()=>[e(c,{model:o.value,rules:p,ref:"formRef","label-width":"100px",size:"large"},{default:l(()=>[e(n,{label:"登录名称"},{default:l(()=>[e(r,{modelValue:o.value.username,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value.username=t),disabled:""},null,8,["modelValue"])]),_:1}),e(n,{label:"用户昵称",prop:"nickname"},{default:l(()=>[e(r,{modelValue:o.value.nickname,"onUpdate:modelValue":a[1]||(a[1]=t=>o.value.nickname=t)},null,8,["modelValue"])]),_:1}),e(n,{label:"用户邮箱",prop:"email"},{default:l(()=>[e(r,{modelValue:o.value.email,"onUpdate:modelValue":a[2]||(a[2]=t=>o.value.email=t)},null,8,["modelValue"])]),_:1}),e(n,null,{default:l(()=>[e(d,{type:"primary",onClick:_.onSubmit},{default:l(()=>[w("提交修改")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})}}};export{j as default};
