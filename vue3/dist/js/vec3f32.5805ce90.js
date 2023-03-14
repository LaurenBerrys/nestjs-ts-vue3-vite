function o() {
  return new Float32Array(3);
}
function _(t) {
  const n = new Float32Array(3);
  return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), n;
}
function r(t, n, l) {
  const e = new Float32Array(3);
  return (e[0] = t), (e[1] = n), (e[2] = l), e;
}
function u() {
  return o();
}
function c() {
  return r(1, 1, 1);
}
function i() {
  return r(1, 0, 0);
}
function a() {
  return r(0, 1, 0);
}
function f() {
  return r(0, 0, 1);
}
const s = u(),
  y = c(),
  w = i(),
  A = a(),
  F = f();
Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      ONES: y,
      UNIT_X: w,
      UNIT_Y: A,
      UNIT_Z: F,
      ZEROS: s,
      clone: _,
      create: o,
      createView: function (t, n) {
        return new Float32Array(t, n, 3);
      },
      fromValues: r,
      ones: c,
      unitX: i,
      unitY: a,
      unitZ: f,
      zeros: u,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export { o as n, r, _ as t };
