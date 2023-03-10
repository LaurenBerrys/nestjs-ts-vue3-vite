import { q as b } from "./Table.e9c997d5.js";
import {
  f4 as w,
  s as u,
  r as y,
  U as v,
  i0 as z,
  i1 as g,
  bS as L,
  e3 as S,
  i2 as j,
} from "./index.8fd7165c.js";
import "./vue.a7ce1fbe.js";
import "./NvapForm.feb8550d.js";
import "./vue-i18n.67a42238.js";
import "./vue-router.805f6e2a.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
let a = p();
function p() {
  return new w(50);
}
function k() {
  a = p();
}
function E(r, o) {
  if (r.type === "icon") return f(r, o);
  if (r.type === "object") return l(r, o);
  throw new u(
    "symbol3d:unsupported-symbol-layer",
    "computeLayerSize only works with symbol layers of type Icon and Object"
  );
}
async function q(r, o) {
  if (r.type === "icon")
    return (function (e, n) {
      return f(e, n).then((t) => {
        if (e.size == null) return t;
        const i = t[0] / t[1];
        return i > 1 ? [e.size, e.size / i] : [e.size * i, e.size];
      });
    })(r, o);
  if (r.type === "object")
    return (async function (e, n) {
      const t = await l(e, n);
      return g(t, e);
    })(r, o);
  throw new u(
    "symbol3d:unsupported-symbol-layer",
    "computeLayerSize only works with symbol layers of type Icon and Object"
  );
}
async function f(r, o) {
  var n, t;
  if ((n = r.resource) != null && n.href)
    return ((e = r.resource.href),
    v(e, { responseType: "image" }).then((i) => i.data)).then((i) => [
      i.width,
      i.height,
    ]);
  var e;
  if ((t = r.resource) != null && t.primitive)
    return y(o) ? [o, o] : [256, 256];
  throw new u(
    "symbol3d:invalid-symbol-layer",
    "symbol layers of type Icon must have either an href or a primitive resource"
  );
}
function l(r, o) {
  return (async function (e, n) {
    var i;
    if (!e.isPrimitive) {
      const s = L((i = e.resource) == null ? void 0 : i.href),
        c = a.get(s);
      if (c !== void 0) return c;
      const h = await b(
          () => import("./objectResourceUtils.0c12cfa8.js").then((d) => d.o),
          [
            "js/objectResourceUtils.0c12cfa8.js",
            "js/devEnvironmentUtils.4eab2a99.js",
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
            "js/mat4f64.b473928c.js",
            "js/BufferView.b3039ce1.js",
            "js/vec33.5889ffa1.js",
            "js/DefaultMaterial_COLOR_GAMMA.078f8e82.js",
            "js/types.e1c0a5bf.js",
            "js/enums.64ab819c.js",
            "js/Version.a4557b9e.js",
            "js/quat.17ee06b3.js",
            "js/quatf64.75f9f553.js",
            "js/resourceUtils.d8a25705.js",
            "js/basicInterfaces.b7051eb1.js",
            "js/Indices.7165e4ff.js",
            "js/NestedMap.1b5db22e.js",
            "js/requestImageUtils.54152381.js",
            "js/Util.68fdcaea.js",
            "js/sphere.a87dd95a.js",
            "js/VertexAttribute.15d1866a.js",
            "js/OrderIndependentTransparency.0d2f697c.js",
            "js/Texture.fb0c670a.js",
            "js/VertexArrayObject.1b8f3583.js",
            "js/VertexElementDescriptor.2925c6af.js",
            "js/InterleavedLayout.c89035f2.js",
            "js/vec3f32.5805ce90.js",
            "js/doublePrecisionUtils.e3c3d0d8.js",
            "js/symbolColorUtils.2420e89c.js",
          ]
        ),
        m = await h.fetch(s, { disableTextures: !0 });
      return a.put(s, m.referenceBoundingBox), m.referenceBoundingBox;
    }
    let t = null;
    if (
      e.resource &&
      e.resource.primitive &&
      ((t = S(j(e.resource.primitive))), y(n))
    )
      for (let s = 0; s < t.length; s++) t[s] *= n;
    return t
      ? Promise.resolve(t)
      : Promise.reject(
          new u(
            "symbol:invalid-resource",
            "The symbol does not have a valid resource"
          )
        );
  })(r, o).then((e) => z(e));
}
export {
  k as clearBoundingBoxCache,
  f as computeIconLayerResourceSize,
  E as computeLayerResourceSize,
  q as computeLayerSize,
  l as computeObjectLayerResourceSize,
};
