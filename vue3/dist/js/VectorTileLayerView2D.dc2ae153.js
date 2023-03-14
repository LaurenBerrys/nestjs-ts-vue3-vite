import {
  U as Ue,
  aV as ke,
  e2 as ae,
  dB as Ve,
  aU as Ee,
  ad as L,
  j as X,
  L as ne,
  cF as ze,
  dC as ge,
  t as B,
  r as m,
  q as k,
  aw as me,
  M as be,
  i as He,
  g as we,
  e as q,
  ek as Fe,
  b0 as qe,
  D as Ne,
  T as ie,
  h as Qe,
  a9 as We,
  aD as je,
  al as Je,
  G as Ge,
  H as Ye,
  cG as Ke,
  el as $e,
  E as j,
  ac as Ze,
  Q as le,
  aa as he,
  bO as Xe,
  ae as J,
  af as Y,
  ag as et,
} from "./index.8fd7165c.js";
import { E as A, I as D } from "./enums.fb086c25.js";
import { t as M } from "./Rect.6884a4ea.js";
import {
  P as xe,
  G as Se,
  D as tt,
  F as C,
  O as H,
  I as ce,
  R as F,
  C as Te,
  E as st,
} from "./enums.64ab819c.js";
import { E as Ie } from "./Texture.fb0c670a.js";
import { e as it } from "./rasterizingUtils.3a0dd398.js";
import { E as v, f as z } from "./VertexArrayObject.1b8f3583.js";
import { e as K, t as rt, c as ot } from "./config.1337d16e.js";
import { r as Ce } from "./TiledDisplayObject.3b82e169.js";
import {
  n as at,
  l as V,
  r as nt,
  i as re,
  a as R,
} from "./StyleDefinition.4f77c81e.js";
import { T as U } from "./color.4c5303e9.js";
import { i as lt } from "./TileContainer.4bfeb0d8.js";
import { l as ue } from "./StyleRepository.90f92f3e.js";
import { f as ht, u as ct } from "./LayerView.d8517e2e.js";
import "./ProgramTemplate.4bbf0f5e.js";
import { r as ut } from "./Container.a5892366.js";
import { t as dt } from "./VertexElementDescriptor.2925c6af.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./floatRGBA.6f2fa7cd.js";
import "./enums.13513a14.js";
import "./WGLContainer.e7ddd41d.js";
import "./definitions.ce677f69.js";
import "./MaterialKey.97cb3dc8.js";
import "./utils.1f803f1b.js";
import "./GeometryUtils.82ab0a13.js";
import "./earcut.9f54f087.js";
import "./colorUtils.3868c6ed.js";
import "./GeometryUtils.874f8cf4.js";
class G {
  constructor(e, t) {
    (this._width = 0),
      (this._height = 0),
      (this._free = []),
      (this._width = e),
      (this._height = t),
      this._free.push(new M(0, 0, e, t));
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  allocate(e, t) {
    if (e > this._width || t > this._height) return new M();
    let s = null,
      i = -1;
    for (let r = 0; r < this._free.length; ++r) {
      const o = this._free[r];
      e <= o.width &&
        t <= o.height &&
        (s === null || (o.y <= s.y && o.x <= s.x)) &&
        ((s = o), (i = r));
    }
    return s === null
      ? new M()
      : (this._free.splice(i, 1),
        s.width < s.height
          ? (s.width > e &&
              this._free.push(new M(s.x + e, s.y, s.width - e, t)),
            s.height > t &&
              this._free.push(new M(s.x, s.y + t, s.width, s.height - t)))
          : (s.width > e &&
              this._free.push(new M(s.x + e, s.y, s.width - e, s.height)),
            s.height > t &&
              this._free.push(new M(s.x, s.y + t, e, s.height - t))),
        new M(s.x, s.y, e, t));
  }
  release(e) {
    for (let t = 0; t < this._free.length; ++t) {
      const s = this._free[t];
      if (s.y === e.y && s.height === e.height && s.x + s.width === e.x)
        s.width += e.width;
      else if (s.x === e.x && s.width === e.width && s.y + s.height === e.y)
        s.height += e.height;
      else if (e.y === s.y && e.height === s.height && e.x + e.width === s.x)
        (s.x = e.x), (s.width += e.width);
      else {
        if (e.x !== s.x || e.width !== s.width || e.y + e.height !== s.y)
          continue;
        (s.y = e.y), (s.height += e.height);
      }
      this._free.splice(t, 1), this.release(e);
    }
    this._free.push(e);
  }
}
let de = class {
    constructor(n, e, t) {
      (this.width = 0),
        (this.height = 0),
        (this._dirties = []),
        (this._glyphData = []),
        (this._currentPage = 0),
        (this._glyphIndex = {}),
        (this._textures = []),
        (this._rangePromises = new Map()),
        (this.width = n),
        (this.height = e),
        (this._glyphSource = t),
        (this._binPack = new G(n - 4, e - 4)),
        this._glyphData.push(new Uint8Array(n * e)),
        this._dirties.push(!0),
        this._textures.push(void 0);
    }
    getGlyphItems(n, e) {
      const t = [],
        s = this._glyphSource,
        i = new Set();
      for (const o of e) {
        const a = Math.floor(0.00390625 * o);
        i.add(a);
      }
      const r = [];
      return (
        i.forEach((o) => {
          if (o <= 256) {
            const a = n + o;
            if (this._rangePromises.has(a)) r.push(this._rangePromises.get(a));
            else {
              const l = s.getRange(n, o).then(
                () => {
                  this._rangePromises.delete(a);
                },
                () => {
                  this._rangePromises.delete(a);
                }
              );
              this._rangePromises.set(a, l), r.push(l);
            }
          }
        }),
        Promise.all(r).then(() => {
          let o = this._glyphIndex[n];
          o || ((o = {}), (this._glyphIndex[n] = o));
          for (const a of e) {
            const l = o[a];
            if (l) {
              t[a] = {
                sdf: !0,
                rect: l.rect,
                metrics: l.metrics,
                page: l.page,
                code: a,
              };
              continue;
            }
            const h = s.getGlyph(n, a);
            if (!h || !h.metrics) continue;
            const y = h.metrics;
            let u;
            if (y.width === 0) u = new M(0, 0, 0, 0);
            else {
              const c = y.width + 6,
                _ = y.height + 2 * 3;
              let f = c % 4 ? 4 - (c % 4) : 4,
                g = _ % 4 ? 4 - (_ % 4) : 4;
              f === 1 && (f = 5),
                g === 1 && (g = 5),
                (u = this._binPack.allocate(c + f, _ + g)),
                u.isEmpty &&
                  (this._dirties[this._currentPage] ||
                    (this._glyphData[this._currentPage] = null),
                  (this._currentPage = this._glyphData.length),
                  this._glyphData.push(
                    new Uint8Array(this.width * this.height)
                  ),
                  this._dirties.push(!0),
                  this._textures.push(void 0),
                  (this._binPack = new G(this.width - 4, this.height - 4)),
                  (u = this._binPack.allocate(c + f, _ + g)));
              const S = this._glyphData[this._currentPage],
                b = h.bitmap;
              let p, x;
              if (b)
                for (let I = 0; I < _; I++) {
                  (p = c * I), (x = this.width * (u.y + I + 1) + u.x);
                  for (let T = 0; T < c; T++) S[x + T + 1] = b[p + T];
                }
            }
            (o[a] = {
              rect: u,
              metrics: y,
              tileIDs: null,
              page: this._currentPage,
            }),
              (t[a] = {
                sdf: !0,
                rect: u,
                metrics: y,
                page: this._currentPage,
                code: a,
              }),
              (this._dirties[this._currentPage] = !0);
          }
          return t;
        })
      );
    }
    removeGlyphs(n) {
      for (const e in this._glyphIndex) {
        const t = this._glyphIndex[e];
        if (!t) continue;
        let s;
        for (const i in t)
          if (((s = t[i]), s.tileIDs.delete(n), s.tileIDs.size === 0)) {
            const r = this._glyphData[s.page],
              o = s.rect;
            let a, l;
            for (let h = 0; h < o.height; h++)
              for (a = this.width * (o.y + h) + o.x, l = 0; l < o.width; l++)
                r[a + l] = 0;
            delete t[i], (this._dirties[s.page] = !0);
          }
      }
    }
    bind(n, e, t, s = 0) {
      this._textures[t] ||
        (this._textures[t] = new Ie(
          n,
          {
            pixelFormat: xe.ALPHA,
            dataType: Se.UNSIGNED_BYTE,
            width: this.width,
            height: this.height,
          },
          new Uint8Array(this.width * this.height)
        ));
      const i = this._textures[t];
      i.setSamplingMode(e),
        this._dirties[t] && i.setData(this._glyphData[t]),
        n.bindTexture(i, s),
        (this._dirties[t] = !1);
    }
    dispose() {
      this._binPack = null;
      for (const n of this._textures) n && n.dispose();
      this._textures.length = 0;
    }
  },
  ee = class {
    constructor(n) {
      if (((this._metrics = []), (this._bitmaps = []), n))
        for (; n.next(); )
          switch (n.tag()) {
            case 1: {
              const e = n.getMessage();
              for (; e.next(); )
                switch (e.tag()) {
                  case 3: {
                    const t = e.getMessage();
                    let s, i, r, o, a, l, h;
                    for (; t.next(); )
                      switch (t.tag()) {
                        case 1:
                          s = t.getUInt32();
                          break;
                        case 2:
                          i = t.getBytes();
                          break;
                        case 3:
                          r = t.getUInt32();
                          break;
                        case 4:
                          o = t.getUInt32();
                          break;
                        case 5:
                          a = t.getSInt32();
                          break;
                        case 6:
                          l = t.getSInt32();
                          break;
                        case 7:
                          h = t.getUInt32();
                          break;
                        default:
                          t.skip();
                      }
                    t.release(),
                      s &&
                        ((this._metrics[s] = {
                          width: r,
                          height: o,
                          left: a,
                          top: l,
                          advance: h,
                        }),
                        (this._bitmaps[s] = i));
                    break;
                  }
                  default:
                    e.skip();
                }
              e.release();
              break;
            }
            default:
              n.skip();
          }
    }
    getMetrics(n) {
      return this._metrics[n];
    }
    getBitmap(n) {
      return this._bitmaps[n];
    }
  },
  ye = class {
    constructor(n) {
      (this._glyphInfo = {}), (this._baseURL = n);
    }
    getRange(n, e) {
      const t = this._getFontStack(n);
      if (t.getRange(e)) return Promise.resolve();
      const s = 256 * e,
        i = s + 255;
      if (this._baseURL) {
        const r = this._baseURL
          .replace("{fontstack}", n)
          .replace("{range}", s + "-" + i);
        return Ue(r, { responseType: "array-buffer" })
          .then((o) => {
            t.addRange(
              e,
              new ee(new ke(new Uint8Array(o.data), new DataView(o.data)))
            );
          })
          .catch(() => {
            t.addRange(e, new ee());
          });
      }
      return t.addRange(e, new ee()), Promise.resolve();
    }
    getGlyph(n, e) {
      const t = this._getFontStack(n);
      if (!t) return;
      const s = Math.floor(e / 256);
      if (s > 256) return;
      const i = t.getRange(s);
      return i ? { metrics: i.getMetrics(e), bitmap: i.getBitmap(e) } : void 0;
    }
    _getFontStack(n) {
      let e = this._glyphInfo[n];
      return (
        e ||
          (e = this._glyphInfo[n] =
            new (class {
              constructor() {
                this._ranges = [];
              }
              getRange(t) {
                return this._ranges[t];
              }
              addRange(t, s) {
                this._ranges[t] = s;
              }
            })()),
        e
      );
    }
  },
  te = class ve {
    constructor(e, t, s = 0) {
      (this._size = []),
        (this._mosaicsData = []),
        (this._textures = []),
        (this._dirties = []),
        (this._maxItemSize = 0),
        (this._currentPage = 0),
        (this._pageWidth = 0),
        (this._pageHeight = 0),
        (this._mosaicRects = {}),
        (this.pixelRatio = 1),
        (this._pageWidth = e),
        (this._pageHeight = t),
        s > 0 && (this._maxItemSize = s),
        (this._binPack = new G(e - 4, t - 4));
    }
    dispose() {
      (this._binPack = null), (this._mosaicRects = {});
      for (const e of this._textures) e && e.dispose();
      this._textures.length = 0;
    }
    getWidth(e) {
      return e >= this._size.length ? -1 : this._size[e][0];
    }
    getHeight(e) {
      return e >= this._size.length ? -1 : this._size[e][1];
    }
    getPageSize(e) {
      return e >= this._size.length ? null : this._size[e];
    }
    setSpriteSource(e) {
      if (
        (this.dispose(),
        (this.pixelRatio = e.devicePixelRatio),
        this._mosaicsData.length === 0)
      ) {
        this._binPack = new G(this._pageWidth - 4, this._pageHeight - 4);
        const t = Math.floor(this._pageWidth),
          s = Math.floor(this._pageHeight),
          i = new Uint32Array(t * s);
        (this._mosaicsData[0] = i),
          this._dirties.push(!0),
          this._size.push([this._pageWidth, this._pageHeight]),
          this._textures.push(void 0);
      }
      this._sprites = e;
    }
    getSpriteItem(e, t = !1) {
      let s,
        i,
        r = this._mosaicRects[e];
      if (r) return r;
      if (
        !this._sprites ||
        this._sprites.loadStatus !== "loaded" ||
        (e && e.startsWith("dasharray-")
          ? (([s, i] = this._rasterizeDash(e)), (t = !0))
          : (s = this._sprites.getSpriteInfo(e)),
        !s || !s.width || !s.height || s.width < 0 || s.height < 0)
      )
        return null;
      const o = s.width,
        a = s.height,
        [l, h, y] = this._allocateImage(o, a);
      return l.width <= 0
        ? null
        : (this._copy(l, s, h, y, t, i),
          (r = {
            rect: l,
            width: o,
            height: a,
            sdf: s.sdf,
            simplePattern: !1,
            pixelRatio: s.pixelRatio,
            page: h,
          }),
          (this._mosaicRects[e] = r),
          r);
    }
    getSpriteItems(e) {
      const t = {};
      for (const s of e) t[s.name] = this.getSpriteItem(s.name, s.repeat);
      return t;
    }
    getMosaicItemPosition(e, t) {
      const s = this.getSpriteItem(e, t),
        i = s && s.rect;
      if (!i) return null;
      (i.width = s.width), (i.height = s.height);
      const r = s.width,
        o = s.height;
      return {
        tl: [i.x + 2, i.y + 2],
        br: [i.x + 2 + r, i.y + 2 + o],
        page: s.page,
      };
    }
    bind(e, t, s = 0, i = 0) {
      if (s >= this._size.length || s >= this._mosaicsData.length) return;
      this._textures[s] ||
        (this._textures[s] = new Ie(
          e,
          {
            pixelFormat: xe.RGBA,
            dataType: Se.UNSIGNED_BYTE,
            wrapMode: tt.CLAMP_TO_EDGE,
            width: this._size[s][0],
            height: this._size[s][1],
          },
          new Uint8Array(this._mosaicsData[s].buffer)
        ));
      const r = this._textures[s];
      r.setSamplingMode(t),
        this._dirties[s] &&
          r.setData(new Uint8Array(this._mosaicsData[s].buffer)),
        e.bindTexture(r, i),
        (this._dirties[s] = !1);
    }
    static _copyBits(e, t, s, i, r, o, a, l, h, y, u) {
      let d = i * t + s,
        c = l * o + a;
      if (u) {
        c -= o;
        for (let _ = -1; _ <= y; _++, d = (((_ + y) % y) + i) * t + s, c += o)
          for (let f = -1; f <= h; f++) r[c + f] = e[d + ((f + h) % h)];
      } else
        for (let _ = 0; _ < y; _++) {
          for (let f = 0; f < h; f++) r[c + f] = e[d + f];
          (d += t), (c += o);
        }
    }
    _copy(e, t, s, i, r, o) {
      if (
        !this._sprites ||
        this._sprites.loadStatus !== "loaded" ||
        s >= this._mosaicsData.length
      )
        return;
      const a = new Uint32Array(o ? o.buffer : this._sprites.image.buffer),
        l = this._mosaicsData[s],
        h = o ? t.width : this._sprites.width;
      ve._copyBits(
        a,
        h,
        t.x,
        t.y,
        l,
        i[0],
        e.x + 2,
        e.y + 2,
        t.width,
        t.height,
        r
      ),
        (this._dirties[s] = !0);
    }
    _allocateImage(e, t) {
      (e += 2), (t += 2);
      const s = Math.max(e, t);
      if (this._maxItemSize && this._maxItemSize < s) {
        const a = new M(0, 0, e, t);
        return (
          this._mosaicsData.push(new Uint32Array(e * t)),
          this._dirties.push(!0),
          this._size.push([e, t]),
          this._textures.push(void 0),
          [a, this._mosaicsData.length - 1, [e, t]]
        );
      }
      let i = e % 4 ? 4 - (e % 4) : 4,
        r = t % 4 ? 4 - (t % 4) : 4;
      i === 1 && (i = 5), r === 1 && (r = 5);
      const o = this._binPack.allocate(e + i, t + r);
      return o.width <= 0
        ? (this._dirties[this._currentPage] ||
            (this._mosaicsData[this._currentPage] = null),
          (this._currentPage = this._mosaicsData.length),
          this._mosaicsData.push(
            new Uint32Array(this._pageWidth * this._pageHeight)
          ),
          this._dirties.push(!0),
          this._size.push([this._pageWidth, this._pageHeight]),
          this._textures.push(void 0),
          (this._binPack = new G(this._pageWidth - 4, this._pageHeight - 4)),
          this._allocateImage(e, t))
        : [o, this._currentPage, [this._pageWidth, this._pageHeight]];
    }
    _rasterizeDash(e) {
      const t = e.match(/\[(.*?)\]/);
      if (!t) return null;
      const s = t[1].split(",").map(Number),
        i = e.slice(e.lastIndexOf("-") + 1),
        [r, o, a] = it(s, i);
      return [
        { x: 0, y: 0, width: o, height: a, sdf: !0, pixelRatio: 1 },
        new Uint8Array(r.buffer),
      ];
    }
  };
const yt = (n, e) => n + 1 / (1 << (2 * e));
class ft {
  constructor(e, t) {
    (this._tiles = new Map()),
      (this._tileCache = new ze(40, (s) => s.dispose())),
      (this._viewSize = [0, 0]),
      (this._visibleTiles = new Map()),
      (this.acquireTile = e.acquireTile),
      (this.releaseTile = e.releaseTile),
      (this.tileInfoView = e.tileInfoView),
      (this._container = t);
  }
  destroy() {
    for (const [e, t] of this._tiles) t.dispose();
    (this._tiles = null), this._tileCache.clear(), (this._tileCache = null);
  }
  update(e) {
    this._updateCacheSize(e);
    const t = this.tileInfoView,
      s = t.getTileCoverage(e.state, 0, "smallest"),
      { spans: i, lodInfo: r } = s,
      { level: o } = r,
      a = this._tiles,
      l = new Set(),
      h = new Set();
    for (const { row: u, colFrom: d, colTo: c } of i)
      for (let _ = d; _ <= c; _++) {
        const f = L.getId(o, u, r.normalizeCol(_), r.getWorldForColumn(_)),
          g = this._getOrAcquireTile(f);
        l.add(f), g.processed() ? this._addToContainer(g) : h.add(new L(f));
      }
    for (const [u, d] of a) d.isCoverage = l.has(u);
    for (const u of h) this._findPlaceholdersForMissingTiles(u, l);
    let y = !1;
    for (const [u, d] of a)
      (d.neededForCoverage = l.has(u)),
        d.neededForCoverage ||
          (d.isHoldingForFade && t.intersects(s, d.key) && l.add(u)),
        d.isFading && (y = !0);
    for (const [u, d] of this._tiles) l.has(u) || this._releaseTile(u);
    return ge.pool.release(s), !y;
  }
  clear() {
    this._tiles.clear(), this._tileCache.clear(), this._visibleTiles.clear();
  }
  clearCache() {
    this._tileCache.clear();
  }
  _findPlaceholdersForMissingTiles(e, t) {
    const s = [];
    for (const [r, o] of this._tiles) this._addPlaceholderChild(s, o, e, t);
    const i = s.reduce(yt, 0);
    Math.abs(1 - i) < 1e-6 || this._addPlaceholderParent(e.id, t);
  }
  _addPlaceholderChild(e, t, s, i) {
    t.key.level <= s.level ||
      !t.hasData() ||
      ((function (r, o) {
        const a = o.level - r.level;
        return (
          r.row === o.row >> a && r.col === o.col >> a && r.world === o.world
        );
      })(s, t.key) &&
        (this._addToContainer(t), i.add(t.id), e.push(t.key.level - s.level)));
  }
  _addPlaceholderParent(e, t) {
    const s = this._tiles;
    let i = e;
    for (;;) {
      if (((i = _t(i)), !i || t.has(i))) return;
      const r = s.get(i);
      if (r && r.hasData()) return this._addToContainer(r), void t.add(r.id);
    }
  }
  _getOrAcquireTile(e) {
    let t = this._tiles.get(e);
    return (
      t ||
      ((t = this._tileCache.pop(e)),
      t || (t = this.acquireTile(new L(e))),
      this._tiles.set(e, t),
      t)
    );
  }
  _releaseTile(e) {
    const t = this._tiles.get(e);
    this.releaseTile(t),
      this._removeFromContainer(t),
      this._tiles.delete(e),
      t.hasData() ? this._tileCache.put(e, t, 1) : t.dispose();
  }
  _addToContainer(e) {
    let t;
    const s = [],
      i = this._container;
    if (i.contains(e)) return;
    const r = this._visibleTiles;
    for (const [o, a] of r)
      this._canConnectDirectly(e, a) && s.push(a),
        B(t) && this._canConnectDirectly(a, e) && (t = a);
    if (m(t)) {
      for (const o of s)
        t.childrenTiles.delete(o), e.childrenTiles.add(o), (o.parentTile = e);
      t.childrenTiles.add(e), (e.parentTile = t);
    } else for (const o of s) e.childrenTiles.add(o), (o.parentTile = e);
    r.set(e.id, e), i.addChild(e);
  }
  _removeFromContainer(e) {
    if (
      (this._visibleTiles.delete(e.id),
      this._container.removeChild(e),
      m(e.parentTile))
    ) {
      e.parentTile.childrenTiles.delete(e);
      for (const t of e.childrenTiles)
        m(e.parentTile) && e.parentTile.childrenTiles.add(t);
    }
    for (const t of e.childrenTiles) t.parentTile = e.parentTile;
    (e.parentTile = null), e.childrenTiles.clear();
  }
  _canConnectDirectly(e, t) {
    const s = e.key;
    let { level: i, row: r, col: o, world: a } = t.key;
    const l = this._visibleTiles;
    for (; i > 0; ) {
      if (
        (i--,
        (r >>= 1),
        (o >>= 1),
        s.level === i && s.row === r && s.col === o && s.world === a)
      )
        return !0;
      if (l.has(`${i}/${r}/${o}/${a}`)) return !1;
    }
    return !1;
  }
  _updateCacheSize(e) {
    const t = e.state.size;
    if (t[0] === this._viewSize[0] && t[1] === this._viewSize[1]) return;
    const s = Math.ceil(t[0] / 512) + 1,
      i = Math.ceil(t[1] / 512) + 1;
    (this._viewSize[0] = t[0]),
      (this._viewSize[1] = t[1]),
      (this._tileCache.maxSize = 5 * s * i);
  }
}
function _t(n) {
  const [e, t, s, i] = n.split("/"),
    r = parseInt(e, 10);
  return r === 0
    ? null
    : `${r - 1}/${parseInt(t, 10) >> 1}/${parseInt(s, 10) >> 1}/${parseInt(
        i,
        10
      )}`;
}
let pt = class {
  constructor(n) {
    (this.xTile = 0),
      (this.yTile = 0),
      (this.hash = 0),
      (this.priority = 1),
      (this.colliders = []),
      (this.textVertexRanges = []),
      (this.iconVertexRanges = []),
      (this.tile = n);
  }
};
function fe(n, e, t, s, i, r) {
  const o = t - i;
  if (o >= 0) return (e >> o) + (s - (r << o)) * (n >> o);
  const a = -o;
  return (e - (r - (s << a)) * (n >> a)) << a;
}
let De = class {
  constructor(n, e, t) {
    (this._rows = Math.ceil(e / t)),
      (this._columns = Math.ceil(n / t)),
      (this._cellSize = t),
      (this.cells = new Array(this._rows));
    for (let s = 0; s < this._rows; s++) {
      this.cells[s] = new Array(this._columns);
      for (let i = 0; i < this._columns; i++) this.cells[s][i] = [];
    }
  }
  getCell(n, e) {
    const t = Math.min(
        Math.max(Math.floor(e / this._cellSize), 0),
        this._rows - 1
      ),
      s = Math.min(
        Math.max(Math.floor(n / this._cellSize), 0),
        this._columns - 1
      );
    return (this.cells[t] && this.cells[t][s]) || null;
  }
  getCellSpan(n, e, t, s) {
    return [
      Math.min(Math.max(Math.floor(n / this._cellSize), 0), this.columns - 1),
      Math.min(Math.max(Math.floor(e / this._cellSize), 0), this.rows - 1),
      Math.min(Math.max(Math.floor(t / this._cellSize), 0), this.columns - 1),
      Math.min(Math.max(Math.floor(s / this._cellSize), 0), this.rows - 1),
    ];
  }
  get cellSize() {
    return this._cellSize;
  }
  get columns() {
    return this._columns;
  }
  get rows() {
    return this._rows;
  }
};
function gt(n, e, t, s, i) {
  const r = n.layerData.get(i);
  if (r.type === A.SYMBOL) {
    for (const o of s) {
      const a = o.unique;
      let l;
      if (o.selectedForRendering) {
        const h = a.parts[0],
          y = h.startOpacity,
          u = h.targetOpacity;
        n.allSymbolsFadingOut = n.allSymbolsFadingOut && u === 0;
        const d = t ? Math.floor(127 * y) | (u << 7) : u ? 255 : 0;
        l = (d << 24) | (d << 16) | (d << 8) | d;
      } else l = 0;
      for (const [h, y] of o.iconVertexRanges)
        for (let u = h; u < h + y; u += 4) r.iconOpacity[u / 4] = l;
      if (o.selectedForRendering) {
        const h = a.parts[1],
          y = h.startOpacity,
          u = h.targetOpacity;
        n.allSymbolsFadingOut = n.allSymbolsFadingOut && u === 0;
        const d = t ? Math.floor(127 * y) | (u << 7) : u ? 255 : 0;
        l = (d << 24) | (d << 16) | (d << 8) | d;
      } else l = 0;
      for (const [h, y] of o.textVertexRanges)
        for (let u = h; u < h + y; u += 4) r.textOpacity[u / 4] = l;
    }
    (r.lastOpacityUpdate = e), (r.opacityChanged = !0);
  }
}
class Z {
  constructor(e, t) {
    (this.layerUIDs = []),
      (this.isDestroyed = !1),
      (this._data = e),
      (this.memoryUsed = e.byteLength);
    let s = 1;
    const i = new Uint32Array(e);
    this.layerUIDs = [];
    const r = i[s++];
    for (let o = 0; o < r; o++) this.layerUIDs[o] = i[s++];
    (this.bufferDataOffset = s),
      t && (this.layer = t.getStyleLayerByUID(this.layerUIDs[0]));
  }
  get isPreparedForRendering() {
    return B(this._data);
  }
  get offset() {
    return this.bufferDataOffset;
  }
  destroy() {
    this.isDestroyed || (this.doDestroy(), (this.isDestroyed = !0));
  }
  prepareForRendering(e) {
    B(this._data) ||
      (this.doPrepareForRendering(e, this._data, this.bufferDataOffset),
      (this._data = null));
  }
}
let mt = class extends Z {
    constructor(n, e) {
      super(n, e),
        (this.type = A.LINE),
        (this.lineIndexStart = 0),
        (this.lineIndexCount = 0);
      const t = new Uint32Array(n);
      let s = this.bufferDataOffset;
      (this.lineIndexStart = t[s++]), (this.lineIndexCount = t[s++]);
      const i = t[s++];
      if (i > 0) {
        const r = new Map();
        for (let o = 0; o < i; o++) {
          const a = t[s++],
            l = t[s++],
            h = t[s++];
          r.set(a, [l, h]);
        }
        this.patternMap = r;
      }
      this.bufferDataOffset = s;
    }
    hasData() {
      return this.lineIndexCount > 0;
    }
    triangleCount() {
      return this.lineIndexCount / 3;
    }
    doDestroy() {
      m(this.lineVertexArrayObject) && this.lineVertexArrayObject.dispose(),
        m(this.lineVertexBuffer) && this.lineVertexBuffer.dispose(),
        m(this.lineIndexBuffer) && this.lineIndexBuffer.dispose(),
        (this.lineVertexArrayObject = null),
        (this.lineVertexBuffer = null),
        (this.lineIndexBuffer = null),
        (this.memoryUsed = 0);
    }
    doPrepareForRendering(n, e, t) {
      const s = new Uint32Array(e),
        i = new Int32Array(s.buffer),
        r = s[t++];
      (this.lineVertexBuffer = v.createVertex(
        n,
        C.STATIC_DRAW,
        new Int32Array(i.buffer, 4 * t, r)
      )),
        (t += r);
      const o = s[t++];
      (this.lineIndexBuffer = v.createIndex(
        n,
        C.STATIC_DRAW,
        new Uint32Array(s.buffer, 4 * t, o)
      )),
        (t += o);
      const a = this.layer.lineMaterial;
      this.lineVertexArrayObject = new z(
        n,
        a.getAttributeLocations(),
        a.getLayoutInfo(),
        { geometry: this.lineVertexBuffer },
        this.lineIndexBuffer
      );
    }
  },
  bt = class extends Z {
    constructor(n, e) {
      super(n, e),
        (this.type = A.FILL),
        (this.fillIndexStart = 0),
        (this.fillIndexCount = 0),
        (this.outlineIndexStart = 0),
        (this.outlineIndexCount = 0);
      const t = new Uint32Array(n);
      let s = this.bufferDataOffset;
      (this.fillIndexStart = t[s++]),
        (this.fillIndexCount = t[s++]),
        (this.outlineIndexStart = t[s++]),
        (this.outlineIndexCount = t[s++]);
      const i = t[s++];
      if (i > 0) {
        const r = new Map();
        for (let o = 0; o < i; o++) {
          const a = t[s++],
            l = t[s++],
            h = t[s++];
          r.set(a, [l, h]);
        }
        this.patternMap = r;
      }
      this.bufferDataOffset = s;
    }
    hasData() {
      return this.fillIndexCount > 0 || this.outlineIndexCount > 0;
    }
    triangleCount() {
      return (this.fillIndexCount + this.outlineIndexCount) / 3;
    }
    doDestroy() {
      m(this.fillVertexArrayObject) && this.fillVertexArrayObject.dispose(),
        m(this.fillVertexBuffer) && this.fillVertexBuffer.dispose(),
        m(this.fillIndexBuffer) && this.fillIndexBuffer.dispose(),
        (this.fillVertexArrayObject = null),
        (this.fillVertexBuffer = null),
        (this.fillIndexBuffer = null),
        m(this.outlineVertexArrayObject) &&
          this.outlineVertexArrayObject.dispose(),
        m(this.outlineVertexBuffer) && this.outlineVertexBuffer.dispose(),
        m(this.outlineIndexBuffer) && this.outlineIndexBuffer.dispose(),
        (this.outlineVertexArrayObject = null),
        (this.outlineVertexBuffer = null),
        (this.outlineIndexBuffer = null),
        (this.memoryUsed = 0);
    }
    doPrepareForRendering(n, e, t) {
      const s = new Uint32Array(e),
        i = new Int32Array(s.buffer),
        r = s[t++];
      (this.fillVertexBuffer = v.createVertex(
        n,
        C.STATIC_DRAW,
        new Int32Array(i.buffer, 4 * t, r)
      )),
        (t += r);
      const o = s[t++];
      (this.fillIndexBuffer = v.createIndex(
        n,
        C.STATIC_DRAW,
        new Uint32Array(s.buffer, 4 * t, o)
      )),
        (t += o);
      const a = s[t++];
      (this.outlineVertexBuffer = v.createVertex(
        n,
        C.STATIC_DRAW,
        new Int32Array(i.buffer, 4 * t, a)
      )),
        (t += a);
      const l = s[t++];
      (this.outlineIndexBuffer = v.createIndex(
        n,
        C.STATIC_DRAW,
        new Uint32Array(s.buffer, 4 * t, l)
      )),
        (t += l);
      const h = this.layer,
        y = h.fillMaterial,
        u = h.outlineMaterial;
      (this.fillVertexArrayObject = new z(
        n,
        y.getAttributeLocations(),
        y.getLayoutInfo(),
        { geometry: this.fillVertexBuffer },
        this.fillIndexBuffer
      )),
        (this.outlineVertexArrayObject = new z(
          n,
          u.getAttributeLocations(),
          u.getLayoutInfo(),
          { geometry: this.outlineVertexBuffer },
          this.outlineIndexBuffer
        ));
    }
  };
class wt extends Z {
  constructor(e, t, s) {
    super(e, t),
      (this.type = A.SYMBOL),
      (this.iconPerPageElementsMap = new Map()),
      (this.glyphPerPageElementsMap = new Map()),
      (this.symbolInstances = []),
      (this.isIconSDF = !1),
      (this.opacityChanged = !1),
      (this.lastOpacityUpdate = 0),
      (this.symbols = []);
    const i = new Uint32Array(e),
      r = new Int32Array(e),
      o = new Float32Array(e);
    let a = this.bufferDataOffset;
    this.isIconSDF = !!i[a++];
    const l = i[a++];
    for (let d = 0; d < l; d++) {
      const c = i[a++],
        _ = i[a++],
        f = i[a++];
      this.iconPerPageElementsMap.set(c, [_, f]);
    }
    const h = i[a++];
    for (let d = 0; d < h; d++) {
      const c = i[a++],
        _ = i[a++],
        f = i[a++];
      this.glyphPerPageElementsMap.set(c, [_, f]);
    }
    const y = i[a++],
      u = i[a++];
    (this.iconOpacity = new Int32Array(y)),
      (this.textOpacity = new Int32Array(u)),
      (a = (function (d, c, _, f, g, S) {
        const b = c[f++];
        for (let p = 0; p < b; p++) {
          const x = new pt(S);
          (x.xTile = c[f++]),
            (x.yTile = c[f++]),
            (x.hash = c[f++]),
            (x.priority = c[f++]);
          const I = c[f++];
          for (let w = 0; w < I; w++) {
            const O = c[f++],
              N = c[f++],
              Q = c[f++],
              W = c[f++],
              Ae = !!c[f++],
              Pe = c[f++],
              Me = _[f++],
              Le = _[f++],
              Be = c[f++],
              Oe = c[f++];
            x.colliders.push({
              xTile: O,
              yTile: N,
              dxPixels: Q,
              dyPixels: W,
              hard: Ae,
              partIndex: Pe,
              width: Be,
              height: Oe,
              minLod: Me,
              maxLod: Le,
            });
          }
          const T = d[f++];
          for (let w = 0; w < T; w++) x.textVertexRanges.push([d[f++], d[f++]]);
          const P = d[f++];
          for (let w = 0; w < P; w++) x.iconVertexRanges.push([d[f++], d[f++]]);
          g.push(x);
        }
        return f;
      })(i, r, o, a, this.symbols, s)),
      (this.bufferDataOffset = a);
  }
  hasData() {
    return (
      this.iconPerPageElementsMap.size > 0 ||
      this.glyphPerPageElementsMap.size > 0
    );
  }
  triangleCount() {
    let e = 0;
    for (const [t, s] of this.iconPerPageElementsMap) e += s[1];
    for (const [t, s] of this.glyphPerPageElementsMap) e += s[1];
    return e / 3;
  }
  doDestroy() {
    m(this.iconVertexArrayObject) && this.iconVertexArrayObject.dispose(),
      m(this.iconVertexBuffer) && this.iconVertexBuffer.dispose(),
      m(this.iconOpacityBuffer) && this.iconOpacityBuffer.dispose(),
      m(this.iconIndexBuffer) && this.iconIndexBuffer.dispose(),
      (this.iconVertexArrayObject = null),
      (this.iconVertexBuffer = null),
      (this.iconOpacityBuffer = null),
      (this.iconIndexBuffer = null),
      m(this.textVertexArrayObject) && this.textVertexArrayObject.dispose(),
      m(this.textVertexBuffer) && this.textVertexBuffer.dispose(),
      m(this.textOpacityBuffer) && this.textOpacityBuffer.dispose(),
      m(this.textIndexBuffer) && this.textIndexBuffer.dispose(),
      (this.textVertexArrayObject = null),
      (this.textVertexBuffer = null),
      (this.textOpacityBuffer = null),
      (this.textIndexBuffer = null),
      (this.memoryUsed = 0);
  }
  updateOpacityInfo() {
    if (!this.opacityChanged) return;
    this.opacityChanged = !1;
    const e = k(this.iconOpacity),
      t = k(this.iconOpacityBuffer);
    e.length > 0 && e.byteLength === t.size && t.setSubData(e, 0, 0, e.length);
    const s = k(this.textOpacity),
      i = k(this.textOpacityBuffer);
    s.length > 0 && s.byteLength === i.size && i.setSubData(s, 0, 0, s.length);
  }
  doPrepareForRendering(e, t, s) {
    const i = new Uint32Array(t),
      r = new Int32Array(i.buffer),
      o = i[s++];
    (this.iconVertexBuffer = v.createVertex(
      e,
      C.STATIC_DRAW,
      new Int32Array(r.buffer, 4 * s, o)
    )),
      (s += o);
    const a = i[s++];
    (this.iconIndexBuffer = v.createIndex(
      e,
      C.STATIC_DRAW,
      new Uint32Array(i.buffer, 4 * s, a)
    )),
      (s += a);
    const l = i[s++];
    (this.textVertexBuffer = v.createVertex(
      e,
      C.STATIC_DRAW,
      new Int32Array(r.buffer, 4 * s, l)
    )),
      (s += l);
    const h = i[s++];
    (this.textIndexBuffer = v.createIndex(
      e,
      C.STATIC_DRAW,
      new Uint32Array(i.buffer, 4 * s, h)
    )),
      (s += h),
      (this.iconOpacityBuffer = v.createVertex(
        e,
        C.STATIC_DRAW,
        k(this.iconOpacity).buffer
      )),
      (this.textOpacityBuffer = v.createVertex(
        e,
        C.STATIC_DRAW,
        k(this.textOpacity).buffer
      ));
    const y = this.layer,
      u = y.iconMaterial,
      d = y.textMaterial;
    (this.iconVertexArrayObject = new z(
      e,
      u.getAttributeLocations(),
      u.getLayoutInfo(),
      { geometry: this.iconVertexBuffer, opacity: this.iconOpacityBuffer },
      this.iconIndexBuffer
    )),
      (this.textVertexArrayObject = new z(
        e,
        d.getAttributeLocations(),
        d.getLayoutInfo(),
        { geometry: this.textVertexBuffer, opacity: this.textOpacityBuffer },
        this.textIndexBuffer
      ));
  }
}
class xt extends Z {
  constructor(e, t) {
    super(e, t),
      (this.type = A.CIRCLE),
      (this.circleIndexStart = 0),
      (this.circleIndexCount = 0);
    const s = new Uint32Array(e);
    let i = this.bufferDataOffset;
    (this.circleIndexStart = s[i++]),
      (this.circleIndexCount = s[i++]),
      (this.bufferDataOffset = i);
  }
  hasData() {
    return this.circleIndexCount > 0;
  }
  triangleCount() {
    return this.circleIndexCount / 3;
  }
  doDestroy() {
    m(this.circleVertexArrayObject) && this.circleVertexArrayObject.dispose(),
      m(this.circleVertexBuffer) && this.circleVertexBuffer.dispose(),
      m(this.circleIndexBuffer) && this.circleIndexBuffer.dispose(),
      (this.circleVertexArrayObject = null),
      (this.circleVertexBuffer = null),
      (this.circleIndexBuffer = null),
      (this.memoryUsed = 0);
  }
  doPrepareForRendering(e, t, s) {
    const i = new Uint32Array(t),
      r = new Int32Array(i.buffer),
      o = i[s++];
    (this.circleVertexBuffer = v.createVertex(
      e,
      C.STATIC_DRAW,
      new Int32Array(r.buffer, 4 * s, o)
    )),
      (s += o);
    const a = i[s++];
    (this.circleIndexBuffer = v.createIndex(
      e,
      C.STATIC_DRAW,
      new Uint32Array(i.buffer, 4 * s, a)
    )),
      (s += a);
    const l = this.layer.circleMaterial;
    this.circleVertexArrayObject = new z(
      e,
      l.getAttributeLocations(),
      l.getLayoutInfo(),
      { geometry: this.circleVertexBuffer },
      this.circleIndexBuffer
    );
  }
}
let St = class Re extends Ce {
  constructor(e, t, s, i, r, o, a, l = null) {
    super(e, t, s, i, r, o, 4096, 4096),
      (this._memCache = l),
      (this.type = "vector-tile"),
      (this._referenced = 0),
      (this._hasSymbolBuckets = !1),
      (this._memoryUsedByLayerData = 0),
      (this.layerData = new Map()),
      (this.layerCount = 0),
      (this.status = "loading"),
      (this.allSymbolsFadingOut = !1),
      (this.lastOpacityUpdate = 0),
      (this.symbols = new Map()),
      (this.isCoverage = !1),
      (this.neededForCoverage = !1),
      (this.decluttered = !1),
      (this.invalidating = !1),
      (this.parentTile = null),
      (this.childrenTiles = new Set()),
      (this._processed = !1),
      (this._referenced = 1),
      (this.styleRepository = a),
      (this.id = e.id);
  }
  get hasSymbolBuckets() {
    return this._hasSymbolBuckets;
  }
  get isFading() {
    return (
      this._hasSymbolBuckets && performance.now() - this.lastOpacityUpdate < K
    );
  }
  get isHoldingForFade() {
    return (
      this._hasSymbolBuckets &&
      (!this.allSymbolsFadingOut ||
        performance.now() - this.lastOpacityUpdate < K)
    );
  }
  get wasRequested() {
    return (
      this.status === "errored" ||
      this.status === "loaded" ||
      this.status === "reloading"
    );
  }
  setData(e) {
    this.changeDataImpl(e),
      this.requestRender(),
      this.ready(),
      (this.invalidating = !1),
      (this._processed = !0);
  }
  deleteLayerData(e) {
    let t = !1;
    for (const s of e)
      if (this.layerData.has(s)) {
        const i = this.layerData.get(s);
        (this._memoryUsedByLayerData -= i.memoryUsed),
          i.type === A.SYMBOL &&
            this.symbols.has(s) &&
            (this.symbols.delete(s), (t = !0)),
          i.destroy(),
          this.layerData.delete(s),
          this.layerCount--;
      }
    m(this._memCache) &&
      this._memCache.updateSize(this.key.id, this, this._memoryUsedByLayerData),
      t && this.emit("symbols-changed"),
      this.requestRender();
  }
  processed() {
    return this._processed;
  }
  hasData() {
    return this.layerCount > 0;
  }
  dispose() {
    this.status !== "unloaded" &&
      (Tt.delete(this),
      Re._destroyRenderBuckets(this.layerData),
      (this.layerData = null),
      (this.layerCount = 0),
      (this._memoryUsedByLayerData = 0),
      this.destroy(),
      (this.status = "unloaded"));
  }
  release() {
    return --this._referenced == 0 && (this.dispose(), (this.stage = null), !0);
  }
  retain() {
    ++this._referenced;
  }
  get referenced() {
    return this._referenced;
  }
  get memoryUsage() {
    return (this._memoryUsedByLayerData + 256) / (this._referenced || 1);
  }
  changeDataImpl(e) {
    let t = !1;
    if (e) {
      const { bucketsWithData: s, emptyBuckets: i } = e,
        r = this._createRenderBuckets(s);
      if (i && i.byteLength > 0) {
        const o = new Uint32Array(i);
        for (const a of o) this._deleteLayerData(a);
      }
      for (const [o, a] of r)
        this._deleteLayerData(o),
          a.type === A.SYMBOL && (this.symbols.set(o, a.symbols), (t = !0)),
          (this._memoryUsedByLayerData += a.memoryUsed),
          this.layerData.set(o, a),
          this.layerCount++;
      m(this._memCache) &&
        this._memCache.updateSize(
          this.key.id,
          this,
          this._memoryUsedByLayerData
        );
    }
    this._hasSymbolBuckets = !1;
    for (const [s, i] of this.layerData)
      i.type === A.SYMBOL && (this._hasSymbolBuckets = !0);
    t && this.emit("symbols-changed");
  }
  attachWithContext(e) {
    this.stage = {
      context: e,
      trashDisplayObject(t) {
        t.processDetach();
      },
      untrashDisplayObject: () => !1,
    };
  }
  setTransform(e) {
    super.setTransform(e);
    const t = this.resolution / (e.resolution * e.pixelRatio),
      s = (this.width / this.rangeX) * t,
      i = (this.height / this.rangeY) * t,
      r = [0, 0];
    e.toScreen(r, [this.x, this.y]);
    const o = this.transforms.tileUnitsToPixels;
    me(o),
      be(o, o, r),
      He(o, o, (Math.PI * e.rotation) / 180),
      we(o, o, [s, i, 1]);
  }
  _createTransforms() {
    return { dvs: q(), tileMat3: q(), tileUnitsToPixels: q() };
  }
  static _destroyRenderBuckets(e) {
    if (!e) return;
    const t = new Set();
    e.forEach((s) => {
      t.has(s) || (s.destroy(), t.add(s));
    }),
      e.clear();
  }
  _createRenderBuckets(e) {
    const t = new Map(),
      s = new Map();
    for (const i of e) {
      const r = this._deserializeBucket(i, s);
      for (const o of r.layerUIDs) t.set(o, r);
    }
    return t;
  }
  _deserializeBucket(e, t) {
    let s = t.get(e);
    if (s) return s;
    switch (new Uint32Array(e)[0]) {
      case A.FILL:
        s = new bt(e, this.styleRepository);
        break;
      case A.LINE:
        s = new mt(e, this.styleRepository);
        break;
      case A.SYMBOL:
        s = new wt(e, this.styleRepository, this);
        break;
      case A.CIRCLE:
        s = new xt(e, this.styleRepository);
    }
    return t.set(e, s), s;
  }
  _deleteLayerData(e) {
    if (!this.layerData.has(e)) return;
    const t = this.layerData.get(e);
    (this._memoryUsedByLayerData -= t.memoryUsed),
      t.destroy(),
      this.layerData.delete(e),
      this.layerCount--;
  }
};
const Tt = new Map();
function It(n, e, t, s, i, r) {
  const {
    iconRotationAlignment: o,
    textRotationAlignment: a,
    iconTranslate: l,
    iconTranslateAnchor: h,
    textTranslate: y,
    textTranslateAnchor: u,
  } = s;
  let d = 0;
  for (const c of n.colliders) {
    const [_, f] = c.partIndex === 0 ? l : y,
      g = c.partIndex === 0 ? h : u,
      S = c.minLod <= r && r <= c.maxLod;
    (d += S ? 0 : 1),
      (c.enabled = S),
      (c.xScreen = c.xTile * i[0] + c.yTile * i[3] + i[6]),
      (c.yScreen = c.xTile * i[1] + c.yTile * i[4] + i[7]),
      g === nt.MAP
        ? ((c.xScreen += t * _ - e * f), (c.yScreen += e * _ + t * f))
        : ((c.xScreen += _), (c.yScreen += f)),
      V.VIEWPORT === (c.partIndex === 0 ? o : a)
        ? ((c.dxScreen = c.dxPixels), (c.dyScreen = c.dyPixels))
        : ((c.dxScreen =
            t * (c.dxPixels + c.width / 2) -
            e * (c.dyPixels + c.height / 2) -
            c.width / 2),
          (c.dyScreen =
            e * (c.dxPixels + c.width / 2) +
            t * (c.dyPixels + c.height / 2) -
            c.height / 2));
  }
  n.colliders.length > 0 && d === n.colliders.length && (n.unique.show = !1);
}
function Ct(n, e) {
  if (n.priority - e.priority) return n.priority - e.priority;
  const t = n.tile.key,
    s = e.tile.key;
  return t.world - s.world
    ? t.world - s.world
    : t.level - s.level
    ? t.level - s.level
    : t.row - s.row
    ? t.row - s.row
    : t.col - s.col
    ? t.col - s.col
    : n.xTile - e.xTile
    ? n.xTile - e.xTile
    : n.yTile - e.yTile;
}
function vt(n, e) {
  for (const t of n) {
    const s = t.unique;
    for (const i of s.parts) {
      const r = i.targetOpacity > 0.5 ? 1 : -1;
      (i.startOpacity += r * ((e - i.startTime) / K)),
        (i.startOpacity = Math.min(Math.max(i.startOpacity, 0), 1)),
        (i.startTime = e),
        (i.targetOpacity = s.show && i.show ? 1 : 0);
    }
  }
}
class Dt {
  constructor(e, t, s) {
    (this.tileCoordRange = e),
      (this._visibleTiles = t),
      (this._createUnique = s),
      (this._tiles = new Map()),
      (this._uniqueSymbolsReferences = new Map());
  }
  get uniqueSymbols() {
    return (
      B(this._uniqueSymbolLayerArray) &&
        (this._uniqueSymbolLayerArray = this._createUniqueSymbolLayerArray()),
      this._uniqueSymbolLayerArray
    );
  }
  add(e, t) {
    this._uniqueSymbolLayerArray = null;
    let s = this._tiles.get(e.id);
    s || ((s = { symbols: new Map() }), this._tiles.set(e.id, s));
    const i = new Map();
    if (t)
      for (const a of t)
        s.symbols.has(a) && (i.set(a, s.symbols.get(a)), s.symbols.delete(a));
    else
      for (const [a, l] of e.layerData)
        s.symbols.has(a) && (i.set(a, s.symbols.get(a)), s.symbols.delete(a));
    this._removeSymbols(i);
    const r = e.symbols,
      o = new Map();
    for (const [a, l] of r) {
      let h = l.length;
      if (h >= 32) {
        let y = this.tileCoordRange;
        do (y /= 2), (h /= 4);
        while (h > 8 && y > 64);
        const u = new De(this.tileCoordRange, this.tileCoordRange, y);
        o.set(a, { flat: l, index: u }),
          s.symbols.set(a, { flat: l, index: u });
        for (const d of l) u.getCell(d.xTile, d.yTile).push(d);
      } else o.set(a, { flat: l }), s.symbols.set(a, { flat: l });
    }
    this._addSymbols(e.key, r);
  }
  deleteStyleLayers(e) {
    this._uniqueSymbolLayerArray = null;
    for (const [t, s] of this._tiles) {
      const i = new Map();
      for (const r of e)
        s.symbols.has(r) && (i.set(r, s.symbols.get(r)), s.symbols.delete(r));
      this._removeSymbols(i), s.symbols.size === 0 && this._tiles.delete(t);
    }
  }
  removeTile(e) {
    this._uniqueSymbolLayerArray = null;
    const t = this._tiles.get(e.id);
    if (!t) return;
    const s = new Map();
    for (const [i, r] of e.symbols)
      t.symbols.has(i) && (s.set(i, t.symbols.get(i)), t.symbols.delete(i));
    this._removeSymbols(s), t.symbols.size === 0 && this._tiles.delete(e.id);
  }
  _removeSymbols(e) {
    for (const [t, { flat: s }] of e)
      for (const i of s) {
        const r = i.unique,
          o = r.tileSymbols,
          a = o.length - 1;
        for (let l = 0; l < a; l++)
          if (o[l] === i) {
            o[l] = o[a];
            break;
          }
        if (((o.length = a), a === 0)) {
          const l = this._uniqueSymbolsReferences.get(t);
          l.delete(r), l.size === 0 && this._uniqueSymbolsReferences.delete(t);
        }
        i.unique = null;
      }
  }
  _addSymbols(e, t) {
    if (t.size === 0) return;
    const s = this._visibleTiles;
    for (const i of s)
      i.parentTile ||
        i.key.world !== e.world ||
        (i.key.level === e.level && !i.key.equals(e)) ||
        this._matchSymbols(i, e, t);
    for (const [i, r] of t)
      for (const o of r)
        if (B(o.unique)) {
          const a = this._createUnique();
          (o.unique = a), a.tileSymbols.push(o);
          let l = this._uniqueSymbolsReferences.get(i);
          l || ((l = new Set()), this._uniqueSymbolsReferences.set(i, l)),
            l.add(a);
        }
  }
  _matchSymbols(e, t, s) {
    if (e.key.level > t.level) {
      const r = e.key.level - t.level;
      if (e.key.row >> r !== t.row || e.key.col >> r !== t.col) return;
    }
    if (t.level > e.key.level) {
      const r = t.level - e.key.level;
      if (t.row >> r !== e.key.row || t.col >> r !== e.key.col) return;
    }
    if (t.equals(e.key)) {
      for (const r of e.childrenTiles) this._matchSymbols(r, t, s);
      return;
    }
    const i = new Map();
    for (const [r, o] of s) {
      const a = [];
      for (const u of o) {
        const d = fe(
            this.tileCoordRange,
            u.xTile,
            t.level,
            t.col,
            e.key.level,
            e.key.col
          ),
          c = fe(
            this.tileCoordRange,
            u.yTile,
            t.level,
            t.row,
            e.key.level,
            e.key.row
          );
        d >= 0 &&
          d < this.tileCoordRange &&
          c >= 0 &&
          c < this.tileCoordRange &&
          a.push({ symbol: u, xTransformed: d, yTransformed: c });
      }
      const l = [],
        h = e.key.level < t.level ? 1 : 1 << (e.key.level - t.level),
        y = this._tiles.get(e.id).symbols.get(r);
      if (y) {
        const u = y.flat;
        for (const d of a) {
          let c,
            _ = !1;
          const f = d.xTransformed,
            g = d.yTransformed;
          c = m(y.index) ? y.index.getCell(f, g) : u;
          const S = d.symbol,
            b = S.hash;
          for (const p of c)
            if (
              b === p.hash &&
              Math.abs(f - p.xTile) <= h &&
              Math.abs(g - p.yTile) <= h
            ) {
              const x = p.unique;
              (S.unique = x), x.tileSymbols.push(S), (_ = !0);
              break;
            }
          _ || l.push(S);
        }
      }
      l.length > 0 && i.set(r, l);
    }
    for (const r of e.childrenTiles) this._matchSymbols(r, t, i);
  }
  _createUniqueSymbolLayerArray() {
    const e = this._uniqueSymbolsReferences,
      t = new Array(e.size);
    let s,
      i = 0;
    for (const [r, o] of e) {
      const a = new Array(o.size);
      s = 0;
      for (const l of o) a[s++] = l;
      (t[i] = { styleLayerUID: r, uniqueSymbols: a }), i++;
    }
    return t;
  }
}
const _e = 1e-6;
class Rt extends qe {
  constructor(e, t) {
    super(),
      (this.styleRepository = e),
      (this._tileToHandle = new Map()),
      (this._viewState = {
        scale: 0,
        rotation: 0,
        center: [0, 0],
        size: [0, 0],
      }),
      (this._declutterViewState = {
        scale: 0,
        rotation: 0,
        center: [0, 0],
        size: [0, 0],
      }),
      (this._completed = !1),
      (this._symbolRepository = new Dt(
        4096,
        t,
        () =>
          new (class {
            constructor() {
              (this.tileSymbols = []),
                (this.parts = [
                  { startTime: 0, startOpacity: 0, targetOpacity: 0, show: !1 },
                  { startTime: 0, startOpacity: 0, targetOpacity: 0, show: !1 },
                ]),
                (this.show = !1);
            }
          })()
      )),
      (this._symbolDeclutterer = new (class {
        get running() {
          return this._running;
        }
        constructor(s, i, r, o, a, l) {
          (this._visibleTiles = s),
            (this._symbolRepository = i),
            (this._createCollisionJob = r),
            (this._assignTileSymbolsOpacity = o),
            (this._symbolLayerSorter = a),
            (this._isLayerVisible = l),
            (this._selectionJob = null),
            (this._selectionJobCompleted = !1),
            (this._collisionJob = null),
            (this._collisionJobCompleted = !1),
            (this._opacityJob = null),
            (this._opacityJobCompleted = !1),
            (this._running = !0);
        }
        setScreenSize(s, i) {
          (this._screenWidth === s && this._screenHeight === i) ||
            this.restart(),
            (this._screenWidth = s),
            (this._screenHeight = i);
        }
        restart() {
          (this._selectionJob = null),
            (this._selectionJobCompleted = !1),
            (this._collisionJob = null),
            (this._collisionJobCompleted = !1),
            (this._opacityJob = null),
            (this._opacityJobCompleted = !1),
            (this._running = !0);
        }
        continue(s) {
          if (
            (this._selectionJob ||
              (this._selectionJob = this._createSelectionJob()),
            !this._selectionJobCompleted)
          ) {
            const i = performance.now();
            if (
              !this._selectionJob.work(s) ||
              ((this._selectionJobCompleted = !0),
              (s = Math.max(0, s - (performance.now() - i))) === 0)
            )
              return !1;
          }
          if (
            (this._collisionJob ||
              (this._collisionJob = this._createCollisionJob(
                this._selectionJob.sortedSymbols,
                this._screenWidth,
                this._screenHeight
              )),
            !this._collisionJobCompleted)
          ) {
            const i = performance.now();
            if (
              !this._collisionJob.work(s) ||
              ((this._collisionJobCompleted = !0),
              (s = Math.max(0, s - (performance.now() - i))) === 0)
            )
              return !1;
          }
          if (
            (this._opacityJob || (this._opacityJob = this._createOpacityJob()),
            !this._opacityJobCompleted)
          ) {
            const i = performance.now();
            if (
              !this._opacityJob.work(s) ||
              ((this._opacityJobCompleted = !0),
              (s = Math.max(0, s - (performance.now() - i))) === 0)
            )
              return !1;
          }
          return (this._running = !1), !0;
        }
        _createSelectionJob() {
          const s = this._symbolRepository.uniqueSymbols;
          for (let h = 0; h < s.length; h++) {
            const y = s[h];
            for (let u = 0; u < y.uniqueSymbols.length; u++) {
              const d = y.uniqueSymbols[u];
              for (const c of d.tileSymbols) c.selectedForRendering = !1;
            }
          }
          const i = [];
          let r = 0,
            o = 0;
          const a = this._isLayerVisible,
            l = this._symbolLayerSorter;
          return {
            work: function (h) {
              let y;
              const u = performance.now();
              for (; o < s.length; o++, r = 0) {
                const d = s[o],
                  c = d.styleLayerUID;
                if (!a(c)) {
                  i[o] || (i[o] = { styleLayerUID: c, symbols: [] });
                  continue;
                }
                i[o] = i[o] || { styleLayerUID: c, symbols: [] };
                const _ = i[o];
                for (; r < d.uniqueSymbols.length; r++) {
                  if (
                    ((y = d.uniqueSymbols[r]),
                    r % 100 == 99 && performance.now() - u > h)
                  )
                    return !1;
                  let f = null,
                    g = !1,
                    S = !1;
                  for (const b of y.tileSymbols)
                    if (!S || !g) {
                      const p = b.tile;
                      (!f || p.isCoverage || (p.neededForCoverage && !g)) &&
                        ((f = b),
                        (p.neededForCoverage || p.isCoverage) && (S = !0),
                        p.isCoverage && (g = !0));
                    }
                  if (((f.selectedForRendering = !0), S)) {
                    _.symbols.push(f), (y.show = !0);
                    for (const b of y.parts) b.show = !0;
                  } else y.show = !1;
                }
              }
              for (const d of i) d.symbols.sort(Ct);
              return !0;
            },
            get sortedSymbols() {
              return i.sort(l);
            },
          };
        }
        _createOpacityJob() {
          const s = this._assignTileSymbolsOpacity,
            i = this._visibleTiles;
          let r = 0;
          function o(a, l) {
            const h = a.symbols;
            for (const [y, u] of h) vt(u, l);
            s(a, l);
            for (const y of a.childrenTiles) o(y, l);
          }
          return {
            work(a) {
              const l = performance.now();
              for (; r < i.length; r++) {
                if (performance.now() - l > a) return !1;
                const h = i[r];
                m(h.parentTile) || o(h, performance.now());
              }
              return !0;
            },
          };
        }
      })(
        t,
        this._symbolRepository,
        (s, i, r) =>
          new (class {
            constructor(o, a, l, h, y, u) {
              (this._symbols = o),
                (this._styleRepository = h),
                (this._zoom = y),
                (this._currentLayerCursor = 0),
                (this._currentSymbolCursor = 0),
                (this._styleProps = new Map()),
                (this._allNeededMatrices = new Map()),
                (this._gridIndex = new De(a, l, rt)),
                (this._si = Math.sin((Math.PI * u) / 180)),
                (this._co = Math.cos((Math.PI * u) / 180));
              for (const d of o)
                for (const c of d.symbols)
                  this._allNeededMatrices.has(c.tile) ||
                    this._allNeededMatrices.set(
                      c.tile,
                      Fe(c.tile.transforms.tileUnitsToPixels)
                    );
            }
            work(o) {
              const a = this._gridIndex;
              function l(y) {
                const u = y.xScreen + y.dxScreen,
                  d = y.yScreen + y.dyScreen,
                  c = u + y.width,
                  _ = d + y.height,
                  [f, g, S, b] = a.getCellSpan(u, d, c, _);
                for (let p = g; p <= b; p++)
                  for (let x = f; x <= S; x++) {
                    const I = a.cells[p][x];
                    for (const T of I) {
                      const P = T.xScreen + T.dxScreen,
                        w = T.yScreen + T.dyScreen,
                        O = P + T.width,
                        N = w + T.height;
                      if (!(c < P || u > O || _ < w || d > N)) return !0;
                    }
                  }
                return !1;
              }
              const h = performance.now();
              for (
                ;
                this._currentLayerCursor < this._symbols.length;
                this._currentLayerCursor++, this._currentSymbolCursor = 0
              ) {
                const y = this._symbols[this._currentLayerCursor],
                  u = this._getProperties(y.styleLayerUID);
                for (
                  ;
                  this._currentSymbolCursor < y.symbols.length;
                  this._currentSymbolCursor++
                ) {
                  if (
                    this._currentSymbolCursor % 100 == 99 &&
                    performance.now() - h > o
                  )
                    return !1;
                  const d = y.symbols[this._currentSymbolCursor];
                  if (!d.unique.show) continue;
                  It(
                    d,
                    this._si,
                    this._co,
                    u,
                    this._allNeededMatrices.get(d.tile),
                    this._zoom
                  );
                  const c = d.unique;
                  if (!c.show) continue;
                  const {
                    iconAllowOverlap: _,
                    iconIgnorePlacement: f,
                    textAllowOverlap: g,
                    textIgnorePlacement: S,
                  } = u;
                  for (const b of d.colliders) {
                    if (!b.enabled) continue;
                    const p = c.parts[b.partIndex];
                    p.show &&
                      !(b.partIndex ? g : _) &&
                      l(b) &&
                      (b.hard ? (c.show = !1) : (p.show = !1));
                  }
                  if (c.show)
                    for (const b of d.colliders) {
                      if (
                        !b.enabled ||
                        (b.partIndex ? S : f) ||
                        !c.parts[b.partIndex].show
                      )
                        continue;
                      const p = b.xScreen + b.dxScreen,
                        x = b.yScreen + b.dyScreen,
                        I = p + b.width,
                        T = x + b.height,
                        [P, w, O, N] = this._gridIndex.getCellSpan(p, x, I, T);
                      for (let Q = w; Q <= N; Q++)
                        for (let W = P; W <= O; W++)
                          this._gridIndex.cells[Q][W].push(b);
                    }
                }
              }
              return !0;
            }
            _getProperties(o) {
              const a = this._styleProps.get(o);
              if (a) return a;
              const l = this._zoom,
                h = this._styleRepository.getStyleLayerByUID(o),
                y = h.getLayoutValue("symbol-placement", l) !== at.POINT;
              let u = h.getLayoutValue("icon-rotation-alignment", l);
              u === V.AUTO && (u = y ? V.MAP : V.VIEWPORT);
              let d = h.getLayoutValue("text-rotation-alignment", l);
              d === V.AUTO && (d = y ? V.MAP : V.VIEWPORT);
              const c = h.getPaintValue("icon-translate", l),
                _ = h.getPaintValue("icon-translate-anchor", l),
                f = h.getPaintValue("text-translate", l),
                g = h.getPaintValue("text-translate-anchor", l),
                S = {
                  iconAllowOverlap: h.getLayoutValue("icon-allow-overlap", l),
                  iconIgnorePlacement: h.getLayoutValue(
                    "icon-ignore-placement",
                    l
                  ),
                  textAllowOverlap: h.getLayoutValue("text-allow-overlap", l),
                  textIgnorePlacement: h.getLayoutValue(
                    "text-ignore-placement",
                    l
                  ),
                  iconRotationAlignment: u,
                  textRotationAlignment: d,
                  iconTranslateAnchor: _,
                  iconTranslate: c,
                  textTranslateAnchor: g,
                  textTranslate: f,
                };
              return this._styleProps.set(o, S), S;
            }
          })(
            s,
            i,
            r,
            this.styleRepository,
            this._zoom,
            this._viewState.rotation
          ),
        (s, i) => {
          (s.allSymbolsFadingOut = !0),
            (s.lastOpacityUpdate = i),
            (function (r, o, a) {
              for (const [l, h] of r.symbols) gt(r, o, a, h, l);
            })(s, i, !0),
            (s.decluttered = !0),
            s.requestRender();
        },
        (s, i) =>
          this.styleRepository.getStyleLayerByUID(s.styleLayerUID).z -
          this.styleRepository.getStyleLayerByUID(i.styleLayerUID).z,
        (s) => {
          const i = this.styleRepository.getStyleLayerByUID(s);
          if (this._zoom + _e < i.minzoom || this._zoom - _e >= i.maxzoom)
            return !1;
          const r = i.getLayoutProperty("visibility");
          return !r || r.getValue() !== re.NONE;
        }
      ));
  }
  addTile(e) {
    (e.decluttered = !1),
      this._tileToHandle.set(
        e,
        e.on("symbols-changed", () => {
          this._symbolRepository.add(e), this.restartDeclutter();
        })
      ),
      this._symbolRepository.add(e),
      this.restartDeclutter();
  }
  removeTile(e) {
    const t = this._tileToHandle.get(e);
    t &&
      (this._symbolRepository.removeTile(e),
      this.restartDeclutter(),
      t.remove(),
      this._tileToHandle.delete(e));
  }
  update(e, t) {
    return (
      (this._zoom = e),
      (this._viewState = {
        scale: t.scale,
        rotation: t.rotation,
        center: [t.center[0], t.center[1]],
        size: [t.size[0], t.size[1]],
      }),
      this._continueDeclutter(),
      this._completed
    );
  }
  restartDeclutter() {
    (this._completed = !1),
      this._symbolDeclutterer.restart(),
      this._notifyUnstable();
  }
  clear() {
    (this._completed = !1),
      (this._symbolRepository = null),
      this._symbolDeclutterer.restart(),
      this._tileToHandle.forEach((e) => e.remove()),
      this._tileToHandle.clear();
  }
  get stale() {
    return (
      this._zoom !== this._declutterZoom ||
      this._viewState.size[0] !== this._declutterViewState.size[0] ||
      this._viewState.size[1] !== this._declutterViewState.size[1] ||
      this._viewState.scale !== this._declutterViewState.scale ||
      this._viewState.rotation !== this._declutterViewState.rotation
    );
  }
  deleteStyleLayers(e) {
    this._symbolRepository.deleteStyleLayers(e);
  }
  _continueDeclutter() {
    (this._completed && !this.stale) ||
      (this._symbolDeclutterer.running ||
        ((this._declutterZoom = this._zoom),
        (this._declutterViewState.center[0] = this._viewState.center[0]),
        (this._declutterViewState.center[1] = this._viewState.center[1]),
        (this._declutterViewState.rotation = this._viewState.rotation),
        (this._declutterViewState.scale = this._viewState.scale),
        (this._declutterViewState.size[0] = this._viewState.size[0]),
        (this._declutterViewState.size[1] = this._viewState.size[1]),
        this._symbolDeclutterer.restart()),
      this._symbolDeclutterer.setScreenSize(
        this._viewState.size[0],
        this._viewState.size[1]
      ),
      (this._completed = this._symbolDeclutterer.continue(ot)),
      this._completed && this._scheduleNotifyStable());
  }
  _scheduleNotifyStable() {
    m(this._stableNotificationHandle) &&
      clearTimeout(this._stableNotificationHandle),
      (this._stableNotificationHandle = setTimeout(() => {
        (this._stableNotificationHandle = null), this.emit("fade-complete");
      }, 1.5 * K));
  }
  _notifyUnstable() {
    m(this._stableNotificationHandle) &&
      (clearTimeout(this._stableNotificationHandle),
      (this._stableNotificationHandle = null)),
      this.emit("fade-start");
  }
}
let At = class extends Ce {
  _createTransforms() {
    return { dvs: q(), tileMat3: q() };
  }
};
const $ = 1e-6;
function pe(n, e) {
  if (n) {
    const t = n.getLayoutProperty("visibility");
    if (
      !t ||
      (t.getValue() !== re.NONE &&
        (n.minzoom === void 0 || n.minzoom < e + $) &&
        (n.maxzoom === void 0 || n.maxzoom >= e - $))
    )
      return !0;
  }
  return !1;
}
class Pt extends lt {
  constructor(e) {
    super(e),
      (this._backgroundTiles = []),
      (this._pointToCallbacks = new Map());
  }
  destroy() {
    var e, t;
    this.removeAllChildren(),
      (e = this._spriteMosaic) == null || e.dispose(),
      (this._spriteMosaic = null),
      (t = this._glyphMosaic) == null || t.dispose(),
      (this._glyphMosaic = null),
      m(this._symbolFader) &&
        (this._symbolFader.clear(), (this._symbolFader = null)),
      (this._styleRepository = null),
      (this._backgroundTiles = []),
      this._pointToCallbacks.clear();
  }
  setStyleResources(e, t, s) {
    if (
      ((this._spriteMosaic = e),
      (this._glyphMosaic = t),
      (this._styleRepository = s),
      B(this._symbolFader))
    ) {
      const i = new Rt(this._styleRepository, this.children);
      i.on("fade-start", () => {
        this.emit("fade-start"), this.requestRender();
      }),
        i.on("fade-complete", () => {
          this.emit("fade-complete"), this.requestRender();
        }),
        (this._symbolFader = i);
    }
    k(this._symbolFader).styleRepository = s;
  }
  setSpriteMosaic(e) {
    var t;
    (t = this._spriteMosaic) == null || t.dispose(), (this._spriteMosaic = e);
  }
  deleteStyleLayers(e) {
    m(this._symbolFader) && this._symbolFader.deleteStyleLayers(e);
  }
  async hitTest(e) {
    const t = Ne();
    return this._pointToCallbacks.set(e, t), this.requestRender(), t.promise;
  }
  enterTileInvalidation() {
    for (const e of this.children) e.invalidating = !0;
  }
  createRenderParams(e) {
    return {
      ...super.createRenderParams(e),
      renderPass: null,
      styleLayer: null,
      styleLayerUID: -1,
      glyphMosaic: this._glyphMosaic,
      spriteMosaic: this._spriteMosaic,
      hasClipping: !!this._clippingInfos,
    };
  }
  doRender(e) {
    !this.visible ||
      (e.drawPhase !== U.MAP && e.drawPhase !== U.DEBUG) ||
      this._spriteMosaic === void 0 ||
      super.doRender(e);
  }
  addChild(e) {
    return (
      super.addChild(e),
      m(this._symbolFader)
        ? this._symbolFader.addTile(e)
        : (e.decluttered = !0),
      this.requestRender(),
      e
    );
  }
  removeChild(e) {
    return (
      m(this._symbolFader) && this._symbolFader.removeTile(e),
      this.requestRender(),
      super.removeChild(e)
    );
  }
  renderChildren(e) {
    const { drawPhase: t } = e;
    if (t !== U.DEBUG) {
      if ((this._doRender(e), this._pointToCallbacks.size > 0)) {
        e.drawPhase = U.HITTEST;
        const s = e.painter.effects.hittestVTL;
        s.bind(e),
          this._doRender(e),
          s.draw(e, this._pointToCallbacks),
          s.unbind(e),
          (e.drawPhase = t);
      }
    } else super.renderChildren(e);
  }
  removeAllChildren() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      m(this._symbolFader) && this._symbolFader.removeTile(t), t.dispose();
    }
    super.removeAllChildren();
  }
  getStencilTarget() {
    return this.children.filter((e) => e.neededForCoverage && e.hasData());
  }
  restartDeclutter() {
    m(this._symbolFader) && this._symbolFader.restartDeclutter();
  }
  _doRender(e) {
    const { context: t } = e,
      s = this._styleRepository;
    if (!s) return;
    const i = s.layers;
    let r = !0;
    e.drawPhase === U.HITTEST && (r = !1),
      s.backgroundBucketIds.length > 0 &&
        ((e.renderPass = "background"),
        this._renderBackgroundLayers(e, s.backgroundBucketIds)),
      super.renderChildren(e),
      e.drawPhase === U.MAP && this._fade(e.displayLevel, e.state);
    const o = this.children.filter((a) => a.visible && a.hasData());
    if (!o || o.length === 0)
      return (
        t.bindVAO(), t.setStencilTestEnabled(!0), void t.setBlendingEnabled(!0)
      );
    for (const a of o) a.triangleCount = 0;
    t.setStencilWriteMask(0),
      t.setColorMask(!0, !0, !0, !0),
      t.setStencilOp(H.KEEP, H.KEEP, H.REPLACE),
      t.setStencilTestEnabled(!0),
      t.setBlendingEnabled(!1),
      t.setDepthTestEnabled(!0),
      t.setDepthWriteEnabled(!0),
      t.setDepthFunction(ce.LEQUAL),
      t.setClearDepth(1),
      t.clear(t.gl.DEPTH_BUFFER_BIT),
      (e.renderPass = "opaque");
    for (let a = i.length - 1; a >= 0; a--) this._renderStyleLayer(i[a], e, o);
    t.setDepthWriteEnabled(!1),
      t.setBlendingEnabled(r),
      t.setBlendFunctionSeparate(
        F.ONE,
        F.ONE_MINUS_SRC_ALPHA,
        F.ONE,
        F.ONE_MINUS_SRC_ALPHA
      ),
      (e.renderPass = "translucent");
    for (let a = 0; a < i.length; a++) this._renderStyleLayer(i[a], e, o);
    t.bindVAO(), t.setStencilTestEnabled(!0), t.setBlendingEnabled(!0);
  }
  _fade(e, t) {
    m(this._symbolFader) &&
      (this._symbolFader.update(e, t) || this.requestRender());
  }
  _renderStyleLayer(e, t, s) {
    const { painter: i, renderPass: r } = t;
    if (e === void 0) return;
    const o = e.getLayoutProperty("visibility");
    if (o && o.getValue() === re.NONE) return;
    let a;
    switch (e.type) {
      case R.BACKGROUND:
        return;
      case R.FILL:
        if (r !== "opaque" && t.renderPass !== "translucent") return;
        a = "vtlFill";
        break;
      case R.LINE:
        if (r !== "translucent") return;
        a = "vtlLine";
        break;
      case R.CIRCLE:
        if (r !== "translucent") return;
        a = "vtlCircle";
        break;
      case R.SYMBOL:
        if (r !== "translucent") return;
        a = "vtlSymbol";
    }
    if (
      ((s =
        e.type === R.SYMBOL
          ? s.filter((h) => h.decluttered)
          : s.filter((h) => h.neededForCoverage)),
      a !== "vtlSymbol")
    ) {
      const h = t.displayLevel;
      if (
        s.length === 0 ||
        (e.minzoom !== void 0 && e.minzoom >= h + $) ||
        (e.maxzoom !== void 0 && e.maxzoom < h - $)
      )
        return;
    }
    const l = e.uid;
    (t.styleLayerUID = l), (t.styleLayer = e);
    for (const h of s)
      if (h.layerData.has(l)) {
        i.renderObjects(t, s, a);
        break;
      }
  }
  _renderBackgroundLayers(e, t) {
    const { context: s, displayLevel: i, painter: r, state: o } = e,
      a = this._styleRepository;
    let l = !1;
    for (const p of t)
      if (a.getLayerById(p).type === R.BACKGROUND && pe(a.getLayerById(p), i)) {
        l = !0;
        break;
      }
    if (!l) return;
    const h = this._tileInfoView.getTileCoverage(e.state, 0, "smallest"),
      { spans: y, lodInfo: u } = h,
      { level: d } = u,
      c = ie(),
      _ = [];
    if (this._renderPasses) {
      const p = this._renderPasses[0];
      m(this._clippingInfos) &&
        (p.brushes[0].prepareState(e),
        p.brushes[0].drawMany(e, this._clippingInfos));
    }
    const f = this._backgroundTiles;
    let g,
      S = 0;
    for (const { row: p, colFrom: x, colTo: I } of y)
      for (let T = x; T <= I; T++) {
        if (S < f.length)
          (g = f[S]),
            g.key.set(d, p, u.normalizeCol(T), u.getWorldForColumn(T)),
            this._tileInfoView.getTileBounds(c, g.key, !1),
            (g.x = c[0]),
            (g.y = c[3]),
            (g.resolution = this._tileInfoView.getTileResolution(d));
        else {
          const P = new L(d, p, u.normalizeCol(T), u.getWorldForColumn(T)),
            w = this._tileInfoView.getTileBounds(ie(), P),
            O = this._tileInfoView.getTileResolution(d);
          (g = new At(P, O, w[0], w[3], 512, 512, 4096, 4096)), f.push(g);
        }
        g.setTransform(o), _.push(g), S++;
      }
    s.setStencilWriteMask(0),
      s.setColorMask(!0, !0, !0, !0),
      s.setStencilOp(H.KEEP, H.KEEP, H.REPLACE),
      s.setStencilFunction(ce.EQUAL, 0, 255);
    let b = !0;
    e.drawPhase === U.HITTEST && (b = !1), s.setStencilTestEnabled(b);
    for (const p of t) {
      const x = a.getLayerById(p);
      x.type === R.BACKGROUND &&
        pe(x, i) &&
        ((e.styleLayerUID = x.uid),
        (e.styleLayer = x),
        r.renderObjects(e, _, "vtlBackground"));
    }
    ge.pool.release(h);
  }
}
const Mt = { geometry: [new dt("a_PositionAndFlags", 3, Te.SHORT, 0, 6)] },
  oe = new Map();
oe.set("a_PositionAndFlags", 0);
const Lt = { vsPath: "debug/overlay", fsPath: "debug/overlay", attributes: oe };
class se extends ut {
  constructor(e) {
    super(), (this._conf = e);
  }
  static makeFlags(e, t) {
    return e | (t << 2);
  }
  _createTransforms() {
    return { dvs: q() };
  }
  doRender(e) {
    this._updateTransforms(e), this._ensureResources(e);
    const { context: t } = e;
    t.useProgram(this._program),
      this._program.setUniformMatrix3fv("u_dvsMat3", this.transforms.dvs),
      this._program.setUniform4fv("u_colors", this._conf.getColors(e)),
      this._program.setUniform1fv("u_opacities", this._conf.getOpacities(e));
    const { vertexData: s, indexData: i } = this._conf.getMesh(e);
    this._vertexBuffer.setData(s),
      this._indexBuffer.setData(i),
      t.bindVAO(this._vertexArray),
      t.setBlendingEnabled(!0),
      t.setBlendFunction(F.ONE, F.ONE_MINUS_SRC_ALPHA),
      t.setDepthTestEnabled(!1),
      t.setStencilTestEnabled(!1),
      t.setColorMask(!0, !0, !0, !0),
      t.drawElements(st.TRIANGLES, i.length, Te.UNSIGNED_INT, 0);
  }
  onDetach() {
    this._vertexArray = Qe(this._vertexArray);
  }
  _updateTransforms(e) {
    me(this.transforms.dvs),
      be(this.transforms.dvs, this.transforms.dvs, [-1, 1]),
      we(this.transforms.dvs, this.transforms.dvs, [
        2 / e.state.size[0],
        -2 / e.state.size[1],
        1,
      ]);
  }
  _ensureResources(e) {
    const { context: t } = e;
    this._program || (this._program = e.painter.materialManager.getProgram(Lt)),
      this._vertexBuffer ||
        (this._vertexBuffer = v.createVertex(t, C.STREAM_DRAW)),
      this._indexBuffer ||
        (this._indexBuffer = v.createIndex(t, C.STREAM_DRAW)),
      this._vertexArray ||
        (this._vertexArray = new z(
          t,
          oe,
          Mt,
          { geometry: this._vertexBuffer },
          this._indexBuffer
        ));
  }
}
class Bt extends We {
  constructor() {
    super(...arguments),
      (this._fullCacheLodInfos = null),
      (this._levelByScale = {});
  }
  getTileParentId(e) {
    const t = L.pool.acquire(e),
      s =
        t.level === 0
          ? null
          : L.getId(t.level - 1, t.row >> 1, t.col >> 1, t.world);
    return L.pool.release(t), s;
  }
  getTileCoverage(e, t, s) {
    const i = super.getTileCoverage(e, t, s);
    if (!i) return i;
    const r = 1 << i.lodInfo.level;
    return (i.spans = i.spans.filter((o) => o.row >= 0 && o.row < r)), i;
  }
  scaleToLevel(e) {
    if (
      (this._fullCacheLodInfos || this._initializeFullCacheLODs(this._lodInfos),
      this._levelByScale[e])
    )
      return this._levelByScale[e];
    {
      const t = this._fullCacheLodInfos;
      if (e > t[0].scale) return t[0].level;
      let s, i;
      for (let r = 0; r < t.length - 1; r++)
        if (((i = t[r + 1]), e > i.scale))
          return (s = t[r]), s.level + (s.scale - e) / (s.scale - i.scale);
      return t[t.length - 1].level;
    }
  }
  _initializeFullCacheLODs(e) {
    let t;
    if (e[0].level === 0)
      t = e.map((s) => ({
        level: s.level,
        resolution: s.resolution,
        scale: s.scale,
      }));
    else {
      const s = this.tileInfo.size[0],
        i = this.tileInfo.spatialReference;
      t = je
        .create({ size: s, spatialReference: i })
        .lods.map((r) => ({
          level: r.level,
          resolution: r.resolution,
          scale: r.scale,
        }));
    }
    for (let s = 0; s < t.length; s++)
      this._levelByScale[t[s].scale] = t[s].level;
    this._fullCacheLodInfos = t;
  }
}
let E = class extends ht(ct) {
  constructor() {
    super(...arguments),
      (this._styleChanges = []),
      (this._fetchQueue = null),
      (this._parseQueue = null),
      (this._tileHandlerPromise = null),
      (this._isTileHandlerReady = !1),
      (this._collisionOverlay = null),
      (this.fading = !1),
      (this._getCollidersMesh = (n) => {
        const { pixelRatio: e } = n.state;
        let t = 0;
        const s = [],
          i = [];
        for (const r of this._vectorTileContainer.children)
          if (r.symbols)
            for (const [o, a] of r.symbols)
              for (const l of a)
                for (const h of l.colliders) {
                  const y = (h.xScreen + h.dxScreen) * e,
                    u = (h.yScreen + h.dyScreen) * e,
                    d = h.width * e,
                    c = h.height * e,
                    _ = l.unique.parts[h.partIndex].targetOpacity > 0.5;
                  if (!_ && this.layer.showCollisionBoxes !== "all") continue;
                  const f = 3,
                    g = 1,
                    S = 3,
                    b = 0,
                    p = _ ? 2 : 0,
                    x = _ ? 3 : 0,
                    I = se.makeFlags(p, x);
                  s.push(y, u, I, y + d, u, I, y, u + c, I, y + d, u + c, I),
                    i.push(t + 0, t + 1, t + 2, t + 1, t + 3, t + 2),
                    (t += 4);
                  const T = _ ? f : g,
                    P = _ ? S : b,
                    w = se.makeFlags(T, P);
                  s.push(y, u, w, y + d, u, w, y, u + 1, w, y + d, u + 1, w),
                    i.push(t + 0, t + 1, t + 2, t + 1, t + 3, t + 2),
                    (t += 4),
                    s.push(
                      y,
                      u + c - 1,
                      w,
                      y + d,
                      u + c - 1,
                      w,
                      y,
                      u + c,
                      w,
                      y + d,
                      u + c,
                      w
                    ),
                    i.push(t + 0, t + 1, t + 2, t + 1, t + 3, t + 2),
                    (t += 4),
                    s.push(y, u, w, y + 1, u, w, y, u + c, w, y + 1, u + c, w),
                    i.push(t + 0, t + 1, t + 2, t + 1, t + 3, t + 2),
                    (t += 4),
                    s.push(
                      y + d - 1,
                      u,
                      w,
                      y + d,
                      u,
                      w,
                      y + d - 1,
                      u + c,
                      w,
                      y + d,
                      u + c,
                      w
                    ),
                    i.push(t + 0, t + 1, t + 2, t + 1, t + 3, t + 2),
                    (t += 4);
                }
        return { vertexData: new Int16Array(s), indexData: new Uint32Array(i) };
      }),
      (this._getCollidersColors = () => [
        1, 0.5, 0, 1, 1, 0, 0, 1, 0, 1, 0.5, 1, 0, 0.5, 0, 1,
      ]),
      (this._getCollidersOpacities = () => [0.05, 0.01, 0.15, 0.2]);
  }
  async hitTest(n, e) {
    if (!this._tileHandlerPromise) return null;
    await this._tileHandlerPromise;
    const t = await this._vectorTileContainer.hitTest(e);
    if (!t || t.length === 0) return null;
    const s = t[0] - 1,
      i = this._styleRepository,
      r = i.getStyleLayerByUID(s);
    if (!r) return null;
    const o = i.getStyleLayerIndex(r.id);
    return [
      {
        type: "graphic",
        mapPoint: n,
        layer: this.layer,
        graphic: new Je({
          attributes: { layerId: o, layerName: r.id, layerUID: s },
          layer: this.layer,
          sourceLayer: this.layer,
        }),
      },
    ];
  }
  update(n) {
    if (this._tileHandlerPromise && this._isTileHandlerReady)
      return n.pixelRatio !== this._tileHandler.devicePixelRatio
        ? (this._start(),
          void (this._tileHandler.devicePixelRatio = n.pixelRatio))
        : void (this._styleChanges.length > 0
            ? (this._tileHandlerPromise = this._applyStyleChanges())
            : (this._fetchQueue.pause(),
              this._parseQueue.pause(),
              (this._fetchQueue.state = n.state),
              (this._parseQueue.state = n.state),
              this._tileManager.update(n) || this.requestUpdate(),
              this._parseQueue.resume(),
              this._fetchQueue.resume()));
  }
  attach() {
    const { style: n } = this.layer.currentStyleInfo;
    (this._styleRepository = new ue(n)),
      (this._tileInfoView = new Bt(this.layer.tileInfo, this.layer.fullExtent)),
      (this._vectorTileContainer = new Pt(this._tileInfoView)),
      (this._tileHandler = new (class {
        constructor(e, t, s) {
          (this._layer = e),
            (this._styleRepository = t),
            (this.devicePixelRatio = s),
            (this._spriteMosaic = null),
            (this._glyphMosaic = null),
            (this._connection = null);
        }
        destroy() {
          var e;
          (e = this._connection) == null || e.close(),
            (this._connection = null),
            (this._styleRepository = null),
            (this._layer = null),
            (this._spriteMosaic = null),
            (this._glyphMosaic = null);
        }
        get spriteMosaic() {
          return this._spriteSourcePromise.then(() => this._spriteMosaic);
        }
        get glyphMosaic() {
          return this._glyphMosaic;
        }
        async start(e) {
          (this._spriteSourcePromise = this._layer.loadSpriteSource(
            this.devicePixelRatio,
            e
          )),
            this._spriteSourcePromise.then((i) => {
              (this._spriteMosaic = new te(1024, 1024, 250)),
                this._spriteMosaic.setSpriteSource(i);
            });
          const t = this._layer.currentStyleInfo.glyphsUrl,
            s = new ye(
              t
                ? ae(t, {
                    ...this._layer.customParameters,
                    token: this._layer.apiKey,
                  })
                : null
            );
          (this._glyphMosaic = new de(1024, 1024, s)),
            (this._broadcastPromise = Ve("WorkerTileHandler", {
              client: this,
              schedule: e.schedule,
              signal: e.signal,
            }).then((i) => {
              if (
                ((this._connection = i),
                this._layer && !this._connection.closed)
              ) {
                const r = i.broadcast(
                  "setStyle",
                  this._layer.currentStyleInfo.style,
                  e
                );
                Promise.all(r).catch((o) => Ee(o));
              }
            }));
        }
        async updateStyle(e) {
          return (
            await this._broadcastPromise,
            (this._broadcastPromise = Promise.all(
              this._connection.broadcast("updateStyle", e)
            )),
            this._broadcastPromise
          );
        }
        setSpriteSource(e) {
          const t = new te(1024, 1024, 250);
          return (
            t.setSpriteSource(e),
            (this._spriteMosaic = t),
            (this._spriteSourcePromise = Promise.resolve(e)),
            t
          );
        }
        async setStyle(e, t) {
          await this._broadcastPromise,
            (this._styleRepository = e),
            (this._spriteSourcePromise = this._layer.loadSpriteSource(
              this.devicePixelRatio,
              null
            )),
            this._spriteSourcePromise.then((i) => {
              (this._spriteMosaic = new te(1024, 1024, 250)),
                this._spriteMosaic.setSpriteSource(i);
            });
          const s = new ye(
            this._layer.currentStyleInfo.glyphsUrl
              ? ae(this._layer.currentStyleInfo.glyphsUrl, {
                  ...this._layer.customParameters,
                  token: this._layer.apiKey,
                })
              : null
          );
          return (
            (this._glyphMosaic = new de(1024, 1024, s)),
            (this._broadcastPromise = Promise.all(
              this._connection.broadcast("setStyle", t)
            )),
            this._broadcastPromise
          );
        }
        fetchTileData(e, t) {
          return this._getRefKeys(e, t).then((s) => {
            const i = this._layer.sourceNameToSource,
              r = [];
            for (const o in i) r.push(o);
            return this._getSourcesData(r, s, t);
          });
        }
        parseTileData(e, t) {
          const s = e && e.data;
          if (!s) return Promise.resolve(null);
          const { sourceName2DataAndRefKey: i, transferList: r } = s;
          return Object.keys(i).length === 0
            ? Promise.resolve(null)
            : this._broadcastPromise.then(() =>
                this._connection.invoke(
                  "createTileAndParse",
                  {
                    key: e.key.id,
                    sourceName2DataAndRefKey: i,
                    styleLayerUIDs: e.styleLayerUIDs,
                  },
                  { ...t, transferList: r }
                )
              );
        }
        async getSprites(e) {
          return (
            await this._spriteSourcePromise,
            this._spriteMosaic.getSpriteItems(e)
          );
        }
        getGlyphs(e) {
          return this._glyphMosaic.getGlyphItems(e.font, e.codePoints);
        }
        async _getTilePayload(e, t, s) {
          const i = L.pool.acquire(e.id),
            r = this._layer.sourceNameToSource[t],
            { level: o, row: a, col: l } = i;
          L.pool.release(i);
          try {
            return {
              protobuff: await r.requestTile(o, a, l, s),
              sourceName: t,
            };
          } catch (h) {
            if (X(h)) throw h;
            return { protobuff: null, sourceName: t };
          }
        }
        _getRefKeys(e, t) {
          const s = this._layer.sourceNameToSource,
            i = [];
          for (const r in s) {
            const o = s[r].getRefKey(e, t);
            i.push(o);
          }
          return ne(i);
        }
        _getSourcesData(e, t, s) {
          const i = [];
          for (let r = 0; r < t.length; r++)
            if (t[r].value == null || e[r] == null) i.push(null);
            else {
              const o = this._getTilePayload(t[r].value, e[r], s);
              i.push(o);
            }
          return ne(i).then((r) => {
            const o = {},
              a = [];
            for (let l = 0; l < r.length; l++) {
              const h = r[l].value;
              if (h && h.protobuff && h.protobuff.byteLength > 0) {
                const y = t[l].value.id;
                (o[h.sourceName] = { refKey: y, protobuff: h.protobuff }),
                  a.push(h.protobuff);
              }
            }
            return { sourceName2DataAndRefKey: o, transferList: a };
          });
        }
      })(this.layer, this._styleRepository, window.devicePixelRatio || 1)),
      this.container.addChild(this._vectorTileContainer),
      this._start(),
      this.addAttachHandles([
        this._vectorTileContainer.on("fade-start", () => {
          (this.fading = !0),
            this.notifyChange("updating"),
            this.requestUpdate();
        }),
        this._vectorTileContainer.on("fade-complete", () => {
          var e;
          (e = this._collisionOverlay) == null || e.requestRender(),
            (this.fading = !1),
            this.notifyChange("updating"),
            this.requestUpdate();
        }),
        Ge(
          () => this.layer.showCollisionBoxes,
          (e) => {
            e !== "none"
              ? this._collisionOverlay ||
                ((this._collisionOverlay = new se({
                  getMesh: this._getCollidersMesh,
                  getColors: this._getCollidersColors,
                  getOpacities: this._getCollidersOpacities,
                })),
                this.container.addChild(this._collisionOverlay))
              : this._collisionOverlay &&
                (this.container.removeChild(this._collisionOverlay),
                (this._collisionOverlay = null)),
              this.container.requestRender();
          },
          Ye
        ),
        this.layer.on("paint-change", (e) => {
          if (e.isDataDriven)
            this._styleChanges.push({ type: D.PAINTER_CHANGED, data: e }),
              this.notifyChange("updating"),
              this.requestUpdate();
          else {
            const t = this._styleRepository,
              s = t.getLayerById(e.layer);
            if (!s) return;
            const i = s.type === R.SYMBOL;
            t.setPaintProperties(e.layer, e.paint),
              i && this._vectorTileContainer.restartDeclutter(),
              this._vectorTileContainer.requestRender();
          }
        }),
        this.layer.on("layout-change", (e) => {
          const t = this._styleRepository,
            s = t.getLayerById(e.layer);
          if (!s) return;
          const i = Ke(s.layout, e.layout);
          if (!B(i)) {
            if (
              $e(i, "visibility") &&
              (function (r) {
                if (B(r)) return 0;
                switch (r.type) {
                  case "partial":
                    return Object.keys(r.diff).length;
                  case "complete":
                    return Math.max(
                      Object.keys(r.oldValue).length,
                      Object.keys(r.newValue).length
                    );
                  case "collection":
                    return (
                      Object.keys(r.added).length +
                      Object.keys(r.changed).length +
                      Object.keys(r.removed).length
                    );
                }
              })(i) === 1
            )
              return (
                t.setLayoutProperties(e.layer, e.layout),
                s.type === R.SYMBOL &&
                  this._vectorTileContainer.restartDeclutter(),
                void this._vectorTileContainer.requestRender()
              );
            this._styleChanges.push({ type: D.LAYOUT_CHANGED, data: e }),
              this.notifyChange("updating"),
              this.requestUpdate();
          }
        }),
        this.layer.on("style-layer-visibility-change", (e) => {
          const t = this._styleRepository,
            s = t.getLayerById(e.layer);
          s &&
            (t.setStyleLayerVisibility(e.layer, e.visibility),
            s.type === R.SYMBOL && this._vectorTileContainer.restartDeclutter(),
            this._vectorTileContainer.requestRender());
        }),
        this.layer.on("style-layer-change", (e) => {
          this._styleChanges.push({ type: D.LAYER_CHANGED, data: e }),
            this.notifyChange("updating"),
            this.requestUpdate();
        }),
        this.layer.on("delete-style-layer", (e) => {
          this._styleChanges.push({ type: D.LAYER_REMOVED, data: e }),
            this.notifyChange("updating"),
            this.requestUpdate();
        }),
        this.layer.on("load-style", () => this._loadStyle()),
        this.layer.on("spriteSource-change", (e) => {
          (this._newSpriteSource = e.spriteSource),
            this._styleChanges.push({ type: D.SPRITES_CHANGED, data: null });
          const t = this._styleRepository.layers;
          for (const s of t)
            switch (s.type) {
              case R.SYMBOL:
                s.getLayoutProperty("icon-image") &&
                  this._styleChanges.push({
                    type: D.LAYOUT_CHANGED,
                    data: { layer: s.id, layout: s.layout },
                  });
                break;
              case R.LINE:
                s.getPaintProperty("line-pattern") &&
                  this._styleChanges.push({
                    type: D.PAINTER_CHANGED,
                    data: {
                      layer: s.id,
                      paint: s.paint,
                      isDataDriven: s.isPainterDataDriven(),
                    },
                  });
                break;
              case R.FILL:
                s.getLayoutProperty("fill-pattern") &&
                  this._styleChanges.push({
                    type: D.PAINTER_CHANGED,
                    data: {
                      layer: s.id,
                      paint: s.paint,
                      isDataDriven: s.isPainterDataDriven(),
                    },
                  });
            }
          this.notifyChange("updating"), this.requestUpdate();
        }),
      ]);
  }
  detach() {
    this._stop(),
      this.container.removeAllChildren(),
      (this._vectorTileContainer = j(this._vectorTileContainer)),
      (this._tileHandler = j(this._tileHandler));
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this._collisionOverlay && this._vectorTileContainer.restartDeclutter(),
      this.requestUpdate();
  }
  supportsSpatialReference(n) {
    var e;
    return Ze(
      (e = this.layer.tileInfo) == null ? void 0 : e.spatialReference,
      n
    );
  }
  canResume() {
    let n = super.canResume();
    const { currentStyleInfo: e } = this.layer;
    if (n && e != null && e.layerDefinition) {
      const t = this.view.scale,
        { minScale: s, maxScale: i } = e.layerDefinition;
      e &&
        e.layerDefinition &&
        (s && s < t && (n = !1), i && i > t && (n = !1));
    }
    return n;
  }
  isUpdating() {
    const n = this._vectorTileContainer.children;
    return (
      !this._isTileHandlerReady ||
      !this._fetchQueue ||
      !this._parseQueue ||
      this._fetchQueue.updating ||
      this._parseQueue.updating ||
      (n.length > 0 && n.some((e) => e.invalidating)) ||
      this.fading
    );
  }
  acquireTile(n) {
    var t;
    const e = this._createVectorTile(n);
    return (
      (t = this._tileHandlerPromise) == null ||
        t.then(() => {
          this._fetchQueue
            .push(e.key)
            .then((s) => this._parseQueue.push({ key: e.key, data: s }))
            .then((s) => {
              e.once("attach", () => this.requestUpdate()),
                e.setData(s),
                this.requestUpdate(),
                this.notifyChange("updating");
            })
            .catch((s) => {
              this.notifyChange("updating"),
                X(s) || le.getLogger(this.declaredClass).error(s);
            });
        }),
      e
    );
  }
  releaseTile(n) {
    const e = n.key.id;
    this._fetchQueue.abort(e), this._parseQueue.abort(e), this.requestUpdate();
  }
  _start() {
    if (
      (this._stop(),
      (this._tileManager = new ft(
        {
          acquireTile: (t) => this.acquireTile(t),
          releaseTile: (t) => this.releaseTile(t),
          tileInfoView: this._tileInfoView,
        },
        this._vectorTileContainer
      )),
      !this.layer.currentStyleInfo)
    )
      return;
    const n = new AbortController(),
      e = this._tileHandler.start({ signal: n.signal }).then(() => {
        (this._fetchQueue = new he({
          tileInfoView: this._tileInfoView,
          process: (t, s) => this._getTileData(t, s),
          concurrency: 15,
        })),
          (this._parseQueue = new he({
            tileInfoView: this._tileInfoView,
            process: (t, s) => this._parseTileData(t, s),
            concurrency: 8,
          })),
          this.requestUpdate(),
          (this._isTileHandlerReady = !0);
      });
    this._tileHandler.spriteMosaic.then((t) => {
      this._vectorTileContainer.setStyleResources(
        t,
        this._tileHandler.glyphMosaic,
        this._styleRepository
      ),
        this.requestUpdate();
    }),
      (this._tileHandlerAbortController = n),
      (this._tileHandlerPromise = e);
  }
  _stop() {
    if (!this._tileHandlerAbortController || !this._vectorTileContainer) return;
    const n = this._tileHandlerAbortController;
    n && n.abort(),
      (this._tileHandlerPromise = null),
      (this._isTileHandlerReady = !1),
      (this._fetchQueue = j(this._fetchQueue)),
      (this._parseQueue = j(this._parseQueue)),
      (this._tileManager = j(this._tileManager)),
      this._vectorTileContainer.removeAllChildren();
  }
  async _getTileData(n, e) {
    const t = await this._tileHandler.fetchTileData(n, e);
    return this.notifyChange("updating"), t;
  }
  async _parseTileData(n, e) {
    return this._tileHandler.parseTileData(n, e);
  }
  async _applyStyleChanges() {
    (this._isTileHandlerReady = !1),
      this._fetchQueue.pause(),
      this._parseQueue.pause(),
      this._fetchQueue.clear(),
      this._parseQueue.clear(),
      this._tileManager.clearCache();
    const n = this._styleChanges;
    try {
      await this._tileHandler.updateStyle(n);
    } catch (o) {
      le
        .getLogger(this.declaredClass)
        .error("error applying vector-tiles style update", o.message),
        this._fetchQueue.resume(),
        this._parseQueue.resume(),
        (this._isTileHandlerReady = !0);
    }
    const e = this._styleRepository,
      t = [];
    n.forEach((o) => {
      if (o.type !== D.LAYER_REMOVED) return;
      const a = o.data,
        l = e.getLayerById(a.layer);
      l && t.push(l.uid);
    });
    const s = [];
    let i;
    n.forEach((o) => {
      const a = o.type,
        l = o.data;
      switch (a) {
        case D.PAINTER_CHANGED:
          e.setPaintProperties(l.layer, l.paint), (i = l.layer);
          break;
        case D.LAYOUT_CHANGED:
          e.setLayoutProperties(l.layer, l.layout), (i = l.layer);
          break;
        case D.LAYER_REMOVED:
          return void e.deleteStyleLayer(l.layer);
        case D.LAYER_CHANGED:
          e.setStyleLayer(l.layer, l.index), (i = l.layer.id);
          break;
        case D.SPRITES_CHANGED:
          this._vectorTileContainer.setSpriteMosaic(
            this._tileHandler.setSpriteSource(this._newSpriteSource)
          ),
            (this._newSpriteSource = null),
            (i = null);
      }
      const h = e.getLayerById(i);
      h && s.push(h.uid);
    });
    const r = this._vectorTileContainer.children;
    if (t.length > 0) {
      this._vectorTileContainer.deleteStyleLayers(t);
      for (const o of r) o.deleteLayerData(t);
    }
    if ((this._fetchQueue.resume(), this._parseQueue.resume(), s.length > 0)) {
      const o = [];
      for (const a of r) {
        const l = this._fetchQueue
          .push(a.key)
          .then((h) =>
            this._parseQueue.push({ key: a.key, data: h, styleLayerUIDs: s })
          )
          .then((h) => a.setData(h));
        o.push(l);
      }
      await Promise.all(o);
    }
    (this._styleChanges = []),
      (this._isTileHandlerReady = !0),
      this.notifyChange("updating"),
      this.requestUpdate();
  }
  async _loadStyle() {
    const { style: n } = this.layer.currentStyleInfo,
      e = Xe(n);
    (this._isTileHandlerReady = !1),
      this._fetchQueue.pause(),
      this._parseQueue.pause(),
      this._fetchQueue.clear(),
      this._parseQueue.clear(),
      this.notifyChange("updating"),
      (this._styleRepository = new ue(e)),
      this._vectorTileContainer.destroy(),
      this._tileManager.clear(),
      this._tileHandlerAbortController.abort(),
      (this._tileHandlerAbortController = new AbortController());
    const { signal: t } = this._tileHandlerAbortController;
    try {
      (this._tileHandlerPromise = this._tileHandler.setStyle(
        this._styleRepository,
        e
      )),
        await this._tileHandlerPromise;
    } catch (i) {
      if (!X(i)) throw i;
    }
    if (t.aborted)
      return (
        this._fetchQueue.resume(),
        this._parseQueue.resume(),
        (this._isTileHandlerReady = !0),
        this.notifyChange("updating"),
        void this.requestUpdate()
      );
    const s = await this._tileHandler.spriteMosaic;
    this._vectorTileContainer.setStyleResources(
      s,
      this._tileHandler.glyphMosaic,
      this._styleRepository
    ),
      this._fetchQueue.resume(),
      this._parseQueue.resume(),
      (this._isTileHandlerReady = !0),
      this.notifyChange("updating"),
      this.requestUpdate();
  }
  _createVectorTile(n) {
    const e = this._tileInfoView.getTileBounds(ie(), n),
      t = this._tileInfoView.getTileResolution(n.level);
    return new St(n, t, e[0], e[3], 512, 512, this._styleRepository);
  }
};
J([Y()], E.prototype, "_fetchQueue", void 0),
  J([Y()], E.prototype, "_parseQueue", void 0),
  J([Y()], E.prototype, "_isTileHandlerReady", void 0),
  J([Y()], E.prototype, "fading", void 0),
  (E = J([et("esri.views.2d.layers.VectorTileLayerView2D")], E));
const fs = E;
export { fs as default };
