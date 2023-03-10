import {
  f as p,
  ac as l,
  eM as o,
  r as g,
  cq as _,
  cL as f,
  cV as d,
  q as w,
  s as u,
  J as q,
  j as E,
  Q as F,
} from "./index.8fd7165c.js";
import { g as x } from "./FeatureStore.d8aec338.js";
import { g as S, f as T } from "./projectionSupport.4aeb802f.js";
import { e as j } from "./QueryEngine.191035fe.js";
import { T as I, I as b } from "./geojson.96c8477e.js";
import { m as C } from "./sourceUtils.18dd222d.js";
import { K as P } from "./wfsUtils.e7c6e7db.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./BoundsStore.9c066771.js";
import "./PooledRBush.1b7c69fc.js";
import "./centroid.e6a939c1.js";
import "./utils.e3aed7db.js";
import "./json.495fc412.js";
import "./QueryEngineResult.c4edbbc1.js";
import "./quantizationUtils.1e9e702d.js";
import "./WhereClause.ae196341.js";
import "./executionError.fb3f283a.js";
import "./utils.7e94e38c.js";
import "./generateRendererUtils.855c90be.js";
import "./QueryEngineCapabilities.42e44ded.js";
import "./timeSupport.04391410.js";
import "./xmlUtils.444cb4c0.js";
class ne {
  constructor() {
    (this._queryEngine = null),
      (this._customParameters = null),
      (this._snapshotFeatures = async (e) => {
        const { objectIdField: t } = this._queryEngine,
          s = await P(
            this._getFeatureUrl ?? "",
            this._featureType.typeName,
            this._getFeatureOutputFormat,
            {
              customParameters: this._customParameters,
              dateFields: this._queryEngine.fieldsIndex.dateFields.map(
                (r) => r.name
              ),
              signal: e,
            }
          );
        await I(s), p(e);
        const a = b(s, {
          geometryType: this._queryEngine.geometryType,
          hasZ: !1,
          objectIdField: t,
        });
        if (!l(this._queryEngine.spatialReference, o))
          for (const r of a)
            g(r.geometry) &&
              (r.geometry = _(
                S(
                  f(r.geometry, this._queryEngine.geometryType, !1, !1),
                  o,
                  this._queryEngine.spatialReference
                )
              ));
        let n = 1;
        for (const r of a) {
          const i = {};
          C(this._fieldsIndex, i, r.attributes, !0),
            (r.attributes = i),
            r.attributes[t] == null && (r.objectId = r.attributes[t] = n++);
        }
        return a;
      });
  }
  destroy() {
    var e;
    (e = this._queryEngine) == null || e.destroy(), (this._queryEngine = null);
  }
  async load(e, t) {
    const {
      getFeatureUrl: s,
      getFeatureOutputFormat: a,
      spatialReference: n,
      fields: r,
      geometryType: i,
      featureType: h,
      objectIdField: m,
      customParameters: y,
    } = e;
    (this._featureType = h),
      (this._customParameters = y),
      (this._getFeatureUrl = s),
      (this._getFeatureOutputFormat = a),
      (this._fieldsIndex = new d(r)),
      await this._checkProjection(n),
      p(t),
      (this._queryEngine = new j({
        fields: r,
        geometryType: i,
        hasM: !1,
        hasZ: !1,
        objectIdField: m,
        spatialReference: n,
        timeInfo: null,
        featureStore: new x({ geometryType: i, hasM: !1, hasZ: !1 }),
      }));
    const c = await this._snapshotFeatures(w(t.signal));
    return (
      this._queryEngine.featureStore.addMany(c),
      { extent: (await this._queryEngine.fetchRecomputedExtents()).fullExtent }
    );
  }
  async applyEdits() {
    throw new u(
      "wfs-source:editing-not-supported",
      "applyEdits() is not supported on WFSLayer"
    );
  }
  async queryFeatures(e = {}, t = {}) {
    return (
      await this._waitSnapshotComplete(),
      this._queryEngine.executeQuery(e, t.signal)
    );
  }
  async queryFeatureCount(e = {}, t = {}) {
    return (
      await this._waitSnapshotComplete(),
      this._queryEngine.executeQueryForCount(e, t.signal)
    );
  }
  async queryObjectIds(e = {}, t = {}) {
    return (
      await this._waitSnapshotComplete(),
      this._queryEngine.executeQueryForIds(e, t.signal)
    );
  }
  async queryExtent(e = {}, t = {}) {
    return (
      await this._waitSnapshotComplete(),
      this._queryEngine.executeQueryForExtent(e, t.signal)
    );
  }
  async querySnapping(e, t = {}) {
    return (
      await this._waitSnapshotComplete(),
      this._queryEngine.executeQueryForSnapping(e, t.signal)
    );
  }
  async refresh(e) {
    var t;
    return (
      (this._customParameters = e),
      (t = this._snapshotTask) == null || t.abort(),
      (this._snapshotTask = q(this._snapshotFeatures)),
      this._snapshotTask.promise.then(
        (s) => {
          this._queryEngine.featureStore.clear(),
            s && this._queryEngine.featureStore.addMany(s);
        },
        (s) => {
          this._queryEngine.featureStore.clear(),
            E(s) ||
              F.getLogger("esri.layers.WFSLayer").error(
                new u(
                  "wfs-layer:getfeature-error",
                  "An error occurred during the GetFeature request",
                  { error: s }
                )
              );
        }
      ),
      await this._waitSnapshotComplete(),
      { extent: (await this._queryEngine.fetchRecomputedExtents()).fullExtent }
    );
  }
  async _waitSnapshotComplete() {
    if (this._snapshotTask && !this._snapshotTask.finished) {
      try {
        await this._snapshotTask.promise;
      } catch {}
      return this._waitSnapshotComplete();
    }
  }
  async _checkProjection(e) {
    try {
      await T(o, e);
    } catch {
      throw new u("unsupported-projection", "Projection not supported", {
        spatialReference: e,
      });
    }
  }
}
export { ne as default };
