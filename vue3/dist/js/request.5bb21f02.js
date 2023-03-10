import { q as d, s as b } from "./index.8fd7165c.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
let p;
function j(n, s) {
  let t = s.responseType;
  t
    ? t !== "array-buffer" &&
      t !== "blob" &&
      t !== "json" &&
      t !== "native" &&
      t !== "native-request-init" &&
      t !== "text" &&
      (t = "text")
    : (t = "json"),
    (s.responseType = t);
  const c = d(s.signal);
  return (
    delete s.signal,
    globalThis
      .invokeStaticMessage("request", { url: n, options: s }, { signal: c })
      .then(async (e) => {
        let i, r, l, u, a;
        if (e.data)
          if (e.data instanceof ArrayBuffer) {
            if (
              !(
                (t !== "json" && t !== "text" && t !== "blob") ||
                ((i = new Blob([e.data])),
                (t !== "json" && t !== "text") ||
                  (p || (p = new FileReaderSync()),
                  (u = p.readAsText(i)),
                  t !== "json"))
              )
            ) {
              try {
                r = JSON.parse(u || null);
              } catch (o) {
                const f = { ...o, url: n, requestOptions: s };
                throw new b("request:server", o.message, f);
              }
              if (r.error) {
                const o = { ...r.error, url: n, requestOptions: s };
                throw new b("request:server", r.error.message, o);
              }
            }
          } else
            t === "native" &&
              ((e.data.signal = c),
              (l = await fetch(e.data.url, e.data)),
              (e.httpStatus = l.status));
        switch (t) {
          case "blob":
            a = i;
            break;
          case "json":
            a = r;
            break;
          case "native":
            a = l;
            break;
          case "text":
            a = u;
            break;
          default:
            a = e.data;
        }
        return {
          data: a,
          httpStatus: e.httpStatus,
          requestOptions: s,
          ssl: e.ssl,
          url: n,
        };
      })
  );
}
export { j as execute };
