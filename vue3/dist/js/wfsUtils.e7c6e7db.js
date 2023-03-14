import {
  U as k,
  h5 as z,
  s as b,
  h6 as Y,
  h7 as U,
  h8 as $,
  h9 as R,
  aH as M,
  t as v,
  ar as _,
  ac as q,
  eM as E,
  _ as H,
  Y as J,
  L as K,
  gr as F,
  ha as Q,
  r as I,
} from "./index.8fd7165c.js";
import { s as B } from "./geojson.96c8477e.js";
import { o as A, n as P } from "./xmlUtils.444cb4c0.js";
function Z(a) {
  return (
    (function (n) {
      const e = ee.exec(n);
      if (!(e != null && e.groups)) return null;
      const t = e.groups,
        r = +t.year,
        m = +t.month - 1,
        u = +t.day,
        p = +(t.hours ?? "0"),
        l = +(t.minutes ?? "0"),
        s = +(t.seconds ?? "0");
      if (p > 23 || l > 59 || s > 59) return null;
      const d = t.ms ?? "0",
        y = d ? +d.padEnd(3, "0").substring(0, 3) : 0;
      let o;
      if (t.isUTC) o = Date.UTC(r, m, u, p, l, s, y);
      else if (t.offsetSign) {
        const f = +t.offsetHours,
          i = +t.offsetMinutes;
        o =
          6e4 * (t.offsetSign === "+" ? -1 : 1) * (60 * f + i) +
          Date.UTC(r, m, u, p, l, s, y);
      } else o = new Date(r, m, u, p, l, s, y).getTime();
      return Number.isNaN(o) ? null : o;
    })(a) ??
    (function (n) {
      const e = new Date(n).getTime();
      return Number.isNaN(e) ? null : e;
    })(a)
  );
}
const ee =
    /^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/,
  G = "xlink:href",
  x = "2.0.0",
  L = "__esri_wfs_id__",
  te = "wfs-layer:getWFSLayerTypeInfo-error",
  re = "wfs-layer:empty-service",
  O = "wfs-layer:feature-type-not-found",
  ne = "wfs-layer:geojson-not-supported",
  ae = "wfs-layer:kvp-encoding-not-supported",
  se = "wfs-layer:malformed-json",
  j = "wfs-layer:unknown-geometry-type",
  oe = "wfs-layer:unknown-field-type",
  ie = "wfs-layer:unsupported-spatial-reference",
  ue = "wfs-layer:unsupported-wfs-version";
async function Fe(a, n) {
  const e = (function (t) {
    const r = W(t);
    (function (p) {
      var s;
      const l =
        (s = p.firstElementChild) == null ? void 0 : s.getAttribute("version");
      if (l && l !== x)
        throw new b(
          ue,
          `Unsupported WFS version ${l}. Supported version: ${x}`
        );
    })(r),
      X(r);
    const m = r.firstElementChild,
      u = z(
        (function (p) {
          return P(p, {
            FeatureTypeList: {
              FeatureType: (l) => {
                const s = {
                    typeName: "undefined:undefined",
                    name: "",
                    title: "",
                    description: "",
                    extent: null,
                    namespacePrefix: "",
                    namespaceUri: "",
                    supportedSpatialReferences: [],
                  },
                  d = new Set([4326]),
                  y = (o) => {
                    var i, c, g;
                    const f = parseInt(
                      ((g =
                        (c =
                          (i = o.textContent) == null
                            ? void 0
                            : i.match(/(?<wkid>\d+$)/i)) == null
                          ? void 0
                          : c.groups) == null
                        ? void 0
                        : g.wkid) ?? "",
                      10
                    );
                    Number.isNaN(f) || d.add(f);
                  };
                return (
                  A(l, {
                    Name: (o) => {
                      const { name: f, prefix: i } = S(o.textContent);
                      (s.typeName = `${i}:${f}`),
                        (s.name = f),
                        (s.namespacePrefix = i),
                        (s.namespaceUri = o.lookupNamespaceURI(i));
                    },
                    Abstract: (o) => {
                      s.description = o.textContent;
                    },
                    Title: (o) => {
                      s.title = o.textContent;
                    },
                    WGS84BoundingBox: (o) => {
                      s.extent = (function (f) {
                        let i, c, g, T;
                        for (const w of f.children)
                          switch (w.localName) {
                            case "LowerCorner":
                              [i, c] = w.textContent
                                .split(" ")
                                .map((h) => Number.parseFloat(h));
                              break;
                            case "UpperCorner":
                              [g, T] = w.textContent
                                .split(" ")
                                .map((h) => Number.parseFloat(h));
                          }
                        return {
                          xmin: i,
                          ymin: c,
                          xmax: g,
                          ymax: T,
                          spatialReference: E,
                        };
                      })(o);
                    },
                    DefaultSRS: y,
                    DefaultCRS: y,
                    OtherSRS: y,
                    OtherCRS: y,
                  }),
                  s.title || (s.title = s.name),
                  s.supportedSpatialReferences.push(...d),
                  s
                );
              },
            },
          });
        })(m)
      );
    return {
      operations: le(m),
      get featureTypes() {
        return Array.from(u());
      },
      readFeatureTypes: u,
    };
  })(
    (
      await k(a, {
        responseType: "text",
        query: {
          SERVICE: "WFS",
          REQUEST: "GetCapabilities",
          VERSION: x,
          ...(n == null ? void 0 : n.customParameters),
        },
        signal: n == null ? void 0 : n.signal,
      })
    ).data
  );
  return (
    (function (t, r) {
      Y(t) &&
        (U(t, r.operations.DescribeFeatureType.url, !0) &&
          (r.operations.DescribeFeatureType.url = $(
            r.operations.DescribeFeatureType.url
          )),
        U(t, r.operations.GetFeature.url, !0) &&
          (r.operations.GetFeature.url = $(r.operations.GetFeature.url)));
    })(a, e),
    e
  );
}
const pe = new Set([
  "json",
  "application/json",
  "geojson",
  "application/json; subtype=geojson",
]);
function le(a) {
  let n = !1;
  const e = {
    GetCapabilities: { url: "" },
    DescribeFeatureType: { url: "" },
    GetFeature: { url: "", outputFormat: null, supportsPagination: !1 },
  };
  if (
    (A(a, {
      OperationsMetadata: {
        Operation: (t) => {
          switch (t.getAttribute("name")) {
            case "GetCapabilities":
              return {
                DCP: {
                  HTTP: {
                    Get: (r) => {
                      e.GetCapabilities.url = r.getAttribute(G);
                    },
                  },
                },
              };
            case "DescribeFeatureType":
              return {
                DCP: {
                  HTTP: {
                    Get: (r) => {
                      e.DescribeFeatureType.url = r.getAttribute(G);
                    },
                  },
                },
              };
            case "GetFeature":
              return {
                DCP: {
                  HTTP: {
                    Get: (r) => {
                      e.GetFeature.url = r.getAttribute(G);
                    },
                  },
                },
                Parameter: (r) => {
                  if (r.getAttribute("name") === "outputFormat")
                    return {
                      AllowedValues: {
                        Value: (m) => {
                          const u = m.textContent;
                          u &&
                            pe.has(u.toLowerCase()) &&
                            (e.GetFeature.outputFormat = u);
                        },
                      },
                    };
                },
              };
          }
        },
        Constraint: (t) => {
          switch (t.getAttribute("name")) {
            case "KVPEncoding":
              return {
                DefaultValue: (r) => {
                  n = r.textContent.toLowerCase() === "true";
                },
              };
            case "ImplementsResultPaging":
              return {
                DefaultValue: (r) => {
                  e.GetFeature.supportsPagination =
                    r.textContent.toLowerCase() === "true";
                },
              };
          }
        },
      },
    }),
    !n)
  )
    throw new b(
      ae,
      "WFS service doesn't support key/value pair (KVP) encoding"
    );
  if (v(e.GetFeature.outputFormat))
    throw new b(ne, "WFS service doesn't support GeoJSON output format");
  return e;
}
function ce(a, n, e) {
  return R(a, (t) =>
    e ? t.name === n && t.namespaceUri === e : t.typeName === n || t.name === n
  );
}
async function Se(a, n, e, t = {}) {
  const { featureType: r, extent: m } = await me(a, n, e, t),
    {
      fields: u,
      geometryType: p,
      swapXY: l,
      objectIdField: s,
      geometryField: d,
    } = await (async function (y, o, f = {}) {
      var C, N, D;
      const [i, c] = await K([
        de(y.operations.DescribeFeatureType.url, o, f),
        fe(y, o, f),
      ]);
      if (i.error || c.error)
        throw new b(
          te,
          `An error occurred while getting info about the feature type '${o}'`,
          {
            error: i.error || c.error,
          }
        );
      const { fields: g, errors: T } = i.value ?? {},
        w =
          ((C = i.value) == null ? void 0 : C.geometryType) ||
          ((N = c.value) == null ? void 0 : N.geometryType),
        h = ((D = c.value) == null ? void 0 : D.swapXY) ?? !1;
      if (v(w))
        throw new b(
          j,
          `The geometry type could not be determined for type '${o}`,
          {
            typeName: o,
            geometryType: w,
            fields: g,
            errors: T,
          }
        );
      return { ...ye(g ?? []), geometryType: w, swapXY: h };
    })(a, r.typeName, t);
  return {
    url: a.operations.GetCapabilities.url,
    name: r.name,
    namespaceUri: r.namespaceUri,
    fields: u,
    geometryField: d,
    geometryType: p,
    objectIdField: s,
    spatialReference: t.spatialReference ?? M.WGS84,
    extent: m,
    swapXY: l,
    wfsCapabilities: a,
    customParameters: t.customParameters,
  };
}
async function me(a, n, e, t = {}) {
  const { spatialReference: r = M.WGS84 } = t,
    m = a.readFeatureTypes(),
    u = n ? ce(m, n, e) : m.next().value;
  if (v(u))
    throw n
      ? new b(O, `The type '${n}' could not be found in the service`)
      : new b(re, "The service is empty");
  let p = new _({ ...u.extent, spatialReference: r });
  if (!q(r, E))
    try {
      await H(E, r, void 0, t), (p = J(p, E));
    } catch {
      throw new b(ie, "Projection not supported");
    }
  return { extent: p, spatialReference: r, featureType: u };
}
function ye(a) {
  const n = a.find((t) => t.type === "geometry");
  let e = a.find((t) => t.type === "oid");
  return (
    (a = a.filter((t) => t.type !== "geometry")),
    e || ((e = new F({ name: L, type: "oid", alias: L })), a.unshift(e)),
    {
      geometryField: (n == null ? void 0 : n.name) ?? null,
      objectIdField: e.name,
      fields: a,
    }
  );
}
async function fe(a, n, e = {}) {
  var l;
  let t,
    r = !1;
  const [m, u] = await Promise.all([
      we(a.operations.GetFeature.url, n, a.operations.GetFeature.outputFormat, {
        ...e,
        count: 1,
      }),
      k(a.operations.GetFeature.url, {
        responseType: "text",
        query: V(n, void 0, { ...e, count: 1 }),
        signal: e == null ? void 0 : e.signal,
      }),
    ]),
    p =
      m.type === "FeatureCollection" &&
      ((l = m.features[0]) == null ? void 0 : l.geometry);
  if (p) {
    let s;
    switch (((t = Q.fromJSON(B(p.type))), p.type)) {
      case "Point":
        s = p.coordinates;
        break;
      case "LineString":
      case "MultiPoint":
        s = p.coordinates[0];
        break;
      case "MultiLineString":
      case "Polygon":
        s = p.coordinates[0][0];
        break;
      case "MultiPolygon":
        s = p.coordinates[0][0][0];
    }
    const d = /<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(
      u.data
    );
    if (d) {
      const y = s[0].toFixed(3),
        o = s[1].toFixed(3),
        f = parseFloat(d[1]).toFixed(3);
      y === parseFloat(d[2]).toFixed(3) && o === f && (r = !0);
    }
  }
  return { geometryType: t, swapXY: r };
}
async function de(a, n, e) {
  return (function (t, r) {
    const { name: m } = S(t),
      u = W(r);
    X(u);
    const p = R(
      P(u.firstElementChild, {
        element: (l) => ({
          name: l.getAttribute("name"),
          typeName: S(l.getAttribute("type")).name,
        }),
      }),
      ({ name: l }) => l === m
    );
    if (I(p)) {
      const l = R(
        P(u.firstElementChild, { complexType: (s) => s }),
        (s) => s.getAttribute("name") === p.typeName
      );
      if (I(l))
        return (function (s) {
          const d = [],
            y = [];
          let o;
          const f = P(s, {
            complexContent: { extension: { sequence: { element: (i) => i } } },
          });
          for (const i of f) {
            const c = i.getAttribute("name");
            if (!c) continue;
            let g, T;
            if (
              (i.hasAttribute("type")
                ? (g = S(i.getAttribute("type")).name)
                : A(i, {
                    simpleType: {
                      restriction: (C) => (
                        (g = S(C.getAttribute("base")).name),
                        {
                          maxLength: (N) => {
                            T = +N.getAttribute("value");
                          },
                        }
                      ),
                    },
                  }),
              !g)
            )
              continue;
            const w = i.getAttribute("nillable") === "true";
            let h = !1;
            switch (g.toLowerCase()) {
              case "integer":
              case "nonpositiveinteger":
              case "negativeinteger":
              case "long":
              case "int":
              case "short":
              case "byte":
              case "nonnegativeinteger":
              case "unsignedlong":
              case "unsignedint":
              case "unsignedshort":
              case "unsignedbyte":
              case "positiveinteger":
                y.push(
                  new F({ name: c, alias: c, type: "integer", nullable: w })
                );
                break;
              case "float":
              case "double":
              case "decimal":
                y.push(
                  new F({ name: c, alias: c, type: "double", nullable: w })
                );
                break;
              case "boolean":
              case "string":
              case "gyearmonth":
              case "gyear":
              case "gmonthday":
              case "gday":
              case "gmonth":
              case "anyuri":
              case "qname":
              case "notation":
              case "normalizedstring":
              case "token":
              case "language":
              case "idrefs":
              case "entities":
              case "nmtoken":
              case "nmtokens":
              case "name":
              case "ncname":
              case "id":
              case "idref":
              case "entity":
              case "duration":
              case "time":
                y.push(
                  new F({
                    name: c,
                    alias: c,
                    type: "string",
                    nullable: w,
                    length: T ?? 255,
                  })
                );
                break;
              case "datetime":
              case "date":
                y.push(
                  new F({
                    name: c,
                    alias: c,
                    type: "date",
                    nullable: w,
                    length: T ?? 36,
                  })
                );
                break;
              case "pointpropertytype":
                (o = "point"), (h = !0);
                break;
              case "multipointpropertytype":
                (o = "multipoint"), (h = !0);
                break;
              case "curvepropertytype":
              case "multicurvepropertytype":
              case "multilinestringpropertytype":
                (o = "polyline"), (h = !0);
                break;
              case "surfacepropertytype":
              case "multisurfacepropertytype":
              case "multipolygonpropertytype":
                (o = "polygon"), (h = !0);
                break;
              case "geometrypropertytype":
              case "multigeometrypropertytype":
                (h = !0),
                  d.push(
                    new b(j, `geometry type '${g}' is not supported`, {
                      type: new XMLSerializer().serializeToString(s),
                    })
                  );
                break;
              default:
                d.push(
                  new b(oe, `Unknown field type '${g}'`, {
                    type: new XMLSerializer().serializeToString(s),
                  })
                );
            }
            h &&
              y.push(
                new F({ name: c, alias: c, type: "geometry", nullable: w })
              );
          }
          for (const i of y)
            if (
              i.type === "integer" &&
              !i.nullable &&
              ge.has(i.name.toLowerCase())
            ) {
              i.type = "oid";
              break;
            }
          return { geometryType: o, fields: y, errors: d };
        })(l);
    }
    throw new b(O, `Type '${t}' not found in document`, {
      document: new XMLSerializer().serializeToString(u),
    });
  })(
    n,
    (
      await k(a, {
        responseType: "text",
        query: {
          SERVICE: "WFS",
          REQUEST: "DescribeFeatureType",
          VERSION: x,
          TYPENAME: n,
          ...(e == null ? void 0 : e.customParameters),
        },
        signal: e == null ? void 0 : e.signal,
      })
    ).data
  );
}
const ge = new Set(["objectid", "fid"]);
async function we(a, n, e, t) {
  var m;
  let { data: r } = await k(a, {
    responseType: "text",
    query: V(n, e, t),
    signal: t == null ? void 0 : t.signal,
  });
  r = r.replace(/": +(-?\d+),(\d+)(,)?/g, '": $1.$2$3');
  try {
    if ((m = t == null ? void 0 : t.dateFields) != null && m.length) {
      const u = new Set(t.dateFields);
      return JSON.parse(r, (p, l) => (u.has(p) ? Z(l) : l));
    }
    return JSON.parse(r);
  } catch (u) {
    throw new b(se, "Error while parsing the response", {
      response: r,
      error: u,
    });
  }
}
function V(a, n, e) {
  return {
    SERVICE: "WFS",
    REQUEST: "GetFeature",
    VERSION: x,
    TYPENAMES: a,
    OUTPUTFORMAT: n,
    SRSNAME: "EPSG:4326",
    STARTINDEX: e == null ? void 0 : e.startIndex,
    COUNT: e == null ? void 0 : e.count,
    ...(e == null ? void 0 : e.customParameters),
  };
}
function W(a) {
  return new DOMParser().parseFromString(a.trim(), "text/xml");
}
function S(a) {
  const [n, e] = a.split(":");
  return { prefix: e ? n : "", name: e ?? n };
}
function X(a) {
  let n = "",
    e = "";
  if (
    (A(a.firstElementChild, {
      Exception: (t) => (
        (n = t.getAttribute("exceptionCode")),
        {
          ExceptionText: (r) => {
            e = r.textContent;
          },
        }
      ),
    }),
    n)
  )
    throw new b(`wfs-layer:${n}`, e);
}
export { L as C, Fe as D, we as K, ce as W, Se as X, ye as z };
