import {
  ae as d,
  af as x,
  iM as vt,
  dm as bt,
  dl as At,
  ag as Q,
  dd as we,
  jD as Be,
  dk as Ce,
  cc as ct,
  r as m,
  Q as C,
  dT as H,
  bO as P,
  fs as Tt,
  hW as Mt,
  ls as U,
  b as L,
  a1 as Fe,
  R as j,
  hM as Rt,
  lt as Ct,
  gB as Ft,
  cE as Lt,
  f as Dt,
  t as fe,
  s as Le,
  fp as Pe,
  fx as ut,
  fE as pt,
  eb as ge,
  fo as It,
  c as ht,
  fn as me,
  h3 as Ot,
  fw as _t,
  lj as ft,
  b8 as gt,
  b3 as Et,
  i3 as Pt,
  dh as jt,
  de as St,
  G as Nt,
  ar as De,
  bn as zt,
  aM as be,
  ah as Wt,
  aH as $t,
  al as Ut,
} from "./index.8fd7165c.js";
import { q as ce } from "./Table.e9c997d5.js";
import {
  r as ve,
  b as kt,
  x as Ht,
  M as je,
  j as Se,
  a as Ne,
  R as ze,
  h as We,
  L as $e,
  _ as Vt,
  c as se,
  v as Ie,
  g as Oe,
  d as Bt,
  e as ue,
  f as de,
} from "./georeference.db8759a2.js";
import { r as Gt } from "./imageUtils.c2d0d1ae.js";
import { r as Zt } from "./earcut.9f54f087.js";
import { r as Ge } from "./deduplicate.744c1fe7.js";
import { e as Ue } from "./mat3f64.eb921732.js";
import { e as mt } from "./mat4f64.b473928c.js";
import { c as ke } from "./spatialReferenceEllipsoidUtils.0049fd16.js";
var Z;
const Ae = new WeakMap();
let Jt = 0,
  S = (Z = class extends we {
    constructor(e) {
      super(e), (this.wrap = "repeat");
    }
    get url() {
      return this._get("url") || null;
    }
    set url(e) {
      this._set("url", e), e && this._set("data", null);
    }
    get data() {
      return this._get("data") || null;
    }
    set data(e) {
      this._set("data", e), e && this._set("url", null);
    }
    writeData(e, t, n, o) {
      if (e instanceof HTMLImageElement) {
        const s = {
          type: "image-element",
          src: Be(e.src, o),
          crossOrigin: e.crossOrigin,
        };
        t[n] = s;
      } else if (e instanceof HTMLCanvasElement) {
        const s = e.getContext("2d").getImageData(0, 0, e.width, e.height),
          r = { type: "canvas-element", imageData: this._encodeImageData(s) };
        t[n] = r;
      } else if (e instanceof HTMLVideoElement) {
        const s = {
          type: "video-element",
          src: Be(e.src, o),
          autoplay: e.autoplay,
          loop: e.loop,
          muted: e.muted,
          crossOrigin: e.crossOrigin,
          preload: e.preload,
        };
        t[n] = s;
      } else if (e instanceof ImageData) {
        const s = { type: "image-data", imageData: this._encodeImageData(e) };
        t[n] = s;
      }
    }
    readData(e) {
      switch (e.type) {
        case "image-element": {
          const t = new Image();
          return (t.src = e.src), (t.crossOrigin = e.crossOrigin), t;
        }
        case "canvas-element": {
          const t = this._decodeImageData(e.imageData),
            n = document.createElement("canvas");
          return (
            (n.width = t.width),
            (n.height = t.height),
            n.getContext("2d").putImageData(t, 0, 0),
            n
          );
        }
        case "image-data":
          return this._decodeImageData(e.imageData);
        case "video-element": {
          const t = document.createElement("video");
          return (
            (t.src = e.src),
            (t.crossOrigin = e.crossOrigin),
            (t.autoplay = e.autoplay),
            (t.loop = e.loop),
            (t.muted = e.muted),
            (t.preload = e.preload),
            t
          );
        }
        default:
          return;
      }
    }
    get transparent() {
      const e = this.data,
        t = this.url;
      if (e instanceof HTMLCanvasElement)
        return this._imageDataContainsTransparent(
          e.getContext("2d").getImageData(0, 0, e.width, e.height)
        );
      if (e instanceof ImageData) return this._imageDataContainsTransparent(e);
      if (t) {
        const n = t.substr(t.length - 4, 4).toLowerCase(),
          o = t.substr(0, 15).toLocaleLowerCase();
        if (n === ".png" || o === "data:image/png;") return !0;
      }
      return !1;
    }
    set transparent(e) {
      this._overrideIfSome("transparent", e);
    }
    get contentHash() {
      const e =
          typeof this.wrap == "string"
            ? this.wrap
            : typeof this.wrap == "object"
            ? `${this.wrap.horizontal}/${this.wrap.vertical}`
            : "",
        t = (n = "") => `d:${n},t:${this.transparent},w:${e}`;
      return this.url != null
        ? t(this.url)
        : this.data != null
        ? this.data instanceof HTMLImageElement ||
          this.data instanceof HTMLVideoElement
          ? t(this.data.src)
          : (Ae.has(this.data) || Ae.set(this.data, ++Jt), t(Ae.get(this.data)))
        : t();
    }
    clone() {
      const e = { url: this.url, data: this.data, wrap: this._cloneWrap() };
      return new Z(e);
    }
    cloneWithDeduplication(e) {
      const t = e.get(this);
      if (t) return t;
      const n = this.clone();
      return e.set(this, n), n;
    }
    _cloneWrap() {
      return typeof this.wrap == "string"
        ? this.wrap
        : { horizontal: this.wrap.horizontal, vertical: this.wrap.vertical };
    }
    _encodeImageData(e) {
      let t = "";
      for (let n = 0; n < e.data.length; n++)
        t += String.fromCharCode(e.data[n]);
      return { data: btoa(t), width: e.width, height: e.height };
    }
    _decodeImageData(e) {
      const t = atob(e.data),
        n = new Uint8ClampedArray(t.length);
      for (let o = 0; o < t.length; o++) n[o] = t.charCodeAt(o);
      return Gt(n, e.width, e.height);
    }
    _imageDataContainsTransparent(e) {
      for (let t = 3; t < e.data.length; t += 4)
        if (e.data[t] !== 255) return !0;
      return !1;
    }
    static from(e) {
      return typeof e == "string"
        ? new Z({ url: e })
        : e instanceof HTMLImageElement ||
          e instanceof HTMLCanvasElement ||
          e instanceof ImageData ||
          e instanceof HTMLVideoElement
        ? new Z({ data: e })
        : Ce(Z, e);
    }
  });
d([x({ type: String, json: { write: vt } })], S.prototype, "url", null),
  d(
    [
      x({
        json: {
          write: {
            overridePolicy() {
              return { enabled: !this.url };
            },
          },
        },
      }),
      x(),
    ],
    S.prototype,
    "data",
    null
  ),
  d([bt("data")], S.prototype, "writeData", null),
  d([At("data")], S.prototype, "readData", null),
  d(
    [
      x({
        type: Boolean,
        json: {
          write: {
            overridePolicy() {
              return { enabled: this._isOverridden("transparent") };
            },
          },
        },
      }),
    ],
    S.prototype,
    "transparent",
    null
  ),
  d([x({ json: { write: !0 } })], S.prototype, "wrap", void 0),
  d([x({ readOnly: !0 })], S.prototype, "contentHash", null),
  (S = Z = d([Q("esri.geometry.support.MeshTexture")], S));
const oe = S;
var _e;
let _ = (_e = class extends we {
  constructor(e) {
    super(e),
      (this.color = null),
      (this.colorTexture = null),
      (this.normalTexture = null),
      (this.alphaMode = "auto"),
      (this.alphaCutoff = 0.5),
      (this.doubleSided = !0);
  }
  clone() {
    return this.cloneWithDeduplication(null, new Map());
  }
  cloneWithDeduplication(e, t) {
    const n = m(e) ? e.get(this) : null;
    if (n) return n;
    const o = new _e(this.clonePropertiesWithDeduplication(t));
    return m(e) && e.set(this, o), o;
  }
  clonePropertiesWithDeduplication(e) {
    return {
      color: m(this.color) ? this.color.clone() : null,
      colorTexture: m(this.colorTexture)
        ? this.colorTexture.cloneWithDeduplication(e)
        : null,
      normalTexture: m(this.normalTexture)
        ? this.normalTexture.cloneWithDeduplication(e)
        : null,
      alphaMode: this.alphaMode,
      alphaCutoff: this.alphaCutoff,
      doubleSided: this.doubleSided,
      colorTextureTransform: m(this.colorTextureTransform)
        ? this.colorTextureTransform
        : null,
      normalTextureTransform: m(this.normalTextureTransform)
        ? this.normalTextureTransform
        : null,
    };
  }
});
d([x({ type: ct, json: { write: !0 } })], _.prototype, "color", void 0),
  d(
    [x({ type: oe, json: { write: !0 } })],
    _.prototype,
    "colorTexture",
    void 0
  ),
  d(
    [x({ type: oe, json: { write: !0 } })],
    _.prototype,
    "normalTexture",
    void 0
  ),
  d(
    [x({ nonNullable: !0, json: { write: !0 } })],
    _.prototype,
    "alphaMode",
    void 0
  ),
  d(
    [x({ nonNullable: !0, json: { write: !0 } })],
    _.prototype,
    "alphaCutoff",
    void 0
  ),
  d(
    [x({ nonNullable: !0, json: { write: !0 } })],
    _.prototype,
    "doubleSided",
    void 0
  ),
  d([x()], _.prototype, "colorTextureTransform", void 0),
  d([x()], _.prototype, "normalTextureTransform", void 0),
  (_ = _e = d([Q("esri.geometry.support.MeshMaterial")], _));
const He = _;
var Ee;
let O = (Ee = class extends He {
  constructor(e) {
    super(e),
      (this.emissiveColor = null),
      (this.emissiveTexture = null),
      (this.occlusionTexture = null),
      (this.metallic = 1),
      (this.roughness = 1),
      (this.metallicRoughnessTexture = null);
  }
  clone() {
    return this.cloneWithDeduplication(null, new Map());
  }
  cloneWithDeduplication(e, t) {
    const n = m(e) ? e.get(this) : null;
    if (n) return n;
    const o = new Ee(this.clonePropertiesWithDeduplication(t));
    return m(e) && e.set(this, o), o;
  }
  clonePropertiesWithDeduplication(e) {
    return {
      ...super.clonePropertiesWithDeduplication(e),
      emissiveColor: m(this.emissiveColor) ? this.emissiveColor.clone() : null,
      emissiveTexture: m(this.emissiveTexture)
        ? this.emissiveTexture.cloneWithDeduplication(e)
        : null,
      occlusionTexture: m(this.occlusionTexture)
        ? this.occlusionTexture.cloneWithDeduplication(e)
        : null,
      metallic: this.metallic,
      roughness: this.roughness,
      metallicRoughnessTexture: m(this.metallicRoughnessTexture)
        ? this.metallicRoughnessTexture.cloneWithDeduplication(e)
        : null,
      occlusionTextureTransform: m(this.occlusionTextureTransform)
        ? this.occlusionTextureTransform
        : null,
      emissiveTextureTransform: m(this.emissiveTextureTransform)
        ? this.emissiveTextureTransform
        : null,
      metallicRoughnessTextureTransform: m(
        this.metallicRoughnessTextureTransform
      )
        ? this.metallicRoughnessTextureTransform
        : null,
    };
  }
});
d([x({ type: ct, json: { write: !0 } })], O.prototype, "emissiveColor", void 0),
  d(
    [x({ type: oe, json: { write: !0 } })],
    O.prototype,
    "emissiveTexture",
    void 0
  ),
  d(
    [x({ type: oe, json: { write: !0 } })],
    O.prototype,
    "occlusionTexture",
    void 0
  ),
  d(
    [
      x({
        type: Number,
        nonNullable: !0,
        json: { write: !0 },
        range: { min: 0, max: 1 },
      }),
    ],
    O.prototype,
    "metallic",
    void 0
  ),
  d(
    [
      x({
        type: Number,
        nonNullable: !0,
        json: { write: !0 },
        range: { min: 0, max: 1 },
      }),
    ],
    O.prototype,
    "roughness",
    void 0
  ),
  d(
    [x({ type: oe, json: { write: !0 } })],
    O.prototype,
    "metallicRoughnessTexture",
    void 0
  ),
  d([x()], O.prototype, "occlusionTextureTransform", void 0),
  d([x()], O.prototype, "emissiveTextureTransform", void 0),
  d([x()], O.prototype, "metallicRoughnessTextureTransform", void 0),
  (O = Ee = d([Q("esri.geometry.support.MeshMaterialMetallicRoughness")], O));
const Xt = O;
var pe;
const dt = "esri.geometry.support.MeshVertexAttributes",
  V = C.getLogger(dt);
let F = (pe = class extends we {
  constructor(e) {
    super(e),
      (this.color = null),
      (this.position = new Float64Array(0)),
      (this.uv = null),
      (this.normal = null),
      (this.tangent = null);
  }
  castColor(e) {
    return J(
      e,
      Uint8Array,
      [Uint8ClampedArray],
      { loggerTag: ".color=", stride: 4 },
      V
    );
  }
  castPosition(e) {
    return (
      e &&
        e instanceof Float32Array &&
        V.warn(
          ".position=",
          "Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"
        ),
      J(
        e,
        Float64Array,
        [Float32Array],
        { loggerTag: ".position=", stride: 3 },
        V
      )
    );
  }
  castUv(e) {
    return J(
      e,
      Float32Array,
      [Float64Array],
      { loggerTag: ".uv=", stride: 2 },
      V
    );
  }
  castNormal(e) {
    return J(
      e,
      Float32Array,
      [Float64Array],
      { loggerTag: ".normal=", stride: 3 },
      V
    );
  }
  castTangent(e) {
    return J(
      e,
      Float32Array,
      [Float64Array],
      { loggerTag: ".tangent=", stride: 4 },
      V
    );
  }
  clone() {
    const e = {
      position: P(this.position),
      uv: P(this.uv),
      normal: P(this.normal),
      tangent: P(this.tangent),
      color: P(this.color),
    };
    return new pe(e);
  }
  clonePositional() {
    const e = {
      position: P(this.position),
      normal: P(this.normal),
      tangent: P(this.tangent),
      uv: this.uv,
      color: this.color,
    };
    return new pe(e);
  }
});
function Te(e, t, n, o) {
  const { loggerTag: s, stride: r } = t;
  return e.length % r != 0
    ? (o.error(s, `Invalid array length, expected a multiple of ${r}`),
      new n([]))
    : e;
}
function J(e, t, n, o, s) {
  if (!e) return e;
  if (e instanceof t) return Te(e, o, t, s);
  for (const r of n) if (e instanceof r) return Te(new t(e), o, t, s);
  if (Array.isArray(e)) return Te(new t(e), o, t, s);
  {
    const r = n.map((i) => `'${i.name}'`);
    return (
      s.error(
        `Failed to set property, expected one of ${r}, but got ${e.constructor.name}`
      ),
      new t([])
    );
  }
}
function te(e, t, n) {
  t[n] = (function (o) {
    const s = new Array(o.length);
    for (let r = 0; r < o.length; r++) s[r] = o[r];
    return s;
  })(e);
}
var re;
d([x({ json: { write: te } })], F.prototype, "color", void 0),
  d([H("color")], F.prototype, "castColor", null),
  d(
    [x({ nonNullable: !0, json: { write: te } })],
    F.prototype,
    "position",
    void 0
  ),
  d([H("position")], F.prototype, "castPosition", null),
  d([x({ json: { write: te } })], F.prototype, "uv", void 0),
  d([H("uv")], F.prototype, "castUv", null),
  d([x({ json: { write: te } })], F.prototype, "normal", void 0),
  d([H("normal")], F.prototype, "castNormal", null),
  d([x({ json: { write: te } })], F.prototype, "tangent", void 0),
  d([H("tangent")], F.prototype, "castTangent", null),
  (F = pe = d([Q(dt)], F));
const yt = "esri.geometry.support.MeshComponent",
  Yt = C.getLogger(yt);
let z = (re = class extends we {
  static from(e) {
    return Ce(re, e);
  }
  constructor(e) {
    super(e),
      (this.faces = null),
      (this.material = null),
      (this.shading = "source"),
      (this.trustSourceNormals = !1);
  }
  castFaces(e) {
    return J(
      e,
      Uint32Array,
      [Uint16Array],
      { loggerTag: ".faces=", stride: 3 },
      Yt
    );
  }
  castMaterial(e) {
    return Ce(
      e &&
        typeof e == "object" &&
        ("metallic" in e || "roughness" in e || "metallicRoughnessTexture" in e)
        ? Xt
        : He,
      e
    );
  }
  clone() {
    return new re({
      faces: P(this.faces),
      shading: this.shading,
      material: P(this.material),
      trustSourceNormals: this.trustSourceNormals,
    });
  }
  cloneWithDeduplication(e, t) {
    const n = {
      faces: P(this.faces),
      shading: this.shading,
      material: this.material
        ? this.material.cloneWithDeduplication(e, t)
        : null,
      trustSourceNormals: this.trustSourceNormals,
    };
    return new re(n);
  }
});
d([x({ json: { write: !0 } })], z.prototype, "faces", void 0),
  d([H("faces")], z.prototype, "castFaces", null),
  d([x({ type: He, json: { write: !0 } })], z.prototype, "material", void 0),
  d([H("material")], z.prototype, "castMaterial", null),
  d([x({ type: String, json: { write: !0 } })], z.prototype, "shading", void 0),
  d([x({ type: Boolean })], z.prototype, "trustSourceNormals", void 0),
  (z = re = d([Q(yt)], z));
const X = z;
function Ze(e, t = !1) {
  return e <= Tt
    ? t
      ? new Array(e).fill(0)
      : new Array(e)
    : new Float64Array(e);
}
function qt(e, t, n) {
  return Array.isArray(e) ? e.slice(t, t + n) : e.subarray(t, t + n);
}
function Qt(e) {
  const t = (function (c, l, a) {
      const u = c.length,
        h = new Array(u),
        f = new Array(u),
        p = new Array(u);
      let g = 0,
        w = 0,
        y = 0,
        A = 0;
      for (let T = 0; T < u; ++T) A += c[T].length;
      const I = Ze(3 * A);
      let v = 0;
      for (let T = u - 1; T >= 0; T--) {
        const b = c[T],
          M = a === ye.CCW_IS_HOLE && Kt(b);
        if (M && u !== 1) h[g++] = b;
        else {
          let Ve = b.length;
          for (let N = 0; N < g; ++N) Ve += h[N].length;
          const K = {
            index: v,
            pathLengths: new Array(g + 1),
            count: Ve,
            holeIndices: new Array(g),
          };
          (K.pathLengths[0] = b.length),
            b.length > 0 && (p[y++] = { index: v, count: b.length }),
            (v = M
              ? ie(b, b.length - 1, -1, I, v, b.length, l)
              : ie(b, 0, 1, I, v, b.length, l));
          for (let N = 0; N < g; ++N) {
            const ee = h[N];
            (K.holeIndices[N] = v),
              (K.pathLengths[N + 1] = ee.length),
              ee.length > 0 && (p[y++] = { index: v, count: ee.length }),
              (v = ie(ee, 0, 1, I, v, ee.length, l));
          }
          (g = 0), K.count > 0 && (f[w++] = K);
        }
      }
      for (let T = 0; T < g; ++T) {
        const b = h[T];
        b.length > 0 && (p[y++] = { index: v, count: b.length }),
          (v = ie(b, 0, 1, I, v, b.length, l));
      }
      return (
        (f.length = w),
        (p.length = y),
        { position: I, polygons: f, outlines: p }
      );
    })(e.rings, e.hasZ, ye.CCW_IS_HOLE),
    n = [];
  let o = 0,
    s = 0;
  for (const c of t.polygons) {
    const l = c.count,
      a = c.index,
      u = qt(t.position, 3 * a, 3 * l),
      h = c.holeIndices.map((p) => p - a),
      f = new Uint32Array(Zt(u, h, 3));
    n.push({ position: u, faces: f }), (o += u.length), (s += f.length);
  }
  const r = (function (c, l, a) {
      if (c.length === 1) return c[0];
      const u = Ze(l),
        h = new Uint32Array(a);
      let f = 0,
        p = 0,
        g = 0;
      for (const w of c) {
        for (let y = 0; y < w.position.length; y++) u[f++] = w.position[y];
        for (let y = 0; y < w.faces.length; y++) h[p++] = w.faces[y] + g;
        g = f / 3;
      }
      return { position: u, faces: h };
    })(n, o, s),
    i = Array.isArray(r.position)
      ? Ge(r.position, 3, { originalIndices: r.faces })
      : Ge(r.position.buffer, 6, { originalIndices: r.faces });
  return (r.position = new Float64Array(i.buffer)), (r.faces = i.indices), r;
}
function ie(e, t, n, o, s, r, i) {
  s *= 3;
  for (let c = 0; c < r; ++c) {
    const l = e[t];
    (o[s++] = l[0]), (o[s++] = l[1]), (o[s++] = i ? l[2] : 0), (t += n);
  }
  return s / 3;
}
function Kt(e) {
  return !Mt(e, !1, !1);
}
var ye;
(function (e) {
  (e[(e.NONE = 0)] = "NONE"), (e[(e.CCW_IS_HOLE = 1)] = "CCW_IS_HOLE");
})(ye || (ye = {}));
const Me = C.getLogger("esri.geometry.support.meshUtils.centerAt");
function en(e, t, n) {
  if (!e.vertexAttributes || !e.vertexAttributes.position) return;
  const o = (n == null ? void 0 : n.origin) ?? e.origin;
  m(e.transform)
    ? ((n == null ? void 0 : n.geographic) != null &&
        n.geographic !== e.transform.geographic &&
        Me.warn(
          `Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`
        ),
      (function (s, r, i) {
        const c = r.x - i.x,
          l = r.y - i.y,
          a = r.hasZ && i.hasZ ? r.z - i.z : 0,
          u = s.origin;
        s.origin = [u[0] + c, u[1] + l, u[2] + a];
      })(e.transform, t, o))
    : ve(e.spatialReference, n)
    ? (function (s, r, i) {
        const c = kt(s.vertexAttributes, i, { geographic: !0 }),
          { position: l, normal: a, tangent: u } = Ht(c, r, { geographic: !0 });
        (s.vertexAttributes.position = l),
          (s.vertexAttributes.normal = a),
          (s.vertexAttributes.tangent = u),
          s.vertexAttributesChanged();
      })(e, t, o)
    : (function (s, r, i) {
        const c = nn,
          l = tn;
        if (U(r, l, s.spatialReference)) {
          if (!U(i, c, s.spatialReference)) {
            const a = s.origin;
            (c[0] = a.x),
              (c[1] = a.y),
              (c[2] = a.z),
              Me.error(
                `Failed to project specified origin (wkid:${i.spatialReference.wkid}) to mesh spatial reference (wkid:${s.spatialReference.wkid}).`
              );
          }
          (function (a, u, h) {
            if (a)
              for (let f = 0; f < a.length; f += 3)
                for (let p = 0; p < 3; p++) a[f + p] += u[p] - h[p];
          })(s.vertexAttributes.position, l, c),
            s.vertexAttributesChanged();
        } else
          Me.error(
            `Failed to project centerAt location (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${s.spatialReference.wkid})`
          );
      })(e, t, o);
}
const tn = L(),
  nn = L();
function rn(e) {
  const t = Rt(e.url);
  return (n) => {
    const o = Ct(n, t, t),
      s = o ? o.replace(/^ *\.\//, "") : null;
    return (s ? e.files.get(s) : null) ?? n;
  };
}
async function xt(e, t) {
  return e instanceof Blob
    ? he.fromBlob(e)
    : typeof e == "string"
    ? new he(e)
    : Array.isArray(e)
    ? on(e, t)
    : (async function (n, o) {
        const { default: s } = await Fe(
            ce(
              () => import("./index.8fd7165c.js").then((i) => i.lC),
              [
                "js/index.8fd7165c.js",
                "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
                "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
                "js/NvapForm.feb8550d.js",
                "js/vue.a7ce1fbe.js",
                "assets/NvapForm.356f5dc3.css",
                "js/vue-router.805f6e2a.js",
                "js/Table.e9c997d5.js",
                "js/vue-i18n.67a42238.js",
                "assets/Table.3b7647ef.css",
                "assets/index.a699c0e4.css",
              ]
            ),
            o
          ),
          r =
            typeof n.multipart[0] == "string"
              ? await Promise.all(
                  n.multipart.map(
                    async (i) =>
                      (
                        await s(i, { responseType: "array-buffer" })
                      ).data
                  )
                )
              : n.multipart;
        return he.fromBlob(new Blob(r));
      })(e, t);
}
async function on(e, t) {
  const n = new Map();
  let o = null;
  const s = await Ft(
      e.map(async (i) => ({
        name: i.name,
        source: await xt(i instanceof Blob ? i : i.source, t),
      }))
    ),
    r = [];
  for (const i of s) i && (Lt(t) ? i.source.dispose() : r.push(i));
  Dt(t);
  for (const { name: i, source: c } of r)
    (fe(o) || /\.(gltf|glb)/i.test(i)) && (o = c.url),
      n.set(i, c.url),
      c.files && c.files.forEach((l, a) => n.set(a, l));
  if (fe(o))
    throw new Le(
      "mesh-load-external:missing-files",
      "Missing files to load external mesh source"
    );
  return new he(o, () => r.forEach(({ source: i }) => i.dispose()), n);
}
let he = class wt {
  constructor(t, n = () => {}, o = new Map()) {
    (this.url = t), (this.dispose = n), (this.files = o);
  }
  static fromBlob(t) {
    const n = URL.createObjectURL(t);
    return new wt(n, () => URL.revokeObjectURL(n));
  }
};
function sn(e, t, n) {
  e.vertexAttributes &&
    e.vertexAttributes.position &&
    (m(e.transform)
      ? ((n == null ? void 0 : n.geographic) != null &&
          n.geographic !== e.transform.geographic &&
          C.getLogger("esri.geometry.support.meshUtils.offset").warn(
            `Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`
          ),
        (function (o, s) {
          const r = o.origin;
          o.origin = Pe(L(), r, s);
        })(e.transform, t))
      : ve(e.spatialReference, n)
      ? (function (o, s) {
          const r = o.spatialReference,
            i = o.vertexAttributes.position,
            c = o.vertexAttributes.normal,
            l = o.vertexAttributes.tangent,
            a = new Float64Array(i.length),
            u = m(c) ? new Float32Array(c.length) : null,
            h = m(l) ? new Float32Array(l.length) : null,
            f = o.extent.center,
            p = an;
          ut(r, [f.x, f.y, f.z], Xe, ke(r)),
            pt(Ye, Xe),
            ge(p, s, Ye),
            je(i, r, a),
            m(c) && m(u) && Se(c, i, a, r, u),
            m(l) && m(h) && Ne(l, i, a, r, h),
            Je(a, p),
            ze(a, i, r),
            m(c) && m(u) && We(u, i, a, r, c),
            m(l) && m(h) && $e(h, i, a, r, l),
            o.vertexAttributesChanged();
        })(e, t)
      : (function (o, s) {
          Je(o.vertexAttributes.position, s), o.vertexAttributesChanged();
        })(e, t));
}
function Je(e, t) {
  if (e)
    for (let n = 0; n < e.length; n += 3)
      for (let o = 0; o < 3; o++) e[n + o] += t[o];
}
const an = L(),
  Xe = mt(),
  Ye = Ue(),
  ne = {
    position: [-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0],
    normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    uv: [0, 1, 1, 1, 1, 0, 0, 0],
    faces: [0, 1, 2, 0, 2, 3],
    facingAxisOrderSwap: {
      east: [3, 1, 2],
      west: [-3, -1, 2],
      north: [-1, 3, 2],
      south: [1, -3, 2],
      up: [1, 2, 3],
      down: [1, -2, -3],
    },
  };
function ae(e, t, n) {
  e.isPlane ||
    (function (r) {
      for (let i = 0; i < r.position.length; i += 3) r.position[i + 2] += 0.5;
    })(e),
    (function (r, i) {
      if (i == null) return;
      const c =
        typeof i == "number"
          ? [i, i, i]
          : [
              i.width != null ? i.width : 1,
              i.depth != null ? i.depth : 1,
              i.height != null ? i.height : 1,
            ];
      (W[0] = c[0]), (W[4] = c[1]), (W[8] = c[2]);
      for (let l = 0; l < r.position.length; l += 3) {
        for (let a = 0; a < 3; a++) R[a] = r.position[l + a];
        ge(R, R, W);
        for (let a = 0; a < 3; a++) r.position[l + a] = R[a];
      }
      if (c[0] !== c[1] || c[1] !== c[2]) {
        (W[0] = 1 / c[0]), (W[4] = 1 / c[1]), (W[8] = 1 / c[2]);
        for (let l = 0; l < r.normal.length; l += 3) {
          for (let a = 0; a < 3; a++) R[a] = r.normal[l + a];
          ge(R, R, W), It(R, R);
          for (let a = 0; a < 3; a++) r.normal[l + a] = R[a];
        }
      }
    })(e, n == null ? void 0 : n.size);
  const { vertexAttributes: o, transform: s } = Vt(e, t, n);
  return {
    vertexAttributes: new F({ ...o, uv: e.uv }),
    transform: s,
    components: [
      new X({ faces: e.faces, material: (n && n.material) || null }),
    ],
    spatialReference: t.spatialReference,
  };
}
const ln = {
    faceDescriptions: [
      {
        axis: [0, -1, 0],
        uvOrigin: [0, 0.625],
        corners: [
          [-1, -1],
          [1, -1],
          [1, 1],
          [-1, 1],
        ],
      },
      {
        axis: [1, 0, 0],
        uvOrigin: [0.25, 0.625],
        corners: [
          [-1, -1],
          [1, -1],
          [1, 1],
          [-1, 1],
        ],
      },
      {
        axis: [0, 1, 0],
        uvOrigin: [0.5, 0.625],
        corners: [
          [1, -1],
          [-1, -1],
          [-1, 1],
          [1, 1],
        ],
      },
      {
        axis: [-1, 0, 0],
        uvOrigin: [0.75, 0.625],
        corners: [
          [1, -1],
          [-1, -1],
          [-1, 1],
          [1, 1],
        ],
      },
      {
        axis: [0, 0, 1],
        uvOrigin: [0, 0.375],
        corners: [
          [-1, -1],
          [1, -1],
          [1, 1],
          [-1, 1],
        ],
      },
      {
        axis: [0, 0, -1],
        uvOrigin: [0, 0.875],
        corners: [
          [-1, 1],
          [1, 1],
          [1, -1],
          [-1, -1],
        ],
      },
    ],
    uvScales: [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1],
    ],
    faceVertexOffsets: [0, 1, 2, 0, 2, 3],
  },
  cn = { south: 0, east: 1, north: 2, west: 3, up: 4, down: 5 },
  R = L(),
  W = Ue(),
  qe = C.getLogger("esri.geometry.support.meshUtils.rotate");
function un(e, t, n) {
  if (!e.vertexAttributes || !e.vertexAttributes.position || t[3] === 0) return;
  const o = e.spatialReference;
  if (m(e.transform)) {
    (n == null ? void 0 : n.geographic) != null &&
      n.geographic !== e.transform.geographic &&
      qe.warn(
        `Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`
      );
    const s = (n == null ? void 0 : n.origin) ?? e.transform.getOriginPoint(o);
    (function (r, i, c) {
      const l = ht(Y, c.x, c.y, c.z),
        a = me(Y, l, r.origin);
      r.applyLocalInverse(a, Qe),
        (r.rotation = Ie(r.rotation, i, se())),
        r.applyLocalInverse(a, a),
        me(a, a, Qe),
        (r.translation = Pe(L(), r.translation, a));
    })(e.transform, t, s);
  } else {
    const s = (n == null ? void 0 : n.origin) ?? e.origin;
    ve(e.spatialReference, n)
      ? (function (r, i, c) {
          const l = r.spatialReference,
            a = ke(l),
            u = tt;
          U(c, u, a) || U(r.origin, u, a);
          const h = r.vertexAttributes.position,
            f = r.vertexAttributes.normal,
            p = r.vertexAttributes.tangent,
            g = new Float64Array(h.length),
            w = m(f) ? new Float32Array(f.length) : null,
            y = m(p) ? new Float32Array(p.length) : null;
          ut(a, u, xe, a), pt(et, xe);
          const A = Ke;
          ge(Oe(Ke), Oe(i), et),
            (A[3] = i[3]),
            je(h, l, g),
            m(f) && m(w) && Se(f, h, g, l, w),
            m(p) && m(y) && Ne(p, h, g, l, y),
            B(g, A, 3, u),
            ze(g, h, l),
            m(f) && m(w) && (B(w, A, 3), We(w, h, g, l, f)),
            m(p) && m(y) && (B(y, A, 4), $e(y, h, g, l, p)),
            r.vertexAttributesChanged();
        })(e, t, s)
      : (function (r, i, c) {
          const l = tt;
          if (!U(c, l, r.spatialReference)) {
            const a = r.origin;
            (l[0] = a.x),
              (l[1] = a.y),
              (l[2] = a.z),
              qe.error(
                `Failed to project specified origin (wkid:${c.spatialReference.wkid}) to mesh spatial reference (wkid:${r.spatialReference.wkid}).`
              );
          }
          B(r.vertexAttributes.position, i, 3, l),
            B(r.vertexAttributes.normal, i, 3),
            B(r.vertexAttributes.tangent, i, 4),
            r.vertexAttributesChanged();
        })(e, t, s);
  }
}
function B(e, t, n, o = ft) {
  if (!fe(e)) {
    Ot(xe, Bt(t), Oe(t));
    for (let s = 0; s < e.length; s += n) {
      for (let r = 0; r < 3; r++) Y[r] = e[s + r] - o[r];
      _t(Y, Y, xe);
      for (let r = 0; r < 3; r++) e[s + r] = Y[r] + o[r];
    }
  }
}
const Y = L(),
  Qe = L(),
  Ke = se(),
  xe = mt(),
  et = Ue(),
  tt = L(),
  nt = C.getLogger("esri.geometry.support.meshUtils.scale");
function pn(e, t, n) {
  if (!e.vertexAttributes || !e.vertexAttributes.position) return;
  const o = e.spatialReference;
  if (m(e.transform)) {
    (n == null ? void 0 : n.geographic) != null &&
      n.geographic !== e.transform.geographic &&
      nt.warn(
        `Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`
      );
    const s = (n == null ? void 0 : n.origin) ?? e.transform.getOriginPoint(o);
    (function (r, i, c) {
      const l = ht(q, c.x, c.y, c.z),
        a = me(q, l, r.origin);
      r.applyLocalInverse(a, ot);
      const u = gt(L(), r.scale, i);
      (r.scale = u),
        r.applyLocalInverse(a, a),
        me(a, a, ot),
        (r.translation = Pe(L(), r.translation, a));
    })(e.transform, t, s);
  } else {
    const s = ve(e.spatialReference, n),
      r = (n && n.origin) || e.origin;
    s
      ? (function (i, c, l) {
          const a = i.spatialReference,
            u = ke(a),
            h = st;
          U(l, h, u) || U(i.origin, h, u);
          const f = i.vertexAttributes.position,
            p = i.vertexAttributes.normal,
            g = i.vertexAttributes.tangent,
            w = new Float64Array(f.length),
            y = m(p) ? new Float32Array(p.length) : null,
            A = m(g) ? new Float32Array(g.length) : null;
          je(f, a, w),
            m(p) && m(y) && Se(p, f, w, a, y),
            m(g) && m(A) && Ne(g, f, w, a, A),
            rt(w, c, h),
            ze(w, f, a),
            m(p) && m(y) && We(y, f, w, a, p),
            m(g) && m(A) && $e(A, f, w, a, g),
            i.vertexAttributesChanged();
        })(e, t, r)
      : (function (i, c, l) {
          const a = st;
          if (!U(l, a, i.spatialReference)) {
            const u = i.origin;
            (a[0] = u.x),
              (a[1] = u.y),
              (a[2] = u.z),
              nt.error(
                `Failed to project specified origin (wkid:${l.spatialReference.wkid}) to mesh spatial reference (wkid:${i.spatialReference.wkid}).`
              );
          }
          rt(i.vertexAttributes.position, c, a), i.vertexAttributesChanged();
        })(e, t, r);
  }
}
function rt(e, t, n = ft) {
  if (e)
    for (let o = 0; o < e.length; o += 3) {
      for (let s = 0; s < 3; s++) q[s] = e[o + s] - n[s];
      gt(q, q, t);
      for (let s = 0; s < 3; s++) e[o + s] = q[s] + n[s];
    }
}
const q = L(),
  ot = L(),
  st = L();
var E;
const k = "esri.geometry.Mesh";
let D = (E = class extends Et(Pt.LoadableMixin(jt(St))) {
  constructor(e) {
    super(e),
      (this.components = null),
      (this.transform = null),
      (this.external = null),
      (this.hasZ = !0),
      (this.hasM = !1),
      (this.vertexAttributes = new F()),
      (this.type = "mesh");
  }
  initialize() {
    (fe(this.external) || this.vertexAttributes.position.length) &&
      (this.loadStatus = "loaded"),
      this.when(() => {
        this.handles.add(
          Nt(
            () => {
              var e;
              return {
                vertexAttributes: this.vertexAttributes,
                components:
                  (e = this.components) == null
                    ? void 0
                    : e.map((t) => t.clone()),
              };
            },
            () => this._set("external", null),
            { once: !0, sync: !0 }
          )
        );
      });
  }
  get hasExtent() {
    return (
      (!this.loaded && m(this.external) && m(this.external.extent)) ||
      (this.loaded &&
        this.vertexAttributes.position.length > 0 &&
        (!this.components || this.components.length > 0))
    );
  }
  get _boundingInfo() {
    const e = this.vertexAttributes.position,
      t = this.spatialReference;
    if (e.length === 0 || (this.components && this.components.length === 0))
      return {
        extent: new De({
          xmin: 0,
          ymin: 0,
          zmin: 0,
          xmax: 0,
          ymax: 0,
          zmax: 0,
          spatialReference: t,
        }),
        center: new j({ x: 0, y: 0, z: 0, spatialReference: t }),
      };
    const n = m(this.transform) ? this.transform.project(e, t) : e;
    let o = 1 / 0,
      s = 1 / 0,
      r = 1 / 0,
      i = -1 / 0,
      c = -1 / 0,
      l = -1 / 0,
      a = 0,
      u = 0,
      h = 0;
    const f = n.length,
      p = 1 / (f / 3);
    let g = 0;
    for (; g < f; ) {
      const w = n[g++],
        y = n[g++],
        A = n[g++];
      (o = Math.min(o, w)),
        (s = Math.min(s, y)),
        (r = Math.min(r, A)),
        (i = Math.max(i, w)),
        (c = Math.max(c, y)),
        (l = Math.max(l, A)),
        (a += p * w),
        (u += p * y),
        (h += p * A);
    }
    return {
      extent: new De({
        xmin: o,
        ymin: s,
        zmin: r,
        xmax: i,
        ymax: c,
        zmax: l,
        spatialReference: t,
      }),
      center: new j({ x: a, y: u, z: h, spatialReference: t }),
    };
  }
  get anchor() {
    if (m(this.transform))
      return this.transform.getOriginPoint(this.spatialReference);
    const e = this._boundingInfo;
    return new j({
      x: e.center.x,
      y: e.center.y,
      z: e.extent.zmin,
      spatialReference: this.spatialReference,
    });
  }
  get origin() {
    return m(this.transform)
      ? this.transform.getOriginPoint(this.spatialReference)
      : this._boundingInfo.center;
  }
  get extent() {
    return !this.loaded && m(this.external) && m(this.external.extent)
      ? this.external.extent.clone()
      : this._boundingInfo.extent;
  }
  addComponent(e) {
    this.loaded
      ? (this.components || (this.components = []),
        this.components.push(X.from(e)),
        this.notifyChange("components"))
      : C.getLogger(this.declaredClass).error(
          "addComponent()",
          "Mesh must be loaded before applying operations"
        );
  }
  removeComponent(e) {
    if (this.loaded) {
      if (this.components) {
        const t = this.components.indexOf(e);
        if (t !== -1)
          return (
            this.components.splice(t, 1), void this.notifyChange("components")
          );
      }
      C.getLogger(this.declaredClass).error(
        "removeComponent()",
        "Provided component is not part of the list of components"
      );
    } else
      C.getLogger(this.declaredClass).error(
        "removeComponent()",
        "Mesh must be loaded before applying operations"
      );
  }
  rotate(e, t, n, o) {
    return (
      ue(Re.x, e, G),
      ue(Re.y, t, it),
      ue(Re.z, n, at),
      Ie(G, it, G),
      Ie(G, at, G),
      un(this, G, o),
      this
    );
  }
  offset(e, t, n, o) {
    return this.loaded
      ? ((le[0] = e), (le[1] = t), (le[2] = n), sn(this, le, o), this)
      : (C.getLogger(this.declaredClass).error(
          "offset()",
          "Mesh must be loaded before applying operations"
        ),
        this);
  }
  scale(e, t) {
    return this.loaded
      ? (pn(this, e, t), this)
      : (C.getLogger(this.declaredClass).error(
          "scale()",
          "Mesh must be loaded before applying operations"
        ),
        this);
  }
  centerAt(e, t) {
    return this.loaded
      ? (en(this, e, t), this)
      : (C.getLogger(this.declaredClass).error(
          "centerAt()",
          "Mesh must be loaded before applying operations"
        ),
        this);
  }
  load(e) {
    return (
      m(this.external) &&
        this.addResolvingPromise(
          (async function (t, n, o) {
            const { loadGLTFMesh: s } = await Fe(
                ce(
                  () => import("./loadGLTFMesh.8c9f5406.js"),
                  [
                    "js/loadGLTFMesh.8c9f5406.js",
                    "js/index.8fd7165c.js",
                    "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
                    "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
                    "js/NvapForm.feb8550d.js",
                    "js/vue.a7ce1fbe.js",
                    "assets/NvapForm.356f5dc3.css",
                    "js/vue-router.805f6e2a.js",
                    "js/Table.e9c997d5.js",
                    "js/vue-i18n.67a42238.js",
                    "assets/Table.3b7647ef.css",
                    "assets/index.a699c0e4.css",
                    "js/mat3f64.eb921732.js",
                    "js/BufferView.b3039ce1.js",
                    "js/vec33.5889ffa1.js",
                    "js/DefaultMaterial_COLOR_GAMMA.078f8e82.js",
                    "js/types.e1c0a5bf.js",
                    "js/mat4f64.b473928c.js",
                    "js/enums.64ab819c.js",
                    "js/Version.a4557b9e.js",
                    "js/quat.17ee06b3.js",
                    "js/quatf64.75f9f553.js",
                    "js/resourceUtils.d8a25705.js",
                    "js/basicInterfaces.b7051eb1.js",
                    "js/Indices.7165e4ff.js",
                    "js/georeference.db8759a2.js",
                    "js/spatialReferenceEllipsoidUtils.0049fd16.js",
                    "js/imageUtils.c2d0d1ae.js",
                    "js/earcut.9f54f087.js",
                    "js/deduplicate.744c1fe7.js",
                  ]
                ),
                o
              ),
              r = await xt(n, o),
              i = s(
                new j({
                  x: 0,
                  y: 0,
                  z: 0,
                  spatialReference: t.spatialReference,
                }),
                r.url,
                {
                  resolveFile: rn(r),
                  useTransform: !0,
                  signal: m(o) ? o.signal : null,
                }
              );
            i.then(
              () => r.dispose(),
              () => r.dispose()
            );
            const { vertexAttributes: c, components: l } = await i;
            (t.vertexAttributes = c), (t.components = l);
          })(this, this.external.source, e)
        ),
      Promise.resolve(this)
    );
  }
  updateExternalSource(e) {
    this._set("external", e);
  }
  clone() {
    let e = null;
    if (this.components) {
      const n = new Map(),
        o = new Map();
      e = this.components.map((s) => s.cloneWithDeduplication(n, o));
    }
    const t = {
      components: e,
      spatialReference: this.spatialReference,
      vertexAttributes: this.vertexAttributes.clone(),
      transform: m(this.transform) ? this.transform.clone() : null,
      external: m(this.external)
        ? {
            source: this.external.source,
            extent: m(this.external.extent)
              ? this.external.extent.clone()
              : null,
          }
        : null,
    };
    return new E(t);
  }
  vertexAttributesChanged() {
    this.notifyChange("vertexAttributes");
  }
  async toBinaryGLTF(e) {
    const t = ce(
        () => import("./gltfexport.ca1b0b68.js"),
        [
          "js/gltfexport.ca1b0b68.js",
          "js/index.8fd7165c.js",
          "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
          "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
          "js/NvapForm.feb8550d.js",
          "js/vue.a7ce1fbe.js",
          "assets/NvapForm.356f5dc3.css",
          "js/vue-router.805f6e2a.js",
          "js/Table.e9c997d5.js",
          "js/vue-i18n.67a42238.js",
          "assets/Table.3b7647ef.css",
          "assets/index.a699c0e4.css",
          "js/quat.17ee06b3.js",
          "js/mat3f64.eb921732.js",
          "js/quatf64.75f9f553.js",
          "js/georeference.db8759a2.js",
          "js/mat4f64.b473928c.js",
          "js/spatialReferenceEllipsoidUtils.0049fd16.js",
          "js/BufferView.b3039ce1.js",
          "js/vec33.5889ffa1.js",
          "js/enums.64ab819c.js",
          "js/imageutils.463df5ec.js",
          "js/resourceUtils.d8a25705.js",
          "js/basicInterfaces.b7051eb1.js",
          "js/imageUtils.c2d0d1ae.js",
          "js/earcut.9f54f087.js",
          "js/deduplicate.744c1fe7.js",
          "js/Indices.7165e4ff.js",
        ]
      ),
      n = this.load(),
      o = await Promise.all([t, n]),
      { toBinaryGLTF: s } = o[0];
    return s(this, e);
  }
  static createBox(e, t) {
    if (!(e instanceof j))
      return (
        C.getLogger(k).error(
          ".createBox()",
          "expected location to be a Point instance"
        ),
        null
      );
    const n = new E(
      ae(
        (function () {
          const { faceDescriptions: o, faceVertexOffsets: s, uvScales: r } = ln,
            i = 4 * o.length,
            c = new Float64Array(3 * i),
            l = new Float32Array(3 * i),
            a = new Float32Array(2 * i),
            u = new Uint32Array(2 * o.length * 3);
          let h = 0,
            f = 0,
            p = 0,
            g = 0;
          for (let w = 0; w < o.length; w++) {
            const y = o[w],
              A = h / 3;
            for (const v of s) u[g++] = A + v;
            const I = y.corners;
            for (let v = 0; v < 4; v++) {
              const T = I[v];
              let b = 0;
              (a[p++] = 0.25 * r[v][0] + y.uvOrigin[0]),
                (a[p++] = y.uvOrigin[1] - 0.25 * r[v][1]);
              for (let M = 0; M < 3; M++)
                y.axis[M] !== 0
                  ? ((c[h++] = 0.5 * y.axis[M]), (l[f++] = y.axis[M]))
                  : ((c[h++] = 0.5 * T[b++]), (l[f++] = 0));
            }
          }
          return { position: c, normal: l, uv: a, faces: u };
        })(),
        e,
        t
      )
    );
    return t && t.imageFace && t.imageFace !== "all"
      ? (function (o, s) {
          const r = o.components[0],
            i = r.faces,
            c = cn[s],
            l = 6 * c,
            a = new Array(6),
            u = new Array(i.length - 6);
          let h = 0,
            f = 0;
          for (let p = 0; p < i.length; p++)
            p >= l && p < l + 6 ? (a[h++] = i[p]) : (u[f++] = i[p]);
          if (m(o.vertexAttributes.uv)) {
            const p = new Float32Array(o.vertexAttributes.uv),
              g = 4 * c * 2,
              w = [0, 1, 1, 1, 1, 0, 0, 0];
            for (let y = 0; y < w.length; y++) p[g + y] = w[y];
            o.vertexAttributes.uv = p;
          }
          return (
            (o.components = [
              new X({ faces: a, material: r.material }),
              new X({ faces: u }),
            ]),
            o
          );
        })(n, t.imageFace)
      : n;
  }
  static createSphere(e, t) {
    return e instanceof j
      ? new E(
          ae(
            (function (n = 0) {
              const o = Math.round(8 * 2 ** n),
                s = 2 * o,
                r = (o - 1) * (s + 1) + 2 * s,
                i = new Float64Array(3 * r),
                c = new Float32Array(3 * r),
                l = new Float32Array(2 * r),
                a = new Uint32Array((o - 1) * s * 2 * 3);
              let u = 0,
                h = 0,
                f = 0,
                p = 0;
              for (let g = 0; g <= o; g++) {
                const w = (g / o) * Math.PI + 0.5 * Math.PI,
                  y = Math.cos(w),
                  A = Math.sin(w);
                R[2] = A;
                const I = g === 0 || g === o,
                  v = I ? s - 1 : s;
                for (let T = 0; T <= v; T++) {
                  const b = (T / v) * 2 * Math.PI;
                  (R[0] = -Math.sin(b) * y), (R[1] = Math.cos(b) * y);
                  for (let M = 0; M < 3; M++)
                    (i[u] = 0.5 * R[M]), (c[u] = R[M]), ++u;
                  (l[h++] = (T + (I ? 0.5 : 0)) / s),
                    (l[h++] = g / o),
                    g !== 0 &&
                      T !== s &&
                      (g !== o &&
                        ((a[f++] = p), (a[f++] = p + 1), (a[f++] = p - s)),
                      g !== 1 &&
                        ((a[f++] = p), (a[f++] = p - s), (a[f++] = p - s - 1))),
                    p++;
                }
              }
              return { position: i, normal: c, uv: l, faces: a };
            })((t && t.densificationFactor) || 0),
            e,
            t
          )
        )
      : (C.getLogger(k).error(
          ".createSphere()",
          "expected location to be a Point instance"
        ),
        null);
  }
  static createCylinder(e, t) {
    return e instanceof j
      ? new E(
          ae(
            (function (n = 0) {
              const o = Math.round(16 * 2 ** n),
                s = 4 * (o + 1) + 2 * o,
                r = new Float64Array(3 * s),
                i = new Float32Array(3 * s),
                c = new Float32Array(2 * s),
                l = new Uint32Array(4 * o * 3);
              let a = 0,
                u = 0,
                h = 0,
                f = 0,
                p = 0;
              for (let g = 0; g <= 5; g++) {
                const w = g === 0 || g === 5,
                  y = g <= 1 || g >= 4,
                  A = g === 2 || g === 4,
                  I = w ? o - 1 : o;
                for (let v = 0; v <= I; v++) {
                  const T = (v / I) * 2 * Math.PI,
                    b = w ? 0 : 0.5;
                  (R[0] = b * Math.sin(T)),
                    (R[1] = b * -Math.cos(T)),
                    (R[2] = g <= 2 ? 0.5 : -0.5);
                  for (let M = 0; M < 3; M++)
                    (r[a++] = R[M]),
                      (i[u++] = y
                        ? M === 2
                          ? g <= 1
                            ? 1
                            : -1
                          : 0
                        : M === 2
                        ? 0
                        : R[M] / b);
                  (c[h++] = (v + (w ? 0.5 : 0)) / o),
                    (c[h++] =
                      g <= 1
                        ? (1 * g) / 3
                        : g <= 3
                        ? (1 * (g - 2)) / 3 + 1 / 3
                        : (1 * (g - 4)) / 3 + 2 / 3),
                    A ||
                      g === 0 ||
                      v === o ||
                      (g !== 5 &&
                        ((l[f++] = p), (l[f++] = p + 1), (l[f++] = p - o)),
                      g !== 1 &&
                        ((l[f++] = p), (l[f++] = p - o), (l[f++] = p - o - 1))),
                    p++;
                }
              }
              return { position: r, normal: i, uv: c, faces: l };
            })((t && t.densificationFactor) || 0),
            e,
            t
          )
        )
      : (C.getLogger(k).error(
          ".createCylinder()",
          "expected location to be a Point instance"
        ),
        null);
  }
  static createPlane(e, t) {
    if (!(e instanceof j))
      return (
        C.getLogger(k).error(
          ".createPlane()",
          "expected location to be a Point instance"
        ),
        null
      );
    const n = (t == null ? void 0 : t.facing) ?? "up",
      o = (function (s, r) {
        const i = typeof r == "number" ? r : r != null ? r.width : 1,
          c = typeof r == "number" ? r : r != null ? r.height : 1;
        switch (s) {
          case "up":
          case "down":
            return { width: i, depth: c };
          case "north":
          case "south":
            return { width: i, height: c };
          case "east":
          case "west":
            return { depth: i, height: c };
        }
      })(n, t == null ? void 0 : t.size);
    return new E(
      ae(
        (function (s) {
          const r = ne.facingAxisOrderSwap[s],
            i = ne.position,
            c = ne.normal,
            l = new Float64Array(i.length),
            a = new Float32Array(c.length);
          let u = 0;
          for (let h = 0; h < 4; h++) {
            const f = u;
            for (let p = 0; p < 3; p++) {
              const g = r[p],
                w = Math.abs(g) - 1,
                y = g >= 0 ? 1 : -1;
              (l[u] = i[f + w] * y), (a[u] = c[f + w] * y), u++;
            }
          }
          return {
            position: l,
            normal: a,
            uv: new Float32Array(ne.uv),
            faces: new Uint32Array(ne.faces),
            isPlane: !0,
          };
        })(n),
        e,
        { ...t, size: o }
      )
    );
  }
  static createFromPolygon(e, t) {
    if (!(e instanceof zt))
      return (
        C.getLogger(k).error(
          ".createFromPolygon()",
          "expected polygon to be a Polygon instance"
        ),
        null
      );
    const n = Qt(e);
    return new E({
      vertexAttributes: new F({ position: n.position }),
      components: [
        new X({
          faces: n.faces,
          shading: "flat",
          material: (t == null ? void 0 : t.material) ?? null,
        }),
      ],
      spatialReference: e.spatialReference,
    });
  }
  static async createFromGLTF(e, t, n) {
    if (!(e instanceof j))
      throw (
        (C.getLogger(k).error(
          ".createfromGLTF()",
          "expected location to be a Point instance"
        ),
        new Le("invalid-input", "Expected location to be a Point instance"))
      );
    const { loadGLTFMesh: o } = await Fe(
      ce(
        () => import("./loadGLTFMesh.8c9f5406.js"),
        [
          "js/loadGLTFMesh.8c9f5406.js",
          "js/index.8fd7165c.js",
          "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
          "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
          "js/NvapForm.feb8550d.js",
          "js/vue.a7ce1fbe.js",
          "assets/NvapForm.356f5dc3.css",
          "js/vue-router.805f6e2a.js",
          "js/Table.e9c997d5.js",
          "js/vue-i18n.67a42238.js",
          "assets/Table.3b7647ef.css",
          "assets/index.a699c0e4.css",
          "js/mat3f64.eb921732.js",
          "js/BufferView.b3039ce1.js",
          "js/vec33.5889ffa1.js",
          "js/DefaultMaterial_COLOR_GAMMA.078f8e82.js",
          "js/types.e1c0a5bf.js",
          "js/mat4f64.b473928c.js",
          "js/enums.64ab819c.js",
          "js/Version.a4557b9e.js",
          "js/quat.17ee06b3.js",
          "js/quatf64.75f9f553.js",
          "js/resourceUtils.d8a25705.js",
          "js/basicInterfaces.b7051eb1.js",
          "js/Indices.7165e4ff.js",
          "js/georeference.db8759a2.js",
          "js/spatialReferenceEllipsoidUtils.0049fd16.js",
          "js/imageUtils.c2d0d1ae.js",
          "js/earcut.9f54f087.js",
          "js/deduplicate.744c1fe7.js",
        ]
      ),
      n
    );
    return new E(await o(e, t, n));
  }
  static createWithExternalSource(e, t, n) {
    var i;
    const o = (n == null ? void 0 : n.extent) ?? null,
      s =
        ((i = n == null ? void 0 : n.transform) == null ? void 0 : i.clone()) ??
        new de();
    s.origin = [e.x, e.y, e.z ?? 0];
    const r = e.spatialReference;
    return new E({
      external: { source: t, extent: o },
      transform: s,
      spatialReference: r,
    });
  }
  static createIncomplete(e, t) {
    var r;
    const n =
      ((r = t == null ? void 0 : t.transform) == null ? void 0 : r.clone()) ??
      new de();
    n.origin = [e.x, e.y, e.z ?? 0];
    const o = e.spatialReference,
      s = new E({ transform: n, spatialReference: o });
    return (
      s.addResolvingPromise(
        Promise.reject(
          new Le("mesh-incomplete", "Mesh resources are not complete")
        )
      ),
      s
    );
  }
});
d([x({ type: [X], json: { write: !0 } })], D.prototype, "components", void 0),
  d([x({ type: de, json: { write: !0 } })], D.prototype, "transform", void 0),
  d([x({ constructOnly: !0 })], D.prototype, "external", void 0),
  d([x({ readOnly: !0 })], D.prototype, "hasExtent", null),
  d([x({ readOnly: !0 })], D.prototype, "_boundingInfo", null),
  d([x({ readOnly: !0 })], D.prototype, "anchor", null),
  d([x({ readOnly: !0 })], D.prototype, "origin", null),
  d([x({ readOnly: !0, json: { read: !1 } })], D.prototype, "extent", null),
  d(
    [x({ readOnly: !0, json: { read: !1, write: !0, default: !0 } })],
    D.prototype,
    "hasZ",
    void 0
  ),
  d(
    [x({ readOnly: !0, json: { read: !1, write: !0, default: !1 } })],
    D.prototype,
    "hasM",
    void 0
  ),
  d(
    [x({ type: F, nonNullable: !0, json: { write: !0 } })],
    D.prototype,
    "vertexAttributes",
    void 0
  ),
  (D = E = d([Q(k)], D));
const Re = { x: be(1, 0, 0), y: be(0, 1, 0), z: be(0, 0, 1) },
  G = se(),
  it = se(),
  at = se(),
  le = L(),
  lt = D;
function hn(e, t, n, o, s) {
  const r = e.attributes[t],
    i = s.get(r);
  if (i == null || i.status === $.FAILED || i.url == null) return null;
  const c = (function ({ attributes: u }, h, { transformFieldRoles: f }) {
      return new j({
        x: u[f.originX],
        y: u[f.originY],
        z: u[f.originZ],
        spatialReference: h,
      });
    })(e, n, o),
    l = De.fromJSON(e.geometry);
  l.spatialReference = n;
  const a = (function (u, { transformFieldRoles: h }, f) {
    return new de({
      translation: [u[h.translationX], -u[h.translationZ], u[h.translationY]],
      rotation: ue(
        [u[h.rotationX], u[h.rotationZ], u[h.rotationY]],
        u[h.rotationDeg]
      ),
      scale: [u[h.scaleX], u[h.scaleY], u[h.scaleZ]],
      geographic: f,
    });
  })(e.attributes, o, i.projectVertices);
  return i.status === $.PENDING
    ? lt.createIncomplete(c, { extent: l, transform: a })
    : lt.createWithExternalSource(c, [{ name: i.name, source: i.url }], {
        extent: l,
        transform: a,
      });
}
var $;
function fn(e, t) {
  const n = new Map();
  for (const o of t) {
    const s = o.parentGlobalId;
    if (s == null) continue;
    const r = o.assetName,
      i = o.assetURL,
      c = o.conversionStatus;
    let l = n.get(s);
    if (l == null)
      switch (
        ((l = {
          name: r,
          status: $.FAILED,
          url: i,
          projectVertices: gn(o.flags).projectVertices,
        }),
        n.set(s, l),
        c)
      ) {
        case "COMPLETED":
        case "SUBMITTED":
          l.status = $.COMPLETED;
          break;
        case "INPROGRESS":
          l.status = $.PENDING;
          break;
        default:
          l.status = $.FAILED;
      }
  }
  return n;
}
function gn(e) {
  return { projectVertices: e.includes("PROJECT_VERTICES") };
}
(function (e) {
  (e[(e.FAILED = 0)] = "FAILED"),
    (e[(e.PENDING = 1)] = "PENDING"),
    (e[(e.COMPLETED = 2)] = "COMPLETED");
})($ || ($ = {}));
const Mn = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      meshFeatureSetFromJSON: function (e, t, n) {
        const o = n.features;
        (n.features = []), delete n.geometryType;
        const s = Wt.fromJSON(n);
        if (((s.geometryType = "mesh"), !n.assetMaps)) return s;
        const r = fn(t, n.assetMaps),
          i = s.spatialReference ?? $t.WGS84,
          c = n.globalIdFieldName,
          { outFields: l } = e,
          a =
            m(l) && l.length > 0
              ? (function (u) {
                  return ({ attributes: h }) => {
                    if (!h) return {};
                    if (!u) return h;
                    for (const f in h) u.has(f) || delete h[f];
                    return h;
                  };
                })(l.includes("*") ? null : new Set(l))
              : () => ({});
        for (const u of o) {
          const h = hn(u, c, i, t, r);
          m(h) && s.features.push(new Ut({ geometry: h, attributes: a(u) }));
        }
        return s;
      },
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export { Mn as a, Xt as c, X as g, oe as m, F as p };
