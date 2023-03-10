import { hc as f, hd as d, he as l } from "./index.8fd7165c.js";
import { c as h } from "./observers.139d1c5a.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
const u = "frame",
  p = "frame--advancing",
  g = "frame--retreating",
  s = f(
    class extends d {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.itemMutationObserver = h("mutation", () =>
            this.updateFlowProps()
          )),
          (this.getFlowDirection = (t, i) =>
            (t && i > 1) || t > 1
              ? i < t
                ? "retreating"
                : "advancing"
              : null),
          (this.updateFlowProps = () => {
            const { el: t, items: i } = this,
              n = Array.from(t.querySelectorAll("calcite-flow-item")).filter(
                (a) => a.closest("calcite-flow") === t
              ),
              r = i.length,
              e = n.length,
              o = n[e - 1],
              c = n[e - 2];
            if (
              (e &&
                o &&
                n.forEach((a) => {
                  (a.showBackButton = a === o && e > 1), (a.hidden = a !== o);
                }),
              c && (c.menuOpen = !1),
              (this.items = n),
              r !== e)
            ) {
              const a = this.getFlowDirection(r, e);
              (this.itemCount = e), (this.flowDirection = a);
            }
          }),
          (this.flowDirection = null),
          (this.itemCount = 0),
          (this.items = []);
      }
      async back() {
        const { items: t } = this,
          i = t[t.length - 1];
        if (i)
          return (i.beforeBack ? i.beforeBack : () => Promise.resolve())
            .call(i)
            .then(() => (i.remove(), i));
      }
      connectedCallback() {
        var t;
        (t = this.itemMutationObserver) == null ||
          t.observe(this.el, { childList: !0, subtree: !0 }),
          this.updateFlowProps();
      }
      disconnectedCallback() {
        var t;
        (t = this.itemMutationObserver) == null || t.disconnect();
      }
      handleItemBackClick() {
        this.back();
      }
      render() {
        const { flowDirection: t } = this;
        return l(
          "div",
          {
            class: { [u]: !0, [p]: t === "advancing", [g]: t === "retreating" },
          },
          l("slot", null)
        );
      }
      get el() {
        return this;
      }
      static get style() {
        return "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}";
      }
    },
    [
      1,
      "calcite-flow",
      { flowDirection: [32], itemCount: [32], items: [32], back: [64] },
      [[0, "calciteFlowItemBack", "handleItemBackClick"]],
    ]
  );
function m() {
  typeof customElements > "u" ||
    ["calcite-flow"].forEach((t) => {
      t === "calcite-flow" &&
        (customElements.get(t) || customElements.define(t, s));
    });
}
m();
const z = s,
  B = m;
export { z as CalciteFlow, B as defineCustomElement };
