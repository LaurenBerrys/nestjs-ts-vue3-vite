import {
  d0 as P,
  ae as T,
  af as j,
  i3 as z,
  aq as V,
  r as m,
  w as U,
  t as A,
  U as f,
  i4 as $,
  q as B,
  ar as X,
  dj as Y,
  g6 as Z,
  eD as C,
  s as q,
  i5 as H,
  aH as K,
  al as W,
  cM as ee,
  ag as te,
  d3 as Q,
  e1 as se,
} from "./index.8fd7165c.js";
import { E as ae } from "./assetEditingSupport.2cebf928.js";
import { o as re } from "./clientSideDefaults.4b2f5b2f.js";
import { x as ie } from "./QueryTask.6847195b.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./QueryEngineCapabilities.42e44ded.js";
import "./executeForIds.3a002380.js";
const ne = new P({
  originalAndCurrentFeatures: "original-and-current-features",
  none: "none",
});
async function G(t) {
  return typeof t == "string"
    ? Q(t) || { data: t }
    : new Promise((e, a) => {
        const r = new FileReader();
        r.readAsDataURL(t),
          (r.onload = () => e(Q(r.result))),
          (r.onerror = (s) => a(s));
      });
}
const oe = new Set(["Feature Layer", "Table"]),
  ue = new P({
    Started: "published",
    Publishing: "publishing",
    Stopped: "unavailable",
  });
let I = class extends z {
  constructor() {
    super(...arguments),
      (this.type = "feature-layer"),
      (this.refresh = V(async () => {
        var a, r;
        await this.load();
        const t =
          (a = this.sourceJSON.editingInfo) == null ? void 0 : a.lastEditDate;
        if (t == null) return { dataChanged: !0, updates: {} };
        try {
          await this._fetchService(null);
        } catch {
          return { dataChanged: !0, updates: {} };
        }
        const e =
          t !==
          ((r = this.sourceJSON.editingInfo) == null ? void 0 : r.lastEditDate);
        return {
          dataChanged: e,
          updates: e
            ? {
                editingInfo: this.sourceJSON.editingInfo,
                extent: this.sourceJSON.extent,
              }
            : null,
        };
      }));
  }
  load(t) {
    const e = m(t) ? t.signal : null,
      a = this.layer.sourceJSON;
    return (
      this.addResolvingPromise(this._fetchService(a, e)), Promise.resolve(this)
    );
  }
  get queryTask() {
    var o;
    const {
        capabilities: t,
        parsedUrl: e,
        dynamicDataSource: a,
        infoFor3D: r,
        gdbVersion: s,
        spatialReference: i,
        fieldsIndex: n,
      } = this.layer,
      u =
        U("featurelayer-pbf") &&
        (t == null ? void 0 : t.query.supportsFormatPBF) &&
        A(r),
      l =
        ((o = t == null ? void 0 : t.operations) == null
          ? void 0
          : o.supportsQueryAttachments) ?? !1;
    return new ie({
      url: e.path,
      pbfSupported: u,
      fieldsIndex: n,
      infoFor3D: r,
      dynamicDataSource: a,
      gdbVersion: s,
      sourceSpatialReference: i,
      queryAttachmentsSupported: l,
    });
  }
  async addAttachment(t, e) {
    await this.load();
    const a = t.attributes[this.layer.objectIdField],
      r = this.layer.parsedUrl.path + "/" + a + "/addAttachment",
      s = this._getLayerRequestOptions(),
      i = this._getFormDataForAttachment(e, s.query);
    try {
      const n = await f(r, { body: i });
      return this._createFeatureEditResult(n.data.addAttachmentResult);
    } catch (n) {
      throw this._createAttachmentErrorResult(a, n);
    }
  }
  async updateAttachment(t, e, a) {
    await this.load();
    const r = t.attributes[this.layer.objectIdField],
      s = this.layer.parsedUrl.path + "/" + r + "/updateAttachment",
      i = this._getLayerRequestOptions({ query: { attachmentId: e } }),
      n = this._getFormDataForAttachment(a, i.query);
    try {
      const u = await f(s, { body: n });
      return this._createFeatureEditResult(u.data.updateAttachmentResult);
    } catch (u) {
      throw this._createAttachmentErrorResult(r, u);
    }
  }
  async applyEdits(t, e) {
    var N, v, J, D, k, M;
    await this.load();
    const a = this.layer.infoFor3D,
      r = m(a),
      s = r || ((e == null ? void 0 : e.globalIdUsed) ?? !1),
      i =
        ((N = t.addFeatures) == null
          ? void 0
          : N.map((p) => this._serializeFeature(p, a)).filter(m)) ?? [],
      n =
        ((v = t.updateFeatures) == null
          ? void 0
          : v.map((p) => this._serializeFeature(p, a)).filter(m)) ?? [],
      u = this._getFeatureIds(t.deleteFeatures, s);
    $(i, n, this.layer.spatialReference);
    const l = [],
      o = [],
      c = [...(t.deleteAttachments ?? [])];
    for (const p of t.addAttachments ?? [])
      l.push(await this._serializeAttachment(p));
    for (const p of t.updateAttachments ?? [])
      o.push(await this._serializeAttachment(p));
    const R =
      l.length || o.length || c.length
        ? { adds: l, updates: o, deletes: c }
        : null;
    let y,
      h = null;
    if (r) {
      h = new Map();
      const p = [];
      for (const _ of t.addAssets ?? [])
        p.push(this._serializeAssetMapEditAndUploadAssets(_, h));
      const O = await Promise.all(p);
      y = O.length ? { adds: O, updates: [], deletes: [] } : void 0;
    }
    const d = {
      gdbVersion: (e == null ? void 0 : e.gdbVersion) || this.layer.gdbVersion,
      rollbackOnFailure: e == null ? void 0 : e.rollbackOnFailureEnabled,
      useGlobalIds: s,
      returnEditMoment: e == null ? void 0 : e.returnEditMoment,
      usePreviousEditMoment: e == null ? void 0 : e.usePreviousEditMoment,
      sessionId: e == null ? void 0 : e.sessionId,
    };
    e != null && e.returnServiceEditsOption
      ? ((d.edits = JSON.stringify([
          {
            id: this.layer.layerId,
            adds: i,
            updates: n,
            deletes: u,
            attachments: R,
            assetMaps: B(y),
          },
        ])),
        (d.returnServiceEditsOption = ne.toJSON(
          e == null ? void 0 : e.returnServiceEditsOption
        )),
        (d.returnServiceEditsInSourceSR =
          e == null ? void 0 : e.returnServiceEditsInSourceSR))
      : ((d.adds = i.length ? JSON.stringify(i) : null),
        (d.updates = n.length ? JSON.stringify(n) : null),
        (d.deletes = u.length ? (s ? JSON.stringify(u) : u.join(",")) : null),
        (d.attachments = R && JSON.stringify(R)),
        (d.assetMaps = m(y) ? JSON.stringify(y) : void 0));
    const F = this._getLayerRequestOptions({ method: "post", query: d }),
      g =
        e != null && e.returnServiceEditsOption
          ? this.layer.url
          : this.layer.parsedUrl.path,
      w = await f(g + "/applyEdits", F);
    if (
      !(
        (J = this.layer.capabilities.operations) != null && J.supportsEditing
      ) &&
      (k =
        (D = this.layer.effectiveCapabilities) == null
          ? void 0
          : D.operations) != null &&
      k.supportsEditing
    ) {
      const p = (M = se) == null ? void 0 : M.findCredential(this.layer.url);
      await (p == null ? void 0 : p.refreshToken());
    }
    if (r && w.data != null && w.data.assetMaps != null) {
      const p = w.data,
        O = this.layer.objectIdField,
        _ = [];
      for (const b of p.addResults) b.success && _.push(b.objectId);
      for (const b of p.updateResults) b.success && _.push(b.objectId);
      const L = this._createRequestQueryOptions(),
        E = await f(g + "/query", {
          ...L,
          query: {
            f: "json",
            formatOf3DObjects: "3D_glb",
            where: `OBJECTID IN (${_.join(",")})`,
            outFields: `${O}`,
          },
        });
      if (E && E.data && E.data.assetMaps && m(h)) {
        const b = E.data.assetMaps;
        for (const x of b) {
          const S = h.get(x.parentGlobalId).geometry;
          m(S) &&
            S.type === "mesh" &&
            S.updateExternalSource({
              source: [{ name: x.assetName, source: x.assetName }],
              extent: S.extent,
            });
        }
      }
    }
    return this._createEditsResult(w);
  }
  async deleteAttachments(t, e) {
    await this.load();
    const a = t.attributes[this.layer.objectIdField],
      r = this.layer.parsedUrl.path + "/" + a + "/deleteAttachments";
    try {
      return (
        await f(
          r,
          this._getLayerRequestOptions({
            query: { attachmentIds: e.join(",") },
            method: "post",
          })
        )
      ).data.deleteAttachmentResults.map(this._createFeatureEditResult);
    } catch (s) {
      throw this._createAttachmentErrorResult(a, s);
    }
  }
  fetchRecomputedExtents(t = {}) {
    const e = t.signal;
    return this.load({ signal: e }).then(async () => {
      const a = this._getLayerRequestOptions({
          ...t,
          query: { returnUpdates: !0 },
        }),
        { layerId: r, url: s } = this.layer,
        { data: i } = await f(`${s}/${r}`, a),
        { id: n, extent: u, fullExtent: l, timeExtent: o } = i,
        c = u || l;
      return {
        id: n,
        fullExtent: c && X.fromJSON(c),
        timeExtent: o && Y.fromJSON({ start: o[0], end: o[1] }),
      };
    });
  }
  async queryAttachments(t, e = {}) {
    await this.load();
    const a = this._getLayerRequestOptions(e);
    return this.queryTask.executeAttachmentQuery(t, a);
  }
  async queryFeatures(t, e) {
    return (
      await this.load(),
      this.queryTask.execute(t, {
        ...e,
        query: this._createRequestQueryOptions(e),
      })
    );
  }
  async queryFeaturesJSON(t, e) {
    return (
      await this.load(),
      this.queryTask.executeJSON(t, {
        ...e,
        query: this._createRequestQueryOptions(e),
      })
    );
  }
  async queryObjectIds(t, e) {
    return (
      await this.load(),
      this.queryTask.executeForIds(t, {
        ...e,
        query: this._createRequestQueryOptions(e),
      })
    );
  }
  async queryFeatureCount(t, e) {
    return (
      await this.load(),
      this.queryTask.executeForCount(t, {
        ...e,
        query: this._createRequestQueryOptions(e),
      })
    );
  }
  async queryExtent(t, e) {
    return (
      await this.load(),
      this.queryTask.executeForExtent(t, {
        ...e,
        query: this._createRequestQueryOptions(e),
      })
    );
  }
  async queryRelatedFeatures(t, e) {
    return (
      await this.load(),
      this.queryTask.executeRelationshipQuery(t, {
        ...e,
        query: this._createRequestQueryOptions(e),
      })
    );
  }
  async queryRelatedFeaturesCount(t, e) {
    return (
      await this.load(),
      this.queryTask.executeRelationshipQueryForCount(t, {
        ...e,
        query: this._createRequestQueryOptions(e),
      })
    );
  }
  async queryTopFeatures(t, e) {
    return (
      await this.load(),
      this.queryTask.executeTopFeaturesQuery(t, {
        ...e,
        query: this._createRequestQueryOptions(e),
      })
    );
  }
  async queryTopObjectIds(t, e) {
    return (
      await this.load(),
      this.queryTask.executeForTopIds(t, {
        ...e,
        query: this._createRequestQueryOptions(e),
      })
    );
  }
  async queryTopExtents(t, e) {
    return (
      await this.load(),
      this.queryTask.executeForTopExtents(t, {
        ...e,
        query: this._createRequestQueryOptions(e),
      })
    );
  }
  async queryTopCount(t, e) {
    return (
      await this.load(),
      this.queryTask.executeForTopCount(t, {
        ...e,
        query: this._createRequestQueryOptions(e),
      })
    );
  }
  async fetchPublishingStatus() {
    if (!Z(this.layer.url)) return "unavailable";
    const t = C(this.layer.url, "status"),
      e = await f(t, { query: { f: "json" } });
    return ue.fromJSON(e.data.status);
  }
  _createRequestQueryOptions(t) {
    const e = {
      ...this.layer.customParameters,
      token: this.layer.apiKey,
      ...(t == null ? void 0 : t.query),
    };
    return (
      this.layer.datesInUnknownTimezone && (e.timeReferenceUnknownClient = !0),
      e
    );
  }
  async _fetchService(t, e) {
    if (!t) {
      const { data: r } = await f(
        this.layer.parsedUrl.path,
        this._getLayerRequestOptions({
          query: U("featurelayer-advanced-symbols")
            ? { returnAdvancedSymbols: !0 }
            : {},
          signal: e,
        })
      );
      t = r;
    }
    this.sourceJSON = this._patchServiceJSON(t);
    const a = t.type;
    if (!oe.has(a))
      throw new q(
        "feature-layer-source:unsupported-type",
        `Source type "${a}" is not supported`
      );
  }
  _patchServiceJSON(t) {
    var e;
    if (
      t.type !== "Table" &&
      t.geometryType &&
      !((e = t == null ? void 0 : t.drawingInfo) != null && e.renderer) &&
      !t.defaultSymbol
    ) {
      const a = re(t.geometryType).renderer;
      H("drawingInfo.renderer", a, t);
    }
    return (
      t.geometryType === "esriGeometryMultiPatch" &&
        t.infoFor3D &&
        (t.geometryType = "mesh"),
      t
    );
  }
  _serializeFeature(t, e) {
    const { geometry: a, attributes: r } = t;
    if (m(e) && m(t.geometry) && t.geometry.type === "mesh") {
      const s = { ...r },
        i = t.geometry,
        n = i.origin,
        u = i.transform;
      if (
        ((s[e.transformFieldRoles.originX] = n.x),
        (s[e.transformFieldRoles.originY] = n.y),
        (s[e.transformFieldRoles.originZ] = n.z),
        m(u))
      ) {
        const l = u.translation,
          o = u.scale,
          c = u.rotation;
        (s[e.transformFieldRoles.translationX] = l[0]),
          (s[e.transformFieldRoles.translationY] = -l[2]),
          (s[e.transformFieldRoles.translationZ] = l[1]),
          (s[e.transformFieldRoles.scaleX] = o[0]),
          (s[e.transformFieldRoles.scaleY] = o[1]),
          (s[e.transformFieldRoles.scaleZ] = o[2]),
          (s[e.transformFieldRoles.rotationX] = c[0]),
          (s[e.transformFieldRoles.rotationY] = c[2]),
          (s[e.transformFieldRoles.rotationZ] = c[1]),
          (s[e.transformFieldRoles.rotationDeg] = c[3]);
      }
      return { geometry: null, attributes: s };
    }
    return A(a)
      ? { attributes: r }
      : a.type === "mesh" || a.type === "extent"
      ? null
      : { geometry: a.toJSON(), attributes: r };
  }
  async _serializeAttachment(t) {
    const { feature: e, attachment: a } = t,
      { globalId: r, name: s, contentType: i, data: n, uploadId: u } = a,
      l = {
        globalId: r,
        parentGlobalId: null,
        contentType: null,
        name: null,
        uploadId: null,
        data: null,
      };
    if (
      (e &&
        (l.parentGlobalId =
          "attributes" in e
            ? e.attributes && e.attributes[this.layer.globalIdField]
            : e.globalId),
      u)
    )
      l.uploadId = u;
    else if (n) {
      const o = await G(n);
      o && ((l.contentType = o.mediaType), (l.data = o.data)),
        n instanceof File && (l.name = n.name);
    }
    return s && (l.name = s), i && (l.contentType = i), l;
  }
  async _serializeAssetMapEditAndUploadAssets(t, e) {
    const a = this.layer.url;
    let r = null;
    try {
      const o = new Blob([t.data], { type: t.mimeType }),
        c = new FormData();
      c.append("f", "json"), c.append("file", o, `${t.assetName}`);
      const R = { body: c, method: "post", responseType: "json" },
        { data: y } = await f(`${a}/uploads/upload`, R);
      if (!y.success)
        throw new q(
          "feature-layer-source:upload-failure",
          "Expected upload to be successfull."
        );
      r = { assetType: t.assetType, assetUploadId: y.item.itemID };
    } catch {
      r = null;
    }
    if (A(r)) {
      const o = await G(new Blob([t.data]));
      if (!o.isBase64)
        throw new q(
          "feature-layer-source:uploadAssets-failure",
          "Expected gltf data in base64 format after conversion."
        );
      r = { assetType: t.assetType, assetData: o.data };
    }
    if (A(r))
      throw new q(
        "feature-layer-source:uploadAssets-failure",
        "Unable to prepare uploadAsset request options."
      );
    const s = {
        method: "post",
        query: { f: "json", assets: JSON.stringify([r]) },
        responseType: "json",
      },
      i = await f(C(this.layer.parsedUrl.path, "uploadAssets"), s);
    if (i.data.uploadResults.length !== 1 || !i.data.uploadResults[0].success)
      throw new q("feature-layer-source:uploadAssets-failure", "Bad response.");
    const n = i.data.uploadResults[0].assetHash,
      u = [];
    t.flags & ae.PROJECT_VERTICES && u.push("PROJECT_VERTICES");
    const l = {
      globalId: t.assetMapGlobalId,
      parentGlobalId: t.featureGlobalId,
      assetName: t.assetName,
      assetHash: n,
      flags: u,
    };
    return e.set(t.featureGlobalId, t.feature), l;
  }
  _getFeatureIds(t, e) {
    const a = t == null ? void 0 : t[0];
    return a
      ? this._canUseGlobalIds(e, t)
        ? this._getGlobalIdsFromFeatureIdentifier(t)
        : "objectId" in a
        ? this._getObjectIdsFromFeatureIdentifier(t)
        : this._getIdsFromFeatures(t)
      : [];
  }
  _getIdsFromFeatures(t) {
    const e = this.layer.objectIdField;
    return t.map((a) => a.attributes && a.attributes[e]);
  }
  _canUseGlobalIds(t, e) {
    return t && "globalId" in e[0];
  }
  _getObjectIdsFromFeatureIdentifier(t) {
    return t.map((e) => e.objectId);
  }
  _getGlobalIdsFromFeatureIdentifier(t) {
    return t.map((e) => e.globalId);
  }
  _createEditsResult(t) {
    var u, l, o, c, R, y;
    const e = t.data,
      { layerId: a } = this.layer,
      r = [];
    let s = null;
    if (Array.isArray(e))
      for (const h of e)
        r.push({ id: h.id, editedFeatures: h.editedFeatures }),
          h.id === a &&
            (s = {
              addResults: h.addResults ?? [],
              updateResults: h.updateResults ?? [],
              deleteResults: h.deleteResults ?? [],
              attachments: h.attachments,
              editMoment: h.editMoment,
            });
    else s = e;
    const i = s == null ? void 0 : s.attachments,
      n = {
        addFeatureResults:
          ((u = s == null ? void 0 : s.addResults) == null
            ? void 0
            : u.map(this._createFeatureEditResult, this)) ?? [],
        updateFeatureResults:
          ((l = s == null ? void 0 : s.updateResults) == null
            ? void 0
            : l.map(this._createFeatureEditResult, this)) ?? [],
        deleteFeatureResults:
          ((o = s == null ? void 0 : s.deleteResults) == null
            ? void 0
            : o.map(this._createFeatureEditResult, this)) ?? [],
        addAttachmentResults:
          i && i.addResults
            ? i.addResults.map(this._createFeatureEditResult, this)
            : [],
        updateAttachmentResults:
          i && i.updateResults
            ? i.updateResults.map(this._createFeatureEditResult, this)
            : [],
        deleteAttachmentResults:
          i && i.deleteResults
            ? i.deleteResults.map(this._createFeatureEditResult, this)
            : [],
      };
    if (
      (s != null && s.editMoment && (n.editMoment = s.editMoment), r.length > 0)
    ) {
      n.editedFeatureResults = [];
      for (const h of r) {
        const { editedFeatures: d } = h,
          F =
            d != null && d.spatialReference ? new K(d.spatialReference) : null;
        n.editedFeatureResults.push({
          layerId: h.id,
          editedFeatures: {
            adds:
              ((c = d == null ? void 0 : d.adds) == null
                ? void 0
                : c.map((g) => this._createEditedFeature(g, F))) || [],
            updates:
              ((R = d == null ? void 0 : d.updates) == null
                ? void 0
                : R.map((g) => ({
                    original: this._createEditedFeature(g[0], F),
                    current: this._createEditedFeature(g[1], F),
                  }))) || [],
            deletes:
              ((y = d == null ? void 0 : d.deletes) == null
                ? void 0
                : y.map((g) => this._createEditedFeature(g, F))) || [],
            spatialReference: F,
          },
        });
      }
    }
    return n;
  }
  _createEditedFeature(t, e) {
    return new W({
      attributes: t.attributes,
      geometry: ee({ ...t.geometry, spatialReference: e }),
    });
  }
  _createFeatureEditResult(t) {
    const e =
      t.success === !0
        ? null
        : t.error || { code: void 0, description: void 0 };
    return {
      objectId: t.objectId,
      globalId: t.globalId,
      error: e
        ? new q("feature-layer-source:edit-failure", e.description, {
            code: e.code,
          })
        : null,
    };
  }
  _createAttachmentErrorResult(t, e) {
    const a = (e.details.messages && e.details.messages[0]) || e.message,
      r = e.details.httpStatus || e.details.messageCode;
    return {
      objectId: t,
      globalId: null,
      error: new q("feature-layer-source:attachment-failure", a, { code: r }),
    };
  }
  _getFormDataForAttachment(t, e) {
    const a =
      t instanceof FormData ? t : t && t.elements ? new FormData(t) : null;
    if (a)
      for (const r in e) {
        const s = e[r];
        s != null && (a.set ? a.set(r, s) : a.append(r, s));
      }
    return a;
  }
  _getLayerRequestOptions(t = {}) {
    const { parsedUrl: e, gdbVersion: a, dynamicDataSource: r } = this.layer;
    return {
      ...t,
      query: {
        gdbVersion: a,
        layer: r ? JSON.stringify({ source: r }) : void 0,
        ...e.query,
        f: "json",
        ...this._createRequestQueryOptions(t),
      },
      responseType: "json",
    };
  }
};
T([j()], I.prototype, "type", void 0),
  T([j({ constructOnly: !0 })], I.prototype, "layer", void 0),
  T([j({ readOnly: !0 })], I.prototype, "queryTask", null),
  (I = T([te("esri.layers.graphics.sources.FeatureLayerSource")], I));
const Ie = I;
export { Ie as default };
