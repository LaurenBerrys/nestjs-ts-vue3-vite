let r = null,
  e = !0;
function m(a, t, n) {
  if (!a || !t)
    throw new Error("Cannot construct image data without dimensions");
  if (e)
    try {
      return new ImageData(a, t);
    } catch {
      e = !1;
    }
  return c(a, t, n);
}
function s(a, t, n, o) {
  if (!t || !n)
    throw new Error("Cannot construct image data without dimensions");
  if (e)
    try {
      return new ImageData(a, t, n);
    } catch {
      e = !1;
    }
  const i = c(t, n, o);
  return i.data.set(a, 0), i;
}
function u() {
  return (
    r ||
      ((r = document.createElement("canvas")), (r.width = 1), (r.height = 1)),
    r
  );
}
function c(a, t, n) {
  return n || (n = u()), n.getContext("2d").createImageData(a, t);
}
export { m as e, s as r };
