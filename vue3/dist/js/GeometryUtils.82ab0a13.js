const o = 0.7111111111111111,
  u = 1 / Math.LN2;
function c(t) {
  return (function (n, r) {
    return (n %= r) >= 0 ? n : n + r;
  })(t * o, 256);
}
function e(t) {
  return Math.log(t) * u;
}
export { c, e };
