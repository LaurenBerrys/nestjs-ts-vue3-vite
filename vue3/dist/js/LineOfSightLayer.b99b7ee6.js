import {
  t as l,
  iN as O,
  eg as C,
  jM as h,
  ae as t,
  af as s,
  R as L,
  gi as E,
  ag as f,
  ap as H,
  iO as M,
  r as n,
  P as I,
  am as $,
  G as R,
  at as F,
  ao as S,
  aN as b,
  q as z,
  jN as G,
  ea as B,
  jO as J,
  jP as Z,
  et as k,
  ev as D,
  db as K,
} from "./index.8fd7165c.js";
import { c as Q } from "./Analysis.73a41638.js";
import { g as c } from "./persistable.2e5db5e6.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./multiOriginJSONSupportUtils.c978f4c3.js";
import "./resourceExtension.9b0d7459.js";
function N(e, i) {
  return x(e) === x(i);
}
function x(e) {
  if (l(e)) return null;
  const i = e.layer != null ? e.layer.id : "";
  let r = null;
  return (
    (r =
      e.objectId != null
        ? e.objectId
        : e.layer != null &&
          "objectIdField" in e.layer &&
          e.layer.objectIdField != null &&
          e.attributes != null
        ? e.attributes[e.layer.objectIdField]
        : e.uid),
    r == null ? null : `o-${i}-${r}`
  );
}
const P = {
  json: {
    write: {
      writer: function (e, i) {
        var r;
        l(e) ||
          ((r = e.layer) == null ? void 0 : r.objectIdField) == null ||
          e.attributes == null ||
          (i.feature = {
            layerId: e.layer.id,
            objectId: e.attributes[e.layer.objectIdField],
          });
      },
      target: {
        "feature.layerId": { type: [Number, String] },
        "feature.objectId": { type: [Number, String] },
      },
    },
    origins: {
      "web-scene": {
        read: function (e) {
          if (e.layerId != null && e.objectId != null)
            return {
              uid: null,
              layer: { id: e.layerId, objectIdField: "ObjectId" },
              attributes: { ObjectId: e.objectId },
            };
        },
      },
    },
  },
};
let u = class extends O(C(H)) {
  constructor(e) {
    super(e),
      (this.position = null),
      (this.elevationInfo = null),
      (this.feature = null);
  }
  equals(e) {
    return (
      h(this.position, e.position) &&
      h(this.elevationInfo, e.elevationInfo) &&
      N(this.feature, e.feature)
    );
  }
};
t([s({ type: L }), c()], u.prototype, "position", void 0),
  t([s({ type: E }), c()], u.prototype, "elevationInfo", void 0),
  t([s(P)], u.prototype, "feature", void 0),
  (u = t([f("esri.analysis.LineOfSightAnalysisObserver")], u));
const _ = u;
let y = class extends O(M) {
  constructor(e) {
    super(e),
      (this.position = null),
      (this.elevationInfo = null),
      (this.feature = null);
  }
  equals(e) {
    return (
      h(this.position, e.position) &&
      h(this.elevationInfo, e.elevationInfo) &&
      N(this.feature, e.feature)
    );
  }
};
t([s({ type: L }), c()], y.prototype, "position", void 0),
  t([s({ type: E }), c()], y.prototype, "elevationInfo", void 0),
  t([s(P)], y.prototype, "feature", void 0),
  (y = t([f("esri.analysis.LineOfSightAnalysisTarget")], y));
const q = y;
function U(e, i) {
  return l(i) || !i.mode
    ? (function (r) {
        return r ? V : W;
      })(e).mode
    : i.mode;
}
const V = { mode: "absolute-height", offset: 0 },
  W = { mode: "on-the-ground", offset: null },
  m = I.ofType(q);
let a = class extends Q {
  constructor(e) {
    super(e),
      (this.type = "line-of-sight"),
      (this.observer = null),
      (this.extent = null);
  }
  initialize() {
    this.addHandles(
      R(
        () => this._computeExtent(),
        (e) => {
          (l(e) || l(e.pending)) && this._set("extent", n(e) ? e.extent : null);
        },
        F
      )
    );
  }
  get targets() {
    return this._get("targets") || new m();
  }
  set targets(e) {
    this._set("targets", S(e, this.targets, m));
  }
  get spatialReference() {
    return n(this.observer) && n(this.observer.position)
      ? this.observer.position.spatialReference
      : null;
  }
  get requiredPropertiesForEditing() {
    return [b(this.observer, (e) => e.position)];
  }
  async waitComputeExtent() {
    const e = this._computeExtent();
    return n(e) ? z(e.pending) : Promise.resolve();
  }
  _computeExtent() {
    const e = this.spatialReference;
    if (l(this.observer) || l(this.observer.position) || l(e)) return null;
    const i = (d) =>
        (function (p, v) {
          return U(!!n(p) && p.hasZ, v);
        })(d.position, d.elevationInfo) === "absolute-height",
      r = this.observer.position,
      j = G(r.x, r.y, r.z, r.x, r.y, r.z);
    for (const d of this.targets)
      if (n(d.position)) {
        const p = B(d.position, e);
        if (n(p.pending)) return { pending: p.pending, extent: null };
        if (n(p.geometry)) {
          const { x: v, y: A, z: T } = p.geometry;
          J(j, [v, A, T]);
        }
      }
    const g = Z(j, e);
    return (
      (i(this.observer) && this.targets.every(i)) ||
        ((g.zmin = void 0), (g.zmax = void 0)),
      { pending: null, extent: g }
    );
  }
  clear() {
    (this.observer = null), this.targets.removeAll();
  }
};
t([s({ type: ["line-of-sight"] })], a.prototype, "type", void 0),
  t(
    [s({ type: _, json: { read: !0, write: !0 } })],
    a.prototype,
    "observer",
    void 0
  ),
  t(
    [s({ cast: $, type: m, nonNullable: !0, json: { read: !0, write: !0 } })],
    a.prototype,
    "targets",
    null
  ),
  t([s({ value: null, readOnly: !0 })], a.prototype, "extent", void 0),
  t([s({ readOnly: !0 })], a.prototype, "spatialReference", null),
  t([s({ readOnly: !0 })], a.prototype, "requiredPropertiesForEditing", null),
  (a = t([f("esri.analysis.LineOfSightAnalysis")], a));
const w = a,
  X = I.ofType(q);
let o = class extends k(D(K)) {
  constructor(e) {
    super(e),
      (this.type = "line-of-sight"),
      (this.operationalLayerType = "LineOfSightLayer"),
      (this.analysis = new w()),
      (this.opacity = 1);
  }
  initialize() {
    this.addHandles(
      R(
        () => this.analysis,
        (e, i) => {
          n(i) && i.parent === this && (i.parent = null),
            n(e) && (e.parent = this);
        },
        F
      )
    );
  }
  async load() {
    return (
      n(this.analysis) &&
        this.addResolvingPromise(this.analysis.waitComputeExtent()),
      this
    );
  }
  get observer() {
    return b(this.analysis, (e) => e.observer);
  }
  set observer(e) {
    b(this.analysis, (i) => (i.observer = e));
  }
  get targets() {
    return n(this.analysis) ? this.analysis.targets : new I();
  }
  set targets(e) {
    var i;
    S(e, (i = this.analysis) == null ? void 0 : i.targets);
  }
  get fullExtent() {
    return n(this.analysis) ? this.analysis.extent : null;
  }
  get spatialReference() {
    return n(this.analysis) ? z(this.analysis.spatialReference) : null;
  }
  releaseAnalysis(e) {
    this.analysis === e && (this.analysis = new w());
  }
};
t([s({ json: { read: !1 }, readOnly: !0 })], o.prototype, "type", void 0),
  t(
    [s({ type: ["LineOfSightLayer"] })],
    o.prototype,
    "operationalLayerType",
    void 0
  ),
  t(
    [s({ type: _, json: { read: !0, write: { ignoreOrigin: !0 } } })],
    o.prototype,
    "observer",
    null
  ),
  t(
    [s({ type: X, json: { read: !0, write: { ignoreOrigin: !0 } } })],
    o.prototype,
    "targets",
    null
  ),
  t(
    [s({ nonNullable: !0, json: { read: !1, write: !1 } })],
    o.prototype,
    "analysis",
    void 0
  ),
  t([s({ readOnly: !0 })], o.prototype, "fullExtent", null),
  t([s({ readOnly: !0 })], o.prototype, "spatialReference", null),
  t(
    [
      s({
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
  t([s({ type: ["show", "hide"] })], o.prototype, "listMode", void 0),
  (o = t([f("esri.layers.LineOfSightLayer")], o));
const ye = o;
export { ye as default };
