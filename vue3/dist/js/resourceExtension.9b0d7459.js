import { eF as g } from "./index.8fd7165c.js";
function l(i) {
  return (
    n[
      (function (p) {
        return p instanceof Blob
          ? p.type
          : (function (o) {
              const e = g(o);
              return t[e] || a;
            })(p.url);
      })(i)
    ] || c
  );
}
const n = {},
  a = "text/plain",
  c = n[a],
  t = {
    png: "image/png",
    jpeg: "image/jpeg",
    jpg: "image/jpg",
    bmp: "image/bmp",
    gif: "image/gif",
    json: "application/json",
    txt: "text/plain",
    xml: "application/xml",
    svg: "image/svg+xml",
    zip: "application/zip",
    pbf: "application/vnd.mapbox-vector-tile",
    gz: "application/gzip",
    "bin.gz": "application/octet-stream",
  };
for (const i in t) n[t[i]] = i;
export { l as t };
