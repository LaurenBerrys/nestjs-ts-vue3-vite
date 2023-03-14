import {
  R as s,
  bn as c,
  a6 as h,
  a5 as m,
  ar as p,
} from "./index.8fd7165c.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
const y = {
  convertToGEGeometry: function (n, e) {
    if (e == null) return null;
    let o = "cache" in e ? e.cache._geVersion : void 0;
    return (
      o == null &&
        ((o = n.convertJSONToGeometry(e)),
        "cache" in e && (e.cache._geVersion = o)),
      o
    );
  },
  exportPoint: function (n, e, o) {
    const a = n.hasZ(e),
      i = n.hasM(e),
      t = new s({ x: n.getPointX(e), y: n.getPointY(e), spatialReference: o });
    return (
      a && (t.z = n.getPointZ(e)),
      i && (t.m = n.getPointM(e)),
      (t.cache._geVersion = e),
      t
    );
  },
  exportPolygon: function (n, e, o) {
    const a = new c({
      rings: n.exportPaths(e),
      hasZ: n.hasZ(e),
      hasM: n.hasM(e),
      spatialReference: o,
    });
    return (a.cache._geVersion = e), a;
  },
  exportPolyline: function (n, e, o) {
    const a = new h({
      paths: n.exportPaths(e),
      hasZ: n.hasZ(e),
      hasM: n.hasM(e),
      spatialReference: o,
    });
    return (a.cache._geVersion = e), a;
  },
  exportMultipoint: function (n, e, o) {
    const a = new m({
      hasZ: n.hasZ(e),
      hasM: n.hasM(e),
      points: n.exportPoints(e),
      spatialReference: o,
    });
    return (a.cache._geVersion = e), a;
  },
  exportExtent: function (n, e, o) {
    const a = n.hasZ(e),
      i = n.hasM(e),
      t = new p({
        xmin: n.getXMin(e),
        ymin: n.getYMin(e),
        xmax: n.getXMax(e),
        ymax: n.getYMax(e),
        spatialReference: o,
      });
    if (a) {
      const r = n.getZExtent(e);
      (t.zmin = r.vmin), (t.zmax = r.vmax);
    }
    if (i) {
      const r = n.getMExtent(e);
      (t.mmin = r.vmin), (t.mmax = r.vmax);
    }
    return (t.cache._geVersion = e), t;
  },
};
export { y as hydratedAdapter };
