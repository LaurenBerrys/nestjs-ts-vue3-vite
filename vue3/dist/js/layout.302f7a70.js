import {
  d as I,
  h as N,
  c as X,
  P as b,
  Q as C,
  R as L,
  u as x,
  V as _,
  W as z,
  F as K,
  N as Yt,
  aa as Gt,
  l as te,
  _ as at,
  ab as ee,
  k as j,
  U as ne,
  x as xe,
  v as ke,
  a as Z,
  w as ot,
  n as gt,
  ac as _e,
  $ as lt,
  a8 as Me,
  o as Le,
  q as Ce,
  A as je,
  a4 as ze,
  M as mt,
  ad as vt,
  r as Se,
} from "./vue.a7ce1fbe.js";
import {
  N as U,
  O as Fe,
  P as Oe,
  K as oe,
  T as Et,
  U as Ie,
  W as Tt,
  _ as Ae,
  X as Ee,
  Y as Te,
  Z as Pe,
} from "./NvapForm.feb8550d.js";
import { u as st, b as ut } from "./vue-router.805f6e2a.js";
import {
  u as V,
  a as Be,
  b as ft,
  c as Ze,
  d as $e,
  s as tt,
  e as re,
} from "./Table.e9c997d5.js";
const q = /^[a-z0-9]+(-[a-z0-9]+)*$/,
  rt = (t, e, n, o = "") => {
    const r = t.split(":");
    if (t.slice(0, 1) === "@") {
      if (r.length < 2 || r.length > 3) return null;
      o = r.shift().slice(1);
    }
    if (r.length > 3 || !r.length) return null;
    if (r.length > 1) {
      const s = r.pop(),
        l = r.pop(),
        u = { provider: r.length > 0 ? r[0] : o, prefix: l, name: s };
      return e && !et(u) ? null : u;
    }
    const i = r[0],
      c = i.split("-");
    if (c.length > 1) {
      const s = { provider: o, prefix: c.shift(), name: c.join("-") };
      return e && !et(s) ? null : s;
    }
    if (n && o === "") {
      const s = { provider: o, prefix: "", name: i };
      return e && !et(s, n) ? null : s;
    }
    return null;
  },
  et = (t, e) =>
    !!t &&
    !(
      (t.provider !== "" && !t.provider.match(q)) ||
      !((e && t.prefix === "") || t.prefix.match(q)) ||
      !t.name.match(q)
    ),
  ie = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
  it = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
  dt = Object.freeze({ ...ie, ...it }),
  bt = Object.freeze({ ...dt, body: "", hidden: !1 });
function Pt(t, e) {
  const n = (function (o, r) {
    const i = {};
    !o.hFlip != !r.hFlip && (i.hFlip = !0),
      !o.vFlip != !r.vFlip && (i.vFlip = !0);
    const c = ((o.rotate || 0) + (r.rotate || 0)) % 4;
    return c && (i.rotate = c), i;
  })(t, e);
  for (const o in bt)
    o in it
      ? o in t && !(o in n) && (n[o] = it[o])
      : o in e
      ? (n[o] = e[o])
      : o in t && (n[o] = t[o]);
  return n;
}
function He(t, e, n) {
  const o = t.icons,
    r = t.aliases || Object.create(null);
  let i = {};
  function c(s) {
    i = Pt(o[s] || r[s], i);
  }
  return c(e), n.forEach(c), Pt(t, i);
}
function ce(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object") return n;
  t.not_found instanceof Array &&
    t.not_found.forEach((r) => {
      e(r, null), n.push(r);
    });
  const o = (function (r, i) {
    const c = r.icons,
      s = r.aliases || Object.create(null),
      l = Object.create(null);
    return (
      (i || Object.keys(c).concat(Object.keys(s))).forEach(function u(f) {
        if (c[f]) return (l[f] = []);
        if (!(f in l)) {
          l[f] = null;
          const d = s[f] && s[f].parent,
            a = d && u(d);
          a && (l[f] = [d].concat(a));
        }
        return l[f];
      }),
      l
    );
  })(t);
  for (const r in o) {
    const i = o[r];
    i && (e(r, He(t, r, i)), n.push(r));
  }
  return n;
}
const De = { provider: "", aliases: {}, not_found: {}, ...ie };
function ht(t, e) {
  for (const n in e) if (n in t && typeof t[n] != typeof e[n]) return !1;
  return !0;
}
function ae(t) {
  if (typeof t != "object" || t === null) return null;
  const e = t;
  if (
    typeof e.prefix != "string" ||
    !t.icons ||
    typeof t.icons != "object" ||
    !ht(t, De)
  )
    return null;
  const n = e.icons;
  for (const r in n) {
    const i = n[r];
    if (!r.match(q) || typeof i.body != "string" || !ht(i, bt)) return null;
  }
  const o = e.aliases || Object.create(null);
  for (const r in o) {
    const i = o[r],
      c = i.parent;
    if (!r.match(q) || typeof c != "string" || (!n[c] && !o[c]) || !ht(i, bt))
      return null;
  }
  return e;
}
const Bt = Object.create(null);
function R(t, e) {
  const n = Bt[t] || (Bt[t] = Object.create(null));
  return (
    n[e] ||
    (n[e] = (function (o, r) {
      return {
        provider: o,
        prefix: r,
        icons: Object.create(null),
        missing: new Set(),
      };
    })(t, e))
  );
}
function zt(t, e) {
  return ae(e)
    ? ce(e, (n, o) => {
        o ? (t.icons[n] = o) : t.missing.add(n);
      })
    : [];
}
let Q = !1;
function le(t) {
  return typeof t == "boolean" && (Q = t), Q;
}
function Re(t, e) {
  if (typeof t != "object") return !1;
  if ((typeof e != "string" && (e = t.provider || ""), Q && !e && !t.prefix)) {
    let o = !1;
    return (
      ae(t) &&
        ((t.prefix = ""),
        ce(t, (r, i) => {
          i &&
            (function (c, s) {
              const l = rt(c, !0, Q);
              return (
                !!l &&
                (function (u, f, d) {
                  try {
                    if (typeof d.body == "string")
                      return (u.icons[f] = { ...d }), !0;
                  } catch {}
                  return !1;
                })(R(l.provider, l.prefix), l.name, s)
              );
            })(r, i) &&
            (o = !0);
        })),
      o
    );
  }
  const n = t.prefix;
  return et({ provider: e, prefix: n, name: "a" }) ? !!zt(R(e, n), t) : !1;
}
const se = Object.freeze({ width: null, height: null }),
  ue = Object.freeze({ ...se, ...it }),
  Ne = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
  Ue = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Zt(t, e, n) {
  if (e === 1) return t;
  if (((n = n || 100), typeof t == "number")) return Math.ceil(t * e * n) / n;
  if (typeof t != "string") return t;
  const o = t.split(Ne);
  if (o === null || !o.length) return t;
  const r = [];
  let i = o.shift(),
    c = Ue.test(i);
  for (;;) {
    if (c) {
      const s = parseFloat(i);
      isNaN(s) ? r.push(i) : r.push(Math.ceil(s * e * n) / n);
    } else r.push(i);
    if (((i = o.shift()), i === void 0)) return r.join("");
    c = !c;
  }
}
const Ve = (t) => t === "unset" || t === "undefined" || t === "none",
  We = /\sid="(\S+)"/g,
  qe =
    "IconifyId" +
    Date.now().toString(16) +
    ((16777216 * Math.random()) | 0).toString(16);
let Xe = 0;
const yt = Object.create(null);
function wt(t) {
  return yt[t] || yt[""];
}
function St(t) {
  let e;
  if (typeof t.resources == "string") e = [t.resources];
  else if (((e = t.resources), !(e instanceof Array) || !e.length)) return null;
  return {
    resources: e,
    path: t.path || "/",
    maxURL: t.maxURL || 500,
    rotate: t.rotate || 750,
    timeout: t.timeout || 5e3,
    random: t.random === !0,
    index: t.index || 0,
    dataAfterTimeout: t.dataAfterTimeout !== !1,
  };
}
const Ft = Object.create(null),
  Y = ["https://api.simplesvg.com", "https://api.unisvg.com"],
  xt = [];
for (; Y.length > 0; )
  Y.length === 1 || Math.random() > 0.5 ? xt.push(Y.shift()) : xt.push(Y.pop());
function Qe(t, e) {
  const n = St(e);
  return n !== null && ((Ft[t] = n), !0);
}
function kt(t) {
  return Ft[t];
}
Ft[""] = St({ resources: ["https://api.iconify.design"].concat(xt) });
let $t = (() => {
  let t;
  try {
    if (((t = fetch), typeof t == "function")) return t;
  } catch {}
})();
const Je = {
  prepare: (t, e, n) => {
    const o = [],
      r = (function (l, u) {
        const f = kt(l);
        if (!f) return 0;
        let d;
        if (f.maxURL) {
          let a = 0;
          f.resources.forEach((g) => {
            a = Math.max(a, g.length);
          });
          const p = u + ".json?icons=";
          d = f.maxURL - a - f.path.length - p.length;
        } else d = 0;
        return d;
      })(t, e),
      i = "icons";
    let c = { type: i, provider: t, prefix: e, icons: [] },
      s = 0;
    return (
      n.forEach((l, u) => {
        (s += l.length + 1),
          s >= r &&
            u > 0 &&
            (o.push(c),
            (c = { type: i, provider: t, prefix: e, icons: [] }),
            (s = l.length)),
          c.icons.push(l);
      }),
      o.push(c),
      o
    );
  },
  send: (t, e, n) => {
    if (!$t) return void n("abort", 424);
    let o = (function (i) {
      if (typeof i == "string") {
        const c = kt(i);
        if (c) return c.path;
      }
      return "/";
    })(e.provider);
    switch (e.type) {
      case "icons": {
        const i = e.prefix,
          c = e.icons.join(",");
        o += i + ".json?" + new URLSearchParams({ icons: c }).toString();
        break;
      }
      case "custom": {
        const i = e.uri;
        o += i.slice(0, 1) === "/" ? i.slice(1) : i;
        break;
      }
      default:
        return void n("abort", 400);
    }
    let r = 503;
    $t(t + o)
      .then((i) => {
        const c = i.status;
        if (c === 200) return (r = 501), i.json();
        setTimeout(() => {
          n(
            (function (s) {
              return s === 404;
            })(c)
              ? "abort"
              : "next",
            c
          );
        });
      })
      .then((i) => {
        setTimeout(
          typeof i == "object" && i !== null
            ? () => {
                n("success", i);
              }
            : () => {
                i === 404 ? n("abort", i) : n("next", r);
              }
        );
      })
      .catch(() => {
        n("next", r);
      });
  },
};
function fe(t, e) {
  t.forEach((n) => {
    const o = n.loaderCallbacks;
    o && (n.loaderCallbacks = o.filter((r) => r.id !== e));
  });
}
let Ke = 0;
var Ye = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1,
};
function Ge(t, e, n, o) {
  const r = t.resources.length,
    i = t.random ? Math.floor(Math.random() * r) : t.index;
  let c;
  if (t.random) {
    let h = t.resources.slice(0);
    for (c = []; h.length > 1; ) {
      const M = Math.floor(Math.random() * h.length);
      c.push(h[M]), (h = h.slice(0, M).concat(h.slice(M + 1)));
    }
    c = c.concat(h);
  } else c = t.resources.slice(i).concat(t.resources.slice(0, i));
  const s = Date.now();
  let l,
    u = "pending",
    f = 0,
    d = null,
    a = [],
    p = [];
  function g() {
    d && (clearTimeout(d), (d = null));
  }
  function k() {
    u === "pending" && (u = "aborted"),
      g(),
      a.forEach((h) => {
        h.status === "pending" && (h.status = "aborted");
      }),
      (a = []);
  }
  function y(h, M) {
    M && (p = []), typeof h == "function" && p.push(h);
  }
  function m() {
    (u = "failed"),
      p.forEach((h) => {
        h(void 0, l);
      });
  }
  function v() {
    a.forEach((h) => {
      h.status === "pending" && (h.status = "aborted");
    }),
      (a = []);
  }
  function w() {
    if (u !== "pending") return;
    g();
    const h = c.shift();
    if (h === void 0)
      return a.length
        ? void (d = setTimeout(() => {
            g(), u === "pending" && (v(), m());
          }, t.timeout))
        : void m();
    const M = {
      status: "pending",
      resource: h,
      callback: (P, F) => {
        (function (T, A, B) {
          const H = A !== "success";
          switch (((a = a.filter((O) => O !== T)), u)) {
            case "pending":
              break;
            case "failed":
              if (H || !t.dataAfterTimeout) return;
              break;
            default:
              return;
          }
          if (A === "abort") return (l = B), void m();
          if (H) return (l = B), void (a.length || (c.length ? w() : m()));
          if ((g(), v(), !t.random)) {
            const O = t.resources.indexOf(T.resource);
            O !== -1 && O !== t.index && (t.index = O);
          }
          (u = "completed"),
            p.forEach((O) => {
              O(B);
            });
        })(M, P, F);
      },
    };
    a.push(M), f++, (d = setTimeout(w, t.rotate)), n(h, e, M.callback);
  }
  return (
    typeof o == "function" && p.push(o),
    setTimeout(w),
    function () {
      return {
        startTime: s,
        payload: e,
        status: u,
        queriesSent: f,
        queriesPending: a.length,
        subscribe: y,
        abort: k,
      };
    }
  );
}
function Ht(t) {
  const e = { ...Ye, ...t };
  let n = [];
  function o() {
    n = n.filter((i) => i().status === "pending");
  }
  return {
    query: function (i, c, s) {
      const l = Ge(e, i, c, (u, f) => {
        o(), s && s(u, f);
      });
      return n.push(l), l;
    },
    find: function (i) {
      return n.find((c) => i(c)) || null;
    },
    setIndex: (i) => {
      e.index = i;
    },
    getIndex: () => e.index,
    cleanup: o,
  };
}
function Dt() {}
const pt = Object.create(null);
function t1(t, e, n) {
  let o, r;
  if (typeof t == "string") {
    const i = wt(t);
    if (!i) return n(void 0, 424), Dt;
    r = i.send;
    const c = (function (s) {
      if (!pt[s]) {
        const l = kt(s);
        if (!l) return;
        const u = { config: l, redundancy: Ht(l) };
        pt[s] = u;
      }
      return pt[s];
    })(t);
    c && (o = c.redundancy);
  } else {
    const i = St(t);
    if (i) {
      o = Ht(i);
      const c = wt(t.resources ? t.resources[0] : "");
      c && (r = c.send);
    }
  }
  return o && r ? o.query(e, r, n)().abort : (n(void 0, 424), Dt);
}
const Rt = "iconify2",
  J = "iconify",
  de = J + "-count",
  Nt = J + "-version",
  he = 36e5,
  e1 = 168;
function _t(t, e) {
  try {
    return t.getItem(e);
  } catch {}
}
function Ot(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {}
}
function Ut(t, e) {
  try {
    t.removeItem(e);
  } catch {}
}
function Mt(t, e) {
  return Ot(t, de, e.toString());
}
function Lt(t) {
  return parseInt(_t(t, de)) || 0;
}
const ct = { local: !0, session: !0 },
  pe = { local: new Set(), session: new Set() };
let Ct = !1,
  G = typeof window > "u" ? {} : window;
function ge(t) {
  const e = t + "Storage";
  try {
    if (G && G[e] && typeof G[e].length == "number") return G[e];
  } catch {}
  ct[t] = !1;
}
function me(t, e) {
  const n = ge(t);
  if (!n) return;
  const o = _t(n, Nt);
  if (o !== Rt) {
    if (o) {
      const s = Lt(n);
      for (let l = 0; l < s; l++) Ut(n, J + l.toString());
    }
    return Ot(n, Nt, Rt), void Mt(n, 0);
  }
  const r = Math.floor(Date.now() / he) - e1,
    i = (s) => {
      const l = J + s.toString(),
        u = _t(n, l);
      if (typeof u == "string") {
        try {
          const f = JSON.parse(u);
          if (
            typeof f == "object" &&
            typeof f.cached == "number" &&
            f.cached > r &&
            typeof f.provider == "string" &&
            typeof f.data == "object" &&
            typeof f.data.prefix == "string" &&
            e(f, s)
          )
            return !0;
        } catch {}
        Ut(n, l);
      }
    };
  let c = Lt(n);
  for (let s = c - 1; s >= 0; s--)
    i(s) || (s === c - 1 ? (c--, Mt(n, c)) : pe[t].add(s));
}
function ve() {
  if (!Ct) {
    Ct = !0;
    for (const t in ct)
      me(t, (e) => {
        const n = e.data,
          o = R(e.provider, n.prefix);
        if (!zt(o, n).length) return !1;
        const r = n.lastModified || -1;
        return (
          (o.lastModifiedCached = o.lastModifiedCached
            ? Math.min(o.lastModifiedCached, r)
            : r),
          !0
        );
      });
  }
}
function n1(t, e) {
  function n(o) {
    let r;
    if (!ct[o] || !(r = ge(o))) return;
    const i = pe[o];
    let c;
    if (i.size) i.delete((c = Array.from(i).shift()));
    else if (((c = Lt(r)), !Mt(r, c + 1))) return;
    const s = {
      cached: Math.floor(Date.now() / he),
      provider: t.provider,
      data: e,
    };
    return Ot(r, J + c.toString(), JSON.stringify(s));
  }
  Ct || ve(),
    (e.lastModified &&
      !(function (o, r) {
        const i = o.lastModifiedCached;
        if (i && i >= r) return i === r;
        if (((o.lastModifiedCached = r), i))
          for (const c in ct)
            me(c, (s) => {
              const l = s.data;
              return (
                s.provider !== o.provider ||
                l.prefix !== o.prefix ||
                l.lastModified === r
              );
            });
        return !0;
      })(t, e.lastModified)) ||
      (Object.keys(e.icons).length &&
        (e.not_found && delete (e = Object.assign({}, e)).not_found,
        n("local") || n("session")));
}
function Vt() {}
function o1(t) {
  t.iconsLoaderFlag ||
    ((t.iconsLoaderFlag = !0),
    setTimeout(() => {
      (t.iconsLoaderFlag = !1),
        (function (e) {
          e.pendingCallbacksFlag ||
            ((e.pendingCallbacksFlag = !0),
            setTimeout(() => {
              e.pendingCallbacksFlag = !1;
              const n = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
              if (!n.length) return;
              let o = !1;
              const r = e.provider,
                i = e.prefix;
              n.forEach((c) => {
                const s = c.icons,
                  l = s.pending.length;
                (s.pending = s.pending.filter((u) => {
                  if (u.prefix !== i) return !0;
                  const f = u.name;
                  if (e.icons[f])
                    s.loaded.push({ provider: r, prefix: i, name: f });
                  else {
                    if (!e.missing.has(f)) return (o = !0), !0;
                    s.missing.push({ provider: r, prefix: i, name: f });
                  }
                  return !1;
                })),
                  s.pending.length !== l &&
                    (o || fe([e], c.id),
                    c.callback(
                      s.loaded.slice(0),
                      s.missing.slice(0),
                      s.pending.slice(0),
                      c.abort
                    ));
              });
            }));
        })(t);
    }));
}
const r1 = (t, e) => {
    const n = (function (l, u = !0, f = !1) {
        const d = [];
        return (
          l.forEach((a) => {
            const p = typeof a == "string" ? rt(a, u, f) : a;
            p && d.push(p);
          }),
          d
        );
      })(t, !0, le()),
      o = (function (l) {
        const u = { loaded: [], missing: [], pending: [] },
          f = Object.create(null);
        l.sort((a, p) =>
          a.provider !== p.provider
            ? a.provider.localeCompare(p.provider)
            : a.prefix !== p.prefix
            ? a.prefix.localeCompare(p.prefix)
            : a.name.localeCompare(p.name)
        );
        let d = { provider: "", prefix: "", name: "" };
        return (
          l.forEach((a) => {
            if (
              d.name === a.name &&
              d.prefix === a.prefix &&
              d.provider === a.provider
            )
              return;
            d = a;
            const p = a.provider,
              g = a.prefix,
              k = a.name,
              y = f[p] || (f[p] = Object.create(null)),
              m = y[g] || (y[g] = R(p, g));
            let v;
            v =
              k in m.icons
                ? u.loaded
                : g === "" || m.missing.has(k)
                ? u.missing
                : u.pending;
            const w = { provider: p, prefix: g, name: k };
            v.push(w);
          }),
          u
        );
      })(n);
    if (!o.pending.length) {
      let l = !0;
      return (
        e &&
          setTimeout(() => {
            l && e(o.loaded, o.missing, o.pending, Vt);
          }),
        () => {
          l = !1;
        }
      );
    }
    const r = Object.create(null),
      i = [];
    let c, s;
    return (
      o.pending.forEach((l) => {
        const { provider: u, prefix: f } = l;
        if (f === s && u === c) return;
        (c = u), (s = f), i.push(R(u, f));
        const d = r[u] || (r[u] = Object.create(null));
        d[f] || (d[f] = []);
      }),
      o.pending.forEach((l) => {
        const { provider: u, prefix: f, name: d } = l,
          a = R(u, f),
          p = a.pendingIcons || (a.pendingIcons = new Set());
        p.has(d) || (p.add(d), r[u][f].push(d));
      }),
      i.forEach((l) => {
        const { provider: u, prefix: f } = l;
        r[u][f].length &&
          (function (d, a) {
            d.iconsToLoad
              ? (d.iconsToLoad = d.iconsToLoad.concat(a).sort())
              : (d.iconsToLoad = a),
              d.iconsQueueFlag ||
                ((d.iconsQueueFlag = !0),
                setTimeout(() => {
                  d.iconsQueueFlag = !1;
                  const { provider: p, prefix: g } = d,
                    k = d.iconsToLoad;
                  let y;
                  delete d.iconsToLoad,
                    k &&
                      (y = wt(p)) &&
                      y.prepare(p, g, k).forEach((m) => {
                        t1(p, m, (v) => {
                          if (typeof v != "object")
                            m.icons.forEach((w) => {
                              d.missing.add(w);
                            });
                          else
                            try {
                              const w = zt(d, v);
                              if (!w.length) return;
                              const h = d.pendingIcons;
                              h &&
                                w.forEach((M) => {
                                  h.delete(M);
                                }),
                                n1(d, v);
                            } catch {}
                          o1(d);
                        });
                      });
                }));
          })(l, r[u][f]);
      }),
      e
        ? (function (l, u, f) {
            const d = Ke++,
              a = fe.bind(null, f, d);
            if (!u.pending.length) return a;
            const p = { id: d, icons: u, callback: l, abort: a };
            return (
              f.forEach((g) => {
                (g.loaderCallbacks || (g.loaderCallbacks = [])).push(p);
              }),
              a
            );
          })(e, o, i)
        : Vt
    );
  },
  i1 = /[\s,]+/;
function c1(t, e) {
  e.split(i1).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        t.hFlip = !0;
        break;
      case "vertical":
        t.vFlip = !0;
    }
  });
}
function a1(t, e = 0) {
  const n = t.replace(/^-?[0-9.]*/, "");
  function o(r) {
    for (; r < 0; ) r += 4;
    return r % 4;
  }
  if (n === "") {
    const r = parseInt(t);
    return isNaN(r) ? 0 : o(r);
  }
  if (n !== t) {
    let r = 0;
    switch (n) {
      case "%":
        r = 25;
        break;
      case "deg":
        r = 90;
    }
    if (r) {
      let i = parseFloat(t.slice(0, t.length - n.length));
      return isNaN(i) ? 0 : ((i /= r), i % 1 === 0 ? o(i) : 0);
    }
  }
  return e;
}
const Wt = { ...ue, inline: !1 },
  l1 = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": !0,
    role: "img",
  },
  s1 = { display: "inline-block" },
  jt = { backgroundColor: "currentColor" },
  be = { backgroundColor: "transparent" },
  qt = { Image: "var(--svg)", Repeat: "no-repeat", Size: "100% 100%" },
  Xt = { webkitMask: jt, mask: jt, background: be };
for (const t in Xt) {
  const e = Xt[t];
  for (const n in qt) e[t + n] = qt[n];
}
const nt = {};
function Qt(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
["horizontal", "vertical"].forEach((t) => {
  const e = t.slice(0, 1) + "Flip";
  (nt[t + "-flip"] = e),
    (nt[t.slice(0, 1) + "-flip"] = e),
    (nt[t + "Flip"] = e);
});
const Jt = (t, e) => {
  const n = (function (y, m) {
      const v = { ...y };
      for (const w in m) {
        const h = m[w],
          M = typeof h;
        w in se
          ? (h === null || (h && (M === "string" || M === "number"))) &&
            (v[w] = h)
          : M === typeof v[w] && (v[w] = w === "rotate" ? h % 4 : h);
      }
      return v;
    })(Wt, e),
    o = { ...l1 },
    r = e.mode || "svg",
    i = {},
    c = e.style,
    s = typeof c != "object" || c instanceof Array ? {} : c;
  for (let y in e) {
    const m = e[y];
    if (m !== void 0)
      switch (y) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[y] = m === !0 || m === "true" || m === 1;
          break;
        case "flip":
          typeof m == "string" && c1(n, m);
          break;
        case "color":
          i.color = m;
          break;
        case "rotate":
          typeof m == "string"
            ? (n[y] = a1(m))
            : typeof m == "number" && (n[y] = m);
          break;
        case "ariaHidden":
        case "aria-hidden":
          m !== !0 && m !== "true" && delete o["aria-hidden"];
          break;
        default: {
          const v = nt[y];
          v
            ? (m !== !0 && m !== "true" && m !== 1) || (n[v] = !0)
            : Wt[y] === void 0 && (o[y] = m);
        }
      }
  }
  const l = (function (y, m) {
      const v = { ...dt, ...y },
        w = { ...ue, ...m },
        h = { left: v.left, top: v.top, width: v.width, height: v.height };
      let M = v.body;
      [v, w].forEach((W) => {
        const S = [],
          we = W.hFlip,
          At = W.vFlip;
        let E,
          D = W.rotate;
        switch (
          (we
            ? At
              ? (D += 2)
              : (S.push(
                  "translate(" +
                    (h.width + h.left).toString() +
                    " " +
                    (0 - h.top).toString() +
                    ")"
                ),
                S.push("scale(-1 1)"),
                (h.top = h.left = 0))
            : At &&
              (S.push(
                "translate(" +
                  (0 - h.left).toString() +
                  " " +
                  (h.height + h.top).toString() +
                  ")"
              ),
              S.push("scale(1 -1)"),
              (h.top = h.left = 0)),
          D < 0 && (D -= 4 * Math.floor(D / 4)),
          (D %= 4),
          D)
        ) {
          case 1:
            (E = h.height / 2 + h.top),
              S.unshift("rotate(90 " + E.toString() + " " + E.toString() + ")");
            break;
          case 2:
            S.unshift(
              "rotate(180 " +
                (h.width / 2 + h.left).toString() +
                " " +
                (h.height / 2 + h.top).toString() +
                ")"
            );
            break;
          case 3:
            (E = h.width / 2 + h.left),
              S.unshift(
                "rotate(-90 " + E.toString() + " " + E.toString() + ")"
              );
        }
        D % 2 === 1 &&
          (h.left !== h.top && ((E = h.left), (h.left = h.top), (h.top = E)),
          h.width !== h.height &&
            ((E = h.width), (h.width = h.height), (h.height = E))),
          S.length && (M = '<g transform="' + S.join(" ") + '">' + M + "</g>");
      });
      const P = w.width,
        F = w.height,
        T = h.width,
        A = h.height;
      let B, H;
      P === null
        ? ((H = F === null ? "1em" : F === "auto" ? A : F), (B = Zt(H, T / A)))
        : ((B = P === "auto" ? T : P),
          (H = F === null ? Zt(B, A / T) : F === "auto" ? A : F));
      const O = {},
        It = (W, S) => {
          Ve(S) || (O[W] = S.toString());
        };
      return (
        It("width", B),
        It("height", H),
        (O.viewBox =
          h.left.toString() +
          " " +
          h.top.toString() +
          " " +
          T.toString() +
          " " +
          A.toString()),
        { attributes: O, body: M }
      );
    })(t, n),
    u = l.attributes;
  if ((n.inline && (i.verticalAlign = "-0.125em"), r === "svg")) {
    (o.style = { ...i, ...s }), Object.assign(o, u);
    let y = 0,
      m = e.id;
    return (
      typeof m == "string" && (m = m.replace(/-/g, "_")),
      (o.innerHTML = (function (v, w = qe) {
        const h = [];
        let M;
        for (; (M = We.exec(v)); ) h.push(M[1]);
        if (!h.length) return v;
        const P =
          "suffix" + ((16777216 * Math.random()) | Date.now()).toString(16);
        return (
          h.forEach((F) => {
            const T = typeof w == "function" ? w(F) : w + (Xe++).toString(),
              A = F.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            v = v.replace(
              new RegExp('([#;"])(' + A + ')([")]|\\.[a-z])', "g"),
              "$1" + T + P + "$3"
            );
          }),
          (v = v.replace(new RegExp(P, "g"), ""))
        );
      })(l.body, m ? () => m + "ID" + y++ : "iconifyVue")),
      N("svg", o)
    );
  }
  const { body: f, width: d, height: a } = t,
    p = r === "mask" || (r !== "bg" && f.indexOf("currentColor") !== -1),
    g = (function (y, m) {
      let v =
        y.indexOf("xlink:") === -1
          ? ""
          : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
      for (const w in m) v += " " + w + '="' + m[w] + '"';
      return '<svg xmlns="http://www.w3.org/2000/svg"' + v + ">" + y + "</svg>";
    })(f, { ...u, width: d + "", height: a + "" });
  var k;
  return (
    (o.style = {
      ...i,
      "--svg":
        ((k = g),
        'url("data:image/svg+xml,' +
          (function (y) {
            return y
              .replace(/"/g, "'")
              .replace(/%/g, "%25")
              .replace(/#/g, "%23")
              .replace(/</g, "%3C")
              .replace(/>/g, "%3E")
              .replace(/\s+/g, " ");
          })(k) +
          '")'),
      width: Qt(u.width),
      height: Qt(u.height),
      ...s1,
      ...(p ? jt : be),
      ...s,
    }),
    N("span", o)
  );
};
var Kt;
if (
  (le(!0),
  (Kt = Je),
  (yt[""] = Kt),
  typeof document < "u" && typeof window < "u")
) {
  ve();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload;
    typeof e == "object" &&
      e !== null &&
      (e instanceof Array ? e : [e]).forEach((n) => {
        try {
          typeof n != "object" ||
            n === null ||
            n instanceof Array ||
            typeof n.icons != "object" ||
            typeof n.prefix != "string" ||
            Re(n);
        } catch {}
      });
  }
  if (t.IconifyProviders !== void 0) {
    const e = t.IconifyProviders;
    if (typeof e == "object" && e !== null)
      for (let n in e)
        try {
          const o = e[n];
          if (typeof o != "object" || !o || o.resources === void 0) continue;
          Qe(n, o);
        } catch {}
  }
}
const u1 = { ...dt, body: "" },
  f1 = I({
    inheritAttrs: !1,
    data: () => ({ iconMounted: !1, counter: 0 }),
    mounted() {
      (this._name = ""), (this._loadingIcon = null), (this.iconMounted = !0);
    },
    unmounted() {
      this.abortLoading();
    },
    methods: {
      abortLoading() {
        this._loadingIcon &&
          (this._loadingIcon.abort(), (this._loadingIcon = null));
      },
      getIcon(t, e) {
        if (typeof t == "object" && t !== null && typeof t.body == "string")
          return (this._name = ""), this.abortLoading(), { data: t };
        let n;
        if (typeof t != "string" || (n = rt(t, !1, !0)) === null)
          return this.abortLoading(), null;
        const o = (function (i) {
          const c = typeof i == "string" ? rt(i, !0, Q) : i;
          if (c) {
            const s = R(c.provider, c.prefix),
              l = c.name;
            return s.icons[l] || (s.missing.has(l) ? null : void 0);
          }
        })(n);
        if (!o)
          return (
            (this._loadingIcon && this._loadingIcon.name === t) ||
              (this.abortLoading(),
              (this._name = ""),
              o !== null &&
                (this._loadingIcon = {
                  name: t,
                  abort: r1([n], () => {
                    this.counter++;
                  }),
                })),
            null
          );
        this.abortLoading(), this._name !== t && ((this._name = t), e && e(t));
        const r = ["iconify"];
        return (
          n.prefix !== "" && r.push("iconify--" + n.prefix),
          n.provider !== "" && r.push("iconify--" + n.provider),
          { data: o, classes: r }
        );
      },
    },
    render() {
      this.counter;
      const t = this.$attrs,
        e = this.iconMounted ? this.getIcon(t.icon, t.onLoad) : null;
      if (!e) return Jt(u1, t);
      let n = t;
      return (
        e.classes &&
          (n = {
            ...t,
            class:
              (typeof t.class == "string" ? t.class + " " : "") +
              e.classes.join(" "),
          }),
        Jt({ ...dt, ...e.data }, n)
      );
    },
  }),
  d1 = { "aria-hidden": "true", width: "1em", height: "1em" },
  h1 = ["xlink:href", "fill"],
  p1 = I({
    __name: "SvgIcon",
    props: {
      icon: { type: String, required: !0 },
      prefix: { type: String, default: "icon-custom" },
      color: { type: String, default: "currentColor" },
    },
    setup(t) {
      const e = t,
        n = X(() => `#${e.prefix}-${e.icon}`);
      return (o, r) => (
        b(),
        C("svg", d1, [
          L("use", { "xlink:href": x(n), fill: t.color }, null, 8, h1),
        ])
      );
    },
  });
function $(t, e = { size: 12 }) {
  return () => N(U, e, { default: () => N(f1, { icon: t }) });
}
function ye(t, e = { size: 12 }) {
  return () => N(U, e, { default: () => N(p1, { icon: t }) });
}
const g1 = I({
    __name: "BreadCrumb",
    setup(t) {
      const e = st(),
        n = ut();
      return (o, r) => {
        const i = Fe,
          c = Oe;
        return (
          b(),
          _(c, null, {
            default: z(() => [
              (b(!0),
              C(
                K,
                null,
                Yt(
                  x(n).matched.filter((s) => {
                    var l;
                    return !!((l = s.meta) != null && l.title);
                  }),
                  (s) => (
                    b(),
                    _(
                      i,
                      {
                        key: s.path,
                        onClick: (l) => {
                          var u;
                          (u = s.path) !== n.path && e.push(u);
                        },
                      },
                      {
                        default: z(() => {
                          return [
                            (b(),
                            _(
                              Gt(
                                ((l = s.meta),
                                l != null && l.customIcon
                                  ? ye(l.customIcon, { size: 18 })
                                  : l != null && l.icon
                                  ? $(l.icon, { size: 18 })
                                  : null)
                              )
                            )),
                            te(" " + at(s.meta.title), 1),
                          ];
                          var l;
                        }),
                        _: 2,
                      },
                      1032,
                      ["onClick"]
                    )
                  )
                ),
                128
              )),
            ]),
            _: 1,
          })
        );
      };
    },
  }),
  m1 = {
    class: "inline-block",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
  },
  v1 = [
    L(
      "path",
      {
        fill: "currentColor",
        d: "M11 13h10v-2H11m0-2h10V7H11M3 3v2h18V3M3 21h18v-2H3m0-7l4 4V8m4 9h10v-2H11v2Z",
      },
      null,
      -1
    ),
  ],
  b1 = {
    name: "mdi-format-indent-decrease",
    render: function (t, e) {
      return b(), C("svg", m1, v1);
    },
  },
  y1 = {
    class: "inline-block",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
  },
  w1 = [
    L(
      "path",
      {
        fill: "currentColor",
        d: "M11 13h10v-2H11m0-2h10V7H11M3 3v2h18V3M11 17h10v-2H11M3 8v8l4-4m-4 9h18v-2H3v2Z",
      },
      null,
      -1
    ),
  ],
  x1 = {
    name: "mdi-format-indent-increase",
    render: function (t, e) {
      return b(), C("svg", y1, w1);
    },
  },
  k1 = {
    __name: "MenuCollapse",
    setup(t) {
      const e = V();
      return (n, o) => {
        const r = x1,
          i = b1,
          c = U;
        return (
          b(),
          _(
            c,
            {
              size: "20",
              "cursor-pointer": "",
              onClick: o[0] || (o[0] = (s) => x(e).setCollapsed()),
            },
            {
              default: z(() => [
                x(e).collapsed
                  ? (b(), _(r, { key: 0 }))
                  : (b(), _(i, { key: 1 })),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  },
  _1 = {
    class: "inline-block",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em",
  },
  M1 = [
    L(
      "path",
      {
        fill: "currentColor",
        d: "m290 236.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6l43.7 43.7a8.01 8.01 0 0 0 13.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 0 0 0 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 0 0-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6L423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z",
      },
      null,
      -1
    ),
  ],
  L1 = {
    name: "ant-design-fullscreen-outlined",
    render: function (t, e) {
      return b(), C("svg", _1, M1);
    },
  },
  C1 = {
    class: "inline-block",
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em",
  },
  j1 = [
    L(
      "path",
      {
        fill: "currentColor",
        d: "M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 0 0 0 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 0 0 391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6L877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 0 0-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z",
      },
      null,
      -1
    ),
  ],
  z1 = {
    name: "ant-design-fullscreen-exit-outlined",
    render: function (t, e) {
      return b(), C("svg", C1, j1);
    },
  },
  S1 = {
    __name: "FullScreen",
    setup(t) {
      const { isFullscreen: e, toggle: n } = Be();
      return (o, r) => {
        const i = z1,
          c = L1,
          s = U;
        return (
          b(),
          _(
            s,
            {
              mr20: "",
              size: "18",
              style: { cursor: "pointer" },
              onClick: x(n),
            },
            {
              default: z(() => [
                x(e) ? (b(), _(i, { key: 0 })) : (b(), _(c, { key: 1 })),
              ]),
              _: 1,
            },
            8,
            ["onClick"]
          )
        );
      };
    },
  },
  F1 = {
    class: "inline-block",
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em",
  },
  O1 = [
    ee(
      '<g fill="none"><path fill="#212121" d="M26.345 5.926c-.55-.22-.992-.65-1.238-1.2c-.668-1.561-2.18-2.672-3.948-2.732a4.404 4.404 0 0 0-2.583.74c-.442.3-1.022.3-1.464 0a4.374 4.374 0 0 0-2.573-.74a4.439 4.439 0 0 0-3.065 1.381c-.363.38-.844.63-1.355.75a5.238 5.238 0 0 0-2.72 1.541l-.01.01C5.836 7.317 5.001 9.468 5.011 11.74v.02c.01.08 0 6.233 0 6.233h.994l19.994.02l1-.016s.044-1.89.072-2.465c.023-.496.039-1.27.039-1.27c.02-.671.294-1.311.736-1.811a4.093 4.093 0 0 0 1.032-2.632a4.08 4.08 0 0 0-2.534-3.892Z"></path><path fill="#F4C6AD" d="M26.122 14.519L26 18.012c.54 0 .98-.466 1-1.016l.072-1.465c.01-.225.02-.507.026-.748a3.25 3.25 0 1 1-.976-.264Zm-21.107.224c-.001 1.175-.004 2.25-.004 2.25c.02.55.455 1 .995 1v-3.484a3.25 3.25 0 1 1-.991.234Z"></path><path fill="#FFD7C2" d="M26.046 16.684L26 18.012h.02l-.046 2.204C25.735 26.068 21.344 30 16.005 30c-5.338 0-9.73-3.931-9.97-9.784l-.075-2.225a1 1 0 0 0 .046.001v-4c-.03-.86.361-1.523.95-2.133a4.647 4.647 0 0 0 1.228-2.451a.18.18 0 0 1 .138-.15c.098-.03.186.03.216.11c.609 1.54 2.082 2.641 3.81 2.641c.442 0 .806-.37.806-.82V9.458c0-.11.069-.19.157-.21h.128a.21.21 0 0 1 .108.08a6.63 6.63 0 0 0 5.313 2.681h5.078c1.238 0 2.23 1.04 2.19 2.311l-.032.925l-.038.84l-.012.6Z"></path><path fill="#990838" d="M16.002 23.174a6.473 6.473 0 0 1-3.016-.733a.328.328 0 0 0-.429.472a4.1 4.1 0 0 0 3.445 1.887a4.1 4.1 0 0 0 3.445-1.887c.18-.281-.13-.622-.43-.472a6.354 6.354 0 0 1-3.015.733Z"></path><path fill="#E5AF93" d="M15.993 22c.68 0 1.27-.345 1.63-.873c.32-.477-.02-1.127-.59-1.127h-2.07c-.57 0-.91.65-.59 1.127c.35.528.95.873 1.62.873Z"></path><path fill="#fff" d="M8.19 17.87a3.112 3.112 0 0 1 3.01-2.34c1.51 0 2.76 1.07 3.04 2.49c.06.31-.19.6-.51.6H8.79c-.4 0-.7-.37-.6-.75Zm15.64 0a3.112 3.112 0 0 0-3.01-2.34c-1.51 0-2.76 1.07-3.04 2.49c-.06.31.19.6.51.6h4.94c.4 0 .7-.37.6-.75Z"></path><path fill="#7D4533" d="M9.68 18.1c0-1.09.89-1.98 1.98-1.98a1.985 1.985 0 0 1 1.91 2.51H9.75c-.04-.17-.07-.35-.07-.53Zm12.66 0c0-1.09-.89-1.98-1.98-1.98a1.985 1.985 0 0 0-1.91 2.51h3.82c.04-.17.07-.35.07-.53Z"></path><path fill="#000" d="M11.66 16.97a1.129 1.129 0 0 1 1 1.66h-2a1.129 1.129 0 0 1 1-1.66Zm8.7 0a1.129 1.129 0 0 0-1 1.66h2a1.129 1.129 0 0 0-1-1.66Z"></path><path fill="#fff" d="M11.33 17.32a.35.35 0 1 1-.7 0a.35.35 0 0 1 .7 0Zm8.77 0a.35.35 0 1 1-.7 0a.35.35 0 0 1 .7 0Z"></path><path fill="#212121" d="M9.608 14.563c.521-.185 1.268-.326 2.255-.233a.5.5 0 1 0 .094-.996c-1.133-.106-2.026.053-2.685.287a.5.5 0 1 0 .336.942Zm12.57-.942c-.66-.234-1.552-.393-2.685-.287a.5.5 0 1 0 .094.996c.987-.093 1.734.048 2.255.233a.5.5 0 0 0 .336-.942Z"></path></g>',
      1
    ),
  ],
  I1 = {
    name: "fluent-emoji-flat-boy-light",
    render: function (t, e) {
      return b(), C("svg", F1, O1);
    },
  },
  A1 = { flex: "", "items-center": "", "cursor-pointer": "" },
  E1 = ["src"],
  T1 = {
    __name: "UserAvatar",
    setup(t) {
      const e = ft(),
        { avatar: n = "" } = e.userInfo,
        o = [
          {
            label: "退出登录",
            key: "logout",
            icon: $("mdi:exit-to-app", { size: "14px" }),
          },
        ];
      function r(i) {
        i === "logout" &&
          $dialog.confirm({
            title: "提示",
            type: "info",
            content: "确认退出？",
            confirm() {
              e.resetStateAndToLogin(), window.$message.success("已退出登录");
            },
          });
      }
      return (i, c) => {
        const s = I1,
          l = oe;
        return (
          b(),
          _(
            l,
            { options: o, onSelect: r },
            {
              default: z(() => [
                L("div", A1, [
                  x(n)
                    ? (b(),
                      C(
                        "img",
                        {
                          key: 0,
                          src: x(n),
                          mr10: "",
                          "w-35": "",
                          "h-35": "",
                          "rounded-full": "",
                        },
                        null,
                        8,
                        E1
                      ))
                    : (b(),
                      _(s, {
                        key: 1,
                        mr10: "",
                        "w-35": "",
                        "h-35": "",
                        "rounded-full": "",
                      })),
                  L("span", null, at(x(e).name), 1),
                ]),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  },
  P1 = {
    class: "inline-block",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
  },
  B1 = [
    L(
      "path",
      {
        fill: "currentColor",
        d: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z",
      },
      null,
      -1
    ),
  ],
  Z1 = {
    name: "mdi-github",
    render: function (t, e) {
      return b(), C("svg", P1, B1);
    },
  },
  $1 = {
    __name: "GithubSite",
    setup(t) {
      function e() {
        window.open(
          "https://github.com/supercode-peter/nestjs-ts-vue3-vite.git"
        );
      }
      return (n, o) => {
        const r = Z1,
          i = U;
        return (
          b(),
          _(
            i,
            {
              "mr-20": "",
              size: "18",
              style: { cursor: "pointer" },
              onClick: e,
            },
            { default: z(() => [j(r)]), _: 1 }
          )
        );
      };
    },
  },
  H1 = {
    class: "inline-block",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
  },
  D1 = [
    L(
      "path",
      {
        fill: "currentColor",
        d: "m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81l1.42-1.42M1 13h3v-2H1m12 9h-2v3h2",
      },
      null,
      -1
    ),
  ],
  R1 = {
    name: "mdi-white-balance-sunny",
    render: function (t, e) {
      return b(), C("svg", H1, D1);
    },
  },
  N1 = {
    class: "inline-block",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
  },
  U1 = [
    L(
      "path",
      {
        fill: "currentColor",
        d: "M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12Z",
      },
      null,
      -1
    ),
  ],
  V1 = {
    name: "mdi-moon-waning-crescent",
    render: function (t, e) {
      return b(), C("svg", N1, U1);
    },
  },
  W1 = I({
    __name: "ThemeMode",
    setup(t) {
      const e = V(),
        n = Ze(),
        o = () => {
          e.toggleDark(), $e(n)();
        };
      return (r, i) => {
        const c = V1,
          s = R1,
          l = U;
        return (
          b(),
          _(
            l,
            { "mr-20": "", "cursor-pointer": "", size: "18", onClick: o },
            {
              default: z(() => [
                x(n) ? (b(), _(c, { key: 0 })) : (b(), _(s, { key: 1 })),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  }),
  q1 = { flex: "", "items-center": "" },
  X1 = { "ml-auto": "", flex: "", "items-center": "" },
  Q1 = {
    __name: "index",
    setup: (t) => (e, n) => (
      b(),
      C(
        K,
        null,
        [
          L("div", q1, [
            j(k1),
            j(g1, { "ml-15": "", hidden: "", "sm:block": "" }),
          ]),
          L("div", X1, [j(W1), j($1), j(S1), j(T1)]),
        ],
        64
      )
    ),
  },
  J1 = {
    class: "inline-block",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 512 512",
  },
  K1 = [
    ee(
      '<path fill="#51BA7B" d="M487.819 258.669H439.1c-10.041 0-18.181-8.14-18.181-18.181s8.14-18.181 18.181-18.181h48.719c10.041 0 18.181 8.14 18.181 18.181s-8.14 18.181-18.181 18.181z"></path><path fill="#BADEBE" d="M415.747 69.674s-.387.603-1.059 1.667a8.05 8.05 0 0 1-.638.799a59.208 59.208 0 0 0-1.057 1.933c-.357.806-.812 1.618-1.199 2.599a55.875 55.875 0 0 0-1.233 3.083c-.433 1.086-.783 2.248-1.19 3.426c-.364 1.183-.742 2.395-1.064 3.614c-.316 1.219-.645 2.445-.884 3.643c-.286 1.219-.475 2.381-.679 3.523c-.188 1.142-.308 2.214-.434 3.243c-.041.505-.077.988-.118 1.457c-.043.483-.07.939-.063 1.338c-.007.812-.063 1.646 0 2.221c.014.315.034.609.048.882c0 .14.007.273.015.399c.014.105.027.209.041.301c.113.777.161 1.26.161 1.26l.19 2.025a7.085 7.085 0 0 1-6.396 7.712c-2.829.267-5.421-1.177-6.774-3.467c0 0-.489-.826-1.308-2.353c-.099-.189-.204-.392-.316-.603c-.084-.203-.181-.413-.274-.63c-.195-.448-.398-.932-.616-1.45c-.484-1.058-.806-2.164-1.233-3.432a23.41 23.41 0 0 1-.561-1.933c-.174-.665-.349-1.352-.532-2.066c-.301-1.387-.622-2.879-.876-4.393c-.231-1.506-.491-3.089-.638-4.659c-.195-1.583-.308-3.18-.419-4.784c-.106-1.604-.147-3.201-.19-4.791c0-1.576-.027-3.145.043-4.665c.034-1.513.125-2.998.238-4.42c.077-1.408.28-2.802.414-4.063c.188-1.31.371-2.48.588-3.622c.301-1.31.622-2.529.853-3.411c.31-1.212.477-1.913.477-1.913c1.968-7.887 9.967-12.692 17.856-10.724c7.894 1.975 12.691 9.968 10.725 17.862a14.708 14.708 0 0 1-1.815 4.266l-.083.126zm-56.35 17.01a14.892 14.892 0 0 0 1.036-4.518c.559-8.111-5.562-15.145-13.681-15.705c-8.118-.56-15.151 5.562-15.711 13.681c0 0-.05.715-.133 1.976a70.1 70.1 0 0 0-.258 4.133c.014.665.055 1.233.091 1.912c.048.638.063 1.366.154 2.025c.174 1.331.308 2.823.595 4.245l.407 2.221c.168.729.335 1.478.511 2.234c.322 1.527.783 3.033 1.19 4.575c.477 1.526.91 3.068 1.457 4.574a88.52 88.52 0 0 0 1.654 4.483c.552 1.464 1.211 2.893 1.806 4.259a121.46 121.46 0 0 0 1.905 3.936c.694 1.254 1.255 2.41 1.948 3.496c.665 1.086 1.226 2.052 1.864 2.936c.622.882 1.079 1.611 1.618 2.248l1.59 1.941c1.849 2.255 4.973 3.243 7.887 2.234c3.74-1.289 5.715-5.373 4.426-9.107l-.469-1.338s-.168-.497-.469-1.366c-.162-.386-.303-1.051-.498-1.688c-.204-.631-.357-1.478-.554-2.347c-.217-.833-.344-1.891-.532-2.906a93.503 93.503 0 0 1-.428-3.362c-.097-1.198-.231-2.396-.274-3.664a61.991 61.991 0 0 1-.118-3.797c-.029-1.268.041-2.543.063-3.775c.091-1.219.111-2.438.251-3.566c.063-.56.12-1.121.174-1.661c.077-.518.162-1.03.233-1.526c.132-1.016.371-1.829.525-2.627c.077-.407.21-.693.301-1.016c.097-.294.181-.645.267-.841c.188-.127.258-.147.342-.294l.751-1.829l.079-.176z"></path><path fill="#8ACCA0" d="M456.112 143.24c-11.449-34.634-48.8-53.434-83.441-41.983c-34.634 11.449-53.431 48.807-41.982 83.442c17.717 53.598 16.873 94.849-2.59 126.04c-1.716 2.393-3.661 5.076-4.907 6.585a66.228 66.228 0 0 0-7.289 6.104a66.535 66.535 0 0 0-3.758 2.035l-2.851 1.674c-.113.077-.154.112-.246.189c-.041.035-.077.07-.125.112c-.022.021-.029.035-.07.07l-.233.127c-.301.182-.629.371-.973.575c-.364.203-.749.413-1.156.637a56.07 56.07 0 0 1-6.494 2.956c-2.711 1.044-6.03 2.109-10.03 3.04a104.442 104.442 0 0 1-13.996 2.179c-5.317.483-11.27.672-17.694.476a202.645 202.645 0 0 1-4.912-.224c-1.597-.105-3.208-.21-4.826-.322c-4.134-.393-8.308-.784-12.517-1.191c-1.907-.168-3.875-.42-5.821-.623c-1.962-.217-3.776-.469-5.681-.693c-1.828-.259-3.656-.504-5.437-.777c-1.765-.287-3.537-.553-5.288-.882c-1.738-.294-3.538-.673-5.331-1.023l-2.774-.603c-.925-.203-1.864-.406-2.865-.652l-2.943-.693l-3.095-.77c-2.136-.539-4.26-1.078-6.382-1.618c-8.713-2.241-17.861-4.617-26.604-6.732l-1.64-.398l-.202-.05l-.099-.028c-1.233-.357-.398-.104-.699-.189l-.4-.07l-.792-.147a365.722 365.722 0 0 1-3.152-.56c-2.634-.476-5.24-.953-7.824-1.415a44.945 44.945 0 0 0-1.955-.322c-.631-.097-1.26-.196-1.891-.287c-1.254-.189-2.5-.371-3.74-.56c-2.516-.316-4.966-.658-7.439-.924c-9.863-1.1-19.447-1.646-28.545-1.619c-9.107.05-17.682.61-25.54 1.661c-7.839 1.023-14.949 2.522-21.051 4.175a137.419 137.419 0 0 0-8.419 2.578a129.198 129.198 0 0 0-6.851 2.592c-2.032.847-3.79 1.646-5.204 2.326l-2.039 1.001c-.982.505-1.479.757-1.479.757c-26.17 13.548-36.403 45.75-22.857 71.92c13.555 26.178 45.756 36.405 71.927 22.857l-1.45.735c-.301.14-.742.351-1.324.63c-.344.155-.848.386-1.507.693c-.251.133-.342.203-.21.21c.169.015.504-.014 1.072-.063c1.163-.091 3.138-.259 5.955-.231c2.774 0 6.41.231 10.661.757c4.272.54 9.225 1.457 14.668 2.767c1.358.321 2.767.721 4.175 1.071c.715.203 1.437.413 2.165.617l1.086.308c.378.105.735.203 1.023.302c1.394.441 2.808.882 4.231 1.331c1.765.575 3.544 1.149 5.337 1.731c7.824 2.472 15.711 5.092 24.357 7.978c2.227.743 4.462 1.478 6.709 2.221l3.496 1.142l3.692 1.17l1.864.589l1.946.588l3.923 1.177c2.704.77 5.387 1.555 8.175 2.269c2.76.75 5.527 1.415 8.294 2.087c2.745.658 5.464 1.248 8.168 1.843c2.634.54 5.344 1.121 7.901 1.604c2.584.476 5.107.981 7.704 1.429c2.543.441 5.072.876 7.586 1.31c2.208.364 4.407.722 6.6 1.086c1.443.217 2.885.427 4.315.644c1.366.182 2.724.371 4.077.553c2.711.351 5.428.666 8.139.946c10.851 1.128 21.682 1.647 32.23 1.513a239.007 239.007 0 0 0 30.479-2.291c9.666-1.366 18.689-3.313 26.716-5.548a191.408 191.408 0 0 0 20.791-7.061c1.428-.595 2.781-1.162 4.055-1.695c1.269-.568 2.459-1.093 3.566-1.59l.812-.364l.912-.434c.602-.295 1.177-.568 1.731-.834c1.086-.54 2.073-1.023 2.955-1.464c1.919-.981 2.943-1.5 2.943-1.5l1.975-1.008a66.247 66.247 0 0 0 15.966-11.503a66.576 66.576 0 0 0 6.185-3.588c18.693-12.238 30.142-28.256 38.55-40.018l.926-1.294l.862-1.338c23.738-36.839 36.169-79.029 36.947-125.397c.602-35.782-5.867-74.417-19.227-114.833z"></path><path fill="#FFF" d="m379.069 155.928l4.301 16.062h-.021c.007.028.027.028.034.042c1.688 6.311-2.059 12.798-8.363 14.486c-6.312 1.688-12.799-2.059-14.487-8.364c-.007-.014-.007-.021-.014-.049l-.05.014l-4.301-16.062l.14-.035c-1.057-5.989 2.55-11.887 8.532-13.492c5.969-1.597 12.048 1.709 14.116 7.425l.113-.027zm48.159-20.587c-2.697-5.45-9.107-8.048-14.858-5.792c-5.765 2.263-8.693 8.532-6.971 14.367l-.132.049l6.08 15.481l.05-.021c.007.021.007.027.014.042c2.387 6.08 9.254 9.071 15.334 6.683c6.08-2.381 9.071-9.254 6.682-15.334c0-.008-.027-.008-.034-.028l.021-.015l-6.08-15.474l-.106.042z"></path><path fill="#51BA7B" d="m386.722 311.106l40.557 17.233c9.247 3.93 13.555 14.612 9.632 23.859c-3.93 9.253-14.619 13.561-23.866 9.632a21.165 21.165 0 0 1-1.24-.581l-39.143-20.223c-8.118-4.196-11.292-14.171-7.104-22.29c3.994-7.728 13.284-10.95 21.164-7.63"></path><path fill="#74C48D" d="M394.574 405.513c-12.623 0-25.31-3.56-36.185-10.523a5.688 5.688 0 0 1 6.134-9.581c15.343 9.826 35.001 11.501 51.304 4.37a5.69 5.69 0 0 1 4.558 10.424c-8.137 3.557-16.959 5.31-25.811 5.31zm-52.133 40.603a5.69 5.69 0 0 0-5.396-5.966c-14.406-.721-28.217-7.446-37.895-18.452a5.689 5.689 0 0 0-8.542 7.513c11.694 13.299 28.412 21.428 45.868 22.301a5.686 5.686 0 0 0 5.965-5.396zm81.464-133.345c15.644-.293 30.09-5.857 41.777-16.091a5.688 5.688 0 0 0-7.496-8.558c-9.641 8.443-21.568 13.033-34.493 13.275a5.69 5.69 0 0 0-5.581 5.794a5.687 5.687 0 0 0 5.684 5.581l.109-.001z"></path>',
      6
    ),
  ],
  Y1 = {
    name: "custom-logo",
    render: function (t, e) {
      return b(), C("svg", J1, K1);
    },
  },
  G1 = {
    __name: "SideLogo",
    setup(t) {
      const e = tt.title,
        n = V();
      return (o, r) => {
        const i = Y1,
          c = ne("router-link");
        return (
          b(),
          _(
            c,
            { "h-60": "", "f-c-c": "", to: "/" },
            {
              default: z(() => [
                j(i, { "text-16": "", "color-primary": "" }),
                xe(
                  L(
                    "h2",
                    {
                      "ml-10": "",
                      "color-primary": "",
                      "text-16": "",
                      "font-bold": "",
                      "max-w-140": "",
                      "flex-shrink-0": "",
                    },
                    at(x(e)),
                    513
                  ),
                  [[ke, !x(n).collapsed]]
                ),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  },
  tn = I({
    __name: "SideMenu",
    setup(t) {
      const e = st(),
        n = ut(),
        o = ft(),
        r = V(),
        i = X(() => {
          var a;
          return ((a = n.meta) == null ? void 0 : a.activeMenu) || n.name;
        }),
        c = X(() =>
          o
            .menus()
            .map((a) => u(a))
            .sort((a, p) => a.order - p.order)
        ),
        s = Z(null);
      function l(a, p) {
        return Et(p)
          ? p
          : "/" +
              [a, p]
                .filter((g) => !!g && g !== "/")
                .map((g) => g.replace(/(^\/)|(\/$)/g, ""))
                .join("/");
      }
      function u(a, p = "") {
        var y, m;
        let g = {
          label: (a.meta && a.meta.title) || a.name,
          key: a.name,
          path: l(p, a.path),
          icon: f(a.meta),
          order: ((y = a.meta) == null ? void 0 : y.order) || 0,
        };
        const k = a.children
          ? a.children.filter((v) => v.name && !v.isHidden)
          : [];
        if (!k.length) return g;
        if (k.length === 1) {
          const v = k[0];
          g = {
            ...g,
            label: ((m = v.meta) == null ? void 0 : m.title) || v.name,
            key: v.name,
            path: l(g.path, v.path),
            icon: f(v.meta),
          };
          const w = v.children
            ? v.children.filter((h) => h.name && !h.isHidden)
            : [];
          w.length === 1
            ? (g = u(w[0], g.path))
            : w.length > 1 &&
              (g.children = w
                .map((h) => u(h, g.path))
                .sort((h, M) => h.order - M.order));
        } else
          g.children = k
            .map((v) => u(v, g.path))
            .sort((v, w) => v.order - w.order);
        return g;
      }
      function f(a) {
        return a != null && a.customIcon
          ? ye(a.customIcon, { size: 18 })
          : a != null && a.icon
          ? $(a.icon, { size: 18 })
          : null;
      }
      function d(a, p) {
        Et(p.path)
          ? window.open(p.path)
          : p.path === n.path
          ? o.reloadPage()
          : e.push(p.path);
      }
      return (
        ot(n, async () => {
          var a;
          await gt(), (a = s.value) == null || a.showOption();
        }),
        (a, p) => {
          const g = Ie;
          return (
            b(),
            _(
              g,
              {
                ref_key: "menu",
                ref: s,
                class: "side-menu",
                accordion: "",
                indent: 18,
                "collapsed-icon-size": 22,
                "collapsed-width": 64,
                options: x(c),
                value: x(i),
                collapsed: x(r).collapsed,
                "onUpdate:value": d,
              },
              null,
              8,
              ["options", "value", "collapsed"]
            )
          );
        }
      );
    },
  }),
  en = I({
    __name: "index",
    setup: (t) => (e, n) => (b(), C(K, null, [j(G1), j(tn)], 64)),
  }),
  nn = I({
    __name: "AppMain",
    setup(t) {
      const e = ft(),
        n = st().getRoutes(),
        o = X(() =>
          n
            .filter((r) => {
              var i;
              return (i = r.meta) == null ? void 0 : i.keepAlive;
            })
            .map((r) => r.name)
        );
      return (r, i) => {
        const c = ne("router-view");
        return (
          b(),
          _(c, null, {
            default: z(({ Component: s, route: l }) => [
              (b(),
              _(
                _e,
                { include: x(o) },
                [
                  x(e).reloadFlag
                    ? (b(), _(Gt(s), { key: l.fullPath }))
                    : lt("", !0),
                ],
                1032,
                ["include"]
              )),
            ]),
            _: 1,
          })
        );
      };
    },
  }),
  on = I({
    __name: "ContextMenu",
    props: {
      show: { type: Boolean, default: !1 },
      currentPath: { type: String, default: "" },
      x: { type: Number, default: 0 },
      y: { type: Number, default: 0 },
    },
    emits: ["update:show"],
    setup(t, { emit: e }) {
      const n = t,
        o = re(),
        r = ft(),
        i = X(() => [
          {
            label: "重新加载",
            key: "reload",
            disabled: n.currentPath !== o.activeTag,
            icon: $("mdi:refresh", { size: 14 }),
          },
          {
            label: "关闭",
            key: "close",
            disabled: o.tags.length <= 1,
            icon: $("mdi:close", { size: 14 }),
          },
          {
            label: "关闭其他",
            key: "close-other",
            disabled: o.tags.length <= 1,
            icon: $("mdi:arrow-expand-horizontal", { size: 14 }),
          },
          {
            label: "关闭左侧",
            key: "close-left",
            disabled: o.tags.length <= 1 || n.currentPath === o.tags[0].path,
            icon: $("mdi:arrow-expand-left", { size: 14 }),
          },
          {
            label: "关闭右侧",
            key: "close-right",
            disabled:
              o.tags.length <= 1 ||
              n.currentPath === o.tags[o.tags.length - 1].path,
            icon: $("mdi:arrow-expand-right", { size: 14 }),
          },
        ]),
        c = ut(),
        s = new Map([
          [
            "reload",
            () => {
              var f;
              (f = c.meta) != null &&
                f.keepAlive &&
                r.setAliveKeys(c.name, new Date()),
                r.reloadPage();
            },
          ],
          [
            "close",
            () => {
              o.removeTag(n.currentPath);
            },
          ],
          [
            "close-other",
            () => {
              o.removeOther(n.currentPath);
            },
          ],
          [
            "close-left",
            () => {
              o.removeLeft(n.currentPath);
            },
          ],
          [
            "close-right",
            () => {
              o.removeRight(n.currentPath);
            },
          ],
        ]);
      function l() {
        e("update:show", !1);
      }
      function u(f) {
        const d = s.get(f);
        d && d(), l();
      }
      return (f, d) => {
        const a = oe;
        return (
          b(),
          _(
            a,
            {
              show: t.show,
              options: x(i),
              x: t.x,
              y: t.y,
              placement: "bottom-start",
              onClickoutside: l,
              onSelect: u,
            },
            null,
            8,
            ["show", "options", "x", "y"]
          )
        );
      };
    },
  }),
  rn = {
    class: "inline-block",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
  },
  cn = [
    L(
      "path",
      {
        fill: "currentColor",
        d: "M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z",
      },
      null,
      -1
    ),
  ],
  an = {
    name: "ic-baseline-keyboard-arrow-right",
    render: function (t, e) {
      return b(), C("svg", rn, cn);
    },
  },
  ln = {
    class: "inline-block",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
  },
  sn = [
    L(
      "path",
      {
        fill: "currentColor",
        d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z",
      },
      null,
      -1
    ),
  ],
  un = {
    name: "ic-baseline-keyboard-arrow-left",
    render: function (t, e) {
      return b(), C("svg", ln, sn);
    },
  },
  fn = ["onMousewheel"],
  dn = Ae(
    I({
      __name: "ScrollX",
      props: { showArrow: { type: Boolean, default: !0 } },
      setup(t, { expose: e }) {
        Me((a) => ({ b9f5ecc4: x(o) }));
        const n = V(),
          o = Z("#fff");
        ot(
          () => n.isDark,
          (a) => {
            o.value = a ? "rgb(24,24,28)" : "#fff";
          },
          { immediate: !0 }
        );
        const r = Z(0),
          i = Z(null),
          c = Z(null),
          s = Z(!1),
          l = Tt(() => {
            var g, k;
            const a = (g = c.value) == null ? void 0 : g.offsetWidth,
              p = (k = i.value) == null ? void 0 : k.offsetWidth;
            (s.value = p > a), f(a, p);
          }, 200);
        function u(a) {
          var y, m;
          const { wheelDelta: p } = a,
            g = (y = c.value) == null ? void 0 : y.offsetWidth,
            k = (m = i.value) == null ? void 0 : m.offsetWidth;
          (p < 0 &&
            ((g > k && r.value < -10) || (g <= k && k + r.value - g < -10))) ||
            (p > 0 && r.value > 10) ||
            ((r.value += p), f(g, k));
        }
        const f = Tt((a, p) => {
            s.value
              ? -r.value > p - a
                ? (r.value = a - p)
                : r.value > 0 && (r.value = 0)
              : (r.value = 0);
          }, 200),
          d = new MutationObserver(l);
        return (
          Le(() => {
            l(),
              window.addEventListener("resize", l),
              d.observe(i.value, { childList: !0 });
          }),
          Ce(() => {
            window.removeEventListener("resize", l), d.disconnect();
          }),
          e({
            handleScroll: function (a, p) {
              var y, m;
              const g = (y = c.value) == null ? void 0 : y.offsetWidth,
                k = (m = i.value) == null ? void 0 : m.offsetWidth;
              k <= g ||
                (a < 150 - r.value && ((r.value = -(a - 150)), f(g, k)),
                a + p > -r.value + g && ((r.value = g - (a + p)), f(g, k)));
            },
          }),
          (a, p) => {
            const g = un,
              k = an;
            return (
              b(),
              C(
                "div",
                {
                  ref_key: "wrapper",
                  ref: c,
                  class: "wrapper",
                  onMousewheel: vt(u, ["prevent"]),
                },
                [
                  t.showArrow && x(s)
                    ? (b(),
                      C(
                        K,
                        { key: 0 },
                        [
                          L(
                            "div",
                            {
                              class: "left",
                              onClick:
                                p[0] || (p[0] = (y) => u({ wheelDelta: 120 })),
                            },
                            [j(g)]
                          ),
                          L(
                            "div",
                            {
                              class: "right",
                              onClick:
                                p[1] || (p[1] = (y) => u({ wheelDelta: -120 })),
                            },
                            [j(k)]
                          ),
                        ],
                        64
                      ))
                    : lt("", !0),
                  L(
                    "div",
                    {
                      ref_key: "content",
                      ref: i,
                      class: ze(["content", { overflow: x(s) && t.showArrow }]),
                      style: mt({ transform: `translateX(${x(r)}px)` }),
                    },
                    [je(a.$slots, "default", {}, void 0, !0)],
                    6
                  ),
                ],
                40,
                fn
              )
            );
          }
        );
      },
    }),
    [["__scopeId", "data-v-531a7f55"]]
  ),
  hn = I({
    __name: "index",
    setup(t) {
      const e = ut(),
        n = st(),
        o = re(),
        r = Z([]),
        i = Z(null),
        c = Se({ show: !1, x: 0, y: 0, currentPath: "" });
      ot(
        () => e.path,
        () => {
          var d;
          const { name: l, fullPath: u } = e,
            f = (d = e.meta) == null ? void 0 : d.title;
          o.addTag({ name: l, path: u, title: f });
        },
        { immediate: !0 }
      ),
        ot(
          () => o.activeIndex(),
          async (l) => {
            var a, p;
            await gt();
            const u = (a = r.value[l]) == null ? void 0 : a.$el;
            if (!u) return;
            const { offsetLeft: f, offsetWidth: d } = u;
            (p = i.value) == null || p.handleScroll(f + d, d);
          },
          { immediate: !0 }
        );
      async function s(l, u) {
        const { clientX: f, clientY: d } = l;
        var a, p, g;
        (c.show = !1),
          (a = f),
          (p = d),
          (g = u.path),
          Object.assign(c, { x: a, y: p, currentPath: g }),
          await gt(),
          (c.show = !0);
      }
      return (l, u) => {
        const f = Ee;
        return (
          b(),
          _(
            dn,
            { ref_key: "scrollXRef", ref: i, class: "bg-white dark:bg-dark!" },
            {
              default: z(() => [
                (b(!0),
                C(
                  K,
                  null,
                  Yt(
                    x(o).tags,
                    (d) => (
                      b(),
                      _(
                        f,
                        {
                          ref_for: !0,
                          ref_key: "tabRefs",
                          ref: r,
                          key: d.path,
                          class:
                            "px-15 mx-5 rounded-4 cursor-pointer hover:color-primary",
                          type:
                            x(o).activeTag === d.path ? "primary" : "default",
                          closable: x(o).tags.length > 1,
                          onClick: (a) => {
                            return (
                              (p = d.path), o.setActiveTag(p), void n.push(p)
                            );
                            var p;
                          },
                          onClose: vt((a) => x(o).removeTag(d.path), ["stop"]),
                          onContextmenu: vt((a) => s(a, d), ["prevent"]),
                        },
                        { default: z(() => [te(at(d.title), 1)]), _: 2 },
                        1032,
                        [
                          "type",
                          "closable",
                          "onClick",
                          "onClose",
                          "onContextmenu",
                        ]
                      )
                    )
                  ),
                  128
                )),
                x(c).show
                  ? (b(),
                    _(
                      on,
                      {
                        key: 0,
                        show: x(c).show,
                        "onUpdate:show":
                          u[0] || (u[0] = (d) => (x(c).show = d)),
                        "current-path": x(c).currentPath,
                        x: x(c).x,
                        y: x(c).y,
                      },
                      null,
                      8,
                      ["show", "current-path", "x", "y"]
                    ))
                  : lt("", !0),
              ]),
              _: 1,
            },
            512
          )
        );
      };
    },
  }),
  pn = { "flex-1": "", "flex-col": "", "overflow-hidden": "" },
  gn = {
    key: 0,
    "border-b": "",
    "bc-eee": "",
    "dark:border-0": "",
    hidden: "",
    "sm:block": "",
  },
  mn = {
    "flex-1": "",
    "overflow-hidden": "",
    "bg-hex-f5f6fb": "",
    "dark:bg-hex-101014": "",
  },
  vn = I({
    __name: "index",
    setup(t) {
      const e = V();
      return (n, o) => {
        const r = Te,
          i = Pe;
        return (
          b(),
          _(
            i,
            { "has-sider": "", "wh-full": "" },
            {
              default: z(() => [
                j(
                  r,
                  {
                    bordered: "",
                    "collapse-mode": "width",
                    "collapsed-width": 64,
                    width: 220,
                    "native-scrollbar": !1,
                    collapsed: x(e).collapsed,
                  },
                  { default: z(() => [j(en)]), _: 1 },
                  8,
                  ["collapsed"]
                ),
                L("article", pn, [
                  L(
                    "header",
                    {
                      class: "bg-white px-15 border-b bc-eee flex items-center",
                      dark: "bg-dark border-0",
                      style: mt(`height: ${x(tt).headHight}px`),
                    },
                    [j(Q1)],
                    4
                  ),
                  x(tt).tagsView
                    ? (b(),
                      C("section", gn, [
                        j(
                          hn,
                          { style: mt({ height: `${x(tt).tagsHeight}px` }) },
                          null,
                          8,
                          ["style"]
                        ),
                      ]))
                    : lt("", !0),
                  L("section", mn, [j(nn)]),
                ]),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  }),
  kn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: vn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { Y1 as _, kn as i, $ as r };
