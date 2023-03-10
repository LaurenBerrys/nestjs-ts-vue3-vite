import {
  hn as u,
  hc as p,
  hd as v,
  hl as o,
  hR as c,
  he as e,
  hS as k,
} from "./index.8fd7165c.js";
import { c as b } from "./observers.139d1c5a.js";
import { s as x, a as w, c as y } from "./loadable.8abf7253.js";
import {
  c as z,
  a as C,
  d as _,
  b as L,
  s as R,
  u as q,
} from "./t9n.ff8d2507.js";
import { d as D } from "./icon.7c938131.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
const s = new Set();
let i;
const l = { childList: !0 };
function r(t) {
  t.forEach(({ target: n }) => {
    u(n);
  });
}
var a;
(function (t) {
  (t.brand = "lightbulb"),
    (t.danger = "exclamationMarkTriangle"),
    (t.info = "information"),
    (t.success = "checkCircle"),
    (t.warning = "exclamationMarkTriangle");
})(a || (a = {}));
const E = "title",
  I = "message",
  F = "link",
  d = "actions-end",
  M = "actions-end",
  N = "notice-close",
  B = "container",
  O = "notice-content",
  S = "notice-icon",
  m = p(
    class extends v {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.calciteNoticeClose = o(this, "calciteNoticeClose", 6)),
          (this.calciteNoticeOpen = o(this, "calciteNoticeOpen", 6)),
          (this.close = () => {
            (this.open = !1), this.calciteNoticeClose.emit();
          }),
          (this.open = !1),
          (this.kind = "brand"),
          (this.closable = !1),
          (this.icon = void 0),
          (this.iconFlipRtl = !1),
          (this.scale = "m"),
          (this.width = "auto"),
          (this.messages = void 0),
          (this.messageOverrides = void 0),
          (this.effectiveLocale = void 0),
          (this.defaultMessages = void 0);
      }
      onMessagesChange() {}
      updateRequestedIcon() {
        this.requestedIcon = c(a, this.icon, this.kind);
      }
      connectedCallback() {
        var t;
        (t = this),
          i || (i = b("mutation", r)),
          i.observe(t.el, l),
          z(this),
          C(this);
      }
      disconnectedCallback() {
        (function (t) {
          s.delete(t.el), r(i.takeRecords()), i.disconnect();
          for (const [n] of s.entries()) i.observe(n, l);
        })(this),
          _(this),
          L(this);
      }
      async componentWillLoad() {
        x(this),
          (this.requestedIcon = c(a, this.icon, this.kind)),
          await R(this);
      }
      componentDidLoad() {
        w(this);
      }
      render() {
        const { el: t } = this,
          n = e(
            "button",
            {
              "aria-label": this.messages.close,
              class: N,
              onClick: this.close,
              ref: (f) => (this.closeButton = f),
            },
            e("calcite-icon", {
              icon: "x",
              scale: this.scale === "l" ? "m" : "s",
            })
          ),
          g = k(t, d);
        return e(
          "div",
          { class: B },
          this.requestedIcon
            ? e(
                "div",
                { class: S },
                e("calcite-icon", {
                  flipRtl: this.iconFlipRtl,
                  icon: this.requestedIcon,
                  scale: this.scale === "l" ? "m" : "s",
                })
              )
            : null,
          e(
            "div",
            { class: O },
            e("slot", { name: E }),
            e("slot", { name: I }),
            e("slot", { name: F })
          ),
          g ? e("div", { class: M }, e("slot", { name: d })) : null,
          this.closable ? n : null
        );
      }
      async setFocus() {
        await y(this);
        const t = this.el.querySelector("calcite-link");
        (this.closeButton || t) &&
          (t ? t.setFocus() : this.closeButton && this.closeButton.focus());
      }
      effectiveLocaleChange() {
        q(this, this.effectiveLocale);
      }
      static get assetsDirs() {
        return ["assets"];
      }
      get el() {
        return this;
      }
      static get watchers() {
        return {
          messageOverrides: ["onMessagesChange"],
          icon: ["updateRequestedIcon"],
          kind: ["updateRequestedIcon"],
          effectiveLocale: ["effectiveLocaleChange"],
        };
      }
      static get style() {
        return "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:none;inline-size:100%;background-color:var(--calcite-ui-foreground-1);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;max-block-size:0;text-align:start;border-inline-start:0px solid;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host{display:flex}:host([open]) .container{pointer-events:auto;display:flex;max-block-size:100%;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:flex;align-self:stretch}:host([kind=brand]) .container{border-color:var(--calcite-ui-brand)}:host([kind=brand]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([kind=info]) .container{border-color:var(--calcite-ui-info)}:host([kind=info]) .container .notice-icon{color:var(--calcite-ui-info)}:host([kind=danger]) .container{border-color:var(--calcite-ui-danger)}:host([kind=danger]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([kind=success]) .container{border-color:var(--calcite-ui-success)}:host([kind=success]) .container .notice-icon{color:var(--calcite-ui-success)}:host([kind=warning]) .container{border-color:var(--calcite-ui-warning)}:host([kind=warning]) .container .notice-icon{color:var(--calcite-ui-warning)}";
      }
    },
    [
      1,
      "calcite-notice",
      {
        open: [1540],
        kind: [513],
        closable: [516],
        icon: [520],
        iconFlipRtl: [516, "icon-flip-rtl"],
        scale: [513],
        width: [513],
        messages: [1040],
        messageOverrides: [1040],
        effectiveLocale: [32],
        defaultMessages: [32],
        setFocus: [64],
      },
    ]
  );
function h() {
  typeof customElements > "u" ||
    ["calcite-notice", "calcite-icon"].forEach((t) => {
      switch (t) {
        case "calcite-notice":
          customElements.get(t) || customElements.define(t, m);
          break;
        case "calcite-icon":
          customElements.get(t) || D();
      }
    });
}
h();
const X = m,
  Y = h;
export { X as CalciteNotice, Y as defineCustomElement };
