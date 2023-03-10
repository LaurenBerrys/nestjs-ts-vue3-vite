import {
  ck as g,
  cl as M,
  r as n,
  _ as Z,
  cm as o,
  ac as u,
  cn as c,
  cf as h,
  co as l,
} from "./index.8fd7165c.js";
import { t as p } from "./json.495fc412.js";
const a = [0, 0];
function f(t, s) {
  if (!s) return null;
  if ("x" in s) {
    const e = { x: 0, y: 0 };
    return (
      ([e.x, e.y] = t(s.x, s.y, a)),
      s.z != null && (e.z = s.z),
      s.m != null && (e.m = s.m),
      e
    );
  }
  if ("xmin" in s) {
    const e = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 };
    return (
      ([e.xmin, e.ymin] = t(s.xmin, s.ymin, a)),
      ([e.xmax, e.ymax] = t(s.xmax, s.ymax, a)),
      s.hasZ && ((e.zmin = s.zmin), (e.zmax = s.zmax), (e.hasZ = !0)),
      s.hasM && ((e.mmin = s.mmin), (e.mmax = s.mmax), (e.hasM = !0)),
      e
    );
  }
  return "rings" in s
    ? { rings: m(s.rings, t), hasM: s.hasM, hasZ: s.hasZ }
    : "paths" in s
    ? { paths: m(s.paths, t), hasM: s.hasM, hasZ: s.hasZ }
    : "points" in s
    ? { points: x(s.points, t), hasM: s.hasM, hasZ: s.hasZ }
    : null;
}
function m(t, s) {
  const e = [];
  for (const i of t) e.push(x(i, s));
  return e;
}
function x(t, s) {
  const e = [];
  for (const i of t) {
    const r = s(i[0], i[1], [0, 0]);
    e.push(r), i.length > 2 && r.push(i[2]), i.length > 3 && r.push(i[3]);
  }
  return e;
}
async function d(t, s) {
  if (!t || !s) return;
  const e = Array.isArray(t)
    ? t
        .map((i) => (n(i.geometry) ? i.geometry.spatialReference : null))
        .filter(n)
    : [t];
  await Z(e.map((i) => ({ source: i, dest: s })));
}
const y = f.bind(null, g),
  _ = f.bind(null, M);
function j(t, s, e, i) {
  if (
    !t ||
    (e || ((e = s), (s = t.spatialReference)), !o(s) || !o(e) || u(s, e))
  )
    return t;
  if (c(s, e)) {
    const r = h(e) ? y(t) : _(t);
    return (r.spatialReference = e), r;
  }
  return l(p, [t], s, e, null, i)[0];
}
const b = new (class {
  constructor() {
    (this._jobs = []),
      (this._timer = null),
      (this._process = this._process.bind(this));
  }
  async push(t, s, e) {
    if (!t || !t.length || !s || !e || u(s, e)) return t;
    const i = {
      geometries: t,
      inSpatialReference: s,
      outSpatialReference: e,
      resolve: null,
    };
    return (
      this._jobs.push(i),
      new Promise((r) => {
        (i.resolve = r),
          this._timer === null && (this._timer = setTimeout(this._process, 10));
      })
    );
  }
  _process() {
    this._timer = null;
    const t = this._jobs.shift();
    if (!t) return;
    const {
      geometries: s,
      inSpatialReference: e,
      outSpatialReference: i,
      resolve: r,
    } = t;
    c(e, i) ? (h(i) ? r(s.map(y)) : r(s.map(_))) : r(l(p, s, e, i, null, null)),
      this._jobs.length > 0 && (this._timer = setTimeout(this._process, 10));
  }
})();
function S(t, s, e) {
  return b.push(t, s, e);
}
export { S as M, d as f, j as g };
