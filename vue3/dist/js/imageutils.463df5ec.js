import { r as c, t as m, s, d2 as f, d3 as u } from "./index.8fd7165c.js";
function d(n) {
  const t = g(n);
  return c(t) ? t.toDataURL() : "";
}
async function h(n) {
  const t = g(n);
  if (m(t)) throw new s("imageToArrayBuffer", "Unsupported image type");
  const e = await (async function (i) {
      if (!(i instanceof HTMLImageElement)) return "image/png";
      const r = i.src;
      if (f(r)) {
        const o = u(r);
        return (o == null ? void 0 : o.mediaType) === "image/jpeg"
          ? o.mediaType
          : "image/png";
      }
      return /\.png$/i.test(r)
        ? "image/png"
        : /\.(jpg|jpeg)$/i.test(r)
        ? "image/jpeg"
        : "image/png";
    })(n),
    a = await new Promise((i) => t.toBlob(i, e));
  if (!a) throw new s("imageToArrayBuffer", "Failed to encode image");
  return { data: await a.arrayBuffer(), type: e };
}
function g(n) {
  if (n instanceof HTMLCanvasElement) return n;
  if (n instanceof HTMLVideoElement) return null;
  const t = document.createElement("canvas");
  (t.width = n.width), (t.height = n.height);
  const e = t.getContext("2d");
  return (
    n instanceof HTMLImageElement
      ? e.drawImage(n, 0, 0, n.width, n.height)
      : n instanceof ImageData && e.putImageData(n, 0, 0),
    t
  );
}
function w(n) {
  const t = [],
    e = new Uint8Array(n);
  for (let a = 0; a < e.length; a++) t.push(String.fromCharCode(e[a]));
  return "data:application/octet-stream;base64," + btoa(t.join(""));
}
function l(n) {
  if (n.byteLength < 8) return !1;
  const t = new Uint8Array(n);
  return (
    t[0] === 137 &&
    t[1] === 80 &&
    t[2] === 78 &&
    t[3] === 71 &&
    t[4] === 13 &&
    t[5] === 10 &&
    t[6] === 26 &&
    t[7] === 10
  );
}
export { g as c, l as g, d as i, h as o, w as s };
