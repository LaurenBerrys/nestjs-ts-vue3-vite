import { q as h } from "./Table.e9c997d5.js";
import {
  gm as p,
  gn as y,
  gl as w,
  f5 as I,
  go as b,
  cm as f,
  t as m,
} from "./index.8fd7165c.js";
class _ {
  constructor() {
    (this.code = null), (this.description = null);
  }
}
class q {
  constructor(t) {
    (this.error = new _()),
      (this.globalId = null),
      (this.objectId = null),
      (this.success = !1),
      (this.uniqueId = null),
      (this.error.description = t);
  }
}
function d(n) {
  return new q(n);
}
class v {
  constructor(t) {
    (this.globalId = null),
      (this.success = !0),
      (this.objectId = this.uniqueId = t);
  }
}
function j(n) {
  return new v(n);
}
const l = new Set();
function F(n, t, i, g = !1, u) {
  l.clear();
  for (const s in i) {
    const e = n.get(s);
    if (!e) continue;
    const a = i[s],
      r = E(e, a);
    if (
      (r !== a &&
        u &&
        u.push({
          name: "invalid-value-type",
          message: "attribute value was converted to match the field type",
          details: { field: e, originalValue: a, sanitizedValue: r },
        }),
      l.add(e.name),
      e && (g || e.editable))
    ) {
      const c = p(e, r);
      if (c) return d(y(c, e, r));
      t[e.name] = r;
    }
  }
  for (const s of (n == null ? void 0 : n.requiredFields) ?? [])
    if (!l.has(s.name)) return d(`missing required field "${s.name}"`);
  return null;
}
function E(n, t) {
  let i = t;
  return (
    typeof t == "string" && w(n)
      ? (i = parseFloat(t))
      : t != null && I(n) && typeof t != "string" && (i = String(t)),
    b(i)
  );
}
let o;
function G(n, t) {
  if (!n || !f(t)) return n;
  if ("rings" in n || "paths" in n) {
    if (m(o)) throw new TypeError("geometry engine not loaded");
    return o.simplify(t, n);
  }
  return n;
}
async function S(n, t) {
  !f(n) ||
    (t !== "esriGeometryPolygon" && t !== "esriGeometryPolyline") ||
    (await (async function () {
      return (
        m(o) &&
          (o = await h(
            () => import("./geometryEngineJSON.4e17515e.js"),
            [
              "js/geometryEngineJSON.4e17515e.js",
              "js/geometryEngineBase.6e4344a5.js",
              "js/geometryEngineJSON.8702a072.js",
              "js/json.495fc412.js",
            ]
          )),
        o
      );
    })());
}
export { d as a, j as f, G as g, F as m, S as w };
