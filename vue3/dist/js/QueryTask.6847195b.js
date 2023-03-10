import { q as u } from "./Table.e9c997d5.js";
import {
  aK as F,
  g7 as A,
  av as x,
  ar as I,
  gq as V,
  t as _,
  a0 as G,
  cS as w,
  cL as E,
  bS as R,
  g8 as L,
  ae as c,
  af as h,
  i6 as O,
  ag as q,
  ap as M,
  cy as Q,
  w as Z,
  i7 as k,
  ah as z,
  a1 as d,
  r as y,
  s as j,
} from "./index.8fd7165c.js";
import { n as B, s as J } from "./executeForIds.3a002380.js";
function N(r, t) {
  return t;
}
function C(r, t, e, o) {
  switch (e) {
    case 0:
      return m(r, t + o, 0);
    case 1:
      return r.originPosition === "lowerLeft"
        ? m(r, t + o, 1)
        : (function ({ translate: s, scale: i }, a, l) {
            return s[l] - a * i[l];
          })(r, t + o, 1);
  }
}
function v(r, t, e, o) {
  return e === 2 ? m(r, t, 2) : C(r, t, e, o);
}
function U(r, t, e, o) {
  return e === 2 ? m(r, t, 3) : C(r, t, e, o);
}
function X(r, t, e, o) {
  return e === 3 ? m(r, t, 3) : v(r, t, e, o);
}
function m({ translate: r, scale: t }, e, o) {
  return r[o] + e * t[o];
}
class Y {
  constructor(t) {
    (this._options = t),
      (this.geometryTypes = [
        "esriGeometryPoint",
        "esriGeometryMultipoint",
        "esriGeometryPolyline",
        "esriGeometryPolygon",
      ]),
      (this._previousCoordinate = [0, 0]),
      (this._transform = null),
      (this._applyTransform = N),
      (this._lengths = []),
      (this._currentLengthIndex = 0),
      (this._toAddInCurrentPath = 0),
      (this._vertexDimension = 0),
      (this._coordinateBuffer = null),
      (this._coordinateBufferPtr = 0),
      (this._attributesConstructor = class {});
  }
  createFeatureResult() {
    return { fields: [], features: [] };
  }
  finishFeatureResult(t) {
    if (
      (this._options.applyTransform && (t.transform = null),
      (this._attributesConstructor = class {}),
      (this._coordinateBuffer = null),
      (this._lengths.length = 0),
      !t.hasZ)
    )
      return;
    const e = V(
      t.geometryType,
      this._options.sourceSpatialReference,
      t.spatialReference
    );
    if (!_(e)) for (const o of t.features) e(o.geometry);
  }
  createSpatialReference() {
    return {};
  }
  addField(t, e) {
    const o = t.fields;
    G(o), o.push(e);
    const s = o.map((i) => i.name);
    this._attributesConstructor = function () {
      for (const i of s) this[i] = null;
    };
  }
  addFeature(t, e) {
    t.features.push(e);
  }
  prepareFeatures(t) {
    switch (
      ((this._transform = t.transform),
      this._options.applyTransform &&
        t.transform &&
        (this._applyTransform = this._deriveApplyTransform(t)),
      (this._vertexDimension = 2),
      t.hasZ && this._vertexDimension++,
      t.hasM && this._vertexDimension++,
      t.geometryType)
    ) {
      case "esriGeometryPoint":
        (this.addCoordinate = (e, o, s) => this.addCoordinatePoint(e, o, s)),
          (this.createGeometry = (e) => this.createPointGeometry(e));
        break;
      case "esriGeometryPolygon":
        (this.addCoordinate = (e, o, s) => this._addCoordinatePolygon(e, o, s)),
          (this.createGeometry = (e) => this._createPolygonGeometry(e));
        break;
      case "esriGeometryPolyline":
        (this.addCoordinate = (e, o, s) =>
          this._addCoordinatePolyline(e, o, s)),
          (this.createGeometry = (e) => this._createPolylineGeometry(e));
        break;
      case "esriGeometryMultipoint":
        (this.addCoordinate = (e, o, s) =>
          this._addCoordinateMultipoint(e, o, s)),
          (this.createGeometry = (e) => this._createMultipointGeometry(e));
    }
  }
  createFeature() {
    return (
      (this._lengths.length = 0),
      (this._currentLengthIndex = 0),
      (this._previousCoordinate[0] = 0),
      (this._previousCoordinate[1] = 0),
      (this._coordinateBuffer = null),
      (this._coordinateBufferPtr = 0),
      { attributes: new this._attributesConstructor() }
    );
  }
  allocateCoordinates() {}
  addLength(t, e, o) {
    this._lengths.length === 0 && (this._toAddInCurrentPath = e),
      this._lengths.push(e);
  }
  addQueryGeometry(t, e) {
    const { queryGeometry: o, queryGeometryType: s } = e,
      i = w(o.clone(), o, !1, !1, this._transform),
      a = E(i, s, !1, !1);
    (t.queryGeometryType = s), (t.queryGeometry = { ...a });
  }
  createPointGeometry(t) {
    const e = { x: 0, y: 0, spatialReference: t.spatialReference };
    return t.hasZ && (e.z = 0), t.hasM && (e.m = 0), e;
  }
  addCoordinatePoint(t, e, o) {
    const s = R(this._transform, "transform");
    switch (((e = this._applyTransform(s, e, o, 0)), o)) {
      case 0:
        t.x = e;
        break;
      case 1:
        t.y = e;
        break;
      case 2:
        "z" in t ? (t.z = e) : (t.m = e);
        break;
      case 3:
        t.m = e;
    }
  }
  _transformPathLikeValue(t, e) {
    let o = 0;
    e <= 1 &&
      ((o = this._previousCoordinate[e]), (this._previousCoordinate[e] += t));
    const s = R(this._transform, "transform");
    return this._applyTransform(s, t, e, o);
  }
  _addCoordinatePolyline(t, e, o) {
    this._dehydratedAddPointsCoordinate(t.paths, e, o);
  }
  _addCoordinatePolygon(t, e, o) {
    this._dehydratedAddPointsCoordinate(t.rings, e, o);
  }
  _addCoordinateMultipoint(t, e, o) {
    o === 0 && t.points.push([]);
    const s = this._transformPathLikeValue(e, o);
    t.points[t.points.length - 1].push(s);
  }
  _createPolygonGeometry(t) {
    return {
      rings: [[]],
      spatialReference: t.spatialReference,
      hasZ: !!t.hasZ,
      hasM: !!t.hasM,
    };
  }
  _createPolylineGeometry(t) {
    return {
      paths: [[]],
      spatialReference: t.spatialReference,
      hasZ: !!t.hasZ,
      hasM: !!t.hasM,
    };
  }
  _createMultipointGeometry(t) {
    return {
      points: [],
      spatialReference: t.spatialReference,
      hasZ: !!t.hasZ,
      hasM: !!t.hasM,
    };
  }
  _dehydratedAddPointsCoordinate(t, e, o) {
    o === 0 &&
      this._toAddInCurrentPath-- == 0 &&
      (t.push([]),
      (this._toAddInCurrentPath =
        this._lengths[++this._currentLengthIndex] - 1),
      (this._previousCoordinate[0] = 0),
      (this._previousCoordinate[1] = 0));
    const s = this._transformPathLikeValue(e, o),
      i = t[t.length - 1];
    o === 0 &&
      ((this._coordinateBufferPtr = 0),
      (this._coordinateBuffer = new Array(this._vertexDimension)),
      i.push(this._coordinateBuffer)),
      (this._coordinateBuffer[this._coordinateBufferPtr++] = s);
  }
  _deriveApplyTransform(t) {
    const { hasZ: e, hasM: o } = t;
    return e && o ? X : e ? v : o ? U : C;
  }
}
let n = class extends M {
  constructor(r) {
    super(r),
      (this.dynamicDataSource = null),
      (this.fieldsIndex = null),
      (this.gdbVersion = null),
      (this.infoFor3D = null),
      (this.pbfSupported = !1),
      (this.queryAttachmentsSupported = !1),
      (this.sourceSpatialReference = null),
      (this.url = null);
  }
  get parsedUrl() {
    return Q(this.url);
  }
  async execute(r, t) {
    const e = await this.executeJSON(r, t);
    return this.featureSetFromJSON(r, e, t);
  }
  async executeJSON(r, t) {
    var l;
    const e = this._normalizeQuery(r),
      o = ((l = r.outStatistics) == null ? void 0 : l[0]) != null,
      s = Z("featurelayer-pbf-statistics"),
      i = !o || s;
    let a;
    if (this.pbfSupported && i)
      try {
        a = await (async function (p, g, D) {
          const S = F(p),
            b = { ...D },
            f = x.from(g),
            P = !f.quantizationParameters,
            { data: T } = await L(
              S,
              f,
              new Y({
                sourceSpatialReference: f.sourceSpatialReference,
                applyTransform: P,
              }),
              b
            );
          return T;
        })(this.url, e, t);
      } catch (p) {
        if (p.name !== "query:parsing-pbf") throw p;
        this.pbfSupported = !1;
      }
    return (
      (this.pbfSupported && i) || (a = await k(this.url, e, t)),
      this._normalizeFields(a.fields),
      a
    );
  }
  async featureSetFromJSON(r, t, e) {
    if (
      !this._queryIs3DObjectFormat(r) ||
      _(this.infoFor3D) ||
      !t.assetMaps ||
      !t.features ||
      !t.features.length
    )
      return z.fromJSON(t);
    const { meshFeatureSetFromJSON: o } = await d(
      u(
        () => import("./meshFeatureSet.973954c4.js").then((s) => s.a),
        [
          "js/meshFeatureSet.973954c4.js",
          "js/index.8fd7165c.js",
          "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
          "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
          "js/NvapForm.feb8550d.js",
          "js/vue.a7ce1fbe.js",
          "assets/NvapForm.356f5dc3.css",
          "js/vue-router.805f6e2a.js",
          "js/Table.e9c997d5.js",
          "js/vue-i18n.67a42238.js",
          "assets/Table.3b7647ef.css",
          "assets/index.a699c0e4.css",
          "js/georeference.db8759a2.js",
          "js/mat3f64.eb921732.js",
          "js/mat4f64.b473928c.js",
          "js/spatialReferenceEllipsoidUtils.0049fd16.js",
          "js/quat.17ee06b3.js",
          "js/quatf64.75f9f553.js",
          "js/BufferView.b3039ce1.js",
          "js/vec33.5889ffa1.js",
          "js/imageUtils.c2d0d1ae.js",
          "js/earcut.9f54f087.js",
          "js/deduplicate.744c1fe7.js",
          "js/Indices.7165e4ff.js",
        ]
      ),
      e
    );
    return o(r, this.infoFor3D, t);
  }
  executeForCount(r, t) {
    return B(this.url, this._normalizeQuery(r), t);
  }
  executeForExtent(r, t) {
    return (async function (e, o, s) {
      const i = F(e);
      return A(i, x.from(o), { ...s }).then((a) => ({
        count: a.data.count,
        extent: I.fromJSON(a.data.extent),
      }));
    })(this.url, this._normalizeQuery(r), t);
  }
  executeForIds(r, t) {
    return J(this.url, this._normalizeQuery(r), t);
  }
  async executeRelationshipQuery(r, t) {
    const [{ default: e }, { executeRelationshipQuery: o }] = await d(
      Promise.all([
        u(
          () => import("./index.8fd7165c.js").then((s) => s.lD),
          [
            "js/index.8fd7165c.js",
            "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
            "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
            "js/NvapForm.feb8550d.js",
            "js/vue.a7ce1fbe.js",
            "assets/NvapForm.356f5dc3.css",
            "js/vue-router.805f6e2a.js",
            "js/Table.e9c997d5.js",
            "js/vue-i18n.67a42238.js",
            "assets/Table.3b7647ef.css",
            "assets/index.a699c0e4.css",
          ]
        ),
        u(
          () => import("./executeRelationshipQuery.a335d987.js"),
          [
            "js/executeRelationshipQuery.a335d987.js",
            "js/index.8fd7165c.js",
            "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
            "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
            "js/NvapForm.feb8550d.js",
            "js/vue.a7ce1fbe.js",
            "assets/NvapForm.356f5dc3.css",
            "js/vue-router.805f6e2a.js",
            "js/Table.e9c997d5.js",
            "js/vue-i18n.67a42238.js",
            "assets/Table.3b7647ef.css",
            "assets/index.a699c0e4.css",
          ]
        ),
      ]),
      t
    );
    return (
      (r = e.from(r)),
      (this.gdbVersion || this.dynamicDataSource) &&
        (((r = r.clone()).gdbVersion = r.gdbVersion || this.gdbVersion),
        (r.dynamicDataSource = r.dynamicDataSource || this.dynamicDataSource)),
      o(this.url, r, t)
    );
  }
  async executeRelationshipQueryForCount(r, t) {
    const [{ default: e }, { executeRelationshipQueryForCount: o }] = await d(
      Promise.all([
        u(
          () => import("./index.8fd7165c.js").then((s) => s.lD),
          [
            "js/index.8fd7165c.js",
            "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
            "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
            "js/NvapForm.feb8550d.js",
            "js/vue.a7ce1fbe.js",
            "assets/NvapForm.356f5dc3.css",
            "js/vue-router.805f6e2a.js",
            "js/Table.e9c997d5.js",
            "js/vue-i18n.67a42238.js",
            "assets/Table.3b7647ef.css",
            "assets/index.a699c0e4.css",
          ]
        ),
        u(
          () => import("./executeRelationshipQuery.a335d987.js"),
          [
            "js/executeRelationshipQuery.a335d987.js",
            "js/index.8fd7165c.js",
            "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
            "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
            "js/NvapForm.feb8550d.js",
            "js/vue.a7ce1fbe.js",
            "assets/NvapForm.356f5dc3.css",
            "js/vue-router.805f6e2a.js",
            "js/Table.e9c997d5.js",
            "js/vue-i18n.67a42238.js",
            "assets/Table.3b7647ef.css",
            "assets/index.a699c0e4.css",
          ]
        ),
      ]),
      t
    );
    return (
      (r = e.from(r)),
      (this.gdbVersion || this.dynamicDataSource) &&
        (((r = r.clone()).gdbVersion = r.gdbVersion || this.gdbVersion),
        (r.dynamicDataSource = r.dynamicDataSource || this.dynamicDataSource)),
      o(this.url, r, t)
    );
  }
  async executeAttachmentQuery(r, t) {
    const {
        executeAttachmentQuery: e,
        fetchAttachments: o,
        processAttachmentQueryResult: s,
      } = await d(
        u(
          () => import("./queryAttachments.047c6b86.js"),
          [
            "js/queryAttachments.047c6b86.js",
            "js/index.8fd7165c.js",
            "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
            "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
            "js/NvapForm.feb8550d.js",
            "js/vue.a7ce1fbe.js",
            "assets/NvapForm.356f5dc3.css",
            "js/vue-router.805f6e2a.js",
            "js/Table.e9c997d5.js",
            "js/vue-i18n.67a42238.js",
            "assets/Table.3b7647ef.css",
            "assets/index.a699c0e4.css",
          ]
        ),
        t
      ),
      i = F(this.url);
    return s(
      i,
      await (this.queryAttachmentsSupported ? e(i, r, t) : o(i, r, t))
    );
  }
  async executeTopFeaturesQuery(r, t) {
    const { executeTopFeaturesQuery: e } = await d(
      u(
        () => import("./executeTopFeaturesQuery.c76f777e.js"),
        [
          "js/executeTopFeaturesQuery.c76f777e.js",
          "js/index.8fd7165c.js",
          "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
          "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
          "js/NvapForm.feb8550d.js",
          "js/vue.a7ce1fbe.js",
          "assets/NvapForm.356f5dc3.css",
          "js/vue-router.805f6e2a.js",
          "js/Table.e9c997d5.js",
          "js/vue-i18n.67a42238.js",
          "assets/Table.3b7647ef.css",
          "assets/index.a699c0e4.css",
          "js/queryTopFeatures.e4128977.js",
        ]
      ),
      t
    );
    return e(this.parsedUrl, r, this.sourceSpatialReference, t);
  }
  async executeForTopIds(r, t) {
    const { executeForTopIds: e } = await d(
      u(
        () => import("./executeForTopIds.37f4cc18.js"),
        [
          "js/executeForTopIds.37f4cc18.js",
          "js/index.8fd7165c.js",
          "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
          "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
          "js/NvapForm.feb8550d.js",
          "js/vue.a7ce1fbe.js",
          "assets/NvapForm.356f5dc3.css",
          "js/vue-router.805f6e2a.js",
          "js/Table.e9c997d5.js",
          "js/vue-i18n.67a42238.js",
          "assets/Table.3b7647ef.css",
          "assets/index.a699c0e4.css",
          "js/queryTopFeatures.e4128977.js",
        ]
      ),
      t
    );
    return e(this.parsedUrl, r, t);
  }
  async executeForTopExtents(r, t) {
    const { executeForTopExtents: e } = await d(
      u(
        () => import("./executeForTopExtents.830d3bea.js"),
        [
          "js/executeForTopExtents.830d3bea.js",
          "js/index.8fd7165c.js",
          "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
          "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
          "js/NvapForm.feb8550d.js",
          "js/vue.a7ce1fbe.js",
          "assets/NvapForm.356f5dc3.css",
          "js/vue-router.805f6e2a.js",
          "js/Table.e9c997d5.js",
          "js/vue-i18n.67a42238.js",
          "assets/Table.3b7647ef.css",
          "assets/index.a699c0e4.css",
          "js/queryTopFeatures.e4128977.js",
        ]
      ),
      t
    );
    return e(this.parsedUrl, r, t);
  }
  async executeForTopCount(r, t) {
    const { executeForTopCount: e } = await d(
      u(
        () => import("./executeForTopCount.59c2a3cf.js"),
        [
          "js/executeForTopCount.59c2a3cf.js",
          "js/index.8fd7165c.js",
          "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
          "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
          "js/NvapForm.feb8550d.js",
          "js/vue.a7ce1fbe.js",
          "assets/NvapForm.356f5dc3.css",
          "js/vue-router.805f6e2a.js",
          "js/Table.e9c997d5.js",
          "js/vue-i18n.67a42238.js",
          "assets/Table.3b7647ef.css",
          "assets/index.a699c0e4.css",
          "js/queryTopFeatures.e4128977.js",
        ]
      ),
      t
    );
    return e(this.parsedUrl, r, t);
  }
  _normalizeQuery(r) {
    let t = x.from(r);
    if (
      ((t.sourceSpatialReference =
        t.sourceSpatialReference || this.sourceSpatialReference),
      (this.gdbVersion || this.dynamicDataSource) &&
        ((t = t === r ? t.clone() : t),
        (t.gdbVersion = r.gdbVersion || this.gdbVersion),
        (t.dynamicDataSource = r.dynamicDataSource
          ? O.from(r.dynamicDataSource)
          : this.dynamicDataSource)),
      y(this.infoFor3D) && this._queryIs3DObjectFormat(r))
    ) {
      (t = t === r ? t.clone() : t), (t.formatOf3DObjects = null);
      for (const e of this.infoFor3D.queryFormats) {
        if (e === "3D_glb") {
          t.formatOf3DObjects = e;
          break;
        }
        e !== "3D_gltf" || t.formatOf3DObjects || (t.formatOf3DObjects = e);
      }
      if (!t.formatOf3DObjects)
        throw new j(
          "query:unsupported-3d-query-formats",
          "Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf"
        );
      if (_(t.outFields) || !t.outFields.includes("*")) {
        (t = t === r ? t.clone() : t), _(t.outFields) && (t.outFields = []);
        const {
          originX: e,
          originY: o,
          originZ: s,
          translationX: i,
          translationY: a,
          translationZ: l,
          scaleX: p,
          scaleY: g,
          scaleZ: D,
          rotationX: S,
          rotationY: b,
          rotationZ: f,
          rotationDeg: P,
        } = this.infoFor3D.transformFieldRoles;
        t.outFields.push(e, o, s, i, a, l, p, g, D, S, b, f, P);
      }
    }
    return t;
  }
  _normalizeFields(r) {
    if (y(this.fieldsIndex) && y(r))
      for (const t of r) {
        const e = this.fieldsIndex.get(t.name);
        e && Object.assign(t, e.toJSON());
      }
  }
  _queryIs3DObjectFormat(r) {
    return (
      y(this.infoFor3D) &&
      r.returnGeometry === !0 &&
      r.multipatchOption !== "xyFootprint" &&
      !r.outStatistics
    );
  }
};
c([h({ type: O })], n.prototype, "dynamicDataSource", void 0),
  c([h()], n.prototype, "fieldsIndex", void 0),
  c([h()], n.prototype, "gdbVersion", void 0),
  c([h()], n.prototype, "infoFor3D", void 0),
  c([h({ readOnly: !0 })], n.prototype, "parsedUrl", null),
  c([h()], n.prototype, "pbfSupported", void 0),
  c([h()], n.prototype, "queryAttachmentsSupported", void 0),
  c([h()], n.prototype, "sourceSpatialReference", void 0),
  c([h({ type: String })], n.prototype, "url", void 0),
  (n = c([q("esri.tasks.QueryTask")], n));
const $ = n;
export { $ as x };
