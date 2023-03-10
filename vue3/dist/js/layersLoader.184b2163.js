import {
  s as g,
  N as F,
  d9 as G,
  cx as O,
  db as w,
  O as D,
  dc as x,
} from "./index.8fd7165c.js";
import { t as S, r as M } from "./fetchService.302fd535.js";
import { e as N } from "./jsonContext.8bcdc898.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
async function Q(t, o) {
  const e = t.instance.portalItem;
  if (e && e.id)
    return (
      await e.load(o),
      (function (n) {
        const a = n.instance.portalItem;
        if (!(a != null && a.type) || !n.supportedTypes.includes(a.type))
          throw new g(
            "portal:invalid-layer-item-type",
            "Invalid layer item type '${type}', expected '${expectedType}'",
            {
              type: a == null ? void 0 : a.type,
              expectedType: n.supportedTypes.join(", "),
            }
          );
      })(t),
      k(t, o)
    );
}
async function k(t, o) {
  const e = t.instance,
    n = e.portalItem;
  if (!n) return;
  const { url: a, title: l } = n,
    i = N(n);
  if (e.type === "group") return e.read({ title: l }, i), C(e, t);
  a && e.read({ url: a }, i);
  const r = await v(t, o);
  return (
    r && e.read(r, i),
    (e.resourceReferences = {
      portalItem: n,
      paths: i.readResourcePaths ?? [],
    }),
    e.type !== "subtype-group" && e.read({ title: l }, i),
    F(e, i)
  );
}
async function C(t, o) {
  let e;
  const { portalItem: n } = t;
  if (!n) return;
  const a = n.type,
    l = o.layerModuleTypeMap,
    i = G(n, "Oriented Imagery Layer") ?? !1;
  switch (a) {
    case "Feature Service":
      e = i ? l.OrientedImageryLayer : l.FeatureLayer;
      break;
    case "Stream Service":
      e = l.StreamLayer;
      break;
    case "Scene Service":
      e = l.SceneLayer;
      break;
    case "Feature Collection":
      e = l.FeatureLayer;
      break;
    default:
      throw new g(
        "portal:unsupported-item-type-as-group",
        `The item type '${a}' is not supported as a 'IGroupLayer'`
      );
  }
  let [r, s] = await Promise.all([e(), v(o)]),
    u = () => r;
  if (a === "Feature Service") {
    if (((s = n.url ? await E(s, n.url) : {}), T(s).length)) {
      const c = l.SubtypeGroupLayer,
        d = await c();
      u = (p) => (p.layerType === "SubtypeGroupLayer" ? d : r);
    }
    return m(t, u, s, await J(n.url));
  }
  return b(s) > 0
    ? m(t, u, s)
    : (async function (c, d) {
        var f, h;
        const { portalItem: p } = c;
        if (!(p != null && p.url)) return;
        const y = await S(p.url);
        y &&
          m(c, d, {
            layers: (f = y.layers) == null ? void 0 : f.map(I),
            tables: (h = y.tables) == null ? void 0 : h.map(I),
          });
      })(t, u);
}
function I(t) {
  return { id: t.id, name: t.name };
}
function m(t, o, e, n) {
  var i;
  let a = e.layers || [];
  const l = e.tables || [];
  if (
    (((i = t.portalItem) == null ? void 0 : i.type) === "Feature Collection" &&
      (a.forEach((r) => {
        var s;
        ((s = r == null ? void 0 : r.layerDefinition) == null
          ? void 0
          : s.type) === "Table" && l.push(r);
      }),
      (a = a.filter((r) => {
        var s;
        return (
          ((s = r == null ? void 0 : r.layerDefinition) == null
            ? void 0
            : s.type) !== "Table"
        );
      }))),
    "coverage" in e)
  ) {
    const r = (function (s) {
      const { coverage: u } = s;
      if (!u) return null;
      const c = new URL(u);
      if (u.toLowerCase().includes("item.html")) {
        const d = c.searchParams.get("id"),
          p = c.origin;
        return w.fromPortalItem({ portalItem: new D({ id: d, url: p }) });
      }
      if (x(u)) return w.fromArcGISServerUrl({ url: u });
      throw new g(
        "portal:oriented-imagery-layer-coverage",
        "the provided coverage url couldn't be loaded as a layer"
      );
    })(e);
    r && t.add(r);
  }
  a.reverse().forEach((r) => {
    const s = L(t, o(r), e, r, n == null ? void 0 : n(r));
    t.add(s);
  }),
    l.reverse().forEach((r) => {
      const s = L(t, o(r), e, r, n == null ? void 0 : n(r));
      t.tables.add(s);
    });
}
function L(t, o, e, n, a) {
  const l = t.portalItem,
    i = new o({ portalItem: l.clone(), layerId: n.id });
  if (
    ("sourceJSON" in i && (i.sourceJSON = a),
    i.type !== "subtype-group" && (i.sublayerTitleMode = "service-name"),
    l.type === "Feature Collection")
  ) {
    const r = { origin: "portal-item", portal: l.portal || O.getDefault() };
    i.read(n, r);
    const s = e.showLegend;
    s != null && i.read({ showLegend: s }, r);
  }
  return i;
}
async function v(t, o) {
  if (t.supportsData === !1) return;
  const e = t.instance,
    n = e.portalItem;
  if (!n) return;
  let a = null;
  try {
    a = await n.fetchData("json", o);
  } catch {}
  if (
    (function (l) {
      return (
        l.type !== "stream" && l.type !== "oriented-imagery" && "layerId" in l
      );
    })(e)
  ) {
    let l = null,
      i = !0;
    if (a && b(a) > 0) {
      if (e.layerId == null) {
        const r = T(a);
        e.layerId =
          e.type === "subtype-group" ? (r == null ? void 0 : r[0]) : P(a);
      }
      (l = (function (r, s) {
        var d, p;
        const { layerId: u } = s,
          c =
            ((d = r.layers) == null ? void 0 : d.find((y) => y.id === u)) ||
            ((p = r.tables) == null ? void 0 : p.find((y) => y.id === u));
        return c &&
          (function (y, f) {
            return !(
              (f.type === "feature" &&
                "layerType" in y &&
                y.layerType === "SubtypeGroupLayer") ||
              (f.type === "subtype-group" && !("layerType" in y))
            );
          })(c, s)
          ? c
          : null;
      })(a, e)),
        l &&
          (b(a) === 1 && (i = !1),
          a.showLegend != null && (l.showLegend = a.showLegend));
    }
    return (
      i &&
        e.sublayerTitleMode !== "service-name" &&
        (e.sublayerTitleMode = "item-title-and-service-name"),
      l
    );
  }
  return a;
}
async function E(t, o) {
  if (
    (t == null ? void 0 : t.layers) == null ||
    (t == null ? void 0 : t.tables) == null
  ) {
    const e = await S(o);
    ((t = t || {}).layers = t.layers || (e == null ? void 0 : e.layers)),
      (t.tables = t.tables || (e == null ? void 0 : e.tables));
  }
  return t;
}
function P(t) {
  const o = t.layers;
  if (o && o.length) return o[0].id;
  const e = t.tables;
  return e && e.length ? e[0].id : null;
}
function b(t) {
  var o, e;
  return (
    (((o = t == null ? void 0 : t.layers) == null ? void 0 : o.length) ?? 0) +
    (((e = t == null ? void 0 : t.tables) == null ? void 0 : e.length) ?? 0)
  );
}
function T(t) {
  var e;
  const o = [];
  return (
    (e = t == null ? void 0 : t.layers) == null ||
      e.forEach((n) => {
        n.layerType === "SubtypeGroupLayer" && o.push(n.id);
      }),
    o
  );
}
async function J(t) {
  const { layersJSON: o } = await M(t);
  if (!o) return null;
  const e = [...o.layers, ...o.tables];
  return (n) => e.find((a) => a.id === n.id);
}
export {
  P as getFirstLayerOrTableId,
  b as getNumLayersAndTables,
  T as getSubtypeGroupLayerIds,
  Q as load,
  E as preprocessFSItemData,
};
