import { a as b, f as V, l as J } from "./StyleDefinition.4f77c81e.js";
import { L as W } from "./enums.fb086c25.js";
import { t as Qt, cc as I, em as ge } from "./index.8fd7165c.js";
import { C as g } from "./enums.64ab819c.js";
import { t as R } from "./VertexElementDescriptor.2925c6af.js";
import { v as Xt, p as te, z as ee } from "./colorUtils.3868c6ed.js";
import { h as P, t as Tt } from "./GeometryUtils.874f8cf4.js";
import { X as _e } from "./definitions.ce677f69.js";
let de = class {
  constructor(n) {
    (this._array = []), (this._stride = n);
  }
  get array() {
    return this._array;
  }
  get index() {
    return (4 * this._array.length) / this._stride;
  }
  get itemSize() {
    return this._stride;
  }
  get sizeInBytes() {
    return 4 * this._array.length;
  }
  reset() {
    this.array.length = 0;
  }
  toBuffer() {
    return new Uint32Array(this._array).buffer;
  }
  static i1616to32(n, t) {
    return (65535 & n) | (t << 16);
  }
  static i8888to32(n, t, e, r) {
    return (255 & n) | ((255 & t) << 8) | ((255 & e) << 16) | (r << 24);
  }
  static i8816to32(n, t, e) {
    return (255 & n) | ((255 & t) << 8) | (e << 16);
  }
};
var c, K;
(function (n) {
  (n[(n.R8_SIGNED = 0)] = "R8_SIGNED"),
    (n[(n.R8_UNSIGNED = 1)] = "R8_UNSIGNED"),
    (n[(n.R16_SIGNED = 2)] = "R16_SIGNED"),
    (n[(n.R16_UNSIGNED = 3)] = "R16_UNSIGNED"),
    (n[(n.R8G8_SIGNED = 4)] = "R8G8_SIGNED"),
    (n[(n.R8G8_UNSIGNED = 5)] = "R8G8_UNSIGNED"),
    (n[(n.R16G16_SIGNED = 6)] = "R16G16_SIGNED"),
    (n[(n.R16G16_UNSIGNED = 7)] = "R16G16_UNSIGNED"),
    (n[(n.R8G8B8A8_SIGNED = 8)] = "R8G8B8A8_SIGNED"),
    (n[(n.R8G8B8A8_UNSIGNED = 9)] = "R8G8B8A8_UNSIGNED"),
    (n[(n.R8G8B8A8_COLOR = 10)] = "R8G8B8A8_COLOR"),
    (n[(n.R16G16B16A16_DASHARRAY = 11)] = "R16G16B16A16_DASHARRAY"),
    (n[(n.R16G16B16A16_PATTERN = 12)] = "R16G16B16A16_PATTERN");
})(c || (c = {})),
  (function (n) {
    (n[(n.UNIFORM = 0)] = "UNIFORM"),
      (n[(n.DATA_DRIVEN = 1)] = "DATA_DRIVEN"),
      (n[(n.INTERPOLATED_DATA_DRIVEN = 2)] = "INTERPOLATED_DATA_DRIVEN"),
      (n[(n.UNUSED = 3)] = "UNUSED");
  })(K || (K = {}));
let H = class Dt {
  constructor(t) {
    (this._locations = new Map()), (this._key = t);
  }
  get key() {
    return this._key;
  }
  get type() {
    return 7 & this._key;
  }
  defines() {
    return [];
  }
  getStride() {
    return this._layoutInfo || this._buildAttributesInfo(), this._stride;
  }
  getAttributeLocations() {
    return (
      this._locations.size === 0 && this._buildAttributesInfo(), this._locations
    );
  }
  getLayoutInfo() {
    return this._layoutInfo || this._buildAttributesInfo(), this._layoutInfo;
  }
  getEncodingInfos() {
    return (
      this._propertyEncodingInfo || this._buildAttributesInfo(),
      this._propertyEncodingInfo
    );
  }
  getUniforms() {
    return this._uniforms || this._buildAttributesInfo(), this._uniforms;
  }
  getShaderHeader() {
    return (
      this._shaderHeader || this._buildAttributesInfo(), this._shaderHeader
    );
  }
  getShaderMain() {
    return this._shaderMain || this._buildAttributesInfo(), this._shaderMain;
  }
  setDataUniforms(t, e, r, i, a) {
    const o = this.getUniforms();
    for (const s of o) {
      const { name: l, type: u, getValue: p } = s,
        h = p(r, e, i, a);
      if (h !== null)
        switch (u) {
          case "float":
            t.setUniform1f(l, h);
            break;
          case "vec2":
            t.setUniform2fv(l, h);
            break;
          case "vec4":
            t.setUniform4fv(l, h);
        }
    }
  }
  encodeAttributes(t, e, r, i) {
    var p;
    const a = this.attributesInfo(),
      o = this.getEncodingInfos(),
      s = [];
    let l = 0,
      u = 0;
    for (const h of Object.keys(o)) {
      const f = o[h],
        { type: _, precisionFactor: d, isLayout: O } = a[h],
        N = O ? r.getLayoutProperty(h) : r.getPaintProperty(h),
        $ = (p = N.interpolator) == null ? void 0 : p.getInterpolationRange(e);
      let v = 0;
      for (const x of f) {
        const { offset: E, bufferElementsToAdd: G } = x;
        if (G > 0) {
          for (let D = 0; D < G; D++) s.push(0);
          (l += u), (u = x.bufferElementsToAdd);
        }
        const T = i ?? N.getValue($ ? $[v] : e, t);
        switch (_) {
          case c.R8_SIGNED:
          case c.R8_UNSIGNED:
            s[l] |= this._encodeByte(T * (d || 1), 8 * E);
            break;
          case c.R16_SIGNED:
          case c.R16_UNSIGNED:
            s[l] |= this._encodeShort(T * (d || 1), 8 * E);
            break;
          case c.R8G8_SIGNED:
          case c.R8G8_UNSIGNED:
            (s[l] |= this._encodeByte(T * (d || 1), 8 * E)),
              (s[l] |= this._encodeByte(T * (d || 1), 8 * E + 8));
            break;
          case c.R16G16_SIGNED:
          case c.R16G16_UNSIGNED:
            (s[l] |= this._encodeShort(T * (d || 1), 8 * E)),
              (s[l] |= this._encodeShort(T * (d || 1), 8 * E + 16));
            break;
          case c.R8G8B8A8_SIGNED:
          case c.R8G8B8A8_UNSIGNED:
            (s[l] |= this._encodeByte(T * (d || 1), 8 * E)),
              (s[l] |= this._encodeByte(T * (d || 1), 8 * E + 8)),
              (s[l] |= this._encodeByte(T * (d || 1), 8 * E + 16)),
              (s[l] |= this._encodeByte(T * (d || 1), 8 * E + 24));
            break;
          case c.R8G8B8A8_COLOR:
            s[l] = this._encodeColor(T);
            break;
          case c.R16G16B16A16_DASHARRAY:
          case c.R16G16B16A16_PATTERN:
            this._encodePattern(l, s, T);
            break;
          default:
            throw new Error("Unsupported encoding type");
        }
        v++;
      }
    }
    return s;
  }
  getAtributeState(t) {
    let e = 0;
    const r = 3 + 2 * t;
    return (e |= this._bit(r)), (e |= this._bit(r + 1) << 1), e;
  }
  _buildAttributesInfo() {
    const t = [],
      e = {},
      r = {};
    let i = -1;
    const a = this.attributesInfo(),
      o = this.attributes();
    let s = -1;
    for (const h of o) {
      s++;
      const f = this.getAtributeState(s);
      if (f === K.UNIFORM || f === K.UNUSED) continue;
      const _ = a[h],
        d = [];
      e[h] = d;
      const O = _.type;
      for (let N = 0; N < f; N++) {
        const {
            dataType: $,
            bytesPerElement: v,
            count: x,
            normalized: E,
          } = Dt._encodingInfo[O],
          G = v * x,
          T = `${$}-${E === !0}`;
        let D = r[T],
          k = 0;
        if (!D || D.count + x > 4)
          i++,
            (D = { dataIndex: i, count: 0, offset: 0 }),
            x !== 4 && (r[T] = D),
            t.push({
              location: -1,
              name: "a_data_" + i,
              count: x,
              type: $,
              normalized: E,
            }),
            (k = Math.ceil(Math.max(G / 4, 1)));
        else {
          const z = t[D.dataIndex];
          (z.count += x),
            (k =
              Math.ceil(Math.max((z.count * v) / 4, 1)) -
              Math.ceil(Math.max(D.offset / 4, 1)));
        }
        d.push({
          dataIndex: D.dataIndex,
          offset: D.offset,
          bufferElementsToAdd: k,
        }),
          (D.offset += G),
          (D.count += x);
      }
    }
    for (const h of t)
      switch (h.type) {
        case g.BYTE:
        case g.UNSIGNED_BYTE:
          h.count = 4;
          break;
        case g.SHORT:
        case g.UNSIGNED_SHORT:
          h.count += h.count % 2;
      }
    this._buildVertexBufferLayout(t);
    let l = 0;
    const u = this._layoutInfo.geometry;
    for (const h of u) this._locations.set(h.name, l++);
    const p = this._layoutInfo.opacity;
    if (p) for (const h of p) this._locations.set(h.name, l++);
    this._buildShaderInfo(t, e), (this._propertyEncodingInfo = e);
  }
  _buildVertexBufferLayout(t) {
    const e = {},
      r = this.geometryInfo();
    let i = r[0].stride;
    if (t.length === 0) e.geometry = r;
    else {
      const a = [];
      let o = i;
      for (const s of t) i += re(s.type) * s.count;
      for (const s of r)
        a.push(new R(s.name, s.count, s.type, s.offset, i, s.normalized));
      for (const s of t)
        a.push(new R(s.name, s.count, s.type, o, i, s.normalized)),
          (o += re(s.type) * s.count);
      e.geometry = a;
    }
    this.opacityInfo() && (e.opacity = this.opacityInfo()),
      (this._layoutInfo = e),
      (this._stride = i);
  }
  _buildShaderInfo(t, e) {
    let r = `
`,
      i = `
`;
    const a = [];
    for (const u of t)
      r += `attribute ${this._getType(u.count)} ${u.name};
`;
    const o = this.attributes(),
      s = this.attributesInfo();
    let l = -1;
    for (const u of o) {
      l++;
      const { name: p, type: h, precisionFactor: f, isLayout: _ } = s[u],
        d = f && f !== 1 ? " * " + 1 / f : "",
        { bytesPerElement: O, count: N } = Dt._encodingInfo[h],
        $ = (v) => `a_data_${v.dataIndex}${me(N, v.offset, O)}`;
      switch (this.getAtributeState(l)) {
        case K.UNIFORM:
          {
            const v = this._getType(N),
              x = `u_${p}`;
            a.push({
              name: x,
              type: v,
              getValue: (E, G, T, D) => {
                const k = _ ? E.getLayoutValue(u, G) : E.getPaintValue(u, G);
                if (h === c.R16G16B16A16_DASHARRAY) {
                  const z = E.getDashKey(k, E.getLayoutValue("line-cap", G)),
                    at = D.getMosaicItemPosition(z, !1);
                  if (Qt(at)) return null;
                  const { tl: nt, br: Jt } = at;
                  return [nt[0], Jt[1], Jt[0], nt[1]];
                }
                if (h === c.R16G16B16A16_PATTERN) {
                  const z = D.getMosaicItemPosition(k, !u.includes("line-"));
                  if (Qt(z)) return null;
                  const { tl: at, br: nt } = z;
                  return [at[0], nt[1], nt[0], at[1]];
                }
                if (h === c.R8G8B8A8_COLOR) {
                  const z = k[3];
                  return [z * k[0], z * k[1], z * k[2], z];
                }
                return k;
              },
            }),
              (r += `uniform ${v} ${x};
`),
              (i += `${v} ${p} = ${x};
`);
          }
          break;
        case K.DATA_DRIVEN:
          {
            const v = $(e[u][0]);
            i += `${this._getType(N)} ${p} = ${v}${d};
`;
          }
          break;
        case K.INTERPOLATED_DATA_DRIVEN: {
          const v = `u_t_${p}`;
          a.push({
            name: v,
            type: "float",
            getValue: (G, T, D, k) =>
              (_
                ? G.getLayoutProperty(u)
                : G.getPaintProperty(u)
              ).interpolator.interpolationUniformValue(D, T),
          }),
            (r += `uniform float ${v};
`);
          const x = $(e[u][0]),
            E = $(e[u][1]);
          i += `${this._getType(N)} ${p} = mix(${x}${d}, ${E}${d}, ${v});
`;
        }
      }
    }
    (this._shaderHeader = r), (this._shaderMain = i), (this._uniforms = a);
  }
  _bit(t) {
    return (this._key & (1 << t)) >> t;
  }
  _getType(t) {
    switch (t) {
      case 1:
        return "float";
      case 2:
        return "vec2";
      case 3:
        return "vec3";
      case 4:
        return "vec4";
    }
    throw new Error("Invalid count");
  }
  _encodeColor(t) {
    const e = 255 * t[3];
    return de.i8888to32(t[0] * e, t[1] * e, t[2] * e, e);
  }
  _encodePattern(t, e, r) {
    if (!r || !r.rect) return;
    const i = r.rect,
      a = r.width,
      o = r.height;
    (e[t] = this._encodeShort(i.x + 2, 0)),
      (e[t] |= this._encodeShort(i.y + 2 + o, 16)),
      (e[t + 1] = this._encodeShort(i.x + 2 + a, 0)),
      (e[t + 1] |= this._encodeShort(i.y + 2, 16));
  }
  _encodeByte(t, e) {
    return (255 & t) << e;
  }
  _encodeShort(t, e) {
    return (65535 & t) << e;
  }
};
H._encodingInfo = {
  [c.R8_SIGNED]: {
    dataType: g.BYTE,
    bytesPerElement: 1,
    count: 1,
    normalized: !1,
  },
  [c.R8_UNSIGNED]: {
    dataType: g.UNSIGNED_BYTE,
    bytesPerElement: 1,
    count: 1,
    normalized: !1,
  },
  [c.R16_SIGNED]: {
    dataType: g.SHORT,
    bytesPerElement: 2,
    count: 1,
    normalized: !1,
  },
  [c.R16_UNSIGNED]: {
    dataType: g.UNSIGNED_SHORT,
    bytesPerElement: 2,
    count: 1,
    normalized: !1,
  },
  [c.R8G8_SIGNED]: {
    dataType: g.BYTE,
    bytesPerElement: 1,
    count: 2,
    normalized: !1,
  },
  [c.R8G8_UNSIGNED]: {
    dataType: g.UNSIGNED_BYTE,
    bytesPerElement: 1,
    count: 2,
    normalized: !1,
  },
  [c.R16G16_SIGNED]: {
    dataType: g.SHORT,
    bytesPerElement: 2,
    count: 2,
    normalized: !1,
  },
  [c.R16G16_UNSIGNED]: {
    dataType: g.UNSIGNED_SHORT,
    bytesPerElement: 2,
    count: 2,
    normalized: !1,
  },
  [c.R8G8B8A8_SIGNED]: {
    dataType: g.BYTE,
    bytesPerElement: 1,
    count: 4,
    normalized: !1,
  },
  [c.R8G8B8A8_UNSIGNED]: {
    dataType: g.UNSIGNED_BYTE,
    bytesPerElement: 1,
    count: 4,
    normalized: !1,
  },
  [c.R8G8B8A8_COLOR]: {
    dataType: g.UNSIGNED_BYTE,
    bytesPerElement: 1,
    count: 4,
    normalized: !0,
  },
  [c.R16G16B16A16_DASHARRAY]: {
    dataType: g.UNSIGNED_SHORT,
    bytesPerElement: 2,
    count: 4,
    normalized: !1,
  },
  [c.R16G16B16A16_PATTERN]: {
    dataType: g.UNSIGNED_SHORT,
    bytesPerElement: 2,
    count: 4,
    normalized: !1,
  },
};
const re = (n) => {
    switch (n) {
      case g.FLOAT:
      case g.INT:
      case g.UNSIGNED_INT:
        return 4;
      case g.SHORT:
      case g.UNSIGNED_SHORT:
        return 2;
      case g.BYTE:
      case g.UNSIGNED_BYTE:
        return 1;
    }
  },
  me = (n, t, e) => {
    const r = t / e;
    if (n === 1)
      switch (r) {
        case 0:
          return ".x";
        case 1:
          return ".y";
        case 2:
          return ".z";
        case 3:
          return ".w";
      }
    else if (n === 2)
      switch (r) {
        case 0:
          return ".xy";
        case 1:
          return ".yz";
        case 2:
          return ".zw";
      }
    else if (n === 3)
      switch (r) {
        case 0:
          return ".xyz";
        case 1:
          return ".yzw";
      }
    return "";
  };
let Q = class pt extends H {
  constructor(t) {
    super(t);
  }
  geometryInfo() {
    return pt.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return pt.ATTRIBUTES;
  }
  attributesInfo() {
    return pt.ATTRIBUTES_INFO;
  }
};
(Q.ATTRIBUTES = []),
  (Q.GEOMETRY_LAYOUT = [new R("a_pos", 2, g.BYTE, 0, 2)]),
  (Q.ATTRIBUTES_INFO = {});
let X = class yt extends H {
  constructor(t) {
    super(t);
  }
  geometryInfo() {
    return yt.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return yt.ATTRIBUTES;
  }
  attributesInfo() {
    return yt.ATTRIBUTES_INFO;
  }
};
(X.ATTRIBUTES = [
  "circle-radius",
  "circle-color",
  "circle-opacity",
  "circle-stroke-width",
  "circle-stroke-color",
  "circle-stroke-opacity",
  "circle-blur",
]),
  (X.GEOMETRY_LAYOUT = [new R("a_pos", 2, g.SHORT, 0, 4)]),
  (X.ATTRIBUTES_INFO = {
    "circle-radius": { name: "radius", type: c.R8_UNSIGNED },
    "circle-color": { name: "color", type: c.R8G8B8A8_COLOR },
    "circle-opacity": {
      name: "opacity",
      type: c.R8_UNSIGNED,
      precisionFactor: 100,
    },
    "circle-stroke-width": {
      name: "stroke_width",
      type: c.R8_UNSIGNED,
      precisionFactor: 4,
    },
    "circle-stroke-color": { name: "stroke_color", type: c.R8G8B8A8_COLOR },
    "circle-stroke-opacity": {
      name: "stroke_opacity",
      type: c.R8_UNSIGNED,
      precisionFactor: 100,
    },
    "circle-blur": { name: "blur", type: c.R8_UNSIGNED, precisionFactor: 32 },
  });
let tt = class ft extends H {
  constructor(t) {
    super(t);
  }
  geometryInfo() {
    return ft.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return ft.ATTRIBUTES;
  }
  attributesInfo() {
    return ft.ATTRIBUTES_INFO;
  }
};
(tt.ATTRIBUTES = ["fill-color", "fill-opacity", "fill-pattern"]),
  (tt.GEOMETRY_LAYOUT = [new R("a_pos", 2, g.SHORT, 0, 4)]),
  (tt.ATTRIBUTES_INFO = {
    "fill-color": { name: "color", type: c.R8G8B8A8_COLOR },
    "fill-opacity": {
      name: "opacity",
      type: c.R8_UNSIGNED,
      precisionFactor: 100,
    },
    "fill-pattern": {
      name: "tlbr",
      type: c.R16G16B16A16_PATTERN,
      isOptional: !0,
    },
  });
let M = class Z extends H {
  constructor(t, e) {
    super(t), (this._usefillColor = e);
  }
  geometryInfo() {
    return Z.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return this._usefillColor ? Z.ATTRIBUTES_FILL : Z.ATTRIBUTES_OUTLINE;
  }
  attributesInfo() {
    return this._usefillColor
      ? Z.ATTRIBUTES_INFO_FILL
      : Z.ATTRIBUTES_INFO_OUTLINE;
  }
};
(M.ATTRIBUTES_OUTLINE = ["fill-outline-color", "fill-opacity"]),
  (M.ATTRIBUTES_FILL = ["fill-color", "fill-opacity"]),
  (M.GEOMETRY_LAYOUT = [
    new R("a_pos", 2, g.SHORT, 0, 8),
    new R("a_offset", 2, g.BYTE, 4, 8),
    new R("a_xnormal", 2, g.BYTE, 6, 8),
  ]),
  (M.ATTRIBUTES_INFO_OUTLINE = {
    "fill-outline-color": { name: "color", type: c.R8G8B8A8_COLOR },
    "fill-opacity": {
      name: "opacity",
      type: c.R8_UNSIGNED,
      precisionFactor: 100,
    },
  }),
  (M.ATTRIBUTES_INFO_FILL = {
    "fill-color": { name: "color", type: c.R8G8B8A8_COLOR },
    "fill-opacity": {
      name: "opacity",
      type: c.R8_UNSIGNED,
      precisionFactor: 100,
    },
  });
let et = class gt extends H {
  constructor(t) {
    super(t);
  }
  geometryInfo() {
    return gt.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return gt.ATTRIBUTES;
  }
  attributesInfo() {
    return gt.ATTRIBUTES_INFO;
  }
};
(et.ATTRIBUTES = [
  "line-blur",
  "line-color",
  "line-gap-width",
  "line-offset",
  "line-opacity",
  "line-width",
  "line-pattern",
  "line-dasharray",
]),
  (et.GEOMETRY_LAYOUT = [
    new R("a_pos", 2, g.SHORT, 0, 16),
    new R("a_extrude_offset", 4, g.BYTE, 4, 16),
    new R("a_dir_normal", 4, g.BYTE, 8, 16),
    new R("a_accumulatedDistance", 2, g.UNSIGNED_SHORT, 12, 16),
  ]),
  (et.ATTRIBUTES_INFO = {
    "line-width": { name: "width", type: c.R8_UNSIGNED, precisionFactor: 2 },
    "line-gap-width": {
      name: "gap_width",
      type: c.R8_UNSIGNED,
      precisionFactor: 2,
    },
    "line-offset": { name: "offset", type: c.R8_SIGNED, precisionFactor: 2 },
    "line-color": { name: "color", type: c.R8G8B8A8_COLOR },
    "line-opacity": {
      name: "opacity",
      type: c.R8_UNSIGNED,
      precisionFactor: 100,
    },
    "line-blur": { name: "blur", type: c.R8_UNSIGNED, precisionFactor: 4 },
    "line-pattern": {
      name: "tlbr",
      type: c.R16G16B16A16_PATTERN,
      isOptional: !0,
    },
    "line-dasharray": {
      name: "tlbr",
      type: c.R16G16B16A16_DASHARRAY,
      isOptional: !0,
    },
  });
const le = [
    new R("a_pos", 2, g.SHORT, 0, 16),
    new R("a_vertexOffset", 2, g.SHORT, 4, 16),
    new R("a_texAngleRange", 4, g.UNSIGNED_BYTE, 8, 16),
    new R("a_levelInfo", 4, g.UNSIGNED_BYTE, 12, 16),
  ],
  ue = [new R("a_opacityInfo", 1, g.UNSIGNED_BYTE, 0, 1)];
let ot = class Nt extends H {
  constructor(t) {
    super(t);
  }
  geometryInfo() {
    return le;
  }
  opacityInfo() {
    return ue;
  }
  attributes() {
    return Nt.ATTRIBUTES;
  }
  attributesInfo() {
    return Nt.ATTRIBUTES_INFO;
  }
};
(ot.ATTRIBUTES = [
  "icon-color",
  "icon-opacity",
  "icon-halo-blur",
  "icon-halo-color",
  "icon-halo-width",
  "icon-size",
]),
  (ot.ATTRIBUTES_INFO = {
    "icon-color": { name: "color", type: c.R8G8B8A8_COLOR },
    "icon-opacity": {
      name: "opacity",
      type: c.R8_UNSIGNED,
      precisionFactor: 100,
    },
    "icon-halo-color": { name: "halo_color", type: c.R8G8B8A8_COLOR },
    "icon-halo-width": {
      name: "halo_width",
      type: c.R8_UNSIGNED,
      precisionFactor: 4,
    },
    "icon-halo-blur": {
      name: "halo_blur",
      type: c.R8_UNSIGNED,
      precisionFactor: 4,
    },
    "icon-size": {
      name: "size",
      type: c.R8_UNSIGNED,
      precisionFactor: 32,
      isLayout: !0,
    },
  });
let lt = class Rt extends H {
  constructor(t) {
    super(t);
  }
  geometryInfo() {
    return le;
  }
  opacityInfo() {
    return ue;
  }
  attributes() {
    return Rt.ATTRIBUTES;
  }
  attributesInfo() {
    return Rt.ATTRIBUTES_INFO;
  }
};
(lt.ATTRIBUTES = [
  "text-color",
  "text-opacity",
  "text-halo-blur",
  "text-halo-color",
  "text-halo-width",
  "text-size",
]),
  (lt.ATTRIBUTES_INFO = {
    "text-color": { name: "color", type: c.R8G8B8A8_COLOR },
    "text-opacity": {
      name: "opacity",
      type: c.R8_UNSIGNED,
      precisionFactor: 100,
    },
    "text-halo-color": { name: "halo_color", type: c.R8G8B8A8_COLOR },
    "text-halo-width": {
      name: "halo_width",
      type: c.R8_UNSIGNED,
      precisionFactor: 4,
    },
    "text-halo-blur": {
      name: "halo_blur",
      type: c.R8_UNSIGNED,
      precisionFactor: 4,
    },
    "text-size": { name: "size", type: c.R8_UNSIGNED, isLayout: !0 },
  });
const ce = { kind: "null" },
  w = { kind: "number" },
  B = { kind: "string" },
  A = { kind: "boolean" },
  Y = { kind: "color" },
  bt = { kind: "object" },
  C = { kind: "value" };
function ct(n, t) {
  return { kind: "array", itemType: n, n: t };
}
const we = [ce, w, B, A, Y, bt, ct(C)];
function rt(n) {
  if (n.kind === "array") {
    const t = rt(n.itemType);
    return typeof n.n == "number"
      ? `array<${t}, ${n.n}>`
      : n.itemType.kind === "value"
      ? "array"
      : `array<${t}>`;
  }
  return n.kind;
}
function It(n) {
  if (n === null) return ce;
  if (typeof n == "string") return B;
  if (typeof n == "boolean") return A;
  if (typeof n == "number") return w;
  if (n instanceof I) return Y;
  if (Array.isArray(n)) {
    let t;
    for (const e of n) {
      const r = It(e);
      if (t) {
        if (t !== r) {
          t = C;
          break;
        }
      } else t = r;
    }
    return ct(t || C, n.length);
  }
  return typeof n == "object" ? bt : C;
}
function At(n, t) {
  if (t.kind === "array")
    return (
      n.kind === "array" &&
      ((n.n === 0 && n.itemType.kind === "value") ||
        At(n.itemType, t.itemType)) &&
      (typeof t.n != "number" || t.n === n.n)
    );
  if (t.kind === "value") {
    for (const e of we) if (At(n, e)) return !0;
  }
  return t.kind === n.kind;
}
function xt(n) {
  if (n === null) return "";
  const t = typeof n;
  return t === "string"
    ? n
    : t === "number" || t === "boolean"
    ? String(n)
    : n instanceof I
    ? n.toString()
    : JSON.stringify(n);
}
class St {
  constructor() {
    this.type = C;
  }
  static parse(t) {
    if (t.length > 1) throw new Error('"id" does not expect arguments');
    return new St();
  }
  evaluate(t, e) {
    return t == null ? void 0 : t.id;
  }
}
class Lt {
  constructor() {
    this.type = B;
  }
  static parse(t) {
    if (t.length > 1)
      throw new Error('"geometry-type" does not expect arguments');
    return new Lt();
  }
  evaluate(t, e) {
    if (!t) return null;
    switch (t.type) {
      case Tt.Point:
        return "Point";
      case Tt.LineString:
        return "LineString";
      case Tt.Polygon:
        return "Polygon";
      default:
        return null;
    }
  }
}
class vt {
  constructor() {
    this.type = w;
  }
  static parse(t) {
    if (t.length > 1) throw new Error('"zoom" does not expect arguments');
    return new vt();
  }
  evaluate(t, e) {
    return e;
  }
}
class L {
  constructor(t, e, r) {
    (this._lhs = t), (this._rhs = e), (this._compare = r), (this.type = A);
  }
  static parse(t, e, r) {
    if (t.length !== 3 && t.length !== 4)
      throw new Error(`"${t[0]}" expects 2 or 3 arguments`);
    if (t.length === 4) throw new Error(`"${t[0]}" collator not supported`);
    return new L(y(t[1], e), y(t[2], e), r);
  }
  evaluate(t, e) {
    return this._compare(this._lhs.evaluate(t, e), this._rhs.evaluate(t, e));
  }
}
class Ut {
  constructor(t) {
    (this._arg = t), (this.type = A);
  }
  static parse(t, e) {
    if (t.length !== 2) throw new Error('"!" expects 1 argument');
    return new Ut(y(t[1], e));
  }
  evaluate(t, e) {
    return !this._arg.evaluate(t, e);
  }
}
class Bt {
  constructor(t) {
    (this._args = t), (this.type = A);
  }
  static parse(t, e) {
    const r = [];
    for (let i = 1; i < t.length; i++) r.push(y(t[i], e));
    return new Bt(r);
  }
  evaluate(t, e) {
    for (const r of this._args) if (!r.evaluate(t, e)) return !1;
    return !0;
  }
}
class Ot {
  constructor(t) {
    (this._args = t), (this.type = A);
  }
  static parse(t, e) {
    const r = [];
    for (let i = 1; i < t.length; i++) r.push(y(t[i], e));
    return new Ot(r);
  }
  evaluate(t, e) {
    for (const r of this._args) if (r.evaluate(t, e)) return !0;
    return !1;
  }
}
class Gt {
  constructor(t) {
    (this._args = t), (this.type = A);
  }
  static parse(t, e) {
    const r = [];
    for (let i = 1; i < t.length; i++) r.push(y(t[i], e));
    return new Gt(r);
  }
  evaluate(t, e) {
    for (const r of this._args) if (r.evaluate(t, e)) return !1;
    return !0;
  }
}
class kt {
  constructor(t, e, r) {
    (this.type = t), (this._args = e), (this._fallback = r);
  }
  static parse(t, e, r) {
    if (t.length < 4) throw new Error('"case" expects at least 3 arguments');
    if (t.length % 2 == 1)
      throw new Error('"case" expects an odd number of arguments');
    let i;
    const a = [];
    for (let s = 1; s < t.length - 1; s += 2) {
      const l = y(t[s], e),
        u = y(t[s + 1], e, r);
      i || (i = u.type), a.push({ condition: l, output: u });
    }
    const o = y(t[t.length - 1], e, r);
    return i || (i = o.type), new kt(i, a, o);
  }
  evaluate(t, e) {
    for (const r of this._args)
      if (r.condition.evaluate(t, e)) return r.output.evaluate(t, e);
    return this._fallback.evaluate(t, e);
  }
}
class zt {
  constructor(t, e, r, i, a) {
    (this.type = t),
      (this._input = e),
      (this._labels = r),
      (this._outputs = i),
      (this._fallback = a);
  }
  static parse(t, e) {
    if (t.length < 3) throw new Error('"match" expects at least 3 arguments');
    if (t.length % 2 == 0)
      throw new Error('"case" expects an even number of arguments');
    let r;
    const i = y(t[1], e),
      a = [],
      o = {};
    let s;
    for (let l = 2; l < t.length - 1; l += 2) {
      let u = t[l];
      Array.isArray(u) || (u = [u]);
      for (const h of u) {
        const f = typeof h;
        if (f !== "string" && f !== "number")
          throw new Error(
            '"match" requires string or number literal as labels'
          );
        if (s) {
          if (f !== s)
            throw new Error('"match" requires labels to have the same type');
        } else s = f;
        o[h] = a.length;
      }
      const p = y(t[l + 1], e);
      r || (r = p.type), a.push(p);
    }
    return new zt(r, i, o, a, y(t[t.length - 1], e));
  }
  evaluate(t, e) {
    const r = this._input.evaluate(t, e);
    return (this._outputs[this._labels[r]] || this._fallback).evaluate(t, e);
  }
}
let _t = class j {
  constructor(t, e, r, i, a) {
    (this._operator = t),
      (this.type = e),
      (this.interpolation = r),
      (this.input = i),
      (this._stops = a);
  }
  static parse(t, e, r) {
    const i = t[0];
    if (t.length < 5) throw new Error(`"${i}" expects at least 4 arguments`);
    const a = t[1];
    if (!Array.isArray(a) || a.length === 0)
      throw new Error(`"${a}" is not a valid interpolation`);
    switch (a[0]) {
      case "linear":
        if (a.length !== 1)
          throw new Error("Linear interpolation cannot have parameters");
        break;
      case "exponential":
        if (a.length !== 2 || typeof a[1] != "number")
          throw new Error(
            "Exponential interpolation requires one numeric argument"
          );
        break;
      case "cubic-bezier":
        if (a.length !== 5)
          throw new Error(
            "Cubic bezier interpolation requires four numeric arguments with values between 0 and 1"
          );
        for (let u = 1; u < 5; u++) {
          const p = a[u];
          if (typeof p != "number" || p < 0 || p > 1)
            throw new Error(
              "Cubic bezier interpolation requires four numeric arguments with values between 0 and 1"
            );
        }
        break;
      default:
        throw new Error(`"${t[0]}" unknown interpolation type "${a[0]}"`);
    }
    if (t.length % 2 != 1)
      throw new Error(`"${i}" expects an even number of arguments`);
    const o = y(t[2], e, w);
    let s;
    i === "interpolate-hcl" || i === "interpolate-lab"
      ? (s = Y)
      : r && r.kind !== "value" && (s = r);
    const l = [];
    for (let u = 3; u < t.length; u += 2) {
      const p = t[u];
      if (typeof p != "number")
        throw new Error(`"${i}" requires stop inputs as literal numbers`);
      if (l.length && l[l.length - 1][0] >= p)
        throw new Error(`"${i}" requires strictly ascending stop inputs`);
      const h = y(t[u + 1], e, s);
      s || (s = h.type), l.push([p, h]);
    }
    if (s && s !== Y && s !== w && (s.kind !== "array" || s.itemType !== w))
      throw new Error(`"${i}" cannot interpolate type ${rt(s)}`);
    return new j(i, s, a, o, l);
  }
  evaluate(t, e) {
    const r = this._stops;
    if (r.length === 1) return r[0][1].evaluate(t, e);
    const i = this.input.evaluate(t, e);
    if (i <= r[0][0]) return r[0][1].evaluate(t, e);
    if (i >= r[r.length - 1][0]) return r[r.length - 1][1].evaluate(t, e);
    let a = 0;
    for (; ++a < r.length && !(i < r[a][0]); );
    const o = r[a - 1][0],
      s = r[a][0],
      l = j.interpolationRatio(this.interpolation, i, o, s),
      u = r[a - 1][1].evaluate(t, e),
      p = r[a][1].evaluate(t, e);
    if (this._operator === "interpolate") {
      if (this.type.kind === "array" && Array.isArray(u) && Array.isArray(p))
        return u.map((h, f) => P(h, p[f], l));
      if (this.type.kind === "color" && u instanceof I && p instanceof I) {
        const h = new I(u),
          f = new I(p);
        return new I([
          P(h.r, f.r, l),
          P(h.g, f.g, l),
          P(h.b, f.b, l),
          P(h.a, f.a, l),
        ]);
      }
      if (
        this.type.kind === "number" &&
        typeof u == "number" &&
        typeof p == "number"
      )
        return P(u, p, l);
      throw new Error(
        `"${this._operator}" cannot interpolate type ${rt(this.type)}`
      );
    }
    if (this._operator === "interpolate-hcl") {
      const h = Xt(u),
        f = Xt(p),
        _ = f.h - h.h,
        d = te({
          h:
            h.h + l * (_ > 180 || _ < -180 ? _ - 360 * Math.round(_ / 360) : _),
          c: P(h.c, f.c, l),
          l: P(h.l, f.l, l),
        });
      return new I({ a: P(u.a, p.a, l), ...d });
    }
    if (this._operator === "interpolate-lab") {
      const h = ee(u),
        f = ee(p),
        _ = te({ l: P(h.l, f.l, l), a: P(h.a, f.a, l), b: P(h.b, f.b, l) });
      return new I({ a: P(u.a, p.a, l), ..._ });
    }
    throw new Error(`Unexpected operator "${this._operator}"`);
  }
  interpolationUniformValue(t, e) {
    const r = this._stops;
    if (r.length === 1 || t >= r[r.length - 1][0]) return 0;
    let i = 0;
    for (; ++i < r.length && !(t < r[i][0]); );
    const a = r[i - 1][0],
      o = r[i][0];
    return j.interpolationRatio(this.interpolation, e, a, o);
  }
  getInterpolationRange(t) {
    const e = this._stops;
    if (e.length === 1) {
      const a = e[0][0];
      return [a, a];
    }
    const r = e[e.length - 1][0];
    if (t >= r) return [r, r];
    let i = 0;
    for (; ++i < e.length && !(t < e[i][0]); );
    return [e[i - 1][0], e[i][0]];
  }
  static interpolationRatio(t, e, r, i) {
    let a = 0;
    return (
      t[0] === "linear"
        ? (a = j._exponentialInterpolationRatio(e, 1, r, i))
        : t[0] === "exponential"
        ? (a = j._exponentialInterpolationRatio(e, t[1], r, i))
        : t[0] === "cubic-bezier" &&
          (a = ge(
            t[1],
            t[2],
            t[3],
            t[4]
          )(j._exponentialInterpolationRatio(e, 1, r, i), 1e-5)),
      a < 0 ? (a = 0) : a > 1 && (a = 1),
      a
    );
  }
  static _exponentialInterpolationRatio(t, e, r, i) {
    const a = i - r;
    if (a === 0) return 0;
    const o = t - r;
    return e === 1 ? o / a : (e ** o - 1) / (e ** a - 1);
  }
};
class Ft {
  constructor(t, e, r) {
    (this.type = t), (this._input = e), (this._stops = r);
  }
  static parse(t, e) {
    if (t.length < 5) throw new Error('"step" expects at least 4 arguments');
    if (t.length % 2 != 1)
      throw new Error('"step" expects an even number of arguments');
    const r = y(t[1], e, w);
    let i;
    const a = [];
    a.push([-1 / 0, y(t[2], e)]);
    for (let o = 3; o < t.length; o += 2) {
      const s = t[o];
      if (typeof s != "number")
        throw new Error('"step" requires stop inputs as literal numbers');
      if (a.length && a[a.length - 1][0] >= s)
        throw new Error('"step" requires strictly ascending stop inputs');
      const l = y(t[o + 1], e);
      i || (i = l.type), a.push([s, l]);
    }
    return new Ft(i, r, a);
  }
  evaluate(t, e) {
    const r = this._stops;
    if (r.length === 1) return r[0][1].evaluate(t, e);
    const i = this._input.evaluate(t, e);
    let a = 0;
    for (; ++a < r.length && !(i < r[a][0]); );
    return this._stops[a - 1][1].evaluate(t, e);
  }
}
class Vt {
  constructor(t, e) {
    (this.type = t), (this._output = e);
  }
  static parse(t, e, r) {
    if (t.length < 4) throw new Error('"let" expects at least 3 arguments');
    if (t.length % 2 == 1)
      throw new Error('"let" expects an odd number of arguments');
    const i = new (class {
      constructor(o) {
        (this._parent = o), (this._vars = {});
      }
      add(o, s) {
        this._vars[o] = s;
      }
      get(o) {
        return this._vars[o]
          ? this._vars[o]
          : this._parent
          ? this._parent.get(o)
          : null;
      }
    })(e);
    for (let o = 1; o < t.length - 1; o += 2) {
      const s = t[o];
      if (typeof s != "string")
        throw new Error(
          `"let" requires a string to define variable names - found ${s}`
        );
      i.add(s, y(t[o + 1], e));
    }
    const a = y(t[t.length - 1], i, r);
    return new Vt(a.type, a);
  }
  evaluate(t, e) {
    return this._output.evaluate(t, e);
  }
}
class Mt {
  constructor(t, e, r) {
    (this.type = t), (this._index = e), (this._array = r);
  }
  static parse(t, e) {
    if (t.length !== 3) throw new Error('"at" expects 2 arguments');
    const r = y(t[1], e, w),
      i = y(t[2], e);
    return new Mt(i.type.itemType, r, i);
  }
  evaluate(t, e) {
    const r = this._index.evaluate(t, e),
      i = this._array.evaluate(t, e);
    if (r < 0 || r >= i.length) throw new Error('"at" index out of bounds');
    if (r !== Math.floor(r)) throw new Error('"at" index must be an integer');
    return i[r];
  }
}
class dt {
  constructor(t, e) {
    (this._key = t), (this._obj = e), (this.type = C);
  }
  static parse(t, e) {
    let r, i;
    switch (t.length) {
      case 2:
        return (r = y(t[1], e)), new dt(r);
      case 3:
        return (r = y(t[1], e)), (i = y(t[2], e)), new dt(r, i);
      default:
        throw new Error('"get" expects 1 or 2 arguments');
    }
  }
  evaluate(t, e) {
    const r = this._key.evaluate(t, e);
    return this._obj
      ? this._obj.evaluate(t, e)[r]
      : t == null
      ? void 0
      : t.values[r];
  }
}
class mt {
  constructor(t, e) {
    (this._key = t), (this._obj = e), (this.type = A);
  }
  static parse(t, e) {
    let r, i;
    switch (t.length) {
      case 2:
        return (r = y(t[1], e)), new mt(r);
      case 3:
        return (r = y(t[1], e)), (i = y(t[2], e)), new mt(r, i);
      default:
        throw new Error('"has" expects 1 or 2 arguments');
    }
  }
  evaluate(t, e) {
    const r = this._key.evaluate(t, e);
    return this._obj
      ? r in this._obj.evaluate(t, e)
      : !!(t != null && t.values[r]);
  }
}
class $t {
  constructor(t, e) {
    (this._key = t), (this._vals = e), (this.type = A);
  }
  static parse(t, e) {
    if (t.length !== 3) throw new Error('"in" expects 2 arguments');
    return new $t(y(t[1], e), y(t[2], e));
  }
  evaluate(t, e) {
    const r = this._key.evaluate(t, e);
    return this._vals.evaluate(t, e).includes(r);
  }
}
class Ct {
  constructor(t) {
    (this._arg = t), (this.type = w);
  }
  static parse(t, e) {
    if (t.length !== 2) throw new Error('"length" expects 2 arguments');
    const r = y(t[1], e);
    return new Ct(r);
  }
  evaluate(t, e) {
    const r = this._arg.evaluate(t, e);
    if (typeof r == "string" || Array.isArray(r)) return r.length;
    throw new Error('"length" expects string or array');
  }
}
class wt {
  constructor(t, e, r, i) {
    (this.type = t), (this._array = e), (this._from = r), (this._to = i);
  }
  static parse(t, e) {
    if (t.length < 3 || t.length > 4)
      throw new Error('"slice" expects 2 or 3 arguments');
    const r = y(t[1], e),
      i = y(t[2], e, w);
    if (i.type !== w) throw new Error('"slice" index must return a number');
    if (t.length === 4) {
      const a = y(t[3], e, w);
      if (a.type !== w) throw new Error('"slice" index must return a number');
      return new wt(r.type, r, i, a);
    }
    return new wt(r.type, r, i);
  }
  evaluate(t, e) {
    const r = this._array.evaluate(t, e);
    if (!Array.isArray(r) && typeof r != "string")
      throw new Error('"slice" input must be an array or a string');
    const i = this._from.evaluate(t, e);
    if (i < 0 || i >= r.length) throw new Error('"slice" index out of bounds');
    if (i !== Math.floor(i))
      throw new Error('"slice" index must be an integer');
    if (this._to) {
      const a = this._to.evaluate(t, e);
      if (a < 0 || a >= r.length)
        throw new Error('"slice" index out of bounds');
      if (a !== Math.floor(a))
        throw new Error('"slice" index must be an integer');
      return r.slice(i, a);
    }
    return r.slice(i);
  }
}
class Yt {
  constructor() {
    this.type = A;
  }
  static parse(t) {
    if (t.length !== 1) throw new Error('"has-id" expects no arguments');
    return new Yt();
  }
  evaluate(t, e) {
    return t && t.id !== void 0;
  }
}
class S {
  constructor(t, e) {
    (this._args = t), (this._calculate = e), (this.type = w);
  }
  static parse(t, e, r) {
    const i = t.slice(1).map((a) => y(a, e));
    return new S(i, r);
  }
  evaluate(t, e) {
    let r;
    return (
      this._args && (r = this._args.map((i) => i.evaluate(t, e))),
      this._calculate(r)
    );
  }
}
class m {
  constructor(t, e) {
    (this._args = t), (this._calculate = e), (this.type = w);
  }
  static parse(t, e) {
    const r = t.slice(1).map((i) => y(i, e));
    return new m(r, m.ops[t[0]]);
  }
  evaluate(t, e) {
    let r;
    return (
      this._args && (r = this._args.map((i) => i.evaluate(t, e))),
      this._calculate(r)
    );
  }
}
m.ops = {
  abs: (n) => Math.abs(n[0]),
  acos: (n) => Math.acos(n[0]),
  asin: (n) => Math.asin(n[0]),
  atan: (n) => Math.atan(n[0]),
  ceil: (n) => Math.ceil(n[0]),
  cos: (n) => Math.cos(n[0]),
  e: () => Math.E,
  floor: (n) => Math.floor(n[0]),
  ln: (n) => Math.log(n[0]),
  ln2: () => Math.LN2,
  log10: (n) => Math.log(n[0]) / Math.LN10,
  log2: (n) => Math.log(n[0]) / Math.LN2,
  max: (n) => Math.max(...n),
  min: (n) => Math.min(...n),
  pi: () => Math.PI,
  round: (n) => Math.round(n[0]),
  sin: (n) => Math.sin(n[0]),
  sqrt: (n) => Math.sqrt(n[0]),
  tan: (n) => Math.tan(n[0]),
};
class Ht {
  constructor(t) {
    (this._args = t), (this.type = B);
  }
  static parse(t, e) {
    return new Ht(t.slice(1).map((r) => y(r, e)));
  }
  evaluate(t, e) {
    return this._args.map((r) => r.evaluate(t, e)).join("");
  }
}
class it {
  constructor(t, e) {
    (this._arg = t), (this._calculate = e), (this.type = B);
  }
  static parse(t, e) {
    if (t.length !== 2) throw new Error(`${t[0]} expects 1 argument`);
    const r = y(t[1], e);
    return new it(r, it.ops[t[0]]);
  }
  evaluate(t, e) {
    return this._calculate(this._arg.evaluate(t, e));
  }
}
it.ops = { downcase: (n) => n.toLowerCase(), upcase: (n) => n.toUpperCase() };
class jt {
  constructor(t) {
    (this._args = t), (this.type = Y);
  }
  static parse(t, e) {
    if (t.length !== 4) throw new Error('"rgb" expects 3 arguments');
    const r = t.slice(1).map((i) => y(i, e));
    return new jt(r);
  }
  evaluate(t, e) {
    const r = this._validate(this._args[0].evaluate(t, e)),
      i = this._validate(this._args[1].evaluate(t, e)),
      a = this._validate(this._args[2].evaluate(t, e));
    return new I({ r, g: i, b: a });
  }
  _validate(t) {
    if (typeof t != "number" || t < 0 || t > 255)
      throw new Error(`${t}: invalid color component`);
    return Math.round(t);
  }
}
class Kt {
  constructor(t) {
    (this._args = t), (this.type = Y);
  }
  static parse(t, e) {
    if (t.length !== 5) throw new Error('"rgba" expects 4 arguments');
    const r = t.slice(1).map((i) => y(i, e));
    return new Kt(r);
  }
  evaluate(t, e) {
    const r = this._validate(this._args[0].evaluate(t, e)),
      i = this._validate(this._args[1].evaluate(t, e)),
      a = this._validate(this._args[2].evaluate(t, e)),
      o = this._validateAlpha(this._args[3].evaluate(t, e));
    return new I({ r, g: i, b: a, a: o });
  }
  _validate(t) {
    if (typeof t != "number" || t < 0 || t > 255)
      throw new Error(`${t}: invalid color component`);
    return Math.round(t);
  }
  _validateAlpha(t) {
    if (typeof t != "number" || t < 0 || t > 1)
      throw new Error(`${t}: invalid alpha color component`);
    return t;
  }
}
class qt {
  constructor(t) {
    (this._color = t), (this.type = ct(w, 4));
  }
  static parse(t, e) {
    if (t.length !== 2) throw new Error('"to-rgba" expects 1 argument');
    const r = y(t[1], e);
    return new qt(r);
  }
  evaluate(t, e) {
    return new I(this._color.evaluate(t, e)).toRgba();
  }
}
class q {
  constructor(t, e) {
    (this.type = t), (this._args = e);
  }
  static parse(t, e) {
    const r = t[0];
    if (t.length < 2) throw new Error(`${r} expects at least one argument`);
    let i,
      a = 1;
    if (r === "array") {
      if (t.length > 2) {
        switch (t[1]) {
          case "string":
            i = B;
            break;
          case "number":
            i = w;
            break;
          case "boolean":
            i = A;
            break;
          default:
            throw new Error(
              '"array" type argument must be string, number or boolean'
            );
        }
        a++;
      } else i = C;
      let s;
      if (t.length > 3) {
        if (
          ((s = t[2]),
          s !== null && (typeof s != "number" || s < 0 || s !== Math.floor(s)))
        )
          throw new Error(
            '"array" length argument must be a positive integer literal'
          );
        a++;
      }
      i = ct(i, s);
    } else
      switch (r) {
        case "string":
          i = B;
          break;
        case "number":
          i = w;
          break;
        case "boolean":
          i = A;
          break;
        case "object":
          i = bt;
      }
    const o = [];
    for (; a < t.length; a++) {
      const s = y(t[a], e);
      o.push(s);
    }
    return new q(i, o);
  }
  evaluate(t, e) {
    let r;
    for (const i of this._args) {
      const a = i.evaluate(t, e);
      if (((r = It(a)), At(r, this.type))) return a;
    }
    throw new Error(`Expected ${rt(this.type)} but got ${rt(r)}`);
  }
}
class F {
  constructor(t, e) {
    (this.type = t), (this._args = e);
  }
  static parse(t, e) {
    const r = t[0],
      i = F.types[r];
    if (i === A || i === B) {
      if (t.length !== 2) throw new Error(`${r} expects one argument`);
    } else if (t.length < 2)
      throw new Error(`${r} expects at least one argument`);
    const a = [];
    for (let o = 1; o < t.length; o++) {
      const s = y(t[o], e);
      a.push(s);
    }
    return new F(i, a);
  }
  evaluate(t, e) {
    if (this.type === A) return Boolean(this._args[0].evaluate(t, e));
    if (this.type === B) return xt(this._args[0].evaluate(t, e));
    if (this.type === w) {
      for (const r of this._args) {
        const i = Number(r.evaluate(t, e));
        if (!isNaN(i)) return i;
      }
      return null;
    }
    if (this.type === Y) {
      for (const r of this._args)
        try {
          const i = F.toColor(r.evaluate(t, e));
          if (i instanceof I) return i;
        } catch {}
      return null;
    }
  }
  static toBoolean(t) {
    return Boolean(t);
  }
  static toString(t) {
    return xt(t);
  }
  static toNumber(t) {
    const e = Number(t);
    if (isNaN(e)) throw new Error(`"${t}" is not a number`);
    return e;
  }
  static toColor(t) {
    if (t instanceof I) return t;
    if (typeof t == "string") {
      const e = I.fromString(t);
      if (e) return e;
      throw new Error(`"${t}" is not a color`);
    }
    if (Array.isArray(t)) return I.fromArray(t);
    throw new Error(`"${t}" is not a color`);
  }
}
F.types = { "to-boolean": A, "to-color": Y, "to-number": w, "to-string": B };
class Wt {
  constructor(t) {
    (this._val = t), (this.type = It(t));
  }
  static parse(t) {
    if (t.length !== 2) throw new Error('"literal" expects 1 argument');
    return new Wt(t[1]);
  }
  evaluate(t, e) {
    return this._val;
  }
}
class Zt {
  constructor(t) {
    (this._arg = t), (this.type = B);
  }
  static parse(t, e) {
    if (t.length !== 2) throw new Error('"typeof" expects 1 argument');
    return new Zt(y(t[1], e));
  }
  evaluate(t, e) {
    return rt(It(this._arg.evaluate(t, e)));
  }
}
function y(n, t, e) {
  const r = typeof n;
  if (r === "string" || r === "boolean" || r === "number" || n === null) {
    if (e)
      switch (e.kind) {
        case "string":
          r !== "string" && (n = F.toString(n));
          break;
        case "number":
          r !== "number" && (n = F.toNumber(n));
          break;
        case "color":
          n = F.toColor(n);
      }
    n = ["literal", n];
  }
  if (!Array.isArray(n) || n.length === 0)
    throw new Error("Expression must be a non empty array");
  const i = n[0];
  if (typeof i != "string")
    throw new Error("First element of expression must be a string");
  const a = he[i];
  if (a === void 0) throw new Error(`Invalid expression operator "${i}"`);
  if (!a) throw new Error(`Unimplemented expression operator "${i}"`);
  return a.parse(n, t, e);
}
const he = {
  array: q,
  boolean: q,
  collator: null,
  format: null,
  image: null,
  literal: Wt,
  number: q,
  "number-format": null,
  object: q,
  string: q,
  "to-boolean": F,
  "to-color": F,
  "to-number": F,
  "to-string": F,
  typeof: Zt,
  accumulated: null,
  "feature-state": null,
  "geometry-type": Lt,
  id: St,
  "line-progress": null,
  properties: class pe {
    constructor() {
      this.type = bt;
    }
    static parse(t) {
      if (t.length > 1)
        throw new Error('"properties" does not expect arguments');
      return new pe();
    }
    evaluate(t, e) {
      return t == null ? void 0 : t.values;
    }
  },
  at: Mt,
  get: dt,
  has: mt,
  in: $t,
  "index-of": class Pt {
    constructor(t, e, r) {
      (this._item = t), (this._array = e), (this._from = r), (this.type = w);
    }
    static parse(t, e) {
      if (t.length < 3 || t.length > 4)
        throw new Error('"index-of" expects 3 or 4 arguments');
      const r = y(t[1], e),
        i = y(t[2], e);
      if (t.length === 4) {
        const a = y(t[3], e, w);
        return new Pt(r, i, a);
      }
      return new Pt(r, i);
    }
    evaluate(t, e) {
      const r = this._item.evaluate(t, e),
        i = this._array.evaluate(t, e);
      if (this._from) {
        const a = this._from.evaluate(t, e);
        if (a !== Math.floor(a))
          throw new Error('"index-of" index must be an integer');
        return i.indexOf(r, a);
      }
      return i.indexOf(r);
    }
  },
  length: Ct,
  slice: wt,
  "!": Ut,
  "!=": class extends L {
    static parse(n, t) {
      return L.parse(n, t, (e, r) => e !== r);
    }
  },
  "<": class extends L {
    static parse(n, t) {
      return L.parse(n, t, (e, r) => e < r);
    }
  },
  "<=": class extends L {
    static parse(n, t) {
      return L.parse(n, t, (e, r) => e <= r);
    }
  },
  "==": class extends L {
    static parse(n, t) {
      return L.parse(n, t, (e, r) => e === r);
    }
  },
  ">": class extends L {
    static parse(n, t) {
      return L.parse(n, t, (e, r) => e > r);
    }
  },
  ">=": class extends L {
    static parse(n, t) {
      return L.parse(n, t, (e, r) => e >= r);
    }
  },
  all: Bt,
  any: Ot,
  case: kt,
  coalesce: class ye {
    constructor(t, e) {
      (this.type = t), (this._args = e);
    }
    static parse(t, e) {
      if (t.length < 2)
        throw new Error('"coalesce" expects at least 1 argument');
      let r;
      const i = [];
      for (let a = 1; a < t.length; a++) {
        const o = y(t[a], e);
        r || (r = o.type), i.push(o);
      }
      return new ye(r, i);
    }
    evaluate(t, e) {
      for (const r of this._args) {
        const i = r.evaluate(t, e);
        if (i !== null) return i;
      }
      return null;
    }
  },
  match: zt,
  within: null,
  interpolate: _t,
  "interpolate-hcl": _t,
  "interpolate-lab": _t,
  step: Ft,
  let: Vt,
  var: class fe {
    constructor(t, e) {
      (this.type = t), (this.output = e);
    }
    static parse(t, e, r) {
      if (t.length !== 2 || typeof t[1] != "string")
        throw new Error('"var" requires just one literal string argument');
      const i = e.get(t[1]);
      if (!i)
        throw new Error(
          `${t[1]} must be defined before being used in a "var" expression`
        );
      return new fe(r || C, i);
    }
    evaluate(t, e) {
      return this.output.evaluate(t, e);
    }
  },
  concat: Ht,
  downcase: it,
  "is-supported-script": null,
  "resolved-locale": null,
  upcase: it,
  rgb: jt,
  rgba: Kt,
  "to-rgba": qt,
  "-": class extends S {
    static parse(n, t) {
      switch (n.length) {
        case 2:
          return S.parse(n, t, (e) => -e[0]);
        case 3:
          return S.parse(n, t, (e) => e[0] - e[1]);
        default:
          throw new Error('"-" expects 1 or 2 arguments');
      }
    }
  },
  "*": class extends S {
    static parse(n, t) {
      return S.parse(n, t, (e) => {
        let r = 1;
        for (const i of e) r *= i;
        return r;
      });
    }
  },
  "/": class extends S {
    static parse(n, t) {
      if (n.length === 3) return S.parse(n, t, (e) => e[0] / e[1]);
      throw new Error('"/" expects 2 arguments');
    }
  },
  "%": class extends S {
    static parse(n, t) {
      if (n.length === 3) return S.parse(n, t, (e) => e[0] % e[1]);
      throw new Error('"%" expects 2 arguments');
    }
  },
  "^": class extends S {
    static parse(n, t) {
      if (n.length === 3) return S.parse(n, t, (e) => e[0] ** e[1]);
      throw new Error('"^" expects 1 or 2 arguments');
    }
  },
  "+": class extends S {
    static parse(n, t) {
      return S.parse(n, t, (e) => {
        let r = 0;
        for (const i of e) r += i;
        return r;
      });
    }
  },
  abs: m,
  acos: m,
  asin: m,
  atan: m,
  ceil: m,
  cos: m,
  e: m,
  floor: m,
  ln: m,
  ln2: m,
  log10: m,
  log2: m,
  max: m,
  min: m,
  pi: m,
  round: m,
  sin: m,
  sqrt: m,
  tan: m,
  zoom: vt,
  "heatmap-density": null,
  "has-id": Yt,
  none: Gt,
};
class U {
  constructor(t) {
    this._expression = t;
  }
  filter(t, e) {
    if (!this._expression) return !0;
    try {
      return this._expression.evaluate(t, e);
    } catch {
      return !0;
    }
  }
  static createFilter(t) {
    if (!t) return null;
    this.isLegacyFilter(t) && (t = this.convertLegacyFilter(t));
    try {
      const e = y(t, null, A);
      return new U(e);
    } catch {
      return null;
    }
  }
  static isLegacyFilter(t) {
    if (!Array.isArray(t) || t.length === 0) return !0;
    switch (t[0]) {
      case "==":
      case "!=":
      case ">":
      case "<":
      case ">=":
      case "<=":
        return (
          t.length === 3 && typeof t[1] == "string" && !Array.isArray(t[2])
        );
      case "in":
        return t.length >= 3 && typeof t[1] == "string" && !Array.isArray(t[2]);
      case "!in":
      case "none":
      case "!has":
        return !0;
      case "any":
      case "all":
        for (let e = 1; e < t.length; e++)
          if (this.isLegacyFilter(t[e])) return !0;
        return !1;
      case "has":
        return t.length === 2 && (t[1] === "$id" || t[1] === "$type");
      default:
        return !1;
    }
  }
  static convertLegacyFilter(t) {
    if (!Array.isArray(t) || t.length === 0) return !0;
    const e = t[0];
    if (t.length === 1) return e !== "any";
    switch (e) {
      case "==":
        return U.convertComparison("==", t[1], t[2]);
      case "!=":
        return U.negate(U.convertComparison("==", t[1], t[2]));
      case ">":
      case "<":
      case ">=":
      case "<=":
        return U.convertComparison(e, t[1], t[2]);
      case "in":
        return U.convertIn(t[1], t.slice(2));
      case "!in":
        return U.negate(U.convertIn(t[1], t.slice(2)));
      case "any":
      case "all":
      case "none":
        return U.convertCombining(e, t.slice(1));
      case "has":
        return U.convertHas(t[1]);
      case "!has":
        return U.negate(U.convertHas(t[1]));
      default:
        throw new Error("Unexpected legacy filter.");
    }
  }
  static convertComparison(t, e, r) {
    switch (e) {
      case "$type":
        return [t, ["geometry-type"], r];
      case "$id":
        return [t, ["id"], r];
      default:
        return [t, ["get", e], r];
    }
  }
  static convertIn(t, e) {
    switch (t) {
      case "$type":
        return ["in", ["geometry-type"], ["literal", e]];
      case "$id":
        return ["in", ["id"], ["literal", e]];
      default:
        return ["in", ["get", t], ["literal", e]];
    }
  }
  static convertHas(t) {
    switch (t) {
      case "$type":
        return !0;
      case "$id":
        return ["has-id"];
      default:
        return ["has", t];
    }
  }
  static convertCombining(t, e) {
    return [t].concat(e.map(this.convertLegacyFilter));
  }
  static negate(t) {
    return ["!", t];
  }
}
class Et {
  constructor(t, e) {
    let r;
    switch (((this.isDataDriven = !1), (this.interpolator = null), t.type)) {
      case "number":
      case "color":
        r = !0;
        break;
      case "array":
        r = t.value === "number";
        break;
      default:
        r = !1;
    }
    if (
      (e == null && (e = t.default),
      Array.isArray(e) && e.length > 0 && he[e[0]])
    ) {
      const a = { number: w, color: Y, string: B, boolean: A, enum: B };
      try {
        const o = y(
          e,
          null,
          t.type === "array" ? ct(a[t.value] || C, t.length) : a[t.type]
        );
        (this.getValue = this._buildExpression(o, t)),
          (this.isDataDriven = !0),
          o instanceof _t && o.input instanceof vt && (this.interpolator = o);
      } catch {
        this.getValue = this._buildSimple(t.default);
      }
      return;
    }
    r && e.type === "interval" && (r = !1);
    const i = e && e.stops && e.stops.length > 0;
    if (i) for (const a of e.stops) a[1] = this._validate(a[1], t);
    if (((this.isDataDriven = !!e && !!e.property), this.isDataDriven))
      if (
        (e.default !== void 0 && (e.default = this._validate(e.default, t)), i)
      )
        switch (e.type) {
          case "identity":
            this.getValue = this._buildIdentity(e, t);
            break;
          case "categorical":
            this.getValue = this._buildCategorical(e, t);
            break;
          default:
            this.getValue = r
              ? this._buildInterpolate(e, t)
              : this._buildInterval(e, t);
        }
      else this.getValue = this._buildIdentity(e, t);
    else
      i
        ? (this.getValue = r
            ? this._buildZoomInterpolate(e)
            : this._buildZoomInterval(e))
        : ((e = this._validate(e, t)), (this.getValue = this._buildSimple(e)));
  }
  _validate(t, e) {
    if (e.type === "number") {
      if (t < e.minimum) return e.minimum;
      if (t > e.maximum) return e.maximum;
    } else
      e.type === "color"
        ? (t = Et._parseColor(t))
        : e.type === "enum"
        ? typeof t == "string" && (t = e.values.indexOf(t))
        : e.type === "array" && e.value === "enum"
        ? (t = t.map((r) => (typeof r == "string" ? e.values.indexOf(r) : r)))
        : e.type === "string" && (t = xt(t));
    return t;
  }
  _buildSimple(t) {
    return () => t;
  }
  _buildExpression(t, e) {
    return (r, i) => {
      try {
        const a = t.evaluate(i, r);
        return a === void 0 ? e.default : this._validate(a, e);
      } catch {
        return e.default;
      }
    };
  }
  _buildIdentity(t, e) {
    return (r, i) => {
      let a;
      return (
        i && (a = i.values[t.property]),
        a !== void 0 && (a = this._validate(a, e)),
        a ?? (t.default !== void 0 ? t.default : e.default)
      );
    };
  }
  _buildCategorical(t, e) {
    return (r, i) => {
      let a;
      return (
        i && (a = i.values[t.property]),
        (a = this._categorical(a, t.stops)),
        a !== void 0 ? a : t.default !== void 0 ? t.default : e.default
      );
    };
  }
  _buildInterval(t, e) {
    return (r, i) => {
      let a;
      return (
        i && (a = i.values[t.property]),
        typeof a == "number"
          ? this._interval(a, t.stops)
          : t.default !== void 0
          ? t.default
          : e.default
      );
    };
  }
  _buildInterpolate(t, e) {
    return (r, i) => {
      let a;
      return (
        i && (a = i.values[t.property]),
        typeof a == "number"
          ? this._interpolate(a, t.stops, t.base || 1)
          : t.default !== void 0
          ? t.default
          : e.default
      );
    };
  }
  _buildZoomInterpolate(t) {
    return (e) => this._interpolate(e, t.stops, t.base || 1);
  }
  _buildZoomInterval(t) {
    return (e) => this._interval(e, t.stops);
  }
  _categorical(t, e) {
    const r = e.length;
    for (let i = 0; i < r; i++) if (e[i][0] === t) return e[i][1];
  }
  _interval(t, e) {
    const r = e.length;
    let i = 0;
    for (let a = 0; a < r && e[a][0] <= t; a++) i = a;
    return e[i][1];
  }
  _interpolate(t, e, r) {
    let i, a;
    const o = e.length;
    for (let s = 0; s < o; s++) {
      const l = e[s];
      if (!(l[0] <= t)) {
        a = l;
        break;
      }
      i = l;
    }
    if (i && a) {
      const s = a[0] - i[0],
        l = t - i[0],
        u = r === 1 ? l / s : (r ** l - 1) / (r ** s - 1);
      if (Array.isArray(i[1])) {
        const p = i[1],
          h = a[1],
          f = [];
        for (let _ = 0; _ < p.length; _++) f.push(P(p[_], h[_], u));
        return f;
      }
      return P(i[1], a[1], u);
    }
    return i ? i[1] : a ? a[1] : void 0;
  }
  static _isEmpty(t) {
    for (const e in t) if (t.hasOwnProperty(e)) return !1;
    return !0;
  }
  static _parseColor(t) {
    return Array.isArray(t)
      ? t
      : (typeof t == "string" && (t = new I(t)),
        t instanceof I && !this._isEmpty(t) ? I.toUnitRGBA(t) : void 0);
  }
}
var ut;
(function (n) {
  (n[(n.BUTT = 0)] = "BUTT"),
    (n[(n.ROUND = 1)] = "ROUND"),
    (n[(n.SQUARE = 2)] = "SQUARE"),
    (n[(n.UNKNOWN = 4)] = "UNKNOWN");
})(ut || (ut = {}));
class ht {
  constructor(t, e, r, i) {
    switch (
      ((this.type = t),
      (this.typeName = e.type),
      (this.id = e.id),
      (this.source = e.source),
      (this.sourceLayer = e["source-layer"]),
      (this.minzoom = e.minzoom),
      (this.maxzoom = e.maxzoom),
      (this.filter = e.filter),
      (this.layout = e.layout),
      (this.paint = e.paint),
      (this.z = r),
      (this.uid = i),
      t)
    ) {
      case b.BACKGROUND:
        (this._layoutDefinition = V.backgroundLayoutDefinition),
          (this._paintDefinition = V.backgroundPaintDefinition);
        break;
      case b.FILL:
        (this._layoutDefinition = V.fillLayoutDefinition),
          (this._paintDefinition = V.fillPaintDefinition);
        break;
      case b.LINE:
        (this._layoutDefinition = V.lineLayoutDefinition),
          (this._paintDefinition = V.linePaintDefinition);
        break;
      case b.SYMBOL:
        (this._layoutDefinition = V.symbolLayoutDefinition),
          (this._paintDefinition = V.symbolPaintDefinition);
        break;
      case b.CIRCLE:
        (this._layoutDefinition = V.circleLayoutDefinition),
          (this._paintDefinition = V.circlePaintDefinition);
    }
    (this._layoutProperties = this._parseLayout(this.layout)),
      (this._paintProperties = this._parsePaint(this.paint));
  }
  getFeatureFilter() {
    return this._featureFilter !== void 0
      ? this._featureFilter
      : (this._featureFilter = U.createFilter(this.filter));
  }
  getLayoutProperty(t) {
    return this._layoutProperties[t];
  }
  getPaintProperty(t) {
    return this._paintProperties[t];
  }
  getLayoutValue(t, e, r) {
    let i;
    const a = this._layoutProperties[t];
    return (
      a && (i = a.getValue(e, r)),
      i === void 0 && (i = this._layoutDefinition[t].default),
      i
    );
  }
  getPaintValue(t, e, r) {
    let i;
    const a = this._paintProperties[t];
    return (
      a && (i = a.getValue(e, r)),
      i === void 0 && (i = this._paintDefinition[t].default),
      i
    );
  }
  isPainterDataDriven() {
    const t = this._paintProperties;
    if (t) {
      for (const e in t) if (t[e].isDataDriven) return !0;
    }
    return !1;
  }
  _parseLayout(t) {
    const e = {};
    for (const r in t) {
      const i = this._layoutDefinition[r];
      i && (e[r] = new Et(i, t[r]));
    }
    return e;
  }
  _parsePaint(t) {
    const e = {};
    for (const r in t) {
      const i = this._paintDefinition[r];
      i && (e[r] = new Et(i, t[r]));
    }
    return e;
  }
  computeAttributesKey(t, e, r, i) {
    let a = 0,
      o = 0;
    for (const s of e) {
      let l = 3;
      if (!s || s !== i) {
        const u = r[s],
          { isLayout: p, isOptional: h } = u,
          f = p ? this.getLayoutProperty(s) : this.getPaintProperty(s);
        l =
          f != null && f.interpolator
            ? 2
            : f != null && f.isDataDriven
            ? 1
            : h && !f
            ? 3
            : 0;
      }
      (o |= l << a), (a += 2);
    }
    return (o << 3) | t;
  }
}
class ie extends ht {
  constructor(t, e, r, i) {
    super(t, e, r, i),
      (this.backgroundMaterial = new Q(
        this.computeAttributesKey(W.BACKGROUND, Q.ATTRIBUTES, Q.ATTRIBUTES_INFO)
      ));
  }
}
class ae extends ht {
  constructor(t, e, r, i) {
    super(t, e, r, i);
    const a = this.getPaintProperty("fill-color"),
      o = this.getPaintProperty("fill-opacity"),
      s = this.getPaintProperty("fill-pattern");
    (this.hasDataDrivenColor = a == null ? void 0 : a.isDataDriven),
      (this.hasDataDrivenOpacity = o == null ? void 0 : o.isDataDriven),
      (this.hasDataDrivenFill =
        this.hasDataDrivenColor ||
        this.hasDataDrivenOpacity ||
        (s == null ? void 0 : s.isDataDriven));
    const l = this.getPaintProperty("fill-outline-color");
    (this.outlineUsesFillColor = !l),
      (this.hasDataDrivenOutlineColor = l == null ? void 0 : l.isDataDriven),
      (this.hasDataDrivenOutline = l ? l.isDataDriven : !!a && a.isDataDriven),
      (this.hasDataDrivenOutline =
        (l ? this.hasDataDrivenOutlineColor : this.hasDataDrivenColor) ||
        this.hasDataDrivenOpacity),
      (this.fillMaterial = new tt(
        this.computeAttributesKey(W.FILL, tt.ATTRIBUTES, tt.ATTRIBUTES_INFO)
      )),
      (this.outlineMaterial = new M(
        this.computeAttributesKey(
          W.OUTLINE,
          this.outlineUsesFillColor ? M.ATTRIBUTES_FILL : M.ATTRIBUTES_OUTLINE,
          this.outlineUsesFillColor
            ? M.ATTRIBUTES_INFO_FILL
            : M.ATTRIBUTES_INFO_OUTLINE
        ),
        this.outlineUsesFillColor
      ));
  }
}
class ne extends ht {
  constructor(t, e, r, i) {
    var o, s, l, u, p, h, f, _, d;
    super(t, e, r, i);
    const a = this.getPaintProperty("line-pattern");
    if (
      ((this.lineMaterial = new et(
        this.computeAttributesKey(
          W.LINE,
          et.ATTRIBUTES,
          et.ATTRIBUTES_INFO,
          a ? "line-dasharray" : ""
        )
      )),
      (this.hasDataDrivenLine =
        ((o = this.getPaintProperty("line-blur")) == null
          ? void 0
          : o.isDataDriven) ||
        ((s = this.getPaintProperty("line-color")) == null
          ? void 0
          : s.isDataDriven) ||
        ((l = this.getPaintProperty("line-gap-width")) == null
          ? void 0
          : l.isDataDriven) ||
        ((u = this.getPaintProperty("line-offset")) == null
          ? void 0
          : u.isDataDriven) ||
        ((p = this.getPaintProperty("line-opacity")) == null
          ? void 0
          : p.isDataDriven) ||
        ((h = this.getPaintProperty("line-pattern")) == null
          ? void 0
          : h.isDataDriven) ||
        ((f = this.getPaintProperty("line-dasharray")) == null
          ? void 0
          : f.isDataDriven) ||
        ((_ = this.getLayoutProperty("line-cap")) == null
          ? void 0
          : _.isDataDriven) ||
        ((d = this.getPaintProperty("line-width")) == null
          ? void 0
          : d.isDataDriven)),
      (this.canUseThinTessellation = !1),
      !this.hasDataDrivenLine)
    ) {
      const O = this.getPaintProperty("line-width");
      if (!O || (typeof O == "number" && 0.5 * O < _e)) {
        const N = this.getPaintProperty("line-offset");
        (!N || (typeof N == "number" && N === 0)) &&
          (this.canUseThinTessellation = !0);
      }
    }
  }
  getDashKey(t, e) {
    let r;
    switch (e) {
      case ut.BUTT:
        r = "Butt";
        break;
      case ut.ROUND:
        r = "Round";
        break;
      case ut.SQUARE:
        r = "Square";
        break;
      default:
        r = "Butt";
    }
    return `dasharray-[${t.toString()}]-${r}`;
  }
}
class se extends ht {
  constructor(t, e, r, i) {
    var a, o, s, l, u, p, h, f, _, d, O, N;
    super(t, e, r, i),
      (this.iconMaterial = new ot(
        this.computeAttributesKey(W.ICON, ot.ATTRIBUTES, ot.ATTRIBUTES_INFO)
      )),
      (this.textMaterial = new lt(
        this.computeAttributesKey(W.TEXT, lt.ATTRIBUTES, lt.ATTRIBUTES_INFO)
      )),
      (this.hasDataDrivenIcon =
        ((a = this.getPaintProperty("icon-color")) == null
          ? void 0
          : a.isDataDriven) ||
        ((o = this.getPaintProperty("icon-halo-blur")) == null
          ? void 0
          : o.isDataDriven) ||
        ((s = this.getPaintProperty("icon-halo-color")) == null
          ? void 0
          : s.isDataDriven) ||
        ((l = this.getPaintProperty("icon-halo-width")) == null
          ? void 0
          : l.isDataDriven) ||
        ((u = this.getPaintProperty("icon-opacity")) == null
          ? void 0
          : u.isDataDriven) ||
        ((p = this.getLayoutProperty("icon-size")) == null
          ? void 0
          : p.isDataDriven)),
      (this.hasDataDrivenText =
        ((h = this.getPaintProperty("text-color")) == null
          ? void 0
          : h.isDataDriven) ||
        ((f = this.getPaintProperty("text-halo-blur")) == null
          ? void 0
          : f.isDataDriven) ||
        ((_ = this.getPaintProperty("text-halo-color")) == null
          ? void 0
          : _.isDataDriven) ||
        ((d = this.getPaintProperty("text-halo-width")) == null
          ? void 0
          : d.isDataDriven) ||
        ((O = this.getPaintProperty("text-opacity")) == null
          ? void 0
          : O.isDataDriven) ||
        ((N = this.getLayoutProperty("text-size")) == null
          ? void 0
          : N.isDataDriven));
  }
}
class oe extends ht {
  constructor(t, e, r, i) {
    super(t, e, r, i),
      (this.circleMaterial = new X(
        this.computeAttributesKey(W.CIRCLE, X.ATTRIBUTES, X.ATTRIBUTES_INFO)
      ));
  }
}
class Ae {
  constructor(t, e, r) {
    let i;
    (this.allowOverlap = t.getLayoutValue("icon-allow-overlap", e)),
      (this.ignorePlacement = t.getLayoutValue("icon-ignore-placement", e)),
      (this.keepUpright = t.getLayoutValue("icon-keep-upright", e)),
      (this.optional = t.getLayoutValue("icon-optional", e)),
      (this.rotationAlignment = t.getLayoutValue("icon-rotation-alignment", e)),
      this.rotationAlignment === J.AUTO &&
        (this.rotationAlignment = r ? J.MAP : J.VIEWPORT),
      (i = t.getLayoutProperty("icon-anchor")),
      i != null && i.isDataDriven
        ? (this._anchorProp = i)
        : (this.anchor = t.getLayoutValue("icon-anchor", e)),
      (i = t.getLayoutProperty("icon-offset")),
      i != null && i.isDataDriven
        ? (this._offsetProp = i)
        : (this.offset = t.getLayoutValue("icon-offset", e)),
      (i = t.getLayoutProperty("icon-padding")),
      i != null && i.isDataDriven
        ? (this._paddingProp = i)
        : (this.padding = t.getLayoutValue("icon-padding", e)),
      (i = t.getLayoutProperty("icon-rotate")),
      i != null && i.isDataDriven
        ? (this._rotateProp = i)
        : (this.rotate = t.getLayoutValue("icon-rotate", e)),
      (i = t.getLayoutProperty("icon-size")),
      i != null && i.isDataDriven
        ? (this._sizeProp = i)
        : (this.size = t.getLayoutValue("icon-size", e));
  }
  update(t, e) {
    this._anchorProp && (this.anchor = this._anchorProp.getValue(t, e)),
      this._offsetProp && (this.offset = this._offsetProp.getValue(t, e)),
      this._paddingProp && (this.padding = this._paddingProp.getValue(t, e)),
      this._rotateProp && (this.rotate = this._rotateProp.getValue(t, e)),
      this._sizeProp && (this.size = this._sizeProp.getValue(t, e));
  }
}
class xe {
  constructor(t, e, r) {
    let i;
    (this.allowOverlap = t.getLayoutValue("text-allow-overlap", e)),
      (this.ignorePlacement = t.getLayoutValue("text-ignore-placement", e)),
      (this.keepUpright = t.getLayoutValue("text-keep-upright", e)),
      (this.optional = t.getLayoutValue("text-optional", e)),
      (this.rotationAlignment = t.getLayoutValue("text-rotation-alignment", e)),
      this.rotationAlignment === J.AUTO &&
        (this.rotationAlignment = r ? J.MAP : J.VIEWPORT),
      (i = t.getLayoutProperty("text-anchor")),
      i != null && i.isDataDriven
        ? (this._anchorProp = i)
        : (this.anchor = t.getLayoutValue("text-anchor", e)),
      (i = t.getLayoutProperty("text-justify")),
      i != null && i.isDataDriven
        ? (this._justifyProp = i)
        : (this.justify = t.getLayoutValue("text-justify", e)),
      (i = t.getLayoutProperty("text-letter-spacing")),
      i != null && i.isDataDriven
        ? (this._letterSpacingProp = i)
        : (this.letterSpacing = t.getLayoutValue("text-letter-spacing", e)),
      (i = t.getLayoutProperty("text-line-height")),
      i != null && i.isDataDriven
        ? (this._lineHeightProp = i)
        : (this.lineHeight = t.getLayoutValue("text-line-height", e)),
      (i = t.getLayoutProperty("text-max-angle")),
      i != null && i.isDataDriven
        ? (this._maxAngleProp = i)
        : (this.maxAngle = t.getLayoutValue("text-max-angle", e)),
      (i = t.getLayoutProperty("text-max-width")),
      i != null && i.isDataDriven
        ? (this._maxWidthProp = i)
        : (this.maxWidth = t.getLayoutValue("text-max-width", e)),
      (i = t.getLayoutProperty("text-offset")),
      i != null && i.isDataDriven
        ? (this._offsetProp = i)
        : (this.offset = t.getLayoutValue("text-offset", e)),
      (i = t.getLayoutProperty("text-padding")),
      i != null && i.isDataDriven
        ? (this._paddingProp = i)
        : (this.padding = t.getLayoutValue("text-padding", e)),
      (i = t.getLayoutProperty("text-rotate")),
      i != null && i.isDataDriven
        ? (this._rotateProp = i)
        : (this.rotate = t.getLayoutValue("text-rotate", e)),
      (i = t.getLayoutProperty("text-size")),
      i != null && i.isDataDriven
        ? (this._sizeProp = i)
        : (this.size = t.getLayoutValue("text-size", e)),
      (i = t.getLayoutProperty("text-writing-mode")),
      i != null && i.isDataDriven
        ? (this._writingModeProp = i)
        : (this.writingMode = t.getLayoutValue("text-writing-mode", e));
  }
  update(t, e) {
    this._anchorProp && (this.anchor = this._anchorProp.getValue(t, e)),
      this._justifyProp && (this.justify = this._justifyProp.getValue(t, e)),
      this._letterSpacingProp &&
        (this.letterSpacing = this._letterSpacingProp.getValue(t, e)),
      this._lineHeightProp &&
        (this.lineHeight = this._lineHeightProp.getValue(t, e)),
      this._maxAngleProp && (this.maxAngle = this._maxAngleProp.getValue(t, e)),
      this._maxWidthProp && (this.maxWidth = this._maxWidthProp.getValue(t, e)),
      this._offsetProp && (this.offset = this._offsetProp.getValue(t, e)),
      this._paddingProp && (this.padding = this._paddingProp.getValue(t, e)),
      this._rotateProp && (this.rotate = this._rotateProp.getValue(t, e)),
      this._sizeProp && (this.size = this._sizeProp.getValue(t, e)),
      this._writingModeProp &&
        (this.writingMode = this._writingModeProp.getValue(t, e));
  }
}
class st {
  constructor(t) {
    if (
      ((this._style = t),
      (this.backgroundBucketIds = []),
      (this._uidToLayer = new Map()),
      (this._layerByName = {}),
      (this._runningId = 0),
      t.layers || (t.layers = []),
      (this.version = parseFloat(t.version)),
      (this.layers = t.layers
        .map((e, r, i) => this._create(e, r, i))
        .filter((e) => !!e)),
      this.layers)
    ) {
      let e;
      for (let r = 0; r < this.layers.length; r++)
        (e = this.layers[r]),
          (this._layerByName[e.id] = e),
          this._uidToLayer.set(e.uid, e),
          e.type === b.BACKGROUND && this.backgroundBucketIds.push(e.id);
    }
    this._identifyRefLayers();
  }
  isPainterDataDriven(t) {
    const e = this._layerByName[t];
    return !!e && e.isPainterDataDriven();
  }
  getStyleLayerId(t) {
    return t >= this.layers.length ? null : this.layers[t].id;
  }
  getStyleLayerByUID(t) {
    return this._uidToLayer.get(t) ?? null;
  }
  getStyleLayerIndex(t) {
    const e = this._layerByName[t];
    return e ? this.layers.indexOf(e) : -1;
  }
  setStyleLayer(t, e) {
    if (!t || !t.id) return;
    const r = this._style;
    e != null && e >= this.layers.length && (e = this.layers.length - 1);
    let i,
      a = !0;
    const o = this._layerByName[t.id];
    if (o) {
      const s = this.layers.indexOf(o);
      e || (e = s),
        e === s
          ? ((a = !1),
            (i = st._recreateLayer(t, o)),
            (this.layers[e] = i),
            (r.layers[e] = t))
          : (this.layers.splice(s, 1),
            r.layers.splice(s, 1),
            (i = this._create(t, e, this.layers)),
            this.layers.splice(e, 0, i),
            r.layers.splice(e, 0, t));
    } else
      (i = this._create(t, e, this.layers)),
        !e || e >= this.layers.length
          ? (this.layers.push(i), r.layers.push(t))
          : (this.layers.splice(e, 0, i), r.layers.splice(e, 0, t));
    (this._layerByName[t.id] = i),
      this._uidToLayer.set(i.uid, i),
      a && this._recomputeZValues(),
      this._identifyRefLayers();
  }
  getStyleLayer(t) {
    const e = this._layerByName[t];
    return e
      ? {
          type: e.typeName,
          id: e.id,
          source: e.source,
          "source-layer": e.sourceLayer,
          minzoom: e.minzoom,
          maxzoom: e.maxzoom,
          filter: e.filter,
          layout: e.layout,
          paint: e.paint,
        }
      : null;
  }
  deleteStyleLayer(t) {
    const e = this._layerByName[t];
    if (e) {
      delete this._layerByName[t], this._uidToLayer.delete(e.uid);
      const r = this.layers.indexOf(e);
      this.layers.splice(r, 1),
        this._style.layers.splice(r, 1),
        this._recomputeZValues(),
        this._identifyRefLayers();
    }
  }
  getLayerById(t) {
    return this._layerByName[t];
  }
  getLayoutProperties(t) {
    const e = this._layerByName[t];
    return e ? e.layout : null;
  }
  getPaintProperties(t) {
    const e = this._layerByName[t];
    return e ? e.paint : null;
  }
  setPaintProperties(t, e) {
    const r = this._layerByName[t];
    if (!r) return;
    const i = {
        type: r.typeName,
        id: r.id,
        source: r.source,
        "source-layer": r.sourceLayer,
        minzoom: r.minzoom,
        maxzoom: r.maxzoom,
        filter: r.filter,
        layout: r.layout,
        paint: e,
      },
      a = st._recreateLayer(i, r),
      o = this.layers.indexOf(r);
    (this.layers[o] = a),
      (this._style.layers[o].paint = e),
      (this._layerByName[r.id] = a),
      this._uidToLayer.set(r.uid, a);
  }
  setLayoutProperties(t, e) {
    const r = this._layerByName[t];
    if (!r) return;
    const i = {
        type: r.typeName,
        id: r.id,
        source: r.source,
        "source-layer": r.sourceLayer,
        minzoom: r.minzoom,
        maxzoom: r.maxzoom,
        filter: r.filter,
        layout: e,
        paint: r.paint,
      },
      a = st._recreateLayer(i, r),
      o = this.layers.indexOf(r);
    (this.layers[o] = a),
      (this._style.layers[o].layout = e),
      (this._layerByName[r.id] = a),
      this._uidToLayer.set(r.uid, a);
  }
  setStyleLayerVisibility(t, e) {
    const r = this._layerByName[t];
    if (!r) return;
    const i = r.layout || {};
    i.visibility = e;
    const a = {
        type: r.typeName,
        id: r.id,
        source: r.source,
        "source-layer": r.sourceLayer,
        minzoom: r.minzoom,
        maxzoom: r.maxzoom,
        filter: r.filter,
        layout: i,
        paint: r.paint,
      },
      o = st._recreateLayer(a, r),
      s = this.layers.indexOf(r);
    (this.layers[s] = o),
      (this._style.layers[s].layout = i),
      (this._layerByName[r.id] = o),
      this._uidToLayer.set(r.uid, o);
  }
  getStyleLayerVisibility(t) {
    var r;
    const e = this._layerByName[t];
    return e
      ? ((r = e.layout) == null ? void 0 : r.visibility) ?? "visible"
      : "none";
  }
  _recomputeZValues() {
    const t = this.layers,
      e = 1 / (t.length + 1);
    for (let r = 0; r < t.length; r++) t[r].z = 1 - (1 + r) * e;
  }
  _identifyRefLayers() {
    const t = [],
      e = [];
    let r = 0;
    for (const i of this.layers) {
      const a = i.layout;
      if (i.type === b.FILL) {
        const o = i;
        let s = i.source + "|" + i.sourceLayer;
        (s += "|" + ((a == null ? void 0 : a.visibility) ?? "")),
          (s += "|" + i.minzoom),
          (s += "|" + i.maxzoom),
          (s += "|" + JSON.stringify(i.filter)),
          (o.hasDataDrivenFill || o.hasDataDrivenOutline) && (s += "|" + r),
          t.push({ key: s, layer: i });
      } else if (i.type === b.LINE) {
        const o = i,
          s = i.paint,
          l =
            s != null &&
            (s["line-pattern"] != null || s["line-dasharray"] != null);
        let u = i.source + "|" + i.sourceLayer;
        (u += "|" + ((a == null ? void 0 : a.visibility) ?? "")),
          (u += "|" + i.minzoom),
          (u += "|" + i.maxzoom),
          (u += "|" + JSON.stringify(i.filter)),
          (u += "|" + (a !== void 0 ? a["line-cap"] : "")),
          (u += "|" + (a !== void 0 ? a["line-join"] : "")),
          (o.hasDataDrivenLine || l) && (u += "|" + r),
          e.push({ key: u, layer: i });
      }
      ++r;
    }
    this._assignRefLayers(t), this._assignRefLayers(e);
  }
  _assignRefLayers(t) {
    let e, r;
    t.sort((a, o) => (a.key < o.key ? -1 : a.key > o.key ? 1 : 0));
    const i = t.length;
    for (let a = 0; a < i; a++) {
      const o = t[a];
      if (o.key === e) o.layer.refLayerId = r;
      else if (((e = o.key), (r = o.layer.id), o.layer.type === b.FILL)) {
        if (!o.layer.getPaintProperty("fill-outline-color"))
          for (let s = a + 1; s < i; s++) {
            const l = t[s];
            if (l.key !== e) break;
            if (l.layer.getPaintProperty("fill-outline-color")) {
              (t[a] = l), (t[s] = o), (r = l.layer.id);
              break;
            }
          }
      } else if (o.layer.type === b.LINE) {
        let s = o.layer;
        for (let l = a + 1; l < i; l++) {
          const u = t[l];
          if (u.key !== e) break;
          const p = u.layer;
          ((s.canUseThinTessellation && !p.canUseThinTessellation) ||
            (!s.canUseThinTessellation &&
              (p.getPaintProperty("line-pattern") ||
                p.getPaintProperty("line-dasharray")))) &&
            ((s = p), (t[a] = u), (t[l] = o), (r = u.layer.id));
        }
      }
    }
  }
  _create(t, e, r) {
    const i = 1 - (1 + e) * (1 / (r.length + 1)),
      a = this._runningId++;
    switch (t.type) {
      case "background":
        return new ie(b.BACKGROUND, t, i, a);
      case "fill":
        return new ae(b.FILL, t, i, a);
      case "line":
        return new ne(b.LINE, t, i, a);
      case "symbol":
        return new se(b.SYMBOL, t, i, a);
      case "raster":
        return null;
      case "circle":
        return new oe(b.CIRCLE, t, i, a);
    }
    return null;
  }
  static _recreateLayer(t, e) {
    switch (t.type) {
      case "background":
        return new ie(b.BACKGROUND, t, e.z, e.uid);
      case "fill":
        return new ae(b.FILL, t, e.z, e.uid);
      case "line":
        return new ne(b.LINE, t, e.z, e.uid);
      case "symbol":
        return new se(b.SYMBOL, t, e.z, e.uid);
      case "raster":
        return null;
      case "circle":
        return new oe(b.CIRCLE, t, e.z, e.uid);
    }
    return null;
  }
}
export { Ae as T, st as l, xe as m, de as t };
