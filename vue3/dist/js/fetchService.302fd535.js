import { U as y } from "./index.8fd7165c.js";
async function t(r, e) {
  const { data: a } = await y(r, {
    responseType: "json",
    query: {
      f: "json",
      ...(e == null ? void 0 : e.customParameters),
      token: e == null ? void 0 : e.apiKey,
    },
  });
  return a;
}
async function c(r, e) {
  const a = await t(r, e);
  a.layers = a.layers.filter(o);
  const s = { serviceJSON: a };
  if ((a.currentVersion ?? 0) < 10.5) return s;
  const n = await t(r + "/layers", e);
  return (s.layersJSON = { layers: n.layers.filter(o), tables: n.tables }), s;
}
function o(r) {
  return !r.type || r.type === "Feature Layer";
}
export { c as r, t };
