import {
  kW as de,
  ae as o,
  af as u,
  ar as j,
  aD as le,
  ag as z,
  dd as oe,
  dl as _,
  P as re,
  s as Y,
  R as be,
  iq as Pe,
  kX as ee,
  kY as Ee,
  r as ne,
  im as Ce,
  ip as Oe,
  io as Re,
  et as Fe,
  eu as Ae,
  ev as Ve,
  G as me,
  an as X,
  dg as he,
  a2 as ye,
  hJ as _e,
  U as te,
  bO as fe,
  cy as ge,
  aL as Ue,
  dm as je,
  db as Ne,
} from "./index.8fd7165c.js";
import { p as ke, L as De } from "./WebTileLayer.7b4ff4d0.js";
import { e as We } from "./imageBitmapUtils.d17e4357.js";
import { o as ue } from "./crsUtils.3bab3d8c.js";
import { o as we } from "./xmlUtils.444cb4c0.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
var ie;
let N = (ie = class extends oe {
  constructor(e) {
    super(e),
      (this.fullExtent = null),
      (this.id = null),
      (this.tileInfo = null);
  }
  clone() {
    const e = new ie();
    return (
      this.hasOwnProperty("fullExtent") &&
        (e.fullExtent = this.fullExtent && this.fullExtent.clone()),
      this.hasOwnProperty("id") && (e.id = this.id),
      this.hasOwnProperty("tileInfo") &&
        (e.tileInfo = this.tileInfo && this.tileInfo.clone()),
      e
    );
  }
});
o(
  [u({ type: j, json: { read: { source: "fullExtent" } } })],
  N.prototype,
  "fullExtent",
  void 0
),
  o(
    [u({ type: String, json: { read: { source: "id" } } })],
    N.prototype,
    "id",
    void 0
  ),
  o(
    [u({ type: le, json: { read: { source: "tileInfo" } } })],
    N.prototype,
    "tileInfo",
    void 0
  ),
  (N = ie = o([z("esri.layer.support.TileMatrixSet")], N));
const Be = N;
var se;
let O = (se = class extends oe {
  constructor(e) {
    super(e),
      (this.id = null),
      (this.title = null),
      (this.description = null),
      (this.legendUrl = null);
  }
  clone() {
    const e = new se();
    return (
      this.hasOwnProperty("description") && (e.description = this.description),
      this.hasOwnProperty("id") && (e.id = this.id),
      this.hasOwnProperty("isDefault") && (e.isDefault = this.isDefault),
      this.hasOwnProperty("keywords") &&
        (e.keywords = this.keywords && this.keywords.slice()),
      this.hasOwnProperty("legendUrl") && (e.legendUrl = this.legendUrl),
      this.hasOwnProperty("title") && (e.title = this.title),
      e
    );
  }
});
o([u({ json: { read: { source: "id" } } })], O.prototype, "id", void 0),
  o([u({ json: { read: { source: "title" } } })], O.prototype, "title", void 0),
  o(
    [u({ json: { read: { source: "abstract" } } })],
    O.prototype,
    "description",
    void 0
  ),
  o(
    [u({ json: { read: { source: "legendUrl" } } })],
    O.prototype,
    "legendUrl",
    void 0
  ),
  o(
    [u({ json: { read: { source: "isDefault" } } })],
    O.prototype,
    "isDefault",
    void 0
  ),
  o(
    [u({ json: { read: { source: "keywords" } } })],
    O.prototype,
    "keywords",
    void 0
  ),
  (O = se = o([z("esri.layer.support.WMTSStyle")], O));
const Ke = O;
var ae;
let S = (ae = class extends oe {
  constructor(e) {
    super(e),
      (this.fullExtent = null),
      (this.fullExtents = null),
      (this.imageFormats = null),
      (this.id = null),
      (this.layer = null),
      (this.styles = null),
      (this.tileMatrixSetId = null),
      (this.tileMatrixSets = null);
  }
  get description() {
    return this._get("description");
  }
  set description(e) {
    this._set("description", e);
  }
  readFullExtent(e, t) {
    return (e = t.fullExtent) ? j.fromJSON(e) : null;
  }
  readFullExtents(e, t) {
    var i, r;
    return (i = t.fullExtents) != null && i.length
      ? t.fullExtents.map((s) => j.fromJSON(s))
      : ((r = t.tileMatrixSets) == null
          ? void 0
          : r.map((s) => j.fromJSON(s.fullExtent)).filter((s) => s)) ?? [];
  }
  get imageFormat() {
    let e = this._get("imageFormat");
    return (
      e ||
        (e =
          this.imageFormats && this.imageFormats.length
            ? this.imageFormats[0]
            : ""),
      e
    );
  }
  set imageFormat(e) {
    const t = this.imageFormats;
    (e &&
      (e.includes("image/") || (t && !t.includes(e))) &&
      (e.includes("image/") || (e = "image/" + e), t && !t.includes(e))) ||
      this._set("imageFormat", e);
  }
  get styleId() {
    var t;
    let e = this._get("styleId");
    return (
      e ||
        (e =
          (t = this.styles) != null && t.length
            ? this.styles.getItemAt(0).id
            : ""),
      e
    );
  }
  set styleId(e) {
    this._set("styleId", e);
  }
  get title() {
    return this._get("title");
  }
  set title(e) {
    this._set("title", e);
  }
  get tileMatrixSet() {
    return this.tileMatrixSets
      ? this.tileMatrixSets.find((e) => e.id === this.tileMatrixSetId)
      : null;
  }
  clone() {
    var t;
    const e = new ae();
    return (
      this.hasOwnProperty("description") && (e.description = this.description),
      this.hasOwnProperty("imageFormats") &&
        (e.imageFormats = this.imageFormats && this.imageFormats.slice()),
      this.hasOwnProperty("imageFormat") && (e.imageFormat = this.imageFormat),
      this.hasOwnProperty("fullExtent") &&
        (e.fullExtent = this.fullExtent && this.fullExtent.clone()),
      this.hasOwnProperty("id") && (e.id = this.id),
      this.hasOwnProperty("layer") && (e.layer = this.layer),
      this.hasOwnProperty("styleId") && (e.styleId = this.styleId),
      this.hasOwnProperty("styles") &&
        (e.styles = this.styles && this.styles.clone()),
      this.hasOwnProperty("tileMatrixSetId") &&
        (e.tileMatrixSetId = this.tileMatrixSetId),
      this.hasOwnProperty("tileMatrixSets") &&
        (e.tileMatrixSets =
          (t = this.tileMatrixSets) == null ? void 0 : t.clone()),
      this.hasOwnProperty("title") && (e.title = this.title),
      e
    );
  }
});
o([u()], S.prototype, "description", null),
  o([u()], S.prototype, "fullExtent", void 0),
  o([_("fullExtent", ["fullExtent"])], S.prototype, "readFullExtent", null),
  o([u({ readOnly: !0 })], S.prototype, "fullExtents", void 0),
  o(
    [_("fullExtents", ["fullExtents", "tileMatrixSets"])],
    S.prototype,
    "readFullExtents",
    null
  ),
  o([u()], S.prototype, "imageFormat", null),
  o(
    [u({ json: { read: { source: "formats" } } })],
    S.prototype,
    "imageFormats",
    void 0
  ),
  o([u()], S.prototype, "id", void 0),
  o([u()], S.prototype, "layer", void 0),
  o([u()], S.prototype, "styleId", null),
  o(
    [u({ type: re.ofType(Ke), json: { read: { source: "styles" } } })],
    S.prototype,
    "styles",
    void 0
  ),
  o(
    [u({ value: null, json: { write: { ignoreOrigin: !0 } } })],
    S.prototype,
    "title",
    null
  ),
  o([u()], S.prototype, "tileMatrixSetId", void 0),
  o([u({ readOnly: !0 })], S.prototype, "tileMatrixSet", null),
  o(
    [u({ type: re.ofType(Be), json: { read: { source: "tileMatrixSets" } } })],
    S.prototype,
    "tileMatrixSets",
    void 0
  ),
  (S = ae = o([z("esri.layers.support.WMTSSublayer")], S));
const $ = S,
  Me = 90.71428571428571;
function xe(e) {
  const t = e.replace(/ows:/gi, "");
  if (
    !g(
      "Contents",
      new DOMParser().parseFromString(t, "text/xml").documentElement
    )
  )
    throw new Y(
      "wmtslayer:wmts-capabilities-xml-is-not-valid",
      "the wmts get capabilities response is not compliant",
      { text: e }
    );
}
function ce(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function g(e, t) {
  for (let i = 0; i < t.childNodes.length; i++) {
    const r = t.childNodes[i];
    if (ce(r) && r.nodeName === e) return r;
  }
  return null;
}
function R(e, t) {
  const i = [];
  for (let r = 0; r < t.childNodes.length; r++) {
    const s = t.childNodes[r];
    ce(s) && s.nodeName === e && i.push(s);
  }
  return i;
}
function U(e, t) {
  const i = [];
  for (let r = 0; r < t.childNodes.length; r++) {
    const s = t.childNodes[r];
    ce(s) && s.nodeName === e && i.push(s);
  }
  return i.map((r) => r.textContent).filter(ne);
}
function y(e, t) {
  return (
    e.split(">").forEach((i) => {
      t && (t = g(i, t));
    }),
    t && t.textContent
  );
}
function K(e, t, i, r) {
  let s;
  return (
    Array.prototype.slice.call(r.childNodes).some((l) => {
      if (l.nodeName.includes(e)) {
        const a = g(t, l),
          n = a && a.textContent;
        if (n === i || (i.split(":") && i.split(":")[1] === n))
          return (s = l), !0;
      }
      return !1;
    }),
    s
  );
}
function $e(e, t, i, r, s) {
  const l = y("Abstract", t),
    a = U("Format", t);
  return {
    id: e,
    fullExtent: Je(t),
    fullExtents: qe(t),
    description: l,
    formats: a,
    styles: He(t, r),
    title: y("Title", t),
    tileMatrixSets: Xe(s, t, i),
  };
}
function Ie(e, t) {
  var w;
  const i = [],
    r = (w = e.layerMap) == null ? void 0 : w.get(t);
  if (!r) return null;
  const s = R("ResourceURL", r),
    l = R("Dimension", r);
  let a, n, p, d;
  return (
    l.length &&
      ((a = y("Identifier", l[0])),
      (n = U("Default", l[0]) || U("Value", l[0]))),
    l.length > 1 &&
      ((p = y("Identifier", l[1])),
      (d = U("Default", l[1]) || U("Value", l[1]))),
    e.dimensionMap.set(t, { dimensions: n, dimensions2: d }),
    s.forEach((c) => {
      let m = c.getAttribute("template");
      if (c.getAttribute("resourceType") === "tile") {
        if (a && n.length)
          if (m.includes("{" + a + "}"))
            m = m.replace("{" + a + "}", "{dimensionValue}");
          else {
            const f = m.toLowerCase().indexOf("{" + a.toLowerCase() + "}");
            f > -1 &&
              (m =
                m.substring(0, f) +
                "{dimensionValue}" +
                m.substring(f + a.length + 2));
          }
        if (p && d.length)
          if (m.includes("{" + p + "}"))
            m = m.replace("{" + p + "}", "{dimensionValue2}");
          else {
            const f = m.toLowerCase().indexOf("{" + p.toLowerCase() + "}");
            f > -1 &&
              (m =
                m.substring(0, f) +
                "{dimensionValue2}" +
                m.substring(f + p.length + 2));
          }
        i.push({
          template: m,
          format: c.getAttribute("format"),
          resourceType: "tile",
        });
      }
    }),
    i
  );
}
function Ge(e, t, i, r, s, l, a, n) {
  var m, f;
  const p = (function (E, b, x) {
    const P = Ie(E, b),
      C = P == null ? void 0 : P.filter((F) => F.format === x);
    return (C != null && C.length ? C : P) ?? [];
  })(e, t, r);
  if (!((p == null ? void 0 : p.length) > 0)) return "";
  const { dimensionMap: d } = e,
    w = (m = d.get(t).dimensions) == null ? void 0 : m[0],
    c = (f = d.get(t).dimensions2) == null ? void 0 : f[0];
  return p[a % p.length].template
    .replace(/\{Style\}/gi, s ?? "")
    .replace(/\{TileMatrixSet\}/gi, i ?? "")
    .replace(/\{TileMatrix\}/gi, l)
    .replace(/\{TileRow\}/gi, "" + a)
    .replace(/\{TileCol\}/gi, "" + n)
    .replace(/\{dimensionValue\}/gi, w)
    .replace(/\{dimensionValue2\}/gi, c);
}
function Je(e) {
  const t = g("WGS84BoundingBox", e),
    i = t ? y("LowerCorner", t).split(" ") : ["-180", "-90"],
    r = t ? y("UpperCorner", t).split(" ") : ["180", "90"];
  return {
    xmin: parseFloat(i[0]),
    ymin: parseFloat(i[1]),
    xmax: parseFloat(r[0]),
    ymax: parseFloat(r[1]),
    spatialReference: { wkid: 4326 },
  };
}
function qe(e) {
  const t = [];
  return (
    we(e, {
      BoundingBox: (i) => {
        if (!i.getAttribute("crs")) return;
        const r = i.getAttribute("crs").toLowerCase(),
          s = pe(r),
          l = r.includes("epsg") && ue(s.wkid);
        let a, n, p, d;
        we(i, {
          LowerCorner: (w) => {
            ([a, n] = w.textContent
              .split(" ")
              .map((c) => Number.parseFloat(c))),
              l && ([a, n] = [n, a]);
          },
          UpperCorner: (w) => {
            ([p, d] = w.textContent
              .split(" ")
              .map((c) => Number.parseFloat(c))),
              l && ([p, d] = [d, p]);
          },
        }),
          t.push({ xmin: a, ymin: n, xmax: p, ymax: d, spatialReference: s });
      },
    }),
    t
  );
}
function He(e, t) {
  return R("Style", e).map((i) => {
    const r = g("LegendURL", i),
      s = g("Keywords", i),
      l = s ? U("Keyword", s) : [];
    let a = r && r.getAttribute("xlink:href");
    return (
      t && (a = a && a.replace(/^http:/i, "https:")),
      {
        abstract: y("Abstract", i),
        id: y("Identifier", i),
        isDefault: i.getAttribute("isDefault") === "true",
        keywords: l,
        legendUrl: a,
        title: y("Title", i),
      }
    );
  });
}
function Xe(e, t, i) {
  return R("TileMatrixSetLink", t).map((r) =>
    (function (s, l, a) {
      const n = g("TileMatrixSet", l).textContent,
        p = U("TileMatrix", l),
        d = a.find((M) => {
          const L = g("Identifier", M),
            T = L && L.textContent;
          return !!(T === n || (n.split(":") && n.split(":")[1] === T));
        }),
        w = g("TileMatrixSetLimits", l),
        c = w && R("TileMatrixLimits", w),
        m = new Map();
      if (c != null && c.length)
        for (const M of c) {
          const L = g("TileMatrix", M).textContent,
            T = +g("MinTileRow", M).textContent,
            A = +g("MaxTileRow", M).textContent,
            V = +g("MinTileCol", M).textContent,
            v = +g("MaxTileCol", M).textContent;
          m.set(L, { minCol: V, maxCol: v, minRow: T, maxRow: A });
        }
      const f = y("SupportedCRS", d).toLowerCase(),
        E = (function (M, L) {
          return Le(g("TileMatrix", M), L);
        })(d, f),
        b = E.spatialReference,
        x = g("TileMatrix", d),
        P = [parseInt(y("TileWidth", x), 10), parseInt(y("TileHeight", x), 10)],
        C = [];
      p.length
        ? p.forEach((M, L) => {
            const T = K("TileMatrix", "Identifier", M, d);
            C.push(ve(T, f, L, n, m));
          })
        : R("TileMatrix", d).forEach((M, L) => {
            C.push(ve(M, f, L, n, m));
          });
      const F = (function (M, L, T, A, V) {
          const v = g("BoundingBox", L);
          let I, k, D, J, q, W;
          if (
            (v &&
              ((I = y("LowerCorner", v).split(" ")),
              (k = y("UpperCorner", v).split(" "))),
            I && I.length > 1 && k && k.length > 1)
          )
            (D = parseFloat(I[0])),
              (q = parseFloat(I[1])),
              (J = parseFloat(k[0])),
              (W = parseFloat(k[1]));
          else {
            const H = g("TileMatrix", L),
              Z = parseInt(y("MatrixWidth", H), 10),
              B = parseInt(y("MatrixHeight", H), 10);
            (D = T.x),
              (W = T.y),
              (J = D + Z * A[0] * V.resolution),
              (q = W - B * A[1] * V.resolution);
          }
          return (function (H, Z, B) {
            return (
              H === "1.0.0" &&
              ue(Z.wkid) &&
              !(B.spatialReference.isGeographic && B.x < -90 && B.y >= -90)
            );
          })(M, T.spatialReference, T)
            ? new j(q, D, W, J, T.spatialReference)
            : new j(D, q, J, W, T.spatialReference);
        })(s, d, E, P, C[0]).toJSON(),
        Q = new le({
          dpi: 96,
          spatialReference: b,
          size: P,
          origin: E,
          lods: C,
        }).toJSON();
      return { id: n, fullExtent: F, tileInfo: Q };
    })(e, r, i)
  );
}
function pe(e) {
  e = e.toLowerCase();
  let t = parseInt(e.split(":").pop(), 10);
  (t !== 900913 && t !== 3857) || (t = 102100);
  const i = (function (r) {
    return r.includes("crs84") || r.includes("crs:84")
      ? G.CRS84
      : r.includes("crs83") || r.includes("crs:83")
      ? G.CRS83
      : r.includes("crs27") || r.includes("crs:27")
      ? G.CRS27
      : null;
  })(e);
  return ne(i) && (t = i), { wkid: t };
}
function Le(e, t) {
  const i = pe(t),
    [r, s] = y("TopLeftCorner", e)
      .split(" ")
      .map((a) => parseFloat(a)),
    l = t.includes("epsg") && ue(i.wkid);
  return new be(
    l
      ? { x: s, y: r, spatialReference: i }
      : { x: r, y: s, spatialReference: i }
  );
}
var G;
function ve(e, t, i, r, s) {
  const l = pe(t),
    a = y("Identifier", e);
  let n = parseFloat(y("ScaleDenominator", e));
  const p = Te(l.wkid, n, r);
  n *= 96 / Me;
  const d = +y("MatrixWidth", e),
    w = +y("MatrixHeight", e),
    {
      maxCol: c = d - 1,
      maxRow: m = w - 1,
      minCol: f = 0,
      minRow: E = 0,
    } = s.get(a) ?? {},
    { x: b, y: x } = Le(e, t);
  return new Pe({
    cols: [f, c],
    level: i,
    levelValue: a,
    origin: [b, x],
    scale: n,
    resolution: p,
    rows: [E, m],
  });
}
function Te(e, t, i) {
  let r;
  return (
    (r = ee.hasOwnProperty("" + e)
      ? ee.values[ee[e]]
      : i === "default028mm"
      ? (6370997 * Math.PI) / 180
      : Ee(e).metersPerDegree),
    (7 * t) / 25e3 / r
  );
}
(function (e) {
  (e[(e.CRS84 = 4326)] = "CRS84"),
    (e[(e.CRS83 = 4269)] = "CRS83"),
    (e[(e.CRS27 = 4267)] = "CRS27");
})(G || (G = {}));
const Se = {
    "image/png": ".png",
    "image/png8": ".png",
    "image/png24": ".png",
    "image/png32": ".png",
    "image/jpg": ".jpg",
    "image/jpeg": ".jpeg",
    "image/gif": ".gif",
    "image/bmp": ".bmp",
    "image/tiff": ".tif",
    "image/jpgpng": "",
    "image/jpegpng": "",
    "image/unknown": "",
  },
  Ye = new Set([
    "version",
    "service",
    "request",
    "layer",
    "style",
    "format",
    "tilematrixset",
    "tilematrix",
    "tilerow",
    "tilecol",
  ]);
let h = class extends Ce(Oe(Re(Fe(Ae(Ve(Ne)))))) {
  constructor(...e) {
    super(...e),
      (this.copyright = ""),
      (this.customParameters = null),
      (this.customLayerParameters = null),
      (this.fullExtent = null),
      (this.operationalLayerType = "WebTiledLayer"),
      (this.resourceInfo = null),
      (this.serviceMode = "RESTful"),
      (this.sublayers = null),
      (this.type = "wmts"),
      (this.version = "1.0.0"),
      this.addHandles([
        me(
          () => this.activeLayer,
          (t, i) => {
            i && (i.layer = null), t && (t.layer = this);
          },
          X
        ),
        he(
          () => this.sublayers,
          "after-add",
          ({ item: t }) => {
            t.layer = this;
          },
          X
        ),
        he(
          () => this.sublayers,
          "after-remove",
          ({ item: t }) => {
            t.layer = null;
          },
          X
        ),
        me(
          () => this.sublayers,
          (t, i) => {
            if (i) for (const r of i) r.layer = null;
            if (t) for (const r of t) r.layer = this;
          },
          X
        ),
      ]);
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  load(e) {
    if (this.serviceMode === "KVP" || this.serviceMode === "RESTful")
      return (
        this.addResolvingPromise(
          this.loadFromPortal({ supportedTypes: ["WMTS"] }, e)
            .catch(ye)
            .then(() => this._fetchService(e))
            .catch((t) => {
              throw (
                (ye(t),
                new Y(
                  "wmtslayer:unsupported-service-data",
                  "Invalid response from the WMTS service.",
                  { error: t }
                ))
              );
            })
        ),
        Promise.resolve(this)
      );
  }
  get activeLayer() {
    return this._get("activeLayer");
  }
  set activeLayer(e) {
    this._set("activeLayer", e);
  }
  readActiveLayerFromService(e, t, i) {
    this.activeLayer || (this.activeLayer = new $());
    let r = t.layers.find((s) => s.id === this.activeLayer.id);
    return (
      r || (r = t.layers[0]), this.activeLayer.read(r, i), this.activeLayer
    );
  }
  readActiveLayerFromItemOrWebDoc(e, t) {
    const { templateUrl: i, wmtsInfo: r } = t,
      s = i ? this._getLowerCasedUrlParams(i) : null,
      l = r == null ? void 0 : r.layerIdentifier;
    let a = null;
    const n = r == null ? void 0 : r.tileMatrixSet;
    n && (Array.isArray(n) ? n.length && (a = n[0]) : (a = n));
    const p = s == null ? void 0 : s.format,
      d = s == null ? void 0 : s.style;
    return new $({ id: l, imageFormat: p, styleId: d, tileMatrixSetId: a });
  }
  writeActiveLayer(e, t, i, r) {
    const s = this.activeLayer;
    t.templateUrl = this.getUrlTemplate(
      s.id,
      s.tileMatrixSetId,
      s.imageFormat,
      s.styleId
    );
    const l = _e("tileMatrixSet.tileInfo", s);
    (t.tileInfo = l ? l.toJSON(r) : null),
      (t.wmtsInfo = {
        ...t.wmtsInfo,
        layerIdentifier: s.id,
        tileMatrixSet: s.tileMatrixSetId,
      });
  }
  readCustomParameters(e, t) {
    const i = t.wmtsInfo;
    return i ? this._mergeParams(i.customParameters, i.url) : null;
  }
  get fullExtents() {
    return this.activeLayer.fullExtents;
  }
  readServiceMode(e, t) {
    return t.templateUrl.includes("?") ? "KVP" : "RESTful";
  }
  readSublayersFromService(e, t, i) {
    return (function (r, s) {
      return r.map((l) => {
        const a = new $();
        return a.read(l, s), a;
      });
    })(t.layers, i);
  }
  get supportedSpatialReferences() {
    var e;
    return (
      ((e = this.activeLayer.tileMatrixSets) == null
        ? void 0
        : e
            .map((t) => {
              var i;
              return (i = t.tileInfo) == null ? void 0 : i.spatialReference;
            })
            .toArray()
            .filter(ne)) ?? []
    );
  }
  get tilemapCache() {
    var t, i;
    const e =
      (i = (t = this.activeLayer) == null ? void 0 : t.tileMatrixSet) == null
        ? void 0
        : i.tileInfo;
    return e
      ? new (class {
          constructor(r, s = 0, l = r.lods.length - 1) {
            (this.tileInfo = r), (this.minLOD = s), (this.maxLOD = l);
          }
          getAvailability(r, s, l) {
            var n;
            const a = (n = this.tileInfo) == null ? void 0 : n.lodAt(r);
            return !a || r < this.minLOD || r > this.maxLOD
              ? "unavailable"
              : a.cols && a.rows
              ? l >= a.cols[0] &&
                l <= a.cols[1] &&
                s >= a.rows[0] &&
                s <= a.rows[1]
                ? "available"
                : "unavailable"
              : "available";
          }
          async fetchAvailability(r, s, l, a) {
            return await de(a), this.getAvailability(r, s, l);
          }
          async fetchAvailabilityUpsample(r, s, l, a, n) {
            await de(n), (a.level = r), (a.row = s), (a.col = l);
            const p = this.tileInfo;
            for (p.updateTileInfo(a); ; ) {
              const d = this.getAvailability(a.level, a.row, a.col);
              if (d !== "unavailable") return d;
              if (!p.upsampleTile(a)) return "unavailable";
            }
          }
        })(e)
      : void 0;
  }
  get title() {
    var e;
    return ((e = this.activeLayer) == null ? void 0 : e.title) ?? "Layer";
  }
  set title(e) {
    this._overrideIfSome("title", e);
  }
  get url() {
    return this._get("url");
  }
  set url(e) {
    e && e.substr(-1) === "/"
      ? this._set("url", e.slice(0, -1))
      : this._set("url", e);
  }
  createWebTileLayer(e) {
    var l;
    const t = this.getUrlTemplate(
        this.activeLayer.id,
        this.activeLayer.tileMatrixSetId,
        this.activeLayer.imageFormat,
        this.activeLayer.styleId
      ),
      i =
        (l = this._getTileMatrixSetById(e.tileMatrixSetId)) == null
          ? void 0
          : l.tileInfo,
      r = e.fullExtent,
      s = new ke({
        layerIdentifier: e.id,
        tileMatrixSet: e.tileMatrixSetId,
        url: this.url,
      });
    return (
      this.customLayerParameters &&
        (s.customLayerParameters = this.customLayerParameters),
      this.customParameters && (s.customParameters = this.customParameters),
      new De({ fullExtent: r, urlTemplate: t, tileInfo: i, wmtsInfo: s })
    );
  }
  async fetchTile(e, t, i) {
    const r = this.getTileUrl(e, t, i),
      { data: s } = await te(r, { responseType: "image" });
    return s;
  }
  async fetchImageBitmapTile(e, t, i) {
    const r = this.getTileUrl(e, t, i),
      { data: s } = await te(r, { responseType: "blob" });
    return We(s, r);
  }
  findSublayerById(e) {
    var t;
    return (t = this.sublayers) == null ? void 0 : t.find((i) => i.id === e);
  }
  getTileUrl(e, t, i) {
    var a, n;
    const r =
        (n =
          (a = this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId)) ==
          null
            ? void 0
            : a.tileInfo) == null
          ? void 0
          : n.lods[e],
      s = r ? (r.levelValue ? r.levelValue : `${r.level}`) : `${e}`;
    let l = this.resourceInfo
      ? ""
      : Ge(
          { dimensionMap: this.dimensionMap, layerMap: this.layerMap },
          this.activeLayer.id,
          this.activeLayer.tileMatrixSetId,
          this.activeLayer.imageFormat,
          this.activeLayer.styleId,
          s,
          t,
          i
        );
    return (
      l ||
        (l = this.getUrlTemplate(
          this.activeLayer.id,
          this.activeLayer.tileMatrixSetId,
          this.activeLayer.imageFormat,
          this.activeLayer.styleId
        )
          .replace(/\{level\}/gi, s)
          .replace(/\{row\}/gi, `${t}`)
          .replace(/\{col\}/gi, `${i}`)),
      (l = this._appendCustomLayerParameters(l)),
      l
    );
  }
  getUrlTemplate(e, t, i, r) {
    if (!this.resourceInfo) {
      const s = (function (l, a, n, p) {
        const { dimensionMap: d } = l,
          w = Ie(l, a);
        let c = "";
        if (w && w.length > 0) {
          const m = d.get(a).dimensions && d.get(a).dimensions[0],
            f = d.get(a).dimensions2 && d.get(a).dimensions2[0];
          (c = w[0].template),
            c.indexOf(".xxx") === c.length - 4 &&
              (c = c.slice(0, c.length - 4)),
            (c = c.replace(/\{Style\}/gi, p)),
            (c = c.replace(/\{TileMatrixSet\}/gi, n)),
            (c = c.replace(/\{TileMatrix\}/gi, "{level}")),
            (c = c.replace(/\{TileRow\}/gi, "{row}")),
            (c = c.replace(/\{TileCol\}/gi, "{col}")),
            (c = c.replace(/\{dimensionValue\}/gi, m)),
            (c = c.replace(/\{dimensionValue2\}/gi, f));
        }
        return c;
      })({ dimensionMap: this.dimensionMap, layerMap: this.layerMap }, e, t, r);
      if (s) return s;
    }
    if (this.serviceMode === "KVP")
      return (
        this.url +
        "?SERVICE=WMTS&VERSION=" +
        this.version +
        "&REQUEST=GetTile&LAYER=" +
        e +
        "&STYLE=" +
        r +
        "&FORMAT=" +
        i +
        "&TILEMATRIXSET=" +
        t +
        "&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}"
      );
    if (this.serviceMode === "RESTful") {
      let s = "";
      return (
        Se[i.toLowerCase()] && (s = Se[i.toLowerCase()]),
        this.url + e + "/" + r + "/" + t + "/{level}/{row}/{col}" + s
      );
    }
    return "";
  }
  async _fetchService(e) {
    let t;
    if (this.resourceInfo)
      this.resourceInfo.serviceMode === "KVP" &&
        (this.url += this.url.includes("?") ? "" : "?"),
        (t = { ssl: !1, data: this.resourceInfo });
    else
      try {
        (t = await this._getCapabilities(this.serviceMode, e)), xe(t.data);
      } catch {
        const i = this.serviceMode === "KVP" ? "RESTful" : "KVP";
        try {
          (t = await this._getCapabilities(i, e)),
            xe(t.data),
            (this.serviceMode = i);
        } catch (r) {
          throw new Y(
            "wmtslayer:unsupported-service-data",
            "Services does not support RESTful or KVP service modes.",
            { error: r }
          );
        }
      }
    this.resourceInfo
      ? (t.data = (function (i) {
          return (
            i.layers.forEach((r) => {
              var s;
              (s = r.tileMatrixSets) == null ||
                s.forEach((l) => {
                  var n;
                  const a = l.tileInfo;
                  a &&
                    a.dpi !== 96 &&
                    ((n = a.lods) == null ||
                      n.forEach((p) => {
                        var d;
                        (p.scale = (96 * p.scale) / a.dpi),
                          (p.resolution = Te(
                            (d = a.spatialReference) == null ? void 0 : d.wkid,
                            (p.scale * Me) / 96,
                            l.id
                          ));
                      }),
                    (a.dpi = 96));
                });
            }),
            i
          );
        })(t.data))
      : (t.data = (function (i, r) {
          var A, V;
          i = i.replace(/ows:/gi, "");
          const s = new DOMParser().parseFromString(
              i,
              "text/xml"
            ).documentElement,
            l = new Map(),
            a = new Map(),
            n = g("Contents", s);
          if (!n) throw new Y("wmtslayer:wmts-capabilities-xml-is-not-valid");
          const p =
              (A = g("OperationsMetadata", s)) == null
                ? void 0
                : A.querySelector("[name='GetTile']"),
            d = p == null ? void 0 : p.getElementsByTagName("Get"),
            w = d && Array.prototype.slice.call(d),
            c = (V = r.url) == null ? void 0 : V.indexOf("https"),
            m = c !== void 0 && c > -1;
          let f,
            E,
            b = r.serviceMode,
            x = r == null ? void 0 : r.url;
          if (
            (w &&
              w.length &&
              w.some((v) => {
                const I = g("Constraint", v);
                return !I || K("AllowedValues", "Value", b, I)
                  ? ((x = v.attributes[0].nodeValue), !0)
                  : (!I ||
                    K("AllowedValues", "Value", "RESTful", I) ||
                    K("AllowedValues", "Value", "REST", I)
                      ? (E = v.attributes[0].nodeValue)
                      : (I && !K("AllowedValues", "Value", "KVP", I)) ||
                        (f = v.attributes[0].nodeValue),
                    !1);
              }),
            !x)
          )
            if (E) (x = E), (b = "RESTful");
            else if (f) (x = f), (b = "KVP");
            else {
              const v = g("ServiceMetadataURL", s);
              x = v == null ? void 0 : v.getAttribute("xlink:href");
            }
          const P = x.indexOf("1.0.0/");
          P === -1 && b === "RESTful"
            ? (x += "/")
            : P > -1 && (x = x.substring(0, P)),
            b === "KVP" && (x += P > -1 ? "" : "?"),
            m && (x = x.replace(/^http:/i, "https:"));
          const C = y("ServiceIdentification>ServiceTypeVersion", s),
            F = y("ServiceIdentification>AccessConstraints", s),
            Q = F && /^none$/i.test(F) ? null : F,
            M = R("Layer", n),
            L = R("TileMatrixSet", n),
            T = M.map((v) => {
              const I = y("Identifier", v);
              return l.set(I, v), $e(I, v, L, m, C);
            });
          return {
            copyright: Q,
            dimensionMap: a,
            layerMap: l,
            layers: T,
            serviceMode: b,
            tileUrl: x,
          };
        })(t.data, { serviceMode: this.serviceMode, url: this.url })),
      t.data && this.read(t.data, { origin: "service" });
  }
  async _getCapabilities(e, t) {
    const i = this._getCapabilitiesUrl(e);
    return await te(i, { ...t, responseType: "text" });
  }
  _getTileMatrixSetById(e) {
    var i, r;
    return (r =
      (i = this.findSublayerById(this.activeLayer.id)) == null
        ? void 0
        : i.tileMatrixSets) == null
      ? void 0
      : r.find((s) => s.id === e);
  }
  _appendCustomParameters(e) {
    return this._appendParameters(e, this.customParameters);
  }
  _appendCustomLayerParameters(e) {
    return this._appendParameters(e, {
      ...fe(this.customParameters),
      ...this.customLayerParameters,
    });
  }
  _appendParameters(e, t) {
    const i = ge(e),
      r = { ...i.query, ...t },
      s = Ue(r);
    return s === "" ? i.path : `${i.path}?${s}`;
  }
  _getCapabilitiesUrl(e) {
    this.url = this.url.split("?")[0];
    const t =
      e === "KVP"
        ? `${this.url}?request=GetCapabilities&service=WMTS&version=${this.version}`
        : `${this.url}/${this.version}/WMTSCapabilities.xml`;
    return this._appendCustomParameters(t);
  }
  _getLowerCasedUrlParams(e) {
    if (!e) return null;
    const t = ge(e).query;
    if (!t) return null;
    const i = {};
    return (
      Object.keys(t).forEach((r) => {
        i[r.toLowerCase()] = t[r];
      }),
      i
    );
  }
  _mergeParams(e, t) {
    const i = this._getLowerCasedUrlParams(t);
    if (i) {
      const r = Object.keys(i);
      r.length &&
        ((e = e ? fe(e) : {}),
        r.forEach((s) => {
          e.hasOwnProperty(s) || Ye.has(s) || (e[s] = i[s]);
        }));
    }
    return e;
  }
};
o([u()], h.prototype, "dimensionMap", void 0),
  o([u()], h.prototype, "layerMap", void 0),
  o(
    [
      u({
        type: $,
        json: { origins: { "web-document": { write: { ignoreOrigin: !0 } } } },
      }),
    ],
    h.prototype,
    "activeLayer",
    null
  ),
  o(
    [_("service", "activeLayer", ["layers"])],
    h.prototype,
    "readActiveLayerFromService",
    null
  ),
  o(
    [_(["web-document", "portal-item"], "activeLayer", ["wmtsInfo"])],
    h.prototype,
    "readActiveLayerFromItemOrWebDoc",
    null
  ),
  o(
    [
      je(["web-document", "portal-item"], "activeLayer", {
        templateUrl: { type: String },
        tileInfo: { type: le },
        "wmtsInfo.layerIdentifier": { type: String },
        "wmtsInfo.tileMatrixSet": { type: String },
      }),
    ],
    h.prototype,
    "writeActiveLayer",
    null
  ),
  o(
    [u({ type: String, value: "", json: { write: !0 } })],
    h.prototype,
    "copyright",
    void 0
  ),
  o([u({ type: ["show", "hide"] })], h.prototype, "listMode", void 0),
  o([u({ json: { read: !0, write: !0 } })], h.prototype, "blendMode", void 0),
  o(
    [
      u({
        json: {
          origins: {
            "web-document": {
              read: { source: ["wmtsInfo.customParameters", "wmtsInfo.url"] },
              write: { target: "wmtsInfo.customParameters" },
            },
            "portal-item": {
              read: { source: ["wmtsInfo.customParameters", "wmtsInfo.url"] },
              write: { target: "wmtsInfo.customParameters" },
            },
          },
        },
      }),
    ],
    h.prototype,
    "customParameters",
    void 0
  ),
  o(
    [_(["portal-item", "web-document"], "customParameters")],
    h.prototype,
    "readCustomParameters",
    null
  ),
  o(
    [
      u({
        json: {
          origins: {
            "web-document": {
              read: { source: "wmtsInfo.customLayerParameters" },
              write: { target: "wmtsInfo.customLayerParameters" },
            },
            "portal-item": {
              read: { source: "wmtsInfo.customLayerParameters" },
              write: { target: "wmtsInfo.customLayerParameters" },
            },
          },
        },
      }),
    ],
    h.prototype,
    "customLayerParameters",
    void 0
  ),
  o(
    [
      u({
        type: j,
        json: {
          write: { ignoreOrigin: !0 },
          origins: {
            "web-document": { read: { source: "fullExtent" } },
            "portal-item": { read: { source: "fullExtent" } },
          },
        },
      }),
    ],
    h.prototype,
    "fullExtent",
    void 0
  ),
  o([u({ readOnly: !0 })], h.prototype, "fullExtents", null),
  o(
    [u({ type: ["WebTiledLayer"] })],
    h.prototype,
    "operationalLayerType",
    void 0
  ),
  o([u()], h.prototype, "resourceInfo", void 0),
  o([u()], h.prototype, "serviceMode", void 0),
  o(
    [_(["portal-item", "web-document"], "serviceMode", ["templateUrl"])],
    h.prototype,
    "readServiceMode",
    null
  ),
  o([u({ type: re.ofType($) })], h.prototype, "sublayers", void 0),
  o(
    [_("service", "sublayers", ["layers"])],
    h.prototype,
    "readSublayersFromService",
    null
  ),
  o([u({ readOnly: !0 })], h.prototype, "supportedSpatialReferences", null),
  o([u({ readOnly: !0 })], h.prototype, "tilemapCache", null),
  o([u({ json: { read: { source: "title" } } })], h.prototype, "title", null),
  o(
    [u({ json: { read: !1 }, readOnly: !0, value: "wmts" })],
    h.prototype,
    "type",
    void 0
  ),
  o(
    [
      u({
        json: {
          origins: {
            service: { read: { source: "tileUrl" } },
            "web-document": {
              read: { source: "wmtsInfo.url" },
              write: { target: "wmtsInfo.url" },
            },
            "portal-item": {
              read: { source: "wmtsInfo.url" },
              write: { target: "wmtsInfo.url" },
            },
          },
        },
      }),
    ],
    h.prototype,
    "url",
    null
  ),
  o([u()], h.prototype, "version", void 0),
  (h = o([z("esri.layers.WMTSLayer")], h));
const ut = h;
export { ut as default };
