import { Q as B, s as y, t as G } from "./index.8fd7165c.js";
import { e as m, n as O } from "./enums.13513a14.js";
import { F as H, G as A, C as L } from "./enums.64ab819c.js";
import { t as v } from "./VertexElementDescriptor.2925c6af.js";
var e, p, f, R, M, D, S;
(function (t) {
  (t[(t.FILL = 0)] = "FILL"),
    (t[(t.LINE = 1)] = "LINE"),
    (t[(t.MARKER = 2)] = "MARKER"),
    (t[(t.TEXT = 3)] = "TEXT"),
    (t[(t.LABEL = 4)] = "LABEL");
})(e || (e = {})),
  (function (t) {
    (t[(t.NONE = 0)] = "NONE"),
      (t[(t.MAP = 1)] = "MAP"),
      (t[(t.LABEL = 2)] = "LABEL"),
      (t[(t.LABEL_ALPHA = 4)] = "LABEL_ALPHA"),
      (t[(t.HITTEST = 8)] = "HITTEST"),
      (t[(t.HIGHLIGHT = 16)] = "HIGHLIGHT"),
      (t[(t.CLIP = 32)] = "CLIP"),
      (t[(t.DEBUG = 64)] = "DEBUG"),
      (t[(t.NUM_DRAW_PHASES = 9)] = "NUM_DRAW_PHASES");
  })(p || (p = {})),
  (function (t) {
    (t[(t.SIZE = 0)] = "SIZE"),
      (t[(t.COLOR = 1)] = "COLOR"),
      (t[(t.OPACITY = 2)] = "OPACITY"),
      (t[(t.ROTATION = 3)] = "ROTATION");
  })(f || (f = {})),
  (function (t) {
    (t[(t.NONE = 0)] = "NONE"),
      (t[(t.OPACITY = 1)] = "OPACITY"),
      (t[(t.COLOR = 2)] = "COLOR"),
      (t[(t.ROTATION = 4)] = "ROTATION"),
      (t[(t.SIZE_MINMAX_VALUE = 8)] = "SIZE_MINMAX_VALUE"),
      (t[(t.SIZE_SCALE_STOPS = 16)] = "SIZE_SCALE_STOPS"),
      (t[(t.SIZE_FIELD_STOPS = 32)] = "SIZE_FIELD_STOPS"),
      (t[(t.SIZE_UNIT_VALUE = 64)] = "SIZE_UNIT_VALUE");
  })(R || (R = {})),
  (function (t) {
    (t[(t.MINMAX_TARGETS_OUTLINE = 128)] = "MINMAX_TARGETS_OUTLINE"),
      (t[(t.SCALE_TARGETS_OUTLINE = 256)] = "SCALE_TARGETS_OUTLINE"),
      (t[(t.FIELD_TARGETS_OUTLINE = 512)] = "FIELD_TARGETS_OUTLINE"),
      (t[(t.UNIT_TARGETS_OUTLINE = 1024)] = "UNIT_TARGETS_OUTLINE");
  })(M || (M = {})),
  (function (t) {
    (t[(t.SPRITE = 0)] = "SPRITE"), (t[(t.GLYPH = 1)] = "GLYPH");
  })(D || (D = {})),
  (function (t) {
    (t[(t.DEFAULT = 0)] = "DEFAULT"),
      (t[(t.SIMPLE = 1)] = "SIMPLE"),
      (t[(t.DOT_DENSITY = 2)] = "DOT_DENSITY"),
      (t[(t.OUTLINE_FILL = 3)] = "OUTLINE_FILL"),
      (t[(t.OUTLINE_FILL_SIMPLE = 4)] = "OUTLINE_FILL_SIMPLE"),
      (t[(t.HEATMAP = 5)] = "HEATMAP"),
      (t[(t.PIE_CHART = 6)] = "PIE_CHART");
  })(S || (S = {}));
const _ = B.getLogger("esri.views.2d.engine.webgl.Utils"),
  i = "geometry",
  b = [{ name: i, strideInBytes: 12 }],
  Y = [{ name: i, strideInBytes: 36 }],
  V = [{ name: i, strideInBytes: 24 }],
  Z = [{ name: i, strideInBytes: 12 }],
  x = [{ name: i, strideInBytes: 40 }],
  z = [{ name: i, strideInBytes: 36 }],
  X = [{ name: i, strideInBytes: 36 }];
function I(t) {
  const n = {};
  for (const r of t) n[r.name] = r.strideInBytes;
  return n;
}
const $ = I([{ name: i, strideInBytes: 36 }]),
  k = I(b),
  K = I(Y),
  W = I(V),
  q = I(Z),
  Q = I(x),
  j = I(z),
  J = I(X);
function At(t, n) {
  switch (t) {
    case e.MARKER:
      return n === S.HEATMAP ? k : $;
    case e.FILL:
      switch (n) {
        case S.DOT_DENSITY:
          return q;
        case S.SIMPLE:
        case S.OUTLINE_FILL_SIMPLE:
          return W;
        default:
          return K;
      }
    case e.LINE:
      return Q;
    case e.TEXT:
      return j;
    case e.LABEL:
      return J;
  }
}
const tt = [i],
  nt = [i],
  rt = [i],
  at = [i],
  st = [i];
function et(t) {
  switch (t) {
    case e.MARKER:
      return tt;
    case e.FILL:
      return nt;
    case e.LINE:
      return rt;
    case e.TEXT:
      return at;
    case e.LABEL:
      return st;
  }
}
function it(t) {
  switch (t % 4) {
    case 0:
    case 2:
      return 4;
    case 1:
    case 3:
      return 1;
  }
}
function _t(t, n) {
  switch (n % 4) {
    case 0:
    case 2:
      return new Uint32Array(Math.floor((t * n) / 4));
    case 1:
    case 3:
      return new Uint8Array(t * n);
  }
}
function Nt(t, n) {
  switch (n % 4) {
    case 0:
    case 2:
      return new Uint32Array(t);
    case 1:
    case 3:
      return new Uint8Array(t);
  }
}
function dt(t) {
  return t != null;
}
function mt(t) {
  return typeof t == "number";
}
function Ot(t) {
  switch (t) {
    case "butt":
      return m.BUTT;
    case "round":
      return m.ROUND;
    case "square":
      return m.SQUARE;
    default:
      return (
        _.error(
          new y(
            "mapview-invalid-type",
            `Cap type ${t} is not a valid option. Defaulting to round`
          )
        ),
        m.ROUND
      );
  }
}
function yt(t) {
  switch (t) {
    case "miter":
      return O.MITER;
    case "bevel":
      return O.BEVEL;
    case "round":
      return O.ROUND;
    default:
      return (
        _.error(
          new y(
            "mapview-invalid-type",
            `Join type ${t} is not a valid option. Defaulting to round`
          )
        ),
        O.ROUND
      );
  }
}
function Ut(t) {
  switch (t) {
    case "opacity":
      return f.OPACITY;
    case "color":
      return f.COLOR;
    case "rotation":
      return f.ROTATION;
    case "size":
      return f.SIZE;
    default:
      return _.error(`Cannot interpret unknown vv: ${t}`), null;
  }
}
function pt(t, n, r, a, s, u, c) {
  for (const T in u) {
    const o = u[T].stride,
      l = it(o),
      E = u[T].data,
      N = r[T].data;
    if (E == null || N == null) continue;
    const h = (o * s.vertexCount) / l,
      C = (o * t) / l,
      F = (o * s.vertexFrom) / l;
    for (let d = 0; d < h; ++d) N[d + C] = E[d + F];
  }
  if (c != null && a != null) {
    const T = s.indexCount;
    for (let o = 0; o < T; ++o)
      a[o + n] = c[o + s.indexFrom] - s.vertexFrom + t;
  }
}
const Rt = { [i]: H.STATIC_DRAW };
function Mt(t, n) {
  const r = [];
  for (let a = 0; a < 5; ++a) {
    const s = et(a),
      u = {};
    for (const c of s) u[c] = { data: n(a, c) };
    r.push({ data: t(a), buffers: u });
  }
  return r;
}
function ct(t) {
  switch (t) {
    case L.BYTE:
    case L.UNSIGNED_BYTE:
      return 1;
    case L.SHORT:
    case L.UNSIGNED_SHORT:
      return 2;
    case L.FLOAT:
    case L.INT:
    case L.UNSIGNED_INT:
      return 4;
  }
}
function Dt(t) {
  switch (t) {
    case A.UNSIGNED_BYTE:
      return 1;
    case A.UNSIGNED_SHORT_4_4_4_4:
      return 2;
    case A.FLOAT:
      return 4;
    default:
      return void _.error(new y("webgl-utils", `Unable to handle type ${t}`));
  }
}
function gt(t) {
  switch (t) {
    case A.UNSIGNED_BYTE:
      return Uint8Array;
    case A.UNSIGNED_SHORT_4_4_4_4:
      return Uint16Array;
    case A.FLOAT:
      return Float32Array;
    default:
      return void _.error(new y("webgl-utils", `Unable to handle type ${t}`));
  }
}
const ut = (t) => {
    const n = new Map();
    for (const r in t) for (const a of t[r]) n.set(a.name, a.location);
    return n;
  },
  ot = (t) => {
    const n = {};
    for (const r in t) {
      const a = t[r];
      n[r] = a != null && a.length ? a[0].stride : 0;
    }
    return n;
  },
  U = new Map(),
  Pt = (t, n) => {
    if (!U.has(t)) {
      const r = (function (s) {
          var c;
          const u = {};
          for (const T in s) {
            const o = s[T];
            let l = 0;
            (u[T] = o.map((E) => {
              const N = new v(
                E.name,
                E.count,
                E.type,
                l,
                0,
                E.normalized || !1
              );
              return (l += E.count * ct(E.type)), N;
            })),
              (c = u[T]) == null || c.forEach((E) => (E.stride = l));
          }
          return u;
        })(n),
        a = { strides: ot(r), bufferLayouts: r, attributes: ut(n) };
      U.set(t, a);
    }
    return U.get(t);
  };
function wt(t) {
  t(e.FILL), t(e.LINE), t(e.MARKER), t(e.TEXT), t(e.LABEL);
}
const ht = (t) => "path" in t && Et(t.path),
  Ct = (t) => ("url" in t && t.url) || ("imageData" in t && t.imageData),
  Ft = (t) =>
    "imageData" in t && t.imageData && "contentType" in t && t.contentType
      ? `data:${t.contentType};base64,${t.imageData}`
      : "url" in t
      ? t.url
      : null,
  g = (t) => t != null && t.startsWith("data:image/gif"),
  Bt = (t) =>
    ("url" in t && t.url && (t.url.includes(".gif") || g(t.url))) ||
    ("contentType" in t && t.contentType === "image/gif") ||
    ("imageData" in t && g(t.imageData)),
  P = (t) => t != null && t.startsWith("data:image/png"),
  Gt = (t) =>
    ("url" in t && t.url && (t.url.includes(".png") || P(t.url))) ||
    ("contentType" in t && t.contentType === "image/png") ||
    ("imageData" in t && P(t.imageData)),
  Ht = (t) => t.type && t.type.toLowerCase().includes("3d");
function vt(t) {
  switch (t.type) {
    case "line": {
      const n = t;
      return n.cim.type === "CIMSolidStroke" && !n.dashTemplate;
    }
    case "fill":
      return t.cim.type === "CIMSolidFill";
    case "esriSFS":
      return t.style === "esriSFSSolid" || t.style === "esriSFSNull";
    case "esriSLS":
      return t.style === "esriSLSSolid" || t.style === "esriSLSNull";
    default:
      return !1;
  }
}
const bt = (t) => t.includes("data:image/svg+xml");
function Yt(t) {
  switch ("cim" in t ? t.cim.type : t.type) {
    case "esriSMS":
    case "esriPMS":
    case "CIMPointSymbol":
      return !1;
    case "CIMVectorMarker":
    case "CIMCharacterMarker":
    case "CIMPictureMarker":
      return Tt(t);
    default:
      return !0;
  }
}
function Vt(t) {
  const n = "maxVVSize" in t && t.maxVVSize,
    r = ("width" in t && t.width) || ("size" in t && t.size) || 0;
  return n || r;
}
function Zt(t) {
  const n = [];
  for (let r = 0; r < t.length; r++) n.push(t.charCodeAt(r));
  return n;
}
const Et = (t) =>
    !!t &&
    ((t = t.trim()),
    !!(
      /^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t) &&
      /[\dz]$/i.test(t) &&
      t.length > 4
    )),
  Tt = (t) => {
    var n, r;
    return (
      t.type === "fill" &&
      ((r =
        (n = t == null ? void 0 : t.cim) == null
          ? void 0
          : n.markerPlacement) == null
        ? void 0
        : r.type) === "CIMMarkerPlacementInsidePolygon"
    );
  },
  It = new Float32Array(1);
function xt(t) {
  return [
    255 & t,
    (65280 & t) >>> 8,
    (16711680 & t) >>> 16,
    (4278190080 & t) >>> 24,
  ];
}
function zt(t, n) {
  return (65535 & t) | (n << 16);
}
function w(t, n, r, a) {
  return (255 & t) | ((255 & n) << 8) | ((255 & r) << 16) | (a << 24);
}
function Xt(t, n = 0, r = !1) {
  const a = t[n + 3];
  return (
    (t[n + 0] *= a), (t[n + 1] *= a), (t[n + 2] *= a), r || (t[n + 3] *= 255), t
  );
}
function $t(t) {
  if (!t) return 0;
  const { r: n, g: r, b: a, a: s } = t;
  return w(n * s, r * s, a * s, 255 * s);
}
function kt(t) {
  if (!t) return 0;
  const [n, r, a, s] = t;
  return w(n * (s / 255), r * (s / 255), a * (s / 255), s);
}
function Kt(t, n, r = 0) {
  if (G(n))
    return (t[r + 0] = 0), (t[r + 1] = 0), (t[r + 2] = 0), void (t[r + 3] = 0);
  const { r: a, g: s, b: u, a: c } = n;
  (t[r + 0] = (a * c) / 255),
    (t[r + 1] = (s * c) / 255),
    (t[r + 2] = (u * c) / 255),
    (t[r + 3] = c);
}
new Uint32Array(It.buffer);
export {
  mt as $,
  M as A,
  e as E,
  it as F,
  yt as G,
  Mt as H,
  Tt as I,
  Dt as K,
  R as L,
  xt as M,
  Nt as P,
  At as R,
  S,
  p as T,
  Ut as V,
  gt as W,
  Rt as Y,
  D as _,
  w as a,
  kt as b,
  $t as c,
  Vt as d,
  Pt as e,
  Yt as f,
  Xt as g,
  Kt as h,
  Bt as i,
  pt as j,
  Ot as k,
  vt as l,
  bt as m,
  ht as n,
  Gt as o,
  Zt as p,
  Ct as r,
  Ft as s,
  wt as t,
  Ht as u,
  zt as w,
  _t as x,
  dt as z,
};
