import{_ as oe}from"./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.16b7ae6a.js";import{Q as d,R as g,S as i,d as ie,a as r,r as re,o as ue,c as de,V as b,W as l,k as e,u as a,l as m,_ as I,j as ce,aa as pe,$ as me}from"./vue.c8caa29a.js";import{M as fe,u as ve,d as he}from"./MenuDrawer.69de4a74.js";import{ai as K,v as ge,f as ke,K as ye,h as _e,m as we,aj as be,ae as xe,ak as Ce,al as je,am as Ue,an as $e,n as ze,ao as Be,ap as Ie}from"./BasicForm.943f4865.js";import{f as Ke,b as Le}from"./Table.6259e9bb.js";import{r as L}from"./layout.9db98bf3.js";import"./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.22b82fae.js";import"./vue-router.eba62f5a.js";import"./index.3d4ba369.js";import"./axios.9678a311.js";import"./vue-i18n.0f3c4f7c.js";const Me={class:"inline-block",viewBox:"0 0 21 21",width:"1em",height:"1em"},Te=[i("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round",d:"m9.508 4.067l-5 2.857A2 2 0 0 0 3.5 8.661V15.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.66a2 2 0 0 0-1.008-1.736l-5-2.857a2 2 0 0 0-1.984 0zM13.5 8.5l-6 6m0-6l6 6"},null,-1)],Ve={name:"system-uicons-mail-delete",render:function(k,p){return d(),g("svg",Me,Te)}},qe={class:"inline-block",viewBox:"0 0 21 21",width:"1em",height:"1em"},Ae=[i("g",{fill:"none","fill-rule":"evenodd",transform:"translate(1 3)"},[i("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round",d:"M11.914.5H15.5a2 2 0 0 1 2 2v3.586a1 1 0 0 1-.293.707l-6.793 6.793a2 2 0 0 1-2.828 0l-3.172-3.172a2 2 0 0 1 0-2.828L11.207.793A1 1 0 0 1 11.914.5z"}),i("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round",d:"m7.5 13.5l-2.013 1.006A2 2 0 0 1 2.72 13.42L1.105 9.114a2 2 0 0 1 .901-2.45L9.5 2.5"}),i("rect",{width:"2",height:"2",x:"14",y:"2",fill:"currentColor",rx:"1"})],-1)],De={name:"system-uicons-tags",render:function(k,p){return d(),g("svg",qe,Ae)}},Oe={class:"inline-block",viewBox:"0 0 21 21",width:"1em",height:"1em"},Re=[i("g",{fill:"none","fill-rule":"evenodd",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"},[i("circle",{cx:"8.5",cy:"8.5",r:"5"}),i("path",{d:"M17.571 17.5L12 12"})],-1)],Se={name:"system-uicons-search",render:function(k,p){return d(),g("svg",Oe,Re)}},He={class:"inline-block",viewBox:"0 0 21 21",width:"1em",height:"1em"},Ne=[i("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round",d:"m13.5 14.5l-4-4l4-4m-4 8l-4-4l4-4"},null,-1)],Pe={name:"system-uicons-chevron-left-double",render:function(k,p){return d(),g("svg",He,Ne)}},Qe={class:"inline-block",viewBox:"0 0 21 21",width:"1em",height:"1em"},Xe=[i("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round",d:"m6.5 13.499l4 4.001l4-4.001m-4 4.001v-13"},null,-1)],Ye={name:"system-uicons-arrow-down",render:function(k,p){return d(),g("svg",Qe,Xe)}},Ee={class:"flex items-center"},Ge={class:"flex items-center"},We={class:"w-full menu"},Fe={class:"py-3 menu-list"},Je={key:0,class:"flex items-center justify-center py-4"},dl=ie({__name:"menu",setup(k){const p=r(!0),M={title:{required:!0,message:"请输入菜单名",trigger:"blur"},path:{required:!0,message:"请输入路径",trigger:"blur"}},n=re({parentId:0,title:"",path:"",component:"",code:"",icon:"",order:0,name:"",redirect:null,permissions:""}),x=r(!1),T=r(!1);ue(()=>{const{userInfo:o}=Ke(Le());y.value=o.value.menuList||[],p.value=!1});const j=r(""),f=r(""),U=r("");let _=r([]);const V=de(()=>!_.value.length),q=r([{label:"添加顶级菜单",key:"home",disabled:!1},{label:"添加子菜单",key:"son",disabled:V}]),A=r(null);function D(){delete n.children,delete n.id,n.permissions=n.permissions.split(","),ve(n.name,n).then(o=>{o.code==200?window.$message.success("修改成功"):window.$message.error("修改失败")})}const O=o=>{j.value=o==="home"?"添加顶级菜单":`添加子菜单：${f.value}`,R()},$=r(),R=()=>{const{openDrawer:o}=$.value;o()};let v=r([]);const y=r([]);function S(){v.value.length?v.value=[]:v.value=a(y).map(o=>o.key)}const w=r("");function H(o){if(o.length){U.value=o[0];const t=K(a(y),o[0]);_.value=o,f.value=t.title,t.permissions&&ge(t.permissions)&&(t.permissions=t.permissions.join(",")),Object.assign(n,t),x.value=!0}else x.value=!1,_.value=[],f.value=""}function N(o){v.value=o}function P(){const o=K(a(y),_.value[0]);Object.assign(n,o)}function Q(){window.$dialog.info({title:"提示",content:"您确定想删除此权限吗?",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{window.$message.success("删除成功")},onNegativeClick:()=>{window.$message.error("已取消")}})}const X=()=>{window.$dialog.info({title:"提示",content:"您确定想删除此菜单吗?",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{he(f.value).then(o=>{window.$message.success("删除成功")})},onNegativeClick:()=>{window.$message.error("已取消")}})};return(o,t)=>{const Y=Ye,h=ke,E=ye,G=Pe,C=_e,W=Se,c=we,F=be,J=xe,z=Ce,B=je,Z=De,ee=Ve,le=Ue,u=$e,ae=ze,ne=Be,te=Ie,se=oe;return d(),b(se,null,{default:l(()=>[e(te,{cols:"1 s:1 m:1 l:3 xl:3 2xl:3",responsive:"screen","x-gap":12},{default:l(()=>[e(B,{span:"1"},{default:l(()=>[e(z,{segmented:{content:!0},size:"small"},{header:l(()=>[e(C,null,{default:l(()=>[e(E,{trigger:"hover",onSelect:O,options:a(q)},{default:l(()=>[e(h,{type:"info",ghost:"","icon-placement":"right"},{icon:l(()=>[i("div",Ee,[e(Y)])]),default:l(()=>[m(" 添加菜单 ")]),_:1})]),_:1},8,["options"]),e(h,{type:"info",ghost:"","icon-placement":"left",onClick:S},{icon:l(()=>[i("div",Ge,[e(G)])]),default:l(()=>[m(" 全部"+I(a(v).length?"收起":"展开")+" ",1)]),_:1})]),_:1})]),default:l(()=>[i("div",We,[e(c,{type:"text",value:a(w),"onUpdate:value":t[0]||(t[0]=s=>ce(w)?w.value=s:null),placeholder:"输入菜单名称搜索"},{suffix:l(()=>[e(W)]),_:1},8,["value"]),i("div",Fe,[a(p)?(d(),g("div",Je,[e(F,{size:"medium"})])):(d(),b(J,{key:1,"block-line":"",cascade:"",checkable:"","key-field":"id","label-field":"title","children-field":"children","virtual-scroll":!0,pattern:a(w),data:a(y),expandedKeys:a(v),style:{"max-height":"650px",overflow:"hidden"},"onUpdate:selectedKeys":H,"onUpdate:expandedKeys":N},null,8,["pattern","data","expandedKeys"]))])])]),_:1})]),_:1}),e(B,{span:"2"},{default:l(()=>[e(z,{segmented:{content:!0},bordered:!0,size:"small"},{header:l(()=>[e(C,null,{default:l(()=>[e(Z),i("span",null,"编辑菜单"+I(a(f)?`：${a(f)}`:""),1)]),_:1})]),"header-extra":l(()=>[e(h,{onClick:X,type:"info",ghost:"","icon-placement":"right"},{icon:l(()=>[e(ee)]),default:l(()=>[m(" 删除菜单 ")]),_:1})]),default:l(()=>[e(le,{type:"info",closable:""},{default:l(()=>[m(" 从菜单列表选择一项后，进行编辑")]),_:1}),a(x)?(d(),b(ne,{key:0,model:a(n),rules:M,ref_key:"formRef",ref:A,"label-placement":"left","label-width":100,class:"py-4"},{default:l(()=>[e(u,{label:"菜单名",path:"label"},{default:l(()=>[e(c,{placeholder:"请输入菜单名",value:a(n).title,"onUpdate:value":t[1]||(t[1]=s=>a(n).title=s)},null,8,["value"])]),_:1}),e(u,{label:"路径",path:"path"},{default:l(()=>[e(c,{placeholder:"请输入路径",value:a(n).path,"onUpdate:value":t[2]||(t[2]=s=>a(n).path=s)},null,8,["value"])]),_:1}),e(u,{label:"路径名",path:"name"},{default:l(()=>[e(c,{placeholder:"请输入路径名字",value:a(n).name,"onUpdate:value":t[3]||(t[3]=s=>a(n).name=s)},null,8,["value"])]),_:1}),e(u,{label:"地址",path:"component"},{default:l(()=>[e(c,{placeholder:"请输入地址",value:a(n).component,"onUpdate:value":t[4]||(t[4]=s=>a(n).component=s)},null,8,["value"])]),_:1}),e(u,{label:"重定向",path:"redirect"},{default:l(()=>[e(c,{placeholder:"请输入重定向",value:a(n).redirect,"onUpdate:value":t[5]||(t[5]=s=>a(n).redirect=s)},null,8,["value"])]),_:1}),e(u,{label:"图标",path:"icon"},{default:l(()=>[e(c,{placeholder:"请选择图标",value:a(n).icon,"onUpdate:value":t[6]||(t[6]=s=>a(n).icon=s)},{suffix:l(()=>{return[(d(),b(pe((s=a(n).icon,s.includes("system-uicons:")?L(s,{size:20}):L("system-uicons:"+s,{size:20})))))];var s}),_:1},8,["value"])]),_:1}),e(u,{label:"菜单权限",path:"code"},{default:l(()=>[e(c,{placeholder:"请输入权限",value:a(n).code,"onUpdate:value":t[7]||(t[7]=s=>a(n).code=s)},null,8,["value"])]),_:1}),e(u,{label:"按钮权限名称",path:"permissions"},{default:l(()=>[e(c,{placeholder:"请输入按钮权限名称，多个权限用，分割",value:a(n).permissions,"onUpdate:value":t[8]||(t[8]=s=>a(n).permissions=s)},null,8,["value"])]),_:1}),e(u,{label:"排序",path:"order"},{default:l(()=>[e(ae,{value:a(n).order,"onUpdate:value":t[9]||(t[9]=s=>a(n).order=s)},null,8,["value"])]),_:1}),e(u,{path:"auth",style:{"margin-left":"100px"}},{default:l(()=>[e(C,null,{default:l(()=>[e(h,{type:"primary",loading:a(T),onClick:D},{default:l(()=>[m("保存修改")]),_:1},8,["loading"]),e(h,{onClick:P},{default:l(()=>[m("重置")]),_:1}),e(h,{onClick:Q},{default:l(()=>[m("删除")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])):me("",!0)]),_:1})]),_:1})]),_:1}),e(fe,{ref_key:"createDrawerRef",ref:$,title:a(j),parentId:a(U)},null,8,["title","parentId"])]),_:1})}}});export{dl as default};