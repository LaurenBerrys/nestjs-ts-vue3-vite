import{X as T,h as W,i as $,Y as D,_ as j}from"./NvapForm.32ab4956.js";import{d as M,a8 as H,a as x,c as I,u as n,g as L,U as _,Z as S,a0 as U,X as y,k as X,l as C,a1 as Y,a2 as z,A as E,W as A,E as P,j as V,n as Z}from"./vue.71710d55.js";const q={...T.props,subBtuText:{type:String,default:"确认"},showIcon:{type:Boolean,default:!1},height:{type:Number,default:446},width:{type:Number,default:600},title:{type:String,default:""},maskClosable:{type:Boolean,default:!1},preset:{type:String,default:"dialog"},showBtn:{type:Boolean,default:!0}},i=function(l,t){var s;return l.currentStyle?l.currentStyle[t]:(s=document.defaultView)==null?void 0:s.getComputedStyle(l,null)[t]},e={left:0,top:0,currentX:0,currentY:0,flag:!1},F=function(l,t,s){const B=document.body.clientWidth,r=document.documentElement.clientHeight,u=t.offsetWidth,g=t.offsetHeight,h=t.offsetLeft,v=t.offsetTop,c=B-h-u,b=r-v-g;i(t,"left")!=="auto"&&(e.left=i(t,"left")),i(t,"top")!=="auto"&&(e.top=i(t,"top")),l.onmousedown=function(a){e.flag=!0,a||(a=window.event,l.onselectstart=function(){return!1});const f=a;e.currentX=f.clientX,e.currentY=f.clientY},document.onmouseup=function(){e.flag=!1,i(t,"left")!=="auto"&&(e.left=i(t,"left")),i(t,"top")!=="auto"&&(e.top=i(t,"top"))},document.onmousemove=function(a){const f=a||window.event;if(e.flag){const k=f.clientX,o=f.clientY,d=k-e.currentX,w=o-e.currentY;let p=parseInt(e.left)+d,m=parseInt(e.top)+w;return-p>h?p=-h:p>c&&(p=c),-m>v?m=-v:m>b&&(m=b),t.style.left=p+"px",t.style.top=m+"px",typeof s=="function"&&s((parseInt(e.left)||0)+d,(parseInt(e.top)||0)+w),a.preventDefault&&a.preventDefault(),!1}}},G={class:"w-full cursor-move",id:"basic-modal-bar"},J=M({name:"NvapModal"}),Q=j(M({...J,props:{...q},emits:["on-close","on-ok","register"],setup(l,{emit:t}){const s=l,B=H(),r=x(null),u=x(!1),g=x(!1),h=I(()=>({...s,...n(r)})),v=I(()=>{const{subBtuText:o}=r.value;return o||s.subBtuText}),c=I(()=>({...B,...n(h),...n(r)}));function b(){u.value=!1,g.value=!1,t("on-close")}function a(){u.value=!1,t("on-close")}function f(){g.value=!0,t("on-ok")}const k={setProps:async function(o){r.value=D(n(r)||{},o)},openModal:function(){u.value=!0,Z(()=>{const o=document.getElementById("basic-modal"),d=document.getElementById("basic-modal-bar");F(d,o)})},closeModal:b,setSubLoading:function(o){g.value=o}};return L()&&t("register",k),(o,d)=>{const w=W,p=$,m=T;return _(),S(m,P({id:"basic-modal"},n(c),{show:n(u),"onUpdate:show":d[0]||(d[0]=N=>V(u)?u.value=N:null),style:{width:n(c).width+"px",height:n(c).height+"px"},"z-index":10001,onClose:a}),U({header:y(()=>[A("div",G,Y(n(c).title),1)]),default:y(()=>[E(o.$slots,"default",{},void 0,!0)]),_:2},[o.$slots.action?{name:"action",fn:y(()=>[E(o.$slots,"action",{},void 0,!0)]),key:"1"}:{name:"action",fn:y(()=>[n(c).showBtn?(_(),S(p,{key:0},{default:y(()=>[X(w,{onClick:b},{default:y(()=>[C("取消")]),_:1}),X(w,{type:"primary",loading:n(g),onClick:f},{default:y(()=>[C(Y(n(v)),1)]),_:1},8,["loading"])]),_:1})):z("",!0)]),key:"0"}]),1040,["show","style"])}}}),[["__scopeId","data-v-9b6189ba"]]);export{Q as _};