import {
  Q as K,
  aq as w,
  i9 as F,
  s as y,
  ia as m,
  ib as R,
  ic as D,
  L as q,
  t as U,
  O as _,
  cx as j,
  en as z,
  r as g,
  id as C,
  ie as O,
  ig as c,
  ih as M,
} from "./index.8fd7165c.js";
import { i as v } from "./originUtils.cdead60a.js";
import { r as Y } from "./fetchService.302fd535.js";
import { o as h } from "./jsonContext.8bcdc898.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./multiOriginJSONSupportUtils.c978f4c3.js";
const B = K.getLogger("esri.layers.FeatureLayer"),
  f = "Feature Service";
function p(e, a) {
  return `Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${a}`;
}
function N(e, a) {
  if (a.type !== f)
    throw new y(
      "feature-layer:portal-item-wrong-type",
      p(e, `should have portal item of type "${f}"`)
    );
}
async function L(e) {
  if ((await e.load(), F(e)))
    throw new y(
      "feature-layer:save",
      p(e, "using an in-memory source cannot be saved to a portal item")
    );
}
async function b(e, a, t) {
  "beforeSave" in e &&
    typeof e.beforeSave == "function" &&
    (await e.beforeSave());
  const r = e.write({}, a);
  return (
    (function (l, o) {
      let s = (l.messages ?? [])
        .filter(({ type: i }) => i === "error")
        .map(({ name: i, message: n, details: u }) => new y(i, n, u));
      if (
        (o != null &&
          o.ignoreUnsupported &&
          (s = s.filter(
            ({ name: i }) =>
              i !== "layer:unsupported" &&
              i !== "symbol:unsupported" &&
              i !== "symbol-layer:unsupported" &&
              i !== "property:unsupported" &&
              i !== "url:unsupported"
          )),
        s.length > 0)
      )
        throw new y(
          "feature-layer:save",
          "Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",
          { errors: s }
        );
    })(a, t),
    r
  );
}
function P(e) {
  const { layer: a, layerJSON: t } = e;
  return a.isTable ? { layers: [], tables: [t] } : { layers: [t], tables: [] };
}
function I(e) {
  m(e, c.JSAPI),
    e.typeKeywords &&
      (e.typeKeywords = e.typeKeywords.filter((a, t, r) => r.indexOf(a) === t));
}
function G(e) {
  const a = e.portalItem;
  if (!a)
    throw (
      (B.error("save: requires the portalItem property to be set"),
      new y(
        "feature-layer:portal-item-not-set",
        p(e, "requires the portalItem property to be set")
      ))
    );
  if (!a.loaded)
    throw new y(
      "feature-layer:portal-item-not-loaded",
      p(
        e,
        "cannot be saved to a portal item that does not exist or is inaccessible"
      )
    );
  N(e, a);
}
async function T(e, a) {
  return /\/\d+\/?$/.test(e.url ?? "")
    ? P(a[0])
    : (async function (t, r) {
        const {
          layer: { url: l, customParameters: o, apiKey: s },
        } = r[0];
        let i = await t.fetchData("json");
        (i && i.layers != null && i.tables != null) ||
          (i = await Q(
            i,
            { url: l ?? "", customParameters: o, apiKey: s },
            r.map((n) => n.layer.layerId)
          ));
        for (const n of r) $(n.layer, n.layerJSON, i);
        return i;
      })(e, a);
}
async function Q(e, a, t) {
  var r, l;
  e || (e = {}),
    (r = e).layers || (r.layers = []),
    (l = e).tables || (l.tables = []);
  const { url: o, customParameters: s, apiKey: i } = a,
    { serviceJSON: n, layersJSON: u } = await Y(o, {
      customParameters: s,
      apiKey: i,
    }),
    d = A(e.layers, n.layers, t),
    S = A(e.tables, n.tables, t);
  (e.layers = d.itemResources), (e.tables = S.itemResources);
  const x = [...d.added, ...S.added],
    E = u ? [...u.layers, ...u.tables] : [];
  return await k(e, x, o, E), e;
}
function A(e, a, t) {
  const r = R(e, a, (o, s) => o.id === s.id);
  e = e.filter((o) => !r.removed.some((s) => s.id === o.id));
  const l = r.added.map(({ id: o }) => ({ id: o }));
  return (
    l.forEach(({ id: o }) => {
      e.push({ id: o });
    }),
    { itemResources: e, added: l.filter(({ id: o }) => !t.includes(o)) }
  );
}
async function k(e, a, t, r) {
  const l = a.map(
    ({ id: o }) =>
      new D({ url: t, layerId: o, sourceJSON: r.find(({ id: s }) => s === o) })
  );
  await q(l.map((o) => o.load())),
    l.forEach((o) => {
      const { layerId: s, loaded: i, defaultPopupTemplate: n } = o;
      i && !U(n) && $(o, { id: s, popupInfo: n.toJSON() }, e);
    });
}
function $(e, a, t) {
  e.isTable ? J(t.tables, a) : J(t.layers, a);
}
function J(e, a) {
  if (!e) return;
  const t = e.findIndex(({ id: r }) => r === a.id);
  t === -1 ? e.push(a) : (e[t] = a);
}
function H(e) {
  const { portalItem: a } = e;
  return (
    M(e) && !e.dynamicDataSource && !!(a != null && a.loaded) && a.type === f
  );
}
async function V(e) {
  if (!(e != null && e.length))
    throw new y(
      "feature-layer-utils-saveall:missing-parameters",
      "'layers' array should contain at least one feature layer"
    );
  await Promise.all(e.map((r) => r.load()));
  for (const r of e)
    if (!H(r))
      throw new y(
        "feature-layer-utils-saveall:invalid-parameters",
        `'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${p(
          r,
          "does not conform"
        )}`,
        { layer: r }
      );
  const a = e.map((r) => r.portalItem.id);
  if (new Set(a).size > 1)
    throw new y(
      "feature-layer-utils-saveall:invalid-parameters",
      "All layers in the 'layers' array should be loaded from the same portal item"
    );
  const t = e.map((r) => r.layerId);
  if (new Set(t).size !== t.length)
    throw new y(
      "feature-layer-utils-saveall:invalid-parameters",
      "'layers' array should contain only one instance each of layer or table in a feature service"
    );
}
async function W(e, a) {
  const { url: t, layerId: r, title: l, fullExtent: o, isTable: s } = e,
    i = z(t),
    n = g(i) && i.serverType === "FeatureServer";
  (a.url = n ? t : `${t}/${r}`),
    a.title || (a.title = l),
    (a.extent = null),
    !s && g(o) && (a.extent = await C(o)),
    O(a, c.METADATA),
    O(a, c.MULTI_LAYER),
    m(a, c.SINGLE_LAYER),
    s && m(a, c.TABLE),
    I(a);
}
const de = w(async function (e, a) {
    await L(e), G(e);
    const t = e.portalItem,
      r = h(t),
      l = await b(e, r, a),
      o = await T(t, [{ layer: e, layerJSON: l }]);
    return I(t), await t.update({ data: o }), v(r), t;
  }),
  ye = w(async (e, a) => {
    await V(e);
    const t = e[0].portalItem,
      r = h(t),
      l = await Promise.all(e.map((s) => b(s, r, a))),
      o = await T(
        t,
        e.map((s, i) => ({ layer: s, layerJSON: l[i] }))
      );
    return (
      I(t),
      await t.update({ data: o }),
      await Promise.all(e.slice(1).map((s) => s.portalItem.reload())),
      v(r),
      t.clone()
    );
  }),
  ce = w(async function (e, a, t) {
    await L(e);
    const r = (function (s, i) {
        var n, u;
        let d = _.from(i);
        return (
          d.id && ((d = d.clone()), (d.id = null)),
          (n = d).type ?? (n.type = f),
          (u = d).portal ?? (u.portal = j.getDefault()),
          N(s, d),
          d
        );
      })(e, a),
      l = h(r),
      o = P({ layer: e, layerJSON: await b(e, l, t) });
    return (
      await W(e, r),
      await (async function (s, i, n) {
        var d;
        const u = s.portal;
        await (u == null ? void 0 : u.signIn()),
          await ((d = u == null ? void 0 : u.user) == null
            ? void 0
            : d.addItem({
                item: s,
                data: i,
                folder: n == null ? void 0 : n.folder,
              }));
      })(r, o, t),
      (e.portalItem = r),
      v(l),
      r
    );
  });
export { de as save, ye as saveAll, ce as saveAs };
