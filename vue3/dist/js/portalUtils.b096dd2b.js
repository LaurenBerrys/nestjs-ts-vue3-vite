import { cx as l, e1 as i, U as a } from "./index.8fd7165c.js";
function d(e, r) {
  return e === null ? r : new l({ url: e.field("url") });
}
async function y(e, r, t) {
  var o;
  if (!((o = i) == null ? void 0 : o.findCredential(e.restUrl))) return null;
  if (
    e.loadStatus === "loaded" &&
    r === "" &&
    e.user &&
    e.user.sourceJSON &&
    t === !1
  )
    return e.user.sourceJSON;
  if (r === "") {
    const n = await a(e.restUrl + "/community/self", {
      responseType: "json",
      query: {
        f: "json",
        ...(t === !1 ? {} : { returnUserLicenseTypeExtensions: !0 }),
      },
    });
    if (n.data) {
      const s = n.data;
      if (s && s.username) return s;
    }
    return null;
  }
  const u = await a(e.restUrl + "/community/users/" + r, {
    responseType: "json",
    query: { f: "json" },
  });
  if (u.data) {
    const n = u.data;
    return n.error ? null : n;
  }
  return null;
}
export { y as s, d as t };
