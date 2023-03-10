import {
  eM as g,
  cV as q,
  s as _,
  gj as D,
  eK as Q,
  J as v,
  j as P,
  Q as G,
  ac as M,
  r as F,
  cq as Z,
  cL as A,
  U as N,
  bo as S,
  cN as z,
  cP as L,
  gk as B,
} from "./index.8fd7165c.js";
import { g as J } from "./FeatureStore.d8aec338.js";
import { f as E, g as b } from "./projectionSupport.4aeb802f.js";
import { e as U } from "./QueryEngine.191035fe.js";
import { L as V, I as $, T as W } from "./geojson.96c8477e.js";
import { o as H, a as K, i as Y } from "./clientSideDefaults.4b2f5b2f.js";
import {
  w as X,
  m as w,
  f as T,
  a as I,
  g as R,
} from "./sourceUtils.18dd222d.js";
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
const ee = {
  hasAttachments: !1,
  capabilities: "query, editing, create, delete, update",
  useStandardizedQueries: !0,
  supportsCoordinatesQuantization: !0,
  supportsReturningQueryGeometry: !0,
  advancedQueryCapabilities: {
    supportsQueryAttachments: !1,
    supportsStatistics: !0,
    supportsPercentileStatistics: !0,
    supportsReturningGeometryCentroid: !0,
    supportsQueryWithDistance: !0,
    supportsDistinct: !0,
    supportsReturningQueryExtent: !0,
    supportsReturningGeometryProperties: !1,
    supportsHavingClause: !0,
    supportsOrderBy: !0,
    supportsPagination: !0,
    supportsQueryWithResultType: !1,
    supportsSqlExpression: !0,
    supportsDisjointSpatialRel: !0,
  },
};
class Re {
  constructor() {
    (this._queryEngine = null),
      (this._snapshotFeatures = async (e) => {
        const t = await this._fetch(e);
        return this._createFeatures(t);
      });
  }
  destroy() {
    var e;
    (e = this._queryEngine) == null || e.destroy(),
      (this._queryEngine =
        this._fieldsIndex =
        this._createDefaultAttributes =
          null);
  }
  async load(e, t = {}) {
    this._loadOptions = { url: e.url, customParameters: e.customParameters };
    const n = [];
    await this._checkProjection(e.spatialReference);
    let i = null;
    e.url && (i = await this._fetch(t == null ? void 0 : t.signal));
    const a = V(i, { geometryType: e.geometryType }),
      r = e.fields || a.fields || [],
      l = e.hasZ != null ? e.hasZ : a.hasZ,
      d = a.geometryType;
    let c = e.objectIdField || a.objectIdFieldName || "__OBJECTID";
    const y = e.spatialReference || g;
    let s = e.timeInfo;
    r === a.fields &&
      a.unknownFields.length > 0 &&
      n.push({
        name: "geojson-layer:unknown-field-types",
        message:
          "Some fields types couldn't be inferred from the features and were dropped",
        details: { unknownFields: a.unknownFields },
      });
    let u = new q(r).get(c);
    u
      ? (u.type !== "esriFieldTypeString" && (u.type = "esriFieldTypeOID"),
        (u.editable = !1),
        (u.nullable = !1),
        (c = u.name))
      : ((u = {
          alias: c,
          name: c,
          type:
            a.objectIdFieldType === "string"
              ? "esriFieldTypeString"
              : "esriFieldTypeOID",
          editable: !1,
          nullable: !1,
        }),
        r.unshift(u));
    const h = {};
    for (const o of r) {
      if (
        (o.name == null && (o.name = o.alias),
        o.alias == null && (o.alias = o.name),
        !o.name)
      )
        throw new _(
          "geojson-layer:invalid-field-name",
          "field name is missing",
          { field: o }
        );
      if (!D.jsonValues.includes(o.type))
        throw new _(
          "geojson-layer:invalid-field-type",
          `invalid type for field "${o.name}"`,
          {
            field: o,
          }
        );
      if (o.name !== u.name) {
        const f = Q(o);
        f !== void 0 && (h[o.name] = f);
      }
    }
    this._fieldsIndex = new q(r);
    const p = this._fieldsIndex.requiredFields.indexOf(u);
    if ((p > -1 && this._fieldsIndex.requiredFields.splice(p, 1), s)) {
      if (s.startTimeField) {
        const o = this._fieldsIndex.get(s.startTimeField);
        o
          ? ((s.startTimeField = o.name), (o.type = "esriFieldTypeDate"))
          : (s.startTimeField = null);
      }
      if (s.endTimeField) {
        const o = this._fieldsIndex.get(s.endTimeField);
        o
          ? ((s.endTimeField = o.name), (o.type = "esriFieldTypeDate"))
          : (s.endTimeField = null);
      }
      if (s.trackIdField) {
        const o = this._fieldsIndex.get(s.trackIdField);
        o
          ? (s.trackIdField = o.name)
          : ((s.trackIdField = null),
            n.push({
              name: "geojson-layer:invalid-timeInfo-trackIdField",
              message: "trackIdField is missing",
              details: { timeInfo: s },
            }));
      }
      s.startTimeField ||
        s.endTimeField ||
        (n.push({
          name: "geojson-layer:invalid-timeInfo",
          message: "startTimeField and endTimeField are missing",
          details: { timeInfo: s },
        }),
        (s = null));
    }
    const k = d ? H(d) : void 0,
      m = {
        warnings: n,
        featureErrors: [],
        layerDefinition: {
          ...ee,
          drawingInfo: k ?? void 0,
          templates: K(h),
          extent: void 0,
          geometryType: d,
          objectIdField: c,
          fields: r,
          hasZ: !!l,
          timeInfo: s,
        },
      };
    (this._queryEngine = new U({
      fields: r,
      geometryType: d,
      hasM: !1,
      hasZ: l,
      objectIdField: c,
      spatialReference: y,
      timeInfo: s,
      featureStore: new J({ geometryType: d, hasM: !1, hasZ: l }),
      cacheSpatialQueries: !0,
    })),
      (this._createDefaultAttributes = Y(h, c));
    const j = await this._createFeatures(i);
    this._objectIdGenerator = this._createObjectIdGenerator(
      this._queryEngine,
      j
    );
    const O = this._normalizeFeatures(j, m.warnings, m.featureErrors);
    this._queryEngine.featureStore.addMany(O);
    const { fullExtent: C, timeExtent: x } =
      await this._queryEngine.fetchRecomputedExtents();
    if (((m.layerDefinition.extent = C), x)) {
      const { start: o, end: f } = x;
      m.layerDefinition.timeInfo.timeExtent = [o, f];
    }
    return m;
  }
  async applyEdits(e) {
    const { spatialReference: t, geometryType: n } = this._queryEngine;
    return (
      await Promise.all([X(t, n), E(e.adds, t), E(e.updates, t)]),
      await this._waitSnapshotComplete(),
      this._applyEdits(e)
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
    var i;
    (this._loadOptions.customParameters = e),
      (i = this._snapshotTask) == null || i.abort(),
      (this._snapshotTask = v(this._snapshotFeatures)),
      this._snapshotTask.promise.then(
        (a) => {
          this._queryEngine.featureStore.clear(),
            (this._objectIdGenerator = this._createObjectIdGenerator(
              this._queryEngine,
              a
            ));
          const r = this._normalizeFeatures(a);
          r && this._queryEngine.featureStore.addMany(r);
        },
        (a) => {
          this._queryEngine.featureStore.clear(),
            P(a) ||
              G.getLogger("esri.layers.GeoJSONLayer").error(
                new _(
                  "geojson-layer:refresh",
                  "An error occurred during refresh",
                  { error: a }
                )
              );
        }
      ),
      await this._waitSnapshotComplete();
    const { fullExtent: t, timeExtent: n } =
      await this._queryEngine.fetchRecomputedExtents();
    return { extent: t, timeExtent: n };
  }
  async _createFeatures(e) {
    if (e == null) return [];
    const { geometryType: t, hasZ: n, objectIdField: i } = this._queryEngine,
      a = $(e, { geometryType: t, hasZ: n, objectIdField: i });
    if (!M(this._queryEngine.spatialReference, g))
      for (const r of a)
        F(r.geometry) &&
          (r.geometry = Z(
            b(
              A(
                r.geometry,
                this._queryEngine.geometryType,
                this._queryEngine.hasZ,
                !1
              ),
              g,
              this._queryEngine.spatialReference
            )
          ));
    return a;
  }
  async _waitSnapshotComplete() {
    if (this._snapshotTask && !this._snapshotTask.finished) {
      try {
        await this._snapshotTask.promise;
      } catch {}
      return this._waitSnapshotComplete();
    }
  }
  async _fetch(e) {
    const { url: t, customParameters: n } = this._loadOptions,
      i = (await N(t, { responseType: "json", query: { ...n }, signal: e }))
        .data;
    return await W(i), i;
  }
  _normalizeFeatures(e, t, n) {
    const { objectIdField: i } = this._queryEngine,
      a = [];
    for (const r of e) {
      const l = this._createDefaultAttributes(),
        d = w(this._fieldsIndex, l, r.attributes, !0, t);
      d
        ? n == null || n.push(d)
        : (this._assignObjectId(l, r.attributes, !0),
          (r.attributes = l),
          (r.objectId = l[i]),
          a.push(r));
    }
    return a;
  }
  async _applyEdits(e) {
    const { adds: t, updates: n, deletes: i } = e,
      a = {
        addResults: [],
        deleteResults: [],
        updateResults: [],
        uidToObjectId: {},
      };
    if (
      (t && t.length && this._applyAddEdits(a, t),
      n && n.length && this._applyUpdateEdits(a, n),
      i && i.length)
    ) {
      for (const d of i) a.deleteResults.push(T(d));
      this._queryEngine.featureStore.removeManyById(i);
    }
    const { fullExtent: r, timeExtent: l } =
      await this._queryEngine.fetchRecomputedExtents();
    return { extent: r, timeExtent: l, featureEditResults: a };
  }
  _applyAddEdits(e, t) {
    const { addResults: n } = e,
      {
        geometryType: i,
        hasM: a,
        hasZ: r,
        objectIdField: l,
        spatialReference: d,
        featureStore: c,
      } = this._queryEngine,
      y = [];
    for (const s of t) {
      if (s.geometry && i !== S(s.geometry)) {
        n.push(I("Incorrect geometry type."));
        continue;
      }
      const u = this._createDefaultAttributes(),
        h = w(this._fieldsIndex, u, s.attributes);
      if (h) n.push(h);
      else {
        if (
          (this._assignObjectId(u, s.attributes),
          (s.attributes = u),
          s.uid != null)
        ) {
          const p = s.attributes[l];
          e.uidToObjectId[s.uid] = p;
        }
        if (F(s.geometry)) {
          const p = s.geometry.spatialReference ?? d;
          s.geometry = b(R(s.geometry, p), p, d);
        }
        y.push(s), n.push(T(s.attributes[l]));
      }
    }
    c.addMany(z([], y, i, r, a, l));
  }
  _applyUpdateEdits({ updateResults: e }, t) {
    const {
      geometryType: n,
      hasM: i,
      hasZ: a,
      objectIdField: r,
      spatialReference: l,
      featureStore: d,
    } = this._queryEngine;
    for (const c of t) {
      const { attributes: y, geometry: s } = c,
        u = y && y[r];
      if (u == null) {
        e.push(I(`Identifier field ${r} missing`));
        continue;
      }
      if (!d.has(u)) {
        e.push(I(`Feature with object id ${u} missing`));
        continue;
      }
      const h = L(d.getFeature(u), n, a, i);
      if (F(s)) {
        if (n !== S(s)) {
          e.push(I("Incorrect geometry type."));
          continue;
        }
        const p = s.spatialReference ?? l;
        h.geometry = b(R(s, p), p, l);
      }
      if (y) {
        const p = w(this._fieldsIndex, h.attributes, y);
        if (p) {
          e.push(p);
          continue;
        }
      }
      d.add(B(h, n, a, i, r)), e.push(T(u));
    }
  }
  _createObjectIdGenerator(e, t) {
    const n = e.fieldsIndex.get(e.objectIdField);
    if (n.type === "esriFieldTypeString")
      return () => n.name + "-" + Date.now().toString(16);
    let i = Number.NEGATIVE_INFINITY;
    for (const a of t) a.objectId && (i = Math.max(i, a.objectId));
    return (i = Math.max(0, i) + 1), () => i++;
  }
  _assignObjectId(e, t, n = !1) {
    const i = this._queryEngine.objectIdField;
    e[i] = n && i in t ? t[i] : this._objectIdGenerator();
  }
  async _checkProjection(e) {
    try {
      await E(g, e);
    } catch {
      throw new _("geojson-layer", "Projection not supported");
    }
  }
}
export { Re as default };
