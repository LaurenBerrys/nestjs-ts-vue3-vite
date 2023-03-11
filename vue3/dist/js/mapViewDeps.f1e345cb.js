import{f as de,n as pe,U as Q,j as fe,s as re,h as F,r as C,D as Xe,a as me,d as je,b as se,e as ue,c as ne,l as Ye,g as ge,i as Ke,M as $e,k as Je,m as Qe,t as q,v as Ze,u as ve,p as et,o as tt,q as it,w as be,x as rt,A as st,y as nt,z as Te,B as at,C as ot,E as lt,F as dt,G as ae,H as ut,I as xe,J as ht,K as ct}from"./index.8fd7165c.js";import{i as _t,C as pt,b as ft,e as we,r as mt,t as gt,a as vt,_ as bt,J as Tt,c as xt,d as wt,f as yt}from"./MagnifierPrograms.353c7e27.js";import{u as Hr,y as qr}from"./MagnifierPrograms.353c7e27.js";import{c as Et}from"./imageutils.463df5ec.js";import{t as Rt,i as Ft,o as ye,h as Ee,r as Bt}from"./Container.a5892366.js";import{n as Ot}from"./BufferPool.8dc92598.js";import{T as I,E as Y,S as oe}from"./color.4c5303e9.js";import{t as Mt,n as j,a as J,w as H,m as Pt}from"./WGLContainer.e7ddd41d.js";import{L as D}from"./enums.fb086c25.js";import{e as Ct,a as Z}from"./ProgramTemplate.4bbf0f5e.js";import{n as X}from"./programUtils.7c03b904.js";import{f as he,E as ce,x as z,s as St}from"./VertexArrayObject.1b8f3583.js";import{R as y,E as $,F as _e,O as le,I as Re,L as B,C as Fe,M as S,P as x,G as P,D as A,Y as L,V as k,B as At}from"./enums.64ab819c.js";import{o as Be,I as Dt}from"./RenderingContext.ee6c0064.js";import{b as Ut,x as It,N as zt,B as Nt,C as Lt,I as K,J as kt,Y as He,O as Oe}from"./definitions.ce677f69.js";import{t as Me}from"./VertexElementDescriptor.2925c6af.js";import{E as V}from"./Texture.fb0c670a.js";import{e as Gt}from"./imageUtils.c2d0d1ae.js";import{a as Vr}from"./GraphicsView2D.5baab708.js";import{i as jr}from"./GraphicContainer.7c4908c4.js";import{q as Pe}from"./Table.e9c997d5.js";import{t as Ce}from"./requestImageUtils.54152381.js";import"./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";import"./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";import"./NvapForm.feb8550d.js";import"./vue.a7ce1fbe.js";import"./vue-router.805f6e2a.js";import"./_commonjsHelpers.2f3e7994.js";import"./ExpandedCIM.e22c8b13.js";import"./BidiEngine.520adad3.js";import"./GeometryUtils.874f8cf4.js";import"./enums.13513a14.js";import"./MaterialKey.97cb3dc8.js";import"./Rect.6884a4ea.js";import"./quantizationUtils.1e9e702d.js";import"./floatRGBA.6f2fa7cd.js";import"./rasterizingUtils.3a0dd398.js";import"./GeometryUtils.82ab0a13.js";import"./Matcher.fe3c9df5.js";import"./visualVariablesUtils.1183f3fb.js";import"./visualVariablesUtils.de38be9a.js";import"./tileUtils.c2f19f52.js";import"./TurboLine.2982dc8d.js";import"./earcut.9f54f087.js";import"./devEnvironmentUtils.4eab2a99.js";import"./CircularArray.6cd6ba2b.js";import"./webgl-debug.ae38a7fa.js";import"./ComputedAttributeStorage.396dbaf7.js";import"./arcadeTimeUtils.e79f2f70.js";import"./executionError.fb3f283a.js";import"./centroid.e6a939c1.js";import"./utils.1f803f1b.js";import"./StyleDefinition.4f77c81e.js";import"./config.1337d16e.js";import"./NestedMap.1b5db22e.js";import"./OrderIndependentTransparency.0d2f697c.js";import"./basicInterfaces.b7051eb1.js";import"./doublePrecisionUtils.e3c3d0d8.js";import"./normalizeUtilsSync.1ac6b009.js";import"./projectionSupport.4aeb802f.js";import"./json.495fc412.js";import"./AttributeStoreView.413dc93f.js";import"./TiledDisplayObject.3b82e169.js";import"./schemaUtils.264ba82d.js";import"./util.79a0d0b9.js";import"./BaseGraphicContainer.5e700f86.js";import"./FeatureContainer.3aa1973d.js";import"./TileContainer.4bfeb0d8.js";import"./vec3f32.5805ce90.js";import"./vue-i18n.67a42238.js";const Ht=[137,80,78,71,13,10,26,10];function qt(a){if(!function(n){const s=new Uint8Array(n);return!Ht.some((o,d)=>o!==s[d])}(a))return!1;const e=new DataView(a),t=new Uint8Array(a);let r,i=8;do{const n=e.getUint32(i);if(r=String.fromCharCode.apply(String,Array.prototype.slice.call(t.subarray(i+4,i+8))),r==="acTL")return!0;i+=12+n}while(r!=="IEND"&&i<t.length);return!1}const Wt=[71,73,70];function Vt(a){if(!function(l){const u=new Uint8Array(l);return!Wt.some((h,c)=>h!==u[c])}(a))return!1;const e=new DataView(a),t=e.getUint8(10);let r=13+(128&t?3*2**(1+(7&t)):0),i=0,n=!1;for(;!n;){switch(e.getUint8(r++)){case 33:if(!s())return!1;break;case 44:o();break;case 59:n=!0;break;default:return!1}if(i>1)return!0}function s(){switch(e.getUint8(r++)){case 249:r++,r+=4,d();break;case 1:i++,r++,r+=12,d();break;case 254:d();break;case 255:r++,r+=8,r+=3,d();break;default:return!1}return!0}function o(){i++,r+=8;const l=e.getUint8(r++);r+=128&l?3*2**(1+(7&l)):0,r++,d()}function d(){let l;for(;l=e.getUint8(r++);)r+=l}return!1}const Xt={background:{"background.frag":`#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"background.vert":`precision mediump float;
attribute vec2 a_pos;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},circle:{"circle.frag":`precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"circle.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
#ifdef ID
v_id = u_id / 255.0;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},fill:{"fill.frag":`precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"fill.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},icon:{"icon.frag":`precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"icon.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
#ifdef ID
v_id = u_id / 255.0;
#endif
v_tex = a_tex.xy / u_mosaicSize;
}`},line:{"line.frag":`precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"line.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},outline:{"outline.frag":`varying lowp vec4 v_color;
varying mediump vec2 v_normal;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"outline.vert":`attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},text:{"text.frag":`uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"text.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`,"util.glsl":`float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}`}},jt=new Ct(function(a){let e=Xt;return a.split("/").forEach(t=>{e&&(e=e[t])}),e});function U(a){return jt.resolveIncludes(a)}const Se=a=>X({ID:a.id,PATTERN:a.pattern}),Yt={shaders:a=>({vertexShader:Se(a)+U("background/background.vert"),fragmentShader:Se(a)+U("background/background.frag")})},Ae=a=>X({ID:a.id}),Kt={shaders:a=>({vertexShader:Ae(a)+U("circle/circle.vert"),fragmentShader:Ae(a)+U("circle/circle.frag")})},De=a=>X({ID:a.id,PATTERN:a.pattern}),$t={shaders:a=>({vertexShader:De(a)+U("fill/fill.vert"),fragmentShader:De(a)+U("fill/fill.frag")})},Ue=a=>X({ID:a.id}),Jt={shaders:a=>({vertexShader:Ue(a)+U("outline/outline.vert"),fragmentShader:Ue(a)+U("outline/outline.frag")})},Ie=a=>X({ID:a.id,SDF:a.sdf}),Qt={shaders:a=>({vertexShader:Ie(a)+U("icon/icon.vert"),fragmentShader:Ie(a)+U("icon/icon.frag")})},ze=a=>X({ID:a.id,PATTERN:a.pattern,SDF:a.sdf}),Zt={shaders:a=>({vertexShader:ze(a)+U("line/line.vert"),fragmentShader:ze(a)+U("line/line.frag")})},Ne=a=>X({ID:a.id}),ei={shaders:a=>({vertexShader:Ne(a)+U("text/text.vert"),fragmentShader:Ne(a)+U("text/text.frag")})};let qe=class{constructor(){this._initialized=!1}dispose(){this._program=F(this._program),this._vertexArrayObject=F(this._vertexArrayObject)}render(a,e,t,r){a&&(this._initialized||this._initialize(a),a.setBlendFunctionSeparate(y.ONE,y.ONE_MINUS_SRC_ALPHA,y.ONE,y.ONE_MINUS_SRC_ALPHA),a.bindVAO(this._vertexArrayObject),a.useProgram(this._program),e.setSamplingMode(t),a.bindTexture(e,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",r),a.drawArrays($.TRIANGLE_STRIP,0,4),a.bindTexture(null,0),a.bindVAO())}_initialize(a){if(this._initialized)return!0;const e=Z(a,we);if(!e)return!1;const t=new Int8Array(16);t[0]=-1,t[1]=-1,t[2]=0,t[3]=0,t[4]=1,t[5]=-1,t[6]=1,t[7]=0,t[8]=-1,t[9]=1,t[10]=0,t[11]=1,t[12]=1,t[13]=1,t[14]=1,t[15]=1;const r=we.attributes,i=new he(a,r,Mt,{geometry:ce.createVertex(a,_e.STATIC_DRAW,t)});return this._program=e,this._vertexArrayObject=i,this._initialized=!0,!0}};const We=a=>a===I.HITTEST||a===I.LABEL_ALPHA,ti=({rendererInfo:a,drawPhase:e},t,r)=>`${t.getVariationHash()}-${(i=>(We(i)?1:0)|(i===I.HIGHLIGHT?2:0))(e)}-${a.getVariationHash()}-${C(r)&&r.join(".")}`,ii=Je(-.5,-.5);let ri=class extends J{constructor(){super(...arguments),this.defines=[],this._desc={vsPath:"fx/integrate",fsPath:"fx/integrate",attributes:new Map([["a_position",0]])}}dispose(){this._quad&&this._quad.dispose()}bind(){}unbind(){}draw(a,e){if(!(e!=null&&e.size))return;const{context:t,renderingOptions:r}=a;this._quad||(this._quad=new j(t,[0,0,1,0,0,1,1,1]));const i=t.getBoundFramebufferObject(),{x:n,y:s,width:o,height:d}=t.getViewport();e.bindTextures(t);const l=e.getBlock(zt);if(q(l))return;const u=l.getFBO(t),h=l.getFBO(t,1);t.setViewport(0,0,e.size,e.size),this._computeDelta(a,h,r.labelsAnimationTime),this._updateAnimationState(a,h,u),t.bindFramebuffer(i),t.setViewport(n,s,o,d)}_computeDelta(a,e,t){const{context:r,painter:i,displayLevel:n}=a,s=i.materialManager.getProgram(this._desc,["delta"]);r.bindFramebuffer(e),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),r.useProgram(s),s.setUniform1i("u_maskTexture",Nt),s.setUniform1i("u_sourceTexture",Lt),s.setUniform1f("u_timeDelta",a.deltaTime),s.setUniform1f("u_animationTime",t),s.setUniform1f("u_zoomLevel",Math.round(10*n)),this._quad.draw()}_updateAnimationState(a,e,t){const{context:r,painter:i}=a,n=i.materialManager.getProgram(this._desc,["update"]);r.bindTexture(e.colorTexture,1),r.useProgram(n),n.setUniform1i("u_sourceTexture",1),r.bindFramebuffer(t),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),this._quad.draw()}};class Le extends J{constructor(e){super(),this.name=this.constructor.name,this.defines=[e]}dispose(){}bind({context:e,painter:t}){this._prev=e.getBoundFramebufferObject();const{width:r,height:i}=e.getViewport(),n=t.getFbos(r,i).effect0;e.bindFramebuffer(n),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind(){}draw(e,t){const{context:r,painter:i}=e,n=i.getPostProcessingEffects(t),s=r.getBoundFramebufferObject();for(const{postProcessingEffect:o,effect:d}of n)o.draw(e,s,d);r.bindFramebuffer(this._prev),r.setStencilTestEnabled(!1),i.blitTexture(r,s.colorTexture,B.NEAREST),r.setStencilTestEnabled(!0)}}function ke(a,e,t){const r=new V(a,{target:S.TEXTURE_2D,pixelFormat:x.RGBA,dataType:P.UNSIGNED_BYTE,wrapMode:A.CLAMP_TO_EDGE,width:e,height:t,samplingMode:B.LINEAR});return[r,new z(a,{colorTarget:L.TEXTURE,depthStencilTarget:k.STENCIL_RENDER_BUFFER},r)]}class si extends J{constructor(){super(...arguments),this.defines=["highlight"],this._hlRenderer=new class{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),this._resources.highlightProgram.dispose(),this._resources.blurProgram.dispose(),this._resources=null)}preBlur(e,t){e.bindTexture(t,K),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",Rt),e.bindVAO(this._resources.quadVAO),e.drawArrays($.TRIANGLE_STRIP,0,4),e.bindVAO()}finalBlur(e,t){e.bindTexture(t,K),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",Ft),e.bindVAO(this._resources.quadVAO),e.drawArrays($.TRIANGLE_STRIP,0,4),e.bindVAO()}renderHighlight(e,t,r){e.bindTexture(t,K),e.useProgram(this._resources.highlightProgram),r.applyHighlightOptions(e,this._resources.highlightProgram),e.bindVAO(this._resources.quadVAO),e.setBlendingEnabled(!0),e.setBlendFunction(y.ONE,y.ONE_MINUS_SRC_ALPHA),e.drawArrays($.TRIANGLE_STRIP,0,4),e.bindVAO()}_initialize(e,t,r){this._width=t,this._height=r;const i=ce.createVertex(e,_e.STATIC_DRAW,new Int8Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]).buffer),n=new he(e,new Map([["a_position",0],["a_texcoord",1]]),{geometry:[new Me("a_position",2,Fe.BYTE,0,4),new Me("a_texcoord",2,Fe.UNSIGNED_BYTE,2,4)]},{geometry:i}),s=Z(e,gt),o=Z(e,vt);e.useProgram(s),s.setUniform1i("u_texture",K),s.setUniform1i("u_shade",kt),s.setUniform1f("u_sigma",ye),e.useProgram(o),o.setUniform1i("u_texture",K),o.setUniform1f("u_sigma",ye),this._resources={quadGeometry:i,quadVAO:n,highlightProgram:s,blurProgram:o}}setup(e,t,r){this._resources?(this._width=t,this._height=r):this._initialize(e,t,r)}},this._width=void 0,this._height=void 0,this._boundFBO=null,this._hlSurfaces=new class{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.sharedBlur1Tex.dispose(),this._resources.sharedBlur1Fbo.dispose(),this._resources.sharedBlur2Tex.dispose(),this._resources.sharedBlur2Fbo.dispose(),this._resources=Ze(this._resources))}_initialize(e,t,r){this._width=t,this._height=r;const[i,n]=ke(e,t,r),[s,o]=ke(e,t,r);this._resources={sharedBlur1Tex:i,sharedBlur1Fbo:n,sharedBlur2Tex:s,sharedBlur2Fbo:o}}setup(e,t,r){!this._resources||this._width===t&&this._height===r||this.dispose(),this._resources||this._initialize(e,t,r)}get sharedBlur1Tex(){return this._resources.sharedBlur1Tex}get sharedBlur1Fbo(){return this._resources.sharedBlur1Fbo}get sharedBlur2Tex(){return this._resources.sharedBlur2Tex}get sharedBlur2Fbo(){return this._resources.sharedBlur2Fbo}},this._adjustedWidth=void 0,this._adjustedHeight=void 0,this._blitRenderer=new qe}dispose(){var e,t;(e=this._hlSurfaces)==null||e.dispose(),(t=this._hlRenderer)==null||t.dispose(),this._boundFBO=null}bind(e){const{context:t,painter:r}=e,{width:i,height:n}=t.getViewport(),s=r.getFbos(i,n).effect0;this.setup(e,i,n),t.bindFramebuffer(s),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind(){}setup({context:e},t,r){this._width=t,this._height=r;const i=t%4,n=r%4;t+=i<2?-i:4-i,r+=n<2?-n:4-n,this._adjustedWidth=t,this._adjustedHeight=r,this._boundFBO=e.getBoundFramebufferObject();const s=Math.round(1*t),o=Math.round(1*r);this._hlRenderer.setup(e,s,o),this._hlSurfaces.setup(e,s,o)}draw(e){const{context:t,highlightGradient:r}=e;if(!r)return;const i=t.getBoundFramebufferObject();t.setViewport(0,0,1*this._adjustedWidth,1*this._adjustedHeight),t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setStencilTestEnabled(!1),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._blitRenderer.render(t,i.colorTexture,B.NEAREST,1),t.setStencilTestEnabled(!1),t.setBlendingEnabled(!1),t.setColorMask(!1,!1,!1,!0),t.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(t,this._hlSurfaces.sharedBlur1Tex),t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(t,this._hlSurfaces.sharedBlur2Tex),t.bindFramebuffer(this._boundFBO),t.setBlendingEnabled(!0),t.setColorMask(!0,!0,!0,!0),t.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(t,this._hlSurfaces.sharedBlur1Tex,r),this._boundFBO=null}}let ni=class extends J{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["hittest"]}dispose(){C(this._fbo)&&this._fbo.dispose()}createOptions({pixelRatio:a},e,t=He){if(!e.length)return null;const r=e.shift(),i=r.x,n=r.y;return this._outstanding=r,{type:"hittest",distance:t*a,position:[i,n]}}bind(a){const{context:e,attributeView:t}=a;if(!t.size)return;const r=t.getBlock(Oe);if(q(r))return;const i=r.getFBO(e);e.setViewport(0,0,t.size,t.size),e.bindFramebuffer(i),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT)}unbind(a){}draw(a){if(q(this._outstanding))return;const e=this._outstanding;this._outstanding=null,this._resolve(a,e.resolvers)}async _resolve(a,e){const{context:t,attributeView:r}=a,i=r.getBlock(Oe);if(q(i))return void e.forEach(l=>l.resolve([]));const n=i.getFBO(t),s=new Uint8Array(n.width*n.height*4);try{await n.readPixelsAsync(0,0,n.width,n.height,x.RGBA,P.UNSIGNED_BYTE,s)}catch{return void e.forEach(u=>u.resolve([]))}const o=[];for(let l=0;l<s.length;l+=4){const u=s[l],h=s[l+3];u&&o.push({id:l/4,directHits:h})}o.sort((l,u)=>u.directHits===l.directHits?u.id-l.id:u.directHits-l.directHits);const d=o.map(l=>l.id);e.forEach(l=>l.resolve(d))}},ai=class extends J{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["id"],this._lastSize=0,this._boundFBO=null}dispose(){C(this._fbo)&&this._fbo.dispose()}bind({context:a,painter:e}){const{width:t,height:r}=a.getViewport();this._boundFBO=a.getBoundFramebufferObject();const i=e.getFbos(t,r).effect0;a.bindFramebuffer(i),a.setColorMask(!0,!0,!0,!0),a.setClearColor(0,0,0,0),a.clear(a.gl.COLOR_BUFFER_BIT)}unbind({context:a}){a.bindFramebuffer(this._boundFBO),this._boundFBO=null}draw(a,e,t=2*He){this._resolve(a,e,t)}async _resolve({context:a,state:e,pixelRatio:t},r,i){const n=a.getBoundFramebufferObject(),s=e.size[1]*t,o=Math.round(i*t),d=o/2,l=o/2;this._ensureBuffer(o),r.forEach(async(u,h)=>{const c=new Map,_=Math.floor(h.x*t-o/2),g=Math.floor(s-h.y*t-o/2);await n.readPixelsAsync(_,g,o,o,x.RGBA,P.UNSIGNED_BYTE,this._buf);for(let v=0;v<this._buf32.length;v++){const E=this._buf32[v];if(E!==4294967295&&E!==0){const f=v%o,O=o-Math.floor(v/o),b=(d-f)*(d-f)+(l-O)*(l-O),m=c.has(E)?c.get(E):4294967295;c.set(E,Math.min(b,m))}}const T=Array.from(c).sort((v,E)=>v[1]-E[1]).map(v=>v[0]);u.resolve(T),r.delete(h)})}_ensureBuffer(a){this._lastSize!==a&&(this._lastSize=a,this._buf=new Uint8Array(4*a*a),this._buf32=new Uint32Array(this._buf.buffer))}};const oi=[1,0],li=[0,1],di=[1,.8,.6,.4,.2],ui=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];class hi{constructor(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(5),this._nMips=5,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){if(this._quad=F(this._quad),this._intensityFBO=F(this._intensityFBO),this._compositeFBO=F(this._compositeFBO),this._mipsFBOs){for(let e=0;e<this._nMips;e++)this._mipsFBOs[e]&&(this._mipsFBOs[e].horizontal.dispose(),this._mipsFBOs[e].vertical.dispose());this._mipsFBOs=null}}draw(e,t,r){const{width:i,height:n}=t,{context:s,painter:o}=e,{materialManager:d}=o,l=s.gl,u=this._programDesc,{strength:h,radius:c,threshold:_}=r;this._quad||(this._quad=new j(s,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(e,i,n),s.setStencilTestEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(y.ONE,y.ONE_MINUS_SRC_ALPHA),s.setStencilWriteMask(0);const g=this._quad;g.bind(),s.bindFramebuffer(this._intensityFBO);const T=d.getProgram(u.luminosityHighPass);s.useProgram(T),s.bindTexture(t.colorTexture,0),T.setUniform1i("u_texture",0),T.setUniform3fv("u_defaultColor",[0,0,0]),T.setUniform1f("u_defaultOpacity",0),T.setUniform1f("u_luminosityThreshold",_),T.setUniform1f("u_smoothWidth",.01);const v=[Math.round(i/2),Math.round(n/2)];s.setViewport(0,0,v[0],v[1]),s.setClearColor(0,0,0,0),s.clear(l.COLOR_BUFFER_BIT),g.draw(),s.setBlendingEnabled(!1);let E=this._intensityFBO.colorTexture;for(let b=0;b<this._nMips;b++){const m=d.getProgram(u.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[b]}]);s.useProgram(m),s.bindTexture(E,b+1),m.setUniform1i("u_colorTexture",b+1),m.setUniform2fv("u_texSize",v),m.setUniform2fv("u_direction",oi),s.setViewport(0,0,v[0],v[1]);const w=this._mipsFBOs[b];s.bindFramebuffer(w.horizontal),g.draw(),E=w.horizontal.colorTexture,s.bindFramebuffer(w.vertical),s.bindTexture(E,b+1),m.setUniform2fv("u_direction",li),g.draw(),E=w.vertical.colorTexture,v[0]=Math.round(v[0]/2),v[1]=Math.round(v[1]/2)}s.setViewport(0,0,i,n);const f=d.getProgram(u.composite,[{name:"nummips",value:5}]);s.bindFramebuffer(this._compositeFBO),s.useProgram(f),f.setUniform1f("u_bloomStrength",h),f.setUniform1f("u_bloomRadius",c),f.setUniform1fv("u_bloomFactors",di),f.setUniform3fv("u_bloomTintColors",ui),s.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),f.setUniform1i("u_blurTexture1",1),s.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),f.setUniform1i("u_blurTexture2",2),s.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),f.setUniform1i("u_blurTexture3",3),s.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),f.setUniform1i("u_blurTexture4",4),s.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),f.setUniform1i("u_blurTexture5",5),g.draw(),s.bindFramebuffer(t),s.setBlendingEnabled(!0);const O=d.getProgram(u.blit);s.useProgram(O),s.bindTexture(this._compositeFBO.colorTexture,6),O.setUniform1i("u_texture",6),s.setBlendFunction(y.ONE,y.ONE),g.draw(),g.unbind(),s.setBlendFunction(y.ONE,y.ONE_MINUS_SRC_ALPHA),s.setStencilTestEnabled(!0)}_createOrResizeResources(e,t,r){const{context:i}=e;if(this._compositeFBO&&this._size[0]===t&&this._size[1]===r)return;this._size[0]=t,this._size[1]=r;const n=[Math.round(t/2),Math.round(r/2)];this._compositeFBO?this._compositeFBO.resize(t,r):this._compositeFBO=new z(i,{colorTarget:L.TEXTURE,depthStencilTarget:k.NONE,width:t,height:r}),this._intensityFBO?this._intensityFBO.resize(n[0],n[1]):this._intensityFBO=new z(i,{colorTarget:L.TEXTURE,depthStencilTarget:k.NONE,width:n[0],height:n[1]},{target:S.TEXTURE_2D,pixelFormat:x.RGBA,internalFormat:x.RGBA,dataType:P.UNSIGNED_BYTE,wrapMode:A.CLAMP_TO_EDGE,samplingMode:B.LINEAR,flipped:!1,width:n[0],height:n[1]});for(let s=0;s<this._nMips;s++)this._mipsFBOs[s]?(this._mipsFBOs[s].horizontal.resize(n[0],n[1]),this._mipsFBOs[s].vertical.resize(n[0],n[1])):this._mipsFBOs[s]={horizontal:new z(i,{colorTarget:L.TEXTURE,depthStencilTarget:k.NONE,width:n[0],height:n[1]},{target:S.TEXTURE_2D,pixelFormat:x.RGBA,internalFormat:x.RGBA,dataType:P.UNSIGNED_BYTE,wrapMode:A.CLAMP_TO_EDGE,samplingMode:B.LINEAR,flipped:!1,width:n[0],height:n[1]}),vertical:new z(i,{colorTarget:L.TEXTURE,depthStencilTarget:k.NONE,width:n[0],height:n[1]},{target:S.TEXTURE_2D,pixelFormat:x.RGBA,internalFormat:x.RGBA,dataType:P.UNSIGNED_BYTE,wrapMode:A.CLAMP_TO_EDGE,samplingMode:B.LINEAR,flipped:!1,width:n[0],height:n[1]})},n[0]=Math.round(n[0]/2),n[1]=Math.round(n[1]/2)}}const ci=[1,0],_i=[0,1];class pi{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(e,t,r){const{context:i}=e,{type:n,radius:s}=r;if(s===0)return;this._createOrResizeResources(e),this._quad||(this._quad=new j(i,[-1,-1,1,-1,-1,1,1,1]));const o=this._quad;o.bind(),n==="blur"?this._gaussianBlur(e,t,s):this._radialBlur(e,t),o.unbind()}_gaussianBlur(e,t,r){const{context:i,state:n,painter:s,pixelRatio:o}=e,{size:d}=n,{materialManager:l}=s,u=this._programDesc,h=this._quad,c=[Math.round(o*d[0]),Math.round(o*d[1])],_=this._blurFBO,g=l.getProgram(u.gaussianBlur,[{name:"radius",value:Math.ceil(r)}]);i.useProgram(g),i.setBlendingEnabled(!1),i.bindFramebuffer(_),i.bindTexture(t.colorTexture,4),g.setUniform1i("u_colorTexture",4),g.setUniform2fv("u_texSize",c),g.setUniform2fv("u_direction",ci),g.setUniform1f("u_sigma",r),h.draw(),i.bindFramebuffer(t),i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.bindTexture(_==null?void 0:_.colorTexture,5),g.setUniform1i("u_colorTexture",5),g.setUniform2fv("u_direction",_i),h.draw(),i.setBlendingEnabled(!0),i.setBlendFunction(y.ONE,y.ONE_MINUS_SRC_ALPHA),i.setStencilTestEnabled(!0)}_radialBlur(e,t){const{context:r,painter:i}=e,{materialManager:n}=i,s=this._programDesc,o=this._quad,d=this._blurFBO;r.bindFramebuffer(d);const l=n.getProgram(s.radialBlur);r.useProgram(l),r.setBlendingEnabled(!1),r.bindTexture(t.colorTexture,4),l.setUniform1i("u_colorTexture",4),o.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setBlendingEnabled(!0);const u=n.getProgram(s.blit);r.useProgram(u),r.bindTexture(d==null?void 0:d.colorTexture,5),u.setUniform1i("u_texture",5),r.setBlendFunction(y.ONE,y.ONE_MINUS_SRC_ALPHA),o.draw()}_createOrResizeResources(e){const{context:t,state:r,pixelRatio:i}=e,{size:n}=r,s=Math.round(i*n[0]),o=Math.round(i*n[1]);this._blurFBO&&this._size[0]===s&&this._size[1]===o||(this._size[0]=s,this._size[1]=o,this._blurFBO?this._blurFBO.resize(s,o):this._blurFBO=new z(t,{colorTarget:L.TEXTURE,depthStencilTarget:k.NONE,width:s,height:o},{target:S.TEXTURE_2D,pixelFormat:x.RGBA,internalFormat:x.RGBA,dataType:P.UNSIGNED_BYTE,wrapMode:A.CLAMP_TO_EDGE,samplingMode:B.LINEAR,flipped:!1,width:s,height:o}))}}class fi{constructor(){this._layerFBOTexture=null,this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture=F(this._layerFBOTexture)}draw(e,t,r){const{width:i,height:n}=t;this._createOrResizeResources(e,i,n);const{context:s,painter:o}=e,{materialManager:d}=o,l=this._programDesc,u=this._quad,h=r.colorMatrix;u.bind();const c=this._layerFBOTexture;s.bindFramebuffer(t),t.copyToTexture(0,0,i,n,0,0,c),s.setBlendingEnabled(!1),s.setStencilTestEnabled(!1);const _=d.getProgram(l);s.useProgram(_),s.bindTexture(c,2),_.setUniformMatrix4fv("u_coefficients",h),_.setUniform1i("u_colorTexture",2),u.draw(),s.setBlendingEnabled(!0),s.setBlendFunction(y.ONE,y.ONE_MINUS_SRC_ALPHA),s.setStencilTestEnabled(!0),u.unbind()}_createOrResizeResources(e,t,r){const{context:i}=e;this._layerFBOTexture&&this._size[0]===t&&this._size[1]===r||(this._size[0]=t,this._size[1]=r,this._layerFBOTexture?this._layerFBOTexture.resize(t,r):this._layerFBOTexture=new V(i,{target:S.TEXTURE_2D,pixelFormat:x.RGBA,internalFormat:x.RGBA,dataType:P.UNSIGNED_BYTE,wrapMode:A.CLAMP_TO_EDGE,samplingMode:B.LINEAR,flipped:!1,width:t,height:r}),this._quad||(this._quad=new j(i,[-1,-1,1,-1,-1,1,1,1])))}}const mi=[1,0],gi=[0,1];class vi{constructor(){this._layerFBOTexture=null,this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._quad=null,this._programDesc={blur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._layerFBOTexture=F(this._layerFBOTexture),this._horizontalBlurFBO=F(this._horizontalBlurFBO),this._verticalBlurFBO=F(this._verticalBlurFBO)}draw(e,t,r){const{context:i,state:n,painter:s}=e,{materialManager:o}=s,d=this._programDesc,l=t.width,u=t.height,h=[Math.round(l),Math.round(u)],{blurRadius:c,offsetX:_,offsetY:g,color:T}=r,v=[ve(_),ve(g)];this._createOrResizeResources(e,l,u,h);const E=this._horizontalBlurFBO,f=this._verticalBlurFBO;i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1);const O=this._layerFBOTexture;t.copyToTexture(0,0,l,u,0,0,O),this._quad||(this._quad=new j(i,[-1,-1,1,-1,-1,1,1,1])),i.setViewport(0,0,h[0],h[1]);const b=this._quad;b.bind(),i.setBlendingEnabled(!1);const m=o.getProgram(d.blur,[{name:"radius",value:Math.ceil(c)}]);i.useProgram(m),i.bindFramebuffer(E),i.bindTexture(t.colorTexture,4),m.setUniform1i("u_colorTexture",4),m.setUniform2fv("u_texSize",h),m.setUniform2fv("u_direction",mi),m.setUniform1f("u_sigma",c),b.draw(),i.bindFramebuffer(f),i.bindTexture(E==null?void 0:E.colorTexture,5),m.setUniform1i("u_colorTexture",5),m.setUniform2fv("u_direction",gi),b.draw(),i.bindFramebuffer(t),i.setViewport(0,0,l,u);const w=o.getProgram(d.composite);i.useProgram(w),i.bindTexture(f==null?void 0:f.colorTexture,2),w.setUniform1i("u_blurTexture",2),i.bindTexture(O,3),w.setUniform1i("u_layerFBOTexture",3),w.setUniform4fv("u_shadowColor",[T[3]*(T[0]/255),T[3]*(T[1]/255),T[3]*(T[2]/255),T[3]]),w.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),w.setUniform2fv("u_shadowOffset",v),b.draw(),i.setBlendingEnabled(!0),i.setStencilTestEnabled(!0),i.setBlendFunction(y.ONE,y.ONE_MINUS_SRC_ALPHA),b.unbind()}_createOrResizeResources(e,t,r,i){const{context:n}=e;this._horizontalBlurFBO&&this._size[0]===t&&this._size[1]===r||(this._size[0]=t,this._size[1]=r,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(i[0],i[1]):this._horizontalBlurFBO=new z(n,{colorTarget:L.TEXTURE,depthStencilTarget:k.NONE,width:i[0],height:i[1]},{target:S.TEXTURE_2D,pixelFormat:x.RGBA,internalFormat:x.RGBA,dataType:P.UNSIGNED_BYTE,wrapMode:A.CLAMP_TO_EDGE,samplingMode:B.LINEAR,flipped:!1,width:i[0],height:i[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(i[0],i[1]):this._verticalBlurFBO=new z(n,{colorTarget:L.TEXTURE,depthStencilTarget:k.NONE,width:i[0],height:i[1]},{target:S.TEXTURE_2D,pixelFormat:x.RGBA,internalFormat:x.RGBA,dataType:P.UNSIGNED_BYTE,wrapMode:A.CLAMP_TO_EDGE,samplingMode:B.LINEAR,flipped:!1,width:i[0],height:i[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(t,r):this._layerFBOTexture=new V(n,{target:S.TEXTURE_2D,pixelFormat:x.RGBA,internalFormat:x.RGBA,dataType:P.UNSIGNED_BYTE,wrapMode:A.CLAMP_TO_EDGE,samplingMode:B.LINEAR,flipped:!1,width:t,height:r}))}}class bi{constructor(){this._size=[0,0],this._layerFBOTexture=null}dispose(){this._layerFBOTexture=F(this._layerFBOTexture)}draw(e,t,r){const{width:i,height:n}=t;this._createOrResizeResources(e,i,n);const{context:s,painter:o}=e,{amount:d}=r,l=s.gl,u=this._layerFBOTexture;s.bindFramebuffer(t),t.copyToTexture(0,0,i,n,0,0,u),s.setBlendingEnabled(!0),s.setStencilTestEnabled(!1),s.setDepthTestEnabled(!1),s.setClearColor(0,0,0,0),s.clear(l.COLOR_BUFFER_BIT),o.blitTexture(s,u,B.NEAREST,d)}_createOrResizeResources(e,t,r){const{context:i}=e;this._layerFBOTexture&&this._size[0]===t&&this._size[1]===r||(this._size[0]=t,this._size[1]=r,this._layerFBOTexture?this._layerFBOTexture.resize(t,r):this._layerFBOTexture=new V(i,{target:S.TEXTURE_2D,pixelFormat:x.RGBA,internalFormat:x.RGBA,dataType:P.UNSIGNED_BYTE,wrapMode:A.CLAMP_TO_EDGE,samplingMode:B.NEAREST,flipped:!1,width:t,height:r}))}}function Ti(a){switch(a){case"bloom":case"blur":case"opacity":case"drop-shadow":return a;default:return"colorize"}}const xi={colorize:()=>new fi,blur:()=>new pi,bloom:()=>new hi,opacity:()=>new bi,"drop-shadow":()=>new vi};class wi{constructor(){this._effectMap=new Map}dispose(){this._effectMap.forEach(e=>e.dispose()),this._effectMap.clear()}getPostProcessingEffects(e){if(!e||e.length===0)return[];const t=[];for(const r of e){const i=Ti(r.type);let n=this._effectMap.get(i);n||(n=xi[i](),this._effectMap.set(i,n)),t.push({postProcessingEffect:n,effect:r})}return t}}class yi{constructor(e,t){this.brushes=e,this.name=t.name,this.drawPhase=t.drawPhase||I.MAP,this._targetFn=t.target,this.effects=t.effects||[],this.enableDefaultDraw=t.enableDefaultDraw??(()=>!0)}render(e){const{context:t,profiler:r}=e,i=this._targetFn(),n=this.drawPhase&e.drawPhase;if(r.recordPassStart(this.name),n){this.enableDefaultDraw()&&this._doRender(e,i),r.recordPassEnd();for(const s of this.effects){if(!s.enable())continue;const o=s.apply,d=s.args&&s.args(),l=t.getViewport(),u=t.getBoundFramebufferObject(),h=e.passOptions;this._bindEffect(e,o,d),this._doRender(e,i,o.defines),this._drawAndUnbindEffect(e,o,l,u,h,d)}}}_doRender(e,t,r){if(q(t))return;const{profiler:i,context:n}=e;for(const s of this.brushes){if(i.recordBrushStart(s.name),C(s.brushEffect)){const o=n.getViewport(),d=n.getBoundFramebufferObject(),l=e.passOptions;this._bindEffect(e,s.brushEffect),this._drawWithBrush(s,e,t,r),this._drawAndUnbindEffect(e,s.brushEffect,o,d,l)}else this._drawWithBrush(s,e,t,r);i.recordBrushEnd()}}_drawWithBrush(e,t,r,i){et(r)?(e.prepareState(t,i),e.drawMany(t,r,i)):r.visible&&(e.prepareState(t,i),e.draw(t,r,i))}_bindEffect(e,t,r){const{profiler:i}=e;i.recordPassStart(this.name+"."+t.name),t.bind(e,r);const n=t.createOptions(e,r);e.passOptions=n}_drawAndUnbindEffect(e,t,r,i,n,s){const{profiler:o,context:d}=e;e.passOptions=n,o.recordBrushStart(t.name),t.draw(e,s),t.unbind(e,s),d.bindFramebuffer(i);const{x:l,y:u,width:h,height:c}=r;d.setViewport(l,u,h,c),o.recordBrushEnd(),o.recordPassEnd()}}class Ei{constructor(e,t,r){this.context=e,this._blitRenderer=new qe,this._worldExtentClipRenderer=new class{constructor(){this._centerNdc=se(),this._pxToNdc=se(),this._worldDimensionsPx=se(),this._mat3=ue(),this._initialized=!1}dispose(){this._program=F(this._program),this._quad=F(this._quad)}render(i,n){const{context:s}=i;return!!this._updateGeometry(i,n)&&(this._initialized||this._initialize(s),s.setDepthWriteEnabled(!1),s.setDepthTestEnabled(!1),s.setColorMask(!1,!1,!1,!1),s.setBlendingEnabled(!1),s.setStencilOp(le.KEEP,le.KEEP,le.REPLACE),s.setStencilFunction(Re.ALWAYS,1,255),s.setStencilTestEnabled(!0),s.useProgram(this._program),this._program.setUniformMatrix3fv("u_worldExtent",this._mat3),this._quad.draw(),this._quad.unbind(),!0)}_initialize(i){if(this._initialized)return;const n=Z(i,mt);n&&(this._program=n,this._quad=new j(i,[0,0,1,0,0,1,1,1]),this._initialized=!0)}_updateGeometry(i,n){const{state:s,pixelRatio:o}=i,{size:d,rotation:l}=s,u=Math.round(d[0]*o),h=Math.round(d[1]*o);if(!s.spatialReference.isWrappable)return!1;const c=Qe(l),_=Math.abs(Math.cos(c)),g=Math.abs(Math.sin(c)),T=Math.round(u*_+h*g),v=Math.round(s.worldScreenWidth);if(T<=v)return!1;const E=u*g+h*_,f=v*o,O=(n.left-n.right)*o/u,b=(n.bottom-n.top)*o/h;ne(this._worldDimensionsPx,f,E,1),ne(this._pxToNdc,2/u,-2/h,1),ne(this._centerNdc,O,b,1);const m=this._mat3;return Ye(m,this._centerNdc),ge(m,m,this._pxToNdc),l!==0&&Ke(m,m,c),ge(m,m,this._worldDimensionsPx),$e(m,m,ii),!0}},this._isClippedToWorldExtent=!1,this._brushCache=new Map,this._lastWidth=null,this._lastHeight=null,this._prevFBO=null,this._vtlMaterialManager=new class{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach(i=>i.dispose()),this._programByKey.clear()}getMaterialProgram(i,n,s){const o=n.key<<3|this._getMaterialOptionsValue(n.type,s);if(this._programByKey.has(o))return this._programByKey.get(o);const d=this._getProgramTemplate(n.type),{shaders:l}=d,{vertexShader:u,fragmentShader:h}=l(s),c=n.getShaderHeader(),_=n.getShaderMain(),g=u.replace("#pragma header",c).replace("#pragma main",_),T=i.programCache.acquire(g,h,n.getAttributeLocations());return this._programByKey.set(o,T),T}_getMaterialOptionsValue(i,n){switch(i){case D.BACKGROUND:{const s=n;return(s.pattern?1:0)<<1|(s.id?1:0)}case D.FILL:{const s=n;return(s.pattern?1:0)<<1|(s.id?1:0)}case D.OUTLINE:return n.id?1:0;case D.LINE:{const s=n;return(s.sdf?1:0)<<2|(s.pattern?1:0)<<1|(s.id?1:0)}case D.ICON:{const s=n;return(s.sdf?1:0)<<1|(s.id?1:0)}case D.CIRCLE:case D.TEXT:return n.id?1:0;default:return 0}}_getProgramTemplate(i){switch(i){case D.BACKGROUND:return Yt;case D.CIRCLE:return Kt;case D.FILL:return $t;case D.ICON:return Qt;case D.LINE:return Zt;case D.OUTLINE:return Jt;case D.TEXT:return ei;default:return null}}},this._blendEffect=new bt,this._stencilBuf=null,this._fbos=null,this._fboPool=[],this._renderTarget=null,this.effects={highlight:new si,hittest:new ni,hittestVTL:new ai,integrate:new ri,insideEffect:new Le("inside"),outsideEffect:new Le("outside")},this.materialManager=new class{constructor(i){this._rctx=i,this._programByKey=new Map}dispose(){this._programByKey.forEach(i=>i.dispose()),this._programByKey.clear()}getProgram(i,n=[]){const s=i.vsPath+"."+i.fsPath+JSON.stringify(n);if(this._programByKey.has(s))return this._programByKey.get(s);const o={...n.map(_=>typeof _=="string"?{name:_,value:!0}:_).reduce((_,g)=>({..._,[g.name]:g.value}),{})},{vsPath:d,fsPath:l,attributes:u}=i,h=Be(d,l,u,o),c=this._rctx.programCache.acquire(h.shaders.vertexShader,h.shaders.fragmentShader,h.attributes);if(!c)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(s,c),c}getMaterialProgram(i,n,s,o,d){const l=ti(i,n,d);if(this._programByKey.has(l))return this._programByKey.get(l);const u=((_,g,T,v={})=>{if(v={...v,...g.getVariation(),..._.rendererInfo.getVariation(),highlight:_.drawPhase===I.HIGHLIGHT,id:We(_.drawPhase)},C(T))for(const E of T)v[E]=!0;return v})(i,n,d,{ignoresSamplerPrecision:i.context.driverTest.ignoresSamplerPrecision.result}),h=Be(s,s,o,u),c=this._rctx.programCache.acquire(h.shaders.vertexShader,h.shaders.fragmentShader,h.attributes);if(!c)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(l,c),c}}(e),this.textureManager=new Tt(t,r,e.type===me.WEBGL2),this.textureUploadManager=new class{constructor(i,n){this._queue=[],this._context=i,this._refreshable=n}destroy(){this._queue=[]}enqueueTextureUpdate(i,n){const s=Xe(),o=i,d=It,l=Math.ceil(o.height/d);if(de(n),this._context.type===me.WEBGL1)this._queue.push({type:"no-chunk",request:i,resolver:s,options:n});else for(let u=0;u<l;u++){const h=u*d,c=u===l-1,_=c?o.height-d*u:d;this._queue.push({type:"chunk",request:i,resolver:s,chunk:u,chunkOffset:h,destHeight:_,chunkIsLast:c,options:n})}return je(n,u=>s.reject(u)),s.promise}upload(){let i=0;for(;this._queue.length;){const n=performance.now(),s=this._queue.shift();if(s){if(C(s.options.signal)&&s.options.signal.aborted)continue;switch(s.type){case"chunk":this._uploadChunk(s);break;case"no-chunk":this._uploadNoChunk(s)}const o=performance.now()-n;if(i+=o,i+o>=Ut)break}}this._queue.length&&this._refreshable.requestRender()}_uploadChunk(i){const{request:n,resolver:s,chunkOffset:o,chunkIsLast:d,destHeight:l}=i,{data:u,texture:h,width:c}=n;C(u)&&(h.updateData(0,0,o,c,l,u,o),d&&s.resolve())}_uploadNoChunk(i){const{request:n,resolver:s}=i,{data:o,texture:d}=n;d.setData(o),s.resolve()}}(e,t),this._effectsManager=new wi}get vectorTilesMaterialManager(){return this._vtlMaterialManager}getRenderTarget(){return this._renderTarget}setRenderTarget(e){this._renderTarget=e}getFbos(e,t){if(e!==this._lastWidth||t!==this._lastHeight){if(this._lastWidth=e,this._lastHeight=t,this._fbos){for(const s in this._fbos)this._fbos[s].resize(e,t);return this._fbos}const r={target:S.TEXTURE_2D,pixelFormat:x.RGBA,dataType:P.UNSIGNED_BYTE,samplingMode:B.NEAREST,wrapMode:A.CLAMP_TO_EDGE,width:e,height:t},i={colorTarget:L.TEXTURE,depthStencilTarget:k.DEPTH_STENCIL_RENDER_BUFFER},n=new St(this.context,{width:e,height:t,internalFormat:At.DEPTH_STENCIL});this._stencilBuf=n,this._fbos={output:new z(this.context,i,r,n),blend:new z(this.context,i,r,n),effect0:new z(this.context,i,r,n)}}return this._fbos}acquireFbo(e,t){let r;r=this._fboPool.length>0?this._fboPool.pop():new z(this.context,{colorTarget:L.TEXTURE,depthStencilTarget:k.DEPTH_STENCIL_RENDER_BUFFER},{target:S.TEXTURE_2D,pixelFormat:x.RGBA,dataType:P.UNSIGNED_BYTE,samplingMode:B.NEAREST,wrapMode:A.CLAMP_TO_EDGE,width:e,height:t},this._stencilBuf);const i=r.descriptor;return i.width===e&&i.height===t||r.resize(e,t),r}releaseFbo(e){this._fboPool.push(e)}getSharedStencilBuffer(){return this._stencilBuf}beforeRenderLayers(e,t=null){const{width:r,height:i}=e.getViewport();this._prevFBO=e.getBoundFramebufferObject();const n=this.getFbos(r,i);if(e.bindFramebuffer(n==null?void 0:n.output),e.setColorMask(!0,!0,!0,!0),C(t)){const{r:s,g:o,b:d,a:l}=t.color;e.setClearColor(l*s/255,l*o/255,l*d/255,l)}else e.setClearColor(0,0,0,0);e.setDepthWriteEnabled(!0),e.setClearDepth(1),e.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.setDepthWriteEnabled(!1)}beforeRenderLayer(e,t,r){var l;const{context:i,blendMode:n,effects:s,requireFBO:o,drawPhase:d}=e;if(o||Ge(d,n,s,r))i.bindFramebuffer((l=this._fbos)==null?void 0:l.blend),i.setColorMask(!0,!0,!0,!0),i.setClearColor(0,0,0,0),i.setDepthWriteEnabled(!0),i.setClearDepth(1),i.clear(i.gl.COLOR_BUFFER_BIT|i.gl.DEPTH_BUFFER_BIT),i.setDepthWriteEnabled(!1);else{const u=this._getOutputFBO();i.bindFramebuffer(u)}i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setStencilTestEnabled(!0),i.setClearStencil(t),i.setStencilWriteMask(255),i.clear(i.gl.STENCIL_BUFFER_BIT)}compositeLayer(e,t){const{context:r,blendMode:i,effects:n,requireFBO:s,drawPhase:o}=e;if(s||Ge(o,i,n,t)){C(n)&&n.length>0&&o===I.MAP&&this._applyEffects(e,n);const d=this._getOutputFBO();r.bindFramebuffer(d),r.setStencilTestEnabled(!1),r.setStencilWriteMask(0),r.setBlendingEnabled(!0),r.setBlendFunctionSeparate(y.ONE,y.ONE_MINUS_SRC_ALPHA,y.ONE,y.ONE_MINUS_SRC_ALPHA),r.setColorMask(!0,!0,!0,!0);const l=q(i)||o===I.HIGHLIGHT?"normal":i,u=this._fbos;u!=null&&u.blend.colorTexture&&this._blendEffect.draw(e,u.blend.colorTexture,B.NEAREST,l,t)}}renderLayers(e){e.bindFramebuffer(this._prevFBO);const t=this._getOutputFBO();t&&(e.setDepthTestEnabled(!1),e.setStencilWriteMask(0),this._isClippedToWorldExtent?(e.setStencilTestEnabled(!0),e.setStencilFunction(Re.EQUAL,1,255)):e.setStencilTestEnabled(!1),this.blitTexture(e,t.colorTexture,B.NEAREST))}prepareDisplay(e,t,r){const{context:i}=e;if(i.bindFramebuffer(this._prevFBO),i.setColorMask(!0,!0,!0,!0),C(t)){const{r:n,g:s,b:o,a:d}=t.color;i.setClearColor(d*n/255,d*s/255,d*o/255,d)}else i.setClearColor(0,0,0,0);i.setStencilWriteMask(255),i.setClearStencil(0),i.clear(i.gl.COLOR_BUFFER_BIT|i.gl.STENCIL_BUFFER_BIT),this._isClippedToWorldExtent=this._worldExtentClipRenderer.render(e,r)}dispose(){if(this.materialManager.dispose(),this.textureManager.dispose(),this.textureUploadManager.destroy(),this._blitRenderer=F(this._blitRenderer),this._worldExtentClipRenderer=F(this._worldExtentClipRenderer),this._brushCache&&(this._brushCache.forEach(e=>e.dispose()),this._brushCache.clear(),this._brushCache=null),this._fbos)for(const e in this._fbos)this._fbos[e]&&this._fbos[e].dispose();for(const e of this._fboPool)e.dispose();if(this._fboPool.length=0,this.effects)for(const e in this.effects)this.effects[e]&&this.effects[e].dispose();this._effectsManager.dispose(),this._vtlMaterialManager=F(this._vtlMaterialManager),this._prevFBO=null}getBrush(e,t){const r=function(n,s){switch(n){case Y.LINE:return H.line;case Y.TEXT:return H.text;case Y.LABEL:return H.label;case Y.FILL:return s===oe.DOT_DENSITY?H.dotDensity:H.fill;case Y.MARKER:switch(s){case oe.HEATMAP:return H.heatmap;case oe.PIE_CHART:return H.pieChart;default:return H.marker}}}(e,t);let i=this._brushCache.get(r);return i===void 0&&(i=new r,this._brushCache.set(r,i)),i}renderObject(e,t,r,i){const n=H[r];if(!n)return;let s=this._brushCache.get(n);s===void 0&&(s=new n,this._brushCache.set(n,s)),s.prepareState(e,i),s.draw(e,t,i)}renderObjects(e,t,r,i){const n=H[r];if(!n)return;let s=this._brushCache.get(n);s===void 0&&(s=new n,this._brushCache.set(n,s)),s.drawMany(e,t,i)}registerRenderPass(e){const t=e.brushes.map(r=>(this._brushCache.has(r)||this._brushCache.set(r,new r),this._brushCache.get(r)));return new yi(t,e)}blitTexture(e,t,r,i=1){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(y.ONE,y.ONE_MINUS_SRC_ALPHA,y.ONE,y.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),this._blitRenderer.render(e,t,r,i)}getPostProcessingEffects(e){return this._effectsManager.getPostProcessingEffects(e)}_getOutputFBO(){var e;return this._renderTarget!=null?this._renderTarget:((e=this._fbos)==null?void 0:e.output)??null}_applyEffects(e,t){var s;const r=(s=this._fbos)==null?void 0:s.blend;if(!r)return;const{context:i}=e,n=this._effectsManager.getPostProcessingEffects(t);for(const{postProcessingEffect:o,effect:d}of n)i.bindFramebuffer(r),o.draw(e,r,d)}}function Ge(a,e,t,r){return a!==I.HIGHLIGHT&&(r!==1||C(e)&&e!=="normal"||C(t)&&t.length>0)}class Nr extends Ee{constructor(e,t){super(),this._trash=new Set,this._renderRemainingTime=0,this._lastFrameRenderTime=0,this.renderRequested=!1,this.stage=this,this._stationary=!0;const{canvas:r=document.createElement("canvas"),alpha:i=!0,stencil:n=!0,contextOptions:s={}}=t;this._canvas=r;const o=tt("2d",r,{alpha:i,antialias:!1,depth:!0,stencil:n});this.context=new Dt(it(o)??null,s),this.resourceManager=new class{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(l){return this._resourceMap.get(l)??null}async fetchResource(l,u){const h=this._resourceMap.get(l);if(h)return{width:h.width,height:h.height};let c=this._inFlightResourceMap.get(l);return c?c.then(_=>({width:_.width,height:_.height})):(c=async function(_,g){const{arrayBuffer:T,mediaType:v}=await async function(f,O){let b;const m=";base64,";if(f.includes(m)){const w=f.indexOf(m),N=f.indexOf(m)+m.length,M=f.substring(N),R=atob(M),W=new Uint8Array(R.length);for(let G=0;G<R.length;G++)W[G]=R.charCodeAt(G);b={arrayBuffer:W.buffer,mediaType:f.substring(0,w).replace("data:","")}}else try{const w=await Q(f,{responseType:"array-buffer",...O});b={arrayBuffer:w.data,mediaType:w.getHeader("Content-Type")}}catch(w){if(!fe(w))throw new re("mapview-invalid-resource",`Could not fetch requested resource at ${f}`)}return b}(_,g),E=v==="image/png";return v==="image/gif"&&Vt(T)?async function(f,O){const b=pt(f),m=ft(b,!0),{width:w,height:N}=b.lsd,M=document.createElement("canvas");M.width=w,M.height=N;const R=M.getContext("2d",{willReadFrequently:!0}),W=[],G=[];for(const p of m){G.push(pe(p.delay||100));const ee=new ImageData(p.patch,p.dims.width,p.dims.height),te=Et(ee),ie=p.disposalType===3?R.getImageData(p.dims.left,p.dims.top,p.dims.width,p.dims.height):void 0;R.drawImage(te,p.dims.left,p.dims.top);const Ve=R.getImageData(0,0,w,N);W.push(Ve),p.disposalType===1||(p.disposalType===2?R.clearRect(p.dims.left,p.dims.top,p.dims.width,p.dims.height):p.disposalType===3&&R.putImageData(ie,p.dims.left,p.dims.top))}return{frameDurations:G,getFrame:p=>W[p],width:w,height:N}}(T):E&&qt(T)?async function(f,O){const b=_t(f);if(b instanceof Error)throw b;await b.createImages(),de(O);const{frames:m,width:w,height:N}=b,M=document.createElement("canvas");M.width=w,M.height=N;const R=M.getContext("2d",{willReadFrequently:!0}),W=[],G=[];for(const p of m){G.push(pe(p.delay||100));const ee=p.imageElement;p.blendOp===0?R.globalCompositeOperation="copy":R.globalCompositeOperation="source-over";const te=p.disposeOp===2?R.getImageData(p.left,p.top,p.width,p.height):void 0;R.drawImage(ee,p.left,p.top);const ie=R.getImageData(0,0,w,N);W.push(ie),p.disposeOp===0||(p.disposeOp===1?R.clearRect(p.left,p.top,p.width,p.height):p.disposeOp===2&&R.putImageData(te,p.left,p.top))}return{frameDurations:G,getFrame:p=>W[p],width:w,height:N}}(T,g):async function(f,O){const b=window.URL.createObjectURL(f);try{const{data:m}=await Q(b,{...O,responseType:"image"});return m}catch(m){throw fe(m)?m:new re("mapview-invalid-resource",`Could not fetch requested resource at ${b}`)}finally{window.URL.revokeObjectURL(b)}}(new Blob([T],{type:v}),g)}(l,u),this._inFlightResourceMap.set(l,c),c.then(_=>(this._inFlightResourceMap.delete(l),this._resourceMap.set(l,_),{width:_.width,height:_.height}),()=>({width:0,height:0})))}deleteResource(l){this._inFlightResourceMap.delete(l),this._resourceMap.delete(l)}},this.painter=new Ei(this.context,this,this.resourceManager),be("esri-2d-profiler")&&(this._debugOutput=document.createElement("div"),this._debugOutput.setAttribute("style","margin: 24px 64px; position: absolute; color: red;"),e.appendChild(this._debugOutput));const d=()=>this._highlightGradient;this._renderParameters={drawPhase:0,state:this.state,pixelRatio:window.devicePixelRatio,stationary:!1,globalOpacity:1,blendMode:null,deltaTime:-1,time:0,inFadeTransition:!1,effects:null,context:this.context,painter:this.painter,timeline:t.timeline||new rt,renderingOptions:t.renderingOptions,requestRender:()=>this.requestRender(),allowDelayedRender:!1,requireFBO:!1,profiler:new xt(this.context,this._debugOutput),dataUploadCounter:0,get highlightGradient(){return d()}},this._taskHandle=st({render:l=>this.renderFrame(l)}),this._taskHandle.pause(),this._lostWebGLContextHandle=nt(r,"webglcontextlost",()=>{this.emit("webgl-error",{error:new re("webgl-context-lost")})}),this._bufferPool=new Ot,r.setAttribute("style","width: 100%; height:100%; display:block;"),e.appendChild(r)}destroy(){var e,t,r;this.removeAllChildren(),this._emptyTrash(),this._taskHandle=Te(this._taskHandle),this._lostWebGLContextHandle=Te(this._lostWebGLContextHandle),(e=this._canvas.parentNode)==null||e.removeChild(this._canvas),(r=(t=this._debugOutput)==null?void 0:t.parentNode)==null||r.removeChild(this._debugOutput),this._bufferPool.destroy(),this.resourceManager.destroy(),this.painter.dispose(),this.context.dispose(),this._canvas=null}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get bufferPool(){return this._bufferPool}get renderingOptions(){return this._renderingOptions}set renderingOptions(e){this._renderingOptions=e,this.requestRender()}get state(){return this._state}set state(e){this._state=e,this.requestRender()}get stationary(){return this._stationary}set stationary(e){this._stationary!==e&&(this._stationary=e,this.requestRender())}trashDisplayObject(e){this._trash.add(e),this.requestRender()}untrashDisplayObject(e){return this._trash.delete(e)}requestRender(){this._renderRemainingTime=2e3,this.renderRequested||(this.renderRequested=!0,this.emit("will-render"),this._taskHandle.resume())}renderFrame(e){const t=this._lastFrameRenderTime?e.time-this._lastFrameRenderTime:0;this._renderRemainingTime-=t,this._renderRemainingTime<=0&&this._taskHandle.pause(),this._lastFrameRenderTime=e.time,this.renderRequested=!1,this._renderParameters.state=this._state,this._renderParameters.stationary=this.stationary,this._renderParameters.pixelRatio=window.devicePixelRatio,this._renderParameters.globalOpacity=1,this._renderParameters.time=e.time,this._renderParameters.deltaTime=e.deltaTime,this._renderParameters.effects=null,this.processRender(this._renderParameters),this._emptyTrash(),this.emit("post-render")}_createTransforms(){return{dvs:ue()}}renderChildren(e){for(const t of this.children)t.beforeRender(e);this._renderChildren(this.children,e);for(const t of this.children)t.afterRender(e)}_renderChildren(e,t){const r=this.context;this.painter.textureUploadManager.upload(),r.resetInfo(),t.profiler.recordStart("drawLayers"),t.dataUploadCounter=0,t.drawPhase=I.MAP,this.painter.beforeRenderLayers(r,this.background);for(const i of e)i.processRender(t);this.painter.prepareDisplay(t,this.background,this.state.padding),this.painter.renderLayers(r),t.drawPhase=I.HIGHLIGHT,this.painter.beforeRenderLayers(r);for(const i of e)i.processRender(t);if(this.painter.renderLayers(r),this._isLabelDrawPhaseRequired(e)){t.drawPhase=I.LABEL,this.painter.beforeRenderLayers(r);for(const i of e)i.processRender(t);this.painter.renderLayers(r)}if(be("esri-tiles-debug")){t.drawPhase=I.DEBUG,this.painter.beforeRenderLayers(r);for(const i of e)i.processRender(t);this.painter.renderLayers(r)}t.profiler.recordEnd("drawLayers"),r.logInfo()}doRender(e){const t=this.context,{state:r,pixelRatio:i}=e;this._resizeCanvas(e),t.setViewport(0,0,i*r.size[0],i*r.size[1]),t.setDepthWriteEnabled(!0),t.setStencilWriteMask(255),super.doRender(e)}async takeScreenshot(e){const{framebufferWidth:t,framebufferHeight:r}={framebufferWidth:Math.round(this.state.size[0]*e.resolutionScale),framebufferHeight:Math.round(this.state.size[1]*e.resolutionScale)},i=e.resolutionScale,n=this.context,s=this._state.clone();if(e.rotation!=null){const g=s.viewpoint;s.viewpoint.rotation=e.rotation,s.viewpoint=g}const o={...this._renderParameters,drawPhase:null,globalOpacity:1,stationary:!0,state:s,pixelRatio:i,time:performance.now(),deltaTime:0,blendMode:null,effects:null,inFadeTransition:!1},d=new z(n,{colorTarget:L.TEXTURE,depthStencilTarget:k.DEPTH_STENCIL_RENDER_BUFFER,width:t,height:r}),l=n.getBoundFramebufferObject(),u=n.getViewport();n.bindFramebuffer(d),n.setViewport(0,0,t,r),this._renderChildren(e.children,o);const h=this._readbackScreenshot(d,{...e.cropArea,y:r-(e.cropArea.y+e.cropArea.height)});n.bindFramebuffer(l),n.setViewport(u.x,u.y,u.width,u.height),this.requestRender();const c=await h;let _;return e.outputScale===1?_=c:(_=new ImageData(Math.round(c.width*e.outputScale),Math.round(c.height*e.outputScale)),at(c,_,!0)),_}async _readbackScreenshot(e,t){const r=Gt(t.width,t.height,document.createElement("canvas"));return await e.readPixelsAsync(t.x,t.y,t.width,t.height,x.RGBA,P.UNSIGNED_BYTE,new Uint8Array(r.data.buffer)),r}_resizeCanvas(e){const t=this._canvas,r=t.style,{state:{size:i},pixelRatio:n}=e,s=i[0],o=i[1],d=Math.round(s*n),l=Math.round(o*n);t.width===d&&t.height===l||(t.width=d,t.height=l),r.width=s+"px",r.height=o+"px"}_emptyTrash(){for(;this._trash.size>0;){const e=Array.from(this._trash);this._trash.clear();for(const t of e)t.processDetach()}}_isLabelDrawPhaseRequired(e){let t=!1;for(const r of e){if(!(r instanceof Ee)){t=t||!1;break}if(r.hasLabels)return!0;t=t||this._isLabelDrawPhaseRequired(r.children)}return t}}class Lr extends Bt{constructor(){super(),this._handles=new ot,this._resourcePixelRatio=1,this.visible=!1}destroy(){this._handles=lt(this._handles),this._disposeRenderResources(),this._resourcesTask=dt(this._resourcesTask)}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get magnifier(){return this._magnifier}set magnifier(e){this._magnifier=e,this._handles.removeAll(),this._handles.add([ae(()=>e.version,()=>{this.visible=e.visible&&C(e.position)&&e.size>0,this.requestRender()},ut),ae(()=>[e.maskUrl,e.overlayUrl],()=>this._reloadResources()),ae(()=>e.size,()=>{this._disposeRenderResources(),this.requestRender()})])}_createTransforms(){return{dvs:ue()}}doRender(e){var R;const t=e.context;if(!this._resourcesTask)return void this._reloadResources();if(e.drawPhase!==I.MAP||!this._canRender())return;this._updateResources(e);const r=this._magnifier;if(q(r.position))return;const i=e.pixelRatio,n=r.size*i,s=1/r.factor,o=Math.ceil(s*n);this._readbackTexture.resize(o,o);const{size:d}=e.state,l=i*d[0],u=i*d[1],h=.5*o,c=.5*o,_=xe(i*r.position.x,h,l-h-1),g=xe(u-i*r.position.y,c,u-c-1);t.setBlendingEnabled(!0);const T=_-h,v=g-c,E=this._readbackTexture;t.bindTexture(E,0),t.gl.copyTexImage2D(E.descriptor.target,0,E.descriptor.pixelFormat,T,v,o,o,0);const f=(R=this.background)==null?void 0:R.color,O=f?[f.a*f.r/255,f.a*f.g/255,f.a*f.b/255,f.a]:[1,1,1,1],b=(_+r.offset.x*i)/l*2-1,m=(g-r.offset.y*i)/u*2-1,w=n/l*2,N=n/u*2,M=this._program;t.bindVAO(this._vertexArrayObject),t.bindTexture(this._overlayTexture,6),t.bindTexture(this._maskTexture,7),t.useProgram(M),M.setUniform4fv("u_background",O),M.setUniform1i("u_readbackTexture",0),M.setUniform1i("u_overlayTexture",6),M.setUniform1i("u_maskTexture",7),M.setUniform4f("u_drawPos",b,m,w,N),M.setUniform1i("u_maskEnabled",r.maskEnabled?1:0),M.setUniform1i("u_overlayEnabled",r.overlayEnabled?1:0),t.setStencilTestEnabled(!1),t.setColorMask(!0,!0,!0,!0),t.drawArrays($.TRIANGLE_STRIP,0,4),t.bindVAO()}_canRender(){return this.mask&&this.overlay&&this._magnifier!=null}_reloadResources(){this._resourcesTask&&this._resourcesTask.abort();const e=C(this._magnifier)?this._magnifier.maskUrl:null,t=C(this._magnifier)?this._magnifier.overlayUrl:null;this._resourcesTask=ht(async r=>{const i=q(e)||q(t)?async function(l){const u=Pe(()=>import("./mask-svg.023bbc42.js"),[]),h=Pe(()=>import("./overlay-svg.d62383f3.js"),[]),c=Ce((await u).default,{signal:l}),_=Ce((await h).default,{signal:l}),g={mask:await c,overlay:await _};return de(l),g}(r):null,n=C(e)?Q(e,{responseType:"image",signal:r}).then(l=>l.data):i.then(l=>l.mask),s=C(t)?Q(t,{responseType:"image",signal:r}).then(l=>l.data):i.then(l=>l.overlay),[o,d]=await Promise.all([n,s]);this.mask=o,this.overlay=d,this._disposeRenderResources(),this.requestRender()})}_disposeRenderResources(){this._readbackTexture=F(this._readbackTexture),this._overlayTexture=F(this._overlayTexture),this._maskTexture=F(this._maskTexture),this._vertexArrayObject=F(this._vertexArrayObject),this._program=F(this._program)}_updateResources(e){if(e.pixelRatio!==this._resourcePixelRatio&&this._disposeRenderResources(),this._readbackTexture)return;const t=e.context;this._resourcePixelRatio=e.pixelRatio;const r=Math.ceil(this._magnifier.size*e.pixelRatio);this._program=wt(t);const i=new Uint16Array([0,1,0,0,1,1,1,0]),n=yt.attributes;this._vertexArrayObject=new he(t,n,Pt,{geometry:ce.createVertex(t,_e.STATIC_DRAW,i)}),this.overlay.width=r,this.overlay.height=r,this._overlayTexture=new V(t,{target:S.TEXTURE_2D,pixelFormat:x.RGBA,internalFormat:x.RGBA,dataType:P.UNSIGNED_BYTE,wrapMode:A.CLAMP_TO_EDGE,samplingMode:B.NEAREST,flipped:!0,preMultiplyAlpha:!ct(this.overlay.src)||!e.context.driverTest.svgPremultipliesAlpha.result},this.overlay),this.mask.width=r,this.mask.height=r,this._maskTexture=new V(t,{target:S.TEXTURE_2D,pixelFormat:x.ALPHA,internalFormat:x.ALPHA,dataType:P.UNSIGNED_BYTE,wrapMode:A.CLAMP_TO_EDGE,samplingMode:B.NEAREST,flipped:!0},this.mask);const s=1/this._magnifier.factor;this._readbackTexture=new V(t,{target:S.TEXTURE_2D,pixelFormat:x.RGBA,internalFormat:x.RGBA,dataType:P.UNSIGNED_BYTE,wrapMode:A.CLAMP_TO_EDGE,samplingMode:B.LINEAR,flipped:!1,width:Math.ceil(s*r),height:Math.ceil(s*r)})}}export{jr as GraphicContainer,Vr as GraphicsView2D,Hr as LabelManager,Lr as MagnifierView2D,qr as MapViewNavigation,Nr as Stage};
