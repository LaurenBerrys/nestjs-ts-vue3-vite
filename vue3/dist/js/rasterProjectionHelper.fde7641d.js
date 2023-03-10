import {
  dU as nn,
  aG as bn,
  ar as X,
  Y as j,
  t as k,
  r as G,
  $ as Y,
  bn as Gn,
  R as N,
  dV as Nn,
  s as En,
  dW as C,
  dX as v,
  dY as sn,
  dZ as kn,
  d_ as Tn,
  aH as vn,
  d$ as an,
} from "./index.8fd7165c.js";
var Z, W;
function pn(n, e, o) {
  return !Nn(n, e, o);
}
function A(n, e, o) {
  const l = pn(n, e, o);
  if (l && !nn())
    throw new En(
      "rasterprojectionhelper-project",
      "projection engine is not loaded"
    );
  return l;
}
((W = Z || (Z = {}))[(W.None = 0)] = "None"),
  (W[(W.North = 1)] = "North"),
  (W[(W.South = 2)] = "South"),
  (W[(W.Both = 3)] = "Both");
const rn = (n, e, o, l = 0) => {
    if (o[0] === 1) return [0, 0];
    let a = 1,
      t = -1,
      i = 1,
      x = -1;
    for (let s = 0; s < n.length; s += 2)
      isNaN(n[s]) ||
        ((a = a > n[s] ? n[s] : a),
        (t = t > n[s] ? t : n[s]),
        (i = i > n[s + 1] ? n[s + 1] : i),
        (x = x > n[s + 1] ? x : n[s + 1]));
    const { cols: f, rows: c } = e,
      r = (t - a) / f / o[0],
      d = (x - i) / c / o[1],
      h = 2 * l;
    let m = 0,
      g = !1,
      u = [0, 0];
    for (let s = 0; s < f - 3; s++) {
      for (let w = 0; w < c - 3; w++) {
        const y = s * c * 2 + 2 * w,
          p = (n[y] + n[y + 4] + n[y + 4 * c] + n[y + 4 * c + 4]) / 4,
          M = (n[y + 1] + n[y + 5] + n[y + 4 * c + 1] + n[y + 4 * c + 5]) / 4,
          R = Math.abs((p - n[y + 2 * c + 2]) / r),
          P = Math.abs((M - n[y + 2 * c + 3]) / d);
        if ((R + P > m && ((m = R + P), (u = [R, P])), h && m > h)) {
          g = !0;
          break;
        }
      }
      if (g) break;
    }
    return u;
  },
  Cn = {
    3395: 20037508342789244e-9,
    3410: 17334193943686873e-9,
    3857: 20037508342788905e-9,
    3975: 17367530445161372e-9,
    4087: 20037508342789244e-9,
    4088: 20015108787169147e-9,
    6933: 17367530445161372e-9,
    32662: 20037508342789244e-9,
    53001: 2001508679602057e-8,
    53002: 1000754339801029e-8,
    53003: 2001508679602057e-8,
    53004: 2001508679602057e-8,
    53016: 14152803599503474e-9,
    53017: 17333573624304302e-9,
    53034: 2001508679602057e-8,
    53079: 20015114352186374e-9,
    53080: 20015114352186374e-9,
    54001: 20037508342789244e-9,
    54002: 10018754171394624e-9,
    54003: 20037508342789244e-9,
    54004: 20037508342789244e-9,
    54016: 14168658027268292e-9,
    54017: 1736753044516137e-8,
    54034: 20037508342789244e-9,
    54079: 20037508342789244e-9,
    54080: 20037508342789244e-9,
    54100: 20037508342789244e-9,
    54101: 20037508342789244e-9,
  },
  I = 32,
  F = 4,
  K = F,
  V = new Map(),
  H = new Map(),
  q = 500;
async function On() {
  nn() || (await bn());
}
function jn(n, e, o) {
  return A(n.spatialReference, e)
    ? o
      ? an(e, n.spatialReference, n)
      : an(n.spatialReference, e, n)
    : null;
}
function ln(n, e, o, l = null) {
  const a = n.spatialReference;
  if (a.equals(e)) return n;
  A(a, e, l);
  const t = o.center,
    i = new X({
      xmin: t.x - n.x / 2,
      xmax: t.x + n.x / 2,
      ymin: t.y - n.y / 2,
      ymax: t.y + n.y / 2,
      spatialReference: a,
    }),
    x = j(i, e, l),
    f = _(e);
  let c;
  if (k(x) || (G(f) && x.width >= f)) {
    const r = Y(a) / Y(e);
    c = { x: n.x * r, y: n.y * r };
  } else c = { x: x.width, y: x.height };
  return c;
}
function E(n, e = 0.01) {
  return Y(n) ? e / Y(n) : 0;
}
function cn(n, e, o = null, l = !0) {
  const a = n.spatialReference;
  if (a.equals(e)) return n;
  A(a, e, o);
  const t = j(n, e, o);
  return l && t && gn([n], [t], a, e), t;
}
function gn(n, e, o, l) {
  const a = J(o, !0),
    t = J(l, !0),
    i = E(o, q),
    x = E(l, q);
  if (i && G(a) && G(t))
    for (let f = 0; f < n.length; f++) {
      const c = e[f];
      if (!c) continue;
      const { x: r } = n[f],
        { x: d } = c;
      d >= t[1] - x && Math.abs(r - a[0]) < i
        ? (c.x -= t[1] - t[0])
        : d <= t[0] + x && Math.abs(r - a[1]) < i && (c.x += t[1] - t[0]);
    }
}
function _n(n) {
  const { inSR: e, outSR: o, datumTransformation: l, preferPE: a } = n;
  if (e.equals(o)) {
    const { points: t } = D(n, null);
    return t;
  }
  if ((e.isWebMercator && o.isWGS84) || (e.isWGS84 && o.isWebMercator))
    return (function (t) {
      const {
        cols: i,
        rows: x,
        xres: f,
        yres: c,
        usePixelCenter: r,
        inSR: d,
        outSR: h,
      } = t;
      let { xmin: m, ymax: g } = t;
      r && ((m += f / 2), (g -= c / 2));
      const u = [],
        s = [],
        w = Math.max(i, x);
      for (let p = 0; p < w; p++) {
        const M = m + f * Math.min(i, p),
          R = g - c * Math.min(x, p),
          P = j(new N({ x: M, y: R, spatialReference: d }), h);
        p <= i && u.push(P.x), p <= x && s.push(P.y);
      }
      const y = [];
      for (let p = 0; p < i; p++)
        for (let M = 0; M < x; M++) y.push([u[p], s[M]]);
      return y;
    })(n);
  if (A(e, o, l) && a) {
    if (e.isGeographic) return fn(n);
    const t = O(e);
    if (G(t)) return fn(n);
  }
  return (function (t) {
    const { points: i } = D(t, null),
      { inSR: x, outSR: f, datumTransformation: c } = t,
      r = i.map((h) => new N(h[0], h[1], x)),
      d = j(r, f, c);
    return c && gn(r, d, x, f), d.map((h) => (h ? [h.x, h.y] : [NaN, NaN]));
  })(n);
}
function fn(n) {
  const { inSR: e, outSR: o, datumTransformation: l } = n,
    a = O(e),
    { points: t, mask: i } = D(n, a);
  if (!e.isGeographic) {
    const f = e.wkid
      ? C.coordsys(e.wkid)
      : C.fromString(
          e.isGeographic ? v.PE_TYPE_GEOGCS : v.PE_TYPE_PROJCS,
          e.wkt
        );
    sn.projToGeog(f, t.length, t);
  }
  if (G(l) && l.steps.length) {
    let f;
    if (
      (o.isGeographic &&
        (f = t.map(([r]) => (r > 179.9955 ? 1 : r < -179.9955 ? -1 : 0))),
      l.steps.forEach((r) => {
        const d = r.wkid
          ? C.geogtran(r.wkid)
          : C.fromString(v.PE_TYPE_GEOGTRAN, r.wkt);
        kn.geogToGeog(
          d,
          t.length,
          t,
          null,
          r.isInverse ? v.PE_TRANSFORM_2_TO_1 : v.PE_TRANSFORM_1_TO_2
        );
      }),
      f)
    )
      for (let r = 0; r < t.length; r++) {
        const d = f[r],
          h = t[r][0],
          m = h > 179.9955 ? 1 : h < -179.9955 ? -1 : 0;
        d && m && d !== m && (t[r][0] = d > 0 ? h + 360 : h - 360);
      }
  }
  if (!o.isGeographic) {
    const f = O(o, !0),
      c = G(f) && f.isEnvelope ? [f.bbox[1], f.bbox[3]] : [-90, 90];
    (function (d, h) {
      const [m, g] = h;
      for (let u = 0; u < d.length; u++) {
        const s = d[u][1];
        (s < m || s > g) && (d[u] = [NaN, NaN]);
      }
    })(t, c);
    const r = o.wkid
      ? C.coordsys(o.wkid)
      : C.fromString(
          o.isGeographic ? v.PE_TYPE_GEOGCS : v.PE_TYPE_PROJCS,
          o.wkt
        );
    sn.geogToProj(r, t.length, t);
  }
  let x = t;
  if (i && t.length !== i.length) {
    x = [];
    for (let f = 0, c = 0; f < i.length; f++)
      i[f] ? x.push(t[c++]) : x.push([NaN, NaN]);
  }
  return x;
}
function O(n, e = !1) {
  let o = n.wkid || n.wkt;
  if (!o || n.isGeographic) return null;
  if (((o = String(o)), V.has(o))) {
    const i = V.get(o);
    return e ? (i == null ? void 0 : i.gcs) : i == null ? void 0 : i.pcs;
  }
  const l = n.wkid
      ? C.coordsys(n.wkid)
      : C.fromString(
          n.isGeographic ? v.PE_TYPE_GEOGCS : v.PE_TYPE_PROJCS,
          n.wkt
        ),
    a = un(l, E(n, 1e-4)),
    t = un(l, 0, !0);
  return V.set(o, { pcs: a, gcs: t }), e ? t : a;
}
function un(n, e = 0, o = !1) {
  const l = Tn.generate(n),
    a = o ? n.horizonGcsGenerate() : n.horizonPcsGenerate();
  if (!l || !(a != null && a.length)) return null;
  let t = !1,
    i = a.find((s) => s.getInclusive() === 1 && s.getKind() === 1);
  if (!i) {
    if (((i = a.find((s) => s.getInclusive() === 1 && s.getKind() === 0)), !i))
      return null;
    t = !0;
  }
  const x = o
      ? 0
      : (l.getNorthPoleLocation() === 2 ? 1 : 0) |
        (l.getSouthPoleLocation() === 2 ? 2 : 0),
    f = l.isPannableRectangle(),
    c = i.getCoord();
  if (t)
    return {
      isEnvelope: t,
      isPannable: f,
      vertices: c,
      coef: null,
      bbox: [c[0][0] - e, c[0][1] - e, c[1][0] + e, c[1][1] + e],
      poleLocation: x,
    };
  let r = 0;
  const d = [];
  let [h, m] = c[0],
    [g, u] = c[0];
  for (let s = 0, w = c.length; s < w; s++) {
    r++, r === w && (r = 0);
    const [y, p] = c[s],
      [M, R] = c[r];
    if (R === p) d.push([y, M, p, R, 2]);
    else {
      const P = (M - y) / (R - p || 1e-4),
        S = y - P * p;
      p < R ? d.push([P, S, p, R, 0]) : d.push([P, S, R, p, 1]);
    }
    (h = h < y ? h : y),
      (m = m < p ? m : p),
      (g = g > y ? g : y),
      (u = u > p ? u : p);
  }
  return {
    isEnvelope: !1,
    isPannable: f,
    vertices: c,
    coef: d,
    bbox: [h, m, g, u],
    poleLocation: x,
  };
}
function D(n, e) {
  const o = [],
    { cols: l, rows: a, xres: t, yres: i, usePixelCenter: x } = n;
  let { xmin: f, ymax: c } = n;
  if ((x && ((f += t / 2), (c -= i / 2)), k(e))) {
    for (let m = 0; m < l; m++)
      for (let g = 0; g < a; g++) o.push([f + t * m, c - i * g]);
    return { points: o };
  }
  const r = new Uint8Array(l * a);
  if (e.isEnvelope) {
    const {
      bbox: [m, g, u, s],
    } = e;
    for (let w = 0, y = 0; w < l; w++) {
      const p = f + t * w,
        M = e.isPannable || (p >= m && p <= u);
      for (let R = 0; R < a; R++, y++) {
        const P = c - i * R;
        M && P >= g && P <= s && (o.push([p, P]), (r[y] = 1));
      }
    }
    return { points: o, mask: r };
  }
  const d = e.coef,
    h = [];
  for (let m = 0; m < a; m++) {
    const g = c - i * m,
      u = [],
      s = [];
    for (let y = 0; y < d.length; y++) {
      const [p, M, R, P, S] = d[y];
      if (g === R && R === P) u.push(p), u.push(M), s.push(2), s.push(2);
      else if (g >= R && g <= P) {
        const T = p * g + M;
        u.push(T), s.push(S);
      }
    }
    let w = u;
    if (u.length > 2) {
      let y = s[0] === 2 ? 0 : s[0],
        p = u[0];
      w = [];
      for (let M = 1; M < s.length; M++)
        (s[M] === 2 && M !== s.length - 1) ||
          (s[M] !== y &&
            (w.push(y === 0 ? Math.min(p, u[M - 1]) : Math.max(p, u[M - 1])),
            (y = s[M]),
            (p = u[M])),
          M === s.length - 1 &&
            w.push(s[M] === 0 ? Math.min(p, u[M]) : Math.max(p, u[M])));
      w.sort((M, R) => M - R);
    } else u[0] > u[1] && (w = [u[1], u[0]]);
    h.push(w);
  }
  for (let m = 0, g = 0; m < l; m++) {
    const u = f + t * m;
    for (let s = 0; s < a; s++, g++) {
      const w = c - i * s,
        y = h[s];
      if (y.length === 2)
        u >= y[0] && u <= y[1] && (o.push([u, w]), (r[g] = 1));
      else if (y.length > 2) {
        let p = !1;
        for (let M = 0; M < y.length; M += 2)
          if (u >= y[M] && u <= y[M + 1]) {
            p = !0;
            break;
          }
        p && (o.push([u, w]), (r[g] = 1));
      }
    }
  }
  return { points: o, mask: r };
}
function yn(n) {
  const e = _(n[0].spatialReference);
  if (n.length < 2 || k(e)) return n[0];
  let { xmin: o, xmax: l, ymin: a, ymax: t } = n[0];
  for (let i = 1; i < n.length; i++) {
    const x = n[i];
    (l = x.xmax + e * i), (a = Math.min(a, x.ymin)), (t = Math.max(t, x.ymax));
  }
  return new X({
    xmin: o,
    xmax: l,
    ymin: a,
    ymax: t,
    spatialReference: n[0].spatialReference,
  });
}
function dn(n, e, o = null, l = !0) {
  const a = n.spatialReference;
  if (a.equals(e)) return n;
  const t = Wn(n),
    i = _(a, !0),
    x = _(e);
  if (t === 0 || k(i) || k(x)) {
    const c = xn(n, e, o, l);
    if (k(i) && G(x) && Math.abs(c.width - x) < E(e) && nn()) {
      const r = O(a);
      if (
        G(r) &&
        r.poleLocation === Z.None &&
        n.width < (r.bbox[2] - r.bbox[0]) / 2
      )
        return zn(n, e) || c;
    }
    return c;
  }
  const f = n.clone().normalize();
  if (f.length === 1 && n.xmax < i && n.xmax - i / 2 > E(a)) {
    const { xmin: c, xmax: r } = n;
    for (let d = 0; d <= t; d++) {
      const h = d === 0 ? c : -i / 2,
        m = d === t ? r - i * d : i / 2;
      f[d] = new X({
        xmin: h,
        xmax: m,
        ymin: n.ymin,
        ymax: n.ymax,
        spatialReference: a,
      });
    }
  }
  return yn(f.map((c) => xn(c, e, o, l)).filter(G));
}
function zn(n, e) {
  const o = _(e);
  if (k(o)) return null;
  let { xmin: l, ymin: a, xmax: t, ymax: i } = n;
  const x = n.spatialReference,
    f = new Gn({
      spatialReference: x,
      rings: [
        [
          [l, a],
          [t, a],
          [t, i],
          [l, i],
          [l, a],
        ],
      ],
    }),
    c = j(f, e);
  if (c.rings.length !== 2 || !c.rings[0].length || !c.rings[1].length)
    return null;
  const { rings: r } = c,
    d = E(x),
    h = new X({ spatialReference: e });
  for (let m = 0; m < 2; m++) {
    (l = t = r[m][0][0]), (a = i = r[m][0][1]);
    for (let g = 0; g < r[m].length; g++)
      (l = l > r[m][g][0] ? r[m][g][0] : l),
        (t = t < r[m][g][0] ? r[m][g][0] : t),
        (a = a > r[m][g][1] ? r[m][g][1] : a),
        (i = i < r[m][g][1] ? r[m][g][1] : i);
    if (m === 0) (h.ymin = a), (h.ymax = i), (h.xmin = l), (h.xmax = t);
    else if (
      ((h.ymin = Math.min(h.ymin, a)),
      (h.ymax = Math.max(h.ymax, i)),
      Math.abs(t - o / 2) < d)
    )
      (h.xmin = l), (h.xmax = h.xmax + o);
    else {
      if (!(Math.abs(l + o / 2) < d)) return null;
      h.xmax = t + o;
    }
  }
  return h;
}
function xn(n, e, o = null, l = !0, a = !0) {
  const t = n.spatialReference;
  if (t.equals(e) || !e) return n;
  A(t, e, o);
  const i = j(n, e, o);
  if (
    a &&
    e.isWebMercator &&
    i &&
    ((i.ymax = Math.min(20037508342787e-6, i.ymax)),
    (i.ymin = Math.max(-20037508342787e-6, i.ymin)),
    i.ymin >= i.ymax)
  )
    return null;
  if (!l || !i) return i;
  const x = J(t, !0),
    f = J(e, !0);
  if (k(x) || k(f)) return i;
  const c = E(t, 0.001),
    r = E(t, q),
    d = E(e, 0.001);
  if (Math.abs(i.xmin - f[0]) < d && Math.abs(i.xmax - f[1]) < d) {
    const h = Math.abs(n.xmin - x[0]),
      m = Math.abs(x[1] - n.xmax);
    if (h < c && m > r) {
      i.xmin = f[0];
      const g = [];
      g.push(new N(n.xmax, n.ymin, t)),
        g.push(new N(n.xmax, (n.ymin + n.ymax) / 2, t)),
        g.push(new N(n.xmax, n.ymax, t));
      const u = g
        .map((s) => cn(s, e, o))
        .filter((s) => !isNaN(s == null ? void 0 : s.x))
        .map((s) => s.x);
      i.xmax = Math.max.apply(null, u);
    }
    if (m < c && h > r) {
      i.xmax = f[1];
      const g = [];
      g.push(new N(n.xmin, n.ymin, t)),
        g.push(new N(n.xmin, (n.ymin + n.ymax) / 2, t)),
        g.push(new N(n.xmin, n.ymax, t));
      const u = g
        .map((s) => cn(s, e, o))
        .filter((s) => !isNaN(s == null ? void 0 : s.x))
        .map((s) => s.x);
      i.xmin = Math.min.apply(null, u);
    }
  } else {
    const h = E(e, 0.001);
    Math.abs(i.xmin - f[0]) < h && (i.xmin = f[0]),
      Math.abs(i.xmax - f[1]) < h && (i.xmax = f[1]);
  }
  return i;
}
function _(n, e = !1) {
  if (!n) return null;
  const o = e ? 20037508342787e-6 : 20037508342788905e-9;
  return n.isWebMercator
    ? 2 * o
    : n.wkid && n.isGeographic
    ? 360
    : 2 * Cn[n.wkid] || null;
}
function J(n, e = !1) {
  if (n.isGeographic) return [-180, 180];
  const o = _(n, e);
  return G(o) ? [-o / 2, o / 2] : null;
}
function hn(n, e, o, l) {
  let a = (n - e) / o;
  return a - Math.floor(a) != 0 ? (a = Math.floor(a)) : l && (a -= 1), a;
}
function Wn(n, e = !1) {
  const o = _(n.spatialReference);
  if (k(o)) return 0;
  const l = e ? 0 : -o / 2,
    a = E(n.spatialReference),
    t = !e && Math.abs(n.xmax - o / 2) < a ? o / 2 : n.xmax,
    i = !e && Math.abs(n.xmin + o / 2) < a ? -o / 2 : n.xmin;
  return hn(t, l, o, !0) - hn(i, l, o, !1);
}
function Yn(n) {
  const e = n.storageInfo.origin.x,
    o = _(n.spatialReference, !0);
  if (k(o)) return { originX: e, halfWorldWidth: null, pyramidsInfo: null };
  const l = o / 2,
    { nativePixelSize: a, storageInfo: t, extent: i } = n,
    { maximumPyramidLevel: x, blockWidth: f, pyramidScalingFactor: c } = t;
  let r = a.x;
  const d = [],
    h = G(n.transform) && n.transform.type === "gcs-shift",
    m = e + (h ? 0 : l),
    g = h ? o - e : l - e;
  for (let u = 0; u <= x; u++) {
    const s = (i.xmax - e) / r / f,
      w = s - Math.floor(s) == 0 ? s : Math.ceil(s),
      y = g / r / f,
      p = y - Math.floor(y) == 0 ? y : Math.ceil(y),
      M = Math.floor(m / r / f),
      R = Math.round(m / r) % f,
      P = (f - (Math.round(g / r) % f)) % f;
    d.push({
      resolutionX: r,
      blockWidth: f,
      datsetColumnCount: w,
      worldColumnCountFromOrigin: p,
      leftMargin: R,
      rightPadding: P,
      originColumnOffset: M,
    }),
      (r *= c);
  }
  return {
    originX: e,
    halfWorldWidth: l,
    pyramidsInfo: d,
    hasGCSSShiftTransform: h,
  };
}
function An(n) {
  const e = n.isAdaptive && n.spacing == null;
  let o = n.spacing || [I, I],
    l = Q(n),
    a = { cols: l.size[0] + 1, rows: l.size[1] + 1 };
  const t =
    l.outofBoundPointCount > 0 && l.outofBoundPointCount < l.offsets.length / 2;
  let i =
    l.outofBoundPointCount === l.offsets.length / 2 || (e && t)
      ? [0, 0]
      : rn(l.offsets, a, o, K);
  const x = (i[0] + i[1]) / 2,
    f = n.projectedExtent.spatialReference,
    c = n.srcBufferExtent.spatialReference;
  if (
    (e &&
      (t || x > K) &&
      (pn(f, c, n.datumTransformation) && (f.isGeographic || G(O(f))),
      (o = [F, F]),
      (l = Q({ ...n, spacing: o })),
      (a = { cols: l.size[0] + 1, rows: l.size[1] + 1 }),
      (i = rn(l.offsets, a, o, K))),
    (l.error = i),
    o[0] > 1 && (l.coefficients = mn(l.offsets, a, t)),
    n.includeGCSGrid && !f.isGeographic && !f.isWebMercator)
  )
    if (c.isGeographic)
      l.gcsGrid = {
        offsets: l.offsets,
        coefficients: l.coefficients,
        spacing: o,
      };
    else {
      const r = O(f);
      if (G(r) && !r.isEnvelope) {
        const d = (function (u) {
            if (!u || u.isGeographic) return u;
            const s = String(u.wkid || u.wkt);
            let w;
            return (
              H.has(s)
                ? (w = H.get(s))
                : ((w = (
                    u.wkid
                      ? C.coordsys(u.wkid)
                      : C.fromString(v.PE_TYPE_PROJCS, u.wkt)
                  )
                    .getGeogcs()
                    .getCode()),
                  H.set(s, w)),
              new vn({ wkid: w })
            );
          })(f),
          h = dn(n.projectedExtent, d),
          { offsets: m } = Q({ ...n, srcBufferExtent: h, spacing: o }),
          g = mn(m, a, t);
        l.gcsGrid = { offsets: m, coefficients: g, spacing: o };
      }
    }
  return l;
}
function Q(n) {
  const {
      projectedExtent: e,
      srcBufferExtent: o,
      pixelSize: l,
      datumTransformation: a,
      rasterTransform: t,
    } = n,
    i = e.spatialReference,
    x = o.spatialReference,
    f = A(i, x),
    { xmin: c, ymin: r, xmax: d, ymax: h } = e,
    m = _(x),
    g =
      G(m) &&
      (n.hasWrapAround || (t == null ? void 0 : t.type) === "gcs-shift"),
    u = n.spacing || [I, I],
    s = u[0] * l.x,
    w = u[1] * l.y,
    y = u[0] === 1,
    p = Math.ceil((d - c) / s - 0.1 / u[0]) + (y ? 0 : 1),
    M = Math.ceil((h - r) / w - 0.1 / u[1]) + (y ? 0 : 1),
    R = _n({
      cols: p,
      rows: M,
      xmin: c,
      ymax: h,
      xres: s,
      yres: w,
      inSR: i,
      outSR: x,
      datumTransformation: a,
      preferPE: u[0] <= F,
      usePixelCenter: y,
    }),
    P = [];
  let S,
    T = 0;
  const L = y ? -1 : NaN,
    { xmin: tn, xmax: U, ymax: Mn, width: wn, height: Rn } = o,
    Pn = E(x, q),
    Sn = G(m) && tn > 0 && U > m / 2;
  let en = !1;
  if (f) {
    const z = O(i);
    en = G(z) && z.poleLocation > 0;
  }
  for (let z = 0; z < p; z++) {
    const $ = [];
    for (let B = 0; B < M; B++) {
      let b = R[z * M + B];
      if (
        (g && b[0] > U && b[0] > m / 2 - Pn
          ? (b[0] -= m)
          : g && z === 0 && b[0] < 0 && Sn && !t && (b[0] += m),
        !b || isNaN(b[0]) || isNaN(b[1]))
      )
        P.push(L), P.push(L), $.push(null), T++;
      else {
        if (t) {
          const on = t.inverseTransform(
            new N({ x: b[0], y: b[1], spatialReference: x })
          );
          b = [on.x, on.y];
        }
        $.push(b),
          z > 0 &&
            g &&
            S[B] &&
            b[0] < S[B][0] &&
            ((b[0] += m), en && b[0] > U && b[0] > m && (b[0] -= m)),
          P.push((b[0] - tn) / wn),
          P.push((Mn - b[1]) / Rn);
      }
    }
    S = $;
  }
  return {
    offsets: P,
    error: null,
    coefficients: null,
    outofBoundPointCount: T,
    spacing: u,
    size: y ? [p, M] : [p - 1, M - 1],
  };
}
function mn(n, e, o) {
  const { cols: l, rows: a } = e,
    t = new Float32Array((l - 1) * (a - 1) * 2 * 6),
    i = new Float32Array([-0, -1, 1, -1, 1, -0, 1, -0, -0]),
    x = new Float32Array([-1, 1, 0, 0, -1, 1, 1, 0, 0]);
  for (let f = 0; f < l - 1; f++) {
    for (let c = 0; c < a - 1; c++) {
      let r = f * a * 2 + 2 * c;
      const d = n[r],
        h = n[r + 1],
        m = n[r + 2],
        g = n[r + 3];
      r += 2 * a;
      const u = n[r],
        s = n[r + 1],
        w = n[r + 2],
        y = n[r + 3];
      let p = 0,
        M = 12 * (c * (l - 1) + f);
      for (let R = 0; R < 3; R++) t[M++] = i[p++] * d + i[p++] * m + i[p++] * w;
      p = 0;
      for (let R = 0; R < 3; R++) t[M++] = i[p++] * h + i[p++] * g + i[p++] * y;
      p = 0;
      for (let R = 0; R < 3; R++) t[M++] = x[p++] * d + x[p++] * u + x[p++] * w;
      p = 0;
      for (let R = 0; R < 3; R++) t[M++] = x[p++] * h + x[p++] * s + x[p++] * y;
    }
    if (o) for (let c = 0; c < t.length; c++) isNaN(t[c]) && (t[c] = -1);
  }
  return t;
}
function Bn(n) {
  const e = n.clone().normalize();
  return e.length === 1 ? e[0] : yn(e);
}
function In(n, e, o) {
  const { storageInfo: l, pixelSize: a } = e;
  let t = 0,
    i = !1;
  const { pyramidResolutions: x } = l;
  if (G(x) && x.length) {
    const h = (n.x + n.y) / 2,
      m = x[x.length - 1],
      g = (m.x + m.y) / 2,
      u = (a.x + a.y) / 2;
    if (h <= u) t = 0;
    else if (h >= g) (t = x.length), (i = h / g > 8);
    else {
      let w,
        y = u;
      for (let p = 1; p <= x.length; p++) {
        if (((w = (x[p - 1].x + x[p - 1].y) / 2), h <= w)) {
          h === w
            ? (t = p)
            : o === "down"
            ? ((t = p - 1), (i = h / y > 8))
            : (t = o === "up" || h - y > w - h || h / y > 2 ? p : p - 1);
          break;
        }
        y = w;
      }
    }
    const s = t === 0 ? a : x[t - 1];
    return (
      i && Math.min(s.x, s.y) * Y(e.spatialReference) > 19567 && (i = !1),
      {
        pyramidLevel: t,
        pyramidResolution: new N({
          x: s.x,
          y: s.y,
          spatialReference: e.spatialReference,
        }),
        excessiveReading: i,
      }
    );
  }
  const f = Math.log(n.x / a.x) / Math.LN2,
    c = Math.log(n.y / a.y) / Math.LN2,
    r = e.storageInfo.maximumPyramidLevel || 0;
  (t =
    o === "down"
      ? Math.floor(Math.min(f, c))
      : o === "up"
      ? Math.ceil(Math.max(f, c))
      : Math.round((f + c) / 2)),
    t < 0 ? (t = 0) : t > r && ((i = t > r + 3), (t = r));
  const d = 2 ** t;
  return {
    pyramidLevel: t,
    pyramidResolution: new N({
      x: d * e.nativePixelSize.x,
      y: d * e.nativePixelSize.y,
      spatialReference: e.spatialReference,
    }),
    excessiveReading: i,
  };
}
function Fn(n, e, o = 512, l = !0) {
  var P;
  const { extent: a, spatialReference: t, pixelSize: i } = n,
    x = ln(new N({ x: i.x, y: i.y, spatialReference: t }), e, a);
  if (x == null)
    return {
      projectedPixelSize: null,
      scales: null,
      srcResolutions: null,
      isCustomTilingScheme: !1,
    };
  const f = (x.x + x.y) / 2,
    c = Y(e),
    r = f * c * 96 * 39.37,
    d = e.isGeographic
      ? (256 / o) * 2958287637958547e-7
      : (256 / o) * 591657527591555e-6;
  let h = n.dataType === "vector-magdir" || n.dataType === "vector-uv";
  const m = dn(a, e),
    g = Math.min(
      Math.ceil(Math.log(Math.min(n.width, n.height) / 32) / Math.LN2),
      Math.ceil(Math.log(d / 2 / r) / Math.LN2)
    );
  if (
    !h &&
    l &&
    (e.isGeographic || e.isWebMercator) &&
    ((h = m.xmin * m.xmax < 0), !h && g < 3)
  ) {
    const S = _(e);
    if (G(S)) {
      const T = 2 ** g * f * o,
        L = Math.ceil(S / T);
      h = L === 1 || (L === 2 && S / 2 - m.xmax < T);
    }
  }
  let u,
    s = r;
  const w = 1.001,
    y = Math.min(
      2,
      Math.max(
        1.414,
        ((P = n.storageInfo) == null ? void 0 : P.pyramidScalingFactor) || 2
      )
    );
  if (h) {
    s = d;
    const S = e.isGeographic ? 1341104507446289e-21 : 0.29858214164761665,
      T = S * (96 * c * 39.37),
      L = e.isGeographic ? 4326 : 3857;
    (u = ln(new N({ x: S, y: S, spatialReference: { wkid: L } }), t, m)),
      (u.x *= s / T),
      (u.y *= s / T);
  } else {
    u = { x: i.x, y: i.y };
    let S = 0;
    for (; s < d * (w / 2) && S < g; ) S++, (s *= y), (u.x *= y), (u.y *= y);
    Math.max(s, d) / Math.min(s, d) <= w && (s = d);
  }
  const p = [s],
    M = [{ x: u.x, y: u.y }],
    R = Math.min(70.5310735, r) / w;
  for (; s >= R; )
    (s /= y), (u.x /= y), (u.y /= y), p.push(s), M.push({ x: u.x, y: u.y });
  return {
    projectedPixelSize: x,
    scales: p,
    srcResolutions: M,
    isCustomTilingScheme: !h,
  };
}
export {
  An as $,
  ln as C,
  dn as J,
  pn as M,
  Wn as Q,
  On as T,
  _ as U,
  Yn as V,
  Fn as i,
  cn as j,
  Bn as n,
  In as o,
  jn as v,
};
