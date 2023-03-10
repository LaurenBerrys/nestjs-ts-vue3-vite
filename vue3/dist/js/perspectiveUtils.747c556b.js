import {
  ae as e,
  af as a,
  ag as M,
  ap as N,
  t as u,
  Z as p,
  q as O,
  ea as V,
  bn as Z,
  r as c,
  c as h,
  eb as z,
  ec as b,
  a_ as m,
  az as x,
  ed as C,
  aE as f,
  b as _,
} from "./index.8fd7165c.js";
import { a as k } from "./normalizeUtilsSync.1ac6b009.js";
import { e as i } from "./mat3f64.eb921732.js";
let n = class extends N {
  constructor(s) {
    super(s);
  }
  get bounds() {
    const s = this.coords;
    return u(s) || u(s.extent) ? null : p(s.extent);
  }
  get coords() {
    var o;
    const s = (o = O(this.element.georeference)) == null ? void 0 : o.coords;
    return V(s, this.spatialReference).geometry;
  }
  get normalizedCoords() {
    return Z.fromJSON(k(this.coords));
  }
  get normalizedBounds() {
    const s = c(this.normalizedCoords) ? this.normalizedCoords.extent : null;
    return c(s) ? p(s) : null;
  }
};
e([a()], n.prototype, "spatialReference", void 0),
  e([a()], n.prototype, "element", void 0),
  e([a()], n.prototype, "bounds", null),
  e([a()], n.prototype, "coords", null),
  e([a()], n.prototype, "normalizedCoords", null),
  e([a()], n.prototype, "normalizedBounds", null),
  (n = e([M("esri.layers.support.MediaElementView")], n));
const r = _(),
  l = i(),
  d = i(),
  g = i();
function G(s, o, t) {
  return (
    h(r, o[0], o[1], 1),
    z(r, r, b(l, t)),
    r[2] === 0 ? m(s, r[0], r[1]) : m(s, r[0] / r[2], r[1] / r[2])
  );
}
function H(s, o, t) {
  return (
    y(d, o[0], o[1], o[2], o[3], o[4], o[5], o[6], o[7]),
    y(g, t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]),
    x(s, C(d, d), g),
    s[8] !== 0 &&
      ((s[0] /= s[8]),
      (s[1] /= s[8]),
      (s[2] /= s[8]),
      (s[3] /= s[8]),
      (s[4] /= s[8]),
      (s[5] /= s[8]),
      (s[6] /= s[8]),
      (s[7] /= s[8]),
      (s[8] /= s[8])),
    s
  );
}
function y(s, o, t, v, B, E, R, j, S) {
  f(s, o, v, E, t, B, R, 1, 1, 1), h(r, j, S, 1), C(l, s);
  const [q, w, J] = z(r, r, b(l, l));
  return f(l, q, 0, 0, 0, w, 0, 0, 0, J), x(s, l, s);
}
export { G as h, H as j, n as u };
