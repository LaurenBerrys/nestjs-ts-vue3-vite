import {
  ae as t,
  af as a,
  bn as S,
  dm as O,
  ag as f,
  dd as x,
  dV as N,
  ix as L,
  jA as b,
  bO as R,
  iN as I,
  P as M,
  cy as A,
  U as J,
  eE as w,
  es as D,
  et as V,
  eu as j,
  io as P,
  ev as U,
  iA as E,
  C as K,
  dg as z,
  an as C,
  cz as G,
  a2 as k,
  r as q,
  t as F,
  s as d,
  dl as B,
  iD as H,
  db as Q,
} from "./index.8fd7165c.js";
import { g as m } from "./persistable.2e5db5e6.js";
import { E as W, L as v } from "./SceneService.7e40727d.js";
import {
  s as X,
  l as Y,
  u as Z,
  m as $,
} from "./I3SLayerDefinitions.a4a2a8df.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./multiOriginJSONSupportUtils.c978f4c3.js";
import "./resourceExtension.9b0d7459.js";
import "./originUtils.cdead60a.js";
import "./resourceUtils.b249f31c.js";
var h;
let n = (h = class extends x {
  constructor(e) {
    super(e), (this.geometry = null), (this.type = "clip");
  }
  writeGeometry(e, i, r, s) {
    if (
      s.layer &&
      s.layer.spatialReference &&
      !s.layer.spatialReference.equals(this.geometry.spatialReference)
    ) {
      if (!N(e.spatialReference, s.layer.spatialReference))
        return void (
          s &&
          s.messages &&
          s.messages.push(
            new L(
              "scenemodification:unsupported",
              "Scene modifications with incompatible spatial references are not supported",
              {
                modification: this,
                spatialReference: s.layer.spatialReference,
                context: s,
              }
            )
          )
        );
      const l = new S();
      b(e, l, s.layer.spatialReference), (i[r] = l.toJSON(s));
    } else i[r] = e.toJSON(s);
    delete i[r].spatialReference;
  }
  clone() {
    return new h({ geometry: R(this.geometry), type: this.type });
  }
});
t([a({ type: S }), m()], n.prototype, "geometry", void 0),
  t(
    [O(["web-scene", "portal-item"], "geometry")],
    n.prototype,
    "writeGeometry",
    null
  ),
  t(
    [a({ type: ["clip", "mask", "replace"], nonNullable: !0 }), m()],
    n.prototype,
    "type",
    void 0
  ),
  (n = h = t([f("esri.layers.support.SceneModification")], n));
const c = n;
var p;
let y = (p = class extends I(M.ofType(c)) {
  constructor(e) {
    super(e), (this.url = null);
  }
  clone() {
    return new p({ url: this.url, items: this.items.map((e) => e.clone()) });
  }
  toJSON(e) {
    return this.toArray()
      .map((i) => i.toJSON(e))
      .filter((i) => !!i.geometry);
  }
  static fromJSON(e, i) {
    const r = new p();
    for (const s of e) r.add(c.fromJSON(s, i));
    return r;
  }
  static async fromUrl(e, i, r) {
    const s = { url: A(e), origin: "service" },
      l = await J(e, { responseType: "json", signal: w(r, "signal") }),
      _ = i.toJSON(),
      u = [];
    for (const g of l.data)
      u.push(
        c.fromJSON(
          { ...g, geometry: { ...g.geometry, spatialReference: _ } },
          s
        )
      );
    return new p({ url: e, items: u });
  }
});
t([a({ type: String })], y.prototype, "url", void 0),
  (y = p = t([f("esri.layers.support.SceneModifications")], y));
const T = y;
let o = class extends W(D(V(j(P(U(E(Q))))))) {
  constructor(...e) {
    super(...e),
      (this._handles = new K()),
      (this.geometryType = "mesh"),
      (this.operationalLayerType = "IntegratedMeshLayer"),
      (this.type = "integrated-mesh"),
      (this.nodePages = null),
      (this.materialDefinitions = null),
      (this.textureSetDefinitions = null),
      (this.geometryDefinitions = null),
      (this.serviceUpdateTimeStamp = null),
      (this.profile = "mesh-pyramids"),
      (this.modifications = null),
      (this._modificationsSource = null),
      (this.elevationInfo = null),
      (this.path = null);
  }
  destroy() {
    this._handles.destroy();
  }
  initialize() {
    this._handles.add(
      z(
        () => this.modifications,
        "after-changes",
        () => (this.modifications = this.modifications),
        C
      )
    );
  }
  normalizeCtorArgs(e, i) {
    return typeof e == "string" ? { url: e, ...i } : e;
  }
  readModifications(e, i, r) {
    this._modificationsSource = { url: G(e, r), context: r };
  }
  async load(e) {
    return this.addResolvingPromise(this._doLoad(e)), this;
  }
  async _doLoad(e) {
    const i = w(e, "signal");
    try {
      await this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e);
    } catch (r) {
      k(r);
    }
    if ((await this._fetchService(i), q(this._modificationsSource))) {
      const r = await T.fromUrl(
        this._modificationsSource.url,
        this.spatialReference,
        e
      );
      this.setAtOrigin(
        "modifications",
        r,
        this._modificationsSource.context.origin
      ),
        (this._modificationsSource = null);
    }
    await this._fetchIndexAndUpdateExtent(this.nodePages, i);
  }
  beforeSave() {
    if (!F(this._modificationsSource))
      return this.load().then(
        () => {},
        () => {}
      );
  }
  async saveAs(e, i) {
    return this._debouncedSaveOperations(
      v.SAVE_AS,
      {
        ...i,
        getTypeKeywords: () => this._getTypeKeywords(),
        portalItemLayerType: "integrated-mesh",
      },
      e
    );
  }
  async save() {
    const e = {
      getTypeKeywords: () => this._getTypeKeywords(),
      portalItemLayerType: "integrated-mesh",
    };
    return this._debouncedSaveOperations(v.SAVE, e);
  }
  validateLayer(e) {
    if (e.layerType && e.layerType !== "IntegratedMesh")
      throw new d(
        "integrated-mesh-layer:layer-type-not-supported",
        "IntegratedMeshLayer does not support this layer type",
        { layerType: e.layerType }
      );
    if (isNaN(this.version.major) || isNaN(this.version.minor))
      throw new d(
        "layer:service-version-not-supported",
        "Service version is not supported.",
        {
          serviceVersion: this.version.versionString,
          supportedVersions: "1.x",
        }
      );
    if (this.version.major > 1)
      throw new d(
        "layer:service-version-too-new",
        "Service version is too new.",
        {
          serviceVersion: this.version.versionString,
          supportedVersions: "1.x",
        }
      );
  }
  _getTypeKeywords() {
    return ["IntegratedMeshLayer"];
  }
};
t([a({ type: String, readOnly: !0 })], o.prototype, "geometryType", void 0),
  t([a({ type: ["show", "hide"] })], o.prototype, "listMode", void 0),
  t(
    [a({ type: ["IntegratedMeshLayer"] })],
    o.prototype,
    "operationalLayerType",
    void 0
  ),
  t([a({ json: { read: !1 }, readOnly: !0 })], o.prototype, "type", void 0),
  t([a({ type: X, readOnly: !0 })], o.prototype, "nodePages", void 0),
  t(
    [a({ type: [Y], readOnly: !0 })],
    o.prototype,
    "materialDefinitions",
    void 0
  ),
  t(
    [a({ type: [Z], readOnly: !0 })],
    o.prototype,
    "textureSetDefinitions",
    void 0
  ),
  t(
    [a({ type: [$], readOnly: !0 })],
    o.prototype,
    "geometryDefinitions",
    void 0
  ),
  t([a({ readOnly: !0 })], o.prototype, "serviceUpdateTimeStamp", void 0),
  t(
    [
      a({ type: T }),
      m({
        origins: ["web-scene", "portal-item"],
        type: "resource",
        prefix: "modifications",
      }),
    ],
    o.prototype,
    "modifications",
    void 0
  ),
  t(
    [B(["web-scene", "portal-item"], "modifications")],
    o.prototype,
    "readModifications",
    null
  ),
  t([a(H)], o.prototype, "elevationInfo", void 0),
  t(
    [
      a({
        type: String,
        json: {
          origins: {
            "web-scene": { read: !0, write: !0 },
            "portal-item": { read: !0, write: !0 },
          },
          read: !1,
        },
      }),
    ],
    o.prototype,
    "path",
    void 0
  ),
  (o = t([f("esri.layers.IntegratedMeshLayer")], o));
const fe = o;
export { fe as default };
