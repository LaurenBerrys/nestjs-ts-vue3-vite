import {
  ae as l,
  af as m,
  ag as d,
  dd as h,
  bo as p,
  hT as S,
  aK as w,
  dr as R,
  U as v,
  hU as J,
  aZ as f,
  s as c,
  cx as N,
} from "./index.8fd7165c.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
let a = class extends h {
  constructor(r) {
    super(r),
      (this.geometries = []),
      (this.outSpatialReference = null),
      (this.transformation = null),
      (this.transformForward = null);
  }
  toJSON() {
    const r = this.geometries.map((o) => o.toJSON()),
      t = this.geometries[0],
      e = {};
    return (
      (e.outSR =
        this.outSpatialReference.wkid ||
        JSON.stringify(this.outSpatialReference.toJSON())),
      (e.inSR =
        t.spatialReference.wkid || JSON.stringify(t.spatialReference.toJSON())),
      (e.geometries = JSON.stringify({ geometryType: p(t), geometries: r })),
      this.transformation &&
        (e.transformation =
          this.transformation.wkid || JSON.stringify(this.transformation)),
      this.transformForward != null &&
        (e.transformForward = this.transformForward),
      e
    );
  }
};
l([m()], a.prototype, "geometries", void 0),
  l(
    [m({ json: { read: { source: "outSR" } } })],
    a.prototype,
    "outSpatialReference",
    void 0
  ),
  l([m()], a.prototype, "transformation", void 0),
  l([m()], a.prototype, "transformForward", void 0),
  (a = l([d("esri.rest.support.ProjectParameters")], a));
const u = a,
  O = S(u);
async function j(r, t, e) {
  t = O(t);
  const o = w(r),
    s = { ...o.query, f: "json", ...t.toJSON() },
    i = t.outSpatialReference,
    n = p(t.geometries[0]),
    g = R(s, e);
  return v(o.path + "/project", g).then(({ data: { geometries: y } }) =>
    J(y, n, i)
  );
}
async function F(r = null, t) {
  var s, i;
  if (f.geometryServiceUrl) return f.geometryServiceUrl;
  if (!r) throw new c("internal:geometry-service-url-not-configured");
  let e;
  (e = "portal" in r ? r.portal || N.getDefault() : r),
    await e.load({ signal: t });
  const o =
    (i = (s = e.helperServices) == null ? void 0 : s.geometry) == null
      ? void 0
      : i.url;
  if (!o) throw new c("internal:geometry-service-url-not-configured");
  return o;
}
async function q(r, t, e = null, o) {
  const s = await F(e, o),
    i = new u();
  (i.geometries = [r]), (i.outSpatialReference = t);
  const n = await j(s, i, { signal: o });
  if (n && Array.isArray(n) && n.length === 1) return n[0];
  throw new c("internal:geometry-service-projection-failed");
}
export { F as getGeometryServiceURL, q as projectGeometry };
