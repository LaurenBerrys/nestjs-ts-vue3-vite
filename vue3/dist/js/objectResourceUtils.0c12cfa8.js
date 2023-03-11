import{a as oi}from"./devEnvironmentUtils.4eab2a99.js";import{t as k,r as b,l9 as ai,la as ii,lb as fr,e as ht,az as co,fs as ni,eC as ra,aM as Ve,fD as kt,gW as yr,b as z,gV as si,gt as oa,fn as Ee,b7 as Er,fm as aa,c as ee,fp as Te,b8 as ye,lc as li,fw as dt,W as ci,Q as Ir,s as Nr,a_ as Ge,aA as Xt,bg as rr,h2 as or,c_ as di,bS as ui,aS as Kt,b0 as hi,jI as uo,d2 as mi,gM as mt,ld as pt,f as ho,le as pi,aW as fi,aX as vi,a as ia,fr as mo,gs as tt,z as gi,ew as We,hV as xi,kO as Ti,e3 as _i,lf as bi,lg as wi,fo as Dr,I as Si,aR as yi,gN as po,lh as na,li as sa,h as fo,q as At,lj as Fr,lk as Ar,ll as Ai,ae as M,fq as pe,h1 as ar,fh as Ci,lm as Cr,fi as Mi,fj as Oi,eb as Pi,w as Li,ln as Ri,a4 as vo,U as Ei,a2 as go,kQ as xo,lo as la,jO as Qt,eE as Ii,fJ as To,fv as Ni,kP as _o}from"./index.8fd7165c.js";import{e as ir}from"./mat3f64.eb921732.js";import{o as Yt,r as Di,e as zr}from"./mat4f64.b473928c.js";import{c as Jt,x as Ct,u as ca,i as st,L as Fi,O as bo,E as zi}from"./BufferView.b3039ce1.js";import{t as Vi,r as Bi,f as wo,e as Gi}from"./vec33.5889ffa1.js";import{m as Ui,n as Hi,o as ot,r as Xe,a as $i,b as ki,c as So,e as Wi,t as ji,i as qi,f as Xi,d as Ki}from"./DefaultMaterial_COLOR_GAMMA.078f8e82.js";import{t as vr}from"./resourceUtils.d8a25705.js";import{t as Qi}from"./NestedMap.1b5db22e.js";import{r as da}from"./Version.a4557b9e.js";import{t as ua}from"./requestImageUtils.54152381.js";import{t as Yi,D as gr,c as ft,N as Mr,a as Be,u as te,n as Ue,e as Ot}from"./basicInterfaces.b7051eb1.js";import{s as Z,v as Ji}from"./Util.68fdcaea.js";import{s as yo,R as ha}from"./sphere.a87dd95a.js";import{o as Ao,n as Zi}from"./Indices.7165e4ff.js";import{O as f}from"./VertexAttribute.15d1866a.js";import{o as s,n as nr,W as Vr,_ as Br,a as ut,c as en,A as tn,h as rn,l as on,b as an,d as nn,S as sn}from"./OrderIndependentTransparency.0d2f697c.js";import{q as Pt}from"./Table.e9c997d5.js";import{u as Le,P as qe,L as Qe,C as _e,F as ln,D as it,M as Co,G as Mo,Y as cn,V as dn,E as _t,I as He,O as ve}from"./enums.64ab819c.js";import{E as ze,a as un}from"./Texture.fb0c670a.js";import{_ as hn,f as mn,E as pn,x as fn,n as vn}from"./VertexArrayObject.1b8f3583.js";import{t as be}from"./VertexElementDescriptor.2925c6af.js";import{T as gn}from"./InterleavedLayout.c89035f2.js";import{r as xn,n as Tn}from"./vec3f32.5805ce90.js";import{S as _n}from"./quat.17ee06b3.js";import{e as bn}from"./quatf64.75f9f553.js";import{o as wn,r as Sn}from"./doublePrecisionUtils.e3c3d0d8.js";import{r as Pe}from"./symbolColorUtils.2420e89c.js";let at=class{constructor(e,t,r=!1,o=t){this.data=e,this.size=t,this.exclusive=r,this.stride=o}};function vt(e){if(k(e))return null;const t=b(e.offset)?e.offset:ai,r=b(e.rotation)?e.rotation:0,o=b(e.scale)?e.scale:ii,a=fr(1,0,0,0,1,0,t[0],t[1],1),i=fr(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),n=fr(o[0],0,0,0,o[1],0,0,0,1),l=ht();return co(l,i,n),co(l,a,l),l}let yn=class{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new class{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}},this.numberOfVertices=0}};function An(e){if(e.length<ni)return Array.from(e);if(Array.isArray(e))return Float64Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return Uint16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}const je=new ra({deallocator:null});let Gr=class{constructor(){this.id=oa()}unload(){}};var Re;function Cn(e,t,r){return Ee(xr,t,e),Ee(Oo,r,e),Er(aa(xr,xr,Oo))/2}(function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"})(Re||(Re={})),new yo(Ji),new yo(()=>function(e){return e?{p0:kt(e.p0),p1:kt(e.p1),p2:kt(e.p2)}:{p0:z(),p1:z(),p2:z()}}());const xr=z(),Oo=z(),J=z(),Ce=z(),Bt=z(),fe=z();let ma=class pa extends Gr{constructor(t,r,o=[],a=null,i=Re.Mesh,n=null,l=-1){super(),this.material=t,this.mapPositions=a,this.type=i,this.objectAndLayerIdColor=n,this.edgeIndicesLength=l,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[c,d]of r)d&&this._vertexAttributes.set(c,{...d});if(o==null||o.length===0){const c=function(h){const m=h.values().next().value;return m==null?0:m.data.length/m.size}(this._vertexAttributes),d=Ao(c);this.edgeIndicesLength=this.edgeIndicesLength<0?c:this.edgeIndicesLength;for(const h of this._vertexAttributes.keys())this._indices.set(h,d)}else for(const[c,d]of o)d&&(this._indices.set(c,Zi(d)),c===f.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(c).length:this.edgeIndicesLength))}instantiate(t={}){const r=new pa(t.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach((o,a)=>{o.exclusive=!1,r._vertexAttributes.set(a,o)}),this._indices.forEach((o,a)=>r._indices.set(a,o)),r._boundingInfo=this._boundingInfo,r.transformation=t.transformation||this.transformation,r}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(t){let r=this._vertexAttributes.get(t);return r&&!r.exclusive&&(r={...r,exclusive:!0,data:An(r.data)},this._vertexAttributes.set(t,r)),r}get indices(){return this._indices}get indexCount(){const t=this._indices.values().next().value;return t?t.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return k(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return!!(this.type===Re.Mesh?this._computeAttachmentOriginTriangles(t):this.type===Re.Line?this._computeAttachmentOriginLines(t):this._computeAttachmentOriginPoints(t))&&(b(this._transformation)&&dt(t,t,this._transformation),!0)}_computeAttachmentOriginTriangles(t){const r=this.indices.get(f.POSITION);return function(o,a,i){if(!o||!a)return!1;const{size:n,data:l}=o;ee(i,0,0,0),ee(fe,0,0,0);let c=0,d=0;for(let h=0;h<a.length-2;h+=3){const m=a[h+0]*n,x=a[h+1]*n,p=a[h+2]*n;ee(J,l[m+0],l[m+1],l[m+2]),ee(Ce,l[x+0],l[x+1],l[x+2]),ee(Bt,l[p+0],l[p+1],l[p+2]);const u=Cn(J,Ce,Bt);u?(Te(J,J,Ce),Te(J,J,Bt),ye(J,J,1/3*u),Te(i,i,J),c+=u):(Te(fe,fe,J),Te(fe,fe,Ce),Te(fe,fe,Bt),d+=3)}return(d!==0||c!==0)&&(c!==0?(ye(i,i,1/c),!0):d!==0&&(ye(i,fe,1/d),!0))}(this.vertexAttributes.get(f.POSITION),r,t)}_computeAttachmentOriginLines(t){const r=this.vertexAttributes.get(f.POSITION),o=this.indices.get(f.POSITION);return function(a,i,n,l){if(!a)return!1;ee(l,0,0,0),ee(fe,0,0,0);let c=0,d=0;const{size:h,data:m}=a,x=i?i.length-1:m.length/h-1,p=x+(n?2:0);for(let u=0;u<p;u+=2){const _=u<x?u:x,L=u<x?u+1:0,P=(i?i[_]:_)*h,C=(i?i[L]:L)*h;J[0]=m[P],J[1]=m[P+1],J[2]=m[P+2],Ce[0]=m[C],Ce[1]=m[C+1],Ce[2]=m[C+2],ye(J,Te(J,J,Ce),.5);const v=li(J,Ce);v>0?(Te(l,l,ye(J,J,v)),c+=v):c===0&&(Te(fe,fe,J),d++)}return c!==0?(ye(l,l,1/c),!0):d!==0&&(ye(l,fe,1/d),!0)}(r,o,o&&function(a,i,n){return!(!("isClosed"in a)||!a.isClosed)&&(n?n.length>2:i.data.length>6)}(this.material.parameters,r,o),t)}_computeAttachmentOriginPoints(t){const r=this.indices.get(f.POSITION);return function(o,a,i){if(!o||!a)return!1;const{size:n,data:l}=o;ee(i,0,0,0);let c=-1,d=0;for(let h=0;h<a.length;h++){const m=a[h]*n;c!==m&&(i[0]+=l[m+0],i[1]+=l[m+1],i[2]+=l[m+2],d++),c=m}return d>1&&ye(i,i,1/d),d>0}(this.vertexAttributes.get(f.POSITION),r,t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.indices.get(f.POSITION),r=this.vertexAttributes.get(f.POSITION);if(!t||t.length===0||!r)return null;const o=this.type===Re.Mesh?3:1;Z(t.length%o==0,"Indexing error: "+t.length+" not divisible by "+o);const a=Ao(t.length/o);return new class fa{constructor(n,l,c,d){this.primitiveIndices=n,this._numIndexPerPrimitive=l,this.indices=c,this.position=d,this._children=void 0,Z(n.length>=1),Z(c.length%this._numIndexPerPrimitive==0),Z(c.length>=n.length*this._numIndexPerPrimitive),Z(d.size===3||d.size===4);const{data:h,size:m}=d,x=n.length;let p=m*c[this._numIndexPerPrimitive*n[0]];je.clear(),je.push(p);const u=Ve(h[p],h[p+1],h[p+2]),_=kt(u);for(let C=0;C<x;++C){const v=this._numIndexPerPrimitive*n[C];for(let A=0;A<this._numIndexPerPrimitive;++A){p=m*c[v+A],je.push(p);let w=h[p];u[0]=Math.min(w,u[0]),_[0]=Math.max(w,_[0]),w=h[p+1],u[1]=Math.min(w,u[1]),_[1]=Math.max(w,_[1]),w=h[p+2],u[2]=Math.min(w,u[2]),_[2]=Math.max(w,_[2])}}this.bbMin=u,this.bbMax=_;const L=yr(z(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(_[0]-u[0],_[1]-u[1]),_[2]-u[2]);let P=this.radius*this.radius;for(let C=0;C<je.length;++C){p=je.getItemAt(C);const v=h[p]-L[0],A=h[p+1]-L[1],w=h[p+2]-L[2],S=v*v+A*A+w*w;if(S<=P)continue;const R=Math.sqrt(S),E=.5*(R-this.radius);this.radius=this.radius+E,P=this.radius*this.radius;const y=E/R;L[0]+=v*y,L[1]+=A*y,L[2]+=w*y}this.center=L,je.clear()}getChildren(){if(this._children||si(this.bbMin,this.bbMax)<=1)return this._children;const n=yr(z(),this.bbMin,this.bbMax,.5),l=this.primitiveIndices.length,c=new Uint8Array(l),d=new Array(8);for(let u=0;u<8;++u)d[u]=0;const{data:h,size:m}=this.position;for(let u=0;u<l;++u){let _=0;const L=this._numIndexPerPrimitive*this.primitiveIndices[u];let P=m*this.indices[L],C=h[P],v=h[P+1],A=h[P+2];for(let w=1;w<this._numIndexPerPrimitive;++w){P=m*this.indices[L+w];const S=h[P],R=h[P+1],E=h[P+2];S<C&&(C=S),R<v&&(v=R),E<A&&(A=E)}C<n[0]&&(_|=1),v<n[1]&&(_|=2),A<n[2]&&(_|=4),c[u]=_,++d[_]}let x=0;for(let u=0;u<8;++u)d[u]>0&&++x;if(x<2)return;const p=new Array(8);for(let u=0;u<8;++u)p[u]=d[u]>0?new Uint32Array(d[u]):void 0;for(let u=0;u<8;++u)d[u]=0;for(let u=0;u<l;++u){const _=c[u];p[_][d[_]++]=this.primitiveIndices[u]}this._children=new Array;for(let u=0;u<8;++u)p[u]!==void 0&&this._children.push(new fa(p[u],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){je.prune()}}(a,o,t,r)}get transformation(){return ci(this._transformation,Yt)}set transformation(t){this._transformation=t&&t!==Yt?Di(t):null}get shaderTransformation(){return b(this._shaderTransformer)?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(t){this._shaderTransformer=t}get hasVolatileTransformation(){return b(this._shaderTransformer)}addHighlight(){const t=new class{constructor(r){this.channel=r,this.id=oa()}}(Yi.Highlight);return this.highlights=function(r,o){return k(r)&&(r=[]),r.push(o),r}(this.highlights,t),t}removeHighlight(t){this.highlights=function(r,o){if(k(r))return null;const a=r.filter(i=>i!==o);return a.length===0?null:a}(this.highlights,t)}};function Ur(e,t=!0){e.attributes.add(f.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(s`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?s`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}var B;(function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"})(B||(B={}));let ne=class{constructor(e,t,r,o,a=null){this.name=e,this.type=t,this.arraySize=a,this.bind={[B.Pass]:null,[B.Draw]:null},b(r)&&b(o)&&(this.bind[r]=o)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},ue=class extends ne{constructor(e,t){super(e,"vec4",B.Pass,(r,o,a)=>r.setUniform4fv(e,t(o,a)))}};const va=Ir.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let ga=class{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){va.error("Trying to include shader module multiple times with different sets of options.");const o=new Set;for(const a of Object.keys(r))r[a]!==e[a]&&o.add(a);for(const a of Object.keys(e))r[a]!==e[a]&&o.add(a);o.forEach(a=>{})}}else this._includedModules.set(e,t),e(this.builder,t)}},Lt=class extends ga{constructor(){super(...arguments),this.vertex=new Po,this.fragment=new Po,this.attributes=new Mn,this.varyings=new On,this.extensions=new Or,this.constants=new xa}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),o=this.varyings.generateSource(),a=e==="vertex"?this.vertex:this.fragment,i=a.uniforms.generateSource(),n=a.code.generateSource(),l=e==="vertex"?Ln:Pn,c=this.constants.generateSource().concat(a.constants.generateSource());return`
${t.join(`
`)}

${l}

${c.join(`
`)}

${i.join(`
`)}

${r.join(`
`)}

${o.join(`
`)}

${n.join(`
`)}`}generateBind(e,t){const r=new Map;this.vertex.uniforms.entries.forEach(i=>{const n=i.bind[e];b(n)&&r.set(i.name,n)}),this.fragment.uniforms.entries.forEach(i=>{const n=i.bind[e];b(n)&&r.set(i.name,n)});const o=Array.from(r.values()),a=o.length;return(i,n,l)=>{for(let c=0;c<a;++c)o[c](t,i,n,l)}}},Po=class extends ga{constructor(){super(...arguments),this.uniforms=new class{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(e){if(k(e))va.error(`Trying to add null Uniform from ${new Error().stack}.`);else{if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new Nr(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}}generateSource(){return Array.from(this._entries.values()).map(e=>b(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},this.code=new class{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}},this.constants=new xa}get builder(){return this}},Mn=class{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return e==="fragment"?[]:this._entries.map(t=>`attribute ${t[1]} ${t[0]};`)}},On=class{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}},Or=class Pr{constructor(){this._entries=new Set}add(t){this._entries.add(t)}generateSource(t){const r=t==="vertex"?Pr.ALLOWLIST_VERTEX:Pr.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(o=>r.includes(o)).map(o=>`#extension ${o} : enable`)}};Or.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Or.ALLOWLIST_VERTEX=[];let xa=class X{constructor(){this._entries=new Set}add(t,r,o){let a="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":a=X._numberToFloatStr(o);break;case"int":a=X._numberToIntStr(o);break;case"bool":a=o.toString();break;case"vec2":a=`vec2(${X._numberToFloatStr(o[0])},                            ${X._numberToFloatStr(o[1])})`;break;case"vec3":a=`vec3(${X._numberToFloatStr(o[0])},                            ${X._numberToFloatStr(o[1])},                            ${X._numberToFloatStr(o[2])})`;break;case"vec4":a=`vec4(${X._numberToFloatStr(o[0])},                            ${X._numberToFloatStr(o[1])},                            ${X._numberToFloatStr(o[2])},                            ${X._numberToFloatStr(o[3])})`;break;case"ivec2":a=`ivec2(${X._numberToIntStr(o[0])},                             ${X._numberToIntStr(o[1])})`;break;case"ivec3":a=`ivec3(${X._numberToIntStr(o[0])},                             ${X._numberToIntStr(o[1])},                             ${X._numberToIntStr(o[2])})`;break;case"ivec4":a=`ivec4(${X._numberToIntStr(o[0])},                             ${X._numberToIntStr(o[1])},                             ${X._numberToIntStr(o[2])},                             ${X._numberToIntStr(o[3])})`;break;case"mat2":case"mat3":case"mat4":a=`${r}(${Array.prototype.map.call(o,i=>X._numberToFloatStr(i)).join(", ")})`}return this._entries.add(`const ${r} ${t} = ${a};`),this}static _numberToIntStr(t){return t.toFixed(0)}static _numberToFloatStr(t){return Number.isInteger(t)?t.toFixed(1):t.toString()}generateSource(){return Array.from(this._entries)}};const Pn=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,Ln=`precision highp float;
precision highp sampler2D;`,Hr="Size",sr="InvSize";function lt(e,t,r=!1,o=0){if(e.hasWebGL2Context){const a=s`vec2(textureSize(${t}, ${s.int(o)}))`;return r?"(1.0 / "+a+")":a}return r?t+sr:t+Hr}let we=class extends ne{constructor(e,t){super(e,"vec2",B.Pass,(r,o,a)=>r.setUniform2fv(e,t(o,a)))}};var re;(function(e){e[e.None=0]="None",e[e.Size=1]="Size",e[e.InvSize=2]="InvSize"})(re||(re={}));let me=class extends ne{constructor(e,t){super(e,"sampler2D",B.Pass,(r,o,a)=>r.bindTexture(e,t(o,a)))}};function Ye(e,t,r=re.None){const o=[new me(e,t)];if(r&re.Size){const a=e+Hr;o.push(new we(a,(i,n)=>{const l=t(i,n);return b(l)?Ge(Lo,l.descriptor.width,l.descriptor.height):Xt}))}if(r&re.InvSize){const a=e+sr;o.push(new we(a,(i,n)=>{const l=t(i,n);return b(l)?Ge(Lo,1/l.descriptor.width,1/l.descriptor.height):Xt}))}return o}const Lo=rr();let Tr,Ta=class extends nr{constructor(){super(...arguments),this.color=or(1,1,1,1)}};var Ke;Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Ta,build:function(){const e=new Lt;return e.include(Ur),e.fragment.uniforms.add([new me("tex",t=>t.texture),new ue("uColor",t=>t.color)]),e.fragment.code.add(s`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),e}},Symbol.toStringTag,{value:"Module"})),function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(Ke||(Ke={}));let xe=null,Gt=null;async function Ro(){return k(Gt)&&(Gt=function(){if(k(Tr)){const e=t=>di(`esri/libs/basisu/${t}`);Tr=Pt(()=>import("./basis_transcoder.40087899.js"),["js/basis_transcoder.40087899.js","js/_commonjsHelpers.2f3e7994.js"]).then(t=>t.b).then(({default:t})=>t({locateFile:e}).then(r=>(r.initializeBasis(),delete r.then,r)))}return Tr}(),xe=await Gt),Gt}function Eo(e,t,r,o,a){const i=hn(t?Le.COMPRESSED_RGBA8_ETC2_EAC:Le.COMPRESSED_RGB8_ETC2),n=a&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*o*i*n)}function Io(e){return e.getNumImages()>=1&&!e.isUASTC()}function No(e){return e.getFaces()>=1&&e.isETC1S()}function Do(e,t,r,o,a,i,n,l){const{compressedTextureETC:c,compressedTextureS3TC:d}=e.capabilities,[h,m]=c?o?[Ke.ETC2_RGBA,Le.COMPRESSED_RGBA8_ETC2_EAC]:[Ke.ETC1_RGB,Le.COMPRESSED_RGB8_ETC2]:d?o?[Ke.BC3_RGBA,Le.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Ke.BC1_RGB,Le.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Ke.RGBA32,qe.RGBA],x=t.hasMipmap?r:Math.min(1,r),p=[];for(let P=0;P<x;P++)p.push(new Uint8Array(n(P,h))),l(P,h,p[P]);const u=p.length>1,_=u?Qe.LINEAR_MIPMAP_LINEAR:Qe.LINEAR,L={...t,samplingMode:_,hasMipmap:u,internalFormat:m,width:a,height:i};return new ze(e,L,{type:"compressed",levels:p})}const gt=Ir.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Rn=542327876,En=131072,In=4;function $r(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const Nn=$r("DXT1"),Dn=$r("DXT3"),Fn=$r("DXT5"),zn=31,Vn=0,Bn=1,Gn=2,Un=3,Hn=4,$n=7,kn=20,Wn=21;function jn(e,t,r){const{textureData:o,internalFormat:a,width:i,height:n}=ui(function(l,c){const d=new Int32Array(l,0,zn);if(d[Vn]!==Rn)return gt.error("Invalid magic number in DDS header"),null;if(!(d[kn]&In))return gt.error("Unsupported format, must contain a FourCC code"),null;const h=d[Wn];let m,x;switch(h){case Nn:m=8,x=Le.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Dn:m=16,x=Le.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Fn:m=16,x=Le.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return gt.error("Unsupported FourCC code:",function(S){return String.fromCharCode(255&S,S>>8&255,S>>16&255,S>>24&255)}(h)),null}let p=1,u=d[Hn],_=d[Un];!(3&u)&&!(3&_)||(gt.warn("Rounding up compressed texture size to nearest multiple of 4."),u=u+3&-4,_=_+3&-4);const L=u,P=_;let C,v;d[Gn]&En&&c!==!1&&(p=Math.max(1,d[$n])),p===1||Kt(u)&&Kt(_)||(gt.warn("Ignoring mipmaps of non power of two sized compressed texture."),p=1);let A=d[Bn]+4;const w=[];for(let S=0;S<p;++S)v=(u+3>>2)*(_+3>>2)*m,C=new Uint8Array(l,A,v),w.push(C),A+=v,u=Math.max(1,u>>1),_=Math.max(1,_>>1);return{textureData:{type:"compressed",levels:w},internalFormat:x,width:L,height:P}}(r,t.hasMipmap??!1));return t.samplingMode=o.levels.length>1?Qe.LINEAR_MIPMAP_LINEAR:Qe.LINEAR,t.hasMipmap=o.levels.length>1,t.internalFormat=a,t.width=i,t.height=n,new ze(e,t,o)}const Rt=new Map([[f.POSITION,0],[f.NORMAL,1],[f.UV0,2],[f.COLOR,3],[f.SIZE,4],[f.TANGENT,4],[f.AUXPOS1,5],[f.SYMBOLCOLOR,5],[f.AUXPOS2,6],[f.FEATUREATTRIBUTE,6],[f.INSTANCEFEATUREATTRIBUTE,6],[f.INSTANCECOLOR,7],[f.OBJECTANDLAYERIDCOLOR,7],[f.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[f.MODEL,8],[f.MODELNORMAL,12],[f.MODELORIGINHI,11],[f.MODELORIGINLO,15]]);new be(f.POSITION,3,_e.FLOAT,0,12),new be(f.POSITION,3,_e.FLOAT,0,20),new be(f.UV0,2,_e.FLOAT,12,20),new be(f.POSITION,3,_e.FLOAT,0,32),new be(f.NORMAL,3,_e.FLOAT,12,32),new be(f.UV0,2,_e.FLOAT,24,32),new be(f.POSITION,3,_e.FLOAT,0,16),new be(f.COLOR,4,_e.UNSIGNED_BYTE,12,16);const qn=[new be(f.POSITION,2,_e.FLOAT,0,8)],Xn=[new be(f.POSITION,2,_e.FLOAT,0,16),new be(f.UV0,2,_e.FLOAT,8,16)];let Kn=class extends mn{},_a=class Wt extends Gr{constructor(t,r){super(),this._data=t,this.type=Re.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new hi,this._passParameters=new Ta,this.params=r||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:it.REPEAT,t:it.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||gr.STRETCH,this.estimatedTexMemRequired=Wt._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const t=this._data;k(t)||(t instanceof HTMLVideoElement?this._startPreloadVideoElement(t):t instanceof HTMLImageElement&&this._startPreloadImageElement(t))}_startPreloadVideoElement(t){if(!(uo(t.src)||t.preload==="auto"&&t.crossOrigin)){t.preload="auto",t.crossOrigin="anonymous";const r=!t.paused;if(t.src=t.src,r&&t.autoplay){const o=()=>{t.removeEventListener("canplay",o),t.play()};t.addEventListener("canplay",o)}}}_startPreloadImageElement(t){mi(t.src)||uo(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src)}static _getDataDimensions(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}static _estimateTexMemRequired(t,r){if(k(t))return 0;if(mt(t)||pt(t))return r.encoding===ft.KTX2_ENCODING?function(i,n){if(k(xe))return i.byteLength;const l=new xe.KTX2File(new Uint8Array(i)),c=No(l)?Eo(l.getLevels(),l.getHasAlpha(),l.getWidth(),l.getHeight(),n):0;return l.close(),l.delete(),c}(t,!!r.mipmap):r.encoding===ft.BASIS_ENCODING?function(i,n){if(k(xe))return i.byteLength;const l=new xe.BasisFile(new Uint8Array(i)),c=Io(l)?Eo(l.getNumLevels(0),l.getHasAlpha(),l.getImageWidth(0,0),l.getImageHeight(0,0),n):0;return l.close(),l.delete(),c}(t,!!r.mipmap):t.byteLength;const{width:o,height:a}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?Wt._getDataDimensions(t):r;return(r.mipmap?4/3:1)*o*a*(r.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(t){return{target:Co.TEXTURE_2D,pixelFormat:qe.RGBA,dataType:Mo.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?Qe.LINEAR_MIPMAP_LINEAR:Qe.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?t.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(t,r){if(b(this._glTexture))return this._glTexture;if(b(this._loadingPromise))return this._loadingPromise;const o=this._data;return k(o)?(this._glTexture=new ze(t,this._createDescriptor(t),null),this._glTexture):typeof o=="string"?this._loadFromURL(t,r,o):o instanceof Image?this._loadFromImageElement(t,r,o):o instanceof HTMLVideoElement?this._loadFromVideoElement(t,r,o):o instanceof ImageData||o instanceof HTMLCanvasElement?this._loadFromImage(t,o,r):(mt(o)||pt(o))&&this.params.encoding===ft.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(t,o)):(mt(o)||pt(o))&&this.params.encoding===ft.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(t,o)):(mt(o)||pt(o))&&this.params.encoding===ft.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(t,o)):pt(o)?this._loadFromPixelData(t,o):mt(o)?this._loadFromPixelData(t,new Uint8Array(o)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(t,r,o){if(!(this._data instanceof HTMLVideoElement)||k(this._glTexture)||this._data.readyState<bt.HAVE_CURRENT_DATA||o===this._data.currentTime)return o;if(b(this._powerOfTwoStretchInfo)){const{framebuffer:a,vao:i,sourceTexture:n}=this._powerOfTwoStretchInfo;n.setData(this._data),this._drawStretchedTexture(t,r,a,i,n,this._glTexture)}else{const{videoWidth:a,videoHeight:i}=this._data,{width:n,height:l}=this._glTexture.descriptor;a!==n||i!==l?this._glTexture.updateData(0,0,0,Math.min(a,n),Math.min(i,l),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(t,r){return this._glTexture=jn(t,this._createDescriptor(t),r),this._glTexture}_loadFromKTX2(t,r){return this._loadAsync(()=>async function(o,a,i){k(xe)&&(xe=await Ro());const n=new xe.KTX2File(new Uint8Array(i));if(!No(n))return null;n.startTranscoding();const l=Do(o,a,n.getLevels(),n.getHasAlpha(),n.getWidth(),n.getHeight(),(c,d)=>n.getImageTranscodedSizeInBytes(c,0,0,d),(c,d,h)=>n.transcodeImage(h,c,0,0,d,0,-1,-1));return n.close(),n.delete(),l}(t,this._createDescriptor(t),r).then(o=>(this._glTexture=o,o)))}_loadFromBasis(t,r){return this._loadAsync(()=>async function(o,a,i){k(xe)&&(xe=await Ro());const n=new xe.BasisFile(new Uint8Array(i));if(!Io(n))return null;n.startTranscoding();const l=Do(o,a,n.getNumLevels(0),n.getHasAlpha(),n.getImageWidth(0,0),n.getImageHeight(0,0),(c,d)=>n.getImageTranscodedSizeInBytes(0,c,d),(c,d,h)=>n.transcodeImage(h,0,c,d,0,0));return n.close(),n.delete(),l}(t,this._createDescriptor(t),r).then(o=>(this._glTexture=o,o)))}_loadFromPixelData(t,r){Z(this.params.width>0&&this.params.height>0);const o=this._createDescriptor(t);return o.pixelFormat=this.params.components===1?qe.LUMINANCE:this.params.components===3?qe.RGB:qe.RGBA,o.width=this.params.width,o.height=this.params.height,this._glTexture=new ze(t,o,r),this._glTexture}_loadFromURL(t,r,o){return this._loadAsync(async a=>{const i=await ua(o,{signal:a});return ho(a),this._loadFromImage(t,i,r)})}_loadFromImageElement(t,r,o){return o.complete?this._loadFromImage(t,o,r):this._loadAsync(async a=>{const i=await pi(o,o.src,!1,a);return ho(a),this._loadFromImage(t,i,r)})}_loadFromVideoElement(t,r,o){return o.readyState>=bt.HAVE_CURRENT_DATA?this._loadFromImage(t,o,r):this._loadFromVideoElementAsync(t,r,o)}_loadFromVideoElementAsync(t,r,o){return this._loadAsync(a=>new Promise((i,n)=>{const l=()=>{o.removeEventListener("loadeddata",c),o.removeEventListener("error",d),gi(h)},c=()=>{o.readyState>=bt.HAVE_CURRENT_DATA&&(l(),i(this._loadFromImage(t,o,r)))},d=m=>{l(),n(m||new Nr("Failed to load video"))};o.addEventListener("loadeddata",c),o.addEventListener("error",d);const h=fi(a,()=>d(vi()))}))}_loadFromImage(t,r,o){const a=Wt._getDataDimensions(r);this.params.width=a.width,this.params.height=a.height;const i=this._createDescriptor(t);return i.pixelFormat=this.params.components===3?qe.RGB:qe.RGBA,!this._requiresPowerOfTwo(t,i)||Kt(a.width)&&Kt(a.height)?(i.width=a.width,i.height=a.height,this._glTexture=new ze(t,i,r),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(t,r,a,i,o),this._glTexture)}_loadAsync(t){const r=new AbortController;this._loadingController=r;const o=t(r.signal);this._loadingPromise=o;const a=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===o&&(this._loadingPromise=null)};return o.then(a,a),o}_requiresPowerOfTwo(t,r){const o=it.CLAMP_TO_EDGE,a=typeof r.wrapMode=="number"?r.wrapMode===o:r.wrapMode.s===o&&r.wrapMode.t===o;return t.type===ia.WEBGL1&&(r.hasMipmap||!a)}_makePowerOfTwoTexture(t,r,o,a,i){const{width:n,height:l}=o,c=mo(n),d=mo(l);let h;switch(a.width=c,a.height=d,this.params.powerOfTwoResizeMode){case gr.PAD:a.textureCoordinateScaleFactor=[n/c,l/d],h=new ze(t,a),h.updateData(0,0,0,n,l,r);break;case gr.STRETCH:case null:case void 0:h=this._stretchToPowerOfTwo(t,r,a,i());break;default:tt(this.params.powerOfTwoResizeMode)}return a.hasMipmap&&h.generateMipmap(),h}_stretchToPowerOfTwo(t,r,o,a){const i=new ze(t,o),n=new fn(t,{colorTarget:cn.TEXTURE,depthStencilTarget:dn.NONE},i),l=new ze(t,{target:Co.TEXTURE_2D,pixelFormat:o.pixelFormat,dataType:Mo.UNSIGNED_BYTE,wrapMode:it.CLAMP_TO_EDGE,samplingMode:Qe.LINEAR,flipped:!!o.flipped,maxAnisotropy:8,preMultiplyAlpha:o.preMultiplyAlpha},r),c=function(h,m=qn,x=Rt,p=-1,u=1){let _=null;return _=m===Xn?new Float32Array([p,p,0,0,u,p,1,0,p,u,0,1,u,u,1,1]):new Float32Array([p,p,u,p,p,u,u,u]),new Kn(h,x,{geometry:m},{geometry:pn.createVertex(h,ln.STATIC_DRAW,_)})}(t),d=t.getBoundFramebufferObject();return this._drawStretchedTexture(t,a,n,c,l,i),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:c,sourceTexture:l,framebuffer:n}:(c.dispose(!0),l.dispose(),n.detachColorTexture(),n.dispose()),t.bindFramebuffer(d),i}_drawStretchedTexture(t,r,o,a,i,n){this._passParameters.texture=i,t.bindFramebuffer(o);const l=t.getViewport();t.setViewport(0,0,n.descriptor.width,n.descriptor.height),t.bindTechnique(r,this._passParameters,null),t.bindVAO(a),t.drawArrays(_t.TRIANGLE_STRIP,0,vn(a,"geometry")),t.bindFramebuffer(null),t.setViewport(l.x,l.y,l.width,l.height),this._passParameters.texture=null}unload(){if(b(this._powerOfTwoStretchInfo)){const{framebuffer:t,vao:r,sourceTexture:o}=this._powerOfTwoStretchInfo;r.dispose(!0),o.dispose(),t.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(b(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),b(this._loadingController)){const t=this._loadingController;this._loadingController=null,this._loadingPromise=null,t.abort()}this.events.emit("unloaded")}};var bt,N,he,se;function Qn(e,t){const r=e.fragment;switch(r.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case he.None:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case he.View:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case he.WindingOrder:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:tt(t.doubleSidedMode);case he.COUNT:}}function ct(e,t){switch(t.textureCoordinateType){case se.Default:return e.attributes.add(f.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case se.Compressed:return e.attributes.add(f.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case se.Atlas:return e.attributes.add(f.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(f.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:tt(t.textureCoordinateType);case se.None:return void e.vertex.code.add(s`void forwardTextureCoordinates() {}`);case se.COUNT:return}}function Yn(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(s`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function ba(e,t){switch(e.include(ct,t),e.fragment.code.add(s`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.textureCoordinateType){case se.Default:case se.Compressed:return void e.fragment.code.add(s`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case se.Atlas:return e.include(Yn),void e.fragment.code.add(s`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:tt(t.textureCoordinateType);case se.None:case se.COUNT:return}}(function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(bt||(bt={})),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.Highlight=6]="Highlight",e[e.Alpha=7]="Alpha",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.COUNT=9]="COUNT"}(N||(N={})),function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(he||(he={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(se||(se={}));let Se=class extends ne{constructor(e,t){super(e,"vec3",B.Draw,(r,o,a,i)=>r.setUniform3fv(e,t(o,a,i)))}},ae=class extends ne{constructor(e,t){super(e,"vec3",B.Pass,(r,o,a)=>r.setUniform3fv(e,t(o,a)))}},Lr=class extends ne{constructor(e,t){super(e,"vec2",B.Draw,(r,o,a,i)=>r.setUniform2fv(e,t(o,a,i)))}},wa=class extends ne{constructor(e,t){super(e,"sampler2D",B.Draw,(r,o,a)=>r.bindTexture(e,t(o,a)))}};function jt(e,t,r=re.None){const o=[new wa(e,t)];if(r&re.Size){const a=e+Hr;o.push(new Lr(a,(i,n)=>{const l=t(i,n);return b(l)?Ge(Fo,l.descriptor.width,l.descriptor.height):Xt}))}if(r&re.InvSize){const a=e+sr;o.push(new Lr(a,(i,n)=>{const l=t(i,n);return b(l)?Ge(Fo,1/l.descriptor.width,1/l.descriptor.height):Xt}))}return o}const Fo=rr();let Jn=class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return Mr.LOADED}},Zn=class extends Jn{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,t=>this._texture=t),this._acquire(e.normalTextureId,t=>this._textureNormal=t),this._acquire(e.emissiveTextureId,t=>this._textureEmissive=t),this._acquire(e.occlusionTextureId,t=>this._textureOcclusion=t),this._acquire(e.metallicRoughnessTextureId,t=>this._textureMetallicRoughness=t)}dispose(){this._texture=We(this._texture),this._textureNormal=We(this._textureNormal),this._textureEmissive=We(this._textureEmissive),this._textureOcclusion=We(this._textureOcclusion),this._textureMetallicRoughness=We(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?Mr.LOADED:Mr.LOADING}get textureBindParameters(){return new es(b(this._texture)?this._texture.glTexture:null,b(this._textureNormal)?this._textureNormal.glTexture:null,b(this._textureEmissive)?this._textureEmissive.glTexture:null,b(this._textureOcclusion)?this._textureOcclusion.glTexture:null,b(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){(k(this._texture)||e!==this._texture.id)&&(this._texture=We(this._texture),this._textureId=e,this._acquire(this._textureId,t=>this._texture=t))}_acquire(e,t){if(k(e))return void t(null);const r=this._textureRepository.acquire(e);if(xi(r))return++this._numLoading,void r.then(o=>{if(this._disposed)return We(o),void t(null);t(o)}).finally(()=>--this._numLoading);t(r)}},es=class extends nr{constructor(e=null,t=null,r=null,o=null,a=null){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=o,this.textureMetallicRoughness=a}};var F;function Sa(e,t){const r=e.fragment,o=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===F.Normal&&o&&e.include(ba,t),t.pbrMode!==F.Schematic)if(t.pbrMode!==F.Disabled){if(t.pbrMode===F.Normal){r.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`);const a=t.supportsTextureAtlas?t.hasWebGL2Context?re.None:re.Size:re.None,i=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(i===B.Pass?Ye("texMetallicRoughness",n=>n.textureMetallicRoughness,a):jt("texMetallicRoughness",n=>n.textureMetallicRoughness,a)),r.code.add(s`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(i===B.Pass?Ye("texEmission",n=>n.textureEmissive,a):jt("texEmission",n=>n.textureEmissive,a)),r.code.add(s`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(i===B.Pass?Ye("texOcclusion",n=>n.textureOcclusion,a):jt("texOcclusion",n=>n.textureOcclusion,a)),r.code.add(s`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(i===B.Pass?[new ae("emissionFactor",n=>n.emissiveFactor),new ae("mrrFactors",n=>n.mrrFactors)]:[new Se("emissionFactor",n=>n.emissiveFactor),new Se("mrrFactors",n=>n.mrrFactors)]),r.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${o?s`vtc.uv = vuv0;`:""}
      ${t.hasMetallicRoughnessTextureTransform?s`vtc.uv = metallicRoughnessUV;`:""}
      ${t.hasMetallicRoughnessTexture?t.supportsTextureAtlas?s`
                vtc.size = ${lt(t,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:s`applyMetallnessAndRoughness(vtc);`:""}
      ${t.hasEmissiveTextureTransform?s`vtc.uv = emissiveUV;`:""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?s`
                vtc.size = ${lt(t,"texEmission")};
                applyEmission(vtc);`:s`applyEmission(vtc);`:""}
      ${t.hasOcclusionTextureTransform?s`vtc.uv = occlusionUV;`:""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?s`
                vtc.size = ${lt(t,"texOcclusion")};
                applyOcclusion(vtc);`:s`applyOcclusion(vtc);`:""}
    }
  `)}}else r.code.add(s`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function ts(e,t,r){const o=r.parameters,a=r.paddingPixelsOverride;return xt.scale=Math.min(o.divisor/(t-o.offset),1),xt.factor=function(i){return Math.abs(i*i*i)}(e),xt.minPixelSize=o.minPixelSize,xt.paddingPixels=a,xt}function rs(e,t,r,o){return function(a,i){return Math.max(Ti(a*i.scale,a,i.factor),function(n,l){return n===0?l.minPixelSize:l.minPixelSize*(1+2*l.paddingPixels/n)}(a,i))}(e,ts(t,r,o))}xn(0,.6,.2),function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Terrain=5]="Terrain",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(F||(F={}));const xt={scale:0,factor:0,minPixelSize:0,paddingPixels:0},Ut=_i();function os(e,t,r,o,a,i){if(e.visible)if(e.boundingInfo){Z(e.type===Re.Mesh);const n=t.tolerance;ya(e.boundingInfo,r,o,n,a,i)}else{const n=e.indices.get(f.POSITION),l=e.vertexAttributes.get(f.POSITION);Aa(r,o,0,n.length/3,n,l,void 0,a,i)}}const as=z();function ya(e,t,r,o,a,i){if(k(e))return;const n=function(l,c,d){return ee(d,1/(c[0]-l[0]),1/(c[1]-l[1]),1/(c[2]-l[2]))}(t,r,as);if(bi(Ut,e.bbMin),wi(Ut,e.bbMax),b(a)&&a.applyToAabb(Ut),function(l,c,d,h){return function(m,x,p,u,_){const L=(m[0]-u-x[0])*p[0],P=(m[3]+u-x[0])*p[0];let C=Math.min(L,P),v=Math.max(L,P);const A=(m[1]-u-x[1])*p[1],w=(m[4]+u-x[1])*p[1];if(v=Math.min(v,Math.max(A,w)),v<0||(C=Math.max(C,Math.min(A,w)),C>v))return!1;const S=(m[2]-u-x[2])*p[2],R=(m[5]+u-x[2])*p[2];return v=Math.min(v,Math.max(S,R)),!(v<0)&&(C=Math.max(C,Math.min(S,R)),!(C>v)&&C<_)}(l,c,d,h,1/0)}(Ut,t,n,o)){const{primitiveIndices:l,indices:c,position:d}=e,h=l?l.length:c.length/3;if(h>ss){const m=e.getChildren();if(m!==void 0){for(const x of m)ya(x,t,r,o,a,i);return}}Aa(t,r,0,h,c,d,l,a,i)}}const zo=z();function Aa(e,t,r,o,a,i,n,l,c){if(n)return function(P,C,v,A,w,S,R,E,y){const{data:T,stride:g}=S,D=P[0],G=P[1],W=P[2],U=C[0]-D,V=C[1]-G,oe=C[2]-W;for(let K=v;K<A;++K){const ce=R[K];let ge=3*ce,ie=g*w[ge++],j=T[ie++],Q=T[ie++],de=T[ie];ie=g*w[ge++];let H=T[ie++],$=T[ie++],Y=T[ie];ie=g*w[ge];let Ie=T[ie++],Ae=T[ie++],Ne=T[ie];b(E)&&([j,Q,de]=E.applyToVertex(j,Q,de,K),[H,$,Y]=E.applyToVertex(H,$,Y,K),[Ie,Ae,Ne]=E.applyToVertex(Ie,Ae,Ne,K));const ke=H-j,It=$-Q,Nt=Y-de,Dt=Ie-j,Ft=Ae-Q,zt=Ne-de,ro=V*zt-Ft*oe,oo=oe*Dt-zt*U,ao=U*Ft-Dt*V,De=ke*ro+It*oo+Nt*ao;if(Math.abs(De)<=Number.EPSILON)continue;const hr=D-j,mr=G-Q,pr=W-de,rt=hr*ro+mr*oo+pr*ao;if(De>0){if(rt<0||rt>De)continue}else if(rt>0||rt<De)continue;const io=mr*Nt-It*pr,no=pr*ke-Nt*hr,so=hr*It-ke*mr,Vt=U*io+V*no+oe*so;if(De>0){if(Vt<0||rt+Vt>De)continue}else if(Vt>0||rt+Vt<De)continue;const lo=(Dt*io+Ft*no+zt*so)/De;lo>=0&&y(lo,Go(ke,It,Nt,Dt,Ft,zt,zo),ce,!1)}}(e,t,r,o,a,i,n,l,c);const{data:d,stride:h}=i,m=e[0],x=e[1],p=e[2],u=t[0]-m,_=t[1]-x,L=t[2]-p;for(let P=r,C=3*r;P<o;++P){let v=h*a[C++],A=d[v++],w=d[v++],S=d[v];v=h*a[C++];let R=d[v++],E=d[v++],y=d[v];v=h*a[C++];let T=d[v++],g=d[v++],D=d[v];b(l)&&([A,w,S]=l.applyToVertex(A,w,S,P),[R,E,y]=l.applyToVertex(R,E,y,P),[T,g,D]=l.applyToVertex(T,g,D,P));const G=R-A,W=E-w,U=y-S,V=T-A,oe=g-w,K=D-S,ce=_*K-oe*L,ge=L*V-K*u,ie=u*oe-V*_,j=G*ce+W*ge+U*ie;if(Math.abs(j)<=Number.EPSILON)continue;const Q=m-A,de=x-w,H=p-S,$=Q*ce+de*ge+H*ie;if(j>0){if($<0||$>j)continue}else if($>0||$<j)continue;const Y=de*U-W*H,Ie=H*G-U*Q,Ae=Q*W-G*de,Ne=u*Y+_*Ie+L*Ae;if(j>0){if(Ne<0||$+Ne>j)continue}else if(Ne>0||$+Ne<j)continue;const ke=(V*Y+oe*Ie+K*Ae)/j;ke>=0&&c(ke,Go(G,W,U,V,oe,K,zo),P,!1)}}const Vo=z(),Bo=z();function Go(e,t,r,o,a,i,n){return ee(Vo,e,t,r),ee(Bo,o,a,i),aa(n,Vo,Bo),Dr(n,n),n}function Ca(e,t){const r=t?Ca(t):{};for(const o in e){let a=e[o];a&&a.forEach&&(a=is(a)),a==null&&o in r||(r[o]=a)}return r}function is(e){const t=[];return e.forEach(r=>t.push(r)),t}const ns={multiply:1,ignore:2,replace:3,tint:4},ss=1e3;let ls=class extends Gr{constructor(e,t){super(),this.type=Re.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Rt,this._pp0=Ve(0,0,1),this._pp1=Ve(0,0,0),this._parameters=Ca(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(function(r,o){let a=!1;for(const i in o){const n=o[i];n!==void 0&&(Array.isArray(n)?r[i]===null?(r[i]=n.slice(),a=!0):yi(r[i],n)&&(a=!0):r[i]!==n&&(a=!0,r[i]=n))}return a})(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){b(this.repository)&&this.repository.materialChanged(this)}intersectDraped(e,t,r,o,a,i){return this._pp0[0]=this._pp1[0]=o[0],this._pp0[1]=this._pp1[1]=o[1],this.intersect(e,t,r,this._pp0,this._pp1,a)}};var Rr,nt;(function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"})(Rr||(Rr={})),function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",e[e.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",e[e.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=12]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=14]="HUD_MATERIAL",e[e.LABEL_MATERIAL=15]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=16]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",e[e.DRAPED_WATER=19]="DRAPED_WATER",e[e.VOXEL=20]="VOXEL",e[e.MAX_SLOTS=21]="MAX_SLOTS"}(nt||(nt={}));const Uo=new class{constructor(e=0){this.offset=e,this.sphere=ha(),this.tmpVertex=z()}applyToVertex(e,t,r){const o=this.objectTransform.transform;let a=o[0]*e+o[4]*t+o[8]*r+o[12],i=o[1]*e+o[5]*t+o[9]*r+o[13],n=o[2]*e+o[6]*t+o[10]*r+o[14];const l=this.offset/Math.sqrt(a*a+i*i+n*n);a+=a*l,i+=i*l,n+=n*l;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*a+c[4]*i+c[8]*n+c[12],this.tmpVertex[1]=c[1]*a+c[5]*i+c[9]*n+c[13],this.tmpVertex[2]=c[2]*a+c[6]*i+c[10]*n+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const o=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*o,t[1]+=t[1]*o,t[2]+=t[2]*o}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=z(),this._mbs=ha(),this._obb={center:z(),halfSize:Tn(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const o=e,a=t,i=r+this.componentLocalOriginLength,n=this._totalOffset/Math.sqrt(o*o+a*a+i*i);return this._tmpVertex[0]=e+o*n,this._tmpVertex[1]=t+a*n,this._tmpVertex[2]=r+i*n,this._tmpVertex}applyToAabb(e){const t=e[0],r=e[1],o=e[2]+this.componentLocalOriginLength,a=e[3],i=e[4],n=e[5]+this.componentLocalOriginLength,l=t*a<0?0:Math.min(Math.abs(t),Math.abs(a)),c=r*i<0?0:Math.min(Math.abs(r),Math.abs(i)),d=o*n<0?0:Math.min(Math.abs(o),Math.abs(n)),h=Math.sqrt(l*l+c*c+d*d);if(h<this._totalOffset)return e[0]-=t<0?this._totalOffset:0,e[1]-=r<0?this._totalOffset:0,e[2]-=o<0?this._totalOffset:0,e[3]+=a>0?this._totalOffset:0,e[4]+=i>0?this._totalOffset:0,e[5]+=n>0?this._totalOffset:0,e;const m=Math.max(Math.abs(t),Math.abs(a)),x=Math.max(Math.abs(r),Math.abs(i)),p=Math.max(Math.abs(o),Math.abs(n)),u=Math.sqrt(m*m+x*x+p*p),_=this._totalOffset/u,L=this._totalOffset/h;return e[0]+=t*(t>0?_:L),e[1]+=r*(r>0?_:L),e[2]+=o*(o>0?_:L),e[3]+=a*(a<0?_:L),e[4]+=i*(i<0?_:L),e[5]+=n*(n<0?_:L),e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this._totalOffset/t;return this._mbs[0]=e[0]+e[0]*r,this._mbs[1]=e[1]+e[1]*r,this._mbs[2]=e[2]+e[2]*r,this._mbs[3]=e[3]+e[3]*this._totalOffset/t,this._mbs}applyToObb(e){const t=e.center,r=this._totalOffset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this._obb.center[0]=t[0]+t[0]*r,this._obb.center[1]=t[1]+t[1]*r,this._obb.center[2]=t[2]+t[2]*r,po(this._obb.halfSize,e.halfSize,e.quaternion),Te(this._obb.halfSize,this._obb.halfSize,e.center);const o=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*o,this._obb.halfSize[1]+=this._obb.halfSize[1]*o,this._obb.halfSize[2]+=this._obb.halfSize[2]*o,Ee(this._obb.halfSize,this._obb.halfSize,e.center),_n(Ho,e.quaternion),po(this._obb.halfSize,this._obb.halfSize,Ho),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}};const Ho=bn();function cs(e,t,r,o){const a=r.typedBuffer,i=r.typedBufferStride,n=e.length;o*=i;for(let l=0;l<n;++l){const c=2*e[l];a[o]=t[c],a[o+1]=t[c+1],o+=i}}function Ma(e,t,r,o,a){const i=r.typedBuffer,n=r.typedBufferStride,l=e.length;if(o*=n,a==null||a===1)for(let c=0;c<l;++c){const d=3*e[c];i[o]=t[d],i[o+1]=t[d+1],i[o+2]=t[d+2],o+=n}else for(let c=0;c<l;++c){const d=3*e[c];for(let h=0;h<a;++h)i[o]=t[d],i[o+1]=t[d+1],i[o+2]=t[d+2],o+=n}}function Oa(e,t,r,o,a=1){const i=r.typedBuffer,n=r.typedBufferStride,l=e.length;if(o*=n,a===1)for(let c=0;c<l;++c){const d=4*e[c];i[o]=t[d],i[o+1]=t[d+1],i[o+2]=t[d+2],i[o+3]=t[d+3],o+=n}else for(let c=0;c<l;++c){const d=4*e[c];for(let h=0;h<a;++h)i[o]=t[d],i[o+1]=t[d+1],i[o+2]=t[d+2],i[o+3]=t[d+3],o+=n}}function ds(e,t,r,o,a,i=1){if(!r)return void Ma(e,t,o,a,i);const n=o.typedBuffer,l=o.typedBufferStride,c=e.length,d=r[0],h=r[1],m=r[2],x=r[4],p=r[5],u=r[6],_=r[8],L=r[9],P=r[10],C=r[12],v=r[13],A=r[14];a*=l;let w=0,S=0,R=0;const E=na(r)?y=>{w=t[y]+C,S=t[y+1]+v,R=t[y+2]+A}:y=>{const T=t[y],g=t[y+1],D=t[y+2];w=d*T+x*g+_*D+C,S=h*T+p*g+L*D+v,R=m*T+u*g+P*D+A};if(i===1)for(let y=0;y<c;++y)E(3*e[y]),n[a]=w,n[a+1]=S,n[a+2]=R,a+=l;else for(let y=0;y<c;++y){E(3*e[y]);for(let T=0;T<i;++T)n[a]=w,n[a+1]=S,n[a+2]=R,a+=l}}function us(e,t,r,o,a,i=1){if(!r)return void Ma(e,t,o,a,i);const n=r,l=o.typedBuffer,c=o.typedBufferStride,d=e.length,h=n[0],m=n[1],x=n[2],p=n[4],u=n[5],_=n[6],L=n[8],P=n[9],C=n[10],v=!sa(n),A=1e-6,w=1-A;a*=c;let S=0,R=0,E=0;const y=na(n)?T=>{S=t[T],R=t[T+1],E=t[T+2]}:T=>{const g=t[T],D=t[T+1],G=t[T+2];S=h*g+p*D+L*G,R=m*g+u*D+P*G,E=x*g+_*D+C*G};if(i===1)if(v)for(let T=0;T<d;++T){y(3*e[T]);const g=S*S+R*R+E*E;if(g<w&&g>A){const D=1/Math.sqrt(g);l[a]=S*D,l[a+1]=R*D,l[a+2]=E*D}else l[a]=S,l[a+1]=R,l[a+2]=E;a+=c}else for(let T=0;T<d;++T)y(3*e[T]),l[a]=S,l[a+1]=R,l[a+2]=E,a+=c;else for(let T=0;T<d;++T){if(y(3*e[T]),v){const g=S*S+R*R+E*E;if(g<w&&g>A){const D=1/Math.sqrt(g);S*=D,R*=D,E*=D}}for(let g=0;g<i;++g)l[a]=S,l[a+1]=R,l[a+2]=E,a+=c}}function hs(e,t,r,o,a,i=1){if(!r)return void Oa(e,t,o,a,i);const n=r,l=o.typedBuffer,c=o.typedBufferStride,d=e.length,h=n[0],m=n[1],x=n[2],p=n[4],u=n[5],_=n[6],L=n[8],P=n[9],C=n[10],v=!sa(n),A=1e-6,w=1-A;if(a*=c,i===1)for(let S=0;S<d;++S){const R=4*e[S],E=t[R],y=t[R+1],T=t[R+2],g=t[R+3];let D=h*E+p*y+L*T,G=m*E+u*y+P*T,W=x*E+_*y+C*T;if(v){const U=D*D+G*G+W*W;if(U<w&&U>A){const V=1/Math.sqrt(U);D*=V,G*=V,W*=V}}l[a]=D,l[a+1]=G,l[a+2]=W,l[a+3]=g,a+=c}else for(let S=0;S<d;++S){const R=4*e[S],E=t[R],y=t[R+1],T=t[R+2],g=t[R+3];let D=h*E+p*y+L*T,G=m*E+u*y+P*T,W=x*E+_*y+C*T;if(v){const U=D*D+G*G+W*W;if(U<w&&U>A){const V=1/Math.sqrt(U);D*=V,G*=V,W*=V}}for(let U=0;U<i;++U)l[a]=D,l[a+1]=G,l[a+2]=W,l[a+3]=g,a+=c}}function ms(e,t,r,o,a,i=1){const n=o.typedBuffer,l=o.typedBufferStride,c=e.length;if(a*=l,r!==t.length||r!==4)if(i!==1)if(r!==4)for(let d=0;d<c;++d){const h=3*e[d];for(let m=0;m<i;++m)n[a]=t[h],n[a+1]=t[h+1],n[a+2]=t[h+2],n[a+3]=255,a+=l}else for(let d=0;d<c;++d){const h=4*e[d];for(let m=0;m<i;++m)n[a]=t[h],n[a+1]=t[h+1],n[a+2]=t[h+2],n[a+3]=t[h+3],a+=l}else{if(r===4){for(let d=0;d<c;++d){const h=4*e[d];n[a]=t[h],n[a+1]=t[h+1],n[a+2]=t[h+2],n[a+3]=t[h+3],a+=l}return}for(let d=0;d<c;++d){const h=3*e[d];n[a]=t[h],n[a+1]=t[h+1],n[a+2]=t[h+2],n[a+3]=255,a+=l}}else{n[a]=t[0],n[a+1]=t[1],n[a+2]=t[2],n[a+3]=t[3];const d=new Uint32Array(o.typedBuffer.buffer,o.start),h=l/4,m=d[a/=4];a+=h;const x=c*i;for(let p=1;p<x;++p)d[a]=m,a+=h}}function ps(e,t,r,o,a=1){const i=t.typedBuffer,n=t.typedBufferStride;if(o*=n,a===1)for(let l=0;l<r;++l)i[o]=e[0],i[o+1]=e[1],i[o+2]=e[2],i[o+3]=e[3],o+=n;else for(let l=0;l<r;++l)for(let c=0;c<a;++c)i[o]=e[0],i[o+1]=e[1],i[o+2]=e[2],i[o+3]=e[3],o+=n}function fs(e){const t=s`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.vertex.code.add(t)}function lr(e,t){switch(t.normalType){case q.CompressedAttribute:e.include(fs),e.attributes.add(f.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(s`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`);break;case q.Attribute:e.attributes.add(f.NORMAL,"vec3"),e.vertex.code.add(s`vec3 normalModel() {
return normal;
}`);break;case q.ScreenDerivative:e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(s`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:tt(t.normalType);case q.COUNT:case q.Ground:}}var q;function kr(e){e.attributes.add(f.POSITION,"vec3"),e.vertex.code.add(s`vec3 positionModel() { return position; }`)}function Pa({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}(function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"})(q||(q={}));let La=class extends ne{constructor(e,t){super(e,"mat3",B.Draw,(r,o,a)=>r.setUniformMatrix3fv(e,t(o,a)))}},$e=class extends ne{constructor(e,t){super(e,"mat3",B.Pass,(r,o,a)=>r.setUniformMatrix3fv(e,t(o,a)))}},Je=class extends ne{constructor(e,t){super(e,"mat4",B.Pass,(r,o,a)=>r.setUniformMatrix4fv(e,t(o,a)))}};function Ra(e,t){e.include(kr);const r=e.vertex;r.include(Pa,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add([new ae("transformWorldFromViewTH",o=>o.transformWorldFromViewTH),new ae("transformWorldFromViewTL",o=>o.transformWorldFromViewTL),new $e("transformViewFromCameraRelativeRS",o=>o.transformViewFromCameraRelativeRS),new Je("transformProjFromView",o=>o.transformProjFromView),new La("transformWorldFromModelRS",o=>o.transformWorldFromModelRS),new Se("transformWorldFromModelTH",o=>o.transformWorldFromModelTH),new Se("transformWorldFromModelTL",o=>o.transformWorldFromModelTL)]),r.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new ae("transformWorldFromViewTL",o=>o.transformWorldFromViewTL)),r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let vs=class extends nr{constructor(){super(...arguments),this.transformWorldFromViewTH=z(),this.transformWorldFromViewTL=z(),this.transformViewFromCameraRelativeRS=ir(),this.transformProjFromView=zr()}};function Ea(e,t){switch(t.normalType){case q.Attribute:case q.CompressedAttribute:e.include(lr,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add([new La("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new $e("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)]),e.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case q.Ground:e.include(Ra,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?s`normalize(vPositionWorldCameraRelative);`:s`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case q.ScreenDerivative:e.vertex.code.add(s`void forwardNormal() {}`);break;default:tt(t.normalType);case q.COUNT:}}let gs=class extends vs{constructor(){super(...arguments),this.transformNormalViewFromGlobal=ir()}};const Wr=.001;let cr=class{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},jr=class{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=fo(this._program),this._pipeline=this._configuration=null}reload(e){fo(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,t=null,r){e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return _t.TRIANGLES}getPipelineState(e,t){return this._pipeline}initializeConfiguration(e,t){}},qr=class{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new ra({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBind(B.Pass,this),this.bindDraw=t.generateBind(B.Draw,this),this._fragmentUniforms=un()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations,this._locations}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(k(t)||t.glName==null){const o=this._textures.get(e);return o&&(this._context.bindTexture(null,o.unit),this._freeTextureUnit(o),this._textures.delete(e)),null}let r=this._textures.get(e);return r==null?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)}),b(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}};He.LESS,He.ALWAYS;const xs={mask:255},Ts={function:{func:He.ALWAYS,ref:Be.OutlineVisualElementMask,mask:Be.OutlineVisualElementMask},operation:{fail:ve.KEEP,zFail:ve.KEEP,zPass:ve.ZERO}},_s={function:{func:He.ALWAYS,ref:Be.OutlineVisualElementMask,mask:Be.OutlineVisualElementMask},operation:{fail:ve.KEEP,zFail:ve.KEEP,zPass:ve.REPLACE}};function $o(e){e.varyings.add("linearDepth","float")}function Ia(e){e.vertex.uniforms.add(new we("nearFar",(t,r)=>r.camera.nearFar))}function Na(e){e.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Da(e,t){const{vertex:r}=e;switch(t.output){case N.Color:if(t.receiveShadows)return $o(e),void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case N.Depth:case N.Shadow:case N.ShadowHighlight:case N.ShadowExcludeHighlight:return e.include(Ra,t),$o(e),Ia(e),Na(e),void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(s`void forwardLinearDepth() {}`)}function Fa(e){e.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Ze(e,t){(function(r,o,a){if(!o.hasSlicePlane){const c=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return o.hasSliceInVertexProgram&&r.vertex.code.add(c),void r.fragment.code.add(c)}r.extensions.add("GL_OES_standard_derivatives"),o.hasSliceInVertexProgram&&r.vertex.uniforms.add(a),r.fragment.uniforms.add(a);const i=s`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,n=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,l=o.hasSliceHighlight?s`
        ${n}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;o.hasSliceInVertexProgram&&r.vertex.code.add(i),r.fragment.code.add(i),r.fragment.code.add(l)})(e,t,[new Se("slicePlaneOrigin",(r,o)=>function(a,i,n){if(k(n.slicePlane))return Fr;const l=za(a,i,n),c=Va(l,n.slicePlane),d=Ba(a,l,n);return b(d)?dt(Zt,c,d):c}(t,r,o)),new Se("slicePlaneBasis1",(r,o)=>{var a;return ko(t,r,o,(a=At(o.slicePlane))==null?void 0:a.basis1)}),new Se("slicePlaneBasis2",(r,o)=>{var a;return ko(t,r,o,(a=At(o.slicePlane))==null?void 0:a.basis2)})])}function za(e,t,r){return e.instancedDoublePrecision?ee(bs,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function Va(e,t){return b(e)?Ee(Zt,t.origin,e):t.origin}function Ba(e,t,r){return e.hasSliceTranslatedView?b(t)?Ar(ws,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function ko(e,t,r,o){if(k(o)||k(r.slicePlane))return Fr;const a=za(e,t,r),i=Va(a,r.slicePlane),n=Ba(e,a,r);return b(n)?(Te(Tt,o,i),dt(Zt,i,n),dt(Tt,Tt,n),Ee(Tt,Tt,Zt)):o}He.EQUAL,Be.OutlineVisualElementMask,Be.OutlineVisualElementMask,ve.KEEP,ve.KEEP,ve.KEEP,He.NOTEQUAL,Be.OutlineVisualElementMask,Be.OutlineVisualElementMask,ve.KEEP,ve.KEEP,ve.KEEP;const bs=z(),Zt=z(),Tt=z(),ws=zr();function wt(e,t){if(Na(e),t.hasModelTransformation)return e.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void e.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);e.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}let Ss=class extends ne{constructor(e,t){super(e,"mat4",B.Draw,(r,o,a)=>r.setUniformMatrix4fv(e,t(o,a)))}};function Mt(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",Fr):e.uniforms.add(new Se("cameraPosition",(r,o)=>ee(Ga,o.camera.viewInverseTransposeMatrix[3]-r.origin[0],o.camera.viewInverseTransposeMatrix[7]-r.origin[1],o.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function St(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add([new Je("proj",(o,a)=>a.camera.projectionMatrix),new Ss("view",(o,a)=>Ar(Wo,a.camera.viewMatrix,o.origin)),new Se("localOrigin",o=>o.origin)]);const r=o=>ee(Ga,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]);e.uniforms.add([new Je("proj",(o,a)=>a.camera.projectionMatrix),new Je("view",(o,a)=>Ar(Wo,a.camera.viewMatrix,r(a))),new ae("localOrigin",(o,a)=>r(a))])}const Wo=Ai(),Ga=z();let Ua=class extends nr{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}};function O(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),e.constValue!=null)Object.defineProperty(t,r,{get:()=>e.constValue});else{const o=t._parameterNames.length-1,a=e.count||2,i=Math.ceil(Math.log2(a)),n=t._parameterBits??[0];let l=0;for(;n[l]+i>16;)l++,l>=n.length&&n.push(0);t._parameterBits=n;const c=n[l],d=(1<<i)-1<<c;n[l]+=i,Object.defineProperty(t,r,{get(){return this[o]},set(h){if(this[o]!==h&&(this[o]=h,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~d|+h<<c&d,typeof h!="number"&&typeof h!="boolean"))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof h)}})}}}function Ha(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(f.MODELORIGINHI,"vec3"),e.attributes.add(f.MODELORIGINLO,"vec3"),e.attributes.add(f.MODEL,"mat3"),e.attributes.add(f.MODELNORMAL,"mat3"));const r=e.vertex;t.instancedDoublePrecision&&(r.include(Pa,t),r.uniforms.add(new Se("viewOriginHi",(o,a)=>wn(ee(Ht,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]),Ht))),r.uniforms.add(new Se("viewOriginLo",(o,a)=>Sn(ee(Ht,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]),Ht)))),r.code.add(s`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),r.code.add(s`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?s`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===N.Normal&&(function(o){o.uniforms.add(new Je("viewNormal",(a,i)=>i.camera.viewInverseTransposeMatrix))}(r),r.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&r.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}M([O()],class extends Ua{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}.prototype,"instancedDoublePrecision",void 0);const Ht=z();function ys(e){e.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(Pe.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(Pe.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(Pe.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(Pe.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}let $a=class extends ne{constructor(e,t){super(e,"int",B.Pass,(r,o,a)=>r.setUniform1i(e,t(o,a)))}};function ka(e,t){t.hasSymbolColors?(e.include(ys),e.attributes.add(f.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new $a("colorMixMode",r=>ns[r.colorMixMode])),e.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Wa(e,t){t.hasVertexColors?(e.attributes.add(f.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function As(e){e.vertex.code.add(s`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(s`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Cs(e){e.uniforms.add(new ue("screenSizePerspectiveAlignment",t=>function(r){return pe(Ms,r.parameters.divisor,r.parameters.offset,r.parameters.minPixelSize,r.paddingPixelsOverride)}(t.screenSizePerspectiveAlignment||t.screenSizePerspective)))}const Ms=ar();function ja(e,t){const r=e.vertex;t.hasVerticalOffset?(function(o){o.uniforms.add(new ue("verticalOffset",(a,i)=>{const{minWorldLength:n,maxWorldLength:l,screenLength:c}=a.verticalOffset,d=Math.tan(.5*i.camera.fovY)/(.5*i.camera.fullViewport[3]),h=i.camera.pixelRatio||1;return pe(Os,c*h,d,n,l)}))}(r),t.hasScreenSizePerspective&&(e.include(As),Cs(r),Mt(e.vertex,t)),r.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Os=ar();function Ps(e,t){const r=t.output===N.ObjectAndLayerIdColor,o=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),o?e.attributes.add(f.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):e.attributes.add(f.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(s`
     void forwardObjectAndLayerIdColor() {
      ${r?o?s`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:s`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:s``} }`),e.fragment.code.add(s`
      void outputObjectAndLayerIdColor() {
        ${r?s`gl_FragColor = objectAndLayerIdColorVarying;`:s``} }`)}function Xr(e){e.code.add(s`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Ls(e,t){switch(e.fragment.include(Xr),t.output){case N.Shadow:case N.ShadowHighlight:case N.ShadowExcludeHighlight:e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case N.Depth:e.fragment.code.add(s`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}}const Rs=or(1,1,0,1),Es=or(1,0,1,1);function Is(e,t){e.fragment.uniforms.add(Ye("depthTex",(r,o)=>o.highlightDepthTexture,t.hasWebGL2Context?re.None:re.InvSize)),e.fragment.constants.add("occludedHighlightFlag","vec4",Rs).add("unoccludedHighlightFlag","vec4",Es),e.fragment.code.add(s`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${function(r,o,a,i=null,n=0){if(r.hasWebGL2Context)return s`texelFetch(${o}, ivec2(${a}), ${s.int(n)})`;let l=s`texture2D(${o}, ${a} * `;return l+=i?s`(${i}))`:s`${o+sr})`,l}(t,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}let Ns=class extends ne{constructor(e,t,r){super(e,"vec4",B.Pass,(o,a,i)=>o.setUniform4fv(e,t(a,i)),r)}},Ds=class extends ne{constructor(e,t,r){super(e,"float",B.Pass,(o,a,i)=>o.setUniform1fv(e,t(a,i)),r)}};const _r=8;function yt(e,t){t.hasVvInstancing&&(t.vvSize||t.vvColor)&&e.attributes.add(f.INSTANCEFEATUREATTRIBUTE,"vec4");const r=e.vertex;t.vvSize?(r.uniforms.add(new ae("vvSizeMinSize",o=>o.vvSizeMinSize)),r.uniforms.add(new ae("vvSizeMaxSize",o=>o.vvSizeMaxSize)),r.uniforms.add(new ae("vvSizeOffset",o=>o.vvSizeOffset)),r.uniforms.add(new ae("vvSizeFactor",o=>o.vvSizeFactor)),r.uniforms.add(new $e("vvSymbolRotationMatrix",o=>o.vvSymbolRotationMatrix)),r.uniforms.add(new ae("vvSymbolAnchor",o=>o.vvSymbolAnchor)),r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",_r),t.hasVvInstancing&&r.uniforms.add([new Ds("vvColorValues",o=>o.vvColorValues,_r),new Ns("vvColorColors",o=>o.vvColorColors,_r)]),r.code.add(s`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.hasVvInstancing?s`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):r.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}function Fs(e){e.fragment.code.add(s`
    #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(Wr)}) { discard; } }
  `)}let le=class extends ne{constructor(e,t){super(e,"float",B.Pass,(r,o,a)=>r.setUniform1f(e,t(o,a)))}};function et(e,t){(function(r,o,a){const i=r.fragment;switch(o.alphaDiscardMode!==te.Mask&&o.alphaDiscardMode!==te.MaskBlend||i.uniforms.add(a),o.alphaDiscardMode){case te.Blend:return r.include(Fs);case te.Opaque:i.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case te.Mask:i.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case te.MaskBlend:r.fragment.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}})(e,t,new le("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function qa(e,t){const{vertex:r,fragment:o}=e,a=t.hasModelTransformation;a&&r.uniforms.add(new Je("model",n=>b(n.modelTransformation)?n.modelTransformation:Yt));const i=t.hasColorTexture&&t.alphaDiscardMode!==te.Opaque;switch(t.output){case N.Depth:case N.Shadow:case N.ShadowHighlight:case N.ShadowExcludeHighlight:case N.ObjectAndLayerIdColor:St(r,t),e.include(wt,t),e.include(ct,t),e.include(yt,t),e.include(Ls,t),e.include(Ze,t),e.include(Ps,t),Ia(e),e.varyings.add("depth","float"),i&&o.uniforms.add(new me("tex",n=>n.texture)),r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${a?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(et,t),o.code.add(s`
          void main(void) {
            discardBySlice(vpos);
            ${i?s`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===N.ObjectAndLayerIdColor?s`outputObjectAndLayerIdColor();`:s`outputDepth(depth);`}
          }
        `);break;case N.Normal:St(r,t),e.include(wt,t),e.include(lr,t),e.include(Ea,t),e.include(ct,t),e.include(yt,t),i&&o.uniforms.add(new me("tex",n=>n.texture)),e.varyings.add("vPositionView","vec3"),r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${t.normalType===q.Attribute?s`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${a?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(Ze,t),e.include(et,t),o.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${i?s`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===q.ScreenDerivative?s`
                vec3 normal = screenDerivativeNormal(vPositionView);`:s`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case N.Highlight:St(r,t),e.include(wt,t),e.include(ct,t),e.include(yt,t),i&&o.uniforms.add(new me("tex",n=>n.texture)),r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${a?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(Ze,t),e.include(et,t),e.include(Is,t),o.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${i?s`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function zs(e,t){const r=e.fragment;if(t.hasVertexTangents?(e.attributes.add(f.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===he.WindingOrder?r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.textureCoordinateType!==se.None){e.include(ba,t);const o=t.supportsTextureAtlas?t.hasWebGL2Context?re.None:re.Size:re.None;r.uniforms.add(t.pbrTextureBindType===B.Pass?Ye("normalTexture",a=>a.textureNormal,o):jt("normalTexture",a=>a.textureNormal,o)),r.code.add(s`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?s`vtc.size = ${lt(t,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}function Kr(e){e.include(Xr),e.code.add(s`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}const br=4;function Vs(){const e=new Lt,t=e.fragment;e.include(Ur);const r=(br+1)/2,o=1/(2*r*r);return t.include(Kr),t.uniforms.add([new me("depthMap",a=>a.depthTexture),new wa("tex",a=>a.colorTexture),new Lr("blurSize",a=>a.blurSize),new le("projScale",(a,i)=>{const n=Ci(i.camera.eye,i.camera.center);return n>5e4?Math.max(0,a.projScale-(n-5e4)):a.projScale}),new we("nearFar",(a,i)=>i.camera.nearFar)]),t.code.add(s`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.code.add(s`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${s.int(br)}; r <= ${s.int(br)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),e}const Bs=Object.freeze(Object.defineProperty({__proto__:null,build:Vs},Symbol.toStringTag,{value:"Module"}));function Gs(e){e.fragment.uniforms.add(new ue("projInfo",(t,r)=>function(o){const a=o.camera.projectionMatrix;return a[11]===0?pe(jo,2/(o.camera.fullWidth*a[0]),2/(o.camera.fullHeight*a[5]),(1+a[12])/a[0],(1+a[13])/a[5]):pe(jo,-2/(o.camera.fullWidth*a[0]),-2/(o.camera.fullHeight*a[5]),(1-a[8])/a[0],(1-a[9])/a[5])}(r))),e.fragment.uniforms.add(new we("zScale",(t,r)=>Ka(r))),e.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}(class Xa extends jr{initializeProgram(t){return new qr(t.rctx,Xa.shader.get().build(),Rt)}initializePipeline(){return Vr({colorWrite:Br})}}).shader=new cr(Bs,()=>Pt(()=>import("./SSAOBlur.glsl.0bef508b.js"),["js/SSAOBlur.glsl.0bef508b.js","js/index.8fd7165c.js","js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js","js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js","js/NvapForm.feb8550d.js","js/vue.a7ce1fbe.js","assets/NvapForm.356f5dc3.css","js/vue-router.805f6e2a.js","js/Table.e9c997d5.js","js/vue-i18n.67a42238.js","assets/Table.3b7647ef.css","assets/index.a699c0e4.css","js/OrderIndependentTransparency.0d2f697c.js","js/enums.64ab819c.js","js/basicInterfaces.b7051eb1.js","js/VertexAttribute.15d1866a.js","js/devEnvironmentUtils.4eab2a99.js","js/mat3f64.eb921732.js","js/mat4f64.b473928c.js","js/BufferView.b3039ce1.js","js/vec33.5889ffa1.js","js/DefaultMaterial_COLOR_GAMMA.078f8e82.js","js/types.e1c0a5bf.js","js/Version.a4557b9e.js","js/quat.17ee06b3.js","js/quatf64.75f9f553.js","js/resourceUtils.d8a25705.js","js/Indices.7165e4ff.js","js/NestedMap.1b5db22e.js","js/requestImageUtils.54152381.js","js/Util.68fdcaea.js","js/sphere.a87dd95a.js","js/Texture.fb0c670a.js","js/VertexArrayObject.1b8f3583.js","js/VertexElementDescriptor.2925c6af.js","js/InterleavedLayout.c89035f2.js","js/vec3f32.5805ce90.js","js/doublePrecisionUtils.e3c3d0d8.js","js/symbolColorUtils.2420e89c.js"]));const jo=ar();function Ka(e){return e.camera.projectionMatrix[11]===0?Ge(qo,0,1):Ge(qo,1,0)}const qo=rr(),Xo=16;function Us(){const e=new Lt,t=e.fragment;return e.include(Ur),t.include(Kr),e.include(Gs),t.uniforms.add(new le("radius",(r,o)=>Qa(o.camera))),t.code.add(s`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),t.code.add(s`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add([new we("nearFar",(r,o)=>o.camera.nearFar),new me("normalMap",r=>r.normalTexture),new me("depthMap",r=>r.depthTexture),new we("zScale",(r,o)=>Ka(o)),new le("projScale",r=>r.projScale),new me("rnm",r=>r.noiseTexture),new we("rnmScale",(r,o)=>Ge(Ko,o.camera.fullWidth/At(r.noiseTexture).descriptor.width,o.camera.fullHeight/At(r.noiseTexture).descriptor.height)),new le("intensity",r=>r.intensity),new we("screenSize",(r,o)=>Ge(Ko,o.camera.fullWidth,o.camera.fullHeight))]),t.code.add(s`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${s.int(Xo)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${s.int(Xo)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),e}function Qa(e){return Math.max(10,20*e.computeRenderPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const Ko=rr(),Hs=Object.freeze(Object.defineProperty({__proto__:null,build:Us,getRadius:Qa},Symbol.toStringTag,{value:"Module"}));class Qr extends jr{initializeProgram(t){return new qr(t.rctx,Qr.shader.get().build(),Rt)}initializePipeline(){return Vr({colorWrite:Br})}}Qr.shader=new cr(Hs,()=>Pt(()=>import("./SSAO.glsl.0d23f6de.js"),["js/SSAO.glsl.0d23f6de.js","js/index.8fd7165c.js","js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js","js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js","js/NvapForm.feb8550d.js","js/vue.a7ce1fbe.js","assets/NvapForm.356f5dc3.css","js/vue-router.805f6e2a.js","js/Table.e9c997d5.js","js/vue-i18n.67a42238.js","assets/Table.3b7647ef.css","assets/index.a699c0e4.css","js/OrderIndependentTransparency.0d2f697c.js","js/enums.64ab819c.js","js/basicInterfaces.b7051eb1.js","js/VertexAttribute.15d1866a.js","js/devEnvironmentUtils.4eab2a99.js","js/mat3f64.eb921732.js","js/mat4f64.b473928c.js","js/BufferView.b3039ce1.js","js/vec33.5889ffa1.js","js/DefaultMaterial_COLOR_GAMMA.078f8e82.js","js/types.e1c0a5bf.js","js/Version.a4557b9e.js","js/quat.17ee06b3.js","js/quatf64.75f9f553.js","js/resourceUtils.d8a25705.js","js/Indices.7165e4ff.js","js/NestedMap.1b5db22e.js","js/requestImageUtils.54152381.js","js/Util.68fdcaea.js","js/sphere.a87dd95a.js","js/Texture.fb0c670a.js","js/VertexArrayObject.1b8f3583.js","js/VertexElementDescriptor.2925c6af.js","js/InterleavedLayout.c89035f2.js","js/vec3f32.5805ce90.js","js/doublePrecisionUtils.e3c3d0d8.js","js/symbolColorUtils.2420e89c.js"]));const $s=2;function Yr(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(Ye("ssaoTex",(o,a)=>a.ssaoHelper.colorTexture,t.hasWebGL2Context?re.None:re.InvSize)),r.constants.add("blurSizePixelsInverse","float",1/$s),r.code.add(s`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${lt(t,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):r.code.add(s`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function ks(e,t){const r=e.fragment,o=t.lightingSphericalHarmonicsOrder!==void 0?t.lightingSphericalHarmonicsOrder:2;o===0?(r.uniforms.add(new ae("lightingAmbientSH0",(a,i)=>ee(Qo,i.lighting.sh.r[0],i.lighting.sh.g[0],i.lighting.sh.b[0]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===1?(r.uniforms.add([new ue("lightingAmbientSH_R",(a,i)=>pe(Me,i.lighting.sh.r[0],i.lighting.sh.r[1],i.lighting.sh.r[2],i.lighting.sh.r[3])),new ue("lightingAmbientSH_G",(a,i)=>pe(Me,i.lighting.sh.g[0],i.lighting.sh.g[1],i.lighting.sh.g[2],i.lighting.sh.g[3])),new ue("lightingAmbientSH_B",(a,i)=>pe(Me,i.lighting.sh.b[0],i.lighting.sh.b[1],i.lighting.sh.b[2],i.lighting.sh.b[3]))]),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===2&&(r.uniforms.add([new ae("lightingAmbientSH0",(a,i)=>ee(Qo,i.lighting.sh.r[0],i.lighting.sh.g[0],i.lighting.sh.b[0])),new ue("lightingAmbientSH_R1",(a,i)=>pe(Me,i.lighting.sh.r[1],i.lighting.sh.r[2],i.lighting.sh.r[3],i.lighting.sh.r[4])),new ue("lightingAmbientSH_G1",(a,i)=>pe(Me,i.lighting.sh.g[1],i.lighting.sh.g[2],i.lighting.sh.g[3],i.lighting.sh.g[4])),new ue("lightingAmbientSH_B1",(a,i)=>pe(Me,i.lighting.sh.b[1],i.lighting.sh.b[2],i.lighting.sh.b[3],i.lighting.sh.b[4])),new ue("lightingAmbientSH_R2",(a,i)=>pe(Me,i.lighting.sh.r[5],i.lighting.sh.r[6],i.lighting.sh.r[7],i.lighting.sh.r[8])),new ue("lightingAmbientSH_G2",(a,i)=>pe(Me,i.lighting.sh.g[5],i.lighting.sh.g[6],i.lighting.sh.g[7],i.lighting.sh.g[8])),new ue("lightingAmbientSH_B2",(a,i)=>pe(Me,i.lighting.sh.b[5],i.lighting.sh.b[6],i.lighting.sh.b[7],i.lighting.sh.b[8]))]),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==F.Normal&&t.pbrMode!==F.Schematic||r.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Qo=z(),Me=ar();function Jr(e){e.uniforms.add(new ae("mainLightDirection",(t,r)=>r.lighting.mainLight.direction))}function dr(e){e.uniforms.add(new ae("mainLightIntensity",(t,r)=>r.lighting.mainLight.intensity))}function Yo(e,t){const r=e.fragment;Jr(r),dr(r),function(o,a){a.useLegacyTerrainShading?o.uniforms.add(new le("lightingFixedFactor",(i,n)=>n.lighting.noonFactor*(1-n.lighting.globalFactor))):o.constants.add("lightingFixedFactor","float",0)}(r,t),r.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Ws(e){const t=e.fragment.code;t.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Ya(e){e.vertex.code.add(s`const float PI = 3.141592653589793;`),e.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Zr(e,t){const r=e.fragment.code;e.include(Ya),t.pbrMode!==F.Normal&&t.pbrMode!==F.Schematic&&t.pbrMode!==F.Terrain&&t.pbrMode!==F.TerrainWithWater||(r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==F.Normal&&t.pbrMode!==F.Schematic||(e.include(Ws),r.add(s`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}let js=class extends ne{constructor(e,t){super(e,"bool",B.Pass,(r,o,a)=>r.setUniform1b(e,t(o,a)))}};const qs=.4;function eo(e){e.constants.add("ambientBoostFactor","float",qs)}function to(e){e.uniforms.add(new le("lightingGlobalFactor",(t,r)=>r.lighting.globalFactor))}function Ja(e,t){const r=e.fragment;switch(e.include(Yr,t),t.pbrMode!==F.Disabled&&e.include(Zr,t),e.include(ks,t),e.include(Ya),r.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===F.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),eo(r),to(r),Jr(r),r.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?s`normalize(vPosWorld)`:s`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),dr(r),r.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case F.Disabled:case F.WaterOnIntegratedMesh:case F.Water:e.include(Yo,t),r.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case F.Normal:case F.Schematic:r.code.add(s`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(s`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new js("hasFillLights",(o,a)=>a.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add([new le("lightingSpecularStrength",(o,a)=>a.lighting.mainLight.specularStrength),new le("lightingEnvironmentStrength",(o,a)=>a.lighting.mainLight.environmentStrength)]),r.code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(s`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===F.Schematic?s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case F.Terrain:case F.TerrainWithWater:e.include(Yo,t),r.code.add(s`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:tt(t.pbrMode);case F.COUNT:}}function er(e,t){t.hasMultipassTerrain&&(e.fragment.include(Kr),e.fragment.uniforms.add(new me("terrainDepthTexture",(r,o)=>o.multipassTerrain.linearDepthTexture)),e.fragment.uniforms.add(new we("nearFar",(r,o)=>o.camera.nearFar)),e.fragment.uniforms.add(new we("inverseViewport",(r,o)=>o.inverseViewport)),e.fragment.code.add(s`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class Xs extends ne{constructor(t,r,o){super(t,"mat4",B.Draw,(a,i,n)=>a.setUniformMatrix4fv(t,r(i,n)),o)}}let Ks=class extends ne{constructor(e,t,r){super(e,"mat4",B.Pass,(o,a,i)=>o.setUniformMatrix4fv(e,t(a,i)),r)}};function Za(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new Ks("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),ti(e,t))}function ei(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new Xs("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),ti(e,t))}function ti(e,t){const r=e.fragment;r.include(Xr),r.uniforms.add([...Ye("shadowMapTex",(o,a)=>a.shadowMap.depthTexture,t.hasWebGL2Context?re.None:re.Size),new $a("numCascades",(o,a)=>a.shadowMap.numCascades),new ue("cascadeDistances",(o,a)=>a.shadowMap.cascadeDistances)]),r.code.add(s`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${lt(t,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}function Qs(e){e.vertex.uniforms.add(new $e("colorTextureTransformMatrix",t=>b(t.colorTextureTransformMatrix)?t.colorTextureTransformMatrix:ht())),e.varyings.add("colorUV","vec2"),e.vertex.code.add(s`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Ys(e){e.vertex.uniforms.add(new $e("normalTextureTransformMatrix",t=>b(t.normalTextureTransformMatrix)?t.normalTextureTransformMatrix:ht())),e.varyings.add("normalUV","vec2"),e.vertex.code.add(s`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Js(e){e.vertex.uniforms.add(new $e("emissiveTextureTransformMatrix",t=>b(t.emissiveTextureTransformMatrix)?t.emissiveTextureTransformMatrix:ht())),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(s`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Zs(e){e.vertex.uniforms.add(new $e("occlusionTextureTransformMatrix",t=>b(t.occlusionTextureTransformMatrix)?t.occlusionTextureTransformMatrix:ht())),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(s`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function el(e){e.vertex.uniforms.add(new $e("metallicRoughnessTextureTransformMatrix",t=>b(t.metallicRoughnessTextureTransformMatrix)?t.metallicRoughnessTextureTransformMatrix:ht())),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(s`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function tl(e){e.code.add(s`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function tr(e){e.include(tl),e.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(Pe.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.int(Pe.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(Pe.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${s.int(Pe.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(Pe.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function rl(e){const t=new Lt,{vertex:r,fragment:o,varyings:a}=t;return St(r,e),t.include(kr),a.add("vpos","vec3"),t.include(yt,e),t.include(Ha,e),t.include(ja,e),e.hasColorTextureTransform&&t.include(Qs),e.output!==N.Color&&e.output!==N.Alpha||(e.hasNormalTextureTransform&&t.include(Ys),e.hasEmissionTextureTransform&&t.include(Js),e.hasOcclusionTextureTransform&&t.include(Zs),e.hasMetallicRoughnessTextureTransform&&t.include(el),Mt(r,e),t.include(lr,e),t.include(wt,e),e.normalType===q.Attribute&&e.offsetBackfaces&&t.include(Fa),t.include(zs,e),t.include(Ea,e),e.instancedColor&&t.attributes.add(f.INSTANCECOLOR,"vec4"),a.add("localvpos","vec3"),t.include(ct,e),t.include(Da,e),t.include(ka,e),t.include(Wa,e),r.uniforms.add(new ue("externalColor",i=>i.externalColor)),a.add("vcolorExt","vec4"),e.hasMultipassTerrain&&a.add("depth","float"),e.hasModelTransformation&&r.uniforms.add(new Je("model",i=>b(i.modelTransformation)?i.modelTransformation:Yt)),r.code.add(s`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${s.float(Wr)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===q.Attribute?s`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===q.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?s`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?s`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?s`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?s`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?s`forwardMetallicRoughnessUV();`:""}
      }
    `)),e.output===N.Alpha&&(t.include(Ze,e),t.include(et,e),t.include(er,e),o.uniforms.add([new le("opacity",i=>i.opacity),new le("layerOpacity",i=>i.layerOpacity)]),e.hasColorTexture&&o.uniforms.add(new me("tex",i=>i.texture)),o.include(tr),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===N.Color&&(t.include(Ze,e),t.include(Ja,e),t.include(Yr,e),t.include(et,e),t.include(e.instancedDoublePrecision?Za:ei,e),t.include(er,e),Mt(o,e),o.uniforms.add([r.uniforms.get("localOrigin"),new ae("ambient",i=>i.ambient),new ae("diffuse",i=>i.diffuse),new le("opacity",i=>i.opacity),new le("layerOpacity",i=>i.layerOpacity)]),e.hasColorTexture&&o.uniforms.add(new me("tex",i=>i.texture)),t.include(Sa,e),t.include(Zr,e),o.include(tr),t.include(Qn,e),eo(o),to(o),dr(o),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===q.ScreenDerivative?s`
                vec3 normal = screenDerivativeNormal(localvpos);`:s`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===F.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?s`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:s`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?s`normalize(posWorld);`:s`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?s`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===F.Normal||e.pbrMode===F.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?s`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===ut.Color?s`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),t.include(qa,e),t}const ol=Object.freeze(Object.defineProperty({__proto__:null,build:rl},Symbol.toStringTag,{value:"Module"}));let al=class extends gs{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Ve(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Ue.Back,this.emissiveFactor=Ve(0,0,0),this.instancedDoublePrecision=!1,this.normalType=q.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=Ve(.2,.2,.2),this.diffuse=Ve(.8,.8,.8),this.externalColor=or(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=z(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=ir(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=Ot.Less,this.textureAlphaMode=te.Blend,this.textureAlphaCutoff=.1,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Rr.Occlude}};class Et extends jr{initializeConfiguration(t,r){r.hasWebGL2Context=t.rctx.type===ia.WEBGL2,r.spherical=t.viewingMode===Cr.Global,r.doublePrecisionRequiresObfuscation=t.rctx.driverTest.doublePrecisionRequiresObfuscation.result,r.textureCoordinateType=r.hasColorTexture||r.hasMetallicRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture?se.Default:se.None,r.objectAndLayerIdColorInstanced=r.instanced}initializeProgram(t){return this._initializeProgram(t,Et.shader)}_initializeProgram(t,r){return new qr(t.rctx,r.get().build(this.configuration),Rt)}_convertDepthTestFunction(t){return t===Ot.Lequal?He.LEQUAL:He.LESS}_makePipeline(t,r){const o=this.configuration,a=t===ut.NONE,i=t===ut.FrontFace;return Vr({blending:o.output!==N.Color&&o.output!==N.Alpha||!o.transparent?null:a?en:tn(t),culling:il(o)?rn(o.cullFace):null,depthTest:{func:on(t,this._convertDepthTestFunction(o.customDepthTest))},depthWrite:(a||i)&&o.writeDepth?an:null,colorWrite:Br,stencilWrite:o.hasOccludees?xs:null,stencilTest:o.hasOccludees?r?_s:Ts:null,polygonOffset:a||i?null:nn(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(t,r){return r?this._occludeePipelineState:super.getPipelineState(t,r)}}function il(e){return e.cullFace!==Ue.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}Et.shader=new cr(ol,()=>Pt(()=>import("./DefaultMaterial.glsl.eff92977.js"),["js/DefaultMaterial.glsl.eff92977.js","js/mat4f64.b473928c.js","js/mat3f64.eb921732.js","js/vec3f32.5805ce90.js","js/index.8fd7165c.js","js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js","js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js","js/NvapForm.feb8550d.js","js/vue.a7ce1fbe.js","assets/NvapForm.356f5dc3.css","js/vue-router.805f6e2a.js","js/Table.e9c997d5.js","js/vue-i18n.67a42238.js","assets/Table.3b7647ef.css","assets/index.a699c0e4.css","js/OrderIndependentTransparency.0d2f697c.js","js/enums.64ab819c.js","js/basicInterfaces.b7051eb1.js","js/VertexAttribute.15d1866a.js","js/symbolColorUtils.2420e89c.js","js/VertexArrayObject.1b8f3583.js","js/Texture.fb0c670a.js","js/devEnvironmentUtils.4eab2a99.js","js/BufferView.b3039ce1.js","js/vec33.5889ffa1.js","js/DefaultMaterial_COLOR_GAMMA.078f8e82.js","js/types.e1c0a5bf.js","js/Version.a4557b9e.js","js/quat.17ee06b3.js","js/quatf64.75f9f553.js","js/resourceUtils.d8a25705.js","js/Indices.7165e4ff.js","js/NestedMap.1b5db22e.js","js/requestImageUtils.54152381.js","js/Util.68fdcaea.js","js/sphere.a87dd95a.js","js/VertexElementDescriptor.2925c6af.js","js/InterleavedLayout.c89035f2.js","js/doublePrecisionUtils.e3c3d0d8.js"]));class Fe extends Ua{constructor(){super(...arguments),this.hasWebGL2Context=!1}}M([O({constValue:!0})],Fe.prototype,"hasSliceHighlight",void 0),M([O({constValue:!1})],Fe.prototype,"hasSliceInVertexProgram",void 0),M([O({constValue:!1})],Fe.prototype,"instancedDoublePrecision",void 0),M([O({constValue:!1})],Fe.prototype,"useLegacyTerrainShading",void 0),M([O({constValue:!1})],Fe.prototype,"hasModelTransformation",void 0),M([O({constValue:B.Pass})],Fe.prototype,"pbrTextureBindType",void 0),M([O()],Fe.prototype,"hasWebGL2Context",void 0);class I extends Fe{constructor(){super(...arguments),this.output=N.Color,this.alphaDiscardMode=te.Opaque,this.doubleSidedMode=he.None,this.pbrMode=F.Disabled,this.cullFace=Ue.None,this.transparencyPassType=ut.NONE,this.normalType=q.Attribute,this.textureCoordinateType=se.None,this.customDepthTest=Ot.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}function nl(e){const t=new Lt,{vertex:r,fragment:o,varyings:a}=t;return St(r,e),t.include(kr),a.add("vpos","vec3"),t.include(yt,e),t.include(Ha,e),t.include(ja,e),e.output!==N.Color&&e.output!==N.Alpha||(Mt(t.vertex,e),t.include(lr,e),t.include(wt,e),e.offsetBackfaces&&t.include(Fa),e.instancedColor&&t.attributes.add(f.INSTANCECOLOR,"vec4"),a.add("vNormalWorld","vec3"),a.add("localvpos","vec3"),e.hasMultipassTerrain&&a.add("depth","float"),t.include(ct,e),t.include(Da,e),t.include(ka,e),t.include(Wa,e),r.uniforms.add(new ue("externalColor",i=>i.externalColor)),a.add("vcolorExt","vec4"),r.code.add(s`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${s.float(Wr)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?s`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===N.Alpha&&(t.include(Ze,e),t.include(et,e),t.include(er,e),o.uniforms.add([new le("opacity",i=>i.opacity),new le("layerOpacity",i=>i.layerOpacity)]),e.hasColorTexture&&o.uniforms.add(new me("tex",i=>i.texture)),o.include(tr),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===N.Color&&(t.include(Ze,e),t.include(Ja,e),t.include(Yr,e),t.include(et,e),t.include(e.instancedDoublePrecision?Za:ei,e),t.include(er,e),Mt(t.fragment,e),Jr(o),eo(o),to(o),o.uniforms.add([r.uniforms.get("localOrigin"),r.uniforms.get("view"),new ae("ambient",i=>i.ambient),new ae("diffuse",i=>i.diffuse),new le("opacity",i=>i.opacity),new le("layerOpacity",i=>i.layerOpacity)]),e.hasColorTexture&&o.uniforms.add(new me("tex",i=>i.texture)),t.include(Sa,e),t.include(Zr,e),o.include(tr),t.extensions.add("GL_OES_standard_derivatives"),dr(o),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===F.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?s`albedo = mix(albedo, vec3(1), 0.9);`:s``}
        ${s`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===F.Normal||e.pbrMode===F.Schematic?e.spherical?s`vec3 normalGround = normalize(vpos + localOrigin);`:s`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:s``}
        ${e.pbrMode===F.Normal||e.pbrMode===F.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?s`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===ut.Color?s`gl_FragColor = premultiplyAlpha(gl_FragColor);`:s``}
      }
    `)),t.include(qa,e),t}M([O({count:N.COUNT})],I.prototype,"output",void 0),M([O({count:te.COUNT})],I.prototype,"alphaDiscardMode",void 0),M([O({count:he.COUNT})],I.prototype,"doubleSidedMode",void 0),M([O({count:F.COUNT})],I.prototype,"pbrMode",void 0),M([O({count:Ue.COUNT})],I.prototype,"cullFace",void 0),M([O({count:ut.COUNT})],I.prototype,"transparencyPassType",void 0),M([O({count:q.COUNT})],I.prototype,"normalType",void 0),M([O({count:se.COUNT})],I.prototype,"textureCoordinateType",void 0),M([O({count:Ot.COUNT})],I.prototype,"customDepthTest",void 0),M([O()],I.prototype,"spherical",void 0),M([O()],I.prototype,"hasVertexColors",void 0),M([O()],I.prototype,"hasSymbolColors",void 0),M([O()],I.prototype,"hasVerticalOffset",void 0),M([O()],I.prototype,"hasSlicePlane",void 0),M([O()],I.prototype,"hasSliceHighlight",void 0),M([O()],I.prototype,"hasColorTexture",void 0),M([O()],I.prototype,"hasMetallicRoughnessTexture",void 0),M([O()],I.prototype,"hasEmissionTexture",void 0),M([O()],I.prototype,"hasOcclusionTexture",void 0),M([O()],I.prototype,"hasNormalTexture",void 0),M([O()],I.prototype,"hasScreenSizePerspective",void 0),M([O()],I.prototype,"hasVertexTangents",void 0),M([O()],I.prototype,"hasOccludees",void 0),M([O()],I.prototype,"hasMultipassTerrain",void 0),M([O()],I.prototype,"hasModelTransformation",void 0),M([O()],I.prototype,"offsetBackfaces",void 0),M([O()],I.prototype,"vvSize",void 0),M([O()],I.prototype,"vvColor",void 0),M([O()],I.prototype,"receiveShadows",void 0),M([O()],I.prototype,"receiveAmbientOcclusion",void 0),M([O()],I.prototype,"textureAlphaPremultiplied",void 0),M([O()],I.prototype,"instanced",void 0),M([O()],I.prototype,"instancedColor",void 0),M([O()],I.prototype,"objectAndLayerIdColorInstanced",void 0),M([O()],I.prototype,"instancedDoublePrecision",void 0),M([O()],I.prototype,"doublePrecisionRequiresObfuscation",void 0),M([O()],I.prototype,"writeDepth",void 0),M([O()],I.prototype,"transparent",void 0),M([O()],I.prototype,"enableOffset",void 0),M([O()],I.prototype,"cullAboveGround",void 0),M([O()],I.prototype,"snowCover",void 0),M([O()],I.prototype,"hasColorTextureTransform",void 0),M([O()],I.prototype,"hasEmissionTextureTransform",void 0),M([O()],I.prototype,"hasNormalTextureTransform",void 0),M([O()],I.prototype,"hasOcclusionTextureTransform",void 0),M([O()],I.prototype,"hasMetallicRoughnessTextureTransform",void 0),M([O({constValue:!0})],I.prototype,"hasVvInstancing",void 0),M([O({constValue:!1})],I.prototype,"useCustomDTRExponentForWater",void 0),M([O({constValue:!1})],I.prototype,"supportsTextureAtlas",void 0),M([O({constValue:!0})],I.prototype,"useFillLights",void 0);const sl=Object.freeze(Object.defineProperty({__proto__:null,build:nl},Symbol.toStringTag,{value:"Module"}));class ur extends Et{initializeConfiguration(t,r){super.initializeConfiguration(t,r),r.hasMetallicRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.hasModelTransformation=!1,r.normalType=q.Attribute,r.doubleSidedMode=he.WindingOrder,r.hasVertexTangents=!1}initializeProgram(t){return this._initializeProgram(t,ur.shader)}}ur.shader=new cr(sl,()=>Pt(()=>import("./RealisticTree.glsl.9a1dd4d1.js"),["js/RealisticTree.glsl.9a1dd4d1.js","js/mat3f64.eb921732.js","js/mat4f64.b473928c.js","js/vec3f32.5805ce90.js","js/index.8fd7165c.js","js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js","js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js","js/NvapForm.feb8550d.js","js/vue.a7ce1fbe.js","assets/NvapForm.356f5dc3.css","js/vue-router.805f6e2a.js","js/Table.e9c997d5.js","js/vue-i18n.67a42238.js","assets/Table.3b7647ef.css","assets/index.a699c0e4.css","js/OrderIndependentTransparency.0d2f697c.js","js/enums.64ab819c.js","js/basicInterfaces.b7051eb1.js","js/VertexAttribute.15d1866a.js","js/symbolColorUtils.2420e89c.js","js/VertexArrayObject.1b8f3583.js","js/Texture.fb0c670a.js","js/devEnvironmentUtils.4eab2a99.js","js/BufferView.b3039ce1.js","js/vec33.5889ffa1.js","js/DefaultMaterial_COLOR_GAMMA.078f8e82.js","js/types.e1c0a5bf.js","js/Version.a4557b9e.js","js/quat.17ee06b3.js","js/quatf64.75f9f553.js","js/resourceUtils.d8a25705.js","js/Indices.7165e4ff.js","js/NestedMap.1b5db22e.js","js/requestImageUtils.54152381.js","js/Util.68fdcaea.js","js/sphere.a87dd95a.js","js/VertexElementDescriptor.2925c6af.js","js/InterleavedLayout.c89035f2.js","js/doublePrecisionUtils.e3c3d0d8.js"]));let qt=class extends ls{constructor(e){super(e,cl),this.supportsEdges=!0,this._configuration=new I,this._vertexBufferLayout=function(t){const r=gn().vec3f(f.POSITION).vec3f(f.NORMAL),o=t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId;return t.hasVertexTangents&&r.vec4f(f.TANGENT),o&&r.vec2f(f.UV0),t.hasVertexColors&&r.vec4u8(f.COLOR),t.hasSymbolColors&&r.vec4u8(f.SYMBOLCOLOR),Li("enable-feature:objectAndLayerId-rendering")&&r.vec4u8(f.OBJECTANDLAYERIDCOLOR),r}(this.parameters)}isVisibleForOutput(e){return e!==N.Shadow&&e!==N.ShadowExcludeHighlight&&e!==N.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{instanced:t,hasVertexColors:r,hasSymbolColors:o,vvColorEnabled:a}=e,i=b(t)&&t.includes("color"),n=e.colorMixMode==="replace",l=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(i||a||o)?!!n||l:r?n?c:l:i||a||o?!!n||l:n?c:l}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=b(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=b(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,b(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?Ue.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=b(this.parameters.modelTransformation),e!==N.Color&&e!==N.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=he.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?he.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?he.WindingOrder:he.None,this._configuration.instancedColor=b(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!t.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?F.Schematic:F.Normal:F.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<sn,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return b(e.weather)&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,t,r,o,a,i){if(b(this.parameters.verticalOffset)){const n=r.camera;ee(Sr,t[12],t[13],t[14]);let l=null;switch(r.viewingMode){case Cr.Global:l=Dr(Jo,Sr);break;case Cr.Local:l=Mi(Jo,hl)}let c=0;const d=Ee(ml,Sr,n.eye),h=Er(d),m=ye(d,d,1/h);let x=null;this.parameters.screenSizePerspective&&(x=Oi(l,m)),c+=function(p,u,_,L,P){let C=(_.screenLength||0)*p.pixelRatio;b(P)&&(C=rs(C,L,u,P));const v=C*Math.tan(.5*p.fovY)/(.5*p.fullHeight);return Si(v*u,_.minWorldLength||0,_.maxWorldLength!=null?_.maxWorldLength:1/0)}(n,h,this.parameters.verticalOffset,x??0,this.parameters.screenSizePerspective),ye(l,l,c),Pi(wr,l,r.transform.inverseRotation),o=Ee(dl,o,wr),a=Ee(ul,a,wr)}os(e,r,o,a,function(n){return b(n)?(Uo.offset=n,Uo):null}(r.verticalOffset),i)}requiresSlot(e,t){return(t===N.Color||t===N.Alpha||t===N.Depth||t===N.Normal||t===N.Shadow||t===N.ShadowHighlight||t===N.ShadowExcludeHighlight||t===N.Highlight||t===N.ObjectAndLayerIdColor)&&(e===(this.parameters.transparent?this.parameters.writeDepth?nt.TRANSPARENT_MATERIAL:nt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:nt.OPAQUE_MATERIAL)||e===nt.DRAPED_MATERIAL)}createGLMaterial(e){return new ll(e)}createBufferWriter(){return new class{constructor(e){this.vertexBufferLayout=e}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(f.POSITION).length}write(e,t,r,o,a){(function(i,n,l,c,d,h){for(const m of n.fieldNames){const x=i.vertexAttributes.get(m),p=i.indices.get(m);if(x&&p)switch(m){case f.POSITION:{Z(x.size===3);const u=d.getField(m,st);Z(!!u,`No buffer view for ${m}`),u&&ds(p,x.data,l,u,h);break}case f.NORMAL:{Z(x.size===3);const u=d.getField(m,st);Z(!!u,`No buffer view for ${m}`),u&&us(p,x.data,c,u,h);break}case f.UV0:{Z(x.size===2);const u=d.getField(m,ca);Z(!!u,`No buffer view for ${m}`),u&&cs(p,x.data,u,h);break}case f.COLOR:case f.SYMBOLCOLOR:{Z(x.size===3||x.size===4);const u=d.getField(m,Ct);Z(!!u,`No buffer view for ${m}`),u&&ms(p,x.data,x.size,u,h);break}case f.TANGENT:{Z(x.size===4);const u=d.getField(m,Jt);Z(!!u,`No buffer view for ${m}`),u&&hs(p,x.data,c,u,h);break}case f.PROFILERIGHT:case f.PROFILEUP:case f.PROFILEVERTEXANDNORMAL:case f.FEATUREVALUE:{Z(x.size===4);const u=d.getField(m,Jt);Z(!!u,`No buffer view for ${m}`),u&&Oa(p,x.data,u,h)}}else if(m===f.OBJECTANDLAYERIDCOLOR&&b(i.objectAndLayerIdColor)){const u=i.indices.get(f.POSITION);if(Z(!!u,`No buffer view for ${m}`),u){const _=u.length,L=d.getField(m,Ct);ps(i.objectAndLayerIdColor,L,_,h)}}}})(r,this.vertexBufferLayout,e,t,o,a)}}(this._vertexBufferLayout)}},ll=class extends Zn{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==N.Color&&this._output!==N.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return ee(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?ur:Et,e)}};const cl=new class extends al{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}},dl=z(),ul=z(),hl=Ve(0,0,1),Jo=z(),wr=z(),Sr=z(),ml=z(),Oe=Ir.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function pl(e,t){const r=await async function(i,n){const l=b(n)&&n.streamDataRequester;if(l)return async function(d,h,m){const x=await vo(h.request(d,"json",m));if(x.ok===!0)return x.value;go(x.error),Zo(x.error.details.url)}(i,l,n);const c=await vo(Ei(i,At(n)));if(c.ok===!0)return c.value.data;go(c.error),Zo(c.error)}(e,t),o=await async function(i,n){const l=[];for(const h in i){const m=i[h],x=m.images[0].data;if(!x){Oe.warn("Externally referenced texture data is not yet supported");continue}const p=m.encoding+";base64,"+x,u="/textureDefinitions/"+h,_=m.channels==="rgba"?m.alphaChannelUsage||"transparency":"none",L={noUnpackFlip:!0,wrap:{s:it.REPEAT,t:it.REPEAT},preMultiplyAlpha:ri(_)!==te.Opaque},P=b(n)&&n.disableTextures?Promise.resolve(null):ua(p,n);l.push(P.then(C=>({refId:u,image:C,params:L,alphaChannelUsage:_})))}const c=await Promise.all(l),d={};for(const h of c)d[h.refId]=h;return d}(r.textureDefinitions??{},t);let a=0;for(const i in o)if(o.hasOwnProperty(i)){const n=o[i];a+=n!=null&&n.image?n.image.width*n.image.height*4:0}return{resource:r,textures:o,size:a+Ri(r)}}function Zo(e){throw new Nr("",`Request for object resource failed: ${e}`)}function fl(e){const t=e.params,r=t.topology;let o=!0;switch(t.vertexAttributes||(Oe.warn("Geometry must specify vertex attributes"),o=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const i=t.faces;if(i){if(t.vertexAttributes)for(const n in t.vertexAttributes){const l=i[n];l&&l.values?(l.valueType!=null&&l.valueType!=="UInt32"&&(Oe.warn(`Unsupported indexed geometry indices type '${l.valueType}', only UInt32 is currently supported`),o=!1),l.valuesPerElement!=null&&l.valuesPerElement!==1&&(Oe.warn(`Unsupported indexed geometry values per element '${l.valuesPerElement}', only 1 is currently supported`),o=!1)):(Oe.warn(`Indexed geometry does not specify face indices for '${n}' attribute`),o=!1)}}else Oe.warn("Indexed geometries must specify faces"),o=!1;break}default:Oe.warn(`Unsupported topology '${r}'`),o=!1}e.params.material||(Oe.warn("Geometry requires material"),o=!1);const a=e.params.vertexAttributes;for(const i in a)a[i].values||(Oe.warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function vl(e){const t=la();return e.forEach(r=>{const o=r.boundingInfo;b(o)&&(Qt(t,o.bbMin),Qt(t,o.bbMax))}),t}function ri(e){switch(e){case"mask":return te.Mask;case"maskAndTransparency":return te.MaskBlend;case"none":return te.Opaque;default:return te.Blend}}function gl(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const xl=new da(1,2,"wosr");function ea(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:t[4]!=null?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function ta(e,t,r,o){const a=e.model,i=new Array,n=new Map,l=new Map,c=a.lods.length,d=la();return a.lods.forEach((h,m)=>{const x=o.skipHighLods===!0&&(c>1&&m===0||c>3&&m===1)||o.skipHighLods===!1&&o.singleLodIndex!=null&&m!==o.singleLodIndex;if(x&&m!==0)return;const p=new yn(h.name,h.lodThreshold,[0,0,0]);h.parts.forEach(u=>{const _=x?new qt({}):function(v,A,w,S,R,E,y){const T=A.material+(A.attributes.normal?"_normal":"")+(A.attributes.color?"_color":"")+(A.attributes.texCoord0?"_texCoord0":"")+(A.attributes.tangent?"_tangent":""),g=v.materials.get(A.material),D=b(A.attributes.texCoord0),G=b(A.attributes.normal);if(k(g))return null;const W=function(V){switch(V){case"BLEND":return te.Blend;case"MASK":return te.Mask;case"OPAQUE":case null:case void 0:return te.Opaque}}(g.alphaMode);if(!E.has(T)){if(D){const Q=(de,H=!1)=>{if(b(de)&&!y.has(de)){const $=v.textures.get(de);if(b($)){const Y=$.data;y.set(de,new _a(vr(Y)?Y.data:Y,{...$.parameters,preMultiplyAlpha:!vr(Y)&&H,encoding:vr(Y)&&b(Y.encoding)?Y.encoding:void 0}))}}};Q(g.textureColor,W!==te.Opaque),Q(g.textureNormal),Q(g.textureOcclusion),Q(g.textureEmissive),Q(g.textureMetallicRoughness)}const V=g.color[0]**(1/ot),oe=g.color[1]**(1/ot),K=g.color[2]**(1/ot),ce=g.emissiveFactor[0]**(1/ot),ge=g.emissiveFactor[1]**(1/ot),ie=g.emissiveFactor[2]**(1/ot),j=b(g.textureColor)&&D?y.get(g.textureColor):null;E.set(T,new qt({...S,transparent:W===te.Blend,customDepthTest:Ot.Lequal,textureAlphaMode:W,textureAlphaCutoff:g.alphaCutoff,diffuse:[V,oe,K],ambient:[V,oe,K],opacity:g.opacity,doubleSided:g.doubleSided,doubleSidedType:"winding-order",cullFace:g.doubleSided?Ue.None:Ue.Back,hasVertexColors:!!A.attributes.color,hasVertexTangents:!!A.attributes.tangent,normalType:G?q.Attribute:q.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:b(j)?j.id:void 0,colorMixMode:g.colorMixMode,normalTextureId:b(g.textureNormal)&&D?y.get(g.textureNormal).id:void 0,textureAlphaPremultiplied:b(j)&&!!j.params.preMultiplyAlpha,occlusionTextureId:b(g.textureOcclusion)&&D?y.get(g.textureOcclusion).id:void 0,emissiveTextureId:b(g.textureEmissive)&&D?y.get(g.textureEmissive).id:void 0,metallicRoughnessTextureId:b(g.textureMetallicRoughness)&&D?y.get(g.textureMetallicRoughness).id:void 0,emissiveFactor:[ce,ge,ie],mrrFactors:[g.metallicFactor,g.roughnessFactor,S.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:vt(g.colorTextureTransform),normalTextureTransformMatrix:vt(g.normalTextureTransform),occlusionTextureTransformMatrix:vt(g.occlusionTextureTransform),emissiveTextureTransformMatrix:vt(g.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:vt(g.metallicRoughnessTextureTransform),...R}))}const U=E.get(T);if(w.stageResources.materials.push(U),D){const V=oe=>{b(oe)&&w.stageResources.textures.push(y.get(oe))};V(g.textureColor),V(g.textureNormal),V(g.textureOcclusion),V(g.textureEmissive),V(g.textureMetallicRoughness)}return U}(a,u,p,t,r,n,l),{geometry:L,vertexCount:P}=function(v,A){const w=v.attributes.position.count,S=function(T,g){switch(g){case _t.TRIANGLES:return Ki(T);case _t.TRIANGLE_STRIP:return Xi(T);case _t.TRIANGLE_FAN:return qi(T)}}(v.indices||w,v.primitiveType),R=Xe(st,w);Vi(R,v.attributes.position,v.transform);const E=[[f.POSITION,new at(R.typedBuffer,R.elementCount,!0)]],y=[[f.POSITION,S]];if(b(v.attributes.normal)){const T=Xe(st,w);To($t,v.transform),Bi(T,v.attributes.normal,$t),E.push([f.NORMAL,new at(T.typedBuffer,T.elementCount,!0)]),y.push([f.NORMAL,S])}if(b(v.attributes.tangent)){const T=Xe(Jt,w);To($t,v.transform),$i(T,v.attributes.tangent,$t),E.push([f.TANGENT,new at(T.typedBuffer,T.elementCount,!0)]),y.push([f.TANGENT,S])}if(b(v.attributes.texCoord0)){const T=Xe(ca,w);ki(T,v.attributes.texCoord0),E.push([f.UV0,new at(T.typedBuffer,T.elementCount,!0)]),y.push([f.UV0,S])}if(b(v.attributes.color)){const T=Xe(Ct,w);if(v.attributes.color.elementCount===4)v.attributes.color instanceof Jt?So(T,v.attributes.color,255):v.attributes.color instanceof Ct?Wi(T,v.attributes.color):v.attributes.color instanceof Fi&&So(T,v.attributes.color,1/256);else{ji(T,255,255,255,255);const g=new bo(T.buffer,0,4);v.attributes.color instanceof st?wo(g,v.attributes.color,255):v.attributes.color instanceof bo?Gi(g,v.attributes.color):v.attributes.color instanceof zi&&wo(g,v.attributes.color,1/256)}E.push([f.COLOR,new at(T.typedBuffer,T.elementCount,!0)]),y.push([f.COLOR,S])}return{geometry:new ma(A,E,y),vertexCount:w}}(u,b(_)?_:new qt({})),C=L.boundingInfo;b(C)&&m===0&&(Qt(d,C.bbMin),Qt(d,C.bbMax)),b(_)&&(p.stageResources.geometries.push(L),p.numberOfVertices+=P)}),x||i.push(p)}),{engineResources:i,referenceBoundingBox:d}}const $t=ir(),ql=Object.freeze(Object.defineProperty({__proto__:null,fetch:async function(e,t){const r=ea(oi(e));if(r.fileType==="wosr"){const m=await(t.cache?t.cache.loadWOSR(r.url,t):pl(r.url,t)),{engineResources:x,referenceBoundingBox:p}=function(u,_){const L=new Array,P=new Array,C=new Array,v=new Qi,A=u.resource,w=da.parse(A.version||"1.0","wosr");xl.validate(w);const S=A.model.name,R=A.model.geometries,E=A.materialDefinitions??{},y=u.textures;let T=0;const g=new Map;for(let D=0;D<R.length;D++){const G=R[D];if(!fl(G))continue;const W=gl(G),U=G.params.vertexAttributes,V=[];for(const H in U){const $=U[H],Y=$.values;V.push([H,new at(Y,$.valuesPerElement,!0)])}const oe=[];if(G.params.topology!=="PerAttributeArray"){const H=G.params.faces;for(const $ in H)oe.push([$,H[$].values])}const K=W.texture,ce=y&&y[K];if(ce&&!g.has(K)){const{image:H,params:$}=ce,Y=new _a(H,$);P.push(Y),g.set(K,Y)}const ge=g.get(K),ie=ge?ge.id:void 0,j=W.material;let Q=v.get(j,K);if(k(Q)){const H=E[j.substring(j.lastIndexOf("/")+1)].params;H.transparency===1&&(H.transparency=0);const $=ce&&ce.alphaChannelUsage,Y=H.transparency>0||$==="transparency"||$==="maskAndTransparency",Ie=ce?ri(ce.alphaChannelUsage):void 0,Ae={ambient:xo(H.diffuse),diffuse:xo(H.diffuse),opacity:1-(H.transparency||0),transparent:Y,textureAlphaMode:Ie,textureAlphaCutoff:.33,textureId:ie,initTextureTransparent:!0,doubleSided:!0,cullFace:Ue.None,colorMixMode:H.externalColorMixMode||"tint",textureAlphaPremultiplied:!!ce&&!!ce.params.preMultiplyAlpha};b(_)&&_.materialParamsMixin&&Object.assign(Ae,_.materialParamsMixin),Q=new qt(Ae),v.set(j,K,Q)}C.push(Q);const de=new ma(Q,V,oe);T+=oe.position?oe.position.length:0,L.push(de)}return{engineResources:[{name:S,stageResources:{textures:P,materials:C,geometries:L},pivotOffset:A.model.pivotOffset,numberOfVertices:T,lodThreshold:null}],referenceBoundingBox:vl(L)}}(m,t);return{lods:x,referenceBoundingBox:p,isEsriSymbolResource:!1,isWosr:!0}}const o=await(t.cache?t.cache.loadGLTF(r.url,t,!!t.usePBR):Ui(new Hi(t.streamDataRequester),r.url,t,t.usePBR)),a=Ii(o.model.meta,"ESRI_proxyEllipsoid"),i=o.meta.isEsriSymbolResource&&b(a)&&o.meta.uri.includes("/RealisticTrees/");i&&!o.customMeta.esriTreeRendering&&(o.customMeta.esriTreeRendering=!0,function(m,x){for(let p=0;p<m.model.lods.length;++p){const u=m.model.lods[p];for(const _ of u.parts){const L=_.attributes.normal;if(k(L))return;const P=_.attributes.position,C=P.count,v=z(),A=z(),w=z(),S=Xe(Ct,C),R=Xe(st,C),E=Ni(zr(),_.transform);for(let y=0;y<C;y++){P.getVec(y,A),L.getVec(y,v),dt(A,A,_.transform),Ee(w,A,x.center),_o(w,w,x.radius);const T=w[2],g=Er(w),D=Math.min(.45+.55*g*g,1);_o(w,w,x.radius),E!==null&&dt(w,w,E),Dr(w,w),p+1!==m.model.lods.length&&m.model.lods.length>1&&yr(w,w,v,T>-1?.2:Math.min(-4*T-3.8,1)),R.setVec(y,w),S.set(y,0,255*D),S.set(y,1,255*D),S.set(y,2,255*D),S.set(y,3,255)}_.attributes.normal=R,_.attributes.color=S}}}(o,a));const n=!!t.usePBR,l=o.meta.isEsriSymbolResource?{usePBR:n,isSchematic:!1,treeRendering:i,mrrFactors:[0,1,.2]}:{usePBR:n,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},c={...t.materialParamsMixin,treeRendering:i},{engineResources:d,referenceBoundingBox:h}=ta(o,l,c,t.skipHighLods&&r.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:d,referenceBoundingBox:h,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1}},gltfToEngineResources:ta,parseUrl:ea},Symbol.toStringTag,{value:"Module"}));export{nl as I,rl as Q,Vs as c,Us as d,ql as o,Qa as p};
