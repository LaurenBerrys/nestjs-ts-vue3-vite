import {
  im as w,
  iW as I,
  io as O,
  es as T,
  et as E,
  eu as R,
  ev as M,
  ip as j,
  iA as F,
  iT as L,
  b3 as P,
  r as N,
  a2 as J,
  jF as v,
  dy as g,
  U as f,
  ar as U,
  dj as q,
  iB as A,
  jm as k,
  s as b,
  j as _,
  ae as s,
  af as n,
  jQ as x,
  dl as V,
  dm as z,
  ey as B,
  ag as W,
  db as $,
  gO as C,
} from "./index.8fd7165c.js";
import { i as D } from "./scaleUtils.54369baa.js";
import { E as G, y as H, Z as K } from "./SublayersOwner.8028a8dc.js";
import { c as Q } from "./ExportImageParameters.3d3cda78.js";
import { e as Z } from "./imageBitmapUtils.d17e4357.js";
import { n as S } from "./sublayerUtils.aa8d3bb7.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./Version.a4557b9e.js";
import "./QueryTask.6847195b.js";
import "./executeForIds.3a002380.js";
import "./floorFilterUtils.08225a6d.js";
let i = class extends w(I(O(G(H(T(E(R(M(j(F(L(P($))))))))))))) {
  constructor(...e) {
    super(...e),
      (this.dateFieldsTimeReference = null),
      (this.datesInUnknownTimezone = !1),
      (this.dpi = 96),
      (this.gdbVersion = null),
      (this.imageFormat = "png24"),
      (this.imageMaxHeight = 2048),
      (this.imageMaxWidth = 2048),
      (this.imageTransparency = !0),
      (this.isReference = null),
      (this.labelsVisible = !1),
      (this.operationalLayerType = "ArcGISMapServiceLayer"),
      (this.preferredTimeReference = null),
      (this.sourceJSON = null),
      (this.sublayers = null),
      (this.type = "map-image"),
      (this.url = null);
  }
  normalizeCtorArgs(e, a) {
    return typeof e == "string" ? { url: e, ...a } : e;
  }
  load(e) {
    const a = N(e) ? e.signal : null;
    return (
      this.addResolvingPromise(
        this.loadFromPortal({ supportedTypes: ["Map Service"] }, e)
          .catch(J)
          .then(() => this._fetchService(a))
      ),
      Promise.resolve(this)
    );
  }
  readImageFormat(e, a) {
    const l = a.supportedImageFormatTypes;
    return l && l.includes("PNG32") ? "png32" : "png24";
  }
  writeSublayers(e, a, l, r) {
    var d;
    if (!this.loaded || !e) return;
    const o = e
      .slice()
      .reverse()
      .flatten(({ sublayers: t }) => t && t.toArray().reverse())
      .toArray();
    let p = !1;
    if (
      this.capabilities &&
      this.capabilities.operations.supportsExportMap &&
      (d = this.capabilities.exportMap) != null &&
      d.supportsDynamicLayers
    ) {
      const t = v(r.origin);
      if (t === g.PORTAL_ITEM) {
        const y = this.createSublayersForOrigin("service").sublayers;
        p = S(o, y, g.SERVICE);
      } else if (t > g.PORTAL_ITEM) {
        const y = this.createSublayersForOrigin("portal-item");
        p = S(o, y.sublayers, v(y.origin));
      }
    }
    const m = [],
      h = { writeSublayerStructure: p, ...r };
    let c = p;
    o.forEach((t) => {
      const y = t.write({}, h);
      m.push(y), (c = c || t.originOf("visible") === "user");
    }),
      m.some((t) => Object.keys(t).length > 1) && (a.layers = m),
      c && (a.visibleLayers = o.filter((t) => t.visible).map((t) => t.id));
  }
  createExportImageParameters(e, a, l, r) {
    const o = (r && r.pixelRatio) || 1;
    e && this.version >= 10 && (e = e.clone().shiftCentralMeridian());
    const p = new Q({
        layer: this,
        floors: r == null ? void 0 : r.floors,
        scale: D({ extent: e, width: a }) * o,
      }),
      m = p.toJSON();
    p.destroy();
    const h =
        !r || !r.rotation || this.version < 10.3
          ? {}
          : { rotation: -r.rotation },
      c = e && e.spatialReference,
      d = c.wkid || JSON.stringify(c.toJSON());
    m.dpi *= o;
    const t = {};
    if (r != null && r.timeExtent) {
      const { start: y, end: u } = r.timeExtent.toJSON();
      t.time = y && u && y === u ? "" + y : `${y ?? "null"},${u ?? "null"}`;
    } else
      this.timeInfo && !this.timeInfo.hasLiveData && (t.time = "null,null");
    return {
      bbox: e && e.xmin + "," + e.ymin + "," + e.xmax + "," + e.ymax,
      bboxSR: d,
      imageSR: d,
      size: a + "," + l,
      ...m,
      ...h,
      ...t,
    };
  }
  async fetchImage(e, a, l, r) {
    const { data: o } = await this._fetchImage("image", e, a, l, r);
    return o;
  }
  async fetchImageBitmap(e, a, l, r) {
    const { data: o, url: p } = await this._fetchImage("blob", e, a, l, r);
    return Z(o, p);
  }
  async fetchRecomputedExtents(e = {}) {
    const a = {
        ...e,
        query: {
          returnUpdates: !0,
          f: "json",
          ...this.customParameters,
          token: this.apiKey,
        },
      },
      { data: l } = await f(this.url, a),
      { extent: r, fullExtent: o, timeExtent: p } = l,
      m = r || o;
    return {
      fullExtent: m && U.fromJSON(m),
      timeExtent: p && q.fromJSON({ start: p[0], end: p[1] }),
    };
  }
  loadAll() {
    return A(this, (e) => {
      e(this.allSublayers);
    });
  }
  serviceSupportsSpatialReference(e) {
    return k(this, e);
  }
  async _fetchImage(e, a, l, r, o) {
    var h, c, d;
    const p = {
        responseType: e,
        signal: (o == null ? void 0 : o.signal) ?? null,
        query: {
          ...this.parsedUrl.query,
          ...this.createExportImageParameters(a, l, r, o),
          f: "image",
          ...this.refreshParameters,
          ...this.customParameters,
          token: this.apiKey,
        },
      },
      m = this.parsedUrl.path + "/export";
    if (
      ((h = p.query) == null ? void 0 : h.dynamicLayers) != null &&
      !(
        (d = (c = this.capabilities) == null ? void 0 : c.exportMap) != null &&
        d.supportsDynamicLayers
      )
    )
      throw new b(
        "mapimagelayer:dynamiclayer-not-supported",
        `service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,
        { query: p.query }
      );
    try {
      const { data: t } = await f(m, p);
      return { data: t, url: m };
    } catch (t) {
      throw _(t)
        ? t
        : new b(
            "mapimagelayer:image-fetch-error",
            `Unable to load image: ${m}`,
            { error: t }
          );
    }
  }
  async _fetchService(e) {
    if (this.sourceJSON)
      return void this.read(this.sourceJSON, {
        origin: "service",
        url: this.parsedUrl,
      });
    const { data: a, ssl: l } = await f(this.parsedUrl.path, {
      query: {
        f: "json",
        ...this.parsedUrl.query,
        ...this.customParameters,
        token: this.apiKey,
      },
      signal: e,
    });
    l && (this.url = this.url.replace(/^http:/i, "https:")),
      (this.sourceJSON = a),
      this.read(a, { origin: "service", url: this.parsedUrl });
  }
};
s([n({ type: x })], i.prototype, "dateFieldsTimeReference", void 0),
  s([n({ type: Boolean })], i.prototype, "datesInUnknownTimezone", void 0),
  s([n()], i.prototype, "dpi", void 0),
  s([n()], i.prototype, "gdbVersion", void 0),
  s([n()], i.prototype, "imageFormat", void 0),
  s(
    [V("imageFormat", ["supportedImageFormatTypes"])],
    i.prototype,
    "readImageFormat",
    null
  ),
  s(
    [
      n({
        json: { origins: { service: { read: { source: "maxImageHeight" } } } },
      }),
    ],
    i.prototype,
    "imageMaxHeight",
    void 0
  ),
  s(
    [
      n({
        json: { origins: { service: { read: { source: "maxImageWidth" } } } },
      }),
    ],
    i.prototype,
    "imageMaxWidth",
    void 0
  ),
  s([n()], i.prototype, "imageTransparency", void 0),
  s(
    [
      n({
        type: Boolean,
        json: {
          read: !1,
          write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) },
        },
      }),
    ],
    i.prototype,
    "isReference",
    void 0
  ),
  s(
    [n({ json: { read: !1, write: !1 } })],
    i.prototype,
    "labelsVisible",
    void 0
  ),
  s(
    [n({ type: ["ArcGISMapServiceLayer"] })],
    i.prototype,
    "operationalLayerType",
    void 0
  ),
  s(
    [n({ json: { read: !1, write: !1 } })],
    i.prototype,
    "popupEnabled",
    void 0
  ),
  s([n({ type: x })], i.prototype, "preferredTimeReference", void 0),
  s([n()], i.prototype, "sourceJSON", void 0),
  s(
    [n({ json: { write: { ignoreOrigin: !0 } } })],
    i.prototype,
    "sublayers",
    void 0
  ),
  s(
    [z("sublayers", { layers: { type: [K] }, visibleLayers: { type: [C] } })],
    i.prototype,
    "writeSublayers",
    null
  ),
  s(
    [n({ type: ["show", "hide", "hide-children"] })],
    i.prototype,
    "listMode",
    void 0
  ),
  s(
    [n({ json: { read: !1 }, readOnly: !0, value: "map-image" })],
    i.prototype,
    "type",
    void 0
  ),
  s([n(B)], i.prototype, "url", void 0),
  (i = s([W("esri.layers.MapImageLayer")], i));
const ue = i;
export { ue as default };
