import {
  T as z,
  ad as E,
  ae as d,
  af as l,
  ag as W,
  ap as T,
  aq as R,
  f as w,
  bm as q,
  a2 as N,
  L as C,
  S as b,
  aD as H,
  a9 as B,
} from "./index.8fd7165c.js";
import { R as I } from "./Bitmap.cb464f5e.js";
const O = Math.PI / 180;
function A(e) {
  return e * O;
}
function D(e, i) {
  const s = A(i.rotation),
    t = Math.abs(Math.cos(s)),
    r = Math.abs(Math.sin(s)),
    [o, p] = i.size;
  return (
    (e[0] = Math.round(p * r + o * t)), (e[1] = Math.round(p * t + o * r)), e
  );
}
const x = z(),
  g = [0, 0],
  P = new E(0, 0, 0, 0),
  L = 2048,
  U = 2048,
  V = !1,
  j = !1,
  k = !1;
let h = class extends T {
  constructor(e) {
    super(e),
      (this._imagePromise = null),
      (this.bitmaps = []),
      (this.hidpi = k),
      (this.imageMaxWidth = L),
      (this.imageMaxHeight = U),
      (this.imageRotationSupported = V),
      (this.imageNormalizationSupported = j),
      (this.update = R(async (i, s) => {
        if ((w(s), !i.stationary || this.destroyed)) return;
        const t = i.state,
          r = q(t.spatialReference),
          o = this.hidpi ? i.pixelRatio : 1,
          p =
            this.imageNormalizationSupported &&
            t.worldScreenWidth &&
            t.worldScreenWidth < t.size[0],
          a = this.imageMaxWidth ?? 0,
          c = this.imageMaxHeight ?? 0;
        p
          ? ((g[0] = t.worldScreenWidth), (g[1] = t.size[1]))
          : this.imageRotationSupported
          ? ((g[0] = t.size[0]), (g[1] = t.size[1]))
          : D(g, t);
        const y = Math.floor(g[0] * o) > a || Math.floor(g[1] * o) > c,
          M = r && (t.extent.xmin < r.valid[0] || t.extent.xmax > r.valid[1]),
          f = !this.imageNormalizationSupported && M,
          S = !y && !f,
          m = this.imageRotationSupported ? t.rotation : 0,
          v = this.container.children.slice();
        if (S) {
          const n = p ? t.paddedViewState.center : t.center;
          this._imagePromise,
            (this._imagePromise = this._singleExport(
              t,
              g,
              n,
              t.resolution,
              m,
              o,
              s
            ));
        } else {
          let n = Math.min(a, c);
          f && (n = Math.min(t.worldScreenWidth, n)),
            (this._imagePromise = this._tiledExport(t, n, o, s));
        }
        try {
          const n = (await this._imagePromise) ?? [];
          w(s);
          const u = [];
          if (((this._imagePromise = null), this.destroyed)) return;
          this.bitmaps = n;
          for (const _ of v)
            n.includes(_) ||
              u.push(
                _.fadeOut().then(() => {
                  _.remove(), _.destroy();
                })
              );
          for (const _ of n) u.push(_.fadeIn());
          await Promise.all(u);
        } catch (n) {
          (this._imagePromise = null), N(n);
        }
      }, 5e3)),
      (this.updateExports = R(async (i) => {
        const s = [];
        for (const t of this.container.children) {
          if (!t.visible || !t.stage) return;
          s.push(
            i(t).then(() => {
              t.invalidateTexture(), t.requestRender();
            })
          );
        }
        (this._imagePromise = C(s).then(() => (this._imagePromise = null))),
          await this._imagePromise;
      }));
  }
  destroy() {
    this.bitmaps.forEach((e) => e.destroy()), (this.bitmaps = []);
  }
  get updating() {
    return !this.destroyed && this._imagePromise !== null;
  }
  async _export(e, i, s, t, r, o) {
    const p = await this.fetchSource(e, Math.floor(i * r), Math.floor(s * r), {
      rotation: t,
      pixelRatio: r,
      signal: o,
    });
    w(o);
    const a = new I(null, {
      immutable: !0,
      requestRenderOnSourceChangedEnabled: !0,
    });
    return (
      (a.x = e.xmin),
      (a.y = e.ymax),
      (a.resolution = e.width / i),
      (a.rotation = t),
      (a.pixelRatio = r),
      (a.opacity = 0),
      this.container.addChild(a),
      await a.setSourceAsync(p, o),
      w(o),
      a
    );
  }
  async _singleExport(e, i, s, t, r, o, p) {
    (function (c, y, M, f) {
      const [S, m] = y,
        [v, n] = f,
        u = 0.5 * M;
      (c[0] = S - u * v),
        (c[1] = m - u * n),
        (c[2] = S + u * v),
        (c[3] = m + u * n);
    })(x, s, t, i);
    const a = b(x, e.spatialReference);
    return [await this._export(a, i[0], i[1], r, o, p)];
  }
  _tiledExport(e, i, s, t) {
    const r = H.create({
        size: i,
        spatialReference: e.spatialReference,
        scales: [e.scale],
      }),
      o = new B(r),
      p = o.getTileCoverage(e);
    if (!p) return null;
    const a = [];
    return (
      p.forEach((c, y, M, f) => {
        P.set(c, y, M, 0), o.getTileBounds(x, P);
        const S = b(x, e.spatialReference);
        a.push(
          this._export(S, i, i, 0, s, t).then(
            (m) => (
              f !== 0 &&
                (P.set(c, y, M, f),
                o.getTileBounds(x, P),
                (m.x = x[0]),
                (m.y = x[3])),
              m
            )
          )
        );
      }),
      Promise.all(a)
    );
  }
};
d([l()], h.prototype, "_imagePromise", void 0),
  d([l()], h.prototype, "bitmaps", void 0),
  d([l()], h.prototype, "container", void 0),
  d([l()], h.prototype, "fetchSource", void 0),
  d([l()], h.prototype, "hidpi", void 0),
  d([l()], h.prototype, "imageMaxWidth", void 0),
  d([l()], h.prototype, "imageMaxHeight", void 0),
  d([l()], h.prototype, "imageRotationSupported", void 0),
  d([l()], h.prototype, "imageNormalizationSupported", void 0),
  d([l()], h.prototype, "requestUpdate", void 0),
  d([l()], h.prototype, "updating", null),
  (h = d([W("esri.views.2d.layers.support.ExportStrategy")], h));
const J = h;
export { J as v };
