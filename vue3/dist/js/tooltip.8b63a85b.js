import {
  ht as Jt,
  hv as Kt,
  hc as Qt,
  hd as Zt,
  hl as J,
  he as $,
  hm as te,
  hq as ee,
  hp as ne,
  hr as ie,
} from "./index.8fd7165c.js";
import { q as oe } from "./Table.e9c997d5.js";
import { d as re } from "./debounce.46964e49.js";
import { g as ae } from "./guid.416070ad.js";
function S(t) {
  return t.split("-")[1];
}
function ut(t) {
  return t === "y" ? "height" : "width";
}
function z(t) {
  return t.split("-")[0];
}
function G(t) {
  return ["top", "bottom"].includes(z(t)) ? "x" : "y";
}
function yt(t, e, n) {
  let { reference: i, floating: s } = t;
  const r = i.x + i.width / 2 - s.width / 2,
    a = i.y + i.height / 2 - s.height / 2,
    o = G(e),
    l = ut(o),
    d = i[l] / 2 - s[l] / 2,
    u = o === "x";
  let c;
  switch (z(e)) {
    case "top":
      c = { x: r, y: i.y - s.height };
      break;
    case "bottom":
      c = { x: r, y: i.y + i.height };
      break;
    case "right":
      c = { x: i.x + i.width, y: a };
      break;
    case "left":
      c = { x: i.x - s.width, y: a };
      break;
    default:
      c = { x: i.x, y: i.y };
  }
  switch (S(e)) {
    case "start":
      c[o] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      c[o] += d * (n && u ? -1 : 1);
  }
  return c;
}
function At(t) {
  return typeof t != "number"
    ? (function (e) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...e };
      })(t)
    : { top: t, right: t, bottom: t, left: t };
}
function rt(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height,
  };
}
async function X(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: i, y: s, platform: r, rects: a, elements: o, strategy: l } = t,
    {
      boundary: d = "clippingAncestors",
      rootBoundary: u = "viewport",
      elementContext: c = "floating",
      altBoundary: f = !1,
      padding: p = 0,
    } = e,
    m = At(p),
    h = o[f ? (c === "floating" ? "reference" : "floating") : c],
    y = rt(
      await r.getClippingRect({
        element:
          (n = await (r.isElement == null ? void 0 : r.isElement(h))) == null ||
          n
            ? h
            : h.contextElement ||
              (await (r.getDocumentElement == null
                ? void 0
                : r.getDocumentElement(o.floating))),
        boundary: d,
        rootBoundary: u,
        strategy: l,
      })
    ),
    g = c === "floating" ? { ...a.floating, x: i, y: s } : a.reference,
    v = await (r.getOffsetParent == null
      ? void 0
      : r.getOffsetParent(o.floating)),
    w = ((await (r.isElement == null ? void 0 : r.isElement(v))) &&
      (await (r.getScale == null ? void 0 : r.getScale(v)))) || { x: 1, y: 1 },
    T = rt(
      r.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: g,
            offsetParent: v,
            strategy: l,
          })
        : g
    );
  return {
    top: (y.top - T.top + m.top) / w.y,
    bottom: (T.bottom - y.bottom + m.bottom) / w.y,
    left: (y.left - T.left + m.left) / w.x,
    right: (T.right - y.right + m.right) / w.x,
  };
}
const se = Math.min,
  le = Math.max;
function at(t, e, n) {
  return le(t, se(e, n));
}
const ce = (t) => ({
    name: "arrow",
    options: t,
    async fn(e) {
      const { element: n, padding: i = 0 } = t || {},
        { x: s, y: r, placement: a, rects: o, platform: l } = e;
      if (n == null) return {};
      const d = At(i),
        u = { x: s, y: r },
        c = G(a),
        f = ut(c),
        p = await l.getDimensions(n),
        m = c === "y" ? "top" : "left",
        h = c === "y" ? "bottom" : "right",
        y = o.reference[f] + o.reference[c] - u[c] - o.floating[f],
        g = u[c] - o.reference[c],
        v = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
      let w = v ? (c === "y" ? v.clientHeight || 0 : v.clientWidth || 0) : 0;
      w === 0 && (w = o.floating[f]);
      const T = y / 2 - g / 2,
        R = d[m],
        k = w - p[f] - d[h],
        L = w / 2 - p[f] / 2 + T,
        P = at(R, L, k),
        O =
          S(a) != null &&
          L != P &&
          o.reference[f] / 2 - (L < R ? d[m] : d[h]) - p[f] / 2 < 0;
      return {
        [c]: u[c] - (O ? (L < R ? R - L : k - L) : 0),
        data: { [c]: P, centerOffset: L - P },
      };
    },
  }),
  Ot = ["top", "right", "bottom", "left"],
  wt = Ot.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []),
  fe = { left: "right", right: "left", bottom: "top", top: "bottom" };
function tt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => fe[e]);
}
function St(t, e, n) {
  n === void 0 && (n = !1);
  const i = S(t),
    s = G(t),
    r = ut(s);
  let a =
    s === "x"
      ? i === (n ? "end" : "start")
        ? "right"
        : "left"
      : i === "start"
      ? "bottom"
      : "top";
  return (
    e.reference[r] > e.floating[r] && (a = tt(a)), { main: a, cross: tt(a) }
  );
}
const de = { start: "end", end: "start" };
function Q(t) {
  return t.replace(/start|end/g, (e) => de[e]);
}
const ue = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "autoPlacement",
        options: t,
        async fn(e) {
          var n, i, s;
          const {
              rects: r,
              middlewareData: a,
              placement: o,
              platform: l,
              elements: d,
            } = e,
            {
              crossAxis: u = !1,
              alignment: c,
              allowedPlacements: f = wt,
              autoAlignment: p = !0,
              ...m
            } = t,
            h =
              c !== void 0 || f === wt
                ? (function (b, x, H) {
                    return (
                      b
                        ? [
                            ...H.filter((E) => S(E) === b),
                            ...H.filter((E) => S(E) !== b),
                          ]
                        : H.filter((E) => z(E) === E)
                    ).filter((E) => !b || S(E) === b || (!!x && Q(E) !== E));
                  })(c || null, p, f)
                : f,
            y = await X(e, m),
            g = ((n = a.autoPlacement) == null ? void 0 : n.index) || 0,
            v = h[g];
          if (v == null) return {};
          const { main: w, cross: T } = St(
            v,
            r,
            await (l.isRTL == null ? void 0 : l.isRTL(d.floating))
          );
          if (o !== v) return { reset: { placement: h[0] } };
          const R = [y[z(v)], y[w], y[T]],
            k = [
              ...(((i = a.autoPlacement) == null ? void 0 : i.overflows) || []),
              { placement: v, overflows: R },
            ],
            L = h[g + 1];
          if (L)
            return {
              data: { index: g + 1, overflows: k },
              reset: { placement: L },
            };
          const P = k
              .map((b) => {
                const x = S(b.placement);
                return [
                  b.placement,
                  x && u
                    ? b.overflows.slice(0, 2).reduce((H, E) => H + E, 0)
                    : b.overflows[0],
                  b.overflows,
                ];
              })
              .sort((b, x) => b[1] - x[1]),
            O =
              ((s = P.filter((b) =>
                b[2].slice(0, S(b[0]) ? 2 : 3).every((x) => x <= 0)
              )[0]) == null
                ? void 0
                : s[0]) || P[0][0];
          return O !== o
            ? { data: { index: g + 1, overflows: k }, reset: { placement: O } }
            : {};
        },
      }
    );
  },
  xt = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "flip",
        options: t,
        async fn(e) {
          var n;
          const {
              placement: i,
              middlewareData: s,
              rects: r,
              initialPlacement: a,
              platform: o,
              elements: l,
            } = e,
            {
              mainAxis: d = !0,
              crossAxis: u = !0,
              fallbackPlacements: c,
              fallbackStrategy: f = "bestFit",
              fallbackAxisSideDirection: p = "none",
              flipAlignment: m = !0,
              ...h
            } = t,
            y = z(i),
            g = z(a) === a,
            v = await (o.isRTL == null ? void 0 : o.isRTL(l.floating)),
            w =
              c ||
              (g || !m
                ? [tt(a)]
                : (function (x) {
                    const H = tt(x);
                    return [Q(x), H, Q(H)];
                  })(a));
          c ||
            p === "none" ||
            w.push(
              ...(function (x, H, E, M) {
                const _ = S(x);
                let C = (function (I, ot, Xt) {
                  const gt = ["left", "right"],
                    vt = ["right", "left"],
                    Yt = ["top", "bottom"],
                    Gt = ["bottom", "top"];
                  switch (I) {
                    case "top":
                    case "bottom":
                      return Xt ? (ot ? vt : gt) : ot ? gt : vt;
                    case "left":
                    case "right":
                      return ot ? Yt : Gt;
                    default:
                      return [];
                  }
                })(z(x), E === "start", M);
                return (
                  _ &&
                    ((C = C.map((I) => I + "-" + _)),
                    H && (C = C.concat(C.map(Q)))),
                  C
                );
              })(a, m, p, v)
            );
          const T = [a, ...w],
            R = await X(e, h),
            k = [];
          let L = ((n = s.flip) == null ? void 0 : n.overflows) || [];
          if ((d && k.push(R[y]), u)) {
            const { main: x, cross: H } = St(i, r, v);
            k.push(R[x], R[H]);
          }
          if (
            ((L = [...L, { placement: i, overflows: k }]),
            !k.every((x) => x <= 0))
          ) {
            var P, O;
            const x = (((P = s.flip) == null ? void 0 : P.index) || 0) + 1,
              H = T[x];
            if (H)
              return {
                data: { index: x, overflows: L },
                reset: { placement: H },
              };
            let E =
              (O = L.filter((M) => M.overflows[0] <= 0).sort(
                (M, _) => M.overflows[1] - _.overflows[1]
              )[0]) == null
                ? void 0
                : O.placement;
            if (!E)
              switch (f) {
                case "bestFit": {
                  var b;
                  const M =
                    (b = L.map((_) => [
                      _.placement,
                      _.overflows
                        .filter((C) => C > 0)
                        .reduce((C, I) => C + I, 0),
                    ]).sort((_, C) => _[1] - C[1])[0]) == null
                      ? void 0
                      : b[0];
                  M && (E = M);
                  break;
                }
                case "initialPlacement":
                  E = a;
              }
            if (i !== E) return { reset: { placement: E } };
          }
          return {};
        },
      }
    );
  };
function bt(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width,
  };
}
function Et(t) {
  return Ot.some((e) => t[e] >= 0);
}
const me = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "hide",
        options: t,
        async fn(e) {
          const { strategy: n = "referenceHidden", ...i } = t,
            { rects: s } = e;
          switch (n) {
            case "referenceHidden": {
              const r = bt(
                await X(e, { ...i, elementContext: "reference" }),
                s.reference
              );
              return {
                data: { referenceHiddenOffsets: r, referenceHidden: Et(r) },
              };
            }
            case "escaped": {
              const r = bt(await X(e, { ...i, altBoundary: !0 }), s.floating);
              return { data: { escapedOffsets: r, escaped: Et(r) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  pe = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: "offset",
        options: t,
        async fn(e) {
          const { x: n, y: i } = e,
            s = await (async function (r, a) {
              const { placement: o, platform: l, elements: d } = r,
                u = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)),
                c = z(o),
                f = S(o),
                p = G(o) === "x",
                m = ["left", "top"].includes(c) ? -1 : 1,
                h = u && p ? -1 : 1,
                y = typeof a == "function" ? a(r) : a;
              let {
                mainAxis: g,
                crossAxis: v,
                alignmentAxis: w,
              } = typeof y == "number"
                ? { mainAxis: y, crossAxis: 0, alignmentAxis: null }
                : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...y };
              return (
                f && typeof w == "number" && (v = f === "end" ? -1 * w : w),
                p ? { x: v * h, y: g * m } : { x: g * m, y: v * h }
              );
            })(e, t);
          return { x: n + s.x, y: i + s.y, data: s };
        },
      }
    );
  },
  he = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "shift",
        options: t,
        async fn(e) {
          const { x: n, y: i, placement: s } = e,
            {
              mainAxis: r = !0,
              crossAxis: a = !1,
              limiter: o = {
                fn: (y) => {
                  let { x: g, y: v } = y;
                  return { x: g, y: v };
                },
              },
              ...l
            } = t,
            d = { x: n, y: i },
            u = await X(e, l),
            c = G(z(s)),
            f = c === "x" ? "y" : "x";
          let p = d[c],
            m = d[f];
          if (r) {
            const y = c === "y" ? "bottom" : "right";
            p = at(p + u[c === "y" ? "top" : "left"], p, p - u[y]);
          }
          if (a) {
            const y = f === "y" ? "bottom" : "right";
            m = at(m + u[f === "y" ? "top" : "left"], m, m - u[y]);
          }
          const h = o.fn({ ...e, [c]: p, [f]: m });
          return { ...h, data: { x: h.x - n, y: h.y - i } };
        },
      }
    );
  };
function D(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function B(t) {
  return D(t).getComputedStyle(t);
}
const Tt = Math.min,
  j = Math.max,
  et = Math.round;
function Bt(t) {
  const e = B(t);
  let n = parseFloat(e.width),
    i = parseFloat(e.height);
  const s = t.offsetWidth,
    r = t.offsetHeight,
    a = et(n) !== s || et(i) !== r;
  return a && ((n = s), (i = r)), { width: n, height: i, fallback: a };
}
function q(t) {
  return _t(t) ? (t.nodeName || "").toLowerCase() : "";
}
let K;
function Ft() {
  if (K) return K;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands)
    ? ((K = t.brands.map((e) => e.brand + "/" + e.version).join(" ")), K)
    : navigator.userAgent;
}
function F(t) {
  return t instanceof D(t).HTMLElement;
}
function A(t) {
  return t instanceof D(t).Element;
}
function _t(t) {
  return t instanceof D(t).Node;
}
function Rt(t) {
  return typeof ShadowRoot > "u"
    ? !1
    : t instanceof D(t).ShadowRoot || t instanceof ShadowRoot;
}
function nt(t) {
  const { overflow: e, overflowX: n, overflowY: i, display: s } = B(t);
  return (
    /auto|scroll|overlay|hidden|clip/.test(e + i + n) &&
    !["inline", "contents"].includes(s)
  );
}
function ge(t) {
  return ["table", "td", "th"].includes(q(t));
}
function st(t) {
  const e = /firefox/i.test(Ft()),
    n = B(t),
    i = n.backdropFilter || n.WebkitBackdropFilter;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (!!i && i !== "none") ||
    (e && n.willChange === "filter") ||
    (e && !!n.filter && n.filter !== "none") ||
    ["transform", "perspective"].some((s) => n.willChange.includes(s)) ||
    ["paint", "layout", "strict", "content"].some((s) => {
      const r = n.contain;
      return r != null && r.includes(s);
    })
  );
}
function lt() {
  return /^((?!chrome|android).)*safari/i.test(Ft());
}
function mt(t) {
  return ["html", "body", "#document"].includes(q(t));
}
function zt(t) {
  return A(t) ? t : t.contextElement;
}
const Mt = { x: 1, y: 1 };
function V(t) {
  const e = zt(t);
  if (!F(e)) return Mt;
  const n = e.getBoundingClientRect(),
    { width: i, height: s, fallback: r } = Bt(e);
  let a = (r ? et(n.width) : n.width) / i,
    o = (r ? et(n.height) : n.height) / s;
  return (
    (a && Number.isFinite(a)) || (a = 1),
    (o && Number.isFinite(o)) || (o = 1),
    { x: a, y: o }
  );
}
function N(t, e, n, i) {
  var s, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const a = t.getBoundingClientRect(),
    o = zt(t);
  let l = Mt;
  e && (i ? A(i) && (l = V(i)) : (l = V(t)));
  const d = o ? D(o) : window,
    u = lt() && n;
  let c =
      (a.left +
        ((u && ((s = d.visualViewport) == null ? void 0 : s.offsetLeft)) ||
          0)) /
      l.x,
    f =
      (a.top +
        ((u && ((r = d.visualViewport) == null ? void 0 : r.offsetTop)) || 0)) /
      l.y,
    p = a.width / l.x,
    m = a.height / l.y;
  if (o) {
    const h = D(o),
      y = i && A(i) ? D(i) : i;
    let g = h.frameElement;
    for (; g && i && y !== h; ) {
      const v = V(g),
        w = g.getBoundingClientRect(),
        T = getComputedStyle(g);
      (w.x += (g.clientLeft + parseFloat(T.paddingLeft)) * v.x),
        (w.y += (g.clientTop + parseFloat(T.paddingTop)) * v.y),
        (c *= v.x),
        (f *= v.y),
        (p *= v.x),
        (m *= v.y),
        (c += w.x),
        (f += w.y),
        (g = D(g).frameElement);
    }
  }
  return {
    width: p,
    height: m,
    top: f,
    right: c + p,
    bottom: f + m,
    left: c,
    x: c,
    y: f,
  };
}
function W(t) {
  return ((_t(t) ? t.ownerDocument : t.document) || window.document)
    .documentElement;
}
function it(t) {
  return A(t)
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Wt(t) {
  return N(W(t)).left + it(t).scrollLeft;
}
function Y(t) {
  if (q(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || (Rt(t) && t.host) || W(t);
  return Rt(e) ? e.host : e;
}
function qt(t) {
  const e = Y(t);
  return mt(e) ? e.ownerDocument.body : F(e) && nt(e) ? e : qt(e);
}
function U(t, e) {
  var n;
  e === void 0 && (e = []);
  const i = qt(t),
    s = i === ((n = t.ownerDocument) == null ? void 0 : n.body),
    r = D(i);
  return s
    ? e.concat(r, r.visualViewport || [], nt(i) ? i : [])
    : e.concat(i, U(i));
}
function Lt(t, e, n) {
  let i;
  if (e === "viewport")
    i = (function (a, o) {
      const l = D(a),
        d = W(a),
        u = l.visualViewport;
      let c = d.clientWidth,
        f = d.clientHeight,
        p = 0,
        m = 0;
      if (u) {
        (c = u.width), (f = u.height);
        const h = lt();
        (!h || (h && o === "fixed")) && ((p = u.offsetLeft), (m = u.offsetTop));
      }
      return { width: c, height: f, x: p, y: m };
    })(t, n);
  else if (e === "document")
    i = (function (a) {
      const o = W(a),
        l = it(a),
        d = a.ownerDocument.body,
        u = j(o.scrollWidth, o.clientWidth, d.scrollWidth, d.clientWidth),
        c = j(o.scrollHeight, o.clientHeight, d.scrollHeight, d.clientHeight);
      let f = -l.scrollLeft + Wt(a);
      const p = -l.scrollTop;
      return (
        B(d).direction === "rtl" && (f += j(o.clientWidth, d.clientWidth) - u),
        { width: u, height: c, x: f, y: p }
      );
    })(W(t));
  else if (A(e))
    i = (function (a, o) {
      const l = N(a, !0, o === "fixed"),
        d = l.top + a.clientTop,
        u = l.left + a.clientLeft,
        c = F(a) ? V(a) : { x: 1, y: 1 };
      return {
        width: a.clientWidth * c.x,
        height: a.clientHeight * c.y,
        x: u * c.x,
        y: d * c.y,
      };
    })(e, n);
  else {
    const a = { ...e };
    if (lt()) {
      var s, r;
      const o = D(t);
      (a.x -= ((s = o.visualViewport) == null ? void 0 : s.offsetLeft) || 0),
        (a.y -= ((r = o.visualViewport) == null ? void 0 : r.offsetTop) || 0);
    }
    i = a;
  }
  return rt(i);
}
function kt(t, e) {
  return F(t) && B(t).position !== "fixed" ? (e ? e(t) : t.offsetParent) : null;
}
function Ht(t, e) {
  const n = D(t);
  let i = kt(t, e);
  for (; i && ge(i) && B(i).position === "static"; ) i = kt(i, e);
  return i &&
    (q(i) === "html" ||
      (q(i) === "body" && B(i).position === "static" && !st(i)))
    ? n
    : i ||
        (function (s) {
          let r = Y(s);
          for (; F(r) && !mt(r); ) {
            if (st(r)) return r;
            r = Y(r);
          }
          return null;
        })(t) ||
        n;
}
function ve(t, e, n) {
  const i = F(e),
    s = W(e),
    r = N(t, !0, n === "fixed", e);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (i || (!i && n !== "fixed"))
    if (((q(e) !== "body" || nt(s)) && (a = it(e)), F(e))) {
      const l = N(e, !0);
      (o.x = l.x + e.clientLeft), (o.y = l.y + e.clientTop);
    } else s && (o.x = Wt(s));
  return {
    x: r.left + a.scrollLeft - o.x,
    y: r.top + a.scrollTop - o.y,
    width: r.width,
    height: r.height,
  };
}
const ct = {
  getClippingRect: function (t) {
    let { element: e, boundary: n, rootBoundary: i, strategy: s } = t;
    const r = [
        ...(n === "clippingAncestors"
          ? (function (l, d) {
              const u = d.get(l);
              if (u) return u;
              let c = U(l).filter((h) => A(h) && q(h) !== "body"),
                f = null;
              const p = B(l).position === "fixed";
              let m = p ? Y(l) : l;
              for (; A(m) && !mt(m); ) {
                const h = B(m),
                  y = st(m);
                h.position === "fixed"
                  ? (f = null)
                  : (
                      p
                        ? y || f
                        : y ||
                          h.position !== "static" ||
                          !f ||
                          !["absolute", "fixed"].includes(f.position)
                    )
                  ? (f = h)
                  : (c = c.filter((g) => g !== m)),
                  (m = Y(m));
              }
              return d.set(l, c), c;
            })(e, this._c)
          : [].concat(n)),
        i,
      ],
      a = r[0],
      o = r.reduce((l, d) => {
        const u = Lt(e, d, s);
        return (
          (l.top = j(u.top, l.top)),
          (l.right = Tt(u.right, l.right)),
          (l.bottom = Tt(u.bottom, l.bottom)),
          (l.left = j(u.left, l.left)),
          l
        );
      }, Lt(e, a, s));
    return {
      width: o.right - o.left,
      height: o.bottom - o.top,
      x: o.left,
      y: o.top,
    };
  },
  convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
    let { rect: e, offsetParent: n, strategy: i } = t;
    const s = F(n),
      r = W(n);
    if (n === r) return e;
    let a = { scrollLeft: 0, scrollTop: 0 },
      o = { x: 1, y: 1 };
    const l = { x: 0, y: 0 };
    if (
      (s || (!s && i !== "fixed")) &&
      ((q(n) !== "body" || nt(r)) && (a = it(n)), F(n))
    ) {
      const d = N(n);
      (o = V(n)), (l.x = d.x + n.clientLeft), (l.y = d.y + n.clientTop);
    }
    return {
      width: e.width * o.x,
      height: e.height * o.y,
      x: e.x * o.x - a.scrollLeft * o.x + l.x,
      y: e.y * o.y - a.scrollTop * o.y + l.y,
    };
  },
  isElement: A,
  getDimensions: function (t) {
    return F(t) ? Bt(t) : t.getBoundingClientRect();
  },
  getOffsetParent: Ht,
  getDocumentElement: W,
  getScale: V,
  async getElementRects(t) {
    let { reference: e, floating: n, strategy: i } = t;
    const s = this.getOffsetParent || Ht,
      r = this.getDimensions;
    return {
      reference: ve(e, await s(n), i),
      floating: { x: 0, y: 0, ...(await r(n)) },
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => B(t).direction === "rtl",
};
function ye(t, e, n, i) {
  i === void 0 && (i = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: r = !0,
      elementResize: a = !0,
      animationFrame: o = !1,
    } = i,
    l = s && !o,
    d =
      l || r
        ? [
            ...(A(t) ? U(t) : t.contextElement ? U(t.contextElement) : []),
            ...U(e),
          ]
        : [];
  d.forEach((p) => {
    l && p.addEventListener("scroll", n, { passive: !0 }),
      r && p.addEventListener("resize", n);
  });
  let u,
    c = null;
  if (a) {
    let p = !0;
    (c = new ResizeObserver(() => {
      p || n(), (p = !1);
    })),
      A(t) && !o && c.observe(t),
      A(t) || !t.contextElement || o || c.observe(t.contextElement),
      c.observe(e);
  }
  let f = o ? N(t) : null;
  return (
    o &&
      (function p() {
        const m = N(t);
        !f ||
          (m.x === f.x &&
            m.y === f.y &&
            m.width === f.width &&
            m.height === f.height) ||
          n(),
          (f = m),
          (u = requestAnimationFrame(p));
      })(),
    n(),
    () => {
      var p;
      d.forEach((m) => {
        l && m.removeEventListener("scroll", n),
          r && m.removeEventListener("resize", n);
      }),
        (p = c) == null || p.disconnect(),
        (c = null),
        o && cancelAnimationFrame(u);
    }
  );
}
const we = (t, e, n) => {
    const i = new Map(),
      s = { platform: ct, ...n },
      r = { ...s.platform, _c: i };
    return (async (a, o, l) => {
      const {
          placement: d = "bottom",
          strategy: u = "absolute",
          middleware: c = [],
          platform: f,
        } = l,
        p = c.filter(Boolean),
        m = await (f.isRTL == null ? void 0 : f.isRTL(o));
      let h = await f.getElementRects({
          reference: a,
          floating: o,
          strategy: u,
        }),
        { x: y, y: g } = yt(h, d, m),
        v = d,
        w = {},
        T = 0;
      for (let R = 0; R < p.length; R++) {
        const { name: k, fn: L } = p[R],
          {
            x: P,
            y: O,
            data: b,
            reset: x,
          } = await L({
            x: y,
            y: g,
            initialPlacement: d,
            placement: v,
            strategy: u,
            middlewareData: w,
            rects: h,
            platform: f,
            elements: { reference: a, floating: o },
          });
        (y = P ?? y),
          (g = O ?? g),
          (w = { ...w, [k]: { ...w[k], ...b } }),
          x &&
            T <= 50 &&
            (T++,
            typeof x == "object" &&
              (x.placement && (v = x.placement),
              x.rects &&
                (h =
                  x.rects === !0
                    ? await f.getElementRects({
                        reference: a,
                        floating: o,
                        strategy: u,
                      })
                    : x.rects),
              ({ x: y, y: g } = yt(h, v, m))),
            (R = -1));
      }
      return { x: y, y: g, placement: v, strategy: u, middlewareData: w };
    })(t, e, { ...s, platform: r });
  },
  xe = {
    floatingUINonChromiumPositioningFix: !0,
    ...globalThis.calciteComponentsConfig,
  },
  be = (async function () {
    function t() {
      return navigator.userAgentData;
    }
    if (
      xe.floatingUINonChromiumPositioningFix &&
      (/firefox|safari/i.test(
        (function () {
          const e = t();
          return e != null && e.brands
            ? e.brands.map(({ brand: n, version: i }) => `${n}/${i}`).join(" ")
            : navigator.userAgent;
        })()
      ) ||
        (function () {
          const e = t();
          return e != null && e.brands
            ? !!e.brands.find(
                ({ brand: n, version: i }) =>
                  (n === "Google Chrome" || n === "Chromium") &&
                  Number(i) >= 109
              )
            : !!navigator.userAgent.split(" ").find((n) => {
                const [i, s] = n.split("/");
                return i === "Chrome" && parseInt(s) >= 109;
              });
        })())
    ) {
      const { offsetParent: e } = await oe(
          () => import("./utils4.c9e1f3c3.js"),
          []
        ),
        n = ct.getOffsetParent;
      ct.getOffsetParent = (i) => n(i, e);
    }
  })(),
  Nt = "data-placement",
  Ee = [
    "top",
    "bottom",
    "right",
    "left",
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "right-start",
    "right-end",
    "left-start",
    "left-end",
  ],
  ft = {
    animation: "calcite-floating-ui-anim",
    animationActive: "calcite-floating-ui-anim--active",
  };
function Te({
  placement: t,
  flipDisabled: e,
  flipPlacements: n,
  offsetDistance: i,
  offsetSkidding: s,
  arrowEl: r,
  type: a,
}) {
  const o = [he(), me()];
  if (a === "menu")
    return [
      ...o,
      xt({
        fallbackPlacements: n || [
          "top-start",
          "top",
          "top-end",
          "bottom-start",
          "bottom",
          "bottom-end",
        ],
      }),
    ];
  if (a === "popover" || a === "tooltip") {
    const l = [
      ...o,
      pe({
        mainAxis: typeof i == "number" ? i : 0,
        crossAxis: typeof s == "number" ? s : 0,
      }),
    ];
    return (
      t === "auto" || t === "auto-start" || t === "auto-end"
        ? l.push(
            ue({
              alignment:
                t === "auto-start" ? "start" : t === "auto-end" ? "end" : null,
            })
          )
        : e || l.push(xt(n ? { fallbackPlacements: n } : {})),
      r && l.push(ce({ element: r })),
      l
    );
  }
  return [];
}
function qe(t, e) {
  const n = t.filter((i) => Ee.includes(i));
  return n.length, t.length, n;
}
function Re(t, e) {
  const n = ["left", "right"];
  return (
    Jt(t) === "rtl" && n.reverse(),
    e.replace(/leading/gi, n[0]).replace(/trailing/gi, n[1])
  );
}
async function Le(t, e, n = !1) {
  if (t.open) return n ? ke(e) : Vt(e);
}
const ke = re(Vt, 100, { leading: !0, maxWait: 100 });
async function Vt({
  referenceEl: t,
  floatingEl: e,
  overlayPositioning: n = "absolute",
  placement: i,
  flipDisabled: s,
  flipPlacements: r,
  offsetDistance: a,
  offsetSkidding: o,
  includeArrow: l = !1,
  arrowEl: d,
  type: u,
}) {
  var T;
  if (!t || !e || (l && !d)) return null;
  await be;
  const {
    x: c,
    y: f,
    placement: p,
    strategy: m,
    middlewareData: h,
  } = await we(t, e, {
    strategy: n,
    placement:
      i === "auto" || i === "auto-start" || i === "auto-end"
        ? void 0
        : Re(e, i),
    middleware: Te({
      placement: i,
      flipDisabled: s,
      flipPlacements: r,
      offsetDistance: a,
      offsetSkidding: o,
      arrowEl: d,
      type: u,
    }),
  });
  if (h != null && h.arrow) {
    const { x: R, y: k } = h.arrow;
    Object.assign(d.style, {
      left: R != null ? `${R}px` : "",
      top: k != null ? `${k}px` : "",
    });
  }
  const y =
      (T = h == null ? void 0 : h.hide) == null ? void 0 : T.referenceHidden,
    g = y ? "hidden" : null,
    v = g ? "none" : null;
  e.setAttribute(Nt, p);
  const w = `translate(${Math.round(c)}px,${Math.round(f)}px)`;
  Object.assign(e.style, {
    visibility: g,
    pointerEvents: v,
    position: m,
    top: "0",
    left: "0",
    transform: w,
  });
}
const dt = new WeakMap();
function He(t, e, n) {
  if (!n || !e) return;
  It(t, e, n);
  const i = t.overlayPositioning;
  Object.assign(n.style, {
    visibility: "hidden",
    pointerEvents: "none",
    position: i,
  }),
    i === "absolute" && $t(n);
  const s = ye;
  dt.set(
    t,
    s(e, n, () => t.reposition())
  );
}
function It(t, e, n) {
  if (!n || !e) return;
  pt(n).removeEventListener("transitionend", ht);
  const i = dt.get(t);
  i && i(), dt.delete(t);
}
const De = Math.ceil(Math.hypot(4, 4));
function Pe(t) {
  t &&
    t.style.position === "absolute" &&
    pt(t).addEventListener("transitionend", ht);
}
function pt(t) {
  return t.shadowRoot || t;
}
function ht(t) {
  const e = t.target;
  if (t.propertyName === "opacity" && e.classList.contains(ft.animation)) {
    const n = (function (i) {
      return Kt(i, `[${Nt}]`);
    })(e);
    $t(n), pt(n).removeEventListener("transitionend", ht);
  }
}
function $t(t) {
  (t.style.transform = ""), (t.style.top = "0"), (t.style.left = "0");
}
const Z = new WeakMap();
function Ce(t) {
  t.propertyName === this.openTransitionProp &&
    t.target === this.transitionEl &&
    (this.open ? this.onBeforeOpen() : this.onBeforeClose());
}
function Ae(t) {
  t.propertyName === this.openTransitionProp &&
    t.target === this.transitionEl &&
    (this.open ? this.onOpen() : this.onClose());
}
function Dt(t) {
  if ((jt(t), t.transitionEl)) {
    const e = Ce.bind(t),
      n = Ae.bind(t);
    Z.set(t, [t.transitionEl, e, n]),
      t.transitionEl.addEventListener("transitionstart", e),
      t.transitionEl.addEventListener("transitionend", n);
  }
}
function jt(t) {
  if (!Z.has(t)) return;
  const [e, n, i] = Z.get(t);
  e.removeEventListener("transitionstart", n),
    e.removeEventListener("transitionend", i),
    Z.delete(t);
}
const Oe = "container",
  Se = "arrow",
  Pt = "aria-describedby";
function Ut(t) {
  const { referenceElement: e } = t;
  return (typeof e == "string" ? ne(t, { id: e }) : e) || null;
}
const Ct = new (class {
    constructor() {
      (this.registeredElements = new WeakMap()),
        (this.hoverTimeout = null),
        (this.registeredElementCount = 0),
        (this.queryTooltip = (t) => {
          const { registeredElements: e } = this,
            n = t.find((i) => e.has(i));
          return e.get(n);
        }),
        (this.keyDownHandler = (t) => {
          if (t.key === "Escape" && !t.defaultPrevented) {
            const { activeTooltipEl: e } = this;
            if (e && e.open) {
              this.clearHoverTimeout(), this.toggleTooltip(e, !1);
              const n = Ut(e);
              n instanceof Element &&
                n.contains(t.target) &&
                t.preventDefault();
            }
          }
        }),
        (this.queryHoveredTooltip = (t) => {
          const { activeTooltipEl: e } = this;
          if (e && t.includes(e)) return void this.clearHoverTimeout();
          const n = this.queryTooltip(t);
          n
            ? this.toggleHoveredTooltip(n, !0)
            : e && this.toggleHoveredTooltip(e, !1);
        }),
        (this.pointerMoveHandler = (t) => {
          const e = t.composedPath();
          this.clearHoverTimeout(),
            (this.hoverTimeout = window.setTimeout(
              () => this.queryHoveredTooltip(e),
              500
            ));
        }),
        (this.pointerDownHandler = (t) => {
          if (!ie(t)) return;
          const e = this.queryTooltip(t.composedPath());
          (this.clickedTooltip = e),
            e != null &&
              e.closeOnClick &&
              (this.toggleTooltip(e, !1), this.clearHoverTimeout());
        }),
        (this.focusInHandler = (t) => {
          this.queryFocusedTooltip(t, !0);
        }),
        (this.focusOutHandler = (t) => {
          this.queryFocusedTooltip(t, !1);
        }),
        (this.toggleHoveredTooltip = (t, e) => {
          e && this.closeExistingTooltip(), this.toggleTooltip(t, e);
        });
    }
    registerElement(t, e) {
      this.registeredElementCount++,
        this.registeredElements.set(t, e),
        this.registeredElementCount === 1 && this.addListeners();
    }
    unregisterElement(t) {
      this.registeredElements.delete(t) && this.registeredElementCount--,
        this.registeredElementCount === 0 && this.removeListeners();
    }
    addListeners() {
      document.addEventListener("keydown", this.keyDownHandler, {
        capture: !0,
      }),
        document.addEventListener("pointermove", this.pointerMoveHandler, {
          capture: !0,
        }),
        document.addEventListener("pointerdown", this.pointerDownHandler, {
          capture: !0,
        }),
        document.addEventListener("focusin", this.focusInHandler, {
          capture: !0,
        }),
        document.addEventListener("focusout", this.focusOutHandler, {
          capture: !0,
        });
    }
    removeListeners() {
      document.removeEventListener("keydown", this.keyDownHandler, {
        capture: !0,
      }),
        document.removeEventListener("pointermove", this.pointerMoveHandler, {
          capture: !0,
        }),
        document.removeEventListener("pointerdown", this.pointerDownHandler, {
          capture: !0,
        }),
        document.removeEventListener("focusin", this.focusInHandler, {
          capture: !0,
        }),
        document.removeEventListener("focusout", this.focusOutHandler, {
          capture: !0,
        });
    }
    clearHoverTimeout() {
      window.clearTimeout(this.hoverTimeout);
    }
    closeExistingTooltip() {
      const { activeTooltipEl: t } = this;
      t && this.toggleTooltip(t, !1);
    }
    toggleFocusedTooltip(t, e) {
      this.closeExistingTooltip(),
        e && this.clearHoverTimeout(),
        this.toggleTooltip(t, e);
    }
    toggleTooltip(t, e) {
      (t.open = e), e && (this.activeTooltipEl = t);
    }
    queryFocusedTooltip(t, e) {
      const n = this.queryTooltip(t.composedPath());
      n && n !== this.clickedTooltip
        ? this.toggleFocusedTooltip(n, e)
        : (this.clickedTooltip = null);
    }
  })(),
  Be = Qt(
    class extends Zt {
      constructor() {
        super(),
          this.__registerHost(),
          this.__attachShadow(),
          (this.calciteTooltipBeforeClose = J(
            this,
            "calciteTooltipBeforeClose",
            6
          )),
          (this.calciteTooltipClose = J(this, "calciteTooltipClose", 6)),
          (this.calciteTooltipBeforeOpen = J(
            this,
            "calciteTooltipBeforeOpen",
            6
          )),
          (this.calciteTooltipOpen = J(this, "calciteTooltipOpen", 6)),
          (this.guid = `calcite-tooltip-${ae()}`),
          (this.hasLoaded = !1),
          (this.openTransitionProp = "opacity"),
          (this.setTransitionEl = (t) => {
            (this.transitionEl = t), Dt(this);
          }),
          (this.setUpReferenceElement = (t = !0) => {
            this.removeReferences(),
              (this.effectiveReferenceElement = Ut(this.el)),
              He(this, this.effectiveReferenceElement, this.el);
            const {
              el: e,
              referenceElement: n,
              effectiveReferenceElement: i,
            } = this;
            this.addReferences();
          }),
          (this.getId = () => this.el.id || this.guid),
          (this.addReferences = () => {
            const { effectiveReferenceElement: t } = this;
            if (!t) return;
            const e = this.getId();
            "setAttribute" in t && t.setAttribute(Pt, e),
              Ct.registerElement(t, this.el);
          }),
          (this.removeReferences = () => {
            const { effectiveReferenceElement: t } = this;
            t &&
              ("removeAttribute" in t && t.removeAttribute(Pt),
              Ct.unregisterElement(t));
          }),
          (this.closeOnClick = !1),
          (this.label = void 0),
          (this.offsetDistance = De),
          (this.offsetSkidding = 0),
          (this.open = !1),
          (this.overlayPositioning = "absolute"),
          (this.placement = "auto"),
          (this.referenceElement = void 0),
          (this.effectiveReferenceElement = void 0);
      }
      offsetDistanceOffsetHandler() {
        this.reposition(!0);
      }
      offsetSkiddingHandler() {
        this.reposition(!0);
      }
      openHandler(t) {
        t ? this.reposition(!0) : Pe(this.el);
      }
      overlayPositioningHandler() {
        this.reposition(!0);
      }
      placementHandler() {
        this.reposition(!0);
      }
      referenceElementHandler() {
        this.setUpReferenceElement();
      }
      connectedCallback() {
        Dt(this), this.setUpReferenceElement(this.hasLoaded);
      }
      componentDidLoad() {
        this.referenceElement &&
          !this.effectiveReferenceElement &&
          this.setUpReferenceElement(),
          this.reposition(!0),
          (this.hasLoaded = !0);
      }
      disconnectedCallback() {
        this.removeReferences(),
          It(this, this.effectiveReferenceElement, this.el),
          jt(this);
      }
      async reposition(t = !1) {
        const {
          el: e,
          effectiveReferenceElement: n,
          placement: i,
          overlayPositioning: s,
          offsetDistance: r,
          offsetSkidding: a,
          arrowEl: o,
        } = this;
        return Le(
          this,
          {
            floatingEl: e,
            referenceEl: n,
            overlayPositioning: s,
            placement: i,
            offsetDistance: r,
            offsetSkidding: a,
            includeArrow: !0,
            arrowEl: o,
            type: "tooltip",
          },
          t
        );
      }
      onBeforeOpen() {
        this.calciteTooltipBeforeOpen.emit();
      }
      onOpen() {
        this.calciteTooltipOpen.emit();
      }
      onBeforeClose() {
        this.calciteTooltipBeforeClose.emit();
      }
      onClose() {
        this.calciteTooltipClose.emit();
      }
      render() {
        const { effectiveReferenceElement: t, label: e, open: n } = this,
          i = t && n,
          s = !i;
        return $(
          ee,
          {
            "aria-hidden": te(s),
            "aria-label": e,
            "aria-live": "polite",
            "calcite-hydrated-hidden": s,
            id: this.getId(),
            role: "tooltip",
          },
          $(
            "div",
            {
              class: { [ft.animation]: !0, [ft.animationActive]: i },
              ref: this.setTransitionEl,
            },
            $("div", { class: Se, ref: (r) => (this.arrowEl = r) }),
            $("div", { class: Oe }, $("slot", null))
          )
        );
      }
      get el() {
        return this;
      }
      static get watchers() {
        return {
          offsetDistance: ["offsetDistanceOffsetHandler"],
          offsetSkidding: ["offsetSkiddingHandler"],
          open: ["openHandler"],
          overlayPositioning: ["overlayPositioningHandler"],
          placement: ["placementHandler"],
          referenceElement: ["referenceElementHandler"],
        };
      }
      static get style() {
        return '@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, 901);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.arrow,.arrow::before{position:absolute;inline-size:8px;block-size:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-placement^=top]) .arrow{inset-block-end:-4px}:host([data-placement^=bottom]) .arrow{inset-block-start:-4px}:host([data-placement^=right]) .arrow,:host([data-placement^=left]) .arrow{direction:ltr;text-align:start}:host([data-placement^=left]) .arrow{inset-inline-end:-4px}:host([data-placement^=right]) .arrow{inset-inline-start:-4px}.container{position:relative;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}';
      }
    },
    [
      1,
      "calcite-tooltip",
      {
        closeOnClick: [516, "close-on-click"],
        label: [1],
        offsetDistance: [514, "offset-distance"],
        offsetSkidding: [514, "offset-skidding"],
        open: [516],
        overlayPositioning: [513, "overlay-positioning"],
        placement: [513],
        referenceElement: [1, "reference-element"],
        effectiveReferenceElement: [32],
        reposition: [64],
      },
    ]
  );
function Fe() {
  typeof customElements > "u" ||
    ["calcite-tooltip"].forEach((t) => {
      t === "calcite-tooltip" &&
        (customElements.get(t) || customElements.define(t, Be));
    });
}
Fe();
export {
  ft as F,
  Be as T,
  He as a,
  It as b,
  Dt as c,
  De as d,
  jt as e,
  qe as f,
  Fe as g,
  Le as r,
  Pe as u,
};
