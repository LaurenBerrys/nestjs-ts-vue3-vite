function T() {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
function d(n) {
  return [
    n[0],
    n[1],
    n[2],
    n[3],
    n[4],
    n[5],
    n[6],
    n[7],
    n[8],
    n[9],
    n[10],
    n[11],
    n[12],
    n[13],
    n[14],
    n[15],
  ];
}
function g(n, r) {
  return new Float64Array(n, r, 16);
}
const j = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      IDENTITY: j,
      clone: d,
      create: T,
      createView: g,
      fromValues: function (n, r, t, o, u, c, a, e, l, f, i, s, _, b, p, y) {
        return [n, r, t, o, u, c, a, e, l, f, i, s, _, b, p, y];
      },
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export { T as e, g as n, j as o, d as r };
