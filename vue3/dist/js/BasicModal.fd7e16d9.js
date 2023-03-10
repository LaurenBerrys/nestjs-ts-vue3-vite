import {
  d as M,
  a8 as T,
  a9 as L,
  a as S,
  c as B,
  g as W,
  P as $,
  V as D,
  Z as j,
  W as m,
  k as x,
  l as X,
  u as a,
  _ as C,
  A as Y,
  R as H,
  E as P,
  j as V,
  n as A,
} from "./vue.a7ce1fbe.js";
import { L as _, e as N, f as R, M as U } from "./NvapForm.feb8550d.js";
const Z = {
    ..._.props,
    subBtuText: { type: String, default: "确认" },
    showIcon: { type: Boolean, default: !1 },
    width: { type: Number, default: 446 },
    title: { type: String, default: "" },
    maskClosable: { type: Boolean, default: !1 },
    preset: { type: String, default: "dialog" },
  },
  c = function (l, t) {
    var s;
    return l.currentStyle
      ? l.currentStyle[t]
      : (s = document.defaultView) == null
      ? void 0
      : s.getComputedStyle(l, null)[t];
  },
  o = { left: 0, top: 0, currentX: 0, currentY: 0, flag: !1 },
  q = function (l, t, s) {
    const k = document.body.clientWidth,
      i = document.documentElement.clientHeight,
      u = t.offsetWidth,
      y = t.offsetHeight,
      g = t.offsetLeft,
      v = t.offsetTop,
      b = k - g - u,
      w = i - v - y;
    c(t, "left") !== "auto" && (o.left = c(t, "left")),
      c(t, "top") !== "auto" && (o.top = c(t, "top")),
      (l.onmousedown = function (n) {
        (o.flag = !0),
          n ||
            ((n = window.event),
            (l.onselectstart = function () {
              return !1;
            }));
        const r = n;
        (o.currentX = r.clientX), (o.currentY = r.clientY);
      }),
      (document.onmouseup = function () {
        (o.flag = !1),
          c(t, "left") !== "auto" && (o.left = c(t, "left")),
          c(t, "top") !== "auto" && (o.top = c(t, "top"));
      }),
      (document.onmousemove = function (n) {
        const r = n || window.event;
        if (o.flag) {
          const I = r.clientX,
            e = r.clientY,
            f = I - o.currentX,
            h = e - o.currentY;
          let d = parseInt(o.left) + f,
            p = parseInt(o.top) + h;
          return (
            -d > g ? (d = -g) : d > b && (d = b),
            -p > v ? (p = -v) : p > w && (p = w),
            (t.style.left = d + "px"),
            (t.style.top = p + "px"),
            typeof s == "function" &&
              s((parseInt(o.left) || 0) + f, (parseInt(o.top) || 0) + h),
            n.preventDefault && n.preventDefault(),
            !1
          );
        }
      });
  },
  z = { class: "w-full cursor-move", id: "basic-modal-bar" },
  J = M({
    __name: "NvapModal",
    props: { ...Z },
    emits: ["on-close", "on-ok", "register"],
    setup(l, { emit: t }) {
      const s = l;
      T((e) => ({ "1ad231ae": e.widths }));
      const k = L(),
        i = S(null),
        u = S(!1),
        y = S(!1),
        g = B(() => ({ ...s, ...a(i) })),
        v = B(() => {
          const { subBtuText: e } = i.value;
          return e || s.subBtuText;
        }),
        b = B(() => ({ ...k, ...a(g), ...a(i) }));
      function w() {
        (u.value = !1), (y.value = !1), t("on-close");
      }
      function n() {
        (u.value = !1), t("on-close");
      }
      function r() {
        (y.value = !0), t("on-ok");
      }
      const I = {
        setProps: async function (e) {
          i.value = U(a(i) || {}, e);
        },
        openModal: function () {
          (u.value = !0),
            A(() => {
              const e = document.getElementById("basic-modal"),
                f = document.getElementById("basic-modal-bar");
              q(f, e);
            });
        },
        closeModal: w,
        setSubLoading: function (e) {
          y.value = e;
        },
      };
      return (
        W() && t("register", I),
        (e, f) => {
          const h = N,
            d = R,
            p = _;
          return (
            $(),
            D(
              p,
              P({ id: "basic-modal" }, a(b), {
                show: a(u),
                "onUpdate:show":
                  f[0] || (f[0] = (E) => (V(u) ? (u.value = E) : null)),
                onClose: n,
              }),
              j(
                {
                  header: m(() => [H("div", z, C(a(b).title), 1)]),
                  default: m(() => [Y(e.$slots, "default")]),
                  _: 2,
                },
                [
                  e.$slots.action
                    ? {
                        name: "action",
                        fn: m(() => [Y(e.$slots, "action")]),
                        key: "1",
                      }
                    : {
                        name: "action",
                        fn: m(() => [
                          x(d, null, {
                            default: m(() => [
                              x(
                                h,
                                { onClick: w },
                                { default: m(() => [X("取消")]), _: 1 }
                              ),
                              x(
                                h,
                                { type: "primary", loading: a(y), onClick: r },
                                { default: m(() => [X(C(a(v)), 1)]), _: 1 },
                                8,
                                ["loading"]
                              ),
                            ]),
                            _: 1,
                          }),
                        ]),
                        key: "0",
                      },
                ]
              ),
              1040,
              ["show"]
            )
          );
        }
      );
    },
  });
export { J as _ };
