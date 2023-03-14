import { q as ge } from "./Table.e9c997d5.js";
import {
  r as P,
  bo as be,
  cH as we,
  W as ve,
  ae as y,
  af as f,
  di as xe,
  cM as Se,
  ar as q,
  aH as Fe,
  dj as Re,
  ag as K,
  dd as le,
  dk as Ee,
  al as X,
  dl as Oe,
  dm as je,
  dn as Ne,
  aK as Pe,
  dp as Ie,
  dq as Ve,
  dr as Ge,
  U as _e,
  ap as Me,
  aq as Ae,
  dg as Le,
  s as se,
  P as Te,
  ds as ie,
  dt as Ue,
  $ as Z,
  t as He,
  w as Je,
  L as qe,
  du as ze,
} from "./index.8fd7165c.js";
import { i as Qe, r as $e } from "./scaleUtils.54369baa.js";
import { n as W } from "./floorFilterUtils.08225a6d.js";
import { i as ke } from "./sublayerUtils.aa8d3bb7.js";
import { d as Be, s as De } from "./popupUtils.4682c28c.js";
function B(e, t) {
  return t
    ? "xoffset" in t && t.xoffset
      ? Math.max(e, Math.abs(t.xoffset))
      : "yoffset" in t && t.yoffset
      ? Math.max(e, Math.abs(t.yoffset || 0))
      : e
    : e;
}
function oe(e, t) {
  return typeof e == "number"
    ? e
    : e && e.stops && e.stops.length
    ? (function (r) {
        let o = 0,
          s = 0;
        for (let a = 0; a < r.length; a++) {
          const i = r[a].size;
          typeof i == "number" && ((o += i), s++);
        }
        return o / s;
      })(e.stops)
    : t;
}
function Ze(e, t) {
  if (!t) return e;
  const r = t
    .filter((i) => i.type === "size")
    .map((i) => {
      const { maxSize: n, minSize: c } = i;
      return (oe(n, e) + oe(c, e)) / 2;
    });
  let o = 0;
  const s = r.length;
  if (s === 0) return e;
  for (let i = 0; i < s; i++) o += r[i];
  const a = Math.floor(o / s);
  return Math.max(a, e);
}
function ae(e) {
  var s;
  const t = e && e.renderer,
    r = (e && e.event && e.event.pointerType) === "touch" ? 9 : 6;
  if (!t) return r;
  const o = "visualVariables" in t ? Ze(r, t.visualVariables) : r;
  if (t.type === "simple") return B(o, t.symbol);
  if (t.type === "unique-value") {
    let a = o;
    return (
      (s = t.uniqueValueInfos) == null ||
        s.forEach((i) => {
          a = B(a, i.symbol);
        }),
      a
    );
  }
  if (t.type === "class-breaks") {
    let a = o;
    return (
      t.classBreakInfos.forEach((i) => {
        a = B(a, i.symbol);
      }),
      a
    );
  }
  return t.type === "dot-density" || t.type, o;
}
const ne = (e) => e.spatialReference.wkid || JSON.stringify(e.spatialReference);
function We(e, t) {
  const {
      dpi: r,
      gdbVersion: o,
      geometry: s,
      geometryPrecision: a,
      height: i,
      layerOption: n,
      mapExtent: c,
      maxAllowableOffset: l,
      returnFieldName: u,
      returnGeometry: p,
      returnUnformattedValues: h,
      returnZ: m,
      spatialReference: g,
      timeExtent: S,
      tolerance: M,
      width: R,
    } = e.toJSON(),
    {
      dynamicLayers: w,
      layerDefs: F,
      layerIds: E,
    } = (function (z) {
      var ee, te;
      const {
          mapExtent: L,
          floors: J,
          width: Q,
          sublayers: I,
          layerIds: O,
          layerOption: pe,
          gdbVersion: ye,
        } = z,
        ce =
          (te =
            (ee = I == null ? void 0 : I.find((v) => v.layer != null)) == null
              ? void 0
              : ee.layer) == null
            ? void 0
            : te.serviceSublayers,
        fe = pe === "popup",
        T = {},
        $ = Qe({
          extent: L,
          width: Q,
          spatialReference: L == null ? void 0 : L.spatialReference,
        }),
        U = [],
        Y = (v) => {
          const k = $ === 0,
            V = v.minScale === 0 || $ <= v.minScale,
            b = v.maxScale === 0 || $ >= v.maxScale;
          if (v.visible && (k || (V && b)))
            if (v.sublayers) v.sublayers.forEach(Y);
            else {
              if (
                (O == null ? void 0 : O.includes(v.id)) === !1 ||
                (fe && (!v.popupTemplate || !v.popupEnabled))
              )
                return;
              U.unshift(v);
            }
        };
      if ((I == null || I.forEach(Y), I && !U.length)) T.layerIds = [];
      else {
        const v = ke(U, ce, ye),
          k = U.map((V) => {
            const b = W(J, V);
            return V.toExportImageJSON(b);
          });
        if (v) T.dynamicLayers = JSON.stringify(k);
        else {
          if (I) {
            let b = U.map(({ id: j }) => j);
            O && (b = b.filter((j) => O.includes(j))), (T.layerIds = b);
          } else O != null && O.length && (T.layerIds = O);
          const V = (function (b, j) {
            const he = !!(b != null && b.length),
              re = j.filter(
                (H) =>
                  H.definitionExpression != null || (he && H.floorInfo != null)
              );
            return re.length
              ? re.map((H) => {
                  const de = W(b, H),
                    me = we(de, H.definitionExpression);
                  return { id: H.id, definitionExpression: ve(me, void 0) };
                })
              : null;
          })(J, U);
          if (P(V) && V.length) {
            const b = {};
            for (const j of V)
              j.definitionExpression && (b[j.id] = j.definitionExpression);
            Object.keys(b).length && (T.layerDefs = JSON.stringify(b));
          }
        }
      }
      return T;
    })(e),
    A = t && P(t.geometry) ? t.geometry : null,
    x = {
      geometryPrecision: a,
      maxAllowableOffset: l,
      returnFieldName: u,
      returnGeometry: p,
      returnUnformattedValues: h,
      returnZ: m,
      tolerance: M,
    },
    G = (A && A.toJSON()) || s;
  if (
    ((x.imageDisplay = `${R},${i},${r}`),
    o && (x.gdbVersion = o),
    G &&
      (delete G.spatialReference,
      (x.geometry = JSON.stringify(G)),
      (x.geometryType = be(G))),
    g
      ? (x.sr = g.wkid || JSON.stringify(g))
      : G && G.spatialReference
      ? (x.sr = ne(G))
      : c && c.spatialReference && (x.sr = ne(c)),
    (x.time = S ? [S.start, S.end].join(",") : null),
    c)
  ) {
    const { xmin: z, ymin: L, xmax: J, ymax: Q } = c;
    x.mapExtent = `${z},${L},${J},${Q}`;
  }
  return (
    F && (x.layerDefs = F),
    w && !F && (x.dynamicLayers = w),
    (x.layers = n === "popup" ? "visible" : n),
    E && !w && (x.layers += `:${E.join(",")}`),
    x
  );
}
var C;
let d = (C = class extends le {
  static from(e) {
    return Ee(C, e);
  }
  constructor(e) {
    super(e),
      (this.dpi = 96),
      (this.floors = null),
      (this.gdbVersion = null),
      (this.geometry = null),
      (this.geometryPrecision = null),
      (this.height = 400),
      (this.layerIds = null),
      (this.layerOption = "top"),
      (this.mapExtent = null),
      (this.maxAllowableOffset = null),
      (this.returnFieldName = !0),
      (this.returnGeometry = !1),
      (this.returnM = !1),
      (this.returnUnformattedValues = !0),
      (this.returnZ = !1),
      (this.spatialReference = null),
      (this.sublayers = null),
      (this.timeExtent = null),
      (this.tolerance = null),
      (this.width = 400);
  }
});
y([f({ type: Number, json: { write: !0 } })], d.prototype, "dpi", void 0),
  y([f()], d.prototype, "floors", void 0),
  y(
    [f({ type: String, json: { write: !0 } })],
    d.prototype,
    "gdbVersion",
    void 0
  ),
  y(
    [f({ types: xe, json: { read: Se, write: !0 } })],
    d.prototype,
    "geometry",
    void 0
  ),
  y(
    [f({ type: Number, json: { write: !0 } })],
    d.prototype,
    "geometryPrecision",
    void 0
  ),
  y([f({ type: Number, json: { write: !0 } })], d.prototype, "height", void 0),
  y(
    [f({ type: [Number], json: { write: !0 } })],
    d.prototype,
    "layerIds",
    void 0
  ),
  y(
    [f({ type: ["top", "visible", "all", "popup"], json: { write: !0 } })],
    d.prototype,
    "layerOption",
    void 0
  ),
  y([f({ type: q, json: { write: !0 } })], d.prototype, "mapExtent", void 0),
  y(
    [f({ type: Number, json: { write: !0 } })],
    d.prototype,
    "maxAllowableOffset",
    void 0
  ),
  y(
    [f({ type: Boolean, json: { write: !0 } })],
    d.prototype,
    "returnFieldName",
    void 0
  ),
  y(
    [f({ type: Boolean, json: { write: !0 } })],
    d.prototype,
    "returnGeometry",
    void 0
  ),
  y(
    [f({ type: Boolean, json: { write: !0 } })],
    d.prototype,
    "returnM",
    void 0
  ),
  y(
    [f({ type: Boolean, json: { write: !0 } })],
    d.prototype,
    "returnUnformattedValues",
    void 0
  ),
  y(
    [f({ type: Boolean, json: { write: !0 } })],
    d.prototype,
    "returnZ",
    void 0
  ),
  y(
    [f({ type: Fe, json: { write: !0 } })],
    d.prototype,
    "spatialReference",
    void 0
  ),
  y([f()], d.prototype, "sublayers", void 0),
  y([f({ type: Re, json: { write: !0 } })], d.prototype, "timeExtent", void 0),
  y(
    [f({ type: Number, json: { write: !0 } })],
    d.prototype,
    "tolerance",
    void 0
  ),
  y([f({ type: Number, json: { write: !0 } })], d.prototype, "width", void 0),
  (d = C = y([K("esri.rest.support.IdentifyParameters")], d));
const ue = d;
let N = class extends le {
  constructor(e) {
    super(e),
      (this.displayFieldName = null),
      (this.feature = null),
      (this.layerId = null),
      (this.layerName = null);
  }
  readFeature(e, t) {
    return X.fromJSON({
      attributes: { ...t.attributes },
      geometry: { ...t.geometry },
    });
  }
  writeFeature(e, t) {
    if (!e) return;
    const { attributes: r, geometry: o } = e;
    r && (t.attributes = { ...r }),
      P(o) && ((t.geometry = o.toJSON()), (t.geometryType = Ne.toJSON(o.type)));
  }
};
y(
  [f({ type: String, json: { write: !0 } })],
  N.prototype,
  "displayFieldName",
  void 0
),
  y([f({ type: X })], N.prototype, "feature", void 0),
  y(
    [Oe("feature", ["attributes", "geometry"])],
    N.prototype,
    "readFeature",
    null
  ),
  y([je("feature")], N.prototype, "writeFeature", null),
  y([f({ type: Number, json: { write: !0 } })], N.prototype, "layerId", void 0),
  y(
    [f({ type: String, json: { write: !0 } })],
    N.prototype,
    "layerName",
    void 0
  ),
  (N = y([K("esri.rest.support.IdentifyResult")], N));
const Ce = N;
async function Ke(e, t, r) {
  const o = (t = Ye(t)).geometry ? [t.geometry] : [],
    s = Pe(e);
  return (
    (s.path += "/identify"),
    Ie(o).then((a) => {
      const i = We(t, { geometry: a && a[0] }),
        n = Ve({ ...s.query, f: "json", ...i }),
        c = Ge(n, r);
      return _e(s.path, c)
        .then(Xe)
        .then((l) =>
          (function (u, p) {
            if (!(p != null && p.length)) return u;
            const h = new Map();
            function m(g) {
              h.set(g.id, g), g.sublayers && g.sublayers.forEach(m);
            }
            p.forEach(m);
            for (const g of u.results) g.feature.sourceLayer = h.get(g.layerId);
            return u;
          })(l, t.sublayers)
        );
    })
  );
}
function Xe(e) {
  const t = e.data;
  return (
    (t.results = t.results || []),
    (t.exceededTransferLimit = Boolean(t.exceededTransferLimit)),
    (t.results = t.results.map((r) => Ce.fromJSON(r))),
    t
  );
}
function Ye(e) {
  return ue.from(e);
}
let D = null;
function at(e, t) {
  return t.type === "tile" || t.type === "map-image";
}
let _ = class extends Me {
  constructor(e) {
    super(e),
      (this._featuresResolutions = new WeakMap()),
      (this.highlightGraphics = null),
      (this.highlightGraphicUpdated = null),
      (this.updateHighlightedFeatures = Ae(async (t) => {
        this.destroyed ||
          this.updatingHandles.addPromise(
            this._updateHighlightedFeaturesGeometries(t).catch(() => {})
          );
      }));
  }
  initialize() {
    const e = (t) => {
      this.updatingHandles.addPromise(
        this._updateHighlightedFeaturesSymbols(t).catch(() => {})
      ),
        this.updateHighlightedFeatures(this._highlightGeometriesResolution);
    };
    this.addHandles([
      Le(
        () => this.highlightGraphics,
        "change",
        (t) => e(t.added),
        { onListenerAdd: (t) => e(t) }
      ),
    ]);
  }
  async fetchPopupFeatures(e, t) {
    var i, n;
    const {
      layerView: {
        layer: r,
        view: { scale: o },
      },
    } = this;
    if (!e)
      throw new se(
        "fetchPopupFeatures:invalid-area",
        "Nothing to fetch without area",
        {
          layer: r,
        }
      );
    const s = (function (c, l, u) {
      const p = [],
        h = (m) => {
          const g = m.minScale === 0 || l <= m.minScale,
            S = m.maxScale === 0 || l >= m.maxScale;
          if (m.visible && g && S) {
            if (m.sublayers) m.sublayers.forEach(h);
            else if (m.popupEnabled) {
              const M = De(m, { ...u, defaultPopupTemplateEnabled: !1 });
              P(M) && p.unshift({ sublayer: m, popupTemplate: M });
            }
          }
        };
      return ((c == null ? void 0 : c.toArray()) ?? []).reverse().map(h), p;
    })(r.sublayers, o, t);
    if (!s.length) return [];
    const a = await (async function (c, l) {
      var u, p;
      if (
        (p = (u = c.capabilities) == null ? void 0 : u.operations) != null &&
        p.supportsQuery
      )
        return !0;
      try {
        return await Promise.any(
          l.map(({ sublayer: h }) =>
            h.load().then(() => h.capabilities.operations.supportsQuery)
          )
        );
      } catch {
        return !1;
      }
    })(r, s);
    if (
      !(
        (((n = (i = r.capabilities) == null ? void 0 : i.operations) == null
          ? void 0
          : n.supportsIdentify) ??
          1) &&
        r.version >= 10.5
      ) &&
      !a
    )
      throw new se(
        "fetchPopupFeatures:not-supported",
        "query operation is disabled for this service",
        { layer: r }
      );
    return a
      ? this._fetchPopupFeaturesUsingQueries(e, s, t)
      : this._fetchPopupFeaturesUsingIdentify(e, s, t);
  }
  clearHighlights() {
    var e;
    (e = this.highlightGraphics) == null || e.removeAll();
  }
  highlight(e) {
    const t = this.highlightGraphics;
    if (!t) return { remove() {} };
    let r = null;
    if (
      (e instanceof X
        ? (r = [e])
        : Te.isCollection(e) && e.length > 0
        ? (r = e.toArray())
        : Array.isArray(e) && e.length > 0 && (r = e),
      (r = r == null ? void 0 : r.filter(P)),
      !r || !r.length)
    )
      return { remove: () => {} };
    for (const o of r) {
      const s = o.sourceLayer;
      s != null &&
        "geometryType" in s &&
        s.geometryType === "point" &&
        (o.visible = !1);
    }
    return (
      t.addMany(r),
      {
        remove: () => {
          t.removeMany(r ?? []);
        },
      }
    );
  }
  async _updateHighlightedFeaturesSymbols(e) {
    const {
      layerView: { view: t },
      highlightGraphics: r,
      highlightGraphicUpdated: o,
    } = this;
    if (r && o)
      for (const s of e) {
        const a =
          s.sourceLayer &&
          "renderer" in s.sourceLayer &&
          s.sourceLayer.renderer;
        s.sourceLayer &&
          "geometryType" in s.sourceLayer &&
          s.sourceLayer.geometryType === "point" &&
          a &&
          "getSymbolAsync" in a &&
          a.getSymbolAsync(s).then(async (i) => {
            var l;
            i || (i = new ie());
            let n = null;
            const c =
              "visualVariables" in a
                ? (l = a.visualVariables) == null
                  ? void 0
                  : l.find((u) => u.type === "size")
                : void 0;
            c &&
              (D ||
                (D = (
                  await ge(
                    () => import("./index.8fd7165c.js").then((u) => u.lE),
                    [
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
                  )
                ).getSize),
              (n = D(c, s, {
                view: t.type,
                scale: t.scale,
                shape: i.type === "simple-marker" ? i.style : null,
              }))),
              n ||
                (n =
                  "width" in i &&
                  "height" in i &&
                  i.width != null &&
                  i.height != null
                    ? Math.max(i.width, i.height)
                    : "size" in i
                    ? i.size
                    : 16),
              r.includes(s) &&
                ((s.symbol = new ie({
                  style: "square",
                  size: n,
                  xoffset: "xoffset" in i ? i.xoffset : 0,
                  yoffset: "yoffset" in i ? i.yoffset : 0,
                })),
                o(s, "symbol"),
                (s.visible = !0));
          });
      }
  }
  async _updateHighlightedFeaturesGeometries(e) {
    const {
      layerView: { layer: t, view: r },
      highlightGraphics: o,
      highlightGraphicUpdated: s,
    } = this;
    if (
      ((this._highlightGeometriesResolution = e),
      !s ||
        !(o != null && o.length) ||
        !t.capabilities.operations.supportsQuery)
    )
      return;
    const a = this._getTargetResolution(e),
      i = new Map();
    for (const l of o)
      if (
        !this._featuresResolutions.has(l) ||
        this._featuresResolutions.get(l) > a
      ) {
        const u = l.sourceLayer;
        Ue(i, u, () => new Map()).set(l.getObjectId(), l);
      }
    const n = Array.from(i, ([l, u]) => {
        const p = l.createQuery();
        return (
          (p.objectIds = [...u.keys()]),
          (p.outFields = [l.objectIdField]),
          (p.returnGeometry = !0),
          (p.maxAllowableOffset = a),
          (p.outSpatialReference = r.spatialReference),
          l.queryFeatures(p)
        );
      }),
      c = await Promise.all(n);
    if (!this.destroyed)
      for (const { features: l } of c)
        for (const u of l) {
          const p = u.sourceLayer,
            h = i.get(p).get(u.getObjectId());
          h &&
            o.includes(h) &&
            ((h.geometry = u.geometry),
            s(h, "geometry"),
            this._featuresResolutions.set(h, a));
        }
  }
  _getTargetResolution(e) {
    const t = e * Z(this.layerView.view.spatialReference),
      r = t / 16;
    return r <= 10 ? 0 : (e / t) * r;
  }
  async _fetchPopupFeaturesUsingIdentify(e, t, r) {
    const o = await this._createIdentifyParameters(e, t, r);
    if (He(o)) return [];
    const { results: s } = await Ke(this.layerView.layer.parsedUrl, o);
    return s.map((a) => a.feature);
  }
  async _createIdentifyParameters(e, t, r) {
    const {
        floors: o,
        layer: s,
        timeExtent: a,
        view: { spatialReference: i, scale: n },
      } = this.layerView,
      c = P(r) ? r.event : null;
    if (!t.length) return null;
    await Promise.all(t.map(({ sublayer: g }) => g.load().catch(() => {})));
    const l = Math.min(
        Je("mapservice-popup-identify-max-tolerance"),
        s.allSublayers.reduce(
          (g, S) => (S.renderer ? ae({ renderer: S.renderer, event: c }) : g),
          2
        )
      ),
      u = this.createFetchPopupFeaturesQueryGeometry(e, l),
      p = $e(n, i),
      h = Math.round(u.width / p),
      m = new q({
        xmin: u.center.x - p * h,
        ymin: u.center.y - p * h,
        xmax: u.center.x + p * h,
        ymax: u.center.y + p * h,
        spatialReference: u.spatialReference,
      });
    return new ue({
      floors: o,
      gdbVersion: "gdbVersion" in s ? s.gdbVersion : void 0,
      geometry: e,
      height: h,
      layerOption: "popup",
      mapExtent: m,
      returnGeometry: !0,
      spatialReference: i,
      sublayers: s.sublayers,
      timeExtent: a,
      tolerance: l,
      width: h,
    });
  }
  async _fetchPopupFeaturesUsingQueries(e, t, r) {
    const {
        layerView: { floors: o, timeExtent: s },
      } = this,
      a = P(r) ? r.event : null,
      i = t.map(async ({ sublayer: n, popupTemplate: c }) => {
        if (
          (await n.load().catch(() => {}),
          n.capabilities && !n.capabilities.operations.supportsQuery)
        )
          return [];
        const l = n.createQuery(),
          u = ae({ renderer: n.renderer, event: a }),
          p = this.createFetchPopupFeaturesQueryGeometry(e, u);
        if (
          ((l.geometry = p),
          (l.outFields = await Be(n, c)),
          (l.timeExtent = s),
          o)
        ) {
          const R = o.clone(),
            w = W(R, n);
          P(w) && (l.where = l.where ? `(${l.where}) AND (${w})` : w);
        }
        const h = this._getTargetResolution(p.width / u),
          m = await (function (R) {
            var w;
            return ((w = R.expressionInfos) != null && w.length) ||
              (Array.isArray(R.content) &&
                R.content.some((F) => F.type === "expression"))
              ? ze()
              : Promise.resolve();
          })(c),
          g =
            n.geometryType === "point" ||
            (m && m.arcadeUtils.hasGeometryOperations(c));
        g || (l.maxAllowableOffset = h);
        let { features: S } = await n.queryFeatures(l);
        const M = g ? 0 : h;
        S = await (async function (R, w) {
          const F = R.renderer;
          return (
            F &&
              "defaultSymbol" in F &&
              !F.defaultSymbol &&
              (w = F.valueExpression
                ? await Promise.all(
                    w.map((E) =>
                      F.getSymbolAsync(E).then((A) => (A ? E : null))
                    )
                  ).then((E) => E.filter((A) => A != null))
                : w.filter((E) => F.getSymbol(E) != null)),
            w
          );
        })(n, S);
        for (const R of S) this._featuresResolutions.set(R, M);
        return S;
      });
    return (await qe(i))
      .reverse()
      .reduce((n, c) => (c.value ? [...n, ...c.value] : n), [])
      .filter((n) => n != null);
  }
};
function nt(e, t, r, o = new q()) {
  let s = 0;
  if (r.type === "2d") s = t * (r.resolution ?? 0);
  else if (r.type === "3d") {
    const u = r.overlayPixelSizeInMapUnits(e),
      p = r.basemapSpatialReference;
    s =
      P(p) && !p.equals(r.spatialReference)
        ? Z(p) / Z(r.spatialReference)
        : t * u;
  }
  const a = e.x - s,
    i = e.y - s,
    n = e.x + s,
    c = e.y + s,
    { spatialReference: l } = r;
  return (
    (o.xmin = Math.min(a, n)),
    (o.ymin = Math.min(i, c)),
    (o.xmax = Math.max(a, n)),
    (o.ymax = Math.max(i, c)),
    (o.spatialReference = l),
    o
  );
}
y(
  [f({ constructOnly: !0 })],
  _.prototype,
  "createFetchPopupFeaturesQueryGeometry",
  void 0
),
  y([f({ constructOnly: !0 })], _.prototype, "layerView", void 0),
  y([f({ constructOnly: !0 })], _.prototype, "highlightGraphics", void 0),
  y([f({ constructOnly: !0 })], _.prototype, "highlightGraphicUpdated", void 0),
  y([f({ constructOnly: !0 })], _.prototype, "updatingHandles", void 0),
  (_ = y([K("esri.views.layers.support.MapService")], _)),
  new q();
export { at as P, _ as S, nt as a };
