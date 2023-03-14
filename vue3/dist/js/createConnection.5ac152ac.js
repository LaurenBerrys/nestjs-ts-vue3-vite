import { q as x } from "./Table.e9c997d5.js";
import {
  b0 as E,
  s as a,
  ae as g,
  af as w,
  ag as b,
  gq as F,
  r as h,
  t as f,
  e2 as R,
  Q as i,
  aO as M,
  D as O,
  U as P,
  cM as W,
  av as q,
  W as C,
  eE as T,
  aH as j,
  gb as v,
} from "./index.8fd7165c.js";
import "./vue.a7ce1fbe.js";
import "./NvapForm.feb8550d.js";
import "./vue-i18n.67a42238.js";
import "./vue-router.805f6e2a.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
let S = class extends E.EventedAccessor {
  destroy() {
    this.emit("destroy");
  }
  get connectionError() {
    return this.errorString
      ? new a("stream-connection", this.errorString)
      : null;
  }
  onFeature(e) {
    this.emit("data-received", e);
  }
  onMessage(e) {
    this.emit("message-received", e);
  }
};
g([w({ readOnly: !0 })], S.prototype, "connectionError", null),
  (S = g([b("esri.layers.support.StreamConnection")], S));
const N = S;
var y;
(function (e) {
  (e[(e.CONNECTING = 0)] = "CONNECTING"),
    (e[(e.OPEN = 1)] = "OPEN"),
    (e[(e.CLOSING = 2)] = "CLOSING"),
    (e[(e.CLOSED = 3)] = "CLOSED");
})(y || (y = {}));
let _ = class extends N {
  constructor(e) {
    super(), (this._outstandingMessages = []), (this.errorString = null);
    const {
      geometryType: t,
      spatialReference: r,
      sourceSpatialReference: s,
    } = e;
    (this._config = e), (this._featureZScaler = F(t, s, r)), this._open();
  }
  async _open() {
    await this._tryCreateWebSocket(),
      this.destroyed || (await this._handshake());
  }
  destroy() {
    super.destroy(),
      h(this._websocket) &&
        ((this._websocket.onopen = null),
        (this._websocket.onclose = null),
        (this._websocket.onerror = null),
        (this._websocket.onmessage = null),
        this._websocket.close()),
      (this._websocket = null);
  }
  get connectionStatus() {
    if (f(this._websocket)) return "disconnected";
    switch (this._websocket.readyState) {
      case y.CONNECTING:
      case y.OPEN:
        return "connected";
      case y.CLOSING:
      case y.CLOSED:
        return "disconnected";
    }
  }
  sendMessageToSocket(e) {
    f(this._websocket)
      ? this._outstandingMessages.push(e)
      : this._websocket.send(JSON.stringify(e));
  }
  sendMessageToClient(e) {
    this._onMessage(e);
  }
  updateCustomParameters(e) {
    (this._config.customParameters = e),
      h(this._websocket) && this._websocket.close();
  }
  async _tryCreateWebSocket(e = this._config.source.path, t = 1e3, r = 0) {
    try {
      if (this.destroyed) return;
      const s = R(e, this._config.customParameters ?? {});
      (this._websocket = await this._createWebSocket(s)),
        this.notifyChange("connectionStatus");
    } catch (s) {
      const o = t / 1e3;
      return this._config.maxReconnectionAttempts &&
        r >= this._config.maxReconnectionAttempts
        ? (i
            .getLogger(this.declaredClass)
            .error(
              new a(
                "websocket-connection",
                "Exceeded maxReconnectionAttempts attempts. No further attempts will be made"
              )
            ),
          void this.destroy())
        : (i
            .getLogger(this.declaredClass)
            .error(
              new a(
                "websocket-connection",
                `Failed to connect. Attempting to reconnect in ${o}s`,
                s
              )
            ),
          await M(t),
          this._tryCreateWebSocket(
            e,
            Math.min(1.5 * t, 1e3 * this._config.maxReconnectionInterval),
            r + 1
          ));
    }
  }
  _setWebSocketJSONParseHandler(e) {
    e.onmessage = (t) => {
      try {
        const r = JSON.parse(t.data);
        this._onMessage(r);
      } catch (r) {
        return void i
          .getLogger(this.declaredClass)
          .error(
            new a(
              "websocket-connection",
              "Failed to parse message, invalid JSON",
              { error: r }
            )
          );
      }
    };
  }
  _createWebSocket(e) {
    return new Promise((t, r) => {
      const s = new WebSocket(e);
      (s.onopen = () => {
        if (((s.onopen = null), this.destroyed))
          return (s.onclose = null), void s.close();
        (s.onclose = (o) => this._onClose(o)),
          (s.onerror = (o) => this._onError(o)),
          this._setWebSocketJSONParseHandler(s),
          t(s);
      }),
        (s.onclose = (o) => {
          (s.onopen = s.onclose = null), r(o);
        });
    });
  }
  async _handshake(e = 1e4) {
    const t = this._websocket;
    if (f(t)) return;
    const r = O(),
      s = t.onmessage,
      { filter: o, outFields: n, spatialReference: c } = this._config;
    return (
      r.timeout(e),
      (t.onmessage = (d) => {
        var u;
        let l = null;
        try {
          l = JSON.parse(d.data);
        } catch {}
        (l && typeof l == "object") ||
          (i
            .getLogger(this.declaredClass)
            .error(
              new a(
                "websocket-connection",
                "Protocol violation. Handshake failed - malformed message",
                d.data
              )
            ),
          r.reject(),
          this.destroy()),
          ((u = l.spatialReference) == null ? void 0 : u.wkid) !==
            (c == null ? void 0 : c.wkid) &&
            (i
              .getLogger(this.declaredClass)
              .error(
                new a(
                  "websocket-connection",
                  `Protocol violation. Handshake failed - expected wkid of ${c.wkid}`,
                  d.data
                )
              ),
            r.reject(),
            this.destroy()),
          l.format !== "json" &&
            (i
              .getLogger(this.declaredClass)
              .error(
                new a(
                  "websocket-connection",
                  "Protocol violation. Handshake failed - format is not set",
                  d.data
                )
              ),
            r.reject(),
            this.destroy()),
          o &&
            l.filter !== o &&
            i
              .getLogger(this.declaredClass)
              .error(
                new a(
                  "websocket-connection",
                  "Tried to set filter, but server doesn't support it"
                )
              ),
          n &&
            l.outFields !== n &&
            i
              .getLogger(this.declaredClass)
              .error(
                new a(
                  "websocket-connection",
                  "Tried to set outFields, but server doesn't support it"
                )
              ),
          (t.onmessage = s);
        for (const m of this._outstandingMessages) t.send(JSON.stringify(m));
        (this._outstandingMessages = []), r.resolve();
      }),
      t.send(
        JSON.stringify({
          filter: o,
          outFields: n,
          format: "json",
          spatialReference: { wkid: c.wkid },
        })
      ),
      r.promise
    );
  }
  _onMessage(e) {
    if ((this.onMessage(e), "type" in e))
      switch (e.type) {
        case "features":
        case "featureResult":
          for (const t of e.features)
            h(this._featureZScaler) && this._featureZScaler(t.geometry),
              this.onFeature(t);
      }
  }
  _onError(e) {
    const t = "Encountered an error over WebSocket connection";
    this._set("errorString", t),
      i.getLogger(this.declaredClass).error("websocket-connection", t);
  }
  _onClose(e) {
    (this._websocket = null),
      this.notifyChange("connectionStatus"),
      e.code !== 1e3 &&
        i
          .getLogger(this.declaredClass)
          .error(
            "websocket-connection",
            `WebSocket closed unexpectedly with error code ${e.code}`
          ),
      this.destroyed || this._open();
  }
};
g([w()], _.prototype, "connectionStatus", null),
  g([w()], _.prototype, "errorString", void 0),
  (_ = g(
    [b("esri.layers.graphics.sources.connections.WebSocketConnection")],
    _
  ));
const D = { maxQueryDepth: 5, maxRecordCountFactor: 3 };
let k = class extends _ {
  constructor(e) {
    super({ ...D, ...e }),
      (this._buddyServicesQuery = null),
      (this._relatedFeatures = null);
  }
  async _open() {
    const e = await this._fetchServiceDefinition(this._config.source);
    e.timeInfo.trackIdField ||
      i
        .getLogger(this.declaredClass)
        .warn(
          "GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect."
        );
    const t = this._fetchWebSocketUrl(
      e.streamUrls,
      this._config.spatialReference
    );
    this._buddyServicesQuery ||
      (this._buddyServicesQuery = this._queryBuddyServices()),
      await this._buddyServicesQuery,
      await this._tryCreateWebSocket(t);
    const { filter: r, outFields: s } = this._config;
    this.destroyed || this._setFilter(r, s);
  }
  _onMessage(e) {
    if ("attributes" in e) {
      let t;
      try {
        (t = this._enrich(e)),
          h(this._featureZScaler) && this._featureZScaler(t.geometry);
      } catch (r) {
        return void i
          .getLogger(this.declaredClass)
          .error(new a("geoevent-connection", "Failed to parse message", r));
      }
      this.onFeature(t);
    } else this.onMessage(e);
  }
  async _fetchServiceDefinition(e) {
    const t = { f: "json", ...this._config.customParameters },
      r = P(e.path, { query: t, responseType: "json" }),
      s = (await r).data;
    return (this._serviceDefinition = s), s;
  }
  _fetchWebSocketUrl(e, t) {
    const r = e[0],
      { urls: s, token: o } = r,
      n = this._inferWebSocketBaseUrl(s);
    return R(`${n}/subscribe`, { outSR: "" + t.wkid, token: o });
  }
  _inferWebSocketBaseUrl(e) {
    if (e.length === 1) return e[0];
    for (const t of e) if (t.includes("wss")) return t;
    return (
      i
        .getLogger(this.declaredClass)
        .error(
          new a("geoevent-connection", "Unable to infer WebSocket url", e)
        ),
      null
    );
  }
  async _setFilter(e, t) {
    const r = this._websocket;
    if (f(r) || (f(e) && f(t))) return;
    const s = JSON.stringify({ filter: this._serializeFilter(e, t) });
    let o = !1;
    const n = O();
    return (
      (r.onmessage = (c) => {
        const d = JSON.parse(c.data);
        d.filter &&
          (d.error &&
            (i
              .getLogger(this.declaredClass)
              .error(
                new a(
                  "geoevent-connection",
                  "Failed to set service filter",
                  d.error
                )
              ),
            this._set(
              "errorString",
              `Could not set service filter - ${d.error}`
            ),
            n.reject(d.error)),
          this._setWebSocketJSONParseHandler(r),
          (o = !0),
          n.resolve());
      }),
      r.send(s),
      setTimeout(() => {
        o ||
          (this.destroyed ||
            this._websocket !== r ||
            i
              .getLogger(this.declaredClass)
              .error(
                new a(
                  "geoevent-connection",
                  "Server timed out when setting filter"
                )
              ),
          n.reject());
      }, 1e4),
      n.promise
    );
  }
  _serializeFilter(e, t) {
    const r = {};
    if (f(e) && f(t)) return r;
    if (h(e) && e.geometry)
      try {
        const s = W(e.geometry);
        if (s.type !== "extent")
          throw new a(`Expected extent but found type ${s.type}`);
        r.geometry = JSON.stringify(s.shiftCentralMeridian());
      } catch (s) {
        i.getLogger(this.declaredClass).error(
          new a(
            "geoevent-connection",
            "Encountered an error when setting connection geometryDefinition",
            s
          )
        );
      }
    return (
      h(e) &&
        e.where &&
        e.where !== "1 = 1" &&
        e.where !== "1=1" &&
        (r.where = e.where),
      h(t) && (r.outFields = t.join(",")),
      r
    );
  }
  _enrich(e) {
    if (!this._relatedFeatures) return e;
    const t = this._serviceDefinition.relatedFeatures.joinField,
      r = e.attributes[t],
      s = this._relatedFeatures.get(r);
    if (!s)
      return (
        i
          .getLogger(this.declaredClass)
          .warn(
            "geoevent-connection",
            "Feature join failed. Is the join field configured correctly?",
            e
          ),
        e
      );
    const { attributes: o, geometry: n } = s;
    for (const c in o) e.attributes[c] = o[c];
    return (
      n && (e.geometry = n),
      e.geometry ||
        e.centroid ||
        i
          .getLogger(this.declaredClass)
          .error(
            new a(
              "geoevent-connection",
              "Found malformed feature - no geometry found",
              e
            )
          ),
      e
    );
  }
  async _queryBuddyServices() {
    try {
      const { relatedFeatures: e, keepLatestArchive: t } =
          this._serviceDefinition,
        r = this._queryRelatedFeatures(e),
        s = this._queryArchive(t);
      await r;
      const o = await s;
      if (!o) return;
      for (const n of o.features) this.onFeature(this._enrich(n));
    } catch (e) {
      i.getLogger(this.declaredClass).error(
        new a(
          "geoevent-connection",
          "Encountered an error when querying buddy services",
          {
            error: e,
          }
        )
      );
    }
  }
  async _queryRelatedFeatures(e) {
    if (!e) return;
    const t = await this._queryBuddy(e.featuresUrl);
    this._addRelatedFeatures(t);
  }
  async _queryArchive(e) {
    if (e) return this._queryBuddy(e.featuresUrl);
  }
  async _queryBuddy(e) {
    const t = new (
        await x(
          () => import("./index.8fd7165c.js").then((L) => L.lG),
          [
            "js/index.8fd7165c.js",
            "js/ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js",
            "js/AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js",
            "js/NvapForm.feb8550d.js",
            "js/vue.a7ce1fbe.js",
            "assets/NvapForm.356f5dc3.css",
            "js/vue-router.805f6e2a.js",
            "js/Table.e9c997d5.js",
            "js/vue-i18n.67a42238.js",
            "assets/Table.3b7647ef.css",
            "assets/index.a699c0e4.css",
          ]
        )
      ).default({ url: e }),
      { capabilities: r } = await t.load(),
      s = r.query.supportsMaxRecordCountFactor,
      o = r.query.supportsPagination,
      n = r.query.supportsCentroid,
      c = this._config.maxRecordCountFactor,
      d = t.capabilities.query.maxRecordCount,
      l = s ? d * c : d,
      u = new q();
    if (
      ((u.outFields = C(this._config.outFields, ["*"])),
      (u.where = C(T(this._config.filter, "where"), "1=1")),
      (u.returnGeometry = !0),
      (u.returnExceededLimitFeatures = !0),
      (u.outSpatialReference = j.fromJSON(this._config.spatialReference)),
      n && (u.returnCentroid = !0),
      s && (u.maxRecordCountFactor = c),
      o)
    )
      return (u.num = l), t.destroy(), this._queryPages(e, u);
    const m = await v(e, u, this._config.sourceSpatialReference);
    return t.destroy(), m.data;
  }
  async _queryPages(e, t, r = [], s = 0) {
    t.start = h(t.num) ? s * t.num : null;
    const { data: o } = await v(e, t, this._config.sourceSpatialReference);
    return o.exceededTransferLimit && s < (this._config.maxQueryDepth ?? 0)
      ? (o.features.forEach((n) => r.push(n)), this._queryPages(e, t, r, s + 1))
      : (r.forEach((n) => o.features.push(n)), o);
  }
  _addRelatedFeatures(e) {
    const t = new Map(),
      r = e.features,
      s = this._serviceDefinition.relatedFeatures.joinField;
    for (const o of r) {
      const n = o.attributes[s];
      t.set(n, o);
    }
    this._relatedFeatures = t;
  }
};
k = g([b("esri.layers.graphics.sources.connections.GeoEventConnection")], k);
const I = k;
let p = class extends N {
  constructor(e) {
    super(), (this.connectionStatus = "connected"), (this.errorString = null);
    const {
      geometryType: t,
      spatialReference: r,
      sourceSpatialReference: s,
    } = e;
    this._featureZScaler = F(t, s, r);
  }
  updateCustomParameters(e) {}
  sendMessageToSocket(e) {}
  sendMessageToClient(e) {
    if ("type" in e)
      switch (e.type) {
        case "features":
        case "featureResult":
          for (const t of e.features)
            h(this._featureZScaler) && this._featureZScaler(t.geometry),
              this.onFeature(t);
      }
    this.onMessage(e);
  }
};
function $(e, t, r, s, o, n, c, d) {
  const l = {
    source: e,
    sourceSpatialReference: t,
    spatialReference: r,
    geometryType: s,
    filter: o,
    maxReconnectionAttempts: n,
    maxReconnectionInterval: c,
    customParameters: d,
  };
  return e
    ? e.path.startsWith("wss://") || e.path.startsWith("ws://")
      ? new _(l)
      : new I(l)
    : new p(l);
}
g([w()], p.prototype, "connectionStatus", void 0),
  g([w()], p.prototype, "errorString", void 0),
  (p = g([b("esri.layers.support.ClientSideConnection")], p));
export { $ as createConnection };
