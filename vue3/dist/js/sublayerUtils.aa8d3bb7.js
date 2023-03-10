import { t as f, dy as l } from "./index.8fd7165c.js";
function g(n, o, e) {
  return (
    o.flatten(({ sublayers: i }) => i).length !== n.length ||
    !!n.some(
      (i) =>
        i.originIdOf("minScale") > e ||
        i.originIdOf("maxScale") > e ||
        i.originIdOf("renderer") > e ||
        i.originIdOf("labelingInfo") > e ||
        i.originIdOf("opacity") > e ||
        i.originIdOf("labelsVisible") > e ||
        i.originIdOf("source") > e
    ) ||
    !a(n, o)
  );
}
function d(n, o, e) {
  return (
    !!n.some((r) => {
      const i = r.source;
      return (
        !(
          !i ||
          (i.type === "map-layer" &&
            i.mapLayerId === r.id &&
            (f(i.gdbVersion) || i.gdbVersion === e))
        ) ||
        r.originIdOf("renderer") > l.SERVICE ||
        r.originIdOf("labelingInfo") > l.SERVICE ||
        r.originIdOf("opacity") > l.SERVICE ||
        r.originIdOf("labelsVisible") > l.SERVICE
      );
    }) || !a(n, o)
  );
}
function a(n, o) {
  if (!n || !n.length || f(o)) return !0;
  const e = o
    .slice()
    .reverse()
    .flatten(({ sublayers: t }) => t && t.toArray().reverse())
    .map((t) => t.id)
    .toArray();
  if (n.length > e.length) return !1;
  let r = 0;
  const i = e.length;
  for (const { id: t } of n) {
    for (; r < i && e[r] !== t; ) r++;
    if (r >= i) return !1;
  }
  return !0;
}
function c(n) {
  return (
    !!n &&
    n.some(
      (o) =>
        o.minScale != null ||
        (o.layerDefinition && o.layerDefinition.minScale != null)
    )
  );
}
export { d as i, g as n, c as t };
