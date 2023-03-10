import {
  Q as H,
  R as I,
  S as Q,
  T as U,
  $ as _,
  t as v,
  V as J,
  W as K,
  X as ee,
  r as x,
  s as d,
  _ as M,
  Y as C,
  Z as te,
  a0 as L,
  a1 as q,
  a2 as O,
  L as se,
  a3 as X,
  a4 as ie,
  a5 as D,
  a6 as ne,
  a7 as Z,
} from "./index.8fd7165c.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
const F = H.getLogger("esri.layers.support.ElevationSampler");
class Y {
  queryElevation(e) {
    return (function (t, s) {
      const i = j(t, s.spatialReference);
      if (!i) return null;
      switch (t.type) {
        case "point":
          (function (n, a, l) {
            n.z = l.elevationAt(a.x, a.y);
          })(t, i, s);
          break;
        case "polyline":
          (function (n, a, l) {
            y.spatialReference = a.spatialReference;
            const o = n.hasM && !n.hasZ;
            for (let r = 0; r < n.paths.length; r++) {
              const c = n.paths[r],
                m = a.paths[r];
              for (let h = 0; h < c.length; h++) {
                const u = c[h],
                  w = m[h];
                (y.x = w[0]),
                  (y.y = w[1]),
                  o && (u[3] = u[2]),
                  (u[2] = l.elevationAt(y.x, y.y));
              }
            }
            n.hasZ = !0;
          })(t, i, s);
          break;
        case "multipoint":
          (function (n, a, l) {
            y.spatialReference = a.spatialReference;
            const o = n.hasM && !n.hasZ;
            for (let r = 0; r < n.points.length; r++) {
              const c = n.points[r],
                m = a.points[r];
              (y.x = m[0]),
                (y.y = m[1]),
                o && (c[3] = c[2]),
                (c[2] = l.elevationAt(y.x, y.y));
            }
            n.hasZ = !0;
          })(t, i, s);
      }
      return t;
    })(e.clone(), this);
  }
  on() {
    return oe;
  }
  projectIfRequired(e, t) {
    return j(e, t);
  }
}
class ae extends Y {
  get spatialReference() {
    return this.extent.spatialReference;
  }
  constructor(e, t, s) {
    super(), (this.tile = e), (this.noDataValue = s);
    const i = e.tile.extent;
    (this.extent = Q(i, t.spatialReference)),
      (this.extent.zmin = e.zmin),
      (this.extent.zmax = e.zmax),
      (this._aaExtent = i);
    const n = _(t.spatialReference),
      a = t.lodAt(e.tile.level).resolution * n;
    this.demResolution = { min: a, max: a };
  }
  contains(e) {
    const t = this.projectIfRequired(e, this.spatialReference);
    return !v(t) && this.containsAt(t.x, t.y);
  }
  containsAt(e, t) {
    return J(this._aaExtent, e, t);
  }
  elevationAt(e, t) {
    if (!this.containsAt(e, t)) {
      const s = this.extent,
        i = `${s.xmin}, ${s.ymin}, ${s.xmax}, ${s.ymax}`;
      return (
        F.warn(
          "#elevationAt()",
          `Point used to sample elevation (${e}, ${t}) is outside of the sampler extent (${i})`
        ),
        this.noDataValue
      );
    }
    return K(this.tile.sample(e, t), this.noDataValue);
  }
}
class G extends Y {
  get spatialReference() {
    return this.extent.spatialReference;
  }
  constructor(e, t, s) {
    let i;
    super(),
      typeof t == "number"
        ? ((this.noDataValue = t), (i = null))
        : ((i = t), (this.noDataValue = s)),
      (this.samplers = i ? e.map((a) => new ae(a, i, this.noDataValue)) : e);
    const n = this.samplers[0];
    if (n) {
      this.extent = n.extent.clone();
      const { min: a, max: l } = n.demResolution;
      this.demResolution = { min: a, max: l };
      for (let o = 1; o < this.samplers.length; o++) {
        const r = this.samplers[o];
        this.extent.union(r.extent),
          (this.demResolution.min = Math.min(
            this.demResolution.min,
            r.demResolution.min
          )),
          (this.demResolution.max = Math.max(
            this.demResolution.max,
            r.demResolution.max
          ));
      }
    } else
      (this.extent = Q(U(), i.spatialReference)),
        (this.demResolution = { min: 0, max: 0 });
  }
  elevationAt(e, t) {
    for (const s of this.samplers)
      if (s.containsAt(e, t)) return s.elevationAt(e, t);
    return (
      F.warn(
        "#elevationAt()",
        `Point used to sample elevation (${e}, ${t}) is outside of the sampler`
      ),
      this.noDataValue
    );
  }
}
function j(p, e) {
  if (v(p)) return null;
  const t = p.spatialReference;
  if (t.equals(e)) return p;
  const s = ee(p, e);
  return (
    s ||
      F.error(
        `Cannot project geometry spatial reference (wkid:${t.wkid}) to elevation sampler spatial reference (wkid:${e.wkid})`
      ),
    s
  );
}
const y = new I(),
  oe = { remove() {} };
class le {
  constructor(e, t) {
    (this.data = e),
      (this.safeWidth = 0.99999999 * (e.width - 1)),
      (this.dx = (e.width - 1) / (t[2] - t[0])),
      (this.dy = (e.width - 1) / (t[3] - t[1])),
      (this.x0 = t[0]),
      (this.y1 = t[3]);
  }
}
class P {
  constructor(e, t = null) {
    if (((this.tile = e), x(t) && x(e))) {
      const s = e.extent;
      this._samplerData = new le(t, s);
    }
  }
  get zmin() {
    return x(this._samplerData) ? this._samplerData.data.minValue : 0;
  }
  get zmax() {
    return x(this._samplerData) ? this._samplerData.data.maxValue : 0;
  }
  sample(e, t) {
    if (v(this._samplerData)) return;
    const {
        safeWidth: s,
        data: i,
        dx: n,
        dy: a,
        y1: l,
        x0: o,
      } = this._samplerData,
      { width: r, values: c, noDataValue: m } = i,
      h = N(a * (l - t), 0, s),
      u = N(n * (e - o), 0, s),
      w = Math.floor(h),
      z = Math.floor(u),
      R = w * r + z,
      S = R + r,
      E = c[R],
      A = c[S],
      $ = c[R + 1],
      b = c[S + 1];
    if (E !== m && A !== m && $ !== m && b !== m) {
      const k = u - z,
        V = E + ($ - E) * k;
      return V + (A + (b - A) * k - V) * (h - w);
    }
  }
}
function N(p, e, t) {
  return p < e ? e : p > t ? t : p;
}
class Te {
  async queryAll(e, t, s) {
    if (
      !(e =
        s && s.ignoreInvisibleLayers ? e.filter((r) => r.visible) : e.slice())
        .length
    )
      throw new d(
        "elevation-query:invalid-layer",
        "Elevation queries require at least one elevation layer to fetch tiles from"
      );
    const i = T.fromGeometry(t);
    let n = !1;
    (s && s.returnSampleInfo) || (n = !0);
    const a = { ...g, ...s, returnSampleInfo: !0 },
      l = await this.query(e[e.length - 1], i, a),
      o = await this._queryAllContinue(e, l, a);
    return (o.geometry = o.geometry.export()), n && delete o.sampleInfo, o;
  }
  async query(e, t, s) {
    if (!e)
      throw new d(
        "elevation-query:invalid-layer",
        "Elevation queries require an elevation layer to fetch tiles from"
      );
    if (
      !t ||
      (!(t instanceof T) &&
        t.type !== "point" &&
        t.type !== "multipoint" &&
        t.type !== "polyline")
    )
      throw new d(
        "elevation-query:invalid-geometry",
        "Only point, polyline and multipoint geometries can be used to query elevation"
      );
    const i = { ...g, ...s },
      n = new re(e, t.spatialReference, i),
      a = i.signal;
    return (
      await e.load({ signal: a }),
      await this._createGeometryDescriptor(n, t, a),
      await this._selectTiles(n, a),
      await this._populateElevationTiles(n, a),
      this._sampleGeometryWithElevation(n),
      this._createQueryResult(n, a)
    );
  }
  async createSampler(e, t, s) {
    if (!e)
      throw new d(
        "elevation-query:invalid-layer",
        "Elevation queries require an elevation layer to fetch tiles from"
      );
    if (!t || t.type !== "extent")
      throw new d(
        "elevation-query:invalid-extent",
        "Invalid or undefined extent"
      );
    const i = { ...g, ...s };
    return this._createSampler(e, t, i);
  }
  async createSamplerAll(e, t, s) {
    if (
      !(e =
        s && s.ignoreInvisibleLayers ? e.filter((a) => a.visible) : e.slice())
        .length
    )
      throw new d(
        "elevation-query:invalid-layer",
        "Elevation queries require at least one elevation layer to fetch tiles from"
      );
    if (!t || t.type !== "extent")
      throw new d(
        "elevation-query:invalid-extent",
        "Invalid or undefined extent"
      );
    const i = { ...g, ...s, returnSampleInfo: !0 },
      n = await this._createSampler(e[e.length - 1], t, i);
    return this._createSamplerAllContinue(e, t, n, i);
  }
  async _createSampler(e, t, s, i) {
    const n = s.signal;
    await e.load({ signal: n });
    const a = t.spatialReference,
      l = e.tileInfo.spatialReference;
    a.equals(l) ||
      (await M([{ source: a, dest: l }], { signal: n }), (t = C(t, l)));
    const o = new ce(e, t, s, i);
    return (
      await this._selectTiles(o, n),
      await this._populateElevationTiles(o, n),
      new G(o.elevationTiles, o.layer.tileInfo, o.options.noDataValue)
    );
  }
  async _createSamplerAllContinue(e, t, s, i) {
    if ((e.pop(), !e.length)) return s;
    const n = s.samplers.map((r) => te(r.extent)),
      a = await this._createSampler(e[e.length - 1], t, i, n);
    if (a.samplers.length === 0) return s;
    const l = s.samplers.concat(a.samplers),
      o = new G(l, i.noDataValue);
    return this._createSamplerAllContinue(e, t, o, i);
  }
  async _queryAllContinue(e, t, s) {
    const i = e.pop(),
      n = t.geometry.coordinates,
      a = t.sampleInfo;
    L(a);
    const l = [],
      o = [];
    for (let h = 0; h < n.length; h++) {
      const u = a[h];
      u.demResolution >= 0
        ? u.source || (u.source = i)
        : e.length && (l.push(n[h]), o.push(h));
    }
    if (!e.length || l.length === 0) return t;
    const r = t.geometry.clone(l),
      c = await this.query(e[e.length - 1], r, s),
      m = c.sampleInfo;
    if (!m) throw new Error("no sampleInfo");
    return (
      o.forEach((h, u) => {
        (n[h].z = c.geometry.coordinates[u].z),
          (a[h].demResolution = m[u].demResolution);
      }),
      this._queryAllContinue(e, t, s)
    );
  }
  async _createQueryResult(e, t) {
    const s = await e.geometry.project(e.outSpatialReference, t);
    L(s);
    const i = { geometry: s.export(), noDataValue: e.options.noDataValue };
    return (
      e.options.returnSampleInfo && (i.sampleInfo = this._extractSampleInfo(e)),
      e.geometry.coordinates.forEach((n) => {
        (n.tile = null), (n.elevationTile = null);
      }),
      i
    );
  }
  async _createGeometryDescriptor(e, t, s) {
    let i;
    const n = e.layer.tileInfo.spatialReference;
    if (
      (t instanceof T
        ? (i = await t.project(n, s))
        : (await M([{ source: t.spatialReference, dest: n }], { signal: s }),
          (i = C(t, n))),
      !i)
    )
      throw new d(
        "elevation-query:spatial-reference-mismatch",
        `Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${n.wkid}'`
      );
    e.geometry = T.fromGeometry(i);
  }
  async _selectTiles(e, t) {
    const s = e.options.demResolution;
    if (
      (e.type === "geometry" && this._preselectOutsideLayerExtent(e),
      typeof s == "number")
    )
      this._selectTilesClosestResolution(e);
    else if (s === "finest-contiguous")
      await this._selectTilesFinestContiguous(e, t);
    else {
      if (s !== "auto")
        throw new d(
          "elevation-query:invalid-dem-resolution",
          `Invalid dem resolution value '${s}', expected a number, "finest-contiguous" or "auto"`
        );
      await this._selectTilesAuto(e, t);
    }
  }
  _preselectOutsideLayerExtent(e) {
    if (v(e.layer.fullExtent)) return;
    const t = new P(null);
    (t.sample = () => e.options.noDataValue), (e.outsideExtentTile = t);
    const s = e.layer.fullExtent;
    e.geometry.coordinates.forEach((i) => {
      const n = i.x,
        a = i.y;
      (n < s.xmin || n > s.xmax || a < s.ymin || a > s.ymax) &&
        (i.elevationTile = t);
    });
  }
  _selectTilesClosestResolution(e) {
    const t = e.layer.tileInfo,
      s = this._findNearestDemResolutionLODIndex(t, e.options.demResolution);
    e.selectTilesAtLOD(s);
  }
  _findNearestDemResolutionLODIndex(e, t) {
    const s = t / _(e.spatialReference);
    let i = e.lods[0],
      n = 0;
    for (let a = 1; a < e.lods.length; a++) {
      const l = e.lods[a];
      Math.abs(l.resolution - s) < Math.abs(i.resolution - s) &&
        ((i = l), (n = a));
    }
    return n;
  }
  async _selectTilesFinestContiguous(e, t) {
    const s = W(e.layer.tileInfo, e.options.minDemResolution);
    await this._selectTilesFinestContiguousAt(e, s, t);
  }
  async _selectTilesFinestContiguousAt(e, t, s) {
    const i = e.layer;
    if ((e.selectTilesAtLOD(t), t < 0)) return;
    const n = i.tilemapCache,
      a = e.getTilesToFetch();
    try {
      if (n)
        await q(
          Promise.all(
            a.map((l) =>
              n.fetchAvailability(l.level, l.row, l.col, { signal: s })
            )
          ),
          s
        );
      else if (
        (await this._populateElevationTiles(e, s),
        !e.allElevationTilesFetched())
      )
        throw (
          (e.clearElevationTiles(),
          new d("elevation-query:has-unavailable-tiles"))
        );
    } catch (l) {
      O(l), await this._selectTilesFinestContiguousAt(e, t - 1, s);
    }
  }
  async _populateElevationTiles(e, t) {
    const s = e.getTilesToFetch(),
      i = {},
      n = e.options.cache,
      a = e.options.noDataValue,
      l = s.map(async (o) => {
        if (o.id == null) return;
        const r = `${e.layer.uid}:${o.id}:${a}`,
          c = x(n) ? n.get(r) : null,
          m = x(c)
            ? c
            : await e.layer.fetchTile(o.level, o.row, o.col, {
                noDataValue: a,
                signal: t,
              });
        x(n) && n.put(r, m), (i[o.id] = new P(o, m));
      });
    await q(se(l), t), e.populateElevationTiles(i);
  }
  async _selectTilesAuto(e, t) {
    this._selectTilesAutoFinest(e), this._reduceTilesForMaximumRequests(e);
    const s = e.layer.tilemapCache;
    if (!s) return this._selectTilesAutoPrefetchUpsample(e, t);
    const i = e.getTilesToFetch(),
      n = {},
      a = i.map(async (l) => {
        const o = new X(null, 0, 0, 0, U()),
          r = await ie(
            s.fetchAvailabilityUpsample(l.level, l.row, l.col, o, { signal: t })
          );
        r.ok !== !1 ? l.id != null && (n[l.id] = o) : O(r.error);
      });
    await q(Promise.all(a), t), e.remapTiles(n);
  }
  _reduceTilesForMaximumRequests(e) {
    const t = e.layer.tileInfo;
    let s = 0;
    const i = {},
      n = (o) => {
        o.id != null && (o.id in i ? i[o.id]++ : ((i[o.id] = 1), s++));
      },
      a = (o) => {
        if (o.id == null) return;
        const r = i[o.id];
        r === 1 ? (delete i[o.id], s--) : (i[o.id] = r - 1);
      };
    e.forEachTileToFetch(n, a);
    let l = !0;
    for (
      ;
      l &&
      ((l = !1),
      e.forEachTileToFetch((o) => {
        s <= e.options.maximumAutoTileRequests ||
          (a(o), t.upsampleTile(o) && (l = !0), n(o));
      }, a),
      l);

    );
  }
  _selectTilesAutoFinest(e) {
    const t = W(e.layer.tileInfo, e.options.minDemResolution);
    e.selectTilesAtLOD(t, e.options.maximumAutoTileRequests);
  }
  async _selectTilesAutoPrefetchUpsample(e, t) {
    const s = e.layer.tileInfo;
    await this._populateElevationTiles(e, t);
    let i = !1;
    e.forEachTileToFetch((n, a) => {
      s.upsampleTile(n) ? (i = !0) : a();
    }),
      i && (await this._selectTilesAutoPrefetchUpsample(e, t));
  }
  _sampleGeometryWithElevation(e) {
    e.geometry.coordinates.forEach((t) => {
      const s = t.elevationTile;
      let i = e.options.noDataValue;
      if (s) {
        const n = s.sample(t.x, t.y);
        x(n) ? (i = n) : (t.elevationTile = null);
      }
      t.z = i;
    });
  }
  _extractSampleInfo(e) {
    const t = e.layer.tileInfo,
      s = _(t.spatialReference);
    return e.geometry.coordinates.map((i) => {
      let n = -1;
      return (
        i.elevationTile &&
          i.elevationTile !== e.outsideExtentTile &&
          (n = t.lodAt(i.elevationTile.tile.level).resolution * s),
        { demResolution: n }
      );
    });
  }
}
class T {
  export() {
    return this._exporter(this.coordinates, this.spatialReference);
  }
  clone(e) {
    const t = new T();
    return (
      (t.geometry = this.geometry),
      (t.spatialReference = this.spatialReference),
      (t.coordinates = e || this.coordinates.map((s) => s.clone())),
      (t._exporter = this._exporter),
      t
    );
  }
  async project(e, t) {
    if (this.spatialReference.equals(e)) return this.clone();
    await M([{ source: this.spatialReference, dest: e }], { signal: t });
    const s = new D({
        spatialReference: this.spatialReference,
        points: this.coordinates.map((l) => [l.x, l.y]),
      }),
      i = C(s, e);
    if (!i) return null;
    const n = this.coordinates.map((l, o) => {
        const r = l.clone(),
          c = i.points[o];
        return (r.x = c[0]), (r.y = c[1]), r;
      }),
      a = this.clone(n);
    return (a.spatialReference = e), a;
  }
  static fromGeometry(e) {
    const t = new T();
    if (
      ((t.geometry = e),
      (t.spatialReference = e.spatialReference),
      e instanceof T)
    )
      (t.coordinates = e.coordinates.map((s) => s.clone())),
        (t._exporter = (s, i) => {
          const n = e.clone(s);
          return (n.spatialReference = i), n;
        });
    else
      switch (e.type) {
        case "point": {
          const s = e,
            { hasZ: i, hasM: n } = s;
          (t.coordinates =
            i && n
              ? [new f(s.x, s.y, s.z, s.m)]
              : i
              ? [new f(s.x, s.y, s.z)]
              : n
              ? [new f(s.x, s.y, null, s.m)]
              : [new f(s.x, s.y)]),
            (t._exporter = (a, l) =>
              e.hasM
                ? new I(a[0].x, a[0].y, a[0].z, a[0].m, l)
                : new I(a[0].x, a[0].y, a[0].z, l));
          break;
        }
        case "multipoint": {
          const s = e,
            { hasZ: i, hasM: n } = s;
          (t.coordinates =
            i && n
              ? s.points.map((a) => new f(a[0], a[1], a[2], a[3]))
              : i
              ? s.points.map((a) => new f(a[0], a[1], a[2]))
              : n
              ? s.points.map((a) => new f(a[0], a[1], null, a[2]))
              : s.points.map((a) => new f(a[0], a[1]))),
            (t._exporter = (a, l) =>
              e.hasM
                ? new D({
                    points: a.map((o) => [o.x, o.y, o.z, o.m]),
                    hasZ: !0,
                    hasM: !0,
                    spatiaReference: l,
                  })
                : new D(
                    a.map((o) => [o.x, o.y, o.z]),
                    l
                  ));
          break;
        }
        case "polyline": {
          const s = e,
            i = [],
            n = [],
            { hasZ: a, hasM: l } = e;
          let o = 0;
          for (const r of s.paths)
            if ((n.push([o, o + r.length]), (o += r.length), a && l))
              for (const c of r) i.push(new f(c[0], c[1], c[2], c[3]));
            else if (a) for (const c of r) i.push(new f(c[0], c[1], c[2]));
            else if (l)
              for (const c of r) i.push(new f(c[0], c[1], null, c[2]));
            else for (const c of r) i.push(new f(c[0], c[1]));
          (t.coordinates = i),
            (t._exporter = (r, c) => {
              const m = e.hasM
                  ? r.map((u) => [u.x, u.y, u.z, u.m])
                  : r.map((u) => [u.x, u.y, u.z]),
                h = n.map((u) => m.slice(u[0], u[1]));
              return new ne({
                paths: h,
                hasM: e.hasM,
                hasZ: !0,
                spatialReference: c,
              });
            });
          break;
        }
      }
    return t;
  }
}
class f {
  constructor(e, t, s = null, i = null, n = null, a = null) {
    (this.x = e),
      (this.y = t),
      (this.z = s),
      (this.m = i),
      (this.tile = n),
      (this.elevationTile = a);
  }
  clone() {
    return new f(this.x, this.y, this.z, this.m);
  }
}
class B {
  constructor(e, t) {
    (this.layer = e), (this.options = t);
  }
}
class re extends B {
  constructor(e, t, s) {
    super(e, s), (this.outSpatialReference = t), (this.type = "geometry");
  }
  selectTilesAtLOD(e) {
    if (e < 0)
      this.geometry.coordinates.forEach((t) => {
        t.tile = null;
      });
    else {
      const t = this.layer.tileInfo,
        s = t.lods[e].level;
      this.geometry.coordinates.forEach((i) => {
        i.tile = t.tileAt(s, i.x, i.y);
      });
    }
  }
  allElevationTilesFetched() {
    return !this.geometry.coordinates.some((e) => !e.elevationTile);
  }
  clearElevationTiles() {
    for (const e of this.geometry.coordinates)
      e.elevationTile !== this.outsideExtentTile && (e.elevationTile = null);
  }
  populateElevationTiles(e) {
    var t;
    for (const s of this.geometry.coordinates)
      !s.elevationTile &&
        (t = s.tile) != null &&
        t.id &&
        (s.elevationTile = e[s.tile.id]);
  }
  remapTiles(e) {
    var t;
    for (const s of this.geometry.coordinates) {
      const i = (t = s.tile) == null ? void 0 : t.id;
      s.tile = i ? e[i] : null;
    }
  }
  getTilesToFetch() {
    var s;
    const e = {},
      t = [];
    for (const i of this.geometry.coordinates) {
      const n = i.tile;
      if (!n) continue;
      const a = (s = i.tile) == null ? void 0 : s.id;
      i.elevationTile || !a || e[a] || ((e[a] = n), t.push(n));
    }
    return t;
  }
  forEachTileToFetch(e) {
    for (const t of this.geometry.coordinates)
      t.tile &&
        !t.elevationTile &&
        e(t.tile, () => {
          t.tile = null;
        });
  }
}
class ce extends B {
  constructor(e, t, s, i) {
    super(e, s),
      (this.type = "extent"),
      (this.elevationTiles = []),
      (this._candidateTiles = []),
      (this._fetchedCandidates = new Set()),
      (this.extent = t.intersection(e.fullExtent)),
      (this.maskExtents = i);
  }
  selectTilesAtLOD(e, t) {
    const s = this._maximumLodForRequests(t),
      i = Math.min(s, e);
    i < 0
      ? (this._candidateTiles.length = 0)
      : this._selectCandidateTilesCoveringExtentAt(i);
  }
  _maximumLodForRequests(e) {
    const t = this.layer.tileInfo;
    if (!e) return t.lods.length - 1;
    const s = this.extent;
    if (v(s)) return -1;
    for (let i = t.lods.length - 1; i >= 0; i--) {
      const n = t.lods[i],
        a = n.resolution * t.size[0],
        l = n.resolution * t.size[1];
      if (Math.ceil(s.width / a) * Math.ceil(s.height / l) <= e) return i;
    }
    return -1;
  }
  allElevationTilesFetched() {
    return this._candidateTiles.length === this.elevationTiles.length;
  }
  clearElevationTiles() {
    (this.elevationTiles.length = 0), this._fetchedCandidates.clear();
  }
  populateElevationTiles(e) {
    for (const t of this._candidateTiles) {
      const s = t.id && e[t.id];
      s && (this._fetchedCandidates.add(t), this.elevationTiles.push(s));
    }
  }
  remapTiles(e) {
    this._candidateTiles = this._uniqueNonOverlappingTiles(
      this._candidateTiles.map((t) => e[t.id])
    );
  }
  getTilesToFetch() {
    return this._candidateTiles;
  }
  forEachTileToFetch(e, t) {
    const s = this._candidateTiles;
    (this._candidateTiles = []),
      s.forEach((i) => {
        if (this._fetchedCandidates.has(i)) return void (t && t(i));
        let n = !1;
        e(i, () => (n = !0)), n ? t && t(i) : this._candidateTiles.push(i);
      }),
      (this._candidateTiles = this._uniqueNonOverlappingTiles(
        this._candidateTiles,
        t
      ));
  }
  _uniqueNonOverlappingTiles(e, t) {
    const s = {},
      i = [];
    for (const a of e) {
      const l = a.id;
      l && !s[l] ? ((s[l] = a), i.push(a)) : t && t(a);
    }
    const n = i.sort((a, l) => a.level - l.level);
    return n.filter((a, l) => {
      for (let o = 0; o < l; o++) {
        const r = n[o].extent;
        if (r && a.extent && Z(r, a.extent)) return t && t(a), !1;
      }
      return !0;
    });
  }
  _selectCandidateTilesCoveringExtentAt(e) {
    this._candidateTiles.length = 0;
    const t = this.extent;
    if (v(t)) return;
    const s = this.layer.tileInfo,
      i = s.lods[e],
      n = s.tileAt(i.level, t.xmin, t.ymin),
      a = n.extent;
    if (v(a)) return;
    const l = i.resolution * s.size[0],
      o = i.resolution * s.size[1],
      r = Math.ceil((t.xmax - a[0]) / l),
      c = Math.ceil((t.ymax - a[1]) / o);
    for (let m = 0; m < c; m++)
      for (let h = 0; h < r; h++) {
        const u = new X(null, n.level, n.row - m, n.col + h);
        s.updateTileInfo(u),
          this._tileIsMasked(u) || this._candidateTiles.push(u);
      }
  }
  _tileIsMasked(e) {
    return (
      !!this.maskExtents &&
      this.maskExtents.some((t) => e.extent && Z(t, e.extent))
    );
  }
}
function W(p, e = 0) {
  let t = p.lods.length - 1;
  if (e > 0) {
    const s = e / _(p.spatialReference),
      i = p.lods.findIndex((n) => n.resolution < s);
    i === 0 ? (t = 0) : i > 0 && (t = i - 1);
  }
  return t;
}
const g = {
  maximumAutoTileRequests: 20,
  noDataValue: 0,
  returnSampleInfo: !1,
  demResolution: "auto",
  minDemResolution: 0,
};
export {
  Te as ElevationQuery,
  T as GeometryDescriptor,
  W as getFinestLodIndex,
};
