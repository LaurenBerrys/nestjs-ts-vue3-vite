import { s as x } from "./CircularArray.6cd6ba2b.js";
import {
  t as _,
  Q as f,
  cG as b,
  el as A,
  w as C,
  r as m,
  cb as S,
  e3 as F,
  b0 as D,
  by as T,
  q as v,
  gJ as w,
} from "./index.8fd7165c.js";
import { q as E } from "./Table.e9c997d5.js";
import { b as g } from "./ComputedAttributeStorage.396dbaf7.js";
function j(i, e, t) {
  if (_(i)) return null;
  const r = e.readArcadeFeature();
  try {
    return i.evaluate({ ...t, $feature: r });
  } catch (s) {
    return (
      f
        .getLogger("esri.views.2d.support.arcadeOnDemand")
        .warn("Feature arcade evaluation failed:", s),
      null
    );
  }
}
const G = E(
  () => import("./labelFormatUtils.a26ab37f.js"),
  [
    "js/labelFormatUtils.a26ab37f.js",
    "js/Table.e9c997d5.js",
    "js/vue.a7ce1fbe.js",
    "js/NvapForm.feb8550d.js",
    "assets/NvapForm.356f5dc3.css",
    "js/vue-i18n.67a42238.js",
    "js/vue-router.805f6e2a.js",
    "assets/Table.3b7647ef.css",
    "js/index.8fd7165c.js",
    "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
    "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
    "assets/index.a699c0e4.css",
  ]
);
let B = class {
  constructor(i, e) {
    (this._canCacheExpressionValue = !1),
      (this._sourceInfo = i),
      (this._storage = e),
      (this._bitsets = { computed: e.getBitset(e.createBitset()) });
  }
  get storage() {
    return this._storage;
  }
  invalidate() {
    this._bitsets.computed.clear();
  }
  async updateSchema(i, e) {
    const t = b(this._schema, e);
    if (((this._schema = e), !e || _(t) || !A(t, "attributes"))) return;
    C("esri-2d-update-debug"),
      this._bitsets.computed.clear(),
      (i.targets[e.name] = !0);
    const r = e.attributes,
      s = [],
      a = [];
    for (const n in r) {
      const d = r[n];
      switch (d.type) {
        case "field":
          break;
        case "expression":
          s.push(this._createArcadeComputedField(d));
          break;
        case "label-expression":
          s.push(this._createLabelArcadeComputedField(d));
          break;
        case "statistic":
          a.push(d);
      }
    }
    (this._computedFields = await Promise.all(s)),
      (this._canCacheExpressionValue = !this._computedFields.some(
        (n) =>
          n.type === "expression" &&
          m(n.expression) &&
          n.expression.referencesScale()
      )),
      (this._statisticFields = a);
  }
  setComputedAttributes(i, e, t, r) {
    const s = this._bitsets.computed;
    if (!this._canCacheExpressionValue || !s.has(t)) {
      s.set(t);
      for (const a of this._computedFields) {
        const n = this._evaluateField(e, a, r);
        switch (a.resultType) {
          case "numeric":
            i.setComputedNumericAtIndex(t, a.fieldIndex, n);
            break;
          case "string":
            i.setComputedStringAtIndex(t, a.fieldIndex, n);
        }
      }
    }
  }
  async _createArcadeComputedField(i) {
    const e = this._sourceInfo.spatialReference,
      t = this._sourceInfo.fieldsIndex;
    return { ...i, expression: await S(i.valueExpression, e, t) };
  }
  async _createLabelArcadeComputedField(i) {
    const e = this._sourceInfo.spatialReference,
      t = this._sourceInfo.fieldsIndex,
      { createLabelFunction: r } = await G,
      s = await r(i.label, t, e);
    return { ...i, builder: s };
  }
  _evaluateField(i, e, t) {
    switch (e.type) {
      case "label-expression": {
        const r = i.readArcadeFeature();
        return e.builder.evaluate(r) || "";
      }
      case "expression": {
        const { expression: r } = e;
        return j(r, i, { $view: { scale: t } });
      }
    }
  }
};
class l extends g {
  static from(e, t) {
    return new l(e.copy(), t);
  }
  constructor(e, t) {
    super(g.createInstance(), e.fullSchema()),
      (this._currentIndex = -1),
      (this._reader = e),
      (this._indices = t);
  }
  get hasNext() {
    return this._currentIndex + 1 < this._indices.length;
  }
  getSize() {
    return this._indices.length;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const e = new l(this._reader.copy(), this._indices);
    return (e._currentIndex = this._currentIndex), e;
  }
  next() {
    for (; this._nextIndex() && !this._reader._getExists(); );
    return this._currentIndex < this._indices.length;
  }
  _nextIndex() {
    return (
      ++this._currentIndex < this._indices.length &&
      (this._reader.setIndex(this._indices[this._currentIndex]), !0)
    );
  }
  setArcadeSpatialReference(e) {
    this._reader.setArcadeSpatialReference(e);
  }
  attachStorage(e) {
    this._reader.attachStorage(e);
  }
  get geometryType() {
    return this._reader.geometryType;
  }
  get hasFeatures() {
    return this._reader.hasFeatures;
  }
  get exceededTransferLimit() {
    return this._reader.exceededTransferLimit;
  }
  get hasZ() {
    return this._reader.hasZ;
  }
  get hasM() {
    return this._reader.hasM;
  }
  getStorage() {
    return this._reader.getStorage();
  }
  getComputedNumeric(e) {
    return this._reader.getComputedNumericAtIndex(0);
  }
  setComputedNumeric(e, t) {
    return this._reader.setComputedNumericAtIndex(t, 0);
  }
  getComputedString(e) {
    return this._reader.getComputedStringAtIndex(0);
  }
  setComputedString(e, t) {
    return this._reader.setComputedStringAtIndex(0, t);
  }
  getComputedNumericAtIndex(e) {
    return this._reader.getComputedNumericAtIndex(e);
  }
  setComputedNumericAtIndex(e, t) {
    this._reader.setComputedNumericAtIndex(e, t);
  }
  getComputedStringAtIndex(e) {
    return this._reader.getComputedStringAtIndex(e);
  }
  setComputedStringAtIndex(e, t) {
    return this._reader.setComputedStringAtIndex(e, t);
  }
  transform(e, t, r, s) {
    const a = this.copy();
    return (a._reader = this._reader.transform(e, t, r, s)), a;
  }
  readAttribute(e, t = !1) {
    return this._reader.readAttribute(e, t);
  }
  readAttributes() {
    return this._reader.readAttributes();
  }
  joinAttributes(e) {
    return this._reader.joinAttributes(e);
  }
  readArcadeFeature() {
    return this._reader.readArcadeFeature();
  }
  geometry() {
    return this._reader.geometry();
  }
  field(e) {
    return this.readAttribute(e, !0);
  }
  hasField(e) {
    return this._reader.hasField(e);
  }
  setField(e, t) {
    return this._reader.setField(e, t);
  }
  keys() {
    return this._reader.keys();
  }
  castToText(e = !1) {
    return this._reader.castToText(e);
  }
  getQuantizationTransform() {
    return this._reader.getQuantizationTransform();
  }
  getFieldNames() {
    return this._reader.getFieldNames();
  }
  getAttributeHash() {
    return this._reader.getAttributeHash();
  }
  getObjectId() {
    return this._reader.getObjectId();
  }
  getDisplayId() {
    return this._reader.getDisplayId();
  }
  setDisplayId(e) {
    return this._reader.setDisplayId(e);
  }
  getGroupId() {
    return this._reader.getGroupId();
  }
  setGroupId(e) {
    return this._reader.setGroupId(e);
  }
  getXHydrated() {
    return this._reader.getXHydrated();
  }
  getYHydrated() {
    return this._reader.getYHydrated();
  }
  getX() {
    return this._reader.getX();
  }
  getY() {
    return this._reader.getY();
  }
  setIndex(e) {
    return this._reader.setIndex(e);
  }
  getIndex() {
    return this._reader.getIndex();
  }
  readLegacyFeature() {
    return this._reader.readLegacyFeature();
  }
  readOptimizedFeature() {
    return this._reader.readOptimizedFeature();
  }
  readLegacyPointGeometry() {
    return this._reader.readLegacyPointGeometry();
  }
  readLegacyGeometry() {
    return this._reader.readLegacyGeometry();
  }
  readLegacyCentroid() {
    return this._reader.readLegacyCentroid();
  }
  readGeometryArea() {
    return this._reader.readGeometryArea();
  }
  readUnquantizedGeometry() {
    return this._reader.readUnquantizedGeometry();
  }
  readHydratedGeometry() {
    return this._reader.readHydratedGeometry();
  }
  readGeometry() {
    return this._reader.readGeometry();
  }
  readCentroid() {
    return this._reader.readCentroid();
  }
  _readAttribute(e, t) {
    throw new Error(
      "Error: Should not be called. Underlying _reader should be used instead"
    );
  }
  _readAttributes() {
    throw new Error(
      "Error: Should not be called. Underlying _reader should be used instead"
    );
  }
}
const I = F();
function p(i, e) {
  return (i << 16) | e;
}
function u(i) {
  return (4294901760 & i) >>> 16;
}
function c(i) {
  return 65535 & i;
}
const O = {
  getObjectId: (i) => i.getObjectId(),
  getAttributes: (i) => i.readAttributes(),
  getAttribute: (i, e) => i.readAttribute(e),
  cloneWithGeometry: (i, e) => i,
  getGeometry: (i) => i.readHydratedGeometry(),
  getCentroid: (i, e) => i.readCentroid(),
};
class U extends B {
  constructor(e, t, r) {
    super(e, t),
      (this.featureAdapter = O),
      (this.events = new D()),
      (this._featureSetsByInstance = new Map()),
      (this._objectIdToDisplayId = new Map()),
      (this._spatialIndexInvalid = !0),
      (this._indexSearchCache = new x(50)),
      (this._index = T(9, (s) => ({
        minX: this._storage.getXMin(s),
        minY: this._storage.getYMin(s),
        maxX: this._storage.getXMax(s),
        maxY: this._storage.getYMax(s),
      }))),
      (this.mode = r);
  }
  get storeStatistics() {
    let e = 0,
      t = 0,
      r = 0;
    return (
      this.forEach((s) => {
        const a = s.readGeometry();
        a &&
          ((t += a.isPoint ? 1 : a.lengths.reduce((n, d) => n + d, 0)),
          (r += a.isPoint ? 1 : a.lengths.length),
          (e += 1));
      }),
      { featureCount: e, vertexCount: t, ringCount: r }
    );
  }
  hasInstance(e) {
    return this._featureSetsByInstance.has(e);
  }
  onTileData(e, t) {
    if (_(t.addOrUpdate)) return t;
    if (
      (t.addOrUpdate.attachStorage(this._storage), this.mode === "snapshot")
    ) {
      const s = t.addOrUpdate.getCursor();
      for (; s.next(); ) {
        const a = s.getDisplayId();
        this.setComputedAttributes(this._storage, s, a, e.scale);
      }
      return t;
    }
    this._featureSetsByInstance.set(t.addOrUpdate.instance, t.addOrUpdate);
    const r = t.addOrUpdate.getCursor();
    for (; r.next(); ) this._insertFeature(r, e.scale);
    return (this._spatialIndexInvalid = !0), this.events.emit("changed"), t;
  }
  search(e) {
    this._rebuildIndex();
    const t = e.id,
      r = this._indexSearchCache.find((d) => d.tileId === t);
    if (m(r)) return r.readers;
    const s = new Map(),
      a = this._searchIndex(e.bounds),
      n = [];
    for (const d of a) {
      const h = this._storage.getInstanceId(d),
        o = u(h),
        y = c(h);
      s.has(o) || s.set(o, []), s.get(o).push(y);
    }
    return (
      s.forEach((d, h) => {
        const o = this._featureSetsByInstance.get(h);
        n.push(l.from(o, d));
      }),
      this._indexSearchCache.enqueue({ tileId: t, readers: n }),
      n
    );
  }
  insert(e) {
    const t = e.getCursor(),
      r = this._storage;
    for (; t.next(); ) {
      const s = p(t.instance, t.getIndex()),
        a = t.getObjectId(),
        n = this._objectIdToDisplayId.get(a) ?? this._storage.createDisplayId();
      t.setDisplayId(n),
        r.setInstanceId(n, s),
        this._objectIdToDisplayId.set(a, n);
    }
    this._featureSetsByInstance.set(e.instance, e),
      (this._spatialIndexInvalid = !0);
  }
  remove(e) {
    const t = this._objectIdToDisplayId.get(e);
    if (!t) return;
    const r = this._storage.getInstanceId(t),
      s = c(r),
      a = u(r),
      n = this._featureSetsByInstance.get(a);
    this._objectIdToDisplayId.delete(e),
      this._storage.releaseDisplayId(t),
      n.removeAtIndex(s),
      n.isEmpty && this._featureSetsByInstance.delete(a),
      (this._spatialIndexInvalid = !0);
  }
  forEach(e) {
    this._objectIdToDisplayId.forEach((t) => {
      const r = this._storage.getInstanceId(t),
        s = this._lookupFeature(r);
      e(s);
    });
  }
  forEachUnsafe(e) {
    this._objectIdToDisplayId.forEach((t) => {
      const r = this._storage.getInstanceId(t),
        s = u(r),
        a = c(r),
        n = this._getFeatureSet(s);
      n.setIndex(a), e(n);
    });
  }
  forEachInBounds(e, t) {
    const r = this._searchIndex(e);
    for (const s of r) {
      const a = this.lookupFeatureByDisplayId(s, this._storage);
      t(v(a));
    }
  }
  forEachBounds(e, t) {
    this._rebuildIndex();
    for (const r of e) {
      if (!r.readGeometry()) continue;
      const s = r.getDisplayId();
      w(
        I,
        this._storage.getXMin(s),
        this._storage.getYMin(s),
        this._storage.getXMax(s),
        this._storage.getYMax(s)
      ),
        t(I);
    }
  }
  sweepFeatures(e, t, r) {
    (this._spatialIndexInvalid = !0),
      this._objectIdToDisplayId.forEach((s, a) => {
        e.has(s) ||
          (t.releaseDisplayId(s),
          r && r.unsetAttributeData(s),
          this._objectIdToDisplayId.delete(a));
      }),
      this.events.emit("changed");
  }
  sweepFeatureSets(e) {
    (this._spatialIndexInvalid = !0),
      this._featureSetsByInstance.forEach((t, r) => {
        e.has(r) || this._featureSetsByInstance.delete(r);
      });
  }
  lookupObjectId(e, t) {
    const r = this.lookupFeatureByDisplayId(e, t);
    return _(r) ? null : r.getObjectId();
  }
  lookupDisplayId(e) {
    return this._objectIdToDisplayId.get(e);
  }
  lookupFeatureByDisplayId(e, t) {
    const r = t.getInstanceId(e);
    return this._lookupFeature(r);
  }
  lookupByDisplayIdUnsafe(e) {
    const t = this._storage.getInstanceId(e),
      r = u(t),
      s = c(t),
      a = this._getFeatureSet(r);
    return a ? (a.setIndex(s), a) : null;
  }
  _insertFeature(e, t) {
    const r = this._storage,
      s = e.getObjectId(),
      a = p(e.instance, e.getIndex());
    r.getInstanceId(e.getDisplayId());
    let n = this._objectIdToDisplayId.get(s);
    n ||
      ((n = r.createDisplayId()),
      this._objectIdToDisplayId.set(s, n),
      (this._spatialIndexInvalid = !0)),
      e.setDisplayId(n),
      r.setInstanceId(n, a),
      this.setComputedAttributes(r, e, n, t);
  }
  _searchIndex(e) {
    this._rebuildIndex();
    const t = { minX: e[0], minY: e[1], maxX: e[2], maxY: e[3] };
    return this._index.search(t);
  }
  _rebuildIndex() {
    if (!this._spatialIndexInvalid) return;
    const e = [];
    this.mode === "snapshot"
      ? this._featureSetsByInstance.forEach((t) => {
          const r = t.getCursor();
          for (; r.next(); ) {
            const s = r.getDisplayId();
            this._storage.setBounds(s, r) && e.push(s);
          }
        })
      : this._objectIdToDisplayId.forEach((t) => {
          const r = this._storage.getInstanceId(t);
          this._storage.setBounds(t, this._lookupFeature(r)) && e.push(t);
        }),
      this._index.clear(),
      this._index.load(e),
      this._indexSearchCache.clear(),
      (this._spatialIndexInvalid = !1);
  }
  _lookupFeature(e) {
    const t = u(e),
      r = this._getFeatureSet(t);
    if (!r) return;
    const s = r.getCursor(),
      a = c(e);
    return s.setIndex(a), s;
  }
  _getFeatureSet(e) {
    return this._featureSetsByInstance.get(e);
  }
}
export { B as c, U as g, O as p, l as r };
