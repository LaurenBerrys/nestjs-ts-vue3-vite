function e(i, f) {
  if (i && f) {
    for (const o of i.children)
      if (o.localName in f) {
        const n = f[o.localName];
        if (typeof n == "function") {
          const c = n(o);
          c && e(o, c);
        } else e(o, n);
      }
  }
}
function* l(i, f) {
  for (const o of i.children)
    if (o.localName in f) {
      const n = f[o.localName];
      typeof n == "function" ? yield n(o) : yield* l(o, n);
    }
}
export { l as n, e as o };
