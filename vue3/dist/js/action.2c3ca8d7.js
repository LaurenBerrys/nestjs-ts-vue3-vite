import {
  hc as f,
  hd as g,
  hn as v,
  he as a,
  hm as m,
  hq as x,
} from "./index.8fd7165c.js";
import { g as y } from "./guid.416070ad.js";
import { u as k } from "./interactive.b07f4543.js";
import { s as w, a as z, c as E } from "./loadable.8abf7253.js";
import {
  u as C,
  c as _,
  a as I,
  s as D,
  d as L,
  b as O,
} from "./t9n.ff8d2507.js";
import { c as T } from "./observers.139d1c5a.js";
import { d as $ } from "./icon.7c938131.js";
import { d as j } from "./loader.e5641e3b.js";
const F = "button",
  R = "button--text-visible",
  M = "button--compact",
  S = "indicator-text",
  q = "icon-container",
  A = "slot-container",
  H = "slot-container--hidden",
  W = "text-container",
  B = "text-container--visible",
  G = "tooltip",
  J = f(
    class extends g {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.mutationObserver = T("mutation", () => v(this))),
          (this.guid = `calcite-action-${y()}`),
          (this.indicatorId = `${this.guid}-indicator`),
          (this.buttonId = `${this.guid}-button`),
          (this.handleTooltipSlotChange = (t) => {
            const e = t.target
              .assignedElements({ flatten: !0 })
              .filter((i) =>
                i == null ? void 0 : i.matches("calcite-tooltip")
              )[0];
            e && (e.referenceElement = this.buttonEl);
          }),
          (this.active = !1),
          (this.alignment = void 0),
          (this.appearance = "solid"),
          (this.compact = !1),
          (this.disabled = !1),
          (this.icon = void 0),
          (this.iconFlipRtl = !1),
          (this.indicator = !1),
          (this.label = void 0),
          (this.loading = !1),
          (this.scale = "m"),
          (this.text = void 0),
          (this.textEnabled = !1),
          (this.messages = void 0),
          (this.messageOverrides = void 0),
          (this.effectiveLocale = ""),
          (this.defaultMessages = void 0);
      }
      onMessagesChange() {}
      effectiveLocaleChange() {
        C(this, this.effectiveLocale);
      }
      connectedCallback() {
        var t;
        _(this),
          I(this),
          (t = this.mutationObserver) == null ||
            t.observe(this.el, { childList: !0, subtree: !0 });
      }
      async componentWillLoad() {
        w(this), await D(this);
      }
      componentDidLoad() {
        z(this);
      }
      disconnectedCallback() {
        var t;
        L(this), O(this), (t = this.mutationObserver) == null || t.disconnect();
      }
      componentDidRender() {
        k(this);
      }
      async setFocus() {
        var t;
        await E(this), (t = this.buttonEl) == null || t.focus();
      }
      renderTextContainer() {
        const { text: t, textEnabled: e } = this;
        return t
          ? a("div", { class: { [W]: !0, [B]: e }, key: "text-container" }, t)
          : null;
      }
      renderIndicatorText() {
        const { indicator: t, messages: e, indicatorId: i, buttonId: n } = this;
        return a(
          "div",
          {
            "aria-labelledby": n,
            "aria-live": "polite",
            class: S,
            id: i,
            role: "region",
          },
          t ? e.indicator : null
        );
      }
      renderIconContainer() {
        var r;
        const { loading: t, icon: e, scale: i, el: n, iconFlipRtl: s } = this,
          l = i === "l" ? "m" : "s",
          d = i === "l" ? "l" : "m",
          o = t
            ? a("calcite-loader", {
                inline: !0,
                label: this.messages.loading,
                scale: d,
              })
            : null,
          u = e ? a("calcite-icon", { flipRtl: s, icon: e, scale: l }) : null,
          c = o || u,
          b = c || ((r = n.children) == null ? void 0 : r.length),
          h = a("div", { class: { [A]: !0, [H]: t } }, a("slot", null));
        return b
          ? a(
              "div",
              { "aria-hidden": "true", class: q, key: "icon-container" },
              c,
              h
            )
          : null;
      }
      render() {
        const {
            active: t,
            compact: e,
            disabled: i,
            loading: n,
            textEnabled: s,
            label: l,
            text: d,
            indicator: o,
            indicatorId: u,
            buttonId: c,
            messages: b,
          } = this,
          h = `${l || d}${o ? ` (${b.indicator})` : ""}`,
          r = { [F]: !0, [R]: s, [M]: e };
        return a(
          x,
          null,
          a(
            "button",
            {
              "aria-busy": m(n),
              "aria-controls": o ? u : null,
              "aria-disabled": m(i),
              "aria-label": h,
              "aria-pressed": m(t),
              class: r,
              disabled: i,
              id: c,
              ref: (p) => (this.buttonEl = p),
            },
            this.renderIconContainer(),
            this.renderTextContainer()
          ),
          a("slot", { name: G, onSlotchange: this.handleTooltipSlotChange }),
          this.renderIndicatorText()
        );
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
          effectiveLocale: ["effectiveLocaleChange"],
        };
      }
      static get style() {
        return '@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;background-color:transparent;--calcite-action-indicator-color:var(--calcite-ui-brand)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.button{position:relative;margin:0px;display:flex;inline-size:auto;cursor:pointer;align-items:center;justify-content:flex-start;border-style:none;background-color:var(--calcite-ui-foreground-1);fill:var(--calcite-ui-text-3);font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-3);outline-color:transparent;text-align:unset;flex:1 0 auto}.button:hover{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}.button:focus{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.button:active{background-color:var(--calcite-ui-foreground-3)}.button .icon-container{pointer-events:none;margin:0px;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1rem}.button .text-container{margin:0px;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:margin;transition-property:inline-size}.button .text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1}:host([scale=s]) .button{padding-inline:0.5rem;padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:0.5rem}:host([scale=m]) .button{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:0.75rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{background-color:var(--calcite-ui-foreground-3);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}:host([active]) .button:active{background-color:var(--calcite-ui-foreground-1)}:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:transparent;box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset}:host([active][appearance=transparent]) .button,:host([active][appearance=transparent]) .button:hover,:host([active][appearance=transparent]) .button:focus{background-color:var(--calcite-ui-foreground-3);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}:host([appearance=transparent][loading]) .button,:host([appearance=transparent][disabled]) .button{background-color:transparent}:host([loading]) .button,:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-ui-foreground-1)}:host([loading]) .button .text-container,:host([loading]) .button:hover .text-container,:host([loading]) .button:focus .text-container{opacity:var(--calcite-ui-opacity-disabled)}:host([loading]) calcite-loader[inline]{color:var(--calcite-ui-text-3);margin-inline-end:0px}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;background-color:var(--calcite-ui-foreground-1);opacity:var(--calcite-ui-opacity-disabled)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{background-color:var(--calcite-ui-foreground-3);opacity:var(--calcite-ui-opacity-disabled)}:host([indicator]) .button::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;border-width:2px;background-color:var(--calcite-action-indicator-color);border-color:var(--calcite-ui-foreground-1);inset-block-end:0.75rem;inset-inline-end:0.75rem}:host([indicator]) .button--text-visible::after{inset-block-end:auto}:host([indicator]) .button--text-visible .text-container--visible{margin-inline-end:1rem}:host([indicator]) .button:hover::after,:host([indicator]) .button:focus::after{border-color:var(--calcite-ui-foreground-1)}:host([indicator][scale=s]) .button::after{inset-block-end:0.25rem;inset-inline-end:0.25rem}:host([indicator][scale=s]) .button--text-visible::after{inset-block-end:auto;inset-inline-end:0.5rem}:host([indicator][active]) .button::after{border-color:var(--calcite-ui-foreground-3)}.indicator-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}';
      }
    },
    [
      1,
      "calcite-action",
      {
        active: [516],
        alignment: [513],
        appearance: [513],
        compact: [516],
        disabled: [516],
        icon: [1],
        iconFlipRtl: [516, "icon-flip-rtl"],
        indicator: [516],
        label: [1],
        loading: [516],
        scale: [513],
        text: [1],
        textEnabled: [516, "text-enabled"],
        messages: [1040],
        messageOverrides: [1040],
        effectiveLocale: [32],
        defaultMessages: [32],
        setFocus: [64],
      },
    ]
  );
function K() {
  typeof customElements > "u" ||
    ["calcite-action", "calcite-icon", "calcite-loader"].forEach((t) => {
      switch (t) {
        case "calcite-action":
          customElements.get(t) || customElements.define(t, J);
          break;
        case "calcite-icon":
          customElements.get(t) || $();
          break;
        case "calcite-loader":
          customElements.get(t) || j();
      }
    });
}
K();
export { J as A, K as d };
