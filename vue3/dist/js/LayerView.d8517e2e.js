import {
  ae as t,
  af as i,
  ag as c,
  dd as q,
  cM as O,
  de as A,
  ar as x,
  bn as I,
  P as V,
  ao as C,
  df as U,
  s as N,
  G as d,
  at as p,
  dg as j,
  b3 as L,
  bD as M,
  dh as H,
  b0 as _,
  ap as E,
  Q as T,
  W as P,
} from "./index.8fd7165c.js";
import { h as D } from "./Container.a5892366.js";
let y = class extends q {
  get version() {
    return this.commitVersionProperties(), (this._get("version") || 0) + 1;
  }
};
t([i({ readOnly: !0 })], y.prototype, "version", null),
  (y = t([c("esri.views.layers.support.ClipArea")], y));
const b = y;
var f;
let h = (f = class extends b {
  constructor(e) {
    super(e),
      (this.type = "rect"),
      (this.left = null),
      (this.right = null),
      (this.top = null),
      (this.bottom = null);
  }
  clone() {
    return new f({
      left: this.left,
      right: this.right,
      top: this.top,
      bottom: this.bottom,
    });
  }
  commitVersionProperties() {
    this.commitProperty("left"),
      this.commitProperty("right"),
      this.commitProperty("top"),
      this.commitProperty("bottom");
  }
});
t(
  [i({ type: [Number, String], json: { write: !0 } })],
  h.prototype,
  "left",
  void 0
),
  t(
    [i({ type: [Number, String], json: { write: !0 } })],
    h.prototype,
    "right",
    void 0
  ),
  t(
    [i({ type: [Number, String], json: { write: !0 } })],
    h.prototype,
    "top",
    void 0
  ),
  t(
    [i({ type: [Number, String], json: { write: !0 } })],
    h.prototype,
    "bottom",
    void 0
  ),
  (h = f = t([c("esri.views.layers.support.ClipRect")], h));
const k = h;
var w;
const z = { base: A, key: "type", typeMap: { extent: x, polygon: I } };
let v = (w = class extends b {
  constructor(e) {
    super(e), (this.type = "geometry"), (this.geometry = null);
  }
  clone() {
    var e;
    return new w({
      geometry: ((e = this.geometry) == null ? void 0 : e.clone()) ?? null,
    });
  }
  commitVersionProperties() {
    this.commitProperty("geometry");
  }
});
t(
  [i({ types: z, json: { read: O, write: !0 } })],
  v.prototype,
  "geometry",
  void 0
),
  (v = w = t([c("esri.views.layers.support.Geometry")], v));
const F = v;
let g = class extends b {
  constructor(e) {
    super(e), (this.type = "path"), (this.path = []);
  }
  commitVersionProperties() {
    this.commitProperty("path");
  }
};
t(
  [i({ type: [[[Number]]], json: { write: !0 } })],
  g.prototype,
  "path",
  void 0
),
  (g = t([c("esri.views.layers.support.Path")], g));
const G = g,
  m = V.ofType({
    key: "type",
    base: null,
    typeMap: { rect: k, path: G, geometry: F },
  }),
  Q = (e) => {
    let a = class extends e {
      constructor() {
        super(...arguments),
          (this.attached = !1),
          (this.clips = new m()),
          (this.lastUpdateId = -1),
          (this.moving = !1),
          (this.updateRequested = !1),
          (this.visibleAtCurrentScale = !1),
          (this.highlightOptions = null);
      }
      initialize() {
        var l, u, R;
        const s =
          ((l = this.view) == null ? void 0 : l.spatialReferenceLocked) ?? !0;
        ((u = this.view) == null ? void 0 : u.spatialReference) &&
        s &&
        !this.spatialReferenceSupported
          ? this.addResolvingPromise(
              Promise.reject(
                new N(
                  "layerview:spatial-reference-incompatible",
                  "The spatial reference of this layer does not meet the requirements of the view",
                  { layer: this.layer }
                )
              )
            )
          : (this.container || (this.container = new D()),
            (this.container.fadeTransitionEnabled = !0),
            (this.container.visible = !1),
            this.container.endTransitions(),
            this.addHandles(
              [
                d(
                  () => this.suspended,
                  (r) => {
                    this.container && (this.container.visible = !r),
                      this.view &&
                        !r &&
                        this.updateRequested &&
                        this.view.requestUpdate();
                  },
                  p
                ),
                d(
                  () => {
                    var r;
                    return ((r = this.layer) == null ? void 0 : r.opacity) ?? 1;
                  },
                  (r) => {
                    this.container && (this.container.opacity = r);
                  },
                  p
                ),
                d(
                  () =>
                    this.layer && "blendMode" in this.layer
                      ? this.layer.blendMode
                      : "normal",
                  (r) => {
                    this.container && (this.container.blendMode = r);
                  },
                  p
                ),
                d(
                  () =>
                    this.layer && "effect" in this.layer
                      ? this.layer.effect
                      : null,
                  (r) => {
                    this.container && (this.container.effect = r);
                  },
                  p
                ),
                d(
                  () => this.highlightOptions,
                  (r) => (this.container.highlightOptions = r),
                  p
                ),
                j(
                  () => this.clips,
                  "change",
                  () => {
                    this.container && (this.container.clips = this.clips);
                  },
                  p
                ),
                d(
                  () => {
                    var r;
                    return {
                      scale: (r = this.view) == null ? void 0 : r.scale,
                      scaleRange:
                        this.layer && "effectiveScaleRange" in this.layer
                          ? this.layer.effectiveScaleRange
                          : null,
                    };
                  },
                  ({ scale: r }) => {
                    const S = r != null && this.isVisibleAtScale(r);
                    S !== this.visibleAtCurrentScale &&
                      this._set("visibleAtCurrentScale", S);
                  },
                  p
                ),
              ],
              "constructor"
            ),
            (R = this.view) != null && R.whenLayerView
              ? this.view.whenLayerView(this.layer).then(
                  (r) => {
                    r === this && this.processAttach();
                  },
                  () => {}
                )
              : this.when().then(
                  () => {
                    this.processAttach();
                  },
                  () => {}
                ));
      }
      destroy() {
        this.processDetach(), (this.updateRequested = !1);
      }
      get spatialReferenceSupported() {
        var o;
        const s = (o = this.view) == null ? void 0 : o.spatialReference;
        return s == null || this.supportsSpatialReference(s);
      }
      get updating() {
        var s;
        return (
          this.spatialReferenceSupported &&
          (!this.attached ||
            (!this.suspended && (this.updateRequested || this.isUpdating())) ||
            !!((s = this.updatingHandles) != null && s.updating))
        );
      }
      processAttach() {
        this.isResolved() &&
          !this.attached &&
          !this.destroyed &&
          this.spatialReferenceSupported &&
          (this.attach(), (this.attached = !0), this.requestUpdate());
      }
      processDetach() {
        this.attached &&
          ((this.attached = !1),
          this.removeHandles("attach"),
          this.detach(),
          (this.updateRequested = !1));
      }
      isVisibleAtScale(s) {
        const o =
          this.layer && "effectiveScaleRange" in this.layer
            ? this.layer.effectiveScaleRange
            : null;
        if (!o) return !0;
        const { minScale: l, maxScale: u } = o;
        return (l === 0 || s <= l) && (u === 0 || s >= u);
      }
      requestUpdate() {
        this.destroyed ||
          this.updateRequested ||
          ((this.updateRequested = !0),
          this.suspended || this.view.requestUpdate());
      }
      processUpdate(s) {
        !this.isFulfilled() || this.isResolved()
          ? (this._set("updateParameters", s),
            this.updateRequested &&
              !this.suspended &&
              ((this.updateRequested = !1), this.update(s)))
          : (this.updateRequested = !1);
      }
      hitTest(s, o) {
        return Promise.resolve(null);
      }
      supportsSpatialReference(s) {
        return !0;
      }
      canResume() {
        return (
          !!this.spatialReferenceSupported &&
          !!super.canResume() &&
          this.visibleAtCurrentScale
        );
      }
      getSuspendInfo() {
        const s = super.getSuspendInfo(),
          o = !this.spatialReferenceSupported,
          l = this.visibleAtCurrentScale;
        return (
          o && (s.spatialReferenceNotSupported = o),
          l && (s.outsideScaleRange = l),
          s
        );
      }
      addAttachHandles(s) {
        this.addHandles(s, "attach");
      }
    };
    return (
      t([i()], a.prototype, "attached", void 0),
      t(
        [
          i({
            type: m,
            set(s) {
              const o = C(s, this._get("clips"), m);
              this._set("clips", o);
            },
          }),
        ],
        a.prototype,
        "clips",
        void 0
      ),
      t([i()], a.prototype, "container", void 0),
      t([i()], a.prototype, "moving", void 0),
      t([i({ readOnly: !0 })], a.prototype, "spatialReferenceSupported", null),
      t([i({ readOnly: !0 })], a.prototype, "updateParameters", void 0),
      t([i()], a.prototype, "updateRequested", void 0),
      t([i()], a.prototype, "updating", null),
      t([i()], a.prototype, "view", void 0),
      t([i({ readOnly: !0 })], a.prototype, "visibleAtCurrentScale", void 0),
      t([i({ type: U })], a.prototype, "highlightOptions", void 0),
      (a = t([c("esri.views.2d.layers.LayerView2D")], a)),
      a
    );
  };
let n = class extends L(M(H(_.EventedMixin(E)))) {
  constructor(e) {
    super(e), (this.layer = null), (this.parent = null);
  }
  initialize() {
    this.when().catch((e) => {
      if (e.name !== "layerview:create-error") {
        const a = (this.layer && this.layer.id) || "no id",
          s = (this.layer && this.layer.title) || "no title";
        T.getLogger(this.declaredClass).error(
          "#resolve()",
          `Failed to resolve layer view (layer title: '${s}', id: '${a}')`,
          e
        );
      }
    });
  }
  get fullOpacity() {
    return (
      P(this.get("layer.opacity"), 1) * P(this.get("parent.fullOpacity"), 1)
    );
  }
  get suspended() {
    return !this.canResume();
  }
  get suspendInfo() {
    return this.getSuspendInfo();
  }
  get legendEnabled() {
    var e;
    return (
      !this.suspended &&
      ((e = this.layer) == null ? void 0 : e.legendEnabled) === !0
    );
  }
  get updating() {
    var e;
    return !(
      !((e = this.updatingHandles) != null && e.updating) && !this.isUpdating()
    );
  }
  get updatingProgress() {
    return this.updating ? 0 : 1;
  }
  get visible() {
    var e;
    return ((e = this.layer) == null ? void 0 : e.visible) === !0;
  }
  set visible(e) {
    this._overrideIfSome("visible", e);
  }
  canResume() {
    var e, a, s;
    return (
      (this.visible &&
        ((e = this.layer) == null ? void 0 : e.loaded) &&
        !((a = this.parent) != null && a.suspended) &&
        ((s = this.view) == null ? void 0 : s.ready)) ||
      !1
    );
  }
  getSuspendInfo() {
    const e =
      this.parent && this.parent.suspended ? this.parent.suspendInfo : {};
    return (
      (this.view && this.view.ready) || (e.viewNotReady = !0),
      (this.layer && this.layer.loaded) || (e.layerNotLoaded = !0),
      this.visible || (e.layerInvisible = !0),
      e
    );
  }
  isUpdating() {
    return !1;
  }
};
t([i()], n.prototype, "fullOpacity", null),
  t([i()], n.prototype, "layer", void 0),
  t([i()], n.prototype, "parent", void 0),
  t([i({ readOnly: !0 })], n.prototype, "suspended", null),
  t([i({ readOnly: !0 })], n.prototype, "suspendInfo", null),
  t([i({ readOnly: !0 })], n.prototype, "legendEnabled", null),
  t([i({ type: Boolean, readOnly: !0 })], n.prototype, "updating", null),
  t([i({ readOnly: !0 })], n.prototype, "updatingProgress", null),
  t([i()], n.prototype, "visible", null),
  t([i()], n.prototype, "view", void 0),
  (n = t([c("esri.views.layers.LayerView")], n));
const W = n;
export { Q as f, W as u };
