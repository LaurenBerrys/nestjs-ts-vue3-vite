import{_ as w}from"./NvapModal.01430e95.js";import{u as M}from"./useModal.11f91f90.js";import{b8 as R,p as _}from"./NvapForm.32ab4956.js";import{d as r,a as o,U as b,Z as j,X as k,k as x,u as l,j as y}from"./vue.71710d55.js";const N=r({name:"assignRoles"}),X=r({...N,setup(O,{expose:i}){const[p,{openModal:m,closeModal:c,setSubLoading:d}]=M({title:"分配角色"}),a=o([]),n=o([]),t=o({});i({open:async(u,s,e)=>{t.value=u,a.value=s,n.value=e,m()}});const v=async()=>{(await R(t.value.id,{roles:a.value})).code==200?(c(),window.$message.success("分配成功")):(window.$message.error("分配失败"),d(!1))};return(u,s)=>{const e=_,g=w;return b(),j(g,{onRegister:l(p),class:"NvapModal",onOnOk:v},{default:k(()=>[x(e,{value:l(a),"onUpdate:value":s[0]||(s[0]=f=>y(a)?a.value=f:null),multiple:"",options:l(n)},null,8,["value","options"])]),_:1},8,["onRegister"])}}});export{X as _};