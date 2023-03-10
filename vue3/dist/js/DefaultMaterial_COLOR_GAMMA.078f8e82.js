import { a as Q } from "./vec33.5889ffa1.js";
import { s as se, r as ae, c as ie, e as ue } from "./types.e1c0a5bf.js";
import {
  d2 as W,
  f as fe,
  lp as Z,
  t as ee,
  U as le,
  a4 as ce,
  a2 as de,
  s as d,
  gs as pe,
  lq as me,
  d3 as he,
  dt as ye,
  fy as Te,
  lk as we,
  lr as xe,
  fL as ge,
  hK as _e,
  gB as H,
  Q as P,
  r as k,
  aP as be,
  ld as Se,
} from "./index.8fd7165c.js";
import { e as te, r as z } from "./mat4f64.b473928c.js";
import { D as G, L as j, C as p, E as I } from "./enums.64ab819c.js";
import { r as re } from "./Version.a4557b9e.js";
import { x as Oe } from "./quat.17ee06b3.js";
import { e as Ae } from "./quatf64.75f9f553.js";
import {
  B as Ee,
  g as Re,
  d as Ne,
  i as V,
  c as q,
  u as Y,
  x as Ie,
  L as Be,
  O as ve,
  E as Ce,
  F as Me,
  w as Le,
  q as Fe,
  A as Ue,
  V as De,
} from "./BufferView.b3039ce1.js";
import {
  r as Pe,
  n as Ge,
  o as je,
  t as Ve,
} from "./resourceUtils.d8a25705.js";
import { o as ke, t as ze } from "./Indices.7165e4ff.js";
function He(n, t, e) {
  if (n.count !== t.count)
    return void Q.error(
      "source and destination buffers need to have the same number of elements"
    );
  const r = n.count,
    o = e[0],
    s = e[1],
    a = e[2],
    l = e[3],
    i = e[4],
    u = e[5],
    f = e[6],
    c = e[7],
    h = e[8],
    T = n.typedBuffer,
    w = n.typedBufferStride,
    m = t.typedBuffer,
    y = t.typedBufferStride;
  for (let b = 0; b < r; b++) {
    const S = b * w,
      _ = b * y,
      x = m[_],
      O = m[_ + 1],
      g = m[_ + 2],
      E = m[_ + 3];
    (T[S] = o * x + l * O + f * g),
      (T[S + 1] = s * x + i * O + c * g),
      (T[S + 2] = a * x + u * O + h * g),
      (T[S + 3] = E);
  }
}
function qe(n, t) {
  const e = Math.min(n.count, t.count),
    r = n.typedBuffer,
    o = n.typedBufferStride,
    s = t.typedBuffer,
    a = t.typedBufferStride;
  for (let l = 0; l < e; l++) {
    const i = l * o,
      u = l * a,
      f = s[u],
      c = s[u + 1],
      h = s[u + 2],
      T = f * f + c * c + h * h;
    if (T > 0) {
      const w = 1 / Math.sqrt(T);
      (r[i] = w * f), (r[i + 1] = w * c), (r[i + 2] = w * h);
    }
  }
}
function Ye(n, t, e) {
  const r = Math.min(n.count, t.count),
    o = n.typedBuffer,
    s = n.typedBufferStride,
    a = t.typedBuffer,
    l = t.typedBufferStride;
  for (let i = 0; i < r; i++) {
    const u = i * s,
      f = i * l;
    (o[u] = e * a[f]),
      (o[u + 1] = e * a[f + 1]),
      (o[u + 2] = e * a[f + 2]),
      (o[u + 3] = e * a[f + 3]);
  }
}
function Ke(n, t, e) {
  const r = Math.min(n.count, t.count),
    o = n.typedBuffer,
    s = n.typedBufferStride,
    a = t.typedBuffer,
    l = t.typedBufferStride;
  for (let i = 0; i < r; i++) {
    const u = i * s,
      f = i * l;
    (o[u] = a[f] >> e),
      (o[u + 1] = a[f + 1] >> e),
      (o[u + 2] = a[f + 2] >> e),
      (o[u + 3] = a[f + 3] >> e);
  }
}
function D(n, t) {
  const e = n.count;
  t || (t = new n.TypedArrayConstructor(e));
  for (let r = 0; r < e; r++) t[r] = n.get(r);
  return t;
}
function oe(n, t, e) {
  const r = n.typedBuffer,
    o = n.typedBufferStride,
    s = t.typedBuffer,
    a = t.typedBufferStride,
    l = e ? e.count : t.count;
  let i = (e && e.dstIndex ? e.dstIndex : 0) * o,
    u = (e && e.srcIndex ? e.srcIndex : 0) * a;
  for (let f = 0; f < l; ++f)
    (r[i] = s[u]), (r[i + 1] = s[u + 1]), (i += o), (u += a);
}
function $e(n, t, e) {
  const r = n.typedBuffer,
    o = n.typedBufferStride,
    s = t.typedBuffer,
    a = t.typedBufferStride,
    l = e ? e.count : t.count;
  let i = (e && e.dstIndex ? e.dstIndex : 0) * o,
    u = (e && e.srcIndex ? e.srcIndex : 0) * a;
  if (se(t.elementType)) {
    const f = ae(t.elementType);
    if (ie(t.elementType))
      for (let c = 0; c < l; ++c)
        (r[i] = Math.max(s[u] / f, -1)),
          (r[i + 1] = Math.max(s[u + 1] / f, -1)),
          (i += o),
          (u += a);
    else
      for (let c = 0; c < l; ++c)
        (r[i] = s[u] / f), (r[i + 1] = s[u + 1] / f), (i += o), (u += a);
  } else oe(n, t, e);
  return n;
}
function Je(n, t, e, r) {
  const o = n.typedBuffer,
    s = n.typedBufferStride,
    a = (r == null ? void 0 : r.count) ?? n.count;
  let l = ((r == null ? void 0 : r.dstIndex) ?? 0) * s;
  for (let i = 0; i < a; ++i) (o[l] = t), (o[l + 1] = e), (l += s);
}
function Xe(n, t, e) {
  const r = n.typedBuffer,
    o = n.typedBufferStride,
    s = t.typedBuffer,
    a = t.typedBufferStride,
    l = e ? e.count : t.count;
  let i = (e && e.dstIndex ? e.dstIndex : 0) * o,
    u = (e && e.srcIndex ? e.srcIndex : 0) * a;
  for (let f = 0; f < l; ++f)
    (r[i] = s[u]),
      (r[i + 1] = s[u + 1]),
      (r[i + 2] = s[u + 2]),
      (r[i + 3] = s[u + 3]),
      (i += o),
      (u += a);
}
function Qe(n, t, e, r, o, s) {
  const a = n.typedBuffer,
    l = n.typedBufferStride,
    i = (s == null ? void 0 : s.count) ?? n.count;
  let u = ((s == null ? void 0 : s.dstIndex) ?? 0) * l;
  for (let f = 0; f < i; ++f)
    (a[u] = t), (a[u + 1] = e), (a[u + 2] = r), (a[u + 3] = o), (u += l);
}
function Et(n, t) {
  return new n(new ArrayBuffer(t * n.ElementCount * ue(n.ElementType)));
}
Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      normalize: qe,
      scale: Ye,
      shiftRight: Ke,
      transformMat3: He,
      transformMat4: function (n, t, e) {
        if (n.count !== t.count)
          return void Q.error(
            "source and destination buffers need to have the same number of elements"
          );
        const r = n.count,
          o = e[0],
          s = e[1],
          a = e[2],
          l = e[3],
          i = e[4],
          u = e[5],
          f = e[6],
          c = e[7],
          h = e[8],
          T = e[9],
          w = e[10],
          m = e[11],
          y = e[12],
          b = e[13],
          S = e[14],
          _ = e[15],
          x = n.typedBuffer,
          O = n.typedBufferStride,
          g = t.typedBuffer,
          E = t.typedBufferStride;
        for (let N = 0; N < r; N++) {
          const R = N * O,
            v = N * E,
            C = g[v],
            M = g[v + 1],
            L = g[v + 2],
            F = g[v + 3];
          (x[R] = o * C + i * M + h * L + y * F),
            (x[R + 1] = s * C + u * M + T * L + b * F),
            (x[R + 2] = a * C + f * M + w * L + S * F),
            (x[R + 3] = l * C + c * M + m * L + _ * F);
        }
      },
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
),
  Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        copy: function (n, t, e) {
          const r = n.typedBuffer,
            o = n.typedBufferStride,
            s = t.typedBuffer,
            a = t.typedBufferStride,
            l = e ? e.count : t.count;
          let i = (e && e.dstIndex ? e.dstIndex : 0) * o,
            u = (e && e.srcIndex ? e.srcIndex : 0) * a;
          for (let f = 0; f < l; ++f) {
            for (let c = 0; c < 9; ++c) r[i + c] = s[u + c];
            (i += o), (u += a);
          }
        },
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        copy: function (n, t, e) {
          const r = n.typedBuffer,
            o = n.typedBufferStride,
            s = t.typedBuffer,
            a = t.typedBufferStride,
            l = e ? e.count : t.count;
          let i = (e && e.dstIndex ? e.dstIndex : 0) * o,
            u = (e && e.srcIndex ? e.srcIndex : 0) * a;
          for (let f = 0; f < l; ++f) {
            for (let c = 0; c < 16; ++c) r[i + c] = s[u + c];
            (i += o), (u += a);
          }
        },
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        copy: function (n, t, e) {
          const r = n.typedBuffer,
            o = n.typedBufferStride,
            s = t.typedBuffer,
            a = t.typedBufferStride,
            l = e ? e.count : t.count;
          let i = (e && e.dstIndex ? e.dstIndex : 0) * o,
            u = (e && e.srcIndex ? e.srcIndex : 0) * a;
          for (let f = 0; f < l; ++f) (r[i] = s[u]), (i += o), (u += a);
        },
        makeDense: D,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Object.freeze(
    Object.defineProperty(
      { __proto__: null, copy: oe, fill: Je, normalizeIntegerBuffer: $e },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Object.freeze(
    Object.defineProperty(
      { __proto__: null, copy: Xe, fill: Qe },
      Symbol.toStringTag,
      {
        value: "Module",
      }
    )
  );
let Rt = class {
  constructor(n) {
    this._streamDataRequester = n;
  }
  async loadJSON(n, t) {
    return this._load("json", n, t);
  }
  async loadBinary(n, t) {
    return W(n) ? (fe(t), Z(n)) : this._load("binary", n, t);
  }
  async loadImage(n, t) {
    return this._load("image", n, t);
  }
  async _load(n, t, e) {
    if (ee(this._streamDataRequester))
      return (await le(t, { responseType: We[n] })).data;
    const r = await ce(this._streamDataRequester.request(t, n, e));
    if (r.ok === !0) return r.value;
    throw (de(r.error), new d("", `Request for resource failed: ${r.error}`));
  }
};
const We = { image: "image", binary: "array-buffer", json: "json" };
let K = class {
  constructor(n) {
    (this._data = n),
      (this._offset4 = 0),
      (this._dataUint32 = new Uint32Array(
        this._data,
        0,
        Math.floor(this._data.byteLength / 4)
      ));
  }
  readUint32() {
    const n = this._offset4;
    return (this._offset4 += 1), this._dataUint32[n];
  }
  readUint8Array(n) {
    const t = 4 * this._offset4;
    return (this._offset4 += n / 4), new Uint8Array(this._data, t, n);
  }
  remainingBytes() {
    return this._data.byteLength - 4 * this._offset4;
  }
};
var B, $;
(function (n) {
  (n.SCALAR = "SCALAR"),
    (n.VEC2 = "VEC2"),
    (n.VEC3 = "VEC3"),
    (n.VEC4 = "VEC4"),
    (n.MAT2 = "MAT2"),
    (n.MAT3 = "MAT3"),
    (n.MAT4 = "MAT4");
})(B || (B = {})),
  (function (n) {
    (n[(n.ARRAY_BUFFER = 34962)] = "ARRAY_BUFFER"),
      (n[(n.ELEMENT_ARRAY_BUFFER = 34963)] = "ELEMENT_ARRAY_BUFFER");
  })($ || ($ = {}));
const ne = {
    baseColorFactor: [1, 1, 1, 1],
    metallicFactor: 1,
    roughnessFactor: 1,
  },
  Ze = {
    pbrMetallicRoughness: ne,
    emissiveFactor: [0, 0, 0],
    alphaMode: "OPAQUE",
    alphaCutoff: 0.5,
    doubleSided: !1,
  },
  et = { ESRI_externalColorMixMode: "tint" },
  J = (n = {}) => {
    const t = { ...ne, ...n.pbrMetallicRoughness },
      e = (function (r) {
        switch (r.ESRI_externalColorMixMode) {
          case "multiply":
          case "tint":
          case "ignore":
          case "replace":
            break;
          default:
            pe(r.ESRI_externalColorMixMode),
              (r.ESRI_externalColorMixMode = "tint");
        }
        return r;
      })({ ...et, ...n.extras });
    return { ...Ze, ...n, pbrMetallicRoughness: t, extras: e };
  },
  tt = {
    magFilter: j.LINEAR,
    minFilter: j.LINEAR_MIPMAP_LINEAR,
    wrapS: G.REPEAT,
    wrapT: G.REPEAT,
  },
  rt = (n) => ({ ...tt, ...n }),
  X = 1179937895,
  ot = 1313821514,
  nt = 5130562;
class A {
  constructor(t, e, r, o) {
    if (
      ((this._context = t),
      (this.uri = e),
      (this.json = r),
      (this._glbBuffer = o),
      (this._bufferLoaders = new Map()),
      (this._textureLoaders = new Map()),
      (this._textureCache = new Map()),
      (this._materialCache = new Map()),
      (this._nodeParentMap = new Map()),
      (this._nodeTransformCache = new Map()),
      (this._supportedExtensions = ["KHR_texture_basisu"]),
      (this._baseUri = (function (s) {
        let a, l;
        return (
          s.replace(
            /^(.*\/)?([^/]*)$/,
            (i, u, f) => ((a = u || ""), (l = f || ""), "")
          ),
          { dirPart: a, filePart: l }
        );
      })(this.uri).dirPart),
      this._checkVersionSupported(),
      this._checkRequiredExtensionsSupported(),
      r.scenes == null)
    )
      throw new d("gltf-loader-unsupported-feature", "Scenes must be defined.");
    if (r.meshes == null)
      throw new d("gltf-loader-unsupported-feature", "Meshes must be defined");
    if (r.nodes == null)
      throw new d("gltf-loader-unsupported-feature", "Nodes must be defined.");
    this._computeNodeParents();
  }
  static async load(t, e, r) {
    if (W(e)) {
      const a = he(e);
      if (a && a.mediaType !== "model/gltf-binary")
        try {
          const i = JSON.parse(a.isBase64 ? atob(a.data) : a.data);
          return new A(t, e, i);
        } catch {}
      const l = Z(e);
      if (A._isGLBData(l)) return this._fromGLBData(t, e, l);
    }
    if (e.endsWith(".gltf")) {
      const a = await t.loadJSON(e, r);
      return new A(t, e, a);
    }
    const o = await t.loadBinary(e, r);
    if (A._isGLBData(o)) return this._fromGLBData(t, e, o);
    const s = await t.loadJSON(e, r);
    return new A(t, e, s);
  }
  static _isGLBData(t) {
    if (t == null) return !1;
    const e = new K(t);
    return e.remainingBytes() >= 4 && e.readUint32() === X;
  }
  static async _fromGLBData(t, e, r) {
    const o = await A._parseGLBData(r);
    return new A(t, e, o.json, o.binaryData);
  }
  static async _parseGLBData(t) {
    const e = new K(t);
    if (e.remainingBytes() < 12)
      throw new d(
        "gltf-loader-error",
        "GLB binary data is insufficiently large."
      );
    const r = e.readUint32(),
      o = e.readUint32(),
      s = e.readUint32();
    if (r !== X)
      throw new d(
        "gltf-loader-error",
        "Magic first 4 bytes do not fit to expected GLB value."
      );
    if (t.byteLength < s)
      throw new d(
        "gltf-loader-error",
        "GLB binary data is smaller than header specifies."
      );
    if (o !== 2)
      throw new d(
        "gltf-loader-unsupported-feature",
        "An unsupported GLB container version was detected. Only version 2 is supported."
      );
    let a,
      l,
      i = 0;
    for (; e.remainingBytes() >= 8; ) {
      const u = e.readUint32(),
        f = e.readUint32();
      if (i === 0) {
        if (f !== ot)
          throw new d("gltf-loader-error", "First GLB chunk must be JSON.");
        if (u < 0) throw new d("gltf-loader-error", "No JSON data found.");
        a = await Pe(e.readUint8Array(u));
      } else if (i === 1) {
        if (f !== nt)
          throw new d(
            "gltf-loader-unsupported-feature",
            "Second GLB chunk expected to be BIN."
          );
        l = e.readUint8Array(u);
      } else
        P.getLogger("esri.views.3d.glTF").warn(
          "[Unsupported Feature] More than 2 GLB chunks detected. Skipping."
        );
      i += 1;
    }
    if (!a) throw new d("gltf-loader-error", "No GLB JSON chunk detected.");
    return { json: a, binaryData: l };
  }
  async getBuffer(t, e) {
    const r = this.json.buffers[t];
    if (r.uri == null) {
      if (this._glbBuffer == null)
        throw new d("gltf-loader-error", "GLB buffer not present");
      return this._glbBuffer;
    }
    const o = await this._getBufferLoader(t, e);
    if (o.byteLength !== r.byteLength)
      throw new d("gltf-loader-error", "Buffer byte lengths should match.");
    return o;
  }
  async _getBufferLoader(t, e) {
    const r = this._bufferLoaders.get(t);
    if (r) return r;
    const o = this.json.buffers[t].uri,
      s = this._context
        .loadBinary(this._resolveUri(o), e)
        .then((a) => new Uint8Array(a));
    return this._bufferLoaders.set(t, s), s;
  }
  async getAccessor(t, e) {
    if (!this.json.accessors)
      throw new d("gltf-loader-unsupported-feature", "Accessors missing.");
    const r = this.json.accessors[t];
    if ((r == null ? void 0 : r.bufferView) == null)
      throw new d(
        "gltf-loader-unsupported-feature",
        "Some accessor does not specify a bufferView."
      );
    if (r.type in [B.MAT2, B.MAT3, B.MAT4])
      throw new d(
        "gltf-loader-unsupported-feature",
        `AttributeType ${r.type} is not supported`
      );
    const o = this.json.bufferViews[r.bufferView],
      s = await this.getBuffer(o.buffer, e),
      a = it[r.type],
      l = ut[r.componentType],
      i = a * l,
      u = o.byteStride || i;
    return {
      raw: s.buffer,
      byteStride: u,
      byteOffset: s.byteOffset + (o.byteOffset || 0) + (r.byteOffset || 0),
      entryCount: r.count,
      isDenselyPacked: u === i,
      componentCount: a,
      componentByteSize: l,
      componentType: r.componentType,
      min: r.min,
      max: r.max,
      normalized: !!r.normalized,
    };
  }
  async getIndexData(t, e) {
    if (t.indices == null) return;
    const r = await this.getAccessor(t.indices, e);
    if (r.isDenselyPacked)
      switch (r.componentType) {
        case p.UNSIGNED_BYTE:
          return new Uint8Array(r.raw, r.byteOffset, r.entryCount);
        case p.UNSIGNED_SHORT:
          return new Uint16Array(r.raw, r.byteOffset, r.entryCount);
        case p.UNSIGNED_INT:
          return new Uint32Array(r.raw, r.byteOffset, r.entryCount);
      }
    else
      switch (r.componentType) {
        case p.UNSIGNED_BYTE:
          return D(this._wrapAccessor(Ne, r));
        case p.UNSIGNED_SHORT:
          return D(this._wrapAccessor(Re, r));
        case p.UNSIGNED_INT:
          return D(this._wrapAccessor(Ee, r));
      }
  }
  async getPositionData(t, e) {
    if (t.attributes.POSITION == null)
      throw new d(
        "gltf-loader-unsupported-feature",
        "No POSITION vertex data found."
      );
    const r = await this.getAccessor(t.attributes.POSITION, e);
    if (r.componentType !== p.FLOAT)
      throw new d(
        "gltf-loader-unsupported-feature",
        "Expected type FLOAT for POSITION vertex attribute, but found " +
          p[r.componentType]
      );
    if (r.componentCount !== 3)
      throw new d(
        "gltf-loader-unsupported-feature",
        "POSITION vertex attribute must have 3 components, but found " +
          r.componentCount.toFixed()
      );
    return this._wrapAccessor(V, r);
  }
  async getNormalData(t, e) {
    if (t.attributes.NORMAL == null)
      throw new d("gltf-loader-error", "No NORMAL vertex data found.");
    const r = await this.getAccessor(t.attributes.NORMAL, e);
    if (r.componentType !== p.FLOAT)
      throw new d(
        "gltf-loader-unsupported-feature",
        "Expected type FLOAT for NORMAL vertex attribute, but found " +
          p[r.componentType]
      );
    if (r.componentCount !== 3)
      throw new d(
        "gltf-loader-unsupported-feature",
        "NORMAL vertex attribute must have 3 components, but found " +
          r.componentCount.toFixed()
      );
    return this._wrapAccessor(V, r);
  }
  async getTangentData(t, e) {
    if (t.attributes.TANGENT == null)
      throw new d("gltf-loader-error", "No TANGENT vertex data found.");
    const r = await this.getAccessor(t.attributes.TANGENT, e);
    if (r.componentType !== p.FLOAT)
      throw new d(
        "gltf-loader-unsupported-feature",
        "Expected type FLOAT for TANGENT vertex attribute, but found " +
          p[r.componentType]
      );
    if (r.componentCount !== 4)
      throw new d(
        "gltf-loader-unsupported-feature",
        "TANGENT vertex attribute must have 4 components, but found " +
          r.componentCount.toFixed()
      );
    return new q(
      r.raw,
      r.byteOffset,
      r.byteStride,
      r.byteOffset + r.byteStride * r.entryCount
    );
  }
  async getTextureCoordinates(t, e) {
    if (t.attributes.TEXCOORD_0 == null)
      throw new d("gltf-loader-error", "No TEXCOORD_0 vertex data found.");
    const r = await this.getAccessor(t.attributes.TEXCOORD_0, e);
    if (r.componentCount !== 2)
      throw new d(
        "gltf-loader-unsupported-feature",
        "TEXCOORD_0 vertex attribute must have 2 components, but found " +
          r.componentCount.toFixed()
      );
    if (r.componentType === p.FLOAT) return this._wrapAccessor(Y, r);
    if (!r.normalized)
      throw new d(
        "gltf-loader-unsupported-feature",
        "Integer component types are only supported for a normalized accessor for TEXCOORD_0."
      );
    return (function (o) {
      switch (o.componentType) {
        case p.BYTE:
          return new De(
            o.raw,
            o.byteOffset,
            o.byteStride,
            o.byteOffset + o.byteStride * o.entryCount
          );
        case p.UNSIGNED_BYTE:
          return new Ue(
            o.raw,
            o.byteOffset,
            o.byteStride,
            o.byteOffset + o.byteStride * o.entryCount
          );
        case p.SHORT:
          return new Fe(
            o.raw,
            o.byteOffset,
            o.byteStride,
            o.byteOffset + o.byteStride * o.entryCount
          );
        case p.UNSIGNED_SHORT:
          return new Le(
            o.raw,
            o.byteOffset,
            o.byteStride,
            o.byteOffset + o.byteStride * o.entryCount
          );
        case p.UNSIGNED_INT:
          return new Me(
            o.raw,
            o.byteOffset,
            o.byteStride,
            o.byteOffset + o.byteStride * o.entryCount
          );
        case p.FLOAT:
          return new Y(
            o.raw,
            o.byteOffset,
            o.byteStride,
            o.byteOffset + o.byteStride * o.entryCount
          );
      }
    })(r);
  }
  async getVertexColors(t, e) {
    if (t.attributes.COLOR_0 == null)
      throw new d("gltf-loader-error", "No COLOR_0 vertex data found.");
    const r = await this.getAccessor(t.attributes.COLOR_0, e);
    if (r.componentCount !== 4 && r.componentCount !== 3)
      throw new d(
        "gltf-loader-unsupported-feature",
        "COLOR_0 attribute must have 3 or 4 components, but found " +
          r.componentCount.toFixed()
      );
    if (r.componentCount === 4) {
      if (r.componentType === p.FLOAT) return this._wrapAccessor(q, r);
      if (r.componentType === p.UNSIGNED_BYTE) return this._wrapAccessor(Ie, r);
      if (r.componentType === p.UNSIGNED_SHORT)
        return this._wrapAccessor(Be, r);
    } else if (r.componentCount === 3) {
      if (r.componentType === p.FLOAT) return this._wrapAccessor(V, r);
      if (r.componentType === p.UNSIGNED_BYTE) return this._wrapAccessor(ve, r);
      if (r.componentType === p.UNSIGNED_SHORT)
        return this._wrapAccessor(Ce, r);
    }
    throw new d(
      "gltf-loader-unsupported-feature",
      "Unsupported component type for COLOR_0 attribute: " + p[r.componentType]
    );
  }
  hasPositions(t) {
    return t.attributes.POSITION !== void 0;
  }
  hasNormals(t) {
    return t.attributes.NORMAL !== void 0;
  }
  hasVertexColors(t) {
    return t.attributes.COLOR_0 !== void 0;
  }
  hasTextureCoordinates(t) {
    return t.attributes.TEXCOORD_0 !== void 0;
  }
  hasTangents(t) {
    return t.attributes.TANGENT !== void 0;
  }
  async getMaterial(t, e, r) {
    var s, a, l, i, u, f, c, h, T, w;
    let o = t.material ? this._materialCache.get(t.material) : void 0;
    if (!o) {
      const m = t.material != null ? J(this.json.materials[t.material]) : J(),
        y = m.pbrMetallicRoughness,
        b = this.hasVertexColors(t),
        S = this.getTexture(y.baseColorTexture, e),
        _ = this.getTexture(m.normalTexture, e),
        x = r ? this.getTexture(m.occlusionTexture, e) : void 0,
        O = r ? this.getTexture(m.emissiveTexture, e) : void 0,
        g = r ? this.getTexture(y.metallicRoughnessTexture, e) : void 0,
        E = t.material != null ? t.material : -1;
      o = {
        alphaMode: m.alphaMode,
        alphaCutoff: m.alphaCutoff,
        color: y.baseColorFactor,
        doubleSided: !!m.doubleSided,
        colorTexture: await S,
        normalTexture: await _,
        name: m.name,
        id: E,
        occlusionTexture: await x,
        emissiveTexture: await O,
        emissiveFactor: m.emissiveFactor,
        metallicFactor: y.metallicFactor,
        roughnessFactor: y.roughnessFactor,
        metallicRoughnessTexture: await g,
        hasVertexColors: b,
        ESRI_externalColorMixMode: m.extras.ESRI_externalColorMixMode,
        colorTextureTransform:
          (a =
            (s = y == null ? void 0 : y.baseColorTexture) == null
              ? void 0
              : s.extensions) == null
            ? void 0
            : a.KHR_texture_transform,
        normalTextureTransform:
          (i = (l = m.normalTexture) == null ? void 0 : l.extensions) == null
            ? void 0
            : i.KHR_texture_transform,
        occlusionTextureTransform:
          (f = (u = m.occlusionTexture) == null ? void 0 : u.extensions) == null
            ? void 0
            : f.KHR_texture_transform,
        emissiveTextureTransform:
          (h = (c = m.emissiveTexture) == null ? void 0 : c.extensions) == null
            ? void 0
            : h.KHR_texture_transform,
        metallicRoughnessTextureTransform:
          (w =
            (T = y == null ? void 0 : y.metallicRoughnessTexture) == null
              ? void 0
              : T.extensions) == null
            ? void 0
            : w.KHR_texture_transform,
      };
    }
    return o;
  }
  async getTexture(t, e) {
    if (!t) return;
    if ((t.texCoord || 0) !== 0)
      throw new d(
        "gltf-loader-unsupported-feature",
        "Only TEXCOORD with index 0 is supported."
      );
    const r = t.index,
      o = this.json.textures[r],
      s = rt(o.sampler != null ? this.json.samplers[o.sampler] : {}),
      a = this._getTextureSourceId(o),
      l = this.json.images[a],
      i = await this._loadTextureImageData(r, o, e);
    return ye(this._textureCache, r, () => {
      const u = (c) => c === 33071 || c === 33648 || c === 10497,
        f = (c) => {
          throw new d(
            "gltf-loader-error",
            `Unexpected TextureSampler WrapMode: ${c}`
          );
        };
      return {
        data: i,
        wrapS: u(s.wrapS) ? s.wrapS : f(s.wrapS),
        wrapT: u(s.wrapT) ? s.wrapT : f(s.wrapT),
        minFilter: s.minFilter,
        name: l.name,
        id: r,
      };
    });
  }
  getNodeTransform(t) {
    if (t === void 0) return st;
    let e = this._nodeTransformCache.get(t);
    if (!e) {
      const r = this.getNodeTransform(this._getNodeParent(t)),
        o = this.json.nodes[t];
      o.matrix
        ? (e = Te(te(), r, o.matrix))
        : o.translation || o.rotation || o.scale
        ? ((e = z(r)),
          o.translation && we(e, e, o.translation),
          o.rotation && ((U[3] = Oe(U, o.rotation)), xe(e, e, U[3], U)),
          o.scale && ge(e, e, o.scale))
        : (e = z(r)),
        this._nodeTransformCache.set(t, e);
    }
    return e;
  }
  _wrapAccessor(t, e) {
    return new t(
      e.raw,
      e.byteOffset,
      e.byteStride,
      e.byteOffset +
        e.byteStride * (e.entryCount - 1) +
        e.componentByteSize * e.componentCount
    );
  }
  _resolveUri(t) {
    return _e(t, this._baseUri);
  }
  _getNodeParent(t) {
    return this._nodeParentMap.get(t);
  }
  _checkVersionSupported() {
    const t = re.parse(this.json.asset.version, "glTF");
    at.validate(t);
  }
  _checkRequiredExtensionsSupported() {
    const t = this.json;
    if (
      t.extensionsRequired &&
      !t.extensionsRequired.every((e) => this._supportedExtensions.includes(e))
    )
      throw new d(
        "gltf-loader-unsupported-feature",
        "gltf loader was not able to load unsupported feature. Required extensions: " +
          t.extensionsRequired.join(", ")
      );
  }
  _computeNodeParents() {
    this.json.nodes.forEach((t, e) => {
      t.children &&
        t.children.forEach((r) => {
          this._nodeParentMap.set(r, e);
        });
    });
  }
  async _loadTextureImageData(t, e, r) {
    const o = this._textureLoaders.get(t);
    if (o) return o;
    const s = this._createTextureLoader(e, r);
    return this._textureLoaders.set(t, s), s;
  }
  _getTextureSourceId(t) {
    if (t.extensions !== void 0 && t.extensions.KHR_texture_basisu !== null)
      return t.extensions.KHR_texture_basisu.source;
    if (t.source !== null) return t.source;
    throw new d(
      "gltf-loader-unsupported-feature",
      "Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag."
    );
  }
  async _createTextureLoader(t, e) {
    const r = this._getTextureSourceId(t),
      o = this.json.images[r];
    if (o.uri) {
      if (o.uri.endsWith(".ktx2")) {
        const i = await this._context.loadBinary(this._resolveUri(o.uri), e);
        return new Ge(new Uint8Array(i));
      }
      return this._context.loadImage(this._resolveUri(o.uri), e);
    }
    if (o.bufferView == null)
      throw new d(
        "gltf-loader-unsupported-feature",
        "Image bufferView must be defined."
      );
    if (o.mimeType == null)
      throw new d(
        "gltf-loader-unsupported-feature",
        "Image mimeType must be defined."
      );
    const s = this.json.bufferViews[o.bufferView],
      a = await this.getBuffer(s.buffer, e);
    if (s.byteStride != null)
      throw new d(
        "gltf-loader-unsupported-feature",
        "byteStride not supported for image buffer"
      );
    const l = a.byteOffset + (s.byteOffset || 0);
    return je(new Uint8Array(a.buffer, l, s.byteLength), o.mimeType);
  }
  async getLoadedBuffersSize() {
    if (this._glbBuffer) return this._glbBuffer.byteLength;
    const t = await H(Array.from(this._bufferLoaders.values())),
      e = await H(Array.from(this._textureLoaders.values()));
    return (
      t.reduce((r, o) => r + ((o == null ? void 0 : o.byteLength) ?? 0), 0) +
      e.reduce(
        (r, o) =>
          r + (o ? (Ve(o) ? o.data.byteLength : o.width * o.height * 4) : 0),
        0
      )
    );
  }
}
const st = me(te(), Math.PI / 2),
  at = new re(2, 0, "glTF"),
  U = Ae(),
  it = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 },
  ut = {
    [p.BYTE]: 1,
    [p.UNSIGNED_BYTE]: 1,
    [p.SHORT]: 2,
    [p.UNSIGNED_SHORT]: 2,
    [p.FLOAT]: 4,
    [p.UNSIGNED_INT]: 4,
  };
let ft = 0;
async function Nt(n, t, e = {}, r = !0) {
  const o = await A.load(n, t, e),
    s = "gltf_" + ft++,
    a = { lods: [], materials: new Map(), textures: new Map(), meta: lt(o) },
    l = !(
      !o.json.asset.extras || o.json.asset.extras.ESRI_type !== "symbolResource"
    ),
    i = new Map();
  await ct(o, async (f, c, h, T) => {
    const w = i.get(h) ?? 0;
    i.set(h, w + 1);
    const m = f.mode !== void 0 ? f.mode : I.TRIANGLES,
      y =
        m === I.TRIANGLES || m === I.TRIANGLE_STRIP || m === I.TRIANGLE_FAN
          ? m
          : null;
    if (ee(y))
      return void P.getLogger("esri.views.3d.glTF").warn(
        "[Unsupported Feature] Unsupported primitive mode (" +
          I[m] +
          "). Skipping primitive."
      );
    if (!o.hasPositions(f))
      return void P.getLogger("esri.views.3d.glTF").warn(
        "Skipping primitive without POSITION vertex attribute."
      );
    const b = o.getPositionData(f, e),
      S = o.getMaterial(f, e, r),
      _ = o.hasNormals(f) ? o.getNormalData(f, e) : null,
      x = o.hasTangents(f) ? o.getTangentData(f, e) : null,
      O = o.hasTextureCoordinates(f) ? o.getTextureCoordinates(f, e) : null,
      g = o.hasVertexColors(f) ? o.getVertexColors(f, e) : null,
      E = o.getIndexData(f, e),
      N = {
        transform: z(c),
        attributes: {
          position: await b,
          normal: _ ? await _ : null,
          texCoord0: O ? await O : null,
          color: g ? await g : null,
          tangent: x ? await x : null,
        },
        indices: await E,
        primitiveType: y,
        material: pt(a, await S, s),
      };
    let R = null;
    k(a.meta) &&
      k(a.meta.ESRI_lod) &&
      a.meta.ESRI_lod.metric === "screenSpaceRadius" &&
      (R = a.meta.ESRI_lod.thresholds[h]),
      (a.lods[h] = a.lods[h] || { parts: [], name: T, lodThreshold: R }),
      (a.lods[h].parts[w] = N);
  });
  for (const f of a.lods) f.parts = f.parts.filter((c) => !!c);
  const u = await o.getLoadedBuffersSize();
  return {
    model: a,
    meta: { isEsriSymbolResource: l, uri: o.uri },
    customMeta: {},
    size: u,
  };
}
function lt(n) {
  const t = n.json;
  let e = null;
  return (
    t.nodes.forEach((r) => {
      const o = r.extras;
      k(o) && (o.ESRI_proxyEllipsoid || o.ESRI_lod) && (e = o);
    }),
    e
  );
}
async function ct(n, t) {
  const e = n.json,
    r = e.scenes[e.scene || 0].nodes,
    o = r.length > 1,
    s = [];
  for (const l of r) {
    const i = e.nodes[l];
    s.push(a(l, 0)),
      dt(i) && !o && i.extensions.MSFT_lod.ids.forEach((u, f) => a(u, f + 1));
  }
  async function a(l, i) {
    const u = e.nodes[l],
      f = n.getNodeTransform(l);
    if (
      (u.weights != null &&
        P.getLogger("esri.views.3d.glTF").warn(
          "[Unsupported Feature] Morph targets are not supported."
        ),
      u.mesh != null)
    ) {
      const c = e.meshes[u.mesh];
      for (const h of c.primitives) s.push(t(h, f, i, c.name));
    }
    for (const c of u.children || []) s.push(a(c, i));
  }
  await Promise.all(s);
}
function dt(n) {
  return (
    n.extensions &&
    n.extensions.MSFT_lod &&
    Array.isArray(n.extensions.MSFT_lod.ids)
  );
}
function pt(n, t, e) {
  const r = (s) => {
      const a = `${e}_tex_${s && s.id}${s && s.name ? "_" + s.name : ""}`;
      if (s && !n.textures.has(a)) {
        const l = (function (i, u = {}) {
          return {
            data: i,
            parameters: {
              wrap: { s: G.REPEAT, t: G.REPEAT, ...u.wrap },
              noUnpackFlip: !0,
              mipmap: !1,
              ...u,
            },
          };
        })(s.data, {
          wrap: { s: s.wrapS, t: s.wrapT },
          mipmap: mt.includes(s.minFilter),
          noUnpackFlip: !0,
        });
        n.textures.set(a, l);
      }
      return a;
    },
    o = `${e}_mat_${t.id}_${t.name}`;
  if (!n.materials.has(o)) {
    const s = (function (a = {}) {
      return {
        color: [1, 1, 1],
        opacity: 1,
        alphaMode: "OPAQUE",
        alphaCutoff: 0.5,
        doubleSided: !1,
        castShadows: !0,
        receiveShadows: !0,
        receiveAmbientOcclustion: !0,
        textureColor: null,
        textureNormal: null,
        textureOcclusion: null,
        textureEmissive: null,
        textureMetallicRoughness: null,
        colorTextureTransform: null,
        normalTextureTransform: null,
        occlusionTextureTransform: null,
        emissiveTextureTransform: null,
        metallicRoughnessTextureTransform: null,
        emissiveFactor: [0, 0, 0],
        metallicFactor: 1,
        roughnessFactor: 1,
        colorMixMode: "multiply",
        ...a,
      };
    })({
      color: [t.color[0], t.color[1], t.color[2]],
      opacity: t.color[3],
      alphaMode: t.alphaMode,
      alphaCutoff: t.alphaCutoff,
      doubleSided: t.doubleSided,
      colorMixMode: t.ESRI_externalColorMixMode,
      textureColor: t.colorTexture ? r(t.colorTexture) : void 0,
      textureNormal: t.normalTexture ? r(t.normalTexture) : void 0,
      textureOcclusion: t.occlusionTexture ? r(t.occlusionTexture) : void 0,
      textureEmissive: t.emissiveTexture ? r(t.emissiveTexture) : void 0,
      textureMetallicRoughness: t.metallicRoughnessTexture
        ? r(t.metallicRoughnessTexture)
        : void 0,
      emissiveFactor: [
        t.emissiveFactor[0],
        t.emissiveFactor[1],
        t.emissiveFactor[2],
      ],
      colorTextureTransform: t.colorTextureTransform,
      normalTextureTransform: t.normalTextureTransform,
      occlusionTextureTransform: t.occlusionTextureTransform,
      emissiveTextureTransform: t.emissiveTextureTransform,
      metallicRoughnessTextureTransform: t.metallicRoughnessTextureTransform,
      metallicFactor: t.metallicFactor,
      roughnessFactor: t.roughnessFactor,
    });
    n.materials.set(o, s);
  }
  return o;
}
const mt = [j.LINEAR_MIPMAP_LINEAR, j.LINEAR_MIPMAP_NEAREST];
function It(n, t = ke) {
  return typeof n == "number" ? t(n) : be(n) || Se(n) ? new Uint32Array(n) : n;
}
function Bt(n) {
  const t = typeof n == "number" ? n : n.length;
  if (t < 3) return [];
  const e = t - 2,
    r = ze(e);
  if (typeof n == "number") {
    let o = 0;
    for (let s = 0; s < e; s += 1)
      s % 2 == 0
        ? ((r[o++] = s), (r[o++] = s + 1), (r[o++] = s + 2))
        : ((r[o++] = s + 1), (r[o++] = s), (r[o++] = s + 2));
  } else {
    let o = 0;
    for (let s = 0; s < e; s += 1)
      if (s % 2 == 0) {
        const a = n[s],
          l = n[s + 1],
          i = n[s + 2];
        (r[o++] = a), (r[o++] = l), (r[o++] = i);
      } else {
        const a = n[s + 1],
          l = n[s],
          i = n[s + 2];
        (r[o++] = a), (r[o++] = l), (r[o++] = i);
      }
  }
  return r;
}
function vt(n) {
  const t = typeof n == "number" ? n : n.length;
  if (t < 3) return new Uint16Array(0);
  const e = t - 2,
    r = e <= 65536 ? new Uint16Array(3 * e) : new Uint32Array(3 * e);
  if (typeof n == "number") {
    let o = 0;
    for (let s = 0; s < e; ++s)
      (r[o++] = 0), (r[o++] = s + 1), (r[o++] = s + 2);
    return r;
  }
  {
    const o = n[0];
    let s = n[1],
      a = 0;
    for (let l = 0; l < e; ++l) {
      const i = n[l + 2];
      (r[a++] = o), (r[a++] = s), (r[a++] = i), (s = i);
    }
    return r;
  }
}
const Ct = 2.1;
export {
  He as a,
  $e as b,
  Ye as c,
  It as d,
  Xe as e,
  Bt as f,
  qe as g,
  Je as h,
  vt as i,
  Ke as j,
  Nt as m,
  Rt as n,
  Ct as o,
  Et as r,
  Qe as t,
};
