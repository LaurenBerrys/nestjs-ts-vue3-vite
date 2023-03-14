import {
  u as T,
  r as g,
  f as j,
  e as L,
  t as O,
  Q as st,
  aF as H,
  l as _t,
  g as $,
  M as k,
  i as it,
  ae as y,
  af as x,
  ag as rt,
  ap as ot,
  j as yt,
  R as gt,
  ar as vt,
  G as I,
  al as wt,
  aw as xt,
  ax as V,
  ay as St,
  az as At,
} from "./index.8fd7165c.js";
import { E as b, f as G } from "./VertexArrayObject.1b8f3583.js";
import {
  C as f,
  R as S,
  E as U,
  F as R,
  P as Q,
  L as Dt,
  G as bt,
  D as Rt,
  I as nt,
  O as q,
} from "./enums.64ab819c.js";
import { E as Mt } from "./Texture.fb0c670a.js";
import { t as A } from "./VertexElementDescriptor.2925c6af.js";
import { a as J, F as K, D as Y } from "./dataUtils.e77088c3.js";
import { c as lt, b as zt } from "./WGLContainer.e7ddd41d.js";
import { T as Tt, e as Et } from "./color.4c5303e9.js";
import { r as ct } from "./Container.a5892366.js";
function X(i) {
  return i.kind === "constant" ? i.value[0] : i.values[i.values.length - 1];
}
function tt(i) {
  const t = i.toRgba();
  return [t[0] / 255, t[1] / 255, t[2] / 255, t[3]];
}
function B(i) {
  if (!i.hasVisualVariables("size"))
    return { kind: "constant", value: [T(i.trailWidth)] };
  const t = i.getVisualVariablesForType("size")[0],
    e = [],
    s = [];
  let r;
  if (t.stops) {
    for (const a of t.stops) e.push(a.value), s.push(T(a.size));
    r = t.stops.length;
  } else
    e.push(t.minDataValue, t.maxDataValue),
      s.push(T(t.minSize), T(t.maxSize)),
      (r = 2);
  return { kind: "ramp", stops: e, values: s, count: r };
}
function Pt(i) {
  if (!i.hasVisualVariables("opacity")) return { kind: "constant", value: [1] };
  const t = i.getVisualVariablesForType("opacity")[0],
    e = [],
    s = [];
  for (const r of t.stops) e.push(r.value), s.push(r.opacity);
  return { kind: "ramp", stops: e, values: s, count: t.stops.length };
}
function W(i, t, e, s) {
  switch (t) {
    case "int":
      i.setUniform1iv(e, s);
      break;
    case "float":
      i.setUniform1fv(e, s);
      break;
    case "vec2":
      i.setUniform2fv(e, s);
      break;
    case "vec3":
      i.setUniform3fv(e, s);
      break;
    case "vec4":
      i.setUniform4fv(e, s);
  }
}
function D(i, t, e, s) {
  s.kind === "constant"
    ? W(i, e, `u_${t}`, s.value)
    : (W(i, "float", `u_${t}_stops`, s.stops),
      W(i, e, `u_${t}_values`, s.values),
      i.setUniform1i(`u_${t}_count`, s.count));
}
function ht(i, t) {
  return i === t || (!(!g(i) || !g(t)) && i.equals(t));
}
function dt(i, t) {
  if (
    !(function (s, r) {
      let a = !0;
      return (
        (a = a && s.collisions === r.collisions),
        (a = a && s.density === r.density),
        (a = a && s.interpolate === r.interpolate),
        (a = a && s.lineCollisionWidth === r.lineCollisionWidth),
        (a = a && s.lineSpacing === r.lineSpacing),
        (a = a && s.maxTurnAngle === r.maxTurnAngle),
        (a = a && s.minSpeedThreshold === r.minSpeedThreshold),
        (a = a && s.segmentLength === r.segmentLength),
        (a = a && s.smoothing === r.smoothing),
        (a = a && s.velocityScale === r.velocityScale),
        (a = a && s.verticesPerLine === r.verticesPerLine),
        a
      );
    })(i.simulationSettings, t.simulationSettings) ||
    !ht(i.timeExtent, t.timeExtent)
  )
    return !1;
  let e = !0;
  return (
    (e = e && i.loadImagery === t.loadImagery),
    (e = e && i.createFlowMesh === t.createFlowMesh),
    (e = e && i.color.kind === t.color.kind),
    (e = e && i.opacity.kind === t.opacity.kind),
    (e = e && i.size.kind === t.size.kind),
    e
  );
}
let Ot = class ut {
  constructor(t) {
    (this._params = t), (this.animated = !1);
  }
  isCompatible(t) {
    if (
      !(t instanceof ut) ||
      !ht(this._params.timeExtent, t._params.timeExtent)
    )
      return !1;
    let e = !0;
    return (
      (e = e && this._params.loadImagery === t._params.loadImagery),
      (e = e && this._params.color.kind === t._params.color.kind),
      (e = e && this._params.opacity.kind === t._params.opacity.kind),
      e
    );
  }
  async load(t, e) {
    const { extent: s, size: r } = t;
    j(e);
    const a = await this._params.loadImagery(
      s,
      r[0],
      r[1],
      this._params.timeExtent,
      e
    );
    return new It(a, {
      color: this._params.color,
      opacity: this._params.opacity,
    });
  }
  render(t, e, s) {
    const { context: r } = t,
      { program: a } = s;
    r.setFaceCullingEnabled(!1),
      r.setBlendingEnabled(!0),
      r.setBlendFunction(S.ONE, S.ONE_MINUS_SRC_ALPHA),
      r.useProgram(a),
      a.setUniformMatrix3fv("u_dvsMat3", e.dvsMat3),
      r.bindTexture(s.texture, 0),
      a.setUniform1i("u_texture", 0),
      a.setUniform1f("u_Min", s.min),
      a.setUniform1f("u_Max", s.max),
      D(a, "color", "vec4", this._params.color),
      D(a, "opacity", "float", this._params.opacity),
      r.bindVAO(s.vertexArray),
      r.drawArrays(U.TRIANGLE_STRIP, 0, 4);
  }
};
const N = new Map();
N.set("a_position", 0), N.set("a_texcoord", 1);
const Ut = {
    geometry: [
      new A("a_position", 2, f.UNSIGNED_SHORT, 0, 8),
      new A("a_texcoord", 2, f.UNSIGNED_SHORT, 4, 8),
    ],
  },
  Ft = {
    vsPath: "raster/flow/imagery",
    fsPath: "raster/flow/imagery",
    attributes: N,
  };
let It = class {
    constructor(i, t) {
      (this._flowData = i), (this._values = t);
    }
    attach(i) {
      const { context: t } = i,
        { width: e, height: s } = this._flowData,
        r = b.createVertex(
          t,
          R.STATIC_DRAW,
          new Uint16Array([0, 0, 0, 1, e, 0, 1, 1, 0, s, 0, 0, e, s, 1, 0])
        ),
        a = new G(t, N, Ut, { geometry: r }),
        o = [];
      this._values.color.kind === "ramp" && o.push("vvColor"),
        this._values.opacity.kind === "ramp" && o.push("vvOpacity");
      const n = i.painter.materialManager.getProgram(Ft, o);
      let m = 1e6,
        u = -1e6;
      for (let d = 0; d < s; d++)
        for (let h = 0; h < e; h++)
          if (this._flowData.mask[d * e + h] !== 0) {
            const p = this._flowData.data[2 * (d * e + h) + 0],
              _ = this._flowData.data[2 * (d * e + h) + 1],
              v = Math.sqrt(p * p + _ * _);
            (m = Math.min(m, v)), (u = Math.max(u, v));
          }
      const c = new Uint8Array(4 * e * s);
      for (let d = 0; d < s; d++)
        for (let h = 0; h < e; h++)
          if (this._flowData.mask[d * e + h] !== 0) {
            const p = this._flowData.data[2 * (d * e + h) + 0],
              _ = this._flowData.data[2 * (d * e + h) + 1],
              v = (Math.sqrt(p * p + _ * _) - m) / (u - m);
            (c[4 * (d * e + h) + 0] = 255 * v),
              (c[4 * (d * e + h) + 1] = 0),
              (c[4 * (d * e + h) + 2] = 0),
              (c[4 * (d * e + h) + 3] = 255);
          } else
            (c[4 * (d * e + h) + 0] = 0),
              (c[4 * (d * e + h) + 1] = 0),
              (c[4 * (d * e + h) + 2] = 0),
              (c[4 * (d * e + h) + 3] = 0);
      const l = new Mt(
        t,
        {
          pixelFormat: Q.RGBA,
          internalFormat: Q.RGBA,
          samplingMode: Dt.LINEAR,
          dataType: bt.UNSIGNED_BYTE,
          wrapMode: Rt.CLAMP_TO_EDGE,
          flipped: !0,
          width: e,
          height: s,
        },
        c
      );
      (this.vertexArray = a),
        (this.program = n),
        (this.texture = l),
        (this.min = m),
        (this.max = u),
        (this._flowData = null);
    }
    detach() {
      this.vertexArray.dispose(), this.texture.dispose();
    }
    get ready() {
      return this.program.compiled;
    }
  },
  Vt = class mt {
    constructor(t) {
      this._params = t;
    }
    get animated() {
      return this._params.flowSpeed > 0;
    }
    isCompatible(t) {
      return t instanceof mt && dt(this._params, t._params);
    }
    async load(t, e) {
      const { extent: s, size: r } = t;
      j(e);
      const a = await this._params.loadImagery(
          s,
          r[0],
          r[1],
          this._params.timeExtent,
          e
        ),
        { vertexData: o, indexData: n } = await this._params.createFlowMesh(
          "Particles",
          this._params.simulationSettings,
          a,
          e
        );
      return new Lt(o, n, {
        color: this._params.color,
        opacity: this._params.opacity,
        size: this._params.size,
      });
    }
    render(t, e, s) {
      const { context: r } = t,
        { program: a } = s;
      r.setFaceCullingEnabled(!1),
        r.setBlendingEnabled(!0),
        r.setBlendFunction(S.ONE, S.ONE_MINUS_SRC_ALPHA),
        r.useProgram(a),
        a.setUniform1f("u_time", e.time),
        a.setUniform1f("u_trailLength", this._params.trailLength),
        a.setUniform1f("u_flowSpeed", this._params.flowSpeed),
        a.setUniform1f("u_featheringSize", this._params.featheringSize),
        a.setUniform1f("u_featheringOffset", this._params.featheringOffset),
        a.setUniform1f("u_introFade", this._params.introFade ? 1 : 0),
        a.setUniform1f("u_fadeToZero", this._params.fadeToZero ? 1 : 0),
        a.setUniform1f("u_decayRate", this._params.decayRate),
        a.setUniformMatrix3fv("u_dvsMat3", e.dvsMat3),
        a.setUniformMatrix3fv("u_displayViewMat3", e.displayViewMat3),
        D(a, "color", "vec4", this._params.color),
        D(a, "opacity", "float", this._params.opacity),
        D(a, "size", "float", this._params.size),
        r.bindVAO(s.vertexArray),
        r.drawElements(U.TRIANGLES, s.indexCount, f.UNSIGNED_INT, 0);
    }
  };
const E = new Map();
E.set("a_xyts0", 0),
  E.set("a_xyts1", 1),
  E.set("a_typeIdDurationSeed", 2),
  E.set("a_extrudeInfo", 3);
const Ct = {
    geometry: [
      new A("a_xyts0", 4, f.FLOAT, 0, 64),
      new A("a_xyts1", 4, f.FLOAT, 16, 64),
      new A("a_typeIdDurationSeed", 4, f.FLOAT, 32, 64),
      new A("a_extrudeInfo", 4, f.FLOAT, 48, 64),
    ],
  },
  kt = {
    vsPath: "raster/flow/particles",
    fsPath: "raster/flow/particles",
    attributes: E,
  };
let Lt = class {
    constructor(i, t, e) {
      (this._vertexData = i), (this._indexData = t), (this._values = e);
    }
    attach(i) {
      const { context: t } = i,
        e = b.createVertex(t, R.STATIC_DRAW, this._vertexData),
        s = b.createIndex(t, R.STATIC_DRAW, this._indexData),
        r = new G(t, E, Ct, { geometry: e }, s),
        a = [];
      this._values.color.kind === "ramp" && a.push("vvColor"),
        this._values.opacity.kind === "ramp" && a.push("vvOpacity"),
        this._values.size.kind === "ramp" && a.push("vvSize");
      const o = i.painter.materialManager.getProgram(kt, a);
      (this.vertexArray = r),
        (this.program = o),
        (this.indexCount = this._indexData.length),
        (this._vertexData = null),
        (this._indexData = null);
    }
    detach() {
      this.vertexArray.dispose();
    }
    get ready() {
      return this.program.compiled;
    }
  },
  Nt = class pt {
    constructor(t) {
      this._styles = t;
    }
    get animated() {
      return this._styles.reduce((t, e) => t || e.animated, !1);
    }
    isCompatible(t) {
      if (!(t instanceof pt) || this._styles.length !== t._styles.length)
        return !1;
      const e = this._styles.length;
      for (let s = 0; s < e; s++)
        if (!this._styles[s].isCompatible(t._styles[s])) return !1;
      return !0;
    }
    async load(t, e) {
      const s = await Promise.all(this._styles.map((r) => r.load(t, e)));
      return new Gt(s);
    }
    render(t, e, s) {
      for (let r = 0; r < this._styles.length; r++)
        this._styles[r].render(t, e, s.resources[r]);
    }
  };
class Gt {
  constructor(t) {
    this.resources = t;
  }
  attach(t) {
    for (const e of this.resources) e.attach(t);
  }
  detach() {
    for (const t of this.resources) t.detach();
  }
  get ready() {
    return this.resources.reduce((t, e) => t && e.ready, !0);
  }
}
class Z {
  constructor(t) {
    this._params = t;
  }
  get animated() {
    return this._params.flowSpeed > 0;
  }
  isCompatible(t) {
    return t instanceof Z && dt(this._params, t._params);
  }
  async load(t, e) {
    const { extent: s, size: r } = t;
    j(e);
    const a = await this._params.loadImagery(
        s,
        r[0],
        r[1],
        this._params.timeExtent,
        e
      ),
      { vertexData: o, indexData: n } = await this._params.createFlowMesh(
        "Streamlines",
        this._params.simulationSettings,
        a,
        e
      );
    return new Wt(o, n, {
      color: this._params.color,
      opacity: this._params.opacity,
      size: this._params.size,
    });
  }
  render(t, e, s) {
    const { context: r } = t,
      { program: a } = s;
    r.setFaceCullingEnabled(!1),
      r.setBlendingEnabled(!0),
      r.setBlendFunction(S.ONE, S.ONE_MINUS_SRC_ALPHA),
      r.useProgram(a),
      a.setUniform1f("u_time", e.time),
      a.setUniform1f("u_trailLength", this._params.trailLength),
      a.setUniform1f("u_flowSpeed", this._params.flowSpeed),
      a.setUniform1f("u_featheringSize", this._params.featheringSize),
      a.setUniform1f("u_featheringOffset", this._params.featheringOffset),
      a.setUniform1f("u_introFade", this._params.introFade ? 1 : 0),
      a.setUniform1f("u_fadeToZero", this._params.fadeToZero ? 1 : 0),
      a.setUniform1f("u_decayRate", this._params.decayRate),
      a.setUniformMatrix3fv("u_dvsMat3", e.dvsMat3),
      a.setUniformMatrix3fv("u_displayViewMat3", e.displayViewMat3),
      D(a, "color", "vec4", this._params.color),
      D(a, "opacity", "float", this._params.opacity),
      D(a, "size", "float", this._params.size),
      r.bindVAO(s.vertexArray),
      r.drawElements(U.TRIANGLES, s.indexCount, f.UNSIGNED_INT, 0);
  }
}
const P = new Map();
P.set("a_positionAndSide", 0),
  P.set("a_timeInfo", 1),
  P.set("a_extrude", 2),
  P.set("a_speed", 3);
const qt = {
    geometry: [
      new A("a_positionAndSide", 3, f.FLOAT, 0, 36),
      new A("a_timeInfo", 3, f.FLOAT, 12, 36),
      new A("a_extrude", 2, f.FLOAT, 24, 36),
      new A("a_speed", 1, f.FLOAT, 32, 36),
    ],
  },
  Bt = {
    vsPath: "raster/flow/streamlines",
    fsPath: "raster/flow/streamlines",
    attributes: P,
  };
let Wt = class {
  constructor(i, t, e) {
    (this._vertexData = i), (this._indexData = t), (this._values = e);
  }
  attach(i) {
    const { context: t } = i,
      e = b.createVertex(t, R.STATIC_DRAW, this._vertexData),
      s = b.createIndex(t, R.STATIC_DRAW, this._indexData),
      r = new G(t, P, qt, { geometry: e }, s),
      a = [];
    this._values.color.kind === "ramp" && a.push("vvColor"),
      this._values.opacity.kind === "ramp" && a.push("vvOpacity"),
      this._values.size.kind === "ramp" && a.push("vvSize");
    const o = i.painter.materialManager.getProgram(Bt, a);
    (this.vertexArray = r),
      (this.program = o),
      (this.indexCount = this._indexData.length),
      (this._vertexData = null),
      (this._indexData = null);
  }
  detach() {
    this.vertexArray.dispose();
  }
  get ready() {
    return this.program.compiled;
  }
};
const Ht = 4,
  jt = 1,
  Zt = 0.5,
  $t = !0,
  Qt = !0,
  Jt = 2.3;
function Kt(i, t) {
  const { flowSpeed: e, trailLength: s } = i,
    r = (function (c) {
      const l = X(B(c)),
        d = l,
        h = Math.max(l / 2, 5),
        p = Math.round(T(c.maxPathLength) / h) + 1,
        { density: _ } = c;
      return {
        smoothing: T(c.smoothing),
        interpolate: !0,
        velocityScale: c.flowRepresentation === "flow-from" ? 1 : -1,
        verticesPerLine: p,
        minSpeedThreshold: 0.001,
        segmentLength: h,
        maxTurnAngle: 1,
        collisions: !0,
        lineCollisionWidth: d,
        lineSpacing: 10,
        density: _,
      };
    })(i);
  let a = null;
  const o = { opacity: Pt(i), size: B(i) };
  let n = (function (c) {
    if (!c.hasVisualVariables("color"))
      return { kind: "constant", value: tt(c.color) };
    const l = c.getVisualVariablesForType("color")[0],
      d = [],
      h = [];
    for (const p of l.stops)
      d.push(p.value), Array.prototype.push.apply(h, tt(p.color));
    return { kind: "ramp", stops: d, values: h, count: l.stops.length };
  })(i);
  if (i.background === "none") o.color = n;
  else {
    n.kind === "constant" &&
      (n = {
        kind: "ramp",
        stops: [0, 1],
        values: [0, 0, 0, 1, n.value[0], n.value[1], n.value[2], n.value[3]],
        count: 2,
      });
    const c = {
      loadImagery: t.loadImagery,
      timeExtent: t.timeExtent,
      color: n,
      opacity: { kind: "constant", value: [1] },
    };
    (a = new Ot(c)),
      (o.color = { kind: "constant", value: [0.1, 0.1, 0.1, 1] });
  }
  const m = {
      loadImagery: t.loadImagery,
      createFlowMesh: t.createFlowMesh,
      simulationSettings: r,
      timeExtent: t.timeExtent,
      trailLength: s,
      flowSpeed: e,
      featheringSize: jt,
      featheringOffset: Zt,
      introFade: $t,
      fadeToZero: Qt,
      decayRate: Jt,
      color: o.color,
      opacity: o.opacity,
      size: o.size,
    },
    u = i.trailCap === "butt" || X(B(i)) <= Ht ? new Z(m) : new Vt(m);
  return g(a) ? new Nt([a, u]) : u;
}
class Yt extends lt {
  constructor() {
    super(...arguments),
      (this._visualState = { time: 0, dvsMat3: L(), displayViewMat3: L() });
  }
  dispose() {}
  prepareState(t) {
    const { context: e } = t;
    e.setColorMask(!0, !0, !0, !0), e.setStencilFunction(nt.EQUAL, 0, 255);
  }
  draw(t, e) {
    const { requestRender: s, allowDelayedRender: r } = t,
      { displayData: a } = e;
    if (
      O(a) ||
      (a.state.name === "loaded" && a.attach(t), a.state.name !== "attached")
    )
      return;
    const o = a.state.resources;
    r && !o.ready && g(s)
      ? s()
      : ((this._visualState.time = t.time / 1e3),
        (this._visualState.dvsMat3 = e.transforms.dvs),
        (this._visualState.displayViewMat3 = t.state.displayViewMat3),
        a.flowStyle.render(t, this._visualState, o),
        a.flowStyle.animated && g(s) && s());
  }
}
class Xt extends zt {
  constructor() {
    super(...arguments), (this.flowStyle = null);
  }
  get requiresDedicatedFBO() {
    return !1;
  }
  doRender(t) {
    super.doRender(t);
  }
  prepareRenderPasses(t) {
    const e = t.registerRenderPass({
      name: "flow",
      brushes: [Yt],
      target: () => this.children,
      drawPhase: Tt.MAP,
    });
    return [...super.prepareRenderPasses(t), e];
  }
}
class te {
  constructor(t, e, s, r) {
    (this.state = { name: "created" }),
      (this.flowStyle = t),
      (this.extent = e),
      (this.size = s),
      (this.pixelRatio = r);
  }
  async load() {
    const t = new AbortController();
    this.state = { name: "loading", abortController: t };
    const e = {
        extent: this.extent,
        size: this.size,
        pixelRatio: this.pixelRatio,
      },
      s = await this.flowStyle.load(e, t.signal);
    this.state = { name: "loaded", resources: s };
  }
  attach(t) {
    if (this.state.name !== "loaded")
      return void st
        .getLogger("esri.views.2d.engine.flow.FlowDisplayData")
        .error("Only loaded resources can be attached.");
    const e = this.state.resources;
    e.attach(t), (this.state = { name: "attached", resources: e });
  }
  detach() {
    if (this.state.name === "loading")
      return (
        this.state.abortController.abort(),
        void (this.state = { name: "detached" })
      );
    this.state.name === "attached" &&
      (this.state.resources.detach(), (this.state = { name: "detached" }));
  }
  update(t) {
    return (
      !!this.flowStyle.isCompatible(t.flowStyle) &&
      !(
        !this.extent.equals(t.extent) ||
        this.size[0] !== t.size[0] ||
        this.size[1] !== t.size[1] ||
        this.pixelRatio !== t.pixelRatio
      ) &&
      ((this.flowStyle = t.flowStyle), !0)
    );
  }
}
let ee = class extends ct {
    constructor() {
      super(...arguments), (this._displayData = null);
    }
    get displayData() {
      return this._displayData;
    }
    set displayData(i) {
      (this._displayData = i), this.requestRender();
    }
    clear() {
      g(this._displayData) &&
        (this._displayData.detach(),
        (this._displayData = null),
        this.requestRender());
    }
    setTransform(i) {
      const { displayData: t } = this;
      if (O(t)) return;
      const e = t.extent.xmin,
        s = t.extent.ymax,
        r = [0, 0];
      i.toScreen(r, [e, s]);
      const a = (t.extent.xmax - t.extent.xmin) / t.size[0] / i.resolution,
        o = H(i.rotation),
        { dvs: n } = this.transforms;
      _t(n, [-1, 1, 0]),
        $(n, n, [
          2 / (i.size[0] * i.pixelRatio),
          -2 / (i.size[1] * i.pixelRatio),
          1,
        ]),
        k(n, n, [r[0], r[1], 0]),
        it(n, n, o),
        $(n, n, [a * i.pixelRatio, a * i.pixelRatio, 1]);
    }
    _createTransforms() {
      return { dvs: L() };
    }
  },
  z = class extends ot {
    constructor(i) {
      super(i), (this._flowDisplayObject = new ee()), (this._loading = null);
    }
    initialize() {
      this.flowContainer.addChild(this._flowDisplayObject);
    }
    destroy() {
      this._clear(), this.flowContainer.removeAllChildren();
    }
    get updating() {
      return this._loading != null;
    }
    update(i) {
      const { flowStyle: t } = this.flowContainer;
      if (O(t)) return void this._clear();
      const { extent: e, rotation: s, resolution: r, pixelRatio: a } = i.state,
        o = (function (u, c) {
          const l = new gt({
              x: (u.xmax + u.xmin) / 2,
              y: (u.ymax + u.ymin) / 2,
              spatialReference: u.spatialReference,
            }),
            d = u.xmax - u.xmin,
            h = u.ymax - u.ymin,
            p = Math.abs(Math.cos(H(c))),
            _ = Math.abs(Math.sin(H(c))),
            v = p * d + _ * h,
            M = _ * d + p * h,
            F = new vt({
              xmin: l.x - v / 2,
              ymin: l.y - M / 2,
              xmax: l.x + v / 2,
              ymax: l.y + M / 2,
              spatialReference: u.spatialReference,
            });
          return F.centerAt(l), F;
        })(e, s);
      o.expand(1.15);
      const n = [
          Math.round((o.xmax - o.xmin) / r),
          Math.round((o.ymax - o.ymin) / r),
        ],
        m = new te(t, o, n, a);
      if (g(this._loading)) {
        if (this._loading.update(m)) return;
        this._loading.detach(), (this._loading = null);
      }
      (!O(this._flowDisplayObject.displayData) &&
        this._flowDisplayObject.displayData.update(m)) ||
        (m.load().then(
          () => {
            this._flowDisplayObject.clear(),
              (this._flowDisplayObject.displayData = this._loading),
              (this._loading = null);
          },
          (u) => {
            yt(u) ||
              (st
                .getLogger(this.declaredClass)
                .error("A resource failed to load.", u),
              (this._loading = null));
          }
        ),
        (this._loading = m));
    }
    _clear() {
      this._flowDisplayObject.clear(),
        g(this._loading) && (this._loading.detach(), (this._loading = null));
    }
  };
y([x()], z.prototype, "_loading", void 0),
  y([x()], z.prototype, "flowContainer", void 0),
  y([x()], z.prototype, "updating", null),
  (z = y([rt("esri.views.2d.engine.flow.FlowStrategy")], z));
const ae = z;
let w = class extends ot {
  constructor() {
    super(...arguments),
      (this._loadImagery = (i, t, e, s, r) => J(this.layer, i, t, e, s, r)),
      (this._createFlowMesh = (i, t, e, s) =>
        this.layer.createFlowMesh(
          { meshType: i, flowData: e, simulationSettings: t },
          { signal: s }
        )),
      (this.attached = !1),
      (this.type = "flow"),
      (this.timeExtent = null),
      (this.redrawOrRefetch = async () => {
        this._updateVisualization();
      });
  }
  get updating() {
    return !this.attached || this._strategy.updating;
  }
  attach() {
    const { layer: i } = this,
      t = () => {
        (this._loadImagery = (e, s, r, a, o) => J(i, e, s, r, a, o)),
          this._updateVisualization();
      };
    "multidimensionalDefinition" in i
      ? this.addHandles(I(() => i.multidimensionalDefinition, t))
      : this.addHandles([
          I(() => i.mosaicRule, t),
          I(() => i.renderingRule, t),
          I(() => i.definitionExpression, t),
        ]),
      (this.container = new Xt()),
      (this._strategy = new ae({ flowContainer: this.container })),
      this._updateVisualization();
  }
  detach() {
    var i;
    this._strategy.destroy(),
      (i = this.container) == null || i.removeAllChildren(),
      (this.container = null),
      this.removeHandles();
  }
  update(i) {
    i.stationary ? this._strategy.update(i) : this.layerView.requestUpdate();
  }
  hitTest(i) {
    return new wt({ attributes: {}, geometry: i.clone(), layer: this.layer });
  }
  moveEnd() {}
  async doRefresh() {}
  _updateVisualization() {
    const i = this.layer.renderer;
    if (i == null || i.type !== "flow") return;
    const t = Kt(i, {
      loadImagery: this._loadImagery,
      createFlowMesh: this._createFlowMesh,
      timeExtent: this.timeExtent,
    });
    (this.container.flowStyle = t), this.layerView.requestUpdate();
  }
};
y([x()], w.prototype, "_strategy", void 0),
  y([x()], w.prototype, "attached", void 0),
  y([x()], w.prototype, "container", void 0),
  y([x()], w.prototype, "layer", void 0),
  y([x()], w.prototype, "layerView", void 0),
  y([x()], w.prototype, "type", void 0),
  y([x()], w.prototype, "updating", null),
  y([x()], w.prototype, "timeExtent", void 0),
  (w = y([rt("esri.views.2d.engine.flow.FlowView2D")], w));
const ue = w,
  C = new Float32Array([
    0.27058823529411763, 0.4588235294117647, 0.7098039215686275, 1,
    0.396078431372549, 0.5372549019607843, 0.7215686274509804, 1,
    0.5176470588235295, 0.6196078431372549, 0.7294117647058823, 1,
    0.6352941176470588, 0.7058823529411765, 0.7411764705882353, 1,
    0.7529411764705882, 0.8, 0.7450980392156863, 1, 0.8705882352941177,
    0.8901960784313725, 0.7490196078431373, 1, 1, 1, 0.7490196078431373, 1, 1,
    0.8627450980392157, 0.6313725490196078, 1, 0.9803921568627451,
    0.7254901960784313, 0.5176470588235295, 1, 0.9607843137254902,
    0.596078431372549, 0.4117647058823529, 1, 0.9294117647058824,
    0.4588235294117647, 0.3176470588235294, 1, 0.9098039215686274,
    0.08235294117647059, 0.08235294117647059, 1,
  ]),
  et = {
    beaufort_ft: C,
    beaufort_m: C,
    beaufort_km: C,
    beaufort_mi: C,
    beaufort_kn: new Float32Array([
      0.1568627450980392, 0.5725490196078431, 0.7803921568627451, 1,
      0.34901960784313724, 0.6352941176470588, 0.7294117647058823, 1,
      0.5058823529411764, 0.7019607843137254, 0.6705882352941176, 1,
      0.6274509803921569, 0.7607843137254902, 0.6078431372549019, 1,
      0.7490196078431373, 0.8313725490196079, 0.5411764705882353, 1,
      0.8549019607843137, 0.9019607843137255, 0.4666666666666667, 1,
      0.9803921568627451, 0.9803921568627451, 0.39215686274509803, 1,
      0.9882352941176471, 0.8352941176470589, 0.3254901960784314, 1,
      0.9882352941176471, 0.7019607843137254, 0.4, 1, 0.9803921568627451,
      0.5529411764705883, 0.20392156862745098, 1, 0.9686274509803922,
      0.43137254901960786, 0.16470588235294117, 1, 0.9411764705882353,
      0.2784313725490196, 0.11372549019607843, 1,
    ]),
    classified_arrow: new Float32Array([
      0.2196078431372549, 0.6588235294117647, 0, 1, 0.5450980392156862,
      1.2117647058823529, 0, 1, 1, 1, 0, 1, 1, 0.5019607843137255, 0, 1, 1, 0,
      0, 1,
    ]),
    ocean_current_m: new Float32Array([
      0.3058823529411765, 0.10196078431372549, 0.6, 1, 0.7019607843137254,
      0.10588235294117647, 0.10196078431372549, 1, 0.792156862745098,
      0.5019607843137255, 0.10196078431372549, 1, 0.6941176470588235,
      0.6941176470588235, 0.6941176470588235, 1,
    ]),
    ocean_current_kn: new Float32Array([
      0, 0, 0, 1, 0, 0.1450980392156863, 0.39215686274509803, 1,
      0.3058823529411765, 0.10196078431372549, 0.6, 1, 0.592156862745098, 0,
      0.39215686274509803, 1, 0.7019607843137254, 0.10588235294117647,
      0.10196078431372549, 1, 0.6941176470588235, 0.3058823529411765,
      0.10196078431372549, 1, 0.792156862745098, 0.5019607843137255,
      0.10196078431372549, 1, 0.6941176470588235, 0.7019607843137254,
      0.20392156862745098, 1, 0.6941176470588235, 0.6941176470588235,
      0.6941176470588235, 1,
    ]),
    single_arrow: new Float32Array([0, 92 / 255, 230 / 255, 1]),
    wind_speed: new Float32Array([0, 0, 0, 1]),
  },
  at = [0, 20];
class me extends lt {
  constructor() {
    super(...arguments),
      (this._desc = {
        magdir: {
          vsPath: "raster/magdir",
          fsPath: "raster/magdir",
          attributes: new Map([
            ["a_pos", 0],
            ["a_offset", 1],
            ["a_vv", 2],
          ]),
        },
        scalar: {
          vsPath: "raster/scalar",
          fsPath: "raster/scalar",
          attributes: new Map([
            ["a_pos", 0],
            ["a_offset", 1],
            ["a_vv", 2],
          ]),
        },
      });
  }
  dispose() {}
  prepareState({ context: t }) {
    t.setBlendingEnabled(!0),
      t.setBlendFunctionSeparate(
        S.ONE,
        S.ONE_MINUS_SRC_ALPHA,
        S.ONE,
        S.ONE_MINUS_SRC_ALPHA
      ),
      t.setColorMask(!0, !0, !0, !0),
      t.setStencilWriteMask(0),
      t.setStencilTestEnabled(!0),
      t.setStencilOp(q.KEEP, q.KEEP, q.REPLACE);
  }
  draw(t, e) {
    if (O(e.source) || e.source.validPixelCount === 0) return;
    const { context: s, timeline: r } = t;
    if (
      (r.begin(this.name),
      s.setStencilFunction(nt.EQUAL, e.stencilRef, 255),
      e.updateVectorFieldVAO(t),
      t.renderPass === "scalar")
    ) {
      const a = e.vaoData.scalar;
      a && this._drawScalars(t, e, a.vao, a.elementCount);
    } else {
      const a = e.vaoData.magdir;
      a && this._drawTriangles(t, e, a.vao, a.elementCount);
    }
    r.end(this.name);
  }
  _drawTriangles(t, e, s, r) {
    const {
        context: a,
        painter: o,
        requestRender: n,
        allowDelayedRender: m,
      } = t,
      { symbolizerParameters: u } = e,
      c = u.dataRange ? ["dataRange"] : [];
    u.rotationType === "geographic" && c.push("rotationGeographic");
    const l = o.materialManager.getProgram(this._desc.magdir, c);
    if (m && g(n) && !l.compiled) return void n();
    a.useProgram(l);
    const { coordScale: d, opacity: h, transforms: p } = e;
    l.setUniform2fv("u_coordScale", d),
      l.setUniform1f("u_opacity", h),
      l.setUniformMatrix3fv("u_dvsMat3", p.dvs);
    const { style: _, dataRange: v, rotation: M, symbolPercentRange: F } = u;
    l.setUniform4fv("u_colors", et[_] || et.single_arrow),
      l.setUniform2fv("u_dataRange", v || at),
      l.setUniform1f("u_rotation", M),
      l.setUniform2fv("u_symbolPercentRange", F);
    const ft = this._getSymbolSize(t, e);
    l.setUniform2fv("u_symbolSize", ft),
      a.bindVAO(s),
      a.drawElements(U.TRIANGLES, r, f.UNSIGNED_INT, 0);
  }
  _drawScalars(t, e, s, r) {
    const {
        context: a,
        painter: o,
        requestRender: n,
        allowDelayedRender: m,
      } = t,
      { symbolizerParameters: u } = e,
      c = [];
    u.style === "wind_speed"
      ? c.push("innerCircle")
      : u.dataRange && c.push("dataRange"),
      u.rotationType === "geographic" && c.push("rotationGeographic");
    const l = o.materialManager.getProgram(this._desc.scalar, c);
    if (m && g(n) && !l.compiled) return void n();
    a.useProgram(l);
    const { coordScale: d, opacity: h, transforms: p } = e;
    l.setUniform2fv("u_coordScale", d),
      l.setUniform1f("u_opacity", h),
      l.setUniformMatrix3fv("u_dvsMat3", p.dvs);
    const { dataRange: _, symbolPercentRange: v } = u;
    l.setUniform2fv("u_dataRange", _ || at),
      l.setUniform2fv("u_symbolPercentRange", v);
    const M = this._getSymbolSize(t, e);
    l.setUniform2fv("u_symbolSize", M),
      a.bindVAO(s),
      a.drawElements(U.TRIANGLES, r, f.UNSIGNED_INT, 0);
  }
  _getSymbolSize(t, e) {
    const s = e.key
        ? 2 ** (t.displayLevel - e.key.level)
        : e.resolution / t.state.resolution,
      { symbolTileSize: r } = e.symbolizerParameters;
    return [
      r / (Math.round((e.width - e.offset[0]) / r) * r) / s,
      r / (Math.round((e.height - e.offset[1]) / r) * r) / s,
    ];
  }
}
class pe extends ct {
  constructor(t = null) {
    super(),
      (this._source = null),
      (this._symbolizerParameters = null),
      (this._vaoInvalidated = !0),
      (this.coordScale = [1, 1]),
      (this.height = null),
      (this.key = null),
      (this.offset = null),
      (this.stencilRef = 0),
      (this.resolution = null),
      (this.pixelRatio = 1),
      (this.x = 0),
      (this.y = 0),
      (this.rotation = 0),
      (this.rawPixelData = null),
      (this.vaoData = null),
      (this.width = null),
      (this.source = t);
  }
  destroy() {
    var t, e;
    g(this.vaoData) &&
      ((t = this.vaoData.magdir) == null || t.vao.dispose(),
      (e = this.vaoData.scalar) == null || e.vao.dispose(),
      (this.vaoData = null));
  }
  get symbolizerParameters() {
    return this._symbolizerParameters;
  }
  set symbolizerParameters(t) {
    JSON.stringify(this._symbolizerParameters) !== JSON.stringify(t) &&
      ((this._symbolizerParameters = t), this.invalidateVAO());
  }
  get source() {
    return this._source;
  }
  set source(t) {
    (this._source = t), this.invalidateVAO();
  }
  invalidateVAO() {
    var t, e;
    !this._vaoInvalidated &&
      g(this.vaoData) &&
      ((t = this.vaoData.magdir) == null || t.vao.dispose(),
      (e = this.vaoData.scalar) == null || e.vao.dispose(),
      (this.vaoData = null),
      (this._vaoInvalidated = !0),
      this.requestRender());
  }
  updateVectorFieldVAO(t) {
    if (this._vaoInvalidated) {
      if (((this._vaoInvalidated = !1), g(this.source) && O(this.vaoData))) {
        const { style: e } = this.symbolizerParameters;
        switch (e) {
          case "beaufort_ft":
          case "beaufort_km":
          case "beaufort_kn":
          case "beaufort_m":
          case "beaufort_mi":
          case "classified_arrow":
          case "ocean_current_kn":
          case "ocean_current_m":
          case "single_arrow":
            {
              const s = K(this.source, this.symbolizerParameters),
                r = this._createVectorFieldVAO(t.context, s);
              this.vaoData = { magdir: r };
            }
            break;
          case "simple_scalar":
            {
              const s = Y(this.source, this.symbolizerParameters),
                r = this._createVectorFieldVAO(t.context, s);
              this.vaoData = { scalar: r };
            }
            break;
          case "wind_speed": {
            const s = K(this.source, this.symbolizerParameters),
              r = this._createVectorFieldVAO(t.context, s),
              a = Y(this.source, this.symbolizerParameters),
              o = this._createVectorFieldVAO(t.context, a);
            this.vaoData = { magdir: r, scalar: o };
          }
        }
      }
      this.ready(), this.requestRender();
    }
  }
  _createTransforms() {
    return { dvs: L() };
  }
  setTransform(t) {
    const e = xt(this.transforms.dvs),
      [s, r] = t.toScreenNoRotation([0, 0], [this.x, this.y]),
      a = this.resolution / this.pixelRatio / t.resolution,
      o = a * this.width,
      n = a * this.height,
      m = (Math.PI * this.rotation) / 180;
    k(e, e, V(s, r)),
      k(e, e, V(o / 2, n / 2)),
      it(e, e, -m),
      k(e, e, V(-o / 2, -n / 2)),
      St(e, e, V(o, n)),
      At(this.transforms.dvs, t.displayViewMat3, e);
  }
  onAttach() {
    this.invalidateVAO();
  }
  onDetach() {
    this.invalidateVAO();
  }
  _createVectorFieldVAO(t, e) {
    const { vertexData: s, indexData: r } = e,
      a = b.createVertex(t, R.STATIC_DRAW, new Float32Array(s)),
      o = b.createIndex(t, R.STATIC_DRAW, new Uint32Array(r)),
      n = Et("vector-field", {
        geometry: [
          {
            location: 0,
            name: "a_pos",
            count: 2,
            type: f.FLOAT,
            normalized: !1,
          },
          {
            location: 1,
            name: "a_offset",
            count: 2,
            type: f.FLOAT,
            normalized: !1,
          },
          {
            location: 2,
            name: "a_vv",
            count: 2,
            type: f.FLOAT,
            normalized: !1,
          },
        ],
      });
    return {
      vao: new G(t, n.attributes, n.bufferLayouts, { geometry: a }, o),
      elementCount: r.length,
    };
  }
}
export { ue as h, me as m, pe as y };
