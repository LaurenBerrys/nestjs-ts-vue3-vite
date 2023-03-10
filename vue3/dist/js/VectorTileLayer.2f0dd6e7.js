import {
  Q as Y,
  s as L,
  gM as H,
  kI as Z,
  cy as R,
  aL as tt,
  U as x,
  f as F,
  ad as $,
  j as et,
  dt as rt,
  aW as st,
  cE as it,
  bO as I,
  jG as W,
  eD as k,
  e2 as U,
  ar as z,
  aZ as B,
  kJ as ot,
  k5 as J,
  k8 as K,
  hH as G,
  hM as lt,
  kK as X,
  R as at,
  iq as nt,
  aD as j,
  im as ut,
  io as pt,
  es as ct,
  et as ht,
  eu as yt,
  iT as dt,
  iA as ft,
  ev as mt,
  a2 as M,
  q as gt,
  kL as At,
  kM as St,
  aC as N,
  J as wt,
  ae as h,
  af as f,
  aH as vt,
  dm as xt,
  dl as _t,
  ag as Ut,
  db as bt,
} from "./index.8fd7165c.js";
import { s as It } from "./ArcGISCachedService.aac5cdc8.js";
import { n as Rt, z as Tt } from "./TilemapCache.cc0e5767.js";
import { e as Pt } from "./jsonContext.8bcdc898.js";
import { l as Dt } from "./StyleRepository.90f92f3e.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./StyleDefinition.4f77c81e.js";
import "./enums.13513a14.js";
import "./enums.fb086c25.js";
import "./enums.64ab819c.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./colorUtils.3868c6ed.js";
import "./GeometryUtils.874f8cf4.js";
import "./definitions.ce677f69.js";
let P = null,
  C = class {
    constructor(t, e) {
      (this._spriteSource = t),
        (this._maxTextureSize = e),
        (this.devicePixelRatio = 1),
        (this._spriteImageFormat = "png"),
        (this._isRetina = !1),
        (this._spritesData = {}),
        (this.image = null),
        (this.width = null),
        (this.height = null),
        (this.loadStatus = "not-loaded"),
        t.type === "url" &&
          t.spriteFormat &&
          (this._spriteImageFormat = t.spriteFormat),
        t.pixelRatio && (this.devicePixelRatio = t.pixelRatio),
        (this.baseURL = t.spriteUrl);
    }
    get spriteNames() {
      const t = [];
      for (const e in this._spritesData) t.push(e);
      return t.sort(), t;
    }
    getSpriteInfo(t) {
      return this._spritesData ? this._spritesData[t] : null;
    }
    async load(t) {
      if (this.baseURL) {
        this.loadStatus = "loading";
        try {
          await this._loadSprites(t), (this.loadStatus = "loaded");
        } catch {
          this.loadStatus = "failed";
        }
      } else this.loadStatus = "failed";
    }
    async _loadSprites(t) {
      this._isRetina = this.devicePixelRatio > 1.15;
      const {
          width: e,
          height: r,
          data: s,
          json: l,
        } = await this._getSpriteData(this._spriteSource, t),
        i = Object.keys(l);
      if (!i || i.length === 0 || !s)
        return (
          (this._spritesData = this.image = null),
          void (this.width = this.height = 0)
        );
      (this._spritesData = l), (this.width = e), (this.height = r);
      const o = Math.max(this._maxTextureSize, 4096);
      if (e > o || r > o) {
        const n = `Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${o} pixels}`;
        throw (
          (Y.getLogger("esri.layers.support.SpriteSource").error(n),
          new L("SpriteSource", n))
        );
      }
      let u;
      for (let n = 0; n < s.length; n += 4)
        (u = s[n + 3] / 255),
          (s[n] = s[n] * u),
          (s[n + 1] = s[n + 1] * u),
          (s[n + 2] = s[n + 2] * u);
      this.image = s;
    }
    async _getSpriteData(t, e) {
      if (t.type === "image") {
        let a, c;
        if (this.devicePixelRatio < 1.15) {
          if (!t.spriteSource1x)
            throw new L(
              "SpriteSource",
              "no image data provided for low resolution sprites!"
            );
          (a = t.spriteSource1x.image), (c = t.spriteSource1x.json);
        } else {
          if (!t.spriteSource2x)
            throw new L(
              "SpriteSource",
              "no image data provided for high resolution sprites!"
            );
          (a = t.spriteSource2x.image), (c = t.spriteSource2x.json);
        }
        return "width" in a &&
          "height" in a &&
          "data" in a &&
          (H(a.data) || Z(a.data))
          ? {
              width: a.width,
              height: a.height,
              data: new Uint8Array(a.data),
              json: c,
            }
          : { ...q(a), json: c };
      }
      const r = R(this.baseURL),
        s = r.query ? "?" + tt(r.query) : "",
        l = this._isRetina ? "@2x" : "",
        i = `${r.path}${l}.${this._spriteImageFormat}${s}`,
        o = `${r.path}${l}.json${s}`,
        [u, n] = await Promise.all([
          x(o, e),
          x(i, { responseType: "image", ...e }),
        ]);
      return { ...q(n.data), json: u.data };
    }
  };
function q(t) {
  const e = document.createElement("canvas"),
    r = e.getContext("2d");
  (e.width = t.width),
    (e.height = t.height),
    r.drawImage(t, 0, 0, t.width, t.height);
  const s = r.getImageData(0, 0, t.width, t.height);
  return { width: t.width, height: t.height, data: new Uint8Array(s.data) };
}
let Lt = class {
  constructor(t) {
    this.url = t;
  }
  async fetchTileIndex() {
    return (
      this._tileIndexPromise ||
        (this._tileIndexPromise = x(this.url).then((t) => t.data.index)),
      this._tileIndexPromise
    );
  }
  async dataKey(t, e) {
    const r = await this.fetchTileIndex();
    return F(e), this._getIndexedDataKey(r, t);
  }
  _getIndexedDataKey(t, e) {
    const r = [e];
    if (
      e.level < 0 ||
      e.row < 0 ||
      e.col < 0 ||
      e.row >> e.level > 0 ||
      e.col >> e.level > 0
    )
      return null;
    let s = e;
    for (; s.level !== 0; )
      (s = new $(s.level - 1, s.row >> 1, s.col >> 1, s.world)), r.push(s);
    let l,
      i,
      o = t,
      u = r.pop();
    if (o === 1) return u;
    for (; r.length; )
      if (((l = r.pop()), (i = (1 & l.col) + ((1 & l.row) << 1)), o)) {
        if (o[i] === 0) {
          u = null;
          break;
        }
        if (o[i] === 1) {
          u = l;
          break;
        }
        (u = l), (o = o[i]);
      }
    return u;
  }
};
class Mt {
  constructor(e) {
    (this._tileUrl = e),
      (this._promise = null),
      (this._abortController = null),
      (this._abortOptions = []);
  }
  getData(e) {
    this._promise === null &&
      ((this._abortController = new AbortController()),
      (this._promise = this._makeRequest(
        this._tileUrl,
        this._abortController.signal
      )));
    const r = this._abortOptions;
    return (
      r.push(e),
      st(e, () => {
        r.every((s) => it(s)) && this._abortController.abort();
      }),
      this._promise.then((s) => I(s))
    );
  }
  async _makeRequest(e, r) {
    const { data: s } = await x(e, { responseType: "array-buffer", signal: r });
    return s;
  }
}
const O = new Map();
function Ot(t, e, r, s, l) {
  return (function (i, o) {
    return rt(O, i, () => new Mt(i))
      .getData(o)
      .then((u) => (O.delete(i), u))
      .catch((u) => {
        throw (O.delete(i), u);
      });
  })(
    t
      .replace(/\{z\}/gi, e.toString())
      .replace(/\{y\}/gi, r.toString())
      .replace(/\{x\}/gi, s.toString()),
    l
  );
}
let Et = class {
  constructor(t, e, r) {
    (this.tilemap = null),
      (this.tileInfo = null),
      (this.capabilities = null),
      (this.fullExtent = null),
      (this.name = t),
      (this.sourceUrl = e);
    const s = R(this.sourceUrl),
      l = I(r),
      i = l.tiles;
    if (s)
      for (let y = 0; y < i.length; y++) {
        const d = R(i[y]);
        d &&
          (W(d.path) || (d.path = k(s.path, d.path)),
          (i[y] = U(d.path, { ...s.query, ...d.query })));
      }
    this.tileServers = i;
    const o =
        r.capabilities &&
        r.capabilities.split(",").map((y) => y.toLowerCase().trim()),
      u = (r == null ? void 0 : r.exportTilesAllowed) === !0,
      n = (o == null ? void 0 : o.includes("tilemap")) === !0,
      a =
        u && r.hasOwnProperty("maxExportTilesCount")
          ? r.maxExportTilesCount
          : 0;
    (this.capabilities = {
      operations: { supportsExportTiles: u, supportsTileMap: n },
      exportTiles: u ? { maxExportTilesCount: +a } : null,
    }),
      (this.tileInfo = Rt(l.tileInfo, l, null, { ignoreMinMaxLOD: !0 }));
    const c = r.tileMap ? U(k(s.path, r.tileMap), s.query ?? {}) : null;
    n
      ? ((this.type = "vector-tile"),
        (this.tilemap = new (class {
          constructor(y, d) {
            (this._tilemap = y), (this._tileIndexUrl = d);
          }
          async fetchTileIndex(y) {
            return (
              this._tileIndexPromise ||
                (this._tileIndexPromise = x(this._tileIndexUrl, {
                  query: { ...(y == null ? void 0 : y.query) },
                }).then((d) => d.data.index)),
              this._tileIndexPromise
            );
          }
          dataKey(y, d) {
            const { level: g, row: A, col: m } = y,
              b = new $(y);
            return this._tilemap
              .fetchAvailabilityUpsample(g, A, m, b, d)
              .then(() => ((b.world = y.world), b))
              .catch((T) => {
                if (et(T)) throw T;
                return null;
              });
          }
        })(
          new Tt({
            layer: {
              parsedUrl: s,
              tileInfo: this.tileInfo,
              type: "vector-tile",
              tileServers: this.tileServers,
            },
          }),
          c
        )))
      : c && (this.tilemap = new Lt(c)),
      (this.fullExtent = z.fromJSON(r.fullExtent));
  }
  destroy() {}
  async getRefKey(t, e) {
    var r;
    return (await ((r = this.tilemap) == null ? void 0 : r.dataKey(t, e))) ?? t;
  }
  requestTile(t, e, r, s) {
    return Ot(this.tileServers[e % this.tileServers.length], t, e, r, s);
  }
  isCompatibleWith(t) {
    const e = this.tileInfo,
      r = t.tileInfo;
    if (
      !e.spatialReference.equals(r.spatialReference) ||
      !e.origin.equals(r.origin) ||
      Math.round(e.dpi) !== Math.round(r.dpi)
    )
      return !1;
    const s = e.lods,
      l = r.lods,
      i = Math.min(s.length, l.length);
    for (let o = 0; o < i; o++) {
      const u = s[o],
        n = l[o];
      if (u.level !== n.level || Math.round(u.scale) !== Math.round(n.scale))
        return !1;
    }
    return !0;
  }
};
const E = B.defaults && B.defaults.io.corsEnabledServers;
function w(t) {
  if (!t) return;
  const e = ot(t);
  E && !E.includes(e) && E.push(e);
}
function v(...t) {
  let e;
  for (const r of t)
    r != null &&
      (J(r)
        ? e && (e = e.split("://")[0] + ":" + r.trim())
        : (e = W(r) ? r : k(e, r)));
  return e ? K(e) : void 0;
}
async function S(t, e, r, s, l) {
  let i, o, u;
  if ((F(l), typeof r == "string")) {
    const a = G(r);
    w(a),
      (u = await x(a, {
        ...l,
        responseType: "json",
        query: { f: "json", ...(l == null ? void 0 : l.query) },
      })),
      u.ssl &&
        (i && (i = i.replace(/^http:/i, "https:")),
        o && (o = o.replace(/^http:/i, "https:"))),
      (i = a),
      (o = a);
  } else r != null && ((u = { data: r }), (i = r.jsonUrl || null), (o = s));
  const n = u == null ? void 0 : u.data;
  if (Q(n))
    return (
      (t.styleUrl = i || null),
      (async function (a, c, y, d) {
        const g = y ? lt(y) : X();
        (a.styleBase = g),
          (a.style = c),
          a.styleUrl && w(a.styleUrl),
          c["sprite-format"] &&
            c["sprite-format"].toLowerCase() === "webp" &&
            (a.spriteFormat = "webp");
        const A = [];
        if (c.sources && c.sources.esri) {
          const m = c.sources.esri;
          m.url
            ? await S(a, "esri", v(g, m.url), void 0, d)
            : A.push(S(a, "esri", m, g, d));
        }
        for (const m of Object.keys(c.sources))
          m !== "esri" &&
            c.sources[m].type === "vector" &&
            (c.sources[m].url
              ? A.push(S(a, m, v(g, c.sources[m].url), void 0, d))
              : c.sources[m].tiles && A.push(S(a, m, c.sources[m], g, d)));
        await Promise.all(A);
      })(t, n, o, l)
    );
  if (
    (function (a) {
      return !Q(a);
    })(n)
  )
    return t.sourceUrl
      ? V(t, n, o, !1, e, l)
      : ((t.sourceUrl = i || null), V(t, n, o, !0, e, l));
  throw new Error(
    "You must specify the URL or the JSON for a service or for a style."
  );
}
function Q(t) {
  return !!(t != null && t.sources);
}
async function V(t, e, r, s, l, i) {
  const o = r ? K(r) + "/" : X(),
    u = (function (a, c) {
      if (a.hasOwnProperty("tileInfo")) return a;
      const y = {
          xmin: -20037507067161843e-9,
          ymin: -20037507067161843e-9,
          xmax: 20037507067161843e-9,
          ymax: 20037507067161843e-9,
          spatialReference: { wkid: 102100 },
        },
        d = 512;
      let g = 78271.51696400007,
        A = 2958287637957775e-7;
      const m = [],
        b = a.hasOwnProperty("minzoom") ? +a.minzoom : 0,
        T = a.hasOwnProperty("maxzoom") ? +a.maxzoom : 22;
      for (let _ = 0; _ <= T; _++)
        _ >= b && m.push({ level: _, scale: A, resolution: g }),
          (g /= 2),
          (A /= 2);
      for (const _ of a.tiles ?? []) w(v(c, _));
      return {
        capabilities: "TilesOnly",
        initialExtent: y,
        fullExtent: y,
        minScale: 0,
        maxScale: 0,
        tiles: a.tiles,
        tileInfo: {
          rows: d,
          cols: d,
          dpi: 96,
          format: "pbf",
          origin: { x: -20037508342787e-6, y: 20037508342787e-6 },
          lods: m,
          spatialReference: { wkid: 102100 },
        },
      };
    })(e, o),
    n = new Et(l, U(o, (i == null ? void 0 : i.query) ?? {}), u);
  if (!s && t.primarySourceName in t.sourceNameToSource) {
    const a = t.sourceNameToSource[t.primarySourceName];
    if (!a.isCompatibleWith(n)) return;
    n.fullExtent != null &&
      (a.fullExtent != null
        ? a.fullExtent.union(n.fullExtent)
        : (a.fullExtent = n.fullExtent.clone())),
      a.tileInfo &&
        n.tileInfo &&
        a.tileInfo.lods.length < n.tileInfo.lods.length &&
        (a.tileInfo = n.tileInfo);
  }
  if (
    (s
      ? ((t.sourceBase = o),
        (t.source = e),
        (t.validatedSource = u),
        (t.primarySourceName = l),
        t.sourceUrl && w(t.sourceUrl))
      : w(o),
    (t.sourceNameToSource[l] = n),
    !t.style)
  ) {
    if (e.defaultStyles == null) throw new Error();
    return typeof e.defaultStyles == "string"
      ? S(t, "", v(o, e.defaultStyles, "root.json"), void 0, i)
      : S(t, "", e.defaultStyles, v(o, "root.json"), i);
  }
}
const D = 1e-6;
function kt(t, e) {
  if (t === e) return !0;
  if (
    (t == null && e != null) ||
    (t != null && e == null) ||
    t == null ||
    e == null ||
    !t.spatialReference.equals(e.spatialReference) ||
    t.dpi !== e.dpi
  )
    return !1;
  const r = t.origin,
    s = e.origin;
  if (Math.abs(r.x - s.x) >= D || Math.abs(r.y - s.y) >= D) return !1;
  let l, i;
  t.lods[0].scale > e.lods[0].scale ? ((l = t), (i = e)) : ((i = t), (l = e));
  for (
    let o = l.lods[0].scale;
    o >= i.lods[i.lods.length - 1].scale - D;
    o /= 2
  )
    if (Math.abs(o - i.lods[0].scale) < D) return !0;
  return !1;
}
function jt(t, e) {
  if (t === e) return t;
  if (t == null && e != null) return e;
  if (t != null && e == null) return t;
  if (t == null || e == null) return null;
  const r = t.size[0],
    s = t.format,
    l = t.dpi,
    i = new at({ x: t.origin.x, y: t.origin.y }),
    o = t.spatialReference,
    u = t.lods[0].scale > e.lods[0].scale ? t.lods[0] : e.lods[0],
    n =
      t.lods[t.lods.length - 1].scale <= e.lods[e.lods.length - 1].scale
        ? t.lods[t.lods.length - 1]
        : e.lods[e.lods.length - 1],
    a = u.scale,
    c = u.resolution,
    y = n.scale,
    d = [];
  let g = a,
    A = c,
    m = 0;
  for (; g > y; )
    d.push(new nt({ level: m, resolution: A, scale: g })),
      m++,
      (g /= 2),
      (A /= 2);
  return new j({
    size: [r, r],
    dpi: l,
    format: s || "pbf",
    origin: i,
    lods: d,
    spatialReference: o,
  });
}
let p = class extends ut(pt(It(ct(ht(yt(dt(ft(mt(bt))))))))) {
  constructor(...t) {
    super(...t),
      (this._spriteSourceMap = new Map()),
      (this.currentStyleInfo = null),
      (this.style = null),
      (this.isReference = null),
      (this.operationalLayerType = "VectorTileLayer"),
      (this.type = "vector-tile"),
      (this.url = null),
      (this.showCollisionBoxes = "none"),
      (this.path = null);
  }
  normalizeCtorArgs(t, e) {
    return typeof t == "string" ? { url: t, ...e } : t;
  }
  destroy() {
    if (this.sourceNameToSource)
      for (const t of Object.values(this.sourceNameToSource))
        t == null || t.destroy();
    this._spriteSourceMap.clear();
  }
  async prefetchResources(t) {
    await this.loadSpriteSource(globalThis.devicePixelRatio || 1, t);
  }
  load(t) {
    const e = this.loadFromPortal(
      { supportedTypes: ["Vector Tile Service"], supportsData: !1 },
      t
    )
      .catch(M)
      .then(async () => {
        if (!this.portalItem || !this.portalItem.id) return;
        const r = `${this.portalItem.itemUrl}/resources/styles/root.json`;
        (
          await x(r, {
            ...t,
            query: { f: "json", ...this.customParameters, token: this.apiKey },
          })
        ).data && this.read({ url: r }, Pt(this.portalItem));
      })
      .catch(M)
      .then(() => this._loadStyle(t));
    return this.addResolvingPromise(e), Promise.resolve(this);
  }
  get attributionDataUrl() {
    const t = this.currentStyleInfo,
      e = t && t.serviceUrl && R(t.serviceUrl);
    if (!e) return null;
    const r = this._getDefaultAttribution(e.path);
    return r ? U(r, { ...this.customParameters, token: this.apiKey }) : null;
  }
  get capabilities() {
    const t = this.primarySource;
    return t
      ? t.capabilities
      : {
          operations: { supportsExportTiles: !1, supportsTileMap: !1 },
          exportTiles: null,
        };
  }
  get fullExtent() {
    var t;
    return ((t = this.primarySource) == null ? void 0 : t.fullExtent) || null;
  }
  get parsedUrl() {
    return this.serviceUrl ? R(this.serviceUrl) : null;
  }
  get serviceUrl() {
    return (this.currentStyleInfo && this.currentStyleInfo.serviceUrl) || null;
  }
  get spatialReference() {
    var t;
    return ((t = this.tileInfo) == null ? void 0 : t.spatialReference) ?? null;
  }
  get styleUrl() {
    return (this.currentStyleInfo && this.currentStyleInfo.styleUrl) || null;
  }
  writeStyleUrl(t, e) {
    t && J(t) && (t = `https:${t}`);
    const r = gt(At(t));
    e.styleUrl = St(t, r);
  }
  get tileInfo() {
    var r;
    const t = [];
    for (const s in this.sourceNameToSource) t.push(this.sourceNameToSource[s]);
    let e = ((r = this.primarySource) == null ? void 0 : r.tileInfo) || new j();
    if (t.length > 1)
      for (let s = 0; s < t.length; s++)
        kt(e, t[s].tileInfo) && (e = jt(e, t[s].tileInfo));
    return e;
  }
  readVersion(t, e) {
    return e.version ? parseFloat(e.version) : parseFloat(e.currentVersion);
  }
  async loadSpriteSource(t = 1, e) {
    var r, s;
    if (!this._spriteSourceMap.has(t)) {
      const l = N("2d").maxTextureSize,
        i =
          (r = this.currentStyleInfo) != null && r.spriteUrl
            ? U(this.currentStyleInfo.spriteUrl, {
                ...this.customParameters,
                token: this.apiKey,
              })
            : null,
        o = new C(
          {
            type: "url",
            spriteUrl: i,
            pixelRatio: t,
            spriteFormat:
              (s = this.currentStyleInfo) == null ? void 0 : s.spriteFormat,
          },
          l
        );
      await o.load(e), this._spriteSourceMap.set(t, o);
    }
    return this._spriteSourceMap.get(t);
  }
  async setSpriteSource(t, e) {
    if (!t) return null;
    const r = N("2d").maxTextureSize,
      s = t.spriteUrl,
      l = s ? U(s, { ...this.customParameters, token: this.apiKey }) : null;
    if (!l && t.type === "url") return null;
    const i = new C(t, r);
    try {
      await i.load(e);
      const o = t.pixelRatio || 1;
      return (
        this._spriteSourceMap.clear(),
        this._spriteSourceMap.set(o, i),
        l && this.currentStyleInfo && (this.currentStyleInfo.spriteUrl = l),
        this.emit("spriteSource-change", { spriteSource: i }),
        i
      );
    } catch (o) {
      M(o);
    }
    return null;
  }
  async loadStyle(t, e) {
    var s;
    const r = t || this.style || this.url;
    return (
      (this._loadingTask && typeof r == "string" && this.url === r) ||
        ((s = this._loadingTask) == null || s.abort(),
        (this._loadingTask = wt(
          (l) => (
            this._spriteSourceMap.clear(),
            this._getSourceAndStyle(r, { signal: l })
          ),
          e
        ))),
      this._loadingTask.promise
    );
  }
  getStyleLayerId(t) {
    return this.styleRepository.getStyleLayerId(t);
  }
  getStyleLayerIndex(t) {
    return this.styleRepository.getStyleLayerIndex(t);
  }
  getPaintProperties(t) {
    return I(this.styleRepository.getPaintProperties(t));
  }
  setPaintProperties(t, e) {
    const r = this.styleRepository.isPainterDataDriven(t);
    this.styleRepository.setPaintProperties(t, e);
    const s = this.styleRepository.isPainterDataDriven(t);
    this.emit("paint-change", { layer: t, paint: e, isDataDriven: r || s });
  }
  getStyleLayer(t) {
    return I(this.styleRepository.getStyleLayer(t));
  }
  setStyleLayer(t, e) {
    this.styleRepository.setStyleLayer(t, e),
      this.emit("style-layer-change", { layer: t, index: e });
  }
  deleteStyleLayer(t) {
    this.styleRepository.deleteStyleLayer(t),
      this.emit("delete-style-layer", { layer: t });
  }
  getLayoutProperties(t) {
    return I(this.styleRepository.getLayoutProperties(t));
  }
  setLayoutProperties(t, e) {
    this.styleRepository.setLayoutProperties(t, e),
      this.emit("layout-change", { layer: t, layout: e });
  }
  setStyleLayerVisibility(t, e) {
    this.styleRepository.setStyleLayerVisibility(t, e),
      this.emit("style-layer-visibility-change", { layer: t, visibility: e });
  }
  getStyleLayerVisibility(t) {
    return this.styleRepository.getStyleLayerVisibility(t);
  }
  write(t, e) {
    return e != null && e.origin && !this.styleUrl
      ? (e.messages &&
          e.messages.push(
            new L(
              "vectortilelayer:unsupported",
              `VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,
              { layer: this }
            )
          ),
        null)
      : super.write(t, e);
  }
  getTileUrl(t, e, r) {
    return null;
  }
  async _getSourceAndStyle(t, e) {
    if (!t) throw new Error("invalid style!");
    const r = await (async function (s, l) {
      const i = {
          source: null,
          sourceBase: null,
          sourceUrl: null,
          validatedSource: null,
          style: null,
          styleBase: null,
          styleUrl: null,
          sourceNameToSource: {},
          primarySourceName: "",
          spriteFormat: "png",
        },
        [o, u] = typeof s == "string" ? [s, null] : [null, s.jsonUrl];
      await S(i, "esri", s, u, l);
      const n = {
        layerDefinition: i.validatedSource,
        url: o,
        serviceUrl: i.sourceUrl,
        style: i.style,
        styleUrl: i.styleUrl,
        spriteUrl: i.style.sprite && v(i.styleBase, i.style.sprite),
        spriteFormat: i.spriteFormat,
        glyphsUrl: i.style.glyphs && v(i.styleBase, i.style.glyphs),
        sourceNameToSource: i.sourceNameToSource,
        primarySourceName: i.primarySourceName,
      };
      return w(n.spriteUrl), w(n.glyphsUrl), n;
    })(t, { ...e, query: { ...this.customParameters, token: this.apiKey } });
    r.spriteFormat === "webp" &&
      ((await (function (s) {
        if (P) return P;
        const l = {
          lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
          lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
          alpha:
            "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
          animation:
            "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
        };
        return (
          (P = new Promise((i) => {
            const o = new Image();
            (o.onload = () => {
              (o.onload = o.onerror = null), i(o.width > 0 && o.height > 0);
            }),
              (o.onerror = () => {
                (o.onload = o.onerror = null), i(!1);
              }),
              (o.src = "data:image/webp;base64," + l[s]);
          })),
          P
        );
      })("lossy")) ||
        (r.spriteFormat = "png")),
      this._set("currentStyleInfo", { ...r }),
      typeof t == "string"
        ? ((this.url = t), (this.style = null))
        : ((this.url = null), (this.style = t)),
      this._set("sourceNameToSource", r.sourceNameToSource),
      this._set("primarySource", r.sourceNameToSource[r.primarySourceName]),
      this._set("styleRepository", new Dt(r.style)),
      this.read(r.layerDefinition, { origin: "service" }),
      this.emit("load-style");
  }
  _getDefaultAttribution(t) {
    const e = t.match(
        /^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i
      ),
      r = [
        "OpenStreetMap_v2",
        "OpenStreetMap_Daylight_v2",
        "OpenStreetMap_Export_v2",
        "OpenStreetMap_FTS_v2",
        "OpenStreetMap_GCS_v2",
        "World_Basemap",
        "World_Basemap_v2",
        "World_Basemap_Export_v2",
        "World_Basemap_GCS_v2",
        "World_Basemap_WGS84",
        "World_Contours_v2",
      ];
    if (!e) return;
    const s = e[2] && e[2].toLowerCase();
    if (!s) return;
    const l = e[1] || "";
    for (const i of r)
      if (i.toLowerCase().includes(s))
        return G(`//static.arcgis.com/attribution/Vector${l}/${i}`);
  }
  async _loadStyle(t) {
    var e;
    return (
      ((e = this._loadingTask) == null ? void 0 : e.promise) ??
      this.loadStyle(null, t)
    );
  }
};
h([f({ readOnly: !0 })], p.prototype, "attributionDataUrl", null),
  h([f({ type: ["show", "hide"] })], p.prototype, "listMode", void 0),
  h([f({ json: { read: !0, write: !0 } })], p.prototype, "blendMode", void 0),
  h(
    [f({ readOnly: !0, json: { read: !1 } })],
    p.prototype,
    "capabilities",
    null
  ),
  h([f({ readOnly: !0 })], p.prototype, "currentStyleInfo", void 0),
  h(
    [f({ json: { read: !1 }, readOnly: !0, type: z })],
    p.prototype,
    "fullExtent",
    null
  ),
  h([f()], p.prototype, "style", void 0),
  h(
    [
      f({
        type: Boolean,
        json: {
          read: !1,
          write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) },
        },
      }),
    ],
    p.prototype,
    "isReference",
    void 0
  ),
  h(
    [f({ type: ["VectorTileLayer"] })],
    p.prototype,
    "operationalLayerType",
    void 0
  ),
  h([f({ readOnly: !0 })], p.prototype, "parsedUrl", null),
  h([f({ readOnly: !0 })], p.prototype, "serviceUrl", null),
  h([f({ type: vt, readOnly: !0 })], p.prototype, "spatialReference", null),
  h([f({ readOnly: !0 })], p.prototype, "styleRepository", void 0),
  h([f({ readOnly: !0 })], p.prototype, "sourceNameToSource", void 0),
  h([f({ readOnly: !0 })], p.prototype, "primarySource", void 0),
  h(
    [
      f({
        type: String,
        readOnly: !0,
        json: {
          write: { ignoreOrigin: !0 },
          origins: {
            "web-document": { write: { ignoreOrigin: !0, isRequired: !0 } },
          },
        },
      }),
    ],
    p.prototype,
    "styleUrl",
    null
  ),
  h(
    [xt(["portal-item", "web-document"], "styleUrl")],
    p.prototype,
    "writeStyleUrl",
    null
  ),
  h(
    [
      f({
        json: { read: !1, origins: { service: { read: !1 } } },
        readOnly: !0,
        type: j,
      }),
    ],
    p.prototype,
    "tileInfo",
    null
  ),
  h(
    [f({ json: { read: !1 }, readOnly: !0, value: "vector-tile" })],
    p.prototype,
    "type",
    void 0
  ),
  h(
    [
      f({
        json: {
          origins: {
            "web-document": { read: { source: "styleUrl" } },
            "portal-item": { read: { source: "url" } },
          },
          write: !1,
          read: !1,
        },
      }),
    ],
    p.prototype,
    "url",
    void 0
  ),
  h([f({ readOnly: !0 })], p.prototype, "version", void 0),
  h(
    [_t("version", ["version", "currentVersion"])],
    p.prototype,
    "readVersion",
    null
  ),
  h([f({ type: String })], p.prototype, "showCollisionBoxes", void 0),
  h(
    [
      f({
        type: String,
        json: { origins: { "web-scene": { read: !0, write: !0 } }, read: !1 },
      }),
    ],
    p.prototype,
    "path",
    void 0
  ),
  (p = h([Ut("esri.layers.VectorTileLayer")], p));
const se = p;
export { se as default };
