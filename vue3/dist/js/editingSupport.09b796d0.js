import {
  bO as _,
  ii as C,
  ij as N,
  s,
  ik as V,
  r as v,
  dO as U,
  P as O,
  d3 as P,
  dp as W,
  al as j,
  t as x,
  il as q,
} from "./index.8fd7165c.js";
import { E as z } from "./assetEditingSupport.2cebf928.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
var E;
async function se(e, t, o, n = {}) {
  var h;
  let a, c;
  const u = {
    edits: o,
    result: new Promise((d, b) => {
      (a = d), (c = b);
    }),
  };
  e.emit("apply-edits", u);
  try {
    const { results: d, edits: b } = await M(e, t, o, n),
      y = (i) => i.filter((l) => !l.error).map(_),
      m = {
        edits: b,
        addedFeatures: y(d.addFeatureResults),
        updatedFeatures: y(d.updateFeatureResults),
        deletedFeatures: y(d.deleteFeatureResults),
        addedAttachments: y(d.addAttachmentResults),
        updatedAttachments: y(d.updateAttachmentResults),
        deletedAttachments: y(d.deleteAttachmentResults),
        exceededTransferLimit: !1,
      };
    return (
      (h = d.editedFeatureResults) != null &&
        h.length &&
        (m.editedFeatures = d.editedFeatureResults),
      (m.addedFeatures.length ||
        m.updatedFeatures.length ||
        m.deletedFeatures.length ||
        m.addedAttachments.length ||
        m.updatedAttachments.length ||
        m.deletedAttachments.length) &&
        (e.emit("edits", m), C(e) && N.emit("edits", { layer: e, event: m })),
      a(m),
      d
    );
  } catch (d) {
    throw (c(d), d);
  }
}
async function M(e, t, o, n) {
  var u, h, d, b, y, m;
  if (
    (await e.load(),
    !(function (i) {
      return i && i.applyEdits != null;
    })(t))
  )
    throw new s(
      `${e.type}-layer:no-editing-support`,
      "Layer source does not support applyEdits capability",
      { layer: e }
    );
  if (!V(e))
    throw new s(
      `${e.type}-layer:editing-disabled`,
      "Editing is disabled for layer",
      { layer: e }
    );
  const { edits: a, options: c } = await (async function (i, l, p) {
    const D = l && (l.addFeatures || l.updateFeatures || l.deleteFeatures),
      S = l && (l.addAttachments || l.updateAttachments || l.deleteAttachments),
      L = v(i.infoFor3D);
    if (!l || (!D && !S))
      throw new s(
        `${i.type}-layer:missing-parameters`,
        "'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required"
      );
    const f = U(i);
    if (!f.data.isVersioned && p != null && p.gdbVersion)
      throw new s(
        `${i.type}-layer:invalid-parameter`,
        "'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'"
      );
    if (
      !f.editing.supportsRollbackOnFailure &&
      p != null &&
      p.rollbackOnFailureEnabled
    )
      throw new s(
        `${i.type}-layer:invalid-parameter`,
        "This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'"
      );
    if (!f.editing.supportsGlobalId && p != null && p.globalIdUsed)
      throw new s(
        `${i.type}-layer:invalid-parameter`,
        "This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'"
      );
    if (!f.editing.supportsGlobalId && S)
      throw new s(
        `${i.type}-layer:invalid-parameter`,
        "'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'"
      );
    if (!(p != null && p.globalIdUsed) && S)
      throw new s(
        `${i.type}-layer:invalid-parameter`,
        "When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true"
      );
    const w = { ...p };
    if (
      (w.rollbackOnFailureEnabled != null ||
        f.editing.supportsRollbackOnFailure ||
        (w.rollbackOnFailureEnabled = !0),
      w.rollbackOnFailureEnabled === !1 &&
        w.returnServiceEditsOption === "original-and-current-features")
    )
      throw new s(
        `${i.type}-layer:invalid-parameter`,
        "'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true."
      );
    if (
      !f.editing.supportsReturnServiceEditsInSourceSpatialReference &&
      w.returnServiceEditsInSourceSR
    )
      throw new s(
        `${i.type}-layer:invalid-parameter`,
        "This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'"
      );
    if (
      w.returnServiceEditsInSourceSR &&
      w.returnServiceEditsOption !== "original-and-current-features"
    )
      throw new s(
        `${i.type}-layer:invalid-parameter`,
        "'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'"
      );
    const r = { ...l };
    if (
      ((r.addFeatures =
        l && O.isCollection(l.addFeatures)
          ? l.addFeatures.toArray()
          : r.addFeatures || []),
      (r.updateFeatures =
        l && O.isCollection(l.updateFeatures)
          ? l.updateFeatures.toArray()
          : r.updateFeatures || []),
      (r.deleteFeatures =
        l && O.isCollection(l.deleteFeatures)
          ? l.deleteFeatures.toArray()
          : r.deleteFeatures || []),
      r.addFeatures.length && !f.operations.supportsAdd)
    )
      throw new s(
        `${i.type}-layer:unsupported-operation`,
        "Layer does not support adding features."
      );
    if (r.updateFeatures.length && !f.operations.supportsUpdate)
      throw new s(
        `${i.type}-layer:unsupported-operation`,
        "Layer does not support updating features."
      );
    if (r.deleteFeatures.length && !f.operations.supportsDelete)
      throw new s(
        `${i.type}-layer:unsupported-operation`,
        "Layer does not support deleting features."
      );
    (r.addAttachments = r.addAttachments || []),
      (r.updateAttachments = r.updateAttachments || []),
      (r.deleteAttachments = r.deleteAttachments || []),
      (r.addFeatures = r.addFeatures.map(k)),
      (r.updateFeatures = r.updateFeatures.map(k)),
      (r.addAssets = []);
    const R = (p == null ? void 0 : p.globalIdUsed) || L;
    return (
      r.addFeatures.forEach((g) =>
        (function (F, A, I) {
          T(F, A, I);
        })(g, i, R)
      ),
      r.updateFeatures.forEach((g) =>
        (function (F, A, I) {
          T(F, A, I);
          const $ = U(A);
          if (
            "geometry" in F &&
            v(F.geometry) &&
            !($ != null && $.editing.supportsGeometryUpdate)
          )
            throw new s(
              `${A.type}-layer:unsupported-operation`,
              "Layer does not support geometry updates."
            );
        })(g, i, R)
      ),
      r.deleteFeatures.forEach((g) =>
        (function (F, A, I) {
          T(F, A, I);
        })(g, i, R)
      ),
      r.addAttachments.forEach((g) => G(g, i)),
      r.updateAttachments.forEach((g) => G(g, i)),
      L && (await J(r, i)),
      { edits: await Y(r), options: w }
    );
  })(e, o, n);
  return ((u = a.addFeatures) != null && u.length) ||
    ((h = a.updateFeatures) != null && h.length) ||
    ((d = a.deleteFeatures) != null && d.length) ||
    ((b = a.addAttachments) != null && b.length) ||
    ((y = a.updateAttachments) != null && y.length) ||
    ((m = a.deleteAttachments) != null && m.length)
    ? { edits: a, results: await t.applyEdits(a, c) }
    : {
        edits: a,
        results: {
          addFeatureResults: [],
          updateFeatureResults: [],
          deleteFeatureResults: [],
          addAttachmentResults: [],
          updateAttachmentResults: [],
          deleteAttachmentResults: [],
        },
      };
}
function T(e, t, o) {
  var n, a;
  if (o) {
    if ("attributes" in e && !e.attributes[t.globalIdField])
      throw new s(
        `${t.type}-layer:invalid-parameter`,
        "Feature should have 'globalId' when 'globalIdUsed' is true"
      );
    if (!("attributes" in e) && !e.globalId)
      throw new s(
        `${t.type}-layer:invalid-parameter`,
        "'globalId' of the feature should be passed when 'globalIdUsed' is true"
      );
  }
  if ("geometry" in e && v(e.geometry)) {
    if (
      e.geometry.hasZ &&
      ((n = t.capabilities) == null ? void 0 : n.data.supportsZ) === !1
    )
      throw new s(
        `${t.type}-layer:z-unsupported`,
        "Layer does not support z values while feature has z values."
      );
    if (
      e.geometry.hasM &&
      ((a = t.capabilities) == null ? void 0 : a.data.supportsM) === !1
    )
      throw new s(
        `${t.type}-layer:m-unsupported`,
        "Layer does not support m values while feature has m values."
      );
  }
}
function G(e, t) {
  var a;
  const { feature: o, attachment: n } = e;
  if (!o || ("attributes" in o && !o.attributes[t.globalIdField]))
    throw new s(
      `${t.type}-layer:invalid-parameter`,
      "Attachment should have reference to a feature with 'globalId'"
    );
  if (!("attributes" in o) && !o.globalId)
    throw new s(
      `${t.type}-layer:invalid-parameter`,
      "Attachment should have reference to 'globalId' of the parent feature"
    );
  if (!n.globalId)
    throw new s(
      `${t.type}-layer:invalid-parameter`,
      "Attachment should have 'globalId'"
    );
  if (!n.data && !n.uploadId)
    throw new s(
      `${t.type}-layer:invalid-parameter`,
      "Attachment should have 'data' or 'uploadId'"
    );
  if (!(n.data instanceof File && n.data.name) && !n.name)
    throw new s(
      `${t.type}-layer:invalid-parameter`,
      "'name' is required when attachment is specified as Base64 encoded string using 'data'"
    );
  if (
    !((a = t.capabilities) != null && a.editing.supportsUploadWithItemId) &&
    n.uploadId
  )
    throw new s(
      `${t.type}-layer:invalid-parameter`,
      "This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'"
    );
  if (typeof n.data == "string") {
    const c = P(n.data);
    if (c && !c.isBase64)
      throw new s(
        `${t.type}-layer:invalid-parameter`,
        "Attachment 'data' should be a Blob, File or Base64 encoded string"
      );
  }
}
async function Y(e) {
  const t = e.addFeatures ?? [],
    o = e.updateFeatures ?? [],
    n = t.concat(o).map((h) => h.geometry),
    a = await W(n),
    c = t.length,
    u = o.length;
  return (
    a.slice(0, c).forEach((h, d) => (t[d].geometry = h)),
    a.slice(c, c + u).forEach((h, d) => (o[d].geometry = h)),
    e
  );
}
function k(e) {
  const t = new j();
  return (
    e.attributes || (e.attributes = {}),
    (t.geometry = e.geometry),
    (t.attributes = e.attributes),
    t
  );
}
async function J(e, t) {
  if (x(t.infoFor3D)) return;
  const { infoFor3D: o } = t;
  let n = !1;
  for (const u of o.editFormats)
    if (u === E.GLTF_BINARY) {
      n = !0;
      break;
    }
  const a = [];
  for (const u of e.addFeatures ?? []) a.push(B(u, e, t, n));
  for (const u of e.updateFeatures ?? []) a.push(B(u, e, t, n));
  const c = await Promise.allSettled(a);
  for (const u of c) if (u.status === "rejected") throw u.reason;
}
async function B(e, t, o, n) {
  var y;
  if (x(e.geometry) || e.geometry.type !== "mesh") return;
  const a = e.geometry,
    c = o.globalIdField;
  if (
    v(o.parsedUrl) &&
    v(a.external) &&
    Array.isArray(a.external.source) &&
    a.external.source.length === 1 &&
    "source" in a.external.source[0] &&
    typeof a.external.source[0].source == "string" &&
    a.external.source[0].source.startsWith(o.parsedUrl.path)
  )
    return;
  if (!n)
    throw new s(
      `${o.type}-layer:binary-gltf-asset-not-supported`,
      "3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry."
    );
  const u = await a.toBinaryGLTF({ ignoreLocalTransform: !0 }),
    h = await u.buffer(),
    d = `{${q()}}`,
    b = `${d}.glb`;
  (y = t.addAssets) == null ||
    y.push({
      featureGlobalId: e.getAttribute(c),
      assetMapGlobalId: d,
      assetName: b,
      flags: v(a.transform) && a.transform.geographic ? z.PROJECT_VERTICES : 0,
      data: h.data,
      mimeType: h.type,
      assetType: E.GLTF_BINARY,
      feature: e,
    });
}
(function (e) {
  (e.GLTF_BINARY = "3D_glb"), (e.GLTF_JSON = "3D_gltf");
})(E || (E = {}));
export { se as applyEdits };
