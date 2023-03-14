import {
  ae as m,
  af as w,
  hx as Ne,
  ag as Y,
  hy as Ee,
  hz as O,
  hA as Ke,
  hB as ke,
  G as ye,
  eq as Ye,
  hC as Xe,
  dd as je,
  b0 as Fe,
  e1 as T,
  hD as qe,
  cy as de,
  D as X,
  aW as J,
  s as U,
  cE as Qe,
  h7 as L,
  hE as z,
  U as F,
  aJ as Q,
  hF as pe,
  y as fe,
  aL as Ae,
  hG as Ze,
  aZ as ve,
  hH as et,
  hI as tt,
  hJ as Z,
  hK as Te,
  e2 as rt,
  hL as st,
} from "./index.8fd7165c.js";
import "./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.c9bd3d02.js";
import "./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.5a23dd1b.js";
import "./NvapForm.feb8550d.js";
import "./vue.a7ce1fbe.js";
import "./vue-router.805f6e2a.js";
import "./Table.e9c997d5.js";
import "./vue-i18n.67a42238.js";
const ee = "esri-identity-form",
  C = {
    base: ee,
    group: `${ee}__group`,
    label: `${ee}__label`,
    footer: `${ee}__footer`,
    esriInput: "esri-input",
    esriButton: "esri-button",
    esriButtonSecondary: "esri-button--secondary",
  };
let q = class extends Ee {
  constructor(n, e) {
    super(n, e),
      (this._usernameInputNode = null),
      (this._passwordInputNode = null),
      (this.signingIn = !1),
      (this.server = null),
      (this.resource = null),
      (this.error = null),
      (this.oAuthPrompt = !1);
  }
  render() {
    const {
        error: n,
        server: e,
        resource: t,
        signingIn: r,
        oAuthPrompt: i,
        messages: s,
      } = this,
      o = O(
        "div",
        { class: C.group },
        Ke(i ? s.oAuthInfo : s.info, {
          server: e && /\.arcgis\.com/i.test(e) ? "ArcGIS Online" : e,
          resource: `(${t || s.lblItem})`,
        })
      ),
      l = i
        ? null
        : O(
            "div",
            { class: C.group, key: "username" },
            O(
              "label",
              { class: C.label },
              s.lblUser,
              O("input", {
                value: "",
                required: !0,
                autocomplete: "off",
                spellcheck: !1,
                type: "text",
                bind: this,
                afterCreate: ke,
                "data-node-ref": "_usernameInputNode",
                class: C.esriInput,
              })
            )
          ),
      h = i
        ? null
        : O(
            "div",
            { class: C.group, key: "password" },
            O(
              "label",
              { class: C.label },
              s.lblPwd,
              O("input", {
                value: "",
                required: !0,
                type: "password",
                bind: this,
                afterCreate: ke,
                "data-node-ref": "_passwordInputNode",
                class: C.esriInput,
              })
            )
          ),
      a = O(
        "div",
        { class: this.classes(C.group, C.footer) },
        O("input", {
          type: "submit",
          disabled: !!r,
          value: r ? s.lblSigning : s.lblOk,
          class: C.esriButton,
        }),
        O("input", {
          type: "button",
          value: s.lblCancel,
          bind: this,
          onclick: this._cancel,
          class: this.classes(C.esriButton, C.esriButtonSecondary),
        })
      ),
      d = n
        ? O(
            "div",
            null,
            n.details && n.details.httpStatus ? s.invalidUser : s.noAuthService
          )
        : null;
    return O(
      "form",
      { class: C.base, bind: this, onsubmit: this._submit },
      o,
      d,
      l,
      h,
      a
    );
  }
  _cancel() {
    this._set("signingIn", !1),
      this._usernameInputNode && (this._usernameInputNode.value = ""),
      this._passwordInputNode && (this._passwordInputNode.value = ""),
      this.emit("cancel");
  }
  _submit(n) {
    n.preventDefault(), this._set("signingIn", !0);
    const e = this.oAuthPrompt
      ? {}
      : {
          username: this._usernameInputNode && this._usernameInputNode.value,
          password: this._passwordInputNode && this._passwordInputNode.value,
        };
    this.emit("submit", e);
  }
};
m([w(), Ne("esri/identity/t9n/identity")], q.prototype, "messages", void 0),
  m([w()], q.prototype, "signingIn", void 0),
  m([w()], q.prototype, "server", void 0),
  m([w()], q.prototype, "resource", void 0),
  m([w()], q.prototype, "error", void 0),
  m([w()], q.prototype, "oAuthPrompt", void 0),
  (q = m([Y("esri.identity.IdentityForm")], q));
const it = q;
var Le = [
    "input:not([inert])",
    "select:not([inert])",
    "textarea:not([inert])",
    "a[href]:not([inert])",
    "button:not([inert])",
    "[tabindex]:not(slot):not([inert])",
    "audio[controls]:not([inert])",
    "video[controls]:not([inert])",
    '[contenteditable]:not([contenteditable="false"]):not([inert])',
    "details>summary:first-of-type:not([inert])",
    "details:not([inert])",
  ],
  ae = Le.join(","),
  Be = typeof Element > "u",
  M = Be
    ? function () {}
    : Element.prototype.matches ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector,
  se =
    !Be && Element.prototype.getRootNode
      ? function (n) {
          var e;
          return n == null || (e = n.getRootNode) === null || e === void 0
            ? void 0
            : e.call(n);
        }
      : function (n) {
          return n == null ? void 0 : n.ownerDocument;
        },
  le = function n(e, t) {
    var r;
    t === void 0 && (t = !0);
    var i =
      e == null || (r = e.getAttribute) === null || r === void 0
        ? void 0
        : r.call(e, "inert");
    return i === "" || i === "true" || (t && e && n(e.parentNode));
  },
  Ve = function (n, e, t) {
    if (le(n)) return [];
    var r = Array.prototype.slice.apply(n.querySelectorAll(ae));
    return e && M.call(n, ae) && r.unshift(n), (r = r.filter(t));
  },
  Ge = function n(e, t, r) {
    for (var i = [], s = Array.from(e); s.length; ) {
      var o = s.shift();
      if (!le(o, !1))
        if (o.tagName === "SLOT") {
          var l = o.assignedElements(),
            h = n(l.length ? l : o.children, !0, r);
          r.flatten
            ? i.push.apply(i, h)
            : i.push({ scopeParent: o, candidates: h });
        } else {
          M.call(o, ae) && r.filter(o) && (t || !e.includes(o)) && i.push(o);
          var a =
              o.shadowRoot ||
              (typeof r.getShadowRoot == "function" && r.getShadowRoot(o)),
            d = !le(a, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
          if (a && d) {
            var p = n(a === !0 ? o.children : a.children, !0, r);
            r.flatten
              ? i.push.apply(i, p)
              : i.push({ scopeParent: o, candidates: p });
          } else s.unshift.apply(s, o.children);
        }
    }
    return i;
  },
  ze = function (n, e) {
    return n.tabIndex < 0 &&
      (e ||
        /^(AUDIO|VIDEO|DETAILS)$/.test(n.tagName) ||
        (function (t) {
          var r,
            i =
              t == null || (r = t.getAttribute) === null || r === void 0
                ? void 0
                : r.call(t, "contenteditable");
          return i === "" || i === "true";
        })(n)) &&
      isNaN(parseInt(n.getAttribute("tabindex"), 10))
      ? 0
      : n.tabIndex;
  },
  nt = function (n, e) {
    return n.tabIndex === e.tabIndex
      ? n.documentOrder - e.documentOrder
      : n.tabIndex - e.tabIndex;
  },
  Me = function (n) {
    return n.tagName === "INPUT";
  },
  ot = function (n) {
    return (
      (function (e) {
        return Me(e) && e.type === "radio";
      })(n) &&
      !(function (e) {
        if (!e.name) return !0;
        var t,
          r = e.form || se(e),
          i = function (o) {
            return r.querySelectorAll('input[type="radio"][name="' + o + '"]');
          };
        if (
          typeof window < "u" &&
          typeof window.CSS < "u" &&
          typeof window.CSS.escape == "function"
        )
          t = i(window.CSS.escape(e.name));
        else
          try {
            t = i(e.name);
          } catch {
            return !1;
          }
        var s = (function (o, l) {
          for (var h = 0; h < o.length; h++)
            if (o[h].checked && o[h].form === l) return o[h];
        })(t, e.form);
        return !s || s === e;
      })(n)
    );
  },
  Ue = function (n) {
    var e = n.getBoundingClientRect(),
      t = e.width,
      r = e.height;
    return t === 0 && r === 0;
  },
  at = function (n, e) {
    var t = e.displayCheck,
      r = e.getShadowRoot;
    if (getComputedStyle(n).visibility === "hidden") return !0;
    var i = M.call(n, "details>summary:first-of-type") ? n.parentElement : n;
    if (M.call(i, "details:not([open]) *")) return !0;
    if (t && t !== "full" && t !== "legacy-full") {
      if (t === "non-zero-area") return Ue(n);
    } else {
      if (typeof r == "function") {
        for (var s = n; n; ) {
          var o = n.parentElement,
            l = se(n);
          if (o && !o.shadowRoot && r(o) === !0) return Ue(n);
          n = n.assignedSlot
            ? n.assignedSlot
            : o || l === n.ownerDocument
            ? o
            : l.host;
        }
        n = s;
      }
      if (
        (function (h) {
          var a,
            d,
            p,
            u,
            g = h && se(h),
            y = (a = g) === null || a === void 0 ? void 0 : a.host,
            S = !1;
          if (g && g !== h)
            for (
              S = !!(
                ((d = y) !== null &&
                  d !== void 0 &&
                  (p = d.ownerDocument) !== null &&
                  p !== void 0 &&
                  p.contains(y)) ||
                (h != null &&
                  (u = h.ownerDocument) !== null &&
                  u !== void 0 &&
                  u.contains(h))
              );
              !S && y;

            ) {
              var I, b, P;
              S = !(
                (b = y =
                  (I = g = se(y)) === null || I === void 0
                    ? void 0
                    : I.host) === null ||
                b === void 0 ||
                (P = b.ownerDocument) === null ||
                P === void 0 ||
                !P.contains(y)
              );
            }
          return S;
        })(n)
      )
        return !n.getClientRects().length;
      if (t !== "legacy-full") return !0;
    }
    return !1;
  },
  ce = function (n, e) {
    return !(
      e.disabled ||
      le(e) ||
      (function (t) {
        return Me(t) && t.type === "hidden";
      })(e) ||
      at(e, n) ||
      (function (t) {
        return (
          t.tagName === "DETAILS" &&
          Array.prototype.slice.apply(t.children).some(function (r) {
            return r.tagName === "SUMMARY";
          })
        );
      })(e) ||
      (function (t) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
          for (var r = t.parentElement; r; ) {
            if (r.tagName === "FIELDSET" && r.disabled) {
              for (var i = 0; i < r.children.length; i++) {
                var s = r.children.item(i);
                if (s.tagName === "LEGEND")
                  return !!M.call(r, "fieldset[disabled] *") || !s.contains(t);
              }
              return !0;
            }
            r = r.parentElement;
          }
        return !1;
      })(e)
    );
  },
  we = function (n, e) {
    return !(ot(e) || ze(e) < 0 || !ce(n, e));
  },
  lt = function (n) {
    var e = parseInt(n.getAttribute("tabindex"), 10);
    return !!(isNaN(e) || e >= 0);
  },
  ct = function n(e) {
    var t = [],
      r = [];
    return (
      e.forEach(function (i, s) {
        var o = !!i.scopeParent,
          l = o ? i.scopeParent : i,
          h = ze(l, o),
          a = o ? n(i.candidates) : l;
        h === 0
          ? o
            ? t.push.apply(t, a)
            : t.push(l)
          : r.push({
              documentOrder: s,
              tabIndex: h,
              item: i,
              isScope: o,
              content: a,
            });
      }),
      r
        .sort(nt)
        .reduce(function (i, s) {
          return s.isScope ? i.push.apply(i, s.content) : i.push(s.content), i;
        }, [])
        .concat(t)
    );
  },
  ht = function (n, e) {
    var t;
    return (
      (t = (e = e || {}).getShadowRoot
        ? Ge([n], e.includeContainer, {
            filter: we.bind(null, e),
            flatten: !1,
            getShadowRoot: e.getShadowRoot,
            shadowRootFilter: lt,
          })
        : Ve(n, e.includeContainer, we.bind(null, e))),
      ct(t)
    );
  },
  te = function (n, e) {
    if (((e = e || {}), !n)) throw new Error("No node provided");
    return M.call(n, ae) !== !1 && we(e, n);
  },
  ut = Le.concat("iframe").join(","),
  ge = function (n, e) {
    if (((e = e || {}), !n)) throw new Error("No node provided");
    return M.call(n, ut) !== !1 && ce(e, n);
  };
function Oe(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(n, i).enumerable;
      })),
      t.push.apply(t, r);
  }
  return t;
}
function xe(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Oe(Object(t), !0).forEach(function (r) {
          dt(n, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
      : Oe(Object(t)).forEach(function (r) {
          Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return n;
}
function dt(n, e, t) {
  return (
    (e = (function (r) {
      var i = (function (s, o) {
        if (typeof s != "object" || s === null) return s;
        var l = s[Symbol.toPrimitive];
        if (l !== void 0) {
          var h = l.call(s, o || "default");
          if (typeof h != "object") return h;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (o === "string" ? String : Number)(s);
      })(r, "string");
      return typeof i == "symbol" ? i : String(i);
    })(e)) in n
      ? Object.defineProperty(n, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[e] = t),
    n
  );
}
var pt = function (n, e) {
    if (n.length > 0) {
      var t = n[n.length - 1];
      t !== e && t.pause();
    }
    var r = n.indexOf(e);
    r === -1 || n.splice(r, 1), n.push(e);
  },
  ft = function (n, e) {
    var t = n.indexOf(e);
    t !== -1 && n.splice(t, 1), n.length > 0 && n[n.length - 1].unpause();
  },
  K = function (n) {
    return n.key === "Tab" || n.keyCode === 9;
  },
  vt = function (n) {
    return K(n) && !n.shiftKey;
  },
  gt = function (n) {
    return K(n) && n.shiftKey;
  },
  Pe = function (n) {
    return setTimeout(n, 0);
  },
  Re = function (n, e) {
    var t = -1;
    return (
      n.every(function (r, i) {
        return !e(r) || ((t = i), !1);
      }),
      t
    );
  },
  W = function (n) {
    for (
      var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1;
      r < e;
      r++
    )
      t[r - 1] = arguments[r];
    return typeof n == "function" ? n.apply(void 0, t) : n;
  },
  re = function (n) {
    return n.target.shadowRoot && typeof n.composedPath == "function"
      ? n.composedPath()[0]
      : n.target;
  },
  _t = [],
  mt = function (n, e) {
    var t,
      r = (e == null ? void 0 : e.document) || document,
      i = (e == null ? void 0 : e.trapStack) || _t,
      s = xe(
        {
          returnFocusOnDeactivate: !0,
          escapeDeactivates: !0,
          delayInitialFocus: !0,
          isKeyForward: vt,
          isKeyBackward: gt,
        },
        e
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
      l = function (f, c, v) {
        return f && f[c] !== void 0 ? f[c] : s[v || c];
      },
      h = function (f) {
        return o.containerGroups.findIndex(function (c) {
          var v = c.container,
            _ = c.tabbableNodes;
          return (
            v.contains(f) ||
            _.find(function (k) {
              return k === f;
            })
          );
        });
      },
      a = function (f) {
        var c = s[f];
        if (typeof c == "function") {
          for (
            var v = arguments.length, _ = new Array(v > 1 ? v - 1 : 0), k = 1;
            k < v;
            k++
          )
            _[k - 1] = arguments[k];
          c = c.apply(void 0, _);
        }
        if ((c === !0 && (c = void 0), !c)) {
          if (c === void 0 || c === !1) return c;
          throw new Error(
            "`".concat(
              f,
              "` was specified but was not a node, or did not return a node"
            )
          );
        }
        var R = c;
        if (typeof c == "string" && !(R = r.querySelector(c)))
          throw new Error(
            "`".concat(f, "` as selector refers to no known node")
          );
        return R;
      },
      d = function () {
        var f = a("initialFocus");
        if (f === !1) return !1;
        if (f === void 0)
          if (h(r.activeElement) >= 0) f = r.activeElement;
          else {
            var c = o.tabbableGroups[0];
            f = (c && c.firstTabbableNode) || a("fallbackFocus");
          }
        if (!f)
          throw new Error(
            "Your focus-trap needs to have at least one focusable element"
          );
        return f;
      },
      p = function () {
        if (
          ((o.containerGroups = o.containers.map(function (f) {
            var c,
              v,
              _ = ht(f, s.tabbableOptions),
              k =
                ((c = f),
                (v = (v = s.tabbableOptions) || {}).getShadowRoot
                  ? Ge([c], v.includeContainer, {
                      filter: ce.bind(null, v),
                      flatten: !0,
                      getShadowRoot: v.getShadowRoot,
                    })
                  : Ve(c, v.includeContainer, ce.bind(null, v)));
            return {
              container: f,
              tabbableNodes: _,
              focusableNodes: k,
              firstTabbableNode: _.length > 0 ? _[0] : null,
              lastTabbableNode: _.length > 0 ? _[_.length - 1] : null,
              nextTabbableNode: function (R) {
                var N =
                    !(arguments.length > 1 && arguments[1] !== void 0) ||
                    arguments[1],
                  j = k.findIndex(function (V) {
                    return V === R;
                  });
                if (!(j < 0))
                  return N
                    ? k.slice(j + 1).find(function (V) {
                        return te(V, s.tabbableOptions);
                      })
                    : k
                        .slice(0, j)
                        .reverse()
                        .find(function (V) {
                          return te(V, s.tabbableOptions);
                        });
              },
            };
          })),
          (o.tabbableGroups = o.containerGroups.filter(function (f) {
            return f.tabbableNodes.length > 0;
          })),
          o.tabbableGroups.length <= 0 && !a("fallbackFocus"))
        )
          throw new Error(
            "Your focus-trap must have at least one container with at least one tabbable node in it at all times"
          );
      },
      u = function f(c) {
        c !== !1 &&
          c !== r.activeElement &&
          (c && c.focus
            ? (c.focus({ preventScroll: !!s.preventScroll }),
              (o.mostRecentlyFocusedNode = c),
              (function (v) {
                return (
                  v.tagName &&
                  v.tagName.toLowerCase() === "input" &&
                  typeof v.select == "function"
                );
              })(c) && c.select())
            : f(d()));
      },
      g = function (f) {
        var c = a("setReturnFocus", f);
        return c || (c !== !1 && f);
      },
      y = function (f) {
        var c = re(f);
        h(c) >= 0 ||
          (W(s.clickOutsideDeactivates, f)
            ? t.deactivate({
                returnFocus:
                  s.returnFocusOnDeactivate && !ge(c, s.tabbableOptions),
              })
            : W(s.allowOutsideClick, f) || f.preventDefault());
      },
      S = function (f) {
        var c = re(f),
          v = h(c) >= 0;
        v || c instanceof Document
          ? v && (o.mostRecentlyFocusedNode = c)
          : (f.stopImmediatePropagation(), u(o.mostRecentlyFocusedNode || d()));
      },
      I = function (f) {
        if (
          (function (c) {
            return c.key === "Escape" || c.key === "Esc" || c.keyCode === 27;
          })(f) &&
          W(s.escapeDeactivates, f) !== !1
        )
          return f.preventDefault(), void t.deactivate();
        (s.isKeyForward(f) || s.isKeyBackward(f)) &&
          (function (c) {
            var v =
                arguments.length > 1 && arguments[1] !== void 0 && arguments[1],
              _ = re(c);
            p();
            var k = null;
            if (o.tabbableGroups.length > 0) {
              var R = h(_),
                N = R >= 0 ? o.containerGroups[R] : void 0;
              if (R < 0)
                k = v
                  ? o.tabbableGroups[o.tabbableGroups.length - 1]
                      .lastTabbableNode
                  : o.tabbableGroups[0].firstTabbableNode;
              else if (v) {
                var j = Re(o.tabbableGroups, function (he) {
                  var ue = he.firstTabbableNode;
                  return _ === ue;
                });
                if (
                  (j < 0 &&
                    (N.container === _ ||
                      (ge(_, s.tabbableOptions) &&
                        !te(_, s.tabbableOptions) &&
                        !N.nextTabbableNode(_, !1))) &&
                    (j = R),
                  j >= 0)
                ) {
                  var V = j === 0 ? o.tabbableGroups.length - 1 : j - 1;
                  k = o.tabbableGroups[V].lastTabbableNode;
                } else K(c) || (k = N.nextTabbableNode(_, !1));
              } else {
                var H = Re(o.tabbableGroups, function (he) {
                  var ue = he.lastTabbableNode;
                  return _ === ue;
                });
                if (
                  (H < 0 &&
                    (N.container === _ ||
                      (ge(_, s.tabbableOptions) &&
                        !te(_, s.tabbableOptions) &&
                        !N.nextTabbableNode(_))) &&
                    (H = R),
                  H >= 0)
                ) {
                  var We = H === o.tabbableGroups.length - 1 ? 0 : H + 1;
                  k = o.tabbableGroups[We].firstTabbableNode;
                } else K(c) || (k = N.nextTabbableNode(_));
              }
            } else k = a("fallbackFocus");
            k && (K(c) && c.preventDefault(), u(k));
          })(f, s.isKeyBackward(f));
      },
      b = function (f) {
        var c = re(f);
        h(c) >= 0 ||
          W(s.clickOutsideDeactivates, f) ||
          W(s.allowOutsideClick, f) ||
          (f.preventDefault(), f.stopImmediatePropagation());
      },
      P = function () {
        if (o.active)
          return (
            pt(i, t),
            (o.delayInitialFocusTimer = s.delayInitialFocus
              ? Pe(function () {
                  u(d());
                })
              : u(d())),
            r.addEventListener("focusin", S, !0),
            r.addEventListener("mousedown", y, { capture: !0, passive: !1 }),
            r.addEventListener("touchstart", y, { capture: !0, passive: !1 }),
            r.addEventListener("click", b, { capture: !0, passive: !1 }),
            r.addEventListener("keydown", I, { capture: !0, passive: !1 }),
            t
          );
      },
      $ = function () {
        if (o.active)
          return (
            r.removeEventListener("focusin", S, !0),
            r.removeEventListener("mousedown", y, !0),
            r.removeEventListener("touchstart", y, !0),
            r.removeEventListener("click", b, !0),
            r.removeEventListener("keydown", I, !0),
            t
          );
      };
    return (
      (t = {
        get active() {
          return o.active;
        },
        get paused() {
          return o.paused;
        },
        activate: function (f) {
          if (o.active) return this;
          var c = l(f, "onActivate"),
            v = l(f, "onPostActivate"),
            _ = l(f, "checkCanFocusTrap");
          _ || p(),
            (o.active = !0),
            (o.paused = !1),
            (o.nodeFocusedBeforeActivation = r.activeElement),
            c && c();
          var k = function () {
            _ && p(), P(), v && v();
          };
          return _ ? (_(o.containers.concat()).then(k, k), this) : (k(), this);
        },
        deactivate: function (f) {
          if (!o.active) return this;
          var c = xe(
            {
              onDeactivate: s.onDeactivate,
              onPostDeactivate: s.onPostDeactivate,
              checkCanReturnFocus: s.checkCanReturnFocus,
            },
            f
          );
          clearTimeout(o.delayInitialFocusTimer),
            (o.delayInitialFocusTimer = void 0),
            $(),
            (o.active = !1),
            (o.paused = !1),
            ft(i, t);
          var v = l(c, "onDeactivate"),
            _ = l(c, "onPostDeactivate"),
            k = l(c, "checkCanReturnFocus"),
            R = l(c, "returnFocus", "returnFocusOnDeactivate");
          v && v();
          var N = function () {
            Pe(function () {
              R && u(g(o.nodeFocusedBeforeActivation)), _ && _();
            });
          };
          return R && k
            ? (k(g(o.nodeFocusedBeforeActivation)).then(N, N), this)
            : (N(), this);
        },
        pause: function () {
          return o.paused || !o.active || ((o.paused = !0), $()), this;
        },
        unpause: function () {
          return o.paused && o.active
            ? ((o.paused = !1), p(), P(), this)
            : this;
        },
        updateContainerElements: function (f) {
          var c = [].concat(f).filter(Boolean);
          return (
            (o.containers = c.map(function (v) {
              return typeof v == "string" ? r.querySelector(v) : v;
            })),
            o.active && p(),
            this
          );
        },
      }).updateContainerElements(n),
      t
    );
  };
const G = "esri-identity-modal",
  E = {
    base: G,
    open: `${G}--open`,
    closed: `${G}--closed`,
    title: `${G}__title`,
    dialog: `${G}__dialog`,
    content: `${G}__content`,
    closeButton: `${G}__close-button`,
    iconClose: "esri-icon-close",
  };
let B = class extends Ee {
  constructor(n, e) {
    super(n, e),
      (this.container = document.createElement("div")),
      (this.content = null),
      (this.open = !1),
      (this._focusTrap = null),
      (this._close = () => {
        this.open = !1;
      }),
      document.body.appendChild(this.container),
      this.addHandles(
        ye(
          () => this.open,
          () => this._toggleFocusTrap()
        )
      );
  }
  destroy() {
    this._destroyFocusTrap();
  }
  get title() {
    var n;
    return (n = this.messages) == null ? void 0 : n.auth.signIn;
  }
  render() {
    const n = this.id,
      { open: e, content: t, title: r, messages: i } = this,
      s = e && !!t,
      o = { [E.open]: s, [E.closed]: !s },
      l = O(
        "button",
        {
          class: E.closeButton,
          "aria-label": i.close,
          title: i.close,
          bind: this,
          onclick: this._close,
          type: "button",
        },
        O("span", { "aria-hidden": "true", class: E.iconClose })
      ),
      h = `${n}_title`,
      a = `${n}_content`,
      d = r ? O("h1", { id: h, class: E.title }, r) : null,
      p = s
        ? O(
            "div",
            {
              bind: this,
              class: E.dialog,
              role: "dialog",
              "aria-labelledby": h,
              "aria-describedby": a,
              afterCreate: this._createFocusTrap,
            },
            l,
            d,
            this._renderContent(a)
          )
        : null;
    return O("div", { tabIndex: -1, class: this.classes(E.base, o) }, p);
  }
  _destroyFocusTrap() {
    var n;
    (n = this._focusTrap) == null || n.deactivate({ onDeactivate: () => {} }),
      (this._focusTrap = null);
  }
  _toggleFocusTrap() {
    const { _focusTrap: n, open: e } = this;
    n && (e ? n.activate() : n.deactivate());
  }
  _createFocusTrap(n) {
    this._destroyFocusTrap();
    const e = requestAnimationFrame(() => {
      (this._focusTrap = mt(n, {
        initialFocus: "input",
        onDeactivate: this._close,
      })),
        this._toggleFocusTrap();
    });
    this.addHandles(Ye(() => cancelAnimationFrame(e)));
  }
  _renderContent(n) {
    const e = this.content;
    return typeof e == "string"
      ? O("div", { class: E.content, id: n, innerHTML: e })
      : Xe(e)
      ? O("div", { class: E.content, id: n }, e.render())
      : e instanceof HTMLElement
      ? O("div", {
          class: E.content,
          id: n,
          bind: e,
          afterCreate: this._attachToNode,
        })
      : null;
  }
  _attachToNode(n) {
    n.appendChild(this);
  }
};
m([w({ readOnly: !0 })], B.prototype, "container", void 0),
  m([w()], B.prototype, "content", void 0),
  m([w()], B.prototype, "open", void 0),
  m([w(), Ne("esri/t9n/common")], B.prototype, "messages", void 0),
  m([w()], B.prototype, "title", null),
  (B = m([Y("esri.identity.IdentityModal")], B));
const Ce = B,
  _e = "esriJSAPIOAuth";
class Se {
  constructor(e, t) {
    (this.oAuthInfo = null),
      (this.storage = null),
      (this.appId = null),
      (this.codeVerifier = null),
      (this.expires = null),
      (this.refreshToken = null),
      (this.ssl = null),
      (this.stateUID = null),
      (this.token = null),
      (this.userId = null),
      (this.oAuthInfo = e),
      (this.storage = t),
      this._init();
  }
  isValid() {
    let e = !1;
    if (this.oAuthInfo && this.userId && (this.refreshToken || this.token)) {
      if (this.expires == null && this.refreshToken) e = !0;
      else if (this.expires) {
        const t = Date.now();
        this.expires > t &&
          (this.expires - t) / 1e3 >
            60 * this.oAuthInfo.minTimeUntilExpiration &&
          (e = !0);
      }
    }
    return e;
  }
  save() {
    if (!this.storage) return !1;
    const e = this._load(),
      t = this.oAuthInfo;
    if (t && t.authNamespace && t.portalUrl) {
      let r = e[t.authNamespace];
      r || (r = e[t.authNamespace] = {}),
        this.appId || (this.appId = t.appId),
        (r[t.portalUrl] = {
          appId: this.appId,
          codeVerifier: this.codeVerifier,
          expires: this.expires,
          refreshToken: this.refreshToken,
          ssl: this.ssl,
          stateUID: this.stateUID,
          token: this.token,
          userId: this.userId,
        });
      try {
        this.storage.setItem(_e, JSON.stringify(e));
      } catch {
        return !1;
      }
      return !0;
    }
    return !1;
  }
  destroy() {
    const e = this._load(),
      t = this.oAuthInfo;
    if (
      t &&
      t.appId &&
      t.portalUrl &&
      (this.expires == null || this.expires > Date.now()) &&
      (this.refreshToken || this.token)
    ) {
      const r =
          t.portalUrl.replace(/^http:/i, "https:") +
          "/sharing/rest/oauth2/revokeToken",
        i = new FormData();
      if (
        (i.append("f", "json"),
        i.append("auth_token", this.refreshToken || this.token),
        i.append("client_id", t.appId),
        i.append(
          "token_type_hint",
          this.refreshToken ? "refresh_token" : "access_token"
        ),
        typeof navigator.sendBeacon == "function")
      )
        navigator.sendBeacon(r, i);
      else {
        const s = new XMLHttpRequest();
        s.open("POST", r), s.send(i);
      }
    }
    if (t && t.authNamespace && t.portalUrl && this.storage) {
      const r = e[t.authNamespace];
      if (r) {
        delete r[t.portalUrl];
        try {
          this.storage.setItem(_e, JSON.stringify(e));
        } catch {}
      }
    }
    t && ((t._oAuthCred = null), (this.oAuthInfo = null));
  }
  _init() {
    const e = this._load(),
      t = this.oAuthInfo;
    if (t && t.authNamespace && t.portalUrl) {
      let r = e[t.authNamespace];
      r &&
        ((r = r[t.portalUrl]),
        r &&
          ((this.appId = r.appId),
          (this.codeVerifier = r.codeVerifier),
          (this.expires = r.expires),
          (this.refreshToken = r.refreshToken),
          (this.ssl = r.ssl),
          (this.stateUID = r.stateUID),
          (this.token = r.token),
          (this.userId = r.userId)));
    }
  }
  _load() {
    let e = {};
    if (this.storage) {
      const t = this.storage.getItem(_e);
      if (t)
        try {
          e = JSON.parse(t);
        } catch {}
    }
    return e;
  }
}
var Ie;
Se.prototype.declaredClass = "esri.identity.OAuthCredential";
let x = (Ie = class extends je {
  constructor(n) {
    super(n),
      (this._oAuthCred = null),
      (this.appId = null),
      (this.authNamespace = "/"),
      (this.expiration = 20160),
      (this.flowType = "auto"),
      (this.forceLogin = !1),
      (this.forceUserId = !1),
      (this.locale = null),
      (this.minTimeUntilExpiration = 30),
      (this.popup = !1),
      (this.popupCallbackUrl = "oauth-callback.html"),
      (this.popupWindowFeatures =
        "height=490,width=800,resizable,scrollbars,status"),
      (this.portalUrl = "https://www.arcgis.com"),
      (this.preserveUrlHash = !1),
      (this.userId = null);
  }
  clone() {
    return Ie.fromJSON(this.toJSON());
  }
});
m([w({ json: { write: !0 } })], x.prototype, "appId", void 0),
  m([w({ json: { write: !0 } })], x.prototype, "authNamespace", void 0),
  m([w({ json: { write: !0 } })], x.prototype, "expiration", void 0),
  m([w({ json: { write: !0 } })], x.prototype, "flowType", void 0),
  m([w({ json: { write: !0 } })], x.prototype, "forceLogin", void 0),
  m([w({ json: { write: !0 } })], x.prototype, "forceUserId", void 0),
  m([w({ json: { write: !0 } })], x.prototype, "locale", void 0),
  m(
    [w({ json: { write: !0 } })],
    x.prototype,
    "minTimeUntilExpiration",
    void 0
  ),
  m([w({ json: { write: !0 } })], x.prototype, "popup", void 0),
  m([w({ json: { write: !0 } })], x.prototype, "popupCallbackUrl", void 0),
  m([w({ json: { write: !0 } })], x.prototype, "popupWindowFeatures", void 0),
  m([w({ json: { write: !0 } })], x.prototype, "portalUrl", void 0),
  m([w({ json: { write: !0 } })], x.prototype, "preserveUrlHash", void 0),
  m([w({ json: { write: !0 } })], x.prototype, "userId", void 0),
  (x = Ie = m([Y("esri.identity.OAuthInfo")], x));
const De = x;
let D = class extends je {
  constructor(n) {
    super(n),
      (this.adminTokenServiceUrl = null),
      (this.currentVersion = null),
      (this.hasPortal = null),
      (this.hasServer = null),
      (this.owningSystemUrl = null),
      (this.owningTenant = null),
      (this.server = null),
      (this.shortLivedTokenValidity = null),
      (this.tokenServiceUrl = null),
      (this.webTierAuth = null);
  }
};
m([w({ json: { write: !0 } })], D.prototype, "adminTokenServiceUrl", void 0),
  m([w({ json: { write: !0 } })], D.prototype, "currentVersion", void 0),
  m([w({ json: { write: !0 } })], D.prototype, "hasPortal", void 0),
  m([w({ json: { write: !0 } })], D.prototype, "hasServer", void 0),
  m([w({ json: { write: !0 } })], D.prototype, "owningSystemUrl", void 0),
  m([w({ json: { write: !0 } })], D.prototype, "owningTenant", void 0),
  m([w({ json: { write: !0 } })], D.prototype, "server", void 0),
  m(
    [w({ json: { write: !0 } })],
    D.prototype,
    "shortLivedTokenValidity",
    void 0
  ),
  m([w({ json: { write: !0 } })], D.prototype, "tokenServiceUrl", void 0),
  m([w({ json: { write: !0 } })], D.prototype, "webTierAuth", void 0),
  (D = m([Y("esri.identity.ServerInfo")], D));
const me = D,
  ie = {},
  $e = (n) => {
    const e = new z(n.owningSystemUrl).host,
      t = new z(n.server).host,
      r = /.+\.arcgis\.com$/i;
    return r.test(e) && r.test(t);
  },
  be = (n, e) => !!($e(n) && e && e.some((t) => t.test(n.server)));
let ne = null,
  oe = null;
try {
  (ne = window.localStorage), (oe = window.sessionStorage);
} catch {}
class He extends Fe {
  constructor() {
    super(),
      (this._portalConfig = globalThis.esriGeowConfig),
      (this.serverInfos = []),
      (this.oAuthInfos = []),
      (this.credentials = []),
      (this._soReqs = []),
      (this._xoReqs = []),
      (this._portals = []),
      (this._defaultOAuthInfo = null),
      (this._defaultTokenValidity = 60),
      (this.dialog = null),
      (this.formConstructor = it),
      (this.tokenValidity = null),
      (this.normalizeWebTierAuth = !1),
      (this._appOrigin =
        window.origin !== "null" ? window.origin : window.location.origin),
      (this._appUrlObj = de(window.location.href)),
      (this._busy = null),
      (this._rejectOnPersistedPageShow = !1),
      (this._oAuthLocationParams = null),
      (this._gwTokenUrl = "/sharing/rest/generateToken"),
      (this._agsRest = "/rest/services"),
      (this._agsPortal = /\/sharing(\/|$)/i),
      (this._agsAdmin = /(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i),
      (this._adminSvcs = /\/rest\/admin\/services(\/|$)/i),
      (this._gwDomains = [
        {
          regex: /^https?:\/\/www\.arcgis\.com/i,
          customBaseUrl: "maps.arcgis.com",
          tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken",
        },
        {
          regex: /^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,
          customBaseUrl: "mapsdev.arcgis.com",
          tokenServiceUrl: "https://dev.arcgis.com/sharing/rest/generateToken",
        },
        {
          regex: /^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,
          customBaseUrl: "mapsdevext.arcgis.com",
          tokenServiceUrl:
            "https://devext.arcgis.com/sharing/rest/generateToken",
        },
        {
          regex: /^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,
          customBaseUrl: "mapsqa.arcgis.com",
          tokenServiceUrl:
            "https://qaext.arcgis.com/sharing/rest/generateToken",
        },
        {
          regex: /^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,
          customBaseUrl: "maps.arcgis.com",
          tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken",
        },
      ]),
      (this._legacyFed = []),
      (this._regexSDirUrl = /http.+\/rest\/services\/?/gi),
      (this._regexServerType =
        /(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|KnowledgeGraphServer|MapServer|MissionServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer|VideoServer)).*/gi),
      (this._gwUser = /http.+\/users\/([^\/]+)\/?.*/i),
      (this._gwItem = /http.+\/items\/([^\/]+)\/?.*/i),
      (this._gwGroup = /http.+\/groups\/([^\/]+)\/?.*/i),
      (this._rePortalTokenSvc = /\/sharing(\/rest)?\/generatetoken/i),
      (this._createDefaultOAuthInfo = !0),
      (this._hasTestedIfAppIsOnPortal = !1),
      this._getOAuthLocationParams(),
      window.addEventListener("pageshow", (e) => {
        this._pageShowHandler(e);
      });
  }
  registerServers(e) {
    const t = this.serverInfos;
    t
      ? ((e = e.filter((r) => !this.findServerInfo(r.server))),
        (this.serverInfos = t.concat(e)))
      : (this.serverInfos = e),
      e.forEach((r) => {
        r.owningSystemUrl && this._portals.push(r.owningSystemUrl),
          r.hasPortal && this._portals.push(r.server);
      });
  }
  registerOAuthInfos(e) {
    const t = this.oAuthInfos;
    if (t) {
      for (const r of e) {
        const i = this.findOAuthInfo(r.portalUrl);
        i && t.splice(t.indexOf(i), 1);
      }
      this.oAuthInfos = t.concat(e);
    } else this.oAuthInfos = e;
  }
  registerToken(e) {
    e = { ...e };
    const t = this._sanitizeUrl(e.server),
      r = this._isServerRsrc(t);
    let i,
      s = this.findServerInfo(t),
      o = !0;
    s ||
      ((s = new me()),
      (s.server = this._getServerInstanceRoot(t)),
      r
        ? (s.hasServer = !0)
        : ((s.tokenServiceUrl = this._getTokenSvcUrl(t)), (s.hasPortal = !0)),
      this.registerServers([s])),
      (i = this._findCredential(t)),
      i
        ? (delete e.server, Object.assign(i, e), (o = !1))
        : ((i = new A({
            userId: e.userId,
            server: s.server,
            token: e.token,
            expires: e.expires,
            ssl: e.ssl,
            scope: r ? "server" : "portal",
          })),
          (i.resources = [t]),
          this.credentials.push(i)),
      i.emitTokenChange(!1),
      o || i.refreshServerTokens();
  }
  toJSON() {
    return qe({
      serverInfos: this.serverInfos.map((e) => e.toJSON()),
      oAuthInfos: this.oAuthInfos.map((e) => e.toJSON()),
      credentials: this.credentials.map((e) => e.toJSON()),
    });
  }
  initialize(e) {
    if (!e) return;
    typeof e == "string" && (e = JSON.parse(e));
    const t = e.serverInfos,
      r = e.oAuthInfos,
      i = e.credentials;
    if (t) {
      const s = [];
      t.forEach((o) => {
        o.server &&
          o.tokenServiceUrl &&
          s.push(o.declaredClass ? o : new me(o));
      }),
        s.length && this.registerServers(s);
    }
    if (r) {
      const s = [];
      r.forEach((o) => {
        o.appId && s.push(o.declaredClass ? o : new De(o));
      }),
        s.length && this.registerOAuthInfos(s);
    }
    i &&
      i.forEach((s) => {
        s.server &&
          s.token &&
          s.expires &&
          s.expires > Date.now() &&
          ((s = s.declaredClass ? s : new A(s)).emitTokenChange(),
          this.credentials.push(s));
      });
  }
  findServerInfo(e) {
    let t;
    e = this._sanitizeUrl(e);
    for (const r of this.serverInfos)
      if (this._hasSameServerInstance(r.server, e)) {
        t = r;
        break;
      }
    return t;
  }
  findOAuthInfo(e) {
    let t;
    e = this._sanitizeUrl(e);
    for (const r of this.oAuthInfos)
      if (this._hasSameServerInstance(r.portalUrl, e)) {
        t = r;
        break;
      }
    return t;
  }
  findCredential(e, t) {
    if (!e) return;
    let r;
    e = this._sanitizeUrl(e);
    const i = this._isServerRsrc(e) ? "server" : "portal";
    if (t) {
      for (const s of this.credentials)
        if (
          this._hasSameServerInstance(s.server, e) &&
          t === s.userId &&
          s.scope === i
        ) {
          r = s;
          break;
        }
    } else
      for (const s of this.credentials)
        if (
          this._hasSameServerInstance(s.server, e) &&
          this._getIdenticalSvcIdx(e, s) !== -1 &&
          s.scope === i
        ) {
          r = s;
          break;
        }
    return r;
  }
  getCredential(e, t) {
    let r,
      i,
      s = !0;
    t && ((r = !!t.token), (i = t.error), (s = t.prompt !== !1)),
      (t = { ...t }),
      (e = this._sanitizeUrl(e));
    const o = new AbortController(),
      l = X();
    if (
      (t.signal &&
        J(t.signal, () => {
          o.abort();
        }),
      J(o, () => {
        l.reject(new U("identity-manager:user-aborted", "ABORTED"));
      }),
      Qe(o))
    )
      return l.promise;
    t.signal = o.signal;
    const h = this._isAdminResource(e),
      a = r ? this.findCredential(e) : null;
    let d;
    if (a && i && i.details && i.details.httpStatus === 498) a.destroy();
    else if (a)
      return (
        (d = new U(
          "identity-manager:not-authorized",
          "You are currently signed in as: '" +
            a.userId +
            "'. You do not have access to this resource: " +
            e,
          { error: i }
        )),
        l.reject(d),
        l.promise
      );
    const p = this._findCredential(e, t);
    if (p) return l.resolve(p), l.promise;
    let u = this.findServerInfo(e);
    if (u)
      !u.hasServer &&
        this._isServerRsrc(e) &&
        ((u._restInfoPms = this._getTokenSvcUrl(e)), (u.hasServer = !0));
    else {
      const g = this._getTokenSvcUrl(e);
      if (!g)
        return (
          (d = new U(
            "identity-manager:unknown-resource",
            "Unknown resource - could not find token service endpoint."
          )),
          l.reject(d),
          l.promise
        );
      (u = new me()),
        (u.server = this._getServerInstanceRoot(e)),
        typeof g == "string"
          ? ((u.tokenServiceUrl = g), (u.hasPortal = !0))
          : ((u._restInfoPms = g), (u.hasServer = !0)),
        this.registerServers([u]);
    }
    return (
      u.hasPortal &&
        u._selfReq === void 0 &&
        (s ||
          L(u.tokenServiceUrl, this._appOrigin) ||
          this._gwDomains.some(
            (g) => g.tokenServiceUrl === u.tokenServiceUrl
          )) &&
        (u._selfReq = {
          owningTenant: t && t.owningTenant,
          selfDfd: this._getPortalSelf(
            u.tokenServiceUrl.replace(
              this._rePortalTokenSvc,
              "/sharing/rest/portals/self"
            ),
            e
          ),
        }),
      this._enqueue(e, u, t, l, h)
    );
  }
  getResourceName(e) {
    return this._isRESTService(e)
      ? e.replace(this._regexSDirUrl, "").replace(this._regexServerType, "") ||
          ""
      : (this._gwUser.test(e) && e.replace(this._gwUser, "$1")) ||
          (this._gwItem.test(e) && e.replace(this._gwItem, "$1")) ||
          (this._gwGroup.test(e) && e.replace(this._gwGroup, "$1")) ||
          "";
  }
  generateToken(e, t, r) {
    const i = this._rePortalTokenSvc.test(e.tokenServiceUrl),
      s = new z(this._appOrigin),
      o = e.shortLivedTokenValidity;
    let l, h, a, d, p, u, g, y;
    t &&
      ((y = this.tokenValidity || o || this._defaultTokenValidity),
      y > o && o > 0 && (y = o)),
      r &&
        ((l = r.isAdmin),
        (h = r.serverUrl),
        (a = r.token),
        (u = r.signal),
        (g = r.ssl),
        (e.customParameters = r.customParameters)),
      l
        ? (d = e.adminTokenServiceUrl)
        : ((d = e.tokenServiceUrl),
          (p = new z(d.toLowerCase())),
          e.webTierAuth &&
            r != null &&
            r.serverUrl &&
            !g &&
            s.scheme === "http" &&
            (L(s.uri, d, !0) ||
              (p.scheme === "https" &&
                s.host === p.host &&
                s.port === "7080" &&
                p.port === "7443")) &&
            (d = d.replace(/^https:/i, "http:").replace(/:7443/i, ":7080")));
    const S = {
      query: {
        request: "getToken",
        username: t == null ? void 0 : t.username,
        password: t == null ? void 0 : t.password,
        serverUrl: h,
        token: a,
        expiration: y,
        referer: l || i ? this._appOrigin : null,
        client: l ? "referer" : null,
        f: "json",
        ...e.customParameters,
      },
      method: "post",
      authMode: "anonymous",
      useProxy: this._useProxy(e, r),
      signal: u,
      ...(r == null ? void 0 : r.ioArgs),
    };
    return (
      i || (S.withCredentials = !1),
      F(d, S).then((I) => {
        const b = I.data;
        if (!b || !b.token)
          return new U(
            "identity-manager:authentication-failed",
            "Unable to generate token"
          );
        const P = e.server;
        return (
          ie[P] || (ie[P] = {}),
          t && (ie[P][t.username] = t.password),
          (b.validity = y),
          b
        );
      })
    );
  }
  isBusy() {
    return !!this._busy;
  }
  checkSignInStatus(e) {
    return this.checkAppAccess(e, "").then((t) => t.credential);
  }
  checkAppAccess(e, t, r) {
    let i = !1;
    return this.getCredential(e, { prompt: !1 })
      .then((s) => {
        let o;
        const l = { f: "json" };
        if (s.scope === "portal")
          if (t && (this._doPortalSignIn(e) || (r && r.force)))
            (o = s.server + "/sharing/rest/oauth2/validateAppAccess"),
              (l.client_id = t);
          else {
            if (!s.token) return { credential: s };
            o = s.server + "/sharing/rest";
          }
        else {
          if (!s.token) return { credential: s };
          o = s.server + "/rest/services";
        }
        return (
          s.token && (l.token = s.token),
          F(o, { query: l, authMode: "anonymous" })
            .then((h) => {
              if (h.data.valid === !1)
                throw new U(
                  "identity-manager:not-authorized",
                  `You are currently signed in as: '${s.userId}'.`,
                  h.data
                );
              return (i = !!h.data.viewOnlyUserTypeApp), { credential: s };
            })
            .catch((h) => {
              if (h.name === "identity-manager:not-authorized") throw h;
              const a = h.details && h.details.httpStatus;
              if (a === 498)
                throw (
                  (s.destroy(),
                  new U(
                    "identity-manager:not-authenticated",
                    "User is not signed in."
                  ))
                );
              if (a === 400) throw new U("identity-manager:invalid-request");
              return { credential: s };
            })
        );
      })
      .then((s) => ({ credential: s.credential, viewOnly: i }));
  }
  setOAuthResponseHash(e) {
    e &&
      (e.charAt(0) === "#" && (e = e.substring(1)),
      this._processOAuthPopupParams(Q(e)));
  }
  setOAuthRedirectionHandler(e) {
    this._oAuthRedirectFunc = e;
  }
  setProtocolErrorHandler(e) {
    this._protocolFunc = e;
  }
  signIn(e, t, r = {}) {
    const i = X(),
      s = () => {
        var p;
        h == null || h.remove(),
          a == null || a.remove(),
          d == null || d.remove(),
          l == null || l.destroy(),
          (p = this.dialog) == null || p.destroy(),
          (this.dialog = l = h = a = d = null);
      },
      o = () => {
        s(),
          (this._oAuthDfd = null),
          i.reject(new U("identity-manager:user-aborted", "ABORTED"));
      };
    r.signal &&
      J(r.signal, () => {
        o();
      });
    let l = new this.formConstructor();
    (l.resource = this.getResourceName(e)),
      (l.server = t.server),
      (this.dialog = new Ce()),
      (this.dialog.content = l),
      (this.dialog.open = !0),
      this.emit("dialog-create");
    let h = l.on("cancel", o),
      a = ye(() => this.dialog.open, o),
      d = l.on("submit", (p) => {
        this.generateToken(t, p, { isAdmin: r.isAdmin, signal: r.signal })
          .then((u) => {
            s();
            const g = new A({
              userId: p.username,
              server: t.server,
              token: u.token,
              expires: u.expires != null ? Number(u.expires) : null,
              ssl: !!u.ssl,
              isAdmin: r.isAdmin,
              validity: u.validity,
            });
            i.resolve(g);
          })
          .catch((u) => {
            (l.error = u), (l.signingIn = !1);
          });
      });
    return i.promise;
  }
  oAuthSignIn(e, t, r, i) {
    this._oAuthDfd = X();
    const s = this._oAuthDfd;
    let o;
    i != null &&
      i.signal &&
      J(i.signal, () => {
        const y = this._oAuthDfd && this._oAuthDfd.oAuthWin_;
        y && !y.closed ? y.close() : this.dialog && u();
      }),
      (s.resUrl_ = e),
      (s.sinfo_ = t),
      (s.oinfo_ = r);
    const l = r._oAuthCred;
    if (
      l.storage &&
      (r.flowType === "authorization-code" ||
        (r.flowType === "auto" && !r.popup && t.currentVersion >= 8.4))
    ) {
      let y = crypto.getRandomValues(new Uint8Array(32));
      (o = pe(y)),
        (l.codeVerifier = o),
        (y = crypto.getRandomValues(new Uint8Array(32))),
        (l.stateUID = pe(y)),
        l.save() || (l.codeVerifier = o = null);
    } else l.codeVerifier = null;
    let h, a, d, p;
    this._getCodeChallenge(o).then((y) => {
      const S = !i || i.oAuthPopupConfirmation !== !1;
      r.popup && S
        ? ((h = new this.formConstructor()),
          (h.oAuthPrompt = !0),
          (h.server = t.server),
          (this.dialog = new Ce()),
          (this.dialog.content = h),
          (this.dialog.open = !0),
          this.emit("dialog-create"),
          (a = h.on("cancel", u)),
          (d = ye(() => this.dialog.open, u)),
          (p = h.on("submit", () => {
            g(), this._doOAuthSignIn(e, t, r, y);
          })))
        : this._doOAuthSignIn(e, t, r, y);
    });
    const u = () => {
        g(),
          (this._oAuthDfd = null),
          s.reject(new U("identity-manager:user-aborted", "ABORTED"));
      },
      g = () => {
        var y;
        a == null || a.remove(),
          d == null || d.remove(),
          p == null || p.remove(),
          h == null || h.destroy(),
          (y = this.dialog) == null || y.destroy(),
          (this.dialog = null);
      };
    return s.promise;
  }
  destroyCredentials() {
    this.credentials &&
      this.credentials.slice().forEach((e) => {
        e.destroy();
      }),
      this.emit("credentials-destroy");
  }
  enablePostMessageAuth(e = "https://www.arcgis.com/sharing/rest") {
    this._postMessageAuthHandle && this._postMessageAuthHandle.remove(),
      (this._postMessageAuthHandle = fe(window, "message", (t) => {
        var r;
        if (
          (t.origin === this._appOrigin || t.origin.endsWith(".arcgis.com")) &&
          ((r = t.data) == null ? void 0 : r.type) ===
            "arcgis:auth:requestCredential"
        ) {
          const i = t.source;
          this.getCredential(e)
            .then((s) => {
              i.postMessage(
                {
                  type: "arcgis:auth:credential",
                  credential: {
                    expires: s.expires,
                    server: s.server,
                    ssl: s.ssl,
                    token: s.token,
                    userId: s.userId,
                  },
                },
                t.origin
              );
            })
            .catch((s) => {
              i.postMessage(
                {
                  type: "arcgis:auth:error",
                  error: { name: s.name, message: s.message },
                },
                t.origin
              );
            });
        }
      }));
  }
  disablePostMessageAuth() {
    this._postMessageAuthHandle &&
      (this._postMessageAuthHandle.remove(),
      (this._postMessageAuthHandle = null));
  }
  _getOAuthLocationParams() {
    var r, i;
    let e = window.location.hash;
    if (e) {
      e.charAt(0) === "#" && (e = e.substring(1));
      const s = Q(e);
      let o = !1;
      if (
        s.access_token &&
        s.expires_in &&
        s.state &&
        s.hasOwnProperty("username")
      )
        try {
          (s.state = JSON.parse(s.state)),
            s.state.portalUrl && ((this._oAuthLocationParams = s), (o = !0));
        } catch {}
      else if (
        s.error &&
        s.error_description &&
        s.error === "access_denied" &&
        ((o = !0), s.state)
      )
        try {
          s.state = JSON.parse(s.state);
        } catch {}
      o &&
        (window.location.hash =
          ((r = s.state) == null ? void 0 : r.hash) || "");
    }
    let t = window.location.search;
    if (t) {
      t.charAt(0) === "?" && (t = t.substring(1));
      const s = Q(t);
      let o = !1;
      if (s.code && s.state)
        try {
          (s.state = JSON.parse(s.state)),
            s.state.portalUrl &&
              s.state.uid &&
              ((this._oAuthLocationParams = s), (o = !0));
        } catch {}
      else if (
        s.error &&
        s.error_description &&
        s.error === "access_denied" &&
        ((o = !0), s.state)
      )
        try {
          s.state = JSON.parse(s.state);
        } catch {}
      if (o) {
        const l = { ...s };
        [
          "code",
          "error",
          "error_description",
          "message_code",
          "persist",
          "state",
        ].forEach((d) => {
          delete l[d];
        });
        const h = Ae(l),
          a =
            window.location.pathname +
            (h ? `?${h}` : "") +
            (((i = s.state) == null ? void 0 : i.hash) || "");
        window.history.replaceState(window.history.state, "", a);
      }
    }
  }
  _getOAuthToken(e, t, r, i, s) {
    return (
      (e = e.replace(/^http:/i, "https:")),
      F(`${e}/sharing/rest/oauth2/token`, {
        authMode: "anonymous",
        method: "post",
        query:
          i && s
            ? {
                grant_type: "authorization_code",
                code: t,
                redirect_uri: i,
                client_id: r,
                code_verifier: s,
              }
            : { grant_type: "refresh_token", refresh_token: t, client_id: r },
      }).then((o) => o.data)
    );
  }
  _getCodeChallenge(e) {
    if (e && globalThis.isSecureContext) {
      const t = new TextEncoder().encode(e);
      return crypto.subtle
        .digest("SHA-256", t)
        .then((r) => pe(new Uint8Array(r)));
    }
    return Promise.resolve(null);
  }
  _pageShowHandler(e) {
    if (e.persisted && this.isBusy() && this._rejectOnPersistedPageShow) {
      const t = new U("identity-manager:user-aborted", "ABORTED");
      this._errbackFunc(t);
    }
  }
  _findCredential(e, t) {
    let r,
      i,
      s,
      o,
      l = -1;
    const h = t && t.token,
      a = t && t.resource,
      d = this._isServerRsrc(e) ? "server" : "portal",
      p = this.credentials.filter(
        (u) => this._hasSameServerInstance(u.server, e) && u.scope === d
      );
    if (((e = a || e), p.length))
      if (p.length === 1) {
        if (
          ((r = p[0]),
          (s = this.findServerInfo(r.server)),
          (i = s && s.owningSystemUrl),
          (o = i ? this.findCredential(i, r.userId) : void 0),
          (l = this._getIdenticalSvcIdx(e, r)),
          !h)
        )
          return l === -1 && r.resources.push(e), this._addResource(e, o), r;
        l !== -1 && (r.resources.splice(l, 1), this._removeResource(e, o));
      } else {
        let u, g;
        if (
          (p.some(
            (y) => (
              (g = this._getIdenticalSvcIdx(e, y)),
              g !== -1 &&
                ((u = y),
                (s = this.findServerInfo(u.server)),
                (i = s && s.owningSystemUrl),
                (o = i ? this.findCredential(i, u.userId) : void 0),
                (l = g),
                !0)
            )
          ),
          h)
        )
          u && (u.resources.splice(l, 1), this._removeResource(e, o));
        else if (u) return this._addResource(e, o), u;
      }
  }
  _findOAuthInfo(e) {
    let t = this.findOAuthInfo(e);
    if (!t) {
      for (const r of this.oAuthInfos)
        if (this._isIdProvider(r.portalUrl, e)) {
          t = r;
          break;
        }
    }
    return t;
  }
  _addResource(e, t) {
    t && this._getIdenticalSvcIdx(e, t) === -1 && t.resources.push(e);
  }
  _removeResource(e, t) {
    let r = -1;
    t &&
      ((r = this._getIdenticalSvcIdx(e, t)),
      r > -1 && t.resources.splice(r, 1));
  }
  _useProxy(e, t) {
    return (
      (t && t.isAdmin && !L(e.adminTokenServiceUrl, this._appOrigin)) ||
      (!this._isPortalDomain(e.tokenServiceUrl) &&
        String(e.currentVersion) === "10.1" &&
        !L(e.tokenServiceUrl, this._appOrigin))
    );
  }
  _getOrigin(e) {
    const t = new z(e);
    return t.scheme + "://" + t.host + (t.port != null ? ":" + t.port : "");
  }
  _getServerInstanceRoot(e) {
    const t = e.toLowerCase();
    let r = t.indexOf(this._agsRest);
    return (
      r === -1 &&
        this._isAdminResource(e) &&
        (r = this._agsAdmin.test(e)
          ? e.replace(this._agsAdmin, "$1").length
          : e.search(this._adminSvcs)),
      r !== -1 || Ze(t) || (r = t.indexOf("/sharing")),
      r === -1 && t.substr(-1) === "/" && (r = t.length - 1),
      r > -1 ? e.substring(0, r) : e
    );
  }
  _hasSameServerInstance(e, t) {
    return (
      e.substr(-1) === "/" && (e = e.slice(0, -1)),
      (e = e.toLowerCase()),
      (t = this._getServerInstanceRoot(t).toLowerCase()),
      (e = this._normalizeAGOLorgDomain(e)),
      (t = this._normalizeAGOLorgDomain(t)),
      (e = e.substr(e.indexOf(":"))) === t.substr(t.indexOf(":"))
    );
  }
  _normalizeAGOLorgDomain(e) {
    const t = /^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i,
      r = /^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,
      i = /^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;
    return (
      t.test(e)
        ? (e = e.replace(t, "https://www.arcgis.com"))
        : r.test(e)
        ? (e = e.replace(r, "https://devext.arcgis.com"))
        : i.test(e) && (e = e.replace(i, "https://qaext.arcgis.com")),
      e
    );
  }
  _sanitizeUrl(e) {
    const t = (ve.request.proxyUrl || "").toLowerCase(),
      r = t ? e.toLowerCase().indexOf(t + "?") : -1;
    return (
      r !== -1 && (e = e.substring(r + t.length + 1)), (e = et(e)), de(e).path
    );
  }
  _isRESTService(e) {
    return e.includes(this._agsRest);
  }
  _isAdminResource(e) {
    return this._agsAdmin.test(e) || this._adminSvcs.test(e);
  }
  _isServerRsrc(e) {
    return this._isRESTService(e) || this._isAdminResource(e);
  }
  _isIdenticalService(e, t) {
    let r = !1;
    if (this._isRESTService(e) && this._isRESTService(t)) {
      const i = this._getSuffix(e).toLowerCase(),
        s = this._getSuffix(t).toLowerCase();
      if (((r = i === s), !r)) {
        const o = /(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;
        r = i.replace(o, "$1") === s.replace(o, "$1");
      }
    } else
      this._isAdminResource(e) && this._isAdminResource(t)
        ? (r = !0)
        : this._isServerRsrc(e) ||
          this._isServerRsrc(t) ||
          !this._isPortalDomain(e) ||
          (r = !0);
    return r;
  }
  _isPortalDomain(e) {
    const t = new z(e.toLowerCase()),
      r = this._portalConfig;
    let i = this._gwDomains.some((s) => s.regex.test(t.uri));
    return (
      !i &&
        r &&
        (i = this._hasSameServerInstance(
          this._getServerInstanceRoot(r.restBaseUrl),
          t.uri
        )),
      i || (ve.portalUrl && (i = L(t, ve.portalUrl, !0))),
      i ||
        (i = this._portals.some((s) => this._hasSameServerInstance(s, t.uri))),
      (i = i || this._agsPortal.test(t.path)),
      i
    );
  }
  _isIdProvider(e, t) {
    let r = -1,
      i = -1;
    this._gwDomains.forEach((o, l) => {
      r === -1 && o.regex.test(e) && (r = l),
        i === -1 && o.regex.test(t) && (i = l);
    });
    let s = !1;
    if (
      (r > -1 &&
        i > -1 &&
        (r === 0 || r === 4
          ? (i !== 0 && i !== 4) || (s = !0)
          : r === 1
          ? (i !== 1 && i !== 2) || (s = !0)
          : r === 2
          ? i === 2 && (s = !0)
          : r === 3 && i === 3 && (s = !0)),
      !s)
    ) {
      const o = this.findServerInfo(t),
        l = o && o.owningSystemUrl;
      l &&
        $e(o) &&
        this._isPortalDomain(l) &&
        this._isIdProvider(e, l) &&
        (s = !0);
    }
    return s;
  }
  _getIdenticalSvcIdx(e, t) {
    let r = -1;
    for (let i = 0; i < t.resources.length; i++) {
      const s = t.resources[i];
      if (this._isIdenticalService(e, s)) {
        r = i;
        break;
      }
    }
    return r;
  }
  _getSuffix(e) {
    return e
      .replace(this._regexSDirUrl, "")
      .replace(this._regexServerType, "$1");
  }
  _getTokenSvcUrl(e) {
    let t, r, i;
    if (this._isRESTService(e) || this._isAdminResource(e)) {
      const s = this._getServerInstanceRoot(e);
      return (
        (t = s + "/admin/generateToken"),
        (r = F((e = s + "/rest/info"), { query: { f: "json" } }).then(
          (o) => o.data
        )),
        { adminUrl: t, promise: r }
      );
    }
    if (this._isPortalDomain(e)) {
      let s = "";
      if (
        (this._gwDomains.some(
          (o) => (o.regex.test(e) && (s = o.tokenServiceUrl), !!s)
        ),
        s ||
          this._portals.some(
            (o) => (
              this._hasSameServerInstance(o, e) && (s = o + this._gwTokenUrl),
              !!s
            )
          ),
        s ||
          ((i = e.toLowerCase().indexOf("/sharing")),
          i !== -1 && (s = e.substring(0, i) + this._gwTokenUrl)),
        s || (s = this._getOrigin(e) + this._gwTokenUrl),
        s)
      ) {
        const o = new z(e).port;
        /^http:\/\//i.test(e) &&
          o === "7080" &&
          (s = s.replace(/:7080/i, ":7443")),
          (s = s.replace(/http:/i, "https:"));
      }
      return s;
    }
    if (e.toLowerCase().includes("premium.arcgisonline.com"))
      return "https://premium.arcgisonline.com/server/tokens";
  }
  _processOAuthResponseParams(e, t, r) {
    const i = t._oAuthCred;
    if (e.code) {
      const o = i.codeVerifier;
      return (
        (i.codeVerifier = null),
        (i.stateUID = null),
        i.save(),
        this._getOAuthToken(
          r.server,
          e.code,
          t.appId,
          this._getRedirectURI(t, !0),
          o
        ).then((l) => {
          const h = new A({
            userId: l.username,
            server: r.server,
            token: l.access_token,
            expires: Date.now() + 1e3 * l.expires_in,
            ssl: l.ssl,
            oAuthState: e.state,
            _oAuthCred: i,
          });
          return (
            (t.userId = h.userId),
            (i.storage = l.persist ? ne : oe),
            (i.refreshToken = l.refresh_token),
            (i.token = null),
            (i.expires = l.refresh_token_expires_in
              ? Date.now() + 1e3 * l.refresh_token_expires_in
              : null),
            (i.userId = h.userId),
            (i.ssl = h.ssl),
            i.save(),
            h
          );
        })
      );
    }
    const s = new A({
      userId: e.username,
      server: r.server,
      token: e.access_token,
      expires: Date.now() + 1e3 * Number(e.expires_in),
      ssl: e.ssl === "true",
      oAuthState: e.state,
      _oAuthCred: i,
    });
    return (
      (t.userId = s.userId),
      (i.storage = e.persist ? ne : oe),
      (i.refreshToken = null),
      (i.token = s.token),
      (i.expires = s.expires),
      (i.userId = s.userId),
      (i.ssl = s.ssl),
      i.save(),
      Promise.resolve(s)
    );
  }
  _processOAuthPopupParams(e) {
    var r;
    const t = this._oAuthDfd;
    if (((this._oAuthDfd = null), t))
      if (
        (clearInterval(this._oAuthIntervalId),
        (r = this._oAuthOnPopupHandle) == null || r.remove(),
        e.error)
      ) {
        const i = e.error === "access_denied",
          s = new U(
            i
              ? "identity-manager:user-aborted"
              : "identity-manager:authentication-failed",
            i ? "ABORTED" : "OAuth: " + e.error + " - " + e.error_description
          );
        t.reject(s);
      } else
        this._processOAuthResponseParams(e, t.oinfo_, t.sinfo_)
          .then((i) => {
            t.resolve(i);
          })
          .catch((i) => {
            t.reject(i);
          });
  }
  _setOAuthResponseQueryString(e) {
    e &&
      (e.charAt(0) === "?" && (e = e.substring(1)),
      this._processOAuthPopupParams(Q(e)));
  }
  _exchangeToken(e, t, r) {
    return F(`${e}/sharing/rest/oauth2/exchangeToken`, {
      authMode: "anonymous",
      method: "post",
      query: { f: "json", client_id: t, token: r },
    }).then((i) => i.data.token);
  }
  _getPlatformSelf(e, t) {
    return (
      (e = e.replace(/^http:/i, "https:")),
      F(`${e}/sharing/rest/oauth2/platformSelf`, {
        authMode: "anonymous",
        headers: {
          "X-Esri-Auth-Client-Id": t,
          "X-Esri-Auth-Redirect-Uri": window.location.href.replace(/#.*$/, ""),
        },
        method: "post",
        query: { f: "json", expiration: 30 },
        withCredentials: !0,
      }).then((r) => r.data)
    );
  }
  _getPortalSelf(e, t) {
    let r;
    return (
      this._gwDomains.some(
        (i) => (i.regex.test(e) && (r = i.customBaseUrl), !!r)
      ),
      r
        ? Promise.resolve({
            allSSL: !0,
            currentVersion: "8.4",
            customBaseUrl: r,
            portalMode: "multitenant",
            supportsOAuth: !0,
          })
        : (this._appOrigin.startsWith("https:")
            ? (e = e.replace(/^http:/i, "https:").replace(/:7080/i, ":7443"))
            : /^http:/i.test(t) &&
              (e = e.replace(/^https:/i, "http:").replace(/:7443/i, ":7080")),
          F(e, {
            query: { f: "json" },
            authMode: "anonymous",
            withCredentials: !0,
          }).then((i) => i.data))
    );
  }
  _doPortalSignIn(e) {
    const t = this._portalConfig,
      r = window.location.href,
      i = this.findServerInfo(e);
    return !(
      (!t && !this._isPortalDomain(r)) ||
      !(i
        ? i.hasPortal ||
          (i.owningSystemUrl && this._isPortalDomain(i.owningSystemUrl))
        : this._isPortalDomain(e)) ||
      !(
        this._isIdProvider(r, e) ||
        (t &&
          (this._hasSameServerInstance(
            this._getServerInstanceRoot(t.restBaseUrl),
            e
          ) ||
            this._isIdProvider(t.restBaseUrl, e))) ||
        L(r, e, !0)
      )
    );
  }
  _checkProtocol(e, t, r, i) {
    let s = !0;
    const o = i ? t.adminTokenServiceUrl : t.tokenServiceUrl;
    return (
      o.trim().toLowerCase().startsWith("https:") &&
        !this._appOrigin.startsWith("https:") &&
        tt(o) &&
        ((s =
          !!this._protocolFunc &&
          !!this._protocolFunc({ resourceUrl: e, serverInfo: t })),
        !s) &&
        r(
          new U(
            "identity-manager:aborted",
            "Aborted the Sign-In process to avoid sending password over insecure connection."
          )
        ),
      s
    );
  }
  _enqueue(e, t, r, i, s, o) {
    return (
      i || (i = X()),
      (i.resUrl_ = e),
      (i.sinfo_ = t),
      (i.options_ = r),
      (i.admin_ = s),
      (i.refresh_ = o),
      this._busy
        ? this._hasSameServerInstance(
            this._getServerInstanceRoot(e),
            this._busy.resUrl_
          )
          ? (this._oAuthDfd &&
              this._oAuthDfd.oAuthWin_ &&
              this._oAuthDfd.oAuthWin_.focus(),
            this._soReqs.push(i))
          : this._xoReqs.push(i)
        : this._doSignIn(i),
      i.promise
    );
  }
  _doSignIn(e) {
    (this._busy = e), (this._rejectOnPersistedPageShow = !1);
    const t = (a) => {
        const d = e.options_ && e.options_.resource,
          p = e.resUrl_,
          u = e.refresh_;
        let g = !1;
        this.credentials.includes(a) ||
          (u && this.credentials.includes(u)
            ? ((u.userId = a.userId),
              (u.token = a.token),
              (u.expires = a.expires),
              (u.validity = a.validity),
              (u.ssl = a.ssl),
              (u.creationTime = a.creationTime),
              (g = !0),
              (a = u))
            : this.credentials.push(a)),
          a.resources || (a.resources = []),
          a.resources.includes(d || p) || a.resources.push(d || p),
          (a.scope = this._isServerRsrc(p) ? "server" : "portal"),
          a.emitTokenChange();
        const y = this._soReqs,
          S = {};
        (this._soReqs = []),
          y.forEach((I) => {
            if (!this._isIdenticalService(p, I.resUrl_)) {
              const b = this._getSuffix(I.resUrl_);
              S[b] || ((S[b] = !0), a.resources.push(I.resUrl_));
            }
          }),
          e.resolve(a),
          y.forEach((I) => {
            this._hasSameServerInstance(
              this._getServerInstanceRoot(p),
              I.resUrl_
            )
              ? I.resolve(a)
              : this._soReqs.push(I);
          }),
          (this._busy = e.resUrl_ = e.sinfo_ = e.refresh_ = null),
          g || this.emit("credential-create", { credential: a }),
          this._soReqs.length
            ? this._doSignIn(this._soReqs.shift())
            : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
      },
      r = (a) => {
        e.reject(a),
          (this._busy = e.resUrl_ = e.sinfo_ = e.refresh_ = null),
          this._soReqs.length
            ? this._doSignIn(this._soReqs.shift())
            : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
      },
      i = (a, d, p, u) => {
        var P, $, f;
        const g = e.sinfo_,
          y = !e.options_ || e.options_.prompt !== !1,
          S = g.hasPortal && this._findOAuthInfo(e.resUrl_);
        let I, b;
        if (a)
          t(
            new A({
              userId: a,
              server: g.server,
              token: p || null,
              expires: u != null ? Number(u) : null,
              ssl: !!d,
            })
          );
        else if (
          window !== window.parent &&
          (P = this._appUrlObj.query) != null &&
          P["arcgis-auth-origin"] &&
          ($ = this._appUrlObj.query) != null &&
          $["arcgis-auth-portal"] &&
          this._hasSameServerInstance(
            this._getServerInstanceRoot(
              this._appUrlObj.query["arcgis-auth-portal"]
            ),
            e.resUrl_
          )
        ) {
          window.parent.postMessage(
            { type: "arcgis:auth:requestCredential" },
            this._appUrlObj.query["arcgis-auth-origin"]
          );
          const c = fe(window, "message", (v) => {
            v.source === window.parent &&
              v.data &&
              (v.data.type === "arcgis:auth:credential"
                ? (c.remove(),
                  v.data.credential.expires < Date.now()
                    ? r(
                        new U(
                          "identity-manager:credential-request-failed",
                          "Parent application's token has expired."
                        )
                      )
                    : t(new A(v.data.credential)))
                : v.data.type === "arcgis:auth:error" &&
                  (c.remove(),
                  v.data.error.name === "tokenExpiredError"
                    ? r(
                        new U(
                          "identity-manager:credential-request-failed",
                          "Parent application's token has expired."
                        )
                      )
                    : r(U.fromJSON(v.data.error))));
          });
          J((f = e.options_) == null ? void 0 : f.signal, () => {
            c.remove();
          });
        } else if (S) {
          let c = S._oAuthCred;
          if (!c) {
            const v = new Se(S, ne),
              _ = new Se(S, oe);
            v.isValid() && _.isValid()
              ? v.expires > _.expires
                ? ((c = v), _.destroy())
                : ((c = _), v.destroy())
              : (c = v.isValid() ? v : _),
              (S._oAuthCred = c);
          }
          if (c.isValid()) {
            I = new A({
              userId: c.userId,
              server: g.server,
              token: c.token,
              expires: c.expires,
              ssl: c.ssl,
              _oAuthCred: c,
            });
            const v = S.appId !== c.appId && this._doPortalSignIn(e.resUrl_);
            v || c.refreshToken
              ? ((e._pendingDfd = c.refreshToken
                  ? this._getOAuthToken(g.server, c.refreshToken, c.appId).then(
                      (_) => (
                        (I.expires = Date.now() + 1e3 * _.expires_in),
                        (I.token = _.access_token),
                        I
                      )
                    )
                  : Promise.resolve(I)),
                e._pendingDfd
                  .then((_) =>
                    v
                      ? this._exchangeToken(_.server, S.appId, _.token)
                          .then((k) => ((_.token = k), _))
                          .catch(() => _)
                      : _
                  )
                  .then((_) => {
                    t(_);
                  })
                  .catch(() => {
                    c == null || c.destroy(), i();
                  }))
              : t(I);
          } else if (
            this._oAuthLocationParams &&
            this._hasSameServerInstance(
              S.portalUrl,
              this._oAuthLocationParams.state.portalUrl
            ) &&
            (this._oAuthLocationParams.access_token ||
              (this._oAuthLocationParams.code &&
                this._oAuthLocationParams.state.uid === c.stateUID &&
                c.codeVerifier))
          ) {
            const v = this._oAuthLocationParams;
            (this._oAuthLocationParams = null),
              (e._pendingDfd = this._processOAuthResponseParams(v, S, g)
                .then((_) => {
                  t(_);
                })
                .catch(r));
          } else {
            const v = () => {
              y
                ? (e._pendingDfd = this.oAuthSignIn(
                    e.resUrl_,
                    g,
                    S,
                    e.options_
                  ).then(t, r))
                : ((b = new U(
                    "identity-manager:not-authenticated",
                    "User is not signed in."
                  )),
                  r(b));
            };
            this._doPortalSignIn(e.resUrl_)
              ? (e._pendingDfd = this._getPlatformSelf(g.server, S.appId)
                  .then((_) => {
                    L(_.portalUrl, this._appOrigin, !0)
                      ? ((I = new A({
                          userId: _.username,
                          server: g.server,
                          expires: Date.now() + 1e3 * _.expires_in,
                          token: _.token,
                        })),
                        t(I))
                      : v();
                  })
                  .catch(v))
              : v();
          }
        } else if (y) {
          if (this._checkProtocol(e.resUrl_, g, r, e.admin_)) {
            let c = e.options_;
            e.admin_ && ((c = c || {}), (c.isAdmin = !0)),
              (e._pendingDfd = this.signIn(e.resUrl_, g, c).then(t, r));
          }
        } else
          (b = new U(
            "identity-manager:not-authenticated",
            "User is not signed in."
          )),
            r(b);
      },
      s = () => {
        const a = e.sinfo_,
          d = a.owningSystemUrl,
          p = e.options_;
        let u, g, y, S;
        if (
          (p && ((u = p.token), (g = p.error), (y = p.prompt)),
          (S = this._findCredential(d, { token: u, resource: e.resUrl_ })),
          !S)
        ) {
          for (const I of this.credentials)
            if (this._isIdProvider(d, I.server)) {
              S = I;
              break;
            }
        }
        if (S) {
          const I = this.findCredential(e.resUrl_, S.userId);
          if (I) t(I);
          else if (be(a, this._legacyFed)) {
            const b = S.toJSON();
            (b.server = a.server), (b.resources = null), t(new A(b));
          } else
            (e._pendingDfd = this.generateToken(
              this.findServerInfo(S.server),
              null,
              {
                serverUrl: e.resUrl_,
                token: S.token,
                signal: e.options_.signal,
                ssl: S.ssl,
              }
            )).then((b) => {
              t(
                new A({
                  userId: S == null ? void 0 : S.userId,
                  server: a.server,
                  token: b.token,
                  expires: b.expires != null ? Number(b.expires) : null,
                  ssl: !!b.ssl,
                  isAdmin: e.admin_,
                  validity: b.validity,
                })
              );
            }, r);
        } else
          (this._busy = null),
            u && (e.options_.token = null),
            (e._pendingDfd = this.getCredential(d.replace(/\/?$/, "/sharing"), {
              resource: e.resUrl_,
              owningTenant: a.owningTenant,
              signal: e.options_.signal,
              token: u,
              error: g,
              prompt: y,
            })).then(
              () => {
                this._enqueue(e.resUrl_, e.sinfo_, e.options_, e, e.admin_);
              },
              (I) => {
                (e.resUrl_ = e.sinfo_ = e.refresh_ = null), e.reject(I);
              }
            );
      };
    this._errbackFunc = r;
    const o = e.sinfo_.owningSystemUrl,
      l = this._isServerRsrc(e.resUrl_),
      h = e.sinfo_._restInfoPms;
    h
      ? h.promise.then(
          (a) => {
            const d = e.sinfo_;
            if (d._restInfoPms) {
              (d.adminTokenServiceUrl = d._restInfoPms.adminUrl),
                (d._restInfoPms = null),
                (d.tokenServiceUrl =
                  (Z("authInfo.tokenServicesUrl", a) ||
                    Z("authInfo.tokenServiceUrl", a) ||
                    Z("tokenServiceUrl", a)) ??
                  null),
                (d.shortLivedTokenValidity =
                  Z("authInfo.shortLivedTokenValidity", a) ?? null),
                (d.currentVersion = a.currentVersion),
                (d.owningTenant = a.owningTenant);
              const p = (d.owningSystemUrl = a.owningSystemUrl);
              p && this._portals.push(p);
            }
            l && d.owningSystemUrl ? s() : i();
          },
          () => {
            e.sinfo_._restInfoPms = null;
            const a = new U(
              "identity-manager:server-identification-failed",
              "Unknown resource - could not find token service endpoint."
            );
            r(a);
          }
        )
      : l && o
      ? s()
      : e.sinfo_._selfReq
      ? e.sinfo_._selfReq.selfDfd
          .then((a) => {
            const d = {};
            let p, u, g, y;
            return (
              a &&
                ((p = a.user && a.user.username),
                (d.username = p),
                (d.allSSL = a.allSSL),
                (u = a.supportsOAuth),
                (y = parseFloat(a.currentVersion)),
                a.portalMode === "multitenant" && (g = a.customBaseUrl),
                (e.sinfo_.currentVersion = y)),
              (e.sinfo_.webTierAuth = !!p),
              p && this.normalizeWebTierAuth
                ? this.generateToken(e.sinfo_, null, { ssl: d.allSSL })
                    .catch(() => null)
                    .then(
                      (S) => (
                        (d.portalToken = S && S.token),
                        (d.tokenExpiration = S && S.expires),
                        d
                      )
                    )
                : !p && u && y >= 4.4 && !this._findOAuthInfo(e.resUrl_)
                ? this._generateOAuthInfo({
                    portalUrl: e.sinfo_.server,
                    customBaseUrl: g,
                    owningTenant: e.sinfo_._selfReq.owningTenant,
                  })
                    .catch(() => null)
                    .then(() => d)
                : d
            );
          })
          .catch(() => null)
          .then((a) => {
            (e.sinfo_._selfReq = null),
              a
                ? i(a.username, a.allSSL, a.portalToken, a.tokenExpiration)
                : i();
          })
      : i();
  }
  _generateOAuthInfo(e) {
    let t,
      r = null,
      i = e.portalUrl;
    const s = e.customBaseUrl,
      o = e.owningTenant,
      l =
        !this._defaultOAuthInfo &&
        this._createDefaultOAuthInfo &&
        !this._hasTestedIfAppIsOnPortal;
    if (l) {
      r = window.location.href;
      let h = r.indexOf("?");
      h > -1 && (r = r.slice(0, h)),
        (h = r.search(/\/(apps|home)\//)),
        (r = h > -1 ? r.slice(0, h) : null);
    }
    return (
      l && r
        ? ((this._hasTestedIfAppIsOnPortal = !0),
          (t = F(r + "/sharing/rest", { query: { f: "json" } }).then(() => {
            this._defaultOAuthInfo = new De({
              appId: "arcgisonline",
              popupCallbackUrl: r + "/home/oauth-callback.html",
            });
          })))
        : (t = Promise.resolve()),
      t.then(() => {
        if (this._defaultOAuthInfo)
          return (
            (i = i.replace(/^http:/i, "https:")),
            F(i + "/sharing/rest/oauth2/validateRedirectUri", {
              query: {
                accountId: o,
                client_id: this._defaultOAuthInfo.appId,
                redirect_uri: Te(this._defaultOAuthInfo.popupCallbackUrl),
                f: "json",
              },
            }).then((h) => {
              if (h.data.valid) {
                const a = this._defaultOAuthInfo.clone();
                h.data.urlKey && s
                  ? (a.portalUrl =
                      "https://" + h.data.urlKey.toLowerCase() + "." + s)
                  : (a.portalUrl = i),
                  (a.popup =
                    window !== window.top ||
                    !(
                      L(i, this._appOrigin) ||
                      this._gwDomains.some(
                        (d) => d.regex.test(i) && d.regex.test(this._appOrigin)
                      )
                    )),
                  this.oAuthInfos.push(a);
              }
            })
          );
      })
    );
  }
  _doOAuthSignIn(e, t, r, i) {
    const s = r._oAuthCred,
      o = { portalUrl: r.portalUrl };
    !r.popup &&
      r.preserveUrlHash &&
      window.location.hash &&
      (o.hash = window.location.hash),
      s.stateUID && (o.uid = s.stateUID);
    const l = {
      client_id: r.appId,
      response_type: s.codeVerifier ? "code" : "token",
      state: JSON.stringify(o),
      expiration: r.expiration,
      locale: r.locale,
      redirect_uri: this._getRedirectURI(r, !!s.codeVerifier),
    };
    r.forceLogin && (l.force_login = !0),
      r.forceUserId && r.userId && (l.prepopulatedusername = r.userId),
      !r.popup && this._doPortalSignIn(e) && (l.redirectToUserOrgUrl = !0),
      s.codeVerifier &&
        ((l.code_challenge = i || s.codeVerifier),
        (l.code_challenge_method = i ? "S256" : "plain"));
    const h =
        r.portalUrl.replace(/^http:/i, "https:") + "/sharing/oauth2/authorize",
      a = h + "?" + Ae(l);
    if (r.popup) {
      const d = window.open(a, "esriJSAPIOAuth", r.popupWindowFeatures);
      if (d)
        d.focus(),
          (this._oAuthDfd.oAuthWin_ = d),
          (this._oAuthIntervalId = setInterval(() => {
            if (d.closed) {
              clearInterval(this._oAuthIntervalId),
                this._oAuthOnPopupHandle.remove();
              const p = this._oAuthDfd;
              if (p) {
                const u = new U("identity-manager:user-aborted", "ABORTED");
                p.reject(u);
              }
            }
          }, 500)),
          (this._oAuthOnPopupHandle = fe(
            window,
            ["arcgis:auth:hash", "arcgis:auth:location:search"],
            (p) => {
              p.type === "arcgis:auth:hash"
                ? this.setOAuthResponseHash(p.detail)
                : this._setOAuthResponseQueryString(p.detail);
            }
          ));
      else {
        const p = new U("identity-manager:popup-blocked", "ABORTED");
        this._oAuthDfd.reject(p);
      }
    } else
      (this._rejectOnPersistedPageShow = !0),
        this._oAuthRedirectFunc
          ? this._oAuthRedirectFunc({
              authorizeParams: l,
              authorizeUrl: h,
              resourceUrl: e,
              serverInfo: t,
              oAuthInfo: r,
            })
          : (window.location.href = a);
  }
  _getRedirectURI(e, t) {
    const r = window.location.href.replace(/#.*$/, "");
    if (e.popup) return Te(e.popupCallbackUrl);
    if (t) {
      const i = de(r);
      return (
        i.query &&
          [
            "code",
            "error",
            "error_description",
            "message_code",
            "persist",
            "state",
          ].forEach((s) => {
            delete i.query[s];
          }),
        rt(i.path, i.query)
      );
    }
    return r;
  }
}
He.prototype.declaredClass = "esri.identity.IdentityManagerBase";
let A = class extends Fe.EventedAccessor {
  constructor(n) {
    super(n),
      (this._oAuthCred = null),
      (this.tokenRefreshBuffer = 2),
      n && n._oAuthCred && (this._oAuthCred = n._oAuthCred);
  }
  initialize() {
    (this.resources = this.resources || []),
      this.creationTime == null && (this.creationTime = Date.now());
  }
  refreshToken() {
    const n = T.findServerInfo(this.server),
      e = n && n.owningSystemUrl,
      t = !!e && this.scope === "server",
      r = t && be(n, T._legacyFed),
      i = n.webTierAuth,
      s = i && T.normalizeWebTierAuth,
      o = ie[this.server],
      l = o && o[this.userId];
    let h,
      a = this.resources && this.resources[0],
      d = t ? T.findServerInfo(e) : null,
      p = { username: this.userId, password: l };
    if (i && !s) return;
    t &&
      !d &&
      T.serverInfos.some((g) => (T._isIdProvider(e, g.server) && (d = g), !!d));
    const u = d ? T.findCredential(d.server, this.userId) : null;
    if (!t || u) {
      if (!r) {
        if (t) h = { serverUrl: a, token: u && u.token, ssl: u && u.ssl };
        else if (s) (p = null), (h = { ssl: this.ssl });
        else {
          if (!l) {
            let g;
            return (
              a &&
                ((a = T._sanitizeUrl(a)),
                (this._enqueued = 1),
                (g = T._enqueue(a, n, null, null, this.isAdmin, this)),
                g
                  .then(() => {
                    (this._enqueued = 0), this.refreshServerTokens();
                  })
                  .catch(() => {
                    this._enqueued = 0;
                  })),
              g
            );
          }
          this.isAdmin && (h = { isAdmin: !0 });
        }
        return T.generateToken(t ? d : n, t ? null : p, h)
          .then((g) => {
            (this.token = g.token),
              (this.expires = g.expires != null ? Number(g.expires) : null),
              (this.creationTime = Date.now()),
              (this.validity = g.validity),
              this.emitTokenChange(),
              this.refreshServerTokens();
          })
          .catch(() => {});
      }
      u == null || u.refreshToken();
    }
  }
  refreshServerTokens() {
    this.scope === "portal" &&
      T.credentials.forEach((n) => {
        const e = T.findServerInfo(n.server),
          t = e && e.owningSystemUrl;
        n !== this &&
          n.userId === this.userId &&
          t &&
          n.scope === "server" &&
          (T._hasSameServerInstance(this.server, t) ||
            T._isIdProvider(t, this.server)) &&
          (be(e, T._legacyFed)
            ? ((n.token = this.token),
              (n.expires = this.expires),
              (n.creationTime = this.creationTime),
              (n.validity = this.validity),
              n.emitTokenChange())
            : n.refreshToken());
      });
  }
  emitTokenChange(n) {
    clearTimeout(this._refreshTimer);
    const e = this.server && T.findServerInfo(this.server),
      t = e && e.owningSystemUrl,
      r = t && T.findServerInfo(t);
    n === !1 ||
      (t &&
        this.scope !== "portal" &&
        (!r || !r.webTierAuth || T.normalizeWebTierAuth)) ||
      (this.expires == null && this.validity == null) ||
      this._startRefreshTimer(),
      this.emit("token-change");
  }
  destroy() {
    (this.userId =
      this.server =
      this.token =
      this.expires =
      this.validity =
      this.resources =
      this.creationTime =
        null),
      this._oAuthCred && (this._oAuthCred.destroy(), (this._oAuthCred = null));
    const n = T.credentials.indexOf(this);
    n > -1 && T.credentials.splice(n, 1),
      this.emitTokenChange(),
      this.emit("destroy");
  }
  toJSON() {
    const n = qe({
        userId: this.userId,
        server: this.server,
        token: this.token,
        expires: this.expires,
        validity: this.validity,
        ssl: this.ssl,
        isAdmin: this.isAdmin,
        creationTime: this.creationTime,
        scope: this.scope,
      }),
      e = this.resources;
    return e && e.length > 0 && (n.resources = e.slice()), n;
  }
  _startRefreshTimer() {
    clearTimeout(this._refreshTimer);
    const n = 6e4 * this.tokenRefreshBuffer,
      e = 2 ** 31 - 1;
    let t =
      (this.validity ? this.creationTime + 6e4 * this.validity : this.expires) -
      Date.now();
    t < 0 ? (t = 0) : t > e && (t = e),
      (this._refreshTimer = setTimeout(
        this.refreshToken.bind(this),
        t > n ? t - n : t
      ));
  }
};
m([w()], A.prototype, "creationTime", void 0),
  m([w()], A.prototype, "expires", void 0),
  m([w()], A.prototype, "isAdmin", void 0),
  m([w()], A.prototype, "oAuthState", void 0),
  m([w()], A.prototype, "resources", void 0),
  m([w()], A.prototype, "scope", void 0),
  m([w()], A.prototype, "server", void 0),
  m([w()], A.prototype, "ssl", void 0),
  m([w()], A.prototype, "token", void 0),
  m([w()], A.prototype, "tokenRefreshBuffer", void 0),
  m([w()], A.prototype, "userId", void 0),
  m([w()], A.prototype, "validity", void 0),
  (A = m([Y("esri.identity.Credential")], A));
class Je extends He {}
Je.prototype.declaredClass = "esri.identity.IdentityManager";
const yt = new Je();
st(yt);
export { yt as default };
