import {
  hc as A,
  hd as w,
  hl as g,
  h$ as f,
  he as i,
  ht as I,
  hm as v,
  hq as L,
} from "./index.8fd7165c.js";
import { u as D } from "./interactive.b07f4543.js";
import {
  g as z,
  u as _,
  a as S,
  I as p,
  C as a,
  S as C,
} from "./utils3.eeba64ea.js";
import { s as M, a as P, c as F } from "./loadable.8abf7253.js";
import { d as B } from "./icon.7c938131.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./observers.139d1c5a.js";
const b = new Map(),
  y = A(
    class extends w {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.calciteListItemSelect = g(this, "calciteListItemSelect", 6)),
          (this.calciteInternalListItemSelect = g(
            this,
            "calciteInternalListItemSelect",
            6
          )),
          (this.calciteInternalListItemActive = g(
            this,
            "calciteInternalListItemActive",
            6
          )),
          (this.calciteInternalFocusPreviousItem = g(
            this,
            "calciteInternalFocusPreviousItem",
            6
          )),
          (this.handleContentSlotChange = (t) => {
            this.hasCustomContent = f(t);
          }),
          (this.handleActionsStartSlotChange = (t) => {
            this.hasActionsStart = f(t);
          }),
          (this.handleActionsEndSlotChange = (t) => {
            this.hasActionsEnd = f(t);
          }),
          (this.handleContentStartSlotChange = (t) => {
            this.hasContentStart = f(t);
          }),
          (this.handleContentEndSlotChange = (t) => {
            this.hasContentEnd = f(t);
          }),
          (this.handleDefaultSlotChange = (t) => {
            const { parentListEl: e } = this,
              n = z(t);
            _(n);
            const o = !!n.length;
            o && e && !e.openable && (e.openable = !0),
              (this.openable = o),
              o || (this.open = !1);
          }),
          (this.toggleOpen = () => {
            this.open = !this.open;
          }),
          (this.itemClicked = () => {
            this.toggleSelected(), this.calciteInternalListItemActive.emit();
          }),
          (this.toggleSelected = () => {
            this.disabled ||
              (this.selectionMode !== "none" &&
                (this.selected = !this.selected),
              this.calciteListItemSelect.emit());
          }),
          (this.handleItemKeyDown = (t) => {
            const { key: e } = t,
              n = t.composedPath(),
              {
                containerEl: o,
                contentEl: c,
                actionsStartEl: s,
                actionsEndEl: l,
                open: m,
                openable: u,
              } = this,
              r = [s, c, l].filter(Boolean),
              d = r.findIndex((h) => n.includes(h));
            if (e === " ") t.preventDefault(), this.toggleSelected();
            else if (e === "ArrowRight") {
              t.preventDefault();
              const h = d + 1;
              d === -1
                ? !m && u
                  ? ((this.open = !0), this.focusCell(null))
                  : r[0] && this.focusCell(r[0])
                : r[d] && r[h] && this.focusCell(r[h]);
            } else if (e === "ArrowLeft") {
              t.preventDefault();
              const h = d - 1;
              d === -1
                ? (this.focusCell(null),
                  m && u
                    ? (this.open = !1)
                    : this.calciteInternalFocusPreviousItem.emit())
                : d === 0
                ? (this.focusCell(null), o.focus())
                : r[d] && r[h] && this.focusCell(r[h]);
            }
          }),
          (this.focusCellNull = () => {
            this.focusCell(null);
          }),
          (this.focusCell = (t, e = !0) => {
            const {
              contentEl: n,
              actionsStartEl: o,
              actionsEndEl: c,
              parentListEl: s,
            } = this;
            e && b.set(s, null),
              [o, n, c].filter(Boolean).forEach((l, m) => {
                const u = "tabindex";
                l === t
                  ? (l.setAttribute(u, "0"), e && b.set(s, m))
                  : l.removeAttribute(u);
              }),
              t == null || t.focus();
          }),
          (this.active = !1),
          (this.description = void 0),
          (this.disabled = !1),
          (this.label = void 0),
          (this.metadata = void 0),
          (this.open = !1),
          (this.setSize = null),
          (this.setPosition = null),
          (this.selected = !1),
          (this.value = void 0),
          (this.selectionMode = null),
          (this.selectionAppearance = null),
          (this.level = null),
          (this.visualLevel = null),
          (this.parentListEl = void 0),
          (this.openable = !1),
          (this.hasActionsStart = !1),
          (this.hasActionsEnd = !1),
          (this.hasCustomContent = !1),
          (this.hasContentStart = !1),
          (this.hasContentEnd = !1);
      }
      activeHandler(t) {
        t || this.focusCell(null, !1);
      }
      handleSelectedChange(t) {
        t && this.calciteInternalListItemSelect.emit();
      }
      connectedCallback() {
        const { el: t } = this;
        (this.parentListEl = t.closest("calcite-list")),
          (this.level = S(t) + 1),
          (this.visualLevel = S(t, !0)),
          this.setSelectionDefaults();
      }
      componentWillLoad() {
        M(this);
      }
      componentDidLoad() {
        P(this);
      }
      componentDidRender() {
        D(this, "managed");
      }
      async setFocus() {
        await F(this);
        const {
            containerEl: t,
            contentEl: e,
            actionsStartEl: n,
            actionsEndEl: o,
            parentListEl: c,
          } = this,
          s = b.get(c);
        if (typeof s != "number") t == null || t.focus();
        else {
          const l = [n, e, o].filter(Boolean);
          l[s] ? this.focusCell(l[s]) : t == null || t.focus();
        }
      }
      renderSelected() {
        const { selected: t, selectionMode: e, selectionAppearance: n } = this;
        return e === "none" || n === "border"
          ? null
          : i(
              "td",
              {
                class: a.selectionContainer,
                key: "selection-container",
                onClick: this.itemClicked,
              },
              i("calcite-icon", {
                icon: t
                  ? e === "multiple"
                    ? p.selectedMultiple
                    : p.selectedSingle
                  : p.unselected,
                scale: "s",
              })
            );
      }
      renderOpen() {
        const { el: t, open: e, openable: n, parentListEl: o } = this,
          c = I(t);
        return n
          ? i(
              "td",
              {
                class: a.openContainer,
                key: "open-container",
                onClick: this.toggleOpen,
              },
              i("calcite-icon", {
                icon: e ? p.open : c === "rtl" ? p.closedRTL : p.closedLTR,
                scale: "s",
              })
            )
          : o != null && o.openable
          ? i(
              "td",
              {
                class: a.openContainer,
                key: "open-container",
                onClick: this.itemClicked,
              },
              i("calcite-icon", { icon: p.blank, scale: "s" })
            )
          : null;
      }
      renderActionsStart() {
        const { label: t, hasActionsStart: e } = this;
        return i(
          "td",
          {
            "aria-label": t,
            class: a.actionsStart,
            hidden: !e,
            key: "actions-start-container",
            ref: (n) => (this.actionsStartEl = n),
            role: "gridcell",
          },
          i("slot", {
            name: C.actionsStart,
            onSlotchange: this.handleActionsStartSlotChange,
          })
        );
      }
      renderActionsEnd() {
        const { label: t, hasActionsEnd: e } = this;
        return i(
          "td",
          {
            "aria-label": t,
            class: a.actionsEnd,
            hidden: !e,
            key: "actions-end-container",
            ref: (n) => (this.actionsEndEl = n),
            role: "gridcell",
          },
          i("slot", {
            name: C.actionsEnd,
            onSlotchange: this.handleActionsEndSlotChange,
          })
        );
      }
      renderContentStart() {
        const { hasContentStart: t } = this;
        return i(
          "div",
          { class: a.contentStart, hidden: !t },
          i("slot", {
            name: C.contentStart,
            onSlotchange: this.handleContentStartSlotChange,
          })
        );
      }
      renderCustomContent() {
        const { hasCustomContent: t } = this;
        return i(
          "div",
          { class: a.customContent, hidden: !t },
          i("slot", {
            name: C.content,
            onSlotchange: this.handleContentSlotChange,
          })
        );
      }
      renderContentEnd() {
        const { hasContentEnd: t } = this;
        return i(
          "div",
          { class: a.contentEnd, hidden: !t },
          i("slot", {
            name: C.contentEnd,
            onSlotchange: this.handleContentEndSlotChange,
          })
        );
      }
      renderContentProperties() {
        const { label: t, description: e, hasCustomContent: n } = this;
        return n || (!t && !e)
          ? null
          : i(
              "div",
              { class: a.content, key: "content" },
              t ? i("div", { class: a.label, key: "label" }, t) : null,
              e
                ? i("div", { class: a.description, key: "description" }, e)
                : null
            );
      }
      renderContentContainer() {
        const {
            description: t,
            label: e,
            selectionMode: n,
            hasCustomContent: o,
          } = this,
          c = o || !!e || !!t,
          s = [
            this.renderContentStart(),
            this.renderCustomContent(),
            this.renderContentProperties(),
            this.renderContentEnd(),
          ];
        return i(
          "td",
          {
            "aria-label": e,
            class: {
              [a.contentContainer]: !0,
              [a.contentContainerSelectable]: n !== "none",
              [a.contentContainerHasCenterContent]: c,
            },
            key: "content-container",
            onClick: this.itemClicked,
            ref: (l) => (this.contentEl = l),
            role: "gridcell",
          },
          s
        );
      }
      render() {
        const {
            openable: t,
            open: e,
            level: n,
            setPosition: o,
            setSize: c,
            active: s,
            label: l,
            selected: m,
            selectionAppearance: u,
            selectionMode: r,
          } = this,
          d = r !== "none" && u === "border",
          h = d && m,
          x = d && !m;
        return i(
          L,
          null,
          i(
            "tr",
            {
              "aria-expanded": t ? v(e) : null,
              "aria-label": l,
              "aria-level": n,
              "aria-posinset": o,
              "aria-selected": v(m),
              "aria-setsize": c,
              class: {
                [a.container]: !0,
                [a.containerBorderSelected]: h,
                [a.containerBorderUnselected]: x,
              },
              onFocus: this.focusCellNull,
              onKeyDown: this.handleItemKeyDown,
              ref: (k) => (this.containerEl = k),
              role: "row",
              style: {
                "--calcite-list-item-spacing-indent-multiplier": `${this.visualLevel}`,
              },
              tabIndex: s ? 0 : -1,
            },
            this.renderSelected(),
            this.renderOpen(),
            this.renderActionsStart(),
            this.renderContentContainer(),
            this.renderActionsEnd()
          ),
          i(
            "div",
            {
              class: {
                [a.nestedContainer]: !0,
                [a.nestedContainerHidden]: t && !e,
              },
            },
            i("slot", { onSlotchange: this.handleDefaultSlotChange })
          )
        );
      }
      setSelectionDefaults() {
        const {
          parentListEl: t,
          selectionMode: e,
          selectionAppearance: n,
        } = this;
        t &&
          (e || (this.selectionMode = t.selectionMode),
          n || (this.selectionAppearance = t.selectionAppearance));
      }
      get el() {
        return this;
      }
      static get watchers() {
        return {
          active: ["activeHandler"],
          selected: ["handleSelectedChange"],
        };
      }
      static get style() {
        return "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;flex-direction:column;--calcite-list-item-icon-color:var(--calcite-ui-brand);--calcite-list-item-spacing-indent:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.container *{box-sizing:border-box}.container:hover{cursor:pointer;background-color:var(--calcite-ui-foreground-2)}.container--border-selected{border-inline-start:4px solid var(--calcite-ui-brand)}.container--border-unselected{border-inline-start:4px solid transparent}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{z-index:300;outline:2px solid var(--calcite-ui-brand)}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;color:var(--calcite-ui-text-3)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;color:var(--calcite-list-item-icon-color)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.open-container{display:flex;align-items:center}.open-container,.selection-container{cursor:pointer}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-end ::slotted(calcite-action){align-self:stretch;color:inherit}::slotted(calcite-list-item){border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}[hidden]{display:none}";
      }
    },
    [
      1,
      "calcite-list-item",
      {
        active: [4],
        description: [1],
        disabled: [516],
        label: [1],
        metadata: [16],
        open: [1540],
        setSize: [2, "set-size"],
        setPosition: [2, "set-position"],
        selected: [1540],
        value: [8],
        selectionMode: [1025, "selection-mode"],
        selectionAppearance: [1025, "selection-appearance"],
        level: [32],
        visualLevel: [32],
        parentListEl: [32],
        openable: [32],
        hasActionsStart: [32],
        hasActionsEnd: [32],
        hasCustomContent: [32],
        hasContentStart: [32],
        hasContentEnd: [32],
        setFocus: [64],
      },
    ]
  );
function E() {
  typeof customElements > "u" ||
    ["calcite-list-item", "calcite-icon"].forEach((t) => {
      switch (t) {
        case "calcite-list-item":
          customElements.get(t) || customElements.define(t, y);
          break;
        case "calcite-icon":
          customElements.get(t) || B();
      }
    });
}
E();
const Q = y,
  V = E;
export { Q as CalciteListItem, V as defineCustomElement };
