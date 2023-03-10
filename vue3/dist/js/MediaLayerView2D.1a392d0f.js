import {
  bg as $,
  G as W,
  H as P,
  ba as ee,
  r as T,
  y as te,
  Q as Y,
  s as se,
  h as re,
  a as j,
  aS as b,
  t as _,
  a_ as ie,
  b6 as ae,
  e as oe,
  bz as ne,
  aw as le,
  az as he,
  M as me,
  ax as de,
  g as ce,
  i as pe,
  bm as ue,
  aB as fe,
  P as ye,
  dg as B,
  aa as _e,
  ab as ge,
  e8 as ve,
  j as we,
  ar as Re,
  dt as Ee,
  ae as M,
  af as I,
  ag as xe,
  T as be,
  e9 as Me,
} from "./index.8fd7165c.js";
import { j as Te, u as Q } from "./perspectiveUtils.747c556b.js";
import "./MagnifierPrograms.353c7e27.js";
import { r as Se } from "./Container.a5892366.js";
import "./BufferPool.8dc92598.js";
import { T as Ce } from "./color.4c5303e9.js";
import { b as Ve, w as Ge } from "./WGLContainer.e7ddd41d.js";
import {
  P as Ae,
  G as qe,
  L as De,
  D as Pe,
  F as k,
} from "./enums.64ab819c.js";
import { E as Ie } from "./Texture.fb0c670a.js";
import "./ProgramTemplate.4bbf0f5e.js";
import "./MaterialKey.97cb3dc8.js";
import "./utils.1f803f1b.js";
import { E as F, f as Ue } from "./VertexArrayObject.1b8f3583.js";
import "./StyleDefinition.4f77c81e.js";
import "./enums.fb086c25.js";
import "./OrderIndependentTransparency.0d2f697c.js";
import "./floatRGBA.6f2fa7cd.js";
import "./webgl-debug.ae38a7fa.js";
import "./GraphicsView2D.5baab708.js";
import "./AttributeStoreView.413dc93f.js";
import "./earcut.9f54f087.js";
import { r as Le } from "./vec3f32.5805ce90.js";
import { e as ze } from "./mat3f64.eb921732.js";
import { f as He, u as Oe } from "./LayerView.d8517e2e.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./normalizeUtilsSync.1ac6b009.js";
import "./_commonjsHelpers.2f3e7994.js";
import "./ExpandedCIM.e22c8b13.js";
import "./BidiEngine.520adad3.js";
import "./GeometryUtils.874f8cf4.js";
import "./enums.13513a14.js";
import "./definitions.ce677f69.js";
import "./Rect.6884a4ea.js";
import "./quantizationUtils.1e9e702d.js";
import "./rasterizingUtils.3a0dd398.js";
import "./GeometryUtils.82ab0a13.js";
import "./imageutils.463df5ec.js";
import "./Matcher.fe3c9df5.js";
import "./visualVariablesUtils.1183f3fb.js";
import "./visualVariablesUtils.de38be9a.js";
import "./tileUtils.c2f19f52.js";
import "./TurboLine.2982dc8d.js";
import "./devEnvironmentUtils.4eab2a99.js";
import "./CircularArray.6cd6ba2b.js";
import "./ComputedAttributeStorage.396dbaf7.js";
import "./arcadeTimeUtils.e79f2f70.js";
import "./executionError.fb3f283a.js";
import "./centroid.e6a939c1.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./config.1337d16e.js";
import "./basicInterfaces.b7051eb1.js";
import "./projectionSupport.4aeb802f.js";
import "./json.495fc412.js";
import "./schemaUtils.264ba82d.js";
import "./util.79a0d0b9.js";
import "./TiledDisplayObject.3b82e169.js";
const g = ze();
class We extends Se {
  constructor(e) {
    super(),
      (this.elementView = e),
      (this.isWrapAround = !1),
      (this.perspectiveTransform = $()),
      (this._vertices = new Float32Array(20)),
      (this._handles = []),
      this._handles.push(
        W(
          () => this.elementView.element.opacity,
          (t) => (this.opacity = t),
          P
        ),
        W(
          () => [this.elementView.coords],
          () => {
            this.requestRender();
          },
          P
        ),
        ee(
          () => this.elementView.element.loaded,
          () => {
            const t = this.elementView.element;
            this.ready(),
              t.type === "video" &&
                T(t.content) &&
                this._handles.push(
                  te(t.content, "play", () => this.requestRender())
                );
          },
          P
        )
      ),
      e.element.load().catch((t) => {
        Y.getLogger("esri.views.2d.layers.MediaLayerView2D").error(
          new se("element-load-error", "Element cannot be displayed", {
            element: e,
            error: t,
          })
        );
      });
  }
  destroy() {
    this._handles.forEach((e) => e.remove()), (this.texture = re(this.texture));
  }
  get dvsMat3() {
    return this.parent.dvsMat3;
  }
  beforeRender(e) {
    const { context: t } = e,
      r = this.elementView.element.content;
    if (T(r)) {
      const i = r instanceof HTMLImageElement,
        a = r instanceof HTMLVideoElement,
        n = i ? r.naturalWidth : a ? r.videoWidth : r.width,
        o = i ? r.naturalHeight : a ? r.videoHeight : r.height;
      this._updatePerspectiveTransform(n, o),
        this.texture
          ? a &&
            !r.paused &&
            (this.texture.setData(r),
            this.requestRender(),
            (t.type === j.WEBGL2 || (b(n) && b(o))) &&
              this.texture.generateMipmap())
          : ((this.texture = new Ie(
              t,
              {
                pixelFormat: Ae.RGBA,
                dataType: qe.UNSIGNED_BYTE,
                samplingMode: De.LINEAR,
                wrapMode: Pe.CLAMP_TO_EDGE,
                width: n,
                height: o,
                preMultiplyAlpha: !0,
              },
              r
            )),
            (t.type === j.WEBGL2 || (b(n) && b(o))) &&
              this.texture.generateMipmap(),
            a && !r.paused && this.requestRender());
    }
    super.beforeRender(e);
  }
  _createTransforms() {
    return null;
  }
  updateDrawCoords(e, t) {
    const r = this.elementView.coords;
    if (_(r)) return;
    const [i, a, n, o] = r.rings[0],
      c = this._vertices,
      { x: l, y: h } = e,
      p = t !== 0;
    p
      ? c.set([
          a[0] - l,
          a[1] - h,
          i[0] - l,
          i[1] - h,
          n[0] - l,
          n[1] - h,
          o[0] - l,
          o[1] - h,
          o[0] - l,
          o[1] - h,
          a[0] + t - l,
          a[1] - h,
          a[0] + t - l,
          a[1] - h,
          i[0] + t - l,
          i[1] - h,
          n[0] + t - l,
          n[1] - h,
          o[0] + t - l,
          o[1] - h,
        ])
      : c.set([
          a[0] - l,
          a[1] - h,
          i[0] - l,
          i[1] - h,
          n[0] - l,
          n[1] - h,
          o[0] - l,
          o[1] - h,
        ]),
      (this.isWrapAround = p);
  }
  getVAO(e, t, r) {
    if (_(this.elementView.coords)) return null;
    const i = this._vertices;
    if (this._vao) this._geometryVbo.setData(i);
    else {
      this._geometryVbo = F.createVertex(e, k.DYNAMIC_DRAW, i);
      const a = F.createVertex(
        e,
        k.STATIC_DRAW,
        new Uint16Array([
          0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
        ])
      );
      this._vao = new Ue(e, r, t, { geometry: this._geometryVbo, tex: a });
    }
    return this._vao;
  }
  _updatePerspectiveTransform(e, t) {
    const r = this._vertices;
    Te(
      g,
      [0, 0, e, 0, 0, t, e, t],
      [r[0], r[1], r[4], r[5], r[2], r[3], r[6], r[7]]
    ),
      ie(this.perspectiveTransform, (g[6] / g[8]) * e, (g[7] / g[8]) * t);
  }
}
class je extends Ve {
  constructor() {
    super(...arguments),
      (this._localOrigin = ae(0, 0)),
      (this._viewStateId = -1),
      (this._dvsMat3 = oe()),
      (this.requiresDedicatedFBO = !1);
  }
  get dvsMat3() {
    return this._dvsMat3;
  }
  beforeRender(e) {
    this._updateMatrices(e), this._updateOverlays(e, this.children);
    for (const t of this.children) t.beforeRender(e);
  }
  prepareRenderPasses(e) {
    const t = e.registerRenderPass({
      name: "overlay",
      brushes: [Ge.overlay],
      target: () => this.children,
      drawPhase: Ce.MAP,
    });
    return [...super.prepareRenderPasses(e), t];
  }
  _updateMatrices(e) {
    const { state: t } = e,
      {
        id: r,
        size: i,
        pixelRatio: a,
        resolution: n,
        rotation: o,
        viewpoint: c,
        displayMat3: l,
      } = t;
    if (this._viewStateId === r) return;
    const h = (Math.PI / 180) * o,
      p = a * i[0],
      f = a * i[1],
      { x: S, y: w } = c.targetGeometry,
      C = ne(S, t.spatialReference);
    (this._localOrigin.x = C), (this._localOrigin.y = w);
    const V = n * p,
      R = n * f,
      m = le(this._dvsMat3);
    he(m, m, l),
      me(m, m, de(p / 2, f / 2)),
      ce(m, m, Le(p / V, -f / R, 1)),
      pe(m, m, -h),
      (this._viewStateId = r);
  }
  _updateOverlays(e, t) {
    const { state: r } = e,
      {
        rotation: i,
        spatialReference: a,
        worldScreenWidth: n,
        size: o,
        viewpoint: c,
      } = r,
      l = this._localOrigin;
    let h = 0;
    const p = ue(a);
    if (p && a.isWrappable) {
      const f = o[0],
        S = o[1],
        w = (180 / Math.PI) * i,
        C = Math.abs(Math.cos(w)),
        V = Math.abs(Math.sin(w)),
        R = Math.round(f * C + S * V),
        [m, G] = p.valid,
        u = fe(a),
        { x: U, y: J } = c.targetGeometry,
        K = [U, J],
        A = [0, 0];
      r.toScreen(A, K);
      const E = [0, 0];
      let q;
      q = R > n ? 0.5 * n : 0.5 * R;
      const L = Math.floor((U + 0.5 * u) / u),
        X = m + L * u,
        Z = G + L * u,
        D = [A[0] + q, 0];
      r.toMap(E, D),
        E[0] > Z && (h = u),
        (D[0] = A[0] - q),
        r.toMap(E, D),
        E[0] < X && (h = -u);
      for (const x of t) {
        const z = x.elementView.bounds;
        if (_(z)) continue;
        const [H, , O] = z;
        H < m && O > m
          ? x.updateDrawCoords(l, u)
          : O > G && H < G
          ? x.updateDrawCoords(l, -u)
          : x.updateDrawCoords(l, h);
      }
    } else for (const f of t) f.updateDrawCoords(l, h);
  }
}
let y = class extends He(Oe) {
  constructor() {
    super(...arguments),
      (this._overlayContainer = null),
      (this._fetchQueue = null),
      (this._tileStrategy = null),
      (this._elementReferences = new Map()),
      (this._debugGraphicsView = null),
      (this.layer = null),
      (this.elements = new ye());
  }
  attach() {
    this.addAttachHandles([
      B(
        () => this.layer.effectiveSource,
        "refresh",
        () => {
          for (const s of this._tileStrategy.tiles) this._updateTile(s);
          this.requestUpdate();
        }
      ),
      B(
        () => this.layer.effectiveSource,
        "change",
        ({ element: s }) => this._elementUpdateHandler(s)
      ),
    ]),
      (this._overlayContainer = new je()),
      this.container.addChild(this._overlayContainer),
      (this._fetchQueue = new _e({
        tileInfoView: this.view.featuresTilingScheme,
        concurrency: 10,
        process: (s, e) => this._queryElements(s, e),
      })),
      (this._tileStrategy = new ge({
        cachePolicy: "purge",
        resampling: !0,
        acquireTile: (s) => this._acquireTile(s),
        releaseTile: (s) => this._releaseTile(s),
        tileInfoView: this.view.featuresTilingScheme,
      })),
      this.requestUpdate();
  }
  detach() {
    var s;
    this.elements.removeAll(),
      this._tileStrategy.destroy(),
      this._fetchQueue.destroy(),
      this._overlayContainer.removeAllChildren(),
      this.container.removeAllChildren(),
      this._elementReferences.clear(),
      (s = this._debugGraphicsView) == null || s.destroy();
  }
  supportsSpatialReference(s) {
    return !0;
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  update(s) {
    var e;
    this._tileStrategy.update(s),
      (e = this._debugGraphicsView) == null || e.update(s);
  }
  async hitTest(s, e) {
    const t = [],
      r = s.normalize(),
      i = [r.x, r.y];
    for (const {
      projectedElement: { normalizedCoords: a, element: n },
    } of this._elementReferences.values())
      T(a) &&
        ve(a.rings, i) &&
        t.push({ type: "media", element: n, layer: this.layer, mapPoint: s });
    return t.reverse();
  }
  canResume() {
    return this.layer.source != null && super.canResume();
  }
  async doRefresh() {
    this._fetchQueue.reset(),
      this._tileStrategy.tiles.forEach((s) => this._updateTile(s));
  }
  _acquireTile(s) {
    const e = new Be(s.clone());
    return this._updateTile(e), e;
  }
  _updateTile(s) {
    this.updatingHandles.addPromise(
      this._fetchQueue.push(s.key).then(
        (e) => {
          const [t, r] = s.setElements(e);
          this._referenceElements(s, t),
            this._dereferenceElements(s, r),
            this.requestUpdate();
        },
        (e) => {
          we(e) || Y.getLogger(this.declaredClass).error(e);
        }
      )
    );
  }
  _releaseTile(s) {
    this._fetchQueue.abort(s.key.id),
      s.elements && this._dereferenceElements(s, s.elements),
      this.requestUpdate();
  }
  async _queryElements(s, e) {
    const t = this.layer.effectiveSource;
    if (_(t)) return [];
    this.view.featuresTilingScheme.getTileBounds(d, s, !0);
    const r = new Re({
      xmin: d[0],
      ymin: d[1],
      xmax: d[2],
      ymax: d[3],
      spatialReference: this.view.spatialReference,
    });
    return t.queryElements(r, e);
  }
  _referenceElements(s, e) {
    const t = this.layer.source;
    if (!_(t)) for (const r of e) this._referenceElement(s, r);
  }
  _referenceElement(s, e) {
    Ee(this._elementReferences, e.uid, () => {
      const t = new Q({
          element: e,
          spatialReference: this.view.spatialReference,
        }),
        r = new We(t);
      return (
        this._overlayContainer.addChild(r),
        this.elements.add(e),
        {
          tiles: new Set(),
          projectedElement: t,
          overlay: r,
          debugGraphic: null,
        }
      );
    }).tiles.add(s);
  }
  _dereferenceElements(s, e) {
    for (const t of e) this._dereferenceElement(s, t);
  }
  _dereferenceElement(s, e) {
    var r;
    const t = this._elementReferences.get(e.uid);
    t.tiles.delete(s),
      t.tiles.size ||
        (this._overlayContainer.removeChild(t.overlay),
        t.overlay.destroy(),
        t.projectedElement.destroy(),
        this._elementReferences.delete(e.uid),
        this.elements.remove(e),
        (r = this._debugGraphicsView) == null ||
          r.graphics.remove(t.debugGraphic));
  }
  _elementUpdateHandler(s) {
    var r;
    let e = this._elementReferences.get(s.uid);
    if (e) {
      const i = e.projectedElement.normalizedCoords;
      if (_(i))
        return (
          this._overlayContainer.removeChild(e.overlay),
          e.overlay.destroy(),
          e.projectedElement.destroy(),
          this._elementReferences.delete(s.uid),
          this.elements.remove(s),
          void ((r = this._debugGraphicsView) == null
            ? void 0
            : r.graphics.remove(e.debugGraphic))
        );
      const a = [],
        n = [];
      for (const o of this._tileStrategy.tiles) {
        const c = N(this.view.featuresTilingScheme, o, i);
        e.tiles.has(o) ? c || n.push(o) : c && a.push(o);
      }
      for (const o of a) this._referenceElement(o, s);
      for (const o of n) this._dereferenceElement(o, s);
      return (
        (e = this._elementReferences.get(s.uid)),
        void (
          (e == null ? void 0 : e.debugGraphic) &&
          ((e.debugGraphic.geometry = e.projectedElement.normalizedCoords),
          this._debugGraphicsView.graphicUpdateHandler({
            graphic: e.debugGraphic,
            property: "geometry",
          }))
        )
      );
    }
    const t = new Q({
      element: s,
      spatialReference: this.view.spatialReference,
    }).normalizedCoords;
    if (T(t))
      for (const i of this._tileStrategy.tiles)
        N(this.view.featuresTilingScheme, i, t) && this._referenceElement(i, s);
  }
};
M([I()], y.prototype, "_fetchQueue", void 0),
  M([I()], y.prototype, "layer", void 0),
  M([I({ readOnly: !0 })], y.prototype, "elements", void 0),
  (y = M([xe("esri.views.2d.layers.MediaLayerView2D")], y));
const d = be(),
  v = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 };
function N(s, e, t) {
  return (
    s.getTileBounds(d, e.key, !0),
    (v.xmin = d[0]),
    (v.ymin = d[1]),
    (v.xmax = d[2]),
    (v.ymax = d[3]),
    Me(v, t)
  );
}
class Be {
  constructor(e) {
    (this.key = e),
      (this.elements = null),
      (this.isReady = !1),
      (this.visible = !0);
  }
  setElements(e) {
    const t = [],
      r = new Set(this.elements);
    this.elements = e;
    for (const i of e) r.has(i) ? r.delete(i) : t.push(i);
    return (this.isReady = !0), [t, Array.from(r)];
  }
  destroy() {}
}
const Zt = y;
export { Zt as default };
