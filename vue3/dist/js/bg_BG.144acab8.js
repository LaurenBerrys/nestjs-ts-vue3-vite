import { o as l } from "./_commonjsHelpers.2f3e7994.js";
import "./_commonjs-dynamic-modules.42bbacb3.js";
var s,
  u,
  f,
  o = {};
(s = {
  get exports() {
    return o;
  },
  set exports(e) {
    o = e;
  },
}),
  (f = o),
  Object.defineProperty(f, "__esModule", { value: !0 }),
  (u = void (f.default = {
    _percentPrefix: null,
    _percentSuffix: "%",
    "Zoom Out": "Отдалечаване",
    "From %1 to %2": "От %1 до %2",
    "From %1": "От %1",
    "To %1": "До %1",
  })) != void 0 && (s.exports = u);
const m = (function (e, p) {
  for (var n = 0; n < p.length; n++) {
    const t = p[n];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in e)) {
          const i = Object.getOwnPropertyDescriptor(t, r);
          i &&
            Object.defineProperty(
              e,
              r,
              i.get ? i : { enumerable: !0, get: () => t[r] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
})({ __proto__: null, default: l(o) }, [o]);
export { m as b };
