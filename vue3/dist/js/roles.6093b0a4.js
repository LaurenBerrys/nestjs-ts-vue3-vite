import{_ as re}from"./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.16b7ae6a.js";import{_ as M}from"./BasicModal.e8806bbf.js";import{v as S,f as de,ae as ce,af as pe,X as ue,m as me,ad as fe}from"./BasicForm.943f4865.js";import{b as he,o as U,_ as ve}from"./Table.6259e9bb.js";import{r as F,h as ye,d as ge,g as be,a as c,o as we,Q as ke,V as xe,W as t,k as o,l as v,u as l,S as b,x as w,v as k,_ as _e,j as Re}from"./vue.c8caa29a.js";import{T as Me,u as C,a as Se,c as Ue,b as Ce,g as Fe}from"./roles.b3fca30b.js";import"./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.22b82fae.js";import"./vue-router.eba62f5a.js";import"./layout.9db98bf3.js";import"./vue-i18n.0f3c4f7c.js";import"./index.3d4ba369.js";import"./axios.9678a311.js";const Pe=[{title:"id",key:"id"},{title:"角色名称",key:"name"}],Ee=(y,h)=>F({width:250,title:"操作",key:"action",fixed:"right",render:p=>ye(Me,{style:"button",actions:[{label:"权限分配",onClick:y.bind(null,p),ifShow:()=>!0},{label:"删除",onClick:h.bind(null,p),ifShow:()=>!0}]})}),Ke=[{field:"name",component:"NInput",label:"姓名",labelMessage:"请输入名字",giProps:{span:1},componentProps:{placeholder:"请输入姓名",onInput:y=>{}},rules:[{required:!0,message:"请输入姓名",trigger:["blur"]}]},{field:"code",component:"NTreeSelect",label:"菜单",labelMessage:"请选择菜单",giProps:{span:1},componentProps:{placeholder:"请选择菜单"}}],ze={flex:""},Le={style:{padding:"0 40px",display:"flex","flex-direction":"column","align-items":"center"}},Oe={flex:"","justify-between":"","w-360":""},De=ge({__name:"roles",setup(y){be();const{userInfo:h}=he(),p=c({}),[P,{openModal:E,closeModal:K,setSubLoading:z}]=C({title:"添加角色"}),n=c([]),[L,{submit:$e,validate:O,getFieldsValue:$,setSchemas:j}]=Se({gridProps:{cols:1},collapsedRows:3,labelWidth:120,layout:"horizontal",showActionButtonGroup:!1,schemas:Ke}),B=()=>{},I=c(null),T=async()=>{try{if(!await O()){const e=$();await Ue(e),K(),window.$message.success("提交成功")}}catch{window.$message.error("验证失败，请填写完整信息"),z(!1)}},[V,{openModal:q,closeModal:A,setSubLoading:N}]=C({title:"分配菜单和按钮权限",style:{width:"800px"}}),W=()=>{let e=[];n.value.forEach(i=>{i.permissions&&e.push(...i.permissions),i.children&&i.children.forEach(d=>{d.permissions&&e.push(...d.permissions)})}),p.value.code=f.value;const{id:s,code:a}=p.value;Ce(s,{code:a,permissions:e}).then(({code:i,msg:d})=>{i==200?(window.$message.success(d),A()):(window.$message(d),N(!1))})},g=c([]),f=c([]),G=e=>{e=e.map(s=>s.trim()),e=[...new Set(e)],f.value=e},Q=e=>{g.value=e},X=F({pageSize:10,name:null}),D=e=>{},H=async e=>{let s={...l(X),...e};const{data:a}=await Fe(s);return a},J=e=>{n.value=U(h.menuList)||[],e.permissions||(e.permissions=[]),n.value.forEach(s=>{s.permissions&&(s.permissions=s.permissions.filter(a=>e.permissions.includes(a))),s.children&&s.children.filter(a=>{a.permissions&&(S(a.permissions)?a.permissions=a.permissions.filter(i=>e.permissions.includes(i)):a.permissions=a.permissions.split(",").filter(i=>e.permissions.includes(i)))})}),p.value=e,f.value=e.code,q()},Y=e=>{};we(async()=>{n.value=U(h.menuList)||[],g.value=n.value.map(e=>e.code)});const Z=async()=>{await E(),await j("code",{componentProps:{placeholder:"请选择菜单",options:l(n),multiple:!0,keyField:"code",labelField:"title",childrenField:"children",onUpdateValue:e=>{}}})},r=c(),u=c(),ee=e=>{n.value.forEach(s=>{s.title===r.value&&(s.permissions=e.split(",")),s.children&&s.children.forEach(a=>{a.title===r.value&&(a.permissions=e.split(","))})})},se=({option:e})=>({onClick(){r.value=e.title,e.permissions===void 0?u.value="":S(e.permissions)?u.value=e.permissions.join(","):u.value=e.permissions}});return(e,s)=>{const a=de,i=ve,d=ce,ae=pe,x=ue,_=me,le=M,ie=fe,oe=M,te=re;return ke(),xe(te,null,{default:t(()=>[o(i,{columns:l(Pe),request:H,"row-key":m=>m.id,ref:"actionRef",actionColumn:l(Ee)(J,Y),"onUpdate:checkedRowKeys":D},{tableButton:t(()=>[o(a,{type:"primary",size:"small",onClick:Z},{default:t(()=>[v("添加角色")]),_:1})]),_:1},8,["columns","row-key","actionColumn"]),o(le,{onRegister:l(V),ref:"modalRef",class:"basicModal",onOnOk:W},{default:t(()=>[b("div",ze,[o(d,{style:{"max-height":"950px",width:"400px",overflow:"hidden"},"block-line":"",cascade:"",checkable:"","key-field":"code","label-field":"title","children-field":"children","virtual-scroll":!0,data:l(n),expandedKeys:l(g),"checked-keys":l(f),"default-checked-keys":l(f),"node-props":se,"onUpdate:checkedKeys":G,"onUpdate:expandedKeys":Q},null,8,["data","expandedKeys","checked-keys","default-checked-keys"]),b("div",Le,[o(ae,{type:"success",italic:!0},{default:t(()=>[v(' 添加按钮权限的时候，尽量取名为，组件名+"-"+按钮名 如：User-AddButton ')]),_:1}),b("div",Oe,[w(o(x,{bordered:!1,type:"error",style:{"margin-right":"10px"}},{default:t(()=>[v(" 按钮权限 ")]),_:1},512),[[k,l(r)]]),w(o(x,{bordered:!1,type:"success",style:{"margin-bottom":"10px"}},{default:t(()=>[v(_e(l(r)),1)]),_:1},512),[[k,l(r)]])]),w(o(_,{size:"small",value:l(u),"onUpdate:value":s[0]||(s[0]=m=>Re(u)?u.value=m:null),placeholder:"请输入按钮权限",onChange:ee},null,8,["value"]),[[k,l(r)]])])])]),_:1},8,["onRegister"]),o(oe,{onRegister:l(P),ref:"modalRef2",class:"basicModal",onOnOk:T},{default:t(()=>[o(ie,{ref_key:"formRefs",ref:I,onRegister:l(L),onReset:B,class:"basicForm"},{statusSlot:t(({model:m,field:R})=>[o(_,{value:m[R],"onUpdate:value":ne=>m[R]=ne},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister"])]),_:1},8,["onRegister"])]),_:1})}}});export{De as default};