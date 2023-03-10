import { r as E, a as j, t as oe, aR as ie } from "./index.8fd7165c.js";
import { c as L } from "./Texture.fb0c670a.js";
import { H as x, t as M } from "./enums.64ab819c.js";
const ne = [
  "layout",
  "centroid",
  "smooth",
  "case",
  "mat2x2",
  "mat2x3",
  "mat2x4",
  "mat3x2",
  "mat3x3",
  "mat3x4",
  "mat4x2",
  "mat4x3",
  "mat4x4",
  "uint",
  "uvec2",
  "uvec3",
  "uvec4",
  "samplerCubeShadow",
  "sampler2DArray",
  "sampler2DArrayShadow",
  "isampler2D",
  "isampler3D",
  "isamplerCube",
  "isampler2DArray",
  "usampler2D",
  "usampler3D",
  "usamplerCube",
  "usampler2DArray",
  "coherent",
  "restrict",
  "readonly",
  "writeonly",
  "resource",
  "atomic_uint",
  "noperspective",
  "patch",
  "sample",
  "subroutine",
  "common",
  "partition",
  "active",
  "filter",
  "image1D",
  "image2D",
  "image3D",
  "imageCube",
  "iimage1D",
  "iimage2D",
  "iimage3D",
  "iimageCube",
  "uimage1D",
  "uimage2D",
  "uimage3D",
  "uimageCube",
  "image1DArray",
  "image2DArray",
  "iimage1DArray",
  "iimage2DArray",
  "uimage1DArray",
  "uimage2DArray",
  "image1DShadow",
  "image2DShadow",
  "image1DArrayShadow",
  "image2DArrayShadow",
  "imageBuffer",
  "iimageBuffer",
  "uimageBuffer",
  "sampler1DArray",
  "sampler1DArrayShadow",
  "isampler1D",
  "isampler1DArray",
  "usampler1D",
  "usampler1DArray",
  "isampler2DRect",
  "usampler2DRect",
  "samplerBuffer",
  "isamplerBuffer",
  "usamplerBuffer",
  "sampler2DMS",
  "isampler2DMS",
  "usampler2DMS",
  "sampler2DMSArray",
  "isampler2DMSArray",
  "usampler2DMSArray",
  "trunc",
  "round",
  "roundEven",
  "isnan",
  "isinf",
  "floatBitsToInt",
  "floatBitsToUint",
  "intBitsToFloat",
  "uintBitsToFloat",
  "packSnorm2x16",
  "unpackSnorm2x16",
  "packUnorm2x16",
  "unpackUnorm2x16",
  "packHalf2x16",
  "unpackHalf2x16",
  "outerProduct",
  "transpose",
  "determinant",
  "inverse",
  "texture",
  "textureSize",
  "textureProj",
  "textureLod",
  "textureOffset",
  "texelFetch",
  "texelFetchOffset",
  "textureProjOffset",
  "textureLodOffset",
  "textureProjLod",
  "textureProjLodOffset",
  "textureGrad",
  "textureGradOffset",
  "textureProjGrad",
  "textureProjGradOffset",
];
var R,
  b = {},
  se = {
    get exports() {
      return b;
    },
    set exports(a) {
      b = a;
    },
  };
(R = [
  "precision",
  "highp",
  "mediump",
  "lowp",
  "attribute",
  "const",
  "uniform",
  "varying",
  "break",
  "continue",
  "do",
  "for",
  "while",
  "if",
  "else",
  "in",
  "out",
  "inout",
  "float",
  "int",
  "void",
  "bool",
  "true",
  "false",
  "discard",
  "return",
  "mat2",
  "mat3",
  "mat4",
  "vec2",
  "vec3",
  "vec4",
  "ivec2",
  "ivec3",
  "ivec4",
  "bvec2",
  "bvec3",
  "bvec4",
  "sampler1D",
  "sampler2D",
  "sampler3D",
  "samplerCube",
  "sampler1DShadow",
  "sampler2DShadow",
  "struct",
  "asm",
  "class",
  "union",
  "enum",
  "typedef",
  "template",
  "this",
  "packed",
  "goto",
  "switch",
  "default",
  "inline",
  "noinline",
  "volatile",
  "public",
  "static",
  "extern",
  "external",
  "interface",
  "long",
  "short",
  "double",
  "half",
  "fixed",
  "unsigned",
  "input",
  "output",
  "hvec2",
  "hvec3",
  "hvec4",
  "dvec2",
  "dvec3",
  "dvec4",
  "fvec2",
  "fvec3",
  "fvec4",
  "sampler2DRect",
  "sampler3DRect",
  "sampler2DRectShadow",
  "sizeof",
  "cast",
  "namespace",
  "using",
]) !== void 0 && (se.exports = R);
const le = b;
var B,
  C = {},
  ce = {
    get exports() {
      return C;
    },
    set exports(a) {
      C = a;
    },
  };
(B = ce),
  (function (a) {
    var e = [
      "<<=",
      ">>=",
      "++",
      "--",
      "<<",
      ">>",
      "<=",
      ">=",
      "==",
      "!=",
      "&&",
      "||",
      "+=",
      "-=",
      "*=",
      "/=",
      "%=",
      "&=",
      "^^",
      "^=",
      "|=",
      "(",
      ")",
      "[",
      "]",
      ".",
      "!",
      "~",
      "*",
      "/",
      "%",
      "+",
      "-",
      "<",
      ">",
      "&",
      "^",
      "|",
      "?",
      ":",
      "=",
      ",",
      ";",
      "{",
      "}",
    ];
    e !== void 0 && (B.exports = e);
  })();
const N = C;
var k = {},
  me = {
    get exports() {
      return k;
    },
    set exports(a) {
      k = a;
    },
  };
(function (a) {
  (function (e) {
    var r = [
      "abs",
      "acos",
      "all",
      "any",
      "asin",
      "atan",
      "ceil",
      "clamp",
      "cos",
      "cross",
      "dFdx",
      "dFdy",
      "degrees",
      "distance",
      "dot",
      "equal",
      "exp",
      "exp2",
      "faceforward",
      "floor",
      "fract",
      "gl_BackColor",
      "gl_BackLightModelProduct",
      "gl_BackLightProduct",
      "gl_BackMaterial",
      "gl_BackSecondaryColor",
      "gl_ClipPlane",
      "gl_ClipVertex",
      "gl_Color",
      "gl_DepthRange",
      "gl_DepthRangeParameters",
      "gl_EyePlaneQ",
      "gl_EyePlaneR",
      "gl_EyePlaneS",
      "gl_EyePlaneT",
      "gl_Fog",
      "gl_FogCoord",
      "gl_FogFragCoord",
      "gl_FogParameters",
      "gl_FragColor",
      "gl_FragCoord",
      "gl_FragData",
      "gl_FragDepth",
      "gl_FragDepthEXT",
      "gl_FrontColor",
      "gl_FrontFacing",
      "gl_FrontLightModelProduct",
      "gl_FrontLightProduct",
      "gl_FrontMaterial",
      "gl_FrontSecondaryColor",
      "gl_LightModel",
      "gl_LightModelParameters",
      "gl_LightModelProducts",
      "gl_LightProducts",
      "gl_LightSource",
      "gl_LightSourceParameters",
      "gl_MaterialParameters",
      "gl_MaxClipPlanes",
      "gl_MaxCombinedTextureImageUnits",
      "gl_MaxDrawBuffers",
      "gl_MaxFragmentUniformComponents",
      "gl_MaxLights",
      "gl_MaxTextureCoords",
      "gl_MaxTextureImageUnits",
      "gl_MaxTextureUnits",
      "gl_MaxVaryingFloats",
      "gl_MaxVertexAttribs",
      "gl_MaxVertexTextureImageUnits",
      "gl_MaxVertexUniformComponents",
      "gl_ModelViewMatrix",
      "gl_ModelViewMatrixInverse",
      "gl_ModelViewMatrixInverseTranspose",
      "gl_ModelViewMatrixTranspose",
      "gl_ModelViewProjectionMatrix",
      "gl_ModelViewProjectionMatrixInverse",
      "gl_ModelViewProjectionMatrixInverseTranspose",
      "gl_ModelViewProjectionMatrixTranspose",
      "gl_MultiTexCoord0",
      "gl_MultiTexCoord1",
      "gl_MultiTexCoord2",
      "gl_MultiTexCoord3",
      "gl_MultiTexCoord4",
      "gl_MultiTexCoord5",
      "gl_MultiTexCoord6",
      "gl_MultiTexCoord7",
      "gl_Normal",
      "gl_NormalMatrix",
      "gl_NormalScale",
      "gl_ObjectPlaneQ",
      "gl_ObjectPlaneR",
      "gl_ObjectPlaneS",
      "gl_ObjectPlaneT",
      "gl_Point",
      "gl_PointCoord",
      "gl_PointParameters",
      "gl_PointSize",
      "gl_Position",
      "gl_ProjectionMatrix",
      "gl_ProjectionMatrixInverse",
      "gl_ProjectionMatrixInverseTranspose",
      "gl_ProjectionMatrixTranspose",
      "gl_SecondaryColor",
      "gl_TexCoord",
      "gl_TextureEnvColor",
      "gl_TextureMatrix",
      "gl_TextureMatrixInverse",
      "gl_TextureMatrixInverseTranspose",
      "gl_TextureMatrixTranspose",
      "gl_Vertex",
      "greaterThan",
      "greaterThanEqual",
      "inversesqrt",
      "length",
      "lessThan",
      "lessThanEqual",
      "log",
      "log2",
      "matrixCompMult",
      "max",
      "min",
      "mix",
      "mod",
      "normalize",
      "not",
      "notEqual",
      "pow",
      "radians",
      "reflect",
      "refract",
      "sign",
      "sin",
      "smoothstep",
      "sqrt",
      "step",
      "tan",
      "texture2D",
      "texture2DLod",
      "texture2DProj",
      "texture2DProjLod",
      "textureCube",
      "textureCubeLod",
      "texture2DLodEXT",
      "texture2DProjLodEXT",
      "textureCubeLodEXT",
      "texture2DGradEXT",
      "texture2DProjGradEXT",
      "textureCubeGradEXT",
      "textureSize",
      "texelFetch",
    ];
    r !== void 0 && (a.exports = r);
  })();
})(me);
const fe = k;
var _ = 999,
  V = 9999,
  D = 0,
  S = 1,
  G = 2,
  O = 3,
  I = 4,
  U = 5,
  ue = 6,
  he = 7,
  ge = 8,
  X = 9,
  de = 10,
  H = 11,
  _e = [
    "block-comment",
    "line-comment",
    "preprocessor",
    "operator",
    "integer",
    "float",
    "ident",
    "builtin",
    "keyword",
    "whitespace",
    "eof",
    "integer",
  ];
function pe() {
  var a,
    e,
    r,
    t = 0,
    s = 0,
    i = _,
    o = [],
    l = [],
    n = 1,
    m = 0,
    c = 0,
    f = !1,
    h = !1,
    g = "";
  return function (u) {
    return (
      (l = []),
      u !== null
        ? $(
            u.replace
              ? u.replace(
                  /\r\n/g,
                  `
`
                )
              : u
          )
        : (o.length && d(o.join("")), (i = de), d("(eof)"), l)
    );
  };
  function d(u) {
    u.length &&
      l.push({ type: _e[i], data: u, position: c, line: n, column: m });
  }
  function $(u) {
    var v;
    for (t = 0, r = (g += u).length; (a = g[t]), t < r; ) {
      switch (((v = t), i)) {
        case D:
          t = J();
          break;
        case S:
        case G:
          t = Z();
          break;
        case O:
          t = Y();
          break;
        case I:
          t = te();
          break;
        case H:
          t = ee();
          break;
        case U:
          t = re();
          break;
        case V:
          t = ae();
          break;
        case X:
          t = W();
          break;
        case _:
          t = Q();
      }
      v !== t &&
        (g[v] ===
        `
`
          ? ((m = 0), ++n)
          : ++m);
    }
    return (s += t), (g = g.slice(t)), l;
  }
  function Q() {
    return (
      (o = o.length ? [] : o),
      e === "/" && a === "*"
        ? ((c = s + t - 1), (i = D), (e = a), t + 1)
        : e === "/" && a === "/"
        ? ((c = s + t - 1), (i = S), (e = a), t + 1)
        : a === "#"
        ? ((i = G), (c = s + t), t)
        : /\s/.test(a)
        ? ((i = X), (c = s + t), t)
        : ((f = /\d/.test(a)),
          (h = /[^\w_]/.test(a)),
          (c = s + t),
          (i = f ? I : h ? O : V),
          t)
    );
  }
  function W() {
    return /[^\s]/g.test(a)
      ? (d(o.join("")), (i = _), t)
      : (o.push(a), (e = a), t + 1);
  }
  function Z() {
    return (a !== "\r" &&
      a !==
        `
`) ||
      e === "\\"
      ? (o.push(a), (e = a), t + 1)
      : (d(o.join("")), (i = _), t);
  }
  function J() {
    return a === "/" && e === "*"
      ? (o.push(a), d(o.join("")), (i = _), t + 1)
      : (o.push(a), (e = a), t + 1);
  }
  function Y() {
    if (e === "." && /\d/.test(a)) return (i = U), t;
    if (e === "/" && a === "*") return (i = D), t;
    if (e === "/" && a === "/") return (i = S), t;
    if (a === "." && o.length) {
      for (; w(o); );
      return (i = U), t;
    }
    if (a === ";" || a === ")" || a === "(") {
      if (o.length) for (; w(o); );
      return d(a), (i = _), t + 1;
    }
    var u = o.length === 2 && a !== "=";
    if (/[\w_\d\s]/.test(a) || u) {
      for (; w(o); );
      return (i = _), t;
    }
    return o.push(a), (e = a), t + 1;
  }
  function w(u) {
    for (var v, T, F = 0; ; ) {
      if (
        ((v = N.indexOf(u.slice(0, u.length + F).join(""))),
        (T = N[v]),
        v === -1)
      ) {
        if (F-- + u.length > 0) continue;
        T = u.slice(0, 1).join("");
      }
      return d(T), (c += T.length), (o = o.slice(T.length)).length;
    }
  }
  function ee() {
    return /[^a-fA-F0-9]/.test(a)
      ? (d(o.join("")), (i = _), t)
      : (o.push(a), (e = a), t + 1);
  }
  function te() {
    return a === "." || /[eE]/.test(a)
      ? (o.push(a), (i = U), (e = a), t + 1)
      : a === "x" && o.length === 1 && o[0] === "0"
      ? ((i = H), o.push(a), (e = a), t + 1)
      : /[^\d]/.test(a)
      ? (d(o.join("")), (i = _), t)
      : (o.push(a), (e = a), t + 1);
  }
  function re() {
    return (
      a === "f" && (o.push(a), (e = a), (t += 1)),
      /[eE]/.test(a) || (a === "-" && /[eE]/.test(e))
        ? (o.push(a), (e = a), t + 1)
        : /[^\d]/.test(a)
        ? (d(o.join("")), (i = _), t)
        : (o.push(a), (e = a), t + 1)
    );
  }
  function ae() {
    if (/[^\d\w_]/.test(a)) {
      var u = o.join("");
      return (
        (i = le.indexOf(u) > -1 ? ge : fe.indexOf(u) > -1 ? he : ue),
        d(o.join("")),
        (i = _),
        t
      );
    }
    return o.push(a), (e = a), t + 1;
  }
}
function xe(a) {
  return (function (e) {
    var r = pe(),
      t = [];
    return (t = t.concat(r(e))).concat(r(null));
  })(a);
}
const P = [
  "GL_OES_standard_derivatives",
  "GL_EXT_frag_depth",
  "GL_EXT_draw_buffers",
  "GL_EXT_shader_texture_lod",
];
function ve(a, e) {
  for (let r = e - 1; r >= 0; r--) {
    const t = a[r];
    if (t.type !== "whitespace" && t.type !== "block-comment") {
      if (t.type !== "keyword") break;
      if (t.data === "attribute" || t.data === "in") return !0;
    }
  }
  return !1;
}
function y(a, e, r, t) {
  t = t || r;
  for (const s of a)
    if (s.type === "ident" && s.data === r)
      return t in e ? e[t]++ : (e[t] = 0), y(a, e, t + "_" + e[t], t);
  return r;
}
function K(a, e, r = "afterVersion") {
  function t(l, n) {
    for (let m = n; m < l.length; m++) {
      const c = l[m];
      if (c.type === "operator" && c.data === ";") return m;
    }
    return null;
  }
  const s = {
      data: `
`,
      type: "whitespace",
    },
    i = (l) => l < a.length && /[^\r\n]$/.test(a[l].data);
  let o = (function (l) {
    let n = -1,
      m = 0,
      c = -1;
    for (let f = 0; f < l.length; f++) {
      const h = l[f];
      if (
        (h.type === "preprocessor" &&
          (h.data.match(/\#(if|ifdef|ifndef)\s+.+/)
            ? ++m
            : h.data.match(/\#endif\s*.*/) && --m),
        (r !== "afterVersion" && r !== "afterPrecision") ||
          (h.type === "preprocessor" &&
            /^#version/.test(h.data) &&
            (c = Math.max(c, f))),
        r === "afterPrecision" &&
          h.type === "keyword" &&
          h.data === "precision")
      ) {
        const g = t(l, f);
        if (g === null)
          throw new Error(
            "precision statement not followed by any semicolons!"
          );
        c = Math.max(c, g);
      }
      n < c && m === 0 && (n = f);
    }
    return n + 1;
  })(a);
  i(o - 1) && a.splice(o++, 0, s);
  for (const l of e) a.splice(o++, 0, l);
  i(o - 1) && i(o) && a.splice(o, 0, s);
}
function Te(a, e, r, t = "lowp") {
  K(
    a,
    [
      { type: "keyword", data: "out" },
      { type: "whitespace", data: " " },
      { type: "keyword", data: t },
      { type: "whitespace", data: " " },
      { type: "keyword", data: r },
      { type: "whitespace", data: " " },
      { type: "ident", data: e },
      { type: "operator", data: ";" },
    ],
    "afterPrecision"
  );
}
function ye(a, e, r, t, s = "lowp") {
  K(
    a,
    [
      { type: "keyword", data: "layout" },
      { type: "operator", data: "(" },
      { type: "keyword", data: "location" },
      { type: "whitespace", data: " " },
      { type: "operator", data: "=" },
      { type: "whitespace", data: " " },
      { type: "integer", data: t.toString() },
      { type: "operator", data: ")" },
      { type: "whitespace", data: " " },
      { type: "keyword", data: "out" },
      { type: "whitespace", data: " " },
      { type: "keyword", data: s },
      { type: "whitespace", data: " " },
      { type: "keyword", data: r },
      { type: "whitespace", data: " " },
      { type: "ident", data: e },
      { type: "operator", data: ";" },
    ],
    "afterPrecision"
  );
}
function Me(a, e) {
  let r,
    t,
    s = -1;
  for (let i = e; i < a.length; i++) {
    const o = a[i];
    if (o.type === "operator" && (o.data === "[" && (r = i), o.data === "]")) {
      t = i;
      break;
    }
    o.type === "integer" && (s = parseInt(o.data, 10));
  }
  return r && t && a.splice(r, t - r + 1), s;
}
function q(a, e) {
  if (E(null)) return null;
  const r = xe(a);
  if (
    (function (l, n = "100", m = "300 es") {
      const c = /^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;
      for (const f of l)
        if (f.type === "preprocessor") {
          const h = c.exec(f.data);
          if (h) {
            const g = h[1].replace(/\s\s+/g, " ");
            if (g === m) return g;
            if (g === n) return (f.data = "#version " + m), n;
            throw new Error("unknown glsl version: " + g);
          }
        }
      return (
        l.splice(
          0,
          0,
          { type: "preprocessor", data: "#version " + m },
          {
            type: "whitespace",
            data: `
`,
          }
        ),
        null
      );
    })(r, "100", "300 es") === "300 es"
  )
    return a;
  let t = null,
    s = null;
  const i = {},
    o = {};
  for (let l = 0; l < r.length; ++l) {
    const n = r[l];
    switch (n.type) {
      case "keyword":
        e === x.VERTEX_SHADER && n.data === "attribute"
          ? (n.data = "in")
          : n.data === "varying" &&
            (n.data = e === x.VERTEX_SHADER ? "out" : "in");
        break;
      case "builtin":
        if (
          (/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(n.data.trim()) &&
            (n.data = n.data.replace(/(2D|Cube|EXT)/g, "")),
          e === x.FRAGMENT_SHADER &&
            n.data === "gl_FragColor" &&
            (t || ((t = y(r, i, "fragColor")), Te(r, t, "vec4")), (n.data = t)),
          e === x.FRAGMENT_SHADER && n.data === "gl_FragData")
        ) {
          const m = Me(r, l + 1),
            c = y(r, i, "fragData");
          ye(r, c, "vec4", m, "mediump"), (n.data = c);
        } else
          e === x.FRAGMENT_SHADER &&
            n.data === "gl_FragDepthEXT" &&
            (s || (s = y(r, i, "gl_FragDepth")), (n.data = s));
        break;
      case "ident":
        if (ne.includes(n.data)) {
          if (e === x.VERTEX_SHADER && ve(r, l))
            throw new Error(
              "attribute in vertex shader uses a name that is a reserved word in glsl 300 es"
            );
          n.data in o || (o[n.data] = y(r, i, n.data)), (n.data = o[n.data]);
        }
    }
  }
  for (let l = r.length - 1; l >= 0; --l) {
    const n = r[l];
    if (n.type === "preprocessor") {
      const m = n.data.match(/\#extension\s+(.*)\:/);
      if (m && m[1] && P.includes(m[1].trim())) {
        const h = r[l + 1];
        r.splice(l, h && h.type === "whitespace" ? 2 : 1);
      }
      const c = n.data.match(/\#ifdef\s+(.*)/);
      c && c[1] && P.includes(c[1].trim()) && (n.data = "#if 1");
      const f = n.data.match(/\#ifndef\s+(.*)/);
      f && f[1] && P.includes(f[1].trim()) && (n.data = "#if 0");
    }
  }
  return (function (l, n) {
    return n;
  })(
    0,
    (function (l) {
      return l.map((n) => (n.type !== "eof" ? n.data : "")).join("");
    })(r)
  );
}
class Ue {
  constructor(e, r, t, s, i = new Map()) {
    (this._context = e),
      (this._locations = s),
      (this._uniformBlockBindings = i),
      (this._refCount = 1),
      (this._compiled = !1),
      (this._nameToUniformLocation = {}),
      (this._nameToUniform1 = {}),
      (this._nameToUniform1v = new Map()),
      (this._nameToUniform2 = new Map()),
      (this._nameToUniform3 = new Map()),
      (this._nameToUniform4 = new Map()),
      (this._nameToUniformMatrix3 = new Map()),
      (this._nameToUniformMatrix4 = new Map()),
      r.length,
      this._context.type === j.WEBGL2 &&
        ((r = q(r, x.VERTEX_SHADER)), (t = q(t, x.FRAGMENT_SHADER))),
      (this._vShader = z(this._context, x.VERTEX_SHADER, r)),
      (this._fShader = z(this._context, x.FRAGMENT_SHADER, t)),
      this._vShader && this._fShader,
      this._context.instanceCounter.increment(M.Shader, this),
      L() && ((this.vertexShader = r), (this.fragmentShader = t));
    const o = this._context.gl,
      l = o.createProgram();
    if (
      (o.attachShader(l, this._vShader),
      o.attachShader(l, this._fShader),
      this._locations.forEach((n, m) => o.bindAttribLocation(l, n, m)),
      o.linkProgram(l),
      L() && o.getProgramParameter(l, o.LINK_STATUS),
      this._context.type === j.WEBGL2)
    ) {
      const n = o;
      for (const [m, c] of this._uniformBlockBindings) {
        const f = n.getUniformBlockIndex(l, m);
        f < 4294967295 && n.uniformBlockBinding(l, f, c);
      }
    }
    (this._glName = l),
      this._context.instanceCounter.increment(M.Program, this);
  }
  get glName() {
    return this._glName;
  }
  get hasGLName() {
    return E(this._glName);
  }
  get compiled() {
    if (this._compiled) return !0;
    const e = this._context.gl.getExtension("KHR_parallel_shader_compile");
    return e == null || oe(this.glName)
      ? ((this._compiled = !0), !0)
      : ((this._compiled = !!this._context.gl.getProgramParameter(
          this.glName,
          e.COMPLETION_STATUS_KHR
        )),
        this._compiled);
  }
  dispose() {
    if (--this._refCount > 0) return;
    const e = this._context.gl;
    this._vShader &&
      (e.deleteShader(this._vShader),
      (this._vShader = null),
      this._context.instanceCounter.decrement(M.Shader, this)),
      this._fShader && (e.deleteShader(this._fShader), (this._fShader = null)),
      this._glName &&
        (e.deleteProgram(this._glName),
        (this._glName = null),
        this._context.instanceCounter.decrement(M.Program, this));
  }
  ref() {
    ++this._refCount;
  }
  _getUniformLocation(e) {
    return (
      this._nameToUniformLocation[e] === void 0 &&
        E(this.glName) &&
        (++A.numUniforms,
        (this._nameToUniformLocation[e] = this._context.gl.getUniformLocation(
          this.glName,
          e
        ))),
      this._nameToUniformLocation[e]
    );
  }
  hasUniform(e) {
    return this._getUniformLocation(e) !== null;
  }
  setUniform1i(e, r) {
    const t = this._nameToUniform1[e];
    (t !== void 0 && r === t) ||
      (this._context.gl.uniform1i(this._getUniformLocation(e), r),
      (this._nameToUniform1[e] = r));
  }
  setUniform1iv(e, r) {
    p(this._nameToUniform1v, e, r) &&
      this._context.gl.uniform1iv(this._getUniformLocation(e), r);
  }
  setUniform2iv(e, r) {
    p(this._nameToUniform2, e, r) &&
      this._context.gl.uniform2iv(this._getUniformLocation(e), r);
  }
  setUniform3iv(e, r) {
    p(this._nameToUniform3, e, r) &&
      this._context.gl.uniform3iv(this._getUniformLocation(e), r);
  }
  setUniform4iv(e, r) {
    p(this._nameToUniform4, e, r) &&
      this._context.gl.uniform4iv(this._getUniformLocation(e), r);
  }
  setUniform1f(e, r) {
    const t = this._nameToUniform1[e];
    (t !== void 0 && r === t) ||
      (this._context.gl.uniform1f(this._getUniformLocation(e), r),
      (this._nameToUniform1[e] = r));
  }
  setUniform1fv(e, r) {
    p(this._nameToUniform1v, e, r) &&
      this._context.gl.uniform1fv(this._getUniformLocation(e), r);
  }
  setUniform2f(e, r, t) {
    const s = this._nameToUniform2.get(e);
    s === void 0
      ? (this._context.gl.uniform2f(this._getUniformLocation(e), r, t),
        this._nameToUniform2.set(e, [r, t]))
      : (r === s[0] && t === s[1]) ||
        (this._context.gl.uniform2f(this._getUniformLocation(e), r, t),
        (s[0] = r),
        (s[1] = t));
  }
  setUniform2fv(e, r) {
    p(this._nameToUniform2, e, r) &&
      this._context.gl.uniform2fv(this._getUniformLocation(e), r);
  }
  setUniform3f(e, r, t, s) {
    const i = this._nameToUniform3.get(e);
    i === void 0
      ? (this._context.gl.uniform3f(this._getUniformLocation(e), r, t, s),
        (this._nameToUniform3[e] = [r, t, s]))
      : (r === i[0] && t === i[1] && s === i[2]) ||
        (this._context.gl.uniform3f(this._getUniformLocation(e), r, t, s),
        (i[0] = r),
        (i[1] = t),
        (i[2] = s));
  }
  setUniform3fv(e, r) {
    p(this._nameToUniform3, e, r) &&
      this._context.gl.uniform3fv(this._getUniformLocation(e), r);
  }
  setUniform4f(e, r, t, s, i) {
    const o = this._nameToUniform4.get(e);
    o === void 0
      ? (this._context.gl.uniform4f(this._getUniformLocation(e), r, t, s, i),
        this._nameToUniform4.set(e, [r, t, s, i]))
      : (o !== void 0 &&
          r === o[0] &&
          t === o[1] &&
          s === o[2] &&
          i === o[3]) ||
        (this._context.gl.uniform4f(this._getUniformLocation(e), r, t, s, i),
        (o[0] = r),
        (o[1] = t),
        (o[2] = s),
        (o[3] = i));
  }
  setUniform4fv(e, r) {
    p(this._nameToUniform4, e, r) &&
      this._context.gl.uniform4fv(this._getUniformLocation(e), r);
  }
  setUniformMatrix3fv(e, r, t = !1) {
    p(this._nameToUniformMatrix3, e, r) &&
      this._context.gl.uniformMatrix3fv(this._getUniformLocation(e), t, r);
  }
  setUniformMatrix4fv(e, r, t = !1) {
    p(this._nameToUniformMatrix4, e, r) &&
      this._context.gl.uniformMatrix4fv(this._getUniformLocation(e), t, r);
  }
  stop() {}
}
function z(a, e, r) {
  const t = a.gl,
    s = t.createShader(e);
  return (
    t.shaderSource(s, r),
    t.compileShader(s),
    L() && t.getShaderParameter(s, t.COMPILE_STATUS),
    A.enabled && (A.compiledLOC += r.match(/\n/g).length + 1),
    s
  );
}
function p(a, e, r) {
  const t = a.get(e);
  return t ? ie(t, r) : (a.set(e, Array.from(r)), !0);
}
const A = { compiledLOC: 0, numUniforms: 0, enabled: !1 };
let Pe = class {
  constructor(a) {
    this._readFile = a;
  }
  resolveIncludes(a) {
    return this._resolve(a);
  }
  _resolve(a, e = new Map()) {
    if (e.has(a)) return e.get(a);
    const r = this._read(a);
    if (!r) throw new Error(`cannot find shader file ${a}`);
    const t = /^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;
    let s = t.exec(r);
    const i = [];
    for (; s != null; )
      i.push({ path: s[1], start: s.index, length: s[0].length }),
        (s = t.exec(r));
    let o = 0,
      l = "";
    return (
      i.forEach((n) => {
        (l += r.slice(o, n.start)),
          (l += e.has(n.path) ? "" : this._resolve(n.path, e)),
          (o = n.start + n.length);
      }),
      (l += r.slice(o)),
      e.set(a, l),
      l
    );
  }
  _read(a) {
    return this._readFile(a);
  }
};
function Ee(a, e, r = "") {
  return new Ue(
    a,
    r + e.shaders.vertexShader,
    r + e.shaders.fragmentShader,
    e.attributes
  );
}
export { Ee as a, Pe as e, Ue as h };
