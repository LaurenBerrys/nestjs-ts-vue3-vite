import {
  ae as p,
  af as v,
  ag as I,
  ap as q,
  w as D,
  Q as W,
  bO as C,
  bP as E,
  bQ as P,
  bR as H,
  b0 as S,
  t as V,
  D as w,
  e as G,
} from "./index.8fd7165c.js";
import { J as A } from "./definitions.ce677f69.js";
import { M as F, P as L, G as U, D as N, L as j } from "./enums.64ab819c.js";
import { E as B } from "./Texture.fb0c670a.js";
const R = -1;
let u = class extends q {
  constructor(i) {
    super(i),
      (this._from = null),
      (this._to = null),
      (this._final = null),
      (this._current = []),
      (this._time = 0),
      (this.duration = D("mapview-transitions-duration")),
      (this.effects = []);
  }
  set effect(i) {
    if (this._get("effect") !== (i = i || "")) {
      this._set("effect", i);
      try {
        this._transitionTo(x(i));
      } catch (t) {
        this._transitionTo([]),
          W.getLogger(this.declaredClass).warn("Invalid Effect", {
            effect: i,
            error: t,
          });
      }
    }
  }
  get hasEffects() {
    return this.transitioning || !!this.effects.length;
  }
  set scale(i) {
    this._updateForScale(i);
  }
  get transitioning() {
    return this._to !== null;
  }
  canTransitionTo(i) {
    try {
      return this.scale > 0 && M(this._current, x(i), this.scale);
    } catch {
      return !1;
    }
  }
  transitionStep(i, t) {
    this._applyTimeTransition(i), this._updateForScale(t);
  }
  endTransitions() {
    this._applyTimeTransition(this.duration);
  }
  _transitionTo(i) {
    this.scale > 0 && M(this._current, i, this.scale)
      ? ((this._final = i),
        (this._to = C(i)),
        (function (t, e, n) {
          const l = t.length > e.length ? t : e,
            o = t.length > e.length ? e : t,
            h = o[o.length - 1],
            d = (h == null ? void 0 : h.scale) ?? n,
            f = (h == null ? void 0 : h.effects) ?? [];
          for (let a = o.length; a < l.length; a++)
            o.push({ scale: d, effects: [...f] });
          for (let a = 0; a < l.length; a++)
            (o[a].scale = o[a].scale === R ? n : o[a].scale),
              (l[a].scale = l[a].scale === R ? n : l[a].scale),
              H(o[a].effects, l[a].effects);
        })(this._current, this._to, this.scale),
        (this._from = C(this._current)),
        (this._time = 0))
      : ((this._from = this._to = this._final = null), (this._current = i)),
      this._set("effects", this._current[0] ? C(this._current[0].effects) : []);
  }
  _applyTimeTransition(i) {
    if (!(this._to && this._from && this._current && this._final)) return;
    this._time += i;
    const t = Math.min(1, this._time / this.duration);
    for (let e = 0; e < this._current.length; e++) {
      const n = this._current[e],
        l = this._from[e],
        o = this._to[e];
      n.scale = Q(l.scale, o.scale, t);
      for (let h = 0; h < n.effects.length; h++) {
        const d = n.effects[h],
          f = l.effects[h],
          a = o.effects[h];
        d.interpolate(f, a, t);
      }
    }
    t === 1 &&
      ((this._current = this._final),
      this._set("effects", this._current[0] ? C(this._current[0].effects) : []),
      (this._from = this._to = this._final = null));
  }
  _updateForScale(i) {
    if ((this._set("scale", i), this._current.length === 0)) return;
    const t = this._current,
      e = this._current.length - 1;
    let n,
      l,
      o = 1;
    if (t.length === 1 || i >= t[0].scale) l = n = t[0].effects;
    else if (i <= t[e].scale) l = n = t[e].effects;
    else
      for (let h = 0; h < e; h++) {
        const d = t[h],
          f = t[h + 1];
        if (d.scale >= i && f.scale <= i) {
          (o = (i - d.scale) / (f.scale - d.scale)),
            (n = d.effects),
            (l = f.effects);
          break;
        }
      }
    for (let h = 0; h < this.effects.length; h++)
      this.effects[h].interpolate(n[h], l[h], o);
  }
};
function x(i) {
  const t = E(i) || [];
  return (function (e) {
    const n = e[0];
    return !!n && "type" in n;
  })(t)
    ? [{ scale: R, effects: t }]
    : t;
}
function M(i, t, e) {
  var n, l, o, h;
  return (
    !((n = i[0]) != null && n.effects) ||
    !((l = t[0]) != null && l.effects) ||
    (!(
      (((o = i[0]) == null ? void 0 : o.scale) === R ||
        ((h = t[0]) == null ? void 0 : h.scale) === R) &&
      (i.length > 1 || t.length > 1) &&
      e <= 0
    ) &&
      P(i[0].effects, t[0].effects))
  );
}
function Q(i, t, e) {
  return i + (t - i) * e;
}
p([v()], u.prototype, "_to", void 0),
  p([v()], u.prototype, "duration", void 0),
  p([v({ value: "" })], u.prototype, "effect", null),
  p([v({ readOnly: !0 })], u.prototype, "effects", void 0),
  p([v({ readOnly: !0 })], u.prototype, "hasEffects", null),
  p([v({ value: 0 })], u.prototype, "scale", null),
  p([v({ readOnly: !0 })], u.prototype, "transitioning", null),
  (u = p([I("esri.layers.effects.EffectView")], u));
const k = 1 / D("mapview-transitions-duration");
let J = class extends S {
  constructor() {
    super(...arguments),
      (this._fadeOutResolver = null),
      (this._fadeInResolver = null),
      (this._clips = null),
      (this.computedVisible = !0),
      (this.computedOpacity = 1),
      (this.fadeTransitionEnabled = !1),
      (this.inFadeTransition = !1),
      (this._isReady = !1),
      (this._opacity = 1),
      (this.parent = null),
      (this._stage = null),
      (this._visible = !0);
  }
  get clips() {
    return this._clips;
  }
  set clips(i) {
    (this._clips = i), this.requestRender();
  }
  get isReady() {
    return this._isReady;
  }
  get opacity() {
    return this._opacity;
  }
  set opacity(i) {
    this._opacity !== i &&
      ((this._opacity = Math.min(1, Math.max(i, 0))), this.requestRender());
  }
  get stage() {
    return this._stage;
  }
  set stage(i) {
    var e;
    if (this._stage === i) return;
    const t = this._stage;
    (this._stage = i),
      i
        ? ((e = this._stage) != null && e.untrashDisplayObject(this)) ||
          (this.onAttach(), this.emit("attach"))
        : t == null || t.trashDisplayObject(this);
  }
  get transforms() {
    return this._getTransforms();
  }
  _getTransforms() {
    return (
      V(this._transforms) && (this._transforms = this._createTransforms()),
      this._transforms
    );
  }
  get visible() {
    return this._visible;
  }
  set visible(i) {
    this._visible !== i && ((this._visible = i), this.requestRender());
  }
  fadeIn() {
    return (
      this._fadeInResolver ||
        (this._fadeOutResolver &&
          (this._fadeOutResolver(), (this._fadeOutResolver = null)),
        (this.opacity = 1),
        (this.computedOpacity = 0),
        (this.fadeTransitionEnabled = !0),
        (this._fadeInResolver = w()),
        this.requestRender()),
      this._fadeInResolver.promise
    );
  }
  fadeOut() {
    return (
      this._fadeOutResolver ||
        ((this.opacity = 0),
        this._fadeInResolver &&
          (this._fadeInResolver(), (this._fadeInResolver = null)),
        (this.fadeTransitionEnabled = !0),
        (this._fadeOutResolver = w()),
        this.requestRender()),
      this._fadeOutResolver.promise
    );
  }
  endTransitions() {
    var i, t;
    (i = this._fadeInResolver) == null || i.call(this),
      (this._fadeInResolver = null),
      (t = this._fadeOutResolver) == null || t.call(this),
      (this._fadeOutResolver = null),
      (this.computedOpacity = this.visible ? this.opacity : 0),
      this.requestRender();
  }
  beforeRender(i) {
    this.updateTransitionProperties(i.deltaTime, i.state.scale);
  }
  afterRender(i) {
    this._fadeInResolver && this.computedOpacity === this.opacity
      ? (this._fadeInResolver(), (this._fadeInResolver = null))
      : this._fadeOutResolver &&
        this.computedOpacity === 0 &&
        (this._fadeOutResolver(), (this._fadeOutResolver = null));
  }
  remove() {
    var i;
    (i = this.parent) == null || i.removeChild(this);
  }
  setTransform(i) {}
  processRender(i) {
    this.stage && this.computedVisible && this.doRender(i);
  }
  requestRender() {
    this.stage && this.stage.requestRender();
  }
  processDetach() {
    this._fadeInResolver &&
      (this._fadeInResolver(), (this._fadeInResolver = null)),
      this._fadeOutResolver &&
        (this._fadeOutResolver(), (this._fadeOutResolver = null)),
      this.onDetach(),
      this.emit("detach");
  }
  updateTransitionProperties(i, t) {
    if (this.fadeTransitionEnabled) {
      const e = this._fadeOutResolver || !this.visible ? 0 : this.opacity,
        n = this.computedOpacity;
      if (n === e) this.computedVisible = this.visible;
      else {
        const l = i * k;
        (this.computedOpacity =
          n > e ? Math.max(e, n - l) : Math.min(e, n + l)),
          (this.computedVisible = this.computedOpacity > 0);
        const o = e === this.computedOpacity;
        (this.inFadeTransition = !o), o || this.requestRender();
      }
    } else
      (this.computedOpacity = this.opacity),
        (this.computedVisible = this.visible);
  }
  onAttach() {}
  onDetach() {}
  doRender(i) {}
  ready() {
    this._isReady ||
      ((this._isReady = !0), this.emit("isReady"), this.requestRender());
  }
};
const tt = 1,
  et = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  it = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  O = 256,
  g = {
    outlineWidth: 1.3,
    outerHaloWidth: 0.4,
    innerHaloWidth: 0.4,
    outlinePosition: 0,
  },
  T = W.getLogger(
    "esri.views.2d.engine.webgl.painter.highlight.HighlightGradient"
  ),
  X = [0, 0, 0, 0];
class Y {
  constructor() {
    (this._convertedHighlightOptions = {
      fillColor: [0.2 * 0.75, 0.6 * 0.75, 0.675, 0.75],
      outlineColor: [0.2 * 0.9, 0.54, 0.81, 0.9],
      outlinePosition: g.outlinePosition,
      outlineWidth: g.outlineWidth,
      innerHaloWidth: g.innerHaloWidth,
      outerHaloWidth: g.outerHaloWidth,
    }),
      (this._shadeTexChanged = !0),
      (this._texelData = new Uint8Array(4 * O)),
      (this._minMaxDistance = [0, 0]);
  }
  setHighlightOptions(t) {
    const e = this._convertedHighlightOptions;
    (function (r, s) {
      (s.fillColor[0] = r.color.r / 255),
        (s.fillColor[1] = r.color.g / 255),
        (s.fillColor[2] = r.color.b / 255),
        (s.fillColor[3] = r.color.a),
        r.haloColor
          ? ((s.outlineColor[0] = r.haloColor.r / 255),
            (s.outlineColor[1] = r.haloColor.g / 255),
            (s.outlineColor[2] = r.haloColor.b / 255),
            (s.outlineColor[3] = r.haloColor.a))
          : ((s.outlineColor[0] = s.fillColor[0]),
            (s.outlineColor[1] = s.fillColor[1]),
            (s.outlineColor[2] = s.fillColor[2]),
            (s.outlineColor[3] = s.fillColor[3])),
        (s.fillColor[3] *= r.fillOpacity),
        (s.outlineColor[3] *= r.haloOpacity),
        (s.fillColor[0] *= s.fillColor[3]),
        (s.fillColor[1] *= s.fillColor[3]),
        (s.fillColor[2] *= s.fillColor[3]),
        (s.outlineColor[0] *= s.outlineColor[3]),
        (s.outlineColor[1] *= s.outlineColor[3]),
        (s.outlineColor[2] *= s.outlineColor[3]),
        (s.outlineWidth = g.outlineWidth),
        (s.outerHaloWidth = g.outerHaloWidth),
        (s.innerHaloWidth = g.innerHaloWidth),
        (s.outlinePosition = g.outlinePosition);
    })(t, e);
    const n = e.outlinePosition - e.outlineWidth / 2 - e.outerHaloWidth,
      l = e.outlinePosition - e.outlineWidth / 2,
      o = e.outlinePosition + e.outlineWidth / 2,
      h = e.outlinePosition + e.outlineWidth / 2 + e.innerHaloWidth,
      d = 1 * Math.sqrt(Math.PI / 2),
      f = Math.abs(n) > d ? Math.round(10 * (Math.abs(n) - d)) / 10 : 0,
      a = Math.abs(h) > d ? Math.round(10 * (Math.abs(h) - d)) / 10 : 0;
    let m;
    f && !a
      ? T.error(
          "The outer rim of the highlight is " +
            f +
            "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."
        )
      : !f && a
      ? T.error(
          "The inner rim of the highlight is " +
            a +
            "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."
        )
      : f &&
        a &&
        T.error(
          "The highlight is " +
            Math.max(f, a) +
            "px away from the edge of the feature; consider reducing some width values."
        );
    const c = [void 0, void 0, void 0, void 0];
    function b(r, s, _) {
      (c[0] = (1 - _) * r[0] + _ * s[0]),
        (c[1] = (1 - _) * r[1] + _ * s[1]),
        (c[2] = (1 - _) * r[2] + _ * s[2]),
        (c[3] = (1 - _) * r[3] + _ * s[3]);
    }
    const { _texelData: y } = this;
    for (let r = 0; r < O; ++r)
      (m = n + (r / 255) * (h - n)),
        m < n
          ? ((c[4 * r + 0] = 0),
            (c[4 * r + 1] = 0),
            (c[4 * r + 2] = 0),
            (c[4 * r + 3] = 0))
          : m < l
          ? b(X, e.outlineColor, (m - n) / (l - n))
          : m < o
          ? ([c[0], c[1], c[2], c[3]] = e.outlineColor)
          : m < h
          ? b(e.outlineColor, e.fillColor, (m - o) / (h - o))
          : ([c[4 * r + 0], c[4 * r + 1], c[4 * r + 2], c[4 * r + 3]] =
              e.fillColor),
        (y[4 * r + 0] = 255 * c[0]),
        (y[4 * r + 1] = 255 * c[1]),
        (y[4 * r + 2] = 255 * c[2]),
        (y[4 * r + 3] = 255 * c[3]);
    (this._minMaxDistance[0] = n),
      (this._minMaxDistance[1] = h),
      (this._shadeTexChanged = !0);
  }
  applyHighlightOptions(t, e) {
    this._shadeTex ||
      (this._shadeTex = new B(t, {
        target: F.TEXTURE_2D,
        pixelFormat: L.RGBA,
        dataType: U.UNSIGNED_BYTE,
        wrapMode: N.CLAMP_TO_EDGE,
        width: O,
        height: 1,
        samplingMode: j.LINEAR,
      })),
      this._shadeTexChanged &&
        (this._shadeTex.updateData(0, 0, 0, O, 1, this._texelData),
        (this._shadeTexChanged = !1)),
      t.bindTexture(this._shadeTex, A),
      e.setUniform2fv("u_minMaxDistance", this._minMaxDistance);
  }
  destroy() {
    var t;
    (t = this._shadeTex) == null || t.dispose(), (this._shadeTex = null);
  }
}
class st extends J {
  constructor() {
    super(...arguments),
      (this._childrenSet = new Set()),
      (this._needsSort = !1),
      (this.children = []),
      (this._effectView = null),
      (this._highlightOptions = null),
      (this._highlightGradient = null);
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(t) {
    (this._blendMode = t), this.requestRender();
  }
  get clips() {
    return this._clips;
  }
  set clips(t) {
    (this._clips = t), this.children.forEach((e) => (e.clips = t));
  }
  get computedEffects() {
    var t;
    return ((t = this._effectView) == null ? void 0 : t.effects) ?? null;
  }
  get effect() {
    var t;
    return ((t = this._effectView) == null ? void 0 : t.effect) ?? "";
  }
  set effect(t) {
    (this._effectView || t) &&
      (this._effectView || (this._effectView = new u()),
      (this._effectView.effect = t),
      this.requestRender());
  }
  get highlightOptions() {
    return this._highlightOptions;
  }
  set highlightOptions(t) {
    if (!t)
      return (
        (this._highlightOptions = null),
        void (
          this._highlightGradient &&
          (this._highlightGradient.destroy(),
          (this._highlightGradient = null),
          this.requestRender())
        )
      );
    (this._highlightOptions && this._highlightOptions.equals(t)) ||
      ((this._highlightOptions = t),
      this._highlightGradient || (this._highlightGradient = new Y()),
      this._highlightGradient.setHighlightOptions(t),
      this.requestRender());
  }
  updateTransitionProperties(t, e) {
    super.updateTransitionProperties(t, e),
      this._effectView &&
        (this._effectView.transitionStep(t, e),
        this._effectView.transitioning && this.requestRender());
  }
  doRender(t) {
    const e = this.createRenderParams(t);
    this.renderChildren(e);
  }
  addChild(t) {
    return this.addChildAt(t, this.children.length);
  }
  addChildAt(t, e = this.children.length) {
    if (!t || this.contains(t)) return t;
    this._needsSort = !0;
    const n = t.parent;
    return (
      n && n !== this && n.removeChild(t),
      e >= this.children.length
        ? this.children.push(t)
        : this.children.splice(e, 0, t),
      this._childrenSet.add(t),
      (t.parent = this),
      (t.stage = this.stage),
      this !== this.stage && (t.clips = this.clips),
      this.requestRender(),
      t
    );
  }
  contains(t) {
    return this._childrenSet.has(t);
  }
  endTransitions() {
    super.endTransitions(),
      this._effectView &&
        (this._effectView.endTransitions(), this.requestRender());
  }
  removeAllChildren() {
    this._childrenSet.clear(), (this._needsSort = !0);
    for (const t of this.children)
      this !== this.stage && (t.clips = null),
        (t.stage = null),
        (t.parent = null);
    this.children.length = 0;
  }
  removeChild(t) {
    return this.contains(t) ? this.removeChildAt(this.children.indexOf(t)) : t;
  }
  removeChildAt(t) {
    if (t < 0 || t >= this.children.length) return null;
    this._needsSort = !0;
    const e = this.children.splice(t, 1)[0];
    return (
      this._childrenSet.delete(e),
      this !== this.stage && (e.clips = null),
      (e.stage = null),
      (e.parent = null),
      e
    );
  }
  sortChildren(t) {
    this._needsSort && (this.children.sort(t), (this._needsSort = !1));
  }
  beforeRender(t) {
    super.beforeRender(t);
    for (const e of this.children) e.beforeRender(t);
  }
  afterRender(t) {
    super.afterRender(t);
    for (const e of this.children) e.afterRender(t);
  }
  _createTransforms() {
    return { dvs: G() };
  }
  onAttach() {
    super.onAttach();
    const t = this.stage;
    for (const e of this.children) e.stage = t;
  }
  onDetach() {
    super.onDetach();
    for (const t of this.children) t.stage = null;
  }
  renderChildren(t) {
    for (const e of this.children) e.processRender(t);
  }
  createRenderParams(t) {
    return {
      ...t,
      blendMode: this.blendMode,
      effects: this.computedEffects,
      globalOpacity: t.globalOpacity * this.computedOpacity,
      inFadeTransition: this.inFadeTransition,
      highlightGradient: this._highlightGradient || t.highlightGradient,
    };
  }
}
export { u as a, st as h, it as i, tt as o, J as r, et as t };
