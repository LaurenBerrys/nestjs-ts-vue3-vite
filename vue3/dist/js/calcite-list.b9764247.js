import {
  hv as dt,
  he as o,
  hp as Ot,
  hc as I,
  hd as z,
  hl as g,
  hS as B,
  hr as Ht,
  hR as U,
  hZ as q,
  ht as _t,
  h_ as Nt,
  hq as Pt,
  hs as Tt,
  hm as Mt,
} from "./index.8fd7165c.js";
import { u as j } from "./interactive.b07f4543.js";
import { c as ht } from "./observers.139d1c5a.js";
import { u as Kt, g as Rt, M as Bt } from "./utils3.eeba64ea.js";
import { s as O, a as H, c as _ } from "./loadable.8abf7253.js";
import {
  S as W,
  i as N,
  r as Ut,
  b as P,
  f as qt,
  a as Wt,
  c as mt,
  d as V,
} from "./debounce.46964e49.js";
import {
  n as f,
  e as v,
  p as $t,
  f as Gt,
  g as Zt,
  u as pt,
  c as bt,
  a as ft,
  d as vt,
  b as gt,
  s as yt,
  h as Jt,
} from "./t9n.ff8d2507.js";
import { d as T } from "./icon.7c938131.js";
import { d as Qt } from "./loader.e5641e3b.js";
import { d as Xt } from "./scrim.06304fb4.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./guid.416070ad.js";
var xt = Array.isArray,
  Yt = 1 / 0,
  $ = W ? W.prototype : void 0,
  G = $ ? $.toString : void 0;
function wt(t) {
  if (typeof t == "string") return t;
  if (xt(t))
    return (
      (function (i, n) {
        for (var a = -1, s = i == null ? 0 : i.length, r = Array(s); ++a < s; )
          r[a] = n(i[a], a, i);
        return r;
      })(t, wt) + ""
    );
  if (Wt(t)) return G ? G.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Yt ? "-0" : e;
}
function te(t) {
  return t;
}
var ee = "[object AsyncFunction]",
  ie = "[object Function]",
  ae = "[object GeneratorFunction]",
  ne = "[object Proxy]",
  se = 9007199254740991,
  re = /^(?:0|[1-9]\d*)$/;
function le(t, e) {
  var i = typeof t;
  return (
    !!(e = e ?? se) &&
    (i == "number" || (i != "symbol" && re.test(t))) &&
    t > -1 &&
    t % 1 == 0 &&
    t < e
  );
}
var oe = 9007199254740991;
function kt(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= oe;
}
function ce(t) {
  return (
    t != null &&
    kt(t.length) &&
    !(function (e) {
      if (!mt(e)) return !1;
      var i = P(e);
      return i == ie || i == ae || i == ee || i == ne;
    })(t)
  );
}
var ue = Object.prototype,
  de = "[object Arguments]";
function Z(t) {
  return N(t) && P(t) == de;
}
var Et = Object.prototype,
  he = Et.hasOwnProperty,
  me = Et.propertyIsEnumerable,
  pe = Z(
    (function () {
      return arguments;
    })()
  )
    ? Z
    : function (t) {
        return N(t) && he.call(t, "callee") && !me.call(t, "callee");
      },
  It = typeof exports == "object" && exports && !exports.nodeType && exports,
  J = It && typeof module == "object" && module && !module.nodeType && module,
  Q = J && J.exports === It ? Ut.Buffer : void 0,
  be =
    (Q ? Q.isBuffer : void 0) ||
    function () {
      return !1;
    },
  d = {};
(d["[object Float32Array]"] =
  d["[object Float64Array]"] =
  d["[object Int8Array]"] =
  d["[object Int16Array]"] =
  d["[object Int32Array]"] =
  d["[object Uint8Array]"] =
  d["[object Uint8ClampedArray]"] =
  d["[object Uint16Array]"] =
  d["[object Uint32Array]"] =
    !0),
  (d["[object Arguments]"] =
    d["[object Array]"] =
    d["[object ArrayBuffer]"] =
    d["[object Boolean]"] =
    d["[object DataView]"] =
    d["[object Date]"] =
    d["[object Error]"] =
    d["[object Function]"] =
    d["[object Map]"] =
    d["[object Number]"] =
    d["[object Object]"] =
    d["[object RegExp]"] =
    d["[object Set]"] =
    d["[object String]"] =
    d["[object WeakMap]"] =
      !1);
var X,
  zt = typeof exports == "object" && exports && !exports.nodeType && exports,
  x = zt && typeof module == "object" && module && !module.nodeType && module,
  D = x && x.exports === zt && qt.process,
  Y = (function () {
    try {
      var t = x && x.require && x.require("util").types;
      return t || (D && D.binding && D.binding("util"));
    } catch {}
  })(),
  tt = Y && Y.isTypedArray,
  fe = tt
    ? ((X = tt),
      function (t) {
        return X(t);
      })
    : function (t) {
        return N(t) && kt(t.length) && !!d[P(t)];
      },
  ve = Object.prototype.hasOwnProperty;
function ge(t, e) {
  var i = xt(t),
    n = !i && pe(t),
    a = !i && !n && be(t),
    s = !i && !n && !a && fe(t),
    r = i || n || a || s,
    l = r
      ? (function (h, m) {
          for (var p = -1, b = Array(h); ++p < h; ) b[p] = m(p);
          return b;
        })(t.length, String)
      : [],
    c = l.length;
  for (var u in t)
    (!e && !ve.call(t, u)) ||
      (r &&
        (u == "length" ||
          (a && (u == "offset" || u == "parent")) ||
          (s && (u == "buffer" || u == "byteLength" || u == "byteOffset")) ||
          le(u, c))) ||
      l.push(u);
  return l;
}
var ye = Object.prototype.hasOwnProperty;
function xe(t) {
  if (!mt(t))
    return (function (r) {
      var l = [];
      if (r != null) for (var c in Object(r)) l.push(c);
      return l;
    })(t);
  var e,
    i,
    n =
      ((i = (e = t) && e.constructor),
      e === ((typeof i == "function" && i.prototype) || ue)),
    a = [];
  for (var s in t) (s != "constructor" || (!n && ye.call(t, s))) && a.push(s);
  return a;
}
function we(t) {
  return ce(t) ? ge(t, !0) : xe(t);
}
var ke,
  Ee = function (t, e, i) {
    for (var n = -1, a = Object(t), s = i(t), r = s.length; r--; ) {
      var l = s[ke ? r : ++n];
      if (e(a[l], l, a) === !1) break;
    }
    return t;
  },
  Lt = /[\\^$.*+?()[\]{}|]/g,
  Ie = RegExp(Lt.source);
function ze(t) {
  var e;
  return (t = (e = t) == null ? "" : wt(e)) && Ie.test(t)
    ? t.replace(Lt, "\\$&")
    : t;
}
function Le(t, e) {
  return t == null ? t : Ee(t, typeof (i = e) == "function" ? i : te, we);
  var i;
}
const et = (t, e) => {
    const i = ze(e),
      n = new RegExp(i, "i");
    t.length;
    const a = (s, r) => {
      if ((s != null && s.constant) || (s != null && s.filterDisabled))
        return !0;
      let l = !1;
      return (
        Le(s, (c) => {
          typeof c != "function" &&
            c != null &&
            (Array.isArray(c) || (typeof c == "object" && c !== null)
              ? a(c, r) && (l = !0)
              : r.test(c) && (l = !0));
        }),
        l
      );
    };
    return t.filter((s) => a(s, n));
  },
  C = "hidden-form-input";
function M(t) {
  return "checked" in t;
}
const F = new WeakMap(),
  A = new WeakSet();
function De(t) {
  const { el: e, value: i } = t,
    n = dt(e, "form");
  if (
    !n ||
    (function (s, r) {
      const l = "calciteInternalFormComponentRegister";
      let c = !1;
      return (
        s.addEventListener(
          l,
          (u) => {
            (c = u.composedPath().some((h) => A.has(h))), u.stopPropagation();
          },
          { once: !0 }
        ),
        r.dispatchEvent(new CustomEvent(l, { bubbles: !0, composed: !0 })),
        c
      );
    })(n, e)
  )
    return;
  (t.formEl = n), (t.defaultValue = i), M(t) && (t.defaultChecked = t.checked);
  const a = (t.onFormReset || Ce).bind(t);
  n.addEventListener("reset", a), F.set(t.el, a), A.add(e);
}
function Ce() {
  M(this)
    ? (this.checked = this.defaultChecked)
    : (this.value = this.defaultValue);
}
const Dt = (t) => {
    t.target.dispatchEvent(
      new CustomEvent("calciteInternalHiddenInputChange", { bubbles: !0 })
    );
  },
  it = (t) => t.removeEventListener("change", Dt);
function at(t, e, i) {
  var l;
  const { defaultValue: n, disabled: a, name: s, required: r } = t;
  (e.defaultValue = n),
    (e.disabled = a),
    (e.name = s),
    (e.required = r),
    (e.tabIndex = -1),
    M(t)
      ? ((e.checked = t.checked),
        (e.defaultChecked = t.defaultChecked),
        (e.value = t.checked ? i || "on" : ""))
      : (e.value = i || ""),
    (l = t.syncHiddenFormInput) == null || l.call(t, e);
}
const Ve = ({ component: t }) => (
    (function (e) {
      const { el: i, formEl: n, name: a, value: s } = e,
        { ownerDocument: r } = i,
        l = i.querySelectorAll(`input[slot="${C}"]`);
      if (!n || !a)
        return void l.forEach((p) => {
          it(p), p.remove();
        });
      const c = Array.isArray(s) ? s : [s],
        u = [],
        h = new Set();
      let m;
      l.forEach((p) => {
        const b = c.find((jt) => jt == p.value);
        b != null ? (h.add(b), at(e, p, b)) : u.push(p);
      }),
        c.forEach((p) => {
          if (h.has(p)) return;
          let b = u.pop();
          b || ((b = r.createElement("input")), (b.slot = C)),
            m || (m = r.createDocumentFragment()),
            m.append(b),
            b.addEventListener("change", Dt),
            at(e, b, p);
        }),
        m && i.append(m),
        u.forEach((p) => {
          it(p), p.remove();
        });
    })(t),
    o("slot", { name: C })
  ),
  Ct = "calciteInternalLabelClick",
  K = "calciteInternalLabelConnected",
  S = "calciteInternaLabelDisconnected",
  nt = "calcite-label",
  k = new WeakMap(),
  w = new WeakMap(),
  E = new WeakMap(),
  y = new Set(),
  Fe = (t) => {
    const { id: e } = t,
      i = e && Ot(t, { selector: `${nt}[for="${e}"]` });
    if (i) return i;
    const n = dt(t, nt);
    return !n ||
      (function (a, s) {
        let r;
        const l = "custom-element-ancestor-check",
          c = (h) => {
            h.stopImmediatePropagation();
            const m = h.composedPath();
            r = m.slice(m.indexOf(s), m.indexOf(a));
          };
        return (
          a.addEventListener(l, c, { once: !0 }),
          s.dispatchEvent(new CustomEvent(l, { composed: !0, bubbles: !0 })),
          a.removeEventListener(l, c),
          r
            .filter((h) => h !== s && h !== a)
            .filter((h) => {
              var m;
              return (m = h.tagName) == null ? void 0 : m.includes("-");
            }).length > 0
        );
      })(n, t)
      ? null
      : n;
  };
function Vt(t) {
  const e = Fe(t.el);
  if (k.has(e) || (!e && y.has(t))) return;
  const i = je.bind(t);
  if (e) {
    t.labelEl = e;
    const n = Ae.bind(t);
    k.set(t.labelEl, n),
      t.labelEl.addEventListener(Ct, n),
      y.delete(t),
      document.removeEventListener(K, w.get(t)),
      E.set(t, i),
      document.addEventListener(S, i);
  } else y.has(t) || (i(), document.removeEventListener(S, E.get(t)));
}
function st(t) {
  var e, i;
  return (
    t.label ||
    ((i = (e = t.labelEl) == null ? void 0 : e.textContent) == null
      ? void 0
      : i.trim()) ||
    ""
  );
}
function Ae(t) {
  this.disabled ||
    this.el.contains(t.detail.sourceEvent.target) ||
    this.onLabelClick(t);
}
function Se() {
  y.has(this) && Vt(this);
}
function je() {
  y.add(this);
  const t = w.get(this) || Se.bind(this);
  w.set(this, t), document.addEventListener(K, t);
}
const rt = (t) => {
    const e = ("" + t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return e ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0;
  },
  Oe = I(
    class extends z {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.type = "determinate"),
          (this.value = 0),
          (this.label = void 0),
          (this.text = void 0),
          (this.reversed = !1);
      }
      render() {
        const t =
          this.type === "determinate" ? { width: 100 * this.value + "%" } : {};
        return o(
          "div",
          {
            "aria-label": this.label || this.text,
            "aria-valuemax": 1,
            "aria-valuemin": 0,
            "aria-valuenow": this.value,
            role: "progressbar",
          },
          o(
            "div",
            { class: "track" },
            o("div", {
              class: {
                bar: !0,
                indeterminate: this.type === "indeterminate",
                reversed: this.reversed,
              },
              style: t,
            })
          ),
          this.text ? o("div", { class: "text" }, this.text) : null
        );
      }
      get el() {
        return this;
      }
      static get style() {
        return "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:1;inline-size:100%;overflow:hidden;background:var(--calcite-ui-border-3)}.bar{z-index:1;background-color:var(--calcite-ui-brand)}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) * 11) linear infinite}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(600%, 0, 0)}}";
      }
    },
    [
      1,
      "calcite-progress",
      { type: [513], value: [2], label: [1], text: [1], reversed: [516] },
    ]
  );
function L() {
  typeof customElements > "u" ||
    ["calcite-progress"].forEach((t) => {
      t === "calcite-progress" &&
        (customElements.get(t) || customElements.define(t, Oe));
    });
}
L();
const He = "loader",
  _e = "clear-button",
  Ne = "editing-enabled",
  Pe = "inline-child",
  Te = "icon",
  Me = "prefix",
  Ke = "suffix",
  Re = "number-button-wrapper",
  lt = "number-button-item--horizontal",
  Be = "element-wrapper",
  Ue = "wrapper",
  qe = "action-wrapper",
  We = "resize-icon-wrapper",
  ot = "number-button-item",
  ct = {
    tel: "phone",
    password: "lock",
    email: "email-address",
    date: "calendar",
    time: "clock",
    search: "search",
  },
  $e = "action",
  Ge = I(
    class extends z {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.calciteInternalInputFocus = g(
            this,
            "calciteInternalInputFocus",
            6
          )),
          (this.calciteInternalInputBlur = g(
            this,
            "calciteInternalInputBlur",
            6
          )),
          (this.calciteInputInput = g(this, "calciteInputInput", 7)),
          (this.calciteInputChange = g(this, "calciteInputChange", 6)),
          (this.childElType = "input"),
          (this.previousValueOrigin = "initial"),
          (this.mutationObserver = ht("mutation", () =>
            this.setDisabledAction()
          )),
          (this.userChangedValue = !1),
          (this.keyDownHandler = (t) => {
            this.readOnly ||
              this.disabled ||
              (this.isClearable &&
                t.key === "Escape" &&
                (this.clearInputValue(t), t.preventDefault()),
              t.key !== "Enter" ||
                t.defaultPrevented ||
                ((function (e) {
                  const { formEl: i } = e;
                  return (
                    !!i &&
                    ("requestSubmit" in i ? i.requestSubmit() : i.submit(), !0)
                  );
                })(this) &&
                  t.preventDefault()));
          }),
          (this.clearInputValue = (t) => {
            this.setValue({
              committing: !0,
              nativeEvent: t,
              origin: "user",
              value: "",
            });
          }),
          (this.emitChangeIfUserModified = () => {
            this.previousValueOrigin === "user" &&
              this.value !== this.previousEmittedValue &&
              (this.calciteInputChange.emit(),
              this.setPreviousEmittedValue(this.value));
          }),
          (this.inputBlurHandler = () => {
            this.calciteInternalInputBlur.emit(),
              this.emitChangeIfUserModified();
          }),
          (this.clickHandler = (t) => {
            const e = B(this.el, "action");
            t.target !== e && this.setFocus();
          }),
          (this.inputFocusHandler = () => {
            this.calciteInternalInputFocus.emit();
          }),
          (this.inputInputHandler = (t) => {
            this.disabled ||
              this.readOnly ||
              this.setValue({
                nativeEvent: t,
                origin: "user",
                value: t.target.value,
              });
          }),
          (this.inputKeyDownHandler = (t) => {
            this.disabled ||
              this.readOnly ||
              (t.key === "Enter" && this.emitChangeIfUserModified());
          }),
          (this.inputNumberInputHandler = (t) => {
            if (this.disabled || this.readOnly) return;
            const e = t.target.value;
            f.numberFormatOptions = {
              locale: this.effectiveLocale,
              numberingSystem: this.numberingSystem,
              useGrouping: this.groupSeparator,
            };
            const i = f.delocalize(e);
            t.inputType === "insertFromPaste"
              ? (v(i) || t.preventDefault(),
                this.setValue({ nativeEvent: t, origin: "user", value: $t(i) }),
                (this.childNumberEl.value = this.localizedValue))
              : this.setValue({ nativeEvent: t, origin: "user", value: i });
          }),
          (this.inputNumberKeyDownHandler = (t) => {
            if (this.type !== "number" || this.disabled || this.readOnly)
              return;
            if (t.key === "ArrowUp")
              return t.preventDefault(), void this.nudgeNumberValue("up", t);
            if (t.key === "ArrowDown")
              return void this.nudgeNumberValue("down", t);
            const e = [
              ...Jt,
              "ArrowLeft",
              "ArrowRight",
              "Backspace",
              "Delete",
              "Enter",
              "Escape",
              "Tab",
            ];
            if (t.altKey || t.ctrlKey || t.metaKey) return;
            const i = t.shiftKey && t.key === "Tab";
            if (!e.includes(t.key) || (t.shiftKey && !i)) {
              if (
                ((f.numberFormatOptions = {
                  locale: this.effectiveLocale,
                  numberingSystem: this.numberingSystem,
                  useGrouping: this.groupSeparator,
                }),
                (t.key === f.decimal &&
                  ((!this.value && !this.childNumberEl.value) ||
                    (this.value &&
                      this.childNumberEl.value.indexOf(f.decimal) === -1))) ||
                  (/[eE]/.test(t.key) &&
                    ((!this.value && !this.childNumberEl.value) ||
                      (this.value &&
                        !/[eE]/.test(this.childNumberEl.value)))) ||
                  (t.key === "-" &&
                    ((!this.value && !this.childNumberEl.value) ||
                      (this.value &&
                        this.childNumberEl.value.split("-").length <= 2))))
              )
                return;
              t.preventDefault();
            } else t.key === "Enter" && this.emitChangeIfUserModified();
          }),
          (this.nudgeNumberValue = (t, e) => {
            if (
              (e instanceof KeyboardEvent && e.repeat) ||
              this.type !== "number"
            )
              return;
            const i = this.maxString ? parseFloat(this.maxString) : null,
              n = this.minString ? parseFloat(this.minString) : null;
            this.incrementOrDecrementNumberValue(t, i, n, e),
              this.nudgeNumberValueIntervalId &&
                window.clearInterval(this.nudgeNumberValueIntervalId);
            let a = !0;
            this.nudgeNumberValueIntervalId = window.setInterval(() => {
              a ? (a = !1) : this.incrementOrDecrementNumberValue(t, i, n, e);
            }, 150);
          }),
          (this.numberButtonPointerUpAndOutHandler = () => {
            window.clearInterval(this.nudgeNumberValueIntervalId);
          }),
          (this.numberButtonPointerDownHandler = (t) => {
            if (!Ht(t)) return;
            t.preventDefault();
            const e = t.target.dataset.adjustment;
            this.disabled || this.nudgeNumberValue(e, t);
          }),
          (this.hiddenInputChangeHandler = (t) => {
            t.target.name === this.name &&
              this.setValue({ value: t.target.value, origin: "direct" }),
              t.stopPropagation();
          }),
          (this.setChildElRef = (t) => {
            this.childEl = t;
          }),
          (this.setChildNumberElRef = (t) => {
            this.childNumberEl = t;
          }),
          (this.setInputValue = (t) => {
            (this.type !== "text" || this.childEl) &&
              (this.type !== "number" || this.childNumberEl) &&
              (this[`child${this.type === "number" ? "Number" : ""}El`].value =
                t);
          }),
          (this.setPreviousEmittedValue = (t) => {
            this.previousEmittedValue = this.normalizeValue(t);
          }),
          (this.setPreviousValue = (t) => {
            this.previousValue = this.normalizeValue(t);
          }),
          (this.setValue = ({
            committing: t = !1,
            nativeEvent: e,
            origin: i,
            previousValue: n,
            value: a,
          }) => {
            if (
              (this.setPreviousValue(n ?? this.value),
              (this.previousValueOrigin = i),
              this.type === "number")
            ) {
              f.numberFormatOptions = {
                locale: this.effectiveLocale,
                numberingSystem: this.numberingSystem,
                useGrouping: this.groupSeparator,
                signDisplay: "never",
              };
              const s = Gt(
                  (this.numberingSystem && this.numberingSystem !== "latn") ||
                    Zt !== "latn"
                    ? f.delocalize(a)
                    : a
                ),
                r =
                  a && !s
                    ? v(this.previousValue)
                      ? this.previousValue
                      : ""
                    : s,
                l = f.localize(r);
              (this.localizedValue = l),
                (this.userChangedValue = i === "user" && this.value !== r),
                (this.value = ["-", "."].includes(r) ? "" : r);
            } else
              (this.userChangedValue = i === "user" && this.value !== a),
                (this.value = a);
            i === "direct" &&
              (this.setInputValue(a), (this.previousEmittedValue = a)),
              e &&
                (this.calciteInputInput.emit().defaultPrevented
                  ? ((this.value = this.previousValue),
                    (this.localizedValue =
                      this.type === "number"
                        ? f.localize(this.previousValue)
                        : this.previousValue))
                  : t && this.emitChangeIfUserModified());
          }),
          (this.inputKeyUpHandler = () => {
            window.clearInterval(this.nudgeNumberValueIntervalId);
          }),
          (this.alignment = "start"),
          (this.autofocus = !1),
          (this.clearable = !1),
          (this.disabled = !1),
          (this.groupSeparator = !1),
          (this.hidden = !1),
          (this.icon = void 0),
          (this.iconFlipRtl = !1),
          (this.label = void 0),
          (this.loading = !1),
          (this.numberingSystem = void 0),
          (this.localeFormat = !1),
          (this.max = void 0),
          (this.min = void 0),
          (this.maxLength = void 0),
          (this.minLength = void 0),
          (this.name = void 0),
          (this.numberButtonType = "vertical"),
          (this.placeholder = void 0),
          (this.prefixText = void 0),
          (this.readOnly = !1),
          (this.required = !1),
          (this.scale = "m"),
          (this.status = "idle"),
          (this.step = void 0),
          (this.autocomplete = void 0),
          (this.pattern = void 0),
          (this.accept = void 0),
          (this.multiple = !1),
          (this.inputMode = "text"),
          (this.enterKeyHint = void 0),
          (this.suffixText = void 0),
          (this.editingEnabled = !1),
          (this.type = "text"),
          (this.value = ""),
          (this.messages = void 0),
          (this.messageOverrides = void 0),
          (this.effectiveLocale = ""),
          (this.defaultMessages = void 0),
          (this.localizedValue = void 0),
          (this.slottedActionElDisabledInternally = !1);
      }
      disabledWatcher() {
        this.setDisabledAction();
      }
      maxWatcher() {
        var t;
        this.maxString =
          ((t = this.max) == null ? void 0 : t.toString()) || null;
      }
      minWatcher() {
        var t;
        this.minString =
          ((t = this.min) == null ? void 0 : t.toString()) || null;
      }
      onMessagesChange() {}
      valueWatcher(t, e) {
        this.userChangedValue ||
          (this.setValue({
            origin: "direct",
            previousValue: e,
            value:
              t == null || t == ""
                ? ""
                : this.type === "number"
                ? v(t)
                  ? t
                  : this.previousValue || ""
                : t,
          }),
          this.warnAboutInvalidNumberValue(t)),
          (this.userChangedValue = !1);
      }
      updateRequestedIcon() {
        this.requestedIcon = U(ct, this.icon, this.type);
      }
      get isClearable() {
        return (
          !this.isTextarea &&
          (this.clearable || this.type === "search") &&
          this.value.length > 0
        );
      }
      get isTextarea() {
        return this.childElType === "textarea";
      }
      effectiveLocaleChange() {
        pt(this, this.effectiveLocale);
      }
      connectedCallback() {
        var t;
        bt(this),
          ft(this),
          (this.scale = q(this.el, "scale", this.scale)),
          (this.status = q(this.el, "status", this.status)),
          (this.inlineEditableEl = this.el.closest("calcite-inline-editable")),
          this.inlineEditableEl &&
            (this.editingEnabled = this.inlineEditableEl.editingEnabled || !1),
          Vt(this),
          De(this),
          this.setPreviousEmittedValue(this.value),
          this.setPreviousValue(this.value),
          this.type === "number" &&
            (this.warnAboutInvalidNumberValue(this.value),
            this.setValue({
              origin: "connected",
              value: v(this.value) ? this.value : "",
            })),
          (t = this.mutationObserver) == null ||
            t.observe(this.el, { childList: !0 }),
          this.setDisabledAction(),
          this.el.addEventListener(
            "calciteInternalHiddenInputChange",
            this.hiddenInputChangeHandler
          );
      }
      disconnectedCallback() {
        var t;
        (function (e) {
          if (
            (y.delete(e),
            document.removeEventListener(K, w.get(e)),
            document.removeEventListener(S, E.get(e)),
            w.delete(e),
            E.delete(e),
            !e.labelEl)
          )
            return;
          const i = k.get(e.labelEl);
          e.labelEl.removeEventListener(Ct, i), k.delete(e.labelEl);
        })(this),
          (function (e) {
            const { el: i, formEl: n } = e;
            if (!n) return;
            const a = F.get(i);
            n.removeEventListener("reset", a),
              F.delete(i),
              (e.formEl = null),
              A.delete(i);
          })(this),
          vt(this),
          gt(this),
          (t = this.mutationObserver) == null || t.disconnect(),
          this.el.removeEventListener(
            "calciteInternalHiddenInputChange",
            this.hiddenInputChangeHandler
          );
      }
      async componentWillLoad() {
        var t, e;
        O(this),
          (this.childElType = this.type === "textarea" ? "textarea" : "input"),
          (this.maxString = (t = this.max) == null ? void 0 : t.toString()),
          (this.minString = (e = this.min) == null ? void 0 : e.toString()),
          (this.requestedIcon = U(ct, this.icon, this.type)),
          await yt(this);
      }
      componentDidLoad() {
        H(this);
      }
      componentShouldUpdate(t, e, i) {
        return (
          !(this.type === "number" && i === "value" && t && !v(t)) ||
          (this.setValue({ origin: "reset", value: e }), !1)
        );
      }
      componentDidRender() {
        j(this);
      }
      async setFocus() {
        var t, e;
        await _(this),
          this.type === "number"
            ? (t = this.childNumberEl) == null || t.focus()
            : (e = this.childEl) == null || e.focus();
      }
      async selectText() {
        var t, e;
        this.type === "number"
          ? (t = this.childNumberEl) == null || t.select()
          : (e = this.childEl) == null || e.select();
      }
      async internalSyncChildElValue() {
        this.type === "number"
          ? (this.childNumberEl.value = this.value)
          : (this.childEl.value = this.value);
      }
      onLabelClick() {
        this.setFocus();
      }
      incrementOrDecrementNumberValue(t, e, i, n) {
        const { value: a } = this,
          s = this.step === "any" ? 1 : Math.abs(this.step || 1),
          r = a && a !== "" ? parseFloat(a) : 0,
          l = r + s * (t === "up" ? 1 : -1),
          c =
            typeof i == "number" && !isNaN(i) && l < i
              ? i
              : typeof e == "number" && !isNaN(e) && l > e
              ? e
              : l,
          u = rt(r),
          h = rt(s);
        this.setValue({
          committing: !0,
          nativeEvent: n,
          origin: "user",
          value: c.toFixed(Math.max(u, h)),
        });
      }
      onFormReset() {
        this.setValue({ origin: "reset", value: this.defaultValue });
      }
      syncHiddenFormInput(t) {
        var i, n;
        const { type: e } = this;
        (t.type = e),
          e === "number"
            ? ((t.min =
                ((i = this.min) == null ? void 0 : i.toString(10)) ?? ""),
              (t.max =
                ((n = this.max) == null ? void 0 : n.toString(10)) ?? ""))
            : e === "text" &&
              (this.minLength != null && (t.minLength = this.minLength),
              this.maxLength != null && (t.maxLength = this.maxLength));
      }
      setDisabledAction() {
        const t = B(this.el, "action");
        t &&
          (this.disabled
            ? (t.getAttribute("disabled") == null &&
                (this.slottedActionElDisabledInternally = !0),
              t.setAttribute("disabled", ""))
            : this.slottedActionElDisabledInternally &&
              (t.removeAttribute("disabled"),
              (this.slottedActionElDisabledInternally = !1)));
      }
      normalizeValue(t) {
        return this.type === "number" ? (v(t) ? t : "") : t;
      }
      warnAboutInvalidNumberValue(t) {
        this.type === "number" && t && v(t);
      }
      render() {
        const t = _t(this.el),
          e = o(
            "div",
            { class: He },
            o("calcite-progress", {
              label: this.messages.loading,
              type: "indeterminate",
            })
          ),
          i = o(
            "button",
            {
              "aria-label": this.messages.clear,
              class: _e,
              disabled: this.disabled || this.readOnly,
              onClick: this.clearInputValue,
              tabIndex: -1,
              type: "button",
            },
            o("calcite-icon", {
              icon: "x",
              scale: this.scale === "l" ? "m" : "s",
            })
          ),
          n = o("calcite-icon", {
            class: Te,
            flipRtl: this.iconFlipRtl,
            icon: this.requestedIcon,
            scale: this.scale === "l" ? "m" : "s",
          }),
          a = this.numberButtonType === "horizontal",
          s = o(
            "button",
            {
              "aria-hidden": "true",
              class: { [ot]: !0, [lt]: a },
              "data-adjustment": "up",
              disabled: this.disabled || this.readOnly,
              onPointerDown: this.numberButtonPointerDownHandler,
              onPointerOut: this.numberButtonPointerUpAndOutHandler,
              onPointerUp: this.numberButtonPointerUpAndOutHandler,
              tabIndex: -1,
              type: "button",
            },
            o("calcite-icon", {
              icon: "chevron-up",
              scale: this.scale === "l" ? "m" : "s",
            })
          ),
          r = o(
            "button",
            {
              "aria-hidden": "true",
              class: { [ot]: !0, [lt]: a },
              "data-adjustment": "down",
              disabled: this.disabled || this.readOnly,
              onPointerDown: this.numberButtonPointerDownHandler,
              onPointerOut: this.numberButtonPointerUpAndOutHandler,
              onPointerUp: this.numberButtonPointerUpAndOutHandler,
              tabIndex: -1,
              type: "button",
            },
            o("calcite-icon", {
              icon: "chevron-down",
              scale: this.scale === "l" ? "m" : "s",
            })
          ),
          l = o("div", { class: Re }, s, r),
          c = o("div", { class: Me }, this.prefixText),
          u = o("div", { class: Ke }, this.suffixText),
          h =
            this.type === "number"
              ? o("input", {
                  accept: this.accept,
                  "aria-label": st(this),
                  autocomplete: this.autocomplete,
                  autofocus: !!this.autofocus || null,
                  defaultValue: this.defaultValue,
                  disabled: !!this.disabled || null,
                  enterKeyHint: this.enterKeyHint,
                  inputMode: this.inputMode,
                  key: "localized-input",
                  maxLength: this.maxLength,
                  minLength: this.minLength,
                  multiple: this.multiple,
                  name: void 0,
                  onBlur: this.inputBlurHandler,
                  onFocus: this.inputFocusHandler,
                  onInput: this.inputNumberInputHandler,
                  onKeyDown: this.inputNumberKeyDownHandler,
                  onKeyUp: this.inputKeyUpHandler,
                  pattern: this.pattern,
                  placeholder: this.placeholder || "",
                  readOnly: this.readOnly,
                  ref: this.setChildNumberElRef,
                  type: "text",
                  value: this.localizedValue,
                })
              : null,
          m =
            this.type !== "number"
              ? [
                  o(this.childElType, {
                    accept: this.accept,
                    "aria-label": st(this),
                    autocomplete: this.autocomplete,
                    autofocus: !!this.autofocus || null,
                    class: {
                      [Ne]: this.editingEnabled,
                      [Pe]: !!this.inlineEditableEl,
                    },
                    defaultValue: this.defaultValue,
                    disabled: !!this.disabled || null,
                    enterKeyHint: this.enterKeyHint,
                    inputMode: this.inputMode,
                    max: this.maxString,
                    maxLength: this.maxLength,
                    min: this.minString,
                    minLength: this.minLength,
                    multiple: this.multiple,
                    name: this.name,
                    onBlur: this.inputBlurHandler,
                    onFocus: this.inputFocusHandler,
                    onInput: this.inputInputHandler,
                    onKeyDown: this.inputKeyDownHandler,
                    onKeyUp: this.inputKeyUpHandler,
                    pattern: this.pattern,
                    placeholder: this.placeholder || "",
                    readOnly: this.readOnly,
                    ref: this.setChildElRef,
                    required: !!this.required || null,
                    step: this.step,
                    tabIndex:
                      this.disabled ||
                      (this.inlineEditableEl && !this.editingEnabled)
                        ? -1
                        : null,
                    type: this.type,
                    value: this.value,
                  }),
                  this.isTextarea
                    ? o(
                        "div",
                        { class: We },
                        o("calcite-icon", {
                          icon: "chevron-down",
                          scale: this.scale === "l" ? "m" : "s",
                        })
                      )
                    : null,
                ]
              : null;
        return o(
          Pt,
          { onClick: this.clickHandler, onKeyDown: this.keyDownHandler },
          o(
            "div",
            { class: { [Ue]: !0, [Nt.rtl]: t === "rtl" } },
            this.type !== "number" ||
              this.numberButtonType !== "horizontal" ||
              this.readOnly
              ? null
              : r,
            this.prefixText ? c : null,
            o(
              "div",
              { class: Be },
              h,
              m,
              this.isClearable ? i : null,
              this.requestedIcon ? n : null,
              this.loading ? e : null
            ),
            o("div", { class: qe }, o("slot", { name: $e })),
            this.type !== "number" ||
              this.numberButtonType !== "vertical" ||
              this.readOnly
              ? null
              : l,
            this.suffixText ? u : null,
            this.type !== "number" ||
              this.numberButtonType !== "horizontal" ||
              this.readOnly
              ? null
              : s,
            o(Ve, { component: this })
          )
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
          disabled: ["disabledWatcher"],
          max: ["maxWatcher"],
          min: ["minWatcher"],
          messageOverrides: ["onMessagesChange"],
          value: ["valueWatcher"],
          icon: ["updateRequestedIcon"],
          type: ["updateRequestedIcon"],
          effectiveLocale: ["effectiveLocaleChange"],
        };
      }
      static get style() {
        return "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) textarea{block-size:1.5rem;min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) input[type=file]{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) input[type=file]{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) input[type=file]{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host textarea,:host input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}:host input[type=search]::-webkit-search-decoration{-webkit-appearance:none}:host input,:host textarea{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder,:host textarea::placeholder,:host textarea:-ms-input-placeholder,:host textarea::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}:host input:focus,:host textarea:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly],:host textarea[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host input[readonly]:focus,:host textarea[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}:host textarea,:host input{outline-color:transparent}:host textarea:focus,:host input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:-2px}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.icon,.resize-icon-wrapper{z-index:1}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}:host input[type=number]{-moz-appearance:textfield}:host input[type=number]::-webkit-inner-spin-button,:host input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0px}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item:active{background-color:var(--calcite-ui-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host input::-webkit-calendar-picker-indicator{display:none}:host input[type=date]::-webkit-input-placeholder{visibility:hidden !important}:host textarea::-webkit-resizer{position:absolute;inset-block-end:0px;box-sizing:border-box;padding-block:0px;padding-inline:0.25rem;inset-inline-end:0}.resize-icon-wrapper{inset-block-end:2px;inset-inline-end:2px;pointer-events:none;position:absolute;block-size:0.75rem;inline-size:0.75rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3)}.resize-icon-wrapper calcite-icon{inset-block-end:0.25rem;inset-inline-end:0.25rem;transform:rotate(-45deg)}.calcite--rtl .resize-icon-wrapper calcite-icon{transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);text-align:center}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:0.5rem}:host([type=file][scale=m]) input{padding-block:0.25rem;padding-inline:0.75rem}:host([type=file][scale=l]) input{padding-block:0.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}:host .inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host .inline-child .editing-enabled{background-color:inherit}:host .inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";
      }
    },
    [
      1,
      "calcite-input",
      {
        alignment: [513],
        autofocus: [516],
        clearable: [516],
        disabled: [516],
        groupSeparator: [516, "group-separator"],
        hidden: [516],
        icon: [520],
        iconFlipRtl: [516, "icon-flip-rtl"],
        label: [1],
        loading: [516],
        numberingSystem: [513, "numbering-system"],
        localeFormat: [4, "locale-format"],
        max: [514],
        min: [514],
        maxLength: [514, "max-length"],
        minLength: [514, "min-length"],
        name: [513],
        numberButtonType: [513, "number-button-type"],
        placeholder: [1],
        prefixText: [1, "prefix-text"],
        readOnly: [516, "read-only"],
        required: [516],
        scale: [1537],
        status: [1537],
        step: [520],
        autocomplete: [1],
        pattern: [1],
        accept: [1],
        multiple: [4],
        inputMode: [1, "input-mode"],
        enterKeyHint: [1, "enter-key-hint"],
        suffixText: [1, "suffix-text"],
        editingEnabled: [1540, "editing-enabled"],
        type: [513],
        value: [1025],
        messages: [1040],
        messageOverrides: [1040],
        effectiveLocale: [32],
        defaultMessages: [32],
        localizedValue: [32],
        slottedActionElDisabledInternally: [32],
        setFocus: [64],
        selectText: [64],
        internalSyncChildElValue: [64],
      },
    ]
  );
function R() {
  typeof customElements > "u" ||
    ["calcite-input", "calcite-icon", "calcite-progress"].forEach((t) => {
      switch (t) {
        case "calcite-input":
          customElements.get(t) || customElements.define(t, Ge);
          break;
        case "calcite-icon":
          customElements.get(t) || T();
          break;
        case "calcite-progress":
          customElements.get(t) || L();
      }
    });
}
R();
const Ze = "container",
  Je = "search",
  Qe = I(
    class extends z {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.calciteFilterChange = g(this, "calciteFilterChange", 6)),
          (this.filter = V(
            (t, e = !1) => this.updateFiltered(et(this.items, t), e),
            250
          )),
          (this.inputHandler = (t) => {
            const e = t.target;
            (this.value = e.value), this.filter(e.value, !0);
          }),
          (this.keyDownHandler = (t) => {
            t.key === "Escape" && (this.clear(), t.preventDefault()),
              t.key === "Enter" && t.preventDefault();
          }),
          (this.clear = () => {
            (this.value = ""), this.filter("", !0), this.setFocus();
          }),
          (this.items = []),
          (this.disabled = !1),
          (this.filteredItems = []),
          (this.placeholder = void 0),
          (this.scale = "m"),
          (this.value = ""),
          (this.messages = void 0),
          (this.messageOverrides = void 0),
          (this.effectiveLocale = void 0),
          (this.defaultMessages = void 0);
      }
      watchItemsHandler() {
        this.filter(this.value);
      }
      onMessagesChange() {}
      valueHandler(t) {
        this.filter(t);
      }
      effectiveLocaleChange() {
        pt(this, this.effectiveLocale);
      }
      async componentWillLoad() {
        O(this),
          this.updateFiltered(et(this.items, this.value)),
          await yt(this);
      }
      connectedCallback() {
        bt(this), ft(this);
      }
      componentDidRender() {
        j(this);
      }
      disconnectedCallback() {
        vt(this), gt(this);
      }
      componentDidLoad() {
        H(this);
      }
      async setFocus() {
        var t;
        await _(this), (t = this.el) == null || t.focus();
      }
      updateFiltered(t, e = !1) {
        (this.filteredItems.length = 0),
          (this.filteredItems = this.filteredItems.concat(t)),
          e && this.calciteFilterChange.emit();
      }
      render() {
        const { disabled: t, scale: e } = this;
        return o(
          Tt,
          null,
          o(
            "div",
            { class: Ze },
            o(
              "label",
              null,
              o("calcite-input", {
                "aria-label": this.messages.label,
                clearable: !0,
                disabled: t,
                icon: Je,
                messageOverrides: { clear: this.messages.clear },
                onCalciteInputInput: this.inputHandler,
                onKeyDown: this.keyDownHandler,
                placeholder: this.placeholder,
                ref: (i) => {
                  this.textInput = i;
                },
                scale: e,
                type: "text",
                value: this.value,
              })
            )
          )
        );
      }
      static get delegatesFocus() {
        return !0;
      }
      static get assetsDirs() {
        return ["assets"];
      }
      get el() {
        return this;
      }
      static get watchers() {
        return {
          items: ["watchItemsHandler"],
          messageOverrides: ["onMessagesChange"],
          value: ["valueHandler"],
          effectiveLocale: ["effectiveLocaleChange"],
        };
      }
      static get style() {
        return "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{display:flex;inline-size:100%;padding:0.5rem}label{position:relative;margin-inline:0.25rem;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}input[type=text]{margin-block-end:0.25rem;inline-size:100%;border-style:none;background-color:transparent;padding-block:0.25rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);padding-inline-end:0.25rem;padding-inline-start:1.5rem;transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{inline-size:100%}.search-icon{position:absolute;display:flex;color:var(--calcite-ui-text-2);inset-inline-start:0;transition:inset-inline-start var(--calcite-animation-timing), inset-inline-end var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-ui-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type=text]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:flex;cursor:pointer;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-ui-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}";
      }
    },
    [
      17,
      "calcite-filter",
      {
        items: [1040],
        disabled: [516],
        filteredItems: [1040],
        placeholder: [1],
        scale: [513],
        value: [1025],
        messages: [1040],
        messageOverrides: [1040],
        effectiveLocale: [32],
        defaultMessages: [32],
        setFocus: [64],
      },
    ]
  );
function Ft() {
  typeof customElements > "u" ||
    [
      "calcite-filter",
      "calcite-icon",
      "calcite-input",
      "calcite-progress",
    ].forEach((t) => {
      switch (t) {
        case "calcite-filter":
          customElements.get(t) || customElements.define(t, Qe);
          break;
        case "calcite-icon":
          customElements.get(t) || T();
          break;
        case "calcite-input":
          customElements.get(t) || R();
          break;
        case "calcite-progress":
          customElements.get(t) || L();
      }
    });
}
Ft();
const Xe = "container",
  Ye = "table",
  ti = "scrim",
  ei = "table-container",
  ii = "sticky-pos",
  ut = "calcite-list-item",
  At = I(
    class extends z {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.calciteListFilter = g(this, "calciteListFilter", 6)),
          (this.listItems = []),
          (this.enabledListItems = []),
          (this.mutationObserver = ht("mutation", () =>
            this.updateListItems()
          )),
          (this.handleDefaultSlotChange = (t) => {
            Kt(Rt(t));
          }),
          (this.setActiveListItem = () => {
            const { enabledListItems: t } = this;
            t.some((e) => e.active) || (t[0] && (t[0].active = !0));
          }),
          (this.updateSelectedItems = V(() => {
            this.selectedItems = this.enabledListItems.filter(
              (t) => t.selected
            );
          }, 100)),
          (this.updateFilteredItems = V(() => {
            const { listItems: t, filteredData: e, filterText: i } = this,
              n = e.map((r) => r.value),
              a = new Set(),
              s =
                (t == null
                  ? void 0
                  : t.filter((r) => {
                      const l = r.parentElement;
                      l.matches("calcite-list-item-group") && a.add(l);
                      const c = !i || n.includes(r.value);
                      return (r.hidden = !c), c;
                    })) || [];
            (this.filteredItems = s),
              a.forEach((r) => {
                const l = s.some((u) => r.contains(u));
                if (((r.hidden = !l), !l)) return;
                const c = r.closest("calcite-list-item");
                c &&
                  ((c.hidden = !1),
                  s.includes(c) &&
                    Array.from(r.querySelectorAll("calcite-list-item")).forEach(
                      (u) => (u.hidden = !1)
                    ));
              }),
              a.clear();
          })),
          (this.handleFilter = (t) => {
            t.stopPropagation();
            const { filteredItems: e, value: i } = t.currentTarget;
            (this.filteredData = e),
              (this.filterText = i),
              this.updateFilteredItems(),
              this.calciteListFilter.emit();
          }),
          (this.getItemData = () =>
            this.listItems.map((t) => ({
              label: t.label,
              description: t.description,
              metadata: t.metadata,
              value: t.value,
            }))),
          (this.queryListItems = () =>
            Array.from(this.el.querySelectorAll(ut))),
          (this.focusRow = (t) => {
            const { enabledListItems: e } = this;
            t && (e.forEach((i) => (i.active = i === t)), t.setFocus());
          }),
          (this.isNavigable = (t) => {
            var i;
            const e = (i = t.parentElement) == null ? void 0 : i.closest(ut);
            return !e || (e.open && this.isNavigable(e));
          }),
          (this.handleListKeydown = (t) => {
            const { key: e } = t,
              i = this.enabledListItems.filter((a) => this.isNavigable(a)),
              n = i.findIndex((a) => a.active);
            if (e === "ArrowDown") {
              t.preventDefault();
              const a = n + 1;
              i[a] && this.focusRow(i[a]);
            } else if (e === "ArrowUp") {
              t.preventDefault();
              const a = n - 1;
              i[a] && this.focusRow(i[a]);
            } else if (e === "Home") {
              t.preventDefault();
              const a = i[0];
              a && this.focusRow(a);
            } else if (e === "End") {
              t.preventDefault();
              const a = i[i.length - 1];
              a && this.focusRow(a);
            }
          }),
          (this.disabled = !1),
          (this.filterEnabled = !1),
          (this.filteredItems = []),
          (this.filteredData = []),
          (this.filterPlaceholder = void 0),
          (this.filterText = void 0),
          (this.label = void 0),
          (this.loading = !1),
          (this.openable = !1),
          (this.selectedItems = []),
          (this.selectionMode = "none"),
          (this.selectionAppearance = "icon"),
          (this.dataForFilter = []);
      }
      handleFilterEnabledChange() {
        this.updateListItems();
      }
      handleSelectionAppearanceChange() {
        this.updateListItems();
      }
      handleCalciteInternalFocusPreviousItem(t) {
        t.stopPropagation();
        const { enabledListItems: e } = this,
          i = e.findIndex((n) => n.active) - 1;
        e[i] && this.focusRow(e[i]);
      }
      handleCalciteListItemActive(t) {
        const e = t.target,
          { listItems: i } = this;
        i.forEach((n) => {
          n.active = n === e;
        });
      }
      handleCalciteListItemSelect(t) {
        const e = t.target,
          { listItems: i, selectionMode: n } = this;
        i.forEach((a) => {
          n === "single" && (a.selected = a === e);
        }),
          this.updateSelectedItems();
      }
      connectedCallback() {
        var t;
        (t = this.mutationObserver) == null ||
          t.observe(this.el, { childList: !0, subtree: !0 }),
          this.updateListItems();
      }
      disconnectedCallback() {
        var t;
        (t = this.mutationObserver) == null || t.disconnect();
      }
      componentWillLoad() {
        O(this);
      }
      componentDidRender() {
        j(this);
      }
      componentDidLoad() {
        H(this);
        const { filterEl: t } = this,
          e = t == null ? void 0 : t.filteredItems;
        e && (this.filteredData = e), this.updateFilteredItems();
      }
      async setFocus() {
        var t;
        await _(this),
          (t = this.enabledListItems.find((e) => e.active)) == null ||
            t.setFocus();
      }
      render() {
        const {
          loading: t,
          label: e,
          disabled: i,
          dataForFilter: n,
          filterEnabled: a,
          filterPlaceholder: s,
          filterText: r,
        } = this;
        return o(
          "div",
          { class: Xe },
          t ? o("calcite-scrim", { class: ti, loading: t }) : null,
          o(
            "table",
            {
              "aria-busy": Mt(t),
              "aria-label": e || "",
              class: Ye,
              onKeyDown: this.handleListKeydown,
              role: "treegrid",
            },
            a
              ? o(
                  "thead",
                  null,
                  o(
                    "tr",
                    { class: { [ii]: !0 } },
                    o(
                      "th",
                      { colSpan: Bt },
                      o("calcite-filter", {
                        "aria-label": s,
                        disabled: t || i,
                        items: n,
                        onCalciteFilterChange: this.handleFilter,
                        placeholder: s,
                        ref: (l) => (this.filterEl = l),
                        value: r,
                      })
                    )
                  )
                )
              : null,
            o(
              "tbody",
              { class: ei },
              o("slot", { onSlotchange: this.handleDefaultSlotChange })
            )
          )
        );
      }
      updateListItems() {
        const { selectionAppearance: t, selectionMode: e } = this,
          i = this.queryListItems();
        i.forEach((n) => {
          (n.selectionAppearance = t), (n.selectionMode = e);
        }),
          (this.listItems = i),
          (this.enabledListItems = i.filter((n) => !n.disabled)),
          this.filterEnabled && (this.dataForFilter = this.getItemData()),
          this.setActiveListItem(),
          this.updateSelectedItems(),
          this.updateFilteredItems();
      }
      get el() {
        return this;
      }
      static get watchers() {
        return {
          filterEnabled: ["handleFilterEnabledChange"],
          selectionMode: ["handleSelectionAppearanceChange"],
          selectionAppearance: ["handleSelectionAppearanceChange"],
        };
      }
      static get style() {
        return "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{position:relative}.table-container{position:relative;z-index:1;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;background-color:transparent}.table-container *{box-sizing:border-box}.table{inline-size:100%}::slotted(calcite-list-item){margin-block-end:1px;--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}::slotted(calcite-list-item:last-child){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.sticky-pos{position:sticky;inset-block-start:0px;z-index:300}calcite-filter{margin-block-end:1px}";
      }
    },
    [
      1,
      "calcite-list",
      {
        disabled: [516],
        filterEnabled: [516, "filter-enabled"],
        filteredItems: [1040],
        filteredData: [1040],
        filterPlaceholder: [513, "filter-placeholder"],
        filterText: [1537, "filter-text"],
        label: [1],
        loading: [516],
        openable: [4],
        selectedItems: [1040],
        selectionMode: [513, "selection-mode"],
        selectionAppearance: [513, "selection-appearance"],
        dataForFilter: [32],
        setFocus: [64],
      },
      [
        [
          0,
          "calciteInternalFocusPreviousItem",
          "handleCalciteInternalFocusPreviousItem",
        ],
        [0, "calciteInternalListItemActive", "handleCalciteListItemActive"],
        [0, "calciteInternalListItemSelect", "handleCalciteListItemSelect"],
      ],
    ]
  );
function St() {
  typeof customElements > "u" ||
    [
      "calcite-list",
      "calcite-filter",
      "calcite-icon",
      "calcite-input",
      "calcite-loader",
      "calcite-progress",
      "calcite-scrim",
    ].forEach((t) => {
      switch (t) {
        case "calcite-list":
          customElements.get(t) || customElements.define(t, At);
          break;
        case "calcite-filter":
          customElements.get(t) || Ft();
          break;
        case "calcite-icon":
          customElements.get(t) || T();
          break;
        case "calcite-input":
          customElements.get(t) || R();
          break;
        case "calcite-loader":
          customElements.get(t) || Qt();
          break;
        case "calcite-progress":
          customElements.get(t) || L();
          break;
        case "calcite-scrim":
          customElements.get(t) || Xt();
      }
    });
}
St();
const wi = At,
  ki = St;
export { wi as CalciteList, ki as defineCustomElement };
