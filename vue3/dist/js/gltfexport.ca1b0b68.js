import {
  L as U,
  t as j,
  c as M,
  fn as H,
  fm as rt,
  fo as nt,
  r as E,
  R as v,
  b as S,
  Q as at,
  fB as Z,
  lj as ot,
  fD as Y,
  lz as Q,
  aN as ht,
  dt as ct,
  er as ft,
  lA as ut,
} from "./index.8fd7165c.js";
import { K as lt, k as dt } from "./quat.17ee06b3.js";
import { o as _t, r as pt, e as mt } from "./quatf64.75f9f553.js";
import { c as gt } from "./meshFeatureSet.973954c4.js";
import { f as Et, i as wt } from "./georeference.db8759a2.js";
import { C as _, D as T } from "./enums.64ab819c.js";
import { o as J, i as At, g as Tt, s as bt } from "./imageutils.463df5ec.js";
import { t as P } from "./resourceUtils.d8a25705.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./mat3f64.eb921732.js";
import "./imageUtils.c2d0d1ae.js";
import "./earcut.9f54f087.js";
import "./deduplicate.744c1fe7.js";
import "./Indices.7165e4ff.js";
import "./mat4f64.b473928c.js";
import "./spatialReferenceEllipsoidUtils.0049fd16.js";
import "./BufferView.b3039ce1.js";
import "./vec33.5889ffa1.js";
import "./basicInterfaces.b7051eb1.js";
var I, x, b, y, m, K, C, W;
(function (i) {
  (i[(i.JSON = 1313821514)] = "JSON"), (i[(i.BIN = 5130562)] = "BIN");
})(I || (I = {}));
class A {
  constructor(t, e) {
    if (!t) throw new Error("GLB requires a JSON gltf chunk");
    (this._length = A.HEADER_SIZE), (this._length += A.CHUNK_HEADER_SIZE);
    const s = this._textToArrayBuffer(t);
    if (
      ((this._length += this._alignTo(s.byteLength, 4)),
      e &&
        ((this._length += A.CHUNK_HEADER_SIZE),
        (this._length += e.byteLength),
        e.byteLength % 4))
    )
      throw new Error(
        "Expected BIN chunk length to be divisible by 4 at this point"
      );
    (this.buffer = new ArrayBuffer(this._length)),
      (this._outView = new DataView(this.buffer)),
      this._writeHeader();
    const n = this._writeChunk(s, 12, I.JSON, 32);
    e && this._writeChunk(e, n, I.BIN);
  }
  _writeHeader() {
    this._outView.setUint32(0, A.MAGIC, !0),
      this._outView.setUint32(4, A.VERSION, !0),
      this._outView.setUint32(8, this._length, !0);
  }
  _writeChunk(t, e, s, n = 0) {
    const r = this._alignTo(t.byteLength, 4);
    for (
      this._outView.setUint32(e, r, !0),
        this._outView.setUint32((e += 4), s, !0),
        this._writeArrayBuffer(
          this._outView.buffer,
          t,
          (e += 4),
          0,
          t.byteLength
        ),
        e += t.byteLength;
      e % 4;

    )
      n && this._outView.setUint8(e, n), e++;
    return e;
  }
  _writeArrayBuffer(t, e, s, n, r) {
    new Uint8Array(t, s, r).set(new Uint8Array(e, n, r), 0);
  }
  _textToArrayBuffer(t) {
    return new TextEncoder().encode(t).buffer;
  }
  _alignTo(t, e) {
    return e * Math.ceil(t / e);
  }
}
(A.HEADER_SIZE = 12),
  (A.CHUNK_HEADER_SIZE = 8),
  (A.MAGIC = 1179937895),
  (A.VERSION = 2),
  (function (i) {
    (i[(i.External = 0)] = "External"),
      (i[(i.DataURI = 1)] = "DataURI"),
      (i[(i.GLB = 2)] = "GLB");
  })(x || (x = {})),
  (function (i) {
    (i[(i.External = 0)] = "External"),
      (i[(i.DataURI = 1)] = "DataURI"),
      (i[(i.GLB = 2)] = "GLB");
  })(b || (b = {})),
  (function (i) {
    (i[(i.ARRAY_BUFFER = 34962)] = "ARRAY_BUFFER"),
      (i[(i.ELEMENT_ARRAY_BUFFER = 34963)] = "ELEMENT_ARRAY_BUFFER");
  })(y || (y = {})),
  (function (i) {
    (i.SCALAR = "SCALAR"),
      (i.VEC2 = "VEC2"),
      (i.VEC3 = "VEC3"),
      (i.VEC4 = "VEC4"),
      (i.MAT2 = "MAT2"),
      (i.MAT3 = "MAT3"),
      (i.MAT4 = "MAT4");
  })(m || (m = {})),
  (function (i) {
    (i[(i.POINTS = 0)] = "POINTS"),
      (i[(i.LINES = 1)] = "LINES"),
      (i[(i.LINE_LOOP = 2)] = "LINE_LOOP"),
      (i[(i.LINE_STRIP = 3)] = "LINE_STRIP"),
      (i[(i.TRIANGLES = 4)] = "TRIANGLES"),
      (i[(i.TRIANGLE_STRIP = 5)] = "TRIANGLE_STRIP"),
      (i[(i.TRIANGLE_FAN = 6)] = "TRIANGLE_FAN");
  })(K || (K = {})),
  (function (i) {
    (i.OPAQUE = "OPAQUE"), (i.MASK = "MASK"), (i.BLEND = "BLEND");
  })(C || (C = {})),
  (function (i) {
    (i[(i.NoColor = 0)] = "NoColor"),
      (i[(i.FaceColor = 1)] = "FaceColor"),
      (i[(i.VertexColor = 2)] = "VertexColor");
  })(W || (W = {}));
class X {
  constructor(t) {
    (this._gltf = t),
      (this._bufferViews = []),
      (this._isFinalized = !1),
      t.buffers || (t.buffers = []),
      (this.index = t.buffers.length);
    const e = { byteLength: -1 };
    t.buffers.push(e), (this._buffer = e);
  }
  addBufferView(t, e, s) {
    if (this._finalizePromise)
      throw new Error("Cannot add buffer view after fiinalizing buffer");
    const n = new (class {
      constructor(r, a, o, h, c) {
        (this._buffer = r),
          (this._componentType = o),
          (this._dataType = h),
          (this._data = []),
          (this._isFinalized = !1),
          (this._accessorIndex = -1),
          (this._accessorAttribute = null),
          (this._accessorMin = null),
          (this._accessorMax = null),
          a.bufferViews || (a.bufferViews = []),
          (this.index = a.bufferViews.length),
          (this._bufferView = { buffer: r.index, byteLength: -1, target: c });
        const l = this._getElementSize();
        l >= 4 &&
          c !== y.ELEMENT_ARRAY_BUFFER &&
          (this._bufferView.byteStride = l),
          a.bufferViews.push(this._bufferView),
          (this._numComponentsForDataType =
            this._calculateNumComponentsForDataType());
      }
      push(r) {
        const a = this._data.length;
        if ((this._data.push(r), this._accessorIndex >= 0)) {
          const o = a % this._numComponentsForDataType,
            h = this._accessorMin[o];
          this._accessorMin[o] = typeof h != "number" ? r : Math.min(h, r);
          const c = this._accessorMax[o];
          this._accessorMax[o] = typeof c != "number" ? r : Math.max(c, r);
        }
      }
      get dataSize() {
        return this._data.length * this._sizeComponentType();
      }
      get byteSize() {
        return (function (r, a) {
          return a * Math.ceil(r / a);
        })(this.dataSize, 4);
      }
      getByteOffset() {
        if (!this._isFinalized)
          throw new Error("Cannot get BufferView offset until it is finalized");
        return this._buffer.getByteOffset(this);
      }
      get byteOffset() {
        if (!this._isFinalized)
          throw new Error("Cannot get BufferView offset until it is finalized");
        return this._buffer.getByteOffset(this);
      }
      _createTypedArray(r, a) {
        switch (this._componentType) {
          case _.BYTE:
            return new Int8Array(r, a);
          case _.FLOAT:
            return new Float32Array(r, a);
          case _.SHORT:
            return new Int16Array(r, a);
          case _.UNSIGNED_BYTE:
            return new Uint8Array(r, a);
          case _.UNSIGNED_INT:
            return new Uint32Array(r, a);
          case _.UNSIGNED_SHORT:
            return new Uint16Array(r, a);
        }
      }
      writeOutToBuffer(r, a) {
        this._createTypedArray(r, a).set(this._data);
      }
      writeAsync(r) {
        if (this._asyncWritePromise)
          throw new Error(
            "Can't write multiple bufferView values asynchronously"
          );
        return (
          (this._asyncWritePromise = r.then((a) => {
            const o = new Uint8Array(a);
            for (let h = 0; h < o.length; ++h) this._data.push(o[h]);
            delete this._asyncWritePromise;
          })),
          this._asyncWritePromise
        );
      }
      startAccessor(r) {
        if (this._accessorIndex >= 0)
          throw new Error(
            "Accessor was started without ending the previous one"
          );
        (this._accessorIndex = this._data.length),
          (this._accessorAttribute = r);
        const a = this._numComponentsForDataType;
        (this._accessorMin = new Array(a)), (this._accessorMax = new Array(a));
      }
      endAccessor() {
        if (this._accessorIndex < 0)
          throw new Error(
            "An accessor was not started, but was attempted to be ended"
          );
        const r = this._getElementSize(),
          a = this._numComponentsForDataType,
          o = (this._data.length - this._accessorIndex) / a;
        if (o % 1)
          throw new Error(
            "An accessor was ended with missing component values"
          );
        for (let c = 0; c < this._accessorMin.length; ++c)
          typeof this._accessorMin[c] != "number" && (this._accessorMin[c] = 0),
            typeof this._accessorMax[c] != "number" &&
              (this._accessorMax[c] = 0);
        const h = {
          byteOffset: r * (this._accessorIndex / a),
          componentType: this._componentType,
          count: o,
          type: this._dataType,
          min: this._accessorMin,
          max: this._accessorMax,
          name: this._accessorAttribute,
        };
        switch (this._accessorAttribute) {
          case "TEXCOORD_0":
          case "TEXCOORD_1":
          case "COLOR_0":
          case "WEIGHTS_0":
            switch (this._componentType) {
              case _.UNSIGNED_BYTE:
              case _.UNSIGNED_SHORT:
                h.normalized = !0;
            }
        }
        return (
          (this._accessorIndex = -1),
          (this._accessorAttribute = null),
          (this._accessorMin = null),
          (this._accessorMax = null),
          h
        );
      }
      get finalized() {
        return this._finalizedPromise
          ? this._finalizedPromise
          : this._isFinalized
          ? (this._finalizedPromise = Promise.resolve())
          : (this._finalizedPromise = new Promise(
              (r) => (this._finalizedPromiseResolve = r)
            ));
      }
      finalize() {
        const r = this._bufferView;
        return new Promise((a) => {
          const o = this._buffer.getViewFinalizePromises(this);
          this._asyncWritePromise && o.push(this._asyncWritePromise), a(U(o));
        }).then(() => {
          (this._isFinalized = !0),
            (r.byteOffset = this.getByteOffset()),
            (r.byteLength = this.dataSize),
            this._finalizedPromiseResolve && this._finalizedPromiseResolve();
        });
      }
      _getElementSize() {
        return this._sizeComponentType() * this._numComponentsForDataType;
      }
      _sizeComponentType() {
        switch (this._componentType) {
          case _.BYTE:
          case _.UNSIGNED_BYTE:
            return 1;
          case _.SHORT:
          case _.UNSIGNED_SHORT:
            return 2;
          case _.UNSIGNED_INT:
          case _.FLOAT:
            return 4;
        }
      }
      _calculateNumComponentsForDataType() {
        switch (this._dataType) {
          case m.SCALAR:
            return 1;
          case m.VEC2:
            return 2;
          case m.VEC3:
            return 3;
          case m.VEC4:
          case m.MAT2:
            return 4;
          case m.MAT3:
            return 9;
          case m.MAT4:
            return 16;
        }
      }
    })(this, this._gltf, t, e, s);
    return this._bufferViews.push(n), n;
  }
  getByteOffset(t) {
    let e = 0;
    for (const s of this._bufferViews) {
      if (s === t) return e;
      e += s.byteSize;
    }
    throw new Error("Given bufferView was not present in this buffer");
  }
  getViewFinalizePromises(t) {
    const e = [];
    for (const s of this._bufferViews) {
      if (t && s === t) return e;
      e.push(s.finalized);
    }
    return e;
  }
  getArrayBuffer() {
    if (!this._isFinalized)
      throw new Error(
        "Cannot get ArrayBuffer from Buffer before it is finalized"
      );
    const t = this._getTotalSize(),
      e = new ArrayBuffer(t);
    let s = 0;
    for (const n of this._bufferViews)
      n.writeOutToBuffer(e, s), (s += n.byteSize);
    return e;
  }
  finalize() {
    var t;
    if (this._finalizePromise)
      throw new Error(`Buffer ${this.index} was already finalized`);
    return (
      (this._finalizePromise = new Promise((e) => {
        e(U(this.getViewFinalizePromises()));
      }).then(() => {
        this._isFinalized = !0;
        const e = this.getArrayBuffer();
        (this._buffer.byteLength = e.byteLength), (this._buffer.uri = e);
      })),
      (t = this._gltf.extras) == null || t.promises.push(this._finalizePromise),
      this._finalizePromise
    );
  }
  _getTotalSize() {
    let t = 0;
    for (const e of this._bufferViews) t += e.byteSize;
    return t;
  }
}
function yt(i, t) {
  if (i.components)
    for (const e of i.components) e.faces && e.shading === "smooth" && xt(e, t);
}
function xt(i, t) {
  j(t.normal) && (t.normal = new Float32Array(t.position.length));
  const e = i.faces,
    { position: s, normal: n } = t,
    r = e.length / 3;
  for (let a = 0; a < r; ++a) {
    const o = 3 * e[3 * a + 0],
      h = 3 * e[3 * a + 1],
      c = 3 * e[3 * a + 2],
      l = M(Rt, s[o + 0], s[o + 1], s[o + 2]),
      d = M(Nt, s[h + 0], s[h + 1], s[h + 2]),
      u = M(Ot, s[c + 0], s[c + 1], s[c + 2]),
      N = H(d, d, l),
      R = H(u, u, l),
      p = rt(N, N, R);
    (n[o + 0] += p[0]),
      (n[o + 1] += p[1]),
      (n[o + 2] += p[2]),
      (n[h + 0] += p[0]),
      (n[h + 1] += p[1]),
      (n[h + 2] += p[2]),
      (n[c + 0] += p[0]),
      (n[c + 1] += p[1]),
      (n[c + 2] += p[2]);
  }
  for (let a = 0; a < n.length; a += 3)
    M(O, n[a], n[a + 1], n[a + 2]),
      nt(O, O),
      (n[a + 0] = O[0]),
      (n[a + 1] = O[1]),
      (n[a + 2] = O[2]);
}
const Rt = S(),
  Nt = S(),
  Ot = S(),
  O = S(),
  G = at.getLogger("gltf");
class St {
  constructor(t, e, s) {
    (this.params = {}),
      (this._materialMap = []),
      (this._imageMap = new Map()),
      (this._textureMap = new Map()),
      (this.gltf = {
        asset: {
          version: "2.0",
          copyright: t.copyright,
          generator: t.generator,
        },
        extras: { options: e, binChunkBuffer: null, promises: [] },
      }),
      s && (this.params = s),
      this._addScenes(t);
  }
  _addScenes(t) {
    this.gltf.scene = t.defaultScene;
    const e = this.gltf.extras,
      s =
        e.options.bufferOutputType === x.GLB ||
        e.options.imageOutputType === b.GLB;
    s && (e.binChunkBuffer = new X(this.gltf)),
      t.forEachScene((n) => {
        this._addScene(n);
      }),
      s && e.binChunkBuffer.finalize();
  }
  _addScene(t) {
    this.gltf.scenes || (this.gltf.scenes = []);
    const e = {};
    t.name && (e.name = t.name),
      t.forEachNode((s) => {
        e.nodes || (e.nodes = []);
        const n = this._addNode(s);
        e.nodes.push(n);
      }),
      this.gltf.scenes.push(e);
  }
  _addNode(t) {
    this.gltf.nodes || (this.gltf.nodes = []);
    const e = {};
    t.name && (e.name = t.name);
    const s = t.translation;
    Z(s, ot) || (e.translation = Y(s));
    const n = t.rotation;
    lt(n, _t) || (e.rotation = pt(n));
    const r = t.scale;
    Z(r, Q) || (e.scale = Y(r)),
      t.mesh && t.mesh.vertexAttributes.position
        ? (e.mesh = this._addMesh(t.mesh))
        : t.forEachNode((o) => {
            e.children || (e.children = []);
            const h = this._addNode(o);
            e.children.push(h);
          });
    const a = this.gltf.nodes.length;
    return this.gltf.nodes.push(e), a;
  }
  _addMesh(t) {
    this.gltf.meshes || (this.gltf.meshes = []);
    const e = { primitives: [] },
      s = this.gltf.extras,
      n = s.options.bufferOutputType === x.GLB;
    let r;
    (r = n ? s.binChunkBuffer : new X(this.gltf)),
      this.params.origin ||
        (this.params.origin = (function (f) {
          if (E(f.transform))
            return f.transform.getOriginPoint(f.spatialReference);
          const et = f.extent.xmax - f.extent.width / 2,
            st = f.extent.ymax - f.extent.height / 2,
            it = f.extent.zmin;
          return new v({
            x: et,
            y: st,
            z: it,
            spatialReference: f.extent.spatialReference,
          });
        })(t));
    const a = this.params.ignoreLocalTransform
        ? ht(
            t.transform,
            (f) =>
              new Et({
                origin: [f.origin[0], f.origin[1], f.origin[2]],
                geographic: !1,
              })
          )
        : t.transform,
      o = wt(t.vertexAttributes, a, this.params.origin, {
        geographic: this.params.geographic,
        unit: "meters",
      });
    yt(t, o), this._flipYZAxis(o);
    const h = r.addBufferView(_.FLOAT, m.VEC3, y.ARRAY_BUFFER);
    let c, l, d, u;
    o.normal && (c = r.addBufferView(_.FLOAT, m.VEC3, y.ARRAY_BUFFER)),
      t.vertexAttributes.uv &&
        (l = r.addBufferView(_.FLOAT, m.VEC2, y.ARRAY_BUFFER)),
      o.tangent && (d = r.addBufferView(_.FLOAT, m.VEC4, y.ARRAY_BUFFER)),
      t.vertexAttributes.color &&
        (u = r.addBufferView(_.UNSIGNED_BYTE, m.VEC4, y.ARRAY_BUFFER)),
      h.startAccessor("POSITION"),
      c && c.startAccessor("NORMAL"),
      l && l.startAccessor("TEXCOORD_0"),
      d && d.startAccessor("TANGENT"),
      u && u.startAccessor("COLOR_0");
    const N = o.position.length / 3,
      { position: R, normal: p, tangent: g } = o,
      { color: w, uv: L } = t.vertexAttributes;
    for (let f = 0; f < N; ++f)
      h.push(R[3 * f + 0]),
        h.push(R[3 * f + 1]),
        h.push(R[3 * f + 2]),
        c &&
          E(p) &&
          (c.push(p[3 * f + 0]), c.push(p[3 * f + 1]), c.push(p[3 * f + 2])),
        l && E(L) && (l.push(L[2 * f + 0]), l.push(L[2 * f + 1])),
        d &&
          E(g) &&
          (d.push(g[4 * f + 0]),
          d.push(g[4 * f + 1]),
          d.push(g[4 * f + 2]),
          d.push(g[4 * f + 3])),
        u &&
          E(w) &&
          (u.push(w[4 * f + 0]),
          u.push(w[4 * f + 1]),
          u.push(w[4 * f + 2]),
          u.push(w[4 * f + 3]));
    const q = h.endAccessor(),
      k = this._addAccessor(h.index, q);
    let z, V, F, D, B;
    if (c) {
      const f = c.endAccessor();
      z = this._addAccessor(c.index, f);
    }
    if (l) {
      const f = l.endAccessor();
      V = this._addAccessor(l.index, f);
    }
    if (d) {
      const f = d.endAccessor();
      F = this._addAccessor(d.index, f);
    }
    if (u) {
      const f = u.endAccessor();
      D = this._addAccessor(u.index, f);
    }
    t.components && t.components.length > 0 && t.components[0].faces
      ? ((B = r.addBufferView(
          _.UNSIGNED_INT,
          m.SCALAR,
          y.ELEMENT_ARRAY_BUFFER
        )),
        this._addMeshVertexIndexed(B, t.components, e, k, z, V, F, D))
      : this._addMeshVertexNonIndexed(t.components, e, k, z, V, F, D),
      h.finalize(),
      c && c.finalize(),
      l && l.finalize(),
      d && d.finalize(),
      B && B.finalize(),
      u && u.finalize(),
      n || r.finalize();
    const tt = this.gltf.meshes.length;
    return this.gltf.meshes.push(e), tt;
  }
  _flipYZAxis({ position: t, normal: e, tangent: s }) {
    this._flipYZBuffer(t, 3),
      this._flipYZBuffer(e, 3),
      this._flipYZBuffer(s, 4);
  }
  _flipYZBuffer(t, e) {
    if (!j(t))
      for (let s = 1, n = 2; s < t.length; s += e, n += e) {
        const r = t[s],
          a = t[n];
        (t[s] = a), (t[n] = -r);
      }
  }
  _addMaterial(t) {
    if (t === null) return;
    const e = this._materialMap.indexOf(t);
    if (e !== -1) return e;
    this.gltf.materials || (this.gltf.materials = []);
    const s = {};
    switch (t.alphaMode) {
      case "mask":
        s.alphaMode = C.MASK;
        break;
      case "auto":
      case "blend":
        s.alphaMode = C.BLEND;
    }
    t.alphaCutoff !== 0.5 && (s.alphaCutoff = t.alphaCutoff),
      t.doubleSided && (s.doubleSided = t.doubleSided),
      (s.pbrMetallicRoughness = {});
    const n = (o) => o ** 2.1,
      r = (o) => {
        const h = o.toRgba();
        return (
          (h[0] = n(h[0] / 255)),
          (h[1] = n(h[1] / 255)),
          (h[2] = n(h[2] / 255)),
          h
        );
      };
    if (
      (E(t.color) && (s.pbrMetallicRoughness.baseColorFactor = r(t.color)),
      E(t.colorTexture) &&
        (s.pbrMetallicRoughness.baseColorTexture = {
          index: this._addTexture(t.colorTexture),
        }),
      E(t.normalTexture) &&
        (s.normalTexture = { index: this._addTexture(t.normalTexture) }),
      t instanceof gt)
    ) {
      if (
        (E(t.emissiveTexture) &&
          (s.emissiveTexture = { index: this._addTexture(t.emissiveTexture) }),
        E(t.emissiveColor))
      ) {
        const o = r(t.emissiveColor);
        s.emissiveFactor = [o[0], o[1], o[2]];
      }
      E(t.occlusionTexture) &&
        (s.occlusionTexture = { index: this._addTexture(t.occlusionTexture) }),
        E(t.metallicRoughnessTexture) &&
          (s.pbrMetallicRoughness.metallicRoughnessTexture = {
            index: this._addTexture(t.metallicRoughnessTexture),
          }),
        (s.pbrMetallicRoughness.metallicFactor = t.metallic),
        (s.pbrMetallicRoughness.roughnessFactor = t.roughness);
    } else
      (s.pbrMetallicRoughness.metallicFactor = 1),
        (s.pbrMetallicRoughness.roughnessFactor = 1),
        G.warnOnce(
          "Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back."
        );
    const a = this.gltf.materials.length;
    return this.gltf.materials.push(s), this._materialMap.push(t), a;
  }
  _addTexture(t) {
    const e = this.gltf.textures ?? [];
    return (
      (this.gltf.textures = e),
      ct(this._textureMap, t, () => {
        const s = { sampler: this._addSampler(t), source: this._addImage(t) },
          n = e.length;
        return e.push(s), n;
      })
    );
  }
  _addImage(t) {
    const e = this._imageMap.get(t);
    if (e != null) return e;
    this.gltf.images || (this.gltf.images = []);
    const s = {};
    if (t.url) s.uri = t.url;
    else {
      const r = t.data;
      s.extras = r;
      for (let o = 0; o < this.gltf.images.length; ++o)
        if (r === this.gltf.images[o].extras) return o;
      const a = this.gltf.extras;
      switch (a.options.imageOutputType) {
        case b.GLB: {
          const o = a.binChunkBuffer.addBufferView(_.UNSIGNED_BYTE, m.SCALAR);
          if (P(r)) E(r.data) && o.writeOutToBuffer(r.data, 0);
          else {
            const h = J(r).then(
              ({ data: c, type: l }) => ((s.mimeType = l), c)
            );
            o.writeAsync(h).then(() => {
              o.finalize();
            });
          }
          s.bufferView = o.index;
          break;
        }
        case b.DataURI:
          if (P(r)) {
            G.warnOnce(
              "Image export for basis compressed textures not available."
            );
            break;
          }
          s.uri = At(r);
          break;
        default:
          if (P(r)) {
            G.warnOnce(
              "Image export for basis compressed textures not available."
            );
            break;
          }
          a.promises.push(
            J(r).then(({ data: o, type: h }) => {
              (s.uri = o), (s.mimeType = h);
            })
          );
      }
    }
    const n = this.gltf.images.length;
    return this.gltf.images.push(s), this._imageMap.set(t, n), n;
  }
  _addSampler(t) {
    this.gltf.samplers || (this.gltf.samplers = []);
    let e = T.REPEAT,
      s = T.REPEAT;
    if (typeof t.wrap == "string")
      switch (t.wrap) {
        case "clamp":
          (e = T.CLAMP_TO_EDGE), (s = T.CLAMP_TO_EDGE);
          break;
        case "mirror":
          (e = T.MIRRORED_REPEAT), (s = T.MIRRORED_REPEAT);
      }
    else {
      switch (t.wrap.vertical) {
        case "clamp":
          s = T.CLAMP_TO_EDGE;
          break;
        case "mirror":
          s = T.MIRRORED_REPEAT;
      }
      switch (t.wrap.horizontal) {
        case "clamp":
          e = T.CLAMP_TO_EDGE;
          break;
        case "mirror":
          e = T.MIRRORED_REPEAT;
      }
    }
    const n = { wrapS: e, wrapT: s };
    for (let a = 0; a < this.gltf.samplers.length; ++a)
      if (JSON.stringify(n) === JSON.stringify(this.gltf.samplers[a])) return a;
    const r = this.gltf.samplers.length;
    return this.gltf.samplers.push(n), r;
  }
  _addAccessor(t, e) {
    this.gltf.accessors || (this.gltf.accessors = []);
    const s = {
      bufferView: t,
      byteOffset: e.byteOffset,
      componentType: e.componentType,
      count: e.count,
      type: e.type,
      min: e.min,
      max: e.max,
      name: e.name,
    };
    e.normalized && (s.normalized = !0);
    const n = this.gltf.accessors.length;
    return this.gltf.accessors.push(s), n;
  }
  _addMeshVertexIndexed(t, e, s, n, r, a, o, h) {
    for (const c of e) {
      t.startAccessor("INDICES");
      for (let u = 0; u < c.faces.length; ++u) t.push(c.faces[u]);
      const l = t.endAccessor(),
        d = {
          attributes: { POSITION: n },
          indices: this._addAccessor(t.index, l),
          material: this._addMaterial(c.material),
        };
      r && c.shading !== "flat" && (d.attributes.NORMAL = r),
        a && (d.attributes.TEXCOORD_0 = a),
        o && c.shading !== "flat" && (d.attributes.TANGENT = o),
        h && (d.attributes.COLOR_0 = h),
        s.primitives.push(d);
    }
  }
  _addMeshVertexNonIndexed(t, e, s, n, r, a, o) {
    const h = { attributes: { POSITION: s } };
    n && (h.attributes.NORMAL = n),
      r && (h.attributes.TEXCOORD_0 = r),
      a && (h.attributes.TANGENT = a),
      o && (h.attributes.COLOR_0 = o),
      t && (h.material = this._addMaterial(t[0].material)),
      e.primitives.push(h);
  }
}
let Bt = class {
  constructor() {
    (this.copyright = ""),
      (this.defaultScene = 0),
      (this.generator = ""),
      (this._scenes = []);
  }
  addScene(i) {
    if (this._scenes.includes(i)) throw new Error("Scene already added");
    this._scenes.push(i);
  }
  removeScene(i) {
    ft(this._scenes, i);
  }
  forEachScene(i) {
    this._scenes.forEach(i);
  }
};
class Mt {
  constructor() {
    (this.name = ""), (this._nodes = []);
  }
  addNode(t) {
    if (this._nodes.includes(t)) throw new Error("Node already added");
    this._nodes.push(t);
  }
  forEachNode(t) {
    this._nodes.forEach(t);
  }
}
class It {
  constructor(t) {
    (this.mesh = t),
      (this.name = ""),
      (this.translation = S()),
      (this.rotation = mt()),
      (this.scale = Y(Q)),
      (this._nodes = []);
  }
  addNode(t) {
    if (this._nodes.includes(t)) throw new Error("Node already added");
    this._nodes.push(t);
  }
  forEachNode(t) {
    this._nodes.forEach(t);
  }
  set rotationAngles(t) {
    dt(this.rotation, t[0], t[1], t[2]);
  }
}
const Ct = "model.gltf",
  $ = "model.glb";
function Lt(i, t, e) {
  var d;
  const s = new St(i, (t = t || {}), e);
  let n = s.params;
  n
    ? n.origin || (n.origin = new v({ x: -1, y: -1, z: -1 }))
    : (n = { origin: new v({ x: -1, y: -1, z: -1 }) });
  const r = n.origin,
    a = s.gltf,
    o = ((d = a.extras) == null ? void 0 : d.promises) ?? [];
  let h = 1,
    c = 1,
    l = null;
  return U(o).then(() => {
    const u = { origin: r };
    delete a.extras;
    const N = typeof t.jsonSpacing == "number" ? t.jsonSpacing : 4,
      R = JSON.stringify(
        a,
        (p, g) => {
          if (p !== "extras") {
            if (g instanceof ArrayBuffer) {
              if (Tt(g))
                switch (t.imageOutputType) {
                  case b.DataURI:
                  case b.GLB:
                    break;
                  case b.External:
                  default: {
                    const w = `img${c}.png`;
                    return c++, (u[w] = g), w;
                  }
                }
              switch (t.bufferOutputType) {
                case x.DataURI:
                  return bt(g);
                case x.GLB:
                  if (l)
                    throw new Error(
                      "Already encountered an ArrayBuffer, there should only be one in the GLB format."
                    );
                  return void (l = g);
                case x.External:
                default: {
                  const w = `data${h}.bin`;
                  return h++, (u[w] = g), w;
                }
              }
            }
            return g;
          }
        },
        N
      );
    return (
      t.bufferOutputType === x.GLB || t.imageOutputType === b.GLB
        ? (u[$] = new A(R, l).buffer)
        : (u[Ct] = R),
      u
    );
  });
}
class zt {
  constructor(t, e) {
    (this._file = { type: "model/gltf-binary", data: t }), (this.origin = e);
  }
  buffer() {
    return Promise.resolve(this._file);
  }
  download(t) {
    ut(new Blob([this._file.data], { type: this._file.type }), t);
  }
}
function ae(i, t) {
  const e = new Bt(),
    s = new Mt();
  return (
    e.addScene(s),
    s.addNode(new It(i)),
    (function (n, r) {
      return Lt(
        n,
        { bufferOutputType: x.GLB, imageOutputType: b.GLB, jsonSpacing: 0 },
        r
      );
    })(e, t).then((n) => new zt(n[$], n.origin))
  );
}
export { ae as toBinaryGLTF };
