import { r as wt } from "./deduplicate.744c1fe7.js";
import { T as z } from "./InterleavedLayout.c89035f2.js";
import { O as i } from "./VertexAttribute.15d1866a.js";
import { C as W } from "./enums.64ab819c.js";
import { t as Et } from "./VertexElementDescriptor.2925c6af.js";
import {
  aF as lt,
  fg as vt,
  fh as Pt,
  c as J,
  fi as ft,
  fj as Z,
  fk as Dt,
  fl as yt,
  fm as dt,
  fn as ut,
  fo as ht,
  b as y,
  fp as Lt,
  bT as Vt,
} from "./index.8fd7165c.js";
function rt(t, n = 0) {
  const o = t.stride;
  return t.fieldNames
    .filter((l) => {
      const s = t.fields.get(l).optional;
      return !(s && s.glPadding);
    })
    .map((l) => {
      const s = t.fields.get(l),
        p = s.constructor.ElementCount,
        T = Rt(s.constructor.ElementType),
        U = s.offset,
        L = !(!s.optional || !s.optional.glNormalized);
      return new Et(l, p, T, U, o, L, n);
    });
}
function Rt(t) {
  const n = Mt[t];
  if (n) return n;
  throw new Error("BufferType not supported in WebGL");
}
const Mt = {
    u8: W.UNSIGNED_BYTE,
    u16: W.UNSIGNED_SHORT,
    u32: W.UNSIGNED_INT,
    i8: W.BYTE,
    i16: W.SHORT,
    i32: W.INT,
    f32: W.FLOAT,
  },
  Ft = z().vec3f(i.POSITION).u16(i.COMPONENTINDEX).u16(i.U16PADDING);
rt(z().vec2u8(i.SIDENESS));
const At = z()
    .vec3f(i.POSITION0)
    .vec3f(i.POSITION1)
    .u16(i.COMPONENTINDEX)
    .u8(i.VARIANTOFFSET, { glNormalized: !0 })
    .u8(i.VARIANTSTROKE)
    .u8(i.VARIANTEXTENSION, { glNormalized: !0 })
    .u8(i.U8PADDING, { glPadding: !0 })
    .u16(i.U16PADDING, { glPadding: !0 }),
  $ = At.clone().vec3f(i.NORMAL),
  tt = At.clone().vec3f(i.NORMALA).vec3f(i.NORMALB);
i.POSITION0,
  i.POSITION1,
  i.COMPONENTINDEX,
  i.VARIANTOFFSET,
  i.VARIANTSTROKE,
  i.VARIANTEXTENSION,
  i.NORMAL,
  i.NORMALA,
  i.NORMALB,
  i.SIDENESS;
const B = -1;
var gt;
function Ut(t, n, o, l = Ct) {
  const s = t.vertices.position,
    p = t.vertices.componentIndex,
    T = lt(l.anglePlanar),
    U = lt(l.angleSignificantEdge),
    L = Math.cos(U),
    u = Math.cos(T),
    g = et.edge,
    b = g.position0,
    G = g.position1,
    P = g.faceNormal0,
    V = g.faceNormal1,
    A = (function (O) {
      const I = O.faces.length / 3,
        d = O.vertices.position,
        S = O.faces,
        h = Q.v0,
        m = Q.v1,
        N = Q.v2,
        f = new Float32Array(3 * I);
      for (let E = 0; E < I; E++) {
        const H = S[3 * E + 0],
          X = S[3 * E + 1],
          F = S[3 * E + 2];
        d.getVec(H, h),
          d.getVec(X, m),
          d.getVec(F, N),
          ut(m, m, h),
          ut(N, N, h),
          dt(h, m, N),
          ht(h, h),
          (f[3 * E + 0] = h[0]),
          (f[3 * E + 1] = h[1]),
          (f[3 * E + 2] = h[2]);
      }
      return f;
    })(t),
    R = (function (O) {
      const I = O.faces.length / 3,
        d = O.faces,
        S = O.neighbors;
      let h = 0;
      for (let f = 0; f < I; f++) {
        const E = S[3 * f + 0],
          H = S[3 * f + 1],
          X = S[3 * f + 2],
          F = d[3 * f + 0],
          x = d[3 * f + 1],
          C = d[3 * f + 2];
        (h += E === B || F < x ? 1 : 0),
          (h += H === B || x < C ? 1 : 0),
          (h += X === B || C < F ? 1 : 0);
      }
      const m = new Int32Array(4 * h);
      let N = 0;
      for (let f = 0; f < I; f++) {
        const E = S[3 * f + 0],
          H = S[3 * f + 1],
          X = S[3 * f + 2],
          F = d[3 * f + 0],
          x = d[3 * f + 1],
          C = d[3 * f + 2];
        (E === B || F < x) &&
          ((m[N++] = F), (m[N++] = x), (m[N++] = f), (m[N++] = E)),
          (H === B || x < C) &&
            ((m[N++] = x), (m[N++] = C), (m[N++] = f), (m[N++] = H)),
          (X === B || C < F) &&
            ((m[N++] = C), (m[N++] = F), (m[N++] = f), (m[N++] = X));
      }
      return m;
    })(t),
    e = R.length / 4,
    r = n.allocate(e);
  let c = 0;
  const a = e,
    w = o.allocate(a);
  let D = 0,
    M = 0,
    v = 0;
  const it = vt(0, e),
    k = new Float32Array(e);
  k.forEach((O, I, d) => {
    s.getVec(R[4 * I + 0], b), s.getVec(R[4 * I + 1], G), (d[I] = Pt(b, G));
  }),
    it.sort((O, I) => k[I] - k[O]);
  const ct = [],
    at = [];
  for (let O = 0; O < e; O++) {
    const I = it[O],
      d = k[I],
      S = R[4 * I + 0],
      h = R[4 * I + 1],
      m = R[4 * I + 2],
      N = R[4 * I + 3],
      f = N === B;
    if ((s.getVec(S, b), s.getVec(h, G), f))
      J(P, A[3 * m + 0], A[3 * m + 1], A[3 * m + 2]),
        ft(V, P),
        (g.componentIndex = p.get(S)),
        (g.cosAngle = Z(P, V));
    else {
      if (
        (J(P, A[3 * m + 0], A[3 * m + 1], A[3 * m + 2]),
        J(V, A[3 * N + 0], A[3 * N + 1], A[3 * N + 2]),
        (g.componentIndex = p.get(S)),
        (g.cosAngle = Z(P, V)),
        bt(g, u))
      )
        continue;
      g.cosAngle < -0.9999 && ft(V, P);
    }
    (M += d),
      v++,
      f || _t(g, L)
        ? (n.write(r, c++, g), ct.push(d))
        : xt(g, T) && (o.write(w, D++, g), at.push(d));
  }
  const St = new Float32Array(ct.reverse()),
    Tt = new Float32Array(at.reverse());
  return {
    regular: { instancesData: n.trim(r, c), lodInfo: { lengths: St } },
    silhouette: { instancesData: o.trim(w, D), lodInfo: { lengths: Tt } },
    averageEdgeLength: M / v,
  };
}
function _t(t, n) {
  return t.cosAngle < n;
}
function bt(t, n) {
  return t.cosAngle > n;
}
function xt(t, n) {
  const o = Dt(t.cosAngle),
    l = et.fwd,
    s = et.ortho;
  return (
    yt(l, t.position1, t.position0),
    o * (Z(dt(s, t.faceNormal0, t.faceNormal1), l) > 0 ? -1 : 1) > n
  );
}
(function (t) {
  (t[(t.SOLID = 0)] = "SOLID"), (t[(t.SKETCH = 1)] = "SKETCH");
})(gt || (gt = {}));
const et = {
    edge: {
      position0: y(),
      position1: y(),
      faceNormal0: y(),
      faceNormal1: y(),
      componentIndex: 0,
      cosAngle: 0,
    },
    ortho: y(),
    fwd: y(),
  },
  Q = { v0: y(), v1: y(), v2: y() },
  Ct = { anglePlanar: 4, angleSignificantEdge: 35 };
function mt(t, n, o) {
  const l = n / 3,
    s = new Uint32Array(o + 1),
    p = new Uint32Array(o + 1),
    T = (e, r) => {
      e < r ? s[e + 1]++ : p[r + 1]++;
    };
  for (let e = 0; e < l; e++) {
    const r = t[3 * e],
      c = t[3 * e + 1],
      a = t[3 * e + 2];
    T(r, c), T(c, a), T(a, r);
  }
  let U = 0,
    L = 0;
  for (let e = 0; e < o; e++) {
    const r = s[e + 1],
      c = p[e + 1];
    (s[e + 1] = U), (p[e + 1] = L), (U += r), (L += c);
  }
  const u = new Uint32Array(6 * l),
    g = s[o],
    b = (e, r, c) => {
      if (e < r) {
        const a = s[e + 1]++;
        (u[2 * a] = r), (u[2 * a + 1] = c);
      } else {
        const a = p[r + 1]++;
        (u[2 * g + 2 * a] = e), (u[2 * g + 2 * a + 1] = c);
      }
    };
  for (let e = 0; e < l; e++) {
    const r = t[3 * e],
      c = t[3 * e + 1],
      a = t[3 * e + 2];
    b(r, c, e), b(c, a, e), b(a, r, e);
  }
  const G = (e, r) => {
    const c = 2 * e,
      a = r - e;
    for (let w = 1; w < a; w++) {
      const D = u[c + 2 * w],
        M = u[c + 2 * w + 1];
      let v = w - 1;
      for (; v >= 0 && u[c + 2 * v] > D; v--)
        (u[c + 2 * v + 2] = u[c + 2 * v]),
          (u[c + 2 * v + 3] = u[c + 2 * v + 1]);
      (u[c + 2 * v + 2] = D), (u[c + 2 * v + 3] = M);
    }
  };
  for (let e = 0; e < o; e++) G(s[e], s[e + 1]), G(g + p[e], g + p[e + 1]);
  const P = new Int32Array(3 * l),
    V = (e, r) =>
      e === t[3 * r] ? 0 : e === t[3 * r + 1] ? 1 : e === t[3 * r + 2] ? 2 : -1,
    A = (e, r) => {
      const c = V(e, r);
      P[3 * r + c] = -1;
    },
    R = (e, r, c, a) => {
      const w = V(e, r);
      P[3 * r + w] = a;
      const D = V(c, a);
      P[3 * a + D] = r;
    };
  for (let e = 0; e < o; e++) {
    let r = s[e];
    const c = s[e + 1];
    let a = p[e];
    const w = p[e + 1];
    for (; r < c && a < w; ) {
      const D = u[2 * r],
        M = u[2 * g + 2 * a];
      D === M
        ? (R(e, u[2 * r + 1], M, u[2 * g + 2 * a + 1]), r++, a++)
        : D < M
        ? (A(e, u[2 * r + 1]), r++)
        : (A(M, u[2 * g + 2 * a + 1]), a++);
    }
    for (; r < c; ) A(e, u[2 * r + 1]), r++;
    for (; a < w; ) A(u[2 * g + 2 * a], u[2 * g + 2 * a + 1]), a++;
  }
  return P;
}
let Ot = class {
  updateSettings(t) {
    (this.settings = t),
      (this._edgeHashFunction = t.reducedPrecision ? Bt : Wt);
  }
  write(t, n, o) {
    const l = this._edgeHashFunction(o);
    Y.seed = l;
    const s = Y.getIntRange(0, 255),
      p = Y.getIntRange(0, this.settings.variants - 1),
      T = Y.getFloat(),
      U =
        255 *
        (0.5 *
          (function (L, u) {
            const g = L < 0 ? -1 : 1;
            return Math.abs(L) ** u * g;
          })(
            -(1 - Math.min(T / 0.7, 1)) + Math.max(0, T - 0.7) / (1 - 0.7),
            1.2
          ) +
          0.5);
    t.position0.setVec(n, o.position0),
      t.position1.setVec(n, o.position1),
      t.componentIndex.set(n, o.componentIndex),
      t.variantOffset.set(n, s),
      t.variantStroke.set(n, p),
      t.variantExtension.set(n, U);
  }
  trim(t, n) {
    return t.slice(0, n);
  }
};
const st = new Float32Array(6),
  q = new Uint32Array(st.buffer),
  _ = new Uint32Array(1);
function Wt(t) {
  const n = st;
  (n[0] = t.position0[0]),
    (n[1] = t.position0[1]),
    (n[2] = t.position0[2]),
    (n[3] = t.position1[0]),
    (n[4] = t.position1[1]),
    (n[5] = t.position1[2]),
    (_[0] = 5381);
  for (let o = 0; o < q.length; o++) _[0] = 31 * _[0] + q[o];
  return _[0];
}
function Bt(t) {
  const n = st;
  (n[0] = K(t.position0[0])),
    (n[1] = K(t.position0[1])),
    (n[2] = K(t.position0[2])),
    (n[3] = K(t.position1[0])),
    (n[4] = K(t.position1[1])),
    (n[5] = K(t.position1[2])),
    (_[0] = 5381);
  for (let o = 0; o < q.length; o++) _[0] = 31 * _[0] + q[o];
  return _[0];
}
const Nt = 1e4;
function K(t) {
  return Math.round(t * Nt) / Nt;
}
let nt = class {
  constructor() {
    this._commonWriter = new Ot();
  }
  updateSettings(t) {
    this._commonWriter.updateSettings(t);
  }
  allocate(t) {
    return $.createBuffer(t);
  }
  write(t, n, o) {
    this._commonWriter.write(t, n, o),
      Lt(j, o.faceNormal0, o.faceNormal1),
      ht(j, j),
      t.normal.setVec(n, j);
  }
  trim(t, n) {
    return this._commonWriter.trim(t, n);
  }
};
(nt.Layout = $), (nt.glLayout = rt($, 1));
class ot {
  constructor() {
    this._commonWriter = new Ot();
  }
  updateSettings(n) {
    this._commonWriter.updateSettings(n);
  }
  allocate(n) {
    return tt.createBuffer(n);
  }
  write(n, o, l) {
    this._commonWriter.write(n, o, l),
      n.normalA.setVec(o, l.faceNormal0),
      n.normalB.setVec(o, l.faceNormal1);
  }
  trim(n, o) {
    return this._commonWriter.trim(n, o);
  }
}
(ot.Layout = tt), (ot.glLayout = rt(tt, 1));
const j = y(),
  Y = new Vt();
function qt(t) {
  const n = Gt(t.data, t.skipDeduplicate, t.indices, t.indicesLength);
  return (
    pt.updateSettings(t.writerSettings),
    It.updateSettings(t.writerSettings),
    Ut(n, pt, It)
  );
}
function Gt(t, n, o, l) {
  if (n) {
    const T = mt(o, l, t.count);
    return new Ht(o, l, T, t);
  }
  const s = wt(t.buffer, t.stride / 4, {
      originalIndices: o,
      originalIndicesLength: l,
    }),
    p = mt(s.indices, l, s.uniqueCount);
  return {
    faces: s.indices,
    facesLength: s.indices.length,
    neighbors: p,
    vertices: Ft.createView(s.buffer),
  };
}
class Ht {
  constructor(n, o, l, s) {
    (this.faces = n),
      (this.facesLength = o),
      (this.neighbors = l),
      (this.vertices = s);
  }
}
const pt = new nt(),
  It = new ot(),
  Jt = z().vec3f(i.POSITION0).vec3f(i.POSITION1),
  Qt = z()
    .vec3f(i.POSITION0)
    .vec3f(i.POSITION1)
    .u16(i.COMPONENTINDEX)
    .u16(i.U16PADDING, { glPadding: !0 });
export { Ft as A, Jt as a, qt as f, Qt as m, Ut as p, Gt as u };
