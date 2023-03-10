import {
  t as V,
  r as y,
  gM as _,
  aH as z,
  fz as T,
  gN as q,
} from "./index.8fd7165c.js";
import { S as E } from "./quat.17ee06b3.js";
import {
  w as P,
  l as X,
  c as Y,
  I as Z,
  e as j,
} from "./I3SBinaryReader.a6d3df26.js";
import { r as G, n as N } from "./vec3f32.5805ce90.js";
import {
  a as H,
  b as L,
  d as K,
} from "./PointCloudUniqueValueRenderer.310d7c71.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./mat3f64.eb921732.js";
import "./quatf64.75f9f553.js";
import "./VertexAttribute.15d1866a.js";
function Q(c, t, i, n) {
  const { rendererJSON: s, isRGBRenderer: h } = c;
  let r = null,
    u = null;
  if (t && h) r = t;
  else if (
    t &&
    (s == null ? void 0 : s.type) === "pointCloudUniqueValueRenderer"
  ) {
    u = H.fromJSON(s);
    const e = u.colorUniqueValueInfos;
    r = new Uint8Array(3 * n);
    const b = D(u.fieldTransformType);
    for (let o = 0; o < n; o++) {
      const l = (b ? b(t[o]) : t[o]) + "";
      for (let a = 0; a < e.length; a++)
        if (e[a].values.includes(l)) {
          (r[3 * o] = e[a].color.r),
            (r[3 * o + 1] = e[a].color.g),
            (r[3 * o + 2] = e[a].color.b);
          break;
        }
    }
  } else if (
    t &&
    (s == null ? void 0 : s.type) === "pointCloudStretchRenderer"
  ) {
    u = L.fromJSON(s);
    const e = u.stops;
    r = new Uint8Array(3 * n);
    const b = D(u.fieldTransformType);
    for (let o = 0; o < n; o++) {
      const l = b ? b(t[o]) : t[o],
        a = e.length - 1;
      if (l < e[0].value)
        (r[3 * o] = e[0].color.r),
          (r[3 * o + 1] = e[0].color.g),
          (r[3 * o + 2] = e[0].color.b);
      else if (l >= e[a].value)
        (r[3 * o] = e[a].color.r),
          (r[3 * o + 1] = e[a].color.g),
          (r[3 * o + 2] = e[a].color.b);
      else
        for (let f = 1; f < e.length; f++)
          if (l < e[f].value) {
            const p = (l - e[f - 1].value) / (e[f].value - e[f - 1].value);
            (r[3 * o] = e[f].color.r * p + e[f - 1].color.r * (1 - p)),
              (r[3 * o + 1] = e[f].color.g * p + e[f - 1].color.g * (1 - p)),
              (r[3 * o + 2] = e[f].color.b * p + e[f - 1].color.b * (1 - p));
            break;
          }
    }
  } else if (
    t &&
    (s == null ? void 0 : s.type) === "pointCloudClassBreaksRenderer"
  ) {
    u = K.fromJSON(s);
    const e = u.colorClassBreakInfos;
    r = new Uint8Array(3 * n);
    const b = D(u.fieldTransformType);
    for (let o = 0; o < n; o++) {
      const l = b ? b(t[o]) : t[o];
      for (let a = 0; a < e.length; a++)
        if (l >= e[a].minValue && l <= e[a].maxValue) {
          (r[3 * o] = e[a].color.r),
            (r[3 * o + 1] = e[a].color.g),
            (r[3 * o + 2] = e[a].color.b);
          break;
        }
    }
  } else {
    r = new Uint8Array(3 * n);
    for (let e = 0; e < r.length; e++) r[e] = 255;
  }
  if (i && u && u.colorModulation) {
    const e = u.colorModulation.minValue,
      b = u.colorModulation.maxValue,
      o = 0.3;
    for (let l = 0; l < n; l++) {
      const a = i[l],
        f = a >= b ? 1 : a <= e ? o : o + ((1 - o) * (a - e)) / (b - e);
      (r[3 * l] = f * r[3 * l]),
        (r[3 * l + 1] = f * r[3 * l + 1]),
        (r[3 * l + 2] = f * r[3 * l + 2]);
    }
  }
  return r;
}
function x(c, t, i) {
  return y(c) && c.attributeInfo.useElevation
    ? t
      ? (function (n, s) {
          const h = new Float64Array(s);
          for (let r = 0; r < s; r++) h[r] = n[3 * r + 2];
          return h;
        })(t, i)
      : null
    : y(c) && c.attributeInfo.storageInfo
    ? Z(c.attributeInfo.storageInfo, c.buffer, i)
    : null;
}
function D(c) {
  return c == null || c === "none"
    ? null
    : c === "low-four-bit"
    ? (t) => 15 & t
    : c === "high-four-bit"
    ? (t) => (240 & t) >> 4
    : c === "absolute-value"
    ? (t) => Math.abs(t)
    : c === "modulo-ten"
    ? (t) => t % 10
    : null;
}
function U(c) {
  let t = 0;
  for (const i of c || []) t |= 1 << i;
  return t;
}
class W {
  transform(t) {
    const i = this._transform(t),
      n = [i.points.buffer, i.rgb.buffer];
    y(i.pointIdFilterMap) && n.push(i.pointIdFilterMap.buffer);
    for (const s of i.attributes)
      "buffer" in s.values &&
        _(s.values.buffer) &&
        s.values.buffer !== i.rgb.buffer &&
        n.push(s.values.buffer);
    return Promise.resolve({ result: i, transferList: n });
  }
  _transform(t) {
    const i = (function (o, l) {
      if (o.encoding == null || o.encoding === "") {
        const a = P(l, o);
        if (V(a.vertexAttributes.position)) return;
        const f = X(l, a.vertexAttributes.position),
          p = a.header.fields,
          A = [p.offsetX, p.offsetY, p.offsetZ],
          S = [p.scaleX, p.scaleY, p.scaleZ],
          g = f.length / 3,
          m = new Float64Array(3 * g);
        for (let d = 0; d < g; d++)
          (m[3 * d] = f[3 * d] * S[0] + A[0]),
            (m[3 * d + 1] = f[3 * d + 1] * S[1] + A[1]),
            (m[3 * d + 2] = f[3 * d + 2] * S[2] + A[2]);
        return m;
      }
      if (o.encoding === "lepcc-xyz") return Y(l).result;
    })(t.schema, t.geometryBuffer);
    let n = i.length / 3,
      s = null;
    const h = [],
      r = x(t.primaryAttributeData, i, n);
    y(t.primaryAttributeData) &&
      r &&
      h.push({
        attributeInfo: t.primaryAttributeData.attributeInfo,
        values: r,
      });
    const u = x(t.modulationAttributeData, i, n);
    y(t.modulationAttributeData) &&
      u &&
      h.push({
        attributeInfo: t.modulationAttributeData.attributeInfo,
        values: u,
      });
    let e = Q(t.rendererInfo, r, u, n);
    if (t.filterInfo && t.filterInfo.length > 0 && y(t.filterAttributesData)) {
      const o = t.filterAttributesData.filter(y).map((l) => {
        const a = x(l, i, n),
          f = { attributeInfo: l.attributeInfo, values: a };
        return h.push(f), f;
      });
      (s = new Uint32Array(n)),
        (n = (function (l, a, f, p, A) {
          const S = l.length / 3;
          let g = 0;
          for (let m = 0; m < S; m++) {
            let d = !0;
            for (let w = 0; w < p.length && d; w++) {
              const { filterJSON: I } = p[w],
                M = A[w].values[m];
              switch (I.type) {
                case "pointCloudValueFilter": {
                  const v = I.mode === "exclude";
                  I.values.includes(M) === v && (d = !1);
                  break;
                }
                case "pointCloudBitfieldFilter": {
                  const v = U(I.requiredSetBits),
                    C = U(I.requiredClearBits);
                  ((M & v) === v && !(M & C)) || (d = !1);
                  break;
                }
                case "pointCloudReturnFilter": {
                  const v = 15 & M,
                    C = (M >>> 4) & 15,
                    k = C > 1,
                    J = v === 1,
                    F = v === C;
                  let R = !1;
                  for (const O of I.includedReturns)
                    if (
                      (O === "last" && F) ||
                      (O === "firstOfMany" && J && k) ||
                      (O === "lastOfMany" && F && k) ||
                      (O === "single" && !k)
                    ) {
                      R = !0;
                      break;
                    }
                  R || (d = !1);
                  break;
                }
              }
            }
            d &&
              ((f[g] = m),
              (l[3 * g] = l[3 * m]),
              (l[3 * g + 1] = l[3 * m + 1]),
              (l[3 * g + 2] = l[3 * m + 2]),
              (a[3 * g] = a[3 * m]),
              (a[3 * g + 1] = a[3 * m + 1]),
              (a[3 * g + 2] = a[3 * m + 2]),
              g++);
          }
          return g;
        })(i, e, s, t.filterInfo, o));
    }
    for (const o of t.userAttributesData) {
      const l = x(o, i, n);
      h.push({ attributeInfo: o.attributeInfo, values: l });
    }
    3 * n < e.length && (e = new Uint8Array(e.buffer.slice(0, 3 * n))),
      this._applyElevationOffsetInPlace(i, n, t.elevationOffset);
    const b = this._transformCoordinates(
      i,
      n,
      t.obb,
      z.fromJSON(t.inSR),
      z.fromJSON(t.outSR)
    );
    return {
      obb: t.obb,
      points: b,
      rgb: e,
      attributes: h,
      pointIdFilterMap: s,
    };
  }
  _transformCoordinates(t, i, n, s, h) {
    if (!T(t, s, 0, t, h, 0, i)) throw new Error("Can't reproject");
    const r = G(n.center[0], n.center[1], n.center[2]),
      u = N(),
      e = N();
    E(B, n.quaternion);
    const b = new Float32Array(3 * i);
    for (let o = 0; o < i; o++)
      (u[0] = t[3 * o] - r[0]),
        (u[1] = t[3 * o + 1] - r[1]),
        (u[2] = t[3 * o + 2] - r[2]),
        q(e, u, B),
        (n.halfSize[0] = Math.max(n.halfSize[0], Math.abs(e[0]))),
        (n.halfSize[1] = Math.max(n.halfSize[1], Math.abs(e[1]))),
        (n.halfSize[2] = Math.max(n.halfSize[2], Math.abs(e[2]))),
        (b[3 * o] = u[0]),
        (b[3 * o + 1] = u[1]),
        (b[3 * o + 2] = u[2]);
    return b;
  }
  _applyElevationOffsetInPlace(t, i, n) {
    if (n !== 0) for (let s = 0; s < i; s++) t[3 * s + 2] += n;
  }
}
const B = j();
function mt() {
  return new W();
}
export { mt as default };
