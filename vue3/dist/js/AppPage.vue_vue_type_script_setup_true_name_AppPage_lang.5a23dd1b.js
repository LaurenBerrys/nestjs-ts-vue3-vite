import { _ as p, as as c } from "./NvapForm.feb8550d.js";
import {
  P as o,
  Q as i,
  R as e,
  l as f,
  d as s,
  V as r,
  W as u,
  A as d,
  $ as m,
  k as h,
  H as x,
} from "./vue.a7ce1fbe.js";
const b = {},
  g = { "text-14": "", "f-c-c": "", "flex-col": "", color: "#6a6a6a" },
  _ = [
    e(
      "p",
      null,
      [
        f(" Copyright©2022 "),
        e(
          "a",
          {
            href: "https://github.com/supercode-peter/nestjs-ts-vue3-vite",
            target: "__blank",
            hover: "decoration-underline color-primary",
          },
          " 大脸怪"
        ),
      ],
      -1
    ),
    e(
      "p",
      null,
      [
        e(
          "a",
          {
            href: "http://beian.miit.gov.cn/",
            target: "__blank",
            hover: "decoration-underline color-primary",
          },
          " xxxxxx "
        ),
      ],
      -1
    ),
  ],
  y = p(b, [
    [
      "render",
      function (t, a) {
        return o(), i("footer", g, _);
      },
    ],
  ]),
  k = {
    class: "cus-scroll-y wh-full p-15 flex-col bg-[#f5f6fb] dark:bg-hex-121212",
  },
  v = s({ name: "AppPage" }),
  P = s({
    ...v,
    props: { showFooter: { type: Boolean, default: !1 } },
    setup: (t) => (a, w) => {
      const l = y,
        n = c;
      return (
        o(),
        r(
          x,
          { name: "fade-slide", mode: "out-in", appear: "" },
          {
            default: u(() => [
              e("section", k, [
                d(a.$slots, "default"),
                t.showFooter ? (o(), r(l, { key: 0, "mt-15": "" })) : m("", !0),
                h(n, { bottom: 20 }),
              ]),
            ]),
            _: 3,
          }
        )
      );
    },
  });
export { P as _ };
