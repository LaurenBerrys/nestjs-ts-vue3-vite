import { ar as u } from "./NvapForm.feb8550d.js";
import { a as l, g as i, w as n, u as p } from "./vue.a7ce1fbe.js";
import { t as m } from "./Table.e9c997d5.js";
function g(a) {
  const r = l(null),
    t = i(),
    s = () => p(r.value);
  return [
    (e) => {
      m(() => {
        r.value = null;
      }),
        (r.value = e),
        t == null || t.emit("register", e),
        n(
          () => a,
          () => {
            a && e.setProps(u(a));
          },
          { immediate: !0, deep: !0 }
        );
    },
    {
      setProps: (e) => {
        var o;
        (o = s()) == null || o.setProps(e);
      },
      openModal: () => {
        var e;
        (e = s()) == null || e.openModal();
      },
      closeModal: () => {
        var e;
        (e = s()) == null || e.closeModal();
      },
      setSubLoading: (e) => {
        var o;
        (o = s()) == null || o.setSubLoading(e);
      },
    },
  ];
}
export { g as u };
