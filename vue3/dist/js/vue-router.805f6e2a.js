import {
  s as ee,
  i as z,
  u as N,
  c as L,
  r as Ft,
  n as ne,
  d as Tt,
  h as Vt,
  p as ht,
  a as re,
  w as oe,
} from "./vue.a7ce1fbe.js";
const H = typeof window < "u",
  O = Object.assign;
function dt(t, e) {
  const r = {};
  for (const c in e) {
    const s = e[c];
    r[c] = M(s) ? s.map(t) : t(s);
  }
  return r;
}
const J = () => {},
  M = Array.isArray,
  ae = /\/$/,
  ce = (t) => t.replace(ae, "");
function mt(t, e, r = "/") {
  let c,
    s = {},
    p = "",
    b = "";
  const n = e.indexOf("#");
  let o = e.indexOf("?");
  return (
    n < o && n >= 0 && (o = -1),
    o > -1 &&
      ((c = e.slice(0, o)),
      (p = e.slice(o + 1, n > -1 ? n : e.length)),
      (s = t(p))),
    n > -1 && ((c = c || e.slice(0, n)), (b = e.slice(n, e.length))),
    (c = (function (i, u) {
      if (i.startsWith("/")) return i;
      if (!i) return u;
      const h = u.split("/"),
        l = i.split("/");
      let f,
        m,
        v = h.length - 1;
      for (f = 0; f < l.length; f++)
        if (((m = l[f]), m !== ".")) {
          if (m !== "..") break;
          v > 1 && v--;
        }
      return (
        h.slice(0, v).join("/") +
        "/" +
        l.slice(f - (f === l.length ? 1 : 0)).join("/")
      );
    })(c ?? e, r)),
    { fullPath: c + (p && "?") + p + b, path: c, query: s, hash: b }
  );
}
function Pt(t, e) {
  return e && t.toLowerCase().startsWith(e.toLowerCase())
    ? t.slice(e.length) || "/"
    : t;
}
function Q(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e);
}
function zt(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const r in t) if (!se(t[r], e[r])) return !1;
  return !0;
}
function se(t, e) {
  return M(t) ? xt(t, e) : M(e) ? xt(e, t) : t === e;
}
function xt(t, e) {
  return M(e)
    ? t.length === e.length && t.every((r, c) => r === e[c])
    : t.length === 1 && t[0] === e;
}
var tt, Z;
(function (t) {
  (t.pop = "pop"), (t.push = "push");
})(tt || (tt = {})),
  (function (t) {
    (t.back = "back"), (t.forward = "forward"), (t.unknown = "");
  })(Z || (Z = {}));
const ie = /^[^#]+#/;
function le(t, e) {
  return t.replace(ie, "#") + e;
}
const nt = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function ue(t) {
  let e;
  if ("el" in t) {
    const r = t.el,
      c = typeof r == "string" && r.startsWith("#"),
      s =
        typeof r == "string"
          ? c
            ? document.getElementById(r.slice(1))
            : document.querySelector(r)
          : r;
    if (!s) return;
    e = (function (p, b) {
      const n = document.documentElement.getBoundingClientRect(),
        o = p.getBoundingClientRect();
      return {
        behavior: b.behavior,
        left: o.left - n.left - (b.left || 0),
        top: o.top - n.top - (b.top || 0),
      };
    })(s, t);
  } else e = t;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(e)
    : window.scrollTo(
        e.left != null ? e.left : window.pageXOffset,
        e.top != null ? e.top : window.pageYOffset
      );
}
function Ct(t, e) {
  return (history.state ? history.state.position - e : -1) + t;
}
const gt = new Map();
let fe = () => location.protocol + "//" + location.host;
function $t(t, e) {
  const { pathname: r, search: c, hash: s } = e,
    p = t.indexOf("#");
  if (p > -1) {
    let b = s.includes(t.slice(p)) ? t.slice(p).length : 1,
      n = s.slice(b);
    return n[0] !== "/" && (n = "/" + n), Pt(n, "");
  }
  return Pt(r, t) + c + s;
}
function St(t, e, r, c = !1, s = !1) {
  return {
    back: t,
    current: e,
    forward: r,
    replaced: c,
    position: window.history.length,
    scroll: s ? nt() : null,
  };
}
function pe(t) {
  const e = (function (s) {
      const { history: p, location: b } = window,
        n = { value: $t(s, b) },
        o = { value: p.state };
      function i(u, h, l) {
        const f = s.indexOf("#"),
          m =
            f > -1
              ? (b.host && document.querySelector("base") ? s : s.slice(f)) + u
              : fe() + s + u;
        try {
          p[l ? "replaceState" : "pushState"](h, "", m), (o.value = h);
        } catch {
          b[l ? "replace" : "assign"](m);
        }
      }
      return (
        o.value ||
          i(
            n.value,
            {
              back: null,
              current: n.value,
              forward: null,
              position: p.length - 1,
              replaced: !0,
              scroll: null,
            },
            !0
          ),
        {
          location: n,
          state: o,
          push: function (u, h) {
            const l = O({}, o.value, p.state, { forward: u, scroll: nt() });
            i(l.current, l, !0),
              i(
                u,
                O({}, St(n.value, u, null), { position: l.position + 1 }, h),
                !1
              ),
              (n.value = u);
          },
          replace: function (u, h) {
            i(
              u,
              O({}, p.state, St(o.value.back, u, o.value.forward, !0), h, {
                position: o.value.position,
              }),
              !0
            ),
              (n.value = u);
          },
        }
      );
    })(
      (t = (function (s) {
        if (!s)
          if (H) {
            const p = document.querySelector("base");
            s = (s = (p && p.getAttribute("href")) || "/").replace(
              /^\w+:\/\/[^\/]+/,
              ""
            );
          } else s = "/";
        return s[0] !== "/" && s[0] !== "#" && (s = "/" + s), ce(s);
      })(t))
    ),
    r = (function (s, p, b, n) {
      let o = [],
        i = [],
        u = null;
      const h = ({ state: f }) => {
        const m = $t(s, location),
          v = b.value,
          w = p.value;
        let R = 0;
        if (f) {
          if (((b.value = m), (p.value = f), u && u === v))
            return void (u = null);
          R = w ? f.position - w.position : 0;
        } else n(m);
        o.forEach(($) => {
          $(b.value, v, {
            delta: R,
            type: tt.pop,
            direction: R ? (R > 0 ? Z.forward : Z.back) : Z.unknown,
          });
        });
      };
      function l() {
        const { history: f } = window;
        f.state && f.replaceState(O({}, f.state, { scroll: nt() }), "");
      }
      return (
        window.addEventListener("popstate", h),
        window.addEventListener("beforeunload", l),
        {
          pauseListeners: function () {
            u = b.value;
          },
          listen: function (f) {
            o.push(f);
            const m = () => {
              const v = o.indexOf(f);
              v > -1 && o.splice(v, 1);
            };
            return i.push(m), m;
          },
          destroy: function () {
            for (const f of i) f();
            (i = []),
              window.removeEventListener("popstate", h),
              window.removeEventListener("beforeunload", l);
          },
        }
      );
    })(t, e.state, e.location, e.replace),
    c = O(
      {
        location: "",
        base: t,
        go: function (s, p = !0) {
          p || r.pauseListeners(), history.go(s);
        },
        createHref: le.bind(null, t),
      },
      e,
      r
    );
  return (
    Object.defineProperty(c, "location", {
      enumerable: !0,
      get: () => e.location.value,
    }),
    Object.defineProperty(c, "state", {
      enumerable: !0,
      get: () => e.state.value,
    }),
    c
  );
}
function Ie(t) {
  return (
    (t = location.host
      ? t || location.pathname + location.search
      : "").includes("#") || (t += "#"),
    pe(t)
  );
}
function Kt(t) {
  return typeof t == "string" || typeof t == "symbol";
}
const U = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Ht = Symbol("");
var jt;
function X(t, e) {
  return O(new Error(), { type: t, [Ht]: !0 }, e);
}
function G(t, e) {
  return t instanceof Error && Ht in t && (e == null || !!(t.type & e));
}
(function (t) {
  (t[(t.aborted = 4)] = "aborted"),
    (t[(t.cancelled = 8)] = "cancelled"),
    (t[(t.duplicated = 16)] = "duplicated");
})(jt || (jt = {}));
const qt = "[^/]+?",
  he = { sensitive: !1, strict: !1, start: !0, end: !0 },
  de = /[.+*?^${}()[\]/\\]/g;
function me(t, e) {
  let r = 0;
  for (; r < t.length && r < e.length; ) {
    const c = e[r] - t[r];
    if (c) return c;
    r++;
  }
  return t.length < e.length
    ? t.length === 1 && t[0] === 80
      ? -1
      : 1
    : t.length > e.length
    ? e.length === 1 && e[0] === 80
      ? 1
      : -1
    : 0;
}
function ge(t, e) {
  let r = 0;
  const c = t.score,
    s = e.score;
  for (; r < c.length && r < s.length; ) {
    const p = me(c[r], s[r]);
    if (p) return p;
    r++;
  }
  if (Math.abs(s.length - c.length) === 1) {
    if (At(c)) return 1;
    if (At(s)) return -1;
  }
  return s.length - c.length;
}
function At(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0;
}
const ve = { type: 0, value: "" },
  ye = /[a-zA-Z0-9_]/;
function be(t, e, r) {
  const c = (function (p, b) {
      const n = O({}, he, b),
        o = [];
      let i = n.start ? "^" : "";
      const u = [];
      for (const l of p) {
        const f = l.length ? [] : [90];
        n.strict && !l.length && (i += "/");
        for (let m = 0; m < l.length; m++) {
          const v = l[m];
          let w = 40 + (n.sensitive ? 0.25 : 0);
          if (v.type === 0)
            m || (i += "/"), (i += v.value.replace(de, "\\$&")), (w += 40);
          else if (v.type === 1) {
            const { value: R, repeatable: $, optional: q, regexp: B } = v;
            u.push({ name: R, repeatable: $, optional: q });
            const A = B || qt;
            if (A !== qt) {
              w += 10;
              try {
                new RegExp(`(${A})`);
              } catch (F) {
                throw new Error(
                  `Invalid custom RegExp for param "${R}" (${A}): ` + F.message
                );
              }
            }
            let _ = $ ? `((?:${A})(?:/(?:${A}))*)` : `(${A})`;
            m || (_ = q && l.length < 2 ? `(?:/${_})` : "/" + _),
              q && (_ += "?"),
              (i += _),
              (w += 20),
              q && (w += -8),
              $ && (w += -20),
              A === ".*" && (w += -50);
          }
          f.push(w);
        }
        o.push(f);
      }
      if (n.strict && n.end) {
        const l = o.length - 1;
        o[l][o[l].length - 1] += 0.7000000000000001;
      }
      n.strict || (i += "/?"),
        n.end ? (i += "$") : n.strict && (i += "(?:/|$)");
      const h = new RegExp(i, n.sensitive ? "" : "i");
      return {
        re: h,
        score: o,
        keys: u,
        parse: function (l) {
          const f = l.match(h),
            m = {};
          if (!f) return null;
          for (let v = 1; v < f.length; v++) {
            const w = f[v] || "",
              R = u[v - 1];
            m[R.name] = w && R.repeatable ? w.split("/") : w;
          }
          return m;
        },
        stringify: function (l) {
          let f = "",
            m = !1;
          for (const v of p) {
            (m && f.endsWith("/")) || (f += "/"), (m = !1);
            for (const w of v)
              if (w.type === 0) f += w.value;
              else if (w.type === 1) {
                const { value: R, repeatable: $, optional: q } = w,
                  B = R in l ? l[R] : "";
                if (M(B) && !$)
                  throw new Error(
                    `Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`
                  );
                const A = M(B) ? B.join("/") : B;
                if (!A) {
                  if (!q) throw new Error(`Missing required param "${R}"`);
                  v.length < 2 &&
                    (f.endsWith("/") ? (f = f.slice(0, -1)) : (m = !0));
                }
                f += A;
              }
          }
          return f || "/";
        },
      };
    })(
      (function (p) {
        if (!p) return [[]];
        if (p === "/") return [[ve]];
        if (!p.startsWith("/")) throw new Error(`Invalid path "${p}"`);
        function b($) {
          throw new Error(`ERR (${n})/"${m}": ${$}`);
        }
        let n = 0,
          o = n;
        const i = [];
        let u;
        function h() {
          u && i.push(u), (u = []);
        }
        let l,
          f = 0,
          m = "",
          v = "";
        function w() {
          m &&
            (n === 0
              ? u.push({ type: 0, value: m })
              : n === 1 || n === 2 || n === 3
              ? (u.length > 1 &&
                  (l === "*" || l === "+") &&
                  b(
                    `A repeatable param (${m}) must be alone in its segment. eg: '/:ids+.`
                  ),
                u.push({
                  type: 1,
                  value: m,
                  regexp: v,
                  repeatable: l === "*" || l === "+",
                  optional: l === "*" || l === "?",
                }))
              : b("Invalid state to consume buffer"),
            (m = ""));
        }
        function R() {
          m += l;
        }
        for (; f < p.length; )
          if (((l = p[f++]), l !== "\\" || n === 2))
            switch (n) {
              case 0:
                l === "/" ? (m && w(), h()) : l === ":" ? (w(), (n = 1)) : R();
                break;
              case 4:
                R(), (n = o);
                break;
              case 1:
                l === "("
                  ? (n = 2)
                  : ye.test(l)
                  ? R()
                  : (w(), (n = 0), l !== "*" && l !== "?" && l !== "+" && f--);
                break;
              case 2:
                l === ")"
                  ? v[v.length - 1] == "\\"
                    ? (v = v.slice(0, -1) + l)
                    : (n = 3)
                  : (v += l);
                break;
              case 3:
                w(),
                  (n = 0),
                  l !== "*" && l !== "?" && l !== "+" && f--,
                  (v = "");
                break;
              default:
                b("Unknown state");
            }
          else (o = n), (n = 4);
        return (
          n === 2 && b(`Unfinished custom RegExp for param "${m}"`), w(), h(), i
        );
      })(t.path),
      r
    ),
    s = O(c, { record: t, parent: e, children: [], alias: [] });
  return e && !s.record.aliasOf == !e.record.aliasOf && e.children.push(s), s;
}
function we(t, e) {
  const r = [],
    c = new Map();
  function s(n, o, i) {
    const u = !i,
      h = (function (w) {
        return {
          path: w.path,
          redirect: w.redirect,
          name: w.name,
          meta: w.meta || {},
          aliasOf: void 0,
          beforeEnter: w.beforeEnter,
          props: Ee(w),
          children: w.children || [],
          instances: {},
          leaveGuards: new Set(),
          updateGuards: new Set(),
          enterCallbacks: {},
          components:
            "components" in w
              ? w.components || null
              : w.component && { default: w.component },
        };
      })(n);
    h.aliasOf = i && i.record;
    const l = Bt(e, n),
      f = [h];
    if ("alias" in n) {
      const w = typeof n.alias == "string" ? [n.alias] : n.alias;
      for (const R of w)
        f.push(
          O({}, h, {
            components: i ? i.record.components : h.components,
            path: R,
            aliasOf: i ? i.record : h,
          })
        );
    }
    let m, v;
    for (const w of f) {
      const { path: R } = w;
      if (o && R[0] !== "/") {
        const $ = o.record.path,
          q = $[$.length - 1] === "/" ? "" : "/";
        w.path = o.record.path + (R && q + R);
      }
      if (
        ((m = be(w, o, l)),
        i
          ? i.alias.push(m)
          : ((v = v || m),
            v !== m && v.alias.push(m),
            u && n.name && !Mt(m) && p(n.name)),
        h.children)
      ) {
        const $ = h.children;
        for (let q = 0; q < $.length; q++) s($[q], m, i && i.children[q]);
      }
      (i = i || m),
        ((m.record.components && Object.keys(m.record.components).length) ||
          m.record.name ||
          m.record.redirect) &&
          b(m);
    }
    return v
      ? () => {
          p(v);
        }
      : J;
  }
  function p(n) {
    if (Kt(n)) {
      const o = c.get(n);
      o &&
        (c.delete(n),
        r.splice(r.indexOf(o), 1),
        o.children.forEach(p),
        o.alias.forEach(p));
    } else {
      const o = r.indexOf(n);
      o > -1 &&
        (r.splice(o, 1),
        n.record.name && c.delete(n.record.name),
        n.children.forEach(p),
        n.alias.forEach(p));
    }
  }
  function b(n) {
    let o = 0;
    for (
      ;
      o < r.length &&
      ge(n, r[o]) >= 0 &&
      (n.record.path !== r[o].record.path || !Qt(n, r[o]));

    )
      o++;
    r.splice(o, 0, n), n.record.name && !Mt(n) && c.set(n.record.name, n);
  }
  return (
    (e = Bt({ strict: !1, end: !0, sensitive: !1 }, e)),
    t.forEach((n) => s(n)),
    {
      addRoute: s,
      resolve: function (n, o) {
        let i,
          u,
          h,
          l = {};
        if ("name" in n && n.name) {
          if (((i = c.get(n.name)), !i)) throw X(1, { location: n });
          (h = i.record.name),
            (l = O(
              Lt(
                o.params,
                i.keys.filter((v) => !v.optional).map((v) => v.name)
              ),
              n.params &&
                Lt(
                  n.params,
                  i.keys.map((v) => v.name)
                )
            )),
            (u = i.stringify(l));
        } else if ("path" in n)
          (u = n.path),
            (i = r.find((v) => v.re.test(u))),
            i && ((l = i.parse(u)), (h = i.record.name));
        else {
          if (
            ((i = o.name ? c.get(o.name) : r.find((v) => v.re.test(o.path))),
            !i)
          )
            throw X(1, { location: n, currentLocation: o });
          (h = i.record.name),
            (l = O({}, o.params, n.params)),
            (u = i.stringify(l));
        }
        const f = [];
        let m = i;
        for (; m; ) f.unshift(m.record), (m = m.parent);
        return { name: h, path: u, params: l, matched: f, meta: ke(f) };
      },
      removeRoute: p,
      getRoutes: function () {
        return r;
      },
      getRecordMatcher: function (n) {
        return c.get(n);
      },
    }
  );
}
function Lt(t, e) {
  const r = {};
  for (const c of e) c in t && (r[c] = t[c]);
  return r;
}
function Ee(t) {
  const e = {},
    r = t.props || !1;
  if ("component" in t) e.default = r;
  else for (const c in t.components) e[c] = typeof r == "boolean" ? r : r[c];
  return e;
}
function Mt(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0;
    t = t.parent;
  }
  return !1;
}
function ke(t) {
  return t.reduce((e, r) => O(e, r.meta), {});
}
function Bt(t, e) {
  const r = {};
  for (const c in t) r[c] = c in e ? e[c] : t[c];
  return r;
}
function Qt(t, e) {
  return e.children.some((r) => r === t || Qt(t, r));
}
const Xt = /#/g,
  Oe = /&/g,
  Re = /\//g,
  Pe = /=/g,
  xe = /\?/g,
  Yt = /\+/g,
  Ce = /%5B/g,
  $e = /%5D/g,
  Nt = /%5E/g,
  Se = /%60/g,
  Jt = /%7B/g,
  je = /%7C/g,
  Zt = /%7D/g,
  qe = /%20/g;
function wt(t) {
  return encodeURI("" + t)
    .replace(je, "|")
    .replace(Ce, "[")
    .replace($e, "]");
}
function vt(t) {
  return wt(t)
    .replace(Yt, "%2B")
    .replace(qe, "+")
    .replace(Xt, "%23")
    .replace(Oe, "%26")
    .replace(Se, "`")
    .replace(Jt, "{")
    .replace(Zt, "}")
    .replace(Nt, "^");
}
function Ae(t) {
  return t == null
    ? ""
    : (function (e) {
        return wt(e).replace(Xt, "%23").replace(xe, "%3F");
      })(t).replace(Re, "%2F");
}
function rt(t) {
  try {
    return decodeURIComponent("" + t);
  } catch {}
  return "" + t;
}
function Le(t) {
  const e = {};
  if (t === "" || t === "?") return e;
  const r = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let c = 0; c < r.length; ++c) {
    const s = r[c].replace(Yt, " "),
      p = s.indexOf("="),
      b = rt(p < 0 ? s : s.slice(0, p)),
      n = p < 0 ? null : rt(s.slice(p + 1));
    if (b in e) {
      let o = e[b];
      M(o) || (o = e[b] = [o]), o.push(n);
    } else e[b] = n;
  }
  return e;
}
function Gt(t) {
  let e = "";
  for (let r in t) {
    const c = t[r];
    if (((r = vt(r).replace(Pe, "%3D")), c == null)) {
      c !== void 0 && (e += (e.length ? "&" : "") + r);
      continue;
    }
    (M(c) ? c.map((s) => s && vt(s)) : [c && vt(c)]).forEach((s) => {
      s !== void 0 &&
        ((e += (e.length ? "&" : "") + r), s != null && (e += "=" + s));
    });
  }
  return e;
}
function Me(t) {
  const e = {};
  for (const r in t) {
    const c = t[r];
    c !== void 0 &&
      (e[r] = M(c)
        ? c.map((s) => (s == null ? null : "" + s))
        : c == null
        ? c
        : "" + c);
  }
  return e;
}
const Be = Symbol(""),
  _t = Symbol(""),
  ot = Symbol(""),
  Et = Symbol(""),
  bt = Symbol("");
function Y() {
  let t = [];
  return {
    add: function (e) {
      return (
        t.push(e),
        () => {
          const r = t.indexOf(e);
          r > -1 && t.splice(r, 1);
        }
      );
    },
    list: () => t,
    reset: function () {
      t = [];
    },
  };
}
function W(t, e, r, c, s) {
  const p = c && (c.enterCallbacks[s] = c.enterCallbacks[s] || []);
  return () =>
    new Promise((b, n) => {
      const o = (h) => {
          var l;
          h === !1
            ? n(X(4, { from: r, to: e }))
            : h instanceof Error
            ? n(h)
            : typeof (l = h) == "string" || (l && typeof l == "object")
            ? n(X(2, { from: e, to: h }))
            : (p &&
                c.enterCallbacks[s] === p &&
                typeof h == "function" &&
                p.push(h),
              b());
        },
        i = t.call(c && c.instances[s], e, r, o);
      let u = Promise.resolve(i);
      t.length < 3 && (u = u.then(o)), u.catch((h) => n(h));
    });
}
function yt(t, e, r, c) {
  const s = [];
  for (const b of t)
    for (const n in b.components) {
      let o = b.components[n];
      if (e === "beforeRouteEnter" || b.instances[n])
        if (
          typeof (p = o) == "object" ||
          "displayName" in p ||
          "props" in p ||
          "__vccOpts" in p
        ) {
          const i = (o.__vccOpts || o)[e];
          i && s.push(W(i, r, c, b, n));
        } else {
          let i = o();
          s.push(() =>
            i.then((u) => {
              if (!u)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${n}" at "${b.path}"`)
                );
              const h =
                (l = u).__esModule || l[Symbol.toStringTag] === "Module"
                  ? u.default
                  : u;
              var l;
              b.components[n] = h;
              const f = (h.__vccOpts || h)[e];
              return f && W(f, r, c, b, n)();
            })
          );
        }
    }
  var p;
  return s;
}
function Dt(t) {
  const e = z(ot),
    r = z(Et),
    c = L(() => e.resolve(N(t.to))),
    s = L(() => {
      const { matched: n } = c.value,
        { length: o } = n,
        i = n[o - 1],
        u = r.matched;
      if (!i || !u.length) return -1;
      const h = u.findIndex(Q.bind(null, i));
      if (h > -1) return h;
      const l = It(n[o - 2]);
      return o > 1 && It(i) === l && u[u.length - 1].path !== l
        ? u.findIndex(Q.bind(null, n[o - 2]))
        : h;
    }),
    p = L(
      () =>
        s.value > -1 &&
        (function (n, o) {
          for (const i in o) {
            const u = o[i],
              h = n[i];
            if (typeof u == "string") {
              if (u !== h) return !1;
            } else if (
              !M(h) ||
              h.length !== u.length ||
              u.some((l, f) => l !== h[f])
            )
              return !1;
          }
          return !0;
        })(r.params, c.value.params)
    ),
    b = L(
      () =>
        s.value > -1 &&
        s.value === r.matched.length - 1 &&
        zt(r.params, c.value.params)
    );
  return {
    route: c,
    href: L(() => c.value.href),
    isActive: p,
    isExactActive: b,
    navigate: function (n = {}) {
      return (function (o) {
        if (
          !(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey) &&
          !o.defaultPrevented &&
          !(o.button !== void 0 && o.button !== 0)
        ) {
          if (o.currentTarget && o.currentTarget.getAttribute) {
            const i = o.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(i)) return;
          }
          return o.preventDefault && o.preventDefault(), !0;
        }
      })(n)
        ? e[N(t.replace) ? "replace" : "push"](N(t.to)).catch(J)
        : Promise.resolve();
    },
  };
}
const Ge = Tt({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: { type: [String, Object], required: !0 },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: { type: String, default: "page" },
  },
  useLink: Dt,
  setup(t, { slots: e }) {
    const r = Ft(Dt(t)),
      { options: c } = z(ot),
      s = L(() => ({
        [Ut(t.activeClass, c.linkActiveClass, "router-link-active")]:
          r.isActive,
        [Ut(
          t.exactActiveClass,
          c.linkExactActiveClass,
          "router-link-exact-active"
        )]: r.isExactActive,
      }));
    return () => {
      const p = e.default && e.default(r);
      return t.custom
        ? p
        : Vt(
            "a",
            {
              "aria-current": r.isExactActive ? t.ariaCurrentValue : null,
              href: r.href,
              onClick: r.navigate,
              class: s.value,
            },
            p
          );
    };
  },
});
function It(t) {
  return t ? (t.aliasOf ? t.aliasOf.path : t.path) : "";
}
const Ut = (t, e, r) => t ?? e ?? r;
function Wt(t, e) {
  if (!t) return null;
  const r = t(e);
  return r.length === 1 ? r[0] : r;
}
const _e = Tt({
  name: "RouterView",
  inheritAttrs: !1,
  props: { name: { type: String, default: "default" }, route: Object },
  compatConfig: { MODE: 3 },
  setup(t, { attrs: e, slots: r }) {
    const c = z(bt),
      s = L(() => t.route || c.value),
      p = z(_t, 0),
      b = L(() => {
        let i = N(p);
        const { matched: u } = s.value;
        let h;
        for (; (h = u[i]) && !h.components; ) i++;
        return i;
      }),
      n = L(() => s.value.matched[b.value]);
    ht(
      _t,
      L(() => b.value + 1)
    ),
      ht(Be, n),
      ht(bt, s);
    const o = re();
    return (
      oe(
        () => [o.value, n.value, t.name],
        ([i, u, h], [l, f, m]) => {
          u &&
            ((u.instances[h] = i),
            f &&
              f !== u &&
              i &&
              i === l &&
              (u.leaveGuards.size || (u.leaveGuards = f.leaveGuards),
              u.updateGuards.size || (u.updateGuards = f.updateGuards))),
            !i ||
              !u ||
              (f && Q(u, f) && l) ||
              (u.enterCallbacks[h] || []).forEach((v) => v(i));
        },
        { flush: "post" }
      ),
      () => {
        const i = s.value,
          u = t.name,
          h = n.value,
          l = h && h.components[u];
        if (!l) return Wt(r.default, { Component: l, route: i });
        const f = h.props[u],
          m = f
            ? f === !0
              ? i.params
              : typeof f == "function"
              ? f(i)
              : f
            : null,
          v = Vt(
            l,
            O({}, m, e, {
              onVnodeUnmounted: (w) => {
                w.component.isUnmounted && (h.instances[u] = null);
              },
              ref: o,
            })
          );
        return Wt(r.default, { Component: v, route: i }) || v;
      }
    );
  },
});
function Ue(t) {
  const e = we(t.routes, t),
    r = t.parseQuery || Le,
    c = t.stringifyQuery || Gt,
    s = t.history,
    p = Y(),
    b = Y(),
    n = Y(),
    o = ee(U);
  let i = U;
  H &&
    t.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = dt.bind(null, (a) => "" + a),
    h = dt.bind(null, Ae),
    l = dt.bind(null, rt);
  function f(a, g) {
    if (((g = O({}, g || o.value)), typeof a == "string")) {
      const E = mt(r, a, g.path),
        j = e.resolve({ path: E.path }, g),
        x = s.createHref(E.fullPath);
      return O(E, j, {
        params: l(j.params),
        hash: rt(E.hash),
        redirectedFrom: void 0,
        href: x,
      });
    }
    let d;
    if ("path" in a) d = O({}, a, { path: mt(r, a.path, g.path).path });
    else {
      const E = O({}, a.params);
      for (const j in E) E[j] == null && delete E[j];
      (d = O({}, a, { params: h(a.params) })), (g.params = h(g.params));
    }
    const y = e.resolve(d, g),
      C = a.hash || "";
    y.params = u(l(y.params));
    const S = (function (E, j) {
      const x = j.query ? E(j.query) : "";
      return j.path + (x && "?") + x + (j.hash || "");
    })(
      c,
      O({}, a, {
        hash:
          ((P = C), wt(P).replace(Jt, "{").replace(Zt, "}").replace(Nt, "^")),
        path: y.path,
      })
    );
    var P;
    const k = s.createHref(S);
    return O(
      { fullPath: S, hash: C, query: c === Gt ? Me(a.query) : a.query || {} },
      y,
      {
        redirectedFrom: void 0,
        href: k,
      }
    );
  }
  function m(a) {
    return typeof a == "string" ? mt(r, a, o.value.path) : O({}, a);
  }
  function v(a, g) {
    if (i !== a) return X(8, { from: g, to: a });
  }
  function w(a) {
    return $(a);
  }
  function R(a) {
    const g = a.matched[a.matched.length - 1];
    if (g && g.redirect) {
      const { redirect: d } = g;
      let y = typeof d == "function" ? d(a) : d;
      return (
        typeof y == "string" &&
          ((y = y.includes("?") || y.includes("#") ? (y = m(y)) : { path: y }),
          (y.params = {})),
        O(
          { query: a.query, hash: a.hash, params: "path" in y ? {} : a.params },
          y
        )
      );
    }
  }
  function $(a, g) {
    const d = (i = f(a)),
      y = o.value,
      C = a.state,
      S = a.force,
      P = a.replace === !0,
      k = R(d);
    if (k)
      return $(
        O(m(k), {
          state: typeof k == "object" ? O({}, C, k.state) : C,
          force: S,
          replace: P,
        }),
        g || d
      );
    const E = d;
    let j;
    return (
      (E.redirectedFrom = g),
      !S &&
        (function (x, D, T) {
          const I = D.matched.length - 1,
            V = T.matched.length - 1;
          return (
            I > -1 &&
            I === V &&
            Q(D.matched[I], T.matched[V]) &&
            zt(D.params, T.params) &&
            x(D.query) === x(T.query) &&
            D.hash === T.hash
          );
        })(c, y, d) &&
        ((j = X(16, { to: E, from: y })), Ot(y, y, !0, !1)),
      (j ? Promise.resolve(j) : B(E, y))
        .catch((x) => (G(x) ? (G(x, 2) ? x : st(x)) : ct(x, E, y)))
        .then((x) => {
          if (x) {
            if (G(x, 2))
              return $(
                O({ replace: P }, m(x.to), {
                  state: typeof x.to == "object" ? O({}, C, x.to.state) : C,
                  force: S,
                }),
                g || E
              );
          } else x = _(E, y, !0, P, C);
          return A(E, y, x), x;
        })
    );
  }
  function q(a, g) {
    const d = v(a, g);
    return d ? Promise.reject(d) : Promise.resolve();
  }
  function B(a, g) {
    let d;
    const [y, C, S] = (function (k, E) {
      const j = [],
        x = [],
        D = [],
        T = Math.max(E.matched.length, k.matched.length);
      for (let I = 0; I < T; I++) {
        const V = E.matched[I];
        V && (k.matched.find((pt) => Q(pt, V)) ? x.push(V) : j.push(V));
        const ft = k.matched[I];
        ft && (E.matched.find((pt) => Q(pt, ft)) || D.push(ft));
      }
      return [j, x, D];
    })(a, g);
    d = yt(y.reverse(), "beforeRouteLeave", a, g);
    for (const k of y)
      k.leaveGuards.forEach((E) => {
        d.push(W(E, a, g));
      });
    const P = q.bind(null, a, g);
    return (
      d.push(P),
      K(d)
        .then(() => {
          d = [];
          for (const k of p.list()) d.push(W(k, a, g));
          return d.push(P), K(d);
        })
        .then(() => {
          d = yt(C, "beforeRouteUpdate", a, g);
          for (const k of C)
            k.updateGuards.forEach((E) => {
              d.push(W(E, a, g));
            });
          return d.push(P), K(d);
        })
        .then(() => {
          d = [];
          for (const k of a.matched)
            if (k.beforeEnter && !g.matched.includes(k))
              if (M(k.beforeEnter))
                for (const E of k.beforeEnter) d.push(W(E, a, g));
              else d.push(W(k.beforeEnter, a, g));
          return d.push(P), K(d);
        })
        .then(
          () => (
            a.matched.forEach((k) => (k.enterCallbacks = {})),
            (d = yt(S, "beforeRouteEnter", a, g)),
            d.push(P),
            K(d)
          )
        )
        .then(() => {
          d = [];
          for (const k of b.list()) d.push(W(k, a, g));
          return d.push(P), K(d);
        })
        .catch((k) => (G(k, 8) ? k : Promise.reject(k)))
    );
  }
  function A(a, g, d) {
    for (const y of n.list()) y(a, g, d);
  }
  function _(a, g, d, y, C) {
    const S = v(a, g);
    if (S) return S;
    const P = g === U,
      k = H ? history.state : {};
    d &&
      (y || P
        ? s.replace(a.fullPath, O({ scroll: P && k && k.scroll }, C))
        : s.push(a.fullPath, C)),
      (o.value = a),
      Ot(a, g, d, P),
      st();
  }
  let F;
  function te() {
    F ||
      (F = s.listen((a, g, d) => {
        if (!Rt.listening) return;
        const y = f(a),
          C = R(y);
        if (C) return void $(O(C, { replace: !0 }), y).catch(J);
        i = y;
        const S = o.value;
        var P, k;
        H && ((P = Ct(S.fullPath, d.delta)), (k = nt()), gt.set(P, k)),
          B(y, S)
            .catch((E) =>
              G(E, 12)
                ? E
                : G(E, 2)
                ? ($(E.to, y)
                    .then((j) => {
                      G(j, 20) && !d.delta && d.type === tt.pop && s.go(-1, !1);
                    })
                    .catch(J),
                  Promise.reject())
                : (d.delta && s.go(-d.delta, !1), ct(E, y, S))
            )
            .then((E) => {
              (E = E || _(y, S, !1)) &&
                (d.delta && !G(E, 8)
                  ? s.go(-d.delta, !1)
                  : d.type === tt.pop && G(E, 20) && s.go(-1, !1)),
                A(y, S, E);
            })
            .catch(J);
      }));
  }
  let et,
    at = Y(),
    kt = Y();
  function ct(a, g, d) {
    st(a);
    const y = kt.list();
    return y.length && y.forEach((C) => C(a, g, d)), Promise.reject(a);
  }
  function st(a) {
    return (
      et ||
        ((et = !a),
        te(),
        at.list().forEach(([g, d]) => (a ? d(a) : g())),
        at.reset()),
      a
    );
  }
  function Ot(a, g, d, y) {
    const { scrollBehavior: C } = t;
    if (!H || !C) return Promise.resolve();
    const S =
      (!d &&
        (function (P) {
          const k = gt.get(P);
          return gt.delete(P), k;
        })(Ct(a.fullPath, 0))) ||
      ((y || !d) && history.state && history.state.scroll) ||
      null;
    return ne()
      .then(() => C(a, g, S))
      .then((P) => P && ue(P))
      .catch((P) => ct(P, a, g));
  }
  const it = (a) => s.go(a);
  let lt;
  const ut = new Set(),
    Rt = {
      currentRoute: o,
      listening: !0,
      addRoute: function (a, g) {
        let d, y;
        return (
          Kt(a) ? ((d = e.getRecordMatcher(a)), (y = g)) : (y = a),
          e.addRoute(y, d)
        );
      },
      removeRoute: function (a) {
        const g = e.getRecordMatcher(a);
        g && e.removeRoute(g);
      },
      hasRoute: function (a) {
        return !!e.getRecordMatcher(a);
      },
      getRoutes: function () {
        return e.getRoutes().map((a) => a.record);
      },
      resolve: f,
      options: t,
      push: w,
      replace: function (a) {
        return w(O(m(a), { replace: !0 }));
      },
      go: it,
      back: () => it(-1),
      forward: () => it(1),
      beforeEach: p.add,
      beforeResolve: b.add,
      afterEach: n.add,
      onError: kt.add,
      isReady: function () {
        return et && o.value !== U
          ? Promise.resolve()
          : new Promise((a, g) => {
              at.add([a, g]);
            });
      },
      install(a) {
        a.component("RouterLink", Ge),
          a.component("RouterView", _e),
          (a.config.globalProperties.$router = this),
          Object.defineProperty(a.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => N(o),
          }),
          H &&
            !lt &&
            o.value === U &&
            ((lt = !0), w(s.location).catch((y) => {}));
        const g = {};
        for (const y in U) g[y] = L(() => o.value[y]);
        a.provide(ot, this), a.provide(Et, Ft(g)), a.provide(bt, o);
        const d = a.unmount;
        ut.add(a),
          (a.unmount = function () {
            ut.delete(a),
              ut.size < 1 &&
                ((i = U),
                F && F(),
                (F = null),
                (o.value = U),
                (lt = !1),
                (et = !1)),
              d();
          });
      },
    };
  return Rt;
}
function K(t) {
  return t.reduce((e, r) => e.then(() => r()), Promise.resolve());
}
function We() {
  return z(ot);
}
function Fe() {
  return z(Et);
}
export { Ie as a, Fe as b, Ue as c, We as u };
