import {
  iN as N,
  cc as y,
  ae as t,
  af as i,
  gO as f,
  cr as x,
  c8 as E,
  ag as g,
  iO as j,
  R as P,
  dT as T,
  iP as k,
  iQ as C,
  P as O,
  am as L,
  G as q,
  at as D,
  t as h,
  r as s,
  ao as _,
  q as z,
  iR as A,
  ar as b,
  et as G,
  ev as H,
  dm as M,
  db as B,
} from "./index.8fd7165c.js";
import { c as F } from "./Analysis.73a41638.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
let l = class extends N(j) {
  constructor(e) {
    super(e),
      (this.type = "simple"),
      (this.color = new y("black")),
      (this.lineSize = 2),
      (this.fontSize = 10),
      (this.textColor = new y("black")),
      (this.textBackgroundColor = new y([255, 255, 255, 0.6]));
  }
};
t(
  [i({ type: ["simple"], readOnly: !0, json: { write: { isRequired: !0 } } })],
  l.prototype,
  "type",
  void 0
),
  t(
    [
      i({
        type: y,
        nonNullable: !0,
        json: { type: [f], write: { isRequired: !0 } },
      }),
    ],
    l.prototype,
    "color",
    void 0
  ),
  t(
    [
      i({
        type: Number,
        cast: x,
        nonNullable: !0,
        range: { min: E(1) },
        json: { write: { isRequired: !0 } },
      }),
    ],
    l.prototype,
    "lineSize",
    void 0
  ),
  t(
    [
      i({
        type: Number,
        cast: x,
        nonNullable: !0,
        json: { write: { isRequired: !0 } },
      }),
    ],
    l.prototype,
    "fontSize",
    void 0
  ),
  t(
    [
      i({
        type: y,
        nonNullable: !0,
        json: { type: [f], write: { isRequired: !0 } },
      }),
    ],
    l.prototype,
    "textColor",
    void 0
  ),
  t(
    [
      i({
        type: y,
        nonNullable: !0,
        json: { type: [f], write: { isRequired: !0 } },
      }),
    ],
    l.prototype,
    "textBackgroundColor",
    void 0
  ),
  (l = t([g("esri.analysis.DimensionSimpleStyle")], l));
const v = l;
var c;
(function (e) {
  (e.Horizontal = "horizontal"),
    (e.Vertical = "vertical"),
    (e.Direct = "direct");
})(c || (c = {}));
const I = [c.Horizontal, c.Vertical, c.Direct];
let a = class extends N(j) {
  constructor(e) {
    super(e),
      (this.type = "length"),
      (this.startPoint = null),
      (this.endPoint = null),
      (this.measureType = c.Direct),
      (this.offset = 0),
      (this.orientation = 0);
  }
};
t(
  [i({ type: ["length"], json: { write: { isRequired: !0 } } })],
  a.prototype,
  "type",
  void 0
),
  t([i({ type: P, json: { write: !0 } })], a.prototype, "startPoint", void 0),
  t([i({ type: P, json: { write: !0 } })], a.prototype, "endPoint", void 0),
  t(
    [i({ type: I, nonNullable: !0, json: { write: { isRequired: !0 } } })],
    a.prototype,
    "measureType",
    void 0
  ),
  t(
    [i({ type: Number, nonNullable: !0, json: { write: { isRequired: !0 } } })],
    a.prototype,
    "offset",
    void 0
  ),
  t(
    [
      i({ type: Number, nonNullable: !0, json: { write: { isRequired: !0 } } }),
      T((e) => k.normalize(C(e), 0, !0)),
    ],
    a.prototype,
    "orientation",
    void 0
  ),
  (a = t([g("esri.analysis.LengthDimension")], a));
const S = a,
  w = O.ofType(S);
let p = class extends F {
  constructor(e) {
    super(e),
      (this.type = "dimension"),
      (this.style = new v()),
      (this.extent = null);
  }
  initialize() {
    this.addHandles(
      q(
        () => this._computeExtent(),
        (e) => {
          (h(e) || h(e.pending)) && this._set("extent", s(e) ? e.extent : null);
        },
        D
      )
    );
  }
  get dimensions() {
    return this._get("dimensions") || new w();
  }
  set dimensions(e) {
    this._set("dimensions", _(e, this.dimensions, w));
  }
  get spatialReference() {
    for (const e of this.dimensions) {
      if (s(e.startPoint)) return e.startPoint.spatialReference;
      if (s(e.endPoint)) return e.endPoint.spatialReference;
    }
    return null;
  }
  get requiredPropertiesForEditing() {
    return this.dimensions.reduce(
      (e, n) => (e.push(n.startPoint, n.endPoint), e),
      []
    );
  }
  async waitComputeExtent() {
    const e = this._computeExtent();
    return s(e) ? z(e.pending) : Promise.resolve();
  }
  _computeExtent() {
    const e = this.spatialReference;
    if (h(e)) return { pending: null, extent: null };
    const n = [];
    for (const r of this.dimensions)
      s(r.startPoint) && n.push(r.startPoint),
        s(r.endPoint) && n.push(r.endPoint);
    const u = A(n, e);
    if (s(u.pending)) return { pending: u.pending, extent: null };
    let m = null;
    return (
      s(u.geometries) &&
        (m = u.geometries.reduce(
          (r, d) =>
            h(r)
              ? s(d)
                ? b.fromPoint(d)
                : null
              : s(d)
              ? r.union(b.fromPoint(d))
              : r,
          null
        )),
      { pending: null, extent: m }
    );
  }
  clear() {
    this.dimensions.removeAll();
  }
};
t([i({ type: ["dimension"] })], p.prototype, "type", void 0),
  t(
    [i({ cast: L, type: w, nonNullable: !0 })],
    p.prototype,
    "dimensions",
    null
  ),
  t([i({ readOnly: !0 })], p.prototype, "spatialReference", null),
  t(
    [
      i({
        types: { key: "type", base: null, typeMap: { simple: v } },
        nonNullable: !0,
      }),
    ],
    p.prototype,
    "style",
    void 0
  ),
  t([i({ value: null, readOnly: !0 })], p.prototype, "extent", void 0),
  t([i({ readOnly: !0 })], p.prototype, "requiredPropertiesForEditing", null),
  (p = t([g("esri.analysis.DimensionAnalysis")], p));
const R = p;
let o = class extends G(H(B)) {
  constructor(e) {
    if (
      (super(e),
      (this.type = "dimension"),
      (this.operationalLayerType = "ArcGISDimensionLayer"),
      (this.source = new R()),
      (this.opacity = 1),
      e)
    ) {
      const { source: n, style: u } = e;
      n && u && (n.style = u);
    }
  }
  initialize() {
    this.addHandles([
      q(
        () => this.source,
        (e, n) => {
          s(n) && n.parent === this && (n.parent = null),
            s(e) && (e.parent = this);
        },
        D
      ),
    ]);
  }
  async load() {
    return this.addResolvingPromise(this.source.waitComputeExtent()), this;
  }
  get spatialReference() {
    return z(this.source.spatialReference);
  }
  get style() {
    return this.source.style;
  }
  set style(e) {
    this.source.style = e;
  }
  get fullExtent() {
    return this.source.extent;
  }
  releaseAnalysis(e) {
    this.source === e && (this.source = new R());
  }
  get analysis() {
    return this.source;
  }
  set analysis(e) {
    this.source = e;
  }
  get dimensions() {
    return this.source.dimensions;
  }
  set dimensions(e) {
    this.source.dimensions = e;
  }
  writeDimensions(e, n, u, m) {
    n.dimensions = e
      .filter(({ startPoint: r, endPoint: d }) => s(r) && s(d))
      .map((r) => r.toJSON(m))
      .toJSON();
  }
};
t([i({ json: { read: !1 }, readOnly: !0 })], o.prototype, "type", void 0),
  t(
    [i({ type: ["ArcGISDimensionLayer"] })],
    o.prototype,
    "operationalLayerType",
    void 0
  ),
  t([i({ nonNullable: !0 })], o.prototype, "source", void 0),
  t([i({ readOnly: !0 })], o.prototype, "spatialReference", null),
  t(
    [
      i({
        types: { key: "type", base: null, typeMap: { simple: v } },
        json: { write: { ignoreOrigin: !0 } },
      }),
    ],
    o.prototype,
    "style",
    null
  ),
  t([i({ readOnly: !0 })], o.prototype, "fullExtent", null),
  t(
    [
      i({
        readOnly: !0,
        json: {
          read: !1,
          write: !1,
          origins: {
            service: { read: !1, write: !1 },
            "portal-item": { read: !1, write: !1 },
            "web-document": { read: !1, write: !1 },
          },
        },
      }),
    ],
    o.prototype,
    "opacity",
    void 0
  ),
  t([i({ type: ["show", "hide"] })], o.prototype, "listMode", void 0),
  t(
    [
      i({
        type: O.ofType(S),
        json: {
          write: { ignoreOrigin: !0 },
          origins: { "web-scene": { write: { ignoreOrigin: !0 } } },
        },
      }),
    ],
    o.prototype,
    "dimensions",
    null
  ),
  t([M("web-scene", "dimensions")], o.prototype, "writeDimensions", null),
  (o = t([g("esri.layers.DimensionLayer")], o));
const $ = o;
export { $ as default };
