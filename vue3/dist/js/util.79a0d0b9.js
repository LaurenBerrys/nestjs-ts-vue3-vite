import { d0 as i } from "./index.8fd7165c.js";
const l = new i({
  esriGeometryPoint: "point",
  esriGeometryMultipoint: "multipoint",
  esriGeometryPolyline: "polyline",
  esriGeometryPolygon: "polygon",
  esriGeometryMultiPatch: "multipatch",
  mesh: "mesh",
});
function u(t) {
  return l.toJSON(t);
}
function m(t) {
  const {
    bandCount: o,
    attributeTable: r,
    colormap: n,
    pixelType: e,
  } = t.raster.rasterInfo;
  return o === 1 && (r != null || n != null || e === "u8" || e === "s8");
}
export { u as e, m as r };
