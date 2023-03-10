import {
  r as l,
  U as q,
  dt as O,
  cc as $,
  q as b,
  aN as v,
  fJ as I,
  lB as L,
  h2 as z,
  aM as U,
  t as V,
} from "./index.8fd7165c.js";
import { e as N } from "./mat3f64.eb921732.js";
import { p as k, m as J, c as K, g as Q } from "./meshFeatureSet.973954c4.js";
import {
  c as _,
  x as G,
  L as H,
  O as S,
  i as P,
  E as W,
  T as X,
  u as Y,
} from "./BufferView.b3039ce1.js";
import {
  t as Z,
  r as tt,
  o as et,
  b as ot,
  f as rt,
  e as nt,
  n as st,
} from "./vec33.5889ffa1.js";
import {
  n as at,
  m as it,
  r as w,
  a as ut,
  g as ct,
  t as E,
  b as lt,
  h as mt,
  c as ft,
  e as pt,
  j as dt,
  i as xt,
  f as gt,
  d as Tt,
  o as ht,
} from "./DefaultMaterial_COLOR_GAMMA.078f8e82.js";
import { _ as bt } from "./georeference.db8759a2.js";
import { t as vt } from "./resourceUtils.d8a25705.js";
import { u as wt } from "./Indices.7165e4ff.js";
import { E as C, D as R } from "./enums.64ab819c.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./imageUtils.c2d0d1ae.js";
import "./earcut.9f54f087.js";
import "./deduplicate.744c1fe7.js";
import "./mat4f64.b473928c.js";
import "./spatialReferenceEllipsoidUtils.0049fd16.js";
import "./types.e1c0a5bf.js";
import "./Version.a4557b9e.js";
import "./quat.17ee06b3.js";
import "./quatf64.75f9f553.js";
import "./basicInterfaces.b7051eb1.js";
async function ne(t, o, n) {
  const s = new at(
      (function (d) {
        const g = d == null ? void 0 : d.resolveFile;
        return g
          ? {
              busy: !1,
              request: async (D, M, B) => {
                const j = g(D);
                return (
                  await q(j, {
                    responseType:
                      M === "image"
                        ? "image"
                        : M === "binary"
                        ? "array-buffer"
                        : "json",
                    signal: l(B) ? B.signal : null,
                  })
                ).data;
              },
            }
          : null;
      })(n)
    ),
    e = (await it(s, o, n, !0)).model,
    f = e.lods.shift(),
    a = new Map(),
    u = new Map();
  e.textures.forEach((d, g) => a.set(g, Et(d))),
    e.materials.forEach((d, g) => u.set(g, Ct(d, a)));
  const c = At(f);
  for (const d of c.parts) Rt(c, d, u);
  const {
      position: x,
      normal: m,
      tangent: r,
      color: i,
      texCoord0: p,
    } = c.vertexAttributes,
    h = {
      position: x.typedBuffer,
      normal: l(m) ? m.typedBuffer : null,
      tangent: l(r) ? r.typedBuffer : null,
      uv: l(p) ? p.typedBuffer : null,
      color: l(i) ? i.typedBuffer : null,
    },
    A = bt(h, t, n);
  return {
    transform: A.transform,
    components: c.components,
    spatialReference: t.spatialReference,
    vertexAttributes: new k({
      position: A.vertexAttributes.position,
      normal: A.vertexAttributes.normal,
      tangent: A.vertexAttributes.tangent,
      color: h.color,
      uv: h.uv,
    }),
  };
}
function y(t, o) {
  if (V(t)) return "-";
  const n = t.typedBuffer;
  return `${O(o, n.buffer, () => o.size)}/${n.byteOffset}/${n.byteLength}`;
}
function yt(t) {
  return l(t) ? t.toString() : "-";
}
function At(t) {
  let o = 0;
  const n = { color: !1, tangent: !1, normal: !1, texCoord0: !1 },
    s = new Map(),
    e = new Map(),
    f = [];
  for (const a of t.parts) {
    const {
        attributes: {
          position: u,
          normal: c,
          color: x,
          tangent: m,
          texCoord0: r,
        },
      } = a,
      i = `
      ${y(u, s)}/
      ${y(c, s)}/
      ${y(x, s)}/
      ${y(m, s)}/
      ${y(r, s)}/
      ${yt(a.transform)}
    `;
    let p = !1;
    const h = O(e, i, () => ((p = !0), { start: o, length: u.count }));
    p && (o += u.count),
      c && (n.normal = !0),
      x && (n.color = !0),
      m && (n.tangent = !0),
      r && (n.texCoord0 = !0),
      f.push({ gltf: a, writeVertices: p, region: h });
  }
  return {
    vertexAttributes: {
      position: w(X, o),
      normal: n.normal ? w(P, o) : null,
      tangent: n.tangent ? w(_, o) : null,
      color: n.color ? w(G, o) : null,
      texCoord0: n.texCoord0 ? w(Y, o) : null,
    },
    parts: f,
    components: [],
  };
}
function Et(t) {
  return new J({ data: (vt(t.data), t.data), wrap: $t(t.parameters.wrap) });
}
function Ct(t, o) {
  const n = new $(
      (function (e, f) {
        return z(T(e[0]), T(e[1]), T(e[2]), f);
      })(t.color, t.opacity)
    ),
    s = t.emissiveFactor
      ? new $(
          (function (e) {
            return U(T(e[0]), T(e[1]), T(e[2]));
          })(t.emissiveFactor)
        )
      : null;
  return new K({
    color: n,
    colorTexture: b(v(t.textureColor, (e) => o.get(e))),
    normalTexture: b(v(t.textureNormal, (e) => o.get(e))),
    emissiveColor: s,
    emissiveTexture: b(v(t.textureEmissive, (e) => o.get(e))),
    occlusionTexture: b(v(t.textureOcclusion, (e) => o.get(e))),
    alphaMode: Bt(t.alphaMode),
    alphaCutoff: t.alphaCutoff,
    doubleSided: t.doubleSided,
    metallic: t.metallicFactor,
    roughness: t.roughnessFactor,
    metallicRoughnessTexture: b(v(t.textureMetallicRoughness, (e) => o.get(e))),
    colorTextureTransform: t.colorTextureTransform,
    normalTextureTransform: t.normalTextureTransform,
    occlusionTextureTransform: t.occlusionTextureTransform,
    emissiveTextureTransform: t.emissiveTextureTransform,
    metallicRoughnessTextureTransform: t.metallicRoughnessTextureTransform,
  });
}
function Rt(t, o, n) {
  o.writeVertices && Mt(t, o);
  const s = o.gltf,
    e = (function (a, u) {
      switch (u) {
        case C.TRIANGLES:
          return Tt(a, wt);
        case C.TRIANGLE_STRIP:
          return gt(a);
        case C.TRIANGLE_FAN:
          return xt(a);
      }
    })(s.indices || s.attributes.position.count, s.primitiveType),
    f = o.region.start;
  if (f) for (let a = 0; a < e.length; a++) e[a] += f;
  t.components.push(
    new Q({ faces: e, material: n.get(s.material), trustSourceNormals: !0 })
  );
}
function Mt(t, o) {
  const {
      position: n,
      normal: s,
      tangent: e,
      color: f,
      texCoord0: a,
    } = t.vertexAttributes,
    u = o.region.start,
    { attributes: c, transform: x } = o.gltf,
    m = c.position.count;
  if ((Z(n.slice(u, m), c.position, x), l(c.normal) && l(s))) {
    const r = I(N(), x),
      i = s.slice(u, m);
    tt(i, c.normal, r), L(r) && et(i, i);
  } else l(s) && ot(s, 0, 0, 1, { dstIndex: u, count: m });
  if (l(c.tangent) && l(e)) {
    const r = I(N(), x),
      i = e.slice(u, m);
    ut(i, c.tangent, r), L(r) && ct(i, i);
  } else l(e) && E(e, 0, 0, 1, 1, { dstIndex: u, count: m });
  if (
    (l(c.texCoord0) && l(a)
      ? lt(a.slice(u, m), c.texCoord0)
      : l(a) && mt(a, 0, 0, { dstIndex: u, count: m }),
    l(c.color) && l(f))
  ) {
    const r = c.color,
      i = f.slice(u, m);
    if (r.elementCount === 4)
      r instanceof _
        ? ft(i, r, 255)
        : r instanceof G
        ? pt(i, r)
        : r instanceof H && dt(i, r, 8);
    else {
      E(i, 255, 255, 255, 255);
      const p = S.fromTypedArray(i.typedBuffer, i.typedBufferStride);
      r instanceof P
        ? rt(p, r, 255)
        : r instanceof S
        ? nt(p, r)
        : r instanceof W && st(p, r, 8);
    }
  } else l(f) && E(f.slice(u, m), 255, 255, 255, 255);
}
function Bt(t) {
  switch (t) {
    case "OPAQUE":
      return "opaque";
    case "MASK":
      return "mask";
    case "BLEND":
      return "blend";
  }
}
function $t(t) {
  return { horizontal: F(t.s), vertical: F(t.t) };
}
function F(t) {
  switch (t) {
    case R.CLAMP_TO_EDGE:
      return "clamp";
    case R.MIRRORED_REPEAT:
      return "mirror";
    case R.REPEAT:
      return "repeat";
  }
}
function T(t) {
  return t ** (1 / ht) * 255;
}
export { ne as loadGLTFMesh };
