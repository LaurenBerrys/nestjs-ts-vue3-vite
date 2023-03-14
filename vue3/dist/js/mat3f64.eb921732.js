function f() {
  return [1, 0, 0, 0, 1, 0, 0, 0, 1];
}
function i(r, t, n, e, o, u, a, c, l) {
  return [r, t, n, e, o, u, a, c, l];
}
function _(r, t) {
  return new Float64Array(r, t, 9);
}
Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      clone: function (r) {
        return [r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8]];
      },
      create: f,
      createView: _,
      fromValues: i,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export { f as e, _ as n, i as t };
