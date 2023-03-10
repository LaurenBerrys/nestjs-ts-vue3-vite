import { Q as O } from "./index.8fd7165c.js";
const j = O.getLogger("esri.views.3d.support.buffer.math");
function z(t, o, e) {
  if (t.count !== o.count)
    return void j.error(
      "source and destination buffers need to have the same number of elements"
    );
  const s = t.count,
    r = e[0],
    u = e[1],
    d = e[2],
    i = e[4],
    n = e[5],
    f = e[6],
    c = e[8],
    y = e[9],
    B = e[10],
    p = e[12],
    l = e[13],
    g = e[14],
    M = t.typedBuffer,
    h = t.typedBufferStride,
    m = o.typedBuffer,
    _ = o.typedBufferStride;
  for (let a = 0; a < s; a++) {
    const S = a * h,
      b = a * _,
      v = m[b],
      x = m[b + 1],
      I = m[b + 2];
    (M[S] = r * v + i * x + c * I + p),
      (M[S + 1] = u * v + n * x + y * I + l),
      (M[S + 2] = d * v + f * x + B * I + g);
  }
}
function P(t, o, e) {
  if (t.count !== o.count)
    return void j.error(
      "source and destination buffers need to have the same number of elements"
    );
  const s = t.count,
    r = e[0],
    u = e[1],
    d = e[2],
    i = e[3],
    n = e[4],
    f = e[5],
    c = e[6],
    y = e[7],
    B = e[8],
    p = t.typedBuffer,
    l = t.typedBufferStride,
    g = o.typedBuffer,
    M = o.typedBufferStride;
  for (let h = 0; h < s; h++) {
    const m = h * l,
      _ = h * M,
      a = g[_],
      S = g[_ + 1],
      b = g[_ + 2];
    (p[m] = r * a + i * S + c * b),
      (p[m + 1] = u * a + n * S + y * b),
      (p[m + 2] = d * a + f * S + B * b);
  }
}
function T(t, o, e) {
  const s = Math.min(t.count, o.count),
    r = t.typedBuffer,
    u = t.typedBufferStride,
    d = o.typedBuffer,
    i = o.typedBufferStride;
  for (let n = 0; n < s; n++) {
    const f = n * u,
      c = n * i;
    (r[f] = e * d[c]), (r[f + 1] = e * d[c + 1]), (r[f + 2] = e * d[c + 2]);
  }
}
function q(t, o) {
  const e = Math.min(t.count, o.count),
    s = t.typedBuffer,
    r = t.typedBufferStride,
    u = o.typedBuffer,
    d = o.typedBufferStride;
  for (let i = 0; i < e; i++) {
    const n = i * r,
      f = i * d,
      c = u[f],
      y = u[f + 1],
      B = u[f + 2],
      p = c * c + y * y + B * B;
    if (p > 0) {
      const l = 1 / Math.sqrt(p);
      (s[n] = l * c), (s[n + 1] = l * y), (s[n + 2] = l * B);
    }
  }
}
function w(t, o, e) {
  const s = Math.min(t.count, o.count),
    r = t.typedBuffer,
    u = t.typedBufferStride,
    d = o.typedBuffer,
    i = o.typedBufferStride;
  for (let n = 0; n < s; n++) {
    const f = n * u,
      c = n * i;
    (r[f] = d[c] >> e), (r[f + 1] = d[c + 1] >> e), (r[f + 2] = d[c + 2] >> e);
  }
}
function L(t, o, e) {
  const s = t.typedBuffer,
    r = t.typedBufferStride,
    u = o.typedBuffer,
    d = o.typedBufferStride,
    i = e ? e.count : o.count;
  let n = (e && e.dstIndex ? e.dstIndex : 0) * r,
    f = (e && e.srcIndex ? e.srcIndex : 0) * d;
  for (let c = 0; c < i; ++c)
    (s[n] = u[f]),
      (s[n + 1] = u[f + 1]),
      (s[n + 2] = u[f + 2]),
      (n += r),
      (f += d);
}
function Q(t, o, e, s, r) {
  const u = t.typedBuffer,
    d = t.typedBufferStride,
    i = (r == null ? void 0 : r.count) ?? t.count;
  let n = ((r == null ? void 0 : r.dstIndex) ?? 0) * d;
  for (let f = 0; f < i; ++f)
    (u[n] = o), (u[n + 1] = e), (u[n + 2] = s), (n += d);
}
Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      normalize: q,
      scale: T,
      shiftRight: w,
      transformMat3: P,
      transformMat4: z,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
),
  Object.freeze(
    Object.defineProperty(
      { __proto__: null, copy: L, fill: Q },
      Symbol.toStringTag,
      {
        value: "Module",
      }
    )
  );
export { j as a, Q as b, L as e, T as f, w as n, q as o, P as r, z as t };
