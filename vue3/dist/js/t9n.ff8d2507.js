import { hu as $, hv as I, hw as y } from "./index.8fd7165c.js";
import { c as O } from "./observers.139d1c5a.js";
function k(t) {
  return t === "Enter" || t === " ";
}
const b = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  N = new RegExp("-", "g"),
  D = new RegExp("\\.?0+$");
class s {
  constructor(e) {
    if (
      ((this.add = (n) => s.fromBigInt(this.value + new s(n).value)),
      (this.subtract = (n) => s.fromBigInt(this.value - new s(n).value)),
      (this.multiply = (n) =>
        s._divRound(this.value * new s(n).value, s.SHIFT)),
      (this.divide = (n) => s._divRound(this.value * s.SHIFT, new s(n).value)),
      e instanceof s)
    )
      return e;
    const [i, r] = String(e).split(".").concat("");
    (this.value =
      BigInt(i + r.padEnd(s.DECIMALS, "0").slice(0, s.DECIMALS)) +
      BigInt(s.ROUNDED && r[s.DECIMALS] >= "5")),
      (this.isNegative = e.charAt(0) === "-");
  }
  getIntegersAndDecimals() {
    const e = this.value
      .toString()
      .replace(N, "")
      .padStart(s.DECIMALS + 1, "0");
    return {
      integers: e.slice(0, -s.DECIMALS),
      decimals: e.slice(-s.DECIMALS).replace(D, ""),
    };
  }
  toString() {
    const { integers: e, decimals: i } = this.getIntegersAndDecimals();
    return `${this.isNegative ? "-" : ""}${e}${i.length ? "." + i : ""}`;
  }
  formatToParts(e) {
    const { integers: i, decimals: r } = this.getIntegersAndDecimals(),
      n = e.numberFormatter.formatToParts(BigInt(i));
    return (
      this.isNegative && n.unshift({ type: "minusSign", value: e.minusSign }),
      r.length &&
        (n.push({ type: "decimal", value: e.decimal }),
        r.split("").forEach((a) => n.push({ type: "fraction", value: a }))),
      n
    );
  }
  format(e) {
    const { integers: i, decimals: r } = this.getIntegersAndDecimals();
    return `${`${this.isNegative ? e.minusSign : ""}${e.numberFormatter.format(
      BigInt(i)
    )}`}${
      r.length
        ? `${e.decimal}${r
            .split("")
            .map((n) => e.numberFormatter.format(Number(n)))
            .join("")}`
        : ""
    }`;
  }
}
function p(t) {
  return !(!t || isNaN(Number(t)));
}
function T(t) {
  return t && ((e = t), b.some((i) => e.includes(i)))
    ? m(t, (i) => {
        let r = !1;
        const n = i
          .split("")
          .filter((a, c) =>
            a.match(/\./g) && !r
              ? ((r = !0), !0)
              : !(!a.match(/\-/g) || c !== 0) || b.includes(a)
          )
          .reduce((a, c) => a + c);
        return p(n) ? new s(n).toString() : "";
      })
    : "";
  var e;
}
(s.DECIMALS = 100),
  (s.ROUNDED = !0),
  (s.SHIFT = BigInt("1" + "0".repeat(s.DECIMALS))),
  (s._divRound = (t, e) =>
    s.fromBigInt(
      t / e + (s.ROUNDED ? ((t * BigInt(2)) / e) % BigInt(2) : BigInt(0))
    )),
  (s.fromBigInt = (t) =>
    Object.assign(Object.create(s.prototype), { value: t }));
const _ = /^([-0])0+(?=\d)/,
  C = /(?!^\.)\.$/,
  A = /(?!^-)-/g,
  B = /^-\b0\b\.?0*$/,
  H = (t) =>
    m(t, (e) => {
      const i = e.replace(A, "").replace(C, "").replace(_, "$1");
      return p(i) ? (B.test(i) ? i : new s(i).toString()) : e;
    });
function m(t, e) {
  if (!t) return t;
  const i = t.toLowerCase().indexOf("e") + 1;
  return i
    ? t
        .replace(/[eE]*$/g, "")
        .substring(0, i)
        .concat(t.slice(i).replace(/[eE]/g, ""))
        .split(/[eE]/)
        .map((r, n) => e(n === 1 ? r.replace(/\./g, "") : r))
        .join("e")
        .replace(/^e/, "1e")
    : e(t);
}
const o = "en",
  L = [
    "ar",
    "bg",
    "bs",
    "ca",
    "cs",
    "da",
    "de",
    "el",
    o,
    "es",
    "et",
    "fi",
    "fr",
    "he",
    "hr",
    "hu",
    "id",
    "it",
    "ja",
    "ko",
    "lt",
    "lv",
    "no",
    "nl",
    "pl",
    "pt-BR",
    "pt-PT",
    "ro",
    "ru",
    "sk",
    "sl",
    "sr",
    "sv",
    "th",
    "tr",
    "uk",
    "vi",
    "zh-CN",
    "zh-HK",
    "zh-TW",
  ],
  M = [
    "ar",
    "bg",
    "bs",
    "ca",
    "cs",
    "da",
    "de",
    "de-CH",
    "el",
    o,
    "en-AU",
    "en-CA",
    "en-GB",
    "es",
    "es-MX",
    "et",
    "fi",
    "fr",
    "fr-CH",
    "he",
    "hi",
    "hr",
    "hu",
    "id",
    "it",
    "it-CH",
    "ja",
    "ko",
    "lt",
    "lv",
    "mk",
    "no",
    "nl",
    "pl",
    "pt",
    "pt-PT",
    "ro",
    "ru",
    "sk",
    "sl",
    "sr",
    "sv",
    "th",
    "tr",
    "uk",
    "vi",
    "zh-CN",
    "zh-HK",
    "zh-TW",
  ],
  R = [
    "arab",
    "arabext",
    "bali",
    "beng",
    "deva",
    "fullwide",
    "gujr",
    "guru",
    "hanidec",
    "khmr",
    "knda",
    "laoo",
    "latn",
    "limb",
    "mlym",
    "mong",
    "mymr",
    "orya",
    "tamldec",
    "telu",
    "thai",
    "tibt",
  ],
  w = (t) => R.includes(t),
  g = new Intl.NumberFormat().resolvedOptions().numberingSystem,
  v = g !== "arab" && w(g) ? g : "latn";
function E(t, e = "cldr") {
  const i = e === "cldr" ? M : L;
  return t
    ? i.includes(t)
      ? t
      : (t = t.toLowerCase()) === "nb"
      ? "no"
      : e === "t9n" && t === "pt"
      ? "pt-BR"
      : (t.includes("-") &&
          ((t = t.replace(
            /(\w+)-(\w+)/,
            (r, n, a) => `${n}-${a.toUpperCase()}`
          )),
          i.includes(t) || (t = t.split("-")[0])),
        t === "zh" ? "zh-CN" : i.includes(t) ? t : o)
    : o;
}
const l = new Set();
function G(t) {
  (function (e) {
    e.effectiveLocale = (function (i) {
      var r;
      return (
        i.el.lang ||
        ((r = I(i.el, "[lang]")) == null ? void 0 : r.lang) ||
        document.documentElement.lang ||
        o
      );
    })(e);
  })(t),
    l.size === 0 &&
      (u == null ||
        u.observe(document.documentElement, {
          attributes: !0,
          attributeFilter: ["lang"],
          subtree: !0,
        })),
    l.add(t);
}
function P(t) {
  l.delete(t), l.size === 0 && u.disconnect();
}
const u = O("mutation", (t) => {
    t.forEach((e) => {
      const i = e.target;
      l.forEach((r) => {
        if (!$(i, r.el)) return;
        const n = I(r.el, "[lang]");
        if (!n) return void (r.effectiveLocale = o);
        const a = n.lang;
        r.effectiveLocale = n.hasAttribute("lang") && a === "" ? o : a;
      });
    });
  }),
  U = new (class {
    constructor() {
      (this.delocalize = (t) =>
        this._numberFormatOptions
          ? m(t, (e) =>
              e
                .trim()
                .replace(new RegExp(`[${this._minusSign}]`, "g"), "-")
                .replace(new RegExp(`[${this._group}]`, "g"), "")
                .replace(new RegExp(`[${this._decimal}]`, "g"), ".")
                .replace(
                  new RegExp(`[${this._digits.join("")}]`, "g"),
                  this._getDigitIndex
                )
            )
          : t),
        (this.localize = (t) =>
          this._numberFormatOptions
            ? m(t, (e) =>
                p(e.trim())
                  ? new s(e.trim())
                      .format(this)
                      .replace(
                        new RegExp(`[${this._actualGroup}]`, "g"),
                        this._group
                      )
                  : e
              )
            : t);
    }
    get group() {
      return this._group;
    }
    get decimal() {
      return this._decimal;
    }
    get minusSign() {
      return this._minusSign;
    }
    get digits() {
      return this._digits;
    }
    get numberFormatter() {
      return this._numberFormatter;
    }
    get numberFormatOptions() {
      return this._numberFormatOptions;
    }
    set numberFormatOptions(t) {
      var e;
      if (
        ((t.locale = E(t == null ? void 0 : t.locale)),
        (t.numberingSystem =
          ((e = t == null ? void 0 : t.numberingSystem), w(e) ? e : v)),
        (!this._numberFormatOptions &&
          t.locale === o &&
          t.numberingSystem === v &&
          Object.keys(t).length === 2) ||
          JSON.stringify(this._numberFormatOptions) === JSON.stringify(t))
      )
        return;
      (this._numberFormatOptions = t),
        (this._numberFormatter = new Intl.NumberFormat(
          this._numberFormatOptions.locale,
          this._numberFormatOptions
        )),
        (this._digits = [
          ...new Intl.NumberFormat(this._numberFormatOptions.locale, {
            useGrouping: !1,
            numberingSystem: this._numberFormatOptions.numberingSystem,
          }).format(9876543210),
        ].reverse());
      const i = new Map(this._digits.map((n, a) => [n, a])),
        r = new Intl.NumberFormat(
          this._numberFormatOptions.locale
        ).formatToParts(-123456789e-1);
      (this._actualGroup = r.find((n) => n.type === "group").value),
        (this._group =
          this._actualGroup.trim().length === 0 ? " " : this._actualGroup),
        (this._decimal = r.find((n) => n.type === "decimal").value),
        (this._minusSign = r.find((n) => n.type === "minusSign").value),
        (this._getDigitIndex = (n) => i.get(n));
    }
  })(),
  h = {};
function S() {
  throw new Error("could not fetch component message bundle");
}
function d(t) {
  t.messages = { ...t.defaultMessages, ...t.messageOverrides };
}
async function J(t) {
  (t.defaultMessages = await F(t, t.effectiveLocale)), d(t);
}
async function F(t, e) {
  const { el: i } = t,
    r = i.tagName.toLowerCase().replace("calcite-", "");
  return (async function (n, a) {
    const c = `${a}_${n}`;
    return (
      h[c] ||
        (h[c] = fetch(y(`./assets/${a}/t9n/messages_${n}.json`))
          .then((f) => (f.ok || S(), f.json()))
          .catch(() => S())),
      h[c]
    );
  })(E(e, "t9n"), r);
}
async function K(t, e) {
  (t.defaultMessages = await F(t, e)), d(t);
}
function W(t) {
  t.onMessagesChange = x;
}
function X(t) {
  t.onMessagesChange = void 0;
}
function x() {
  d(this);
}
export {
  W as a,
  X as b,
  G as c,
  P as d,
  p as e,
  H as f,
  v as g,
  b as h,
  k as i,
  U as n,
  T as p,
  J as s,
  K as u,
};
