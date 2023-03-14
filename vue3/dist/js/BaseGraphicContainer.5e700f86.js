import {
  e as c,
  h as A,
  bz as R,
  aw as D,
  az as E,
  M as O,
  ax as C,
  g as I,
  i as L,
  E as N,
} from "./index.8fd7165c.js";
import { o as S } from "./FeatureContainer.3aa1973d.js";
import { r as w } from "./vec3f32.5805ce90.js";
import { r as T } from "./Container.a5892366.js";
import { e as F } from "./color.4c5303e9.js";
import { E as p, f as P } from "./VertexArrayObject.1b8f3583.js";
import { R as m, E as U, C as x, F as g, I as W } from "./enums.64ab819c.js";
const q = Math.PI / 180;
class z extends T {
  constructor(r) {
    super(),
      (this._program = null),
      (this._vao = null),
      (this._vertexBuffer = null),
      (this._indexBuffer = null),
      (this._dvsMat3 = c()),
      (this._localOrigin = { x: 0, y: 0 }),
      (this._getBounds = r);
  }
  destroy() {
    this._vao &&
      (this._vao.dispose(!0),
      (this._vao = null),
      (this._vertexBuffer = null),
      (this._indexBuffer = null)),
      (this._program = A(this._program));
  }
  doRender(r) {
    const { context: e } = r,
      l = this._getBounds();
    if (l.length < 1) return;
    this._createShaderProgram(e),
      this._updateMatricesAndLocalOrigin(r),
      this._updateBufferData(e, l),
      e.setBlendingEnabled(!0),
      e.setDepthTestEnabled(!1),
      e.setStencilWriteMask(0),
      e.setStencilTestEnabled(!1),
      e.setBlendFunction(m.ONE, m.ONE_MINUS_SRC_ALPHA),
      e.setColorMask(!0, !0, !0, !0);
    const o = this._program;
    e.bindVAO(this._vao),
      e.useProgram(o),
      o.setUniformMatrix3fv("u_dvsMat3", this._dvsMat3),
      e.gl.lineWidth(1),
      e.drawElements(U.LINES, 8 * l.length, x.UNSIGNED_INT, 0),
      e.bindVAO();
  }
  _createTransforms() {
    return { dvs: c() };
  }
  _createShaderProgram(r) {
    this._program ||
      (this._program = r.programCache.acquire(
        `precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`,
        `precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`,
        v().attributes
      ));
  }
  _updateMatricesAndLocalOrigin(r) {
    const { state: e } = r,
      {
        displayMat3: l,
        size: o,
        resolution: u,
        pixelRatio: a,
        rotation: n,
        viewpoint: t,
      } = e,
      h = q * n,
      { x: i, y } = t.targetGeometry,
      B = R(i, e.spatialReference);
    (this._localOrigin.x = B), (this._localOrigin.y = y);
    const f = a * o[0],
      _ = a * o[1],
      b = u * f,
      M = u * _,
      d = D(this._dvsMat3);
    E(d, d, l),
      O(d, d, C(f / 2, _ / 2)),
      I(d, d, w(o[0] / b, -_ / M, 1)),
      L(d, d, -h);
  }
  _updateBufferData(r, e) {
    const { x: l, y: o } = this._localOrigin,
      u = 8 * e.length,
      a = new Float32Array(u),
      n = new Uint32Array(8 * e.length);
    let t = 0,
      h = 0;
    for (const i of e)
      i &&
        ((a[2 * t + 0] = i[0] - l),
        (a[2 * t + 1] = i[1] - o),
        (a[2 * t + 2] = i[0] - l),
        (a[2 * t + 3] = i[3] - o),
        (a[2 * t + 4] = i[2] - l),
        (a[2 * t + 5] = i[3] - o),
        (a[2 * t + 6] = i[2] - l),
        (a[2 * t + 7] = i[1] - o),
        (n[h + 0] = t + 0),
        (n[h + 1] = t + 3),
        (n[h + 2] = t + 3),
        (n[h + 3] = t + 2),
        (n[h + 4] = t + 2),
        (n[h + 5] = t + 1),
        (n[h + 6] = t + 1),
        (n[h + 7] = t + 0),
        (t += 4),
        (h += 8));
    if (
      (this._vertexBuffer
        ? this._vertexBuffer.setData(a.buffer)
        : (this._vertexBuffer = p.createVertex(r, g.DYNAMIC_DRAW, a.buffer)),
      this._indexBuffer
        ? this._indexBuffer.setData(n)
        : (this._indexBuffer = p.createIndex(r, g.DYNAMIC_DRAW, n)),
      !this._vao)
    ) {
      const i = v();
      this._vao = new P(
        r,
        i.attributes,
        i.bufferLayouts,
        { geometry: this._vertexBuffer },
        this._indexBuffer
      );
    }
  }
}
const v = () =>
  F("bounds", {
    geometry: [{ location: 0, name: "a_position", count: 2, type: x.FLOAT }],
  });
let J = class extends S {
  constructor(s) {
    super(s), (this.hasHighlight = () => !0);
  }
  destroy() {
    super.destroy(), (this._boundsRenderer = N(this._boundsRenderer));
  }
  enableRenderingBounds(s) {
    (this._boundsRenderer = new z(s)), this.requestRender();
  }
  get hasLabels() {
    return !1;
  }
  onTileData(s, r) {
    s.patch(r), this.contains(s) || this.addChild(s), this.requestRender();
  }
  onTileError(s) {
    s.clear(), this.contains(s) || this.addChild(s);
  }
  _renderChildren(s, r) {
    for (const e of this.children)
      e.isReady &&
        e.hasData &&
        (e.commit(s),
        s.context.setStencilFunction(W.EQUAL, e.stencilRef, 255),
        e.getDisplayList().replay(s, e, r));
  }
};
export { J as n };
