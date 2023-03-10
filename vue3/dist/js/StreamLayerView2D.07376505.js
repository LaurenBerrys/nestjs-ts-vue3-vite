import {
  ae as p,
  af as m,
  ag as f,
  G as l,
  s as y,
  ej as v,
  ah as _,
  t as u,
  r as d,
} from "./index.8fd7165c.js";
import g from "./FeatureLayerView2D.8f85b8aa.js";
import { e as S } from "./util.79a0d0b9.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./Container.a5892366.js";
import "./definitions.ce677f69.js";
import "./enums.64ab819c.js";
import "./Texture.fb0c670a.js";
import "./LayerView.d8517e2e.js";
import "./schemaUtils.264ba82d.js";
import "./color.4c5303e9.js";
import "./enums.13513a14.js";
import "./VertexElementDescriptor.2925c6af.js";
import "./utils.1f803f1b.js";
import "./MaterialKey.97cb3dc8.js";
import "./visualVariablesUtils.de38be9a.js";
import "./ExpandedCIM.e22c8b13.js";
import "./BidiEngine.520adad3.js";
import "./GeometryUtils.874f8cf4.js";
import "./Rect.6884a4ea.js";
import "./quantizationUtils.1e9e702d.js";
import "./floatRGBA.6f2fa7cd.js";
import "./floorFilterUtils.08225a6d.js";
import "./popupUtils.4682c28c.js";
import "./RefreshableLayerView.d05f575e.js";
function h(e, t) {
  if (u(e) && u(t)) return null;
  const r = {};
  return d(t) && (r.geometry = t.toJSON()), d(e) && (r.where = e), r;
}
let o = class extends g {
  constructor() {
    super(...arguments),
      (this._enabledEventTypes = new Set()),
      (this._isUserPaused = !1),
      (this.errorString = null),
      (this.connectionStatus = "disconnected");
  }
  initialize() {
    this.addHandles(
      [
        l(
          () => this.layer.customParameters,
          (e) => this._proxy.updateCustomParameters(e)
        ),
        this.layer.on("send-message-to-socket", (e) =>
          this._proxy.sendMessageToSocket(e)
        ),
        this.layer.on("send-message-to-client", (e) =>
          this._proxy.sendMessageToClient(e)
        ),
        l(
          () => this.layer.purgeOptions,
          () => this._update()
        ),
        l(
          () => this.suspended,
          (e) => {
            e
              ? this._proxy.pauseStream()
              : this._isUserPaused || this._proxy.resumeStream();
          }
        ),
      ],
      "constructor"
    );
  }
  get connectionError() {
    if (this.errorString) return new y("stream-controller", this.errorString);
  }
  pause() {
    (this._isUserPaused = !0), this._proxy.pauseStream();
  }
  resume() {
    (this._isUserPaused = !1), this._proxy.resumeStream();
  }
  on(e, t) {
    if (Array.isArray(e)) return v(e.map((n) => this.on(n, t)));
    const r = ["data-received", "message-received"].includes(e);
    r && (this._enabledEventTypes.add(e), this._proxy.enableEvent(e, !0));
    const i = super.on(e, t),
      s = this;
    return {
      remove() {
        i.remove(),
          r &&
            (s._proxy.closed ||
              s.hasEventListener(e) ||
              s._proxy.enableEvent(e, !1));
      },
    };
  }
  queryLatestObservations(e, t) {
    var r, i, s;
    if (
      !(
        ((r = this.layer.timeInfo) != null && r.endField) ||
        ((i = this.layer.timeInfo) != null && i.startField) ||
        ((s = this.layer.timeInfo) != null && s.trackIdField)
      )
    )
      throw new y(
        "streamlayer-no-timeField",
        "queryLatestObservation can only be used with services that define a TrackIdField"
      );
    return this._proxy
      .queryLatestObservations(this._cleanUpQuery(e), t)
      .then((n) => {
        const a = _.fromJSON(n);
        return (
          a.features.forEach((c) => {
            (c.layer = this.layer), (c.sourceLayer = this.layer);
          }),
          a
        );
      });
  }
  detach() {
    super.detach(), (this.connectionStatus = "disconnected");
  }
  _createClientOptions() {
    return {
      ...super._createClientOptions(),
      setProperty: (e) => {
        this.set(e.propertyName, e.value);
      },
    };
  }
  _createTileRendererHash(e) {
    const t = `${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(
      h(this.layer.definitionExpression, this.layer.geometryDefinition)
    )})`;
    return super._createTileRendererHash(e) + t;
  }
  async _createServiceOptions() {
    const e = this.layer,
      { objectIdField: t } = e,
      r = e.fields.map((a) => a.toJSON()),
      i = S(e.geometryType),
      s = (e.timeInfo && e.timeInfo.toJSON()) || null,
      n = e.spatialReference ? e.spatialReference.toJSON() : null;
    return {
      type: "stream",
      fields: r,
      geometryType: i,
      objectIdField: t,
      timeInfo: s,
      source: this.layer.parsedUrl,
      serviceFilter: h(
        this.layer.definitionExpression,
        this.layer.geometryDefinition
      ),
      purgeOptions: this.layer.purgeOptions.toJSON(),
      enabledEventTypes: Array.from(this._enabledEventTypes.values()),
      spatialReference: n,
      maxReconnectionAttempts: this.layer.maxReconnectionAttempts,
      maxReconnectionInterval: this.layer.maxReconnectionInterval,
      updateInterval: this.layer.updateInterval,
      customParameters: e.customParameters,
    };
  }
};
p([m()], o.prototype, "errorString", void 0),
  p([m({ readOnly: !0 })], o.prototype, "connectionError", null),
  p([m()], o.prototype, "connectionStatus", void 0),
  (o = p([f("esri.views.2d.layers.StreamLayerView2D")], o));
const Y = o;
export { Y as default };
