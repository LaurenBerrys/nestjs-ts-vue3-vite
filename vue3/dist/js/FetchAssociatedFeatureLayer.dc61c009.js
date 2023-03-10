import {
  h2 as E,
  fD as T,
  T as S,
  L as R,
  U as y,
  iJ as A,
  iK as w,
  t as h,
  r as I,
  e1 as U,
  a2 as f,
  ic as _,
  O as P,
  cx as D,
} from "./index.8fd7165c.js";
import "./mat3f64.eb921732.js";
import "./mat4f64.b473928c.js";
import "./quat.17ee06b3.js";
import { r as C, e as v, I as F } from "./I3SBinaryReader.a6d3df26.js";
import "./spatialReferenceEllipsoidUtils.0049fd16.js";
import "./symbolColorUtils.2420e89c.js";
import { e as N } from "./quatf64.75f9f553.js";
import { t as O } from "./vec3f32.5805ce90.js";
import "./plane.6e2f7ea9.js";
const k = {
  analytics: { supportsCacheHint: !1 },
  attachment: {
    supportsContentType: !1,
    supportsExifInfo: !1,
    supportsKeywords: !1,
    supportsName: !1,
    supportsSize: !1,
    supportsCacheHint: !1,
    supportsResize: !1,
  },
  data: {
    isVersioned: !1,
    supportsAttachment: !1,
    supportsM: !1,
    supportsZ: !1,
  },
  editing: {
    supportsDeleteByAnonymous: !1,
    supportsDeleteByOthers: !1,
    supportsGeometryUpdate: !1,
    supportsGlobalId: !1,
    supportsReturnServiceEditsInSourceSpatialReference: !1,
    supportsRollbackOnFailure: !1,
    supportsUpdateByAnonymous: !1,
    supportsUpdateByOthers: !1,
    supportsUpdateWithoutM: !1,
    supportsUploadWithItemId: !1,
  },
  metadata: { supportsAdvancedFieldProperties: !1 },
  operations: {
    supportsCalculate: !1,
    supportsTruncate: !1,
    supportsValidateSql: !1,
    supportsAdd: !1,
    supportsDelete: !1,
    supportsEditing: !1,
    supportsChangeTracking: !1,
    supportsQuery: !1,
    supportsQueryAnalytics: !1,
    supportsQueryAttachments: !1,
    supportsQueryTopFeatures: !1,
    supportsResizeAttachments: !1,
    supportsSync: !1,
    supportsUpdate: !1,
    supportsExceedsLimitStatistics: !1,
  },
  queryRelated: {
    supportsCount: !1,
    supportsOrderBy: !1,
    supportsPagination: !1,
    supportsCacheHint: !1,
  },
  queryTopFeatures: { supportsCacheHint: !1 },
  query: {
    maxRecordCount: 0,
    maxRecordCountFactor: 0,
    standardMaxRecordCount: 0,
    supportsCacheHint: !1,
    supportsCentroid: !1,
    supportsCompactGeometry: !1,
    supportsDefaultSpatialReference: !1,
    supportsFullTextSearch: !1,
    supportsDisjointSpatialRelationship: !1,
    supportsDistance: !1,
    supportsDistinct: !1,
    supportsExtent: !1,
    supportsFormatPBF: !1,
    supportsGeometryProperties: !1,
    supportsHavingClause: !1,
    supportsHistoricMoment: !1,
    supportsMaxRecordCountFactor: !1,
    supportsOrderBy: !1,
    supportsPagination: !1,
    supportsPercentileStatistics: !1,
    supportsQuantization: !1,
    supportsQuantizationEditMode: !1,
    supportsQueryByOthers: !1,
    supportsQueryGeometry: !1,
    supportsResultType: !1,
    supportsSqlExpression: !1,
    supportsStandardizedQueriesOnly: !1,
    supportsTopFeaturesQuery: !1,
    supportsSpatialAggregationStatistics: !1,
    supportedSpatialAggregationStatistics: {
      envelope: !1,
      centroid: !1,
      convexHull: !1,
    },
    supportsStatistics: !1,
    tileMaxRecordCount: 0,
  },
};
var m;
(function (r) {
  (r[(r.INVISIBLE = 0)] = "INVISIBLE"),
    (r[(r.TRANSPARENT = 1)] = "TRANSPARENT"),
    (r[(r.OPAQUE = 2)] = "OPAQUE");
})(m || (m = {}));
E(0, 0, 0, 0.2), m.OPAQUE;
var g;
function V(r, s, t, a, o) {
  const n = [];
  for (const e of s)
    if (e && o.includes(e.name)) {
      const p = `${r}/nodes/${t}/attributes/${e.key}/0`;
      n.push({ url: p, storageInfo: e });
    }
  return R(
    n.map((e) =>
      y(e.url, { responseType: "array-buffer" }).then((p) =>
        F(e.storageInfo, p.data)
      )
    )
  ).then((e) => {
    const p = [];
    for (const c of a) {
      const u = {};
      for (let i = 0; i < e.length; i++) {
        const l = e[i].value;
        l != null && (u[n[i].storageInfo.name] = $(l, c));
      }
      p.push(u);
    }
    return p;
  });
}
E(0, 0, 0, 0.2),
  m.OPAQUE,
  (() => {
    const r = new Int8Array(162);
    let s = 0;
    const t = (a) => {
      for (let o = 0; o < a.length; o++) r[s + o] = a[o];
      s += 6;
    };
    t([6, 2, 3, 1, 5, 4]),
      t([0, 2, 3, 1, 5, 4]),
      t([0, 2, 3, 7, 5, 4]),
      t([0, 1, 3, 2, 6, 4]),
      t([0, 1, 3, 2, 0, 0]),
      t([0, 1, 5, 7, 3, 2]),
      t([0, 1, 3, 7, 6, 4]),
      t([0, 1, 3, 7, 6, 2]),
      t([0, 1, 5, 7, 6, 2]),
      t([0, 1, 5, 4, 6, 2]),
      t([0, 1, 5, 4, 0, 0]),
      t([0, 1, 3, 7, 5, 4]),
      t([0, 2, 6, 4, 0, 0]),
      t([0, 0, 0, 0, 0, 0]),
      t([1, 3, 7, 5, 0, 0]),
      t([2, 3, 7, 6, 4, 0]),
      t([2, 3, 7, 6, 0, 0]),
      t([2, 3, 1, 5, 7, 6]),
      t([0, 1, 5, 7, 6, 2]),
      t([0, 1, 5, 7, 6, 4]),
      t([0, 1, 3, 7, 6, 4]),
      t([4, 5, 7, 6, 2, 0]),
      t([4, 5, 7, 6, 0, 0]),
      t([4, 5, 1, 3, 7, 6]),
      t([0, 2, 3, 7, 5, 4]),
      t([6, 2, 3, 7, 5, 4]),
      t([6, 2, 3, 1, 5, 4]);
  })(),
  S(),
  (function (r) {
    (r[(r.OUTSIDE = 0)] = "OUTSIDE"),
      (r[(r.INTERSECTS_CENTER_OUTSIDE = 1)] = "INTERSECTS_CENTER_OUTSIDE"),
      (r[(r.INTERSECTS_CENTER_INSIDE = 2)] = "INTERSECTS_CENTER_INSIDE"),
      (r[(r.INSIDE = 3)] = "INSIDE");
  })(g || (g = {}));
const x = -32768,
  Q = -(2 ** 31);
function $(r, s) {
  if (!r) return null;
  const t = r[s];
  return A(r)
    ? t === x
      ? null
      : t
    : w(r)
    ? t === Q
      ? null
      : t
    : t != t
    ? null
    : t;
}
new Array(24),
  v(),
  S(),
  S(),
  (function (r = [0, 0, 0], s = [-1, -1, -1], t = N()) {
    T(r), O(s), C(t);
  })(),
  new Array(72);
class W {
  constructor(s, t, a, o) {
    var e;
    (this._parsedUrl = s),
      (this._portalItem = t),
      (this._apiKey = a),
      (this.signal = o),
      (this._rootDocument = null);
    const n =
      (e = this._parsedUrl) == null
        ? void 0
        : e.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);
    n && (this._urlParts = { root: n[1], layerId: parseInt(n[2], 10) });
  }
  async fetch() {
    if (!this._urlParts) return null;
    const s = this._portalItem ?? (await this._portalItemFromServiceItemId());
    if (h(s)) return this._loadFromUrl();
    const t = await this._findAndLoadRelatedPortalItem(s);
    return h(t) ? null : this._loadFeatureLayerFromPortalItem(t);
  }
  async fetchPortalItem() {
    if (!this._urlParts) return null;
    const s = this._portalItem ?? (await this._portalItemFromServiceItemId());
    return h(s) ? null : this._findAndLoadRelatedPortalItem(s);
  }
  async _fetchRootDocument() {
    if (I(this._rootDocument)) return this._rootDocument;
    if (h(this._urlParts)) return (this._rootDocument = {}), {};
    const s = {
        query: { f: "json", token: this._apiKey },
        responseType: "json",
        signal: this.signal,
      },
      t = `${this._urlParts.root}/SceneServer`;
    try {
      const a = await y(t, s);
      this._rootDocument = a.data;
    } catch {
      this._rootDocument = {};
    }
    return this._rootDocument;
  }
  async _fetchServiceOwningPortalUrl() {
    var o, n;
    const s = (o = this._parsedUrl) == null ? void 0 : o.path,
      t = s ? ((n = U) == null ? void 0 : n.findServerInfo(s)) : null;
    if (t != null && t.owningSystemUrl) return t.owningSystemUrl;
    const a = s ? s.replace(/(.*\/rest)\/.*/i, "$1") + "/info" : null;
    try {
      const e = (
        await y(a, {
          query: { f: "json" },
          responseType: "json",
          signal: this.signal,
        })
      ).data.owningSystemUrl;
      if (e) return e;
    } catch (e) {
      f(e);
    }
    return null;
  }
  async _findAndLoadRelatedPortalItem(s) {
    try {
      return (
        (
          await s.fetchRelatedItems(
            { relationshipType: "Service2Service", direction: "reverse" },
            { signal: this.signal }
          )
        ).find((t) => t.type === "Feature Service") || null
      );
    } catch (t) {
      return f(t), null;
    }
  }
  async _loadFeatureLayerFromPortalItem(s) {
    await s.load({ signal: this.signal });
    const t = await this._findMatchingAssociatedSublayerUrl(s.url ?? "");
    return new _({ url: t, portalItem: s }).load({ signal: this.signal });
  }
  async _loadFromUrl() {
    var t;
    const s = await this._findMatchingAssociatedSublayerUrl(
      `${(t = this._urlParts) == null ? void 0 : t.root}/FeatureServer`
    );
    return new _({ url: s }).load({ signal: this.signal });
  }
  async _findMatchingAssociatedSublayerUrl(s) {
    var l;
    const t = s.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i, "$1"),
      a = {
        query: { f: "json" },
        responseType: "json",
        authMode: "no-prompt",
        signal: this.signal,
      },
      o = (l = this._urlParts) == null ? void 0 : l.layerId,
      n = this._fetchRootDocument(),
      e = y(t, a),
      [p, c] = await Promise.all([e, n]),
      u = c && c.layers,
      i = p.data && p.data.layers;
    if (!Array.isArray(i)) throw new Error("expected layers array");
    if (Array.isArray(u)) {
      for (let d = 0; d < Math.min(u.length, i.length); d++)
        if (u[d].id === o) return `${t}/${i[d].id}`;
    } else if (o != null && o < i.length) return `${t}/${i[o].id}`;
    throw new Error("could not find matching associated sublayer");
  }
  async _portalItemFromServiceItemId() {
    const s = (await this._fetchRootDocument()).serviceItemId;
    if (!s) return null;
    const t = new P({ id: s, apiKey: this._apiKey }),
      a = await this._fetchServiceOwningPortalUrl();
    I(a) && (t.portal = new D({ url: a }));
    try {
      return t.load({ signal: this.signal });
    } catch (o) {
      return f(o), null;
    }
  }
}
export { W as l, k as t, V as u };
