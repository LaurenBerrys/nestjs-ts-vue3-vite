import { r as a, ar as n, q as m, gR as c } from "./index.8fd7165c.js";
import {
  m as i,
  d as f,
  R as p,
  b as u,
  c as S,
  e as d,
  f as h,
  g as y,
} from "./dataUtils.e77088c3.js";
import { S as x, T as O, p as N } from "./RasterSymbolizer.ac2e1b06.js";
import { C as J, i as g } from "./utils.b44136ae.js";
import { M as b, T as B, $ as k } from "./rasterProjectionHelper.fde7641d.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./colorUtils.3868c6ed.js";
class C {
  convertVectorFieldData(t) {
    const r = i.fromJSON(t.pixelBlock),
      s = f(r, t.type);
    return Promise.resolve(a(s) ? s.toJSON() : null);
  }
  async decode(t) {
    const r = await x(t.data, t.options);
    return r && r.toJSON();
  }
  symbolize(t) {
    (t.pixelBlock = i.fromJSON(t.pixelBlock)),
      (t.extent = t.extent ? n.fromJSON(t.extent) : null);
    const r = this.symbolizer.symbolize(t);
    return Promise.resolve(a(r) ? r.toJSON() : null);
  }
  async updateSymbolizer(t) {
    var r;
    (this.symbolizer = O.fromJSON(t.symbolizerJSON)),
      t.histograms &&
        ((r = this.symbolizer) == null ? void 0 : r.rendererJSON.type) ===
          "rasterStretch" &&
        (this.symbolizer.rendererJSON.histograms = t.histograms);
  }
  async updateRasterFunction(t) {
    this.rasterFunction = J(t.rasterFunctionJSON);
  }
  async process(t) {
    const r = this.rasterFunction.process({
      extent: n.fromJSON(t.extent),
      primaryPixelBlocks: t.primaryPixelBlocks.map((s) =>
        a(s) ? i.fromJSON(s) : null
      ),
      primaryRasterIds: t.primaryRasterIds,
    });
    return a(r) ? r.toJSON() : null;
  }
  stretch(t) {
    const r = this.symbolizer.simpleStretch(
      i.fromJSON(t.srcPixelBlock),
      t.stretchParams
    );
    return Promise.resolve(a(r) && r.toJSON());
  }
  estimateStatisticsHistograms(t) {
    const r = N(i.fromJSON(t.srcPixelBlock));
    return Promise.resolve(r);
  }
  split(t) {
    const r = p(i.fromJSON(t.srcPixelBlock), t.tileSize, t.maximumPyramidLevel);
    return (
      r &&
        r.forEach((s, o) => {
          r.set(o, s == null ? void 0 : s.toJSON());
        }),
      Promise.resolve(r)
    );
  }
  async mosaicAndTransform(t) {
    const r = t.srcPixelBlocks.map((l) => (l ? new i(l) : null)),
      s = u(r, t.srcMosaicSize, {
        blockWidths: t.blockWidths,
        alignmentInfo: t.alignmentInfo,
        clipOffset: t.clipOffset,
        clipSize: t.clipSize,
      });
    let o,
      e = s;
    return (
      t.coefs &&
        (e = S(s, t.destDimension, t.coefs, t.sampleSpacing, t.interpolation)),
      t.projectDirections &&
        t.gcsGrid &&
        ((o = d(t.destDimension, t.gcsGrid)),
        (e = m(h(e, t.isUV ? "vector-uv" : "vector-magdir", o)))),
      { pixelBlock: e == null ? void 0 : e.toJSON(), localNorthDirections: o }
    );
  }
  async createFlowMesh(t, r) {
    const s = {
        data: new Float32Array(t.flowData.buffer),
        mask: new Uint8Array(t.flowData.maskBuffer),
        width: t.flowData.width,
        height: t.flowData.height,
      },
      { vertexData: o, indexData: e } = await y(
        t.meshType,
        t.simulationSettings,
        s,
        r.signal
      );
    return {
      result: { vertexBuffer: o.buffer, indexBuffer: e.buffer },
      transferList: [o.buffer, e.buffer],
    };
  }
  async getProjectionOffsetGrid(t) {
    const r = n.fromJSON(t.projectedExtent),
      s = n.fromJSON(t.srcBufferExtent);
    let o = null;
    t.datumTransformationSteps &&
      (o = new c({ steps: t.datumTransformationSteps })),
      (t.includeGCSGrid || b(r.spatialReference, s.spatialReference, o)) &&
        (await B());
    const e = t.rasterTransform ? g(t.rasterTransform) : null;
    return k({
      ...t,
      projectedExtent: r,
      srcBufferExtent: s,
      datumTransformation: o,
      rasterTransform: e,
    });
  }
}
export { C as default };
