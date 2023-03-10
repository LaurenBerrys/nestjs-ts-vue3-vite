import {
  hV as Ge,
  R as Z,
  gr as sa,
  ar as de,
  bn as ue,
  a6 as se,
  a5 as xe,
  fc as ni,
  de as B,
  d5 as ot,
  t as ua,
  hW as ri,
  r as lr,
  q as cr,
  cM as pe,
  cL as oa,
  bY as hr,
  aI as la,
  $ as ca,
  a0 as ii,
  hX as ha,
  aH as _t,
  cx as ai,
  U as fa,
  w as fr,
  bO as da,
  hY as dr,
} from "./index.8fd7165c.js";
import { q as Re } from "./Table.e9c997d5.js";
import { c as q, u as ma, T as mr } from "./arcadeTimeUtils.e79f2f70.js";
import {
  t as f,
  e as h,
  s as le,
  c as un,
  p as on,
  l as ln,
  u as pa,
} from "./executionError.fb3f283a.js";
import { s as Da, p as si } from "./number.f83996f0.js";
let oe = class {
    constructor(e = []) {
      this._elements = e;
    }
    length() {
      return this._elements.length;
    }
    get(e) {
      return this._elements[e];
    }
    toArray() {
      const e = [];
      for (let n = 0; n < this.length(); n++) e.push(this.get(n));
      return e;
    }
  },
  Ke = class {
    constructor() {}
  };
function ct(e, n, t) {
  if (e instanceof Ke && !(e instanceof Pe)) {
    const r = new Pe();
    return (r.fn = e), (r.parameterEvaluator = t), (r.context = n), r;
  }
  return e;
}
let $e = class extends Ke {
    constructor(e) {
      super(), (this.fn = e);
    }
    createFunction(e) {
      return (...n) => this.fn(e, { preparsed: !0, arguments: n });
    }
    call(e, n) {
      return this.fn(e, n);
    }
    marshalledCall(e, n, t, r) {
      return r(e, n, (i, u, a) => {
        a = a.map((o) =>
          o instanceof Ke && !(o instanceof Pe) ? ct(o, e, r) : o
        );
        const s = this.call(t, { args: a });
        return Ge(s) ? s.then((o) => ct(o, t, r)) : s;
      });
    }
  },
  Pe = class extends Ke {
    constructor() {
      super(...arguments), (this.fn = null), (this.context = null);
    }
    createFunction(e) {
      return this.fn.createFunction(this.context);
    }
    call(e, n) {
      return this.fn.marshalledCall(
        e,
        n,
        this.context,
        this.parameterEvaluator
      );
    }
    marshalledCall(e, n, t) {
      return this.fn.marshalledCall(
        e,
        n,
        this.context,
        this.parameterEvaluator
      );
    }
  },
  Xe = class ui extends oe {
    constructor(n, t, r, i, u, a) {
      super(n),
        (this._lazyPt = []),
        (this._hasZ = !1),
        (this._hasM = !1),
        (this._spRef = t),
        (this._hasZ = r),
        (this._hasM = i),
        (this._cacheId = u),
        (this._partId = a);
    }
    get(n) {
      if (this._lazyPt[n] === void 0) {
        const t = this._elements[n];
        if (t === void 0) return;
        const r = this._hasZ,
          i = this._hasM;
        let u = null;
        (u =
          r && !i
            ? new Z(t[0], t[1], t[2], void 0, this._spRef)
            : i && !r
            ? new Z(t[0], t[1], void 0, t[2], this._spRef)
            : r && i
            ? new Z(t[0], t[1], t[2], t[3], this._spRef)
            : new Z(t[0], t[1], this._spRef)),
          (u.cache._arcadeCacheId =
            this._cacheId.toString() +
            "-" +
            this._partId.toString() +
            "-" +
            n.toString()),
          (this._lazyPt[n] = u);
      }
      return this._lazyPt[n];
    }
    equalityTest(n) {
      return (
        n === this ||
        (n !== null &&
          n instanceof ui != 0 &&
          n.getUniqueHash() === this.getUniqueHash())
      );
    }
    getUniqueHash() {
      return this._cacheId.toString() + "-" + this._partId.toString();
    }
  },
  Sn = class oi extends oe {
    constructor(n, t, r, i, u) {
      super(n),
        (this._lazyPath = []),
        (this._hasZ = !1),
        (this._hasM = !1),
        (this._hasZ = r),
        (this._hasM = i),
        (this._spRef = t),
        (this._cacheId = u);
    }
    get(n) {
      if (this._lazyPath[n] === void 0) {
        const t = this._elements[n];
        if (t === void 0) return;
        this._lazyPath[n] = new Xe(
          t,
          this._spRef,
          this._hasZ,
          this._hasM,
          this._cacheId,
          n
        );
      }
      return this._lazyPath[n];
    }
    equalityTest(n) {
      return (
        n === this ||
        (n !== null &&
          n instanceof oi != 0 &&
          n.getUniqueHash() === this.getUniqueHash())
      );
    }
    getUniqueHash() {
      return this._cacheId.toString();
    }
  };
var pr, Dr;
function ps(e) {
  return sa.fromJSON(e.toJSON());
}
function ga(e) {
  return e.toJSON ? e.toJSON() : e;
}
function Ds(e) {
  return typeof e == "string" || e instanceof String;
}
function gs(e) {
  return typeof e == "number";
}
function gr(e) {
  return e instanceof Date;
}
function yr(e) {
  return e instanceof q;
}
function ys(e, n) {
  return (
    e === n ||
    (!((!gr(e) && !yr(e)) || (!gr(n) && !yr(n))) && e.getTime() === n.getTime())
  );
}
function ws(e) {
  if (e == null) return null;
  if (typeof e == "number") return e;
  switch (e.toLowerCase()) {
    case "meters":
    case "meter":
      return 109404;
    case "miles":
    case "mile":
      return 109439;
    case "kilometers":
    case "kilometer":
    case "km":
      return 109414;
  }
  return null;
}
function xs(e) {
  if (e == null) return null;
  switch (e.type) {
    case "polygon":
    case "multipoint":
    case "polyline":
      return e.extent;
    case "point":
      return new de({
        xmin: e.x,
        ymin: e.y,
        xmax: e.x,
        ymax: e.y,
        spatialReference: e.spatialReference,
      });
    case "extent":
      return e;
  }
  return null;
}
function Fs(e) {
  if (e == null) return null;
  if (typeof e == "number" || typeof e == "number") return e;
  switch (e.toLowerCase()) {
    case "meters":
    case "meter":
      return 9001;
    case "miles":
    case "mile":
      return 9093;
    case "kilometers":
    case "kilometer":
    case "km":
      return 9036;
  }
  return null;
}
(function (e) {
  (e[(e.Standardised = 0)] = "Standardised"),
    (e[(e.StandardisedNoInterval = 1)] = "StandardisedNoInterval"),
    (e[(e.SqlServer = 2)] = "SqlServer"),
    (e[(e.Oracle = 3)] = "Oracle"),
    (e[(e.Postgres = 4)] = "Postgres"),
    (e[(e.PGDB = 5)] = "PGDB"),
    (e[(e.FILEGDB = 6)] = "FILEGDB"),
    (e[(e.NotEvaluated = 7)] = "NotEvaluated");
})(pr || (pr = {})),
  (function (e) {
    (e[(e.InFeatureSet = 0)] = "InFeatureSet"),
      (e[(e.NotInFeatureSet = 1)] = "NotInFeatureSet"),
      (e[(e.Unknown = 2)] = "Unknown");
  })(Dr || (Dr = {}));
const Cs = 1e3,
  As = {
    point: "point",
    polygon: "polygon",
    polyline: "polyline",
    multipoint: "multipoint",
    extent: "extent",
    esriGeometryPoint: "point",
    esriGeometryPolygon: "polygon",
    esriGeometryPolyline: "polyline",
    esriGeometryMultipoint: "multipoint",
    esriGeometryEnvelope: "extent",
    envelope: "extent",
  },
  wr = {
    point: "esriGeometryPoint",
    polygon: "esriGeometryPolygon",
    polyline: "esriGeometryPolyline",
    multipoint: "esriGeometryMultipoint",
    extent: "esriGeometryEnvelope",
    esriGeometryPoint: "esriGeometryPoint",
    esriGeometryPolygon: "esriGeometryPolygon",
    esriGeometryPolyline: "esriGeometryPolyline",
    esriGeometryMultipoint: "esriGeometryMultipoint",
    esriGeometryEnvelope: "esriGeometryEnvelope",
    envelope: "esriGeometryEnvelope",
  },
  xr = {
    "small-integer": "esriFieldTypeSmallInteger",
    integer: "esriFieldTypeInteger",
    long: "esriFieldTypeLong",
    single: "esriFieldTypeSingle",
    double: "esriFieldTypeDouble",
    string: "esriFieldTypeString",
    date: "esriFieldTypeDate",
    oid: "esriFieldTypeOID",
    geometry: "esriFieldTypeGeometry",
    blob: "esriFieldTypeBlob",
    raster: "esriFieldTypeRaster",
    guid: "esriFieldTypeGUID",
    "global-id": "esriFieldTypeGlobalID",
    xml: "eesriFieldTypeXML",
    esriFieldTypeSmallInteger: "esriFieldTypeSmallInteger",
    esriFieldTypeInteger: "esriFieldTypeInteger",
    esriFieldTypeLong: "esriFieldTypeLong",
    esriFieldTypeSingle: "esriFieldTypeSingle",
    esriFieldTypeDouble: "esriFieldTypeDouble",
    esriFieldTypeString: "esriFieldTypeString",
    esriFieldTypeDate: "esriFieldTypeDate",
    esriFieldTypeOID: "esriFieldTypeOID",
    esriFieldTypeGeometry: "esriFieldTypeGeometry",
    esriFieldTypeBlob: "esriFieldTypeBlob",
    esriFieldTypeRaster: "esriFieldTypeRaster",
    esriFieldTypeGUID: "esriFieldTypeGUID",
    esriFieldTypeGlobalID: "esriFieldTypeGlobalID",
    esriFieldTypeXML: "eesriFieldTypeXML",
  };
function Es(e) {
  return e === void 0
    ? ""
    : (e = (e = (e = e.replace(
        /\/featureserver\/[0-9]*/i,
        "/FeatureServer"
      )).replace(/\/mapserver\/[0-9]*/i, "/MapServer")).split("?")[0]);
}
function bs(e, n) {
  n || (n = {}), typeof n == "function" && (n = { cmp: n });
  const t = typeof n.cycles == "boolean" && n.cycles,
    r =
      n.cmp &&
      ((i = n.cmp),
      function (a) {
        return function (s, o) {
          const c = { key: s, value: a[s] },
            l = { key: o, value: a[o] };
          return i(c, l);
        };
      });
  var i;
  const u = [];
  return (function a(s) {
    if (
      (s && s.toJSON && typeof s.toJSON == "function" && (s = s.toJSON()),
      s === void 0)
    )
      return;
    if (typeof s == "number") return isFinite(s) ? "" + s : "null";
    if (typeof s != "object") return JSON.stringify(s);
    let o, c;
    if (Array.isArray(s)) {
      for (c = "[", o = 0; o < s.length; o++)
        o && (c += ","), (c += a(s[o]) || "null");
      return c + "]";
    }
    if (s === null) return "null";
    if (u.includes(s)) {
      if (t) return JSON.stringify("__cycle__");
      throw new TypeError("Converting circular structure to JSON");
    }
    const l = u.push(s) - 1,
      d = Object.keys(s).sort(r && r(s));
    for (c = "", o = 0; o < d.length; o++) {
      const p = d[o],
        g = a(s[p]);
      g && (c && (c += ","), (c += JSON.stringify(p) + ":" + g));
    }
    return u.splice(l, 1), "{" + c + "}";
  })(e);
}
let $t = class {
    constructor(e) {
      this.source = e;
    }
  },
  li = class {
    constructor(e) {
      this.value = e;
    }
  },
  ci = class {
    constructor(e) {
      this.value = e;
    }
  };
const ht = ci,
  me = li,
  A = { type: "VOID" },
  Ee = { type: "BREAK" },
  ft = { type: "CONTINUE" };
function je(e, n, t) {
  return n === "" || n == null || n === t || n === t
    ? e
    : (e = e.split(n).join(t));
}
function $(e) {
  return e instanceof Ke;
}
function Zn(e) {
  return e instanceof $t;
}
function qe(e) {
  return (
    !!v(e) ||
    !!z(e) ||
    !!H(e) ||
    !!G(e) ||
    e === null ||
    e === A ||
    typeof e == "number"
  );
}
function _(e, n) {
  return e === void 0 ? n : e;
}
function Vn(e) {
  return e == null
    ? ""
    : k(e) || N(e)
    ? "Array"
    : H(e)
    ? "Date"
    : v(e)
    ? "String"
    : G(e)
    ? "Boolean"
    : z(e)
    ? "Number"
    : (e == null ? void 0 : e.declaredClass) === "esri.arcade.Attachment"
    ? "Attachment"
    : (e == null ? void 0 : e.declaredClass) === "esri.arcade.Portal"
    ? "Portal"
    : (e == null ? void 0 : e.declaredClass) === "esri.arcade.Dictionary"
    ? "Dictionary"
    : e instanceof $t
    ? "Module"
    : ee(e)
    ? "Feature"
    : e instanceof Z
    ? "Point"
    : e instanceof ue
    ? "Polygon"
    : e instanceof se
    ? "Polyline"
    : e instanceof xe
    ? "Multipoint"
    : e instanceof de
    ? "Extent"
    : $(e)
    ? "Function"
    : Yt(e)
    ? "FeatureSet"
    : Xt(e)
    ? "FeatureSetCollection"
    : e === A
    ? ""
    : typeof e == "number" && isNaN(e)
    ? "Number"
    : "Unrecognised Type";
}
function v(e) {
  return typeof e == "string" || e instanceof String;
}
function G(e) {
  return typeof e == "boolean";
}
function z(e) {
  return typeof e == "number";
}
function Me(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
function k(e) {
  return e instanceof Array;
}
function ee(e) {
  return (e == null ? void 0 : e.arcadeDeclaredClass) === "esri.arcade.Feature";
}
function Yt(e) {
  return (
    (e == null ? void 0 : e.declaredRootClass) ===
    "esri.arcade.featureset.support.FeatureSet"
  );
}
function Xt(e) {
  return (
    (e == null ? void 0 : e.declaredRootClass) ===
    "esri.arcade.featureSetCollection"
  );
}
function N(e) {
  return e instanceof oe;
}
function H(e) {
  return e instanceof q;
}
function In(e) {
  return e != null && typeof e == "object";
}
function zt(e) {
  return e instanceof Date;
}
function D(e, n, t, r, i) {
  if (e.length < n || e.length > t)
    throw new f(r, h.WrongNumberOfParameters, i);
}
function kn(e) {
  return e < 0 ? -Math.round(-e) : Math.round(e);
}
function ut() {
  let e = Date.now();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (n) => {
    const t = (e + 16 * Math.random()) % 16 | 0;
    return (e = Math.floor(e / 16)), (n === "x" ? t : (3 & t) | 8).toString(16);
  });
}
function Hn(e, n) {
  return isNaN(e) || n == null || n === ""
    ? e.toString()
    : ((n = je(n, "???", "")), (n = je(n, "??", "")), Da(e, { pattern: n }));
}
function Qt(e, n) {
  return n == null || n === ""
    ? e.toISOString(!0)
    : e.toFormat(Wn(n), { locale: ni(), numberingSystem: "latn" });
}
function Wn(e) {
  e = e.replace(/LTS|LT|LL?L?L?|l{1,4}/g, "[$&]");
  let n = "";
  const t =
    /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  for (const r of e.match(t) || [])
    switch (r) {
      case "D":
        n += "d";
        break;
      case "DD":
        n += "dd";
        break;
      case "DDD":
        n += "o";
        break;
      case "d":
        n += "c";
        break;
      case "ddd":
        n += "ccc";
        break;
      case "dddd":
        n += "cccc";
        break;
      case "M":
        n += "L";
        break;
      case "MM":
        n += "LL";
        break;
      case "MMM":
        n += "LLL";
        break;
      case "MMMM":
        n += "LLLL";
        break;
      case "YY":
        n += "yy";
        break;
      case "Y":
      case "YYYY":
        n += "yyyy";
        break;
      case "Q":
        n += "q";
        break;
      case "Z":
        n += "ZZ";
        break;
      case "ZZ":
        n += "ZZZ";
        break;
      case "S":
        n += "'S'";
        break;
      case "SS":
        n += "'SS'";
        break;
      case "SSS":
        n += "u";
        break;
      case "A":
      case "a":
        n += "a";
        break;
      case "m":
      case "mm":
      case "h":
      case "hh":
      case "H":
      case "HH":
      case "s":
      case "ss":
      case "X":
      case "x":
        n += r;
        break;
      default:
        r.length >= 2 && r.slice(0, 1) === "[" && r.slice(-1) === "]"
          ? (n += `'${r.slice(1, -1)}'`)
          : (n += `'${r}'`);
    }
  return n;
}
function W(e, n, t) {
  switch (t) {
    case ">":
      return e > n;
    case "<":
      return e < n;
    case ">=":
      return e >= n;
    case "<=":
      return e <= n;
  }
  return !1;
}
function Kn(e, n, t) {
  if (e === null) {
    if (n === null || n === A) return W(null, null, t);
    if (z(n)) return W(0, n, t);
    if (v(n) || G(n)) return W(0, m(n), t);
    if (H(n)) return W(0, n.toNumber(), t);
  }
  if (e === A) {
    if (n === null || n === A) return W(null, null, t);
    if (z(n)) return W(0, n, t);
    if (v(n) || G(n)) return W(0, m(n), t);
    if (H(n)) return W(0, n.toNumber(), t);
  } else if (z(e)) {
    if (z(n)) return W(e, n, t);
    if (G(n)) return W(e, m(n), t);
    if (n === null || n === A) return W(e, 0, t);
    if (v(n)) return W(e, m(n), t);
    if (H(n)) return W(e, n.toNumber(), t);
  } else if (v(e)) {
    if (v(n)) return W(E(e), E(n), t);
    if (H(n)) return W(m(e), n.toNumber(), t);
    if (z(n)) return W(m(e), n, t);
    if (n === null || n === A) return W(m(e), 0, t);
    if (G(n)) return W(m(e), m(n), t);
  } else if (H(e)) {
    if (H(n)) return W(e.toNumber(), n.toNumber(), t);
    if (n === null || n === A) return W(e.toNumber(), 0, t);
    if (z(n)) return W(e.toNumber(), n, t);
    if (G(n) || v(n)) return W(e.toNumber(), m(n), t);
  } else if (G(e)) {
    if (G(n)) return W(e, n, t);
    if (z(n)) return W(m(e), m(n), t);
    if (H(n)) return W(m(e), n.toNumber(), t);
    if (n === null || n === A) return W(m(e), 0, t);
    if (v(n)) return W(m(e), m(n), t);
  }
  return !!Fe(e, n) && (t === "<=" || t === ">=");
}
function Fe(e, n) {
  if (e === n || (e === null && n === A) || (n === null && e === A)) return !0;
  if (H(e) && H(n)) return e.equals(n);
  if (e instanceof Sn || e instanceof Xe) return e.equalityTest(n);
  if (e instanceof Z && n instanceof Z) {
    const t = e.cache._arcadeCacheId,
      r = n.cache._arcadeCacheId;
    if (t != null) return t === r;
  }
  return !!(
    In(e) &&
    In(n) &&
    ((e._arcadeCacheId === n._arcadeCacheId &&
      e._arcadeCacheId !== void 0 &&
      e._arcadeCacheId !== null) ||
      (e._underlyingGraphic === n._underlyingGraphic &&
        e._underlyingGraphic !== void 0 &&
        e._underlyingGraphic !== null))
  );
}
function E(e, n) {
  if (v(e)) return e;
  if (e === null) return "";
  if (z(e)) return Hn(e, n);
  if (G(e)) return e.toString();
  if (H(e)) return Qt(e, n);
  if (e instanceof B) return JSON.stringify(e.toJSON());
  if (k(e)) {
    const t = [];
    for (let r = 0; r < e.length; r++) t[r] = jt(e[r]);
    return "[" + t.join(",") + "]";
  }
  if (e instanceof oe) {
    const t = [];
    for (let r = 0; r < e.length(); r++) t[r] = jt(e.get(r));
    return "[" + t.join(",") + "]";
  }
  return e !== null && typeof e == "object" && e.castToText !== void 0
    ? e.castToText()
    : $(e)
    ? "object, Function"
    : e === A
    ? ""
    : Zn(e)
    ? "object, Module"
    : "";
}
function Ze(e) {
  const n = [];
  if (!k(e)) return null;
  if (e instanceof oe) {
    for (let t = 0; t < e.length(); t++) n[t] = m(e.get(t));
    return n;
  }
  for (let t = 0; t < e.length; t++) n[t] = m(e[t]);
  return n;
}
function ge(e, n, t = !1) {
  if (v(e)) return e;
  if (e === null) return "";
  if (z(e)) return Hn(e, n);
  if (G(e)) return e.toString();
  if (H(e)) return Qt(e, n);
  if (e instanceof B)
    return e instanceof de
      ? '{"xmin":' +
          e.xmin.toString() +
          ',"ymin":' +
          e.ymin.toString() +
          "," +
          (e.hasZ ? '"zmin":' + e.zmin.toString() + "," : "") +
          (e.hasM ? '"mmin":' + e.mmin.toString() + "," : "") +
          '"xmax":' +
          e.xmax.toString() +
          ',"ymax":' +
          e.ymax.toString() +
          "," +
          (e.hasZ ? '"zmax":' + e.zmax.toString() + "," : "") +
          (e.hasM ? '"mmax":' + e.mmax.toString() + "," : "") +
          '"spatialReference":' +
          Bn(e.spatialReference) +
          "}"
      : Bn(e.toJSON(), (r, i) =>
          r.key === i.key
            ? 0
            : r.key === "spatialReference"
            ? 1
            : i.key === "spatialReference" || r.key < i.key
            ? -1
            : r.key > i.key
            ? 1
            : 0
        );
  if (k(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++) r[i] = jt(e[i], t);
    return "[" + r.join(",") + "]";
  }
  if (e instanceof oe) {
    const r = [];
    for (let i = 0; i < e.length(); i++) r[i] = jt(e.get(i), t);
    return "[" + r.join(",") + "]";
  }
  return e !== null && typeof e == "object" && e.castToText !== void 0
    ? e.castToText(t)
    : $(e)
    ? "object, Function"
    : e === A
    ? ""
    : Zn(e)
    ? "object, Module"
    : "";
}
function jt(e, n = !1) {
  if (e === null) return "null";
  if (G(e) || z(e) || v(e)) return JSON.stringify(e);
  if (e instanceof B || e instanceof oe || e instanceof Array)
    return ge(e, null, n);
  if (H(e)) return JSON.stringify(n ? e.getTime() : Qt(e, ""));
  if (e !== null && typeof e == "object") {
    if (e.castToText !== void 0) return e.castToText(n);
  } else if (e === A) return "null";
  return "null";
}
function m(e, n) {
  return z(e)
    ? e
    : e === null || e === ""
    ? 0
    : H(e)
    ? NaN
    : G(e)
    ? e
      ? 1
      : 0
    : k(e) || e === "" || e === void 0
    ? NaN
    : n !== void 0 && v(e)
    ? ((n = je(n, "???", "")), (n = je(n, "??", "")), si(e, { pattern: n }))
    : e === A
    ? 0
    : Number(e);
}
function Y(e, n) {
  if (H(e)) return e;
  if (v(e)) {
    const t = (function (r, i) {
      const u = / (\d\d)/,
        a = ma(i);
      let s = ot.fromISO(r, { zone: a });
      return s.isValid ||
        (u.test(r) &&
          ((r = r.replace(u, "T$1")),
          (s = ot.fromISO(r, { zone: i })),
          s.isValid))
        ? s
        : null;
    })(e, n);
    if (t) return q.dateTimeToArcadeDate(t);
  }
  return null;
}
function dt(e) {
  return G(e)
    ? e
    : v(e)
    ? (e = e.toLowerCase()) === "true"
    : !!z(e) && e !== 0 && !isNaN(e);
}
function te(e, n) {
  return ua(e)
    ? null
    : ((e.spatialReference !== null && e.spatialReference !== void 0) ||
        (e.spatialReference = n),
      e);
}
function Ve(e) {
  if (e === null) return null;
  if (e instanceof Z)
    return e.x === "NaN" || e.x === null || isNaN(e.x) ? null : e;
  if (e instanceof ue) {
    if (e.rings.length === 0) return null;
    for (const n of e.rings) if (n.length > 0) return e;
    return null;
  }
  if (e instanceof se) {
    if (e.paths.length === 0) return null;
    for (const n of e.paths) if (n.length > 0) return e;
    return null;
  }
  return e instanceof xe
    ? e.points.length === 0
      ? null
      : e
    : e instanceof de
    ? e.xmin === "NaN" || e.xmin === null || isNaN(e.xmin)
      ? null
      : e
    : null;
}
function hi(e, n) {
  if (!e || !e.domain) return n;
  let t = null;
  if (e.field.type === "string" || e.field.type === "esriFieldTypeString")
    n = E(n);
  else {
    if (n == null) return null;
    if (n === "") return n;
    n = m(n);
  }
  for (let r = 0; r < e.domain.codedValues.length; r++) {
    const i = e.domain.codedValues[r];
    i.code === n && (t = i);
  }
  return t === null ? n : t.name;
}
function fi(e, n) {
  if (!e || !e.domain) return n;
  let t = null;
  n = E(n);
  for (let r = 0; r < e.domain.codedValues.length; r++) {
    const i = e.domain.codedValues[r];
    i.name === n && (t = i);
  }
  return t === null ? n : t.code;
}
function en(e, n, t = null, r = null) {
  if (!n || !n.fields) return null;
  let i,
    u,
    a = null;
  for (let s = 0; s < n.fields.length; s++) {
    const o = n.fields[s];
    o.name.toLowerCase() === e.toString().toLowerCase() && (a = o);
  }
  if (a === null) throw new f(null, h.FieldNotFound, null, { key: e });
  return (
    r === null &&
      t &&
      n.typeIdField &&
      (r = t.hasField(n.typeIdField) ? t.field(n.typeIdField) : null),
    r != null &&
      n.types.some(
        (s) =>
          s.id === r &&
          ((i = s.domains && s.domains[a.name]),
          i && i.type === "inherited" && ((i = Fr(a.name, n)), (u = !0)),
          !0)
      ),
    u || i || (i = Fr(e, n)),
    { field: a, domain: i }
  );
}
function Fr(e, n) {
  let t;
  return (
    n.fields.some(
      (r) => (r.name.toLowerCase() === e.toLowerCase() && (t = r.domain), !!t)
    ),
    t
  );
}
function Bn(e, n) {
  n || (n = {}), typeof n == "function" && (n = { cmp: n });
  const t = typeof n.cycles == "boolean" && n.cycles,
    r =
      n.cmp &&
      ((i = n.cmp),
      function (a) {
        return function (s, o) {
          const c = { key: s, value: a[s] },
            l = { key: o, value: a[o] };
          return i(c, l);
        };
      });
  var i;
  const u = [];
  return (function a(s) {
    if (
      (s && s.toJSON && typeof s.toJSON == "function" && (s = s.toJSON()),
      s === void 0)
    )
      return;
    if (typeof s == "number") return isFinite(s) ? "" + s : "null";
    if (typeof s != "object") return JSON.stringify(s);
    let o, c;
    if (Array.isArray(s)) {
      for (c = "[", o = 0; o < s.length; o++)
        o && (c += ","), (c += a(s[o]) || "null");
      return c + "]";
    }
    if (s === null) return "null";
    if (u.includes(s)) {
      if (t) return JSON.stringify("__cycle__");
      throw new TypeError("Converting circular structure to JSON");
    }
    const l = u.push(s) - 1,
      d = Object.keys(s).sort(r && r(s));
    for (c = "", o = 0; o < d.length; o++) {
      const p = d[o],
        g = a(s[p]);
      g && (c && (c += ","), (c += JSON.stringify(p) + ":" + g));
    }
    return u.splice(l, 1), "{" + c + "}";
  })(e);
}
function U(e) {
  if (e === null) return null;
  const n = [];
  for (const t of e)
    t &&
    t.arcadeDeclaredClass &&
    t.arcadeDeclaredClass === "esri.arcade.Feature"
      ? n.push(t.geometry())
      : n.push(t);
  return n;
}
function mt(e, n) {
  if (!(n instanceof Z)) throw new f(null, h.InvalidParameter, null);
  e.push(
    n.hasZ ? (n.hasM ? [n.x, n.y, n.z, n.m] : [n.x, n.y, n.z]) : [n.x, n.y]
  );
}
function Tn(e, n) {
  if (k(e) || N(e)) {
    let t = !1,
      r = !1,
      i = [],
      u = n;
    if (k(e)) {
      for (const a of e) mt(i, a);
      i.length > 0 &&
        ((u = e[0].spatialReference), (t = e[0].hasZ), (r = e[0].hasM));
    } else if (e instanceof Xe)
      (i = e._elements),
        i.length > 0 &&
          ((t = e._hasZ), (r = e._hasM), (u = e.get(0).spatialReference));
    else {
      if (!N(e)) throw new f(null, h.InvalidParameter, null);
      for (const a of e.toArray()) mt(i, a);
      i.length > 0 &&
        ((u = e.get(0).spatialReference),
        (t = e.get(0).hasZ === !0),
        (r = e.get(0).hasM === !0));
    }
    return i.length === 0
      ? null
      : (ri(i, r, t) || (i = i.slice(0).reverse()),
        new ue({ rings: [i], spatialReference: u, hasZ: t, hasM: r }));
  }
  return e;
}
function At(e, n) {
  if (k(e) || N(e)) {
    let t = !1,
      r = !1,
      i = [],
      u = n;
    if (k(e)) {
      for (const a of e) mt(i, a);
      i.length > 0 &&
        ((u = e[0].spatialReference),
        (t = e[0].hasZ === !0),
        (r = e[0].hasM === !0));
    } else if (e instanceof Xe)
      (i = e._elements),
        i.length > 0 &&
          ((t = e._hasZ), (r = e._hasM), (u = e.get(0).spatialReference));
    else if (N(e)) {
      for (const a of e.toArray()) mt(i, a);
      i.length > 0 &&
        ((u = e.get(0).spatialReference),
        (t = e.get(0).hasZ === !0),
        (r = e.get(0).hasM === !0));
    }
    return i.length === 0
      ? null
      : new se({ paths: [i], spatialReference: u, hasZ: t, hasM: r });
  }
  return e;
}
function Pt(e, n) {
  if (k(e) || N(e)) {
    let t = !1,
      r = !1,
      i = [],
      u = n;
    if (k(e)) {
      for (const a of e) mt(i, a);
      i.length > 0 &&
        ((u = e[0].spatialReference),
        (t = e[0].hasZ === !0),
        (r = e[0].hasM === !0));
    } else if (e instanceof Xe)
      (i = e._elements),
        i.length > 0 &&
          ((t = e._hasZ), (r = e._hasM), (u = e.get(0).spatialReference));
    else if (N(e)) {
      for (const a of e.toArray()) mt(i, a);
      i.length > 0 &&
        ((u = e.get(0).spatialReference),
        (t = e.get(0).hasZ === !0),
        (r = e.get(0).hasM === !0));
    }
    return i.length === 0
      ? null
      : new xe({ points: i, spatialReference: u, hasZ: t, hasM: r });
  }
  return e;
}
function ya(e, n = !1) {
  const t = [];
  if (e === null) return t;
  if (k(e) === !0) {
    for (let r = 0; r < e.length; r++) {
      const i = E(e[r]);
      (i === "" && n !== !0) || t.push(i);
    }
    return t;
  }
  if (e instanceof oe) {
    for (let r = 0; r < e.length(); r++) {
      const i = E(e.get(r));
      (i === "" && n !== !0) || t.push(i);
    }
    return t;
  }
  if (qe(e)) {
    const r = E(e);
    return (r === "" && n !== !0) || t.push(r), t;
  }
  return [];
}
let cn = 0;
function wa(e) {
  return (
    cn++,
    cn % 100 == 0
      ? ((cn = 0),
        new Promise((n) => {
          setTimeout(() => {
            n(e);
          }, 0);
        }))
      : e
  );
}
function $n(e, n, t) {
  switch (t) {
    case "&":
      return e & n;
    case "|":
      return e | n;
    case "^":
      return e ^ n;
    case "<<":
      return e << n;
    case ">>":
      return e >> n;
    case ">>>":
      return e >>> n;
  }
}
function Je(e, n = null) {
  return e == null
    ? null
    : G(e) || z(e) || v(e)
    ? e
    : e instanceof B
    ? (n == null ? void 0 : n.keepGeometryType) === !0
      ? e
      : e.toJSON()
    : e instanceof oe
    ? e.toArray().map((t) => Je(t, n))
    : e instanceof Array
    ? e.map((t) => Je(t, n))
    : zt(e)
    ? e
    : H(e)
    ? e.toJSDate()
    : e !== null && typeof e == "object" && e.castAsJson !== void 0
    ? e.castAsJson(n)
    : null;
}
async function xa(e, n, t, r, i) {
  const u = await Yn(e, n, t);
  i[r] = u;
}
async function Yn(e, n = null, t = null) {
  if ((e instanceof oe && (e = e.toArray()), e == null)) return null;
  if (qe(e) || e instanceof B || zt(e) || H(e)) return Je(e, t);
  if (e instanceof Array) {
    const r = [],
      i = [];
    for (const u of e)
      u === null || qe(u) || u instanceof B || zt(u) || H(u)
        ? i.push(Je(u, t))
        : (i.push(null), r.push(xa(u, n, t, i.length - 1, i)));
    return r.length > 0 && (await Promise.all(r)), i;
  }
  return e !== null && typeof e == "object" && e.castAsJsonAsync !== void 0
    ? e.castAsJsonAsync(n, t)
    : null;
}
function di(e, n, t) {
  const r = e.fullSchema();
  return r === null ? null : r.fields ? en(n, r, e, t) : null;
}
function Ot(e) {
  const n = e.fullSchema();
  return n === null
    ? null
    : n.fields && n.typeIdField
    ? {
        subtypeField: n.typeIdField,
        subtypes: n.types
          ? n.types.map((t) => ({ name: t.name, code: t.id }))
          : [],
      }
    : null;
}
function mi(e, n, t, r) {
  const i = e.fullSchema();
  if (i === null || !i.fields) return null;
  const u = en(n, i, e, r);
  if (t === void 0)
    try {
      t = e.field(n);
    } catch {
      return null;
    }
  return hi(u, t);
}
function pi(e, n, t, r) {
  const i = e.fullSchema();
  if (i === null || !i.fields) return null;
  if (t === void 0) {
    try {
      t = e.field(n);
    } catch {
      return null;
    }
    return t;
  }
  return fi(en(n, i, e, r), t);
}
function P(e) {
  var n, t;
  return (n = e == null ? void 0 : e.timeReference) != null && n.timeZone
    ? (t = e == null ? void 0 : e.timeReference) == null
      ? void 0
      : t.timeZone
    : "system";
}
function Di(e) {
  const n = e.fullSchema();
  if (n === null || !n.fields) return null;
  const t = [];
  for (const r of n.fields) t.push(ga(r));
  return {
    objectIdField: n.objectIdField,
    globalIdField: n.globalIdField,
    geometryType: wr[n.geometryType] === void 0 ? "" : wr[n.geometryType],
    fields: t,
    datesInUnknownTimezone: n.datesInUnknownTimezone === !0,
    preferredTimeReference: n.preferredTimeReference || null,
    editFieldsInfo: n.editFieldsInfo || null,
    timeInfo: n.timeInfo || null,
    dateFieldsTimeReference: n.dateFieldsTimeReference || null,
  };
}
const gi = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      ImplicitResult: ht,
      ImplicitResultE: ci,
      ReturnResult: me,
      ReturnResultE: li,
      absRound: kn,
      autoCastArrayOfPointsToMultiPoint: Pt,
      autoCastArrayOfPointsToPolygon: Tn,
      autoCastArrayOfPointsToPolyline: At,
      autoCastFeatureToGeometry: U,
      binaryOperator: $n,
      breakResult: Ee,
      castAsJson: Je,
      castAsJsonAsync: Yn,
      continueResult: ft,
      defaultTimeZone: P,
      defaultUndefined: _,
      equalityTest: Fe,
      featureDomainCodeLookup: pi,
      featureDomainValueLookup: mi,
      featureFullDomain: di,
      featureSchema: Di,
      featureSubtypes: Ot,
      fixNullGeometry: Ve,
      fixSpatialReference: te,
      formatDate: Qt,
      formatNumber: Hn,
      generateUUID: ut,
      getDomain: en,
      getDomainCode: fi,
      getDomainValue: hi,
      getType: Vn,
      greaterThanLessThan: Kn,
      isArray: k,
      isBoolean: G,
      isDate: H,
      isFeature: ee,
      isFeatureSet: Yt,
      isFeatureSetCollection: Xt,
      isFunctionParameter: $,
      isImmutableArray: N,
      isInteger: Me,
      isJsDate: zt,
      isModule: Zn,
      isNumber: z,
      isObject: In,
      isSimpleType: qe,
      isString: v,
      multiReplace: je,
      pcCheck: D,
      stableStringify: Bn,
      standardiseDateFormat: Wn,
      tick: wa,
      toBoolean: dt,
      toDate: Y,
      toNumber: m,
      toNumberArray: Ze,
      toString: E,
      toStringArray: ya,
      toStringExplicit: ge,
      voidOperation: A,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function qt(e, n, t = !1) {
  if (e == null) return null;
  if (z(e)) return m(e);
  if (G(e)) return dt(e);
  if (v(e)) return E(e);
  if (H(e)) return Y(e, n);
  if (k(e)) {
    const i = [];
    for (const u of e) i.push(qt(u, n, t));
    return i;
  }
  const r = new T();
  r.immutable = !1;
  for (const i of Object.keys(e)) {
    const u = e[i];
    u !== void 0 && r.setField(i, qt(u, n, t));
  }
  return (r.immutable = t), r;
}
let T = class _n {
    constructor(n) {
      (this.declaredClass = "esri.arcade.Dictionary"),
        (this.attributes = null),
        (this.plain = !1),
        (this.immutable = !0),
        (this.attributes = n instanceof _n ? n.attributes : n ?? {});
    }
    field(n) {
      const t = n.toLowerCase(),
        r = this.attributes[n];
      if (r !== void 0) return r;
      for (const i in this.attributes)
        if (i.toLowerCase() === t) return this.attributes[i];
      throw new f(null, h.FieldNotFound, null, { key: n });
    }
    setField(n, t) {
      if (this.immutable) throw new f(null, h.Immutable, null);
      if ($(t)) throw new f(null, h.NoFunctionInDictionary, null);
      const r = n.toLowerCase();
      if (
        (t instanceof Date && (t = q.dateJSToArcadeDate(t)),
        this.attributes[n] === void 0)
      ) {
        for (const i in this.attributes)
          if (i.toLowerCase() === r) return void (this.attributes[i] = t);
        this.attributes[n] = t;
      } else this.attributes[n] = t;
    }
    hasField(n) {
      const t = n.toLowerCase();
      if (this.attributes[n] !== void 0) return !0;
      for (const r in this.attributes) if (r.toLowerCase() === t) return !0;
      return !1;
    }
    keys() {
      let n = [];
      for (const t in this.attributes) n.push(t);
      return (n = n.sort()), n;
    }
    castToText(n = !1) {
      let t = "";
      for (const r in this.attributes) {
        t !== "" && (t += ",");
        const i = this.attributes[r];
        i == null
          ? (t += JSON.stringify(r) + ":null")
          : G(i) || z(i) || v(i)
          ? (t += JSON.stringify(r) + ":" + JSON.stringify(i))
          : i instanceof B
          ? (t += JSON.stringify(r) + ":" + ge(i))
          : i instanceof oe || i instanceof Array
          ? (t += JSON.stringify(r) + ":" + ge(i, null, n))
          : i instanceof q
          ? (t += n
              ? JSON.stringify(r) + ":" + JSON.stringify(i.getTime())
              : JSON.stringify(r) + ":" + i.stringify())
          : i !== null &&
            typeof i == "object" &&
            i.castToText !== void 0 &&
            (t += JSON.stringify(r) + ":" + i.castToText(n));
      }
      return "{" + t + "}";
    }
    static convertObjectToArcadeDictionary(n, t, r = !0) {
      const i = new _n();
      i.immutable = !1;
      for (const u in n) {
        const a = n[u];
        a !== void 0 && i.setField(u.toString(), qt(a, t));
      }
      return (i.immutable = r), i;
    }
    static convertJsonToArcade(n, t, r = !1) {
      return qt(n, t, r);
    }
    castAsJson(n = null) {
      const t = {};
      for (let r in this.attributes) {
        const i = this.attributes[r];
        i !== void 0 &&
          (n != null && n.keyTranslate && (r = n.keyTranslate(r)),
          (t[r] = Je(i, n)));
      }
      return t;
    }
    async castDictionaryValueAsJsonAsync(n, t, r, i = null, u) {
      const a = await Yn(r, i, u);
      return (n[t] = a), a;
    }
    async castAsJsonAsync(n = null, t = null) {
      const r = {},
        i = [];
      for (let u in this.attributes) {
        const a = this.attributes[u];
        t != null && t.keyTranslate && (u = t.keyTranslate(u)),
          a !== void 0 &&
            (qe(a) || a instanceof B || a instanceof q
              ? (r[u] = Je(a, t))
              : i.push(this.castDictionaryValueAsJsonAsync(r, u, a, n, t)));
      }
      return i.length > 0 && (await Promise.all(i)), r;
    }
  },
  X = class Ie {
    constructor() {
      (this.arcadeDeclaredClass = "esri.arcade.Feature"),
        (this._optimizedGeomDefinition = null),
        (this._geometry = null),
        (this.attributes = null),
        (this._layer = null),
        (this._datesfixed = !0),
        (this.dateTimeReferenceFieldIndex = null),
        (this.contextTimeReference = null),
        (this.immutable = !0),
        (this._datefields = null),
        (this.immutable = !0);
    }
    static createFromGraphic(n, t) {
      const r = new Ie();
      return (
        (r.contextTimeReference = t ?? null),
        (r._geometry = lr(n.geometry) ? n.geometry : null),
        n.attributes === void 0 || n.attributes === null
          ? (r.attributes = {})
          : (r.attributes = n.attributes),
        n._sourceLayer
          ? ((r._layer = n._sourceLayer), (r._datesfixed = !1))
          : n._layer
          ? ((r._layer = n._layer), (r._datesfixed = !1))
          : n.layer && "fields" in n.layer
          ? ((r._layer = n.layer), (r._datesfixed = !1))
          : n.sourceLayer &&
            "fields" in n.sourceLayer &&
            ((r._layer = n.sourceLayer), (r._datesfixed = !1)),
        r._layer &&
          r._datesfixed === !1 &&
          (r._layer.dateTimeReferenceFieldIndex !== void 0
            ? (r.dateTimeReferenceFieldIndex =
                r._layer.dateTimeReferenceFieldIndex)
            : (r.dateTimeReferenceFieldIndex = mr.createFromLayer(r._layer))),
        r
      );
    }
    static createFromArcadeFeature(n) {
      const t = new Ie();
      return (
        (t._datesfixed = n._datesfixed),
        (t.attributes = n.attributes),
        (t._geometry = n._geometry),
        (t._optimizedGeomDefinition = n._optimizedGeomDefinition),
        n._layer && (t._layer = n._layer),
        (t.dateTimeReferenceFieldIndex = n.dateTimeReferenceFieldIndex),
        (t.contextTimeReference = n.contextTimeReference),
        t
      );
    }
    static createFromOptimisedFeature(n, t, r) {
      const i = new Ie();
      return (
        (i._geometry = n.geometry ? { geometry: n.geometry } : null),
        (i._optimizedGeomDefinition = r),
        (i.attributes = n.attributes || {}),
        (i._layer = t),
        (i._datesfixed = !1),
        i
      );
    }
    static createFromArcadeDictionary(n) {
      const t = new Ie();
      return (
        (t.attributes = n.field("attributes")),
        t.attributes !== null && t.attributes instanceof T
          ? ((t.attributes = t.attributes.attributes),
            t.attributes === null && (t.attributes = {}))
          : (t.attributes = {}),
        (t._geometry = n.field("geometry")),
        t._geometry !== null &&
          (t._geometry instanceof T
            ? (t._geometry = Ie.parseGeometryFromDictionary(t._geometry))
            : t._geometry instanceof B || (t._geometry = null)),
        t
      );
    }
    static createFromGraphicLikeObject(n, t, r = null, i) {
      const u = new Ie();
      return (
        (u.contextTimeReference = i ?? null),
        t === null && (t = {}),
        (u.attributes = t),
        (u._geometry = lr(n) ? n : null),
        (u._layer = r),
        u._layer &&
          ((u._datesfixed = !1),
          u._layer.dateTimeReferenceFieldIndex !== void 0
            ? (u.dateTimeReferenceFieldIndex =
                u._layer.dateTimeReferenceFieldIndex)
            : (u.dateTimeReferenceFieldIndex = mr.createFromLayer(u._layer))),
        u
      );
    }
    repurposeFromGraphicLikeObject(n, t, r = null) {
      t === null && (t = {}),
        (this.attributes = t),
        (this._geometry = n || null),
        (this._layer = r),
        this._layer ? (this._datesfixed = !1) : (this._datesfixed = !0);
    }
    get layerPreferredTimeZone() {
      var n;
      return (
        ((n = this.dateTimeReferenceFieldIndex) == null
          ? void 0
          : n.layerPreferredTimeZone) ?? ""
      );
    }
    fieldSourceTimeZone(n) {
      var t;
      return (
        ((t = this.dateTimeReferenceFieldIndex) == null
          ? void 0
          : t.fieldTimeZone(n)) ?? ""
      );
    }
    castToText(n = !1) {
      let t = "";
      this._datesfixed === !1 && this._fixDates();
      for (const r in this.attributes) {
        t !== "" && (t += ",");
        const i = this.attributes[r];
        i == null
          ? (t += JSON.stringify(r) + ":null")
          : G(i) || z(i) || v(i)
          ? (t += JSON.stringify(r) + ":" + JSON.stringify(i))
          : i instanceof B
          ? (t += JSON.stringify(r) + ":" + ge(i))
          : i instanceof oe || i instanceof Array
          ? (t += JSON.stringify(r) + ":" + ge(i, null, n))
          : i instanceof q
          ? (t += n
              ? JSON.stringify(r) + ":" + JSON.stringify(i.getTime())
              : JSON.stringify(r) + ":" + i.stringify())
          : i !== null &&
            typeof i == "object" &&
            i.castToText !== void 0 &&
            (t += JSON.stringify(r) + ":" + i.castToText(n));
      }
      return (
        '{"geometry":' +
        (this.geometry() === null ? "null" : ge(this.geometry())) +
        ',"attributes":{' +
        t +
        "}}"
      );
    }
    _fixDates() {
      if (this._datefields !== null)
        return (
          this._datefields.length > 0 && this._fixDateFields(this._datefields),
          void (this._datesfixed = !0)
        );
      const n = [],
        t = this._layer.fields;
      for (let r = 0; r < t.length; r++) {
        const i = t[r],
          u = i.type;
        (u !== "date" && u !== "esriFieldTypeDate") || n.push(i.name);
      }
      (this._datefields = n),
        n.length > 0 && this._fixDateFields(n),
        (this._datesfixed = !0);
    }
    isUnknownDateTimeField(n) {
      var t;
      return (
        ((t = this.dateTimeReferenceFieldIndex) == null
          ? void 0
          : t.fieldTimeZone(n)) === "unknown"
      );
    }
    _fixDateFields(n) {
      var r;
      this.attributes = { ...this.attributes };
      const t =
        ((r = this.contextTimeReference) == null ? void 0 : r.timeZone) ??
        "system";
      for (let i = 0; i < n.length; i++) {
        let u = this.attributes[n[i]];
        if (u !== null)
          if (u === void 0) {
            for (const a in this.attributes)
              if (a.toLowerCase() === n[i].toLowerCase()) {
                if (((u = this.attributes[a]), u !== null)) {
                  const s = this.isUnknownDateTimeField(a);
                  H(u)
                    ? (this.attributes[a] = u)
                    : u instanceof Date
                    ? (this.attributes[a] = s
                        ? q.unknownDateJSToArcadeDate(u)
                        : q.dateJSAndZoneToArcadeDate(u, t))
                    : (this.attributes[a] = s
                        ? q.unknownEpochToArcadeDate(u)
                        : q.epochToArcadeDate(u, t));
                }
                break;
              }
          } else {
            const a = this.isUnknownDateTimeField(n[i]);
            H(u)
              ? (this.attributes[n[i]] = u)
              : u instanceof Date
              ? (this.attributes[n[i]] = a
                  ? q.unknownDateJSToArcadeDate(u)
                  : q.dateJSAndZoneToArcadeDate(u, t))
              : (this.attributes[n[i]] = a
                  ? q.unknownEpochToArcadeDate(u)
                  : q.epochToArcadeDate(u, t));
          }
      }
    }
    geometry() {
      return (
        this._geometry === null ||
          this._geometry instanceof B ||
          (this._optimizedGeomDefinition
            ? ((this._geometry = cr(
                pe(
                  oa(
                    this._geometry,
                    this._optimizedGeomDefinition.geometryType,
                    this._optimizedGeomDefinition.hasZ,
                    this._optimizedGeomDefinition.hasM
                  )
                )
              )),
              (this._geometry.spatialReference =
                this._optimizedGeomDefinition.spatialReference))
            : (this._geometry = cr(pe(this._geometry)))),
        this._geometry
      );
    }
    field(n) {
      this._datesfixed === !1 && this._fixDates();
      const t = this.attributes[n];
      if (t !== void 0) return t;
      const r = n.toLowerCase();
      for (const i in this.attributes)
        if (i.toLowerCase() === r) return this.attributes[i];
      if (this._hasFieldDefinition(r)) return null;
      throw new f(null, h.FieldNotFound, null, { key: n });
    }
    _hasFieldDefinition(n) {
      if (this._layer === null) return !1;
      for (let t = 0; t < this._layer.fields.length; t++)
        if (this._layer.fields[t].name.toLowerCase() === n) return !0;
      return !1;
    }
    setField(n, t) {
      if (this.immutable) throw new f(null, h.Immutable, null);
      if (
        (t instanceof Date &&
          (t = this.isUnknownDateTimeField(n)
            ? q.unknownDateJSToArcadeDate(t)
            : q.dateJSToArcadeDate(t)),
        qe(t) === !1)
      )
        throw new f(null, h.TypeNotAllowedInFeature, null);
      const r = n.toLowerCase();
      if (this.attributes[n] === void 0) {
        for (const i in this.attributes)
          if (i.toLowerCase() === r) return void (this.attributes[i] = t);
        this.attributes[n] = t;
      } else this.attributes[n] = t;
    }
    hasField(n) {
      const t = n.toLowerCase();
      if (this.attributes[n] !== void 0) return !0;
      for (const r in this.attributes) if (r.toLowerCase() === t) return !0;
      return !!this._hasFieldDefinition(t);
    }
    keys() {
      let n = [];
      const t = {};
      for (const r in this.attributes) n.push(r), (t[r.toLowerCase()] = 1);
      if (this._layer !== null)
        for (let r = 0; r < this._layer.fields.length; r++) {
          const i = this._layer.fields[r];
          t[i.name.toLowerCase()] !== 1 && n.push(i.name);
        }
      return (n = n.sort()), n;
    }
    static parseGeometryFromDictionary(n) {
      const t = Ie._convertDictionaryToJson(n, !0);
      return (
        t.hasm !== void 0 && ((t.hasM = t.hasm), delete t.hasm),
        t.hasz !== void 0 && ((t.hasZ = t.hasz), delete t.hasz),
        t.spatialreference !== void 0 &&
          ((t.spatialReference = t.spatialreference),
          delete t.spatialreference),
        t.rings !== void 0 &&
          (t.rings = this._fixPathArrays(
            t.rings,
            t.hasZ === !0,
            t.hasZ === !0
          )),
        t.paths !== void 0 &&
          (t.paths = this._fixPathArrays(
            t.paths,
            t.hasZ === !0,
            t.hasM === !0
          )),
        t.points !== void 0 &&
          (t.points = this._fixPointArrays(
            t.points,
            t.hasZ === !0,
            t.hasM === !0
          )),
        pe(t)
      );
    }
    static _fixPathArrays(n, t, r) {
      const i = [];
      if (n instanceof Array)
        for (let u = 0; u < n.length; u++)
          i.push(this._fixPointArrays(n[u], t, r));
      else if (n instanceof oe)
        for (let u = 0; u < n.length(); u++)
          i.push(this._fixPointArrays(n.get(u), t, r));
      return i;
    }
    static _fixPointArrays(n, t, r) {
      const i = [];
      if (n instanceof Array)
        for (let u = 0; u < n.length; u++) {
          const a = n[u];
          a instanceof Z
            ? t && r
              ? i.push([a.x, a.y, a.z, a.m])
              : t
              ? i.push([a.x, a.y, a.z])
              : r
              ? i.push([a.x, a.y, a.m])
              : i.push([a.x, a.y])
            : a instanceof oe
            ? i.push(a.toArray())
            : i.push(a);
        }
      else if (n instanceof oe)
        for (let u = 0; u < n.length(); u++) {
          const a = n.get(u);
          a instanceof Z
            ? t && r
              ? i.push([a.x, a.y, a.z, a.m])
              : t
              ? i.push([a.x, a.y, a.z])
              : r
              ? i.push([a.x, a.y, a.m])
              : i.push([a.x, a.y])
            : a instanceof oe
            ? i.push(a.toArray())
            : i.push(a);
        }
      return i;
    }
    static _convertDictionaryToJson(n, t = !1) {
      const r = {};
      for (const i in n.attributes) {
        let u = n.attributes[i];
        u instanceof T && (u = Ie._convertDictionaryToJson(u)),
          t ? (r[i.toLowerCase()] = u) : (r[i] = u);
      }
      return r;
    }
    static parseAttributesFromDictionary(n) {
      const t = {};
      for (const r in n.attributes) {
        const i = n.attributes[r];
        if (!qe(i)) throw new f(null, h.InvalidParameter, null);
        t[r] = i;
      }
      return t;
    }
    static fromJson(n, t) {
      let r = null;
      n.geometry !== null && n.geometry !== void 0 && (r = pe(n.geometry));
      const i = {};
      if (n.attributes !== null && n.attributes !== void 0)
        for (const u in n.attributes) {
          const a = n.attributes[u];
          if (a === null) i[u] = a;
          else {
            if (!(v(a) || z(a) || G(a) || H(a)))
              throw new f(null, h.InvalidParameter, null);
            i[u] = a;
          }
        }
      return Ie.createFromGraphicLikeObject(r, i, null, t ?? null);
    }
    fullSchema() {
      return this._layer;
    }
    gdbVersion() {
      if (this._layer === null) return "";
      const n = this._layer.gdbVersion;
      return n === void 0
        ? ""
        : n === "" &&
          this._layer.capabilities &&
          this._layer.capabilities.isVersioned
        ? "SDE.DEFAULT"
        : n;
    }
    castAsJson(n) {
      var r;
      const t = {
        attributes: {},
        geometry:
          (n == null ? void 0 : n.keepGeometryType) === !0
            ? this.geometry()
            : ((r = this.geometry()) == null ? void 0 : r.toJSON()) ?? null,
      };
      for (const i in this.attributes) {
        const u = this.attributes[i];
        u !== void 0 && (t.attributes[i] = Je(u, n));
      }
      return t;
    }
    async castAsJsonAsync(n = null, t) {
      return this.castAsJson(t);
    }
  };
const Cr = {
    all: { min: 2, max: 2 },
    none: { min: 2, max: 2 },
    any: { min: 2, max: 2 },
    reduce: { min: 2, max: 3 },
    map: { min: 2, max: 2 },
    filter: { min: 2, max: 2 },
    fromcodepoint: { min: 1, max: -1 },
    fromcharcode: { min: 1, max: -1 },
    tocodepoint: { min: 1, max: 2 },
    tocharcode: { min: 1, max: 2 },
    concatenate: { min: 0, max: -1 },
    expects: { min: 1, max: -1 },
    getfeatureset: { min: 1, max: 2 },
    week: { min: 1, max: 2 },
    fromjson: { min: 1, max: 1 },
    length3d: { min: 1, max: 2 },
    tohex: { min: 1, max: 1 },
    hash: { min: 1, max: 1 },
    timezone: { min: 1, max: 1 },
    timezoneoffset: { min: 1, max: 1 },
    changetimezone: { min: 2, max: 2 },
    isoweek: { min: 1, max: 1 },
    isoweekday: { min: 1, max: 1 },
    hasvalue: { min: 2, max: 2 },
    isomonth: { min: 1, max: 1 },
    isoyear: { min: 1, max: 1 },
    resize: { min: 2, max: 3 },
    slice: { min: 0, max: -1 },
    splice: { min: 0, max: -1 },
    push: { min: 2, max: 2 },
    pop: { min: 1, max: 1 },
    includes: { min: 2, max: 2 },
    array: { min: 1, max: 2 },
    front: { min: 1, max: 1 },
    back: { min: 1, max: 1 },
    insert: { min: 3, max: 3 },
    erase: { min: 2, max: 2 },
    split: { min: 2, max: 4 },
    guid: { min: 0, max: 1 },
    standardizeguid: { min: 2, max: 2 },
    today: { min: 0, max: 0 },
    angle: { min: 2, max: 3 },
    bearing: { min: 2, max: 3 },
    urlencode: { min: 1, max: 1 },
    now: { min: 0, max: 0 },
    timestamp: { min: 0, max: 0 },
    day: { min: 1, max: 1 },
    month: { min: 1, max: 1 },
    year: { min: 1, max: 1 },
    hour: { min: 1, max: 1 },
    second: { min: 1, max: 1 },
    millisecond: { min: 1, max: 1 },
    minute: { min: 1, max: 1 },
    weekday: { min: 1, max: 1 },
    toutc: { min: 1, max: 1 },
    tolocal: { min: 1, max: 1 },
    date: { min: 0, max: 8 },
    datediff: { min: 2, max: 4 },
    dateadd: { min: 2, max: 3 },
    trim: { min: 1, max: 1 },
    text: { min: 1, max: 2 },
    left: { min: 2, max: 2 },
    right: { min: 2, max: 2 },
    mid: { min: 2, max: 3 },
    upper: { min: 1, max: 1 },
    proper: { min: 1, max: 2 },
    lower: { min: 1, max: 1 },
    find: { min: 2, max: 3 },
    iif: { min: 3, max: 3 },
    decode: { min: 2, max: -1 },
    when: { min: 2, max: -1 },
    defaultvalue: { min: 2, max: 2 },
    isempty: { min: 1, max: 1 },
    domaincode: { min: 2, max: 4 },
    domainname: { min: 2, max: 4 },
    polygon: { min: 1, max: 1 },
    point: { min: 1, max: 1 },
    polyline: { min: 1, max: 1 },
    extent: { min: 1, max: 1 },
    multipoint: { min: 1, max: 1 },
    ringisclockwise: { min: 1, max: 1 },
    geometry: { min: 1, max: 1 },
    count: { min: 0, max: -1 },
    number: { min: 1, max: 2 },
    acos: { min: 1, max: 1 },
    asin: { min: 1, max: 1 },
    atan: { min: 1, max: 1 },
    atan2: { min: 2, max: 2 },
    ceil: { min: 1, max: 2 },
    floor: { min: 1, max: 2 },
    round: { min: 1, max: 2 },
    cos: { min: 1, max: 1 },
    exp: { min: 1, max: 1 },
    log: { min: 1, max: 1 },
    min: { min: 0, max: -1 },
    constrain: { min: 3, max: 3 },
    console: { min: 0, max: -1 },
    max: { min: 0, max: -1 },
    pow: { min: 2, max: 2 },
    random: { min: 0, max: 0 },
    sqrt: { min: 1, max: 1 },
    sin: { min: 1, max: 1 },
    tan: { min: 1, max: 1 },
    abs: { min: 1, max: 1 },
    isnan: { min: 1, max: 1 },
    stdev: { min: 0, max: -1 },
    average: { min: 0, max: -1 },
    mean: { min: 0, max: -1 },
    sum: { min: 0, max: -1 },
    variance: { min: 0, max: -1 },
    distinct: { min: 0, max: -1 },
    first: { min: 1, max: 1 },
    top: { min: 2, max: 2 },
    boolean: { min: 1, max: 1 },
    dictionary: { min: 0, max: -1 },
    typeof: { min: 1, max: 1 },
    reverse: { min: 1, max: 1 },
    replace: { min: 3, max: 4 },
    sort: { min: 1, max: 2 },
    feature: { min: 1, max: -1 },
    haskey: { min: 2, max: 2 },
    indexof: { min: 2, max: 2 },
    disjoint: { min: 2, max: 2 },
    intersects: { min: 2, max: 2 },
    touches: { min: 2, max: 2 },
    crosses: { min: 2, max: 2 },
    within: { min: 2, max: 2 },
    contains: { min: 2, max: 2 },
    overlaps: { min: 2, max: 2 },
    equals: { min: 2, max: 2 },
    relate: { min: 3, max: 3 },
    intersection: { min: 2, max: 2 },
    union: { min: 1, max: 2 },
    difference: { min: 2, max: 2 },
    symmetricdifference: { min: 2, max: 2 },
    clip: { min: 2, max: 2 },
    cut: { min: 2, max: 2 },
    area: { min: 1, max: 2 },
    areageodetic: { min: 1, max: 2 },
    length: { min: 1, max: 2 },
    lengthgeodetic: { min: 1, max: 2 },
    distancegeodetic: { min: 2, max: 3 },
    distance: { min: 2, max: 3 },
    densify: { min: 2, max: 3 },
    densifygeodetic: { min: 2, max: 3 },
    generalize: { min: 2, max: 4 },
    buffer: { min: 2, max: 3 },
    buffergeodetic: { min: 2, max: 3 },
    offset: { min: 2, max: 6 },
    rotate: { min: 2, max: 3 },
    issimple: { min: 1, max: 1 },
    simplify: { min: 1, max: 1 },
    convexhull: { min: 1, max: 1 },
    centroid: { min: 1, max: 1 },
    isselfintersecting: { min: 1, max: 1 },
    multiparttosinglepart: { min: 1, max: 1 },
    setgeometry: { min: 2, max: 2 },
    portal: { min: 1, max: 1 },
    getuser: { min: 0, max: 2 },
    subtypes: { min: 1, max: 1 },
    subtypecode: { min: 1, max: 1 },
    subtypename: { min: 1, max: 1 },
    domain: { min: 2, max: 3 },
    convertdirection: { min: 3, max: 3 },
    sqltimestamp: { min: 1, max: 3 },
    schema: { min: 1, max: 1 },
  },
  tn = { functionDefinitions: new Map(), constantDefinitions: new Map() },
  nn = { functionDefinitions: new Map(), constantDefinitions: new Map() };
for (const e of ["pi", "infinity"])
  nn.constantDefinitions.set(e, { type: "constant" }),
    tn.constantDefinitions.set(e, { type: "constant" });
nn.constantDefinitions.set("textformatting", {
  type: "namespace",
  key: "textformatting",
  members: [
    { key: "backwardslash", type: "constant" },
    { key: "doublequote", type: "constant" },
    { key: "forwardslash", type: "constant" },
    { key: "tab", type: "constant" },
    { key: "singlequote", type: "constant" },
    { key: "newline", type: "constant" },
  ],
}),
  tn.constantDefinitions.set("textformatting", {
    type: "namespace",
    key: "textformatting",
    members: [
      { key: "backwardslash", type: "constant" },
      { key: "tab", type: "constant" },
      { key: "singlequote", type: "constant" },
      { key: "doublequote", type: "constant" },
      { key: "forwardslash", type: "constant" },
      { key: "newline", type: "constant" },
    ],
  });
for (const e in Cr) {
  const n = Cr[e];
  nn.functionDefinitions.set(e, {
    overloads: [
      { type: "function", parametersInfo: { min: n.min, max: n.max } },
    ],
  }),
    tn.functionDefinitions.set(e, {
      overloads: [
        { type: "function", parametersInfo: { min: n.min, max: n.max } },
      ],
    });
}
const Fa = [
    "featureset",
    "featuresetbyid",
    "featuresetbyname",
    "featuresetbyassociation",
    "featuresetbyrelationshipname",
    "featuresetbyurl",
    "getfeatureset",
    "getuser",
    "attachments",
    "featuresetbyportalitem",
  ],
  Ca = [
    "disjoint",
    "intersects",
    "touches",
    "crosses",
    "within",
    "contains",
    "overlaps",
    "equals",
    "relate",
    "intersection",
    "union",
    "difference",
    "symmetricdifference",
    "clip",
    "cut",
    "area",
    "areageodetic",
    "length",
    "length3d",
    "lengthgeodetic",
    "distance",
    "distancegeodetic",
    "densify",
    "densifygeodetic",
    "generalize",
    "buffer",
    "buffergeodetic",
    "offset",
    "rotate",
    "issimple",
    "convexhull",
    "simplify",
    "multiparttosinglepart",
  ];
function Ar(e) {
  return typeof e == "string" || e instanceof String;
}
function Mn(e, n) {
  var r;
  const t = n === "sync" ? tn : nn;
  t.functionDefinitions.has(e.name.toLowerCase())
    ? (r = t.functionDefinitions.get(e.name.toLowerCase())) == null ||
      r.overloads.push({
        type: "function",
        parametersInfo: { min: e.min, max: e.max },
      })
    : t.functionDefinitions.set(e.name.toLowerCase(), {
        overloads: [
          { type: "function", parametersInfo: { min: e.min, max: e.max } },
        ],
      });
}
function Be(e, n) {
  if (e) for (const t of e) J(t, n);
}
function J(e, n) {
  if (e && n(e) !== !1)
    switch (e.type) {
      case "ImportDeclaration":
        Be(e.specifiers, n), J(e.source, n);
        break;
      case "ExportNamedDeclaration":
        J(e.declaration, n);
        break;
      case "ArrayExpression":
        Be(e.elements, n);
        break;
      case "AssignmentExpression":
      case "BinaryExpression":
      case "LogicalExpression":
        J(e.left, n), J(e.right, n);
        break;
      case "BlockStatement":
      case "Program":
        Be(e.body, n);
        break;
      case "BreakStatement":
      case "ContinueStatement":
      case "EmptyStatement":
      case "Identifier":
      case "Literal":
        break;
      case "CallExpression":
        J(e.callee, n), Be(e.arguments, n);
        break;
      case "ExpressionStatement":
        J(e.expression, n);
        break;
      case "ForInStatement":
        J(e.left, n), J(e.right, n), J(e.body, n);
        break;
      case "ForStatement":
        J(e.init, n), J(e.test, n), J(e.update, n), J(e.body, n);
        break;
      case "WhileStatement":
        J(e.test, n), J(e.body, n);
        break;
      case "FunctionDeclaration":
        J(e.id, n), Be(e.params, n), J(e.body, n);
        break;
      case "IfStatement":
        J(e.test, n), J(e.consequent, n), J(e.alternate, n);
        break;
      case "MemberExpression":
        J(e.object, n), J(e.property, n);
        break;
      case "ObjectExpression":
        Be(e.properties, n);
        break;
      case "Property":
        J(e.key, n), J(e.value, n);
        break;
      case "ReturnStatement":
      case "UnaryExpression":
      case "UpdateExpression":
        J(e.argument, n);
        break;
      case "VariableDeclaration":
        Be(e.declarations, n);
        break;
      case "VariableDeclarator":
        J(e.id, n), J(e.init, n);
        break;
      case "TemplateLiteral":
        Be(e.expressions, n), Be(e.quasis, n);
    }
}
function yi(e, n) {
  let t = !1;
  const r = n.toLowerCase();
  return (
    J(
      e,
      (i) =>
        !t &&
        (i.type === "Identifier" &&
          i.name &&
          i.name.toLowerCase() === r &&
          (t = !0),
        !0)
    ),
    t
  );
}
function wi(e) {
  const n = [];
  return (
    J(
      e,
      (t) => (
        t.type === "ImportDeclaration" &&
          t.source &&
          t.source.value &&
          n.push({
            libname: t.specifiers[0].local.name.toLowerCase(),
            source: t.source.value,
          }),
        !0
      )
    ),
    n
  );
}
function Nn(e) {
  const n = [];
  return (
    J(
      e,
      (t) => (
        t.type === "CallExpression" &&
          t.callee.type === "Identifier" &&
          n.push(t.callee.name.toLowerCase()),
        !0
      )
    ),
    n
  );
}
function kt(e, n = []) {
  let t = null;
  if (e.usesFeatureSet === void 0) {
    t === null && (t = Nn(e)), (e.usesFeatureSet = !1);
    for (let r = 0; r < t.length; r++)
      Fa.includes(t[r]) && ((e.usesFeatureSet = !0), (e.isAsync = !0));
    if (e.usesFeatureSet === !1 && n && n.length > 0) {
      for (const r of n)
        if (yi(e, r)) {
          (e.usesFeatureSet = !0), (e.isAsync = !0);
          break;
        }
    }
  }
  if (
    (e.usesModules === void 0 &&
      ((e.usesModules = !1), wi(e).length > 0 && (e.usesModules = !0)),
    e.usesGeometry === void 0)
  ) {
    (e.usesGeometry = !1), t === null && (t = Nn(e));
    for (let r = 0; r < t.length; r++)
      Ca.includes(t[r]) && (e.usesGeometry = !0);
  }
}
const Ln = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        registerFunctions: function (e) {
          function n(a, s, o) {
            if (a instanceof oe) return a.toArray();
            if (k(a)) return a;
            throw new f(s, h.InvalidParameter, o);
          }
          function t(a, s) {
            const o = a.length,
              c = Math.floor(o / 2);
            return o === 0
              ? []
              : o === 1
              ? [a[0]]
              : (function (l, d, p) {
                  const g = [];
                  for (; l.length > 0 || d.length > 0; )
                    if (l.length > 0 && d.length > 0) {
                      let F = p(l[0], d[0]);
                      isNaN(F) && (F = 0),
                        F <= 0
                          ? (g.push(l[0]), (l = l.slice(1)))
                          : (g.push(d[0]), (d = d.slice(1)));
                    } else
                      l.length > 0
                        ? (g.push(l[0]), (l = l.slice(1)))
                        : d.length > 0 && (g.push(d[0]), (d = d.slice(1)));
                  return g;
                })(t(a.slice(0, c), s), t(a.slice(c, o), s), s);
          }
          async function r(a, s) {
            const o = a.length,
              c = Math.floor(o / 2);
            if (o === 0) return [];
            if (o === 1) return [a[0]];
            const l = [await r(a.slice(0, c), s), await r(a.slice(c, o), s)];
            return i(l[0], l[1], s, []);
          }
          async function i(a, s, o, c) {
            const l = c;
            if (!(a.length > 0 || s.length > 0)) return c;
            if (a.length > 0 && s.length > 0) {
              let d = await o(a[0], s[0]);
              return (
                isNaN(d) && (d = 1),
                d <= 0
                  ? (l.push(a[0]), (a = a.slice(1)))
                  : (l.push(s[0]), (s = s.slice(1))),
                i(a, s, o, c)
              );
            }
            return a.length > 0
              ? (l.push(a[0]), i((a = a.slice(1)), s, o, c))
              : s.length > 0
              ? (l.push(s[0]), i(a, (s = s.slice(1)), o, c))
              : void 0;
          }
          function u(a, s, o, c) {
            D(o, 1, 2, a, s);
            let l = o[0];
            if ((N(l) && (l = l.toArray()), k(l) === !1))
              throw new f(a, h.InvalidParameter, s);
            if (o.length > 1) {
              if ($(o[1]) === !1) throw new f(a, h.InvalidParameter, s);
              let w = l;
              const O = o[1].createFunction(a);
              return c ? r(w, O) : ((w = t(w, (K, re) => O(K, re))), w);
            }
            let d = l;
            if (d.length === 0) return [];
            const p = {};
            for (let w = 0; w < d.length; w++) {
              const O = Vn(d[w]);
              O !== "" && (p[O] = !0);
            }
            if (
              p.Array === !0 ||
              p.Dictionary === !0 ||
              p.Feature === !0 ||
              p.Point === !0 ||
              p.Polygon === !0 ||
              p.Polyline === !0 ||
              p.Multipoint === !0 ||
              p.Extent === !0 ||
              p.Function === !0
            )
              return d.slice(0);
            let g = 0,
              F = "";
            for (const w in p) g++, (F = w);
            return (
              (d =
                g > 1 || F === "String"
                  ? t(d, (w, O) => {
                      if (w == null || w === A)
                        return O == null || O === A ? 0 : 1;
                      if (O == null || O === A) return -1;
                      const K = E(w),
                        re = E(O);
                      return K < re ? -1 : K === re ? 0 : 1;
                    })
                  : F === "Number"
                  ? t(d, (w, O) => w - O)
                  : F === "Boolean"
                  ? t(d, (w, O) => (w === O ? 0 : O ? -1 : 1))
                  : F === "Date"
                  ? t(d, (w, O) => O - w)
                  : d.slice(0)),
              d
            );
          }
          (e.functions.array = function (a, s) {
            return e.standardFunction(a, s, (o, c, l) => {
              D(l, 1, 2, a, s);
              const d = m(l[0]);
              if (isNaN(d) || Me(d) === !1)
                throw new f(a, h.InvalidParameter, s);
              const p = _(l[1], null),
                g = new Array(d);
              return g.fill(p), g;
            });
          }),
            (e.functions.front = function (a, s) {
              return e.standardFunction(a, s, (o, c, l) => {
                if ((D(l, 1, 1, a, s), N(l[0]))) {
                  if (l[0].length() <= 0) throw new f(a, h.OutOfBounds, s);
                  return l[0].get(0);
                }
                if (k(l[0])) {
                  if (l[0].length <= 0) throw new f(a, h.OutOfBounds, s);
                  return l[0][0];
                }
                throw new f(a, h.InvalidParameter, s);
              });
            }),
            (e.functions.back = function (a, s) {
              return e.standardFunction(a, s, (o, c, l) => {
                if ((D(l, 1, 1, a, s), N(l[0]))) {
                  if (l[0].length() <= 0) throw new f(a, h.OutOfBounds, s);
                  return l[0].get(l[0].length() - 1);
                }
                if (k(l[0])) {
                  if (l[0].length <= 0) throw new f(a, h.OutOfBounds, s);
                  return l[0][l[0].length - 1];
                }
                throw new f(a, h.InvalidParameter, s);
              });
            }),
            (e.functions.push = function (a, s) {
              return e.standardFunction(a, s, (o, c, l) => {
                if ((D(l, 1, 2, a, s), k(l[0])))
                  return (l[0][l[0].length] = l[1]), l[0].length;
                throw new f(a, h.InvalidParameter, s);
              });
            }),
            (e.functions.pop = function (a, s) {
              return e.standardFunction(a, s, (o, c, l) => {
                if ((D(l, 1, 1, a, s), k(l[0]))) {
                  if (l[0].length <= 0) throw new f(a, h.OutOfBounds, s);
                  const d = l[0][l[0].length - 1];
                  return (l[0].length = l[0].length - 1), d;
                }
                throw new f(a, h.InvalidParameter, s);
              });
            }),
            (e.functions.erase = function (a, s) {
              return e.standardFunction(a, s, (o, c, l) => {
                if ((D(l, 2, 2, a, s), k(l[0]))) {
                  let d = m(l[1]);
                  if (isNaN(d) || Me(d) === !1)
                    throw new f(a, h.InvalidParameter, s);
                  const p = l[0];
                  if (p.length <= 0) throw new f(a, h.OutOfBounds, s);
                  if ((d < 0 && (d = p.length + d), d < 0))
                    throw new f(a, h.OutOfBounds, s);
                  if (d >= p.length) throw new f(a, h.OutOfBounds, s);
                  return p.splice(d, 1), A;
                }
                throw new f(a, h.InvalidParameter, s);
              });
            }),
            (e.functions.insert = function (a, s) {
              return e.standardFunction(a, s, (o, c, l) => {
                if ((D(l, 3, 3, a, s), k(l[0]))) {
                  const d = m(l[1]);
                  if (isNaN(d) || Me(d) === !1)
                    throw new f(a, h.InvalidParameter, s);
                  const p = l[2],
                    g = l[0];
                  if (d > g.length) throw new f(a, h.OutOfBounds, s);
                  if (d < 0 && d < -1 * g.length)
                    throw new f(a, h.OutOfBounds, s);
                  return d === g.length
                    ? ((g[d] = p), A)
                    : (g.splice(d, 0, p), A);
                }
                throw new f(a, h.InvalidParameter, s);
              });
            }),
            (e.functions.resize = function (a, s) {
              return e.standardFunction(a, s, (o, c, l) => {
                if ((D(l, 2, 3, a, s), k(l[0]))) {
                  const d = m(l[1]);
                  if (isNaN(d) || Me(d) === !1)
                    throw new f(a, h.InvalidParameter, s);
                  if (d < 0) throw new f(a, h.InvalidParameter, s);
                  const p = _(l[2], null),
                    g = l[0];
                  if (g.length >= d) return (g.length = d), A;
                  const F = g.length;
                  g.length = d;
                  for (let w = F; w < g.length; w++) g[w] = p;
                  return A;
                }
                throw new f(a, h.InvalidParameter, s);
              });
            }),
            (e.functions.includes = function (a, s) {
              return e.standardFunction(a, s, (o, c, l) => {
                if ((D(l, 2, 2, a, s), k(l[0]))) {
                  const d = l[1];
                  return l[0].findIndex((p) => Fe(p, d)) > -1;
                }
                if (N(l[0])) {
                  const d = l[1];
                  return l[0].toArray().findIndex((p) => Fe(p, d)) > -1;
                }
                throw new f(a, h.InvalidParameter, s);
              });
            }),
            (e.functions.slice = function (a, s) {
              return e.standardFunction(a, s, (o, c, l) => {
                if ((D(l, 1, 3, a, s), k(l[0]))) {
                  const d = m(_(l[1], 0)),
                    p = m(_(l[2], l[0].length));
                  if (isNaN(d) || Me(d) === !1)
                    throw new f(a, h.InvalidParameter, s);
                  if (isNaN(p) || Me(p) === !1)
                    throw new f(a, h.InvalidParameter, s);
                  return l[0].slice(d, p);
                }
                if (N(l[0])) {
                  const d = l[0],
                    p = m(_(l[1], 0)),
                    g = m(_(l[2], d.length()));
                  if (isNaN(p) || Me(p) === !1)
                    throw new f(a, h.InvalidParameter, s);
                  if (isNaN(g) || Me(g) === !1)
                    throw new f(a, h.InvalidParameter, s);
                  return d.toArray().slice(p, g);
                }
                throw new f(a, h.InvalidParameter, s);
              });
            }),
            (e.functions.splice = function (a, s) {
              return e.standardFunction(a, s, (o, c, l) => {
                const d = [];
                for (let p = 0; p < l.length; p++)
                  k(l[p])
                    ? d.push(...l[p])
                    : N(l[p])
                    ? d.push(...l[p].toArray())
                    : d.push(l[p]);
                return d;
              });
            }),
            (e.functions.top = function (a, s) {
              return e.standardFunction(a, s, (o, c, l) => {
                if ((D(l, 2, 2, a, s), k(l[0])))
                  return m(l[1]) >= l[0].length
                    ? l[0].slice(0)
                    : l[0].slice(0, m(l[1]));
                if (N(l[0]))
                  return m(l[1]) >= l[0].length()
                    ? l[0].slice(0)
                    : l[0].slice(0, m(l[1]));
                throw new f(a, h.InvalidParameter, s);
              });
            }),
            (e.functions.first = function (a, s) {
              return e.standardFunction(
                a,
                s,
                (o, c, l) => (
                  D(l, 1, 1, a, s),
                  k(l[0])
                    ? l[0].length === 0
                      ? null
                      : l[0][0]
                    : N(l[0])
                    ? l[0].length() === 0
                      ? null
                      : l[0].get(0)
                    : null
                )
              );
            }),
            e.mode === "sync" &&
              ((e.functions.sort = function (a, s) {
                return e.standardFunction(a, s, (o, c, l) => u(a, s, l, !1));
              }),
              (e.functions.any = function (a, s) {
                return e.standardFunction(a, s, (o, c, l) => {
                  D(l, 2, 2, a, s);
                  const d = l[1].createFunction(a),
                    p = n(l[0], a, s);
                  for (const g of p) {
                    const F = d(g);
                    if (G(F) && F === !0) return !0;
                  }
                  return !1;
                });
              }),
              (e.functions.all = function (a, s) {
                return e.standardFunction(a, s, (o, c, l) => {
                  D(l, 2, 2, a, s);
                  const d = l[1].createFunction(a),
                    p = n(l[0], a, s);
                  for (const g of p) if (d(g) !== !0) return !1;
                  return !0;
                });
              }),
              (e.functions.none = function (a, s) {
                return e.standardFunction(a, s, (o, c, l) => {
                  D(l, 2, 2, a, s);
                  const d = l[1].createFunction(a),
                    p = n(l[0], a, s);
                  for (const g of p) if (d(g) === !0) return !1;
                  return !0;
                });
              }),
              (e.functions.reduce = function (a, s) {
                return e.standardFunction(a, s, (o, c, l) => {
                  D(l, 2, 3, a, s);
                  const d = l[1].createFunction(a),
                    p = n(l[0], a, s);
                  return l.length === 2
                    ? p.length === 0
                      ? null
                      : p.reduce((g, F) => {
                          const w = d(g, F);
                          return w !== void 0 && w !== A ? w : null;
                        })
                    : p.reduce((g, F) => {
                        const w = d(g, F);
                        return w !== void 0 && w !== A ? w : null;
                      }, l[2]);
                });
              }),
              (e.functions.map = function (a, s) {
                return e.standardFunction(a, s, (o, c, l) => {
                  D(l, 2, 2, a, s);
                  const d = l[1].createFunction(a),
                    p = n(l[0], a, s),
                    g = [];
                  for (const F of p) {
                    const w = d(F);
                    w !== void 0 && w !== A ? g.push(w) : g.push(null);
                  }
                  return g;
                });
              }),
              (e.functions.filter = function (a, s) {
                return e.standardFunction(a, s, (o, c, l) => {
                  D(l, 2, 2, a, s);
                  const d = l[1].createFunction(a),
                    p = n(l[0], a, s),
                    g = [];
                  for (const F of p) d(F) === !0 && g.push(F);
                  return g;
                });
              })),
            e.mode === "async" &&
              ((e.functions.sort = function (a, s) {
                return e.standardFunctionAsync(a, s, (o, c, l) =>
                  u(a, s, l, !0)
                );
              }),
              (e.functions.any = function (a, s) {
                return e.standardFunctionAsync(a, s, async (o, c, l) => {
                  D(l, 2, 2, a, s);
                  const d = l[1].createFunction(a),
                    p = n(l[0], a, s);
                  for (const g of p) {
                    const F = await d(g);
                    let w = null;
                    if (((w = Ge(w) ? await F : F), G(w) && w === !0))
                      return !0;
                  }
                  return !1;
                });
              }),
              (e.functions.all = function (a, s) {
                return e.standardFunctionAsync(a, s, async (o, c, l) => {
                  D(l, 2, 2, a, s);
                  const d = l[1].createFunction(a),
                    p = n(l[0], a, s);
                  for (const g of p) {
                    const F = await d(g);
                    let w = null;
                    if (((w = Ge(w) ? await F : F), w !== !0)) return !1;
                  }
                  return !0;
                });
              }),
              (e.functions.none = function (a, s) {
                return e.standardFunctionAsync(a, s, async (o, c, l) => {
                  D(l, 2, 2, a, s);
                  const d = l[1].createFunction(a),
                    p = n(l[0], a, s);
                  for (const g of p) {
                    const F = await d(g);
                    let w = null;
                    if (((w = Ge(w) ? await F : F), w === !0)) return !1;
                  }
                  return !0;
                });
              }),
              (e.functions.filter = function (a, s) {
                return e.standardFunctionAsync(a, s, async (o, c, l) => {
                  D(l, 2, 2, a, s);
                  const d = l[1].createFunction(a),
                    p = n(l[0], a, s),
                    g = [];
                  for (const F of p) {
                    const w = await d(F);
                    let O = null;
                    (O = Ge(O) ? await w : w), O === !0 && g.push(F);
                  }
                  return g;
                });
              }),
              (e.functions.reduce = function (a, s) {
                return e.standardFunctionAsync(a, s, (o, c, l) => {
                  D(l, 2, 3, a, s);
                  const d = l[1].createFunction(a),
                    p = n(l[0], a, s);
                  let g = null;
                  if (l.length > 2) {
                    const F = _(l[2], null);
                    g = p.reduce(async (w, O) => {
                      let K = await w;
                      return (K !== void 0 && K !== A) || (K = null), d(K, O);
                    }, Promise.resolve(F));
                  } else {
                    if (p.length === 0) return null;
                    g = p.reduce(async (F, w, O) => {
                      if (O <= 1) return d(F, w);
                      let K = await F;
                      return (K !== void 0 && K !== A) || (K = null), d(K, w);
                    });
                  }
                  return g.then((F) => (F !== void 0 && F !== A ? F : null));
                });
              }),
              (e.functions.map = function (a, s) {
                return e.standardFunctionAsync(a, s, async (o, c, l) => {
                  D(l, 2, 2, a, s);
                  const d = l[1].createFunction(a),
                    p = n(l[0], a, s),
                    g = [];
                  for (const F of p) {
                    const w = await d(F);
                    let O = null;
                    (O = Ge(O) ? await w : w),
                      O !== void 0 && O !== A ? g.push(O) : g.push(null);
                  }
                  return g;
                });
              }));
        },
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Aa = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  Ea = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Qe(e) {
  return e === null ? e : e.isValid === !1 ? null : e;
}
function Er(e, n) {
  return e === "" || e.toLowerCase().trim() === "default" ? P(n) : e;
}
function xi(e, n) {
  (e.today = function (t, r) {
    return n(t, r, (i, u, a) => {
      D(a, 0, 0, t, r);
      const s = new Date();
      return s.setHours(0, 0, 0, 0), q.dateJSAndZoneToArcadeDate(s, P(t));
    });
  }),
    (e.changetimezone = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 2, 2, t, r);
        const s = Y(a[0], P(t));
        if (s === null) return null;
        const o = q.arcadeDateAndZoneToArcadeDate(s, Er(E(a[1]), t));
        return o.isValid === !1 ? null : o;
      });
    }),
    (e.timezone = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 2, t, r);
        const s = Y(a[0], P(t));
        if (s === null) return null;
        const o = s.timeZone;
        return o === "system" ? q.systemTimeZoneCanonicalName : o;
      });
    }),
    (e.timezoneoffset = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        const s = Y(a[0], P(t));
        return s === null ? null : s.timeZoneOffset;
      });
    }),
    (e.now = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 0, 0, t, r);
        const s = q.nowToArcadeDate(P(t));
        return s.isValid === !1 ? null : s;
      });
    }),
    (e.timestamp = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 0, 0, t, r);
        const s = q.nowUTCToArcadeDate();
        return s.isValid === !1 ? null : s;
      });
    }),
    (e.toutc = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        const s = Y(a[0], P(t));
        return s === null ? null : s.toUTC();
      });
    }),
    (e.tolocal = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        const s = Y(a[0], P(t));
        return s === null ? null : s.toLocal();
      });
    }),
    (e.day = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        const s = Y(a[0], P(t));
        return s === null ? NaN : s.day;
      });
    }),
    (e.month = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        const s = Y(a[0], P(t));
        return s === null ? NaN : s.monthJS;
      });
    }),
    (e.year = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        const s = Y(a[0], P(t));
        return s === null ? NaN : s.year;
      });
    }),
    (e.hour = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        const s = Y(a[0], P(t));
        return s === null ? NaN : s.hour;
      });
    }),
    (e.second = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        const s = Y(a[0], P(t));
        return s === null ? NaN : s.second;
      });
    }),
    (e.millisecond = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        const s = Y(a[0], P(t));
        return s === null ? NaN : s.millisecond;
      });
    }),
    (e.minute = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        const s = Y(a[0], P(t));
        return s === null ? NaN : s.minute;
      });
    }),
    (e.week = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 2, t, r);
        const s = Y(a[0], P(t));
        if (s === null) return NaN;
        const o = m(_(a[1], 0));
        if (o < 0 || o > 6) throw new f(t, h.InvalidParameter, r);
        const c = s.day,
          l = s.monthJS,
          d = s.year,
          p = s.dayOfWeekJS,
          g =
            (function (w, O, K) {
              return (
                w +
                ((function (re) {
                  return re % 4 == 0 && (re % 100 != 0 || re % 400 == 0);
                })(K)
                  ? Ea
                  : Aa)[O]
              );
            })(c, l, d) - 1,
          F = Math.floor(g / 7);
        return p - o + (p - o < 0 ? 7 : 0) < g - 7 * F ? F + 1 : F;
      });
    }),
    (e.weekday = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        const s = Y(a[0], P(t));
        return s === null ? NaN : s.dayOfWeekJS;
      });
    }),
    (e.isoweekday = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        const s = Y(a[0], P(t));
        return s === null ? NaN : s.dayOfWeekISO;
      });
    }),
    (e.isomonth = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        const s = Y(a[0], P(t));
        return s === null ? NaN : s.monthISO;
      });
    }),
    (e.isoweek = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        const s = Y(a[0], P(t));
        return s === null ? NaN : s.weekISO;
      });
    }),
    (e.isoyear = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        const s = Y(a[0], P(t));
        return s === null ? NaN : s.yearISO;
      });
    }),
    (e.date = function (t, r) {
      return n(t, r, (i, u, a) => {
        if ((D(a, 0, 8, t, r), a.length === 3))
          return Qe(
            q.fromParts(m(a[0]), m(a[1]) + 1, m(a[2]), 0, 0, 0, 0, P(t))
          );
        if (a.length === 4)
          return Qe(
            q.fromParts(m(a[0]), m(a[1]) + 1, m(a[2]), m(a[3]), 0, 0, 0, P(t))
          );
        if (a.length === 5)
          return Qe(
            q.fromParts(
              m(a[0]),
              m(a[1]) + 1,
              m(a[2]),
              m(a[3]),
              m(a[4]),
              0,
              0,
              P(t)
            )
          );
        if (a.length === 6)
          return Qe(
            q.fromParts(
              m(a[0]),
              m(a[1]) + 1,
              m(a[2]),
              m(a[3]),
              m(a[4]),
              m(a[5]),
              0,
              P(t)
            )
          );
        if (a.length === 7)
          return Qe(
            q.fromParts(
              m(a[0]),
              m(a[1]) + 1,
              m(a[2]),
              m(a[3]),
              m(a[4]),
              m(a[5]),
              m(a[6]),
              P(t)
            )
          );
        if (a.length === 8)
          return Qe(
            q.fromParts(
              m(a[0]),
              m(a[1]) + 1,
              m(a[2]),
              m(a[3]),
              m(a[4]),
              m(a[5]),
              m(a[6]),
              Er(E(a[7]), t)
            )
          );
        if (a.length === 2) {
          let s,
            o = E(a[1]);
          return o === ""
            ? null
            : ((o = Wn(o)),
              (s =
                o === "X"
                  ? ot.fromSeconds(m(a[0]))
                  : o === "x"
                  ? ot.fromMillis(m(a[0]))
                  : ot.fromFormat(E(a[0]), o, {
                      locale: ni(),
                      numberingSystem: "latn",
                    })),
              s.isValid ? q.dateTimeToArcadeDate(s) : null);
        }
        if (a.length === 1) {
          if (v(a[0])) {
            if (a[0].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") === "")
              return null;
            if (/^[0-9][0-9][0-9][0-9]$/.test(a[0]) === !0)
              return Y(a[0] + "-01-01", P(t));
          }
          const s = m(a[0]);
          if (isNaN(s) === !1) {
            const o = ot.fromMillis(s);
            return o.isValid ? q.dateTimeAndZoneToArcadeDate(o, P(t)) : null;
          }
          return Y(a[0], P(t));
        }
        return a.length === 0 ? q.nowToArcadeDate(P(t)) : null;
      });
    }),
    (e.datediff = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 2, 4, t, r);
        let s = Y(a[0], P(t)),
          o = Y(a[1], P(t));
        if (s === null || o === null) return NaN;
        let c = _(a[3], "");
        switch (
          (c !== "" && c !== null
            ? ((c = E(c)),
              (s = q.arcadeDateAndZoneToArcadeDate(s, c)),
              (o = q.arcadeDateAndZoneToArcadeDate(o, c)))
            : s.timeZone !== o.timeZone &&
              (s.isUnknownTimeZone
                ? (s = q.arcadeDateAndZoneToArcadeDate(s, o.timeZone))
                : (o.isUnknownTimeZone,
                  (o = q.arcadeDateAndZoneToArcadeDate(o, s.timeZone)))),
          E(a[2]).toLowerCase())
        ) {
          case "days":
          case "day":
          case "d":
            return s.diff(o, "days");
          case "months":
          case "month":
            return s.diff(o, "months");
          case "minutes":
          case "minute":
          case "m":
            return a[2] === "M" ? s.diff(o, "months") : s.diff(o, "minutes");
          case "seconds":
          case "second":
          case "s":
            return s.diff(o, "seconds");
          case "milliseconds":
          case "millisecond":
          case "ms":
          default:
            return s.diff(o);
          case "hours":
          case "hour":
          case "h":
            return s.diff(o, "hours");
          case "years":
          case "year":
          case "y":
            return s.diff(o, "years");
        }
      });
    }),
    (e.dateadd = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 2, 3, t, r);
        const s = Y(a[0], P(t));
        if (s === null) return null;
        let o = m(a[1]);
        if (isNaN(o)) return s;
        let c = "milliseconds";
        switch (E(a[2]).toLowerCase()) {
          case "days":
          case "day":
          case "d":
            (c = "days"), (o = kn(o));
            break;
          case "months":
          case "month":
            (c = "months"), (o = kn(o));
            break;
          case "minutes":
          case "minute":
          case "m":
            c = a[2] === "M" ? "months" : "minutes";
            break;
          case "seconds":
          case "second":
          case "s":
            c = "seconds";
            break;
          case "milliseconds":
          case "millisecond":
          case "ms":
            c = "milliseconds";
            break;
          case "hours":
          case "hour":
          case "h":
            c = "hours";
            break;
          case "years":
          case "year":
          case "y":
            c = "years";
        }
        return s.plus({ [c]: o });
      });
    });
}
function gt(e, n, t) {
  return Math.sqrt(
    (e[0] - n[0]) ** 2 +
      (e[1] - n[1]) ** 2 +
      (e[2] !== void 0 && n[2] !== void 0 ? (e[2] * t - n[2] * t) ** 2 : 0)
  );
}
const wt = [];
for (const e of [
  [9002, 56146130, 6131, 6132, 8050, 8051, 8228],
  [9003, 5702, 6358, 6359, 6360, 8052, 8053],
  [9095, 5754],
]) {
  const n = e[0];
  for (let t = 1; t < e.length; t++) wt[e[t]] = n;
}
const Et = [];
function ba(e) {
  return e.vcsWkid && wt[e.vcsWkid] !== void 0
    ? Et[wt[e.vcsWkid]]
    : e.latestVcsWkid && wt[e.latestVcsWkid] !== void 0
    ? Et[wt[e.latestVcsWkid]]
    : 1;
}
function br(e, n, t) {
  const r = { x: 0, y: 0 };
  n && (r.z = 0), t && (r.m = 0);
  let i = 0,
    u = e[0];
  for (let a = 0; a < e.length; a++) {
    const s = e[a];
    if (Ia(s, u) === !1) {
      const o = Fi(u, s, n),
        c = va(u, s, n, t);
      (c.x *= o),
        (c.y *= o),
        (r.x += c.x),
        (r.y += c.y),
        n && ((c.z *= o), (r.z += c.z)),
        t && ((c.m *= o), (r.m += c.m)),
        (i += o),
        (u = s);
    }
  }
  return (
    i > 0
      ? ((r.x /= i), (r.y /= i), n && (r.z /= i), t && (r.m /= i))
      : ((r.x = e[0][0]),
        (r.y = e[0][1]),
        n && (r.z = e[0][2]),
        t && n ? (r.m = e[0][3]) : t && (r.m = e[0][2])),
    r
  );
}
function va(e, n, t, r) {
  const i = { x: (e[0] + n[0]) / 2, y: (e[1] + n[1]) / 2 };
  return (
    t && (i.z = (e[2] + n[2]) / 2),
    t && r ? (i.m = (e[3] + n[3]) / 2) : r && (i.m = (e[2] + n[2]) / 2),
    i
  );
}
function Sa(e, n) {
  if (e.length <= 1) return 0;
  let t = 0;
  for (let r = 1; r < e.length; r++) t += Fi(e[r - 1], e[r], n);
  return t;
}
function Fi(e, n, t) {
  const r = n[0] - e[0],
    i = n[1] - e[1];
  if (t) {
    const u = n[2] - n[2];
    return Math.sqrt(r * r + i * i + u * u);
  }
  return Math.sqrt(r * r + i * i);
}
function Ia(e, n) {
  if (e.length !== n.length) return !1;
  for (let t = 0; t < e.length; t++) if (e[t] !== n[t]) return !1;
  return !0;
}
function ka(e) {
  const n = { x: 0, y: 0, spatialReference: e.spatialReference.toJSON() },
    t = { x: 0, y: 0, spatialReference: e.spatialReference.toJSON() };
  let r = 0,
    i = 0;
  for (let u = 0; u < e.paths.length; u++) {
    if (e.paths[u].length === 0) continue;
    const a = Sa(e.paths[u], e.hasZ === !0);
    if (a === 0) {
      const s = br(e.paths[u], e.hasZ === !0, e.hasM === !0);
      (n.x += s.x),
        (n.y += s.y),
        e.hasZ === !0 && (n.z += s.z),
        e.hasM === !0 && (n.m += s.m),
        ++r;
    } else {
      const s = br(e.paths[u], e.hasZ === !0, e.hasM === !0);
      (t.x += s.x * a),
        (t.y += s.y * a),
        e.hasZ === !0 && (t.z += s.z * a),
        e.hasM === !0 && (t.m += s.m * a),
        (i += a);
    }
  }
  return i > 0
    ? ((t.x /= i),
      (t.y /= i),
      e.hasZ === !0 && (t.z /= i),
      e.hasM === !0 && (t.m /= i),
      new Z(t))
    : r > 0
    ? ((n.x /= r),
      (n.y /= r),
      e.hasZ === !0 && (t.z /= r),
      e.hasM === !0 && (n.m /= r),
      new Z(n))
    : null;
}
function Ba(e) {
  if (e.points.length === 0) return null;
  let n = 0,
    t = 0,
    r = 0,
    i = 0;
  for (let a = 0; a < e.points.length; a++) {
    const s = e.getPoint(a);
    s.hasZ === !0 && (r += s.z),
      s.hasM === !0 && (i += s.m),
      (n += s.x),
      (t += s.y),
      (i += s.m);
  }
  const u = {
    x: n / e.points.length,
    y: t / e.points.length,
    spatialReference: null,
  };
  return (
    (u.spatialReference = e.spatialReference.toJSON()),
    e.hasZ === !0 && (u.z = r / e.points.length),
    e.hasM === !0 && (u.m = i / e.points.length),
    new Z(u)
  );
}
function Mt(e, n, t = 0) {
  for (; e < t; ) e += n;
  const r = t + n;
  for (; e >= r; ) e -= n;
  return e;
}
function vr(e, n) {
  return Math.atan2(n.y - e.y, n.x - e.x);
}
function Sr(e, n, t) {
  const r = { x: e.x - n.x, y: e.y - n.y },
    i = { x: t.x - n.x, y: t.y - n.y };
  return Math.atan2(
    (function (u, a) {
      return u.x * a.y - a.x * u.y;
    })(r, i),
    (function (u, a) {
      return u.x * a.x + u.y * a.y;
    })(r, i)
  );
}
(Et[9002] = 0.3048), (Et[9003] = 0.3048006096012192), (Et[9095] = 0.3048007491);
const ie = [0, 0];
function Ir(e) {
  for (let n = 0; n < e.length; n++) {
    const t = e[n];
    for (let i = 0; i < t.length - 1; i++) {
      const u = t[i],
        a = t[i + 1];
      for (let s = n + 1; s < e.length; s++)
        for (let o = 0; o < e[s].length - 1; o++) {
          const c = e[s][o],
            l = e[s][o + 1];
          if (
            hr(u, a, c, l, ie) &&
            !(
              (ie[0] === u[0] && ie[1] === u[1]) ||
              (ie[0] === c[0] && ie[1] === c[1]) ||
              (ie[0] === a[0] && ie[1] === a[1]) ||
              (ie[0] === l[0] && ie[1] === l[1])
            )
          )
            return !0;
        }
    }
    const r = t.length;
    if (!(r < 3))
      for (let i = 0; i <= r - 2; i++) {
        const u = t[i],
          a = t[i + 1];
        for (let s = i + 2; s <= r - 2; s++) {
          const o = t[s],
            c = t[s + 1];
          if (
            hr(u, a, o, c, ie) &&
            !(
              (ie[0] === u[0] && ie[1] === u[1]) ||
              (ie[0] === o[0] && ie[1] === o[1]) ||
              (ie[0] === a[0] && ie[1] === a[1]) ||
              (ie[0] === c[0] && ie[1] === c[1])
            )
          )
            return !0;
        }
      }
  }
  return !1;
}
function Nt(e) {
  return e && e.arcadeDeclaredClass === "esri.arcade.Feature";
}
function Ci(e, n) {
  (e.ringisclockwise = function (t, r) {
    return n(t, r, (i, u, a) => {
      D(a, 1, 1, t, r);
      let s = [],
        o = !1,
        c = !1;
      if (a[0] === null) return !1;
      if (k(a[0])) {
        for (const l of a[0]) {
          if (!(l instanceof Z)) throw new f(t, h.InvalidParameter, r);
          s.push(
            l.hasZ
              ? l.hasM
                ? [l.x, l.y, l.z, l.m]
                : [l.x, l.y, l.z]
              : [l.x, l.y]
          );
        }
        s.length > 0 && ((o = a[0][0].hasZ), (c = a[0][0].hasM));
      } else if (a[0] instanceof Xe)
        (s = a[0]._elements),
          s.length > 0 && ((o = a[0]._hasZ), (c = a[0]._hasM));
      else {
        if (!N(a[0])) throw new f(t, h.InvalidParameter, r);
        for (const l of a[0].toArray()) {
          if (!(l instanceof Z)) throw new f(t, h.InvalidParameter, r);
          s.push(
            l.hasZ
              ? l.hasM
                ? [l.x, l.y, l.z, l.m]
                : [l.x, l.y, l.z]
              : [l.x, l.y]
          );
        }
        s.length > 0 && ((o = a[0].get(0).hasZ), (c = a[0].get(0).hasM));
      }
      return !(s.length < 3) && ri(s, c, o);
    });
  }),
    (e.polygon = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        let s = null;
        if (a[0] instanceof T) {
          if (
            ((s = te(X.parseGeometryFromDictionary(a[0]), t.spatialReference)),
            s instanceof ue == 0)
          )
            throw new f(t, h.InvalidParameter, r);
        } else
          s =
            a[0] instanceof ue
              ? pe(a[0].toJSON())
              : te(new ue(JSON.parse(a[0])), t.spatialReference);
        if (s !== null && s.spatialReference.equals(t.spatialReference) === !1)
          throw new f(t, h.WrongSpatialReference, r);
        return Ve(s);
      });
    }),
    (e.polyline = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        let s = null;
        if (a[0] instanceof T) {
          if (
            ((s = te(X.parseGeometryFromDictionary(a[0]), t.spatialReference)),
            s instanceof se == 0)
          )
            throw new f(t, h.InvalidParameter, r);
        } else
          s =
            a[0] instanceof se
              ? pe(a[0].toJSON())
              : te(new se(JSON.parse(a[0])), t.spatialReference);
        if (s !== null && s.spatialReference.equals(t.spatialReference) === !1)
          throw new f(t, h.WrongSpatialReference, r);
        return Ve(s);
      });
    }),
    (e.point = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        let s = null;
        if (a[0] instanceof T) {
          if (
            ((s = te(X.parseGeometryFromDictionary(a[0]), t.spatialReference)),
            s instanceof Z == 0)
          )
            throw new f(t, h.InvalidParameter, r);
        } else
          s =
            a[0] instanceof Z
              ? pe(a[0].toJSON())
              : te(new Z(JSON.parse(a[0])), t.spatialReference);
        if (s !== null && s.spatialReference.equals(t.spatialReference) === !1)
          throw new f(t, h.WrongSpatialReference, r);
        return Ve(s);
      });
    }),
    (e.multipoint = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        let s = null;
        if (a[0] instanceof T) {
          if (
            ((s = te(X.parseGeometryFromDictionary(a[0]), t.spatialReference)),
            s instanceof xe == 0)
          )
            throw new f(t, h.InvalidParameter, r);
        } else
          s =
            a[0] instanceof xe
              ? pe(a[0].toJSON())
              : te(new xe(JSON.parse(a[0])), t.spatialReference);
        if (s !== null && s.spatialReference.equals(t.spatialReference) === !1)
          throw new f(t, h.WrongSpatialReference, r);
        return Ve(s);
      });
    }),
    (e.extent = function (t, r) {
      return n(t, r, (i, u, a) => {
        var o;
        D((a = U(a)), 1, 1, t, r);
        let s = null;
        if (a[0] instanceof T)
          s = te(X.parseGeometryFromDictionary(a[0]), t.spatialReference);
        else if (a[0] instanceof Z) {
          const c = {
              xmin: a[0].x,
              ymin: a[0].y,
              xmax: a[0].x,
              ymax: a[0].y,
              spatialReference: a[0].spatialReference.toJSON(),
            },
            l = a[0];
          l.hasZ
            ? ((c.zmin = l.z), (c.zmax = l.z))
            : l.hasM && ((c.mmin = l.m), (c.mmax = l.m)),
            (s = pe(c));
        } else
          s =
            a[0] instanceof ue || a[0] instanceof se || a[0] instanceof xe
              ? pe((o = a[0].extent) == null ? void 0 : o.toJSON())
              : a[0] instanceof de
              ? pe(a[0].toJSON())
              : te(new de(JSON.parse(a[0])), t.spatialReference);
        if (s !== null && s.spatialReference.equals(t.spatialReference) === !1)
          throw new f(t, h.WrongSpatialReference, r);
        return Ve(s);
      });
    }),
    (e.geometry = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        let s = null;
        if (a[0] === null) return null;
        if (
          ((s = Nt(a[0])
            ? te(a[0].geometry(), t.spatialReference)
            : a[0] instanceof T
            ? te(X.parseGeometryFromDictionary(a[0]), t.spatialReference)
            : te(pe(JSON.parse(a[0])), t.spatialReference)),
          s !== null && s.spatialReference.equals(t.spatialReference) === !1)
        )
          throw new f(t, h.WrongSpatialReference, r);
        return Ve(s);
      });
    }),
    (e.setgeometry = function (t, r) {
      return n(t, r, (i, u, a) => {
        if ((D(a, 2, 2, t, r), !Nt(a[0])))
          throw new f(t, h.InvalidParameter, r);
        if (a[0].immutable === !0) throw new f(t, h.Immutable, r);
        if (!(a[1] instanceof B || a[1] === null))
          throw new f(t, h.InvalidParameter, r);
        return (a[0]._geometry = a[1]), A;
      });
    }),
    (e.feature = function (t, r) {
      return n(t, r, (i, u, a) => {
        if (a.length === 0) throw new f(t, h.WrongNumberOfParameters, r);
        let s = null;
        if (a.length === 1)
          if (v(a[0])) s = X.fromJson(JSON.parse(a[0]), t.timeReference);
          else if (Nt(a[0])) s = X.createFromArcadeFeature(a[0]);
          else if (a[0] instanceof B)
            s = X.createFromGraphicLikeObject(
              a[0],
              null,
              null,
              t.timeReference
            );
          else {
            if (!(a[0] instanceof T)) throw new f(t, h.InvalidParameter, r);
            {
              let o = a[0].hasField("geometry") ? a[0].field("geometry") : null,
                c = a[0].hasField("attributes")
                  ? a[0].field("attributes")
                  : null;
              o !== null &&
                o instanceof T &&
                (o = X.parseGeometryFromDictionary(o)),
                c !== null && (c = X.parseAttributesFromDictionary(c)),
                (s = X.createFromGraphicLikeObject(
                  o,
                  c,
                  null,
                  t.timeReference
                ));
            }
          }
        else if (a.length === 2) {
          let o = null,
            c = null;
          if (a[0] !== null)
            if (a[0] instanceof B) o = a[0];
            else {
              if (!(o instanceof T)) throw new f(t, h.InvalidParameter, r);
              o = X.parseGeometryFromDictionary(a[0]);
            }
          if (a[1] !== null) {
            if (!(a[1] instanceof T)) throw new f(t, h.InvalidParameter, r);
            c = X.parseAttributesFromDictionary(a[1]);
          }
          s = X.createFromGraphicLikeObject(o, c, null, t.timeReference);
        } else {
          let o = null;
          const c = {};
          if (a[0] !== null)
            if (a[0] instanceof B) o = a[0];
            else {
              if (!(o instanceof T)) throw new f(t, h.InvalidParameter, r);
              o = X.parseGeometryFromDictionary(a[0]);
            }
          for (let l = 1; l < a.length; l += 2) {
            const d = E(a[l]),
              p = a[l + 1];
            if (!(p == null || v(p) || isNaN(p) || H(p) || z(p) || G(p)))
              throw new f(t, h.InvalidParameter, r);
            if ($(p) || qe(p) === !1) throw new f(t, h.InvalidParameter, r);
            c[d] = p === A ? null : p;
          }
          s = X.createFromGraphicLikeObject(o, c, null, t.timeReference);
        }
        return (
          (s._geometry = te(s.geometry(), t.spatialReference)),
          (s.immutable = !1),
          s
        );
      });
    }),
    (e.dictionary = function (t, r) {
      return n(t, r, (i, u, a) => {
        if (a.length === 0) {
          const c = new T();
          return (c.immutable = !1), c;
        }
        if (a.length === 1 && v(a[0]))
          try {
            const c = JSON.parse(a[0]),
              l = T.convertObjectToArcadeDictionary(c, P(t), !1);
            return (l.immutable = !1), l;
          } catch {
            throw new f(t, h.InvalidParameter, r);
          }
        if (a.length % 2 != 0) throw new f(t, h.WrongNumberOfParameters, r);
        const s = {};
        for (let c = 0; c < a.length; c += 2) {
          const l = E(a[c]),
            d = a[c + 1];
          if (
            !(
              d == null ||
              v(d) ||
              isNaN(d) ||
              H(d) ||
              z(d) ||
              G(d) ||
              k(d) ||
              N(d)
            )
          )
            throw new f(t, h.InvalidParameter, r);
          if ($(d)) throw new f(t, h.InvalidParameter, r);
          s[l] = d === A ? null : d;
        }
        const o = new T(s);
        return (o.immutable = !1), o;
      });
    }),
    (e.haskey = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 2, 2, t, r);
        const s = E(a[1]);
        if (Nt(a[0]) || a[0] instanceof T) return a[0].hasField(s);
        if (a[0] instanceof B) {
          const o = Bt(a[0], s, null, null, 2);
          return !o || o.keystate !== "notfound";
        }
        throw new f(t, h.InvalidParameter, r);
      });
    }),
    (e.hasvalue = function (t, r) {
      return n(t, r, (i, u, a) => {
        if ((D(a, 2, 2, t, r), a[0] === null || a[1] === null)) return !1;
        const s = E(a[1]);
        return ee(a[0]) || a[0] instanceof T
          ? !!a[0].hasField(s) && a[0].field(s) !== null
          : a[0] instanceof B && Bt(a[0], s, null, null, 0) !== null;
      });
    }),
    (e.indexof = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 2, 2, t, r);
        const s = a[1];
        if (k(a[0])) {
          for (let o = 0; o < a[0].length; o++) if (Fe(s, a[0][o])) return o;
          return -1;
        }
        if (N(a[0])) {
          const o = a[0].length();
          for (let c = 0; c < o; c++) if (Fe(s, a[0].get(c))) return c;
          return -1;
        }
        throw new f(t, h.InvalidParameter, r);
      });
    }),
    (e.angle = function (t, r) {
      return n(t, r, (i, u, a) => {
        if ((D((a = U(a)), 2, 3, t, r), !(a[0] instanceof Z)))
          throw new f(t, h.InvalidParameter, r);
        if (!(a[1] instanceof Z)) throw new f(t, h.InvalidParameter, r);
        if (a.length > 2 && !(a[2] instanceof Z))
          throw new f(t, h.InvalidParameter, r);
        return a.length === 2
          ? (function (s, o) {
              return Mt(vr(s, o), 2 * Math.PI) * (180 / Math.PI);
            })(a[0], a[1])
          : (function (s, o, c) {
              return Mt(Sr(s, o, c), 2 * Math.PI) * (180 / Math.PI);
            })(a[0], a[1], a[2]);
      });
    }),
    (e.bearing = function (t, r) {
      return n(t, r, (i, u, a) => {
        if ((D((a = U(a)), 2, 3, t, r), !(a[0] instanceof Z)))
          throw new f(t, h.InvalidParameter, r);
        if (!(a[1] instanceof Z)) throw new f(t, h.InvalidParameter, r);
        if (a.length > 2 && !(a[2] instanceof Z))
          throw new f(t, h.InvalidParameter, r);
        return a.length === 2
          ? (function (s, o) {
              return Mt(Math.PI / 2 - vr(s, o), 2 * Math.PI) * (180 / Math.PI);
            })(a[0], a[1])
          : (function (s, o, c) {
              return Mt(-1 * Sr(s, o, c), 2 * Math.PI) * (180 / Math.PI);
            })(a[0], a[1], a[2]);
      });
    }),
    (e.isselfintersecting = function (t, r) {
      return n(t, r, (i, u, a) => {
        D((a = U(a)), 1, 1, t, r);
        let s = a[0];
        if (s instanceof ue) return s.isSelfIntersecting;
        if (s instanceof se) return (s = s.paths), Ir(s);
        if (s instanceof xe) {
          const o = s.points;
          for (let c = 0; c < o.length; c++)
            for (let l = 0; l < o.length; l++)
              if (l !== c) {
                let d = !0;
                for (let p = 0; p < o[c].length; p++)
                  if (o[c][p] !== o[l][p]) {
                    d = !1;
                    break;
                  }
                if (d === !0) return !0;
              }
        }
        return (
          !(!k(s) && !N(s)) &&
          ((s = At(s, t.spatialReference)), s !== null && (s = s.paths), Ir(s))
        );
      });
    });
}
let Te = 0;
function Bt(e, n, t, r, i = 1) {
  let u;
  switch ((n = n.toLowerCase())) {
    case "hasz": {
      const a = e.hasZ;
      return a !== void 0 && a;
    }
    case "hasm": {
      const a = e.hasM;
      return a !== void 0 && a;
    }
    case "spatialreference": {
      let a = e.spatialReference._arcadeCacheId;
      if (a === void 0) {
        let o = !0;
        Object.freeze && Object.isFrozen(e.spatialReference) && (o = !1),
          o && (Te++, (e.spatialReference._arcadeCacheId = Te), (a = Te));
      }
      const s = new T({
        wkt: e.spatialReference.wkt,
        wkid: e.spatialReference.wkid,
      });
      return a !== void 0 && (s._arcadeCacheId = "SPREF" + a.toString()), s;
    }
  }
  switch (e.type) {
    case "extent":
      switch (n) {
        case "xmin":
        case "xmax":
        case "ymin":
        case "ymax":
        case "zmin":
        case "zmax":
        case "mmin":
        case "mmax": {
          const a = e[n];
          return a !== void 0 ? a : null;
        }
        case "type":
          return "Extent";
      }
      break;
    case "polygon":
      switch (n) {
        case "rings":
          return (
            (u = e.cache._arcadeCacheId),
            u === void 0 && (Te++, (u = Te), (e.cache._arcadeCacheId = u)),
            new Sn(e.rings, e.spatialReference, e.hasZ === !0, e.hasM === !0, u)
          );
        case "type":
          return "Polygon";
      }
      break;
    case "point":
      switch (n) {
        case "x":
        case "y":
        case "z":
        case "m":
          return e[n] !== void 0 ? e[n] : null;
        case "type":
          return "Point";
      }
      break;
    case "polyline":
      switch (n) {
        case "paths":
          return (
            (u = e.cache._arcadeCacheId),
            u === void 0 && (Te++, (u = Te), (e.cache._arcadeCacheId = u)),
            new Sn(e.paths, e.spatialReference, e.hasZ === !0, e.hasM === !0, u)
          );
        case "type":
          return "Polyline";
      }
      break;
    case "multipoint":
      switch (n) {
        case "points":
          return (
            (u = e.cache._arcadeCacheId),
            u === void 0 && (Te++, (u = Te), (e.cache._arcadeCacheId = u)),
            new Xe(
              e.points,
              e.spatialReference,
              e.hasZ === !0,
              e.hasM === !0,
              u,
              1
            )
          );
        case "type":
          return "Multipoint";
      }
  }
  if (i === 1) throw new f(t, h.InvalidIdentifier, r);
  return i === 2 ? { keystate: "notfound" } : null;
}
function Lt(e) {
  if (e == null) return null;
  if (typeof e == "number") return e;
  let n = e.toLowerCase();
  switch (((n = n.replace(/\s/g, "")), (n = n.replace(/-/g, "")), n)) {
    case "meters":
    case "meter":
    case "m":
    case "squaremeters":
    case "squaremeter":
      return 109404;
    case "miles":
    case "mile":
    case "squaremile":
    case "squaremiles":
      return 109439;
    case "kilometers":
    case "kilometer":
    case "squarekilometers":
    case "squarekilometer":
    case "km":
      return 109414;
    case "acres":
    case "acre":
    case "ac":
      return 109402;
    case "hectares":
    case "hectare":
    case "ha":
      return 109401;
    case "yard":
    case "yd":
    case "yards":
    case "squareyards":
    case "squareyard":
      return 109442;
    case "feet":
    case "ft":
    case "foot":
    case "squarefeet":
    case "squarefoot":
      return 109405;
    case "nmi":
    case "nauticalmile":
    case "nauticalmiles":
    case "squarenauticalmile":
    case "squarenauticalmiles":
      return 109409;
  }
  return null;
}
function vs(e) {
  if (e == null) return null;
  switch (e.type) {
    case "polygon":
    case "multipoint":
    case "polyline":
      return e.extent;
    case "point":
      return new de({
        xmin: e.x,
        ymin: e.y,
        xmax: e.x,
        ymax: e.y,
        spatialReference: e.spatialReference,
      });
    case "extent":
      return e;
  }
  return null;
}
function ae(e) {
  if (e == null) return null;
  if (typeof e == "number") return e;
  let n = e.toLowerCase();
  switch (((n = n.replace(/\s/g, "")), (n = n.replace(/-/g, "")), n)) {
    case "meters":
    case "meter":
    case "m":
    case "squaremeters":
    case "squaremeter":
      return 9001;
    case "miles":
    case "mile":
    case "squaremile":
    case "squaremiles":
      return 9093;
    case "kilometers":
    case "kilometer":
    case "squarekilometers":
    case "squarekilometer":
    case "km":
      return 9036;
    case "yard":
    case "yd":
    case "yards":
    case "squareyards":
    case "squareyard":
      return 9096;
    case "feet":
    case "ft":
    case "foot":
    case "squarefeet":
    case "squarefoot":
      return 9002;
    case "nmi":
    case "nauticalmile":
    case "nauticalmiles":
    case "squarenauticalmile":
    case "squarenauticalmiles":
      return 9030;
  }
  return null;
}
function Ce(e) {
  if (e == null) return null;
  const n = e.clone();
  return (
    e.cache._geVersion !== void 0 && (n.cache._geVersion = e.cache._geVersion),
    n
  );
}
let L = null;
function kr(e) {
  return la.indexOf("4.") === 0
    ? ue.fromExtent(e)
    : new ue({
        spatialReference: e.spatialReference,
        rings: [
          [
            [e.xmin, e.ymin],
            [e.xmin, e.ymax],
            [e.xmax, e.ymax],
            [e.xmax, e.ymin],
            [e.xmin, e.ymin],
          ],
        ],
      });
}
function Br(e, n) {
  if (e.type !== "polygon" && e.type !== "polyline" && e.type !== "extent")
    return 0;
  let t = 1;
  (e.spatialReference.vcsWkid || e.spatialReference.latestVcsWkid) &&
    (t = ba(e.spatialReference) / ca(e.spatialReference));
  let r = 0;
  if (e.type === "polyline")
    for (const u of e.paths)
      for (let a = 1; a < u.length; a++) r += gt(u[a], u[a - 1], t);
  else if (e.type === "polygon")
    for (const u of e.rings) {
      for (let a = 1; a < u.length; a++) r += gt(u[a], u[a - 1], t);
      (u[0][0] !== u[u.length - 1][0] ||
        u[0][1] !== u[u.length - 1][1] ||
        (u[0][2] !== void 0 && u[0][2] !== u[u.length - 1][2])) &&
        (r += gt(u[0], u[u.length - 1], t));
    }
  else
    e.type === "extent" &&
      ((r += 2 * gt([e.xmin, e.ymin, 0], [e.xmax, e.ymin, 0], t)),
      (r += 2 * gt([e.xmin, e.ymin, 0], [e.xmin, e.ymax, 0], t)),
      (r *= 2),
      (r += 4 * Math.abs(_(e.zmax, 0) * t - _(e.zmin, 0) * t)));
  const i = new se({
    hasZ: !1,
    hasM: !1,
    spatialReference: e.spatialReference,
    paths: [
      [0, 0],
      [0, r],
    ],
  });
  return L.planarLength(i, n);
}
function Xn(e, n) {
  function t(r, i, u) {
    if ((D(u, 2, 2, r, i), !(u[0] instanceof B && u[1] instanceof B))) {
      if (!(u[0] instanceof B && u[1] === null)) {
        if (!(u[1] instanceof B && u[0] === null)) {
          if (u[0] !== null || u[1] !== null)
            throw new f(r, h.InvalidParameter, i);
        }
      }
    }
  }
  (e.disjoint = function (r, i) {
    return n(
      r,
      i,
      (u, a, s) => (
        (s = U(s)),
        t(r, i, s),
        s[0] === null || s[1] === null || L.disjoint(s[0], s[1])
      )
    );
  }),
    (e.intersects = function (r, i) {
      return n(
        r,
        i,
        (u, a, s) => (
          (s = U(s)),
          t(r, i, s),
          s[0] !== null && s[1] !== null && L.intersects(s[0], s[1])
        )
      );
    }),
    (e.touches = function (r, i) {
      return n(
        r,
        i,
        (u, a, s) => (
          (s = U(s)),
          t(r, i, s),
          s[0] !== null && s[1] !== null && L.touches(s[0], s[1])
        )
      );
    }),
    (e.crosses = function (r, i) {
      return n(
        r,
        i,
        (u, a, s) => (
          (s = U(s)),
          t(r, i, s),
          s[0] !== null && s[1] !== null && L.crosses(s[0], s[1])
        )
      );
    }),
    (e.within = function (r, i) {
      return n(
        r,
        i,
        (u, a, s) => (
          (s = U(s)),
          t(r, i, s),
          s[0] !== null && s[1] !== null && L.within(s[0], s[1])
        )
      );
    }),
    (e.contains = function (r, i) {
      return n(
        r,
        i,
        (u, a, s) => (
          (s = U(s)),
          t(r, i, s),
          s[0] !== null && s[1] !== null && L.contains(s[0], s[1])
        )
      );
    }),
    (e.overlaps = function (r, i) {
      return n(
        r,
        i,
        (u, a, s) => (
          (s = U(s)),
          t(r, i, s),
          s[0] !== null && s[1] !== null && L.overlaps(s[0], s[1])
        )
      );
    }),
    (e.equals = function (r, i) {
      return n(
        r,
        i,
        (u, a, s) => (
          D(s, 2, 2, r, i),
          s[0] === s[1] ||
            (s[0] instanceof B && s[1] instanceof B
              ? L.equals(s[0], s[1])
              : !(!H(s[0]) || !H(s[1])) && s[0].equals(s[1]))
        )
      );
    }),
    (e.relate = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D((s = U(s)), 3, 3, r, i), s[0] instanceof B && s[1] instanceof B))
          return L.relate(s[0], s[1], E(s[2]));
        if (
          (s[0] instanceof B && s[1] === null) ||
          (s[1] instanceof B && s[0] === null) ||
          (s[0] === null && s[1] === null)
        )
          return !1;
        throw new f(r, h.InvalidParameter, i);
      });
    }),
    (e.intersection = function (r, i) {
      return n(
        r,
        i,
        (u, a, s) => (
          (s = U(s)),
          t(r, i, s),
          s[0] === null || s[1] === null ? null : L.intersect(s[0], s[1])
        )
      );
    }),
    (e.union = function (r, i) {
      return n(r, i, (u, a, s) => {
        const o = [];
        if ((s = U(s)).length === 0)
          throw new f(r, h.WrongNumberOfParameters, i);
        if (s.length === 1)
          if (k(s[0])) {
            const c = U(s[0]);
            for (let l = 0; l < c.length; l++)
              if (c[l] !== null) {
                if (!(c[l] instanceof B)) throw new f(r, h.InvalidParameter, i);
                o.push(c[l]);
              }
          } else {
            if (!N(s[0])) {
              if (s[0] instanceof B) return te(Ce(s[0]), r.spatialReference);
              if (s[0] === null) return null;
              throw new f(r, h.InvalidParameter, i);
            }
            {
              const c = U(s[0].toArray());
              for (let l = 0; l < c.length; l++)
                if (c[l] !== null) {
                  if (!(c[l] instanceof B))
                    throw new f(r, h.InvalidParameter, i);
                  o.push(c[l]);
                }
            }
          }
        else
          for (let c = 0; c < s.length; c++)
            if (s[c] !== null) {
              if (!(s[c] instanceof B)) throw new f(r, h.InvalidParameter, i);
              o.push(s[c]);
            }
        return o.length === 0 ? null : L.union(o);
      });
    }),
    (e.difference = function (r, i) {
      return n(
        r,
        i,
        (u, a, s) => (
          (s = U(s)),
          t(r, i, s),
          s[0] !== null && s[1] === null
            ? Ce(s[0])
            : s[0] === null
            ? null
            : L.difference(s[0], s[1])
        )
      );
    }),
    (e.symmetricdifference = function (r, i) {
      return n(
        r,
        i,
        (u, a, s) => (
          (s = U(s)),
          t(r, i, s),
          s[0] === null && s[1] === null
            ? null
            : s[0] === null
            ? Ce(s[1])
            : s[1] === null
            ? Ce(s[0])
            : L.symmetricDifference(s[0], s[1])
        )
      );
    }),
    (e.clip = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D((s = U(s)), 2, 2, r, i), !(s[1] instanceof de) && s[1] !== null))
          throw new f(r, h.InvalidParameter, i);
        if (s[0] === null) return null;
        if (!(s[0] instanceof B)) throw new f(r, h.InvalidParameter, i);
        return s[1] === null ? null : L.clip(s[0], s[1]);
      });
    }),
    (e.cut = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D((s = U(s)), 2, 2, r, i), !(s[1] instanceof se) && s[1] !== null))
          throw new f(r, h.InvalidParameter, i);
        if (s[0] === null) return [];
        if (!(s[0] instanceof B)) throw new f(r, h.InvalidParameter, i);
        return s[1] === null ? [Ce(s[0])] : L.cut(s[0], s[1]);
      });
    }),
    (e.area = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D(s, 1, 2, r, i), (s = U(s))[0] === null)) return 0;
        if (k(s[0]) || N(s[0])) {
          const o = Tn(s[0], r.spatialReference);
          return o === null ? 0 : L.planarArea(o, Lt(_(s[1], -1)));
        }
        if (!(s[0] instanceof B)) throw new f(r, h.InvalidParameter, i);
        return L.planarArea(s[0], Lt(_(s[1], -1)));
      });
    }),
    (e.areageodetic = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D(s, 1, 2, r, i), (s = U(s))[0] === null)) return 0;
        if (k(s[0]) || N(s[0])) {
          const o = Tn(s[0], r.spatialReference);
          return o === null ? 0 : L.geodesicArea(o, Lt(_(s[1], -1)));
        }
        if (!(s[0] instanceof B)) throw new f(r, h.InvalidParameter, i);
        return L.geodesicArea(s[0], Lt(_(s[1], -1)));
      });
    }),
    (e.length = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D(s, 1, 2, r, i), (s = U(s))[0] === null)) return 0;
        if (k(s[0]) || N(s[0])) {
          const o = At(s[0], r.spatialReference);
          return o === null ? 0 : L.planarLength(o, ae(_(s[1], -1)));
        }
        if (!(s[0] instanceof B)) throw new f(r, h.InvalidParameter, i);
        return L.planarLength(s[0], ae(_(s[1], -1)));
      });
    }),
    (e.length3d = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D(s, 1, 2, r, i), (s = U(s))[0] === null)) return 0;
        if (k(s[0]) || N(s[0])) {
          const o = At(s[0], r.spatialReference);
          return o === null
            ? 0
            : o.hasZ === !0
            ? Br(o, ae(_(s[1], -1)))
            : L.planarLength(o, ae(_(s[1], -1)));
        }
        if (!(s[0] instanceof B)) throw new f(r, h.InvalidParameter, i);
        return s[0].hasZ === !0
          ? Br(s[0], ae(_(s[1], -1)))
          : L.planarLength(s[0], ae(_(s[1], -1)));
      });
    }),
    (e.lengthgeodetic = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D(s, 1, 2, r, i), (s = U(s))[0] === null)) return 0;
        if (k(s[0]) || N(s[0])) {
          const o = At(s[0], r.spatialReference);
          return o === null ? 0 : L.geodesicLength(o, ae(_(s[1], -1)));
        }
        if (!(s[0] instanceof B)) throw new f(r, h.InvalidParameter, i);
        return L.geodesicLength(s[0], ae(_(s[1], -1)));
      });
    }),
    (e.distance = function (r, i) {
      return n(r, i, (u, a, s) => {
        D((s = U(s)), 2, 3, r, i);
        let o = s[0];
        (k(s[0]) || N(s[0])) && (o = Pt(s[0], r.spatialReference));
        let c = s[1];
        if (
          ((k(s[1]) || N(s[1])) && (c = Pt(s[1], r.spatialReference)),
          !(o instanceof B))
        )
          throw new f(r, h.InvalidParameter, i);
        if (!(c instanceof B)) throw new f(r, h.InvalidParameter, i);
        return L.distance(o, c, ae(_(s[2], -1)));
      });
    }),
    (e.distancegeodetic = function (r, i) {
      return n(r, i, (u, a, s) => {
        D((s = U(s)), 2, 3, r, i);
        const o = s[0],
          c = s[1];
        if (!(o instanceof Z)) throw new f(r, h.InvalidParameter, i);
        if (!(c instanceof Z)) throw new f(r, h.InvalidParameter, i);
        const l = new se({ paths: [], spatialReference: o.spatialReference });
        return l.addPath([o, c]), L.geodesicLength(l, ae(_(s[2], -1)));
      });
    }),
    (e.densify = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D((s = U(s)), 2, 3, r, i), s[0] === null)) return null;
        if (!(s[0] instanceof B)) throw new f(r, h.InvalidParameter, i);
        const o = m(s[1]);
        if (isNaN(o)) throw new f(r, h.InvalidParameter, i);
        if (o <= 0) throw new f(r, h.InvalidParameter, i);
        return s[0] instanceof ue || s[0] instanceof se
          ? L.densify(s[0], o, ae(_(s[2], -1)))
          : s[0] instanceof de
          ? L.densify(kr(s[0]), o, ae(_(s[2], -1)))
          : s[0];
      });
    }),
    (e.densifygeodetic = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D((s = U(s)), 2, 3, r, i), s[0] === null)) return null;
        if (!(s[0] instanceof B)) throw new f(r, h.InvalidParameter, i);
        const o = m(s[1]);
        if (isNaN(o)) throw new f(r, h.InvalidParameter, i);
        if (o <= 0) throw new f(r, h.InvalidParameter, i);
        return s[0] instanceof ue || s[0] instanceof se
          ? L.geodesicDensify(s[0], o, ae(_(s[2], -1)))
          : s[0] instanceof de
          ? L.geodesicDensify(kr(s[0]), o, ae(_(s[2], -1)))
          : s[0];
      });
    }),
    (e.generalize = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D((s = U(s)), 2, 4, r, i), s[0] === null)) return null;
        if (!(s[0] instanceof B)) throw new f(r, h.InvalidParameter, i);
        const o = m(s[1]);
        if (isNaN(o)) throw new f(r, h.InvalidParameter, i);
        return L.generalize(s[0], o, dt(_(s[2], !0)), ae(_(s[3], -1)));
      });
    }),
    (e.buffer = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D((s = U(s)), 2, 3, r, i), s[0] === null)) return null;
        if (!(s[0] instanceof B)) throw new f(r, h.InvalidParameter, i);
        const o = m(s[1]);
        if (isNaN(o)) throw new f(r, h.InvalidParameter, i);
        return o === 0 ? Ce(s[0]) : L.buffer(s[0], o, ae(_(s[2], -1)));
      });
    }),
    (e.buffergeodetic = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D((s = U(s)), 2, 3, r, i), s[0] === null)) return null;
        if (!(s[0] instanceof B)) throw new f(r, h.InvalidParameter, i);
        const o = m(s[1]);
        if (isNaN(o)) throw new f(r, h.InvalidParameter, i);
        return o === 0 ? Ce(s[0]) : L.geodesicBuffer(s[0], o, ae(_(s[2], -1)));
      });
    }),
    (e.offset = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D((s = U(s)), 2, 6, r, i), s[0] === null)) return null;
        if (!(s[0] instanceof ue || s[0] instanceof se))
          throw new f(r, h.InvalidParameter, i);
        const o = m(s[1]);
        if (isNaN(o)) throw new f(r, h.InvalidParameter, i);
        const c = m(_(s[4], 10));
        if (isNaN(c)) throw new f(r, h.InvalidParameter, i);
        const l = m(_(s[5], 0));
        if (isNaN(l)) throw new f(r, h.InvalidParameter, i);
        return L.offset(
          s[0],
          o,
          ae(_(s[2], -1)),
          E(_(s[3], "round")).toLowerCase(),
          c,
          l
        );
      });
    }),
    (e.rotate = function (r, i) {
      return n(r, i, (u, a, s) => {
        D((s = U(s)), 2, 3, r, i);
        let o = s[0];
        if (o === null) return null;
        if (!(o instanceof B)) throw new f(r, h.InvalidParameter, i);
        o instanceof de && (o = ue.fromExtent(o));
        const c = m(s[1]);
        if (isNaN(c)) throw new f(r, h.InvalidParameter, i);
        const l = _(s[2], null);
        if (l === null) return L.rotate(o, c);
        if (l instanceof Z) return L.rotate(o, c, l);
        throw new f(r, h.InvalidParameter, i);
      });
    }),
    (e.centroid = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D((s = U(s)), 1, 1, r, i), s[0] === null)) return null;
        let o = s[0];
        if (
          ((k(s[0]) || N(s[0])) && (o = Pt(s[0], r.spatialReference)),
          o === null)
        )
          return null;
        if (!(o instanceof B)) throw new f(r, h.InvalidParameter, i);
        return o instanceof Z
          ? te(Ce(s[0]), r.spatialReference)
          : o instanceof ue
          ? o.centroid
          : o instanceof se
          ? ka(o)
          : o instanceof xe
          ? Ba(o)
          : o instanceof de
          ? o.center
          : null;
      });
    }),
    (e.multiparttosinglepart = function (r, i) {
      return n(r, i, (u, a, s) => {
        D((s = U(s)), 1, 1, r, i);
        const o = [];
        if (s[0] === null) return null;
        if (!(s[0] instanceof B)) throw new f(r, h.InvalidParameter, i);
        if (s[0] instanceof Z) return [te(Ce(s[0]), r.spatialReference)];
        if (s[0] instanceof de) return [te(Ce(s[0]), r.spatialReference)];
        const c = L.simplify(s[0]);
        if (c instanceof ue) {
          const l = [],
            d = [];
          for (let p = 0; p < c.rings.length; p++)
            if (c.isClockwise(c.rings[p])) {
              const g = pe({
                rings: [c.rings[p]],
                hasZ: c.hasZ === !0,
                hasM: c.hasM === !0,
                spatialReference: c.spatialReference.toJSON(),
              });
              l.push(g);
            } else d.push({ ring: c.rings[p], pt: c.getPoint(p, 0) });
          for (let p = 0; p < d.length; p++)
            for (let g = 0; g < l.length; g++)
              if (l[g].contains(d[p].pt)) {
                l[g].addRing(d[p].ring);
                break;
              }
          return l;
        }
        if (c instanceof se) {
          const l = [];
          for (let d = 0; d < c.paths.length; d++) {
            const p = pe({
              paths: [c.paths[d]],
              hasZ: c.hasZ === !0,
              hasM: c.hasM === !0,
              spatialReference: c.spatialReference.toJSON(),
            });
            l.push(p);
          }
          return l;
        }
        if (s[0] instanceof xe) {
          const l = te(Ce(s[0]), r.spatialReference);
          for (let d = 0; d < l.points.length; d++) o.push(l.getPoint(d));
          return o;
        }
        return null;
      });
    }),
    (e.issimple = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D((s = U(s)), 1, 1, r, i), s[0] === null)) return !0;
        if (!(s[0] instanceof B)) throw new f(r, h.InvalidParameter, i);
        return L.isSimple(s[0]);
      });
    }),
    (e.simplify = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D((s = U(s)), 1, 1, r, i), s[0] === null)) return null;
        if (!(s[0] instanceof B)) throw new f(r, h.InvalidParameter, i);
        return L.simplify(s[0]);
      });
    }),
    (e.convexhull = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D((s = U(s)), 1, 1, r, i), s[0] === null)) return null;
        if (!(s[0] instanceof B)) throw new f(r, h.InvalidParameter, i);
        return L.convexHull(s[0]);
      });
    });
}
const Ta = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      registerFunctions: Xn,
      setGeometryEngine: function (e) {
        L = e;
      },
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function hn(e, n, t) {
  return t === void 0 || +t == 0
    ? Math[e](n)
    : ((n = +n),
      (t = +t),
      isNaN(n) || typeof t != "number" || t % 1 != 0
        ? NaN
        : ((n = n.toString().split("e")),
          +(
            (n = (n = Math[e](+(n[0] + "e" + (n[1] ? +n[1] - t : -t))))
              .toString()
              .split("e"))[0] +
            "e" +
            (n[1] ? +n[1] + t : t)
          )));
}
function Ai(e, n) {
  function t(r, i, u) {
    const a = m(r);
    return isNaN(a)
      ? a
      : isNaN(i) || isNaN(u) || i > u
      ? NaN
      : a < i
      ? i
      : a > u
      ? u
      : a;
  }
  (e.number = function (r, i) {
    return n(r, i, (u, a, s) => {
      D(s, 1, 2, r, i);
      const o = s[0];
      if (z(o)) return o;
      if (o === null) return 0;
      if (H(o)) return o.toNumber();
      if (G(o)) return Number(o);
      if (k(o)) return NaN;
      if (o === "" || o === void 0) return Number(o);
      if (v(o)) {
        if (s[1] !== void 0) {
          let c = je(s[1], "???", "");
          return (c = je(c, "??", "")), si(o, { pattern: c });
        }
        return Number(o.trim());
      }
      return Number(o);
    });
  }),
    (e.abs = function (r, i) {
      return n(r, i, (u, a, s) => (D(s, 1, 1, r, i), Math.abs(m(s[0]))));
    }),
    (e.acos = function (r, i) {
      return n(r, i, (u, a, s) => (D(s, 1, 1, r, i), Math.acos(m(s[0]))));
    }),
    (e.asin = function (r, i) {
      return n(r, i, (u, a, s) => (D(s, 1, 1, r, i), Math.asin(m(s[0]))));
    }),
    (e.atan = function (r, i) {
      return n(r, i, (u, a, s) => (D(s, 1, 1, r, i), Math.atan(m(s[0]))));
    }),
    (e.atan2 = function (r, i) {
      return n(
        r,
        i,
        (u, a, s) => (D(s, 2, 2, r, i), Math.atan2(m(s[0]), m(s[1])))
      );
    }),
    (e.ceil = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D(s, 1, 2, r, i), s.length === 2)) {
          let o = m(s[1]);
          return isNaN(o) && (o = 0), hn("ceil", m(s[0]), -1 * o);
        }
        return Math.ceil(m(s[0]));
      });
    }),
    (e.round = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D(s, 1, 2, r, i), s.length === 2)) {
          let o = m(s[1]);
          return isNaN(o) && (o = 0), hn("round", m(s[0]), -1 * o);
        }
        return Math.round(m(s[0]));
      });
    }),
    (e.floor = function (r, i) {
      return n(r, i, (u, a, s) => {
        if ((D(s, 1, 2, r, i), s.length === 2)) {
          let o = m(s[1]);
          return isNaN(o) && (o = 0), hn("floor", m(s[0]), -1 * o);
        }
        return Math.floor(m(s[0]));
      });
    }),
    (e.cos = function (r, i) {
      return n(r, i, (u, a, s) => (D(s, 1, 1, r, i), Math.cos(m(s[0]))));
    }),
    (e.isnan = function (r, i) {
      return n(
        r,
        i,
        (u, a, s) => (D(s, 1, 1, r, i), typeof s[0] == "number" && isNaN(s[0]))
      );
    }),
    (e.exp = function (r, i) {
      return n(r, i, (u, a, s) => (D(s, 1, 1, r, i), Math.exp(m(s[0]))));
    }),
    (e.log = function (r, i) {
      return n(r, i, (u, a, s) => (D(s, 1, 1, r, i), Math.log(m(s[0]))));
    }),
    (e.pow = function (r, i) {
      return n(r, i, (u, a, s) => (D(s, 2, 2, r, i), m(s[0]) ** m(s[1])));
    }),
    (e.random = function (r, i) {
      return n(r, i, (u, a, s) => (D(s, 0, 0, r, i), Math.random()));
    }),
    (e.sin = function (r, i) {
      return n(r, i, (u, a, s) => (D(s, 1, 1, r, i), Math.sin(m(s[0]))));
    }),
    (e.sqrt = function (r, i) {
      return n(r, i, (u, a, s) => (D(s, 1, 1, r, i), Math.sqrt(m(s[0]))));
    }),
    (e.tan = function (r, i) {
      return n(r, i, (u, a, s) => (D(s, 1, 1, r, i), Math.tan(m(s[0]))));
    }),
    (e.defaultvalue = function (r, i) {
      return n(
        r,
        i,
        (u, a, s) => (
          D(s, 2, 2, r, i),
          s[0] === null || s[0] === "" || s[0] === void 0 ? s[1] : s[0]
        )
      );
    }),
    (e.isempty = function (r, i) {
      return n(
        r,
        i,
        (u, a, s) => (
          D(s, 1, 1, r, i), s[0] === null || s[0] === "" || s[0] === void 0
        )
      );
    }),
    (e.boolean = function (r, i) {
      return n(r, i, (u, a, s) => (D(s, 1, 1, r, i), dt(s[0])));
    }),
    (e.constrain = function (r, i) {
      return n(r, i, (u, a, s) => {
        D(s, 3, 3, r, i);
        const o = m(s[1]),
          c = m(s[2]);
        if (k(s[0])) {
          const l = [];
          for (const d of s[0]) l.push(t(d, o, c));
          return l;
        }
        if (N(s[0])) {
          const l = [];
          for (let d = 0; d < s[0].length(); d++) l.push(t(s[0].get(d), o, c));
          return l;
        }
        return t(s[0], o, c);
      });
    });
}
function Ei(e) {
  let n = 0;
  for (let t = 0; t < e.length; t++) n += e[t];
  return n / e.length;
}
function Tr(e) {
  const n = Ei(e);
  let t = 0;
  for (let r = 0; r < e.length; r++) t += (n - e[r]) ** 2;
  return t / e.length;
}
function fn(e, n, t = 1e3) {
  switch (e.toLowerCase()) {
    case "distinct":
      return (function (r, i) {
        const u = [],
          a = {},
          s = [];
        for (let o = 0; o < r.length; o++) {
          if (r[o] !== void 0 && r[o] !== null && r[o] !== A) {
            const c = r[o];
            if (z(c) || v(c)) a[c] === void 0 && (u.push(c), (a[c] = 1));
            else {
              let l = !1;
              for (let d = 0; d < s.length; d++) Fe(s[d], c) === !0 && (l = !0);
              l === !1 && (s.push(c), u.push(c));
            }
          }
          if (u.length >= i && i !== -1) return u;
        }
        return u;
      })(n, t);
    case "avg":
    case "mean":
      return Ei(Ze(n));
    case "min":
      return Math.min.apply(Math, Ze(n));
    case "sum":
      return (function (r) {
        let i = 0;
        for (let u = 0; u < r.length; u++) i += r[u];
        return i;
      })(Ze(n));
    case "max":
      return Math.max.apply(Math, Ze(n));
    case "stdev":
    case "stddev":
      return Math.sqrt(Tr(Ze(n)));
    case "var":
    case "variance":
      return Tr(Ze(n));
    case "count":
      return n.length;
  }
  return 0;
}
function Oe(e, n, t, r) {
  if (r.length === 1) {
    if (k(r[0])) return fn(e, r[0], -1);
    if (N(r[0])) return fn(e, r[0].toArray(), -1);
  }
  return fn(e, r, -1);
}
function bi(e, n) {
  (e.stdev = function (t, r) {
    return n(t, r, (i, u, a) => Oe("stdev", 0, 0, a));
  }),
    (e.variance = function (t, r) {
      return n(t, r, (i, u, a) => Oe("variance", 0, 0, a));
    }),
    (e.average = function (t, r) {
      return n(t, r, (i, u, a) => Oe("mean", 0, 0, a));
    }),
    (e.mean = function (t, r) {
      return n(t, r, (i, u, a) => Oe("mean", 0, 0, a));
    }),
    (e.sum = function (t, r) {
      return n(t, r, (i, u, a) => Oe("sum", 0, 0, a));
    }),
    (e.min = function (t, r) {
      return n(t, r, (i, u, a) => Oe("min", 0, 0, a));
    }),
    (e.max = function (t, r) {
      return n(t, r, (i, u, a) => Oe("max", 0, 0, a));
    }),
    (e.distinct = function (t, r) {
      return n(t, r, (i, u, a) => Oe("distinct", 0, 0, a));
    }),
    (e.count = function (t, r) {
      return n(t, r, (i, u, a) => {
        if ((D(a, 1, 1, t, r), k(a[0]) || v(a[0]))) return a[0].length;
        if (N(a[0])) return a[0].length();
        throw new f(t, h.InvalidParameter, r);
      });
    });
}
let Rn = class extends T {
    constructor(e) {
      super(),
        (this.declaredClass = "esri.arcade.Portal"),
        (this.immutable = !1),
        this.setField("url", e),
        (this.immutable = !0);
    }
  },
  _a = class extends T {
    constructor(e, n, t, r, i, u) {
      super(),
        (this.attachmentUrl = i),
        (this.declaredClass = "esri.arcade.Attachment"),
        (this.immutable = !1),
        this.setField("id", e),
        this.setField("name", n),
        this.setField("contenttype", t),
        this.setField("size", r),
        this.setField("exifinfo", u),
        (this.immutable = !0);
    }
  };
const Qn = (e) => (n, t, r) => ((r = r || 14), +e(n, t).toFixed(r)),
  Ma = (e, n) => e + n,
  Na = (e, n) => e * n,
  La = (e, n) => e / n,
  _r = (e, n, t) => Qn(Ma)(e, n, t),
  lt = (e, n, t) => Qn(Na)(e, n, t),
  Jt = (e, n, t) => Qn(La)(e, n, t),
  Zt = 360,
  Ra = 400,
  Pa = 2 * Math.PI,
  be = 3600,
  Mr = 3240,
  bt = 60,
  ze = 60,
  Nr = (180 * be) / Math.PI,
  xt = Zt * bt * ze,
  dn = 90 * be,
  et = 180 * be,
  Oa = 270 * be,
  vi = String.fromCharCode(7501),
  Ft = "??";
function yt(e) {
  if (v(e) === !1) throw new f(null, h.InvalidParameter, null);
  return e;
}
function Pn(e, n) {
  const t = 10 ** n;
  return Math.round(e * t) / t;
}
function tt(e) {
  const n =
    parseFloat(e.toString().replace(Math.trunc(e).toString(), "0")) *
    Math.sign(e);
  return e < 0
    ? { fraction: n, integer: Math.ceil(e) }
    : { fraction: n, integer: Math.floor(e) };
}
var V, y, j, On;
function nt(e, n) {
  switch (e) {
    case V.north:
      return n === "SHORT" ? "N" : "North";
    case V.east:
      return n === "SHORT" ? "E" : "East";
    case V.south:
      return n === "SHORT" ? "S" : "South";
    case V.west:
      return n === "SHORT" ? "W" : "West";
  }
}
function mn(e, n, t) {
  for (; e.length < t; ) e = n + e;
  return e;
}
function pn(e, n) {
  return e - Math.floor(e / n) * n;
}
function Dn(e) {
  switch (e) {
    case y.truncated_degrees:
    case y.decimal_degrees:
      return Zt;
    case y.radians:
      return Pa;
    case y.gradians:
      return Ra;
    case y.seconds:
      return xt;
    case y.fractional_degree_minutes:
      return bt;
    case y.fractional_minute_seconds:
      return ze;
    default:
      throw new f(null, h.LogicError, null, {
        reason: "unsupported evaluations",
      });
  }
}
function Lr(e) {
  switch (e.toUpperCase().trim()) {
    case "NORTH":
    case "NORTHAZIMUTH":
    case "NORTH AZIMUTH":
      return j.north_azimuth;
    case "POLAR":
      return j.polar;
    case "QUADRANT":
      return j.quadrant;
    case "SOUTH":
    case "SOUTHAZIMUTH":
    case "SOUTH AZIMUTH":
      return j.south_azimuth;
  }
  throw new f(null, h.LogicError, null, {
    reason: "unsupported directionType",
  });
}
function Rr(e) {
  switch (e.toUpperCase().trim()) {
    case "D":
    case "DD":
    case "DECIMALDEGREE":
    case "DECIMAL DEGREE":
    case "DEGREE":
    case "DECIMALDEGREES":
    case "DECIMAL DEGREES":
    case "DEGREES":
      return y.decimal_degrees;
    case "DMS":
    case "DEGREESMINUTESSECONDS":
    case "DEGREES MINUTES SECONDS":
      return y.degrees_minutes_seconds;
    case "R":
    case "RAD":
    case "RADS":
    case "RADIAN":
    case "RADIANS":
      return y.radians;
    case "G":
    case "GON":
    case "GONS":
    case "GRAD":
    case "GRADS":
    case "GRADIAN":
    case "GRADIANS":
      return y.gradians;
  }
  throw new f(null, h.LogicError, null, { reason: "unsupported units" });
}
(function (e) {
  (e[(e.north = 0)] = "north"),
    (e[(e.east = 1)] = "east"),
    (e[(e.south = 2)] = "south"),
    (e[(e.west = 3)] = "west");
})(V || (V = {})),
  (function (e) {
    (e[(e.decimal_degrees = 1)] = "decimal_degrees"),
      (e[(e.seconds = 2)] = "seconds"),
      (e[(e.degrees_minutes_seconds = 3)] = "degrees_minutes_seconds"),
      (e[(e.radians = 4)] = "radians"),
      (e[(e.gradians = 5)] = "gradians"),
      (e[(e.truncated_degrees = 6)] = "truncated_degrees"),
      (e[(e.fractional_degree_minutes = 7)] = "fractional_degree_minutes"),
      (e[(e.fractional_minute_seconds = 8)] = "fractional_minute_seconds");
  })(y || (y = {})),
  (function (e) {
    (e[(e.north_azimuth = 1)] = "north_azimuth"),
      (e[(e.polar = 2)] = "polar"),
      (e[(e.quadrant = 3)] = "quadrant"),
      (e[(e.south_azimuth = 4)] = "south_azimuth");
  })(j || (j = {})),
  (function (e) {
    (e[(e.meridian = 0)] = "meridian"), (e[(e.direction = 1)] = "direction");
  })(On || (On = {}));
let pt = class Ut {
    constructor(n, t, r) {
      (this.m_degrees = n), (this.m_minutes = t), (this.m_seconds = r);
    }
    getField(n) {
      switch (n) {
        case y.decimal_degrees:
        case y.truncated_degrees:
          return this.m_degrees;
        case y.fractional_degree_minutes:
          return this.m_minutes;
        case y.seconds:
        case y.fractional_minute_seconds:
          return this.m_seconds;
        default:
          throw new f(null, h.LogicError, null, {
            reason: "unexpected evaluation",
          });
      }
    }
    static secondsToDMS(n) {
      const t = tt(n).fraction;
      let r = tt(n).integer;
      const i = Math.floor(r / be);
      r -= i * be;
      const u = Math.floor(r / ze);
      return (r -= u * ze), new Ut(i, u, r + t);
    }
    static numberToDms(n) {
      const t = tt(n).fraction,
        r = tt(n).integer,
        i = lt(tt(100 * t).fraction, 100),
        u = tt(100 * t).integer;
      return new Ut(r, u, i);
    }
    format(n, t) {
      let r = Pn(this.m_seconds, t),
        i = this.m_minutes,
        u = this.m_degrees;
      if (n === y.seconds || n === y.fractional_minute_seconds)
        ze <= r && ((r -= ze), ++i),
          bt <= i && ((i = 0), ++u),
          Zt <= u && (u = 0);
      else if (n === y.fractional_degree_minutes)
        (r = 0),
          (i = 30 <= this.m_seconds ? this.m_minutes + 1 : this.m_minutes),
          (u = this.m_degrees),
          bt <= i && ((i = 0), ++u),
          Zt <= u && (u = 0);
      else if (n === y.decimal_degrees || n === y.truncated_degrees) {
        const a = Jt(this.m_seconds, be),
          s = Jt(this.m_minutes, bt);
        (u = Math.round(this.m_degrees + s + a)), (i = 0), (r = 0);
      }
      return new Ut(u, i, r);
    }
    static dmsToSeconds(n, t, r) {
      return n * be + t * ze + r;
    }
  },
  Ue = class Ne {
    constructor(n) {
      this._angle = n;
    }
    static createFromAngleAndDirection(n, t) {
      return new Ne(
        new ke(
          Ne._convertDirectionFormat(
            n.extractAngularUnits(y.seconds),
            t,
            j.north_azimuth
          )
        )
      );
    }
    getAngle(n) {
      const t = this._angle.extractAngularUnits(y.seconds);
      switch (n) {
        case j.north_azimuth:
        case j.south_azimuth:
        case j.polar:
          return new ke(Ne._convertDirectionFormat(t, j.north_azimuth, n));
        case j.quadrant: {
          const r = Ne.secondsNorthAzimuthToQuadrant(t);
          return new ke(r.angle);
        }
      }
    }
    getMeridian(n) {
      const t = this._angle.extractAngularUnits(y.seconds);
      switch (n) {
        case j.north_azimuth:
          return V.north;
        case j.south_azimuth:
          return V.south;
        case j.polar:
          return V.east;
        case j.quadrant:
          return Ne.secondsNorthAzimuthToQuadrant(t).meridian;
      }
    }
    getDirection(n) {
      const t = this._angle.extractAngularUnits(y.seconds);
      switch (n) {
        case j.north_azimuth:
          return V.east;
        case j.south_azimuth:
          return V.west;
        case j.polar:
          return V.north;
        case j.quadrant:
          return Ne.secondsNorthAzimuthToQuadrant(t).direction;
      }
    }
    static secondsNorthAzimuthToQuadrant(n) {
      const t = n <= dn || n >= Oa ? V.north : V.south,
        r = t === V.north ? Math.min(xt - n, n) : Math.abs(n - et),
        i = n > et ? V.west : V.east;
      return new (class {
        constructor(u, a, s) {
          (this.meridian = u), (this.angle = a), (this.direction = s);
        }
        fetchAzimuth(u) {
          return u === On.meridian ? this.meridian : this.direction;
        }
      })(t, r, i);
    }
    static createFromAngleMeridianAndDirection(n, t, r) {
      return new Ne(
        new ke(
          Ne.secondsQuadrantToNorthAzimuth(
            n.extractAngularUnits(y.seconds),
            t,
            r
          )
        )
      );
    }
    static secondsQuadrantToNorthAzimuth(n, t, r) {
      return t === V.north
        ? r === V.east
          ? n
          : xt - n
        : r === V.east
        ? et - n
        : et + n;
    }
    static _convertDirectionFormat(n, t, r) {
      let i = 0;
      switch (t) {
        case j.north_azimuth:
          i = n;
          break;
        case j.polar:
          i = dn - n;
          break;
        case j.quadrant:
          throw new f(null, h.LogicError, null, {
            reason: "unexpected evaluation",
          });
        case j.south_azimuth:
          i = n + et;
      }
      let u = 0;
      switch (r) {
        case j.north_azimuth:
          u = i;
          break;
        case j.polar:
          u = dn - i;
          break;
        case j.quadrant:
          throw new f(null, h.LogicError, null, {
            reason: "unexpected evaluation",
          });
        case j.south_azimuth:
          u = i - et;
      }
      return (
        (u = (function (a, s) {
          return a % s;
        })(u, xt)),
        u < 0 ? xt + u : u
      );
    }
  };
function Pr(e, n, t) {
  let r = null;
  switch (n) {
    case y.decimal_degrees:
      r = lt(e, be);
      break;
    case y.seconds:
      r = e;
      break;
    case y.gradians:
      r = lt(e, Mr);
      break;
    case y.radians:
      r = lt(e, Nr);
      break;
    default:
      throw new f(null, h.LogicError, null, {
        reason: "unexpected evaluation",
      });
  }
  switch (t) {
    case y.decimal_degrees:
      return Jt(r, be);
    case y.seconds:
      return r;
    case y.gradians:
      return Jt(r, Mr);
    case y.radians:
      return r / Nr;
    default:
      throw new f(null, h.LogicError, null, {
        reason: "unexpected evaluation",
      });
  }
}
let ke = class Un {
  constructor(n) {
    this._seconds = n;
  }
  static createFromAngleAndUnits(n, t) {
    return new Un(Pr(n, t, y.seconds));
  }
  extractAngularUnits(n) {
    return Pr(this._seconds, y.seconds, Tt(n));
  }
  static createFromDegreesMinutesSeconds(n, t, r) {
    return new Un(_r(_r(lt(n, be), lt(t, ze)), r));
  }
};
function Tt(e) {
  switch ((ii(e), e)) {
    case y.decimal_degrees:
    case y.truncated_degrees:
    case y.degrees_minutes_seconds:
      return y.decimal_degrees;
    case y.gradians:
      return y.gradians;
    case y.fractional_degree_minutes:
      return y.fractional_degree_minutes;
    case y.radians:
      return y.radians;
    case y.seconds:
    case y.fractional_minute_seconds:
      return y.seconds;
  }
}
let Ua = class Si {
  constructor(n, t, r, i) {
    (this.view = n),
      (this.angle = t),
      (this.merdian = r),
      (this.direction = i),
      (this._dms = null),
      (this._formattedDms = null);
  }
  static createFromStringAndBearing(n, t, r) {
    return new Si(n, t.getAngle(r), t.getMeridian(r), t.getDirection(r));
  }
  fetchAngle() {
    return this.angle;
  }
  fetchMeridian() {
    return this.merdian;
  }
  fetchDirection() {
    return this.direction;
  }
  fetchView() {
    return this.view;
  }
  fetchDms() {
    return this._dms === null && this._calculateDms(), this._dms;
  }
  fetchFormattedDms() {
    return (
      this._formattedDms === null && this._calculateDms(), this._formattedDms
    );
  }
  _calculateDms() {
    let n = null,
      t = y.truncated_degrees,
      r = 0;
    for (let i = 0; i < this.view.length; i++) {
      const u = this.view[i];
      switch (u) {
        case "m":
          (n = Gn(this.view, i, u)),
            (t = t === y.truncated_degrees ? y.fractional_degree_minutes : t),
            (i = n.newpos);
          continue;
        case "s":
          (n = Gn(this.view, i, u)),
            (t = y.fractional_minute_seconds),
            (r = r < n.rounding ? n.rounding : r),
            (i = n.newpos);
          continue;
        default:
          continue;
      }
    }
    (this._dms = pt.secondsToDMS(this.angle.extractAngularUnits(y.seconds))),
      (this._formattedDms = pt
        .secondsToDMS(this.angle.extractAngularUnits(y.seconds))
        .format(t, r));
  }
};
function Ga(e, n, t, r, i) {
  let u = null;
  switch (n) {
    case y.decimal_degrees:
    case y.radians:
    case y.gradians:
      return (
        (u = pn(Pn(e.extractAngularUnits(n), r), Dn(n))),
        mn(u.toFixed(r), "0", t + r + (r > 0 ? 1 : 0))
      );
    case y.truncated_degrees:
    case y.fractional_degree_minutes:
      return (
        (u = pn(i.fetchFormattedDms().getField(n), Dn(n))),
        mn(u.toFixed(r), "0", t + r + (r > 0 ? 1 : 0))
      );
    case y.fractional_minute_seconds:
      return (
        (u = pn(Pn(i.fetchDms().getField(n), r), Dn(n))),
        mn(u.toFixed(r), "0", t + r + (r > 0 ? 1 : 0))
      );
    default:
      throw new f(null, h.LogicError, null, {
        reason: "unexpected evaluation",
      });
  }
}
function Or(e) {
  switch (e.toUpperCase().trim()) {
    case "N":
    case "NORTH":
      return V.north;
    case "E":
    case "EAST":
      return V.east;
    case "S":
    case "SOUTH":
      return V.south;
    case "W":
    case "WEST":
      return V.west;
  }
  return null;
}
function rt(e) {
  const n = parseFloat(e);
  if (z(n)) {
    if (isNaN(n))
      throw new f(null, h.LogicError, null, { reason: "invalid conversion" });
    return n;
  }
  throw new f(null, h.LogicError, null, { reason: "invalid conversion" });
}
function gn(e, n, t) {
  const r = t === j.quadrant;
  let i = null,
    u = null,
    a = 0,
    s = 0,
    o = 0;
  if (r) {
    if (e.length < 2)
      throw new f(null, h.LogicError, null, { reason: "conversion error" });
    o = 1;
    const c = (function (l) {
      switch (m(l)) {
        case 1:
          return { first: V.north, second: V.east };
        case 2:
          return { first: V.south, second: V.east };
        case 3:
          return { first: V.south, second: V.west };
        case 4:
          return { first: V.north, second: V.west };
      }
      return null;
    })(E(e[e.length - 1]));
    if (
      (c
        ? ((i = c.first), (u = c.second))
        : ((a = 1), (i = Or(E(e[0]))), (u = Or(E(e[e.length - 1])))),
      i === null || u === null)
    )
      throw new f(null, h.LogicError, null, { reason: "invalid conversion" });
  }
  switch (n) {
    case y.decimal_degrees:
    case y.radians:
    case y.gradians:
      if (e.length === 0)
        throw new f(null, h.LogicError, null, { reason: "invalid conversion" });
      return r
        ? Ue.createFromAngleMeridianAndDirection(
            ke.createFromAngleAndUnits(rt(e[a]), Tt(n)),
            i,
            u
          )
        : Ue.createFromAngleAndDirection(
            ke.createFromAngleAndUnits(rt(e[a]), Tt(n)),
            t
          );
    case y.degrees_minutes_seconds:
      if (((s = e.length - o - a), s === 3)) {
        const c = ke.createFromDegreesMinutesSeconds(
          rt(e[a]),
          rt(e[a + 1]),
          rt(e[a + 2])
        );
        return r
          ? Ue.createFromAngleMeridianAndDirection(c, i, u)
          : Ue.createFromAngleAndDirection(c, t);
      }
      if (s === 1) {
        const c = rt(e[a]),
          l = pt.numberToDms(c),
          d = ke.createFromDegreesMinutesSeconds(
            l.m_degrees,
            l.m_minutes,
            l.m_seconds
          );
        return r
          ? Ue.createFromAngleMeridianAndDirection(d, i, u)
          : Ue.createFromAngleAndDirection(d, t);
      }
  }
  throw new f(null, h.LogicError, null, { reason: "invalid conversion" });
}
function za(e, n, t) {
  if (z(e))
    return (function (r, i, u) {
      if (u === j.quadrant)
        throw new f(null, h.LogicError, null, { reason: "conversion error" });
      if (i === y.degrees_minutes_seconds) {
        const a = pt.numberToDms(r);
        return Ue.createFromAngleAndDirection(
          ke.createFromDegreesMinutesSeconds(
            a.m_degrees,
            a.m_minutes,
            a.m_seconds
          ),
          u
        );
      }
      return Ue.createFromAngleAndDirection(
        ke.createFromAngleAndUnits(r, Tt(i)),
        u
      );
    })(m(e), n, t);
  if (v(e))
    return gn(
      (function (r) {
        const i = [
          " ",
          "-",
          "/",
          "'",
          '"',
          "\\",
          "^",
          Ft,
          vi,
          "	",
          "\r",
          `
`,
          "*",
        ];
        let u = "";
        for (let a = 0; a < r.length; a++) {
          const s = r.charAt(a);
          i.includes(s) ? (u += "RRSPLITRRSPLITRR") : (u += s);
        }
        return u.split("RRSPLITRRSPLITRR").filter((a) => a !== "");
      })(e),
      n,
      t
    );
  if (k(e)) return gn(e, n, t);
  if (N(e)) return gn(e.toArray(), n, t);
  throw new f(null, h.LogicError, null, { reason: "conversion error" });
}
function Gn(e, n, t) {
  const r = { padding: 0, rounding: 0, newpos: n };
  let i = !1;
  for (; n < e.length; ) {
    const u = e[n];
    if (u === t) i ? r.rounding++ : r.padding++, n++;
    else {
      if (u !== ".") break;
      (i = !0), n++;
    }
  }
  return (r.newpos = n - 1), r;
}
function ja(e, n, t) {
  const r = { escaped: "", newpos: n };
  for (n++; n < e.length; ) {
    const i = e[n];
    if ((n++, i === "]")) break;
    r.escaped += i;
  }
  return (r.newpos = n - 1), r;
}
function qa(e, n, t) {
  if (!(n instanceof T)) throw new f(null, h.InvalidParameter, null);
  if (n.hasField("directionType") === !1)
    throw new f(null, h.LogicError, null, { reason: "missing directionType" });
  if (n.hasField("angleType") === !1)
    throw new f(null, h.LogicError, null, { reason: "missing angleType" });
  const r = Lr(yt(n.field("directiontype"))),
    i = za(e, Rr(yt(n.field("angletype"))), r);
  if (!(t instanceof T)) throw new f(null, h.InvalidParameter, null);
  if (t.hasField("directionType") === !1)
    throw new f(null, h.LogicError, null, { reason: "missing directionType" });
  if (t.hasField("outputType") === !1)
    throw new f(null, h.LogicError, null, { reason: "missing angleType" });
  const u = Lr(yt(t.field("directiontype"))),
    a = t.hasField("angleType") ? Rr(yt(t.field("angletype"))) : null,
    s = yt(t.field("outputType")).toUpperCase().trim();
  if (!u || !s)
    throw new f(null, h.LogicError, null, { reason: "conversion error" });
  if (!(a || (s === "TEXT" && t.hasField("format"))))
    throw new f(null, h.LogicError, null, { reason: "invalid unit" });
  switch (s) {
    case "VALUE":
      return u === j.quadrant || a === y.degrees_minutes_seconds
        ? (function (o, c, l) {
            const d = o.getAngle(c);
            if (c === j.quadrant && l === y.degrees_minutes_seconds) {
              const p = pt.secondsToDMS(d.extractAngularUnits(y.seconds));
              return [
                nt(o.getMeridian(c), "SHORT"),
                p.m_degrees,
                p.m_minutes,
                p.m_seconds,
                nt(o.getDirection(c), "SHORT"),
              ];
            }
            if (l === y.degrees_minutes_seconds) {
              const p = pt.secondsToDMS(d.extractAngularUnits(y.seconds));
              return [p.m_degrees, p.m_minutes, p.m_seconds];
            }
            return c === j.quadrant
              ? [
                  nt(o.getMeridian(c), "SHORT"),
                  d.extractAngularUnits(l),
                  nt(o.getDirection(c), "SHORT"),
                ]
              : [d.extractAngularUnits(l)];
          })(i, u, a)
        : (function (o, c, l) {
            const d = Tt(l);
            if (d && l !== y.degrees_minutes_seconds)
              return o.getAngle(c).extractAngularUnits(d);
            throw new f(null, h.LogicError, null, {
              reason: "conversion error",
            });
          })(i, u, a);
    case "TEXT": {
      let o = "";
      return (
        t.hasField("format") && (o = E(t.field("format"))),
        (o !== null && o !== "") ||
          (o = (function (c, l) {
            let d = "";
            switch (c) {
              case y.decimal_degrees:
                d = l === j.quadrant ? "DD.DD" + Ft : "DDD.DD" + Ft;
                break;
              case y.degrees_minutes_seconds:
                d =
                  l === j.quadrant
                    ? "dd" + Ft + ` mm' ss"`
                    : "ddd" + Ft + ` mm' ss.ss"`;
                break;
              case y.radians:
                d = "R.RR";
                break;
              case y.gradians:
                d = "GGG.GG" + vi;
                break;
              default:
                throw new f(null, h.LogicError, null, {
                  reason: "conversion error",
                });
            }
            return l === j.quadrant && (d = "p " + d + " b"), d;
          })(a, u)),
        (function (c, l, d) {
          let p = "",
            g = null,
            F = null;
          const w = Ua.createFromStringAndBearing(l, c, d),
            O = {
              D: y.decimal_degrees,
              d: y.truncated_degrees,
              m: y.fractional_degree_minutes,
              s: y.fractional_minute_seconds,
              R: y.radians,
              G: y.gradians,
            };
          for (let K = 0; K < l.length; K++) {
            const re = l[K];
            switch (re) {
              case "[":
                (g = ja(l, K)), (p += g.escaped), (K = g.newpos);
                continue;
              case "D":
              case "d":
              case "m":
              case "s":
              case "R":
              case "G":
                (g = Gn(l, K, re)),
                  (F = c.getAngle(d)),
                  (p += Ga(F, O[re], g.padding, g.rounding, w)),
                  (K = g.newpos);
                continue;
              case "P":
              case "p":
                p += nt(w.fetchMeridian(), re === "p" ? "SHORT" : "LONG");
                continue;
              case "B":
              case "b":
                p += nt(w.fetchDirection(), re === "b" ? "SHORT" : "LONG");
                continue;
              default:
                p += re;
            }
          }
          return p;
        })(i, o, u)
      );
    }
    default:
      throw new f(null, h.InvalidParameter, null);
  }
}
const it = 2654435761,
  at = 2246822519,
  Rt = 3266489917,
  Ur = 668265263,
  Gr = 374761393;
function zr(e) {
  const n = [];
  for (let t = 0, r = e.length; t < r; t++) {
    let i = e.charCodeAt(t);
    i < 128
      ? n.push(i)
      : i < 2048
      ? n.push(192 | (i >> 6), 128 | (63 & i))
      : i < 55296 || i >= 57344
      ? n.push(224 | (i >> 12), 128 | ((i >> 6) & 63), 128 | (63 & i))
      : (t++,
        (i = 65536 + (((1023 & i) << 10) | (1023 & e.charCodeAt(t)))),
        n.push(
          240 | (i >> 18),
          128 | ((i >> 12) & 63),
          128 | ((i >> 6) & 63),
          128 | (63 & i)
        ));
  }
  return new Uint8Array(n);
}
let Ja = class {
  constructor(e) {
    (this._seed = e), (this._totallen = 0), (this._bufs = []), this.init();
  }
  init() {
    return (this._bufs = []), (this._totallen = 0), this;
  }
  updateFloatArray(e) {
    const n = [];
    for (const t of e)
      isNaN(t)
        ? n.push("NaN")
        : t === 1 / 0
        ? n.push("Infinity")
        : t === -1 / 0
        ? n.push("-Infinity")
        : t === 0
        ? n.push("0")
        : n.push(t.toString(16));
    this.update(zr(n.join("")));
  }
  updateIntArray(e) {
    const n = Int32Array.from(e);
    this.update(new Uint8Array(n.buffer));
  }
  updateUint8Array(e) {
    this.update(Uint8Array.from(e));
  }
  updateWithString(e) {
    return this.update(zr(e));
  }
  update(e) {
    return this._bufs.push(e), (this._totallen += e.length), this;
  }
  digest() {
    const e = new Uint8Array(this._totallen);
    let n = 0;
    for (const t of this._bufs) e.set(t, n), (n += t.length);
    return this.init(), this._xxHash32(e, this._seed);
  }
  _xxHash32(e, n = 0) {
    const t = e;
    let r = (n + Gr) & 4294967295,
      i = 0;
    if (t.length >= 16) {
      const a = [
          (n + it + at) & 4294967295,
          (n + at) & 4294967295,
          (n + 0) & 4294967295,
          (n - it) & 4294967295,
        ],
        s = e,
        o = s.length - 16;
      let c = 0;
      for (i = 0; (4294967280 & i) <= o; i += 4) {
        const l = i,
          d = s[l + 0] + (s[l + 1] << 8),
          p = s[l + 2] + (s[l + 3] << 8),
          g = d * at + ((p * at) << 16);
        let F = (a[c] + g) & 4294967295;
        F = (F << 13) | (F >>> 19);
        const w = 65535 & F,
          O = F >>> 16;
        (a[c] = (w * it + ((O * it) << 16)) & 4294967295), (c = (c + 1) & 3);
      }
      r =
        (((a[0] << 1) | (a[0] >>> 31)) +
          ((a[1] << 7) | (a[1] >>> 25)) +
          ((a[2] << 12) | (a[2] >>> 20)) +
          ((a[3] << 18) | (a[3] >>> 14))) &
        4294967295;
    }
    r = (r + e.length) & 4294967295;
    const u = e.length - 4;
    for (; i <= u; i += 4) {
      const a = i,
        s = t[a + 0] + (t[a + 1] << 8),
        o = t[a + 2] + (t[a + 3] << 8);
      (r = (r + (s * Rt + ((o * Rt) << 16))) & 4294967295),
        (r = (r << 17) | (r >>> 15)),
        (r = ((65535 & r) * Ur + (((r >>> 16) * Ur) << 16)) & 4294967295);
    }
    for (; i < t.length; ++i)
      (r += t[i] * Gr),
        (r = (r << 11) | (r >>> 21)),
        (r = ((65535 & r) * it + (((r >>> 16) * it) << 16)) & 4294967295);
    return (
      (r ^= r >>> 15),
      (r = (((65535 & r) * at) & 4294967295) + (((r >>> 16) * at) << 16)),
      (r ^= r >>> 13),
      (r = (((65535 & r) * Rt) & 4294967295) + (((r >>> 16) * Rt) << 16)),
      (r ^= r >>> 16),
      r < 0 ? r + 4294967296 : r
    );
  }
};
function jr(e, n) {
  if (!e || !n) return e === n;
  if (e.x === n.x && e.y === n.y) {
    if (e.hasZ) {
      if (e.z !== n.z) return !1;
    } else if (n.hasZ) return !1;
    if (e.hasM) {
      if (e.m !== n.m) return !1;
    } else if (n.hasM) return !1;
    return !0;
  }
  return !1;
}
function ye(e, n, t) {
  if (e !== null)
    if (k(e)) {
      if ((n.updateUint8Array([61]), t.map.has(e))) {
        const r = t.map.get(e);
        n.updateIntArray([61237541 ^ r]);
      } else {
        t.map.set(e, t.currentLength++);
        for (const r of e) ye(r, n, t);
        t.map.delete(e), t.currentLength--;
      }
      n.updateUint8Array([199]);
    } else if (N(e)) {
      if ((n.updateUint8Array([61]), t.map.has(e))) {
        const r = t.map.get(e);
        n.updateIntArray([61237541 ^ r]);
      } else {
        t.map.set(e, t.currentLength++);
        for (const r of e.toArray()) ye(r, n, t);
        t.map.delete(e), t.currentLength--;
      }
      n.updateUint8Array([199]);
    } else {
      if (H(e))
        return n.updateIntArray([e.toNumber()]), void n.updateUint8Array([241]);
      if (v(e))
        return (
          n.updateIntArray([e.length]),
          n.updateWithString(e),
          void n.updateUint8Array([41])
        );
      if (G(e)) n.updateUint8Array([e === !0 ? 1 : 0, 113]);
      else {
        if (z(e))
          return n.updateFloatArray([e]), void n.updateUint8Array([173]);
        if (e instanceof _a)
          throw new f(t.context, h.UnsupportedHashType, t.node);
        if (e instanceof Rn)
          throw new f(t.context, h.UnsupportedHashType, t.node);
        if (!(e instanceof T)) {
          if (ee(e)) throw new f(t.context, h.UnsupportedHashType, t.node);
          if (e instanceof Z)
            return (
              n.updateIntArray([3833836621]),
              n.updateIntArray([0]),
              n.updateFloatArray([e.x]),
              n.updateIntArray([1]),
              n.updateFloatArray([e.y]),
              e.hasZ && (n.updateIntArray([2]), n.updateFloatArray([e.z])),
              e.hasM && (n.updateIntArray([3]), n.updateFloatArray([e.m])),
              n.updateIntArray([3765347959]),
              void ye(e.spatialReference.wkid, n, t)
            );
          if (e instanceof ue) {
            n.updateIntArray([1266616829]);
            for (let r = 0; r < e.rings.length; r++) {
              const i = e.rings[r],
                u = [];
              let a = null,
                s = null;
              for (let o = 0; o < i.length; o++) {
                const c = e.getPoint(r, o);
                if (o === 0) a = c;
                else if (jr(s, c)) continue;
                (s = c), (o === i.length - 1 && jr(a, c)) || u.push(c);
              }
              n.updateIntArray([1397116793, u.length]);
              for (let o = 0; o < u.length; o++) {
                const c = u[o];
                n.updateIntArray([3962308117, o]),
                  ye(c, n, t),
                  n.updateIntArray([2716288009]);
              }
              n.updateIntArray([2278822459]);
            }
            return (
              n.updateIntArray([3878477243]),
              void ye(e.spatialReference.wkid, n, t)
            );
          }
          if (e instanceof se) {
            n.updateIntArray([4106883559]);
            for (let r = 0; r < e.paths.length; r++) {
              const i = e.paths[r];
              n.updateIntArray([1397116793, i.length]);
              for (let u = 0; u < i.length; u++)
                n.updateIntArray([3962308117, u]),
                  ye(e.getPoint(r, u), n, t),
                  n.updateIntArray([2716288009]);
              n.updateIntArray([2278822459]);
            }
            return (
              n.updateIntArray([2568784753]),
              void ye(e.spatialReference.wkid, n, t)
            );
          }
          if (e instanceof xe) {
            n.updateIntArray([588535921, e.points.length]);
            for (let r = 0; r < e.points.length; r++) {
              const i = e.getPoint(r);
              n.updateIntArray([r]), ye(i, n, t);
            }
            return (
              n.updateIntArray([1700171621]),
              void ye(e.spatialReference.wkid, n, t)
            );
          }
          if (e instanceof de)
            return (
              n.updateIntArray([3483648373]),
              n.updateIntArray([0]),
              n.updateFloatArray([e.xmax]),
              n.updateIntArray([1]),
              n.updateFloatArray([e.xmin]),
              n.updateIntArray([2]),
              n.updateFloatArray([e.ymax]),
              n.updateIntArray([3]),
              n.updateFloatArray([e.ymin]),
              e.hasZ &&
                (n.updateIntArray([4]),
                n.updateFloatArray([e.zmax]),
                n.updateIntArray([5]),
                n.updateFloatArray([e.zmin])),
              e.hasM &&
                (n.updateIntArray([6]),
                n.updateFloatArray([e.mmax]),
                n.updateIntArray([7]),
                n.updateFloatArray([e.mmin])),
              n.updateIntArray([3622027469]),
              void ye(e.spatialReference.wkid, n, t)
            );
          if (e instanceof _t)
            return (
              n.updateIntArray([14]),
              e.wkid !== void 0 &&
                e.wkid !== null &&
                n.updateIntArray([e.wkid]),
              void (e.wkt && n.updateWithString(e.wkt))
            );
          throw $(e)
            ? new f(t.context, h.UnsupportedHashType, t.node)
            : Yt(e)
            ? new f(t.context, h.UnsupportedHashType, t.node)
            : Xt(e)
            ? new f(t.context, h.UnsupportedHashType, t.node)
            : e === A
            ? new f(t.context, h.UnsupportedHashType, t.node)
            : new f(t.context, h.UnsupportedHashType, t.node);
        }
        if ((n.updateUint8Array([223]), t.map.has(e))) {
          const r = t.map.get(e);
          n.updateIntArray([61237541 ^ r]);
        } else {
          t.map.set(e, t.currentLength++);
          for (const r of e.keys())
            n.updateIntArray([r.length]),
              n.updateWithString(r),
              n.updateUint8Array([251]),
              ye(e.field(r), n, t),
              n.updateUint8Array([239]);
          t.map.delete(e), t.currentLength--;
        }
        n.updateUint8Array([73]);
      }
    }
  else n.updateUint8Array([0, 139]);
}
function Ii(e, n) {
  (e.portal = function (t, r) {
    return n(t, r, (i, u, a) => (D(a, 1, 1, t, r), new Rn(E(a[0]))));
  }),
    (e.typeof = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        const s = Vn(a[0]);
        if (s === "Unrecognised Type") throw new f(t, h.UnrecognisedType, r);
        return s;
      });
    }),
    (e.trim = function (t, r) {
      return n(t, r, (i, u, a) => (D(a, 1, 1, t, r), E(a[0]).trim()));
    }),
    (e.tohex = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        const s = m(a[0]);
        return isNaN(s) ? s : s.toString(16);
      });
    }),
    (e.upper = function (t, r) {
      return n(t, r, (i, u, a) => (D(a, 1, 1, t, r), E(a[0]).toUpperCase()));
    }),
    (e.proper = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 2, t, r);
        let s = 1;
        a.length === 2 && E(a[1]).toLowerCase() === "firstword" && (s = 2);
        const o = /\s/,
          c = E(a[0]);
        let l = "",
          d = !0;
        for (let p = 0; p < c.length; p++) {
          let g = c[p];
          o.test(g)
            ? s === 1 && (d = !0)
            : g.toUpperCase() !== g.toLowerCase() &&
              (d ? ((g = g.toUpperCase()), (d = !1)) : (g = g.toLowerCase())),
            (l += g);
        }
        return l;
      });
    }),
    (e.lower = function (t, r) {
      return n(t, r, (i, u, a) => (D(a, 1, 1, t, r), E(a[0]).toLowerCase()));
    }),
    (e.guid = function (t, r) {
      return n(t, r, (i, u, a) => {
        if ((D(a, 0, 1, t, r), a.length > 0))
          switch (E(a[0]).toLowerCase()) {
            case "digits":
              return ut()
                .replace("-", "")
                .replace("-", "")
                .replace("-", "")
                .replace("-", "");
            case "digits-hyphen":
              return ut();
            case "digits-hyphen-braces":
              return "{" + ut() + "}";
            case "digits-hyphen-parentheses":
              return "(" + ut() + ")";
          }
        return "{" + ut() + "}";
      });
    }),
    (e.standardizeguid = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 2, 2, t, r);
        let s = E(a[0]);
        if (s === "" || s === null) return "";
        const o =
          /^(\{|\()?(?<partA>[0-9a-z]{8})(\-?)(?<partB>[0-9a-z]{4})(\-?)(?<partC>[0-9a-z]{4})(\-?)(?<partD>[0-9a-z]{4})(\-?)(?<partE>[0-9a-z]{12})(\}|\))?$/gim.exec(
            s
          );
        if (!o) return "";
        const c = o.groups;
        switch (
          ((s =
            c.partA +
            "-" +
            c.partB +
            "-" +
            c.partC +
            "-" +
            c.partD +
            "-" +
            c.partE),
          E(a[1]).toLowerCase())
        ) {
          case "digits":
            return s
              .replace("-", "")
              .replace("-", "")
              .replace("-", "")
              .replace("-", "");
          case "digits-hyphen":
            return s;
          case "digits-hyphen-braces":
            return "{" + s + "}";
          case "digits-hyphen-parentheses":
            return "(" + s + ")";
        }
        return "{" + s + "}";
      });
    }),
    (e.console = function (t, r) {
      return n(
        t,
        r,
        (i, u, a) => (
          a.length === 0 ||
            (a.length === 1 ? t.console(E(a[0])) : t.console(E(a))),
          A
        )
      );
    }),
    (e.mid = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 2, 3, t, r);
        let s = m(a[1]);
        if (isNaN(s)) return "";
        if ((s < 0 && (s = 0), a.length === 2)) return E(a[0]).substr(s);
        let o = m(a[2]);
        return isNaN(o) ? "" : (o < 0 && (o = 0), E(a[0]).substr(s, o));
      });
    }),
    (e.find = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 2, 3, t, r);
        let s = 0;
        if (a.length > 2) {
          if (((s = m(_(a[2], 0))), isNaN(s))) return -1;
          s < 0 && (s = 0);
        }
        return E(a[1]).indexOf(E(a[0]), s);
      });
    }),
    (e.left = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 2, 2, t, r);
        let s = m(a[1]);
        return isNaN(s) ? "" : (s < 0 && (s = 0), E(a[0]).substr(0, s));
      });
    }),
    (e.right = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 2, 2, t, r);
        let s = m(a[1]);
        return isNaN(s) ? "" : (s < 0 && (s = 0), E(a[0]).substr(-1 * s, s));
      });
    }),
    (e.split = function (t, r) {
      return n(t, r, (i, u, a) => {
        let s;
        D(a, 2, 4, t, r);
        let o = m(_(a[2], -1));
        const c = dt(_(a[3], !1));
        if (
          (o === -1 || o === null || c === !0
            ? (s = E(a[0]).split(E(a[1])))
            : (isNaN(o) && (o = -1),
              o < -1 && (o = -1),
              (s = E(a[0]).split(E(a[1]), o))),
          c === !1)
        )
          return s;
        const l = [];
        for (let d = 0; d < s.length && !(o !== -1 && l.length >= o); d++)
          s[d] !== "" && s[d] !== void 0 && l.push(s[d]);
        return l;
      });
    }),
    (e.text = function (t, r) {
      return n(t, r, (i, u, a) => (D(a, 1, 2, t, r), ge(a[0], a[1])));
    }),
    (e.concatenate = function (t, r) {
      return n(t, r, (i, u, a) => {
        const s = [];
        if (a.length < 1) return "";
        if (k(a[0])) {
          const o = _(a[2], "");
          for (let c = 0; c < a[0].length; c++) s[c] = ge(a[0][c], o);
          return a.length > 1 ? s.join(a[1]) : s.join("");
        }
        if (N(a[0])) {
          const o = _(a[2], "");
          for (let c = 0; c < a[0].length(); c++) s[c] = ge(a[0].get(c), o);
          return a.length > 1 ? s.join(a[1]) : s.join("");
        }
        for (let o = 0; o < a.length; o++) s[o] = ge(a[o]);
        return s.join("");
      });
    }),
    (e.reverse = function (t, r) {
      return n(t, r, (i, u, a) => {
        if ((D(a, 1, 1, t, r), k(a[0]))) {
          const s = a[0].slice(0);
          return s.reverse(), s;
        }
        if (N(a[0])) {
          const s = a[0].toArray().slice(0);
          return s.reverse(), s;
        }
        throw new f(t, h.InvalidParameter, r);
      });
    }),
    (e.replace = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 3, 4, t, r);
        const s = E(a[0]),
          o = E(a[1]),
          c = E(a[2]);
        return a.length !== 4 || dt(a[3]) ? je(s, o, c) : s.replace(o, c);
      });
    }),
    (e.schema = function (t, r) {
      return n(t, r, (i, u, a) => {
        if (ee(a[0])) {
          const s = Di(a[0]);
          return s ? T.convertObjectToArcadeDictionary(s, P(t)) : null;
        }
        throw new f(t, h.InvalidParameter, r);
      });
    }),
    (e.subtypes = function (t, r) {
      return n(t, r, (i, u, a) => {
        if ((D(a, 1, 1, t, r), ee(a[0]))) {
          const s = Ot(a[0]);
          return s ? T.convertObjectToArcadeDictionary(s, P(t)) : null;
        }
        throw new f(t, h.InvalidParameter, r);
      });
    }),
    (e.subtypecode = function (t, r) {
      return n(t, r, (i, u, a) => {
        if ((D(a, 1, 1, t, r), ee(a[0]))) {
          const s = Ot(a[0]);
          if (!s) return null;
          if (s.subtypeField && a[0].hasField(s.subtypeField)) {
            const o = a[0].field(s.subtypeField);
            for (const c of s.subtypes) if (c.code === o) return c.code;
            return null;
          }
          return null;
        }
        throw new f(t, h.InvalidParameter, r);
      });
    }),
    (e.subtypename = function (t, r) {
      return n(t, r, (i, u, a) => {
        if ((D(a, 1, 1, t, r), ee(a[0]))) {
          const s = Ot(a[0]);
          if (!s) return "";
          if (s.subtypeField && a[0].hasField(s.subtypeField)) {
            const o = a[0].field(s.subtypeField);
            for (const c of s.subtypes) if (c.code === o) return c.name;
            return "";
          }
          return "";
        }
        throw new f(t, h.InvalidParameter, r);
      });
    }),
    (e.gdbversion = function (t, r) {
      return n(t, r, (i, u, a) => {
        if ((D(a, 1, 1, t, r), ee(a[0]))) return a[0].gdbVersion();
        throw new f(t, h.InvalidParameter, r);
      });
    }),
    (e.domain = function (t, r) {
      return n(t, r, (i, u, a) => {
        if ((D(a, 2, 3, t, r), ee(a[0]))) {
          const s = di(a[0], E(a[1]), a[2] === void 0 ? void 0 : m(a[2]));
          return s && s.domain
            ? s.domain.type === "coded-value" || s.domain.type === "codedValue"
              ? T.convertObjectToArcadeDictionary(
                  {
                    type: "codedValue",
                    name: s.domain.name,
                    dataType: xr[s.field.type],
                    codedValues: s.domain.codedValues.map((o) => ({
                      name: o.name,
                      code: o.code,
                    })),
                  },
                  P(t)
                )
              : T.convertObjectToArcadeDictionary(
                  {
                    type: "range",
                    name: s.domain.name,
                    dataType: xr[s.field.type],
                    min: s.domain.min,
                    max: s.domain.max,
                  },
                  P(t)
                )
            : null;
        }
        throw new f(t, h.InvalidParameter, r);
      });
    }),
    (e.domainname = function (t, r) {
      return n(t, r, (i, u, a) => {
        if ((D(a, 2, 4, t, r), ee(a[0])))
          return mi(a[0], E(a[1]), a[2], a[3] === void 0 ? void 0 : m(a[3]));
        throw new f(t, h.InvalidParameter, r);
      });
    }),
    (e.domaincode = function (t, r) {
      return n(t, r, (i, u, a) => {
        if ((D(a, 2, 4, t, r), ee(a[0])))
          return pi(a[0], E(a[1]), a[2], a[3] === void 0 ? void 0 : m(a[3]));
        throw new f(t, h.InvalidParameter, r);
      });
    }),
    (e.urlencode = function (t, r) {
      return n(t, r, (i, u, a) => {
        if ((D(a, 1, 1, t, r), a[0] === null)) return "";
        if (a[0] instanceof T) {
          let s = "";
          for (const o of a[0].keys()) {
            const c = a[0].field(o);
            s !== "" && (s += "&"),
              (s +=
                c === null
                  ? encodeURIComponent(o) + "="
                  : encodeURIComponent(o) + "=" + encodeURIComponent(c));
          }
          return s;
        }
        return encodeURIComponent(E(a[0]));
      });
    }),
    (e.hash = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 1, t, r);
        const s = new Ja(0);
        return (
          ye(a[0], s, {
            context: t,
            node: r,
            map: new Map(),
            currentLength: 0,
          }),
          s.digest()
        );
      });
    }),
    (e.convertdirection = function (t, r) {
      return n(t, r, (i, u, a) => (D(a, 3, 3, t, r), qa(a[0], a[1], a[2])));
    }),
    (e.fromjson = function (t, r) {
      return n(t, r, (i, u, a) => {
        if ((D(a, 1, 1, t, r), v(a[0]) === !1))
          throw new f(t, h.InvalidParameter, r);
        return T.convertJsonToArcade(JSON.parse(E(a[0])), P(t));
      });
    }),
    (e.expects = function (t, r) {
      return n(t, r, (i, u, a) => {
        if (a.length < 1) throw new f(t, h.WrongNumberOfParameters, r);
        return A;
      });
    }),
    (e.tocharcode = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 2, t, r);
        const s = m(_(a[1], 0)),
          o = E(a[0]);
        if (o.length === 0 && a.length === 1) return null;
        if (o.length <= s || s < 0) throw new f(t, h.OutOfBounds, r);
        return o.charCodeAt(s);
      });
    }),
    (e.tocodepoint = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 1, 2, t, r);
        const s = m(_(a[1], 0)),
          o = E(a[0]);
        if (o.length === 0 && a.length === 1) return null;
        if (o.length <= s || s < 0) throw new f(t, h.OutOfBounds, r);
        return o.codePointAt(s);
      });
    }),
    (e.fromcharcode = function (t, r) {
      return n(t, r, (i, u, a) => {
        if (a.length < 1) throw new f(t, h.WrongNumberOfParameters, r);
        const s = a
          .map((o) => Math.trunc(m(o)))
          .filter((o) => o >= 0 && o <= 65535);
        return s.length === 0 ? null : String.fromCharCode.apply(null, s);
      });
    }),
    (e.fromcodepoint = function (t, r) {
      return n(t, r, (i, u, a) => {
        if (a.length < 1) throw new f(t, h.WrongNumberOfParameters, r);
        let s;
        try {
          s = a
            .map((o) => Math.trunc(m(o)))
            .filter((o) => o <= 1114111 && o >>> 0 === o);
        } catch {
          return null;
        }
        return s.length === 0 ? null : String.fromCodePoint.apply(null, s);
      });
    }),
    (e.getuser = function (t, r) {
      return n(t, r, (i, u, a) => {
        D(a, 0, 2, t, r);
        let s = _(a[1], "");
        if (((s = s === !0 || s === !1 ? "" : E(s)), s !== null && s !== ""))
          return null;
        if (a.length === 0 || a[0] instanceof Rn) {
          let o = null;
          if (
            (t.services && t.services.portal && (o = t.services.portal),
            (a.length > 0 &&
              !(function (c, l) {
                return !!c && ha(c, (l == null ? void 0 : l.restUrl) || "");
              })(a[0].field("url"), o)) ||
              !o)
          )
            return null;
          if (s === "") {
            const c = (function (l) {
              return l.loadStatus === "loaded" && l.user && l.user.sourceJSON
                ? l.user.sourceJSON
                : null;
            })(o);
            if (c) {
              const l = JSON.parse(JSON.stringify(c));
              for (const d of ["lastLogin", "created", "modified"])
                l[d] !== void 0 && l[d] !== null && (l[d] = new Date(l[d]));
              return T.convertObjectToArcadeDictionary(l, P(t));
            }
          }
          return null;
        }
        throw new f(t, h.InvalidParameter, r);
      });
    });
}
let rn = class {
  constructor(e, n) {
    (this._moduleSingletons = e), (this._syntaxModules = n);
  }
  loadLibrary(e) {
    if (this._syntaxModules == null) return null;
    const n = this._syntaxModules[e.toLowerCase()];
    return n ? { syntax: n.script, uri: n.uri } : null;
  }
};
function we(e, n, t) {
  try {
    return t(e, null, n.arguments);
  } catch (r) {
    throw r;
  }
}
function S(e, n) {
  try {
    switch (n.type) {
      case "EmptyStatement":
        return "lc.voidOperation";
      case "VariableDeclarator":
        return (function (t, r) {
          let i = r.init === null ? null : S(t, r.init);
          i === A && (i = null);
          const u = r.id.name.toLowerCase();
          if ((De(u), t.localScope !== null)) {
            if (t.localScope[u] !== void 0)
              return "lscope['" + u + "']=" + i + "; ";
            if (t.localScope._SymbolsMap[u] !== void 0)
              return (
                "lscope['" + t.localScope._SymbolsMap[u] + "']=" + i + "; "
              );
            {
              const s = Ae(t);
              return (
                (t.localScope._SymbolsMap[u] = s),
                (t.mangleMap[u] = s),
                "lscope['" + s + "']=" + i + "; "
              );
            }
          }
          if (t.globalScope[u] !== void 0)
            return "gscope['" + u + "']=" + i + "; ";
          if (t.globalScope._SymbolsMap[u] !== void 0)
            return "gscope['" + t.globalScope._SymbolsMap[u] + "']=" + i + "; ";
          if (t.undeclaredGlobalsInFunctions.has(u)) {
            const s = t.undeclaredGlobalsInFunctions.get(u).manglename;
            return (
              (t.globalScope._SymbolsMap[u] = s),
              (t.mangleMap[u] = s),
              t.undeclaredGlobalsInFunctions.delete(u),
              "gscope[lang.setAssig('" + s + "', runtimeCtx)]=" + i + "; "
            );
          }
          const a = Ae(t);
          return (
            (t.globalScope._SymbolsMap[u] = a),
            (t.mangleMap[u] = a),
            "gscope['" + a + "']=" + i + "; "
          );
        })(e, n);
      case "VariableDeclaration":
        return (function (t, r) {
          const i = [];
          for (let u = 0; u < r.declarations.length; u++)
            i.push(S(t, r.declarations[u]));
          return (
            i.join(`
`) +
            ` 
 lastStatement=  lc.voidOperation; 
`
          );
        })(e, n);
      case "BlockStatement":
      case "Program":
        return yn(e, n);
      case "FunctionDeclaration":
        return (function (t, r) {
          const i = r.id.name.toLowerCase();
          De(i);
          let u = "",
            a = !1;
          t.globalScope[i] !== void 0
            ? (u = i)
            : t.globalScope._SymbolsMap[i] !== void 0
            ? (u = t.globalScope._SymbolsMap[i])
            : t.undeclaredGlobalsInFunctions.has(i)
            ? ((u = t.undeclaredGlobalsInFunctions.get(i).manglename),
              (t.globalScope._SymbolsMap[i] = u),
              (t.mangleMap[i] = u),
              t.undeclaredGlobalsInFunctions.delete(i),
              (a = !0))
            : ((u = Ae(t)),
              (t.globalScope._SymbolsMap[i] = u),
              (t.mangleMap[i] = u));
          const s = {
            isAsync: t.isAsync,
            console: t.console,
            exports: t.exports,
            undeclaredGlobalsInFunctions: t.undeclaredGlobalsInFunctions,
            customfunctions: t.customfunctions,
            moduleFactory: t.moduleFactory,
            moduleFactoryMap: t.moduleFactoryMap,
            libraryResolver: t.libraryResolver,
            lrucache: t.lrucache,
            interceptor: t.interceptor,
            services: t.services,
            symbols: t.symbols,
            mangleMap: t.mangleMap,
            localScope: { _SymbolsMap: {} },
            depthCounter: t.depthCounter,
            globalScope: t.globalScope,
          };
          let o = `new lang.UserDefinedCompiledFunction( lang.functionDepthchecker(function() { var lastStatement = lc.voidOperation; 
   var lscope = runtimeCtx.localStack[runtimeCtx.localStack.length-1];
`;
          for (let c = 0; c < r.params.length; c++) {
            const l = r.params[c].name.toLowerCase();
            De(l);
            const d = Ae(t);
            (s.localScope._SymbolsMap[l] = d),
              (s.mangleMap[l] = d),
              (o +=
                "lscope['" +
                d +
                "']=arguments[" +
                c.toString() +
                `];
`);
          }
          return (
            t.isAsync === !0
              ? ((o += `return lang.__awaiter(this, void 0, void 0, function* () {
`),
                (o +=
                  yn(s, r.body) +
                  `
 return lastStatement; `),
                (o += "});  }"),
                (o += ", runtimeCtx)," + r.params.length + ")"),
                (o += `
 lastStatement = lc.voidOperation; 
`))
              : ((o +=
                  yn(s, r.body) +
                  `
 return lastStatement; }, runtimeCtx),` +
                  r.params.length +
                  ")"),
                (o += `
 lastStatement = lc.voidOperation; 
`)),
            a
              ? "gscope[lang.setAssig('" + u + "', runtimeCtx)]=" + o
              : "gscope['" + u + "']=" + o
          );
        })(e, n);
      case "ImportDeclaration":
        return (function (t, r) {
          var c;
          const i = r.specifiers[0].local.name.toLowerCase();
          De(i);
          const u = (c = t.libraryResolver) == null ? void 0 : c.loadLibrary(i),
            a = Ae(t);
          t.moduleFactory[u.uri] === void 0 &&
            (t.moduleFactory[u.uri] = (function (l, d, p = !1) {
              const g = {
                isAsync: p,
                moduleFactory: d.moduleFactory,
                moduleFactoryMap: {},
                libraryResolver: new rn(null, l.loadedModules),
                globalScope: Bi(d.vars, p ? Dt : ne, d.customfunctions),
                customfunctions: d.customfunctions,
                localScope: null,
                mangleMap: {},
                undeclaredGlobalsInFunctions: new Map(),
                depthCounter: { depth: 1 },
                exports: {},
                console: Vt,
                lrucache: d.lrucache,
                timeReference: d.timeReference ?? null,
                interceptor: d.interceptor,
                services: d.services,
                symbols: { symbolCounter: 0 },
              };
              let F = S(g, l);
              F === "" && (F = "lc.voidOperation; ");
              let w = "";
              w = p
                ? `var runtimeCtx=this.prepare(context, true);
 var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; 
return lang.__awaiter(this, void 0, void 0, function* () {

 function mainBody() {
 var lastStatement=lc.voidOperation;
 return lang.__awaiter(this, void 0, void 0, function* () {
` +
                  F +
                  `
 return lastStatement; }); } 
 yield mainBody(); 
 return this.prepareModule(runtimeCtx); }); `
                : `var runtimeCtx=this.prepare(context, false);
 var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; 
 function mainBody() {
 var lastStatement=lc.voidOperation;
 ` +
                  F +
                  `
 return lastStatement; } 
 mainBody(); 
 return this.prepareModule(runtimeCtx); `;
              const O = g.moduleFactory,
                K = g.moduleFactoryMap,
                re = g.exports,
                ur = {};
              for (const Q in re)
                ur[Q] = g.mangleMap[Q] !== void 0 ? g.mangleMap[Q] : Q;
              const ia = {
                lc: gi,
                lang: _i,
                mangles: g.mangleMap,
                prepareModule: (Q) => new Ct(Q),
                prepare(Q, or) {
                  let sn = Q.spatialReference;
                  sn == null && (sn = new _t({ wkid: 102100 }));
                  const aa = Ti(Q.vars, Q.customfunctions, or, Q.timeReference);
                  return {
                    localStack: [],
                    isAsync: or,
                    exports: re,
                    exportmangle: ur,
                    gdefs: {},
                    moduleFactory: O,
                    moduleFactoryMap: K,
                    moduleSingletons: Q.moduleSingletons,
                    mangleMap: this.mangles,
                    spatialReference: sn,
                    globalScope: aa,
                    abortSignal:
                      Q.abortSignal === void 0 || Q.abortSignal === null
                        ? { aborted: !1 }
                        : Q.abortSignal,
                    localScope: null,
                    services: Q.services,
                    console: Q.console ? Q.console : Vt,
                    lrucache: Q.lrucache,
                    timeReference: Q.timeReference ?? null,
                    interceptor: Q.interceptor,
                    symbols: { symbolCounter: 0 },
                    depthCounter: Q.depthCounter,
                  };
                },
              };
              return new Function("context", "spatialReference", w).bind(ia);
            })(
              u.syntax,
              {
                interceptor: t.interceptor,
                services: t.services,
                moduleFactory: t.moduleFactory,
                lrucache: t.lrucache,
                timeReference: t.timeReference ?? null,
                libraryResolver: t.libraryResolver,
                customfunctions: t.customfunctions,
                vars: {},
              },
              t.isAsync
            )),
            (t.moduleFactoryMap[a] = u.uri);
          let s = "";
          if (
            ((s = t.isAsync
              ? "(yield lang.loadModule('" + a + "', runtimeCtx) ); "
              : "lang.loadModule('" + a + "', runtimeCtx); "),
            t.globalScope[i] !== void 0)
          )
            return "gscope['" + i + "']=" + s;
          if (t.globalScope._SymbolsMap[i] !== void 0)
            return "gscope['" + t.globalScope._SymbolsMap[i] + "']=" + s;
          let o = "";
          return (
            t.undeclaredGlobalsInFunctions.has(i)
              ? ((o = t.undeclaredGlobalsInFunctions.get(i).manglename),
                t.undeclaredGlobalsInFunctions.delete(i))
              : (o = Ae(t)),
            (t.globalScope._SymbolsMap[i] = o),
            (t.mangleMap[i] = o),
            "gscope[lang.setAssig('" + o + "', runtimeCtx)]=" + s
          );
        })(e, n);
      case "ExportNamedDeclaration":
        return (function (t, r) {
          const i = S(t, r.declaration);
          if (r.declaration.type === "FunctionDeclaration")
            t.exports[r.declaration.id.name.toLowerCase()] = "function";
          else if (r.declaration.type === "VariableDeclaration")
            for (const u of r.declaration.declarations)
              t.exports[u.id.name.toLowerCase()] = "variable";
          return i;
        })(e, n);
      case "ReturnStatement":
        return (function (t, r) {
          return r.argument === null
            ? "return lc.voidOperation"
            : "return " + S(t, r.argument);
        })(e, n);
      case "IfStatement":
        return ki(e, n);
      case "ExpressionStatement":
        return (function (t, r) {
          return r.expression.type === "AssignmentExpression"
            ? "lastStatement = lc.voidOperation; " +
                S(t, r.expression) +
                `; 
 `
            : (r.expression.type,
              "lastStatement = " + S(t, r.expression) + "; ");
        })(e, n);
      case "AssignmentExpression":
        return (function (t, r) {
          const i = S(t, r.right);
          let u = null,
            a = "";
          if (r.left.type === "MemberExpression")
            return (
              (u = S(t, r.left.object)),
              r.left.computed === !0
                ? (a = S(t, r.left.property))
                : ((a = "'" + r.left.property.name + "'"),
                  De(r.left.property.name)),
              "lang.assignmember(" +
                u +
                "," +
                a +
                ",'" +
                r.operator +
                "'," +
                i +
                ")"
            );
          if (((u = r.left.name.toLowerCase()), De(u), t.localScope !== null)) {
            if (t.localScope[u] !== void 0)
              return (
                "lscope['" +
                u +
                "']=lang.assign(" +
                i +
                ",'" +
                r.operator +
                "', lscope['" +
                u +
                "'])"
              );
            if (t.localScope._SymbolsMap[u] !== void 0)
              return (
                "lscope['" +
                t.localScope._SymbolsMap[u] +
                "']=lang.assign(" +
                i +
                ",'" +
                r.operator +
                "', lscope['" +
                t.localScope._SymbolsMap[u] +
                "'])"
              );
          }
          if (t.globalScope[u] !== void 0)
            return (
              "gscope['" +
              u +
              "']=lang.assign(" +
              i +
              ",'" +
              r.operator +
              "', gscope['" +
              u +
              "'])"
            );
          if (t.globalScope._SymbolsMap[u] !== void 0)
            return (
              "gscope['" +
              t.globalScope._SymbolsMap[u] +
              "']=lang.assign(" +
              i +
              ",'" +
              r.operator +
              "', gscope['" +
              t.globalScope._SymbolsMap[u] +
              "'])"
            );
          if (t.localScope !== null) {
            if (t.undeclaredGlobalsInFunctions.has(u))
              return (
                "gscope[lang.chkAssig('" +
                t.undeclaredGlobalsInFunctions.get(u).manglename +
                "',runtimeCtx)]=lang.assign(" +
                i +
                ",'" +
                r.operator +
                "', gscope['" +
                t.undeclaredGlobalsInFunctions.get(u).manglename +
                "'])"
              );
            const s = { manglename: Ae(t), node: r.argument };
            return (
              t.undeclaredGlobalsInFunctions.set(u, s),
              "gscope[lang.chkAssig('" +
                s.manglename +
                "',runtimeCtx)]=lang.assign(" +
                i +
                ",'" +
                r.operator +
                "', gscope['" +
                s.manglename +
                "'])"
            );
          }
          throw new f(t, h.InvalidIdentifier, r);
        })(e, n);
      case "UpdateExpression":
        return (function (t, r) {
          let i = null,
            u = "";
          if (r.argument.type === "MemberExpression")
            return (
              (i = S(t, r.argument.object)),
              r.argument.computed === !0
                ? (u = S(t, r.argument.property))
                : ((u = "'" + r.argument.property.name + "'"),
                  De(r.argument.property.name)),
              "lang.memberupdate(" +
                i +
                "," +
                u +
                ",'" +
                r.operator +
                "'," +
                r.prefix +
                ")"
            );
          if (
            ((i = r.argument.name.toLowerCase()), De(i), t.localScope !== null)
          ) {
            if (t.localScope[i] !== void 0)
              return (
                "lang.update(lscope, '" +
                i +
                "','" +
                r.operator +
                "'," +
                r.prefix +
                ")"
              );
            if (t.localScope._SymbolsMap[i] !== void 0)
              return (
                "lang.update(lscope, '" +
                t.localScope._SymbolsMap[i] +
                "','" +
                r.operator +
                "'," +
                r.prefix +
                ")"
              );
          }
          if (t.globalScope[i] !== void 0)
            return (
              "lang.update(gscope, '" +
              i +
              "','" +
              r.operator +
              "'," +
              r.prefix +
              ")"
            );
          if (t.globalScope._SymbolsMap[i] !== void 0)
            return (
              "lang.update(gscope, '" +
              t.globalScope._SymbolsMap[i] +
              "','" +
              r.operator +
              "'," +
              r.prefix +
              ")"
            );
          if (t.localScope !== null) {
            if (t.undeclaredGlobalsInFunctions.has(i))
              return (
                "lang.update(gscope,lang.chkAssig( '" +
                t.undeclaredGlobalsInFunctions.get(i).manglename +
                "',runtimeCtx),'" +
                r.operator +
                "'," +
                r.prefix +
                ")"
              );
            const a = { manglename: Ae(t), node: r.argument };
            return (
              t.undeclaredGlobalsInFunctions.set(i, a),
              "lang.update(gscope, lang.chkAssig('" +
                a.manglename +
                "',runtimeCtx),'" +
                r.operator +
                "'," +
                r.prefix +
                ")"
            );
          }
          throw new f(t, h.InvalidIdentifier, r);
        })(e, n);
      case "BreakStatement":
        return "break";
      case "ContinueStatement":
        return "continue";
      case "TemplateLiteral":
        return (function (t, r) {
          try {
            const i = [];
            let u = 0;
            for (const a of r.quasis)
              i.push(
                a.value ? JSON.stringify(a.value.cooked) : JSON.stringify("")
              ),
                a.tail === !1 &&
                  (i.push(
                    r.expressions[u]
                      ? "lang.castString(lang.aCheck(" +
                          S(t, r.expressions[u]) +
                          ", 'TemplateLiteral'))"
                      : ""
                  ),
                  u++);
            return "([" + i.join(",") + "]).join('')";
          } catch (i) {
            throw i;
          }
        })(e, n);
      case "TemplateElement":
        return JSON.stringify(n.value ? n.value.cooked : "");
      case "ForStatement":
        return (function (t, r) {
          let i = `lastStatement = lc.voidOperation; 
`;
          r.init !== null && (i += S(t, r.init) + "; ");
          const u = Se(t),
            a = Se(t);
          return (
            (i += "var " + u + " = true; "),
            (i += `
 do { `),
            r.update !== null &&
              (i +=
                " if (" +
                u +
                `===false) {
 ` +
                S(t, r.update) +
                `  
}
 ` +
                u +
                `=false; 
`),
            r.test !== null &&
              ((i += "var " + a + " = " + S(t, r.test) + "; "),
              (i +=
                "if (" +
                a +
                "===false) { break; } else if (" +
                a +
                "!==true) { lang.error('" +
                h.BooleanConditionRequired +
                `');   }
`)),
            (i += S(t, r.body)),
            r.update !== null &&
              (i +=
                `
 ` + S(t, r.update)),
            (i +=
              `
` +
              u +
              ` = true; 
} while(true);  lastStatement = lc.voidOperation; `),
            i
          );
        })(e, n);
      case "ForInStatement":
        return (function (t, r) {
          const i = Se(t),
            u = Se(t),
            a = Se(t);
          let s =
            "var " +
            i +
            " = " +
            S(t, r.right) +
            `;
`;
          r.left.type === "VariableDeclaration" && (s += S(t, r.left));
          let o =
            r.left.type === "VariableDeclaration"
              ? r.left.declarations[0].id.name
              : r.left.name;
          (o = o.toLowerCase()), De(o);
          let c = "";
          t.localScope !== null &&
            (t.localScope[o] !== void 0
              ? (c = "lscope['" + o + "']")
              : t.localScope._SymbolsMap[o] !== void 0 &&
                (c = "lscope['" + t.localScope._SymbolsMap[o] + "']"));
          let l = "";
          if (c === "") {
            if (t.globalScope[o] !== void 0) c = "gscope['" + o + "']";
            else if (t.globalScope._SymbolsMap[o] !== void 0)
              c = "gscope['" + t.globalScope._SymbolsMap[o] + "']";
            else if (t.localScope !== null)
              if (t.undeclaredGlobalsInFunctions.has(o))
                (c =
                  "gscope['" +
                  t.undeclaredGlobalsInFunctions.get(o).manglename +
                  "']"),
                  (l = t.undeclaredGlobalsInFunctions.get(o).manglename);
              else {
                const d = { manglename: Ae(t), node: r.left };
                t.undeclaredGlobalsInFunctions.set(o, d),
                  (c = "gscope['" + d.manglename + "']"),
                  (l = d.manglename);
              }
          }
          return (
            l &&
              (s +=
                "lang.chkAssig('" +
                l +
                `',runtimeCtx); 
`),
            (s +=
              "if (" +
              i +
              `===null) {  lastStatement = lc.voidOperation; }
 `),
            (s +=
              "else if (lc.isArray(" + i + ") || lc.isString(" + i + ")) {"),
            (s +=
              "var " +
              u +
              "=" +
              i +
              `.length; 
`),
            (s +=
              "for(var " +
              a +
              "=0; " +
              a +
              "<" +
              u +
              "; " +
              a +
              `++) {
`),
            (s +=
              c +
              "=" +
              a +
              `;
`),
            (s += S(t, r.body)),
            (s += `
}
`),
            (s += ` lastStatement = lc.voidOperation; 
`),
            (s += ` 
}
`),
            (s += "else if (lc.isImmutableArray(" + i + ")) {"),
            (s +=
              "var " +
              u +
              "=" +
              i +
              `.length(); 
`),
            (s +=
              "for(var " +
              a +
              "=0; " +
              a +
              "<" +
              u +
              "; " +
              a +
              `++) {
`),
            (s +=
              c +
              "=" +
              a +
              `;
`),
            (s += S(t, r.body)),
            (s += `
}
`),
            (s += ` lastStatement = lc.voidOperation; 
`),
            (s += ` 
}
`),
            (s +=
              "else if (( " +
              i +
              " instanceof lang.Dictionary) || ( " +
              i +
              " instanceof lang.Feature)) {"),
            (s +=
              "var " +
              u +
              "=" +
              i +
              `.keys(); 
`),
            (s +=
              "for(var " +
              a +
              "=0; " +
              a +
              "<" +
              u +
              ".length; " +
              a +
              `++) {
`),
            (s +=
              c +
              "=" +
              u +
              "[" +
              a +
              `];
`),
            (s += S(t, r.body)),
            (s += `
}
`),
            (s += ` lastStatement = lc.voidOperation; 
`),
            (s += ` 
}
`),
            t.isAsync &&
              ((s += "else if (lc.isFeatureSet(" + i + ")) {"),
              (s +=
                "var " +
                u +
                "=" +
                i +
                `.iterator(runtimeCtx.abortSignal); 
`),
              (s +=
                "for(var " +
                a +
                "=lang. graphicToFeature( yield " +
                u +
                ".next()," +
                i +
                ", runtimeCtx); " +
                a +
                "!=null; " +
                a +
                "=lang. graphicToFeature( yield " +
                u +
                ".next()," +
                i +
                `, runtimeCtx)) {
`),
              (s +=
                c +
                "=" +
                a +
                `;
`),
              (s += S(t, r.body)),
              (s += `
}
`),
              (s += ` lastStatement = lc.voidOperation; 
`),
              (s += ` 
}
`)),
            (s += `else { lastStatement = lc.voidOperation; } 
`),
            s
          );
        })(e, n);
      case "WhileStatement":
        return (function (t, r) {
          let i = `lastStatement = lc.voidOperation; 
`;
          const u = Se(t);
          return (
            (i += `
  var ${u} = true;
    do {
      ${u} = ${S(t, r.test)};
      if (${u}==false) {
        break;
      }
      if (${u}!==true) {
        lang.error('${h.BooleanConditionRequired}');
      }
      ${S(t, r.body)}
    }
    while (${u} !== false);
    lastStatement = lc.voidOperation;
  `),
            i
          );
        })(e, n);
      case "Identifier":
        return (function (t, r) {
          try {
            const i = r.name.toLowerCase();
            if ((De(i), t.localScope !== null)) {
              if (t.localScope[i] !== void 0) return "lscope['" + i + "']";
              if (t.localScope._SymbolsMap[i] !== void 0)
                return "lscope['" + t.localScope._SymbolsMap[i] + "']";
            }
            if (t.globalScope[i] !== void 0) return "gscope['" + i + "']";
            if (t.globalScope._SymbolsMap[i] !== void 0)
              return "gscope['" + t.globalScope._SymbolsMap[i] + "']";
            if (t.localScope !== null) {
              if (t.undeclaredGlobalsInFunctions.has(i))
                return (
                  "gscope[lang.chkAssig('" +
                  t.undeclaredGlobalsInFunctions.get(i).manglename +
                  "',runtimeCtx)]"
                );
              const u = { manglename: Ae(t), node: r.argument };
              return (
                t.undeclaredGlobalsInFunctions.set(i, u),
                "gscope[lang.chkAssig('" + u.manglename + "',runtimeCtx)]"
              );
            }
            throw new le(t, h.InvalidIdentifier, r);
          } catch (i) {
            throw i;
          }
        })(e, n);
      case "MemberExpression":
        return (function (t, r) {
          try {
            let i;
            return (
              r.computed === !0
                ? (i = S(t, r.property))
                : ((i = "'" + r.property.name + "'"), De(r.property.name)),
              "lang.member(" + S(t, r.object) + "," + i + ")"
            );
          } catch (i) {
            throw i;
          }
        })(e, n);
      case "Literal":
        return n.value === null || n.value === void 0
          ? "null"
          : JSON.stringify(n.value);
      case "CallExpression":
        return (function (t, r) {
          try {
            if (r.callee.type === "MemberExpression") {
              let a;
              r.callee.computed === !0
                ? (a = S(t, r.callee.property))
                : ((a = "'" + r.callee.property.name + "'"),
                  De(r.callee.property.name));
              let s = "[";
              for (let o = 0; o < r.arguments.length; o++)
                o > 0 && (s += ", "), (s += S(t, r.arguments[o]));
              return (
                (s += "]"),
                t.isAsync
                  ? "(yield lang.callModuleFunction(" +
                    S(t, r.callee.object) +
                    "," +
                    s +
                    "," +
                    a +
                    ",runtimeCtx))"
                  : "lang.callModuleFunction(" +
                    S(t, r.callee.object) +
                    "," +
                    s +
                    "," +
                    a +
                    ",runtimeCtx)"
              );
            }
            if (r.callee.type !== "Identifier")
              throw new le(t, h.FuncionNotFound, r);
            const i = r.callee.name.toLowerCase();
            if (i === "iif")
              return (function (a, s) {
                try {
                  if (s.arguments.length !== 3)
                    throw new le(a, h.WrongNumberOfParameters, s);
                  const o = Se(a);
                  return `${
                    a.isAsync
                      ? `(yield (function() { 
 return lang.__awaiter(this, void 0, void 0, function* () {`
                      : "function() {"
                  }
        var ${o} = ${S(a, s.arguments[0])};
       
        if (${o} === true) {
          return  ${S(a, s.arguments[1])};
        }
        else if (${o} === false) {
          return ${S(a, s.arguments[2])};
        }
        else {
          lang.error('ExecutionErrorCodes.BooleanConditionRequired');
        }
      ${a.isAsync ? "})}()))" : "}()"}`;
                } catch (o) {
                  throw o;
                }
              })(t, r);
            if (i === "when")
              return (function (a, s) {
                try {
                  if (s.arguments.length < 3)
                    throw new le(a, h.WrongNumberOfParameters, s);
                  if (s.arguments.length % 2 == 0)
                    throw new le(a, h.WrongNumberOfParameters, s);
                  const o = Se(a);
                  let c = "var ";
                  for (let l = 0; l < s.arguments.length - 1; l += 2)
                    c += `${o} = lang.mustBoolean(${S(
                      a,
                      s.arguments[l]
                    )}, runtimeCtx);
      if (${o} === true ) {
        return ${S(a, s.arguments[l + 1])} 
      }
`;
                  return `${
                    a.isAsync
                      ? `(yield (function() { 
 return lang.__awaiter(this, void 0, void 0, function* () {`
                      : "function() {"
                  }
        ${c}
        return ${S(a, s.arguments[s.arguments.length - 1])}
        ${a.isAsync ? "})}()))" : "}()"}`;
                } catch (o) {
                  throw o;
                }
              })(t, r);
            if (i === "decode")
              return (function (a, s) {
                try {
                  if (s.arguments.length < 2)
                    throw new le(a, h.WrongNumberOfParameters, s);
                  if (s.arguments.length === 2)
                    return `(${S(a, s.arguments[1])})`;
                  if ((s.arguments.length - 1) % 2 == 0)
                    throw new le(a, h.WrongNumberOfParameters, s);
                  const o = Se(a),
                    c = Se(a);
                  let l = "var ";
                  for (let d = 1; d < s.arguments.length - 1; d += 2)
                    l += `${c} = ${S(a, s.arguments[d])};
      if (lang.binary(${c}, ${o}, "==") === true ) {
        return ${S(a, s.arguments[d + 1])} 
      }
`;
                  return `${
                    a.isAsync
                      ? `(yield (function() { 
 return lang.__awaiter(this, void 0, void 0, function* () {`
                      : "function() {"
                  }
        var ${o} = ${S(a, s.arguments[0])};
        ${l}
        return ${S(a, s.arguments[s.arguments.length - 1])}
        ${a.isAsync ? "})}()))" : "}()"}`;
                } catch (o) {
                  throw o;
                }
              })(t, r);
            let u = "";
            if (
              (t.localScope !== null &&
                (t.localScope[i] !== void 0
                  ? (u = "lscope['" + i + "']")
                  : t.localScope._SymbolsMap[i] !== void 0 &&
                    (u = "lscope['" + t.localScope._SymbolsMap[i] + "']")),
              u === "")
            ) {
              if (t.globalScope[i] !== void 0) u = "gscope['" + i + "']";
              else if (t.globalScope._SymbolsMap[i] !== void 0)
                u = "gscope['" + t.globalScope._SymbolsMap[i] + "']";
              else if (t.localScope !== null)
                if (t.undeclaredGlobalsInFunctions.has(i))
                  u =
                    "gscope[lang.chkAssig('" +
                    t.undeclaredGlobalsInFunctions.get(i).manglename +
                    "',runtimeCtx)]";
                else {
                  const a = { manglename: Ae(t), node: r.argument };
                  t.undeclaredGlobalsInFunctions.set(i, a),
                    (u =
                      "gscope[lang.chkAssig('" +
                      a.manglename +
                      "',runtimeCtx)]");
                }
            }
            if (u !== "") {
              let a = "[";
              for (let s = 0; s < r.arguments.length; s++)
                s > 0 && (a += ", "), (a += S(t, r.arguments[s]));
              return (
                (a += "]"),
                t.isAsync
                  ? "(yield lang.callfunc(" + u + "," + a + ",runtimeCtx) )"
                  : "lang.callfunc(" + u + "," + a + ",runtimeCtx)"
              );
            }
            throw new le(t, h.FuncionNotFound, r);
          } catch (i) {
            throw i;
          }
        })(e, n);
      case "UnaryExpression":
        return (function (t, r) {
          try {
            return "lang.unary(" + S(t, r.argument) + ",'" + r.operator + "')";
          } catch (i) {
            throw i;
          }
        })(e, n);
      case "BinaryExpression":
        return (function (t, r) {
          try {
            return (
              "lang.binary(" +
              S(t, r.left) +
              "," +
              S(t, r.right) +
              ",'" +
              r.operator +
              "')"
            );
          } catch (i) {
            throw i;
          }
        })(e, n);
      case "LogicalExpression":
        return (function (t, r) {
          try {
            if (
              r.left.type === "AssignmentExpression" ||
              r.left.type === "UpdateExpression"
            )
              throw new le(t, h.LogicalExpressionOnlyBoolean, r);
            if (
              r.right.type === "AssignmentExpression" ||
              r.right.type === "UpdateExpression"
            )
              throw new le(t, h.LogicalExpressionOnlyBoolean, r);
            if (r.operator === "&&" || r.operator === "||")
              return (
                "(lang.logicalCheck(" +
                S(t, r.left) +
                ") " +
                r.operator +
                " lang.logicalCheck(" +
                S(t, r.right) +
                "))"
              );
            throw new le(null, h.LogicExpressionOrAnd, null);
          } catch (i) {
            throw i;
          }
        })(e, n);
      case "ArrayExpression":
        return (function (t, r) {
          try {
            const i = [];
            for (let u = 0; u < r.elements.length; u++)
              r.elements[u].type === "Literal"
                ? i.push(S(t, r.elements[u]))
                : i.push(
                    "lang.aCheck(" + S(t, r.elements[u]) + ",'ArrayExpression')"
                  );
            return "[" + i.join(",") + "]";
          } catch (i) {
            throw i;
          }
        })(e, n);
      case "ObjectExpression":
        return (function (t, r) {
          let i = "lang.dictionary([";
          for (let u = 0; u < r.properties.length; u++) {
            const a = r.properties[u];
            De(a.key.name),
              u > 0 && (i += ","),
              (i +=
                "lang.strCheck(" +
                (a.key.type === "Identifier"
                  ? "'" + a.key.name + "'"
                  : S(t, a.key)) +
                ",'ObjectExpression'),lang.aCheck(" +
                S(t, a.value) +
                ", 'ObjectExpression')");
          }
          return (i += "])"), i;
        })(e, n);
      case "Property":
        return (function (t, r) {
          throw new le(t, h.NeverReach, r);
        })(e, n);
      case "Array":
        throw new le(e, h.NeverReach, n);
      default:
        throw new le(e, h.Unrecognised, n);
    }
  } catch (t) {
    throw t;
  }
}
function qr(e, n) {
  return n.type === "BlockStatement"
    ? S(e, n)
    : n.type === "ReturnStatement" ||
      n.type === "BreakStatement" ||
      n.type === "ContinueStatement"
    ? S(e, n) + "; "
    : n.type === "UpdateExpression"
    ? "lastStatement = " + S(e, n) + "; "
    : n.type === "ExpressionStatement"
    ? S(e, n)
    : n.type === "ObjectExpression"
    ? "lastStatement = " + S(e, n) + "; "
    : S(e, n) + "; ";
}
function ki(e, n) {
  if (
    n.test.type === "AssignmentExpression" ||
    n.test.type === "UpdateExpression"
  )
    throw new le(e, h.BooleanConditionRequired, n);
  return (
    `if (lang.mustBoolean(${S(e, n.test)}, runtimeCtx) === true) {
    ${qr(e, n.consequent)}
  } ` +
    (n.alternate !== null
      ? n.alternate.type === "IfStatement"
        ? " else " + ki(e, n.alternate)
        : ` else {
      ${qr(e, n.alternate)}
    }
`
      : ` else {
      lastStatement = lc.voidOperation;
    }
`)
  );
}
function yn(e, n) {
  let t = "";
  for (let r = 0; r < n.body.length; r++)
    n.body[r].type !== "EmptyStatement" &&
      (n.body[r].type === "ReturnStatement" ||
      n.body[r].type === "BreakStatement" ||
      n.body[r].type === "ContinueStatement"
        ? (t +=
            S(e, n.body[r]) +
            `; 
`)
        : n.body[r].type === "UpdateExpression" ||
          n.body[r].type === "ObjectExpression"
        ? (t +=
            "lastStatement = " +
            S(e, n.body[r]) +
            `; 
`)
        : (t +=
            S(e, n.body[r]) +
            ` 
`));
  return t;
}
function De(e) {
  if (e === "iif") throw new un();
  if (e === "decode") throw new un();
  if (e === "when") throw new un();
}
const ne = {};
function Ae(e) {
  return e.symbols.symbolCounter++, "_T" + e.symbols.symbolCounter.toString();
}
function Se(e) {
  return (
    e.symbols.symbolCounter++, "_Tvar" + e.symbols.symbolCounter.toString()
  );
}
xi(ne, we),
  Ii(ne, we),
  Ai(ne, we),
  Ci(ne, we),
  bi(ne, we),
  (ne.iif = function (e, n) {
    try {
      return we(e, n, (t, r, i) => {
        throw new f(e, h.Unrecognised, n);
      });
    } catch (t) {
      throw t;
    }
  }),
  (ne.decode = function (e, n) {
    try {
      return we(e, n, (t, r, i) => {
        throw new f(e, h.Unrecognised, n);
      });
    } catch (t) {
      throw t;
    }
  }),
  (ne.when = function (e, n) {
    try {
      return we(e, n, (t, r, i) => {
        throw new f(e, h.Unrecognised, n);
      });
    } catch (t) {
      throw t;
    }
  });
const Dt = {};
for (const e in ne) Dt[e] = new $e(ne[e]);
Xn(ne, we);
for (const e in ne) ne[e] = new $e(ne[e]);
const er = function () {};
er.prototype = ne;
const tr = function () {};
function Bi(e, n, t) {
  const r = {};
  e || (e = {}),
    t || (t = {}),
    (r._SymbolsMap = {}),
    (r.textformatting = 1),
    (r.infinity = 1),
    (r.pi = 1);
  for (const i in n) r[i] = 1;
  for (const i in t) r[i] = 1;
  for (const i in e) r[i] = 1;
  return r;
}
function Ti(e, n, t, r) {
  const i = t ? new tr() : new er();
  e || (e = {}), n || (n = {});
  const u = new T({
    newline: `
`,
    tab: "	",
    singlequote: "'",
    doublequote: '"',
    forwardslash: "/",
    backwardslash: "\\",
  });
  (u.immutable = !1),
    (i._SymbolsMap = { textformatting: 1, infinity: 1, pi: 1 }),
    (i.textformatting = u),
    (i.infinity = Number.POSITIVE_INFINITY),
    (i.pi = Math.PI);
  for (const a in n) (i[a] = n[a]), (i._SymbolsMap[a] = 1);
  for (const a in e)
    (i._SymbolsMap[a] = 1),
      e[a] && e[a].declaredClass === "esri.Graphic"
        ? (i[a] = X.createFromGraphic(e[a], r ?? null))
        : (i[a] = e[a]);
  return i;
}
function Ye(e, n) {
  const t = {
    mode: n,
    compiled: !0,
    functions: {},
    signatures: [],
    standardFunction: we,
    standardFunctionAsync: we,
    evaluateIdentifier: Za,
  };
  for (let r = 0; r < e.length; r++) e[r].registerFunctions(t);
  if (n === "sync") {
    for (const r in t.functions)
      (ne[r] = new $e(t.functions[r])), (er.prototype[r] = ne[r]);
    for (let r = 0; r < t.signatures.length; r++) Mn(t.signatures[r], "sync");
  } else {
    for (const r in t.functions)
      (Dt[r] = new $e(t.functions[r])), (tr.prototype[r] = Dt[r]);
    for (let r = 0; r < t.signatures.length; r++) Mn(t.signatures[r], "async");
  }
}
function Za(e, n) {
  const t = n.name;
  if (t === "_SymbolsMap") throw new f(e, h.InvalidIdentifier, null);
  if (e.localStack.length > 0) {
    if (
      t.substr(0, 2).toLowerCase() !== "_t" &&
      e.localStack[e.localStack.length - 1][t] !== void 0
    )
      return e.localStack[e.localStack.length - 1][t];
    const i = e.mangleMap[t];
    if (i !== void 0 && e.localStack[e.localStack.length - 1][i] !== void 0)
      return e.localStack[e.localStack.length - 1][i];
  }
  if (
    (t.substr(0, 2).toLowerCase() !== "_t" && e.globalScope[t] !== void 0) ||
    e.globalScope._SymbolsMap[t] === 1
  )
    return e.globalScope[t];
  const r = e.mangleMap[t];
  return r !== void 0 ? e.globalScope[r] : void 0;
}
(tr.prototype = Dt), Ye([Ln], "sync"), Ye([Ln], "async");
let wn = 0;
const _i = {
  error(e) {
    throw new f(null, e, null);
  },
  __awaiter: (e, n, t, r) =>
    new Promise((i, u) => {
      function a(c) {
        try {
          o(r.next(c));
        } catch (l) {
          u(l);
        }
      }
      function s(c) {
        try {
          o(r.throw(c));
        } catch (l) {
          u(l);
        }
      }
      function o(c) {
        c.done
          ? i(c.value)
          : c.value && c.value.then
          ? c.value.then(a, s)
          : (wn++,
            wn % 100 == 0
              ? setTimeout(() => {
                  (wn = 0), a(c.value);
                }, 0)
              : a(c.value));
      }
      o((r = r.apply(e, n || [])).next());
    }),
  functionDepthchecker: (e, n) =>
    function () {
      if (
        (n.depthCounter.depth++,
        n.localStack.push([]),
        n.depthCounter.depth > 64)
      )
        throw new f(null, h.MaximumCallDepth, null);
      const t = e.apply(this, arguments);
      return Ge(t)
        ? t.then(
            (r) => (
              n.depthCounter.depth--,
              (n.localStack.length = n.localStack.length - 1),
              r
            )
          )
        : (n.depthCounter.depth--,
          (n.localStack.length = n.localStack.length - 1),
          t);
    },
  chkAssig(e, n) {
    if (n.gdefs[e] === void 0) throw new f(n, h.InvalidIdentifier, null);
    return e;
  },
  mustBoolean(e, n) {
    if (e === !0 || e === !1) return e;
    throw new f(n, h.BooleanConditionRequired, null);
  },
  setAssig: (e, n) => ((n.gdefs[e] = 1), e),
  castString: (e) => E(e),
  aCheck(e, n) {
    if ($(e))
      throw n === "ArrayExpression"
        ? new f(null, h.NoFunctionInArray, null)
        : n === "ObjectExpression"
        ? new f(null, h.NoFunctionInDictionary, null)
        : new f(null, h.NoFunctionInTemplateLiteral, null);
    return e === A ? null : e;
  },
  Dictionary: T,
  Feature: X,
  UserDefinedCompiledFunction: class extends Ke {
    constructor(e, n) {
      super(), (this.paramCount = n), (this.fn = e);
    }
    createFunction(e) {
      return (...n) => {
        if (n.length !== this.paramCount)
          throw new f(e, h.WrongNumberOfParameters, null);
        return this.fn(...n);
      };
    }
    call(e, n) {
      return this.fn(...n.arguments);
    }
    marshalledCall(e, n, t, r) {
      return r(e, n, (i, u, a) => {
        a = a.map((o) => (!$(o) || o instanceof Pe ? o : ct(o, e, r)));
        const s = this.call(t, { arguments: a });
        return Ge(s) ? s.then((o) => ct(o, t, r)) : s;
      });
    }
  },
  dictionary(e) {
    const n = {},
      t = new Map();
    for (let i = 0; i < e.length; i += 2) {
      if ($(e[i + 1])) throw new f(null, h.NoFunctionInDictionary, null);
      if (v(e[i]) === !1) throw new f(null, h.KeyMustBeString, null);
      let u = e[i].toString();
      const a = u.toLowerCase();
      t.has(a) ? (u = t.get(a)) : t.set(a, u),
        e[i + 1] === A ? (n[u] = null) : (n[u] = e[i + 1]);
    }
    const r = new T(n);
    return (r.immutable = !1), r;
  },
  strCheck(e) {
    if (v(e) === !1) throw new f(null, h.KeyMustBeString, null);
    return e;
  },
  unary(e, n) {
    if (G(e)) {
      if (n === "!") return !e;
      if (n === "-") return -1 * m(e);
      if (n === "+") return 1 * m(e);
      if (n === "~") return ~m(e);
      throw new f(null, h.UnsupportedUnaryOperator, null);
    }
    if (n === "-") return -1 * m(e);
    if (n === "+") return 1 * m(e);
    if (n === "~") return ~m(e);
    throw new f(null, h.UnsupportedUnaryOperator, null);
  },
  logicalCheck(e) {
    if (G(e) === !1) throw new f(null, h.LogicExpressionOrAnd, null);
    return e;
  },
  logical(e, n, t) {
    if (G(e) && G(n))
      switch (t) {
        case "||":
          return e || n;
        case "&&":
          return e && n;
        default:
          throw new f(null, h.LogicExpressionOrAnd, null);
      }
    throw new f(null, h.LogicExpressionOrAnd, null);
  },
  binary(e, n, t) {
    switch (t) {
      case "|":
      case "<<":
      case ">>":
      case ">>>":
      case "^":
      case "&":
        return $n(m(e), m(n), t);
      case "==":
      case "=":
        return Fe(e, n);
      case "!=":
        return !Fe(e, n);
      case "<":
      case ">":
      case "<=":
      case ">=":
        return Kn(e, n, t);
      case "+":
        return v(e) || v(n) ? E(e) + E(n) : m(e) + m(n);
      case "-":
        return m(e) - m(n);
      case "*":
        return m(e) * m(n);
      case "/":
        return m(e) / m(n);
      case "%":
        return m(e) % m(n);
      default:
        throw new f(null, h.UnsupportedOperator, null);
    }
  },
  assign(e, n, t) {
    switch (n) {
      case "=":
        return e === A ? null : e;
      case "/=":
        return m(t) / m(e);
      case "*=":
        return m(t) * m(e);
      case "-=":
        return m(t) - m(e);
      case "+=":
        return v(t) || v(e) ? E(t) + E(e) : m(t) + m(e);
      case "%=":
        return m(t) % m(e);
      default:
        throw new f(null, h.UnsupportedOperator, null);
    }
  },
  update(e, n, t, r) {
    const i = m(e[n]);
    return (
      (e[n] = t === "++" ? i + 1 : i - 1),
      r === !1 ? i : t === "++" ? i + 1 : i - 1
    );
  },
  graphicToFeature: (e, n, t) =>
    e === null
      ? null
      : X.createFromGraphicLikeObject(
          e.geometry,
          e.attributes,
          n,
          t.timeReference
        ),
  memberupdate(e, n, t, r) {
    let i;
    if (k(e)) {
      if (!z(n)) throw new f(null, h.ArrayAccessorMustBeNumber, null);
      if ((n < 0 && (n = e.length + n), n < 0 || n >= e.length))
        throw new f(null, h.OutOfBounds, null);
      (i = m(e[n])), (e[n] = t === "++" ? i + 1 : i - 1);
    } else if (e instanceof T) {
      if (v(n) === !1) throw new f(null, h.KeyAccessorMustBeString, null);
      if (e.hasField(n) !== !0)
        throw new f(null, h.FieldNotFound, null, { key: n });
      (i = m(e.field(n))), e.setField(n, t === "++" ? i + 1 : i - 1);
    } else if (ee(e)) {
      if (v(n) === !1) throw new f(null, h.KeyAccessorMustBeString, null);
      if (e.hasField(n) !== !0) throw new f(null, h.FieldNotFound, null);
      (i = m(e.field(n))), e.setField(n, t === "++" ? i + 1 : i - 1);
    } else {
      if (N(e)) throw new f(null, h.Immutable, null);
      if (!(e instanceof Ct)) throw new f(null, h.InvalidIdentifier, null);
      if (v(n) === !1) throw new f(null, h.ModuleAccessorMustBeString, null);
      if (e.hasGlobal(n) !== !0)
        throw new f(null, h.ModuleExportNotFound, null);
      (i = m(e.global(n))), e.setGlobal(n, t === "++" ? i + 1 : i - 1);
    }
    return r === !1 ? i : t === "++" ? i + 1 : i - 1;
  },
  assignmember(e, n, t, r) {
    if (k(e)) {
      if (!z(n)) throw new f(null, h.ArrayAccessorMustBeNumber, null);
      if ((n < 0 && (n = e.length + n), n < 0 || n > e.length))
        throw new f(null, h.OutOfBounds, null);
      if (n === e.length) {
        if (t !== "=") throw new f(null, h.OutOfBounds, null);
        e[n] = this.assign(r, t, e[n]);
      } else e[n] = this.assign(r, t, e[n]);
    } else if (e instanceof T) {
      if (v(n) === !1) throw new f(null, h.KeyAccessorMustBeString, null);
      if (e.hasField(n) === !0) e.setField(n, this.assign(r, t, e.field(n)));
      else {
        if (t !== "=") throw new f(null, h.FieldNotFound, null);
        e.setField(n, this.assign(r, t, null));
      }
    } else if (ee(e)) {
      if (v(n) === !1) throw new f(null, h.KeyAccessorMustBeString, null);
      if (e.hasField(n) === !0) e.setField(n, this.assign(r, t, e.field(n)));
      else {
        if (t !== "=") throw new f(null, h.FieldNotFound, null);
        e.setField(n, this.assign(r, t, null));
      }
    } else {
      if (N(e)) throw new f(null, h.Immutable, null);
      if (!(e instanceof Ct)) throw new f(null, h.InvalidIdentifier, null);
      if (v(n) === !1) throw new f(null, h.ModuleAccessorMustBeString, null);
      if (!e.hasGlobal(n)) throw new f(null, h.ModuleExportNotFound, null);
      e.setGlobal(n, this.assign(r, t, e.global(n)));
    }
  },
  member(e, n) {
    if (e === null) throw new f(null, h.MemberOfNull, null);
    if (e instanceof T || ee(e)) {
      if (v(n)) return e.field(n);
      throw new f(null, h.InvalidMemberAccessKey, null);
    }
    if (e instanceof B) {
      if (v(n)) return Bt(e, n, null, null);
      throw new f(null, h.InvalidMemberAccessKey, null);
    }
    if (k(e)) {
      if (z(n) && isFinite(n) && Math.floor(n) === n) {
        if ((n < 0 && (n = e.length + n), n >= e.length || n < 0))
          throw new f(null, h.OutOfBounds, null);
        return e[n];
      }
      throw new f(null, h.InvalidMemberAccessKey, null);
    }
    if (v(e)) {
      if (z(n) && isFinite(n) && Math.floor(n) === n) {
        if ((n < 0 && (n = e.length + n), n >= e.length || n < 0))
          throw new f(null, h.OutOfBounds, null);
        return e[n];
      }
      throw new f(null, h.InvalidMemberAccessKey, null);
    }
    if (N(e)) {
      if (z(n) && isFinite(n) && Math.floor(n) === n) {
        if ((n < 0 && (n = e.length() + n), n >= e.length() || n < 0))
          throw new f(null, h.OutOfBounds, null);
        return e.get(n);
      }
      throw new f(null, h.InvalidMemberAccessKey, null);
    }
    if (e instanceof Ct) {
      if (v(n)) return e.global(n);
      throw new f(null, h.InvalidMemberAccessKey, null);
    }
    throw new f(null, h.InvalidMemberAccessKey, null);
  },
  callfunc: (e, n, t) => e.call(t, { arguments: n, preparsed: !0 }),
  loadModule(e, n) {
    const t = n.moduleFactoryMap[e];
    if (n.moduleSingletons[t]) return n.moduleSingletons[t];
    const r = n.moduleFactory[t](
      {
        vars: {},
        moduleSingletons: n.moduleSingletons,
        depthCounter: n.depthCounter,
        console: n.console,
        abortSignal: n.abortSignal,
        isAsync: n.isAsync,
        services: n.services,
        lrucache: n.lrucache,
        timeReference: n.timeReference ? n.timeReference : null,
        interceptor: n.interceptor,
      },
      n.spatialReference
    );
    return (n.moduleSingletons[t] = r), r;
  },
  callModuleFunction(e, n, t, r) {
    if (!(e instanceof Ct)) throw new f(null, h.FuncionNotFound, null);
    const i = e.global(t);
    if ($(i) === !1) throw new f(null, h.CallNonFunction, null);
    return i.call(r, { preparsed: !0, arguments: n });
  },
};
function Vt(e) {}
function Jr(e, n, t = !1) {
  n === null && (n = { vars: {}, customfunctions: {} });
  let r = null;
  e.usesModules && (r = new rn(null, e.loadedModules));
  const i = {
    isAsync: t,
    globalScope: Bi(n.vars, t ? Dt : ne, n.customfunctions),
    moduleFactory: {},
    moduleFactoryMap: {},
    undeclaredGlobalsInFunctions: new Map(),
    customfunctions: n.customfunctions,
    libraryResolver: r,
    localScope: null,
    mangleMap: {},
    depthCounter: { depth: 1 },
    exports: {},
    console: Vt,
    lrucache: n.lrucache,
    timeReference: n.timeReference ?? null,
    interceptor: n.interceptor,
    services: n.services,
    symbols: { symbolCounter: 0 },
  };
  let u = S(i, e);
  u === "" && (u = "lc.voidOperation; "),
    i.undeclaredGlobalsInFunctions.size > 0 &&
      i.undeclaredGlobalsInFunctions.forEach((p) => {
        throw new le(n, h.InvalidIdentifier, p.node);
      });
  let a = "";
  a = t
    ? `var runtimeCtx=this.prepare(context, true);
 var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; 
return lang.__awaiter(this, void 0, void 0, function* () {

 function mainBody() {
 var lastStatement=lc.voidOperation;
 return lang.__awaiter(this, void 0, void 0, function* () {
` +
      u +
      `
 return lastStatement; }); } 
 return this.postProcess(yield mainBody()); }); `
    : `var runtimeCtx=this.prepare(context, false);
 var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; 
 function mainBody() {
 var lastStatement=lc.voidOperation;
 ` +
      u +
      `
 return lastStatement; } 
 return this.postProcess(mainBody()); `;
  const s = i.moduleFactory,
    o = i.moduleFactoryMap,
    c = i.exports,
    l = {};
  for (const p in c) l[p] = i.mangleMap[p] !== void 0 ? i.mangleMap[p] : p;
  const d = {
    lc: gi,
    lang: _i,
    mangles: i.mangleMap,
    postProcess(p) {
      if (
        (p instanceof me && (p = p.value),
        p instanceof ht && (p = p.value),
        p === A && (p = null),
        p === Ee)
      )
        throw new f(null, h.IllegalResult, null);
      if (p === ft) throw new f(null, h.IllegalResult, null);
      if ($(p)) throw new f(null, h.IllegalResult, null);
      return p;
    },
    prepare(p, g) {
      let F = p.spatialReference;
      F == null && (F = _t.WebMercator);
      const w = Ti(p.vars, p.customfunctions, g, p.timeReference);
      return {
        localStack: [],
        isAsync: g,
        moduleFactory: s,
        moduleFactoryMap: o,
        mangleMap: this.mangles,
        moduleSingletons: {},
        exports: c,
        gdefs: {},
        exportmangle: l,
        spatialReference: F,
        globalScope: w,
        abortSignal:
          p.abortSignal === void 0 || p.abortSignal === null
            ? { aborted: !1 }
            : p.abortSignal,
        localScope: null,
        services: p.services,
        console: p.console ? p.console : Vt,
        lrucache: p.lrucache,
        timeReference: p.timeReference ?? null,
        interceptor: p.interceptor,
        symbols: { symbolCounter: 0 },
        depthCounter: { depth: 1 },
      };
    },
  };
  return new Function("context", "spatialReference", a).bind(d);
}
class Ct extends $t {
  constructor(n) {
    super(null), (this.moduleContext = n);
  }
  hasGlobal(n) {
    return (
      this.moduleContext.exports[n] === void 0 && (n = n.toLowerCase()),
      this.moduleContext.exports[n] !== void 0
    );
  }
  setGlobal(n, t) {
    const r = this.moduleContext.globalScope,
      i = n.toLowerCase();
    if ($(t)) throw new f(null, h.AssignModuleFunction, null);
    r[this.moduleContext.exportmangle[i]] = t;
  }
  global(n) {
    const t = this.moduleContext.globalScope;
    n = n.toLowerCase();
    const r = t[this.moduleContext.exportmangle[n]];
    if (r === void 0) throw new f(null, h.InvalidIdentifier, null);
    if ($(r) && !(r instanceof Pe)) {
      const i = new Pe();
      return (
        (i.fn = r),
        (i.parameterEvaluator = we),
        (i.context = this.moduleContext),
        (t[this.moduleContext.exportmangle[n]] = i),
        i
      );
    }
    return r;
  }
}
var M, C;
(function (e) {
  (e.Break = "break"),
    (e.Continue = "continue"),
    (e.Else = "else"),
    (e.False = "false"),
    (e.For = "for"),
    (e.From = "from"),
    (e.Function = "function"),
    (e.If = "if"),
    (e.Import = "import"),
    (e.Export = "export"),
    (e.In = "in"),
    (e.Null = "null"),
    (e.Return = "return"),
    (e.True = "true"),
    (e.Var = "var"),
    (e.While = "while");
})(M || (M = {})),
  (function (e) {
    (e.AssignmentExpression = "AssignmentExpression"),
      (e.ArrayExpression = "ArrayExpression"),
      (e.BlockComment = "BlockComment"),
      (e.BlockStatement = "BlockStatement"),
      (e.BinaryExpression = "BinaryExpression"),
      (e.BreakStatement = "BreakStatement"),
      (e.CallExpression = "CallExpression"),
      (e.ContinueStatement = "ContinueStatement"),
      (e.EmptyStatement = "EmptyStatement"),
      (e.ExpressionStatement = "ExpressionStatement"),
      (e.ExportNamedDeclaration = "ExportNamedDeclaration"),
      (e.ExportSpecifier = "ExportSpecifier"),
      (e.ForStatement = "ForStatement"),
      (e.ForInStatement = "ForInStatement"),
      (e.FunctionDeclaration = "FunctionDeclaration"),
      (e.Identifier = "Identifier"),
      (e.IfStatement = "IfStatement"),
      (e.ImportDeclaration = "ImportDeclaration"),
      (e.ImportDefaultSpecifier = "ImportDefaultSpecifier"),
      (e.LineComment = "LineComment"),
      (e.Literal = "Literal"),
      (e.LogicalExpression = "LogicalExpression"),
      (e.MemberExpression = "MemberExpression"),
      (e.ObjectExpression = "ObjectExpression"),
      (e.Program = "Program"),
      (e.Property = "Property"),
      (e.ReturnStatement = "ReturnStatement"),
      (e.TemplateElement = "TemplateElement"),
      (e.TemplateLiteral = "TemplateLiteral"),
      (e.UnaryExpression = "UnaryExpression"),
      (e.UpdateExpression = "UpdateExpression"),
      (e.VariableDeclaration = "VariableDeclaration"),
      (e.VariableDeclarator = "VariableDeclarator"),
      (e.WhileStatement = "WhileStatement");
  })(C || (C = {}));
const zn = ["++", "--"],
  Mi = ["-", "+", "!", "~"],
  Ni = ["=", "/=", "*=", "%=", "+=", "-="],
  Li = ["||", "&&"],
  Va = {
    "||": 1,
    "&&": 2,
    "|": 3,
    "^": 4,
    "&": 5,
    "==": 6,
    "!=": 6,
    "<": 7,
    ">": 7,
    "<=": 7,
    ">=": 7,
    "<<": 8,
    ">>": 8,
    ">>>": 8,
    "+": 9,
    "-": 9,
    "*": 10,
    "/": 10,
    "%": 10,
  };
var b;
(function (e) {
  (e[(e.Unknown = 0)] = "Unknown"),
    (e[(e.BooleanLiteral = 1)] = "BooleanLiteral"),
    (e[(e.EOF = 2)] = "EOF"),
    (e[(e.Identifier = 3)] = "Identifier"),
    (e[(e.Keyword = 4)] = "Keyword"),
    (e[(e.NullLiteral = 5)] = "NullLiteral"),
    (e[(e.NumericLiteral = 6)] = "NumericLiteral"),
    (e[(e.Punctuator = 7)] = "Punctuator"),
    (e[(e.StringLiteral = 8)] = "StringLiteral"),
    (e[(e.Template = 10)] = "Template");
})(b || (b = {}));
const Ha = [
  "Unknown",
  "Boolean",
  "<end>",
  "Identifier",
  "Keyword",
  "Null",
  "Numeric",
  "Punctuator",
  "String",
  "RegularExpression",
  "Template",
];
var x;
(function (e) {
  (e.InvalidModuleUri = "InvalidModuleUri"),
    (e.ForInOfLoopInitializer = "ForInOfLoopInitializer"),
    (e.IdentiferExpected = "IdentiferExpected"),
    (e.InvalidEscapedReservedWord = "InvalidEscapedReservedWord"),
    (e.InvalidExpression = "InvalidExpression"),
    (e.InvalidFunctionIdentifier = "InvalidFunctionIdentifier"),
    (e.InvalidHexEscapeSequence = "InvalidHexEscapeSequence"),
    (e.InvalidLeftHandSideInAssignment = "InvalidLeftHandSideInAssignment"),
    (e.InvalidLeftHandSideInForIn = "InvalidLeftHandSideInForIn"),
    (e.InvalidTemplateHead = "InvalidTemplateHead"),
    (e.InvalidVariableAssignment = "InvalidVariableAssignment"),
    (e.KeyMustBeString = "KeyMustBeString"),
    (e.NoFunctionInsideBlock = "NoFunctionInsideBlock"),
    (e.NoFunctionInsideFunction = "NoFunctionInsideFunction"),
    (e.ModuleExportRootOnly = "ModuleExportRootOnly"),
    (e.ModuleImportRootOnly = "ModuleImportRootOnly"),
    (e.PunctuatorExpected = "PunctuatorExpected"),
    (e.TemplateOctalLiteral = "TemplateOctalLiteral"),
    (e.UnexpectedBoolean = "UnexpectedBoolean"),
    (e.UnexpectedEndOfScript = "UnexpectedEndOfScript"),
    (e.UnexpectedIdentifier = "UnexpectedIdentifier"),
    (e.UnexpectedKeyword = "UnexpectedKeyword"),
    (e.UnexpectedNull = "UnexpectedNull"),
    (e.UnexpectedNumber = "UnexpectedNumber"),
    (e.UnexpectedPunctuator = "UnexpectedPunctuator"),
    (e.UnexpectedString = "UnexpectedString"),
    (e.UnexpectedTemplate = "UnexpectedTemplate"),
    (e.UnexpectedToken = "UnexpectedToken");
})(x || (x = {}));
const Wa = {
  [x.InvalidModuleUri]: "Module uri must be a text literal.",
  [x.ForInOfLoopInitializer]:
    "for-in loop variable declaration may not have an initializer.",
  [x.IdentiferExpected]: "'${value}' is an invalid identifier.",
  [x.InvalidEscapedReservedWord]: "Keyword cannot contain escaped characters.",
  [x.InvalidExpression]: "Invalid expression.",
  [x.InvalidFunctionIdentifier]:
    "'${value}' is an invalid function identifier.",
  [x.InvalidHexEscapeSequence]: "Invalid hexadecimal escape sequence.",
  [x.InvalidLeftHandSideInAssignment]: "Invalid left-hand side in assignment.",
  [x.InvalidLeftHandSideInForIn]: "Invalid left-hand side in for-in.",
  [x.InvalidTemplateHead]: "Invalid template structure.",
  [x.InvalidVariableAssignment]: "Invalid variable assignment.",
  [x.KeyMustBeString]:
    "Object property keys must be a word starting with a letter.",
  [x.NoFunctionInsideBlock]:
    "Functions cannot be declared inside of code blocks.",
  [x.NoFunctionInsideFunction]:
    "Functions cannot be declared inside another function.",
  [x.ModuleExportRootOnly]:
    "Module exports cannot be declared inside of code blocks.",
  [x.ModuleImportRootOnly]:
    "Module import cannot be declared inside of code blocks.",
  [x.PunctuatorExpected]: "'${value}' expected.",
  [x.TemplateOctalLiteral]:
    "Octal literals are not allowed in template literals.",
  [x.UnexpectedBoolean]: "Unexpected boolean literal.",
  [x.UnexpectedEndOfScript]: "Unexpected end of Arcade expression.",
  [x.UnexpectedIdentifier]: "Unexpected identifier.",
  [x.UnexpectedKeyword]: "Unexpected keyword.",
  [x.UnexpectedNull]: "Unexpected null literal.",
  [x.UnexpectedNumber]: "Unexpected number.",
  [x.UnexpectedPunctuator]: "Unexpected ponctuator.",
  [x.UnexpectedString]: "Unexpected text literal.",
  [x.UnexpectedTemplate]: "Unexpected quasi '${value}'.",
  [x.UnexpectedToken]: "Unexpected token '${value}'.",
};
let We = class Ri extends Error {
  constructor({
    code: n,
    index: t,
    line: r,
    column: i,
    len: u = 0,
    description: a,
    data: s,
  }) {
    var o;
    super(`${a ?? n}`),
      (this.declaredRootClass = "esri.arcade.lib.parsingerror"),
      (this.name = "ParsingError"),
      (this.code = n),
      (this.index = t),
      (this.line = r),
      (this.column = i),
      (this.len = u),
      (this.data = s),
      (this.description = a),
      (this.range = {
        start: { line: r, column: i - 1 },
        end: { line: r, column: i + u },
      }),
      (o = Error.captureStackTrace) == null || o.call(Error, this, Ri);
  }
};
function Zr(e) {
  return (e == null ? void 0 : e.type) === C.BlockStatement;
}
function Ka(e) {
  return (e == null ? void 0 : e.type) === C.BlockComment;
}
function $a(e) {
  return (e == null ? void 0 : e.type) === C.EmptyStatement;
}
function Ya(e) {
  return (e == null ? void 0 : e.type) === C.VariableDeclarator;
}
function xn(e, n) {
  return (
    !!n &&
    n.loc.end.line === e.loc.start.line &&
    n.loc.end.column <= e.loc.start.column
  );
}
function Vr(e, n) {
  return e.range[0] >= n.range[0] && e.range[1] <= n.range[1];
}
function Fn(e, n) {
  const t = Wa[e];
  return n
    ? t.replace(/\${(.*?)}/g, (r, i) => {
        var u;
        return ((u = n[i]) == null ? void 0 : u.toString()) ?? "";
      })
    : t;
}
function Hr(e, n) {
  if (!e) throw new Error("ASSERT: " + n);
}
const Wr = {
    NonAsciiIdentifierStart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,
    NonAsciiIdentifierPart:
      /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD46\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E\uDC5F\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
  },
  R = {
    fromCodePoint: (e) =>
      e < 65536
        ? String.fromCharCode(e)
        : String.fromCharCode(55296 + ((e - 65536) >> 10)) +
          String.fromCharCode(56320 + ((e - 65536) & 1023)),
    isWhiteSpace: (e) =>
      e === 32 ||
      e === 9 ||
      e === 11 ||
      e === 12 ||
      e === 160 ||
      (e >= 5760 &&
        [
          5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201,
          8202, 8239, 8287, 12288, 65279,
        ].includes(e)),
    isLineTerminator: (e) => e === 10 || e === 13 || e === 8232 || e === 8233,
    isIdentifierStart: (e) =>
      e === 36 ||
      e === 95 ||
      (e >= 65 && e <= 90) ||
      (e >= 97 && e <= 122) ||
      e === 92 ||
      (e >= 128 && Wr.NonAsciiIdentifierStart.test(R.fromCodePoint(e))),
    isIdentifierPart: (e) =>
      e === 36 ||
      e === 95 ||
      (e >= 65 && e <= 90) ||
      (e >= 97 && e <= 122) ||
      (e >= 48 && e <= 57) ||
      e === 92 ||
      (e >= 128 && Wr.NonAsciiIdentifierPart.test(R.fromCodePoint(e))),
    isDecimalDigit: (e) => e >= 48 && e <= 57,
    isHexDigit: (e) =>
      (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102),
    isOctalDigit: (e) => e >= 48 && e <= 55,
  };
function Kr(e) {
  return "0123456789abcdef".indexOf(e.toLowerCase());
}
function Cn(e) {
  return "01234567".indexOf(e);
}
const He = [[], [], []];
zn.forEach((e) => He[e.length - 1].push(e)),
  Mi.forEach((e) => He[e.length - 1].push(e)),
  Li.forEach((e) => He[e.length - 1].push(e)),
  Ni.forEach((e) => He[e.length - 1].push(e)),
  [
    "|",
    "&",
    ">>",
    "<<",
    ">>>",
    "^",
    "==",
    "!=",
    "<",
    "<=",
    ">",
    ">=",
    "+",
    "-",
    "*",
    "/",
    "%",
  ].forEach((e) => He[e.length - 1].push(e));
let Xa = class {
  constructor(e, n) {
    (this.source = e),
      (this.errorHandler = n),
      (this._length = e.length),
      (this.index = 0),
      (this.lineNumber = 1),
      (this.lineStart = 0),
      (this.curlyStack = []);
  }
  saveState() {
    return {
      index: this.index,
      lineNumber: this.lineNumber,
      lineStart: this.lineStart,
      curlyStack: this.curlyStack.slice(),
    };
  }
  restoreState(e) {
    (this.index = e.index),
      (this.lineNumber = e.lineNumber),
      (this.lineStart = e.lineStart),
      (this.curlyStack = e.curlyStack);
  }
  eof() {
    return this.index >= this._length;
  }
  throwUnexpectedToken(e = x.UnexpectedToken) {
    this.errorHandler.throwError({
      code: e,
      index: this.index,
      line: this.lineNumber,
      column: this.index - this.lineStart + 1,
    });
  }
  tolerateUnexpectedToken(e = x.UnexpectedToken) {
    this.errorHandler.tolerateError({
      code: e,
      index: this.index,
      line: this.lineNumber,
      column: this.index - this.lineStart + 1,
    });
  }
  skipSingleLineComment(e) {
    const n = [],
      t = this.index - e,
      r = {
        start: {
          line: this.lineNumber,
          column: this.index - this.lineStart - e,
        },
        end: { line: 0, column: 0 },
      };
    for (; !this.eof(); ) {
      const i = this.source.charCodeAt(this.index);
      if ((++this.index, R.isLineTerminator(i))) {
        if (r) {
          r.end = {
            line: this.lineNumber,
            column: this.index - this.lineStart - 1,
          };
          const u = {
            multiLine: !1,
            start: t + e,
            end: this.index - 1,
            range: [t, this.index - 1],
            loc: r,
          };
          n.push(u);
        }
        return (
          i === 13 && this.source.charCodeAt(this.index) === 10 && ++this.index,
          ++this.lineNumber,
          (this.lineStart = this.index),
          n
        );
      }
    }
    if (r) {
      r.end = { line: this.lineNumber, column: this.index - this.lineStart };
      const i = {
        multiLine: !1,
        start: t + e,
        end: this.index,
        range: [t, this.index],
        loc: r,
      };
      n.push(i);
    }
    return n;
  }
  skipMultiLineComment() {
    const e = [],
      n = this.index - 2,
      t = {
        start: {
          line: this.lineNumber,
          column: this.index - this.lineStart - 2,
        },
        end: { line: 0, column: 0 },
      };
    for (; !this.eof(); ) {
      const r = this.source.charCodeAt(this.index);
      if (R.isLineTerminator(r))
        r === 13 &&
          this.source.charCodeAt(this.index + 1) === 10 &&
          ++this.index,
          ++this.lineNumber,
          ++this.index,
          (this.lineStart = this.index);
      else if (r === 42) {
        if (this.source.charCodeAt(this.index + 1) === 47) {
          if (((this.index += 2), t)) {
            t.end = {
              line: this.lineNumber,
              column: this.index - this.lineStart,
            };
            const i = {
              multiLine: !0,
              start: n + 2,
              end: this.index - 2,
              range: [n, this.index],
              loc: t,
            };
            e.push(i);
          }
          return e;
        }
        ++this.index;
      } else ++this.index;
    }
    if (t) {
      t.end = { line: this.lineNumber, column: this.index - this.lineStart };
      const r = {
        multiLine: !0,
        start: n + 2,
        end: this.index,
        range: [n, this.index],
        loc: t,
      };
      e.push(r);
    }
    return this.tolerateUnexpectedToken(), e;
  }
  scanComments() {
    let e = [];
    for (; !this.eof(); ) {
      let n = this.source.charCodeAt(this.index);
      if (R.isWhiteSpace(n)) ++this.index;
      else if (R.isLineTerminator(n))
        ++this.index,
          n === 13 && this.source.charCodeAt(this.index) === 10 && ++this.index,
          ++this.lineNumber,
          (this.lineStart = this.index);
      else {
        if (n !== 47) break;
        if (((n = this.source.charCodeAt(this.index + 1)), n === 47)) {
          this.index += 2;
          const t = this.skipSingleLineComment(2);
          e = [...e, ...t];
        } else {
          if (n !== 42) break;
          {
            this.index += 2;
            const t = this.skipMultiLineComment();
            e = [...e, ...t];
          }
        }
      }
    }
    return e;
  }
  isKeyword(e) {
    switch ((e = e.toLowerCase()).length) {
      case 2:
        return e === M.If || e === M.In;
      case 3:
        return e === M.Var || e === M.For;
      case 4:
        return e === M.Else;
      case 5:
        return e === M.Break || e === M.While;
      case 6:
        return e === M.Return || e === M.Import || e === M.Export;
      case 8:
        return e === M.Function || e === M.Continue;
      default:
        return !1;
    }
  }
  codePointAt(e) {
    let n = this.source.charCodeAt(e);
    if (n >= 55296 && n <= 56319) {
      const t = this.source.charCodeAt(e + 1);
      t >= 56320 && t <= 57343 && (n = 1024 * (n - 55296) + t - 56320 + 65536);
    }
    return n;
  }
  scanHexEscape(e) {
    const n = e === "u" ? 4 : 2;
    let t = 0;
    for (let r = 0; r < n; ++r) {
      if (this.eof() || !R.isHexDigit(this.source.charCodeAt(this.index)))
        return null;
      t = 16 * t + Kr(this.source[this.index++]);
    }
    return String.fromCharCode(t);
  }
  scanUnicodeCodePointEscape() {
    let e = this.source[this.index],
      n = 0;
    for (
      e === "}" && this.throwUnexpectedToken();
      !this.eof() &&
      ((e = this.source[this.index++]), R.isHexDigit(e.charCodeAt(0)));

    )
      n = 16 * n + Kr(e);
    return (
      (n > 1114111 || e !== "}") && this.throwUnexpectedToken(),
      R.fromCodePoint(n)
    );
  }
  getIdentifier() {
    const e = this.index++;
    for (; !this.eof(); ) {
      const n = this.source.charCodeAt(this.index);
      if (n === 92) return (this.index = e), this.getComplexIdentifier();
      if (n >= 55296 && n < 57343)
        return (this.index = e), this.getComplexIdentifier();
      if (!R.isIdentifierPart(n)) break;
      ++this.index;
    }
    return this.source.slice(e, this.index);
  }
  getComplexIdentifier() {
    let e,
      n = this.codePointAt(this.index),
      t = R.fromCodePoint(n);
    for (
      this.index += t.length,
        n === 92 &&
          (this.source.charCodeAt(this.index) !== 117 &&
            this.throwUnexpectedToken(),
          ++this.index,
          this.source[this.index] === "{"
            ? (++this.index, (e = this.scanUnicodeCodePointEscape()))
            : ((e = this.scanHexEscape("u")),
              (e !== null &&
                e !== "\\" &&
                R.isIdentifierStart(e.charCodeAt(0))) ||
                this.throwUnexpectedToken()),
          (t = e));
      !this.eof() &&
      ((n = this.codePointAt(this.index)), R.isIdentifierPart(n));

    )
      (e = R.fromCodePoint(n)),
        (t += e),
        (this.index += e.length),
        n === 92 &&
          ((t = t.substring(0, t.length - 1)),
          this.source.charCodeAt(this.index) !== 117 &&
            this.throwUnexpectedToken(),
          ++this.index,
          this.source[this.index] === "{"
            ? (++this.index, (e = this.scanUnicodeCodePointEscape()))
            : ((e = this.scanHexEscape("u")),
              (e !== null &&
                e !== "\\" &&
                R.isIdentifierPart(e.charCodeAt(0))) ||
                this.throwUnexpectedToken()),
          (t += e));
    return t;
  }
  octalToDecimal(e) {
    let n = e !== "0",
      t = Cn(e);
    return (
      !this.eof() &&
        R.isOctalDigit(this.source.charCodeAt(this.index)) &&
        ((n = !0),
        (t = 8 * t + Cn(this.source[this.index++])),
        "0123".includes(e) &&
          !this.eof() &&
          R.isOctalDigit(this.source.charCodeAt(this.index)) &&
          (t = 8 * t + Cn(this.source[this.index++]))),
      { code: t, octal: n }
    );
  }
  scanIdentifier() {
    let e;
    const n = this.index,
      t =
        this.source.charCodeAt(n) === 92
          ? this.getComplexIdentifier()
          : this.getIdentifier();
    if (
      ((e =
        t.length === 1
          ? b.Identifier
          : this.isKeyword(t)
          ? b.Keyword
          : t.toLowerCase() === M.Null
          ? b.NullLiteral
          : t.toLowerCase() === M.True || t.toLowerCase() === M.False
          ? b.BooleanLiteral
          : b.Identifier),
      e !== b.Identifier && n + t.length !== this.index)
    ) {
      const r = this.index;
      (this.index = n),
        this.tolerateUnexpectedToken(x.InvalidEscapedReservedWord),
        (this.index = r);
    }
    return {
      type: e,
      value: t,
      lineNumber: this.lineNumber,
      lineStart: this.lineStart,
      start: n,
      end: this.index,
    };
  }
  scanPunctuator() {
    const e = this.index;
    let n = this.source[this.index];
    switch (n) {
      case "(":
      case "{":
        n === "{" && this.curlyStack.push("{"), ++this.index;
        break;
      case ".":
      case ")":
      case ";":
      case ",":
      case "[":
      case "]":
      case ":":
      case "?":
      case "~":
        ++this.index;
        break;
      case "}":
        ++this.index, this.curlyStack.pop();
        break;
      default:
        for (let t = He.length; t > 0; t--)
          if (
            ((n = this.source.substring(this.index, this.index + t)),
            He[t - 1].includes(n))
          ) {
            this.index += t;
            break;
          }
    }
    return (
      this.index === e && this.throwUnexpectedToken(),
      {
        type: b.Punctuator,
        value: n,
        lineNumber: this.lineNumber,
        lineStart: this.lineStart,
        start: e,
        end: this.index,
      }
    );
  }
  scanHexLiteral(e) {
    let n = "";
    for (; !this.eof() && R.isHexDigit(this.source.charCodeAt(this.index)); )
      n += this.source[this.index++];
    return (
      n.length === 0 && this.throwUnexpectedToken(),
      R.isIdentifierStart(this.source.charCodeAt(this.index)) &&
        this.throwUnexpectedToken(),
      {
        type: b.NumericLiteral,
        value: parseInt("0x" + n, 16),
        lineNumber: this.lineNumber,
        lineStart: this.lineStart,
        start: e,
        end: this.index,
      }
    );
  }
  scanBinaryLiteral(e) {
    let n = "";
    for (; !this.eof(); ) {
      const t = this.source[this.index];
      if (t !== "0" && t !== "1") break;
      n += this.source[this.index++];
    }
    if ((n.length === 0 && this.throwUnexpectedToken(), !this.eof())) {
      const t = this.source.charCodeAt(this.index);
      (R.isIdentifierStart(t) || R.isDecimalDigit(t)) &&
        this.throwUnexpectedToken();
    }
    return {
      type: b.NumericLiteral,
      value: parseInt(n, 2),
      lineNumber: this.lineNumber,
      lineStart: this.lineStart,
      start: e,
      end: this.index,
    };
  }
  scanOctalLiteral(e, n) {
    let t = "",
      r = !1;
    for (
      R.isOctalDigit(e.charCodeAt(0))
        ? ((r = !0), (t = "0" + this.source[this.index++]))
        : ++this.index;
      !this.eof() && R.isOctalDigit(this.source.charCodeAt(this.index));

    )
      t += this.source[this.index++];
    return (
      r || t.length !== 0 || this.throwUnexpectedToken(),
      (R.isIdentifierStart(this.source.charCodeAt(this.index)) ||
        R.isDecimalDigit(this.source.charCodeAt(this.index))) &&
        this.throwUnexpectedToken(),
      {
        type: b.NumericLiteral,
        value: parseInt(t, 8),
        lineNumber: this.lineNumber,
        lineStart: this.lineStart,
        start: n,
        end: this.index,
      }
    );
  }
  scanNumericLiteral() {
    const e = this.index;
    let n = this.source[e];
    Hr(
      R.isDecimalDigit(n.charCodeAt(0)) || n === ".",
      "Numeric literal must start with a decimal digit or a decimal point"
    );
    let t = "";
    if (n !== ".") {
      if (
        ((t = this.source[this.index++]),
        (n = this.source[this.index]),
        t === "0")
      ) {
        if (n === "x" || n === "X") return ++this.index, this.scanHexLiteral(e);
        if (n === "b" || n === "B")
          return ++this.index, this.scanBinaryLiteral(e);
        if (n === "o" || n === "O") return this.scanOctalLiteral(n, e);
      }
      for (; R.isDecimalDigit(this.source.charCodeAt(this.index)); )
        t += this.source[this.index++];
      n = this.source[this.index];
    }
    if (n === ".") {
      for (
        t += this.source[this.index++];
        R.isDecimalDigit(this.source.charCodeAt(this.index));

      )
        t += this.source[this.index++];
      n = this.source[this.index];
    }
    if (n === "e" || n === "E")
      if (
        ((t += this.source[this.index++]),
        (n = this.source[this.index]),
        (n !== "+" && n !== "-") || (t += this.source[this.index++]),
        R.isDecimalDigit(this.source.charCodeAt(this.index)))
      )
        for (; R.isDecimalDigit(this.source.charCodeAt(this.index)); )
          t += this.source[this.index++];
      else this.throwUnexpectedToken();
    return (
      R.isIdentifierStart(this.source.charCodeAt(this.index)) &&
        this.throwUnexpectedToken(),
      {
        type: b.NumericLiteral,
        value: parseFloat(t),
        lineNumber: this.lineNumber,
        lineStart: this.lineStart,
        start: e,
        end: this.index,
      }
    );
  }
  scanStringLiteral() {
    const e = this.index;
    let n = this.source[e];
    Hr(n === "'" || n === '"', "String literal must starts with a quote"),
      ++this.index;
    let t = !1,
      r = "";
    for (; !this.eof(); ) {
      let i = this.source[this.index++];
      if (i === n) {
        n = "";
        break;
      }
      if (i === "\\")
        if (
          ((i = this.source[this.index++]),
          i && R.isLineTerminator(i.charCodeAt(0)))
        )
          ++this.lineNumber,
            i === "\r" &&
              this.source[this.index] ===
                `
` &&
              ++this.index,
            (this.lineStart = this.index);
        else
          switch (i) {
            case "u":
              if (this.source[this.index] === "{")
                ++this.index, (r += this.scanUnicodeCodePointEscape());
              else {
                const u = this.scanHexEscape(i);
                u === null && this.throwUnexpectedToken(), (r += u);
              }
              break;
            case "x": {
              const u = this.scanHexEscape(i);
              u === null &&
                this.throwUnexpectedToken(x.InvalidHexEscapeSequence),
                (r += u);
              break;
            }
            case "n":
              r += `
`;
              break;
            case "r":
              r += "\r";
              break;
            case "t":
              r += "	";
              break;
            case "b":
              r += "\b";
              break;
            case "f":
              r += "\f";
              break;
            case "v":
              r += "\v";
              break;
            case "8":
            case "9":
              (r += i), this.tolerateUnexpectedToken();
              break;
            default:
              if (i && R.isOctalDigit(i.charCodeAt(0))) {
                const u = this.octalToDecimal(i);
                (t = u.octal || t), (r += String.fromCharCode(u.code));
              } else r += i;
          }
      else {
        if (R.isLineTerminator(i.charCodeAt(0))) break;
        r += i;
      }
    }
    return (
      n !== "" && ((this.index = e), this.throwUnexpectedToken()),
      {
        type: b.StringLiteral,
        value: r,
        lineNumber: this.lineNumber,
        lineStart: this.lineStart,
        start: e,
        end: this.index,
      }
    );
  }
  scanTemplate() {
    let e = "",
      n = !1;
    const t = this.index,
      r = this.source[t] === "`";
    let i = !1,
      u = 2;
    for (++this.index; !this.eof(); ) {
      let a = this.source[this.index++];
      if (a === "`") {
        (u = 1), (i = !0), (n = !0);
        break;
      }
      if (a !== "$")
        if (a !== "\\")
          R.isLineTerminator(a.charCodeAt(0))
            ? (++this.lineNumber,
              a === "\r" &&
                this.source[this.index] ===
                  `
` &&
                ++this.index,
              (this.lineStart = this.index),
              (e += `
`))
            : (e += a);
        else if (
          ((a = this.source[this.index++]), R.isLineTerminator(a.charCodeAt(0)))
        )
          ++this.lineNumber,
            a === "\r" &&
              this.source[this.index] ===
                `
` &&
              ++this.index,
            (this.lineStart = this.index);
        else
          switch (a) {
            case "n":
              e += `
`;
              break;
            case "r":
              e += "\r";
              break;
            case "t":
              e += "	";
              break;
            case "u":
              if (this.source[this.index] === "{")
                ++this.index, (e += this.scanUnicodeCodePointEscape());
              else {
                const s = this.index,
                  o = this.scanHexEscape(a);
                o !== null ? (e += o) : ((this.index = s), (e += a));
              }
              break;
            case "x": {
              const s = this.scanHexEscape(a);
              s === null &&
                this.throwUnexpectedToken(x.InvalidHexEscapeSequence),
                (e += s);
              break;
            }
            case "b":
              e += "\b";
              break;
            case "f":
              e += "\f";
              break;
            case "v":
              e += "\v";
              break;
            default:
              a === "0"
                ? (R.isDecimalDigit(this.source.charCodeAt(this.index)) &&
                    this.throwUnexpectedToken(x.TemplateOctalLiteral),
                  (e += "\0"))
                : R.isOctalDigit(a.charCodeAt(0))
                ? this.throwUnexpectedToken(x.TemplateOctalLiteral)
                : (e += a);
          }
      else {
        if (this.source[this.index] === "{") {
          this.curlyStack.push("${"), ++this.index, (n = !0);
          break;
        }
        e += a;
      }
    }
    return (
      n || this.throwUnexpectedToken(),
      r || this.curlyStack.pop(),
      {
        type: b.Template,
        value: this.source.slice(t + 1, this.index - u),
        cooked: e,
        head: r,
        tail: i,
        lineNumber: this.lineNumber,
        lineStart: this.lineStart,
        start: t,
        end: this.index,
      }
    );
  }
  lex() {
    if (this.eof())
      return {
        type: b.EOF,
        value: "",
        lineNumber: this.lineNumber,
        lineStart: this.lineStart,
        start: this.index,
        end: this.index,
      };
    const e = this.source.charCodeAt(this.index);
    return R.isIdentifierStart(e)
      ? this.scanIdentifier()
      : e === 40 || e === 41 || e === 59
      ? this.scanPunctuator()
      : e === 39 || e === 34
      ? this.scanStringLiteral()
      : e === 46
      ? R.isDecimalDigit(this.source.charCodeAt(this.index + 1))
        ? this.scanNumericLiteral()
        : this.scanPunctuator()
      : R.isDecimalDigit(e)
      ? this.scanNumericLiteral()
      : e === 96 ||
        (e === 125 && this.curlyStack[this.curlyStack.length - 1] === "${")
      ? this.scanTemplate()
      : e >= 55296 &&
        e < 57343 &&
        R.isIdentifierStart(this.codePointAt(this.index))
      ? this.scanIdentifier()
      : this.scanPunctuator();
  }
};
var ce, vt;
function $r(e, n = 0) {
  let t = e.start - e.lineStart,
    r = e.lineNumber;
  return t < 0 && ((t += n), r--), { index: e.start, line: r, column: t };
}
function Yr(e) {
  return [
    { index: e.range[0], ...e.loc.start },
    { index: e.range[1], ...e.loc.end },
  ];
}
function Xr(e) {
  return Va[e] ?? 0;
}
(function (e) {
  (e[(e.None = 0)] = "None"),
    (e[(e.Function = 1)] = "Function"),
    (e[(e.IfClause = 2)] = "IfClause"),
    (e[(e.ForLoop = 4)] = "ForLoop"),
    (e[(e.WhileLoop = 8)] = "WhileLoop");
})(ce || (ce = {})),
  (function (e) {
    (e[(e.AsObject = 0)] = "AsObject"), (e[(e.Automatic = 1)] = "Automatic");
  })(vt || (vt = {}));
class Qa {
  constructor(n, t = {}, r) {
    (this.delegate = r),
      (this.hasLineTerminator = !1),
      (this.options = {
        tokens: typeof t.tokens == "boolean" && t.tokens,
        comments: typeof t.comments == "boolean" && t.comments,
        tolerant: typeof t.tolerant == "boolean" && t.tolerant,
      }),
      this.options.comments &&
        (this.commentHandler = new (class {
          constructor() {
            (this.comments = []),
              (this._nodeStack = []),
              (this._newComments = []);
          }
          insertInnerComments(i) {
            if (!Zr(i) || i.body.length !== 0) return;
            const u = [];
            for (let a = this._newComments.length - 1; a >= 0; --a) {
              const s = this._newComments[a];
              i.range[1] >= s.range[0] &&
                (u.unshift(s), this._newComments.splice(a, 1));
            }
            u.length && (i.innerComments = u);
          }
          attachTrailingComments(i) {
            if (!i) return;
            const u = this._nodeStack[this._nodeStack.length - 1];
            if (Zr(i) && Vr(u, i))
              for (let s = this._newComments.length - 1; s >= 0; --s) {
                const o = this._newComments[s];
                Vr(o, i) &&
                  ((u.trailingComments = [...(u.trailingComments ?? []), o]),
                  this._newComments.splice(s, 1));
              }
            let a = [];
            if (this._newComments.length > 0)
              for (let s = this._newComments.length - 1; s >= 0; --s) {
                const o = this._newComments[s];
                xn(o, u)
                  ? ((u.trailingComments = [...(u.trailingComments ?? []), o]),
                    this._newComments.splice(s, 1))
                  : xn(o, i) && (a.unshift(o), this._newComments.splice(s, 1));
              }
            u != null &&
              u.trailingComments &&
              xn(u.trailingComments[0], i) &&
              ((a = [...a, ...u.trailingComments]), delete u.trailingComments),
              a.length > 0 && (i.trailingComments = a);
          }
          attachLeadingComments(i) {
            var o, c;
            if (!i) return;
            let u;
            for (; this._nodeStack.length > 0; ) {
              const l = this._nodeStack[this._nodeStack.length - 1];
              if (!(i.range[0] <= l.range[0])) break;
              (u = l), this._nodeStack.pop();
            }
            const a = [],
              s = [];
            if (u) {
              for (
                let l =
                  (((o = u.leadingComments) == null ? void 0 : o.length) ?? 0) -
                  1;
                l >= 0;
                --l
              ) {
                const d = u.leadingComments[l];
                i.range[0] >= d.range[1]
                  ? (a.unshift(d), u.leadingComments.splice(l, 1))
                  : Ya(i) &&
                    !Ka(d) &&
                    (s.unshift(d), u.leadingComments.splice(l, 1));
              }
              return (
                ((c = u.leadingComments) == null ? void 0 : c.length) === 0 &&
                  delete u.leadingComments,
                a.length && (i.leadingComments = a),
                void (
                  s.length &&
                  (i.trailingComments = [...s, ...(i.trailingComments ?? [])])
                )
              );
            }
            for (let l = this._newComments.length - 1; l >= 0; --l) {
              const d = this._newComments[l];
              i.range[0] >= d.range[0] &&
                (a.unshift(d), this._newComments.splice(l, 1));
            }
            a.length && (i.leadingComments = a);
          }
          attachComments(i) {
            if (
              (function (u) {
                return (u == null ? void 0 : u.type) === C.Program;
              })(i) &&
              i.body.length > 0
            ) {
              const u = this._nodeStack[this._nodeStack.length - 1];
              return u
                ? ((u.trailingComments = [
                    ...(u.trailingComments ?? []),
                    ...this._newComments,
                  ]),
                  (this._newComments.length = 0),
                  void this._nodeStack.pop())
                : ((i.trailingComments = [...this._newComments]),
                  void (this._newComments.length = 0));
            }
            this.attachTrailingComments(i),
              this.attachLeadingComments(i),
              this.insertInnerComments(i),
              this._nodeStack.push(i);
          }
          collectComment(i) {
            this.comments.push(i), this._newComments.push(i);
          }
        })()),
      (this.errorHandler = new (class {
        constructor(i = !1) {
          (this.tolerant = i), (this.errors = []);
        }
        recordError(i) {
          this.errors.push(i);
        }
        tolerate(i) {
          if (!this.tolerant) throw i;
          this.recordError(i);
        }
        throwError(i) {
          throw (
            ((i.description = i.description ?? Fn(i.code, i.data)), new We(i))
          );
        }
        tolerateError(i) {
          i.description = i.description ?? Fn(i.code, i.data);
          const u = new We(i);
          if (!this.tolerant) throw u;
          this.recordError(u);
        }
      })(this.options.tolerant)),
      (this.scanner = new Xa(n, this.errorHandler)),
      (this.context = {
        isAssignmentTarget: !1,
        blockContext: ce.None,
        curlyParsingType: vt.AsObject,
      }),
      (this.rawToken = {
        type: b.EOF,
        value: "",
        lineNumber: this.scanner.lineNumber,
        lineStart: 0,
        start: 0,
        end: 0,
      }),
      (this.tokens = []),
      (this.startMarker = {
        index: 0,
        line: this.scanner.lineNumber,
        column: 0,
      }),
      (this.endMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }),
      this.readNextRawToken(),
      (this.endMarker = {
        index: this.scanner.index,
        line: this.scanner.lineNumber,
        column: this.scanner.index - this.scanner.lineStart,
      });
  }
  throwIfInvalidType(n, t, { validTypes: r, invalidTypes: i }) {
    (r != null && r.some((u) => n.type === u)) ||
      (i != null &&
        i.some((u) => n.type === u) &&
        this.throwError(x.InvalidExpression, t));
  }
  throwError(n, t, r = this.endMarker) {
    const { index: i, line: u, column: a } = t,
      s = r.index - i - 1;
    this.errorHandler.throwError({
      code: n,
      index: i,
      line: u,
      column: a + 1,
      len: s,
    });
  }
  tolerateError(n, t) {
    throw new Error("######################################### !!!");
  }
  unexpectedTokenError(n = {}) {
    const { rawToken: t } = n;
    let r,
      { code: i, data: u } = n;
    if (t) {
      if (!i)
        switch (t.type) {
          case b.EOF:
            i = x.UnexpectedEndOfScript;
            break;
          case b.Identifier:
            i = x.UnexpectedIdentifier;
            break;
          case b.NumericLiteral:
            i = x.UnexpectedNumber;
            break;
          case b.StringLiteral:
            i = x.UnexpectedString;
            break;
          case b.Template:
            i = x.UnexpectedTemplate;
        }
      r = t.value.toString();
    } else r = "ILLEGAL";
    (i = i ?? x.UnexpectedToken), u || (u = { value: r });
    const a = Fn(i, u);
    if (t) {
      const c = t.start,
        l = t.lineNumber,
        d = t.start - t.lineStart + 1;
      return new We({
        code: i,
        index: c,
        line: l,
        column: d,
        len: t.end - t.start - 1,
        data: u,
        description: a,
      });
    }
    const { index: s, line: o } = this.endMarker;
    return new We({
      code: i,
      index: s,
      line: o,
      column: this.endMarker.column + 1,
      data: u,
      description: a,
    });
  }
  throwUnexpectedToken(n = {}) {
    throw (
      ((n.rawToken = n.rawToken ?? this.rawToken), this.unexpectedTokenError(n))
    );
  }
  collectComments(n) {
    const { commentHandler: t } = this;
    t &&
      n.length &&
      n.forEach((r) => {
        const i = {
          type: r.multiLine ? C.BlockComment : C.LineComment,
          value: this.getSourceValue(r),
          range: r.range,
          loc: r.loc,
        };
        t.collectComment(i);
      });
  }
  peekAhead(n) {
    const t = this.scanner.saveState(),
      r = n.call(this, () => (this.scanner.scanComments(), this.scanner.lex()));
    return this.scanner.restoreState(t), r;
  }
  getSourceValue(n) {
    return this.scanner.source.slice(n.start, n.end);
  }
  convertToToken(n) {
    return {
      type: Ha[n.type],
      value: this.getSourceValue(n),
      range: [n.start, n.end],
      loc: {
        start: { line: this.startMarker.line, column: this.startMarker.column },
        end: {
          line: this.scanner.lineNumber,
          column: this.scanner.index - this.scanner.lineStart,
        },
      },
    };
  }
  readNextRawToken() {
    (this.endMarker.index = this.scanner.index),
      (this.endMarker.line = this.scanner.lineNumber),
      (this.endMarker.column = this.scanner.index - this.scanner.lineStart);
    const n = this.rawToken;
    this.collectComments(this.scanner.scanComments()),
      this.scanner.index !== this.startMarker.index &&
        ((this.startMarker.index = this.scanner.index),
        (this.startMarker.line = this.scanner.lineNumber),
        (this.startMarker.column =
          this.scanner.index - this.scanner.lineStart)),
      (this.rawToken = this.scanner.lex()),
      (this.hasLineTerminator = n.lineNumber !== this.rawToken.lineNumber),
      this.options.tokens &&
        this.rawToken.type !== b.EOF &&
        this.tokens.push(this.convertToToken(this.rawToken));
  }
  captureStartMarker() {
    return {
      index: this.startMarker.index,
      line: this.startMarker.line,
      column: this.startMarker.column,
    };
  }
  getItemLocation(n) {
    return {
      range: [n.index, this.endMarker.index],
      loc: {
        start: { line: n.line, column: n.column },
        end: { line: this.endMarker.line, column: this.endMarker.column },
      },
    };
  }
  finalize(n) {
    var t, r;
    return (
      (this.delegate || this.commentHandler) &&
        ((t = this.commentHandler) == null || t.attachComments(n),
        (r = this.delegate) == null || r.call(this, n)),
      n
    );
  }
  expectPunctuator(n) {
    const t = this.rawToken;
    this.matchPunctuator(n)
      ? this.readNextRawToken()
      : this.throwUnexpectedToken({
          rawToken: t,
          code: x.PunctuatorExpected,
          data: { value: n },
        });
  }
  expectKeyword(n) {
    this.rawToken.type !== b.Keyword || this.rawToken.value.toLowerCase() !== n
      ? this.throwUnexpectedToken({ rawToken: this.rawToken })
      : this.readNextRawToken();
  }
  expectContextualKeyword(n) {
    this.rawToken.type !== b.Identifier ||
    this.rawToken.value.toLowerCase() !== n
      ? this.throwUnexpectedToken({ rawToken: this.rawToken })
      : this.readNextRawToken();
  }
  matchKeyword(n) {
    return (
      this.rawToken.type === b.Keyword &&
      this.rawToken.value.toLowerCase() === n
    );
  }
  matchContextualKeyword(n) {
    return this.rawToken.type === b.Identifier && this.rawToken.value === n;
  }
  matchPunctuator(n) {
    return this.rawToken.type === b.Punctuator && this.rawToken.value === n;
  }
  getMatchingPunctuator(n) {
    if (
      (typeof n == "string" && (n = n.split("")),
      this.rawToken.type === b.Punctuator && (n == null ? void 0 : n.length))
    )
      return n.find(this.matchPunctuator, this);
  }
  isolateCoverGrammar(n) {
    const t = this.context.isAssignmentTarget;
    this.context.isAssignmentTarget = !0;
    const r = n.call(this);
    return (this.context.isAssignmentTarget = t), r;
  }
  inheritCoverGrammar(n) {
    const t = this.context.isAssignmentTarget;
    this.context.isAssignmentTarget = !0;
    const r = n.call(this);
    return (
      (this.context.isAssignmentTarget = this.context.isAssignmentTarget && t),
      r
    );
  }
  withBlockContext(n, t) {
    const r = this.context.blockContext;
    this.context.blockContext = this.context.blockContext | n;
    const i = this.context.curlyParsingType;
    this.context.curlyParsingType = vt.Automatic;
    const u = t.call(this);
    return (
      (this.context.blockContext = r), (this.context.curlyParsingType = i), u
    );
  }
  consumeSemicolon() {
    if (this.matchPunctuator(";")) this.readNextRawToken();
    else if (!this.hasLineTerminator)
      return this.rawToken.type === b.EOF || this.matchPunctuator("}")
        ? ((this.endMarker.index = this.startMarker.index),
          (this.endMarker.line = this.startMarker.line),
          void (this.endMarker.column = this.startMarker.column))
        : void this.throwUnexpectedToken({ rawToken: this.rawToken });
  }
  parsePrimaryExpression() {
    const n = this.captureStartMarker(),
      t = this.rawToken;
    switch (t.type) {
      case b.Identifier:
        return (
          this.readNextRawToken(),
          this.finalize({
            type: C.Identifier,
            name: t.value,
            ...this.getItemLocation(n),
          })
        );
      case b.NumericLiteral:
      case b.StringLiteral:
        return (
          (this.context.isAssignmentTarget = !1),
          this.readNextRawToken(),
          this.finalize({
            type: C.Literal,
            value: t.value,
            raw: this.getSourceValue(t),
            isString: typeof t.value == "string",
            ...this.getItemLocation(n),
          })
        );
      case b.BooleanLiteral:
        return (
          (this.context.isAssignmentTarget = !1),
          this.readNextRawToken(),
          this.finalize({
            type: C.Literal,
            value: t.value.toLowerCase() === M.True,
            raw: this.getSourceValue(t),
            isString: !1,
            ...this.getItemLocation(n),
          })
        );
      case b.NullLiteral:
        return (
          (this.context.isAssignmentTarget = !1),
          this.readNextRawToken(),
          this.finalize({
            type: C.Literal,
            value: null,
            raw: this.getSourceValue(t),
            isString: !1,
            ...this.getItemLocation(n),
          })
        );
      case b.Template:
        return this.parseTemplateLiteral();
      case b.Punctuator:
        switch (t.value) {
          case "(":
            return this.inheritCoverGrammar(this.parseGroupExpression);
          case "[":
            return this.inheritCoverGrammar(this.parseArrayInitializer);
          case "{":
            return this.inheritCoverGrammar(this.parseObjectExpression);
          default:
            return this.throwUnexpectedToken({ rawToken: this.rawToken });
        }
      case b.Keyword:
        return (
          (this.context.isAssignmentTarget = !1),
          this.throwUnexpectedToken({ rawToken: this.rawToken })
        );
      default:
        return this.throwUnexpectedToken({ rawToken: this.rawToken });
    }
  }
  parseArrayInitializer() {
    const n = this.captureStartMarker();
    this.expectPunctuator("[");
    const t = [];
    for (; !this.matchPunctuator("]"); ) {
      const r = this.captureStartMarker();
      this.matchPunctuator(",")
        ? (this.readNextRawToken(), this.throwError(x.InvalidExpression, r))
        : (t.push(this.inheritCoverGrammar(this.parseAssignmentExpression)),
          this.matchPunctuator("]") || this.expectPunctuator(","));
    }
    return (
      this.expectPunctuator("]"),
      this.finalize({
        type: C.ArrayExpression,
        elements: t,
        ...this.getItemLocation(n),
      })
    );
  }
  parseObjectPropertyKey() {
    const n = this.captureStartMarker(),
      t = this.rawToken;
    switch (t.type) {
      case b.StringLiteral:
        return (
          this.readNextRawToken(),
          this.finalize({
            type: C.Literal,
            value: t.value,
            raw: this.getSourceValue(t),
            isString: !0,
            ...this.getItemLocation(n),
          })
        );
      case b.Identifier:
      case b.BooleanLiteral:
      case b.NullLiteral:
      case b.Keyword:
        return (
          this.readNextRawToken(),
          this.finalize({
            type: C.Identifier,
            name: t.value,
            ...this.getItemLocation(n),
          })
        );
      default:
        this.throwError(x.KeyMustBeString, n);
    }
  }
  parseObjectProperty() {
    const n = this.rawToken,
      t = this.captureStartMarker(),
      r = this.parseObjectPropertyKey();
    let i = !1,
      u = null;
    return (
      this.matchPunctuator(":")
        ? (this.readNextRawToken(),
          (u = this.inheritCoverGrammar(this.parseAssignmentExpression)))
        : n.type === b.Identifier
        ? ((i = !0),
          (u = this.finalize({
            type: C.Identifier,
            name: n.value,
            ...this.getItemLocation(t),
          })))
        : this.throwUnexpectedToken({ rawToken: this.rawToken }),
      this.finalize({
        type: C.Property,
        kind: "init",
        key: r,
        value: u,
        shorthand: i,
        ...this.getItemLocation(t),
      })
    );
  }
  parseObjectExpression() {
    const n = this.captureStartMarker();
    this.expectPunctuator("{");
    const t = [];
    for (; !this.matchPunctuator("}"); )
      t.push(this.parseObjectProperty()),
        this.matchPunctuator("}") || this.expectPunctuator(",");
    return (
      this.expectPunctuator("}"),
      this.finalize({
        type: C.ObjectExpression,
        properties: t,
        ...this.getItemLocation(n),
      })
    );
  }
  parseTemplateElement(n = !1) {
    const t = this.rawToken;
    t.type !== b.Template && this.throwUnexpectedToken({ rawToken: t }),
      n &&
        !t.head &&
        this.throwUnexpectedToken({ code: x.InvalidTemplateHead, rawToken: t });
    const r = this.captureStartMarker();
    this.readNextRawToken();
    const { value: i, cooked: u, tail: a } = t,
      s = this.finalize({
        type: C.TemplateElement,
        value: { raw: i, cooked: u },
        tail: a,
        ...this.getItemLocation(r),
      });
    return (
      s.loc.start.column++,
      (s.loc.end.column = s.loc.end.column - (a ? 1 : 2)),
      s
    );
  }
  parseTemplateLiteral() {
    const n = this.captureStartMarker(),
      t = [],
      r = [];
    let i = this.parseTemplateElement(!0);
    for (r.push(i); !i.tail; )
      t.push(this.parseExpression()),
        (i = this.parseTemplateElement()),
        r.push(i);
    return this.finalize({
      type: C.TemplateLiteral,
      quasis: r,
      expressions: t,
      ...this.getItemLocation(n),
    });
  }
  parseGroupExpression() {
    this.expectPunctuator("(");
    const n = this.inheritCoverGrammar(this.parseAssignmentExpression);
    return this.expectPunctuator(")"), n;
  }
  parseArguments() {
    this.expectPunctuator("(");
    const n = [];
    if (!this.matchPunctuator(")"))
      for (;;) {
        const t = this.isolateCoverGrammar(this.parseAssignmentExpression);
        if (
          (n.push(t),
          this.matchPunctuator(")") ||
            (this.expectPunctuator(","), this.matchPunctuator(")")))
        )
          break;
      }
    return this.expectPunctuator(")"), n;
  }
  parseMemberName() {
    const n = this.rawToken,
      t = this.captureStartMarker();
    return (
      this.readNextRawToken(),
      n.type !== b.NullLiteral &&
        n.type !== b.Identifier &&
        n.type !== b.Keyword &&
        n.type !== b.BooleanLiteral &&
        this.throwUnexpectedToken({ rawToken: n }),
      this.finalize({
        type: C.Identifier,
        name: n.value,
        ...this.getItemLocation(t),
      })
    );
  }
  parseLeftHandSideExpression() {
    const n = this.captureStartMarker();
    let t = this.inheritCoverGrammar(this.parsePrimaryExpression);
    const r = this.captureStartMarker();
    let i;
    for (; (i = this.getMatchingPunctuator("([.")); )
      switch (i) {
        case "(": {
          (this.context.isAssignmentTarget = !1),
            t.type !== C.Identifier &&
              t.type !== C.MemberExpression &&
              this.throwError(x.IdentiferExpected, n, r);
          const u = this.parseArguments();
          t = this.finalize({
            type: C.CallExpression,
            callee: t,
            arguments: u,
            ...this.getItemLocation(n),
          });
          continue;
        }
        case "[": {
          (this.context.isAssignmentTarget = !0), this.expectPunctuator("[");
          const u = this.isolateCoverGrammar(this.parseExpression);
          this.expectPunctuator("]"),
            (t = this.finalize({
              type: C.MemberExpression,
              computed: !0,
              object: t,
              property: u,
              ...this.getItemLocation(n),
            }));
          continue;
        }
        case ".": {
          (this.context.isAssignmentTarget = !0), this.expectPunctuator(".");
          const u = this.parseMemberName();
          t = this.finalize({
            type: C.MemberExpression,
            computed: !1,
            object: t,
            property: u,
            ...this.getItemLocation(n),
          });
          continue;
        }
      }
    return t;
  }
  parseUpdateExpression() {
    const n = this.captureStartMarker();
    let t = this.getMatchingPunctuator(zn);
    if (t) {
      this.readNextRawToken();
      const a = this.captureStartMarker(),
        s = this.inheritCoverGrammar(this.parseUnaryExpression);
      return (
        s.type !== C.Identifier &&
          s.type !== C.MemberExpression &&
          s.type !== C.CallExpression &&
          this.throwError(x.InvalidExpression, a),
        this.context.isAssignmentTarget ||
          this.tolerateError(x.InvalidLeftHandSideInAssignment, n),
        (this.context.isAssignmentTarget = !1),
        this.finalize({
          type: C.UpdateExpression,
          operator: t,
          argument: s,
          prefix: !0,
          ...this.getItemLocation(n),
        })
      );
    }
    const r = this.captureStartMarker(),
      i = this.inheritCoverGrammar(this.parseLeftHandSideExpression),
      u = this.captureStartMarker();
    return this.hasLineTerminator
      ? i
      : ((t = this.getMatchingPunctuator(zn)),
        t
          ? (i.type !== C.Identifier &&
              i.type !== C.MemberExpression &&
              this.throwError(x.InvalidExpression, r, u),
            this.context.isAssignmentTarget ||
              this.tolerateError(x.InvalidLeftHandSideInAssignment, n),
            this.readNextRawToken(),
            (this.context.isAssignmentTarget = !1),
            this.finalize({
              type: C.UpdateExpression,
              operator: t,
              argument: i,
              prefix: !1,
              ...this.getItemLocation(n),
            }))
          : i);
  }
  parseUnaryExpression() {
    const n = this.getMatchingPunctuator(Mi);
    if (n) {
      const t = this.captureStartMarker();
      this.readNextRawToken();
      const r = this.inheritCoverGrammar(this.parseUnaryExpression);
      return (
        (this.context.isAssignmentTarget = !1),
        this.finalize({
          type: C.UnaryExpression,
          operator: n,
          argument: r,
          prefix: !0,
          ...this.getItemLocation(t),
        })
      );
    }
    return this.parseUpdateExpression();
  }
  parseBinaryExpression() {
    const n = this.rawToken;
    let t = this.inheritCoverGrammar(this.parseUnaryExpression);
    if (this.rawToken.type !== b.Punctuator) return t;
    const r = this.rawToken.value;
    let i = Xr(r);
    if (i === 0) return t;
    this.readNextRawToken(), (this.context.isAssignmentTarget = !1);
    const u = [n, this.rawToken];
    let a = t,
      s = this.inheritCoverGrammar(this.parseUnaryExpression);
    const o = [a, r, s],
      c = [i];
    for (
      ;
      this.rawToken.type === b.Punctuator && (i = Xr(this.rawToken.value)) > 0;

    ) {
      for (; o.length > 2 && i <= c[c.length - 1]; ) {
        s = o.pop();
        const p = o.pop();
        c.pop(), (a = o.pop()), u.pop();
        const g = u[u.length - 1],
          F = $r(g, g.lineStart);
        o.push(this.finalize(this.createBinaryOrLogicalExpression(F, p, a, s)));
      }
      o.push(this.rawToken.value),
        c.push(i),
        u.push(this.rawToken),
        this.readNextRawToken(),
        o.push(this.inheritCoverGrammar(this.parseUnaryExpression));
    }
    let l = o.length - 1;
    t = o[l];
    let d = u.pop();
    for (; l > 1; ) {
      const p = u.pop();
      if (!p) break;
      const g = d == null ? void 0 : d.lineStart,
        F = $r(p, g),
        w = o[l - 1];
      (t = this.finalize(
        this.createBinaryOrLogicalExpression(F, w, o[l - 2], t)
      )),
        (l -= 2),
        (d = p);
    }
    return t;
  }
  createBinaryOrLogicalExpression(n, t, r, i) {
    const u = Li.includes(t) ? C.LogicalExpression : C.BinaryExpression;
    return (
      u === C.BinaryExpression ||
        ((r.type !== C.AssignmentExpression && r.type !== C.UpdateExpression) ||
          this.throwError(x.InvalidExpression, ...Yr(r)),
        (i.type !== C.AssignmentExpression && i.type !== C.UpdateExpression) ||
          this.throwError(x.InvalidExpression, ...Yr(r))),
      { type: u, operator: t, left: r, right: i, ...this.getItemLocation(n) }
    );
  }
  parseAssignmentExpression() {
    const n = this.captureStartMarker(),
      t = this.inheritCoverGrammar(this.parseBinaryExpression),
      r = this.captureStartMarker(),
      i = this.getMatchingPunctuator(Ni);
    if (!i) return t;
    t.type !== C.Identifier &&
      t.type !== C.MemberExpression &&
      this.throwError(x.InvalidExpression, n, r),
      this.context.isAssignmentTarget ||
        this.tolerateError(x.InvalidLeftHandSideInAssignment, n),
      this.matchPunctuator("=") || (this.context.isAssignmentTarget = !1),
      this.readNextRawToken();
    const u = this.isolateCoverGrammar(this.parseAssignmentExpression);
    return this.finalize({
      type: C.AssignmentExpression,
      left: t,
      operator: i,
      right: u,
      ...this.getItemLocation(n),
    });
  }
  parseExpression() {
    return this.isolateCoverGrammar(this.parseAssignmentExpression);
  }
  parseStatements(n) {
    const t = [];
    for (; this.rawToken.type !== b.EOF && !this.matchPunctuator(n); ) {
      const r = this.parseStatementListItem();
      $a(r) || t.push(r);
    }
    return t;
  }
  parseStatementListItem() {
    return (
      (this.context.isAssignmentTarget = !0),
      this.matchKeyword(M.Function)
        ? this.parseFunctionDeclaration()
        : this.matchKeyword(M.Export)
        ? this.parseExportDeclaration()
        : this.matchKeyword(M.Import)
        ? this.parseImportDeclaration()
        : this.parseStatement()
    );
  }
  parseBlock() {
    const n = this.captureStartMarker();
    this.expectPunctuator("{");
    const t = this.parseStatements("}");
    return (
      this.expectPunctuator("}"),
      this.finalize({
        type: C.BlockStatement,
        body: t,
        ...this.getItemLocation(n),
      })
    );
  }
  parseObjectStatement() {
    const n = this.captureStartMarker(),
      t = this.parseObjectExpression();
    return this.finalize({
      type: C.ExpressionStatement,
      expression: t,
      ...this.getItemLocation(n),
    });
  }
  parseBlockOrObjectStatement() {
    return this.context.curlyParsingType === vt.AsObject ||
      this.peekAhead((n) => {
        let t = n();
        return (
          (t.type === b.Identifier || t.type === b.StringLiteral) &&
          ((t = n()), t.type === b.Punctuator && t.value === ":")
        );
      })
      ? this.parseObjectStatement()
      : this.parseBlock();
  }
  parseIdentifier() {
    const n = this.rawToken;
    if (n.type !== b.Identifier) return null;
    const t = this.captureStartMarker();
    return (
      this.readNextRawToken(),
      this.finalize({
        type: C.Identifier,
        name: n.value,
        ...this.getItemLocation(t),
      })
    );
  }
  parseVariableDeclarator() {
    const n = this.captureStartMarker(),
      t = this.parseIdentifier();
    t || this.throwUnexpectedToken({ code: x.IdentiferExpected });
    let r = null;
    if (this.matchPunctuator("=")) {
      this.readNextRawToken();
      const i = this.rawToken;
      try {
        r = this.isolateCoverGrammar(this.parseAssignmentExpression);
      } catch {
        this.throwUnexpectedToken({
          rawToken: i,
          code: x.InvalidVariableAssignment,
        });
      }
    }
    return this.finalize({
      type: C.VariableDeclarator,
      id: t,
      init: r,
      ...this.getItemLocation(n),
    });
  }
  parseVariableDeclarationList() {
    const n = [this.parseVariableDeclarator()];
    for (; this.matchPunctuator(","); )
      this.readNextRawToken(), n.push(this.parseVariableDeclarator());
    return n;
  }
  parseVariableDeclaration() {
    const n = this.captureStartMarker();
    this.expectKeyword(M.Var);
    const t = this.parseVariableDeclarationList();
    return (
      this.consumeSemicolon(),
      this.finalize({
        type: C.VariableDeclaration,
        declarations: t,
        kind: "var",
        ...this.getItemLocation(n),
      })
    );
  }
  parseEmptyStatement() {
    const n = this.captureStartMarker();
    return (
      this.expectPunctuator(";"),
      this.finalize({ type: C.EmptyStatement, ...this.getItemLocation(n) })
    );
  }
  parseExpressionStatement() {
    const n = this.captureStartMarker(),
      t = this.parseExpression();
    return (
      this.consumeSemicolon(),
      this.finalize({
        type: C.ExpressionStatement,
        expression: t,
        ...this.getItemLocation(n),
      })
    );
  }
  parseIfClause() {
    return this.withBlockContext(ce.IfClause, this.parseStatement);
  }
  parseIfStatement() {
    const n = this.captureStartMarker();
    this.expectKeyword(M.If), this.expectPunctuator("(");
    const t = this.captureStartMarker(),
      r = this.parseExpression(),
      i = this.captureStartMarker();
    this.expectPunctuator(")"),
      (r.type !== C.AssignmentExpression && r.type !== C.UpdateExpression) ||
        this.throwError(x.InvalidExpression, t, i);
    const u = this.parseIfClause();
    let a = null;
    return (
      this.matchKeyword(M.Else) &&
        (this.readNextRawToken(), (a = this.parseIfClause())),
      this.finalize({
        type: C.IfStatement,
        test: r,
        consequent: u,
        alternate: a,
        ...this.getItemLocation(n),
      })
    );
  }
  parseWhileStatement() {
    const n = this.captureStartMarker();
    this.expectKeyword(M.While), this.expectPunctuator("(");
    const t = this.captureStartMarker(),
      r = this.parseExpression(),
      i = this.captureStartMarker();
    this.expectPunctuator(")"),
      (r.type !== C.AssignmentExpression && r.type !== C.UpdateExpression) ||
        this.throwError(x.InvalidExpression, t, i);
    const u = this.withBlockContext(ce.WhileLoop, this.parseStatement);
    return this.finalize({
      type: C.WhileStatement,
      test: r,
      body: u,
      ...this.getItemLocation(n),
    });
  }
  parseForStatement() {
    let n = null,
      t = null,
      r = null,
      i = null,
      u = null;
    const a = this.captureStartMarker();
    if (
      (this.expectKeyword(M.For),
      this.expectPunctuator("("),
      this.matchPunctuator(";"))
    )
      this.readNextRawToken();
    else if (this.matchKeyword(M.Var)) {
      const o = this.captureStartMarker();
      this.readNextRawToken();
      const c = this.parseVariableDeclarationList();
      c.length === 1 && this.matchKeyword(M.In)
        ? (c[0].init && this.throwError(x.ForInOfLoopInitializer, o),
          (i = this.finalize({
            type: C.VariableDeclaration,
            declarations: c,
            kind: "var",
            ...this.getItemLocation(o),
          })),
          this.readNextRawToken(),
          (u = this.parseExpression()))
        : (this.matchKeyword(M.In) &&
            this.throwError(x.InvalidLeftHandSideInForIn, o),
          (n = this.finalize({
            type: C.VariableDeclaration,
            declarations: c,
            kind: "var",
            ...this.getItemLocation(o),
          })),
          this.expectPunctuator(";"));
    } else {
      const o = this.context.isAssignmentTarget,
        c = this.captureStartMarker();
      (n = this.inheritCoverGrammar(this.parseAssignmentExpression)),
        this.matchKeyword(M.In)
          ? (this.context.isAssignmentTarget ||
              this.tolerateError(x.InvalidLeftHandSideInForIn, c),
            n.type !== C.Identifier &&
              this.throwError(x.InvalidLeftHandSideInForIn, c),
            this.readNextRawToken(),
            (i = n),
            (u = this.parseExpression()),
            (n = null))
          : ((this.context.isAssignmentTarget = o), this.expectPunctuator(";"));
    }
    i ||
      (this.matchPunctuator(";") ||
        (t = this.isolateCoverGrammar(this.parseExpression)),
      this.expectPunctuator(";"),
      this.matchPunctuator(")") ||
        (r = this.isolateCoverGrammar(this.parseExpression))),
      this.expectPunctuator(")");
    const s = this.withBlockContext(ce.ForLoop, () =>
      this.isolateCoverGrammar(this.parseStatement)
    );
    return i && u
      ? this.finalize({
          type: C.ForInStatement,
          left: i,
          right: u,
          body: s,
          ...this.getItemLocation(a),
        })
      : this.finalize({
          type: C.ForStatement,
          init: n,
          test: t,
          update: r,
          body: s,
          ...this.getItemLocation(a),
        });
  }
  parseContinueStatement() {
    const n = this.captureStartMarker();
    return (
      this.expectKeyword(M.Continue),
      this.consumeSemicolon(),
      this.finalize({ type: C.ContinueStatement, ...this.getItemLocation(n) })
    );
  }
  parseBreakStatement() {
    const n = this.captureStartMarker();
    return (
      this.expectKeyword(M.Break),
      this.consumeSemicolon(),
      this.finalize({ type: C.BreakStatement, ...this.getItemLocation(n) })
    );
  }
  parseReturnStatement() {
    const n = this.captureStartMarker();
    this.expectKeyword(M.Return);
    const t =
      (this.matchPunctuator(";") ||
        this.matchPunctuator("}") ||
        this.hasLineTerminator ||
        this.rawToken.type === b.EOF) &&
      this.rawToken.type !== b.StringLiteral &&
      this.rawToken.type !== b.Template
        ? null
        : this.parseExpression();
    return (
      this.consumeSemicolon(),
      this.finalize({
        type: C.ReturnStatement,
        argument: t,
        ...this.getItemLocation(n),
      })
    );
  }
  parseStatement() {
    switch (this.rawToken.type) {
      case b.BooleanLiteral:
      case b.NullLiteral:
      case b.NumericLiteral:
      case b.StringLiteral:
      case b.Template:
      case b.Identifier:
        return this.parseExpressionStatement();
      case b.Punctuator:
        return this.rawToken.value === "{"
          ? this.parseBlockOrObjectStatement()
          : this.rawToken.value === "("
          ? this.parseExpressionStatement()
          : this.rawToken.value === ";"
          ? this.parseEmptyStatement()
          : this.parseExpressionStatement();
      case b.Keyword:
        switch (this.rawToken.value.toLowerCase()) {
          case M.Break:
            return this.parseBreakStatement();
          case M.Continue:
            return this.parseContinueStatement();
          case M.For:
            return this.parseForStatement();
          case M.Function:
            return this.parseFunctionDeclaration();
          case M.If:
            return this.parseIfStatement();
          case M.Return:
            return this.parseReturnStatement();
          case M.Var:
            return this.parseVariableDeclaration();
          case M.While:
            return this.parseWhileStatement();
          default:
            return this.parseExpressionStatement();
        }
      default:
        return this.throwUnexpectedToken({ rawToken: this.rawToken });
    }
  }
  parseFormalParameters() {
    const n = [];
    if ((this.expectPunctuator("("), !this.matchPunctuator(")")))
      for (; this.rawToken.type !== b.EOF; ) {
        const t = this.parseIdentifier();
        if (
          (t ||
            this.throwUnexpectedToken({
              rawToken: this.rawToken,
              code: x.IdentiferExpected,
            }),
          n.push(t),
          this.matchPunctuator(")") ||
            (this.expectPunctuator(","), this.matchPunctuator(")")))
        )
          break;
      }
    return this.expectPunctuator(")"), n;
  }
  parseFunctionDeclaration() {
    (this.context.blockContext & ce.Function) === ce.Function &&
      this.throwUnexpectedToken({ code: x.NoFunctionInsideFunction }),
      ((this.context.blockContext & ce.WhileLoop) !== ce.WhileLoop &&
        (this.context.blockContext & ce.IfClause) !== ce.IfClause) ||
        this.throwUnexpectedToken({ code: x.NoFunctionInsideBlock });
    const n = this.captureStartMarker();
    this.expectKeyword(M.Function);
    const t = this.parseIdentifier();
    t || this.throwUnexpectedToken({ code: x.InvalidFunctionIdentifier });
    const r = this.parseFormalParameters(),
      i = this.context.blockContext;
    this.context.blockContext = this.context.blockContext | ce.Function;
    const u = this.parseBlock();
    return (
      (this.context.blockContext = i),
      this.finalize({
        type: C.FunctionDeclaration,
        id: t,
        params: r,
        body: u,
        ...this.getItemLocation(n),
      })
    );
  }
  parseScript() {
    const n = this.captureStartMarker(),
      t = this.parseStatements(),
      r = this.finalize({
        type: C.Program,
        body: t,
        ...this.getItemLocation(n),
      });
    return (
      this.options.tokens && (r.tokens = this.tokens),
      this.options.tolerant && (r.errors = this.errorHandler.errors),
      r
    );
  }
  parseExportDeclaration() {
    this.context.blockContext !== ce.None &&
      this.throwUnexpectedToken({ code: x.ModuleExportRootOnly });
    let n = null;
    const t = this.captureStartMarker();
    return (
      this.expectKeyword(M.Export),
      this.matchKeyword(M.Var)
        ? (n = this.parseVariableDeclaration())
        : this.matchKeyword("function")
        ? (n = this.parseFunctionDeclaration())
        : this.throwUnexpectedToken({ code: x.InvalidExpression }),
      this.finalize({
        type: C.ExportNamedDeclaration,
        declaration: n,
        specifiers: [],
        source: null,
        ...this.getItemLocation(t),
      })
    );
  }
  parseModuleSpecifier() {
    const n = this.captureStartMarker(),
      t = this.rawToken;
    if (t.type === b.StringLiteral)
      return (
        this.readNextRawToken(),
        this.finalize({
          type: C.Literal,
          value: t.value,
          raw: this.getSourceValue(t),
          isString: !0,
          ...this.getItemLocation(n),
        })
      );
    this.throwError(x.InvalidModuleUri, n);
  }
  parseDefaultSpecifier() {
    const n = this.captureStartMarker(),
      t = this.parseIdentifier();
    return (
      t || this.throwUnexpectedToken({ code: x.IdentiferExpected }),
      this.finalize({
        type: C.ImportDefaultSpecifier,
        local: t,
        ...this.getItemLocation(n),
      })
    );
  }
  parseImportDeclaration() {
    this.context.blockContext !== ce.None &&
      this.throwUnexpectedToken({ code: x.ModuleImportRootOnly });
    const n = this.captureStartMarker();
    this.expectKeyword(M.Import);
    const t = this.parseDefaultSpecifier();
    this.expectContextualKeyword(M.From);
    const r = this.parseModuleSpecifier();
    return this.finalize({
      type: C.ImportDeclaration,
      specifiers: [t],
      source: r,
      ...this.getItemLocation(n),
    });
  }
}
function Ht(e, n = []) {
  const t = (function (r, i, u) {
    return new Qa(r, i, u).parseScript();
  })(e);
  if (t.body === null || t.body === void 0)
    throw new We({
      index: 0,
      line: 0,
      column: 0,
      data: null,
      description: "",
      code: x.InvalidExpression,
    });
  if (t.body.length === 0)
    throw new We({
      index: 0,
      line: 0,
      column: 0,
      data: null,
      description: "",
      code: x.InvalidExpression,
    });
  if (t.body.length === 0)
    throw new We({
      index: 0,
      line: 0,
      column: 0,
      data: null,
      description: "",
      code: x.InvalidExpression,
    });
  return (t.loadedModules = {}), kt(t, n), t;
}
class Wt {
  constructor(n) {
    const t = this;
    (t._keys = []),
      (t._values = []),
      (t.length = 0),
      n &&
        n.forEach((r) => {
          t.set(r[0], r[1]);
        });
  }
  entries() {
    return [].slice.call(this.keys().map((n, t) => [n, this._values[t]]));
  }
  keys() {
    return [].slice.call(this._keys);
  }
  values() {
    return [].slice.call(this._values);
  }
  has(n) {
    return this._keys.includes(n);
  }
  get(n) {
    const t = this._keys.indexOf(n);
    return t > -1 ? this._values[t] : null;
  }
  deepGet(n) {
    if (!n || !n.length) return null;
    const t = (r, i) =>
      r == null
        ? null
        : i.length
        ? t(r instanceof Wt ? r.get(i[0]) : r[i[0]], i.slice(1))
        : r;
    return t(this.get(n[0]), n.slice(1));
  }
  set(n, t) {
    const r = this,
      i = this._keys.indexOf(n);
    return (
      i > -1
        ? (r._values[i] = t)
        : (r._keys.push(n), r._values.push(t), (r.length = r._values.length)),
      this
    );
  }
  sortedSet(n, t, r, i) {
    const u = this,
      a = this._keys.length,
      s = r || 0,
      o = i !== void 0 ? i : a - 1;
    if (a === 0) return u._keys.push(n), u._values.push(t), u;
    if (n === this._keys[s]) return this._values.splice(s, 0, t), this;
    if (n === this._keys[o]) return this._values.splice(o, 0, t), this;
    if (n > this._keys[o])
      return (
        this._keys.splice(o + 1, 0, n), this._values.splice(o + 1, 0, t), this
      );
    if (n < this._keys[s])
      return this._values.splice(s, 0, t), this._keys.splice(s, 0, n), this;
    if (s >= o) return this;
    const c = s + Math.floor((o - s) / 2);
    return n < this._keys[c]
      ? this.sortedSet(n, t, s, c - 1)
      : n > this._keys[c]
      ? this.sortedSet(n, t, c + 1, o)
      : this;
  }
  size() {
    return this.length;
  }
  clear() {
    const n = this;
    return (n._keys.length = n.length = n._values.length = 0), this;
  }
  delete(n) {
    const t = this,
      r = t._keys.indexOf(n);
    return (
      r > -1 &&
      (t._keys.splice(r, 1),
      t._values.splice(r, 1),
      (t.length = t._keys.length),
      !0)
    );
  }
  forEach(n) {
    this._keys.forEach((t, r) => {
      n(this._values[r], t, r);
    });
  }
  map(n) {
    return this.keys().map((t, r) => n(this._values[r], t, r));
  }
  filter(n) {
    const t = this;
    return (
      t._keys.forEach((r, i) => {
        n(t._values[i], r, i) === !1 && t.delete(r);
      }),
      this
    );
  }
  clone() {
    return new Wt(this.entries());
  }
}
class Qr {
  constructor(n = 20) {
    (this._maxEntries = n), (this._values = new Wt());
  }
  delete(n) {
    this._values.has(n) && this._values.delete(n);
  }
  get(n) {
    let t = null;
    return (
      this._values.has(n) &&
        ((t = this._values.get(n)),
        this._values.delete(n),
        this._values.set(n, t)),
      t
    );
  }
  put(n, t) {
    if (this._values.size() >= this._maxEntries) {
      const r = this._values.keys()[0];
      this._values.delete(r);
    }
    this._values.set(n, t);
  }
}
class fe {
  constructor(n) {
    this.portalUri = n;
  }
  normalizeModuleUri(n) {
    const t = /^[a-z0-9A-Z]+(@[0-9]+\.[0-9]+\.[0-9]+)?([\?|\/].*)?$/gi,
      r = /(?<portalurl>.+)\/home\/item\.html\?id\=(?<itemid>.+)$/gi,
      i =
        /(?<portalurl>.+)\/sharing\/rest\/content\/users\/[a-zA-Z0-9]+\/items\/(?<itemid>.+)$/gi,
      u = /(?<portalurl>.+)\/sharing\/rest\/content\/items\/(?<itemid>.+)$/gi,
      a =
        /(?<itemid>.*)@(?<versionstring>[0-9]+\.[0-9]+\.[0-9]+)([\?|\/].*)?$/gi;
    if (n.startsWith("portal+")) {
      let s = n.substring(7),
        o = "",
        c = s,
        l = !1;
      for (const g of [r, u, i]) {
        const F = g.exec(s);
        if (F !== null) {
          const w = F.groups;
          (c = w.itemid), (o = w.portalurl), (l = !0);
          break;
        }
      }
      if (l === !1) {
        if (!t.test(s)) throw new on(ln.UnsupportedUriProtocol, { uri: n });
        (c = s), (o = this.portalUri);
      }
      c.includes("/") && (c = c.split("/")[0]),
        c.includes("?") && (c = c.split("?")[0]);
      let d = "current";
      const p = a.exec(c);
      if (p !== null) {
        const g = p.groups;
        (c = g.itemid), (d = g.versionstring);
      }
      return (
        (s =
          new ai({ url: o }).restUrl +
          "/content/items/" +
          c +
          "/resources/" +
          d +
          ".arc"),
        { url: s, scheme: "portal", uri: "PO:" + s }
      );
    }
    if (n.startsWith("mock")) {
      if (n === "mock")
        return {
          url: "",
          scheme: "mock",
          data: `
      export var hello = 1;
      export function helloWorld() {
          return "Hello World " + hello;
      }
  `,
          uri: "mock",
        };
      const s = n.replace("mock:", "");
      if (fe.mocks[s] !== void 0)
        return { url: "", scheme: "mock", data: fe.mocks[s], uri: n };
    }
    throw new on(ln.UnrecognisedUri, { uri: n });
  }
  async fetchModule(n) {
    const t = fe.cachedModules.getFromCache(n.uri);
    if (t) return t;
    const r = this.fetchSource(n);
    fe.cachedModules.addToCache(n.uri, r);
    let i = null;
    try {
      i = await r;
    } catch (u) {
      throw (fe.cachedModules.removeFromCache(n.uri), u);
    }
    return i;
  }
  async fetchSource(n) {
    if (n.scheme === "portal") {
      const t = await fa(n.url, { responseType: "text", query: {} });
      if (t.data) return Ht(t.data, []);
    }
    if (n.scheme === "mock") return Ht(n.data ?? "", []);
    throw new on(ln.UnsupportedUriProtocol);
  }
  static create(n) {
    return new fe(n);
  }
  static getDefault() {
    return this._default ?? (fe._default = fe._moduleResolverFactory());
  }
  static set moduleResolverClass(n) {
    (this._moduleResolverFactory = n), (this._default = null);
  }
}
(fe.mocks = {}),
  (fe.cachedModules = new (class {
    constructor(e = 20) {
      (this._maxEntries = e), (this._cache = new Qr(this._maxEntries));
    }
    clear() {
      this._cache = new Qr(this._maxEntries);
    }
    addToCache(e, n) {
      this._cache.put(e, n);
    }
    removeFromCache(e) {
      this._cache.delete(e);
    }
    getFromCache(e) {
      return this._cache.get(e);
    }
  })(30)),
  (fe._default = null),
  (fe._moduleResolverFactory = () => {
    const e = ai.getDefault();
    return new fe(e.url);
  });
let es = class extends Ke {
    constructor(e, n) {
      super(),
        (this.definition = null),
        (this.context = null),
        (this.definition = e),
        (this.context = n);
    }
    createFunction(e) {
      return (...n) => {
        const t = {
          spatialReference: this.context.spatialReference,
          console: this.context.console,
          timeReference: this.context.timeReference
            ? this.context.timeReference
            : null,
          lrucache: this.context.lrucache,
          exports: this.context.exports,
          libraryResolver: this.context.libraryResolver,
          interceptor: this.context.interceptor,
          localScope: {},
          depthCounter: { depth: e.depthCounter.depth + 1 },
          globalScope: this.context.globalScope,
        };
        if (t.depthCounter.depth > 64) throw new f(e, h.MaximumCallDepth, null);
        return An(this.definition, t, n, null);
      };
    }
    call(e, n) {
      return Le(e, n, (t, r, i) => {
        const u = {
          spatialReference: e.spatialReference,
          globalScope: e.globalScope,
          depthCounter: { depth: e.depthCounter.depth + 1 },
          libraryResolver: e.libraryResolver,
          exports: e.exports,
          timeReference: e.timeReference ?? null,
          console: e.console,
          lrucache: e.lrucache,
          interceptor: e.interceptor,
          localScope: {},
        };
        if (u.depthCounter.depth > 64) throw new f(e, h.MaximumCallDepth, n);
        return An(this.definition, u, i, n);
      });
    }
    marshalledCall(e, n, t, r) {
      return r(e, n, (i, u, a) => {
        const s = {
          spatialReference: e.spatialReference,
          globalScope: t.globalScope,
          depthCounter: { depth: e.depthCounter.depth + 1 },
          libraryResolver: e.libraryResolver,
          exports: e.exports,
          console: e.console,
          timeReference: e.timeReference ?? null,
          lrucache: e.lrucache,
          interceptor: e.interceptor,
          localScope: {},
        };
        return (
          (a = a.map((o) => (!$(o) || o instanceof Pe ? o : ct(o, e, r)))),
          ct(An(this.definition, s, a, n), t, r)
        );
      });
    }
  },
  st = class extends $t {
    constructor(e) {
      super(e);
    }
    global(e) {
      const n = this.executingContext.globalScope[e.toLowerCase()];
      if (
        (n.valueset ||
          ((n.value = I(this.executingContext, n.node)), (n.valueset = !0)),
        $(n.value) && !(n.value instanceof Pe))
      ) {
        const t = new Pe();
        (t.fn = n.value),
          (t.parameterEvaluator = Le),
          (t.context = this.executingContext),
          (n.value = t);
      }
      return n.value;
    }
    setGlobal(e, n) {
      if ($(n)) throw new f(null, h.AssignModuleFunction, null);
      this.executingContext.globalScope[e.toLowerCase()] = {
        value: n,
        valueset: !0,
        node: null,
      };
    }
    hasGlobal(e) {
      return (
        this.executingContext.exports[e] === void 0 && (e = e.toLowerCase()),
        this.executingContext.exports[e] !== void 0
      );
    }
    loadModule(e) {
      let n = e.spatialReference;
      n == null && (n = new _t({ wkid: 102100 })),
        (this.moduleScope = Gi({}, e.customfunctions, e.timeReference)),
        (this.executingContext = {
          spatialReference: n,
          globalScope: this.moduleScope,
          localScope: null,
          libraryResolver: new rn(
            e.libraryResolver._moduleSingletons,
            this.source.syntax.loadedModules
          ),
          exports: {},
          console: e.console ? e.console : zi,
          timeReference: e.timeReference ?? null,
          lrucache: e.lrucache,
          interceptor: e.interceptor,
          depthCounter: { depth: 1 },
        }),
        I(this.executingContext, this.source.syntax);
    }
  };
function Le(e, n, t) {
  try {
    return n.preparsed === !0
      ? t(e, null, n.arguments)
      : t(
          e,
          n,
          (function (r, i) {
            const u = [];
            for (let a = 0; a < i.arguments.length; a++)
              u.push(I(r, i.arguments[a]));
            return u;
          })(e, n)
        );
  } catch (r) {
    throw r;
  }
}
function I(e, n) {
  try {
    switch (n == null ? void 0 : n.type) {
      case "EmptyStatement":
        return A;
      case "VariableDeclarator":
        return (function (t, r) {
          let i = r.init === null ? null : I(t, r.init);
          if ((i === A && (i = null), r.id.type !== "Identifier"))
            throw new f(t, h.InvalidIdentifier, r);
          const u = r.id.name.toLowerCase();
          return (
            t.localScope != null
              ? (t.localScope[u] = { value: i, valueset: !0, node: r.init })
              : (t.globalScope[u] = { value: i, valueset: !0, node: r.init }),
            A
          );
        })(e, n);
      case "VariableDeclaration":
        return (function (t, r) {
          for (let i = 0; i < r.declarations.length; i++)
            I(t, r.declarations[i]);
          return A;
        })(e, n);
      case "ImportDeclaration":
        return (function (t, r) {
          var s, o;
          const i = r.specifiers[0].local.name.toLowerCase(),
            u = t.libraryResolver.loadLibrary(i);
          let a = null;
          return (
            (s = t.libraryResolver._moduleSingletons) != null && s.has(u.uri)
              ? (a = t.libraryResolver._moduleSingletons.get(u.uri))
              : ((a = new st(u)),
                a.loadModule(t),
                (o = t.libraryResolver._moduleSingletons) == null ||
                  o.set(u.uri, a)),
            (t.globalScope[i] = { value: a, valueset: !0, node: r }),
            A
          );
        })(e, n);
      case "ExportNamedDeclaration":
        return (function (t, r) {
          if (
            (I(t, r.declaration), r.declaration.type === "FunctionDeclaration")
          )
            t.exports[r.declaration.id.name.toLowerCase()] = "function";
          else if (r.declaration.type === "VariableDeclaration")
            for (const i of r.declaration.declarations)
              t.exports[i.id.name.toLowerCase()] = "variable";
          return A;
        })(e, n);
      case "BlockStatement":
      case "Program":
        return (function (t, r) {
          let i = A;
          for (let u = 0; u < r.body.length; u++)
            if (
              ((i = I(t, r.body[u])), i instanceof me || i === Ee || i === ft)
            )
              return i;
          return i;
        })(e, n);
      case "FunctionDeclaration":
        return (function (t, r) {
          const i = r.id.name.toLowerCase();
          return (
            (t.globalScope[i] = {
              valueset: !0,
              node: null,
              value: new es(r, t),
            }),
            A
          );
        })(e, n);
      case "ReturnStatement":
        return (function (t, r) {
          if (r.argument === null) return new me(A);
          const i = I(t, r.argument);
          return new me(i);
        })(e, n);
      case "IfStatement":
        return (function (t, r) {
          const i = I(t, r.test);
          if (i === !0) return I(t, r.consequent);
          if (i === !1) return r.alternate !== null ? I(t, r.alternate) : A;
          throw new f(t, h.BooleanConditionRequired, r);
        })(e, n);
      case "ExpressionStatement":
        return (function (t, r) {
          if (
            r.expression.type === "AssignmentExpression" ||
            r.expression.type === "UpdateExpression"
          )
            return I(t, r.expression);
          if (r.expression.type === "CallExpression") {
            const i = I(t, r.expression);
            return i === A ? A : new ht(i);
          }
          {
            const i = I(t, r.expression);
            return i === A ? A : new ht(i);
          }
        })(e, n);
      case "AssignmentExpression":
        return (function (t, r) {
          let i = null,
            u = "";
          if (r.left.type === "MemberExpression") {
            if (((i = I(t, r.left.object)), r.left.computed === !0))
              u = I(t, r.left.property);
            else {
              if (r.left.property.type !== "Identifier")
                throw new f(t, h.InvalidIdentifier, r);
              u = r.left.property.name;
            }
            const s = I(t, r.right);
            if (k(i)) {
              if (!z(u)) throw new f(t, h.ArrayAccessorMustBeNumber, r);
              if ((u < 0 && (u = i.length + u), u < 0 || u > i.length))
                throw new f(t, h.OutOfBounds, r);
              if (u === i.length) {
                if (r.operator !== "=") throw new f(t, h.OutOfBounds, r);
                i[u] = _e(s, r.operator, i[u], r, t);
              } else i[u] = _e(s, r.operator, i[u], r, t);
            } else if (i instanceof T) {
              if (v(u) === !1) throw new f(t, h.KeyAccessorMustBeString, r);
              if (i.hasField(u) === !0)
                i.setField(u, _e(s, r.operator, i.field(u), r, t));
              else {
                if (r.operator !== "=")
                  throw new f(t, h.FieldNotFound, r, { key: u });
                i.setField(u, _e(s, r.operator, null, r, t));
              }
            } else if (ee(i)) {
              if (v(u) === !1) throw new f(t, h.KeyAccessorMustBeString, r);
              if (i.hasField(u) === !0)
                i.setField(u, _e(s, r.operator, i.field(u), r, t));
              else {
                if (r.operator !== "=")
                  throw new f(t, h.FieldNotFound, r, { key: u });
                i.setField(u, _e(s, r.operator, null, r, t));
              }
            } else {
              if (N(i)) throw new f(t, h.Immutable, r);
              if (!(i instanceof st)) throw new f(t, h.InvalidIdentifier, r);
              if (v(u) === !1) throw new f(t, h.ModuleAccessorMustBeString, r);
              if (i.hasGlobal(u) !== !0)
                throw new f(t, h.ModuleExportNotFound, r);
              i.setGlobal(u, _e(s, r.operator, i.global(u), r, t));
            }
            return A;
          }
          i = r.left.name.toLowerCase();
          const a = I(t, r.right);
          if (t.localScope != null && t.localScope[i] !== void 0)
            return (
              (t.localScope[i] = {
                value: _e(a, r.operator, t.localScope[i].value, r, t),
                valueset: !0,
                node: r.right,
              }),
              A
            );
          if (t.globalScope[i] !== void 0)
            return (
              (t.globalScope[i] = {
                value: _e(a, r.operator, t.globalScope[i].value, r, t),
                valueset: !0,
                node: r.right,
              }),
              A
            );
          throw new f(t, h.InvalidIdentifier, r);
        })(e, n);
      case "UpdateExpression":
        return (function (t, r) {
          let i,
            u = null,
            a = "";
          if (r.argument.type === "MemberExpression") {
            if (
              ((u = I(t, r.argument.object)),
              r.argument.computed === !0
                ? (a = I(t, r.argument.property))
                : r.argument.property.type === "Identifier" &&
                  (a = r.argument.property.name),
              k(u))
            ) {
              if (!z(a)) throw new f(t, h.ArrayAccessorMustBeNumber, r);
              if ((a < 0 && (a = u.length + a), a < 0 || a >= u.length))
                throw new f(t, h.OutOfBounds, r);
              (i = m(u[a])), (u[a] = r.operator === "++" ? i + 1 : i - 1);
            } else if (u instanceof T) {
              if (v(a) === !1) throw new f(t, h.KeyAccessorMustBeString, r);
              if (u.hasField(a) !== !0) throw new f(t, h.FieldNotFound, r);
              (i = m(u.field(a))),
                u.setField(a, r.operator === "++" ? i + 1 : i - 1);
            } else if (ee(u)) {
              if (v(a) === !1) throw new f(t, h.KeyAccessorMustBeString, r);
              if (u.hasField(a) !== !0) throw new f(t, h.FieldNotFound, r);
              (i = m(u.field(a))),
                u.setField(a, r.operator === "++" ? i + 1 : i - 1);
            } else {
              if (N(u)) throw new f(t, h.Immutable, r);
              if (!(u instanceof st)) throw new f(t, h.InvalidParameter, r);
              if (v(a) === !1) throw new f(t, h.ModuleAccessorMustBeString, r);
              if (u.hasGlobal(a) !== !0)
                throw new f(t, h.ModuleExportNotFound, r);
              (i = m(u.global(a))),
                u.setGlobal(a, r.operator === "++" ? i + 1 : i - 1);
            }
            return r.prefix === !1 ? i : r.operator === "++" ? i + 1 : i - 1;
          }
          if (
            ((u =
              r.argument.type === "Identifier"
                ? r.argument.name.toLowerCase()
                : ""),
            !u)
          )
            throw new f(t, h.InvalidIdentifier, r);
          if (t.localScope != null && t.localScope[u] !== void 0)
            return (
              (i = m(t.localScope[u].value)),
              (t.localScope[u] = {
                value: r.operator === "++" ? i + 1 : i - 1,
                valueset: !0,
                node: r,
              }),
              r.prefix === !1 ? i : r.operator === "++" ? i + 1 : i - 1
            );
          if (t.globalScope[u] !== void 0)
            return (
              (i = m(t.globalScope[u].value)),
              (t.globalScope[u] = {
                value: r.operator === "++" ? i + 1 : i - 1,
                valueset: !0,
                node: r,
              }),
              r.prefix === !1 ? i : r.operator === "++" ? i + 1 : i - 1
            );
          throw new f(t, h.InvalidIdentifier, r);
        })(e, n);
      case "BreakStatement":
        return Ee;
      case "ContinueStatement":
        return ft;
      case "TemplateElement":
        return (function (t, r) {
          return r.value ? r.value.cooked : "";
        })(0, n);
      case "TemplateLiteral":
        return (function (t, r) {
          let i = "",
            u = 0;
          for (const a of r.quasis)
            (i += a.value ? a.value.cooked : ""),
              a.tail === !1 &&
                ((i += r.expressions[u]
                  ? E(ns(I(t, r.expressions[u]), t, r))
                  : ""),
                u++);
          return i;
        })(e, n);
      case "ForStatement":
        return (function (t, r) {
          r.init !== null && I(t, r.init);
          const i = { testResult: !0, lastAction: A };
          do ts(t, r, i);
          while (i.testResult === !0);
          return i.lastAction instanceof me ? i.lastAction : A;
        })(e, n);
      case "ForInStatement":
        return (function (t, r) {
          const i = I(t, r.right);
          r.left.type === "VariableDeclaration" && I(t, r.left);
          let u = null,
            a = "";
          if (r.left.type === "VariableDeclaration") {
            const s = r.left.declarations[0].id;
            s.type === "Identifier" && (a = s.name);
          } else r.left.type === "Identifier" && (a = r.left.name);
          if (!a) throw new f(t, h.InvalidIdentifier, r);
          if (
            ((a = a.toLowerCase()),
            t.localScope != null &&
              t.localScope[a] !== void 0 &&
              (u = t.localScope[a]),
            u === null && t.globalScope[a] !== void 0 && (u = t.globalScope[a]),
            u === null)
          )
            throw new f(t, h.InvalidIdentifier, r);
          if (k(i) || v(i)) {
            const s = i.length;
            for (let o = 0; o < s; o++) {
              u.value = o;
              const c = I(t, r.body);
              if (c === Ee) break;
              if (c instanceof me) return c;
            }
            return A;
          }
          if (N(i)) {
            for (let s = 0; s < i.length(); s++) {
              u.value = s;
              const o = I(t, r.body);
              if (o === Ee) break;
              if (o instanceof me) return o;
            }
            return A;
          }
          if (!(i instanceof T || ee(i))) return A;
          {
            const s = i.keys();
            for (let o = 0; o < s.length; o++) {
              u.value = s[o];
              const c = I(t, r.body);
              if (c === Ee) break;
              if (c instanceof me) return c;
            }
          }
        })(e, n);
      case "WhileStatement":
        return (function (t, r) {
          const i = { testResult: !0, lastAction: A };
          if (((i.testResult = I(t, r.test)), i.testResult === !1)) return A;
          if (i.testResult !== !0)
            throw new f(t, h.BooleanConditionRequired, r);
          for (
            ;
            i.testResult === !0 &&
            ((i.lastAction = I(t, r.body)), i.lastAction !== Ee) &&
            !(i.lastAction instanceof me);

          )
            if (
              ((i.testResult = I(t, r.test)),
              i.testResult !== !0 && i.testResult !== !1)
            )
              throw new f(t, h.BooleanConditionRequired, r);
          return i.lastAction instanceof me ? i.lastAction : A;
        })(e, n);
      case "Identifier":
        return Pi(e, n);
      case "MemberExpression":
        return (function (t, r) {
          try {
            const i = I(t, r.object);
            if (i === null) throw new f(t, h.MemberOfNull, r);
            if (r.computed === !1) {
              if (r.property.type === "Identifier") {
                if (i instanceof T || ee(i)) return i.field(r.property.name);
                if (i instanceof B) return Bt(i, r.property.name, r, t);
                if (i instanceof st) {
                  if (!i.hasGlobal(r.property.name))
                    throw new f(t, h.InvalidIdentifier, r);
                  return i.global(r.property.name);
                }
              }
              throw new f(t, h.InvalidMemberAccessKey, r);
            }
            {
              let u = I(t, r.property);
              if (i instanceof T || ee(i)) {
                if (v(u)) return i.field(u);
                throw new f(t, h.InvalidMemberAccessKey, r);
              }
              if (i instanceof st) {
                if (v(u)) return i.global(u);
                throw new f(t, h.InvalidMemberAccessKey, r);
              }
              if (i instanceof B) {
                if (v(u)) return Bt(i, u, r, t);
                throw new f(t, h.InvalidMemberAccessKey, r);
              }
              if (k(i)) {
                if (z(u) && isFinite(u) && Math.floor(u) === u) {
                  if ((u < 0 && (u = i.length + u), u >= i.length || u < 0))
                    throw new f(t, h.OutOfBounds, r);
                  return i[u];
                }
                throw new f(t, h.InvalidMemberAccessKey, r);
              }
              if (v(i)) {
                if (z(u) && isFinite(u) && Math.floor(u) === u) {
                  if ((u < 0 && (u = i.length + u), u >= i.length || u < 0))
                    throw new f(t, h.OutOfBounds, r);
                  return i[u];
                }
                throw new f(t, h.InvalidMemberAccessKey, r);
              }
              if (N(i)) {
                if (z(u) && isFinite(u) && Math.floor(u) === u) {
                  if ((u < 0 && (u = i.length() + u), u >= i.length() || u < 0))
                    throw new f(t, h.OutOfBounds, r);
                  return i.get(u);
                }
                throw new f(t, h.InvalidMemberAccessKey, r);
              }
              throw new f(t, h.InvalidMemberAccessKey, r);
            }
          } catch (i) {
            throw i;
          }
        })(e, n);
      case "Literal":
        return n.value;
      case "CallExpression":
        return (function (t, r) {
          try {
            if (r.callee.type === "MemberExpression") {
              const i = I(t, r.callee.object);
              if (!(i instanceof st)) throw new f(t, h.FuncionNotFound, r);
              const u =
                r.callee.computed === !1
                  ? r.callee.property.name
                  : I(t, r.callee.property);
              if (!i.hasGlobal(u)) throw new f(t, h.FuncionNotFound, r);
              const a = i.global(u);
              if (!$(a)) throw new f(t, h.CallNonFunction, r);
              return a.call(t, r);
            }
            if (r.callee.type !== "Identifier")
              throw new f(t, h.FuncionNotFound, r);
            if (
              t.localScope != null &&
              t.localScope[r.callee.name.toLowerCase()] !== void 0
            ) {
              const i = t.localScope[r.callee.name.toLowerCase()];
              if ($(i.value)) return i.value.call(t, r);
              throw new f(t, h.CallNonFunction, r);
            }
            if (t.globalScope[r.callee.name.toLowerCase()] !== void 0) {
              const i = t.globalScope[r.callee.name.toLowerCase()];
              if ($(i.value)) return i.value.call(t, r);
              throw new f(t, h.CallNonFunction, r);
            }
            throw new f(t, h.FuncionNotFound, r);
          } catch (i) {
            throw i;
          }
        })(e, n);
      case "UnaryExpression":
        return (function (t, r) {
          try {
            const i = I(t, r.argument);
            if (G(i)) {
              if (r.operator === "!") return !i;
              if (r.operator === "-") return -1 * m(i);
              if (r.operator === "+") return 1 * m(i);
              if (r.operator === "~") return ~m(i);
              throw new f(t, h.UnsupportedUnaryOperator, r);
            }
            if (r.operator === "~") return ~m(i);
            if (r.operator === "-") return -1 * m(i);
            if (r.operator === "+") return 1 * m(i);
            throw new f(t, h.UnsupportedUnaryOperator, r);
          } catch (i) {
            throw i;
          }
        })(e, n);
      case "BinaryExpression":
        return (function (t, r) {
          try {
            const i = [I(t, r.left), I(t, r.right)],
              u = i[0],
              a = i[1];
            switch (r.operator) {
              case "|":
              case "<<":
              case ">>":
              case ">>>":
              case "^":
              case "&":
                return $n(m(u), m(a), r.operator);
              case "==":
                return Fe(u, a);
              case "!=":
                return !Fe(u, a);
              case "<":
              case ">":
              case "<=":
              case ">=":
                return Kn(u, a, r.operator);
              case "+":
                return v(u) || v(a) ? E(u) + E(a) : m(u) + m(a);
              case "-":
                return m(u) - m(a);
              case "*":
                return m(u) * m(a);
              case "/":
                return m(u) / m(a);
              case "%":
                return m(u) % m(a);
              default:
                throw new f(t, h.UnsupportedOperator, r);
            }
          } catch (i) {
            throw i;
          }
        })(e, n);
      case "LogicalExpression":
        return (function (t, r) {
          try {
            const i = I(t, r.left);
            if (G(i))
              switch (r.operator) {
                case "||":
                  if (i === !0) return i;
                  {
                    const u = I(t, r.right);
                    if (G(u)) return u;
                    throw new f(t, h.LogicExpressionOrAnd, r);
                  }
                case "&&":
                  if (i === !1) return i;
                  {
                    const u = I(t, r.right);
                    if (G(u)) return u;
                    throw new f(t, h.LogicExpressionOrAnd, r);
                  }
                default:
                  throw new f(t, h.LogicExpressionOrAnd, r);
              }
            throw new f(t, h.LogicalExpressionOnlyBoolean, r);
          } catch (i) {
            throw i;
          }
        })(e, n);
      case "ArrayExpression":
        return (function (t, r) {
          try {
            const i = [];
            for (let u = 0; u < r.elements.length; u++) {
              const a = I(t, r.elements[u]);
              if ($(a)) throw new f(t, h.NoFunctionInArray, r);
              a === A ? i.push(null) : i.push(a);
            }
            return i;
          } catch (i) {
            throw i;
          }
        })(e, n);
      case "ObjectExpression":
        return (function (t, r) {
          const i = {},
            u = new Map();
          for (let s = 0; s < r.properties.length; s++) {
            const o = I(t, r.properties[s]);
            if ($(o.value)) throw new f(t, h.NoFunctionInDictionary, r);
            if (v(o.key) === !1) throw new f(t, h.KeyMustBeString, r);
            let c = o.key.toString();
            const l = c.toLowerCase();
            u.has(l) ? (c = u.get(l)) : u.set(l, c),
              o.value === A ? (i[c] = null) : (i[c] = o.value);
          }
          const a = new T(i);
          return (a.immutable = !1), a;
        })(e, n);
      case "Property":
        return (function (t, r) {
          return {
            key: r.key.type === "Identifier" ? r.key.name : I(t, r.key),
            value: I(t, r.value),
          };
        })(e, n);
      default:
        throw new f(e, h.Unrecognised, n);
    }
  } catch (t) {
    throw pa(e, n, t);
  }
}
function ts(e, n, t) {
  if (n.test !== null) {
    if (((t.testResult = I(e, n.test)), t.testResult === !1)) return;
    if (t.testResult !== !0) throw new f(e, h.BooleanConditionRequired, n);
  }
  (t.lastAction = I(e, n.body)),
    t.lastAction !== Ee
      ? t.lastAction instanceof me
        ? (t.testResult = !1)
        : n.update !== null && I(e, n.update)
      : (t.testResult = !1);
}
function _e(e, n, t, r, i) {
  switch (n) {
    case "=":
      return e === A ? null : e;
    case "/=":
      return m(t) / m(e);
    case "*=":
      return m(t) * m(e);
    case "-=":
      return m(t) - m(e);
    case "+=":
      return v(t) || v(e) ? E(t) + E(e) : m(t) + m(e);
    case "%=":
      return m(t) % m(e);
    default:
      throw new f(i, h.UnsupportedOperator, r);
  }
}
function ns(e, n, t) {
  if ($(e)) throw new f(n, h.NoFunctionInTemplateLiteral, t);
  return e;
}
function Pi(e, n) {
  let t;
  try {
    const r = n.name.toLowerCase();
    if (e.localScope != null && e.localScope[r] !== void 0)
      return (
        (t = e.localScope[r]),
        t.valueset === !0 || ((t.value = I(e, t.node)), (t.valueset = !0)),
        t.value
      );
    if (e.globalScope[r] !== void 0)
      return (
        (t = e.globalScope[r]),
        t.valueset === !0 || ((t.value = I(e, t.node)), (t.valueset = !0)),
        t.value
      );
    throw new f(e, h.InvalidIdentifier, n);
  } catch (r) {
    throw r;
  }
}
const he = {};
function Oi(e, n, t, r) {
  try {
    if (Fe(I(e, n.arguments[t]), r)) return I(e, n.arguments[t + 1]);
    {
      const i = n.arguments.length - t;
      return i === 1
        ? I(e, n.arguments[t])
        : i === 2
        ? null
        : i === 3
        ? I(e, n.arguments[t + 2])
        : Oi(e, n, t + 2, r);
    }
  } catch (i) {
    throw i;
  }
}
function Ui(e, n, t, r) {
  try {
    if (r === !0) return I(e, n.arguments[t + 1]);
    if (n.arguments.length - t === 3) return I(e, n.arguments[t + 2]);
    {
      const i = I(e, n.arguments[t + 2]);
      if (G(i) === !1)
        throw new f(e, h.BooleanConditionRequired, n.arguments[t + 2]);
      return Ui(e, n, t + 2, i);
    }
  } catch (i) {
    throw i;
  }
}
function An(e, n, t, r) {
  try {
    const i = e.body;
    if (t.length !== e.params.length)
      throw new f(n, h.WrongNumberOfParameters, r);
    if (n.localScope != null)
      for (let a = 0; a < t.length; a++)
        n.localScope[e.params[a].name.toLowerCase()] = {
          value: t[a],
          valueset: !0,
          node: null,
        };
    const u = I(n, i);
    if (u instanceof me) return u.value;
    if (u === Ee) throw new f(n, h.UnexpectedToken, r);
    if (u === ft) throw new f(n, h.UnexpectedToken, r);
    return u instanceof ht ? u.value : u;
  } catch (i) {
    throw i;
  }
}
xi(he, Le),
  Ii(he, Le),
  Ai(he, Le),
  Ci(he, Le),
  bi(he, Le),
  Xn(he, Le),
  (he.iif = function (e, n) {
    try {
      D(n.arguments === null ? [] : n.arguments, 3, 3, e, n);
      const t = I(e, n.arguments[0]);
      if (G(t) === !1) throw new f(e, h.BooleanConditionRequired, n);
      return I(e, t === !0 ? n.arguments[1] : n.arguments[2]);
    } catch (t) {
      throw t;
    }
  }),
  (he.decode = function (e, n) {
    try {
      if (n.arguments.length < 2) throw new f(e, h.WrongNumberOfParameters, n);
      if (n.arguments.length === 2) return I(e, n.arguments[1]);
      if ((n.arguments.length - 1) % 2 == 0)
        throw new f(e, h.WrongNumberOfParameters, n);
      return Oi(e, n, 1, I(e, n.arguments[0]));
    } catch (t) {
      throw t;
    }
  }),
  (he.when = function (e, n) {
    try {
      if (n.arguments.length < 3) throw new f(e, h.WrongNumberOfParameters, n);
      if (n.arguments.length % 2 == 0)
        throw new f(e, h.WrongNumberOfParameters, n);
      const t = I(e, n.arguments[0]);
      if (G(t) === !1)
        throw new f(e, h.BooleanConditionRequired, n.arguments[0]);
      return Ui(e, n, 0, t);
    } catch (t) {
      throw t;
    }
  });
for (const e in he) he[e] = { value: new $e(he[e]), valueset: !0, node: null };
const St = function () {};
function Gi(e, n, t) {
  const r = new St();
  e || (e = {}), n || (n = {});
  const i = new T({
    newline: `
`,
    tab: "	",
    singlequote: "'",
    doublequote: '"',
    forwardslash: "/",
    backwardslash: "\\",
  });
  (i.immutable = !1),
    (r.textformatting = { value: i, valueset: !0, node: null });
  for (const u in n)
    r[u] = { value: new $e(n[u]), native: !0, valueset: !0, node: null };
  for (const u in e)
    e[u] && e[u].declaredClass === "esri.Graphic"
      ? (r[u] = {
          value: X.createFromGraphic(e[u], t),
          valueset: !0,
          node: null,
        })
      : (r[u] = { value: e[u], valueset: !0, node: null });
  return r;
}
function zi(e) {}
function ji(e) {
  const n = {
    mode: "sync",
    compiled: !1,
    functions: {},
    signatures: [],
    standardFunction: Le,
    evaluateIdentifier: Pi,
  };
  for (let t = 0; t < e.length; t++) e[t].registerFunctions(n);
  for (const t in n.functions)
    (he[t] = { value: new $e(n.functions[t]), valueset: !0, node: null }),
      (St.prototype[t] = he[t]);
  for (let t = 0; t < n.signatures.length; t++) Mn(n.signatures[t], "sync");
}
function jn(e, n) {
  let t = n.spatialReference;
  t == null && (t = new _t({ wkid: 102100 }));
  let r = null;
  e.usesModules && (r = new rn(new Map(), e.loadedModules));
  const i = {
    spatialReference: t,
    globalScope: Gi(n.vars, n.customfunctions, n.timeReference),
    localScope: null,
    exports: {},
    libraryResolver: r,
    console: n.console ? n.console : zi,
    timeReference: n.timeReference ?? null,
    lrucache: n.lrucache,
    interceptor: n.interceptor,
    depthCounter: { depth: 1 },
  };
  let u = I(i, e);
  if (
    (u instanceof me && (u = u.value),
    u instanceof ht && (u = u.value),
    u === A && (u = null),
    u === Ee)
  )
    throw new f(i, h.IllegalResult, null);
  if (u === ft) throw new f(i, h.IllegalResult, null);
  if ($(u)) throw new f(i, h.IllegalResult, null);
  return u;
}
(St.prototype = he),
  (St.prototype.infinity = {
    value: Number.POSITIVE_INFINITY,
    valueset: !0,
    node: null,
  }),
  (St.prototype.pi = { value: Math.PI, valueset: !0, node: null }),
  ji([Ln]);
const rs = [
    "feature",
    "angle",
    "bearing",
    "centroid",
    "envelopeintersects",
    "extent",
    "geometry",
    "isselfintersecting",
    "ringisclockwise",
  ],
  is = !0;
let qi = !1,
  Ji = !1,
  ve = null,
  qn = [];
function Zi(e, n) {
  if (n.useAsync === !0 || e.isAsync === !0)
    return (function (t, r) {
      if (ve === null) throw new f(null, h.AsyncNotEnabled, null);
      if (fr("esri-csp-restrictions") || is === !1)
        return function (i) {
          return ve.executeScript(t, i);
        };
      try {
        return Jr(t, r, !0);
      } catch (i) {
        if (i.declaredRootClass === "esri.arcade.arcadeuncompilableerror")
          return function (u) {
            return ve.executeScript(t, u);
          };
        throw i;
      }
    })(e, n);
  if (fr("esri-csp-restrictions"))
    return function (t) {
      return jn(e, t);
    };
  try {
    return Jr(e, n);
  } catch (t) {
    if (t.declaredRootClass === "esri.arcade.arcadeuncompilableerror")
      return function (r) {
        return jn(e, r);
      };
    throw t;
  }
}
function nr(e, n = []) {
  return Ht(e, n);
}
function Jn(e, n) {
  if (n.useAsync === !0 || e.isAsync === !0) {
    if (ve === null) throw new f(null, h.AsyncNotEnabled, null);
    return ve.executeScript(e, n);
  }
  return jn(e, n);
}
function Kt(e, n) {
  return yi(e, n);
}
function Vi(e) {
  return (function (n) {
    const t = [];
    return (
      J(n, (r) => {
        var i;
        if (r.type === "CallExpression") {
          if (
            r.callee.type === "Identifier" &&
            r.callee.name.toLowerCase() === "expects"
          ) {
            let u = "";
            for (let a = 0; a < (r.arguments || []).length; a++)
              a === 0
                ? r.arguments[a].type === "Identifier" &&
                  (u = r.arguments[a].name.toLowerCase())
                : u &&
                  r.arguments[a].type === "Literal" &&
                  Ar(r.arguments[a].value) &&
                  t.push(u + "." + r.arguments[a].value.toLowerCase());
            return !1;
          }
          if (
            r.callee.type === "Identifier" &&
            ["domainname", "domaincode", "domain", "haskey"].includes(
              r.callee.name.toLowerCase()
            ) &&
            r.arguments.length >= 2
          ) {
            let u = "";
            return (
              r.arguments[0].type === "Identifier" &&
                (u = r.arguments[0].name.toLowerCase()),
              u &&
                r.arguments[1].type === "Literal" &&
                Ar(r.arguments[1].value) &&
                t.push(u + "." + r.arguments[1].value.toLowerCase()),
              !1
            );
          }
        }
        return (
          r.type !== "MemberExpression" ||
          r.object.type !== "Identifier" ||
          (r.computed === !1 &&
          r.object &&
          r.object.name &&
          r.property &&
          r.property.type === "Identifier" &&
          r.property.name
            ? t.push(
                r.object.name.toLowerCase() +
                  "." +
                  r.property.name.toLowerCase()
              )
            : r.object &&
              r.object.name &&
              r.property &&
              r.property.type === "Literal" &&
              typeof r.property.value == "string" &&
              t.push(
                r.object.name.toLowerCase() +
                  "." +
                  ((i = r.property.value) == null
                    ? void 0
                    : i.toString().toLowerCase())
              ),
          !1)
        );
      }),
      t
    );
  })(e);
}
function an(e, n = []) {
  return e.usesGeometry === void 0 && kt(e, n), e.usesGeometry === !0;
}
let En = null;
function rr() {
  return En || ((En = Hi()), En);
}
async function Hi() {
  const [e, n] = await Promise.all([
    Re(
      () => import("./geometryEngine.ca09dc73.js"),
      [
        "js/geometryEngine.ca09dc73.js",
        "js/geometryEngineBase.6e4344a5.js",
        "js/hydrated.fc3c5340.js",
        "js/index.8fd7165c.js",
        "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
        "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
        "js/NvapForm.feb8550d.js",
        "js/vue.a7ce1fbe.js",
        "assets/NvapForm.356f5dc3.css",
        "js/vue-router.805f6e2a.js",
        "js/Table.e9c997d5.js",
        "js/vue-i18n.67a42238.js",
        "assets/Table.3b7647ef.css",
        "assets/index.a699c0e4.css",
      ]
    ),
    Re(() => Promise.resolve().then(() => Ta), void 0),
  ]);
  return (Ji = !0), n.setGeometryEngine(e), !0;
}
let bn = null;
function ir() {
  return bn !== null || (bn = Wi()), bn;
}
async function Wi() {
  await (async function () {
    return (
      Ye(
        [
          await Re(
            () => import("./geomasync.0568ea60.js"),
            [
              "js/geomasync.0568ea60.js",
              "js/index.8fd7165c.js",
              "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
              "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
              "js/NvapForm.feb8550d.js",
              "js/vue.a7ce1fbe.js",
              "assets/NvapForm.356f5dc3.css",
              "js/vue-router.805f6e2a.js",
              "js/Table.e9c997d5.js",
              "js/vue-i18n.67a42238.js",
              "assets/Table.3b7647ef.css",
              "assets/index.a699c0e4.css",
              "js/geometryEngineAsync.8efb94c6.js",
              "js/executionError.fb3f283a.js",
              "js/portalUtils.b096dd2b.js",
              "js/arcadeTimeUtils.e79f2f70.js",
              "js/number.f83996f0.js",
            ]
          ),
        ],
        "async"
      ),
      !0
    );
  })(),
    (ve = await Re(
      () => import("./arcadeAsyncRuntime.e1c1114e.js"),
      [
        "js/arcadeAsyncRuntime.e1c1114e.js",
        "js/executionError.fb3f283a.js",
        "js/geomasync.0568ea60.js",
        "js/index.8fd7165c.js",
        "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
        "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
        "js/NvapForm.feb8550d.js",
        "js/vue.a7ce1fbe.js",
        "assets/NvapForm.356f5dc3.css",
        "js/vue-router.805f6e2a.js",
        "js/Table.e9c997d5.js",
        "js/vue-i18n.67a42238.js",
        "assets/Table.3b7647ef.css",
        "assets/index.a699c0e4.css",
        "js/geometryEngineAsync.8efb94c6.js",
        "js/portalUtils.b096dd2b.js",
        "js/arcadeTimeUtils.e79f2f70.js",
        "js/number.f83996f0.js",
      ]
    ));
  for (const e of qn) ve.extend(e), Ye(e, "async");
  return (qn = null), !0;
}
function Ki() {
  return qi;
}
function $i() {
  return !!ve;
}
function Yi() {
  return Ji;
}
let vn = null;
function ar() {
  return vn || ((vn = Xi()), vn);
}
async function Xi() {
  await ir();
  const [e, n, t, r, i] = await Promise.all([
    Re(
      () => import("./featureSetUtils.3bdb3fe9.js").then((u) => u.i),
      [
        "js/featureSetUtils.3bdb3fe9.js",
        "js/index.8fd7165c.js",
        "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
        "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
        "js/NvapForm.feb8550d.js",
        "js/vue.a7ce1fbe.js",
        "assets/NvapForm.356f5dc3.css",
        "js/vue-router.805f6e2a.js",
        "js/Table.e9c997d5.js",
        "js/vue-i18n.67a42238.js",
        "assets/Table.3b7647ef.css",
        "assets/index.a699c0e4.css",
        "js/WhereClause.ae196341.js",
        "js/executionError.fb3f283a.js",
        "js/SpatialFilter.a4e03d79.js",
        "js/arcadeTimeUtils.e79f2f70.js",
        "js/geometryEngineAsync.8efb94c6.js",
        "js/executeForIds.3a002380.js",
      ]
    ),
    Re(
      () => import("./featuresetbase.f1a8754b.js"),
      [
        "js/featuresetbase.f1a8754b.js",
        "js/arcadeTimeUtils.e79f2f70.js",
        "js/executionError.fb3f283a.js",
        "js/index.8fd7165c.js",
        "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
        "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
        "js/NvapForm.feb8550d.js",
        "js/vue.a7ce1fbe.js",
        "assets/NvapForm.356f5dc3.css",
        "js/vue-router.805f6e2a.js",
        "js/Table.e9c997d5.js",
        "js/vue-i18n.67a42238.js",
        "assets/Table.3b7647ef.css",
        "assets/index.a699c0e4.css",
        "js/featureSetUtils.3bdb3fe9.js",
        "js/WhereClause.ae196341.js",
        "js/SpatialFilter.a4e03d79.js",
        "js/geometryEngineAsync.8efb94c6.js",
        "js/executeForIds.3a002380.js",
        "js/portalUtils.b096dd2b.js",
        "js/number.f83996f0.js",
      ]
    ),
    Re(
      () => import("./featuresetgeom.b108d973.js"),
      [
        "js/featuresetgeom.b108d973.js",
        "js/executionError.fb3f283a.js",
        "js/SpatialFilter.a4e03d79.js",
        "js/WhereClause.ae196341.js",
        "js/index.8fd7165c.js",
        "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
        "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
        "js/NvapForm.feb8550d.js",
        "js/vue.a7ce1fbe.js",
        "assets/NvapForm.356f5dc3.css",
        "js/vue-router.805f6e2a.js",
        "js/Table.e9c997d5.js",
        "js/vue-i18n.67a42238.js",
        "assets/Table.3b7647ef.css",
        "assets/index.a699c0e4.css",
        "js/arcadeTimeUtils.e79f2f70.js",
        "js/geometryEngineAsync.8efb94c6.js",
        "js/number.f83996f0.js",
      ]
    ),
    Re(
      () => import("./featuresetstats.c5d73ea9.js"),
      [
        "js/featuresetstats.c5d73ea9.js",
        "js/executionError.fb3f283a.js",
        "js/WhereClause.ae196341.js",
        "js/index.8fd7165c.js",
        "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
        "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
        "js/NvapForm.feb8550d.js",
        "js/vue.a7ce1fbe.js",
        "assets/NvapForm.356f5dc3.css",
        "js/vue-router.805f6e2a.js",
        "js/Table.e9c997d5.js",
        "js/vue-i18n.67a42238.js",
        "assets/Table.3b7647ef.css",
        "assets/index.a699c0e4.css",
        "js/arcadeTimeUtils.e79f2f70.js",
        "js/number.f83996f0.js",
      ]
    ),
    Re(
      () => import("./featuresetstring.40750df3.js"),
      [
        "js/featuresetstring.40750df3.js",
        "js/executionError.fb3f283a.js",
        "js/index.8fd7165c.js",
        "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
        "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
        "js/NvapForm.feb8550d.js",
        "js/vue.a7ce1fbe.js",
        "assets/NvapForm.356f5dc3.css",
        "js/vue-router.805f6e2a.js",
        "js/Table.e9c997d5.js",
        "js/vue-i18n.67a42238.js",
        "assets/Table.3b7647ef.css",
        "assets/index.a699c0e4.css",
        "js/arcadeTimeUtils.e79f2f70.js",
        "js/number.f83996f0.js",
      ]
    ),
  ]);
  return (
    (ra = e), ve.extend([n, t, r, i]), Ye([n, t, r, i], "async"), (qi = !0), !0
  );
}
function Qi(e, n = []) {
  return e.usesFeatureSet === void 0 && kt(e, n), e.usesFeatureSet === !0;
}
async function ea(e, n, t = [], r = !1, i = null) {
  return sr(new Set(), e, n, t, r, i);
}
async function sr(e, n, t, r = [], i = !1, u = null) {
  const a = typeof n == "string" ? nr(n) : n,
    s = [];
  return (
    a &&
      (Yi() === !1 && (an(a) || i) && s.push(rr()),
      $i() === !1 && (a.isAsync === !0 || t) && s.push(ir()),
      Ki() === !1 &&
        (Qi(a) ||
          (function (o, c) {
            if (c) {
              for (const l of c) if (Kt(o, l)) return !0;
              return !1;
            }
            return !1;
          })(a, r)) &&
        s.push(ar())),
    s.length && (await Promise.all(s)),
    await ta(e, a, u, t, i),
    !0
  );
}
async function ta(e, n, t = null, r = !1, i = !1) {
  const u = wi(n);
  t === null && u.length > 0 && (t = fe.getDefault()), (n.loadedModules = {});
  for (const a of u) {
    ii(t);
    const s = t.normalizeModuleUri(a.source);
    if (e.has(s.uri)) throw new f(null, h.CircularModules, null);
    e.add(s.uri);
    const o = await t.fetchModule(s);
    await sr(e, o, r, [], i, t),
      e.delete(s.uri),
      o.isAsync && (n.isAsync = !0),
      o.usesFeatureSet && (n.usesFeatureSet = !0),
      o.usesGeometry && (n.usesGeometry = !0),
      (n.loadedModules[a.libname] = { uri: s.uri, script: o });
  }
}
function na(e) {
  if (an(e)) return !0;
  const n = Nn(e);
  let t = !1;
  for (let r = 0; r < n.length; r++)
    if (rs.includes(n[r])) {
      t = !0;
      break;
    }
  return t;
}
let ra = null;
function Gt() {
  return ra;
}
const as = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        _loadScriptDependenciesImpl: sr,
        compileScript: Zi,
        enableAsyncSupport: ir,
        enableAsyncSupportImpl: Wi,
        enableFeatureSetSupport: ar,
        enableFeatureSetSupportImpl: Xi,
        enableGeometrySupport: rr,
        enableGeometrySupportImpl: Hi,
        executeScript: Jn,
        extend: function (e) {
          ji(e),
            Ye(e, "sync"),
            ve === null ? qn.push(e) : (Ye(e, "async"), ve.extend(e));
        },
        extractExpectedFieldLiterals: Vi,
        extractFieldLiterals: function (e, n = !1) {
          return (
            n === void 0 && (n = !1),
            (function (t) {
              const r = [];
              return (
                J(t, (i) => {
                  var u;
                  return (
                    i.type !== "MemberExpression" ||
                    i.object.type !== "Identifier" ||
                    (i.computed === !1 &&
                    i.object &&
                    i.object.name &&
                    i.property &&
                    i.property.type === "Identifier" &&
                    i.property.name
                      ? r.push(
                          i.object.name.toLowerCase() +
                            "." +
                            i.property.name.toLowerCase()
                        )
                      : i.object &&
                        i.object.name &&
                        i.property &&
                        i.property.type === "Literal" &&
                        typeof i.property.value == "string" &&
                        r.push(
                          i.object.name.toLowerCase() +
                            "." +
                            ((u = i.property.value) == null
                              ? void 0
                              : u.toString().toLowerCase())
                        ),
                    !1)
                  );
                }),
                r
              );
            })(e)
          );
        },
        featureSetUtils: Gt,
        isAsyncEnabled: $i,
        isFeatureSetSupportEnabled: Ki,
        isGeometryEnabled: Yi,
        loadDependentModules: ta,
        loadScriptDependencies: ea,
        parseAndExecuteScript: function (e, n, t = []) {
          return Jn(Ht(e, t), n);
        },
        parseScript: nr,
        referencesFunction: function (e, n) {
          return (function (t, r) {
            let i = !1;
            const u = r.toLowerCase();
            return (
              J(
                t,
                (a) =>
                  !i &&
                  (a.type !== "CallExpression" ||
                    a.callee.type !== "Identifier" ||
                    !a.callee.name ||
                    a.callee.name.toLowerCase() !== u ||
                    ((i = !0), !1))
              ),
              i
            );
          })(e, n);
        },
        referencesMember: Kt,
        scriptIsAsync: function (e, n = []) {
          return e.isAsync === void 0 && kt(e, n), e.isAsync === !0;
        },
        scriptTouchesGeometry: na,
        scriptUsesFeatureSet: Qi,
        scriptUsesGeometryEngine: an,
        scriptUsesModules: function (e, n = []) {
          return e.usesModules === void 0 && kt(e, n), e.usesModules === !0;
        },
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ei = /^\$(feature|aggregatedFeatures)\./i,
  ss = { vars: { $feature: "any", $view: "any" }, spatialReference: null };
function us(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
function It(e) {
  if (!e) return null;
  try {
    return nr(e);
  } catch {}
  return null;
}
function ti(e, n) {
  var r;
  if (!e) return !1;
  if (typeof e == "string") return n(e);
  const t = e;
  if (
    (function (i) {
      return (
        i.type === "simple" ||
        i.type === "class-breaks" ||
        i.type === "unique-value" ||
        i.type === "dot-density" ||
        i.type === "dictionary" ||
        i.type === "pie-chart"
      );
    })(t)
  ) {
    if (t.type === "dot-density") {
      const a =
        (r = t.attributes) == null
          ? void 0
          : r.some((s) => n(s.valueExpression));
      if (a) return a;
    }
    const i = t.visualVariables,
      u =
        !!i &&
        i.some((a) => {
          let s = n(a.valueExpression);
          return (
            a.type === "size" &&
              (dr(a.minSize) && (s = s || n(a.minSize.valueExpression)),
              dr(a.maxSize) && (s = s || n(a.maxSize.valueExpression))),
            s
          );
        });
    return !(!("valueExpression" in t) || !n(t.valueExpression)) || u;
  }
  if (
    (function (i) {
      return i.declaredClass === "esri.layers.support.LabelClass";
    })(t)
  ) {
    const i = t.labelExpressionInfo && t.labelExpressionInfo.expression;
    return !(!i || !n(i)) || !1;
  }
  return (
    !!(function (i) {
      return i.declaredClass === "esri.PopupTemplate";
    })(t) &&
    ((!!t.expressionInfos && t.expressionInfos.some((i) => n(i.expression))) ||
      (Array.isArray(t.content) &&
        t.content.some((i) => {
          var u;
          return (
            i.type === "expression" &&
            n((u = i.expressionInfo) == null ? void 0 : u.expression)
          );
        })))
  );
}
function os(e) {
  const n = It(e);
  return !!n && na(n);
}
function ls(e) {
  const n = It(e);
  return !!n && an(n);
}
const Ss = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Dictionary: T,
      arcade: as,
      arcadeFeature: X,
      convertFeatureLayerToFeatureSet: function ({
        layer: e,
        spatialReference: n,
        outFields: t,
        returnGeometry: r,
        lrucache: i,
        interceptor: u,
      }) {
        if (e === null) return null;
        const a = Gt();
        return a ? a.constructFeatureSet(e, n, t, r ?? !0, i, u) : null;
      },
      convertJsonToArcade: function (e, n) {
        return T.convertJsonToArcade(e, n);
      },
      convertMapToFeatureSetCollection: function (e) {
        if ((e == null ? void 0 : e.map) === null) return null;
        const n = Gt();
        return n
          ? n.createFeatureSetCollectionFromMap(
              e.map,
              e.spatialReference,
              e.lrucache,
              e.interceptor
            )
          : null;
      },
      convertServiceUrlToWorkspace: function ({
        url: e,
        spatialReference: n,
        lrucache: t,
        interceptor: r,
      }) {
        const i = Gt();
        return i ? i.createFeatureSetCollectionFromService(e, n, t, r) : null;
      },
      createExecContext: function (e, n) {
        return {
          vars: {
            $feature: e == null ? new X() : X.createFromGraphic(e, null),
            $view: n && n.view,
          },
          spatialReference: n && n.sr,
        };
      },
      createFeature: function (e, n, t) {
        return X.createFromGraphicLikeObject(n, e, t, null);
      },
      createFunction: function (e, n) {
        const t = typeof e == "string" ? It(e) : e;
        if (!t) return null;
        try {
          return Zi(t, (n = n || da(ss)));
        } catch {}
        return null;
      },
      createSyntaxTree: It,
      dependsOnView: function (e) {
        return Kt(e, "$view");
      },
      enableFeatureSetOperations: function () {
        return ar();
      },
      enableGeometryOperations: function () {
        return rr();
      },
      evalSyntaxTree: function (e, n) {
        let t;
        try {
          t = Jn(e, n);
        } catch {
          t = null;
        }
        return t;
      },
      executeAsyncFunction: function (e, n) {
        try {
          return e ? e(n) : Promise.resolve(null);
        } catch {
          return Promise.resolve(null);
        }
      },
      executeFunction: function (e, n) {
        let t;
        try {
          t = e ? e(n) : null;
        } catch {
          t = null;
        }
        return t;
      },
      extractFieldNames: function (e, n) {
        if (!e) return [];
        const t = typeof e == "string" ? It(e) : e;
        if (!t) return [];
        const r = Vi(t);
        let i = [];
        r.forEach((a) => {
          ei.test(a) && ((a = a.replace(ei, "")), i.push(a));
        });
        const u = i.filter((a) => a.includes("*"));
        return (
          (i = i.filter((a) => !u.includes(a))),
          n &&
            u.forEach((a) => {
              const s = new RegExp(
                `^${a.split(/\*+/).map(us).join(".*")}$`,
                "i"
              );
              n.forEach((o) => (s.test(o) ? i.push(o) : null));
            }),
          [...new Set(i.sort())]
        );
      },
      getArcadeType: function (e) {
        return e == null
          ? null
          : k(e) || N(e)
          ? "array"
          : H(e)
          ? "date"
          : v(e)
          ? "text"
          : G(e)
          ? "boolean"
          : z(e)
          ? "number"
          : e instanceof T
          ? "dictionary"
          : ee(e)
          ? "feature"
          : e instanceof Z
          ? "point"
          : e instanceof ue
          ? "polygon"
          : e instanceof se
          ? "polyline"
          : e instanceof xe
          ? "multipoint"
          : e instanceof de
          ? "extent"
          : Yt(e)
          ? "featureSet"
          : Xt(e)
          ? "featureSetCollection"
          : null;
      },
      getViewInfo: function (e) {
        if (
          e &&
          (e.spatialReference != null ||
            (e.scale != null && e.viewingMode != null))
        )
          return {
            view:
              e.viewingMode && e.scale != null
                ? new T({ viewingMode: e.viewingMode, scale: e.scale })
                : null,
            sr: e.spatialReference,
          };
      },
      hasGeometryFunctions: function (e) {
        return ti(e, os);
      },
      hasGeometryOperations: function (e) {
        return ti(e, ls);
      },
      hasVariable: function (e, n) {
        return !!e && Kt(e, n);
      },
      loadScriptDependencies: function (e, n, t = []) {
        return ea(e, n, t);
      },
      updateExecContext: function (e, n) {
        e.vars != null && (e.vars.$feature = n);
      },
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export {
  Dr as $,
  me as A,
  D as B,
  $ as C,
  Ee as D,
  ae as E,
  ft as F,
  Yt as G,
  At as H,
  Pt as I,
  k as J,
  dt as K,
  G as L,
  ka as M,
  Ai as N,
  Ba as O,
  Rn as P,
  P as Q,
  A as R,
  Tn as S,
  xi as T,
  H as U,
  N as V,
  ba as W,
  gt as X,
  z as Y,
  Ii as Z,
  As as _,
  Ci as a,
  ps as a0,
  pr as a1,
  wa as a2,
  Cs as a3,
  bs as a4,
  Es as a5,
  _a as a6,
  gr as a7,
  yr as a8,
  gs as a9,
  Ds as aa,
  ys as ab,
  ws as ac,
  Fs as ad,
  ga as ae,
  wr as af,
  xs as ag,
  Y as ah,
  oe as ai,
  ya as aj,
  je as ak,
  fn as al,
  vs as am,
  di as an,
  en as ao,
  Ot as ap,
  mi as aq,
  hi as ar,
  pi as as,
  fi as at,
  ge as au,
  Di as av,
  xr as aw,
  Ss as ax,
  T as b,
  $n as c,
  te as d,
  $e as e,
  bi as f,
  X as g,
  Ke as h,
  Pe as i,
  ht as j,
  ct as k,
  m as l,
  Ln as m,
  Kn as n,
  Mn as o,
  $t as p,
  Bt as q,
  E as r,
  rn as s,
  Fe as t,
  U as u,
  v,
  Ce as w,
  Lt as x,
  _ as y,
  ee as z,
};
