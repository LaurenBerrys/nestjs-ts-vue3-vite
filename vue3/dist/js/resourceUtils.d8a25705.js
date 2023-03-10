import { c as u } from "./basicInterfaces.b7051eb1.js";
class m {
  constructor(r) {
    (this.data = r),
      (this.type = "encoded-mesh-texture"),
      (this.encoding = u.KTX2_ENCODING);
  }
}
function v(t) {
  return (t == null ? void 0 : t.type) === "encoded-mesh-texture";
}
async function h(t) {
  return new Promise((r, s) => {
    const c = new Blob([t]),
      o = new FileReader();
    (o.onload = () => {
      const n = o.result;
      r(JSON.parse(n));
    }),
      (o.onerror = (n) => {
        s(n);
      }),
      o.readAsText(c);
  });
}
async function w(t, r) {
  return r === u.KTX2_ENCODING
    ? new m(t)
    : new Promise((s, c) => {
        const o = new Blob([t], { type: r }),
          n = URL.createObjectURL(o),
          e = new Image(),
          a = () => {
            URL.revokeObjectURL(n),
              "decode" in e
                ? e
                    .decode()
                    .then(
                      () => s(e),
                      () => s(e)
                    )
                    .then(d)
                : (s(e), d());
          },
          i = (L) => {
            URL.revokeObjectURL(n), c(L), d();
          },
          d = () => {
            e.removeEventListener("load", a), e.removeEventListener("error", i);
          };
        e.addEventListener("load", a),
          e.addEventListener("error", i),
          (e.src = n);
      });
}
export { m as n, w as o, h as r, v as t };
