import {
  bD as Pe,
  dg as k,
  an as A,
  G as he,
  ar as U,
  hT as Ae,
  P as K,
  ae as o,
  af as p,
  dl as F,
  dT as Ue,
  ag as ge,
  is as _e,
  s as Me,
  r as v,
  aH as I,
  cy as Te,
  t as P,
  d0 as je,
  im as Ce,
  iW as qe,
  ip as Ve,
  io as We,
  et as Be,
  eu as $e,
  ev as ke,
  ee as De,
  a2 as Ge,
  U as X,
  e2 as He,
  kT as Xe,
  ac as Je,
  kU as Qe,
  ai as ze,
  al as Ze,
  hE as Ke,
  aZ as Ye,
  bO as et,
  dm as J,
  j0 as tt,
  gO as rt,
  ey as nt,
  db as st,
  kV as it,
} from "./index.8fd7165c.js";
import { i as se } from "./scaleUtils.54369baa.js";
import { o as z } from "./crsUtils.3bab3d8c.js";
import { l as ie } from "./ExportWMSImageParameters.5fef4d3b.js";
import { e as at } from "./imageBitmapUtils.d17e4357.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
var W;
let ot = 0,
  h = (W = class extends Pe(_e) {
    constructor(e) {
      super(e),
        (this.dimensions = null),
        (this.fullExtents = null),
        (this.legendUrl = null),
        (this.legendEnabled = !0),
        (this.layer = null),
        (this.maxScale = 0),
        (this.minScale = 0),
        (this.parent = null),
        (this.popupEnabled = !1),
        (this.queryable = !1),
        (this.sublayers = null),
        (this.spatialReferences = null),
        this.addHandles([
          k(
            () => this.sublayers,
            "after-add",
            ({ item: t }) => {
              (t.parent = this), (t.layer = this.layer);
            },
            A
          ),
          k(
            () => this.sublayers,
            "after-remove",
            ({ item: t }) => {
              t.layer = t.parent = null;
            },
            A
          ),
          he(
            () => this.sublayers,
            (t, r) => {
              if (r) for (const n of r) n.layer = n.parent = null;
              if (t)
                for (const n of t) (n.parent = this), (n.layer = this.layer);
            },
            A
          ),
        ]);
    }
    get description() {
      return this._get("description");
    }
    set description(e) {
      this._set("description", e);
    }
    get fullExtent() {
      return this._get("fullExtent");
    }
    set fullExtent(e) {
      this._set("fullExtent", e);
    }
    readExtent(e, t) {
      return (e = t.extent) ? U.fromJSON(e) : null;
    }
    get id() {
      return this._get("id") ?? ot++;
    }
    set id(e) {
      this._set("id", e);
    }
    readLegendUrl(e, t) {
      return (
        (t == null ? void 0 : t.legendUrl) ??
        (t == null ? void 0 : t.legendURL) ??
        null
      );
    }
    get effectiveScaleRange() {
      const { minScale: e, maxScale: t } = this;
      return { minScale: e, maxScale: t };
    }
    get name() {
      return this._get("name");
    }
    set name(e) {
      this._set("name", e);
    }
    castSublayers(e) {
      return Ae(K.ofType(W), e);
    }
    get title() {
      return this._get("title");
    }
    set title(e) {
      this._set("title", e);
    }
    get visible() {
      return this._get("visible");
    }
    set visible(e) {
      this._setAndNotifyLayer("visible", e);
    }
    clone() {
      var t, r;
      const e = new W();
      return (
        this.hasOwnProperty("description") &&
          (e.description = this.description),
        this.hasOwnProperty("fullExtent") &&
          (e.fullExtent = this.fullExtent.clone()),
        this.hasOwnProperty("fullExtents") &&
          (e.fullExtents =
            ((t = this.fullExtents) == null
              ? void 0
              : t.map((n) => n.clone())) ?? null),
        this.hasOwnProperty("legendUrl") && (e.legendUrl = this.legendUrl),
        this.hasOwnProperty("legendEnabled") &&
          (e.legendEnabled = this.legendEnabled),
        this.hasOwnProperty("layer") && (e.layer = this.layer),
        this.hasOwnProperty("name") && (e.name = this.name),
        this.hasOwnProperty("parent") && (e.parent = this.parent),
        this.hasOwnProperty("queryable") && (e.queryable = this.queryable),
        this.hasOwnProperty("sublayers") &&
          (e.sublayers =
            this.sublayers && this.sublayers.map((n) => n.clone())),
        this.hasOwnProperty("spatialReferences") &&
          (e.spatialReferences =
            (r = this.spatialReferences) == null ? void 0 : r.map((n) => n)),
        this.hasOwnProperty("visible") && (e.visible = this.visible),
        this.hasOwnProperty("title") && (e.title = this.title),
        e
      );
    }
    _setAndNotifyLayer(e, t) {
      const r = this.layer;
      this._get(e) !== t &&
        (this._set(e, t),
        r && r.emit("wms-sublayer-update", { propertyName: e, id: this.id }));
    }
  });
o([p()], h.prototype, "description", null),
  o([p({ readOnly: !0 })], h.prototype, "dimensions", void 0),
  o([p({ value: null })], h.prototype, "fullExtent", null),
  o([F("fullExtent", ["extent"])], h.prototype, "readExtent", null),
  o([p()], h.prototype, "fullExtents", void 0),
  o(
    [
      p({
        type: Number,
        json: {
          write: {
            enabled: !1,
            overridePolicy: () => ({ ignoreOrigin: !0, enabled: !0 }),
          },
        },
      }),
    ],
    h.prototype,
    "id",
    null
  ),
  o(
    [
      p({
        type: String,
        json: {
          origins: {
            "web-document": {
              read: { source: ["legendUrl", "legendURL"] },
              write: { target: "legendUrl", ignoreOrigin: !0 },
            },
          },
          read: { source: "legendURL" },
          write: { ignoreOrigin: !0 },
        },
      }),
    ],
    h.prototype,
    "legendUrl",
    void 0
  ),
  o([F(["web-document"], "legendUrl")], h.prototype, "readLegendUrl", null),
  o(
    [
      p({
        value: !0,
        type: Boolean,
        json: {
          read: { source: "showLegend" },
          write: { target: "showLegend" },
          origins: {
            "web-map": { read: !1, write: !1 },
            "web-scene": { read: !1, write: !1 },
          },
        },
      }),
    ],
    h.prototype,
    "legendEnabled",
    void 0
  ),
  o([p()], h.prototype, "layer", void 0),
  o([p()], h.prototype, "maxScale", void 0),
  o([p()], h.prototype, "minScale", void 0),
  o([p({ readOnly: !0 })], h.prototype, "effectiveScaleRange", null),
  o(
    [
      p({
        type: String,
        value: null,
        json: { read: { source: "name" }, write: { ignoreOrigin: !0 } },
      }),
    ],
    h.prototype,
    "name",
    null
  ),
  o([p()], h.prototype, "parent", void 0),
  o(
    [
      p({
        type: Boolean,
        json: {
          read: { source: "showPopup" },
          write: { ignoreOrigin: !0, target: "showPopup" },
        },
      }),
    ],
    h.prototype,
    "popupEnabled",
    void 0
  ),
  o(
    [p({ type: Boolean, json: { write: { ignoreOrigin: !0 } } })],
    h.prototype,
    "queryable",
    void 0
  ),
  o([p()], h.prototype, "sublayers", void 0),
  o([Ue("sublayers")], h.prototype, "castSublayers", null),
  o(
    [p({ type: [Number], json: { read: { source: "spatialReferences" } } })],
    h.prototype,
    "spatialReferences",
    void 0
  ),
  o(
    [p({ type: String, value: null, json: { write: { ignoreOrigin: !0 } } })],
    h.prototype,
    "title",
    null
  ),
  o(
    [
      p({
        type: Boolean,
        value: !0,
        json: { read: { source: "defaultVisibility" } },
      }),
    ],
    h.prototype,
    "visible",
    null
  ),
  (h = W = o([ge("esri.layers.support.WMSSublayer")], h));
const Z = h,
  V = { 84: 4326, 83: 4269, 27: 4267 };
function lt(e) {
  if (!e) return null;
  const t = { idCounter: -1 };
  typeof e == "string" && (e = new DOMParser().parseFromString(e, "text/xml"));
  const r = e.documentElement;
  if (r.nodeName === "ServiceExceptionReport") {
    const x = Array.prototype.slice.call(r.childNodes).map((T) => T.textContent)
      .join(`\r
`);
    throw new Me(
      "wmslayer:wms-capabilities-xml-is-not-valid",
      "The server returned errors when the WMS capabilities were requested.",
      x
    );
  }
  const n = w("Capability", r),
    s = w("Service", r),
    l = n && w("Request", n);
  if (!n || !s || !l) return null;
  const a = w("Layer", n);
  if (!a) return null;
  const f =
      r.nodeName === "WMS_Capabilities" || r.nodeName === "WMT_MS_Capabilities"
        ? r.getAttribute("version")
        : "1.3.0",
    i = S("Title", s, "") || S("Name", s, ""),
    y = S("AccessConstraints", s, ""),
    u = /^none$/i.test(y) ? "" : y,
    c = S("Abstract", s, ""),
    d = parseInt(S("MaxWidth", s, "5000"), 10),
    g = parseInt(S("MaxHeight", s, "5000"), 10),
    N = oe(l, "GetMap"),
    _ = ae(l, "GetMap"),
    b = q(a, f, t);
  if (!b) return null;
  let M,
    D = 0;
  const Se = Array.prototype.slice.call(n.childNodes),
    Ee = b.sublayers ?? [],
    G = (x) => {
      x != null && Ee.push(x);
    };
  Se.forEach((x) => {
    x.nodeName === "Layer" &&
      (D === 0
        ? (M = x)
        : (D === 1 && b.name && ((b.name = ""), G(q(M, f, t))), G(q(x, f, t))),
      D++);
  });
  let O = b.sublayers,
    H = b.extent;
  const Ne = b.fullExtents ?? [];
  if ((O || (O = []), O.length === 0 && O.push(b), !H)) {
    const x = new U(O[0].extent);
    (b.extent = x.toJSON()), (H = b.extent);
  }
  const Fe = b.spatialReferences.length > 0 ? b.spatialReferences : be(b),
    Y = ae(l, "GetFeatureInfo"),
    Ie = Y ? oe(l, "GetFeatureInfo") : null,
    ee = xe(O),
    Oe = b.minScale || 0,
    Re = b.maxScale || 0,
    te = b.dimensions ?? [],
    Le = ee.reduce((x, T) => x.concat(T.dimensions ?? []), []),
    re = te.concat(Le).filter(ve);
  let ne = null;
  if (re.length) {
    const x = re
      .map((T) => {
        const { extent: j } = T;
        return (function (E) {
          return Array.isArray(E) && E.length > 0 && E[0] instanceof Date;
        })(j)
          ? j.map((E) => E.getTime())
          : j == null
          ? void 0
          : j.map((E) => [E.min.getTime(), E.max.getTime()]);
      })
      .flat(2)
      .filter(v);
    ne = {
      startTimeField: null,
      endTimeField: null,
      trackIdField: void 0,
      timeExtent: [Math.min(...x), Math.max(...x)],
    };
  }
  return {
    copyright: u,
    description: c,
    dimensions: te,
    extent: H,
    fullExtents: Ne,
    featureInfoFormats: Ie,
    featureInfoUrl: Y,
    mapUrl: _,
    maxWidth: d,
    maxHeight: g,
    maxScale: Re,
    minScale: Oe,
    layers: ee,
    spatialReferences: Fe,
    supportedImageFormatTypes: N,
    timeInfo: ne,
    title: i,
    version: f,
  };
}
function be(e) {
  if (e.spatialReferences.length > 0) return e.spatialReferences;
  if (e.sublayers)
    for (const t of e.sublayers) {
      const r = be(t);
      if (r.length > 0) return r;
    }
  return [];
}
function xe(e) {
  var r;
  let t = [];
  for (const n of e)
    t.push(n),
      (r = n.sublayers) != null &&
        r.length &&
        ((t = t.concat(xe(n.sublayers))), delete n.sublayers);
  return t;
}
function B(e, t, r) {
  return t.getAttribute(e) ?? r;
}
function w(e, t) {
  for (let r = 0; r < t.childNodes.length; r++) {
    const n = t.childNodes[r];
    if (we(n) && n.nodeName === e) return n;
  }
  return null;
}
function $(e, t) {
  if (t == null) return [];
  const r = [];
  for (let n = 0; n < t.childNodes.length; n++) {
    const s = t.childNodes[n];
    we(s) && s.nodeName === e && r.push(s);
  }
  return r;
}
function S(e, t, r) {
  var n;
  return ((n = w(e, t)) == null ? void 0 : n.textContent) ?? r;
}
function C(e, t, r) {
  if (!e) return null;
  const n = parseFloat(e.getAttribute("minx")),
    s = parseFloat(e.getAttribute("miny")),
    l = parseFloat(e.getAttribute("maxx")),
    a = parseFloat(e.getAttribute("maxy"));
  let f, i, y, u;
  r
    ? ((f = isNaN(s) ? -Number.MAX_VALUE : s),
      (i = isNaN(n) ? -Number.MAX_VALUE : n),
      (y = isNaN(a) ? Number.MAX_VALUE : a),
      (u = isNaN(l) ? Number.MAX_VALUE : l))
    : ((f = isNaN(n) ? -Number.MAX_VALUE : n),
      (i = isNaN(s) ? -Number.MAX_VALUE : s),
      (y = isNaN(l) ? Number.MAX_VALUE : l),
      (u = isNaN(a) ? Number.MAX_VALUE : a));
  const c = new I({ wkid: t });
  return new U({ xmin: f, ymin: i, xmax: y, ymax: u, spatialReference: c });
}
function ae(e, t) {
  const r = w(t, e);
  if (r) {
    const n = w("DCPType", r);
    if (n) {
      const s = w("HTTP", n);
      if (s) {
        const l = w("Get", s);
        if (l) {
          let a = (function (f, i, y, u) {
            const c = w(f, y);
            return c ? B(i, c, u) : u;
          })("OnlineResource", "xlink:href", l, null);
          if (a)
            return (
              a.indexOf("&") === a.length - 1 &&
                (a = a.substring(0, a.length - 1)),
              (function (f, i) {
                const y = [],
                  u = Te(f);
                for (const c in u.query)
                  u.query.hasOwnProperty(c) &&
                    (i.includes(c.toLowerCase()) ||
                      y.push(c + "=" + u.query[c]));
                return u.path + (y.length ? "?" + y.join("&") : "");
              })(a, ["service", "request"])
            );
        }
      }
    }
  }
  return null;
}
function oe(e, t) {
  const r = $("Operation", e);
  if (!r.length)
    return $("Format", w(t, e))
      .map(({ textContent: s }) => s)
      .filter(v);
  const n = [];
  for (const s of r)
    if (s.getAttribute("name") === t) {
      const l = $("Format", s);
      for (const { textContent: a } of l) a != null && n.push(a);
    }
  return n;
}
function le(e, t, r) {
  const n = w(t, e);
  if (!n) return r;
  const { textContent: s } = n;
  if (s == null || s === "") return r;
  const l = Number(s);
  return isNaN(l) ? r : l;
}
function q(e, t, r) {
  if (!e) return null;
  const n = {
      id: r.idCounter++,
      fullExtents: [],
      parentLayerId: null,
      queryable: e.getAttribute("queryable") === "1",
      spatialReferences: [],
      sublayers: null,
    },
    s = w("LatLonBoundingBox", e),
    l = w("EX_GeographicBoundingBox", e);
  let a = null;
  s && (a = C(s, 4326)),
    l &&
      ((a = new U(0, 0, 0, 0, new I({ wkid: 4326 }))),
      (a.xmin = parseFloat(S("westBoundLongitude", l, "0"))),
      (a.ymin = parseFloat(S("southBoundLatitude", l, "0"))),
      (a.xmax = parseFloat(S("eastBoundLongitude", l, "0"))),
      (a.ymax = parseFloat(S("northBoundLatitude", l, "0")))),
    s || l || (a = new U(-180, -90, 180, 90, new I({ wkid: 4326 }))),
    (n.minScale = le(e, "MaxScaleDenominator", 0)),
    (n.maxScale = le(e, "MinScaleDenominator", 0));
  const f = ["1.0.0", "1.1.0", "1.1.1"].includes(t) ? "SRS" : "CRS";
  return (
    Array.prototype.slice.call(e.childNodes).forEach((i) => {
      var y;
      if (i.nodeName === "Name") n.name = i.textContent || "";
      else if (i.nodeName === "Title") n.title = i.textContent || "";
      else if (i.nodeName === "Abstract") n.description = i.textContent || "";
      else if (i.nodeName === "BoundingBox") {
        const u = i.getAttribute(f);
        if (u && u.indexOf("EPSG:") === 0) {
          const d = parseInt(u.substring(5), 10);
          d === 0 ||
            isNaN(d) ||
            a ||
            (a = t === "1.3.0" ? C(i, d, z(d)) : C(i, d));
        }
        const c = u && u.indexOf(":");
        if (c && c > -1) {
          let d = parseInt(u.substring(c + 1, u.length), 10);
          d === 0 || isNaN(d) || (d = V[d] ? V[d] : d);
          const g = t === "1.3.0" ? C(i, d, z(d)) : C(i, d);
          g && n.fullExtents && n.fullExtents.push(g);
        }
      } else if (i.nodeName === f)
        (((y = i.textContent) == null ? void 0 : y.split(" ")) ?? []).forEach(
          (u) => {
            const c = u.includes(":")
              ? parseInt(u.split(":")[1], 10)
              : parseInt(u, 10);
            if (c !== 0 && !isNaN(c)) {
              const d = V[c] ? V[c] : c;
              n.spatialReferences.includes(d) || n.spatialReferences.push(d);
            }
          }
        );
      else if (i.nodeName !== "Style" || n.legendURL) {
        if (i.nodeName === "Layer") {
          const u = q(i, t, r);
          u &&
            ((u.parentLayerId = n.id),
            n.sublayers || (n.sublayers = []),
            n.sublayers.push(u));
        }
      } else {
        const u = w("LegendURL", i);
        if (u) {
          const c = w("OnlineResource", u);
          c && (n.legendURL = c.getAttribute("xlink:href"));
        }
      }
    }),
    (n.extent = a == null ? void 0 : a.toJSON()),
    (n.dimensions = $("Dimension", e)
      .filter(
        (i) =>
          i.getAttribute("name") && i.getAttribute("units") && i.textContent
      )
      .map((i) => {
        const y = i.getAttribute("name"),
          u = i.getAttribute("units"),
          c = i.textContent,
          d = i.getAttribute("unitSymbol") ?? void 0,
          g = i.getAttribute("default") ?? void 0,
          N = B("default", i, "0") !== "0",
          _ = B("nearestValue", i, "0") !== "0",
          b = B("current", i, "0") !== "0";
        return ve({ name: y, units: u })
          ? {
              name: "time",
              units: "ISO8601",
              extent: ce(c),
              default: ce(g),
              multipleValues: N,
              nearestValue: _,
              current: b,
            }
          : (function (M) {
              return (
                /^elevation$/i.test(M.name) && /^(epsg|crs):\d+$/i.test(M.units)
              );
            })({ name: y, units: u })
          ? {
              name: "elevation",
              units: u,
              extent: ue(c),
              unitSymbol: d,
              default: ue(g),
              multipleValues: N,
              nearestValue: _,
            }
          : {
              name: y,
              units: u,
              extent: pe(c),
              unitSymbol: d,
              default: pe(g),
              multipleValues: N,
              nearestValue: _,
            };
      })),
    n
  );
}
function we(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function ve(e) {
  return /^time$/i.test(e.name) && /^iso8601$/i.test(e.units);
}
function ue(e) {
  if (!e) return;
  const t = e.includes("/"),
    r = e.split(",");
  return t
    ? r
        .map((n) => {
          const s = n.split("/");
          return s.length < 2
            ? null
            : {
                min: parseFloat(s[0]),
                max: parseFloat(s[1]),
                resolution:
                  s.length >= 3 && s[2] !== "0" ? parseFloat(s[2]) : void 0,
              };
        })
        .filter(v)
    : r.map((n) => parseFloat(n));
}
function pe(e) {
  if (!e) return;
  const t = e.includes("/"),
    r = e.split(",");
  return t
    ? r
        .map((n) => {
          const s = n.split("/");
          return s.length < 2
            ? null
            : {
                min: s[0],
                max: s[1],
                resolution: s.length >= 3 && s[2] !== "0" ? s[2] : void 0,
              };
        })
        .filter(v)
    : r;
}
function ce(e) {
  if (!e) return;
  const t = e.includes("/"),
    r = e.split(",");
  return t
    ? r
        .map((n) => {
          const s = n.split("/");
          return s.length < 2
            ? null
            : {
                min: new Date(s[0]),
                max: new Date(s[1]),
                resolution: s.length >= 3 && s[2] !== "0" ? ut(s[2]) : void 0,
              };
        })
        .filter(v)
    : r.map((n) => new Date(n));
}
function ut(e) {
  const t = e.match(
    /(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i
  );
  return t
    ? {
        years: R(t[1]),
        months: R(t[2]),
        days: R(t[3]),
        hours: R(t[4]),
        minutes: R(t[5]),
        seconds: R(t[6]),
      }
    : null;
}
function R(e) {
  if (!e) return 0;
  const t = e.match(/(?:\d+(?:.|,)\d+|\d+)/);
  if (!t) return 0;
  const r = t[0].replace(",", ".");
  return Number(r);
}
function L(e) {
  return e.toISOString().replace(/\.[0-9]{3}/, "");
}
const de = new Set([102100, 3857, 102113, 900913]),
  pt = new Set([3395, 54004]);
function ct(e, t) {
  let r = e.wkid;
  return P(t)
    ? r
    : ((r != null && t.includes(r)) || !e.latestWkid || (r = e.latestWkid),
      r != null && de.has(r)
        ? t.find((n) => de.has(n)) || t.find((n) => pt.has(n)) || 102100
        : r);
}
const Q = new je(
  {
    bmp: "image/bmp",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png",
    svg: "image/svg+xml",
  },
  { ignoreUnknown: !1 }
);
function me(e) {
  return e === "text/html";
}
function fe(e) {
  return e === "text/plain";
}
let m = class extends Ce(qe(Ve(We(Be($e(ke(st))))))) {
  constructor(...e) {
    super(...e),
      (this.allSublayers = new De({
        getCollections: () => [this.sublayers],
        getChildrenFunction: (t) => t.sublayers,
      })),
      (this.customParameters = null),
      (this.customLayerParameters = null),
      (this.copyright = null),
      (this.description = null),
      (this.dimensions = null),
      (this.fullExtent = null),
      (this.fullExtents = null),
      (this.featureInfoFormats = null),
      (this.featureInfoUrl = null),
      (this.fetchFeatureInfoFunction = null),
      (this.imageFormat = null),
      (this.imageMaxHeight = 2048),
      (this.imageMaxWidth = 2048),
      (this.imageTransparency = !0),
      (this.legendEnabled = !0),
      (this.mapUrl = null),
      (this.isReference = null),
      (this.operationalLayerType = "WMS"),
      (this.spatialReference = null),
      (this.spatialReferences = null),
      (this.sublayers = null),
      (this.type = "wms"),
      (this.url = null),
      (this.version = null),
      this.addHandles([
        k(
          () => this.sublayers,
          "after-add",
          ({ item: t }) => {
            t.parent = t.layer = this;
          },
          A
        ),
        k(
          () => this.sublayers,
          "after-remove",
          ({ item: t }) => {
            t.layer = t.parent = null;
          },
          A
        ),
        he(
          () => this.sublayers,
          (t, r) => {
            if (r) for (const n of r) n.layer = n.parent = null;
            if (t) for (const n of t) n.parent = n.layer = this;
          },
          A
        ),
      ]);
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  load(e) {
    const t = v(e) ? e.signal : null;
    return (
      this.addResolvingPromise(
        this.loadFromPortal({ supportedTypes: ["WMS"] }, e)
          .catch(Ge)
          .then(() => this._fetchService(t))
      ),
      Promise.resolve(this)
    );
  }
  readFullExtentFromItemOrMap(e, t) {
    const r = t.extent;
    return r
      ? new U({ xmin: r[0][0], ymin: r[0][1], xmax: r[1][0], ymax: r[1][1] })
      : null;
  }
  writeFullExtent(e, t) {
    t.extent = [
      [e.xmin, e.ymin],
      [e.xmax, e.ymax],
    ];
  }
  get featureInfoFormat() {
    return P(this.featureInfoFormats)
      ? null
      : this.featureInfoFormats.find(me) ??
          this.featureInfoFormats.find(fe) ??
          null;
  }
  set featureInfoFormat(e) {
    v(e)
      ? (me(e) || fe(e)) && this._override("featureInfoFormat", e)
      : (this.revert("featureInfoFormat", "service"),
        this._clearOverride("featureInfoFormat"));
  }
  readImageFormat(e, t) {
    const r = t.supportedImageFormatTypes;
    return r && r.includes("image/png") ? "image/png" : r && r[0];
  }
  readSpatialReferenceFromItemOrDocument(e, t) {
    return new I(t.spatialReferences[0]);
  }
  writeSpatialReferences(e, t) {
    var n;
    const r = (n = this.spatialReference) == null ? void 0 : n.wkid;
    e && r
      ? ((t.spatialReferences = e.filter((s) => s !== r)),
        t.spatialReferences.unshift(r))
      : (t.spatialReferences = e);
  }
  readSublayersFromItemOrMap(e, t, r) {
    return ye(t.layers, r, t.visibleLayers);
  }
  readSublayers(e, t, r) {
    return ye(t.layers, r);
  }
  writeSublayers(e, t, r, n) {
    var a, f;
    t.layers = [];
    const s = new Map(),
      l = e.flatten(({ sublayers: i }) => i ?? []);
    for (const i of l)
      if (typeof ((a = i.parent) == null ? void 0 : a.id) == "number") {
        const y = s.get(i.parent.id);
        y != null ? y.push(i.id) : s.set(i.parent.id, [i.id]);
      }
    for (const i of l) {
      const y = { sublayer: i, ...n },
        u = i.write(
          {
            parentLayerId:
              typeof ((f = i.parent) == null ? void 0 : f.id) == "number"
                ? i.parent.id
                : -1,
          },
          y
        );
      if (
        (s.has(i.id) && (u.sublayerIds = s.get(i.id)), !i.sublayers && i.name)
      ) {
        const c = i.write({}, y);
        delete c.id, t.layers.push(c);
      }
    }
    t.visibleLayers = l
      .filter(({ visible: i, sublayers: y }) => i && !y)
      .map(({ name: i }) => i)
      .toArray();
  }
  createExportImageParameters(e, t, r, n) {
    const s = (n == null ? void 0 : n.pixelRatio) ?? 1,
      l = se({ extent: e, width: t }) * s,
      a = new ie({ layer: this, scale: l }),
      { xmin: f, ymin: i, xmax: y, ymax: u, spatialReference: c } = e,
      d = ct(c, this.spatialReferences),
      g =
        this.version === "1.3.0" && z(d)
          ? `${i},${f},${u},${y}`
          : `${f},${i},${y},${u}`,
      N = a.toJSON();
    return {
      bbox: g,
      [this.version === "1.3.0" ? "crs" : "srs"]:
        d == null || isNaN(d) ? void 0 : "EPSG:" + d,
      ...N,
    };
  }
  async fetchImage(e, t, r, n) {
    var u, c;
    const s = this.mapUrl,
      l = this.createExportImageParameters(e, t, r, n);
    if (!l.layers) {
      const d = document.createElement("canvas");
      return (d.width = t), (d.height = r), d;
    }
    const a =
        (u = n == null ? void 0 : n.timeExtent) == null ? void 0 : u.start,
      f = (c = n == null ? void 0 : n.timeExtent) == null ? void 0 : c.end,
      i =
        v(a) && v(f)
          ? a.getTime() === f.getTime()
            ? L(a)
            : `${L(a)}/${L(f)}`
          : void 0,
      y = {
        responseType: "image",
        query: this._mixCustomParameters({
          width: t,
          height: r,
          ...l,
          time: i,
          ...this.refreshParameters,
        }),
        signal: n == null ? void 0 : n.signal,
      };
    return X(s ?? "", y).then((d) => d.data);
  }
  async fetchImageBitmap(e, t, r, n) {
    var c, d;
    const s = this.mapUrl ?? "",
      l = this.createExportImageParameters(e, t, r, n);
    if (!l.layers) {
      const g = document.createElement("canvas");
      return (g.width = t), (g.height = r), g;
    }
    const a =
        (c = n == null ? void 0 : n.timeExtent) == null ? void 0 : c.start,
      f = (d = n == null ? void 0 : n.timeExtent) == null ? void 0 : d.end,
      i =
        v(a) && v(f)
          ? a.getTime() === f.getTime()
            ? L(a)
            : `${L(a)}/${L(f)}`
          : void 0,
      y = {
        responseType: "blob",
        query: this._mixCustomParameters({
          width: t,
          height: r,
          ...l,
          time: i,
          ...this.refreshParameters,
        }),
        signal: n == null ? void 0 : n.signal,
      },
      { data: u } = await X(s, y);
    return at(u, s);
  }
  fetchFeatureInfo(e, t, r, n, s) {
    const l = se({ extent: e, width: t }),
      a = (function (c) {
        const d = c.filter((g) => g.popupEnabled && g.name && g.queryable);
        return d.length ? d.map(({ name: g }) => g).join() : null;
      })(new ie({ layer: this, scale: l }).visibleSublayers);
    if (P(this.featureInfoUrl) || P(a)) return Promise.resolve([]);
    if (P(this.fetchFeatureInfoFunction) && P(this.featureInfoFormat))
      return Promise.resolve([]);
    const f = this.version === "1.3.0" ? { I: n, J: s } : { x: n, y: s },
      i = {
        query_layers: a,
        request: "GetFeatureInfo",
        info_format: this.featureInfoFormat,
        feature_count: 25,
        width: t,
        height: r,
        ...f,
      },
      y = { ...this.createExportImageParameters(e, t, r), ...i },
      u = this._mixCustomParameters(y);
    return v(this.fetchFeatureInfoFunction)
      ? this.fetchFeatureInfoFunction(u)
      : this._defaultFetchFeatureInfoFunction(He(this.featureInfoUrl, u));
  }
  findSublayerById(e) {
    return this.allSublayers.find((t) => t.id === e);
  }
  findSublayerByName(e) {
    return this.allSublayers.find((t) => t.name === e);
  }
  serviceSupportsSpatialReference(e) {
    return (
      Xe(this.url) ||
      (this.spatialReferences != null &&
        this.spatialReferences.some((t) => {
          const r = t === 900913 ? I.WebMercator : new I({ wkid: t });
          return Je(r, e);
        }))
    );
  }
  _defaultFetchFeatureInfoFunction(e) {
    const t = document.createElement("iframe");
    (t.src = Qe(e)),
      (t.style.border = "none"),
      (t.style.margin = "0"),
      (t.style.width = "100%"),
      t.setAttribute("sandbox", "");
    const r = new ze({ title: this.title, content: t }),
      n = new Ze({ sourceLayer: this, popupTemplate: r });
    return Promise.resolve([n]);
  }
  async _fetchService(e) {
    if (!this.resourceInfo) {
      const { path: t, query: r } = this.parsedUrl ?? {};
      r != null && r.service && ((r.SERVICE = r.service), delete r.service),
        r != null && r.request && ((r.REQUEST = r.request), delete r.request);
      const { data: n } = await X(t ?? "", {
        query: {
          SERVICE: "WMS",
          REQUEST: "GetCapabilities",
          ...r,
          ...this.customParameters,
        },
        responseType: "xml",
        signal: e,
      });
      this.resourceInfo = lt(n);
    }
    if (this.parsedUrl) {
      const t = new Ke(this.parsedUrl.path),
        { httpsDomains: r } = Ye.request;
      t.scheme !== "https" ||
        (t.port && t.port !== "443") ||
        !t.host ||
        r.includes(t.host) ||
        r.push(t.host);
    }
    this.read(this.resourceInfo, { origin: "service" });
  }
  _mixCustomParameters(e) {
    if (!this.customLayerParameters && !this.customParameters) return e;
    const t = { ...this.customParameters, ...this.customLayerParameters };
    for (const r in t) e[r.toLowerCase()] = t[r];
    return e;
  }
};
function ye(e, t, r) {
  e = e ?? [];
  const n = new Map();
  e.every((l) => l.id == null) && (e = et(e)).forEach((l, a) => (l.id = a));
  for (const l of e) {
    const a = new Z();
    a.read(l, t), r && !r.includes(a.name) && (a.visible = !1), n.set(a.id, a);
  }
  const s = [];
  for (const l of e) {
    const a = l.id != null ? n.get(l.id) : null;
    if (a)
      if (l.parentLayerId != null && l.parentLayerId >= 0) {
        const f = n.get(l.parentLayerId);
        if (!f) continue;
        f.sublayers || (f.sublayers = new K()), f.sublayers.push(a);
      } else s.push(a);
  }
  return s;
}
o([p({ readOnly: !0 })], m.prototype, "allSublayers", void 0),
  o(
    [p({ json: { type: Object, write: !0 } })],
    m.prototype,
    "customParameters",
    void 0
  ),
  o(
    [p({ json: { type: Object, write: !0 } })],
    m.prototype,
    "customLayerParameters",
    void 0
  ),
  o(
    [p({ type: String, json: { write: !0 } })],
    m.prototype,
    "copyright",
    void 0
  ),
  o([p()], m.prototype, "description", void 0),
  o([p({ readOnly: !0 })], m.prototype, "dimensions", void 0),
  o(
    [
      p({
        json: {
          type: [[Number]],
          read: { source: "extent" },
          write: { target: "extent" },
          origins: {
            "web-document": { write: { ignoreOrigin: !0 } },
            "portal-item": { write: { ignoreOrigin: !0 } },
          },
        },
      }),
    ],
    m.prototype,
    "fullExtent",
    void 0
  ),
  o(
    [F(["web-document", "portal-item"], "fullExtent", ["extent"])],
    m.prototype,
    "readFullExtentFromItemOrMap",
    null
  ),
  o(
    [
      J(["web-document", "portal-item"], "fullExtent", {
        extent: { type: [[Number]] },
      }),
    ],
    m.prototype,
    "writeFullExtent",
    null
  ),
  o([p()], m.prototype, "fullExtents", void 0),
  o(
    [p({ type: String, json: { write: { ignoreOrigin: !0 } } })],
    m.prototype,
    "featureInfoFormat",
    null
  ),
  o(
    [p({ type: [String], readOnly: !0 })],
    m.prototype,
    "featureInfoFormats",
    void 0
  ),
  o(
    [p({ type: String, json: { write: { ignoreOrigin: !0 } } })],
    m.prototype,
    "featureInfoUrl",
    void 0
  ),
  o([p()], m.prototype, "fetchFeatureInfoFunction", void 0),
  o(
    [
      p({
        type: String,
        json: {
          origins: {
            "web-document": {
              default: "image/png",
              type: Q.jsonValues,
              read: { reader: Q.read, source: "format" },
              write: { writer: Q.write, target: "format" },
            },
          },
        },
      }),
    ],
    m.prototype,
    "imageFormat",
    void 0
  ),
  o(
    [F("imageFormat", ["supportedImageFormatTypes"])],
    m.prototype,
    "readImageFormat",
    null
  ),
  o(
    [
      p({
        type: Number,
        json: { read: { source: "maxHeight" }, write: { target: "maxHeight" } },
      }),
    ],
    m.prototype,
    "imageMaxHeight",
    void 0
  ),
  o(
    [
      p({
        type: Number,
        json: { read: { source: "maxWidth" }, write: { target: "maxWidth" } },
      }),
    ],
    m.prototype,
    "imageMaxWidth",
    void 0
  ),
  o([p()], m.prototype, "imageTransparency", void 0),
  o([p(tt)], m.prototype, "legendEnabled", void 0),
  o(
    [p({ type: ["show", "hide", "hide-children"] })],
    m.prototype,
    "listMode",
    void 0
  ),
  o(
    [p({ type: String, json: { write: { ignoreOrigin: !0 } } })],
    m.prototype,
    "mapUrl",
    void 0
  ),
  o(
    [
      p({
        type: Boolean,
        json: {
          read: !1,
          write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) },
        },
      }),
    ],
    m.prototype,
    "isReference",
    void 0
  ),
  o([p({ type: ["WMS"] })], m.prototype, "operationalLayerType", void 0),
  o([p()], m.prototype, "resourceInfo", void 0),
  o(
    [
      p({
        type: I,
        json: {
          origins: { service: { read: { source: "extent.spatialReference" } } },
          write: !1,
        },
      }),
    ],
    m.prototype,
    "spatialReference",
    void 0
  ),
  o(
    [
      F(["web-document", "portal-item"], "spatialReference", [
        "spatialReferences",
      ]),
    ],
    m.prototype,
    "readSpatialReferenceFromItemOrDocument",
    null
  ),
  o(
    [
      p({
        type: [rt],
        json: {
          read: !1,
          origins: {
            service: { read: !0 },
            "web-document": { read: !1, write: { ignoreOrigin: !0 } },
            "portal-item": { read: !1, write: { ignoreOrigin: !0 } },
          },
        },
      }),
    ],
    m.prototype,
    "spatialReferences",
    void 0
  ),
  o(
    [J(["web-document", "portal-item"], "spatialReferences")],
    m.prototype,
    "writeSpatialReferences",
    null
  ),
  o(
    [
      p({
        type: K.ofType(Z),
        json: {
          write: {
            target: "layers",
            overridePolicy(e, t, r) {
              if (
                (function (n, s) {
                  return n.some((l) => {
                    for (const a in l) if (it(l, a, null, s)) return !0;
                    return !1;
                  });
                })(this.allSublayers, r)
              )
                return { ignoreOrigin: !0 };
            },
          },
        },
      }),
    ],
    m.prototype,
    "sublayers",
    void 0
  ),
  o(
    [
      F(["web-document", "portal-item"], "sublayers", [
        "layers",
        "visibleLayers",
      ]),
    ],
    m.prototype,
    "readSublayersFromItemOrMap",
    null
  ),
  o(
    [F("service", "sublayers", ["layers"])],
    m.prototype,
    "readSublayers",
    null
  ),
  o(
    [
      J("sublayers", {
        layers: { type: [Z] },
        visibleLayers: { type: [String] },
      }),
    ],
    m.prototype,
    "writeSublayers",
    null
  ),
  o(
    [p({ json: { read: !1 }, readOnly: !0, value: "wms" })],
    m.prototype,
    "type",
    void 0
  ),
  o([p(nt)], m.prototype, "url", void 0),
  o(
    [p({ type: String, json: { write: { ignoreOrigin: !0 } } })],
    m.prototype,
    "version",
    void 0
  ),
  (m = o([ge("esri.layers.WMSLayer")], m));
const Nt = m;
export { Nt as default };
