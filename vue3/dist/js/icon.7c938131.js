import {
  hc as y,
  hd as w,
  ht as D,
  he as m,
  hm as z,
  hq as k,
  hw as x,
} from "./index.8fd7165c.js";
import { c as _ } from "./observers.139d1c5a.js";
const I = "flip-rtl",
  h = {},
  d = {},
  p = { s: 16, m: 24, l: 32 };
async function O({ icon: i, scale: n }) {
  const c = p[n],
    s = (function (t) {
      const l = !isNaN(Number(t.charAt(0))),
        e = t.split("-");
      if (e.length > 0) {
        const u = /[a-z]/i;
        t = e
          .map((b, g) =>
            b.replace(u, function (f, v) {
              return g === 0 && v === 0 ? f : f.toUpperCase();
            })
          )
          .join("");
      }
      return l ? `i${t}` : t;
    })(i),
    o = s.charAt(s.length - 1) === "F",
    a = `${o ? s.substring(0, s.length - 1) : s}${c}${o ? "F" : ""}`;
  if (h[a]) return h[a];
  d[a] ||
    (d[a] = fetch(x(`./assets/icon/${a}.json`))
      .then((t) => t.json())
      .catch(() => ""));
  const r = await d[a];
  return (h[a] = r), r;
}
const $ = y(
  class extends w {
    constructor() {
      super(),
        this.__registerHost(),
        this.__attachShadow(),
        (this.icon = null),
        (this.flipRtl = !1),
        (this.scale = "m"),
        (this.textLabel = void 0),
        (this.pathData = void 0),
        (this.visible = !1);
    }
    connectedCallback() {
      this.waitUntilVisible(() => {
        (this.visible = !0), this.loadIconPathData();
      });
    }
    disconnectedCallback() {
      var i;
      (i = this.intersectionObserver) == null || i.disconnect(),
        (this.intersectionObserver = null);
    }
    async componentWillLoad() {
      this.loadIconPathData();
    }
    render() {
      const { el: i, flipRtl: n, pathData: c, scale: s, textLabel: o } = this,
        a = D(i),
        r = p[s],
        t = !!o,
        l = [].concat(c || "");
      return m(
        k,
        {
          "aria-hidden": z(!t),
          "aria-label": t ? o : null,
          role: t ? "img" : null,
        },
        m(
          "svg",
          {
            "aria-hidden": "true",
            class: { [I]: a === "rtl" && n, svg: !0 },
            fill: "currentColor",
            height: "100%",
            viewBox: `0 0 ${r} ${r}`,
            width: "100%",
            xmlns: "http://www.w3.org/2000/svg",
          },
          l.map((e) =>
            m(
              "path",
              typeof e == "string"
                ? { d: e }
                : { d: e.d, opacity: "opacity" in e ? e.opacity : 1 }
            )
          )
        )
      );
    }
    async loadIconPathData() {
      const { icon: i, scale: n, visible: c } = this;
      i && c && (this.pathData = await O({ icon: i, scale: n }));
    }
    waitUntilVisible(i) {
      (this.intersectionObserver = _(
        "intersection",
        (n) => {
          n.forEach((c) => {
            c.isIntersecting &&
              (this.intersectionObserver.disconnect(),
              (this.intersectionObserver = null),
              i());
          });
        },
        { rootMargin: "50px" }
      )),
        this.intersectionObserver
          ? this.intersectionObserver.observe(this.el)
          : i();
    }
    static get assetsDirs() {
      return ["assets"];
    }
    get el() {
      return this;
    }
    static get watchers() {
      return { icon: ["loadIconPathData"], scale: ["loadIconPathData"] };
    }
    static get style() {
      return "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}";
    }
  },
  [
    1,
    "calcite-icon",
    {
      icon: [513],
      flipRtl: [516, "flip-rtl"],
      scale: [513],
      textLabel: [1, "text-label"],
      pathData: [32],
      visible: [32],
    },
  ]
);
function E() {
  typeof customElements > "u" ||
    ["calcite-icon"].forEach((i) => {
      i === "calcite-icon" &&
        (customElements.get(i) || customElements.define(i, $));
    });
}
E();
export { $ as I, E as d };
