import {
  eD as n,
  eE as l,
  s as d,
  r as m,
  eF as v,
  t as R,
  U as I,
} from "./index.8fd7165c.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
async function D(e, t = {}, a) {
  await e.load(a);
  const r = n(e.itemUrl, "resources"),
    {
      start: o = 1,
      num: u = 10,
      sortOrder: i = "asc",
      sortField: c = "created",
    } = t,
    p = {
      query: { start: o, num: u, sortOrder: i, sortField: c, token: e.apiKey },
      signal: l(a, "signal"),
    },
    s = await e.portal.request(r, p);
  return {
    total: s.total,
    nextStart: s.nextStart,
    resources: s.resources.map(({ created: g, size: w, resource: y }) => ({
      created: new Date(g),
      size: w,
      resource: e.resourceFromPath(y),
    })),
  };
}
async function z(e, t, a, r) {
  if (!e.hasPath())
    throw new d(
      `portal-item-resource-${t}:invalid-path`,
      "Resource does not have a valid path"
    );
  const o = e.portalItem;
  await o.load(r);
  const u = n(o.userItemUrl, t === "add" ? "addResources" : "updateResources"),
    [i, c] = h(e.path),
    p = await F(a),
    s = new FormData();
  return (
    i && i !== "." && s.append("resourcesPrefix", i),
    m(r) && r.compress && s.append("compress", "true"),
    s.append("fileName", c),
    s.append("file", p, c),
    s.append("f", "json"),
    m(r) && r.access && s.append("access", r.access),
    await o.portal.request(u, {
      method: "post",
      body: s,
      signal: l(r, "signal"),
    }),
    e
  );
}
async function B(e, t, a) {
  if (!t.hasPath())
    throw new d(
      "portal-item-resources-remove:invalid-path",
      "Resource does not have a valid path"
    );
  await e.load(a);
  const r = n(e.userItemUrl, "removeResources");
  await e.portal.request(r, {
    method: "post",
    query: { resource: t.path },
    signal: l(a, "signal"),
  }),
    (t.portalItem = null);
}
async function E(e, t) {
  await e.load(t);
  const a = n(e.userItemUrl, "removeResources");
  return e.portal.request(a, {
    method: "post",
    query: { deleteAll: !0 },
    signal: l(t, "signal"),
  });
}
function h(e) {
  const t = e.lastIndexOf("/");
  return t === -1 ? [".", e] : [e.slice(0, t), e.slice(t + 1)];
}
function f(e) {
  const [t, a] = P(e),
    [r, o] = h(t);
  return [r, o, a];
}
function P(e) {
  const t = v(e);
  return R(t) ? [e, ""] : [e.slice(0, e.length - t.length - 1), `.${t}`];
}
async function F(e) {
  return e instanceof Blob
    ? e
    : (await I(e.url, { responseType: "blob" })).data;
}
function N(e, t) {
  if (!e.hasPath()) return null;
  const [a, , r] = f(e.path);
  return e.portalItem.resourceFromPath(n(a, t + r));
}
function $(e, t) {
  if (!e.hasPath()) return null;
  const [a, , r] = f(e.path);
  return e.portalItem.resourceFromPath(n(a, t + r));
}
export {
  z as addOrUpdateResource,
  F as contentToBlob,
  D as fetchResources,
  N as getSiblingOfSameType,
  $ as getSiblingOfSameTypeI,
  E as removeAllResources,
  B as removeResource,
  f as splitPrefixFileNameAndExtension,
};
