import {
  hf as Ee,
  hg as je,
  hh as Ke,
  hi as Ue,
  hj as O,
  hk as j,
  he as c,
  hc as A,
  hd as I,
  hl as b,
  hm as S,
  hn as $e,
  ho as ke,
  hp as qe,
  hq as we,
  hr as U,
  hs as xe,
  ht as We,
} from "./index.8fd7165c.js";
import { u as Ce } from "./interactive.b07f4543.js";
import { s as H, a as L, c as z } from "./loadable.8abf7253.js";
import {
  u as $,
  c as q,
  a as W,
  s as Y,
  d as V,
  b as X,
  i as De,
} from "./t9n.ff8d2507.js";
import { c as Ye } from "./observers.139d1c5a.js";
import { g as Pe } from "./guid.416070ad.js";
import { d as M } from "./action.2c3ca8d7.js";
import { d as T } from "./icon.7c938131.js";
import { d as R } from "./loader.e5641e3b.js";
import {
  c as ae,
  f as Ve,
  a as Xe,
  d as Je,
  u as Qe,
  b as Ze,
  e as et,
  r as tt,
  F as oe,
  g as it,
} from "./tooltip.8b63a85b.js";
import { d as Fe } from "./scrim.06304fb4.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
import "./debounce.46964e49.js";
function se(e, t) {
  return (e + t) % t;
}
function re(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      i.push.apply(i, n);
  }
  return i;
}
function ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? re(Object(i), !0).forEach(function (n) {
          nt(e, n, i[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
      : re(Object(i)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
        });
  }
  return e;
}
function nt(e, t, i) {
  return (
    (t = (function (n) {
      var l = (function (r, o) {
        if (typeof r != "object" || r === null) return r;
        var u = r[Symbol.toPrimitive];
        if (u !== void 0) {
          var p = u.call(r, o || "default");
          if (typeof p != "object") return p;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (o === "string" ? String : Number)(r);
      })(n, "string");
      return typeof l == "symbol" ? l : String(l);
    })(t)) in e
      ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = i),
    e
  );
}
var at = function (e, t) {
    if (e.length > 0) {
      var i = e[e.length - 1];
      i !== t && i.pause();
    }
    var n = e.indexOf(t);
    n === -1 || e.splice(n, 1), e.push(t);
  },
  ot = function (e, t) {
    var i = e.indexOf(t);
    i !== -1 && e.splice(i, 1), e.length > 0 && e[e.length - 1].unpause();
  },
  P = function (e) {
    return e.key === "Tab" || e.keyCode === 9;
  },
  st = function (e) {
    return P(e) && !e.shiftKey;
  },
  rt = function (e) {
    return P(e) && e.shiftKey;
  },
  le = function (e) {
    return setTimeout(e, 0);
  },
  de = function (e, t) {
    var i = -1;
    return (
      e.every(function (n, l) {
        return !t(n) || ((i = l), !1);
      }),
      i
    );
  },
  D = function (e) {
    for (
      var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1;
      n < t;
      n++
    )
      i[n - 1] = arguments[n];
    return typeof e == "function" ? e.apply(void 0, i) : e;
  },
  B = function (e) {
    return e.target.shadowRoot && typeof e.composedPath == "function"
      ? e.composedPath()[0]
      : e.target;
  },
  ct = [],
  lt = function (e, t) {
    var i,
      n = (t == null ? void 0 : t.document) || document,
      l = (t == null ? void 0 : t.trapStack) || ct,
      r = ce(
        {
          returnFocusOnDeactivate: !0,
          escapeDeactivates: !0,
          delayInitialFocus: !0,
          isKeyForward: st,
          isKeyBackward: rt,
        },
        t
      ),
      o = {
        containers: [],
        containerGroups: [],
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1,
        delayInitialFocusTimer: void 0,
      },
      u = function (s, a, d) {
        return s && s[a] !== void 0 ? s[a] : r[d || a];
      },
      p = function (s) {
        return o.containerGroups.findIndex(function (a) {
          var d = a.container,
            f = a.tabbableNodes;
          return (
            d.contains(s) ||
            f.find(function (h) {
              return h === s;
            })
          );
        });
      },
      v = function (s) {
        var a = r[s];
        if (typeof a == "function") {
          for (
            var d = arguments.length, f = new Array(d > 1 ? d - 1 : 0), h = 1;
            h < d;
            h++
          )
            f[h - 1] = arguments[h];
          a = a.apply(void 0, f);
        }
        if ((a === !0 && (a = void 0), !a)) {
          if (a === void 0 || a === !1) return a;
          throw new Error(
            "`".concat(
              s,
              "` was specified but was not a node, or did not return a node"
            )
          );
        }
        var m = a;
        if (typeof a == "string" && !(m = n.querySelector(a)))
          throw new Error(
            "`".concat(s, "` as selector refers to no known node")
          );
        return m;
      },
      y = function () {
        var s = v("initialFocus");
        if (s === !1) return !1;
        if (s === void 0)
          if (p(n.activeElement) >= 0) s = n.activeElement;
          else {
            var a = o.tabbableGroups[0];
            s = (a && a.firstTabbableNode) || v("fallbackFocus");
          }
        if (!s)
          throw new Error(
            "Your focus-trap needs to have at least one focusable element"
          );
        return s;
      },
      k = function () {
        if (
          ((o.containerGroups = o.containers.map(function (s) {
            var a = Ke(s, r.tabbableOptions),
              d = Ue(s, r.tabbableOptions);
            return {
              container: s,
              tabbableNodes: a,
              focusableNodes: d,
              firstTabbableNode: a.length > 0 ? a[0] : null,
              lastTabbableNode: a.length > 0 ? a[a.length - 1] : null,
              nextTabbableNode: function (f) {
                var h =
                    !(arguments.length > 1 && arguments[1] !== void 0) ||
                    arguments[1],
                  m = d.findIndex(function (g) {
                    return g === f;
                  });
                if (!(m < 0))
                  return h
                    ? d.slice(m + 1).find(function (g) {
                        return O(g, r.tabbableOptions);
                      })
                    : d
                        .slice(0, m)
                        .reverse()
                        .find(function (g) {
                          return O(g, r.tabbableOptions);
                        });
              },
            };
          })),
          (o.tabbableGroups = o.containerGroups.filter(function (s) {
            return s.tabbableNodes.length > 0;
          })),
          o.tabbableGroups.length <= 0 && !v("fallbackFocus"))
        )
          throw new Error(
            "Your focus-trap must have at least one container with at least one tabbable node in it at all times"
          );
      },
      w = function s(a) {
        a !== !1 &&
          a !== n.activeElement &&
          (a && a.focus
            ? (a.focus({ preventScroll: !!r.preventScroll }),
              (o.mostRecentlyFocusedNode = a),
              (function (d) {
                return (
                  d.tagName &&
                  d.tagName.toLowerCase() === "input" &&
                  typeof d.select == "function"
                );
              })(a) && a.select())
            : s(y()));
      },
      Q = function (s) {
        var a = v("setReturnFocus", s);
        return a || (a !== !1 && s);
      },
      F = function (s) {
        var a = B(s);
        p(a) >= 0 ||
          (D(r.clickOutsideDeactivates, s)
            ? i.deactivate({
                returnFocus:
                  r.returnFocusOnDeactivate && !j(a, r.tabbableOptions),
              })
            : D(r.allowOutsideClick, s) || s.preventDefault());
      },
      Z = function (s) {
        var a = B(s),
          d = p(a) >= 0;
        d || a instanceof Document
          ? d && (o.mostRecentlyFocusedNode = a)
          : (s.stopImmediatePropagation(), w(o.mostRecentlyFocusedNode || y()));
      },
      ee = function (s) {
        if (
          ((a = s).key === "Escape" || a.key === "Esc" || a.keyCode === 27) &&
          D(r.escapeDeactivates, s) !== !1
        )
          return s.preventDefault(), void i.deactivate();
        var a;
        (r.isKeyForward(s) || r.isKeyBackward(s)) &&
          (function (d) {
            var f =
                arguments.length > 1 && arguments[1] !== void 0 && arguments[1],
              h = B(d);
            k();
            var m = null;
            if (o.tabbableGroups.length > 0) {
              var g = p(h),
                E = g >= 0 ? o.containerGroups[g] : void 0;
              if (g < 0)
                m = f
                  ? o.tabbableGroups[o.tabbableGroups.length - 1]
                      .lastTabbableNode
                  : o.tabbableGroups[0].firstTabbableNode;
              else if (f) {
                var x = de(o.tabbableGroups, function (N) {
                  var G = N.firstTabbableNode;
                  return h === G;
                });
                if (
                  (x < 0 &&
                    (E.container === h ||
                      (j(h, r.tabbableOptions) &&
                        !O(h, r.tabbableOptions) &&
                        !E.nextTabbableNode(h, !1))) &&
                    (x = g),
                  x >= 0)
                ) {
                  var Ne = x === 0 ? o.tabbableGroups.length - 1 : x - 1;
                  m = o.tabbableGroups[Ne].lastTabbableNode;
                } else P(d) || (m = E.nextTabbableNode(h, !1));
              } else {
                var C = de(o.tabbableGroups, function (N) {
                  var G = N.lastTabbableNode;
                  return h === G;
                });
                if (
                  (C < 0 &&
                    (E.container === h ||
                      (j(h, r.tabbableOptions) &&
                        !O(h, r.tabbableOptions) &&
                        !E.nextTabbableNode(h))) &&
                    (C = g),
                  C >= 0)
                ) {
                  var Ge = C === o.tabbableGroups.length - 1 ? 0 : C + 1;
                  m = o.tabbableGroups[Ge].firstTabbableNode;
                } else P(d) || (m = E.nextTabbableNode(h));
              }
            } else m = v("fallbackFocus");
            m && (P(d) && d.preventDefault(), w(m));
          })(s, r.isKeyBackward(s));
      },
      te = function (s) {
        var a = B(s);
        p(a) >= 0 ||
          D(r.clickOutsideDeactivates, s) ||
          D(r.allowOutsideClick, s) ||
          (s.preventDefault(), s.stopImmediatePropagation());
      },
      ie = function () {
        if (o.active)
          return (
            at(l, i),
            (o.delayInitialFocusTimer = r.delayInitialFocus
              ? le(function () {
                  w(y());
                })
              : w(y())),
            n.addEventListener("focusin", Z, !0),
            n.addEventListener("mousedown", F, { capture: !0, passive: !1 }),
            n.addEventListener("touchstart", F, { capture: !0, passive: !1 }),
            n.addEventListener("click", te, { capture: !0, passive: !1 }),
            n.addEventListener("keydown", ee, { capture: !0, passive: !1 }),
            i
          );
      },
      ne = function () {
        if (o.active)
          return (
            n.removeEventListener("focusin", Z, !0),
            n.removeEventListener("mousedown", F, !0),
            n.removeEventListener("touchstart", F, !0),
            n.removeEventListener("click", te, !0),
            n.removeEventListener("keydown", ee, !0),
            i
          );
      };
    return (
      (i = {
        get active() {
          return o.active;
        },
        get paused() {
          return o.paused;
        },
        activate: function (s) {
          if (o.active) return this;
          var a = u(s, "onActivate"),
            d = u(s, "onPostActivate"),
            f = u(s, "checkCanFocusTrap");
          f || k(),
            (o.active = !0),
            (o.paused = !1),
            (o.nodeFocusedBeforeActivation = n.activeElement),
            a && a();
          var h = function () {
            f && k(), ie(), d && d();
          };
          return f ? (f(o.containers.concat()).then(h, h), this) : (h(), this);
        },
        deactivate: function (s) {
          if (!o.active) return this;
          var a = ce(
            {
              onDeactivate: r.onDeactivate,
              onPostDeactivate: r.onPostDeactivate,
              checkCanReturnFocus: r.checkCanReturnFocus,
            },
            s
          );
          clearTimeout(o.delayInitialFocusTimer),
            (o.delayInitialFocusTimer = void 0),
            ne(),
            (o.active = !1),
            (o.paused = !1),
            ot(l, i);
          var d = u(a, "onDeactivate"),
            f = u(a, "onPostDeactivate"),
            h = u(a, "checkCanReturnFocus"),
            m = u(a, "returnFocus", "returnFocusOnDeactivate");
          d && d();
          var g = function () {
            le(function () {
              m && w(Q(o.nodeFocusedBeforeActivation)), f && f();
            });
          };
          return m && h
            ? (h(Q(o.nodeFocusedBeforeActivation)).then(g, g), this)
            : (g(), this);
        },
        pause: function () {
          return o.paused || !o.active || ((o.paused = !0), ne()), this;
        },
        unpause: function () {
          return o.paused && o.active
            ? ((o.paused = !1), k(), ie(), this)
            : this;
        },
        updateContainerElements: function (s) {
          var a = [].concat(s).filter(Boolean);
          return (
            (o.containers = a.map(function (d) {
              return typeof d == "string" ? n.querySelector(d) : d;
            })),
            o.active && k(),
            this
          );
        },
      }).updateContainerElements(e),
      i
    );
  };
const dt = [];
function he(e) {
  var t;
  e.focusTrapDisabled || (t = e.focusTrap) == null || t.activate();
}
function K(e) {
  var t;
  (t = e.focusTrap) == null || t.deactivate();
}
const Oe = (e, t) => {
    const i = e.level ? `h${e.level}` : "div";
    return delete e.level, c(i, { ...e }, t);
  },
  ht = "container",
  ut = "arrow",
  ue = "close-button-container",
  mt = "close-button",
  ft = "content",
  pt = "has-header",
  me = "header",
  gt = "heading",
  fe = "aria-controls",
  pe = "aria-expanded",
  ge = new (class {
    constructor() {
      (this.registeredElements = new Map()),
        (this.registeredElementCount = 0),
        (this.queryPopover = (e) => {
          const { registeredElements: t } = this,
            i = e.find((n) => t.has(n));
          return t.get(i);
        }),
        (this.togglePopovers = (e) => {
          const t = e.composedPath(),
            i = this.queryPopover(t);
          i && !i.triggerDisabled && (i.open = !i.open),
            Array.from(this.registeredElements.values())
              .filter((n) => n !== i && n.autoClose && n.open && !t.includes(n))
              .forEach((n) => (n.open = !1));
        }),
        (this.keyHandler = (e) => {
          e.defaultPrevented ||
            (e.key === "Escape"
              ? this.closeAllPopovers()
              : De(e.key) && this.togglePopovers(e));
        }),
        (this.clickHandler = (e) => {
          U(e) && this.togglePopovers(e);
        });
    }
    registerElement(e, t) {
      this.registeredElementCount++,
        this.registeredElements.set(e, t),
        this.registeredElementCount === 1 && this.addListeners();
    }
    unregisterElement(e) {
      this.registeredElements.delete(e) && this.registeredElementCount--,
        this.registeredElementCount === 0 && this.removeListeners();
    }
    closeAllPopovers() {
      Array.from(this.registeredElements.values()).forEach(
        (e) => (e.open = !1)
      );
    }
    addListeners() {
      document.addEventListener("pointerdown", this.clickHandler, {
        capture: !0,
      }),
        document.addEventListener("keydown", this.keyHandler, { capture: !0 });
    }
    removeListeners() {
      document.removeEventListener("pointerdown", this.clickHandler, {
        capture: !0,
      }),
        document.removeEventListener("keydown", this.keyHandler, {
          capture: !0,
        });
    }
  })(),
  vt = A(
    class extends I {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.calcitePopoverBeforeClose = b(
            this,
            "calcitePopoverBeforeClose",
            6
          )),
          (this.calcitePopoverClose = b(this, "calcitePopoverClose", 6)),
          (this.calcitePopoverBeforeOpen = b(
            this,
            "calcitePopoverBeforeOpen",
            6
          )),
          (this.calcitePopoverOpen = b(this, "calcitePopoverOpen", 6)),
          (this.guid = `calcite-popover-${Pe()}`),
          (this.openTransitionProp = "opacity"),
          (this.hasLoaded = !1),
          (this.setTransitionEl = (e) => {
            (this.transitionEl = e),
              ae(this),
              (this.focusTrapEl = e),
              (function (t) {
                const { focusTrapEl: i } = t;
                if (!i) return;
                i.tabIndex == null && (i.tabIndex = -1);
                const n = {
                  clickOutsideDeactivates: !0,
                  document: i.ownerDocument,
                  escapeDeactivates: !1,
                  fallbackFocus: i,
                  setReturnFocus: (l) => (Ee(l), !1),
                  tabbableOptions: je,
                  trapStack: dt,
                };
                t.focusTrap = lt(i, n);
              })(this);
          }),
          (this.setFilteredPlacements = () => {
            const { el: e, flipPlacements: t } = this;
            this.filteredFlipPlacements = t ? Ve(t, e) : null;
          }),
          (this.setUpReferenceElement = (e = !0) => {
            this.removeReferences(),
              (this.effectiveReferenceElement = this.getReferenceElement()),
              Xe(this, this.effectiveReferenceElement, this.el);
            const {
              el: t,
              referenceElement: i,
              effectiveReferenceElement: n,
            } = this;
            this.addReferences();
          }),
          (this.getId = () => this.el.id || this.guid),
          (this.setExpandedAttr = () => {
            const { effectiveReferenceElement: e, open: t } = this;
            e && "setAttribute" in e && e.setAttribute(pe, S(t));
          }),
          (this.addReferences = () => {
            const { effectiveReferenceElement: e } = this;
            if (!e) return;
            const t = this.getId();
            "setAttribute" in e && e.setAttribute(fe, t),
              ge.registerElement(e, this.el),
              this.setExpandedAttr();
          }),
          (this.removeReferences = () => {
            const { effectiveReferenceElement: e } = this;
            e &&
              ("removeAttribute" in e &&
                (e.removeAttribute(fe), e.removeAttribute(pe)),
              ge.unregisterElement(e));
          }),
          (this.hide = () => {
            this.open = !1;
          }),
          (this.storeArrowEl = (e) => {
            (this.arrowEl = e), this.reposition(!0);
          }),
          (this.autoClose = !1),
          (this.closable = !1),
          (this.flipDisabled = !1),
          (this.focusTrapDisabled = !1),
          (this.pointerDisabled = !1),
          (this.flipPlacements = void 0),
          (this.heading = void 0),
          (this.headingLevel = void 0),
          (this.label = void 0),
          (this.messageOverrides = void 0),
          (this.messages = void 0),
          (this.offsetDistance = Je),
          (this.offsetSkidding = 0),
          (this.open = !1),
          (this.overlayPositioning = "absolute"),
          (this.placement = "auto"),
          (this.referenceElement = void 0),
          (this.scale = "m"),
          (this.triggerDisabled = !1),
          (this.effectiveLocale = ""),
          (this.effectiveReferenceElement = void 0),
          (this.defaultMessages = void 0);
      }
      handlefocusTrapDisabled(e) {
        this.open && (e ? K(this) : he(this));
      }
      flipPlacementsHandler() {
        this.setFilteredPlacements(), this.reposition(!0);
      }
      onMessagesChange() {}
      offsetDistanceOffsetHandler() {
        this.reposition(!0);
      }
      offsetSkiddingHandler() {
        this.reposition(!0);
      }
      openHandler(e) {
        e ? this.reposition(!0) : Qe(this.el), this.setExpandedAttr();
      }
      overlayPositioningHandler() {
        this.reposition(!0);
      }
      placementHandler() {
        this.reposition(!0);
      }
      referenceElementHandler() {
        this.setUpReferenceElement(), this.reposition(!0);
      }
      effectiveLocaleChange() {
        $(this, this.effectiveLocale);
      }
      connectedCallback() {
        this.setFilteredPlacements(),
          q(this),
          W(this),
          ae(this),
          this.setUpReferenceElement(this.hasLoaded);
      }
      async componentWillLoad() {
        await Y(this), H(this);
      }
      componentDidLoad() {
        L(this),
          this.referenceElement &&
            !this.effectiveReferenceElement &&
            this.setUpReferenceElement(),
          this.reposition(),
          (this.hasLoaded = !0);
      }
      disconnectedCallback() {
        this.removeReferences(),
          V(this),
          X(this),
          Ze(this, this.effectiveReferenceElement, this.el),
          et(this),
          K(this);
      }
      async reposition(e = !1) {
        const {
          el: t,
          effectiveReferenceElement: i,
          placement: n,
          overlayPositioning: l,
          flipDisabled: r,
          filteredFlipPlacements: o,
          offsetDistance: u,
          offsetSkidding: p,
          arrowEl: v,
        } = this;
        return tt(
          this,
          {
            floatingEl: t,
            referenceEl: i,
            overlayPositioning: l,
            placement: n,
            flipDisabled: r,
            flipPlacements: o,
            offsetDistance: u,
            offsetSkidding: p,
            includeArrow: !this.pointerDisabled,
            arrowEl: v,
            type: "popover",
          },
          e
        );
      }
      async setFocus() {
        await z(this), $e(this.el), ke(this.focusTrapEl);
      }
      async updateFocusTrapElements() {
        var t;
        var e;
        (e = this),
          (t = e.focusTrap) == null || t.updateContainerElements(e.focusTrapEl);
      }
      getReferenceElement() {
        const { referenceElement: e, el: t } = this;
        return (typeof e == "string" ? qe(t, { id: e }) : e) || null;
      }
      onBeforeOpen() {
        this.calcitePopoverBeforeOpen.emit();
      }
      onOpen() {
        this.calcitePopoverOpen.emit(), he(this);
      }
      onBeforeClose() {
        this.calcitePopoverBeforeClose.emit();
      }
      onClose() {
        this.calcitePopoverClose.emit(), K(this);
      }
      renderCloseButton() {
        const { messages: e, closable: t } = this;
        return t
          ? c(
              "div",
              { class: ue, key: ue },
              c(
                "calcite-action",
                {
                  class: mt,
                  onClick: this.hide,
                  ref: (i) => (this.closeButtonEl = i),
                  scale: this.scale,
                  text: e.close,
                },
                c("calcite-icon", {
                  icon: "x",
                  scale: this.scale === "l" ? "m" : this.scale,
                })
              )
            )
          : null;
      }
      renderHeader() {
        const { heading: e, headingLevel: t } = this,
          i = e ? c(Oe, { class: gt, level: t }, e) : null;
        return i
          ? c("div", { class: me, key: me }, i, this.renderCloseButton())
          : null;
      }
      render() {
        const {
            effectiveReferenceElement: e,
            heading: t,
            label: i,
            open: n,
            pointerDisabled: l,
          } = this,
          r = e && n,
          o = !r,
          u = l ? null : c("div", { class: ut, ref: this.storeArrowEl });
        return c(
          we,
          {
            "aria-hidden": S(o),
            "aria-label": i,
            "aria-live": "polite",
            "calcite-hydrated-hidden": o,
            id: this.getId(),
            role: "dialog",
          },
          c(
            "div",
            {
              class: { [oe.animation]: !0, [oe.animationActive]: r },
              ref: this.setTransitionEl,
            },
            u,
            c(
              "div",
              { class: { [pt]: !!t, [ht]: !0 } },
              this.renderHeader(),
              c("div", { class: ft }, c("slot", null)),
              t ? null : this.renderCloseButton()
            )
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
          focusTrapDisabled: ["handlefocusTrapDisabled"],
          flipPlacements: ["flipPlacementsHandler"],
          messageOverrides: ["onMessagesChange"],
          offsetDistance: ["offsetDistanceOffsetHandler"],
          offsetSkidding: ["offsetSkiddingHandler"],
          open: ["openHandler"],
          overlayPositioning: ["overlayPositioningHandler"],
          placement: ["placementHandler"],
          referenceElement: ["referenceElementHandler"],
          effectiveLocale: ["effectiveLocaleChange"],
        };
      }
      static get style() {
        return '@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, 900);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.arrow,.arrow::before{position:absolute;inline-size:8px;block-size:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-placement^=top]) .arrow{inset-block-end:-4px}:host([data-placement^=bottom]) .arrow{inset-block-start:-4px}:host([data-placement^=right]) .arrow,:host([data-placement^=left]) .arrow{direction:ltr;text-align:start}:host([data-placement^=left]) .arrow{inset-inline-end:-4px}:host([data-placement^=right]) .arrow{inset-inline-start:-4px}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;background-color:var(--calcite-ui-foreground-1);border-block-end-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}';
      }
    },
    [
      1,
      "calcite-popover",
      {
        autoClose: [516, "auto-close"],
        closable: [1540],
        flipDisabled: [516, "flip-disabled"],
        focusTrapDisabled: [516, "focus-trap-disabled"],
        pointerDisabled: [516, "pointer-disabled"],
        flipPlacements: [16],
        heading: [1],
        headingLevel: [514, "heading-level"],
        label: [1],
        messageOverrides: [1040],
        messages: [1040],
        offsetDistance: [514, "offset-distance"],
        offsetSkidding: [514, "offset-skidding"],
        open: [1540],
        overlayPositioning: [513, "overlay-positioning"],
        placement: [513],
        referenceElement: [1, "reference-element"],
        scale: [513],
        triggerDisabled: [516, "trigger-disabled"],
        effectiveLocale: [32],
        effectiveReferenceElement: [32],
        defaultMessages: [32],
        reposition: [64],
        setFocus: [64],
        updateFocusTrapElements: [64],
      },
    ]
  );
function _() {
  typeof customElements > "u" ||
    [
      "calcite-popover",
      "calcite-action",
      "calcite-icon",
      "calcite-loader",
    ].forEach((e) => {
      switch (e) {
        case "calcite-popover":
          customElements.get(e) || customElements.define(e, vt);
          break;
        case "calcite-action":
          customElements.get(e) || M();
          break;
        case "calcite-icon":
          customElements.get(e) || T();
          break;
        case "calcite-loader":
          customElements.get(e) || R();
      }
    });
}
_();
const bt = "menu",
  yt = "default-trigger",
  Et = "tooltip",
  Be = "trigger",
  kt = "ellipsis",
  wt = ["ArrowUp", "ArrowDown", "End", "Home"],
  xt = A(
    class extends I {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.calciteActionMenuOpen = b(this, "calciteActionMenuOpen", 6)),
          (this.actionElements = []),
          (this.guid = `calcite-action-menu-${Pe()}`),
          (this.menuId = `${this.guid}-menu`),
          (this.menuButtonId = `${this.guid}-menu-button`),
          (this.connectMenuButtonEl = () => {
            const { menuButtonId: e, menuId: t, open: i, label: n } = this,
              l = this.slottedMenuButtonEl || this.defaultMenuButtonEl;
            this.menuButtonEl !== l &&
              (this.disconnectMenuButtonEl(),
              (this.menuButtonEl = l),
              this.setTooltipReferenceElement(),
              l &&
                ((l.active = i),
                l.setAttribute("aria-controls", t),
                l.setAttribute("aria-expanded", S(i)),
                l.setAttribute("aria-haspopup", "true"),
                l.id || (l.id = e),
                l.label || (l.label = n),
                l.text || (l.text = n),
                l.addEventListener("pointerdown", this.menuButtonClick),
                l.addEventListener("keydown", this.menuButtonKeyDown)));
          }),
          (this.disconnectMenuButtonEl = () => {
            const { menuButtonEl: e } = this;
            e &&
              (e.removeEventListener("pointerdown", this.menuButtonClick),
              e.removeEventListener("keydown", this.menuButtonKeyDown));
          }),
          (this.setMenuButtonEl = (e) => {
            const t = e.target
              .assignedElements({ flatten: !0 })
              .filter((i) =>
                i == null ? void 0 : i.matches("calcite-action")
              );
            (this.slottedMenuButtonEl = t[0]), this.connectMenuButtonEl();
          }),
          (this.setDefaultMenuButtonEl = (e) => {
            (this.defaultMenuButtonEl = e), this.connectMenuButtonEl();
          }),
          (this.handleCalciteActionClick = () => {
            (this.open = !1), this.setFocus();
          }),
          (this.menuButtonClick = (e) => {
            U(e) && this.toggleOpen();
          }),
          (this.updateTooltip = (e) => {
            const t = e.target
              .assignedElements({ flatten: !0 })
              .filter((i) =>
                i == null ? void 0 : i.matches("calcite-tooltip")
              );
            (this.tooltipEl = t[0]), this.setTooltipReferenceElement();
          }),
          (this.setTooltipReferenceElement = () => {
            const {
              tooltipEl: e,
              expanded: t,
              menuButtonEl: i,
              open: n,
            } = this;
            e && (e.referenceElement = t || n ? null : i);
          }),
          (this.updateAction = (e, t) => {
            const { guid: i, activeMenuItemIndex: n } = this,
              l = `${i}-action-${t}`;
            (e.tabIndex = -1),
              e.setAttribute("role", "menuitem"),
              e.id || (e.id = l),
              (e.active = t === n);
          }),
          (this.updateActions = (e) => {
            e == null || e.forEach(this.updateAction);
          }),
          (this.handleDefaultSlotChange = (e) => {
            const t = e.target
              .assignedElements({ flatten: !0 })
              .filter((i) =>
                i == null ? void 0 : i.matches("calcite-action")
              );
            this.actionElements = t;
          }),
          (this.menuButtonKeyDown = (e) => {
            const { key: t } = e,
              { actionElements: i, activeMenuItemIndex: n, open: l } = this;
            if (i.length) {
              if (De(t)) {
                if ((e.preventDefault(), !l)) return void this.toggleOpen();
                const r = i[n];
                r ? r.click() : this.toggleOpen(!1);
              }
              if (t !== "Tab")
                return t === "Escape"
                  ? (this.toggleOpen(!1), void e.preventDefault())
                  : void this.handleActionNavigation(e, t, i);
              this.open = !1;
            }
          }),
          (this.handleActionNavigation = (e, t, i) => {
            if (!this.isValidKey(t, wt)) return;
            if ((e.preventDefault(), !this.open))
              return (
                this.toggleOpen(),
                (t !== "Home" && t !== "ArrowDown") ||
                  (this.activeMenuItemIndex = 0),
                void (
                  (t !== "End" && t !== "ArrowUp") ||
                  (this.activeMenuItemIndex = i.length - 1)
                )
              );
            t === "Home" && (this.activeMenuItemIndex = 0),
              t === "End" && (this.activeMenuItemIndex = i.length - 1);
            const n = this.activeMenuItemIndex;
            t === "ArrowUp" &&
              (this.activeMenuItemIndex = se(Math.max(n - 1, -1), i.length)),
              t === "ArrowDown" &&
                (this.activeMenuItemIndex = se(n + 1, i.length));
          }),
          (this.toggleOpenEnd = () => {
            this.setFocus(),
              this.el.removeEventListener(
                "calcitePopoverOpen",
                this.toggleOpenEnd
              );
          }),
          (this.toggleOpen = (e = !this.open) => {
            this.el.addEventListener("calcitePopoverOpen", this.toggleOpenEnd),
              (this.open = e);
          }),
          (this.expanded = !1),
          (this.flipPlacements = void 0),
          (this.label = void 0),
          (this.open = !1),
          (this.overlayPositioning = "absolute"),
          (this.placement = "auto"),
          (this.scale = void 0),
          (this.menuButtonEl = void 0),
          (this.activeMenuItemIndex = -1);
      }
      componentWillLoad() {
        H(this);
      }
      componentDidLoad() {
        L(this);
      }
      disconnectedCallback() {
        this.disconnectMenuButtonEl();
      }
      expandedHandler() {
        (this.open = !1), this.setTooltipReferenceElement();
      }
      openHandler(e) {
        (this.activeMenuItemIndex = this.open ? 0 : -1),
          this.menuButtonEl && (this.menuButtonEl.active = e),
          this.calciteActionMenuOpen.emit(),
          this.setTooltipReferenceElement();
      }
      closeCalciteActionMenuOnClick(e) {
        U(e) && (e.composedPath().includes(this.el) || (this.open = !1));
      }
      activeMenuItemIndexHandler() {
        this.updateActions(this.actionElements);
      }
      async setFocus() {
        await z(this), Ee(this.menuButtonEl);
      }
      renderMenuButton() {
        const { label: e, scale: t, expanded: i } = this;
        return c(
          "slot",
          { name: Be, onSlotchange: this.setMenuButtonEl },
          c("calcite-action", {
            class: yt,
            icon: kt,
            ref: this.setDefaultMenuButtonEl,
            scale: t,
            text: e,
            textEnabled: i,
          })
        );
      }
      renderMenuItems() {
        const {
            actionElements: e,
            activeMenuItemIndex: t,
            open: i,
            menuId: n,
            menuButtonEl: l,
            label: r,
            placement: o,
            overlayPositioning: u,
            flipPlacements: p,
          } = this,
          v = e[t];
        return c(
          "calcite-popover",
          {
            flipPlacements: p,
            focusTrapDisabled: !0,
            label: r,
            offsetDistance: 0,
            open: i,
            overlayPositioning: u,
            placement: o,
            pointerDisabled: !0,
            referenceElement: l,
          },
          c(
            "div",
            {
              "aria-activedescendant": (v == null ? void 0 : v.id) || null,
              "aria-labelledby": l == null ? void 0 : l.id,
              class: bt,
              id: n,
              onClick: this.handleCalciteActionClick,
              role: "menu",
              tabIndex: -1,
            },
            c("slot", { onSlotchange: this.handleDefaultSlotChange })
          )
        );
      }
      render() {
        return c(
          xe,
          null,
          this.renderMenuButton(),
          this.renderMenuItems(),
          c("slot", { name: Et, onSlotchange: this.updateTooltip })
        );
      }
      isValidKey(e, t) {
        return !!t.find((i) => i === e);
      }
      get el() {
        return this;
      }
      static get watchers() {
        return {
          expanded: ["expandedHandler"],
          open: ["openHandler"],
          activeMenuItemIndex: ["activeMenuItemIndexHandler"],
        };
      }
      static get style() {
        return "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{box-sizing:border-box;display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size-1);color:var(--calcite-ui-text-2)}.menu ::slotted(calcite-action){margin:0.125rem;display:flex;outline-color:transparent}.menu ::slotted(calcite-action[active]){outline:2px solid var(--calcite-ui-brand);outline-offset:0px}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{flex-direction:column;flex-wrap:nowrap;outline:2px solid transparent;outline-offset:2px}";
      }
    },
    [
      1,
      "calcite-action-menu",
      {
        expanded: [516],
        flipPlacements: [16],
        label: [1],
        open: [1540],
        overlayPositioning: [513, "overlay-positioning"],
        placement: [513],
        scale: [513],
        menuButtonEl: [32],
        activeMenuItemIndex: [32],
        setFocus: [64],
      },
      [[9, "pointerdown", "closeCalciteActionMenuOnClick"]],
    ]
  );
function J() {
  typeof customElements > "u" ||
    [
      "calcite-action-menu",
      "calcite-action",
      "calcite-icon",
      "calcite-loader",
      "calcite-popover",
    ].forEach((e) => {
      switch (e) {
        case "calcite-action-menu":
          customElements.get(e) || customElements.define(e, xt);
          break;
        case "calcite-action":
          customElements.get(e) || M();
          break;
        case "calcite-icon":
          customElements.get(e) || T();
          break;
        case "calcite-loader":
          customElements.get(e) || R();
          break;
        case "calcite-popover":
          customElements.get(e) || _();
      }
    });
}
J();
const Ct = "container",
  Dt = "header",
  Pt = "heading",
  Ft = "description",
  ve = "header-content",
  be = "header-actions",
  Ot = "header-actions--end",
  Bt = "header-actions--start",
  St = "content-wrapper",
  ye = "content-container",
  At = "content-height",
  It = "fab-container",
  Ht = "footer",
  Lt = "x",
  zt = "ellipsis",
  Se = "header-actions-start",
  Ae = "header-actions-end",
  Ie = "header-menu-actions",
  He = "header-content",
  Le = "fab",
  ze = "footer",
  Me = "footer-actions",
  Mt = A(
    class extends I {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.calcitePanelClose = b(this, "calcitePanelClose", 6)),
          (this.calcitePanelScroll = b(this, "calcitePanelScroll", 6)),
          (this.resizeObserver = Ye("resize", () => this.resizeHandler())),
          (this.resizeHandler = () => {
            const { panelScrollEl: e } = this;
            e &&
              typeof e.scrollHeight == "number" &&
              typeof e.offsetHeight == "number" &&
              (e.tabIndex = e.scrollHeight > e.offsetHeight ? 0 : -1);
          }),
          (this.setContainerRef = (e) => {
            this.containerEl = e;
          }),
          (this.setCloseRef = (e) => {
            this.closeButtonEl = e;
          }),
          (this.setBackRef = (e) => {
            this.backButtonEl = e;
          }),
          (this.panelKeyDownHandler = (e) => {
            this.closable &&
              e.key === "Escape" &&
              !e.defaultPrevented &&
              (this.close(), e.preventDefault());
          }),
          (this.close = () => {
            (this.closed = !0), this.calcitePanelClose.emit();
          }),
          (this.panelScrollHandler = () => {
            this.calcitePanelScroll.emit();
          }),
          (this.handleHeaderActionsStartSlotChange = (e) => {
            const t = e.target.assignedElements({ flatten: !0 });
            this.hasStartActions = !!t.length;
          }),
          (this.handleHeaderActionsEndSlotChange = (e) => {
            const t = e.target.assignedElements({ flatten: !0 });
            this.hasEndActions = !!t.length;
          }),
          (this.handleHeaderMenuActionsSlotChange = (e) => {
            const t = e.target.assignedElements({ flatten: !0 });
            this.hasMenuItems = !!t.length;
          }),
          (this.handleHeaderContentSlotChange = (e) => {
            const t = e.target.assignedElements({ flatten: !0 });
            this.hasHeaderContent = !!t.length;
          }),
          (this.handleFooterSlotChange = (e) => {
            const t = e.target.assignedElements({ flatten: !0 });
            this.hasFooterContent = !!t.length;
          }),
          (this.handleFooterActionsSlotChange = (e) => {
            const t = e.target.assignedElements({ flatten: !0 });
            this.hasFooterActions = !!t.length;
          }),
          (this.handleFabSlotChange = (e) => {
            const t = e.target.assignedElements({ flatten: !0 });
            this.hasFab = !!t.length;
          }),
          (this.setPanelScrollEl = (e) => {
            var t, i;
            (this.panelScrollEl = e),
              (t = this.resizeObserver) == null || t.disconnect(),
              e &&
                ((i = this.resizeObserver) == null || i.observe(e),
                this.resizeHandler());
          }),
          (this.closed = !1),
          (this.disabled = !1),
          (this.closable = !1),
          (this.headingLevel = void 0),
          (this.loading = !1),
          (this.heading = void 0),
          (this.description = void 0),
          (this.menuOpen = !1),
          (this.messageOverrides = void 0),
          (this.messages = void 0),
          (this.hasStartActions = !1),
          (this.hasEndActions = !1),
          (this.hasMenuItems = !1),
          (this.hasHeaderContent = !1),
          (this.hasFooterContent = !1),
          (this.hasFooterActions = !1),
          (this.hasFab = !1),
          (this.defaultMessages = void 0),
          (this.effectiveLocale = "");
      }
      onMessagesChange() {}
      connectedCallback() {
        q(this), W(this);
      }
      async componentWillLoad() {
        H(this), await Y(this);
      }
      componentDidLoad() {
        L(this);
      }
      componentDidRender() {
        Ce(this);
      }
      disconnectedCallback() {
        var e;
        V(this), X(this), (e = this.resizeObserver) == null || e.disconnect();
      }
      effectiveLocaleChange() {
        $(this, this.effectiveLocale);
      }
      async setFocus() {
        await z(this), ke(this.containerEl);
      }
      async scrollContentTo(e) {
        var t;
        (t = this.panelScrollEl) == null || t.scrollTo(e);
      }
      renderHeaderContent() {
        const {
            heading: e,
            headingLevel: t,
            description: i,
            hasHeaderContent: n,
          } = this,
          l = e ? c(Oe, { class: Pt, level: t }, e) : null,
          r = i ? c("span", { class: Ft }, i) : null;
        return n || (!l && !r)
          ? null
          : c("div", { class: ve, key: "header-content" }, l, r);
      }
      renderHeaderSlottedContent() {
        return c(
          "div",
          {
            class: ve,
            hidden: !this.hasHeaderContent,
            key: "slotted-header-content",
          },
          c("slot", {
            name: He,
            onSlotchange: this.handleHeaderContentSlotChange,
          })
        );
      }
      renderHeaderStartActions() {
        const { hasStartActions: e } = this;
        return c(
          "div",
          {
            class: { [Bt]: !0, [be]: !0 },
            hidden: !e,
            key: "header-actions-start",
          },
          c("slot", {
            name: Se,
            onSlotchange: this.handleHeaderActionsStartSlotChange,
          })
        );
      }
      renderHeaderActionsEnd() {
        const { close: e, hasEndActions: t, messages: i, closable: n } = this,
          l = i.close,
          r = n
            ? c("calcite-action", {
                "aria-label": l,
                icon: Lt,
                onClick: e,
                ref: this.setCloseRef,
                text: l,
              })
            : null,
          o = c("slot", {
            name: Ae,
            onSlotchange: this.handleHeaderActionsEndSlotChange,
          });
        return c(
          "div",
          {
            class: { [Ot]: !0, [be]: !0 },
            hidden: !(t || r),
            key: "header-actions-end",
          },
          o,
          r
        );
      }
      renderMenu() {
        const { hasMenuItems: e, messages: t, menuOpen: i } = this;
        return c(
          "calcite-action-menu",
          {
            flipPlacements: ["top", "bottom"],
            hidden: !e,
            key: "menu",
            label: t.options,
            open: i,
            placement: "bottom-end",
          },
          c("calcite-action", { icon: zt, slot: Be, text: t.options }),
          c("slot", {
            name: Ie,
            onSlotchange: this.handleHeaderMenuActionsSlotChange,
          })
        );
      }
      renderHeaderNode() {
        const {
            hasHeaderContent: e,
            hasStartActions: t,
            hasEndActions: i,
            closable: n,
            hasMenuItems: l,
          } = this,
          r = this.renderHeaderContent();
        return c(
          "header",
          { class: Dt, hidden: !(e || r || t || i || n || l) },
          this.renderHeaderStartActions(),
          this.renderHeaderSlottedContent(),
          r,
          this.renderHeaderActionsEnd(),
          this.renderMenu()
        );
      }
      renderFooterNode() {
        const { hasFooterContent: e, hasFooterActions: t } = this;
        return c(
          "footer",
          { class: Ht, hidden: !(e || t) },
          c("slot", {
            key: "footer-slot",
            name: ze,
            onSlotchange: this.handleFooterSlotChange,
          }),
          c("slot", {
            key: "footer-actions-slot",
            name: Me,
            onSlotchange: this.handleFooterActionsSlotChange,
          })
        );
      }
      renderContent() {
        const { hasFab: e } = this,
          t = c("slot", { key: "default-slot" }),
          i = e ? c("section", { class: ye }, t) : t;
        return c(
          "div",
          {
            class: { [St]: !0, [ye]: !e, [At]: e },
            onScroll: this.panelScrollHandler,
            ref: this.setPanelScrollEl,
          },
          i,
          this.renderFab()
        );
      }
      renderFab() {
        return c(
          "div",
          { class: It, hidden: !this.hasFab },
          c("slot", { name: Le, onSlotchange: this.handleFabSlotChange })
        );
      }
      render() {
        const {
            loading: e,
            panelKeyDownHandler: t,
            closed: i,
            closable: n,
          } = this,
          l = c(
            "article",
            {
              "aria-busy": S(e),
              class: Ct,
              hidden: i,
              onKeyDown: t,
              ref: this.setContainerRef,
              tabIndex: n ? 0 : -1,
            },
            this.renderHeaderNode(),
            this.renderContent(),
            this.renderFooterNode()
          );
        return c(xe, null, e ? c("calcite-scrim", { loading: e }) : null, l);
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
        return "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{border-block-end:1px solid;position:sticky;inset-block-start:0px;z-index:400;inline-size:100%;align-items:stretch;justify-content:flex-start;background-color:var(--calcite-ui-foreground-1);border-block-end-color:var(--calcite-ui-border-3);flex:0 0 auto}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{overflow:auto}.content-height{block-size:100%}.content-container{display:flex;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;background-color:var(--calcite-ui-background)}.footer{border-block-start:1px solid;position:sticky;inset-block-end:0px;display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);border-block-start-color:var(--calcite-ui-border-3);flex:0 0 auto;min-block-size:3rem;padding:0.5rem}.fab-container{position:sticky;inset-block-end:0px;z-index:300;margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}[hidden]{display:none}";
      }
    },
    [
      1,
      "calcite-panel",
      {
        closed: [1540],
        disabled: [516],
        closable: [1540],
        headingLevel: [514, "heading-level"],
        loading: [516],
        heading: [1],
        description: [1],
        menuOpen: [516, "menu-open"],
        messageOverrides: [1040],
        messages: [1040],
        hasStartActions: [32],
        hasEndActions: [32],
        hasMenuItems: [32],
        hasHeaderContent: [32],
        hasFooterContent: [32],
        hasFooterActions: [32],
        hasFab: [32],
        defaultMessages: [32],
        effectiveLocale: [32],
        setFocus: [64],
        scrollContentTo: [64],
      },
    ]
  );
function Te() {
  typeof customElements > "u" ||
    [
      "calcite-panel",
      "calcite-action",
      "calcite-action-menu",
      "calcite-icon",
      "calcite-loader",
      "calcite-popover",
      "calcite-scrim",
    ].forEach((e) => {
      switch (e) {
        case "calcite-panel":
          customElements.get(e) || customElements.define(e, Mt);
          break;
        case "calcite-action":
          customElements.get(e) || M();
          break;
        case "calcite-action-menu":
          customElements.get(e) || J();
          break;
        case "calcite-icon":
          customElements.get(e) || T();
          break;
        case "calcite-loader":
          customElements.get(e) || R();
          break;
        case "calcite-popover":
          customElements.get(e) || _();
          break;
        case "calcite-scrim":
          customElements.get(e) || Fe();
      }
    });
}
Te();
const Tt = "back-button",
  Rt = "chevron-left",
  _t = "chevron-right",
  Nt = "header-actions-start",
  Gt = "header-actions-end",
  jt = "header-menu-actions",
  Kt = "header-content",
  Ut = "fab",
  $t = "footer",
  qt = "footer-actions",
  Re = A(
    class extends I {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.calciteFlowItemBack = b(this, "calciteFlowItemBack", 6)),
          (this.calciteFlowItemScroll = b(this, "calciteFlowItemScroll", 6)),
          (this.calciteFlowItemClose = b(this, "calciteFlowItemClose", 6)),
          (this.handlePanelScroll = (e) => {
            e.stopPropagation(), this.calciteFlowItemScroll.emit();
          }),
          (this.handlePanelClose = (e) => {
            e.stopPropagation(), this.calciteFlowItemClose.emit();
          }),
          (this.backButtonClick = () => {
            this.calciteFlowItemBack.emit();
          }),
          (this.setBackRef = (e) => {
            this.backButtonEl = e;
          }),
          (this.setContainerRef = (e) => {
            this.containerEl = e;
          }),
          (this.closable = !1),
          (this.closed = !1),
          (this.beforeBack = void 0),
          (this.description = void 0),
          (this.disabled = !1),
          (this.heading = void 0),
          (this.headingLevel = void 0),
          (this.loading = !1),
          (this.menuOpen = !1),
          (this.messageOverrides = void 0),
          (this.messages = void 0),
          (this.showBackButton = !1),
          (this.backButtonEl = void 0),
          (this.defaultMessages = void 0),
          (this.effectiveLocale = "");
      }
      onMessagesChange() {}
      connectedCallback() {
        q(this), W(this);
      }
      async componentWillLoad() {
        await Y(this), H(this);
      }
      componentDidRender() {
        Ce(this);
      }
      disconnectedCallback() {
        V(this), X(this);
      }
      componentDidLoad() {
        L(this);
      }
      effectiveLocaleChange() {
        $(this, this.effectiveLocale);
      }
      async setFocus() {
        await z(this);
        const { backButtonEl: e, containerEl: t } = this;
        e ? e.setFocus() : t == null || t.setFocus();
      }
      async scrollContentTo(e) {
        var t;
        await ((t = this.containerEl) == null ? void 0 : t.scrollContentTo(e));
      }
      renderBackButton() {
        const { el: e } = this,
          t = We(e) === "rtl",
          { showBackButton: i, backButtonClick: n, messages: l } = this,
          r = l.back;
        return i
          ? c("calcite-action", {
              "aria-label": r,
              class: Tt,
              icon: t ? _t : Rt,
              key: "flow-back-button",
              onClick: n,
              ref: this.setBackRef,
              scale: "s",
              slot: "header-actions-start",
              text: r,
            })
          : null;
      }
      render() {
        const {
            closable: e,
            closed: t,
            description: i,
            disabled: n,
            heading: l,
            headingLevel: r,
            loading: o,
            menuOpen: u,
            messages: p,
            backButtonEl: v,
          } = this,
          y = p.back;
        return c(
          we,
          null,
          c(
            "calcite-panel",
            {
              closable: e,
              closed: t,
              description: i,
              disabled: n,
              heading: l,
              headingLevel: r,
              loading: o,
              menuOpen: u,
              messageOverrides: p,
              onCalcitePanelClose: this.handlePanelClose,
              onCalcitePanelScroll: this.handlePanelScroll,
              ref: this.setContainerRef,
            },
            this.renderBackButton(),
            c("slot", { name: Nt, slot: Se }),
            c("slot", { name: Gt, slot: Ae }),
            c("slot", { name: Kt, slot: He }),
            c("slot", { name: jt, slot: Ie }),
            c("slot", { name: Ut, slot: Le }),
            c("slot", { name: qt, slot: Me }),
            c("slot", { name: $t, slot: ze }),
            c("slot", null)
          ),
          v
            ? c(
                "calcite-tooltip",
                {
                  label: y,
                  overlayPositioning: "fixed",
                  placement: "top",
                  referenceElement: v,
                },
                y
              )
            : null
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
        return "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}";
      }
    },
    [
      1,
      "calcite-flow-item",
      {
        closable: [1540],
        closed: [1540],
        beforeBack: [16],
        description: [1],
        disabled: [516],
        heading: [1],
        headingLevel: [514, "heading-level"],
        loading: [516],
        menuOpen: [516, "menu-open"],
        messageOverrides: [1040],
        messages: [1040],
        showBackButton: [4, "show-back-button"],
        backButtonEl: [32],
        defaultMessages: [32],
        effectiveLocale: [32],
        setFocus: [64],
        scrollContentTo: [64],
      },
    ]
  );
function _e() {
  typeof customElements > "u" ||
    [
      "calcite-flow-item",
      "calcite-action",
      "calcite-action-menu",
      "calcite-icon",
      "calcite-loader",
      "calcite-panel",
      "calcite-popover",
      "calcite-scrim",
      "calcite-tooltip",
    ].forEach((e) => {
      switch (e) {
        case "calcite-flow-item":
          customElements.get(e) || customElements.define(e, Re);
          break;
        case "calcite-action":
          customElements.get(e) || M();
          break;
        case "calcite-action-menu":
          customElements.get(e) || J();
          break;
        case "calcite-icon":
          customElements.get(e) || T();
          break;
        case "calcite-loader":
          customElements.get(e) || R();
          break;
        case "calcite-panel":
          customElements.get(e) || Te();
          break;
        case "calcite-popover":
          customElements.get(e) || _();
          break;
        case "calcite-scrim":
          customElements.get(e) || Fe();
          break;
        case "calcite-tooltip":
          customElements.get(e) || it();
      }
    });
}
_e();
const ui = Re,
  mi = _e;
export { ui as CalciteFlowItem, mi as defineCustomElement };
