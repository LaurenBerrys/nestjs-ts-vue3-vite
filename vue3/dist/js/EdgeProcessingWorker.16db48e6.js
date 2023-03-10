import {
  y as p,
  u as f,
  i as d,
  c as m,
  l as g,
  p as h,
  o as y,
  m as w,
  T as L,
  h as D,
  a as b,
  b as E,
  d as I,
  A as x,
  O as A,
  x as V,
  g as k,
  w as U,
  E as B,
  L as T,
  B as v,
  F as C,
  I as S,
  U as M,
  j as N,
  V as $,
  M as j,
  S as q,
  k as z,
  q as F,
  v as G,
  z as H,
  C as O,
  D as _,
  G as J,
  H as K,
} from "./BufferView.b3039ce1.js";
import {
  f as P,
  u as o,
  p as c,
  A as Q,
  a as R,
  m as W,
} from "./edgeProcessing.e481528d.js";
import "./index.8fd7165c.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./deduplicate.744c1fe7.js";
import "./Indices.7165e4ff.js";
import "./InterleavedLayout.c89035f2.js";
import "./types.e1c0a5bf.js";
import "./VertexAttribute.15d1866a.js";
import "./enums.64ab819c.js";
import "./VertexElementDescriptor.2925c6af.js";
function r(t, s) {
  return s.push(t.buffer), { buffer: t.buffer, layout: X(t.layout) };
}
function X(t) {
  const s = [];
  return (
    t.fields.forEach((e, n) => {
      const a = { ...e, constructor: l(e.constructor) };
      s.push([n, a]);
    }),
    { stride: t.stride, fields: s, fieldNames: t.fieldNames }
  );
}
const Y = [
  p,
  f,
  d,
  m,
  g,
  h,
  y,
  w,
  L,
  D,
  b,
  E,
  I,
  x,
  A,
  V,
  k,
  U,
  B,
  T,
  v,
  C,
  S,
  M,
  N,
  $,
  j,
  q,
  z,
  F,
  G,
  H,
  O,
  _,
  J,
  K,
];
function l(t) {
  return `${t.ElementType}_${t.ElementCount}`;
}
const Z = new Map();
Y.forEach((t) => Z.set(l(t), t));
class Dt {
  async extract(s) {
    const e = i(s),
      n = P(e),
      a = [e.data.buffer];
    return { result: tt(n, a), transferList: a };
  }
  async extractComponentsEdgeLocations(s) {
    const e = i(s),
      n = o(e.data, e.skipDeduplicate, e.indices, e.indicesLength),
      a = [];
    return { result: r(c(n, et, u).regular.instancesData, a), transferList: a };
  }
  async extractEdgeLocations(s) {
    const e = i(s),
      n = o(e.data, e.skipDeduplicate, e.indices, e.indicesLength),
      a = [];
    return { result: r(c(n, st, u).regular.instancesData, a), transferList: a };
  }
}
function i(t) {
  return {
    data: Q.createView(t.dataBuffer),
    indices:
      t.indicesType === "Uint32Array"
        ? new Uint32Array(t.indices)
        : t.indicesType === "Uint16Array"
        ? new Uint16Array(t.indices)
        : t.indices,
    indicesLength: t.indicesLength,
    writerSettings: t.writerSettings,
    skipDeduplicate: t.skipDeduplicate,
  };
}
function tt(t, s) {
  return (
    s.push(t.regular.lodInfo.lengths.buffer),
    s.push(t.silhouette.lodInfo.lengths.buffer),
    {
      regular: {
        instancesData: r(t.regular.instancesData, s),
        lodInfo: { lengths: t.regular.lodInfo.lengths.buffer },
      },
      silhouette: {
        instancesData: r(t.silhouette.instancesData, s),
        lodInfo: { lengths: t.silhouette.lodInfo.lengths.buffer },
      },
      averageEdgeLength: t.averageEdgeLength,
    }
  );
}
const st = new (class {
    allocate(t) {
      return R.createBuffer(t);
    }
    trim(t, s) {
      return t.slice(0, s);
    }
    write(t, s, e) {
      t.position0.setVec(s, e.position0), t.position1.setVec(s, e.position1);
    }
  })(),
  et = new (class {
    allocate(t) {
      return W.createBuffer(t);
    }
    trim(t, s) {
      return t.slice(0, s);
    }
    write(t, s, e) {
      t.position0.setVec(s, e.position0),
        t.position1.setVec(s, e.position1),
        t.componentIndex.set(s, e.componentIndex);
    }
  })(),
  u = { allocate: () => null, write: () => {}, trim: () => null };
export { Dt as default };
