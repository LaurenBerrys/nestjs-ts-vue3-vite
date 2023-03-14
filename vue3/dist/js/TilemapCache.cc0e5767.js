import {
  aD as w,
  U as z,
  ez as L,
  s as f,
  bO as D,
  b3 as $,
  eA as q,
  cF as C,
  G as A,
  Q as N,
  aW as P,
  j as S,
  eB as x,
  cE as E,
  aL as U,
  eC as k,
  ae as v,
  af as b,
  dT as J,
  at as j,
  aX as B,
  a3 as F,
  ag as M,
  ap as I,
} from "./index.8fd7165c.js";
const K = {
  type: w,
  json: {
    origins: {
      service: {
        read: {
          source: ["tileInfo", "minScale", "maxScale", "minLOD", "maxLOD"],
          reader: R,
        },
      },
    },
  },
};
function R(e, t, l, a) {
  if (!e) return null;
  const { minScale: s, maxScale: n, minLOD: o, maxLOD: r } = t;
  if (o != null && r != null)
    return a && a.ignoreMinMaxLOD
      ? w.fromJSON(e)
      : w.fromJSON({
          ...e,
          lods: e.lods.filter(({ level: h }) => h != null && h >= o && h <= r),
        });
  if (s !== 0 && n !== 0) {
    const h = (m) => Math.round(1e4 * m) / 1e4,
      i = s ? h(s) : 1 / 0,
      c = n ? h(n) : -1 / 0;
    return w.fromJSON({
      ...e,
      lods: e.lods.filter((m) => {
        const p = h(m.scale);
        return p <= i && p >= c;
      }),
    });
  }
  return w.fromJSON(e);
}
class y {
  constructor() {
    (this.location = { left: 0, top: 0, width: 0, height: 0 }),
      (this._allAvailability = "unknown"),
      (this.byteSize = 40);
  }
  getAvailability(t, l) {
    if (this._allAvailability !== "unknown") return this._allAvailability;
    const a =
        (t - this.location.top) * this.location.width +
        (l - this.location.left),
      s = a % 8,
      n = a >> 3,
      o = this._tileAvailabilityBitSet;
    return n < 0 || n > o.length
      ? "unknown"
      : o[n] & (1 << s)
      ? "available"
      : "unavailable";
  }
  _updateFromData(t) {
    const l = this.location.width,
      a = this.location.height;
    let s = !0,
      n = !0;
    const o = Math.ceil((l * a) / 8),
      r = new Uint8Array(o);
    let h = 0;
    for (let i = 0; i < t.length; i++) {
      const c = i % 8;
      t[i] ? ((n = !1), (r[h] |= 1 << c)) : (s = !1), c === 7 && ++h;
    }
    n
      ? (this._allAvailability = "unavailable")
      : s
      ? (this._allAvailability = "available")
      : ((this._allAvailability = "unknown"),
        (this._tileAvailabilityBitSet = r),
        (this.byteSize += r.length));
  }
  static fromDefinition(t, l) {
    const a = t.service.request || z,
      { row: s, col: n, width: o, height: r } = t,
      h = { query: { f: "json" } };
    return (
      (l = l ? { ...h, ...l } : h),
      a(
        (function (i) {
          let c;
          if (i.service.type === "vector-tile")
            c = `${i.service.url}/tilemap/${i.level}/${i.row}/${i.col}/${i.width}/${i.height}`;
          else {
            const p = i.service.tileServers;
            c = `${
              p && p.length ? p[i.row % p.length] : i.service.url
            }/tilemap/${i.level}/${i.row}/${i.col}/${i.width}/${i.height}`;
          }
          const m = i.service.query;
          return m && (c = `${c}?${m}`), c;
        })(t),
        l
      )
        .then((i) => i.data)
        .catch((i) => {
          if (i && i.details && i.details.httpStatus === 422)
            return {
              location: { top: s, left: n, width: o, height: r },
              valid: !0,
              data: L(o * r, 0),
            };
          throw i;
        })
        .then((i) => {
          if (
            i.location &&
            (i.location.top !== s ||
              i.location.left !== n ||
              i.location.width !== o ||
              i.location.height !== r)
          )
            throw new f(
              "tilemap:location-mismatch",
              "Tilemap response for different location than requested",
              {
                response: i,
                definition: { top: s, left: n, width: o, height: r },
              }
            );
          return y.fromJSON(i);
        })
    );
  }
  static fromJSON(t) {
    y._validateJSON(t);
    const l = new y();
    return (
      (l.location = Object.freeze(D(t.location))),
      l._updateFromData(t.data),
      Object.freeze(l)
    );
  }
  static _validateJSON(t) {
    if (!t || !t.location)
      throw new f(
        "tilemap:missing-location",
        "Location missing from tilemap response"
      );
    if (t.valid === !1)
      throw new f("tilemap:invalid", "Tilemap response was marked as invalid");
    if (!t.data)
      throw new f("tilemap:missing-data", "Data missing from tilemap response");
    if (!Array.isArray(t.data))
      throw new f("tilemap:data-mismatch", "Data must be an array of numbers");
    if (t.data.length !== t.location.width * t.location.height)
      throw new f(
        "tilemap:data-mismatch",
        "Number of data items does not match width/height of tilemap"
      );
  }
}
function T(e) {
  return `${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;
}
var d;
let u = (d = class extends $(I) {
  constructor(e) {
    super(e),
      (this._pendingTilemapRequests = {}),
      (this._availableLevels = {}),
      (this.levels = 5),
      (this.cacheByteSize = 2 * q.MEGABYTES),
      (this.request = z),
      (this._prefetchingEnabled = !0);
  }
  initialize() {
    (this._tilemapCache = new C(this.cacheByteSize)),
      this.addHandles([
        A(
          () => {
            const { layer: e } = this;
            return [
              e == null ? void 0 : e.parsedUrl,
              e == null ? void 0 : e.tileServers,
              e == null ? void 0 : e.apiKey,
              e == null ? void 0 : e.customParameters,
            ];
          },
          () => this._initializeTilemapDefinition()
        ),
        A(
          () => {
            var e, t;
            return (t = (e = this.layer) == null ? void 0 : e.tileInfo) == null
              ? void 0
              : t.lods;
          },
          (e) => this._initializeAvailableLevels(e),
          j
        ),
      ]),
      this._initializeTilemapDefinition();
  }
  castLevels(e) {
    return e <= 2
      ? (N.getLogger(this.declaredClass).error(
          "Minimum levels for Tilemap is 3, but got ",
          e
        ),
        3)
      : e;
  }
  get size() {
    return 1 << this.levels;
  }
  fetchTilemap(e, t, l, a) {
    if (!this._availableLevels[e])
      return Promise.reject(
        new f(
          "tilemap-cache:level-unavailable",
          `Level ${e} is unavailable in the service`
        )
      );
    const s = this._tmpTilemapDefinition,
      n = this._tilemapFromCache(e, t, l, s);
    if (n) return Promise.resolve(n);
    const o = a && a.signal;
    return (
      (a = { ...a, signal: null }),
      new Promise((r, h) => {
        P(o, () => h(B()));
        const i = T(s);
        let c = this._pendingTilemapRequests[i];
        if (!c) {
          c = y
            .fromDefinition(s, a)
            .then((p) => (this._tilemapCache.put(i, p, p.byteSize), p));
          const m = () => delete this._pendingTilemapRequests[i];
          (this._pendingTilemapRequests[i] = c), c.then(m, m);
        }
        c.then(r, h);
      })
    );
  }
  getAvailability(e, t, l) {
    if (!this._availableLevels[e]) return "unavailable";
    const a = this._tilemapFromCache(e, t, l, this._tmpTilemapDefinition);
    return a ? a.getAvailability(t, l) : "unknown";
  }
  fetchAvailability(e, t, l, a) {
    return this._availableLevels[e]
      ? this.fetchTilemap(e, t, l, a)
          .catch((s) => s)
          .then((s) => {
            if (s instanceof y) {
              const n = s.getAvailability(t, l);
              if (n === "unavailable")
                throw new f(
                  "tile-map:tile-unavailable",
                  "Tile is not available",
                  {
                    level: e,
                    row: t,
                    col: l,
                  }
                );
              return n;
            }
            if (S(s)) throw s;
            return "unknown";
          })
      : Promise.reject(
          new f(
            "tilemap-cache:level-unavailable",
            `Level ${e} is unavailable in the service`
          )
        );
  }
  fetchAvailabilityUpsample(e, t, l, a, s) {
    (a.level = e), (a.row = t), (a.col = l);
    const n = this.layer.tileInfo;
    n.updateTileInfo(a);
    const o = this.fetchAvailability(e, t, l, s).catch((r) => {
      if (S(r)) throw r;
      if (n.upsampleTile(a))
        return this.fetchAvailabilityUpsample(a.level, a.row, a.col, a);
      throw r;
    });
    return this._fetchAvailabilityUpsamplePrefetch(a.id, e, t, l, s, o), o;
  }
  async _fetchAvailabilityUpsamplePrefetch(e, t, l, a, s, n) {
    if (!this._prefetchingEnabled || e == null) return;
    const o = `prefetch-${e}`;
    if (this.handles.has(o)) return;
    const r = new AbortController();
    n.then(
      () => r.abort(),
      () => r.abort()
    );
    let h = !1;
    const i = {
      remove() {
        h || ((h = !0), r.abort());
      },
    };
    if (
      (this.handles.add(i, o),
      await x(10, r.signal).catch(() => {}),
      h || ((h = !0), this.handles.remove(o)),
      E(r))
    )
      return;
    const c = new F(e, t, l, a),
      m = { ...s, signal: r.signal },
      p = this.layer.tileInfo;
    for (
      let O = 0;
      d._prefetches.length < d._maxPrefetch && p.upsampleTile(c);
      ++O
    ) {
      const g = this.fetchAvailability(c.level, c.row, c.col, m);
      d._prefetches.push(g);
      const _ = () => {
        d._prefetches.removeUnordered(g);
      };
      g.then(_, _);
    }
  }
  _initializeTilemapDefinition() {
    var a;
    if (!this.layer.parsedUrl) return;
    const { parsedUrl: e, apiKey: t, customParameters: l } = this.layer;
    this._tilemapCache.clear(),
      (this._tmpTilemapDefinition = {
        service: {
          url: e.path,
          query: U({
            ...e.query,
            ...l,
            token: t ?? ((a = e.query) == null ? void 0 : a.token),
          }),
          tileServers: this.layer.tileServers,
          request: this.request,
          type: this.layer.type,
        },
        width: this.size,
        height: this.size,
        level: 0,
        row: 0,
        col: 0,
      });
  }
  _tilemapFromCache(e, t, l, a) {
    (a.level = e), (a.row = t - (t % this.size)), (a.col = l - (l % this.size));
    const s = T(a);
    return this._tilemapCache.get(s);
  }
  _initializeAvailableLevels(e) {
    (this._availableLevels = {}),
      e && e.forEach((t) => (this._availableLevels[t.level] = !0));
  }
  get test() {
    const e = this;
    return {
      get prefetchingEnabled() {
        return e._prefetchingEnabled;
      },
      set prefetchingEnabled(t) {
        e._prefetchingEnabled = t;
      },
      hasTilemap: (t, l, a) =>
        !!e._tilemapFromCache(t, l, a, e._tmpTilemapDefinition),
    };
  }
});
(u._maxPrefetch = 4),
  (u._prefetches = new k({ initialSize: d._maxPrefetch })),
  v([b({ constructOnly: !0, type: Number })], u.prototype, "levels", void 0),
  v([J("levels")], u.prototype, "castLevels", null),
  v([b({ readOnly: !0, type: Number })], u.prototype, "size", null),
  v(
    [b({ constructOnly: !0, type: Number })],
    u.prototype,
    "cacheByteSize",
    void 0
  ),
  v([b({ constructOnly: !0 })], u.prototype, "layer", void 0),
  v([b({ constructOnly: !0 })], u.prototype, "request", void 0),
  (u = d = v([M("esri.layers.support.TilemapCache")], u));
export { R as n, K as r, u as z };
