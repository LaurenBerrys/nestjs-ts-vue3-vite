import { fr as R } from "./index.8fd7165c.js";
import { t as v, n as O } from "./Indices.7165e4ff.js";
function G(f, n, e) {
  const l = Array.isArray(f),
    r = l ? f.length / n : f.byteLength / (4 * n),
    A = l ? f : new Uint32Array(f, 0, r * n),
    g = (e == null ? void 0 : e.minReduction) ?? 0,
    s = (e == null ? void 0 : e.originalIndices) || null,
    q = s ? s.length : 0,
    a = (e == null ? void 0 : e.componentOffsets) || null;
  let U = 0;
  if (a)
    for (let t = 0; t < a.length - 1; t++) {
      const c = a[t + 1] - a[t];
      c > U && (U = c);
    }
  else U = r;
  const m = Math.floor(1.1 * U) + 1;
  (y == null || y.length < 2 * m) && (y = new Uint32Array(R(2 * m)));
  for (let t = 0; t < 2 * m; t++) y[t] = 0;
  let i = 0;
  const w = !!a && !!s,
    b = w ? q : r;
  let h = v(r / 3);
  const p = new Uint32Array(q),
    k = 1.96;
  let I = g !== 0 ? Math.ceil(((4 * k * k) / (g * g)) * g * (1 - g)) : b,
    d = 1,
    j = a ? a[1] : b;
  for (let t = 0; t < b; t++) {
    if (t === I) {
      const o = 1 - i / t;
      if (o + k * Math.sqrt((o * (1 - o)) / t) < g) return null;
      I *= 2;
    }
    if (t === j) {
      for (let o = 0; o < 2 * m; o++) y[o] = 0;
      if (s) for (let o = a[d - 1]; o < a[d]; o++) p[o] = h[s[o]];
      j = a[++d];
    }
    const c = w ? s[t] : t,
      L = c * n,
      x = D(A, L, n);
    let u = x % m,
      C = i;
    for (; y[2 * u + 1] !== 0; ) {
      if (y[2 * u] === x) {
        const o = y[2 * u + 1] - 1;
        if (z(A, L, o * n, n)) {
          C = h[o];
          break;
        }
      }
      u++, u >= m && (u -= m);
    }
    C === i && ((y[2 * u] = x), (y[2 * u + 1] = c + 1), i++), (h[c] = C);
  }
  if (g !== 0 && 1 - i / r < g) return null;
  if (w) {
    for (let t = a[d - 1]; t < p.length; t++) p[t] = h[s[t]];
    h = O(p);
  }
  const M = l ? new Array(i) : new Uint32Array(i * n);
  i = 0;
  for (let t = 0; t < b; t++)
    h[t] === i && (B(A, (w ? s[t] : t) * n, M, i * n, n), i++);
  if (s && !w) {
    const t = new Uint32Array(q);
    for (let c = 0; c < t.length; c++) t[c] = h[s[c]];
    h = O(t);
  }
  return {
    buffer: Array.isArray(M) ? M : M.buffer,
    indices: h,
    uniqueCount: i,
  };
}
function z(f, n, e, l) {
  for (let r = 0; r < l; r++) if (f[n + r] !== f[e + r]) return !1;
  return !0;
}
function B(f, n, e, l, r) {
  for (let A = 0; A < r; A++) e[l + A] = f[n + A];
}
function D(f, n, e) {
  let l = 0;
  for (let r = 0; r < e; r++)
    (l = (f[n + r] + l) | 0), (l = (l + (l << 11) + (l >>> 2)) | 0);
  return l >>> 0;
}
let y = null;
export { G as r };
