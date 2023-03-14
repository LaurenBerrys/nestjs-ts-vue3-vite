import {
  ae as s,
  ag as R,
  iO as Le,
  t as c,
  ea as oe,
  Q as U,
  af as l,
  R as m,
  iN as ve,
  aH as xe,
  a_ as A,
  s as J,
  r as T,
  q as B,
  b6 as F,
  k0 as Se,
  dl as Q,
  dm as le,
  k1 as G,
  k2 as ue,
  bn as ce,
  bg as j,
  ap as Ce,
  k as K,
  ar as pe,
  ft as Oe,
  m as Te,
  k3 as He,
  i3 as Re,
  U as ne,
  cz as Ve,
  jD as he,
  d2 as we,
  jI as _e,
  jH as Ge,
  jE as Ne,
  jG as We,
  k4 as ke,
  il as Ae,
  eD as Ue,
  P as re,
  dh as Be,
  b3 as ze,
  b0 as Fe,
  G as De,
  f as qe,
  ao as Je,
  _ as Ke,
  ac as $e,
  Y as Qe,
  Z as Ye,
  e9 as Ze,
  im as Xe,
  io as et,
  et as tt,
  ev as ot,
  dT as nt,
  db as rt,
} from "./index.8fd7165c.js";
import { h as E, j as st, u as it } from "./perspectiveUtils.747c556b.js";
import { t as at, e as se } from "./mat3f64.eb921732.js";
import { t as lt } from "./resourceExtension.9b0d7459.js";
import { o as ct } from "./BoundsStore.9c066771.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./normalizeUtilsSync.1ac6b009.js";
import "./PooledRBush.1b7c69fc.js";
let ie = class extends Le {
  projectOrWarn(e, t) {
    if (c(e)) return e;
    const { geometry: o, pending: n } = oe(e, t);
    return n
      ? null
      : n || o
      ? o
      : (U.getLogger(this.declaredClass).warn(
          "geometry could not be projected to the spatial reference",
          {
            georeference: this,
            geometry: e,
            sourceSpatialReference: e.spatialReference,
            targetSpatialReference: t,
          }
        ),
        null);
  }
};
ie = s([R("esri.layers.support.GeoreferenceBase")], ie);
const Y = ie,
  ee = se(),
  u = j();
let D = class extends Ce {
  constructor() {
    super(...arguments), (this.sourcePoint = null), (this.mapPoint = null);
  }
};
s([l()], D.prototype, "sourcePoint", void 0),
  s([l({ type: m })], D.prototype, "mapPoint", void 0),
  (D = s([R("esri.layers.support.ControlPoint")], D));
let v = class extends ve(Y) {
  constructor(e) {
    super(e),
      (this.controlPoints = null),
      (this.height = 0),
      (this.type = "control-points"),
      (this.width = 0);
  }
  readControlPoints(e, t) {
    const o = xe.fromJSON(t.spatialReference),
      n = at(...t.coefficients, 1);
    return e.map(
      (r) => (
        A(u, r.x, r.y),
        E(u, u, n),
        {
          sourcePoint: r,
          mapPoint: new m({ x: u[0], y: u[1], spatialReference: o }),
        }
      )
    );
  }
  writeControlPoints(e, t, o, n) {
    if (c(this.transform)) {
      const r = new J(
        "web-document-write:invalid-georeference",
        "Invalid 'controlPoints', 'width', 'height' configuration.",
        { layer: n == null ? void 0 : n.layer, georeference: this }
      );
      n != null && n.messages
        ? n.messages.push(r)
        : U.getLogger(this.declaredClass).error(r.name, r.message);
    } else
      T(e) &&
        f(e[0]) &&
        ((t.controlPoints = e.map((r) => {
          const i = B(r.sourcePoint);
          return { x: i.x, y: i.y };
        })),
        (t.spatialReference = e[0].mapPoint.spatialReference.toJSON()),
        (t.coefficients = this.transform.slice(0, 8)));
  }
  get coords() {
    if (c(this.controlPoints)) return null;
    const e = this._updateTransform(ee);
    if (c(e) || !f(this.controlPoints[0])) return null;
    const t = this.controlPoints[0].mapPoint.spatialReference;
    return (function (o, n, r, i) {
      const a = K(0, r),
        p = K(0, 0),
        d = K(n, 0),
        h = K(n, r);
      return (
        E(a, a, o),
        E(p, p, o),
        E(d, d, o),
        E(h, h, o),
        new ce({ rings: [[a, p, d, h, a]], spatialReference: i })
      );
    })(e, this.width, this.height, t);
  }
  set coords(e) {
    if (c(this.controlPoints) || !f(this.controlPoints[0])) return;
    const t = this.controlPoints[0].mapPoint.spatialReference;
    if (((e = this.projectOrWarn(e, t)), c(e))) return;
    const { width: o, height: n } = this,
      {
        rings: [[r, i, a, p]],
      } = e,
      d = {
        sourcePoint: F(0, n),
        mapPoint: new m({ x: r[0], y: r[1], spatialReference: t }),
      },
      h = {
        sourcePoint: F(0, 0),
        mapPoint: new m({ x: i[0], y: i[1], spatialReference: t }),
      },
      g = {
        sourcePoint: F(o, 0),
        mapPoint: new m({ x: a[0], y: a[1], spatialReference: t }),
      },
      x = {
        sourcePoint: F(o, n),
        mapPoint: new m({ x: p[0], y: p[1], spatialReference: t }),
      };
    f(d) &&
      f(h) &&
      f(g) &&
      f(x) &&
      (me(ee, d, h, g, x),
      (this.controlPoints = B(this.controlPoints).map(
        ({ sourcePoint: P }) => (
          A(u, P.x, P.y),
          E(u, u, ee),
          {
            sourcePoint: P,
            mapPoint: new m({ x: u[0], y: u[1], spatialReference: t }),
          }
        )
      )));
  }
  get inverseTransform() {
    return c(this.transform) ? null : Se(se(), this.transform);
  }
  get transform() {
    return this._updateTransform();
  }
  toMap(e) {
    if (
      c(e) ||
      c(this.transform) ||
      c(this.controlPoints) ||
      !f(this.controlPoints[0])
    )
      return null;
    A(u, e.x, e.y);
    const t = this.controlPoints[0].mapPoint.spatialReference;
    return (
      E(u, u, this.transform), new m({ x: u[0], y: u[1], spatialReference: t })
    );
  }
  toSource(e) {
    if (
      c(e) ||
      c(this.inverseTransform) ||
      c(this.controlPoints) ||
      !f(this.controlPoints[0])
    )
      return null;
    const t = this.controlPoints[0].mapPoint.spatialReference;
    return (
      (e = e.normalize()),
      (e = oe(e, t).geometry),
      c(e)
        ? null
        : (A(u, e.x, e.y), E(u, u, this.inverseTransform), F(u[0], u[1]))
    );
  }
  _updateTransform(e) {
    const { controlPoints: t, width: o, height: n } = this;
    if (c(t) || !(o > 0) || !(n > 0)) return null;
    const [r, i, a, p] = t;
    if (!f(r)) return null;
    const d = r.mapPoint.spatialReference,
      h = this._projectControlPoint(i, d),
      g = this._projectControlPoint(a, d),
      x = this._projectControlPoint(p, d);
    if (!h.valid || !g.valid || !x.valid || !f(h.controlPoint)) return null;
    c(e) && (e = se());
    let P = null;
    return (
      (P =
        f(g.controlPoint) && f(x.controlPoint)
          ? me(e, r, h.controlPoint, g.controlPoint, x.controlPoint)
          : f(g.controlPoint)
          ? (function (z, Z, X, Ee) {
              return (
                M(w, I, Z),
                M(_, b, X),
                M(H, V, Ee),
                ue(C, w, _, 0.5),
                G(C, H, C, Math.PI),
                ue(O, I, b, 0.5),
                G(O, V, O, Math.PI),
                ae(z, w, _, H, C, I, b, V, O)
              );
            })(e, r, h.controlPoint, g.controlPoint)
          : (function (z, Z, X) {
              return (
                M(w, I, Z),
                M(_, b, X),
                G(H, _, w, $),
                G(C, w, _, $),
                G(V, b, I, -$),
                G(O, I, b, -$),
                ae(z, w, _, H, C, I, b, V, O)
              );
            })(e, r, h.controlPoint)),
      P.every((z) => z === 0) ? null : P
    );
  }
  _projectControlPoint(e, t) {
    if (!f(e)) return { valid: !0, controlPoint: e };
    const { sourcePoint: o, mapPoint: n } = e,
      { geometry: r, pending: i } = oe(n, t);
    return i
      ? { valid: !1, controlPoint: null }
      : i || r
      ? { valid: !0, controlPoint: { sourcePoint: o, mapPoint: r } }
      : (U.getLogger(this.declaredClass).warn(
          "map point could not be projected to the spatial reference",
          {
            georeference: this,
            controlPoint: e,
            sourceSpatialReference: n.spatialReference,
            targetSpatialReference: t,
          }
        ),
        { valid: !1, controlPoint: null });
  }
};
function f(e) {
  return T(e) && T(e.sourcePoint) && T(e.mapPoint);
}
s(
  [l({ type: [D], json: { write: { allowNull: !1, isRequired: !0 } } })],
  v.prototype,
  "controlPoints",
  void 0
),
  s([Q("controlPoints")], v.prototype, "readControlPoints", null),
  s([le("controlPoints")], v.prototype, "writeControlPoints", null),
  s([l()], v.prototype, "coords", null),
  s([l({ json: { write: !0 } })], v.prototype, "height", void 0),
  s([l({ readOnly: !0 })], v.prototype, "inverseTransform", null),
  s([l({ readOnly: !0 })], v.prototype, "transform", null),
  s([l({ json: { write: !0 } })], v.prototype, "width", void 0),
  (v = s([R("esri.layers.support.ControlPointsGeoreference")], v));
const w = j(),
  _ = j(),
  H = j(),
  C = j(),
  I = j(),
  b = j(),
  V = j(),
  O = j(),
  $ = Math.PI / 2;
function M(e, t, o) {
  A(e, o.sourcePoint.x, o.sourcePoint.y), A(t, o.mapPoint.x, o.mapPoint.y);
}
function me(e, t, o, n, r) {
  return (
    M(w, I, t),
    M(_, b, o),
    M(H, V, n),
    M(C, O, r),
    ae(e, w, _, H, C, I, b, V, O)
  );
}
const pt = new Array(8).fill(0),
  dt = new Array(8).fill(0);
function fe(e, t, o, n, r) {
  return (
    (e[0] = t[0]),
    (e[1] = t[1]),
    (e[2] = o[0]),
    (e[3] = o[1]),
    (e[4] = n[0]),
    (e[5] = n[1]),
    (e[6] = r[0]),
    (e[7] = r[1]),
    e
  );
}
function ae(e, t, o, n, r, i, a, p, d) {
  return st(e, fe(pt, t, o, n, r), fe(dt, i, a, p, d));
}
const Ie = v;
let L = class extends Y {
  constructor(e) {
    super(e),
      (this.bottomLeft = null),
      (this.bottomRight = null),
      (this.topLeft = null),
      (this.topRight = null),
      (this.type = "corners");
  }
  get coords() {
    let { topLeft: e, topRight: t, bottomLeft: o, bottomRight: n } = this;
    if (c(e) || c(t) || c(o) || c(n)) return null;
    const r = e.spatialReference;
    return (
      (t = this.projectOrWarn(t, r)),
      (o = this.projectOrWarn(o, r)),
      (n = this.projectOrWarn(n, r)),
      c(t) || c(o) || c(n)
        ? null
        : new ce({
            rings: [
              [
                [o.x, o.y],
                [e.x, e.y],
                [t.x, t.y],
                [n.x, n.y],
                [o.x, o.y],
              ],
            ],
            spatialReference: r,
          })
    );
  }
  set coords(e) {
    const { topLeft: t } = this;
    if (c(t)) return;
    const o = t.spatialReference;
    if (((e = this.projectOrWarn(e, o)), c(e))) return;
    const {
      rings: [[n, r, i, a]],
    } = e;
    (this.bottomLeft = new m({ x: n[0], y: n[1], spatialReference: o })),
      (this.topLeft = new m({ x: r[0], y: r[1], spatialReference: o })),
      (this.topRight = new m({ x: i[0], y: i[1], spatialReference: o })),
      (this.bottomRight = new m({ x: a[0], y: a[1], spatialReference: o }));
  }
};
s([l()], L.prototype, "coords", null),
  s([l({ type: m })], L.prototype, "bottomLeft", void 0),
  s([l({ type: m })], L.prototype, "bottomRight", void 0),
  s([l({ type: m })], L.prototype, "topLeft", void 0),
  s([l({ type: m })], L.prototype, "topRight", void 0),
  (L = s([R("esri.layers.support.CornersGeoreference")], L));
const ut = L;
let N = class extends Y {
  constructor(e) {
    super(e),
      (this.extent = null),
      (this.rotation = 0),
      (this.type = "extent-and-rotation");
  }
  get coords() {
    if (c(this.extent)) return null;
    const {
      xmin: e,
      ymin: t,
      xmax: o,
      ymax: n,
      spatialReference: r,
    } = this.extent;
    let i;
    if (this.rotation) {
      const { x: a, y: p } = this.extent.center,
        d = ye(a, p, this.rotation);
      (i = [d(e, t), d(e, n), d(o, n), d(o, t)]), i.push(i[0]);
    } else
      i = [
        [e, t],
        [e, n],
        [o, n],
        [o, t],
        [e, t],
      ];
    return new ce({ rings: [i], spatialReference: r });
  }
  set coords(e) {
    if (c(e) || c(this.extent)) return;
    const t = this.extent.spatialReference;
    if (((e = this.projectOrWarn(e, t)), c(e) || c(e.extent))) return;
    const {
        rings: [[o, n, r]],
        extent: {
          center: { x: i, y: a },
        },
      } = e,
      p = Oe(Math.PI / 2 - Math.atan2(n[1] - o[1], n[0] - o[0])),
      d = ye(i, a, -p),
      [h, g] = d(o[0], o[1]),
      [x, P] = d(r[0], r[1]);
    (this.extent = new pe({
      xmin: h,
      ymin: g,
      xmax: x,
      ymax: P,
      spatialReference: t,
    })),
      (this.rotation = p);
  }
};
function ye(e, t, o) {
  const n = Te(o),
    r = Math.cos(n),
    i = Math.sin(n);
  return (a, p) => [
    r * (a - e) + i * (p - t) + e,
    r * (p - t) - i * (a - e) + t,
  ];
}
s([l()], N.prototype, "coords", null),
  s([l({ type: pe })], N.prototype, "extent", void 0),
  s([l({ type: Number })], N.prototype, "rotation", void 0),
  (N = s([R("esri.layers.support.ExtentAndRotationGeoreference")], N));
const ht = {
  key: "type",
  base: Y,
  typeMap: { "control-points": Ie, corners: ut, "extent-and-rotation": N },
};
let W = class extends He(ve(Re)) {
  constructor() {
    super(...arguments), (this.georeference = null), (this.opacity = 1);
  }
  readGeoreference(e) {
    return Ie.fromJSON(e);
  }
};
s([l({ types: ht, json: { write: !0 } })], W.prototype, "georeference", void 0),
  s([Q("georeference")], W.prototype, "readGeoreference", null),
  s([l()], W.prototype, "opacity", void 0),
  (W = s([R("esri.layers.support.MediaElementBase")], W));
const de = W;
let S = class extends de {
  constructor(e) {
    super(e),
      (this.content = null),
      (this.image = null),
      (this.type = "image"),
      (this.image = null);
  }
  load() {
    const e = this.image;
    if (typeof e == "string") {
      const t = ne(e, { responseType: "image" }).then(({ data: o }) => {
        this._set("content", o);
      });
      this.addResolvingPromise(t);
    } else if (e instanceof HTMLImageElement) {
      const t = e.decode().then(() => {
        this._set("content", e);
      });
      this.addResolvingPromise(t);
    } else
      e
        ? this._set("content", e)
        : this.addResolvingPromise(
            Promise.reject(
              new J("image-element:invalid-image-type", "Invalid image type", {
                image: e,
              })
            )
          );
    return Promise.resolve(this);
  }
  readImage(e, t, o) {
    return Ve(t.url, o);
  }
  writeImage(e, t, o, n) {
    if (c(e)) return;
    const r = n == null ? void 0 : n.portalItem,
      i = n == null ? void 0 : n.resources;
    if (!r || !i) return void (typeof e == "string" && (t[o] = he(e, n)));
    const a = typeof e != "string" || we(e) || _e(e) ? null : e;
    if (a) {
      if (Ge(a) == null) return void (t[o] = a);
      const p = he(
        a,
        {
          ...n,
          verifyItemRelativeUrls:
            n && n.verifyItemRelativeUrls
              ? {
                  writtenUrls: n.verifyItemRelativeUrls.writtenUrls,
                  rootPath: void 0,
                }
              : void 0,
        },
        Ne.NO
      );
      if (r && p && !We(p))
        return (
          i.toKeep.push({ resource: r.resourceFromPath(p), compress: !1 }),
          void (t[o] = p)
        );
    }
    (t[o] = "<pending>"),
      i.pendingOperations.push(
        Me(e).then((p) => {
          const d = (function (h, g) {
            const x = Ae(),
              P = `${Ue("media", x)}.${lt(h)}`;
            return g.resourceFromPath(P);
          })(p, r);
          (t[o] = d.itemRelativeUrl),
            i.toAdd.push({
              resource: d,
              content: p,
              compress: !1,
              finish: (h) => {
                this.image = h.url;
              },
            });
        })
      );
  }
};
s([l({ readOnly: !0 })], S.prototype, "content", void 0),
  s([l({ json: { name: "url", type: String } })], S.prototype, "image", void 0),
  s([Q("image", ["url"])], S.prototype, "readImage", null),
  s([le("image")], S.prototype, "writeImage", null),
  s(
    [l({ readOnly: !0, json: { name: "mediaType" } })],
    S.prototype,
    "type",
    void 0
  ),
  (S = s([R("esri.layers.support.ImageElement")], S));
const be = S;
async function Me(e) {
  if (typeof e == "string") {
    if (_e(e)) {
      const { data: t } = await ne(e, { responseType: "blob" });
      return t;
    }
    return we(e) ? ke(e) : Me((await ne(e, { responseType: "image" })).data);
  }
  return new Promise((t) =>
    (function (o) {
      if (o instanceof HTMLCanvasElement) return o;
      const n = o instanceof HTMLImageElement ? o.naturalWidth : o.width,
        r = o instanceof HTMLImageElement ? o.naturalHeight : o.height,
        i = document.createElement("canvas"),
        a = i.getContext("2d");
      return (
        (i.width = n),
        (i.height = r),
        o instanceof HTMLImageElement
          ? a.drawImage(o, 0, 0, o.width, o.height)
          : o instanceof ImageData && a.putImageData(o, 0, 0),
        i
      );
    })(e).toBlob(t)
  );
}
let q = class extends de {
  constructor(e) {
    super(e), (this.content = null), (this.type = "video");
  }
  load() {
    const e = this.video;
    if (typeof e == "string") {
      const t = document.createElement("video");
      (t.src = e),
        (t.crossOrigin = "anonymous"),
        (t.autoplay = !0),
        (t.muted = !0),
        (t.loop = !0),
        this.addResolvingPromise(
          this._loadVideo(t).then(() => {
            this._set("content", t);
          })
        );
    } else
      e instanceof HTMLVideoElement
        ? this.addResolvingPromise(
            this._loadVideo(e).then(() => {
              this._set("content", e);
            })
          )
        : this.addResolvingPromise(
            Promise.reject(
              new J("video-element:invalid-video-type", "Invalid video type", {
                video: e,
              })
            )
          );
    return Promise.resolve(this);
  }
  set video(e) {
    this.loadStatus === "not-loaded"
      ? this._set("video", e)
      : U.getLogger(this.declaredClass).error(
          "#video",
          "video cannot be changed after the element is loaded."
        );
  }
  _loadVideo(e) {
    return new Promise((t, o) => {
      (e.oncanplay = () => {
        (e.oncanplay = null), e.play().then(t, o);
      }),
        e.crossOrigin !== "anonymous" &&
          ((e.crossOrigin = "anonymous"), (e.src = e.src));
    });
  }
};
s([l({ readOnly: !0 })], q.prototype, "content", void 0),
  s([l()], q.prototype, "video", null),
  (q = s([R("esri.layers.support.VideoElement")], q));
const je = q,
  mt = {
    key: "type",
    defaultKeyValue: "image",
    base: de,
    typeMap: { image: be, video: je },
  },
  ge = re.ofType(mt);
let k = class extends Re.LoadableMixin(Be(ze(Fe.EventedAccessor))) {
  constructor(e) {
    super(e),
      (this._index = new ct()),
      (this._elementViewsMap = new Map()),
      (this._elementsIndexes = new Map()),
      (this._elementsChangedHandler = (t) => {
        for (const n of t.removed) {
          const r = this._elementViewsMap.get(n);
          this._elementViewsMap.delete(n),
            this._index.delete(r),
            this.handles.remove(r),
            r.destroy(),
            this.notifyChange("fullExtent");
        }
        const { spatialReference: o } = this;
        for (const n of t.added) {
          if (this._elementViewsMap.get(n)) continue;
          const r = new it({ spatialReference: o, element: n });
          this._elementViewsMap.set(n, r);
          const i = De(
            () => r.coords,
            () => this._updateIndexForElement(r, !1)
          );
          this._updateIndexForElement(r, !0), this.handles.add(i, r);
        }
        this._elementsIndexes.clear(),
          this.elements.forEach((n, r) => this._elementsIndexes.set(n, r)),
          this.emit("refresh");
      }),
      (this.elements = new ge());
  }
  async load(e) {
    if ((qe(e), !this.spatialReference)) {
      const t = this.elements.find(
        (o) => T(o.georeference) && T(o.georeference.coords)
      );
      this._set(
        "spatialReference",
        t ? B(B(t.georeference).coords).spatialReference : xe.WGS84
      );
    }
    return (
      this._elementsChangedHandler({ added: this.elements.items, removed: [] }),
      this.handles.add(
        this.elements.on("change", this._elementsChangedHandler)
      ),
      this
    );
  }
  destroy() {
    this._index.clear(),
      this._elementViewsMap.clear(),
      this._elementsIndexes.clear();
  }
  set elements(e) {
    this._set("elements", Je(e, this._get("elements"), ge));
  }
  get fullExtent() {
    if (this.loadStatus === "not-loaded") return null;
    const e = this._index.fullBounds;
    return c(e)
      ? null
      : new pe({
          xmin: e[0],
          ymin: e[1],
          xmax: e[2],
          ymax: e[3],
          spatialReference: this.spatialReference,
        });
  }
  set spatialReference(e) {
    this.loadStatus === "not-loaded"
      ? this._set("spatialReference", e)
      : U.getLogger(this.declaredClass).error(
          "#spatialReference",
          "spatialReference cannot be changed after the source is loaded."
        );
  }
  async queryElements(e, t) {
    await this.load(),
      await Ke(e.spatialReference, this.spatialReference, null, t);
    const o = $e(e.spatialReference, this.spatialReference)
      ? e
      : Qe(e, this.spatialReference);
    if (!o) return [];
    const n = o.normalize(),
      r = [];
    for (const i of n)
      this._index.forEachInBounds(
        Ye(i),
        ({ normalizedCoords: a, element: p }) => {
          T(a) && Ze(i, a) && r.push(p);
        }
      );
    return (
      r.sort(
        (i, a) => this._elementsIndexes.get(i) - this._elementsIndexes.get(a)
      ),
      r
    );
  }
  _updateIndexForElement(e, t) {
    const o = e.normalizedBounds,
      n = this._index.has(e),
      r = T(o);
    this._index.delete(e),
      r && this._index.set(e, o),
      this.notifyChange("fullExtent"),
      t ||
        (n !== r
          ? this.emit("refresh")
          : this.emit("change", { element: e.element }));
  }
};
s([l()], k.prototype, "elements", null),
  s([l({ readOnly: !0 })], k.prototype, "fullExtent", null),
  s([l()], k.prototype, "spatialReference", null),
  (k = s([R("esri.layers.support.LocalMediaElementSource")], k));
const te = k;
function Pe(e) {
  return typeof e == "object" && e != null && "type" in e;
}
let y = class extends Xe(et(tt(ot(rt)))) {
  constructor(e) {
    super(e),
      (this.effectiveSource = null),
      (this.copyright = null),
      (this.operationalLayerType = "MediaLayer"),
      (this.spatialReference = null),
      (this.type = "media"),
      (this.source = new te());
  }
  load(e) {
    const t = this.source;
    if (!t)
      return (
        this.addResolvingPromise(
          Promise.reject(
            new J(
              "media-layer:source-missing",
              "Set 'MediaLayer.source' before loading the layer."
            )
          )
        ),
        Promise.resolve(this)
      );
    const o = Pe(t) ? new te({ elements: new re([t]) }) : t;
    this._set("effectiveSource", o),
      this.spatialReference && (o.spatialReference = this.spatialReference);
    const n = o.load(e).then(() => {
      this.spatialReference = o.spatialReference;
    });
    return this.addResolvingPromise(n), Promise.resolve(this);
  }
  destroy() {
    var e, t;
    (e = B(this.effectiveSource)) == null || e.destroy(),
      (t = B(this.source)) == null || t.destroy();
  }
  get fullExtent() {
    return this.loaded ? this.effectiveSource.fullExtent : null;
  }
  set source(e) {
    this.loadStatus === "not-loaded"
      ? this._set("source", e)
      : U.getLogger(this.declaredClass).error(
          "#source",
          "source cannot be changed after the layer is loaded."
        );
  }
  castSource(e) {
    return e
      ? Array.isArray(e) || e instanceof re
        ? new te({ elements: e })
        : e
      : null;
  }
  readSource(e, t, o) {
    const n =
      t.mediaType === "image"
        ? new be()
        : t.mediaType === "video"
        ? new je()
        : null;
    return n == null || n.read(t, o), n;
  }
  writeSource(e, t, o, n) {
    var r;
    e && Pe(e) && e.type === "image"
      ? e.write(t, n)
      : n != null &&
        n.messages &&
        ((r = n == null ? void 0 : n.messages) == null ||
          r.push(
            new J(
              "media-layer:unsupported-source",
              "source must be an 'ImageElement'"
            )
          ));
  }
};
s([l({ readOnly: !0 })], y.prototype, "effectiveSource", void 0),
  s([l({ type: String })], y.prototype, "copyright", void 0),
  s([l({ readOnly: !0 })], y.prototype, "fullExtent", null),
  s([l({ type: ["MediaLayer"] })], y.prototype, "operationalLayerType", void 0),
  s([l({ type: ["show", "hide"] })], y.prototype, "listMode", void 0),
  s(
    [l({ nonNullable: !0, json: { write: { enabled: !0, allowNull: !1 } } })],
    y.prototype,
    "source",
    null
  ),
  s([nt("source")], y.prototype, "castSource", null),
  s([Q("source", ["url"])], y.prototype, "readSource", null),
  s([le("source")], y.prototype, "writeSource", null),
  s([l()], y.prototype, "spatialReference", void 0),
  s([l({ readOnly: !0 })], y.prototype, "type", void 0),
  (y = s([R("esri.layers.MediaLayer")], y));
const Lt = y;
export { Lt as default };
