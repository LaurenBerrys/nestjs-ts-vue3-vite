function b(t) {
  return "h" in t && "s" in t && "v" in t;
}
function l(t) {
  return "l" in t && "a" in t && "b" in t;
}
function g(t) {
  return "l" in t && "c" in t && "h" in t;
}
const p = [
    [0.4124, 0.3576, 0.1805],
    [0.2126, 0.7152, 0.0722],
    [0.0193, 0.1192, 0.9505],
  ],
  k = [
    [3.2406, -1.5372, -0.4986],
    [-0.9689, 1.8758, 0.0415],
    [0.0557, -0.204, 1.057],
  ];
function M(t, r) {
  const n = [];
  let o, e;
  if (t[0].length !== r.length) throw new Error("dimensions do not match");
  const u = t.length,
    c = t[0].length;
  let a = 0;
  for (o = 0; o < u; o++) {
    for (a = 0, e = 0; e < c; e++) a += t[o][e] * r[e];
    n.push(a);
  }
  return n;
}
function m(t) {
  const r = [t.r / 255, t.g / 255, t.b / 255].map((o) =>
      o <= 0.04045 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4
    ),
    n = M(p, r);
  return { x: 100 * n[0], y: 100 * n[1], z: 100 * n[2] };
}
function s(t) {
  const r = M(k, [t.x / 100, t.y / 100, t.z / 100]).map((n) => {
    const o =
      n <= 0.0031308 ? 12.92 * n : 1.055 * n ** 0.4166666666666667 - 0.055;
    return Math.min(1, Math.max(o, 0));
  });
  return {
    r: Math.round(255 * r[0]),
    g: Math.round(255 * r[1]),
    b: Math.round(255 * r[2]),
  };
}
function d(t) {
  const r = [t.x / 95.047, t.y / 100, t.z / 108.883].map((n) =>
    n > 0.008856451679035631
      ? n ** 0.3333333333333333
      : 7.787037037037035 * n + 0.13793103448275862
  );
  return { l: 116 * r[1] - 16, a: 500 * (r[0] - r[1]), b: 200 * (r[1] - r[2]) };
}
function x(t) {
  const r = t.l,
    n = [
      (r + 16) / 116 + t.a / 500,
      (r + 16) / 116,
      (r + 16) / 116 - t.b / 200,
    ].map((o) => (o > 6 / 29 ? o ** 3 : 3 * (6 / 29) ** 2 * (o - 4 / 29)));
  return { x: 95.047 * n[0], y: 100 * n[1], z: 108.883 * n[2] };
}
function y(t) {
  return (function (r) {
    const n = r.l,
      o = r.a,
      e = r.b,
      u = Math.sqrt(o * o + e * e);
    let c = Math.atan2(e, o);
    return (c = c > 0 ? c : c + 2 * Math.PI), { l: n, c: u, h: c };
  })(d(m(t)));
}
function z(t) {
  return s(
    x(
      (function (r) {
        const n = r.l,
          o = r.c,
          e = r.h;
        return { l: n, a: o * Math.cos(e), b: o * Math.sin(e) };
      })(t)
    )
  );
}
function h(t) {
  return (function (r) {
    return "r" in r && "g" in r && "b" in r;
  })(t)
    ? t
    : g(t)
    ? z(t)
    : l(t)
    ? (function (r) {
        return s(x(r));
      })(t)
    : (function (r) {
        return "x" in r && "y" in r && "z" in r;
      })(t)
    ? s(t)
    : b(t)
    ? (function (r) {
        const n = ((r.h + 360) % 360) / 60,
          o = r.s / 100,
          e = (r.v / 100) * 255,
          u = e * o,
          c = u * (1 - Math.abs((n % 2) - 1));
        let a;
        switch (Math.floor(n)) {
          case 0:
            a = { r: u, g: c, b: 0 };
            break;
          case 1:
            a = { r: c, g: u, b: 0 };
            break;
          case 2:
            a = { r: 0, g: u, b: c };
            break;
          case 3:
            a = { r: 0, g: c, b: u };
            break;
          case 4:
            a = { r: c, g: 0, b: u };
            break;
          case 5:
          case 6:
            a = { r: u, g: 0, b: c };
            break;
          default:
            a = { r: 0, g: 0, b: 0 };
        }
        return (
          (a.r = Math.round(a.r + e - u)),
          (a.g = Math.round(a.g + e - u)),
          (a.b = Math.round(a.b + e - u)),
          a
        );
      })(t)
    : t;
}
function v(t) {
  return b(t)
    ? t
    : (function (r) {
        const n = r.r,
          o = r.g,
          e = r.b,
          u = Math.max(n, o, e),
          c = u - Math.min(n, o, e);
        let a = u,
          i =
            c === 0
              ? 0
              : u === n
              ? ((o - e) / c) % 6
              : u === o
              ? (e - n) / c + 2
              : (n - o) / c + 4,
          f = c === 0 ? 0 : c / a;
        return (
          i < 0 && (i += 6),
          (i *= 60),
          (f *= 100),
          (a *= 100 / 255),
          { h: i, s: f, v: a }
        );
      })(h(t));
}
function w(t) {
  return l(t)
    ? t
    : (function (r) {
        return d(m(r));
      })(h(t));
}
function q(t) {
  return g(t) ? t : y(h(t));
}
export { h as p, q as v, v as y, w as z };
