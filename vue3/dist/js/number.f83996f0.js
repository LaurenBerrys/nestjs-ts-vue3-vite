import { fc as F, fd as A } from "./index.8fd7165c.js";
const k = {
  ar: [".", ","],
  bg: [",", " "],
  bs: [",", "."],
  ca: [",", "."],
  cs: [",", " "],
  da: [",", "."],
  de: [",", "."],
  "de-ch": [".", "’"],
  el: [",", "."],
  en: [".", ","],
  "en-au": [".", ","],
  es: [",", "."],
  "es-mx": [".", ","],
  et: [",", " "],
  fi: [",", " "],
  fr: [",", " "],
  "fr-ch": [",", " "],
  he: [".", ","],
  hi: [".", ",", "#,##,##0.###"],
  hr: [",", "."],
  hu: [",", " "],
  id: [",", "."],
  it: [",", "."],
  "it-ch": [".", "’"],
  ja: [".", ","],
  ko: [".", ","],
  lt: [",", " "],
  lv: [",", " "],
  mk: [",", "."],
  nb: [",", " "],
  nl: [",", "."],
  pl: [",", " "],
  pt: [",", "."],
  "pt-pt": [",", " "],
  ro: [",", "."],
  ru: [",", " "],
  sk: [",", " "],
  sl: [",", "."],
  sr: [",", "."],
  sv: [",", " "],
  th: [".", ","],
  tr: [",", "."],
  uk: [",", " "],
  vi: [",", "."],
  zh: [".", ","],
};
function B(e = F()) {
  let t = (e = e.toLowerCase()) in k;
  if (!t) {
    const i = e.split("-");
    i.length > 1 && i[0] in k && ((e = i[0]), (t = !0)), t || (e = "en");
  }
  const [n, s, l = "#,##0.###"] = k[e];
  return { decimal: n, group: s, pattern: l };
}
function D(e, t) {
  const n = B((t = { ...t }).locale);
  t.customs = n;
  const s = t.pattern || n.pattern;
  return isNaN(e) || Math.abs(e) === 1 / 0
    ? null
    : (function (l, i, c) {
        const I = (c = c || {}).customs.group,
          N = c.customs.decimal,
          E = i.split(";"),
          h = E[0];
        if ((i = E[l < 0 ? 1 : 0] || "-" + h).includes("%")) l *= 100;
        else if (i.includes("‰")) l *= 1e3;
        else {
          if (i.includes("¤"))
            throw new Error("currency notation not supported");
          if (i.includes("E"))
            throw new Error("exponential notation not supported");
        }
        const d = C,
          f = h.match(d);
        if (!f)
          throw new Error(
            "unable to find a number expression in pattern: " + i
          );
        return (
          c.fractional === !1 && (c.places = 0),
          i.replace(
            d,
            (function (m, r, a) {
              (a = a || {}).places === !0 && (a.places = 0),
                a.places === 1 / 0 && (a.places = 6);
              const p = r.split("."),
                x = typeof a.places == "string" && a.places.indexOf(",");
              let g = a.places;
              x
                ? (g = a.places.substring(x + 1))
                : g >= 0 || (g = (p[1] || []).length),
                a.round < 0 || (m = Number(m.toFixed(Number(g))));
              const o = String(Math.abs(m)).split("."),
                v = o[1] || "";
              if (p[1] || a.places) {
                x && (a.places = a.places.substring(0, x));
                const u =
                  a.places !== void 0
                    ? a.places
                    : p[1] && p[1].lastIndexOf("0") + 1;
                u > v.length && (o[1] = v.padEnd(Number(u), "0")),
                  g < v.length && (o[1] = v.substr(0, Number(g)));
              } else o[1] && o.pop();
              const y = p[0].replace(",", "");
              let b = y.indexOf("0");
              b !== -1 &&
                ((b = y.length - b),
                b > o[0].length && (o[0] = o[0].padStart(b, "0")),
                y.includes("#") || (o[0] = o[0].substr(o[0].length - b)));
              let j,
                z,
                S = p[0].lastIndexOf(",");
              if (S !== -1) {
                j = p[0].length - S - 1;
                const u = p[0].substr(0, S);
                (S = u.lastIndexOf(",")), S !== -1 && (z = u.length - S - 1);
              }
              const M = [];
              for (let u = o[0]; u; ) {
                const O = u.length - j;
                M.push(O > 0 ? u.substr(O) : u),
                  (u = O > 0 ? u.slice(0, O) : ""),
                  z && ((j = z), (z = void 0));
              }
              return (
                (o[0] = M.reverse().join(a.group || ",")),
                o.join(a.decimal || ".")
              );
            })(l, f[0], {
              decimal: N,
              group: I,
              places: c.places,
              round: c.round,
            })
          )
        );
      })(e, s, t);
}
const C = /[#0,]*[#0](?:\.0*#*)?/;
function L(e) {
  const t = B((e = e || {}).locale),
    n = e.pattern || t.pattern,
    s = t.group,
    l = t.decimal;
  let i = 1;
  if (n.includes("%")) i /= 100;
  else if (n.includes("‰")) i /= 1e3;
  else if (n.includes("¤")) throw new Error("currency notation not supported");
  const c = n.split(";");
  return (
    c.length === 1 && c.push("-" + c[0]),
    {
      regexp: w(
        c,
        (N) =>
          (N = "(?:" + A(N, ".") + ")").replace(C, (E) => {
            const h = {
                signed: !1,
                separator: e.strict ? s : [s, ""],
                fractional: e.fractional,
                decimal: l,
                exponent: !1,
              },
              d = E.split(".");
            let f = e.places;
            d.length === 1 && i !== 1 && (d[1] = "###"),
              d.length === 1 || f === 0
                ? (h.fractional = !1)
                : (f === void 0 &&
                    (f = e.pattern ? d[1].lastIndexOf("0") + 1 : 1 / 0),
                  f && e.fractional == null && (h.fractional = !0),
                  !e.places && f < d[1].length && (f += "," + d[1].length),
                  (h.places = f));
            const m = d[0].split(",");
            return (
              m.length > 1 &&
                ((h.groupSize = m.pop().length),
                m.length > 1 && (h.groupSize2 = m.pop().length)),
              "(" +
                (function (r) {
                  "places" in (r = r || {}) || (r.places = 1 / 0),
                    typeof r.decimal != "string" && (r.decimal = "."),
                    ("fractional" in r && !/^0/.test(String(r.places))) ||
                      (r.fractional = [!0, !1]),
                    "exponent" in r || (r.exponent = [!0, !1]),
                    "eSigned" in r || (r.eSigned = [!0, !1]);
                  const a = R(r),
                    p = w(
                      r.fractional,
                      (g) => {
                        let o = "";
                        return (
                          g &&
                            r.places !== 0 &&
                            ((o = "\\" + r.decimal),
                            r.places === 1 / 0
                              ? (o = "(?:" + o + "\\d+)?")
                              : (o += "\\d{" + r.places + "}")),
                          o
                        );
                      },
                      !0
                    );
                  let x = a + p;
                  return (
                    p && (x = "(?:(?:" + x + ")|(?:" + p + "))"),
                    x +
                      w(r.exponent, (g) =>
                        g ? "([eE]" + R({ signed: r.eSigned }) + ")" : ""
                      )
                  );
                })(h) +
                ")"
            );
          }),
        !0
      ).replace(/[\xa0 ]/g, "[\\s\\xa0]"),
      group: s,
      decimal: l,
      factor: i,
    }
  );
}
function G(e, t) {
  const n = L(t),
    s = new RegExp("^" + n.regexp + "$").exec(e);
  if (!s) return NaN;
  let l = s[1];
  if (!s[1]) {
    if (!s[2]) return NaN;
    (l = s[2]), (n.factor *= -1);
  }
  return (
    (l = l
      .replace(new RegExp("[" + n.group + "\\s\\xa0]", "g"), "")
      .replace(n.decimal, ".")),
    Number(l) * n.factor
  );
}
function R(e) {
  return (
    "signed" in (e = e || {}) || (e.signed = [!0, !1]),
    "separator" in e
      ? "groupSize" in e || (e.groupSize = 3)
      : (e.separator = ""),
    w(e.signed, (t) => (t ? "[-+]" : ""), !0) +
      w(
        e.separator,
        (t) => {
          if (!t) return "(?:\\d+)";
          (t = A(t)) === " " ? (t = "\\s") : t === " " && (t = "\\s\\xa0");
          const n = e.groupSize,
            s = e.groupSize2;
          if (s) {
            const l =
              "(?:0|[1-9]\\d{0," +
              (s - 1) +
              "}(?:[" +
              t +
              "]\\d{" +
              s +
              "})*[" +
              t +
              "]\\d{" +
              n +
              "})";
            return n - s > 0
              ? "(?:" + l + "|(?:0|[1-9]\\d{0," + (n - 1) + "}))"
              : l;
          }
          return (
            "(?:0|[1-9]\\d{0," + (n - 1) + "}(?:[" + t + "]\\d{" + n + "})*)"
          );
        },
        !0
      )
  );
}
const w = (e, t, n) => {
    if (!(e instanceof Array)) return t(e);
    const s = [];
    for (let l = 0; l < e.length; l++) s.push(t(e[l]));
    return $(s.join("|"), Boolean(n));
  },
  $ = (e, t) => "(" + (t ? "?:" : "") + e + ")";
export { L as a, G as p, D as s };
