function m(a) {
  return (
    (a = a || globalThis.location.hostname),
    l.some((t) => (a == null ? void 0 : a.match(t)) != null)
  );
}
function e(a, t) {
  return a && (t = t || globalThis.location.hostname)
    ? t.match(c) != null || t.match(s) != null
      ? a.replace("static.arcgis.com", "staticdev.arcgis.com")
      : t.match(o) != null || t.match(i) != null
      ? a.replace("static.arcgis.com", "staticqa.arcgis.com")
      : a
    : a;
}
const c = /^devext.arcgis.com$/,
  o = /^qaext.arcgis.com$/,
  s = /^[\w-]*\.mapsdevext.arcgis.com$/,
  i = /^[\w-]*\.mapsqa.arcgis.com$/,
  l = [
    /^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,
    c,
    o,
    /^jsapps.esri.com$/,
    s,
    i,
  ];
export { e as a, m as c };
