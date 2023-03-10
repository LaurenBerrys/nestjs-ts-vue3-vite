import {
  eJ as I,
  s as _,
  J as V,
  j as P,
  Q as L,
  cy as R,
  U as Q,
  eK as G,
  ac as M,
  cf as A,
  ck as $,
  co as J,
  aH as Y,
  eL as U,
  bx as Z,
  eM as B,
  ep as W,
  cV as b,
} from "./index.8fd7165c.js";
import { t as z } from "./json.495fc412.js";
import { g as H } from "./FeatureStore.d8aec338.js";
import { f as K } from "./projectionSupport.4aeb802f.js";
import { e as X } from "./QueryEngine.191035fe.js";
import { a as ee } from "./number.f83996f0.js";
import { i as te, o as ie } from "./clientSideDefaults.4b2f5b2f.js";
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
import "./QueryEngineResult.c4edbbc1.js";
import "./quantizationUtils.1e9e702d.js";
import "./WhereClause.ae196341.js";
import "./executionError.fb3f283a.js";
import "./utils.7e94e38c.js";
import "./generateRendererUtils.855c90be.js";
import "./QueryEngineCapabilities.42e44ded.js";
import "./timeSupport.04391410.js";
const T = /^\s*"([\S\s]*)"\s*$/,
  E = /""/g,
  S = `
`,
  ne = [",", " ", ";", "|", "	"];
function* O(r, t, e) {
  let i = 0;
  for (; i <= r.length; ) {
    const n = r.indexOf(t, i),
      s = r.substring(i, n > -1 ? n : void 0);
    (i += s.length + t.length), (e && !s.trim()) || (yield s);
  }
}
function q(r) {
  const t = r.includes(`\r
`)
    ? `\r
`
    : S;
  return O(r, t, !0);
}
function C(r, t) {
  return O(r, t, !1);
}
function re(r, t, e) {
  (r = r.trim()), (t = t == null ? void 0 : t.trim());
  const i = [],
    n = Array.from(new Set([e == null ? void 0 : e.delimiter, ...ne])).filter(
      (o) => o != null
    );
  for (const o of n) {
    const a = w(r, o).length,
      u = w(t, o).length ?? a;
    a > 1 && i.push({ weight: Math.min(a, u), delimiter: o });
  }
  const s = i
    .sort(({ weight: o }, { weight: a }) => a - o)
    .map(({ delimiter: o }) => o);
  for (const o of s) {
    const a = se(
      D(r, o).names,
      e == null ? void 0 : e.longitudeField,
      e == null ? void 0 : e.latitudeField
    );
    if (a.longitudeFieldName && a.latitudeFieldName)
      return { delimiter: o, locationInfo: a };
  }
  return { delimiter: s[0], locationInfo: null };
}
function* v(r, t, e, i = () => Object.create(null)) {
  const n = q(r);
  n.next();
  let s = "",
    o = "",
    a = 0,
    u = i(),
    d = 0;
  e: for (const g of n) {
    const h = C(g, e);
    for (const m of h)
      if (((s += o + m), (o = ""), (a += j(m)), a % 2 == 0)) {
        if (a > 0) {
          const p = T.exec(s);
          if (!p) {
            (u = i()), (d = 0), (s = ""), (a = 0);
            continue e;
          }
          (u[t[d]] = p[1].replace(E, '"')), d++;
        } else (u[t[d]] = s), d++;
        (s = ""), (a = 0);
      } else o = e;
    a === 0 ? (yield u, (u = i()), (d = 0)) : (o = S);
  }
}
function D(r, t) {
  const e = w(r, t).filter((n) => n != null),
    i = e.map((n) => I(n));
  for (let n = i.length - 1; n >= 0; n--)
    i[n] || (i.splice(n, 1), e.splice(n, 1));
  return { names: i, aliases: e };
}
function w(r, t) {
  if (!(r != null && r.length)) return [];
  const e = [];
  let i = "",
    n = "",
    s = 0;
  const o = C(r, t);
  for (const a of o)
    if (((i += n + a), (n = ""), (s += j(a)), s % 2 == 0)) {
      if (s > 0) {
        const u = T.exec(i);
        u && e.push(u[1].replace(E, '"'));
      } else e.push(i);
      (i = ""), (s = 0);
    } else n = t;
  return e;
}
function j(r) {
  let t = 0,
    e = 0;
  for (e = r.indexOf('"', e); e >= 0; ) t++, (e = r.indexOf('"', e + 1));
  return t;
}
function se(r, t, e) {
  var o, a;
  (t = (o = I(t)) == null ? void 0 : o.toLowerCase()),
    (e = (a = I(e)) == null ? void 0 : a.toLowerCase());
  const i = r.map((u) => u.toLowerCase()),
    n = t ? r[i.indexOf(t)] : null,
    s = e ? r[i.indexOf(e)] : null;
  return {
    longitudeFieldName: n || r[i.indexOf(de.find((u) => i.includes(u)))],
    latitudeFieldName: s || r[i.indexOf(ue.find((u) => i.includes(u)))],
  };
}
function oe(r, t, e, i, n) {
  const s = [],
    o = v(r, e, t),
    a = [];
  for (const u of o) {
    if (a.length === 10) break;
    a.push(u);
  }
  for (let u = 0; u < e.length; u++) {
    const d = e[u],
      g = i[u];
    if (d === n.longitudeFieldName || d === n.latitudeFieldName)
      s.push({ name: d, type: "esriFieldTypeDouble", alias: g });
    else {
      let h, m;
      switch (ae(a.map((p) => p[d]))) {
        case "integer":
          h = "esriFieldTypeInteger";
          break;
        case "double":
          h = "esriFieldTypeDouble";
          break;
        case "date":
          (h = "esriFieldTypeDate"), (m = 36);
          break;
        default:
          (h = "esriFieldTypeString"), (m = 255);
      }
      s.push({ name: d, type: h, alias: g, length: m });
    }
  }
  return s;
}
function ae(r) {
  if (!r.length) return "string";
  const t = /[^+-.,0-9]/;
  return r
    .map((e) => {
      let i = !1;
      if (e !== "") {
        if (t.test(e)) i = !0;
        else {
          let n = N(e);
          if (!isNaN(n))
            return /[.,]/.test(e) ||
              !Number.isInteger(n) ||
              n > 214783647 ||
              n < -214783648
              ? "double"
              : "integer";
          if (e.includes("E")) {
            if (((n = Number(e)), !isNaN(n))) return "double";
            if (e.includes(",")) {
              if (((e = e.replace(",", ".")), (n = Number(e)), !isNaN(n)))
                return "double";
              i = !0;
            } else i = !0;
          } else i = !0;
        }
        return i
          ? /^[-]?\d*[.,]?\d*$/.test(e)
            ? "string"
            : k(new Date(e), e)
            ? "date"
            : "string"
          : "string";
      }
    })
    .reduce((e, i) =>
      e === void 0
        ? i
        : i === void 0
        ? e
        : e === i
        ? i
        : e === "string" || i === "string"
        ? "string"
        : e === "double" || i === "double"
        ? "double"
        : void 0
    );
}
function k(r, t) {
  if (
    !r ||
    Object.prototype.toString.call(r) !== "[object Date]" ||
    isNaN(r.getTime())
  )
    return !1;
  let e = !0;
  if (!ce && /\d+\W*$/.test(t)) {
    const i = t.match(/[a-zA-Z]{2,}/);
    if (i) {
      let n = !1,
        s = 0;
      for (; !n && s <= i.length; ) (n = !le.test(i[s])), s++;
      e = !n;
    }
  }
  return e;
}
const N = (function () {
    const r = ee(),
      t = new RegExp("^" + r.regexp + "$"),
      e = new RegExp("[" + r.group + "\\s\\xa0]", "g"),
      i = r.factor;
    return (n) => {
      const s = t.exec(n);
      if (((r.factor = i), !s)) return NaN;
      let o = s[1];
      if (!s[1]) {
        if (!s[2]) return NaN;
        (o = s[2]), (r.factor *= -1);
      }
      return (o = o.replace(e, "").replace(r.decimal, ".")), +o * r.factor;
    };
  })(),
  le =
    /^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,
  ce = Number.isNaN(new Date("technology 10").getTime()),
  ue = [
    "lat",
    "latitude",
    "latitude83",
    "latdecdeg",
    "lat_dd",
    "y",
    "ycenter",
    "point_y",
  ],
  de = [
    "lon",
    "lng",
    "long",
    "longitude",
    "longitude83",
    "longdecdeg",
    "long_dd",
    "x",
    "xcenter",
    "point_x",
  ],
  fe = ie("esriGeometryPoint"),
  me = ["csv"],
  pe = [0, 0];
class he {
  constructor(t, e) {
    (this.x = t), (this.y = e);
  }
}
class $e {
  constructor() {
    (this._queryEngine = null),
      (this._snapshotFeatures = async (t) => {
        const e = await this._fetch(t);
        return this._createFeatures(e);
      });
  }
  destroy() {
    var t;
    (t = this._queryEngine) == null || t.destroy(), (this._queryEngine = null);
  }
  async load(t, e = {}) {
    var u;
    this._loadOptions = t;
    const [i] = await Promise.all([
        this._fetch(e.signal),
        this._checkProjection(
          (u = t == null ? void 0 : t.parsingOptions) == null
            ? void 0
            : u.spatialReference
        ),
      ]),
      n = ye(i, t);
    (this._locationInfo = n.locationInfo),
      (this._delimiter = n.delimiter),
      (this._queryEngine = this._createQueryEngine(n));
    const s = await this._createFeatures(i);
    this._queryEngine.featureStore.addMany(s);
    const { fullExtent: o, timeExtent: a } =
      await this._queryEngine.fetchRecomputedExtents();
    if (((n.layerDefinition.extent = o), a)) {
      const { start: d, end: g } = a;
      n.layerDefinition.timeInfo.timeExtent = [d, g];
    }
    return n;
  }
  async applyEdits() {
    throw new _(
      "csv-layer:editing-not-supported",
      "applyEdits() is not supported on CSVLayer"
    );
  }
  async queryFeatures(t = {}, e = {}) {
    return (
      await this._waitSnapshotComplete(),
      this._queryEngine.executeQuery(t, e.signal)
    );
  }
  async queryFeatureCount(t = {}, e = {}) {
    return (
      await this._waitSnapshotComplete(),
      this._queryEngine.executeQueryForCount(t, e.signal)
    );
  }
  async queryObjectIds(t = {}, e = {}) {
    return (
      await this._waitSnapshotComplete(),
      this._queryEngine.executeQueryForIds(t, e.signal)
    );
  }
  async queryExtent(t = {}, e = {}) {
    return (
      await this._waitSnapshotComplete(),
      this._queryEngine.executeQueryForExtent(t, e.signal)
    );
  }
  async querySnapping(t, e = {}) {
    return (
      await this._waitSnapshotComplete(),
      this._queryEngine.executeQueryForSnapping(t, e.signal)
    );
  }
  async refresh(t) {
    var n;
    (this._loadOptions.customParameters = t),
      (n = this._snapshotTask) == null || n.abort(),
      (this._snapshotTask = V(this._snapshotFeatures)),
      this._snapshotTask.promise.then(
        (s) => {
          this._queryEngine.featureStore.clear(),
            s && this._queryEngine.featureStore.addMany(s);
        },
        (s) => {
          this._queryEngine.featureStore.clear(),
            P(s) ||
              L.getLogger("esri.layers.CSVLayer").error(
                new _("csv-layer:refresh", "An error occurred during refresh", {
                  error: s,
                })
              );
        }
      ),
      await this._waitSnapshotComplete();
    const { fullExtent: e, timeExtent: i } =
      await this._queryEngine.fetchRecomputedExtents();
    return { extent: e, timeExtent: i };
  }
  async _waitSnapshotComplete() {
    if (this._snapshotTask && !this._snapshotTask.finished) {
      try {
        await this._snapshotTask.promise;
      } catch {}
      return this._waitSnapshotComplete();
    }
  }
  async _fetch(t) {
    const { url: e, customParameters: i } = this._loadOptions;
    if (!e) throw new _("csv-layer:invalid-source", "url not defined");
    const n = R(e);
    return (
      await Q(n.path, {
        query: { ...n.query, ...i },
        responseType: "text",
        signal: t,
      })
    ).data;
  }
  _createQueryEngine(t) {
    const {
        objectIdField: e,
        fields: i,
        extent: n,
        timeInfo: s,
      } = t.layerDefinition,
      o = new H({ geometryType: "esriGeometryPoint", hasM: !1, hasZ: !1 });
    return new X({
      fields: i,
      geometryType: "esriGeometryPoint",
      hasM: !1,
      hasZ: !1,
      timeInfo: s,
      objectIdField: e,
      spatialReference: n.spatialReference || { wkid: 4326 },
      cacheSpatialQueries: !0,
      featureStore: o,
    });
  }
  async _createFeatures(t) {
    const { latitudeFieldName: e, longitudeFieldName: i } = this._locationInfo,
      {
        objectIdField: n,
        fieldsIndex: s,
        spatialReference: o,
      } = this._queryEngine;
    let a = [];
    const u = [],
      d = s.fields.filter((l) => l.name !== n).map((l) => l.name);
    let g = 0;
    const h = {};
    for (const l of s.fields)
      if (l.type !== "esriFieldTypeOID" && l.type !== "esriFieldTypeGlobalID") {
        const y = G(l);
        y !== void 0 && (h[l.name] = y);
      }
    const m = v(t, d, this._delimiter, te(h, n));
    for (const l of m) {
      const y = this._parseCoordinateValue(l[e]),
        F = this._parseCoordinateValue(l[i]);
      if (F != null && y != null && !isNaN(y) && !isNaN(F)) {
        (l[e] = y), (l[i] = F);
        for (const c in l)
          if (c !== e && c !== i) {
            if (s.isDateField(c)) {
              const f = new Date(l[c]);
              l[c] = k(f, l[c]) ? f.getTime() : null;
            } else if (s.isNumericField(c)) {
              const f = N(l[c]);
              isNaN(f) ? (l[c] = null) : (l[c] = f);
            }
          }
        (l[n] = g), g++, a.push(new he(F, y)), u.push(l);
      }
    }
    if (!M({ wkid: 4326 }, o))
      if (A(o)) for (const l of a) [l.x, l.y] = $(l.x, l.y, pe);
      else a = J(z, a, Y.WGS84, o, null, null);
    const p = [];
    for (let l = 0; l < a.length; l++) {
      const { x: y, y: F } = a[l],
        c = u[l];
      (c[n] = l + 1), p.push(new U(new Z([], [y, F]), c, null, c[n]));
    }
    return p;
  }
  _parseCoordinateValue(t) {
    if (t == null || t === "") return null;
    let e = N(t);
    return (isNaN(e) || Math.abs(e) > 181) && (e = parseFloat(t)), e;
  }
  async _checkProjection(t) {
    try {
      await K(B, t);
    } catch {
      throw new _(
        "csv-layer:projection-not-supported",
        "Projection not supported"
      );
    }
  }
}
function ye(r, t) {
  var l, y, F;
  const e = t.parsingOptions || {},
    i = {
      delimiter: e.delimiter,
      layerDefinition: null,
      locationInfo: {
        latitudeFieldName: e.latitudeField,
        longitudeFieldName: e.longitudeField,
      },
    },
    n = (i.layerDefinition = {
      name: W(t.url, me) || "csv",
      drawingInfo: fe,
      geometryType: "esriGeometryPoint",
      objectIdField: null,
      fields: [],
      timeInfo: e.timeInfo,
      extent: {
        xmin: Number.POSITIVE_INFINITY,
        ymin: Number.POSITIVE_INFINITY,
        xmax: Number.NEGATIVE_INFINITY,
        ymax: Number.NEGATIVE_INFINITY,
        spatialReference: e.spatialReference || { wkid: 4326 },
      },
    }),
    s = q(r),
    o = (l = s.next().value) == null ? void 0 : l.trim(),
    a = (y = s.next().value) == null ? void 0 : y.trim();
  if (!o) throw new _("csv-layer:empty-csv", "CSV is empty", { csv: r });
  const { delimiter: u, locationInfo: d } = re(o, a, e);
  if (!u)
    throw new _(
      "csv-layer:invalid-delimiter",
      "Unable to detect the delimiter from CSV",
      {
        firstLine: o,
        secondLine: a,
        parsingOptions: e,
      }
    );
  if (!d)
    throw new _(
      "csv-layer:location-fields-not-found",
      "Unable to identify latitude and longitude fields from the CSV file",
      { firstLine: o, secondLine: a, parsingOptions: e }
    );
  (i.locationInfo = d), (i.delimiter = u);
  const { names: g, aliases: h } = D(o, u),
    m = oe(r, i.delimiter, g, h, i.locationInfo);
  if ((F = e.fields) != null && F.length) {
    const c = new b(e.fields);
    for (const f of m) {
      const x = c.get(f.name);
      x && Object.assign(f, x);
    }
  }
  if (
    !m.some(
      (c) => c.type === "esriFieldTypeOID" && ((n.objectIdField = c.name), !0)
    )
  ) {
    const c = {
      name: "__OBJECTID",
      alias: "__OBJECTID",
      type: "esriFieldTypeOID",
      editable: !1,
      nullable: !1,
    };
    (n.objectIdField = c.name), m.unshift(c);
  }
  n.fields = m;
  const p = new b(n.fields);
  if (
    (i.locationInfo &&
      ((i.locationInfo.latitudeFieldName = p.get(
        i.locationInfo.latitudeFieldName
      ).name),
      (i.locationInfo.longitudeFieldName = p.get(
        i.locationInfo.longitudeFieldName
      ).name)),
    n.timeInfo)
  ) {
    const c = n.timeInfo;
    if (c.startTimeField) {
      const f = p.get(c.startTimeField);
      f
        ? ((c.startTimeField = f.name), (f.type = "esriFieldTypeDate"))
        : (c.startTimeField = null);
    }
    if (c.endTimeField) {
      const f = p.get(c.endTimeField);
      f
        ? ((c.endTimeField = f.name), (f.type = "esriFieldTypeDate"))
        : (c.endTimeField = null);
    }
    if (c.trackIdField) {
      const f = p.get(c.trackIdField);
      c.trackIdField = f ? f.name : null;
    }
    c.startTimeField || c.endTimeField || (n.timeInfo = null);
  }
  return i;
}
export { $e as default };
