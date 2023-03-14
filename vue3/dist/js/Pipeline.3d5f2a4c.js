import {
  gv as It,
  s as _e,
  gw as vt,
  eL as qe,
  t as T,
  cL as Ee,
  bx as B,
  r as _,
  cS as bt,
  a0 as Qe,
  aV as xt,
  Q as he,
  w as E,
  gx as St,
  q as oe,
  gb as Be,
  cO as wt,
  gy as et,
  gz as Ft,
  ap as tt,
  b0 as Ae,
  D as Tt,
  dA as de,
  cG as le,
  dj as Ct,
  el as ge,
  gA as Mt,
  av as kt,
  gB as qt,
  L as Et,
  aY as Fe,
  f as j,
  W as Re,
  j as ye,
  U as At,
  aU as Te,
  bT as Rt,
  bS as De,
  aO as st,
  I as Ot,
  ae as A,
  af as G,
  ag as Oe,
  gk as Ut,
  bv as Ce,
  gC as rt,
  gD as it,
  by as Lt,
  g6 as Pt,
  cZ as at,
  aH as ee,
  cX as Ue,
  gE as Gt,
  e3 as nt,
  eO as ot,
  aN as se,
  gF as K,
  bn as ht,
  ar as ut,
  bm as dt,
  gG as Qt,
  ba as Bt,
  G as Me,
  cV as Dt,
  dS as ue,
  gH as jt,
  as as zt,
  ac as Nt,
  a9 as Vt,
  aD as Xt,
  gI as Yt,
} from "./index.8fd7165c.js";
import { q as Ht } from "./Table.e9c997d5.js";
import { e as je } from "./QueryEngine.191035fe.js";
import {
  r as Zt,
  c as ct,
  p as lt,
  g as Jt,
} from "./FeatureStore2D.2100fe9c.js";
import { s as gt } from "./quantizationUtils.1e9e702d.js";
import { q as ze } from "./ogcFeatureUtils.da37da08.js";
import {
  b as Ne,
  c as D,
  r as Wt,
  M as $t,
} from "./ComputedAttributeStorage.396dbaf7.js";
import { s as pe } from "./CircularArray.6cd6ba2b.js";
import { createConnection as Kt } from "./createConnection.5ac152ac.js";
import { g as ne, f as pt } from "./projectionSupport.4aeb802f.js";
import { s as es, a as Ve } from "./visualVariablesUtils.1183f3fb.js";
import { o as z } from "./definitions.ce677f69.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./vue-i18n.67a42238.js";
import "./QueryEngineResult.c4edbbc1.js";
import "./WhereClause.ae196341.js";
import "./executionError.fb3f283a.js";
import "./utils.7e94e38c.js";
import "./generateRendererUtils.855c90be.js";
import "./utils.e3aed7db.js";
import "./QueryEngineCapabilities.42e44ded.js";
import "./timeSupport.04391410.js";
import "./geojson.96c8477e.js";
import "./clientSideDefaults.4b2f5b2f.js";
import "./arcadeTimeUtils.e79f2f70.js";
import "./centroid.e6a939c1.js";
import "./color.4c5303e9.js";
import "./enums.13513a14.js";
import "./enums.64ab819c.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./json.495fc412.js";
import "./visualVariablesUtils.de38be9a.js";
const Ie = 268435455;
let ts = class {
  constructor() {
    (this.fieldMap = new Map()),
      (this.fields = []),
      (this.hasFeatures = !1),
      (this.exceededTransferLimit = !1),
      (this.fieldCount = 0),
      (this.featureCount = 0),
      (this.objectIdFieldIndex = 0),
      (this.vertexCount = 0),
      (this.offsets = { attributes: [], geometry: [] }),
      (this.centroid = []);
  }
  hasField(t) {
    return this.fieldMap.has(t);
  }
  isDateField(t) {
    var e;
    return (
      (t != null && ((e = this.fieldMap.get(t)) == null ? void 0 : e.isDate)) ??
      !1
    );
  }
  getFieldIndex(t) {
    var e;
    return t != null
      ? (e = this.fieldMap.get(t)) == null
        ? void 0
        : e.index
      : void 0;
  }
};
function ss(t) {
  const e = t.asUnsafe(),
    s = e.getLength(),
    r = e.pos() + s,
    i = { name: "", isDate: !1 };
  for (; e.pos() < r && e.next(); )
    switch (e.tag()) {
      case 1:
        i.name = e.getString();
        break;
      case 2:
        vt(e.getEnum()) === "esriFieldTypeDate" && (i.isDate = !0);
        break;
      default:
        e.skip();
    }
  return i;
}
function rs(t) {
  return t.toLowerCase().trim();
}
function is(t, e, s = !1) {
  const r = t.asUnsafe(),
    i = r.pos(),
    a = new ts();
  let n = 0,
    o = 0,
    h = null,
    u = null,
    d = null,
    c = !1;
  for (; r.next(); )
    switch (r.tag()) {
      case 1:
        h = r.getString();
        break;
      case 3:
        u = r.getString();
        break;
      case 12:
        d = r.processMessage(It);
        break;
      case 9:
        if (
          ((a.exceededTransferLimit = r.getBool()), a.exceededTransferLimit)
        ) {
          (a.offsets.geometry = s
            ? new Float64Array(8e3)
            : new Int32Array(8e3)),
            (a.centroid = s ? new Float64Array(16e3) : new Int32Array(16e3));
          for (let p = 0; p < a.centroid.length; p++) a.centroid[p] = Ie;
        }
        break;
      case 13: {
        const p = ss(t),
          g = p.name,
          m = rs(p.name),
          f = { fieldName: g, index: n++, isDate: p.isDate };
        a.fields.push(f), a.fieldMap.set(p.name, f), a.fieldMap.set(m, f);
        break;
      }
      case 15: {
        const p = r.getLength(),
          g = r.pos() + p;
        if (!a.exceededTransferLimit) {
          const f = a.offsets.geometry,
            I = a.centroid;
          f.push(0), I.push(Ie), I.push(Ie);
        }
        !c &&
          a.exceededTransferLimit &&
          ((c = !0),
          (a.offsets.attributes = s
            ? new Float64Array(8e3 * n)
            : new Uint32Array(8e3 * n)));
        let m = o * n;
        for (; r.pos() < g && r.next(); )
          switch (r.tag()) {
            case 1: {
              c
                ? (a.offsets.attributes[m++] = r.pos())
                : a.offsets.attributes.push(r.pos());
              const f = r.getLength();
              r.skipLen(f);
              break;
            }
            case 2:
              if (e) {
                const f = r.getLength(),
                  I = r.pos() + f;
                for (; r.pos() < I && r.next(); )
                  switch (r.tag()) {
                    case 3: {
                      r.getUInt32();
                      const v = r.getSInt64(),
                        y = r.getSInt64();
                      (a.centroid[2 * o] = v), (a.centroid[2 * o + 1] = y);
                      break;
                    }
                    default:
                      r.skip();
                  }
              } else {
                a.offsets.geometry[o] = r.pos();
                const f = r.getLength();
                (a.vertexCount += f), r.skipLen(f);
              }
              break;
            case 4: {
              const f = r.getLength(),
                I = r.pos() + f;
              for (; r.pos() < I && r.next(); )
                switch (r.tag()) {
                  case 3: {
                    r.getUInt32();
                    const v = r.getSInt64(),
                      y = r.getSInt64();
                    (a.centroid[2 * o] = v), (a.centroid[2 * o + 1] = y);
                    break;
                  }
                  default:
                    r.skip();
                }
              break;
            }
            default:
              r.skip();
          }
        o++, (a.hasFeatures = !0);
        break;
      }
      default:
        r.skip();
    }
  const l = h || u;
  if (!l) throw new _e("FeatureSet has no objectId or globalId field name");
  return (
    (a.featureCount = o),
    (a.fieldCount = n),
    (a.objectIdFieldIndex = a.getFieldIndex(l)),
    (a.transform = d),
    (a.displayIds = new Uint32Array(a.featureCount)),
    (a.groupIds = new Uint16Array(a.featureCount)),
    r.move(i),
    a
  );
}
const ve = 268435455,
  Xe = 128e3,
  re = {
    small: { delta: new Int32Array(128), decoded: new Int32Array(128) },
    large: { delta: new Int32Array(Xe), decoded: new Int32Array(Xe) },
  };
function Ye(t) {
  return t <= re.small.delta.length
    ? re.small
    : (t <= re.large.delta.length ||
        ((re.large.delta = new Int32Array(Math.round(1.25 * t))),
        (re.large.decoded = new Int32Array(Math.round(1.25 * t)))),
      re.large);
}
function He(t) {
  return t.toLowerCase().trim();
}
function as(t) {
  for (; t.next(); ) {
    if (t.tag() === 1) return t.getMessage();
    t.skip();
  }
  return null;
}
function ns(t, e, s, r, i, a) {
  return 0.5 * Math.abs(t * r + s * a + i * e - t * a - s * e - i * r);
}
function be(t, e, s, r) {
  return t * r - s * e === 0 && t * s + e * r > 0;
}
let os = class ke extends Ne {
    static fromBuffer(e, s, r = !1) {
      const i = s.geometryType,
        a = (function (h) {
          try {
            const d = new xt(new Uint8Array(h), new DataView(h));
            for (; d.next(); ) {
              if (d.tag() === 2) return as(d.getMessage());
              d.skip();
            }
          } catch (u) {
            const d = new _e(
              "query:parsing-pbf",
              "Error while parsing FeatureSet PBF payload",
              {
                error: u,
              }
            );
            he.getLogger(
              "esri.view.2d.layers.features.support.FeatureSetReaderPBF"
            ).error(d);
          }
          return null;
        })(e),
        n = is(a, i === "esriGeometryPoint", r),
        o = Ne.createInstance();
      return new ke(o, a, n, s);
    }
    constructor(e, s, r, i) {
      super(e, i),
        (this._hasNext = !1),
        (this._isPoints = !1),
        (this._featureIndex = -1),
        (this._featureOffset = 0),
        (this._cache = {
          area: 0,
          unquantGeometry: void 0,
          geometry: void 0,
          centroid: void 0,
          legacyFeature: void 0,
          optFeature: void 0,
        }),
        (this._geometryType = i.geometryType),
        (this._reader = s),
        (this._header = r),
        (this._hasNext = r.hasFeatures),
        (this._isPoints = i.geometryType === "esriGeometryPoint");
    }
    get geometryType() {
      return this._geometryType;
    }
    get _size() {
      return this._header.featureCount;
    }
    get hasZ() {
      return !1;
    }
    get hasM() {
      return !1;
    }
    get stride() {
      return 2 + (this.hasZ ? 1 : 0) + (this.hasM ? 1 : 0);
    }
    get hasFeatures() {
      return this._header.hasFeatures;
    }
    get hasNext() {
      return this._hasNext;
    }
    get exceededTransferLimit() {
      return this._header.exceededTransferLimit;
    }
    hasField(e) {
      return this._header.hasField(e) || this._header.hasField(He(e));
    }
    getFieldNames() {
      return this._header.fields.map((e) => e.fieldName);
    }
    getSize() {
      return this._size;
    }
    getQuantizationTransform() {
      return this._header.transform;
    }
    getCursor() {
      return this.copy();
    }
    getIndex() {
      return this._featureIndex;
    }
    setIndex(e) {
      (this._cache.area = 0),
        (this._cache.unquantGeometry = void 0),
        (this._cache.geometry = void 0),
        (this._cache.centroid = void 0),
        (this._cache.legacyFeature = void 0),
        (this._cache.optFeature = void 0),
        (this._featureIndex = e);
    }
    getAttributeHash() {
      let e = "";
      return (
        this._header.fields.forEach(({ index: s }) => {
          e += this._readAttributeAtIndex(s) + ".";
        }),
        e
      );
    }
    getObjectId() {
      return this._readAttributeAtIndex(this._header.objectIdFieldIndex);
    }
    getDisplayId() {
      return this._header.displayIds[this._featureIndex];
    }
    setDisplayId(e) {
      this._header.displayIds[this._featureIndex] = e;
    }
    getGroupId() {
      return this._header.groupIds[this._featureIndex];
    }
    setGroupId(e) {
      this._header.groupIds[this._featureIndex] = e;
    }
    readLegacyFeature() {
      if (this._cache.legacyFeature === void 0) {
        const e = this.readCentroid(),
          s = {
            attributes: this.readAttributes(),
            geometry: this._isPoints
              ? this.readLegacyPointGeometry()
              : this.readLegacyGeometry(),
            centroid: (e && { x: e.coords[0], y: e.coords[1] }) ?? null,
          };
        return (this._cache.legacyFeature = s), s;
      }
      return this._cache.legacyFeature;
    }
    readOptimizedFeature() {
      if (this._cache.optFeature === void 0) {
        const e = new qe(
          this.readGeometry(),
          this.readAttributes(),
          this.readCentroid()
        );
        return (
          (e.objectId = this.getObjectId()),
          (e.displayId = this.getDisplayId()),
          (this._cache.optFeature = e),
          e
        );
      }
      return this._cache.optFeature;
    }
    getXHydrated() {
      const e = this._header.centroid[2 * this._featureIndex],
        s = this.getQuantizationTransform();
      return T(s) ? e : e * s.scale[0] + s.translate[0];
    }
    getYHydrated() {
      const e = this._header.centroid[2 * this._featureIndex + 1],
        s = this.getQuantizationTransform();
      return T(s) ? e : s.translate[1] - e * s.scale[1];
    }
    getX() {
      return (
        this._header.centroid[2 * this._featureIndex] * this._sx + this._tx
      );
    }
    getY() {
      return (
        this._header.centroid[2 * this._featureIndex + 1] * this._sy + this._ty
      );
    }
    readLegacyPointGeometry() {
      return { x: this.getX(), y: this.getY() };
    }
    readLegacyGeometry(e) {
      const s = this.readGeometry(e);
      return Ee(s, this.geometryType, !1, !1);
    }
    readLegacyCentroid() {
      const e = this.readCentroid();
      if (!e) return null;
      const [s, r] = e.coords;
      return { x: s, y: r };
    }
    readGeometryArea() {
      return this._cache.area || this.readGeometry(!0), this._cache.area;
    }
    readUnquantizedGeometry(e = !1) {
      if (this._cache.unquantGeometry === void 0) {
        const s = this.readGeometry(e);
        if (!s) return (this._cache.unquantGeometry = void 0), null;
        const r = Ye(s.coords.length).decoded,
          i = s.clone(r),
          a = i.coords;
        let n = 0;
        for (const o of i.lengths) {
          for (let h = 1; h < o; h++) {
            const u = 2 * (n + h),
              d = 2 * (n + h - 1);
            (a[u] += a[d]), (a[u + 1] += a[d + 1]);
          }
          n += o;
        }
        return (this._cache.unquantGeometry = i), i;
      }
      return this._cache.unquantGeometry;
    }
    readHydratedGeometry() {
      if (this._isPoints) {
        if (this._header.centroid[2 * this._featureIndex] === ve) return null;
        const i = this.getXHydrated(),
          a = this.getYHydrated();
        return new B([], [i, a]);
      }
      const e = this.readGeometry();
      if (!e) return null;
      const s = e.clone(),
        r = this.getQuantizationTransform();
      return _(r) && bt(s, s, this.hasZ, this.hasM, r), s;
    }
    readGeometry(e = !1) {
      if (this._cache.geometry === void 0) {
        let s = null;
        if (this._isPoints) {
          if (this._header.centroid[2 * this._featureIndex] === ve) return null;
          const r = this.getX(),
            i = this.getY();
          s = new B([], [r, i]);
        } else {
          const r = this._header.offsets.geometry[this._featureIndex],
            i = this._reader;
          if (r === 0) {
            const a = this._readServerCentroid();
            if (!a) return null;
            const [n, o] = a.coords;
            return this.createQuantizedExtrudedQuad(n, o);
          }
          i.move(r);
          try {
            if (
              ((s = e
                ? this._parseGeometryForDisplay(i)
                : this._parseGeometry(i)),
              s === null)
            ) {
              const a = this._readServerCentroid();
              if (!a) return null;
              const [n, o] = a.coords;
              return this.createQuantizedExtrudedQuad(n, o);
            }
          } catch {
            return null;
          }
        }
        return (this._cache.geometry = s), s;
      }
      return this._cache.geometry;
    }
    readCentroid() {
      if (this._cache.centroid === void 0) {
        let e;
        return (
          (e = this._computeCentroid()),
          e || (e = this._readServerCentroid()),
          (this._cache.centroid = e ?? void 0),
          e ?? null
        );
      }
      return this._cache.centroid;
    }
    copy() {
      const e = this._reader.clone(),
        s = new ke(this.instance, e, this._header, this.fullSchema());
      return this.copyInto(s), s;
    }
    next() {
      for (
        this._cache.area = 0,
          this._cache.unquantGeometry = void 0,
          this._cache.geometry = void 0,
          this._cache.centroid = void 0,
          this._cache.legacyFeature = void 0,
          this._cache.optFeature = void 0;
        ++this._featureIndex < this._size && !this._getExists();

      );
      return this._featureIndex < this._size;
    }
    _readAttribute(e, s) {
      const r = this._header.hasField(e) ? e : He(e),
        i = this._header.getFieldIndex(r);
      if (i == null) return;
      const a = this._readAttributeAtIndex(i);
      return s
        ? a == null
          ? a
          : this._header.isDateField(r)
          ? new Date(a)
          : a
        : a;
    }
    _readAttributes() {
      const e = {};
      return (
        this._header.fields.forEach(({ fieldName: s, index: r }) => {
          e[s] = this._readAttributeAtIndex(r);
        }),
        e
      );
    }
    copyInto(e) {
      super.copyInto(e),
        (e._featureIndex = this._featureIndex),
        (e._featureOffset = this._featureOffset),
        (e._hasNext = this._hasNext);
    }
    _readAttributeAtIndex(e) {
      const s =
          this._header.offsets.attributes[
            this._featureIndex * this._header.fieldCount + e
          ],
        r = this._reader;
      return (
        r.move(s),
        (function (i) {
          const a = i.getLength(),
            n = i.pos() + a;
          for (; i.pos() < n && i.next(); )
            switch (i.tag()) {
              case 1:
                return i.getString();
              case 2:
                return i.getFloat();
              case 3:
                return i.getDouble();
              case 4:
                return i.getSInt32();
              case 5:
                return i.getUInt32();
              case 6:
                return i.getInt64();
              case 7:
                return i.getUInt64();
              case 8:
                return i.getSInt64();
              case 9:
                return i.getBool();
              default:
                return i.skip(), null;
            }
          return null;
        })(r)
      );
    }
    _readServerCentroid() {
      const e = this._header.centroid[2 * this._featureIndex] + this._tx,
        s = this._header.centroid[2 * this._featureIndex + 1] + this._ty;
      return e === ve ? null : new B([], [e, s]);
    }
    _parseGeometry(e) {
      const s = e.asUnsafe(),
        r = s.getLength(),
        i = s.pos() + r,
        a = [],
        n = [];
      for (; s.pos() < i && s.next(); )
        switch (s.tag()) {
          case 2: {
            const o = s.getUInt32(),
              h = s.pos() + o;
            for (; s.pos() < h; ) n.push(s.getUInt32());
            break;
          }
          case 3: {
            const o = s.getUInt32(),
              h = s.pos() + o;
            for (
              a.push(s.getSInt32() + this._tx),
                a.push(s.getSInt32() + this._ty),
                this.hasZ && s.getSInt32(),
                this.hasM && s.getSInt32();
              s.pos() < h;

            )
              a.push(s.getSInt32()),
                a.push(s.getSInt32()),
                this.hasZ && s.getSInt32(),
                this.hasM && s.getSInt32();
            break;
          }
          default:
            s.skip();
        }
      return new B(n, a);
    }
    _parseGeometryForDisplay(e) {
      const s = e.asUnsafe(),
        r = s.getLength(),
        i = s.pos() + r,
        a = [],
        n = [];
      let o = 0,
        h = 0,
        u = null,
        d = 0;
      const c = this.geometryType === "esriGeometryPolygon";
      for (; s.pos() < i && s.next(); )
        switch (s.tag()) {
          case 2: {
            const l = s.getUInt32(),
              p = s.pos() + l;
            for (; s.pos() < p; ) {
              const g = s.getUInt32();
              a.push(g), (o += g);
            }
            u = Ye(2 * o).delta;
            break;
          }
          case 3: {
            s.getUInt32();
            const l = 2 + (this.hasZ ? 1 : 0) + (this.hasM ? 1 : 0);
            Qe(u);
            for (const p of a)
              if (h + l * p > u.length)
                for (let g = 0; g < p; g++)
                  s.getSInt32(),
                    s.getSInt32(),
                    this.hasZ && s.getSInt32(),
                    this.hasM && s.getSInt32();
              else if (c) {
                const g = this.getAreaSimplificationThreshold(
                  p,
                  this._header.vertexCount
                );
                let m = 2,
                  f = 1;
                const I = !1;
                let v = s.getSInt32(),
                  y = s.getSInt32();
                (u[h++] = v),
                  (u[h++] = y),
                  this.hasZ && s.getSInt32(),
                  this.hasM && s.getSInt32();
                let x = s.getSInt32(),
                  b = s.getSInt32();
                for (
                  this.hasZ && s.getSInt32(), this.hasM && s.getSInt32();
                  m < p;

                ) {
                  let S = s.getSInt32(),
                    w = s.getSInt32();
                  this.hasZ && s.getSInt32(), this.hasM && s.getSInt32();
                  const F = v + x,
                    q = y + b;
                  ns(v, y, F, q, F + S, q + w) >= g
                    ? ((d += -0.5 * (F - v) * (q + y)),
                      f > 1 && be(u[h - 2], u[h - 1], x, b)
                        ? ((u[h - 2] += x), (u[h - 1] += b))
                        : ((u[h++] = x), (u[h++] = b), f++),
                      (v = F),
                      (y = q))
                    : ((S += x), (w += b)),
                    (x = S),
                    (b = w),
                    m++;
                }
                f < 3 || I
                  ? (h -= 2 * f)
                  : ((d += -0.5 * (v + x - v) * (y + b + y)),
                    be(u[h - 2], u[h - 1], x, b)
                      ? ((u[h - 2] += x), (u[h - 1] += b), n.push(f))
                      : ((u[h++] = x), (u[h++] = b), n.push(++f)));
              } else {
                let g = 0,
                  m = s.getSInt32(),
                  f = s.getSInt32();
                this.hasZ && s.getSInt32(),
                  this.hasM && s.getSInt32(),
                  (u[h++] = m),
                  (u[h++] = f),
                  (g += 1);
                for (let I = 1; I < p; I++) {
                  const v = s.getSInt32(),
                    y = s.getSInt32(),
                    x = m + v,
                    b = f + y;
                  (d += -0.5 * (x - m) * (b + f)),
                    this.hasZ && s.getSInt32(),
                    this.hasM && s.getSInt32(),
                    I > 2 && be(u[h - 2], u[h - 1], v, y)
                      ? ((u[h - 2] += v), (u[h - 1] += y))
                      : ((u[h++] = v), (u[h++] = y), (g += 1)),
                    (m = x),
                    (f = b);
                }
                n.push(g);
              }
            break;
          }
          default:
            s.skip();
        }
      if (((this._cache.area = d), !n.length)) return null;
      if (this._tx || this._ty) {
        let l = 0;
        Qe(u);
        for (const p of n)
          (u[2 * l] += this._tx), (u[2 * l + 1] += this._ty), (l += p);
      }
      return new B(n, u);
    }
  },
  me = class {
    constructor(t) {
      this.service = t;
    }
    destroy() {}
  };
function hs(t) {
  const { capabilities: e } = t;
  return (function (s) {
    return (s == null ? void 0 : s.type) === "ogc-source";
  })(t.source)
    ? new ls(t)
    : (function (s) {
        return Array.isArray(s.source);
      })(t)
    ? new us(t)
    : e.query.supportsFormatPBF && E("featurelayer-pbf")
    ? new ds(t)
    : new cs(t);
}
let us = class extends me {
    constructor(t) {
      super(t),
        (this._portsOpen = (async function (e) {
          const s = new Ft();
          return await s.open(e, {}), s;
        })(t.source).then((e) => (this.client = e)));
    }
    destroy() {
      this.client.close(), (this.client = null);
    }
    async executeQuery(t, e) {
      await this._portsOpen;
      const s = await this.client.invoke("queryFeatures", t.toJSON(), e);
      return D.fromFeatureSet(s, this.service);
    }
  },
  ds = class extends me {
    async executeQuery(t, e) {
      const { data: s } = await St(this.service.source, t, e),
        r = !t.quantizationParameters;
      return os.fromBuffer(s, this.service, r);
    }
  },
  cs = class extends me {
    async executeQuery(t, e) {
      var h;
      const {
        source: s,
        capabilities: r,
        spatialReference: i,
        objectIdField: a,
        geometryType: n,
      } = this.service;
      if (_(t.quantizationParameters) && !r.query.supportsQuantization) {
        const u = t.clone(),
          d = gt(oe(u.quantizationParameters));
        u.quantizationParameters = null;
        const { data: c } = await Be(s, u, i, e),
          l = wt(c, a);
        return et(d, l), D.fromOptimizedFeatureSet(l, this.service);
      }
      const { data: o } = await Be(s, t, this.service.spatialReference, e);
      return (
        n === "esriGeometryPoint" &&
          (o.features =
            (h = o.features) == null
              ? void 0
              : h.filter((u) => {
                  if (_(u.geometry)) {
                    const d = u.geometry;
                    return Number.isFinite(d.x) && Number.isFinite(d.y);
                  }
                  return !0;
                })),
        D.fromFeatureSet(o, this.service)
      );
    }
  },
  ls = class extends me {
    async executeQuery(t, e) {
      const { capabilities: s } = this.service;
      if (t.quantizationParameters && !s.query.supportsQuantization) {
        const i = t.clone(),
          a = gt(oe(i.quantizationParameters));
        i.quantizationParameters = null;
        const n = await ze(this.service.source, t, e);
        return et(a, n), D.fromOptimizedFeatureSet(n, this.service);
      }
      const r = await ze(this.service.source, t, e);
      return D.fromOptimizedFeatureSet(r, this.service);
    }
  };
class R {
  constructor() {
    (this.version = 0),
      (this.source = !1),
      (this.targets = { feature: !1, aggregate: !1 }),
      (this.storage = { filters: !1, data: !1 }),
      (this.mesh = !1),
      (this.queryFilter = !1),
      (this.why = { mesh: [], source: [] });
  }
  static create(e) {
    const s = new R();
    for (const r in e) {
      const i = e[r];
      if (typeof i == "object")
        for (const a in i) {
          const n = i[a];
          s[r][a] = n;
        }
      s[r] = i;
    }
    return s;
  }
  static empty() {
    return R.create({});
  }
  static all() {
    return R.create({
      source: !0,
      targets: { feature: !0, aggregate: !0 },
      storage: { filters: !0, data: !0 },
      mesh: !0,
    });
  }
  unset(e) {
    (this.version = e.version),
      e.source && (this.source = !1),
      e.targets.feature && (this.targets.feature = !1),
      e.targets.aggregate && (this.targets.aggregate = !1),
      e.storage.filters && (this.storage.filters = !1),
      e.storage.data && (this.storage.data = !1),
      e.mesh && (this.mesh = !1),
      e.queryFilter && (this.queryFilter = !1);
  }
  any() {
    return (
      this.source ||
      this.mesh ||
      this.storage.filters ||
      this.storage.data ||
      this.targets.feature ||
      this.targets.aggregate ||
      this.queryFilter
    );
  }
  describe() {
    let e = 0,
      s = "";
    if (this.mesh) {
      (e += 20),
        (s += `-> (20) Mesh needs update
`);
      for (const r of this.why.mesh)
        s += `    + ${r}
`;
    }
    if (this.source) {
      (e += 10),
        (s += `-> (10) The source needs update
`);
      for (const r of this.why.source)
        s += `    + ${r}
`;
    }
    this.targets.feature &&
      ((e += 5),
      (s += `-> (5) Feature target parameters changed
`)),
      this.storage.filters &&
        ((e += 5),
        (s += `-> (5) Feature filter parameters changed
`)),
      this.targets.aggregate &&
        ((e += 4),
        (s += `-> (4) Aggregate target parameters changed
`)),
      this.storage.data &&
        ((e += 1), (s += "-> (1) Texture storage parameters changed"));
  }
  toJSON() {
    return {
      queryFilter: this.queryFilter,
      source: this.source,
      targets: this.targets,
      storage: this.storage,
      mesh: this.mesh,
    };
  }
}
let gs = class {
    constructor(t, e) {
      (this.requests = { done: [], stream: new pe(10) }),
        (this._edits = null),
        (this._abortController = new AbortController()),
        (this._version = 0),
        (this._done = !1),
        (this.didSend = !1),
        (this.tile = t),
        (this._version = e);
    }
    get signal() {
      return this._abortController.signal;
    }
    get options() {
      return { signal: this._abortController.signal };
    }
    get empty() {
      return !this.requests.done.length && T(this.edits);
    }
    get edits() {
      return this._edits;
    }
    get done() {
      return this._done;
    }
    end() {
      this._done = !0;
    }
    clear() {
      this.requests.done = [];
    }
    applyUpdate(t) {
      this.requests.done.forEach((e) => e.message.status.unset(t)),
        (this._version = t.version),
        _(this._edits) && this._edits.status.unset(t);
    }
    add(t) {
      (t.message.status = t.message.status ?? R.empty()),
        (t.message.status.version = this._version),
        E("esri-2d-update-debug"),
        t.message.end &&
          this.requests.done.forEach((e) => {
            _(e.message) && e.message.end && (e.message.end = !1);
          }),
        this.requests.done.push(t);
    }
    edit(t, e) {
      const s = t.getQuantizationTransform(),
        r = t.fullSchema(),
        i = Array.from(t.features()).filter(_),
        a = [...e, ...i.map((n) => n.objectId)];
      this.removeIds(a),
        this._invalidate(),
        T(this._edits)
          ? (this._edits = {
              type: "append",
              addOrUpdate: D.fromOptimizedFeatures(i, r, oe(s)),
              id: this.tile.id,
              status: R.empty(),
              end: !0,
            })
          : (this.requests.done.forEach((n) => (n.message.end = !1)),
            oe(this._edits.addOrUpdate).append(t.features()));
    }
    *readers() {
      for (const { message: t } of this.requests.done)
        _(t.addOrUpdate) && (yield t.addOrUpdate);
      _(this._edits) &&
        _(this._edits.addOrUpdate) &&
        (yield this._edits.addOrUpdate);
    }
    _invalidate() {
      for (const t of this.requests.done) t.message.status = R.empty();
      _(this._edits) && (this._edits.status = R.empty());
    }
    removeIds(t) {
      this._invalidate();
      for (const { message: e } of this.requests.done) {
        const s = e.addOrUpdate;
        _(s) &&
          (s.removeIds(t),
          s.isEmpty && (E("esri-2d-update-debug"), (e.addOrUpdate = null)));
      }
      _(this._edits) &&
        _(this._edits.addOrUpdate) &&
        this._edits.addOrUpdate.removeIds(t),
        (this.requests.done = this.requests.done.filter(
          (e) => e.message.addOrUpdate || e.message.end
        ));
    }
    abort() {
      this._abortController.abort();
    }
  },
  ft = class extends tt {
    constructor(t) {
      super(),
        (this.events = new Ae()),
        (this._resolver = Tt()),
        (this._didEdit = !1),
        (this._subscriptions = new Map()),
        (this._outSR = t.outSR),
        (this._serviceInfo = t.serviceInfo),
        (this._onTileUpdateMessage = t.onMessage);
    }
    async _onMessage(t) {
      const e = this._subscriptions.get(t.id);
      if (!e) return;
      const s = { ...t, remove: t.remove ?? [], status: t.status ?? R.empty() };
      return de(this._onTileUpdateMessage(s, e.options));
    }
    update(t, e) {
      var o;
      const s = e.fields.length;
      (e.outFields = (function (h, u) {
        const d = new Set();
        return (
          h && h.forEach((c) => d.add(c)),
          u && u.forEach((c) => d.add(c)),
          d.has("*") ? ["*"] : Array.from(d)
        );
      })((o = this._schema) == null ? void 0 : o.outFields, e.outFields)),
        (e.outFields = e.outFields.length >= 0.75 * s ? ["*"] : e.outFields),
        e.outFields.sort();
      const r = le(this._schema, e);
      if (!r) return;
      E("esri-2d-update-debug");
      const i =
          "orderByFields" in this._serviceInfo &&
          this._serviceInfo.orderByFields
            ? this._serviceInfo.orderByFields
            : this._serviceInfo.objectIdField + " ASC",
        a = {
          returnCentroid:
            this._serviceInfo.geometryType === "esriGeometryPolygon",
          returnGeometry: !0,
          timeReferenceUnknownClient:
            this._serviceInfo.type !== "stream" &&
            this._serviceInfo.timeReferenceUnknownClient,
          outFields: e.outFields,
          outSpatialReference: this._outSR,
          orderByFields: [i],
          where: e.definitionExpression || "1=1",
          gdbVersion: e.gdbVersion,
          historicMoment: e.historicMoment,
          timeExtent: e.timeExtent ? Ct.fromJSON(e.timeExtent) : null,
        },
        n = this._schema && ge(r, "outFields");
      this._schema &&
        Mt(r, [
          "timeExtent",
          "definitionExpression",
          "gdbVersion",
          "historicMoment",
          "customParameters",
        ]) &&
        (t.why.mesh.push("Layer filter and/or custom parameters changed"),
        t.why.source.push("Layer filter and/or custom parameters changed"),
        (t.mesh = !0),
        (t.source = !0),
        (t.queryFilter = !0)),
        n &&
          (t.why.source.push("Layer required fields changed"), (t.source = !0)),
        le(a, this._queryInfo) && (this._queryInfo = a),
        (this._schema = e),
        this._resolver.resolve();
    }
    whenInitialized() {
      return this._resolver.promise;
    }
    async applyUpdate(t) {
      if (t.queryFilter || (t.source && this._didEdit))
        return this.refresh(t.version), void (this._didEdit = !1);
      this._subscriptions.forEach((e) => e.applyUpdate(t)), await this.resend();
    }
    refresh(t, e) {
      for (const s of this._tiles()) this.unsubscribe(s), this.subscribe(s, t);
    }
    subscribe(t, e) {
      const s = new gs(t, e);
      this._subscriptions.set(t.id, s);
    }
    unsubscribe(t) {
      const e = this.getSubscription(t.id);
      _(e) && e.abort(), this._subscriptions.delete(t.id);
    }
    createQuery(t = {}) {
      const e = this._queryInfo.historicMoment
        ? new Date(this._queryInfo.historicMoment)
        : null;
      return new kt({ ...this._queryInfo, historicMoment: e, ...t });
    }
    getSubscription(t) {
      return this._subscriptions.has(t) ? this._subscriptions.get(t) : null;
    }
    async queryLastEditDate() {
      throw new Error("Service does not support query type");
    }
    async query(t, e) {
      throw new Error("Service does not support query");
    }
    *_tiles() {
      const t = Array.from(this._subscriptions.values());
      for (const e of t) yield e.tile;
    }
    async edit(t, e) {
      const s = Array.from(this._subscriptions.values()),
        r = s.map(({ tile: i }) => i);
      for (const i of s) i.removeIds(e);
      if (t.length) {
        const i = r
            .map((n) => {
              const o = this.createTileQuery(n);
              return (o.objectIds = t), { tile: n, query: o };
            })
            .map(async ({ tile: n, query: o }) => ({
              tile: n,
              result: await this.query(o, {
                query: {
                  tile: E("esri-tiles-debug")
                    ? n.id.replace(/\//g, ".")
                    : void 0,
                },
              }),
              query: o,
            })),
          a = (await qt(i)).map(async ({ tile: n, result: o }) => {
            if (!o.hasFeatures && !e.length && !t.length) return;
            const h = this._subscriptions.get(n.key.id);
            h && h.edit(o, t);
          });
        await Et(a);
      }
      this._didEdit = !0;
    }
  },
  Le = class extends ft {
    constructor(t) {
      super(t),
        (this.type = "feature"),
        (this.mode = "on-demand"),
        (this._adapter = hs(t.serviceInfo)),
        (this._queue = new Fe({
          concurrency: 8,
          process: async (e) => {
            var s, r;
            if ((j(e), _(e.tile))) {
              const i = e.tile.key.id,
                { signal: a } = e,
                n = E("esri-tiles-debug")
                  ? { tile: i.replace(/\//g, "."), depth: e.depth }
                  : void 0,
                o = await this._adapter.executeQuery(e.query, {
                  signal: a,
                  query: {
                    ...n,
                    ...((s = this._schema) == null
                      ? void 0
                      : s.customParameters),
                  },
                });
              return (o.level = e.tile.key.level), o;
            }
            return this._adapter.executeQuery(e.query, {
              ...e,
              query: (r = this._schema) == null ? void 0 : r.customParameters,
            });
          },
        })),
        (this._patchQueue = new Fe({
          concurrency: 8,
          process: async (e) => {
            var s, r;
            if ((j(e), _(e.tile))) {
              const i = e.tile.key.id,
                { signal: a } = e,
                n = E("esri-tiles-debug")
                  ? { tile: i.replace(/\//g, "."), depth: e.depth }
                  : void 0,
                o = await this._adapter.executeQuery(e.query, {
                  signal: a,
                  query: {
                    ...n,
                    ...((s = this._schema) == null
                      ? void 0
                      : s.customParameters),
                  },
                });
              return (o.level = e.tile.key.level), o;
            }
            return this._adapter.executeQuery(e.query, {
              ...e,
              query: (r = this._schema) == null ? void 0 : r.customParameters,
            });
          },
        }));
    }
    destroy() {
      super.destroy(),
        this._adapter.destroy(),
        this._queue.destroy(),
        this._patchQueue.destroy();
    }
    get updating() {
      return (
        !!this._queue.length ||
        Array.from(this._subscriptions.values()).some((t) => !t.done)
      );
    }
    get maxRecordCountFactor() {
      const { query: t } = this._serviceInfo.capabilities;
      return t.supportsMaxRecordCountFactor ? 4 : null;
    }
    get maxPageSize() {
      const { query: t } = this._serviceInfo.capabilities;
      return (t.maxRecordCount ?? 8e3) * Re(this.maxRecordCountFactor, 1);
    }
    get pageSize() {
      return Math.min(8e3, this.maxPageSize);
    }
    enableEvent(t, e) {}
    subscribe(t, e) {
      super.subscribe(t, e);
      const s = this._subscriptions.get(t.id);
      this._fetchDataTile(t)
        .catch((r) => {
          ye(r) ||
            he
              .getLogger(
                "esri.views.2d.layers.features.sources.BaseFeatureSource"
              )
              .error(
                new _e(
                  "mapview-query-error",
                  "Encountered error when fetching tile",
                  {
                    tile: t,
                    error: r,
                  }
                )
              );
        })
        .then(() => s.end());
    }
    unsubscribe(t) {
      super.unsubscribe(t);
    }
    readers(t) {
      return this._subscriptions.get(t).readers();
    }
    async query(t, e = {}) {
      var r;
      const s = e.query ?? {};
      return this._adapter.executeQuery(t, {
        ...e,
        query: {
          ...s,
          ...((r = this._schema) == null ? void 0 : r.customParameters),
        },
      });
    }
    async queryLastEditDate() {
      const t = this._serviceInfo.source,
        e = { ...t.query, f: "json" };
      return (await At(t.path, { query: e, responseType: "json" })).data
        .editingInfo.lastEditDate;
    }
    createTileQuery(t, e = {}) {
      const s = this._serviceInfo.geometryType,
        r = this.createQuery(e);
      (r.quantizationParameters =
        e.quantizationParameters ?? t.getQuantizationParameters()),
        (r.resultType = "tile"),
        (r.geometry = t.extent),
        this._serviceInfo.capabilities.query.supportsQuantization
          ? s === "esriGeometryPolyline" &&
            (r.maxAllowableOffset =
              t.resolution * E("feature-polyline-generalization-factor"))
          : (s !== "esriGeometryPolyline" && s !== "esriGeometryPolygon") ||
            ((r.maxAllowableOffset = t.resolution),
            s === "esriGeometryPolyline" &&
              (r.maxAllowableOffset *= E(
                "feature-polyline-generalization-factor"
              )));
      const i = this._serviceInfo.capabilities.query;
      return (
        (r.defaultSpatialReferenceEnabled = i.supportsDefaultSpatialReference),
        (r.compactGeometryEnabled = i.supportsCompactGeometry),
        r
      );
    }
    async _executePatchQuery(t, e, s, r) {
      const i = e.clone();
      (i.outFields = [this._serviceInfo.objectIdField, ...s]),
        (i.returnCentroid = !1),
        (i.returnGeometry = !1);
      const a = _(i.start) ? i.start / 8e3 : 0,
        n = r.signal;
      return this._patchQueue.push({ tile: t, query: i, signal: n, depth: a });
    }
    async _resend(t, e) {
      const { query: s, message: r } = t,
        i = _(s.outFields) ? s.outFields : [],
        a = this._queryInfo.outFields,
        n = a.filter((o) => !i.includes(o));
      if (T(r.addOrUpdate)) this._onMessage({ ...r, type: "append" });
      else if (n.length)
        try {
          const o = this._subscriptions.get(r.id).tile,
            h = await this._executePatchQuery(o, s, n, e);
          j(e),
            (s.outFields = a),
            r.addOrUpdate.joinAttributes(h),
            this._onMessage({ ...r, end: r.end, type: "append" });
        } catch {}
      else this._onMessage({ ...r, type: "append" });
    }
    async _resendSubscription(t) {
      if ((E("esri-2d-update-debug"), t.empty))
        return this._onMessage({
          id: t.tile.id,
          addOrUpdate: null,
          end: !1,
          type: "append",
        });
      const e = t.signal;
      for (const s of t.requests.done) await this._resend(s, { signal: e });
      return _(t.edits) ? this._onMessage(t.edits) : void 0;
    }
    async resend() {
      const t = Array.from(this._subscriptions.values());
      await Promise.all(t.map((e) => this._resendSubscription(e)));
    }
  };
const Ze = E("esri-mobile"),
  Je = { maxDrillLevel: Ze ? 1 : 4, maxRecordCountFactor: Ze ? 1 : 3 };
let ps = class extends Le {
    constructor(t) {
      super(t);
    }
    async _fetchDataTile(t) {
      const e =
          this._serviceInfo.capabilities.query.supportsMaxRecordCountFactor,
        s = this._subscriptions.get(t.key.id),
        r = s.signal,
        i = t.getQuantizationParameters();
      let a = 0;
      const n = async (o, h) => {
        const u = this._queryInfo,
          d = this.createTileQuery(o, {
            maxRecordCountFactor: e ? Je.maxRecordCountFactor : void 0,
            returnExceededLimitFeatures: !1,
            quantizationParameters: i,
          });
        a++;
        try {
          const c = await this._queue.push({
            tile: t,
            query: d,
            signal: r,
            depth: h,
          });
          if ((a--, j(r), !c)) return;
          if (u !== this._queryInfo) return void n(o, h);
          if (c.exceededTransferLimit && h < Je.maxDrillLevel) {
            for (const p of o.createChildTiles()) n(p, h + 1);
            return;
          }
          const l = { id: t.id, addOrUpdate: c, end: a === 0, type: "append" };
          s.add({ query: d, message: l }), this._onMessage(l);
        } catch (c) {
          ye(c) ||
            this._onMessage({
              id: t.id,
              addOrUpdate: null,
              end: !0,
              type: "append",
            });
        }
      };
      n(t, 0);
    }
  },
  fs = class extends Le {
    constructor(t) {
      super(t);
    }
    async _fetchDataTile(t) {
      const e = this._subscriptions.get(t.key.id);
      let s = !1,
        r = 0,
        i = 0;
      const a = (h, u) => {
        i--, j(e);
        const d = t.id,
          c = h.reader,
          l = h.query;
        if (!c.exceededTransferLimit) {
          if (((s = !0), u !== 0 && !c.hasFeatures)) {
            const m = { id: d, addOrUpdate: c, end: i === 0, type: "append" };
            return e.add({ message: m, query: l }), void this._onMessage(m);
          }
          const g = { id: d, addOrUpdate: c, end: i === 0, type: "append" };
          return e.add({ message: g, query: l }), void this._onMessage(g);
        }
        const p = { id: d, addOrUpdate: c, end: s && i === 0, type: "append" };
        e.add({ message: p, query: l }), this._onMessage(p);
      };
      let n = 0,
        o = 0;
      for (; !s && o++ < 20; ) {
        let h;
        for (let u = 0; u < n + 1; u++) {
          const d = r++;
          i++,
            (h = this._fetchDataTilePage(t, d, e)
              .then((c) => c && a(c, d))
              .catch((c) => {
                (s = !0),
                  ye(c) ||
                    (he
                      .getLogger(
                        "esri.views.2d.layers.features.sources.PagedFeatureSource"
                      )
                      .error(
                        new _e(
                          "mapview-query-error",
                          "Encountered error when fetching tile",
                          {
                            tile: t,
                            error: c,
                          }
                        )
                      ),
                    this._onMessage({
                      id: t.id,
                      addOrUpdate: null,
                      end: s,
                      type: "append",
                    }));
              }));
        }
        await h, j(e), (n = Math.min(n + 2, 6));
      }
    }
    async _fetchDataTilePage(t, e, s) {
      j(s);
      const r = this._queryInfo,
        i = {
          start: this.pageSize * e,
          num: this.pageSize,
          returnExceededLimitFeatures: !0,
          quantizationParameters: t.getQuantizationParameters(),
        };
      _(this.maxRecordCountFactor) &&
        (i.maxRecordCountFactor = this.maxRecordCountFactor);
      const a = this.createTileQuery(t, i);
      try {
        const n = s.signal,
          o = await this._queue.push({
            tile: t,
            query: a,
            signal: n,
            depth: e,
          });
        return (
          j(s),
          o
            ? r !== this._queryInfo
              ? this._fetchDataTilePage(t, e, s)
              : { reader: o, query: a }
            : null
        );
      } catch (n) {
        return Te(n), null;
      }
    }
  };
function _s(t, e, s) {
  const r = t.getXHydrated(),
    i = t.getYHydrated(),
    a = e.getColumnForX(r),
    n = Math.floor(e.normalizeCol(a));
  return `${s}/${Math.floor(e.getRowForY(i))}/${n}`;
}
function xe(t, e) {
  if (T(t)) return null;
  const s = e.transform,
    r = t.getQuantizationTransform();
  if (T(r)) {
    const [f, I] = s.scale,
      [v, y] = s.translate,
      x = -v / f,
      b = 1 / f,
      S = y / I,
      w = 1 / -I;
    return t.transform(x, S, b, w);
  }
  const [i, a] = r.scale,
    [n, o] = r.translate,
    [h, u] = s.scale,
    [d, c] = s.translate,
    l = i / h,
    p = (n - d) / h,
    g = a / u,
    m = (-o + c) / u;
  return t.transform(p, m, l, g);
}
let ys = class extends Le {
  constructor(t) {
    super(t),
      (this.mode = "snapshot"),
      (this._loading = !0),
      (this._controller = new AbortController()),
      (this._downloadPromise = null),
      (this._didSendEnd = !1),
      (this._queries = []),
      (this._invalidated = !1),
      (this._hasAggregates = !1),
      (this._random = new Rt(1e3)),
      (this._store = t.store),
      (this._markedIdsBufId = this._store.storage.createBitset());
  }
  destroy() {
    super.destroy(), this._controller.abort();
  }
  get loading() {
    return this._loading;
  }
  get _signal() {
    return this._controller.signal;
  }
  update(t, e) {
    var s;
    super.update(t, e),
      this._featureCount == null &&
        (this._featureCount = e.initialFeatureCount),
      _(e.changedFeatureCount) && (this._featureCount = e.changedFeatureCount),
      (this._hasAggregates = !!((s = t.targets) != null && s.aggregate));
  }
  async resend(t = !1) {
    if ((await this._downloadPromise, this._invalidated || t)) {
      const s = De(this._featureCount, "Expected featureCount to be defined");
      return (
        (this._invalidated = !1),
        this._subscriptions.forEach((r) => r.clear()),
        (this._downloadPromise = this._download(s)),
        void (await this._downloadPromise)
      );
    }
    const e = this._queries.map(({ query: s, reader: r }) =>
      this._sendPatchQuery(s, r)
    );
    await Promise.all(e),
      this._subscriptions.forEach((s) => {
        s.requests.done.forEach((r) => this._onMessage(r.message));
      });
  }
  async refresh(t, e) {
    e && (this._featureCount = e.featureCount), await this.resend(!0);
  }
  async _sendPatchQuery(t, e) {
    const s = _(t.outFields) ? t.outFields : [],
      r = this._queryInfo.outFields,
      i = r.filter((h) => !s.includes(h));
    if (!i.length) return;
    const a = t.clone(),
      n = this._signal;
    (a.returnGeometry = !1),
      (a.returnCentroid = !1),
      (a.outFields = i),
      (t.outFields = r);
    const o = await this._queue.push({ query: a, depth: 0, signal: n });
    j({ signal: n }), e.joinAttributes(o);
  }
  async _fetchDataTile(t) {
    if (!this._downloadPromise) {
      const o = De(this._featureCount, "Expected featureCount to be defined");
      this._downloadPromise = this._download(o);
    }
    const e = this._store.search(t),
      s = this._subscriptions.get(t.key.id),
      r = e.length - 1;
    for (let o = 0; o < r; o++) {
      const h = xe(e[o], t),
        u = {
          type: "append",
          id: t.id,
          addOrUpdate: h,
          end: !1,
          status: R.empty(),
        };
      s.add({ query: null, message: u }),
        this._hasAggregates || (await st(1)),
        this._onMessage(u);
    }
    const i = xe(r >= 0 ? e[r] : null, t),
      a = this._didSendEnd,
      n = {
        type: "append",
        id: t.id,
        addOrUpdate: i,
        end: a,
        status: R.empty(),
      };
    s.add({ query: null, message: n }), this._onMessage(n);
  }
  async _download(t) {
    try {
      await this.whenInitialized();
      const e = this._store.storage.getBitset(this._markedIdsBufId),
        s = new Set();
      e.clear();
      const r = Math.ceil(t / this.pageSize),
        i = Array.from({ length: r }, (a, n) => n)
          .sort((a, n) => this._random.getInt() - this._random.getInt())
          .map((a) => this._downloadPage(a, e, s));
      await Promise.all(i),
        this._store.sweepFeatures(e, this._store.storage),
        this._store.sweepFeatureSets(s);
    } catch (e) {
      he.getLogger(
        "esri.views.2d.layers.features.sources.SnapshotFeatureSource"
      ).error(
        "mapview-snapshot-source",
        "Encountered and error when downloading feature snapshot",
        e
      );
    }
    this._sendEnd(), (this._loading = !1);
  }
  async _downloadPage(t, e, s) {
    const r = this.pageSize,
      i = { start: t * r, num: r, cacheHint: !0 };
    _(this.maxRecordCountFactor) &&
      (i.maxRecordCountFactor = this.maxRecordCountFactor);
    const a = this.createQuery(i),
      n = this._signal,
      o = await this._queue.push({ query: a, depth: t, signal: n });
    j({ signal: n }),
      this._queries.push({ query: a, reader: o }),
      this._store.insert(o),
      s.add(o.instance);
    const h = o.getCursor();
    for (; h.next(); ) e.set(h.getDisplayId());
    this._send(o);
  }
  _send(t) {
    if (!this._subscriptions.size) return;
    let e = null;
    const s = new Map(),
      r = new Set(),
      i = new Map();
    this._subscriptions.forEach((a) => {
      const n = a.tile;
      s.set(n.key.id, null), (e = n.tileInfoView), r.add(n.level);
      const { row: o, col: h } = n.key,
        u = `${n.level}/${o}/${h}`,
        d = i.get(u) ?? [];
      d.push(a), i.set(u, d);
    });
    for (const a of r) {
      const n = e.getLODInfoAt(a),
        o = t.getCursor();
      for (; o.next(); ) {
        const h = _s(o, n, a),
          u = o.getIndex();
        if (i.has(h))
          for (const d of i.get(h)) {
            const c = d.tile.id;
            let l = s.get(c);
            T(l) && ((l = []), s.set(c, l)), l.push(u);
          }
      }
    }
    s.forEach((a, n) => {
      if (_(a)) {
        const o = this._subscriptions.get(n),
          h = {
            type: "append",
            id: n,
            addOrUpdate: xe(Zt.from(t, a), o.tile),
            end: !1,
            status: R.empty(),
          };
        o.add({ query: null, message: h }), this._onMessage(h);
      }
    });
  }
  _sendEnd() {
    this._subscriptions.forEach((t) => {
      const e = {
        type: "append",
        id: t.tile.id,
        addOrUpdate: null,
        end: !0,
        status: R.empty(),
      };
      t.add({ query: null, message: e }), this._onMessage(e);
    }),
      (this._didSendEnd = !0);
  }
};
const We = "__esri_timestamp__";
class ms {
  constructor(e, s, r, i, a = 128) {
    (this._trackIdToObservations = new Map()),
      (this._idCounter = 0),
      (this._lastPurge = performance.now()),
      (this._addOrUpdated = new Map()),
      (this._removed = []),
      (this._maxAge = 0),
      (this._timeInfo = r),
      (this._purgeOptions = i),
      (this.store = e),
      (this.objectIdField = s),
      (this.purgeInterval = a),
      (this._useGeneratedIds = this.objectIdField === "__esri_stream_id__");
  }
  removeById(e) {
    this._removed.push(e);
  }
  removeByTrackId(e) {
    const s = this._trackIdToObservations.get(e);
    if (s) for (const r of s.entries) this._removed.push(r);
  }
  add(e) {
    var a;
    if (this._useGeneratedIds) {
      const n = this._nextId();
      (e.attributes[this.objectIdField] = n), (e.objectId = n);
    } else e.objectId = e.attributes[this.objectIdField];
    const s = e.objectId;
    if (
      (this._addOrUpdated.set(s, e),
      (this._maxAge = Math.max(
        this._maxAge,
        e.attributes[this._timeInfo.startTimeField]
      )),
      !this._timeInfo.trackIdField)
    )
      return (
        T(this._trackIdLessObservations) &&
          (this._trackIdLessObservations = new pe(1e5)),
        void this._trackIdLessObservations.enqueue(s)
      );
    const r = e.attributes[this._timeInfo.trackIdField];
    if (!this._trackIdToObservations.has(r)) {
      const n =
          _(this._purgeOptions) && this._purgeOptions.maxObservations != null
            ? this._purgeOptions.maxObservations
            : 1e3,
        o = Ot(n, 0, 1e3);
      this._trackIdToObservations.set(r, new pe(o));
    }
    const i =
      (a = this._trackIdToObservations.get(r)) == null ? void 0 : a.enqueue(s);
    _(i) &&
      (this._addOrUpdated.has(i)
        ? this._addOrUpdated.delete(i)
        : this._removed.push(i));
  }
  checkForUpdates() {
    const e = this._getToAdd(),
      s = this._getToRemove(),
      r = performance.now();
    r - this._lastPurge >= this.purgeInterval &&
      (this._purge(r), (this._lastPurge = r));
    const i = [];
    if (_(s))
      for (const n of s) {
        const o = this.store.removeById(n);
        _(o) && i.push(o);
      }
    const a = [];
    if (_(e)) {
      const n = new Set(Re(s, []));
      for (const o of e)
        n.has(o.objectId) ||
          ((o.attributes[We] = r), this.store.add(o), a.push(o));
    }
    (a.length || (i != null && i.length)) && this.store.update(a, i);
  }
  _getToAdd() {
    if (!this._addOrUpdated.size) return null;
    const e = new Array(this._addOrUpdated.size);
    let s = 0;
    return (
      this._addOrUpdated.forEach((r) => (e[s++] = r)),
      this._addOrUpdated.clear(),
      e
    );
  }
  _getToRemove() {
    const e = this._removed;
    return this._removed.length ? ((this._removed = []), e) : null;
  }
  _nextId() {
    const e = this._idCounter;
    return (this._idCounter = ((this._idCounter + 1) % 4294967294) + 1), e;
  }
  _purge(e) {
    const s = this._purgeOptions;
    _(s) &&
      (this._purgeSomeByDisplayCount(s),
      this._purgeByAge(s),
      this._purgeByAgeReceived(e, s),
      this._purgeTracks());
  }
  _purgeSomeByDisplayCount(e) {
    if (!e.displayCount) return;
    let s = this.store.size;
    if (s > e.displayCount) {
      if (this._timeInfo.trackIdField) {
        for (const r of this._trackIdToObservations.values())
          if (s > e.displayCount && r.size) {
            const i = oe(r.dequeue());
            this._removed.push(i), s--;
          }
      }
      if (_(this._trackIdLessObservations)) {
        let r = s - e.displayCount;
        for (; r-- > 0; ) {
          const i = this._trackIdLessObservations.dequeue();
          _(i) && this._removed.push(i);
        }
      }
    }
  }
  _purgeByAge(e) {
    var a;
    const s = (a = this._timeInfo) == null ? void 0 : a.startTimeField;
    if (!e.age || !s) return;
    const r = 60 * e.age * 1e3,
      i = this._maxAge - r;
    this.store.forEach((n) => {
      n.attributes[s] < i && this._removed.push(n.objectId);
    });
  }
  _purgeByAgeReceived(e, s) {
    if (!s.ageReceived) return;
    const r = e - 60 * s.ageReceived * 1e3;
    this.store.forEach((i) => {
      i.attributes[We] < r && this._removed.push(i.objectId);
    });
  }
  _purgeTracks() {
    this._trackIdToObservations.forEach((e, s) => {
      e.size === 0 && this._trackIdToObservations.delete(s);
    });
  }
}
function Is(t, e) {
  const s = t.weakClone();
  if (_(t.geometry)) {
    const r = rt(e, t.geometry.coords[0]),
      i = it(e, t.geometry.coords[1]);
    s.geometry = new B([], [r, i]);
  }
  return s;
}
function vs(t) {
  return t === "esriGeometryPoint"
    ? Is
    : (e, s) => {
        const r = e.weakClone(),
          i = new B(),
          a = Ce(i, e.geometry, !1, !1, t, s, !1, !1);
        return (r.geometry = a), r;
      };
}
function bs(t, e) {
  const s = Lt(
    9,
    (function (r) {
      return r === "esriGeometryPoint"
        ? (i) =>
            _(i.geometry)
              ? {
                  minX: i.geometry.coords[0],
                  minY: i.geometry.coords[1],
                  maxX: i.geometry.coords[0],
                  maxY: i.geometry.coords[1],
                }
              : { minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 }
        : (i) => {
            let a = 1 / 0,
              n = 1 / 0,
              o = -1 / 0,
              h = -1 / 0;
            return (
              _(i.geometry) &&
                i.geometry.forEachVertex((u, d) => {
                  (a = Math.min(a, u)),
                    (n = Math.min(n, d)),
                    (o = Math.max(o, u)),
                    (h = Math.max(h, d));
                }),
              { minX: a, minY: n, maxX: o, maxY: h }
            );
          };
    })(e)
  );
  return s.load(t), s;
}
class xs {
  constructor(e, s) {
    (this.onUpdate = e),
      (this._geometryType = s),
      (this._objectIdToFeature = new Map()),
      (this._index = null);
  }
  get _features() {
    const e = [];
    return this._objectIdToFeature.forEach((s) => e.push(s)), e;
  }
  add(e) {
    this._objectIdToFeature.set(e.objectId, e), (this._index = null);
  }
  get(e) {
    return this._objectIdToFeature.has(e)
      ? this._objectIdToFeature.get(e)
      : null;
  }
  forEach(e) {
    this._objectIdToFeature.forEach(e);
  }
  search(e) {
    return (
      this._index || (this._index = bs(this._features, this._geometryType)),
      (function (s, r) {
        return s.search({
          minX: r.bounds[0],
          minY: r.bounds[1],
          maxX: r.bounds[2],
          maxY: r.bounds[3],
        });
      })(this._index, e)
    );
  }
  clear() {
    (this._index = null), this._objectIdToFeature.clear();
  }
  removeById(e) {
    const s = this._objectIdToFeature.get(e);
    return s
      ? (this._objectIdToFeature.delete(e), (this._index = null), s)
      : null;
  }
  update(e, s) {
    this.onUpdate(e, s);
  }
  get size() {
    return this._objectIdToFeature.size;
  }
}
let ae = class extends ft {
  constructor(t) {
    super(t),
      (this.type = "stream"),
      (this._updateIntervalId = 0),
      (this._level = 0),
      (this._updateInfo = { websocket: 0, client: 0 }),
      (this._isPaused = !1),
      (this._inUpdate = !1);
    const { outSR: e } = t,
      {
        geometryType: s,
        objectIdField: r,
        timeInfo: i,
        purgeOptions: a,
        source: n,
        spatialReference: o,
        serviceFilter: h,
        maxReconnectionAttempts: u,
        maxReconnectionInterval: d,
        updateInterval: c,
        customParameters: l,
        enabledEventTypes: p,
      } = t.serviceInfo,
      g = new xs(this._onUpdate.bind(this), s),
      m = new ms(g, r, i, a),
      f = Kt(n, o, e, s, h, u, d, l ?? {});
    (this._store = g),
      (this._manager = m),
      (this._connection = f),
      (this._quantize = vs(s)),
      (this._enabledEventTypes = new Set(p)),
      (this._handles = [
        this._connection.on("data-received", (I) => this._onFeature(I)),
        this._connection.on("message-received", (I) =>
          this._onWebSocketMessage(I)
        ),
      ]),
      (this._initUpdateInterval = () => {
        let I = performance.now();
        this._updateIntervalId = setInterval(() => {
          const v = performance.now(),
            y = v - I;
          if (y > 2500) {
            I = v;
            const x = Math.round(this._updateInfo.client / (y / 1e3)),
              b = Math.round(this._updateInfo.websocket / (y / 1e3));
            (this._updateInfo.client = 0),
              (this._updateInfo.websocket = 0),
              this.events.emit("updateRate", { client: x, websocket: b });
          }
          t.canAcceptRequest() &&
            !this._inUpdate &&
            this._manager.checkForUpdates();
        }, c);
      }),
      this._initUpdateInterval();
  }
  destroy() {
    super.destroy(),
      this._clearUpdateInterval(),
      this._handles.forEach((t) => t.remove()),
      this._connection.destroy();
  }
  _fetchDataTile() {}
  get connectionStatus() {
    var t;
    return this._isPaused
      ? "paused"
      : (t = this._connection) == null
      ? void 0
      : t.connectionStatus;
  }
  get errorString() {
    var t;
    return (t = this._connection) == null ? void 0 : t.errorString;
  }
  updateCustomParameters(t) {
    this._connection.updateCustomParameters(t);
  }
  pauseStream() {
    this._isPaused || ((this._isPaused = !0), this._clearUpdateInterval());
  }
  resumeStream() {
    this._isPaused && ((this._isPaused = !1), this._initUpdateInterval());
  }
  sendMessageToSocket(t) {
    this._connection.sendMessageToSocket(t);
  }
  sendMessageToClient(t) {
    this._connection.sendMessageToClient(t);
  }
  enableEvent(t, e) {
    e ? this._enabledEventTypes.add(t) : this._enabledEventTypes.delete(t);
  }
  get updating() {
    return !1;
  }
  subscribe(t, e) {
    super.subscribe(t, e);
    const s = this._subscriptions.get(t.id);
    this._level = t.level;
    const r = this._getTileFeatures(t);
    this._onMessage({ type: "append", id: t.key.id, addOrUpdate: r, end: !0 }),
      (s.didSend = !0);
  }
  unsubscribe(t) {
    super.unsubscribe(t);
  }
  *readers(t) {
    const e = this._subscriptions.get(t),
      { tile: s } = e;
    yield this._getTileFeatures(s);
  }
  createTileQuery(t) {
    throw new Error("Service does not support tile  queries");
  }
  async resend() {
    this._subscriptions.forEach((t) => {
      const { tile: e } = t,
        s = {
          type: "append",
          id: e.id,
          addOrUpdate: this._getTileFeatures(e),
          end: !0,
        };
      this._onMessage(s);
    });
  }
  _getTileFeatures(t) {
    const e = this._store.search(t).map((s) => this._quantize(s, t.transform));
    return D.fromOptimizedFeatures(e, this._serviceInfo, t.transform);
  }
  _onWebSocketMessage(t) {
    if (
      (this._enabledEventTypes.has("message-received") &&
        this.events.emit("message-received", t),
      "type" in t)
    )
      switch (t.type) {
        case "delete":
          if (t.objectIds)
            for (const e of t.objectIds) this._manager.removeById(e);
          if (t.trackIds)
            for (const e of t.trackIds) this._manager.removeByTrackId(e);
          break;
        case "clear":
          this._store.forEach((e) => this._manager.removeById(e.objectId));
      }
  }
  _onFeature(t) {
    this._updateInfo.websocket++;
    try {
      this._enabledEventTypes.has("data-received") &&
        this.events.emit("data-received", t);
      const e = Ut(
        t,
        this._serviceInfo.geometryType,
        !1,
        !1,
        this._serviceInfo.objectIdField
      );
      this._manager.add(e);
    } catch {}
  }
  _clearUpdateInterval() {
    clearInterval(this._updateIntervalId), (this._updateIntervalId = 0);
  }
  async _onUpdate(t, e) {
    this._inUpdate = !0;
    try {
      _(t) && (this._updateInfo.client += t.length),
        this._subscriptions.forEach((r, i) => {
          r.didSend &&
            r.tile.level === this._level &&
            this._onMessage({
              type: "append",
              id: i,
              addOrUpdate: null,
              clear: !0,
              end: !1,
            });
        });
      const s = [];
      this._subscriptions.forEach((r, i) => {
        if (!r.didSend || r.tile.level !== this._level) return;
        const a = r.tile,
          n = {
            type: "append",
            id: i,
            addOrUpdate: this._getTileFeatures(a),
            remove: [],
            end: !1,
            status: R.empty(),
          };
        r.requests.stream.enqueue(n), s.push(this._onMessage(n));
      }),
        await Promise.all(s),
        this._subscriptions.forEach((r, i) => {
          r.didSend &&
            r.tile.level === this._level &&
            this._onMessage({
              type: "append",
              id: i,
              addOrUpdate: null,
              end: !0,
            });
        });
    } catch {}
    this._inUpdate = !1;
  }
};
function Ss(t, e, s, r, i, a) {
  const n = (function (o, h, u, d, c, l) {
    switch (o.type) {
      case "snapshot":
        return {
          type: "feature",
          origin: "snapshot",
          featureCount: Re(o.featureCount, 0),
          serviceInfo: o,
          onMessage: d,
          outSR: h,
          tileInfoView: u,
          canAcceptRequest: c,
          store: l,
        };
      case "stream":
        return {
          type: "stream",
          serviceInfo: o,
          onMessage: d,
          outSR: h,
          canAcceptRequest: c,
        };
      case "memory":
      case "on-demand":
        return {
          type: "feature",
          serviceInfo: o,
          onMessage: d,
          outSR: h,
          origin: p(o.source),
          tileInfoView: u,
          canAcceptRequest: c,
        };
    }
    function p(g) {
      return Array.isArray(g)
        ? "local"
        : "path" in g && Pt(g.path)
        ? "hosted"
        : "unknown";
    }
  })(t, e, s, r, i, a);
  switch (n.type) {
    case "feature":
      switch (n.origin) {
        case "hosted":
        case "local":
          return new fs(n);
        case "snapshot":
          return new ys(n);
        default:
          return new ps(n);
      }
    case "stream":
      return new ae(n);
  }
}
function ce(t, e, s, r) {
  r % 2 && (r += 1);
  let i = 0,
    a = 0,
    n = -90,
    o = 90,
    h = -180,
    u = 180;
  for (let d = 0; d < r / 2; d++) {
    for (let c = 0; c < 5; c++) {
      const l = (h + u) / 2,
        p = s > l ? 1 : 0;
      (i |= p << (29 - (c + 5 * d))),
        (h = (1 - p) * h + p * l),
        (u = (1 - p) * l + p * u);
    }
    for (let c = 0; c < 5; c++) {
      const l = (n + o) / 2,
        p = e > l ? 1 : 0;
      (a |= p << (29 - (c + 5 * d))),
        (n = (1 - p) * n + p * l),
        (o = (1 - p) * l + p * o);
    }
  }
  (t.geohashX = i), (t.geohashY = a);
}
function fe(t, e, s, r, i) {
  i % 2 && (i += 1);
  let a = 0,
    n = 0,
    o = -90,
    h = 90,
    u = -180,
    d = 180;
  for (let c = 0; c < i / 2; c++) {
    for (let l = 0; l < 5; l++) {
      const p = (u + d) / 2,
        g = r > p ? 1 : 0;
      (a |= g << (29 - (l + 5 * c))),
        (u = (1 - g) * u + g * p),
        (d = (1 - g) * p + g * d);
    }
    for (let l = 0; l < 5; l++) {
      const p = (o + h) / 2,
        g = s > p ? 1 : 0;
      (n |= g << (29 - (l + 5 * c))),
        (o = (1 - g) * o + g * p),
        (h = (1 - g) * p + g * h);
    }
  }
  (t[2 * e] = a), (t[2 * e + 1] = n);
}
A([G()], ae.prototype, "_isPaused", void 0),
  A([G()], ae.prototype, "connectionStatus", null),
  A([G()], ae.prototype, "errorString", null),
  (ae = A([Oe("esri.views.2d.layers.features.sources")], ae));
let _t = class {
    constructor(t = [], e, s = 8096) {
      (this.onRelease = (r) => {}),
        (this._nodes = 0),
        (this._root = new Se(this, 0, 0, 0)),
        (this._statisticFields = t),
        (this._pool = s ? new pe(8096) : null),
        (this._serviceInfo = e);
    }
    destroy() {
      this.clear();
    }
    _acquire(t, e, s) {
      this._nodes++;
      let r = null;
      return (
        _(this._pool) && (r = this._pool.dequeue()),
        _(r) ? r.realloc(t, e, s) : (r = new Se(this, t, e, s)),
        r
      );
    }
    _release(t) {
      this.onRelease(t), this._nodes--, _(this._pool) && this._pool.enqueue(t);
    }
    get count() {
      return this._root.count;
    }
    get size() {
      return this._nodes;
    }
    get poolSize() {
      return at(this._pool, 0, (t) => t.size);
    }
    get depth() {
      let t = 0;
      return this.forEach((e) => (t = Math.max(t, e.depth))), t;
    }
    dropLevels(t) {
      this.forEach((e) => {
        if (e.depth >= t)
          for (let s = 0; s < e.children.length; s++) {
            const r = e.children[s];
            r && this._release(r);
          }
      }),
        this.forEach((e) => {
          if (e.depth >= t)
            for (let s = 0; s < e.children.length; s++) e.children[s] = null;
        });
    }
    clear() {
      this.forEach((t) => this._release(t)),
        (this._root = new Se(this, 0, 0, 0));
    }
    insert(t, e, s = 0) {
      const r = D.fromOptimizedFeatures([t], this._serviceInfo).getCursor();
      r.next();
      const i = r.readGeometry();
      if (!i) return;
      const [a, n] = i.coords,
        o = t.geohashX,
        h = t.geohashY;
      this.insertCursor(r, t.displayId, a, n, o, h, e, s);
    }
    insertCursor(t, e, s, r, i, a, n, o = 0) {
      let h = this._root,
        u = 0,
        d = 0,
        c = 0;
      for (; h !== null; ) {
        if (
          (h.depth >= o &&
            ((h.count += 1),
            (h.xTotal += s),
            (h.yTotal += r),
            (h.xGeohashTotal += i),
            (h.yGeohashTotal += a),
            (h.referenceId = e),
            this._updateStatisticsCursor(t, h, 1)),
          u >= n)
        )
          return void h.add(e);
        const l = Math.ceil((u + 1) / 2),
          p = Math.floor((u + 1) / 2),
          g = 1 - (u % 2),
          m = 30 - (3 * l + 2 * p),
          f = 30 - (2 * l + 3 * p),
          I = (i & ((7 * g + 3 * (1 - g)) << m)) >> m,
          v = (a & ((3 * g + 7 * (1 - g)) << f)) >> f,
          y = I + v * (8 * g + 4 * (1 - g));
        (d = (d << (3 * g + 2 * (1 - g))) | I),
          (c = (c << (2 * g + 3 * (1 - g))) | v),
          h.children[y] == null && (h.children[y] = this._acquire(d, c, u + 1)),
          (u += 1),
          (h = h.children[y]);
      }
    }
    remove(t, e) {
      const s = D.fromOptimizedFeatures([t], this._serviceInfo).getCursor();
      s.next();
      const r = s.readGeometry();
      if (!r) return;
      const [i, a] = r.coords,
        n = t.geohashX,
        o = t.geohashY;
      this.removeCursor(s, i, a, n, o, e);
    }
    removeCursor(t, e, s, r, i, a) {
      let n = this._root,
        o = 0;
      for (; n !== null; ) {
        if (
          ((n.count -= 1),
          (n.xTotal -= e),
          (n.yTotal -= s),
          (n.xGeohashTotal -= r),
          (n.yGeohashTotal -= i),
          this._updateStatisticsCursor(t, n, -1),
          o >= a)
        )
          return void n.remove(t.getDisplayId());
        const h = Math.ceil((o + 1) / 2),
          u = Math.floor((o + 1) / 2),
          d = 1 - (o % 2),
          c = 30 - (3 * h + 2 * u),
          l = 30 - (2 * h + 3 * u),
          p =
            ((r & ((7 * d + 3 * (1 - d)) << c)) >> c) +
            ((i & ((3 * d + 7 * (1 - d)) << l)) >> l) * (8 * d + 4 * (1 - d)),
          g = n.children[p];
        (g == null ? void 0 : g.count) === 1 &&
          (this._release(g), (n.children[p] = null)),
          (o += 1),
          (n = g);
      }
    }
    forEach(t) {
      let e = this._root;
      for (; e !== null; ) {
        const s = this._linkChildren(e) || e.next;
        t(e), (e = s);
      }
    }
    find(t, e, s) {
      return this._root.find(t, e, s, 0, 0, 0);
    }
    findIf(t) {
      let e = null;
      return (
        this.forEach((s) => {
          t(s) && (e = s);
        }),
        e
      );
    }
    findAllIf(t) {
      const e = [];
      return (
        this.forEach((s) => {
          t(s) && e.push(s);
        }),
        e
      );
    }
    findSingleOccupancyNode(t, e, s, r, i) {
      let a = this._root;
      for (; a !== null; ) {
        const n = a.depth,
          o = a.xNode,
          h = a.yNode,
          u = 1 - (n % 2),
          d = a.xGeohashTotal / a.count,
          c = a.yGeohashTotal / a.count;
        if (a.count === 1 && t < d && d <= s && e < c && c <= r) return a;
        if (n >= i) {
          a = a.next;
          continue;
        }
        const l = Math.ceil((n + 1) / 2),
          p = Math.floor((n + 1) / 2),
          g = 30 - (3 * l + 2 * p),
          m = 30 - (2 * l + 3 * p),
          f = ~((1 << g) - 1),
          I = ~((1 << m) - 1),
          v = (t & f) >> g,
          y = (e & I) >> m,
          x = (s & f) >> g,
          b = (r & I) >> m,
          S = o << (3 * u + 2 * (1 - u)),
          w = h << (2 * u + 3 * (1 - u)),
          F = S + 8 * u + 4 * (1 - u),
          q = w + 4 * u + 8 * (1 - u),
          C = Math.max(S, v),
          M = Math.max(w, y),
          k = Math.min(F, x),
          Q = Math.min(q, b);
        let U = null,
          Y = null;
        for (let O = M; O <= Q; O++)
          for (let X = C; X <= k; X++) {
            const N = X - S + (O - w) * (8 * u + 4 * (1 - u)),
              L = a.children[N];
            L &&
              (U || ((U = L), (U.next = a.next)),
              Y && (Y.next = L),
              (Y = L),
              (L.next = a.next));
          }
        a = U || a.next;
      }
      return null;
    }
    getRegionDisplayIds(t) {
      let e = this._root;
      const { bounds: s, geohashBounds: r, level: i } = t,
        [a, n, o, h] = s,
        u = [];
      for (; e !== null; ) {
        const d = e.depth,
          c = e.xNode,
          l = e.yNode;
        if (d >= i) {
          const N = e.xTotal / e.count,
            L = e.yTotal / e.count;
          N >= a &&
            N <= o &&
            L >= n &&
            L <= h &&
            e.displayIds.forEach((J) => u.push(J)),
            (e = e.next);
          continue;
        }
        const p = Math.ceil((d + 1) / 2),
          g = Math.floor((d + 1) / 2),
          m = 1 - (d % 2),
          f = 30 - (3 * p + 2 * g),
          I = 30 - (2 * p + 3 * g),
          v = ~((1 << f) - 1),
          y = ~((1 << I) - 1),
          x = (r.xLL & v) >> f,
          b = (r.yLL & y) >> I,
          S = (r.xTR & v) >> f,
          w = (r.yTR & y) >> I,
          F = c << (3 * m + 2 * (1 - m)),
          q = l << (2 * m + 3 * (1 - m)),
          C = F + 8 * m + 4 * (1 - m),
          M = q + 4 * m + 8 * (1 - m),
          k = Math.max(F, x),
          Q = Math.max(q, b),
          U = Math.min(C, S),
          Y = Math.min(M, w);
        let O = null,
          X = null;
        for (let N = Q; N <= Y; N++)
          for (let L = k; L <= U; L++) {
            const J = L - F + (N - q) * (8 * m + 4 * (1 - m)),
              H = e.children[J];
            H &&
              (O || ((O = H), (O.next = e.next)),
              X && (X.next = H),
              (X = H),
              (H.next = e.next));
          }
        e = O || e.next;
      }
      return u;
    }
    getRegionStatistics(t) {
      let e = this._root,
        s = 0,
        r = 0,
        i = 0;
      const a = {},
        { bounds: n, geohashBounds: o, level: h } = t,
        [u, d, c, l] = n;
      let p = 0;
      for (; e !== null; ) {
        const g = e.depth,
          m = e.xNode,
          f = e.yNode;
        if (g >= h) {
          const W = e.xTotal / e.count,
            $ = e.yTotal / e.count;
          W > u &&
            W <= c &&
            $ > d &&
            $ <= l &&
            ((s += e.count),
            (r += e.xTotal),
            (i += e.yTotal),
            e.count === 1 && (p = e.referenceId),
            this._aggregateStatistics(a, e.statistics)),
            (e = e.next);
          continue;
        }
        const I = Math.ceil((g + 1) / 2),
          v = Math.floor((g + 1) / 2),
          y = 1 - (g % 2),
          x = 30 - (3 * I + 2 * v),
          b = 30 - (2 * I + 3 * v),
          S = ~((1 << x) - 1),
          w = ~((1 << b) - 1),
          F = (o.xLL & S) >> x,
          q = (o.yLL & w) >> b,
          C = (o.xTR & S) >> x,
          M = (o.yTR & w) >> b,
          k = m << (3 * y + 2 * (1 - y)),
          Q = f << (2 * y + 3 * (1 - y)),
          U = k + 8 * y + 4 * (1 - y),
          Y = Q + 4 * y + 8 * (1 - y),
          O = Math.max(k, F),
          X = Math.max(Q, q),
          N = Math.min(U, C),
          L = Math.min(Y, M);
        let J = null,
          H = null;
        for (let W = X; W <= L; W++)
          for (let $ = O; $ <= N; $++) {
            const mt = $ - k + (W - Q) * (8 * y + 4 * (1 - y)),
              P = e.children[mt];
            if (P) {
              if (W !== X && W !== L && $ !== O && $ !== N) {
                const Pe = P.xTotal / P.count,
                  Ge = P.yTotal / P.count;
                Pe > u &&
                  Pe <= c &&
                  Ge > d &&
                  Ge <= l &&
                  ((s += P.count),
                  (r += P.xTotal),
                  (i += P.yTotal),
                  P.count === 1 && (p = P.referenceId),
                  this._aggregateStatistics(a, P.statistics));
                continue;
              }
              J || ((J = P), (J.next = e.next)),
                H && (H.next = P),
                (H = P),
                (P.next = e.next);
            }
          }
        e = J || e.next;
      }
      return {
        count: s,
        attributes: this.normalizeStatistics(a, s),
        xTotal: r,
        yTotal: i,
        referenceId: p,
      };
    }
    getBins(t) {
      const e = [],
        { geohashBounds: s, level: r } = t;
      let i = this._root;
      for (; i !== null; ) {
        const a = i.depth,
          n = i.xNode,
          o = i.yNode;
        if (a >= r) {
          e.push(i), (i = i.next);
          continue;
        }
        const h = Math.ceil((a + 1) / 2),
          u = Math.floor((a + 1) / 2),
          d = 1 - (a % 2),
          c = 30 - (3 * h + 2 * u),
          l = 30 - (2 * h + 3 * u),
          p = ~((1 << c) - 1),
          g = ~((1 << l) - 1),
          m = (s.xLL & p) >> c,
          f = (s.yLL & g) >> l,
          I = (s.xTR & p) >> c,
          v = (s.yTR & g) >> l,
          y = n << (3 * d + 2 * (1 - d)),
          x = o << (2 * d + 3 * (1 - d)),
          b = y + 8 * d + 4 * (1 - d),
          S = x + 4 * d + 8 * (1 - d),
          w = Math.max(y, m),
          F = Math.max(x, f),
          q = Math.min(b, I),
          C = Math.min(S, v);
        let M = null,
          k = null;
        for (let Q = F; Q <= C; Q++)
          for (let U = w; U <= q; U++) {
            const Y = U - y + (Q - x) * (8 * d + 4 * (1 - d)),
              O = i.children[Y];
            O &&
              (M || ((M = O), (M.next = i.next)),
              k && (k.next = O),
              (k = O),
              (O.next = i.next));
          }
        i = M || i.next;
      }
      return e;
    }
    _linkChildren(t) {
      let e = null,
        s = null;
      for (let r = 0; r <= t.children.length; r++) {
        const i = t.children[r];
        i &&
          (e || ((e = i), (e.next = t.next)),
          s && (s.next = i),
          (s = i),
          (i.next = t.next));
      }
      return e;
    }
    _updateStatisticsCursor(t, e, s) {
      for (const r of this._statisticFields) {
        const i = r.name,
          a = r.inField
            ? t.readAttribute(r.inField)
            : t.getComputedNumericAtIndex(r.inFieldIndex);
        switch (r.statisticType) {
          case "min": {
            if (isNaN(a)) break;
            if (!e.statistics[i]) {
              e.statistics[i] = { value: a };
              break;
            }
            const n = e.statistics[i].value;
            e.statistics[i].value = Math.min(n, a);
            break;
          }
          case "max": {
            if (isNaN(a)) break;
            if (!e.statistics[i]) {
              e.statistics[i] = { value: a };
              break;
            }
            const n = e.statistics[i].value;
            e.statistics[i].value = Math.max(n, a);
            break;
          }
          case "count":
            break;
          case "sum":
          case "avg": {
            e.statistics[i] || (e.statistics[i] = { value: 0, nanCount: 0 });
            const n = e.statistics[i].value,
              o = e.statistics[i].nanCount ?? 0;
            a == null || isNaN(a)
              ? (e.statistics[i].nanCount = o + s)
              : (e.statistics[i].value = n + s * a);
            break;
          }
          case "avg_angle": {
            e.statistics[i] || (e.statistics[i] = { x: 0, y: 0, nanCount: 0 });
            const n = e.statistics[i].x,
              o = e.statistics[i].y,
              h = e.statistics[i].nanCount ?? 0,
              u = Math.PI / 180;
            a == null || isNaN(a)
              ? (e.statistics[i].nanCount = h + s)
              : ((e.statistics[i].x = n + s * Math.cos(a * u)),
                (e.statistics[i].y = o + s * Math.sin(a * u)));
            break;
          }
          case "mode": {
            e.statistics[i] || (e.statistics[i] = {});
            const n = e.statistics[i][a] || 0;
            e.statistics[i][a] = n + s;
            break;
          }
        }
      }
    }
    _aggregateStatistics(t, e) {
      for (const s of this._statisticFields) {
        const r = s.name;
        switch (s.statisticType) {
          case "min": {
            if (!t[r]) {
              t[r] = { value: e[r].value };
              break;
            }
            const i = t[r].value;
            t[r].value = Math.min(i, e[r].value);
            break;
          }
          case "max": {
            if (!t[r]) {
              t[r] = { value: e[r].value };
              break;
            }
            const i = t[r].value;
            t[r].value = Math.max(i, e[r].value);
            break;
          }
          case "count":
            break;
          case "sum":
          case "avg":
          case "avg_angle":
          case "mode":
            t[r] || (t[r] = {});
            for (const i in e[r]) {
              const a = t[r][i] || 0;
              t[r][i] = a + e[r][i];
            }
        }
      }
    }
    normalizeStatistics(t, e) {
      const s = {};
      for (const r of this._statisticFields) {
        const i = r.name;
        switch (r.statisticType) {
          case "min":
          case "max": {
            const a = t[i];
            if (!e || !a) break;
            s[i] = a.value;
            break;
          }
          case "count":
            if (!e) break;
            s[i] = e;
            break;
          case "sum": {
            if (!e) break;
            const { value: a, nanCount: n } = t[i];
            if (!(e - n)) break;
            s[i] = a;
            break;
          }
          case "avg": {
            if (!e) break;
            const { value: a, nanCount: n } = t[i];
            if (!(e - n)) break;
            s[i] = a / (e - n);
            break;
          }
          case "avg_angle": {
            if (!e) break;
            const { x: a, y: n, nanCount: o } = t[i];
            if (!(e - o)) break;
            const h = a / (e - o),
              u = n / (e - o),
              d = 180 / Math.PI,
              c = Math.atan2(u, h) * d;
            s[i] = c;
            break;
          }
          case "mode": {
            const a = t[i];
            let n = 0,
              o = 0,
              h = null;
            for (const u in a) {
              const d = a[u];
              d === n ? (o += 1) : d > n && ((n = d), (o = 1), (h = u));
            }
            s[i] = h === "null" || o > 1 ? null : h;
            break;
          }
        }
      }
      return s;
    }
  },
  Se = class {
    constructor(t, e, s, r) {
      (this.count = 0),
        (this.xTotal = 0),
        (this.yTotal = 0),
        (this.statistics = {}),
        (this.displayId = 0),
        (this.referenceId = 0),
        (this.displayIds = new Set()),
        (this.next = null),
        (this.depth = 0),
        (this.xNode = 0),
        (this.yNode = 0),
        (this.xGeohashTotal = 0),
        (this.yGeohashTotal = 0),
        (this._tree = t),
        (this.children = new Array(32));
      for (let i = 0; i < this.children.length; i++) this.children[i] = null;
      (this.xNode = e), (this.yNode = s), (this.depth = r);
    }
    realloc(t, e, s) {
      for (let r = 0; r < this.children.length; r++) this.children[r] = null;
      return (
        (this.xNode = t),
        (this.yNode = e),
        (this.depth = s),
        (this.next = null),
        (this.xGeohashTotal = 0),
        (this.yGeohashTotal = 0),
        (this.displayId = 0),
        (this.referenceId = 0),
        (this.xTotal = 0),
        (this.yTotal = 0),
        (this.count = 0),
        (this.statistics = {}),
        this.displayIds.clear(),
        this
      );
    }
    get id() {
      return `${this.xNode}.${this.yNode}`;
    }
    add(t) {
      this.displayIds.add(t);
    }
    remove(t) {
      this.displayIds.delete(t);
    }
    getAttributes() {
      const t = this._tree.normalizeStatistics(this.statistics, this.count);
      return (
        (t.referenceId = null),
        (t.aggregateId = this.id),
        (t.aggregateCount = this.count),
        t
      );
    }
    getGeometry(t, e) {
      const s = this.getLngLatBounds(),
        [r, i, a, n] = s,
        o = ne(
          {
            rings: [
              [
                [r, i],
                [r, n],
                [a, n],
                [a, i],
                [r, i],
              ],
            ],
          },
          ee.WGS84,
          t
        ),
        h = Ue(new B(), o, !1, !1);
      return _(e)
        ? Ce(new B(), h, !1, !1, "esriGeometryPolygon", e, !1, !1)
        : h;
    }
    getGeometryCentroid(t, e) {
      const s = this.getLngLatBounds(),
        [r, i, a, n] = s,
        o = ne({ x: (r + a) / 2, y: (i + n) / 2 }, ee.WGS84, t),
        h = Gt(new B(), o);
      return _(e) ? Ce(new B(), h, !1, !1, "esriGeometryPoint", e, !1, !1) : h;
    }
    getLngLatBounds() {
      const t = this.depth,
        e = Math.ceil(t / 2),
        s = Math.floor(t / 2),
        r = 30 - (3 * e + 2 * s),
        i = 30 - (2 * e + 3 * s);
      return (function (a, n) {
        let o = -90,
          h = 90,
          u = -180,
          d = 180;
        for (let c = 0; c < n; c++) {
          const l = Math.ceil((c + 1) / 2),
            p = Math.floor((c + 1) / 2),
            g = 1 - (c % 2),
            m = 30 - (3 * l + 2 * p),
            f = 30 - (2 * l + 3 * p),
            I = 3 * g + 2 * (1 - g),
            v = 2 * g + 3 * (1 - g),
            y = (3 * g + 7 * (1 - g)) << f,
            x = (((7 * g + 3 * (1 - g)) << m) & a.geohashX) >> m,
            b = (y & a.geohashY) >> f;
          for (let S = I - 1; S >= 0; S--) {
            const w = (u + d) / 2,
              F = x & (1 << S) ? 1 : 0;
            (u = (1 - F) * u + F * w), (d = (1 - F) * w + F * d);
          }
          for (let S = v - 1; S >= 0; S--) {
            const w = (o + h) / 2,
              F = b & (1 << S) ? 1 : 0;
            (o = (1 - F) * o + F * w), (h = (1 - F) * w + F * h);
          }
        }
        return [u, o, d, h];
      })({ geohashX: this.xNode << r, geohashY: this.yNode << i }, this.depth);
    }
    find(t, e, s, r, i, a) {
      if (r >= s) return this;
      const n = 1 - (r % 2),
        o = 3 * n + 2 * (1 - n),
        h = 2 * n + 3 * (1 - n),
        u = 30 - i - o,
        d = 30 - a - h,
        c =
          ((t & ((7 * n + 3 * (1 - n)) << u)) >> u) +
          ((e & ((3 * n + 7 * (1 - n)) << d)) >> d) * (8 * n + 4 * (1 - n)),
        l = this.children[c];
      return l == null ? null : l.find(t, e, s, r + 1, i + o, a + h);
    }
  };
const we = he.getLogger("esri.view.2d.layers.features.support.BinStore"),
  ws = nt();
function $e(t) {
  return 57.29577951308232 * t;
}
let Fs = class extends ct {
  constructor(t, e, s, r) {
    super(t, s),
      (this.type = "bin"),
      (this.events = new Ae()),
      (this.objectIdField = "aggregateId"),
      (this.featureAdapter = lt),
      (this._geohashLevel = 5),
      (this._geohashBuf = []),
      (this._serviceInfo = r),
      (this.geometryInfo = t.geometryInfo),
      (this._spatialReference = e),
      (this._projectionSupportCheck = pt(e, ee.WGS84)),
      (this._bitsets.geohash = s.getBitset(s.createBitset())),
      (this._bitsets.inserted = s.getBitset(s.createBitset()));
  }
  destroy() {
    this._tree && this._tree.destroy();
  }
  get featureSpatialReference() {
    return this._spatialReference;
  }
  get fields() {
    return this._fields;
  }
  async updateSchema(t, e) {
    const s = this._schema;
    try {
      await super.updateSchema(t, e), await this._projectionSupportCheck;
    } catch {}
    this._fields = this._schema.params.fields;
    const r = le(s, e);
    e && (!T(r) || t.source || t.storage.filters)
      ? ((ge(r, "params.fields") ||
          ge(r, "params") ||
          !this._tree ||
          t.source) &&
          (this._tree && this._tree.destroy(),
          (this._tree = new _t(this._statisticFields, this._serviceInfo)),
          (this._tree.onRelease = (i) =>
            i.displayId && this._storage.releaseDisplayId(i.displayId)),
          (this._geohashLevel = this._schema.params.fixedBinLevel),
          this._rebuildTree(),
          E("esri-2d-update-debug") &&
            we.info("Aggregate mesh needs update due to tree changing")),
        E("esri-2d-update-debug") &&
          we.info("Aggregate mesh needs update due to tree changing"),
        (t.targets[e.name] = !0),
        (t.mesh = !1))
      : s && (t.mesh = !0);
  }
  clear() {
    this._rebuildTree();
  }
  sweepFeatures(t, e) {
    this._bitsets.inserted.forEachSet((s) => {
      if (!t.has(s)) {
        const r = e.lookupByDisplayIdUnsafe(s);
        this._remove(r);
      }
    });
  }
  sweepAggregates(t, e, s) {}
  onTileData(t, e, s, r, i = !0) {
    if (!this._schema || T(e.addOrUpdate)) return e;
    this.events.emit("changed");
    const a = this._getTransforms(t, this._spatialReference);
    {
      const o = e.addOrUpdate.getCursor();
      for (; o.next(); ) this._update(o, r);
    }
    if (e.status.mesh || !i) return e;
    const n = [];
    this._getBinsForTile(n, t, a, s),
      (e.addOrUpdate = D.fromOptimizedFeatures(n, {
        ...this._serviceInfo,
        geometryType: "esriGeometryPolygon",
      })),
      e.addOrUpdate.attachStorage(s),
      (e.end = !0),
      e.isRepush || (e.clear = !0);
    {
      const o = e.addOrUpdate.getCursor();
      for (; o.next(); ) {
        const h = o.getDisplayId();
        this._bitsets.computed.unset(h),
          this.setComputedAttributes(s, o, h, t.scale);
      }
    }
    return e;
  }
  forEachBin(t) {
    this._tree.forEach(t);
  }
  forEach(t) {
    this._tree.forEach((e) => {
      if (e.depth !== this._geohashLevel) return;
      const s = this._toFeatureJSON(e),
        r = D.fromFeatures([s], {
          objectIdField: this.objectIdField,
          globalIdField: null,
          geometryType: this.geometryInfo.geometryType,
          fields: this.fields,
        }).getCursor();
      r.next(), t(r);
    });
  }
  forEachInBounds(t, e) {}
  forEachBounds(t, e) {
    const { hasM: s, hasZ: r } = this.geometryInfo;
    for (const i of t) {
      const a = ot(ws, i.readGeometry(), r, s);
      T(a) || e(a);
    }
  }
  onTileUpdate(t) {}
  getAggregate(t) {
    const e = es(t, !0),
      s = this._tree.findIf((r) => r.displayId === e);
    return se(s, (r) => this._toFeatureJSON(r));
  }
  getAggregates() {
    return this._tree
      .findAllIf((t) => t.depth === this._geohashLevel)
      .map(this._toFeatureJSON.bind(this));
  }
  getDisplayId(t) {
    const e = this._tree.findIf((s) => s.id === t);
    return se(e, (s) => s.displayId);
  }
  getFeatureDisplayIdsForAggregate(t) {
    const e = this._tree.findIf((s) => s.id === t);
    return at(e, [], (s) => Array.from(s.displayIds));
  }
  getDisplayIdForReferenceId(t) {
    const e = this._tree.findIf(
      (s) => s.displayIds.size === 1 && s.displayIds.has(t)
    );
    return se(e, (s) => s.displayId);
  }
  _toFeatureJSON(t) {
    const e = this._spatialReference;
    return {
      displayId: t.displayId,
      attributes: t.getAttributes(),
      geometry: Ee(t.getGeometry(e), "esriGeometryPolygon", !1, !1),
      centroid: null,
    };
  }
  _rebuildTree() {
    this._bitsets.computed.clear(),
      this._bitsets.inserted.clear(),
      this._tree && this._tree.clear();
  }
  _remove(t) {
    const e = t.getDisplayId(),
      s = t.getXHydrated(),
      r = t.getYHydrated(),
      i = this._geohashBuf[2 * e],
      a = this._geohashBuf[2 * e + 1];
    this._bitsets.inserted.has(e) &&
      (this._bitsets.inserted.unset(e),
      this._tree.removeCursor(t, s, r, i, a, this._geohashLevel));
  }
  _update(t, e) {
    const s = t.getDisplayId(),
      r = this._bitsets.inserted,
      i = e.isVisible(s);
    if (i === r.has(s)) return;
    if (!i) return void this._remove(t);
    const a = t.getXHydrated(),
      n = t.getYHydrated();
    if (!this._setGeohash(s, a, n)) return;
    const o = this._geohashBuf[2 * s],
      h = this._geohashBuf[2 * s + 1];
    this._tree.insertCursor(t, s, a, n, o, h, this._geohashLevel), r.set(s);
  }
  _setGeohash(t, e, s) {
    if (this._bitsets.geohash.has(t)) return !0;
    const r = this._geohashBuf;
    if (this._spatialReference.isWebMercator) {
      const i = $e(e / K.radius),
        a = i - 360 * Math.floor((i + 180) / 360);
      fe(r, t, $e(Math.PI / 2 - 2 * Math.atan(Math.exp(-s / K.radius))), a, 12);
    } else {
      const i = ne({ x: e, y: s }, this._spatialReference, ee.WGS84);
      if (!i) return !1;
      fe(r, t, i.y, i.x, 12);
    }
    return this._bitsets.geohash.set(t), !0;
  }
  _getBinsForTile(t, e, s, r) {
    try {
      const i = this._getGeohashBounds(e),
        a = this._tree.getBins(i);
      for (const n of a) {
        n.displayId || (n.displayId = r.createDisplayId(!0));
        let o = null;
        const h = n.getGeometry(this._spatialReference, s.tile);
        h || (o = n.getGeometryCentroid(this._spatialReference, s.tile));
        const u = new qe(h, n.getAttributes(), o);
        (u.objectId = n.id), (u.displayId = n.displayId), t.push(u);
      }
    } catch {
      return void we.error("Unable to get bins for tile", e.key.id);
    }
  }
  _getGeohash(t, e, s) {
    const r = { geohashX: 0, geohashY: 0 };
    return ce(r, e, t, s), r;
  }
  _getGeohashBounds(t) {
    const e = this._getGeohashLevel(t.key.level),
      s = [t.extent.xmin, t.extent.ymin, t.extent.xmax, t.extent.ymax],
      r = ht.fromExtent(ut.fromBounds(s, this._spatialReference)),
      i = ne(r, this._spatialReference, ee.WGS84, {
        densificationStep: 64 * t.resolution,
      }),
      a = Ue(new B(), i, !1, !1),
      n = a.coords.filter((g, m) => !(m % 2)),
      o = a.coords.filter((g, m) => m % 2),
      h = Math.min(...n),
      u = Math.min(...o),
      d = Math.max(...n),
      c = Math.max(...o),
      l = this._getGeohash(h, u, e),
      p = this._getGeohash(d, c, e);
    return {
      bounds: s,
      geohashBounds: {
        xLL: l.geohashX,
        yLL: l.geohashY,
        xTR: p.geohashX,
        yTR: p.geohashY,
      },
      level: e,
    };
  }
  _getGeohashLevel(t) {
    return this._schema.params.fixedBinLevel;
  }
  _getTransforms(t, e) {
    const s = {
        originPosition: "upperLeft",
        scale: [t.resolution, t.resolution],
        translate: [t.bounds[0], t.bounds[3]],
      },
      r = dt(e);
    if (!r) return { tile: s, left: null, right: null };
    const [i, a] = r.valid;
    return {
      tile: s,
      left: { ...s, translate: [a, t.bounds[3]] },
      right: { ...s, translate: [i - a + t.bounds[0], t.bounds[3]] },
    };
  }
};
const Ts = nt();
let Cs = class yt extends Qt {
  constructor(e, s, r, i, a) {
    super(new B([], [s, r]), i, null, e), (this.geohashBoundsInfo = a);
  }
  get count() {
    return this.attributes.cluster_count;
  }
  static create(e, s, r, i, a, n, o, h) {
    const u = new yt(s, r, i, n, o);
    return (
      (u.displayId = e.createDisplayId(!0)),
      (u.referenceId = h),
      (u.tileLevel = a),
      u
    );
  }
  update(e, s, r, i, a, n) {
    return (
      (this.geometry.coords[0] = e),
      (this.geometry.coords[1] = s),
      (this.tileLevel = r),
      (this.attributes = i),
      (this.geohashBoundsInfo = a),
      (this.referenceId = null),
      (this.referenceId = n),
      this
    );
  }
  toJSON() {
    return {
      attributes: {
        ...this.attributes,
        aggregateId: this.objectId,
        referenceId:
          this.attributes.cluster_count === 1 ? this.referenceId : null,
      },
      geometry: { x: this.geometry.coords[0], y: this.geometry.coords[1] },
    };
  }
};
function ie(t) {
  return 57.29577951308232 * t;
}
class Ms extends ct {
  constructor(e, s, r, i) {
    super(e, r),
      (this.type = "cluster"),
      (this.events = new Ae()),
      (this.objectIdField = "aggregateId"),
      (this.featureAdapter = lt),
      (this._geohashLevel = 0),
      (this._tileLevel = 0),
      (this._aggregateValueRanges = {}),
      (this._aggregateValueRangesChanged = !1),
      (this._geohashBuf = []),
      (this._clusters = new Map()),
      (this._tiles = new Map()),
      (this._serviceInfo = i),
      (this.geometryInfo = e.geometryInfo),
      (this._spatialReference = s),
      (this._projectionSupportCheck = pt(s, ee.WGS84)),
      (this._bitsets.geohash = r.getBitset(r.createBitset())),
      (this._bitsets.inserted = r.getBitset(r.createBitset()));
  }
  destroy() {
    this._tree.destroy();
  }
  get featureSpatialReference() {
    return this._spatialReference;
  }
  get fields() {
    return this._fields;
  }
  async updateSchema(e, s) {
    const r = this._schema;
    try {
      await super.updateSchema(e, s), await this._projectionSupportCheck;
    } catch {}
    this._fields = this._schema.params.fields;
    const i = le(r, s);
    s && (!T(i) || e.source || e.storage.filters)
      ? ((ge(i, "params.fields") || !this._tree || e.source) &&
          (this._tree && this._tree.destroy(),
          (this._tree = new _t(this._statisticFields, this._serviceInfo)),
          this._rebuildTree(),
          E("esri-2d-update-debug")),
        E("esri-2d-update-debug"),
        (e.targets[s.name] = !0),
        (e.mesh = !1),
        (this._aggregateValueRanges = {}))
      : r && (e.mesh = !0);
  }
  clear() {
    this._rebuildTree();
  }
  sweepFeatures(e, s) {
    this._bitsets.inserted.forEachSet((r) => {
      if (!e.has(r)) {
        const i = s.lookupByDisplayIdUnsafe(r);
        this._remove(i);
      }
    });
  }
  sweepAggregates(e, s, r) {
    this._clusters.forEach((i, a) => {
      i &&
        i.tileLevel !== r &&
        (e.releaseDisplayId(i.displayId),
        s.unsetAttributeData(i.displayId),
        this._clusters.delete(a));
    });
  }
  onTileData(e, s, r, i, a = !0) {
    if (!this._schema || T(s.addOrUpdate)) return s;
    this.events.emit("changed");
    const n = this._getTransforms(e, this._spatialReference);
    {
      const u = s.addOrUpdate.getCursor();
      for (; u.next(); ) this._update(u, i);
    }
    if (s.status.mesh || !a) return s;
    const o = [],
      h = this._schema.params.clusterRadius;
    this._getClustersForTile(o, e, h, r, n),
      (s.addOrUpdate = D.fromOptimizedFeatures(o, this._serviceInfo)),
      s.addOrUpdate.attachStorage(r),
      (s.clear = !0),
      (s.end = !0);
    {
      const u = s.addOrUpdate.getCursor();
      for (; u.next(); ) {
        const d = u.getDisplayId();
        this._bitsets.computed.unset(d),
          this.setComputedAttributes(r, u, d, e.scale);
      }
    }
    return (
      this._aggregateValueRangesChanged &&
        s.end &&
        (this.events.emit("valueRangesChanged", {
          valueRanges: this._aggregateValueRanges,
        }),
        (this._aggregateValueRangesChanged = !1)),
      s
    );
  }
  onTileUpdate({ added: e, removed: s }) {
    if (e.length) {
      const i = e[0].level;
      (this._tileLevel = i), this._setGeohashLevel(i);
    }
    if (!this._schema) return;
    const r = this._schema.params.clusterRadius;
    s.forEach((i) => {
      this._tiles.delete(i.key.id), this._markTileClustersForDeletion(i, r);
    });
  }
  getAggregate(e) {
    for (const s of this._clusters.values())
      if (((s == null ? void 0 : s.displayId) & Ve) == (e & Ve))
        return s.toJSON();
    return null;
  }
  getAggregates() {
    const e = [];
    for (const s of this._clusters.values())
      (s == null ? void 0 : s.tileLevel) === this._tileLevel &&
        e.push(s.toJSON());
    return e;
  }
  getDisplayId(e) {
    const s = this._clusters.get(e);
    return s ? s.displayId : null;
  }
  getFeatureDisplayIdsForAggregate(e) {
    const s = this._clusters.get(e);
    return s ? this._tree.getRegionDisplayIds(s.geohashBoundsInfo) : [];
  }
  getDisplayIdForReferenceId(e) {
    for (const s of this._clusters.values())
      if ((s == null ? void 0 : s.referenceId) === e) return s.displayId;
    return null;
  }
  getAggregateValueRanges() {
    return this._aggregateValueRanges;
  }
  forEach(e) {
    this._clusters.forEach((s) => {
      if (!s) return;
      const r = s.toJSON(),
        i = D.fromFeatures([r], {
          objectIdField: this.objectIdField,
          globalIdField: null,
          geometryType: this.geometryInfo.geometryType,
          fields: this.fields,
        }).getCursor();
      i.next(), e(i);
    });
  }
  forEachInBounds(e, s) {}
  forEachBounds(e, s) {
    const { hasM: r, hasZ: i } = this.geometryInfo;
    for (const a of e) {
      const n = ot(Ts, a.readGeometry(), i, r);
      T(n) || s(n);
    }
  }
  size() {
    let e = 0;
    return this.forEach((s) => e++), e;
  }
  _rebuildTree() {
    this._bitsets.computed.clear(),
      this._bitsets.inserted.clear(),
      this._tree && this._tree.clear();
  }
  _remove(e) {
    const s = e.getDisplayId(),
      r = e.getXHydrated(),
      i = e.getYHydrated(),
      a = this._geohashBuf[2 * s],
      n = this._geohashBuf[2 * s + 1];
    this._bitsets.inserted.has(s) &&
      (this._bitsets.inserted.unset(s),
      this._tree.removeCursor(e, r, i, a, n, this._geohashLevel));
  }
  _update(e, s) {
    const r = e.getDisplayId(),
      i = this._bitsets.inserted,
      a = s.isVisible(r);
    if (a === i.has(r)) return;
    if (!a) return void this._remove(e);
    const n = e.getXHydrated(),
      o = e.getYHydrated();
    if (!this._setGeohash(r, n, o)) return;
    const h = this._geohashBuf[2 * r],
      u = this._geohashBuf[2 * r + 1];
    this._tree.insertCursor(e, r, n, o, h, u, this._geohashLevel), i.set(r);
  }
  _setGeohash(e, s, r) {
    if (this._bitsets.geohash.has(e)) return !0;
    const i = this._geohashBuf;
    if (this._spatialReference.isWebMercator) {
      const a = ie(s / K.radius),
        n = a - 360 * Math.floor((a + 180) / 360);
      fe(i, e, ie(Math.PI / 2 - 2 * Math.atan(Math.exp(-r / K.radius))), n, 12);
    } else {
      const a = ne({ x: s, y: r }, this._spatialReference, ee.WGS84);
      if (!a) return !1;
      fe(i, e, a.y, a.x, 12);
    }
    return this._bitsets.geohash.set(e), !0;
  }
  _getClustersForTile(e, s, r, i, a, n = !0) {
    const o = this._schema.params.clusterPixelBuffer,
      h = 2 * r,
      u = Math.ceil((2 ** s.key.level * z) / h) + 1,
      d = Math.ceil(o / h) + 0,
      c = Math.ceil(z / h),
      { row: l, col: p } = s.key,
      g = p * z,
      m = l * z,
      f = Math.floor(g / h) - d,
      I = Math.floor(m / h) - d,
      v = f + c + 2 * d,
      y = I + c + 2 * d,
      x = s.tileInfoView.getLODInfoAt(s.key.level);
    for (let b = f; b <= v; b++)
      for (let S = I; S <= y; S++) {
        let w = b;
        x.wrap && (w = b < 0 ? b + u : b % u);
        const F = x.wrap && b < 0,
          q = x.wrap && b % u !== b,
          C = this._lookupCluster(i, x, s.key.level, w, S, s);
        if (_(C)) {
          const M = se(a, (k) => (F ? k.left : q ? k.right : k.tile));
          if ((n && T(M)) || !C.count) continue;
          if (_(M) && n) {
            const k = C.geometry.clone();
            let Q = C.attributes;
            (k.coords[0] = rt(M, k.coords[0])),
              (k.coords[1] = it(M, k.coords[1])),
              C.count === 1 &&
                _(C.referenceId) &&
                (Q = { ...C.attributes, referenceId: C.referenceId });
            const U = new qe(k, Q);
            (U.displayId = C.displayId), e.push(U);
          }
        }
      }
  }
  _getGeohashLevel(e) {
    return Math.min(Math.ceil(e / 2 + 2), 12);
  }
  _setGeohashLevel(e) {
    const s = this._getGeohashLevel(e),
      r = 1 * (Math.floor(s / 1) + 1) - 1;
    if (this._geohashLevel !== r)
      return (
        (this._geohashLevel = r),
        this._rebuildTree(),
        void this._bitsets.geohash.clear()
      );
  }
  _getTransforms(e, s) {
    const r = {
        originPosition: "upperLeft",
        scale: [e.resolution, e.resolution],
        translate: [e.bounds[0], e.bounds[3]],
      },
      i = dt(s);
    if (!i) return { tile: r, left: null, right: null };
    const [a, n] = i.valid;
    return {
      tile: r,
      left: { ...r, translate: [n, e.bounds[3]] },
      right: { ...r, translate: [a - n + e.bounds[0], e.bounds[3]] },
    };
  }
  _getClusterId(e, s, r) {
    return ((15 & e) << 28) | ((16383 & s) << 14) | (16383 & r);
  }
  _markForDeletion(e, s, r) {
    const i = this._getClusterId(e, s, r);
    this._clusters.delete(i);
  }
  _getClusterBounds(e, s, r) {
    const i = this._schema.params.clusterRadius,
      a = 2 * i;
    let n = r % 2 ? s * a : s * a - i;
    const o = r * a;
    let h = n + a;
    const u = o - a,
      d = 2 ** e.level * z;
    e.wrap && n < 0 && (n = 0), e.wrap && h > d && (h = d);
    const c = n / z,
      l = o / z,
      p = h / z,
      g = u / z;
    return [
      e.getXForColumn(c),
      e.getYForRow(l),
      e.getXForColumn(p),
      e.getYForRow(g),
    ];
  }
  _getGeohash(e, s, r) {
    const i = { geohashX: 0, geohashY: 0 };
    return ce(i, s, e, r), i;
  }
  _getGeohashBounds(e, s) {
    const r = this._getGeohashLevel(e.key.level);
    if (this._spatialReference.isWebMercator) {
      const [m, f, I, v] = s,
        y = { x: m, y: f },
        x = { x: I, y: v };
      let b = 0,
        S = 0,
        w = 0,
        F = 0;
      {
        const M = ie(y.x / K.radius);
        (b = M - 360 * Math.floor((M + 180) / 360)),
          (S = ie(Math.PI / 2 - 2 * Math.atan(Math.exp(-y.y / K.radius))));
      }
      {
        const M = ie(x.x / K.radius);
        (w = M - 360 * Math.floor((M + 180) / 360)),
          (F = ie(Math.PI / 2 - 2 * Math.atan(Math.exp(-x.y / K.radius))));
      }
      const q = { geohashX: 0, geohashY: 0 },
        C = { geohashX: 0, geohashY: 0 };
      return (
        ce(q, S, b, r),
        ce(C, F, w, r),
        {
          bounds: [m, f, I, v],
          geohashBounds: {
            xLL: q.geohashX,
            yLL: q.geohashY,
            xTR: C.geohashX,
            yTR: C.geohashY,
          },
          level: r,
        }
      );
    }
    const i = ht.fromExtent(ut.fromBounds(s, this._spatialReference)),
      a = ne(i, this._spatialReference, ee.WGS84, {
        densificationStep: 64 * e.resolution,
      });
    if (!a) return null;
    const n = Ue(new B(), a, !1, !1),
      o = n.coords.filter((m, f) => !(f % 2)),
      h = n.coords.filter((m, f) => f % 2),
      u = Math.min(...o),
      d = Math.min(...h),
      c = Math.max(...o),
      l = Math.max(...h),
      p = this._getGeohash(u, d, r),
      g = this._getGeohash(c, l, r);
    return {
      bounds: s,
      geohashBounds: {
        xLL: p.geohashX,
        yLL: p.geohashY,
        xTR: g.geohashX,
        yTR: g.geohashY,
      },
      level: r,
    };
  }
  _lookupCluster(e, s, r, i, a, n) {
    const o = this._getClusterId(r, i, a),
      h = this._clusters.get(o),
      u = this._getClusterBounds(s, i, a),
      d = this._getGeohashBounds(n, u);
    if (T(d)) return null;
    const c = this._tree.getRegionStatistics(d),
      { count: l, xTotal: p, yTotal: g, referenceId: m } = c,
      f = l ? p / l : 0,
      I = l ? g / l : 0;
    if (l === 0) return this._clusters.set(o, null), null;
    const v = { cluster_count: l, ...c.attributes },
      y = _(h) ? h.update(f, I, r, v, d, m) : Cs.create(e, o, f, I, r, v, d, m);
    if (l === 0) {
      const [x, b, S, w] = u;
      (y.geometry.coords[0] = (x + S) / 2),
        (y.geometry.coords[1] = (b + w) / 2);
    }
    return (
      this._clusters.set(o, y),
      this._updateAggregateValueRangeForCluster(y, y.tileLevel),
      y
    );
  }
  _updateAggregateValueRangeForCluster(e, s) {
    const r = this._aggregateValueRanges[s] || { minValue: 1 / 0, maxValue: 0 },
      i = r.minValue,
      a = r.maxValue;
    (r.minValue = Math.min(i, e.count)),
      (r.maxValue = Math.max(a, e.count)),
      (this._aggregateValueRanges[s] = r),
      (i === r.minValue && a === r.maxValue) ||
        (this._aggregateValueRangesChanged = !0);
  }
  _markTileClustersForDeletion(e, s) {
    const r = 2 * s,
      i = Math.ceil(z / r),
      { row: a, col: n } = e.key,
      o = n * z,
      h = a * z,
      u = Math.floor(o / r),
      d = Math.floor(h / r);
    for (let c = u; c < u + i; c++)
      for (let l = d; l < d + i; l++) this._markForDeletion(e.key.level, c, l);
  }
}
function Z(t) {
  if (
    !ye(t) &&
    !(function (e) {
      return e.name === "worker:port-closed";
    })(t)
  )
    throw t;
}
function Ke(t) {
  return t.type === "feature" && t.mode === "snapshot";
}
let V = class extends tt {
  constructor() {
    super(...arguments),
      (this._storage = new Wt()),
      (this._markedIdsBufId = this._storage.createBitset()),
      (this._lastCleanup = performance.now()),
      (this._cleanupNeeded = !1),
      (this._invalidated = !1),
      (this._tileToResolver = new Map()),
      (this._didEdit = !1),
      (this._updateVersion = 1),
      (this.tileStore = null),
      (this.config = null),
      (this.processor = null),
      (this.remoteClient = null),
      (this.service = null);
  }
  initialize() {
    this._initStores(),
      this._initSource(),
      (this._updateQueue = new Fe({
        concurrency: this._source.type === "stream" ? 1 : 4,
        process: (t, e) => this._onTileMessage(t, { signal: e }),
      })),
      this.addHandles([
        this.tileStore.on("update", this.onTileUpdate.bind(this)),
        Bt(
          () => !this.updating,
          () => this.onIdle()
        ),
      ]),
      (this._checkUpdating = setInterval(
        () => this.notifyChange("updating"),
        300
      ));
  }
  _initSource() {
    const t = this.tileStore.tileScheme;
    (this._source = Ss(
      this.service,
      this.spatialReference,
      t,
      (e, s) => ((this._invalidated = !0), this._patchTile(e, s)),
      () => this._updateQueue && this._updateQueue.length < 50,
      this.featureStore
    )),
      this._proxyEvents();
  }
  _proxyEvents() {
    if (this._source.type === "stream") {
      const t = this._source.events,
        e = this._source;
      this.addHandles([
        Me(
          () => e.connectionStatus,
          (s) =>
            this.remoteClient
              .invoke("setProperty", {
                propertyName: "connectionStatus",
                value: s,
              })
              .catch(Z),
          { initial: !0 }
        ),
        Me(
          () => e.errorString,
          (s) =>
            this.remoteClient
              .invoke("setProperty", { propertyName: "errorString", value: s })
              .catch(Z),
          { initial: !0 }
        ),
        t.on("data-received", (s) =>
          this.remoteClient
            .invoke("emitEvent", {
              name: "data-received",
              event: {
                attributes: s.attributes,
                centroid: s.centroid,
                geometry: s.geometry,
              },
            })
            .catch(Z)
        ),
        t.on("message-received", (s) =>
          this.remoteClient
            .invoke("emitEvent", { name: "message-received", event: s })
            .catch(Z)
        ),
        t.on("updateRate", (s) =>
          this.remoteClient
            .invoke("emitEvent", { name: "update-rate", event: { ...s } })
            .catch(Z)
        ),
      ]);
    }
  }
  _initAttributeStore(t) {
    this.attributeStore ||
      (this.attributeStore = new $t(
        {
          type: "remote",
          initialize: (e, s) =>
            de(
              this.remoteClient
                .invoke(
                  "tileRenderer.featuresView.attributeView.initialize",
                  e,
                  { signal: s }
                )
                .catch(Z)
            ),
          update: (e, s) =>
            de(
              this.remoteClient
                .invoke(
                  "tileRenderer.featuresView.attributeView.requestUpdate",
                  e,
                  { signal: s }
                )
                .catch(Z)
            ),
          render: (e) =>
            de(
              this.remoteClient
                .invoke("tileRenderer.featuresView.requestRender", void 0, {
                  signal: e,
                })
                .catch(Z)
            ),
        },
        t,
        () => this.notifyChange("updating")
      ));
  }
  _initStores() {
    const t = this.service.type === "snapshot" ? "snapshot" : "on-demand",
      e = {
        geometryInfo: {
          geometryType: this.service.geometryType,
          hasM: !1,
          hasZ: !1,
        },
        spatialReference: this.spatialReference,
        fieldsIndex: this.fieldsIndex,
        fields: this.service.fields,
      };
    this.featureStore = new Jt(e, this._storage, t);
  }
  _initQueryEngine(t) {
    var s;
    const e = this;
    (s = this.featureQueryEngine) == null || s.destroy(),
      (this.featureQueryEngine = new je({
        definitionExpression: t.schema.source.definitionExpression ?? void 0,
        fields: this.service.fields,
        geometryType: this.service.geometryType,
        objectIdField: this.service.objectIdField,
        hasM: !1,
        hasZ: !1,
        spatialReference: this.spatialReference.toJSON(),
        cacheSpatialQueries: !0,
        featureStore: this.featureStore,
        aggregateAdapter: {
          getFeatureObjectIds: (r) =>
            T(e.aggregateStore)
              ? []
              : e.aggregateStore
                  .getFeatureDisplayIdsForAggregate(r)
                  .map((i) => e.getObjectId(i)),
        },
        timeInfo: this.service.timeInfo,
      }));
  }
  _initAggregateQueryEngine(t, e) {
    var r;
    if (((r = this.aggregateQueryEngine) == null || r.destroy(), T(t))) return;
    const s = e.targets.aggregate.params.fields.slice();
    this.aggregateQueryEngine = new je({
      definitionExpression: void 0,
      fields: s,
      geometryType: t.geometryInfo.geometryType,
      objectIdField: t.objectIdField,
      hasM: t.geometryInfo.hasM,
      hasZ: t.geometryInfo.hasZ,
      spatialReference: this.spatialReference.toJSON(),
      cacheSpatialQueries: !1,
      featureStore: t,
      aggregateAdapter: { getFeatureObjectIds: (i) => [] },
    });
  }
  destroy() {
    var t, e, s;
    this._updateQueue.destroy(),
      this._source.destroy(),
      (t = this.featureQueryEngine) == null || t.destroy(),
      (e = this.aggregateQueryEngine) == null || e.destroy(),
      (s = this.attributeStore) == null || s.destroy();
    for (const r of this.tileStore.tiles) this._source.unsubscribe(r);
    clearInterval(this._checkUpdating);
  }
  get fieldsIndex() {
    return new Dt(this.service.fields);
  }
  get spatialReference() {
    return this.tileStore.tileScheme.spatialReference;
  }
  get updating() {
    return this.isUpdating();
  }
  isUpdating() {
    const t = this._source.updating,
      e = !!this._updateQueue.length,
      s = !this.attributeStore || this.attributeStore.isUpdating(),
      r = t || e || s;
    return E("esri-2d-log-updating"), r;
  }
  updateCustomParameters(t) {
    this._source.type === "stream" && this._source.updateCustomParameters(t);
  }
  enableEvent(t) {
    this._source.enableEvent(t.name, t.value);
  }
  pause() {
    this._updateQueue.pause(), this._updateQueue.clear();
  }
  resume() {
    this._updateQueue.resume();
  }
  pauseStream() {
    this._source.type === "stream" && this._source.pauseStream();
  }
  resumeStream() {
    this._source.type === "stream" && this._source.resumeStream();
  }
  sendMessageToSocket(t) {
    this._source.type === "stream" && this._source.sendMessageToSocket(t);
  }
  sendMessageToClient(t) {
    this._source.type === "stream" && this._source.sendMessageToClient(t);
  }
  _initAggregateStore(t) {
    var r, i;
    const e =
      (i = (r = t.schema.targets) == null ? void 0 : r.aggregate) == null
        ? void 0
        : i.type;
    if (
      se(this.config, (a) => {
        var n, o;
        return (o = (n = a.schema.targets) == null ? void 0 : n.aggregate) ==
          null
          ? void 0
          : o.type;
      }) !== e &&
      (_(this.aggregateStore) &&
        (this.removeHandles("valueRangesChanged"),
        this.aggregateStore.destroy(),
        (this.aggregateStore = null)),
      e)
    ) {
      switch (e) {
        case "cluster": {
          const a = {
            geometryInfo: {
              geometryType: "esriGeometryPoint",
              hasM: !1,
              hasZ: !1,
            },
            spatialReference: this.spatialReference,
            fieldsIndex: this.fieldsIndex,
            fields: this.service.fields,
          };
          (this.aggregateStore = new Ms(
            a,
            this.spatialReference,
            this._storage,
            this.service
          )),
            this.addHandles(
              this.aggregateStore.events.on("valueRangesChanged", (n) => {
                this.remoteClient
                  .invoke("emitEvent", {
                    name: "valueRangesChanged",
                    event: { valueRanges: n.valueRanges },
                  })
                  .catch(Z);
              }),
              "valueRangesChanged"
            );
          break;
        }
        case "bin": {
          const a = {
            geometryInfo: {
              geometryType: "esriGeometryPolygon",
              hasM: !1,
              hasZ: !1,
            },
            spatialReference: this.spatialReference,
            fieldsIndex: this.fieldsIndex,
            fields: this.service.fields,
          };
          this.aggregateStore = new Fs(
            a,
            this.spatialReference,
            this._storage,
            this.service
          );
          break;
        }
      }
      this.aggregateStore.onTileUpdate({
        added: this.tileStore.tiles,
        removed: [],
      });
    }
  }
  async update(t, e) {
    this._updateVersion++,
      this._initQueryEngine(e),
      this._initAttributeStore(e),
      this.pause(),
      await Promise.all([
        this._source.update(t, e.schema.source),
        this.featureStore.updateSchema(t, e.schema.targets.feature),
        this.attributeStore.update(t, e),
        this.attributeStore.updateFilters(t, e, this),
      ]),
      this._initAggregateStore(e),
      _(this.aggregateStore) &&
        (await this.aggregateStore.updateSchema(t, e.schema.targets.aggregate)),
      this._initAggregateQueryEngine(this.aggregateStore, e.schema),
      E("esri-2d-update-debug") && t.describe(),
      this._set("config", e);
  }
  async applyUpdate(t) {
    (t.version = this._updateVersion),
      E("esri-2d-update-debug"),
      t.mesh && this.clearTiles(),
      this._updateQueue.resume(),
      await this._source.applyUpdate(t),
      this.notifyChange("updating"),
      await ue(() => !this.updating),
      _(this.aggregateStore) && (await st(10), await ue(() => !this.updating));
  }
  async onEdits({ edits: t }) {
    E("esri-2d-update-debug"), (this._didEdit = !0);
    try {
      const e = t.removed.map((r) =>
          r.objectId && r.objectId !== -1
            ? r.objectId
            : this._lookupObjectIdByGlobalId(r.globalId)
        ),
        s = t.addOrModified.map(({ objectId: r }) => r);
      this.featureStore.invalidate(),
        await this._source.edit(s, e),
        this.clearTiles(),
        this.notifyChange("updating"),
        _(this.aggregateStore) && this.aggregateStore.clear(),
        await this._source.resend(),
        await ue(() => !this.updating);
    } catch {}
  }
  async refresh(t) {
    if (!t.dataChanged) {
      const e = R.empty();
      return (e.storage.filters = !0), this.applyUpdate(e);
    }
    this.featureStore.invalidate(),
      this.clearTiles(),
      this._source.refresh(this._updateVersion, t),
      (this._cleanupNeeded = !0),
      this.notifyChange("updating"),
      await ue(() => !this.updating);
  }
  clearTiles() {
    for (const t of this.tileStore.tiles) this.processor.onTileClear(t);
  }
  onTileUpdate(t) {
    _(this.aggregateStore) && this.aggregateStore.onTileUpdate(t);
    for (const e of t.added)
      this._source.subscribe(e, this._updateVersion), (this._level = e.level);
    for (const e of t.removed)
      this._source.unsubscribe(e),
        (this._cleanupNeeded = !0),
        this._tileToResolver.has(e.id) &&
          (this._tileToResolver.get(e.id).resolve(),
          this._tileToResolver.delete(e.id));
    this.notifyChange("updating");
  }
  async onIdle() {
    this._invalidated &&
      ((this._invalidated = !1),
      (_(this.aggregateStore) || this.processor.type === "heatmap") &&
        (await this._repushCurrentLevelTiles())),
      this._markAndSweep();
  }
  async querySummaryStatistics({ query: t, params: e }) {
    return this.featureQueryEngine.executeQueryForSummaryStatistics(t, e);
  }
  async queryAggregateSummaryStatistics({ query: t, params: e }) {
    return this.aggregateQueryEngine.executeQueryForSummaryStatistics(t, e);
  }
  async queryUniqueValues({ query: t, params: e }) {
    return this.featureQueryEngine.executeQueryForUniqueValues(t, e);
  }
  async queryAggregateUniqueValues({ query: t, params: e }) {
    return this.aggregateQueryEngine.executeQueryForUniqueValues(t, e);
  }
  async queryClassBreaks({ query: t, params: e }) {
    return this.featureQueryEngine.executeQueryForClassBreaks(t, e);
  }
  async queryAggregateClassBreaks({ query: t, params: e }) {
    return this.aggregateQueryEngine.executeQueryForClassBreaks(t, e);
  }
  async queryHistogram({ query: t, params: e }) {
    return this.featureQueryEngine.executeQueryForHistogram(t, e);
  }
  async queryAggregateHistogram({ query: t, params: e }) {
    return this.aggregateQueryEngine.executeQueryForHistogram(t, e);
  }
  queryExtent(t) {
    return this.featureQueryEngine.executeQueryForExtent(t);
  }
  queryAggregates(t) {
    return this.aggregateQueryEngine.executeQuery(t);
  }
  queryAggregateCount(t) {
    return this.aggregateQueryEngine.executeQueryForCount(t);
  }
  queryAggregateIds(t) {
    return this.aggregateQueryEngine.executeQueryForIds(t);
  }
  queryFeatures(t) {
    return this.featureQueryEngine.executeQuery(t);
  }
  async queryVisibleFeatures(t) {
    const e = await this.featureQueryEngine.executeQuery(t),
      s = e.objectIdFieldName;
    return (
      (e.features = e.features.filter((r) => {
        const i = r.attributes[s],
          a = this.getDisplayId(i);
        return se(a, (n) => this.attributeStore.isVisible(n));
      })),
      e
    );
  }
  queryFeatureCount(t) {
    return this.featureQueryEngine.executeQueryForCount(t);
  }
  queryLatestObservations(t) {
    return this.featureQueryEngine.executeQueryForLatestObservations(t);
  }
  queryObjectIds(t) {
    return this.featureQueryEngine.executeQueryForIds(t);
  }
  async queryStatistics() {
    return this.featureStore.storeStatistics;
  }
  getObjectId(t) {
    return this.featureStore.lookupObjectId(t, this._storage);
  }
  getDisplayId(t) {
    if (_(this.aggregateStore)) {
      const e = this.aggregateStore.getDisplayId(t);
      if (T(e)) {
        const s = this.featureStore.lookupDisplayId(t);
        return this.aggregateStore.getDisplayIdForReferenceId(s);
      }
      return e;
    }
    return this.featureStore.lookupDisplayId(t);
  }
  getFeatures(t) {
    const e = [],
      s = [];
    for (const r of t) {
      const i = _(this.aggregateStore) ? this.getAggregate(r) : null;
      if (_(i))
        if (_(i.attributes.referenceId)) {
          const a = this.getFeature(i.attributes.referenceId);
          _(a) && e.push(a);
        } else s.push(i);
      else {
        const a = this.getFeature(r);
        _(a) && e.push(a);
      }
    }
    return { features: e, aggregates: s };
  }
  getFeature(t) {
    const e = this.featureStore.lookupFeatureByDisplayId(t, this._storage);
    if (T(e)) return null;
    const s = e.readHydratedGeometry(),
      r = Ee(s, e.geometryType, e.hasZ, e.hasM);
    return { attributes: e.readAttributes(), geometry: r };
  }
  getAggregate(t) {
    return T(this.aggregateStore) ? null : this.aggregateStore.getAggregate(t);
  }
  getAggregates() {
    return T(this.aggregateStore) ? [] : this.aggregateStore.getAggregates();
  }
  async setHighlight(t) {
    const e = jt(t.map((s) => this.getDisplayId(s)));
    return this.attributeStore.setHighlight(t, e);
  }
  _lookupObjectIdByGlobalId(t) {
    const e = this.service.globalIdField;
    if (T(e)) throw new Error("Expected globalIdField to be defined");
    let s = null;
    if (
      (this.featureStore.forEach((r) => {
        t === r.readAttribute(e) && (s = r.getObjectId());
      }),
      T(s))
    )
      throw new Error(`Expected to find a feature with globalId ${t}`);
    return s;
  }
  async _repushCurrentLevelTiles() {
    const t = this.tileStore.tiles.filter((s) => s.level === this._level);
    t.map(async (s) =>
      this._patchTile({
        type: "append",
        id: s.key.id,
        clear: !0,
        addOrUpdate: null,
        end: !1,
      })
    );
    const e = t.map(async (s) =>
      this._patchTile({
        type: "append",
        id: s.key.id,
        addOrUpdate: D.fromOptimizedFeatures([], this.service),
        remove: [],
        end: !0,
        isRepush: !0,
        status: R.empty(),
      })
    );
    await Promise.all(e);
  }
  _maybeForceCleanup() {
    performance.now() - this._lastCleanup > 5e3 && this._markAndSweep();
  }
  _patchTile(t, e) {
    const s = this._updateQueue
      .push(t, e)
      .then(() => {
        this.notifyChange("updating");
      })
      .catch((r) => {
        this.notifyChange("updating");
      });
    return this.notifyChange("updating"), s;
  }
  async _onTileMessage(t, e) {
    j(e), E("esri-2d-update-debug") && se(t.addOrUpdate, (a) => a.hasFeatures);
    const s = this.tileStore.get(t.id);
    if (!s) return;
    if (t.clear) return this.processor.onTileClear(s);
    const r = t.status;
    this._cleanupNeeded = !0;
    const i = [];
    for (const a of t.remove ?? []) {
      const n = this.featureStore.lookupDisplayId(a);
      n && i.push(n);
    }
    t.remove = i;
    try {
      if (T(t.addOrUpdate))
        return void this.processor
          .onTileMessage(
            s,
            { ...t, addOrUpdate: null },
            _(this.aggregateStore),
            e
          )
          .catch(Te);
      if (
        (t.addOrUpdate.setArcadeSpatialReference(this.spatialReference),
        (this.featureStore.hasInstance(t.addOrUpdate.instance) &&
          r.targets.feature) ||
          ((r.targets.feature = !0), this.featureStore.onTileData(s, t)),
        (r.storage.data && r.storage.filters) ||
          ((r.storage.data = !0),
          (r.storage.filters = !0),
          this.attributeStore.onTileData(s, t),
          this._source.type === "stream" || this._didEdit
            ? (await this.attributeStore.sendUpdates(), j(e))
            : this.attributeStore.sendUpdates()),
        _(this.aggregateStore) && !r.targets.aggregate)
      ) {
        r.targets.aggregate = !0;
        const a = Ke(this._source) && this._source.loading,
          n = !Ke(this._source) || a || t.end;
        if (
          (this.aggregateStore.onTileData(
            s,
            t,
            this._storage,
            this.attributeStore,
            n
          ),
          !n)
        )
          return;
        r.mesh ||
          (this.attributeStore.onTileData(s, t),
          await this.attributeStore.sendUpdates());
      }
      if (!r.mesh) {
        r.mesh = !0;
        const a =
          _(this.aggregateStore) && this.aggregateStore.type === "cluster";
        await this.processor.onTileMessage(s, t, a, e), j(e);
      }
      this._maybeForceCleanup();
    } catch (a) {
      Te(a);
    }
  }
  _mark(t, e, s) {
    const r = (4294901760 & this._storage.getInstanceId(t)) >>> 16;
    t && (e.add(r), s.set(t));
  }
  _markAndSweep() {
    if (
      ((this._lastCleanup = performance.now()),
      (this._source.type === "feature" && this._source.mode === "snapshot") ||
        (this._source.type !== "stream" && !this._cleanupNeeded))
    )
      return;
    this._cleanupNeeded = !1;
    const t = this._storage.getBitset(this._markedIdsBufId),
      e = new Set();
    t.clear();
    for (const s of this.tileStore.tiles)
      for (const r of this._source.readers(s.id)) {
        const i = r.getCursor();
        for (; i.next(); ) {
          let a = i.getDisplayId();
          if (!a) {
            const n = i.getObjectId();
            a = this.featureStore.lookupDisplayId(n);
          }
          this._mark(a, e, t);
        }
      }
    this.processor.type === "symbol" &&
      this.processor.forEachBufferId((s) => {
        this._mark(s, e, t);
      }),
      this._updateQueue.forEach((s) => {
        for (const r of s.remove ?? []) {
          const i = this.featureStore.lookupDisplayId(r);
          this._mark(i, e, t);
        }
      }),
      _(this.aggregateStore) &&
        (this.aggregateStore.sweepFeatures(t, this.featureStore),
        "sweepAggregates" in this.aggregateStore &&
          this.aggregateStore.sweepAggregates(
            this._storage,
            this.attributeStore,
            this._level
          )),
      this.featureStore.sweepFeatures(t, this._storage, this.attributeStore),
      this.featureStore.sweepFeatureSets(e);
  }
};
A([G({ constructOnly: !0 })], V.prototype, "tileStore", void 0),
  A([G()], V.prototype, "config", void 0),
  A([G({ readOnly: !0 })], V.prototype, "fieldsIndex", null),
  A([G()], V.prototype, "processor", void 0),
  A([G({ constructOnly: !0 })], V.prototype, "remoteClient", void 0),
  A([G({ constructOnly: !0 })], V.prototype, "service", void 0),
  A([G()], V.prototype, "spatialReference", null),
  A([G()], V.prototype, "updating", null),
  (V = A(
    [Oe("esri.views.2d.layers.features.controllers.FeatureController2D")],
    V
  ));
const ks = V;
let te = class extends zt {
  constructor() {
    super(...arguments),
      (this.controller = null),
      (this.processor = null),
      (this.remoteClient = null),
      (this.tileStore = null),
      (this.service = null),
      (this.viewState = null),
      (this._paused = !1),
      (this._pendingTileUpdates = []);
  }
  initialize() {
    this.handles.add(
      Me(
        () => this.updating,
        (t) => {
          this.remoteClient.invoke("setUpdating", t).catch((e) => {});
        }
      )
    );
  }
  destroy() {
    var t, e;
    this.stop(),
      (t = this.controller) == null || t.destroy(),
      (e = this.processor) == null || e.destroy(),
      (this.controller =
        this.processor =
        this.tileStore =
        this.remoteClient =
          null);
  }
  get updating() {
    return !this.controller || this.controller.updating;
  }
  stop() {
    var t, e, s;
    (this._paused = !0),
      Array.isArray((t = this.service) == null ? void 0 : t.source) &&
        (this.service.source.forEach((r) => r.close()),
        (this.service.source.length = 0)),
      (e = this.tileStore) == null ||
        e.updateTiles({
          added: [],
          removed: this.tileStore.tiles.map((r) => r.id),
        }),
      (s = this.tileStore) == null || s.destroy(),
      (this.tileStore = null),
      (this._pendingTileUpdates.length = 0);
  }
  async startup({ service: t, config: e, tileInfo: s, tiles: r }) {
    var i, a, n;
    if (
      ((this._paused = !0),
      Array.isArray((i = this.service) == null ? void 0 : i.source) &&
        (this.service.source.forEach((o) => o.close()),
        (this.service.source.length = 0)),
      (this.service = t),
      !this.tileStore ||
        !Nt(this.tileStore.tileScheme.spatialReference, s.spatialReference))
    ) {
      const o = new Vt(Xt.fromJSON(s));
      (r.added.length = r.removed.length = 0),
        (a = this.tileStore) == null ||
          a.updateTiles({
            added: [],
            removed: this.tileStore.tiles.map((h) => h.id),
          }),
        (n = this.tileStore) == null || n.destroy(),
        (this.tileStore = new Yt(o)),
        (this._pendingTileUpdates.length = 0);
    }
    for (
      await this._createProcessorAndController(e),
        await this.update({ config: e }),
        this.controller.resume(),
        this.tileStore.clear(),
        this.tileStore.updateTiles(r),
        this._paused = !1;
      this._pendingTileUpdates.length;

    )
      this.tileStore.updateTiles(this._pendingTileUpdates.pop());
  }
  async updateTiles(t) {
    var e;
    this._paused
      ? this._pendingTileUpdates.push(t)
      : (e = this.tileStore) == null || e.updateTiles(t);
  }
  async update({ config: t }) {
    const e = R.empty();
    return (
      await Promise.all([
        this.processor.update(e, t),
        this.controller.update(e, t),
      ]),
      e.toJSON()
    );
  }
  async applyUpdate(t) {
    return this.controller.applyUpdate(R.create(t));
  }
  async _createProcessorAndController(t) {
    await Promise.all([
      this._handleControllerConfig(t),
      this._handleProcessorConfig(t),
    ]),
      (this.controller.processor = this.processor);
  }
  async _handleControllerConfig(t) {
    return this._createController(this.service, t);
  }
  async _handleProcessorConfig(t) {
    return this._createProcessor(this.service, t);
  }
  async _createController(t, e) {
    this.controller && this.controller.destroy();
    const { tileStore: s, remoteClient: r } = this,
      i = new ks({ service: t, tileStore: s, remoteClient: r });
    return (this.controller = i), i;
  }
  async _createProcessor(t, e) {
    const s = e.schema.processors[0].type,
      r = (
        await (function (o) {
          return Ht(
            o === "heatmap"
              ? () => import("./HeatmapProcessor.3867eef5.js")
              : () => import("./SymbolProcessor.39e5c1e9.js"),
            [
              "js/SymbolProcessor.39e5c1e9.js",
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
              "js/ExpandedCIM.e22c8b13.js",
              "js/BidiEngine.520adad3.js",
              "js/GeometryUtils.874f8cf4.js",
              "js/enums.13513a14.js",
              "js/MaterialKey.97cb3dc8.js",
              "js/color.4c5303e9.js",
              "js/enums.64ab819c.js",
              "js/VertexElementDescriptor.2925c6af.js",
              "js/definitions.ce677f69.js",
              "js/Rect.6884a4ea.js",
              "js/quantizationUtils.1e9e702d.js",
              "js/floatRGBA.6f2fa7cd.js",
              "js/visualVariablesUtils.1183f3fb.js",
              "js/visualVariablesUtils.de38be9a.js",
              "js/Matcher.fe3c9df5.js",
              "js/tileUtils.c2f19f52.js",
              "js/TurboLine.2982dc8d.js",
              "js/GeometryUtils.82ab0a13.js",
              "js/earcut.9f54f087.js",
              "js/devEnvironmentUtils.4eab2a99.js",
              "js/BaseProcessor.916c9ffb.js",
            ]
          );
        })(s)
      ).default,
      { remoteClient: i, tileStore: a } = this,
      n = new r({ service: t, config: e, tileStore: a, remoteClient: i });
    return this.processor && this.processor.destroy(), (this.processor = n), n;
  }
};
A([G()], te.prototype, "controller", void 0),
  A([G()], te.prototype, "processor", void 0),
  A([G()], te.prototype, "updating", null),
  A([G()], te.prototype, "viewState", void 0),
  (te = A([Oe("esri.views.2d.layers.features.Pipeline")], te));
const lr = te;
export { lr as default };
