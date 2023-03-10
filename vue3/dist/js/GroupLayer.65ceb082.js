import {
  im as p,
  io as b,
  et as v,
  eu as u,
  jb as c,
  jc as f,
  ev as m,
  ee as _,
  jd as g,
  G as d,
  je as L,
  r as w,
  iB as O,
  jf as M,
  ae as t,
  af as r,
  dm as j,
  an as h,
  ag as V,
  db as C,
} from "./index.8fd7165c.js";
import { a as x } from "./lazyLayerLoader.fb83604a.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
let s = class extends p(b(v(u(c(f(m(C))))))) {
  constructor(i) {
    super(i),
      (this._visibilityHandles = {}),
      (this.allLayers = new _({
        getCollections: () => [this.layers],
        getChildrenFunction: (e) => ("layers" in e ? e.layers : null),
      })),
      (this.allTables = g(this)),
      (this.fullExtent = void 0),
      (this.operationalLayerType = "GroupLayer"),
      (this.spatialReference = void 0),
      (this.type = "group");
  }
  initialize() {
    this._enforceVisibility(this.visibilityMode, this.visible),
      this.addHandles(
        d(() => this.visible, this._onVisibilityChange.bind(this), h)
      );
  }
  _writeLayers(i, e, o, l) {
    const a = [];
    if (!i) return a;
    i.forEach((y) => {
      const n = L(
        y,
        l.webmap ? l.webmap.getLayerJSONFromResourceInfo(y) : null,
        l
      );
      w(n) && n.layerType && a.push(n);
    }),
      (e.layers = a);
  }
  set portalItem(i) {
    this._set("portalItem", i);
  }
  set visibilityMode(i) {
    const e = this._get("visibilityMode") !== i;
    this._set("visibilityMode", i),
      e && this._enforceVisibility(i, this.visible);
  }
  load(i) {
    return (
      this.addResolvingPromise(
        this.loadFromPortal(
          {
            supportedTypes: [
              "Feature Service",
              "Feature Collection",
              "Scene Service",
            ],
            layerModuleTypeMap: x,
          },
          i
        )
      ),
      Promise.resolve(this)
    );
  }
  async loadAll() {
    return O(this, (i) => {
      i(this.layers, this.tables);
    });
  }
  layerAdded(i) {
    i.visible && this.visibilityMode === "exclusive"
      ? this._turnOffOtherLayers(i)
      : this.visibilityMode === "inherited" && (i.visible = this.visible),
      (this._visibilityHandles[i.uid] = d(
        () => i.visible,
        (e) => this._onChildVisibilityChange(i, e),
        h
      ));
  }
  layerRemoved(i) {
    const e = this._visibilityHandles[i.uid];
    e && (e.remove(), delete this._visibilityHandles[i.uid]),
      this._enforceVisibility(this.visibilityMode, this.visible);
  }
  _turnOffOtherLayers(i) {
    this.layers.forEach((e) => {
      e !== i && (e.visible = !1);
    });
  }
  _enforceVisibility(i, e) {
    if (!M(this).initialized) return;
    const o = this.layers;
    let l = o.find((a) => a.visible);
    switch (i) {
      case "exclusive":
        o.length && !l && ((l = o.getItemAt(0)), (l.visible = !0)),
          this._turnOffOtherLayers(l);
        break;
      case "inherited":
        o.forEach((a) => {
          a.visible = e;
        });
    }
  }
  _onVisibilityChange(i) {
    this.visibilityMode === "inherited" &&
      this.layers.forEach((e) => {
        e.visible = i;
      });
  }
  _onChildVisibilityChange(i, e) {
    switch (this.visibilityMode) {
      case "exclusive":
        e
          ? this._turnOffOtherLayers(i)
          : this._isAnyLayerVisible() || (i.visible = !0);
        break;
      case "inherited":
        i.visible = this.visible;
    }
  }
  _isAnyLayerVisible() {
    return this.layers.some((i) => i.visible);
  }
};
t([r({ readOnly: !0, dependsOn: [] })], s.prototype, "allLayers", void 0),
  t([r({ readOnly: !0 })], s.prototype, "allTables", void 0),
  t([r()], s.prototype, "fullExtent", void 0),
  t([r({ json: { read: !0, write: !0 } })], s.prototype, "blendMode", void 0),
  t(
    [r({ json: { read: !1, write: { ignoreOrigin: !0 } } })],
    s.prototype,
    "layers",
    void 0
  ),
  t([j("layers")], s.prototype, "_writeLayers", null),
  t([r({ type: ["GroupLayer"] })], s.prototype, "operationalLayerType", void 0),
  t(
    [r({ json: { origins: { "web-document": { read: !1, write: !1 } } } })],
    s.prototype,
    "portalItem",
    null
  ),
  t([r()], s.prototype, "spatialReference", void 0),
  t(
    [r({ json: { read: !1 }, readOnly: !0, value: "group" })],
    s.prototype,
    "type",
    void 0
  ),
  t(
    [
      r({
        type: ["independent", "inherited", "exclusive"],
        value: "independent",
        json: { write: !0, origins: { "web-map": { read: !1, write: !1 } } },
      }),
    ],
    s.prototype,
    "visibilityMode",
    null
  ),
  (s = t([V("esri.layers.GroupLayer")], s));
const P = s;
export { P as default };
