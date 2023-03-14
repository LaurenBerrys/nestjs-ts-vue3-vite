import {
  ae as t,
  af as s,
  eh as Z,
  ag as J,
  dd as U,
  ds as ae,
  j8 as De,
  ja as Nt,
  ei as k,
  dl as A,
  dm as se,
  t as L,
  Q as pt,
  s as W,
  dr as Ne,
  U as ce,
  k8 as Me,
  hJ as Pt,
  aK as ut,
  r as d,
  d0 as ct,
  R as yt,
  al as pe,
  a6 as _e,
  ar as dt,
  ah as X,
  aH as ie,
  q as ye,
  dp as Rt,
  eg as Ge,
  di as It,
  cM as At,
  dk as Lt,
  P as x,
  im as Ot,
  io as jt,
  et as Dt,
  eu as Mt,
  ev as kt,
  b3 as Jt,
  dg as Ct,
  i5 as _t,
  a5 as xt,
  eM as Qe,
  aZ as Ye,
  jz as Ft,
  cy as Et,
  O as Gt,
  cx as Ut,
  ig as qt,
  j as Wt,
  k9 as Zt,
  ka as zt,
  ai as Vt,
  _ as Kt,
  Y as $t,
  fN as Ht,
  db as Qt,
} from "./index.8fd7165c.js";
import { i as Yt } from "./originUtils.cdead60a.js";
import {
  U as ue,
  y as Ue,
  s as Xt,
  R as er,
  r as mt,
  A as qe,
  c as tr,
  d as rr,
  n as or,
  w as sr,
  S as ir,
  e as Xe,
  i as nr,
  k as ar,
  j as lr,
  o as pr,
  l as ur,
  b as ge,
  h as Se,
  O as me,
  g as fe,
  f as he,
  D as ve,
  a as Pe,
  m as cr,
} from "./Stop.48dde021.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./multiOriginJSONSupportUtils.c978f4c3.js";
let re = class extends U {
  constructor(e) {
    super(e),
      (this.break = new ae({
        color: [255, 255, 255],
        size: 12,
        outline: { color: [0, 122, 194], width: 3 },
      })),
      (this.first = new ae({
        color: [0, 255, 0],
        size: 20,
        outline: { color: [255, 255, 255], width: 4 },
      })),
      (this.unlocated = new ae({
        color: [255, 0, 0],
        size: 12,
        outline: { color: [255, 255, 255], width: 3 },
      })),
      (this.last = new ae({
        color: [255, 0, 0],
        size: 20,
        outline: { color: [255, 255, 255], width: 4 },
      })),
      (this.middle = new ae({
        color: [51, 51, 51],
        size: 12,
        outline: { color: [0, 122, 194], width: 3 },
      })),
      (this.waypoint = new ae({
        color: [255, 255, 255],
        size: 12,
        outline: { color: [0, 122, 194], width: 3 },
      }));
  }
};
t([s({ types: Z })], re.prototype, "break", void 0),
  t([s({ types: Z })], re.prototype, "first", void 0),
  t([s({ types: Z })], re.prototype, "unlocated", void 0),
  t([s({ types: Z })], re.prototype, "last", void 0),
  t([s({ types: Z })], re.prototype, "middle", void 0),
  t([s({ types: Z })], re.prototype, "waypoint", void 0),
  (re = t([J("esri.layers.support.RouteStopSymbols")], re));
const ft = re;
let Q = class extends U {
  constructor(e) {
    super(e),
      (this.directionLines = new De({ color: [0, 122, 194], width: 6 })),
      (this.directionPoints = new ae({
        color: [255, 255, 255],
        size: 6,
        outline: { color: [0, 122, 194], width: 2 },
      })),
      (this.pointBarriers = new ae({
        style: "x",
        size: 10,
        outline: { color: [255, 0, 0], width: 3 },
      })),
      (this.polygonBarriers = new Nt({
        color: [255, 170, 0, 0.6],
        outline: { width: 7.5, color: [255, 0, 0, 0.6] },
      })),
      (this.polylineBarriers = new De({
        width: 7.5,
        color: [255, 85, 0, 0.7],
      })),
      (this.routeInfo = new De({ width: 8, color: [20, 89, 127] })),
      (this.stops = new ft());
  }
};
t([s({ types: Z })], Q.prototype, "directionLines", void 0),
  t([s({ types: Z })], Q.prototype, "directionPoints", void 0),
  t([s({ types: Z })], Q.prototype, "pointBarriers", void 0),
  t([s({ types: Z })], Q.prototype, "polygonBarriers", void 0),
  t([s({ types: Z })], Q.prototype, "polylineBarriers", void 0),
  t([s({ types: Z })], Q.prototype, "routeInfo", void 0),
  t([s({ type: ft })], Q.prototype, "stops", void 0),
  (Q = t([J("esri.layers.support.RouteSymbols")], Q));
const ht = Q;
let K = class extends U {
  constructor(e) {
    super(e),
      (this.dataType = null),
      (this.name = null),
      (this.parameterNames = null),
      (this.restrictionUsageParameterName = null),
      (this.timeNeutralAttributeName = null),
      (this.trafficSupport = null),
      (this.units = null),
      (this.usageType = null);
  }
};
t([s({ type: String })], K.prototype, "dataType", void 0),
  t([k(ue, { ignoreUnknown: !1 })], K.prototype, "name", void 0),
  t([s({ type: [String] })], K.prototype, "parameterNames", void 0),
  t(
    [s({ type: String })],
    K.prototype,
    "restrictionUsageParameterName",
    void 0
  ),
  t(
    [k(Ue, { ignoreUnknown: !1 })],
    K.prototype,
    "timeNeutralAttributeName",
    void 0
  ),
  t([s({ type: String })], K.prototype, "trafficSupport", void 0),
  t([k(Xt)], K.prototype, "units", void 0),
  t([k(er)], K.prototype, "usageType", void 0),
  (K = t([J("esri.rest.support.NetworkAttribute")], K));
const yr = K;
let ne = class extends U {
  constructor(e) {
    super(e),
      (this.buildTime = null),
      (this.name = null),
      (this.networkAttributes = null),
      (this.networkSources = null),
      (this.state = null);
  }
};
t([s({ type: Number })], ne.prototype, "buildTime", void 0),
  t([s({ type: String })], ne.prototype, "name", void 0),
  t([s({ type: [yr] })], ne.prototype, "networkAttributes", void 0),
  t([s()], ne.prototype, "networkSources", void 0),
  t([s({ type: String })], ne.prototype, "state", void 0),
  (ne = t([J("esri.rest.support.NetworkDataset")], ne));
const dr = ne;
let M = class extends U {
  constructor(e) {
    super(e),
      (this.accumulateAttributeNames = null),
      (this.attributeParameterValues = null),
      (this.currentVersion = null),
      (this.defaultTravelMode = null),
      (this.directionsLanguage = null),
      (this.directionsLengthUnits = null),
      (this.directionsSupportedLanguages = null),
      (this.directionsTimeAttribute = null),
      (this.hasZ = null),
      (this.impedance = null),
      (this.networkDataset = null),
      (this.supportedTravelModes = null);
  }
  readAccumulateAttributes(e) {
    return L(e) ? null : e.map((r) => ue.fromJSON(r));
  }
  writeAccumulateAttributes(e, r, o) {
    !L(e) && e.length && (r[o] = e.map((i) => ue.toJSON(i)));
  }
  readDefaultTravelMode(e, r) {
    var i, n;
    const o =
      ((i = r.supportedTravelModes) == null
        ? void 0
        : i.find(({ id: p }) => p === r.defaultTravelMode)) ??
      ((n = r.supportedTravelModes) == null
        ? void 0
        : n.find(({ itemId: p }) => p === r.defaultTravelMode));
    return o ? qe.fromJSON(o) : null;
  }
};
t([s()], M.prototype, "accumulateAttributeNames", void 0),
  t(
    [A("accumulateAttributeNames")],
    M.prototype,
    "readAccumulateAttributes",
    null
  ),
  t(
    [se("accumulateAttributeNames")],
    M.prototype,
    "writeAccumulateAttributes",
    null
  ),
  t([s()], M.prototype, "attributeParameterValues", void 0),
  t([s()], M.prototype, "currentVersion", void 0),
  t([s()], M.prototype, "defaultTravelMode", void 0),
  t(
    [A("defaultTravelMode", ["defaultTravelMode", "supportedTravelModes"])],
    M.prototype,
    "readDefaultTravelMode",
    null
  ),
  t([s()], M.prototype, "directionsLanguage", void 0),
  t([k(mt)], M.prototype, "directionsLengthUnits", void 0),
  t([s()], M.prototype, "directionsSupportedLanguages", void 0),
  t(
    [k(Ue, { ignoreUnknown: !1 })],
    M.prototype,
    "directionsTimeAttribute",
    void 0
  ),
  t([s()], M.prototype, "hasZ", void 0),
  t([k(ue, { ignoreUnknown: !1 })], M.prototype, "impedance", void 0),
  t([s({ type: dr })], M.prototype, "networkDataset", void 0),
  t([s({ type: [qe] })], M.prototype, "supportedTravelModes", void 0),
  (M = t([J("esri.rest.support.NetworkServiceDescription")], M));
const mr = M,
  fr = pt.getLogger("esri.rest.networkService");
function Re(e, r, o, i) {
  (i[o] = [r.length, r.length + e.length]),
    e.forEach((n) => {
      r.push(n.geometry);
    });
}
async function vt(e, r, o) {
  if (!e)
    throw new W(
      "network-service:missing-url",
      "Url to Network service is missing"
    );
  const i = Ne({ f: "json", token: r }, o),
    { data: n } = await ce(e, i),
    p =
      n.currentVersion >= 10.4
        ? (async function (B, R, m) {
            try {
              const N = Ne({ f: "json", token: R }, m),
                D = Me(B) + "/retrieveTravelModes",
                {
                  data: { supportedTravelModes: y, defaultTravelMode: b },
                } = await ce(D, N);
              return { supportedTravelModes: y, defaultTravelMode: b };
            } catch (N) {
              throw new W(
                "network-service:retrieveTravelModes",
                "Could not get to the NAServer's retrieveTravelModes.",
                { error: N }
              );
            }
          })(e, r, o)
        : (async function (B, R) {
            var G, V, H;
            const m = Ne({ f: "json" }, R),
              { data: N } = await ce(B.replace(/\/rest\/.*$/i, "/info"), m);
            if (!N || !N.owningSystemUrl)
              return { supportedTravelModes: [], defaultTravelMode: null };
            const { owningSystemUrl: D } = N,
              y = Me(D) + "/sharing/rest/portals/self",
              { data: b } = await ce(y, m),
              T = Pt("helperServices.routingUtilities.url", b);
            if (!T)
              return { supportedTravelModes: [], defaultTravelMode: null };
            const a = ut(D),
              u = /\/solve$/i.test(a.path)
                ? "Route"
                : /\/solveclosestfacility$/i.test(a.path)
                ? "ClosestFacility"
                : "ServiceAreas",
              P = Ne({ f: "json", serviceName: u }, R),
              F = Me(T) + "/GetTravelModes/execute",
              C = await ce(F, P),
              z = [];
            let O = null;
            if (
              (V =
                (G = C == null ? void 0 : C.data) == null
                  ? void 0
                  : G.results) != null &&
              V.length
            ) {
              const ee = C.data.results;
              for (const j of ee)
                if (j.paramName === "supportedTravelModes") {
                  if ((H = j.value) != null && H.features) {
                    for (const { attributes: _ } of j.value.features)
                      if (_) {
                        const we = JSON.parse(_.TravelMode);
                        z.push(we);
                      }
                  }
                } else j.paramName === "defaultTravelMode" && (O = j.value);
            }
            return { supportedTravelModes: z, defaultTravelMode: O };
          })(e, o),
    { defaultTravelMode: h, supportedTravelModes: f } = await p;
  return (
    (n.defaultTravelMode = h), (n.supportedTravelModes = f), mr.fromJSON(n)
  );
}
const et = new ct({
  esriJobMessageTypeInformative: "informative",
  esriJobMessageTypeProcessDefinition: "process-definition",
  esriJobMessageTypeProcessStart: "process-start",
  esriJobMessageTypeProcessStop: "process-stop",
  esriJobMessageTypeWarning: "warning",
  esriJobMessageTypeError: "error",
  esriJobMessageTypeEmpty: "empty",
  esriJobMessageTypeAbort: "abort",
});
let be = class extends U {
  constructor(e) {
    super(e), (this.description = null), (this.type = null);
  }
};
t(
  [s({ type: String, json: { write: !0 } })],
  be.prototype,
  "description",
  void 0
),
  t(
    [s({ type: String, json: { read: et.read, write: et.write } })],
    be.prototype,
    "type",
    void 0
  ),
  (be = t([J("esri.rest.support.GPMessage")], be));
const hr = be,
  tt = new ct({
    0: "informative",
    1: "process-definition",
    2: "process-start",
    3: "process-stop",
    50: "warning",
    100: "error",
    101: "empty",
    200: "abort",
  });
let Oe = class extends hr {
  constructor(e) {
    super(e), (this.type = null);
  }
};
t(
  [s({ type: String, json: { read: tt.read, write: tt.write } })],
  Oe.prototype,
  "type",
  void 0
),
  (Oe = t([J("esri.rest.support.NAMessage")], Oe));
const vr = Oe;
let Te = class extends U {
  constructor(e) {
    super(e);
  }
};
t([s({ json: { read: { source: "string" } } })], Te.prototype, "text", void 0),
  t([k(tr, { name: "stringType" })], Te.prototype, "type", void 0),
  (Te = t([J("esri.rest.support.DirectionsString")], Te));
const wt = Te;
let oe = class extends U {
  constructor(e) {
    super(e),
      (this.arriveTime = null),
      (this.arriveTimeOffset = null),
      (this.geometry = null),
      (this.strings = null);
  }
  readArriveTimeOffset(e, r) {
    return rr(r.ETA, r.arriveTimeUTC);
  }
  readGeometry(e, r) {
    return yt.fromJSON(r.point);
  }
};
t(
  [s({ type: Date, json: { read: { source: "arriveTimeUTC" } } })],
  oe.prototype,
  "arriveTime",
  void 0
),
  t([s()], oe.prototype, "arriveTimeOffset", void 0),
  t(
    [A("arriveTimeOffset", ["arriveTimeUTC", "ETA"])],
    oe.prototype,
    "readArriveTimeOffset",
    null
  ),
  t([s({ type: yt })], oe.prototype, "geometry", void 0),
  t([A("geometry", ["point"])], oe.prototype, "readGeometry", null),
  t([s({ type: [wt] })], oe.prototype, "strings", void 0),
  (oe = t([J("esri.rest.support.DirectionsEvent")], oe));
const wr = oe;
let de = class extends pe {
  constructor(e) {
    super(e), (this.events = null), (this.strings = null);
  }
  readGeometry(e, r) {
    const o = (function (i) {
      if (L(i) || i === "") return null;
      let n = 0,
        p = 0,
        h = 0,
        f = 0;
      const B = [];
      let R,
        m,
        N,
        D,
        y,
        b,
        T,
        a,
        u = 0,
        P = 0,
        F = 0;
      if (
        ((y = i.match(/((\+|\-)[^\+\-\|]+|\|)/g)),
        y || (y = []),
        parseInt(y[u], 32) === 0)
      ) {
        u = 2;
        const C = parseInt(y[u], 32);
        u++,
          (b = parseInt(y[u], 32)),
          u++,
          1 & C && ((P = y.indexOf("|") + 1), (T = parseInt(y[P], 32)), P++),
          2 & C && ((F = y.indexOf("|", P) + 1), (a = parseInt(y[F], 32)), F++);
      } else (b = parseInt(y[u], 32)), u++;
      for (; u < y.length && y[u] !== "|"; ) {
        (R = parseInt(y[u], 32) + n),
          u++,
          (n = R),
          (m = parseInt(y[u], 32) + p),
          u++,
          (p = m);
        const C = [R / b, m / b];
        P && ((D = parseInt(y[P], 32) + h), P++, (h = D), C.push(D / T)),
          F && ((N = parseInt(y[F], 32) + f), F++, (f = N), C.push(N / a)),
          B.push(C);
      }
      return { paths: [B], hasZ: P > 0, hasM: F > 0 };
    })(r.compressedGeometry);
    return d(o) ? _e.fromJSON(o) : null;
  }
};
t([s({ type: [wr] })], de.prototype, "events", void 0),
  t(
    [A("geometry", ["compressedGeometry"])],
    de.prototype,
    "readGeometry",
    null
  ),
  t([s({ type: [wt] })], de.prototype, "strings", void 0),
  (de = t([J("esri.rest.support.DirectionsFeature")], de));
const gr = de;
let E = class extends X {
  constructor(e) {
    super(e),
      (this.extent = null),
      (this.features = []),
      (this.geometryType = "polyline"),
      (this.routeId = null),
      (this.routeName = null),
      (this.totalDriveTime = null),
      (this.totalLength = null),
      (this.totalTime = null);
  }
  readFeatures(e, r) {
    if (!e) return [];
    const o = r.summary.envelope.spatialReference ?? r.spatialReference,
      i = o && ie.fromJSON(o);
    return e.map((n) => {
      const p = gr.fromJSON(n);
      if ((d(p.geometry) && (p.geometry.spatialReference = i), d(p.events)))
        for (const h of p.events)
          d(h.geometry) && (h.geometry.spatialReference = i);
      return p;
    });
  }
  get mergedGeometry() {
    return this.features
      ? (function (e, r) {
          if (e.length === 0) return new _e({ spatialReference: r });
          const o = [];
          for (const h of e) for (const f of h.paths) o.push(...f);
          const i = [];
          o.forEach((h, f) => {
            (f !== 0 && h[0] === o[f - 1][0] && h[1] === o[f - 1][1]) ||
              i.push(h);
          });
          const { hasM: n, hasZ: p } = e[0];
          return new _e({ hasM: n, hasZ: p, paths: [i], spatialReference: r });
        })(
          this.features.map(({ geometry: e }) => ye(e)),
          this.extent.spatialReference
        )
      : null;
  }
  get strings() {
    return this.features
      .map(({ strings: e }) => e)
      .flat()
      .filter(d);
  }
};
t(
  [s({ type: dt, json: { read: { source: "summary.envelope" } } })],
  E.prototype,
  "extent",
  void 0
),
  t([s({ nonNullable: !0 })], E.prototype, "features", void 0),
  t([A("features")], E.prototype, "readFeatures", null),
  t([s()], E.prototype, "geometryType", void 0),
  t([s({ readOnly: !0 })], E.prototype, "mergedGeometry", null),
  t([s()], E.prototype, "routeId", void 0),
  t([s()], E.prototype, "routeName", void 0),
  t([s({ value: null, readOnly: !0 })], E.prototype, "strings", null),
  t(
    [s({ json: { read: { source: "summary.totalDriveTime" } } })],
    E.prototype,
    "totalDriveTime",
    void 0
  ),
  t(
    [s({ json: { read: { source: "summary.totalLength" } } })],
    E.prototype,
    "totalLength",
    void 0
  ),
  t(
    [s({ json: { read: { source: "summary.totalTime" } } })],
    E.prototype,
    "totalTime",
    void 0
  ),
  (E = t([J("esri.rest.support.DirectionsFeatureSet")], E));
const Sr = E;
let q = class extends U {
  constructor(e) {
    super(e),
      (this.directionLines = null),
      (this.directionPoints = null),
      (this.directions = null),
      (this.route = null),
      (this.routeName = null),
      (this.stops = null),
      (this.traversedEdges = null),
      (this.traversedJunctions = null),
      (this.traversedTurns = null);
  }
};
t([s({ type: X, json: { write: !0 } })], q.prototype, "directionLines", void 0),
  t(
    [s({ type: X, json: { write: !0 } })],
    q.prototype,
    "directionPoints",
    void 0
  ),
  t([s({ type: Sr, json: { write: !0 } })], q.prototype, "directions", void 0),
  t([s({ type: pe, json: { write: !0 } })], q.prototype, "route", void 0),
  t(
    [s({ type: String, json: { write: !0 } })],
    q.prototype,
    "routeName",
    void 0
  ),
  t([s({ type: [pe], json: { write: !0 } })], q.prototype, "stops", void 0),
  t(
    [s({ type: X, json: { write: !0 } })],
    q.prototype,
    "traversedEdges",
    void 0
  ),
  t(
    [s({ type: X, json: { write: !0 } })],
    q.prototype,
    "traversedJunctions",
    void 0
  ),
  t(
    [s({ type: X, json: { write: !0 } })],
    q.prototype,
    "traversedTurns",
    void 0
  ),
  (q = t([J("esri.rest.support.RouteResult")], q));
const br = q;
function ke(e) {
  return e ? X.fromJSON(e).features.filter(d) : [];
}
let $ = class extends U {
  constructor(e) {
    super(e),
      (this.messages = null),
      (this.pointBarriers = null),
      (this.polylineBarriers = null),
      (this.polygonBarriers = null),
      (this.routeResults = null);
  }
  readPointBarriers(e, r) {
    return ke(r.barriers);
  }
  readPolylineBarriers(e) {
    return ke(e);
  }
  readPolygonBarriers(e) {
    return ke(e);
  }
};
t([s({ type: [vr] })], $.prototype, "messages", void 0),
  t([s({ type: [pe] })], $.prototype, "pointBarriers", void 0),
  t([A("pointBarriers", ["barriers"])], $.prototype, "readPointBarriers", null),
  t([s({ type: [pe] })], $.prototype, "polylineBarriers", void 0),
  t([A("polylineBarriers")], $.prototype, "readPolylineBarriers", null),
  t([s({ type: [pe] })], $.prototype, "polygonBarriers", void 0),
  t([A("polygonBarriers")], $.prototype, "readPolygonBarriers", null),
  t([s({ type: [br] })], $.prototype, "routeResults", void 0),
  ($ = t([J("esri.rest.support.RouteSolveResult")], $));
const Tr = $;
function Ie(e) {
  return e instanceof X;
}
async function Br(e, r, o) {
  const i = [],
    n = [],
    p = {},
    h = {},
    f = ut(e),
    { path: B } = f;
  Ie(r.stops) && Re(r.stops.features, n, "stops.features", p),
    Ie(r.pointBarriers) &&
      Re(r.pointBarriers.features, n, "pointBarriers.features", p),
    Ie(r.polylineBarriers) &&
      Re(r.polylineBarriers.features, n, "polylineBarriers.features", p),
    Ie(r.polygonBarriers) &&
      Re(r.polygonBarriers.features, n, "polygonBarriers.features", p);
  const R = await Rt(n);
  for (const y in p) {
    const b = p[y];
    i.push(y), (h[y] = R.slice(b[0], b[1]));
  }
  if (
    (function (y, b) {
      for (let T = 0; T < b.length; T++) {
        const a = y[b[T]];
        if (a && a.length) {
          for (const u of a) if (d(u) && u.hasZ) return !0;
        }
      }
      return !1;
    })(h, i)
  ) {
    let y = null;
    try {
      y = await vt(B, r.apiKey, o);
    } catch {}
    y &&
      !y.hasZ &&
      (function (b, T) {
        for (let a = 0; a < T.length; a++) {
          const u = b[T[a]];
          if (u && u.length) for (const P of u) P.z = void 0;
        }
        fr.warnOnce(`The remote Network Analysis service is powered by a network dataset which is not Z-aware.
Z-coordinates of the input geometry are ignored.`);
      })(h, i);
  }
  for (const y in h)
    h[y].forEach((b, T) => {
      r.get(y)[T].geometry = b;
    });
  const m = { ...o, query: { ...f.query, ...or(r), f: "json" } },
    N = B.endsWith("/solve") ? B : `${B}/solve`,
    { data: D } = await ce(N, m);
  return (function (y) {
    const {
        barriers: b,
        directionLines: T,
        directionPoints: a,
        directions: u,
        messages: P,
        polygonBarriers: F,
        polylineBarriers: C,
        routes: z,
        stops: O,
        traversedEdges: G,
        traversedJunctions: V,
        traversedTurns: H,
      } = y,
      ee = (w) => {
        const I = _.find((S) => S.routeName === w);
        if (d(I)) return I;
        const v = { routeId: _.length + 1, routeName: w };
        return _.push(v), v;
      },
      j = (w) => {
        const I = _.find((S) => S.routeId === w);
        if (d(I)) return I;
        const v = { routeId: w, routeName: null };
        return _.push(v), v;
      },
      _ = [];
    z == null ||
      z.features.forEach((w, I) => {
        w.geometry.spatialReference = z.spatialReference;
        const v = w.attributes.Name,
          S = I + 1;
        _.push({ routeId: S, routeName: v, route: w });
      }),
      u == null ||
        u.forEach((w) => {
          const { routeName: I } = w;
          ee(I).directions = w;
        });
    const we =
      O != null &&
      O.features.every((w) => L(w.attributes.RouteName)) &&
      _.length > 0
        ? _[0].routeName
        : null;
    return (
      O == null ||
        O.features.forEach((w) => {
          var I;
          w.geometry &&
            ((I = w.geometry).spatialReference ??
              (I.spatialReference = O.spatialReference));
          const v = we ?? w.attributes.RouteName,
            S = ee(v);
          S.stops ?? (S.stops = []), S.stops.push(w);
        }),
      T == null ||
        T.features.forEach((w) => {
          const I = w.attributes.RouteID,
            v = j(I),
            { geometryType: S, spatialReference: te } = T;
          v.directionLines ??
            (v.directionLines = {
              features: [],
              geometryType: S,
              spatialReference: te,
            }),
            v.directionLines.features.push(w);
        }),
      a == null ||
        a.features.forEach((w) => {
          const I = w.attributes.RouteID,
            v = j(I),
            { geometryType: S, spatialReference: te } = a;
          v.directionPoints ??
            (v.directionPoints = {
              features: [],
              geometryType: S,
              spatialReference: te,
            }),
            v.directionPoints.features.push(w);
        }),
      G == null ||
        G.features.forEach((w) => {
          const I = w.attributes.RouteID,
            v = j(I),
            { geometryType: S, spatialReference: te } = G;
          v.traversedEdges ??
            (v.traversedEdges = {
              features: [],
              geometryType: S,
              spatialReference: te,
            }),
            v.traversedEdges.features.push(w);
        }),
      V == null ||
        V.features.forEach((w) => {
          const I = w.attributes.RouteID,
            v = j(I),
            { geometryType: S, spatialReference: te } = V;
          v.traversedJunctions ??
            (v.traversedJunctions = {
              features: [],
              geometryType: S,
              spatialReference: te,
            }),
            v.traversedJunctions.features.push(w);
        }),
      H == null ||
        H.features.forEach((w) => {
          const I = w.attributes.RouteID,
            v = j(I);
          v.traversedTurns ?? (v.traversedTurns = { features: [] }),
            v.traversedTurns.features.push(w);
        }),
      Tr.fromJSON({
        routeResults: _,
        barriers: b,
        polygonBarriers: F,
        polylineBarriers: C,
        messages: P,
      })
    );
  })(D);
}
const Nr = {
  type: String,
  json: { read: { source: "token" }, write: { target: "token" } },
};
let Y = class extends Ge(U) {
  constructor(e) {
    super(e),
      (this.doNotLocateOnRestrictedElements = null),
      (this.geometry = null),
      (this.geometryType = null),
      (this.name = null),
      (this.spatialRelationship = null),
      (this.type = "layer"),
      (this.where = null);
  }
};
t(
  [s({ type: Boolean, json: { write: !0 } })],
  Y.prototype,
  "doNotLocateOnRestrictedElements",
  void 0
),
  t(
    [s({ types: It, json: { read: At, write: !0 } })],
    Y.prototype,
    "geometry",
    void 0
  ),
  t([k(sr)], Y.prototype, "geometryType", void 0),
  t(
    [s({ type: String, json: { name: "layerName", write: !0 } })],
    Y.prototype,
    "name",
    void 0
  ),
  t(
    [k(ir, { name: "spatialRel" })],
    Y.prototype,
    "spatialRelationship",
    void 0
  ),
  t([s({ type: String, json: { write: !0 } })], Y.prototype, "type", void 0),
  t([s({ type: String, json: { write: !0 } })], Y.prototype, "where", void 0),
  (Y = t([J("esri.rest.support.DataLayer")], Y));
const Pr = Y;
var xe;
let je = (xe = class extends X {
  constructor(e) {
    super(e), (this.doNotLocateOnRestrictedElements = null);
  }
  clone() {
    return new xe({
      doNotLocateOnRestrictedElements: this.doNotLocateOnRestrictedElements,
      ...this.cloneProperties(),
    });
  }
});
t(
  [s({ type: Boolean, json: { write: !0 } })],
  je.prototype,
  "doNotLocateOnRestrictedElements",
  void 0
),
  (je = xe = t([J("esri.rest.support.NetworkFeatureSet")], je));
const Rr = je;
let Be = class extends Ge(U) {
  constructor(e) {
    super(e), (this.doNotLocateOnRestrictedElements = null), (this.url = null);
  }
};
t(
  [s({ type: Boolean, json: { write: !0 } })],
  Be.prototype,
  "doNotLocateOnRestrictedElements",
  void 0
),
  t([s({ type: String, json: { write: !0 } })], Be.prototype, "url", void 0),
  (Be = t([J("esri.rest.support.NetworkUrl")], Be));
const Ir = Be;
var Fe;
function Ae(e, r, o) {
  d(e) &&
    (r[o] = x.isCollection(e)
      ? { features: e.toArray().map((i) => i.toJSON()) }
      : e.toJSON());
}
let l = (Fe = class extends Ge(U) {
  constructor(e) {
    super(e),
      (this.accumulateAttributes = null),
      (this.apiKey = null),
      (this.attributeParameterValues = null),
      (this.directionsLanguage = null),
      (this.directionsLengthUnits = null),
      (this.directionsOutputType = null),
      (this.directionsStyleName = null),
      (this.directionsTimeAttribute = null),
      (this.findBestSequence = null),
      (this.geometryPrecision = null),
      (this.geometryPrecisionM = null),
      (this.geometryPrecisionZ = null),
      (this.ignoreInvalidLocations = null),
      (this.impedanceAttribute = null),
      (this.outputGeometryPrecision = null),
      (this.outputGeometryPrecisionUnits = null),
      (this.outputLines = "true-shape"),
      (this.outSpatialReference = null),
      (this.overrides = null),
      (this.pointBarriers = null),
      (this.polygonBarriers = null),
      (this.polylineBarriers = null),
      (this.preserveFirstStop = null),
      (this.preserveLastStop = null),
      (this.preserveObjectID = null),
      (this.restrictionAttributes = null),
      (this.restrictUTurns = null),
      (this.returnBarriers = !1),
      (this.returnDirections = !1),
      (this.returnPolygonBarriers = !1),
      (this.returnPolylineBarriers = !1),
      (this.returnRoutes = !0),
      (this.returnStops = !1),
      (this.returnTraversedEdges = null),
      (this.returnTraversedJunctions = null),
      (this.returnTraversedTurns = null),
      (this.returnZ = !0),
      (this.startTime = null),
      (this.startTimeIsUTC = !0),
      (this.stops = null),
      (this.timeWindowsAreUTC = null),
      (this.travelMode = null),
      (this.useHierarchy = null),
      (this.useTimeWindows = null);
  }
  static from(e) {
    return Lt(Fe, e);
  }
  readAccumulateAttributes(e) {
    return L(e) ? null : e.map((r) => ue.fromJSON(r));
  }
  writeAccumulateAttributes(e, r, o) {
    !L(e) && e.length && (r[o] = e.map((i) => ue.toJSON(i)));
  }
  writePointBarriers(e, r, o) {
    Ae(e, r, o);
  }
  writePolygonBarrier(e, r, o) {
    Ae(e, r, o);
  }
  writePolylineBarrier(e, r, o) {
    Ae(e, r, o);
  }
  readRestrictionAttributes(e) {
    return L(e) ? null : e.map((r) => Xe.fromJSON(r));
  }
  writeRestrictionAttributes(e, r, o) {
    !L(e) && e.length && (r[o] = e.map((i) => Xe.toJSON(i)));
  }
  readStartTime(e, r) {
    const { startTime: o } = r;
    return L(o) ? null : o === "now" ? "now" : new Date(o);
  }
  writeStartTime(e, r) {
    L(e) || (r.startTime = e === "now" ? "now" : e.getTime());
  }
  readStops(e, r) {
    return (function (o) {
      return (function (i) {
        return i && "type" in i;
      })(o)
        ? Pr.fromJSON(o)
        : (function (i) {
            return i && "url" in i;
          })(o)
        ? Ir.fromJSON(o)
        : (function (i) {
            return (
              i && "features" in i && "doNotLocateOnRestrictedElements" in i
            );
          })(o)
        ? Rr.fromJSON(o)
        : (function (i) {
            return i && "features" in i;
          })(o)
        ? X.fromJSON(o)
        : null;
    })(r.stops);
  }
  writeStops(e, r, o) {
    Ae(e, r, o);
  }
});
t(
  [
    s({
      type: [String],
      json: { name: "accumulateAttributeNames", write: !0 },
    }),
  ],
  l.prototype,
  "accumulateAttributes",
  void 0
),
  t([A("accumulateAttributes")], l.prototype, "readAccumulateAttributes", null),
  t(
    [se("accumulateAttributes")],
    l.prototype,
    "writeAccumulateAttributes",
    null
  ),
  t([s(Nr)], l.prototype, "apiKey", void 0),
  t(
    [s({ json: { write: !0 } })],
    l.prototype,
    "attributeParameterValues",
    void 0
  ),
  t(
    [s({ type: String, json: { write: !0 } })],
    l.prototype,
    "directionsLanguage",
    void 0
  ),
  t([k(mt)], l.prototype, "directionsLengthUnits", void 0),
  t([k(nr)], l.prototype, "directionsOutputType", void 0),
  t([k(ar)], l.prototype, "directionsStyleName", void 0),
  t(
    [k(Ue, { name: "directionsTimeAttributeName", ignoreUnknown: !1 })],
    l.prototype,
    "directionsTimeAttribute",
    void 0
  ),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "findBestSequence",
    void 0
  ),
  t(
    [s({ type: Number, json: { write: !0 } })],
    l.prototype,
    "geometryPrecision",
    void 0
  ),
  t(
    [s({ type: Number, json: { write: !0 } })],
    l.prototype,
    "geometryPrecisionM",
    void 0
  ),
  t(
    [s({ type: Number, json: { write: !0 } })],
    l.prototype,
    "geometryPrecisionZ",
    void 0
  ),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "ignoreInvalidLocations",
    void 0
  ),
  t(
    [k(ue, { name: "impedanceAttributeName", ignoreUnknown: !1 })],
    l.prototype,
    "impedanceAttribute",
    void 0
  ),
  t(
    [s({ type: Number, json: { write: !0 } })],
    l.prototype,
    "outputGeometryPrecision",
    void 0
  ),
  t([k(lr)], l.prototype, "outputGeometryPrecisionUnits", void 0),
  t([k(pr)], l.prototype, "outputLines", void 0),
  t(
    [s({ type: ie, json: { name: "outSR", write: !0 } })],
    l.prototype,
    "outSpatialReference",
    void 0
  ),
  t([s({ json: { write: !0 } })], l.prototype, "overrides", void 0),
  t(
    [s({ json: { name: "barriers", write: !0 } })],
    l.prototype,
    "pointBarriers",
    void 0
  ),
  t([se("pointBarriers")], l.prototype, "writePointBarriers", null),
  t([s({ json: { write: !0 } })], l.prototype, "polygonBarriers", void 0),
  t([se("polygonBarriers")], l.prototype, "writePolygonBarrier", null),
  t([s({ json: { write: !0 } })], l.prototype, "polylineBarriers", void 0),
  t([se("polylineBarriers")], l.prototype, "writePolylineBarrier", null),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "preserveFirstStop",
    void 0
  ),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "preserveLastStop",
    void 0
  ),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "preserveObjectID",
    void 0
  ),
  t(
    [
      s({
        type: [String],
        json: { name: "restrictionAttributeNames", write: !0 },
      }),
    ],
    l.prototype,
    "restrictionAttributes",
    void 0
  ),
  t(
    [A("restrictionAttributes")],
    l.prototype,
    "readRestrictionAttributes",
    null
  ),
  t(
    [se("restrictionAttributes")],
    l.prototype,
    "writeRestrictionAttributes",
    null
  ),
  t([k(ur)], l.prototype, "restrictUTurns", void 0),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "returnBarriers",
    void 0
  ),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "returnDirections",
    void 0
  ),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "returnPolygonBarriers",
    void 0
  ),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "returnPolylineBarriers",
    void 0
  ),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "returnRoutes",
    void 0
  ),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "returnStops",
    void 0
  ),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "returnTraversedEdges",
    void 0
  ),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "returnTraversedJunctions",
    void 0
  ),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "returnTraversedTurns",
    void 0
  ),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "returnZ",
    void 0
  ),
  t(
    [s({ type: Date, json: { type: Number, write: !0 } })],
    l.prototype,
    "startTime",
    void 0
  ),
  t([A("startTime")], l.prototype, "readStartTime", null),
  t([se("startTime")], l.prototype, "writeStartTime", null),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "startTimeIsUTC",
    void 0
  ),
  t([s({ json: { write: !0 } })], l.prototype, "stops", void 0),
  t([A("stops")], l.prototype, "readStops", null),
  t([se("stops")], l.prototype, "writeStops", null),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "timeWindowsAreUTC",
    void 0
  ),
  t([s({ type: qe, json: { write: !0 } })], l.prototype, "travelMode", void 0),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "useHierarchy",
    void 0
  ),
  t(
    [s({ type: Boolean, json: { write: !0 } })],
    l.prototype,
    "useTimeWindows",
    void 0
  ),
  (l = Fe = t([J("esri.rest.support.RouteParameters")], l));
const rt = l;
function Je(e) {
  return e.length ? e : null;
}
function Ee(e) {
  switch (e) {
    case "esriGeometryPoint":
      return {
        type: "esriSMS",
        style: "esriSMSCircle",
        size: 12,
        color: [0, 0, 0, 0],
        outline: Ee("esriGeometryPolyline"),
      };
    case "esriGeometryPolyline":
      return {
        type: "esriSLS",
        style: "esriSLSSolid",
        width: 1,
        color: [0, 0, 0, 0],
      };
    case "esriGeometryPolygon":
      return {
        type: "esriSFS",
        style: "esriSFSNull",
        outline: Ee("esriGeometryPolyline"),
      };
  }
}
function Le(e) {
  return "layers" in e;
}
async function ot(e) {
  const r = ie.WGS84;
  return await Kt(e.spatialReference, r), $t(e, r);
}
function le(e, r) {
  switch (r) {
    case "seconds":
      return e / 60;
    case "hours":
      return 60 * e;
    case "days":
      return 60 * e * 24;
    default:
      return e;
  }
}
function Ce(e, r) {
  return r === "decimal-degrees" || r === "points" || r === "unknown"
    ? e
    : Ht(e, r, "meters");
}
const Ar = x.ofType(ge),
  Lr = x.ofType(Se),
  st = x.ofType(me),
  it = x.ofType(fe),
  nt = x.ofType(he),
  at = x.ofType(ve),
  gt = "esri.layers.RouteLayer",
  lt = pt.getLogger(gt);
let g = class extends Ot(jt(Dt(Mt(kt(Jt(Qt)))))) {
  constructor(e) {
    super(e),
      (this._cachedServiceDescription = null),
      (this._featureCollection = null),
      (this._type = "Feature Collection"),
      (this.defaultSymbols = new ht()),
      (this.directionLines = null),
      (this.directionPoints = null),
      (this.featureCollectionType = "route"),
      (this.legendEnabled = !1),
      (this.maxScale = 0),
      (this.minScale = 0),
      (this.pointBarriers = new st()),
      (this.polygonBarriers = new it()),
      (this.polylineBarriers = new nt()),
      (this.routeInfo = null),
      (this.spatialReference = ie.WGS84),
      (this.stops = new at()),
      (this.type = "route");
    const r = () => {
      this._setStopSymbol(this.stops);
    };
    this.addHandles(
      Ct(() => this.stops, "change", r, { sync: !0, onListenerAdd: r })
    );
  }
  writeFeatureCollectionWebmap(e, r, o, i) {
    const n = [
        this._writePolygonBarriers(),
        this._writePolylineBarriers(),
        this._writePointBarriers(),
        this._writeRouteInfo(),
        this._writeDirectionLines(),
        this._writeDirectionPoints(),
        this._writeStops(),
      ].filter((f) => !!f),
      p = n.map((f, B) => B),
      h = i.origin === "web-map" ? "featureCollection.layers" : "layers";
    _t(h, n, r),
      (r.opacity = this.opacity),
      (r.visibility = this.visible),
      (r.visibleLayers = p);
  }
  readDirectionLines(e, r) {
    return this._getNetworkFeatures(r, "DirectionLines", (o) =>
      ge.fromGraphic(o)
    );
  }
  readDirectionPoints(e, r) {
    return this._getNetworkFeatures(r, "DirectionPoints", (o) =>
      Se.fromGraphic(o)
    );
  }
  get fullExtent() {
    const e = new dt({
      xmin: -180,
      ymin: -90,
      xmax: 180,
      ymax: 90,
      spatialReference: ie.WGS84,
    });
    if (d(this.routeInfo) && d(this.routeInfo.geometry))
      return this.routeInfo.geometry.extent ?? e;
    if (L(this.stops)) return e;
    const r = this.stops.filter((n) => d(n.geometry));
    if (r.length < 2) return e;
    const { spatialReference: o } = r.getItemAt(0).geometry;
    if (L(o)) return e;
    const i = r.toArray().map((n) => {
      const p = n.geometry;
      return [p.x, p.y];
    });
    return new xt({ points: i, spatialReference: o }).extent;
  }
  readMaxScale(e, r) {
    var i, n;
    const o =
      (n = Le(r)
        ? r.layers
        : (i = r.featureCollection) == null
        ? void 0
        : i.layers) == null
        ? void 0
        : n.find((p) => d(p.layerDefinition.maxScale));
    return (o == null ? void 0 : o.layerDefinition.maxScale) ?? 0;
  }
  readMinScale(e, r) {
    var i, n;
    const o =
      (n = Le(r)
        ? r.layers
        : (i = r.featureCollection) == null
        ? void 0
        : i.layers) == null
        ? void 0
        : n.find((p) => d(p.layerDefinition.minScale));
    return (o == null ? void 0 : o.layerDefinition.minScale) ?? 0;
  }
  readPointBarriers(e, r) {
    return this._getNetworkFeatures(r, "Barriers", (o) => me.fromGraphic(o));
  }
  readPolygonBarriers(e, r) {
    return this._getNetworkFeatures(r, "PolygonBarriers", (o) =>
      fe.fromGraphic(o)
    );
  }
  readPolylineBarriers(e, r) {
    return this._getNetworkFeatures(r, "PolylineBarriers", (o) =>
      he.fromGraphic(o)
    );
  }
  readRouteInfo(e, r) {
    const o = this._getNetworkFeatures(r, "RouteInfo", (i) =>
      Pe.fromGraphic(i)
    );
    return o.length > 0 ? o.getItemAt(0) : null;
  }
  readSpatialReference(e, r) {
    var f, B;
    const o = Le(r)
      ? r.layers
      : (f = r.featureCollection) == null
      ? void 0
      : f.layers;
    if (!(o != null && o.length)) return ie.WGS84;
    const { layerDefinition: i, featureSet: n } = o[0],
      p = n.features[0],
      h =
        ((B = ye(p == null ? void 0 : p.geometry)) == null
          ? void 0
          : B.spatialReference) ??
        n.spatialReference ??
        i.spatialReference ??
        i.extent.spatialReference ??
        Qe;
    return ie.fromJSON(h);
  }
  readStops(e, r) {
    return this._getNetworkFeatures(
      r,
      "Stops",
      (o) => ve.fromGraphic(o),
      (o) => this._setStopSymbol(o)
    );
  }
  get title() {
    return d(this.routeInfo) && d(this.routeInfo.name)
      ? this.routeInfo.name
      : "Route";
  }
  set title(e) {
    this._overrideIfSome("title", e);
  }
  get url() {
    return Ye.routeServiceUrl;
  }
  set url(e) {
    e != null
      ? this._set("url", Ft(e, lt))
      : this._set("url", Ye.routeServiceUrl);
  }
  load(e) {
    return (
      this.addResolvingPromise(
        this.loadFromPortal({ supportedTypes: ["Feature Collection"] }, e)
      ),
      Promise.resolve(this)
    );
  }
  removeAll() {
    this.removeResult(),
      this.pointBarriers.removeAll(),
      this.polygonBarriers.removeAll(),
      this.polylineBarriers.removeAll(),
      this.stops.removeAll();
  }
  removeResult() {
    d(this.directionLines) &&
      (this.directionLines.removeAll(), this._set("directionLines", null)),
      d(this.directionPoints) &&
        (this.directionPoints.removeAll(), this._set("directionPoints", null)),
      d(this.routeInfo) && this._set("routeInfo", null);
  }
  async save() {
    await this.load();
    const { fullExtent: e, portalItem: r } = this;
    if (!r)
      throw new W(
        "routelayer:portal-item-not-set",
        "save() requires to the layer to have a portal item"
      );
    if (!r.id)
      throw new W(
        "routelayer:portal-item-not-saved",
        "Please use saveAs() first to save the routelayer"
      );
    if (r.type !== "Feature Collection")
      throw new W(
        "routelayer:portal-item-wrong-type",
        'Portal item needs to have type "Feature Collection"'
      );
    if (L(this.routeInfo))
      throw new W(
        "routelayer:route-unsolved",
        "save() requires a solved route"
      );
    const { portal: o } = r;
    await o.signIn(), o.user || (await r.reload());
    const { itemUrl: i, itemControl: n } = r;
    if (n !== "admin" && n !== "update")
      throw new W(
        "routelayer:insufficient-permissions",
        "To save this layer, you need to be the owner or an administrator of your organization"
      );
    const p = {
        messages: [],
        origin: "portal-item",
        portal: o,
        url: i ? Et(i) : void 0,
        writtenProperties: [],
      },
      h = this.write(void 0, p);
    return (
      (r.extent = await ot(e)),
      (r.title = this.title),
      await r.update({ data: h }),
      r
    );
  }
  async saveAs(e, r = {}) {
    var f;
    if ((await this.load(), L(this.routeInfo)))
      throw new W(
        "routelayer:route-unsolved",
        "saveAs() requires a solved route"
      );
    const o = Gt.from(e).clone();
    o.extent ?? (o.extent = await ot(this.fullExtent)),
      (o.id = null),
      o.portal ?? (o.portal = Ut.getDefault()),
      o.title ?? (o.title = this.title),
      (o.type = "Feature Collection"),
      (o.typeKeywords = [
        "Data",
        "Feature Collection",
        qt.MULTI_LAYER,
        "Route Layer",
      ]);
    const { portal: i } = o,
      n = {
        messages: [],
        origin: "portal-item",
        portal: i,
        url: null,
        writtenProperties: [],
      };
    await i.signIn();
    const p = r == null ? void 0 : r.folder,
      h = this.write(void 0, n);
    return (
      await ((f = i.user) == null
        ? void 0
        : f.addItem({ item: o, folder: p, data: h })),
      (this.portalItem = o),
      Yt(n),
      (n.portalItem = o),
      o
    );
  }
  async solve(e, r) {
    const o = (e == null ? void 0 : e.stops) ?? this.stops,
      i = (e == null ? void 0 : e.pointBarriers) ?? Je(this.pointBarriers),
      n =
        (e == null ? void 0 : e.polylineBarriers) ?? Je(this.polylineBarriers),
      p = (e == null ? void 0 : e.polygonBarriers) ?? Je(this.polygonBarriers);
    if (L(o))
      throw new W(
        "routelayer:undefined-stops",
        "the route layer must have stops defined in the route parameters."
      );
    if (
      (((function (a) {
        return a.declaredClass === "esri.rest.support.FeatureSet";
      })(o) ||
        (function (a) {
          return a.declaredClass === "esri.rest.support.NetworkFeatureSet";
        })(o)) &&
        o.features.length < 2) ||
      (x.isCollection(o) && o.length < 2)
    )
      throw new W(
        "routelayer:insufficent-stops",
        "the route layer must have two or more stops to solve a route."
      );
    if (x.isCollection(o)) for (const a of o) a.routeName = null;
    const h = e == null ? void 0 : e.apiKey,
      f = this.url,
      B = await this._getServiceDescription(f, h, r),
      R = (e == null ? void 0 : e.travelMode) ?? B.defaultTravelMode,
      m = ye(e == null ? void 0 : e.accumulateAttributes) ?? [];
    d(R) &&
      (m.push(R.distanceAttributeName),
      R.timeAttributeName && m.push(R.timeAttributeName));
    const N = { startTime: new Date() },
      D = {
        accumulateAttributes: m,
        directionsOutputType: "featuresets",
        ignoreInvalidLocations: !0,
        pointBarriers: i,
        polylineBarriers: n,
        polygonBarriers: p,
        preserveFirstStop: !0,
        preserveLastStop: !0,
        returnBarriers: !!i,
        returnDirections: !0,
        returnPolygonBarriers: !!p,
        returnPolylineBarriers: !!n,
        returnRoutes: !0,
        returnStops: !0,
        stops: o,
      },
      y = e ? rt.from(e) : new rt();
    for (const a in N) y[a] == null && (y[a] = N[a]);
    let b;
    y.set(D);
    try {
      b = await Br(f, y, r);
    } catch (a) {
      throw Wt(a)
        ? a
        : new W(
            "routelayer:failed-route-request",
            "the routing request failed",
            { error: a }
          );
    }
    const T = this._toRouteLayerSolution(b);
    return (
      this._isOverridden("title") ||
        (this.title = Zt(T.routeInfo.name, "Route")),
      (function (a, u, P) {
        var We, Ze, ze, Ve, Ke, $e;
        const F =
            (We = u.networkDataset) == null ? void 0 : We.networkAttributes,
          C =
            (F == null
              ? void 0
              : F.filter(({ usageType: c }) => c === "cost")) ?? [],
          z = P.travelMode ?? u.defaultTravelMode;
        if (L(z))
          return void lt.warn(
            "route-layer:missing-travel-mode",
            "The routing service must have a default travel mode or one must be specified in the route parameter."
          );
        const { timeAttributeName: O, distanceAttributeName: G } = z,
          V = C.find(({ name: c }) => c === O),
          H = C.find(({ name: c }) => c === G),
          ee =
            ((Ze = ye(P.travelMode)) == null
              ? void 0
              : Ze.impedanceAttributeName) ??
            ye(P.impedanceAttribute) ??
            u.impedance,
          j = V == null ? void 0 : V.units,
          _ = H == null ? void 0 : H.units;
        if (!j || !_)
          throw new W(
            "routelayer:unknown-impedance-units",
            "the units of either the distance or time impedance are unknown"
          );
        const we = P.directionsLanguage ?? u.directionsLanguage,
          w = ye(P.accumulateAttributes) ?? u.accumulateAttributeNames ?? [],
          I = new Set(
            C.filter(
              ({ name: c }) =>
                c === O || c === G || c === ee || (c != null && w.includes(c))
            ).map(({ name: c }) => c)
          ),
          v = (c) => {
            for (const He in c) I.has(He) || delete c[He];
          };
        for (const c of a.pointBarriers)
          d(c.costs) && ((c.addedCost = c.costs[ee] ?? 0), v(c.costs));
        for (const c of a.polygonBarriers)
          d(c.costs) && ((c.scaleFactor = c.costs[ee] ?? 1), v(c.costs));
        for (const c of a.polylineBarriers)
          d(c.costs) && ((c.scaleFactor = c.costs[ee] ?? 1), v(c.costs));
        const { routeInfo: S } = a,
          {
            findBestSequence: te,
            preserveFirstStop: St,
            preserveLastStop: bt,
            startTimeIsUTC: Tt,
            timeWindowsAreUTC: Bt,
          } = P;
        (S.analysisSettings = new cr({
          accumulateAttributes: w,
          directionsLanguage: we,
          findBestSequence: te,
          preserveFirstStop: St,
          preserveLastStop: bt,
          startTimeIsUTC: Tt,
          timeWindowsAreUTC: Bt,
          travelMode: z,
        })),
          (S.totalDuration = le(
            ((ze = S.totalCosts) == null ? void 0 : ze[O]) ?? 0,
            j
          )),
          (S.totalDistance = Ce(
            ((Ve = S.totalCosts) == null ? void 0 : Ve[G]) ?? 0,
            _
          )),
          (S.totalLateDuration = le(
            ((Ke = S.totalViolations) == null ? void 0 : Ke[O]) ?? 0,
            j
          )),
          (S.totalWaitDuration = le(
            (($e = S.totalWait) == null ? void 0 : $e[O]) ?? 0,
            j
          )),
          d(S.totalCosts) && v(S.totalCosts),
          d(S.totalViolations) && v(S.totalViolations),
          d(S.totalWait) && v(S.totalWait);
        for (const c of a.stops)
          d(c.serviceCosts) &&
            ((c.serviceDuration = le(c.serviceCosts[O] ?? 0, j)),
            (c.serviceDistance = Ce(c.serviceCosts[G] ?? 0, _)),
            v(c.serviceCosts)),
            d(c.cumulativeCosts) &&
              ((c.cumulativeDuration = le(c.cumulativeCosts[O] ?? 0, j)),
              (c.cumulativeDistance = Ce(c.cumulativeCosts[G] ?? 0, _)),
              v(c.cumulativeCosts)),
            d(c.violations) &&
              ((c.lateDuration = le(c.violations[O] ?? 0, j)), v(c.violations)),
            d(c.wait) && ((c.waitDuration = le(c.wait[O] ?? 0, j)), v(c.wait));
      })(T, B, y),
      T
    );
  }
  update(e) {
    const {
      stops: r,
      directionLines: o,
      directionPoints: i,
      pointBarriers: n,
      polylineBarriers: p,
      polygonBarriers: h,
      routeInfo: f,
    } = e;
    this.set({
      stops: r,
      pointBarriers: n,
      polylineBarriers: p,
      polygonBarriers: h,
    }),
      this._set("directionLines", o),
      this._set("directionPoints", i),
      this._set("routeInfo", f),
      d(f.geometry) && (this.spatialReference = f.geometry.spatialReference);
  }
  _getNetworkFeatures(e, r, o, i) {
    var b, T;
    const n =
      (T = Le(e)
        ? e.layers
        : (b = e.featureCollection) == null
        ? void 0
        : b.layers) == null
        ? void 0
        : T.find((a) => a.layerDefinition.name === r);
    if (L(n)) return new x();
    const { layerDefinition: p, popupInfo: h, featureSet: f } = n,
      B = p.drawingInfo.renderer,
      { features: R } = f,
      m =
        f.spatialReference ??
        p.spatialReference ??
        p.extent.spatialReference ??
        Qe,
      N = B && zt(B),
      D = ie.fromJSON(m),
      y = R.map((a) => {
        const u = pe.fromJSON(a);
        d(u.geometry) &&
          d(a.geometry) &&
          L(a.geometry.spatialReference) &&
          (u.geometry.spatialReference = D);
        const P = o(u);
        return (
          P.symbol ??
            (P.symbol =
              (N == null ? void 0 : N.getSymbol(u)) ??
              this._getNetworkSymbol(r)),
          P.popupTemplate ?? (P.popupTemplate = h && Vt.fromJSON(h)),
          P
        );
      });
    return i && y.some((a) => !a.symbol) && i(y), new x(y);
  }
  _getNetworkSymbol(e) {
    switch (e) {
      case "Barriers":
        return this.defaultSymbols.pointBarriers;
      case "DirectionPoints":
        return this.defaultSymbols.directionPoints;
      case "DirectionLines":
        return this.defaultSymbols.directionLines;
      case "PolylineBarriers":
        return this.defaultSymbols.polylineBarriers;
      case "PolygonBarriers":
        return this.defaultSymbols.polygonBarriers;
      case "RouteInfo":
        return this.defaultSymbols.routeInfo;
      case "Stops":
        return null;
    }
  }
  async _getServiceDescription(e, r, o) {
    if (
      d(this._cachedServiceDescription) &&
      this._cachedServiceDescription.url === e
    )
      return this._cachedServiceDescription.serviceDescription;
    const i = await vt(e, r, o);
    return (
      (this._cachedServiceDescription = { serviceDescription: i, url: e }), i
    );
  }
  _setStopSymbol(e) {
    if (
      !e ||
      e.length === 0 ||
      L(this.defaultSymbols.stops) ||
      e.every((m) => d(m.symbol))
    )
      return;
    const {
      first: r,
      last: o,
      middle: i,
      unlocated: n,
      waypoint: p,
      break: h,
    } = this.defaultSymbols.stops;
    if (L(this.routeInfo) || e.length === 1)
      return void e.forEach((m, N) => {
        switch (N) {
          case 0:
            m.symbol = r;
            break;
          case e.length - 1:
            m.symbol = o;
            break;
          default:
            m.symbol = i;
        }
      });
    const f = e.map((m) => m.sequence).filter((m) => d(m)),
      B = Math.min(...f),
      R = Math.max(...f);
    for (const m of e)
      m.sequence !== B
        ? m.sequence !== R
          ? m.status === "ok" || m.status === "not-located-on-closest"
            ? m.locationType !== "waypoint"
              ? m.locationType !== "break"
                ? (m.symbol = i)
                : (m.symbol = h)
              : (m.symbol = p)
            : (m.symbol = n)
          : (m.symbol = o)
        : (m.symbol = r);
  }
  _toRouteLayerSolution(e) {
    var R, m, N, D, y, b, T;
    const r =
      (R = e.routeResults[0].stops) == null
        ? void 0
        : R.map((a) => ve.fromJSON(a.toJSON()));
    this._setStopSymbol(r);
    const o = new at(r),
      i = new it(
        (m = e.polygonBarriers) == null
          ? void 0
          : m.map((a) => {
              const u = fe.fromJSON(a.toJSON());
              return (u.symbol = this.defaultSymbols.polygonBarriers), u;
            })
      ),
      n = new nt(
        (N = e.polylineBarriers) == null
          ? void 0
          : N.map((a) => {
              const u = he.fromJSON(a.toJSON());
              return (u.symbol = this.defaultSymbols.polylineBarriers), u;
            })
      ),
      p = new st(
        (D = e.pointBarriers) == null
          ? void 0
          : D.map((a) => {
              const u = me.fromJSON(a.toJSON());
              return (u.symbol = this.defaultSymbols.pointBarriers), u;
            })
      ),
      h = (y = e.routeResults[0].route) == null ? void 0 : y.toJSON(),
      f = Pe.fromJSON(h);
    f.symbol = this.defaultSymbols.routeInfo;
    const B = new Lr(
      (b = e.routeResults[0].directionPoints) == null
        ? void 0
        : b.features.map((a) => {
            const u = Se.fromJSON(a.toJSON());
            return (u.symbol = this.defaultSymbols.directionPoints), u;
          })
    );
    return {
      directionLines: new Ar(
        (T = e.routeResults[0].directionLines) == null
          ? void 0
          : T.features.map((a) => {
              const u = ge.fromJSON(a.toJSON());
              return (u.symbol = this.defaultSymbols.directionLines), u;
            })
      ),
      directionPoints: B,
      pointBarriers: p,
      polygonBarriers: i,
      polylineBarriers: n,
      routeInfo: f,
      stops: o,
    };
  }
  _writeDirectionLines() {
    return this._writeNetworkFeatures(
      this.directionLines,
      this.defaultSymbols.directionLines,
      "esriGeometryPolyline",
      ge.fields,
      ge.popupInfo,
      "DirectionLines",
      "Direction Lines"
    );
  }
  _writeDirectionPoints() {
    return this._writeNetworkFeatures(
      this.directionPoints,
      this.defaultSymbols.directionPoints,
      "esriGeometryPoint",
      Se.fields,
      Se.popupInfo,
      "DirectionPoints",
      "Direction Points"
    );
  }
  _writeNetworkFeatures(e, r, o, i, n, p, h) {
    if (L(e) || !e.length) return null;
    const f = this.spatialReference.toJSON(),
      { fullExtent: B, maxScale: R, minScale: m } = this;
    return {
      featureSet: {
        features: e.toArray().map((N) =>
          (function (D) {
            const {
              attributes: y,
              geometry: b,
              popupTemplate: T,
              symbol: a,
            } = D.toGraphic().toJSON();
            return { attributes: y, geometry: b, popupInfo: T, symbol: a };
          })(N)
        ),
        geometryType: o,
        spatialReference: f,
      },
      layerDefinition: {
        capabilities: "Query,Update,Editing",
        drawingInfo: {
          renderer: { type: "simple", symbol: d(r) ? r.toJSON() : Ee(o) },
        },
        extent: B.toJSON(),
        fields: i,
        geometryType: o,
        hasM: !1,
        hasZ: !1,
        maxScale: R,
        minScale: m,
        name: p,
        objectIdField: "ObjectID",
        spatialReference: f,
        title: h,
        type: "Feature Layer",
        typeIdField: "",
      },
      popupInfo: n,
    };
  }
  _writePointBarriers() {
    return this._writeNetworkFeatures(
      this.pointBarriers,
      this.defaultSymbols.pointBarriers,
      "esriGeometryPoint",
      me.fields,
      me.popupInfo,
      "Barriers",
      "Point Barriers"
    );
  }
  _writePolygonBarriers() {
    return this._writeNetworkFeatures(
      this.polygonBarriers,
      this.defaultSymbols.polygonBarriers,
      "esriGeometryPolygon",
      fe.fields,
      fe.popupInfo,
      "PolygonBarriers",
      "Polygon Barriers"
    );
  }
  _writePolylineBarriers() {
    return this._writeNetworkFeatures(
      this.polylineBarriers,
      this.defaultSymbols.polylineBarriers,
      "esriGeometryPolyline",
      he.fields,
      he.popupInfo,
      "PolylineBarriers",
      "Line Barriers"
    );
  }
  _writeRouteInfo() {
    return this._writeNetworkFeatures(
      d(this.routeInfo) ? new x([this.routeInfo]) : null,
      this.defaultSymbols.routeInfo,
      "esriGeometryPolyline",
      Pe.fields,
      Pe.popupInfo,
      "RouteInfo",
      "Route Details"
    );
  }
  _writeStops() {
    const e = this._writeNetworkFeatures(
      this.stops,
      null,
      "esriGeometryPoint",
      ve.fields,
      ve.popupInfo,
      "Stops",
      "Stops"
    );
    if (L(e)) return null;
    const { stops: r } = this.defaultSymbols,
      o = d(r) && d(r.first) && r.first.toJSON(),
      i = d(r) && d(r.middle) && r.middle.toJSON(),
      n = d(r) && d(r.last) && r.last.toJSON();
    return (
      (e.layerDefinition.drawingInfo.renderer = {
        type: "uniqueValue",
        field1: "Sequence",
        defaultSymbol: i,
        uniqueValueInfos: [
          { value: "1", symbol: o, label: "First Stop" },
          { value: `${this.stops.length}`, symbol: n, label: "Last Stop" },
        ],
      }),
      e
    );
  }
};
t(
  [
    s({
      readOnly: !0,
      json: {
        read: !1,
        origins: {
          "portal-item": { write: { allowNull: !0, ignoreOrigin: !0 } },
          "web-map": {
            write: {
              overridePolicy() {
                return { allowNull: !0, ignoreOrigin: this.portalItem == null };
              },
            },
          },
        },
      },
    }),
  ],
  g.prototype,
  "_featureCollection",
  void 0
),
  t(
    [se(["web-map", "portal-item"], "_featureCollection")],
    g.prototype,
    "writeFeatureCollectionWebmap",
    null
  ),
  t(
    [
      s({
        readOnly: !0,
        json: {
          read: !1,
          origins: {
            "web-map": {
              write: {
                target: "type",
                overridePolicy() {
                  return { ignoreOrigin: this.portalItem != null };
                },
              },
            },
          },
        },
      }),
    ],
    g.prototype,
    "_type",
    void 0
  ),
  t([s({ nonNullable: !0, type: ht })], g.prototype, "defaultSymbols", void 0),
  t([s({ readOnly: !0 })], g.prototype, "directionLines", void 0),
  t(
    [
      A(["web-map", "portal-item"], "directionLines", [
        "layers",
        "featureCollection.layers",
      ]),
    ],
    g.prototype,
    "readDirectionLines",
    null
  ),
  t([s({ readOnly: !0 })], g.prototype, "directionPoints", void 0),
  t(
    [
      A(["web-map", "portal-item"], "directionPoints", [
        "layers",
        "featureCollection.layers",
      ]),
    ],
    g.prototype,
    "readDirectionPoints",
    null
  ),
  t(
    [
      s({
        readOnly: !0,
        json: {
          read: !1,
          origins: { "web-map": { write: { ignoreOrigin: !0 } } },
        },
      }),
    ],
    g.prototype,
    "featureCollectionType",
    void 0
  ),
  t([s({ readOnly: !0 })], g.prototype, "fullExtent", null),
  t(
    [
      s({
        json: {
          origins: { "web-map": { name: "featureCollection.showLegend" } },
          write: !0,
        },
      }),
    ],
    g.prototype,
    "legendEnabled",
    void 0
  ),
  t([s({ type: ["show", "hide"] })], g.prototype, "listMode", void 0),
  t(
    [s({ type: Number, nonNullable: !0, json: { write: !1 } })],
    g.prototype,
    "maxScale",
    void 0
  ),
  t(
    [
      A(["web-map", "portal-item"], "maxScale", [
        "layers",
        "featureCollection.layers",
      ]),
    ],
    g.prototype,
    "readMaxScale",
    null
  ),
  t(
    [s({ type: Number, nonNullable: !0, json: { write: !1 } })],
    g.prototype,
    "minScale",
    void 0
  ),
  t(
    [
      A(["web-map", "portal-item"], "minScale", [
        "layers",
        "featureCollection.layers",
      ]),
    ],
    g.prototype,
    "readMinScale",
    null
  ),
  t(
    [s({ type: ["ArcGISFeatureLayer"], value: "ArcGISFeatureLayer" })],
    g.prototype,
    "operationalLayerType",
    void 0
  ),
  t(
    [s({ nonNullable: !0, type: x.ofType(me) })],
    g.prototype,
    "pointBarriers",
    void 0
  ),
  t(
    [
      A(["web-map", "portal-item"], "pointBarriers", [
        "layers",
        "featureCollection.layers",
      ]),
    ],
    g.prototype,
    "readPointBarriers",
    null
  ),
  t(
    [s({ nonNullable: !0, type: x.ofType(fe) })],
    g.prototype,
    "polygonBarriers",
    void 0
  ),
  t(
    [
      A(["web-map", "portal-item"], "polygonBarriers", [
        "layers",
        "featureCollection.layers",
      ]),
    ],
    g.prototype,
    "readPolygonBarriers",
    null
  ),
  t(
    [s({ nonNullable: !0, type: x.ofType(he) })],
    g.prototype,
    "polylineBarriers",
    void 0
  ),
  t(
    [
      A(["web-map", "portal-item"], "polylineBarriers", [
        "layers",
        "featureCollection.layers",
      ]),
    ],
    g.prototype,
    "readPolylineBarriers",
    null
  ),
  t([s({ readOnly: !0 })], g.prototype, "routeInfo", void 0),
  t(
    [
      A(["web-map", "portal-item"], "routeInfo", [
        "layers",
        "featureCollection.layers",
      ]),
    ],
    g.prototype,
    "readRouteInfo",
    null
  ),
  t([s({ type: ie })], g.prototype, "spatialReference", void 0),
  t(
    [
      A(["web-map", "portal-item"], "spatialReference", [
        "layers",
        "featureCollection.layers",
      ]),
    ],
    g.prototype,
    "readSpatialReference",
    null
  ),
  t([s({ nonNullable: !0, type: x.ofType(ve) })], g.prototype, "stops", void 0),
  t(
    [
      A(["web-map", "portal-item"], "stops", [
        "layers",
        "featureCollection.layers",
      ]),
    ],
    g.prototype,
    "readStops",
    null
  ),
  t([s()], g.prototype, "title", null),
  t([s({ readOnly: !0, json: { read: !1 } })], g.prototype, "type", void 0),
  t([s()], g.prototype, "url", null),
  (g = t([J(gt)], g));
const Gr = g;
export { Gr as default };
