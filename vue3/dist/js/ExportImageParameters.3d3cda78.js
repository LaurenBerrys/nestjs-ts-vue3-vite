import {
  b3 as p,
  cH as u,
  r as b,
  ae as a,
  af as l,
  au as d,
  ag as f,
  ap as g,
} from "./index.8fd7165c.js";
import { n as m } from "./floorFilterUtils.08225a6d.js";
import { i as S } from "./sublayerUtils.aa8d3bb7.js";
const v = {
  visible: "visibleSublayers",
  definitionExpression: "layerDefs",
  labelingInfo: "hasDynamicLayers",
  labelsVisible: "hasDynamicLayers",
  opacity: "hasDynamicLayers",
  minScale: "visibleSublayers",
  maxScale: "visibleSublayers",
  renderer: "hasDynamicLayers",
  source: "hasDynamicLayers",
};
let t = class extends p(g) {
  constructor(e) {
    super(e), (this.floors = null), (this.scale = 0);
  }
  destroy() {
    this.layer = null;
  }
  get dynamicLayers() {
    if (!this.hasDynamicLayers) return null;
    const e = this.visibleSublayers.map((r) => {
      const n = m(this.floors, r);
      return r.toExportImageJSON(n);
    });
    return e.length ? JSON.stringify(e) : null;
  }
  get hasDynamicLayers() {
    return (
      this.layer &&
      S(
        this.visibleSublayers,
        this.layer.serviceSublayers,
        this.layer.gdbVersion
      )
    );
  }
  set layer(e) {
    this._get("layer") !== e &&
      (this._set("layer", e),
      this.handles.remove("layer"),
      e &&
        this.handles.add(
          [
            e.allSublayers.on("change", () =>
              this.notifyChange("visibleSublayers")
            ),
            e.on("sublayer-update", (r) =>
              this.notifyChange(v[r.propertyName])
            ),
          ],
          "layer"
        ));
  }
  get layers() {
    const e = this.visibleSublayers;
    return e
      ? e.length
        ? "show:" + e.map((r) => r.id).join(",")
        : "show:-1"
      : null;
  }
  get layerDefs() {
    var n;
    const e = !!((n = this.floors) != null && n.length),
      r = this.visibleSublayers.filter(
        (i) => i.definitionExpression != null || (e && i.floorInfo != null)
      );
    return r.length
      ? JSON.stringify(
          r.reduce((i, s) => {
            const o = m(this.floors, s),
              y = u(o, s.definitionExpression);
            return b(y) && (i[s.id] = y), i;
          }, {})
        )
      : null;
  }
  get version() {
    this.commitProperty("layers"),
      this.commitProperty("layerDefs"),
      this.commitProperty("dynamicLayers"),
      this.commitProperty("timeExtent");
    const e = this.layer;
    return (
      e &&
        (e.commitProperty("dpi"),
        e.commitProperty("imageFormat"),
        e.commitProperty("imageTransparency"),
        e.commitProperty("gdbVersion")),
      (this._get("version") || 0) + 1
    );
  }
  get visibleSublayers() {
    const e = [];
    if (!this.layer) return e;
    const r = this.layer.sublayers,
      n = (s) => {
        const o = this.scale,
          y = o === 0,
          h = s.minScale === 0 || o <= s.minScale,
          c = s.maxScale === 0 || o >= s.maxScale;
        s.visible &&
          (y || (h && c)) &&
          (s.sublayers ? s.sublayers.forEach(n) : e.unshift(s));
      };
    r && r.forEach(n);
    const i = this._get("visibleSublayers");
    return !i || i.length !== e.length || i.some((s, o) => e[o] !== s) ? e : i;
  }
  toJSON() {
    const e = this.layer;
    let r = {
      dpi: e.dpi,
      format: e.imageFormat,
      transparent: e.imageTransparency,
      gdbVersion: e.gdbVersion || null,
    };
    return (
      this.hasDynamicLayers && this.dynamicLayers
        ? (r.dynamicLayers = this.dynamicLayers)
        : (r = { ...r, layers: this.layers, layerDefs: this.layerDefs }),
      r
    );
  }
};
a([l({ readOnly: !0 })], t.prototype, "dynamicLayers", null),
  a([l()], t.prototype, "floors", void 0),
  a([l({ readOnly: !0 })], t.prototype, "hasDynamicLayers", null),
  a([l()], t.prototype, "layer", null),
  a([l({ readOnly: !0 })], t.prototype, "layers", null),
  a([l({ readOnly: !0 })], t.prototype, "layerDefs", null),
  a([l({ type: Number })], t.prototype, "scale", void 0),
  a([l(d)], t.prototype, "timeExtent", void 0),
  a([l({ readOnly: !0 })], t.prototype, "version", null),
  a([l({ readOnly: !0 })], t.prototype, "visibleSublayers", null),
  (t = a([f("esri.layers.mixins.ExportImageParameters")], t));
export { t as c };
