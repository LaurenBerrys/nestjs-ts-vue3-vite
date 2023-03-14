import { o as w } from "./floatRGBA.6f2fa7cd.js";
import { aT as x } from "./index.8fd7165c.js";
const u = (r) =>
  r === "vertical" ||
  r === "horizontal" ||
  r === "cross" ||
  r === "esriSFSCross" ||
  r === "esriSFSVertical" ||
  r === "esriSFSHorizontal";
function k(r, i, T) {
  const F = x(Math.ceil(T)),
    t = u(i) ? 8 * F : 16 * F,
    o = 2 * F;
  (r.width = t), (r.height = t);
  const a = r.getContext("2d");
  (a.strokeStyle = "#FFFFFF"),
    (a.lineWidth = F),
    a.beginPath(),
    (i !== "vertical" &&
      i !== "cross" &&
      i !== "esriSFSCross" &&
      i !== "esriSFSVertical") ||
      (a.moveTo(t / 2, -o), a.lineTo(t / 2, t + o)),
    (i !== "horizontal" &&
      i !== "cross" &&
      i !== "esriSFSCross" &&
      i !== "esriSFSHorizontal") ||
      (a.moveTo(-o, t / 2), a.lineTo(t + o, t / 2)),
    (i !== "forward-diagonal" &&
      i !== "diagonal-cross" &&
      i !== "esriSFSDiagonalCross" &&
      i !== "esriSFSForwardDiagonal") ||
      (a.moveTo(-o, -o),
      a.lineTo(t + o, t + o),
      a.moveTo(t - o, -o),
      a.lineTo(t + o, o),
      a.moveTo(-o, t - o),
      a.lineTo(o, t + o)),
    (i !== "backward-diagonal" &&
      i !== "diagonal-cross" &&
      i !== "esriSFSBackwardDiagonal" &&
      i !== "esriSFSDiagonalCross") ||
      (a.moveTo(t + o, -o),
      a.lineTo(-o, t + o),
      a.moveTo(o, -o),
      a.lineTo(-o, o),
      a.moveTo(t + o, t - o),
      a.lineTo(t - o, t + o)),
    a.stroke();
  const g = a.getImageData(0, 0, r.width, r.height),
    s = new Uint8Array(g.data);
  let l;
  for (let n = 0; n < s.length; n += 4)
    (l = s[n + 3] / 255),
      (s[n] = s[n] * l),
      (s[n + 1] = s[n + 1] * l),
      (s[n + 2] = s[n + 2] * l);
  return [s, r.width, r.height];
}
function y(r, i) {
  const T = i === "Butt",
    F = i === "Square",
    t = !T && !F;
  r.length % 2 == 1 && (r = [...r, ...r]);
  const o = 15.5;
  let a = 0;
  for (const h of r) a += h;
  const g = Math.round(a * o),
    s = new Float32Array(31 * g),
    l = 7.75;
  let n = 0,
    S = 0,
    e = 0.5,
    d = !0;
  for (const h of r) {
    for (n = S, S += h * o; e <= S; ) {
      let m = 0.5;
      for (; m < 31; ) {
        const v = (m - 0.5) * g + e - 0.5,
          c = t ? (m - o) * (m - o) : Math.abs(m - o);
        (s[v] = d
          ? T
            ? Math.max(Math.max(n + l - e, c), Math.max(e - S + l, c))
            : c
          : t
          ? Math.min((e - n) * (e - n) + c, (e - S) * (e - S) + c)
          : F
          ? Math.min(Math.max(e - n, c), Math.max(S - e, c))
          : Math.min(Math.max(e - n + l, c), Math.max(S + l - e, c))),
          m++;
      }
      e++;
    }
    d = !d;
  }
  const M = s.length,
    f = new Uint8Array(4 * M);
  for (let h = 0; h < M; ++h) {
    const m = (t ? Math.sqrt(s[h]) : s[h]) / o;
    w(m, f, 4 * h);
  }
  return [f, g, 31];
}
export { y as e, k as r };
