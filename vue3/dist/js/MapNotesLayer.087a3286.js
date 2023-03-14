import {
  gr as I,
  ae as o,
  af as s,
  ag as j,
  ja as k,
  j8 as z,
  ds as T,
  jX as Y,
  im as $,
  io as A,
  et as W,
  eu as H,
  ev as U,
  aH as O,
  P as J,
  ic as V,
  bO as v,
  eY as E,
  r as m,
  jY as L,
  ea as w,
  jZ as R,
  S as D,
  al as X,
  t as g,
  s as Z,
  i5 as q,
  ac as K,
  dV as Q,
  dU as ee,
  aG as te,
  Y as re,
  dp as ie,
  ix as C,
  dl as b,
  dm as oe,
  ar as ae,
  j_ as le,
  j$ as _,
  db as ne,
} from "./index.8fd7165c.js";
import { n as se } from "./objectIdUtils.789e911a.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
function S(t) {
  return (
    t.featureCollectionType === "markup" ||
    t.layers.some((e) => e.layerDefinition.visibilityField != null || !P(e))
  );
}
function P({ layerDefinition: t, featureSet: e }) {
  const r = t.geometryType ?? e.geometryType;
  return x.find((i) => {
    var a, n, y;
    return (
      r === i.geometryTypeJSON &&
      ((y =
        (n = (a = t.drawingInfo) == null ? void 0 : a.renderer) == null
          ? void 0
          : n.symbol) == null
        ? void 0
        : y.type) === i.identifyingSymbol.type
    );
  });
}
function G() {
  return new ae({ xmin: -180, ymin: -90, xmax: 180, ymax: 90 });
}
const M = new I({
    name: "OBJECTID",
    alias: "OBJECTID",
    type: "oid",
    nullable: !1,
    editable: !1,
  }),
  ye = new I({
    name: "title",
    alias: "Title",
    type: "string",
    nullable: !0,
    editable: !0,
  });
let u = class extends le {
  constructor(t) {
    super(t), (this.visibilityMode = "inherited");
  }
  initialize() {
    for (const t of this.graphics) t.sourceLayer = this.layer;
    this.graphics.on("after-add", (t) => {
      t.item.sourceLayer = this.layer;
    }),
      this.graphics.on("after-remove", (t) => {
        t.item.sourceLayer = null;
      });
  }
  get fullExtent() {
    var r;
    const t = (r = this.layer) == null ? void 0 : r.spatialReference,
      e = this.fullBounds;
    return t ? (g(e) ? w(G(), t).geometry : D(e, t)) : null;
  }
  get fullBounds() {
    var r;
    const t = (r = this.layer) == null ? void 0 : r.spatialReference;
    if (!t) return null;
    const e = E();
    return (
      this.graphics.forEach((i) => {
        const a = m(i.geometry) ? w(i.geometry, t).geometry : null;
        m(a) && L(e, a.type === "point" ? a : a.extent, e);
      }),
      R(e, _) ? null : e
    );
  }
  get sublayers() {
    return this.graphics;
  }
};
o([s({ readOnly: !0 })], u.prototype, "fullExtent", null),
  o([s({ readOnly: !0 })], u.prototype, "fullBounds", null),
  o([s({ readOnly: !0 })], u.prototype, "sublayers", null),
  o([s()], u.prototype, "layer", void 0),
  o([s()], u.prototype, "layerId", void 0),
  o([s({ readOnly: !0 })], u.prototype, "visibilityMode", void 0),
  (u = o([j("esri.layers.MapNotesLayer.MapNotesSublayer")], u));
const x = [
  {
    geometryType: "polygon",
    geometryTypeJSON: "esriGeometryPolygon",
    id: "polygonLayer",
    layerId: 0,
    title: "Polygons",
    identifyingSymbol: new k().toJSON(),
  },
  {
    geometryType: "polyline",
    geometryTypeJSON: "esriGeometryPolyline",
    id: "polylineLayer",
    layerId: 1,
    title: "Polylines",
    identifyingSymbol: new z().toJSON(),
  },
  {
    geometryType: "multipoint",
    geometryTypeJSON: "esriGeometryMultipoint",
    id: "multipointLayer",
    layerId: 2,
    title: "Multipoints",
    identifyingSymbol: new T().toJSON(),
  },
  {
    geometryType: "point",
    geometryTypeJSON: "esriGeometryPoint",
    id: "pointLayer",
    layerId: 3,
    title: "Points",
    identifyingSymbol: new T().toJSON(),
  },
  {
    geometryType: "point",
    geometryTypeJSON: "esriGeometryPoint",
    id: "textLayer",
    layerId: 4,
    title: "Text",
    identifyingSymbol: new Y().toJSON(),
  },
];
let l = class extends $(A(W(H(U(ne))))) {
  constructor(t) {
    super(t),
      (this.capabilities = { operations: { supportsMapNotesEditing: !0 } }),
      (this.featureCollections = null),
      (this.featureCollectionJSON = null),
      (this.featureCollectionType = "notes"),
      (this.legendEnabled = !1),
      (this.listMode = "hide-children"),
      (this.minScale = 0),
      (this.maxScale = 0),
      (this.spatialReference = O.WGS84),
      (this.sublayers = new J(
        x.map(
          (e) =>
            new u({ id: e.id, layerId: e.layerId, title: e.title, layer: this })
        )
      )),
      (this.title = "Map Notes"),
      (this.type = "map-notes"),
      (this.visibilityMode = "inherited");
  }
  readCapabilities(t, e, r) {
    return {
      operations: {
        supportsMapNotesEditing:
          !S(e) && (r == null ? void 0 : r.origin) !== "portal-item",
      },
    };
  }
  readFeatureCollections(t, e, r) {
    if (!S(e)) return null;
    const i = e.layers.map((a) => {
      const n = new V();
      return n.read(a, r), n;
    });
    return new J({ items: i });
  }
  readLegacyfeatureCollectionJSON(t, e) {
    return S(e) ? v(e.featureCollection) : null;
  }
  get fullExtent() {
    var r;
    const t = this.spatialReference,
      e = E();
    return (
      m(this.sublayers)
        ? this.sublayers.forEach(
            ({ fullBounds: i }) => (m(i) ? L(e, i, e) : e),
            e
          )
        : (r = this.featureCollectionJSON) != null &&
          r.layers.some((i) => i.layerDefinition.extent) &&
          this.featureCollectionJSON.layers.forEach((i) => {
            const a = w(i.layerDefinition.extent, t).geometry;
            m(a) && L(e, a, e);
          }),
      R(e, _) ? w(G(), t).geometry : D(e, t)
    );
  }
  readMinScale(t, e) {
    for (const r of e.layers)
      if (r.layerDefinition.minScale != null) return r.layerDefinition.minScale;
    return 0;
  }
  readMaxScale(t, e) {
    for (const r of e.layers)
      if (r.layerDefinition.maxScale != null) return r.layerDefinition.maxScale;
    return 0;
  }
  get multipointLayer() {
    return this._findSublayer("multipointLayer");
  }
  get pointLayer() {
    return this._findSublayer("pointLayer");
  }
  get polygonLayer() {
    return this._findSublayer("polygonLayer");
  }
  get polylineLayer() {
    return this._findSublayer("polylineLayer");
  }
  readSpatialReference(t, e) {
    return e.layers.length
      ? O.fromJSON(e.layers[0].layerDefinition.spatialReference)
      : O.WGS84;
  }
  readSublayers(t, e, r) {
    if (S(e)) return null;
    const i = [];
    let a =
      e.layers.reduce((n, y) => Math.max(n, y.layerDefinition.id ?? -1), -1) +
      1;
    for (const n of e.layers) {
      const { layerDefinition: y, featureSet: p } = n,
        d = y.id ?? a++,
        c = P(n);
      if (m(c)) {
        const f = new u({
          id: c.id,
          title: y.name,
          layerId: d,
          layer: this,
          graphics: p.features.map(
            ({ geometry: h, symbol: N, attributes: F, popupInfo: B }) =>
              X.fromJSON({
                attributes: F,
                geometry: h,
                symbol: N,
                popupTemplate: B,
              })
          ),
        });
        i.push(f);
      }
    }
    return new J(i);
  }
  writeSublayers(t, e, r, i) {
    var c;
    const { minScale: a, maxScale: n } = this;
    if (g(t)) return;
    const y = t.some((f) => f.graphics.length > 0);
    if (!this.capabilities.operations.supportsMapNotesEditing)
      return void (
        y &&
        ((c = i == null ? void 0 : i.messages) == null
          ? void 0
          : c.push(
              new Z(
                "map-notes-layer:editing-not-supported",
                "New map notes cannot be added to this layer"
              )
            ))
      );
    const p = [];
    let d = this.spatialReference.toJSON();
    e: for (const f of t)
      for (const h of f.graphics)
        if (m(h.geometry)) {
          d = h.geometry.spatialReference.toJSON();
          break e;
        }
    for (const f of x) {
      const h = t.find((N) => f.id === N.id);
      this._writeMapNoteSublayer(p, h, f, a, n, d, i);
    }
    q("featureCollection.layers", p, e);
  }
  get textLayer() {
    return this._findSublayer("textLayer");
  }
  load(t) {
    return (
      this.addResolvingPromise(
        this.loadFromPortal({ supportedTypes: ["Feature Collection"] }, t)
      ),
      Promise.resolve(this)
    );
  }
  read(t, e) {
    "featureCollection" in t &&
      ((t = v(t)), Object.assign(t, t.featureCollection)),
      super.read(t, e);
  }
  async beforeSave() {
    if (g(this.sublayers)) return;
    let t = null;
    const e = [];
    for (const i of this.sublayers)
      for (const a of i.graphics)
        if (m(a.geometry)) {
          const n = a.geometry;
          t
            ? K(n.spatialReference, t) ||
              (Q(n.spatialReference, t) || ee() || (await te()),
              (a.geometry = re(n, t)))
            : (t = n.spatialReference),
            e.push(a);
        }
    const r = await ie(e.map((i) => i.geometry));
    e.forEach((i, a) => (i.geometry = r[a]));
  }
  _findSublayer(t) {
    var e;
    return g(this.sublayers)
      ? null
      : ((e = this.sublayers) == null ? void 0 : e.find((r) => r.id === t)) ??
          null;
  }
  _writeMapNoteSublayer(t, e, r, i, a, n, y) {
    const p = [];
    if (!g(e)) {
      for (const d of e.graphics) this._writeMapNote(p, d, r.geometryType, y);
      this._normalizeObjectIds(p, M),
        t.push({
          layerDefinition: {
            name: e.title,
            drawingInfo: {
              renderer: { type: "simple", symbol: v(r.identifyingSymbol) },
            },
            id: e.layerId,
            geometryType: r.geometryTypeJSON,
            minScale: i,
            maxScale: a,
            objectIdField: "OBJECTID",
            fields: [M.toJSON(), ye.toJSON()],
            spatialReference: n,
          },
          featureSet: { features: p, geometryType: r.geometryTypeJSON },
        });
    }
  }
  _writeMapNote(t, e, r, i) {
    var d, c;
    if (g(e)) return;
    const { geometry: a, symbol: n, popupTemplate: y } = e;
    if (g(a)) return;
    if (a.type !== r)
      return void ((d = i == null ? void 0 : i.messages) == null
        ? void 0
        : d.push(
            new C(
              "map-notes-layer:invalid-geometry-type",
              `Geometry "${a.type}" cannot be saved in "${r}" layer`,
              { graphic: e }
            )
          ));
    if (g(n))
      return void ((c = i == null ? void 0 : i.messages) == null
        ? void 0
        : c.push(
            new C(
              "map-notes-layer:no-symbol",
              "Skipping map notes with no symbol",
              { graphic: e }
            )
          ));
    const p = {
      attributes: { ...e.attributes },
      geometry: a.toJSON(),
      symbol: n.toJSON(),
    };
    m(y) && (p.popupInfo = y.toJSON()), t.push(p);
  }
  _normalizeObjectIds(t, e) {
    const r = e.name;
    let i = se(r, t) + 1;
    const a = new Set();
    for (const n of t) {
      n.attributes || (n.attributes = {});
      const { attributes: y } = n;
      (y[r] == null || a.has(y[r])) && (y[r] = i++), a.add(y[r]);
    }
  }
};
o([s({ readOnly: !0 })], l.prototype, "capabilities", void 0),
  o(
    [b(["portal-item", "web-map"], "capabilities", ["layers"])],
    l.prototype,
    "readCapabilities",
    null
  ),
  o([s({ readOnly: !0 })], l.prototype, "featureCollections", void 0),
  o(
    [b(["web-map", "portal-item"], "featureCollections", ["layers"])],
    l.prototype,
    "readFeatureCollections",
    null
  ),
  o(
    [
      s({
        readOnly: !0,
        json: {
          origins: {
            "web-map": { write: { enabled: !0, target: "featureCollection" } },
          },
        },
      }),
    ],
    l.prototype,
    "featureCollectionJSON",
    void 0
  ),
  o(
    [
      b(["web-map", "portal-item"], "featureCollectionJSON", [
        "featureCollection",
      ]),
    ],
    l.prototype,
    "readLegacyfeatureCollectionJSON",
    null
  ),
  o(
    [
      s({
        readOnly: !0,
        json: { read: !0, write: { enabled: !0, ignoreOrigin: !0 } },
      }),
    ],
    l.prototype,
    "featureCollectionType",
    void 0
  ),
  o([s({ readOnly: !0 })], l.prototype, "fullExtent", null),
  o(
    [
      s({
        readOnly: !0,
        json: {
          origins: {
            "web-map": {
              write: {
                target: "featureCollection.showLegend",
                overridePolicy() {
                  return { enabled: this.featureCollectionJSON != null };
                },
              },
            },
          },
        },
      }),
    ],
    l.prototype,
    "legendEnabled",
    void 0
  ),
  o(
    [s({ type: ["show", "hide", "hide-children"] })],
    l.prototype,
    "listMode",
    void 0
  ),
  o(
    [s({ type: Number, nonNullable: !0, json: { write: !1 } })],
    l.prototype,
    "minScale",
    void 0
  ),
  o(
    [b(["web-map", "portal-item"], "minScale", ["layers"])],
    l.prototype,
    "readMinScale",
    null
  ),
  o(
    [s({ type: Number, nonNullable: !0, json: { write: !1 } })],
    l.prototype,
    "maxScale",
    void 0
  ),
  o(
    [b(["web-map", "portal-item"], "maxScale", ["layers"])],
    l.prototype,
    "readMaxScale",
    null
  ),
  o([s({ readOnly: !0 })], l.prototype, "multipointLayer", null),
  o(
    [s({ value: "ArcGISFeatureLayer", type: ["ArcGISFeatureLayer"] })],
    l.prototype,
    "operationalLayerType",
    void 0
  ),
  o([s({ readOnly: !0 })], l.prototype, "pointLayer", null),
  o([s({ readOnly: !0 })], l.prototype, "polygonLayer", null),
  o([s({ readOnly: !0 })], l.prototype, "polylineLayer", null),
  o([s({ type: O })], l.prototype, "spatialReference", void 0),
  o(
    [b(["web-map", "portal-item"], "spatialReference", ["layers"])],
    l.prototype,
    "readSpatialReference",
    null
  ),
  o(
    [
      s({
        readOnly: !0,
        json: { origins: { "web-map": { write: { ignoreOrigin: !0 } } } },
      }),
    ],
    l.prototype,
    "sublayers",
    void 0
  ),
  o(
    [b("web-map", "sublayers", ["layers"])],
    l.prototype,
    "readSublayers",
    null
  ),
  o([oe("web-map", "sublayers")], l.prototype, "writeSublayers", null),
  o([s({ readOnly: !0 })], l.prototype, "textLayer", null),
  o([s()], l.prototype, "title", void 0),
  o([s({ readOnly: !0, json: { read: !1 } })], l.prototype, "type", void 0),
  (l = o([j("esri.layers.MapNotesLayer")], l));
const Se = l;
export { Se as default };
