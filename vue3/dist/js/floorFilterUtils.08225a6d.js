function i(o) {
  var n;
  const l = o.layer;
  return "floorInfo" in l &&
    (n = l.floorInfo) != null &&
    n.floorField &&
    "floors" in o.view
    ? r(o.view.floors, l.floorInfo.floorField)
    : null;
}
function e(o, l) {
  var n;
  return "floorInfo" in l && (n = l.floorInfo) != null && n.floorField
    ? r(o, l.floorInfo.floorField)
    : null;
}
function r(o, l) {
  if (!(o != null && o.length)) return null;
  const n = o.filter((f) => f !== "").map((f) => `'${f}'`);
  return n.push("''"), `${l} IN (${n.join(",")}) OR ${l} IS NULL`;
}
export { e as n, i as o };
