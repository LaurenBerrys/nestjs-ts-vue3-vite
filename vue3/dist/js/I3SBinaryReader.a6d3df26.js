import { s as d, Q as D, bO as V } from "./index.8fd7165c.js";
import { O as v } from "./VertexAttribute.15d1866a.js";
function k() {
  const t = new Float32Array(4);
  return (t[3] = 1), t;
}
function Y(t) {
  const e = new Float32Array(4);
  return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
}
Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      clone: Y,
      create: k,
      createView: function (t, e) {
        return new Float32Array(t, e, 4);
      },
      fromValues: function (t, e, c, i) {
        const o = new Float32Array(4);
        return (o[0] = t), (o[1] = e), (o[2] = c), (o[3] = i), o;
      },
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
const w = !0,
  U = {
    identifierOffset: 0,
    identifierLength: 10,
    versionOffset: 10,
    checksumOffset: 12,
    byteCount: 16,
  };
function M(t, e, c) {
  return {
    identifier: String.fromCharCode.apply(
      null,
      new Uint8Array(t, c + U.identifierOffset, U.identifierLength)
    ),
    version: e.getUint16(c + U.versionOffset, w),
    checksum: e.getUint32(c + U.checksumOffset, w),
  };
}
const h = {
  sizeLo: 0,
  sizeHi: 4,
  minX: 8,
  minY: 16,
  minZ: 24,
  maxX: 32,
  maxY: 40,
  maxZ: 48,
  errorX: 56,
  errorY: 64,
  errorZ: 72,
  count: 80,
  reserved: 84,
  byteCount: 88,
};
function X(t, e) {
  return {
    sizeLo: t.getUint32(e + h.sizeLo, w),
    sizeHi: t.getUint32(e + h.sizeHi, w),
    minX: t.getFloat64(e + h.minX, w),
    minY: t.getFloat64(e + h.minY, w),
    minZ: t.getFloat64(e + h.minZ, w),
    maxX: t.getFloat64(e + h.maxX, w),
    maxY: t.getFloat64(e + h.maxY, w),
    maxZ: t.getFloat64(e + h.maxZ, w),
    errorX: t.getFloat64(e + h.errorX, w),
    errorY: t.getFloat64(e + h.errorY, w),
    errorZ: t.getFloat64(e + h.errorZ, w),
    count: t.getUint32(e + h.count, w),
    reserved: t.getUint32(e + h.reserved, w),
  };
}
function G(t) {
  const e = new DataView(t, 0);
  let c = 0;
  const { identifier: i, version: o } = M(t, e, c);
  if (((c += U.byteCount), i !== "LEPCC     "))
    throw new d("lepcc-decode-error", "Bad identifier");
  if (o > 1) throw new d("lepcc-decode-error", "Unknown version");
  const n = X(e, c);
  if (((c += h.byteCount), n.sizeHi * 2 ** 32 + n.sizeLo !== t.byteLength))
    throw new d("lepcc-decode-error", "Bad size");
  const u = new Float64Array(3 * n.count),
    s = [],
    a = [],
    f = [],
    r = [];
  if (
    ((c = A(t, c, s)),
    (c = A(t, c, a)),
    (c = A(t, c, f)),
    (c = A(t, c, r)),
    c !== t.byteLength)
  )
    throw new d("lepcc-decode-error", "Bad length");
  let y = 0,
    g = 0;
  for (let l = 0; l < s.length; l++) {
    g += s[l];
    let b = 0;
    for (let p = 0; p < a[l]; p++) {
      b += f[y];
      const S = r[y];
      (u[3 * y] = Math.min(n.maxX, n.minX + 2 * n.errorX * b)),
        (u[3 * y + 1] = Math.min(n.maxY, n.minY + 2 * n.errorY * g)),
        (u[3 * y + 2] = Math.min(n.maxZ, n.minZ + 2 * n.errorZ * S)),
        y++;
    }
  }
  return { errorX: n.errorX, errorY: n.errorY, errorZ: n.errorZ, result: u };
}
function A(t, e, c) {
  const i = [];
  e = z(t, e, i);
  const o = [];
  for (let n = 0; n < i.length; n++) {
    (o.length = 0), (e = z(t, e, o));
    for (let u = 0; u < o.length; u++) c.push(o[u] + i[n]);
  }
  return e;
}
function z(t, e, c) {
  const i = new DataView(t, e),
    o = i.getUint8(0),
    n = 31 & o,
    u = !!(32 & o),
    s = (192 & o) >> 6;
  let a = 0;
  if (s === 0) (a = i.getUint32(1, w)), (e += 5);
  else if (s === 1) (a = i.getUint16(1, w)), (e += 3);
  else {
    if (s !== 2) throw new d("lepcc-decode-error", "Bad count type");
    (a = i.getUint8(1)), (e += 2);
  }
  if (u) throw new d("lepcc-decode-error", "LUT not implemented");
  const f = Math.ceil((a * n) / 8),
    r = new Uint8Array(t, e, f);
  let y = 0,
    g = 0,
    l = 0;
  const b = -1 >>> (32 - n);
  for (let p = 0; p < a; p++) {
    for (; g < n; ) (y |= r[l] << g), (g += 8), (l += 1);
    (c[p] = y & b),
      (y >>>= n),
      (g -= n),
      g + n > 32 && (y |= r[l - 1] >> (8 - g));
  }
  return e + l;
}
const m = {
  sizeLo: 0,
  sizeHi: 4,
  count: 8,
  colorMapCount: 12,
  lookupMethod: 14,
  compressionMethod: 15,
  byteCount: 16,
};
function Z(t, e) {
  return {
    sizeLo: t.getUint32(e + m.sizeLo, w),
    sizeHi: t.getUint32(e + m.sizeHi, w),
    count: t.getUint32(e + m.count, w),
    colorMapCount: t.getUint16(e + m.colorMapCount, w),
    lookupMethod: t.getUint8(e + m.lookupMethod),
    compressionMethod: t.getUint8(e + m.compressionMethod),
  };
}
const C = {
  sizeLo: 0,
  sizeHi: 4,
  count: 8,
  scaleFactor: 12,
  bitsPerPoint: 14,
  reserved: 15,
  byteCount: 16,
};
function H(t, e) {
  return {
    sizeLo: t.getUint32(e + C.sizeLo, w),
    sizeHi: t.getUint32(e + C.sizeHi, w),
    count: t.getUint32(e + C.count, w),
    scaleFactor: t.getUint16(e + C.scaleFactor, w),
    bitsPerPoint: t.getUint8(e + C.bitsPerPoint),
    reserved: t.getUint8(e + C.reserved),
  };
}
const F = D.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");
function _(t, e, c) {
  let i = "",
    o = 0;
  for (; o < c; ) {
    const n = t[e + o];
    if (n < 128) (i += String.fromCharCode(n)), o++;
    else if (n >= 192 && n < 224) {
      if (o + 1 >= c)
        throw new d(
          "utf8-decode-error",
          "UTF-8 Decode failed. Two byte character was truncated."
        );
      const u = ((31 & n) << 6) | (63 & t[e + o + 1]);
      (i += String.fromCharCode(u)), (o += 2);
    } else if (n >= 224 && n < 240) {
      if (o + 2 >= c)
        throw new d(
          "utf8-decode-error",
          "UTF-8 Decode failed. Multi byte character was truncated."
        );
      const u =
        ((15 & n) << 12) | ((63 & t[e + o + 1]) << 6) | (63 & t[e + o + 2]);
      (i += String.fromCharCode(u)), (o += 3);
    } else {
      if (!(n >= 240 && n < 248))
        throw new d(
          "utf8-decode-error",
          "UTF-8 Decode failed. Invalid multi byte sequence."
        );
      {
        if (o + 3 >= c)
          throw new d(
            "utf8-decode-error",
            "UTF-8 Decode failed. Multi byte character was truncated."
          );
        const u =
          ((7 & n) << 18) |
          ((63 & t[e + o + 1]) << 12) |
          ((63 & t[e + o + 2]) << 6) |
          (63 & t[e + o + 3]);
        if (u >= 65536) {
          const s = 55296 + ((u - 65536) >> 10),
            a = 56320 + (1023 & u);
          i += String.fromCharCode(s, a);
        } else i += String.fromCharCode(u);
        o += 4;
      }
    }
  }
  return i;
}
function E(t, e) {
  const c = { byteOffset: 0, byteCount: 0, fields: Object.create(null) };
  let i = 0;
  for (let o = 0; o < e.length; o++) {
    const n = e[o],
      u = n.valueType || n.type,
      s = N[u];
    (c.fields[n.property] = s(t, i)), (i += I[u].BYTES_PER_ELEMENT);
  }
  return (c.byteCount = i), c;
}
function L(t, e, c) {
  const i = [];
  let o,
    n,
    u = 0;
  for (n = 0; n < t; n += 1) {
    if (((o = e[n]), o > 0)) {
      if ((i.push(_(c, u, o - 1)), c[u + o - 1] !== 0))
        throw new d(
          "string-array-error",
          "Invalid string array: missing null termination."
        );
    } else i.push(null);
    u += o;
  }
  return i;
}
function B(t, e) {
  return new I[e.valueType](t, e.byteOffset, e.count * e.valuesPerElement);
}
function j(t, e, c) {
  const i =
      e.header != null
        ? E(t, e.header)
        : { byteOffset: 0, byteCount: 0, fields: { count: c } },
    o = {
      header: i,
      byteOffset: i.byteCount,
      byteCount: 0,
      entries: Object.create(null),
    };
  let n = i.byteCount;
  for (let u = 0; u < e.ordering.length; u++) {
    const s = e.ordering[u],
      a = V(e[s]);
    if (((a.count = i.fields.count ?? 0), a.valueType === "String")) {
      if (
        ((a.byteOffset = n),
        (a.byteCount = i.fields[s + "ByteCount"]),
        a.encoding !== "UTF-8")
      )
        throw new d("unsupported-encoding", "Unsupported String encoding.", {
          encoding: a.encoding,
        });
      if (a.timeEncoding && a.timeEncoding !== "ECMA_ISO8601")
        throw new d("unsupported-time-encoding", "Unsupported time encoding.", {
          timeEncoding: a.timeEncoding,
        });
    } else {
      if (!x(a.valueType))
        throw new d("unsupported-value-type", "Unsupported binary valueType", {
          valueType: a.valueType,
        });
      {
        const f = O(a.valueType);
        (n += n % f != 0 ? f - (n % f) : 0),
          (a.byteOffset = n),
          (a.byteCount = f * a.valuesPerElement * a.count);
      }
    }
    (n += a.byteCount ?? 0), (o.entries[s] = a);
  }
  return (o.byteCount = n - o.byteOffset), o;
}
function P(t, e, c) {
  if (
    (e !== t &&
      F.error(`Invalid ${c} buffer size
 expected: ${t}, actual: ${e})`),
    e < t)
  )
    throw new d("buffer-too-small", "Binary buffer is too small", {
      expectedSize: t,
      actualSize: e,
    });
}
function W(t, e) {
  const c = E(t, e && e.header);
  let i = c.byteCount;
  const o = {
      isDraco: !1,
      header: c,
      byteOffset: c.byteCount,
      byteCount: 0,
      vertexAttributes: {},
    },
    n = c.fields,
    u = n.vertexCount != null ? n.vertexCount : n.count;
  for (const f of e.ordering) {
    if (!e.vertexAttributes[f]) continue;
    const r = { ...e.vertexAttributes[f], byteOffset: i, count: u },
      y = T[f] ? T[f] : "_" + f;
    (o.vertexAttributes[y] = r), (i += O(r.valueType) * r.valuesPerElement * u);
  }
  const s = n.faceCount;
  if (e.faces && s) {
    o.faces = {};
    for (const f of e.ordering) {
      if (!e.faces[f]) continue;
      const r = { ...e.faces[f], byteOffset: i, count: s };
      (o.faces[f] = r), (i += O(r.valueType) * r.valuesPerElement * s);
    }
  }
  const a = n.featureCount;
  if (e.featureAttributes && e.featureAttributeOrder && a) {
    o.featureAttributes = {};
    for (const f of e.featureAttributeOrder) {
      if (!e.featureAttributes[f]) continue;
      const r = { ...e.featureAttributes[f], byteOffset: i, count: a };
      (o.featureAttributes[f] = r),
        (i +=
          (r.valueType === "UInt64" ? 8 : O(r.valueType)) *
          r.valuesPerElement *
          a);
    }
  }
  return P(i, t.byteLength, "geometry"), (o.byteCount = i - o.byteOffset), o;
}
const T = {
  position: v.POSITION,
  normal: v.NORMAL,
  color: v.COLOR,
  uv0: v.UV0,
  region: v.UVREGION,
};
function q(t, e, c) {
  if (t.encoding === "lepcc-rgb")
    return (function (n) {
      const u = new DataView(n, 0);
      let s = 0;
      const { identifier: a, version: f } = M(n, u, s);
      if (((s += U.byteCount), a !== "ClusterRGB"))
        throw new d("lepcc-decode-error", "Bad identifier");
      if (f > 1) throw new d("lepcc-decode-error", "Unknown version");
      const r = Z(u, s);
      if (((s += m.byteCount), r.sizeHi * 2 ** 32 + r.sizeLo !== n.byteLength))
        throw new d("lepcc-decode-error", "Bad size");
      if (
        (r.lookupMethod === 2 || r.lookupMethod === 1) &&
        r.compressionMethod === 0
      ) {
        if (
          3 * r.colorMapCount + r.count + s !== n.byteLength ||
          r.colorMapCount > 256
        )
          throw new d("lepcc-decode-error", "Bad count");
        const y = new Uint8Array(n, s, 3 * r.colorMapCount),
          g = new Uint8Array(n, s + 3 * r.colorMapCount, r.count),
          l = new Uint8Array(3 * r.count);
        for (let b = 0; b < r.count; b++) {
          const p = g[b];
          (l[3 * b] = y[3 * p]),
            (l[3 * b + 1] = y[3 * p + 1]),
            (l[3 * b + 2] = y[3 * p + 2]);
        }
        return l;
      }
      if (r.lookupMethod === 0 && r.compressionMethod === 0) {
        if (3 * r.count + s !== n.byteLength || r.colorMapCount !== 0)
          throw new d("lepcc-decode-error", "Bad count");
        return new Uint8Array(n, s).slice();
      }
      if (r.lookupMethod <= 2 && r.compressionMethod === 1) {
        if (s + 3 !== n.byteLength || r.colorMapCount !== 1)
          throw new d("lepcc-decode-error", "Bad count");
        const y = u.getUint8(s),
          g = u.getUint8(s + 1),
          l = u.getUint8(s + 2),
          b = new Uint8Array(3 * r.count);
        for (let p = 0; p < r.count; p++)
          (b[3 * p] = y), (b[3 * p + 1] = g), (b[3 * p + 2] = l);
        return b;
      }
      throw new d(
        "lepcc-decode-error",
        "Bad method " + r.lookupMethod + "," + r.compressionMethod
      );
    })(e);
  if (t.encoding === "lepcc-intensity")
    return (function (n) {
      const u = new DataView(n, 0);
      let s = 0;
      const { identifier: a, version: f } = M(n, u, s);
      if (((s += U.byteCount), a !== "Intensity "))
        throw new d("lepcc-decode-error", "Bad identifier");
      if (f > 1) throw new d("lepcc-decode-error", "Unknown version");
      const r = H(u, s);
      if (((s += C.byteCount), r.sizeHi * 2 ** 32 + r.sizeLo !== n.byteLength))
        throw new d("lepcc-decode-error", "Bad size");
      const y = new Uint16Array(r.count);
      if (r.bitsPerPoint === 8) {
        if (r.count + s !== n.byteLength)
          throw new d("lepcc-decode-error", "Bad size");
        const g = new Uint8Array(n, s, r.count);
        for (let l = 0; l < r.count; l++) y[l] = g[l] * r.scaleFactor;
      } else if (r.bitsPerPoint === 16) {
        if (2 * r.count + s !== n.byteLength)
          throw new d("lepcc-decode-error", "Bad size");
        const g = new Uint16Array(n, s, r.count);
        for (let l = 0; l < r.count; l++) y[l] = g[l] * r.scaleFactor;
      } else {
        const g = [];
        if (z(n, s, g) !== n.byteLength)
          throw new d("lepcc-decode-error", "Bad size");
        for (let l = 0; l < r.count; l++) y[l] = g[l] * r.scaleFactor;
      }
      return y;
    })(e);
  if (t.encoding != null && t.encoding !== "")
    throw new d(
      "unknown-attribute-storage-info-encoding",
      "Unknown Attribute Storage Info Encoding"
    );
  t["attributeByteCounts "] &&
    !t.attributeByteCounts &&
    (F.warn("Warning: Trailing space in 'attributeByteCounts '."),
    (t.attributeByteCounts = t["attributeByteCounts "])),
    t.ordering[0] === "ObjectIds" &&
      t.hasOwnProperty("objectIds") &&
      (F.warn("Warning: Case error in objectIds"),
      (t.ordering[0] = "objectIds"));
  const i = j(e, t, c);
  P(i.byteOffset + i.byteCount, e.byteLength, "attribute");
  const o = i.entries.attributeValues || i.entries.objectIds;
  if (o) {
    if (o.valueType === "String") {
      const n = i.entries.attributeByteCounts,
        u = B(e, n),
        s = (function (a, f) {
          return new Uint8Array(a, f.byteOffset, f.byteCount);
        })(e, o);
      return o.timeEncoding
        ? (function (a, f, r) {
            return L(a, f, r).map((y) => {
              const g = y ? Date.parse(y) : null;
              return g && !Number.isNaN(g) ? g : null;
            });
          })(n.count, u, s)
        : L(n.count, u, s);
    }
    return B(e, o);
  }
  throw new d(
    "bad-attribute-storage-info",
    "Bad attributeStorageInfo specification."
  );
}
const I = {
    Float32: Float32Array,
    Float64: Float64Array,
    UInt8: Uint8Array,
    Int8: Int8Array,
    UInt16: Uint16Array,
    Int16: Int16Array,
    UInt32: Uint32Array,
    Int32: Int32Array,
  },
  N = {
    Float32: (t, e) => new DataView(t, 0).getFloat32(e, !0),
    Float64: (t, e) => new DataView(t, 0).getFloat64(e, !0),
    UInt8: (t, e) => new DataView(t, 0).getUint8(e),
    Int8: (t, e) => new DataView(t, 0).getInt8(e),
    UInt16: (t, e) => new DataView(t, 0).getUint16(e, !0),
    Int16: (t, e) => new DataView(t, 0).getInt16(e, !0),
    UInt32: (t, e) => new DataView(t, 0).getUint32(e, !0),
    Int32: (t, e) => new DataView(t, 0).getInt32(e, !0),
  };
function x(t) {
  return I.hasOwnProperty(t);
}
function O(t) {
  return x(t) ? I[t].BYTES_PER_ELEMENT : 0;
}
export { q as I, G as c, k as e, B as l, Y as r, W as w };
