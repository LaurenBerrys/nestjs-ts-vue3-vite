import {
  b3 as c,
  ae as a,
  af as l,
  ag as h,
  ap as b,
} from "./index.8fd7165c.js";
const v = { visible: "visibleSublayers" };
let r = class extends c(b) {
  constructor(e) {
    super(e), (this.scale = 0);
  }
  set layer(e) {
    this._get("layer") !== e &&
      (this._set("layer", e),
      this.handles.remove("layer"),
      e &&
        this.handles.add(
          [
            e.sublayers.on("change", () =>
              this.notifyChange("visibleSublayers")
            ),
            e.on("wms-sublayer-update", (s) =>
              this.notifyChange(v[s.propertyName])
            ),
          ],
          "layer"
        ));
  }
  get layers() {
    return this.visibleSublayers
      .filter(({ name: e }) => e)
      .map(({ name: e }) => e)
      .join();
  }
  get version() {
    this.commitProperty("layers");
    const e = this.layer;
    return (
      e && e.commitProperty("imageTransparency"),
      (this._get("version") || 0) + 1
    );
  }
  get visibleSublayers() {
    const { layer: e, scale: s } = this,
      t = e == null ? void 0 : e.sublayers,
      i = [],
      o = (n) => {
        const { minScale: y, maxScale: p, sublayers: u, visible: m } = n;
        m &&
          (s === 0 || ((y === 0 || s <= y) && (p === 0 || s >= p))) &&
          (u ? u.forEach(o) : i.push(n));
      };
    return t == null || t.forEach(o), i;
  }
  toJSON() {
    const { layer: e, layers: s } = this,
      { imageFormat: t, imageTransparency: i, version: o } = e;
    return {
      format: t,
      request: "GetMap",
      service: "WMS",
      styles: "",
      transparent: i ? "TRUE" : "FALSE",
      version: o,
      layers: s,
    };
  }
};
a([l()], r.prototype, "layer", null),
  a([l({ readOnly: !0 })], r.prototype, "layers", null),
  a([l({ type: Number })], r.prototype, "scale", void 0),
  a([l({ readOnly: !0 })], r.prototype, "version", null),
  a([l({ readOnly: !0 })], r.prototype, "visibleSublayers", null),
  (r = a([h("esri.layers.support.ExportWMSImageParameters")], r));
export { r as l };
