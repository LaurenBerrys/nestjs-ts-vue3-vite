import { r as l, w as h } from "./index.8fd7165c.js";
import { h as m } from "./PooledRBush.1b7c69fc.js";
import { k as u } from "./georeference.db8759a2.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./mat3f64.eb921732.js";
import "./mat4f64.b473928c.js";
import "./spatialReferenceEllipsoidUtils.0049fd16.js";
import "./quat.17ee06b3.js";
import "./quatf64.75f9f553.js";
import "./BufferView.b3039ce1.js";
import "./vec33.5889ffa1.js";
class J {
  async createIndex(t, n) {
    const o = [];
    if (!t.vertexAttributes || !t.vertexAttributes.position) return new m();
    const a = this._createMeshData(t),
      e = l(n)
        ? await n.invoke("createIndexThread", a, { transferList: o })
        : this.createIndexThread(a).result;
    return this._createPooledRBush().fromJSON(e);
  }
  createIndexThread(t) {
    const n = new Float64Array(t.position),
      o = this._createPooledRBush();
    return t.components
      ? this._createIndexComponentsThread(
          o,
          n,
          t.components.map((a) => new Uint32Array(a))
        )
      : this._createIndexAllThread(o, n);
  }
  _createIndexAllThread(t, n) {
    const o = new Array(n.length / 9);
    let a = 0;
    for (let e = 0; e < n.length; e += 9) o[a++] = p(n, e + 0, e + 3, e + 6);
    return t.load(o), { result: t.toJSON() };
  }
  _createIndexComponentsThread(t, n, o) {
    let a = 0;
    for (const s of o) a += s.length / 3;
    const e = new Array(a);
    let c = 0;
    for (const s of o)
      for (let i = 0; i < s.length; i += 3)
        e[c++] = p(n, 3 * s[i + 0], 3 * s[i + 1], 3 * s[i + 2]);
    return t.load(e), { result: t.toJSON() };
  }
  _createMeshData(t) {
    const n = (
      t.transform
        ? u(
            {
              position: t.vertexAttributes.position,
              normal: null,
              tangent: null,
            },
            t.transform,
            t.spatialReference
          ).position
        : t.vertexAttributes.position
    ).buffer;
    return !t.components || t.components.some((o) => !o.faces)
      ? { position: n }
      : { position: n, components: t.components.map((o) => o.faces) };
  }
  _createPooledRBush() {
    return new m(
      9,
      h("esri-csp-restrictions")
        ? (t) => t
        : [".minX", ".minY", ".maxX", ".maxY"]
    );
  }
}
function p(r, t, n, o) {
  return {
    minX: Math.min(r[t + 0], r[n + 0], r[o + 0]),
    maxX: Math.max(r[t + 0], r[n + 0], r[o + 0]),
    minY: Math.min(r[t + 1], r[n + 1], r[o + 1]),
    maxY: Math.max(r[t + 1], r[n + 1], r[o + 1]),
    p0: [r[t + 0], r[t + 1], r[t + 2]],
    p1: [r[n + 0], r[n + 1], r[n + 2]],
    p2: [r[o + 0], r[o + 1], r[o + 2]],
  };
}
export { J as default };
