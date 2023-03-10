import {
  Q as d,
  s as m,
  T as p,
  av as _,
  bC as u,
  t as c,
} from "./index.8fd7165c.js";
import { v as y, n as f } from "./timeSupport.04391410.js";
import { J as w } from "./utils.e3aed7db.js";
import { p as I } from "./FeatureStore2D.2100fe9c.js";
import { q as b } from "./Table.e9c997d5.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./projectionSupport.4aeb802f.js";
import "./json.495fc412.js";
import "./CircularArray.6cd6ba2b.js";
import "./ComputedAttributeStorage.396dbaf7.js";
import "./arcadeTimeUtils.e79f2f70.js";
import "./executionError.fb3f283a.js";
import "./centroid.e6a939c1.js";
import "./definitions.ce677f69.js";
import "./visualVariablesUtils.1183f3fb.js";
import "./color.4c5303e9.js";
import "./enums.13513a14.js";
import "./enums.64ab819c.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./visualVariablesUtils.de38be9a.js";
import "./vue-i18n.67a42238.js";
const l = d.getLogger("esri.views.2d.layers.features.support.whereUtils"),
  T = { getAttribute: (r, t) => r.field(t) };
async function g(r, t) {
  const e = await b(
    () => import("./WhereClause.ae196341.js").then((i) => i.W),
    [
      "js/WhereClause.ae196341.js",
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
      "js/executionError.fb3f283a.js",
    ]
  );
  try {
    const i = e.WhereClause.create(r, t);
    if (!i.isStandardized) {
      const s = new m(
        "mapview - bad input",
        "Unable to apply filter's definition expression, as expression is not standardized.",
        i
      );
      l.error(s);
    }
    return (s) => {
      const a = s.readArcadeFeature();
      return i.testFeature(a, T);
    };
  } catch {
    return (
      l.warn(
        "mapview-bad-where-clause",
        "Encountered an error when evaluating where clause",
        r
      ),
      (s) => !0
    );
  }
}
class D {
  constructor(t) {
    (this._geometryBounds = p()),
      (this._idToVisibility = new Map()),
      (this._serviceInfo = t);
  }
  get hash() {
    return this._hash;
  }
  check(t) {
    return this._applyFilter(t);
  }
  clear() {
    const t = this._resetAllHiddenIds();
    return this.update(), { show: t, hide: [] };
  }
  invalidate() {
    this._idToVisibility.forEach((t, e) => {
      this._idToVisibility.set(e, 0);
    });
  }
  setKnownIds(t) {
    for (const e of t) this._idToVisibility.set(e, 1);
  }
  setTrue(t) {
    const e = [],
      i = [],
      s = new Set(t);
    return (
      this._idToVisibility.forEach((a, o) => {
        const n = !!(1 & this._idToVisibility.get(o)),
          h = s.has(o);
        !n && h ? e.push(o) : n && !h && i.push(o),
          this._idToVisibility.set(o, h ? 3 : 0);
      }),
      { show: e, hide: i }
    );
  }
  createQuery() {
    const {
      geometry: t,
      spatialRel: e,
      where: i,
      timeExtent: s,
      objectIds: a,
    } = this;
    return _.fromJSON({
      geometry: t,
      spatialRel: e,
      where: i,
      timeExtent: s,
      objectIds: a,
    });
  }
  async update(t, e) {
    this._hash = JSON.stringify(t);
    const i = await w(t, null, e);
    await Promise.all([
      this._setGeometryFilter(i),
      this._setIdFilter(i),
      this._setAttributeFilter(i),
      this._setTimeFilter(i),
    ]);
  }
  async _setAttributeFilter(t) {
    if (!t || !t.where) return (this._clause = null), void (this.where = null);
    (this._clause = await g(t.where, this._serviceInfo.fieldsIndex)),
      (this.where = t.where);
  }
  _setIdFilter(t) {
    (this._idsToShow = t && t.objectIds && new Set(t.objectIds)),
      (this._idsToHide = t && t.hiddenIds && new Set(t.hiddenIds)),
      (this.objectIds = t && t.objectIds);
  }
  async _setGeometryFilter(t) {
    if (!t || !t.geometry)
      return (
        (this._spatialQueryOperator = null),
        (this.geometry = null),
        void (this.spatialRel = null)
      );
    const e = t.geometry,
      i = t.spatialRel || "esriSpatialRelIntersects",
      s = await y(
        i,
        e,
        this._serviceInfo.geometryType,
        this._serviceInfo.hasZ,
        this._serviceInfo.hasM
      );
    u(this._geometryBounds, e),
      (this._spatialQueryOperator = s),
      (this.geometry = e),
      (this.spatialRel = i);
  }
  _setTimeFilter(t) {
    if (((this.timeExtent = this._timeOperator = null), t && t.timeExtent))
      if (this._serviceInfo.timeInfo)
        (this.timeExtent = t.timeExtent),
          (this._timeOperator = f(this._serviceInfo.timeInfo, t.timeExtent, I));
      else {
        const e = new m(
          "feature-layer-view:time-filter-not-available",
          "Unable to apply time filter, as layer doesn't have time metadata.",
          t.timeExtent
        );
        d.getLogger(
          "esri.views.2d.layers.features.controllers.FeatureFilter"
        ).error(e);
      }
  }
  _applyFilter(t) {
    return (
      this._filterByGeometry(t) &&
      this._filterById(t) &&
      this._filterByTime(t) &&
      this._filterByExpression(t)
    );
  }
  _filterByExpression(t) {
    return !this.where || this._clause(t);
  }
  _filterById(t) {
    return (
      (!this._idsToHide ||
        !this._idsToHide.size ||
        !this._idsToHide.has(t.getObjectId())) &&
      (!this._idsToShow ||
        !this._idsToShow.size ||
        this._idsToShow.has(t.getObjectId()))
    );
  }
  _filterByGeometry(t) {
    if (!this.geometry) return !0;
    const e = t.readHydratedGeometry();
    return !!e && this._spatialQueryOperator(e);
  }
  _filterByTime(t) {
    return !!c(this._timeOperator) || this._timeOperator(t);
  }
  _resetAllHiddenIds() {
    const t = [];
    return (
      this._idToVisibility.forEach((e, i) => {
        1 & e || (this._idToVisibility.set(i, 1), t.push(i));
      }),
      t
    );
  }
}
export { D as default };
