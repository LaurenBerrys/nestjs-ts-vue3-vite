import {
  a9 as w,
  aa as g,
  ab as I,
  G as S,
  ad as f,
  j as o,
  ac as m,
  Q as T,
  ae as n,
  af as d,
  ag as V,
} from "./index.8fd7165c.js";
import { t as v, n as y } from "./imageUtils.17897e2a.js";
import { f as q, u as x } from "./LayerView.d8517e2e.js";
import { i as M } from "./RefreshableLayerView.d05f575e.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./BitmapTileContainer.9704c56c.js";
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
const Q = [102113, 102100, 3857, 3785, 900913],
  R = [0, 0];
let r = class extends M(v(q(x))) {
  constructor() {
    super(...arguments),
      (this._tileStrategy = null),
      (this._fetchQueue = null),
      (this._tileRequests = new Map()),
      (this.layer = null);
  }
  get tileMatrixSet() {
    const e = this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);
    return e
      ? (e.id !== this.layer.activeLayer.tileMatrixSetId &&
          (this.layer.activeLayer.tileMatrixSetId = e.id),
        e)
      : null;
  }
  update(e) {
    this._fetchQueue.pause(),
      (this._fetchQueue.state = e.state),
      this._tileStrategy.update(e),
      this._fetchQueue.resume();
  }
  attach() {
    var t;
    const e = (t = this.tileMatrixSet) == null ? void 0 : t.tileInfo;
    e &&
      ((this._tileInfoView = new w(e)),
      (this._fetchQueue = new g({
        tileInfoView: this._tileInfoView,
        concurrency: 16,
        process: (i, s) => this.fetchTile(i, s),
      })),
      (this._tileStrategy = new I({
        cachePolicy: "keep",
        resampling: !0,
        acquireTile: (i) => this.acquireTile(i),
        releaseTile: (i) => this.releaseTile(i),
        tileInfoView: this._tileInfoView,
      })),
      this.addAttachHandles(
        S(
          () => {
            var i, s;
            return [
              (s = (i = this.layer) == null ? void 0 : i.activeLayer) == null
                ? void 0
                : s.styleId,
              this.tileMatrixSet,
            ];
          },
          () => this._refresh()
        )
      ),
      super.attach());
  }
  detach() {
    var e, t;
    super.detach(),
      (e = this._tileStrategy) == null || e.destroy(),
      (t = this._fetchQueue) == null || t.destroy(),
      (this._fetchQueue = this._tileStrategy = this._tileInfoView = null);
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  releaseTile(e) {
    this._fetchQueue.abort(e.key.id),
      this._bitmapView.removeChild(e),
      e.once("detach", () => e.destroy()),
      this.requestUpdate();
  }
  acquireTile(e) {
    const t = this._bitmapView.createTile(e),
      i = t.bitmap;
    return (
      ([i.x, i.y] = this._tileInfoView.getTileCoords(R, t.key)),
      (i.resolution = this._tileInfoView.getTileResolution(t.key)),
      ([i.width, i.height] = this._tileInfoView.tileInfo.size),
      this._enqueueTileFetch(t),
      this._bitmapView.addChild(t),
      this.requestUpdate(),
      t
    );
  }
  async doRefresh() {
    !this.attached || this.updateRequested || this.suspended || this._refresh();
  }
  isUpdating() {
    var e;
    return ((e = this._fetchQueue) == null ? void 0 : e.updating) ?? !1;
  }
  async fetchTile(e, t = {}) {
    const i = "tilemapCache" in this.layer ? this.layer.tilemapCache : null,
      { signal: s, resamplingLevel: a = 0 } = t;
    if (!i) return this._fetchImage(e, s);
    const l = new f(0, 0, 0, 0);
    let c;
    try {
      await i.fetchAvailabilityUpsample(e.level, e.row, e.col, l, {
        signal: s,
      }),
        (c = await this._fetchImage(l, s));
    } catch (h) {
      if (o(h)) throw h;
      if (a < 3) {
        const u = this._tileInfoView.getTileParentId(e.id);
        if (u) {
          const p = new f(u),
            _ = await this.fetchTile(p, { ...t, resamplingLevel: a + 1 });
          return y(this._tileInfoView, _, p, e);
        }
      }
      throw h;
    }
    return y(this._tileInfoView, c, l, e);
  }
  canResume() {
    const e = super.canResume();
    return e && this.tileMatrixSet !== null;
  }
  supportsSpatialReference(e) {
    var t;
    return (
      ((t = this.layer.activeLayer.tileMatrixSets) == null
        ? void 0
        : t.some((i) => {
            var s;
            return m((s = i.tileInfo) == null ? void 0 : s.spatialReference, e);
          })) ?? !1
    );
  }
  async _enqueueTileFetch(e) {
    if (!this._fetchQueue.has(e.key.id)) {
      try {
        const t = await this._fetchQueue.push(e.key);
        (e.bitmap.source = t),
          (e.bitmap.width = this._tileInfoView.tileInfo.size[0]),
          (e.bitmap.height = this._tileInfoView.tileInfo.size[1]),
          e.once("attach", () => this.requestUpdate());
      } catch (t) {
        o(t) || T.getLogger(this.declaredClass).error(t);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(e, t) {
    return this.layer.fetchImageBitmapTile(e.level, e.row, e.col, {
      signal: t,
    });
  }
  _refresh() {
    this._fetchQueue.reset(),
      this._tileStrategy.tiles.forEach((e) => {
        if (!e.bitmap.source) return;
        const t = {
          id: e.key.id,
          fulfilled: !1,
          promise: this._fetchQueue
            .push(e.key)
            .then((i) => {
              e.bitmap.source = i;
            })
            .catch((i) => {
              o(i) || (e.bitmap.source = null);
            })
            .finally(() => {
              e.requestRender(), (t.fulfilled = !0);
            }),
        };
        this._tileRequests.set(e, t);
      });
  }
  _getTileMatrixSetBySpatialReference(e) {
    const t = this.view.spatialReference;
    if (!e.tileMatrixSets) return null;
    let i = e.tileMatrixSets.find((s) => {
      var a;
      return m((a = s.tileInfo) == null ? void 0 : a.spatialReference, t);
    });
    return (
      !i &&
        t.isWebMercator &&
        (i = e.tileMatrixSets.find((s) => {
          var a;
          return Q.includes(
            ((a = s.tileInfo) == null ? void 0 : a.spatialReference.wkid) ?? -1
          );
        })),
      i
    );
  }
};
n([d()], r.prototype, "_fetchQueue", void 0),
  n([d({ readOnly: !0 })], r.prototype, "tileMatrixSet", null),
  (r = n([V("esri.views.2d.layers.WMTSLayerView2D")], r));
const he = r;
export { he as default };
