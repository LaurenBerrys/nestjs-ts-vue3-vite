import { c_ as z, r as $ } from "./index.8fd7165c.js";
import { q } from "./Table.e9c997d5.js";
import "./sphere.a87dd95a.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./vue-i18n.67a42238.js";
import "./mat3f64.eb921732.js";
import "./mat4f64.b473928c.js";
import "./quatf64.75f9f553.js";
var _, v;
function G(e) {
  return z(`esri/libs/i3s/${e}`);
}
let T;
var O, h, D, N, x;
async function fe(e) {
  await E();
  const t = [e.geometryBuffer];
  return { result: B(e, t), transferList: t };
}
async function ce(e) {
  var g;
  await E();
  const t = [e.geometryBuffer],
    { geometryBuffer: r } = e,
    f = r.byteLength,
    i = o._malloc(f),
    u = new Uint8Array(o.HEAPU8.buffer, i, f);
  u.set(new Uint8Array(r));
  const s = o.dracoDecompressPointCloudData(i, u.byteLength);
  if ((o._free(i), s.error.length > 0)) throw new Error(`i3s.wasm: ${s.error}`);
  const p =
      ((g = s.featureIds) == null ? void 0 : g.length) > 0
        ? s.featureIds.slice()
        : null,
    y = s.positions.slice();
  return (
    p && t.push(p.buffer),
    t.push(y.buffer),
    { result: { positions: y, featureIds: p }, transferList: t }
  );
}
async function le(e) {
  await E(), K(e);
  const t = { buffer: e.buffer };
  return { result: t, transferList: [t.buffer] };
}
async function ue(e) {
  await E(), J(e);
}
async function de(e) {
  await E(), o.setLegacySchema(e.context, e.jsonSchema);
}
function me(e) {
  k(e);
}
let w, o;
function J(e) {
  const t = e.modifications,
    r = o._malloc(8 * t.length),
    f = new Float64Array(o.HEAPU8.buffer, r, t.length);
  for (let i = 0; i < t.length; ++i) f[i] = t[i];
  o.setModifications(e.context, r, t.length, e.isGeodetic), o._free(r);
}
function B(e, t) {
  if (!o) return null;
  const {
      context: r,
      localOrigin: f,
      globalTrafo: i,
      mbs: u,
      obb: s,
      elevationOffset: p,
      geometryBuffer: y,
      geometryDescriptor: g,
      indexToVertexProjector: H,
      vertexToRenderProjector: Y,
    } = e,
    L = o._malloc(y.byteLength),
    A = o._malloc(33 * Float64Array.BYTES_PER_ELEMENT),
    P = new Uint8Array(o.HEAPU8.buffer, L, y.byteLength);
  P.set(new Uint8Array(y));
  const a = new Float64Array(o.HEAPU8.buffer, A, 33);
  b(a, f);
  let c = a.byteOffset + 3 * a.BYTES_PER_ELEMENT,
    l = new Float64Array(a.buffer, c);
  b(l, i),
    (c += 16 * a.BYTES_PER_ELEMENT),
    (l = new Float64Array(a.buffer, c)),
    b(l, u),
    (c += 4 * a.BYTES_PER_ELEMENT),
    $(s) &&
      ((l = new Float64Array(a.buffer, c)),
      b(l, s.center),
      (c += 3 * a.BYTES_PER_ELEMENT),
      (l = new Float64Array(a.buffer, c)),
      b(l, s.halfSize),
      (c += 3 * a.BYTES_PER_ELEMENT),
      (l = new Float64Array(a.buffer, c)),
      b(l, s.quaternion));
  const R = g,
    V = {
      isDraco: !1,
      isLegacy: !1,
      color: e.layouts.some((d) => d.some((m) => m.name === "color")),
      normal:
        e.needNormals &&
        e.layouts.some((d) => d.some((m) => m.name === "normalCompressed")),
      uv0: e.layouts.some((d) => d.some((m) => m.name === "uv0")),
      uvRegion: e.layouts.some((d) => d.some((m) => m.name === "uvRegion")),
      featureIndex: R.featureIndex,
    },
    n = o.process(
      r,
      !!e.obb,
      L,
      P.byteLength,
      R,
      V,
      A,
      p,
      H,
      Y,
      e.normalReferenceFrame
    );
  if ((o._free(A), o._free(L), n.error.length > 0))
    throw new Error(`i3s.wasm: ${n.error}`);
  if (n.discarded) return null;
  const I = n.componentOffsets.length > 0 ? n.componentOffsets.slice() : null,
    U = n.featureIds.length > 0 ? n.featureIds.slice() : null,
    F = n.interleavedVertedData.slice().buffer,
    C =
      n.indicesType === _.Int16
        ? new Uint16Array(
            n.indices.buffer,
            n.indices.byteOffset,
            n.indices.byteLength / 2
          ).slice()
        : new Uint32Array(
            n.indices.buffer,
            n.indices.byteOffset,
            n.indices.byteLength / 4
          ).slice(),
    M = n.positions.slice(),
    S =
      n.positionIndicesType === _.Int16
        ? new Uint16Array(
            n.positionIndices.buffer,
            n.positionIndices.byteOffset,
            n.positionIndices.byteLength / 2
          ).slice()
        : new Uint32Array(
            n.positionIndices.buffer,
            n.positionIndices.byteOffset,
            n.positionIndices.byteLength / 4
          ).slice(),
    j = {
      layout: e.layouts[0],
      interleavedVertexData: F,
      indices: C,
      hasColors: n.hasColors,
      hasModifications: n.hasModifications,
      positionData: { data: M, indices: S },
    };
  return (
    U && t.push(U.buffer),
    I && t.push(I.buffer),
    t.push(F),
    t.push(C.buffer),
    t.push(M.buffer),
    t.push(S.buffer),
    { componentOffsets: I, featureIds: U, transformedGeometry: j, obb: n.obb }
  );
}
function ye(e) {
  return e === 0
    ? h.Unmodified
    : e === 1
    ? h.PotentiallyModified
    : e === 2
    ? h.Culled
    : h.Unknown;
}
function K(e) {
  const { context: t, buffer: r } = e,
    f = o._malloc(r.byteLength),
    i = r.byteLength / Float64Array.BYTES_PER_ELEMENT,
    u = new Float64Array(o.HEAPU8.buffer, f, i),
    s = new Float64Array(r);
  u.set(s), o.filterOBBs(t, f, i), s.set(u), o._free(f);
}
function k(e) {
  o && o.destroy(e);
}
function b(e, t) {
  for (let r = 0; r < t.length; ++r) e[r] = t[r];
}
function E() {
  return o
    ? Promise.resolve()
    : (w ||
        (w = (T ||
          (T = new Promise((e) =>
            q(() => import("./i3s.bce34c15.js"), [])
              .then((t) => t.i)
              .then(({ default: t }) => {
                const r = t({
                  locateFile: G,
                  onRuntimeInitialized: () => e(r),
                });
                delete r.then;
              })
          ).catch((e) => {
            throw e;
          })),
        T).then((e) => {
          (o = e), (w = null);
        })),
      w);
}
(function (e) {
  (e[(e.None = 0)] = "None"),
    (e[(e.Int16 = 1)] = "Int16"),
    (e[(e.Int32 = 2)] = "Int32");
})(_ || (_ = {})),
  (function (e) {
    (e[(e.Replace = 0)] = "Replace"),
      (e[(e.Outside = 1)] = "Outside"),
      (e[(e.Inside = 2)] = "Inside"),
      (e[(e.Finished = 3)] = "Finished");
  })(v || (v = {})),
  (function (e) {
    (e[(e.Unmodified = 0)] = "Unmodified"),
      (e[(e.Culled = 1)] = "Culled"),
      (e[(e.NotChecked = 2)] = "NotChecked");
  })(O || (O = {})),
  (function (e) {
    (e[(e.Unmodified = 0)] = "Unmodified"),
      (e[(e.PotentiallyModified = 1)] = "PotentiallyModified"),
      (e[(e.Culled = 2)] = "Culled"),
      (e[(e.Unknown = 3)] = "Unknown"),
      (e[(e.NotChecked = 4)] = "NotChecked");
  })(h || (h = {})),
  (function (e) {
    (e[(e.Unknown = 0)] = "Unknown"),
      (e[(e.Uncached = 1)] = "Uncached"),
      (e[(e.Cached = 2)] = "Cached");
  })(D || (D = {})),
  (function (e) {
    (e[(e.None = 0)] = "None"),
      (e[(e.MaxScreenThreshold = 1)] = "MaxScreenThreshold"),
      (e[(e.ScreenSpaceRelative = 2)] = "ScreenSpaceRelative"),
      (e[(e.RemovedFeatureDiameter = 3)] = "RemovedFeatureDiameter"),
      (e[(e.DistanceRangeFromDefaultCamera = 4)] =
        "DistanceRangeFromDefaultCamera");
  })(N || (N = {})),
  (function (e) {
    (e[(e.Hole = 0)] = "Hole"), (e[(e.Leaf = 1)] = "Leaf");
  })(x || (x = {}));
const be = { transform: B, destroy: k };
export {
  me as destroyContext,
  ce as dracoDecompressPointCloudData,
  le as filterObbsForModifications,
  K as filterObbsForModificationsSync,
  E as initialize,
  ye as interpretObbModificationResults,
  fe as process,
  de as setLegacySchema,
  ue as setModifications,
  J as setModificationsSync,
  be as test,
};
