import {
  j as R,
  ae as K,
  ag as E,
  cG as P,
  el as T,
  f as b,
  aH as L,
  aN as v,
  t as S,
  r as I,
  bS as A,
  q as O,
} from "./index.8fd7165c.js";
import { c as U } from "./ExpandedCIM.e22c8b13.js";
import { p as z } from "./visualVariablesUtils.1183f3fb.js";
import { S as B } from "./color.4c5303e9.js";
import { x as j, o as k, n as H, E as N, b as q } from "./Matcher.fe3c9df5.js";
import { p as G } from "./BaseProcessor.916c9ffb.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./BidiEngine.520adad3.js";
import "./GeometryUtils.874f8cf4.js";
import "./enums.13513a14.js";
import "./MaterialKey.97cb3dc8.js";
import "./definitions.ce677f69.js";
import "./Rect.6884a4ea.js";
import "./quantizationUtils.1e9e702d.js";
import "./floatRGBA.6f2fa7cd.js";
import "./visualVariablesUtils.de38be9a.js";
import "./enums.64ab819c.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./tileUtils.c2f19f52.js";
import "./TurboLine.2982dc8d.js";
import "./GeometryUtils.82ab0a13.js";
import "./earcut.9f54f087.js";
import "./devEnvironmentUtils.4eab2a99.js";
class J {
  constructor(e) {
    (this._remoteClient = e),
      (this._resourceMap = new Map()),
      (this._inFlightResourceMap = new Map()),
      (this.geometryEngine = null),
      (this.geometryEnginePromise = null);
  }
  destroy() {}
  async fetchResource(e, r) {
    const s = this._resourceMap,
      i = s.get(e);
    if (i) return i;
    let a = this._inFlightResourceMap.get(e);
    if (a) return a;
    try {
      (a = this._remoteClient.invoke(
        "tileRenderer.fetchResource",
        { url: e },
        { ...r }
      )),
        this._inFlightResourceMap.set(e, a),
        a.then((o) => (this._inFlightResourceMap.delete(e), s.set(e, o), o));
    } catch (o) {
      return R(o) ? null : { width: 0, height: 0 };
    }
    return a;
  }
  getResource(e) {
    return this._resourceMap.get(e) ?? null;
  }
}
function D(t, e) {
  return (!t.minScale || t.minScale >= e) && (!t.maxScale || t.maxScale <= e);
}
function C(t) {
  const e = t.message,
    r = {
      message: {
        data: {},
        tileKey: e.tileKey,
        tileKeyOrigin: e.tileKeyOrigin,
        version: e.version,
      },
      transferList: [],
    };
  for (const s in e.data) {
    const i = e.data[s];
    if (((r.message.data[s] = null), I(i))) {
      const a = i.stride,
        o = i.indices.slice(0),
        l = i.vertices.slice(0),
        n = i.records.slice(0),
        u = {
          stride: a,
          indices: o,
          vertices: l,
          records: n,
          metrics: v(i.metrics, (h) => h.slice(0)),
        };
      r.transferList.push(o, l, n), (r.message.data[s] = u);
    }
  }
  return r;
}
let w = class extends G {
  constructor() {
    super(...arguments),
      (this.type = "symbol"),
      (this._matchers = { feature: null, aggregate: null }),
      (this._bufferData = new Map()),
      (this._bufferIds = new Map());
  }
  initialize() {
    this.handles.add([
      this.tileStore.on("update", this.onTileUpdate.bind(this)),
    ]),
      (this._resourceManagerProxy = new J(this.remoteClient));
  }
  destroy() {
    this._resourceManagerProxy.destroy();
  }
  get supportsTileUpdates() {
    return !0;
  }
  forEachBufferId(t) {
    this._bufferIds.forEach((e) => {
      e.forEach(t);
    });
  }
  async update(t, e) {
    var i;
    const r = e.schema.processors[0];
    if (r.type !== "symbol") return;
    const s = P(this._schema, r);
    (T(s, "mesh") || T(s, "target")) &&
      ((t.mesh = !0),
      (i = t.why) == null || i.mesh.push("Symbology changed"),
      (this._schema = r),
      (this._factory = this._createFactory(r)),
      this._factory.update(r, this.tileStore.tileScheme.tileInfo));
  }
  onTileMessage(t, e, r, s) {
    return b(s), this._onTileData(t, e, r, s);
  }
  onTileClear(t) {
    return (
      this._bufferData.delete(t.key.id),
      this._bufferIds.delete(t.key.id),
      this.remoteClient.invoke("tileRenderer.onTileData", {
        tileKey: t.id,
        data: { clear: !0 },
      })
    );
  }
  onTileError(t, e, r) {
    const s = r.signal,
      i = { tileKey: t.id, error: e };
    return this.remoteClient.invoke("tileRenderer.onTileError", i, {
      signal: s,
    });
  }
  onTileUpdate(t) {
    for (const e of t.removed)
      this._bufferData.has(e.key.id) && this._bufferData.delete(e.key.id),
        this._bufferIds.has(e.key.id) && this._bufferIds.delete(e.key.id);
    for (const e of t.added)
      this._bufferData.forEach((r) => {
        for (const s of r)
          s.message.tileKey === e.id &&
            this._updateTileMesh("append", e, C(s), [], !1, !1, null);
      });
  }
  _addBufferData(t, e) {
    var r;
    this._bufferData.has(t) || this._bufferData.set(t, []),
      (r = this._bufferData.get(t)) == null || r.push(C(e));
  }
  _createFactory(t) {
    const { geometryType: e, objectIdField: r, fields: s } = this.service,
      i = {
        geometryType: e,
        fields: s,
        spatialReference: L.fromJSON(this.spatialReference),
      },
      a = new j(
        (n, u) =>
          this.remoteClient.invoke("tileRenderer.getMaterialItems", n, u),
        this.tileStore.tileScheme.tileInfo
      ),
      { matcher: o, aggregateMatcher: l } = t.mesh;
    return (
      (this._store = a),
      (this._matchers.feature = k(o, a, i, this._resourceManagerProxy)),
      (this._matchers.aggregate = v(l, (n) =>
        k(n, a, i, this._resourceManagerProxy)
      )),
      new H(e, r, a)
    );
  }
  async _onTileData(t, e, r, s) {
    var m;
    b(s);
    const { type: i, addOrUpdate: a, remove: o, clear: l, end: n } = e,
      u = !!this._schema.mesh.sortKey;
    if (!a) {
      const d = {
        type: i,
        addOrUpdate: null,
        remove: o,
        clear: l,
        end: n,
        sort: u,
      };
      return this.remoteClient.invoke(
        "tileRenderer.onTileData",
        { tileKey: t.id, data: d },
        s
      );
    }
    const h = this._processFeatures(
      t,
      a,
      r,
      s,
      (m = e.status) == null ? void 0 : m.version
    );
    try {
      const d = await h;
      if (S(d)) {
        const c = {
          type: i,
          addOrUpdate: null,
          remove: o,
          clear: l,
          end: n,
          sort: u,
        };
        return this.remoteClient.invoke(
          "tileRenderer.onTileData",
          { tileKey: t.id, data: c },
          s
        );
      }
      const f = [];
      for (const c of d) {
        let p = !1;
        const g = c.message.bufferIds,
          y = t.key.id,
          M = c.message.tileKey;
        if (y !== M && I(g)) {
          if (!this.tileStore.get(M)) {
            this._addBufferData(y, c), f.push(c);
            continue;
          }
          let _ = this._bufferIds.get(M);
          _ || ((_ = new Set()), this._bufferIds.set(M, _));
          const F = Array.from(g);
          for (const x of F) {
            if (_.has(x)) {
              p = !0;
              break;
            }
            _.add(x);
          }
        }
        p || (this._addBufferData(y, c), f.push(c));
      }
      await Promise.all(
        f.map((c) => {
          const p = t.key.id === c.message.tileKey,
            g = p ? e.remove : [],
            y = p && e.end;
          return this._updateTileMesh(i, t, c, g, y, !!e.clear, s.signal);
        })
      );
    } catch (d) {
      this._handleError(t, d, s);
    }
  }
  async _updateTileMesh(t, e, r, s, i, a, o) {
    const l = t,
      n = r.message.tileKey,
      u = !!this._schema.mesh.sortKey;
    n !== e.key.id && (i = !1);
    const h = v(r, (c) => c.message),
      m = v(r, (c) => c.transferList) || [],
      d = { type: l, addOrUpdate: h, remove: s, clear: a, end: i, sort: u },
      f = { transferList: O(m) || [], signal: o };
    return (
      b(f),
      this.remoteClient.invoke(
        "tileRenderer.onTileData",
        { tileKey: n, data: d },
        f
      )
    );
  }
  async _processFeatures(t, e, r, s, i) {
    if (S(e) || !e.hasFeatures) return null;
    const a = { transform: t.transform, hasZ: !1, hasM: !1 },
      o = this._factory,
      l = { viewingMode: "", scale: t.scale },
      n = await this._matchers.feature,
      u = await this._matchers.aggregate;
    b(s);
    const h = this._getLabelInfos(t, e);
    return (
      await o.analyze(e.getCursor(), this._resourceManagerProxy, n, u, a, l),
      b(s),
      this._writeFeatureSet(t, e, a, h, o, r, i)
    );
  }
  _writeFeatureSet(t, e, r, s, i, a, o) {
    const l = e.getSize(),
      n = this._schema.mesh.matcher.symbologyType,
      u = new N(
        t.key.id,
        { features: l, records: l, metrics: 0 },
        n,
        a,
        n !== B.HEATMAP,
        o
      ),
      h = { viewingMode: "", scale: t.scale },
      m = e.getCursor();
    for (; m.next(); )
      try {
        const f = m.getDisplayId(),
          c = I(s) ? s.get(f) : null;
        i.writeCursor(u, m, r, h, t.level, c, this._resourceManagerProxy);
      } catch {}
    const d = t.tileInfoView.tileInfo.isWrappable;
    return u.serialize(d);
  }
  _handleError(t, e, r) {
    if (!R(e)) {
      const s = { tileKey: t.id, error: e.message };
      return this.remoteClient.invoke("tileRenderer.onTileError", s, {
        signal: r.signal,
      });
    }
    return Promise.resolve();
  }
  _getLabelingSchemaForScale(t) {
    const e = this._schema.mesh.labels;
    if (S(e)) return null;
    if (e.type === "subtype") {
      const s = { type: "subtype", classes: {} };
      let i = !1;
      for (const a in e.classes) {
        const o = e.classes[a].filter((l) => D(l, t.scale));
        (i = i || !!o.length), (s.classes[a] = o);
      }
      return i ? s : null;
    }
    const r = e.classes.filter((s) => D(s, t.scale));
    return r.length ? { type: "simple", classes: r } : null;
  }
  _getLabels(t, e) {
    if (e.type === "subtype") {
      const r = this.service.subtypeField,
        s = A(r, "Expected to find subtype Field"),
        i = t.readAttribute(s);
      return i == null ? [] : e.classes[i] ?? [];
    }
    return e.classes;
  }
  _getLabelInfos(t, e) {
    const r = this._getLabelingSchemaForScale(t);
    if (S(r)) return null;
    const s = new Map(),
      i = e.getCursor();
    for (; i.next(); ) {
      const a = i.getDisplayId(),
        o = [],
        l = z(a),
        n =
          l && i.readAttribute("cluster_count") !== 1 ? "aggregate" : "feature",
        u = this._getLabels(i, r);
      for (const h of u) {
        if (h.target !== n) continue;
        const m = i.getStorage(),
          d =
            l && n === "feature"
              ? m.getComputedStringAtIndex(
                  i.readAttribute("referenceId"),
                  h.fieldIndex
                )
              : m.getComputedStringAtIndex(a, h.fieldIndex);
        if (!d) continue;
        const f = U(d.toString()),
          c = f[0],
          p = f[1];
        this._store.getMosaicItem(h.symbol, q(c)).then((g) => {
          o[h.index] = {
            glyphs: g.glyphMosaicItems ?? [],
            rtl: p,
            index: h.index,
          };
        });
      }
      s.set(a, o);
    }
    return s;
  }
};
w = K([E("esri.views.2d.layers.features.processors.SymbolProcessor")], w);
const ve = w;
export { ve as default };
