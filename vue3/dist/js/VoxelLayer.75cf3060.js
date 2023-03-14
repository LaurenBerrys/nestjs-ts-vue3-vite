import {
  fi as Ve,
  fo as he,
  gN as je,
  kN as me,
  m as ve,
  b as Be,
  aM as G,
  eg as D,
  iP as j,
  iQ as z,
  ae as t,
  af as o,
  dT as K,
  ag as d,
  dd as h,
  iL as Oe,
  gO as V,
  cc as B,
  P as c,
  ao as Z,
  I as H,
  kO as X,
  bO as Q,
  Q as ze,
  aH as Re,
  ac as Ee,
  fn as ke,
  kP as Ce,
  R as se,
  kQ as Ue,
  kR as We,
  fp as Je,
  es as $e,
  et as Qe,
  eu as Ge,
  io as He,
  ev as Xe,
  iA as Ye,
  jz as Ke,
  r as q,
  a2 as Ze,
  s as re,
  ar as Ie,
  gr as O,
  it as et,
  t as tt,
  j0 as it,
  ey as ot,
  dl as ge,
  iv as st,
  db as rt,
} from "./index.8fd7165c.js";
import { E as nt } from "./SceneService.7e40727d.js";
import { g as lt } from "./persistable.2e5db5e6.js";
import { v as ne, y as at } from "./quat.17ee06b3.js";
import { e as ie } from "./quatf64.75f9f553.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./originUtils.cdead60a.js";
import "./multiOriginJSONSupportUtils.c978f4c3.js";
import "./resourceUtils.b249f31c.js";
import "./resourceExtension.9b0d7459.js";
import "./mat3f64.eb921732.js";
const g = Be(),
  fe = ie(),
  be = ie(),
  Se = ie(),
  Ne = G(0, 0, 1),
  pt = G(0, 1, 0),
  ut = G(1, 0, 0);
function E(e) {
  Ve(g, e), he(g, g);
  const i = Math.atan2(g[1], g[0]),
    s = ne(ie(), Ne, -i);
  je(g, g, s);
  const r = -1 * Math.atan2(g[2], g[0]);
  return [me(i) + 270, me(r) + 90];
}
function ee(e, i) {
  return (
    ne(be, Ne, ve(e - 270)),
    ne(Se, pt, ve(i - 90)),
    at(fe, be, Se),
    Ve(g, ut),
    je(g, g, fe),
    he(g, g),
    [g[0], g[1], g[2]]
  );
}
let R = class extends D(h) {
  constructor(e) {
    super(e),
      (this.enabled = !0),
      (this.label = ""),
      (this.normal = null),
      (this.point = null);
  }
  get orientation() {
    if (!Array.isArray(this.normal) || this.normal.length !== 3) return 0;
    const [e, i] = E(this.normal);
    return j.normalize(z(e), 0, !0);
  }
  set orientation(e) {
    const i = ee(e, this.tilt);
    this._set("normal", i), this._set("orientation", e);
  }
  get tilt() {
    if (!Array.isArray(this.normal) || this.normal.length !== 3) return 0;
    const [e, i] = E(this.normal);
    return j.normalize(z(i), 0, !0);
  }
  set tilt(e) {
    const i = ee(this.orientation, e);
    this._set("normal", i), this._set("tilt", e);
  }
};
t([o({ type: Boolean, json: { write: !0 } })], R.prototype, "enabled", void 0),
  t([o({ type: String, json: { write: !0 } })], R.prototype, "label", void 0),
  t(
    [
      o({
        type: Number,
        json: { read: !1 },
        clonable: !1,
        range: { min: 0, max: 360 },
      }),
      K((e) => j.normalize(z(e), 0, !0)),
    ],
    R.prototype,
    "orientation",
    null
  ),
  t(
    [
      o({
        type: Number,
        json: { read: !1 },
        clonable: !1,
        range: { min: 0, max: 360 },
      }),
      K((e) => j.normalize(z(e), 0, !0)),
    ],
    R.prototype,
    "tilt",
    null
  ),
  t(
    [o({ type: [Number], json: { write: !0 } })],
    R.prototype,
    "normal",
    void 0
  ),
  t([o({ type: [Number], json: { write: !0 } })], R.prototype, "point", void 0),
  (R = t([d("esri.layers.voxel.VoxelSlice")], R));
const te = R;
let f = class extends D(h) {
  constructor() {
    super(...arguments),
      (this.enabled = !0),
      (this.href = null),
      (this.id = null),
      (this.label = ""),
      (this.normal = null),
      (this.point = null),
      (this.sizeInPixel = null),
      (this.slices = null),
      (this.timeId = 0),
      (this.variableId = null);
  }
  get orientation() {
    if (!Array.isArray(this.normal) || this.normal.length !== 3) return 0;
    const [e, i] = E(this.normal);
    return j.normalize(z(e), 0, !0);
  }
  get tilt() {
    if (!Array.isArray(this.normal) || this.normal.length !== 3) return 0;
    const [e, i] = E(this.normal);
    return j.normalize(z(i), 0, !0);
  }
};
t(
  [o({ type: Boolean, json: { default: !0, write: !0 } })],
  f.prototype,
  "enabled",
  void 0
),
  t(
    [
      o({
        type: String,
        json: {
          origins: { service: { read: Oe } },
          write: { enabled: !0, isRequired: !0 },
        },
      }),
      lt({
        origins: ["web-scene"],
        type: "resource",
        prefix: "sections",
        compress: !0,
      }),
    ],
    f.prototype,
    "href",
    void 0
  ),
  t(
    [o({ type: V, json: { write: { enabled: !0, isRequired: !0 } } })],
    f.prototype,
    "id",
    void 0
  ),
  t([o({ type: String, json: { write: !0 } })], f.prototype, "label", void 0),
  t(
    [
      o({
        type: Number,
        clonable: !1,
        readOnly: !0,
        range: { min: 0, max: 360 },
      }),
    ],
    f.prototype,
    "orientation",
    null
  ),
  t(
    [
      o({
        type: Number,
        clonable: !1,
        readOnly: !0,
        range: { min: 0, max: 360 },
      }),
    ],
    f.prototype,
    "tilt",
    null
  ),
  t(
    [o({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })],
    f.prototype,
    "normal",
    void 0
  ),
  t(
    [o({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })],
    f.prototype,
    "point",
    void 0
  ),
  t(
    [o({ type: [V], json: { write: { enabled: !0, isRequired: !0 } } })],
    f.prototype,
    "sizeInPixel",
    void 0
  ),
  t([o({ type: [te], json: { write: !0 } })], f.prototype, "slices", void 0),
  t(
    [o({ type: V, json: { default: 0, write: !0 } })],
    f.prototype,
    "timeId",
    void 0
  ),
  t(
    [o({ type: V, json: { write: { enabled: !0, isRequired: !0 } } })],
    f.prototype,
    "variableId",
    void 0
  ),
  (f = t([d("esri.layers.voxel.VoxelSection")], f));
const le = f;
let C = class extends h {
  constructor() {
    super(...arguments),
      (this.diffuseFactor = 0.5),
      (this.specularFactor = 0.5);
  }
};
t(
  [
    o({
      type: Number,
      range: { min: 0, max: 1 },
      json: { default: 0.5, write: !0 },
    }),
  ],
  C.prototype,
  "diffuseFactor",
  void 0
),
  t(
    [
      o({
        type: Number,
        range: { min: 0, max: 1 },
        json: { default: 0.5, write: !0 },
      }),
    ],
    C.prototype,
    "specularFactor",
    void 0
  ),
  (C = t([d("esri.layers.voxel.VoxelSimpleShading")], C));
const Te = C;
let I = class extends h {
  constructor() {
    super(...arguments),
      (this.continuity = null),
      (this.hasNoData = !1),
      (this.noData = 0),
      (this.offset = 0),
      (this.scale = 1),
      (this.type = null);
  }
};
t(
  [o({ type: ["discrete", "continuous"], json: { write: !0 } })],
  I.prototype,
  "continuity",
  void 0
),
  t(
    [o({ type: Boolean, json: { write: !0 } })],
    I.prototype,
    "hasNoData",
    void 0
  ),
  t([o({ type: Number, json: { write: !0 } })], I.prototype, "noData", void 0),
  t([o({ type: Number, json: { write: !0 } })], I.prototype, "offset", void 0),
  t([o({ type: Number, json: { write: !0 } })], I.prototype, "scale", void 0),
  t(
    [o({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })],
    I.prototype,
    "type",
    void 0
  ),
  (I = t([d("esri.layers.voxel.VoxelFormat")], I));
const xe = I;
let w = class extends h {
  constructor() {
    super(...arguments),
      (this.id = null),
      (this.description = ""),
      (this.name = null),
      (this.originalFormat = null),
      (this.renderingFormat = null),
      (this.unit = ""),
      (this.volumeId = 0),
      (this.type = null);
  }
};
t(
  [o({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })],
  w.prototype,
  "id",
  void 0
),
  t(
    [o({ type: String, json: { write: !0 } })],
    w.prototype,
    "description",
    void 0
  ),
  t(
    [o({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })],
    w.prototype,
    "name",
    void 0
  ),
  t(
    [o({ type: xe, json: { write: !0 } })],
    w.prototype,
    "originalFormat",
    void 0
  ),
  t(
    [o({ type: xe, json: { write: { enabled: !0, isRequired: !0 } } })],
    w.prototype,
    "renderingFormat",
    void 0
  ),
  t([o({ type: String, json: { write: !0 } })], w.prototype, "unit", void 0),
  t(
    [o({ type: Number, json: { write: !0 } })],
    w.prototype,
    "volumeId",
    void 0
  ),
  t(
    [
      o({
        type: [
          "stc-hot-spot-results",
          "stc-cluster-outlier-results",
          "stc-estimated-bin",
          "generic-nearest-interpolated",
        ],
        json: { write: !0 },
      }),
    ],
    w.prototype,
    "type",
    void 0
  ),
  (w = t([d("esri.layers.voxel.VoxelVariable")], w));
const ct = w;
let F = class extends D(h) {
  constructor() {
    super(...arguments),
      (this.color = B.fromArray([0, 0, 0, 0])),
      (this.value = 0),
      (this.enabled = !0),
      (this.label = ""),
      (this.colorLocked = !1);
  }
};
t(
  [o({ type: B, json: { type: [V], write: { enabled: !0, isRequired: !0 } } })],
  F.prototype,
  "color",
  void 0
),
  t(
    [o({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })],
    F.prototype,
    "value",
    void 0
  ),
  t(
    [o({ type: Boolean, json: { default: !0, write: !0 } })],
    F.prototype,
    "enabled",
    void 0
  ),
  t([o({ type: String, json: { write: !0 } })], F.prototype, "label", void 0),
  t(
    [o({ type: Boolean, json: { default: !1, write: !0 } })],
    F.prototype,
    "colorLocked",
    void 0
  ),
  (F = t([d("esri.layers.voxel.VoxelIsosurface")], F));
const Ae = F;
let U = class extends D(h) {
  constructor() {
    super(...arguments), (this.color = null), (this.position = 0);
  }
};
t(
  [o({ type: B, json: { type: [V], write: { enabled: !0, isRequired: !0 } } })],
  U.prototype,
  "color",
  void 0
),
  t(
    [o({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })],
    U.prototype,
    "position",
    void 0
  ),
  (U = t([d("esri.layers.voxel.VoxelColorStop")], U));
const ae = U;
let W = class extends D(h) {
  constructor() {
    super(...arguments), (this.opacity = 1), (this.position = 0);
  }
};
t(
  [
    o({
      type: Number,
      json: { name: "alpha", write: { enabled: !0, isRequired: !0 } },
    }),
  ],
  W.prototype,
  "opacity",
  void 0
),
  t(
    [o({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })],
    W.prototype,
    "position",
    void 0
  ),
  (W = t([d("esri.layers.voxel.VoxelOpacityStop")], W));
const pe = W;
let J = class extends D(h) {
  constructor() {
    super(...arguments), (this.enabled = !1), (this.range = null);
  }
};
t(
  [o({ type: Boolean, json: { default: !1, write: !0 } })],
  J.prototype,
  "enabled",
  void 0
),
  t([o({ type: [Number], json: { write: !0 } })], J.prototype, "range", void 0),
  (J = t([d("esri.layers.voxel.VoxelRangeFilter")], J));
const yt = J;
var x;
(function (e) {
  (e[(e.Color = 1)] = "Color"),
    (e[(e.Alpha = 2)] = "Alpha"),
    (e[(e.Both = 3)] = "Both");
})(x || (x = {}));
let N = class extends D(h) {
  constructor(e) {
    super(e),
      (this.interpolation = null),
      (this.stretchRange = null),
      (this.rangeFilter = null),
      (this._colorMapSize = 256),
      (this.colorStops = new (c.ofType(ae))()),
      (this.opacityStops = new (c.ofType(pe))());
  }
  set colorStops(e) {
    this._set("colorStops", Z(e, this._get("colorStops"), c.ofType(ae)));
  }
  set opacityStops(e) {
    this._set("opacityStops", Z(e, this._get("opacityStops"), c.ofType(pe)));
  }
  getPreviousNext(e, i, s) {
    let r = e;
    for (; --r > 0 && i[r].type !== s && i[r].type !== x.Both; );
    let n = e;
    const l = i.length;
    for (; ++n < l && i[n].type !== s && i[n].type !== x.Both; );
    return [r, n];
  }
  get rasterizedTransferFunction() {
    const e = [];
    if (this.colorStops.length < 2) return e;
    const i = [],
      s = [];
    for (const l of this.colorStops) {
      if (!l.color) return e;
      s.push({
        color: {
          r: l.color.r,
          g: l.color.g,
          b: l.color.b,
          a: Math.round(255 * (1 - l.color.a)),
        },
        position: l.position,
        type: x.Color,
      });
    }
    if (this.opacityStops.length === 0)
      for (const l of s) i.push({ color: l.color, position: l.position });
    else {
      for (const p of this.opacityStops) {
        const y = H(p.position, 0, 1),
          u = Math.round(255 * H(1 - p.opacity, 0, 1));
        let m = !1;
        for (const v of s)
          if (v.type === x.Color && Math.abs(v.position - y) < 1e-5) {
            (v.color.a = u), (v.type = x.Both), (m = !0);
            break;
          }
        m ||
          s.push({
            color: { r: 0, g: 0, b: 0, a: u },
            position: p.position,
            type: x.Alpha,
          });
      }
      s.sort((p, y) => (p.position < y.position ? -1 : 1));
      const l = s.length;
      for (let p = 0; p < l; ++p) {
        const y = s[p];
        if (y.type !== x.Both)
          if (y.type === x.Color) {
            const [u, m] = this.getPreviousNext(p, s, x.Alpha);
            if (u !== -1 && m !== l) {
              const v =
                (y.position - s[u].position) / (s[m].position - s[u].position);
              y.color.a = Math.round(X(s[u].color.a, s[m].color.a, v));
            } else y.color.a = u !== -1 ? s[u].color.a : s[m].color.a;
          } else {
            const [u, m] = this.getPreviousNext(p, s, x.Color);
            if (u !== -1 && m !== l) {
              const v =
                  (y.position - s[u].position) /
                  (s[m].position - s[u].position),
                k = s[u].color,
                _e = s[m].color;
              ["r", "g", "b"].forEach((oe) => {
                y.color[oe] = Math.round(X(k[oe], _e[oe], v));
              });
            } else
              ["r", "g", "b"].forEach(
                u !== -1
                  ? (v) => {
                      y.color[v] = s[u][v];
                    }
                  : (v) => {
                      y.color[v] = s[m][v];
                    }
              );
          }
      }
      for (const p of s) i.push({ color: p.color, position: p.position });
    }
    (i[0].position = 0), (i[i.length - 1].position = 1);
    let r = 0,
      n = 1;
    for (let l = 0; l < this._colorMapSize; ++l) {
      const p = l / this._colorMapSize;
      for (; p > i[n].position; ) r = n++;
      const y = (p - i[r].position) / (i[n].position - i[r].position),
        u = i[r].color,
        m = i[n].color,
        v = new B();
      ["r", "g", "b"].forEach((k) => {
        v[k] = Math.round(X(u[k], m[k], y));
      }),
        (v.a = H(1 - X(u.a, m.a, y) / 255, 0, 1)),
        e.push(v);
    }
    return e;
  }
  getColorForContinuousDataValue(e, i) {
    const s = this.rasterizedTransferFunction;
    if (
      this.colorStops.length < 2 ||
      !Array.isArray(this.stretchRange) ||
      this.stretchRange.length < 2 ||
      s.length < 256
    )
      return null;
    let r = this.stretchRange[0],
      n = this.stretchRange[1];
    if (r > n) {
      const p = r;
      (r = n), (n = p);
    }
    e = H(e, r, n);
    const l =
      s[Math.round(((e - r) / (n - r)) * (this._colorMapSize - 1))].clone();
    return i || (l.a = 1), l;
  }
};
t(
  [o({ type: ["linear", "nearest"], json: { write: !0 } })],
  N.prototype,
  "interpolation",
  void 0
),
  t(
    [o({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })],
    N.prototype,
    "stretchRange",
    void 0
  ),
  t(
    [
      o({
        type: c.ofType(ae),
        json: {
          write: {
            enabled: !0,
            overridePolicy() {
              return {
                enabled: !!this.colorStops && this.colorStops.length > 0,
              };
            },
          },
        },
      }),
    ],
    N.prototype,
    "colorStops",
    null
  ),
  t(
    [
      o({
        type: c.ofType(pe),
        json: {
          read: { source: "alphaStops" },
          write: {
            enabled: !0,
            target: "alphaStops",
            overridePolicy() {
              return {
                enabled: !!this.opacityStops && this.opacityStops.length > 0,
              };
            },
          },
        },
      }),
    ],
    N.prototype,
    "opacityStops",
    null
  ),
  t([o({ type: yt, json: { write: !0 } })], N.prototype, "rangeFilter", void 0),
  t(
    [o({ type: [B], clonable: !1, json: { read: !1 } })],
    N.prototype,
    "rasterizedTransferFunction",
    null
  ),
  (N = t([d("esri.layers.voxel.VoxelTransferFunctionStyle")], N));
const dt = N;
let M = class extends D(h) {
  constructor() {
    super(...arguments),
      (this.color = B.fromArray([0, 0, 0, 0])),
      (this.value = 0),
      (this.enabled = !0),
      (this.label = "");
  }
};
t(
  [o({ type: B, json: { type: [V], write: { enabled: !0, isRequired: !0 } } })],
  M.prototype,
  "color",
  void 0
),
  t(
    [o({ type: V, json: { write: { enabled: !0, isRequired: !0 } } })],
    M.prototype,
    "value",
    void 0
  ),
  t(
    [o({ type: Boolean, json: { default: !0, write: !0 } })],
    M.prototype,
    "enabled",
    void 0
  ),
  t([o({ type: String, json: { write: !0 } })], M.prototype, "label", void 0),
  (M = t([d("esri.layers.voxel.VoxelUniqueValue")], M));
const De = M;
var ue;
let L = (ue = class extends h {
  constructor(e) {
    super(e),
      (this.variableId = 0),
      (this.label = ""),
      (this.transferFunction = null),
      (this.uniqueValues = null),
      (this.isosurfaces = null),
      (this.uniqueValues = new (c.ofType(De))()),
      (this.isosurfaces = new (c.ofType(Ae))());
  }
  clone() {
    return new ue({
      variableId: this.variableId,
      label: this.label,
      transferFunction: Q(this.transferFunction),
      uniqueValues: Q(this.uniqueValues),
      isosurfaces: Q(this.isosurfaces),
    });
  }
});
t(
  [o({ type: V, json: { write: { enabled: !0, isRequired: !0 } } })],
  L.prototype,
  "variableId",
  void 0
),
  t([o({ type: String, json: { write: !0 } })], L.prototype, "label", void 0),
  t(
    [
      o({
        type: dt,
        json: {
          write: {
            enabled: !0,
            overridePolicy() {
              return {
                enabled: !this.uniqueValues || this.uniqueValues.length < 1,
              };
            },
          },
        },
      }),
    ],
    L.prototype,
    "transferFunction",
    void 0
  ),
  t(
    [
      o({
        type: c.ofType(De),
        json: {
          write: {
            enabled: !0,
            overridePolicy() {
              return {
                enabled: !!this.uniqueValues && this.uniqueValues.length > 0,
              };
            },
          },
        },
      }),
    ],
    L.prototype,
    "uniqueValues",
    void 0
  ),
  t(
    [
      o({
        type: c.ofType(Ae),
        json: {
          write: {
            enabled: !0,
            overridePolicy() {
              const e = !this.uniqueValues || this.uniqueValues.length < 1,
                i = !!this.isosurfaces && this.isosurfaces.length > 0;
              return { enabled: e && i };
            },
          },
        },
      }),
    ],
    L.prototype,
    "isosurfaces",
    void 0
  ),
  (L = ue = t([d("esri.layers.voxel.VoxelVariableStyle")], L));
const qe = L;
let Y = class extends h {
  constructor() {
    super(...arguments), (this.values = null);
  }
};
t([o({ type: [Number], json: { write: !0 } })], Y.prototype, "values", void 0),
  (Y = t([d("esri.layers.voxel.VoxelIrregularSpacing")], Y));
const ht = Y;
let $ = class extends h {
  constructor() {
    super(...arguments), (this.scale = 1), (this.offset = 0);
  }
};
t([o({ type: Number, json: { write: !0 } })], $.prototype, "scale", void 0),
  t([o({ type: Number, json: { write: !0 } })], $.prototype, "offset", void 0),
  ($ = t([d("esri.layers.voxel.VoxelRegularSpacing")], $));
const mt = $;
let b = class extends h {
  constructor() {
    super(...arguments),
      (this.irregularSpacing = null),
      (this.isPositiveUp = !0),
      (this.isWrappedDateLine = !1),
      (this.label = null),
      (this.name = null),
      (this.quantity = null),
      (this.regularSpacing = null),
      (this.size = 0),
      (this.unit = null);
  }
  get isRegular() {
    return (
      (this.irregularSpacing == null || this.irregularSpacing === void 0) &&
      this.regularSpacing !== null
    );
  }
  getRange() {
    var e;
    return this.isRegular
      ? [
          this.regularSpacing.offset,
          this.regularSpacing.offset +
            this.regularSpacing.scale * (this.size - 1),
        ]
      : Array.isArray(
          (e = this.irregularSpacing) == null ? void 0 : e.values
        ) && this.irregularSpacing.values.length > 1
      ? [
          this.irregularSpacing.values[0],
          this.irregularSpacing.values[this.irregularSpacing.values.length - 1],
        ]
      : [0, 0];
  }
};
t(
  [o({ type: ht, json: { write: !0 } })],
  b.prototype,
  "irregularSpacing",
  void 0
),
  t(
    [o({ type: Boolean, json: { write: !0 } })],
    b.prototype,
    "isPositiveUp",
    void 0
  ),
  t(
    [o({ type: Boolean, json: { write: !0 } })],
    b.prototype,
    "isWrappedDateLine",
    void 0
  ),
  t([o({ type: String, json: { write: !0 } })], b.prototype, "label", void 0),
  t([o({ type: String, json: { write: !0 } })], b.prototype, "name", void 0),
  t(
    [o({ type: String, json: { write: !0 } })],
    b.prototype,
    "quantity",
    void 0
  ),
  t(
    [o({ type: mt, json: { write: !0 } })],
    b.prototype,
    "regularSpacing",
    void 0
  ),
  t([o({ type: Number, json: { write: !0 } })], b.prototype, "size", void 0),
  t([o({ type: String, json: { write: !0 } })], b.prototype, "unit", void 0),
  t([o({ type: Boolean, json: { read: !1 } })], b.prototype, "isRegular", null),
  (b = t([d("esri.layers.voxel.VoxelDimension")], b));
const vt = b,
  Fe = "esri.layers.voxel.VoxelVolume",
  we = ze.getLogger(Fe);
let S = class extends h {
  constructor(e) {
    super(e),
      (this.id = 0),
      (this.dimensions = null),
      (this.spatialReference = Re.WGS84);
  }
  get zDimension() {
    if (
      !this.dimensions ||
      !Array.isArray(this.dimensions) ||
      this.dimensions.length !== 4
    )
      return -1;
    for (let e = 2; e < 4; ++e) if (this.dimensions[e].size > 0) return e;
    return -1;
  }
  get isValid() {
    return (
      !!this.dimensions &&
      !!Array.isArray(this.dimensions) &&
      this.dimensions.length === 4 &&
      !(this.dimensions[0].size < 1 || this.dimensions[1].size < 1) &&
      !(this.zDimension === -1 || this.dimensions[this.zDimension].size < 1)
    );
  }
  get originInLayerSpace3D() {
    if (!this.isValid || this.volumeType === "xyt") return [0, 0, 0];
    const e = this.dimensions[0].getRange(),
      i = this.dimensions[1].getRange(),
      s = this.dimensions[2],
      r = s.isRegular ? s.getRange() : [0, s.size];
    return [e[0], i[0], r[0]];
  }
  get voxelSizeInLayerSpaceSigned() {
    if (!this.isValid || this.volumeType === "xyt") return [0, 0, 0];
    const e = this.dimensions[0].getRange(),
      i = this.dimensions[1].getRange(),
      s = this.dimensions[2],
      r = s.isRegular ? s.getRange() : [0, s.size],
      n = [this.sizeInVoxels[0], this.sizeInVoxels[1], this.sizeInVoxels[2]];
    for (let l = 0; l < 3; ++l) n[l] < 2 ? (n[l] = 1) : (n[l] -= 1);
    return (
      s.isRegular && !s.isPositiveUp && (n[2] *= -1),
      [(e[1] - e[0]) / n[0], (i[1] - i[0]) / n[1], (r[1] - r[0]) / n[2]]
    );
  }
  get volumeType() {
    if (this.isValid) {
      const e = this.dimensions[2].size > 0,
        i = this.dimensions[3].size > 0;
      if (!e && i) return "xyt";
      if (e && i) return "xyzt";
    }
    return "xyz";
  }
  get sizeInVoxels() {
    if (!this.isValid) return [0, 0, 0];
    const e = this.zDimension;
    return [
      this.dimensions[0].size,
      this.dimensions[1].size,
      this.dimensions[e].size,
    ];
  }
  computeVoxelSpaceLocation(e) {
    var r;
    if (!this.isValid) return [0, 0, 0];
    if (this.volumeType === "xyt")
      return (
        we.error("computeVoxelSpacePosition cannot be used with XYT volumes."),
        [0, 0, 0]
      );
    if (!Ee(this.spatialReference, e.spatialReference))
      return (
        we.error(
          "pos argument should have the same spatial reference as the VoxelLayer."
        ),
        [0, 0, 0]
      );
    const i = G(e.x, e.y, e.z ?? 0);
    ke(i, i, this.originInLayerSpace3D),
      Ce(i, i, this.voxelSizeInLayerSpaceSigned);
    const s = this.dimensions[this.zDimension];
    if (
      !s.isRegular &&
      Array.isArray((r = s.irregularSpacing) == null ? void 0 : r.values) &&
      s.irregularSpacing.values.length > 1
    ) {
      const n = e.z ?? 0,
        l = s.irregularSpacing.values,
        p = s.isPositiveUp ? 1 : -1,
        y = l.reduce((u, m) =>
          Math.abs(p * m - n) < Math.abs(p * u - n) ? m : u
        );
      for (let u = 0; u < l.length; ++u)
        if (l[u] === y) {
          i[2] = u;
          break;
        }
    }
    return [i[0], i[1], i[2]];
  }
  computeLayerSpaceLocation(e) {
    var r;
    if (!this.isValid)
      return new se({ x: 0, y: 0, spatialReference: this.spatialReference });
    const i = Ue(e);
    if (
      (We(i, i, this.voxelSizeInLayerSpaceSigned),
      Je(i, i, this.originInLayerSpace3D),
      this.volumeType === "xyt")
    )
      return new se({
        x: i[0],
        y: i[1],
        spatialReference: this.spatialReference,
      });
    const s = this.dimensions[this.zDimension];
    return (
      s.isRegular ||
        (Array.isArray((r = s.irregularSpacing) == null ? void 0 : r.values) &&
          (e[2] < 0
            ? (i[2] = s.irregularSpacing.values[0])
            : e[2] < s.irregularSpacing.values.length
            ? (i[2] = s.irregularSpacing.values[e[2]])
            : (i[2] =
                s.irregularSpacing.values[
                  s.irregularSpacing.values.length - 1
                ]),
          s.isPositiveUp || (i[2] *= -1))),
      new se({
        x: i[0],
        y: i[1],
        z: i[2],
        spatialReference: this.spatialReference,
      })
    );
  }
};
t(
  [o({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })],
  S.prototype,
  "id",
  void 0
),
  t(
    [o({ type: [vt], json: { write: { enabled: !0, isRequired: !0 } } })],
    S.prototype,
    "dimensions",
    void 0
  ),
  t(
    [o({ type: Re, json: { read: { enabled: !1 } } })],
    S.prototype,
    "spatialReference",
    void 0
  ),
  t([o({ type: Number, json: { read: !1 } })], S.prototype, "zDimension", null),
  t([o({ type: [Boolean], json: { read: !1 } })], S.prototype, "isValid", null),
  t(
    [o({ type: [Number], json: { read: !1 } })],
    S.prototype,
    "originInLayerSpace3D",
    null
  ),
  t(
    [o({ type: [Number], json: { read: !1 } })],
    S.prototype,
    "voxelSizeInLayerSpaceSigned",
    null
  ),
  t(
    [o({ type: ["xyz", "xyzt", "xyt"], json: { read: { enabled: !1 } } })],
    S.prototype,
    "volumeType",
    null
  ),
  t(
    [o({ type: [Number], json: { read: !1 } })],
    S.prototype,
    "sizeInVoxels",
    null
  ),
  (S = t([d(Fe)], S));
const Le = S;
var ce;
let _ = (ce = class extends h {
  constructor() {
    super(...arguments),
      (this.apronWidth = 1),
      (this.brickSize = [32, 32, 32]),
      (this.maxLodLevel = 0),
      (this.nodeSize = [4, 4, 4]);
  }
  isValid() {
    const e = new ce();
    return (
      e.apronWidth === this.apronWidth &&
      e.maxLodLevel === this.maxLodLevel &&
      !!this.brickSize &&
      !!this.nodeSize &&
      !(!Array.isArray(this.brickSize) || !Array.isArray(this.nodeSize)) &&
      this.brickSize.length === 3 &&
      this.nodeSize.length === 3 &&
      this.brickSize[0] === 32 &&
      this.brickSize[1] === 32 &&
      this.brickSize[2] === 32 &&
      this.nodeSize[0] === 4 &&
      this.nodeSize[1] === 4 &&
      this.nodeSize[2] === 4
    );
  }
});
t(
  [o({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })],
  _.prototype,
  "apronWidth",
  void 0
),
  t(
    [o({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })],
    _.prototype,
    "brickSize",
    void 0
  ),
  t(
    [o({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })],
    _.prototype,
    "maxLodLevel",
    void 0
  ),
  t(
    [o({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })],
    _.prototype,
    "nodeSize",
    void 0
  ),
  (_ = ce = t([d("esri.layers.voxel.VoxelVolumeIndex")], _));
const gt = _;
let T = class extends D(h) {
  constructor(e) {
    super(e),
      (this.enabled = !0),
      (this.label = ""),
      (this.normal = null),
      (this.point = null);
  }
  get orientation() {
    if (!Array.isArray(this.normal) || this.normal.length !== 3) return 0;
    const [e, i] = E(this.normal);
    return j.normalize(z(e), 0, !0);
  }
  set orientation(e) {
    const i = ee(e, this.tilt);
    this._set("normal", i), this._set("orientation", e);
  }
  get tilt() {
    if (!Array.isArray(this.normal) || this.normal.length !== 3) return 0;
    const [e, i] = E(this.normal);
    return j.normalize(z(i), 0, !0);
  }
  set tilt(e) {
    const i = ee(this.orientation, e);
    this._set("normal", i), this._set("tilt", e);
  }
};
t(
  [o({ type: Boolean, json: { default: !0, write: !0 } })],
  T.prototype,
  "enabled",
  void 0
),
  t([o({ type: String, json: { write: !0 } })], T.prototype, "label", void 0),
  t(
    [
      o({
        type: Number,
        json: { read: !1 },
        clonable: !1,
        range: { min: 0, max: 360 },
      }),
      K((e) => j.normalize(z(e), 0, !0)),
    ],
    T.prototype,
    "orientation",
    null
  ),
  t(
    [
      o({
        type: Number,
        json: { read: !1 },
        clonable: !1,
        range: { min: 0, max: 360 },
      }),
      K((e) => j.normalize(z(e), 0, !0)),
    ],
    T.prototype,
    "tilt",
    null
  ),
  t(
    [o({ type: [Number], json: { write: !0 } })],
    T.prototype,
    "normal",
    void 0
  ),
  t([o({ type: [Number], json: { write: !0 } })], T.prototype, "point", void 0),
  (T = t([d("esri.layers.voxel.VoxelDynamicSection")], T));
const ye = T;
var de;
let A = (de = class extends h {
  constructor(e) {
    super(e),
      (this.volumeId = 0),
      (this.verticalExaggeration = 1),
      (this.exaggerationMode = "scale-height"),
      (this.verticalOffset = 0),
      (this.slices = new (c.ofType(te))()),
      (this.dynamicSections = new (c.ofType(ye))());
  }
  set slices(e) {
    this._set("slices", Z(e, this._get("slices"), c.ofType(te)));
  }
  set dynamicSections(e) {
    this._set(
      "dynamicSections",
      Z(e, this._get("dynamicSections"), c.ofType(ye))
    );
  }
  clone() {
    return new de({
      volumeId: this.volumeId,
      verticalExaggeration: this.verticalExaggeration,
      exaggerationMode: this.exaggerationMode,
      verticalOffset: this.verticalOffset,
      slices: Q(this.slices),
      dynamicSections: Q(this.dynamicSections),
    });
  }
});
t(
  [o({ type: V, json: { write: { enabled: !0, isRequired: !0 } } })],
  A.prototype,
  "volumeId",
  void 0
),
  t(
    [o({ type: Number, json: { default: 1, write: !0 } })],
    A.prototype,
    "verticalExaggeration",
    void 0
  ),
  t(
    [
      o({
        type: ["scale-position", "scale-height"],
        json: { default: "scale-height", write: !0 },
      }),
    ],
    A.prototype,
    "exaggerationMode",
    void 0
  ),
  t(
    [o({ type: Number, json: { default: 0, write: !0 } })],
    A.prototype,
    "verticalOffset",
    void 0
  ),
  t(
    [
      o({
        type: c.ofType(te),
        json: {
          write: {
            enabled: !0,
            overridePolicy() {
              return { enabled: !!this.slices && this.slices.length > 0 };
            },
          },
        },
      }),
    ],
    A.prototype,
    "slices",
    null
  ),
  t(
    [
      o({
        type: c.ofType(ye),
        json: {
          write: {
            enabled: !0,
            overridePolicy() {
              return {
                enabled:
                  !!this.dynamicSections && this.dynamicSections.length > 0,
              };
            },
          },
        },
      }),
    ],
    A.prototype,
    "dynamicSections",
    null
  ),
  (A = de = t([d("esri.layers.voxel.VoxelVolumeStyle")], A));
const Pe = A,
  Me = "esri.layers.VoxelLayer",
  P = ze.getLogger(Me);
let a = class extends nt($e(Qe(Ge(He(Xe(Ye(rt))))))) {
  constructor(e) {
    super(e),
      (this.serviceRoot = ""),
      (this.operationalLayerType = "Voxel"),
      (this.legendEnabled = !0),
      (this.title = null),
      (this.sections = null),
      (this.currentVariableId = 0),
      (this.volumeStyles = null),
      (this.renderMode = "volume"),
      (this.variableStyles = null),
      (this.enableSlices = !0),
      (this.enableSections = !0),
      (this.enableDynamicSections = !0),
      (this.enableIsosurfaces = !0),
      (this.shading = new Te()),
      (this.opacity = 1),
      (this.variables = new c()),
      (this.volumes = new c()),
      (this.index = null),
      (this.minScale = 0),
      (this.maxScale = 0),
      (this.type = "voxel"),
      (this.version = {
        major: Number.NaN,
        minor: Number.NaN,
        versionString: "",
      }),
      (this.fullExtent = null),
      (this.popupEnabled = !0),
      (this.popupTemplate = null),
      (this.test = null),
      (this.volumeStyles = new (c.ofType(Pe))()),
      (this.variableStyles = new (c.ofType(qe))()),
      (this.sections = new (c.ofType(le))()),
      e != null &&
        e.constantUpscaling &&
        (this.test = { constantUpscaling: !0 });
  }
  set url(e) {
    this._set("url", Ke(e, P));
  }
  load(e) {
    const i = q(e) ? e.signal : null,
      s = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e)
        .catch(Ze)
        .then(() => this._fetchService(i))
        .then(() => (this.serviceRoot = this.url));
    return this.addResolvingPromise(s), Promise.resolve(this);
  }
  read(e, i) {
    super.read(e, i);
    for (const s of this.volumes) s.spatialReference = this.spatialReference;
  }
  readVersion(e, i) {
    return super.parseVersionString(e);
  }
  validateLayer(e) {
    if (e.layerType && e.layerType !== this.operationalLayerType)
      throw new re(
        "voxel-layer:layer-type-not-supported",
        "VoxelLayer does not support this layer type",
        { layerType: e.layerType }
      );
    if (
      isNaN(this.version.major) ||
      isNaN(this.version.minor) ||
      this.version.major < 3
    )
      throw new re(
        "layer:service-version-not-supported",
        "Service version is not supported.",
        {
          serviceVersion: this.version.versionString,
          supportedVersions: "3.x",
        }
      );
    if (this.version.major > 3)
      throw new re(
        "layer:service-version-too-new",
        "Service version is too new.",
        {
          serviceVersion: this.version.versionString,
          supportedVersions: "3.x",
        }
      );
  }
  readFullExtent(e, i, s) {
    if (e != null && typeof e == "object") {
      const r = Ie.fromJSON(e, s);
      if (r.zmin === 0 && r.zmax === 0 && Array.isArray(i.volumes)) {
        const n = Le.fromJSON(i.volumes[0]);
        if (n.isValid && n.volumeType !== "xyt") {
          const l = n.dimensions[2];
          if (l.isRegular) {
            let p = l.regularSpacing.offset,
              y =
                l.regularSpacing.offset + l.regularSpacing.scale * (l.size - 1);
            if (p > y) {
              const u = p;
              (p = y), (y = u);
            }
            (r.zmin = p), (r.zmax = y);
          }
        }
      }
      return r;
    }
    return null;
  }
  get voxelFields() {
    const e = [
        new O({
          name: "Voxel.ServiceValue",
          alias: "Value",
          domain: null,
          editable: !1,
          length: 128,
          type: "string",
        }),
        new O({
          name: "Voxel.ServiceVariableLabel",
          alias: "Variable",
          domain: null,
          editable: !1,
          length: 128,
          type: "string",
        }),
        new O({
          name: "Voxel.Position",
          alias: "Voxel Position",
          domain: null,
          editable: !1,
          length: 128,
          type: "string",
        }),
      ],
      i = this.getVolume(null);
    if (q(i)) {
      if (i.volumeType === "xyzt" || i.volumeType === "xyt") {
        const s = new O({
          name: "Voxel.ServiceLocalTime",
          alias: "Local Time",
          domain: null,
          editable: !1,
          length: 128,
          type: "string",
        });
        e.push(s);
        const r = new O({
          name: "Voxel.ServiceNativeTime",
          alias: "Native Time",
          domain: null,
          editable: !1,
          length: 128,
          type: "string",
        });
        e.push(r);
      }
      if (i.volumeType !== "xyt") {
        const s = new O({
          name: "Voxel.ServiceDepth",
          alias: "Depth",
          domain: null,
          editable: !1,
          length: 128,
          type: "string",
        });
        e.push(s);
      }
    }
    return e;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  createPopupTemplate(e) {
    const i = this.voxelFields,
      s = this.title;
    return et({ fields: i, title: s }, e);
  }
  getConfiguration() {
    var i, s;
    const e = {
      layerType: this.operationalLayerType,
      version: this.version.versionString,
      name: this.title,
      spatialReference: this.spatialReference,
      fullExtent: this.fullExtent,
      volumes: this.volumes.toJSON(),
      variables: this.variables.toJSON(),
      index: (i = this.index) == null ? void 0 : i.toJSON(),
      sections: this.getSections(),
      style: {
        volumeStyles: this.getVolumeStyles(),
        currentVariableId: this.currentVariableId,
        renderMode: this.renderMode,
        variableStyles: this.getVariableStyles(),
        enableSections: this.enableSections,
        enableDynamicSections: this.enableDynamicSections,
        enableIsosurfaces: this.enableIsosurfaces,
        enableSlices: this.enableSlices,
        shading: this.shading,
      },
    };
    return e.index && (s = this.index) != null && s.isValid()
      ? JSON.stringify(e)
      : "";
  }
  getVariableStyle(e) {
    let i = -1;
    if (
      ((i = q(e) ? e : this.currentVariableId),
      !this.variableStyles || i === -1)
    )
      return null;
    const s = this.variableStyles.findIndex((r) => r.variableId === i);
    return s < 0 ? null : this.variableStyles.getItemAt(s);
  }
  getVariable(e) {
    let i = -1;
    if (((i = q(e) ? e : this.currentVariableId), !this.variables || i === -1))
      return null;
    const s = this.variables.findIndex((r) => r.id === i);
    return s < 0 ? null : this.variables.getItemAt(s);
  }
  getVolume(e) {
    const i = this.getVariable(e);
    return q(i) ? this.volumes.find(({ id: s }) => s === i.volumeId) : null;
  }
  getVolumeStyle(e) {
    const i = this.getVariable(e);
    return q(i)
      ? this.volumeStyles.find(({ volumeId: s }) => s === i.volumeId)
      : null;
  }
  getColorForContinuousDataValue(e, i, s) {
    var p;
    const r = this.getVariable(e);
    if (
      tt(r) ||
      ((p = r.renderingFormat) == null ? void 0 : p.continuity) !==
        "continuous" ||
      !this.variableStyles
    )
      return null;
    const n = this.variableStyles.findIndex((y) => y.variableId === e);
    if (n < 0) return null;
    const l = this.variableStyles.getItemAt(n);
    return l.transferFunction
      ? l.transferFunction.getColorForContinuousDataValue(i, s)
      : null;
  }
  getSections() {
    const e = [];
    for (const i of this.sections)
      e.push(
        new le({
          enabled: i.enabled,
          href: i.href,
          id: i.id,
          label: i.label,
          normal: i.normal,
          point: i.point,
          sizeInPixel: i.sizeInPixel,
          slices: i.slices,
          timeId: i.timeId,
          variableId: i.variableId,
        })
      );
    return e;
  }
  getVariableStyles() {
    const e = [];
    for (const i of this.variableStyles) {
      const s = this._getVariable(i);
      if (q(s)) {
        const r = i.clone();
        r.isosurfaces.length > 4 &&
          ((r.isosurfaces = r.isosurfaces.slice(0, 3)),
          P.error(
            "A maximum of 4 isosurfaces are supported for Voxel Layers."
          ));
        for (const n of r.isosurfaces)
          if (!n.colorLocked) {
            const l = this.getColorForContinuousDataValue(
              r.variableId,
              n.value,
              !1
            );
            l === null || l.equals(n.color) || (n.color = l);
          }
        if (s.renderingFormat.continuity === "continuous")
          (r.transferFunction === null ||
            r.transferFunction.colorStops.length < 2) &&
            P.error(
              `VoxelVariableStyle for variable ${s.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`
            ),
            r.transferFunction !== null &&
              ((Array.isArray(r.transferFunction.stretchRange) &&
                r.transferFunction.stretchRange.length === 2) ||
                (P.error(
                  `VoxelVariableStyle for variable ${s.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`
                ),
                (r.transferFunction.stretchRange = [0, 1]),
                r.transferFunction.colorStops.removeAll()));
        else if (s.renderingFormat.continuity === "discrete")
          if (i.uniqueValues.length === 0)
            P.error(
              `VoxelVariableStyle for variable ${s.id} is invalid. Unique values are required for discrete Voxel Layer variables.`
            );
          else
            for (const n of i.uniqueValues)
              (n.label !== null && n.label !== void 0) ||
                n.value === null ||
                n.value === void 0 ||
                (n.label = n.value.toString());
        e.push(r);
      } else
        P.error(
          `VoxelVariable ID=${i.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`
        );
    }
    return e;
  }
  getVolumeStyles() {
    const e = [];
    for (const i of this.volumeStyles) {
      const s = this._getVolumeFromVolumeId(i.volumeId);
      if (q(s)) {
        const r = i.clone();
        for (const n of r.slices)
          this._isPlaneValid(n, [0, 1, s.zDimension], s.dimensions) ||
            ((n.enabled = !1), (n.label = "invalid"));
        for (const n of r.dynamicSections)
          this._isPlaneValid(n, [0, 1, s.zDimension], s.dimensions) ||
            ((n.enabled = !1), (n.label = "invalid"));
        e.push(r);
      } else
        P.error(
          `VoxelVolume ID=${i.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`
        );
    }
    return e;
  }
  _getVariable(e) {
    const i = e.variableId;
    for (const s of this.variables) if (s.id === i) return s;
    return null;
  }
  _getVolumeFromVolumeId(e) {
    for (const i of this.volumes) if (i.id === e) return i;
    return null;
  }
  _isPlaneValid(e, i, s) {
    if (
      !e.point ||
      !Array.isArray(e.point) ||
      e.point.length !== 3 ||
      !e.normal ||
      !Array.isArray(e.normal) ||
      e.normal.length !== 3
    )
      return !1;
    for (let n = 0; n < 3; ++n) {
      const l = e.point[n];
      if (l < 0 || l >= s[i[n]].size) return !1;
    }
    const r = G(e.normal[0], e.normal[1], e.normal[2]);
    return (
      he(r, r),
      !(Math.abs(r[0]) + Math.abs(r[1]) + Math.abs(r[2]) < 1e-6) &&
        ((e.normal[0] = r[0]), (e.normal[1] = r[1]), (e.normal[2] = r[2]), !0)
    );
  }
};
t([o({ type: ["Voxel"] })], a.prototype, "operationalLayerType", void 0),
  t([o(it)], a.prototype, "legendEnabled", void 0),
  t([o({ json: { write: !0 } })], a.prototype, "title", void 0),
  t([o(ot)], a.prototype, "url", null),
  t(
    [
      o({
        type: c.ofType(le),
        json: {
          origins: {
            "web-scene": { name: "layerDefinition.sections", write: !0 },
          },
        },
      }),
    ],
    a.prototype,
    "sections",
    void 0
  ),
  t(
    [
      o({
        type: V,
        json: {
          origins: {
            "web-scene": {
              name: "layerDefinition.style.currentVariableId",
              write: { enabled: !0, isRequired: !0, ignoreOrigin: !0 },
            },
            service: { name: "style.currentVariableId" },
          },
        },
      }),
    ],
    a.prototype,
    "currentVariableId",
    void 0
  ),
  t(
    [
      o({
        type: c.ofType(Pe),
        json: {
          origins: {
            "web-scene": {
              name: "layerDefinition.style.volumeStyles",
              write: !0,
            },
            service: { name: "style.volumeStyles" },
          },
        },
      }),
    ],
    a.prototype,
    "volumeStyles",
    void 0
  ),
  t(
    [
      o({
        type: ["volume", "surfaces"],
        json: {
          origins: {
            "web-scene": {
              name: "layerDefinition.style.renderMode",
              write: !0,
            },
            service: { name: "style.renderMode" },
          },
        },
      }),
    ],
    a.prototype,
    "renderMode",
    void 0
  ),
  t(
    [
      o({
        type: c.ofType(qe),
        json: {
          origins: {
            "web-scene": {
              name: "layerDefinition.style.variableStyles",
              write: !0,
            },
            service: { name: "style.variableStyles" },
          },
        },
      }),
    ],
    a.prototype,
    "variableStyles",
    void 0
  ),
  t(
    [
      o({
        type: Boolean,
        json: {
          origins: {
            "web-scene": {
              name: "layerDefinition.style.enableSlices",
              write: !0,
            },
            service: { name: "style.enableSlices" },
          },
        },
      }),
    ],
    a.prototype,
    "enableSlices",
    void 0
  ),
  t(
    [
      o({
        type: Boolean,
        json: {
          origins: {
            "web-scene": {
              name: "layerDefinition.style.enableSections",
              write: !0,
            },
            service: { name: "style.enableSections" },
          },
        },
      }),
    ],
    a.prototype,
    "enableSections",
    void 0
  ),
  t(
    [
      o({
        type: Boolean,
        json: {
          origins: {
            "web-scene": {
              name: "layerDefinition.style.enableDynamicSections",
              write: !0,
            },
            service: { name: "style.enableDynamicSections" },
          },
        },
      }),
    ],
    a.prototype,
    "enableDynamicSections",
    void 0
  ),
  t(
    [
      o({
        type: Boolean,
        json: {
          origins: {
            "web-scene": {
              name: "layerDefinition.style.enableIsosurfaces",
              write: !0,
            },
            service: { name: "style.enableIsosurfaces" },
          },
        },
      }),
    ],
    a.prototype,
    "enableIsosurfaces",
    void 0
  ),
  t(
    [
      o({
        type: Te,
        json: {
          origins: {
            "web-scene": { name: "layerDefinition.style.shading", write: !0 },
            service: { name: "style.shading" },
          },
        },
      }),
    ],
    a.prototype,
    "shading",
    void 0
  ),
  t([o({ type: ["show", "hide"] })], a.prototype, "listMode", void 0),
  t(
    [
      o({
        type: Number,
        range: { min: 0, max: 1 },
        nonNullable: !0,
        json: {
          read: !1,
          write: !1,
          origins: {
            "web-scene": { read: !1, write: !1 },
            "portal-item": { read: !1, write: !1 },
          },
        },
      }),
    ],
    a.prototype,
    "opacity",
    void 0
  ),
  t([o({ type: c.ofType(ct) })], a.prototype, "variables", void 0),
  t([o({ type: c.ofType(Le) })], a.prototype, "volumes", void 0),
  t([o({ type: gt })], a.prototype, "index", void 0),
  t(
    [
      o({
        type: Number,
        json: {
          name: "layerDefinition.minScale",
          read: !1,
          write: !1,
          origins: { service: { read: !1, write: !1 } },
        },
      }),
    ],
    a.prototype,
    "minScale",
    void 0
  ),
  t(
    [
      o({
        type: Number,
        json: {
          name: "layerDefinition.maxScale",
          read: !1,
          write: !1,
          origins: { service: { read: !1, write: !1 } },
        },
      }),
    ],
    a.prototype,
    "maxScale",
    void 0
  ),
  t([o({ json: { read: !1 }, readOnly: !0 })], a.prototype, "type", void 0),
  t(
    [o({ readOnly: !0, json: { name: "serviceVersion" } })],
    a.prototype,
    "version",
    void 0
  ),
  t([ge("service", "version")], a.prototype, "readVersion", null),
  t([o({ type: Ie })], a.prototype, "fullExtent", void 0),
  t(
    [ge("service", "fullExtent", ["fullExtent"])],
    a.prototype,
    "readFullExtent",
    null
  ),
  t(
    [o({ readOnly: !0, clonable: !1, json: { read: !1 } })],
    a.prototype,
    "voxelFields",
    null
  ),
  t([o(st)], a.prototype, "popupEnabled", void 0),
  t([o({ readOnly: !0 })], a.prototype, "defaultPopupTemplate", null),
  (a = t([d(Me)], a));
const Pt = a;
export { Pt as default };
