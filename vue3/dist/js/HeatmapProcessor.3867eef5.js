import {
  ae as K,
  ag as F,
  cG as S,
  r as U,
  aN as u,
  k_ as g,
} from "./index.8fd7165c.js";
import { o as v } from "./definitions.ce677f69.js";
import { p as E } from "./BaseProcessor.916c9ffb.js";
import { o as d } from "./tileUtils.c2f19f52.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
class l {
  constructor(i, n) {
    (this.offset = i), (this.extent = n);
  }
}
let c = class extends E {
  constructor() {
    super(...arguments),
      (this.type = "heatmap"),
      (this._tileKeyToFeatureSets = new Map());
  }
  initialize() {
    this.handles.add([
      this.tileStore.on("update", this.onTileUpdate.bind(this)),
    ]);
  }
  async update(t, i) {
    const n = i.schema.processors[0];
    n.type === "heatmap" &&
      S(this._schema, n) &&
      ((t.mesh = !0), (this._schema = n));
  }
  onTileUpdate(t) {
    for (const i of t.removed) this._tileKeyToFeatureSets.delete(i.key.id);
  }
  onTileClear(t) {
    return (
      this._tileKeyToFeatureSets.delete(t.key.id),
      this.remoteClient.invoke("tileRenderer.onTileData", {
        tileKey: t.id,
        data: { clear: !0 },
      })
    );
  }
  async onTileMessage(t, i, n) {
    this._tileKeyToFeatureSets.has(t.key.id) ||
      this._tileKeyToFeatureSets.set(t.key.id, new Map());
    const m = this._tileKeyToFeatureSets.get(t.key.id);
    if (
      (m &&
        U(i.addOrUpdate) &&
        i.addOrUpdate.hasFeatures &&
        m.set(i.addOrUpdate.instance, i),
      i.end)
    ) {
      const p = [],
        f = (function (h) {
          const a = h.key,
            r = new Map(),
            s = 256,
            e = v,
            o = h.tileInfoView.tileInfo.isWrappable;
          return (
            r.set(d(a, -1, -1, o).id, new l([-e, -e], [e - s, e - s, e, e])),
            r.set(d(a, 0, -1, o).id, new l([0, -e], [0, e - s, e, e])),
            r.set(d(a, 1, -1, o).id, new l([e, -e], [0, e - s, s, e])),
            r.set(d(a, -1, 0, o).id, new l([-e, 0], [e - s, 0, e, e])),
            r.set(d(a, 1, 0, o).id, new l([e, 0], [0, 0, s, e])),
            r.set(d(a, -1, 1, o).id, new l([-e, e], [e - s, 0, e, s])),
            r.set(d(a, 0, 1, o).id, new l([0, e], [0, 0, e, s])),
            r.set(d(a, 1, 1, o).id, new l([e, e], [0, 0, s, s])),
            r
          );
        })(t);
      this._tileKeyToFeatureSets.forEach((h, a) => {
        if (a === t.key.id)
          h.forEach((r) => u(r.addOrUpdate, (s) => p.push(s)));
        else if (f.has(a)) {
          const r = f.get(a),
            [s, e] = r.offset;
          h.forEach((o) =>
            u(o.addOrUpdate, (k) => {
              const _ = k.transform(s, e, 1, 1);
              p.push(_);
            })
          );
        }
      });
      const y = g(p, this._schema.mesh, 512, 512),
        T = { tileKey: t.key.id, intensityInfo: y },
        w = [y.matrix];
      return this.remoteClient.invoke("tileRenderer.onTileData", T, {
        ...n,
        transferList: w,
      });
    }
  }
  onTileError(t, i, n) {
    return this.remoteClient.invoke(
      "tileRenderer.onTileError",
      { tileKey: t.id, error: i },
      n
    );
  }
};
c = K([F("esri.views.2d.layers.features.processors.HeatmapProcessor")], c);
const L = c;
export { L as default };
