import { r as b, u as N, c$ as A, cc as x, s as C } from "./index.8fd7165c.js";
import { h as p, E as T, S as R } from "./color.4c5303e9.js";
import { U as F } from "./MaterialKey.97cb3dc8.js";
import { Q as H, W as O } from "./definitions.ce677f69.js";
import { C as o } from "./enums.64ab819c.js";
class d {
  static getStorageSpec(e) {
    return null;
  }
  static createOrUpdateRendererSchema(e, n) {
    return b(e) && e.type === "default" ? e : { type: "default" };
  }
  static getVariation(e) {
    return {};
  }
  static getVariationHash(e) {
    return 0;
  }
}
(d.type = "default"), (d.programSpec = null);
let g = class extends d {
  static getStorageSpec({ attributes: t }) {
    return { visualVariables: !1, attributes: t ?? null };
  }
  static _createRendererSchema() {
    return {
      type: "dot-density",
      colors: new Float32Array(32),
      dotValue: -1,
      dotSize: -1,
      dotScale: -1,
      dotBlending: !1,
      backgroundColor: new Float32Array(4),
      activeDots: new Float32Array(8),
      seed: -1,
    };
  }
  static createOrUpdateRendererSchema(t, e) {
    const {
        attributes: n,
        dotValue: l,
        referenceScale: u,
        dotSize: m,
        dotBlendingEnabled: s,
        seed: c,
        backgroundColor: i,
      } = e,
      r = b(t) && t.type === "dot-density" ? t : this._createRendererSchema();
    (r.dotValue = l),
      (r.dotSize = m),
      (r.dotScale = u),
      (r.dotBlending = s),
      (r.seed = c);
    const { colors: y, activeDots: E, backgroundColor: h } = r;
    for (let a = 0; a < H; a++) {
      const S = a >= n.length ? null : n[a].color;
      p(y, S, 4 * a);
    }
    for (let a = 0; a < 8; a++) E[a] = a < e.attributes.length ? 1 : 0;
    return p(h, i), r;
  }
  static getVariation(t) {
    return { ddDotBlending: t.dotBlending };
  }
  static getVariationHash(t) {
    return t.dotBlending ? 1 : 0;
  }
};
(g.type = "dot-density"),
  (g.programSpec = {
    shader: "materials/fill",
    vertexLayout: {
      geometry: [
        { location: 0, name: "a_pos", count: 2, type: o.SHORT },
        { location: 1, name: "a_id", count: 3, type: o.UNSIGNED_BYTE },
        { location: 2, name: "a_bitset", count: 1, type: o.UNSIGNED_BYTE },
        { location: 3, name: "a_inverseArea", count: 1, type: o.FLOAT },
      ],
    },
  });
class f extends d {
  static getStorageSpec({ field: e, valueExpression: n }) {
    return {
      visualVariables: !1,
      attributes: e || n ? [{ field: e, valueExpression: n }] : null,
    };
  }
  static _createRendererSchema() {
    return {
      type: "heatmap",
      radius: -1,
      referenceScale: -1,
      isFieldActive: 0,
      minDensity: -1,
      densityRange: -1,
      kernel: null,
      gradient: null,
      gradientHash: "invalid",
    };
  }
  static createOrUpdateRendererSchema(e, n) {
    const {
        radius: l,
        minDensity: u,
        maxDensity: m,
        referenceScale: s,
        field: c,
        valueExpression: i,
        colorStops: r,
      } = n,
      y = m - u,
      E = c || i ? 1 : 0,
      h = r.map(({ color: D, ratio: v }) => `${v}:${D.toString()}`).join();
    let a,
      S = !0;
    return (
      b(e) && e.type === "heatmap"
        ? ((a = e), (S = h !== e.gradientHash))
        : (a = this._createRendererSchema()),
      (a.radius = N(l)),
      (a.minDensity = u),
      (a.densityRange = y),
      (a.referenceScale = s),
      (a.isFieldActive = E),
      S && ((a.gradient = A(r)), (a.gradientHash = h)),
      a
    );
  }
}
(f.type = "heatmap"),
  (f.programSpec = {
    shader: "materials/icon/heatmapAccumulate",
    vertexLayout: {
      geometry: [
        { location: 0, name: "a_pos", count: 2, type: o.SHORT },
        { location: 1, name: "a_vertexOffset", count: 2, type: o.SHORT },
        { location: 4, name: "a_id", count: 4, type: o.UNSIGNED_BYTE },
      ],
    },
  });
class _ extends d {
  static getStorageSpec({ attributes: e }) {
    return { visualVariables: !0, attributes: e ?? null };
  }
  static _createRendererSchema() {
    return {
      type: "pie-chart",
      colors: new Float32Array(4 * O),
      defaultColor: new Float32Array(4),
      othersColor: new Float32Array(4),
      outlineColor: new Float32Array(4),
      holePercentage: 0,
      sectorThreshold: 0,
      outlineWidth: 1,
      numberOfFields: 10,
    };
  }
  static createOrUpdateRendererSchema(e, n) {
    const {
        attributes: l,
        defaultColor: u,
        holePercentage: m,
        othersCategory: s,
        outline: c,
      } = n,
      i = b(e) && e.type === "pie-chart" ? e : this._createRendererSchema();
    for (let r = 0; r < O; r++) {
      const y = r >= l.length ? new x([0, 0, 0, 0]) : l[r].color;
      p(i.colors, y, 4 * r);
    }
    return (
      p(i.defaultColor, u),
      p(i.othersColor, s == null ? void 0 : s.color),
      p(i.outlineColor, c == null ? void 0 : c.color),
      (i.outlineWidth = N((c == null ? void 0 : c.width) || 0)),
      (i.holePercentage = m),
      (i.sectorThreshold = (s == null ? void 0 : s.threshold) || 0),
      (i.numberOfFields = l.length),
      i
    );
  }
  static getVariation(e) {
    return { numberOfFields: e.numberOfFields };
  }
  static getVariationHash(e) {
    return e.numberOfFields;
  }
}
function G(t, e) {
  if (t.type !== e)
    throw new C(
      "material-view-model:unexpected-renderer-schema",
      `expected to find renderer schema of type "${e}" but found type "${t.type}"`
    );
}
function Y(t) {
  switch (t == null ? void 0 : t.type) {
    case "dot-density":
      return g;
    case "heatmap":
      return f;
    case "pie-chart":
      return _;
    default:
      return d;
  }
}
function z(t) {
  const { geometryType: e, symbologyType: n } = F.load(t);
  switch (e) {
    case T.FILL:
      if (n === R.DOT_DENSITY) return g;
      break;
    case T.MARKER:
      switch (n) {
        case R.HEATMAP:
          return f;
        case R.PIE_CHART:
          return _;
      }
  }
  return d;
}
(_.type = "pie-chart"),
  (_.programSpec = {
    shader: "materials/pie",
    vertexLayout: {
      geometry: [
        { location: 0, name: "a_pos", count: 2, type: o.SHORT },
        { location: 1, name: "a_vertexOffset", count: 2, type: o.SHORT },
        { location: 2, name: "a_texCoords", count: 2, type: o.UNSIGNED_SHORT },
        {
          location: 3,
          name: "a_bitSetAndDistRatio",
          count: 2,
          type: o.UNSIGNED_SHORT,
        },
        { location: 4, name: "a_id", count: 4, type: o.UNSIGNED_BYTE },
        {
          location: 5,
          name: "a_color",
          count: 4,
          type: o.UNSIGNED_BYTE,
          normalized: !0,
        },
        {
          location: 6,
          name: "a_outlineColor",
          count: 4,
          type: o.UNSIGNED_BYTE,
          normalized: !0,
        },
        {
          location: 7,
          name: "a_sizeAndOutlineWidth",
          count: 4,
          type: o.UNSIGNED_BYTE,
        },
        { location: 8, name: "a_zoomRange", count: 2, type: o.UNSIGNED_SHORT },
      ],
    },
    hittestAttributes: ["a_vertexOffset", "a_texCoords"],
  });
export { Y as c, d as e, z as p, G as s };
