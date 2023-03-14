import {
  w as l,
  r as c,
  bx as N,
  cL as B,
  cM as P,
  t as d,
  bS as H,
  W as Z,
  cN as Y,
  cO as Q,
  cP as J,
  cQ as g,
  cR as q,
  cS as V,
  Q as X,
  cG as $,
  D as W,
  j as U,
  s as D,
  cT as K,
  cU as tt,
  cV as et,
  aN as st,
  q as f,
  I as rt,
} from "./index.8fd7165c.js";
import { T as it, c as R } from "./arcadeTimeUtils.e79f2f70.js";
import { e as nt } from "./centroid.e6a939c1.js";
import { q as at } from "./Table.e9c997d5.js";
import {
  S as ot,
  T as ht,
  P as ut,
  u as v,
  N as dt,
  O as ct,
} from "./definitions.ce677f69.js";
import {
  c as lt,
  u as _t,
  f as y,
  e as ft,
  i as gt,
  n as pt,
  l as mt,
  r as yt,
  s as G,
  a as h,
} from "./visualVariablesUtils.1183f3fb.js";
import { W as xt } from "./color.4c5303e9.js";
import { G as p } from "./enums.64ab819c.js";
class b {
  static fromBuffer(t, e) {
    return new b(t, e);
  }
  static create(t, e = 4294967295) {
    const s = new Uint32Array(Math.ceil(t / 32));
    return new b(s, e);
  }
  constructor(t, e) {
    (this._mask = 0), (this._buf = t), (this._mask = e);
  }
  _getIndex(t) {
    return Math.floor(t / 32);
  }
  has(t) {
    const e = this._mask & t;
    return !!(this._buf[this._getIndex(e)] & (1 << e % 32));
  }
  hasRange(t, e) {
    let s = t,
      r = e;
    for (; s % 32 && s !== r; ) {
      if (this.has(s)) return !0;
      s++;
    }
    for (; r % 32 && s !== r; ) {
      if (this.has(s)) return !0;
      r--;
    }
    if (s === r) return !1;
    for (let i = s / 32; i !== r / 32; i++) if (this._buf[i]) return !0;
    return !1;
  }
  set(t) {
    const e = this._mask & t,
      s = this._getIndex(e),
      r = 1 << e % 32;
    this._buf[s] |= r;
  }
  setRange(t, e) {
    let s = t,
      r = e;
    for (; s % 32 && s !== r; ) this.set(s++);
    for (; r % 32 && s !== r; ) this.set(r--);
    if (s !== r)
      for (let i = s / 32; i !== r / 32; i++) this._buf[i] = 4294967295;
  }
  unset(t) {
    const e = this._mask & t,
      s = this._getIndex(e),
      r = 1 << e % 32;
    this._buf[s] &= 4294967295 ^ r;
  }
  resize(t) {
    const e = this._buf,
      s = new Uint32Array(Math.ceil(t / 32));
    s.set(e), (this._buf = s);
  }
  or(t) {
    for (let e = 0; e < this._buf.length; e++) this._buf[e] |= t._buf[e];
    return this;
  }
  and(t) {
    for (let e = 0; e < this._buf.length; e++) this._buf[e] &= t._buf[e];
    return this;
  }
  xor(t) {
    for (let e = 0; e < this._buf.length; e++) this._buf[e] ^= t._buf[e];
    return this;
  }
  ior(t) {
    for (let e = 0; e < this._buf.length; e++) this._buf[e] |= ~t._buf[e];
    return this;
  }
  iand(t) {
    for (let e = 0; e < this._buf.length; e++) this._buf[e] &= ~t._buf[e];
    return this;
  }
  ixor(t) {
    for (let e = 0; e < this._buf.length; e++) this._buf[e] ^= ~t._buf[e];
    return this;
  }
  any() {
    for (let t = 0; t < this._buf.length; t++) if (this._buf[t]) return !0;
    return !1;
  }
  copy(t) {
    for (let e = 0; e < this._buf.length; e++) this._buf[e] = t._buf[e];
    return this;
  }
  clone() {
    return new b(this._buf.slice(), this._mask);
  }
  clear() {
    for (let t = 0; t < this._buf.length; t++) this._buf[t] = 0;
  }
  forEachSet(t) {
    for (let e = 0; e < this._buf.length; e++) {
      let s = this._buf[e],
        r = 32 * e;
      if (s) for (; s; ) 1 & s && t(r), (s >>>= 1), r++;
    }
  }
  countSet() {
    let t = 0;
    return (
      this.forEachSet((e) => {
        t++;
      }),
      t
    );
  }
}
let S = 0;
const F = l("featurelayer-simplify-thresholds") ?? [0.5, 0.5, 0.5, 0.5],
  bt = F[0],
  It = F[1],
  St = F[2],
  Tt = F[3],
  M = l("featurelayer-simplify-payload-size-factors") ?? [1, 2, 4],
  At = M[0],
  zt = M[1],
  Ct = M[2],
  Ft = l("featurelayer-simplify-mobile-factor") ?? 2,
  wt = l("esri-mobile");
class O {
  constructor(t, e) {
    (this.type = "FeatureSetReader"),
      (this.arcadeDeclaredClass = "esri.arcade.Feature"),
      (this.seen = !1),
      (this.instance = 0),
      (this._tx = 0),
      (this._ty = 0),
      (this._sx = 1),
      (this._sy = 1),
      (this._deleted = null),
      (this._joined = []),
      (this._objectIdToIndex = null),
      (this._level = 0),
      (this._datetimeMetadata = null),
      (this.contextTimeReference = null),
      (this.instance = t),
      (this._layerSchema = e);
  }
  static createInstance() {
    return S++, (S = S > 65535 ? 0 : S), S;
  }
  get isEmpty() {
    return c(this._deleted) && this._deleted.countSet() === this.getSize();
  }
  set level(t) {
    this._level = t;
  }
  getAreaSimplificationThreshold(t, e) {
    let s = 1;
    const r = wt ? Ft : 1;
    e > 4e6
      ? (s = Ct * r)
      : e > 1e6
      ? (s = zt * r)
      : e > 5e5
      ? (s = At * r)
      : e > 1e5 && (s = r);
    let i = 0;
    t > 4e3
      ? (i = Tt * s)
      : t > 2e3
      ? (i = St * s)
      : t > 100
      ? (i = It)
      : t > 15 && (i = bt);
    let a = 8;
    return (
      this._level < 4
        ? (a = 1)
        : this._level < 5
        ? (a = 2)
        : this._level < 6 && (a = 4),
      i * a
    );
  }
  createQuantizedExtrudedQuad(t, e) {
    return new N([5], [t - 1, e, 1, -1, 1, 1, -1, 1, -1, -1]);
  }
  setArcadeSpatialReference(t) {
    this._arcadeSpatialReference = t;
  }
  attachStorage(t) {
    this._storage = t;
  }
  getQuantizationTransform() {
    throw new Error("Unable to find transform for featureSet");
  }
  getStorage() {
    return this._storage;
  }
  getComputedNumeric(t) {
    return this.getComputedNumericAtIndex(0);
  }
  setComputedNumeric(t, e) {
    return this.setComputedNumericAtIndex(e, 0);
  }
  getComputedString(t) {
    return this.getComputedStringAtIndex(0);
  }
  setComputedString(t, e) {
    return this.setComputedStringAtIndex(0, e);
  }
  getComputedNumericAtIndex(t) {
    return this._storage.getComputedNumericAtIndex(this.getDisplayId(), t);
  }
  setComputedNumericAtIndex(t, e) {
    this._storage.setComputedNumericAtIndex(this.getDisplayId(), t, e);
  }
  getComputedStringAtIndex(t) {
    return this._storage.getComputedStringAtIndex(this.getDisplayId(), t);
  }
  setComputedStringAtIndex(t, e) {
    return this._storage.setComputedStringAtIndex(this.getDisplayId(), t, e);
  }
  transform(t, e, s, r) {
    const i = this.copy();
    return (i._tx += t), (i._ty += e), (i._sx *= s), (i._sy *= r), i;
  }
  readAttribute(t, e = !1) {
    const s = this._readAttribute(t, e);
    if (s !== void 0) return s;
    for (const r of this._joined) {
      r.setIndex(this.getIndex());
      const i = r._readAttribute(t, e);
      if (i !== void 0) return i;
    }
  }
  readAttributes() {
    const t = this._readAttributes();
    for (const e of this._joined) {
      e.setIndex(this.getIndex());
      const s = e._readAttributes();
      for (const r of Object.keys(s)) t[r] = s[r];
    }
    return t;
  }
  joinAttributes(t) {
    this._joined.push(t);
  }
  readArcadeFeature() {
    return this;
  }
  geometry() {
    const t = this.readHydratedGeometry(),
      e = B(t, this.geometryType, this.hasZ, this.hasM),
      s = P(e);
    return s && (s.spatialReference = this._arcadeSpatialReference), s;
  }
  get dateTimeReferenceFieldIndex() {
    return (
      this._datetimeMetadata ||
        (this._datetimeMetadata = it.create(
          this._layerSchema.fields,
          this._layerSchema
        )),
      this._datetimeMetadata
    );
  }
  autocastArcadeDate(t, e) {
    var s;
    return e && e instanceof Date
      ? this.isUnknownDateTimeField(t)
        ? R.unknownDateJSToArcadeDate(e)
        : R.dateJSAndZoneToArcadeDate(
            e,
            ((s = this.contextTimeReference) == null ? void 0 : s.timeZone) ??
              "system"
          )
      : e;
  }
  isUnknownDateTimeField(t) {
    var e;
    return (
      ((e = this.dateTimeReferenceFieldIndex) == null
        ? void 0
        : e.fieldTimeZone(t)) === "unknown"
    );
  }
  fieldSourceTimeZone(t) {
    var e;
    return (
      ((e = this.dateTimeReferenceFieldIndex) == null
        ? void 0
        : e.fieldTimeZone(t)) ?? ""
    );
  }
  get layerPreferredTimeZone() {
    var t;
    return (
      ((t = this.dateTimeReferenceFieldIndex) == null
        ? void 0
        : t.layerPreferredTimeZone) ?? ""
    );
  }
  field(t) {
    if (this.hasField(t))
      return this.autocastArcadeDate(t, this.readAttribute(t, !0));
    for (const e of this._joined)
      if ((e.setIndex(this.getIndex()), e.hasField(t))) {
        const s = e._readAttribute(t, !0);
        return this.autocastArcadeDate(t, s);
      }
    throw new Error(`Field ${t} does not exist`);
  }
  setField(t, e) {
    throw new Error(
      "Unable to update feature attribute values, feature is readonly"
    );
  }
  keys() {
    return this.getFieldNames();
  }
  castToText(t = !1) {
    if (!t) return JSON.stringify(this.readLegacyFeature());
    const e = this.readLegacyFeature();
    if (!e) return JSON.stringify(null);
    const s = {
      geometry: e.geometry,
      attributes: { ...(e.attributes ? e.attributes : {}) },
    };
    for (const r in s.attributes) {
      const i = s.attributes[r];
      i instanceof Date && (s.attributes[r] = i.getTime());
    }
    return JSON.stringify(s);
  }
  gdbVersion() {
    return null;
  }
  fullSchema() {
    return this._layerSchema;
  }
  castAsJson(t = null) {
    var e;
    return {
      attributes: this._readAttributes(),
      geometry:
        (t == null ? void 0 : t.keepGeometryType) === !0
          ? this.geometry()
          : ((e = this.geometry()) == null ? void 0 : e.toJSON()) ?? null,
    };
  }
  castAsJsonAsync(t = null, e = null) {
    return Promise.resolve(this.castAsJson(e));
  }
  removeIds(t) {
    if (d(this._objectIdToIndex)) {
      const s = new Map(),
        r = this.getCursor();
      for (; r.next(); ) {
        const i = H(r.getObjectId());
        s.set(i, r.getIndex());
      }
      this._objectIdToIndex = s;
    }
    const e = this._objectIdToIndex;
    for (const s of t) e.has(s) && this.removeAtIndex(e.get(s));
  }
  removeAtIndex(t) {
    d(this._deleted) && (this._deleted = b.create(this.getSize())),
      this._deleted.set(t);
  }
  readGeometryForDisplay() {
    return this.readUnquantizedGeometry(!0);
  }
  readLegacyGeometryForDisplay() {
    return this.readLegacyGeometry(!0);
  }
  *features() {
    const t = this.getCursor();
    for (; t.next(); ) yield t.readOptimizedFeature();
  }
  _getExists() {
    return d(this._deleted) || !this._deleted.has(this.getIndex());
  }
  _computeCentroid() {
    if (this.geometryType !== "esriGeometryPolygon") return null;
    const t = this.readUnquantizedGeometry();
    if (!t || t.hasIndeterminateRingOrder) return null;
    const e = Z(this.getQuantizationTransform(), null);
    return nt(new N(), t, this.hasM, this.hasZ, e);
  }
  copyInto(t) {
    (t.seen = this.seen),
      (t._storage = this._storage),
      (t._arcadeSpatialReference = this._arcadeSpatialReference),
      (t._joined = this._joined),
      (t._tx = this._tx),
      (t._ty = this._ty),
      (t._sx = this._sx),
      (t._sy = this._sy),
      (t._deleted = this._deleted),
      (t._objectIdToIndex = this._objectIdToIndex);
  }
}
class m extends O {
  static fromFeatures(t, e) {
    const { objectIdField: s, geometryType: r } = e,
      i = Y([], t, r, !1, !1, s);
    for (let a = 0; a < i.length; a++) i[a].displayId = t[a].displayId;
    return m.fromOptimizedFeatures(i, e);
  }
  static fromFeatureSet(t, e) {
    const s = Q(t, e.objectIdField);
    return m.fromOptimizedFeatureSet(s, e);
  }
  static fromOptimizedFeatureSet(t, e) {
    const { features: s } = t,
      r = m.fromOptimizedFeatures(s, e);
    (r._exceededTransferLimit = t.exceededTransferLimit),
      (r._transform = t.transform);
    for (const i of t.fields)
      i.type === "esriFieldTypeDate" && r._dateFields.add(i.name);
    return r;
  }
  static fromOptimizedFeatures(t, e, s) {
    const r = O.createInstance(),
      i = new m(r, t, e);
    return (i._transform = s), i;
  }
  constructor(t, e, s) {
    super(t, s),
      (this._exceededTransferLimit = !1),
      (this._featureIndex = -1),
      (this._dateFields = new Set()),
      (this._geometryType = s == null ? void 0 : s.geometryType),
      (this._features = e);
  }
  get _current() {
    return this._features[this._featureIndex];
  }
  get geometryType() {
    return this._geometryType;
  }
  get hasFeatures() {
    return !!this._features.length;
  }
  get hasNext() {
    return this._featureIndex + 1 < this._features.length;
  }
  get exceededTransferLimit() {
    return this._exceededTransferLimit;
  }
  get hasZ() {
    return !1;
  }
  get hasM() {
    return !1;
  }
  removeIds(t) {
    const e = new Set(t);
    this._features = this._features.filter(
      (s) => !(s.objectId && e.has(s.objectId))
    );
  }
  append(t) {
    for (const e of t) this._features.push(e);
  }
  getSize() {
    return this._features.length;
  }
  getCursor() {
    return this.copy();
  }
  getQuantizationTransform() {
    return this._transform;
  }
  getAttributeHash() {
    let t = "";
    for (const e in this._current.attributes) t += this._current.attributes[e];
    return t;
  }
  getIndex() {
    return this._featureIndex;
  }
  setIndex(t) {
    this._featureIndex = t;
  }
  getObjectId() {
    var t;
    return (t = this._current) == null ? void 0 : t.objectId;
  }
  getDisplayId() {
    return this._current.displayId;
  }
  setDisplayId(t) {
    this._current.displayId = t;
  }
  getGroupId() {
    return this._current.groupId;
  }
  setGroupId(t) {
    this._current.groupId = t;
  }
  copy() {
    const t = new m(this.instance, this._features, this.fullSchema());
    return this.copyInto(t), t;
  }
  next() {
    for (
      ;
      ++this._featureIndex < this._features.length && !this._getExists();

    );
    return this._featureIndex < this._features.length;
  }
  readLegacyFeature() {
    return J(this._current, this.geometryType, this.hasZ, this.hasM);
  }
  readOptimizedFeature() {
    return this._current;
  }
  readLegacyPointGeometry() {
    return this.readGeometry() ? { x: this.getX(), y: this.getY() } : null;
  }
  readLegacyGeometry() {
    const t = this.readGeometry();
    return B(t, this.geometryType, this.hasZ, this.hasM);
  }
  readLegacyCentroid() {
    const t = this.readCentroid();
    return d(t)
      ? null
      : {
          x: t.coords[0] * this._sx + this._tx,
          y: t.coords[1] * this._sy + this._ty,
        };
  }
  readGeometryArea() {
    return g(this._current) ? q(this._current.geometry, 2) : 0;
  }
  readUnquantizedGeometry() {
    const t = this.readGeometry();
    if (this.geometryType === "esriGeometryPoint" || !t) return t;
    const e = t.clone();
    return (
      (function ({ coords: s, lengths: r }) {
        let i = 0;
        for (const a of r) {
          for (let n = 1; n < a; n++)
            (s[2 * (i + n)] += s[2 * (i + n) - 2]),
              (s[2 * (i + n) + 1] += s[2 * (i + n) - 1]);
          i += a;
        }
      })(e),
      e
    );
  }
  readHydratedGeometry() {
    const t = this._current.geometry;
    if (d(t)) return null;
    const e = t.clone();
    return (
      c(this._transform) && V(e, e, this.hasZ, this.hasM, this._transform), e
    );
  }
  getXHydrated() {
    if (!g(this._current)) return 0;
    const t = this._current.geometry.coords[0],
      e = this.getQuantizationTransform();
    return d(e) ? t : t * e.scale[0] + e.translate[0];
  }
  getYHydrated() {
    if (!g(this._current)) return 0;
    const t = this._current.geometry.coords[1],
      e = this.getQuantizationTransform();
    return d(e) ? t : e.translate[1] - t * e.scale[1];
  }
  getX() {
    return g(this._current)
      ? this._current.geometry.coords[0] * this._sx + this._tx
      : 0;
  }
  getY() {
    return g(this._current)
      ? this._current.geometry.coords[1] * this._sy + this._ty
      : 0;
  }
  readGeometry() {
    if (!g(this._current)) {
      if (c(this._current.centroid)) {
        const [s, r] = this._current.centroid.coords;
        return this.createQuantizedExtrudedQuad(s, r);
      }
      return null;
    }
    const t = this._current.geometry.clone();
    if (t.isPoint)
      return (
        (t.coords[0] = t.coords[0] * this._sx + this._tx),
        (t.coords[1] = t.coords[1] * this._sy + this._ty),
        t
      );
    let e = 0;
    for (const s of t.lengths)
      (t.coords[2 * e] = t.coords[2 * e] * this._sx + this._tx),
        (t.coords[2 * e + 1] = t.coords[2 * e + 1] * this._sy + this._ty),
        (e += s);
    return t;
  }
  readCentroid() {
    return g(this._current) ? this._computeCentroid() : this._current.centroid;
  }
  hasField(t) {
    return (
      t in this._current.attributes ||
      this.getFieldNames()
        .map((e) => e.toLowerCase())
        .includes(t.toLowerCase())
    );
  }
  getFieldNames() {
    return Object.keys(this._current.attributes);
  }
  _readAttribute(t, e) {
    const s = this._current.attributes[t];
    if (s !== void 0)
      return s != null && e && this._dateFields.has(t) ? new Date(s) : s;
    const r = this.readAttributes(),
      i = t == null ? void 0 : t.toLocaleLowerCase().trim();
    for (const a in r)
      if (a.toLocaleLowerCase().trim() === i) {
        const n = this._current.attributes[a];
        return n != null && e && this._dateFields.has(a) ? new Date(n) : n;
      }
  }
  copyInto(t) {
    super.copyInto(t),
      (t._featureIndex = this._featureIndex),
      (t._transform = this._transform),
      (t._dateFields = this._dateFields);
  }
  _readAttributes() {
    return this._current.attributes;
  }
}
const x = X.getLogger("esri.views.layers.2d.features.support.AttributeStore"),
  z = pt(mt, x),
  T = {
    sharedArrayBuffer: l("esri-shared-array-buffer"),
    atomics: l("esri-atomics"),
  };
function E(_, t) {
  return (e) => t(_(e));
}
class Dt {
  constructor(t, e, s, r) {
    (this.size = 0),
      (this.texelSize = 4),
      (this.dirtyStart = 0),
      (this.dirtyEnd = 0);
    const { pixelType: i, layout: a, textureOnly: n } = r;
    (this.textureOnly = n || !1),
      (this.pixelType = i),
      (this._ctype = e),
      (this.layout = a),
      this._resetRange(),
      (this._shared = t),
      (this.size = s),
      n || (this.data = this._initData(i, s, t, e));
  }
  get buffer() {
    return st(this.data, (t) => t.buffer);
  }
  unsetComponentAllTexels(t, e) {
    const s = f(this.data);
    for (let r = 0; r < this.size * this.size; r++)
      s[r * this.texelSize + t] &= ~e;
    (this.dirtyStart = 0), (this.dirtyEnd = this.size * this.size - 1);
  }
  setComponentAllTexels(t, e) {
    const s = f(this.data);
    for (let r = 0; r < this.size * this.size; r++)
      s[r * this.texelSize + t] |= 255 & e;
    (this.dirtyStart = 0), (this.dirtyEnd = this.size * this.size - 1);
  }
  setComponent(t, e, s) {
    const r = f(this.data);
    for (const i of s)
      (r[i * this.texelSize + t] |= e),
        (this.dirtyStart = Math.min(this.dirtyStart, i)),
        (this.dirtyEnd = Math.max(this.dirtyEnd, i));
  }
  setComponentTexel(t, e, s) {
    (f(this.data)[s * this.texelSize + t] |= e),
      (this.dirtyStart = Math.min(this.dirtyStart, s)),
      (this.dirtyEnd = Math.max(this.dirtyEnd, s));
  }
  unsetComponentTexel(t, e, s) {
    (f(this.data)[s * this.texelSize + t] &= ~e),
      (this.dirtyStart = Math.min(this.dirtyStart, s)),
      (this.dirtyEnd = Math.max(this.dirtyEnd, s));
  }
  getData(t, e) {
    const s = y(t);
    return f(this.data)[s * this.texelSize + e];
  }
  setData(t, e, s) {
    const r = y(t),
      i = 1 << e;
    this.layout & i
      ? d(this.data) ||
        ((this.data[r * this.texelSize + e] = s),
        (this.dirtyStart = Math.min(this.dirtyStart, r)),
        (this.dirtyEnd = Math.max(this.dirtyEnd, r)))
      : x.error(
          "mapview-attributes-store",
          "Tried to set a value for a texel's readonly component"
        );
  }
  lock() {
    this.pixelType === p.UNSIGNED_BYTE &&
      this._shared &&
      T.atomics &&
      this._ctype !== "local" &&
      Atomics.store(this.data, 0, 1);
  }
  unlock() {
    this.pixelType === p.UNSIGNED_BYTE &&
      this._shared &&
      T.atomics &&
      this._ctype !== "local" &&
      Atomics.store(this.data, 0, 0);
  }
  expand(t) {
    if (((this.size = t), !this.textureOnly)) {
      const e = this._initData(this.pixelType, t, this._shared, this._ctype),
        s = f(this.data);
      e.set(s), (this.data = e);
    }
  }
  toMessage() {
    const t = this.dirtyStart,
      e = this.dirtyEnd,
      s = this.texelSize;
    if (t > e) return null;
    this._resetRange();
    const r = !(this._shared || this._ctype === "local"),
      i = this.pixelType,
      a = this.layout,
      n = f(this.data);
    return {
      start: t,
      end: e,
      data: (r && n.slice(t * s, (e + 1) * s)) || null,
      pixelType: i,
      layout: a,
    };
  }
  _initData(t, e, s, r) {
    const i = s && r !== "local" ? SharedArrayBuffer : ArrayBuffer,
      a = xt(t),
      n = new a(new i(e * e * 4 * a.BYTES_PER_ELEMENT));
    for (let o = 0; o < n.length; o += 4) n[o + 1] = 255;
    return n;
  }
  _resetRange() {
    (this.dirtyStart = 2147483647), (this.dirtyEnd = 0);
  }
}
class Ot {
  constructor(t, e, s = () => {}) {
    (this._client = t),
      (this.config = e),
      (this._notifyChange = s),
      (this._blocks = []),
      (this._filters = new Array(ot)),
      (this._attributeComputeInfo = null),
      (this._targetType = 0),
      (this._abortController = new AbortController()),
      (this._hasScaleExpr = !1),
      (this._size = 32),
      (this._nextUpdate = null),
      (this._currUpdate = null),
      (this._idsToHighlight = new Set());
    const r = e.supportsTextureFloat ? p.FLOAT : p.UNSIGNED_BYTE;
    z(
      `Creating AttributeStore ${
        T.sharedArrayBuffer ? "with" : "without"
      } shared memory`
    ),
      (this._blockDescriptors = [
        { pixelType: p.UNSIGNED_BYTE, layout: 1 },
        { pixelType: p.UNSIGNED_BYTE, layout: 15, textureOnly: !0 },
        { pixelType: p.UNSIGNED_BYTE, layout: 15, textureOnly: !0 },
        { pixelType: r, layout: 15 },
        { pixelType: r, layout: 15 },
        { pixelType: r, layout: 15 },
        { pixelType: r, layout: 15 },
      ]),
      (this._blocks = this._blockDescriptors.map(() => null));
  }
  destroy() {
    this._abortController.abort();
  }
  get hasScaleExpr() {
    return this._hasScaleExpr;
  }
  get _signal() {
    return this._abortController.signal;
  }
  get hasHighlight() {
    return this._idsToHighlight.size > 0;
  }
  isUpdating() {
    return !!this._currUpdate || !!this._nextUpdate;
  }
  update(t, e) {
    this.config = e;
    const s = e.schema.processors[0].storage,
      r = $(this._schema, s);
    if (
      ((t.targets.feature || t.targets.aggregate) && (t.storage.data = !0),
      r &&
        (l("esri-2d-update-debug"),
        (t.storage.data = !0),
        (this._schema = s),
        (this._attributeComputeInfo = null),
        !d(s)))
    ) {
      switch (s.target) {
        case "feature":
          this._targetType = _t;
          break;
        case "aggregate":
          this._targetType = lt;
      }
      if (s.type === "subtype") {
        this._attributeComputeInfo = {
          isSubtype: !0,
          subtypeField: s.subtypeField,
          map: new Map(),
        };
        for (const i in s.mapping) {
          const a = s.mapping[i];
          if (c(a) && c(a.vvMapping))
            for (const n of a.vvMapping)
              this._bindAttribute(n, parseInt(i, 10));
        }
      } else {
        if (
          ((this._attributeComputeInfo = { isSubtype: !1, map: new Map() }),
          c(s.vvMapping))
        )
          for (const i of s.vvMapping) this._bindAttribute(i);
        if (c(s.attributeMapping))
          for (const i of s.attributeMapping) this._bindAttribute(i);
      }
    }
  }
  onTileData(t, e) {
    if (d(e.addOrUpdate)) return;
    const s = e.addOrUpdate.getCursor();
    for (; s.next(); ) {
      const r = s.getDisplayId();
      this.setAttributeData(r, s);
    }
  }
  async setHighlight(t, e) {
    const s = this._getBlock(0),
      r = e.map((i) => y(i));
    s.lock(),
      s.unsetComponentAllTexels(0, 1),
      s.setComponent(0, 1, r),
      s.unlock(),
      this._idsToHighlight.clear();
    for (const i of t) this._idsToHighlight.add(i);
    await this.sendUpdates();
  }
  async updateFilters(t, e, s) {
    const { service: r, spatialReference: i } = s,
      { filters: a } = e,
      n = a.map((o, u) => this._updateFilter(o, u, r, i));
    (await Promise.all(n)).some((o) => o) &&
      ((t.storage.filters = !0), l("esri-2d-update-debug"));
  }
  setData(t, e, s, r) {
    const i = y(t);
    this._ensureSizeForTexel(i), this._getBlock(e).setData(t, s, r);
  }
  getData(t, e, s) {
    return this._getBlock(e).getData(t, s);
  }
  getHighlightFlag(t) {
    return this._idsToHighlight.has(t) ? ht : 0;
  }
  unsetAttributeData(t) {
    const e = y(t);
    this._getBlock(0).setData(e, 0, 0);
  }
  setAttributeData(t, e) {
    const s = y(t);
    if (
      (this._ensureSizeForTexel(s),
      this._getBlock(0).setData(s, 0, this.getFilterFlags(e)),
      this._targetType !== ft(t))
    )
      return;
    const r = this._attributeComputeInfo,
      i = this.config.supportsTextureFloat ? 1 : 2;
    let a = null;
    r &&
      ((a = r.isSubtype ? r.map.get(e.readAttribute(r.subtypeField)) : r.map),
      a &&
        a.size &&
        a.forEach((n, o) => {
          const u = (o * i) % 4,
            A = Math.floor((o * i) / 4),
            I = this._getBlock(A + ut),
            w = n(e);
          if (this.config.supportsTextureFloat) I.setData(s, u, w);
          else if (w === v) I.setData(s, u, 255), I.setData(s, u + 1, 255);
          else {
            const k = rt(Math.round(w), -32767, 32766) + 32768,
              j = 255 & k,
              L = (65280 & k) >> 8;
            I.setData(s, u, j), I.setData(s, u + 1, L);
          }
        }));
  }
  sendUpdates() {
    if ((l("esri-2d-update-debug"), this._notifyChange(), this._nextUpdate))
      return this._nextUpdate.promise;
    if (this._currUpdate)
      return (this._nextUpdate = W()), this._nextUpdate.promise;
    const t = {
      blocks: this._blocks.map((e) => (c(e) ? e.toMessage() : null)),
    };
    return (
      (this._currUpdate = this._createResources()
        .then(() => {
          const e = () => {
            if (((this._currUpdate = null), this._nextUpdate)) {
              const r = this._nextUpdate;
              (this._nextUpdate = null),
                this.sendUpdates().then(() => r.resolve());
            } else l("esri-2d-update-debug");
            this._notifyChange();
          };
          l("esri-2d-update-debug");
          const s = this._client.update(t, this._signal).then(e).catch(e);
          return this._client.render(this._signal), s;
        })
        .catch((e) => {
          if (U(e))
            return (
              (this._createResourcesPromise = null), this._createResources()
            );
          this._notifyChange(),
            x.error(
              new D(
                "mapview-attribute-store",
                "Encountered an error during client update",
                e
              )
            );
        })),
      this._currUpdate
    );
  }
  _ensureSizeForTexel(t) {
    for (; t >= this._size * this._size; ) if (this._expand()) return;
  }
  _bindAttribute(t, e) {
    let s;
    if (t.fieldIndex != null)
      t.normalizationField &&
        x.warn(
          "mapview-arcade",
          "Ignoring normalizationField specified with an arcade expression which is not supported."
        ),
        (s = (n) => n.getComputedNumericAtIndex(t.fieldIndex));
    else {
      if (!t.field) return;
      s = (function () {
        const { normalizationField: n } = t;
        return n
          ? (o) => {
              const u = o.readAttribute(n);
              return u ? o.readAttribute(t.field) / u : null;
            }
          : (o) => o.readAttribute(t.field);
      })();
    }
    const { valueRepresentation: r } = t;
    r && (s = E(s, (n) => yt(n, r)));
    const i = (n) =>
        n === null || isNaN(n) || n === 1 / 0 || n === -1 / 0 ? v : n,
      a = this._attributeComputeInfo;
    if (a.isSubtype) {
      const n = a.map.get(e) ?? new Map();
      n.set(t.binding, E(s, i)), a.map.set(e, n);
    } else a.map.set(t.binding, E(s, i));
  }
  _createResources() {
    if (c(this._createResourcesPromise)) return this._createResourcesPromise;
    this._getBlock(dt), this._getBlock(ct), z("Initializing AttributeStore");
    const t = {
        shared: T.sharedArrayBuffer && this._client.type !== "local",
        size: this._size,
        blocks: K(this._blocks, (s) => ({
          textureOnly: s.textureOnly,
          buffer: s.buffer,
          pixelType: s.pixelType,
        })),
      },
      e = this._client.initialize(t, this._signal).catch((s) => {
        U(s)
          ? (this._createResourcesPromise = null)
          : x.error(
              new D(
                "mapview-attribute-store",
                "Encountered an error during client initialization",
                s
              )
            );
      });
    return (
      (this._createResourcesPromise = e),
      e.then(() =>
        d(this._createResourcesPromise) ? this._createResources() : void 0
      ),
      e
    );
  }
  _getBlock(t) {
    const e = this._blocks[t];
    if (c(e)) return e;
    z(`Initializing AttributeBlock at index ${t}`);
    const s = T.sharedArrayBuffer,
      r = this._client.type,
      i = new Dt(s, r, this._size, this._blockDescriptors[t]);
    return (this._blocks[t] = i), (this._createResourcesPromise = null), i;
  }
  _expand() {
    if (this._size < this.config.maxTextureSize) {
      const t = (this._size <<= 1);
      return (
        z("Expanding block size to", t, this._blocks),
        tt(this._blocks, (e) => e.expand(t)),
        (this._createResourcesPromise = null),
        (this._size = t),
        0
      );
    }
    return (
      x.error(
        new D(
          "mapview-limitations",
          "Maximum number of onscreen features exceeded."
        )
      ),
      -1
    );
  }
  async _updateFilter(t, e, s, r) {
    const i = this._filters[e],
      a = c(i) && i.hash;
    if ((!i && !t) || a === JSON.stringify(t)) return !1;
    if (d(t)) {
      if (!i) return !1;
      const o = 1 << (e + 1),
        u = this._getBlock(0);
      return (
        (this._filters[e] = null),
        u.setComponentAllTexels(0, o),
        this.sendUpdates(),
        !0
      );
    }
    return await (await this._getFilter(e, s)).update(t, r), !0;
  }
  async _getFilter(t, e) {
    const s = this._filters[t];
    if (c(s)) return s;
    const { default: r } = await at(
        () => import("./FeatureFilter.adb5a270.js"),
        [
          "js/FeatureFilter.adb5a270.js",
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
          "js/timeSupport.04391410.js",
          "js/projectionSupport.4aeb802f.js",
          "js/json.495fc412.js",
          "js/utils.e3aed7db.js",
          "js/FeatureStore2D.2100fe9c.js",
          "js/CircularArray.6cd6ba2b.js",
          "js/arcadeTimeUtils.e79f2f70.js",
          "js/executionError.fb3f283a.js",
          "js/centroid.e6a939c1.js",
          "js/definitions.ce677f69.js",
          "js/visualVariablesUtils.1183f3fb.js",
          "js/color.4c5303e9.js",
          "js/enums.13513a14.js",
          "js/enums.64ab819c.js",
          "js/VertexElementDescriptor.2925c6af.js",
          "js/visualVariablesUtils.de38be9a.js",
        ]
      ),
      i = new r({
        geometryType: e.geometryType,
        hasM: !1,
        hasZ: !1,
        timeInfo: e.timeInfo,
        fieldsIndex: new et(e.fields),
      });
    return (this._filters[t] = i), i;
  }
  isVisible(t) {
    return !!(2 & this._getBlock(0).getData(t, 0));
  }
  getFilterFlags(t) {
    let e = 0;
    const s = gt(t.getDisplayId());
    for (let i = 0; i < this._filters.length; i++) {
      const a = !!(s & (1 << i)),
        n = this._filters[i];
      e |= (!a || d(n) || n.check(t) ? 1 : 0) << i;
    }
    let r = 0;
    if (this._idsToHighlight.size) {
      const i = t.getObjectId();
      r = this.getHighlightFlag(i);
    }
    return (e << 1) | r;
  }
}
function C(_, t, e) {
  if (!(_.length > t)) for (; _.length <= t; ) _.push(e);
}
class Bt {
  constructor() {
    (this._numerics = []),
      (this._strings = []),
      (this._idGenerator = new (class {
        constructor() {
          (this._freeIds = []), (this._idCounter = 1);
        }
        createId(t = !1) {
          return G(this._getFreeId(), t);
        }
        releaseId(t) {
          this._freeIds.push(t);
        }
        _getFreeId() {
          return this._freeIds.length ? this._freeIds.pop() : this._idCounter++;
        }
      })()),
      (this._allocatedSize = 256),
      (this._bitsets = []),
      (this._instanceIds = []),
      (this._bounds = []);
  }
  createBitset() {
    const t = this._bitsets.length;
    return this._bitsets.push(b.create(this._allocatedSize, h)), t + 1;
  }
  getBitset(t) {
    return this._bitsets[t - 1];
  }
  _expand() {
    this._allocatedSize <<= 1;
    for (const t of this._bitsets) t.resize(this._allocatedSize);
  }
  _ensureNumeric(t, e) {
    this._numerics[t] || (this._numerics[t] = []), C(this._numerics[t], e, 0);
  }
  _ensureInstanceId(t) {
    C(this._instanceIds, t, 0);
  }
  _ensureString(t, e) {
    this._strings[t] || (this._strings[t] = []), C(this._strings[t], e, null);
  }
  createDisplayId(t = !1) {
    const e = this._idGenerator.createId();
    return e > this._allocatedSize && this._expand(), G(e, t);
  }
  releaseDisplayId(t) {
    for (const e of this._bitsets) e.unset(t);
    return this._idGenerator.releaseId(t & h);
  }
  getComputedNumeric(t, e) {
    return this.getComputedNumericAtIndex(t & h, 0);
  }
  setComputedNumeric(t, e, s) {
    return this.setComputedNumericAtIndex(t & h, s, 0);
  }
  getComputedString(t, e) {
    return this.getComputedStringAtIndex(t & h, 0);
  }
  setComputedString(t, e, s) {
    return this.setComputedStringAtIndex(t & h, 0, s);
  }
  getComputedNumericAtIndex(t, e) {
    const s = t & h;
    return this._ensureNumeric(e, s), this._numerics[e][s];
  }
  setComputedNumericAtIndex(t, e, s) {
    const r = t & h;
    this._ensureNumeric(e, r), (this._numerics[e][r] = s);
  }
  getInstanceId(t) {
    const e = t & h;
    return this._ensureInstanceId(e), this._instanceIds[e];
  }
  setInstanceId(t, e) {
    const s = t & h;
    this._ensureInstanceId(s), (this._instanceIds[s] = e);
  }
  getComputedStringAtIndex(t, e) {
    const s = t & h;
    return this._ensureString(e, s), this._strings[e][s];
  }
  setComputedStringAtIndex(t, e, s) {
    const r = t & h;
    this._ensureString(e, r), (this._strings[e][r] = s);
  }
  getXMin(t) {
    return this._bounds[4 * (t & h)];
  }
  getYMin(t) {
    return this._bounds[4 * (t & h) + 1];
  }
  getXMax(t) {
    return this._bounds[4 * (t & h) + 2];
  }
  getYMax(t) {
    return this._bounds[4 * (t & h) + 3];
  }
  setBounds(t, e) {
    const s = e.readHydratedGeometry();
    if (!s || !s.coords.length) return !1;
    let r = 1 / 0,
      i = 1 / 0,
      a = -1 / 0,
      n = -1 / 0;
    s.forEachVertex((u, A) => {
      (r = Math.min(r, u)),
        (i = Math.min(i, A)),
        (a = Math.max(a, u)),
        (n = Math.max(n, A));
    });
    const o = t & h;
    return (
      C(this._bounds, 4 * o + 4, 0),
      (this._bounds[4 * o] = r),
      (this._bounds[4 * o + 1] = i),
      (this._bounds[4 * o + 2] = a),
      (this._bounds[4 * o + 3] = n),
      !0
    );
  }
}
export { Ot as M, O as b, m as c, Bt as r, b as t };
