import { d as q, m as at } from "./WGLContainer.e7ddd41d.js";
import { n as lt, s as ot } from "./programUtils.7c03b904.js";
import {
  h as I,
  r as S,
  a as T,
  w as Y,
  t as F,
  aM as $,
  Q as ht,
  aN as _t,
  W as Q,
  aO as ut,
  n as ct,
} from "./index.8fd7165c.js";
import { E as z, a as B } from "./Texture.fb0c670a.js";
import {
  R as O,
  T as H,
  N as A,
  S as nt,
  I as L,
  O as C,
  t as U,
  Y as P,
  V as N,
  M as R,
  D as x,
  P as g,
  G as p,
  L as m,
  F as y,
  A as a,
  E,
  C as X,
  U as ft,
  _ as M,
  X as V,
  n as d,
  W as dt,
  r as Z,
  f as Et,
} from "./enums.64ab819c.js";
import {
  o as J,
  W as gt,
  s as pt,
  M as Ft,
} from "./OrderIndependentTransparency.0d2f697c.js";
import {
  x as D,
  E as w,
  f as k,
  i as tt,
} from "./VertexArrayObject.1b8f3583.js";
import { r as Tt } from "./floatRGBA.6f2fa7cd.js";
import { t as et } from "./doublePrecisionUtils.e3c3d0d8.js";
import { t as j } from "./VertexElementDescriptor.2925c6af.js";
import { r as Rt, n as b, T as bt } from "./webgl-debug.ae38a7fa.js";
const Bt = (e) => {
    let t = "";
    t += e[0].toUpperCase();
    for (let s = 1; s < e.length; s++) {
      const i = e[s];
      i === i.toUpperCase() ? ((t += "_"), (t += i)) : (t += i.toUpperCase());
    }
    return t;
  },
  Vt = (e, t, s, i) => {
    const r = e + e.substring(e.lastIndexOf("/")),
      n = t + t.substring(t.lastIndexOf("/")),
      _ = ((l) => {
        const o = {};
        for (const h in l) o[Bt(h)] = l[h];
        return lt(o);
      })(i);
    return {
      attributes: s,
      shaders: {
        vertexShader: _ + q(`${r}.vert`),
        fragmentShader: _ + q(`${n}.frag`),
      },
    };
  };
let st = class {
  constructor() {
    (this.blend = !1),
      (this.blendColor = { r: 0, g: 0, b: 0, a: 0 }),
      (this.blendFunction = {
        srcRGB: O.ONE,
        dstRGB: O.ZERO,
        srcAlpha: O.ONE,
        dstAlpha: O.ZERO,
      }),
      (this.blendEquation = { mode: H.ADD, modeAlpha: H.ADD }),
      (this.colorMask = { r: !0, g: !0, b: !0, a: !0 }),
      (this.faceCulling = !1),
      (this.cullFace = A.BACK),
      (this.frontFace = nt.CCW),
      (this.scissorTest = !1),
      (this.scissorRect = { x: 0, y: 0, width: 0, height: 0 }),
      (this.depthTest = !1),
      (this.depthFunction = L.LESS),
      (this.clearDepth = 1),
      (this.depthWrite = !0),
      (this.depthRange = { zNear: 0, zFar: 1 }),
      (this.viewport = null),
      (this.stencilTest = !1),
      (this.polygonOffsetFill = !1),
      (this.polygonOffset = [0, 0]),
      (this.stencilFunction = {
        face: A.FRONT_AND_BACK,
        func: L.ALWAYS,
        ref: 0,
        mask: 1,
      }),
      (this.clearStencil = 0),
      (this.stencilWriteMask = 1),
      (this.stencilOperation = {
        face: A.FRONT_AND_BACK,
        fail: C.KEEP,
        zFail: C.KEEP,
        zPass: C.KEEP,
      }),
      (this.clearColor = { r: 0, g: 0, b: 0, a: 0 }),
      (this.program = null),
      (this.vertexBuffer = null),
      (this.indexBuffer = null),
      (this.uniformBuffer = null),
      (this.pixelPackBuffer = null),
      (this.pixelUnpackBuffer = null),
      (this.copyReadBuffer = null),
      (this.copyWriteBuffer = null),
      (this.uniformBufferBindingPoints = []),
      (this.readFramebuffer = null),
      (this.drawFramebuffer = null),
      (this.renderbuffer = null),
      (this.activeTexture = 0),
      (this.textureUnitMap = []),
      (this.vertexArrayObject = null);
  }
};
class mt {
  constructor(t) {
    (this._allocations = new Map()),
      t
        ? (Error.stackTraceLimit = 1 / 0)
        : ((this.add = () => {}), (this.remove = () => {}));
  }
  add(t) {
    this._allocations.set(t, new Error().stack);
  }
  remove(t) {
    this._allocations.delete(t);
  }
  get information() {
    let t = "";
    if (this._allocations.size > 0) {
      t += `${this._allocations.size} live object allocations:
`;
      const s = new Map();
      this._allocations.forEach((i) => {
        s.set(i, (s.get(i) ?? 0) + 1);
      }),
        s.forEach((i, r) => {
          const n = r.split(`
`);
          n.shift(),
            n.shift(),
            (t += `${i}: ${n.shift()}
`),
            n.forEach(
              (_) =>
                (t += `   ${_}
`)
            );
        });
    }
    return t;
  }
}
const At = !1;
class xt {
  constructor() {
    for (
      this._current = [], this._max = [], this._allocations = new mt(At);
      this._current.length < U.COUNT;

    )
      this._current.push(0), this._max.push(0);
  }
  resetMax() {
    for (this._max.length = 0; this._max.length < this._current.length; )
      this._max.push(0);
  }
  increment(t, s) {
    const i = ++this._current[t];
    (this._max[t] = Math.max(i, this._max[t])), this._allocations.add(s);
  }
  decrement(t, s) {
    --this._current[t], this._allocations.remove(s);
  }
  get max() {
    return this._max;
  }
  get current() {
    return this._current;
  }
  get total() {
    return this.current.reduce((t, s) => t + s, 0);
  }
  get resourceInformation() {
    let t = "";
    if (this.total > 0) {
      t += `Live objects:
`;
      for (let s = 0; s < U.COUNT; ++s) {
        const i = this._current[s];
        i > 0 &&
          (t += `${U[s]}: ${i}
`);
      }
    }
    return (t += this._allocations.information), t;
  }
}
let G = class {
  constructor() {
    this._result = !1;
  }
  dispose() {
    this._program = I(this._program);
  }
  get result() {
    return (
      S(this._program) &&
        ((this._result = this._test(this._program)), this.dispose()),
      this._result
    );
  }
};
class St extends G {
  constructor(t) {
    super(),
      (this._rctx = t),
      (this._dummyProgram = null),
      this._rctx.type === T.WEBGL2 &&
        Y("mac") &&
        Y("chrome") &&
        ((this._program = this._prepareProgram()),
        (this._dummyProgram = this._prepareDummyProgram()));
  }
  dispose() {
    var t;
    super.dispose(),
      (t = this._dummyProgram) == null || t.dispose(),
      (this._dummyProgram = null);
  }
  _test(t) {
    const s = this._rctx;
    s.resetState();
    const i = new D(
        s,
        { colorTarget: P.TEXTURE, depthStencilTarget: N.NONE },
        {
          target: R.TEXTURE_2D,
          wrapMode: x.CLAMP_TO_EDGE,
          pixelFormat: g.RGBA,
          dataType: p.UNSIGNED_BYTE,
          samplingMode: m.NEAREST,
          width: 1,
          height: 1,
        }
      ),
      r = w.createIndex(this._rctx, y.STATIC_DRAW, new Uint8Array([0]));
    s.bindFramebuffer(i),
      s.setViewport(0, 0, 1, 1),
      s.useProgram(this._dummyProgram),
      s.bindBuffer(r, a.ELEMENT_ARRAY_BUFFER),
      s.drawElements(E.POINTS, 1, X.UNSIGNED_BYTE, 0),
      s.useProgram(t),
      s.bindVAO(null),
      s.drawArrays(E.TRIANGLES, 0, 258);
    const n = new Uint8Array(4);
    return (
      i.readPixels(0, 0, 1, 1, g.RGBA, p.UNSIGNED_BYTE, n),
      i.dispose(),
      r.dispose(),
      n[0] === 255
    );
  }
  _prepareProgram() {
    const t = `
    precision highp float;

    varying float triangleId;

    const vec3 triangleVertices[3] = vec3[3](vec3(-0.5, -0.5, 0.0), vec3(0.5, -0.5, 0.0), vec3(0.0, 0.5, 0.0));

    void main(void) {
      triangleId = floor(float(gl_VertexID)/3.0);

      vec3 position = triangleVertices[gl_VertexID % 3];
      float offset = triangleId / ${J.float(85)};
      position.z = 0.5 - offset;

      gl_Position = vec4(position, 1.0);
    }
    `,
      s = `
    precision highp float;

    varying float triangleId;

    void main(void) {
      gl_FragColor = triangleId == ${J.float(
        85
      )} ? vec4(0.0, 1.0, 0.0, 1.0) : vec4(1.0, 0.0, 0.0, 1.0);
    }
    `;
    return this._rctx.programCache.acquire(t, s, new Map([]));
  }
  _prepareDummyProgram() {
    return this._rctx.programCache.acquire(
      `
    void main(void) {
      gl_Position = vec4(0.0, 0.0, float(gl_VertexID)-2.0, 1.0);
    }`,
      `
    void main(void) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }`,
      new Map([])
    );
  }
}
class Ot extends G {
  constructor(t) {
    super(),
      (this._rctx = t),
      (this._program = it(this._rctx, !1)),
      (this._obfuscated = it(this._rctx, !0));
  }
  dispose() {
    super.dispose(), (this._obfuscated = I(this._obfuscated));
  }
  _test(t) {
    if (Y("force-double-precision-obfuscation")) return !0;
    if (F(this._obfuscated)) return !1;
    const s = this._runProgram(t),
      i = this._runProgram(this._obfuscated);
    return s !== 0 && (i === 0 || s / i > 5);
  }
  _runProgram(t) {
    const s = this._rctx;
    s.resetState();
    const i = new D(
        s,
        { colorTarget: P.TEXTURE, depthStencilTarget: N.NONE },
        {
          target: R.TEXTURE_2D,
          wrapMode: x.CLAMP_TO_EDGE,
          pixelFormat: g.RGBA,
          dataType: p.UNSIGNED_BYTE,
          samplingMode: m.NEAREST,
          width: 1,
          height: 1,
        }
      ),
      r = w.createVertex(
        s,
        y.STATIC_DRAW,
        new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])
      ),
      n = new k(
        s,
        new Map([["position", 0]]),
        { geometry: [new j("position", 2, X.UNSIGNED_SHORT, 0, 4)] },
        { geometry: r }
      ),
      _ = $(5633261287538229e-9, 2626832878767164e-9, 1.4349880495278358e6),
      l = $(563327146742708e-8, 2.6268736381334523e6, 1434963231608387e-9),
      o = new Float32Array(6);
    et(_, o, 3);
    const h = new Float32Array(6);
    et(l, h, 3),
      s.useProgram(t),
      t.setUniform3f("u_highA", o[0], o[2], o[4]),
      t.setUniform3f("u_lowA", o[1], o[3], o[5]),
      t.setUniform3f("u_highB", h[0], h[2], h[4]),
      t.setUniform3f("u_lowB", h[1], h[3], h[5]),
      s.bindFramebuffer(i),
      s.setViewport(0, 0, 1, 1),
      s.bindVAO(n),
      s.drawArrays(E.TRIANGLE_STRIP, 0, 4);
    const c = new Uint8Array(4);
    i.readPixels(0, 0, 1, 1, g.RGBA, p.UNSIGNED_BYTE, c),
      n.dispose(!1),
      r.dispose(),
      i.dispose();
    const f = (_[2] - l[2]) / 25,
      W = Tt(c);
    return Math.abs(f - W);
  }
}
function it(e, t) {
  const s = `

  precision highp float;

  attribute vec2 position;

  uniform vec3 u_highA;
  uniform vec3 u_lowA;
  uniform vec3 u_highB;
  uniform vec3 u_lowB;

  varying vec4 v_color;

  ${t ? "#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION" : ""}

  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION

  vec3 dpPlusFrc(vec3 a, vec3 b) {
    return mix(a, a + b, vec3(notEqual(b, vec3(0))));
  }

  vec3 dpMinusFrc(vec3 a, vec3 b) {
    return mix(vec3(0), a - b, vec3(notEqual(a, b)));
  }

  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
    vec3 t1 = dpPlusFrc(hiA, hiB);
    vec3 e = dpMinusFrc(t1, hiA);
    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
    return t1 + t2;
  }

  #else

  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
    vec3 t1 = hiA + hiB;
    vec3 e = t1 - hiA;
    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
    return t1 + t2;
  }

  #endif

  const float MAX_RGBA_FLOAT =
    255.0 / 256.0 +
    255.0 / 256.0 / 256.0 +
    255.0 / 256.0 / 256.0 / 256.0 +
    255.0 / 256.0 / 256.0 / 256.0 / 256.0;

  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

  vec4 float2rgba(const float value) {
    // Make sure value is in the domain we can represent
    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

    // Decompose value in 32bit fixed point parts represented as
    // uint8 rgba components. Decomposition uses the fractional part after multiplying
    // by a power of 256 (this removes the bits that are represented in the previous
    // component) and then converts the fractional part to 8bits.
    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

    // Convert uint8 values (from 0 to 255) to floating point representation for
    // the shader
    const float toU8AsFloat = 1.0 / 255.0;

    return fixedPointU8 * toU8AsFloat;
  }

  void main() {
    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);

    v_color = float2rgba(val.z / 25.0);

    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
  }
  `;
  return e.programCache.acquire(
    s,
    `
  precision highp float;

  varying vec4 v_color;

  void main() {
    gl_FragColor = v_color;
  }
  `,
    new Map([["position", 0]])
  );
}
let Ct = class extends G {
  constructor(e) {
    var t, s, i, r, n;
    if ((super(), (this._rctx = e), !!e.gl)) {
      if (e.type === T.WEBGL1)
        return void (this._result = !(
          !((t = e.capabilities.textureFloat) != null && t.textureFloat) ||
          !((s = e.capabilities.colorBufferFloat) != null && s.textureFloat)
        ));
      (i = e.capabilities.textureFloat) != null &&
        i.textureFloat &&
        (r = e.capabilities.colorBufferFloat) != null &&
        r.textureFloat &&
        (n = e.capabilities.colorBufferFloat) != null &&
        n.floatBlend &&
        (this._program = e.programCache.acquire(
          `
    precision highp float;
    attribute vec2 a_pos;

    void main() {
      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
    }
    `,
          `
     precision highp float;

     void main() {
      gl_FragColor = vec4(0.5, 0.5, 0.5, 0.5);
     }
    `,
          new Map([["a_pos", 0]])
        ));
    }
  }
  _test(e) {
    const t = this._rctx,
      s = new D(
        t,
        { colorTarget: P.TEXTURE, depthStencilTarget: N.NONE },
        {
          target: R.TEXTURE_2D,
          wrapMode: x.CLAMP_TO_EDGE,
          pixelFormat: g.RGBA,
          dataType: p.FLOAT,
          internalFormat: ft.RGBA32F,
          samplingMode: m.NEAREST,
          width: 1,
          height: 1,
        }
      ),
      i = w.createVertex(
        t,
        y.STATIC_DRAW,
        new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])
      ),
      r = new k(
        t,
        new Map([["a_pos", 0]]),
        { geometry: [new j("a_pos", 2, X.UNSIGNED_SHORT, 0, 4)] },
        { geometry: i }
      );
    t.useProgram(e);
    const n = t.getBoundFramebufferObject(),
      { x: _, y: l, width: o, height: h } = t.getViewport();
    t.bindFramebuffer(s),
      t.setViewport(0, 0, 1, 1),
      t.bindVAO(r),
      t.drawArrays(E.TRIANGLE_STRIP, 0, 4);
    const c = gt({ blending: pt });
    t.setPipelineState(c), t.drawArrays(E.TRIANGLE_STRIP, 0, 4), Rt.init(t);
    const f = t.gl.getError();
    return (
      t.setViewport(_, l, o, h),
      t.bindFramebuffer(n),
      r.dispose(!1),
      i.dispose(),
      s.dispose(),
      f !== 1282 || !1
    );
  }
};
class vt extends G {
  constructor(t) {
    super(),
      (this._rctx = t),
      (this._program = t.programCache.acquire(
        `
      precision highp float;
      attribute vec2 a_pos;
      uniform highp sampler2D u_texture;
      varying vec4 v_color;

      float getBit(in float bitset, in int bitIndex) {
        float offset = pow(2.0, float(bitIndex));
        return mod(floor(bitset / offset), 2.0);
      }

      void main() {
        vec4 value = texture2D(u_texture, vec2(0.0));
        float bit = getBit(value.x * 255.0, 1);

        v_color = bit * vec4(1.0);
        gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
      }
      `,
        `
      precision highp float;
      varying vec4 v_color;

      void main() {
        gl_FragColor = v_color;
      }
      `,
        new Map([["a_pos", 0]])
      ));
  }
  _test(t) {
    const s = this._rctx,
      i = new D(
        s,
        { colorTarget: P.TEXTURE, depthStencilTarget: N.NONE },
        {
          target: R.TEXTURE_2D,
          wrapMode: x.CLAMP_TO_EDGE,
          pixelFormat: g.RGBA,
          dataType: p.UNSIGNED_BYTE,
          samplingMode: m.NEAREST,
          width: 1,
          height: 1,
        }
      ),
      r = new Uint8Array(4),
      n = w.createVertex(
        s,
        y.STATIC_DRAW,
        new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])
      ),
      _ = new k(
        s,
        new Map([["a_position", 0]]),
        { geometry: [new j("a_position", 2, X.SHORT, 0, 4)] },
        { geometry: n }
      );
    s.useProgram(t);
    const l = new z(
      s,
      {
        target: R.TEXTURE_2D,
        wrapMode: x.CLAMP_TO_EDGE,
        pixelFormat: g.RGBA,
        dataType: p.UNSIGNED_BYTE,
        samplingMode: m.NEAREST,
        width: 1,
        height: 1,
      },
      new Uint8Array([2, 255, 0, 0])
    );
    t.setUniform1i("u_texture", 0), s.bindTexture(l, 0);
    const o = s.getBoundFramebufferObject();
    s.bindFramebuffer(i), s.useProgram(t);
    const { x: h, y: c, width: f, height: W } = s.getViewport();
    s.setViewport(0, 0, 1, 1),
      s.bindVAO(_),
      s.drawArrays(E.TRIANGLE_STRIP, 0, 4),
      s.setViewport(h, c, f, W),
      i.readPixels(0, 0, 1, 1, g.RGBA, p.UNSIGNED_BYTE, r),
      _.dispose(!1),
      n.dispose(),
      i.dispose();
    const K = r[0] !== 255 || r[1] !== 255 || r[2] !== 255 || r[3] !== 255;
    return (
      K &&
        ht
          .getLogger("esri.views.webgl.testSamplerPrecision")
          .warn(
            `A problem was detected with your graphics driver. Your driver does not appear to honor sampler precision specifiers, which may result in rendering issues due to numerical instability. We recommend ensuring that your drivers have been updated to the latest version. Applying lowp sampler workaround. [${r[0]}.${r[1]}.${r[2]}.${r[3]}]`
          ),
      s.bindFramebuffer(o),
      K
    );
  }
}
let Mt = class extends G {
  constructor(e) {
    super(),
      (this._rctx = e),
      (this._image = new Image()),
      (this._image.src =
        "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A"),
      (this._image.width = 5),
      (this._image.height = 5),
      this._image.decode(),
      (this._program = e.programCache.acquire(
        `
    precision highp float;

    attribute vec2 a_pos;
    varying vec2 v_uv;

    void main() {
      v_uv = a_pos;
      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
    }
    `,
        `
    precision highp float;

    varying vec2 v_uv;
    uniform sampler2D u_texture;

    void main() {
      gl_FragColor = texture2D(u_texture, v_uv);
    }
    `,
        new Map([["a_pos", 0]])
      ));
  }
  dispose() {
    super.dispose(), (this._image.src = "");
  }
  _test(e) {
    const t = this._rctx;
    if (!t.gl) return e.dispose(), !0;
    const s = new D(
        t,
        { colorTarget: P.TEXTURE, depthStencilTarget: N.NONE },
        {
          target: R.TEXTURE_2D,
          wrapMode: x.CLAMP_TO_EDGE,
          pixelFormat: g.RGBA,
          dataType: p.UNSIGNED_BYTE,
          samplingMode: m.NEAREST,
          width: 1,
          height: 1,
        }
      ),
      i = w.createVertex(
        t,
        y.STATIC_DRAW,
        new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])
      ),
      r = new k(t, new Map([["a_pos", 0]]), at, { geometry: i }),
      n = new z(
        t,
        {
          dataType: p.UNSIGNED_BYTE,
          pixelFormat: g.RGBA,
          preMultiplyAlpha: !1,
          wrapMode: x.CLAMP_TO_EDGE,
          samplingMode: m.LINEAR,
        },
        this._image
      );
    t.useProgram(e), t.bindTexture(n, 0), e.setUniform1i("u_texture", 0);
    const _ = t.getBoundFramebufferObject(),
      { x: l, y: o, width: h, height: c } = t.getViewport();
    t.bindFramebuffer(s),
      t.setViewport(0, 0, 1, 1),
      t.setClearColor(0, 0, 0, 0),
      t.setBlendingEnabled(!1),
      t.clearSafe(M.COLOR_BUFFER_BIT),
      t.bindVAO(r),
      t.drawArrays(E.TRIANGLE_STRIP, 0, 4);
    const f = new Uint8Array(4);
    return (
      s.readPixels(0, 0, 1, 1, g.RGBA, p.UNSIGNED_BYTE, f),
      r.dispose(!1),
      i.dispose(),
      s.dispose(),
      n.dispose(),
      t.setViewport(l, o, h, c),
      t.bindFramebuffer(_),
      f[0] !== 255
    );
  }
};
function v(e, t, s, i, r) {
  if (i && b(e)) return !0;
  if (t[s]) return !1;
  for (const n of r) if (e.getExtension(n)) return !0;
  return !1;
}
class Ut {
  constructor(t, s) {
    (this._gl = t),
      (this._instancing = null),
      (this._vertexArrayObject = null),
      (this._compressedTextureETC = null),
      (this._compressedTextureS3TC = null),
      (this._textureFilterAnisotropic = null),
      (this._textureFloat = null),
      (this._colorBufferFloat = null),
      (this._minMaxBlending = null),
      (this._loseContext = null),
      (this._drawBuffers = null),
      (this._textureNorm16 = null),
      (this._depthTexture = null),
      (this._standardDerivatives = null),
      (this._shaderTextureLOD = null),
      (this._fragDepth = null),
      (this._textureFloatLinear = null),
      (this._disabledExtensions = s.disabledExtensions || {}),
      (this._debugWebGLExtensions = s.debugWebGLExtensions || {});
  }
  get drawBuffers() {
    return (
      this._drawBuffers ||
        (this._drawBuffers = (function (t, s) {
          if (s.disjointTimerQuery) return null;
          if (b(t))
            return {
              drawBuffers: t.drawBuffers.bind(t),
              MAX_DRAW_BUFFERS: t.MAX_DRAW_BUFFERS,
              MAX_COLOR_ATTACHMENTS: t.MAX_COLOR_ATTACHMENTS,
            };
          if (s.drawBuffers) return null;
          const i = t.getExtension("WEBGL_draw_buffers");
          return i
            ? {
                drawBuffers: i.drawBuffersWEBGL.bind(i),
                MAX_DRAW_BUFFERS: i.MAX_DRAW_BUFFERS_WEBGL,
                MAX_COLOR_ATTACHMENTS: i.MAX_COLOR_ATTACHMENTS_WEBGL,
              }
            : null;
        })(this._gl, this._disabledExtensions)),
      this._drawBuffers
    );
  }
  get instancing() {
    return (
      this._instancing ||
        (this._instancing = (function (t) {
          if (b(t)) return t;
          const s = t.getExtension("ANGLE_instanced_arrays");
          return s
            ? {
                drawArraysInstanced: s.drawArraysInstancedANGLE.bind(s),
                drawElementsInstanced: s.drawElementsInstancedANGLE.bind(s),
                vertexAttribDivisor: s.vertexAttribDivisorANGLE.bind(s),
              }
            : null;
        })(this._gl)),
      this._instancing
    );
  }
  get vao() {
    return (
      this._vertexArrayObject ||
        (this._vertexArrayObject = (function (t, s) {
          if (b(t))
            return {
              createVertexArray: t.createVertexArray.bind(t),
              deleteVertexArray: t.deleteVertexArray.bind(t),
              bindVertexArray: t.bindVertexArray.bind(t),
            };
          if (s.vao) return null;
          const i =
            t.getExtension("OES_vertex_array_object") ||
            t.getExtension("MOZ_OES_vertex_array_object") ||
            t.getExtension("WEBKIT_OES_vertex_array_object");
          return i
            ? {
                createVertexArray: i.createVertexArrayOES.bind(i),
                deleteVertexArray: i.deleteVertexArrayOES.bind(i),
                bindVertexArray: i.bindVertexArrayOES.bind(i),
              }
            : null;
        })(this._gl, this._disabledExtensions)),
      this._vertexArrayObject
    );
  }
  get compressedTextureETC() {
    return (
      this._compressedTextureETC ||
        (this._compressedTextureETC = (function (t, s) {
          if (s.compressedTextureETC) return null;
          const i = t.getExtension("WEBGL_compressed_texture_etc");
          return i
            ? {
                COMPRESSED_R11_EAC: i.COMPRESSED_R11_EAC,
                COMPRESSED_SIGNED_R11_EAC: i.COMPRESSED_SIGNED_R11_EAC,
                COMPRESSED_RG11_EAC: i.COMPRESSED_RG11_EAC,
                COMPRESSED_SIGNED_RG11_EAC: i.COMPRESSED_SIGNED_RG11_EAC,
                COMPRESSED_RGB8_ETC2: i.COMPRESSED_RGB8_ETC2,
                COMPRESSED_SRGB8_ETC2: i.COMPRESSED_SRGB8_ETC2,
                COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:
                  i.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,
                COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:
                  i.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,
                COMPRESSED_RGBA8_ETC2_EAC: i.COMPRESSED_RGBA8_ETC2_EAC,
                COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:
                  i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC,
              }
            : null;
        })(this._gl, this._disabledExtensions)),
      this._compressedTextureETC
    );
  }
  get compressedTextureS3TC() {
    return (
      this._compressedTextureS3TC ||
        (this._compressedTextureS3TC = (function (t, s) {
          if (s.compressedTextureS3TC) return null;
          const i = t.getExtension("WEBGL_compressed_texture_s3tc");
          return i
            ? {
                COMPRESSED_RGB_S3TC_DXT1: i.COMPRESSED_RGB_S3TC_DXT1_EXT,
                COMPRESSED_RGBA_S3TC_DXT1: i.COMPRESSED_RGBA_S3TC_DXT1_EXT,
                COMPRESSED_RGBA_S3TC_DXT3: i.COMPRESSED_RGBA_S3TC_DXT3_EXT,
                COMPRESSED_RGBA_S3TC_DXT5: i.COMPRESSED_RGBA_S3TC_DXT5_EXT,
              }
            : null;
        })(this._gl, this._disabledExtensions)),
      this._compressedTextureS3TC
    );
  }
  get textureFilterAnisotropic() {
    return (
      this._textureFilterAnisotropic ||
        (this._textureFilterAnisotropic = (function (t, s) {
          if (s.textureFilterAnisotropic) return null;
          const i =
            t.getExtension("EXT_texture_filter_anisotropic") ||
            t.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
            t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          return i
            ? {
                MAX_TEXTURE_MAX_ANISOTROPY: i.MAX_TEXTURE_MAX_ANISOTROPY_EXT,
                TEXTURE_MAX_ANISOTROPY: i.TEXTURE_MAX_ANISOTROPY_EXT,
              }
            : null;
        })(this._gl, this._disabledExtensions)),
      this._textureFilterAnisotropic
    );
  }
  get disjointTimerQuery() {
    return (
      this._disjointTimerQuery ||
        (this._disjointTimerQuery = bt(this._gl, this._disabledExtensions)),
      this._disjointTimerQuery
    );
  }
  get textureFloat() {
    return (
      this._textureFloat ||
        (this._textureFloat = (function (t, s) {
          if (b(t))
            return {
              textureFloat: !0,
              textureFloatLinear:
                !s.textureFloatLinear &&
                !!t.getExtension("OES_texture_float_linear"),
              textureHalfFloat: !0,
              textureHalfFloatLinear: !0,
              HALF_FLOAT: t.HALF_FLOAT,
              R16F: t.R16F,
              RG16F: t.RG16F,
              RGBA16F: t.RGBA16F,
              R32F: t.R32F,
              RG32F: t.RG32F,
              RGBA32F: t.RGBA32F,
              R11F_G11F_B10F: t.R11F_G11F_B10F,
              RGB16F: t.RGB16F,
            };
          if (t instanceof WebGLRenderingContext) {
            const i =
              !s.textureHalfFloat && t.getExtension("OES_texture_half_float");
            return {
              textureFloat:
                !s.textureFloat && !!t.getExtension("OES_texture_float"),
              textureFloatLinear:
                !s.textureFloatLinear &&
                !!t.getExtension("OES_texture_float_linear"),
              textureHalfFloat: !!i,
              textureHalfFloatLinear:
                !s.textureHalfFloatLinear &&
                !!t.getExtension("OES_texture_half_float_linear"),
              HALF_FLOAT: i ? i.HALF_FLOAT_OES : void 0,
            };
          }
          return null;
        })(this._gl, this._disabledExtensions)),
      this._textureFloat
    );
  }
  get colorBufferFloat() {
    return (
      this._colorBufferFloat ||
        (this._colorBufferFloat = (function (t, s) {
          if (b(t)) {
            const i =
                (!s.colorBufferHalfFloat &&
                  t.getExtension("EXT_color_buffer_half_float")) ||
                (!s.colorBufferFloat &&
                  t.getExtension("EXT_color_buffer_float")),
              r =
                !s.colorBufferFloat && t.getExtension("EXT_color_buffer_float"),
              n =
                !s.floatBlend &&
                !s.colorBufferFloat &&
                t.getExtension("EXT_float_blend");
            return i || r || n
              ? {
                  textureFloat: !!r,
                  textureHalfFloat: !!i,
                  floatBlend: !!n,
                  R16F: t.R16F,
                  RG16F: t.RG16F,
                  RGBA16F: t.RGBA16F,
                  R32F: t.R32F,
                  RG32F: t.RG32F,
                  RGBA32F: t.RGBA32F,
                  R11F_G11F_B10F: t.R11F_G11F_B10F,
                  RGB16F: t.RGB16F,
                }
              : null;
          }
          if (t instanceof WebGLRenderingContext) {
            const i =
                !s.colorBufferHalfFloat &&
                t.getExtension("EXT_color_buffer_half_float"),
              r =
                !s.colorBufferFloat &&
                t.getExtension("WEBGL_color_buffer_float"),
              n =
                !s.floatBlend &&
                !s.colorBufferFloat &&
                t.getExtension("EXT_float_blend");
            return i || r || n
              ? {
                  textureFloat: !!r,
                  textureHalfFloat: !!i,
                  floatBlend: !!n,
                  RGBA16F: i ? i.RGBA16F_EXT : void 0,
                  RGB16F: i ? i.RGB16F_EXT : void 0,
                  RGBA32F: r ? r.RGBA32F_EXT : void 0,
                }
              : null;
          }
          return null;
        })(this._gl, this._disabledExtensions)),
      this._colorBufferFloat
    );
  }
  get blendMinMax() {
    return (
      this._minMaxBlending ||
        (this._minMaxBlending = (function (t, s) {
          if (b(t)) return { MIN: t.MIN, MAX: t.MAX };
          if (s.blendMinMax) return null;
          {
            const i = t.getExtension("EXT_blend_minmax");
            return i ? { MIN: i.MIN_EXT, MAX: i.MAX_EXT } : null;
          }
        })(this._gl, this._disabledExtensions)),
      this._minMaxBlending
    );
  }
  get depthTexture() {
    return (
      this._depthTexture === null &&
        (this._depthTexture = v(
          this._gl,
          this._disabledExtensions,
          "depthTexture",
          !0,
          [
            "WEBGL_depth_texture",
            "MOZ_WEBGL_depth_texture",
            "WEBKIT_WEBGL_depth_texture",
          ]
        )),
      this._depthTexture
    );
  }
  get standardDerivatives() {
    return (
      this._standardDerivatives === null &&
        (this._standardDerivatives = v(
          this._gl,
          this._disabledExtensions,
          "standardDerivatives",
          !0,
          ["OES_standard_derivatives"]
        )),
      this._standardDerivatives
    );
  }
  get shaderTextureLOD() {
    return (
      this._shaderTextureLOD === null &&
        (this._shaderTextureLOD = v(
          this._gl,
          this._disabledExtensions,
          "shaderTextureLOD",
          !0,
          ["EXT_shader_texture_lod"]
        )),
      this._shaderTextureLOD
    );
  }
  get fragDepth() {
    return (
      this._fragDepth === null &&
        (this._fragDepth = v(
          this._gl,
          this._disabledExtensions,
          "fragDepth",
          !0,
          ["EXT_frag_depth"]
        )),
      this._fragDepth
    );
  }
  get loseContext() {
    return (
      this._loseContext ||
        (this._loseContext = (function (t, s) {
          const i = s.loseContext && t.getExtension("WEBGL_lose_context");
          return i ? { loseRenderingContext: () => i.loseContext() } : null;
        })(this._gl, this._debugWebGLExtensions)),
      this._loseContext
    );
  }
  get textureNorm16() {
    return (
      this._textureNorm16 ||
        (this._textureNorm16 = (function (t, s) {
          if (!b(t) || s.textureNorm16) return null;
          const i = t.getExtension("EXT_texture_norm16");
          return i
            ? {
                R16: i.R16_EXT,
                RG16: i.RG16_EXT,
                RGB16: i.RGB16_EXT,
                RGBA16: i.RGBA16_EXT,
                R16_SNORM: i.R16_SNORM_EXT,
                RG16_SNORM: i.RG16_SNORM_EXT,
                RGB16_SNORM: i.RGB16_SNORM_EXT,
                RGBA16_SNORM: i.RGBA16_SNORM_EXT,
              }
            : null;
        })(this._gl, this._disabledExtensions)),
      this._textureNorm16
    );
  }
  get textureFloatLinear() {
    return (
      this._textureFloatLinear === null &&
        (this._textureFloatLinear = v(
          this._gl,
          this._disabledExtensions,
          "textureFloatLinear",
          !1,
          ["OES_texture_float_linear"]
        )),
      this._textureFloatLinear
    );
  }
  enable(t) {
    return this[t];
  }
}
let Yt = class {
  constructor(e, t) {
    (this.gl = e),
      (this.instanceCounter = new xt()),
      (this.programCache = new ot(this)),
      (this._state = new st()),
      (this._numOfDrawCalls = 0),
      (this._numOfTriangles = 0),
      (this.type = b(e) ? T.WEBGL2 : T.WEBGL1),
      this._loadExtensions(),
      this.configure(t);
  }
  get gl2() {
    return this.type === T.WEBGL1 ? null : this.gl;
  }
  configure(e) {
    (this._capabilities = new Ut(this.gl, e)),
      (this._parameters = this._loadParameters(e));
    const t = this.gl.getParameter(this.gl.VIEWPORT);
    (this._state = new st()),
      (this._state.viewport = { x: t[0], y: t[1], width: t[2], height: t[3] }),
      (this._stateTracker = new Ft({
        setBlending: (s) => {
          if (s) {
            this.setBlendingEnabled(!0),
              this.setBlendEquationSeparate(s.opRgb, s.opAlpha),
              this.setBlendFunctionSeparate(
                s.srcRgb,
                s.dstRgb,
                s.srcAlpha,
                s.dstAlpha
              );
            const i = s.color;
            this.setBlendColor(i.r, i.g, i.b, i.a);
          } else this.setBlendingEnabled(!1);
        },
        setCulling: (s) => {
          s
            ? (this.setFaceCullingEnabled(!0),
              this.setCullFace(s.face),
              this.setFrontFace(s.mode))
            : this.setFaceCullingEnabled(!1);
        },
        setPolygonOffset: (s) => {
          s
            ? (this.setPolygonOffsetFillEnabled(!0),
              this.setPolygonOffset(s.factor, s.units))
            : this.setPolygonOffsetFillEnabled(!1);
        },
        setDepthTest: (s) => {
          s
            ? (this.setDepthTestEnabled(!0), this.setDepthFunction(s.func))
            : this.setDepthTestEnabled(!1);
        },
        setStencilTest: (s) => {
          if (s) {
            this.setStencilTestEnabled(!0);
            const i = s.function;
            this.setStencilFunction(i.func, i.ref, i.mask);
            const r = s.operation;
            this.setStencilOp(r.fail, r.zFail, r.zPass);
          } else this.setStencilTestEnabled(!1);
        },
        setDepthWrite: (s) => {
          s
            ? (this.setDepthWriteEnabled(!0),
              this.setDepthRange(s.zNear, s.zFar))
            : this.setDepthWriteEnabled(!1);
        },
        setColorWrite: (s) => {
          s
            ? this.setColorMask(s.r, s.g, s.b, s.a)
            : this.setColorMask(!1, !1, !1, !1);
        },
        setStencilWrite: (s) => {
          s ? this.setStencilWriteMask(s.mask) : this.setStencilWriteMask(0);
        },
      })),
      this.enforceState(),
      I(this._driverTest),
      (this._driverTest = new (class {
        constructor(s) {
          (this.rctx = s),
            (this.floatBufferBlend = new Ct(s)),
            (this.svgPremultipliesAlpha = new Mt(s)),
            (this.doublePrecisionRequiresObfuscation = new Ot(s)),
            (this.ignoresSamplerPrecision = new vt(s)),
            (this.drawArraysRequiresIndicesTypeReset = new St(s));
        }
        dispose() {
          this.ignoresSamplerPrecision.dispose(),
            this.doublePrecisionRequiresObfuscation.dispose(),
            this.svgPremultipliesAlpha.dispose(),
            this.floatBufferBlend.dispose(),
            this.drawArraysRequiresIndicesTypeReset.dispose();
        }
      })(this));
  }
  dispose() {
    I(this._driverTest),
      this.programCache.dispose(),
      this.bindVAO(null),
      this.unbindBuffer(a.ARRAY_BUFFER),
      this.unbindBuffer(a.ELEMENT_ARRAY_BUFFER),
      this.type === T.WEBGL2 &&
        (this.unbindBuffer(a.UNIFORM_BUFFER),
        (this._state.uniformBufferBindingPoints.length = 0),
        this.unbindBuffer(a.PIXEL_PACK_BUFFER),
        this.unbindBuffer(a.PIXEL_UNPACK_BUFFER),
        this.unbindBuffer(a.COPY_READ_BUFFER),
        this.unbindBuffer(a.COPY_WRITE_BUFFER)),
      (this._state.textureUnitMap.length = 0),
      B();
  }
  get driverTest() {
    return this._driverTest;
  }
  get contextAttributes() {
    return this.gl.getContextAttributes();
  }
  get parameters() {
    return this._parameters;
  }
  setPipelineState(e) {
    this._stateTracker.setPipeline(e);
  }
  setBlendingEnabled(e) {
    this._state.blend !== e &&
      (e === !0
        ? this.gl.enable(this.gl.BLEND)
        : this.gl.disable(this.gl.BLEND),
      (this._state.blend = e),
      this._stateTracker.invalidateBlending());
  }
  externalProgramUpdate() {
    var e;
    (e = this._state.program) == null || e.stop(), (this._state.program = null);
  }
  externalTextureUnitUpdate(e, t) {
    for (let s = 0; s < e.length; ++s) this._state.textureUnitMap[e[s]] = null;
    t >= 0 && (this._state.activeTexture = t);
  }
  externalVertexArrayObjectUpdate() {
    const e = this.capabilities.vao;
    e && (e.bindVertexArray(null), (this._state.vertexArrayObject = null)),
      (this._state.vertexBuffer = null),
      (this._state.indexBuffer = null);
  }
  externalVertexBufferUpdate() {
    this._state.vertexBuffer = null;
  }
  externalIndexBufferUpdate() {
    this._state.indexBuffer = null;
  }
  setBlendColor(e, t, s, i) {
    (e === this._state.blendColor.r &&
      t === this._state.blendColor.g &&
      s === this._state.blendColor.b &&
      i === this._state.blendColor.a) ||
      (this.gl.blendColor(e, t, s, i),
      (this._state.blendColor.r = e),
      (this._state.blendColor.g = t),
      (this._state.blendColor.b = s),
      (this._state.blendColor.a = i),
      this._stateTracker.invalidateBlending());
  }
  setBlendFunction(e, t) {
    (e === this._state.blendFunction.srcRGB &&
      t === this._state.blendFunction.dstRGB) ||
      (this.gl.blendFunc(e, t),
      (this._state.blendFunction.srcRGB = e),
      (this._state.blendFunction.srcAlpha = e),
      (this._state.blendFunction.dstRGB = t),
      (this._state.blendFunction.dstAlpha = t),
      this._stateTracker.invalidateBlending());
  }
  setBlendFunctionSeparate(e, t, s, i) {
    (this._state.blendFunction.srcRGB === e &&
      this._state.blendFunction.srcAlpha === s &&
      this._state.blendFunction.dstRGB === t &&
      this._state.blendFunction.dstAlpha === i) ||
      (this.gl.blendFuncSeparate(e, t, s, i),
      (this._state.blendFunction.srcRGB = e),
      (this._state.blendFunction.srcAlpha = s),
      (this._state.blendFunction.dstRGB = t),
      (this._state.blendFunction.dstAlpha = i),
      this._stateTracker.invalidateBlending());
  }
  setBlendEquation(e) {
    this._state.blendEquation.mode !== e &&
      (this.gl.blendEquation(e),
      (this._state.blendEquation.mode = e),
      (this._state.blendEquation.modeAlpha = e),
      this._stateTracker.invalidateBlending());
  }
  setBlendEquationSeparate(e, t) {
    (this._state.blendEquation.mode === e &&
      this._state.blendEquation.modeAlpha === t) ||
      (this.gl.blendEquationSeparate(e, t),
      (this._state.blendEquation.mode = e),
      (this._state.blendEquation.modeAlpha = t),
      this._stateTracker.invalidateBlending());
  }
  setColorMask(e, t, s, i) {
    (this._state.colorMask.r === e &&
      this._state.colorMask.g === t &&
      this._state.colorMask.b === s &&
      this._state.colorMask.a === i) ||
      (this.gl.colorMask(e, t, s, i),
      (this._state.colorMask.r = e),
      (this._state.colorMask.g = t),
      (this._state.colorMask.b = s),
      (this._state.colorMask.a = i),
      this._stateTracker.invalidateColorWrite());
  }
  setClearColor(e, t, s, i) {
    (this._state.clearColor.r === e &&
      this._state.clearColor.g === t &&
      this._state.clearColor.b === s &&
      this._state.clearColor.a === i) ||
      (this.gl.clearColor(e, t, s, i),
      (this._state.clearColor.r = e),
      (this._state.clearColor.g = t),
      (this._state.clearColor.b = s),
      (this._state.clearColor.a = i));
  }
  setFaceCullingEnabled(e) {
    this._state.faceCulling !== e &&
      (e === !0
        ? this.gl.enable(this.gl.CULL_FACE)
        : this.gl.disable(this.gl.CULL_FACE),
      (this._state.faceCulling = e),
      this._stateTracker.invalidateCulling());
  }
  setPolygonOffsetFillEnabled(e) {
    this._state.polygonOffsetFill !== e &&
      (e === !0
        ? this.gl.enable(this.gl.POLYGON_OFFSET_FILL)
        : this.gl.disable(this.gl.POLYGON_OFFSET_FILL),
      (this._state.polygonOffsetFill = e),
      this._stateTracker.invalidatePolygonOffset());
  }
  setPolygonOffset(e, t) {
    (this._state.polygonOffset[0] === e &&
      this._state.polygonOffset[1] === t) ||
      ((this._state.polygonOffset[0] = e),
      (this._state.polygonOffset[1] = t),
      this.gl.polygonOffset(e, t),
      this._stateTracker.invalidatePolygonOffset());
  }
  setCullFace(e) {
    this._state.cullFace !== e &&
      (this.gl.cullFace(e),
      (this._state.cullFace = e),
      this._stateTracker.invalidateCulling());
  }
  setFrontFace(e) {
    this._state.frontFace !== e &&
      (this.gl.frontFace(e),
      (this._state.frontFace = e),
      this._stateTracker.invalidateCulling());
  }
  setScissorTestEnabled(e) {
    this._state.scissorTest !== e &&
      (e === !0
        ? this.gl.enable(this.gl.SCISSOR_TEST)
        : this.gl.disable(this.gl.SCISSOR_TEST),
      (this._state.scissorTest = e));
  }
  setScissorRect(e, t, s, i) {
    (this._state.scissorRect.x === e &&
      this._state.scissorRect.y === t &&
      this._state.scissorRect.width === s &&
      this._state.scissorRect.height === i) ||
      (this.gl.scissor(e, t, s, i),
      (this._state.scissorRect.x = e),
      (this._state.scissorRect.y = t),
      (this._state.scissorRect.width = s),
      (this._state.scissorRect.height = i));
  }
  setDepthTestEnabled(e) {
    this._state.depthTest !== e &&
      (e === !0
        ? this.gl.enable(this.gl.DEPTH_TEST)
        : this.gl.disable(this.gl.DEPTH_TEST),
      (this._state.depthTest = e),
      this._stateTracker.invalidateDepthTest());
  }
  setClearDepth(e) {
    this._state.clearDepth !== e &&
      (this.gl.clearDepth(e), (this._state.clearDepth = e));
  }
  setDepthFunction(e) {
    this._state.depthFunction !== e &&
      (this.gl.depthFunc(e),
      (this._state.depthFunction = e),
      this._stateTracker.invalidateDepthTest());
  }
  setDepthWriteEnabled(e) {
    this._state.depthWrite !== e &&
      (this.gl.depthMask(e),
      (this._state.depthWrite = e),
      this._stateTracker.invalidateDepthWrite());
  }
  setDepthRange(e, t) {
    (this._state.depthRange.zNear === e && this._state.depthRange.zFar === t) ||
      (this.gl.depthRange(e, t),
      (this._state.depthRange.zNear = e),
      (this._state.depthRange.zFar = t),
      this._stateTracker.invalidateDepthWrite());
  }
  setStencilTestEnabled(e) {
    this._state.stencilTest !== e &&
      (e === !0
        ? this.gl.enable(this.gl.STENCIL_TEST)
        : this.gl.disable(this.gl.STENCIL_TEST),
      (this._state.stencilTest = e),
      this._stateTracker.invalidateStencilTest());
  }
  setClearStencil(e) {
    e !== this._state.clearStencil &&
      (this.gl.clearStencil(e), (this._state.clearStencil = e));
  }
  setStencilFunction(e, t, s) {
    (this._state.stencilFunction.func === e &&
      this._state.stencilFunction.ref === t &&
      this._state.stencilFunction.mask === s) ||
      (this.gl.stencilFunc(e, t, s),
      (this._state.stencilFunction.face = A.FRONT_AND_BACK),
      (this._state.stencilFunction.func = e),
      (this._state.stencilFunction.ref = t),
      (this._state.stencilFunction.mask = s),
      this._stateTracker.invalidateStencilTest());
  }
  setStencilFunctionSeparate(e, t, s, i) {
    (this._state.stencilFunction.face === e &&
      this._state.stencilFunction.func === t &&
      this._state.stencilFunction.ref === s &&
      this._state.stencilFunction.mask === i) ||
      (this.gl.stencilFuncSeparate(e, t, s, i),
      (this._state.stencilFunction.face = e),
      (this._state.stencilFunction.func = t),
      (this._state.stencilFunction.ref = s),
      (this._state.stencilFunction.mask = i),
      this._stateTracker.invalidateStencilTest());
  }
  setStencilWriteMask(e) {
    this._state.stencilWriteMask !== e &&
      (this.gl.stencilMask(e),
      (this._state.stencilWriteMask = e),
      this._stateTracker.invalidateStencilWrite());
  }
  setStencilOp(e, t, s) {
    (this._state.stencilOperation.face === A.FRONT_AND_BACK &&
      this._state.stencilOperation.fail === e &&
      this._state.stencilOperation.zFail === t &&
      this._state.stencilOperation.zPass === s) ||
      (this.gl.stencilOp(e, t, s),
      (this._state.stencilOperation.face = A.FRONT_AND_BACK),
      (this._state.stencilOperation.fail = e),
      (this._state.stencilOperation.zFail = t),
      (this._state.stencilOperation.zPass = s),
      this._stateTracker.invalidateStencilTest());
  }
  setStencilOpSeparate(e, t, s, i) {
    (this._state.stencilOperation.face === e &&
      this._state.stencilOperation.fail === t &&
      this._state.stencilOperation.zFail === s &&
      this._state.stencilOperation.zPass === i) ||
      (this.gl.stencilOpSeparate(e, t, s, i),
      (this._state.stencilOperation.face = e),
      (this._state.stencilOperation.fail = t),
      (this._state.stencilOperation.zFail = s),
      (this._state.stencilOperation.zPass = i),
      this._stateTracker.invalidateStencilTest());
  }
  setActiveTexture(e, t = !1) {
    const s = this._state.activeTexture;
    return (
      e >= 0 &&
        (t || e !== this._state.activeTexture) &&
        (this.gl.activeTexture(V + e), (this._state.activeTexture = e)),
      s
    );
  }
  clear(e) {
    e && this.gl.clear(e);
  }
  clearSafe(e, t = 255) {
    e &&
      (e & M.COLOR_BUFFER_BIT && this.setColorMask(!0, !0, !0, !0),
      e & M.DEPTH_BUFFER_BIT && this.setDepthWriteEnabled(!0),
      e & M.STENCIL_BUFFER_BIT && this.setStencilWriteMask(t),
      this.gl.clear(e));
  }
  drawArrays(e, t, s) {
    B() && (this._numOfDrawCalls++, (this._numOfTriangles += rt(e, s))),
      this.gl.drawArrays(e, t, s),
      B() && tt(this);
  }
  drawElements(e, t, s, i) {
    if (
      (B() && (this._numOfDrawCalls++, (this._numOfTriangles += rt(e, t))),
      this.gl.drawElements(e, t, s, i),
      B() && tt(this))
    ) {
      const r = this.getBoundVAO(),
        n = r == null ? void 0 : r.indexBuffer;
      r == null || r.vertexBuffers, _t(n, (_) => _.size);
    }
  }
  logInfo() {
    B();
  }
  resetInfo() {
    B() && ((this._numOfDrawCalls = 0), (this._numOfTriangles = 0));
  }
  get capabilities() {
    return this._capabilities;
  }
  setViewport(e, t, s, i) {
    (s = Math.max(Math.round(s), 1)), (i = Math.max(Math.round(i), 1));
    const r = this._state.viewport;
    (r.x === e && r.y === t && r.width === s && r.height === i) ||
      ((r.x = e),
      (r.y = t),
      (r.width = s),
      (r.height = i),
      this.gl.viewport(e, t, s, i));
  }
  getViewport() {
    const e = this._state.viewport;
    return { x: e.x, y: e.y, width: e.width, height: e.height };
  }
  useProgram(e) {
    var t;
    this._state.program !== e &&
      ((t = this._state.program) == null || t.stop(),
      (this._state.program = e),
      this.gl.useProgram((e == null ? void 0 : e.glName) ?? null));
  }
  bindTexture(e, t, s = !1) {
    this.parameters.maxTextureImageUnits;
    const i = this._state.textureUnitMap[t];
    return F(e) || e.glName == null
      ? (S(i) &&
          (this.setActiveTexture(t, s),
          this.gl.bindTexture(i.descriptor.target, null)),
        (this._state.textureUnitMap[t] = null),
        i)
      : s || i !== e
      ? (this.setActiveTexture(t, s),
        this.gl.bindTexture(e.descriptor.target, e.glName),
        e.applyChanges(),
        (this._state.textureUnitMap[t] = e),
        i)
      : (e.isDirty && (this.setActiveTexture(t, s), e.applyChanges()), i);
  }
  unbindTexture(e) {
    if (!F(e))
      for (let t = 0; t < this.parameters.maxTextureImageUnits; t++)
        this._state.textureUnitMap[t] === e &&
          (this.bindTexture(null, t), (this._state.textureUnitMap[t] = null));
  }
  bindFramebuffer(e, t = !1) {
    if (
      t ||
      this._state.readFramebuffer !== e ||
      this._state.drawFramebuffer !== e
    ) {
      if (F(e))
        return (
          this.gl.bindFramebuffer(d.FRAMEBUFFER, null),
          (this._state.readFramebuffer = null),
          void (this._state.drawFramebuffer = null)
        );
      e.initializeAndBind(d.FRAMEBUFFER),
        (this._state.readFramebuffer = e),
        (this._state.drawFramebuffer = e);
    }
  }
  bindFramebufferSeparate(e, t, s = !1) {
    const i = t === d.READ_FRAMEBUFFER,
      r = i ? this._state.readFramebuffer : this._state.drawFramebuffer;
    (s || r !== e) &&
      (F(e) ? this.gl.bindFramebuffer(t, null) : e.initializeAndBind(t),
      i
        ? (this._state.readFramebuffer = Q(e, null))
        : (this._state.drawFramebuffer = Q(e, null)));
  }
  blitFramebuffer(
    e,
    t,
    s = 0,
    i = 0,
    r = e.width,
    n = e.height,
    _ = 0,
    l = 0,
    o = t.width,
    h = t.height,
    c = M.COLOR_BUFFER_BIT,
    f = m.NEAREST
  ) {
    this.bindFramebufferSeparate(e, d.READ_FRAMEBUFFER),
      this.bindFramebufferSeparate(t, d.DRAW_FRAMEBUFFER),
      this.gl.blitFramebuffer(s, i, r, n, _, l, o, h, c, f);
  }
  bindBuffer(e, t) {
    if (e)
      switch ((t ?? (t = e.bufferType), t)) {
        case a.ARRAY_BUFFER:
          this._state.vertexBuffer = u(this.gl, e, t, this._state.vertexBuffer);
          break;
        case a.ELEMENT_ARRAY_BUFFER:
          this._state.indexBuffer = u(this.gl, e, t, this._state.indexBuffer);
          break;
        case a.UNIFORM_BUFFER:
          this._state.uniformBuffer = u(
            this.gl,
            e,
            t,
            this._state.uniformBuffer
          );
          break;
        case a.PIXEL_PACK_BUFFER:
          this._state.pixelPackBuffer = u(
            this.gl,
            e,
            t,
            this._state.pixelPackBuffer
          );
          break;
        case a.PIXEL_UNPACK_BUFFER:
          this._state.pixelUnpackBuffer = u(
            this.gl,
            e,
            t,
            this._state.pixelUnpackBuffer
          );
          break;
        case a.COPY_READ_BUFFER:
          this._state.copyReadBuffer = u(
            this.gl,
            e,
            t,
            this._state.copyReadBuffer
          );
          break;
        case a.COPY_WRITE_BUFFER:
          this._state.copyWriteBuffer = u(
            this.gl,
            e,
            t,
            this._state.copyWriteBuffer
          );
      }
  }
  bindRenderbuffer(e) {
    const t = this.gl;
    e ||
      (t.bindRenderbuffer(t.RENDERBUFFER, null),
      (this._state.renderbuffer = null)),
      this._state.renderbuffer !== e &&
        (t.bindRenderbuffer(t.RENDERBUFFER, e.glName),
        (this._state.renderbuffer = e));
  }
  _getBufferBinding(e, t) {
    if (t >= this.parameters.maxUniformBufferBindings || t < 0) return null;
    const s = this._state.uniformBufferBindingPoints;
    let i = s[t];
    return F(i) && ((i = { buffer: null, offset: 0, size: 0 }), (s[t] = i)), i;
  }
  bindBufferBase(e, t, s) {
    const i = this._getBufferBinding(e, t);
    F(i) ||
      (i.buffer === s && i.offset === 0 && i.size === 0) ||
      (this.gl.bindBufferBase(e, t, s ? s.glName : null),
      (i.buffer = s),
      (i.offset = 0),
      (i.size = 0));
  }
  bindBufferRange(e, t, s, i, r) {
    const n = this._getBufferBinding(e, t);
    F(n) ||
      (n.buffer === s && n.offset === i && n.size === r) ||
      (i % this._parameters.uniformBufferOffsetAlignment == 0 &&
        (this.gl.bindBufferRange(e, t, s.glName, i, r),
        (n.buffer = s),
        (n.offset = i),
        (n.size = r)));
  }
  bindUBO(e, t, s, i) {
    F(t)
      ? this.bindBufferBase(a.UNIFORM_BUFFER, e, null)
      : (B() && (i ?? t.byteLength, this._parameters.maxUniformBlockSize),
        t.initialize(),
        s !== void 0 && i !== void 0
          ? this.bindBufferRange(a.UNIFORM_BUFFER, e, t.buffer, s, i)
          : this.bindBufferBase(a.UNIFORM_BUFFER, e, t.buffer));
  }
  unbindUBO(e) {
    for (
      let t = 0, s = this._state.uniformBufferBindingPoints.length;
      t < s;
      t++
    ) {
      const i = this._state.uniformBufferBindingPoints[t];
      S(i) &&
        i.buffer === e.buffer &&
        this.bindBufferBase(a.UNIFORM_BUFFER, t, null);
    }
  }
  unbindBuffer(e) {
    switch (e) {
      case a.ARRAY_BUFFER:
        this._state.vertexBuffer = u(
          this.gl,
          null,
          e,
          this._state.vertexBuffer
        );
        break;
      case a.ELEMENT_ARRAY_BUFFER:
        this._state.indexBuffer = u(this.gl, null, e, this._state.indexBuffer);
        break;
      case a.UNIFORM_BUFFER:
        this._state.uniformBuffer = u(
          this.gl,
          null,
          e,
          this._state.uniformBuffer
        );
        break;
      case a.PIXEL_PACK_BUFFER:
        this._state.pixelPackBuffer = u(
          this.gl,
          null,
          e,
          this._state.pixelPackBuffer
        );
        break;
      case a.PIXEL_UNPACK_BUFFER:
        this._state.pixelUnpackBuffer = u(
          this.gl,
          null,
          e,
          this._state.pixelUnpackBuffer
        );
        break;
      case a.COPY_READ_BUFFER:
        this._state.copyReadBuffer = u(
          this.gl,
          null,
          e,
          this._state.copyReadBuffer
        );
        break;
      case a.COPY_WRITE_BUFFER:
        this._state.copyWriteBuffer = u(
          this.gl,
          null,
          e,
          this._state.copyWriteBuffer
        );
    }
  }
  bindVAO(e = null) {
    F(e)
      ? this._state.vertexArrayObject &&
        (this._state.vertexArrayObject.unbind(),
        (this._state.vertexArrayObject = null))
      : this._state.vertexArrayObject !== e &&
        (e.bind(), (this._state.vertexArrayObject = e));
  }
  async clientWaitAsync(e = ct(10)) {
    const t = this.gl,
      s = t.fenceSync(dt.SYNC_GPU_COMMANDS_COMPLETE, 0);
    if (!s) throw new Error("Client wait failed, could not create sync object");
    let i;
    this.instanceCounter.increment(U.Sync, s), t.flush();
    do await ut(e), (i = t.clientWaitSync(s, 0, 0));
    while (i === Z.TIMEOUT_EXPIRED);
    if (
      (this.instanceCounter.decrement(U.Sync, s),
      t.deleteSync(s),
      i === Z.WAIT_FAILED)
    )
      throw new Error("Client wait failed");
  }
  getBoundFramebufferObject(e = d.FRAMEBUFFER) {
    return e === d.READ_FRAMEBUFFER
      ? this._state.readFramebuffer
      : this._state.drawFramebuffer;
  }
  getBoundVAO() {
    return this._state.vertexArrayObject;
  }
  resetState() {
    this.useProgram(null),
      this.bindVAO(null),
      this.bindFramebuffer(null, !0),
      this.unbindBuffer(a.ARRAY_BUFFER),
      this.unbindBuffer(a.ELEMENT_ARRAY_BUFFER),
      this.type === T.WEBGL2 &&
        (this.unbindBuffer(a.UNIFORM_BUFFER),
        (this._state.uniformBufferBindingPoints.length = 0),
        this.unbindBuffer(a.PIXEL_PACK_BUFFER),
        this.unbindBuffer(a.PIXEL_UNPACK_BUFFER),
        this.unbindBuffer(a.COPY_READ_BUFFER),
        this.unbindBuffer(a.COPY_WRITE_BUFFER));
    for (let e = 0; e < this.parameters.maxTextureImageUnits; ++e)
      this.bindTexture(null, e);
    this.setBlendingEnabled(!1),
      this.setBlendFunction(O.ONE, O.ZERO),
      this.setBlendEquation(H.ADD),
      this.setBlendColor(0, 0, 0, 0),
      this.setFaceCullingEnabled(!1),
      this.setCullFace(A.BACK),
      this.setFrontFace(nt.CCW),
      this.setPolygonOffsetFillEnabled(!1),
      this.setPolygonOffset(0, 0),
      this.setScissorTestEnabled(!1),
      this.setScissorRect(0, 0, this.gl.canvas.width, this.gl.canvas.height),
      this.setDepthTestEnabled(!1),
      this.setDepthFunction(L.LESS),
      this.setDepthRange(0, 1),
      this.setStencilTestEnabled(!1),
      this.setStencilFunction(L.ALWAYS, 0, 0),
      this.setStencilOp(C.KEEP, C.KEEP, C.KEEP),
      this.setClearColor(0, 0, 0, 0),
      this.setClearDepth(1),
      this.setClearStencil(0),
      this.setColorMask(!0, !0, !0, !0),
      this.setStencilWriteMask(4294967295),
      this.setDepthWriteEnabled(!0),
      this.setViewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
  }
  enforceState() {
    var r, n, _;
    const e = this.capabilities.vao;
    e && e.bindVertexArray(null);
    const { gl: t, gl2: s } = this;
    for (let l = 0; l < this.parameters.maxVertexAttributes; l++)
      t.disableVertexAttribArray(l);
    if (
      (this._state.vertexBuffer
        ? t.bindBuffer(
            this._state.vertexBuffer.bufferType,
            this._state.vertexBuffer.glName
          )
        : t.bindBuffer(a.ARRAY_BUFFER, null),
      this._state.indexBuffer
        ? t.bindBuffer(
            this._state.indexBuffer.bufferType,
            this._state.indexBuffer.glName
          )
        : t.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null),
      S(s))
    ) {
      this._state.uniformBuffer
        ? s.bindBuffer(
            this._state.uniformBuffer.bufferType,
            this._state.uniformBuffer.glName
          )
        : s.bindBuffer(a.UNIFORM_BUFFER, null);
      for (let l = 0; l < this._parameters.maxUniformBufferBindings; l++) {
        const o = this._state.uniformBufferBindingPoints[l];
        if (S(o)) {
          const { buffer: h, offset: c, size: f } = o;
          h !== null
            ? c === 0 && f === 0
              ? s.bindBufferBase(a.UNIFORM_BUFFER, l, h.glName)
              : s.bindBufferRange(a.UNIFORM_BUFFER, l, h.glName, c, f)
            : s.bindBufferBase(a.UNIFORM_BUFFER, l, null);
        }
      }
      this._state.pixelPackBuffer
        ? s.bindBuffer(
            this._state.pixelPackBuffer.bufferType,
            this._state.pixelPackBuffer.glName
          )
        : s.bindBuffer(a.PIXEL_PACK_BUFFER, null),
        this._state.pixelUnpackBuffer
          ? s.bindBuffer(
              this._state.pixelUnpackBuffer.bufferType,
              this._state.pixelUnpackBuffer.glName
            )
          : s.bindBuffer(a.PIXEL_UNPACK_BUFFER, null),
        this._state.copyReadBuffer
          ? s.bindBuffer(
              this._state.copyReadBuffer.bufferType,
              this._state.copyReadBuffer.glName
            )
          : s.bindBuffer(a.COPY_READ_BUFFER, null),
        this._state.copyWriteBuffer
          ? s.bindBuffer(
              this._state.copyWriteBuffer.bufferType,
              this._state.copyWriteBuffer.glName
            )
          : s.bindBuffer(a.COPY_WRITE_BUFFER, null),
        s.bindFramebuffer(d.READ_FRAMEBUFFER, null),
        s.readBuffer(s.BACK),
        this._state.readFramebuffer &&
          (s.bindFramebuffer(
            d.READ_FRAMEBUFFER,
            this._state.readFramebuffer.glName
          ),
          s.readBuffer(Et.COLOR_ATTACHMENT0)),
        s.bindFramebuffer(
          d.DRAW_FRAMEBUFFER,
          ((r = this._state.drawFramebuffer) == null ? void 0 : r.glName) ??
            null
        );
    } else
      (this._state.readFramebuffer = this._state.drawFramebuffer),
        t.bindFramebuffer(
          d.FRAMEBUFFER,
          ((n = this._state.drawFramebuffer) == null ? void 0 : n.glName) ??
            null
        );
    if (e && this._state.vertexArrayObject) {
      const l = this._state.vertexArrayObject;
      this._state.vertexArrayObject &&
        (this._state.vertexArrayObject.unbind(),
        (this._state.vertexArrayObject = null)),
        this.bindVAO(l);
    }
    t.useProgram(
      ((_ = this._state.program) == null ? void 0 : _.glName) ?? null
    ),
      t.blendColor(
        this._state.blendColor.r,
        this._state.blendColor.g,
        this._state.blendColor.b,
        this._state.blendColor.a
      ),
      t.bindRenderbuffer(
        t.RENDERBUFFER,
        this._state.renderbuffer ? this._state.renderbuffer.glName : null
      ),
      this._state.blend === !0
        ? t.enable(this.gl.BLEND)
        : t.disable(this.gl.BLEND),
      t.blendEquationSeparate(
        this._state.blendEquation.mode,
        this._state.blendEquation.modeAlpha
      ),
      t.blendFuncSeparate(
        this._state.blendFunction.srcRGB,
        this._state.blendFunction.dstRGB,
        this._state.blendFunction.srcAlpha,
        this._state.blendFunction.dstAlpha
      ),
      t.clearColor(
        this._state.clearColor.r,
        this._state.clearColor.g,
        this._state.clearColor.b,
        this._state.clearColor.a
      ),
      t.clearDepth(this._state.clearDepth),
      t.clearStencil(this._state.clearStencil),
      t.colorMask(
        this._state.colorMask.r,
        this._state.colorMask.g,
        this._state.colorMask.b,
        this._state.colorMask.a
      ),
      t.cullFace(this._state.cullFace),
      t.depthFunc(this._state.depthFunction),
      t.depthRange(this._state.depthRange.zNear, this._state.depthRange.zFar),
      this._state.depthTest === !0
        ? t.enable(t.DEPTH_TEST)
        : t.disable(t.DEPTH_TEST),
      t.depthMask(this._state.depthWrite),
      t.frontFace(this._state.frontFace),
      t.lineWidth(1),
      this._state.faceCulling === !0
        ? t.enable(t.CULL_FACE)
        : t.disable(t.CULL_FACE),
      t.polygonOffset(
        this._state.polygonOffset[0],
        this._state.polygonOffset[1]
      ),
      this._state.polygonOffsetFill === !0
        ? t.enable(t.POLYGON_OFFSET_FILL)
        : t.disable(t.POLYGON_OFFSET_FILL),
      t.scissor(
        this._state.scissorRect.x,
        this._state.scissorRect.y,
        this._state.scissorRect.width,
        this._state.scissorRect.height
      ),
      this._state.scissorTest === !0
        ? t.enable(t.SCISSOR_TEST)
        : t.disable(t.SCISSOR_TEST),
      t.stencilFunc(
        this._state.stencilFunction.func,
        this._state.stencilFunction.ref,
        this._state.stencilFunction.mask
      ),
      t.stencilOpSeparate(
        this._state.stencilOperation.face,
        this._state.stencilOperation.fail,
        this._state.stencilOperation.zFail,
        this._state.stencilOperation.zPass
      ),
      this._state.stencilTest === !0
        ? t.enable(t.STENCIL_TEST)
        : t.disable(t.STENCIL_TEST),
      t.stencilMask(this._state.stencilWriteMask);
    for (let l = 0; l < this.parameters.maxTextureImageUnits; l++) {
      t.activeTexture(V + l),
        t.bindTexture(R.TEXTURE_2D, null),
        t.bindTexture(R.TEXTURE_CUBE_MAP, null),
        this.type === T.WEBGL2 &&
          (t.bindTexture(R.TEXTURE_3D, null),
          t.bindTexture(R.TEXTURE_2D_ARRAY, null));
      const o = this._state.textureUnitMap[l];
      S(o) && t.bindTexture(o.descriptor.target, o.glName);
    }
    t.activeTexture(V + this._state.activeTexture);
    const i = this._state.viewport;
    t.viewport(i.x, i.y, i.width, i.height), this.resetInfo();
  }
  _loadExtensions() {
    this.type === T.WEBGL1 && this.gl.getExtension("OES_element_index_uint"),
      this.gl.getExtension("KHR_parallel_shader_compile");
  }
  _loadParameters(e) {
    const t = this.capabilities.textureFilterAnisotropic,
      s = e.maxAnisotropy ?? 1 / 0,
      i = this.type === T.WEBGL2,
      r = this.gl,
      n = {
        versionString: this.gl.getParameter(this.gl.VERSION),
        maxVertexTextureImageUnits: this.gl.getParameter(
          this.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS
        ),
        maxVertexAttributes: this.gl.getParameter(this.gl.MAX_VERTEX_ATTRIBS),
        maxMaxAnisotropy: t
          ? Math.min(this.gl.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY), s)
          : 1,
        maxTextureImageUnits: this.gl.getParameter(
          this.gl.MAX_TEXTURE_IMAGE_UNITS
        ),
        maxTextureSize: this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE),
        maxUniformBufferBindings: i
          ? r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS)
          : 0,
        maxVertexUniformBlocks: i
          ? r.getParameter(r.MAX_VERTEX_UNIFORM_BLOCKS)
          : 0,
        maxFragmentUniformBlocks: i
          ? r.getParameter(r.MAX_FRAGMENT_UNIFORM_BLOCKS)
          : 0,
        maxUniformBlockSize: i ? r.getParameter(r.MAX_UNIFORM_BLOCK_SIZE) : 0,
        uniformBufferOffsetAlignment: i
          ? r.getParameter(r.UNIFORM_BUFFER_OFFSET_ALIGNMENT)
          : 1,
        maxArrayTextureLayers: i
          ? r.getParameter(r.MAX_ARRAY_TEXTURE_LAYERS)
          : 1,
        maxSamples: i ? r.getParameter(r.MAX_SAMPLES) : 1,
      };
    return (z.TEXTURE_UNIT_FOR_UPDATES = n.maxTextureImageUnits - 1), n;
  }
};
function u(e, t, s, i) {
  return t ? i !== t && e.bindBuffer(s, t.glName) : e.bindBuffer(s, null), t;
}
function rt(e, t) {
  switch (e) {
    case E.POINTS:
      return 2 * t;
    case E.TRIANGLES:
      return t / 3;
    case E.TRIANGLE_STRIP:
    case E.TRIANGLE_FAN:
      return t - 2;
    default:
      return 0;
  }
}
export { Yt as I, Vt as o };
