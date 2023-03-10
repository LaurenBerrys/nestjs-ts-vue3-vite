import {
  s as I,
  gj as v,
  eK as M,
  cV as Q,
  t as Z,
  bo as b,
  r as _,
  cN as q,
  cP as k,
  gk as A,
  eM as D,
  bJ as O,
} from "./index.8fd7165c.js";
import { t as P, n as C } from "./objectIdUtils.789e911a.js";
import { g as G } from "./FeatureStore.d8aec338.js";
import { f as E, g as x } from "./projectionSupport.4aeb802f.js";
import { e as $ } from "./QueryEngine.191035fe.js";
import { i as z, o as L, a as W } from "./clientSideDefaults.4b2f5b2f.js";
import {
  w as B,
  a as g,
  m as T,
  f as j,
  g as w,
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
const U = D,
  V = { xmin: -180, ymin: -90, xmax: 180, ymax: 90, spatialReference: D },
  H = {
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
function J(y) {
  return O(y) ? y.z != null : !!y.hasZ;
}
function K(y) {
  return O(y) ? y.m != null : !!y.hasM;
}
class Te {
  constructor() {
    (this._queryEngine = null), (this._nextObjectId = null);
  }
  destroy() {
    this._queryEngine && this._queryEngine && this._queryEngine.destroy(),
      (this._queryEngine =
        this._fieldsIndex =
        this._createDefaultAttributes =
          null);
  }
  async load(e) {
    const t = [],
      { features: a } = e,
      i = this._inferLayerProperties(a, e.fields),
      d = e.fields || [],
      p = e.hasM != null ? e.hasM : !!i.hasM,
      f = e.hasZ != null ? e.hasZ : !!i.hasZ,
      c = !e.spatialReference && !i.spatialReference,
      u = c ? U : e.spatialReference || i.spatialReference,
      m = c ? V : null,
      n = e.geometryType || i.geometryType,
      o = !n;
    let l = e.objectIdField || i.objectIdField,
      s = e.timeInfo;
    if (
      !o &&
      (c &&
        t.push({
          name: "feature-layer:spatial-reference-not-found",
          message:
            "Spatial reference not provided or found in features. Defaults to WGS84",
        }),
      !n)
    )
      throw new I(
        "feature-layer:missing-property",
        "geometryType not set and couldn't be inferred from the provided features"
      );
    if (!l)
      throw new I(
        "feature-layer:missing-property",
        "objectIdField not set and couldn't be found in the provided fields"
      );
    if (
      (i.objectIdField &&
        l !== i.objectIdField &&
        (t.push({
          name: "feature-layer:duplicated-oid-field",
          message: `Provided objectIdField "${l}" doesn't match the field name "${i.objectIdField}", found in the provided fields`,
        }),
        (l = i.objectIdField)),
      l && !i.objectIdField)
    ) {
      let r = null;
      d.some((h) => h.name === l && ((r = h), !0))
        ? ((r.type = "esriFieldTypeOID"), (r.editable = !1), (r.nullable = !1))
        : d.unshift({
            alias: l,
            name: l,
            type: "esriFieldTypeOID",
            editable: !1,
            nullable: !1,
          });
    }
    for (const r of d) {
      if (
        (r.name == null && (r.name = r.alias),
        r.alias == null && (r.alias = r.name),
        !r.name)
      )
        throw new I(
          "feature-layer:invalid-field-name",
          "field name is missing",
          { field: r }
        );
      if (
        (r.name === l && (r.type = "esriFieldTypeOID"),
        !v.jsonValues.includes(r.type))
      )
        throw new I(
          "feature-layer:invalid-field-type",
          `invalid type for field "${r.name}"`,
          {
            field: r,
          }
        );
    }
    const F = {};
    for (const r of d)
      if (r.type !== "esriFieldTypeOID" && r.type !== "esriFieldTypeGlobalID") {
        const h = M(r);
        h !== void 0 && (F[r.name] = h);
      }
    if (
      ((this._fieldsIndex = new Q(d)),
      (this._createDefaultAttributes = z(F, l)),
      s)
    ) {
      if (s.startTimeField) {
        const r = this._fieldsIndex.get(s.startTimeField);
        r
          ? ((s.startTimeField = r.name), (r.type = "esriFieldTypeDate"))
          : (s.startTimeField = null);
      }
      if (s.endTimeField) {
        const r = this._fieldsIndex.get(s.endTimeField);
        r
          ? ((s.endTimeField = r.name), (r.type = "esriFieldTypeDate"))
          : (s.endTimeField = null);
      }
      if (s.trackIdField) {
        const r = this._fieldsIndex.get(s.trackIdField);
        r
          ? (s.trackIdField = r.name)
          : ((s.trackIdField = null),
            t.push({
              name: "feature-layer:invalid-timeInfo-trackIdField",
              message: "trackIdField is missing",
              details: { timeInfo: s },
            }));
      }
      s.startTimeField ||
        s.endTimeField ||
        (t.push({
          name: "feature-layer:invalid-timeInfo",
          message: "startTimeField and endTimeField are missing or invalid",
          details: { timeInfo: s },
        }),
        (s = null));
    }
    const R = {
      warnings: t,
      featureErrors: [],
      layerDefinition: {
        ...H,
        drawingInfo: L(n),
        templates: W(F),
        extent: m,
        geometryType: n,
        objectIdField: l,
        fields: d,
        hasZ: f,
        hasM: p,
        timeInfo: s,
      },
      assignedObjectIds: {},
    };
    if (
      ((this._queryEngine = new $({
        fields: d,
        geometryType: n,
        hasM: p,
        hasZ: f,
        objectIdField: l,
        spatialReference: u,
        featureStore: new G({ geometryType: n, hasM: p, hasZ: f }),
        timeInfo: s,
        cacheSpatialQueries: !0,
      })),
      !a || !a.length)
    )
      return (this._nextObjectId = P), R;
    const S = C(l, a);
    return (
      (this._nextObjectId = S + 1),
      await E(a, u),
      this._loadInitialFeatures(R, a)
    );
  }
  async applyEdits(e) {
    const { spatialReference: t, geometryType: a } = this._queryEngine;
    return (
      await Promise.all([B(t, a), E(e.adds, t), E(e.updates, t)]),
      this._applyEdits(e)
    );
  }
  queryFeatures(e, t = {}) {
    return this._queryEngine.executeQuery(e, t.signal);
  }
  queryFeatureCount(e, t = {}) {
    return this._queryEngine.executeQueryForCount(e, t.signal);
  }
  queryObjectIds(e, t = {}) {
    return this._queryEngine.executeQueryForIds(e, t.signal);
  }
  queryExtent(e, t = {}) {
    return this._queryEngine.executeQueryForExtent(e, t.signal);
  }
  querySnapping(e, t = {}) {
    return this._queryEngine.executeQueryForSnapping(e, t.signal);
  }
  _inferLayerProperties(e, t) {
    let a,
      i,
      d = null,
      p = null,
      f = null;
    for (const c of e) {
      const u = c.geometry;
      if (
        !Z(u) &&
        (d || (d = b(u)),
        p || (p = u.spatialReference),
        a == null && (a = J(u)),
        i == null && (i = K(u)),
        d && p && a != null && i != null)
      )
        break;
    }
    if (t && t.length) {
      let c = null;
      t.some((u) => {
        const m = u.type === "esriFieldTypeOID",
          n = !u.type && u.name && u.name.toLowerCase() === "objectid";
        return (c = u), m || n;
      }) && (f = c.name);
    }
    return {
      geometryType: d,
      spatialReference: p,
      objectIdField: f,
      hasM: i,
      hasZ: a,
    };
  }
  async _loadInitialFeatures(e, t) {
    const {
        geometryType: a,
        hasM: i,
        hasZ: d,
        objectIdField: p,
        spatialReference: f,
        featureStore: c,
      } = this._queryEngine,
      u = [];
    for (const o of t) {
      if (
        (o.uid != null && (e.assignedObjectIds[o.uid] = -1),
        o.geometry && a !== b(o.geometry))
      ) {
        e.featureErrors.push(g("Incorrect geometry type."));
        continue;
      }
      const l = this._createDefaultAttributes(),
        s = T(this._fieldsIndex, l, o.attributes, !0, e.warnings);
      s
        ? e.featureErrors.push(s)
        : (this._assignObjectId(l, o.attributes, !0),
          (o.attributes = l),
          o.uid != null && (e.assignedObjectIds[o.uid] = o.attributes[p]),
          _(o.geometry) &&
            (o.geometry = x(o.geometry, o.geometry.spatialReference, f)),
          u.push(o));
    }
    c.addMany(q([], u, a, d, i, p));
    const { fullExtent: m, timeExtent: n } =
      await this._queryEngine.fetchRecomputedExtents();
    if (((e.layerDefinition.extent = m), n)) {
      const { start: o, end: l } = n;
      e.layerDefinition.timeInfo.timeExtent = [o, l];
    }
    return e;
  }
  async _applyEdits(e) {
    const { adds: t, updates: a, deletes: i } = e,
      d = {
        addResults: [],
        deleteResults: [],
        updateResults: [],
        uidToObjectId: {},
      };
    if (
      (t && t.length && this._applyAddEdits(d, t),
      a && a.length && this._applyUpdateEdits(d, a),
      i && i.length)
    ) {
      for (const c of i) d.deleteResults.push(j(c));
      this._queryEngine.featureStore.removeManyById(i);
    }
    const { fullExtent: p, timeExtent: f } =
      await this._queryEngine.fetchRecomputedExtents();
    return { extent: p, timeExtent: f, featureEditResults: d };
  }
  _applyAddEdits(e, t) {
    const { addResults: a } = e,
      {
        geometryType: i,
        hasM: d,
        hasZ: p,
        objectIdField: f,
        spatialReference: c,
        featureStore: u,
      } = this._queryEngine,
      m = [];
    for (const n of t) {
      if (n.geometry && i !== b(n.geometry)) {
        a.push(g("Incorrect geometry type."));
        continue;
      }
      const o = this._createDefaultAttributes(),
        l = T(this._fieldsIndex, o, n.attributes);
      if (l) a.push(l);
      else {
        if (
          (this._assignObjectId(o, n.attributes),
          (n.attributes = o),
          n.uid != null)
        ) {
          const s = n.attributes[f];
          e.uidToObjectId[n.uid] = s;
        }
        if (_(n.geometry)) {
          const s = n.geometry.spatialReference ?? c;
          n.geometry = x(w(n.geometry, s), s, c);
        }
        m.push(n), a.push(j(n.attributes[f]));
      }
    }
    u.addMany(q([], m, i, p, d, f));
  }
  _applyUpdateEdits({ updateResults: e }, t) {
    const {
      geometryType: a,
      hasM: i,
      hasZ: d,
      objectIdField: p,
      spatialReference: f,
      featureStore: c,
    } = this._queryEngine;
    for (const u of t) {
      const { attributes: m, geometry: n } = u,
        o = m && m[p];
      if (o == null) {
        e.push(g(`Identifier field ${p} missing`));
        continue;
      }
      if (!c.has(o)) {
        e.push(g(`Feature with object id ${o} missing`));
        continue;
      }
      const l = k(c.getFeature(o), a, d, i);
      if (_(n)) {
        if (a !== b(n)) {
          e.push(g("Incorrect geometry type."));
          continue;
        }
        const s = n.spatialReference ?? f;
        l.geometry = x(w(n, s), s, f);
      }
      if (m) {
        const s = T(this._fieldsIndex, l.attributes, m);
        if (s) {
          e.push(s);
          continue;
        }
      }
      c.add(A(l, a, d, i, p)), e.push(j(o));
    }
  }
  _assignObjectId(e, t, a = !1) {
    const i = this._queryEngine.objectIdField;
    a && t && isFinite(t[i]) ? (e[i] = t[i]) : (e[i] = this._nextObjectId++);
  }
}
export { Te as default };
