import { kZ as a, ae as m, ag as p, c$ as l } from "./index.8fd7165c.js";
import { n as h } from "./BitmapTileContainer.9704c56c.js";
import { o as d } from "./BaseTileRenderer.a3fd4cf9.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./Bitmap.cb464f5e.js";
import "./Container.a5892366.js";
import "./definitions.ce677f69.js";
import "./enums.64ab819c.js";
import "./Texture.fb0c670a.js";
import "./TiledDisplayObject.3b82e169.js";
import "./WGLContainer.e7ddd41d.js";
import "./VertexArrayObject.1b8f3583.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./color.4c5303e9.js";
import "./enums.13513a14.js";
import "./ProgramTemplate.4bbf0f5e.js";
import "./MaterialKey.97cb3dc8.js";
import "./utils.1f803f1b.js";
import "./StyleDefinition.4f77c81e.js";
import "./config.1337d16e.js";
import "./GeometryUtils.82ab0a13.js";
import "./earcut.9f54f087.js";
import "./TileContainer.4bfeb0d8.js";
class c {
  constructor() {
    (this.gradient = null),
      (this.height = 512),
      (this.intensities = null),
      (this.width = 512);
  }
  render(i) {
    a(
      i,
      512,
      this.intensities,
      this.gradient,
      this.minDensity,
      this.maxDensity
    );
  }
}
let o = class extends d {
  constructor(t) {
    super(t),
      (this._intensityInfo = { minDensity: 0, maxDensity: 0 }),
      (this.type = "heatmap"),
      (this.featuresView = {
        attributeView: { initialize: () => {}, requestUpdate: () => {} },
        requestRender: () => {},
      }),
      (this._container = new h(t.tileInfoView));
  }
  createTile(t) {
    const i = this._container.createTile(t);
    return (
      this.tileInfoView.getTileCoords(i.bitmap, t),
      (i.bitmap.resolution = this.tileInfoView.getTileResolution(t)),
      i
    );
  }
  onConfigUpdate() {
    const t = this.layer.renderer;
    if (t.type === "heatmap") {
      const { minDensity: i, maxDensity: r, colorStops: n } = t;
      (this._intensityInfo.minDensity = i),
        (this._intensityInfo.maxDensity = r),
        (this._gradient = l(n)),
        this.tiles.forEach((s) => {
          const e = s.bitmap.source;
          e &&
            ((e.minDensity = i),
            (e.maxDensity = r),
            (e.gradient = this._gradient),
            s.bitmap.invalidateTexture());
        });
    }
  }
  hitTest() {
    return Promise.resolve([]);
  }
  install(t) {
    t.addChild(this._container);
  }
  uninstall(t) {
    this._container.removeAllChildren(), t.removeChild(this._container);
  }
  disposeTile(t) {
    this._container.removeChild(t), t.destroy();
  }
  supportsRenderer(t) {
    return t && t.type === "heatmap";
  }
  onTileData(t) {
    const i = this.tiles.get(t.tileKey);
    if (!i) return;
    const r = t.intensityInfo,
      { minDensity: n, maxDensity: s } = this._intensityInfo,
      e = i.bitmap.source || new c();
    (e.intensities = (r && r.matrix) || null),
      (e.minDensity = n),
      (e.maxDensity = s),
      (e.gradient = this._gradient),
      (i.bitmap.source = e),
      this._container.addChild(i),
      this._container.requestRender(),
      this.requestUpdate();
  }
  onTileError(t) {}
  lockGPUUploads() {}
  unlockGPUUploads() {}
  fetchResource(t, i) {
    return Promise.reject();
  }
};
o = m(
  [p("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],
  o
);
const B = o;
export { B as default };
